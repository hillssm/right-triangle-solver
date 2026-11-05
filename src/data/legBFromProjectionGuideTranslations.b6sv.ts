// legBFromProjectionGuideTranslations.bsv.ts: Right Triangle Leg B From Projection
// Guide (Page 32 of 45) translation.
export const LBP_B6_SV = {
  "sv": {
      "faqHeading": "Vanliga frågor",
      "faqs": [
        {
          "answer": "Formeln är [[b = \\sqrt{c \\times q}]], där c är hela hypotenusan och q är projektionen som hör till katet b. Till exempel ger [[c = 10]] cm och [[q = 6.4]] cm [[b = 8]] cm.",
          "question": "Vad är formeln för att hitta katet b från projektion q?",
        },
        {
          "answer": "Multiplikationen kommer från likformiga trianglar. Triangeln CBD är likformig med triangeln ABC, vilket ger [[q / b = b / c]], och korsmultiplikation ger [[b^2 = c \\times q]]. Produkten är kvadraten på kateten, inte kateten själv.",
          "question": "Varför multiplicerar man c och q?",
        },
        {
          "answer": "Eftersom produkten cq är lika med b i kvadrat, inte b. Kvadratroten upphäver kvadreringen och ger tillbaka en vanlig längd. Utan den skulle du rapportera 64 i stället för 8 i exemplet med c = 10, q = 6,4.",
          "question": "Varför behövs en kvadratrot?",
        },
        {
          "answer": "Projektion q är den del av hypotenusan som ligger intill hörn B, och som skapas när höjden från den räta vinkeln möter hypotenusan. I triangeln ABC med höjden CD är [[q = DB]], och den ligger längs hypotenusan.",
          "question": "Vad representerar projektion q?",
        },
        {
          "answer": "Nej. Katet b är sidan BC, en av de sidor som bildar den räta vinkeln, medan projektion q är sträckan DB längs hypotenusan. De är olika längder på olika platser, kopplade bara genom [[b^2 = c \\times q]].",
          "question": "Är projektion q samma sak som katet b?",
        },
        {
          "answer": "Eftersom varje katet hör ihop med den projektion som ligger intill dess eget hörn. Katet b rör vid hörn B, och q är sträckan intill B. Att använda p skulle ge katet a i stället, eftersom p hör ihop med den katet som rör vid hörn A.",
          "question": "Varför används q i stället för p?",
        },
        {
          "answer": "Ja. Subtrahera först p från hypotenusan: [[q = c - p]]. Med [[c = 25]] cm och [[p = 9]] cm är [[q = 16]] cm, och sedan [[b = \\sqrt{25 \\times 16} = 20]] cm.",
          "question": "Kan jag hitta katet b om bara projektion p är känd?",
        },
        {
          "answer": "Nej. Projektion q är bara en del av hypotenusan, så den måste vara mindre än c. Om q vore lika med c skulle p vara noll och triangeln vara degenererad i stället för en äkta rätvinklig triangel.",
          "question": "Kan projektion q vara större än hypotenusan?",
        },
        {
          "answer": "Kvadrera svaret och kontrollera att det är lika med [[c \\times q]]. Du kan också hitta katet a från p och kontrollera [[a^2 + b^2 = c^2]], och bekräfta att q är mindre än c och att katet b är kortare än hypotenusan.",
          "question": "Hur kontrollerar jag den beräknade kateten?",
        },
        {
          "answer": "Höjden landar vid hypotenusans mittpunkt, och de två kateterna är lika, så triangeln är en likbent rätvinklig triangel. Med [[c = 20]] cm och [[p = q = 10]] cm är båda kateterna lika med [[10\\sqrt{2}]] cm, ungefär 14,142 cm.",
          "question": "Vad händer när p och q är lika?",
        },
        {
          "answer": "Ja, med spegelformeln [[a = \\sqrt{c \\times p}]]. Katet a hör ihop med projektion p, precis som katet b hör ihop med q. <a href=\"/right-triangle-leg-a-from-projection-calculator/\">Räknaren för katet a från projektion</a> är byggd för den beräkningen.",
          "question": "Kan jag hitta katet a med samma sats?",
        },
        {
          "answer": "Ja. Att lägga ihop de två projektionsformlerna ger [[a^2 + b^2 = c \\times p + c \\times q = c(p + q) = c^2]], eftersom [[p + q = c]]. Projektionssatsen delar upp det pythagoreiska sambandet i en bit per katet.",
          "question": "Hänger projektionssatsen ihop med Pythagoras sats?",
        },
      ],
      "relatedHeading": "Utforska relaterade räknare för rätvinkliga trianglar",
      "relatedIntro": "Välj nästa verktyg utifrån de mått du redan känner till, eftersom varje räknare nedan hanterar en specifik uppgift för rätvinkliga trianglar.",
      "relatedItems": [
        "Räknare för projektion i rätvinklig triangel",
        "Räknare för projektion p i rätvinklig triangel",
        "Räknare för projektion q i rätvinklig triangel",
        "Räknare för katet a från projektion i rätvinklig triangel",
        "Räknare för hypotenusa från projektioner i rätvinklig triangel",
        "Räknare för höjd från projektioner i rätvinklig triangel",
        "Räknare för sidor i rätvinklig triangel",
      ],
      "sections": {
        "sec-intro": {
          "blocks": [
            {
              "kind": "p",
              "text": "Denna räknare hittar katet b i en rätvinklig triangel när du känner till hela hypotenusan c och projektionen q som hör till katet b. Du anger dessa två längder, och den returnerar den faktiska sidlängden för katet b, inte ett kvadrerat värde och inte ett projektionssegment. Formeln är [[b = \\sqrt{c \\times q}]], där c är hela hypotenusan och q är den del av hypotenusan som ligger intill katet b.",
            },
            {
              "kind": "p",
              "text": "Till exempel, om [[c = 10]] cm och [[q = 6.4]] cm, så är [[b = \\sqrt{10 \\times 6.4} = \\sqrt{64} = 8]] cm. Produkten 64 är bara ett mellansteg. Att ta kvadratroten förvandlar den tillbaka till en längd, och den längden är den sida du letar efter.",
            },
            {
              "kind": "p",
              "text": "Räknaren finns högst upp på sidan, följd av formeln, ett märkt diagram, ett bevis för projektionssatsen, genomräknade exempel och kontroller du kan köra på vilket svar som helst. Guiden passar elever i grundskolan och gymnasiet, lärare, handledare och föräldrar som hjälper till med geometriläxor.",
            },
          ],
          "h2": "Räknare för katet b från projektion i rätvinklig triangel",
        },
        "sec-calculate": {
          "blocks": [
            {
              "kind": "p",
              "text": "Räknaren har två inmatningsfält. Det första tar hypotenusan c, hela sidan mitt emot den räta vinkeln. Det andra tar projektionen q, den del av hypotenusan som hör till katet b. Båda längderna måste använda samma enhet, så omvandla först om ett mått är i centimeter och det andra i meter.",
            },
            {
              "kind": "p",
              "text": "Projektion q måste vara mindre än c. Den regeln är inbyggd i geometrin: q är bara en del av hypotenusan, så den kan aldrig vara lika stor som eller större än hela sidan. Om ditt q-värde är större än c har du förmodligen angett en katet, höjden eller fel projektion.",
            },
            {
              "kind": "p",
              "text": "Klicka på Beräkna katet b för att se resultatet, och använd Återställ för att rensa båda fälten inför ett nytt problem. Resultatet är en längd i den enhet du angav, så en hypotenusa på 10 cm och en projektion på 6,4 cm ger 8 cm, utan något extra omvandlingssteg.",
            },
          ],
          "h2": "Beräkna katet b från projektion i rätvinklig triangel",
        },
        "sec-what-leg-b": {
          "blocks": [
            {
              "kind": "p",
              "text": "En rätvinklig triangel har två vinkelräta sidor, som kallas kateter, och en längsta sida, som kallas hypotenusa. De två kateterna möts i den räta vinkeln, och hypotenusan ligger mitt emot den vinkeln. I den här guiden är triangeln ABC med den räta vinkeln vid C, katet a är sidan AC, katet b är sidan BC och hypotenusan c är sidan AB.",
            },
            {
              "kind": "p",
              "text": "Katet b är en av de två sidor som bildar den räta vinkeln, så den är en äkta sida i triangeln. Den är inte en sträcka som är ritad inuti triangeln, och den är inte projektionen q. Projektionen q ligger platt längs hypotenusan, medan katet b går från hörn B till hörnet med den räta vinkeln, C. Att hålla isär dessa två roller är det första steget för att använda formeln rätt.",
            },
            {
              "kind": "p",
              "text": "Katet b skiljer sig från katet a bara genom sin position: katet b rör vid hörn B, och katet a rör vid hörn A. Varje katet har sin egen projektion, och det är därför formeln för b använder q medan formeln för a använder p, en koppling som bestäms av beteckningarna.",
            },
            {
              "kind": "p",
              "text": "I varje icke-degenererad rätvinklig triangel är katet b kortare än hypotenusan. Det ger en snabb rimlighetskontroll av varje svar: om din beräknade katet b blir längre än c har något gått fel i indata eller i räkningen, och diagrammets beteckningar är det första stället att titta på.",
            },
          ],
          "h2": "Vad är katet b i en rätvinklig triangel?",
        },
        "sec-what-projection-q": {
          "blocks": [
            {
              "kind": "p",
              "text": "Dra höjden från hörnet med den räta vinkeln, C, vinkelrätt mot hypotenusan AB. Den möter hypotenusan i en punkt som kallas fotpunkten och betecknas D. Den punkten delar hypotenusan i två intilliggande sträckor, och dessa sträckor är projektionerna. Sträckan AD är projektion p, och sträckan DB är projektion q.",
            },
            {
              "kind": "p",
              "text": "Projektion q hör till katet b eftersom den ligger intill hörn B, samma hörn där katet b börjar. I den lilla triangeln CBD är katet b hypotenusan och q är en av dess kateter, vilket är den geometriska kopplingen som får projektionssatsen att fungera. Projektion p hör på samma sätt till katet a, som rör vid hörn A.",
            },
            {
              "kind": "p",
              "text": "Projektioner är längder längs hypotenusan, mätta i samma enhet som de andra sidorna. De är inte vinkelräta mot någonting, och de är inte sidor i den ursprungliga triangeln. En projektion kan bäst föreställas som den skugga en katet kastar på hypotenusan när höjden faller rakt ner till den.",
            },
            {
              "kind": "p",
              "text": "Eftersom p och q är de två delarna av en rak sida, blir de tillsammans hela hypotenusan:",
            },
            {
              "kind": "p",
              "text": "[[[c = p + q]]]",
            },
            {
              "kind": "p",
              "text": "Den additionen är användbar i sig. Om du känner till c och en projektion kan du hitta den andra genom subtraktion, ett steg som avsnittet om den andra projektionen längre fram går igenom i sin helhet.",
            },
          ],
          "h2": "Vad är projektion q i en rätvinklig triangel?",
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
              "text": "Att ta den positiva kvadratroten ur båda led ger den arbetsformel som används på den här sidan:",
            },
            {
              "kind": "p",
              "text": "[[[b = \\sqrt{c \\times q}]]]",
            },
            {
              "kind": "p",
              "text": "Beräkningen går i två tydliga steg. Steg 1 multiplicerar hypotenusan med projektionen, och resultatet är en kvadrerad längd, inte en sida. Steg 2 tar den positiva kvadratroten, vilket omvandlar den kvadrerade längden tillbaka till en vanlig längd. Att hoppa över steg 2 är det enskilt vanligaste felet med den här formeln, och nästa avsnitt förklarar varför kvadratroten inte kan utelämnas.",
            },
            {
              "kind": "p",
              "text": "Enheter kräver omsorg i båda stegen. Om c och q båda är i centimeter blir deras produkt i kvadratcentimeter, och kvadratroten ger centimeter tillbaka. Att blanda enheter, till exempel meter för c och centimeter för q, ger en meningslös produkt, så omvandla till en enhet innan du multiplicerar. Den positiva roten används eftersom en sidlängd alltid är positiv.",
            },
            {
              "kind": "p",
              "text": "Ett litet numeriskt exempel visar båda stegen i arbete. Med [[c = 10]] cm och [[q = 6.4]] cm ger steg 1 [[10 \\times 6.4 = 64]], och steg 2 ger [[b = \\sqrt{64} = 8]] cm. Siffran 64 besvarar ingen fråga på egen hand. Först efter kvadratroten blir den katetlängden.",
            },
          ],
          "h2": "Formel för katet b från projektion i rätvinklig triangel",
          "image": {
            "alt": "Rätvinklig triangel ABC med höjden CD, som visar att katet b i kvadrat är lika med hypotenusan c multiplicerad med projektion q",
            "caption": "Projektionssatsen: b i kvadrat är lika med c gånger q, så b är lika med kvadratroten ur c gånger q.",
            "src": "leg-b-projection-theorem.svg",
          },
        },
        "sec-why-sqrt": {
          "blocks": [
            {
              "kind": "p",
              "text": "Kvadratroten finns där eftersom multiplikationen ger en kvadrerad storhet. Satsen säger inte att katet b är lika med produkten av c och q. Den säger att kvadraten på katet b är lika med den produkten. Att upphäva en kvadrering kräver en kvadratrot, precis som att upphäva en fördubbling kräver halvering.",
            },
            {
              "kind": "p",
              "text": "Ta [[c = 10]] och [[q = 6.4]]. Deras produkt är 64, vilket är [[b^2]], kvadraten på kateten. Kateten själv är det tal som multiplicerat med sig självt ger 64, alltså 8. Att skriva [[b = 64]] skulle påstå en sida på 64 enheter i en triangel vars hypotenusa bara är 10, vilket uppenbarligen är omöjligt.",
            },
            {
              "kind": "p",
              "text": "Tabellen nedan håller de tre storheterna isär, eftersom att blanda ihop dem orsakar de flesta misstagen med den här formeln.",
            },
          ],
          "h2": "Varför finns det en kvadratrot i formeln?",
          "table": {
            "headers": [
              "Storhet",
              "Betydelse",
              "Exempel med c = 10, q = 6,4",
            ],
            "rows": [
              [
                "[[b]]",
                "Själva katetlängden",
                "8",
              ],
              [
                "[[b^2]]",
                "Katetlängden multiplicerad med sig själv",
                "64",
              ],
              [
                "[[c \\times q]]",
                "Produkten som satsen likställer med [[b^2]]",
                "64",
              ],
              [
                "[[\\sqrt{cq}]]",
                "Steget som återställer b från [[b^2]]",
                "8",
              ],
            ],
          },
        },
        "sec-how": {
          "blocks": [
            {
              "kind": "p",
              "text": "Tio korta steg tar dig från ett märkt diagram till ett kontrollerat svar.",
            },
            {
              "kind": "steps",
              "steps": [
                "Identifiera den rätvinkliga triangeln i ditt problem och bekräfta att den har en rät vinkel.",
                "Hitta höjden från den räta vinkeln och markera var den möter hypotenusan.",
                "Identifiera hela hypotenusan c, sidan mitt emot den räta vinkeln.",
                "Identifiera projektion q, den del av hypotenusan som ligger intill hörn B, där katet b börjar.",
                "Kontrollera att q är mindre än c. Om den inte är det, beteckna om diagrammet innan du fortsätter.",
                "Omvandla c och q till samma enhet om de gavs i olika enheter.",
                "Ange c i fältet Hypotenusa c.",
                "Ange q i fältet Projektion q. Ange inte p här, eftersom det skulle ge katet a i stället.",
                "Klicka på Beräkna katet b och läs av resultatet.",
                "Använd Återställ innan du börjar ett nytt problem.",
              ],
            },
            {
              "kind": "p",
              "text": "Räknaren tar inte emot p, så ett problem som bara ger p kräver ett extra subtraktionssteg, som behandlas nedan. Att ange p i q-fältet ger fortfarande ett tal, men det blir fel katet, så kontrollen av beteckningarna i steg 4 är viktigast.",
            },
          ],
          "h2": "Så använder du räknaren för katet b i rätvinklig triangel",
        },
        "sec-step-example": {
          "blocks": [
            {
              "kind": "p",
              "text": "Använd [[c = 10]] cm och [[q = 6.4]] cm. De fyra stegen nedan visar hela uträkningen, utan att något hoppas över.",
            },
            {
              "kind": "steps",
              "steps": [
                "Skriv formeln: b = sqrt(cq).",
                "Sätt in värdena: b = sqrt(10 x 6,4).",
                "Multiplicera inuti roten: b = sqrt(64).",
                "Ta kvadratroten: b = 8 cm.",
              ],
            },
            {
              "kind": "p",
              "text": "Svaret 8 cm är den faktiska vinkelräta sidan BC, inte en projektion och inte en area. En kort kontroll avslutar cirkeln: [[b^2 = 8^2 = 64]] och [[c \\times q = 10 \\times 6.4 = 64]], så båda led i satsen stämmer överens.",
            },
            {
              "kind": "p",
              "text": "Som referens är den andra projektionen [[p = 10 - 6.4 = 3.6]] cm, katet a är [[a = \\sqrt{10 \\times 3.6} = 6]] cm och höjden är [[h = \\sqrt{3.6 \\times 6.4} = 4.8]] cm, vilket bekräftar den välkända 6-8-10-triangeln.",
            },
          ],
          "h2": "Steg-för-steg-exempel på att hitta katet b",
          "image": {
            "alt": "Rätvinklig triangel med hypotenusan 10 cm och projektionen 6,4 cm, genomräknad till katet b lika med 8 cm",
            "caption": "Genomräknat exempel: c = 10 cm och q = 6,4 cm ger b = sqrt(64) = 8 cm.",
            "src": "leg-b-example-c10-q64.svg",
          },
        },
        "sec-diagram": {
          "blocks": [
            {
              "kind": "p",
              "text": "Huvuddiagrammet visar triangeln ABC med den räta vinkeln vid C. Sidan AC är katet a, sidan BC är katet b och sidan AB är hypotenusan c. Höjden CD faller från C vinkelrätt mot AB och träffar den i D, och markeringen för rät vinkel vid D bekräftar att CD verkligen är vinkelrät.",
            },
            {
              "kind": "p",
              "text": "Punkt D delar hypotenusan i två delar: sträckan AD är projektion p och sträckan DB är projektion q. Katet b och projektion q är markerade eftersom de är det par som den här sidan handlar om. Följ diagrammet i den här ordningen för att fästa beteckningarna: börja vid B, gå längs katet b till C, sedan längs katet a till A, och sedan tillbaka längs hypotenusan från A till B, med ett stopp vid D för att se delningen i p och q.",
            },
            {
              "kind": "p",
              "text": "Kopplingen mellan b och q blir synlig i den lilla triangeln CBD, där katet b är hypotenusan och q är den sida som ligger längs den stora hypotenusan. Eftersom triangeln CBD är likformig med triangeln ABC är förhållandet mellan q och b i den lilla triangeln lika med förhållandet mellan b och c i den stora, vilket avsnittet med beviset omvandlar till [[b^2 = cq]].",
            },
          ],
          "h2": "Diagram över katet b från projektion i rätvinklig triangel förklarat",
          "image": {
            "alt": "Rätvinklig triangel ABC med rät vinkel vid C, höjden CD till hypotenusan AB, katet b och projektion q markerade, med kateterna a och b, hypotenusan c, projektionerna p och q samt höjden h betecknade",
            "caption": "Huvudtriangeln ABC: höjden CD delar hypotenusan AB i projektion p (AD) och projektion q (DB), med katet b (BC) markerad.",
            "src": "leg-b-main-triangle.svg",
          },
        },
        "sec-proof": {
          "blocks": [
            {
              "kind": "p",
              "text": "Beviset vilar på likformiga trianglar. Att dra höjden CD delar triangeln ABC i två mindre rätvinkliga trianglar, ACD och CBD, och båda är likformiga med den ursprungliga triangeln. Likformighet innebär att deras motsvarande sidor håller samma förhållande, och ett av dessa förhållanden ger projektionssatsen direkt.",
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
              "text": "Sätt nu in standardbeteckningarna: [[DB = q]], [[BC = b]] och [[AB = c]]. Proportionen blir:",
            },
            {
              "kind": "p",
              "text": "[[[\\frac{q}{b} = \\frac{b}{c}]]]",
            },
            {
              "kind": "p",
              "text": "Korsmultiplikation tar bort bråken. Den vänstra täljaren gånger den högra nämnaren är lika med den högra täljaren gånger den vänstra nämnaren, så [[q \\times c = b \\times b]], vilket är:",
            },
            {
              "kind": "p",
              "text": "[[[b^2 = c \\times q]]]",
            },
            {
              "kind": "p",
              "text": "Att ta den positiva kvadratroten ur båda led avslutar beviset och ger [[b = \\sqrt{c \\times q}]]. Samma resonemang tillämpat på den andra lilla triangeln, ACD, ger [[a^2 = c \\times p]]. Likformighet gör hela arbetet: motsvarande sidor i likformiga trianglar förblir proportionella.",
            },
          ],
          "h2": "Varför fungerar projektionssatsen?",
          "image": {
            "alt": "Den ursprungliga rätvinkliga triangeln ABC bredvid de mindre likformiga trianglarna ACD och CBD, som visar proportionen q över b lika med b över c",
            "caption": "Bevis med likformiga trianglar: q över b är lika med b över c, så korsmultiplikation ger b i kvadrat lika med c gånger q.",
            "src": "leg-b-similar-triangles.svg",
          },
        },
        "sec-examples": {
          "blocks": [
            {
              "kind": "p",
              "text": "Varje exempel anger de givna värdena, insättningen och det slutliga svaret. Kommentarerna hålls korta så att räkningen förblir synlig, och varje exempel håller sina enheter konsekventa från början till slut.",
            },
            {
              "kind": "h3",
              "text": "Exempel 1: Grundläggande heltal",
            },
            {
              "kind": "p",
              "text": "Med [[c = 10]] cm och [[q = 6.4]] cm ger formeln [[b = \\sqrt{10 \\times 6.4} = \\sqrt{64}]], så [[b = 8]] cm. Produkten 64 är en perfekt kvadrat, så svaret är exakt, utan avrundning. Detta är samma triangel som i steg-för-steg-exemplet, och dess andra katet är 6 cm.",
            },
            {
              "kind": "h3",
              "text": "Exempel 2: Resultat som är en perfekt kvadrat",
            },
            {
              "kind": "p",
              "text": "Med [[c = 25]] cm och [[q = 9]] cm är [[b = \\sqrt{25 \\times 9} = \\sqrt{225} = 15]] cm. När produkten är en perfekt kvadrat är svaret exakt. Den andra projektionen här är 16 cm, som hör ihop med en katet på 20 cm, vilket ger den klassiska 15-20-25-triangeln.",
            },
            {
              "kind": "h3",
              "text": "Exempel 3: Icke-perfekt kvadrat",
            },
            {
              "kind": "p",
              "text": "Med [[c = 12]] cm och [[q = 5]] cm är [[b = \\sqrt{12 \\times 5} = \\sqrt{60}]], så [[b \\approx 7.746]] cm. Produkten 60 är inte en perfekt kvadrat, så svaret förblir en approximation avrundad till tre decimaler. Observera att 7,746 cm är kortare än hypotenusan på 12 cm, som det måste vara.",
            },
            {
              "kind": "h3",
              "text": "Exempel 4: Decimalmått",
            },
            {
              "kind": "p",
              "text": "Med [[c = 12.5]] cm och [[q = 3.2]] cm är [[b = \\sqrt{12.5 \\times 3.2} = \\sqrt{40}]], så [[b \\approx 6.325]] cm. Detta stämmer med värdet från guiden för katet a, där samma produkt 40 dök upp med rollerna för p och q ombytta, en användbar påminnelse om att olika indata kan dela en produkt. Behåll hela produkten inuti roten fram till det sista avrundningssteget.",
            },
            {
              "kind": "h3",
              "text": "Exempel 5: Större triangel",
            },
            {
              "kind": "p",
              "text": "Med [[c = 50]] cm och [[q = 32]] cm är [[b = \\sqrt{50 \\times 32} = \\sqrt{1600} = 40]] cm. Större tal ändrar ingenting i metoden: multiplicera och ta sedan roten. Den andra projektionen här är 18 cm, som hör ihop med en katet på 30 cm, vilket ger den klassiska 30-40-50-triangeln.",
            },
            {
              "kind": "h3",
              "text": "Exempel 6: Lika projektioner",
            },
            {
              "kind": "p",
              "text": "Med [[c = 20]] cm och [[q = 10]] cm är [[b = \\sqrt{20 \\times 10} = \\sqrt{200} = 10\\sqrt{2}]] cm, så [[b \\approx 14.142]] cm. Lika projektioner betyder att höjden träffar hypotenusans mittpunkt, vilket händer precis när de två kateterna är lika. Triangeln är därför en likbent rätvinklig triangel, och katet a är lika med katet b.",
            },
            {
              "kind": "h3",
              "text": "Exempel 7: Olika enheter",
            },
            {
              "kind": "p",
              "text": "Med [[c = 0.5]] m och [[q = 20]] cm, omvandla först: 0,5 m är lika med 50 cm. Sedan är [[b = \\sqrt{50 \\times 20} = \\sqrt{1000}]], så [[b \\approx 31.623]] cm. Att multiplicera 0,5 med 20 utan att omvandla skulle ha gett en rot på 10, ett felaktigt svar utan någon giltig enhet bakom sig.",
            },
            {
              "kind": "h3",
              "text": "Exempel 8: Bråkmått",
            },
            {
              "kind": "p",
              "text": "Med [[c = 16]] ft och [[q = 9]] ft är [[b = \\sqrt{16 \\times 9} = \\sqrt{144} = 12]] ft. Produkten 144 är en perfekt kvadrat, så svaret är exakt. En snabb rimlighetskontroll går igenom: 12 ft är tre fjärdedelar av hypotenusan, och den andra kateten blir ungefär 10,583 ft, vilket är kortare än b men fortfarande en äkta sida i samma triangel.",
            },
          ],
          "h2": "Genomräknade exempel på att hitta katet b från projektion",
        },
        "sec-other-projection": {
          "blocks": [
            {
              "kind": "p",
              "text": "Vissa problem ger p i stället för q. Räknaren på den här sidan tar inte emot p, men det är bara en omväg på ett steg, inte en återvändsgränd. Eftersom de två projektionerna tillsammans blir hypotenusan, subtrahera först för att få fram q:",
            },
            {
              "kind": "p",
              "text": "[[[q = c - p]]]",
            },
            {
              "kind": "p",
              "text": "Ta [[c = 25]] cm och [[p = 9]] cm. Subtraktion ger [[q = 25 - 9 = 16]] cm. Nu gäller den vanliga formeln: [[b = \\sqrt{25 \\times 16} = \\sqrt{400} = 20]] cm. Om du hade angett 9 direkt som q skulle räknaren ha returnerat 15 cm, vilket är katet a, inte katet b.",
            },
            {
              "kind": "p",
              "text": "Räknaren för <a href=\"/right-triangle-projection-p-calculator/\">projektion p</a> kan hjälpa när p själv behöver hittas, och <a href=\"/right-triangle-projection-q-calculator/\">räknaren för projektion q</a> täcker det omvända steget. Hur som helst gäller samma regel: hitta q först och använd sedan [[b = \\sqrt{c \\times q}]].",
            },
          ],
          "h2": "Så hittar du katet b när den andra projektionen är känd",
        },
        "sec-relationship": {
          "blocks": [
            {
              "kind": "p",
              "text": "En sats kopplar samman tre storheter, så en omformning av den hittar vilken som helst som saknas. De tre formerna är:",
            },
            {
              "kind": "p",
              "text": "[[[b = \\sqrt{c \\times q}]]]",
            },
            {
              "kind": "p",
              "text": "Tabellen nedan visar varje omformning, vad den hittar och vad som måste vara känt först.",
            },
          ],
          "h2": "Sambandet mellan katet b, hypotenusan och projektion q",
          "table": {
            "headers": [
              "Storhet som saknas",
              "Formel",
              "Kända värden som behövs",
            ],
            "rows": [
              [
                "Katet b",
                "[[b = \\sqrt{c \\times q}]]",
                "Hypotenusa c och projektion q",
              ],
              [
                "Hypotenusa c",
                "[[c = \frac{b^2}{q}]]",
                "Katet b och projektion q",
              ],
              [
                "Projektion q",
                "[[q = \frac{b^2}{c}]]",
                "Katet b och hypotenusa c",
              ],
            ],
          },
        },
        "sec-leg-a": {
          "blocks": [
            {
              "kind": "p",
              "text": "Katet a följer spegelbilden av formeln för katet b. Där katet b hör ihop med projektion q, hör katet a ihop med projektion p:",
            },
            {
              "kind": "p",
              "text": "[[[a = \\sqrt{c \\times p}]]]",
            },
            {
              "kind": "p",
              "text": "Använd en konsekvent triangel för att se båda kateterna tillsammans: [[c = 25]], [[p = 9]] och [[q = 16]]. Då är [[a = \\sqrt{25 \\times 9} = 15]] och [[b = \\sqrt{25 \\times 16} = 20]]. De två kateterna delar samma hypotenusa men använder olika projektioner, och det är därför en korrekt identifiering av p och q avgör vilken katet du får.",
            },
            {
              "kind": "p",
              "text": "Kateterna begränsar också varandra genom Pythagoras sats, som behandlas två avsnitt längre fram: att känna till en katet och hypotenusan bestämmer den andra. För problem som börjar från p i stället för q kör <a href=\"/right-triangle-leg-a-from-projection-calculator/\">räknaren för katet a från projektion</a> samma metod med den andra kopplingen.",
            },
          ],
          "h2": "Sambandet mellan katet b och katet a",
          "image": {
            "alt": "Rätvinklig triangel som jämför projektion p kopplad till katet a med projektion q kopplad till katet b, med c lika med 25, p lika med 9 och q lika med 16",
            "caption": "Korrekt kopplat: a använder p (sqrt(25 x 9) = 15) och b använder q (sqrt(25 x 16) = 20).",
            "src": "leg-b-p-vs-q.svg",
          },
        },
        "sec-pythagoras": {
          "blocks": [
            {
              "kind": "p",
              "text": "Projektionssatsen och Pythagoras sats stämmer exakt överens, och algebran visar varför. Börja från de två projektionsformlerna:",
            },
            {
              "kind": "p",
              "text": "[[[b^2 = c \\times q]]]",
            },
            {
              "kind": "p",
              "text": "Lägg till den matchande formeln för katet a, [[a^2 = c \\times p]], för att få:",
            },
            {
              "kind": "p",
              "text": "[[[a^2 + b^2 = c \\times p + c \\times q]]]",
            },
            {
              "kind": "p",
              "text": "Att bryta ut c ur högerledet ger [[a^2 + b^2 = c(p + q)]]. Eftersom [[p + q = c]] ger insättning det välbekanta resultatet:",
            },
            {
              "kind": "p",
              "text": "[[[a^2 + b^2 = c^2]]]",
            },
            {
              "kind": "p",
              "text": "En numerisk kontroll med 9-16-25-triangeln bekräftar det: [[a^2 + b^2 = 225 + 400 = 625]] och [[c^2 = 25^2 = 625]]. De två satserna är inte rivaler. Projektionssatsen delar upp det pythagoreiska sambandet i en bit per katet, och att lägga ihop bitarna bygger upp det igen.",
            },
          ],
          "h2": "Sambandet mellan projektion q och Pythagoras sats",
        },
        "sec-verify": {
          "blocks": [
            {
              "kind": "p",
              "text": "Tre oberoende kontroller fångar nästan varje fel. Kör minst en av dem på varje svar, och kör alla tre när problemet är viktigt.",
            },
            {
              "kind": "h3",
              "text": "Metod 1: Kontroll med projektionssatsen",
            },
            {
              "kind": "p",
              "text": "Kvadrera ditt svar och jämför det med produkten av c och q. För [[c = 25]], [[q = 16]] och [[b = 20]]: [[b^2 = 400]] och [[c \\times q = 400]], så svaret klarar kontrollen. Om de två talen skiljer sig åt gick antingen indata eller kvadratrotssteget fel.",
            },
            {
              "kind": "h3",
              "text": "Metod 2: Kontroll med Pythagoras sats",
            },
            {
              "kind": "p",
              "text": "Hitta katet a från p och kontrollera sedan [[a^2 + b^2 = c^2]]. Med [[p = 9]], [[q = 16]] och [[c = 25]]: [[a = 15]], [[b = 20]] och [[225 + 400 = 625 = 25^2]]. Denna kontroll går längre än räknaren, eftersom den testar hela triangeln, inte bara den ena formeln.",
            },
            {
              "kind": "h3",
              "text": "Metod 3: Kontroller av storlek och addition",
            },
            {
              "kind": "p",
              "text": "Bekräfta att q är mindre än c, att [[p + q = c]] när p är känt, och att katet b är kortare än hypotenusan. I exemplet är 16 mindre än 25, [[9 + 16 = 25]], och 20 är kortare än 25. Varje misslyckande här pekar på ett fel i beteckningarna, inte på ett räknefel.",
            },
          ],
          "h2": "Så kontrollerar du den beräknade katet b",
        },
        "sec-properties": {
          "blocks": [
            {
              "kind": "p",
              "text": "Åtta egenskaper följer direkt från [[b = \\sqrt{c \\times q}]] och geometrin bakom den. Var och en fungerar också som en rimlighetskontroll av ett nytt svar.",
            },
            {
              "items": [
                "Katet b är alltid kortare än hypotenusan i en icke-degenererad rätvinklig triangel, eftersom q bara är en del av c.",
                "Projektion q är alltid mindre än c, och den är alltid positiv. Noll eller negativa projektioner beskriver ingen verklig triangel.",
                "Att öka q medan c hålls fast ökar b, eftersom produkten inuti roten växer.",
                "Att öka c medan q hålls fast ökar b matematiskt, förutsatt att de nya värdena fortfarande beskriver en verklig triangel med q mindre än c.",
                "Att byta plats på p och q ändrar vilken katet som beräknas: q ger katet b och p ger katet a.",
                "Lika projektioner ger lika kateter. Med c = 20 och p = q = 10 är båda kateterna lika med 10 gånger kvadratroten ur 2, ungefär 14,142.",
                "Resultatet är en längd, inte en area. Den kvadrerade produkten är bara ett mellansteg, och kvadratroten återställer vanliga längdenheter.",
                "Att skala alla mått med samma faktor skalar katet b med den faktorn. Att fördubbla c och q fördubblar b, eftersom produkten fyrdubblas och dess rot fördubblas.",
              ],
              "kind": "list",
            },
            {
              "kind": "p",
              "text": "När höjden landar exakt vid hypotenusans mittpunkt är triangeln likbent, och de två kateterna måste stämma överens, som diagrammet nedan visar.",
            },
          ],
          "h2": "Viktiga egenskaper hos katet b från projektion",
          "image": {
            "alt": "Likbent rätvinklig triangel med hypotenusan 20, lika projektioner p och q på 10, och kateterna a och b vardera lika med 10 rot 2",
            "caption": "Lika projektioner: c = 20 med p = q = 10 ger a = b = 10 rot 2, ungefär 14,142.",
            "src": "leg-b-equal-projections.svg",
          },
        },
        "sec-mistakes": {
          "blocks": [
            {
              "kind": "p",
              "text": "Varje misstag nedan följs av sin rättelse. De flesta av dem beror på beteckningar, inte på räkning.",
            },
            {
              "kind": "steps",
              "steps": [
                "Att glömma kvadratroten: att rapportera cq som svar. Med c = 10 och q = 6,4 är svaret 8 cm, inte 64.",
                "Att blanda ihop b med b i kvadrat: 64 är b i kvadrat i det exemplet, medan 8 är kateten. Säg vilken du menar innan du skriver ner ett tal.",
                "Att använda projektion p i stället för q: att ange p ger katet a. Med c = 25 och p = 9 är resultatet 15 katet a, inte katet b.",
                "Att ange en katet i hypotenusafältet: hypotenusan är sidan mitt emot den räta vinkeln och den längsta sidan. En katet som anges som c förvränger varje senare steg.",
                "Att blanda ihop hypotenusan med en projektion: c är hela sidan, medan q bara är en del av den. Kontrollera att q är mindre än c innan du beräknar.",
                "Att använda q större än eller lika med c: ingen sådan triangel finns, eftersom q är en del av c. Kontrollera diagrammets beteckningar igen om detta händer.",
                "Att blanda centimeter och meter: omvandla först, som i exempel 7, där 0,5 m blev 50 cm innan det multiplicerades med 20 cm.",
                "Att använda negativa mått: längder är positiva, så en negativ inmatning signalerar ett datafel, inte en negativ katet.",
                "Att tillämpa formeln på en icke-rätvinklig triangel: projektionssatsen behöver höjden från en rät vinkel. Utan en rät vinkel finns det ingen projektion q i denna mening.",
                "Att avrunda för tidigt: att avrunda produkten innan roten tas flyttar svaret. Behåll full precision fram till det sista steget.",
                "Att använda fel sidmotsvarighet i diagrammet: att koppla q till a, eller p till b, byter plats på kateterna. Koppla q till den katet som rör vid hörn B.",
                "Att behandla höjden som en projektion: höjden h är vinkelrät mot hypotenusan, inte en del av den, så den hör aldrig hemma i q-fältet.",
              ],
            },
            {
              "kind": "p",
              "text": "Om ett svar ser fel ut, stanna upp och beteckna om diagrammet innan du räknar igen. De flesta felen ovan försvinner när p och q är tydligt markerade på hypotenusan och allt annat läggs åt sidan.",
            },
          ],
          "h2": "Vanliga misstag när man hittar katet b från projektion",
        },
        "sec-applications": {
          "blocks": [
            {
              "kind": "p",
              "text": "Den mest direkta användningen är geometriläxor och klassrumsarbete, där projektionsproblem testar om eleverna kan beteckna ett diagram och tillämpa [[b^2 = c \\times q]] i stället för att av vana nå efter Pythagoras sats. Övningar i likformighet använder samma upplägg, eftersom beviset självt är en övning i att matcha motsvarande sidor.",
            },
            {
              "kind": "p",
              "text": "Teknisk ritning använder satsen när en rätvinklig triangel måste rekonstrueras från partiella mått: om en ritning ger hypotenusan och höjdens fotpunkt följer den saknade kateten utan att formen behöver mätas om. Lärare använder också upplägget som en brygglektion mellan sträckaddition och likformighet.",
            },
            {
              "kind": "p",
              "text": "Ett villkor begränsar varje tillämpning: den rätvinkliga geometri som krävs måste faktiskt finnas. Satsen beskriver exakta geometriska samband, inte ungefärliga fältmätningar, så den ersätter aldrig noggrann mätning eller professionell ingenjörsmätning. Inom sitt rätta sammanhang förvandlar den dock två kända längder till en tredje med en enda multiplikation och en kvadratrot.",
            },
          ],
          "h2": "Praktiska tillämpningar av projektionssatsen",
        },
        "sec-practice": {
          "blocks": [
            {
              "kind": "p",
              "text": "Pröva alla sex problemen på papper innan du läser svaren. Inget av värdena upprepar de genomräknade exemplen, och det sista problemet kombinerar flera idéer från den här guiden.",
            },
            {
              "kind": "h3",
              "text": "Problem 1: Grundläggande heltal",
            },
            {
              "kind": "p",
              "text": "En rätvinklig triangel har hypotenusan [[c = 36]] cm och projektionen [[q = 9]] cm. Hitta katet b.",
            },
            {
              "kind": "h3",
              "text": "Problem 2: Decimalprojektion",
            },
            {
              "kind": "p",
              "text": "Med [[c = 26]] cm och [[q = 6.5]] cm, hitta katet b.",
            },
            {
              "kind": "h3",
              "text": "Problem 3: Stor hypotenusa",
            },
            {
              "kind": "p",
              "text": "Med [[c = 100]] cm och [[q = 36]] cm, hitta katet b.",
            },
            {
              "kind": "h3",
              "text": "Problem 4: Enhetsomvandling",
            },
            {
              "kind": "p",
              "text": "En hypotenusa mäter [[c = 1.5]] m och dess projektion q mäter 24 cm. Hitta katet b i centimeter.",
            },
            {
              "kind": "h3",
              "text": "Problem 5: Hitta q från p och c först",
            },
            {
              "kind": "p",
              "text": "En rätvinklig triangel har hypotenusan [[c = 65]] cm och projektionen [[p = 49]] cm. Hitta katet b.",
            },
            {
              "kind": "h3",
              "text": "Problem 6: Flera steg med katet a och Pythagoras",
            },
            {
              "kind": "p",
              "text": "Med [[c = 50]] cm och [[q = 32]] cm, hitta katet b, hitta sedan katet a och kontrollera resultatet med Pythagoras sats.",
            },
            {
              "kind": "h3",
              "text": "Svar på övningsuppgifterna",
            },
            {
              "kind": "p",
              "text": "Svar 1: [[b = \\sqrt{36 \\times 9} = \\sqrt{324} = 18]] cm.",
            },
            {
              "kind": "p",
              "text": "Svar 2: [[b = \\sqrt{26 \\times 6.5} = \\sqrt{169} = 13]] cm.",
            },
            {
              "kind": "p",
              "text": "Svar 3: [[b = \\sqrt{100 \\times 36} = \\sqrt{3600} = 60]] cm.",
            },
            {
              "kind": "p",
              "text": "Svar 4: Omvandla 1,5 m till 150 cm, sedan [[b = \\sqrt{150 \\times 24} = \\sqrt{3600} = 60]] cm.",
            },
            {
              "kind": "p",
              "text": "Svar 5: Först [[q = 65 - 49 = 16]] cm, sedan [[b = \\sqrt{65 \\times 16} = \\sqrt{1040} \\approx 32.249]] cm.",
            },
            {
              "kind": "p",
              "text": "Svar 6: [[b = \\sqrt{50 \\times 32} = \\sqrt{1600} = 40]] cm. Den andra projektionen är [[p = 50 - 32 = 18]] cm, så [[a = \\sqrt{50 \\times 18} = \\sqrt{900} = 30]] cm. Kontroll: [[30^2 + 40^2 = 900 + 1600 = 2500 = 50^2]].",
            },
          ],
          "h2": "Övningsuppgifter med svar",
        },
      },
      "tocHeading": "Innehållsförteckning",
      "tocItems": {
        "sec-intro": "Räknare för katet b från projektion i rätvinklig triangel",
        "sec-calculate": "Beräkna katet b från projektion i rätvinklig triangel",
        "sec-what-leg-b": "Vad är katet b i en rätvinklig triangel?",
        "sec-what-projection-q": "Vad är projektion q i en rätvinklig triangel?",
        "sec-formula": "Formel för katet b från projektion i rätvinklig triangel",
        "sec-why-sqrt": "Varför finns det en kvadratrot i formeln?",
        "sec-how": "Så använder du räknaren för katet b i rätvinklig triangel",
        "sec-step-example": "Steg-för-steg-exempel på att hitta katet b",
        "sec-diagram": "Diagram över katet b från projektion i rätvinklig triangel förklarat",
        "sec-proof": "Varför fungerar projektionssatsen?",
        "sec-examples": "Genomräknade exempel på att hitta katet b från projektion",
        "sec-other-projection": "Så hittar du katet b när den andra projektionen är känd",
        "sec-relationship": "Sambandet mellan katet b, hypotenusan och projektion q",
        "sec-leg-a": "Sambandet mellan katet b och katet a",
        "sec-pythagoras": "Sambandet mellan projektion q och Pythagoras sats",
        "sec-verify": "Så kontrollerar du den beräknade katet b",
        "sec-properties": "Viktiga egenskaper hos katet b från projektion",
        "sec-mistakes": "Vanliga misstag när man hittar katet b från projektion",
        "sec-applications": "Praktiska tillämpningar av projektionssatsen",
        "sec-practice": "Övningsuppgifter med svar",
        "sec-related": "Utforska relaterade räknare för rätvinkliga trianglar",
        "sec-faq": "Vanliga frågor",
      },
    },
};
