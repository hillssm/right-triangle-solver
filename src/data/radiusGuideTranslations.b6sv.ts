// radiusGuideTranslations.bsv.ts: Right Triangle Radius
// Guide (Page 37 of 45) translation.
export const RADIUS_B6_SV = {
  "sv": {
      "faqHeading": "Vanliga frågor",
      "faqs": [
        {
          "answer": "Formeln är [[r = \\frac{a + b - c}{2}]], där a och b är de två kateterna och c är hypotenusan. Addera kateterna, subtrahera hypotenusan och dividera med 2. För en 6-8-10-triangel blir [[r = \\frac{6 + 8 - 10}{2} = 2]] cm.",
          "question": "Vad är formeln för inskrivna cirkelns radie i en rätvinklig triangel?",
        },
        {
          "answer": "Formeln är [[R = \\frac{c}{2}]], där c är hela hypotenusan. Hypotenusan är den omskrivna cirkelns diameter, så halva den är radien. För en hypotenusa på 10 cm blir [[R = \\frac{10}{2} = 5]] cm.",
          "question": "Vad är formeln för omskrivna cirkelns radie i en rätvinklig triangel?",
        },
        {
          "answer": "Inskrivna cirkelns radie är radien i den inskrivna cirkeln, cirkeln inuti triangeln som tangerar alla tre sidor. Omskrivna cirkelns radie är radien i den omskrivna cirkeln, cirkeln runt triangeln som går genom alla tre hörn. I en 6-8-10-triangel är [[r = 2]] cm och [[R = 5]] cm.",
          "question": "Vad är skillnaden mellan inskrivna cirkelns radie och omskrivna cirkelns radie?",
        },
        {
          "answer": "Du behöver alla tre sidlängderna: katet a, katet b och hypotenusan c. Formeln [[r = \\frac{a + b - c}{2}]] använder varje sida en gång, så ingen sida kan lämnas ut. De tre längderna måste också bilda en giltig rätvinklig triangel.",
          "question": "Vilka mått krävs för att beräkna inskrivna cirkelns radie?",
        },
        {
          "answer": "I en rätvinklig triangel är hypotenusan diametern i den omskrivna cirkeln, så omskrivna cirkelns radie är helt enkelt halva hypotenusan, [[R = \\frac{c}{2}]]. Kateterna spelar ingen roll i beräkningen alls, och därför räcker ett mått.",
          "question": "Varför kräver omskrivna cirkelns radie bara hypotenusan?",
        },
        {
          "answer": "Inskrivna cirkelns medelpunkt ligger inuti triangeln, i den punkt där de tre vinkelhalveringslinjerna möts. Den är den inskrivna cirkelns medelpunkt och ligger på samma avstånd, inskrivna cirkelns radie r, från var och en av de tre sidorna.",
          "question": "Var ligger inskrivna cirkelns medelpunkt?",
        },
        {
          "answer": "I en rätvinklig triangel ligger omskrivna cirkelns medelpunkt vid hypotenusans mittpunkt. Den punkten ligger på samma avstånd, omskrivna cirkelns radie R, från alla tre hörn, och därför går den omskrivna cirkeln genom vart och ett av dem.",
          "question": "Var ligger omskrivna cirkelns medelpunkt?",
        },
        {
          "answer": "Nej. För en giltig icke-degenererad rätvinklig triangel är omskrivna cirkelns radie alltid större än inskrivna cirkelns radie. I 6-8-10-triangeln är [[R = 5]] cm mer än dubbelt så stor som [[r = 2]] cm. Om dina tal säger något annat, kontrollera dina indata och beteckningar.",
          "question": "Kan inskrivna cirkelns radie vara större än omskrivna cirkelns radie?",
        },
        {
          "answer": "Ja, men bara för rätvinkliga trianglar. Vinkeln i en halvcirkel är en rät vinkel, så hörnet med den räta vinkeln ligger på cirkeln med hypotenusan som diameter. Detta är Thales sats, och den gäller inte för trianglar som inte är rätvinkliga.",
          "question": "Är hypotenusan diametern i den omskrivna cirkeln?",
        },
        {
          "answer": "Räkna om [[r = \\frac{a + b - c}{2}]] från de ursprungliga sidlängderna och kontrollera sedan samma svar med [[r = \\frac{Area}{s}]], med [[Area = \\frac{ab}{2}]] och [[s = \\frac{a + b + c}{2}]]. Båda vägarna måste ge samma värde.",
          "question": "Hur kan jag kontrollera mitt resultat för inskrivna cirkelns radie?",
        },
        {
          "answer": "Ja. Hitta först arean med [[Area = \\frac{ab}{2}]] och semiperimetern med [[s = \\frac{a + b + c}{2}]] och dividera sedan: [[r = \\frac{Area}{s}]]. För 6-8-10-triangeln blir [[r = \\frac{24}{12} = 2]] cm.",
          "question": "Kan jag beräkna inskrivna cirkelns radie med area och semiperimeter?",
        },
        {
          "answer": "De mäter olika cirklar. Inskrivna cirkelns radie kommer från en cirkel som är inklämd inuti triangeln, så den beror på hur de tre sidorna sluter sig runt den. Omskrivna cirkelns radie kommer från en cirkel genom de tre hörnen, och för en rätvinklig triangel bestämmer hypotenusan ensam den cirkeln som dess diameter.",
          "question": "Varför skiljer sig formeln för inskrivna cirkelns radie från formeln för omskrivna cirkelns radie?",
        },
      ],
      "relatedHeading": "Utforska relaterade kalkylatorer för rätvinkliga trianglar",
      "relatedIntro": "Varje kalkylator nedan hanterar en specifik uppgift för rätvinkliga trianglar, så välj det verktyg som matchar de mått du redan känner till.",
      "relatedItems": [
        "Kalkylator för inskrivna cirkelns radie i rätvinklig triangel",
        "Kalkylator för omskrivna cirkelns radie i rätvinklig triangel",
        "Kalkylator för area i rätvinklig triangel",
        "Kalkylator för sidor i rätvinklig triangel",
        "Kalkylator för omkrets och semiperimeter i rätvinklig triangel",
      ],
      "sections": {
        "sec-intro": {
          "blocks": [
            {
              "kind": "p",
              "text": "En rätvinklig triangel har två viktiga cirklar kopplade till sig: den inskrivna cirkeln, som ligger inuti triangeln och tangerar alla tre sidor, och den omskrivna cirkeln, som ligger runt triangeln och går genom alla tre hörn. Den här kalkylatorn hittar radien för varje cirkel, med ett separat läge för var och en.",
            },
            {
              "kind": "p",
              "text": "Inskrivna cirkelns radie är [[r = \\frac{a + b - c}{2}]], där a och b är kateterna och c är hypotenusan. Omskrivna cirkelns radie är [[R = \\frac{c}{2}]], som bara behöver hypotenusan. Formlerna skiljer sig åt eftersom de beskriver olika cirklar.",
            },
            {
              "kind": "p",
              "text": "Ta en 6-8-10-rätvinklig triangel med [[a = 6]] cm, [[b = 8]] cm och [[c = 10]] cm. Inskrivna cirkelns radie är [[r = \\frac{6 + 8 - 10}{2} = 2]] cm och omskrivna cirkelns radie är [[R = \\frac{10}{2} = 5]] cm. Den inskrivna cirkeln är en liten cirkel med radien 2 cm inklämd inuti triangeln, medan den omskrivna cirkeln är en mycket större cirkel med radien 5 cm som går genom hörnen.",
            },
            {
              "kind": "p",
              "text": "Kalkylatorn håller de två lägena åtskilda eftersom de behöver olika mått: läget för inskrivna cirkelns radie behöver alla tre sidlängderna, medan läget för omskrivna cirkelns radie bara behöver hypotenusan. Välj det läge som matchar de mått du har.",
            },
          ],
          "h2": "Kalkylator för radie i rätvinklig triangel",
        },
        "sec-calculate": {
          "blocks": [
            {
              "kind": "p",
              "text": "Den här sidan erbjuder två kalkylatorlägen. Läge 1 hittar inskrivna cirkelns radie, radien i cirkeln inuti triangeln. Läge 2 hittar omskrivna cirkelns radie, radien i cirkeln runt triangeln.",
            },
            {
              "kind": "h3",
              "text": "Läge 1: Kalkylator för inskrivna cirkelns radie",
            },
            {
              "kind": "p",
              "text": "Läget för inskrivna cirkelns radie behöver tre indata: katet a, katet b och hypotenusan c. Det använder [[r = \\frac{a + b - c}{2}]]. Välj det när du känner till alla tre sidlängderna och vill ha radien i den inskrivna cirkeln.",
            },
            {
              "kind": "h3",
              "text": "Läge 2: Kalkylator för omskrivna cirkelns radie",
            },
            {
              "kind": "p",
              "text": "Läget för omskrivna cirkelns radie behöver bara ett indata: hypotenusan c. Det använder [[R = \\frac{c}{2}]]. Välj det när du känner till hypotenusan och vill ha radien i den omskrivna cirkeln.",
            },
            {
              "kind": "p",
              "text": "Innan du beräknar, kontrollera att alla mått använder samma enhet, så konvertera först om de inte gör det. Välj sedan läge, mata in måtten, klicka på knappen Beräkna för det läget och läs av resultatet i den enhet du matade in. Använd Återställ för att rensa fälten inför en ny uppgift.",
            },
            {
              "kind": "p",
              "text": "Sidan beräknar inte vinklar, saknade sidor, area eller omkrets direkt; de relaterade kalkylatorerna längst ner på sidan hanterar dem. Om du bara känner till hypotenusan kan du hitta omskrivna cirkelns radie, men inte inskrivna cirkelns radie.",
            },
          ],
          "h2": "Beräkna inskrivna eller omskrivna cirkelns radie i en rätvinklig triangel",
        },
        "sec-what-inradius": {
          "blocks": [
            {
              "kind": "p",
              "text": "Inskrivna cirkelns radie är radien i den inskrivna cirkeln, den största cirkeln som får plats inuti en triangel. Den tangerar var och en av de tre sidorna i exakt en punkt, och den är avståndet från cirkelns medelpunkt till vilken sida som helst, mätt i rät vinkel mot sidan.",
            },
            {
              "kind": "p",
              "text": "Medelpunkten i den inskrivna cirkeln kallas inskrivna cirkelns medelpunkt, betecknad I, den punkt där de tre vinkelhalveringslinjerna möts. Eftersom den ligger på varje vinkelhalveringslinje är den på samma avstånd från alla tre sidor, och det gemensamma avståndet är inskrivna cirkelns radie r, mätt vinkelrätt mot varje sida.",
            },
            {
              "kind": "p",
              "text": "I en rätvinklig triangel ligger inskrivna cirkelns medelpunkt alltid inuti triangeln, nära den räta vinkeln. För 6-8-10-triangeln är inskrivna cirkelns radie [[r = \\frac{6 + 8 - 10}{2} = 2]] cm, så den inskrivna cirkeln är en cirkel med radien 2 cm med medelpunkt i I.",
            },
            {
              "kind": "p",
              "text": "Ett vanligt fel är att mäta inskrivna cirkelns radie från inskrivna cirkelns medelpunkt till ett hörn. Det avståndet är längre än r och är inte en radie i den inskrivna cirkeln: inskrivna cirkelns radie slutar alltid vid en sida, aldrig vid ett hörn.",
            },
          ],
          "h2": "Vad är inskrivna cirkelns radie i en rätvinklig triangel?",
          "image": {
            "alt": "Rätvinklig triangel ABC med rät vinkel vid C, inskriven cirkel inuti som tangerar alla tre sidor, inskrivna cirkelns medelpunkt I och inskrivna cirkelns radie r visad vinkelrätt mot en sida",
            "caption": "Den inskrivna cirkeln tangerar alla tre sidor inifrån, med medelpunkt I och radie r = 2 cm i 6-8-10-triangeln.",
            "src": "radius-incircle.svg",
          },
        },
        "sec-what-circumradius": {
          "blocks": [
            {
              "kind": "p",
              "text": "Omskrivna cirkelns radie är radien i den omskrivna cirkeln, cirkeln som går genom alla tre hörn i en triangel. Varje hörn ligger exakt på cirkeln, så avståndet från medelpunkten till vilket hörn som helst är detsamma, och det avståndet är omskrivna cirkelns radie R.",
            },
            {
              "kind": "p",
              "text": "Medelpunkten i den omskrivna cirkeln kallas omskrivna cirkelns medelpunkt, betecknad O, den punkt där de tre sidornas mittpunktsnormaler möts. Att ligga på varje mittpunktsnormal gör O lika långt från alla tre hörn.",
            },
            {
              "kind": "p",
              "text": "En rätvinklig triangel har en speciell omskriven cirkels medelpunkt: den ligger vid hypotenusans mittpunkt. Hypotenusan är diametern i den omskrivna cirkeln, så halva den är omskrivna cirkelns radie: [[R = \\frac{c}{2}]]. För 6-8-10-triangeln är [[R = \\frac{10}{2} = 5]] cm, och omskrivna cirkelns medelpunkt O ligger vid mittpunkten av hypotenusan på 10 cm.",
            },
            {
              "kind": "p",
              "text": "Omskrivna cirkelns radie mäts från omskrivna cirkelns medelpunkt till vilket hörn som helst, aldrig till en sida. I en rätvinklig triangel ligger hörnet med den räta vinkeln också på den omskrivna cirkeln: cirkeln runt triangeln går genom hörnet med den räta vinkeln också.",
            },
          ],
          "h2": "Vad är omskrivna cirkelns radie i en rätvinklig triangel?",
          "image": {
            "alt": "Rätvinklig triangel ABC med rät vinkel vid C, omskriven cirkel som går genom alla tre hörn, omskrivna cirkelns medelpunkt O vid mittpunkten av hypotenusan AB och omskrivna cirkelns radie R",
            "caption": "Den omskrivna cirkeln går genom alla tre hörn, med medelpunkt O vid hypotenusans mittpunkt och R = 5 cm.",
            "src": "radius-circumcircle.svg",
          },
        },
        "sec-difference": {
          "blocks": [
            {
              "kind": "p",
              "text": "De två radierna beskriver två olika cirklar. Den inskrivna cirkeln är inklämd inuti triangeln och tangerar sidorna, medan den omskrivna cirkeln omsluter triangeln och går genom hörnen. Den ena cirkeln är liten och inuti, den andra är stor och utanför, och deras medelpunkter ligger på olika platser.",
            },
            {
              "kind": "p",
              "text": "Medelpunkterna skiljer sig också åt. Inskrivna cirkelns medelpunkt är mötespunkten för vinkelhalveringslinjerna och ligger inuti triangeln, nära den räta vinkeln. Omskrivna cirkelns medelpunkt är mötespunkten för mittpunktsnormalerna och ligger vid hypotenusans mittpunkt, på triangelns kant.",
            },
            {
              "kind": "p",
              "text": "Indata skiljer sig också åt: inskrivna cirkelns radie behöver alla tre sidor, eftersom den inskrivna cirkeln formas av hur de tre sidorna sluter sig runt den, medan omskrivna cirkelns radie bara behöver hypotenusan, eftersom hypotenusan ensam bestämmer den omskrivna cirkeln som dess diameter. I 6-8-10-triangeln är [[r = 2]] cm och [[R = 5]] cm.",
            },
            {
              "kind": "p",
              "text": "Tabellen nedan sammanfattar jämförelsen på ett ställe. Läs över varje rad för att se hur samma egenskap ser ut för varje cirkel, och använd den som en snabb kontroll när en uppgift nämner en radie utan att säga vilken den menar.",
            },
          ],
          "h2": "Skillnaden mellan inskrivna cirkelns radie och omskrivna cirkelns radie",
          "image": {
            "alt": "6-8-10-rätvinklig triangel som visar den lilla inskrivna cirkeln inuti med radien 2 cm och den större omskrivna cirkeln runt den med radien 5 cm, med inskrivna cirkelns medelpunkt I och omskrivna cirkelns medelpunkt O markerade",
            "caption": "Samma triangel, två cirklar: den inskrivna cirkeln (r = 2 cm) inuti och den omskrivna cirkeln (R = 5 cm) runt den.",
            "src": "radius-vs.svg",
          },
          "table": {
            "headers": [
              "Egenskap",
              "Inskrivna cirkelns radie r",
              "Omskrivna cirkelns radie R",
            ],
            "rows": [
              [
                "Cirkel",
                "Inskriven cirkel",
                "Omskriven cirkel",
              ],
              [
                "Placering",
                "Inuti triangeln",
                "Runt triangeln",
              ],
              [
                "Kontakt",
                "Tangerar alla tre sidor",
                "Går genom alla tre hörn",
              ],
              [
                "Medelpunkt",
                "Inskrivna cirkelns medelpunkt",
                "Omskrivna cirkelns medelpunkt",
              ],
              [
                "Formel",
                "(a + b - c) / 2",
                "c / 2",
              ],
              [
                "Indata som krävs",
                "a, b, c",
                "c",
              ],
              [
                "Mätning",
                "Medelpunkt till en sida",
                "Medelpunkt till ett hörn",
              ],
            ],
          },
        },
        "sec-inradius-formula": {
          "blocks": [
            {
              "kind": "p",
              "text": "Formeln för inskrivna cirkelns radie i en rätvinklig triangel är:",
            },
            {
              "kind": "p",
              "text": "[[[r = \\frac{a + b - c}{2}]]]",
            },
            {
              "kind": "p",
              "text": "Här är a den första kateten, b den andra kateten och c hypotenusan, sidan mitt emot den räta vinkeln. Formeln behöver alla tre sidlängderna, eftersom den inskrivna cirkeln tangerar alla tre sidor och dess storlek beror på alla tre. Lämna ut en sida och svaret saknar mening.",
            },
            {
              "kind": "p",
              "text": "Räkna det steg för steg med 6-8-10-triangeln. Addera kateterna: [[6 + 8 = 14]]. Subtrahera hypotenusan: [[14 - 10 = 4]]. Dividera med 2: [[r = \\frac{4}{2} = 2]] cm. Resultatet har samma enhet som sidlängderna, centimeter här.",
            },
            {
              "kind": "p",
              "text": "Samma värde kommer från en areaväg: [[r = \\frac{Area}{s}]], där [[s = \\frac{a + b + c}{2}]]. För 6-8-10-triangeln är arean 24 cm² och semiperimetern 12 cm, så [[r = \\frac{24}{12} = 2]] cm. <a href=\"/right-triangle-area-calculator/\">Kalkylatorn för area i rätvinklig triangel</a> hittar arean när du behöver den för den här kontrollen.",
            },
            {
              "kind": "p",
              "text": "En tredje form, [[r = \\frac{ab}{a + b + c}]], är samma formel i annan klädsel. Det är areaformen med [[Area = \\frac{ab}{2}]] och [[s = \\frac{a + b + c}{2}]] insatta, och bevisavsnittet nedan visar hur den förenklas tillbaka till [[r = \\frac{a + b - c}{2}]].",
            },
          ],
          "h2": "Formel för inskrivna cirkelns radie i rätvinklig triangel",
          "image": {
            "alt": "Rätvinklig triangel med kateterna a och b och hypotenusan c markerade, som visar formeln för inskrivna cirkelns radie r lika med a plus b minus c genom 2",
            "caption": "Formel för inskrivna cirkelns radie: r = (a + b - c) / 2, med alla tre sidlängder i triangeln.",
            "src": "radius-inradius-formula.svg",
          },
        },
        "sec-why-inradius": {
          "blocks": [
            {
              "kind": "p",
              "text": "Beviset börjar vid inskrivna cirkelns medelpunkt I. Eftersom I ligger på samma avstånd r från alla tre sidor kan triangeln delas upp i tre mindre trianglar, var och en med I som ett hörn och en sida i den stora triangeln som bas.",
            },
            {
              "kind": "p",
              "text": "Varje liten triangel har höjden r, så dess area är halva basen gånger r. De tre areorna är [[\\frac{ra}{2}]], [[\\frac{rb}{2}]] och [[\\frac{rc}{2}]]. Att addera dem ger arean av hela triangeln:",
            },
            {
              "kind": "p",
              "text": "[[[Area = \\frac{ra}{2} + \\frac{rb}{2} + \\frac{rc}{2}]]]",
            },
            {
              "kind": "p",
              "text": "Att bryta ut r ger [[Area = \\frac{r(a + b + c)}{2}]]. Eftersom semiperimetern är [[s = \\frac{a + b + c}{2}]] blir detta det enkla sambandet:",
            },
            {
              "kind": "p",
              "text": "[[[Area = r \\times s]]]",
            },
            {
              "kind": "p",
              "text": "Omställning ger [[r = \\frac{Area}{s}]]. För en rätvinklig triangel är [[Area = \\frac{ab}{2}]], så [[r = \\frac{ab}{a + b + c}]]. Pythagoras sats avslutar jobbet: eftersom [[a^2 + b^2 = c^2]] är [[(a + b)^2 - c^2 = 2ab]], så [[\\frac{ab}{a + b + c} = \\frac{a + b - c}{2}]]. Båda formerna är samma faktum, sett från två håll.",
            },
          ],
          "h2": "Varför fungerar formeln för inskrivna cirkelns radie?",
        },
        "sec-circumradius-formula": {
          "blocks": [
            {
              "kind": "p",
              "text": "Formeln för omskrivna cirkelns radie i en rätvinklig triangel är:",
            },
            {
              "kind": "p",
              "text": "[[[R = \\frac{c}{2}]]]",
            },
            {
              "kind": "p",
              "text": "Här är R omskrivna cirkelns radie och c hela hypotenusan. Formeln har bara ett indata eftersom hypotenusan ensam bestämmer den omskrivna cirkeln: den är diametern i den cirkeln, och en radie är halva diametern.",
            },
            {
              "kind": "p",
              "text": "Arbetet är det kortaste i den här guiden. Med [[c = 10]] cm blir [[R = \\frac{10}{2} = 5]] cm. Omskrivna cirkelns medelpunkt O ligger vid hypotenusans mittpunkt, 5 cm från varje hörn.",
            },
            {
              "kind": "p",
              "text": "Diameterformen säger samma sak baklänges: [[c = 2R]]. Om du känner till omskrivna cirkelns radie och behöver hypotenusan, dubblera den. En omskriven cirkels radie på 5 cm betyder en hypotenusa på 10 cm, och en omskriven cirkels radie på 6,5 cm betyder en hypotenusa på 13 cm.",
            },
            {
              "kind": "p",
              "text": "Den här genvägen tillhör bara rätvinkliga trianglar. I en triangel utan rät vinkel beror omskrivna cirkelns radie på alla tre sidor, så ta aldrig med dig [[R = \\frac{c}{2}]] in i en sådan. Den särskilda <a href=\"/right-triangle-circumradius-calculator/\">kalkylatorn för omskrivna cirkelns radie i rätvinklig triangel</a> täcker den här beräkningen i full detalj.",
            },
          ],
          "h2": "Formel för omskrivna cirkelns radie i rätvinklig triangel",
          "image": {
            "alt": "Rätvinklig triangel med hypotenusan c visad som diametern i den omskrivna cirkeln, dess mittpunkt O markerad och formeln R lika med c genom 2",
            "caption": "Formel för omskrivna cirkelns radie: R = c / 2, med hypotenusan som diametern i den omskrivna cirkeln.",
            "src": "radius-circumradius-formula.svg",
          },
        },
        "sec-why-diameter": {
          "blocks": [
            {
              "kind": "p",
              "text": "Ta triangeln ABC med den räta vinkeln vid C och låt O vara mittpunkten av hypotenusan AB. Påståendet är att O är omskrivna cirkelns medelpunkt, på samma avstånd från A, B och C. Av konstruktion är [[AO = BO]], eftersom O är mittpunkten, så det enda avståndet att kontrollera är CO.",
            },
            {
              "kind": "p",
              "text": "Rita medianen från C till mittpunkten O. I en rätvinklig triangel är denna median exakt halva hypotenusan, så [[CO = \\frac{AB}{2}]], vilket gör att [[AO = BO = CO]]. Så O ligger på lika avstånd från alla tre hörn och är omskrivna cirkelns medelpunkt.",
            },
            {
              "kind": "p",
              "text": "Eftersom AB går genom O och båda dess ändpunkter ligger på den omskrivna cirkeln är AB en diameter i den cirkeln. En diameter är dubbelt så stor som en radie, så [[AB = 2R]], vilket är samma sak som [[R = \\frac{c}{2}]]. Hypotenusan förtjänar sin roll som diameter tack vare den räta vinkeln, inte enbart tack vare sin längd.",
            },
            {
              "kind": "p",
              "text": "Thales sats uttrycker samma idé från andra hållet: varje vinkel som är inskriven i en halvcirkel är en rät vinkel, så hypotenusan i en rätvinklig triangel måste vara diametern i cirkeln genom dess hörn. Figuren nedan visar båda medelpunkterna samtidigt: inskrivna cirkelns medelpunkt I inuti triangeln och omskrivna cirkelns medelpunkt O vid hypotenusans mittpunkt.",
            },
          ],
          "h2": "Varför är hypotenusan diametern i den omskrivna cirkeln?",
          "image": {
            "alt": "Rätvinklig triangel som visar inskrivna cirkelns medelpunkt I inuti triangeln där vinkelhalveringslinjerna möts och omskrivna cirkelns medelpunkt O vid hypotenusans mittpunkt där mittpunktsnormalerna möts",
            "caption": "Två olika medelpunkter: I är mötespunkten för vinkelhalveringslinjerna, O är mötespunkten för mittpunktsnormalerna.",
            "src": "radius-centers.svg",
          },
        },
        "sec-how-to-use": {
          "blocks": [
            {
              "kind": "p",
              "text": "Följ listan för det läge du behöver. Båda börjar med att beteckna triangeln rätt, eftersom en förväxlad katet och hypotenusa är den vanligaste orsaken till ett felaktigt svar.",
            },
            {
              "kind": "h3",
              "text": "Använda läget för inskrivna cirkelns radie",
            },
            {
              "kind": "steps",
              "steps": [
                "Identifiera katet a, den första sidan som bildar den räta vinkeln.",
                "Identifiera katet b, den andra sidan som bildar den räta vinkeln.",
                "Identifiera hypotenusan c, sidan mitt emot den räta vinkeln och den längsta sidan.",
                "Välj läget Kalkylator för inskrivna cirkelns radie.",
                "Mata in alla tre sidlängderna i samma enhet.",
                "Välj den enhet som matchar dina mått.",
                "Klicka på Beräkna inskrivna cirkelns radie r.",
                "Granska resultatet och kontrollera att det är positivt och mindre än vardera kateten.",
                "Använd Återställ när du börjar en ny beräkning.",
              ],
            },
            {
              "kind": "p",
              "text": "Innan du klickar på Beräkna, bekräfta att de tre längderna kan bilda en rätvinklig triangel: hypotenusan måste vara längre än vardera kateten, och [[a^2 + b^2]] måste vara lika med [[c^2]].",
            },
            {
              "kind": "h3",
              "text": "Använda läget för omskrivna cirkelns radie",
            },
            {
              "kind": "steps",
              "steps": [
                "Identifiera hypotenusan c, sidan mitt emot den räta vinkeln.",
                "Välj läget Kalkylator för omskrivna cirkelns radie.",
                "Mata in c i den enhet du väljer.",
                "Välj den enhet som matchar ditt mått.",
                "Klicka på Beräkna omskrivna cirkelns radie R.",
                "Granska resultatet, som ska vara exakt halva hypotenusan.",
                "Använd Återställ för en ny beräkning.",
              ],
            },
            {
              "kind": "p",
              "text": "Läget för omskrivna cirkelns radie behöver bara ett mått eftersom hypotenusan är diametern i den omskrivna cirkeln. Mata inte in en katet här: den är kortare än hypotenusan, så resultatet skulle bli halva fel längd.",
            },
          ],
          "h2": "Så använder du kalkylatorn för radie i rätvinklig triangel",
        },
        "sec-step-example": {
          "blocks": [
            {
              "kind": "p",
              "text": "Använd 6-8-10-triangeln med [[a = 6]] cm, [[b = 8]] cm och [[c = 10]] cm. De två delarna nedan hittar varje radie i tur och ordning och jämför sedan resultaten.",
            },
            {
              "kind": "h3",
              "text": "Del 1: Beräkna inskrivna cirkelns radie",
            },
            {
              "kind": "steps",
              "steps": [
                "Skriv formeln: [[r = \\frac{a + b - c}{2}]].",
                "Sätt in värdena: [[r = \\frac{6 + 8 - 10}{2}]].",
                "Addera och subtrahera: [[r = \\frac{4}{2}]].",
                "Dividera: [[r = 2]] cm.",
              ],
            },
            {
              "kind": "p",
              "text": "Den inskrivna cirkeln har en radie på 2 cm. Dess medelpunkt I ligger 2 cm från varje sida, och cirkeln tangerar de två kateterna och hypotenusan inifrån triangeln.",
            },
            {
              "kind": "h3",
              "text": "Del 2: Beräkna omskrivna cirkelns radie",
            },
            {
              "kind": "steps",
              "steps": [
                "Skriv formeln: [[R = \\frac{c}{2}]].",
                "Sätt in värdet: [[R = \\frac{10}{2}]].",
                "Dividera: [[R = 5]] cm.",
              ],
            },
            {
              "kind": "p",
              "text": "Den omskrivna cirkeln har en radie på 5 cm. Dess medelpunkt O är hypotenusans mittpunkt, och cirkeln går genom alla tre hörn. Om man jämför de två resultaten är omskrivna cirkelns radie två och en halv gånger inskrivna cirkelns radie, vilket är normalt: cirkeln runt triangeln är mycket större än cirkeln inuti den.",
            },
            {
              "kind": "p",
              "text": "En snabb motkontroll: arean är 24 cm² och semiperimetern är 12 cm, så [[r = \\frac{24}{12} = 2]] cm, vilket stämmer med del 1, och [[2R = 2 \\times 5 = 10]] cm, vilket stämmer med c.",
            },
          ],
          "h2": "Steg för steg-exempel: Beräkna båda radierna",
          "image": {
            "alt": "6-8-10-rätvinklig triangel med sidorna 6, 8 och 10 cm, inskrivna cirkelns radie 2 cm, omskrivna cirkelns radie 5 cm, area 24 kvadratcentimeter och semiperimeter 12 cm",
            "caption": "Komplett 6-8-10-exempel: a = 6, b = 8, c = 10, r = 2, R = 5, area 24 cm², s = 12 cm.",
            "src": "radius-complete-example.svg",
          },
        },
        "sec-examples-inradius": {
          "blocks": [
            {
              "kind": "p",
              "text": "Varje exempel anger de givna värdena, insättningen och det slutliga svaret, och varje exempel håller enheterna konsekventa från början till slut. Alla sex trianglar är giltiga rätvinkliga trianglar, kontrollerade med Pythagoras sats.",
            },
            {
              "kind": "h3",
              "text": "Exempel 1: Grundläggande 3-4-5-triangel",
            },
            {
              "kind": "p",
              "text": "Givet [[a = 3]] cm, [[b = 4]] cm och [[c = 5]] cm blir [[r = \\frac{3 + 4 - 5}{2} = \\frac{2}{2} = 1]] cm. Kontroll: [[3^2 + 4^2 = 9 + 16 = 25 = 5^2]].",
            },
            {
              "kind": "h3",
              "text": "Exempel 2: 5-12-13-triangel",
            },
            {
              "kind": "p",
              "text": "Givet [[a = 5]] cm, [[b = 12]] cm och [[c = 13]] cm blir [[r = \\frac{5 + 12 - 13}{2} = \\frac{4}{2} = 2]] cm. Kontroll: [[5^2 + 12^2 = 25 + 144 = 169 = 13^2]].",
            },
            {
              "kind": "h3",
              "text": "Exempel 3: 8-15-17-triangel",
            },
            {
              "kind": "p",
              "text": "Givet [[a = 8]] cm, [[b = 15]] cm och [[c = 17]] cm blir [[r = \\frac{8 + 15 - 17}{2} = \\frac{6}{2} = 3]] cm. Kontroll: [[8^2 + 15^2 = 64 + 225 = 289 = 17^2]].",
            },
            {
              "kind": "h3",
              "text": "Exempel 4: Decimalmått",
            },
            {
              "kind": "p",
              "text": "Givet [[a = 7.5]] cm, [[b = 10]] cm och [[c = 12.5]] cm blir [[r = \\frac{7.5 + 10 - 12.5}{2} = \\frac{5}{2} = 2.5]] cm. Detta är 6-8-10-triangeln skalad med 1,25, så dess inskrivna cirkels radie skalas på samma sätt. Kontroll: [[7.5^2 + 10^2 = 56.25 + 100 = 156.25 = 12.5^2]].",
            },
            {
              "kind": "h3",
              "text": "Exempel 5: Större mått",
            },
            {
              "kind": "p",
              "text": "Givet [[a = 9]] m, [[b = 12]] m och [[c = 15]] m blir [[r = \\frac{9 + 12 - 15}{2} = \\frac{6}{2} = 3]] m. Detta är 3-4-5-triangeln skalad med 3. Kontroll: [[9^2 + 12^2 = 81 + 144 = 225 = 15^2]].",
            },
            {
              "kind": "h3",
              "text": "Exempel 6: Olika enheter",
            },
            {
              "kind": "p",
              "text": "Givet [[a = 0.09]] m, [[b = 0.12]] m och [[c = 0.15]] m, konvertera först till centimeter: 9 cm, 12 cm och 15 cm. Då blir [[r = \\frac{9 + 12 - 15}{2} = \\frac{6}{2} = 3]] cm. Kontroll: [[9^2 + 12^2 = 81 + 144 = 225 = 15^2]].",
            },
          ],
          "h2": "Genomräknade exempel på beräkning av inskrivna cirkelns radie",
        },
        "sec-examples-circumradius": {
          "blocks": [
            {
              "kind": "p",
              "text": "Varje exempel på omskrivna cirkelns radie behöver bara hypotenusan, så varje exempel är en enda division med 2. Variationen kommer från enheterna och talens storlek, inte från metoden, som aldrig ändras.",
            },
            {
              "kind": "h3",
              "text": "Exempel 1: Hypotenusa 10 cm",
            },
            {
              "kind": "p",
              "text": "Givet [[c = 10]] cm blir [[R = \\frac{10}{2} = 5]] cm. Detta är omskrivna cirkelns radie i 6-8-10-triangeln.",
            },
            {
              "kind": "h3",
              "text": "Exempel 2: Hypotenusa 13 cm",
            },
            {
              "kind": "p",
              "text": "Givet [[c = 13]] cm blir [[R = \\frac{13}{2} = 6.5]] cm. Detta är omskrivna cirkelns radie i 5-12-13-triangeln.",
            },
            {
              "kind": "h3",
              "text": "Exempel 3: Hypotenusa 24 m",
            },
            {
              "kind": "p",
              "text": "Givet [[c = 24]] m blir [[R = \\frac{24}{2} = 12]] m.",
            },
            {
              "kind": "h3",
              "text": "Exempel 4: Hypotenusa 7,5 cm",
            },
            {
              "kind": "p",
              "text": "Givet [[c = 7.5]] cm blir [[R = \\frac{7.5}{2} = 3.75]] cm. Diameterkontrollen går baklänges: [[2 \\times 3.75 = 7.5]] cm.",
            },
            {
              "kind": "h3",
              "text": "Exempel 5: Hypotenusa 180 mm",
            },
            {
              "kind": "p",
              "text": "Givet [[c = 180]] mm blir [[R = \\frac{180}{2} = 90]] mm, vilket är 9 cm.",
            },
            {
              "kind": "h3",
              "text": "Exempel 6: Hypotenusa 1,2 m",
            },
            {
              "kind": "p",
              "text": "Givet [[c = 1.2]] m blir [[R = \\frac{1.2}{2} = 0.6]] m, vilket är 60 cm.",
            },
          ],
          "h2": "Genomräknade exempel på beräkning av omskrivna cirkelns radie",
        },
        "sec-validity": {
          "blocks": [
            {
              "kind": "p",
              "text": "Ett svar om radien är bara lika bra som triangeln bakom det, så kontrollera måtten innan du beräknar. För en rätvinklig triangel måste sidorna uppfylla Pythagoras sats:",
            },
            {
              "kind": "p",
              "text": "[[[a^2 + b^2 = c^2]]]",
            },
            {
              "kind": "p",
              "text": "Hypotenusan måste också vara den längsta sidan, så [[c > a]] och [[c > b]]. En katet som är längre än hypotenusan kan inte tillhöra någon rätvinklig triangel, och en hypotenusa som är kortare än en katet betyder att sidorna har betecknats fel.",
            },
            {
              "kind": "p",
              "text": "Kontrollera 3-4-5-triangeln: [[3^2 + 4^2 = 9 + 16 = 25 = 5^2]], så sidorna stämmer, och inskrivna cirkelns radie blir positiv: [[r = \\frac{3 + 4 - 5}{2} = 1]] cm. En giltig icke-degenererad rätvinklig triangel ger alltid en positiv inskriven cirkels radie, eftersom kateterna tillsammans är längre än hypotenusan.",
            },
            {
              "kind": "p",
              "text": "Ogiltiga mått avslöjar sig själva i formeln för inskrivna cirkelns radie. Om kateterna tillsammans blir mindre än hypotenusan blir r negativ, vilket inte beskriver någon verklig cirkel, och om de blir exakt lika med hypotenusan är r noll och triangeln platt. Båda resultaten betyder att indata är fel. <a href=\"/right-triangle-side-calculator/\">Kalkylatorn för sidor i rätvinklig triangel</a> kan bygga upp en saknad sida från giltiga mått.",
            },
          ],
          "h2": "Så kontrollerar du om dina mått för en rätvinklig triangel är giltiga",
        },
        "sec-area-relation": {
          "blocks": [
            {
              "kind": "p",
              "text": "Inskrivna cirkelns radie, arean och semiperimetern i en triangel hänger ihop genom ett samband, och det fungerar för varje triangel, inte bara rätvinkliga trianglar:",
            },
            {
              "kind": "p",
              "text": "[[[Area = r \\times s]]]",
            },
            {
              "kind": "p",
              "text": "Arean mäter hur mycket yta triangeln täcker, semiperimetern mäter halva dess omkrets, och deras kvot är radien i cirkeln som får plats inuti.",
            },
            {
              "kind": "p",
              "text": "För en rätvinklig triangel är [[Area = \\frac{ab}{2}]], eftersom de två kateterna är bas och höjd, och omskrivna cirkelns radie ansluter genom [[c = 2R]]. I 6-8-10-triangeln är arean 24 cm², semiperimetern 12 cm, [[r = \\frac{24}{12} = 2]] cm och [[R = \\frac{10}{2} = 5]] cm. Höjden mot hypotenusan följer samma mönster: [[h = \\frac{ab}{c}]], vilket ger [[h = \\frac{48}{10} = 4.8]] cm här.",
            },
            {
              "kind": "p",
              "text": "De två radierna beskriver olika aspekter av samma triangel: inskrivna cirkelns radie beror på arean och omkretsen tillsammans, medan omskrivna cirkelns radie beror på hypotenusan ensam. Ingen av dem kan hittas från arean ensam.",
            },
          ],
          "h2": "Sambandet mellan inskrivna cirkelns radie, omskrivna cirkelns radie och triangelns area",
        },
        "sec-perimeter-relation": {
          "blocks": [
            {
              "kind": "p",
              "text": "Omkretsen i en rätvinklig triangel är [[P = a + b + c]] och semiperimetern är halva den, [[s = \\frac{a + b + c}{2}]]. Inskrivna cirkelns radie kan skrivas som [[r = \\frac{Area}{s}]], så för en fast area betyder en större semiperimeter en mindre inskriven cirkels radie.",
            },
            {
              "kind": "p",
              "text": "Använd 6-8-10-triangeln: omkretsen är 24 cm, semiperimetern är 12 cm, och med en area på 24 cm² blir [[r = \\frac{24}{12} = 2]] cm. Jämför 3-4-5-triangeln: dess omkrets är 12 cm, dess semiperimeter är 6 cm, dess area är 6 cm² och [[r = \\frac{6}{6} = 1]] cm.",
            },
            {
              "kind": "p",
              "text": "Omkretsen ensam kan inte bestämma inskrivna cirkelns radie: två trianglar kan ha samma omkrets på 24 cm och ha olika areor och olika inskrivna cirklars radier. Blanda inte ihop semiperimetern med omkretsen: att använda P där s hör hemma skulle halvera svaret. <a href=\"/right-triangle-perimeter-semiperimeter-calculator/\">Kalkylatorn för omkrets och semiperimeter i rätvinklig triangel</a> hittar båda värdena när du behöver dem.",
            },
          ],
          "h2": "Sambandet mellan inskrivna cirkelns radie och omkrets",
        },
        "sec-properties": {
          "blocks": [
            {
              "kind": "p",
              "text": "Nio egenskaper följer direkt från de två formlerna. Var och en fungerar också som en rimlighetskontroll av ett nytt svar.",
            },
            {
              "items": [
                "Inskrivna cirkelns radie är alltid positiv i en giltig icke-degenererad triangel, eftersom de två kateterna tillsammans är längre än hypotenusan, så [[a + b - c > 0]].",
                "Inskrivna cirkelns medelpunkt ligger inuti triangeln, vid mötespunkten för de tre vinkelhalveringslinjerna.",
                "Inskrivna cirkelns radie är vinkelrät mot varje sida vid tangeringspunkten, eftersom en radie till en tangent möter den i rät vinkel.",
                "Omskrivna cirkelns medelpunkt ligger vid hypotenusans mittpunkt i en rätvinklig triangel, och ingen annanstans.",
                "Omskrivna cirkelns radie är exakt halva hypotenusan, [[R = \\frac{c}{2}]], i varje rätvinklig triangel.",
                "Den omskrivna cirkeln går genom alla tre hörn, inklusive hörnet med den räta vinkeln.",
                "Den inskrivna cirkeln tangerar alla tre sidor och vidrör varje sida i exakt en punkt.",
                "Omskrivna cirkelns radie är större än inskrivna cirkelns radie för en icke-degenererad rätvinklig triangel, så [[R > r]] gäller alltid här.",
                "De två radieberäkningarna kräver olika inmatningsmått: inskrivna cirkelns radie behöver alla tre sidor, medan omskrivna cirkelns radie bara behöver hypotenusan.",
              ],
              "kind": "list",
            },
            {
              "kind": "p",
              "text": "Den sista egenskapen är den som elever glömmer oftast: när en uppgift bara ger hypotenusan är omskrivna cirkelns radie inom räckhåll och inskrivna cirkelns radie inte det.",
            },
          ],
          "h2": "Viktiga egenskaper hos rätvinkliga trianglars radier",
        },
        "sec-mistakes": {
          "blocks": [
            {
              "kind": "p",
              "text": "Varje misstag nedan följs av sin korrigering. De flesta beror på att de två cirklarna blandas ihop, inte på räkning.",
            },
            {
              "items": [
                "Att blanda ihop inskrivna cirkelns radie med omskrivna cirkelns radie: r hör till cirkeln inuti triangeln, R till cirkeln runt den. I 6-8-10-triangeln är r 2 cm och R 5 cm.",
                "Att använda [[R = \\frac{c}{2}]] för att beräkna inskrivna cirkelns radie: att halvera hypotenusan ger omskrivna cirkelns radie, inte r.",
                "Att använda [[r = \\frac{a + b - c}{2}]] för att beräkna omskrivna cirkelns radie: det ger ett mindre tal som inte har något att göra med cirkeln genom hörnen.",
                "Att mata in en katet i stället för hypotenusan i läget för omskrivna cirkelns radie: en katet är kortare än hypotenusan, så att halvera den ger halva fel längd.",
                "Att glömma att dividera med två i formeln för inskrivna cirkelns radie: [[a + b - c]] ensamt är dubbelt så stor som inskrivna cirkelns radie. I 6-8-10-triangeln är summan 4, men r är 2.",
                "Att glömma att dividera med två i formeln för omskrivna cirkelns radie: hela hypotenusan är diametern, inte radien. Med c = 10 cm är R 5 cm, inte 10 cm.",
                "Att mata in en ogiltig triangel: om [[a^2 + b^2]] inte är lika med [[c^2]] bildar sidorna ingen rätvinklig triangel.",
                "Att blanda enheter: centimeter för en sida och meter för en annan ger en meningslös subtraktion. Konvertera allt till en enhet först.",
                "Att blanda ihop inskrivna cirkelns medelpunkt med omskrivna cirkelns medelpunkt: inskrivna cirkelns medelpunkt ligger inuti triangeln, omskrivna cirkelns medelpunkt vid hypotenusans mittpunkt.",
                "Att anta att den inskrivna cirkeln går genom hörnen: den inskrivna cirkeln tangerar sidorna, och dess punkter når aldrig ett hörn.",
                "Att anta att den omskrivna cirkeln tangerar alla tre sidor: den omskrivna cirkeln går genom hörnen, och den tangerar ingen sida längs dess längd.",
                "Att avrunda för tidigt: behåll full precision till sista steget, eftersom avrundning av ett mellanvärde flyttar svaret.",
                "Att blanda ihop radie med diameter: diametern är dubbelt så stor som radien, så en omskriven cirkels radie på 5 cm betyder en diameter på 10 cm, vilket är hypotenusan.",
                "Att använda fel kalkylatorläge: läget för inskrivna cirkelns radie behöver tre indata och läget för omskrivna cirkelns radie behöver ett. Välj det läge som matchar de mått du har.",
              ],
              "kind": "list",
            },
            {
              "kind": "p",
              "text": "Om ett svar ser fel ut, kontrollera läget först, sedan beteckningarna och sedan enheterna. De flesta felen ovan försvinner när rätt läge är valt och hypotenusan är rätt identifierad.",
            },
          ],
          "h2": "Vanliga misstag vid beräkning av inskrivna och omskrivna cirkelns radie",
        },
        "sec-applications": {
          "blocks": [
            {
              "kind": "p",
              "text": "Den mest direkta användningen är geometriläxor och klassrumsarbete, där radieuppgifter prövar om eleverna kan skilja den inskrivna cirkeln från den omskrivna cirkeln och välja rätt formel för var och en. Lärare använder 6-8-10-triangeln eftersom båda radierna blir heltal.",
            },
            {
              "kind": "p",
              "text": "Cirkelkonstruktion är en andra användning: att rita en inskriven cirkel kräver inskrivna cirkelns medelpunkt och inskrivna cirkelns radie, medan att rita en omskriven cirkel kräver omskrivna cirkelns medelpunkt och omskrivna cirkelns radie. Teknisk ritning använder samma idéer när en triangulär form måste förses med ett cirkulärt hål eller placeras inuti en cirkulär ram.",
            },
            {
              "kind": "p",
              "text": "Matematiska bevis använder båda radierna som steg på vägen: [[Area = rs]] kopplar samman area, omkrets och inskrivna cirkelns radie i en rad, och Thales sats kopplar den räta vinkeln till diametern i den omskrivna cirkeln. Geometrisk modellering använder samma samband för att räkna ut frigång, till exempel hur stor en cirkulär del måste vara för att omsluta en triangulär bit.",
            },
            {
              "kind": "p",
              "text": "Ett villkor begränsar varje tillämpning: de här formlerna beskriver ideala trianglar och cirklar, inte ungefärliga fältmätningar, så praktiskt konstruktionsarbete kan behöva ytterligare toleranser utöver radien ensam.",
            },
          ],
          "h2": "Praktiska tillämpningar av trianglars radier",
        },
        "sec-practice": {
          "blocks": [
            {
              "kind": "p",
              "text": "Försök med alla sex uppgifterna på papper innan du läser svaren. Inget av värdena upprepar de genomräknade exemplen, och varje triangel är giltig.",
            },
            {
              "kind": "h3",
              "text": "Uppgift 1: Hitta inskrivna cirkelns radie",
            },
            {
              "kind": "p",
              "text": "En rätvinklig triangel har kateterna [[a = 5]] cm och [[b = 12]] cm och hypotenusan [[c = 13]] cm. Hitta inskrivna cirkelns radie.",
            },
            {
              "kind": "h3",
              "text": "Uppgift 2: Hitta omskrivna cirkelns radie",
            },
            {
              "kind": "p",
              "text": "En rätvinklig triangel har hypotenusan [[c = 26]] cm. Hitta omskrivna cirkelns radie.",
            },
            {
              "kind": "h3",
              "text": "Uppgift 3: Beräkna båda radierna",
            },
            {
              "kind": "p",
              "text": "En rätvinklig triangel har [[a = 9]] cm, [[b = 40]] cm och [[c = 41]] cm. Hitta både inskrivna och omskrivna cirkelns radie.",
            },
            {
              "kind": "h3",
              "text": "Uppgift 4: Kontrollera triangelns giltighet",
            },
            {
              "kind": "p",
              "text": "En triangel sägs ha sidorna 7 cm, 24 cm och 25 cm. Kontrollera med Pythagoras sats att den är en rätvinklig triangel och hitta sedan dess inskrivna cirkels radie.",
            },
            {
              "kind": "h3",
              "text": "Uppgift 5: Inskrivna cirkelns radie från area och semiperimeter",
            },
            {
              "kind": "p",
              "text": "En rätvinklig triangel har kateterna 8 cm och 15 cm. Hitta dess area och semiperimeter och använd sedan [[r = \\frac{Area}{s}]] för att hitta inskrivna cirkelns radie.",
            },
            {
              "kind": "h3",
              "text": "Uppgift 6: Identifiera rätt läge",
            },
            {
              "kind": "p",
              "text": "Du vet bara att hypotenusan i en rätvinklig triangel är 18 cm. Vilket kalkylatorläge kan du använda, vilken radie kan du hitta och vad är dess värde? Förklara varför den andra radien inte kan hittas enbart från den här informationen.",
            },
            {
              "kind": "h3",
              "text": "Svar till övningsuppgifterna",
            },
            {
              "kind": "p",
              "text": "Svar 1: [[r = \\frac{5 + 12 - 13}{2} = \\frac{4}{2} = 2]] cm.",
            },
            {
              "kind": "p",
              "text": "Svar 2: [[R = \\frac{26}{2} = 13]] cm.",
            },
            {
              "kind": "p",
              "text": "Svar 3: [[r = \\frac{9 + 40 - 41}{2} = \\frac{8}{2} = 4]] cm och [[R = \\frac{41}{2} = 20.5]] cm.",
            },
            {
              "kind": "p",
              "text": "Svar 4: [[7^2 + 24^2 = 49 + 576 = 625 = 25^2]], så det är en rätvinklig triangel, och [[r = \\frac{7 + 24 - 25}{2} = \\frac{6}{2} = 3]] cm.",
            },
            {
              "kind": "p",
              "text": "Svar 5: [[Area = \\frac{8 \\times 15}{2} = 60]] cm², [[c = 17]] cm, [[s = \\frac{8 + 15 + 17}{2} = 20]] cm, så [[r = \\frac{60}{20} = 3]] cm.",
            },
            {
              "kind": "p",
              "text": "Svar 6: Använd läget för omskrivna cirkelns radie: [[R = \\frac{18}{2} = 9]] cm. Inskrivna cirkelns radie kan inte hittas, eftersom [[r = \\frac{a + b - c}{2}]] behöver båda kateterna, och många rätvinkliga trianglar delar en hypotenusa på 18 cm.",
            },
          ],
          "h2": "Övningsuppgifter med svar",
        },
      },
      "tocHeading": "Guideinnehåll",
      "tocItems": {
        "sec-applications": "Praktiska tillämpningar av trianglars radier",
        "sec-area-relation": "Sambandet mellan inskrivna cirkelns radie, omskrivna cirkelns radie och triangelns area",
        "sec-calculate": "Beräkna inskrivna eller omskrivna cirkelns radie i en rätvinklig triangel",
        "sec-circumradius-formula": "Formel för omskrivna cirkelns radie i rätvinklig triangel",
        "sec-difference": "Skillnaden mellan inskrivna cirkelns radie och omskrivna cirkelns radie",
        "sec-examples-circumradius": "Genomräknade exempel på beräkning av omskrivna cirkelns radie",
        "sec-examples-inradius": "Genomräknade exempel på beräkning av inskrivna cirkelns radie",
        "sec-faq": "Vanliga frågor",
        "sec-how-to-use": "Så använder du kalkylatorn för radie i rätvinklig triangel",
        "sec-intro": "Kalkylator för radie i rätvinklig triangel",
        "sec-mistakes": "Vanliga misstag vid beräkning av inskrivna och omskrivna cirkelns radie",
        "sec-perimeter-relation": "Sambandet mellan inskrivna cirkelns radie och omkrets",
        "sec-practice": "Övningsuppgifter med svar",
        "sec-properties": "Viktiga egenskaper hos rätvinkliga trianglars radier",
        "sec-related": "Utforska relaterade kalkylatorer för rätvinkliga trianglar",
        "sec-step-example": "Steg för steg-exempel: Beräkna båda radierna",
        "sec-validity": "Så kontrollerar du om dina mått för en rätvinklig triangel är giltiga",
        "sec-what-circumradius": "Vad är omskrivna cirkelns radie i en rätvinklig triangel?",
        "sec-what-inradius": "Vad är inskrivna cirkelns radie i en rätvinklig triangel?",
        "sec-why-diameter": "Varför är hypotenusan diametern i den omskrivna cirkeln?",
        "sec-why-inradius": "Varför fungerar formeln för inskrivna cirkelns radie?",
        "sec-inradius-formula": "Formel för inskrivna cirkelns radie i rätvinklig triangel",
      },
    },
};
