// projectionQGuideTranslations.bsv.ts: Right Triangle Projection Q
// Guide (Page 36 of 45) translation.
export const PROJQ_B6_SV = {
  "sv": {
      "faqHeading": "Vanliga frågor",
      "faqs": [
        {
          "answer": "Formeln är [[q = \\frac{b^2}{c}]], där b är den katet som hör till q och c är hela hypotenusan. Kvadrera först katet b och dividera sedan med c. Till exempel ger [[b = 8]] cm och [[c = 10]] cm [[q = 6.4]] cm.",
          "question": "Vad är formeln för projektion q?",
        },
        {
          "answer": "Projektion q är den del av hypotenusan som ligger intill hörn B och som bildas när höjden från den räta vinkeln möter hypotenusan i punkten D. I triangeln ABC är [[q = DB]], den del av hypotenusan som hör till katet b.",
          "question": "Vad representerar projektion q?",
        },
        {
          "answer": "Kvadraten kommer från likformiga trianglar: triangeln CBD är likformig med triangeln ABC, vilket ger [[\\frac{q}{b} = \\frac{b}{c}]], och katet b förekommer i båda förhållandena. Korsmultiplikation ger [[b^2 = c \\times q]], så kvadraten är inbyggd i geometrin.",
          "question": "Varför kvadreras katet b?",
        },
        {
          "answer": "Division isolerar q. Projektionssatsen säger att [[b^2 = c \\times q]], där q multipliceras med c, så division av båda leden med c lämnar q ensamt. Divisionen omvandlar också den kvadrerade längden till en vanlig längd.",
          "question": "Varför dividerar vi med hypotenusan?",
        },
        {
          "answer": "Nej. Katet b är sidan BC, en av sidorna som bildar den räta vinkeln, medan projektion q är sträckan DB längs hypotenusan. I 6-8-10-triangeln är katet b 8 cm och projektion q bara 6,4 cm.",
          "question": "Är projektion q samma sak som katet b?",
        },
        {
          "answer": "Projektion q ligger intill hörn B och hör ihop med katet b, medan projektion p ligger intill hörn A och hör ihop med katet a. De är de två sträckor som höjden skapar på hypotenusan: [[p + q = c]].",
          "question": "Varför hör q ihop med katet b i stället för katet a?",
        },
        {
          "answer": "Projektion p ligger intill hörn A och hör ihop med katet a, medan projektion q ligger intill hörn B och hör ihop med katet b. De är de två sträckor som höjden skapar på hypotenusan: [[p + q = c]]. I 6-8-10-triangeln är p 3.6 cm och q 6.4 cm, så q är den längre sträckan.",
          "question": "Vad är skillnaden mellan projektion p och projektion q?",
        },
        {
          "answer": "Ja. Subtrahera q från hypotenusan: [[p = c - q]]. Med [[c = 10]] cm och [[q = 6.4]] cm blir [[p = 3.6]] cm. Du kan också beräkna p direkt från katet a med [[p = \\frac{a^2}{c}]].",
          "question": "Kan jag beräkna projektion p om jag redan känner till q?",
        },
        {
          "answer": "Nej. Projektion q är bara en del av hypotenusan, så den måste vara mindre än c. Om q vore lika med c skulle p vara noll och triangeln degenererad. Ett resultat större än c tyder alltid på ett inmatningsfel eller ett fel i beteckningarna.",
          "question": "Kan projektion q vara större än hypotenusan?",
        },
        {
          "answer": "Du behöver också p eller c. Beräkna p med [[p = c - q]] och använd sedan [[h = \\sqrt{p \\times q}]]. Med [[q = 6.4]] cm och [[c = 10]] cm blir [[p = 3.6]] cm och [[h = 4.8]] cm. Projektion q ensam kan inte bestämma höjden.",
          "question": "Hur hittar jag höjden när q är känd?",
        },
        {
          "answer": "Beräkna om [[q = \\frac{b^2}{c}]], kontrollera sedan [[p + q = c]] efter att du har beräknat p genom subtraktion, och bekräfta att q är positivt och mindre än c. Du kan också beräkna katet a från p och kontrollera [[a^2 + b^2 = c^2]].",
          "question": "Hur kan jag kontrollera en beräkning av projektion q?",
        },
        {
          "answer": "Höjden träffar hypotenusans mittpunkt och de två kateterna är lika, så triangeln är likbent. Med [[c = 10]] cm och [[p = q = 5]] cm är båda kateterna lika med [[\\sqrt{50}]] cm, cirka 7,071 cm.",
          "question": "Vad händer när p och q är lika?",
        },
      ],
      "relatedHeading": "Utforska relaterade kalkylatorer för rätvinkliga trianglar",
      "relatedIntro": "Varje kalkylator nedan hanterar en specifik uppgift för rätvinkliga trianglar, så välj det verktyg som matchar de mått du redan känner till.",
      "relatedItems": [
        "Kalkylator för projektion i rätvinklig triangel",
        "Kalkylator för projektion p i rätvinklig triangel",
        "Kalkylator för katet b från projektion i rätvinklig triangel",
        "Kalkylator för hypotenusa från projektioner i rätvinklig triangel",
        "Kalkylator för höjd från projektioner i rätvinklig triangel",
        "Kalkylator för sidor i rätvinklig triangel",
      ],
      "sections": {
        "sec-applications": {
          "blocks": [
            {
              "kind": "p",
              "text": "Den mest direkta användningen är geometriläxor och klassrumsarbete, där projektionsuppgifter prövar om eleverna kan beteckna en figur och tillämpa [[q = \\frac{b^2}{c}]] i stället för att av vana ta till Pythagoras sats. Likformighetsövningar använder samma uppställning, eftersom beviset i sig är en övning i att matcha motsvarande sidor.",
            },
            {
              "kind": "p",
              "text": "Teknisk ritning använder satsen när en rätvinklig triangel måste rekonstrueras från partiella mått: om en ritning anger hypotenusan och höjdens fotpunkt följer den saknade projektionen utan att figuren behöver mätas om. Lärare använder också uppställningen som en brygglektion mellan sträckaddition och likformighet.",
            },
            {
              "kind": "p",
              "text": "Ett villkor begränsar varje tillämpning: den rätvinkliga triangelns geometri som krävs måste faktiskt existera. Satsen beskriver exakta geometriska samband, inte ungefärliga fältmätningar, så den ersätter aldrig noggrann mätning eller professionell ingenjörsmätning.",
            },
          ],
          "h2": "Praktiska tillämpningar av beräkningar av projektion i rätvinklig triangel",
        },
        "sec-calculate": {
          "blocks": [
            {
              "kind": "p",
              "text": "Kalkylatorn har två inmatningsfält. Det första tar katet b, den vinkelräta sidan som hör till projektion q. Det andra tar hypotenusan c, hela sidan mitt emot den räta vinkeln. Båda längderna måste använda samma enhet, så konvertera först om ett mått är i centimeter och det andra i meter.",
            },
            {
              "kind": "p",
              "text": "Hypotenusan måste vara längre än katet b, eftersom en katet är en sida vid den räta vinkeln medan hypotenusan sträcker sig över hela triangeln. Om ditt värde för b är större än c har du förmodligen matat in en projektion, höjden eller fel sida.",
            },
            {
              "kind": "p",
              "text": "Klicka på Beräkna projektion q för att se resultatet, och använd Återställ för att rensa båda fälten inför en ny uppgift. Resultatet är en längd i den enhet du matade in, så en katet på 8 cm och en hypotenusa på 10 cm ger 6,4 cm. Resultatet är en sträcklängd längs hypotenusan.",
            },
          ],
          "h2": "Beräkna projektion q i rätvinklig triangel",
        },
        "sec-diagram": {
          "blocks": [
            {
              "kind": "p",
              "text": "Huvudfiguren visar triangeln ABC med den räta vinkeln vid C. Sidan AC är katet a, sidan BC är katet b och sidan AB är hypotenusan c. Höjden CD går från C vinkelrätt mot AB och träffar den i D.",
            },
            {
              "kind": "p",
              "text": "Punkten D delar hypotenusan i två delar: sträckan AD är projektion p och sträckan DB är projektion q. Katet b och projektion q är markerade eftersom de är det par som den här sidan handlar om. Följ beteckningarna i denna ordning: börja vid B, gå längs katet b till C, sedan längs katet a till A, och sedan tillbaka längs hypotenusan från A till B, med ett stopp vid D för att se uppdelningen i p och q.",
            },
            {
              "kind": "p",
              "text": "Kopplingen mellan b och q blir synlig i den lilla triangeln CBD, där katet b är hypotenusan och q är sidan som ligger längs den stora hypotenusan. Eftersom triangeln CBD är likformig med triangeln ABC är förhållandet mellan q och b i den lilla triangeln lika med förhållandet mellan b och c i den stora.",
            },
          ],
          "h2": "Figuren för projektion q i rätvinklig triangel förklarad",
          "image": {
            "alt": "Rätvinklig triangel ABC med rät vinkel vid C, höjden CD mot hypotenusan AB, katet b och projektion q markerade, med kateterna a och b, hypotenusan c, projektionerna p och q samt höjden h betecknade",
            "caption": "Höjden CD delar hypotenusan AB i projektion p (AD) och projektion q (DB), med katet b (BC) markerad.",
            "src": "projection-q-main-triangle.svg",
          },
        },
        "sec-examples": {
          "blocks": [
            {
              "kind": "p",
              "text": "Varje exempel anger de givna värdena, insättningen och det slutliga svaret, och varje exempel håller enheterna konsekventa från början till slut.",
            },
            {
              "kind": "h3",
              "text": "Exempel 1: Grundläggande heltal",
            },
            {
              "kind": "p",
              "text": "Givet [[b = 8]] cm och [[c = 10]] cm ger formeln [[q = \\frac{8^2}{10} = \\frac{64}{10}]], alltså [[q = 6.4]] cm. Den kvadrerade kateten 64 är ett mellanvärde, och division med hypotenusan gör den tillbaka till en längd. Den andra kateten i denna triangel är 6 cm.",
            },
            {
              "kind": "h3",
              "text": "Exempel 2: Jämn division med perfekt kvadrat",
            },
            {
              "kind": "p",
              "text": "Givet [[b = 12]] cm och [[c = 24]] cm blir [[q = \\frac{12^2}{24} = \\frac{144}{24} = 6]] cm. Den kvadrerade kateten divideras jämnt, så svaret är exakt. Den andra projektionen här är 18 cm.",
            },
            {
              "kind": "h3",
              "text": "Exempel 3: Decimalresultat",
            },
            {
              "kind": "p",
              "text": "Givet [[b = 7]] cm och [[c = 14]] cm blir [[q = \\frac{7^2}{14} = \\frac{49}{14} = 3.5]] cm. Ett decimalresultat är normalt: projektionen behöver inte vara ett heltal även när båda indata är det. Den andra projektionen är 10,5 cm.",
            },
            {
              "kind": "h3",
              "text": "Exempel 4: Större mått",
            },
            {
              "kind": "p",
              "text": "Givet [[b = 15]] m och [[c = 25]] m blir [[q = \\frac{15^2}{25} = \\frac{225}{25} = 9]] m. Större tal ändrar ingenting i metoden: kvadrera och dividera sedan. Den andra projektionen är 16 m, som hör ihop med en katet på 20 m.",
            },
            {
              "kind": "h3",
              "text": "Exempel 5: Små mått",
            },
            {
              "kind": "p",
              "text": "Givet [[b = 30]] mm och [[c = 50]] mm blir [[q = \\frac{30^2}{50} = \\frac{900}{50} = 18]] mm. Små mått fungerar på samma sätt, och om enheten hålls i millimeter hela vägen undviks all konvertering. Den andra projektionen är 32 mm, som hör ihop med en katet på 40 mm.",
            },
            {
              "kind": "h3",
              "text": "Exempel 6: Bråkmått",
            },
            {
              "kind": "p",
              "text": "Givet [[b = \\frac{3}{4}]] ft och [[c = \\frac{3}{2}]] ft, kvadrera först kateten: [[b^2 = \\frac{9}{16}]] kvadratfot. Sedan blir [[q = \\frac{9/16}{3/2} = \\frac{9}{16} \\times \\frac{2}{3} = \\frac{18}{48} = \\frac{3}{8}]] ft. Att dividera med ett bråk innebär att multiplicera med dess inverterade värde, vilket är det steg som de flesta elever missar med bråkmått.",
            },
            {
              "kind": "h3",
              "text": "Exempel 7: Olika enheter",
            },
            {
              "kind": "p",
              "text": "Givet [[b = 80]] cm och [[c = 1]] m, konvertera först: 1 m är lika med 100 cm. Då blir [[q = \\frac{80^2}{100} = \\frac{6400}{100} = 64]] cm. Att använda 1 i stället för 100 skulle ha gett 6400 cm, en projektion som är långt längre än hypotenusan.",
            },
            {
              "kind": "h3",
              "text": "Exempel 8: Större decimalvärden",
            },
            {
              "kind": "p",
              "text": "Givet [[b = 4.5]] m och [[c = 7.5]] m blir [[q = \\frac{4.5^2}{7.5} = \\frac{20.25}{7.5} = 2.7]] m. Decimalindata kräver samma noggrannhet som heltal: kvadrera hela decimaltalet och dividera sedan. Den andra projektionen är 4,8 m, som hör ihop med en katet på 6 m.",
            },
          ],
          "h2": "Genomräknade exempel på beräkning av projektion q",
        },
        "sec-formula": {
          "blocks": [
            {
              "kind": "p",
              "text": "Projektionssatsen säger att kvadraten på katet b är lika med hypotenusan multiplicerad med dess projektion:",
            },
            {
              "kind": "p",
              "text": "[[[b^2 = c \\times q]]]",
            },
            {
              "kind": "p",
              "text": "Division av båda leden med c isolerar q och ger arbetsformeln för den här sidan:",
            },
            {
              "kind": "p",
              "text": "[[[q = \\frac{b^2}{c}]]]",
            },
            {
              "kind": "p",
              "text": "Beräkningen sker i två steg. Steg 1 kvadrerar katet b genom att multiplicera den med sig själv. Steg 2 dividerar den kvadrerade längden med hela hypotenusan c, och resultatet är en vanlig längd, inte en kvadrerad längd.",
            },
            {
              "kind": "p",
              "text": "Enheter kräver omsorg i båda stegen. Om b och c båda är i centimeter är [[b^2]] i kvadratcentimeter, och division med centimeter ger centimeter tillbaka. Att blanda enheter, till exempel meter för b och centimeter för c, ger en meningslös kvot, så konvertera till en enhet innan du beräknar.",
            },
            {
              "kind": "p",
              "text": "Med [[b = 8]] cm och [[c = 10]] cm ger steg 1 [[8^2 = 64]], och steg 2 ger [[q = \\frac{64}{10} = 6.4]] cm. Talet 64 svarar inte på någon fråga i sig: först efter divisionen blir det projektionslängden.",
            },
          ],
          "h2": "Formel för projektion q i rätvinklig triangel",
          "image": {
            "alt": "Rätvinklig triangel ABC med höjden CD, som visar att projektion q är lika med katet b i kvadrat dividerat med hypotenusan c",
            "caption": "Projektionsformeln: q är lika med b i kvadrat dividerat med c, med höjdens fotpunkt D som delar hypotenusan.",
            "src": "projection-q-formula.svg",
          },
        },
        "sec-how-to-use": {
          "blocks": [
            {
              "kind": "p",
              "text": "Elva korta steg tar dig från en betecknad figur till ett kontrollerat svar.",
            },
            {
              "kind": "steps",
              "steps": [
                "Identifiera den rätvinkliga triangeln i din uppgift och bekräfta att den har en rät vinkel.",
                "Hitta den räta vinkelns hörn och höjden från det till hypotenusan.",
                "Identifiera den vinkelräta katet som hör till projektion q, den katet som vidrör hörn B.",
                "Identifiera hela hypotenusan c, sidan mitt emot den räta vinkeln.",
                "Bekräfta att c är större än b. Om det inte är så, beteckna om figuren innan du fortsätter.",
                "Välj kompatibla enheter och konvertera om måtten använder olika enheter.",
                "Mata in katet b i fältet Katet b.",
                "Mata in hypotenusan c i fältet Hypotenusa c.",
                "Klicka på Beräkna projektion q och läs av resultatet.",
                "Kontrollera resultatet: q måste vara positivt och mindre än c.",
                "Använd Återställ när du börjar en ny beräkning.",
              ],
            },
            {
              "kind": "p",
              "text": "Att mata in katet a i stället för katet b ger en annan projektion. Katet a hör ihop med p, så kalkylatorn skulle returnera sträckan intill hörn A, inte den intill B. Beteckningskontrollen i steg 3 är viktigast.",
            },
          ],
          "h2": "Så använder du kalkylatorn för projektion q i rätvinklig triangel",
        },
        "sec-intro": {
          "blocks": [
            {
              "kind": "p",
              "text": "Den här kalkylatorn hittar projektion q i en rätvinklig triangel när du känner till katet b och hela hypotenusan c. Projektion q är den del av hypotenusan som ligger intill katet b och som skapas när höjden från den räta vinkeln möter hypotenusan. Formeln är [[q = \\frac{b^2}{c}]], där b är den vinkelräta kateten och c är hela hypotenusan.",
            },
            {
              "kind": "p",
              "text": "Till exempel, med [[b = 8]] cm och [[c = 10]] cm, blir beräkningen [[q = \\frac{8^2}{10} = \\frac{64}{10} = 6.4]] cm. Värdet 6,4 cm är den del av hypotenusan som hör till katet b, inte kateten i sig och inte hela hypotenusan.",
            },
            {
              "kind": "p",
              "text": "Kalkylatorn finns högst upp på den här sidan, följd av formeln, en betecknad figur, ett bevis, genomräknade exempel och kontroller som du kan köra på varje svar.",
            },
          ],
          "h2": "Kalkylator för projektion q i rätvinklig triangel",
        },
        "sec-leg-b-hypotenuse": {
          "blocks": [
            {
              "kind": "p",
              "text": "En rätvinklig triangel har två vinkelräta sidor, kallade kateter, och en längsta sida, kallad hypotenusan. De två kateterna möts vid den räta vinkeln, och hypotenusan ligger mitt emot den vinkeln. Här är triangeln ABC med den räta vinkeln vid C: katet a är AC, katet b är BC och hypotenusan c är AB.",
            },
            {
              "kind": "p",
              "text": "Katet b är en av de två sidor som bildar den räta vinkeln, så det är en verklig sida i triangeln, inte en sträcka ritad inuti den. Projektion q ligger plant längs hypotenusan, medan katet b går från hörn B till den räta vinkelns hörn C.",
            },
            {
              "kind": "p",
              "text": "Hypotenusan är alltid den längsta sidan i en icke-degenererad rätvinklig triangel, eftersom den ligger mitt emot den största vinkeln, den räta vinkeln. Det är därför formeln kräver [[0 < b < c]] och varför kalkylatorn förväntar sig en hypotenusa som är längre än kateten.",
            },
            {
              "kind": "p",
              "text": "Katet b:s position avgör vilken sträcka som kallas q: katet b vidrör hörn B, så sträckan intill B är q. Kontrollera alltid beteckningarna på din egen figur innan du väljer vilken katet du ska mata in.",
            },
          ],
          "h2": "Förstå katet b och hypotenusan",
          "table": {
            "headers": [
              "Symbol",
              "Betydelse",
            ],
            "rows": [
              [
                "a",
                "Den andra vinkelräta kateten",
              ],
              [
                "b",
                "Katet som hör till q",
              ],
              [
                "c",
                "Hela hypotenusan",
              ],
              [
                "p",
                "Projektion som hör till a",
              ],
              [
                "q",
                "Projektion som hör till b",
              ],
              [
                "h",
                "Höjd mot hypotenusan",
              ],
            ],
          },
        },
        "sec-mistakes": {
          "blocks": [
            {
              "kind": "p",
              "text": "Varje misstag nedan följs av sin korrigering. De flesta beror på beteckningar, inte på räkning.",
            },
            {
              "kind": "steps",
              "steps": [
                "Att använda katet a i stället för katet b: om du matar in a får du p. Med a = 6 och c = 10 blir resultatet 3,6 cm p, inte q.",
                "Att glömma att kvadrera katet b: att dividera b med c i stället för b i kvadrat med c ger 0,8 cm i stället för 6,4 cm.",
                "Att dividera c med b i kvadrat i stället för b i kvadrat med c: kvoten måste vara [[b^2/c]], inte [[c/b^2]]. Med b = 8 och c = 10 ger fel ordning cirka 0,156, vilket inte har någon giltig enhet.",
                "Att blanda ihop projektion p med projektion q: q ligger intill hörn B och p intill hörn A. Beteckna båda sträckorna innan du beräknar.",
                "Att behandla q som den faktiska vinkelräta kateten: q är en sträcka på hypotenusan, inte sidan BC. I 6-8-10-triangeln är katet b 8 cm medan q bara är 6,4 cm.",
                "Att mata in ett katetvärde som är större än eller lika med c: ingen sådan triangel finns, eftersom hypotenusan är den längsta sidan.",
                "Att blanda centimeter och meter: konvertera först, som i exempel 7, där 1 m blev 100 cm.",
                "Att glömma att c står för hela hypotenusan: att använda en projektion eller en katet som nämnare förvränger resultatet.",
                "Att avrunda mellanberäkningar för tidigt: att avrunda den kvadrerade kateten innan divisionen flyttar svaret.",
                "Att blanda ihop b och b i kvadrat: 64 i 6-8-10-exemplet är en kvadrerad längd, medan 6,4 cm är projektionen.",
                "Att tillämpa formeln på en triangel som inte är rätvinklig: projektionssatsen kräver höjden från en rät vinkel.",
                "Att behandla q som hela hypotenusan: q plus p är lika med c, så ett resultat på c eller mer tyder på ett fel.",
              ],
            },
            {
              "kind": "p",
              "text": "Om ett svar ser fel ut, stanna och beteckna om figuren innan du beräknar igen. De flesta felen ovan försvinner när p och q är tydligt markerade på hypotenusan.",
            },
          ],
          "h2": "Vanliga misstag vid beräkning av projektion q",
        },
        "sec-practice": {
          "blocks": [
            {
              "kind": "p",
              "text": "Försök med alla sex uppgifterna på papper innan du läser svaren. Inget av värdena upprepar de genomräknade exemplen.",
            },
            {
              "kind": "h3",
              "text": "Uppgift 1: Grundläggande heltal",
            },
            {
              "kind": "p",
              "text": "En rätvinklig triangel har katet [[b = 9]] cm och hypotenusa [[c = 15]] cm. Beräkna projektion q.",
            },
            {
              "kind": "h3",
              "text": "Uppgift 2: Decimalvärden",
            },
            {
              "kind": "p",
              "text": "Givet [[b = 1.5]] m och [[c = 2.5]] m, beräkna projektion q.",
            },
            {
              "kind": "h3",
              "text": "Uppgift 3: Bråkmått",
            },
            {
              "kind": "p",
              "text": "Givet [[b = \\frac{5}{6}]] ft och [[c = \\frac{5}{3}]] ft, beräkna q som ett bråk.",
            },
            {
              "kind": "h3",
              "text": "Uppgift 4: Enhetskonvertering",
            },
            {
              "kind": "p",
              "text": "En katet mäter [[b = 80]] cm och hypotenusan mäter [[c = 2]] m. Beräkna q i centimeter.",
            },
            {
              "kind": "h3",
              "text": "Uppgift 5: Beräkna p efter att ha beräknat q",
            },
            {
              "kind": "p",
              "text": "En rätvinklig triangel har hypotenusa [[c = 25]] cm och katet [[b = 15]] cm. Beräkna q och sedan p.",
            },
            {
              "kind": "h3",
              "text": "Uppgift 6: Flerstegsuppgift med projektion q och höjd h",
            },
            {
              "kind": "p",
              "text": "Givet [[c = 25]] cm och [[b = 15]] cm, beräkna q, sedan p och sedan höjden h.",
            },
            {
              "kind": "h3",
              "text": "Svar till övningsuppgifterna",
            },
            {
              "kind": "p",
              "text": "Svar 1: [[q = \\frac{9^2}{15} = \\frac{81}{15} = 5.4]] cm.",
            },
            {
              "kind": "p",
              "text": "Svar 2: [[q = \\frac{1.5^2}{2.5} = \\frac{2.25}{2.5} = 0.9]] m.",
            },
            {
              "kind": "p",
              "text": "Svar 3: [[b^2 = \\frac{25}{36}]], alltså [[q = \\frac{25/36}{5/3} = \\frac{25}{36} \\times \\frac{3}{5} = \\frac{5}{12}]] ft.",
            },
            {
              "kind": "p",
              "text": "Svar 4: Konvertera 2 m till 200 cm, sedan [[q = \\frac{80^2}{200} = \\frac{6400}{200} = 32]] cm.",
            },
            {
              "kind": "p",
              "text": "Svar 5: [[q = \\frac{15^2}{25} = \\frac{225}{25} = 9]] cm, sedan [[p = 25 - 9 = 16]] cm.",
            },
            {
              "kind": "p",
              "text": "Svar 6: [[q = 9]] cm och [[p = 16]] cm, alltså [[h = \\sqrt{9 \\times 16} = \\sqrt{144} = 12]] cm.",
            },
          ],
          "h2": "Övningsuppgifter med svar",
        },
        "sec-proof": {
          "blocks": [
            {
              "kind": "p",
              "text": "Beviset vilar på likformiga trianglar. Att rita höjden CD delar triangeln ABC i två mindre rätvinkliga trianglar, ACD och CBD, och båda är likformiga med den ursprungliga triangeln. Ett av deras sidförhållanden ger projektionssatsen direkt.",
            },
            {
              "kind": "p",
              "text": "Fokusera på triangeln CBD och hela triangeln ABC. Båda innehåller vinkeln vid B, och båda innehåller en rät vinkel, så deras tredje vinklar måste också stämma överens. Att matcha de sidor som sitter på samma platser ger proportionen:",
            },
            {
              "kind": "p",
              "text": "[[[\\frac{DB}{BC} = \\frac{BC}{AB}]]]",
            },
            {
              "kind": "p",
              "text": "Sätt nu in standardsymbolerna: [[DB = q]], [[BC = b]] och [[AB = c]]. Proportionen blir:",
            },
            {
              "kind": "p",
              "text": "[[[\\frac{q}{b} = \\frac{b}{c}]]]",
            },
            {
              "kind": "p",
              "text": "Korsmultiplikation tar bort bråken. Vänster täljare gånger höger nämnare är lika med höger täljare gånger vänster nämnare, så [[q \\times c = b \\times b]], vilket är:",
            },
            {
              "kind": "p",
              "text": "[[[b^2 = c \\times q]]]",
            },
            {
              "kind": "p",
              "text": "Division av båda leden med c avslutar beviset och ger [[q = \\frac{b^2}{c}]]. Samma resonemang tillämpat på den andra lilla triangeln, ACD, ger [[a^2 = c \\times p]].",
            },
          ],
          "h2": "Varför fungerar formeln för projektion q?",
          "image": {
            "alt": "Den ursprungliga rätvinkliga triangeln ABC bredvid de mindre likformiga trianglarna ACD och CBD, som visar proportionen q genom b lika med b genom c",
            "caption": "Likformighetsbevis: q genom b är lika med b genom c, så korsmultiplikation ger b i kvadrat lika med c gånger q.",
            "src": "projection-q-similar-triangles.svg",
          },
        },
        "sec-properties": {
          "blocks": [
            {
              "kind": "p",
              "text": "Nio egenskaper följer direkt från [[q = \\frac{b^2}{c}]]. Var och en fungerar också som en rimlighetskontroll av ett nytt svar.",
            },
            {
              "items": [
                "Projektion q är alltid kortare än hela hypotenusan i en icke-degenererad triangel, eftersom q bara är en del av c.",
                "Att öka katet b medan c hålls fast ökar q, eftersom den kvadrerade kateten i täljaren växer.",
                "Att öka c medan b hålls fast minskar q, eftersom nämnaren växer.",
                "Om b och c båda multipliceras med samma positiva faktor skalas q med den faktorn.",
                "Om p är lika med q är båda vinkelräta kateterna lika, och triangeln är en likbent rätvinklig triangel.",
                "Projektion q är alltid positiv i en giltig icke-degenererad triangel. Noll eller negativa värden beskriver ingen verklig triangel.",
                "Projektion q är en längd, inte en area. Den kvadrerade kateten är bara ett mellansteg, och division med c återställer vanliga längdenheter.",
                "Projektion q hör specifikt ihop med katet b. Att använda den med katet a besvarar en helt annan fråga.",
                "Att byta plats på p och q ändrar vilken katet som hör till varje projektion, så beteckningarna måste hållas matchade med sina hörn.",
              ],
              "kind": "list",
            },
            {
              "kind": "p",
              "text": "När höjden träffar hypotenusans mittpunkt måste de två kateterna stämma överens, som figuren nedan visar.",
            },
          ],
          "h2": "Viktiga egenskaper hos projektion q",
          "image": {
            "alt": "Två rätvinkliga trianglar sida vid sida, en med lika projektioner p och q på 5 och en med olika projektioner p lika med 3,6 och q lika med 6,4",
            "caption": "Lika projektioner (p = q = 5) ger lika kateter, medan olika projektioner (p = 3,6, q = 6,4) ger olika kateter.",
            "src": "projection-q-equal-vs-unequal.svg",
          },
        },
        "sec-projection-p": {
          "blocks": [
            {
              "kind": "p",
              "text": "Vissa uppgifter frågar efter den andra projektionen i stället. Motsvarande formel är spegelbilden av formeln för q, med katet a i stället för katet b:",
            },
            {
              "kind": "p",
              "text": "[[[p = \\frac{a^2}{c}]]]",
            },
            {
              "kind": "p",
              "text": "Använd [[a = 6]] cm och [[c = 10]] cm. Då blir [[p = \\frac{6^2}{10} = \\frac{36}{10} = 3.6]] cm. Det stämmer med den andra projektionen i 6-8-10-triangeln från de tidigare exemplen, där q var 6,4 cm och de två projektionerna tillsammans blir 10 cm.",
            },
            {
              "kind": "p",
              "text": "Formeln använder a i stället för b eftersom varje katet hör ihop med projektionen intill sitt eget hörn. Katet a vidrör hörn A, och p är sträckan intill A. Att mata in b i den här formeln skulle ge q, inte p. Kalkylatorn på den här sidan tar bara emot b och c, så använd <a href=\"/right-triangle-projection-p-calculator/\">kalkylatorn för projektion p</a> när du behöver beräkna p från a och c.",
            },
          ],
          "h2": "Så beräknar du projektion p från den andra kateten",
        },
        "sec-pythagoras": {
          "blocks": [
            {
              "kind": "p",
              "text": "Projektionssatsen och Pythagoras sats stämmer exakt överens, och algebran visar varför. Börja från de två projektionsformlerna, [[a^2 = c \\times p]] och [[b^2 = c \\times q]], och addera dem:",
            },
            {
              "kind": "p",
              "text": "[[[a^2 + b^2 = c \\times p + c \\times q]]]",
            },
            {
              "kind": "p",
              "text": "Att bryta ut c från högra ledet ger [[a^2 + b^2 = c(p + q)]]. Eftersom [[p + q = c]] ger insättning det välkända resultatet:",
            },
            {
              "kind": "p",
              "text": "[[[a^2 + b^2 = c^2]]]",
            },
            {
              "kind": "p",
              "text": "En numerisk kontroll med 6-8-10-triangeln bekräftar det: [[a^2 + b^2 = 36 + 64 = 100]] och [[c^2 = 10^2 = 100]]. Projektionssatsen delar upp Pythagoras samband i en del per katet, och att addera delarna bygger upp det igen.",
            },
            {
              "kind": "p",
              "text": "Den uppdelningen är det som gör projektionsformlerna användbara: Pythagoras sats ensam kan inte hitta en projektion från en katet och en hypotenusa, eftersom den talar om kateterna tillsammans.",
            },
          ],
          "h2": "Sambandet mellan projektion q och Pythagoras sats",
        },
        "sec-relationship-altitude": {
          "blocks": [
            {
              "kind": "p",
              "text": "Projektion q hänger också ihop med höjden genom ett andra geometriskt medelförhållande. Höjden h är det geometriska medelvärdet av de två projektionerna:",
            },
            {
              "kind": "p",
              "text": "[[[h = \\sqrt{p \\times q}]]]",
            },
            {
              "kind": "p",
              "text": "Eftersom [[p = c - q]] kan höjden också skrivas med bara q och c:",
            },
            {
              "kind": "p",
              "text": "[[[h = \\sqrt{q(c - q)}]]]",
            },
            {
              "kind": "p",
              "text": "Använd [[q = 6.4]] cm och [[c = 10]] cm. Beräkna först p: [[p = 10 - 6.4 = 3.6]] cm. Sedan blir [[h = \\sqrt{3.6 \\times 6.4} = \\sqrt{23.04} = 4.8]] cm. Höjden är kortare än båda kateterna, som den måste vara.",
            },
            {
              "kind": "p",
              "text": "Projektion q ensam bestämmer inte höjden: två olika trianglar kan ha samma q med olika hypotenusor. Hela hypotenusan, eller den andra projektionen, behövs alltid också. <a href=\"/right-triangle-altitude-from-projections-calculator/\">Kalkylatorn för höjd från projektioner</a> hanterar den beräkningen när båda projektionerna är kända.",
            },
          ],
          "h2": "Sambandet mellan projektion q och höjden",
        },
        "sec-relationship-leg-b": {
          "blocks": [
            {
              "kind": "p",
              "text": "Projektionsformeln kan ställas om för att hitta katet b i stället för q. Utgå från [[b^2 = c \\times q]] och ta den positiva kvadratroten av båda leden:",
            },
            {
              "kind": "p",
              "text": "[[[b = \\sqrt{c \\times q}]]]",
            },
            {
              "kind": "p",
              "text": "Kontrollera med de välkända talen: [[b = 8]] cm, [[c = 10]] cm och [[q = 6.4]] cm. Produkten under rottecknet är [[c \\times q = 10 \\times 6.4 = 64]], och [[\\sqrt{64} = 8]] cm, vilket är den katet vi började med.",
            },
            {
              "kind": "p",
              "text": "Sambandet är det geometriska medelförhållandet: katet b är det geometriska medelvärdet av hypotenusan och dess projektion. Det är därför kateten förekommer i kvadrat i satsen och varför kvadratroten dyker upp när man löser för kateten. För uppgifter som utgår från q och c kör <a href=\"/right-triangle-leg-b-from-projection-calculator/\">kalkylatorn för katet b från projektion</a> den här omställda formeln direkt.",
            },
          ],
          "h2": "Sambandet mellan projektion q och katet b",
        },
        "sec-relationship-pq": {
          "blocks": [
            {
              "kind": "p",
              "text": "De två projektionerna är de två delarna av en rak sida, så tillsammans blir de hela hypotenusan:",
            },
            {
              "kind": "p",
              "text": "[[[c = p + q]]]",
            },
            {
              "kind": "p",
              "text": "Omställning ger [[p = c - q]]. Med [[c = 10]] cm och [[q = 6.4]] cm blir subtraktionen [[p = 10 - 6.4 = 3.6]] cm. Samma subtraktion fungerar åt andra hållet: [[q = c - p]]. <a href=\"/right-triangle-hypotenuse-from-projections-calculator/\">Kalkylatorn för hypotenusa från projektioner</a> bygger upp c från p och q när hypotenusan i sig är okänd.",
            },
            {
              "kind": "p",
              "text": "Att jämföra p och q säger något om triangelns form. När q är lika med p träffar höjden hypotenusans mittpunkt och de två kateterna är lika, så triangeln är likbent. När q är större än p är katet b längre än katet a, och när p är större är katet a längre. Den längre projektionen hör alltid till den längre kateten.",
            },
            {
              "kind": "p",
              "text": "I 6-8-10-triangeln är q 6,4 cm och p 3,6 cm, så q är större, och katet b på 8 cm är mycket riktigt längre än katet a på 6 cm.",
            },
          ],
          "h2": "Sambandet mellan projektion p och projektion q",
          "image": {
            "alt": "Rätvinklig triangel som jämför projektion q ihop med katet b mot projektion p ihop med katet a, med c lika med 10, q lika med 6,4 och p lika med 3,6",
            "caption": "q använder b (64 dividerat med 10 = 6,4) och p använder a (36 dividerat med 10 = 3,6).",
            "src": "projection-q-vs-p.svg",
          },
        },
        "sec-step-example": {
          "blocks": [
            {
              "kind": "p",
              "text": "Använd [[b = 8]] cm och [[c = 10]] cm. De fyra stegen nedan visar hela beräkningen, utan att något hoppas över.",
            },
            {
              "kind": "steps",
              "steps": [
                "Skriv formeln: [[q = \\frac{b^2}{c}]].",
                "Sätt in värdena: [[q = \\frac{8^2}{10}]].",
                "Kvadrera kateten: [[q = \\frac{64}{10}]].",
                "Dividera: [[q = 6.4]] cm.",
              ],
            },
            {
              "kind": "p",
              "text": "Svaret 6,4 cm är den sträcka på hypotenusan som ligger intill katet b, inte en vinkelrät sida och inte en area. En kort kontroll sluter cirkeln: [[b^2 = 8^2 = 64]] och [[c \\times q = 10 \\times 6.4 = 64]], så satsens båda led stämmer överens.",
            },
            {
              "kind": "p",
              "text": "Som referens är den andra projektionen [[p = 10 - 6.4 = 3.6]] cm, katet a är [[a = \\sqrt{10 \\times 3.6} = 6]] cm, och höjden är [[h = \\sqrt{3.6 \\times 6.4} = 4.8]] cm, vilket bekräftar den välkända 6-8-10-triangeln.",
            },
          ],
          "h2": "Steg för steg-exempel på att hitta projektion q",
          "image": {
            "alt": "Rätvinklig triangel med katet b 8 cm och hypotenusa 10 cm, genomräknad till projektion q lika med 6,4 cm",
            "caption": "Genomräknat exempel: b = 8 cm och c = 10 cm ger q = 64 dividerat med 10 = 6,4 cm.",
            "src": "projection-q-example-b8-c10.svg",
          },
        },
        "sec-verify": {
          "blocks": [
            {
              "kind": "p",
              "text": "Fyra oberoende kontroller fångar nästan varje fel. Kör minst en på varje svar, och alla fyra när uppgiften är viktig. Exemplet nedan använder [[b = 8]] cm, [[c = 10]] cm och [[q = 6.4]] cm genomgående.",
            },
            {
              "kind": "h3",
              "text": "Metod 1: Kontroll med projektionssatsen",
            },
            {
              "kind": "p",
              "text": "Kontrollera [[q = \\frac{b^2}{c}]] direkt. Här blir [[\\frac{8^2}{10} = \\frac{64}{10} = 6.4]] cm, vilket stämmer med svaret. Om omräkningen skiljer sig har antingen kvadreringen eller divisionen gått fel.",
            },
            {
              "kind": "h3",
              "text": "Metod 2: Sträckaddition",
            },
            {
              "kind": "p",
              "text": "Beräkna p genom subtraktion: [[p = 10 - 6.4 = 3.6]] cm. Kontrollera sedan [[p + q = 3.6 + 6.4 = 10]] cm, vilket är lika med c. En summa som missar c pekar på ett subtraktionsfel.",
            },
            {
              "kind": "h3",
              "text": "Metod 3: Kontroll med Pythagoras sats",
            },
            {
              "kind": "p",
              "text": "Beräkna katet a från p: [[a = \\sqrt{10 \\times 3.6} = 6]] cm. Kontrollera sedan [[a^2 + b^2 = 36 + 64 = 100 = 10^2]]. Den här kontrollen prövar hela triangeln, så den fångar beteckningsfel som den första kontrollen kan missa. <a href=\"/right-triangle-leg-a-from-projection-calculator/\">Kalkylatorn för katet a från projektion</a> kör steget för a direkt.",
            },
            {
              "kind": "h3",
              "text": "Metod 4: Geometrisk rimlighet",
            },
            {
              "kind": "p",
              "text": "Bekräfta att q är positivt, mindre än c, i rätt enhet och en hypotenussträcka snarare än en vinkelrät sida. Här är 6,4 cm positivt, mindre än 10 cm, i centimeter och kortare än katet b på 8 cm.",
            },
          ],
          "h2": "Så kontrollerar du din beräkning av projektion q",
        },
        "sec-what-projection-q": {
          "blocks": [
            {
              "kind": "p",
              "text": "Rita höjden från den räta vinkelns hörn C vinkelrätt mot hypotenusan AB. Den möter hypotenusan i en punkt som kallas fotpunkten, betecknad D, och delar den i två angränsande sträckor: AD är projektion p och DB är projektion q.",
            },
            {
              "kind": "p",
              "text": "Projektion q hör till katet b eftersom den ligger intill hörn B, samma hörn där katet b börjar. I den lilla triangeln CBD är katet b hypotenusan och q är en av dess kateter, vilket är det geometriska sambandet som får projektionssatsen att fungera. Projektion p hör, av samma skäl, till katet a, som vidrör hörn A.",
            },
            {
              "kind": "p",
              "text": "Projektioner är längder längs hypotenusan, mätta i samma enhet som de andra sidorna. De är inte vinkelräta mot någonting, och de är inte sidor i den ursprungliga triangeln. <a href=\"/right-triangle-projection-calculator/\">Projektionskalkylatorn för rätvinkliga trianglar</a> hittar båda projektionerna när kateterna och hypotenusan är kända.",
            },
            {
              "kind": "p",
              "text": "Eftersom p och q är de två delarna av en rak sida blir de tillsammans hela hypotenusan:",
            },
            {
              "kind": "p",
              "text": "[[[p + q = c]]]",
            },
            {
              "kind": "p",
              "text": "Med [[c = 10]] cm och [[q = 6.4]] cm blir den andra projektionen [[p = 10 - 6.4 = 3.6]] cm.",
            },
            {
              "kind": "p",
              "text": "Projektion q är inte samma sak som katet b. Katet b är sidan BC, en av sidorna som bildar den räta vinkeln, medan q är sträckan DB längs hypotenusan. I 6-8-10-triangeln är katet b 8 cm och projektion q bara 6,4 cm.",
            },
          ],
          "h2": "Vad är projektion q i en rätvinklig triangel?",
        },
        "sec-why-squared": {
          "blocks": [
            {
              "kind": "p",
              "text": "Kvadraten finns där eftersom projektionssatsen är ett påstående om en kvadrerad katet: den säger att kvadraten på katet b är lika med produkten av c och q, [[b^2 = c \\times q]], och formeln för q är vad du får genom att dividera båda leden med c.",
            },
            {
              "kind": "p",
              "text": "Orsaken går tillbaka till likformiga trianglar. I triangeln CBD spelar katet b rollen som hypotenusa, medan q är en av dess kateter. Att jämföra den lilla triangeln med hela triangeln ger proportionen [[\\frac{q}{b} = \\frac{b}{c}]], och katet b förekommer två gånger, en gång i varje förhållande. Korsmultiplikation sätter b på båda sidor, vilket är precis varför kvadraten dyker upp.",
            },
            {
              "kind": "p",
              "text": "Det geometriska medelförhållandet säger samma sak med andra ord: katet b är det geometriska medelvärdet av hypotenusan c och dess projektion q, vilket betyder [[b = \\sqrt{c \\times q}]]. Att kvadrera båda leden ger [[b^2 = c \\times q]], och division med c isolerar q.",
            },
            {
              "kind": "p",
              "text": "Division är steget som isolerar q. Multiplikation i satsen binder q till c, och division med c löser upp den bindningen. Utan kvadraten skulle formeln blanda en längd med en area, och enheterna skulle inte stämma.",
            },
          ],
          "h2": "Varför kvadreras katet b i projektionsformeln?",
        },
      },
      "tocHeading": "Guideinnehåll",
      "tocItems": {
        "sec-applications": "Praktiska tillämpningar av beräkningar av projektion i rätvinklig triangel",
        "sec-calculate": "Beräkna projektion q i rätvinklig triangel",
        "sec-diagram": "Figuren för projektion q i rätvinklig triangel förklarad",
        "sec-examples": "Genomräknade exempel på beräkning av projektion q",
        "sec-faq": "Vanliga frågor",
        "sec-formula": "Formel för projektion q i rätvinklig triangel",
        "sec-how-to-use": "Så använder du kalkylatorn för projektion q i rätvinklig triangel",
        "sec-intro": "Kalkylator för projektion q i rätvinklig triangel",
        "sec-leg-b-hypotenuse": "Förstå katet b och hypotenusan",
        "sec-mistakes": "Vanliga misstag vid beräkning av projektion q",
        "sec-practice": "Övningsuppgifter med svar",
        "sec-projection-p": "Så beräknar du projektion p från den andra kateten",
        "sec-proof": "Varför fungerar formeln för projektion q?",
        "sec-properties": "Viktiga egenskaper hos projektion q",
        "sec-pythagoras": "Sambandet mellan projektion q och Pythagoras sats",
        "sec-related": "Utforska relaterade kalkylatorer för rätvinkliga trianglar",
        "sec-relationship-altitude": "Sambandet mellan projektion q och höjden",
        "sec-relationship-leg-b": "Sambandet mellan projektion q och katet b",
        "sec-relationship-pq": "Sambandet mellan projektion p och projektion q",
        "sec-step-example": "Steg för steg-exempel på att hitta projektion q",
        "sec-verify": "Så kontrollerar du din beräkning av projektion q",
        "sec-what-projection-q": "Vad är projektion q i en rätvinklig triangel?",
        "sec-why-squared": "Varför kvadreras katet b i projektionsformeln?",
      },
    },
};
