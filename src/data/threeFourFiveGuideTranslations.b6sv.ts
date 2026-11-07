// threeFourFiveGuideTranslations.bsv.ts: 3-4-5 Triangle
// Guide (Page 42 of 45) translation.
export const THREEFOURFIVE_B6_SV = {
  "sv": {
      "meta": {
        "title": "3-4-5-triangelkalkylator – Skala sidor, area, omkrets",
        "description": "Skala en 3-4-5-triangel med den här kalkylatorn: ange en positiv skalfaktor k för att få sidorna 3k, 4k och 5k, plus arean 6k i kvadrat och omkretsen 12k.",
        "primaryKeyword": "3-4-5 Triangle Calculator",
        "slug": "3-4-5-triangle-calculator",
      },
      "tocHeading": "Avsnittsnavigering",
      "tocItems": {
        "sec-intro": "3-4-5-triangelkalkylator",
        "sec-calculate": "Skala en 3-4-5-triangel och beräkna dess mått",
        "sec-what": "Vad är en 3-4-5-triangel?",
        "sec-pythagorean": "Varför är 3-4-5 en pythagoreisk trippel?",
        "sec-sides": "De tre sidorna i en 3-4-5-triangel",
        "sec-ratio": "Sidförhållandet 3-4-5",
        "sec-scale-factor": "Vad är skalfaktorn i en 3-4-5-triangel?",
        "sec-leg-a": "Formel för den första kateten",
        "sec-leg-b": "Formel för den andra kateten",
        "sec-hypotenuse": "Formel för hypotenusan",
        "sec-area": "Så beräknar du arean av en skalad 3-4-5-triangel",
        "sec-perimeter": "Så beräknar du omkretsen av en skalad 3-4-5-triangel",
        "sec-find-k": "Så hittar du skalfaktorn utifrån en känd sida",
        "sec-step-example": "Steg-för-steg-exempel på att skala en 3-4-5-triangel",
        "sec-examples": "Genomräknade exempel med olika skalfaktorer",
        "sec-right-angle": "Varför behåller 3-4-5-triangeln alltid en 90-graders vinkel?",
        "sec-construction": "Så använder du 3-4-5-regeln för att kontrollera ett rätvinkligt hörn",
        "sec-applications": "Tillämpningar av 3-4-5-triangeln i byggarbete",
        "sec-similar": "Sambandet mellan likformiga trianglar och förhållandet 3-4-5",
        "sec-vs-special": "Skillnaden mellan 3-4-5-, 45-45-90- och 30-60-90-trianglar",
        "sec-mistakes": "Vanliga misstag vid användning av 3-4-5-triangelkalkylatorn",
        "sec-verify": "Så kontrollerar du en skalad 3-4-5-triangel",
        "sec-practice": "Övningsuppgifter med svar",
        "sec-related": "Relaterade rätvinkliga triangelkalkylatorer",
        "sec-faq": "Vanliga frågor",
      },
      "sections": {
        "sec-intro": {
          "h2": "3-4-5-triangelkalkylator",
          "blocks": [
            {
              "kind": "p",
              "text": "Skala en 3-4-5-triangel och hitta dess sidor, area och omkrets.",
            },
            {
              "kind": "p",
              "text": "En 3-4-5-triangel är en rätvinklig triangel vars sidlängder följer förhållandet [[3 : 4 : 5]]. Den är den mest kända pythagoreiska trippeln, eftersom dess heltalssidor uppfyller Pythagoras sats: [[3^2 + 4^2 = 5^2]], eftersom [[9 + 16 = 25]]. Sidan med längden 5 är hypotenusan, och sidorna med längden 3 och 4 är kateterna.",
            },
            {
              "kind": "p",
              "text": "Kalkylatorn skalar den triangeln med en positiv skalfaktor [[k]], så de skalade sidorna blir [[a = 3k]], [[b = 4k]] och [[c = 5k]]. Den beräknar också arean, [[A = 6k^2]], och omkretsen, [[P = 12k]], så en inmatning ger alla fem resultat. Använd <a href=\"/right-triangle-calculator/\">rätvinklig triangelkalkylator</a> för en allmän rätvinklig triangel.",
            },
            {
              "kind": "p",
              "text": "Med [[k = 2]] blir sidorna till exempel [[a = 6]], [[b = 8]] och [[c = 10]], arean är [[A = 24]] kvadratenheter och omkretsen är [[P = 24]] enheter.",
            },
          ],
        },
        "sec-calculate": {
          "h2": "Skala en 3-4-5-triangel och beräkna dess mått",
          "blocks": [
            {
              "kind": "p",
              "text": "Ett läge, en inmatning och fem resultat.",
            },
            {
              "kind": "p",
              "text": "Kalkylatorn har ett enda läge: att skala en 3-4-5-triangel. Ange en positiv skalfaktor [[k]] och klicka på Beräkna, så returnerar den de tre skalade sidlängderna, arean och omkretsen. Tabellen nedan listar varje mått med dess formel.",
            },
            {
              "kind": "p",
              "text": "Skalfaktorn [[k]] multiplicerar varje ursprunglig sida. Med [[k = 1]] får du den ursprungliga 3-4-5-triangeln. Ett värde över 1 förstorar den, och ett värde mellan 0 och 1 förminskar den. Kalkylatorn frågar efter [[k]] eftersom förhållandet bestämmer formen: när [[k]] är känd följer varje mått.",
            },
            {
              "kind": "p",
              "text": "Ange bara ett positivt tal. Om [[k = 0]] blir alla tre sidor noll, vilket är en degenererad figur snarare än en triangel, och ett negativt [[k]] kan inte ge giltiga sidlängder. Använd Återställ efter beräkningen för att rensa fältet innan du börjar en ny uppgift.",
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
                "Första kateten",
                "3k",
                "Skalad sida a",
              ],
              [
                "Andra kateten",
                "4k",
                "Skalad sida b",
              ],
              [
                "Hypotenusan",
                "5k",
                "Skalad sida c",
              ],
              [
                "Area",
                "6k²",
                "Triangelns area",
              ],
              [
                "Omkrets",
                "12k",
                "Triangelns omkrets",
              ],
            ],
          },
        },
        "sec-what": {
          "h2": "Vad är en 3-4-5-triangel?",
          "blocks": [
            {
              "kind": "p",
              "text": "En 3-4-5-triangel har fått sitt namn efter sina tre sidlängder.",
            },
            {
              "kind": "p",
              "text": "Det är en rätvinklig triangel vars sidlängder följer förhållandet [[3 : 4 : 5]]. Den längsta sidan, 5, är hypotenusan, och den ligger mittemot 90-gradersvinkeln. De andra två sidorna, 3 och 4, är kateterna, och de möts vid den räta vinkeln. I triangeln ABC är vinkel C 90°, sidan [[a]] är den kortare kateten med längden 3, sidan [[b]] är den längre kateten med längden 4, och sidan [[c]] är hypotenusan med längden 5.",
            },
            {
              "kind": "p",
              "text": "Den kallas en pythagoreisk trippel eftersom 3, 4 och 5 är heltal som uppfyller [[a^2 + b^2 = c^2]]. Den heltalsegenskapen gör triangeln användbar: byggare, lärare och elever kan kontrollera en rät vinkel med vanliga heltalsmått, utan kvadratrötter eller decimaler. Den är den minsta pythagoreiska trippeln, och varje skalad kopia, till exempel 6-8-10, är också en sådan.",
            },
          ],
          "image": {
            "src": "three-four-five-main.svg",
            "alt": "Märkt 3-4-5 rätvinklig triangel ABC med kortare katet a lika med 3, längre katet b lika med 4, hypotenusa c lika med 5 och en markering för rät vinkel",
            "caption": "Triangel ABC: kateterna a = 3 och b = 4 möts vid den räta vinkeln, och hypotenusan är c = 5.",
          },
        },
        "sec-pythagorean": {
          "h2": "Varför är 3-4-5 en pythagoreisk trippel?",
          "blocks": [
            {
              "kind": "p",
              "text": "Talen 3, 4 och 5 uppfyller Pythagoras sats exakt.",
            },
            {
              "kind": "p",
              "text": "Pythagoras sats säger att i en rätvinklig triangel är kvadraten på hypotenusan lika med summan av kvadraterna på kateterna:",
            },
            {
              "kind": "p",
              "text": "[[[a^2 + b^2 = c^2]]]",
            },
            {
              "kind": "p",
              "text": "Sätt in sidlängderna 3-4-5:",
            },
            {
              "kind": "p",
              "text": "[[[3^2 + 4^2 = 5^2]]]",
            },
            {
              "kind": "p",
              "text": "Beräkna varje kvadrat:",
            },
            {
              "kind": "p",
              "text": "[[[9 + 16 = 25]]]",
            },
            {
              "kind": "p",
              "text": "Båda leden är lika med 25, så ekvationen stämmer. En pythagoreisk trippel är en uppsättning av tre heltal som uppfyller den här ekvationen, och 3-4-5 är den minsta. Likheten fungerar också omvänt: om en triangel har sidlängderna 3, 4 och 5 måste vinkeln mittemot sidan med längden 5 vara 90°.",
            },
            {
              "kind": "p",
              "text": "Sidan med längden 5 måste vara hypotenusan eftersom den är den längsta sidan. Sidorna med längden 3 och 4 måste vara kateterna, eftersom de möts vid den räta vinkeln. <a href=\"/pythagorean-triples-calculator/\">Kalkylatorn för pythagoreiska tripplar</a> listar andra heltalstripplar, bland annat 5-12-13, en annan trippel.",
            },
          ],
          "image": {
            "src": "three-four-five-pythagoras.svg",
            "alt": "Pythagorasdiagram för 3-4-5-triangeln som visar att 3 i kvadrat plus 4 i kvadrat är lika med 5 i kvadrat, med 9 plus 16 lika med 25",
            "caption": "3² + 4² = 5², eftersom 9 + 16 = 25, så 3-4-5 är en pythagoreisk trippel.",
          },
        },
        "sec-sides": {
          "h2": "De tre sidorna i en 3-4-5-triangel",
          "blocks": [
            {
              "kind": "p",
              "text": "Två kateter möts vid den räta vinkeln, och hypotenusan ligger mittemot den.",
            },
            {
              "kind": "p",
              "text": "Den kortare kateten [[a]] har längden 3 i den grundläggande triangeln. Den är sidan BC i triangeln ABC, och den ligger mittemot vinkel A, cirka 36.87°. Den längre kateten [[b]] har längden 4, är sidan AC och ligger mittemot vinkel B, cirka 53.13°. De två kateterna möts vid hörnet C, där de bildar 90°-vinkeln.",
            },
            {
              "kind": "p",
              "text": "Hypotenusan [[c]] har längden 5, är sidan AB och ligger mittemot 90°-vinkeln. Den är den längsta sidan, eftersom den största vinkeln alltid ligger mittemot den längsta sidan. När triangeln skalas ändras rollerna aldrig: [[a]] förblir den kortare kateten, [[b]] förblir den längre kateten och [[c]] förblir hypotenusan.",
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
                "Kortare katet a (BC)",
                "36.87°",
                "3",
              ],
              [
                "Längre katet b (AC)",
                "53.13°",
                "4",
              ],
              [
                "Hypotenusa c (AB)",
                "90°",
                "5, längsta sidan",
              ],
            ],
          },
        },
        "sec-ratio": {
          "h2": "Sidförhållandet 3-4-5",
          "blocks": [
            {
              "kind": "p",
              "text": "Förhållandet 3:4:5 bestämmer formen hos varje 3-4-5-triangel.",
            },
            {
              "kind": "p",
              "text": "Sidförhållandet i en 3-4-5-triangel är:",
            },
            {
              "kind": "p",
              "text": "[[[a : b : c = 3 : 4 : 5]]]",
            },
            {
              "kind": "p",
              "text": "Varje del av förhållandet beskriver en sida. Den kortare kateten motsvarar 3 proportionella enheter, den längre kateten motsvarar 4 proportionella enheter och hypotenusan motsvarar 5 proportionella enheter. Skrivet med skalfaktorn [[k]] är de tre sidorna [[a = 3k]], [[b = 4k]] och [[c = 5k]], så förhållandet i skalad form är [[3k : 4k : 5k]].",
            },
            {
              "kind": "p",
              "text": "Förhållandet ändras inte när triangeln förstoras eller förminskas, eftersom alla tre sidor multipliceras med samma tal och deras proportioner därför förblir orörda. Mängderna 3, 4, 5 och 6, 8, 10 och 9, 12, 15 och 15, 20, 25 representerar alla samma triangelform i olika storlekar.",
            },
          ],
          "image": {
            "src": "three-four-five-scaled.svg",
            "alt": "Tre likformiga 3-4-5-trianglar i olika storlekar märkta 3-4-5, 6-8-10 och 9-12-15 med samma proportioner",
            "caption": "3-4-5, 6-8-10 och 9-12-15 har samma form och samma förhållande 3:4:5.",
          },
        },
        "sec-scale-factor": {
          "h2": "Vad är skalfaktorn i en 3-4-5-triangel?",
          "blocks": [
            {
              "kind": "p",
              "text": "Skalfaktorn multiplicerar varje sida med samma tal.",
            },
            {
              "kind": "p",
              "text": "En skalfaktor [[k]] multiplicerar alla tre ursprungliga sidlängder med samma positiva tal. De skalade sidorna är:",
            },
            {
              "kind": "p",
              "text": "[[[a = 3k, \\quad b = 4k, \\quad c = 5k]]]",
            },
            {
              "kind": "p",
              "text": "Med [[k = 1]] får du den ursprungliga triangeln, 3, 4, 5. Ett värde på [[k]] större än 1 förstorar den, och ett värde mellan 0 och 1 förminskar den, till exempel ger [[k = 0.5]] 1.5, 2, 2.5. Skalfaktorn måste vara positiv: noll ger ingen triangel, och ett negativt värde kan inte ge giltiga sidlängder.",
            },
            {
              "kind": "p",
              "text": "Skalfaktorn ändrar storleken, inte formen. Alla motsvarande sidlängder förblir proportionella, vinklarna förblir desamma och förhållandet förblir 3:4:5. Tabellen ovan visar hur sidorna, arean och omkretsen ändras med [[k]]: omkretsen växer med [[k]] medan arean växer med [[k]] i kvadrat.",
            },
          ],
          "table": {
            "headers": [
              "Skalfaktor k",
              "Sidor",
              "Area",
              "Omkrets",
            ],
            "rows": [
              [
                "0.5",
                "1.5, 2, 2.5",
                "1.5",
                "6",
              ],
              [
                "1",
                "3, 4, 5",
                "6",
                "12",
              ],
              [
                "2",
                "6, 8, 10",
                "24",
                "24",
              ],
              [
                "3",
                "9, 12, 15",
                "54",
                "36",
              ],
            ],
          },
          "image": {
            "src": "three-four-five-scale-factor.svg",
            "alt": "Skalad 3-4-5-triangel med skalfaktor k lika med 2, märkta sidor a lika med 6, b lika med 8 och c lika med 10",
            "caption": "Med k = 2 är sidorna a = 6, b = 8 och c = 10.",
          },
        },
        "sec-leg-a": {
          "h2": "Formel för den första kateten",
          "blocks": [
            {
              "kind": "p",
              "text": "Den kortare kateten är tre gånger skalfaktorn.",
            },
            {
              "kind": "p",
              "text": "[[[a = 3k]]]",
            },
            {
              "kind": "p",
              "text": "Här är [[a]] den kortare kateten och [[k]] skalfaktorn. Formeln är en direkt avläsning av förhållandet: den kortare kateten motsvarar 3 enheter för varje enhet av [[k]], så att multiplicera 3 med [[k]] ger den skalade längden. Använd [[k = 4]]:",
            },
            {
              "kind": "p",
              "text": "[[[a = 3 \\times 4]]]",
            },
            {
              "kind": "p",
              "text": "[[[a = 12]]]",
            },
            {
              "kind": "p",
              "text": "Resultatet är en skalad sidlängd, inte en vinkel och inte en skalfaktor. Den är alltid kortare än de andra två sidorna, eftersom 3 är den minsta delen av förhållandet 3:4:5, och den förblir den kortare kateten vid varje positiv skalfaktor.",
            },
          ],
        },
        "sec-leg-b": {
          "h2": "Formel för den andra kateten",
          "blocks": [
            {
              "kind": "p",
              "text": "Den längre kateten är fyra gånger skalfaktorn.",
            },
            {
              "kind": "p",
              "text": "[[[b = 4k]]]",
            },
            {
              "kind": "p",
              "text": "Här är [[b]] den längre kateten och [[k]] skalfaktorn. Den längre kateten motsvarar 4 enheter för varje enhet av [[k]], så att multiplicera 4 med [[k]] ger den skalade längden. Använd [[k = 4]]:",
            },
            {
              "kind": "p",
              "text": "[[[b = 4 \\times 4]]]",
            },
            {
              "kind": "p",
              "text": "[[[b = 16]]]",
            },
            {
              "kind": "p",
              "text": "Den här sidan förblir längre än den första kateten vid varje positiv skalfaktor, eftersom 4 är större än 3 och båda sidorna multipliceras med samma [[k]]. Den förblir också kortare än hypotenusan, eftersom 4 är mindre än 5. Håll de två kateterna i rätt ordning: [[a]] är 3-sidan och [[b]] är 4-sidan.",
            },
          ],
        },
        "sec-hypotenuse": {
          "h2": "Formel för hypotenusan",
          "blocks": [
            {
              "kind": "p",
              "text": "Hypotenusan är fem gånger skalfaktorn.",
            },
            {
              "kind": "p",
              "text": "[[[c = 5k]]]",
            },
            {
              "kind": "p",
              "text": "Här är [[c]] hypotenusan och [[k]] skalfaktorn. Hypotenusan motsvarar 5 enheter för varje enhet av [[k]], så att multiplicera 5 med [[k]] ger den skalade längden. Använd [[k = 4]]:",
            },
            {
              "kind": "p",
              "text": "[[[c = 5 \\times 4]]]",
            },
            {
              "kind": "p",
              "text": "[[[c = 20]]]",
            },
            {
              "kind": "p",
              "text": "Hypotenusan förblir den längsta sidan vid varje positiv skalfaktor, eftersom 5 är den största delen av förhållandet. Kontrollera den mot kateterna: med [[k = 4]] är sidorna 12, 16 och 20, och [[12^2 + 16^2 = 144 + 256 = 400 = 20^2]], så Pythagoras sats bekräftar resultatet.",
            },
          ],
        },
        "sec-area": {
          "h2": "Så beräknar du arean av en skalad 3-4-5-triangel",
          "blocks": [
            {
              "kind": "p",
              "text": "Arean använder de två kateterna, och skalfaktorn kvadreras.",
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
              "text": "Sätt in de skalade kateterna, [[a = 3k]] och [[b = 4k]]:",
            },
            {
              "kind": "p",
              "text": "[[[A = \\frac{(3k)(4k)}{2}]]]",
            },
            {
              "kind": "p",
              "text": "Förenkla:",
            },
            {
              "kind": "p",
              "text": "[[[A = 6k^2]]]",
            },
            {
              "kind": "p",
              "text": "Division med två är nödvändig eftersom en triangel täcker hälften av den rektangel som bildas av dess två kateter. Faktorn [[k]] kvadreras eftersom båda kateterna bär en faktor [[k]]. Area mäts i kvadratenheter. Att fördubbla skalfaktorn fyrdubblar arean: med [[k = 2]] är arean 24 kvadratenheter, fyra gånger de 6 kvadratenheter som gäller vid [[k = 1]]. För en allmän rätvinklig triangel, använd <a href=\"/right-triangle-area-calculator/\">areakalkylatorn för rätvinkliga trianglar</a> i stället.",
            },
            {
              "kind": "p",
              "text": "Använd [[k = 3]]:",
            },
            {
              "kind": "p",
              "text": "[[[A = 6(3^2)]]]",
            },
            {
              "kind": "p",
              "text": "[[[A = 54 \\text{ square units}]]]",
            },
          ],
          "image": {
            "src": "three-four-five-area.svg",
            "alt": "3-4-5-triangelns areadiagram med bas 3k, höjd 4k och area 6k i kvadrat, som visar att k lika med 2 ger 24 kvadratenheter",
            "caption": "Area från bas 3k och höjd 4k: A = 6k², och k = 2 ger 24 kvadratenheter.",
          },
        },
        "sec-perimeter": {
          "h2": "Så beräknar du omkretsen av en skalad 3-4-5-triangel",
          "blocks": [
            {
              "kind": "p",
              "text": "Addera alla tre sidor, så skalar omkretsen med k.",
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
              "text": "Sätt in de skalade sidorna:",
            },
            {
              "kind": "p",
              "text": "[[[P = 3k + 4k + 5k]]]",
            },
            {
              "kind": "p",
              "text": "Förenkla:",
            },
            {
              "kind": "p",
              "text": "[[[P = 12k]]]",
            },
            {
              "kind": "p",
              "text": "Alla tre sidor måste adderas, eftersom omkretsen följer hela gränsen. Att utelämna någon sida ger en kortare sträcka som inte är omkretsen. Omkretsen skalar direkt med [[k]], så att fördubbla [[k]] fördubblar omkretsen, till skillnad från arean, som fyrdubblas. Omkrets anges i linjära enheter, aldrig kvadratenheter. För en allmän rätvinklig triangel, använd <a href=\"/right-triangle-perimeter-calculator/\">omkretskalkylatorn för rätvinkliga trianglar</a>.",
            },
            {
              "kind": "p",
              "text": "Använd [[k = 3]]:",
            },
            {
              "kind": "p",
              "text": "[[[P = 12 \\times 3]]]",
            },
            {
              "kind": "p",
              "text": "[[[P = 36 \\text{ units}]]]",
            },
          ],
          "image": {
            "src": "three-four-five-perimeter.svg",
            "alt": "Omkretsdiagram för 3-4-5-triangel som visar att P är lika med 3k plus 4k plus 5k lika med 12k, med k lika med 2 som ger 24 enheter",
            "caption": "Omkrets: P = 3k + 4k + 5k = 12k, och k = 2 ger 24 enheter.",
          },
        },
        "sec-find-k": {
          "h2": "Så hittar du skalfaktorn utifrån en känd sida",
          "blocks": [
            {
              "kind": "p",
              "text": "Dividera en känd sida med dess del av förhållandet.",
            },
            {
              "kind": "p",
              "text": "Kalkylatorn tar emot [[k]] direkt, så de här ekvationerna är manuella beräkningar som hjälper dig att hitta [[k]] när du redan känner till en sida. Dividera den kända sidan med det tal som sidan motsvarar i förhållandet 3:4:5. Om den kortare kateten är känd:",
            },
            {
              "kind": "p",
              "text": "[[[k = \\frac{a}{3}]]]",
            },
            {
              "kind": "p",
              "text": "Om den längre kateten är känd:",
            },
            {
              "kind": "p",
              "text": "[[[k = \\frac{b}{4}]]]",
            },
            {
              "kind": "p",
              "text": "Om hypotenusan är känd:",
            },
            {
              "kind": "p",
              "text": "[[[k = \\frac{c}{5}]]]",
            },
            {
              "kind": "p",
              "text": "Tre korta exempel: den kortare kateten [[a = 12]] ger [[k = 12 / 3 = 4]]; den längre kateten [[b = 20]] ger [[k = 20 / 4 = 5]]; hypotenusan [[c = 30]] ger [[k = 30 / 5 = 6]]. När du har [[k]] anger du den i kalkylatorn. Kalkylatorn själv tar inte emot en sidlängd och hittar [[k]] åt dig.",
            },
          ],
        },
        "sec-step-example": {
          "h2": "Steg-för-steg-exempel på att skala en 3-4-5-triangel",
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
                "Hitta den första kateten: [[a = 3k = 3 \\times 2 = 6]].",
                "Hitta den andra kateten: [[b = 4k = 4 \\times 2 = 8]].",
                "Hitta hypotenusan: [[c = 5k = 5 \\times 2 = 10]].",
                "Hitta arean: [[A = 6k^2 = 6 \\times 4 = 24]] kvadratenheter.",
                "Hitta omkretsen: [[P = 12k = 12 \\times 2 = 24]] enheter.",
              ],
            },
            {
              "kind": "p",
              "text": "Den nya triangeln behåller de ursprungliga proportionerna 3:4:5: 6, 8 och 10 är alla dubbelt så stora som 3, 4 och 5. Kontrollera den räta vinkeln med Pythagoras sats: [[6^2 + 8^2 = 36 + 64 = 100 = 10^2]]. Arean och omkretsen råkar dela talet 24 här, men de mäter olika saker.",
            },
          ],
          "table": {
            "headers": [
              "Mått",
              "Värde",
            ],
            "rows": [
              [
                "Första kateten a",
                "6",
              ],
              [
                "Andra kateten b",
                "8",
              ],
              [
                "Hypotenusa c",
                "10",
              ],
              [
                "Area A",
                "24 kvadratenheter",
              ],
              [
                "Omkrets P",
                "24 enheter",
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
              "text": "Givet [[k = 1]]. Sidor: [[a = 3]], [[b = 4]], [[c = 5]]. Area: [[A = 6(1^2) = 6]] kvadratenheter. Omkrets: [[P = 12(1) = 12]] enheter.",
            },
            {
              "kind": "h3",
              "text": "Exempel 2: Skalfaktor 2",
            },
            {
              "kind": "p",
              "text": "Givet [[k = 2]]. Sidor: [[a = 6]], [[b = 8]], [[c = 10]]. Area: [[A = 6(2^2) = 24]] kvadratenheter. Omkrets: [[P = 12(2) = 24]] enheter. Att fördubbla [[k]] fördubblar sidorna och omkretsen, och fyrdubblar arean.",
            },
            {
              "kind": "h3",
              "text": "Exempel 3: Skalfaktor 3",
            },
            {
              "kind": "p",
              "text": "Givet [[k = 3]]. Sidor: [[a = 9]], [[b = 12]], [[c = 15]]. Area: [[A = 6(3^2) = 54]] kvadratenheter. Omkrets: [[P = 12(3) = 36]] enheter.",
            },
            {
              "kind": "h3",
              "text": "Exempel 4: Skalfaktor 5",
            },
            {
              "kind": "p",
              "text": "Givet [[k = 5]]. Sidor: [[a = 15]], [[b = 20]], [[c = 25]]. Area: [[A = 6(5^2) = 150]] kvadratenheter. Omkrets: [[P = 12(5) = 60]] enheter. Den här 15-20-25-triangeln är en vanlig storlek vid utläggning på byggarbetsplatser.",
            },
            {
              "kind": "h3",
              "text": "Exempel 5: Skalfaktor 0.5",
            },
            {
              "kind": "p",
              "text": "Givet [[k = 0.5]]. Sidor: [[a = 1.5]], [[b = 2]], [[c = 2.5]]. Area: [[A = 6(0.5^2) = 1.5]] kvadratenheter. Omkrets: [[P = 12(0.5) = 6]] enheter. En skalfaktor under 1 förminskar triangeln.",
            },
            {
              "kind": "h3",
              "text": "Exempel 6: Skalfaktor 1.5",
            },
            {
              "kind": "p",
              "text": "Givet [[k = 1.5]]. Sidor: [[a = 4.5]], [[b = 6]], [[c = 7.5]]. Area: [[A = 6(1.5^2) = 13.5]] kvadratenheter. Omkrets: [[P = 12(1.5) = 18]] enheter. Decimala skalfaktorer fungerar exakt som skalfaktorer med heltal.",
            },
            {
              "kind": "h3",
              "text": "Exempel 7: Skalfaktor 4",
            },
            {
              "kind": "p",
              "text": "Givet [[k = 4]]. Sidor: [[a = 12]], [[b = 16]], [[c = 20]]. Area: [[A = 6(4^2) = 96]] kvadratenheter. Omkrets: [[P = 12(4) = 48]] enheter.",
            },
            {
              "kind": "h3",
              "text": "Exempel 8: Skalfaktor 10",
            },
            {
              "kind": "p",
              "text": "Givet [[k = 10]]. Sidor: [[a = 30]], [[b = 40]], [[c = 50]]. Area: [[A = 6(10^2) = 600]] kvadratenheter. Omkrets: [[P = 12(10) = 120]] enheter. Arean har vuxit med en faktor 100, medan sidorna har vuxit med en faktor 10.",
            },
            {
              "kind": "p",
              "text": "I alla åtta exempel ändras mönstret aldrig: sidorna växer med [[k]], omkretsen växer med [[k]] och arean växer med [[k]] i kvadrat.",
            },
          ],
        },
        "sec-right-angle": {
          "h2": "Varför behåller 3-4-5-triangeln alltid en 90-graders vinkel?",
          "blocks": [
            {
              "kind": "p",
              "text": "Skalning bryter aldrig det pythagoreiska sambandet.",
            },
            {
              "kind": "p",
              "text": "De skalade sidorna är [[3k]], [[4k]] och [[5k]]. Tillämpa Pythagoras sats på dem:",
            },
            {
              "kind": "p",
              "text": "[[[(3k)^2 + (4k)^2 = (5k)^2]]]",
            },
            {
              "kind": "p",
              "text": "Utveckla varje kvadrat:",
            },
            {
              "kind": "p",
              "text": "[[[9k^2 + 16k^2 = 25k^2]]]",
            },
            {
              "kind": "p",
              "text": "Båda leden är lika med [[25k^2]], så sambandet gäller för varje positivt [[k]]. Faktorn [[k^2]] förekommer på båda sidor, vilket är anledningen till att skalning inte kan ändra vinkeln. De två spetsiga vinklarna stannar på cirka 36.87° och 53.13°, och deras summa stannar på 90°, så den tredje vinkeln stannar på exakt 90°.",
            },
            {
              "kind": "p",
              "text": "Det här är samma idé som likformighet: varje skalad 3-4-5-triangel är likformig med den ursprungliga, med lika motsvarande vinklar och proportionella sidor. En triangel med sidorna 6, 8, 10 har samma vinklar som en triangel med sidorna 3, 4, 5.",
            },
          ],
        },
        "sec-construction": {
          "h2": "Så använder du 3-4-5-regeln för att kontrollera ett rätvinkligt hörn",
          "blocks": [
            {
              "kind": "p",
              "text": "Markera 3, mät 4 och kontrollera att diagonalen är 5.",
            },
            {
              "kind": "p",
              "text": "Byggare använder 3-4-5-metoden för att kontrollera ett 90-graders hörn utan vinkelhake. Börja vid hörnet och markera 3 enheter längs ena sidan, markera sedan 4 enheter längs den angränsande sidan. Mät avståndet mellan de två markerade ändpunkterna: om det är 5 enheter är vinkeln 90 grader, med förbehåll för mätnoggrannheten.",
            },
            {
              "kind": "p",
              "text": "Ett praktiskt exempel använder fot: 3 fot längs ena riktningen, 4 fot längs den angränsande riktningen och en diagonal på 5 fot. Kontrollen är [[3^2 + 4^2 = 5^2]], eftersom [[9 + 16 = 25]]. Om diagonalen är mer än 5 fot är hörnet vidare än 90 grader; om den är mindre är det smalare.",
            },
            {
              "kind": "p",
              "text": "Större multipler fungerar bättre på större ytor, eftersom en längre baslinje gör ett litet markeringsfel till en mindre andel av mätningen. Använd 6-8-10, 9-12-15, 12-16-20 eller 15-20-25 fot, och håll samma enhet på alla tre mätningar.",
            },
            {
              "kind": "p",
              "text": "Metoden kontrollerar sambandet för den räta vinkeln när mätningarna är noggranna. Fel, ojämna ytor, hängande måttband och markeringsfel kan påverka resultatet, så påstå inte att den garanterar perfekt noggrannhet i bygget. Håll måttbandet plant och spänt, och upprepa kontrollen från det andra hörnet där layouten tillåter det.",
            },
          ],
          "image": {
            "src": "three-four-five-construction.svg",
            "alt": "Bygglayout som visar ett hörn med 3 fot markerade längs ena riktningen, 4 fot längs den angränsande riktningen och en diagonal på 5 fot med en markering för rät vinkel",
            "caption": "Markera 3 fot åt ena hållet och 4 fot åt andra hållet: en diagonal på 5 fot betyder ett rätvinkligt hörn.",
          },
        },
        "sec-applications": {
          "h2": "Tillämpningar av 3-4-5-triangeln i byggarbete",
          "blocks": [
            {
              "kind": "p",
              "text": "3-4-5-regeln dyker upp överallt där ett rätvinkligt hörn spelar roll.",
            },
            {
              "kind": "p",
              "text": "Att kontrollera rätvinkliga hörn är den främsta användningen: en byggare markerar 3 och 4 enheter från ett hörn och kontrollerar 5-enhetersdiagonalen innan en ram fixeras på plats. Att lägga ut grunder använder samma kontroll vid varje hörn, så att väggarna börjar rätvinkligt.",
            },
            {
              "kind": "p",
              "text": "Att sätta ut planlösningar, kontrollera kvadratiska rumslayouter, bygga altaner, lägga uteplatser och lägga kakel bygger alla på rätvinkliga hörn, och metoden fungerar för var och en av dem i den skala som passar jobbet. Staketlayout, snickeri, trädgårdsarbete och lantmäteri använder samma kontroll för räta vinklar.",
            },
            {
              "kind": "p",
              "text": "Använd realistiska mått för jobbet, till exempel 3-4-5 fot för en liten ram eller 9-12-15 fot för ett grundhörn. Metoden är en praktisk kontroll, inte en ersättning för professionellt lantmäteri eller byggkrav.",
            },
          ],
        },
        "sec-similar": {
          "h2": "Sambandet mellan likformiga trianglar och förhållandet 3-4-5",
          "blocks": [
            {
              "kind": "p",
              "text": "Varje skalad 3-4-5-triangel är likformig med den ursprungliga.",
            },
            {
              "kind": "p",
              "text": "Likformiga trianglar har samma form men olika storlek: deras motsvarande vinklar är lika och deras motsvarande sidor är proportionella. Trianglarna 3-4-5 och 6-8-10 har identiska vinklar, cirka 36.87°, 53.13° och 90°, och varje sida i den andra är exakt dubbelt så lång som den motsvarande sidan i den första.",
            },
            {
              "kind": "p",
              "text": "Skalfaktorn ändrar storleken medan formen förblir oförändrad. Alla sidförhållanden stannar på 3:4:5, så [[a : b : c = 3 : 4 : 5]] gäller för den ursprungliga och för varje skalad kopia. Det är därför kalkylatorn kan beskriva varje skalad 3-4-5-triangel med ett enda tal, [[k]].",
            },
          ],
        },
        "sec-vs-special": {
          "h2": "Skillnaden mellan 3-4-5-, 45-45-90- och 30-60-90-trianglar",
          "blocks": [
            {
              "kind": "p",
              "text": "Tre rätvinkliga trianglar, tre olika sidförhållanden.",
            },
            {
              "kind": "p",
              "text": "En 3-4-5-triangel är inte automatiskt en 45-45-90- eller en 30-60-90-triangel. Alla tre är rätvinkliga trianglar, men deras vinklar och sidförhållanden skiljer sig åt, så deras formler kan inte bytas ut mot varandra. 3-4-5-triangeln har olika kateter och heltalssidor, 45-45-90-triangeln är likbent med en hypotenusa på [[a\\sqrt{2}]], och 30-60-90-triangeln har en hypotenusa som är dubbelt så lång som dess korta katet. <a href=\"/special-right-triangle-calculator/\">Kalkylatorn för speciella rätvinkliga trianglar</a> täcker fallen 45-45-90 och 30-60-90, medan <a href=\"/5-12-13-triangle-calculator/\">5-12-13-triangelkalkylatorn</a> täcker en annan pythagoreisk trippel.",
            },
            {
              "kind": "p",
              "text": "Tabellen nedan jämför de tre trianglarna sida vid sida. Bekräfta vinklarna först och välj sedan det förhållande som matchar dem: fel förhållande ger fel hypotenusa och fel area.",
            },
          ],
          "table": {
            "headers": [
              "Egenskap",
              "3-4-5",
              "45-45-90",
              "30-60-90",
            ],
            "rows": [
              [
                "Sidförhållande",
                "3:4:5",
                "1:1:√2",
                "1:√3:2",
              ],
              [
                "Vinklar",
                "36.87°, 53.13°, 90°",
                "45°, 45°, 90°",
                "30°, 60°, 90°",
              ],
              [
                "Lika kateter",
                "Nej",
                "Ja",
                "Nej",
              ],
              [
                "Hypotenusa",
                "5k",
                "a√2",
                "2a",
              ],
              [
                "Huvudegenskap",
                "Pythagoreisk trippel",
                "Likbent rätvinklig triangel",
                "Speciellt vinkelförhållande",
              ],
              [
                "Kalkylatorns fokus",
                "Skalning",
                "Beräkningar för speciella trianglar",
                "Beräkningar för speciella trianglar",
              ],
            ],
          },
          "image": {
            "src": "three-four-five-triples.svg",
            "alt": "Jämförelse av pythagoreiska tripplar 3-4-5, 6-8-10 och 5-12-13, som visar att 6-8-10 är en skalad 3-4-5 medan 5-12-13 är en annan trippel",
            "caption": "6-8-10 är en skalad 3-4-5, medan 5-12-13 är en annan pythagoreisk trippel.",
          },
        },
        "sec-mistakes": {
          "h2": "Vanliga misstag vid användning av 3-4-5-triangelkalkylatorn",
          "blocks": [
            {
              "kind": "p",
              "text": "Fjorton fel dyker upp om och om igen i 3-4-5-uppgifter.",
            },
            {
              "kind": "steps",
              "steps": [
                "Multiplicera bara en sida med skalfaktorn: med [[k = 2]] är sidorna 6, 8 och 10, inte 6, 4 och 5. Skala alla tre sidor med samma [[k]].",
                "Glömma att skala alla tre sidor lika: att bara skala kateterna bryter förhållandet och den räta vinkeln. Tillämpa samma [[k]] på varje sida.",
                "Behandla 5 som en katet i stället för hypotenusan: 5 är den längsta sidan och ligger mittemot 90°-vinkeln. [[c = 5k]] är alltid hypotenusan.",
                "Förväxla skalfaktorn med en sidlängd: [[k]] är multiplikatorn, inte en sida. Med [[k = 2]] är sidorna 6, 8 och 10.",
                "Använda noll som en giltig skalfaktor: [[k = 0]] gör alla tre sidor till noll, en degenererad figur, inte en triangel. [[k]] måste vara större än noll.",
                "Ange en negativ skalfaktor: ett negativt [[k]] ger negativa sidlängder, som inte kan beskriva en triangel. Ange bara ett positivt [[k]].",
                "Glömma att kvadrera k i areaformeln: arean växer med [[k]] i kvadrat. Med [[k = 3]] är [[A = 6 \\times 9 = 54]], inte 18.",
                "Förväxla area med omkrets: area anges i kvadratenheter och omkrets i linjära enheter. Med [[k = 2]] är båda lika med 24, men de mäter olika saker.",
                "Addera bara två sidor vid omkretsberäkning: med [[k = 2]] ger [[6 + 8 = 14]] utan hypotenusan. Addera alla tre sidor.",
                "Blanda måttenheter: en katet i fot och en diagonal i tum kan inte kombineras direkt. Omvandla varje mått till en enhet först.",
                "Anta att bara 3, 4 och 5 fungerar: varje skalad kopia, till exempel 6-8-10 eller 9-12-15, är en giltig 3-4-5-triangel.",
                "Anta att varje rätvinklig triangel följer förhållandet 3:4:5: de flesta rätvinkliga trianglar har andra förhållanden. Bekräfta förhållandet innan du använder formlerna.",
                "Förväxla en 3-4-5-triangel med en 45-45-90-triangel: en 3-4-5-triangel har vinklar på cirka 36.87° och 53.13°, inte två 45°-vinklar.",
                "Avrunda mått i onödan: tidig avrundning bär med sig fel till senare steg. Avrunda bara slutsvar.",
              ],
            },
          ],
        },
        "sec-verify": {
          "h2": "Så kontrollerar du en skalad 3-4-5-triangel",
          "blocks": [
            {
              "kind": "p",
              "text": "Fyra snabba kontroller fångar nästan varje fel.",
            },
            {
              "kind": "h3",
              "text": "Kontroll 1: Sidförhållande",
            },
            {
              "kind": "p",
              "text": "Bekräfta [[a : b : c = 3 : 4 : 5]]. Här ger [[6 : 8 : 10]] dividerat med 2 [[3 : 4 : 5]], så kontrollen godkänns. Om sidorna inte kan förkortas till 3:4:5 är de inte en skalad 3-4-5-triangel.",
            },
            {
              "kind": "h3",
              "text": "Kontroll 2: Pythagoras sats",
            },
            {
              "kind": "p",
              "text": "Bekräfta [[a^2 + b^2 = c^2]]. Här är [[6^2 + 8^2 = 36 + 64 = 100]], och [[10^2 = 100]], så satsen stämmer. Ett felaktigt värde på någon sida bryter den här likheten.",
            },
            {
              "kind": "h3",
              "text": "Kontroll 3: Skalfaktorns konsekvens",
            },
            {
              "kind": "p",
              "text": "Bekräfta [[\\frac{a}{3} = \\frac{b}{4} = \\frac{c}{5} = k]]. Här ger varje division 2, så [[k = 2]] från alla tre sidor. Om de tre divisionerna skiljer sig åt är minst en sida fel.",
            },
            {
              "kind": "h3",
              "text": "Kontroll 4: Sidornas ordning",
            },
            {
              "kind": "p",
              "text": "Bekräfta [[a < b < c]]. Här är [[6 < 8 < 10]], så ordningen stämmer. Om den förmodade hypotenusan inte är den längsta sidan har etiketterna blandats ihop.",
            },
          ],
        },
        "sec-practice": {
          "h2": "Övningsuppgifter med svar",
          "blocks": [
            {
              "kind": "p",
              "text": "Räkna alla åtta uppgifter på papper innan du läser svaren.",
            },
            {
              "kind": "h3",
              "text": "Uppgift 1: Skala med k = 2",
            },
            {
              "kind": "p",
              "text": "Skala en 3-4-5-triangel med [[k = 2]]. Hitta de tre sidlängderna, arean och omkretsen.",
            },
            {
              "kind": "h3",
              "text": "Uppgift 2: Skala med k = 4",
            },
            {
              "kind": "p",
              "text": "Skala en 3-4-5-triangel med [[k = 4]]. Hitta de tre sidlängderna, arean och omkretsen.",
            },
            {
              "kind": "h3",
              "text": "Uppgift 3: Area med k = 3",
            },
            {
              "kind": "p",
              "text": "Hitta arean av en skalad 3-4-5-triangel med [[k = 3]], i kvadratenheter.",
            },
            {
              "kind": "h3",
              "text": "Uppgift 4: Omkrets med k = 5",
            },
            {
              "kind": "p",
              "text": "Hitta omkretsen av en skalad 3-4-5-triangel med [[k = 5]], i enheter.",
            },
            {
              "kind": "h3",
              "text": "Uppgift 5: Hitta k utifrån a = 15",
            },
            {
              "kind": "p",
              "text": "En skalad 3-4-5-triangel har en kortare katet på 15. Hitta [[k]] och de andra två sidorna.",
            },
            {
              "kind": "h3",
              "text": "Uppgift 6: Hitta k utifrån b = 24",
            },
            {
              "kind": "p",
              "text": "En skalad 3-4-5-triangel har en längre katet på 24. Hitta [[k]] och de andra två sidorna.",
            },
            {
              "kind": "h3",
              "text": "Uppgift 7: Hitta k utifrån c = 35",
            },
            {
              "kind": "p",
              "text": "En skalad 3-4-5-triangel har en hypotenusa på 35. Hitta [[k]] och de två kateterna.",
            },
            {
              "kind": "h3",
              "text": "Uppgift 8: Kontrollera 12, 16 och 20",
            },
            {
              "kind": "p",
              "text": "Kontrollera om 12, 16 och 20 bildar en skalad 3-4-5-triangel, med hjälp av Pythagoras sats och sidförhållandet. Om de gör det, ange skalfaktorn.",
            },
            {
              "kind": "h3",
              "text": "Svar på övningsuppgifterna",
            },
            {
              "kind": "p",
              "text": "Svar 1: [[a = 6]], [[b = 8]], [[c = 10]], [[A = 24]] kvadratenheter, [[P = 24]] enheter.",
            },
            {
              "kind": "p",
              "text": "Svar 2: [[a = 12]], [[b = 16]], [[c = 20]], [[A = 96]] kvadratenheter, [[P = 48]] enheter.",
            },
            {
              "kind": "p",
              "text": "Svar 3: [[A = 6(3^2) = 54]] kvadratenheter.",
            },
            {
              "kind": "p",
              "text": "Svar 4: [[P = 12(5) = 60]] enheter.",
            },
            {
              "kind": "p",
              "text": "Svar 5: [[k = 15 / 3 = 5]], så [[b = 20]] och [[c = 25]].",
            },
            {
              "kind": "p",
              "text": "Svar 6: [[k = 24 / 4 = 6]], så [[a = 18]] och [[c = 30]].",
            },
            {
              "kind": "p",
              "text": "Svar 7: [[k = 35 / 5 = 7]], så [[a = 21]] och [[b = 28]].",
            },
            {
              "kind": "p",
              "text": "Svar 8: [[12^2 + 16^2 = 144 + 256 = 400 = 20^2]], och [[12 : 16 : 20]] dividerat med 4 ger [[3 : 4 : 5]], så ja, med [[k = 4]].",
            },
          ],
        },
      },
      "relatedHeading": "Relaterade rätvinkliga triangelkalkylatorer",
      "relatedIntro": "Varje kalkylator nedan hanterar en annan uppgift med rätvinkliga trianglar, så välj det verktyg som matchar det mått du behöver.",
      "relatedItems": [
        "Rätvinklig triangelkalkylator",
        "Kalkylator för pythagoreiska tripplar",
        "5-12-13-triangelkalkylator",
        "Kalkylator för speciella rätvinkliga trianglar",
        "Areakalkylator för rätvinkliga trianglar",
        "Omkretskalkylator för rätvinkliga trianglar",
      ],
      "faqHeading": "Vanliga frågor",
      "faqs": [
        {
          "question": "Vad är en 3-4-5-triangel?",
          "answer": "En 3-4-5-triangel är en rätvinklig triangel vars sidlängder följer förhållandet [[3 : 4 : 5]]. Sidorna med längden 3 och 4 är kateterna, som möts vid 90-gradersvinkeln, och sidan med längden 5 är hypotenusan. Den är den minsta pythagoreiska trippeln.",
        },
        {
          "question": "Varför bildar en 3-4-5-triangel en rät vinkel?",
          "answer": "Dess sidor uppfyller Pythagoras sats: [[3^2 + 4^2 = 5^2]], eftersom [[9 + 16 = 25]]. Den likheten gäller bara för rätvinkliga trianglar, så vinkeln mittemot sidan med längden 5 måste vara 90 grader. Skalning bevarar likheten, så varje skalad kopia behåller den räta vinkeln.",
        },
        {
          "question": "Vad är 3-4-5-regeln för trianglar?",
          "answer": "Regeln är att sidlängder i förhållandet [[3 : 4 : 5]] alltid bildar en rätvinklig triangel. Byggare använder den för att kontrollera rätvinkliga hörn: markera 3 enheter åt ena hållet, 4 enheter åt andra hållet, och om diagonalen är 5 enheter är hörnet rätvinkligt, med förbehåll för mätnoggrannheten.",
        },
        {
          "question": "Hur fungerar 3-4-5-triangelkalkylatorn?",
          "answer": "Ange en positiv skalfaktor [[k]] och klicka på Beräkna. Kalkylatorn multiplicerar de ursprungliga sidorna med [[k]] och ger [[a = 3k]], [[b = 4k]] och [[c = 5k]], och beräknar sedan arean [[A = 6k^2]] och omkretsen [[P = 12k]]. Använd Återställ för att rensa fältet.",
        },
        {
          "question": "Vad är skalfaktorn i en 3-4-5-triangel?",
          "answer": "Skalfaktorn [[k]] är det tal som multiplicerar alla tre ursprungliga sidlängder med samma belopp. Med [[k = 1]] får du den ursprungliga triangeln, ett större [[k]] förstorar den, och ett [[k]] mellan 0 och 1 förminskar den. Formen och vinklarna förblir desamma.",
        },
        {
          "question": "Hur beräknar jag sidorna i en skalad 3-4-5-triangel?",
          "answer": "Multiplicera varje del av förhållandet med [[k]]: [[a = 3k]], [[b = 4k]] och [[c = 5k]]. Med [[k = 2]] är sidorna 6, 8 och 10. Varje sida måste använda samma [[k]], annars bryts förhållandet och triangeln förlorar sin räta vinkel.",
        },
        {
          "question": "Hur beräknar jag dess area?",
          "answer": "Använd kateterna i [[A = \\frac{ab}{2}]], som förenklas till [[A = 6k^2]] för en skalad 3-4-5-triangel. Med [[k = 3]] är [[A = 6 \\times 9 = 54]] kvadratenheter. Area anges alltid i kvadratenheter, och den växer med kvadraten på [[k]].",
        },
        {
          "question": "Hur beräknar jag dess omkrets?",
          "answer": "Addera alla tre sidor med [[P = a + b + c]], som förenklas till [[P = 12k]]. Med [[k = 3]] är [[P = 36]] enheter. Omkretsen växer direkt med [[k]], så att fördubbla [[k]] fördubblar omkretsen. Svaret anges i linjära enheter, inte kvadratenheter.",
        },
        {
          "question": "Kan jag använda 6-8-10 i stället för 3-4-5?",
          "answer": "Ja. Sidorna 6, 8 och 10 är 3-4-5-triangeln skalad med [[k = 2]], så de bildar samma form med samma vinklar och samma räta vinkel. Varje skalad kopia, till exempel 9-12-15 eller 15-20-25, fungerar på samma sätt.",
        },
        {
          "question": "Hur använder byggare 3-4-5-regeln?",
          "answer": "En byggare markerar 3 fot längs ena sidan från ett hörn och 4 fot längs den angränsande sidan, och mäter sedan diagonalen mellan markeringarna. Om den visar 5 fot är hörnet rätvinkligt. Större multipler som 6-8-10 eller 9-12-15 fot passar större ytor.",
        },
        {
          "question": "Kan skalfaktorn vara ett decimaltal?",
          "answer": "Ja, varje positivt reellt värde på [[k]] ger en giltig skalad 3-4-5-triangel. Med [[k = 0.5]] är sidorna 1.5, 2 och 2.5, och med [[k = 1.5]] är de 4.5, 6 och 7.5. Noll och negativa värden ger inga giltiga trianglar.",
        },
        {
          "question": "Är varje 3-4-5-triangel en pythagoreisk trippel?",
          "answer": "Ja, varje skalad 3-4-5-triangel med en heltals skalfaktor är en pythagoreisk trippel, eftersom dess sidor är heltal som uppfyller [[a^2 + b^2 = c^2]]. Med en decimal skalfaktor uppfyller sidorna fortfarande satsen. Trippeln 5-12-13 är en annan pythagoreisk trippel.",
        },
      ],
    },
};
