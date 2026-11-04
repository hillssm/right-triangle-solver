/**
 * areaFromAltitudeGuideTranslations.batch3c.ts
 * Translations of the Right Triangle Area From Altitude guide (AreaFromAltitudeGuide.astro), Page 17 of 45.
 * Batch 3c: Swedish (sv), Chinese Simplified (zh).
 *
 * Structure per language (mirrors AREA_FROM_ALTITUDE_TRANSLATION_SCHEMA.md):
 * - tocHeading, tocItems (18 entries keyed by section id)
 * - sections (16 entries: sec-intro, sec-understand, sec-formula, sec-steps, sec-howto,
 *   sec-examples, sec-applications, sec-equal, sec-geomean, sec-max, sec-find-altitude,
 *   sec-units, sec-mistakes, sec-verify, sec-compare, sec-conclusion)
 *   Each section: h2, blocks (ordered {kind: 'p'|'h3', text}), optional steps,
 *   closingParagraphs, table, imgAlt, figcaption
 * - faqs (12 question/answer pairs), faqHeading, relatedHeading, relatedItems (7)
 *
 * Formulas, KaTeX markup ([[...]] and [[[..]]]), variable names, numbers, and degree
 * values are preserved exactly as in the English source (KaTeX backslashes doubled
 * in the double-quoted TS strings). URLs are never translated. No em dashes.
 * Input field labels stay English; Calculate/Reset use the ground-truth forms.
 */

