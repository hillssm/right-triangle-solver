// inradiusGuideTranslations.bsv.ts: Right Triangle Inradius
// Guide (Page 38 of 45) translation.
export const INRADIUS_B6_SV = {
  "sv": {
      "meta": {
        "title": "Kalkylator för den inskrivna cirkelns radie i en rätvinklig triangel: hitta r från sidorna",
        "description": "Använd kalkylatorn för den inskrivna cirkelns radie i en rätvinklig triangel för att hitta r från kateterna a och b och hypotenusan c, med formeln, ett genomräknat 6-8-10-exempel och steg-för-steg-kontroller.",
        "primaryKeyword": "Kalkylator för den inskrivna cirkelns radie i en rätvinklig triangel",
        "slug": "right-triangle-inradius-calculator",
      },
      "tocHeading": "Guideinnehåll",
      "tocItems": {
        "sec-intro": "Kalkylator för den inskrivna cirkelns radie i en rätvinklig triangel",
        "sec-calculate": "Beräkna den inskrivna cirkelns radie i en rätvinklig triangel",
        "sec-what-inradius": "Vad är den inskrivna cirkelns radie i en rätvinklig triangel?",
        "sec-incircle": "Vad är en inskriven cirkel i en rätvinklig triangels geometri?",
        "sec-incenter": "Att förstå den inskrivna cirkelns medelpunkt i en rätvinklig triangel",
        "sec-formula": "Formel för den inskrivna cirkelns radie i en rätvinklig triangel",
        "sec-why-formula-works": "Varför fungerar formeln för den inskrivna cirkelns radie i en rätvinklig triangel?",
        "sec-how-to-use": "Så använder du kalkylatorn för den inskrivna cirkelns radie i en rätvinklig triangel",
        "sec-step-example": "Steg-för-steg-exempel på att hitta den inskrivna cirkelns radie",
        "sec-diagram": "Diagram över den rätvinkliga triangelns inskrivna cirkel förklarat",
        "sec-area-semiperimeter": "Så beräknar du den inskrivna cirkelns radie med area och semiperimeter",
        "sec-semiperimeter-relation": "Sambandet mellan den inskrivna cirkelns radie och semiperimetern",
        "sec-examples": "Genomräknade exempel på att beräkna den inskrivna cirkelns radie i en rätvinklig triangel",
        "sec-legs-known": "Så beräknar du den inskrivna cirkelns radie när bara de två kateterna är kända",
        "sec-vs-circumradius": "Sambandet mellan den inskrivna cirkelns radie och den omskrivna cirkelns radie",
        "sec-verify": "Så kontrollerar du din beräkning av den inskrivna cirkelns radie",
        "sec-properties": "Viktiga egenskaper hos den inskrivna cirkelns radie i en rätvinklig triangel",
        "sec-mistakes": "Vanliga misstag vid beräkning av den inskrivna cirkelns radie",
        "sec-applications": "Praktiska tillämpningar av den inskrivna cirkelns radie i en rätvinklig triangel",
        "sec-practice": "Övningsuppgifter med svar",
        "sec-related": "Utforska relaterade kalkylatorer för rätvinkliga trianglar",
        "sec-faq": "Vanliga frågor",
      },
      "sections": {
        "sec-intro": {
          "h2": "Kalkylator för den inskrivna cirkelns radie i en rätvinklig triangel",
          "blocks": [
            {
              "kind": "p",
              "text": "Hitta den inskrivna cirkelns radie i en rätvinklig triangel från dess två kateter och hypotenusa.",
            },
            {
              "kind": "p",
              "text": "Den inskrivna cirkelns radie är radien i den inskrivna cirkeln, den cirkel som får plats inuti triangeln och vidrör alla tre sidor. Kalkylatorn behöver tre tal: katet [[a]], katet [[b]] och hypotenusa [[c]], där [[a]] och [[b]] är de sidor som bildar den räta vinkeln och [[c]] är sidan mittemot den. Formeln är [[r = \\frac{a+b-c}{2}]], där [[r]] är den inskrivna cirkelns radie. Den adderar de två kateterna, subtraherar hypotenusan och dividerar resultatet med två.",
            },
            {
              "kind": "p",
              "text": "En 6-8-10-triangel ger till exempel [[r = \\frac{6+8-10}{2} = 2]]. Det 2 är radien i cirkeln inuti triangeln, mätt i samma enhet som sidorna. Cirkeln vidrör varje sida i exakt en punkt, och dess medelpunkt, den inskrivna cirkelns medelpunkt, ligger på samma avstånd från alla tre sidor.",
            },
          ],
        },
        "sec-calculate": {
          "h2": "Beräkna den inskrivna cirkelns radie i en rätvinklig triangel",
          "blocks": [
            {
              "kind": "p",
              "text": "Kalkylatorn på den här sidan har tre inmatningsfält, ett för varje sida i triangeln, och ett resultat. Skriv in de tre sidlängderna, alla i samma enhet, och klicka sedan på Beräkna inskrivna cirkelns radie r. Resultatet är en längd, radien i den inskrivna cirkeln, angiven i samma enhet.",
            },
            {
              "kind": "p",
              "text": "Katet a är den första sidan som bildar den räta vinkeln, och katet b är den andra. Det spelar ingen roll vilken katet du kallar [[a]] och vilken du kallar [[b]], eftersom formeln adderar dem. Hypotenusan [[c]] är sidan mittemot den räta vinkeln, och den måste vara triangelns längsta sida. Om talet som skrivs in för [[c]] är kortare än en katet kan de tre längderna inte bilda en rätvinklig triangel, och resultatet blir inte meningsfullt.",
            },
            {
              "kind": "p",
              "text": "Håll enheterna desamma i alla tre fält. Om [[a]] och [[b]] är i centimeter måste [[c]] också vara i centimeter, och svaret kommer ut i centimeter. Läs svaret som en radie, inte som en diameter: en radie går från cirkelns medelpunkt till dess kant, medan en diameter går hela vägen tvärs över. Använd Återställ för att rensa fälten innan du börjar på en ny uppgift.",
            },
          ],
        },
        "sec-what-inradius": {
          "h2": "Vad är den inskrivna cirkelns radie i en rätvinklig triangel?",
          "blocks": [
            {
              "kind": "p",
              "text": "Den inskrivna cirkelns radie i en rätvinklig triangel är radien i dess inskrivna cirkel, den största cirkel som får plats inuti triangeln. Tänk dig triangeln ABC med den räta vinkeln vid C, katet AC kallad [[a]], katet BC kallad [[b]] och hypotenusa AB kallad [[c]]. Rita nu den största cirkel du kan inuti den triangeln utan att korsa någon sida. Den cirkeln vidrör alla tre sidor, och dess radie är den inskrivna cirkelns radie, skriven [[r]].",
            },
            {
              "kind": "p",
              "text": "Medelpunkten i den inskrivna cirkeln kallas den inskrivna cirkelns medelpunkt, skriven [[I]]. Den inskrivna cirkelns medelpunkt ligger på samma vinkelräta avstånd från alla tre sidor, och det avståndet är [[r]]. Varje radie som dras från [[I]] till en sida möter den sidan i en rät vinkel, vilket är anledningen till att cirkeln bara precis vidrör sidan i stället för att korsa den. Den inskrivna cirkeln stannar inuti triangeln eftersom varje punkt på cirkeln ligger på avståndet [[r]] eller mindre från [[I]], och [[I]] själv ligger inuti triangeln.",
            },
            {
              "kind": "p",
              "text": "Ett litet exempel gör idén konkret. I en 3-4-5-triangel är den inskrivna cirkelns radie [[r = \\frac{3+4-5}{2} = 1]]. Den inskrivna cirkeln har radien 1 enhet, så dess medelpunkt ligger 1 enhet från varje sida. <a href=\"/right-triangle-radius-calculator/\">Kalkylatorn för rätvinkliga trianglars radie</a> täcker båda radierna i en rätvinklig triangel på en sida, om du vill jämföra den inskrivna cirkeln med cirkeln genom hörnen.",
            },
          ],
          "image": {
            "src": "inradius-main-incircle.svg",
            "alt": "Rätvinklig triangel ABC med den inskrivna cirkeln inuti den, medelpunkt I och radie r som vidrör alla tre sidor",
            "caption": "Triangeln ABC med sin inskrivna cirkel: medelpunkt I ligger på avståndet r från varje sida.",
          },
        },
        "sec-incircle": {
          "h2": "Vad är en inskriven cirkel i en rätvinklig triangels geometri?",
          "blocks": [
            {
              "kind": "p",
              "text": "En inskriven cirkel är en cirkel som ritas helt inuti en triangel så att den vidrör, eller tangerar, alla tre sidor. Varje sida i triangeln är en tangent till cirkeln: den möter cirkeln i exakt en punkt och skär inte igenom den. De tre mötespunkterna kallas tangeringspunkter, en på varje sida.",
            },
            {
              "kind": "p",
              "text": "Radien som dras från den inskrivna cirkelns medelpunkt till en tangeringspunkt är alltid vinkelrät mot den sidan. Detta är ett allmänt faktum om cirklar: en radie till en tangeringspunkt möter tangenten i en rät vinkel. Eftersom den inskrivna cirkelns medelpunkt ligger på samma avstånd från alla tre sidor har de tre radierna till de tre tangeringspunkterna alla samma längd [[r]], så en enda cirkel passar alla tre sidor på en gång.",
            },
            {
              "kind": "p",
              "text": "Varje triangel har exakt en inskriven cirkel. Triangelns tre vinkelbisektriser möts i en punkt, den inskrivna cirkelns medelpunkt, och avståndet från den punkten till sidorna bestämmer radien. En andra, annorlunda cirkel skulle inte kunna vidröra alla tre sidor inifrån, eftersom dess medelpunkt också skulle behöva ligga lika långt från alla tre sidor, och bara den inskrivna cirkelns medelpunkt har den egenskapen. Observera att den inskrivna cirkeln inte är cirkeln genom hörnen: den vidrör sidorna inifrån och når aldrig ett hörn.",
            },
          ],
          "image": {
            "src": "inradius-tangency-points.svg",
            "alt": "Inskriven cirkel som vidrör alla tre sidor i en rätvinklig triangel i tre tangeringspunkter med vinkelräta radier",
            "caption": "Tre tangeringspunkter: varje radie möter sin sida i 90 grader.",
          },
        },
        "sec-incenter": {
          "h2": "Att förstå den inskrivna cirkelns medelpunkt i en rätvinklig triangel",
          "blocks": [
            {
              "kind": "p",
              "text": "Den inskrivna cirkelns medelpunkt i en triangel är den punkt där dess tre inre vinkelbisektriser möts. En vinkelbisektris är en linje som delar en vinkel i två lika halvor. Rita bisektrisen för vinkel A, bisektrisen för vinkel B och bisektrisen för vinkel C, så korsar alla tre varandra i en enda punkt. Den punkten är den inskrivna cirkelns medelpunkt [[I]], och den är medelpunkten i den inskrivna cirkeln.",
            },
            {
              "kind": "p",
              "text": "Den inskrivna cirkelns medelpunkt ligger lika långt från alla tre sidor på grund av hur vinkelbisektriser beter sig. Varje punkt på bisektrisen till en vinkel ligger på samma avstånd från de två sidor som bildar den vinkeln. En punkt på två bisektriser samtidigt ligger därför på samma avstånd från alla tre sidor, och den inskrivna cirkelns medelpunkt ligger på alla tre bisektriser. Det gemensamma avståndet är den inskrivna cirkelns radie [[r]], så cirkeln med medelpunkt i [[I]] och radien [[r]] vidrör varje sida.",
            },
            {
              "kind": "p",
              "text": "För en rätvinklig triangel med den räta vinkeln vid C ligger den inskrivna cirkelns medelpunkt längs bisektrisen till 90-gradersvinkeln, som går diagonalt över hörnet vid C i 45 grader mot varje katet. Den inskrivna cirkelns medelpunkt ligger alltid inuti triangeln, aldrig på en sida eller utanför den, eftersom de tre bisektriserna möts i det inre. Det är anledningen till att den inskrivna cirkeln får plats inuti triangeln i stället för att spilla ut ur den.",
            },
          ],
          "image": {
            "src": "inradius-angle-bisectors.svg",
            "alt": "Rätvinklig triangel med alla tre inre vinkelbisektriser som möts i den inskrivna cirkelns medelpunkt I",
            "caption": "De tre vinkelbisektriserna möts i I, den inskrivna cirkelns medelpunkt, på avståndet r från varje sida.",
          },
        },
        "sec-formula": {
          "h2": "Formel för den inskrivna cirkelns radie i en rätvinklig triangel",
          "blocks": [
            {
              "kind": "p",
              "text": "Formeln för den inskrivna cirkelns radie i en rätvinklig triangel är kort nog att komma ihåg vid en snabb titt:",
            },
            {
              "kind": "p",
              "text": "[[[r = \\frac{a+b-c}{2}]]]",
            },
            {
              "kind": "p",
              "text": "Här är [[r]] den inskrivna cirkelns radie, [[a]] är den första kateten, [[b]] är den andra kateten och [[c]] är hypotenusan. Formeln fungerar i tre steg, och varje steg har en tydlig betydelse.",
            },
            {
              "kind": "p",
              "text": "Steg 1: addera de två kateterna, [[a+b]]. Den samlade längden är alltid längre än hypotenusan, eftersom de två kateterna tillsammans sträcker sig längre än den raka linjen tvärs över. Steg 2: subtrahera hypotenusan, [[a+b-c]]. Då återstår det belopp med vilket kateterna överstiger hypotenusan. Steg 3: dividera med två, [[r = \\frac{a+b-c}{2}]]. Divisionen förvandlar den återstående längden till radien i den inskrivna cirkeln, och avsnittet om härledningen nedan visar varför halvering är precis rätt.",
            },
            {
              "kind": "p",
              "text": "Ta 6-8-10-triangeln: [[a+b = 14]], sedan [[14-10 = 4]], sedan [[\\frac{4}{2} = 2]], så [[r = 2]]. Formeln gäller bara för rätvinkliga trianglar. För en triangel som inte är rätvinklig är den inskrivna cirkelns radie fortfarande lika med arean dividerad med semiperimetern, [[r = \\frac{A}{s}]], men genvägen [[r = \\frac{a+b-c}{2}]] gäller inte, eftersom dess bevis beror på den räta vinkeln.",
            },
          ],
          "image": {
            "src": "inradius-formula.svg",
            "alt": "Rätvinklig triangel märkt med kateterna a och b, hypotenusan c, den inskrivna cirkelns medelpunkt I och den inskrivna cirkelns radie r bredvid formeln r är lika med a plus b minus c genom 2",
            "caption": "Formeln använder alla tre sidor: addera kateterna, subtrahera hypotenusan, dividera med två.",
          },
        },
        "sec-why-formula-works": {
          "h2": "Varför fungerar formeln för den inskrivna cirkelns radie i en rätvinklig triangel?",
          "blocks": [
            {
              "kind": "p",
              "text": "Formeln kommer från ett enkelt faktum om tangenter: de två tangentsträckorna som dras från samma punkt utanför en cirkel till den cirkeln har lika längder. Varje hörn i triangeln ligger utanför den inskrivna cirkeln, och de två sidor som möts vid det hörnet är båda tangenter till cirkeln. Så de två tangentsträckorna från varje hörn är lika.",
            },
            {
              "kind": "p",
              "text": "Börja vid hörnet med den räta vinkeln, C. De två sidor som möts vid C är kateterna, och den inskrivna cirkeln vidrör varje katet i en punkt som ligger på avståndet [[r]] från C längs sidan. Detta beror på att de två radierna från den inskrivna cirkelns medelpunkt till kateterna, tillsammans med de två korta sträckorna längs kateterna, bildar en kvadrat med sidan [[r]] vid hörnet C. Så tangentsträckan från C längs vardera kateten har längden [[r]].",
            },
            {
              "kind": "p",
              "text": "Titta nu på de två andra hörnen. Låt [[x]] vara tangentlängden från hörn A längs sidorna, och låt [[y]] vara tangentlängden från hörn B. Vid hörn A går en tangent längs katet [[a]] mot C och den andra längs hypotenusan mot B, så båda har längden [[x]]. Vid hörn B har båda tangenterna längden [[y]]. Sidlängderna byggs då upp av dessa delar:",
            },
            {
              "kind": "p",
              "text": "[[[a = r + x]]]",
            },
            {
              "kind": "p",
              "text": "[[[b = r + y]]]",
            },
            {
              "kind": "p",
              "text": "[[[c = x + y]]]",
            },
            {
              "kind": "p",
              "text": "Addera de två första ekvationerna: [[a+b = 2r+x+y]]. Eftersom [[x+y = c]] blir detta [[a+b = 2r+c]]. Omflyttning ger [[2r = a+b-c]], och division med två ger formeln, [[r = \\frac{a+b-c}{2}]]. Varje steg följer av lika tangentlängder, så formeln är inte ett knep att memorera, den är ett direkt resultat av hur den inskrivna cirkeln vidrör sidorna.",
            },
          ],
        },
        "sec-how-to-use": {
          "h2": "Så använder du kalkylatorn för den inskrivna cirkelns radie i en rätvinklig triangel",
          "blocks": [
            {
              "kind": "p",
              "text": "Fjorton korta steg tar dig från en märkt triangel till ett kontrollerat svar. Stegen i ordning är:",
            },
            {
              "kind": "steps",
              "steps": [
                "Identifiera den rätvinkliga triangeln i din uppgift och bekräfta att den har en rät vinkel.",
                "Leta reda på hörnet med den räta vinkeln, vanligtvis markerat med en liten kvadrat, och kalla det C.",
                "Identifiera den första vinkelräta kateten a, en av de två sidor som bildar den räta vinkeln.",
                "Identifiera den andra vinkelräta kateten b, den andra sidan som bildar den räta vinkeln.",
                "Identifiera hela hypotenusan c, sidan mittemot den räta vinkeln.",
                "Bekräfta att c är den längsta sidan. Om den inte är det, märk om diagrammet innan du fortsätter.",
                "Kontrollera att de tre sidorna uppfyller Pythagoras sats, [[a^2+b^2 = c^2]].",
                "Välj kompatibla måttenheter och omvandla varje mått som använder en annan enhet.",
                "Skriv in katet a i fältet Katet a.",
                "Skriv in katet b i fältet Katet b.",
                "Skriv in hypotenusan c i fältet Hypotenusa c.",
                "Klicka på Beräkna inskrivna cirkelns radie r och läs av resultatet.",
                "Kontrollera resultatet: det måste vara positivt, i samma enhet som sidorna och mindre än vardera kateten.",
                "Använd Återställ när du börjar en ny beräkning.",
              ],
            },
            {
              "kind": "p",
              "text": "Att skriva in fel sida som [[c]] är det fel som orsakar mest besvär. Om en katet skrivs in i hypotenusafältet subtraherar formeln en katet i stället för hypotenusan, och svaret blir för stort. Kontrollera alltid att värdet i hypotenusafältet är det längsta av de tre innan du klickar på Beräkna.",
            },
          ],
        },
        "sec-step-example": {
          "h2": "Steg-för-steg-exempel på att hitta den inskrivna cirkelns radie",
          "blocks": [
            {
              "kind": "p",
              "text": "Använd exemplet från toppen av sidan, [[a = 6]], [[b = 8]] och [[c = 10]]. De fem stegen nedan visar hela uträkningen, utan att något hoppas över.",
            },
            {
              "kind": "steps",
              "steps": [
                "Skriv formeln: [[r = \\frac{a+b-c}{2}]].",
                "Sätt in värdena: [[r = \\frac{6+8-10}{2}]].",
                "Addera kateterna: [[r = \\frac{14-10}{2}]].",
                "Subtrahera hypotenusan: [[r = \\frac{4}{2}]].",
                "Dividera: [[r = 2]].",
              ],
            },
            {
              "kind": "p",
              "text": "Svaret 2 betyder att den inskrivna cirkeln har radien 2 enheter, i samma enhet som sidorna. Dess medelpunkt ligger 2 enheter från varje sida, och cirkeln vidrör varje sida i exakt en punkt.",
            },
            {
              "kind": "p",
              "text": "Kontrollera att måtten bildar en rätvinklig triangel innan du litar på svaret: [[6^2+8^2 = 36+64 = 100 = 10^2]], så Pythagoras sats gäller och triangeln är verkligen rätvinklig. En andra kontroll använder area och semiperimeter, [[A = \\frac{6 \\times 8}{2} = 24]] och [[s = \\frac{6+8+10}{2} = 12]], vilket ger [[r = \\frac{24}{12} = 2]], samma svar på en annan väg.",
            },
          ],
          "image": {
            "src": "inradius-example-6-8-10.svg",
            "alt": "Genomräknat exempel med a lika med 6, b lika med 8, c lika med 10 och den inskrivna cirkelns radie r lika med 2, inskriven cirkel som vidrör alla tre sidor",
            "caption": "Genomräknat exempel: a = 6, b = 8, c = 10 ger r = 2, kontrollerat med area och semiperimeter.",
          },
        },
        "sec-diagram": {
          "h2": "Diagram över den rätvinkliga triangelns inskrivna cirkel förklarat",
          "blocks": [
            {
              "kind": "p",
              "text": "Diagrammet visar triangeln ABC med den räta vinkeln vid C. Sidan AC är katet [[a]], sidan BC är katet [[b]] och sidan AB är hypotenusan [[c]]. Punkten [[I]] markerar den inskrivna cirkelns medelpunkt inuti triangeln, och en cirkel med medelpunkt i [[I]] vidrör alla tre sidor.",
            },
            {
              "kind": "p",
              "text": "Läs diagrammet i den här ordningen. Börja vid A, gå längs katet [[a]] ner till C, sedan längs katet [[b]] över till B, och sedan tillbaka längs hypotenusan från B till A. Den inskrivna cirkeln ligger inuti denna gräns och vidrör katet [[a]] i en punkt, katet [[b]] i en andra punkt och hypotenusan i en tredje punkt. Från [[I]] går tre korta sträckor till de tre punkterna, och var och en är en radie med längden [[r]].",
            },
            {
              "kind": "p",
              "text": "Varje radie möter sin sida i en rät vinkel, vilket är tecknet på en tangent: sidan nuddar bara cirkeln vid den punkten i stället för att skära tvärs över den. Alla tre radier har samma längd, vilket är anledningen till att en cirkel kan vidröra alla tre sidor på en gång. Cirkeln går inte genom något hörn: hörnen ligger utanför cirkeln, och tangentsträckorna från varje hörn till cirkeln är längderna [[r]], [[x]] och [[y]] som används i härledningen ovan.",
            },
          ],
        },
        "sec-area-semiperimeter": {
          "h2": "Så beräknar du den inskrivna cirkelns radie med area och semiperimeter",
          "blocks": [
            {
              "kind": "p",
              "text": "Det finns ett andra sätt att hitta den inskrivna cirkelns radie, med triangelns area och semiperimeter:",
            },
            {
              "kind": "p",
              "text": "[[[r = \\frac{A}{s}]]]",
            },
            {
              "kind": "p",
              "text": "Här är [[A]] triangelns area och [[s]] är semiperimetern, halva omkretsen. För en rätvinklig triangel är arean halva produkten av kateterna, [[A = \\frac{ab}{2}]], eftersom de två kateterna fungerar som bas och höjd. Semiperimetern är [[s = \\frac{a+b+c}{2}]]. <a href=\"/right-triangle-area-calculator/\">Kalkylatorn för rätvinkliga trianglars area</a> hittar [[A]] från de två kateterna, och <a href=\"/right-triangle-semiperimeter-calculator/\">kalkylatorn för rätvinkliga trianglars semiperimeter</a> hittar [[s]] från alla tre sidor.",
            },
            {
              "kind": "p",
              "text": "Att sätta in uttrycken för den rätvinkliga triangeln ger [[r = \\frac{ab/2}{(a+b+c)/2}]], och halvorna tar ut varandra och lämnar [[r = \\frac{ab}{a+b+c}]]. Detta är den likvärdiga sidlängdsformeln från början av guiden, och den ger samma svar som [[r = \\frac{a+b-c}{2}]] för varje giltig rätvinklig triangel, eftersom de två uttrycken är lika när [[a^2+b^2 = c^2]].",
            },
            {
              "kind": "p",
              "text": "Använd 6-8-10-triangeln för att se att båda vägarna stämmer överens. Arean är [[A = \\frac{6 \\times 8}{2} = 24]], och semiperimetern är [[s = \\frac{6+8+10}{2} = 12]], så [[r = \\frac{24}{12} = 2]]. Standardformeln ger samma resultat, [[r = \\frac{6+8-10}{2} = 2]]. Kalkylatorn på den här sidan använder formeln med tre sidor, och areavägen är en användbar oberoende kontroll.",
            },
          ],
          "image": {
            "src": "inradius-area-semiperimeter.svg",
            "alt": "Rätvinklig triangel uppdelad i tre mindre trianglar som delar den inskrivna cirkelns medelpunkt och visar att area är lika med r gånger s",
            "caption": "Tre trianglar som delar I: deras areor summeras till A = r gånger s.",
          },
        },
        "sec-semiperimeter-relation": {
          "h2": "Sambandet mellan den inskrivna cirkelns radie och semiperimetern",
          "blocks": [
            {
              "kind": "p",
              "text": "Semiperimetern [[s]] är halva triangelns omkrets:",
            },
            {
              "kind": "p",
              "text": "[[[s = \\frac{a+b+c}{2}]]]",
            },
            {
              "kind": "p",
              "text": "Den kallas semiperimeter eftersom semi betyder halv: hela omkretsen är [[P = a+b+c]], och semiperimetern är halva den. Blanda inte ihop de två. Omkretsen är den totala längden runt triangeln, medan semiperimetern är ett kortare hjälpvärde som dyker upp i areaformler och i formeln för den inskrivna cirkelns radie [[r = \\frac{A}{s}]].",
            },
            {
              "kind": "p",
              "text": "Semiperimetern ensam kan inte bestämma den inskrivna cirkelns radie, eftersom formeln [[r = \\frac{A}{s}]] också behöver arean [[A]]. Två trianglar kan ha samma semiperimeter och olika areor, och då skiljer sig också deras inskrivna cirklers radier. Arean bär informationen om formen som semiperimetern lämnar ut. För 6-8-10-triangeln är [[s = 12]] och [[A = 24]], så [[r = \\frac{24}{12} = 2]]. En annan triangel med [[s = 12]] men en mindre area skulle ha en mindre inskriven cirkels radie.",
            },
            {
              "kind": "p",
              "text": "Det finns ett snyggt sätt att se varför [[A = rs]] gäller. Förbind den inskrivna cirkelns medelpunkt [[I]] med de tre hörnen och dela triangeln i tre mindre trianglar. Varje liten triangel har höjden [[r]] och en bas som är lika med en sida i den stora triangeln, så deras areor är [[\\frac{ra}{2}]], [[\\frac{rb}{2}]] och [[\\frac{rc}{2}]]. Att addera dem ger [[A = \\frac{r(a+b+c)}{2} = r \\times s]], eftersom [[s = \\frac{a+b+c}{2}]]. Division med [[s]] ger [[r = \\frac{A}{s}]].",
            },
          ],
        },
        "sec-examples": {
          "h2": "Genomräknade exempel på att beräkna den inskrivna cirkelns radie i en rätvinklig triangel",
          "blocks": [
            {
              "kind": "h3",
              "text": "Exempel 1: Grundläggande 3-4-5-triangel",
            },
            {
              "kind": "p",
              "text": "Givet [[a = 3]], [[b = 4]] och [[c = 5]] ger formeln [[r = \\frac{3+4-5}{2} = \\frac{2}{2} = 1]]. Den inskrivna cirkeln har radien 1 enhet. Kontrollera triangeln först: [[3^2+4^2 = 9+16 = 25 = 5^2]], så det är en giltig rätvinklig triangel.",
            },
            {
              "kind": "h3",
              "text": "Exempel 2: 6-8-10-triangeln igen",
            },
            {
              "kind": "p",
              "text": "Givet [[a = 6]], [[b = 8]] och [[c = 10]] är [[r = \\frac{6+8-10}{2} = \\frac{4}{2} = 2]]. Den inskrivna cirkeln har radien 2 enheter, dubbelt så stor som radien i 3-4-5-triangeln, eftersom den här triangeln är 3-4-5-triangeln uppskalad med en faktor 2. Kontroll: [[6^2+8^2 = 36+64 = 100 = 10^2]].",
            },
            {
              "kind": "h3",
              "text": "Exempel 3: 5-12-13-triangel",
            },
            {
              "kind": "p",
              "text": "Givet [[a = 5]], [[b = 12]] och [[c = 13]] är [[r = \\frac{5+12-13}{2} = \\frac{4}{2} = 2]]. Den inskrivna cirkelns radie är 2 enheter, samma som i 6-8-10-triangeln, trots att triangeln är större och har en annan form. Kontroll: [[5^2+12^2 = 25+144 = 169 = 13^2]].",
            },
            {
              "kind": "h3",
              "text": "Exempel 4: 8-15-17-triangel",
            },
            {
              "kind": "p",
              "text": "Givet [[a = 8]], [[b = 15]] och [[c = 17]] är [[r = \\frac{8+15-17}{2} = \\frac{6}{2} = 3]]. Den inskrivna cirkeln har radien 3 enheter. Kontroll: [[8^2+15^2 = 64+225 = 289 = 17^2]].",
            },
            {
              "kind": "h3",
              "text": "Exempel 5: Större mått",
            },
            {
              "kind": "p",
              "text": "Givet [[a = 9]], [[b = 12]] och [[c = 15]] är [[r = \\frac{9+12-15}{2} = \\frac{6}{2} = 3]]. Detta är 3-4-5-triangeln uppskalad med 3, så den inskrivna cirkelns radie är 3 gånger den inskrivna cirkelns radie 1 i 3-4-5-triangeln. Kontroll: [[9^2+12^2 = 81+144 = 225 = 15^2]].",
            },
            {
              "kind": "h3",
              "text": "Exempel 6: Decimalmått",
            },
            {
              "kind": "p",
              "text": "Givet [[a = 4.5]], [[b = 6]] och [[c = 7.5]] är [[r = \\frac{4.5+6-7.5}{2} = \\frac{3}{2} = 1.5]]. Den inskrivna cirkelns radie är 1.5 enheter. Decimaler ändrar ingenting om metoden: addera, subtrahera, dividera med två. Kontroll: [[4.5^2+6^2 = 20.25+36 = 56.25 = 7.5^2]].",
            },
            {
              "kind": "h3",
              "text": "Exempel 7: Olika enheter",
            },
            {
              "kind": "p",
              "text": "Givet [[a = 30]] cm, [[b = 40]] cm och [[c = 0.5]] m, omvandla hypotenusan först: 0.5 m är lika med 50 cm, eftersom 1 m är 100 cm. Nu använder alla tre sidor centimeter, så [[r = \\frac{30+40-50}{2} = \\frac{20}{2} = 10]] cm. Kontroll: [[30^2+40^2 = 900+1600 = 2500 = 50^2]]. Att blanda meter och centimeter utan att omvandla ger ett felaktigt svar, så omvandla alltid först.",
            },
            {
              "kind": "h3",
              "text": "Exempel 8: Större decimalvärden",
            },
            {
              "kind": "p",
              "text": "Givet [[a = 7.2]], [[b = 9.6]] och [[c = 12]] är [[r = \\frac{7.2+9.6-12}{2} = \\frac{4.8}{2} = 2.4]]. Den inskrivna cirkelns radie är 2.4 enheter. Detta är 3-4-5-triangeln uppskalad med 2.4, så den inskrivna cirkelns radie är 2.4 gånger den inskrivna cirkelns radie 1 i 3-4-5-triangeln. Kontroll: [[7.2^2+9.6^2 = 51.84+92.16 = 144 = 12^2]].",
            },
          ],
        },
        "sec-legs-known": {
          "h2": "Så beräknar du den inskrivna cirkelns radie när bara de två kateterna är kända",
          "blocks": [
            {
              "kind": "p",
              "text": "Kalkylatorn på den här sidan kräver alla tre sidlängder, så den kan inte köras på bara de två kateterna. Om bara [[a]] och [[b]] är kända, hitta hypotenusan först med Pythagoras sats och använd sedan formeln för den inskrivna cirkelns radie. De två stegen är:",
            },
            {
              "kind": "p",
              "text": "[[[c = \\sqrt{a^2+b^2}]]]",
            },
            {
              "kind": "p",
              "text": "[[[r = \\frac{a+b-c}{2}]]]",
            },
            {
              "kind": "p",
              "text": "Använd [[a = 6]] och [[b = 8]]. Beräkna först hypotenusan: [[c = \\sqrt{36+64} = \\sqrt{100} = 10]]. Beräkna sedan den inskrivna cirkelns radie: [[r = \\frac{6+8-10}{2} = 2]]. <a href=\"/right-triangle-side-calculator/\">Kalkylatorn för rätvinkliga trianglars sidor</a> hittar den saknade hypotenusan från två kateter, vilket är samma första steg som används här, och <a href=\"/pythagorean-theorem-calculator/\">kalkylatorn för Pythagoras sats</a> gör samma beräkning direkt. Hoppa inte över det första steget: att skriva in en katet i hypotenusafältet ger en felaktig inskriven cirkels radie, som avsnittet om misstag nedan visar.",
            },
          ],
        },
        "sec-vs-circumradius": {
          "h2": "Sambandet mellan den inskrivna cirkelns radie och den omskrivna cirkelns radie",
          "blocks": [
            {
              "kind": "p",
              "text": "Den inskrivna cirkelns radie [[r]] och den omskrivna cirkelns radie [[R]] är de två radierna i en rätvinklig triangel, och de beskriver två olika cirklar. Den inskrivna cirkelns radie är radien i den inskrivna cirkeln, den cirkel inuti triangeln som vidrör alla tre sidor. Den omskrivna cirkelns radie är radien i den omskrivna cirkeln, den cirkel utanför triangeln som går genom alla tre hörn. Den ena cirkeln ligger inuti triangeln, den andra omger den.",
            },
            {
              "kind": "p",
              "text": "För en rätvinklig triangel är den omskrivna cirkelns radie [[R = \\frac{c}{2}]], eftersom hypotenusan är diametern i den omskrivna cirkeln. Den inskrivna cirkelns radie är [[r = \\frac{a+b-c}{2}]], som behöver alla tre sidor, eftersom hur nära den inskrivna cirkeln passar beror på triangelns form, inte bara på dess längsta sida. Använd 6-8-10-triangeln för att se skillnaden i tal: [[r = 2]] och [[R = 5]].",
            },
            {
              "kind": "p",
              "text": "Medelpunkterna skiljer sig också. Den inskrivna cirkelns medelpunkt ligger inuti triangeln, där vinkelbisektriserna möts, på avståndet [[r]] från varje sida. Den omskrivna cirkelns medelpunkt ligger vid hypotenusans mittpunkt, på triangelns gräns, på avståndet [[R]] från varje hörn. För uppgifter om den omskrivna cirkeln, använd <a href=\"/right-triangle-circumradius-calculator/\">kalkylatorn för den omskrivna cirkelns radie i en rätvinklig triangel</a>, som tillämpar [[R = \\frac{c}{2}]] direkt.",
            },
          ],
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
                "Position",
                "Inuti triangeln",
                "Runt triangeln",
              ],
              [
                "Kontakt",
                "Tangerar sidorna",
                "Går genom hörnen",
              ],
              [
                "Formel för rätvinklig triangel",
                "(a+b-c)/2",
                "c/2",
              ],
              [
                "Medelpunkt",
                "Inskrivna cirkelns medelpunkt",
                "Omskrivna cirkelns medelpunkt",
              ],
              [
                "Värde för 6-8-10",
                "2",
                "5",
              ],
            ],
          },
          "image": {
            "src": "inradius-vs-circumcircle.svg",
            "alt": "Rätvinklig triangel med den lilla inskrivna cirkeln inuti den och den stora omskrivna cirkeln som går genom dess hörn, 6-8-10-triangel",
            "caption": "Inskriven cirkel (r = 2) inuti triangeln, omskriven cirkel (R = 5) runt den, 6-8-10-triangel.",
          },
        },
        "sec-verify": {
          "h2": "Så kontrollerar du din beräkning av den inskrivna cirkelns radie",
          "blocks": [
            {
              "kind": "p",
              "text": "Fyra oberoende kontroller fångar nästan varje fel. Kör minst en på varje svar, och alla fyra när uppgiften är viktig. Exemplet nedan använder 6-8-10-triangeln, med [[r = 2]], genomgående.",
            },
            {
              "kind": "h3",
              "text": "Kontroll 1: Ursprungliga formeln",
            },
            {
              "kind": "p",
              "text": "Räkna om med [[r = \\frac{a+b-c}{2}]] från början, utan att titta på din första uträkning. Här är [[r = \\frac{6+8-10}{2} = 2]]. En ny beräkning fångar slarvfel i den första, särskilt en subtraktion som gjorts i fel ordning.",
            },
            {
              "kind": "h3",
              "text": "Kontroll 2: Area och semiperimeter",
            },
            {
              "kind": "p",
              "text": "Kontrollera med [[r = \\frac{A}{s}]]. Här är [[A = \\frac{6 \\times 8}{2} = 24]] och [[s = \\frac{6+8+10}{2} = 12]], så [[r = \\frac{24}{12} = 2]]. Den här vägen använder multiplikation och division i stället för addition och subtraktion, så den fångar en annan typ av fel.",
            },
            {
              "kind": "h3",
              "text": "Kontroll 3: Pythagoras sats",
            },
            {
              "kind": "p",
              "text": "Kontrollera [[a^2+b^2 = c^2]]. Här är [[6^2+8^2 = 36+64 = 100 = 10^2]], så de tre sidorna bildar en äkta rätvinklig triangel. Om den här kontrollen misslyckas gäller inte formeln för den inskrivna cirkelns radie alls, och inget värde på [[r]] från den kan litas på.",
            },
            {
              "kind": "h3",
              "text": "Kontroll 4: Geometrisk rimlighet",
            },
            {
              "kind": "p",
              "text": "Bekräfta att [[r]] är positiv, mindre än vardera kateten och i rätt enhet. Här är 2 positivt och mindre än både 6 och 8, och enheten stämmer med sidorna. Cirkeln måste få plats inuti triangeln, så en inskriven cirkels radie som är större än den kortaste kateten är omöjlig och signalerar ett fel, vanligtvis en katet som skrivits in som hypotenusa.",
            },
          ],
        },
        "sec-properties": {
          "h2": "Viktiga egenskaper hos den inskrivna cirkelns radie i en rätvinklig triangel",
          "blocks": [
            {
              "kind": "p",
              "text": "Nio egenskaper följer direkt av formeln och geometrin i den inskrivna cirkeln. Var och en fungerar också som en rimlighetskontroll av ett nytt svar.",
            },
            {
              "kind": "list",
              "items": [
                "Den inskrivna cirkelns radie är alltid positiv för en giltig, icke-degenererad triangel, eftersom [[a+b]] alltid är större än [[c]].",
                "Den inskrivna cirkelns medelpunkt ligger inuti triangeln, där de tre vinkelbisektriserna möts.",
                "Den inskrivna cirkelns radie är det kortaste vinkelräta avståndet från den inskrivna cirkelns medelpunkt till varje sida, och alla tre avstånden är lika med [[r]].",
                "Den inskrivna cirkeln vidrör alla tre sidor, en tangeringspunkt på varje sida.",
                "Tangentsträckor från samma yttre punkt har lika längder, vilket är det faktum som formeln härleds från.",
                "Att öka triangelns totala skala ökar den inskrivna cirkelns radie med samma skalfaktor: att dubblera varje sida dubblerar [[r]], och att tredubbla varje sida tredubblar [[r]].",
                "Den inskrivna cirkelns radie är inte samma sak som den omskrivna cirkelns radie. I en 6-8-10-triangel är [[r = 2]] medan [[R = 5]].",
                "Den inskrivna cirkelns radie beror på triangelns form såväl som på dess storlek: en 5-12-13-triangel och en 6-8-10-triangel har båda [[r = 2]], trots att deras sidor skiljer sig.",
                "Den inskrivna cirkelns radie kan beräknas från sidlängder med [[r = \\frac{a+b-c}{2}]] eller från area och semiperimeter med [[r = \\frac{A}{s}]], och båda vägarna ger samma svar.",
              ],
            },
          ],
        },
        "sec-mistakes": {
          "h2": "Vanliga misstag vid beräkning av den inskrivna cirkelns radie",
          "blocks": [
            {
              "kind": "steps",
              "steps": [
                "Att använda formeln för den omskrivna cirkelns radie i stället för formeln för den inskrivna cirkelns radie: [[R = \\frac{c}{2}]] ger 5 för en 6-8-10-triangel, medan den inskrivna cirkelns radie är 2. De två formlerna svarar på olika frågor.",
                "Att skriva in c som en katet i stället för hypotenusan: om 8 skrivs in som c och 10 som b ger formeln [[\\frac{6+10-8}{2} = 4]], inte 2. Sätt alltid den längsta sidan i hypotenusafältet.",
                "Att glömma att subtrahera c: att addera kateterna och dividera med två, [[\\frac{6+8}{2} = 7]], ger ett tal som är mycket större än den sanna inskrivna cirkelns radie 2.",
                "Att glömma att dividera med två: [[6+8-10 = 4]] är dubbelt så stor som den inskrivna cirkelns radie. Divisionen med två är en del av formeln, inte ett valfritt sista steg.",
                "Att skriva in ogiltiga sidmått: sidorna 3, 4 och 6 uppfyller inte [[3^2+4^2 = 6^2]], eftersom 25 inte är lika med 36, så formeln för den inskrivna cirkelns radie gäller inte för dem.",
                "Att ignorera Pythagoras samband: vilka tre längder som helst kan matas in i formeln, men bara en äkta rätvinklig triangel ger en meningsfull inskriven cirkels radie. Kontrollera [[a^2+b^2 = c^2]] först.",
                "Att blanda måttenheter: kateter i centimeter och en hypotenusa i meter ger ett felaktigt svar. Omvandla varje mått till en enhet innan du beräknar.",
                "Att blanda ihop den inskrivna cirkelns radie med diametern: den inskrivna cirkelns radie är avståndet från medelpunkten till kanten. Diametern i den inskrivna cirkeln är dubbelt så stor som den inskrivna cirkelns radie, så för en 6-8-10-triangel är den 4, inte 2.",
                "Att blanda ihop den inskrivna cirkelns medelpunkt med den omskrivna cirkelns medelpunkt: den inskrivna cirkelns medelpunkt ligger inuti triangeln där vinkelbisektriserna möts, medan den omskrivna cirkelns medelpunkt är hypotenusans mittpunkt. De är olika punkter.",
                "Att anta att den inskrivna cirkeln går genom triangelns hörn: den inskrivna cirkeln vidrör sidorna och når aldrig ett hörn. Cirkeln genom hörnen är den omskrivna cirkeln.",
                "Att anta att radien mäts längs en sida i stället för vinkelrätt mot den: den inskrivna cirkelns radie är det vinkelräta avståndet från den inskrivna cirkelns medelpunkt till en sida, vilket är det kortaste avståndet till den sidan.",
                "Att avrunda mellanberäkningar för tidigt: behåll full precision genom additionen och subtraktionen, och avrunda bara det slutliga svaret. Tidig avrundning förskjuter resultatet.",
                "Att använda bara två sidlängder utan att beräkna hypotenusan först: formeln behöver alla tre sidor. Hitta [[c]] med Pythagoras sats innan du använder den.",
                "Att blanda ihop omkrets med semiperimeter: semiperimetern är halva omkretsen, [[s = \\frac{a+b+c}{2}]]. Att använda hela omkretsen i [[r = \\frac{A}{s}]] halverar det korrekta svaret.",
              ],
            },
          ],
        },
        "sec-applications": {
          "h2": "Praktiska tillämpningar av den inskrivna cirkelns radie i en rätvinklig triangel",
          "blocks": [
            {
              "kind": "p",
              "text": "Den mest direkta användningen är läxor och klassrumsarbete i geometri, där uppgifter om den inskrivna cirkelns radie testar om eleverna kan identifiera hypotenusan, tillämpa [[r = \\frac{a+b-c}{2}]] och kontrollera resultatet med area och semiperimeter. Övningar i cirkelkonstruktion använder samma idé: givet en rätvinklig triangel, rita dess inskrivna cirkel genom att hitta den inskrivna cirkelns medelpunkt där vinkelbisektriserna möts och ställa in en passare på den inskrivna cirkelns radie.",
            },
            {
              "kind": "p",
              "text": "Teknisk ritning använder den inskrivna cirkeln när en cirkel måste passa exakt inuti en triangulär ram eller när ett avrundat hörn måste vidröra två kanter i en form. Geometrisk modellering och koordinatgeometri använder den inskrivna cirkelns medelpunkt som den punkt inuti en triangel som ligger lika långt från alla tre sidor, vilket är den naturliga medelpunkten för en inskriven form.",
            },
            {
              "kind": "p",
              "text": "Lärare använder ämnet som en brygglektion mellan trianglar och cirklar, eftersom den inskrivna cirkeln är ett av de första ställen där de två ämnena möts. Tangentlängder, vinkelbisektriser, area och semiperimeter dyker alla upp i en enda bild, så den inskrivna cirkelns radie är ett kompakt sätt att repetera dem tillsammans. Verkliga designprojekt som behöver en inskriven cirkel behöver också toleranser och materialgränser utöver den här sidan, så behandla resultatet som det exakta geometriska värdet och lägg till praktiska marginaler separat.",
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
              "text": "En rätvinklig triangel har kateterna [[a = 20]] cm och [[b = 21]] cm och hypotenusan [[c = 29]] cm. Hitta den inskrivna cirkelns radie [[r]].",
            },
            {
              "kind": "h3",
              "text": "Uppgift 2: Decimalmått",
            },
            {
              "kind": "p",
              "text": "Givet [[a = 10.5]] m, [[b = 14]] m och [[c = 17.5]] m, hitta den inskrivna cirkelns radie [[r]] i meter.",
            },
            {
              "kind": "h3",
              "text": "Uppgift 3: Enhetsomvandling",
            },
            {
              "kind": "p",
              "text": "En rätvinklig triangel har kateterna [[a = 1.5]] m och [[b = 2]] m och hypotenusan [[c = 250]] cm. Hitta den inskrivna cirkelns radie i meter.",
            },
            {
              "kind": "h3",
              "text": "Uppgift 4: Hitta hypotenusan från två kateter",
            },
            {
              "kind": "p",
              "text": "En rätvinklig triangel har kateterna [[a = 12]] cm och [[b = 16]] cm. Hitta hypotenusan först, sedan den inskrivna cirkelns radie.",
            },
            {
              "kind": "h3",
              "text": "Uppgift 5: Area och semiperimeter",
            },
            {
              "kind": "p",
              "text": "En rätvinklig triangel har kateterna [[a = 15]] cm och [[b = 20]] cm och hypotenusan [[c = 25]] cm. Hitta arean och semiperimetern, hitta sedan den inskrivna cirkelns radie med [[r = \\frac{A}{s}]] och bekräfta den med formeln med tre sidor.",
            },
            {
              "kind": "h3",
              "text": "Uppgift 6: Identifiera en ogiltig rätvinklig triangel",
            },
            {
              "kind": "p",
              "text": "En elev får [[a = 7]] cm, [[b = 10]] cm och [[c = 12]] cm och ombeds hitta den inskrivna cirkelns radie. Visa varför dessa sidor inte bildar en rätvinklig triangel, och förklara vad eleven ska göra i stället för att tillämpa formeln.",
            },
            {
              "kind": "h3",
              "text": "Svar på övningsuppgifterna",
            },
            {
              "kind": "p",
              "text": "Svar 1: [[r = \\frac{20+21-29}{2} = \\frac{12}{2} = 6]] cm. Kontroll: [[20^2+21^2 = 400+441 = 841 = 29^2]].",
            },
            {
              "kind": "p",
              "text": "Svar 2: [[r = \\frac{10.5+14-17.5}{2} = \\frac{7}{2} = 3.5]] m. Kontroll: [[10.5^2+14^2 = 110.25+196 = 306.25 = 17.5^2]].",
            },
            {
              "kind": "p",
              "text": "Svar 3: Omvandla hypotenusan: 250 cm är lika med 2.5 m. Sedan [[r = \\frac{1.5+2-2.5}{2} = \\frac{1}{2} = 0.5]] m, vilket är 50 cm. Kontroll: [[1.5^2+2^2 = 2.25+4 = 6.25 = 2.5^2]].",
            },
            {
              "kind": "p",
              "text": "Svar 4: [[c = \\sqrt{12^2+16^2} = \\sqrt{144+256} = \\sqrt{400} = 20]] cm, sedan [[r = \\frac{12+16-20}{2} = \\frac{8}{2} = 4]] cm.",
            },
            {
              "kind": "p",
              "text": "Svar 5: [[A = \\frac{15 \\times 20}{2} = 150]] kvadratcentimeter och [[s = \\frac{15+20+25}{2} = 30]] cm, så [[r = \\frac{150}{30} = 5]] cm. Formeln med tre sidor stämmer: [[r = \\frac{15+20-25}{2} = 5]] cm.",
            },
            {
              "kind": "p",
              "text": "Svar 6: [[7^2+10^2 = 49+100 = 149]], medan [[12^2 = 144]], så [[a^2+b^2]] är inte lika med [[c^2]] och triangeln är inte rätvinklig. Eleven ska inte tillämpa formeln för den inskrivna cirkelns radie: kontrollera först måtten igen, och om de är korrekta, använd den allmänna formeln [[r = \\frac{A}{s}]] för en triangel som inte är rätvinklig i stället.",
            },
          ],
        },
      },
      "relatedHeading": "Utforska relaterade kalkylatorer för rätvinkliga trianglar",
      "relatedIntro": "Varje kalkylator nedan hanterar en specifik uppgift för rätvinkliga trianglar, så välj det verktyg som passar det mått du behöver hitta.",
      "relatedItems": [
        "Kalkylator för rätvinkliga trianglars radie",
        "Kalkylator för den omskrivna cirkelns radie i en rätvinklig triangel",
        "Kalkylator för rätvinkliga trianglars area",
        "Kalkylator för rätvinkliga trianglars semiperimeter",
        "Kalkylator för rätvinkliga trianglars sidor",
      ],
      "faqHeading": "Vanliga frågor",
      "faqs": [
        {
          "question": "Vad är formeln för den inskrivna cirkelns radie i en rätvinklig triangel?",
          "answer": "Formeln är [[r = \\frac{a+b-c}{2}]], där [[a]] och [[b]] är kateterna, [[c]] är hypotenusan och [[r]] är den inskrivna cirkelns radie. Addera de två kateterna, subtrahera hypotenusan och dividera med två. En 6-8-10-triangel ger till exempel en inskriven cirkels radie på 2.",
        },
        {
          "question": "Vad representerar den inskrivna cirkelns radie?",
          "answer": "Den inskrivna cirkelns radie är radien i den inskrivna cirkeln, den cirkel som får plats inuti triangeln och vidrör alla tre sidor. Det är det vinkelräta avståndet från den inskrivna cirkelns medelpunkt till vilken sida som helst. I en 6-8-10-triangel är den inskrivna cirkelns radie 2, så den inskrivna cirkeln har radien 2 enheter.",
        },
        {
          "question": "Vad är en inskriven cirkel?",
          "answer": "En inskriven cirkel är en cirkel som ritas helt inuti en triangel så att den vidrör alla tre sidor, en tangeringspunkt på varje sida. Varje triangel har exakt en inskriven cirkel. Den skiljer sig från den omskrivna cirkeln, som i stället går genom de tre hörnen.",
        },
        {
          "question": "Var ligger den inskrivna cirkelns medelpunkt?",
          "answer": "Den inskrivna cirkelns medelpunkt är den punkt där triangelns tre inre vinkelbisektriser möts. Den ligger alltid inuti triangeln. I en rätvinklig triangel med den räta vinkeln vid C ligger den längs bisektrisen till 90-gradersvinkeln, på avståndet [[r]] från varje sida.",
        },
        {
          "question": "Varför subtraherar formeln för den inskrivna cirkelns radie hypotenusan?",
          "answer": "Tangentsträckorna från hörnet med den räta vinkeln har längden [[r]], så kateterna är [[a = r+x]] och [[b = r+y]] medan hypotenusan är [[c = x+y]]. Att addera kateterna ger [[a+b = 2r+c]], så att subtrahera [[c]] lämnar [[2r]]. Subtraktionen tar bort de gemensamma tangentlängderna och isolerar den inskrivna cirkelns radie.",
        },
        {
          "question": "Varför dividerar vi med två?",
          "answer": "Att addera de två kateterna räknar den inskrivna cirkelns radie två gånger, en gång i varje katet, eftersom varje katet innehåller en tangentsträcka med längden [[r]] från hörnet med den räta vinkeln. Summan [[a+b-c]] är därför lika med [[2r]], inte [[r]], så division med två ger den enda inskrivna cirkelns radie.",
        },
        {
          "question": "Kan jag beräkna den inskrivna cirkelns radie med bara de två kateterna?",
          "answer": "Inte direkt, eftersom formeln också behöver hypotenusan. Hitta först hypotenusan med [[c = \\sqrt{a^2+b^2}]], och använd sedan [[r = \\frac{a+b-c}{2}]]. För kateterna 6 och 8 är hypotenusan 10 och den inskrivna cirkelns radie 2. Använd sidkalkylatorn för att hitta en saknad hypotenusa.",
        },
        {
          "question": "Kan jag beräkna den inskrivna cirkelns radie med area och semiperimeter?",
          "answer": "Ja. Formeln är [[r = \\frac{A}{s}]], där [[A]] är arean och [[s]] är semiperimetern. För en rätvinklig triangel är [[A = \\frac{ab}{2}]] och [[s = \\frac{a+b+c}{2}]]. För en 6-8-10-triangel är [[A = 24]] och [[s = 12]], så [[r = 2]]. Kalkylatorn på den här sidan använder formeln med tre sidor, så behandla areavägen som en oberoende kontroll.",
        },
        {
          "question": "Är den inskrivna cirkelns radie samma sak som den omskrivna cirkelns radie?",
          "answer": "Nej. Den inskrivna cirkelns radie är radien i cirkeln inuti triangeln som vidrör dess sidor, [[r = \\frac{a+b-c}{2}]], medan den omskrivna cirkelns radie är radien i cirkeln genom hörnen, [[R = \\frac{c}{2}]]. I en 6-8-10-triangel är de 2 och 5.",
        },
        {
          "question": "Kan den inskrivna cirkelns radie vara större än en triangels kortaste katet?",
          "answer": "Nej. Den inskrivna cirkelns radie är alltid mindre än vardera kateten, eftersom den inskrivna cirkeln måste få plats inuti triangeln. I en 3-4-5-triangel är den inskrivna cirkelns radie 1, mindre än den kortaste kateten 3. Ett svar som är större än den kortaste kateten signalerar ett fel, vanligtvis en katet som skrivits in som hypotenusa.",
        },
        {
          "question": "Varför måste hypotenusan vara den längsta sidan?",
          "answer": "Hypotenusan ligger mittemot den räta vinkeln, den största vinkeln i triangeln, och den längsta sidan ligger alltid mittemot den största vinkeln. Pythagoras sats tvingar det också: [[c^2 = a^2+b^2]] är större än antingen [[a^2]] eller [[b^2]] ensamt, så [[c]] är längre än [[a]] och längre än [[b]].",
        },
        {
          "question": "Hur kan jag kontrollera om min beräkning av den inskrivna cirkelns radie är korrekt?",
          "answer": "Räkna om med den ursprungliga formeln, kontrollera sedan med area och semiperimeter, [[r = \\frac{A}{s}]], och bekräfta [[a^2+b^2 = c^2]] för sidorna. Bekräfta också att svaret är positivt, mindre än vardera kateten och i samma enhet som sidorna. Om alla fyra kontroller stämmer är svaret korrekt.",
        },
      ],
    },
};
