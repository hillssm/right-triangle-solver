// fiveTwelveThirteenGuideTranslations.bsv.ts: 5-12-13 Triangle
// Guide (Page 43 of 45) translation.
export const FIVETWELVETHIRTEEN_B6_SV = {
  "sv": {
      "meta": {
        "title": "5-12-13-triangelkalkylator – Skala sidor, area och omkrets",
        "description": "Skala en 5-12-13-triangel: ange en positiv skalfaktor k för att få sidorna 5k, 12k och 13k, samt arean 30k i kvadrat och omkretsen 30k.",
        "primaryKeyword": "5-12-13 Triangle Calculator",
        "slug": "5-12-13-triangle-calculator",
      },
      "tocHeading": "Avsnittsnavigering",
      "tocItems": {
        "sec-intro": "5-12-13-triangelkalkylator",
        "sec-calculate": "Skala en 5-12-13-triangel och beräkna dess mått",
        "sec-what": "Vad är en 5-12-13-triangel?",
        "sec-pythagorean": "Varför är 5-12-13 en pythagoreisk trippel?",
        "sec-sides": "De tre sidorna i en 5-12-13-triangel",
        "sec-ratio": "Sidoförhållandet 5-12-13",
        "sec-scale-factor": "Vad är skalfaktorn i en 5-12-13-triangel?",
        "sec-leg-a": "Formel för att beräkna den kortare kateten",
        "sec-leg-b": "Formel för att beräkna den längre kateten",
        "sec-hypotenuse": "Formel för att beräkna hypotenusan",
        "sec-area": "Så beräknar du arean av en skalad 5-12-13-triangel",
        "sec-perimeter": "Så beräknar du omkretsen av en skalad 5-12-13-triangel",
        "sec-find-k": "Så hittar du skalfaktorn utifrån en känd sida",
        "sec-step-example": "Steg för steg-exempel på skalning av en 5-12-13-triangel",
        "sec-examples": "Genomräknade exempel med olika skalfaktorer",
        "sec-right-angle": "Varför behåller 5-12-13-triangeln alltid en 90-graders vinkel?",
        "sec-euclid": "Hur genereras 5-12-13-trippeln med Euklides formel?",
        "sec-applications": "Tillämpningar av 5-12-13-triangeln inom geometri och mätning",
        "sec-vs-triples": "Skillnaden mellan 5-12-13 och andra pythagoreiska tripplar",
        "sec-vs-special": "Skillnaden mellan 5-12-13, 45-45-90 och 30-60-90-trianglar",
        "sec-mistakes": "Vanliga misstag när du använder 5-12-13-triangelkalkylatorn",
        "sec-verify": "Så verifierar du en skalad 5-12-13-triangel",
        "sec-practice": "Övningsuppgifter med svar",
        "sec-related": "Relaterade kalkylatorer för rätvinkliga trianglar",
        "sec-faq": "Vanliga frågor",
      },
      "sections": {
        "sec-intro": {
          "h2": "5-12-13-triangelkalkylator",
          "blocks": [
            {
              "kind": "p",
              "text": "Skala en 5-12-13-triangel och hitta dess sidor, area och omkrets.",
            },
            {
              "kind": "p",
              "text": "En 5-12-13-triangel är en rätvinklig triangel vars sidlängder följer förhållandet [[5 : 12 : 13]]. Den är en pythagoreisk trippel, eftersom dess heltalssidor uppfyller Pythagoras sats: [[5^2 + 12^2 = 13^2]], eftersom [[25 + 144 = 169]]. Sidan med längden 13 är hypotenusan, och sidorna med längden 5 och 12 är kateterna som möts vid den räta vinkeln.",
            },
            {
              "kind": "p",
              "text": "Kalkylatorn skalar triangeln med en positiv skalfaktor [[k]], så de skalade sidorna blir [[a = 5k]], [[b = 12k]] och [[c = 13k]]. Den beräknar också arean, [[A = 30k^2]], och omkretsen, [[P = 30k]], så en enda inmatning ger alla fem resultat. Använd <a href=\"/right-triangle-calculator/\">kalkylatorn för rätvinkliga trianglar</a> för en allmän rätvinklig triangel.",
            },
            {
              "kind": "p",
              "text": "Till exempel, med [[k = 2]] blir sidorna [[a = 10]], [[b = 24]] och [[c = 26]], arean är [[A = 120]] kvadratenheter och omkretsen är [[P = 60]] enheter.",
            },
          ],
        },
        "sec-calculate": {
          "h2": "Skala en 5-12-13-triangel och beräkna dess mått",
          "blocks": [
            {
              "kind": "p",
              "text": "En inmatning, fem resultat: ange k och läs av den skalade triangeln.",
            },
            {
              "kind": "p",
              "text": "Kalkylatorn har ett enda läge, Skala 5-12-13-triangel. Ange en positiv skalfaktor [[k]] i inmatningsfältet och tryck på Beräkna. Verktyget multiplicerar 5, 12 och 13 med [[k]] och beräknar sedan arean och omkretsen utifrån de skalade sidorna. Tryck på Återställ för att rensa inmatningen och börja om.",
            },
            {
              "kind": "p",
              "text": "Skalfaktorn är det tal som sträcker ut eller krymper den ursprungliga triangeln. Med [[k = 1]] får du den ursprungliga triangeln 5, 12, 13. Med [[k]] större än 1 växer triangeln, och med [[k]] mellan 0 och 1 krymper den, men formen ändras aldrig.",
            },
            {
              "kind": "p",
              "text": "Alla resultat kommer från samma [[k]], så de fem utdata stämmer alltid överens med varandra. Om [[k]] är noll eller negativt accepterar inte kalkylatorn det, eftersom noll ger en degenererad figur och negativa värden inte kan beskriva sidlängder.",
            },
          ],
          "table": {
            "headers": [
              "Mått",
              "Formel",
              "Resultat",
            ],
            "rows": [
              [
                "Kortare katet",
                "5k",
                "Skalad sida a",
              ],
              [
                "Längre katet",
                "12k",
                "Skalad sida b",
              ],
              [
                "Hypotenusa",
                "13k",
                "Skalad sida c",
              ],
              [
                "Area",
                "30k²",
                "Triangelns area",
              ],
              [
                "Omkrets",
                "30k",
                "Triangelns omkrets",
              ],
            ],
          },
        },
        "sec-what": {
          "h2": "Vad är en 5-12-13-triangel?",
          "blocks": [
            {
              "kind": "p",
              "text": "En rätvinklig triangel med heltalssidor i förhållandet 5:12:13.",
            },
            {
              "kind": "p",
              "text": "En 5-12-13-triangel är en rätvinklig triangel vars tre sidor mäter 5, 12 och 13 enheter, eller vilken uppsättning längder som helst i samma proportion. Den längsta sidan, 13, är hypotenusan och ligger mittemot 90-gradersvinkeln. Sidorna med längden 5 och 12 är kateterna, och de möts vid den räta vinkeln.",
            },
            {
              "kind": "p",
              "text": "Den kallas en pythagoreisk trippel eftersom de tre heltalen uppfyller [[5^2 + 12^2 = 13^2]]. Den enda kontrollen är det som gör triangeln till en rätvinklig triangel, inte en ritning eller en mätning. Skala sidorna med vilken positiv faktor som helst och förhållandet förblir 5:12:13, så den förstorade eller förminskade triangeln är fortfarande en rätvinklig triangel med samma form.",
            },
          ],
          "image": {
            "src": "five-twelve-thirteen-main.svg",
            "alt": "Märkt rätvinklig 5-12-13-triangel ABC med kortare katet a lika med 5, längre katet b lika med 12, hypotenusa c lika med 13 och en rätvinkelmarkering",
            "caption": "Triangel ABC: kateterna a = 5 och b = 12 möts vid den räta vinkeln, och hypotenusan är c = 13.",
          },
        },
        "sec-pythagorean": {
          "h2": "Varför är 5-12-13 en pythagoreisk trippel?",
          "blocks": [
            {
              "kind": "p",
              "text": "Kvadraterna på kateterna summerar till kvadraten på hypotenusan.",
            },
            {
              "kind": "p",
              "text": "[[[a^2 + b^2 = c^2]]]",
            },
            {
              "kind": "p",
              "text": "[[[5^2 + 12^2 = 13^2]]]",
            },
            {
              "kind": "p",
              "text": "[[[25 + 144 = 169]]]",
            },
            {
              "kind": "p",
              "text": "[[[169 = 169]]]",
            },
            {
              "kind": "p",
              "text": "De två sidorna stämmer överens, så ekvationen gäller exakt. Det är Pythagoras sats i praktiken: när kvadraterna på de två kortare sidorna summerar till kvadraten på den längsta sidan måste vinkeln mittemot den längsta sidan vara en rät vinkel.",
            },
            {
              "kind": "p",
              "text": "Talet 13 måste vara hypotenusan eftersom det är den längsta sidan, och hypotenusan ligger alltid mittemot 90-gradersvinkeln. Talen 5 och 12 är kateterna. Eftersom 5, 12 och 13 är heltal är trippeln praktisk för läxor, prov och mätarbete där exakta svar är viktiga.",
            },
            {
              "kind": "p",
              "text": "Denna kontroll är omvändningen av Pythagoras sats: satsen säger att en rätvinklig triangel uppfyller [[a^2 + b^2 = c^2]], och omvändningen säger att varje triangel vars sidor uppfyller ekvationen måste innehålla en rät vinkel. De flesta rätvinkliga trianglar har inte enbart heltalssidor, vilket är det som gör en trippel speciell.",
            },
          ],
          "image": {
            "src": "five-twelve-thirteen-pythagoras.svg",
            "alt": "Diagram över Pythagoras sats för en 5-12-13-triangel som visar att 25 plus 144 är lika med 169",
            "caption": "25 + 144 = 169, så vinkeln mittemot 13 är 90 grader.",
          },
        },
        "sec-sides": {
          "h2": "De tre sidorna i en 5-12-13-triangel",
          "blocks": [
            {
              "kind": "p",
              "text": "Tre sidor, tre uppgifter: två kateter och en hypotenusa.",
            },
            {
              "kind": "p",
              "text": "Den kortare kateten [[a]] mäter 5 i den grundläggande triangeln. Den ligger mittemot den mindre spetsiga vinkeln, cirka 22.62 grader, och det är den sida som de flesta elever upptäcker först eftersom den är den kortaste av de tre.",
            },
            {
              "kind": "p",
              "text": "Den längre kateten [[b]] mäter 12 i den grundläggande triangeln. Den ligger mittemot den större spetsiga vinkeln, cirka 67.38 grader. Hypotenusan [[c]] mäter 13, den längsta sidan, och den ligger mittemot 90-gradersvinkeln. När triangeln skalas med [[k]] förblir beteckningarna i samma ordning: [[a = 5k]], [[b = 12k]] och [[c = 13k]].",
            },
          ],
          "table": {
            "headers": [
              "Sida",
              "Längd i den grundläggande triangeln",
              "Position",
            ],
            "rows": [
              [
                "Kortare katet a",
                "5",
                "Mittemot 22.62°-vinkeln",
              ],
              [
                "Längre katet b",
                "12",
                "Mittemot 67.38°-vinkeln",
              ],
              [
                "Hypotenusa c",
                "13",
                "Mittemot 90°-vinkeln",
              ],
            ],
          },
        },
        "sec-ratio": {
          "h2": "Sidoförhållandet 5-12-13",
          "blocks": [
            {
              "kind": "p",
              "text": "Förhållandet 5:12:13 ändras aldrig, oavsett hur stor triangeln blir.",
            },
            {
              "kind": "p",
              "text": "[[[5 : 12 : 13]]]",
            },
            {
              "kind": "p",
              "text": "Den kortare kateten motsvarar 5 proportionella enheter, den längre kateten 12 och hypotenusan 13.",
            },
            {
              "kind": "p",
              "text": "Skalning multiplicerar varje del med samma [[k]], så förhållandet blir [[[5k : 12k : 13k]]] med samma form under ytan. Uppsättningarna 5, 12, 13; 10, 24, 26; 15, 36, 39; 20, 48, 52; och 25, 60, 65 beskriver alla samma triangel i olika storlekar, eftersom varje uppsättning är det grundläggande förhållandet multiplicerat med 1, 2, 3, 4 och 5.",
            },
            {
              "kind": "p",
              "text": "Det är därför förhållandet är triangelns verkliga identitet. Två trianglar med samma förhållande är likformiga: samma vinklar, samma form, olika storlek.",
            },
            {
              "kind": "p",
              "text": "För att testa en uppsättning mätvärden dividerar du alla tre talen med deras största gemensamma delare och ser om 5, 12, 13 blir kvar. För 10, 24, 26 är delaren 2, och division ger 5, 12, 13. För 15, 36, 39 är delaren 3, och division ger samma trippel. Om divisionen lämnar kvar några andra tre tal är uppsättningen inte en 5-12-13-triangel.",
            },
          ],
          "image": {
            "src": "five-twelve-thirteen-scaled.svg",
            "alt": "Tre likformiga trianglar märkta 5-12-13, 10-24-26 och 15-36-39 i ökande storlek",
            "caption": "Samma proportioner, samma vinklar: k = 1, k = 2 och k = 3.",
          },
        },
        "sec-scale-factor": {
          "h2": "Vad är skalfaktorn i en 5-12-13-triangel?",
          "blocks": [
            {
              "kind": "p",
              "text": "k är multiplikatorn som bestämmer triangelns storlek.",
            },
            {
              "kind": "p",
              "text": "[[[a = 5k,\\quad b = 12k,\\quad c = 13k]]]",
            },
            {
              "kind": "p",
              "text": "En skalfaktor multiplicerar alla tre ursprungliga sidlängder med samma positiva tal.",
            },
            {
              "kind": "p",
              "text": "Med [[k = 1]] får du den ursprungliga triangeln. Med [[k]] större än 1 växer triangeln, och med [[k]] mellan 0 och 1 krymper den. Skalfaktorn ändrar storlek, inte form: varje vinkel förblir densamma och varje sida förblir i proportion.",
            },
            {
              "kind": "p",
              "text": "Samma faktor måste tillämpas på alla tre sidor. Att bara skala en eller två sidor bryter förhållandet, bryter Pythagoras-kontrollen och resultatet är inte längre en 5-12-13-triangel.",
            },
            {
              "kind": "p",
              "text": "En skalfaktor kan också läsas som ett förhållande mellan motsvarande sidor: dividera en sida i den nya triangeln med motsvarande sida i den ursprungliga, och svaret är [[k]]. Till exempel ger en längre katet på 36 mot ursprungliga 12 [[k = 36 / 12 = 3]]. Det är samma [[k]] som kalkylatorn frågar efter, men funnet från en mätning i stället för valt i förväg.",
            },
          ],
          "table": {
            "headers": [
              "Skalfaktor",
              "Effekt",
              "Exempelsidor",
            ],
            "rows": [
              [
                "k = 1",
                "Ursprunglig triangel",
                "5, 12, 13",
              ],
              [
                "k = 2",
                "Fördubblad",
                "10, 24, 26",
              ],
              [
                "k = 0.5",
                "Halverad",
                "2.5, 6, 6.5",
              ],
              [
                "k = 10",
                "Tio gånger större",
                "50, 120, 130",
              ],
            ],
          },
          "image": {
            "src": "five-twelve-thirteen-scale-factor.svg",
            "alt": "Skalad 5-12-13-triangel med k lika med 2, som visar sidorna a lika med 10, b lika med 24 och c lika med 26",
            "caption": "Med k = 2 blir sidorna 10, 24 och 26.",
          },
        },
        "sec-leg-a": {
          "h2": "Formel för att beräkna den kortare kateten",
          "blocks": [
            {
              "kind": "p",
              "text": "Den kortare kateten är fem gånger skalfaktorn.",
            },
            {
              "kind": "p",
              "text": "[[[a = 5k]]]",
            },
            {
              "kind": "p",
              "text": "Använd [[k = 4]]: [[[a = 5 \\times 4 = 20]]]",
            },
            {
              "kind": "p",
              "text": "Den kortare kateten är 20 enheter lång. Den är den minsta sidan vid varje skalfaktor, eftersom 5 är det minsta talet i förhållandet.",
            },
          ],
        },
        "sec-leg-b": {
          "h2": "Formel för att beräkna den längre kateten",
          "blocks": [
            {
              "kind": "p",
              "text": "Den längre kateten är tolv gånger skalfaktorn.",
            },
            {
              "kind": "p",
              "text": "[[[b = 12k]]]",
            },
            {
              "kind": "p",
              "text": "Använd [[k = 4]]: [[[b = 12 \\times 4 = 48]]]",
            },
            {
              "kind": "p",
              "text": "Den längre kateten är 48 enheter lång. Den är längre än den kortare kateten eftersom 12 är större än 5, men den är fortfarande kortare än hypotenusan vid varje positiv skalfaktor.",
            },
          ],
        },
        "sec-hypotenuse": {
          "h2": "Formel för att beräkna hypotenusan",
          "blocks": [
            {
              "kind": "p",
              "text": "Hypotenusan är tretton gånger skalfaktorn.",
            },
            {
              "kind": "p",
              "text": "[[[c = 13k]]]",
            },
            {
              "kind": "p",
              "text": "Använd [[k = 4]]: [[[c = 13 \\times 4 = 52]]]",
            },
            {
              "kind": "p",
              "text": "Hypotenusan är 52 enheter lång. Den förblir den längsta sidan vid varje positiv skalfaktor, eftersom 13 är det största talet i förhållandet och hypotenusan alltid ligger mittemot den räta vinkeln.",
            },
          ],
        },
        "sec-area": {
          "h2": "Så beräknar du arean av en skalad 5-12-13-triangel",
          "blocks": [
            {
              "kind": "p",
              "text": "Hälften av produkten av de två kateterna ger arean.",
            },
            {
              "kind": "p",
              "text": "[[[A = \\frac{ab}{2}]]]",
            },
            {
              "kind": "p",
              "text": "Sätt in de skalade sidorna: [[[A = \\frac{(5k)(12k)}{2}]]]",
            },
            {
              "kind": "p",
              "text": "Förenkla: [[[A = \\frac{60k^2}{2}]]]",
            },
            {
              "kind": "p",
              "text": "[[[\\boxed{A = 30k^2}]]]",
            },
            {
              "kind": "p",
              "text": "De två kateterna är basen och höjden, eftersom de möts vid den räta vinkeln. Att halvera deras produkt ger triangelns area. Skalfaktorn är kvadrerad, så en fördubbling av [[k]] gör arean fyra gånger så stor. Area mäts i kvadratenheter.",
            },
            {
              "kind": "p",
              "text": "Använd [[k = 3]]: [[[A = 30(3^2) = 270]]] kvadratenheter.",
            },
            {
              "kind": "p",
              "text": "Hypotenusan ingår aldrig i areaformeln, eftersom arean av en rätvinklig triangel kommer från dess två kateter. Som kontroll med [[k = 2]] är kateterna 10 och 24, så [[A = (10 \\times 24) / 2 = 120]] kvadratenheter, vilket stämmer med [[A = 30(2^2) = 120]].",
            },
          ],
          "image": {
            "src": "five-twelve-thirteen-area.svg",
            "alt": "Areadiagram av en skalad 5-12-13-triangel med bas 5k, höjd 12k och area 30k i kvadrat",
            "caption": "Med k = 2 är arean 120 kvadratenheter.",
          },
        },
        "sec-perimeter": {
          "h2": "Så beräknar du omkretsen av en skalad 5-12-13-triangel",
          "blocks": [
            {
              "kind": "p",
              "text": "Addera alla tre skalade sidor för att få omkretsen.",
            },
            {
              "kind": "p",
              "text": "[[[P = a + b + c]]]",
            },
            {
              "kind": "p",
              "text": "Sätt in: [[[P = 5k + 12k + 13k]]]",
            },
            {
              "kind": "p",
              "text": "[[[\\boxed{P = 30k}]]]",
            },
            {
              "kind": "p",
              "text": "Varje sida räknas, så addera alla tre. Omkretsen växer i direkt proportion till [[k]]: en fördubbling av skalfaktorn fördubblar omkretsen. Omkrets mäts i linjära enheter, inte kvadratenheter.",
            },
            {
              "kind": "p",
              "text": "Använd [[k = 3]]: [[[P = 30 \\times 3 = 90]]] enheter.",
            },
            {
              "kind": "p",
              "text": "Som kontroll med [[k = 2]] adderar du de skalade sidorna direkt: [[P = 10 + 24 + 26 = 60]] enheter, vilket stämmer med [[P = 30 \\times 2 = 60]]. Omkrets svarar på en annan fråga än area: den mäter avståndet runt triangeln, inte utrymmet inuti den.",
            },
          ],
          "image": {
            "src": "five-twelve-thirteen-perimeter.svg",
            "alt": "Omkretsdiagram av en skalad 5-12-13-triangel med sidorna 5k, 12k och 13k som summerar till 30k",
            "caption": "Med k = 2 är omkretsen 60 enheter.",
          },
        },
        "sec-find-k": {
          "h2": "Så hittar du skalfaktorn utifrån en känd sida",
          "blocks": [
            {
              "kind": "p",
              "text": "Dividera en känd sida med dess förhållandetal för att hitta k för hand.",
            },
            {
              "kind": "p",
              "text": "Kalkylatorn tar [[k]] direkt, men du kan själv räkna ut [[k]] när du redan känner till en sida. Dividera den kända sidan med det matchande talet från förhållandet 5:12:13.",
            },
            {
              "kind": "p",
              "text": "Om den kortare kateten är känd: [[[k = \\frac{a}{5}]]]",
            },
            {
              "kind": "p",
              "text": "Om den längre kateten är känd: [[[k = \\frac{b}{12}]]]",
            },
            {
              "kind": "p",
              "text": "Om hypotenusan är känd: [[[k = \\frac{c}{13}]]]",
            },
            {
              "kind": "p",
              "text": "Exempel 1: med [[a = 20]], [[k = 20 / 5 = 4]]. Exempel 2: med [[b = 36]], [[k = 36 / 12 = 3]]. Exempel 3: med [[c = 65]], [[k = 65 / 13 = 5]]. Mata in det k du hittat i kalkylatorn för att få de andra sidorna, arean och omkretsen.",
            },
            {
              "kind": "p",
              "text": "Ibland är [[k]] inte ett heltal. Med [[b = 30]], till exempel, [[k = 30 / 12 = 2.5]], och de andra sidorna är [[a = 5 \\times 2.5 = 12.5]] och [[c = 13 \\times 2.5 = 32.5]]. När du räknar ut [[k]] från två olika kända sidor måste båda svaren stämma överens; om de inte gör det bildar mätvärdena inte en 5-12-13-triangel.",
            },
          ],
        },
        "sec-step-example": {
          "h2": "Steg för steg-exempel på skalning av en 5-12-13-triangel",
          "blocks": [
            {
              "kind": "p",
              "text": "Skalfaktor k = 2, genomräknad från början till slut.",
            },
            {
              "kind": "p",
              "text": "Börja med [[k = 2]] och hitta varje mått i den skalade triangeln, en formel i taget. Varje steg använder en formel från avsnitten ovan, och sammanfattningstabellen i slutet samlar resultaten.",
            },
            {
              "kind": "steps",
              "steps": [
                "Hitta den kortare kateten: [[a = 5k = 5 \\times 2 = 10]].",
                "Hitta den längre kateten: [[b = 12k = 12 \\times 2 = 24]].",
                "Hitta hypotenusan: [[c = 13k = 13 \\times 2 = 26]].",
                "Hitta arean: [[A = 30k^2 = 30 \\times 4 = 120]] kvadratenheter.",
                "Hitta omkretsen: [[P = 30k = 30 \\times 2 = 60]] enheter.",
              ],
            },
            {
              "kind": "p",
              "text": "Den nya triangeln behåller de ursprungliga proportionerna 5:12:13: 10, 24 och 26 är alla dubbelt så stora som 5, 12 och 13. Kontrollera den räta vinkeln med Pythagoras: [[10^2 + 24^2 = 100 + 576 = 676 = 26^2]].",
            },
          ],
          "table": {
            "headers": [
              "Mått",
              "Värde",
            ],
            "rows": [
              [
                "Kortare katet a",
                "10",
              ],
              [
                "Längre katet b",
                "24",
              ],
              [
                "Hypotenusa c",
                "26",
              ],
              [
                "Area A",
                "120 kvadratenheter",
              ],
              [
                "Omkrets P",
                "60 enheter",
              ],
            ],
          },
        },
        "sec-examples": {
          "h2": "Genomräknade exempel med olika skalfaktorer",
          "blocks": [
            {
              "kind": "p",
              "text": "Åtta genomräknade exempel, från den ursprungliga triangeln till k = 10.",
            },
            {
              "kind": "h3",
              "text": "Exempel 1: Ursprunglig triangel, k = 1",
            },
            {
              "kind": "p",
              "text": "Givet [[k = 1]]. Sidor: [[a = 5]], [[b = 12]], [[c = 13]]. Area: [[A = 30(1^2) = 30]] kvadratenheter. Omkrets: [[P = 30(1) = 30]] enheter. Detta är den ursprungliga triangeln, den minsta heltalsversionen av trippeln.",
            },
            {
              "kind": "h3",
              "text": "Exempel 2: Skalfaktor 2",
            },
            {
              "kind": "p",
              "text": "Givet [[k = 2]]. Sidor: [[a = 10]], [[b = 24]], [[c = 26]]. Area: [[A = 30(2^2) = 120]] kvadratenheter. Omkrets: [[P = 30(2) = 60]] enheter. En fördubbling av skalfaktorn fördubblar varje sida och omkretsen, men arean växer fyra gånger.",
            },
            {
              "kind": "h3",
              "text": "Exempel 3: Skalfaktor 3",
            },
            {
              "kind": "p",
              "text": "Givet [[k = 3]]. Sidor: [[a = 15]], [[b = 36]], [[c = 39]]. Area: [[A = 30(3^2) = 270]] kvadratenheter. Omkrets: [[P = 30(3) = 90]] enheter. En tredubbling av sidorna tredubblar omkretsen, medan arean blir nio gånger den ursprungliga.",
            },
            {
              "kind": "h3",
              "text": "Exempel 4: Skalfaktor 4",
            },
            {
              "kind": "p",
              "text": "Givet [[k = 4]]. Sidor: [[a = 20]], [[b = 48]], [[c = 52]]. Area: [[A = 30(4^2) = 480]] kvadratenheter. Omkrets: [[P = 30(4) = 120]] enheter. Varje sida är fyra gånger den ursprungliga, och arean är sexton gånger den ursprungliga.",
            },
            {
              "kind": "h3",
              "text": "Exempel 5: Skalfaktor 0.5",
            },
            {
              "kind": "p",
              "text": "Givet [[k = 0.5]]. Sidor: [[a = 2.5]], [[b = 6]], [[c = 6.5]]. Area: [[A = 30(0.5^2) = 7.5]] kvadratenheter. Omkrets: [[P = 30(0.5) = 15]] enheter. En halvering av triangeln halverar sidorna och omkretsen, medan arean faller till en fjärdedel.",
            },
            {
              "kind": "h3",
              "text": "Exempel 6: Skalfaktor 1.5",
            },
            {
              "kind": "p",
              "text": "Givet [[k = 1.5]]. Sidor: [[a = 7.5]], [[b = 18]], [[c = 19.5]]. Area: [[A = 30(1.5^2) = 67.5]] kvadratenheter. Omkrets: [[P = 30(1.5) = 45]] enheter. En decimal skalfaktor fungerar på samma sätt: multiplicera varje sida med 1.5.",
            },
            {
              "kind": "h3",
              "text": "Exempel 7: Skalfaktor 5",
            },
            {
              "kind": "p",
              "text": "Givet [[k = 5]]. Sidor: [[a = 25]], [[b = 60]], [[c = 65]]. Area: [[A = 30(5^2) = 750]] kvadratenheter. Omkrets: [[P = 30(5) = 150]] enheter. En skalfaktor på 5 ger en mycket större triangel, användbar för layoutarbete där den grundläggande 5, 12, 13 är för liten.",
            },
            {
              "kind": "h3",
              "text": "Exempel 8: Skalfaktor 10",
            },
            {
              "kind": "p",
              "text": "Givet [[k = 10]]. Sidor: [[a = 50]], [[b = 120]], [[c = 130]]. Area: [[A = 30(10^2) = 3000]] kvadratenheter. Omkrets: [[P = 30(10) = 300]] enheter. Vid denna storlek förblir talen exakta, vilket är en fördel med att arbeta med en heltalstrippel.",
            },
            {
              "kind": "p",
              "text": "I alla åtta exempel gäller mönstret: sidor och omkrets växer med [[k]], area växer med [[k]] i kvadrat, och förhållandet 5:12:13 ändras aldrig.",
            },
          ],
        },
        "sec-right-angle": {
          "h2": "Varför behåller 5-12-13-triangeln alltid en 90-graders vinkel?",
          "blocks": [
            {
              "kind": "p",
              "text": "Skalning kan inte bryta Pythagoras-kontrollen.",
            },
            {
              "kind": "p",
              "text": "De skalade sidorna är [[[5k,\\quad 12k,\\quad 13k]]]",
            },
            {
              "kind": "p",
              "text": "Tillämpa Pythagoras: [[[(5k)^2 + (12k)^2 = (13k)^2]]]",
            },
            {
              "kind": "p",
              "text": "Utveckla: [[[25k^2 + 144k^2 = 169k^2]]]",
            },
            {
              "kind": "p",
              "text": "[[[169k^2 = 169k^2]]]",
            },
            {
              "kind": "p",
              "text": "Båda sidorna stämmer överens för varje positivt [[k]], eftersom faktorn [[k^2]] är gemensam för alla tre termer. Skalning sträcker ut triangeln utan att ändra dess vinklar, så 90-gradersvinkeln överlever vid vilken storlek som helst. Det är samma idé som likformiga trianglar: samma form, olika storlek.",
            },
            {
              "kind": "p",
              "text": "Vinklarna ändras aldrig med skalning. Vid varje positivt [[k]] förblir de spetsiga vinklarna cirka 22.62 och 67.38 grader, eftersom sinus för den mindre vinkeln alltid är [[5 / 13]] och sinus för den större vinkeln alltid är [[12 / 13]]. Bara sidlängderna rör sig, och de rör sig alla tillsammans.",
            },
          ],
          "image": {
            "src": "five-twelve-thirteen-angles.svg",
            "alt": "Vinkeldiagram av en 5-12-13-triangel som visar 90-gradersvinkeln och spetsiga vinklar på cirka 22.62 och 67.38 grader",
            "caption": "De spetsiga vinklarna är cirka 22.62 och 67.38 grader, och de summerar till 90 grader.",
          },
        },
        "sec-euclid": {
          "h2": "Hur genereras 5-12-13-trippeln med Euklides formel?",
          "blocks": [
            {
              "kind": "p",
              "text": "Två små tal, m = 3 och n = 2, genererar hela trippeln.",
            },
            {
              "kind": "p",
              "text": "Euklides formel bygger primitiva pythagoreiska tripplar från två positiva heltal [[m]] och [[n]]: [[[a = m^2 - n^2,\\quad b = 2mn,\\quad c = m^2 + n^2]]]",
            },
            {
              "kind": "p",
              "text": "Använd [[m = 3]] och [[n = 2]]: [[[a = 3^2 - 2^2 = 9 - 4 = 5]]]",
            },
            {
              "kind": "p",
              "text": "[[[b = 2(3)(2) = 12]]]",
            },
            {
              "kind": "p",
              "text": "[[[c = 3^2 + 2^2 = 9 + 4 = 13]]]",
            },
            {
              "kind": "p",
              "text": "Resultatet är det inramade förhållandet [[[\\boxed{5:12:13}]]]",
            },
            {
              "kind": "p",
              "text": "Formeln fungerar när [[m]] är större än [[n]], de två talen inte har någon gemensam faktor, och det ena är jämnt medan det andra är udda. Dessa villkor ger en primitiv trippel, en som inte kan divideras ned till en mindre heltalstrippel. Euklides formel är ett avancerat tillägg: kalkylatorn själv behöver bara [[k]], men formeln visar varifrån 5, 12 och 13 kommer.",
            },
            {
              "kind": "p",
              "text": "Andra val av [[m]] och [[n]] genererar andra tripplar. Med [[m = 2]] och [[n = 1]] ger formeln 3, 4 och 5. Med [[m = 4]] och [[n = 1]] ger den 15, 8 och 17, vilket är 8-15-17-trippeln i en annan ordning. 5-12-13-trippeln är den medlem av denna familj som kommer från [[m = 3]] och [[n = 2]].",
            },
          ],
          "image": {
            "src": "five-twelve-thirteen-euclid.svg",
            "alt": "Flödesdiagram över Euklides formel med m lika med 3 och n lika med 2 som ger 5, 12 och 13",
            "caption": "m = 3 och n = 2 ger a = 5, b = 12 och c = 13.",
          },
        },
        "sec-applications": {
          "h2": "Tillämpningar av 5-12-13-triangeln inom geometri och mätning",
          "blocks": [
            {
              "kind": "p",
              "text": "En rät vinkel med heltal är användbar överallt där exakta hörn spelar roll.",
            },
            {
              "kind": "p",
              "text": "I geometriläxor och övning inför prov ger trippeln snabba rätvinkelskontroller utan gradskiva: om tre längder passar 5:12:13 är vinkeln mellan de två kortare sidorna 90 grader. Lärare använder den för övningar i Pythagoras sats, problem med likformighet i trianglar och arbete med skalenliga ritningar.",
            },
            {
              "kind": "p",
              "text": "Byggare och snickare använder skalade versioner för att lägga ut räta hörn: markera 5 enheter längs ena kanten och 12 längs den andra, och diagonalen måste mäta 13. Lantmätare och tekniskt ritningsarbete bygger på samma idé i större skalor, med 10, 24, 26 eller 25, 60, 65 när den grundläggande triangeln är för liten.",
            },
            {
              "kind": "p",
              "text": "Förhållandet hjälper också i matematisk modellering och klassrumsdemonstrationer, där exakta heltal håller räkningen ren. Vid verkligt byggande spelar mätningars noggrannhet och förhållandena på platsen fortfarande roll, och detta förhållande ersätter inte professionell lantmätning eller byggstandarder.",
            },
          ],
        },
        "sec-vs-triples": {
          "h2": "Skillnaden mellan 5-12-13 och andra pythagoreiska tripplar",
          "blocks": [
            {
              "kind": "p",
              "text": "Varje primitiv trippel är en rätvinklig triangel, men var och en har sin egen form.",
            },
            {
              "kind": "p",
              "text": "Tabellen nedan jämför fem välkända primitiva tripplar. Alla uppfyller Pythagoras sats, men deras sidproportioner och spetsiga vinklar skiljer sig, så var och en skapar en annan triangelform. Att skala en trippel ger likformiga trianglar, aldrig en annan trippel: 10, 24, 26 är en skalad 5-12-13, medan 3, 4, 5 är en helt annan form.",
            },
            {
              "kind": "p",
              "text": "5-12-13-triangeln är längre och smalare än 3-4-5-triangeln: dess längre katet är mer än dubbelt så lång som dess kortare katet, medan 3-4-5 ligger närmare en kvadrat. Den skillnaden syns i vinklarna, med 22.62 och 67.38 grader här mot 36.87 och 53.13 grader för 3-4-5. Läs mer på sidan <a href=\"/pythagorean-triples-calculator/\">kalkylator för pythagoreiska tripplar</a>.",
            },
            {
              "kind": "p",
              "text": "Bara tripplarna i tabellen är primitiva, vilket betyder att deras tre tal inte har någon gemensam delare större än 1. En skalad trippel som 6, 8, 10 eller 10, 24, 26 är inte primitiv, eftersom alla tre talen kan divideras med 2. Primitiva tripplar är grundmedlemmarna i varje familj, och varje annan medlem är en skalad kopia av en av dem.",
            },
          ],
          "table": {
            "headers": [
              "Pythagoreisk trippel",
              "Sidoförhållande",
              "Hypotenusa",
            ],
            "rows": [
              [
                "3-4-5",
                "3:4:5",
                "5",
              ],
              [
                "5-12-13",
                "5:12:13",
                "13",
              ],
              [
                "8-15-17",
                "8:15:17",
                "17",
              ],
              [
                "7-24-25",
                "7:24:25",
                "25",
              ],
              [
                "9-40-41",
                "9:40:41",
                "41",
              ],
            ],
          },
        },
        "sec-vs-special": {
          "h2": "Skillnaden mellan 5-12-13, 45-45-90 och 30-60-90-trianglar",
          "blocks": [
            {
              "kind": "p",
              "text": "5-12-13 har sina egna vinklar, inte standardvinklarna för specialtrianglar.",
            },
            {
              "kind": "p",
              "text": "En 5-12-13-triangel är varken en 45-45-90-triangel eller en 30-60-90-triangel. Dess spetsiga vinklar är cirka 22.62 och 67.38 grader, och dess kateter är olika långa, så den tillhör familjen pythagoreiska tripplar snarare än någon av familjerna med specialvinklar.",
            },
            {
              "kind": "p",
              "text": "Använd <a href=\"/45-45-90-triangle-calculator/\">45-45-90-triangelkalkylatorn</a> för likbenta rätvinkliga trianglar och <a href=\"/30-60-90-triangle-calculator/\">30-60-90-triangelkalkylatorn</a> för 30-60-90-familjen. 5-12-13-sidan är rätt verktyg när sidorna följer förhållandet 5:12:13.",
            },
            {
              "kind": "p",
              "text": "För att se vilken familj en rätvinklig triangel tillhör kontrollerar du dess vinklar eller dess sidoförhållande. Lika långa kateter och 45-gradersvinklar betyder 45-45-90. Vinklar på 30 och 60 grader betyder 30-60-90. Sidor i förhållandet 5:12:13, med vinklar nära 22.62 och 67.38 grader, betyder en 5-12-13-triangel. De tre familjerna överlappar aldrig.",
            },
          ],
          "table": {
            "headers": [
              "Egenskap",
              "5-12-13",
              "45-45-90",
              "30-60-90",
            ],
            "rows": [
              [
                "Sidoförhållande",
                "5:12:13",
                "1:1:√2",
                "1:√3:2",
              ],
              [
                "Vinklar",
                "22.62°, 67.38°, 90° ungefär",
                "45°, 45°, 90°",
                "30°, 60°, 90°",
              ],
              [
                "Lika långa kateter",
                "Nej",
                "Ja",
                "Nej",
              ],
              [
                "Huvudegenskap",
                "Pythagoreisk trippel",
                "Likbent rätvinklig triangel",
                "Specialvinkelförhållande",
              ],
              [
                "Hypotenusa",
                "13k",
                "a√2",
                "2a",
              ],
            ],
          },
        },
        "sec-mistakes": {
          "h2": "Vanliga misstag när du använder 5-12-13-triangelkalkylatorn",
          "blocks": [
            {
              "kind": "p",
              "text": "Fjorton fel dyker upp om och om igen i 5-12-13-uppgifter.",
            },
            {
              "kind": "steps",
              "steps": [
                "Att behandla 13 som en katet i stället för hypotenusan: 13 är den längsta sidan och ligger mittemot 90-gradersvinkeln. [[c = 13k]] är alltid hypotenusan.",
                "Att blanda ihop den kortare kateten med den längre kateten: [[a = 5k]] är den kortare kateten och [[b = 12k]] är den längre kateten. Håll beteckningarna i ordning.",
                "Att bara skala en eller två sidor: att bara skala kateterna bryter förhållandet och den räta vinkeln. Tillämpa samma [[k]] på varje sida.",
                "Att blanda ihop skalfaktorn med en sidlängd: [[k]] är multiplikatorn, inte en sida. Med [[k = 2]] är sidorna 10, 24 och 26.",
                "Att använda noll som giltig skalfaktor: [[k = 0]] gör alla tre sidorna noll, en degenererad figur, inte en triangel. [[k]] måste vara större än noll.",
                "Att mata in en negativ skalfaktor: ett negativt [[k]] ger negativa sidlängder, vilket inte kan beskriva en triangel. Mata bara in ett positivt [[k]].",
                "Att glömma att kvadrera k i areaformeln: arean växer med [[k]] i kvadrat. Med [[k = 3]] är arean [[A = 30 \\times 9 = 270]], inte 90.",
                "Att blanda ihop area och omkrets: area mäts i kvadratenheter och använder [[A = 30k^2]], medan omkrets mäts i linjära enheter och använder [[P = 30k]].",
                "Att bara addera två sidor när man beräknar omkretsen: omkretsen omfattar alla tre sidor, så [[P = 5k + 12k + 13k = 30k]].",
                "Att blanda mätenheter: håll en enhet för alla tre sidor. Om kateterna är i centimeter kommer arean ut i kvadratcentimeter och omkretsen i centimeter.",
                "Att anta att bara 5, 12 och 13 fungerar: varje skalad uppsättning som 10, 24, 26 eller 15, 36, 39 är fortfarande en 5-12-13-triangel, eftersom förhållandet är detsamma.",
                "Att anta att varje rätvinklig triangel följer förhållandet 5:12:13: de flesta rätvinkliga trianglar har andra sidlängder. Förhållandet gäller bara när sidorna passar 5:12:13.",
                "Att blanda ihop 5-12-13- och 3-4-5-tripplarna: 3, 4, 5 och 5, 12, 13 är olika tripplar med olika vinklar. Kontrollera förhållandet innan du väljer en formel.",
                "Att avrunda mätvärden i onödan: trippeln ger exakta heltal, så behåll dem exakta. Avrunda bara när en skalfaktor som 1.5 tvingar fram ett decimaltal, och säg det.",
              ],
            },
          ],
        },
        "sec-verify": {
          "h2": "Så verifierar du en skalad 5-12-13-triangel",
          "blocks": [
            {
              "kind": "p",
              "text": "Fyra snabba kontroller bekräftar en skalad 5-12-13-triangel.",
            },
            {
              "kind": "h3",
              "text": "Kontroll 1: Sidoförhållande",
            },
            {
              "kind": "p",
              "text": "Sidorna måste passa [[[a : b : c = 5 : 12 : 13]]]",
            },
            {
              "kind": "h3",
              "text": "Kontroll 2: Pythagoras sats",
            },
            {
              "kind": "p",
              "text": "Kateterna måste uppfylla [[[a^2 + b^2 = c^2]]]",
            },
            {
              "kind": "h3",
              "text": "Kontroll 3: Skalfaktorns konsekvens",
            },
            {
              "kind": "p",
              "text": "Varje sida dividerad med sitt förhållandetal måste ge samma [[k]]: [[[\\frac{a}{5} = \\frac{b}{12} = \\frac{c}{13} = k]]]",
            },
            {
              "kind": "h3",
              "text": "Kontroll 4: Sidornas ordning",
            },
            {
              "kind": "p",
              "text": "Sidorna måste gå från kortast till längst: [[[a < b < c]]]",
            },
            {
              "kind": "p",
              "text": "Använd 10, 24, 26 som exempel. Förhållandet är 10:24:26, vilket divideras ned till 5:12:13, och Pythagoras-kontrollen ger [[10^2 + 24^2 = 100 + 576 = 676 = 26^2]]. Skalfaktorskontrollen ger [[10 / 5 = 24 / 12 = 26 / 13 = 2]]. Alla fyra kontrollerna klaras, så mätvärdena bildar en skalad 5-12-13-triangel.",
            },
            {
              "kind": "p",
              "text": "Om någon kontroll misslyckas, mät om eller kontrollera räkningen igen innan du litar på talen. En misslyckad förhållandekontroll betyder oftast att en sida skalades med en annan faktor, och en misslyckad Pythagoras-kontroll betyder oftast att den längsta sidan misstogs för en katet. Rätta sidan som bryter mönstret och kör sedan alla fyra kontrollerna igen.",
            },
          ],
        },
        "sec-practice": {
          "h2": "Övningsuppgifter med svar",
          "blocks": [
            {
              "kind": "p",
              "text": "Arbeta igenom alla åtta uppgifter på papper innan du läser svaren.",
            },
            {
              "kind": "h3",
              "text": "Uppgift 1: Skala med k = 2",
            },
            {
              "kind": "p",
              "text": "Skala en 5-12-13-triangel med [[k = 2]]. Hitta de tre sidlängderna, arean och omkretsen.",
            },
            {
              "kind": "h3",
              "text": "Uppgift 2: Skala med k = 4",
            },
            {
              "kind": "p",
              "text": "Skala en 5-12-13-triangel med [[k = 4]]. Hitta de tre sidlängderna, arean och omkretsen.",
            },
            {
              "kind": "h3",
              "text": "Uppgift 3: Area med k = 3",
            },
            {
              "kind": "p",
              "text": "Hitta arean av en skalad 5-12-13-triangel med [[k = 3]], i kvadratenheter.",
            },
            {
              "kind": "h3",
              "text": "Uppgift 4: Omkrets med k = 5",
            },
            {
              "kind": "p",
              "text": "Hitta omkretsen av en skalad 5-12-13-triangel med [[k = 5]], i enheter.",
            },
            {
              "kind": "h3",
              "text": "Uppgift 5: Hitta k utifrån den kortare kateten",
            },
            {
              "kind": "p",
              "text": "Den kortare kateten i en skalad 5-12-13-triangel är 25. Hitta skalfaktorn [[k]] och sedan de andra två sidorna.",
            },
            {
              "kind": "h3",
              "text": "Uppgift 6: Hitta k utifrån den längre kateten",
            },
            {
              "kind": "p",
              "text": "Den längre kateten i en skalad 5-12-13-triangel är 48. Hitta skalfaktorn [[k]] och sedan de andra två sidorna.",
            },
            {
              "kind": "h3",
              "text": "Uppgift 7: Hitta k utifrån hypotenusan",
            },
            {
              "kind": "p",
              "text": "Hypotenusan i en skalad 5-12-13-triangel är 78. Hitta skalfaktorn [[k]] och sedan de två kateterna.",
            },
            {
              "kind": "h3",
              "text": "Uppgift 8: Verifiera 15, 36 och 39",
            },
            {
              "kind": "p",
              "text": "Bildar sidlängderna 15, 36 och 39 en skalad 5-12-13-triangel? Kontrollera förhållandet och Pythagoras sats.",
            },
            {
              "kind": "h3",
              "text": "Svar",
            },
            {
              "kind": "p",
              "text": "1. Sidor 10, 24, 26; area 120 kvadratenheter; omkrets 60 enheter.",
            },
            {
              "kind": "p",
              "text": "2. Sidor 20, 48, 52; area 480 kvadratenheter; omkrets 120 enheter.",
            },
            {
              "kind": "p",
              "text": "3. Area [[A = 30 \\times 9 = 270]] kvadratenheter.",
            },
            {
              "kind": "p",
              "text": "4. Omkrets [[P = 30 \\times 5 = 150]] enheter.",
            },
            {
              "kind": "p",
              "text": "5. [[k = 25 / 5 = 5]]; den längre kateten är 60 och hypotenusan är 65.",
            },
            {
              "kind": "p",
              "text": "6. [[k = 48 / 12 = 4]]; den kortare kateten är 20 och hypotenusan är 52.",
            },
            {
              "kind": "p",
              "text": "7. [[k = 78 / 13 = 6]]; den kortare kateten är 30 och den längre kateten är 72.",
            },
            {
              "kind": "p",
              "text": "8. Ja: [[15^2 + 36^2 = 225 + 1296 = 1521 = 39^2]], och 15:36:39 divideras ned till 5:12:13, så [[k = 3]].",
            },
          ],
        },
      },
      "relatedHeading": "Relaterade kalkylatorer för rätvinkliga trianglar",
      "relatedIntro": "Varje kalkylator nedan hanterar en annan uppgift för rätvinkliga trianglar, så välj det verktyg som matchar det mått du behöver.",
      "relatedItems": [
        "Kalkylator för pythagoreiska tripplar",
        "3-4-5-triangelkalkylator",
        "Kalkylator för sidor i rätvinklig triangel",
        "Kalkylator för Pythagoras sats",
        "Kalkylator för area av rätvinklig triangel",
        "Kalkylator för omkrets av rätvinklig triangel",
      ],
      "faqHeading": "Vanliga frågor",
      "faqs": [
        {
          "question": "Vad är en 5-12-13-triangel?",
          "answer": "En 5-12-13-triangel är en rätvinklig triangel med sidlängderna 5, 12 och 13, eller vilken skalad uppsättning som helst i samma förhållande. Sidan med längden 13 är hypotenusan, och sidorna med längden 5 och 12 är kateterna som möts vid den räta vinkeln.",
        },
        {
          "question": "Varför är 5-12-13 en rätvinklig triangel?",
          "answer": "Eftersom dess sidor uppfyller Pythagoras sats: [[5^2 + 12^2 = 25 + 144 = 169 = 13^2]]. När kvadraterna på de två kortare sidorna summerar till kvadraten på den längsta sidan är vinkeln mittemot den sidan 90 grader.",
        },
        {
          "question": "Vad är sidoförhållandet i en 5-12-13-triangel?",
          "answer": "Förhållandet är 5:12:13: den kortare kateten är 5 delar, den längre kateten är 12 delar och hypotenusan är 13 delar. Skalning multiplicerar varje del med samma faktor [[k]], så förhållandet ändras aldrig.",
        },
        {
          "question": "Hur fungerar 5-12-13-triangelkalkylatorn?",
          "answer": "Ange en positiv skalfaktor [[k]] och tryck på Beräkna. Kalkylatorn returnerar de skalade sidorna [[a = 5k]], [[b = 12k]] och [[c = 13k]], plus arean [[A = 30k^2]] och omkretsen [[P = 30k]].",
        },
        {
          "question": "Vad är skalfaktorn i en 5-12-13-triangel?",
          "answer": "Skalfaktorn [[k]] är det tal som multiplicerar alla tre sidor i den grundläggande triangeln. Med [[k = 1]] får du den ursprungliga triangeln; större värden förstorar den och värden mellan 0 och 1 förminskar den.",
        },
        {
          "question": "Hur beräknar jag sidorna i en skalad 5-12-13-triangel?",
          "answer": "Multiplicera varje grundläggande sida med [[k]]: den kortare kateten är [[a = 5k]], den längre kateten är [[b = 12k]] och hypotenusan är [[c = 13k]]. För [[k = 4]] är sidorna 20, 48 och 52.",
        },
        {
          "question": "Hur beräknar jag dess area?",
          "answer": "Använd [[A = 30k^2]]. Arean kommer från halva produkten av kateterna, [[A = (5k)(12k) / 2]]. Med [[k = 3]] är arean 270 kvadratenheter.",
        },
        {
          "question": "Hur beräknar jag dess omkrets?",
          "answer": "Använd [[P = 30k]]. Addera de tre skalade sidorna: [[P = 5k + 12k + 13k]]. Med [[k = 3]] är omkretsen 90 enheter.",
        },
        {
          "question": "Kan jag använda 10-24-26 i stället för 5-12-13?",
          "answer": "Ja. Uppsättningen 10, 24, 26 är 5-12-13-triangeln skalad med [[k = 2]], så den har samma form och samma vinklar. Varje multipel av 5, 12 och 13 fungerar på samma sätt.",
        },
        {
          "question": "Hur genereras 5-12-13-trippeln?",
          "answer": "Euklides formel med [[m = 3]] och [[n = 2]] ger [[a = 3^2 - 2^2 = 5]], [[b = 2(3)(2) = 12]] och [[c = 3^2 + 2^2 = 13]]. Värdena 3 och 2 är relativt prima och har motsatt paritet, så trippeln är primitiv.",
        },
        {
          "question": "Vad är skillnaden mellan 3-4-5 och 5-12-13?",
          "answer": "Båda är primitiva pythagoreiska tripplar, men deras proportioner skiljer sig: 3-4-5 har vinklar på cirka 36.87 och 53.13 grader, medan 5-12-13 har vinklar på cirka 22.62 och 67.38 grader. Varje trippel ger en annan triangelform.",
        },
        {
          "question": "Är varje skalad 5-12-13-triangel en rätvinklig triangel?",
          "answer": "Ja. För varje positivt [[k]] uppfyller de skalade sidorna [[(5k)^2 + (12k)^2 = (13k)^2]], så Pythagoras sats gäller och vinkeln mittemot den längsta sidan förblir 90 grader.",
        },
      ],
    },
};
