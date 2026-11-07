// pythagoreanTriplesGuideTranslations.bsv.ts: Pythagorean Triples
// Guide (Page 44 of 45) translation.
export const PYTHAGOREANTRIPLES_B6_SV = {
  "sv": {
      "meta": {
        "title": "Kalkylator för pythagoreiska tripplar – kontrollera och generera tripplar",
        "description": "Kontrollera om tre heltal bildar en pythagoreisk trippel och generera tripplar med Euklides formel. Lär dig primitiva tripplar, skalning och genomarbetade exempel.",
        "primaryKeyword": "Kalkylator för pythagoreiska tripplar",
        "slug": "pythagorean-triples-calculator",
      },
      "tocHeading": "Avsnittsnavigering",
      "tocItems": {
        "sec-intro": "Kalkylator för pythagoreiska tripplar",
        "sec-calculate": "Kontrollera eller generera pythagoreiska tripplar med kalkylatorn",
        "sec-what": "Vad är en pythagoreisk trippel?",
        "sec-pythagorean": "Att förstå Pythagoras sats",
        "sec-check": "Så kontrollerar du om tre tal bildar en pythagoreisk trippel",
        "sec-euclid": "Så genererar du pythagoreiska tripplar med Euklides formel",
        "sec-proof": "Matematiskt bevis för Euklides formel",
        "sec-primitive": "Vad är en primitiv pythagoreisk trippel?",
        "sec-nonprimitive": "Vad är en icke-primitiv pythagoreisk trippel?",
        "sec-conditions": "Villkor för att generera primitiva pythagoreiska tripplar",
        "sec-difference": "Skillnaden mellan primitiva och icke-primitiva tripplar",
        "sec-scaling": "Så genererar du fler tripplar genom att skala befintliga",
        "sec-examples": "Vanliga exempel på pythagoreiska tripplar",
        "sec-worked": "Steg-för-steg-exempel med kalkylatorn",
        "sec-infinite": "Varför finns det oändligt många pythagoreiska tripplar?",
        "sec-recognize": "Så känner du igen en pythagoreisk trippel utan att gissa",
        "sec-ordinary": "Pythagoreiska tripplar och vanliga rätvinkliga trianglar",
        "sec-mistakes": "Vanliga misstag när du använder kalkylatorn för pythagoreiska tripplar",
        "sec-practice": "Övningsuppgifter med svar",
        "sec-related": "Relaterade kalkylatorer för rätvinkliga trianglar",
        "sec-faq": "Vanliga frågor",
      },
      "sections": {
        "sec-intro": {
          "h2": "Kalkylator för pythagoreiska tripplar",
          "blocks": [
            {
              "kind": "p",
              "text": "Kontrollera heltalstripplar och generera nya med Euklides formel.",
            },
            {
              "kind": "p",
              "text": "En pythagoreisk trippel är tre positiva heltal som kan vara sidorna i en rätvinklig triangel. De två kortare talen är kateterna, det största talet är hypotenusan, och de tre värdena uppfyller Pythagoras sats.",
            },
            {
              "kind": "p",
              "text": "[[[a^2+b^2=c^2]]]",
            },
            {
              "kind": "p",
              "text": "Kalkylatorn för pythagoreiska tripplar har två uppgifter. I kontrolläget anger du tre heltal och den testar om de bildar en giltig trippel. I genereringsläget anger du två heltal, [[m]] och [[n]], och den bygger en ny trippel med Euklides formel. Kontroll och generering är olika uppgifter, och den här sidan förklarar båda, steg för steg.",
            },
            {
              "kind": "p",
              "text": "Det mest kända exemplet är [[3]], [[4]] och [[5]]. Att kvadrera och addera kateterna ger [[3^2+4^2=9+16=25]], vilket är lika med [[5^2]]. Eftersom båda sidorna stämmer exakt är [[(3, 4, 5)]] en giltig trippel. En primitiv trippel är en trippel vars tre tal inte har någon gemensam faktor större än [[1]]; [[3]], [[4]] och [[5]] har ingenting gemensamt, så [[(3, 4, 5)]] är primitiv. Avsnitten nedan visar hur du kontrollerar vilka tre tal som helst, hur du genererar tripplar av alla storlekar och hur du skiljer primitiva tripplar från skalade kopior.",
            },
          ],
        },
        "sec-calculate": {
          "h2": "Kontrollera eller generera pythagoreiska tripplar med kalkylatorn",
          "blocks": [
            {
              "kind": "p",
              "text": "Två lägen, en sida: kontrollera en uppsättning tal eller bygg en ny trippel.",
            },
            {
              "kind": "h3",
              "text": "Läge 1: Kontrollera en pythagoreisk trippel",
            },
            {
              "kind": "p",
              "text": "Ange de tre sidlängderna som [[a]], [[b]] och [[c]], där [[c]] är det största värdet. Kalkylatorn kvadrerar [[a]] och [[b]], adderar resultaten, kvadrerar [[c]] och jämför ekvationens två sidor.",
            },
            {
              "kind": "p",
              "text": "[[[a^2+b^2=c^2]]]",
            },
            {
              "kind": "p",
              "text": "När båda sidorna är lika bildar de tre talen en giltig pythagoreisk trippel, och resultatet säger det. När de skiljer sig bildar talen ingen trippel, och resultatet visar de två olika summorna så att du kan se hur långt ifrån de är. Alla tre indata måste vara positiva heltal, och alla tre måste använda samma enhet.",
            },
            {
              "kind": "h3",
              "text": "Läge 2: Generera pythagoreiska tripplar",
            },
            {
              "kind": "p",
              "text": "Ange två positiva heltal, [[m]] och [[n]], där [[m]] är större än [[n]]. Kalkylatorn använder Euklides formel för att ta fram tre heltalssidlängder.",
            },
            {
              "kind": "p",
              "text": "[[[a=m^2-n^2]]]",
            },
            {
              "kind": "p",
              "text": "[[[b=2mn]]]",
            },
            {
              "kind": "p",
              "text": "[[[c=m^2+n^2]]]",
            },
            {
              "kind": "p",
              "text": "Resultatet är alltid en giltig trippel, eftersom Euklides formel är konstruerad för att uppfylla Pythagoras sats. De två kateterna kan stå i vilken ordning som helst, men [[c]] är alltid hypotenusan. För att använda kalkylatorn väljer du ett läge, anger giltiga tal, klickar på Beräkna och läser resultatet med dess steg-för-steg-uträkning. Klicka på Återställ för att rensa fälten och börja om.",
            },
          ],
        },
        "sec-what": {
          "h2": "Vad är en pythagoreisk trippel?",
          "blocks": [
            {
              "kind": "p",
              "text": "Tre positiva heltal som passar Pythagoras sats exakt.",
            },
            {
              "kind": "p",
              "text": "En pythagoreisk trippel är tre positiva heltal, skrivna [[(a, b, c)]], som uppfyller ekvationen [[a^2+b^2=c^2]]. Här är [[a]] och [[b]] kateterna, de två sidor som möts vid den räta vinkeln, och [[c]] är hypotenusan, sidan mittemot den räta vinkeln och alltid den längsta av de tre.",
            },
            {
              "kind": "p",
              "text": "Ekvationen måste gälla exakt. En nära miss är inte en trippel: om summan av de kvadrerade kateterna skiljer sig från den kvadrerade hypotenusan med så lite som en enhet, klarar de tre talen inte testet. Den strikta likheten är det som gör en trippel användbar inom byggande och snickeri, där en [[3]]-[[4]]-[[5]]-kontroll markerar ett rakt hörn utan mätfel.",
            },
            {
              "kind": "p",
              "text": "Alla tre talen måste vara hela och positiva. En rätvinklig triangel med decimalsidlängder, till exempel kateterna [[1.5]] och [[2]] med hypotenusan [[2.5]], uppfyller Pythagoras sats men är inte en pythagoreisk trippel, eftersom definitionen kräver heltal. På samma sätt är en triangel med en irrationell sida, till exempel kateterna [[1]] och [[1]] med hypotenusan [[\\sqrt{2}]], en rätvinklig triangel men inte en trippel. Ordet trippel är reserverat för positiva heltalslösningar.",
            },
            {
              "kind": "p",
              "text": "Trippeln [[(3, 4, 5)]] är det naturliga första exemplet. Dess kateter är [[3]] och [[4]], dess hypotenusa är [[5]], och [[9+16=25]] bekräftar ekvationen. Kateternas ordning spelar ingen roll: [[(4, 3, 5)]] beskriver samma triangel. Det som spelar roll är att de två mindre talen är kateterna och det största är hypotenusan.",
            },
          ],
          "image": {
            "src": "pythagorean-triples-squares.svg",
            "alt": "Kvadrater ritade på sidorna 3, 4 och 5 med areorna 9, 16 och 25, som visar att 9 plus 16 är lika med 25",
            "caption": "Kvadrater på sidorna 3, 4 och 5 har areorna 9, 16 och 25. Eftersom 9 + 16 = 25 bildar talen 3, 4 och 5 en pythagoreisk trippel.",
          },
        },
        "sec-pythagorean": {
          "h2": "Att förstå Pythagoras sats",
          "blocks": [
            {
              "kind": "p",
              "text": "Satsen bakom varje trippel: kateternas kvadrater adderade ger hypotenusans kvadrat.",
            },
            {
              "kind": "p",
              "text": "Pythagoras sats säger att i varje rätvinklig triangel är hypotenusans kvadrat lika med summan av de andra två sidornas kvadrater. Med kateterna [[a]] och [[b]] och hypotenusan [[c]] lyder satsen så här.",
            },
            {
              "kind": "p",
              "text": "[[[a^2+b^2=c^2]]]",
            },
            {
              "kind": "p",
              "text": "Ett tydligt sätt att se det är genom areor. Rita en kvadrat på varje sida av triangeln. Kvadraten på katet [[a]] har arean [[a^2]], kvadraten på katet [[b]] har arean [[b^2]], och kvadraten på hypotenusan har arean [[c^2]]. Satsen säger att de två första areorna adderade ger den tredje. För triangeln [[3]]-[[4]]-[[5]] har kvadraterna areorna [[9]], [[16]] och [[25]], och [[9+16=25]] visar balansen direkt.",
            },
            {
              "kind": "p",
              "text": "Den areabilden förklarar också varför [[3]]-[[4]]-[[5]] är en giltig rätvinklig triangel. Dess sidlängder uppfyller areabalansen exakt, så vinkeln mellan kateterna måste vara en rät vinkel. Varje pythagoreisk trippel uppfyller satsen, eftersom en trippel definieras av den ekvationen. Det omvända gäller inte: gott om rätvinkliga trianglar har sidlängder som inte är heltal, så de uppfyller satsen utan att vara tripplar. Använd <a href=\"/pythagorean-theorem-calculator/\">kalkylatorn för Pythagoras sats</a> när en triangel har decimala eller okända sidor i stället för heltalstripplar.",
            },
          ],
          "image": {
            "src": "pythagorean-triples-theorem.svg",
            "alt": "Rätvinklig triangel ABC med kateterna a lika med 3 och b lika med 4, hypotenusan c lika med 5, en rätvinkelsmarkering och formeln a i kvadrat plus b i kvadrat lika med c i kvadrat",
            "caption": "Rätvinklig triangel ABC med kateterna a = 3 och b = 4 och hypotenusan c = 5. Rätvinkelsmarkeringen sitter vid C, och 3 i kvadrat plus 4 i kvadrat är lika med 5 i kvadrat.",
          },
        },
        "sec-check": {
          "h2": "Så kontrollerar du om tre tal bildar en pythagoreisk trippel",
          "blocks": [
            {
              "kind": "p",
              "text": "Åtta korta steg förvandlar vilka tre heltal som helst till ett tydligt ja eller nej.",
            },
            {
              "kind": "steps",
              "steps": [
                "Identifiera det största av de tre värdena.",
                "Tilldela det största värdet till [[c]], hypotenusan.",
                "Tilldela de andra två värdena till [[a]] och [[b]], kateterna.",
                "Kvadrera [[a]].",
                "Kvadrera [[b]].",
                "Addera de två kvadraterna.",
                "Kvadrera [[c]].",
                "Jämför de två resultaten: lika betyder en giltig trippel, olika betyder ingen trippel.",
              ],
            },
            {
              "kind": "p",
              "text": "Här är ett giltigt exempel. Kontrollera [[7]], [[24]] och [[25]]: det största värdet är [[25]], så det är hypotenusan. Kvadrera kateterna och addera.",
            },
            {
              "kind": "p",
              "text": "[[[7^2+24^2=25^2]]]",
            },
            {
              "kind": "p",
              "text": "[[[49+576=625]]]",
            },
            {
              "kind": "p",
              "text": "Eftersom [[625=625]] stämmer de två sidorna överens, så [[(7, 24, 25)]] är en giltig pythagoreisk trippel. Den är också primitiv, eftersom [[7]], [[24]] och [[25]] inte har någon gemensam faktor större än [[1]].",
            },
            {
              "kind": "p",
              "text": "Nu ett ogiltigt exempel. Kontrollera [[4]], [[5]] och [[6]]: det största värdet är [[6]], så det är hypotenusan.",
            },
            {
              "kind": "p",
              "text": "[[[4^2+5^2 \\neq 6^2]]]",
            },
            {
              "kind": "p",
              "text": "[[[16+25=41]]]",
            },
            {
              "kind": "p",
              "text": "[[[6^2=36]]]",
            },
            {
              "kind": "p",
              "text": "Eftersom [[41]] inte är lika med [[36]] bildar värdena ingen pythagoreisk trippel. Samma åtta steg fungerar för alla positiva heltalsindata, stora som små, så exakt verifiering beror aldrig på minne eller gissning.",
            },
          ],
          "image": {
            "src": "pythagorean-triples-check-flow.svg",
            "alt": "Steg-för-steg-flöde för att kontrollera 7, 24, 25: kvadrera kateterna till 49 och 576, addera till 625, kvadrera hypotenusan till 625 och bekräfta likheten",
            "caption": "Kontroll av 7, 24, 25 steg för steg: 49 + 576 = 625 och 25 i kvadrat = 625, så de två sidorna stämmer överens och trippeln är giltig.",
          },
        },
        "sec-euclid": {
          "h2": "Så genererar du pythagoreiska tripplar med Euklides formel",
          "blocks": [
            {
              "kind": "p",
              "text": "Två små heltal in, en fullständig trippel ut: det är Euklides formel.",
            },
            {
              "kind": "p",
              "text": "Euklides formel bygger en pythagoreisk trippel från två positiva heltal, [[m]] och [[n]], där [[m]] är större än [[n]]. Parametern [[m]] är det större heltalet och [[n]] är det mindre, och båda måste vara heltal. De tre formlerna ger de två kateterna och hypotenusan.",
            },
            {
              "kind": "p",
              "text": "[[[a=m^2-n^2]]]",
            },
            {
              "kind": "p",
              "text": "[[[b=2mn]]]",
            },
            {
              "kind": "p",
              "text": "[[[c=m^2+n^2]]]",
            },
            {
              "kind": "p",
              "text": "Villkoret [[m>n>0]] är viktigt. Om [[m]] är lika med [[n]] blir den första kateten noll, vilket inte är en triangelsida. Om [[m]] är mindre än [[n]] blir den första kateten negativ, vilket också är omöjligt. Decimalvärden för [[m]] och [[n]] är inte heller giltiga här, eftersom formeln är avsedd för heltalsparametrar som ger heltalssidor.",
            },
            {
              "kind": "p",
              "text": "Prova [[m=2]] och [[n=1]]. Den första kateten är [[a=2^2-1^2=4-1=3]], den andra kateten är [[b=2(2)(1)=4]], och hypotenusan är [[c=2^2+1^2=4+1=5]]. Resultatet är trippeln [[(3, 4, 5)]]. Observera att de genererade kateterna kan stå i vilken ordning som helst: formeln kan returnera den större kateten först eller sist, men [[c]] är alltid hypotenusan. Nästa avsnitt bevisar varför dessa formler alltid uppfyller Pythagoras sats.",
            },
          ],
          "image": {
            "src": "pythagorean-triples-euclid-flow.svg",
            "alt": "Flödesschema för Euklides formel med m lika med 3 och n lika med 2 som ger 5, 12 och 13",
            "caption": "Euklides formel med m = 3 och n = 2: m i kvadrat minus n i kvadrat är 5, 2mn är 12 och m i kvadrat plus n i kvadrat är 13, vilket ger trippeln 5, 12, 13.",
          },
        },
        "sec-proof": {
          "h2": "Matematiskt bevis för Euklides formel",
          "blocks": [
            {
              "kind": "p",
              "text": "Ett kort algebrabevis visar varför Euklides formel aldrig kan misslyckas.",
            },
            {
              "kind": "p",
              "text": "Börja med de två katetformlerna, [[a=m^2-n^2]] och [[b=2mn]], och testa om [[a^2+b^2]] är lika med [[c^2]] när [[c=m^2+n^2]]. Sätt in formlerna i vänsterledet av Pythagoras ekvation.",
            },
            {
              "kind": "p",
              "text": "[[[a^2+b^2=(m^2-n^2)^2+(2mn)^2]]]",
            },
            {
              "kind": "p",
              "text": "Utveckla båda kvadraterna. Den första kvadraten utvecklas till [[m^4-2m^2n^2+n^4]] och den andra till [[4m^2n^2]], så summan blir följande uttryck.",
            },
            {
              "kind": "p",
              "text": "[[[=m^4-2m^2n^2+n^4+4m^2n^2]]]",
            },
            {
              "kind": "p",
              "text": "Kombinera mitttermerna: [[-2m^2n^2+4m^2n^2]] är [[+2m^2n^2]]. Uttrycket är nu en perfekt kvadrat i förklädnad.",
            },
            {
              "kind": "p",
              "text": "[[[=m^4+2m^2n^2+n^4]]]",
            },
            {
              "kind": "p",
              "text": "Faktorisera det. Resultatet är kvadraten av [[m^2+n^2]], vilket är exakt [[c]].",
            },
            {
              "kind": "p",
              "text": "[[[=(m^2+n^2)^2]]]",
            },
            {
              "kind": "p",
              "text": "Eftersom [[c=m^2+n^2]] är högerledet [[c^2]], och beviset är fullständigt.",
            },
            {
              "kind": "p",
              "text": "[[[a^2+b^2=c^2]]]",
            },
            {
              "kind": "p",
              "text": "Nyckelsteget är att mitttermerna delvis tar ut varandra: [[-2m^2n^2]] från den första kvadraten och [[+4m^2n^2]] från den andra lämnar exakt [[+2m^2n^2]] som behövs för att fullborda kvadraten. Eftersom detta fungerar för alla heltal [[m]] och [[n]] med [[m>n>0]] genererar varje par en äkta pythagoreisk trippel. Beviset säger ingenting om primitivitet: om resultatet är primitivt beror på de extra villkoren i avsnitten nedan.",
            },
          ],
        },
        "sec-primitive": {
          "h2": "Vad är en primitiv pythagoreisk trippel?",
          "blocks": [
            {
              "kind": "p",
              "text": "En primitiv trippel är en trippel i sin enklaste form, utan gemensam faktor.",
            },
            {
              "kind": "p",
              "text": "En primitiv pythagoreisk trippel är en trippel vars tre sidlängder inte har någon gemensam positiv heltalsfaktor större än [[1]]. I symboler är den största gemensamma delaren av de tre sidorna [[1]].",
            },
            {
              "kind": "p",
              "text": "[[[\\gcd(a,b,c)=1]]]",
            },
            {
              "kind": "p",
              "text": "Trippeln [[(3, 4, 5)]] är primitiv eftersom [[\\gcd(3,4,5)=1]]: inget heltal större än [[1]] delar alla tre talen. Samma sak gäller för [[(5, 12, 13)]], [[(8, 15, 17)]] och [[(7, 24, 25)]]. Var och en av dessa är en bastrippel som inte kan reduceras till en mindre heltalstrippel genom division.",
            },
            {
              "kind": "p",
              "text": "Primitiv betyder inte att trippeln är den minsta möjliga i alla avseenden. Det betyder bara att de tre värdena inte har någon gemensam faktor annan än [[1]]. En stor primitiv trippel som [[(20, 21, 29)]] är fortfarande primitiv, eftersom [[20]], [[21]] och [[29]] inte har någon gemensam delare. Tabellen nedan jämför delarna av en primitiv trippel och en skalad kopia.",
            },
          ],
          "table": {
            "headers": [
              "Trippel",
              "Gemensamma delare",
              "Primitiv?",
            ],
            "rows": [
              [
                "[[(3, 4, 5)]]",
                "[[1]]",
                "Ja",
              ],
              [
                "[[(5, 12, 13)]]",
                "[[1]]",
                "Ja",
              ],
              [
                "[[(8, 15, 17)]]",
                "[[1]]",
                "Ja",
              ],
              [
                "[[(6, 8, 10)]]",
                "[[1, 2]]",
                "Nej",
              ],
              [
                "[[(9, 12, 15)]]",
                "[[1, 3]]",
                "Nej",
              ],
            ],
          },
          "image": {
            "src": "pythagorean-triples-primitive-vs-scaled.svg",
            "alt": "Två rätvinkliga trianglar, 3-4-5 och 6-8-10, som visar att den andra är dubbelt så stor som den första och att bara den första är primitiv",
            "caption": "Triangeln 3-4-5 är primitiv, medan 6-8-10 är dubbelt så stor på varje sida: gcd(3, 4, 5) = 1, men gcd(6, 8, 10) = 2.",
          },
        },
        "sec-nonprimitive": {
          "h2": "Vad är en icke-primitiv pythagoreisk trippel?",
          "blocks": [
            {
              "kind": "p",
              "text": "En icke-primitiv trippel är en skalad kopia av en primitiv trippel.",
            },
            {
              "kind": "p",
              "text": "En icke-primitiv pythagoreisk trippel är en trippel vars tre värden har en gemensam heltalsfaktor större än [[1]]. Den är fortfarande en giltig trippel, eftersom den uppfyller [[a^2+b^2=c^2]] exakt. Den är helt enkelt inte i enklaste form.",
            },
            {
              "kind": "p",
              "text": "Börja med den primitiva trippeln [[(3, 4, 5)]] och multiplicera varje sida med [[2]]. Resultatet är [[(6, 8, 10)]], och kontrollen fungerar fortfarande: [[36+64=100]]. Multiplicera med [[3]] i stället och resultatet är [[(9, 12, 15)]], med [[81+144=225]]. Båda skalade tripplarna är giltiga, och ingen av dem är primitiv, eftersom den första har den gemensamma faktorn [[2]] och den andra den gemensamma faktorn [[3]].",
            },
            {
              "kind": "p",
              "text": "Att hitta den gemensamma faktorn är enkelt: ta den största gemensamma delaren av de tre sidorna. För [[(6, 8, 10)]] är den [[2]]; för [[(9, 12, 15)]] är den [[3]]. Att dividera varje sida med den faktorn återställer den primitiva trippeln under. Så [[(6, 8, 10)]] dividerat med [[2]] ger tillbaka [[(3, 4, 5)]], och [[(9, 12, 15)]] dividerat med [[3]] ger också tillbaka [[(3, 4, 5)]]. Varje icke-primitiv trippel reduceras till exakt en primitiv trippel på detta sätt.",
            },
          ],
        },
        "sec-conditions": {
          "h2": "Villkor för att generera primitiva pythagoreiska tripplar",
          "blocks": [
            {
              "kind": "p",
              "text": "Euklides formel ger en primitiv trippel bara när båda parametervillkoren gäller.",
            },
            {
              "kind": "p",
              "text": "Två villkor för [[m]] och [[n]] avgör om Euklides formel ger en primitiv trippel. Båda måste gälla samtidigt, och inget av dem räcker ensamt.",
            },
            {
              "kind": "h3",
              "text": "Villkor 1: Relativt prima parametrar",
            },
            {
              "kind": "p",
              "text": "Parametrarna måste vara relativt prima, vilket betyder att de inte har någon gemensam faktor större än [[1]].",
            },
            {
              "kind": "p",
              "text": "[[[\\gcd(m,n)=1]]]",
            },
            {
              "kind": "p",
              "text": "När [[m]] och [[n]] har en gemensam faktor läcker den faktorn in i alla tre genererade sidor. Till exempel har [[m=4]] och [[n=2]] den gemensamma faktorn [[2]], och formeln ger [[(12, 16, 20)]], vars sidor alla har den gemensamma faktorn [[4]]. Resultatet är icke-primitivt.",
            },
            {
              "kind": "h3",
              "text": "Villkor 2: Motsatt paritet",
            },
            {
              "kind": "p",
              "text": "En parameter måste vara jämn och den andra udda. När båda parametrarna är udda blir de genererade kateterna och hypotenusan alla jämna, så trippeln har den gemensamma faktorn [[2]] och kan inte vara primitiv. Till exempel är [[m=3]] och [[n=1]] relativt prima men båda udda, och formeln ger [[(8, 6, 10)]], som är den icke-primitiva trippeln [[(6, 8, 10)]] med kateterna i en annan ordning.",
            },
            {
              "kind": "p",
              "text": "Tre parameterpar visar hur villkoren samverkar. Paret [[(2, 1)]] är relativt prima med motsatt paritet och ger den primitiva trippeln [[(3, 4, 5)]]. Paret [[(3, 2)]] är relativt prima med motsatt paritet och ger den primitiva trippeln [[(5, 12, 13)]]. Paret [[(3, 1)]] är relativt prima men båda udda, så det ger den icke-primitiva trippeln [[(6, 8, 10)]]. Relativt prima utan motsatt paritet räcker inte, och motsatt paritet utan relativt prima räcker inte heller.",
            },
          ],
          "image": {
            "src": "pythagorean-triples-conditions.svg",
            "alt": "Två parameterexempel: m lika med 3 och n lika med 2 ger primitiva 5-12-13, medan m lika med 3 och n lika med 1 ger icke-primitiva 6-8-10",
            "caption": "Parametrarna m = 3, n = 2 är relativt prima med motsatt paritet och ger primitiva 5-12-13. Parametrarna m = 3, n = 1 är båda udda och ger icke-primitiva 6-8-10.",
          },
        },
        "sec-difference": {
          "h2": "Skillnaden mellan primitiva och icke-primitiva tripplar",
          "blocks": [
            {
              "kind": "p",
              "text": "Samma sats, olika form: en tabell sammanfattar hela skillnaden.",
            },
            {
              "kind": "p",
              "text": "Båda typerna av tripplar uppfyller Pythagoras sats exakt, så båda beskriver äkta rätvinkliga trianglar. Skillnaden handlar bara om gemensamma faktorer och hur trippeln togs fram. En primitiv trippel är ett grundmönster; en icke-primitiv trippel är oftast en multipel av ett sådant.",
            },
          ],
          "table": {
            "headers": [
              "Egenskap",
              "Primitiv",
              "Icke-primitiv",
            ],
            "rows": [
              [
                "Gemensam delare",
                "Endast [[1]]",
                "Större än [[1]]",
              ],
              [
                "Sidlängder",
                "Kan inte reduceras till en mindre heltalstrippel",
                "Kan divideras med en gemensam faktor",
              ],
              [
                "Exempel",
                "[[3, 4, 5]]",
                "[[6, 8, 10]]",
              ],
              [
                "Generering",
                "Relativt prima [[m]], [[n]] med motsatt paritet",
                "Andra parameterkombinationer eller heltalsmultiplar",
              ],
              [
                "Relation",
                "Grundläggande heltalstrippel",
                "Ofta en multipel av en primitiv trippel",
              ],
            ],
          },
        },
        "sec-scaling": {
          "h2": "Så genererar du fler tripplar genom att skala befintliga",
          "blocks": [
            {
              "kind": "p",
              "text": "Multiplicera varje sida med samma heltal så förblir trippeln giltig.",
            },
            {
              "kind": "p",
              "text": "För varje positivt heltal [[k]] ger multiplikation av varje sida i en pythagoreisk trippel [[(a, b, c)]] med [[k]] en annan pythagoreisk trippel, [[(ka, kb, kc)]].",
            },
            {
              "kind": "p",
              "text": "[[[\\boxed{(ka, kb, kc)}]]]",
            },
            {
              "kind": "p",
              "text": "Anledningen är enkel algebra. Att kvadrera de skalade kateterna ger [[(ka)^2+(kb)^2=k^2a^2+k^2b^2]], och att bryta ut [[k^2]] ger [[k^2(a^2+b^2)]]. Eftersom den ursprungliga trippeln uppfyller [[a^2+b^2=c^2]] är den skalade summan lika med [[k^2c^2]], vilket är [[(kc)^2]]. Den skalade trippeln uppfyller därför satsen exakt.",
            },
            {
              "kind": "p",
              "text": "Att skala [[(3, 4, 5)]] med [[2]] ger [[(6, 8, 10)]], och att skala med [[3]] ger [[(9, 12, 15)]]. Att skala [[(5, 12, 13)]] med [[2]] ger [[(10, 24, 26)]], och att skala [[(8, 15, 17)]] med [[3]] ger [[(24, 45, 51)]]. Varje resultat är en giltig trippel, och varje resultat är icke-primitivt, eftersom multiplikatorn blir en gemensam faktor för alla tre sidor.",
            },
            {
              "kind": "p",
              "text": "En heltalsmultiplikator bevarar heltalssidlängder, vilket är anledningen till att skalning är ett tillförlitligt sätt att bygga nya tripplar. En godtycklig reell multiplikator, till exempel [[1.5]], behåller triangeln som rätvinklig med samma form, men sidorna kan sluta vara heltal: [[(3, 4, 5)]] skalad med [[1.5]] ger [[(4.5, 6, 7.5)]], som är en rätvinklig triangel men inte en pythagoreisk trippel. Observera att kalkylatorn själv inte har något separat multiplikatorfält; skalning är en manuell beräkning som du gör med de tripplar den kontrollerar eller genererar.",
            },
          ],
          "image": {
            "src": "pythagorean-triples-scaling.svg",
            "alt": "Trippeln 3-4-5 multiplicerad med 2, 3 och 4 för att ge 6-8-10, 9-12-15 och 12-16-20",
            "caption": "Att skala 3-4-5 med 2, 3 och 4 ger 6-8-10, 9-12-15 och 12-16-20. Varje skalad uppsättning är fortfarande en giltig pythagoreisk trippel.",
          },
        },
        "sec-examples": {
          "h2": "Vanliga exempel på pythagoreiska tripplar",
          "blocks": [
            {
              "kind": "p",
              "text": "Tio tripplar värda att kunna utantill, var och en verifierad.",
            },
            {
              "kind": "p",
              "text": "Tabellen nedan listar tio välkända pythagoreiska tripplar. Varje rad har kontrollerats mot Pythagoras sats, och varje rad är primitiv utom där en skalad multipel anges. Kateterna i varje rad kan listas i vilken ordning som helst: [[(4, 3, 5)]] är samma triangel som [[(3, 4, 5)]].",
            },
          ],
          "table": {
            "headers": [
              "Första katet",
              "Andra katet",
              "Hypotenusa",
            ],
            "rows": [
              [
                "[[3]]",
                "[[4]]",
                "[[5]]",
              ],
              [
                "[[5]]",
                "[[12]]",
                "[[13]]",
              ],
              [
                "[[8]]",
                "[[15]]",
                "[[17]]",
              ],
              [
                "[[7]]",
                "[[24]]",
                "[[25]]",
              ],
              [
                "[[20]]",
                "[[21]]",
                "[[29]]",
              ],
              [
                "[[12]]",
                "[[35]]",
                "[[37]]",
              ],
              [
                "[[9]]",
                "[[40]]",
                "[[41]]",
              ],
              [
                "[[28]]",
                "[[45]]",
                "[[53]]",
              ],
              [
                "[[11]]",
                "[[60]]",
                "[[61]]",
              ],
              [
                "[[16]]",
                "[[63]]",
                "[[65]]",
              ],
            ],
          },
          "image": {
            "src": "pythagorean-triples-compare.svg",
            "alt": "Tre rätvinkliga trianglar ritade i skala: 3-4-5, 5-12-13 och 8-15-17, som visar olika former",
            "caption": "Tre primitiva tripplar ritade i skala: 3-4-5, 5-12-13 och 8-15-17. Var och en har en annan form och olika spetsiga vinklar.",
          },
        },
        "sec-worked": {
          "h2": "Steg-för-steg-exempel med kalkylatorn",
          "blocks": [
            {
              "kind": "p",
              "text": "Åtta exempel som täcker båda lägena: fyra kontroller och fyra genereringar.",
            },
            {
              "kind": "h3",
              "text": "Exempel 1: Kontrollera 3, 4, 5",
            },
            {
              "kind": "p",
              "text": "Ange [[a=3]], [[b=4]] och [[c=5]] i kontrolläget. Kvadrera kateterna och addera: [[3^2+4^2=9+16=25]]. Kvadrera hypotenusan: [[5^2=25]]. Eftersom [[25=25]] är resultatet en giltig trippel. Den är primitiv, eftersom [[3]], [[4]] och [[5]] inte har någon gemensam faktor.",
            },
            {
              "kind": "h3",
              "text": "Exempel 2: Kontrollera 5, 12, 13",
            },
            {
              "kind": "p",
              "text": "Ange [[a=5]], [[b=12]] och [[c=13]]. Kateterna ger [[5^2+12^2=25+144=169]], och hypotenusan ger [[13^2=169]]. Eftersom [[169=169]] är resultatet en giltig trippel. Den är primitiv, eftersom [[\\gcd(5,12,13)=1]].",
            },
            {
              "kind": "h3",
              "text": "Exempel 3: Kontrollera 6, 8, 10",
            },
            {
              "kind": "p",
              "text": "Ange [[a=6]], [[b=8]] och [[c=10]]. Kateterna ger [[6^2+8^2=36+64=100]], och hypotenusan ger [[10^2=100]]. Eftersom [[100=100]] är resultatet en giltig trippel. Den är icke-primitiv, eftersom alla tre sidor har den gemensamma faktorn [[2]]; att dividera med [[2]] ger tillbaka den primitiva trippeln [[(3, 4, 5)]].",
            },
            {
              "kind": "h3",
              "text": "Exempel 4: Kontrollera 7, 24, 25",
            },
            {
              "kind": "p",
              "text": "Ange [[a=7]], [[b=24]] och [[c=25]]. Kateterna ger [[7^2+24^2=49+576=625]], och hypotenusan ger [[25^2=625]]. Eftersom [[625=625]] är resultatet en giltig trippel. Den är primitiv, eftersom [[7]], [[24]] och [[25]] inte har någon gemensam faktor.",
            },
            {
              "kind": "h3",
              "text": "Exempel 5: Generera med m = 2, n = 1",
            },
            {
              "kind": "p",
              "text": "Ange [[m=2]] och [[n=1]] i genereringsläget. Den första kateten är [[a=2^2-1^2=3]], den andra kateten är [[b=2(2)(1)=4]], och hypotenusan är [[c=2^2+1^2=5]]. Resultatet är [[(3, 4, 5)]], en primitiv trippel.",
            },
            {
              "kind": "h3",
              "text": "Exempel 6: Generera med m = 3, n = 2",
            },
            {
              "kind": "p",
              "text": "Ange [[m=3]] och [[n=2]]. Den första kateten är [[a=3^2-2^2=9-4=5]], den andra kateten är [[b=2(3)(2)=12]], och hypotenusan är [[c=3^2+2^2=13]]. Resultatet är [[(5, 12, 13)]], en primitiv trippel, eftersom [[3]] och [[2]] är relativt prima med motsatt paritet.",
            },
            {
              "kind": "h3",
              "text": "Exempel 7: Generera med m = 4, n = 1",
            },
            {
              "kind": "p",
              "text": "Ange [[m=4]] och [[n=1]]. Formlerna ger [[a=4^2-1^2=15]], [[b=2(4)(1)=8]] och [[c=4^2+1^2=17]]. Med kateterna listade i stigande ordning är resultatet [[(8, 15, 17)]]. Den är primitiv, eftersom [[4]] och [[1]] är relativt prima med motsatt paritet.",
            },
            {
              "kind": "h3",
              "text": "Exempel 8: Generera med m = 3, n = 1",
            },
            {
              "kind": "p",
              "text": "Ange [[m=3]] och [[n=1]]. Formlerna ger [[a=3^2-1^2=8]], [[b=2(3)(1)=6]] och [[c=3^2+1^2=10]]. Med kateterna listade i stigande ordning är resultatet [[(6, 8, 10)]]. Denna trippel är icke-primitiv: [[3]] och [[1]] är relativt prima, men båda är udda, så villkoret om motsatt paritet faller och varje sida blir jämn. Att dividera med [[2]] ger tillbaka den primitiva trippeln [[(3, 4, 5)]].",
            },
          ],
        },
        "sec-infinite": {
          "h2": "Varför finns det oändligt många pythagoreiska tripplar?",
          "blocks": [
            {
              "kind": "p",
              "text": "Euklides formel tar aldrig slut på indata, så den tar aldrig slut på tripplar.",
            },
            {
              "kind": "p",
              "text": "Euklides formel accepterar varje par av positiva heltal [[m]] och [[n]] där [[m]] är större än [[n]], och det finns oändligt många sådana par. Varje nytt par ger en trippel, och olika par ger i allmänhet olika tripplar. Paren [[(2, 1)]], [[(3, 2)]], [[(4, 1)]], [[(4, 3)]] och [[(5, 2)]] ger [[(3, 4, 5)]], [[(5, 12, 13)]], [[(8, 15, 17)]], [[(7, 24, 25)]] respektive [[(20, 21, 29)]], och listan fortsätter: [[(5, 4)]] ger [[(9, 40, 41)]], och [[(6, 1)]] ger [[(12, 35, 37)]]. Större värden på [[m]] fortsätter att ge större tripplar utan slut.",
            },
            {
              "kind": "p",
              "text": "Heltalsmultiplar lägger till ännu fler. Varje primitiv trippel genererar en hel familj av skalade kopior: [[(3, 4, 5)]] ger ensam [[(6, 8, 10)]], [[(9, 12, 15)]], [[(12, 16, 20)]] och så vidare för alltid. Mellan de oändliga parameterparen och de oändliga multiplarna är tillgången på pythagoreiska tripplar oändlig. Observera den noggranna formuleringen: inte varje parameterpar ger en primitiv trippel, men varje par ger en giltig trippel, och de primitiva är också oändligt många.",
            },
          ],
        },
        "sec-recognize": {
          "h2": "Så känner du igen en pythagoreisk trippel utan att gissa",
          "blocks": [
            {
              "kind": "p",
              "text": "Några vanor gör att bekanta tripplar sticker ut innan du räknar.",
            },
            {
              "kind": "p",
              "text": "Börja med att behandla det största värdet som hypotenusan och jämföra de kvadrerade värdena, exakt som kontrollstegen beskriver. Med övning blir de vanliga tripplarna bekanta: [[3]]-[[4]]-[[5]], [[5]]-[[12]]-[[13]], [[8]]-[[15]]-[[17]] och [[7]]-[[24]]-[[25]] förekommer så ofta i läroböcker och prov att det sparar verklig tid att känna igen dem.",
            },
            {
              "kind": "p",
              "text": "Leta sedan efter gemensamma faktorer. Om alla tre talen är jämna, dividera med [[2]] och se vad som återstår. Uppsättningen [[6]]-[[8]]-[[10]] känns omedelbart igen som dubbla [[3]]-[[4]]-[[5]] när faktorn [[2]] upptäcks. Att reducera en icke-primitiv trippel till dess primitiva form avslöjar ofta ett bekant mönster som döljer sig bakom större tal.",
            },
            {
              "kind": "p",
              "text": "När du behöver en ny trippel i stället för en kontroll är Euklides formel den tillförlitliga vägen: välj små värden på [[m]] och [[n]] och generera. Igenkänning är en hjälpsam genväg, men exakt verifiering är alltid det slutliga ordet. En trippel som ser bekant ut förtjänar ändå kvadrera-och-jämför-testet innan du litar på den.",
            },
          ],
        },
        "sec-ordinary": {
          "h2": "Pythagoreiska tripplar och vanliga rätvinkliga trianglar",
          "blocks": [
            {
              "kind": "p",
              "text": "Varje trippel är en rätvinklig triangel, men de flesta rätvinkliga trianglar är inte tripplar.",
            },
            {
              "kind": "p",
              "text": "En rätvinklig triangel kan ha heltalssidlängder, decimalsidlängder eller irrationella sidlängder. Bara den första kategorin kan bilda en pythagoreisk trippel. Trippeln [[(3, 4, 5)]] är en heltalstriangel, och den kvalificerar sig. En triangel med kateterna [[1]] och [[1]] och hypotenusan [[\\sqrt{2}]] är en äkta rätvinklig triangel, eftersom [[1+1=2]], men dess hypotenusa är irrationell, så den är inte en trippel. En triangel med sidorna [[3]], [[4]] och [[5.1]] misslyckas med ekvationen, eftersom [[9+16=25]] och [[5.1^2=26.01]], så den är inte ens en rätvinklig triangel.",
            },
            {
              "kind": "p",
              "text": "Skillnaden spelar roll i praktiken. Byggare använder [[3]]-[[4]]-[[5]] eftersom heltal är lätta att mäta med ett måttband. En triangel med sidorna [[3]], [[4]] och [[5.1]] ser nästan rät ut men avviker med en synlig vinkel, och ingen heltalstests skulle godkänna den. Pythagoras sats gäller för alla rätvinkliga trianglar, oavsett sidlängder. Termen pythagoreisk trippel syftar bara på de positiva heltalslösningarna, och den snäva betydelsen är det som gör tripplar speciella.",
            },
          ],
        },
        "sec-mistakes": {
          "h2": "Vanliga misstag när du använder kalkylatorn för pythagoreiska tripplar",
          "blocks": [
            {
              "kind": "p",
              "text": "Femton misstag, vart och ett med åtgärden bredvid.",
            },
            {
              "kind": "list",
              "items": [
                "Att ange [[c]] som en mindre sida: hypotenusan måste vara det största värdet, så tilldela alltid det största talet till [[c]] innan du kontrollerar.",
                "Att glömma att kvadrera värdena: satsen jämför kvadrater, inte sidlängderna själva, så kvadrera [[a]], [[b]] och [[c]] först.",
                "Att addera sidorna i stället för deras kvadrater: [[a+b]] är fel summa; kontrollen behöver [[a^2+b^2]] mot [[c^2]].",
                "Att använda [[a+b=c]] i stället för [[a^2+b^2=c^2]]: den enkla summan av två sidor är aldrig lika med hypotenusan i en rätvinklig triangel.",
                "Att förväxla hypotenusan med en katet: hypotenusan ligger mittemot den räta vinkeln och är alltid den längsta sidan.",
                "Att använda decimalvärden och förvänta sig en heltalstrippel: decimaler kan bilda en rätvinklig triangel, men bara positiva heltal bildar en pythagoreisk trippel.",
                "Att ange noll eller negativa sidlängder: sidlängder måste vara positiva, och noll eller negativa indata avvisas.",
                "Att använda [[m]] lika med [[n]]: den första kateten blir [[m^2-n^2=0]], vilket inte är en triangelsida.",
                "Att använda [[m]] mindre än [[n]]: den första kateten blir negativ, vilket är omöjligt för en sidlängd.",
                "Att ange decimala [[m]]- och [[n]]-värden: Euklides formel behöver positiva heltalsparametrar för att ge heltalssidor.",
                "Att anta att varje genererad trippel är primitiv: generering garanterar bara en giltig trippel, och primitivitet kräver relativt prima parametrar med motsatt paritet.",
                "Att anta att alla primitiva tripplar är multiplar av [[3]]-[[4]]-[[5]]: [[5]]-[[12]]-[[13]] och [[8]]-[[15]]-[[17]] är oberoende primitiva tripplar, inte multiplar av [[3]]-[[4]]-[[5]].",
                "Att glömma villkoret om motsatt paritet: två udda parametrar ger en jämn, icke-primitiv trippel, som [[m=3]], [[n=1]] visar.",
                "Att glömma att kontrollera gemensamma faktorer: en trippel som [[(12, 16, 20)]] ser ny ut tills den gemensamma faktorn [[4]] avslöjar den som en skalad [[(3, 4, 5)]].",
                "Att förväxla en giltig rätvinklig triangel med en pythagoreisk heltalstrippel: en triangel med irrationella eller decimala sidor kan uppfylla satsen utan att vara en trippel.",
              ],
            },
          ],
        },
        "sec-practice": {
          "h2": "Övningsuppgifter med svar",
          "blocks": [
            {
              "kind": "p",
              "text": "Åtta uppgifter, fyra kontroller och fyra genereringar, med fullständiga lösningar.",
            },
            {
              "kind": "list",
              "items": [
                "Kontrollera om [[8]], [[15]] och [[17]] bildar en trippel. Svar: ja, primitiv. [[8^2+15^2=64+225=289=17^2]], och de tre talen har ingen gemensam faktor.",
                "Kontrollera om [[6]], [[8]] och [[11]] bildar en trippel. Svar: nej. [[6^2+8^2=36+64=100]], men [[11^2=121]], så de två sidorna skiljer sig.",
                "Identifiera om [[9]], [[12]] och [[15]] är primitiva. Svar: icke-primitiv. Talen har den gemensamma faktorn [[3]], och att dividera med [[3]] ger den primitiva trippeln [[(3, 4, 5)]].",
                "Generera en trippel med [[m=2]] och [[n=1]]. Svar: [[(3, 4, 5)]]. [[a=4-1=3]], [[b=4]], [[c=4+1=5]].",
                "Generera en trippel med [[m=3]] och [[n=2]]. Svar: [[(5, 12, 13)]]. [[a=9-4=5]], [[b=12]], [[c=9+4=13]].",
                "Generera en trippel med [[m=4]] och [[n=1]]. Svar: [[(8, 15, 17)]]. [[a=16-1=15]], [[b=8]], [[c=16+1=17]], med kateterna sorterade i stigande ordning.",
                "Identifiera om [[m=3]] och [[n=1]] ger en primitiv trippel. Svar: nej. Parametrarna är relativt prima men båda udda, så resultatet är den icke-primitiva trippeln [[(6, 8, 10)]].",
                "Hitta den gemensamma multiplikatorn mellan [[3]]-[[4]]-[[5]] och [[15]]-[[20]]-[[25]]. Svar: [[5]]. Varje sida av [[(3, 4, 5)]] multiplicerad med [[5]] ger [[(15, 20, 25)]].",
              ],
            },
          ],
        },
      },
      "relatedHeading": "Relaterade kalkylatorer för rätvinkliga trianglar",
      "relatedIntro": "Varje kalkylator nedan hanterar en annan uppgift för rätvinkliga trianglar, så välj det verktyg som passar den mätning du behöver.",
      "relatedItems": [
        "Kalkylator för rätvinkliga trianglar",
        "Kalkylator för Pythagoras sats",
        "Kalkylator för 3-4-5-triangeln",
        "Kalkylator för 5-12-13-triangeln",
        "Sidkalkylator för rätvinkliga trianglar",
        "Kalkylator för speciella rätvinkliga trianglar",
      ],
      "faqHeading": "Vanliga frågor",
      "faqs": [
        {
          "question": "Vad är en pythagoreisk trippel?",
          "answer": "En pythagoreisk trippel är tre positiva heltal, skrivna [[(a, b, c)]], som uppfyller ekvationen [[a^2+b^2=c^2]]. De två mindre talen är kateterna i en rätvinklig triangel och det största är hypotenusan. Det mest kända exemplet är [[(3, 4, 5)]], eftersom [[9+16=25]].",
        },
        {
          "question": "Hur fungerar kalkylatorn för pythagoreiska tripplar?",
          "answer": "Den har två lägen. Kontrolläget tar tre heltal och testar om [[a^2+b^2=c^2]] gäller. Genereringsläget tar två heltal, [[m]] och [[n]], och använder Euklides formel för att bygga en ny trippel. Båda lägena visar steg-för-steg-uträkning tillsammans med resultatet.",
        },
        {
          "question": "Hur kan jag kontrollera om tre tal bildar en pythagoreisk trippel?",
          "answer": "Ta det största värdet som hypotenusan [[c]] och de andra två som kateterna [[a]] och [[b]]. Kvadrera alla tre, addera [[a^2+b^2]] och jämför med [[c^2]]. Lika summor betyder en giltig trippel; olika summor betyder att talen inte bildar någon.",
        },
        {
          "question": "Vad är Euklides formel?",
          "answer": "Euklides formel genererar en pythagoreisk trippel från två positiva heltal, [[m]] och [[n]], där [[m]] är större än [[n]]. Formlerna är [[a=m^2-n^2]], [[b=2mn]] och [[c=m^2+n^2]]. Varje par ger en giltig trippel, som algebrabeviset på den här sidan visar.",
        },
        {
          "question": "Vad är m och n i formeln för pythagoreiska tripplar?",
          "answer": "Värdena [[m]] och [[n]] är positiva heltalsparametrar i Euklides formel. Värdet [[m]] är det större heltalet och [[n]] är det mindre, med [[m>n>0]]. Större värden på [[m]] ger större tripplar, och olika par ger olika tripplar.",
        },
        {
          "question": "Vad är en primitiv pythagoreisk trippel?",
          "answer": "En primitiv trippel är en trippel vars tre sidlängder inte har någon gemensam faktor större än [[1]], så [[\\gcd(a,b,c)=1]]. Exempel är [[(3, 4, 5)]], [[(5, 12, 13)]], [[(8, 15, 17)]] och [[(7, 24, 25)]]. Primitiva tripplar kan inte reduceras till en mindre heltalstrippel.",
        },
        {
          "question": "Vad är en icke-primitiv pythagoreisk trippel?",
          "answer": "En icke-primitiv trippel är en giltig trippel vars tre sidor har en gemensam faktor större än [[1]]. Till exempel är [[(6, 8, 10)]] dubbla [[(3, 4, 5)]] och [[(9, 12, 15)]] är tre gånger [[(3, 4, 5)]]. Att dividera med den gemensamma faktorn ger tillbaka den primitiva trippeln under.",
        },
        {
          "question": "Hur vet jag om en genererad trippel är primitiv?",
          "answer": "Kontrollera de två parametervillkoren: [[m]] och [[n]] måste vara relativt prima, så [[\\gcd(m,n)=1]], och de måste ha motsatt paritet, så den ena är jämn och den andra udda. Om båda villkoren gäller är den genererade trippeln primitiv. Om något av dem faller är den icke-primitiv.",
        },
        {
          "question": "Kan decimaltal bilda en pythagoreisk trippel?",
          "answer": "Nej. En pythagoreisk trippel definieras som tre positiva heltal, så decimalsidlängder kvalificerar sig aldrig. Decimaler kan fortfarande bilda en rätvinklig triangel som uppfyller [[a^2+b^2=c^2]], till exempel kateterna [[1.5]] och [[2]] med hypotenusan [[2.5]], men den triangeln är inte en pythagoreisk trippel.",
        },
        {
          "question": "Finns det oändligt många pythagoreiska tripplar?",
          "answer": "Ja. Euklides formel accepterar oändligt många heltalspar [[(m, n)]], och varje par ger en trippel. Heltalsmultiplar lägger till fler: varje primitiv trippel genererar en oändlig familj av skalade kopior. Tillgången på tripplar tar aldrig slut.",
        },
        {
          "question": "Kan varje pythagoreisk trippel genereras med Euklides formel?",
          "answer": "Ja, varje primitiv trippel kommer från Euklides formel med lämpliga relativt prima parametrar av motsatt paritet, och varje icke-primitiv trippel är en multipel av en primitiv trippel. Så varje pythagoreisk trippel kan nås genom Euklides formel plus skalning med ett positivt heltal.",
        },
        {
          "question": "Vilken är den vanligaste pythagoreiska trippeln?",
          "answer": "Trippeln [[(3, 4, 5)]] är den vanligaste och mest kända. Den är den minsta primitiva trippeln, den är lätt att komma ihåg, och byggare och snickare har använt den i århundraden för att kontrollera räta hörn. De näst mest bekanta är [[(5, 12, 13)]] och [[(8, 15, 17)]].",
        },
      ],
    },
};
