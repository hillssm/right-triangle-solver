// perimeterGuideTranslations.b6sv.ts: Right Triangle Perimeter Guide (Page 25 of 45) translation for Swedish (sv).
export const B6_SV = {
  "sv": {
    "tocHeading": "Avsnittsnavigering",
    "tocItems": {
      "sec-intro": "Hur man beräknar omkretsen av en rätvinklig triangel",
      "sec-geometry": "Vad är en rätvinklig triangel?",
      "sec-definition": "Vad är omkretsen av en rätvinklig triangel?",
      "sec-howto": "Hur man hittar omkretsen av en rätvinklig triangel",
      "sec-examples": "Steg-för-steg-exempel på omkrets för rätvinklig triangel",
      "sec-missing": "Hur man beräknar omkretsen av en rätvinklig triangel när en sida saknas",
      "sec-applications": "Verkliga tillämpningar av omkrets för rätvinklig triangel",
      "sec-properties": "Särskilda egenskaper hos omkretsen för en rätvinklig triangel",
      "sec-vs-area": "Vad är skillnaden mellan omkrets och area?",
      "sec-semiperimeter": "Vad är sambandet mellan omkrets och semiperimeter?",
      "sec-units": "Förstå måttenheter i beräkningar av omkrets för rätvinklig triangel",
      "sec-mistakes": "Vanliga misstag vid beräkning av omkrets för rätvinklig triangel",
      "sec-verify": "Hur man kontrollerar att omkretsen för den rätvinkliga triangeln är korrekt",
      "sec-related": "Utforska relaterade räknare för rätvinklig triangel",
      "sec-faq": "Vanliga frågor",
      "sec-conclusion": "Slutsats"
    },
    "sections": {
      "sec-intro": {
        "h2": "Hur man beräknar omkretsen av en rätvinklig triangel",
        "blocks": [
          { "kind": "p", "text": "Ta en rätvinklig triangel med sidorna [[a=3]], [[b=4]] och [[c=5]]. Dess omkrets är [[P=3+4+5]], eller [[[\\boxed{P=12\\text{ units}}]]]. Talet 12 anger den fullständiga sträckan runt den triangulära gränsen: gå längs alla tre kanter så har du rest 12 enheter." },
          { "kind": "p", "text": "Den här räknaren gör exakt den additionen för vilken rätvinklig triangel som helst. Du anger de två kateterna och hypotenusan, och den returnerar den totala gränslängden med stegvis arbete och ett levande diagram. Tre sidlängder krävs eftersom gränsen har tre kanter, och hypotenusan måste ingå: den är en av dessa tre kanter även om den aldrig vidrör den räta vinkeln. De två kateterna bildar det kvadratiska hörnet, och hypotenusan sträcker sig tvärs över från det för att sluta formen." },
          { "kind": "p", "text": "Omkretsen är ett linjärt mått, inte ett areamått. Den svarar på \"hur mycket kantmaterial behöver jag?\" snarare än \"hur mycket yta finns inuti?\" Den skillnaden gör den till rätt tal varje gång du uppskattar staket, lister, ramar, tråd, rep eller tygkanter runt en rätvinklig triangulär form." }
        ]
      },
      "sec-geometry": {
        "h2": "Vad är en rätvinklig triangel?",
        "blocks": [
          { "kind": "p", "text": "Innan någon addition börjar måste de tre sidorna märkas utan fel. Symbolerna nedan är fasta genom hela guiden, och räknaren använder samma namn." },
          { "kind": "h3", "text": "Definition av en rätvinklig triangel" },
          { "kind": "p", "text": "En rätvinklig triangel är en triangel som innehåller en innervinkel som mäter exakt 90 grader. Den har tre hörn, tre sidor, två spetsiga vinklar och en rät vinkel, vanligtvis markerad med en liten kvadrat. De två sidor som bildar den räta vinkeln är kateterna; sidan mittemot den räta vinkeln är hypotenusan. Eftersom vinklarna i varje triangel summerar till 180 grader, [[A+B+C=180^\\circ]], och med [[C=90^\\circ]] följer att [[[\\boxed{A+B=90^\\circ}]]]: de två spetsiga vinklarna är komplementära, så att känna den ena bestämmer den andra. Vinkelsumman spelar roll vid identifiering av en rätvinklig triangel eftersom den är det test sidlängderna måste klara: endast ett äkta 90-gradershörn ger det sidförhållande som resten av denna guide bygger på." },
          { "kind": "h3", "text": "Vad är de två kateterna?" },
          { "kind": "p", "text": "Katet [[a]] och katet [[b]] är de två sidor som möts i hörnet med den räta vinkeln, vinkelräta mot varandra. Vilken som helst av dem kan ritas horisontell eller vertikal beroende på triangelns orientering; det som definierar dem är det 90-gradiga hörnet de bildar, inte deras riktning på sidan. De skiljer sig från hypotenusan i position och i längd: varje katet vidrör den räta vinkeln, och varje katet är kortare än hypotenusan. I omkretsarbete är deras roll enkel: båda är gränskanter, så båda ingår i summan." },
          { "kind": "h3", "text": "Vad är hypotenusan?" },
          { "kind": "p", "text": "Hypotenusan är sidan mittemot den räta vinkeln, alltid triangelns längsta sida. Den bildar aldrig den räta vinkeln; den sträcker sig tvärs över från den och förbinder kateternas bortre ändar. Den skiljer sig från kateterna i både position och längd: kateterna möts i 90 grader, medan hypotenusan möter varje katet i en spetsig vinkel. Den fullbordar den triangulära gränsen, vilket är anledningen till att den måste ingå i omkretsberäkningar. När båda kateterna är kända återställer Pythagoras sats den: [[[\\boxed{c=\\sqrt{a^2+b^2}}]]]." },
          { "kind": "h3", "text": "Hur man identifierar rätt sidomärkning" },
          { "kind": "p", "text": "[[a]] och [[b]] är de två sidorna som möts i 90 grader, och [[c]] är mittemot den räta vinkeln. I en icke-degenererad rätvinklig triangel är [[c]] den längsta sidan. Markeringen för den räta vinkeln talar om vilken sida som är [[c]]: det är den som inte vidrör det hörnet. En snabb ordningskontroll hjälper: sortera de tre talen, och det största måste spela rollen som [[c]]. Om den längsta sidan inte ligger mittemot det kvadratiska hörnet är märkningen fel, och varje beräkning som bygger på den blir också fel." },
          { "kind": "h3", "text": "Fungerar omkretsformeln bara för rätvinkliga trianglar?" },
          { "kind": "p", "text": "Här finns en viktig matematisk skillnad. Formeln [[P=a+b+c]] fungerar för varje triangel, rätvinklig eller inte: varje tresidig gräns summeras på samma sätt. Vad villkoret med den räta vinkeln tillför är det speciella förhållandet [[a^2+b^2=c^2]], som är användbart för att hitta saknade sidor och för att kontrollera om måtten verkligen beskriver en rätvinklig triangel. Omkretsformeln är universell; Pythagoras-förhållandet är den rätvinkliga triangelns bonus." }
        ],
        "imgAlt": "Rätvinklig triangel ABC med kateterna a och b, hypotenusan c, rät vinkel vid C och markerad omkretsgräns",
        "figcaption": "Triangel ABC: kateterna a och b möts i den räta vinkeln C, hypotenusan c sluter gränsen och P = a + b + c följer alla tre kanterna."
      },
      "sec-definition": {
        "h2": "Vad är omkretsen av en rätvinklig triangel?",
        "blocks": [
          { "kind": "h3", "text": "Definition av omkrets" },
          { "kind": "p", "text": "Omkretsen är den totala sträckan runt den yttre gränsen av en tvådimensionell figur. För en triangel är den summan av dess tre sidlängder: [[[\\boxed{P=a+b+c}]]]. Alla tre sidorna måste ingå eftersom gränsen inte är fullständig förrän varje kant har räknats. Att lämna en ute ger ingen kortare omkrets; det ger en annan, felaktig storhet." },
          { "kind": "h3", "text": "Varför räknas hypotenusan med i omkretsen?" },
          { "kind": "p", "text": "Omkretsen mäter den fullständiga yttre gränsen, och hypotenusan är inte ett valfritt eller inre mått. Den är en av de tre yttre kanterna. Ta [[a=3]], [[b=4]], [[c=5]]. Den felaktiga beräkningen [[3+4=7]] räknar bara de två kateterna, sidorna i det kvadratiska hörnet. Den korrekta beräkningen [[3+4+5=12]] går hela triangeln och återvänder till startpunkten. Värdet 7 är kateternas sammanlagda längd, inte den fulla omkretsen, eftersom vägen från änden av katet [[b]] tillbaka till början av katet [[a]] går längs hypotenusan." },
          { "kind": "h3", "text": "Hur fungerar omkretsformeln?" },
          { "kind": "p", "text": "Formeln delas upp i tre delar. Första sidan: [[a]]. Andra sidan: [[b]]. Tredje sidan: [[c]]. Kombinerat: [[P=a+b+c]]. Addition räcker eftersom omkretsen är en längdsumma, och längder längs en bana helt enkelt adderas. Ingen division krävs, ingen kvadrering, ingen trigonometri: formeln är det enklaste möjliga användandet av gränsdefinitionen." },
          { "kind": "h3", "text": "Vad representerar omkretsen i verkliga livet?" },
          { "kind": "p", "text": "Omkretsen är den totala gränslängden: det material som krävs för att gå runt ett föremål en gång. Det gör den till talet bakom kantmått, ramdimensioner, kantlängder, staketbehov, lister och profiler samt rep- och trådlängder. Att mäta den yttre gränsen är ett annat jobb än att mäta ytan som är innesluten inuti triangeln. Att stängsla in en triangulär trädgård kräver omkretsen; att täcka samma trädgård med gräsmatta kräver arean. Att blanda ihop de två köper fel material." }
        ]
      },
      "sec-howto": {
        "h2": "Hur man hittar omkretsen av en rätvinklig triangel",
        "blocks": [
          { "kind": "p", "text": "Beräkningen följer en tydlig sekvens. Varje steg har ett syfte: identifiera, kontrollera, substituera, addera och verifiera. Triangeln 3-4-5 visar varje steg." },
          { "kind": "p", "text": "<strong>Steg 1: Identifiera de tre sidorna.</strong> Samla måtten [[a=3]], [[b=4]], [[c=5]]. Detta steg samlar in rådata innan någon aritmetik." },
          { "kind": "p", "text": "<strong>Steg 2: Identifiera de två vinkelräta kateterna.</strong> Bekräfta att 3 och 4 är kateterna, de sidor som bildar 90-gradershörnet. Detta ger [[a]] och [[b]] deras korrekta roller." },
          { "kind": "p", "text": "<strong>Steg 3: Identifiera hypotenusan mittemot den räta vinkeln.</strong> Bekräfta att 5 är hypotenusan: den är den längsta sidan och ligger mittemot det kvadratiska hörnet. Detta förhindrar det vanligaste märkningsfelet." },
          { "kind": "p", "text": "<strong>Steg 4: Bekräfta att alla tre måtten använder kompatibla enheter.</strong> Alla tre är vanliga enheter här, så ingen omvandling behövs. Detta steg skyddar mot att addera meter till fot." },
          { "kind": "p", "text": "<strong>Steg 5: Skriv formeln.</strong> [[P=a+b+c]]. Att skriva den håller strukturen synlig under substitutionen." },
          { "kind": "p", "text": "<strong>Steg 6: Substituera de kända måtten.</strong> [[P=3+4+5]]. Varje symbol ersätts av sitt tal." },
          { "kind": "p", "text": "<strong>Steg 7: Addera de tre värdena.</strong> [[P=12]]. En addition är hela aritmetiken." },
          { "kind": "p", "text": "<strong>Steg 8: Fäst rätt linjär måttenhet.</strong> [[[\\boxed{P=12\\text{ units}}]]]. Omkretsen är en längd, så den tar linjära enheter, aldrig kvadratenheter." },
          { "kind": "p", "text": "<strong>Steg 9: Verifiera resultatet.</strong> Kontrollera [[3^2+4^2=5^2]]: [[9+16=25]]. Sidorna uppfyller Pythagoras sats, så triangeln är äkta rätvinklig och omkretsen är pålitlig." },
          { "kind": "h3", "text": "Varför är det viktigt att identifiera sidorna korrekt?" },
          { "kind": "p", "text": "Felaktig märkning påverkar allt nedströms. Matematisk verifiering misslyckas när hypotenusan är felmärkt, eftersom Pythagoras-kontrollen förväntar sig att [[c]] är den längsta sidan. Beräkningar av saknade sidor använder olika formler för en saknad katet kontra en saknad hypotenusa, så en förväxlad märkning tillämpar fel formel. Räknarens inmatningar är kopplade till [[a]], [[b]] och [[c]], så förväxlade värden ger ett trovärdigt men felaktigt svar. Den levande triangelvisualiseringen ser också förvrängd ut när ett katetvärde hamnar i hypotenusafältet. Att få märkningen rätt en gång skyddar varje senare steg." },
          { "kind": "h3", "text": "Kan jag beräkna omkretsen utan att känna hypotenusan?" },
          { "kind": "p", "text": "Ja, med ett extra steg först. Om båda kateterna är kända kan hypotenusan hittas med Pythagoras sats: [[c=\\sqrt{a^2+b^2}]]. När [[c]] är känd följer omkretsen genom vanlig addition. Detta innebär inte att den befintliga omkretsräknaren accepterar endast två sidor: räknaren behöver alla tre inmatningarna, så den saknade sidan måste beräknas för hand (eller med sidräknaren) innan värdena matas in." }
        ]
      },
      "sec-examples": {
        "h2": "Steg-för-steg-exempel på omkrets för rätvinklig triangel",
        "blocks": [
          { "kind": "p", "text": "De fyra exemplen nedan behåller de befintliga uträknade fallen och utvecklar deras förklaringar. Var och en substituerar, adderar och verifierar sedan genom Pythagoras sats." },
          { "kind": "h3", "text": "Exempel 1: 3-4-5 rätvinklig triangel" },
          { "kind": "p", "text": "Givet: [[a=3,\\;b=4,\\;c=5]]" },
          { "kind": "p", "text": "Formel: [[P=a+b+c]]" },
          { "kind": "p", "text": "Substituera: [[P=3+4+5]]" },
          { "kind": "p", "text": "Addera: [[P=12]]" },
          { "kind": "p", "text": "Slutsvar: [[[\\boxed{P=12\\text{ units}}]]]" },
          { "kind": "p", "text": "Verifiera: [[3^2+4^2=5^2]], vilket är [[9+16=25]]. Måtten uppfyller Pythagoras sats, så de bildar en rätvinklig triangel: de två mindre kvadraterna byggda på kateterna fyller exakt den kvadrat som byggts på hypotenusan." },
          { "kind": "h3", "text": "Exempel 2: 5-12-13 rätvinklig triangel" },
          { "kind": "p", "text": "Givet: [[a=5,\\;b=12,\\;c=13]]" },
          { "kind": "p", "text": "Substituera: [[P=5+12+13]]" },
          { "kind": "p", "text": "Slutsvar: [[[\\boxed{P=30\\text{ units}}]]]" },
          { "kind": "p", "text": "Verifiera: [[5^2+12^2=13^2]], vilket är [[25+144=169]]. Likheten bekräftar en giltig rätvinklig triangel." },
          { "kind": "h3", "text": "Exempel 3: 8-15-17 rätvinklig triangel" },
          { "kind": "p", "text": "Givet: [[a=8,\\;b=15,\\;c=17]]" },
          { "kind": "p", "text": "Substituera: [[P=8+15+17]]" },
          { "kind": "p", "text": "Slutsvar: [[[\\boxed{P=40\\text{ units}}]]]" },
          { "kind": "p", "text": "Verifiera: [[8^2+15^2=17^2]], vilket är [[64+225=289]]. Återigen balanserar kvadraterna, vilket bekräftar den räta vinkeln." },
          { "kind": "h3", "text": "Exempel 4: Decimala sidlängder" },
          { "kind": "p", "text": "Givet: [[a=2.5,\\;b=6,\\;c=6.5]]" },
          { "kind": "p", "text": "Substituera: [[P=2.5+6+6.5]]" },
          { "kind": "p", "text": "Slutsvar: [[[\\boxed{P=15\\text{ units}}]]]" },
          { "kind": "p", "text": "Verifiera: [[2.5^2+6^2=6.5^2]], vilket är [[6.25+36=42.25]]. Decimala värden ändrar inte formeln: addition fungerar på samma sätt för heltal och decimaler, och verifieringsaritmetiken är identisk." }
        ],
        "table": {
          "headers": ["Triangel", "Katet a", "Katet b", "Hypotenusa c", "Omkrets P", "Verifiering"],
          "rows": [
            ["3-4-5", "3", "4", "5", "12", "[[9+16=25]]"],
            ["5-12-13", "5", "12", "13", "30", "[[25+144=169]]"],
            ["8-15-17", "8", "15", "17", "40", "[[64+225=289]]"],
            ["2.5-6-6.5", "2.5", "6", "6.5", "15", "[[6.25+36=42.25]]"]
          ]
        },
        "closingParagraphs": ["Tabellen visar hur olika sidlängder ger olika gränsmått medan samma tvåstegsrytm, addera och sedan verifiera, förblir oförändrad."]
      },
      "sec-missing": {
        "h2": "Hur man beräknar omkretsen av en rätvinklig triangel när en sida saknas",
        "blocks": [
          { "kind": "p", "text": "Den befintliga omkretsräknaren kräver alla tre sidlängder. Om en sida är okänd, beräkna den först med Pythagoras sats och addera sedan. De tre fallen nedan täcker varje möjlighet." },
          { "kind": "h3", "text": "Fall 1: Hitta den saknade hypotenusan" },
          { "kind": "p", "text": "När båda kateterna är kända: [[[\\boxed{c=\\sqrt{a^2+b^2}}]]]" },
          { "kind": "p", "text": "Exempel: [[a=6,\\;b=8]]" },
          { "kind": "p", "text": "[[c=\\sqrt{6^2+8^2}]]" },
          { "kind": "p", "text": "[[c=\\sqrt{36+64}]]" },
          { "kind": "p", "text": "[[[\\boxed{c=10}]]]" },
          { "kind": "p", "text": "Beräkna nu: [[P=6+8+10]], så [[[\\boxed{P=24\\text{ units}}]]]." },
          { "kind": "h3", "text": "Fall 2: Hitta en saknad katet" },
          { "kind": "p", "text": "När hypotenusan [[c]] och kateten [[a]] är kända: [[[\\boxed{b=\\sqrt{c^2-a^2}}]]]" },
          { "kind": "p", "text": "Exempel: [[c=13,\\;a=5]]" },
          { "kind": "p", "text": "[[b=\\sqrt{13^2-5^2}]]" },
          { "kind": "p", "text": "[[b=\\sqrt{169-25}]]" },
          { "kind": "p", "text": "[[[\\boxed{b=12}]]]" },
          { "kind": "p", "text": "Beräkna nu: [[P=5+12+13]], så [[[\\boxed{P=30\\text{ units}}]]]." },
          { "kind": "h3", "text": "Fall 3: Hitta den andra saknade kateten" },
          { "kind": "p", "text": "När hypotenusan [[c]] och kateten [[b]] är kända: [[[\\boxed{a=\\sqrt{c^2-b^2}}]]]" },
          { "kind": "p", "text": "Exempel: [[c=17,\\;b=15]]" },
          { "kind": "p", "text": "[[a=\\sqrt{17^2-15^2}]]" },
          { "kind": "p", "text": "[[a=\\sqrt{289-225}]]" },
          { "kind": "p", "text": "[[[\\boxed{a=8}]]]" },
          { "kind": "p", "text": "Beräkna nu: [[P=8+15+17]], så [[[\\boxed{P=40\\text{ units}}]]]." },
          { "kind": "h3", "text": "Varför måste du hitta den saknade sidan först?" },
          { "kind": "p", "text": "Omkretsen representerar den fullständiga gränsen. Att ignorera en okänd sida ger ett ofullständigt resultat: två kända sidor ger en partiell bana, inte omkretsen. Dessa beräkningar av saknade sidor är stödjande matematiska metoder, inte ytterligare lägen i den befintliga omkretsräknaren. När du bara känner två sidor återställer räknaren för rätvinklig triangelsida den tredje, och sedan avslutar omkretsräknaren jobbet." }
        ],
        "imgAlt": "Rätvinklig triangel med kateterna 6 och 8, hypotenusan hittad som 10 via Pythagoras, sedan omkrets 24",
        "figcaption": "Kateterna 6 och 8 ger c = 10 via Pythagoras sats, sedan P = 6 + 8 + 10 = 24."
      },
      "sec-applications": {
        "h2": "Verkliga tillämpningar av omkrets för rätvinklig triangel",
        "blocks": [
          { "kind": "p", "text": "Tolv realistiska, fullständigt uträknade exempel följer. Var och en namnger en situation, anger tre sidomått, visar additionen och förklarar vad resultatet hjälper att uppskatta. Behandla varje som en förenklad rätvinklig triangulär geometrisk modell: verkliga föremål är sällan perfekta trianglar, så materialtillägg, kapspill och verifiering av konstruktionen ligger utanför själva omkretstalet." },
          { "kind": "h3", "text": "Exempel 1: Triangulär glasfönsterram" },
          { "kind": "p", "text": "En triangulär fönsterram har [[a=3\\text{ m},\\;b=4\\text{ m},\\;c=5\\text{ m}]]. Sedan [[P=3+4+5]], så [[[\\boxed{P=12\\text{ m}}]]]. De 12 metrarna representerar den totala längden runt fönstrets triangulära kontur, längden på ramvirke att kapa. Ramfogar och tillägg för kapning kan kräva ytterligare material utöver de 12 metrarna." },
          { "kind": "h3", "text": "Exempel 2: Takkantlist" },
          { "kind": "p", "text": "En rätvinklig triangulär taksektion har [[a=6\\text{ ft},\\;b=8\\text{ ft},\\;c=10\\text{ ft}]]. Sedan [[P=6+8+10]], så [[[\\boxed{P=24\\text{ ft}}]]]. Omkretsen uppskattar listen runt den triangulära gavelkonturen. Hörnen och överlapp vid takfoten läggs till inköpslängden." },
          { "kind": "h3", "text": "Exempel 3: Triangulärt trädgårdsstaket" },
          { "kind": "p", "text": "En triangulär trädgårdssektion har [[a=5\\text{ m},\\;b=12\\text{ m},\\;c=13\\text{ m}]]. Sedan [[P=5+12+13]], så [[[\\boxed{P=30\\text{ m}}]]]. Den totala gränslängden uppskattar det staket som krävs runt trädgården. Grindar, stolpar, överlapp och tillägg för montering räknas separat från de 30 metrarna staketlinje." },
          { "kind": "h3", "text": "Exempel 4: Stålfäste" },
          { "kind": "p", "text": "Ett rätvinkligt triangulärt metallfäste har [[a=8\\text{ cm},\\;b=15\\text{ cm},\\;c=17\\text{ cm}]]. Sedan [[P=8+15+17]], så [[[\\boxed{P=40\\text{ cm}}]]]. Omkretsen beskriver fästets ytterkant och hjälper till att uppskatta skyddande kantmaterial. Den bestämmer inte strukturell hållfasthet, som beror på tjocklek, legering och lastvägar snarare än kantlängd." },
          { "kind": "h3", "text": "Exempel 5: Triangulär tygbanderoll" },
          { "kind": "p", "text": "En tygbanderoll har [[a=9\\text{ ft},\\;b=12\\text{ ft},\\;c=15\\text{ ft}]]. Sedan [[P=9+12+15]], så [[[\\boxed{P=36\\text{ ft}}]]]. Omkretsen uppskattar den totala kantlängd som kräver fåll eller kantband. Ytterligare tyg för sömmar och fållar ingår inte i de 36 foten." },
          { "kind": "h3", "text": "Exempel 6: Triangulär skyltram" },
          { "kind": "p", "text": "En rätvinklig triangulär skyltpanel har [[a=12\\text{ in},\\;b=16\\text{ in},\\;c=20\\text{ in}]]. Sedan [[P=12+16+20]], så [[[\\boxed{P=48\\text{ in}}]]]. Omkretsen uppskattar ramen eller den dekorativa kanten runt panelen." },
          { "kind": "h3", "text": "Exempel 7: Landskapskant" },
          { "kind": "p", "text": "En rätvinklig triangulär landskapssektion har [[a=7\\text{ m},\\;b=24\\text{ m},\\;c=25\\text{ m}]]. Sedan [[P=7+24+25]], så [[[\\boxed{P=56\\text{ m}}]]]. Detta resultat uppskattar den fulla längden landskapskant för sektionen, före spill och fogöverlapp." },
          { "kind": "h3", "text": "Exempel 8: Stödram för solpanel" },
          { "kind": "p", "text": "En liten rätvinklig triangulär stödram har [[a=9\\text{ cm},\\;b=40\\text{ cm},\\;c=41\\text{ cm}]]. Sedan [[P=9+40+41]], så [[[\\boxed{P=90\\text{ cm}}]]]. Omkretsen beskriver ramens fullständiga triangulära kontur." },
          { "kind": "h3", "text": "Exempel 9: Triangulär markiskant" },
          { "kind": "p", "text": "En rätvinklig triangulär markissektion har [[a=15\\text{ ft},\\;b=20\\text{ ft},\\;c=25\\text{ ft}]]. Sedan [[P=15+20+25]], så [[[\\boxed{P=60\\text{ ft}}]]]. Omkretsen uppskattar kantmaterialet som krävs runt tyget, exklusive fästbeslag." },
          { "kind": "h3", "text": "Exempel 10: Lagerbyggnads gavellist" },
          { "kind": "p", "text": "En förenklad gavel sektion för ett lagerhus har [[a=11\\text{ ft},\\;b=60\\text{ ft},\\;c=61\\text{ ft}]]. Sedan [[P=11+60+61]], så [[[\\boxed{P=132\\text{ ft}}]]]. Den totala omkretsen representerar de tre ytterkanterna av den modellerade triangulära sektionen." },
          { "kind": "h3", "text": "Exempel 11: Industriell tillverkningspanel" },
          { "kind": "p", "text": "En rätvinklig triangulär tillverkningspanel har [[a=13\\text{ cm},\\;b=84\\text{ cm},\\;c=85\\text{ cm}]]. Sedan [[P=13+84+85]], så [[[\\boxed{P=182\\text{ cm}}]]]. Resultatet hjälper till att uppskatta skyddande kantprofiler eller kantmaterial för panelen." },
          { "kind": "h3", "text": "Exempel 12: Stödplatta av plywood" },
          { "kind": "p", "text": "En rätvinklig triangulär stödplatta av plywood har [[a=28\\text{ cm},\\;b=45\\text{ cm},\\;c=53\\text{ cm}]]. Sedan [[P=28+45+53]], så [[[\\boxed{P=126\\text{ cm}}]]]. Omkretsen representerar den fullständiga ytterkanten av plywoodplattan." }
        ],
        "table": {
          "headers": ["Praktisk tillämpning", "Katet a", "Katet b", "Hypotenusa c", "Omkrets P", "Enhet"],
          "rows": [
            ["Triangulär glasfönsterram", "3", "4", "5", "12", "m"],
            ["Takkantlist", "6", "8", "10", "24", "ft"],
            ["Triangulärt trädgårdsstaket", "5", "12", "13", "30", "m"],
            ["Stålfäste", "8", "15", "17", "40", "cm"],
            ["Triangulär tygbanderoll", "9", "12", "15", "36", "ft"],
            ["Triangulär skyltram", "12", "16", "20", "48", "in"],
            ["Landskapskant", "7", "24", "25", "56", "m"],
            ["Stödram för solpanel", "9", "40", "41", "90", "cm"],
            ["Triangulär markiskant", "15", "20", "25", "60", "ft"],
            ["Lagerbyggnads gavellist", "11", "60", "61", "132", "ft"],
            ["Industriell tillverkningspanel", "13", "84", "85", "182", "cm"],
            ["Stödplatta av plywood", "28", "45", "53", "126", "cm"]
          ]
        },
        "closingParagraphs": ["Kom ihåg de praktiska begränsningarna: materialtillägg kan behövas, kapspill ingår inte, ramfogar kan lägga till materialkrav, grindar och öppningar påverkar staketmängder, verkliga byggmått bör verifieras, och omkretsen ensam bestämmer inte strukturell hållfasthet eller lastkapacitet."],
        "imgAlt": "Fyra verkliga exempel på omkrets för rätvinklig triangel: fönsterram, taklist, trädgårdskant, stålfäste",
        "figcaption": "Fönster, tak, trädgård och fäste: varje panel följer den triangulära gränsen och dess omkrets."
      },
      "sec-properties": {
        "h2": "Särskilda egenskaper hos omkretsen för en rätvinklig triangel",
        "blocks": [
          { "kind": "p", "text": "Utöver enkel addition följer omkretsen för en rätvinklig triangel flera skarpa olikheter. De fungerar också som snabba rimlighetskontroller av varje beräknat resultat." },
          { "kind": "h3", "text": "Omkretsen är större än två gånger hypotenusan" },
          { "kind": "p", "text": "För varje giltig triangel ger triangelolikheten [[a+b>c]]. Lägg till [[c]] på båda sidor: [[a+b+c>2c]]. Därför [[[\\boxed{P>2c}]]]. I vanlig svenska: de två kateterna tillsammans är alltid längre än hypotenusan, så att lägga till hypotenusan på båda sidorna behåller olikheten i samma riktning. För triangeln 3-4-5 är [[P=12]] och [[2c=10]], och 12 är verkligen större än 10." },
          { "kind": "h3", "text": "Omkretsen är mindre än tre gånger hypotenusan" },
          { "kind": "p", "text": "Eftersom hypotenusan är längre än vardera kateten, [[a<c]] och [[b<c]]. Därför [[a+b<2c]]. Att lägga till [[c]] ger [[[\\boxed{P<3c}]]]. Detta är en användbar snabb kontroll: varje påstådd omkrets vid eller över tre gånger hypotenusan kan inte tillhöra en giltig rätvinklig triangel. För triangeln 3-4-5 är [[3c=15]], och 12 ligger bekvämt under den." },
          { "kind": "h3", "text": "Omkrets för en 45-45-90-triangel" },
          { "kind": "p", "text": "I en 45-45-90-triangel har båda kateterna samma längd. Låt varje katet vara lika med [[k]]. Hypotenusan är [[c=k\\sqrt{2}]]. Därför [[P=k+k+k\\sqrt{2}]], eller [[[\\boxed{P=k(2+\\sqrt{2})}]]]. Med [[k=5]] är omkretsen [[5(2+\\sqrt{2})\\approx17.07]]: två kateter om 5 plus en hypotenusa på cirka 7,07." },
          { "kind": "h3", "text": "Omkrets för en 30-60-90-triangel" },
          { "kind": "p", "text": "Om den kortaste kateten är [[k]], är den längre kateten [[k\\sqrt{3}]] och hypotenusan [[2k]]. Därför [[P=k+k\\sqrt{3}+2k]], eller [[[\\boxed{P=k(3+\\sqrt{3})}]]]. Med [[k=4]] är sidorna 4, cirka 6,93 och 8, vilket ger en omkrets på cirka 18,93." },
          { "kind": "h3", "text": "Vilken rätvinklig triangel har störst omkrets för en given hypotenusa?" },
          { "kind": "p", "text": "Intuitivt, när hypotenusan hålls fast, växer omkretsen i takt med att de två kateterna växer tillsammans, och den är störst när ingen av kateterna är svältfödd: när båda kateterna är lika. Det är 45-45-90-triangeln. Det precisa påståendet använder olikheten [[a+b\\leq\\sqrt{2(a^2+b^2)}]]. Eftersom [[a^2+b^2=c^2]] följer att [[[\\boxed{P\\leq c(1+\\sqrt{2})}]]], med likhet exakt när [[a=b]]. Så bland alla rätvinkliga trianglar som delar en hypotenusa vinner den likbenta rätvinkliga triangeln omkretstävlingen." }
        ]
      },
      "sec-vs-area": {
        "h2": "Vad är skillnaden mellan omkrets och area?",
        "blocks": [
          { "kind": "p", "text": "Omkrets och area beskriver båda en triangel, men de svarar på olika frågor. Detta avsnitt drar gränsen noggrant." },
          { "kind": "h3", "text": "Omkretsen mäter den yttre gränsen" },
          { "kind": "p", "text": "[[[\\boxed{P=a+b+c}]]] mäter den totala sträckan runt triangeln. Dess enheter är linjära: meter, centimeter, millimeter, fot, tum. Den talar om hur mycket material som följer kanten." },
          { "kind": "h3", "text": "Arean mäter den inneslutna ytan" },
          { "kind": "p", "text": "För en rätvinklig triangel, [[[\\boxed{K=\\frac{ab}{2}}]]]. De två vinkelräta kateterna fungerar som bas och höjd, så ingen hypotenusa förekommer i formeln. Arean använder kvadratenheter: kvadratmeter, kvadratcentimeter, kvadratfot, kvadrattum. Den talar om hur mycket yta som ligger inuti gränsen." },
          { "kind": "h3", "text": "Uträkning som jämför med en 3-4-5-triangel" },
          { "kind": "p", "text": "Omkrets: [[P=3+4+5]], så [[[\\boxed{P=12\\text{ units}}]]]." },
          { "kind": "p", "text": "Area: [[K=\\frac{3\\times4}{2}]], så [[[\\boxed{K=6\\text{ square units}}]]]." },
          { "kind": "p", "text": "Talen 12 och 6 beskriver helt olika egenskaper hos samma triangel: det ena är vandringen runt den, det andra är marken den täcker." },
          { "kind": "h3", "text": "Kan två rätvinkliga trianglar ha samma omkrets men olika areor?" },
          { "kind": "p", "text": "Ja. Omkretsen ensam bestämmer inte unikt arean; triangelns form och proportioner påverkar dess inneslutna area. En 3-4-5-triangel har omkrets 12 och area 6. En 45-45-90-triangel kan också ha omkrets 12: från [[P=k(2+\\sqrt{2})=12]] är kateten [[k=\\frac{12}{2+\\sqrt{2}}\\approx3.51]], och dess area är [[K=\\frac{k^2}{2}\\approx6.18]] kvadratenheter, något större än 6. Samma gränslängd, olika inre: den likbenta formen innesluter en aning mer." }
        ],
        "imgAlt": "3-4-5-triangel med markerad gräns P lika med 12 och skuggad inre area K lika med 6",
        "figcaption": "Den markerade kanten är omkretsen; den skuggade inre delen är arean. Två olika mått."
      },
      "sec-semiperimeter": {
        "h2": "Vad är sambandet mellan omkrets och semiperimeter?",
        "blocks": [
          { "kind": "p", "text": "Semiperimeter är hälften av den fulla omkretsen: [[[\\boxed{s=\\frac{P}{2}}]]]. För en rätvinklig triangel är det [[[\\boxed{s=\\frac{a+b+c}{2}}]]]. Den förblir ett stödjande mått på denna sida, inte ett andra huvudämne." },
          { "kind": "h3", "text": "Numeriskt exempel" },
          { "kind": "p", "text": "Använd [[a=3,\\;b=4,\\;c=5]]. Omkretsen är [[P=12]], så semiperimetern är [[s=\\frac{12}{2}=6]]. Båda är linjära mått i samma enheter; det ena är helt enkelt hälften av det andra." },
          { "kind": "h3", "text": "Varför är semiperimetern användbar?" },
          { "kind": "p", "text": "Semiperimetern är ett viktigt mellanliggande mått i triangelgeometri. Den förekommer i Herons formel för area, [[K=\\sqrt{s(s-a)(s-b)(s-c)}]], och i inradierelationen [[K=rs]], och den förenklar flera avancerade geometribevis. När en formel ber om [[s]], beräkna först omkretsen och halvera den. För ett dedikerat verktyg, använd räknaren för rätvinklig triangels semiperimeter." }
        ]
      },
      "sec-units": {
        "h2": "Förstå måttenheter i beräkningar av omkrets för rätvinklig triangel",
        "blocks": [
          { "kind": "p", "text": "Omkretsen fungerar i vilken längdenhet som helst: meter, centimeter, millimeter, kilometer, fot, tum, yard eller engelska mil. Talet ändras med enheten, men triangeln gör det inte." },
          { "kind": "h3", "text": "Varför måste alla tre sidomåtten använda kompatibla enheter?" },
          { "kind": "p", "text": "Omkretsen beräknas genom addition, och addition är bara meningsfullt mellan lika stora storheter. Att lägga till 3 fot till 48 tum utan omvandling blandar två skalor och ger en meningslös summa. Omvandla först varje sida till en gemensam enhet, och addera sedan." },
          { "kind": "h3", "text": "Uträkning av enhetsomvandling som exempel" },
          { "kind": "p", "text": "Givet [[a=3\\text{ ft}]], [[b=48\\text{ inches}]], [[c=5\\text{ ft}]]. Omvandla tum till fot: [[48\\text{ inches}=4\\text{ ft}]]. Nu är alla tre sidorna i fot, så [[P=3+4+5]] och [[[\\boxed{P=12\\text{ ft}}]]]. Omvandlingen måste ske före additionen, inte efter." },
          { "kind": "h3", "text": "Hur räknarens enhetsväljare hjälper" },
          { "kind": "p", "text": "Var och en av de tre inmatningarna på denna sida har sin egen enhetsväljare. När du väljer olika enheter för olika sidor omvandlar räknaren automatiskt varje inmatning till den gemensamma enheten innan den adderar: den läser enheten som valts för den första sidan och skalar de andra två för att matcha, med exakta längdförhållanden (1 tum = 0,0254 m, 1 fot = 0,3048 m, och så vidare). Resultatet rapporteras i den gemensamma enheten. Du kan fortfarande omvandla för hand som visat ovan, men väljarna tar bort aritmetiken." },
          { "kind": "h3", "text": "Arbeta med decimala mått" },
          { "kind": "p", "text": "Använd [[a=2.5,\\;b=6,\\;c=6.5]]. Sedan [[P=2.5+6+6.5]], så [[[\\boxed{P=15\\text{ units}}]]]. Decimala värden adderas exakt på samma sätt som heltal; decimalpunkterna ställer helt enkelt upp sig i summan." },
          { "kind": "h3", "text": "Arbeta med irrationella sidlängder" },
          { "kind": "p", "text": "Ta en triangel med [[a=1,\\;b=1,\\;c=\\sqrt{2}]]. Sedan [[P=1+1+\\sqrt{2}]], så [[[\\boxed{P=2+\\sqrt{2}}]]], ungefär [[P\\approx3.4142]]. Att behålla den exakta rotformen är användbart i matematiska problem eftersom den bevarar full precision; decimalapproximationen är för slutrapportering." },
          { "kind": "h3", "text": "Varför bör du undvika att avrunda för tidigt?" },
          { "kind": "p", "text": "För tidig avrundning injicerar små fel som den slutliga additionen sedan behåller. Om en sida är irrationell, som [[\\sqrt{2}]], hyvlar avrundning till 1,41 före additionen bort en del av den sanna längden, och med flera sådana sidor ackumuleras felet. Behåll full precision under mellanliggande beräkningar och avrunda endast slutresultatet till den noggrannhet som problemet kräver." }
        ]
      },
      "sec-mistakes": {
        "h2": "Vanliga misstag vid beräkning av omkrets för rätvinklig triangel",
        "blocks": [
          { "kind": "p", "text": "Sexton misstag står för nästan varje felaktig omkrets. Var och en förklaras med dess orsak och rätt tillvägagångssätt." },
          { "kind": "p", "text": "<strong>1. Att glömma att inkludera hypotenusan.</strong> Det vanligaste felet: att addera de två kateterna och stanna. Med 3-4-5 ger det 7 istället för 12. Addera alltid alla tre sidorna." },
          { "kind": "p", "text": "<strong>2. Att använda endast de två kateterna.</strong> Samma grundorsak som ovan, ofta från felläsning av problemet. Gränsen har tre kanter; räkna tre." },
          { "kind": "p", "text": "<strong>3. Att förväxla omkrets med area.</strong> Omkretsen är [[a+b+c]] i linjära enheter; arean är [[ab/2]] i kvadratenheter. Läs frågan: \"runt\" betyder omkrets, \"inuti\" betyder area." },
          { "kind": "p", "text": "<strong>4. Att mata in hypotenusan som en katet.</strong> Att sätta det längsta värdet i ett katetfält bryter geometrin. Hypotenusafältet måste hålla den längsta sidan." },
          { "kind": "p", "text": "<strong>5. Att välja fel sida som hypotenusa.</strong> Om 4 matas in som [[c]] medan 5 sitter i ett katetfält misslyckas varje kontroll. Sortera värdena först: det största är [[c]]." },
          { "kind": "p", "text": "<strong>6. Att använda mått som inte bildar en rätvinklig triangel.</strong> Testa [[a^2+b^2=c^2]] innan du litar på etiketten \"rätvinklig triangel\". Om den misslyckas adderar omkretsformeln fortfarande, men triangeln är inte rätvinklig." },
          { "kind": "p", "text": "<strong>7. Att blanda centimeter och meter.</strong> Att lägga till 3 m till 40 cm ger varken eller av något. Omvandla först till en enhet." },
          { "kind": "p", "text": "<strong>8. Att blanda fot och tum.</strong> Den klassiska imperiala fällan. Omvandla tum till fot (dividera med 12) innan du adderar, eller låt enhetsväljarna göra det." },
          { "kind": "p", "text": "<strong>9. Att rapportera omkrets i kvadratenheter.</strong> En omkrets på 12 cm i kvadrat är ett kategorifel: vandringen runt en triangel är en längd, mätt i cm, m, ft eller in." },
          { "kind": "p", "text": "<strong>10. Att avrunda mått för tidigt.</strong> Att avrunda [[\\sqrt{2}]] till 1,4 före additionen ackumulerar fel. Avrunda endast det slutliga svaret." },
          { "kind": "p", "text": "<strong>11. Att glömma att beräkna en saknad sida.</strong> Två kända sidor är ingen omkrets. Återställ den tredje med Pythagoras sats först, och addera sedan." },
          { "kind": "p", "text": "<strong>12. Att använda Pythagoras sats felaktigt.</strong> Hypotenusaformen adderar kvadrater ([[c=\\sqrt{a^2+b^2}]]); katetformen subtraherar ([[b=\\sqrt{c^2-a^2}]]). Att förväxla dem hittar på en sida som inte finns." },
          { "kind": "p", "text": "<strong>13. Att mata in negativa eller nollsidlängder.</strong> Längder är positiva. En noll- eller negativ inmatning beskriver ingen triangel, och räknaren vägrar den med rätta." },
          { "kind": "p", "text": "<strong>14. Att ignorera triangelolikheten.</strong> Om [[a+b\\leq c]] kan de tre längderna inte alls bilda en triangel. Kontrollera innan du beräknar." },
          { "kind": "p", "text": "<strong>15. Att anta att semiperimetern är den fulla omkretsen.</strong> Att dividera summan med 2 ger [[s]], inte [[P]]. För 3-4-5 är [[(3+4+5)/2=6]] semiperimetern; omkretsen är 12." },
          { "kind": "p", "text": "<strong>16. Att anta att omkretsen ensam bestämmer triangelns area.</strong> Som jämförelsen mellan 3-4-5 och 45-45-90 visade kan lika omkretser dölja olika areor. Omkretsen fixerar gränsen, inte det inre." },
          { "kind": "p", "text": "<strong>Rätt kontra fel, sida vid sida.</strong> Givet [[a=3,\\;b=4,\\;c=5]]: felaktigt är [[P=3+4=7]], vilket utelämnar hypotenusan och mäter bara de två kateterna. Korrekt är [[P=3+4+5=12]]. Och [[(3+4+5)/2=6]] är semiperimetern, en annan storhet med sina egna användningar, inte den fulla omkretsen." }
        ]
      },
      "sec-verify": {
        "h2": "Hur man kontrollerar att omkretsen för den rätvinkliga triangeln är korrekt",
        "blocks": [
          { "kind": "p", "text": "Sju oberoende kontroller fångar nästan varje fel. Triangeln 3-4-5 visar var och en. Oberoende kontroller spelar roll eftersom de misslyckas på olika sätt: när två orelaterade metoder är överens har svaret förtjänat sitt förtroende, vare sig det går in i läxor, tekniska ritningar eller materialplanering." },
          { "kind": "p", "text": "<strong>Metod 1: Addera alla tre sidorna igen.</strong> Räkna om [[P=a+b+c]] från början: [[3+4+5=12]]. En andra genomgång fångar tangentbords- och aritmetikfel." },
          { "kind": "p", "text": "<strong>Metod 2: Verifiera Pythagoras-förhållandet.</strong> Kontrollera [[a^2+b^2=c^2]]: [[9+16=25]]. Detta bekräftar att sidorna bildar en rätvinklig triangel, vilket validerar sidomärkningen som omkretsen beror på." },
          { "kind": "p", "text": "<strong>Metod 3: Kontrollera hypotenusan.</strong> Bekräfta [[c>a]] och [[c>b]]: 5 är större än 3 och större än 4. Om den påstådda hypotenusan inte är den längsta sidan är märkningen fel." },
          { "kind": "p", "text": "<strong>Metod 4: Kontrollera triangelolikheten.</strong> Bekräfta [[a+b>c]]: [[3+4=7>5]]. Summan av två sidor måste överstiga den tredje, annars finns ingen triangel." },
          { "kind": "p", "text": "<strong>Metod 5: Kontrollera omkretsgränserna.</strong> Bekräfta [[2c<P<3c]]: [[10<12<15]]. Dessa gränser är snabba huvudkontroller för varje giltig rätvinklig triangel." },
          { "kind": "p", "text": "<strong>Metod 6: Kontrollera måttenheterna.</strong> Bekräfta att alla tre inmatningarna delar en enhet. Blandade enheter ogiltigförklarar summan även när aritmetiken är perfekt." },
          { "kind": "p", "text": "<strong>Metod 7: Jämför resultatet med den levande visualiseringen.</strong> Det befintliga diagrammet på denna sida ritar om triangeln från dina inmatningar. Om en sida var felmärkt eller ett värde felskrivet ser bilden fel ut: en hypotenusa kortare än en katet, eller en form som inte sluts. Lita på bilden när den motsäger talet, och hitta sedan inmatningsfelet." }
        ]
      },
      "sec-conclusion": {
        "h2": "Tre sidor, en gräns, inga genvägar",
        "blocks": [
          { "kind": "p", "text": "Omkretsen av en rätvinklig triangel är den enklaste idén på denna sida och den lättaste att få fel genom utelämnande. Formeln ber om tre tal eftersom gränsen har tre kanter, och hypotenusan förtjänar sin plats i summan som kanten som sluter formen. Allt annat, den stegvisa metoden, återställandet av saknade sidor, olikheterna, verifieringskontrollerna, finns för att skydda den ena additionen från de små märknings- och enhetsfel som ger trovärdiga men felaktiga svar." },
          { "kind": "p", "text": "Använd denna sidas räknare när alla tre sidorna är uppmätta, återställ en saknad sida via Pythagoras sats när de inte är det, och kontrollera resultatet mot gränserna 2c < P < 3c innan talet går in i en materialbeställning. När frågan vänder sig till ytan inuti gränsen väntar arearäknaren; när den vänder sig till halva gränsen för en djupare formel tar semiperimeterräknaren över." }
        ]
      }
    },
    "relatedHeading": "Utforska relaterade räknare för rätvinklig triangel",
    "relatedIntro": "Var och en av dessa verktyg utvidgar omkretsberäkningen i en riktning: saknade sidor, halva omkretser, ytor, kombinerade mått eller satsen bakom allt.",
    "relatedItems": [
      "Räknare för rätvinklig triangels mått",
      "Räknare för rätvinklig triangels semiperimeter",
      "Räknare för rätvinklig triangels sida",
      "Räknare för rätvinklig triangels area",
      "Räknare för Pythagoras sats"
    ],
    "faqHeading": "Vanliga frågor",
    "faqs": [
      { "question": "Vad är formeln för omkretsen av en rätvinklig triangel?", "answer": "Formeln är P = a + b + c, där a och b är de två kateterna som bildar 90-gradersvinkeln och c är hypotenusan, den längsta sidan. Addera alla tre sidlängderna; resultatet är den totala gränslängden i linjära enheter." },
      { "question": "Hur beräknar jag omkretsen av en rätvinklig triangel?", "answer": "Identifiera de två kateterna och hypotenusan, bekräfta att alla tre använder samma enhet, substituera i P = a + b + c och addera. För en 3-4-5-triangel: P = 3 + 4 + 5 = 12 enheter. Räknaren på denna sida utför samma steg och visar sitt arbete." },
      { "question": "Varför måste jag inkludera hypotenusan?", "answer": "Hypotenusan är en av triangelns tre ytterkanter, så gränsen är ofullständig utan den. Att bara addera de två kateterna i en 3-4-5-triangel ger 7, vilket är kateternas sammanlagda längd, inte omkretsen. Den fulla vandringen runt triangeln är 3 + 4 + 5 = 12." },
      { "question": "Kan jag beräkna omkretsen om en sida saknas?", "answer": "Ja, men återställ först den saknade sidan med Pythagoras sats. Med kateterna 6 och 8 är hypotenusan sqrt(36 + 64) = 10, så omkretsen är 6 + 8 + 10 = 24. Med hypotenusan 13 och kateten 5 är den saknade kateten sqrt(169 - 25) = 12, så omkretsen är 30." },
      { "question": "Hur hittar jag hypotenusan innan jag beräknar omkretsen?", "answer": "Använd c = sqrt(a^2 + b^2) när båda kateterna är kända. För kateterna 6 och 8: c = sqrt(36 + 64) = sqrt(100) = 10. När hypotenusan är känd, addera alla tre sidorna för att få omkretsen." },
      { "question": "Är omkretsformeln annorlunda för en rätvinklig triangel?", "answer": "Nej. P = a + b + c fungerar för varje triangel. Det speciella med den rätvinkliga triangeln är Pythagoras-förhållandet a^2 + b^2 = c^2, som låter dig hitta en saknad sida eller verifiera att måtten verkligen bildar en rätvinklig triangel." },
      { "question": "Vad är omkretsen av en 3-4-5 rätvinklig triangel?", "answer": "Omkretsen är 3 + 4 + 5 = 12 enheter. Sidorna uppfyller 9 + 16 = 25, vilket bekräftar den räta vinkeln. Skalade versioner som 6-8-10 eller 9-12-15 behåller samma form med proportionellt större omkretser." },
      { "question": "Hur verifierar jag att tre sidor bildar en rätvinklig triangel?", "answer": "Kontrollera att a^2 + b^2 = c^2 med c som den längsta sidan. För 3, 4, 5: 9 + 16 = 25, så triangeln är rätvinklig. Om likheten misslyckas adderar omkretsformeln fortfarande, men triangeln är inte en rätvinklig triangel." },
      { "question": "Vad är skillnaden mellan omkrets och area?", "answer": "Omkretsen (P = a + b + c) mäter den totala sträckan runt triangeln i linjära enheter som meter eller fot. Arean (K = ab/2) mäter ytan inuti triangeln i kvadratenheter som kvadratmeter. För en 3-4-5-triangel är omkretsen 12 enheter och arean 6 kvadratenheter." },
      { "question": "Stöder omkretsräknaren decimala värden?", "answer": "Ja. Decimala sidlängder fungerar exakt som heltal: för a = 2,5, b = 6, c = 6,5 är omkretsen 2,5 + 6 + 6,5 = 15 enheter. Behåll full precision under beräkningen och avrunda endast det slutliga svaret." },
      { "question": "Vilka enheter ska jag använda för omkretsen?", "answer": "Vilken längdenhet som helst fungerar: meter, centimeter, millimeter, fot, tum, yard eller engelska mil. Alla tre sidorna måste dela samma enhet innan additionen. Räknaren omvandlar varje inmatning till en gemensam enhet automatiskt via sina enhetsväljare per inmatning." },
      { "question": "Vad är sambandet mellan omkrets och semiperimeter?", "answer": "Semiperimetern är exakt hälften av omkretsen: s = P/2. För en 3-4-5-triangel är P = 12 och s = 6. Semiperimetern förekommer i avancerade formler som Herons formel för area och inradierelationen K = rs." }
    ]
  }
};
