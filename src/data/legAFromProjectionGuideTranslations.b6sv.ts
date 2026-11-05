// legAFromProjectionGuideTranslations.bsv.ts: Right Triangle Leg A From Projection
// Guide (Page 31 of 45) translation.
export const LAP_B6_SV = {
  "sv": {
      "faqHeading": "Vanliga frågor",
      "faqs": [
        {
          "answer": "Formeln är [[a = \\sqrt{c \\times p}]], där c är hela hypotenusan och p är den projektion som hör till katet a. Till exempel ger [[c = 10]] cm och [[p = 3.6]] cm att [[a = 6]] cm.",
          "question": "Vad är formeln för att hitta katet a utifrån projektion p?",
        },
        {
          "answer": "Multiplikationen kommer från likformiga trianglar. Triangel ACD är likformig med triangel ABC, vilket ger [[p / a = a / c]], och korsmultiplikation ger [[a^2 = c \\times p]]. Produkten är kvadraten på kateten, inte kateten själv.",
          "question": "Varför multiplicerar vi c och p?",
        },
        {
          "answer": "Eftersom produkten cp är lika med a i kvadrat, inte a. Kvadratroten upphäver kvadreringen och ger tillbaka en vanlig längd. Utan den skulle du rapportera 36 i stället för 6 i exemplet med c = 10 och p = 3,6.",
          "question": "Varför behövs en kvadratrot?",
        },
        {
          "answer": "Projektion p är den del av hypotenusan som ligger intill hörn A och som skapas när höjden från den räta vinkeln möter hypotenusan. I triangel ABC med höjden CD är [[p = AD]], och den ligger längs hypotenusan.",
          "question": "Vad representerar projektion p?",
        },
        {
          "answer": "Nej. Katet a är sidan AC, en av de sidor som bildar den räta vinkeln, medan projektion p är sträckan AD längs hypotenusan. De är olika längder på olika platser, och de hänger bara ihop genom [[a^2 = c \\times p]].",
          "question": "Är projektion p samma sak som katet a?",
        },
        {
          "answer": "Inte direkt. Projektion q hör ihop med katet b, så om du matar in q får du katet b i stället. För att hitta katet a utifrån q, återställ först p med [[p = c - q]] och använd sedan [[a = \\sqrt{c \\times p}]].",
          "question": "Kan jag använda projektion q för att hitta katet a?",
        },
        {
          "answer": "Dra bort den från hypotenusan: [[p = c - q]]. Med [[c = 25]] cm och [[q = 16]] cm blir [[p = 9]] cm, och sedan [[a = \\sqrt{25 \\times 9} = 15]] cm.",
          "question": "Vad gör jag om jag bara känner till projektion q?",
        },
        {
          "answer": "Nej. Projektion p är bara en del av hypotenusan, så den måste vara mindre än c. Om p vore lika med c skulle q vara noll och triangeln vara degenererad i stället för en äkta rätvinklig triangel.",
          "question": "Kan projektion p vara lika med hypotenusan?",
        },
        {
          "answer": "Kvadrera svaret och kontrollera att det är lika med [[c \\times p]]. Du kan också hitta katet b utifrån q och kontrollera [[a^2 + b^2 = c^2]], samt bekräfta att p är mindre än c och att katet a är kortare än hypotenusan.",
          "question": "Hur kontrollerar jag den beräknade kateten?",
        },
        {
          "answer": "Höjden landar mitt på hypotenusan, och de två kateterna är lika, så triangeln är en likbent rätvinklig triangel. Med [[c = 20]] cm och [[p = q = 10]] cm är båda kateterna [[10\\sqrt{2}]] cm, ungefär 14,142 cm.",
          "question": "Vad händer när p och q är lika?",
        },
        {
          "answer": "Ja, med spegelbildsformeln [[b = \\sqrt{c \\times q}]]. Katet b hör ihop med projektion q, precis som katet a hör ihop med p. <a href=\"/right-triangle-leg-b-from-projection-calculator/\">Kalkylatorn för katet b från projektion</a> är byggd för den beräkningen.",
          "question": "Kan jag hitta katet b med samma sats?",
        },
        {
          "answer": "Ja. Om man adderar de två projektionsformlerna får man [[a^2 + b^2 = c \\times p + c \\times q = c(p + q) = c^2]], eftersom [[p + q = c]]. Projektionssatsen delar upp Pythagoras samband i en del per katet.",
          "question": "Hänger projektionssatsen ihop med Pythagoras sats?",
        },
      ],
      "relatedHeading": "Utforska relaterade kalkylatorer för rätvinkliga trianglar",
      "relatedIntro": "Välj nästa verktyg utifrån de mått du redan känner till, eftersom varje kalkylator nedan hanterar en specifik uppgift för rätvinkliga trianglar.",
      "relatedItems": [
        "Kalkylator för projektion i rätvinklig triangel",
        "Kalkylator för projektion p i rätvinklig triangel",
        "Kalkylator för projektion q i rätvinklig triangel",
        "Kalkylator för katet b från projektion i rätvinklig triangel",
        "Kalkylator för hypotenusa från projektioner i rätvinklig triangel",
        "Kalkylator för höjd från projektioner i rätvinklig triangel",
        "Kalkylator för sidor i rätvinklig triangel",
      ],
      "sections": {
        "sec-intro": {
          "blocks": [
            {
              "kind": "p",
              "text": "Den här kalkylatorn hittar katet a i en rätvinklig triangel när du känner till hela hypotenusan c och den projektion p som hör till katet a. Du matar in de två längderna, och den ger tillbaka den verkliga sidlängden för katet a, inte ett kvadrerat värde och inte en projektionssträcka. Formeln är [[a = \\sqrt{c \\times p}]], där c är hela hypotenusan och p är den del av hypotenusan som ligger intill katet a.",
            },
            {
              "kind": "p",
              "text": "Om till exempel [[c = 10]] cm och [[p = 3.6]] cm, så blir [[a = \\sqrt{10 \\times 3.6} = \\sqrt{36} = 6]] cm. Produkten 36 är bara ett mellansteg. Kvadratroten förvandlar den tillbaka till en längd, och den längden är den sida du letar efter.",
            },
            {
              "kind": "p",
              "text": "Kalkylatorn finns högst upp på den här sidan, följd av formeln, ett diagram med beteckningar, ett bevis för projektionssatsen, genomräknade exempel och kontroller som du kan köra på vilket svar som helst. Guiden passar elever i grundskolan och gymnasiet, lärare, handledare och föräldrar som hjälper till med geometriläxor.",
            },
          ],
          "h2": "Kalkylator för katet a från projektion i rätvinklig triangel",
        },
        "sec-calculate": {
          "blocks": [
            {
              "kind": "p",
              "text": "Kalkylatorn har två inmatningsfält. Det första tar hypotenusan c, hela den sida som ligger mitt emot den räta vinkeln. Det andra tar projektionen p, den del av hypotenusan som hör till katet a. Båda längderna måste använda samma enhet, så räkna om först om det ena måttet är i centimeter och det andra i meter.",
            },
            {
              "kind": "p",
              "text": "Projektion p måste vara mindre än c. Den regeln ligger inbyggd i geometrin: p är bara en del av hypotenusan, så den kan aldrig vara lika med eller större än hela sidan. Om ditt p-värde är större än c har du förmodligen matat in en katet, höjden eller fel projektion.",
            },
            {
              "kind": "p",
              "text": "Klicka på Beräkna katet a för att se resultatet, och använd Återställ för att tömma båda fälten inför ett nytt problem. Resultatet är en längd i den enhet du matade in, så en hypotenusa på 10 cm och en projektion på 3,6 cm ger 6 cm, utan något extra omvandlingssteg.",
            },
          ],
          "h2": "Beräkna katet a från projektion i rätvinklig triangel",
        },
        "sec-what-leg-a": {
          "blocks": [
            {
              "kind": "p",
              "text": "En rätvinklig triangel har två vinkelräta sidor, som kallas kateter, och en längsta sida, som kallas hypotenusa. De två kateterna möts i den räta vinkeln, och hypotenusan ligger mitt emot den vinkeln. I den här guiden är triangeln ABC med den räta vinkeln vid C, katet a är sidan AC, katet b är sidan BC och hypotenusan c är sidan AB.",
            },
            {
              "kind": "p",
              "text": "Katet a är en av de två sidor som bildar den räta vinkeln, så den är en äkta sida i triangeln. Den är inte en sträcka som dragits inuti triangeln, och den är inte projektionen p. Projektionen p ligger plant längs hypotenusan, medan katet a går från hörn A till den räta vinkelns hörn C. Att hålla isär de två rollerna är det första steget för att använda formeln rätt.",
            },
            {
              "kind": "p",
              "text": "Katet a skiljer sig från katet b bara genom sin position: katet a rör vid hörn A, och katet b rör vid hörn B. Varje katet har sin egen projektion, och det är därför formeln för a använder p medan formeln för b använder q, en parning som är fastställd av beteckningarna.",
            },
            {
              "kind": "p",
              "text": "I varje icke-degenererad rätvinklig triangel är katet a kortare än hypotenusan. Det ger en snabb rimlighetskontroll på varje svar: om din beräknade katet a blir längre än c har något gått fel i inmatningen eller i räkningen, och diagrammets beteckningar är det första stället att titta på.",
            },
          ],
          "h2": "Vad är katet a i en rätvinklig triangel?",
        },
        "sec-what-projection-p": {
          "blocks": [
            {
              "kind": "p",
              "text": "Dra höjden från den räta vinkelns hörn C vinkelrätt mot hypotenusan AB. Den möter hypotenusan i en punkt som kallas fotpunkten och som betecknas D. Den punkten delar hypotenusan i två angränsande sträckor, och de sträckorna är projektionerna. Sträckan AD är projektion p, och sträckan DB är projektion q.",
            },
            {
              "kind": "p",
              "text": "Projektion p hör till katet a eftersom den ligger intill hörn A, samma hörn där katet a börjar. I den lilla triangeln ACD är katet a hypotenusan och p är en av dess kateter, och det är den geometriska kopplingen som får projektionssatsen att fungera. Projektion q hör, av samma skäl, till katet b, som rör vid hörn B.",
            },
            {
              "kind": "p",
              "text": "Projektioner är längder längs hypotenusan, mätta i samma enhet som de andra sidorna. De är inte vinkelräta mot något, och de är inte sidor i den ursprungliga triangeln. En projektion kan bäst föreställas som den skugga en katet kastar på hypotenusan när höjden faller rakt ner mot den.",
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
              "text": "Den additionen är användbar i sig själv. Om du känner till c och den ena projektionen kan du hitta den andra genom subtraktion, ett steg som avsnittet om den andra projektionen längre fram går igenom i sin helhet.",
            },
          ],
          "h2": "Vad är projektion p i en rätvinklig triangel?",
        },
        "sec-formula": {
          "blocks": [
            {
              "kind": "p",
              "text": "Projektionssatsen säger att kvadraten på katet a är lika med hypotenusan multiplicerad med dess projektion:",
            },
            {
              "kind": "p",
              "text": "[[[a^2 = c \\times p]]]",
            },
            {
              "kind": "p",
              "text": "Om man tar den positiva kvadratroten ur båda leden får man den arbetsformel som gäller för den här sidan:",
            },
            {
              "kind": "p",
              "text": "[[[a = \\sqrt{c \\times p}]]]",
            },
            {
              "kind": "p",
              "text": "Beräkningen går i två tydliga steg. Steg 1 multiplicerar hypotenusan med projektionen, och resultatet är en kvadrerad längd, inte en sida. Steg 2 tar den positiva kvadratroten, som omvandlar den kvadrerade längden tillbaka till en vanlig längd. Att hoppa över steg 2 är det enskilt vanligaste felet med den här formeln, och nästa avsnitt förklarar varför kvadratroten inte kan utelämnas.",
            },
            {
              "kind": "p",
              "text": "Enheter kräver omsorg i båda stegen. Om c och p båda är i centimeter blir deras produkt i kvadratcentimeter, och kvadratroten ger tillbaka centimeter. Att blanda enheter, till exempel meter för c och centimeter för p, ger en meningslös produkt, så räkna om till en enhet innan du multiplicerar. Den positiva roten används eftersom en sidlängd alltid är positiv.",
            },
            {
              "kind": "p",
              "text": "Ett litet räkneexempel visar båda stegen i arbete. Med [[c = 10]] cm och [[p = 3.6]] cm ger steg 1 [[10 \\times 3.6 = 36]], och steg 2 ger [[a = \\sqrt{36} = 6]] cm. Talet 36 svarar inte på någon fråga i sig själv. Först efter kvadratroten blir det katetens längd.",
            },
          ],
          "h2": "Formel för katet a från projektion i rätvinklig triangel",
          "image": {
            "alt": "Rätvinklig triangel ABC med höjden CD, som visar att katet a i kvadrat är lika med hypotenusan c multiplicerad med projektion p",
            "caption": "Projektionssatsen: a i kvadrat är lika med c gånger p, så a är lika med kvadratroten ur c gånger p.",
            "src": "leg-a-projection-theorem.svg",
          },
        },
        "sec-why-sqrt": {
          "blocks": [
            {
              "kind": "p",
              "text": "Kvadratroten finns där eftersom multiplikationen ger en kvadrerad storhet. Satsen säger inte att katet a är lika med produkten av c och p. Den säger att kvadraten på katet a är lika med den produkten. Att upphäva en kvadrering kräver en kvadratrot, precis som att upphäva en fördubbling kräver halvering.",
            },
            {
              "kind": "p",
              "text": "Ta [[c = 10]] och [[p = 3.6]]. Deras produkt är 36, vilket är [[a^2]], kvadraten på kateten. Kateten själv är det tal som multiplicerat med sig självt ger 36, alltså 6. Att skriva [[a = 36]] skulle påstå en sida på 36 enheter i en triangel vars hypotenusa bara är 10, vilket uppenbart är omöjligt.",
            },
            {
              "kind": "p",
              "text": "Tabellen nedan håller isär de tre storheterna, eftersom förväxling av dem orsakar de flesta misstagen med den här formeln.",
            },
          ],
          "h2": "Varför finns det en kvadratrot i formeln?",
          "table": {
            "headers": [
              "Storhet",
              "Betydelse",
              "Exempel med c = 10, p = 3,6",
            ],
            "rows": [
              [
                "a",
                "Själva katetens längd",
                "6",
              ],
              [
                "a i kvadrat",
                "Katetens längd multiplicerad med sig själv",
                "36",
              ],
              [
                "c gånger p",
                "Produkten som satsen likställer med a i kvadrat",
                "36",
              ],
              [
                "Kvadratroten ur cp",
                "Steget som återställer a utifrån a i kvadrat",
                "6",
              ],
            ],
          },
        },
        "sec-how": {
          "blocks": [
            {
              "kind": "p",
              "text": "Tio korta steg tar dig från ett diagram med beteckningar till ett kontrollerat svar.",
            },
            {
              "kind": "steps",
              "steps": [
                "Identifiera den rätvinkliga triangeln i ditt problem och bekräfta att den har en rät vinkel.",
                "Hitta höjden från den räta vinkeln och markera var den möter hypotenusan.",
                "Identifiera hela hypotenusan c, den sida som ligger mitt emot den räta vinkeln.",
                "Identifiera projektion p, den del av hypotenusan som ligger intill hörn A, där katet a börjar.",
                "Kontrollera att p är mindre än c. Om den inte är det, sätt nya beteckningar på diagrammet innan du fortsätter.",
                "Räkna om c och p till samma enhet om de angavs i olika enheter.",
                "Mata in c i fältet Hypotenusa c.",
                "Mata in p i fältet Projektion p. Mata inte in q här, eftersom det i stället skulle ge katet b.",
                "Klicka på Beräkna katet a och läs av resultatet.",
                "Använd Återställ innan du börjar ett nytt problem.",
              ],
            },
            {
              "kind": "p",
              "text": "Kalkylatorn tar inte emot q, så ett problem som bara ger q behöver ett extra subtraktionssteg, som behandlas nedan. Att mata in q i p-fältet ger ändå ett tal, men det blir fel katet, så beteckningskontrollen i steg 4 är viktigast.",
            },
          ],
          "h2": "Så använder du kalkylatorn för katet a i rätvinklig triangel",
        },
        "sec-step-example": {
          "blocks": [
            {
              "kind": "p",
              "text": "Använd [[c = 10]] cm och [[p = 3.6]] cm. De fyra stegen nedan visar hela uträkningen, utan att något hoppas över.",
            },
            {
              "kind": "steps",
              "steps": [
                "Skriv formeln: a = √(cp).",
                "Sätt in värdena: a = √(10 x 3,6).",
                "Multiplicera under rottecknet: a = √(36).",
                "Ta kvadratroten: a = 6 cm.",
              ],
            },
            {
              "kind": "p",
              "text": "Svaret 6 cm är den verkliga vinkelräta sidan AC, inte en projektion och inte en area. En kort kontroll sluter cirkeln: [[a^2 = 6^2 = 36]] och [[c \\times p = 10 \\times 3.6 = 36]], så båda leden i satsen stämmer överens.",
            },
            {
              "kind": "p",
              "text": "Som referens är den andra projektionen [[q = 10 - 3.6 = 6.4]] cm, katet b är [[b = \\sqrt{10 \\times 6.4} = 8]] cm, och höjden är [[h = \\sqrt{3.6 \\times 6.4} = 4.8]] cm, vilket bekräftar den välkända 6-8-10-triangeln.",
            },
          ],
          "h2": "Steg-för-steg-exempel på att hitta katet a",
          "image": {
            "alt": "Rätvinklig triangel med hypotenusan 10 cm och projektionen 3,6 cm, uträknad till att katet a är lika med 6 cm",
            "caption": "Genomräknat exempel: c = 10 cm och p = 3,6 cm ger a = √(36) = 6 cm.",
            "src": "leg-a-example-c10-p36.svg",
          },
        },
        "sec-diagram": {
          "blocks": [
            {
              "kind": "p",
              "text": "Huvuddiagrammet visar triangel ABC med den räta vinkeln vid C. Sidan AC är katet a, sidan BC är katet b, och sidan AB är hypotenusan c. Höjden CD faller från C vinkelrätt mot AB och rör vid den i D, och markeringen för rät vinkel vid D bekräftar att CD verkligen är vinkelrät.",
            },
            {
              "kind": "p",
              "text": "Punkt D delar hypotenusan i två delar: sträckan AD är projektion p och sträckan DB är projektion q. Katet a och projektion p är markerade eftersom de är det par som den här sidan handlar om. Följ diagrammet i den här ordningen för att fästa beteckningarna: börja vid A, gå längs katet a till C, sedan längs katet b till B, och sedan tillbaka längs hypotenusan från B till A, med en paus vid D för att se uppdelningen i q och p.",
            },
            {
              "kind": "p",
              "text": "Parningen av a med p blir synlig i den lilla triangeln ACD, där katet a är hypotenusan och p är den sida som ligger längs den stora hypotenusan. Eftersom triangel ACD är likformig med triangel ABC är förhållandet mellan p och a i den lilla triangeln lika med förhållandet mellan a och c i den stora, vilket bevisavsnittet förvandlar till [[a^2 = cp]].",
            },
          ],
          "h2": "Diagram för katet a från projektion i rätvinklig triangel, förklarat",
          "image": {
            "alt": "Rätvinklig triangel ABC med rät vinkel vid C, höjden CD mot hypotenusan AB, katet a och projektion p markerade, med kateterna a och b, hypotenusan c, projektionerna p och q samt höjden h betecknade",
            "caption": "Huvudtriangel ABC: höjden CD delar hypotenusan AB i projektion p (AD) och projektion q (DB), med katet a (AC) markerad.",
            "src": "leg-a-main-triangle.svg",
          },
        },
        "sec-proof": {
          "blocks": [
            {
              "kind": "p",
              "text": "Beviset vilar på likformiga trianglar. Att dra höjden CD delar triangel ABC i två mindre rätvinkliga trianglar, ACD och CBD, och båda är likformiga med den ursprungliga triangeln. Likformighet betyder att deras motsvarande sidor håller samma förhållande, och ett av de förhållandena ger projektionssatsen direkt.",
            },
            {
              "kind": "p",
              "text": "Fokusera på triangel ACD och hela triangeln ABC. Båda innehåller vinkeln vid A, och båda innehåller en rät vinkel, så deras tredje vinklar måste också stämma överens. Att matcha de sidor som sitter på samma platser ger proportionen:",
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
              "text": "Korsmultiplikation tar bort bråken. Den vänstra täljaren gånger den högra nämnaren är lika med den högra täljaren gånger den vänstra nämnaren, så [[p \\times c = a \\times a]], vilket är:",
            },
            {
              "kind": "p",
              "text": "[[[a^2 = c \\times p]]]",
            },
            {
              "kind": "p",
              "text": "Att ta den positiva kvadratroten ur båda leden avslutar beviset och ger [[a = \\sqrt{c \\times p}]]. Samma resonemang tillämpat på den andra lilla triangeln, CBD, ger [[b^2 = c \\times q]]. Likformigheten gör hela arbetet: motsvarande sidor i likformiga trianglar förblir proportionella.",
            },
          ],
          "h2": "Varför fungerar projektionssatsen?",
          "image": {
            "alt": "Ursprunglig rätvinklig triangel ABC bredvid de mindre likformiga trianglarna ACD och CBD, som visar proportionen p genom a lika med a genom c",
            "caption": "Bevis med likformiga trianglar: p genom a är lika med a genom c, så korsmultiplikation ger a i kvadrat lika med c gånger p.",
            "src": "leg-a-similar-triangles.svg",
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
              "text": "Givet [[c = 10]] cm och [[p = 4]] cm ger formeln [[a = \\sqrt{10 \\times 4} = \\sqrt{40}]], så [[a \\approx 6.325]] cm. Produkten 40 är inte en perfekt kvadrat, så svaret stannar som en approximation avrundad till tre decimaler. Lägg märke till att 6,325 cm är kortare än hypotenusan på 10 cm, vilket det måste vara.",
            },
            {
              "kind": "h3",
              "text": "Exempel 2: Resultat som är en perfekt kvadrat",
            },
            {
              "kind": "p",
              "text": "Givet [[c = 10]] cm och [[p = 3.6]] cm är [[a = \\sqrt{10 \\times 3.6} = \\sqrt{36} = 6]] cm. När produkten är en perfekt kvadrat är svaret exakt, utan att avrundning behövs. Det är samma triangel som i steg-för-steg-exemplet, och dess andra katet är 8 cm.",
            },
            {
              "kind": "h3",
              "text": "Exempel 3: Större triangel",
            },
            {
              "kind": "p",
              "text": "Givet [[c = 25]] m och [[p = 9]] m är [[a = \\sqrt{25 \\times 9} = \\sqrt{225} = 15]] m. Större tal förändrar ingenting i metoden: multiplicera, och ta sedan roten. Den andra projektionen här är 16 m, som hör ihop med en katet på 20 m, vilket ger den klassiska 15-20-25-triangeln.",
            },
            {
              "kind": "h3",
              "text": "Exempel 4: Decimalmått",
            },
            {
              "kind": "p",
              "text": "Givet [[c = 12.5]] cm och [[p = 3.2]] cm är [[a = \\sqrt{12.5 \\times 3.2} = \\sqrt{40}]], så [[a \\approx 6.325]] cm. Det stämmer överens med exempel 1 i värde eftersom båda produkterna är 40, en nyttig påminnelse om att olika indata kan dela en produkt. Behåll hela produkten under rottecknet fram till det sista avrundningssteget.",
            },
            {
              "kind": "h3",
              "text": "Exempel 5: Lika projektioner på hypotenusan",
            },
            {
              "kind": "p",
              "text": "Givet [[c = 20]] cm och [[p = 10]] cm är [[a = \\sqrt{20 \\times 10} = \\sqrt{200} = 10\\sqrt{2}]] cm, så [[a \\approx 14.142]] cm. Lika projektioner betyder att höjden träffar hypotenusans mittpunkt, vilket händer exakt när de två kateterna är lika. Triangeln är därför en likbent rätvinklig triangel, och katet b är lika med katet a.",
            },
            {
              "kind": "h3",
              "text": "Exempel 6: Små mått",
            },
            {
              "kind": "p",
              "text": "Givet [[c = 8]] mm och [[p = 2]] mm är [[a = \\sqrt{8 \\times 2} = \\sqrt{16} = 4]] mm. Små enheter fungerar exakt som stora, och svaret stannar i millimeter eftersom båda indata var i millimeter. Att skala ner ett problem förändrar aldrig stegen.",
            },
            {
              "kind": "h3",
              "text": "Exempel 7: Olika enheter",
            },
            {
              "kind": "p",
              "text": "Givet [[c = 0.5]] m och [[p = 20]] cm, räkna om först: 0,5 m är lika med 50 cm. Sedan är [[a = \\sqrt{50 \\times 20} = \\sqrt{1000}]], så [[a \\approx 31.623]] cm. Att multiplicera 0,5 med 20 utan att räkna om skulle ha gett roten 10, ett felaktigt svar utan någon giltig enhet bakom sig.",
            },
            {
              "kind": "h3",
              "text": "Exempel 8: Bråkmått",
            },
            {
              "kind": "p",
              "text": "Givet [[c = 16]] ft och [[p = 4]] ft är [[a = \\sqrt{16 \\times 4} = \\sqrt{64} = 8]] ft. Produkten 64 är en perfekt kvadrat, så svaret är exakt. En snabb rimlighetskontroll klaras: 8 ft är halva hypotenusan, och den andra kateten blir ungefär 13,856 ft, vilket är längre än a men fortfarande kortare än 16 ft.",
            },
          ],
          "h2": "Genomräknade exempel på att hitta katet a från projektion",
        },
        "sec-other-projection": {
          "blocks": [
            {
              "kind": "p",
              "text": "Vissa problem ger q i stället för p. Kalkylatorn på den här sidan tar inte emot q, men det är bara en omväg på ett steg, inte en återvändsgränd. Eftersom de två projektionerna tillsammans blir hypotenusan, subtrahera först för att återställa p:",
            },
            {
              "kind": "p",
              "text": "[[[p = c - q]]]",
            },
            {
              "kind": "p",
              "text": "Ta [[c = 25]] cm och [[q = 16]] cm. Subtraktion ger [[p = 25 - 16 = 9]] cm. Nu gäller den vanliga formeln: [[a = \\sqrt{25 \\times 9} = \\sqrt{225} = 15]] cm. Om du hade matat in 16 direkt som p skulle kalkylatorn ha gett 20 cm, vilket är katet b, inte katet a.",
            },
            {
              "kind": "p",
              "text": "Kalkylatorn för <a href=\"/right-triangle-projection-q-calculator/\">projektion q</a> kan hjälpa när q själv behöver hittas, och <a href=\"/right-triangle-projection-p-calculator/\">kalkylatorn för projektion p</a> täcker det omvända steget. Hur som helst gäller samma regel: hitta p först, och använd sedan [[a = \\sqrt{c \\times p}]].",
            },
          ],
          "h2": "Så hittar du katet a när den andra projektionen är känd",
        },
        "sec-relationship": {
          "blocks": [
            {
              "kind": "p",
              "text": "En sats binder ihop tre storheter, så om man skriver om den hittar man vilken av dem som än saknas. De tre formerna är:",
            },
            {
              "kind": "p",
              "text": "[[[a = \\sqrt{c \\times p}]]]",
            },
            {
              "kind": "p",
              "text": "Tabellen nedan visar varje omskrivning, vad den hittar och vad som måste vara känt först.",
            },
          ],
          "h2": "Sambandet mellan katet a, hypotenusan och projektion p",
          "table": {
            "headers": [
              "Saknad storhet",
              "Formel",
              "Kända värden som behövs",
            ],
            "rows": [
              [
                "Katet a",
                "a = √(cp)",
                "Hypotenusan c och projektion p",
              ],
              [
                "Hypotenusan c",
                "c = a² / p",
                "Katet a och projektion p",
              ],
              [
                "Projektion p",
                "p = a² / c",
                "Katet a och hypotenusan c",
              ],
            ],
          },
        },
        "sec-leg-b": {
          "blocks": [
            {
              "kind": "p",
              "text": "Katet b följer spegelbilden av formeln för katet a. Där katet a hör ihop med projektion p, hör katet b ihop med projektion q:",
            },
            {
              "kind": "p",
              "text": "[[[b = \\sqrt{c \\times q}]]]",
            },
            {
              "kind": "p",
              "text": "Använd en konsekvent triangel för att se båda kateterna tillsammans: [[c = 25]], [[p = 9]] och [[q = 16]]. Då är [[a = \\sqrt{25 \\times 9} = 15]] och [[b = \\sqrt{25 \\times 16} = 20]]. De två kateterna delar samma hypotenusa men bygger på olika projektioner, och det är därför en korrekt identifiering av p och q avgör vilken katet du får.",
            },
            {
              "kind": "p",
              "text": "Kateterna begränsar också varandra genom Pythagoras sats, som behandlas två avsnitt längre fram: om man känner till en katet och hypotenusan bestäms den andra. För problem som utgår från q snarare än p kör <a href=\"/right-triangle-leg-b-from-projection-calculator/\">kalkylatorn för katet b från projektion</a> samma metod med den andra parningen.",
            },
          ],
          "h2": "Sambandet mellan katet a och katet b",
          "image": {
            "alt": "Rätvinklig triangel som jämför projektion p parad med katet a mot projektion q parad med katet b, med c lika med 25, p lika med 9 och q lika med 16",
            "caption": "Rätt parat: a använder p (√(25 x 9) = 15) och b använder q (√(25 x 16) = 20).",
            "src": "leg-a-p-vs-q.svg",
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
              "text": "Lägg till den matchande formeln för katet b, [[b^2 = c \\times q]], för att få:",
            },
            {
              "kind": "p",
              "text": "[[[a^2 + b^2 = c \\times p + c \\times q]]]",
            },
            {
              "kind": "p",
              "text": "Om man bryter ut c ur högra ledet får man [[a^2 + b^2 = c(p + q)]]. Eftersom [[p + q = c]] ger insättning det välkända resultatet:",
            },
            {
              "kind": "p",
              "text": "[[[a^2 + b^2 = c^2]]]",
            },
            {
              "kind": "p",
              "text": "En numerisk kontroll med 9-16-25-triangeln bekräftar det: [[a^2 + b^2 = 225 + 400 = 625]] och [[c^2 = 25^2 = 625]]. De två satserna är inte rivaler. Projektionssatsen delar upp Pythagoras samband i en del per katet, och om man adderar delarna byggs det upp igen.",
            },
          ],
          "h2": "Sambandet mellan projektion p och Pythagoras sats",
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
              "text": "Kvadrera ditt svar och jämför det med produkten av c och p. För [[c = 25]], [[p = 9]] och [[a = 15]]: [[a^2 = 225]] och [[c \\times p = 225]], så svaret klarar kontrollen. Om de två talen skiljer sig åt har antingen indata eller kvadratrotssteget blivit fel.",
            },
            {
              "kind": "h3",
              "text": "Metod 2: Kontroll med Pythagoras sats",
            },
            {
              "kind": "p",
              "text": "Hitta katet b utifrån q, och kontrollera sedan [[a^2 + b^2 = c^2]]. Med [[p = 9]], [[q = 16]] och [[c = 25]]: [[a = 15]], [[b = 20]] och [[225 + 400 = 625 = 25^2]]. Den här kontrollen går längre än kalkylatorn, eftersom den testar hela triangeln, inte bara den ena formeln.",
            },
            {
              "kind": "h3",
              "text": "Metod 3: Kontroller av storlek och addition",
            },
            {
              "kind": "p",
              "text": "Bekräfta att p är mindre än c, att [[p + q = c]] när q är känt, och att katet a är kortare än hypotenusan. I exemplet är 9 mindre än 25, [[9 + 16 = 25]], och 15 är kortare än 25. Varje misslyckande här pekar på ett beteckningsfel, inte på ett räknefel.",
            },
          ],
          "h2": "Så kontrollerar du den beräknade katet a",
        },
        "sec-properties": {
          "blocks": [
            {
              "kind": "p",
              "text": "Åtta egenskaper följer direkt från [[a = \\sqrt{c \\times p}]] och geometrin bakom den. Var och en fungerar också som en rimlighetskontroll på ett nytt svar.",
            },
            {
              "items": [
                "Katet a är alltid kortare än hypotenusan i en icke-degenererad rätvinklig triangel, eftersom p bara är en del av c.",
                "Projektion p är alltid mindre än c, och den är alltid positiv. Projektioner som är noll eller negativa beskriver ingen verklig triangel.",
                "Om p ökar medan c hålls fast ökar a, eftersom produkten under rottecknet växer.",
                "Om c ökar medan p hålls fast ökar a matematiskt, förutsatt att de nya värdena fortfarande beskriver en verklig triangel med p mindre än c.",
                "Att byta plats på p och q ändrar vilken katet som beräknas: p ger katet a och q ger katet b.",
                "Lika projektioner ger lika kateter. Med c = 20 och p = q = 10 är båda kateterna 10 gånger kvadratroten ur 2, ungefär 14,142.",
                "Resultatet är en längd, inte en area. Den kvadrerade produkten är bara ett mellansteg, och kvadratroten återställer vanliga längdenheter.",
                "Om alla mått skalas med samma faktor skalas katet a med den faktorn. Om c och p fördubblas fördubblas a, eftersom produkten fyrdubblas och dess rot fördubblas.",
              ],
              "kind": "list",
            },
            {
              "kind": "p",
              "text": "När höjden landar exakt mitt på hypotenusan är triangeln likbent, och de två kateterna måste stämma överens, vilket diagrammet nedan visar.",
            },
          ],
          "h2": "Viktiga egenskaper hos katet a från projektion",
          "image": {
            "alt": "Likbent rätvinklig triangel med hypotenusan 20, lika projektioner p och q på 10, och kateterna a och b vardera lika med 10 rot 2",
            "caption": "Lika projektioner: c = 20 med p = q = 10 ger a = b = 10 rot 2, ungefär 14,142.",
            "src": "leg-a-equal-projections.svg",
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
                "Att glömma kvadratroten: att rapportera cp som svar. Med c = 10 och p = 3,6 är svaret 6 cm, inte 36.",
                "Att förväxla a med a i kvadrat: 36 är a i kvadrat i det exemplet, medan 6 är kateten. Säg vilket av dem du menar innan du skriver ner ett tal.",
                "Att använda projektion q i stället för p: om du matar in q får du katet b. Med c = 25 och q = 16 är resultatet 20 katet b, inte katet a.",
                "Att mata in en katet i hypotenusafältet: hypotenusan är den sida som ligger mitt emot den räta vinkeln och den längsta sidan. En katet som matas in som c förvränger varje senare steg.",
                "Att förväxla hypotenusan med en projektion: c är hela sidan, medan p bara är en del av den. Kontrollera att p är mindre än c innan du beräknar.",
                "Att använda p större än eller lika med c: ingen sådan triangel finns, eftersom p är en del av c. Kontrollera diagrammets beteckningar igen om det händer.",
                "Att blanda centimeter och meter: räkna om först, som i exempel 7, där 0,5 m blev 50 cm innan det multiplicerades med 20 cm.",
                "Att använda negativa mått: längder är positiva, så en negativ inmatning signalerar ett datafel, inte en negativ katet.",
                "Att tillämpa formeln på en triangel som inte är rätvinklig: projektionssatsen behöver höjden från en rät vinkel. Utan en rät vinkel finns ingen projektion p i den här bemärkelsen.",
                "Att avrunda för tidigt: att avrunda produkten innan roten tas flyttar svaret. Behåll full precision fram till det sista steget.",
                "Att använda fel sidomotsvarighet i diagrammet: att para p med b, eller q med a, byter plats på kateterna. Matcha p med den katet som rör vid hörn A.",
                "Att behandla höjden som en projektion: höjden h är vinkelrät mot hypotenusan, inte en del av den, så den hör aldrig hemma i p-fältet.",
              ],
            },
            {
              "kind": "p",
              "text": "Om ett svar ser fel ut, stanna upp och sätt nya beteckningar på diagrammet innan du räknar om. De flesta felen ovan försvinner när p och q är tydligt markerade på hypotenusan och allt annat läggs åt sidan.",
            },
          ],
          "h2": "Vanliga misstag när man hittar katet a från projektion",
        },
        "sec-applications": {
          "blocks": [
            {
              "kind": "p",
              "text": "Den mest direkta användningen är geometriläxor och klassrumsarbete, där projektionsproblem testar om eleverna kan sätta beteckningar på ett diagram och tillämpa [[a^2 = c \\times p]] i stället för att av vana gripa efter Pythagoras sats. Övningar i likformighet använder samma upplägg, eftersom beviset i sig är en övning i att matcha motsvarande sidor.",
            },
            {
              "kind": "p",
              "text": "Teknisk ritning använder satsen när en rätvinklig triangel måste rekonstrueras utifrån partiella mått: om en ritning ger hypotenusan och höjdens fotpunkt följer den saknade kateten utan att formen behöver mätas om. Lärare använder också upplägget som en brygglektion mellan sträckaddition och likformighet.",
            },
            {
              "kind": "p",
              "text": "Ett villkor begränsar varje tillämpning: den nödvändiga rätvinkliga geometrin måste faktiskt finnas. Satsen beskriver exakta geometriska samband, inte ungefärliga fältmätningar, så den ersätter aldrig noggrann mätning i fält eller professionell ingenjörsmätning. Inom sitt rätta sammanhang förvandlar den däremot två kända längder till en tredje med en enda multiplikation och en kvadratrot.",
            },
          ],
          "h2": "Praktiska tillämpningar av projektionssatsen",
        },
        "sec-practice": {
          "blocks": [
            {
              "kind": "p",
              "text": "Prova alla sex problemen på papper innan du läser svaren. Inget av värdena upprepar de genomräknade exemplen, och det sista problemet kombinerar flera idéer från den här guiden.",
            },
            {
              "kind": "h3",
              "text": "Problem 1: Grundläggande heltal",
            },
            {
              "kind": "p",
              "text": "En rätvinklig triangel har hypotenusan [[c = 36]] cm och projektionen [[p = 4]] cm. Hitta katet a.",
            },
            {
              "kind": "h3",
              "text": "Problem 2: Decimalprojektion",
            },
            {
              "kind": "p",
              "text": "Givet [[c = 26]] cm och [[p = 6.5]] cm, hitta katet a.",
            },
            {
              "kind": "h3",
              "text": "Problem 3: Stor hypotenusa",
            },
            {
              "kind": "p",
              "text": "Givet [[c = 100]] cm och [[p = 64]] cm, hitta katet a.",
            },
            {
              "kind": "h3",
              "text": "Problem 4: Enhetsomvandling",
            },
            {
              "kind": "p",
              "text": "En hypotenusa mäter [[c = 1.2]] m och dess projektion p mäter 30 cm. Hitta katet a i centimeter.",
            },
            {
              "kind": "h3",
              "text": "Problem 5: Hitta p utifrån q och c först",
            },
            {
              "kind": "p",
              "text": "En rätvinklig triangel har hypotenusan [[c = 65]] cm och projektionen [[q = 49]] cm. Hitta katet a.",
            },
            {
              "kind": "h3",
              "text": "Problem 6: Flerstegsproblem med katet b och Pythagoras",
            },
            {
              "kind": "p",
              "text": "Givet [[c = 50]] cm och [[p = 18]] cm, hitta katet a, hitta sedan katet b och kontrollera resultatet med Pythagoras sats.",
            },
            {
              "kind": "h3",
              "text": "Svar på övningsproblemen",
            },
            {
              "kind": "p",
              "text": "Svar 1: [[a = \\sqrt{36 \\times 4} = \\sqrt{144} = 12]] cm.",
            },
            {
              "kind": "p",
              "text": "Svar 2: [[a = \\sqrt{26 \\times 6.5} = \\sqrt{169} = 13]] cm.",
            },
            {
              "kind": "p",
              "text": "Svar 3: [[a = \\sqrt{100 \\times 64} = \\sqrt{6400} = 80]] cm.",
            },
            {
              "kind": "p",
              "text": "Svar 4: Räkna om 1,2 m till 120 cm, och sedan [[a = \\sqrt{120 \\times 30} = \\sqrt{3600} = 60]] cm.",
            },
            {
              "kind": "p",
              "text": "Svar 5: Först [[p = 65 - 49 = 16]] cm, och sedan [[a = \\sqrt{65 \\times 16} = \\sqrt{1040} \\approx 32.249]] cm.",
            },
            {
              "kind": "p",
              "text": "Svar 6: [[a = \\sqrt{50 \\times 18} = \\sqrt{900} = 30]] cm. Den andra projektionen är [[q = 50 - 18 = 32]] cm, så [[b = \\sqrt{50 \\times 32} = \\sqrt{1600} = 40]] cm. Kontroll: [[30^2 + 40^2 = 900 + 1600 = 2500 = 50^2]].",
            },
          ],
          "h2": "Övningsproblem med svar",
        },
      },
      "tocHeading": "Guideinnehåll",
      "tocItems": {
        "sec-intro": "Kalkylator för katet a från projektion i rätvinklig triangel",
        "sec-calculate": "Beräkna katet a från projektion i rätvinklig triangel",
        "sec-what-leg-a": "Vad är katet a i en rätvinklig triangel?",
        "sec-what-projection-p": "Vad är projektion p i en rätvinklig triangel?",
        "sec-formula": "Formel för katet a från projektion i rätvinklig triangel",
        "sec-why-sqrt": "Varför finns det en kvadratrot i formeln?",
        "sec-how": "Så använder du kalkylatorn för katet a i rätvinklig triangel",
        "sec-step-example": "Steg-för-steg-exempel på att hitta katet a",
        "sec-diagram": "Diagram för katet a från projektion i rätvinklig triangel, förklarat",
        "sec-proof": "Varför fungerar projektionssatsen?",
        "sec-examples": "Genomräknade exempel på att hitta katet a från projektion",
        "sec-other-projection": "Så hittar du katet a när den andra projektionen är känd",
        "sec-relationship": "Sambandet mellan katet a, hypotenusan och projektion p",
        "sec-leg-b": "Sambandet mellan katet a och katet b",
        "sec-pythagoras": "Sambandet mellan projektion p och Pythagoras sats",
        "sec-verify": "Så kontrollerar du den beräknade katet a",
        "sec-properties": "Viktiga egenskaper hos katet a från projektion",
        "sec-mistakes": "Vanliga misstag när man hittar katet a från projektion",
        "sec-applications": "Praktiska tillämpningar av projektionssatsen",
        "sec-practice": "Övningsproblem med svar",
        "sec-related": "Utforska relaterade kalkylatorer för rätvinkliga trianglar",
        "sec-faq": "Vanliga frågor",
      },
    },
};
