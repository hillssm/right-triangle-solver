// circumradiusGuideTranslations.bsv.ts: Right Triangle Circumradius
// Guide (Page 35 of 45) translation.
export const CIRCUMR_B6_SV = {
  "sv": {
      "tocHeading": "Guideinnehåll",
      "tocItems": {
        "sec-intro": "Kalkylator för omskrivna cirkelns radie i en rätvinklig triangel",
        "sec-calculate": "Beräkna den omskrivna cirkelns radie i en rätvinklig triangel",
        "sec-what-circumradius": "Vad är den omskrivna cirkelns radie i en rätvinklig triangel?",
        "sec-circumcircle": "Vad är en omskriven cirkel i rätvinklig triangels geometri?",
        "sec-formula": "Formel för den omskrivna cirkelns radie i en rätvinklig triangel",
        "sec-why-diameter": "Varför är hypotenusan den omskrivna cirkelns diameter?",
        "sec-circumcenter": "Vad är den omskrivna cirkelns medelpunkt i en rätvinklig triangel?",
        "sec-how-to-use": "Så använder du kalkylatorn för den omskrivna cirkelns radie i en rätvinklig triangel",
        "sec-step-example": "Steg-för-steg-exempel på att hitta den omskrivna cirkelns radie",
        "sec-diagram": "Diagram över den rätvinkliga triangelns omskrivna cirkel förklarat",
        "sec-proof": "Varför fungerar formeln för den omskrivna cirkelns radie?",
        "sec-thales": "Att förstå Thales sats och den omskrivna cirkeln",
        "sec-examples": "Genomräknade exempel på att beräkna den omskrivna cirkelns radie i en rätvinklig triangel",
        "sec-legs-known": "Så hittar du den omskrivna cirkelns radie när de två kateterna är kända",
        "sec-diameter": "Sambandet mellan den omskrivna cirkelns radie och diametern",
        "sec-vs-inradius": "Omskrivna cirkelns radie jämfört med inskrivna cirkelns radie i en rätvinklig triangel",
        "sec-pythagoras": "Sambandet mellan den omskrivna cirkelns radie och Pythagoras sats",
        "sec-verify": "Så kontrollerar du din beräkning av den omskrivna cirkelns radie",
        "sec-properties": "Viktiga egenskaper hos den omskrivna cirkelns radie i rätvinkliga trianglar",
        "sec-mistakes": "Vanliga misstag vid beräkning av den omskrivna cirkelns radie",
        "sec-applications": "Praktiska tillämpningar av den omskrivna cirkelns radie",
        "sec-practice": "Övningsuppgifter med svar",
        "sec-related": "Utforska relaterade kalkylatorer för rätvinkliga trianglar",
        "sec-faq": "Vanliga frågor",
      },
      "sections": {
        "sec-intro": {
          "h2": "Kalkylator för omskrivna cirkelns radie i en rätvinklig triangel",
          "blocks": [
            {
              "kind": "p",
              "text": "Hitta den omskrivna cirkelns radie i en rätvinklig triangel med en enda division: halvera hypotenusan.",
            },
            {
              "kind": "p",
              "text": "Den omskrivna cirkelns radie är radien i den cirkel som går genom triangelns alla tre hörn, den så kallade omskrivna cirkeln. Hypotenusan c är sidan mittemot den räta vinkeln, och den är det enda mått som denna kalkylator behöver, eftersom hypotenusan också är den omskrivna cirkelns diameter. Formeln är [[R = \\frac{c}{2}]], där [[R]] är den omskrivna cirkelns radie och [[c]] är hela hypotenusan.",
            },
            {
              "kind": "p",
              "text": "Om till exempel [[c = 10]] cm, så är [[R = \\frac{10}{2} = 5]] cm. De 5 cm är avståndet från den omskrivna cirkelns medelpunkt till varje hörn i triangeln. Samma avstånd når hörn A, hörn B och hörn C, och det är precis det som gör att cirkeln går genom alla tre.",
            },
          ],
        },
        "sec-calculate": {
          "h2": "Beräkna den omskrivna cirkelns radie i en rätvinklig triangel",
          "blocks": [
            {
              "kind": "p",
              "text": "Kalkylatorn på den här sidan har ett inmatningsfält, för hypotenusan c. Hypotenusan är sidan mittemot den räta vinkeln, och den är också triangelns längsta sida. Mät den från ena änden till den andra, i den enhet du använder, och skriv in det enda talet.",
            },
            {
              "kind": "p",
              "text": "Hypotenusan ensam räcker, eftersom den omskrivna cirkelns radie inte beror på något annat. Det är därför kalkylatorn inte behöver någon andra eller tredje inmatning.",
            },
            {
              "kind": "p",
              "text": "Skriv in en positiv längd. En hypotenusa på noll eller ett negativt tal beskriver ingen verklig triangel, och kalkylatorn har inget vettigt att halvera. Håll enheten konsekvent med din uppgift: om c är i centimeter är svaret i centimeter, och om c är i meter är svaret i meter.",
            },
            {
              "kind": "p",
              "text": "Klicka på Beräkna omskrivna cirkelns radie R för att se resultatet, och använd Återställ för att rensa fältet inför en ny uppgift. Läs svaret som en radie, inte som en diameter. Om kalkylatorn visar 5 cm för en hypotenusa på 10 cm är hela cirkeln tvärs över 10 cm, och 5 cm är avståndet från dess medelpunkt till dess kant.",
            },
          ],
        },
        "sec-what-circumradius": {
          "h2": "Vad är den omskrivna cirkelns radie i en rätvinklig triangel?",
          "blocks": [
            {
              "kind": "p",
              "text": "Den omskrivna cirkelns radie i en rätvinklig triangel är radien i dess omskrivna cirkel, den cirkel som dras genom alla tre hörn. Ta triangeln ABC med den räta vinkeln vid C. Rita en cirkel som går exakt genom A, B och C. Avståndet från den cirkelns medelpunkt till vart och ett av de tre hörnen är den omskrivna cirkelns radie, skriven [[R]].",
            },
            {
              "kind": "p",
              "text": "Cirkelns medelpunkt kallas den omskrivna cirkelns medelpunkt, skriven [[O]]. I en rätvinklig triangel ligger [[O]] vid mittpunkten på hypotenusan AB. Eftersom [[O]] är medelpunkten är avstånden från [[O]] till de tre hörnen alla lika, så [[AO = BO = CO = R]]. Ett tal, [[R]], beskriver alla tre avstånden på en gång.",
            },
            {
              "kind": "p",
              "text": "Ett enkelt exempel gör det konkret. I en 6-8-10-triangel är hypotenusan 10 cm, så den omskrivna cirkelns radie är 5 cm. Medelpunkten ligger 5 cm från A, 5 cm från B och 5 cm från C. Kateterna, 6 cm och 8 cm, är triangelns sidor, inte radier, och ingen av dem är lika med den omskrivna cirkelns radie här.",
            },
          ],
          "image": {
            "src": "circumradius-main-circumcircle.svg",
            "alt": "Rätvinklig triangel ABC inuti sin omskrivna cirkel med medelpunkt O vid mittpunkten på hypotenusan AB",
            "caption": "Triangeln ABC inuti sin omskrivna cirkel: O är medelpunkten, och AO, BO och CO är var och en lika med R.",
          },
        },
        "sec-circumcircle": {
          "h2": "Vad är en omskriven cirkel i rätvinklig triangels geometri?",
          "blocks": [
            {
              "kind": "p",
              "text": "En omskriven cirkel är en cirkel som går genom varje hörn i en polygon. För en triangel betyder det att cirkeln går genom alla tre hörn och inget mer krävs av den. Varje triangel har exakt en omskriven cirkel, eftersom tre punkter som inte ligger på en linje bestämmer en enda cirkel.",
            },
            {
              "kind": "p",
              "text": "I en rätvinklig triangel har den omskrivna cirkeln en särskild form. Triangeln passar inuti cirkeln med hypotenusan utsträckt rakt över mitten, från ena sidan av cirkeln till den andra. Det tredje hörnet, den räta vinkelns hörn C, ligger på cirkeln mellan dem. Ingen del av triangeln sticker ut utanför cirkeln, och cirkeln är den minsta som kan gå genom alla tre hörn.",
            },
            {
              "kind": "p",
              "text": "Den omskrivna cirkeln skiljer sig från den inskrivna cirkeln. Den inskrivna cirkeln ligger inuti triangeln och vidrör alla tre sidor inifrån. Den omskrivna cirkeln omger triangeln och vidrör den bara vid de tre hörnen. Att blanda ihop de två cirklarna är den vanligaste källan till förvirring på den här sidan, och jämförelsen nedan ställer dem sida vid sida.",
            },
          ],
        },
        "sec-formula": {
          "h2": "Formel för den omskrivna cirkelns radie i en rätvinklig triangel",
          "blocks": [
            {
              "kind": "p",
              "text": "Formeln för den omskrivna cirkelns radie i en rätvinklig triangel är kort nog att komma ihåg vid en snabb titt:",
            },
            {
              "kind": "p",
              "text": "[[[R = \\frac{c}{2}]]]",
            },
            {
              "kind": "p",
              "text": "Här är [[R]] den omskrivna cirkelns radie, radien i den omskrivna cirkeln, och [[c]] är hela hypotenusan, sidan mittemot den räta vinkeln. Formeln säger: ta hypotenusan och dividera den med två.",
            },
            {
              "kind": "p",
              "text": "Beräkningen har två steg. Först ska du identifiera hypotenusan korrekt. Det är sidan mitt emot den räta vinkeln, och den är alltid den längsta sidan. Sedan dividerar du dess längd med två. Det finns ingen kvadrering, ingen kvadratrot och inget andra mått att hitta först, förutsatt att hypotenusan redan är känd.",
            },
            {
              "kind": "p",
              "text": "Anledningen till att divisionen fungerar är att hypotenusan är den omskrivna cirkelns diameter. En radie är alltid halva en diameter, så [[R = \\frac{D}{2}]], där [[D]] är diametern. I en rätvinklig triangel är [[D = c]], så insättning ger [[R = \\frac{c}{2}]]. Formeln är egentligen det välkända sambandet mellan radie och diameter, tillämpat på en diameter som råkar vara en sida i triangeln.",
            },
            {
              "kind": "p",
              "text": "För en allmän triangel, en som inte nödvändigtvis är rätvinklig, följer den omskrivna cirkelns radie formeln [[R = \\frac{abc}{4A}]], där [[a]], [[b]] och [[c]] är de tre sidorna och [[A]] är triangelns area. För en rätvinklig triangel förenklas den till [[R = \\frac{c}{2}]], eftersom arean är [[A = \\frac{ab}{2}]]. Använd den allmänna formeln bara för trianglar som inte är rätvinkliga.",
            },
          ],
        },
        "sec-why-diameter": {
          "h2": "Varför är hypotenusan den omskrivna cirkelns diameter?",
          "blocks": [
            {
              "kind": "p",
              "text": "Det här är den idé som hela sidan vilar på, så den förtjänar en noggrann titt. Ta den rätvinkliga triangeln ABC med den räta vinkeln vid C, och låt [[O]] vara mittpunkten på hypotenusan AB. Påståendet är att [[O]] ligger lika långt från alla tre hörn, vilket gör den till medelpunkten i den omskrivna cirkeln, och att AB, som går genom [[O]] med båda ändar på cirkeln, är en diameter.",
            },
            {
              "kind": "p",
              "text": "Nyckelfaktumet är mittpunktsegenskapen hos en rätvinklig triangel: hypotenusans mittpunkt ligger lika långt från alla tre hörn. I symboler är [[OA = OB = OC]]. Eftersom [[O]] är mittpunkten på AB är [[OA]] och [[OB]] var och en halva hypotenusan, så [[OA = OB = \\frac{c}{2}]].",
            },
            {
              "kind": "p",
              "text": "Varför är [[OC]] lika med halva hypotenusan? Ett sätt att se det är att fullborda rektangeln. Rita en kopia av triangeln ABC roterad ett halvt varv omkring [[O]], så att de två trianglarna tillsammans bildar en rektangel med AB som en diagonal. En rektangels diagonaler är lika långa och delar varandra på mitten, så [[OC = \\frac{c}{2}]] också.",
            },
            {
              "kind": "p",
              "text": "När [[OA = OB = OC]] är fastställt följer resten. En cirkel med medelpunkt i [[O]] och radien [[\\frac{c}{2}]] går genom A, B och C, så den är den omskrivna cirkeln, [[O]] är den omskrivna cirkelns medelpunkt och [[\\frac{c}{2}]] är den omskrivna cirkelns radie. Eftersom A och B är motsatta ändar av en linje genom medelpunkten är AB en diameter, så [[AB = 2R]], vilket är [[c = 2R]] och därför [[R = \\frac{c}{2}]].",
            },
          ],
          "image": {
            "src": "circumradius-hypotenuse-diameter.svg",
            "alt": "Hypotenusan AB visad som den omskrivna cirkelns diameter med AO och OB lika med R",
            "caption": "Hypotenusan AB är diametern: AO och OB är var och en lika med R, och AB är lika med 2R.",
          },
        },
        "sec-circumcenter": {
          "h2": "Vad är den omskrivna cirkelns medelpunkt i en rätvinklig triangel?",
          "blocks": [
            {
              "kind": "p",
              "text": "Den omskrivna cirkelns medelpunkt i en triangel är den punkt som ligger lika långt från alla tre hörn, och den är medelpunkten i den omskrivna cirkeln. Den hittas där sidornas mittpunktsnormaler möts.",
            },
            {
              "kind": "p",
              "text": "För en rätvinklig triangel möts mittpunktsnormalerna i en punkt som du kan hitta utan att rita dem: mittpunkten på hypotenusan. Dela AB på mitten så har du den omskrivna cirkelns medelpunkt [[O]]. Att dela någon av kateterna på mitten ger en linje som går genom samma punkt, vilket är en användbar kontroll när du konstruerar medelpunkten med passare och linjal.",
            },
            {
              "kind": "p",
              "text": "Den omskrivna cirkelns medelpunkt ligger på själva hypotenusan, exakt halvvägs längs den. Det är det särskilda draget hos rätvinkliga trianglar. I en spetsvinklig triangel är alla tre vinklar mindre än 90 grader och den omskrivna cirkelns medelpunkt hamnar inuti triangeln. Den rätvinkliga triangeln är gränsfallet, med medelpunkten på triangelns gräns, på dess längsta sida.",
            },
            {
              "kind": "p",
              "text": "Den omskrivna cirkelns medelpunkt är inte den räta vinkelns hörn. Hörn C är en punkt på cirkeln, på avståndet [[R]] från [[O]], medan [[O]] är medelpunkten. Att blanda ihop de två är ett vanligt fel, eftersom C är triangelns mest iögonfallande hörn. Kom ihåg att medelpunkten måste ligga lika långt från A, B och C, och C ligger inte lika långt från A och B om inte triangeln är likbent på ett särskilt sätt, så C kan inte vara medelpunkten i allmänhet.",
            },
          ],
          "image": {
            "src": "circumradius-circumcenter.svg",
            "alt": "Omskrivna cirkelns medelpunkt O vid mittpunkten på hypotenusan, lika långt från alla tre hörn",
            "caption": "O är mittpunkten på AB, med OA, OB och OC alla lika med R.",
          },
        },
        "sec-how-to-use": {
          "h2": "Så använder du kalkylatorn för den omskrivna cirkelns radie i en rätvinklig triangel",
          "blocks": [
            {
              "kind": "p",
              "text": "Nio korta steg tar dig från en märkt triangel till ett kontrollerat svar. Kateterna behövs inte vid något tillfälle, eftersom hypotenusan ensam bestämmer den omskrivna cirkelns radie.",
            },
            {
              "kind": "steps",
              "steps": [
                "Identifiera den rätvinkliga triangeln i din uppgift och bekräfta att den har en rät vinkel.",
                "Leta reda på den räta vinkeln, vanligtvis markerad med en liten kvadrat vid hörn C.",
                "Identifiera sidan mittemot den räta vinkeln; den sidan är hypotenusan c.",
                "Bekräfta att den här sidan är triangelns längsta sida. Om den inte är det, märk om diagrammet innan du fortsätter.",
                "Välj lämplig enhet och omvandla alla mått så att de använder samma enhet.",
                "Skriv in hypotenusans längd i fältet Hypotenusa c.",
                "Klicka på Beräkna omskrivna cirkelns radie R och läs av resultatet.",
                "Kontrollera resultatet: det måste vara positivt, i samma enhet som c, och exakt halva c.",
                "Använd Återställ när du börjar en ny beräkning.",
              ],
            },
            {
              "kind": "p",
              "text": "Om din uppgift ger de två kateterna i stället för hypotenusan, hitta c först med Pythagoras sats, [[c = \\sqrt{a^2 + b^2}]], och skriv sedan in det värdet. <a href=\"/right-triangle-side-calculator/\">Kalkylatorn för rätvinkliga trianglars sidor</a> kan hitta den saknade hypotenusan åt dig, och avsnittet om kateter nedan går igenom ett fullständigt exempel.",
            },
          ],
        },
        "sec-step-example": {
          "h2": "Steg-för-steg-exempel på att hitta den omskrivna cirkelns radie",
          "blocks": [
            {
              "kind": "p",
              "text": "Använd [[c = 10]] cm. De tre stegen nedan visar hela uträkningen, utan att något hoppas över.",
            },
            {
              "kind": "steps",
              "steps": [
                "Skriv formeln: [[R = \\frac{c}{2}]].",
                "Sätt in det kända värdet: [[R = \\frac{10}{2}]].",
                "Dividera: [[R = 5]] cm.",
              ],
            },
            {
              "kind": "p",
              "text": "Svaret 5 cm betyder att den omskrivna cirkeln har radien 5 cm. Dess medelpunkt, hypotenusans mittpunkt, ligger 5 cm från varje hörn i triangeln, och cirkeln går genom alla tre hörn. Cirkelns diameter är 10 cm, samma som hypotenusan.",
            },
            {
              "kind": "p",
              "text": "Kontrollera svaret med sambandet mellan diameter och radie, [[2R = c]]. Att dubblera radien ger [[2 \\times 5 = 10]] cm, vilket stämmer exakt med hypotenusan. Om dubbleringen av ditt svar inte ger tillbaka hypotenusan du började med har divisionen gått fel någonstans, och kontrollen avslöjar det genast.",
            },
          ],
          "image": {
            "src": "circumradius-example-c10.svg",
            "alt": "Genomräknat exempel med hypotenusan 10 cm och omskrivna cirkelns radie 5 cm inuti den omskrivna cirkeln",
            "caption": "Genomräknat exempel: c = 10 cm ger R = 5 cm, och 2 gånger 5 cm är lika med 10 cm.",
          },
        },
        "sec-diagram": {
          "h2": "Diagram över den rätvinkliga triangelns omskrivna cirkel förklarat",
          "blocks": [
            {
              "kind": "p",
              "text": "Diagrammet visar triangeln ABC med den räta vinkeln vid C. Sidan AC är katet a, sidan BC är katet b och sidan AB är hypotenusan c. Punkten [[O]] markerar mittpunkten på AB, och en cirkel med medelpunkt i [[O]] går genom A, B och C.",
            },
            {
              "kind": "p",
              "text": "Läs diagrammet i den här ordningen. Börja vid A, gå längs katet a till C, sedan längs katet b till B, och sedan tillbaka längs hypotenusan från B till A, förbi [[O]] på vägen. Sträckorna från [[O]] till A, B och C är alla radier, var och en märkt [[R]].",
            },
            {
              "kind": "p",
              "text": "Sträckan AB går genom medelpunkten [[O]] och har båda ändpunkter på cirkeln, vilket är definitionen av en diameter. Det är därför AB ritas som en rak linje tvärs över cirkelns mitt i stället för som en korda vid sidan. Den räta vinkeln vid C ligger på själva cirkeln, vilket är den bild som Thales sats beskriver.",
            },
          ],
        },
        "sec-proof": {
          "h2": "Varför fungerar formeln för den omskrivna cirkelns radie?",
          "blocks": [
            {
              "kind": "p",
              "text": "Beviset använder hypotenusans mittpunkt och faktumet att den ligger lika långt från alla tre hörn. Låt [[M]] vara mittpunkten på AB i den rätvinkliga triangeln ABC, med den räta vinkeln vid C. Då är [[AM = BM = \\frac{c}{2}]] enligt definitionen av en mittpunkt. Steget som behöver bevisas är [[MA = MB = MC]], påståendet att det tredje avståndet stämmer med de två första.",
            },
            {
              "kind": "p",
              "text": "Ett rent sätt att visa det är att förlänga medianen CM till en punkt D så att [[MD = MC]], och förbinda D med A och B. Fyrhörningen ACBD har diagonalerna AB och CD som delar varandra på mitten vid [[M]], så den är ett parallellogram. Dess vinkel vid C är en rät vinkel, och ett parallellogram med en rät vinkel är en rektangel, så ACBD är en rektangel.",
            },
            {
              "kind": "p",
              "text": "En rektangels diagonaler är lika långa, så [[CD = AB = c]]. Eftersom [[M]] delar CD på mitten är [[MC = \\frac{CD}{2} = \\frac{c}{2}]]. Det stämmer med [[MA]] och [[MB]], så [[MA = MB = MC = \\frac{c}{2}]]. Punkten [[M]] ligger lika långt från A, B och C, vilket gör den till den omskrivna cirkelns medelpunkt, och det gemensamma avståndet [[\\frac{c}{2}]] är den omskrivna cirkelns radie. Därför är [[R = \\frac{c}{2}]].",
            },
          ],
        },
        "sec-thales": {
          "h2": "Att förstå Thales sats och den omskrivna cirkeln",
          "blocks": [
            {
              "kind": "p",
              "text": "Thales sats säger att en vinkel som spänns upp av en diameter vid en punkt på en cirkel är en rät vinkel. I bilden är AB en diameter i en cirkel och C är vilken punkt som helst på cirkeln utom A eller B. Då är vinkeln ACB 90 grader. Satsen är uppkallad efter Thales från Miletos, som tillskrivs det första kända beviset för den.",
            },
            {
              "kind": "p",
              "text": "Det omvända är vad den här sidan använder: om en triangel har en rät vinkel kan dess hypotenusa behandlas som diametern i en cirkel som går genom alla tre hörn. Ta triangeln ABC med vinkeln C lika med 90 grader. Det omvända säger att C ligger på cirkeln med diametern AB, så den cirkeln är triangelns omskrivna cirkel, och dess radie är halva AB.",
            },
            {
              "kind": "p",
              "text": "De två riktningarna tillsammans ger ett fullständigt test. En punkt C på cirkeln med diametern AB ger alltid en rät vinkel vid C, och en rät vinkel vid C placerar alltid C på den cirkeln.",
            },
            {
              "kind": "p",
              "text": "Satsen förklarar också den omskrivna cirkelns medelpunkt. Cirkelns medelpunkt är mittpunkten på dess diameter, och diametern är hypotenusan, så medelpunkten är hypotenusans mittpunkt. Inget annat om triangeln behöver vara känt. Det är därför kalkylatorn bara frågar efter ett tal.",
            },
          ],
          "image": {
            "src": "circumradius-thales-theorem.svg",
            "alt": "Diagram för Thales sats med diametern AB och punkten C på cirkeln som bildar en rät vinkel",
            "caption": "Thales sats: AB är diametern, C ligger på cirkeln, och vinkel C är 90 grader.",
          },
        },
        "sec-examples": {
          "h2": "Genomräknade exempel på att beräkna den omskrivna cirkelns radie i en rätvinklig triangel",
          "blocks": [
            {
              "kind": "h3",
              "text": "Exempel 1: Grundläggande heltal",
            },
            {
              "kind": "p",
              "text": "Givet [[c = 10]] cm ger formeln [[R = \\frac{10}{2} = 5]] cm. Den omskrivna cirkeln har en diameter på 10 cm och en radie på 5 cm, och dess medelpunkt är hypotenusans mittpunkt, 5 cm från varje hörn.",
            },
            {
              "kind": "h3",
              "text": "Exempel 2: Större mått",
            },
            {
              "kind": "p",
              "text": "Givet [[c = 24]] m är [[R = \\frac{24}{2} = 12]] m. Större tal ändrar ingenting om metoden: halvera hypotenusan och behåll enheten. En cirkel som är 24 m tvärs över har radien 12 m.",
            },
            {
              "kind": "h3",
              "text": "Exempel 3: Decimalmått",
            },
            {
              "kind": "p",
              "text": "Givet [[c = 7.5]] cm är [[R = \\frac{7.5}{2} = 3.75]] cm. En hypotenusa med decimal ger en omskriven cirkels radie med decimal, vilket är normalt. Kontrollera genom att dubblera: [[2 \\times 3.75 = 7.5]] cm, vilket ger tillbaka hypotenusan.",
            },
            {
              "kind": "h3",
              "text": "Exempel 4: Udda hypotenusa",
            },
            {
              "kind": "p",
              "text": "Givet [[c = 13]] cm är [[R = \\frac{13}{2} = 6.5]] cm. Ett udda heltal som halveras ger ett tal som slutar på .5. Detta är 5-12-13-triangeln, vars kateter är 5 cm och 12 cm, eftersom [[5^2 + 12^2 = 25 + 144 = 169 = 13^2]].",
            },
            {
              "kind": "h3",
              "text": "Exempel 5: Millimetermått",
            },
            {
              "kind": "p",
              "text": "Givet [[c = 180]] mm är [[R = \\frac{180}{2} = 90]] mm. Små enheter fungerar på samma sätt, och att hålla enheten i millimeter hela vägen undviker all omvandling. I centimeter är samma svar 9 cm, eftersom 90 mm är lika med 9 cm.",
            },
            {
              "kind": "h3",
              "text": "Exempel 6: Bråkmått",
            },
            {
              "kind": "p",
              "text": "Givet [[c = \\frac{15}{2}]] ft är [[R = \\frac{15/2}{2} = \\frac{15}{4}]] ft, vilket är 3.75 ft. Att dividera med 2 betyder att multiplicera nämnaren med 2, så nämnaren växer från 2 till 4. Decimalformen, 3.75 ft, är samma svar skrivet på ett annat sätt.",
            },
            {
              "kind": "h3",
              "text": "Exempel 7: Olika enheter",
            },
            {
              "kind": "p",
              "text": "Givet [[c = 1.2]] m är [[R = \\frac{1.2}{2} = 0.6]] m. Omvandlat till centimeter är 0.6 m lika med 60 cm, eftersom 1 m är 100 cm. Båda enheterna är korrekta, men svaret måste ange vilken det använder.",
            },
            {
              "kind": "h3",
              "text": "Exempel 8: Stort decimalmått",
            },
            {
              "kind": "p",
              "text": "Givet [[c = 125.6]] m är [[R = \\frac{125.6}{2} = 62.8]] m. Att dubblera 62.8 ger tillbaka 125.6, vilket bekräftar divisionen.",
            },
          ],
        },
        "sec-legs-known": {
          "h2": "Så hittar du den omskrivna cirkelns radie när de två kateterna är kända",
          "blocks": [
            {
              "kind": "p",
              "text": "Kalkylatorn på den här sidan frågar efter hypotenusan, men många uppgifter ger de två kateterna i stället. I så fall ska du hitta hypotenusan först med Pythagoras sats och sedan halvera den. De två stegen kombineras till en formel, [[R = \\frac{\\sqrt{a^2 + b^2}}{2}]], där [[a]] och [[b]] är kateterna.",
            },
            {
              "kind": "p",
              "text": "Använd [[a = 6]] cm och [[b = 8]] cm. Kvadrera först båda kateterna och addera: [[a^2 + b^2 = 36 + 64 = 100]]. Ta sedan kvadratroten för att få hypotenusan: [[c = \\sqrt{100} = 10]] cm. Halvera den sedan: [[R = \\frac{10}{2} = 5]] cm.",
            },
            {
              "kind": "p",
              "text": "<a href=\"/pythagorean-theorem-calculator/\">Kalkylatorn för Pythagoras sats</a> hittar en saknad hypotenusa från två kateter, vilket är samma första steg som används här. <a href=\"/right-triangle-area-calculator/\">Kalkylatorn för rätvinkliga trianglars area</a> använder samma två kateter på ett annat sätt och beräknar [[A = \\frac{ab}{2}]], vilket är 24 kvadratcentimeter för 6-8-10-triangeln.",
            },
          ],
        },
        "sec-diameter": {
          "h2": "Sambandet mellan den omskrivna cirkelns radie och diametern",
          "blocks": [
            {
              "kind": "p",
              "text": "Radie och diameter beskriver samma cirkel på två sätt. Diametern [[D]] är avståndet rakt över cirkeln genom dess medelpunkt, och radien [[R]] är avståndet från medelpunkten till kanten, så [[D = 2R]] och [[R = \\frac{D}{2}]]. Att dubblera en radie ger diametern, och att halvera en diameter ger radien.",
            },
            {
              "kind": "p",
              "text": "För en rätvinklig triangel har diametern en andra identitet: den är lika med hypotenusan. Hypotenusan sträcker sig över den omskrivna cirkeln från ena sidan till den andra, genom medelpunkten, så [[D = c]]. Att kombinera de två sambanden ger [[c = 2R]] och [[R = \\frac{c}{2}]], vilket är formeln som den här sidan bygger på.",
            },
            {
              "kind": "p",
              "text": "Ett numeriskt exempel håller de tre längderna isär. I en triangel med [[c = 18]] cm är diametern [[D = 18]] cm och den omskrivna cirkelns radie [[R = 9]] cm. Hypotenusan, 18 cm, och diametern, 18 cm, är samma linje mätt i två roller, medan radien, 9 cm, är halva den linjen.",
            },
          ],
        },
        "sec-vs-inradius": {
          "h2": "Omskrivna cirkelns radie jämfört med inskrivna cirkelns radie i en rätvinklig triangel",
          "blocks": [
            {
              "kind": "p",
              "text": "Den omskrivna cirkelns radie och den inskrivna cirkelns radie är de två radierna i en rätvinklig triangel, och de beskriver två olika cirklar. Den omskrivna cirkelns radie [[R]] är radien i den omskrivna cirkeln, som går genom alla tre hörn. Den inskrivna cirkelns radie [[r]] är radien i den inskrivna cirkeln, som ligger inuti triangeln och vidrör alla tre sidor. Den ena cirkeln omger triangeln, den andra ligger inuti den.",
            },
            {
              "kind": "p",
              "text": "För en rätvinklig triangel är den omskrivna cirkelns radie [[R = \\frac{c}{2}]], medan den inskrivna cirkelns radie är [[r = \\frac{a + b - c}{2}]], där [[a]] och [[b]] är kateterna och [[c]] är hypotenusan. Den omskrivna cirkelns radie behöver bara hypotenusan; den inskrivna cirkelns radie behöver alla tre sidor, eftersom hur nära den inskrivna cirkeln passar beror på triangelns form, inte bara på dess längsta sida.",
            },
            {
              "kind": "p",
              "text": "Medelpunkterna skiljer sig också. Den omskrivna cirkelns medelpunkt är hypotenusans mittpunkt, på triangelns gräns. Den inskrivna cirkelns medelpunkt ligger inuti triangeln, där vinkelbisektriserna möts, på avståndet [[r]] från varje sida.",
            },
            {
              "kind": "p",
              "text": "Använd 6-8-10-triangeln för att se skillnaden i tal. Den omskrivna cirkelns radie är [[R = \\frac{10}{2} = 5]] cm, och den inskrivna cirkelns radie är [[r = \\frac{6 + 8 - 10}{2} = \\frac{4}{2} = 2]] cm.",
            },
            {
              "kind": "p",
              "text": "För uppgifter om den inskrivna cirkeln, använd <a href=\"/right-triangle-inradius-calculator/\">kalkylatorn för den inskrivna cirkelns radie i en rätvinklig triangel</a>, som tillämpar [[r = \\frac{a + b - c}{2}]] direkt. <a href=\"/right-triangle-radius-calculator/\">Kalkylatorn för rätvinkliga trianglars radie</a> täcker båda radierna på en sida när du behöver jämföra dem.",
            },
          ],
          "table": {
            "headers": [
              "Egenskap",
              "Omskrivna cirkelns radie R",
              "Inskrivna cirkelns radie r",
            ],
            "rows": [
              [
                "Cirkel",
                "Omskriven cirkel",
                "Inskriven cirkel",
              ],
              [
                "Position",
                "Runt triangeln",
                "Inuti triangeln",
              ],
              [
                "Kontakt",
                "Går genom hörnen",
                "Tangerar sidorna",
              ],
              [
                "Formel för rätvinklig triangel",
                "c/2",
                "(a+b-c)/2",
              ],
              [
                "Medelpunkt",
                "Omskrivna cirkelns medelpunkt",
                "Inskrivna cirkelns medelpunkt",
              ],
            ],
          },
          "image": {
            "src": "circumradius-vs-incircle.svg",
            "alt": "Omskriven cirkel som går genom hörnen bredvid den inskrivna cirkeln som vidrör sidorna, 6-8-10-triangel",
            "caption": "Omskriven cirkel (R = 5 cm) runt triangeln, inskriven cirkel (r = 2 cm) inuti den, 6-8-10-triangel.",
          },
        },
        "sec-pythagoras": {
          "h2": "Sambandet mellan den omskrivna cirkelns radie och Pythagoras sats",
          "blocks": [
            {
              "kind": "p",
              "text": "Pythagoras sats säger att i en rätvinklig triangel är [[a^2 + b^2 = c^2]], där [[a]] och [[b]] är kateterna och [[c]] är hypotenusan. Den är länken mellan kateterna och hypotenusan, och genom hypotenusan också en länk till den omskrivna cirkelns radie.",
            },
            {
              "kind": "p",
              "text": "Eftersom [[R = \\frac{c}{2}]] och satsen ger [[c = \\sqrt{a^2 + b^2}]], ger insättning [[R = \\frac{\\sqrt{a^2 + b^2}}{2}]]. Den kombinerade formeln hittar den omskrivna cirkelns radie från de två kateterna i ett steg, utan att skriva ner hypotenusan separat. Det är samma beräkning i två steg som i avsnittet om kateter, skriven som ett enda uttryck.",
            },
            {
              "kind": "p",
              "text": "Kontrollera med 6-8-10-triangeln. Kateterna ger [[\\sqrt{6^2 + 8^2} = \\sqrt{36 + 64} = \\sqrt{100} = 10]] cm för hypotenusan, och halvering ger [[R = 5]] cm. Pythagoras sats ger hypotenusan, och formeln för den omskrivna cirkelns radie halverar den.",
            },
          ],
        },
        "sec-verify": {
          "h2": "Så kontrollerar du din beräkning av den omskrivna cirkelns radie",
          "blocks": [
            {
              "kind": "p",
              "text": "Fyra oberoende kontroller fångar nästan varje fel. Kör minst en på varje svar, och alla fyra när uppgiften är viktig. Exemplet nedan använder 6-8-10-triangeln, med [[c = 10]] cm och [[R = 5]] cm, genomgående.",
            },
            {
              "kind": "h3",
              "text": "Kontroll 1: Sambandet mellan diameter och radie",
            },
            {
              "kind": "p",
              "text": "Dubblera den omskrivna cirkelns radie och jämför med hypotenusan: [[2R = c]]. Här är [[2 \\times 5 = 10]] cm, vilket stämmer exakt med c. Om dubbleringen av ditt svar inte ger tillbaka hypotenusan har divisionen med två gått fel.",
            },
            {
              "kind": "h3",
              "text": "Kontroll 2: Sambandet med mittpunkten",
            },
            {
              "kind": "p",
              "text": "Den omskrivna cirkelns medelpunkt måste ligga halvvägs längs hypotenusan. Mät från vardera änden av hypotenusan till medelpunkten: varje halva måste vara lika med [[R]]. Här är varje halva 5 cm, vilket stämmer med den omskrivna cirkelns radie. En medelpunkt som inte ligger vid mittpunkten är inte den omskrivna cirkelns medelpunkt.",
            },
            {
              "kind": "h3",
              "text": "Kontroll 3: Lika avstånd",
            },
            {
              "kind": "p",
              "text": "Kontrollera att [[OA = OB = OC = R]]. Medelpunkten måste ligga på samma avstånd från alla tre hörn. I 6-8-10-triangeln är varje avstånd 5 cm. Om avståndet till den räta vinkelns hörn skiljer sig från avståndet till hypotenusans ändpunkter är medelpunkten eller radien fel.",
            },
            {
              "kind": "h3",
              "text": "Kontroll 4: Pythagoras sats",
            },
            {
              "kind": "p",
              "text": "När kateterna är kända, kontrollera att [[a^2 + b^2 = c^2]] och jämför den resulterande hypotenusan med [[2R]]. Här är [[6^2 + 8^2 = 36 + 64 = 100 = 10^2]], så [[c = 10]] cm, och [[2R = 10]] cm stämmer. Den här kontrollen testar hela triangeln, så den fångar märkningsfel som den första kontrollen kan missa.",
            },
          ],
        },
        "sec-properties": {
          "h2": "Viktiga egenskaper hos den omskrivna cirkelns radie i rätvinkliga trianglar",
          "blocks": [
            {
              "kind": "p",
              "text": "Nio egenskaper följer direkt av [[R = \\frac{c}{2}]]. Var och en fungerar också som en rimlighetskontroll av ett nytt svar.",
            },
            {
              "kind": "list",
              "items": [
                "Den omskrivna cirkelns radie är exakt halva hypotenusan, [[R = \\frac{c}{2}]], utan någon approximation.",
                "Hypotenusan är den omskrivna cirkelns diameter, så [[D = c]] och [[c = 2R]].",
                "Den omskrivna cirkelns medelpunkt ligger vid hypotenusans mittpunkt, på triangelns längsta sida.",
                "Den omskrivna cirkelns radie är alltid positiv för en icke-degenererad triangel, eftersom hypotenusan är en positiv längd.",
                "Den omskrivna cirkelns radie är halva hypotenusan, och eftersom hypotenusan är den längsta sidan är den omskrivna cirkelns radie mindre än hypotenusan. Om den är större eller mindre än en given katet beror på triangeln: i en 6-8-10-triangel är [[R = 5]] cm mindre än kateten på 8 cm, medan i en 5-12-13-triangel är [[R = 6.5]] cm större än kateten på 5 cm.",
                "Att öka hypotenusan ökar den omskrivna cirkelns radie proportionellt, eftersom [[R]] är halva [[c]].",
                "Att dubblera hypotenusan dubblerar den omskrivna cirkelns radie: om [[c]] blir [[2c]], så blir [[R]] lika med [[c]].",
                "Kateterna behövs inte när hypotenusan redan är känd; formeln använder bara [[c]].",
                "Alla tre hörn ligger lika långt från den omskrivna cirkelns medelpunkt, med [[AO = BO = CO = R]].",
              ],
            },
          ],
        },
        "sec-mistakes": {
          "h2": "Vanliga misstag vid beräkning av den omskrivna cirkelns radie",
          "blocks": [
            {
              "kind": "steps",
              "steps": [
                "Att skriva in en katet i stället för hypotenusan: att halvera en katet ger halva kateten, inte den omskrivna cirkelns radie. I en 6-8-10-triangel ger halvering av 6 cm 3 cm, medan den sanna omskrivna cirkelns radie är 5 cm.",
                "Att glömma att dividera med två: att ange hypotenusan som svar ger diametern, inte radien. Med [[c = 10]] cm är svaret 5 cm, inte 10 cm.",
                "Att behandla hypotenusan som radien: detta är samma fel från andra hållet. Hypotenusan spänner över cirkelns hela bredd, så den är diametern, och radien är halva den.",
                "Att blanda ihop den omskrivna cirkelns radie med den inskrivna cirkelns radie: den inskrivna cirkelns radie i en 6-8-10-triangel är 2 cm, medan den omskrivna cirkelns radie är 5 cm. De två cirklarna är olika, och deras formler är olika också.",
                "Att blanda ihop den omskrivna cirkelns medelpunkt med den räta vinkelns hörn: den omskrivna cirkelns medelpunkt är hypotenusans mittpunkt, inte hörn C. Hörn C är en punkt på cirkeln, på avståndet [[R]] från medelpunkten.",
                "Att anta att medelpunkten alltid ligger inuti en triangel: i en rätvinklig triangel ligger den omskrivna cirkelns medelpunkt på hypotenusan, och i en trubbvinklig triangel ligger den utanför.",
                "Att använda formeln på en godtycklig triangel: [[R = \\frac{c}{2}]] gäller bara för rätvinkliga trianglar. För en allmän triangel, använd [[R = \\frac{abc}{4A}]], där [[A]] är arean.",
                "Att blanda måttenheter: en hypotenusa i meter och ett svar angivet i centimeter skiljer sig med en faktor 100. Omvandla först, halvera sedan.",
                "Att använda noll eller negativa hypotenusavärden: en längd kan inte vara noll eller negativ i en verklig triangel. En inmatning på noll eller ett negativt värde betyder att mätningen är fel.",
                "Att blanda ihop diameter och radie: diametern är dubbelt så stor som radien. Om ditt svar är dubbelt så stort som det förväntade värdet har du troligen angett [[D]] i stället för [[R]].",
                "Att anta att den omskrivna cirkeln vidrör alla tre sidor: den omskrivna cirkeln går genom hörnen och vidrör triangeln bara vid de tre punkterna. Cirkeln som vidrör sidorna är den inskrivna cirkeln.",
                "Att glömma att cirkeln går genom alla tre hörn: alla tre måste ligga på den, vilket är precis vad [[OA = OB = OC]] garanterar.",
              ],
            },
          ],
        },
        "sec-applications": {
          "h2": "Praktiska tillämpningar av den omskrivna cirkelns radie",
          "blocks": [
            {
              "kind": "p",
              "text": "Den mest direkta användningen är läxor och klassrumsarbete i geometri, där uppgifter om den omskrivna cirkelns radie testar om eleverna kan identifiera hypotenusan och tillämpa [[R = \\frac{c}{2}]] i stället för att ta till en mer komplicerad formel. Övningar i cirkelkonstruktion använder samma idé: givet en rätvinklig triangel, rita dess omskrivna cirkel genom att halvera hypotenusan och ställa in en passare på den radien.",
            },
            {
              "kind": "p",
              "text": "Teknisk ritning använder sambandet när en rätvinklig triangel måste placeras inuti en cirkulär ram eller när en cirkelbåge måste gå genom tre givna punkter. Geometrisk modellering och koordinatgeometri använder samma faktum för att placera en triangels omskrivna cirkels medelpunkt vid hypotenusans mittpunkt.",
            },
            {
              "kind": "p",
              "text": "Lärare använder ämnet som en brygglektion mellan trianglar och cirklar, eftersom det är ett av de första ställen där de två ämnena möts. Thales sats, mittpunktsegenskapen och sambandet mellan radie och diameter dyker alla upp i en enda bild, så den omskrivna cirkelns radie är ett kompakt sätt att repetera dem tillsammans.",
            },
          ],
        },
        "sec-practice": {
          "h2": "Övningsuppgifter med svar",
          "blocks": [
            {
              "kind": "p",
              "text": "Prova alla sex uppgifter på papper innan du läser svaren. Inget av värdena upprepar de genomräknade exemplen, och varje lösning är fullständigt uträknad nedan.",
            },
            {
              "kind": "h3",
              "text": "Uppgift 1: Grundläggande heltal",
            },
            {
              "kind": "p",
              "text": "En rätvinklig triangel har hypotenusan [[c = 26]] cm. Hitta den omskrivna cirkelns radie [[R]].",
            },
            {
              "kind": "h3",
              "text": "Uppgift 2: Hypotenusa med decimal",
            },
            {
              "kind": "p",
              "text": "Givet [[c = 9.4]] m, hitta den omskrivna cirkelns radie [[R]] i meter.",
            },
            {
              "kind": "h3",
              "text": "Uppgift 3: Bråkmått",
            },
            {
              "kind": "p",
              "text": "Givet [[c = \\frac{9}{4}]] ft, hitta [[R]] som ett bråk, sedan som ett decimaltal.",
            },
            {
              "kind": "h3",
              "text": "Uppgift 4: Enhetsomvandling",
            },
            {
              "kind": "p",
              "text": "En rätvinklig triangel har hypotenusan [[c = 240]] cm. Hitta den omskrivna cirkelns radie i meter.",
            },
            {
              "kind": "h3",
              "text": "Uppgift 5: Hitta hypotenusan från två kateter",
            },
            {
              "kind": "p",
              "text": "En rätvinklig triangel har kateterna [[a = 9]] cm och [[b = 12]] cm. Hitta hypotenusan, sedan den omskrivna cirkelns radie.",
            },
            {
              "kind": "h3",
              "text": "Uppgift 6: Omskrivna cirkelns radie eller inskrivna cirkelns radie?",
            },
            {
              "kind": "p",
              "text": "En rätvinklig triangel har kateterna 5 cm och 12 cm och hypotenusan 13 cm. Hitta både den omskrivna cirkelns radie [[R]] och den inskrivna cirkelns radie [[r]], och ange vilken cirkel var och en tillhör.",
            },
            {
              "kind": "h3",
              "text": "Svar på övningsuppgifterna",
            },
            {
              "kind": "p",
              "text": "Svar 1: [[R = \\frac{26}{2} = 13]] cm. Kontroll: [[2 \\times 13 = 26]] cm.",
            },
            {
              "kind": "p",
              "text": "Svar 2: [[R = \\frac{9.4}{2} = 4.7]] m. Kontroll: [[2 \\times 4.7 = 9.4]] m.",
            },
            {
              "kind": "p",
              "text": "Svar 3: [[R = \\frac{9/4}{2} = \\frac{9}{8}]] ft, vilket är 1.125 ft. Att dividera med 2 dubblerar nämnaren från 4 till 8.",
            },
            {
              "kind": "p",
              "text": "Svar 4: [[R = \\frac{240}{2} = 120]] cm, och 120 cm är lika med 1.2 m, eftersom 100 cm är 1 m.",
            },
            {
              "kind": "p",
              "text": "Svar 5: [[c = \\sqrt{9^2 + 12^2} = \\sqrt{81 + 144} = \\sqrt{225} = 15]] cm, sedan [[R = \\frac{15}{2} = 7.5]] cm.",
            },
            {
              "kind": "p",
              "text": "Svar 6: Den omskrivna cirkelns radie tillhör den omskrivna cirkeln, [[R = \\frac{13}{2} = 6.5]] cm, och den inskrivna cirkelns radie tillhör den inskrivna cirkeln, [[r = \\frac{5 + 12 - 13}{2} = \\frac{4}{2} = 2]] cm. Den omskrivna cirkeln går genom hörnen; den inskrivna cirkeln vidrör sidorna.",
            },
          ],
        },
      },
      "relatedHeading": "Utforska relaterade kalkylatorer för rätvinkliga trianglar",
      "relatedIntro": "Varje kalkylator nedan hanterar en specifik uppgift för rätvinkliga trianglar, så välj det verktyg som passar det mått du behöver hitta.",
      "relatedItems": [
        "Kalkylator för rätvinkliga trianglars radie",
        "Kalkylator för den inskrivna cirkelns radie i en rätvinklig triangel",
        "Kalkylator för rätvinkliga trianglars sidor",
        "Kalkylator för rätvinkliga trianglars area",
        "Kalkylator för Pythagoras sats",
      ],
      "faqHeading": "Vanliga frågor",
      "faqs": [
        {
          "question": "Vad är formeln för den omskrivna cirkelns radie i en rätvinklig triangel?",
          "answer": "Formeln är [[R = \\frac{c}{2}]], där [[R]] är den omskrivna cirkelns radie och [[c]] är hypotenusan. Identifiera sidan mittemot den räta vinkeln och dividera sedan dess längd med två. Till exempel ger en hypotenusa på 10 cm en omskriven cirkels radie på 5 cm.",
        },
        {
          "question": "Varför är hypotenusan den omskrivna cirkelns diameter?",
          "answer": "Hypotenusans mittpunkt ligger lika långt från alla tre hörn, så den är den omskrivna cirkelns medelpunkt. Hypotenusan går genom den medelpunkten med båda ändar på cirkeln, vilket är definitionen av en diameter. Att halvera den ger därför radien.",
        },
        {
          "question": "Var ligger den omskrivna cirkelns medelpunkt i en rätvinklig triangel?",
          "answer": "Den omskrivna cirkelns medelpunkt ligger vid hypotenusans mittpunkt, på triangelns längsta sida. Den ligger lika långt från alla tre hörn, med [[AO = BO = CO = R]]. Den är inte den räta vinkelns hörn, som är en punkt på cirkeln.",
        },
        {
          "question": "Vad betyder omskrivna cirkelns radie?",
          "answer": "Omskrivna cirkelns radie betyder radien i den omskrivna cirkeln, den cirkel som går genom triangelns alla tre hörn. Det är avståndet från den omskrivna cirkelns medelpunkt till varje hörn. I en rätvinklig triangel är den lika med halva hypotenusan.",
        },
        {
          "question": "Behöver jag båda kateterna för att beräkna den omskrivna cirkelns radie?",
          "answer": "Nej. Hypotenusan ensam räcker, eftersom [[R = \\frac{c}{2}]]. Kateterna behövs bara när hypotenusan är okänd, och då hittar du den först med [[c = \\sqrt{a^2 + b^2}]] och halverar den sedan. Det är därför den här kalkylatorn bara frågar efter ett värde, och det håller varje beräkning kort och enkel.",
        },
        {
          "question": "Är den omskrivna cirkelns radie halva hypotenusan?",
          "answer": "Ja, alltid, för en rätvinklig triangel. Hypotenusan är den omskrivna cirkelns diameter, och en radie är halva en diameter, så [[R = \\frac{c}{2}]]. Att dubblera den omskrivna cirkelns radie ger alltid tillbaka hypotenusan. Till exempel ger en hypotenusa på 14 cm en omskriven cirkels radie på 7 cm, och att dubblera 7 cm ger tillbaka 14 cm.",
        },
        {
          "question": "Är den omskrivna cirkelns radie samma sak som den inskrivna cirkelns radie?",
          "answer": "Nej. Den omskrivna cirkelns radie är radien i cirkeln genom hörnen, [[R = \\frac{c}{2}]], medan den inskrivna cirkelns radie är radien i cirkeln inuti triangeln som vidrör dess sidor, [[r = \\frac{a + b - c}{2}]]. I en 6-8-10-triangel är de 5 cm och 2 cm.",
        },
        {
          "question": "Kan den omskrivna cirkelns medelpunkt ligga utanför en triangel?",
          "answer": "Ja, för en trubbvinklig triangel ligger den omskrivna cirkelns medelpunkt utanför. För en spetsvinklig triangel ligger den inuti. En rätvinklig triangel är gränsfallet: dess omskrivna cirkels medelpunkt ligger på hypotenusan, exakt vid dess mittpunkt. Så medelpunkten ligger aldrig inuti det triangulära området i en rätvinklig triangel, men den ligger aldrig utanför triangeln heller.",
        },
        {
          "question": "Hur hänger Thales sats ihop med den omskrivna cirkelns radie?",
          "answer": "Thales sats säger att en vinkel som spänns upp av en diameter är en rät vinkel, och dess omvända säger att en rätvinklig triangels hypotenusa är en diameter. Det gör hypotenusans mittpunkt till medelpunkten och halva hypotenusan till radien.",
        },
        {
          "question": "Kan jag hitta den omskrivna cirkelns radie med hjälp av de två kateterna?",
          "answer": "Ja. Hitta först hypotenusan med [[c = \\sqrt{a^2 + b^2}]], halvera den sedan: [[R = \\frac{\\sqrt{a^2 + b^2}}{2}]]. För kateterna 6 cm och 8 cm är hypotenusan 10 cm och den omskrivna cirkelns radie 5 cm. Använd samma två steg för varje par av kateter, och kontrollera resultatet med diametertestet.",
        },
        {
          "question": "Vad händer om hypotenusan dubbleras?",
          "answer": "Den omskrivna cirkelns radie dubbleras också, eftersom [[R]] är halva [[c]]. Om en hypotenusa på 10 cm ger [[R = 5]] cm, ger en hypotenusa på 20 cm [[R = 10]] cm. Sambandet är direkt proportionellt, så att tredubbla hypotenusan tredubblar också den omskrivna cirkelns radie.",
        },
        {
          "question": "Går den omskrivna cirkeln genom alla tre hörn?",
          "answer": "Ja. Det är definitionen av en omskriven cirkel: en cirkel genom varje hörn i triangeln. I en rätvinklig triangel är medelpunkten hypotenusans mittpunkt och varje hörn ligger exakt [[R]] från den.",
        },
      ],
    },
};
