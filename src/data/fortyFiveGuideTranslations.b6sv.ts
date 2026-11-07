// fortyFiveGuideTranslations.bsv.ts: 45-45-90 Triangle
// Guide (Page 40 of 45) translation.
export const FORTYFIVE_B6_SV = {
  "sv": {
      "meta": {
        "title": "45-45-90-triangelkalkylator – Hypotenusa, katet, area, omkrets",
        "description": "Beräkna hypotenusan, den saknade kateten, arean och omkretsen av en 45-45-90-triangel utifrån en känd katet med det fasta förhållandet 1:1:√2 och exakta svar med rotuttryck.",
        "primaryKeyword": "45-45-90 Triangle Calculator",
        "slug": "45-45-90-triangle-calculator",
      },
      "tocHeading": "Avsnittsnavigering",
      "tocItems": {
        "sec-intro": "45-45-90-triangelkalkylator",
        "sec-calculate": "Beräkna hypotenusan, kateten, arean eller omkretsen",
        "sec-what": "Vad är en 45-45-90-triangel?",
        "sec-isosceles": "Varför kallas den en likbent rätvinklig triangel?",
        "sec-legs": "De två lika kateterna och hypotenusan",
        "sec-ratio": "Sidförhållandet i en 45-45-90-triangel",
        "sec-why-sqrt2": "Varför dyker kvadratroten ur 2 upp?",
        "sec-hypotenuse": "Formel för hypotenusan utifrån en katet",
        "sec-leg-hyp": "Formel för en katet utifrån hypotenusan",
        "sec-area": "Så beräknar du arean av en 45-45-90-triangel",
        "sec-perimeter": "Så beräknar du omkretsen av en 45-45-90-triangel",
        "sec-square": "Hur en kvadratdiagonal skapar en 45-45-90-triangel",
        "sec-step-example": "Steg-för-steg-exempel på att lösa en 45-45-90-triangel",
        "sec-examples": "Genomräknade exempel på 45-45-90-beräkningar",
        "sec-exact": "Exakta svar kontra decimala approximationer",
        "sec-verify": "Så kontrollerar du dina 45-45-90-beräkningar",
        "sec-properties": "Viktiga egenskaper hos 45-45-90-trianglar",
        "sec-vs-3060": "Skillnaden mellan 45-45-90- och 30-60-90-trianglar",
        "sec-mistakes": "Vanliga misstag vid lösning av 45-45-90-trianglar",
        "sec-applications": "Praktiska tillämpningar av 45-45-90-trianglar",
        "sec-practice": "Övningsuppgifter med svar",
        "sec-related": "Relaterade rätvinkliga triangelkalkylatorer",
        "sec-faq": "Vanliga frågor",
      },
      "sections": {
        "sec-intro": {
          "h2": "45-45-90-triangelkalkylator",
          "blocks": [
            {
              "kind": "p",
              "text": "Beräkna hypotenusan, den saknade kateten, arean och omkretsen av en 45-45-90-triangel utifrån en känd sida.",
            },
            {
              "kind": "p",
              "text": "En 45-45-90-triangel är en rätvinklig triangel vars tre vinklar mäter 45°, 45° och 90°. Den kallas en likbent rätvinklig triangel eftersom dess två kateter är lika långa, och den kallas en speciell rätvinklig triangel eftersom dess sidor alltid följer samma fasta förhållande, oavsett hur stor eller liten triangeln är. 45-45-90-triangelkalkylatorn på den här sidan använder det förhållandet för att beräkna hypotenusan, den saknade kateten, arean och omkretsen utifrån en enda sidlängd som du anger.",
            },
            {
              "kind": "p",
              "text": "I triangeln ABC är vinkel A 45°, vinkel B 45° och vinkel C 90°. Sidan BC är den första kateten [[a]], sidan AC är den andra kateten [[b]] och sidan AB är hypotenusan [[c]]. Eftersom de två spetsiga vinklarna är lika är de två kateterna lika, [[a = b]], och de tre sidorna uppfyller alltid förhållandet [[a : b : c = 1 : 1 : \\sqrt{2}]], vilket betyder [[c = a\\sqrt{2}]].",
            },
            {
              "kind": "p",
              "text": "Om [[a = 5]] cm är den andra kateten [[b = 5]] cm, hypotenusan [[c = 5\\sqrt{2} \\approx 7.071]] cm och arean [[A = \\frac{25}{2} = 12.5]] cm². Kalkylatorn kan också beräkna omkretsen utifrån samma katet, så en mätning räcker för att beskriva hela triangeln. Avsnitten nedan förklarar förhållandet, de fyra kalkylatorlägena och formlerna, med genomräknade exempel i varje steg.",
            },
          ],
        },
        "sec-calculate": {
          "h2": "Beräkna hypotenusan, kateten, arean eller omkretsen",
          "blocks": [
            {
              "kind": "p",
              "text": "Fyra lägen täcker alla sätt att börja från en känd sida.",
            },
            {
              "kind": "p",
              "text": "Kalkylatorn på den här sidan har fyra lägen, ett för varje mått den kan beräkna. Välj det läge som matchar den sida du känner till och det mått du behöver. Varje läge kräver bara en inmatning, eftersom det fasta förhållandet fyller i allt annat. Tabellen nedan listar alla fyra lägen med den inmatning varje läge behöver och det resultat det ger.",
            },
            {
              "kind": "p",
              "text": "För att använda ett läge måste du först ta reda på vilken sida du känner till. Sidan mittemot en 45°-vinkel är en katet, och vilken katet som helst kan användas som [[a]], eftersom kateterna är lika. Sidan mittemot 90°-vinkeln är hypotenusan [[c]]. Ange det måttet som ett positivt tal, välj en enhet och klicka på knappen Beräkna. Resultatet visas med steg-för-steg-uträkning, så att du kan se formeln och insättningen, inte bara svaret. Använd Återställ för att rensa fälten innan du börjar en ny uppgift.",
            },
            {
              "kind": "p",
              "text": "Olika lägen behöver olika formler eftersom varje läge börjar från en annan känd sida. Att beräkna hypotenusan utifrån en katet innebär att multiplicera med √2, medan att beräkna en katet utifrån hypotenusan innebär att dividera med √2. Arealäget kvadrerar kateten och halverar resultatet, och omkretsläget adderar alla tre sidor. Du behöver aldrig beräkna de saknade sidorna själv innan du använder area- eller omkretsläget, eftersom kalkylatorn först beräknar dem internt.",
            },
            {
              "kind": "p",
              "text": "De fyra formlerna är [[c = a\\sqrt{2}]] för hypotenusan, [[a = \\frac{c}{\\sqrt{2}}]] för en katet, [[A = \\frac{a^2}{2}]] för arean och [[P = a(2 + \\sqrt{2})]] för omkretsen. Håll enheterna desamma genom hela beräkningen: en katet angiven i centimeter ger en hypotenusa i centimeter och en area i kvadratcentimeter. Kalkylatorn beräknar inte den omskrivna cirkelns radie, den inskrivna cirkelns radie eller mått för trianglar som inte är 45-45-90-trianglar, så bekräfta vinklarna innan du använder den.",
            },
          ],
          "table": {
            "headers": [
              "Kalkylatorläge",
              "Inmatning som krävs",
              "Resultat",
            ],
            "rows": [
              [
                "Beräkna hypotenusan utifrån katet",
                "Katet a",
                "Hypotenusa c",
              ],
              [
                "Beräkna katet utifrån hypotenusa",
                "Hypotenusa c",
                "Katet a",
              ],
              [
                "Beräkna area utifrån katet",
                "Katet a",
                "Area A",
              ],
              [
                "Beräkna omkrets utifrån katet",
                "Katet a",
                "Omkrets P",
              ],
            ],
          },
        },
        "sec-what": {
          "h2": "Vad är en 45-45-90-triangel?",
          "blocks": [
            {
              "kind": "p",
              "text": "En 45-45-90-triangel har fått sitt namn efter sina tre vinklar.",
            },
            {
              "kind": "p",
              "text": "Det är en rätvinklig triangel, vilket betyder att en av dess vinklar är exakt 90°. De andra två vinklarna är båda 45°, och namnet listar alla tre vinklarna i ordning. Eftersom den räta vinkeln är fast och de andra två vinklarna också är fasta, är triangelns form fullständigt bestämd: varje 45-45-90-triangel har samma form, och två sådana trianglar skiljer sig bara i storlek.",
            },
            {
              "kind": "p",
              "text": "Den kallas en speciell rätvinklig triangel eftersom dess sidlängder följer ett fast förhållande. I de flesta rätvinkliga trianglar säger en känd sida ingenting om de andra. I en 45-45-90-triangel säger en känd sida allt om dem, eftersom förhållandet [[1 : 1 : \\sqrt{2}]] binder samman de tre sidorna. Det är därför kalkylatorn kan beräkna hypotenusan, arean och omkretsen utifrån en enda inmatning.",
            },
            {
              "kind": "p",
              "text": "De tre vinklarna blir tillsammans 180°, som de måste i varje triangel:",
            },
            {
              "kind": "p",
              "text": "[[[45^\\circ + 45^\\circ + 90^\\circ = 180^\\circ]]]",
            },
            {
              "kind": "p",
              "text": "Hypotenusan är den längsta sidan, eftersom den ligger mittemot den största vinkeln, 90°-vinkeln. De två kateterna är lika, eftersom de ligger mittemot lika vinklar. Triangeln kan vara så liten som några millimeter eller så stor som en byggtomt, och vinklarna förblir desamma medan sidorna skalas upp tillsammans. Förhållandet förblir också detsamma, så en triangel med kateten 5 cm och en triangel med kateten 5 m har samma form i olika storlekar.",
            },
          ],
          "image": {
            "src": "forty-five-ninety-main.svg",
            "alt": "Märkt 45-45-90-triangel ABC med vinklarna 45, 45 och 90 grader, lika kateter a och b samt hypotenusan c",
            "caption": "Triangel ABC: vinklarna 45°, 45° och 90°, med lika kateter a och b samt hypotenusan c.",
          },
        },
        "sec-isosceles": {
          "h2": "Varför kallas den en likbent rätvinklig triangel?",
          "blocks": [
            {
              "kind": "p",
              "text": "Namnet har två delar, och varje del beskriver ett faktum.",
            },
            {
              "kind": "p",
              "text": "Likbent betyder en triangel med två lika sidor. I en 45-45-90-triangel är de två lika sidorna kateterna [[a]] och [[b]]. Rätvinklig triangel betyder en triangel med en 90°-vinkel. Sätt ihop de två orden och namnet säger exakt vad triangeln är: en rätvinklig triangel med två lika sidor.",
            },
            {
              "kind": "p",
              "text": "De lika kateterna följer av de lika vinklarna. I varje triangel ligger lika vinklar mittemot lika sidor. Här är de två spetsiga vinklarna båda 45°, så sidorna mittemot dem måste vara lika. Sidan mittemot vinkel A är [[a]], och sidan mittemot vinkel B är [[b]], så [[a = b]]. Detta är ingen tillfällighet i en enda ritning: det gäller för varje 45-45-90-triangel, eftersom vinklarna alltid är desamma.",
            },
            {
              "kind": "p",
              "text": "Triangeln är symmetrisk kring höjden som dras från hörnet med den räta vinkeln till hypotenusan. Den höjden möter hypotenusan i dess mittpunkt och i rät vinkel, och den delar den stora triangeln i två mindre trianglar som är kongruenta med varandra. Varje liten triangel har vinklarna 45°, 45° och 90°, så varje sådan är i sig en 45-45-90-triangel, i halva skalan. Den symmetrin är ett annat sätt att se varför de två kateterna måste stämma överens: en vikning längs höjden avbildar den ena kateten på den andra.",
            },
            {
              "kind": "p",
              "text": "Höjden från hörnet med den räta vinkeln till hypotenusan har också en användbar längd: den är lika med halva hypotenusan. För en triangel med hypotenusan [[c]] är höjden [[\\frac{c}{2}]]. Detta faktum är praktiskt när en uppgift frågar efter triangelns höjd mätt från hypotenusan, och det är ytterligare en följd av formens symmetri.",
            },
          ],
        },
        "sec-legs": {
          "h2": "De två lika kateterna och hypotenusan",
          "blocks": [
            {
              "kind": "p",
              "text": "Två kateter möts vid den räta vinkeln, och hypotenusan ligger mittemot den.",
            },
            {
              "kind": "p",
              "text": "Katet [[a]] är den ena vinkelräta sidan, sidan BC i triangeln ABC. Katet [[b]] är den andra vinkelräta sidan, sidan AC. De två kateterna möts vid hörnet C, där de bildar 90°-vinkeln, så de är vinkelräta mot varandra. Vilken katet som helst kan användas som triangelns bas, med den andra kateten som höjd, vilket är anledningen till att areaformeln kan använda de två kateterna direkt.",
            },
            {
              "kind": "p",
              "text": "Hypotenusan [[c]] är sidan AB, mittemot 90°-vinkeln. Den är triangelns längsta sida, eftersom den största vinkeln alltid ligger mittemot den längsta sidan. Den är också den enda sidan som inte är en katet, så den får aldrig förväxlas med någon av kateterna. De två kateterna är lika, men hypotenusan är inte lika med dem: den är √2 gånger endera kateten, ungefär 1.414 gånger så lång.",
            },
            {
              "kind": "p",
              "text": "Eftersom kateterna är lika kan vilken som helst av dem användas som den kända kateten i kalkylatorn. Om en uppgift ger katet [[b]] i stället för katet [[a]], ange det värdet som kateten: resultatet blir detsamma, eftersom [[a = b]]. Samma frihet gäller inte hypotenusan, som behöver sitt eget läge. Att identifiera hypotenusan är enkelt i varje ritning: leta efter den lilla kvadraten som markerar den räta vinkeln, och sidan mittemot den är hypotenusan.",
            },
          ],
          "table": {
            "headers": [
              "Sida",
              "Motstående vinkel",
              "Längd",
            ],
            "rows": [
              [
                "Katet a (BC)",
                "45°",
                "a",
              ],
              [
                "Katet b (AC)",
                "45°",
                "a, lika med katet a",
              ],
              [
                "Hypotenusa c (AB)",
                "90°",
                "a√2, längsta sidan",
              ],
            ],
          },
        },
        "sec-ratio": {
          "h2": "Sidförhållandet i en 45-45-90-triangel",
          "blocks": [
            {
              "kind": "p",
              "text": "Förhållandet 1:1:√2 bestämmer varje 45-45-90-triangel.",
            },
            {
              "kind": "p",
              "text": "Sidförhållandet i en 45-45-90-triangel är:",
            },
            {
              "kind": "p",
              "text": "[[[a : b : c = 1 : 1 : \\sqrt{2}]]]",
            },
            {
              "kind": "p",
              "text": "Varje del av förhållandet beskriver en sida. Den första kateten motsvarar en enhet, den andra kateten motsvarar också en enhet, och hypotenusan motsvarar √2 enheter. Skrivet med kateten som [[a]] är de tre sidorna [[a = a]], [[b = a]] och [[c = a\\sqrt{2}]]. Om kateten är 1 cm är den andra kateten 1 cm och hypotenusan √2 cm. Om kateten är 10 cm är den andra kateten 10 cm och hypotenusan [[10\\sqrt{2}]] cm.",
            },
            {
              "kind": "p",
              "text": "Förhållandet förblir detsamma oavsett triangelns storlek, eftersom alla 45-45-90-trianglar är likformiga. Att skala upp eller ned en triangel multiplicerar varje sida med samma faktor, så proportionerna mellan sidorna ändras inte. Ta [[a = 4]] cm som exempel: den andra kateten är [[b = 4]] cm och hypotenusan är [[c = 4\\sqrt{2} \\approx 5.657]] cm, och förhållandet [[4 : 4 : 5.657]] är detsamma som [[1 : 1 : \\sqrt{2}]].",
            },
            {
              "kind": "p",
              "text": "Värdet av √2 är ungefär 1.41421356. Det är ett irrationellt tal, så dess decimalutveckling tar aldrig slut och upprepas aldrig, och inget decimaltal är exakt lika med det. Behåll den exakta formen med rotuttryck när du kan: att skriva [[4\\sqrt{2}]] cm är exakt, medan 5.657 cm är en avrundad approximation. Använd den exakta formen i din uträkning och i slutsvar när frågan ber om ett exakt värde, och ange decimaltalet bara när ett ungefärligt svar behövs.",
            },
          ],
          "image": {
            "src": "forty-five-ninety-ratio.svg",
            "alt": "Tre staplar som jämför de två lika kateterna och hypotenusan i förhållandet 1 till 1 till kvadratroten ur 2",
            "caption": "Det fasta förhållandet 1:1:√2 jämför de två lika kateterna med hypotenusan.",
          },
        },
        "sec-why-sqrt2": {
          "h2": "Varför dyker kvadratroten ur 2 upp?",
          "blocks": [
            {
              "kind": "p",
              "text": "Kvadratroten ur 2 kommer direkt från Pythagoras sats.",
            },
            {
              "kind": "p",
              "text": "Börja med de lika kateterna, [[a = b]], och tillämpa Pythagoras sats, som gäller för varje rätvinklig triangel:",
            },
            {
              "kind": "p",
              "text": "[[[a^2 + b^2 = c^2]]]",
            },
            {
              "kind": "p",
              "text": "Sätt in de lika kateterna genom att ersätta [[b]] med [[a]]:",
            },
            {
              "kind": "p",
              "text": "[[[a^2 + a^2 = c^2]]]",
            },
            {
              "kind": "p",
              "text": "Slå ihop de två identiska termerna:",
            },
            {
              "kind": "p",
              "text": "[[[2a^2 = c^2]]]",
            },
            {
              "kind": "p",
              "text": "Ta den positiva kvadratroten ur båda leden. Sidlängder är positiva, så den negativa roten förkastas:",
            },
            {
              "kind": "p",
              "text": "[[[c = a\\sqrt{2}]]]",
            },
            {
              "kind": "p",
              "text": "Det är hela anledningen till att √2 dyker upp: två lika kvadrater blir tillsammans dubbelt så mycket som en kvadrat, och kvadratroten ur 2 är det tal som upphäver den fördubblingen. Detta är ett speciellt samband, inte en ungefärlig genväg. Det följer av de lika kateterna plus Pythagoras sats, och det gäller för varje 45-45-90-triangel utan undantag.",
            },
            {
              "kind": "p",
              "text": "Använd [[a = 5]] cm som en numerisk kontroll:",
            },
            {
              "kind": "p",
              "text": "[[[c = \\sqrt{5^2 + 5^2}]]]",
            },
            {
              "kind": "p",
              "text": "[[[c = \\sqrt{50}]]]",
            },
            {
              "kind": "p",
              "text": "[[[c = 5\\sqrt{2}]]]",
            },
            {
              "kind": "p",
              "text": "[[[c \\approx 7.071 \\text{ cm}]]]",
            },
            {
              "kind": "p",
              "text": "Steget från √50 till [[5\\sqrt{2}]] fungerar eftersom [[50 = 25 \\times 2]], och kvadratroten ur 25 är 5. Att förenkla rotuttrycket på det här sättet håller svaret exakt och gör mönstret synligt: hypotenusan är alltid kateten gånger √2, oavsett katetens längd.",
            },
          ],
          "image": {
            "src": "forty-five-ninety-pythagoras.svg",
            "alt": "Härledning med Pythagoras sats som visar att a i kvadrat plus a i kvadrat är lika med c i kvadrat, vilket leder till att c är lika med a gånger kvadratroten ur 2",
            "caption": "Från a² + a² = c² måste hypotenusan vara a√2.",
          },
        },
        "sec-hypotenuse": {
          "h2": "Formel för hypotenusan utifrån en katet",
          "blocks": [
            {
              "kind": "p",
              "text": "Multiplicera endera kateten med √2 för att få hypotenusan.",
            },
            {
              "kind": "p",
              "text": "[[[c = a\\sqrt{2}]]]",
            },
            {
              "kind": "p",
              "text": "Här är [[c]] hypotenusan och [[a]] endera kateten. Formeln är en direkt avläsning av sidförhållandet: hypotenusan motsvarar √2 enheter för varje 1 enhet katet, så hypotenusan är √2 gånger kateten. Multiplikation krävs eftersom förhållandet är ett skalningsförhållande, och √2 dyker upp eftersom Pythagoras sats tvingar hypotenusan att vara så mycket längre än en katet.",
            },
            {
              "kind": "p",
              "text": "Använd [[a = 5]] cm:",
            },
            {
              "kind": "p",
              "text": "[[[c = 5\\sqrt{2}]]]",
            },
            {
              "kind": "p",
              "text": "[[[c \\approx 7.071 \\text{ cm}]]]",
            },
            {
              "kind": "p",
              "text": "Resultatet är längre än endera kateten, som det måste vara: √2 är ungefär 1.414, så att multiplicera med det ökar längden. Det exakta svaret är [[5\\sqrt{2}]] cm, och 7.071 cm är decimalapproximationen. Behåll den exakta formen när frågan ber om den, och avrunda decimaltalet först i slutet av din uträkning, aldrig mitt i.",
            },
            {
              "kind": "p",
              "text": "Använd det här läget när en katet är den kända sidan och hypotenusan är den okända. Eftersom kateterna är lika spelar det ingen roll vilken katet uppgiften ger: ange den som [[a]] och formeln ger samma hypotenusa. En snabb rimlighetskontroll hjälper: hypotenusan bör bli ungefär 1.414 gånger kateten. Om ditt svar är dubbelt så stort som kateten, eller bara lite längre än kateten, har du använt fel multiplikator.",
            },
          ],
          "image": {
            "src": "forty-five-ninety-hypotenuse.svg",
            "alt": "45-45-90-triangel med kateten 5 cm och hypotenusan märkt 5 gånger kvadratroten ur 2, ungefär 7.071 cm",
            "caption": "Hypotenusa utifrån en katet: a = 5 cm ger c = 5√2 ≈ 7.071 cm.",
          },
        },
        "sec-leg-hyp": {
          "h2": "Formel för en katet utifrån hypotenusan",
          "blocks": [
            {
              "kind": "p",
              "text": "Dividera hypotenusan med √2 för att få en katet.",
            },
            {
              "kind": "p",
              "text": "[[[a = \\frac{c}{\\sqrt{2}}]]]",
            },
            {
              "kind": "p",
              "text": "Här är [[a]] endera kateten och [[c]] hypotenusan. Den här formeln kommer från att lösa ut [[c = a\\sqrt{2}]]: att dividera båda leden med √2 isolerar [[a]]. Att dividera med √2 reverserar den ursprungliga multiplikationen, så det upphäver exakt vad den framåtriktade formeln gjorde. Den andra kateten har samma längd, så en beräkning ger båda kateterna på en gång.",
            },
            {
              "kind": "p",
              "text": "Den rationaliserade formen är oftast lättare att arbeta med:",
            },
            {
              "kind": "p",
              "text": "[[[a = \\frac{c\\sqrt{2}}{2}]]]",
            },
            {
              "kind": "p",
              "text": "Den kommer från att multiplicera täljaren och nämnaren i [[\\frac{c}{\\sqrt{2}}]] med √2. Nämnaren blir [[\\sqrt{2} \\times \\sqrt{2} = 2]], och täljaren blir [[c\\sqrt{2}]]. De två formerna ger samma värde, men den rationaliserade formen har ingen kvadratrot i nämnaren, vilket är den form som provsvar förväntar sig.",
            },
            {
              "kind": "p",
              "text": "Använd [[c = 10]] cm:",
            },
            {
              "kind": "p",
              "text": "[[[a = \\frac{10}{\\sqrt{2}}]]]",
            },
            {
              "kind": "p",
              "text": "[[[a = 5\\sqrt{2}]]]",
            },
            {
              "kind": "p",
              "text": "[[[a \\approx 7.071 \\text{ cm}]]]",
            },
            {
              "kind": "p",
              "text": "Båda kateterna är [[5\\sqrt{2}]] cm, ungefär 7.071 cm vardera. Kateten är kortare än hypotenusan, som den måste vara, eftersom division med ett tal större än 1 minskar värdet. Om ditt svar blir längre än hypotenusan har du multiplicerat i stället för att dividera, eller dividerat med fel tal.",
            },
          ],
          "image": {
            "src": "forty-five-ninety-leg.svg",
            "alt": "45-45-90-triangel med hypotenusan 10 cm och varje katet märkt 5 gånger kvadratroten ur 2, ungefär 7.071 cm",
            "caption": "Katet utifrån hypotenusa: c = 10 cm ger a = b = 5√2 ≈ 7.071 cm.",
          },
        },
        "sec-area": {
          "h2": "Så beräknar du arean av en 45-45-90-triangel",
          "blocks": [
            {
              "kind": "p",
              "text": "Arean behöver bara en katet, eftersom kateterna är lika.",
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
              "text": "Eftersom [[a = b]], sätt in för att få arean utifrån en enda katet:",
            },
            {
              "kind": "p",
              "text": "[[[A = \\frac{a^2}{2}]]]",
            },
            {
              "kind": "p",
              "text": "Division med två är nödvändig eftersom en triangel täcker hälften av den rektangel som bildas av dess två kateter. Den slutliga arean uttrycks i kvadratiska enheter, till exempel kvadratcentimeter, eftersom area mäter yta, inte längd. En kvadrat med sidan [[a]] har arean [[a^2]], och triangeln är exakt hälften av den kvadraten, vilket är ett annat sätt att se varför formeln är [[\\frac{a^2}{2}]].",
            },
            {
              "kind": "p",
              "text": "Använd [[a = 6]] cm:",
            },
            {
              "kind": "p",
              "text": "[[[A = \\frac{6 \\times 6}{2}]]]",
            },
            {
              "kind": "p",
              "text": "[[[A = \\frac{36}{2}]]]",
            },
            {
              "kind": "p",
              "text": "[[[A = 18 \\text{ cm}^2]]]",
            },
            {
              "kind": "p",
              "text": "Kalkylatorns arealäge tar emot kateten och beräknar arean direkt, så du anger bara [[a]]. Om du känner till hypotenusan i stället för kateten, beräkna först kateten med [[a = \\frac{c}{\\sqrt{2}}]] och använd sedan [[A = \\frac{a^2}{2}]]. Det finns också en genväg direkt från hypotenusan: [[A = \\frac{c^2}{4}]], som ger samma resultat. För [[c = 10]] cm ger den [[A = \\frac{100}{4} = 25]] cm².",
            },
            {
              "kind": "p",
              "text": "Arean växer med kvadraten på kateten, så att fördubbla kateten fyrdubblar arean. En triangel med [[a = 12]] cm har fyra gånger arean av triangeln med [[a = 6]] cm, 72 cm² i stället för 18 cm², inte dubbelt så mycket. Det kvadratiska sambandet är lätt att glömma, så kontrollera det när en uppgift skalar upp eller ned en triangel.",
            },
          ],
          "image": {
            "src": "forty-five-ninety-area-perimeter.svg",
            "alt": "45-45-90-triangel med kateten 6 cm, hypotenusan 6 gånger kvadratroten ur 2 cm, area 18 kvadratcentimeter och omkrets ungefär 20.485 cm",
            "caption": "Area och omkrets utifrån kateten: a = 6 cm ger A = 18 cm² och P ≈ 20.485 cm.",
          },
        },
        "sec-perimeter": {
          "h2": "Så beräknar du omkretsen av en 45-45-90-triangel",
          "blocks": [
            {
              "kind": "p",
              "text": "Addera alla tre sidor och bryt sedan ut kateten.",
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
              "text": "Eftersom [[a = b]] och [[c = a\\sqrt{2}]], sätt in dessa samband:",
            },
            {
              "kind": "p",
              "text": "[[[P = 2a + a\\sqrt{2}]]]",
            },
            {
              "kind": "p",
              "text": "Bryt ut [[a]] för att få den förenklade formen:",
            },
            {
              "kind": "p",
              "text": "[[[P = a(2 + \\sqrt{2})]]]",
            },
            {
              "kind": "p",
              "text": "Alla tre sidlängder ingår, eftersom omkretsen följer triangelns hela gräns: ned längs den ena kateten, över den andra kateten och tillbaka längs hypotenusan. Att utelämna någon sida ger en kortare sträcka som inte är omkretsen. Omkrets är ett linjärt mått, inte ett areamått, så svaret anges i vanliga enheter som centimeter, aldrig kvadratcentimeter.",
            },
            {
              "kind": "p",
              "text": "Använd [[a = 5]] cm:",
            },
            {
              "kind": "p",
              "text": "[[[P = 5(2 + \\sqrt{2})]]]",
            },
            {
              "kind": "p",
              "text": "[[[P = 10 + 5\\sqrt{2}]]]",
            },
            {
              "kind": "p",
              "text": "[[[P \\approx 17.071 \\text{ cm}]]]",
            },
            {
              "kind": "p",
              "text": "Den exakta formen är [[10 + 5\\sqrt{2}]] cm, och 17.071 cm är decimalformen. Kalkylatorns omkretsläge tar emot kateten och adderar de tre sidorna internt. Det finns också en genväg direkt från hypotenusan: [[P = c(1 + \\sqrt{2})]]. För [[c = 10]] cm ger den [[P = 10(1 + \\sqrt{2}) \\approx 24.142]] cm. Omkretsen växer i direkt proportion till kateten, så att fördubbla kateten fördubblar omkretsen.",
            },
          ],
        },
        "sec-square": {
          "h2": "Hur en kvadratdiagonal skapar en 45-45-90-triangel",
          "blocks": [
            {
              "kind": "p",
              "text": "En diagonal delar en kvadrat i två identiska 45-45-90-trianglar.",
            },
            {
              "kind": "p",
              "text": "En kvadrat har fyra lika sidor och fyra 90°-hörn. Rita en diagonal över den, från ett hörn till det motsatta hörnet, och kvadraten delas i två trianglar. Varje triangel har två sidor som är sidor av kvadraten, så de två sidorna är lika, och vinkeln mellan dem är ett hörn av kvadraten, 90°. Diagonalen är den tredje sidan, mittemot den räta vinkeln, så den är hypotenusan.",
            },
            {
              "kind": "p",
              "text": "Diagonalen halverar också de två hörnvinklar den passerar genom. Varje hörn av kvadraten är 90°, och diagonalen delar det i två 45°-vinklar. Det ger varje triangel vinklarna 45°, 45° och 90°, vilket är exakt en 45-45-90-triangel. De två trianglarna är kongruenta: de har samma sidlängder och samma vinklar, eftersom de delar diagonalen och var och en tar två sidor av samma kvadrat.",
            },
            {
              "kind": "p",
              "text": "Använd en kvadrat med sidlängden [[a]]. Diagonalen [[d]] är triangelns hypotenusa, så Pythagoras sats ger:",
            },
            {
              "kind": "p",
              "text": "[[[d^2 = a^2 + a^2]]]",
            },
            {
              "kind": "p",
              "text": "[[[d^2 = 2a^2]]]",
            },
            {
              "kind": "p",
              "text": "[[[d = a\\sqrt{2}]]]",
            },
            {
              "kind": "p",
              "text": "Använd en kvadrat med sidan 8 cm:",
            },
            {
              "kind": "p",
              "text": "[[[d = 8\\sqrt{2}]]]",
            },
            {
              "kind": "p",
              "text": "[[[d \\approx 11.314 \\text{ cm}]]]",
            },
            {
              "kind": "p",
              "text": "Det är därför beräkningar av kvadratdiagonaler alltid använder samma √2-samband. När du behöver diagonalen av en kvadrat, multiplicera sidan med √2; när du känner till diagonalen och behöver sidan, dividera den med √2. Samma regel gäller för kvadratiska kakelplattor, kvadratiska tavelramar, kvadratiska tomter och varje annan kvadratisk form, eftersom varje kvadrat delas på samma sätt.",
            },
          ],
          "image": {
            "src": "forty-five-ninety-square-diagonal.svg",
            "alt": "Kvadrat med sidan 8 cm delad av en diagonal i två kongruenta 45-45-90-trianglar, diagonalen ungefär 11.314 cm",
            "caption": "En kvadratdiagonal med sidan 8 cm är d = 8√2 ≈ 11.314 cm.",
          },
        },
        "sec-step-example": {
          "h2": "Steg-för-steg-exempel på att lösa en 45-45-90-triangel",
          "blocks": [
            {
              "kind": "p",
              "text": "En triangel, a = 5 cm, genomräknad från början till slut.",
            },
            {
              "kind": "p",
              "text": "Börja med kateten [[a = 5]] cm och beräkna varje annat mått i triangeln, en formel i taget. Varje steg använder en formel från avsnitten ovan, och sammanfattningstabellen i slutet samlar resultaten.",
            },
            {
              "kind": "steps",
              "steps": [
                "Beräkna den andra kateten: kateterna är lika, så [[b = 5]] cm.",
                "Beräkna hypotenusan: [[c = a\\sqrt{2} = 5\\sqrt{2} \\approx 7.071]] cm.",
                "Beräkna arean: [[A = \\frac{a^2}{2} = \\frac{25}{2} = 12.5]] kvadratcentimeter.",
                "Beräkna omkretsen: [[P = a + b + c = 5 + 5 + 5\\sqrt{2} = 10 + 5\\sqrt{2} \\approx 17.071]] cm.",
              ],
            },
            {
              "kind": "p",
              "text": "Alla fyra mått beskriver samma triangel. Sidorna [[5]], [[5]] och [[7.071]] uppfyller förhållandet [[1 : 1 : \\sqrt{2}]] och Pythagoras sats, [[5^2 + 5^2 = 25 + 25 = 50 = (5\\sqrt{2})^2]]. Arean och omkretsen är två olika slags mått på samma triangel: arean täcker dess yta, medan omkretsen följer dess gräns. Om du ändrar kateten ändras varje annat värde med den, men förhållandet mellan sidorna ändras aldrig.",
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
                "Katet a",
                "5 cm",
                "5 cm",
              ],
              [
                "Katet b",
                "5 cm",
                "5 cm",
              ],
              [
                "Hypotenusa c",
                "5√2 cm",
                "7.071 cm",
              ],
              [
                "Area A",
                "25/2 cm²",
                "12.5 cm²",
              ],
              [
                "Omkrets P",
                "10 + 5√2 cm",
                "17.071 cm",
              ],
            ],
          },
        },
        "sec-examples": {
          "h2": "Genomräknade exempel på 45-45-90-beräkningar",
          "blocks": [
            {
              "kind": "p",
              "text": "Åtta genomräknade exempel som täcker varje kalkylatorläge och en kvadratdiagonal.",
            },
            {
              "kind": "h3",
              "text": "Exempel 1: Beräkna hypotenusan utifrån en katet",
            },
            {
              "kind": "p",
              "text": "Givet [[a = 4]] cm. Formel: [[c = a\\sqrt{2}]]. Insättning: [[c = 4\\sqrt{2}]]. Exakt svar: [[4\\sqrt{2}]] cm. Decimalapproximation: [[c \\approx 5.657]] cm. Hypotenusan är ungefär 1.414 gånger kateten, så 4 cm blir ungefär 5.657 cm. Behåll den exakta formen [[4\\sqrt{2}]] cm när frågan ber om ett exakt värde.",
            },
            {
              "kind": "h3",
              "text": "Exempel 2: Beräkna hypotenusan utifrån en större katet",
            },
            {
              "kind": "p",
              "text": "Givet [[a = 8]] cm. Formel: [[c = a\\sqrt{2}]]. Insättning: [[c = 8\\sqrt{2}]]. Exakt svar: [[8\\sqrt{2}]] cm. Decimalapproximation: [[c \\approx 11.314]] cm. Detta är samma beräkning som i exempel 1 i dubbel skala, och svaret är exakt dubbelt så stort, vilket bekräftar den linjära skalningen av sidlängder. Samma värde är diagonalen av en kvadrat med sidan 8 cm.",
            },
            {
              "kind": "h3",
              "text": "Exempel 3: Beräkna en katet utifrån hypotenusan",
            },
            {
              "kind": "p",
              "text": "Givet [[c = 12]] cm. Formel: [[a = \\frac{c}{\\sqrt{2}}]]. Insättning: [[a = \\frac{12}{\\sqrt{2}}]]. Rationalisering ger [[a = 6\\sqrt{2}]] cm. Decimalapproximation: [[a \\approx 8.485]] cm. Båda kateterna är [[6\\sqrt{2}]] cm, eftersom kateterna är lika. Kateten är kortare än hypotenusan, som den måste vara.",
            },
            {
              "kind": "h3",
              "text": "Exempel 4: Beräkna en katet utifrån en större hypotenusa",
            },
            {
              "kind": "p",
              "text": "Givet [[c = 20]] cm. Formel: [[a = \\frac{c\\sqrt{2}}{2}]]. Insättning: [[a = \\frac{20\\sqrt{2}}{2} = 10\\sqrt{2}]] cm. Decimalapproximation: [[a \\approx 14.142]] cm. Båda kateterna är [[10\\sqrt{2}]] cm. En snabb kontroll: [[a\\sqrt{2} = 10\\sqrt{2} \\times \\sqrt{2} = 20]] cm, vilket ger tillbaka den givna hypotenusan.",
            },
            {
              "kind": "h3",
              "text": "Exempel 5: Beräkna arean",
            },
            {
              "kind": "p",
              "text": "Givet [[a = 7]] cm. Formel: [[A = \\frac{a^2}{2}]]. Insättning: [[A = \\frac{49}{2}]]. Resultat: [[A = 24.5]] cm². Arean är exakt, utan kvadratrot och utan avrundning, eftersom [[7^2 = 49]] halveras rent. Area anges i kvadratiska enheter, till skillnad från sidlängderna, så enheten är cm², inte cm.",
            },
            {
              "kind": "h3",
              "text": "Exempel 6: Beräkna omkretsen",
            },
            {
              "kind": "p",
              "text": "Givet [[a = 6]] cm. Formel: [[P = a(2 + \\sqrt{2})]]. Insättning: [[P = 6(2 + \\sqrt{2})]]. Exakt svar: [[P = 12 + 6\\sqrt{2}]] cm. Decimalapproximation: [[P \\approx 20.485]] cm. Att addera sidorna en i taget ger samma resultat: [[6 + 6 + 6\\sqrt{2} = 12 + 6\\sqrt{2}]] cm. Omkrets anges i vanliga enheter, inte kvadratiska enheter.",
            },
            {
              "kind": "h3",
              "text": "Exempel 7: Beräkna en kvadratdiagonal",
            },
            {
              "kind": "p",
              "text": "Givet en kvadrat med sidan 10 m. Formel: [[d = a\\sqrt{2}]]. Insättning: [[d = 10\\sqrt{2}]] m. Exakt svar: [[10\\sqrt{2}]] m. Decimalapproximation: [[d \\approx 14.142]] m. Diagonalen delar kvadraten i två 45-45-90-trianglar, var och en med kateter på 10 m och hypotenusan [[10\\sqrt{2}]] m. Detta är samma formel som att beräkna en hypotenusa utifrån en katet, eftersom diagonalen är hypotenusan.",
            },
            {
              "kind": "h3",
              "text": "Exempel 8: Beräkna hypotenusan utifrån en decimal katet",
            },
            {
              "kind": "p",
              "text": "Givet [[a = 2.5]] cm. Formel: [[c = a\\sqrt{2}]]. Insättning: [[c = 2.5\\sqrt{2}]]. Exakt svar: [[2.5\\sqrt{2}]] cm. Decimalapproximation: [[c \\approx 3.536]] cm. Decimala inmatningar fungerar exakt som heltalsinmatningar: multiplicera med √2, behåll den exakta formen först och avrunda decimaltalet först i det sista steget. Den andra kateten är också 2.5 cm.",
            },
            {
              "kind": "p",
              "text": "Exakta svar och decimala approximationer tjänar olika syften. Den exakta formen, till exempel [[4\\sqrt{2}]] cm, är precis och är vad provsvar vanligtvis kräver. Decimalformen, till exempel 5.657 cm, är lättare att föreställa sig och att mäta med en linjal. Ange den exakta formen först och sedan decimaltalet, och avrunda decimaltalet först i det sista steget.",
            },
          ],
        },
        "sec-exact": {
          "h2": "Exakta svar kontra decimala approximationer",
          "blocks": [
            {
              "kind": "p",
              "text": "Ett exakt svar behåller √2; ett decimalsvar avrundar det.",
            },
            {
              "kind": "p",
              "text": "Jämför det exakta svaret [[5\\sqrt{2}]] cm med decimalapproximationen 7.071 cm. Det första är exakt: det anger längden precist och använder symbolen √2 för att stå för det irrationella tal vars kvadrat är 2. Det andra är avrundat: det anger längden till tre decimaler, vilket ligger nära det sanna värdet men inte är lika med det. Skillnaden är liten, ungefär 0.00007 cm, men den är verklig, och den spelar roll i bevis och i vidare beräkningar.",
            },
            {
              "kind": "p",
              "text": "Talet √2 är irrationellt, vilket betyder att det inte kan skrivas som en kvot av två heltal, och att dess decimalutveckling aldrig tar slut och aldrig upprepas. Det börjar 1.41421356 och fortsätter utan slut. Varje decimaltal du skriver för det, hur långt det än är, är en approximation. Det är därför exakta rotuttryck är att föredra i matematiska bevis och i provsvar som ber om ett exakt värde: rotuttrycket behåller den fulla precision som ett decimaltal förlorar.",
            },
            {
              "kind": "p",
              "text": "En decimalapproximation är mer praktisk när du behöver mäta, kapa eller bygga något. En linjal kan inte mäta [[5\\sqrt{2}]] cm direkt, men den kan mäta 7.071 cm. En snickare som kapar ett diagonalt stag behöver decimaltalet, medan en elev som bevisar en sats behöver den exakta formen. Använd varje form där den passar, och märk decimaltal som ungefärliga så att ingen misstar dem för exakta värden.",
            },
            {
              "kind": "p",
              "text": "Avrundning bör göras i slutet av en beräkning, inte mitt i. Om du ersätter √2 med 1.41 tidigt och sedan multiplicerar, bär varje senare steg med sig det felet. För [[a = 5]] cm ger 1.41 [[c = 7.05]] cm, medan den korrekta approximationen är 7.071 cm. Behåll √2 exakt genom hela uträkningen, i formen [[5\\sqrt{2}]], och avrunda bara slutsvar. Presentera aldrig ett avrundat decimaltal som om det vore exakt.",
            },
          ],
        },
        "sec-verify": {
          "h2": "Så kontrollerar du dina 45-45-90-beräkningar",
          "blocks": [
            {
              "kind": "p",
              "text": "Fyra snabba kontroller fångar nästan varje fel.",
            },
            {
              "kind": "p",
              "text": "Gör minst en kontroll på varje svar, och alla fyra när uppgiften är viktig. Exemplet nedan använder triangeln med [[a = 5]] cm, [[b = 5]] cm och [[c = 5\\sqrt{2} \\approx 7.071]] cm genomgående.",
            },
            {
              "kind": "h3",
              "text": "Kontroll 1: Lika kateter",
            },
            {
              "kind": "p",
              "text": "Bekräfta [[a = b]]. Här är båda kateterna 5 cm, så kontrollen godkänns. Om dina två kateter skiljer sig åt är en av dem fel, eller så är triangeln inte alls en 45-45-90-triangel. Detta är den snabbaste kontrollen av alla, eftersom den inte behöver någon aritmetik: de två kateterna måste stämma exakt överens.",
            },
            {
              "kind": "h3",
              "text": "Kontroll 2: Sidförhållande",
            },
            {
              "kind": "p",
              "text": "Dividera hypotenusan med en katet: [[\\frac{c}{a} = \\sqrt{2} \\approx 1.414]]. Här är [[\\frac{7.071}{5} \\approx 1.414]], så förhållandet stämmer. Om divisionen ger 2 har du använt 30-60-90-fördubblingen av misstag. Om den ger ungefär 1.732 har du använt √3 av misstag. Förhållandet [[\\frac{c}{a}]] måste vara √2, och inget annat.",
            },
            {
              "kind": "h3",
              "text": "Kontroll 3: Pythagoras sats",
            },
            {
              "kind": "p",
              "text": "Bekräfta [[a^2 + b^2 = c^2]]. Här är [[5^2 + 5^2 = 25 + 25 = 50]], och [[(5\\sqrt{2})^2 = 25 \\times 2 = 50]], så satsen stämmer. Den här kontrollen fångar förväxlade kateter och fel multiplikatorer, eftersom fel värde på någon sida bryter likheten. <a href=\"/pythagorean-theorem-calculator/\">Pythagoras sats-kalkylatorn</a> utför den här kontrollen för vilka tre sidlängder som helst.",
            },
            {
              "kind": "h3",
              "text": "Kontroll 4: Vinkelsumma",
            },
            {
              "kind": "p",
              "text": "Bekräfta [[45^\\circ + 45^\\circ + 90^\\circ = 180^\\circ]]. Den här kontrollen handlar om uppgiftens förutsättningar snarare än om aritmetiken: om vinklarna i din triangel inte blir 180°, eller om de inte är 45°, 45° och 90°, gäller 45-45-90-formlerna inte alls, och ingen sidlängd från dem kan litas på. Bekräfta vinklarna först och lita sedan på sidorna.",
            },
          ],
        },
        "sec-properties": {
          "h2": "Viktiga egenskaper hos 45-45-90-trianglar",
          "blocks": [
            {
              "kind": "p",
              "text": "Tio egenskaper följer av det fasta förhållandet.",
            },
            {
              "kind": "list",
              "items": [
                "Triangeln har alltid vinklarna 45°, 45° och 90°, och dessa vinklar blir alltid tillsammans 180°.",
                "Båda kateterna är lika, [[a = b]], eftersom de ligger mittemot lika 45°-vinklar.",
                "Hypotenusan är den längsta sidan, eftersom den ligger mittemot 90°-vinkeln.",
                "Hypotenusan är √2 gånger endera kateten, [[c = a\\sqrt{2}]], där [[\\sqrt{2} \\approx 1.41421356]].",
                "Alla 45-45-90-trianglar är likformiga, eftersom de har samma tre vinklar och samma sidproportioner.",
                "Sidförhållandet [[1 : 1 : \\sqrt{2}]] är oberoende av triangelns storlek, så att skala triangeln lämnar förhållandet oförändrat.",
                "Höjden till hypotenusan delar triangeln i två kongruenta mindre 45-45-90-trianglar.",
                "Höjden till hypotenusan är lika med halva hypotenusan, [[\\frac{c}{2}]].",
                "Arean är hälften av kvadraten på en katet, [[A = \\frac{a^2}{2}]], så att fördubbla kateten fyrdubblar arean.",
                "Omkretsen är [[P = a(2 + \\sqrt{2})]], så att fördubbla kateten fördubblar omkretsen.",
              ],
            },
            {
              "kind": "p",
              "text": "Varje egenskap följer av vinklarna och förhållandet, inte av ett enda exempel. De lika vinklarna tvingar fram lika kateter, de lika kateterna plus Pythagoras sats tvingar fram √2-hypotenusan, och √2-hypotenusan tvingar fram area- och omkretsformlerna. När du väl accepterar de tre vinklarna är allt annat bestämt, vilket är anledningen till att en känd sida räcker för att beskriva hela triangeln.",
            },
          ],
        },
        "sec-vs-3060": {
          "h2": "Skillnaden mellan 45-45-90- och 30-60-90-trianglar",
          "blocks": [
            {
              "kind": "p",
              "text": "De två speciella trianglarna ser lika ut, men deras förhållanden får aldrig blandas.",
            },
            {
              "kind": "p",
              "text": "Båda är speciella rätvinkliga trianglar, och båda låter dig beräkna varje sida utifrån en känd sida. Skillnaden ligger i vinklarna: en 45-45-90-triangel har två lika spetsiga vinklar, medan en 30-60-90-triangel har två olika spetsiga vinklar. Den enda skillnaden ändrar sidförhållandet fullständigt, så formlerna för den ena triangeln ger fel svar för den andra.",
            },
            {
              "kind": "p",
              "text": "En 45-45-90-triangel är likbent, med två lika kateter, medan en 30-60-90-triangel är oliksidig, utan lika sidor. I en 45-45-90-triangel är hypotenusan √2 gånger en katet, medan hypotenusan i en 30-60-90-triangel är dubbelt så lång som den korta kateten. Den långa kateten i en 30-60-90-triangel är √3 gånger den korta kateten, och det finns ingen motsvarande sida i en 45-45-90-triangel, eftersom dess två kateter är lika långa. För en fullständig genomgång av den andra triangeln, se <a href=\"/30-60-90-triangle-calculator/\">30-60-90-triangelkalkylatorn</a>, som använder förhållandet 1:√3:2.",
            },
            {
              "kind": "p",
              "text": "Formlerna kan inte bytas ut mot varandra. Att använda [[c = 2a]] på en 45-45-90-triangel med [[a = 5]] cm ger 10 cm, medan den korrekta hypotenusan är ungefär 7.071 cm. Att använda [[c = a\\sqrt{2}]] på en 30-60-90-triangel med kort katet 5 cm ger ungefär 7.071 cm, medan den korrekta hypotenusan är 10 cm. Bekräfta alltid vinklarna innan du väljer en formel: lika spetsiga vinklar betyder 45-45-90, och vinklar på 30° och 60° betyder 30-60-90.",
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
                "Lika sidor",
                "Två lika kateter",
                "Inga lika kateter",
              ],
              [
                "Hypotenusa",
                "Katet × √2",
                "Kort katet × 2",
              ],
              [
                "Lång katet",
                "Samma som kort katet",
                "Kort katet × √3",
              ],
              [
                "Triangeltyp",
                "Likbent rätvinklig",
                "Oliksidig rätvinklig",
              ],
            ],
          },
          "image": {
            "src": "forty-five-ninety-vs-3060.svg",
            "alt": "Två speciella rätvinkliga trianglar sida vid sida, en 45-45-90-triangel med förhållandet 1 till 1 till kvadratroten ur 2 och en 30-60-90-triangel med förhållandet 1 till kvadratroten ur 3 till 2",
            "caption": "45-45-90 använder 1:1:√2; 30-60-90 använder 1:√3:2. Förhållandena får aldrig bytas ut mot varandra.",
          },
        },
        "sec-mistakes": {
          "h2": "Vanliga misstag vid lösning av 45-45-90-trianglar",
          "blocks": [
            {
              "kind": "p",
              "text": "Fjorton fel dyker upp om och om igen i 45-45-90-uppgifter.",
            },
            {
              "kind": "steps",
              "steps": [
                "Att anta att hypotenusan är dubbelt så lång som kateten: fördubbling hör till 30-60-90-triangeln. För [[a = 5]] cm ger fördubbling 10 cm, medan den korrekta hypotenusan är [[5\\sqrt{2} \\approx 7.071]] cm. Korrekt: [[c = a\\sqrt{2}]].",
                "Att använda √3 i stället för √2: √3 hör till 30-60-90-triangeln, vars förhållande är [[1 : \\sqrt{3} : 2]]. En 45-45-90-triangel använder alltid √2. Korrekt: [[c = a\\sqrt{2}]].",
                "Att glömma att båda kateterna är lika: de två kateterna är alltid lika långa, så om en uppgift ger en katet är den andra kateten redan känd. För [[a = 5]] cm är [[b = 5]] cm, inte en ny okänd. Korrekt: [[a = b]].",
                "Att behandla hypotenusan som en av kateterna: hypotenusan är sidan mittemot 90°-vinkeln, och den är längre än endera kateten. Att använda den som katet i areaformeln ger en felaktig area. Korrekt: identifiera hypotenusan med hjälp av markeringen för rät vinkel först.",
                "Att använda [[c = a\\sqrt{3}]]: detta blandar ihop de två speciella trianglarna. För [[a = 5]] cm är [[a\\sqrt{3} \\approx 8.660]] cm varken hypotenusan eller en katet i den här triangeln. Korrekt: [[c = a\\sqrt{2} \\approx 7.071]] cm.",
                "Att dividera hypotenusan med 2 i stället för √2: halvering ger den korta kateten i 30-60-90-triangeln, inte kateten i 45-45-90-triangeln. För [[c = 10]] cm ger halvering 5 cm, medan den korrekta kateten är [[5\\sqrt{2} \\approx 7.071]] cm. Korrekt: [[a = \\frac{c}{\\sqrt{2}}]].",
                "Att glömma att kvadrera kateten vid areaberäkning: arean behöver [[a^2]], inte [[a]]. Att använda [[A = \\frac{a}{2}]] för [[a = 6]] cm ger 3 cm², medan den korrekta arean är [[\\frac{36}{2} = 18]] cm². Korrekt: [[A = \\frac{a^2}{2}]].",
                "Att bara addera de två kateterna vid omkretsberäkning: omkretsen behöver alla tre sidor. Att bara addera de två kateterna för [[a = 5]] cm ger 10 cm, medan den sanna omkretsen är ungefär 17.071 cm. Korrekt: [[P = a + b + c]].",
                "Att förväxla exakta svar med decimala approximationer: [[5\\sqrt{2}]] cm är exakt, medan 7.071 cm är avrundat. Att skriva 7.071 cm som om det vore exakt förlorar den precision som rotuttrycket behåller. Korrekt: ange den exakta formen först och sedan decimaltalet.",
                "Att avrunda √2 för tidigt: att använda 1.41 för √2 mitt i en beräkning förskjuter varje senare steg. För [[a = 5]] cm ger [[5 \\times 1.41 = 7.05]] cm i stället för 7.071 cm. Korrekt: behåll √2 exakt genom hela uträkningen och avrunda bara slutsvar.",
                "Att blanda måttenheter: en katet i centimeter och en hypotenusa i meter kan inte kombineras direkt. Omvandla varje mått till en enhet innan du beräknar. Korrekt: 0.5 m är lika med 50 cm, beräkna sedan i centimeter.",
                "Att förväxla förhållandena för 45-45-90 och 30-60-90: förhållandena [[1 : 1 : \\sqrt{2}]] och [[1 : \\sqrt{3} : 2]] hör till olika trianglar. Att byta ut dem mot varandra ger en hypotenusa som är fel med stor marginal. Korrekt: bekräfta vinklarna och välj sedan det förhållande som matchar dem.",
                "Att glömma att area kräver kvadratiska enheter: en area på 18 cm är fel till enheten, även om talet är rätt. Area mäter yta, så det är 18 kvadratcentimeter. Korrekt: [[A = 18]] cm².",
                "Att använda formlerna för en godtycklig rätvinklig triangel: formlerna [[c = a\\sqrt{2}]] och [[A = \\frac{a^2}{2}]] gäller bara när vinklarna är 45°, 45° och 90°. En rätvinklig triangel med vinklarna 40° och 50° har ett annat förhållande. Korrekt: bekräfta vinklarna först och använd sedan formlerna.",
              ],
            },
          ],
        },
        "sec-applications": {
          "h2": "Praktiska tillämpningar av 45-45-90-trianglar",
          "blocks": [
            {
              "kind": "p",
              "text": "Förhållandet dyker upp överallt där en kvadrat delas på mitten.",
            },
            {
              "kind": "p",
              "text": "Den vanligaste användningen är att beräkna diagonalen av en kvadrat. En kvadratisk kakelplatta med sidan 30 cm har en diagonal på [[30\\sqrt{2} \\approx 42.426]] cm, vilket är längden att kapa längs när en platta måste delas från hörn till hörn. En kvadratisk tavelram, en kvadratisk bordsskiva och en kvadratisk tomt använder alla samma beräkning, eftersom varje kvadrat delas i två 45-45-90-trianglar.",
            },
            {
              "kind": "p",
              "text": "Geometriläxor och trigonometriövningar använder 45-45-90-uppgifter för att testa om elever kan identifiera de lika kateterna, tillämpa förhållandet och behålla exakta svar med rotuttryck. En elev som känner till en sida av en sådan triangel kan beräkna resten utan att mäta, vilket är poängen med förhållandet. Klassrumsdemonstrationer använder triangeln för att visa hur ett fast förhållande förvandlar en mätning till en fullständig beskrivning av en form, och hur en kvadrat som delas på mitten ger triangeln.",
            },
            {
              "kind": "p",
              "text": "Teknisk ritning, arkitektoniska planlösningar och konstruktionsgeometri använder 45-45-90-samband när en konstruktion kräver en 45°-vinkel, till exempel ett diagonalt stag, ett kvadratbaserat mönster eller ett hörn kapat i 45°. En byggare som känner till en sida av en sådan triangel kan beräkna den diagonala sträckan utan att mäta den direkt. Arbete i koordinatplanet använder samma idé: en förflyttning på 5 enheter åt höger och 5 enheter uppåt täcker en diagonal sträcka på [[5\\sqrt{2} \\approx 7.071]] enheter. Detta är realistiska användningar av själva geometrin, inte påståenden om tekniska toleranser: verkligt konstruktionsarbete lägger till materialgränser och säkerhetsmarginaler utöver de exakta geometriska värdena på den här sidan.",
            },
          ],
        },
        "sec-practice": {
          "h2": "Övningsuppgifter med svar",
          "blocks": [
            {
              "kind": "p",
              "text": "Lös alla sex uppgifter på papper innan du läser svaren.",
            },
            {
              "kind": "h3",
              "text": "Uppgift 1: Beräkna hypotenusan utifrån en katet",
            },
            {
              "kind": "p",
              "text": "En 45-45-90-triangel har en katet på [[a = 9]] cm. Beräkna hypotenusan [[c]].",
            },
            {
              "kind": "h3",
              "text": "Uppgift 2: Beräkna en katet utifrån hypotenusan",
            },
            {
              "kind": "p",
              "text": "En 45-45-90-triangel har en hypotenusa på [[c = 14]] cm. Beräkna kateten [[a]].",
            },
            {
              "kind": "h3",
              "text": "Uppgift 3: Beräkna arean",
            },
            {
              "kind": "p",
              "text": "En 45-45-90-triangel har en katet på [[a = 10]] cm. Beräkna arean [[A]].",
            },
            {
              "kind": "h3",
              "text": "Uppgift 4: Beräkna omkretsen",
            },
            {
              "kind": "p",
              "text": "En 45-45-90-triangel har en katet på [[a = 3]] cm. Beräkna omkretsen [[P]].",
            },
            {
              "kind": "h3",
              "text": "Uppgift 5: Beräkna diagonalen av en kvadrat",
            },
            {
              "kind": "p",
              "text": "En kvadrat har en sidlängd på 12 cm. Beräkna längden på dess diagonal.",
            },
            {
              "kind": "h3",
              "text": "Uppgift 6: Kontrollera en föreslagen 45-45-90-triangel",
            },
            {
              "kind": "p",
              "text": "En triangel har kateter på 6 cm och 6 cm och en hypotenusa på [[6\\sqrt{2}]] cm. Använd Pythagoras sats för att kontrollera att dessa sidlängder bildar en 45-45-90-triangel.",
            },
            {
              "kind": "h3",
              "text": "Svar på övningsuppgifterna",
            },
            {
              "kind": "p",
              "text": "Svar 1: [[c = a\\sqrt{2} = 9\\sqrt{2} \\approx 12.728]] cm. Det exakta svaret är [[9\\sqrt{2}]] cm.",
            },
            {
              "kind": "p",
              "text": "Svar 2: [[a = \\frac{c\\sqrt{2}}{2} = \\frac{14\\sqrt{2}}{2} = 7\\sqrt{2} \\approx 9.899]] cm. Båda kateterna är [[7\\sqrt{2}]] cm.",
            },
            {
              "kind": "p",
              "text": "Svar 3: [[A = \\frac{a^2}{2} = \\frac{100}{2} = 50]] cm². Arean är exakt, utan avrundning.",
            },
            {
              "kind": "p",
              "text": "Svar 4: [[P = a(2 + \\sqrt{2}) = 3(2 + \\sqrt{2}) = 6 + 3\\sqrt{2} \\approx 10.243]] cm. Att addera sidorna en i taget ger samma resultat: [[3 + 3 + 3\\sqrt{2} = 6 + 3\\sqrt{2}]] cm.",
            },
            {
              "kind": "p",
              "text": "Svar 5: [[d = a\\sqrt{2} = 12\\sqrt{2} \\approx 16.971]] cm. Diagonalen är hypotenusan i den 45-45-90-triangel som bildas när kvadraten delas på mitten.",
            },
            {
              "kind": "p",
              "text": "Svar 6: [[a^2 + b^2 = 36 + 36 = 72]], och [[c^2 = (6\\sqrt{2})^2 = 36 \\times 2 = 72]]. De två leden stämmer överens, och kateterna är lika, så triangeln är en 45-45-90-triangel med hypotenusan ungefär 8.485 cm.",
            },
          ],
        },
      },
      "relatedHeading": "Relaterade rätvinkliga triangelkalkylatorer",
      "relatedIntro": "Varje kalkylator nedan hanterar en annan rätvinklig triangeluppgift, så välj det verktyg som matchar det mått du behöver.",
      "relatedItems": [
        "Kalkylator för speciella rätvinkliga trianglar",
        "30-60-90-triangelkalkylator",
        "Kalkylator för rätvinklig triangelsida",
        "Kalkylator för rätvinklig triangels area",
        "Kalkylator för rätvinklig triangels omkrets",
        "Pythagoras sats-kalkylator",
      ],
      "faqHeading": "Vanliga frågor",
      "faqs": [
        {
          "question": "Vad är en 45-45-90-triangel?",
          "answer": "En 45-45-90-triangel är en rätvinklig triangel med vinklarna 45°, 45° och 90°. Den kallas en likbent rätvinklig triangel eftersom dess två kateter är lika. Dess sidor följer alltid det fasta förhållandet [[1 : 1 : \\sqrt{2}]], så att känna till en sida räcker för att beräkna alla de andra.",
        },
        {
          "question": "Vad är sidförhållandet i en 45-45-90-triangel?",
          "answer": "Sidförhållandet är [[a : b : c = 1 : 1 : \\sqrt{2}]], där [[a]] och [[b]] är de lika kateterna och [[c]] är hypotenusan. Det betyder [[b = a]] och [[c = a\\sqrt{2}]]. Förhållandet är detsamma för varje 45-45-90-triangel, oavsett storlek.",
        },
        {
          "question": "Varför är båda kateterna lika?",
          "answer": "De två spetsiga vinklarna är båda 45°, och i varje triangel ligger lika vinklar mittemot lika sidor. Sidan mittemot vinkel A är katet [[a]], och sidan mittemot vinkel B är katet [[b]], så [[a = b]]. Triangeln är också symmetrisk kring höjden från den räta vinkeln till hypotenusan.",
        },
        {
          "question": "Varför multipliceras hypotenusan med √2?",
          "answer": "Pythagoras sats ger [[a^2 + a^2 = c^2]], vilket förenklas till [[2a^2 = c^2]]. Att ta kvadratroten ger [[c = a\\sqrt{2}]]. √2 dyker upp eftersom två lika kvadrater blir tillsammans dubbelt så mycket som en kvadrat, så hypotenusan måste vara √2 gånger en katet.",
        },
        {
          "question": "Hur beräknar jag hypotenusan utifrån en katet?",
          "answer": "Multiplicera kateten med √2 med hjälp av [[c = a\\sqrt{2}]]. För [[a = 5]] cm är [[c = 5\\sqrt{2} \\approx 7.071]] cm. Vilken katet som helst fungerar, eftersom kateterna är lika. Behåll den exakta formen [[5\\sqrt{2}]] cm när frågan ber om ett exakt värde.",
        },
        {
          "question": "Hur beräknar jag en katet utifrån hypotenusan?",
          "answer": "Dividera hypotenusan med √2 med hjälp av [[a = \\frac{c}{\\sqrt{2}}]], eller använd den rationaliserade formen [[a = \\frac{c\\sqrt{2}}{2}]]. För [[c = 10]] cm är [[a = 5\\sqrt{2} \\approx 7.071]] cm. Båda kateterna har samma längd, eftersom kateterna är lika.",
        },
        {
          "question": "Hur beräknar jag arean av en 45-45-90-triangel?",
          "answer": "Använd [[A = \\frac{a^2}{2}]], där [[a]] är en katet. De två kateterna fungerar som bas och höjd, och triangeln täcker hälften av kvadraten som bildas av dem. För [[a = 6]] cm är [[A = \\frac{36}{2} = 18]] cm². Area anges alltid i kvadratiska enheter.",
        },
        {
          "question": "Hur beräknar jag dess omkrets?",
          "answer": "Addera alla tre sidor med [[P = a + b + c]], vilket förenklas till [[P = a(2 + \\sqrt{2})]]. För [[a = 5]] cm är [[P = 10 + 5\\sqrt{2} \\approx 17.071]] cm. Omkrets är ett linjärt mått, så svaret anges i vanliga enheter, inte kvadratiska enheter.",
        },
        {
          "question": "Varför skapar en kvadratdiagonal en 45-45-90-triangel?",
          "answer": "En diagonal delar en kvadrat i två trianglar, var och en med två kvadratsidor och en 90°-hörnvinkel. Diagonalen halverar också två hörnvinklar till 45° vardera. Varje triangel har därför vinklarna 45°, 45° och 90°, och dess hypotenusa är diagonalen, [[d = a\\sqrt{2}]].",
        },
        {
          "question": "Är √2 ett exakt tal eller en approximation?",
          "answer": "Symbolen √2 står för ett exakt irrationellt tal vars kvadrat är 2, men dess decimalutveckling tar aldrig slut och börjar 1.41421356. Varje decimaltal du skriver för det är en approximation. Behåll rotuttrycket i exakta svar, och använd ett decimaltal bara när ett uppmätt eller avrundat värde behövs.",
        },
        {
          "question": "Är alla 45-45-90-trianglar likformiga?",
          "answer": "Ja. Varje 45-45-90-triangel har samma tre vinklar, 45°, 45° och 90°, och samma sidförhållande [[1 : 1 : \\sqrt{2}]]. Två sådana trianglar skiljer sig bara i storlek, aldrig i form. Att skala upp eller ned en triangel multiplicerar varje sida med samma faktor, så proportionerna förblir fasta.",
        },
        {
          "question": "Vad är skillnaden mellan 45-45-90- och 30-60-90-trianglar?",
          "answer": "En 45-45-90-triangel har vinklarna 45°, 45° och 90°, lika kateter och förhållandet [[1 : 1 : \\sqrt{2}]]. En 30-60-90-triangel har vinklarna 30°, 60° och 90°, inga lika sidor och förhållandet [[1 : \\sqrt{3} : 2]]. Deras formler kan inte bytas ut mot varandra, så bekräfta alltid vinklarna först.",
        },
      ],
    },
};
