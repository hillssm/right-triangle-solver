// hypotenuseFromProjectionsGuideTranslations.bsv.ts: Right Triangle Altitude From Projections
// Guide (Page 30 of 45) translation.
export const HFP_B6_SV = {
  "sv": {
      "tocHeading": "Innehåll i guiden",
      "tocItems": {
        "sec-altitude": "Hur hypotenusans projektioner förhåller sig till höjden",
        "sec-applications": "Praktiska tillämpningar av beräkningar med hypotenusans projektioner",
        "sec-calculate": "Beräkna hypotenusan från två projektioner",
        "sec-compare": "Hypotenusan från projektioner jämfört med hypotenusan från kateter",
        "sec-diagram": "Diagrammet över rätvinkliga triangelns hypotenusaprojektioner förklarat",
        "sec-examples": "Räkneexempel med hypotenusan från projektioner",
        "sec-faq": "Vanliga frågor",
        "sec-formula": "Formeln för rätvinkliga triangelns hypotenusa från projektioner",
        "sec-how": "Så här använder du kalkylatorn för hypotenusa från projektioner",
        "sec-intro": "Kalkylator för rätvinklig triangels hypotenusa från projektioner",
        "sec-legs": "Sambandet mellan hypotenusans projektioner och triangelns kateter",
        "sec-manual": "Så här beräknar du hypotenusan från projektioner manuellt",
        "sec-mistakes": "Vanliga misstag vid beräkning av hypotenusan från projektioner",
        "sec-practice": "Övningsuppgifter med svar",
        "sec-pythagoras": "Hypotenusans projektioner och Pythagoras sats",
        "sec-related": "Utforska relaterade kalkylatorer för rätvinkliga trianglar",
        "sec-special": "Specialfall och viktiga egenskaper",
        "sec-understanding": "Förstå hypotenusan och dess två segment",
        "sec-verify": "Så här kontrollerar du din hypotenusaberäkning",
        "sec-what": "Vad är hypotenusaprojektioner i en rätvinklig triangel?",
        "sec-why": "Varför är hypotenusan lika med summan av sina projektioner?",
      },
      "sections": {
        "sec-calculate": {
          "blocks": [
            {
              "kind": "p",
              "text": "De två inmatningsfälten tar emot projektionslängderna p och q, båda mätta längs hypotenusan. Enhetsväljare låter dig ange centimeter, meter, millimeter, fot eller tum, så länge p och q använder kompatibla enheter innan de adderas.",
            },
            {
              "kind": "p",
              "text": "[[[c = p + q]]]",
            },
            {
              "kind": "p",
              "text": "Tryck på Beräkna hypotenusa c för att se resultatet, och använd Återställ för att rensa fälten inför ett nytt problem. Endast positiva längder accepteras, eftersom en projektion är ett verkligt segment av hypotenusan, och ett värde på noll eller ett negativt värde inte kan beskriva ett sådant.",
            },
            {
              "kind": "p",
              "text": "Resultatet är hela hypotenusans längd c i den enhet du har valt. Räkningen är enkel addition, men avsnitten nedan förklarar vad segmenten betyder och hur du kontrollerar svaret för hand.",
            },
          ],
          "h2": "Beräkna hypotenusan från två projektioner",
        },
        "sec-formula": {
          "blocks": [
            {
              "kind": "p",
              "text": "Formeln är [[c = p + q]], där c är hela hypotenusan, p är det första projektionssegmentet och q är det andra. Den använder addition snarare än multiplikation eller kvadratrötter eftersom de två projektionerna är angränsande delar av en rak sida, och sträckaddition återuppbygger den sidan från dess delar. Tänk på att mäta två bitar av en bräda och lägga ihop måtten för att få brädans fulla längd.",
            },
            {
              "kind": "p",
              "text": "[[[c = p + q]]]",
            },
            {
              "kind": "p",
              "text": "En vanlig fråga är varför formeln inte tar medelvärdet av de två segmenten. Ett medelvärde skulle ge halva hypotenusan, vilket besvarar en annan fråga. Addition återuppbygger hela sidan; medelvärdet och det geometriska medelvärdet hör till andra formler som behandlas längre fram i guiden.",
            },
            {
              "kind": "p",
              "text": "Ta [[p = 7]] cm och [[q = 11]] cm. Insättning ger [[c = 7 + 11]], så [[c = 18]] cm. Själva formeln är enkel; det viktiga är att förstå vilka två segment som räknas som projektioner.",
            },
            {
              "kind": "p",
              "text": "Båda segmenten måste använda kompatibla enheter innan du adderar dem. Om p är i millimeter och q i centimeter, konvertera först ett av dem, precis som kalkylatorn på den här sidan uppmanar dig att göra.",
            },
          ],
          "h2": "Formeln för rätvinkliga triangelns hypotenusa från projektioner",
        },
        "sec-how": {
          "blocks": [
            {
              "kind": "p",
              "text": "Nio korta steg tar dig från ett märkt diagram till en verifierad hypotenusa.",
            },
            {
              "kind": "steps",
              "steps": [
                "Identifiera den rätvinkliga triangeln i ditt problem och bekräfta att den har en rät vinkel.",
                "Lokalisera hypotenusan: sidan mitt emot den räta vinkeln.",
                "Hitta punkten där höjden från den räta vinkeln möter hypotenusan.",
                "Identifiera de två projektionerna p och q som segmenten på vardera sidan av den punkten, med hjälp av guiden <a href=\"/right-triangle-projection-p-calculator/\">kalkylatorn för projektion p</a> för det första segmentet. <a href=\"/right-triangle-projection-q-calculator/\">kalkylatorn för projektion q</a> behandlar det andra segmentet på samma sätt.",
                "Konvertera båda måtten till kompatibla enheter vid behov.",
                "Skriv in p i fältet Projektion p och q i fältet Projektion q.",
                "Klicka på knappen Beräkna hypotenusa c.",
                "Läs av hypotenusaresultatet i den enhet du har valt.",
                "Använd Återställ innan du börjar ett nytt problem.",
              ],
            },
            {
              "kind": "p",
              "text": "Korrekt identifiering är viktigast. Fälten förväntar sig de två segmenten av själva hypotenusan, inte kateterna och inte höjden. Om du matar in fel par får du ändå en summa, men den blir inte hypotenusan.",
            },
          ],
          "h2": "Så här använder du kalkylatorn för hypotenusa från projektioner",
        },
        "sec-intro": {
          "blocks": [
            {
              "kind": "p",
              "text": "Denna kalkylator hittar en rätvinklig triangels hypotenusa genom att addera dess två projektionssegment.",
            },
            {
              "kind": "p",
              "text": "Projektionerna p och q är de två delarna av hypotenusan som bildas när höjden från den räta vinkeln möter den. Mata in båda längderna, så adderar kalkylatorn dem med formeln [[c = p + q]] för att ge hela hypotenusan. Till exempel, om [[p = 4]] cm och [[q = 9]] cm, så [[c = 4 + 9 = 13]] cm.",
            },
            {
              "kind": "p",
              "text": "Hypotenusan är den längsta sidan i den rätvinkliga triangeln och ligger mitt emot den räta vinkeln. Kalkylatorn visas först på den här sidan, följd av formeln, geometrin bakom den, räkneexempel och sätt att kontrollera ditt svar.",
            },
            {
              "kind": "p",
              "text": "Guiden passar mellanstadieelever som möter projektioner för första gången, gymnasieklasser i geometri och alla som kontrollerar läxor. Varje formel räknas igenom med verkliga tal, så du kan följa varje steg utan att stanna upp för att avkoda symboler.",
            },
          ],
          "h2": "Kalkylator för rätvinklig triangels hypotenusa från projektioner",
        },
        "sec-manual": {
          "blocks": [
            {
              "kind": "p",
              "text": "Manuell beräkning är en enda insättning i [[c = p + q]]. Ta [[p = 3.6]] cm och [[q = 6.4]] cm.",
            },
            {
              "kind": "p",
              "text": "[[[c = p + q]]]",
            },
            {
              "kind": "p",
              "text": "Sätt in värdena: [[c = 3.6 + 6.4]]. Addera dem: [[c = 10]] cm.",
            },
            {
              "kind": "p",
              "text": "Ställ decimaltecknen i linje när du adderar för hand: 3.6 plus 6.4 ger 10.0, och den sista nollan kan strykas för ett snyggt [[c = 10]] cm. Behåll enheten kopplad till svaret; ett naket tal är inte en fullständig längd.",
            },
            {
              "kind": "p",
              "text": "Ingen Pythagorasberäkning behövs, eftersom båda projektionslängderna redan är kända. För att dubbelkolla, bekräfta att summan verkar rimlig: 3.6 plus 6.4 är uppenbarligen 10, och hypotenusan måste vara längre än någon av projektionerna var för sig.",
            },
          ],
          "h2": "Så här beräknar du hypotenusan från projektioner manuellt",
        },
        "sec-understanding": {
          "blocks": [
            {
              "kind": "p",
              "text": "Hypotenusan är sidan mitt emot den räta vinkeln, och i varje äkta rätvinklig triangel är den den längsta sidan. När höjden från den rätvinkliga vinkeln faller vinkelrätt mot den delas hypotenusan i två kortare segment som ligger änd mot änd på samma raka linje.",
            },
            {
              "kind": "p",
              "text": "Eftersom båda segmenten ligger på den ena sidan beter de sig som två angränsande bitar av en linjal: lägger man dem tillsammans återuppbygger de hela sidan exakt, utan överlapp och utan glapp. Det är därför projektionerna alltid summerar till hypotenusan.",
            },
            {
              "kind": "p",
              "text": "Dessa beteckningar stämmer med huvuddiagrammet nedan. Hörn A och B är de spetsvinkliga hörnen, C är den rätvinkliga vinkeln, och D är fotpunkten för höjden CD på hypotenusan AB, med [[AD = p]] och [[DB = q]].",
            },
          ],
          "h2": "Förstå hypotenusan och dess två segment",
          "table": {
            "headers": [
              "Symbol",
              "Betydelse",
            ],
            "rows": [
              [
                "a",
                "Första vinkelräta kateten",
              ],
              [
                "b",
                "Andra vinkelräta kateten",
              ],
              [
                "c",
                "Hela hypotenusan",
              ],
              [
                "p",
                "Första hypotenusaprojektionen",
              ],
              [
                "q",
                "Andra hypotenusaprojektionen",
              ],
              [
                "h",
                "Höjden mot hypotenusan",
              ],
            ],
          },
        },
        "sec-what": {
          "blocks": [
            {
              "kind": "p",
              "text": "Börja med en rätvinklig triangel och dra höjden från den rätvinkliga vinkeln vinkelrätt mot hypotenusan. Höjden träffar hypotenusan i en punkt, kallad fotpunkten, och den punkten delar hypotenusan i två angränsande segment. Dessa två segment är hypotenusaprojektionerna: [[p = AD]] och [[q = DB]] när triangeln är ABC med den räta vinkeln vid C och höjden CD. <a href=\"/right-triangle-projection-calculator/\">Projektionskalkylatorn</a> behandlar varje segment separat.",
            },
            {
              "kind": "p",
              "text": "En projektion är inte en katet. Kateterna a och b är de två sidor som bildar den räta vinkeln, medan projektionerna p och q ligger platt längs själva hypotenusan. Att blanda ihop dem är det vanligaste märkningsfelet, så fråga alltid: ligger denna längd på hypotenusan, eller är det en av sidorna runt den räta vinkeln?",
            },
            {
              "kind": "p",
              "text": "Här är ett nybörjarvänligt exempel. Om höjden delar en hypotenusa i ett segment på 4 cm och ett segment på 9 cm, så är [[p = 4]] cm och [[q = 9]] cm, och hela hypotenusan är [[c = 4 + 9 = 13]] cm. Formeln [[c = p + q]] återuppbygger helt enkelt hela sidan från dess två delar.",
            },
            {
              "kind": "p",
              "text": "En snabb märkningsvana förhindrar de flesta fel: börja vid den rätvinkliga vinkeln C, dra höjden till hypotenusan och markera fotpunkten D. Segmentet som vidrör A är p och segmentet som vidrör B är q. När dessa två beteckningar är satta kan resten av guiden tillämpas direkt.",
            },
          ],
          "h2": "Vad är hypotenusaprojektioner i en rätvinklig triangel?",
        },
        "sec-altitude": {
          "blocks": [
            {
              "kind": "p",
              "text": "Samma projektioner ger höjden genom satsen om det geometriska medelvärdet: [[h^2 = pq]], alltså [[h = \\sqrt{pq}]]. Med [[p = 9]] cm och [[q = 16]] cm, [[h = \\sqrt{9 \\times 16} = \\sqrt{144} = 12]] cm.",
            },
            {
              "kind": "p",
              "text": "Jämför de två formlerna: [[c = p + q]] adderar projektionerna, medan [[h = \\sqrt{pq}]] tar deras geometriska medelvärde. De besvarar olika frågor. Hypotenusan är hela sidans längd; höjden är det vinkelräta avståndet från den räta vinkeln ner till den sidan.",
            },
            {
              "kind": "p",
              "text": "För höjdproblem, använd <a href=\"/right-triangle-altitude-from-projections-calculator/\">kalkylatorn för höjd från projektioner</a>, som är byggd kring [[h = \\sqrt{pq}]]. Håll de två resultaten åtskilda: i denna triangel är hypotenusan 25 cm medan höjden bara är 12 cm.",
            },
            {
              "kind": "p",
              "text": "En inbyggd rimlighetskontroll gäller här: höjden är alltid kortare än hypotenusan. I det genomräknade exemplet är 12 cm gott och väl under 25 cm. Om din höjd någonsin överstiger din hypotenusa, kontrollera vilken formel du använde.",
            },
          ],
          "h2": "Hur hypotenusans projektioner förhåller sig till höjden",
          "image": {
            "alt": "Rätvinklig triangel med projektionerna 9 och 16 på hypotenusan, hypotenusan 25, och höjden 12 dragen vinkelrätt mot hypotenusan",
            "caption": "Samma projektioner, två formler: c = 9 + 16 = 25, h = sqrt(9 x 16) = 12.",
            "src": "hypotenuse-altitude-p9q16.svg",
          },
        },
        "sec-diagram": {
          "blocks": [
            {
              "kind": "p",
              "text": "Huvuddiagrammet visar triangel ABC med den räta vinkeln vid C. Sidan AC är katet a, sidan BC är katet b och sidan AB är hypotenusan c. Höjden CD faller från C vinkelrätt mot AB och träffar den i D.",
            },
            {
              "kind": "p",
              "text": "En bra läsordning börjar vid hörnet C: följ katet a ner till A, katet b över till B, och gå sedan längs hypotenusan c från A till B. Stanna vid D, höjdens fotpunkt, för att se uppdelningen i p och q. Att läsa diagrammet så kopplar beteckningarna till formeln.",
            },
            {
              "kind": "p",
              "text": "Punkt D delar AB i två delar: sträckan AD är projektion p och sträckan DB är projektion q. Beteckningarna sitter direkt på diagrammet så att du kan se var p börjar, var q slutar och hur de två tillsammans spänner över hela sidan från A till B.",
            },
            {
              "kind": "p",
              "text": "Rätvinkelmarkörerna vid C och D bekräftar geometrin. Markören vid C gör AB till hypotenusan, och markören vid D bekräftar att CD är höjden. Den ursprungliga triangeln är nu uppdelad i två mindre rätvinkliga trianglar, ACD och CBD, som återkommer längre fram i guiden.",
            },
          ],
          "h2": "Diagrammet över rätvinkliga triangelns hypotenusaprojektioner förklarat",
          "image": {
            "alt": "Rätvinklig triangel ABC med rät vinkel vid C; höjden CD dragen vinkelrätt mot hypotenusan AB och delar den i projektion p (sträckan AD) och projektion q (sträckan DB), med kateterna a och b märkta",
            "caption": "Höjden CD delar hypotenusan AB i projektionerna p och q.",
            "src": "hypotenuse-projections-main.svg",
          },
        },
        "sec-examples": {
          "blocks": [
            {
              "kind": "p",
              "text": "Varje exempel anger de givna värdena, insättningen och det slutliga svaret. Kommentarerna hålls korta så att räkningen förblir synlig.",
            },
            {
              "kind": "p",
              "text": "Alla exempel håller enheterna konsekventa från de givna värdena till svaret. När enheterna skiljer sig konverterar exemplet först och säger det uttryckligen, så att du kan kopiera vanan i ditt eget arbete.",
            },
            {
              "kind": "h3",
              "text": "Exempel 1: Hela tal",
            },
            {
              "kind": "p",
              "text": "Givet [[p = 4]] cm och [[q = 9]] cm ger formeln [[c = p + q]] [[c = 4 + 9]], så [[c = 13]] cm. Två heltalsprojektioner ger här en heltals hypotenusa, även om det inte är garanterat i allmänhet.",
            },
            {
              "kind": "h3",
              "text": "Exempel 2: Lika projektioner",
            },
            {
              "kind": "p",
              "text": "Givet [[p = 5]] cm och [[q = 5]] cm, [[c = 5 + 5 = 10]] cm. Lika projektioner betyder att höjden träffar hypotenusans mittpunkt, vilket inträffar exakt när de två kateterna är lika: en likbent rätvinklig triangel. Eftersom kateterna är lika är höjden också medianen, vilket är anledningen till att den delar hypotenusan mitt itu.",
            },
            {
              "kind": "h3",
              "text": "Exempel 3: Decimala projektioner",
            },
            {
              "kind": "p",
              "text": "Givet [[p = 3.6]] m och [[q = 6.4]] m, [[c = 3.6 + 6.4 = 10]] m. Ställ decimaltecknen i linje och addera som vanligt; enheten förblir meter hela vägen.",
            },
            {
              "kind": "h3",
              "text": "Exempel 4: Olika projektioner",
            },
            {
              "kind": "p",
              "text": "Givet [[p = 2]] cm och [[q = 18]] cm, [[c = 2 + 18 = 20]] cm. Projektionerna behöver inte vara lika stora; summan återuppbygger ändå hela hypotenusan.",
            },
            {
              "kind": "h3",
              "text": "Exempel 5: Större mått",
            },
            {
              "kind": "p",
              "text": "Givet [[p = 125]] mm och [[q = 275]] mm, [[c = 125 + 275 = 400]] mm. Stora värden ändrar inget i metoden.",
            },
            {
              "kind": "h3",
              "text": "Exempel 6: Blandade enheter",
            },
            {
              "kind": "p",
              "text": "Givet [[p = 40]] mm och [[q = 9]] cm, konvertera först: 40 mm motsvarar 4 cm. Sedan [[c = 4 + 9 = 13]] cm. Att addera före konvertering skulle ge ett meningslöst 49.",
            },
            {
              "kind": "h3",
              "text": "Exempel 7: Bråkmått",
            },
            {
              "kind": "p",
              "text": "Givet [[p = \\frac{1}{2}]] ft och [[q = \\frac{3}{4}]] ft, skriv båda med nämnaren 4: [[c = \\frac{2}{4} + \\frac{3}{4} = \\frac{5}{4}]] ft, vilket är 1.25 ft.",
            },
            {
              "kind": "h3",
              "text": "Exempel 8: Hitta en saknad projektion",
            },
            {
              "kind": "p",
              "text": "Givet [[c = 25]] cm och [[p = 9]] cm, lös [[q = c - p]]: [[q = 25 - 9 = 16]] cm. Detta omvända steg visar att sambandet går åt båda hållen, även om kalkylatorn på den här sidan adderar p och q för att hitta c snarare än att lösa för en saknad projektion.",
            },
          ],
          "h2": "Räkneexempel med hypotenusan från projektioner",
        },
        "sec-legs": {
          "blocks": [
            {
              "kind": "p",
              "text": "Projektionerna bestämmer också kateterna genom projektionssatsen: [[a^2 = cp]] och [[b^2 = cq]]. Varje katet är det geometriska medelvärdet av hypotenusan och dess angränsande projektion, ett faktum som följer av att de mindre trianglarna är likformiga med den ursprungliga.",
            },
            {
              "kind": "p",
              "text": "Kvadratrotsdragning ger [[a = \\sqrt{cp}]] och [[b = \\sqrt{cq}]]. Med [[p = 9]] cm och [[q = 16]] cm, hitta först [[c = 9 + 16 = 25]] cm. Sedan [[a = \\sqrt{25 \\times 9} = \\sqrt{225} = 15]] cm och [[b = \\sqrt{25 \\times 16} = \\sqrt{400} = 20]] cm.",
            },
            {
              "kind": "p",
              "text": "Hypotenusan är därför nyckeln som låser upp de återstående sidorna: när c är känt följer varje katet från sin egen projektion. <a href=\"/right-triangle-side-calculator/\">Sidokalkylatorn</a> löser liknande problem med saknade sidor direkt.",
            },
            {
              "kind": "p",
              "text": "Parningen är inte godtycklig: katet a ligger mot projektion p i den lilla triangeln ACD, som är likformig med hela triangeln, så a relaterar till c och p medan b relaterar till c och q. Att komma ihåg vilken katet som hör ihop med vilken projektion håller kvadratrötterna på rätt segment.",
            },
          ],
          "h2": "Sambandet mellan hypotenusans projektioner och triangelns kateter",
          "image": {
            "alt": "Rätvinklig triangel med projektionerna 9 och 16 och hypotenusan 25, som visar att katet a är 15 från a i kvadrat är lika med 25 gånger 9, och katet b är 20 från b i kvadrat är lika med 25 gånger 16",
            "caption": "Katet a = sqrt(25 x 9) = 15; katet b = sqrt(25 x 16) = 20.",
            "src": "hypotenuse-projection-theorem-legs.svg",
          },
        },
        "sec-why": {
          "blocks": [
            {
              "kind": "p",
              "text": "Skälet är sträckadditionspostulatet: om punkt D ligger på sträckan AB mellan A och B, så är längden AB lika med AD plus DB. Här är D höjdens fotpunkt och A och B är hypotenusans ändpunkter, så [[AB = AD + DB]].",
            },
            {
              "kind": "p",
              "text": "[[[c = p + q]]]",
            },
            {
              "kind": "p",
              "text": "Insättning av standardsymbolerna ger formeln direkt. I en äkta rätvinklig triangel landar höjdens fotpunkt alltid mellan ändpunkterna, så postulatet gäller alltid. Ingen trigonometri behövs för detta steg.",
            },
            {
              "kind": "p",
              "text": "Triangellikformighet är verktyget bakom de djupare projektionssambanden, såsom [[a^2 = cp]], men enkel sträckaddition räcker för att fastställa [[c = p + q]]. Diagrammet nedan visar samma idé på en enda rak linje.",
            },
            {
              "kind": "p",
              "text": "En detalj förtjänar betoning: D faller alltid strikt mellan A och B i en äkta rätvinklig triangel, aldrig vid en ändpunkt och aldrig utanför sträckan. Den placeringen är det som gör sträckadditionspostulatet tillämpligt, och det är därför projektioner på noll eller negativa projektioner avvisas.",
            },
          ],
          "h2": "Varför är hypotenusan lika med summan av sina projektioner?",
          "image": {
            "alt": "Rak sträcka AB delad vid punkt D i sträckan AD märkt p och sträckan DB märkt q, som visar att hela sträckan är lika med p plus q",
            "caption": "En punkt mellan A och B delar sträckan: AB = AD + DB.",
            "src": "hypotenuse-segment-addition.svg",
          },
        },
        "sec-applications": {
          "blocks": [
            {
              "kind": "p",
              "text": "I klassrum och läxor testar projektionsproblem om elever kan märka ett diagram och tillämpa [[c = p + q]] i stället för att sträcka sig efter Pythagoras sats. Övningar i teknisk ritning använder samma färdighet när en höjd delar en uppmätt hypotenusa på en ritning.",
            },
            {
              "kind": "p",
              "text": "Mätmodeller och arkitektonisk geometri reducerar ibland en rätvinklig triangel till en hypotenusa som skärs av en vinkelrät linje, där addition av de två markerade segmenten ger hela spännvidden. Geometriska konstruktioner på papper använder summan för att ställa in passare.",
            },
            {
              "kind": "p",
              "text": "Villkoret är alltid detsamma: p och q måste vara angränsande delar av en hypotenusa i en äkta rätvinklig triangel. Godtyckliga avstånd kvalificerar aldrig, hur lockande additionen än ser ut.",
            },
            {
              "kind": "p",
              "text": "Lärare kan använda projektionsuppställningen som en brygglektion: den repeterar sträckaddition från tidigare årskurser samtidigt som den förbereder för likformighetssatserna som kommer senare i geometrikursen.",
            },
          ],
          "h2": "Praktiska tillämpningar av beräkningar med hypotenusans projektioner",
        },
        "sec-compare": {
          "blocks": [
            {
              "kind": "p",
              "text": "Två vägar leder till hypotenusan. När höjdens segment är kända, använd sträckaddition: [[c = p + q]]. När de två sidorna runt den räta vinkeln är kända i stället, använd Pythagoras sats: [[c = \\sqrt{a^2 + b^2}]].",
            },
            {
              "kind": "p",
              "text": "Välj projektionsformeln när problemet ger höjdens fotpunkt och dess två segment; välj katetformeln när det ger de två vinkelräta sidorna. I en konsekvent triangel ger båda vägarna samma c.",
            },
            {
              "kind": "p",
              "text": "En snabb korskontroll knyter ihop de två formlerna. Från projektionerna [[p = 9]] och [[q = 16]], [[c = 25]]. Kateterna är [[a = 15]] och [[b = 20]], och [[\\sqrt{15^2 + 20^2} = \\sqrt{625} = 25]]. Båda vägarna landar på samma hypotenusa.",
            },
          ],
          "h2": "Hypotenusan från projektioner jämfört med hypotenusan från kateter",
          "table": {
            "headers": [
              "Kända värden",
              "Formel",
              "Metod",
            ],
            "rows": [
              [
                "Projektionerna p och q",
                "c = p + q",
                "Sträckaddition",
              ],
              [
                "Kateterna a och b",
                "c = √(a² + b²)",
                "Pythagoras sats",
              ],
            ],
          },
        },
        "sec-mistakes": {
          "blocks": [
            {
              "kind": "p",
              "text": "Varje misstag nedan följs av sin korrigering.",
            },
            {
              "kind": "steps",
              "steps": [
                "Att multiplicera p och q i stället för att addera dem. Med [[p = 4]] och [[q = 9]] är produkten 36 meningslös här; hypotenusan är [[4 + 9 = 13]].",
                "Att blanda ihop projektioner med kateter. Kateterna möts vid den räta vinkeln; projektionerna ligger längs hypotenusan. Märk varje längd innan du beräknar.",
                "Att använda höjden som en projektion. Höjden h är vinkelrät mot hypotenusan, inte en bit av den, så den hör aldrig hemma i [[c = p + q]].",
                "Att blanda måttenheter. [[p = 40]] mm och [[q = 9]] cm måste bli 4 cm och 9 cm innan addition; den råa summan 49 har ingen giltig enhet.",
                "Att mata in negativa längder. Projektioner är positiva per definition, så en negativ inmatning signalerar ett datafel.",
                "Att blanda ihop hypotenusan med en katet. Hypotenusan ligger mitt emot den räta vinkeln och är den längsta sidan; en katet kan aldrig spela dess roll.",
                "Att glömma ett segment. Att bara addera p ger en dellängd; hypotenusan behöver båda delarna.",
                "Att använda orelaterade mått. De två talen måste vara de angränsande delarna av samma hypotenusa, inte godtyckliga längder från problemet.",
                "Att tillämpa Pythagoras sats på p och q. Värdet [[\\sqrt{p^2 + q^2}]] är inte hypotenusan, eftersom p och q är kollinjära, inte vinkelräta.",
                "Att blanda ihop [[c = p + q]] med [[h = \\sqrt{pq}]]. Addition hittar hypotenusan; det geometriska medelvärdet hittar höjden. Att byta formlerna byter svaren.",
              ],
            },
            {
              "kind": "p",
              "text": "Om du upptäcker dig själv mitt i ett misstag, stanna upp och märk om diagrammet innan du beräknar igen. De flesta av felen ovan försvinner när p och q är tydligt markerade på hypotenusan och allt annat är överstruket.",
            },
          ],
          "h2": "Vanliga misstag vid beräkning av hypotenusan från projektioner",
        },
        "sec-practice": {
          "blocks": [
            {
              "kind": "p",
              "text": "Prova dessa sex problem och kontrollera sedan de genomräknade svaren nedan. Inget av värdena upprepar räkneexemplen.",
            },
            {
              "kind": "p",
              "text": "Arbeta igenom varje problem på papper innan du läser dess svar. Täck över svaren med handen vid behov; flerstegsproblemet är det bästa testet på om projektionssatserna har fastnat.",
            },
            {
              "kind": "h3",
              "text": "Uppgift 1: Hela tal",
            },
            {
              "kind": "p",
              "text": "En rätvinklig triangels höjd delar hypotenusan i [[p = 12]] cm och [[q = 4]] cm. Hitta c.",
            },
            {
              "kind": "h3",
              "text": "Uppgift 2: Decimaltal",
            },
            {
              "kind": "p",
              "text": "Givet [[p = 2.5]] m och [[q = 7.5]] m, hitta hypotenusan.",
            },
            {
              "kind": "h3",
              "text": "Uppgift 3: Lika projektioner",
            },
            {
              "kind": "p",
              "text": "Givet [[p = 7]] in och [[q = 7]] in, hitta c. Vilken typ av triangel är det?",
            },
            {
              "kind": "h3",
              "text": "Uppgift 4: Enhetskonvertering",
            },
            {
              "kind": "p",
              "text": "Givet [[p = 200]] mm och [[q = 35]] cm, hitta hypotenusan i centimeter.",
            },
            {
              "kind": "h3",
              "text": "Uppgift 5: Saknad projektion",
            },
            {
              "kind": "p",
              "text": "En hypotenusa mäter [[c = 50]] cm och en projektion är [[q = 32]] cm. Hitta p.",
            },
            {
              "kind": "h3",
              "text": "Uppgift 6: Flersteg med kateter",
            },
            {
              "kind": "p",
              "text": "Givet [[p = 16]] cm och [[q = 9]] cm, hitta c och hitta sedan kateterna a och b.",
            },
            {
              "kind": "h3",
              "text": "Svar på övningsuppgifterna",
            },
            {
              "kind": "p",
              "text": "Svar 1: [[c = 12 + 4 = 16]] cm.",
            },
            {
              "kind": "p",
              "text": "Svar 2: [[c = 2.5 + 7.5 = 10]] m.",
            },
            {
              "kind": "p",
              "text": "Svar 3: [[c = 7 + 7 = 14]] in. Lika projektioner ger en likbent rätvinklig triangel.",
            },
            {
              "kind": "p",
              "text": "Svar 4: Konvertera 200 mm till 20 cm, sedan [[c = 20 + 35 = 55]] cm.",
            },
            {
              "kind": "p",
              "text": "Svar 5: [[p = c - q = 50 - 32 = 18]] cm.",
            },
            {
              "kind": "p",
              "text": "Svar 6: [[c = 16 + 9 = 25]] cm. Sedan [[a = \\sqrt{25 \\times 16} = 20]] cm och [[b = \\sqrt{25 \\times 9} = 15]] cm.",
            },
          ],
          "h2": "Övningsuppgifter med svar",
        },
        "sec-pythagoras": {
          "blocks": [
            {
              "kind": "p",
              "text": "Projektionssambanden stämmer exakt överens med Pythagoras sats. Börja från projektionssatsen: [[a^2 = cp]] och [[b^2 = cq]]. Addition av de två ekvationerna ger [[a^2 + b^2 = cp + cq]].",
            },
            {
              "kind": "p",
              "text": "[[[a^2 + b^2 = c(p + q)]]]",
            },
            {
              "kind": "p",
              "text": "Att bryta ut c är giltigt eftersom det multiplicerar båda termerna. Eftersom [[p + q = c]] ger substitution:",
            },
            {
              "kind": "p",
              "text": "[[[a^2 + b^2 = c^2]]]",
            },
            {
              "kind": "p",
              "text": "En numerisk kontroll med 9-16-25-triangeln bekräftar algebran: [[a^2 + b^2 = 225 + 400 = 625]] och [[c^2 = 25^2 = 625]]. Båda sidor stämmer överens, vilket är exakt vad det faktoriserade beviset förutspår.",
            },
            {
              "kind": "p",
              "text": "Beviset sluter sig snyggt: den enkla sträcksumman sitter i hjärtat av Pythagoras samband. Diagrammet nedan visar var [[a^2 = cp]] och [[b^2 = cq]] kommer ifrån: varje liten triangel delar sina vinklar med den ursprungliga, så motsvarande sidor förblir proportionella.",
            },
          ],
          "h2": "Hypotenusans projektioner och Pythagoras sats",
          "image": {
            "alt": "Ursprungliga rätvinkliga triangeln ABC bredvid de två mindre likformiga trianglarna ACD och CBD med matchande vinklar och motsvarande sidor märkta",
            "caption": "Trianglarna ACD och CBD är likformiga med ABC, vilket ger a i kvadrat är lika med cp och b i kvadrat är lika med cq.",
            "src": "hypotenuse-similar-triangles.svg",
          },
        },
        "sec-special": {
          "blocks": [
            {
              "kind": "p",
              "text": "Varje egenskap nedan följer direkt från addition, vilket gör dem lätta att lita på.",
            },
            {
              "items": [
                "Lika projektioner: om [[p = q]], så [[c = 2p]]. Höjden landar vid mittpunkten, och de två kateterna är lika, vilket ger en likbent rätvinklig triangel.",
                "Olika projektioner: varje positivt par fungerar. Höjden lutar mot den längre projektionen, och den närmare kateten är den kortare.",
                "Mycket små projektioner: formeln gäller fortfarande, till exempel ger [[p = 0.5]] mm och [[q = 1.5]] mm [[c = 2]] mm.",
                "Mycket stora projektioner: det finns ingen övre gräns, till exempel ger [[p = 1200]] m och [[q = 800]] m [[c = 2000]] m.",
                "Skalning: att fördubbla båda projektionerna fördubblar hypotenusan, eftersom [[2p + 2q = 2(p + q)]].",
                "Byte av p och q: [[p + q = q + p]], så hypotenusan är oförändrad och endast beteckningarna AD och DB byter plats.",
                "Projektioner med noll längd: [[p = 0]] betyder att höjden sammanfaller med en katet, så triangeln är degenererad och kalkylatorn accepterar den inte.",
                "Negativa projektioner: längder kan inte vara negativa, så en negativ inmatning är alltid ett datafel.",
              ],
              "kind": "list",
            },
            {
              "kind": "p",
              "text": "Diagrammet jämför två trianglar med samma hypotenusa men olika projektionsuppdelningar och visar hur formen ändras medan summan förblir fast.",
            },
          ],
          "h2": "Specialfall och viktiga egenskaper",
          "image": {
            "alt": "Två rätvinkliga trianglar med samma hypotenusalängd 10: en med lika projektioner 5 och 5, den andra med projektionerna 2 och 8",
            "caption": "Samma hypotenusa, olika former: p = q = 5 mot p = 2, q = 8.",
            "src": "hypotenuse-equal-vs-unequal.svg",
          },
        },
        "sec-verify": {
          "blocks": [
            {
              "kind": "p",
              "text": "Tre snabba kontroller fångar nästan varje beräkningsfel. Den första är den direkta beräkningen; de andra två bekräftar den från olika vinklar.",
            },
            {
              "kind": "h3",
              "text": "Kontroll 1: Beräkna sträckadditionen igen",
            },
            {
              "kind": "p",
              "text": "Addera p och q igen, långsamt. Med [[p = 4]] och [[q = 9]], bekräfta [[4 + 9 = 13]]. En slarvig felräkning här är den vanligaste källan till ett felaktigt svar.",
            },
            {
              "kind": "h3",
              "text": "Kontroll 2: Bekräfta att kateterna passar Pythagoras",
            },
            {
              "kind": "p",
              "text": "Beräkna kateterna från projektionerna, [[a = \\sqrt{cp}]] och [[b = \\sqrt{cq}]], och verifiera sedan [[a^2 + b^2 = c^2]]. För [[p = 9]], [[q = 16]], [[c = 25]]: [[a = 15]], [[b = 20]] och [[225 + 400 = 625]]. Denna geometriska kontroll går bortom kalkylatorns addition.",
            },
            {
              "kind": "h3",
              "text": "Kontroll 3: Rimlighetskontrollera diagrammet",
            },
            {
              "kind": "p",
              "text": "Bekräfta att båda projektionerna är positiva, att båda ligger på samma hypotenusa och att c är längre än något av segmenten var för sig. Om resultatet är mindre än p eller q matades ett värde in i fel fält.",
            },
          ],
          "h2": "Så här kontrollerar du din hypotenusaberäkning",
        },
      },
      "faqHeading": "Vanliga frågor",
      "faqs": [
        {
          "answer": "Formeln är [[c = p + q]], där p och q är hypotenusans två projektionssegment. Addera de två längderna för att få hela hypotenusan. Till exempel ger [[p = 4]] cm och [[q = 9]] cm [[c = 13]] cm.",
          "question": "Vad är formeln för hypotenusan från projektioner?",
        },
        {
          "answer": "De är de två segment som bildas när höjden från den räta vinkeln möter hypotenusan. Märkta [[p = AD]] och [[q = DB]] i triangel ABC med höjden CD ligger de änd mot änd längs hypotenusan och spänner tillsammans över den helt.",
          "question": "Vad är hypotenusaprojektioner?",
        },
        {
          "answer": "På grund av sträckaddition: höjdens fotpunkt ligger mellan hypotenusans ändpunkter, så hela sidan är lika med summan av sina delar. Insättning av standardsymbolerna förvandlar [[AB = AD + DB]] till [[c = p + q]]. Ingen trigonometri krävs.",
          "question": "Varför adderar vi p och q?",
        },
        {
          "answer": "Nej. Kateterna a och b bildar den räta vinkeln, medan projektionerna p och q ligger längs hypotenusan. Att blanda ihop dem är det vanligaste märkningsfelet, så kontrollera varje längds position på diagrammet innan du beräknar.",
          "question": "Är projektioner detsamma som triangelns kateter?",
        },
        {
          "answer": "Ja. Höjden träffar sällan den exakta mittpunkten, så p och q är oftast olika. Varje positivt par är giltigt, och summan ger fortfarande hypotenusan. Triangeln lutar helt enkelt mot den längre projektionen.",
          "question": "Kan projektionerna ha olika längder?",
        },
        {
          "answer": "Formeln blir [[c = 2p]]. Höjden delar hypotenusan mitt itu, de två kateterna är lika, och triangeln är en likbent rätvinklig triangel. Geometriskt landar höjden exakt vid mittpunkten.",
          "question": "Vad händer när p och q är lika?",
        },
        {
          "answer": "Ja, med en annan formel: [[h = \\sqrt{pq}]], det geometriska medelvärdet av projektionerna. <a href=\"/right-triangle-altitude-from-projections-calculator/\">Kalkylatorn för höjd från projektioner</a> är byggd för den beräkningen. Håll den åtskild från [[c = p + q]], som hittar hypotenusan.",
          "question": "Kan jag beräkna höjden med p och q?",
        },
        {
          "answer": "Ja. Hitta först [[c = p + q]] och använd sedan [[a = \\sqrt{cp}]] och [[b = \\sqrt{cq}]]. För [[p = 9]], [[q = 16]] och [[c = 25]] är kateterna 15 och 20. Dessa är pedagogiska utvidgningar snarare än denna kalkylators huvudfunktion.",
          "question": "Kan jag hitta triangelns kateter från projektionerna?",
        },
        {
          "answer": "Nej. Att hitta hypotenusan från projektioner kräver endast addition, utan kvadratrötter. Pythagoras sats blir användbar när kateterna i stället är kända, eller när ett resultat ska verifieras genom kateterna.",
          "question": "Är Pythagoras sats nödvändig för denna beräkning?",
        },
        {
          "answer": "Konvertera ett mått så att båda använder samma enhet innan du adderar. Till exempel blir [[p = 40]] mm 4 cm när [[q = 9]] cm, vilket ger [[c = 13]] cm. Kalkylatorns enhetsväljare tjänar samma syfte.",
          "question": "Vad händer om p och q har olika enheter?",
        },
        {
          "answer": "Nej. En projektion är bara en del av hypotenusan, så den måste vara kortare än helheten. Om ditt resultat visar något annat matades ett värde in i fel fält.",
          "question": "Kan en projektion vara längre än hypotenusan?",
        },
        {
          "answer": "Beräkna [[c = p + q]] långsamt igen, och bekräfta sedan att kateterna uppfyller [[a^2 + b^2 = c^2]]. Kontrollera också att båda projektionerna är positiva och att c överstiger var och en. Alla tre kontrollerna tar under en minut.",
          "question": "Hur kan jag verifiera hypotenusaresultatet?",
        },
      ],
      "relatedHeading": "Utforska relaterade kalkylatorer för rätvinkliga trianglar",
      "relatedIntro": "Välj nästa verktyg efter de mått du känner till. Varje kalkylator nedan hanterar en specifik uppgift för rätvinkliga trianglar, från de enskilda projektionssegmenten till höjden och triangelns sidor.",
      "relatedItems": [
        "Projektionskalkylator för rätvinklig triangel",
        "Kalkylator för projektion p i rätvinklig triangel",
        "Kalkylator för projektion q i rätvinklig triangel",
        "Kalkylator för höjd från projektioner i rätvinklig triangel",
        "Sidokalkylator för rätvinklig triangel",
      ],
    },
};
