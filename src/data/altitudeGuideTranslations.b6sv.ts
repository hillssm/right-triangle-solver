// altitudeGuideTranslations.bsv.ts: Right Triangle Altitude From Projections
// Guide (Page 29 of 45) translation.
export const B6_SV = {
  "sv": {
      "tocHeading": "Avsnittsnavigering",
      "tocItems": {
        "sec-intro": "Höjdkalkylator för rätvinklig triangel",
        "sec-calculate": "Beräkna höjden i en rätvinklig triangel",
        "sec-what": "Vad är höjden i en rätvinklig triangel?",
        "sec-diagram": "Diagram över höjden i en rätvinklig triangel förklarat",
        "sec-formulas": "Formler för höjden i en rätvinklig triangel förklarade",
        "sec-how": "Så använder du höjdkalkylatorn för rätvinklig triangel",
        "sec-method1": "Metod 1: Hitta höjden i en rätvinklig triangel från sidlängder",
        "sec-method2": "Metod 2: Hitta höjden från hypotenusaprojektioner",
        "sec-two-sides": "Så hittar du höjden när bara två sidor är kända",
        "sec-why": "Varför fungerar formeln för höjden i en rätvinklig triangel?",
        "sec-proof": "Bevis för höjdsatsen med likformiga trianglar",
        "sec-examples": "Genomräknade exempel på höjden i en rätvinklig triangel",
        "sec-area": "Sambandet mellan höjd och triangelarea",
        "sec-geomean": "Geometriskt medelvärde och hypotenusaprojektioner",
        "sec-properties": "Viktiga egenskaper hos höjden i en rätvinklig triangel",
        "sec-verify": "Så kontrollerar du om ditt höjdresultat är korrekt",
        "sec-mistakes": "Vanliga misstag vid beräkning av höjd",
        "sec-applications": "Verkliga tillämpningar av höjden i en rätvinklig triangel",
        "sec-practice": "Övningsuppgifter med svar",
        "sec-related": "Utforska relaterade rätvinkliga triangelkalkylatorer",
        "sec-faq": "Vanliga frågor",
        "sec-conclusion": "Relaterade rätvinkliga triangelkalkylatorer",
      },
      "sections": {
        "sec-intro": {
          "h2": "Höjdkalkylator för rätvinklig triangel",
          "blocks": [
            {
              "kind": "p",
              "text": "Den här guiden visar två sätt att hitta höjden i en rätvinklig triangel, med genomräknade exempel för varje.",
            },
            {
              "kind": "p",
              "text": "Höjden är den vinkelräta sträckan som dras från det rätvinkliga hörnet till hypotenusan. Höjdkalkylatorn för rätvinklig triangel hittar denna längd med antingen de tre sidlängderna eller de två hypotenusaprojektionerna. Välj det läge som matchar det du vet, ange dina mått, så returnerar kalkylatorn höjden i samma enhet.",
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
              "text": "Den första formeln använder de två kateterna [[a]] och [[b]] tillsammans med hypotenusan [[c]]. Den andra använder projektionerna [[p]] och [[q]], de två segmenten som höjden delar hypotenusan i. Båda formlerna hittar samma vinkelräta höjd; de utgår bara från olika kända mått.",
            },
          ],
        },
        "sec-calculate": {
          "h2": "Beräkna höjden i en rätvinklig triangel",
          "blocks": [
            {
              "kind": "p",
              "text": "Kalkylatorn vid sidan av den här guiden har två lägen, och att välja rätt är den enda inställning du behöver. Varje läge ber om olika mått och tillämpar en annan formel, så läs tabellen först och matcha läget mot dina kända värden.",
            },
            {
              "kind": "p",
              "text": "Läge 1, Höjd mot hypotenusan, accepterar Katet a, Katet b och Hypotenusan c. Det beräknar höjden med [[h=\\frac{ab}{c}]], vilket dividerar produkten av de två kateterna med hypotenusan. Läge 2, Höjd i kvadrat, accepterar Projektion p och Projektion q, de två delarna av hypotenusan, och tillämpar [[h=\\sqrt{pq}]], det geometriska medelvärdet av projektionerna.",
            },
            {
              "kind": "p",
              "text": "Alla mått måste ha kompatibla enheter: centimeter med centimeter, meter med meter. Resultatet kommer i den gemensamma längdenheten för dina inmatningar. Använd knappen Återställ för att rensa fälten innan du börjar en ny uppgift.",
            },
          ],
          "table": {
            "headers": [
              "Kända mått",
              "Kalkylatorläge",
              "Formel",
            ],
            "rows": [
              [
                "Kateterna a, b och hypotenusan c",
                "Höjd mot hypotenusan",
                "[[h=\\frac{ab}{c}]]",
              ],
              [
                "Hypotenusaprojektionerna p och q",
                "Höjd i kvadrat",
                "[[h=\\sqrt{pq}]]",
              ],
            ],
          },
        },
        "sec-what": {
          "h2": "Vad är höjden i en rätvinklig triangel?",
          "blocks": [
            {
              "kind": "p",
              "text": "En höjd är en vinkelrät sträcka som dras från ett hörn i en triangel till linjen som innehåller den motstående sidan. I en rätvinklig triangel är den mest användbara höjden den som börjar i det rätvinkliga hörnet och möter hypotenusan i en rät vinkel. Punkten där den landar kallas höjdens fotpunkt, och hypotenusan är den naturliga basen för detta bas-höjd-par.",
            },
            {
              "kind": "p",
              "text": "Varje triangel har tre höjder, och en rätvinklig triangel är inget undantag. Två av dem sammanfaller med kateterna: om du tar en katet som bas är den andra kateten redan vinkelrät mot den, så den fungerar som höjd. Den tredje höjden går från det rätvinkliga hörnet till hypotenusan och ligger inuti triangeln. Den här sidan beräknar den tredje, den enda höjden som kräver en verklig beräkning.",
            },
            {
              "kind": "p",
              "text": "Eftersom den möter hypotenusan i en rät vinkel delar denna höjd den ursprungliga triangeln i två mindre rätvinkliga trianglar. De två trianglarna är likformiga med varandra och med den ursprungliga, vilket är anledningen till att höjden skapar de eleganta geometriska-medelvärdes-sambanden som utforskas senare i guiden.",
            },
          ],
        },
        "sec-diagram": {
          "h2": "Diagram över höjden i en rätvinklig triangel förklarat",
          "blocks": [
            {
              "kind": "p",
              "text": "Diagrammet nedan visar triangeln ABC med den räta vinkeln vid C. Sidorna AC och BC möts i den räta vinkeln, så AB är motstående den räta vinkeln och måste vara hypotenusan. Höjden CD går från C till sidan AB och möter den vid D med en rätvinklig markering som visar det vinkelräta förhållandet.",
            },
            {
              "kind": "p",
              "text": "Varje sida har en standardetikett: AC = a, BC = b, AB = c och höjden CD = h. Höjden delar hypotenusan i två projektioner, AD = p och DB = q, så c = p + q. Lägg märke till att p ligger intill kateten a och q ligger intill kateten b, ett mönster som spelar roll för likformighetsbeviset senare.",
            },
            {
              "kind": "p",
              "text": "Om du läser diagrammet från vänster till höger får du hela berättelsen: en rätvinklig triangel, en höjd som fälls ned till hypotenusan, två projektionssegment, och den ursprungliga triangeln delad i två mindre rätvinkliga trianglar, ACD och CBD, som delar höjden som gemensam sida.",
            },
          ],
          "image": {
            "src": "altitude-main.svg",
            "alt": "Triangeln ABC med rät vinkel vid C; höjden CD dragen till hypotenusan AB, med AC lika med a, BC lika med b, AB lika med c, CD lika med h, AD lika med p, DB lika med q",
            "caption": "Höjden CD fälls från den räta vinkeln C vinkelrätt mot hypotenusan AB och delar den i projektionerna p och q.",
          },
        },
        "sec-formulas": {
          "h2": "Formler för höjden i en rätvinklig triangel förklarade",
          "blocks": [
            {
              "kind": "p",
              "text": "Fyra formler hittar samma höjd, och var och en utgår från olika kända mått. Den aktiva kalkylatorn implementerar de två första direkt; de andra två är manuella metoder du kan använda när dina mått är ofullständiga eller när du vill verifiera ett resultat på ett annat sätt.",
            },
            {
              "kind": "p",
              "text": "Sidformeln [[h=\\frac{ab}{c}]] behöver båda kateterna och hypotenusan. Projektionsformeln [[h=\\sqrt{pq}]] behöver bara de två hypotenusasegmenten, och den är likvärdig med höjdsatsen [[h^2=pq]]. När du känner till kateterna men inte hypotenusan, sätt in [[c=\\sqrt{a^2+b^2}]] för att få [[h=\\frac{ab}{\\sqrt{a^2+b^2}}]]. När du känner till arean A och hypotenusan c, använd [[h=\\frac{2A}{c}]], som kommer direkt från areaformeln med hypotenusan som bas.",
            },
            {
              "kind": "p",
              "text": "Behandla aldrig dessa som fyra kalkylatorlägen. Kalkylatorn har exakt två lägen: Höjd mot hypotenusan och Höjd i kvadrat. De återstående formlerna är hjälpmedel för manuell beräkning, för att härleda ett saknat mått innan du matar in i kalkylatorn, eller för att dubbelkontrollera ett svar som kalkylatorn gett.",
            },
          ],
          "table": {
            "headers": [
              "Formel",
              "Krävda inmatningar",
            ],
            "rows": [
              [
                "[[h=\\frac{ab}{c}]]",
                "Kateterna a, b och hypotenusan c",
              ],
              [
                "[[h=\\sqrt{pq}]]",
                "Projektionerna p och q",
              ],
              [
                "[[h=\\frac{ab}{\\sqrt{a^2 + b^2}}]]",
                "Båda kateterna a, b",
              ],
              [
                "[[h=\\frac{2A}{c}]]",
                "Arean A och hypotenusan c",
              ],
            ],
          },
        },
        "sec-how": {
          "h2": "Så använder du höjdkalkylatorn för rätvinklig triangel",
          "blocks": [
            {
              "kind": "p",
              "text": "Följ dessa steg i ordning så gör kalkylatorn resten. Hela processen tar under en minut när du vet vilka mått du har.",
            },
            {
              "kind": "steps",
              "steps": [
                "Identifiera dina kända mått: är det tre sidlängder, eller de två hypotenusaprojektionerna?",
                "Välj det kalkylatorläge som matchar: Höjd mot hypotenusan för tre sidor, Höjd i kvadrat för två projektioner.",
                "Ange positiva mått i kompatibla enheter, och konvertera först om de kommer i blandade enheter.",
                "Kontrollera att måtten beskriver en giltig rätvinklig triangel, med kateterna som uppfyller Pythagoras sats.",
                "Klicka på knappen Beräkna för att köra det valda läget.",
                "Läs av höjdresultatet i den gemensamma enheten för dina inmatningar.",
                "Verifiera svaret med en av kontrollmetoderna i den här guiden om uppgiften är viktig.",
                "Klicka på Återställ innan du anger en ny uppgift så att gamla värden aldrig blandas med nya.",
              ],
            },
            {
              "kind": "p",
              "text": "Valet av läge är det steg som spelar störst roll. Om du känner till kateterna a och b plus hypotenusan c passar läget Höjd mot hypotenusan. Om du bara vet hur hypotenusan delas i p och q, välj Höjd i kvadrat. Fel läge avvisar giltig inmatning, så att matcha läget mot måtten sparar frustration.",
            },
          ],
        },
        "sec-method1": {
          "h2": "Metod 1: Hitta höjden i en rätvinklig triangel från sidlängder",
          "blocks": [
            {
              "kind": "p",
              "text": "När alla tre sidlängder är kända kommer höjden från en enda division. Formeln [[h=\\frac{ab}{c}]] multiplicerar de två kateterna och dividerar med hypotenusan, och varje symbol har en fast betydelse: a och b är de vinkelräta kateterna, c är hypotenusan, och h är höjden mot hypotenusan.",
            },
            {
              "kind": "p",
              "text": "Den klassiska 3-4-5-triangeln visar varje steg. Med a = 3 cm, b = 4 cm och c = 5 cm, sätt in i formeln:",
            },
            {
              "kind": "p",
              "text": "[[[h=\\frac{(3 \\times 4)}{5}]]]",
            },
            {
              "kind": "p",
              "text": "Multiplicera kateterna först: 3 × 4 = 12. Dividera sedan med hypotenusan:",
            },
            {
              "kind": "p",
              "text": "[[[h=\\frac{12}{5}]]]",
            },
            {
              "kind": "p",
              "text": "Resultatet är h = 2,4 cm. Lägg märke till att 2,4 är kortare än båda kateterna, vilket alltid gäller för höjden mot hypotenusan, och bevisavsnittet förklarar senare varför divisionen med c är geometriskt naturlig.",
            },
            {
              "kind": "p",
              "text": "Använd den här metoden när de tre sidorna är kända eller kan mätas direkt. För ett dedikerat verktyg som bara hanterar sidinmatningar, prova <a href=\"/right-triangle-altitude-from-sides-calculator/\">kalkylatorn för höjd från sidor</a>, som går igenom samma formel mer ingående.",
            },
          ],
          "image": {
            "src": "altitude-sides-345.svg",
            "alt": "Rätvinklig triangel med kateterna 3 och 4, hypotenusan 5, höjden 2,4 dragen vinkelrätt mot hypotenusan",
            "caption": "En 3-4-5-triangel: höjden h är lika med (3 x 4) / 5 = 2,4.",
          },
        },
        "sec-method2": {
          "h2": "Metod 2: Hitta höjden från hypotenusaprojektioner",
          "blocks": [
            {
              "kind": "p",
              "text": "När hypotenusan redan är uppdelad i sina två projektioner ger höjdsatsen en genväg. Satsen säger [[h^2=pq]], så höjden är kvadratroten ur produkten av de två projektionerna:",
            },
            {
              "kind": "p",
              "text": "[[[h=\\sqrt{pq}]]]",
            },
            {
              "kind": "p",
              "text": "Ta p = 9 cm och q = 16 cm. Kvadrera sambandet först:",
            },
            {
              "kind": "p",
              "text": "[[[h^2=9 \\times 16]]]",
            },
            {
              "kind": "p",
              "text": "Multiplicera: 9 × 16 = 144, så [[h^2=144]]. Ta nu kvadratroten:",
            },
            {
              "kind": "p",
              "text": "[[[h=\\sqrt{144}]]]",
            },
            {
              "kind": "p",
              "text": "Resultatet är h = 12 cm. Detta säger att höjden är det geometriska medelvärdet av de två projektionerna: den ligger mellan dem i storlek, närmare deras genomsnitt än någon av ytterligheterna, en innebörd som förklaras mer utförligt i avsnittet om geometriskt medelvärde.",
            },
            {
              "kind": "p",
              "text": "Kom ihåg att p och q är segment av hypotenusan, inte triangelns kateter. Ett vanligt misstag är att mata in katetlängder som projektioner, vilket ger ett felaktigt svar. För ett verktyg byggt enbart kring denna metod, se <a href=\"/right-triangle-altitude-from-projections-calculator/\">kalkylatorn för höjd från projektioner</a>.",
            },
          ],
          "image": {
            "src": "altitude-projections.svg",
            "alt": "Rätvinklig triangel med höjden h som delar hypotenusan i projektionerna p = 9 och q = 16, höjden h = 12",
            "caption": "Höjden är det geometriska medelvärdet av projektionerna: sqrt(9 x 16) = 12.",
          },
        },
        "sec-two-sides": {
          "h2": "Så hittar du höjden när bara två sidor är kända",
          "blocks": [
            {
              "kind": "p",
              "text": "Ibland saknas den tredje sidan, men Pythagoras sats återställer den i ett steg. Återställningsmetoden beror på vilka två sidor du känner, så hantera varje fall separat.",
            },
            {
              "kind": "h3",
              "text": "Fall 1: Båda kateterna är kända",
            },
            {
              "kind": "p",
              "text": "Med a = 6 cm och b = 8 cm, hitta hypotenusan först med [[c=\\sqrt{a^2+b^2}]]:",
            },
            {
              "kind": "p",
              "text": "[[[c=\\sqrt{6^2+8^2}=\\sqrt{36+64}=\\sqrt{100}=10]]]",
            },
            {
              "kind": "p",
              "text": "Nu är alla tre sidor kända, så tillämpa sidformeln: h = (6 × 8) / 10 = 48 / 10 = 4,8 cm. Den saknade hypotenusan var det enda hindret, och höjden följer direkt.",
            },
            {
              "kind": "h3",
              "text": "Fall 2: En katet och hypotenusan är kända",
            },
            {
              "kind": "p",
              "text": "Med a = 5 cm och c = 13 cm, lös ut den saknade kateten med [[b=\\sqrt{c^2-a^2}]]:",
            },
            {
              "kind": "p",
              "text": "[[[b=\\sqrt{13^2-5^2}=\\sqrt{169-25}=\\sqrt{144}=12]]]",
            },
            {
              "kind": "p",
              "text": "Med b = 12 cm återställd är höjden h = (5 × 12) / 13 = 60/13 cm ≈ 4,615 cm. Dessa är manuella härledningar för att först hitta de mått som krävs; kalkylatorn själv ber om kompletta inmatningar, så gör detta grundarbete på papper innan du matar in värden.",
            },
            {
              "kind": "p",
              "text": "Om du ofta behöver själva den saknade sidan hittar <a href=\"/right-triangle-side-calculator/\">sidkalkylatorn</a> den direkt innan du går vidare till höjden.",
            },
          ],
        },
        "sec-why": {
          "h2": "Varför fungerar formeln för höjden i en rätvinklig triangel?",
          "blocks": [
            {
              "kind": "p",
              "text": "Formeln fungerar eftersom en triangel kan mätas med två olika bas-höjd-par, och arean förblir densamma i båda fallen. Detta areaargument är det kortaste ärliga beviset för [[h=\\frac{ab}{c}]].",
            },
            {
              "kind": "p",
              "text": "Använd först kateterna som bas-höjd-par. Eftersom kateterna är vinkelräta är arean helt enkelt halva deras produkt:",
            },
            {
              "kind": "p",
              "text": "[[[A=\\frac{ab}{2}]]]",
            },
            {
              "kind": "p",
              "text": "Använd nu hypotenusan som bas och höjden som höjd. Samma triangel har samma area:",
            },
            {
              "kind": "p",
              "text": "[[[A=\\frac{ch}{2}]]]",
            },
            {
              "kind": "p",
              "text": "Två uttryck för en area, så sätt dem lika med varandra:",
            },
            {
              "kind": "p",
              "text": "[[[\\frac{ab}{2}=\\frac{ch}{2}]]]",
            },
            {
              "kind": "p",
              "text": "Multiplicera båda sidor med 2 för att bli av med bråken, vilket ger ab = ch. Dividera båda sidor med c:",
            },
            {
              "kind": "p",
              "text": "[[[h=\\frac{ab}{c}]]]",
            },
            {
              "kind": "p",
              "text": "Varje steg är reversibel aritmetik, så divisionen med hypotenusan är inget trick; det är det algebraiska priset för att byta från kateternas bas-höjd-par till hypotenusans bas-höjd-par medan arean förblir fast.",
            },
          ],
          "image": {
            "src": "altitude-area-comparison.svg",
            "alt": "Samma rätvinkliga triangel ritad två gånger: först med basen a och höjden b, sedan med basen c och höjden h",
            "caption": "Samma triangel, två bas-höjd-par: arean är lika med ab/2 och ch/2, så h är lika med ab/c.",
          },
        },
        "sec-proof": {
          "h2": "Bevis för höjdsatsen med likformiga trianglar",
          "blocks": [
            {
              "kind": "p",
              "text": "Projektionsformeln [[h=\\sqrt{pq}]] kommer från likformighet. Behåll den konsekventa beteckningen: triangeln ABC är rätvinklig vid C, D ligger på AB, CD är vinkelrät mot AB, AD = p, DB = q, och CD = h.",
            },
            {
              "kind": "p",
              "text": "Höjden delar ABC i två mindre rätvinkliga trianglar, ACD och CBD. Vinkeln vid A delas mellan ABC och ACD, så de två är likformiga; likaså delas vinkeln vid B mellan ABC och CBD. Eftersom båda mindre trianglarna är likformiga med den ursprungliga är de likformiga med varandra: triangeln ACD är likformig med triangeln CBD.",
            },
            {
              "kind": "p",
              "text": "Skriv likformigheten som en proportion mellan motsvarande sidor. Den korta kateten i ACD är p och den långa kateten är h; i CBD är den korta kateten h och den långa kateten q. Att matcha dem ger:",
            },
            {
              "kind": "p",
              "text": "[[[\\frac{p}{h}=\\frac{h}{q}]]]",
            },
            {
              "kind": "p",
              "text": "Korsmultiplicera: h × h = p × q, så h² = pq. Ta kvadratroten:",
            },
            {
              "kind": "p",
              "text": "[[[h=\\sqrt{pq}]]]",
            },
            {
              "kind": "p",
              "text": "Endast den positiva roten används eftersom sidlängder är positiva. En negativ rot har ingen geometrisk innebörd här. Den centrala insikten är att höjden är den geometriska medeln mellan de två hypotenusasegmenten, vilket är exakt vad ett geometriskt medelvärde är.",
            },
          ],
          "image": {
            "src": "altitude-similar-triangles.svg",
            "alt": "Den ursprungliga rätvinkliga triangeln ABC med höjden CD, bredvid de två mindre likformiga trianglarna ACD och CBD med motsvarande sidor etiketterade",
            "caption": "Trianglarna ACD och CBD är likformiga: p/h = h/q, så h i kvadrat är lika med p gånger q.",
          },
        },
        "sec-examples": {
          "h2": "Genomräknade exempel på höjden i en rätvinklig triangel",
          "blocks": [
            {
              "kind": "p",
              "text": "Sju exempel täcker båda kalkylatorlägena, enhetskonvertering och decimalmått. Varje exempel visar de givna värdena, den valda formeln, insättningen och det slutliga svaret.",
            },
            {
              "kind": "h3",
              "text": "Exempel 1: Klassisk 3-4-5-triangel",
            },
            {
              "kind": "p",
              "text": "Med a = 3 cm, b = 4 cm, c = 5 cm. Använd [[h=\\frac{ab}{c}]]: h = (3 × 4) / 5 = 12 / 5 = 2,4 cm. Höjden är kortare än båda kateterna, som alltid.",
            },
            {
              "kind": "h3",
              "text": "Exempel 2: 5-12-13-triangel",
            },
            {
              "kind": "p",
              "text": "Med a = 5 m, b = 12 m, c = 13 m. Använd [[h=\\frac{ab}{c}]]: h = (5 × 12) / 13 = 60/13 m ≈ 4,615 m. Behåll bråket till sista steget för en snygg decimal.",
            },
            {
              "kind": "h3",
              "text": "Exempel 3: 8-15-17-triangel",
            },
            {
              "kind": "p",
              "text": "Med a = 8 cm, b = 15 cm, c = 17 cm. Använd [[h=\\frac{ab}{c}]]: h = (8 × 15) / 17 = 120/17 cm ≈ 7,059 cm. Större kateter ger ändå en höjd som är mindre än båda.",
            },
            {
              "kind": "h3",
              "text": "Exempel 4: Lika hypotenusaprojektioner",
            },
            {
              "kind": "p",
              "text": "Med p = 5 cm och q = 5 cm. Använd [[h=\\sqrt{pq}]]: h = √(5 × 5) = √25 = 5 cm. Lika projektioner innebär att höjden är så hög som möjligt för den hypotenusan, och triangeln är en likbent rätvinklig triangel: varje katet är 5√2 cm, ungefär 7,07 cm.",
            },
            {
              "kind": "h3",
              "text": "Exempel 5: Olika hypotenusaprojektioner",
            },
            {
              "kind": "p",
              "text": "Med p = 4 cm och q = 25 cm. Använd [[h=\\sqrt{pq}]]: h = √(4 × 25) = √100 = 10 cm. Lägg märke till hur höjden 10 ligger mellan de två projektionerna, 4 och 25, vilket är kännetecknet för det geometriska medelvärdet.",
            },
            {
              "kind": "h3",
              "text": "Exempel 6: Decimalmått",
            },
            {
              "kind": "p",
              "text": "Med a = 1,5 m, b = 2 m, c = 2,5 m. Använd [[h=\\frac{ab}{c}]]: h = (1,5 × 2) / 2,5 = 3 / 2,5 = 1,2 m. Decimaler fungerar exakt som heltal så länge varje värde använder samma enhet.",
            },
            {
              "kind": "h3",
              "text": "Exempel 7: Olika måttenheter",
            },
            {
              "kind": "p",
              "text": "Med a = 30 cm, b = 0,4 m, c = 0,5 m. Konvertera allt till centimeter först: b = 40 cm, c = 50 cm. Sedan h = (30 × 40) / 50 = 1200 / 50 = 24 cm. Att konvertera före insättningen undviker det vanligaste enhetsfelet.",
            },
          ],
        },
        "sec-area": {
          "h2": "Sambandet mellan höjd och triangelarea",
          "blocks": [
            {
              "kind": "p",
              "text": "Arean och höjden bestämmer varandra när hypotenusan är känd. Med hypotenusan som bas är arean A = ch/2, så att lösa ut höjden ger [[h=\\frac{2A}{c}]]. Detta är en genuint annorlunda väg: den hoppar helt över kateterna.",
            },
            {
              "kind": "p",
              "text": "Anta att en uppgift anger arean A = 54 cm² och hypotenusan c = 15 cm. Sätt in:",
            },
            {
              "kind": "p",
              "text": "[[[h=\\frac{2 \\times 54}{15}]]]",
            },
            {
              "kind": "p",
              "text": "Multiplicera täljaren: 2 × 54 = 108. Dividera sedan: h = 108 / 15 = 7,2 cm. Höjden följer utan någon kunskap om de enskilda kateterna.",
            },
            {
              "kind": "p",
              "text": "Denna väg är användbar när arean anges direkt, till exempel i textuppgifter om mark eller material. Den fungerar också som ett verifieringsverktyg: beräkna höjden från sidorna och bekräfta sedan att 2A/c ger samma värde. <a href=\"/right-triangle-area-calculator/\">Areakalkylatorn</a> hittar arean från vilka mått en uppgift än ger.",
            },
          ],
        },
        "sec-geomean": {
          "h2": "Geometriskt medelvärde och hypotenusaprojektioner",
          "blocks": [
            {
              "kind": "p",
              "text": "Höjdsatsen säger att höjden är det geometriska medelvärdet av de två projektionerna, och det geometriska medelvärdet är ett specifikt slags medelvärde. Ta p = 4 och q = 9. Deras geometriska medelvärde är √(4 × 9) = √36 = 6, så en triangel med dessa projektioner har höjden 6.",
            },
            {
              "kind": "p",
              "text": "Jämför med det vanliga aritmetiska medelvärdet: (4 + 9) / 2 = 6,5. De två medelvärdena skiljer sig åt, och bara 6 är den korrekta höjden. Det aritmetiska medelvärdet medelvärdesbildar genom addition, medan det geometriska medelvärdet medelvärdesbildar genom multiplikation, vilket passar längder som skalar tillsammans snarare än adderar.",
            },
            {
              "kind": "p",
              "text": "Geometriskt innebär den medelproportionella relationen h² = pq att höjden förhåller sig till varje projektion på samma sätt som projektionerna förhåller sig till varandra. Denna symmetri är vad som gör de två mindre trianglarna likformiga, och det är anledningen till att höjden alltid ligger mellan de två projektionerna i storlek, aldrig lika med det aritmetiska medelvärdet om inte p är lika med q.",
            },
          ],
        },
        "sec-properties": {
          "h2": "Viktiga egenskaper hos höjden i en rätvinklig triangel",
          "blocks": [
            {
              "kind": "p",
              "text": "Sju egenskaper beskriver höjden mot hypotenusan. Tillsammans ger de en pålitlig intuition för vilka höjdvärden som är möjliga och hur de beter sig.",
            },
            {
              "kind": "list",
              "items": [
                "Höjden mot hypotenusan är vinkelrät mot den, så den är det kortaste avståndet från det rätvinkliga hörnet till hypotenusan.",
                "Höjden delar triangeln i två mindre trianglar, var och en likformig med den ursprungliga och med varandra.",
                "Höjden är kortare än båda kateterna; ingen katet kan vara den kortaste vägen till hypotenusan.",
                "Höjden är kortare än själva hypotenusan, eftersom en vinkelrät sträcka är den kortaste vägen.",
                "Höjden är det geometriska medelvärdet av de två hypotenusaprojektionerna, [[h=\\sqrt{pq}]].",
                "För en given hypotenusa är höjden störst när de två projektionerna är lika, vilket inträffar när de två kateterna är lika.",
                "Att skala varje sidlängd med samma faktor skalar höjden med den faktorn; fördubbla triangeln, fördubbla höjden.",
              ],
            },
            {
              "kind": "p",
              "text": "Den sjätte egenskapen har en exakt gräns: höjden kan aldrig överstiga halva hypotenusan, [[h \\leq \\frac{c}{2}]], med likhet endast när kateterna är lika. En 45-45-90-triangel med hypotenusan 10 har höjden exakt 5, det maximala; en 6-8-10-triangel med samma hypotenusa når bara 4,8, som diagrammet visar.",
            },
          ],
          "image": {
            "src": "altitude-equal-vs-unequal.svg",
            "alt": "Två rätvinkliga trianglar som delar hypotenusan 10: en 45-45-90-triangel med höjden 5 och en 6-8-10-liknande triangel med höjden 4",
            "caption": "Samma hypotenusa 10: lika projektioner ger den högsta höjden, 5.",
          },
        },
        "sec-verify": {
          "h2": "Så kontrollerar du om ditt höjdresultat är korrekt",
          "blocks": [
            {
              "kind": "p",
              "text": "Tre oberoende kontroller fångar beräkningsfel. Använd minst en av dem när ett höjdresultat är viktigt.",
            },
            {
              "kind": "h3",
              "text": "Kontroll 1: Triangelarea",
            },
            {
              "kind": "p",
              "text": "Jämför ab/2 med ch/2 med din höjd. För 3-4-5-triangeln med h = 2,4: ab/2 = (3 × 4)/2 = 6, och ch/2 = (5 × 2,4)/2 = 6. Matchande areor bekräftar att höjden passar sidorna.",
            },
            {
              "kind": "h3",
              "text": "Kontroll 2: Geometriskt medelvärde",
            },
            {
              "kind": "p",
              "text": "Verifiera [[h^2=pq]] när projektionerna är kända. Med p = 9 och q = 16: h² = 12² = 144, och pq = 9 × 16 = 144. Likhet innebär att höjden stämmer överens med hur hypotenusan delas.",
            },
            {
              "kind": "h3",
              "text": "Kontroll 3: Pythagoras sats",
            },
            {
              "kind": "p",
              "text": "Bekräfta [[a^2+b^2=c^2]] för de givna sidorna: 9 + 16 = 25 i 3-4-5-fallet. Denna kontroll validerar sidlängderna, inte höjden direkt, men en felaktig sidinmatning är den vanligaste orsaken till att ett höjdresultat misslyckas med de två andra kontrollerna.",
            },
            {
              "kind": "p",
              "text": "Kör varje kontroll i konsekventa enheter. Att blanda centimeter med meter bryter areakontrollen tyst, så konvertera först och verifiera sedan.",
            },
          ],
        },
        "sec-mistakes": {
          "h2": "Vanliga misstag vid beräkning av höjd",
          "blocks": [
            {
              "kind": "p",
              "text": "Tio fel dyker upp gång på gång. Varje är lätt att upptäcka när du vet dess signatur.",
            },
            {
              "kind": "steps",
              "steps": [
                "Att blanda ihop höjd med en katet. Höjden möter hypotenusan i en rät vinkel; en katet möter den andra kateten i den räta vinkeln. I en 3-4-5-triangel är h = 2,4, inte 3 eller 4.",
                "Att välja fel kalkylatorläge. Att mata in kateter och en hypotenusa i läget Höjd i kvadrat, som förväntar sig projektioner, ger nonsens. Matcha läget mot måtten.",
                "Att blanda ihop projektioner med kateter. Att mata in a = 3 och b = 4 som p och q beräknar √(12) ≈ 3,46, vilket inte är höjden. Projektioner är hypotenusasegment.",
                "Att använda fel hypotenusa. Att dividera ab med en katet istället för hypotenusan, till exempel 12/4 = 3, överdriver höjden. Divisorn måste vara den längsta sidan, c.",
                "Att glömma kvadratroten i projektionsformeln. Att stanna vid h² = 144 ger 144 som höjd; det verkliga svaret är h = 12.",
                "Att blanda centimeter och meter. Med a = 30 cm och c = 0,5 m ger insättning av 0,5 direkt en felaktig höjd. Konvertera först: 50 cm.",
                "Att mata in ogiltiga sidlängder. Sidor som 2, 3, 10 uppfyller inte Pythagoras sats, så ingen rätvinklig triangel finns och ingen höjd är definierad.",
                "Att avrunda för tidigt. Att avrunda 60/13 till 4,6 före ett ytterligare steg för felet vidare. Behåll bråket och avrunda bara det slutliga svaret.",
                "Att behandla h² som den slutliga höjden. Om en beräkning slutar med h² = 36 är höjden 6, inte 36.",
                "Att tillämpa rätvinkliga formler på en godtycklig triangel. Formlerna här kräver en rät vinkel; för andra trianglar skiljer sig höjdsambanden.",
              ],
            },
          ],
        },
        "sec-applications": {
          "h2": "Verkliga tillämpningar av höjden i en rätvinklig triangel",
          "blocks": [
            {
              "kind": "p",
              "text": "Höjdberäkningar stöder allt arbete som bygger på rätvinklig geometri. I geometriundervisning ger höjdsatsen eleverna en första smak av likformighetsbevis och geometriska medelvärden. Teknisk ritning och geometrisk design använder höjden för att placera vinkelräta linjer när triangulära paneler eller konsolformer läggs ut.",
            },
            {
              "kind": "p",
              "text": "Lantmäterigeometri använder rätvinkliga relationer vid kartering av tomter med vinkelräta offset, och byggplaneringsmodeller använder dem när en rätvinklig ram måste möta en vägg i en rät vinkel. Areaberäkningar går åt andra hållet: från en känd höjd och hypotenusa återställer [[h=\\frac{2A}{c}]] höjden utan att mäta kateterna.",
            },
            {
              "kind": "p",
              "text": "Detta är hypotetiska geometriska skisser, inte ingenjörsprocedurer. Verkligt lantmäteri och konstruktionsarbete kräver lämpliga mätningar, designantaganden och professionella standarder; höjdsatsen beskriver geometrin, den ersätter aldrig professionella metoder.",
            },
          ],
        },
        "sec-practice": {
          "h2": "Övningsuppgifter med svar",
          "blocks": [
            {
              "kind": "p",
              "text": "Fem uppgifter använder värden som inte syns i huvudexemplen. Lös varje, kontrollera sedan svaren nedan.",
            },
            {
              "kind": "h3",
              "text": "Uppgift 1: Nybörjare baserad på sidor",
            },
            {
              "kind": "p",
              "text": "En rätvinklig triangel har kateterna a = 9 cm och b = 40 cm med hypotenusan c = 41 cm. Hitta höjden mot hypotenusan.",
            },
            {
              "kind": "h3",
              "text": "Uppgift 2: Nybörjare baserad på projektioner",
            },
            {
              "kind": "p",
              "text": "Höjden i en rätvinklig triangel delar hypotenusan i p = 16 m och q = 36 m. Hitta höjden.",
            },
            {
              "kind": "h3",
              "text": "Uppgift 3: Decimalmått",
            },
            {
              "kind": "p",
              "text": "En rätvinklig triangel har a = 0,6 m, b = 0,8 m, c = 1,0 m. Hitta höjden mot hypotenusan.",
            },
            {
              "kind": "h3",
              "text": "Uppgift 4: Saknad sida",
            },
            {
              "kind": "p",
              "text": "En rätvinklig triangel har kateten a = 7 in och hypotenusan c = 25 in. Hitta höjden mot hypotenusan.",
            },
            {
              "kind": "h3",
              "text": "Uppgift 5: Trädgårdslandets area",
            },
            {
              "kind": "p",
              "text": "Ett rätvinkligt trädgårdsland har arean A = 96 m² och hypotenusan 20 m. Hitta höjden mot hypotenusan.",
            },
            {
              "kind": "h3",
              "text": "Svar på övningsuppgifterna",
            },
            {
              "kind": "p",
              "text": "Uppgift 1: h = (9 × 40) / 41 = 360/41 cm ≈ 8,780 cm. Bekräfta först sidorna: 9² + 40² = 81 + 1600 = 1681 = 41², så triangeln är giltig.",
            },
            {
              "kind": "p",
              "text": "Uppgift 2: h = √(16 × 36) = √576 = 24 m. Höjden ligger mellan de två projektionerna, som det geometriska medelvärdet måste.",
            },
            {
              "kind": "p",
              "text": "Uppgift 3: h = (0,6 × 0,8) / 1,0 = 0,48 / 1,0 = 0,48 m. Decimaler behöver samma behandling som heltal.",
            },
            {
              "kind": "p",
              "text": "Uppgift 4: Återställ den saknade kateten: b = √(25² − 7²) = √(625 − 49) = √576 = 24 in. Sedan h = (7 × 24) / 25 = 168/25 in ≈ 6,72 in.",
            },
            {
              "kind": "p",
              "text": "Uppgift 5: Använd areavägen: h = 2A/c = (2 × 96) / 20 = 192 / 20 = 9,6 m. Inga katetmått behövdes.",
            },
          ],
        },
        "sec-conclusion": {
          "h2": "Relaterade rätvinkliga triangelkalkylatorer",
          "blocks": [
            {
              "kind": "p",
              "text": "Den här guiden täckte båda höjdlägena: sidlängder och hypotenusaprojektioner. Om du redan vet vilka mått du har går de specialiserade verktygen djupare: <a href=\"/right-triangle-altitude-from-sides-calculator/\">kalkylatorn för höjd från sidor</a> och <a href=\"/right-triangle-altitude-from-projections-calculator/\">kalkylatorn för höjd från projektioner</a>. <a href=\"/right-triangle-projection-calculator/\">Projektionskalkylatorn</a> hittar själva p och q när bara sidorna är kända.",
            },
          ],
        },
      },
      "faqHeading": "Vanliga frågor",
      "faqs": [
        {
          "question": "Vad är höjden i en rätvinklig triangel?",
          "answer": "Höjden mot hypotenusan är den vinkelräta sträckan från det rätvinkliga hörnet till hypotenusan. Det är den tredje höjden i den rätvinkliga triangeln, skild från de två kateterna, och den delar hypotenusan i projektionerna p och q.",
        },
        {
          "question": "Hur beräknar jag höjden i en rätvinklig triangel?",
          "answer": "Använd sidformeln [[h=\\frac{ab}{c}]] när kateterna och hypotenusan är kända, eller projektionsformeln [[h=\\sqrt{pq}]] när hypotenusasegmenten är kända. Kalkylatorn tillämpar det läge som matchar dina mått.",
        },
        {
          "question": "Vad är höjdformeln med tre sidor?",
          "answer": "Med kateterna a och b och hypotenusan c är höjden [[h=\\frac{ab}{c}]]. Multiplicera de två kateterna och dividera med hypotenusan. För en 3-4-5-triangel är h = (3 × 4) / 5 = 2,4.",
        },
        {
          "question": "Hur beräknar jag höjden från projektioner?",
          "answer": "Höjdsatsen säger [[h^2=pq]], så ta kvadratroten: [[h=\\sqrt{pq}]]. För p = 9 och q = 16 är h = √(9 × 16) = √144 = 12. Projektionerna är hypotenusasegment, inte kateterna.",
        },
        {
          "question": "Kan jag beräkna höjden med bara två sidor?",
          "answer": "Ja, genom att först återställa den tredje sidan. Med båda kateterna, hitta [[c=\\sqrt{a^2+b^2}]]; med en katet och hypotenusan, hitta [[b=\\sqrt{c^2-a^2}]]. Tillämpa sedan [[h=\\frac{ab}{c}]] som vanligt.",
        },
        {
          "question": "Är altitude och height samma sak?",
          "answer": "I rätvinkliga trianglar överlappar termerna ofta, men altitude har den precisa betydelsen av en vinkelrät sträcka från ett hörn till den motstående sidan. På den här sidan betyder höjd alltid den vinkelräta sträckan från det rätvinkliga hörnet till hypotenusan.",
        },
        {
          "question": "Är höjden alltid kortare än hypotenusan?",
          "answer": "Ja. Höjden är det kortaste avståndet från det rätvinkliga hörnet till hypotenusan, och hypotenusan är längre än varje sådan sträcka. Den är också kortare än båda kateterna.",
        },
        {
          "question": "Kan höjden vara lika med en hypotenusaprojektion?",
          "answer": "Ja, när projektionerna är lika. Om p = q är [[h=\\sqrt{p \\times p}=p]], så är höjden lika med varje projektion. Detta händer i likbenta rätvinkliga trianglar, där höjden också är halva hypotenusan.",
        },
        {
          "question": "Hur relaterar satsen om det geometriska medelvärdet till höjden?",
          "answer": "Satsen om det geometriska medelvärdet är ett annat namn för höjdsatsen: [[h=\\sqrt{pq}]] säger att höjden är det geometriska medelvärdet av hypotenusaprojektionerna. Likformigheten hos de två mindre trianglarna bevisar det.",
        },
        {
          "question": "Hur kontrollerar jag min höjdberäkning?",
          "answer": "Jämför de två areaformlerna ab/2 och ch/2; de måste stämma överens. Om projektionerna är kända, bekräfta [[h^2=pq]]. Verifiera också [[a^2+b^2=c^2]] för att bekräfta att sidorna beskriver en giltig rätvinklig triangel.",
        },
        {
          "question": "Kan jag använda den här kalkylatorn för en icke-rätvinklig triangel?",
          "answer": "Nej. Båda formlerna kräver en rät vinkel: areaargumentet behöver vinkelräta kateter, och höjdsatsen behöver den rätvinkliga likformigheten. För andra trianglar är höjdsambanden annorlunda.",
        },
        {
          "question": "Vilket kalkylatorläge ska jag välja?",
          "answer": "Välj Höjd mot hypotenusan när du känner till de två kateterna och hypotenusan. Välj Höjd i kvadrat när du känner till de två hypotenusaprojektionerna p och q. Att matcha läget mot dina kända mått är den enda inställning som spelar roll.",
        },
      ],
      "relatedHeading": "Utforska relaterade rätvinkliga triangelkalkylatorer",
      "relatedIntro": "Välj det verktyg som matchar de mått du redan känner.",
      "relatedItems": [
        "Kalkylator för höjd från sidor",
        "Kalkylator för höjd från projektioner",
        "Areakalkylator",
        "Sidkalkylator",
        "Projektionskalkylator",
      ],
    },
};