export const AREA_FROM_ALTITUDE_TRANSLATIONS_BATCH3C = {
"sv": {
    "tocHeading": "I den här guiden",
    "tocItems": {
      "sec-intro": "Så här beräknar du en rätvinklig triangels area från höjden",
      "sec-understand": "Förstå hypotenusan och höjden",
      "sec-formula": "Formel för rätvinklig triangels area från höjd",
      "sec-steps": "Steg-för-steg-exempel på areaberäkning från höjd",
      "sec-howto": "Så här använder du area-från-höjd-kalkylatorn",
      "sec-examples": "Genomräknade exempel: hypotenusa och höjd",
      "sec-applications": "Verkliga tillämpningar",
      "sec-equal": "Varför båda areaformlerna ger samma svar",
      "sec-geomean": "Så delar höjden en rätvinklig triangel",
      "sec-max": "Största möjliga höjd",
      "sec-find-altitude": "Hitta höjden när den är okänd",
      "sec-units": "Kvadratiska enheter och omvandlingar",
      "sec-mistakes": "Vanliga misstag",
      "sec-verify": "Så här verifierar du ditt svar",
      "sec-compare": "Area från höjd jämfört med area från två kateter",
      "sec-related": "Utforska relaterade kalkylatorer för rätvinkliga trianglar",
      "sec-faq": "Vanliga frågor",
      "sec-conclusion": "Slutsats"
    },
    "sections": {
      "sec-intro": {
        "h2": "Så här beräknar du en rätvinklig triangels area från höjden",
        "blocks": [
          {
            "kind": "p",
            "text": "Anta att en rätvinklig triangel har en hypotenusa på 10 m, och att det vinkelräta avståndet från det rätvinkliga hörnet till den hypotenusan är 4,8 m. Då följer arean direkt: [[K=(10\\times4.8)/2]], [[[\\boxed{K=24\\text{ m}^2}]]] Triangeln omsluter 24 kvadratmeter plan yta."
          },
          {
            "kind": "p",
            "text": "Den här kalkylatorn finns till exakt för den situationen. När du känner den längsta sidan i en rätvinklig triangel, hypotenusan [[c]], och den vinkelräta höjden från det rätvinkliga hörnet till den sidan, [[h]], behövs inte de två kateterna. Hypotenusan fungerar som bas, höjden är dess tillhörande vinkelräta höjd, och varje triangels area är halva produkten av en bas och dess motsvarande höjd: [[K=ch/2]]."
          },
          {
            "kind": "p",
            "text": "Höjden måste möta hypotenusan i rät vinkel; ett snett segment som inte är vinkelrätt ger en felaktig höjd och en felaktig area. Mata in båda mätvärdena i matchande längdenheter, så returnerar kalkylatorn arean i motsvarande kvadratiska enheter, med varje substitutionssteg visat."
          }
        ]
      },
      "sec-understand": {
        "h2": "Förstå hypotenusan och höjden i en rätvinklig triangel",
        "blocks": [
          {
            "kind": "p",
            "text": "Den här guiden använder en konsekvent beteckning genomgående: [[A]] och [[B]] är de två spetsiga vinklarna, [[C=90^\\circ]] är den räta vinkeln, sidan [[a]] ligger mittemot vinkeln [[A]], sidan [[b]] ligger mittemot vinkeln [[B]], sidan [[c]] är hypotenusan mittemot vinkeln [[C]], [[h]] är den vinkelräta höjden från hörnet [[C]] till hypotenusan, där den möter den i punkten [[D]], [[p]] och [[q]] är hypotenusasegmenten [[AD]] och [[DB]], och [[K]] är arean."
          },
          {
            "kind": "h3",
            "text": "Vad är en rätvinklig triangel?"
          },
          {
            "kind": "p",
            "text": "En rätvinklig triangel innehåller exakt en 90-graders vinkel. Dess två kateter möts vid den räta vinkeln, och hypotenusan ligger mittemot den. Hypotenusan är alltid den längsta sidan. De andra två vinklarna är spetsiga, och eftersom de tre vinklarna tillsammans blir 180 grader gäller [[A+B=90^\\circ]]. Dessa fakta spelar roll eftersom höjdmetoden bygger på dem: basen måste vara hypotenusan, och höjden måste gå från det rätvinkliga hörnet."
          },
          {
            "kind": "h3",
            "text": "Vad är hypotenusan?"
          },
          {
            "kind": "p",
            "text": "Hypotenusan är sidan mittemot den räta vinkeln, betecknad [[c]] i kalkylatorn. För att identifiera den i vilken orientering som helst, hitta den sida som inte rör den kvadratiska hörnmarkeringen: den sidan är hypotenusan. I höjdformeln spelar den rollen som bas, så att känna igen den korrekt är den första färdighet den här sidan lär ut."
          },
          {
            "kind": "h3",
            "text": "Vad är höjden?"
          },
          {
            "kind": "p",
            "text": "En höjd är ett vinkelrätt segment från en triangels hörn till den linje som innehåller den motsatta sidan. Här går höjden [[h]] från det rätvinkliga hörnet [[C]] till hypotenusan [[AB]] och möter den i punkten [[D]], så [[CD\\perp AB]]. Det är ett vinkelrätt avstånd, inte bara någon linje ritad innanför triangeln: endast det segment som möter hypotenusan i 90 grader duger."
          },
          {
            "kind": "h3",
            "text": "Är höjden samma sak som en katet?"
          },
          {
            "kind": "p",
            "text": "Nej. Kateterna [[a]] och [[b]] möts vid den ursprungliga räta vinkeln, medan höjden är ett separat segment från samma hörn till den motsatta sidan. Ta en 6-8-10-triangel: [[a=6]], [[b=8]], [[c=10]]. Dess höjd är [[h=(6\\times8)/10=4.8]]. Ingen av kateterna mäter 4,8, men höjden mot hypotenusan är exakt 4,8. Att förväxla en katet med höjden är ett av de vanligaste felen på den här sidan."
          },
          {
            "kind": "h3",
            "text": "Varför höjden faller innanför triangeln"
          },
          {
            "kind": "p",
            "text": "För en icke-degenererad rätvinklig triangel landar vinkelrätheten från det rätvinkliga hörnet på hypotenusan mellan dess ändpunkter, aldrig utanför den. Den delar den ursprungliga triangeln i två mindre rätvinkliga trianglar. Dessa två trianglar delar de spetsiga vinklarnas mått med den ursprungliga, vilket gör alla tre trianglarna likformiga med varandra. Den likformigheten är anledningen till att höjden uppfyller så prydliga samband, som utforskas i avsnittet om geometriska medelvärden nedan."
          }
        ],
        "imgAlt": "Rätvinklig triangel ABC med kateterna a och b, hypotenusan c som bas, höjden h från hörnet C till D, formeln K = ch/2",
        "figcaption": "Höjdmetodens anatomi: hypotenusan c är basen, höjden h möter den i 90 grader i punkten D, och arean är K = ch/2."
      },
      "sec-formula": {
        "h2": "Formel för rätvinklig triangels area från höjd",
        "blocks": [
          {
            "kind": "p",
            "text": "Höjdens areaformel är [[[\\boxed{K=\\frac{ch}{2}}]]] Här är [[K]] arean, [[c]] är hypotenusan som fungerar som bas, och [[h]] är den vinkelräta höjden mot hypotenusan. Tre symboler, en multiplikation, en halvering."
          },
          {
            "kind": "h3",
            "text": "Varför multiplicerar vi hypotenusan med höjden?"
          },
          {
            "kind": "p",
            "text": "Den allmänna areaformeln för trianglar är [[K=\\frac{\\text{base}\\times\\text{height}}{2}]], och basen och höjden måste vara vinkelräta mot varandra. Att välja hypotenusan som bas tvingar höjden att vara det vinkelräta avståndet till den, vilket är exakt höjden: [[\\text{base}=c]] och [[\\text{height}=h]], därför [[K=ch/2]]. Detta gäller oavsett hur triangeln är roterad eller ritad: vinkelräthet är en geometrisk relation, inte en skärmriktning, så en lutande hypotenusa fungerar som bas lika bra som en horisontell."
          },
          {
            "kind": "h3",
            "text": "Varför delas resultatet med två?"
          },
          {
            "kind": "p",
            "text": "En triangel upptar hälften av det parallellogram som byggs på samma bas med samma vinkelräta höjd. Med [[c=10]] och [[h=4.8]] är produkten [[c\\times h=48]] arean av det parallellogrammet. Triangeln är hälften av det, så [[K=48/2=24]]. Att rapportera 48 skulle besvara en annan fråga: arean av hela parallellogrammet, inte triangeln inuti det."
          },
          {
            "kind": "h3",
            "text": "Fungerar den här formeln för varje triangel?"
          },
          {
            "kind": "p",
            "text": "Bas-höjd-regeln fungerar för varje triangel, förutsatt att höjden är vinkelrät mot den valda basen. Det speciella här är valet av bas: hypotenusan i en rätvinklig triangel, med höjden fälld från det rätvinkliga hörnet. Det valet medför extra geometriska begränsningar, till exempel att höjden aldrig överstiger halva hypotenusan, som inte gäller för allmänna trianglar."
          },
          {
            "kind": "h3",
            "text": "Varför formeln inte behöver de två kateterna"
          },
          {
            "kind": "p",
            "text": "Area behöver en sida och dess motsvarande vinkelräta höjd, inget mer. När [[c]] och [[h]] redan är kända tillför kateterna ingen ny information om arean. Katetformeln [[K=ab/2]] är helt enkelt en annan ingångsväg till samma storhet, användbar när de uppmätta värdena är de två vinkelräta sidorna i stället."
          }
        ],
        "imgAlt": "Varför triangels area är halva basen gånger höjden: c = 10, h = 4,8, 10 x 4,8 = 48, delat med 2 ger 24",
        "figcaption": "Produkten c gånger h är hela rektangeln; triangeln fyller exakt hälften av den, vilket är anledningen till att formeln delar med två."
      },
      "sec-steps": {
        "h2": "Steg-för-steg-exempel på areaberäkning från höjd",
        "blocks": [
          {
            "kind": "p",
            "text": "En komplett beräkning, från mätvärden till verifierat svar, med [[c=10\\text{ m}]] och [[h=4.8\\text{ m}]]."
          }
        ],
        "steps": [
          "<strong>Identifiera de givna mätvärdena.</strong> Hypotenusan är [[c=10\\text{ m}]] och den vinkelräta höjden mot den är [[h=4.8\\text{ m}]]. Bekräfta att höjden möter hypotenusan i rät vinkel.",
          "<strong>Skriv formeln.</strong> [[K=ch/2]].",
          "<strong>Sätt in mätvärdena.</strong> [[K=(10\\times4.8)/2]].",
          "<strong>Multiplicera.</strong> [[10\\times4.8=48]], så [[K=48/2]].",
          "<strong>Dela med två.</strong> [[[\\boxed{K=24\\text{ m}^2}]]]",
          "<strong>Tolka svaret.</strong> Triangeln omsluter 24 kvadratmeter plan area.",
          "<strong>Kontrollera genomförbarheten.</strong> En giltig rätvinklig triangel kräver [[h\\leq c/2]]; här gäller [[4.8\\leq5]], så mätvärdena kan beskriva en verklig rätvinklig triangel.",
          "<strong>Verifiera med kateterna.</strong> En 6-8-10-triangel har samma hypotenusa och höjd, och [[K=(6\\times8)/2=24]]. Båda vägarna stämmer överens."
        ]
      },
      "sec-howto": {
        "h2": "Så här använder du kalkylatorn för rätvinklig triangels area från höjd",
        "blocks": [
          {
            "kind": "p",
            "text": "Kalkylatorn på den här sidan behöver exakt två inmatningar. Genomgången nedan följer ordningen på skärmen, så att en förstagångsanvändare kan gå från en ritad eller uppmätt triangel till en verifierad area."
          }
        ],
        "steps": [
          "<strong>Identifiera den rätvinkliga triangeln.</strong> Bekräfta att en vinkel är 90 grader; metoden gäller bara rätvinkliga trianglar.",
          "<strong>Lokalisera dess hypotenusa [[c]].</strong> Det är sidan mittemot den räta vinkeln och den längsta sidan.",
          "<strong>Identifiera den vinkelräta höjden [[h]].</strong> Den går från det rätvinkliga hörnet till hypotenusan och möter den i 90 grader.",
          "<strong>Mät eller skaffa båda värdena.</strong> Mät direkt, eller beräkna höjden först med [[h=ab/c]] när kateterna är kända.",
          "<strong>Mata in hypotenusan i fältet Hypotenuse c.</strong>",
          "<strong>Mata in höjden i fältet Altitude h.</strong>",
          "<strong>Välj kompatibla längdenheter.</strong> Båda inmatningarna måste använda samma enhet innan formeln tillämpas.",
          "<strong>Bekräfta att båda värdena är positiva.</strong> Noll eller negativa längder beskriver ingen triangel.",
          "<strong>Kontrollera att [[h]] inte är större än halva hypotenusan.</strong> För [[c=10]] kan ingen höjd över 5 tillhöra en rätvinklig triangel med den hypotenusan.",
          "<strong>Klicka på Beräkna Area.</strong>",
          "<strong>Granska arearesultatet.</strong> Det visas i kvadratiska enheter som matchar inmatningsenheten.",
          "<strong>Läs de visade lösningsstegen.</strong> De visar formeln, substitutionen och aritmetiken.",
          "<strong>Inspektera den levande visualiseringen.</strong> Bekräfta att diagrammets hypotenusa och höjd matchar de avsedda mätvärdena.",
          "<strong>Använd Återställ för en ny beräkning.</strong> Det rensar båda fälten så att nästa beräkning startar rent."
        ],
        "closingParagraphs": [
          "Kalkylatorn frågar inte efter de två kateterna eller en vinkel, eftersom höjdmetoden verkligen inte behöver dem."
        ]
      },
      "sec-examples": {
        "h2": "Genomräknade exempel på rätvinklig triangels area från hypotenusa och höjd",
        "blocks": [
          {
            "kind": "p",
            "text": "Fyra genomräknade exempel bygger metoden från bekanta trianglar och uppåt. Varje exempel beräknar höjden från kateterna där det behövs, tillämpar [[K=ch/2]] och korskontrollerar mot katetformeln."
          },
          {
            "kind": "h3",
            "text": "Exempel 1: En 3-4-5 rätvinklig triangel"
          },
          {
            "kind": "p",
            "text": "Givet [[a=3]], [[b=4]], [[c=5]]. Höjden är [[h=ab/c]], så [[h=(3\\times4)/5=2.4]]. Arean är [[K=(5\\times2.4)/2]], [[[\\boxed{K=6\\text{ square units}}]]] Kontrollerar vi med kateterna får vi [[K=(3\\times4)/2=6]]. Båda formlerna beskriver samma triangel, så de måste stämma överens, och det gör de."
          },
          {
            "kind": "h3",
            "text": "Exempel 2: En 5-12-13 rätvinklig triangel"
          },
          {
            "kind": "p",
            "text": "Givet [[a=5]], [[b=12]], [[c=13]]. Höjden är [[h=(5\\times12)/13=60/13\\approx4.61538]]. Om vi behåller det exakta bråket får vi [[K=(13\\times(60/13))/2]], [[[\\boxed{K=30\\text{ square units}}]]] Att behålla [[60/13]] i stället för ett avrundat decimaltal undviker ett tidigt avrundningsfel: 13 förkortas bort exakt och lämnar ett rent 30."
          },
          {
            "kind": "h3",
            "text": "Exempel 3: En 6-8-10 rätvinklig triangel"
          },
          {
            "kind": "p",
            "text": "Givet [[c=10]] och [[h=4.8]] direkt. Då är [[K=(10\\times4.8)/2]], [[[\\boxed{K=24\\text{ square units}}]]] Med kateterna 6 och 8 får vi [[K=(6\\times8)/2=24]], vilket bekräftar höjdvägen."
          },
          {
            "kind": "h3",
            "text": "Exempel 4: En likbent rätvinklig triangel"
          },
          {
            "kind": "p",
            "text": "Givet [[c=10]] och [[h=5]]. Då är [[K=(10\\times5)/2]], [[[\\boxed{K=25\\text{ square units}}]]] Detta är den största area någon rätvinklig triangel med hypotenusan 10 kan ha. Höjden är lika med halva hypotenusan endast när kateterna är lika, vilket gör varje spetsig vinkel till [[45^\\circ]], och ingen giltig rätvinklig triangel med denna hypotenusa kan överstiga 25 kvadratenheter."
          }
        ]
      },
      "sec-applications": {
        "h2": "Verkliga tillämpningar av rätvinklig triangels area från höjd",
        "blocks": [
          {
            "kind": "p",
            "text": "Tolv genomräknade situationer visar formeln i olika skalor och i olika enheter. Var och en namnger triangeln i scenen, de två mätvärdena, substitutionen, arean och antagandet bakom modellen."
          },
          {
            "kind": "h3",
            "text": "Exempel 1: Triangulär trädgårdsdel"
          },
          {
            "kind": "p",
            "text": "En rätvinklig trädgårdsdel har en längsta gräns på 10 m, och det vinkelräta avståndet från det rätvinkliga hörnet till den gränsen är 4,8 m. Så [[c=10\\text{ m}]] och [[h=4.8\\text{ m}]]: [[K=(10\\times4.8)/2]], [[[\\boxed{K=24\\text{ m}^2}]]] Delen upptar 24 kvadratmeter. Detta förutsätter att gränsen är rak och att hörnet är en sann rät vinkel."
          },
          {
            "kind": "h3",
            "text": "Exempel 2: Triangulär plywoodskiva"
          },
          {
            "kind": "p",
            "text": "En rätvinklig plywoodskiva har en hypotenusa på 1 m och en vinkelrät höjd på 0,48 m: [[K=(1\\times0.48)/2]], [[[\\boxed{K=0.24\\text{ m}^2}]]] Det är den plana ytan av ena sidan, användbar för täckningsuppskattningar. Spill vid kapning och materialtillägg är separata överväganden."
          },
          {
            "kind": "h3",
            "text": "Exempel 3: Rätvinkligt glasfönster"
          },
          {
            "kind": "p",
            "text": "En rätvinklig glaspanel har en hypotenusa på 1,3 m och en höjd på 0,6 m vinkelrät mot den sidan: [[K=(1.3\\times0.6)/2]], [[[\\boxed{K=0.39\\text{ m}^2}]]] Detta är den geometriska glasarean innan karmtäckning eller monteringstillägg beaktas."
          },
          {
            "kind": "h3",
            "text": "Exempel 4: Mätning av en triangulär sektion"
          },
          {
            "kind": "p",
            "text": "En mätningsritning innehåller en rätvinklig triangel med hypotenusan 13 m och höjden [[60/13]] m. Om vi behåller bråket: [[K=(13\\times(60/13))/2]], [[[\\boxed{K=30\\text{ m}^2}]]] Ritningen representerar en 30 kvadratmeter stor sektion. Verkligt fältarbete kan ändå behöva instrumentkorrigeringar utöver planen."
          },
          {
            "kind": "h3",
            "text": "Exempel 5: Mätning av en triangulär platta"
          },
          {
            "kind": "p",
            "text": "En rätvinklig platta har en hypotenusa på 25 cm och en vinkelrät höjd på 6,72 cm: [[K=(25\\times6.72)/2]], [[[\\boxed{K=84\\text{ cm}^2}]]] En platta täcker 84 kvadratcentimeter, vilket hjälper till att uppskatta hur många plattor en yta behöver. Fogbredder och kapförluster räknas separat."
          },
          {
            "kind": "h3",
            "text": "Exempel 6: Stålstödspanel"
          },
          {
            "kind": "p",
            "text": "En plan rätvinklig stödpanel har en hypotenusa på 1,7 m med kateter på 0,8 m och 1,5 m. Dess höjd är [[h=(0.8\\times1.5)/1.7=12/17]] m. Då är [[K=(1.7\\times(12/17))/2]], [[[\\boxed{K=0.6\\text{ m}^2}]]] Det är panelens geometriska area, inte dess bärförmåga."
          },
          {
            "kind": "h3",
            "text": "Exempel 7: Triangulär rampsidopanel"
          },
          {
            "kind": "p",
            "text": "En förenklad rampsidopanel bildar en rätvinklig triangel med en hypotenusa på 5 m och en vinkelrät höjd på 2,4 m mot den hypotenusan: [[K=(5\\times2.4)/2]], [[[\\boxed{K=6\\text{ m}^2}]]] Detta är den plana arean av den triangulära sidsektionen, inte den lutande rampytan, och beräkningen fastställer inte tillgänglighetsöverensstämmelse."
          },
          {
            "kind": "h3",
            "text": "Exempel 8: Taks gavel sektion"
          },
          {
            "kind": "p",
            "text": "En rätvinklig takgavelsektion har en hypotenusa på 6,5 m och en vinkelrät höjd på [[30/13]] m: [[K=(6.5\\times(30/13))/2]], [[[\\boxed{K=7.5\\text{ m}^2}]]] Resultatet beskriver det triangulära plan som mätvärdena ger. Ett verkligt taks totala yta är ett separat tredimensionellt mätningsproblem."
          },
          {
            "kind": "h3",
            "text": "Exempel 9: Rätvinklig marktome"
          },
          {
            "kind": "p",
            "text": "En rätvinklig marksektion har en hypotenusa på 50 m och en vinkelrät höjd på 24 m: [[K=(50\\times24)/2]], [[[\\boxed{K=600\\text{ m}^2}]]] De uppmätta gränserna omsluter 600 kvadratmeter. En officiell areasiffra kan ändå kräva mätverifiering."
          },
          {
            "kind": "h3",
            "text": "Exempel 10: Stor triangulär mätningstomt"
          },
          {
            "kind": "p",
            "text": "En uppmätt rätvinklig sektion har en hypotenusa på 100 m och en vinkelrät höjd på 48 m: [[K=(100\\times48)/2]], [[[\\boxed{K=2400\\text{ m}^2}]]] Det är den plana arean av den triangulära sektionen. Den representerar hela fastigheten endast när fastigheten enbart består av den triangeln."
          },
          {
            "kind": "h3",
            "text": "Exempel 11: Triangulär segelsektion"
          },
          {
            "kind": "p",
            "text": "En plan rätvinklig segeldesign har en hypotenusa på 15 ft och en vinkelrät höjd på 7,2 ft: [[K=(15\\times7.2)/2]], [[[\\boxed{K=54\\text{ ft}^2}]]] Detta är den plana arean av det idealiserade seglet. Böjt tyg, sömmar och kanttillägg kräver separat övervägande."
          },
          {
            "kind": "h3",
            "text": "Exempel 12: Litet mekaniskt fäste"
          },
          {
            "kind": "p",
            "text": "Ett plant rätvinkligt fäste har en hypotenusa på 250 mm och en vinkelrät höjd på 120 mm: [[K=(250\\times120)/2]], [[[\\boxed{K=15000\\text{ mm}^2}]]] Svaret är i kvadratmillimeter eftersom inmatningarna är i millimeter. Eftersom [[1\\text{ cm}^2=100\\text{ mm}^2]] är detta lika med [[[\\boxed{150\\text{ cm}^2}]]] Att omvandla den linjära enheten och att omvandla den kvadratiska enheten är olika operationer, som enhetsavsnittet förklarar."
          },
          {
            "kind": "h3",
            "text": "Jämförelse av praktiska exempel"
          }
        ],
        "table": {
          "headers": ["Situation", "Hypotenusa c", "Höjd h", "Formel", "Beräknad area", "Praktisk tolkning"],
          "rows": [
            ["Trädgårdsdel", "10 m", "4,8 m", "[[K=ch/2]]", "24 m²", "Planteringsyta"],
            ["Plywoodskiva", "1 m", "0,48 m", "[[K=ch/2]]", "0,24 m²", "Materialtäckning, inget spill"],
            ["Glasfönster", "1,3 m", "0,6 m", "[[K=ch/2]]", "0,39 m²", "Glasarea före karm"],
            ["Mätningsritning", "13 m", "60/13 m", "[[K=ch/2]]", "30 m²", "Planarea av sektionen"],
            ["Platta", "25 cm", "6,72 cm", "[[K=ch/2]]", "84 cm²", "En plattas yta"],
            ["Stålpanel", "1,7 m", "12/17 m", "[[K=ch/2]]", "0,6 m²", "Geometri, inte bärförmåga"],
            ["Rampsidopanel", "5 m", "2,4 m", "[[K=ch/2]]", "6 m²", "Sidsektion, inte rampyta"],
            ["Takgavel", "6,5 m", "30/13 m", "[[K=ch/2]]", "7,5 m²", "Triangulärt tvärsnitt"],
            ["Marktomt", "50 m", "24 m", "[[K=ch/2]]", "600 m²", "Omsluten area, verifiera genom mätning"],
            ["Mätningstomt", "100 m", "48 m", "[[K=ch/2]]", "2400 m²", "Sektion, inte hela fastigheten"],
            ["Segelsektion", "15 ft", "7,2 ft", "[[K=ch/2]]", "54 ft²", "Idealiserat plant segel"],
            ["Fäste", "250 mm", "120 mm", "[[K=ch/2]]", "15000 mm²", "Motsvarar 150 cm²"]
          ]
        },
        "imgAlt": "Fyra exempel: trädgård, glaspanel, marktome och fäste, vart och ett med hypotenusan c, höjden h och beräknad area",
        "figcaption": "Samma formel i fyra skalor: trädgård, glaspanel, marktome och maskinfäste."
      },
      "sec-equal": {
        "h2": "Varför båda areaformlerna för rätvinkliga trianglar ger samma svar",
        "blocks": [
          {
            "kind": "p",
            "text": "En rätvinklig triangel kan mätas genom sina två vinkelräta kateter eller genom sin hypotenusa och höjd. Katetformeln är [[K=ab/2]] och höjdformeln är [[K=ch/2]]. Eftersom båda beskriver samma triangels area gäller [[\\frac{ab}{2}=\\frac{ch}{2}]]. Multiplicera båda leden med två: [[ab=ch]]. Lös ut [[h]]: [[[\\boxed{h=\\frac{ab}{c}}]]] Höjden är produkten av kateterna delad med hypotenusan, vilket är anledningen till att de två formlerna aldrig kan vara oense om en konsistent triangel."
          },
          {
            "kind": "p",
            "text": "Numerisk verifiering: för [[a=6]], [[b=8]], [[c=10]] är höjden [[h=(6\\times8)/10=4.8]]. Med kateter: [[K=(6\\times8)/2=24]]. Med höjd: [[K=(10\\times4.8)/2=24]]. Samma triangel, samma area, två vägar."
          },
          {
            "kind": "p",
            "text": "När endast hypotenusan och höjden är kända är arean redan fastställd: det finns inget behov av att först rekonstruera kateterna. Katetlängderna kan ändå återvinnas från giltiga [[c]] och [[h]] genom segmentrelationerna nedan, men det är en separat beräkning från att hitta arean. När kateterna i stället är de kända värdena tar <a href=\"/right-triangle-area-from-legs-calculator/\">kalkylatorn för rätvinklig triangels area från kateter</a> dem direkt."
          }
        ]
      },
      "sec-geomean": {
        "h2": "Så delar höjden en rätvinklig triangel",
        "blocks": [
          {
            "kind": "p",
            "text": "Höjden möter hypotenusan i [[D]] och delar den i segmenten [[AD=p]] och [[DB=q]], så [[p+q=c]]. Den uppdelningen skapar två mindre rätvinkliga trianglar inbäddade i den ursprungliga, och deras proportioner är anmärkningsvärt prydliga."
          },
          {
            "kind": "h3",
            "text": "Två mindre likformiga rätvinkliga trianglar"
          },
          {
            "kind": "p",
            "text": "Höjden delar den ursprungliga triangeln i två mindre rätvinkliga trianglar, som var och en delar en spetsig vinkel med den ursprungliga och var och en innehåller en rät vinkel. Att dela två vinkelmått gör alla tre trianglarna likformiga. Likformighet är det som tvingar fram de rena proportionalitetssambanden mellan höjden, segmenten och kateterna."
          },
          {
            "kind": "h3",
            "text": "Höjdens geometriska medelvärdessats"
          },
          {
            "kind": "p",
            "text": "Likformighet ger [[[\\boxed{h^2=pq}]]], eller ekvivalent [[[\\boxed{h=\\sqrt{pq}}]]] Höjden är det geometriska medelvärdet av de två hypotenusasegmenten: dess kvadrat är lika med deras produkt. Genomräknat exempel: med [[p=6.4]] och [[q=3.6]] är [[c=p+q=10]], och [[h=\\sqrt{6.4\\times3.6}=\\sqrt{23.04}]], [[[\\boxed{h=4.8}]]] Arean följer: [[K=(10\\times4.8)/2]], [[[\\boxed{K=24\\text{ square units}}]]] Segmentsatsen verifierar en höjd som mätts eller beräknats på annat sätt."
          },
          {
            "kind": "h3",
            "text": "Sambandet mellan segmenten och kateterna"
          },
          {
            "kind": "p",
            "text": "Samma likformighet ger [[b^2=cp]] och [[a^2=cq]]. Med [[c=10]], [[p=6.4]], [[q=3.6]]: [[b=\\sqrt{10\\times6.4}=\\sqrt{64}=8]] och [[a=\\sqrt{10\\times3.6}=\\sqrt{36}=6]]. Den ursprungliga 6-8-10-triangeln återvinns exakt, vilket visar hur tätt segmenten, höjden och kateterna är bundna till varandra."
          }
        ]
      },
      "sec-max": {
        "h2": "Hur stor kan höjden i en rätvinklig triangel bli?",
        "blocks": [
          {
            "kind": "p",
            "text": "Inte varje par av positiva tal kan vara en hypotenusa och en höjd. För en giltig, icke-degenererad rätvinklig triangel gäller [[[\\boxed{0<h\\leq\\frac{c}{2}}]]] Höjden måste vara positiv och kan aldrig överstiga halva hypotenusan."
          },
          {
            "kind": "h3",
            "text": "Varför höjden inte kan överstiga halva hypotenusan"
          },
          {
            "kind": "p",
            "text": "Från [[h^2=pq]] med [[p+q=c]] är produkten [[pq]] störst när de två segmenten är lika, [[p=q=c/2]]. Därför gäller [[h^2\\leq c^2/4]], och för positiva längder [[h\\leq c/2]]. Med enkla ord: höjden är högst när den delar hypotenusan i två lika halvor, och även då når den bara halva hypotenusan."
          },
          {
            "kind": "h3",
            "text": "Största area för en fast hypotenusa"
          },
          {
            "kind": "p",
            "text": "Eftersom [[K=ch/2]] och [[h\\leq c/2]] är den största möjliga arean [[[\\boxed{K_{\\max}=\\frac{c^2}{4}}]]] Detta maximum tillhör den likbenta rätvinkliga triangeln, där de två kateterna är lika. Med [[c=10]] är den högsta giltiga höjden [[h_{\\max}=5]], vilket ger [[K_{\\max}=(10\\times5)/2=25]]. En höjd på 6 med en hypotenusa på 10 är omöjlig för en rätvinklig triangel."
          },
          {
            "kind": "h3",
            "text": "Vad händer om höjden är för stor?"
          },
          {
            "kind": "p",
            "text": "Ta [[c=10]] och [[h=6]]: [[6>5]], så ingen rätvinklig triangel har dessa mätvärden. Aritmetiken [[(10\\times6)/2=30]] är en giltig area för någon triangel i en mer allmän miljö, men den gör inte [[c=10]], [[h=6]] till giltiga rätvinkliga inmatningar. Den här sidan påstår inte att kalkylatorn automatiskt avvisar sådan inmatning; kontrollen är din att köra."
          },
          {
            "kind": "h3",
            "text": "Kan höjden vara lika med halva hypotenusan?"
          },
          {
            "kind": "p",
            "text": "Ja. Likhet ger den likbenta rätvinkliga triangeln med två lika kateter, en giltig icke-degenererad triangel. Det är gränsfallet, inte ett trasigt fall."
          }
        ],
        "imgAlt": "6-8-10-triangel med höjd som delar hypotenusan i p = 6,4 och q = 3,6, plus likbent triangel vid maxhöjden c/2",
        "figcaption": "Vänster: höjden är det geometriska medelvärdet av hypotenusasegmenten. Höger: den högsta möjliga höjden är halva hypotenusan, vilket ger maximal area."
      },
      "sec-find-altitude": {
        "h2": "Så här beräknar du höjden när den är okänd",
        "blocks": [
          {
            "kind": "p",
            "text": "Den här kalkylatorn tar [[h]] som inmatning, så en okänd höjd måste först hittas eller mätas. Tre standardvägar täcker de vanliga fallen. När sidorna är kända och höjden är den saknade pusselbiten beräknar <a href=\"/right-triangle-altitude-from-sides-calculator/\">kalkylatorn för rätvinklig triangels höjd från sidor</a> den direkt."
          },
          {
            "kind": "h3",
            "text": "Metod 1: Med båda kateterna och hypotenusan"
          },
          {
            "kind": "p",
            "text": "[[[\\boxed{h=\\frac{ab}{c}}]]] Med [[a=6]], [[b=8]], [[c=10]]: [[h=(6\\times8)/10=4.8]]."
          },
          {
            "kind": "h3",
            "text": "Metod 2: Med hypotenusasegmenten"
          },
          {
            "kind": "p",
            "text": "[[[\\boxed{h=\\sqrt{pq}}]]] Med [[p=6.4]] och [[q=3.6]]: [[h=\\sqrt{23.04}=4.8]]."
          },
          {
            "kind": "h3",
            "text": "Metod 3: Med känd area och hypotenusa"
          },
          {
            "kind": "p",
            "text": "Att lösa ut ur [[K=ch/2]] ger [[[\\boxed{h=\\frac{2K}{c}}]]] Med [[K=24]] och [[c=10]]: [[h=(2\\times24)/10=4.8]]."
          }
        ],
        "closingParagraphs": [
          "Detta är matematiska omskrivningar, inte extra kalkylatorlägen: area-från-höjd-kalkylatorn själv förväntar sig fortfarande höjden som inmatning."
        ]
      },
      "sec-units": {
        "h2": "Förstå kvadratiska enheter i areaberäkningar för rätvinkliga trianglar",
        "blocks": [
          {
            "kind": "p",
            "text": "Area är tvådimensionell. Att multiplicera två längder multiplicerar också deras enheter: [[\\text{m}\\times\\text{m}=\\text{m}^2]]. Areaenheten är alltid kvadraten på längdenheten."
          },
          {
            "kind": "h3",
            "text": "Kvadratmeter"
          },
          {
            "kind": "p",
            "text": "Med [[c=10\\text{ m}]] och [[h=4.8\\text{ m}]] är [[K=24\\text{ m}^2]]. Läs det som 24 kvadratmeter yta."
          },
          {
            "kind": "h3",
            "text": "Kvadratcentimeter"
          },
          {
            "kind": "p",
            "text": "Med [[c=25\\text{ cm}]] och [[h=6.72\\text{ cm}]] är [[K=84\\text{ cm}^2]]."
          },
          {
            "kind": "h3",
            "text": "Kvadratmillimeter"
          },
          {
            "kind": "p",
            "text": "Med [[c=250\\text{ mm}]] och [[h=120\\text{ mm}]] är [[K=15000\\text{ mm}^2]]."
          },
          {
            "kind": "h3",
            "text": "Omvandling av areaenheter"
          },
          {
            "kind": "p",
            "text": "[[1\\text{ m}^2=10000\\text{ cm}^2]] och [[1\\text{ cm}^2=100\\text{ mm}^2]]. En linjär omvandling multiplicerar med 10, 100 eller 1000, men en areaomvandling kvadrerar den faktorn: 100 cm på en meter blir [[100^2=10000]] kvadratcentimeter på en kvadratmeter. Att omvandla längden och att omvandla arean är olika operationer."
          },
          {
            "kind": "h3",
            "text": "Vad händer om inmatningarna använder olika enheter?"
          },
          {
            "kind": "p",
            "text": "Omvandla först, beräkna sedan. En hypotenusa i meter och en höjd i centimeter måste föras till en enhet, till exempel blir 2 m och 150 cm till 2 m och 1,5 m, innan formeln tillämpas. Blandade enheter i formeln ger ett meningslöst tal utan ren enhet."
          }
        ]
      },
      "sec-mistakes": {
        "h2": "Vanliga misstag vid användning av höjdareaformeln",
        "blocks": [
          {
            "kind": "p",
            "text": "De flesta felaktiga svar på den här sidan kommer från felmärkta inmatningar, inte dålig aritmetik. De arton misstagen nedan täcker nästan vartenda ett."
          },
          {
            "kind": "h3",
            "text": "1. Att använda en katet i stället för höjden"
          },
          {
            "kind": "p",
            "text": "Höjden [[h]] går från det rätvinkliga hörnet till hypotenusan; en katet löper längs triangelns kant. I en 6-8-10-triangel ger katet 6 som höjd [[(10\\times6)/2=30]] i stället för 24. Åtgärd: höjden måste landa på hypotenusan med en rätvinkelsmarkering."
          },
          {
            "kind": "h3",
            "text": "2. Att förväxla höjden med hypotenusan"
          },
          {
            "kind": "p",
            "text": "Att byta plats på [[c]] och [[h]] ändrar produktens betydelse. Med [[c=10]] och [[h=4.8]] kommuterar talen i multiplikation, men genomförbarhetskontrollen [[h\\leq c/2]] bryts: den ombytta inmatningen påstår en höjd på 10 på en hypotenusa på 4,8, vilket är omöjligt. Åtgärd: hypotenusan är alltid den längsta sidan."
          },
          {
            "kind": "h3",
            "text": "3. Att rita höjden från fel hörn"
          },
          {
            "kind": "p",
            "text": "Endast höjden från det rätvinkliga hörnet [[C]] paras ihop med hypotenusan som dess bas. En vinkelräthet från ett spetsigt hörn landar på en katet, inte hypotenusan, och hör inte hemma i den här formeln. Åtgärd: börja vid det kvadratiska hörnet."
          },
          {
            "kind": "h3",
            "text": "4. Att mäta höjden i en icke-vinkelrät vinkel"
          },
          {
            "kind": "p",
            "text": "Varje icke-vinkelrätt segment från [[C]] till hypotenusan är längre än den sanna höjden, så arean blir för stor. Åtgärd: verifiera 90-gradersmötet, genom konstruktion eller med [[h=ab/c]]."
          },
          {
            "kind": "h3",
            "text": "5. Att använda en höjd som hör till en annan bas"
          },
          {
            "kind": "p",
            "text": "Höjden mot hypotenusan paras endast med hypotenusan. Att para den med en katet, som i [[(8\\times4.8)/2=19.2]], blandar två olika bas-höjd-par. Åtgärd: varje höjd tillhör exakt en bas."
          },
          {
            "kind": "h3",
            "text": "6. Att glömma dela med två"
          },
          {
            "kind": "p",
            "text": "[[10\\times4.8=48]] är parallellogrammets area, inte triangelns. Åtgärd: avsluta varje bas-höjd-beräkning med halveringen."
          },
          {
            "kind": "h3",
            "text": "7. Att multiplicera längder med inkompatibla enheter"
          },
          {
            "kind": "p",
            "text": "En hypotenusa på 2 m med en höjd på 150 cm är inte [[(2\\times150)/2=150]] av något meningsfullt. Åtgärd: omvandla till en enhet först, här 2 m och 1,5 m, vilket ger 1,5 m²."
          },
          {
            "kind": "h3",
            "text": "8. Att rapportera svaret i linjära enheter"
          },
          {
            "kind": "p",
            "text": "En area på 24 m² är inte 24 m. Åtgärd: skriv alltid den kvadratiska enheten tillsammans med talet."
          },
          {
            "kind": "h3",
            "text": "9. Att mata in noll eller negativa längder"
          },
          {
            "kind": "p",
            "text": "[[c>0]] och [[h>0]] krävs; noll eller negativa inmatningar beskriver ingen triangel. Åtgärd: mät igen."
          },
          {
            "kind": "h3",
            "text": "10. Att mata in en höjd större än halva hypotenusan"
          },
          {
            "kind": "p",
            "text": "[[c=10]], [[h=6]] bryter mot [[h\\leq c/2]]. Åtgärd: kontrollera vilket segment som mättes; det var inte den vinkelräta höjden."
          },
          {
            "kind": "h3",
            "text": "11. Att anta att varje positivt par bildar en rätvinklig triangel"
          },
          {
            "kind": "p",
            "text": "Positivitet räcker inte; höjdgränsen måste också gälla. Åtgärd: kör kontrollen [[h\\leq c/2]] på varje nytt par."
          },
          {
            "kind": "h3",
            "text": "12. Att förväxla höjden med den vertikala kateten"
          },
          {
            "kind": "p",
            "text": "I ett diagram kan höjden se vertikal ut medan en katet ser lutande ut, eller tvärtom efter rotation. Vertikal på skärmen betyder ingenting. Åtgärd: identifiera sidorna efter deras geometriska roll, inte deras skärmriktning."
          },
          {
            "kind": "h3",
            "text": "13. Att avrunda höjden för tidigt"
          },
          {
            "kind": "p",
            "text": "Att använda 4,6 för [[60/13\\approx4.61538]] och sedan beräkna ger en något felaktig area, medan det exakta bråket förkortas rent till 30. Åtgärd: behåll full precision till det slutliga svaret."
          },
          {
            "kind": "h3",
            "text": "14. Att anta att hypotenusan måste vara horisontell"
          },
          {
            "kind": "p",
            "text": "Hypotenusan kan sitta i vilken vinkel som helst; formeln använder längder, inte orienteringar. Åtgärd: lita på mätvärdena, inte ritningens rotation."
          },
          {
            "kind": "h3",
            "text": "15. Att förväxla höjdsatsen med Pythagoras sats"
          },
          {
            "kind": "p",
            "text": "[[h^2=pq]] relaterar höjden till hypotenusasegmenten; [[a^2+b^2=c^2]] relaterar de tre sidorna. De besvarar olika frågor. Åtgärd: matcha satsen med de storheter du har."
          },
          {
            "kind": "h3",
            "text": "16. Att använda en höjd uppmätt från en annan triangel"
          },
          {
            "kind": "p",
            "text": "En höjd tillhör en specifik triangel. Att låna 4,8 från en 6-8-10-triangel till en annan hypotenusa ger en felaktig area. Åtgärd: varje beräkning använder sin egen triangels mätvärden."
          },
          {
            "kind": "h3",
            "text": "17. Att anta att arean bestämmer varje sidlängd"
          },
          {
            "kind": "p",
            "text": "Många olika rätvinkliga trianglar delar en area. Att känna [[K=24]] fixerar inte [[c]] eller [[h]] individuellt. Åtgärd: behandla arean som en ekvation, inte en fullständig beskrivning."
          },
          {
            "kind": "h3",
            "text": "18. Att behandla geometrisk area som exakt material att köpa"
          },
          {
            "kind": "p",
            "text": "Formeln ger ideal geometrisk area. Verkliga projekt behöver spill, överlapp och kaptillägg ovanpå. Åtgärd: lägg till en projektmarginal när geometrin är klar."
          },
          {
            "kind": "h3",
            "text": "Felaktigt mot korrekt: Ett konkret exempel"
          },
          {
            "kind": "p",
            "text": "Givet [[c=10]] och [[h=4.8]] hoppar den felaktiga beräkningen över halveringen: [[K=10\\times4.8=48]]. Det är arean av det motsvarande parallellogrammet. Den korrekta beräkningen är [[K=(10\\times4.8)/2]], [[[\\boxed{K=24}]]] En andra illustration: att sätta in katet 8 för höjden ger [[(10\\times8)/2=40]], felaktigt eftersom 8 inte är vinkelrät mot hypotenusan. Höjden, och endast höjden, paras med [[c]]."
          }
        ]
      },
      "sec-verify": {
        "h2": "Så här kontrollerar du om din areaberäkning är korrekt",
        "blocks": [
          {
            "kind": "p",
            "text": "Sju kontroller fångar den stora majoriteten av dåliga resultat innan de lämnar sidan."
          },
          {
            "kind": "h3",
            "text": "Kontroll 1: Positiva inmatningar"
          },
          {
            "kind": "p",
            "text": "För en giltig rätvinklig triangel krävs [[c>0]] och [[h>0]]. Noll eller negativa längder beskriver ingen triangel."
          },
          {
            "kind": "h3",
            "text": "Kontroll 2: Höjdgränsen"
          },
          {
            "kind": "p",
            "text": "Bekräfta [[h\\leq c/2]]. Denna enda olikhet utesluter den vanligaste omöjliga inmatningen, till exempel [[c=10]] med [[h=6]]."
          },
          {
            "kind": "h3",
            "text": "Kontroll 3: Bekräfta den räta vinkeln"
          },
          {
            "kind": "p",
            "text": "Höjden måste vara vinkelrät mot hypotenusan. Om ritningen eller mätningen inte kan bekräfta 90-gradersmötet är inmatningen inte en höjd."
          },
          {
            "kind": "h3",
            "text": "Kontroll 4: Kvadratiska enheter"
          },
          {
            "kind": "p",
            "text": "Meterinmatningar ger kvadratmeter, centimeterinmatningar ger kvadratcentimeter. Svaret har enheten som är kvadraten på inmatningsenheten, aldrig själva inmatningsenheten."
          },
          {
            "kind": "h3",
            "text": "Kontroll 5: Korskontrollera med katetformeln"
          },
          {
            "kind": "p",
            "text": "För 6-8-10-triangeln gäller [[(6\\times8)/2=24]] och [[(10\\times4.8)/2=24]]. Två metoder, en triangel, ett svar: överensstämmelse är den starkaste verifiering som finns."
          },
          {
            "kind": "h3",
            "text": "Kontroll 6: Det geometriska medelvärdessambandet"
          },
          {
            "kind": "p",
            "text": "När hypotenusasegmenten är kända, verifiera [[h^2=pq]]: [[4.8^2=6.4\\times3.6]], [[23.04=23.04]]. En avvikelse betyder att höjden, segmenten eller triangelidentifieringen är felaktig."
          },
          {
            "kind": "h3",
            "text": "Kontroll 7: Jämför med den största möjliga arean"
          },
          {
            "kind": "p",
            "text": "För en fast hypotenusa gäller [[K\\leq c^2/4]]. Med [[c=10]] är varje påstådd rätvinklig area över 25 kvadratenheter omöjlig. Den här sidan påstår ingenting om kalkylatorns eget valideringsbeteende; kontrollen är din att köra."
          }
        ]
      },
      "sec-compare": {
        "h2": "Area från höjd jämfört med area från två kateter",
        "blocks": [
          {
            "kind": "p",
            "text": "Två formler, en area. [[K=ab/2]] behöver de två vinkelräta kateterna; [[K=ch/2]] behöver hypotenusan och dess höjd. Ingen är mer korrekt; de är samma storhet nådd från olika mätvärden."
          }
        ],
        "table": {
          "headers": ["Metod", "Mätvärden som krävs", "Främsta fördel"],
          "rows": [
            ["Area från kateter", "[[a]], [[b]]", "Enklast när de två kateterna är kända"],
            ["Area från höjd", "[[c]], [[h]]", "Direkt när hypotenusan och den vinkelräta höjden är kända"],
            ["Area från vinkel", "Lämpliga sidor och mellanliggande vinkel", "Användbar när en spetsig vinkel är känd"],
            ["Area från inradie", "[[r]], [[s]]", "Användbar i inskrivna-cirkel- och halvperimeterproblem"]
          ]
        },
        "closingParagraphs": [
          "Samma rätvinkliga triangels area ändras inte när en annan giltig metod används. Välj den rad som matchar de tal du redan har i handen; när två rader är tillgängliga är deras överensstämmelse en gratis korrekthetskontroll."
        ]
      },
      "sec-conclusion": {
        "h2": "Hypotenusan och dess höjd är allt du behöver",
        "blocks": [
          {
            "kind": "p",
            "text": "Höjdmetoden är bas-höjd-regeln riktad mot den längsta sidan. När hypotenusan är identifierad och den vinkelräta höjden är i handen är arean en multiplikation och en halvering bort, utan behov av att först återvinna kateterna."
          },
          {
            "kind": "p",
            "text": "Dess verkliga styrka är disciplin: vinkelräthet, höjdgränsen och de geometriska medelvärdessambanden förvandlar vaga triangelskisser till kontrollerbara tal. Kör kontrollerna, jämför mot katetformeln när kateterna är tillgängliga, så förtjänar svaret sitt förtroende."
          },
          {
            "kind": "p",
            "text": "Behåll den här sidans kalkylator för fallen där hypotenusan och höjden är de uppmätta värdena, och sträck dig efter katet-, vinkel- eller halvperimeterkalkylatorerna när mätningarna pekar någon annanstans."
          }
        ]
      }
    },
    "faqs": [
      {
        "question": "Vad är formeln för en rätvinklig triangels area med höjd?",
        "answer": "Formeln är K = ch/2, där c är hypotenusan och h är den vinkelräta höjden från det rätvinkliga hörnet till hypotenusan. Multiplicera de två längderna och dela med två. Resultatet är i kvadratiska enheter som matchar inmatningarna, så meterinmatningar ger kvadratmeter. Höjden måste möta hypotenusan i 90 grader för att formeln ska gälla."
      },
      {
        "question": "Vad betyder höjden h i en rätvinklig triangel?",
        "answer": "Höjden h är det vinkelräta segmentet från det rätvinkliga hörnet C till hypotenusan, där den möter den i punkten D. Det är det kortaste avståndet från det hörnet till hypotenusan och den höjd som paras med hypotenusan som bas. Det är inte en katet, och inte bara någon linje ritad innanför triangeln."
      },
      {
        "question": "Är höjden samma sak som en av kateterna?",
        "answer": "Nej. Kateterna a och b bildar den räta vinkeln, medan höjden är ett separat segment från det hörnet till den motsatta sidan. I en 6-8-10-triangel är höjden 4,8, vilket inte är lika med någon av kateterna. Att mata in en katet där höjden hör hemma är ett av de vanligaste misstagen med den här formeln."
      },
      {
        "question": "Varför kan hypotenusan användas som bas?",
        "answer": "Vilken sida som helst i en triangel kan fungera som bas när dess motsvarande vinkelräta höjd är känd. För hypotenusan är den höjden höjden från det rätvinkliga hörnet. Eftersom de två är vinkelräta gäller den allmänna regeln om halva basen gånger höjden direkt, vilket ger K = ch/2."
      },
      {
        "question": "Varför delar vi produkten av hypotenusa och höjd med två?",
        "answer": "Produkten c gånger h är arean av det parallellogram som byggs på samma bas med samma höjd. En triangel fyller exakt hälften av det parallellogrammet, så produkten måste halveras. Att hoppa över delningen besvarar en annan fråga: med c = 10 och h = 4,8 är 48 parallellogrammet medan 24 är triangeln."
      },
      {
        "question": "Hur hittar du höjden om båda kateterna är kända?",
        "answer": "Använd h = ab/c. Multiplicera de två kateterna och dela med hypotenusan, som du kan få från Pythagoras sats vid behov. För kateterna 6 och 8 med hypotenusan 10 är h = 48/10 = 4,8. Höjd-från-sidor-kalkylatorn på den här webbplatsen utför exakt den beräkningen när sidorna är kända."
      },
      {
        "question": "Vad är den geometriska medelvärdessatsen för rätvinklig triangels höjd?",
        "answer": "Den säger att h i kvadrat är lika med p gånger q, där p och q är de två segment som höjden skär ut från hypotenusan. Höjden är därför det geometriska medelvärdet av dessa segment. För p = 6,4 och q = 3,6 är h = sqrt(23,04) = 4,8, vilket också verifierar en höjd som hittats på annat sätt."
      },
      {
        "question": "Kan höjden vara längre än halva hypotenusan?",
        "answer": "Nej. För en giltig rätvinklig triangel måste h uppfylla 0 < h <= c/2. Höjden är högst när den delar hypotenusan i lika halvor och når exakt c/2 i det likbenta fallet. Ett större värde, till exempel h = 6 med c = 10, kan inte tillhöra en rätvinklig triangel med den hypotenusan."
      },
      {
        "question": "Hur beräknar du arean när endast hypotenusan och höjden är kända?",
        "answer": "Tillämpa K = ch/2 direkt. Ingen katetrekonstruktion behövs eftersom arean redan är bestämd av en sida och dess motsvarande höjd. Till exempel ger c = 10 och h = 4,8 K = 24 kvadratenheter. Bekräfta bara att höjden är vinkelrät och inte större än halva hypotenusan först."
      },
      {
        "question": "Varför ger den höjdbaserade formeln samma resultat som katetformeln?",
        "answer": "Båda beräknar arean av samma triangel. Att sätta ab/2 lika med ch/2 och multiplicera med två ger ab = ch, så h = ab/c. De två formlerna är algebraiskt ekvivalenta för varje konsistent rätvinklig triangel, vilket är anledningen till att beräkna båda är en så stark kontroll: överensstämmelse bekräftar inmatningarna."
      },
      {
        "question": "Vilka enheter ska arearesultatet använda?",
        "answer": "Kvadratiska enheter som matchar inmatningslängderna: meter ger kvadratmeter, centimeter ger kvadratcentimeter, millimeter ger kvadratmillimeter. Omvandla alla inmatningar till en enhet innan du beräknar. Kom ihåg att areaomvandlingar kvadrerar den linjära faktorn, så en kvadratmeter är lika med 10 000 kvadratcentimeter."
      },
      {
        "question": "Kan den höjdbaserade formeln användas för andra trianglar?",
        "answer": "Bas-höjd-regeln om halva basen gånger höjden fungerar för varje triangel med ett matchande vinkelrätt par. Det speciella här är de rätvinkliga begränsningarna: höjden måste gå från det rätvinkliga hörnet, och h kan aldrig överstiga c/2. Dessa gränser gäller inte för spetsvinkliga eller trubbvinkliga trianglar."
      }
    ],
    "faqHeading": "Vanliga frågor",
    "relatedHeading": "Utforska relaterade kalkylatorer för rätvinkliga trianglar",
    "relatedItems": [
      "Kalkylator för rätvinklig triangels area",
      "Kalkylator för rätvinklig triangels area från kateter",
      "Kalkylator för rätvinklig triangels höjd från sidor",
      "Kalkylator för rätvinklig triangels area från halvperimeter",
      "Kalkylator för rätvinklig triangels area från vinkel",
      "Kalkylator för rätvinklig triangels omkrets",
      "Kalkylator för rätvinklig triangels sidor"
    ]
  },
"zh": {
    "tocHeading": "本指南内容",
    "tocItems": {
      "sec-intro": "如何用高计算直角三角形的面积",
      "sec-understand": "理解斜边和高",
      "sec-formula": "直角三角形高面积公式",
      "sec-steps": "用高计算面积的逐步示例",
      "sec-howto": "如何使用高面积计算器",
      "sec-examples": "计算实例：斜边和高",
      "sec-applications": "实际应用",
      "sec-equal": "为什么两种面积公式结果一致",
      "sec-geomean": "高如何把直角三角形分成两部分",
      "sec-max": "高的最大可能值",
      "sec-find-altitude": "高未知时如何求高",
      "sec-units": "平方单位与换算",
      "sec-mistakes": "常见错误",
      "sec-verify": "如何验证你的答案",
      "sec-compare": "用高求面积与用两条直角边求面积的对比",
      "sec-related": "探索相关的直角三角形计算器",
      "sec-faq": "常见问题",
      "sec-conclusion": "结论"
    },
    "sections": {
      "sec-intro": {
        "h2": "如何用高计算直角三角形的面积",
        "blocks": [
          {
            "kind": "p",
            "text": "假设一个直角三角形的斜边为 10 米，从直角顶点到该斜边的垂直距离为 4.8 米。那么面积可以直接求得：[[K=(10\\times4.8)/2]]，[[[\\boxed{K=24\\text{ m}^2}]]]。这个三角形围成 24 平方米的平面。"
          },
          {
            "kind": "p",
            "text": "本页的计算器正是为这种情形而设。当已知直角三角形的最长边，即斜边 [[c]]，以及从直角顶点到该边的垂直高 [[h]] 时，不需要两条直角边。斜边充当底，高度是与之对应的垂直高度，而每个三角形的面积都是底与其对应高度乘积的一半：[[K=ch/2]]。"
          },
          {
            "kind": "p",
            "text": "高必须与斜边成直角相交；一条不垂直的倾斜线段给出的是错误的高度和错误的面积。请用相同的长度单位输入两个测量值，计算器会返回对应平方单位的面积，并展示每一步代入过程。"
          }
        ]
      },
      "sec-understand": {
        "h2": "理解直角三角形的斜边和高",
        "blocks": [
          {
            "kind": "p",
            "text": "本指南全程使用统一的符号：[[A]] 和 [[B]] 是两个锐角，[[C=90^\\circ]] 是直角，边 [[a]] 与角 [[A]] 相对，边 [[b]] 与角 [[B]] 相对，边 [[c]] 是与角 [[C]] 相对的斜边，[[h]] 是从顶点 [[C]] 到斜边的垂直高，交于点 [[D]]，[[p]] 和 [[q]] 是斜边上的两段 [[AD]] 和 [[DB]]，[[K]] 是面积。"
          },
          {
            "kind": "h3",
            "text": "什么是直角三角形？"
          },
          {
            "kind": "p",
            "text": "直角三角形恰好包含一个 90 度的角。它的两条直角边交于直角处，斜边与该角相对。斜边始终是最长的边。另外两个角是锐角，因为三个角之和为 180 度，所以 [[A+B=90^\\circ]]。这些事实很重要，因为高方法依赖它们：底必须是斜边，高必须从直角顶点引出。"
          },
          {
            "kind": "h3",
            "text": "什么是斜边？"
          },
          {
            "kind": "p",
            "text": "斜边是与直角相对的边，在计算器中记为 [[c]]。无论三角形如何摆放，要找出它，只需找到不接触直角标记的那条边：那条边就是斜边。在高公式中，它充当底的角色，因此正确识别它是本页要教的第一个技能。"
          },
          {
            "kind": "h3",
            "text": "什么是高？"
          },
          {
            "kind": "p",
            "text": "高是从三角形顶点到对边所在直线的垂直线段。这里的高 [[h]] 从直角顶点 [[C]] 引向斜边 [[AB]]，交于点 [[D]]，即 [[CD\\perp AB]]。它是一段垂直距离，而不是三角形内部任意画的一条线：只有与斜边成 90 度相交的那一段才算。"
          },
          {
            "kind": "h3",
            "text": "高和直角边是同一回事吗？"
          },
          {
            "kind": "p",
            "text": "不是。直角边 [[a]] 和 [[b]] 交于原来的直角，而高是从同一个顶点到对边的另一条线段。以 6-8-10 三角形为例：[[a=6]]，[[b=8]]，[[c=10]]。它的高是 [[h=(6\\times8)/10=4.8]]。两条直角边都不等于 4.8，但斜边上的高恰好是 4.8。把直角边误当作高是本页最常见的错误之一。"
          },
          {
            "kind": "h3",
            "text": "为什么高落在三角形内部"
          },
          {
            "kind": "p",
            "text": "对于非退化的直角三角形，从直角顶点引出的垂线落在斜边的两个端点之间，绝不会落到外面。它把原三角形分成两个较小的直角三角形。这两个三角形与原三角形共享锐角的度数，因此三个三角形彼此相似。这种相似性正是高满足那些整齐关系的原因，下面几何平均一节会详细探讨。"
          }
        ],
        "imgAlt": "直角三角形 ABC，标出直角边 a、b，以斜边 c 为底，从顶点 C 到点 D 的高 h，公式 K = ch/2",
        "figcaption": "高方法的构成：斜边 c 是底，高 h 在点 D 与它成 90 度相交，面积为 K = ch/2。"
      },
      "sec-formula": {
        "h2": "直角三角形高面积公式",
        "blocks": [
          {
            "kind": "p",
            "text": "高面积公式是 [[[\\boxed{K=\\frac{ch}{2}}]]]。其中 [[K]] 是面积，[[c]] 是充当底的斜边，[[h]] 是斜边上的垂直高。三个符号，一次乘法，一次除以二。"
          },
          {
            "kind": "h3",
            "text": "为什么要把斜边乘以高？"
          },
          {
            "kind": "p",
            "text": "三角形面积的通用公式是 [[K=\\frac{\\text{base}\\times\\text{height}}{2}]]，底和高必须互相垂直。选择斜边作为底，就迫使高成为到它的垂直距离，这正是高：[[\\text{base}=c]]，[[\\text{height}=h]]，因此 [[K=ch/2]]。无论三角形如何旋转或绘制，这都成立：垂直是一种几何关系，而不是屏幕方向，所以倾斜的斜边和水平的斜边一样可以充当底。"
          },
          {
            "kind": "h3",
            "text": "为什么结果要除以二？"
          },
          {
            "kind": "p",
            "text": "三角形占据了同底同高平行四边形的一半。当 [[c=10]]、[[h=4.8]] 时，乘积 [[c\\times h=48]] 是该平行四边形的面积。三角形是它的一半，所以 [[K=48/2=24]]。如果报告 48，回答的是另一个问题：整个平行四边形的面积，而不是其中三角形的面积。"
          },
          {
            "kind": "h3",
            "text": "这个公式适用于每个三角形吗？"
          },
          {
            "kind": "p",
            "text": "底乘高规则适用于每个三角形，只要高与所选的底垂直。这里的特殊之处在于底的选择：直角三角形的斜边，以及从直角顶点引出的高。这种选择带来了额外的几何约束，例如高永远不超过斜边的一半，这些在一般三角形中并不成立。"
          },
          {
            "kind": "h3",
            "text": "为什么公式不需要两条直角边"
          },
          {
            "kind": "p",
            "text": "面积只需要一条边及其对应的垂直高，不需要更多。当 [[c]] 和 [[h]] 已知时，直角边不再提供关于面积的新信息。直角边公式 [[K=ab/2]] 只是通向同一个量的另一条输入路径，适用于测量值是两条互相垂直的边时的情形。"
          }
        ],
        "imgAlt": "图解为什么三角形面积是底乘高的一半：c = 10，h = 4.8，10 x 4.8 = 48，除以 2 得 24 平方单位",
        "figcaption": "c 乘以 h 的乘积是整个矩形；三角形恰好占它的一半，这就是公式要除以二的原因。"
      },
      "sec-steps": {
        "h2": "用高计算面积的逐步示例",
        "blocks": [
          {
            "kind": "p",
            "text": "一次完整的计算，从测量值到验证后的答案，使用 [[c=10\\text{ m}]] 和 [[h=4.8\\text{ m}]]。"
          }
        ],
        "steps": [
          "<strong>确定已知测量值。</strong>斜边是 [[c=10\\text{ m}]]，与它垂直的高是 [[h=4.8\\text{ m}]]。确认高与斜边成直角相交。",
          "<strong>写出公式。</strong>[[K=ch/2]]。",
          "<strong>代入测量值。</strong>[[K=(10\\times4.8)/2]]。",
          "<strong>相乘。</strong>[[10\\times4.8=48]]，所以 [[K=48/2]]。",
          "<strong>除以二。</strong>[[[\\boxed{K=24\\text{ m}^2}]]]。",
          "<strong>解释答案。</strong>该三角形围成 24 平方米的平面面积。",
          "<strong>检查可行性。</strong>有效的直角三角形需要 [[h\\leq c/2]]；这里 [[4.8\\leq5]]，所以这组测量值可以描述一个真实的直角三角形。",
          "<strong>用直角边验证。</strong>6-8-10 三角形具有相同的斜边和高，且 [[K=(6\\times8)/2=24]]。两条路径结果一致。"
        ]
      },
      "sec-howto": {
        "h2": "如何使用直角三角形高面积计算器",
        "blocks": [
          {
            "kind": "p",
            "text": "本页的计算器只需要两个输入。下面的演示按屏幕上的顺序进行，初次使用的用户也能从画出的或测量的三角形一步步得到验证过的面积。"
          }
        ],
        "steps": [
          "<strong>确认是直角三角形。</strong>确认其中一个角是 90 度；该方法只适用于直角三角形。",
          "<strong>找到它的斜边 [[c]]。</strong>它是与直角相对的边，也是最长的边。",
          "<strong>确定垂直高 [[h]]。</strong>它从直角顶点引向斜边，并与斜边成 90 度相交。",
          "<strong>测量或获得两个值。</strong>直接测量，或在直角边已知时先用 [[h=ab/c]] 算出高。",
          "<strong>在 Hypotenuse c 字段中输入斜边。</strong>",
          "<strong>在 Altitude h 字段中输入高。</strong>",
          "<strong>选择兼容的长度单位。</strong>应用公式之前，两个输入必须使用同一单位。",
          "<strong>确认两个值都是正数。</strong>零或负的长度描述不了任何三角形。",
          "<strong>检查 [[h]] 不大于斜边的一半。</strong>当 [[c=10]] 时，任何超过 5 的高都不可能属于斜边为 10 的直角三角形。",
          "<strong>点击\"计算 Area\"。</strong>",
          "<strong>查看面积结果。</strong>它以与输入单位对应的平方单位显示。",
          "<strong>阅读显示的解题步骤。</strong>它们展示公式、代入过程和算术运算。",
          "<strong>查看实时可视化图形。</strong>确认图中三角形的斜边和高与预期的测量值一致。",
          "<strong>开始新的计算时使用\"重置\"。</strong>它会清空两个字段，让下一次计算从零开始。"
        ],
        "closingParagraphs": [
          "计算器不询问两条直角边或角度，因为高方法确实不需要它们。"
        ]
      },
      "sec-examples": {
        "h2": "直角三角形斜边和高求面积的计算实例",
        "blocks": [
          {
            "kind": "p",
            "text": "四个计算实例从熟悉的三角形开始，逐步建立起这种方法。每个实例都在需要时先用直角边算出高，再应用 [[K=ch/2]]，并用直角边公式交叉验证。"
          },
          {
            "kind": "h3",
            "text": "实例 1：3-4-5 直角三角形"
          },
          {
            "kind": "p",
            "text": "已知 [[a=3]]、[[b=4]]、[[c=5]]。高为 [[h=ab/c]]，即 [[h=(3\\times4)/5=2.4]]。面积为 [[K=(5\\times2.4)/2]]，[[[\\boxed{K=6\\text{ square units}}]]]。用直角边验证：[[K=(3\\times4)/2=6]]。两个公式描述的是同一个三角形，所以它们必须一致，确实一致。"
          },
          {
            "kind": "h3",
            "text": "实例 2：5-12-13 直角三角形"
          },
          {
            "kind": "p",
            "text": "已知 [[a=5]]、[[b=12]]、[[c=13]]。高为 [[h=(5\\times12)/13=60/13\\approx4.61538]]。保留精确分数：[[K=(13\\times(60/13))/2]]，[[[\\boxed{K=30\\text{ square units}}]]]。保留 [[60/13]] 而不是用四舍五入的小数，可以避免过早舍入的误差：13 被精确约掉，得到干净的 30。"
          },
          {
            "kind": "h3",
            "text": "实例 3：6-8-10 直角三角形"
          },
          {
            "kind": "p",
            "text": "直接已知 [[c=10]] 和 [[h=4.8]]。则 [[K=(10\\times4.8)/2]]，[[[\\boxed{K=24\\text{ square units}}]]]。用直角边 6 和 8 验证：[[K=(6\\times8)/2=24]]，证实了高这条路径。"
          },
          {
            "kind": "h3",
            "text": "实例 4：等腰直角三角形"
          },
          {
            "kind": "p",
            "text": "已知 [[c=10]] 和 [[h=5]]。则 [[K=(10\\times5)/2]]，[[[\\boxed{K=25\\text{ square units}}]]]。这是斜边为 10 的直角三角形能达到的最大面积。只有当两条直角边相等时，高才等于斜边的一半，此时每个锐角都是 [[45^\\circ]]，而斜边为 10 的有效直角三角形的面积都不可能超过 25 平方单位。"
          }
        ]
      },
      "sec-applications": {
        "h2": "直角三角形高面积公式的实际应用",
        "blocks": [
          {
            "kind": "p",
            "text": "十二个完整计算的实例展示公式在不同尺度和不同单位下的应用。每个实例都说明场景中的三角形、两个测量值、代入过程、面积，以及模型背后的假设。"
          },
          {
            "kind": "h3",
            "text": "实例 1：三角形花园区域"
          },
          {
            "kind": "p",
            "text": "一块直角三角形花园区域，最长边界为 10 米，从直角顶点到该边界的垂直距离为 4.8 米。因此 [[c=10\\text{ m}]]，[[h=4.8\\text{ m}]]：[[K=(10\\times4.8)/2]]，[[[\\boxed{K=24\\text{ m}^2}]]]。该区域占据 24 平方米。这里假设边界是直的，角是真正的直角。"
          },
          {
            "kind": "h3",
            "text": "实例 2：三角形胶合板"
          },
          {
            "kind": "p",
            "text": "一块直角三角形胶合板的斜边为 1 米，垂直高为 0.48 米：[[K=(1\\times0.48)/2]]，[[[\\boxed{K=0.24\\text{ m}^2}]]]。这是板材一个面的平面面积，可用于覆盖面积估算。切割损耗和材料余量是另外考虑的问题。"
          },
          {
            "kind": "h3",
            "text": "实例 3：直角三角形玻璃窗"
          },
          {
            "kind": "p",
            "text": "一块直角三角形玻璃板的斜边为 1.3 米，与该边垂直的高为 0.6 米：[[K=(1.3\\times0.6)/2]]，[[[\\boxed{K=0.39\\text{ m}^2}]]]。这是扣除窗框遮挡或安装余量之前的几何玻璃面积。"
          },
          {
            "kind": "h3",
            "text": "实例 4：测量三角形地块"
          },
          {
            "kind": "p",
            "text": "一张测量图上有一个直角三角形，斜边 13 米，高 [[60/13]] 米。保留分数：[[K=(13\\times(60/13))/2]]，[[[\\boxed{K=30\\text{ m}^2}]]]。图纸代表一个 30 平方米的区域。实际野外作业可能仍需要在图纸之外做仪器修正。"
          },
          {
            "kind": "h3",
            "text": "实例 5：测量三角形瓷砖"
          },
          {
            "kind": "p",
            "text": "一块直角三角形瓷砖的斜边为 25 厘米，垂直高为 6.72 厘米：[[K=(25\\times6.72)/2]]，[[[\\boxed{K=84\\text{ cm}^2}]]]。一块瓷砖覆盖 84 平方厘米，有助于估算一个表面需要多少块瓷砖。瓷砖缝和切割损耗另外计算。"
          },
          {
            "kind": "h3",
            "text": "实例 6：钢支撑板"
          },
          {
            "kind": "p",
            "text": "一块平面直角三角形支撑板的斜边为 1.7 米，直角边为 0.8 米和 1.5 米。它的高是 [[h=(0.8\\times1.5)/1.7=12/17]] 米。则 [[K=(1.7\\times(12/17))/2]]，[[[\\boxed{K=0.6\\text{ m}^2}]]]。这是板的几何面积，不是它的承载能力。"
          },
          {
            "kind": "h3",
            "text": "实例 7：三角形坡道侧板"
          },
          {
            "kind": "p",
            "text": "一块简化的坡道侧板构成直角三角形，斜边为 5 米，与斜边垂直的高为 2.4 米：[[K=(5\\times2.4)/2]]，[[[\\boxed{K=6\\text{ m}^2}]]]。这是三角形侧截面的平面面积，不是倾斜的坡道表面，而且该计算不能证明符合无障碍标准。"
          },
          {
            "kind": "h3",
            "text": "实例 8：屋顶山墙截面"
          },
          {
            "kind": "p",
            "text": "一块直角三角形屋顶山墙截面的斜边为 6.5 米，垂直高为 [[30/13]] 米：[[K=(6.5\\times(30/13))/2]]，[[[\\boxed{K=7.5\\text{ m}^2}]]]。结果描述的是由测量值给出的三角形平面。真实屋顶的总表面积是另一个三维测量问题。"
          },
          {
            "kind": "h3",
            "text": "实例 9：直角三角形地块"
          },
          {
            "kind": "p",
            "text": "一块直角三角形土地的斜边为 50 米，垂直高为 24 米：[[K=(50\\times24)/2]]，[[[\\boxed{K=600\\text{ m}^2}]]]。测量的边界围成 600 平方米。官方面积数字可能仍需测量核实。"
          },
          {
            "kind": "h3",
            "text": "实例 10：大型三角形测量地块"
          },
          {
            "kind": "p",
            "text": "一块已测量的直角三角形区域，斜边为 100 米，垂直高为 48 米：[[K=(100\\times48)/2]]，[[[\\boxed{K=2400\\text{ m}^2}]]]。这是该三角形区域的平面面积。只有当整个地产恰好就是这个三角形时，它才代表整个地产。"
          },
          {
            "kind": "h3",
            "text": "实例 11：三角形帆面"
          },
          {
            "kind": "p",
            "text": "一块平面直角三角形帆面设计的斜边为 15 英尺，垂直高为 7.2 英尺：[[K=(15\\times7.2)/2]]，[[[\\boxed{K=54\\text{ ft}^2}]]]。这是理想化帆面的平面面积。弯曲的布料、接缝和边缘余量需要另外考虑。"
          },
          {
            "kind": "h3",
            "text": "实例 12：小型机械支架"
          },
          {
            "kind": "p",
            "text": "一块平面直角三角形支架的斜边为 250 毫米，垂直高为 120 毫米：[[K=(250\\times120)/2]]，[[[\\boxed{K=15000\\text{ mm}^2}]]]。因为输入是毫米，答案以平方毫米为单位。由于 [[1\\text{ cm}^2=100\\text{ mm}^2]]，这等于 [[[\\boxed{150\\text{ cm}^2}]]]。换算线性单位和换算平方单位是不同的运算，单位一节会解释。"
          },
          {
            "kind": "h3",
            "text": "实际例子对比"
          }
        ],
        "table": {
          "headers": ["情形", "斜边 c", "高 h", "公式", "计算出的面积", "实际含义"],
          "rows": [
            ["花园区域", "10 米", "4.8 米", "[[K=ch/2]]", "24 平方米", "种植表面"],
            ["胶合板", "1 米", "0.48 米", "[[K=ch/2]]", "0.24 平方米", "材料覆盖，不含损耗"],
            ["玻璃窗", "1.3 米", "0.6 米", "[[K=ch/2]]", "0.39 平方米", "窗框之前的玻璃面积"],
            ["测量图", "13 米", "60/13 米", "[[K=ch/2]]", "30 平方米", "区域的图纸面积"],
            ["瓷砖", "25 厘米", "6.72 厘米", "[[K=ch/2]]", "84 平方厘米", "一块瓷砖的表面"],
            ["钢板", "1.7 米", "12/17 米", "[[K=ch/2]]", "0.6 平方米", "几何面积，非承载能力"],
            ["坡道侧板", "5 米", "2.4 米", "[[K=ch/2]]", "6 平方米", "侧截面，非坡道表面"],
            ["屋顶山墙", "6.5 米", "30/13 米", "[[K=ch/2]]", "7.5 平方米", "三角形横截面"],
            ["地块", "50 米", "24 米", "[[K=ch/2]]", "600 平方米", "围成的面积，需测量核实"],
            ["测量地块", "100 米", "48 米", "[[K=ch/2]]", "2400 平方米", "局部区域，非整个地产"],
            ["帆面", "15 英尺", "7.2 英尺", "[[K=ch/2]]", "54 平方英尺", "理想化的平面帆"],
            ["支架", "250 毫米", "120 毫米", "[[K=ch/2]]", "15000 平方毫米", "等于 150 平方厘米"]
          ]
        },
        "imgAlt": "四个例子：花园、玻璃板、地块和支架，每个都标出斜边 c、高 h 和计算出的面积",
        "figcaption": "同一个公式在四种尺度下：花园、玻璃板、地块和机器支架。"
      },
      "sec-equal": {
        "h2": "为什么两种直角三角形面积公式给出相同的答案",
        "blocks": [
          {
            "kind": "p",
            "text": "直角三角形可以通过两条互相垂直的直角边来测量，也可以通过斜边和高来测量。直角边公式是 [[K=ab/2]]，高公式是 [[K=ch/2]]。因为两者描述的是同一个三角形的面积，所以 [[\\frac{ab}{2}=\\frac{ch}{2}]]。两边同时乘以二：[[ab=ch]]。解出 [[h]]：[[[\\boxed{h=\\frac{ab}{c}}]]]。高等于两条直角边的乘积除以斜边，这就是两个公式在一致的三角形上永远不会矛盾的原因。"
          },
          {
            "kind": "p",
            "text": "数值验证：当 [[a=6]]、[[b=8]]、[[c=10]] 时，高为 [[h=(6\\times8)/10=4.8]]。用直角边：[[K=(6\\times8)/2=24]]。用高：[[K=(10\\times4.8)/2=24]]。同一个三角形，同样的面积，两条路径。"
          },
          {
            "kind": "p",
            "text": "当只知道斜边和高时，面积已经确定：不需要先重建直角边。直角边的长度仍然可以从有效的 [[c]] 和 [[h]] 通过下面的线段关系求出，但那是与求面积不同的另一个计算。当已知的是直角边时，<a href=\"/right-triangle-area-from-legs-calculator/\">直角三角形直角边求面积计算器</a>可以直接使用它们。"
          }
        ]
      },
      "sec-geomean": {
        "h2": "高如何把直角三角形分成两部分",
        "blocks": [
          {
            "kind": "p",
            "text": "高在 [[D]] 点与斜边相交，把它分成 [[AD=p]] 和 [[DB=q]] 两段，所以 [[p+q=c]]。这次分割在原三角形内部产生了两个较小的直角三角形，它们的比例关系非常整齐。"
          },
          {
            "kind": "h3",
            "text": "两个较小的相似直角三角形"
          },
          {
            "kind": "p",
            "text": "高把原三角形分成两个较小的直角三角形，每个都与原三角形共享一个锐角，每个都包含一个直角。共享两个角度的度数使三个三角形彼此相似。相似性迫使高、线段和直角边之间形成干净的比例关系。"
          },
          {
            "kind": "h3",
            "text": "高几何平均定理"
          },
          {
            "kind": "p",
            "text": "相似性给出 [[[\\boxed{h^2=pq}]]]，等价地 [[[\\boxed{h=\\sqrt{pq}}]]]。高是斜边两段的几何平均数：它的平方等于两段的乘积。计算实例：当 [[p=6.4]]、[[q=3.6]] 时，[[c=p+q=10]]，[[h=\\sqrt{6.4\\times3.6}=\\sqrt{23.04}]]，[[[\\boxed{h=4.8}]]]。面积随之求得：[[K=(10\\times4.8)/2]]，[[[\\boxed{K=24\\text{ square units}}]]]。线段定理可以验证用其他方式测得或算出的高。"
          },
          {
            "kind": "h3",
            "text": "线段与直角边的关系"
          },
          {
            "kind": "p",
            "text": "同样的相似性给出 [[b^2=cp]] 和 [[a^2=cq]]。当 [[c=10]]、[[p=6.4]]、[[q=3.6]] 时：[[b=\\sqrt{10\\times6.4}=\\sqrt{64}=8]]，[[a=\\sqrt{10\\times3.6}=\\sqrt{36}=6]]。原来的 6-8-10 三角形被精确还原，这说明线段、高和直角边紧密相连。"
          }
        ]
      },
      "sec-max": {
        "h2": "直角三角形的高最大能有多大？",
        "blocks": [
          {
            "kind": "p",
            "text": "并不是每一对正数都能成为斜边和高。对于有效的非退化直角三角形，有 [[[\\boxed{0<h\\leq\\frac{c}{2}}]]]。高必须为正，且永远不能超过斜边的一半。"
          },
          {
            "kind": "h3",
            "text": "为什么高不能超过斜边的一半"
          },
          {
            "kind": "p",
            "text": "由 [[h^2=pq]] 和 [[p+q=c]] 可知，当两段相等，即 [[p=q=c/2]] 时，乘积 [[pq]] 最大。因此 [[h^2\\leq c^2/4]]，对于正的长度，[[h\\leq c/2]]。用直白的话说：当高把斜边平分为两段时最高，即便如此也只能达到斜边的一半。"
          },
          {
            "kind": "h3",
            "text": "斜边固定时的最大面积"
          },
          {
            "kind": "p",
            "text": "因为 [[K=ch/2]] 且 [[h\\leq c/2]]，所以最大的可能面积是 [[[\\boxed{K_{\\max}=\\frac{c^2}{4}}]]]。这个最大值属于等腰直角三角形，此时两条直角边相等。当 [[c=10]] 时，最大的有效高是 [[h_{\\max}=5]]，得到 [[K_{\\max}=(10\\times5)/2=25]]。斜边为 10 而高为 6，在直角三角形中是不可能的。"
          },
          {
            "kind": "h3",
            "text": "如果高太大，会发生什么？"
          },
          {
            "kind": "p",
            "text": "取 [[c=10]] 和 [[h=6]]：[[6>5]]，所以没有直角三角形具有这组测量值。算术 [[(10\\times6)/2=30]] 在更一般的背景下是某个三角形的有效面积，但它不能使 [[c=10]]、[[h=6]] 成为有效的直角三角形输入。本页不声称计算器会自动拒绝这类输入；这项检查由你自己来做。"
          },
          {
            "kind": "h3",
            "text": "高能等于斜边的一半吗？"
          },
          {
            "kind": "p",
            "text": "可以。取等号时得到两条直角边相等的等腰直角三角形，这是一个有效的非退化三角形。这是边界情形，不是破损的情形。"
          }
        ],
        "imgAlt": "6-8-10 三角形的高把斜边分成 p = 6.4 和 q = 3.6 两段，以及处于最大高 c/2 的等腰三角形",
        "figcaption": "左图：高是斜边两段的几何平均数。右图：最高的可能高度是斜边的一半，此时面积最大。"
      },
      "sec-find-altitude": {
        "h2": "高未知时如何求高",
        "blocks": [
          {
            "kind": "p",
            "text": "本计算器把 [[h]] 作为输入，所以未知的高必须先求出或测得。三条标准路径覆盖了常见情形。当边已知而高是缺失的一环时，<a href=\"/right-triangle-altitude-from-sides-calculator/\">直角三角形边长求高计算器</a>可以直接算出它。"
          },
          {
            "kind": "h3",
            "text": "方法 1：用两条直角边和斜边"
          },
          {
            "kind": "p",
            "text": "[[[\\boxed{h=\\frac{ab}{c}}]]]。当 [[a=6]]、[[b=8]]、[[c=10]] 时：[[h=(6\\times8)/10=4.8]]。"
          },
          {
            "kind": "h3",
            "text": "方法 2：用斜边上的两段"
          },
          {
            "kind": "p",
            "text": "[[[\\boxed{h=\\sqrt{pq}}]]]。当 [[p=6.4]]、[[q=3.6]] 时：[[h=\\sqrt{23.04}=4.8]]。"
          },
          {
            "kind": "h3",
            "text": "方法 3：用已知面积和斜边"
          },
          {
            "kind": "p",
            "text": "把 [[K=ch/2]] 变形得到 [[[\\boxed{h=\\frac{2K}{c}}]]]。当 [[K=24]]、[[c=10]] 时：[[h=(2\\times24)/10=4.8]]。"
          }
        ],
        "closingParagraphs": [
          "这些是数学变形，不是额外的计算器模式：高面积计算器本身仍然要求把高作为输入。"
        ]
      },
      "sec-units": {
        "h2": "理解直角三角形面积计算中的平方单位",
        "blocks": [
          {
            "kind": "p",
            "text": "面积是二维的。两个长度相乘，单位也相乘：[[\\text{m}\\times\\text{m}=\\text{m}^2]]。面积单位始终是长度单位的平方。"
          },
          {
            "kind": "h3",
            "text": "平方米"
          },
          {
            "kind": "p",
            "text": "当 [[c=10\\text{ m}]]、[[h=4.8\\text{ m}]] 时，[[K=24\\text{ m}^2]]。读作 24 平方米的表面。"
          },
          {
            "kind": "h3",
            "text": "平方厘米"
          },
          {
            "kind": "p",
            "text": "当 [[c=25\\text{ cm}]]、[[h=6.72\\text{ cm}]] 时，[[K=84\\text{ cm}^2]]。"
          },
          {
            "kind": "h3",
            "text": "平方毫米"
          },
          {
            "kind": "p",
            "text": "当 [[c=250\\text{ mm}]]、[[h=120\\text{ mm}]] 时，[[K=15000\\text{ mm}^2]]。"
          },
          {
            "kind": "h3",
            "text": "面积单位的换算"
          },
          {
            "kind": "p",
            "text": "[[1\\text{ m}^2=10000\\text{ cm}^2]]，[[1\\text{ cm}^2=100\\text{ mm}^2]]。线性换算是乘以 10、100 或 1000，而面积换算是把该因子平方：1 米中的 100 厘米变成 1 平方米中的 [[100^2=10000]] 平方厘米。换算长度和换算面积是不同的运算。"
          },
          {
            "kind": "h3",
            "text": "如果输入使用了不同的单位怎么办？"
          },
          {
            "kind": "p",
            "text": "先换算，再计算。斜边用米、高用厘米时，必须统一到一个单位，例如 2 米和 150 厘米变成 2 米和 1.5 米，然后再应用公式。公式中的混合单位会得到一个没有干净单位的无意义数字。"
          }
        ]
      },
      "sec-mistakes": {
        "h2": "使用高面积公式时的常见错误",
        "blocks": [
          {
            "kind": "p",
            "text": "本页的大多数错误答案来自标错的输入，而不是糟糕的算术。下面十八个错误几乎涵盖了全部。"
          },
          {
            "kind": "h3",
            "text": "1. 用直角边代替高"
          },
          {
            "kind": "p",
            "text": "高 [[h]] 从直角顶点引向斜边；直角边沿着三角形的边缘。在 6-8-10 三角形中，把直角边 6 当作高输入，得到 [[(10\\times6)/2=30]] 而不是 24。改正方法：高必须带着直角标记落在斜边上。"
          },
          {
            "kind": "h3",
            "text": "2. 把高和斜边弄混"
          },
          {
            "kind": "p",
            "text": "交换 [[c]] 和 [[h]] 会改变乘积的含义。当 [[c=10]]、[[h=4.8]] 时，数字在乘法中可交换，但可行性检查 [[h\\leq c/2]] 会被破坏：交换后的输入声称斜边 4.8 上有高 10，这是不可能的。改正方法：斜边始终是最长的边。"
          },
          {
            "kind": "h3",
            "text": "3. 从错误的顶点引高"
          },
          {
            "kind": "p",
            "text": "只有从直角顶点 [[C]] 引出的高才与斜边配对作为底。从锐角顶点引出的垂线落在直角边上，而不是斜边上，不属于这个公式。改正方法：从直角标记处开始。"
          },
          {
            "kind": "h3",
            "text": "4. 高与斜边不成垂直角度量"
          },
          {
            "kind": "p",
            "text": "从 [[C]] 到斜边的任何不垂直的线段都比真正的高长，所以面积会偏大。改正方法：通过作图或用 [[h=ab/c]] 验证 90 度的相交。"
          },
          {
            "kind": "h3",
            "text": "5. 用的高对应的是另一条底"
          },
          {
            "kind": "p",
            "text": "斜边上的高只与斜边配对。把它和直角边配对，如 [[(8\\times4.8)/2=19.2]]，混淆了两组不同的底高配对。改正方法：每个高恰好属于一条底。"
          },
          {
            "kind": "h3",
            "text": "6. 忘记除以二"
          },
          {
            "kind": "p",
            "text": "[[10\\times4.8=48]] 是平行四边形的面积，不是三角形的。改正方法：每次底高计算都以除以二收尾。"
          },
          {
            "kind": "h3",
            "text": "7. 用不兼容的单位相乘"
          },
          {
            "kind": "p",
            "text": "斜边 2 米配高 150 厘米，[[(2\\times150)/2=150]] 得不出任何有意义的东西。改正方法：先统一到一个单位，这里是 2 米和 1.5 米，得到 1.5 平方米。"
          },
          {
            "kind": "h3",
            "text": "8. 答案用线性单位报告"
          },
          {
            "kind": "p",
            "text": "24 平方米的面积不是 24 米。改正方法：数字后面永远带上平方单位。"
          },
          {
            "kind": "h3",
            "text": "9. 输入零或负的长度"
          },
          {
            "kind": "p",
            "text": "要求 [[c>0]] 且 [[h>0]]；零或负的输入描述不了任何三角形。改正方法：重新测量。"
          },
          {
            "kind": "h3",
            "text": "10. 输入的高大于斜边的一半"
          },
          {
            "kind": "p",
            "text": "[[c=10]]、[[h=6]] 违反了 [[h\\leq c/2]]。改正方法：重新检查量的是哪一段；它不是垂直高。"
          },
          {
            "kind": "h3",
            "text": "11. 以为每一对正数都构成直角三角形"
          },
          {
            "kind": "p",
            "text": "正数还不够，高上限也必须成立。改正方法：对每一组新数据都运行 [[h\\leq c/2]] 检查。"
          },
          {
            "kind": "h3",
            "text": "12. 把高误认为竖直的直角边"
          },
          {
            "kind": "p",
            "text": "在图中高可能看起来是竖直的而直角边是倾斜的，旋转后也可能反过来。屏幕上的竖直没有任何意义。改正方法：按几何角色而不是屏幕方向识别各边。"
          },
          {
            "kind": "h3",
            "text": "13. 高过早舍入"
          },
          {
            "kind": "p",
            "text": "把 [[60/13\\approx4.61538]] 取成 4.6 再计算，面积会略有偏差，而精确分数能干净地约成 30。改正方法：保持完整精度直到最终答案。"
          },
          {
            "kind": "h3",
            "text": "14. 以为斜边必须是水平的"
          },
          {
            "kind": "p",
            "text": "斜边可以处于任何角度；公式用的是长度，不是方向。改正方法：相信测量值，而不是图的旋转。"
          },
          {
            "kind": "h3",
            "text": "15. 把高定理和勾股定理弄混"
          },
          {
            "kind": "p",
            "text": "[[h^2=pq]] 把高和斜边上的两段联系起来；[[a^2+b^2=c^2]] 把三条边联系起来。它们回答的是不同的问题。改正方法：根据手头有的量选择对应的定理。"
          },
          {
            "kind": "h3",
            "text": "16. 用了从另一个三角形量出的高"
          },
          {
            "kind": "p",
            "text": "高属于特定的一个三角形。把 6-8-10 三角形的 4.8 借给另一个斜边，面积会算错。改正方法：每次计算都用自己三角形的测量值。"
          },
          {
            "kind": "h3",
            "text": "17. 以为面积决定了每条边的长度"
          },
          {
            "kind": "p",
            "text": "很多不同的直角三角形可以共享一个面积。知道 [[K=24]] 并不能单独确定 [[c]] 或 [[h]]。改正方法：把面积看作一个方程，而不是完整描述。"
          },
          {
            "kind": "h3",
            "text": "18. 把几何面积当作要购买的精确材料"
          },
          {
            "kind": "p",
            "text": "公式给出的是理想的几何面积。实际项目还需要在上面加上损耗、搭接和切割余量。改正方法：几何算完之后再加项目余量。"
          },
          {
            "kind": "h3",
            "text": "错误与正确：一个具体例子"
          },
          {
            "kind": "p",
            "text": "已知 [[c=10]] 和 [[h=4.8]]，错误的计算跳过了除以二：[[K=10\\times4.8=48]]。那是对应平行四边形的面积。正确的计算是 [[K=(10\\times4.8)/2]]，[[[\\boxed{K=24}]]]。第二个例子：把直角边 8 代入高的位置得到 [[(10\\times8)/2=40]]，错误的原因是 8 与斜边不垂直。只有高，也只能是高，才能和 [[c]] 配对。"
          }
        ]
      },
      "sec-verify": {
        "h2": "如何检查你的面积计算是否正确",
        "blocks": [
          {
            "kind": "p",
            "text": "七项检查能在结果离开本页之前抓住绝大多数错误答案。"
          },
          {
            "kind": "h3",
            "text": "检查 1：正数输入"
          },
          {
            "kind": "p",
            "text": "有效的直角三角形要求 [[c>0]] 且 [[h>0]]。零或负的长度描述不了任何三角形。"
          },
          {
            "kind": "h3",
            "text": "检查 2：高上限"
          },
          {
            "kind": "p",
            "text": "确认 [[h\\leq c/2]]。这一个不等式就能排除最常见的无效输入，例如 [[c=10]] 配 [[h=6]]。"
          },
          {
            "kind": "h3",
            "text": "检查 3：确认直角"
          },
          {
            "kind": "p",
            "text": "高必须垂直于斜边。如果图纸或测量无法确认 90 度的相交，这个输入就不是高。"
          },
          {
            "kind": "h3",
            "text": "检查 4：平方单位"
          },
          {
            "kind": "p",
            "text": "米输入得到平方米，厘米输入得到平方厘米。答案的单位是输入单位的平方，绝不是输入单位本身。"
          },
          {
            "kind": "h3",
            "text": "检查 5：用直角边公式交叉验证"
          },
          {
            "kind": "p",
            "text": "对于 6-8-10 三角形，[[(6\\times8)/2=24]]，[[(10\\times4.8)/2=24]]。两种方法，一个三角形，一个答案：一致是最强的验证。"
          },
          {
            "kind": "h3",
            "text": "检查 6：几何平均关系"
          },
          {
            "kind": "p",
            "text": "当斜边上的两段已知时，验证 [[h^2=pq]]：[[4.8^2=6.4\\times3.6]]，[[23.04=23.04]]。不匹配说明高、线段或三角形识别有误。"
          },
          {
            "kind": "h3",
            "text": "检查 7：与最大可能面积对比"
          },
          {
            "kind": "p",
            "text": "斜边固定时，[[K\\leq c^2/4]]。当 [[c=10]] 时，任何超过 25 平方单位的直角三角形面积声称都是不可能的。本页不声明计算器自身的验证行为；这项检查由你自己来做。"
          }
        ]
      },
      "sec-compare": {
        "h2": "用高求面积与用两条直角边求面积的对比",
        "blocks": [
          {
            "kind": "p",
            "text": "两个公式，一个面积。[[K=ab/2]] 需要两条互相垂直的直角边；[[K=ch/2]] 需要斜边及其高。没有哪个更正确；它们是从不同测量值到达的同一个量。"
          }
        ],
        "table": {
          "headers": ["方法", "所需测量值", "主要优点"],
          "rows": [
            ["用直角边求面积", "[[a]]、[[b]]", "两条直角边已知时最简单"],
            ["用高求面积", "[[c]]、[[h]]", "斜边和垂直高已知时最直接"],
            ["用角度求面积", "合适的边和夹角", "已知锐角时有用"],
            ["用内切圆半径求面积", "[[r]]、[[s]]", "在内切圆和半周长问题中有用"]
          ]
        },
        "closingParagraphs": [
          "同一个直角三角形的面积不会因为用了另一种有效方法而改变。选择与手头数字匹配的那一行；当两行都可用时，它们的一致就是免费的正确性检查。"
        ]
      },
      "sec-conclusion": {
        "h2": "斜边及其高就是你需要的一切",
        "blocks": [
          {
            "kind": "p",
            "text": "高方法就是指向最长边的底高规则。一旦确定了斜边、拿到了垂直高，面积就是一次乘法加一次除以二的事，不需要先找回直角边。"
          },
          {
            "kind": "p",
            "text": "它真正的优势在于严谨：垂直性、高上限和几何平均关系，把模糊的三角形草图变成可验证的数字。运行各项检查，在直角边可用时用直角边公式对比，答案就赢得了信任。"
          },
          {
            "kind": "p",
            "text": "当测量值是斜边和高时，就用本页的计算器；当测量值指向别处时，就用直角边、角度或半周长计算器。"
          }
        ]
      }
    },
    "faqs": [
      {
        "question": "用高求直角三角形面积的公式是什么？",
        "answer": "公式是 K = ch/2，其中 c 是斜边，h 是从直角顶点到斜边的垂直高。把两个长度相乘再除以二。结果以与输入对应的平方单位表示，所以米输入得到平方米。高必须与斜边成 90 度相交，公式才适用。"
      },
      {
        "question": "直角三角形中的高 h 是什么意思？",
        "answer": "高 h 是从直角顶点 C 到斜边的垂直线段，交于点 D。它是该顶点到斜边的最短距离，也是与斜边这个底配对的高度。它不是直角边，也不是三角形内部任意画的一条线。"
      },
      {
        "question": "高和其中一条直角边是同一回事吗？",
        "answer": "不是。直角边 a 和 b 构成直角，而高是从该顶点到对边的另一条线段。在 6-8-10 三角形中，高是 4.8，不等于任何一条直角边。把直角边填到高的位置，是这个公式最常见的错误之一。"
      },
      {
        "question": "为什么斜边可以作为底？",
        "answer": "只要知道对应的垂直高度，三角形的任何一边都可以作为底。对于斜边，这个高度就是从直角顶点引出的高。因为两者互相垂直，底乘高除以二的通用规则直接适用，得到 K = ch/2。"
      },
      {
        "question": "为什么斜边和高的乘积要除以二？",
        "answer": "c 乘以 h 的乘积是同底同高的平行四边形的面积。三角形恰好占该平行四边形的一半，所以乘积必须除以二。跳过这一步回答的是另一个问题：当 c = 10、h = 4.8 时，48 是平行四边形，24 才是三角形。"
      },
      {
        "question": "两条直角边已知时如何求高？",
        "answer": "用 h = ab/c。把两条直角边相乘再除以斜边，斜边在需要时可用勾股定理求得。直角边为 6 和 8、斜边为 10 时，h = 48/10 = 4.8。边已知时，本站的边长求高计算器执行的正是这个计算。"
      },
      {
        "question": "直角三角形高的几何平均定理是什么？",
        "answer": "它指出 h 的平方等于 p 乘以 q，其中 p 和 q 是高在斜边上截出的两段。因此高是这两段的几何平均数。当 p = 6.4、q = 3.6 时，h = sqrt(23.04) = 4.8，这也能验证用其他方式求得的高。"
      },
      {
        "question": "高能比斜边的一半长吗？",
        "answer": "不能。对于有效的直角三角形，h 必须满足 0 < h <= c/2。当高把斜边平分为两段时最高，在等腰情形恰好达到 c/2。更大的值，例如 c = 10 时 h = 6，不可能属于斜边为 10 的直角三角形。"
      },
      {
        "question": "只知道斜边和高时如何计算面积？",
        "answer": "直接应用 K = ch/2。不需要重建直角边，因为一条边及其对应高度已经唯一确定了面积。例如 c = 10、h = 4.8 得到 K = 24 平方单位。只需先确认高是垂直的，且不大于斜边的一半。"
      },
      {
        "question": "为什么基于高的公式和直角边公式结果相同？",
        "answer": "两者计算的是同一个三角形的面积。令 ab/2 等于 ch/2，两边乘以二得到 ab = ch，所以 h = ab/c。两个公式在任何一致的直角三角形上代数等价，这就是同时计算两者成为强力验证的原因：一致就证实了输入。"
      },
      {
        "question": "面积结果应该用什么单位？",
        "answer": "使用与输入长度对应的平方单位：米对应平方米，厘米对应平方厘米，毫米对应平方毫米。计算前把所有输入统一到一个单位。记住面积换算要把线性因子平方，所以 1 平方米等于 10,000 平方厘米。"
      },
      {
        "question": "基于高的公式能用于其他三角形吗？",
        "answer": "底乘高除以二的规则适用于每个三角形，只要有一对匹配的垂直底高。这里的特殊之处在于直角三角形的约束：高必须从直角顶点引出，且 h 永远不能超过 c/2。这些限制不适用于锐角或钝角三角形。"
      }
    ],
    "faqHeading": "常见问题",
    "relatedHeading": "探索相关的直角三角形计算器",
    "relatedItems": [
      "直角三角形面积计算器",
      "直角三角形面积计算器（由直角边求面积）",
      "直角三角形高计算器（由边长求高）",
      "直角三角形面积计算器（由半周长求面积）",
      "直角三角形面积计算器（由角度求面积）",
      "直角三角形周长计算器",
      "直角三角形边长计算器"
    ]
  }
};
