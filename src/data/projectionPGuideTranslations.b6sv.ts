// projectionPGuideTranslations.bsv.ts: Right Triangle Projection P
// Guide (Page 34 of 45) translation.
export const PROJP_B6_SV = {
  "sv": {
      "faqHeading": "Vanliga frågor",
      "faqs": [
        {
          "answer": "Formeln är [[p = \\frac{a^2}{c}]], där a är den katet som hör till p och c är hela hypotenusan. Kvadrera kateten a först och dividera sedan med c. Till exempel ger [[a = 6]] cm och [[c = 10]] cm [[p = 3.6]] cm.",
          "question": "Vad är formeln för projektion p?",
        },
        {
          "answer": "Projektion p är det segment av hypotenusan som ligger intill hörn A och som skapas när höjden från den räta vinkeln möter hypotenusan i punkt D. I triangeln ABC är [[p = AD]], den del av hypotenusan som hör till kateten a.",
          "question": "Vad representerar projektion p?",
        },
        {
          "answer": "Kvadraten kommer från likformiga trianglar: triangeln ACD är likformig med triangeln ABC, vilket ger [[\\frac{p}{a} = \\frac{a}{c}]], och kateten a förekommer i båda förhållandena. Korsmultiplikation ger [[a^2 = c \\times p]], så kvadraten är inbyggd i geometrin.",
          "question": "Varför är kateten a kvadrerad?",
        },
        {
          "answer": "Division isolerar p. Projektionssatsen säger [[a^2 = c \\times p]], där p multipliceras med c, så division av båda leden med c lämnar p ensamt. Divisionen omvandlar också den kvadrerade längden till en vanlig längd.",
          "question": "Varför dividerar vi med hypotenusan?",
        },
        {
          "answer": "Nej. Kateten a är sidan AC, en av de sidor som bildar den räta vinkeln, medan projektion p är segmentet AD längs hypotenusan. I 6-8-10-triangeln är kateten a 6 cm och projektion p bara 3.6 cm.",
          "question": "Är projektion p samma sak som kateten a?",
        },
        {
          "answer": "Nej. Projektion p är bara en del av hypotenusan, så den måste vara mindre än c. Om p vore lika med c skulle q vara noll och triangeln degenererad. Ett resultat som är större än c tyder alltid på ett inmatnings- eller märkningsfel.",
          "question": "Kan projektion p vara större än hypotenusan?",
        },
        {
          "answer": "Projektion p ligger intill hörn A och hör ihop med kateten a, medan projektion q ligger intill hörn B och hör ihop med kateten b. De är de två segment som höjden skapar på hypotenusan: [[p + q = c]].",
          "question": "Vad är skillnaden mellan projektion p och q?",
        },
        {
          "answer": "Nej. Kateten a hör endast ihop med projektion p. För att hitta q behöver du kateten b, med hjälp av [[q = \\frac{b^2}{c}]], eller subtrahera: [[q = c - p]] när p är känt. <a href=\"/right-triangle-projection-q-calculator/\">Kalkylatorn för projektion q</a> hittar q utifrån b och c.",
          "question": "Kan jag beräkna projektion q med hjälp av kateten a?",
        },
        {
          "answer": "Du behöver också q eller c. Hitta q med [[q = c - p]] och använd sedan [[h = \\sqrt{p \\times q}]]. Med [[p = 3.6]] cm och [[c = 10]] cm är [[q = 6.4]] cm och [[h = 4.8]] cm. Projektion p ensam kan inte bestämma höjden.",
          "question": "Hur hittar jag höjden när projektion p är känd?",
        },
        {
          "answer": "Räkna om [[p = \\frac{a^2}{c}]], kontrollera sedan [[p + q = c]] efter att du hittat q genom subtraktion, och bekräfta att p är positivt och mindre än c. Du kan också hitta kateten b utifrån q och kontrollera [[a^2 + b^2 = c^2]].",
          "question": "Hur kan jag kontrollera projektion p?",
        },
        {
          "answer": "Höjden träffar hypotenusans mittpunkt och de två kateterna är lika, så triangeln är likbent. Med [[c = 10]] cm och [[p = q = 5]] cm är båda kateterna lika med [[\\sqrt{50}]] cm, ungefär 7.071 cm.",
          "question": "Vad händer när p och q är lika?",
        },
        {
          "answer": "Hypotenusan ligger mittemot den räta vinkeln, den största vinkeln i triangeln, och sidan mittemot den största vinkeln är alltid den längsta sidan. Om a vore lika med eller större än c skulle ingen sådan rätvinklig triangel kunna existera.",
          "question": "Varför måste hypotenusan vara längre än kateten a?",
        },
      ],
      "relatedHeading": "Utforska relaterade kalkylatorer för rätvinkliga trianglar",
      "relatedIntro": "Varje kalkylator nedan hanterar en specifik uppgift för rätvinkliga trianglar, så välj det verktyg som matchar de mått du redan känner till.",
      "relatedItems": [
        "Kalkylator för projektion i rätvinklig triangel",
        "Kalkylator för projektion q i rätvinklig triangel",
        "Kalkylator för katet a från projektion i rätvinklig triangel",
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
              "text": "Den mest direkta användningen är geometriläxor och klassrumsarbete, där projektionsproblem testar om eleverna kan märka ett diagram och tillämpa [[p = \\frac{a^2}{c}]] i stället för att av vana ta till Pythagoras sats. Likformighetsövningar använder samma upplägg, eftersom själva beviset är en övning i att matcha motsvarande sidor.",
            },
            {
              "kind": "p",
              "text": "Teknisk ritning använder satsen när en rätvinklig triangel måste rekonstrueras utifrån delvisa mått: om en ritning anger hypotenusan och höjdens fotpunkt följer den saknade projektionen utan att formen behöver mätas om. Lärare använder också upplägget som en brygglektion mellan segmentaddition och likformighet.",
            },
            {
              "kind": "p",
              "text": "Ett villkor begränsar varje tillämpning: den rätvinkliga triangelgeometri som krävs måste faktiskt existera. Satsen beskriver exakta geometriska samband, inte ungefärliga fältmätningar, så den ersätter aldrig noggrann lantmäterimätning eller professionell teknisk mätning.",
            },
          ],
          "h2": "Praktiska tillämpningar av projektionsberäkningar för rätvinkliga trianglar",
        },
        "sec-calculate": {
          "blocks": [
            {
              "kind": "p",
              "text": "Kalkylatorn har två inmatningsfält. Det första tar kateten a, den vinkelräta sidan som hör till projektion p. Det andra tar hypotenusan c, den fullständiga sidan mittemot den räta vinkeln. Båda längderna måste använda samma enhet, så konvertera först om ett mått är i centimeter och det andra i meter.",
            },
            {
              "kind": "p",
              "text": "Hypotenusan måste vara längre än kateten a, eftersom en katet är en sida i den räta vinkeln medan hypotenusan sträcker sig över hela triangeln. Om ditt a-värde är större än c har du förmodligen angett en projektion, höjden eller fel sida.",
            },
            {
              "kind": "p",
              "text": "Klicka på Beräkna projektion p för att se resultatet, och använd Återställ för att rensa båda fälten inför ett nytt problem. Resultatet är en längd i den enhet du angav, så en katet på 6 cm och en hypotenusa på 10 cm ger 3.6 cm. Resultatet är en segmentlängd längs hypotenusan.",
            },
          ],
          "h2": "Beräkna projektion p i en rätvinklig triangel",
        },
        "sec-diagram": {
          "blocks": [
            {
              "kind": "p",
              "text": "Huvuddiagrammet visar triangeln ABC med den räta vinkeln vid C. Sidan AC är kateten a, sidan BC är kateten b och sidan AB är hypotenusan c. Höjden CD faller från C vinkelrätt mot AB och träffar den i D.",
            },
            {
              "kind": "p",
              "text": "Punkt D delar hypotenusan i två delar: segmentet AD är projektion p och segmentet DB är projektion q. Kateten a och projektion p är markerade eftersom de är det par som denna sida handlar om. Följ märkningarna i denna ordning: börja vid A, gå längs kateten a till C, sedan längs kateten b till B och sedan tillbaka längs hypotenusan från B till A, med en paus vid D för att se uppdelningen i p och q.",
            },
            {
              "kind": "p",
              "text": "Parningen av a med p blir synlig i den lilla triangeln ACD, där kateten a är hypotenusan och p är den sida som ligger längs den stora hypotenusan. Eftersom triangeln ACD är likformig med triangeln ABC är förhållandet mellan p och a i den lilla triangeln lika med förhållandet mellan a och c i den stora.",
            },
          ],
          "h2": "Diagram över projektion p i rätvinklig triangel förklarat",
          "image": {
            "alt": "Rätvinklig triangel ABC med rät vinkel vid C, höjden CD till hypotenusan AB, kateten a och projektion p markerade, med kateterna a och b, hypotenusan c, projektionerna p och q samt höjden h märkta",
            "caption": "Höjden CD delar hypotenusan AB i projektion p (AD) och projektion q (DB), med kateten a (AC) markerad.",
            "src": "projection-p-main-triangle.svg",
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
              "text": "Med [[a = 6]] cm och [[c = 10]] cm ger formeln [[p = \\frac{6^2}{10} = \\frac{36}{10}]], så [[p = 3.6]] cm. Den kvadrerade kateten 36 är ett mellanvärde, och division med hypotenusan gör den tillbaka till en längd. Den andra kateten i denna triangel är 8 cm.",
            },
            {
              "kind": "h3",
              "text": "Exempel 2: Division med heltalskvot",
            },
            {
              "kind": "p",
              "text": "Med [[a = 8]] cm och [[c = 16]] cm är [[p = \\frac{8^2}{16} = \\frac{64}{16} = 4]] cm. Den kvadrerade kateten divideras jämnt, så svaret är exakt. Den andra projektionen här är 12 cm.",
            },
            {
              "kind": "h3",
              "text": "Exempel 3: Decimalresultat",
            },
            {
              "kind": "p",
              "text": "Med [[a = 7]] cm och [[c = 14]] cm är [[p = \\frac{7^2}{14} = \\frac{49}{14} = 3.5]] cm. Ett decimalresultat är normalt: projektionen behöver inte vara ett heltal även om båda indata är det. Den andra projektionen är 10.5 cm.",
            },
            {
              "kind": "h3",
              "text": "Exempel 4: Större mått",
            },
            {
              "kind": "p",
              "text": "Med [[a = 12]] m och [[c = 20]] m är [[p = \\frac{12^2}{20} = \\frac{144}{20} = 7.2]] m. Större tal ändrar ingenting i metoden: kvadrera och dividera sedan. Den andra projektionen är 12.8 m, som hör ihop med en katet på 16 m.",
            },
            {
              "kind": "h3",
              "text": "Exempel 5: Små mått",
            },
            {
              "kind": "p",
              "text": "Med [[a = 30]] mm och [[c = 50]] mm är [[p = \\frac{30^2}{50} = \\frac{900}{50} = 18]] mm. Små mått fungerar på samma sätt, och att behålla enheten millimeter hela vägen undviker all konvertering. Den andra projektionen är 32 mm, som hör ihop med en katet på 40 mm.",
            },
            {
              "kind": "h3",
              "text": "Exempel 6: Bråkmått",
            },
            {
              "kind": "p",
              "text": "Med [[a = \\frac{3}{4}]] ft och [[c = \\frac{3}{2}]] ft, kvadrera kateten först: [[a^2 = \\frac{9}{16}]] kvadratfot. Sedan är [[p = \\frac{9/16}{3/2} = \\frac{9}{16} \\times \\frac{2}{3} = \\frac{18}{48} = \\frac{3}{8}]] ft. Att dividera med ett bråk innebär att multiplicera med dess inverterade värde, vilket är det steg som de flesta elever missar med bråkmått.",
            },
            {
              "kind": "h3",
              "text": "Exempel 7: Olika enheter",
            },
            {
              "kind": "p",
              "text": "Med [[a = 60]] cm och [[c = 1]] m, konvertera först: 1 m är lika med 100 cm. Sedan är [[p = \\frac{60^2}{100} = \\frac{3600}{100} = 36]] cm. Att använda 1 i stället för 100 skulle ha gett 3600 cm, en projektion som är långt längre än hypotenusan.",
            },
            {
              "kind": "h3",
              "text": "Exempel 8: Större decimalvärden",
            },
            {
              "kind": "p",
              "text": "Med [[a = 4.5]] m och [[c = 7.5]] m är [[p = \\frac{4.5^2}{7.5} = \\frac{20.25}{7.5} = 2.7]] m. Decimalindata kräver samma noggrannhet som heltal: kvadrera hela decimaltalet och dividera sedan. Den andra projektionen är 4.8 m, som hör ihop med en katet på 6 m.",
            },
          ],
          "h2": "Genomräknade exempel på beräkning av projektion p",
        },
        "sec-formula": {
          "blocks": [
            {
              "kind": "p",
              "text": "Projektionssatsen säger att kvadraten på kateten a är lika med hypotenusan multiplicerad med dess projektion:",
            },
            {
              "kind": "p",
              "text": "[[[a^2 = c \\times p]]]",
            },
            {
              "kind": "p",
              "text": "Att dividera båda leden med c isolerar p och ger den formel som används på denna sida:",
            },
            {
              "kind": "p",
              "text": "[[[p = \\frac{a^2}{c}]]]",
            },
            {
              "kind": "p",
              "text": "Beräkningen går i två steg. Steg 1 kvadrerar kateten a, det vill säga multiplicerar den med sig själv. Steg 2 dividerar den kvadrerade längden med hela hypotenusan c, och resultatet är en vanlig längd, inte en kvadrerad längd.",
            },
            {
              "kind": "p",
              "text": "Enheter kräver noggrannhet i båda stegen. Om a och c båda är i centimeter är [[a^2]] i kvadratcentimeter, och division med centimeter ger centimeter tillbaka. Blandade enheter, som meter för a och centimeter för c, ger en meningslös kvot, så konvertera till en enhet innan du beräknar.",
            },
            {
              "kind": "p",
              "text": "Med [[a = 6]] cm och [[c = 10]] cm ger steg 1 [[6^2 = 36]], och steg 2 ger [[p = \\frac{36}{10} = 3.6]] cm. Talet 36 svarar inte på någon fråga i sig: först efter divisionen blir det projektionslängden.",
            },
          ],
          "h2": "Formel för projektion p i rätvinklig triangel",
          "image": {
            "alt": "Rätvinklig triangel ABC med höjden CD, som visar att projektion p är lika med kateten a i kvadrat dividerat med hypotenusan c",
            "caption": "Projektionsformeln: p är lika med a i kvadrat dividerat med c, där höjdens fotpunkt D delar hypotenusan.",
            "src": "projection-p-formula.svg",
          },
        },
        "sec-how-to-use": {
          "blocks": [
            {
              "kind": "p",
              "text": "Elva korta steg tar dig från ett märkt diagram till ett kontrollerat svar.",
            },
            {
              "kind": "steps",
              "steps": [
                "Identifiera den rätvinkliga triangeln i ditt problem och bekräfta att den har en rät vinkel.",
                "Hitta den räta vinkelns hörn och höjden från det till hypotenusan.",
                "Identifiera den vinkelräta katet som hör till projektion p, kateten som vidrör hörn A.",
                "Identifiera hela hypotenusan c, sidan mittemot den räta vinkeln.",
                "Bekräfta att c är större än a. Om det inte är så, märk om diagrammet innan du fortsätter.",
                "Välj kompatibla enheter och konvertera om måtten använder olika enheter.",
                "Ange kateten a i fältet Katet a.",
                "Ange hypotenusan c i fältet Hypotenusa c.",
                "Klicka på Beräkna projektion p och läs av resultatet.",
                "Kontrollera resultatet: p måste vara positivt och mindre än c.",
                "Använd Återställ när du börjar en ny beräkning.",
              ],
            },
            {
              "kind": "p",
              "text": "Att ange kateten b i stället för kateten a ger en annan projektion. Kateten b hör ihop med q, så kalkylatorn skulle returnera segmentet intill hörn B, inte det intill A. Märkningskontrollen i steg 3 är viktigast.",
            },
          ],
          "h2": "Så använder du kalkylatorn för projektion p i rätvinklig triangel",
        },
        "sec-intro": {
          "blocks": [
            {
              "kind": "p",
              "text": "Denna kalkylator hittar projektion p i en rätvinklig triangel när du känner till kateten a och hela hypotenusan c. Projektion p är det segment av hypotenusan som ligger intill kateten a och som skapas när höjden från den räta vinkeln möter hypotenusan. Formeln är [[p = \\frac{a^2}{c}]], där a är den vinkelräta kateten och c är hela hypotenusan.",
            },
            {
              "kind": "p",
              "text": "Till exempel, med [[a = 6]] cm och [[c = 10]] cm, är beräkningen [[p = \\frac{6^2}{10} = \\frac{36}{10} = 3.6]] cm. Värdet 3.6 cm är den del av hypotenusan som hör till kateten a, inte kateten själv och inte hela hypotenusan.",
            },
            {
              "kind": "p",
              "text": "Kalkylatorn sitter högst upp på denna sida, följd av formeln, ett märkt diagram, ett bevis, genomräknade exempel och kontroller som du kan köra på vilket svar som helst.",
            },
          ],
          "h2": "Kalkylator för projektion p i rätvinklig triangel",
        },
        "sec-leg-a-hypotenuse": {
          "blocks": [
            {
              "kind": "p",
              "text": "En rätvinklig triangel har två vinkelräta sidor, kallade kateter, och en längsta sida, kallad hypotenusan. De två kateterna möts vid den räta vinkeln, och hypotenusan ligger mittemot den vinkeln. Här är triangeln ABC med den räta vinkeln vid C: kateten a är AC, kateten b är BC och hypotenusan c är AB.",
            },
            {
              "kind": "p",
              "text": "Kateten a är en av de två sidor som bildar den räta vinkeln, så den är en äkta sida i triangeln, inte ett segment som ritats inuti den. Projektion p ligger platt längs hypotenusan, medan kateten a går från hörn A till den räta vinkelns hörn C.",
            },
            {
              "kind": "p",
              "text": "Hypotenusan är alltid den längsta sidan i en icke-degenererad rätvinklig triangel, eftersom den ligger mittemot den största vinkeln, den räta vinkeln. Det är därför formeln kräver [[0 < a < c]] och varför kalkylatorn förväntar sig en hypotenusa som är längre än kateten.",
            },
            {
              "kind": "p",
              "text": "Kateten a:s position avgör vilket segment som kallas p: kateten a vidrör hörn A, så segmentet intill A är p. Kontrollera alltid märkningarna på ditt eget diagram innan du väljer vilken katet du ska ange.",
            },
          ],
          "h2": "Förstå katet a och hypotenusan",
          "table": {
            "headers": [
              "Symbol",
              "Betydelse",
            ],
            "rows": [
              [
                "a",
                "Vinkelrät katet som hör till p",
              ],
              [
                "b",
                "Den andra vinkelräta kateten",
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
                "Höjd till hypotenusan",
              ],
            ],
          },
        },
        "sec-mistakes": {
          "blocks": [
            {
              "kind": "p",
              "text": "Varje misstag nedan följs av sin rättelse. De flesta beror på märkning, inte på räkning.",
            },
            {
              "kind": "steps",
              "steps": [
                "Att glömma att kvadrera kateten a: att dividera a med c i stället för a i kvadrat med c ger 0.6 cm i stället för 3.6 cm.",
                "Att dividera c med a i kvadrat i stället för a i kvadrat med c: kvoten måste vara [[a^2/c]], inte [[c/a^2]]. Med a = 6 och c = 10 ger fel ordning ungefär 0.278, vilket inte har någon giltig enhet.",
                "Att använda kateten b i stället för kateten a: att ange b returnerar q. Med b = 8 och c = 10 är resultatet 6.4 cm q, inte p.",
                "Att förväxla projektion p med projektion q: p ligger intill hörn A och q intill hörn B. Märk båda segmenten innan du beräknar.",
                "Att behandla p som den faktiska vinkelräta kateten: p är ett segment av hypotenusan, inte sidan AC. I 6-8-10-triangeln är kateten a 6 cm medan p bara är 3.6 cm.",
                "Att ange ett värde för a som är större än eller lika med c: ingen sådan triangel existerar, eftersom hypotenusan är den längsta sidan.",
                "Att blanda måttenheter: konvertera först, som i exempel 7, där 1 m blev 100 cm.",
                "Att glömma att hela hypotenusan är c: att använda en projektion eller en katet som nämnare förvränger resultatet.",
                "Att avrunda mellanberäkningar för tidigt: att avrunda den kvadrerade kateten före divisionen förskjuter svaret.",
                "Att förväxla kvadrerade längder med vanliga längder: 36 i 6-8-10-exemplet är en kvadrerad längd, medan 3.6 cm är projektionen.",
                "Att tillämpa formeln på en triangel som inte är rätvinklig: projektionssatsen kräver höjden från en rät vinkel.",
                "Att glömma att p bara är ett segment av hypotenusan: p plus q är lika med c, så ett resultat på c eller mer tyder på ett fel.",
              ],
            },
            {
              "kind": "p",
              "text": "Om ett svar ser fel ut, stanna upp och märk om diagrammet innan du räknar om. De flesta felen ovan försvinner när p och q är tydligt markerade på hypotenusan.",
            },
          ],
          "h2": "Vanliga misstag vid beräkning av projektion p",
        },
        "sec-practice": {
          "blocks": [
            {
              "kind": "p",
              "text": "Försök med alla sex uppgifter på papper innan du läser svaren. Inget av värdena upprepar de genomräknade exemplen.",
            },
            {
              "kind": "h3",
              "text": "Uppgift 1: Grundläggande heltal",
            },
            {
              "kind": "p",
              "text": "En rätvinklig triangel har kateten [[a = 9]] cm och hypotenusan [[c = 15]] cm. Hitta projektion p.",
            },
            {
              "kind": "h3",
              "text": "Uppgift 2: Decimalvärden",
            },
            {
              "kind": "p",
              "text": "Med [[a = 1.5]] m och [[c = 2.5]] m, hitta projektion p.",
            },
            {
              "kind": "h3",
              "text": "Uppgift 3: Bråkmått",
            },
            {
              "kind": "p",
              "text": "Med [[a = \\frac{5}{6}]] ft och [[c = \\frac{5}{3}]] ft, hitta p som ett bråk.",
            },
            {
              "kind": "h3",
              "text": "Uppgift 4: Enhetskonvertering",
            },
            {
              "kind": "p",
              "text": "En katet mäter [[a = 80]] cm och hypotenusan mäter [[c = 2]] m. Hitta p i centimeter.",
            },
            {
              "kind": "h3",
              "text": "Uppgift 5: Hitta q efter att ha beräknat p",
            },
            {
              "kind": "p",
              "text": "En rätvinklig triangel har hypotenusan [[c = 25]] cm och kateten [[a = 15]] cm. Hitta p, sedan q.",
            },
            {
              "kind": "h3",
              "text": "Uppgift 6: Flera steg med projektion p och höjd h",
            },
            {
              "kind": "p",
              "text": "Med [[c = 25]] cm och [[a = 15]] cm, hitta p, sedan q och sedan höjden h.",
            },
            {
              "kind": "h3",
              "text": "Svar till övningsuppgifterna",
            },
            {
              "kind": "p",
              "text": "Svar 1: [[p = \\frac{9^2}{15} = \\frac{81}{15} = 5.4]] cm.",
            },
            {
              "kind": "p",
              "text": "Svar 2: [[p = \\frac{1.5^2}{2.5} = \\frac{2.25}{2.5} = 0.9]] m.",
            },
            {
              "kind": "p",
              "text": "Svar 3: [[a^2 = \\frac{25}{36}]], så [[p = \\frac{25/36}{5/3} = \\frac{25}{36} \\times \\frac{3}{5} = \\frac{5}{12}]] ft.",
            },
            {
              "kind": "p",
              "text": "Svar 4: Konvertera 2 m till 200 cm, sedan [[p = \\frac{80^2}{200} = \\frac{6400}{200} = 32]] cm.",
            },
            {
              "kind": "p",
              "text": "Svar 5: [[p = \\frac{15^2}{25} = \\frac{225}{25} = 9]] cm, sedan [[q = 25 - 9 = 16]] cm.",
            },
            {
              "kind": "p",
              "text": "Svar 6: [[p = 9]] cm och [[q = 16]] cm, så [[h = \\sqrt{9 \\times 16} = \\sqrt{144} = 12]] cm.",
            },
          ],
          "h2": "Övningsuppgifter med svar",
        },
        "sec-projection-q": {
          "blocks": [
            {
              "kind": "p",
              "text": "Vissa problem frågar efter den andra projektionen i stället. Motsvarande formel är spegelbilden av formeln för p, med kateten b i stället för kateten a:",
            },
            {
              "kind": "p",
              "text": "[[[q = \\frac{b^2}{c}]]]",
            },
            {
              "kind": "p",
              "text": "Använd [[b = 8]] cm och [[c = 10]] cm. Då är [[q = \\frac{8^2}{10} = \\frac{64}{10} = 6.4]] cm. Det matchar den andra projektionen i 6-8-10-triangeln från de tidigare exemplen, där p var 3.6 cm och de två projektionerna tillsammans är 10 cm.",
            },
            {
              "kind": "p",
              "text": "Formeln använder b i stället för a eftersom varje katet hör ihop med projektionen intill sitt eget hörn. Kateten b vidrör hörn B, och q är segmentet intill B. Att ange a i denna formel skulle ge p, inte q. Kalkylatorn på denna sida tar endast a och c, så använd <a href=\"/right-triangle-projection-q-calculator/\">kalkylatorn för projektion q</a> när du behöver hitta q utifrån b och c.",
            },
          ],
          "h2": "Så beräknar du projektion q utifrån den andra kateten",
        },
        "sec-proof": {
          "blocks": [
            {
              "kind": "p",
              "text": "Beviset vilar på likformiga trianglar. Att rita höjden CD delar triangeln ABC i två mindre rätvinkliga trianglar, ACD och CBD, och båda är likformiga med den ursprungliga triangeln. Ett av deras sidförhållanden ger projektionssatsen direkt.",
            },
            {
              "kind": "p",
              "text": "Fokusera på triangeln ACD och hela triangeln ABC. Båda innehåller vinkeln vid A, och båda innehåller en rät vinkel, så deras tredje vinklar måste också matcha. Att matcha de sidor som sitter på samma positioner ger proportionen:",
            },
            {
              "kind": "p",
              "text": "[[[\\frac{AD}{AC} = \\frac{AC}{AB}]]]",
            },
            {
              "kind": "p",
              "text": "Sätt nu in standardsymbolerna: [[AD = p]], [[AC = a]] och [[AB = c]]. Proportionen blir:",
            },
            {
              "kind": "p",
              "text": "[[[\\frac{p}{a} = \\frac{a}{c}]]]",
            },
            {
              "kind": "p",
              "text": "Korsmultiplikation rensar bort bråken. Den vänstra täljaren gånger den högra nämnaren är lika med den högra täljaren gånger den vänstra nämnaren, så [[p \\times c = a \\times a]], vilket är:",
            },
            {
              "kind": "p",
              "text": "[[[a^2 = c \\times p]]]",
            },
            {
              "kind": "p",
              "text": "Att dividera båda leden med c avslutar beviset och ger [[p = \\frac{a^2}{c}]]. Samma resonemang tillämpat på den andra lilla triangeln, CBD, ger [[b^2 = c \\times q]].",
            },
          ],
          "h2": "Varför fungerar formeln för projektion p?",
          "image": {
            "alt": "Den ursprungliga rätvinkliga triangeln ABC bredvid de mindre likformiga trianglarna ACD och CBD, som visar proportionen p över a är lika med a över c",
            "caption": "Likformighetsbevis: p över a är lika med a över c, så korsmultiplikation ger a i kvadrat är lika med c gånger p.",
            "src": "projection-p-similar-triangles.svg",
          },
        },
        "sec-properties": {
          "blocks": [
            {
              "kind": "p",
              "text": "Åtta egenskaper följer direkt av [[p = \\frac{a^2}{c}]]. Var och en fungerar också som en rimlighetskontroll av ett nytt svar.",
            },
            {
              "items": [
                "Projektion p är alltid kortare än hela hypotenusan i en icke-degenererad triangel, eftersom p bara är en del av c.",
                "Att öka kateten a medan c hålls fast ökar p, eftersom den kvadrerade kateten i täljaren växer.",
                "Att öka c medan a hålls fast minskar p, eftersom nämnaren växer.",
                "Om a och c båda multipliceras med samma positiva faktor skalas p med den faktorn.",
                "Om p är lika med q är båda kateterna lika, och triangeln är en likbent rätvinklig triangel.",
                "Projektion p är alltid positiv i en giltig icke-degenererad triangel. Noll eller negativa värden beskriver ingen verklig triangel.",
                "Projektion p är en längd, inte en area. Den kvadrerade kateten är bara ett mellansteg, och division med c återställer vanliga längdenheter.",
                "Projektion p hör specifikt till kateten a. Att använda den med kateten b besvarar en helt annan fråga.",
              ],
              "kind": "list",
            },
            {
              "kind": "p",
              "text": "När höjden träffar hypotenusans mittpunkt måste de två kateterna matcha, som diagrammet nedan visar.",
            },
          ],
          "h2": "Viktiga egenskaper hos projektion p",
          "image": {
            "alt": "Två rätvinkliga trianglar sida vid sida, en med lika projektioner p och q på 5 och en med olika projektioner p lika med 3.6 och q lika med 6.4",
            "caption": "Lika projektioner (p = q = 5) ger lika kateter, medan olika projektioner (p = 3.6, q = 6.4) ger olika kateter.",
            "src": "projection-p-equal-vs-unequal.svg",
          },
        },
        "sec-pythagoras": {
          "blocks": [
            {
              "kind": "p",
              "text": "Projektionssatsen och Pythagoras sats stämmer exakt överens, och algebran visar varför. Utgå från de två projektionsformlerna, [[a^2 = c \\times p]] och [[b^2 = c \\times q]], och addera dem:",
            },
            {
              "kind": "p",
              "text": "[[[a^2 + b^2 = c \\times p + c \\times q]]]",
            },
            {
              "kind": "p",
              "text": "Att bryta ut c ur högerledet ger [[a^2 + b^2 = c(p + q)]]. Eftersom [[p + q = c]] ger insättning det välkända resultatet:",
            },
            {
              "kind": "p",
              "text": "[[[a^2 + b^2 = c^2]]]",
            },
            {
              "kind": "p",
              "text": "En numerisk kontroll med 6-8-10-triangeln bekräftar det: [[a^2 + b^2 = 36 + 64 = 100]] och [[c^2 = 10^2 = 100]]. Projektionssatsen delar upp det pythagoreiska sambandet i en del per katet, och att addera delarna bygger upp det igen.",
            },
            {
              "kind": "p",
              "text": "Den uppdelningen är det som gör projektionsformlerna användbara: Pythagoras sats ensam kan inte hitta en projektion utifrån en katet och en hypotenusa, eftersom den talar om kateterna tillsammans.",
            },
          ],
          "h2": "Sambandet mellan projektion p och Pythagoras sats",
        },
        "sec-relationship-altitude": {
          "blocks": [
            {
              "kind": "p",
              "text": "Projektion p kopplas också till höjden genom ett andra geometriskt medelförhållande. Höjden h är det geometriska medelvärdet av de två projektionerna:",
            },
            {
              "kind": "p",
              "text": "[[[h = \\sqrt{p \\times q}]]]",
            },
            {
              "kind": "p",
              "text": "Eftersom [[q = c - p]] kan höjden också skrivas med enbart p och c:",
            },
            {
              "kind": "p",
              "text": "[[[h = \\sqrt{p(c - p)}]]]",
            },
            {
              "kind": "p",
              "text": "Använd [[p = 3.6]] cm och [[c = 10]] cm. Hitta först q: [[q = 10 - 3.6 = 6.4]] cm. Sedan är [[h = \\sqrt{3.6 \\times 6.4} = \\sqrt{23.04} = 4.8]] cm. Höjden är kortare än båda kateterna, som den måste vara.",
            },
            {
              "kind": "p",
              "text": "Projektion p ensam bestämmer inte höjden: två olika trianglar kan ha samma p med olika hypotenusor. Hela hypotenusan, eller den andra projektionen, behövs alltid också. <a href=\"/right-triangle-altitude-from-projections-calculator/\">Kalkylatorn för höjd från projektioner</a> hanterar den beräkningen när båda projektionerna är kända.",
            },
          ],
          "h2": "Sambandet mellan projektion p och höjden",
        },
        "sec-relationship-leg-a": {
          "blocks": [
            {
              "kind": "p",
              "text": "Projektionsformeln kan ställas om för att hitta kateten a i stället för p. Utgå från [[a^2 = c \\times p]] och ta den positiva kvadratroten ur båda leden:",
            },
            {
              "kind": "p",
              "text": "[[[a = \\sqrt{c \\times p}]]]",
            },
            {
              "kind": "p",
              "text": "Kontrollera med de välbekanta talen: [[a = 6]] cm, [[c = 10]] cm och [[p = 3.6]] cm. Produkten under rottecknet är [[c \\times p = 10 \\times 3.6 = 36]], och [[\\sqrt{36} = 6]] cm, vilket är kateten vi började med.",
            },
            {
              "kind": "p",
              "text": "Sambandet är det geometriska medelförhållandet: kateten a är det geometriska medelvärdet av hypotenusan och dess projektion. Det är därför kateten förekommer kvadrerad i satsen och varför kvadratroten dyker upp när man löser för kateten. För problem som utgår från p och c kör <a href=\"/right-triangle-leg-a-from-projection-calculator/\">kalkylatorn för katet a från projektion</a> denna omställda formel direkt.",
            },
          ],
          "h2": "Sambandet mellan projektion p och katet a",
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
              "text": "Omställning ger [[q = c - p]]. Med [[c = 10]] cm och [[p = 3.6]] cm är subtraktionen [[q = 10 - 3.6 = 6.4]] cm. Samma subtraktion fungerar åt andra hållet: [[p = c - q]]. <a href=\"/right-triangle-hypotenuse-from-projections-calculator/\">Kalkylatorn för hypotenusa från projektioner</a> bygger upp c från p och q när hypotenusan själv är okänd.",
            },
            {
              "kind": "p",
              "text": "Att jämföra p och q säger något om triangelns form. När p är lika med q träffar höjden hypotenusans mittpunkt och de två kateterna är lika, så triangeln är likbent. När p är större än q är kateten a längre än kateten b, och när q är större är kateten b längre. Den längre projektionen tillhör alltid den längre kateten.",
            },
            {
              "kind": "p",
              "text": "I 6-8-10-triangeln är q 6.4 cm och p 3.6 cm, så q är större, och kateten b på 8 cm är verkligen längre än kateten a på 6 cm.",
            },
          ],
          "h2": "Sambandet mellan projektion p och projektion q",
          "image": {
            "alt": "Rätvinklig triangel som jämför projektion p ihop med kateten a mot projektion q ihop med kateten b, med c lika med 10, p lika med 3.6 och q lika med 6.4",
            "caption": "p använder a (36 dividerat med 10 = 3.6) och q använder b (64 dividerat med 10 = 6.4).",
            "src": "projection-p-vs-q.svg",
          },
        },
        "sec-step-example": {
          "blocks": [
            {
              "kind": "p",
              "text": "Använd [[a = 6]] cm och [[c = 10]] cm. De fyra stegen nedan visar hela uträkningen, utan att något hoppas över.",
            },
            {
              "kind": "steps",
              "steps": [
                "Skriv formeln: [[p = \\frac{a^2}{c}]].",
                "Sätt in värdena: [[p = \\frac{6^2}{10}]].",
                "Kvadrera kateten: [[p = \\frac{36}{10}]].",
                "Dividera: [[p = 3.6]] cm.",
              ],
            },
            {
              "kind": "p",
              "text": "Svaret 3.6 cm är segmentet av hypotenusan intill kateten a, inte en vinkelrät sida och inte en area. En kort kontroll sluter cirkeln: [[a^2 = 6^2 = 36]] och [[c \\times p = 10 \\times 3.6 = 36]], så båda leden i satsen stämmer överens.",
            },
            {
              "kind": "p",
              "text": "Som referens är den andra projektionen [[q = 10 - 3.6 = 6.4]] cm, kateten b är [[b = \\sqrt{10 \\times 6.4} = 8]] cm och höjden är [[h = \\sqrt{3.6 \\times 6.4} = 4.8]] cm, vilket bekräftar den välbekanta rätvinkliga 6-8-10-triangeln.",
            },
          ],
          "h2": "Steg-för-steg-exempel på att hitta projektion p",
          "image": {
            "alt": "Rätvinklig triangel med kateten a 6 cm och hypotenusan 10 cm, genomräknad till projektion p lika med 3.6 cm",
            "caption": "Genomräknat exempel: a = 6 cm och c = 10 cm ger p = 36 dividerat med 10 = 3.6 cm.",
            "src": "projection-p-example-a6-c10.svg",
          },
        },
        "sec-verify": {
          "blocks": [
            {
              "kind": "p",
              "text": "Fyra oberoende kontroller fångar nästan varje fel. Kör minst en på varje svar, och alla fyra när problemet är viktigt. Exemplet nedan använder [[a = 6]] cm, [[c = 10]] cm och [[p = 3.6]] cm genomgående.",
            },
            {
              "kind": "h3",
              "text": "Metod 1: Kontroll med projektionssatsen",
            },
            {
              "kind": "p",
              "text": "Kontrollera [[p = \\frac{a^2}{c}]] direkt. Här är [[\\frac{6^2}{10} = \\frac{36}{10} = 3.6]] cm, vilket matchar svaret. Om omräkningen skiljer sig har antingen kvadreringen eller divisionen gått fel.",
            },
            {
              "kind": "h3",
              "text": "Metod 2: Segmentaddition",
            },
            {
              "kind": "p",
              "text": "Hitta q genom subtraktion: [[q = 10 - 3.6 = 6.4]] cm. Kontrollera sedan [[p + q = 3.6 + 6.4 = 10]] cm, vilket är lika med c. En summa som missar c pekar på ett subtraktionsfel.",
            },
            {
              "kind": "h3",
              "text": "Metod 3: Kontroll med Pythagoras sats",
            },
            {
              "kind": "p",
              "text": "Beräkna kateten b utifrån q: [[b = \\sqrt{10 \\times 6.4} = 8]] cm. Kontrollera sedan [[a^2 + b^2 = 36 + 64 = 100 = 10^2]]. Denna kontroll testar hela triangeln, så den fångar märkningsfel som den första kontrollen kan missa. <a href=\"/right-triangle-leg-b-from-projection-calculator/\">Kalkylatorn för katet b från projektion</a> kör b-steget direkt.",
            },
            {
              "kind": "h3",
              "text": "Metod 4: Geometrisk rimlighet",
            },
            {
              "kind": "p",
              "text": "Bekräfta att p är positivt, mindre än c, i rätt enhet och ett hypotenusasegment snarare än en vinkelrät sida. Här är 3.6 cm positivt, mindre än 10 cm, i centimeter och långt kortare än kateten a på 6 cm.",
            },
          ],
          "h2": "Så kontrollerar du din beräkning av projektion p",
        },
        "sec-what-projection-p": {
          "blocks": [
            {
              "kind": "p",
              "text": "Rita höjden från den räta vinkelns hörn C vinkelrätt mot hypotenusan AB. Den möter hypotenusan i en punkt som kallas fotpunkten, märkt D, och delar den i två angränsande segment: AD är projektion p och DB är projektion q.",
            },
            {
              "kind": "p",
              "text": "Projektion p tillhör kateten a eftersom den ligger intill hörn A, samma hörn där kateten a börjar. I den lilla triangeln ACD är kateten a hypotenusan och p är en av dess kateter, vilket är den geometriska koppling som får projektionssatsen att fungera. Projektion q tillhör, med samma resonemang, kateten b, som vidrör hörn B.",
            },
            {
              "kind": "p",
              "text": "Projektioner är längder längs hypotenusan, mätta i samma enhet som de andra sidorna. De är inte vinkelräta mot någonting, och de är inte sidor i den ursprungliga triangeln. <a href=\"/right-triangle-projection-calculator/\">Kalkylatorn för projektion i rätvinklig triangel</a> hittar båda projektionerna när kateterna och hypotenusan är kända.",
            },
            {
              "kind": "p",
              "text": "Eftersom p och q är de två delarna av en rak sida blir de tillsammans hela hypotenusan:",
            },
            {
              "kind": "p",
              "text": "[[[c = p + q]]]",
            },
            {
              "kind": "p",
              "text": "Med [[c = 10]] cm och [[p = 3.6]] cm är den andra projektionen [[q = 10 - 3.6 = 6.4]] cm.",
            },
            {
              "kind": "p",
              "text": "Projektion p är inte samma sak som kateten a. Kateten a är sidan AC, en av de sidor som bildar den räta vinkeln, medan p är segmentet AD längs hypotenusan. I 6-8-10-triangeln är kateten a 6 cm och projektion p bara 3.6 cm.",
            },
          ],
          "h2": "Vad är projektion p i en rätvinklig triangel?",
        },
        "sec-why-squared": {
          "blocks": [
            {
              "kind": "p",
              "text": "Kvadraten finns där eftersom projektionssatsen är ett påstående om en kvadrerad katet: den säger att kvadraten på kateten a är lika med produkten av c och p, [[a^2 = c \\times p]], och formeln för p är vad du får genom att dividera båda leden med c.",
            },
            {
              "kind": "p",
              "text": "Orsaken går tillbaka till likformiga trianglar. I triangeln ACD spelar kateten a rollen som hypotenusa, medan p är en av dess kateter. Att jämföra den lilla triangeln med hela triangeln ger proportionen [[\\frac{p}{a} = \\frac{a}{c}]], och kateten a förekommer två gånger, en gång i varje förhållande. Korsmultiplikation placerar a på båda sidor, vilket är precis varför kvadraten dyker upp.",
            },
            {
              "kind": "p",
              "text": "Det geometriska medelförhållandet säger samma sak med andra ord: kateten a är det geometriska medelvärdet av hypotenusan c och dess projektion p, vilket betyder [[a = \\sqrt{c \\times p}]]. Att kvadrera båda leden ger [[a^2 = c \\times p]], och division med c isolerar p.",
            },
            {
              "kind": "p",
              "text": "Division är det steg som isolerar p. Multiplikation i satsen binder p till c, och division med c upphäver den bindningen. Utan kvadraten skulle formeln blanda en längd med en area, och enheterna skulle inte stämma.",
            },
          ],
          "h2": "Varför är kateten a kvadrerad i projektionsformeln?",
        },
      },
      "tocHeading": "Innehåll i guiden",
      "tocItems": {
        "sec-applications": "Praktiska tillämpningar av projektionsberäkningar för rätvinkliga trianglar",
        "sec-calculate": "Beräkna projektion p i en rätvinklig triangel",
        "sec-diagram": "Diagram över projektion p i rätvinklig triangel förklarat",
        "sec-examples": "Genomräknade exempel på beräkning av projektion p",
        "sec-faq": "Vanliga frågor",
        "sec-formula": "Formel för projektion p i rätvinklig triangel",
        "sec-how-to-use": "Så använder du kalkylatorn för projektion p i rätvinklig triangel",
        "sec-intro": "Kalkylator för projektion p i rätvinklig triangel",
        "sec-leg-a-hypotenuse": "Förstå katet a och hypotenusan",
        "sec-mistakes": "Vanliga misstag vid beräkning av projektion p",
        "sec-practice": "Övningsuppgifter med svar",
        "sec-projection-q": "Så beräknar du projektion q utifrån den andra kateten",
        "sec-proof": "Varför fungerar formeln för projektion p?",
        "sec-properties": "Viktiga egenskaper hos projektion p",
        "sec-pythagoras": "Sambandet mellan projektion p och Pythagoras sats",
        "sec-related": "Utforska relaterade kalkylatorer för rätvinkliga trianglar",
        "sec-relationship-altitude": "Sambandet mellan projektion p och höjden",
        "sec-relationship-leg-a": "Sambandet mellan projektion p och katet a",
        "sec-relationship-pq": "Sambandet mellan projektion p och projektion q",
        "sec-step-example": "Steg-för-steg-exempel på att hitta projektion p",
        "sec-verify": "Så kontrollerar du din beräkning av projektion p",
        "sec-what-projection-p": "Vad är projektion p i en rätvinklig triangel?",
        "sec-why-squared": "Varför är kateten a kvadrerad i projektionsformeln?",
      },
    },
};
