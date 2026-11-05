// projectionGuideTranslations.bsv.ts: Right Triangle Projection
// Guide (Page 33 of 45) translation.
export const PRJ_B6_SV = {
  "sv": {
      "faqHeading": "Vanliga frågor",
      "faqs": [
        {
          "answer": "En projektion är ett segment av hypotenusan som skapas när höjden från den räta vinkeln möter hypotenusan. Höjden delar hypotenusan i två delar, p och q. Varje del är projektionen av en katet på hypotenusan.",
          "question": "Vad är en projektion i en rätvinklig triangel?",
        },
        {
          "answer": "Projektion p ligger intill hörn A och tillhör katet a, medan projektion q ligger intill hörn B och tillhör katet b. De är de två delarna av samma hypotenusa, och [[p + q = c]]. Om du byter plats på dem byter du också de kateter de beskriver.",
          "question": "Vad är skillnaden mellan projektion p och projektion q?",
        },
        {
          "answer": "Formeln är [[p = a^2 / c]], där a är katet a och c är hela hypotenusan. Kvadrera katet a först och dividera sedan med c. Med [[a = 9]] cm och [[c = 15]] cm blir [[p = 81 / 15 = 5.4]] cm.",
          "question": "Vad är formeln för projektion p?",
        },
        {
          "answer": "Formeln är [[q = b^2 / c]], där b är katet b och c är hela hypotenusan. Kvadrera katet b först och dividera sedan med c. Med [[b = 12]] cm och [[c = 15]] cm blir [[q = 144 / 15 = 9.6]] cm.",
          "question": "Vad är formeln för projektion q?",
        },
        {
          "answer": "Använd [[a = \\sqrt{c \\times p}]]. Multiplicera hypotenusan c med projektion p och dra sedan kvadratroten. Med [[c = 25]] cm och [[p = 9]] cm blir [[a = \\sqrt{225} = 15]] cm. Kvadratroten behövs eftersom cp är lika med a i kvadrat, inte a.",
          "question": "Hur beräknar jag katet a från projektion p?",
        },
        {
          "answer": "Använd [[b = \\sqrt{c \\times q}]]. Multiplicera hypotenusan c med projektion q och dra sedan kvadratroten. Med [[c = 25]] cm och [[q = 16]] cm blir [[b = \\sqrt{400} = 20]] cm. Kvadratroten förvandlar den kvadrerade längden tillbaka till en sidlängd.",
          "question": "Hur beräknar jag katet b från projektion q?",
        },
        {
          "answer": "Addera de två projektionerna: [[c = p + q]]. Höjden delar hypotenusan i exakt dessa två segment, så deras summa återskapar hela sidan. Med [[p = 9]] cm och [[q = 16]] cm blir [[c = 25]] cm.",
          "question": "Hur hittar jag hypotenusan från två projektioner?",
        },
        {
          "answer": "Eftersom satsen ger kvadraten på en katet, inte själva kateten. Påståendet [[a^2 = c \\times p]] beskriver en kvadrerad längd. Att dra kvadratroten upphäver kvadreringen och ger tillbaka en vanlig längd. Om du hoppar över den rapporterar du ett kvadrerat värde som om det vore en sida.",
          "question": "Varför använder vi en kvadratrot i projektionssatsen?",
        },
        {
          "answer": "Ja. Höjden är det geometriska medelvärdet av de två projektionerna: [[h = \\sqrt{p \\times q}]]. Med [[p = 9]] cm och [[q = 16]] cm blir [[h = \\sqrt{144} = 12]] cm. Den här sidan har inget höjdläge, så använd den särskilda kalkylatorn för höjd från projektioner för det steget.",
          "question": "Kan projektioner bestämma höjden?",
        },
        {
          "answer": "Om man adderar de två projektionsformlerna får man [[a^2 + b^2 = c \\times p + c \\times q = c(p + q)]]. Eftersom [[p + q = c]] blir detta [[a^2 + b^2 = c^2]]. Projektionssatsen delar upp Pythagoras samband i en del per katet.",
          "question": "Hur hänger projektioner ihop med Pythagoras sats?",
        },
        {
          "answer": "Anpassa läget efter de värden du känner till. Använd segment p när du känner till a och c, segment q när du känner till b och c, katet a när du känner till c och p, katet b när du känner till c och q, och projektionernas summa till c när du känner till p och q.",
          "question": "Vilket kalkylatorläge ska jag välja?",
        },
        {
          "answer": "Nej. Kateterna är de två sidor som bildar den räta vinkeln, medan projektioner är segment längs hypotenusan. En projektion är i de flesta fall kortare än sin katet, och den ligger plant på hypotenusan, inte längs triangelns sida.",
          "question": "Är projektioner samma sak som kateterna i en rätvinklig triangel?",
        },
      ],
      "relatedHeading": "Utforska relaterade kalkylatorer för rätvinkliga trianglar",
      "relatedIntro": "Välj nästa verktyg efter det mått du behöver, eftersom varje kalkylator nedan hanterar en specifik projektionsuppgift.",
      "relatedItems": [
        "Kalkylator för projektion P i rätvinklig triangel",
        "Kalkylator för projektion Q i rätvinklig triangel",
        "Kalkylator för katet A från projektion i rätvinklig triangel",
        "Kalkylator för katet B från projektion i rätvinklig triangel",
        "Kalkylator för hypotenusa från projektioner i rätvinklig triangel",
        "Kalkylator för höjd från projektioner i rätvinklig triangel",
        "Kalkylator för höjd i rätvinklig triangel",
      ],
      "sections": {
        "sec-all-measurements": {
          "blocks": [
            {
              "kind": "p",
              "text": "Att känna till de två projektionerna räcker för att återskapa hela triangeln. Använd [[p = 9]] cm och [[q = 16]] cm. Först är hypotenusan [[c = 9 + 16 = 25]] cm. Sedan är katet a [[a = \\sqrt{25 \\times 9} = 15]] cm, och katet b är [[b = \\sqrt{25 \\times 16} = 20]] cm. Höjden är [[h = \\sqrt{9 \\times 16} = \\sqrt{144} = 12]] cm.",
            },
            {
              "kind": "p",
              "text": "Ett par tal ger fyra längder: c, a, b och h. Det är kraften i projektionssambanden: två segment på hypotenusan bär triangelns fulla form. En sista kontroll sluter cirkeln: [[15^2 + 20^2 = 225 + 400 = 625 = 25^2]], så Pythagoras sats bekräftar hela triangeln på en gång.",
            },
            {
              "kind": "p",
              "text": "Tänk på att detta är matematiska samband, inte separata kalkylatorlägen. Den här sidan beräknar ett värde per läge. Att återskapa hela triangeln innebär att köra ett läge och sedan använda dess resultat i nästa, eller att arbeta igenom stegen för hand som visas ovan.",
            },
          ],
          "h2": "Så beräknar du alla huvudmått i en rätvinklig triangel",
          "image": {
            "alt": "Rätvinklig triangel med projektioner p lika med 9 och q lika med 16, hypotenusa 25, kateter 15 och 20, och höjd 12, som visar alla sex mått i ett diagram",
            "caption": "Ett par projektioner återskapar triangeln: c = 25, a = 15, b = 20, h = 12.",
            "src": "projection-numerical-example.svg",
          },
        },
        "sec-altitude": {
          "blocks": [
            {
              "kind": "p",
              "text": "Höjden är det geometriska medelvärdet av de två projektionerna:",
            },
            {
              "kind": "p",
              "text": "[[[h = \\sqrt{p \\times q}]]]",
            },
            {
              "kind": "p",
              "text": "Använd [[p = 9]] cm och [[q = 16]] cm. Produkten är [[9 \\times 16 = 144]], och kvadratroten ur 144 är 12, så [[h = 12]] cm. Höjden är det vinkelräta segmentet från den räta vinkeln till hypotenusan, och dess längd är fastställd när p och q är kända. Detta är samma idé om geometriskt medelvärde som kopplar kateter till projektioner, tillämpad på höjden i stället.",
            },
            {
              "kind": "p",
              "text": "Observera att den här sidan inte har ett särskilt höjdläge. Kalkylatorn ger projektioner, kateter och hypotenusan, men inte h. För en sida som löser höjden direkt, använd <a href=\"/right-triangle-altitude-from-projections-calculator/\">kalkylatorn för höjd från projektioner</a>, som tar p och q och ger h. <a href=\"/right-triangle-altitude-calculator/\">Kalkylatorn för höjd</a> täcker andra sätt att hitta h, från kateterna eller från arean.",
            },
          ],
          "h2": "Sambandet mellan projektioner och höjd",
        },
        "sec-applications": {
          "blocks": [
            {
              "kind": "p",
              "text": "Den mest direkta användningen är geometriläxor och klassrumsarbete, där projektionsuppgifter testar om eleverna kan märka ut ett diagram och tillämpa [[a^2 = c \\times p]] i stället för att av vana ta till Pythagoras sats. Övningar i likformiga trianglar använder samma upplägg, eftersom själva beviset är en övning i att matcha motsvarande sidor.",
            },
            {
              "kind": "p",
              "text": "Teknisk ritning använder satsen när en rätvinklig triangel måste återskapas från partiella mått: om en ritning ger hypotenusan och höjdens fotpunkt följer den saknade kateten utan att formen behöver mätas om.",
            },
            {
              "kind": "p",
              "text": "Ett villkor begränsar varje tillämpning: den nödvändiga geometrin för en rätvinklig triangel måste faktiskt finnas. Satsen beskriver exakta geometriska samband, inte ungefärliga fältmätningar, så den ersätter aldrig noggrann mätning eller professionell ingenjörsmätning. Inom sitt rätta sammanhang förvandlar den dock två kända längder till en tredje med en enda multiplikation och en kvadratrot.",
            },
          ],
          "h2": "Praktiska tillämpningar av projektionssamband i rätvinkliga trianglar",
        },
        "sec-calculate": {
          "blocks": [
            {
              "kind": "p",
              "text": "Kalkylatorn på den här sidan erbjuder fem lägen, ett för varje projektionssamband. Varje läge frågar efter två kända mått och ger ett saknat värde. Du behöver aldrig lösa hela triangeln först: välj det läge som matchar dina tal, skriv in dem och läs av resultatet.",
            },
            {
              "kind": "p",
              "text": "Tabellen nedan är det snabbaste sättet att välja. Hitta raden vars kända mått matchar dina, så anger den raden vilket läge du ska använda. Avsnitten som följer förklarar varje läge i detalj, med ett genomräknat exempel för vart och ett.",
            },
          ],
          "h2": "Beräkna projektioner och hypotenussegment i rätvinklig triangel",
          "table": {
            "headers": [
              "Kalkylatorläge",
              "Kända mått",
              "Resultat",
            ],
            "rows": [
              [
                "Hypotenussegment p",
                "Katet a och hypotenusa c",
                "Projektion p",
              ],
              [
                "Hypotenussegment q",
                "Katet b och hypotenusa c",
                "Projektion q",
              ],
              [
                "Katet a kvadrerad projektion",
                "Hypotenusa c och projektion p",
                "Katet a",
              ],
              [
                "Katet b kvadrerad projektion",
                "Hypotenusa c och projektion q",
                "Katet b",
              ],
              [
                "Projektionernas summa till c",
                "Projektion p och projektion q",
                "Hypotenusa c",
              ],
            ],
          },
        },
        "sec-choose-mode": {
          "blocks": [
            {
              "kind": "p",
              "text": "Att välja läge är en matchningsövning: hitta det läge som frågar efter de två mått du känner till, så ger kalkylatorn det saknade värdet.",
            },
            {
              "kind": "h3",
              "text": "Läge 1: Hypotenussegment p",
            },
            {
              "kind": "p",
              "text": "Välj det här läget när du känner till katet a och hypotenusa c. Formeln är [[p = a^2 / c]]. Kvadrera katet a och dividera sedan med c. Använd det när en uppgift ger dig en katet och hela hypotenusan och frågar hur stor del av hypotenusan som tillhör den kateten.",
            },
            {
              "kind": "h3",
              "text": "Läge 2: Hypotenussegment q",
            },
            {
              "kind": "p",
              "text": "Välj det här läget när du känner till katet b och hypotenusa c. Formeln är [[q = b^2 / c]]. Det är spegelbilden av läge 1, med katet b i stället för katet a. Använd det när den kända kateten är den som rör vid hörn B.",
            },
            {
              "kind": "h3",
              "text": "Läge 3: Katet a kvadrerad projektion",
            },
            {
              "kind": "p",
              "text": "Välj det här läget när du känner till hypotenusa c och projektion p. Formeln är [[a = \\sqrt{c \\times p}]]. Multiplicera först och dra sedan kvadratroten. Använd det när en uppgift ger hypotenusan och segmentet intill A och frågar efter kateten.",
            },
            {
              "kind": "h3",
              "text": "Läge 4: Katet b kvadrerad projektion",
            },
            {
              "kind": "p",
              "text": "Välj det här läget när du känner till hypotenusa c och projektion q. Formeln är [[b = \\sqrt{c \\times q}]]. Det är spegelbilden av läge 3, med q i stället för p. Använd det när det kända segmentet är det intill B.",
            },
            {
              "kind": "h3",
              "text": "Läge 5: Projektionernas summa till c",
            },
            {
              "kind": "p",
              "text": "Välj det här läget när du känner till båda projektionerna, p och q. Formeln är [[c = p + q]], en enkel addition utan kvadrering och utan kvadratrot.",
            },
            {
              "kind": "p",
              "text": "Snabb beslutsregel: en katet med c ger en projektion, c med en projektion ger en katet, och båda projektionerna tillsammans ger c. Om dina kända värden inte matchar något av dessa par behöver du först ett annat mått.",
            },
          ],
          "h2": "Så väljer du rätt kalkylatorläge",
          "image": {
            "alt": "Fem kalkylatorlägen med sina kända värden och resultat: segment p från a och c, segment q från b och c, katet a från c och p, katet b från c och q, och hypotenusa c från p och q",
            "caption": "Fem lägen, ett per känt par: en katet med c ger en projektion, c med en projektion ger en katet, och p med q ger c.",
            "src": "projection-five-modes.svg",
          },
        },
        "sec-diagram": {
          "blocks": [
            {
              "kind": "p",
              "text": "Huvuddiagrammet visar triangeln ABC med den räta vinkeln vid C. Sidan AC är katet a, sidan BC är katet b, och sidan AB är hypotenusan c. Höjden CD faller från C vinkelrätt mot AB och rör vid den i D. Två små kvadrater markerar de räta vinklarna: en vid C, mellan kateterna, och en vid D, mellan höjden och hypotenusan.",
            },
            {
              "kind": "p",
              "text": "Punkt D delar hypotenusan i segment AD, som är projektion p, och segment DB, som är projektion q. Höjden CD är märkt h. Följ diagrammet i den här ordningen för att fästa etiketterna: börja vid A, gå längs katet a till C, sedan längs katet b till B, och sedan tillbaka längs hypotenusan från B till A, med ett stopp vid D för att se uppdelningen i q och p.",
            },
            {
              "kind": "p",
              "text": "Höjden skapar två mindre rätvinkliga trianglar, ACD och CBD, inuti den ursprungliga. I triangeln ACD är hypotenusan katet a och en katet är projektion p. I triangeln CBD är hypotenusan katet b och en katet är projektion q.",
            },
          ],
          "h2": "Förstå diagrammet över projektion i rätvinklig triangel",
          "image": {
            "alt": "Rätvinklig triangel ABC med rät vinkel vid C, höjd CD till hypotenusa AB, kateter a och b, hypotenusa c, projektioner p och q, och höjd h märkta",
            "caption": "Huvudtriangeln ABC: höjden CD delar hypotenusan AB i projektion p (AD) och projektion q (DB).",
            "src": "projection-main-triangle.svg",
          },
        },
        "sec-examples": {
          "blocks": [
            {
              "kind": "p",
              "text": "Varje exempel anger de givna värdena, läget, insättningen och det slutliga svaret. Två exempel täcker vart och ett av de fem lägena, så att du kan se varje läge två gånger med olika tal.",
            },
            {
              "kind": "h3",
              "text": "Exempel 1: Hitta projektion P",
            },
            {
              "kind": "p",
              "text": "Givet [[a = 9]] cm och [[c = 15]] cm, använd läge 1, Hypotenussegment p. Formeln ger [[p = 9^2 / 15 = 81 / 15 = 5.4]] cm. ",
            },
            {
              "kind": "h3",
              "text": "Exempel 2: Hitta projektion P",
            },
            {
              "kind": "p",
              "text": "Givet [[a = 12]] m och [[c = 20]] m, använd läge 1. Formeln ger [[p = 12^2 / 20 = 144 / 20 = 7.2]] m. Den andra projektionen är 12,8 m, och [[7.2 + 12.8 = 20]] m bekräftar resultatet.",
            },
            {
              "kind": "h3",
              "text": "Exempel 3: Hitta projektion Q",
            },
            {
              "kind": "p",
              "text": "Givet [[b = 12]] cm och [[c = 15]] cm, använd läge 2, Hypotenussegment q. Formeln ger [[q = 12^2 / 15 = 144 / 15 = 9.6]] cm. Detta är samma triangel som i exempel 1, sedd från den andra kateten.",
            },
            {
              "kind": "h3",
              "text": "Exempel 4: Hitta projektion Q",
            },
            {
              "kind": "p",
              "text": "Givet [[b = 8]] m och [[c = 10]] m, använd läge 2. Formeln ger [[q = 8^2 / 10 = 64 / 10 = 6.4]] m. Den andra projektionen är 3,6 m, och detta är den välkända 6-8-10-triangeln.",
            },
            {
              "kind": "h3",
              "text": "Exempel 5: Hitta katet A",
            },
            {
              "kind": "p",
              "text": "Givet [[c = 25]] cm och [[p = 9]] cm, använd läge 3, Katet a kvadrerad projektion. Formeln ger [[a = \\sqrt{25 \\times 9} = \\sqrt{225} = 15]] cm. Produkten är en jämn kvadrat, så svaret är exakt och ingen avrundning behövs.",
            },
            {
              "kind": "h3",
              "text": "Exempel 6: Hitta katet A",
            },
            {
              "kind": "p",
              "text": "Givet [[c = 10]] cm och [[p = 4]] cm, använd läge 3. Formeln ger [[a = \\sqrt{10 \\times 4} = \\sqrt{40} \\approx 6.325]] cm. Produkten 40 är inte en jämn kvadrat, så svaret är en approximation avrundad till tre decimaler.",
            },
            {
              "kind": "h3",
              "text": "Exempel 7: Hitta katet B",
            },
            {
              "kind": "p",
              "text": "Givet [[c = 25]] cm och [[q = 16]] cm, använd läge 4, Katet b kvadrerad projektion. Formeln ger [[b = \\sqrt{25 \\times 16} = \\sqrt{400} = 20]] cm. Detta är samma triangel som i exempel 5, sedd från den andra projektionen, och de två kateterna 15 och 20 fullbordar 15-20-25-triangeln.",
            },
            {
              "kind": "h3",
              "text": "Exempel 8: Hitta katet B",
            },
            {
              "kind": "p",
              "text": "Givet [[c = 10]] cm och [[q = 6]] cm, använd läge 4. Formeln ger [[b = \\sqrt{10 \\times 6} = \\sqrt{60} \\approx 7.746]] cm. Den matchande kateten a är cirka 6,325 cm, från exempel 6.",
            },
            {
              "kind": "h3",
              "text": "Exempel 9: Hitta hypotenusan",
            },
            {
              "kind": "p",
              "text": "Givet [[p = 9]] cm och [[q = 16]] cm, använd läge 5, Projektionernas summa till c. Formeln ger [[c = 9 + 16 = 25]] cm. Ingen kvadrering och ingen kvadratrot behövs, eftersom de två segmenten helt enkelt fogas samman till hela sidan.",
            },
            {
              "kind": "h3",
              "text": "Exempel 10: Hitta hypotenusan",
            },
            {
              "kind": "p",
              "text": "Givet [[p = 3.5]] m och [[q = 6.5]] m, använd läge 5. Formeln ger [[c = 3.5 + 6.5 = 10]] m. Decimalprojektioner adderas på samma sätt som heltal, så ställ decimaltecknen i linje och addera.",
            },
          ],
          "h2": "Genomräknade exempel med alla fem kalkylatorlägen",
        },
        "sec-formulas": {
          "blocks": [
            {
              "kind": "p",
              "text": "Fem formler täcker varje läge på den här sidan. De två första hittar projektioner från kateter. De två nästa återskapar kateter från projektioner. Den sista återskapar hypotenusan från dess två delar.",
            },
            {
              "kind": "p",
              "text": "Projektion p, från katet a och hypotenusan:",
            },
            {
              "kind": "p",
              "text": "[[[p = \\frac{a^2}{c}]]]",
            },
            {
              "kind": "p",
              "text": "Projektion q, från katet b och hypotenusan:",
            },
            {
              "kind": "p",
              "text": "[[[q = \\frac{b^2}{c}]]]",
            },
            {
              "kind": "p",
              "text": "Katet a, från hypotenusan och projektion p:",
            },
            {
              "kind": "p",
              "text": "[[[a = \\sqrt{c \\times p}]]]",
            },
            {
              "kind": "p",
              "text": "Katet b, från hypotenusan och projektion q:",
            },
            {
              "kind": "p",
              "text": "[[[b = \\sqrt{c \\times q}]]]",
            },
            {
              "kind": "p",
              "text": "Hypotenusa, från båda projektionerna:",
            },
            {
              "kind": "p",
              "text": "[[[c = p + q]]]",
            },
            {
              "kind": "p",
              "text": "Att hitta en projektion innebär att kvadrera en katet och dividera med hypotenusan. Att hitta en katet innebär att multiplicera hypotenusan med en projektion och dra kvadratroten. Att hitta hypotenusan innebär att addera två segment. Kvadratroten förekommer bara när man återskapar en katet, eftersom bara katetformlerna utgår från en kvadrerad längd. Alla mått måste använda samma enhet, så konvertera innan du beräknar.",
            },
          ],
          "h2": "Formler för projektion i rätvinklig triangel förklarade",
        },
        "sec-how-to-use": {
          "blocks": [
            {
              "kind": "p",
              "text": "Tio korta steg tar dig från ett märkt diagram till ett kontrollerat svar. Stegen är desamma för varje läge; bara det läge du väljer och de tal du skriver in ändras.",
            },
            {
              "kind": "steps",
              "steps": [
                "Identifiera vilka mått som är kända.",
                "Öppna kalkylatorns lägesväljare.",
                "Välj det matchande beräkningsläget.",
                "Skriv in det första måttet som krävs.",
                "Skriv in det andra måttet som krävs.",
                "Välj kompatibla måttenheter.",
                "Klicka på den relevanta knappen Beräkna.",
                "Läs av det visade resultatet.",
                "Kontrollera svaret med ett annat geometriskt samband när det är lämpligt.",
                "Använd Återställ innan du påbörjar en ny beräkning.",
              ],
            },
            {
              "kind": "p",
              "text": "Steg 1 gör det mesta av arbetet. Märk ut triangeln, markera p och q på hypotenusan och notera vilken katet varje projektion tillhör. När etiketterna är klara följer valet av läge från tabellen nära toppen av den här guiden, och kalkylatorn hanterar räknearbetet. Beskriv eller förvänta dig inte funktioner som sidan inte har: den beräknar inte höjden, vinklarna eller arean automatiskt.",
            },
          ],
          "h2": "Så använder du kalkylatorn för projektion i rätvinklig triangel",
        },
        "sec-hypotenuse": {
          "blocks": [
            {
              "kind": "p",
              "text": "De två projektionerna är de två delarna av en rak sida, så hypotenusan är deras summa:",
            },
            {
              "kind": "p",
              "text": "[[[c = p + q]]]",
            },
            {
              "kind": "p",
              "text": "Använd [[p = 9]] cm och [[q = 16]] cm. Addition ger [[c = 9 + 16 = 25]] cm. Detta är principen om segmentaddition: när en punkt delar ett segment i två delar är hela segmentet lika med summan av dess delar. Höjdens fotpunkt D delar hypotenusan AB i AD och DB, så AB är lika med AD plus DB.",
            },
            {
              "kind": "p",
              "text": "Det här läget är också den snabbaste kontrollen av de andra fyra lägena. När du beräknar p och q var för sig, addera dem och jämför med c. I 9-12-15-triangeln ger [[p = 5.4]] cm och [[q = 9.6]] cm tillsammans 15 cm, vilket bekräftar båda projektionerna på en gång. <a href=\"/right-triangle-hypotenuse-from-projections-calculator/\">Kalkylatorn för hypotenusa från projektioner</a> täcker den här beräkningen fullt ut när du behöver den på egen hand.",
            },
          ],
          "h2": "Så beräknar du hela hypotenusan från projektioner",
        },
        "sec-intro": {
          "blocks": [
            {
              "kind": "p",
              "text": "En projektion i en rätvinklig triangel är den skugga som en katet kastar på hypotenusan. Dra höjden från hörnet med den räta vinkeln till hypotenusan, så delar den den sidan i två segment som kallas p och q. Segment p tillhör katet a, och segment q tillhör katet b.",
            },
            {
              "kind": "p",
              "text": "Den här kalkylatorn för projektion i rätvinklig triangel arbetar med alla fem projektionssamband. Den hittar projektion p från katet a, projektion q från katet b, katet a från projektion p, katet b från projektion q och hela hypotenusan från p och q. Varje uppgift är ett eget läge, så du väljer det som matchar de mått du redan känner till.",
            },
            {
              "kind": "p",
              "text": "Samma två projektioner kan också återskapa hela triangeln. Om till exempel [[p = 9]] cm och [[q = 16]] cm, så är [[c = 9 + 16 = 25]] cm, och höjden är [[h = \\sqrt{9 \\times 16} = 12]] cm. Den här guiden förklarar varje läge, visar formlerna, går igenom exempel och lär dig hur du kontrollerar varje svar.",
            },
          ],
          "h2": "Kalkylator för projektion i rätvinklig triangel",
        },
        "sec-leg-a": {
          "blocks": [
            {
              "kind": "p",
              "text": "För att återskapa katet a multiplicerar du hypotenusan med projektion p och drar kvadratroten:",
            },
            {
              "kind": "p",
              "text": "[[[a = \\sqrt{c \\times p}]]]",
            },
            {
              "kind": "p",
              "text": "Använd [[c = 25]] cm och [[p = 9]] cm. Produkten är [[25 \\times 9 = 225]], och kvadratroten ur 225 är 15, så [[a = 15]] cm. Produkten 225 är en kvadrerad längd, inte en sida, och därför kan kvadratroten inte hoppas över. Att rapportera 225 som katet skulle påstå att sidan är nio gånger längre än hypotenusan.",
            },
            {
              "kind": "p",
              "text": "Kvadratrotsteget är hela poängen med det här läget. Projektionssatsen säger [[a^2 = c \\times p]], så produkten ger kvadraten på kateten. Att upphäva en kvadrering kräver en kvadratrot, precis som att upphäva en fördubbling kräver halvering. <a href=\"/right-triangle-leg-a-from-projection-calculator/\">Kalkylatorn för katet a från projektion</a> täcker den här beräkningen fullt ut när du behöver den på egen hand.",
            },
          ],
          "h2": "Så hittar du katet A från projektion P",
        },
        "sec-leg-b": {
          "blocks": [
            {
              "kind": "p",
              "text": "För att återskapa katet b multiplicerar du hypotenusan med projektion q och drar kvadratroten:",
            },
            {
              "kind": "p",
              "text": "[[[b = \\sqrt{c \\times q}]]]",
            },
            {
              "kind": "p",
              "text": "Använd [[c = 25]] cm och [[q = 16]] cm. Produkten är [[25 \\times 16 = 400]], och kvadratroten ur 400 är 20, så [[b = 20]] cm. Metoden är spegelbilden av beräkningen för katet a, med q i stället för p. Kopplingen är fastställd av triangelns etiketter, så om du skriver in p här får du katet a i stället.",
            },
            {
              "kind": "p",
              "text": "Kontrollera svaret mot triangelns storlek. Katet b måste vara kortare än hypotenusan, och 20 cm är kortare än 25 cm, så resultatet klarar den första rimlighetskontrollen. Att kvadrera den ger [[20^2 = 400]], vilket stämmer med [[c \\times q = 25 \\times 16 = 400]], så satsen gäller exakt. <a href=\"/right-triangle-leg-b-from-projection-calculator/\">Kalkylatorn för katet b från projektion</a> täcker den här beräkningen fullt ut när du behöver den på egen hand.",
            },
          ],
          "h2": "Så hittar du katet B från projektion Q",
        },
        "sec-mistakes": {
          "blocks": [
            {
              "kind": "p",
              "text": "De flesta misstag nedan beror på märkning, inte på räkning, så märk om diagrammet innan du räknar om när ett svar ser fel ut.",
            },
            {
              "kind": "steps",
              "steps": [
                "Att förväxla projektion p med projektion q: p ligger intill A och tillhör katet a, medan q ligger intill B och tillhör katet b.",
                "Att para ihop katet a med q i stället för p: katet a använder p, så [[a = \\sqrt{c \\times p}]]. Att använda q ger katet b, inte katet a.",
                "Att para ihop katet b med p i stället för q: katet b använder q, så [[b = \\sqrt{c \\times q}]]. Att använda p ger katet a, inte katet b.",
                "Att glömma kvadratroten när man beräknar en katet: produkten cp är a i kvadrat, inte a. Med c = 25 och p = 9 är kateten 15 cm, inte 225.",
                "Att blanda olika måttenheter: konvertera först. Att multiplicera meter med centimeter ger en meningslös produkt, så sätt båda indata i en enhet.",
                "Att använda fel kalkylatorläge: matcha läget mot dina kända värden med tabellen nära toppen av den här guiden.",
                "Att behandla p eller q som en vinkelrät katet: projektioner ligger plant längs hypotenusan. De är segment av hypotenusan, inte sidor i triangeln.",
                "Att glömma att c = p + q: de två projektionerna måste summera till hypotenusan.",
                "Att använda ogiltiga eller negativa längder: längder är positiva, så ett negativt värde signalerar ett datafel, och nollprojektioner beskriver ingen verklig triangel.",
                "Att avrunda för tidigt: behåll full precision till det sista steget och avrunda sedan en gång.",
                "Att tillämpa formlerna på en godtycklig triangel: satsen kräver en rät vinkel och dess höjd, så utan en sådan finns inga projektioner p och q i den här meningen.",
                "Att förväxla kvadrerade sidlängder med faktiska sidlängder: 225 är a i kvadrat, medan 15 är a. Säg vilken du menar innan du skriver ner ett tal.",
              ],
            },
          ],
          "h2": "Vanliga misstag vid användning av en kalkylator för projektion i rätvinklig triangel",
        },
        "sec-practice": {
          "blocks": [
            {
              "kind": "p",
              "text": "Pröva alla sex uppgifter på papper innan du läser svaren. Inget av värdena upprepar de genomräknade exemplen, och den sista uppgiften kombinerar flera idéer från den här guiden.",
            },
            {
              "kind": "h3",
              "text": "Uppgift 1: Hitta projektion P",
            },
            {
              "kind": "p",
              "text": "En rätvinklig triangel har katet [[a = 6]] cm och hypotenusa [[c = 10]] cm. Hitta projektion p.",
            },
            {
              "kind": "h3",
              "text": "Uppgift 2: Hitta projektion Q",
            },
            {
              "kind": "p",
              "text": "En rätvinklig triangel har katet [[b = 15]] cm och hypotenusa [[c = 25]] cm. Hitta projektion q.",
            },
            {
              "kind": "h3",
              "text": "Uppgift 3: Hitta katet A",
            },
            {
              "kind": "p",
              "text": "En rätvinklig triangel har hypotenusa [[c = 17]] cm och projektion [[p = 8]] cm. Hitta katet a.",
            },
            {
              "kind": "h3",
              "text": "Uppgift 4: Hitta katet B",
            },
            {
              "kind": "p",
              "text": "En rätvinklig triangel har hypotenusa [[c = 13]] cm och projektion [[q = 9]] cm. Hitta katet b.",
            },
            {
              "kind": "h3",
              "text": "Uppgift 5: Hitta hypotenusan",
            },
            {
              "kind": "p",
              "text": "En rätvinklig triangel har projektioner [[p = 5]] cm och [[q = 20]] cm. Hitta hypotenusan c.",
            },
            {
              "kind": "h3",
              "text": "Uppgift 6: Projektionssatsen i flera steg",
            },
            {
              "kind": "p",
              "text": "En rätvinklig triangel har projektioner [[p = 4]] cm och [[q = 9]] cm. Hitta hypotenusan, båda kateterna och höjden, och kontrollera sedan resultatet med Pythagoras sats.",
            },
            {
              "kind": "h3",
              "text": "Svar på övningsuppgifterna",
            },
            {
              "kind": "p",
              "text": "Svar 1: [[p = 6^2 / 10 = 36 / 10 = 3.6]] cm.",
            },
            {
              "kind": "p",
              "text": "Svar 2: [[q = 15^2 / 25 = 225 / 25 = 9]] cm.",
            },
            {
              "kind": "p",
              "text": "Svar 3: [[a = \\sqrt{17 \\times 8} = \\sqrt{136} \\approx 11.662]] cm.",
            },
            {
              "kind": "p",
              "text": "Svar 4: [[b = \\sqrt{13 \\times 9} = \\sqrt{117} \\approx 10.817]] cm.",
            },
            {
              "kind": "p",
              "text": "Svar 5: [[c = 5 + 20 = 25]] cm.",
            },
            {
              "kind": "p",
              "text": "Svar 6: [[c = 4 + 9 = 13]] cm, [[a = \\sqrt{13 \\times 4} = \\sqrt{52} \\approx 7.211]] cm, [[b = \\sqrt{13 \\times 9} = \\sqrt{117} \\approx 10.817]] cm, [[h = \\sqrt{4 \\times 9} = 6]] cm. Kontroll: [[52 + 117 = 169 = 13^2]].",
            },
          ],
          "h2": "Övningsuppgifter med svar",
        },
        "sec-projection-p": {
          "blocks": [
            {
              "kind": "p",
              "text": "Projektion p är den del av hypotenusan som tillhör katet a. Formeln dividerar kvadraten på katet a med hela hypotenusan:",
            },
            {
              "kind": "p",
              "text": "[[[p = \\frac{a^2}{c}]]]",
            },
            {
              "kind": "p",
              "text": "Använd [[a = 9]] cm och [[c = 15]] cm. Steg 1 skriver formeln, [[p = a^2 / c]]. Steg 2 sätter in värdena, [[p = 9^2 / 15 = 81 / 15]]. Steg 3 dividerar och ger [[p = 5.4]] cm. Svaret är en längd längs hypotenusan, mätt i samma enhet som a och c.",
            },
            {
              "kind": "p",
              "text": "En kort kontroll bekräftar resultatet. Den andra kateten i den här triangeln är 12 cm, så dess projektion är [[q = 12^2 / 15 = 144 / 15 = 9.6]] cm. Att addera de två projektionerna ger [[5.4 + 9.6 = 15]] cm, vilket är exakt c. Om dina två projektioner inte summerar till c var en av indata fel. <a href=\"/right-triangle-projection-p-calculator/\">Kalkylatorn för projektion p</a> hanterar den här beräkningen på egen hand när du behöver den ofta.",
            },
          ],
          "h2": "Så beräknar du projektion P från katet A och hypotenusan",
          "image": {
            "alt": "Rätvinklig triangel som visar att katet a i kvadrat dividerat med hypotenusa c ger projektion p, där a är 9 cm och c är 15 cm vilket ger p lika med 5,4 cm",
            "caption": "Projektion p från katet a: p är lika med a i kvadrat över c, så 81 över 15 ger 5,4 cm.",
            "src": "projection-p-leg-a.svg",
          },
        },
        "sec-projection-q": {
          "blocks": [
            {
              "kind": "p",
              "text": "Projektion q är den del av hypotenusan som tillhör katet b. Formeln dividerar kvadraten på katet b med hela hypotenusan:",
            },
            {
              "kind": "p",
              "text": "[[[q = \\frac{b^2}{c}]]]",
            },
            {
              "kind": "p",
              "text": "Använd [[b = 12]] cm och [[c = 15]] cm. Steg 1 skriver formeln, [[q = b^2 / c]]. Steg 2 sätter in värdena, [[q = 12^2 / 15 = 144 / 15]]. Steg 3 dividerar och ger [[q = 9.6]] cm. Svaret är segmentet intill hörn B, på motsatt sida av höjdens fotpunkt från p.",
            },
            {
              "kind": "p",
              "text": "Jämför de två projektionerna innan du går vidare. Här är p 5,4 cm och q 9,6 cm, så q är större, vilket stämmer med att katet b är längre än katet a. Den längre kateten kastar alltid den längre projektionen. Om din längre katet gav den kortare projektionen har du bytt plats på p och q. <a href=\"/right-triangle-projection-q-calculator/\">Kalkylatorn för projektion q</a> hanterar den här beräkningen på egen hand när du behöver den ofta.",
            },
          ],
          "h2": "Så beräknar du projektion Q från katet B och hypotenusan",
          "image": {
            "alt": "Rätvinklig triangel som visar att katet b i kvadrat dividerat med hypotenusa c ger projektion q, där b är 12 cm och c är 15 cm vilket ger q lika med 9,6 cm",
            "caption": "Projektion q från katet b: q är lika med b i kvadrat över c, så 144 över 15 ger 9,6 cm.",
            "src": "projection-q-leg-b.svg",
          },
        },
        "sec-proof": {
          "blocks": [
            {
              "kind": "p",
              "text": "Beviset vilar på likformiga trianglar. Att rita höjden CD delar triangeln ABC i två mindre rätvinkliga trianglar, ACD och CBD, och båda är likformiga med den ursprungliga triangeln. Likformighet innebär att deras motsvarande sidor håller samma förhållande, och ett av dessa förhållanden ger projektionssatsen direkt.",
            },
            {
              "kind": "p",
              "text": "Börja med katet a. Triangeln ACD delar vinkeln vid A med triangeln ABC, och båda innehåller en rät vinkel, så deras tredje vinklar måste också stämma överens. Att matcha de sidor som sitter på samma platser ger proportionen:",
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
              "text": "Korsmultiplikation tar bort bråken: [[p \\times c = a \\times a]], vilket är [[a^2 = c \\times p]]. Samma resonemang tillämpat på den andra lilla triangeln, CBD, ger [[b^2 = c \\times q]], eftersom triangeln CBD delar vinkeln vid B med hela triangeln. Likformigheten gör allt arbete: motsvarande sidor i likformiga trianglar förblir proportionella, och projektionssatsen är vad den proportionen ser ut som efter korsmultiplikation.",
            },
          ],
          "h2": "Varför fungerar projektionssatserna?",
          "image": {
            "alt": "Ursprunglig rätvinklig triangel ABC bredvid mindre likformiga trianglar ACD och CBD, som visar proportionerna p över a lika med a över c och q över b lika med b över c",
            "caption": "Bevis med likformiga trianglar: p över a är lika med a över c, och q över b är lika med b över c.",
            "src": "projection-similar-triangles.svg",
          },
        },
        "sec-properties": {
          "blocks": [
            {
              "kind": "p",
              "text": "Sex egenskaper följer direkt från projektionsformlerna. Var och en fungerar också som en rimlighetskontroll av ett nytt svar.",
            },
            {
              "items": [
                "Lika projektioner ger lika kateter. Med [[p = q = 5]] och [[c = 10]] är båda kateterna lika med [[\\sqrt{50} \\approx 7.071]], och triangeln är en likbent rätvinklig triangel.",
                "Olika projektioner ger olika kateter: den längre projektionen tillhör den längre kateten.",
                "Att byta plats på p och q byter de motsvarande katetlängderna men ändrar inte den totala hypotenusan, eftersom [[p + q = c]] i båda fallen.",
                "Att skala alla mått med samma positiva faktor skalar varje resultat med den faktorn. Att fördubbla p och q fördubblar c, a, b och h.",
                "Projektioner är alltid positiva och alltid mindre än c i en giltig icke-degenererad rätvinklig triangel. En projektion lika med c skulle lämna den andra projektionen vid noll.",
                "Den längre kateten kastar alltid den längre projektionen. Att jämföra katetlängder med projektionslängder är ett snabbt sätt att upptäcka en ombytt etikett.",
              ],
              "kind": "list",
            },
            {
              "kind": "p",
              "text": "Diagrammet nedan visar båda fallen med hypotenusan hållen vid 10. Lika projektioner delar den jämnt och ger lika kateter, medan olika projektioner ger kateter av olika längd.",
            },
          ],
          "h2": "Specialfall och viktiga projektionsegenskaper",
          "image": {
            "alt": "Två rätvinkliga trianglar med hypotenusa 10: en med lika projektioner p och q på 5 som ger lika kateter, och en med p lika med 2 och q lika med 8 som ger olika kateter",
            "caption": "Lika projektioner ger lika kateter; olika projektioner ger olika kateter, med samma hypotenusa på 10.",
            "src": "projection-equal-vs-unequal.svg",
          },
        },
        "sec-pythagoras": {
          "blocks": [
            {
              "kind": "p",
              "text": "Projektionssatsen och Pythagoras sats stämmer exakt överens, och algebran visar varför. Utgå från de två projektionsformlerna:",
            },
            {
              "kind": "p",
              "text": "[[[a^2 = c \\times p]]]",
            },
            {
              "kind": "p",
              "text": "Addera den matchande formeln för katet b, [[b^2 = c \\times q]], för att få:",
            },
            {
              "kind": "p",
              "text": "[[[a^2 + b^2 = c \\times p + c \\times q]]]",
            },
            {
              "kind": "p",
              "text": "Att bryta ut c ur högra ledet ger [[a^2 + b^2 = c(p + q)]]. Eftersom [[p + q = c]] ger insättning det välkända resultatet:",
            },
            {
              "kind": "p",
              "text": "[[[a^2 + b^2 = c^2]]]",
            },
            {
              "kind": "p",
              "text": "En numerisk kontroll med 9-16-25-triangeln bekräftar det: [[a^2 + b^2 = 225 + 400 = 625]] och [[c^2 = 25^2 = 625]]. De två satserna är inte rivaler. Projektionssatsen delar upp Pythagoras samband i en del per katet, och att addera delarna återskapar det. Därför kan varje resultat på den här sidan kontrolleras med Pythagoras sats.",
            },
          ],
          "h2": "Sambandet mellan projektioner och Pythagoras sats",
        },
        "sec-sides-segments": {
          "blocks": [
            {
              "kind": "p",
              "text": "En triangel har sex namngivna delar, och var och en har en fast position. Tabellen nedan listar varje del med dess symbol, dess betydelse och var den sitter. Lär dig tabellen en gång, så blir varje formel i den här guiden lätt att läsa.",
            },
            {
              "kind": "p",
              "text": "Att identifiera rätt segment spelar roll eftersom varje kalkylatorläge förväntar sig specifika indata. Om du skriver in en projektion där en katet hör hemma, eller skriver in p där q hör hemma, får du ändå ett tal, men det besvarar en annan fråga än den du ställde. Märk ut diagrammet först och matcha sedan etiketterna mot läget.",
            },
          ],
          "h2": "Förstå sidorna och segmenten i en rätvinklig triangel",
          "table": {
            "headers": [
              "Symbol",
              "Namn",
              "Position",
            ],
            "rows": [
              [
                "a",
                "Katet a (sidan AC)",
                "Vinkelrät sida som rör vid hörn A",
              ],
              [
                "b",
                "Katet b (sidan BC)",
                "Vinkelrät sida som rör vid hörn B",
              ],
              [
                "c",
                "Hypotenusa (sidan AB)",
                "Längsta sidan, mittemot den räta vinkeln",
              ],
              [
                "p",
                "Projektion p (segment AD)",
                "Del av hypotenusan intill hörn A",
              ],
              [
                "q",
                "Projektion q (segment DB)",
                "Del av hypotenusan intill hörn B",
              ],
              [
                "h",
                "Höjd (segment CD)",
                "Vinkelrät linje från C till hypotenusan",
              ],
            ],
          },
        },
        "sec-verify": {
          "blocks": [
            {
              "kind": "p",
              "text": "Fyra oberoende kontroller fångar nästan varje fel. Kör minst en av dem på varje svar, och kör alla fyra när uppgiften spelar roll. Varje kontroll använder ett annat samband, så ett fel som slinker igenom en kontroll fångas oftast av en annan.",
            },
            {
              "kind": "h3",
              "text": "Kontroll 1: Projektionsaddition",
            },
            {
              "kind": "p",
              "text": "Bekräfta att [[p + q = c]]. Med [[p = 9]] cm, [[q = 16]] cm och [[c = 25]] cm blir [[9 + 16 = 25]], så segmenten passar. Om summan skiljer sig från c är en av projektionerna fel.",
            },
            {
              "kind": "h3",
              "text": "Kontroll 2: Projektionssatsen för katet A",
            },
            {
              "kind": "p",
              "text": "Kvadrera katet a och jämför med [[c \\times p]]. Med [[a = 15]] cm, [[c = 25]] cm och [[p = 9]] cm blir [[a^2 = 225]] och [[c \\times p = 225]], så svaret klarar kontrollen. Om de två talen skiljer sig är kateten eller projektionen fel.",
            },
            {
              "kind": "h3",
              "text": "Kontroll 3: Projektionssatsen för katet B",
            },
            {
              "kind": "p",
              "text": "Kvadrera katet b och jämför med [[c \\times q]]. Med [[b = 20]] cm, [[c = 25]] cm och [[q = 16]] cm blir [[b^2 = 400]] och [[c \\times q = 400]], så svaret klarar kontrollen. Använd den här kontrollen när ditt svar är en katet.",
            },
            {
              "kind": "h3",
              "text": "Kontroll 4: Pythagoras sats",
            },
            {
              "kind": "p",
              "text": "Bekräfta att [[a^2 + b^2 = c^2]]. Med [[a = 15]] cm, [[b = 20]] cm och [[c = 25]] cm blir [[225 + 400 = 625 = 25^2]]. Den här kontrollen testar hela triangeln på en gång, inte bara en formel, så den är den starkaste av de fyra.",
            },
          ],
          "h2": "Så kontrollerar du dina projektionsberäkningar",
        },
        "sec-what-projections": {
          "blocks": [
            {
              "kind": "p",
              "text": "Ta den rätvinkliga triangeln ABC, med den räta vinkeln vid C. De två sidor som bildar den räta vinkeln är kateterna, AC och BC. Sidan mittemot den räta vinkeln är hypotenusan, AB. Rita nu höjden från C rakt till hypotenusan, där den möter den i en punkt som kallas D. Den höjden är vinkelrät mot hypotenusan, så den möter AB i en rät vinkel.",
            },
            {
              "kind": "p",
              "text": "Punkt D delar hypotenusan i två intilliggande segment. Segmentet intill hörn A, som kallas AD, är projektion p. Segmentet intill hörn B, som kallas DB, är projektion q. Tillsammans utgör de hela hypotenusan:",
            },
            {
              "kind": "p",
              "text": "[[[p + q = c]]]",
            },
            {
              "kind": "p",
              "text": "Varje projektion tillhör den katet som rör vid dess hörn. Katet a rör vid hörn A, så dess projektion är p. Katet b rör vid hörn B, så dess projektion är q. Denna koppling ändras aldrig: a hör ihop med p, och b hör ihop med q.",
            },
            {
              "kind": "p",
              "text": "Projektioner ligger plant längs hypotenusan. De är inte sidor i triangeln, och de är inte vinkelräta mot någonting. Se varje projektion som den skugga som dess katet kastar på hypotenusan när höjden faller rakt ner till den.",
            },
          ],
          "h2": "Vad är projektioner i en rätvinklig triangel?",
        },
      },
      "tocHeading": "Guideinnehåll",
      "tocItems": {
        "sec-all-measurements": "Så beräknar du alla huvudmått i en rätvinklig triangel",
        "sec-altitude": "Sambandet mellan projektioner och höjd",
        "sec-applications": "Praktiska tillämpningar av projektionssamband i rätvinkliga trianglar",
        "sec-calculate": "Beräkna projektioner och hypotenussegment i rätvinklig triangel",
        "sec-choose-mode": "Så väljer du rätt kalkylatorläge",
        "sec-diagram": "Förstå diagrammet över projektion i rätvinklig triangel",
        "sec-examples": "Genomräknade exempel med alla fem kalkylatorlägen",
        "sec-faq": "Vanliga frågor",
        "sec-formulas": "Formler för projektion i rätvinklig triangel förklarade",
        "sec-how-to-use": "Så använder du kalkylatorn för projektion i rätvinklig triangel",
        "sec-hypotenuse": "Så beräknar du hela hypotenusan från projektioner",
        "sec-intro": "Kalkylator för projektion i rätvinklig triangel",
        "sec-leg-a": "Så hittar du katet A från projektion P",
        "sec-leg-b": "Så hittar du katet B från projektion Q",
        "sec-mistakes": "Vanliga misstag vid användning av en kalkylator för projektion i rätvinklig triangel",
        "sec-practice": "Övningsuppgifter med svar",
        "sec-projection-p": "Så beräknar du projektion P från katet A och hypotenusan",
        "sec-projection-q": "Så beräknar du projektion Q från katet B och hypotenusan",
        "sec-proof": "Varför fungerar projektionssatserna?",
        "sec-properties": "Specialfall och viktiga projektionsegenskaper",
        "sec-pythagoras": "Sambandet mellan projektioner och Pythagoras sats",
        "sec-related": "Utforska relaterade kalkylatorer för rätvinkliga trianglar",
        "sec-sides-segments": "Förstå sidorna och segmenten i en rätvinklig triangel",
        "sec-verify": "Så kontrollerar du dina projektionsberäkningar",
        "sec-what-projections": "Vad är projektioner i en rätvinklig triangel?",
      },
    },
};
