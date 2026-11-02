// areaFromHypotenuseAltitudeGuideTranslations.batch2.ts: Right Triangle Area From Hypotenuse and Altitude guide (Page 19) translations for fr + de + it.
// Built from AreaFromHypotenuseAltitudeGuide.astro; formulas, KaTeX markers, variable symbols, numbers, URLs and HTML tags are byte-identical to EN.

export const AREA_FROM_HYPOTENUSE_ALTITUDE_TRANSLATIONS_BATCH2 = {
  "fr": {
    "tocHeading": "Dans ce guide",
    "tocItems": {
      "sec-intro": "Comment calculer l'aire d'un triangle rectangle à partir de l'hypoténuse et de la hauteur",
      "sec-understand": "Comprendre l'hypoténuse, les cathètes et la hauteur",
      "sec-formula": "Pourquoi la formule de l'aire est la moitié de l'hypoténuse fois la hauteur",
      "sec-relationship": "Comment l'hypoténuse et la hauteur se rapportent aux deux cathètes",
      "sec-max": "Pourquoi la hauteur ne peut pas dépasser la moitié de l'hypoténuse",
      "sec-howto": "Comment utiliser la calculatrice d'aire avec hypoténuse et hauteur",
      "sec-examples": "Exemples résolus étape par étape",
      "sec-applications": "Applications dans la vie réelle",
      "sec-geomean": "La relation de moyenne géométrique",
      "sec-legs": "Retrouver les deux cathètes à partir de l'hypoténuse et de la hauteur",
      "sec-valid": "Vérifier la validité de vos mesures",
      "sec-units": "Unités de mesure et arrondi",
      "sec-mistakes": "Erreurs fréquentes",
      "sec-verify": "Comment vérifier votre aire",
      "sec-altitude-table": "Comment la hauteur influe sur l'aire",
      "sec-related": "Explorer les calculatrices de triangle rectangle associées",
      "sec-faq": "Questions fréquentes",
      "sec-conclusion": "Conclusion"
    },
    "faqHeading": "Questions fréquentes",
    "relatedHeading": "Explorer les calculatrices de triangle rectangle associées",
    "relatedIntro": "Des mesures différentes appellent des calculatrices différentes.",
    "relatedItems": [
      "Calculatrice d'aire de triangle rectangle",
      "Calculatrice d'aire de triangle rectangle à partir d'un angle",
      "Calculatrice d'aire de triangle rectangle à partir de la hauteur",
      "Calculatrice d'aire de triangle rectangle à partir des cathètes",
      "Calculatrice de hauteur de triangle rectangle",
      "Calculatrice d'aire de triangle rectangle à partir du rayon inscrit et du demi-périmètre"
    ],
    "sections": {
      "sec-intro": {
        "h2": "Comment calculer l'aire d'un triangle rectangle à partir de son hypoténuse et de sa hauteur",
        "blocks": [
          { "kind": "p", "text": "Un triangle rectangle a une hypoténuse de [[10\\text{ m}]] et la hauteur tracée sur cette hypoténuse mesure [[4.8\\text{ m}]]. On applique [[K=ch/2]] : [[K=(10\\times4.8)/2]], [[[\\boxed{K=24\\text{ m}^2}]]]. Le triangle renferme 24 mètres carrés de surface plane. Voilà la méthode complète que la calculatrice automatise : un côté, sa hauteur perpendiculaire, une multiplication, une division par deux." },
          { "kind": "p", "text": "L'hypoténuse sert de base parce que n'importe quel côté d'un triangle peut être la base quand la hauteur perpendiculaire correspondante est connue. La hauteur est le segment perpendiculaire tracé du sommet de l'angle droit à l'hypoténuse, et elle doit rencontrer l'hypoténuse à angle droit ; un segment incliné n'est pas la hauteur dont cette formule a besoin. Comme l'aire ne dépend que de la base et de sa hauteur, les deux cathètes ne sont pas nécessaires en entrée, et le résultat s'exprime toujours dans les unités carrées de l'unité de longueur utilisée." }
        ]
      },
      "sec-understand": {
        "h2": "Comprendre l'hypoténuse, les cathètes et la hauteur",
        "blocks": [
          { "kind": "p", "text": "La notation utilisée partout est la suivante : [[A]], [[B]] et [[C]] sont les sommets et les angles avec [[C=90^\\circ]] ; [[a]] et [[b]] sont les deux cathètes ; [[c]] est l'hypoténuse opposée à [[C]] ; [[h]] est la hauteur perpendiculaire tracée du sommet [[C]] à l'hypoténuse ; [[D]] est le point où la hauteur rencontre l'hypoténuse ; [[x]] et [[y]] sont les deux segments de l'hypoténuse ; et [[K]] est l'aire, utilisée partout pour ne jamais la confondre avec l'angle [[A]]." },
          { "kind": "h3", "text": "Qu'est-ce qu'un triangle rectangle ?" },
          { "kind": "p", "text": "Un triangle rectangle contient exactement un angle de 90 degrés. Ses deux cathètes se rencontrent à cet angle, et l'hypoténuse se trouve en face, comme le côté le plus long. Les deux autres angles sont aigus, et comme les trois angles totalisent 180 degrés, [[A+B+C=180^\\circ]] avec [[C=90^\\circ]] donne [[A+B=90^\\circ]]. La méthode de la hauteur en dépend : la base est le côté le plus long, la hauteur descend du sommet de l'angle droit." },
          { "kind": "h3", "text": "Qu'est-ce que l'hypoténuse ?" },
          { "kind": "p", "text": "L'hypoténuse est le côté opposé à l'angle droit, noté [[c]] dans la calculatrice. Pour la repérer dans n'importe quelle orientation, trouvez le côté qui ne touche pas le repère carré de l'angle droit ; ce côté est l'hypoténuse. Elle est plus longue que chaque cathète et n'a pas besoin d'être tracée horizontalement : une base est un côté de référence choisi, pas une direction à l'écran." },
          { "kind": "h3", "text": "Qu'est-ce qu'une hauteur en géométrie ?" },
          { "kind": "p", "text": "Une hauteur est un segment perpendiculaire tracé d'un sommet à la droite qui porte le côté opposé. Elle doit former un angle de 90 degrés avec ce côté, ce qui en fait une hauteur et pas simplement une ligne. Une hauteur n'est pas forcément l'un des côtés d'origine du triangle, et le segment qui compte comme hauteur change avec la base choisie." },
          { "kind": "h3", "text": "Comprendre la hauteur relative à l'hypoténuse" },
          { "kind": "p", "text": "Dans le triangle [[ABC]], [[C]] est le sommet de l'angle droit et [[AB]] est l'hypoténuse. La hauteur [[h]] est le segment [[CD]] tracé de [[C]] perpendiculairement à [[AB]], donc [[CD\\perp AB]], [[CD=h]] et [[AB=c]], avec [[D]] comme pied, ce qui partage le triangle en deux triangles rectangles plus petits emboîtés à l'intérieur." },
          { "kind": "h3", "text": "Comment la hauteur divise l'hypoténuse" },
          { "kind": "p", "text": "Supposons que la hauteur coupe l'hypoténuse en [[AD=x]] et [[DB=y]]. Alors [[[\\boxed{x+y=c}]]]. Chaque petit triangle contient un angle droit et partage un angle aigu avec le triangle d'origine, donc les trois triangles sont semblables. La similitude des deux petits triangles donne [[x/h=h/y]], et le produit en croix donne [[[\\boxed{h^2=xy}]]], la relation de moyenne géométrique : la hauteur est la moyenne géométrique des deux segments de l'hypoténuse, et le point de départ de la règle de hauteur maximale ci-dessous." }
        ],
        "imgAlt": "Triangle ABC avec angle droit en C, hypoténuse AB notée c, hauteur CD notée h, segments x et y",
        "figcaption": "Triangle ABC avec la hauteur CD sur l'hypoténuse : AD = x, DB = y, x + y = c, h&sup2; = xy, et K = ch/2."
      },
      "sec-formula": {
        "h2": "Pourquoi la formule de l'aire est-elle la moitié de l'hypoténuse fois la hauteur ?",
        "blocks": [
          { "kind": "p", "text": "L'aire de tout triangle part d'une seule règle [[K=\\frac12\\times\\text{base}\\times\\text{perpendicular height}]]. N'importe quel côté peut être la base si la hauteur utilisée lui est perpendiculaire. Cette calculatrice choisit l'hypoténuse comme base, donc [[\\text{base}=c]] et la hauteur perpendiculaire correspondante est la hauteur, [[\\text{height}=h]]. En substituant, on obtient [[K=\\frac12\\times c\\times h]], c'est-à-dire [[[\\boxed{K=\\frac{ch}{2}}]]]." },
          { "kind": "h3", "text": "Pourquoi l'hypoténuse peut-elle servir de base ?" },
          { "kind": "p", "text": "L'hypoténuse est simplement la base choisie pour ce calcul. La hauteur doit être mesurée à partir du sommet opposé, le sommet de l'angle droit [[C]], et elle doit être perpendiculaire à l'hypoténuse. Choisir un autre côté comme base avec sa propre hauteur correspondante donne la même aire. La base est un rôle joué par un côté, pas une étiquette permanente." },
          { "kind": "h3", "text": "Pourquoi la formule est-elle divisée par deux ?" },
          { "kind": "p", "text": "Un triangle remplit exactement la moitié du parallélogramme construit sur la même base avec la même hauteur perpendiculaire. Avec une base de 10 et une hauteur de 4,8, l'aire du parallélogramme est [[10\\times4.8=48]] ; le triangle à l'intérieur en occupe la moitié, donc [[K=48/2=24]]. Sauter la division par deux répond à une autre question : l'aire du parallélogramme, pas celle du triangle." },
          { "kind": "h3", "text": "La formule ne vaut-elle que pour les triangles rectangles ?" },
          { "kind": "p", "text": "L'équation [[K=ch/2]] est la formule générale de l'aire d'un triangle, valable pour tout triangle dès que [[c]] est la base choisie et [[h]] sa hauteur perpendiculaire. Ce qui rend cette page spécifique aux triangles rectangles, c'est la lecture : [[c]] est l'hypoténuse, [[h]] descend du sommet de l'angle droit, et la hauteur obéit à la restriction supplémentaire [[h\\leq c/2]], qui n'a aucun sens pour les triangles quelconques." },
          { "kind": "h3", "text": "Pourquoi vous n'avez pas besoin des deux cathètes" },
          { "kind": "p", "text": "L'aire demande un côté et sa hauteur perpendiculaire correspondante, rien de plus. Quand [[c]] et [[h]] sont déjà connus, les cathètes n'apportent aucune information qui changerait l'aire. La formule des cathètes [[K=ab/2]] est une autre voie d'entrée vers la même quantité, utile quand les données mesurées sont les deux côtés perpendiculaires. Si ce sont les cathètes que vous avez, la <a href=\"/right-triangle-area-from-legs-calculator/\">calculatrice d'aire de triangle rectangle à partir des cathètes</a> les prend directement." }
        ],
        "imgAlt": "Comparaison de l'aire K = ch/2 avec hypoténuse et hauteur contre K = ab/2 avec les deux cathètes",
        "figcaption": "Deux voies vers la même aire : l'hypoténuse avec sa hauteur, et les deux cathètes. Les deux égalent la région enfermée, donc ch/2 = ab/2."
      },
      "sec-relationship": {
        "h2": "Comment l'hypoténuse et la hauteur se rapportent aux deux cathètes",
        "blocks": [
          { "kind": "p", "text": "Deux formules d'aire valables décrivent le même triangle : [[K=ab/2]] et [[K=ch/2]]. Comme elles calculent la même aire, [[\\frac{ab}{2}=\\frac{ch}{2}]]. Multipliez les deux côtés par deux : [[ab=ch]]. En isolant la hauteur, on obtient [[[\\boxed{h=\\frac{ab}{c}}]]]. La hauteur relative à l'hypoténuse est le produit des deux cathètes divisé par l'hypoténuse, ce qui explique pourquoi les deux formules d'aire ne peuvent jamais se contredire sur un triangle cohérent." },
          { "kind": "h3", "text": "Pourquoi cette relation est utile" },
          { "kind": "p", "text": "Elle relie trois façons de décrire la même géométrie. Les cathètes et l'hypoténuse déterminent la hauteur, donc un triangle mesuré par ses côtés la contient déjà. La hauteur et l'hypoténuse déterminent l'aire, donc l'aire n'a jamais besoin que les cathètes soient retrouvées d'abord. Calculer l'aire par l'une ou l'autre formule et comparer est l'une des vérifications les plus solides, parce qu'une erreur sur une voie se reproduit rarement sur l'autre." },
          { "kind": "h3", "text": "Relier la formule au théorème de Pythagore" },
          { "kind": "p", "text": "Le théorème de Pythagore [[a^2+b^2=c^2]] vérifie le lien entre les cathètes et l'hypoténuse. Prenez un triangle 3-4-5 : [[3^2+4^2=5^2]], [[9+16=25]]. La hauteur est [[h=\\frac{3\\times4}{5}]], [[[\\boxed{h=2.4}]]]. L'aire par l'hypoténuse et la hauteur est [[K=\\frac{5\\times2.4}{2}=6]], et par les cathètes elle est [[K=\\frac{3\\times4}{2}=6]]. Les deux formules mesurent la même région enfermée, et [[h=ab/c]] est le lien qui le garantit." },
          { "kind": "h3", "text": "Comment la hauteur crée deux triangles semblables" },
          { "kind": "p", "text": "La hauteur divise le triangle d'origine en deux triangles rectangles plus petits, chacun partageant ses angles aigus avec l'original. Deux angles partagés rendent les trois triangles semblables, donc les côtés correspondants restent en proportion. En appariant la hauteur aux segments de l'hypoténuse, on obtient [[x/h=h/y]], qui donne par produit en croix [[h^2=xy]] : la relation de moyenne géométrique est la similitude écrite sous forme d'équation." }
        ]
      },
      "sec-max": {
        "h2": "Pourquoi la hauteur ne peut-elle jamais dépasser la moitié de l'hypoténuse ?",
        "blocks": [
          { "kind": "p", "text": "Tout triangle rectangle valable obéit à [[[\\boxed{h\\leq\\frac{c}{2}}]]]. C'est un fait géométrique, et il mérite une démonstration." },
          { "kind": "h3", "text": "Comprendre les deux segments de l'hypoténuse" },
          { "kind": "p", "text": "Rappelons [[x+y=c]] et [[h^2=xy]]. Le produit [[xy]] est maximal quand les deux segments sont égaux, conséquence de l'inégalité arithmético-géométrique : [[xy\\leq\\left(\\frac{x+y}{2}\\right)^2]]. Comme [[x+y=c]], le côté droit devient [[c^2/4]], donc [[h^2\\leq\\frac{c^2}{4}]], et pour des longueurs positives [[h\\leq c/2]]. En clair : des découpes inégales réduisent le produit et la hauteur ; la plus grande hauteur vient de la découpe la plus égale." },
          { "kind": "h3", "text": "Que se passe-t-il à la hauteur maximale ?" },
          { "kind": "p", "text": "Le maximum se produit quand [[x=y=c/2]], et alors [[h=c/2]]. Cela donne un triangle rectangle isocèle : ses deux cathètes sont égales, et ses angles aigus mesurent [[45^\\circ]] et [[45^\\circ]]. La hauteur joue alors aussi le rôle de médiane sur l'hypoténuse, un triangle valable, pas un cas dégénéré." },
          { "kind": "h3", "text": "Exemple de hauteur maximale" },
          { "kind": "p", "text": "Avec [[c=10]], la hauteur maximale est [[h_{\\max}=10/2=5]]. L'aire maximale est [[K=\\frac{10\\times5}{2}]], [[[\\boxed{K_{\\max}=25}]]]. Aucun triangle rectangle d'hypoténuse 10 ne peut avoir une hauteur supérieure à 5, et donc aucun ne peut avoir une aire supérieure à 25 unités carrées." },
          { "kind": "h3", "text": "Que se passe-t-il quand la hauteur dépasse c/2 ?" },
          { "kind": "p", "text": "Avec [[c=10]] et [[h=5.5]], la hauteur maximale valable est 5, donc ces mesures ne peuvent pas décrire un triangle rectangle. La formule produit quand même [[K=\\frac{10\\times5.5}{2}=27.5]], mais ce nombre ne représente aucun triangle rectangle valable avec ces mesures. Traitez-le comme le signal qu'une mesure est fausse, pas comme une aire. Ce guide ne prétend pas que la calculatrice rejette automatiquement de telles entrées." },
          { "kind": "h3", "text": "Que se passe-t-il quand la hauteur est beaucoup plus petite ?" },
          { "kind": "p", "text": "Une petite hauteur par rapport à l'hypoténuse décrit un triangle rectangle étroit et allongé, avec une cathète beaucoup plus longue que l'autre. À hypoténuse fixée, l'aire diminue quand la hauteur diminue, parce que [[K=ch/2]] varie directement avec [[h]]. Il n'y a pas de borne inférieure positive : la hauteur peut tendre vers zéro, et le triangle s'aplatit vers une ligne dégénérée." }
        ],
        "imgAlt": "Hauteur maximale c/2 dans un triangle rectangle isocèle, une hauteur valable plus petite, et un cas invalide",
        "figcaption": "À gauche : la hauteur maximale à c/2 donne la plus grande aire. Au milieu : une hauteur valable plus petite. À droite : une hauteur au-dessus de c/2 ne peut pas appartenir à un triangle rectangle."
      },
      "sec-howto": {
        "h2": "Comment utiliser la calculatrice d'aire de triangle rectangle à partir de l'hypoténuse et de la hauteur",
        "blocks": [
          { "kind": "p", "text": "La calculatrice n'a besoin que de deux entrées. Le parcours ci-dessous suit l'ordre affiché à l'écran, d'un triangle mesuré à un résultat vérifié." }
        ],
        "steps": [
          "<strong>Mesurez ou identifiez l'hypoténuse.</strong> Le côté le plus long, opposé à l'angle de 90 degrés.",
          "<strong>Identifiez la hauteur perpendiculaire tracée sur l'hypoténuse.</strong> Elle part du sommet de l'angle droit et rencontre l'hypoténuse à 90 degrés.",
          "<strong>Confirmez que la hauteur est perpendiculaire.</strong> Un segment mesuré le long d'un côté incliné n'est pas la hauteur dont la formule a besoin.",
          "<strong>Saisissez l'hypoténuse [[c]].</strong>",
          "<strong>Saisissez la hauteur [[h]].</strong>",
          "<strong>Choisissez des unités de longueur compatibles.</strong> Les deux mesures doivent utiliser la même unité.",
          "<strong>Vérifiez que les deux mesures sont positives.</strong> Des longueurs nulles ou négatives ne décrivent aucun triangle.",
          "<strong>Confirmez que [[h\\leq c/2]].</strong> Pour [[c=10]], toute hauteur au-dessus de 5 ne peut pas appartenir à un triangle rectangle avec cette hypoténuse.",
          "<strong>Cliquez sur Calculer l'aire.</strong>",
          "<strong>Examinez le résultat.</strong> L'aire apparaît dans les unités carrées correspondant aux entrées.",
          "<strong>Vérifiez les unités carrées.</strong> Des mètres donnent des mètres carrés ; des centimètres donnent des centimètres carrés.",
          "<strong>Relisez les étapes de résolution.</strong> Elles montrent la substitution et le calcul.",
          "<strong>Utilisez Réinitialiser avant de saisir un nouveau triangle.</strong> Cela efface les deux champs pour que le calcul suivant reparte de zéro."
        ],
        "closingParagraphs": [
          "La calculatrice ne demande ni les deux cathètes ni un angle : un côté et sa hauteur perpendiculaire correspondante déterminent entièrement l'aire."
        ]
      },
      "sec-examples": {
        "h2": "Exemples étape par étape d'aire de triangle rectangle avec hypoténuse et hauteur",
        "blocks": [
          { "kind": "p", "text": "Quatre exemples résolus construisent la méthode à partir du familier. Chacun applique [[K=ch/2]] en montrant chaque substitution, et chacun vérifie que la hauteur respecte la limite du triangle rectangle." },
          { "kind": "h3", "text": "Exemple 1 : l'exemple de la calculatrice existante" },
          { "kind": "p", "text": "Avec [[c=10]] et [[h=4.8]]. Étape 1 : écrivez la formule, [[K=ch/2]]. Étape 2 : substituez, [[K=\\frac{10\\times4.8}{2}]]. Étape 3 : multipliez, [[K=\\frac{48}{2}]]. Réponse finale : [[[\\boxed{K=24\\text{ square units}}]]]. La hauteur est valable parce que [[4.8<5]], en dessous du maximum de la moitié de l'hypoténuse." },
          { "kind": "h3", "text": "Exemple 2 : un triangle 3-4-5" },
          { "kind": "p", "text": "Avec [[a=3]], [[b=4]], [[c=5]]. Trouvez d'abord la hauteur : [[h=ab/c]], donc [[h=\\frac{3\\times4}{5}=2.4]]. Puis [[K=\\frac{5\\times2.4}{2}]], [[[\\boxed{K=6}]]]. Vérifiez avec les cathètes : [[K=\\frac{3\\times4}{2}=6]]. Les deux voies concordent, comme elles le doivent." },
          { "kind": "h3", "text": "Exemple 3 : un triangle rectangle isocèle" },
          { "kind": "p", "text": "Avec [[c=10]] et [[h=5]]. Alors [[K=\\frac{10\\times5}{2}]], [[[\\boxed{K=25}]]]. La hauteur égale la moitié de l'hypoténuse, donc les cathètes sont égales et chaque angle aigu mesure [[45^\\circ]]. C'est l'aire maximale possible pour tout triangle rectangle d'hypoténuse 10." },
          { "kind": "h3", "text": "Exemple 4 : une hauteur triangulaire plus petite" },
          { "kind": "p", "text": "Avec [[c=13]] et [[h=5]]. Alors [[K=\\frac{13\\times5}{2}]], [[[\\boxed{K=32.5\\text{ square units}}]]]. La hauteur respecte la limite parce que [[5\\leq6.5]] : la moitié de l'hypoténuse est 6,5, et 5 est largement en dessous." }
        ]
      },
      "sec-applications": {
        "h2": "Applications dans la vie réelle de l'aire du triangle rectangle à partir de l'hypoténuse et de la hauteur",
        "blocks": [
          { "kind": "p", "text": "Douze situations résolues montrent la formule à différentes échelles et dans différentes unités. Chacune nomme le triangle de la scène, donne les deux mesures, substitue étape par étape et énonce l'hypothèse sous-jacente. Chaque exemple est un panneau, un profil, une section ou un modèle simplifié de forme triangulaire rectangle ; la formule s'applique au triangle modélisé, pas à tout objet courbe ou irrégulier du même nom." },
          { "kind": "h3", "text": "Exemple 1 : vitre triangulaire" },
          { "kind": "p", "text": "Un panneau de verre triangulaire rectangle a une hypoténuse de [[2.5\\text{ m}]] et une hauteur perpendiculaire de [[1.2\\text{ m}]]. Avec [[K=ch/2]] : [[K=\\frac{2.5\\times1.2}{2}]], [[[\\boxed{K=1.5\\text{ m}^2}]]]. C'est l'aire du verre plat avant le cadre, en supposant des bords droits et un vrai angle droit." },
          { "kind": "h3", "text": "Exemple 2 : panneau latéral de rampe triangulaire" },
          { "kind": "p", "text": "Un panneau latéral triangulaire rectangle d'une rampe a une hypoténuse de [[4\\text{ m}]] et une hauteur perpendiculaire de [[1.5\\text{ m}]]. Alors [[K=\\frac{4\\times1.5}{2}]], [[[\\boxed{K=3\\text{ m}^2}]]]. Le résultat décrit le profil triangulaire latéral, pas la surface de marche." },
          { "kind": "h3", "text": "Exemple 3 : section de voile triangulaire" },
          { "kind": "p", "text": "Une section de voile triangulaire rectangle a une hypoténuse de [[13\\text{ ft}]] et une hauteur de [[5\\text{ ft}]]. Alors [[K=\\frac{13\\times5}{2}]], [[[\\boxed{K=32.5\\text{ ft}^2}]]]. C'est l'aire du tissu plat avant les coutures ou la courbure ; les vraies voiles se gonflent, donc la voile est modélisée comme plate." },
          { "kind": "h3", "text": "Exemple 4 : arpentage d'une parcelle triangulaire" },
          { "kind": "p", "text": "Une parcelle simplifiée triangulaire rectangle a une hypoténuse de [[50\\text{ m}]] et une hauteur de [[12\\text{ m}]]. Alors [[K=\\frac{50\\times12}{2}]], [[[\\boxed{K=300\\text{ m}^2}]]]. Cela estime l'aire sous un modèle simplifié qui traite les limites comme des lignes droites sur un sol plat." },
          { "kind": "h3", "text": "Exemple 5 : gousset en acier" },
          { "kind": "p", "text": "Une plaque de support triangulaire rectangle en acier a une hypoténuse de [[3.4\\text{ m}]] et une hauteur de [[1.6\\text{ m}]]. Alors [[K=\\frac{3.4\\times1.6}{2}]], [[[\\boxed{K=2.72\\text{ m}^2}]]]. C'est l'aire de la plaque plate uniquement ; la capacité portante est une autre question." },
          { "kind": "h3", "text": "Exemple 6 : profil latéral d'escalier" },
          { "kind": "p", "text": "Un profil latéral d'escalier simplifié triangulaire rectangle a une hypoténuse de [[5\\text{ m}]] et une hauteur de [[2\\text{ m}]]. Alors [[K=\\frac{5\\times2}{2}]], [[[\\boxed{K=5\\text{ m}^2}]]]. Cela décrit le profil triangulaire latéral, pas la somme des marches et contremarches." },
          { "kind": "h3", "text": "Exemple 7 : panneau de signalisation triangulaire" },
          { "kind": "p", "text": "Un panneau de signalisation triangulaire rectangle a une hypoténuse de [[1.8\\text{ m}]] et une hauteur de [[0.8\\text{ m}]]. Alors [[K=\\frac{1.8\\times0.8}{2}]], [[[\\boxed{K=0.72\\text{ m}^2}]]]. 0,72 mètre carré de surface de panneau ; le matériel de fixation est exclu." },
          { "kind": "h3", "text": "Exemple 8 : panneau de support solaire" },
          { "kind": "p", "text": "Un panneau de support de montage triangulaire rectangle a une hypoténuse de [[3\\text{ m}]] et une hauteur de [[1.2\\text{ m}]]. Alors [[K=\\frac{3\\times1.2}{2}]], [[[\\boxed{K=1.8\\text{ m}^2}]]]. Aire du panneau uniquement ; rien sur l'électricité produite, puisqu'il s'agit d'un support de montage." },
          { "kind": "h3", "text": "Exemple 9 : gabarit de découpe en contreplaqué" },
          { "kind": "p", "text": "Un gabarit triangulaire rectangle en contreplaqué a une hypoténuse de [[2.5\\text{ m}]] et une hauteur de [[1\\text{ m}]]. Alors [[K=\\frac{2.5\\times1}{2}]], [[[\\boxed{K=1.25\\text{ m}^2}]]]. Pièce triangulaire utilisable ; les chutes de découpe demandent une marge séparée." },
          { "kind": "h3", "text": "Exemple 10 : bannière triangulaire en tissu" },
          { "kind": "p", "text": "Une bannière triangulaire rectangle a une hypoténuse de [[6\\text{ ft}]] et une hauteur de [[2.4\\text{ ft}]]. Alors [[K=\\frac{6\\times2.4}{2}]], [[[\\boxed{K=7.2\\text{ ft}^2}]]]. 7,2 pieds carrés de tissu plat ; les surplus d'ourlet sont ajoutés par le fabricant." },
          { "kind": "h3", "text": "Exemple 11 : grande parcelle arpentée triangulaire" },
          { "kind": "p", "text": "Une section de terrain triangulaire rectangle a une hypoténuse de [[80\\text{ m}]] et une hauteur de [[30\\text{ m}]]. Alors [[K=\\frac{80\\times30}{2}]], [[[\\boxed{K=1,200\\text{ m}^2}]]]. Valable uniquement là où la parcelle est vraiment triangulaire rectangle sur un sol plat." },
          { "kind": "h3", "text": "Exemple 12 : panneau de support d'auvent triangulaire" },
          { "kind": "p", "text": "Un panneau de support d'auvent triangulaire rectangle a une hypoténuse de [[8\\text{ m}]] et une hauteur de [[3.6\\text{ m}]]. Alors [[K=\\frac{8\\times3.6}{2}]], [[[\\boxed{K=14.4\\text{ m}^2}]]]. Aire triangulaire plate ; les charges de vent et les fixations sont des questions séparées." },
          { "kind": "h3", "text": "Comparaison des exemples pratiques" }
        ],
        "table": {
          "headers": ["Application", "Hypoténuse c", "Hauteur h", "Aire", "Unité"],
          "rows": [
            ["Vitre", "2.5", "1.2", "1.5", "m²"],
            ["Panneau latéral de rampe", "4", "1.5", "3", "m²"],
            ["Section de voile", "13", "5", "32.5", "ft²"],
            ["Parcelle de terrain", "50", "12", "300", "m²"],
            ["Gousset", "3.4", "1.6", "2.72", "m²"],
            ["Profil d'escalier", "5", "2", "5", "m²"],
            ["Panneau de signalisation", "1.8", "0.8", "0.72", "m²"],
            ["Panneau de support solaire", "3", "1.2", "1.8", "m²"],
            ["Gabarit en contreplaqué", "2.5", "1", "1.25", "m²"],
            ["Bannière en tissu", "6", "2.4", "7.2", "ft²"],
            ["Grande parcelle arpentée", "80", "30", "1,200", "m²"],
            ["Panneau de support d'auvent", "8", "3.6", "14.4", "m²"]
          ]
        },
        "imgAlt": "Quatre applications de K = ch/2 : vitre, panneau de rampe, voile et parcelle arpentée",
        "figcaption": "La même formule dans quatre scènes : une vitre, un panneau latéral de rampe, une voile et une parcelle arpentée."
      },
      "sec-geomean": {
        "h2": "Pourquoi le carré de la hauteur est-il égal au produit de deux segments de l'hypoténuse ?",
        "blocks": [
          { "kind": "p", "text": "La hauteur rencontre l'hypoténuse en [[D]], la divisant en [[AD=x]] et [[DB=y]]. La relation est [[[\\boxed{h^2=xy}]]]. Ici [[x]] est le premier segment, [[y]] est le second, et [[h]] est la hauteur perpendiculaire. Il vaut la peine de voir d'où cela vient plutôt que de l'apprendre par cœur." },
          { "kind": "h3", "text": "Comment cette relation fonctionne-t-elle ?" },
          { "kind": "p", "text": "La hauteur crée deux triangles rectangles plus petits, chacun semblable à l'original et donc semblables entre eux. En appariant le petit côté de l'un au grand côté de l'autre, on obtient [[\\frac{x}{h}=\\frac{h}{y}]], qui donne par produit en croix [[h^2=xy]]. En prenant les racines carrées, [[h=\\sqrt{xy}]] : la hauteur est la moyenne géométrique des deux segments de l'hypoténuse, le nombre dont le carré égale leur produit." },
          { "kind": "h3", "text": "Un exemple numérique" },
          { "kind": "p", "text": "Avec [[x=4]] et [[y=9]], alors [[h^2=4\\times9=36]], [[[\\boxed{h=6}]]]. L'hypoténuse complète est [[c=4+9=13]], et l'aire est [[K=\\frac{13\\times6}{2}]], [[[\\boxed{K=39}]]]. Quand les deux segments de l'hypoténuse sont connus, la hauteur suit sans aucune mesure de cathète." },
          { "kind": "h3", "text": "Quand cette relation est-elle utile ?" },
          { "kind": "p", "text": "Elle apparaît dans les exercices de géométrie où la hauteur manque mais les segments sont donnés, dans les problèmes de similitude, et chaque fois qu'une mesure de hauteur a besoin d'une vérification indépendante. Elle explique aussi la limite de hauteur : le produit [[xy]] est plafonné par l'hypoténuse fixée, donc la hauteur est plafonnée elle aussi. La calculatrice n'a pas besoin de [[x]] et [[y]] en entrée ; ce théorème est un savoir de soutien, pas un champ de la calculatrice." }
        ]
      },
      "sec-legs": {
        "h2": "Comment retrouver les deux cathètes quand l'hypoténuse et la hauteur sont connues",
        "blocks": [
          { "kind": "p", "text": "La calculatrice n'a besoin que de [[c]] et [[h]] pour l'aire, mais ces deux mesures contiennent aussi assez d'information pour déterminer les longueurs des deux cathètes, à l'échange de leurs positions près. Partez de [[a^2+b^2=c^2]] et [[ab=ch]]. Comme [[(a^2-b^2)^2=(a^2+b^2)^2-4a^2b^2]], la substitution donne [[(a^2-b^2)^2=c^4-4c^2h^2]], et donc [[[\\boxed{a^2,b^2=\\frac{c^2\\pm c\\sqrt{c^2-4h^2}}{2}}]]]. Les deux signes correspondent aux deux attributions de cathètes : échanger les cathètes ne change rien au triangle ni à son aire." },
          { "kind": "p", "text": "Exemple numérique : avec [[c=10]] et [[h=4.8]], alors [[ab=ch=48]] et [[a^2+b^2=100]]. Les cathètes sont [[a=6]] et [[b=8]]. Vérification : [[6^2+8^2=10^2]], [[36+64=100]]. L'aire se vérifie des deux côtés : [[K=\\frac{6\\times8}{2}=24]] et [[K=\\frac{10\\times4.8}{2}=24]]. C'est un éclairage mathématique supplémentaire, pas une fonction de plus de la calculatrice existante, et il ne doit pas détourner du but de la calculatrice : l'aire à partir de l'hypoténuse et de la hauteur." }
        ]
      },
      "sec-valid": {
        "h2": "Comment vérifier que vos mesures d'hypoténuse et de hauteur sont valables",
        "blocks": [
          { "kind": "p", "text": "Pour un triangle rectangle non dégénéré, les entrées doivent satisfaire trois conditions [[c>0]], [[h>0]] et [[h\\leq c/2]]. Les deux premières écartent les longueurs nulles et négatives ; la troisième est la limite de hauteur démontrée plus haut. Les trois doivent tenir à la fois." },
          { "kind": "h3", "text": "Exemple d'entrée valable" },
          { "kind": "p", "text": "Avec [[c=12]] et [[h=5]], la hauteur maximale est [[h_{\\max}=6]]. Comme [[5<6]], les mesures sont valables, et [[K=\\frac{12\\times5}{2}=30]]." },
          { "kind": "h3", "text": "Exemple d'entrée invalide" },
          { "kind": "p", "text": "Avec [[c=12]] et [[h=7]], la hauteur maximale est [[h_{\\max}=6]]. Comme [[7>6]], les mesures ne peuvent pas décrire un triangle rectangle : avec l'hypoténuse fixée à 12, aucune découpe en segments [[x]] et [[y]] ne peut faire atteindre 7 à [[\\sqrt{xy}]]." },
          { "kind": "h3", "text": "Cas limite" },
          { "kind": "p", "text": "Avec [[c=12]] et [[h=6]], la hauteur égale la valeur maximale possible. C'est un triangle rectangle isocèle avec deux cathètes égales, assis exactement sur la limite. La limite est inclusive : [[h\\leq c/2]] autorise l'égalité." },
          { "kind": "h3", "text": "Et les valeurs nulles ou négatives ?" },
          { "kind": "p", "text": "Une hypoténuse doit être positive, et une hauteur doit être positive pour un triangle non dégénéré. Une hauteur nulle produit une aire nulle et une forme dégénérée, une ligne plutôt qu'un triangle, tandis que les longueurs négatives n'ont aucun sens géométrique. Ce guide ne prétend pas que la calculatrice effectue automatiquement chaque validation." }
        ]
      },
      "sec-units": {
        "h2": "Comprendre les unités d'aire dans les calculs avec hypoténuse et hauteur",
        "blocks": [
          { "kind": "p", "text": "L'aire est bidimensionnelle, donc son unité est le carré de l'unité de longueur. En symboles, [[\\text{m}\\times\\text{m}=\\text{m}^2]]. Les sélecteurs d'unité existent pour que le résultat puisse être étiqueté correctement." },
          { "kind": "h3", "text": "Pourquoi les unités doivent correspondre" },
          { "kind": "p", "text": "L'hypoténuse et la hauteur doivent être exprimées dans la même unité avant d'appliquer la formule. Si l'hypoténuse fait 200 cm et la hauteur 1 m, convertissez d'abord en 200 cm et 100 cm. Alors [[K=\\frac{200\\times100}{2}]], [[K=10,000\\text{ cm}^2]], ou de façon équivalente [[K=1\\text{ m}^2]]. Multiplier des mesures dans des unités différentes produit un nombre sans unité propre, donc convertissez d'abord et calculez ensuite." },
          { "kind": "h3", "text": "Pourquoi l'arrondi compte" },
          { "kind": "p", "text": "L'arrondi des mesures modifie légèrement l'aire finale, parce que la hauteur y est multipliée directement. Gardez toute la précision dans les étapes intermédiaires et n'arrondissez que la réponse finale ; arrondir la hauteur trop tôt cumule l'erreur." },
          { "kind": "h3", "text": "Valeurs exactes contre valeurs mesurées" },
          { "kind": "p", "text": "Les mesures exactes, comme la hauteur 5 d'un triangle rectangle isocèle d'hypoténuse 10, se comportent différemment des lectures au mètre ou à l'instrument. L'incertitude de l'instrument se propage dans l'aire, donc traitez le dernier chiffre comme aussi fiable que les entrées seulement." }
        ]
      },
      "sec-mistakes": {
        "h2": "Erreurs fréquentes dans le calcul de l'aire d'un triangle rectangle à partir de l'hypoténuse et de la hauteur",
        "blocks": [
          { "kind": "p", "text": "La plupart des mauvaises réponses viennent d'entrées mal étiquetées plutôt que de mauvais calculs. Les quinze erreurs ci-dessous couvrent presque toutes." },
          { "kind": "h3", "text": "1. Confondre l'hypoténuse avec une cathète" },
          { "kind": "p", "text": "Saisir une cathète comme hypoténuse rétrécit la base. Correction : choisissez le côté qui ne touche pas le repère de l'angle droit." },
          { "kind": "h3", "text": "2. Mesurer la hauteur le long d'un côté incliné" },
          { "kind": "p", "text": "Un segment qui court le long d'un côté n'est pas la hauteur. Correction : elle doit partir du sommet de l'angle droit et frapper l'hypoténuse à 90 degrés." },
          { "kind": "h3", "text": "3. Utiliser une distance non perpendiculaire à l'hypoténuse" },
          { "kind": "p", "text": "Une distance non perpendiculaire du sommet à l'hypoténuse est plus longue que la vraie hauteur, ce qui gonfle l'aire. Correction : confirmez d'abord la perpendicularité." },
          { "kind": "h3", "text": "4. Utiliser la hauteur issue du mauvais sommet" },
          { "kind": "p", "text": "Seule la hauteur issue du sommet de l'angle droit s'apparie avec l'hypoténuse." },
          { "kind": "h3", "text": "5. Oublier de diviser par deux" },
          { "kind": "p", "text": "[[c\\times h]] est l'aire du parallélogramme, pas celle du triangle. Correction : divisez par deux chaque produit base-hauteur." },
          { "kind": "h3", "text": "6. Saisir la mauvaise mesure comme c" },
          { "kind": "p", "text": "Un côté plus court saisi comme hypoténuse rétrécit la base. Correction : l'hypoténuse est toujours le côté le plus long." },
          { "kind": "h3", "text": "7. Saisir la mauvaise mesure comme h" },
          { "kind": "p", "text": "Une cathète saisie comme hauteur brise l'appariement perpendiculaire. Correction : la hauteur doit rencontrer l'hypoténuse à angle droit." },
          { "kind": "h3", "text": "8. Mélanger différentes unités de longueur" },
          { "kind": "p", "text": "Une hypoténuse de 2 m avec une hauteur de 150 cm ne donne aucun nombre significatif. Correction : convertissez d'abord vers une seule unité." },
          { "kind": "h3", "text": "9. Exprimer l'aire en unités linéaires" },
          { "kind": "p", "text": "Une aire de 24 m² n'est pas 24 m. Correction : écrivez l'unité au carré avec le nombre." },
          { "kind": "h3", "text": "10. Saisir une hauteur négative" },
          { "kind": "p", "text": "Les longueurs ne peuvent pas être négatives ; une hauteur négative signale une erreur de saisie. Correction : ressaisissez la distance positive mesurée." },
          { "kind": "h3", "text": "11. Saisir une hypoténuse nulle" },
          { "kind": "p", "text": "Une hypoténuse nulle signifie qu'aucun triangle n'existe. Correction : vérifiez que chaque longueur est positive." },
          { "kind": "h3", "text": "12. Utiliser une hauteur supérieure à la moitié de l'hypoténuse" },
          { "kind": "p", "text": "Une hauteur de 6 avec [[c=10]] viole la limite. Correction : revérifiez le segment mesuré." },
          { "kind": "h3", "text": "13. Supposer que tout triangle avec la même base et la même hauteur est forcément rectangle" },
          { "kind": "p", "text": "[[K=ch/2]] vaut pour tout triangle avec une base et une hauteur appariées. Correction : n'appliquez la limite de hauteur qu'aux triangles rectangles." },
          { "kind": "h3", "text": "14. Confondre la hauteur h avec l'une des cathètes a ou b" },
          { "kind": "p", "text": "Dans un triangle 6-8-10, la hauteur est 4,8, ce qui n'égale aucune cathète. Correction : gardez [[a]], [[b]] et [[h]] séparés." },
          { "kind": "h3", "text": "15. Supposer que la formule valide automatiquement la géométrie du triangle" },
          { "kind": "p", "text": "Le calcul ne refuse jamais une entrée. Correction : faites vous-même les vérifications de validité." },
          { "kind": "h3", "text": "Faux contre correct : un exemple concret" },
          { "kind": "p", "text": "Avec [[c=10]] et [[h=4]], le calcul correct est [[K=\\frac{10\\times4}{2}=20]]. Sauter la division par deux donne [[K=10\\times4=40]], le double de l'aire du triangle. De même, [[h=6]] avec [[c=10]] échoue à la limite de hauteur même si le calcul produit un nombre." }
        ]
      },
      "sec-verify": {
        "h2": "Comment vérifier que l'aire de votre triangle rectangle est correcte",
        "blocks": [
          { "kind": "p", "text": "Plusieurs vérifications attrapent les erreurs courantes. Le triangle 6-8-10 en démontre la plupart." },
          { "kind": "h3", "text": "Méthode 1 : revérifier la formule d'aire" },
          { "kind": "p", "text": "Recalculez [[K=ch/2]] avec les valeurs saisies. Pour [[c=10]] et [[h=4.8]], [[K=(10\\times4.8)/2=24]]. Un second passage attrape les fautes de frappe." },
          { "kind": "h3", "text": "Méthode 2 : vérifier avec les deux cathètes" },
          { "kind": "p", "text": "Quand les cathètes sont connues ou retrouvées, [[K=ab/2]] doit concorder. Ici [[(6\\times8)/2=24]] correspond à [[(10\\times4.8)/2=24]] : deux méthodes, un triangle, une réponse." },
          { "kind": "h3", "text": "Méthode 3 : vérifier le théorème de Pythagore" },
          { "kind": "p", "text": "Confirmez [[a^2+b^2=c^2]] : [[36+64=100]]. Si les côtés ne le satisfont pas, l'identification du triangle est fausse." },
          { "kind": "h3", "text": "Méthode 4 : vérifier la relation de hauteur" },
          { "kind": "p", "text": "Confirmez [[h=ab/c]] : [[(6\\times8)/10=4.8]]. Un écart signifie que la hauteur saisie n'appartient pas à ce triangle." },
          { "kind": "h3", "text": "Méthode 5 : vérifier les deux segments de l'hypoténuse" },
          { "kind": "p", "text": "Confirmez [[x+y=c]] et [[h^2=xy]]. Avec les segments 6,4 et 3,6 : [[6.4+3.6=10]] et [[4.8^2=6.4\\times3.6]], puisque [[23.04=23.04]]." },
          { "kind": "h3", "text": "Méthode 6 : vérifier la hauteur maximale" },
          { "kind": "p", "text": "Confirmez [[h\\leq c/2]]. Ici [[4.8\\leq5]]. Toute aire de triangle rectangle revendiquée au-dessus de [[c^2/4]] pour l'hypoténuse donnée est impossible." },
          { "kind": "h3", "text": "Méthode 7 : vérifier les unités" },
          { "kind": "p", "text": "Assurez-vous que le résultat est en unités carrées : des mètres donnent des mètres carrés, des centimètres donnent des centimètres carrés. Une aire exprimée en unités linéaires est incomplète même quand le nombre est juste." }
        ]
      },
      "sec-altitude-table": {
        "h2": "Comment la hauteur influe-t-elle sur l'aire d'un triangle rectangle ?",
        "blocks": [
          { "kind": "p", "text": "D'après [[K=ch/2]], quand l'hypoténuse est fixée, l'aire varie directement avec la hauteur. Doubler la hauteur double l'aire ; augmenter la hauteur augmente l'aire dans la même proportion. Le tableau ci-dessous fixe [[c=10]] et fait varier la hauteur jusqu'à son maximum de 5." },
          { "kind": "p", "text": "Les cinq lignes décrivent toutes des triangles rectangles valables parce que chaque hauteur est au maximum de 5 ou en dessous. La hauteur ne peut pas dépasser [[c/2]], et l'aire maximale se produit quand les deux cathètes sont égales. Notez que les cathètes ne restent pas fixes pendant que la hauteur change ; chaque ligne est un triangle différent partageant une hypoténuse." }
        ],
        "table": {
          "headers": ["Hauteur h", "Aire K"],
          "rows": [
            ["1", "5"],
            ["2", "10"],
            ["3", "15"],
            ["4", "20"],
            ["5", "25"]
          ]
        }
      },
      "sec-related": {
        "h2": "Explorer les calculatrices de triangle rectangle associées",
        "blocks": [
          { "kind": "p", "text": "Des mesures différentes appellent des calculatrices différentes." }
        ]
      },
      "sec-faq": {
        "h2": "Questions fréquentes",
        "blocks": []
      },
      "sec-conclusion": {
        "h2": "L'hypoténuse et sa hauteur suffisent",
        "blocks": [
          { "kind": "p", "text": "La méthode hypoténuse-hauteur est la règle ordinaire base-hauteur appliquée au côté le plus long. Une fois l'hypoténuse identifiée et la hauteur perpendiculaire en main, l'aire est à une multiplication et une division par deux, sans besoin de retrouver d'abord les cathètes." },
          { "kind": "p", "text": "Sa vraie valeur, c'est la discipline : la perpendicularité, la limite de hauteur et les relations de moyenne géométrique transforment des croquis approximatifs en nombres vérifiables. Vérifiez la hauteur et la réponse gagne sa confiance." }
        ]
      }
    },
    "faqs": [
      { "question": "Comment calculer l'aire d'un triangle rectangle à partir de son hypoténuse et de sa hauteur ?", "answer": "Multipliez l'hypoténuse c par la hauteur perpendiculaire h et divisez par deux : K = ch/2. Par exemple, c = 10 et h = 4,8 donnent K = 24 unités carrées. Confirmez que la hauteur rencontre l'hypoténuse à angle droit et que h vaut au plus la moitié de c." },
      { "question": "Quelle est la formule de l'aire avec l'hypoténuse et la hauteur ?", "answer": "La formule est K = ch/2, où K est l'aire, c est l'hypoténuse comme base, et h est la hauteur perpendiculaire à cette base. C'est la règle d'aire ordinaire du triangle avec le côté le plus long comme base, et le résultat utilise les unités carrées correspondantes." },
      { "question": "Qu'est-ce que la hauteur relative à l'hypoténuse ?", "answer": "C'est le segment perpendiculaire tracé du sommet de l'angle droit C à l'hypoténuse AB, la rencontrant au point D : la plus courte distance de ce sommet à l'hypoténuse et la seule hauteur qui s'apparie avec elle. Ce n'est pas une cathète." },
      { "question": "La hauteur est-elle la même chose que l'hypoténuse ?", "answer": "Non. L'hypoténuse c est le côté le plus long, opposé à l'angle droit, tandis que la hauteur h est la chute perpendiculaire du sommet de l'angle droit vers ce côté : c est la base, h est la hauteur. Dans un triangle 6-8-10, c = 10 et h = 4,8." },
      { "question": "La hauteur peut-elle dépasser la moitié de l'hypoténuse ?", "answer": "Non. Pour un triangle rectangle valable, 0 < h <= c/2. La hauteur est la plus grande quand elle partage l'hypoténuse en deux moitiés égales, atteignant exactement c/2. Une valeur plus grande, comme h = 6 avec c = 10, ne peut pas appartenir à un tel triangle." },
      { "question": "Pourquoi la hauteur maximale est-elle la moitié de l'hypoténuse ?", "answer": "D'après h au carré = xy avec x + y = c, le produit xy est maximal quand x = y = c/2. Alors h au carré <= c au carré / 4, donc h <= c/2 : la découpe la plus égale donne la hauteur la plus grande." },
      { "question": "Que se passe-t-il quand la hauteur égale la moitié de l'hypoténuse ?", "answer": "Le triangle est un triangle rectangle isocèle : cathètes égales, angles aigus de 45 degrés, et la hauteur jouant aussi le rôle de médiane sur l'hypoténuse. Ce cas limite valable donne la plus grande aire possible, K = c au carré / 4." },
      { "question": "Puis-je calculer l'aire sans connaître les deux cathètes ?", "answer": "Oui. La base et sa hauteur perpendiculaire correspondante suffisent ; les cathètes n'ajoutent rien sur l'aire. Saisissez l'hypoténuse c et la hauteur h, et K = ch/2 donne l'aire directement." },
      { "question": "Comment la formule basée sur l'hypoténuse se rapporte-t-elle à la formule des cathètes ?", "answer": "Les deux calculent la même aire. En égalant ab/2 à ch/2 et en multipliant par deux, on obtient ab = ch, donc h = ab/c, et c'est pourquoi calculer les deux est une vérification si solide." },
      { "question": "Quelle est la relation entre la hauteur et les deux segments de l'hypoténuse ?", "answer": "La hauteur satisfait h au carré = xy, où x et y sont les segments qu'elle découpe dans l'hypoténuse, donc elle est leur moyenne géométrique. Elle vient de la similitude des deux petits triangles, via x/h = h/y." },
      { "question": "L'hypoténuse et la hauteur peuvent-elles déterminer les deux cathètes ?", "answer": "Oui, à l'échange près. D'après a au carré + b au carré = c au carré et ab = ch, les cathètes suivent de (c au carré +/- c fois racine de (c au carré - 4h au carré)) / 2. Pour c = 10 et h = 4,8, cela donne les cathètes 6 et 8." },
      { "question": "La calculatrice fonctionne-t-elle avec les centimètres, les mètres et les pieds ?", "answer": "Oui, tant que les deux entrées utilisent la même unité : des mètres donnent des mètres carrés, des centimètres donnent des centimètres carrés, des pieds donnent des pieds carrés. Convertissez d'abord les unités mélangées." }
    ]
  },
  "de": {
    "tocHeading": "In diesem Leitfaden",
    "tocItems": {
      "sec-intro": "So berechnen Sie die Fläche eines rechtwinkligen Dreiecks aus Hypotenuse und Höhe",
      "sec-understand": "Hypotenuse, Katheten und Höhe verstehen",
      "sec-formula": "Warum die Flächenformel die halbe Hypotenuse mal Höhe ist",
      "sec-relationship": "Wie Hypotenuse und Höhe mit den beiden Katheten zusammenhängen",
      "sec-max": "Warum die Höhe nicht größer als die halbe Hypotenuse sein kann",
      "sec-howto": "So verwenden Sie den Flächenrechner aus Hypotenuse und Höhe",
      "sec-examples": "Schritt-für-Schritt-Beispiele",
      "sec-applications": "Anwendungen im wirklichen Leben",
      "sec-geomean": "Die Beziehung des geometrischen Mittels",
      "sec-legs": "Die beiden Katheten aus Hypotenuse und Höhe bestimmen",
      "sec-valid": "Prüfen, ob Ihre Messungen gültig sind",
      "sec-units": "Maßeinheiten und Rundung",
      "sec-mistakes": "Häufige Fehler",
      "sec-verify": "So prüfen Sie Ihre Fläche",
      "sec-altitude-table": "Wie die Höhe die Fläche beeinflusst",
      "sec-related": "Passende Rechner für rechtwinklige Dreiecke entdecken",
      "sec-faq": "Häufige Fragen",
      "sec-conclusion": "Fazit"
    },
    "faqHeading": "Häufig gestellte Fragen",
    "relatedHeading": "Passende Rechner für rechtwinklige Dreiecke entdecken",
    "relatedIntro": "Unterschiedliche Messungen erfordern unterschiedliche Rechner.",
    "relatedItems": [
      "Flächenrechner für rechtwinklige Dreiecke",
      "Flächenrechner für rechtwinklige Dreiecke aus Winkel",
      "Flächenrechner für rechtwinklige Dreiecke aus Höhe",
      "Flächenrechner für rechtwinklige Dreiecke aus Katheten",
      "Höhenrechner für rechtwinklige Dreiecke",
      "Flächenrechner für rechtwinklige Dreiecke aus Inkreisradius und Halbumfang"
    ],
    "sections": {
      "sec-intro": {
        "h2": "So berechnen Sie die Fläche eines rechtwinkligen Dreiecks aus Hypotenuse und Höhe",
        "blocks": [
          { "kind": "p", "text": "Ein rechtwinkliges Dreieck hat eine Hypotenuse von [[10\\text{ m}]] und die auf diese Hypotenuse gefällte Höhe misst [[4.8\\text{ m}]]. Wenden Sie [[K=ch/2]] an: [[K=(10\\times4.8)/2]], [[[\\boxed{K=24\\text{ m}^2}]]]. Das Dreieck umschließt 24 Quadratmeter ebene Fläche. Das ist die vollständige Methode, die der Rechner automatisiert: eine Seite, ihre senkrechte Höhe, eine Multiplikation, ein Halbieren." },
          { "kind": "p", "text": "Die Hypotenuse eignet sich als Basis, weil jede Seite eines Dreiecks die Basis sein kann, wenn die zugehörige senkrechte Höhe bekannt ist. Die Höhe ist die senkrechte Strecke von der Spitze des rechten Winkels zur Hypotenuse, und sie muss die Hypotenuse im rechten Winkel treffen; eine schräge Strecke ist nicht die Höhe, die diese Formel braucht. Da die Fläche nur von der Basis und ihrer Höhe abhängt, sind die beiden Katheten als Eingaben nicht erforderlich, und das Ergebnis steht immer in den Quadrateinheiten der verwendeten Längeneinheit." }
        ]
      },
      "sec-understand": {
        "h2": "Hypotenuse, Katheten und Höhe verstehen",
        "blocks": [
          { "kind": "p", "text": "Die durchgehend verwendete Notation lautet: [[A]], [[B]] und [[C]] sind die Ecken und Winkel mit [[C=90^\\circ]]; [[a]] und [[b]] sind die beiden Katheten; [[c]] ist die Hypotenuse gegenüber von [[C]]; [[h]] ist die senkrechte Höhe von der Ecke [[C]] auf die Hypotenuse; [[D]] ist der Punkt, an dem die Höhe die Hypotenuse trifft; [[x]] und [[y]] sind die beiden Hypotenusenabschnitte; und [[K]] ist die Fläche, die überall verwendet wird, damit sie nie mit dem Winkel [[A]] verwechselt wird." },
          { "kind": "h3", "text": "Was ist ein rechtwinkliges Dreieck?" },
          { "kind": "p", "text": "Ein rechtwinkliges Dreieck enthält genau einen 90-Grad-Winkel. Seine beiden Katheten treffen sich an diesem Winkel, und die Hypotenuse liegt ihm als längste Seite gegenüber. Die beiden anderen Winkel sind spitz, und da die drei Winkel zusammen 180 Grad ergeben, folgt aus [[A+B+C=180^\\circ]] mit [[C=90^\\circ]] die Beziehung [[A+B=90^\\circ]]. Die Höhenmethode hängt davon ab: die Basis ist die längste Seite, die Höhe fällt von der Ecke des rechten Winkels." },
          { "kind": "h3", "text": "Was ist die Hypotenuse?" },
          { "kind": "p", "text": "Die Hypotenuse ist die Seite gegenüber dem rechten Winkel, im Rechner mit [[c]] bezeichnet. Um sie in jeder Drehung zu finden, suchen Sie die Seite, die das quadratische Markierungszeichen des rechten Winkels nicht berührt; diese Seite ist die Hypotenuse. Sie ist länger als jede Kathete und muss nicht waagerecht gezeichnet sein: eine Basis ist eine gewählte Referenzseite, keine Bildschirmrichtung." },
          { "kind": "h3", "text": "Was ist eine Höhe in der Geometrie?" },
          { "kind": "p", "text": "Eine Höhe ist eine senkrechte Strecke von einer Ecke zur Geraden, die die gegenüberliegende Seite trägt. Sie muss mit dieser Seite einen 90-Grad-Winkel bilden, und das macht sie zu einer Höhe statt zu einer bloßen Linie. Eine Höhe ist nicht unbedingt eine der ursprünglichen Dreiecksseiten, und welche Strecke als Höhe zählt, ändert sich mit der gewählten Basis." },
          { "kind": "h3", "text": "Die Höhe auf die Hypotenuse verstehen" },
          { "kind": "p", "text": "Im Dreieck [[ABC]] ist [[C]] die Ecke des rechten Winkels und [[AB]] die Hypotenuse. Die Höhe [[h]] ist die Strecke [[CD]], die von [[C]] senkrecht zu [[AB]] gezogen wird, also [[CD\\perp AB]], [[CD=h]] und [[AB=c]], mit [[D]] als Fußpunkt, wodurch das Dreieck in zwei kleinere rechtwinklige Dreiecke geteilt wird, die darin eingebettet liegen." },
          { "kind": "h3", "text": "Wie die Höhe die Hypotenuse teilt" },
          { "kind": "p", "text": "Die Höhe schneide die Hypotenuse in [[AD=x]] und [[DB=y]]. Dann gilt [[[\\boxed{x+y=c}]]]. Jedes kleinere Dreieck enthält einen rechten Winkel und teilt einen spitzen Winkel mit dem ursprünglichen, also sind alle drei Dreiecke ähnlich. Die Ähnlichkeit der beiden kleineren Dreiecke liefert [[x/h=h/y]], und Kreuzmultiplikation ergibt [[[\\boxed{h^2=xy}]]], die Beziehung des geometrischen Mittels: die Höhe ist das geometrische Mittel der beiden Hypotenusenabschnitte und der Ausgangspunkt für die Höhenobergrenze weiter unten." }
        ],
        "imgAlt": "Dreieck ABC mit rechtem Winkel bei C, Hypotenuse AB mit c beschriftet, Höhe CD mit h beschriftet, Abschnitte x und y",
        "figcaption": "Dreieck ABC mit der Höhe CD auf die Hypotenuse: AD = x, DB = y, x + y = c, h&sup2; = xy und K = ch/2."
      },
      "sec-formula": {
        "h2": "Warum ist die Flächenformel die halbe Hypotenuse mal Höhe?",
        "blocks": [
          { "kind": "p", "text": "Die Fläche jedes Dreiecks geht von einer einzigen Regel aus: [[K=\\frac12\\times\\text{base}\\times\\text{perpendicular height}]]. Jede Seite darf die Basis sein, wenn die verwendete Höhe senkrecht auf ihr steht. Dieser Rechner wählt die Hypotenuse als Basis, also [[\\text{base}=c]], und die zugehörige senkrechte Höhe ist die Höhe [[\\text{height}=h]]. Einsetzen ergibt [[K=\\frac12\\times c\\times h]], also [[[\\boxed{K=\\frac{ch}{2}}]]]." },
          { "kind": "h3", "text": "Warum kann die Hypotenuse als Basis dienen?" },
          { "kind": "p", "text": "Die Hypotenuse ist schlicht die für diese Rechnung gewählte Basis. Die Höhe muss von der gegenüberliegenden Ecke, der Ecke des rechten Winkels [[C]], gemessen werden und senkrecht auf der Hypotenuse stehen. Eine andere Seite als Basis mit ihrer eigenen zugehörigen Höhe zu wählen, ergibt dieselbe Fläche. Die Basis ist eine Rolle, die eine Seite spielt, keine dauerhafte Bezeichnung." },
          { "kind": "h3", "text": "Warum wird die Formel durch zwei geteilt?" },
          { "kind": "p", "text": "Ein Dreieck füllt genau die Hälfte des Parallelogramms aus, das auf derselben Basis mit derselben senkrechten Höhe errichtet wird. Bei Basis 10 und Höhe 4,8 beträgt die Fläche des Parallelogramms [[10\\times4.8=48]]; das Dreieck darin belegt die Hälfte, also [[K=48/2=24]]. Das Halbieren zu überspringen beantwortet eine andere Frage: die Fläche des Parallelogramms, nicht die des Dreiecks." },
          { "kind": "h3", "text": "Gilt die Formel nur für rechtwinklige Dreiecke?" },
          { "kind": "p", "text": "Die Gleichung [[K=ch/2]] ist die allgemeine Dreiecksflächenformel, gültig für jedes Dreieck, wann immer [[c]] die gewählte Basis und [[h]] ihre senkrechte Höhe ist. Was diese Seite speziell für rechtwinklige Dreiecke macht, ist die Lesart: [[c]] ist die Hypotenuse, [[h]] fällt von der Ecke des rechten Winkels, und die Höhe gehorcht der zusätzlichen Einschränkung [[h\\leq c/2]], die für allgemeine Dreiecke keine Bedeutung hat." },
          { "kind": "h3", "text": "Warum Sie nicht beide Katheten brauchen" },
          { "kind": "p", "text": "Die Fläche braucht eine Seite und ihre zugehörige senkrechte Höhe, nichts weiter. Wenn [[c]] und [[h]] bereits bekannt sind, fügen die Katheten keine Information hinzu, die die Fläche ändern würde. Die Kathetenformel [[K=ab/2]] ist ein anderer Eingabeweg zur selben Größe, sinnvoll, wenn die gemessenen Daten die beiden senkrechten Seiten sind. Wenn Sie die Katheten haben, nimmt sie der <a href=\"/right-triangle-area-from-legs-calculator/\">Flächenrechner für rechtwinklige Dreiecke aus Katheten</a> direkt entgegen." }
        ],
        "imgAlt": "Vergleich der Fläche K = ch/2 aus Hypotenuse und Höhe mit K = ab/2 aus den beiden Katheten",
        "figcaption": "Zwei Wege zur selben Fläche: die Hypotenuse mit ihrer Höhe und die beiden Katheten. Beide entsprechen der umschlossenen Region, also ch/2 = ab/2."
      },
      "sec-relationship": {
        "h2": "Wie Hypotenuse und Höhe mit den beiden Katheten zusammenhängen",
        "blocks": [
          { "kind": "p", "text": "Zwei gültige Flächenformeln beschreiben dasselbe Dreieck: [[K=ab/2]] und [[K=ch/2]]. Da sie dieselbe Fläche berechnen, gilt [[\\frac{ab}{2}=\\frac{ch}{2}]]. Beide Seiten mit zwei multipliziert: [[ab=ch]]. Nach der Höhe umgestellt ergibt sich [[[\\boxed{h=\\frac{ab}{c}}]]]. Die Höhe auf die Hypotenuse ist das Produkt der beiden Katheten geteilt durch die Hypotenuse, was erklärt, warum die beiden Flächenformeln bei einem konsistenten Dreieck niemals widersprechen können." },
          { "kind": "h3", "text": "Warum diese Beziehung nützlich ist" },
          { "kind": "p", "text": "Sie verbindet drei Arten, dieselbe Geometrie zu beschreiben. Die Katheten und die Hypotenuse bestimmen die Höhe, also enthält ein an seinen Seiten vermessenes Dreieck sie bereits. Die Höhe und die Hypotenuse bestimmen die Fläche, also muss die Fläche nie erst die Katheten zurückrechnen. Die Fläche über beide Formeln zu berechnen und zu vergleichen ist eine der stärksten Prüfungen, weil sich ein Fehler auf einem Weg selten auf dem anderen wiederholt." },
          { "kind": "h3", "text": "Die Formel mit dem Satz des Pythagoras verbinden" },
          { "kind": "p", "text": "Der Satz des Pythagoras [[a^2+b^2=c^2]] bestätigt die Verbindung zwischen den Katheten und der Hypotenuse. Nehmen Sie ein 3-4-5-Dreieck: [[3^2+4^2=5^2]], [[9+16=25]]. Die Höhe beträgt [[h=\\frac{3\\times4}{5}]], [[[\\boxed{h=2.4}]]]. Die Fläche aus Hypotenuse und Höhe ist [[K=\\frac{5\\times2.4}{2}=6]], und aus den Katheten ist sie [[K=\\frac{3\\times4}{2}=6]]. Beide Formeln messen dieselbe umschlossene Region, und [[h=ab/c]] ist die Verbindung, die das garantiert." },
          { "kind": "h3", "text": "Wie die Höhe zwei ähnliche Dreiecke erzeugt" },
          { "kind": "p", "text": "Die Höhe teilt das ursprüngliche Dreieck in zwei kleinere rechtwinklige Dreiecke, von denen jedes seine spitzen Winkel mit dem ursprünglichen teilt. Zwei gemeinsame Winkel machen alle drei Dreiecke ähnlich, sodass entsprechende Seiten im gleichen Verhältnis bleiben. Die Höhe mit den Hypotenusenabschnitten zu paaren ergibt [[x/h=h/y]], was kreuzmultipliziert [[h^2=xy]] liefert: die Beziehung des geometrischen Mittels ist Ähnlichkeit, als Gleichung geschrieben." }
        ]
      },
      "sec-max": {
        "h2": "Warum kann die Höhe niemals länger als die halbe Hypotenuse sein?",
        "blocks": [
          { "kind": "p", "text": "Jedes gültige rechtwinklige Dreieck gehorcht [[[\\boxed{h\\leq\\frac{c}{2}}]]]. Das ist eine geometrische Tatsache, und sie verdient eine Herleitung." },
          { "kind": "h3", "text": "Die beiden Hypotenusenabschnitte verstehen" },
          { "kind": "p", "text": "Erinnern wir uns an [[x+y=c]] und [[h^2=xy]]. Das Produkt [[xy]] ist am größten, wenn die beiden Abschnitte gleich sind, eine Folge der Ungleichung zwischen arithmetischem und geometrischem Mittel: [[xy\\leq\\left(\\frac{x+y}{2}\\right)^2]]. Da [[x+y=c]] gilt, wird die rechte Seite zu [[c^2/4]], also [[h^2\\leq\\frac{c^2}{4}]], und für positive Längen [[h\\leq c/2]]. In einfachen Worten: ungleiche Teilungen schrumpfen das Produkt und die Höhe; die höchste Höhe kommt aus der gleichmäßigsten Teilung." },
          { "kind": "h3", "text": "Was geschieht bei der maximalen Höhe?" },
          { "kind": "p", "text": "Das Maximum tritt ein, wenn [[x=y=c/2]] gilt, und dann ist [[h=c/2]]. Das erzeugt ein gleichschenklig-rechtwinkliges Dreieck: seine beiden Katheten sind gleich, und seine spitzen Winkel betragen [[45^\\circ]] und [[45^\\circ]]. Die Höhe dient dann zugleich als Seitenhalbierende zur Hypotenuse, ein gültiges Dreieck, kein entartetes." },
          { "kind": "h3", "text": "Beispiel für die maximale Höhe" },
          { "kind": "p", "text": "Bei [[c=10]] beträgt die maximale Höhe [[h_{\\max}=10/2=5]]. Die maximale Fläche ist [[K=\\frac{10\\times5}{2}]], [[[\\boxed{K_{\\max}=25}]]]. Kein rechtwinkliges Dreieck mit Hypotenuse 10 kann eine Höhe über 5 haben, und daher kann keines eine Fläche über 25 Flächeneinheiten haben." },
          { "kind": "h3", "text": "Was geschieht, wenn die Höhe größer als c/2 ist?" },
          { "kind": "p", "text": "Bei [[c=10]] und [[h=5.5]] beträgt die maximal gültige Höhe 5, also können diese Messungen kein rechtwinkliges Dreieck beschreiben. Die Formel liefert dennoch [[K=\\frac{10\\times5.5}{2}=27.5]], aber diese Zahl stellt kein gültiges rechtwinkliges Dreieck mit diesen Messungen dar. Behandeln Sie sie als Signal, dass eine Messung falsch ist, nicht als Fläche. Dieser Leitfaden behauptet nicht, dass der Rechner solche Eingaben automatisch ablehnt." },
          { "kind": "h3", "text": "Was geschieht, wenn die Höhe viel kleiner ist?" },
          { "kind": "p", "text": "Eine kleine Höhe im Verhältnis zur Hypotenuse beschreibt ein schmales, langgestrecktes rechtwinkliges Dreieck mit einer Kathete, die viel länger als die andere ist. Bei fester Hypotenuse nimmt die Fläche ab, wenn die Höhe abnimmt, weil [[K=ch/2]] direkt mit [[h]] skaliert. Es gibt keine positive Untergrenze: die Höhe kann sich null nähern, und das Dreieck flacht zu einer entarteten Linie ab." }
        ],
        "imgAlt": "Maximale Höhe c/2 in einem gleichschenklig-rechtwinkligen Dreieck, eine gültige kleinere Höhe und ein ungültiger Fall",
        "figcaption": "Links: die maximale Höhe bei c/2 ergibt die größte Fläche. Mitte: eine kleinere gültige Höhe. Rechts: eine Höhe über c/2 kann zu keinem rechtwinkligen Dreieck gehören."
      },
      "sec-howto": {
        "h2": "So verwenden Sie den Flächenrechner für rechtwinklige Dreiecke aus Hypotenuse und Höhe",
        "blocks": [
          { "kind": "p", "text": "Der Rechner braucht genau zwei Eingaben. Die folgende Anleitung folgt der Reihenfolge auf dem Bildschirm, vom vermessenen Dreieck bis zum geprüften Ergebnis." }
        ],
        "steps": [
          "<strong>Messen oder bestimmen Sie die Hypotenuse.</strong> Die längste Seite, gegenüber dem 90-Grad-Winkel.",
          "<strong>Bestimmen Sie die senkrechte Höhe auf die Hypotenuse.</strong> Sie beginnt an der Ecke des rechten Winkels und trifft die Hypotenuse unter 90 Grad.",
          "<strong>Bestätigen Sie, dass die Höhe senkrecht steht.</strong> Eine entlang einer schrägen Seite gemessene Strecke ist nicht die Höhe, die die Formel braucht.",
          "<strong>Geben Sie die Hypotenuse [[c]] ein.</strong>",
          "<strong>Geben Sie die Höhe [[h]] ein.</strong>",
          "<strong>Wählen Sie passende Längeneinheiten.</strong> Beide Messungen müssen dieselbe Einheit verwenden.",
          "<strong>Prüfen Sie, dass beide Messungen positiv sind.</strong> Null oder negative Längen beschreiben kein Dreieck.",
          "<strong>Bestätigen Sie, dass [[h\\leq c/2]] gilt.</strong> Bei [[c=10]] kann keine Höhe über 5 zu einem rechtwinkligen Dreieck mit dieser Hypotenuse gehören.",
          "<strong>Klicken Sie auf Fläche berechnen.</strong>",
          "<strong>Prüfen Sie das Ergebnis.</strong> Die Fläche erscheint in den Quadrateinheiten passend zu den Eingaben.",
          "<strong>Prüfen Sie die Quadrateinheiten.</strong> Meter ergeben Quadratmeter; Zentimeter ergeben Quadratzentimeter.",
          "<strong>Lesen Sie die Lösungsschritte.</strong> Sie zeigen die Substitution und die Rechnung.",
          "<strong>Verwenden Sie Zurücksetzen, bevor Sie ein neues Dreieck eingeben.</strong> Es löscht beide Felder, damit die nächste Berechnung sauber beginnt."
        ],
        "closingParagraphs": [
          "Der Rechner fragt weder nach den beiden Katheten noch nach einem Winkel: eine Seite und ihre zugehörige senkrechte Höhe bestimmen die Fläche vollständig."
        ]
      },
      "sec-examples": {
        "h2": "Schritt-für-Schritt-Beispiele zur Dreiecksfläche aus Hypotenuse und Höhe",
        "blocks": [
          { "kind": "p", "text": "Vier durchgerechnete Beispiele bauen die Methode vom Vertrauten her auf. Jedes wendet [[K=ch/2]] mit jeder gezeigten Substitution an, und jedes prüft, dass die Höhe die Grenze des rechtwinkligen Dreiecks einhält." },
          { "kind": "h3", "text": "Beispiel 1: Das Beispiel des vorhandenen Rechners" },
          { "kind": "p", "text": "Gegeben [[c=10]] und [[h=4.8]]. Schritt 1: Schreiben Sie die Formel auf, [[K=ch/2]]. Schritt 2: Setzen Sie ein, [[K=\\frac{10\\times4.8}{2}]]. Schritt 3: Multiplizieren Sie, [[K=\\frac{48}{2}]]. Endergebnis: [[[\\boxed{K=24\\text{ square units}}]]]. Die Höhe ist gültig, weil [[4.8<5]] gilt, unter dem Maximum der halben Hypotenuse." },
          { "kind": "h3", "text": "Beispiel 2: Ein 3-4-5-Dreieck" },
          { "kind": "p", "text": "Gegeben [[a=3]], [[b=4]], [[c=5]]. Finden Sie zuerst die Höhe: [[h=ab/c]], also [[h=\\frac{3\\times4}{5}=2.4]]. Dann [[K=\\frac{5\\times2.4}{2}]], [[[\\boxed{K=6}]]]. Prüfen Sie mit den Katheten: [[K=\\frac{3\\times4}{2}=6]]. Beide Wege stimmen überein, wie sie müssen." },
          { "kind": "h3", "text": "Beispiel 3: Ein gleichschenklig-rechtwinkliges Dreieck" },
          { "kind": "p", "text": "Gegeben [[c=10]] und [[h=5]]. Dann [[K=\\frac{10\\times5}{2}]], [[[\\boxed{K=25}]]]. Die Höhe gleicht der halben Hypotenuse, also sind die Katheten gleich und jeder spitze Winkel beträgt [[45^\\circ]]. Das ist die maximal mögliche Fläche für jedes rechtwinklige Dreieck mit Hypotenuse 10." },
          { "kind": "h3", "text": "Beispiel 4: Eine kleinere Dreieckshöhe" },
          { "kind": "p", "text": "Gegeben [[c=13]] und [[h=5]]. Dann [[K=\\frac{13\\times5}{2}]], [[[\\boxed{K=32.5\\text{ square units}}]]]. Die Höhe hält die Grenze ein, weil [[5\\leq6.5]] gilt: die halbe Hypotenuse ist 6,5, und 5 liegt bequem darunter." }
        ]
      },
      "sec-applications": {
        "h2": "Anwendungen der Dreiecksfläche aus Hypotenuse und Höhe im wirklichen Leben",
        "blocks": [
          { "kind": "p", "text": "Zwölf durchgerechnete Situationen zeigen die Formel in verschiedenen Maßstäben und Einheiten. Jede benennt das Dreieck in der Szene, nennt die beiden Messungen, setzt Schritt für Schritt ein und nennt die dahinterstehende Annahme. Jedes Beispiel ist eine rechtwinklige Platte, ein Profil, ein Querschnitt oder ein vereinfachtes Modell; die Formel gilt für das modellierte Dreieck, nicht für jeden gekrümmten oder unregelmäßigen Gegenstand desselben Namens." },
          { "kind": "h3", "text": "Beispiel 1: Dreieckiges Glasfenster" },
          { "kind": "p", "text": "Eine rechtwinklige Glasscheibe hat eine Hypotenuse von [[2.5\\text{ m}]] und eine senkrechte Höhe von [[1.2\\text{ m}]]. Mit [[K=ch/2]]: [[K=\\frac{2.5\\times1.2}{2}]], [[[\\boxed{K=1.5\\text{ m}^2}]]]. Das ist die ebene Glasfläche vor dem Rahmen, gerade Kanten und einen echten rechten Winkel vorausgesetzt." },
          { "kind": "h3", "text": "Beispiel 2: Dreieckige Rampenseitenplatte" },
          { "kind": "p", "text": "Eine rechtwinklige Seitenplatte einer Rampe hat eine Hypotenuse von [[4\\text{ m}]] und eine senkrechte Höhe von [[1.5\\text{ m}]]. Dann [[K=\\frac{4\\times1.5}{2}]], [[[\\boxed{K=3\\text{ m}^2}]]]. Das Ergebnis beschreibt das dreieckige Seitenprofil, nicht die begehbare Fläche." },
          { "kind": "h3", "text": "Beispiel 3: Dreieckiger Segelabschnitt" },
          { "kind": "p", "text": "Ein rechtwinkliger Segelabschnitt hat eine Hypotenuse von [[13\\text{ ft}]] und eine Höhe von [[5\\text{ ft}]]. Dann [[K=\\frac{13\\times5}{2}]], [[[\\boxed{K=32.5\\text{ ft}^2}]]]. Das ist die ebene Stofffläche vor Nähten oder Wölbung; echte Segel bauchen sich, also wird das Segel als eben modelliert." },
          { "kind": "h3", "text": "Beispiel 4: Vermessung eines dreieckigen Grundstücksabschnitts" },
          { "kind": "p", "text": "Ein vereinfachtes rechtwinkliges Grundstück hat eine Hypotenuse von [[50\\text{ m}]] und eine Höhe von [[12\\text{ m}]]. Dann [[K=\\frac{50\\times12}{2}]], [[[\\boxed{K=300\\text{ m}^2}]]]. Das schätzt die Fläche unter einem vereinfachten Modell, das Grenzen als gerade Linien auf ebenem Boden behandelt." },
          { "kind": "h3", "text": "Beispiel 5: Knotenblech aus Stahl" },
          { "kind": "p", "text": "Eine rechtwinklige Stahlstützplatte hat eine Hypotenuse von [[3.4\\text{ m}]] und eine Höhe von [[1.6\\text{ m}]]. Dann [[K=\\frac{3.4\\times1.6}{2}]], [[[\\boxed{K=2.72\\text{ m}^2}]]]. Das ist nur die ebene Plattenfläche; die Tragfähigkeit ist eine eigene Frage." },
          { "kind": "h3", "text": "Beispiel 6: Treppenseitenprofil" },
          { "kind": "p", "text": "Ein vereinfachtes rechtwinkliges Treppenseitenprofil hat eine Hypotenuse von [[5\\text{ m}]] und eine Höhe von [[2\\text{ m}]]. Dann [[K=\\frac{5\\times2}{2}]], [[[\\boxed{K=5\\text{ m}^2}]]]. Das beschreibt das dreieckige Seitenprofil, nicht die Summe der einzelnen Stufen." },
          { "kind": "h3", "text": "Beispiel 7: Dreieckiges Verkehrsschild" },
          { "kind": "p", "text": "Ein rechtwinkliges Schild hat eine Hypotenuse von [[1.8\\text{ m}]] und eine Höhe von [[0.8\\text{ m}]]. Dann [[K=\\frac{1.8\\times0.8}{2}]], [[[\\boxed{K=0.72\\text{ m}^2}]]]. 0,72 Quadratmeter Schildfläche; Befestigungsmaterial ausgenommen." },
          { "kind": "h3", "text": "Beispiel 8: Solarstützpaneel" },
          { "kind": "p", "text": "Ein rechtwinkliges Montagestützpaneel hat eine Hypotenuse von [[3\\text{ m}]] und eine Höhe von [[1.2\\text{ m}]]. Dann [[K=\\frac{3\\times1.2}{2}]], [[[\\boxed{K=1.8\\text{ m}^2}]]]. Nur Paneelfläche; nichts über erzeugten Strom, da es sich um eine Montagehalterung handelt." },
          { "kind": "h3", "text": "Beispiel 9: Sperrholzschablone" },
          { "kind": "p", "text": "Eine rechtwinklige Sperrholzschablone hat eine Hypotenuse von [[2.5\\text{ m}]] und eine Höhe von [[1\\text{ m}]]. Dann [[K=\\frac{2.5\\times1}{2}]], [[[\\boxed{K=1.25\\text{ m}^2}]]]. Verwendbares dreieckiges Stück; Schnittverschnitt braucht eine eigene Zugabe." },
          { "kind": "h3", "text": "Beispiel 10: Dreieckiges Stoffbanner" },
          { "kind": "p", "text": "Ein rechtwinkliges Banner hat eine Hypotenuse von [[6\\text{ ft}]] und eine Höhe von [[2.4\\text{ ft}]]. Dann [[K=\\frac{6\\times2.4}{2}]], [[[\\boxed{K=7.2\\text{ ft}^2}]]]. 7,2 Quadratfuß ebenes Material; Saumzugaben fügt der Hersteller hinzu." },
          { "kind": "h3", "text": "Beispiel 11: Großes Vermessungsgrundstück" },
          { "kind": "p", "text": "Ein rechtwinkliger Grundstücksabschnitt hat eine Hypotenuse von [[80\\text{ m}]] und eine Höhe von [[30\\text{ m}]]. Dann [[K=\\frac{80\\times30}{2}]], [[[\\boxed{K=1,200\\text{ m}^2}]]]. Nur gültig, wo das Grundstück auf ebenem Boden wirklich rechtwinklig ist." },
          { "kind": "h3", "text": "Beispiel 12: Dreieckiges Vordachstützpaneel" },
          { "kind": "p", "text": "Ein rechtwinkliges Vordachstützpaneel hat eine Hypotenuse von [[8\\text{ m}]] und eine Höhe von [[3.6\\text{ m}]]. Dann [[K=\\frac{8\\times3.6}{2}]], [[[\\boxed{K=14.4\\text{ m}^2}]]]. Ebene Dreiecksfläche; Windlasten und Befestigungen sind eigene Fragen." },
          { "kind": "h3", "text": "Vergleich der praktischen Beispiele" }
        ],
        "table": {
          "headers": ["Anwendung", "Hypotenuse c", "Höhe h", "Fläche", "Einheit"],
          "rows": [
            ["Glasfenster", "2.5", "1.2", "1.5", "m²"],
            ["Rampenseitenplatte", "4", "1.5", "3", "m²"],
            ["Segelabschnitt", "13", "5", "32.5", "ft²"],
            ["Grundstücksabschnitt", "50", "12", "300", "m²"],
            ["Knotenblech", "3.4", "1.6", "2.72", "m²"],
            ["Treppenprofil", "5", "2", "5", "m²"],
            ["Verkehrsschild", "1.8", "0.8", "0.72", "m²"],
            ["Solarstützpaneel", "3", "1.2", "1.8", "m²"],
            ["Sperrholzschablone", "2.5", "1", "1.25", "m²"],
            ["Stoffbanner", "6", "2.4", "7.2", "ft²"],
            ["Großes Vermessungsgrundstück", "80", "30", "1,200", "m²"],
            ["Vordachstützpaneel", "8", "3.6", "14.4", "m²"]
          ]
        },
        "imgAlt": "Vier Anwendungen von K = ch/2: Glasfenster, Rampenplatte, Segel und vermessener Grundstücksabschnitt",
        "figcaption": "Dieselbe Formel in vier Szenen: ein Glasfenster, eine Rampenseitenplatte, ein Segel und ein vermessener Grundstücksabschnitt."
      },
      "sec-geomean": {
        "h2": "Warum ist das Quadrat der Höhe gleich dem Produkt zweier Hypotenusenabschnitte?",
        "blocks": [
          { "kind": "p", "text": "Die Höhe trifft die Hypotenuse in [[D]] und teilt sie in [[AD=x]] und [[DB=y]]. Die Beziehung lautet [[[\\boxed{h^2=xy}]]]. Dabei ist [[x]] der erste Abschnitt, [[y]] der zweite und [[h]] die senkrechte Höhe. Es lohnt sich zu sehen, woher das kommt, statt es auswendig zu lernen." },
          { "kind": "h3", "text": "Wie funktioniert diese Beziehung?" },
          { "kind": "p", "text": "Die Höhe erzeugt zwei kleinere rechtwinklige Dreiecke, jedes ähnlich zum ursprünglichen und daher auch zueinander. Den kurzen Schenkel des einen mit dem langen Schenkel des anderen zu paaren ergibt [[\\frac{x}{h}=\\frac{h}{y}]], was kreuzmultipliziert [[h^2=xy]] liefert. Wurzelziehen ergibt [[h=\\sqrt{xy}]]: die Höhe ist das geometrische Mittel der beiden Hypotenusenabschnitte, die Zahl, deren Quadrat ihrem Produkt gleicht." },
          { "kind": "h3", "text": "Ein Zahlenbeispiel" },
          { "kind": "p", "text": "Bei [[x=4]] und [[y=9]] gilt [[h^2=4\\times9=36]], [[[\\boxed{h=6}]]]. Die vollständige Hypotenuse ist [[c=4+9=13]], und die Fläche ist [[K=\\frac{13\\times6}{2}]], [[[\\boxed{K=39}]]]. Wenn die beiden Hypotenusenabschnitte bekannt sind, folgt die Höhe ohne jede Kathetenmessung." },
          { "kind": "h3", "text": "Wann ist diese Beziehung nützlich?" },
          { "kind": "p", "text": "Sie taucht in Geometrieaufgaben auf, wo die Höhe fehlt, aber die Abschnitte gegeben sind, in Ähnlichkeitsproblemen und immer dann, wenn eine Höhenmessung eine unabhängige Prüfung braucht. Sie erklärt auch die Höhengrenze: das Produkt [[xy]] ist durch die feste Hypotenuse begrenzt, also ist auch die Höhe begrenzt. Der Rechner braucht [[x]] und [[y]] nicht als Eingaben; dieser Satz ist Hintergrundwissen, kein Rechnerfeld." }
        ]
      },
      "sec-legs": {
        "h2": "So bestimmen Sie die beiden Katheten aus Hypotenuse und Höhe",
        "blocks": [
          { "kind": "p", "text": "Der Rechner braucht für die Fläche nur [[c]] und [[h]], aber diese beiden Messungen enthalten auch genug Information, um die beiden Kathetenlängen zu bestimmen, bis auf Vertauschung ihrer Positionen. Beginnen Sie mit [[a^2+b^2=c^2]] und [[ab=ch]]. Da [[(a^2-b^2)^2=(a^2+b^2)^2-4a^2b^2]] gilt, liefert Einsetzen [[(a^2-b^2)^2=c^4-4c^2h^2]] und daher [[[\\boxed{a^2,b^2=\\frac{c^2\\pm c\\sqrt{c^2-4h^2}}{2}}]]]. Die beiden Vorzeichen entsprechen den beiden Kathetenzuordnungen: Die Katheten zu vertauschen ändert nichts am Dreieck oder seiner Fläche." },
          { "kind": "p", "text": "Zahlenbeispiel: Bei [[c=10]] und [[h=4.8]] gilt [[ab=ch=48]] und [[a^2+b^2=100]]. Die Katheten sind [[a=6]] und [[b=8]]. Prüfung: [[6^2+8^2=10^2]], [[36+64=100]]. Die Fläche prüft sich auf beide Weisen: [[K=\\frac{6\\times8}{2}=24]] und [[K=\\frac{10\\times4.8}{2}=24]]. Das ist eine zusätzliche mathematische Einsicht, keine Extrafunktion des vorhandenen Rechners, und sie sollte nicht vom Zweck des Rechners ablenken: Fläche aus Hypotenuse und Höhe." }
        ]
      },
      "sec-valid": {
        "h2": "So prüfen Sie, ob Ihre Hypotenusen- und Höhenmessungen gültig sind",
        "blocks": [
          { "kind": "p", "text": "Für ein nicht entartetes rechtwinkliges Dreieck müssen die Eingaben drei Bedingungen erfüllen: [[c>0]], [[h>0]] und [[h\\leq c/2]]. Die ersten beiden schließen Null- und negative Längen aus; die dritte ist die weiter oben hergeleitete Höhengrenze. Alle drei müssen zugleich gelten." },
          { "kind": "h3", "text": "Beispiel für eine gültige Eingabe" },
          { "kind": "p", "text": "Bei [[c=12]] und [[h=5]] beträgt die maximale Höhe [[h_{\\max}=6]]. Da [[5<6]] gilt, sind die Messungen gültig, und [[K=\\frac{12\\times5}{2}=30]]." },
          { "kind": "h3", "text": "Beispiel für eine ungültige Eingabe" },
          { "kind": "p", "text": "Bei [[c=12]] und [[h=7]] beträgt die maximale Höhe [[h_{\\max}=6]]. Da [[7>6]] gilt, können die Messungen kein rechtwinkliges Dreieck beschreiben: Bei auf 12 festgelegter Hypotenuse kann keine Teilung in Abschnitte [[x]] und [[y]] bewirken, dass [[\\sqrt{xy}]] 7 erreicht." },
          { "kind": "h3", "text": "Grenzfall" },
          { "kind": "p", "text": "Bei [[c=12]] und [[h=6]] gleicht die Höhe dem maximal möglichen Wert. Das ist ein gleichschenklig-rechtwinkliges Dreieck mit zwei gleichen Katheten, genau auf der Grenze liegend. Die Grenze ist inklusiv: [[h\\leq c/2]] erlaubt Gleichheit." },
          { "kind": "h3", "text": "Was ist mit Null- oder negativen Werten?" },
          { "kind": "p", "text": "Eine Hypotenuse muss positiv sein, und eine Höhe muss für ein nicht entartetes Dreieck positiv sein. Eine Höhe von null erzeugt Fläche null und eine entartete Form, eine Linie statt eines Dreiecks, während negative Längen keine geometrische Bedeutung haben. Dieser Leitfaden behauptet nicht, dass der Rechner jede Prüfung automatisch durchführt." }
        ]
      },
      "sec-units": {
        "h2": "Flächeneinheiten bei Rechnungen mit Hypotenuse und Höhe verstehen",
        "blocks": [
          { "kind": "p", "text": "Die Fläche ist zweidimensional, also ist ihre Einheit das Quadrat der Längeneinheit. In Symbolen: [[\\text{m}\\times\\text{m}=\\text{m}^2]]. Die Einheitsauswahl gibt es, damit das Ergebnis korrekt beschriftet werden kann." },
          { "kind": "h3", "text": "Warum die Einheiten übereinstimmen müssen" },
          { "kind": "p", "text": "Hypotenuse und Höhe müssen vor Anwendung der Formel in derselben Einheit ausgedrückt sein. Ist die Hypotenuse 200 cm und die Höhe 1 m, rechnen Sie zuerst in 200 cm und 100 cm um. Dann [[K=\\frac{200\\times100}{2}]], [[K=10,000\\text{ cm}^2]], oder gleichwertig [[K=1\\text{ m}^2]]. Messungen in verschiedenen Einheiten zu multiplizieren erzeugt eine Zahl ohne saubere Einheit, also rechnen Sie zuerst um und dann." },
          { "kind": "h3", "text": "Warum Rundung wichtig ist" },
          { "kind": "p", "text": "Rundung der Messungen ändert die endgültige Fläche leicht, weil die Höhe direkt hineinmultipliziert wird. Behalten Sie volle Genauigkeit in den Zwischenschritten und runden Sie nur die endgültige Antwort; die Höhe früh zu runden, häuft den Fehler an." },
          { "kind": "h3", "text": "Exakte Werte gegen gemessene Werte" },
          { "kind": "p", "text": "Exakte Messungen, wie die Höhe 5 eines gleichschenklig-rechtwinkligen Dreiecks mit Hypotenuse 10, verhalten sich anders als Bandmaß- oder Instrumentenablesungen. Die Instrumentenunsicherheit fließt in die Fläche ein, also behandeln Sie die letzte Ziffer nur so verlässlich wie die Eingaben." }
        ]
      },
      "sec-mistakes": {
        "h2": "Häufige Fehler bei der Flächenberechnung aus Hypotenuse und Höhe",
        "blocks": [
          { "kind": "p", "text": "Die meisten falschen Antworten kommen von falsch beschrifteten Eingaben statt von schlechtem Rechnen. Die fünfzehn Fehler unten decken fast alle ab." },
          { "kind": "h3", "text": "1. Die Hypotenuse mit einer Kathete verwechseln" },
          { "kind": "p", "text": "Eine als Hypotenuse eingegebene Kathete schrumpft die Basis. Lösung: Wählen Sie die Seite, die das Markierungszeichen des rechten Winkels nicht berührt." },
          { "kind": "h3", "text": "2. Die Höhe entlang einer schrägen Seite messen" },
          { "kind": "p", "text": "Eine Strecke entlang einer Seite ist nicht die Höhe. Lösung: Sie muss von der Ecke des rechten Winkels ausgehen und die Hypotenuse unter 90 Grad treffen." },
          { "kind": "h3", "text": "3. Eine nicht senkrechte Distanz zur Hypotenuse verwenden" },
          { "kind": "p", "text": "Eine nicht senkrechte Distanz von der Ecke zur Hypotenuse ist länger als die wahre Höhe und bläht die Fläche auf. Lösung: Bestätigen Sie zuerst die Senkrechtheit." },
          { "kind": "h3", "text": "4. Die Höhe von der falschen Ecke verwenden" },
          { "kind": "p", "text": "Nur die Höhe von der Ecke des rechten Winkels passt zur Hypotenuse." },
          { "kind": "h3", "text": "5. Das Teilen durch zwei vergessen" },
          { "kind": "p", "text": "[[c\\times h]] ist die Fläche des Parallelogramms, nicht die des Dreiecks. Lösung: Halbieren Sie jedes Basis-Höhe-Produkt." },
          { "kind": "h3", "text": "6. Die falsche Messung als c eingeben" },
          { "kind": "p", "text": "Eine kürzere Seite als Hypotenuse eingegeben schrumpft die Basis. Lösung: Die Hypotenuse ist immer die längste Seite." },
          { "kind": "h3", "text": "7. Die falsche Messung als h eingeben" },
          { "kind": "p", "text": "Eine als Höhe eingegebene Kathete bricht die senkrechte Paarung. Lösung: Die Höhe muss die Hypotenuse im rechten Winkel treffen." },
          { "kind": "h3", "text": "8. Verschiedene Längeneinheiten mischen" },
          { "kind": "p", "text": "Eine Hypotenuse von 2 m mit einer Höhe von 150 cm ergibt keine sinnvolle Zahl. Lösung: Rechnen Sie zuerst in eine Einheit um." },
          { "kind": "h3", "text": "9. Die Fläche in linearen Einheiten angeben" },
          { "kind": "p", "text": "Eine Fläche von 24 m² ist nicht 24 m. Lösung: Schreiben Sie die quadrierte Einheit mit der Zahl." },
          { "kind": "h3", "text": "10. Eine negative Höhe eingeben" },
          { "kind": "p", "text": "Längen können nicht negativ sein; eine negative Höhe signalisiert einen Eingabefehler. Lösung: Geben Sie die gemessene positive Distanz erneut ein." },
          { "kind": "h3", "text": "11. Eine Hypotenuse von null eingeben" },
          { "kind": "p", "text": "Eine Hypotenuse von null bedeutet, dass kein Dreieck existiert. Lösung: Prüfen Sie, dass jede Länge positiv ist." },
          { "kind": "h3", "text": "12. Eine Höhe größer als die halbe Hypotenuse verwenden" },
          { "kind": "p", "text": "Eine Höhe von 6 bei [[c=10]] verletzt die Grenze. Lösung: Prüfen Sie die gemessene Strecke erneut." },
          { "kind": "h3", "text": "13. Annehmen, jedes Dreieck mit derselben Basis und Höhe sei notwendigerweise rechtwinklig" },
          { "kind": "p", "text": "[[K=ch/2]] gilt für jedes Dreieck mit passender Basis und Höhe. Lösung: Wenden Sie die Höhengrenze nur auf rechtwinklige Dreiecke an." },
          { "kind": "h3", "text": "14. Die Höhe h mit einer Kathete a oder b verwechseln" },
          { "kind": "p", "text": "In einem 6-8-10-Dreieck beträgt die Höhe 4,8, was keiner Kathete gleicht. Lösung: Halten Sie [[a]], [[b]] und [[h]] getrennt." },
          { "kind": "h3", "text": "15. Annehmen, die Formel prüfe die Dreiecksgeometrie automatisch" },
          { "kind": "p", "text": "Rechnen lehnt niemals eine Eingabe ab. Lösung: Führen Sie die Gültigkeitsprüfungen selbst durch." },
          { "kind": "h3", "text": "Falsch gegen richtig: Ein konkretes Beispiel" },
          { "kind": "p", "text": "Bei [[c=10]] und [[h=4]] lautet die korrekte Rechnung [[K=\\frac{10\\times4}{2}=20]]. Das Halbieren zu überspringen ergibt [[K=10\\times4=40]], das Doppelte der Dreiecksfläche. Ebenso scheitert [[h=6]] mit [[c=10]] an der Höhengrenze, obwohl die Rechnung eine Zahl erzeugt." }
        ]
      },
      "sec-verify": {
        "h2": "So prüfen Sie, ob Ihre Dreiecksfläche stimmt",
        "blocks": [
          { "kind": "p", "text": "Mehrere Prüfungen fangen die üblichen Fehler ab. Das 6-8-10-Dreieck zeigt die meisten davon." },
          { "kind": "h3", "text": "Methode 1: Die Flächenformel prüfen" },
          { "kind": "p", "text": "Berechnen Sie [[K=ch/2]] mit den eingegebenen Werten erneut. Für [[c=10]] und [[h=4.8]] gilt [[K=(10\\times4.8)/2=24]]. Ein zweiter Durchgang fängt Tippfehler ab." },
          { "kind": "h3", "text": "Methode 2: Mit den beiden Katheten prüfen" },
          { "kind": "p", "text": "Wenn die Katheten bekannt oder bestimmt sind, muss [[K=ab/2]] übereinstimmen. Hier entspricht [[(6\\times8)/2=24]] dem Wert [[(10\\times4.8)/2=24]]: zwei Methoden, ein Dreieck, eine Antwort." },
          { "kind": "h3", "text": "Methode 3: Den Satz des Pythagoras prüfen" },
          { "kind": "p", "text": "Bestätigen Sie [[a^2+b^2=c^2]]: [[36+64=100]]. Erfüllen die Seiten ihn nicht, ist die Dreiecksbestimmung falsch." },
          { "kind": "h3", "text": "Methode 4: Die Höhenbeziehung prüfen" },
          { "kind": "p", "text": "Bestätigen Sie [[h=ab/c]]: [[(6\\times8)/10=4.8]]. Eine Abweichung bedeutet, dass die eingegebene Höhe nicht zu diesem Dreieck gehört." },
          { "kind": "h3", "text": "Methode 5: Die beiden Hypotenusenabschnitte prüfen" },
          { "kind": "p", "text": "Bestätigen Sie [[x+y=c]] und [[h^2=xy]]. Mit den Abschnitten 6,4 und 3,6: [[6.4+3.6=10]] und [[4.8^2=6.4\\times3.6]], da [[23.04=23.04]] gilt." },
          { "kind": "h3", "text": "Methode 6: Die maximale Höhe prüfen" },
          { "kind": "p", "text": "Bestätigen Sie [[h\\leq c/2]]. Hier gilt [[4.8\\leq5]]. Jede behauptete rechtwinklige Dreiecksfläche über [[c^2/4]] bei gegebener Hypotenuse ist unmöglich." },
          { "kind": "h3", "text": "Methode 7: Die Einheiten prüfen" },
          { "kind": "p", "text": "Stellen Sie sicher, dass das Ergebnis in Quadrateinheiten steht: Meter ergeben Quadratmeter, Zentimeter ergeben Quadratzentimeter. Eine in linearen Einheiten angegebene Fläche ist unvollständig, auch wenn die Zahl stimmt." }
        ]
      },
      "sec-altitude-table": {
        "h2": "Wie beeinflusst die Höhe die Fläche eines rechtwinkligen Dreiecks?",
        "blocks": [
          { "kind": "p", "text": "Aus [[K=ch/2]] folgt: Bei fester Hypotenuse ändert sich die Fläche direkt mit der Höhe. Die Höhe zu verdoppeln verdoppelt die Fläche; die Höhe zu vergrößern vergrößert die Fläche im gleichen Verhältnis. Die Tabelle unten legt [[c=10]] fest und variiert die Höhe bis zu ihrem Maximum von 5." },
          { "kind": "p", "text": "Alle fünf Zeilen beschreiben gültige rechtwinklige Dreiecke, weil jede Höhe beim Maximum von 5 oder darunter liegt. Die Höhe kann [[c/2]] nicht überschreiten, und die maximale Fläche tritt ein, wenn die beiden Katheten gleich sind. Beachten Sie, dass die Katheten nicht fest bleiben, während sich die Höhe ändert; jede Zeile ist ein anderes Dreieck mit einer gemeinsamen Hypotenuse." }
        ],
        "table": {
          "headers": ["Höhe h", "Fläche K"],
          "rows": [
            ["1", "5"],
            ["2", "10"],
            ["3", "15"],
            ["4", "20"],
            ["5", "25"]
          ]
        }
      },
      "sec-related": {
        "h2": "Passende Rechner für rechtwinklige Dreiecke entdecken",
        "blocks": [
          { "kind": "p", "text": "Unterschiedliche Messungen erfordern unterschiedliche Rechner." }
        ]
      },
      "sec-faq": {
        "h2": "Häufig gestellte Fragen",
        "blocks": []
      },
      "sec-conclusion": {
        "h2": "Die Hypotenuse und ihre Höhe genügen",
        "blocks": [
          { "kind": "p", "text": "Die Hypotenusen-Höhen-Methode ist die gewöhnliche Basis-Höhe-Regel, auf die längste Seite gerichtet. Sobald die Hypotenuse bestimmt und die senkrechte Höhe zur Hand ist, ist die Fläche eine Multiplikation und ein Halbieren entfernt, ohne die Katheten erst zurückrechnen zu müssen." },
          { "kind": "p", "text": "Ihr wahrer Wert ist Disziplin: Senkrechtheit, die Höhengrenze und die Beziehungen des geometrischen Mittels machen aus groben Skizzen prüfbare Zahlen. Prüfen Sie die Höhe, und die Antwort verdient ihr Vertrauen." }
        ]
      }
    },
    "faqs": [
      { "question": "Wie berechnet man die Fläche eines rechtwinkligen Dreiecks aus Hypotenuse und Höhe?", "answer": "Multiplizieren Sie die Hypotenuse c mit der senkrechten Höhe h und teilen Sie durch zwei: K = ch/2. Zum Beispiel ergeben c = 10 und h = 4,8 die Fläche K = 24 Flächeneinheiten. Bestätigen Sie, dass die Höhe die Hypotenuse im rechten Winkel trifft und h höchstens die Hälfte von c beträgt." },
      { "question": "Wie lautet die Flächenformel mit Hypotenuse und Höhe?", "answer": "Die Formel lautet K = ch/2, wobei K die Fläche, c die Hypotenuse als Basis und h die senkrechte Höhe auf diese Basis ist. Es ist die Standard-Dreiecksflächenregel mit der längsten Seite als Basis, und das Ergebnis verwendet die passenden Quadrateinheiten." },
      { "question": "Was ist die Höhe auf die Hypotenuse?", "answer": "Es ist die senkrechte Strecke von der Ecke des rechten Winkels C zur Hypotenuse AB, die sie im Punkt D trifft: die kürzeste Distanz von dieser Ecke zur Hypotenuse und die einzige Höhe, die zu ihr passt. Es ist keine Kathete." },
      { "question": "Ist die Höhe dasselbe wie die Hypotenuse?", "answer": "Nein. Die Hypotenuse c ist die längste Seite, gegenüber dem rechten Winkel, während die Höhe h das senkrechte Lot von der Ecke des rechten Winkels auf diese Seite ist: c ist die Basis, h ist die Höhe. In einem 6-8-10-Dreieck gilt c = 10 und h = 4,8." },
      { "question": "Kann die Höhe länger als die halbe Hypotenuse sein?", "answer": "Nein. Für ein gültiges rechtwinkliges Dreieck gilt 0 < h <= c/2. Die Höhe ist am höchsten, wenn sie die Hypotenuse in zwei gleiche Hälften teilt und genau c/2 erreicht. Ein größerer Wert, etwa h = 6 bei c = 10, kann zu keinem solchen Dreieck gehören." },
      { "question": "Warum ist die maximale Höhe die halbe Hypotenuse?", "answer": "Aus h zum Quadrat = xy mit x + y = c ist das Produkt xy am größten, wenn x = y = c/2 gilt. Dann ist h zum Quadrat <= c zum Quadrat / 4, also h <= c/2: Die gleichmäßigste Teilung ergibt die höchste Höhe." },
      { "question": "Was geschieht, wenn die Höhe der halben Hypotenuse gleicht?", "answer": "Das Dreieck ist ein gleichschenklig-rechtwinkliges Dreieck: gleiche Katheten, spitze Winkel von 45 Grad und die Höhe zugleich als Seitenhalbierende zur Hypotenuse. Dieser gültige Grenzfall ergibt die größtmögliche Fläche, K = c zum Quadrat / 4." },
      { "question": "Kann ich die Fläche berechnen, ohne die beiden Katheten zu kennen?", "answer": "Ja. Die Basis und ihre zugehörige senkrechte Höhe genügen; die Katheten fügen nichts über die Fläche hinzu. Geben Sie die Hypotenuse c und die Höhe h ein, und K = ch/2 liefert die Fläche direkt." },
      { "question": "Wie hängt die hypotenusenbasierte Formel mit der Kathetenformel zusammen?", "answer": "Beide berechnen dieselbe Fläche. ab/2 gleich ch/2 zu setzen und mit zwei zu multiplizieren ergibt ab = ch, also h = ab/c, und deshalb ist die Berechnung beider eine so starke Prüfung." },
      { "question": "Wie hängen die Höhe und die beiden Hypotenusenabschnitte zusammen?", "answer": "Die Höhe erfüllt h zum Quadrat = xy, wobei x und y die Abschnitte sind, die sie aus der Hypotenuse schneidet, also ist sie deren geometrisches Mittel. Sie kommt aus der Ähnlichkeit der beiden kleineren Dreiecke, über x/h = h/y." },
      { "question": "Können Hypotenuse und Höhe die beiden Katheten bestimmen?", "answer": "Ja, bis auf Vertauschung. Aus a zum Quadrat + b zum Quadrat = c zum Quadrat und ab = ch folgen die Katheten aus (c zum Quadrat +/- c mal Wurzel aus (c zum Quadrat - 4h zum Quadrat)) / 2. Für c = 10 und h = 4,8 ergibt das die Katheten 6 und 8." },
      { "question": "Funktioniert der Rechner mit Zentimetern, Metern und Fuß?", "answer": "Ja, solange beide Eingaben dieselbe Einheit verwenden: Meter ergeben Quadratmeter, Zentimeter ergeben Quadratzentimeter, Fuß ergeben Quadratfuß. Rechnen Sie gemischte Einheiten zuerst um." }
    ]
  },
  "it": {
    "tocHeading": "In questa guida",
    "tocItems": {
      "sec-intro": "Come calcolare l'area di un triangolo rettangolo da ipotenusa e altezza",
      "sec-understand": "Ipotenusa, cateti e altezza: cosa sono",
      "sec-formula": "Perché la formula dell'area è metà ipotenusa per altezza",
      "sec-relationship": "Come ipotenusa e altezza si collegano ai due cateti",
      "sec-max": "Perché l'altezza non può superare metà ipotenusa",
      "sec-howto": "Come usare la calcolatrice dell'area da ipotenusa e altezza",
      "sec-examples": "Esempi svolti passo passo",
      "sec-applications": "Applicazioni nella vita reale",
      "sec-geomean": "La relazione della media geometrica",
      "sec-legs": "Ricavare i due cateti da ipotenusa e altezza",
      "sec-valid": "Verificare la validità delle misure",
      "sec-units": "Unità di misura e arrotondamento",
      "sec-mistakes": "Errori comuni",
      "sec-verify": "Come verificare l'area calcolata",
      "sec-altitude-table": "Come l'altezza influisce sull'area",
      "sec-related": "Esplora le calcolatrici correlate per il triangolo rettangolo",
      "sec-faq": "Domande frequenti",
      "sec-conclusion": "Conclusione"
    },
    "faqHeading": "Domande frequenti",
    "relatedHeading": "Esplora le calcolatrici correlate per il triangolo rettangolo",
    "relatedIntro": "Misure diverse richiedono calcolatrici diverse.",
    "relatedItems": [
      "Calcolatrice dell'area del triangolo rettangolo",
      "Calcolatrice dell'area del triangolo rettangolo dall'angolo",
      "Calcolatrice dell'area del triangolo rettangolo dall'altezza",
      "Calcolatrice dell'area del triangolo rettangolo dai cateti",
      "Calcolatrice dell'altezza del triangolo rettangolo",
      "Calcolatrice dell'area del triangolo rettangolo da raggio inscritto e semiperimetro"
    ],
    "sections": {
      "sec-intro": {
        "h2": "Come calcolare l'area di un triangolo rettangolo da ipotenusa e altezza",
        "blocks": [
          { "kind": "p", "text": "Un triangolo rettangolo ha un'ipotenusa di [[10\\text{ m}]] e l'altezza tracciata su quell'ipotenusa misura [[4.8\\text{ m}]]. Applicando [[K=ch/2]]: [[K=(10\\times4.8)/2]], [[[\\boxed{K=24\\text{ m}^2}]]]. Il triangolo racchiude 24 metri quadrati di superficie piana. Questo è il metodo completo che la calcolatrice automatizza: un lato, la sua altezza perpendicolare, una moltiplicazione, un dimezzamento." },
          { "kind": "p", "text": "L'ipotenusa funziona da base perché qualsiasi lato di un triangolo può essere la base quando è nota l'altezza perpendicolare corrispondente. L'altezza è il segmento perpendicolare tracciato dal vertice dell'angolo retto all'ipotenusa, e deve incontrare l'ipotenusa ad angolo retto; un segmento inclinato non è l'altezza di cui questa formula ha bisogno. Poiché l'area dipende solo dalla base e dalla sua altezza, i due cateti non servono come input, e il risultato è sempre espresso nelle unità quadrate dell'unità di lunghezza usata." }
        ]
      },
      "sec-understand": {
        "h2": "Ipotenusa, cateti e altezza: cosa sono",
        "blocks": [
          { "kind": "p", "text": "La notazione usata ovunque è questa: [[A]], [[B]] e [[C]] sono i vertici e gli angoli con [[C=90^\\circ]]; [[a]] e [[b]] sono i due cateti; [[c]] è l'ipotenusa opposta a [[C]]; [[h]] è l'altezza perpendicolare tracciata dal vertice [[C]] all'ipotenusa; [[D]] è il punto in cui l'altezza incontra l'ipotenusa; [[x]] e [[y]] sono i due segmenti dell'ipotenusa; e [[K]] è l'area, usata ovunque per non confonderla mai con l'angolo [[A]]." },
          { "kind": "h3", "text": "Cos'è un triangolo rettangolo?" },
          { "kind": "p", "text": "Un triangolo rettangolo contiene esattamente un angolo di 90 gradi. I suoi due cateti si incontrano in quell'angolo, e l'ipotenusa gli sta di fronte come lato più lungo. Gli altri due angoli sono acuti, e poiché i tre angoli sommano 180 gradi, da [[A+B+C=180^\\circ]] con [[C=90^\\circ]] segue [[A+B=90^\\circ]]. Il metodo dell'altezza dipende da questo: la base è il lato più lungo, l'altezza scende dal vertice dell'angolo retto." },
          { "kind": "h3", "text": "Cos'è l'ipotenusa?" },
          { "kind": "p", "text": "L'ipotenusa è il lato opposto all'angolo retto, indicato con [[c]] nella calcolatrice. Per trovarla in qualsiasi rotazione, individuate il lato che non tocca il quadratino di marcatura dell'angolo retto; quel lato è l'ipotenusa. È più lunga di ciascun cateto e non deve essere disegnata orizzontalmente: una base è un lato di riferimento scelto, non una direzione sullo schermo." },
          { "kind": "h3", "text": "Cos'è un'altezza in geometria?" },
          { "kind": "p", "text": "Un'altezza è un segmento perpendicolare tracciato da un vertice alla retta che contiene il lato opposto. Deve formare un angolo di 90 gradi con quel lato, ed è questo che la rende un'altezza anziché una semplice linea. Un'altezza non è necessariamente uno dei lati originali del triangolo, e quale segmento conti come altezza cambia con la base scelta." },
          { "kind": "h3", "text": "Capire l'altezza relativa all'ipotenusa" },
          { "kind": "p", "text": "Nel triangolo [[ABC]], [[C]] è il vertice dell'angolo retto e [[AB]] è l'ipotenusa. L'altezza [[h]] è il segmento [[CD]] tracciato da [[C]] perpendicolarmente ad [[AB]], quindi [[CD\\perp AB]], [[CD=h]] e [[AB=c]], con [[D]] come piede, dividendo il triangolo in due triangoli rettangoli più piccoli annidati al suo interno." },
          { "kind": "h3", "text": "Come l'altezza divide l'ipotenusa" },
          { "kind": "p", "text": "L'altezza tagli l'ipotenusa in [[AD=x]] e [[DB=y]]. Allora [[[\\boxed{x+y=c}]]]. Ogni triangolo più piccolo contiene un angolo retto e condivide un angolo acuto con l'originale, quindi i tre triangoli sono simili. La similitudine dei due triangoli più piccoli dà [[x/h=h/y]], e la moltiplicazione incrociata produce [[[\\boxed{h^2=xy}]]], la relazione della media geometrica: l'altezza è la media geometrica dei due segmenti dell'ipotenusa, e il punto di partenza per la regola dell'altezza massima qui sotto." }
        ],
        "imgAlt": "Triangolo ABC con angolo retto in C, ipotenusa AB indicata con c, altezza CD indicata con h, segmenti x e y",
        "figcaption": "Triangolo ABC con l'altezza CD sull'ipotenusa: AD = x, DB = y, x + y = c, h&sup2; = xy e K = ch/2."
      },
      "sec-formula": {
        "h2": "Perché la formula dell'area è metà ipotenusa per altezza?",
        "blocks": [
          { "kind": "p", "text": "L'area di ogni triangolo parte da un'unica regola: [[K=\\frac12\\times\\text{base}\\times\\text{perpendicular height}]]. Qualsiasi lato può essere la base se l'altezza usata gli è perpendicolare. Questa calcolatrice sceglie l'ipotenusa come base, quindi [[\\text{base}=c]], e l'altezza perpendicolare corrispondente è l'altezza [[\\text{height}=h]]. Sostituendo si ottiene [[K=\\frac12\\times c\\times h]], cioè [[[\\boxed{K=\\frac{ch}{2}}]]]." },
          { "kind": "h3", "text": "Perché l'ipotenusa può essere usata come base?" },
          { "kind": "p", "text": "L'ipotenusa è semplicemente la base scelta per questo calcolo. L'altezza deve essere misurata dal vertice opposto, il vertice dell'angolo retto [[C]], e deve essere perpendicolare all'ipotenusa. Scegliere un altro lato come base con la sua altezza corrispondente dà la stessa area. La base è un ruolo svolto da un lato, non un'etichetta permanente." },
          { "kind": "h3", "text": "Perché la formula è divisa per due?" },
          { "kind": "p", "text": "Un triangolo riempie esattamente metà del parallelogramma costruito sulla stessa base con la stessa altezza perpendicolare. Con base 10 e altezza 4,8, l'area del parallelogramma è [[10\\times4.8=48]]; il triangolo al suo interno ne occupa metà, quindi [[K=48/2=24]]. Saltare il dimezzamento risponde a un'altra domanda: l'area del parallelogramma, non quella del triangolo." },
          { "kind": "h3", "text": "La formula vale solo per i triangoli rettangoli?" },
          { "kind": "p", "text": "L'equazione [[K=ch/2]] è la formula generale dell'area del triangolo, valida per qualsiasi triangolo ogni volta che [[c]] è la base scelta e [[h]] la sua altezza perpendicolare. Ciò che rende questa pagina specifica per i triangoli rettangoli è la lettura: [[c]] è l'ipotenusa, [[h]] scende dal vertice dell'angolo retto, e l'altezza obbedisce alla restrizione aggiuntiva [[h\\leq c/2]], che non ha senso per i triangoli generici." },
          { "kind": "h3", "text": "Perché non servono entrambi i cateti" },
          { "kind": "p", "text": "L'area richiede un lato e la sua altezza perpendicolare corrispondente, nient'altro. Quando [[c]] e [[h]] sono già noti, i cateti non aggiungono alcuna informazione che cambi l'area. La formula dei cateti [[K=ab/2]] è un'altra via di input verso la stessa quantità, utile quando i dati misurati sono i due lati perpendicolari. Se avete i cateti, la <a href=\"/right-triangle-area-from-legs-calculator/\">calcolatrice dell'area del triangolo rettangolo dai cateti</a> li prende direttamente." }
        ],
        "imgAlt": "Confronto dell'area K = ch/2 da ipotenusa e altezza contro K = ab/2 dai due cateti",
        "figcaption": "Due strade verso la stessa area: l'ipotenusa con la sua altezza, e i due cateti. Entrambe equivalgono alla regione racchiusa, quindi ch/2 = ab/2."
      },
      "sec-relationship": {
        "h2": "Come ipotenusa e altezza si collegano ai due cateti",
        "blocks": [
          { "kind": "p", "text": "Due formule d'area valide descrivono lo stesso triangolo: [[K=ab/2]] e [[K=ch/2]]. Poiché calcolano la stessa area, [[\\frac{ab}{2}=\\frac{ch}{2}]]. Moltiplicando entrambi i membri per due: [[ab=ch]]. Isolando l'altezza si ottiene [[[\\boxed{h=\\frac{ab}{c}}]]]. L'altezza relativa all'ipotenusa è il prodotto dei due cateti diviso per l'ipotenusa, e questo spiega perché le due formule d'area non possono mai contraddirsi su un triangolo coerente." },
          { "kind": "h3", "text": "Perché questa relazione è utile" },
          { "kind": "p", "text": "Collega tre modi di descrivere la stessa geometria. I cateti e l'ipotenusa determinano l'altezza, quindi un triangolo misurato dai suoi lati la contiene già. L'altezza e l'ipotenusa determinano l'area, quindi l'area non ha mai bisogno di ricavare prima i cateti. Calcolare l'area con entrambe le formule e confrontare è una delle verifiche più solide, perché un errore su una strada raramente si ripete sull'altra." },
          { "kind": "h3", "text": "Collegare la formula al teorema di Pitagora" },
          { "kind": "p", "text": "Il teorema di Pitagora [[a^2+b^2=c^2]] verifica il legame tra i cateti e l'ipotenusa. Prendete un triangolo 3-4-5: [[3^2+4^2=5^2]], [[9+16=25]]. L'altezza è [[h=\\frac{3\\times4}{5}]], [[[\\boxed{h=2.4}]]]. L'area da ipotenusa e altezza è [[K=\\frac{5\\times2.4}{2}=6]], e dai cateti è [[K=\\frac{3\\times4}{2}=6]]. Entrambe le formule misurano la stessa regione racchiusa, e [[h=ab/c]] è il legame che lo garantisce." },
          { "kind": "h3", "text": "Come l'altezza crea due triangoli simili" },
          { "kind": "p", "text": "L'altezza divide il triangolo originale in due triangoli rettangoli più piccoli, ciascuno dei quali condivide i suoi angoli acuti con l'originale. Due angoli condivisi rendono i tre triangoli simili, quindi i lati corrispondenti restano in proporzione. Abbinando l'altezza ai segmenti dell'ipotenusa si ottiene [[x/h=h/y]], che per moltiplicazione incrociata dà [[h^2=xy]]: la relazione della media geometrica è la similitudine scritta come equazione." }
        ]
      },
      "sec-max": {
        "h2": "Perché l'altezza non può mai superare metà ipotenusa?",
        "blocks": [
          { "kind": "p", "text": "Ogni triangolo rettangolo valido obbedisce a [[[\\boxed{h\\leq\\frac{c}{2}}]]]. È un fatto geometrico, e merita una dimostrazione." },
          { "kind": "h3", "text": "Capire i due segmenti dell'ipotenusa" },
          { "kind": "p", "text": "Ricordiamo [[x+y=c]] e [[h^2=xy]]. Il prodotto [[xy]] è massimo quando i due segmenti sono uguali, conseguenza della disuguaglianza tra media aritmetica e geometrica: [[xy\\leq\\left(\\frac{x+y}{2}\\right)^2]]. Poiché [[x+y=c]], il secondo membro diventa [[c^2/4]], quindi [[h^2\\leq\\frac{c^2}{4}]], e per lunghezze positive [[h\\leq c/2]]. In parole povere: divisioni disuguali riducono il prodotto e l'altezza; l'altezza più alta viene dalla divisione più equilibrata." },
          { "kind": "h3", "text": "Cosa succede all'altezza massima?" },
          { "kind": "p", "text": "Il massimo si verifica quando [[x=y=c/2]], e allora [[h=c/2]]. Questo produce un triangolo rettangolo isoscele: i suoi due cateti sono uguali, e i suoi angoli acuti misurano [[45^\\circ]] e [[45^\\circ]]. L'altezza funge allora anche da mediana all'ipotenusa, un triangolo valido, non un caso degenere." },
          { "kind": "h3", "text": "Esempio di altezza massima" },
          { "kind": "p", "text": "Con [[c=10]], l'altezza massima è [[h_{\\max}=10/2=5]]. L'area massima è [[K=\\frac{10\\times5}{2}]], [[[\\boxed{K_{\\max}=25}]]]. Nessun triangolo rettangolo con ipotenusa 10 può avere un'altezza sopra 5, e quindi nessuno può avere un'area sopra 25 unità quadrate." },
          { "kind": "h3", "text": "Cosa succede quando l'altezza supera c/2?" },
          { "kind": "p", "text": "Con [[c=10]] e [[h=5.5]], l'altezza massima valida è 5, quindi queste misure non possono descrivere un triangolo rettangolo. La formula produce comunque [[K=\\frac{10\\times5.5}{2}=27.5]], ma quel numero non rappresenta alcun triangolo rettangolo valido con quelle misure. Trattatelo come il segnale che una misura è sbagliata, non come un'area. Questa guida non afferma che la calcolatrice rifiuti automaticamente tali input." },
          { "kind": "h3", "text": "Cosa succede quando l'altezza è molto più piccola?" },
          { "kind": "p", "text": "Un'altezza piccola rispetto all'ipotenusa descrive un triangolo rettangolo stretto e allungato con un cateto molto più lungo dell'altro. A ipotenusa fissata, l'area diminuisce quando l'altezza diminuisce, perché [[K=ch/2]] scala direttamente con [[h]]. Non c'è un limite inferiore positivo: l'altezza può tendere a zero, e il triangolo si appiattisce verso una linea degenere." }
        ],
        "imgAlt": "Altezza massima c/2 in un triangolo rettangolo isoscele, un'altezza valida più piccola e un caso non valido",
        "figcaption": "A sinistra: l'altezza massima a c/2 dà l'area più grande. Al centro: un'altezza valida più piccola. A destra: un'altezza sopra c/2 non può appartenere a un triangolo rettangolo."
      },
      "sec-howto": {
        "h2": "Come usare la calcolatrice dell'area del triangolo rettangolo da ipotenusa e altezza",
        "blocks": [
          { "kind": "p", "text": "La calcolatrice richiede esattamente due input. La procedura qui sotto segue l'ordine mostrato a schermo, da un triangolo misurato a un risultato verificato." }
        ],
        "steps": [
          "<strong>Misurate o individuate l'ipotenusa.</strong> Il lato più lungo, opposto all'angolo di 90 gradi.",
          "<strong>Individuate l'altezza perpendicolare tracciata sull'ipotenusa.</strong> Parte dal vertice dell'angolo retto e incontra l'ipotenusa a 90 gradi.",
          "<strong>Confermate che l'altezza sia perpendicolare.</strong> Un segmento misurato lungo un lato inclinato non è l'altezza di cui la formula ha bisogno.",
          "<strong>Inserite l'ipotenusa [[c]].</strong>",
          "<strong>Inserite l'altezza [[h]].</strong>",
          "<strong>Selezionate unità di lunghezza compatibili.</strong> Entrambe le misure devono usare la stessa unità.",
          "<strong>Verificate che entrambe le misure siano positive.</strong> Lunghezze nulle o negative non descrivono alcun triangolo.",
          "<strong>Confermate che [[h\\leq c/2]].</strong> Per [[c=10]], qualsiasi altezza sopra 5 non può appartenere a un triangolo rettangolo con quell'ipotenusa.",
          "<strong>Fate clic su Calcola area.</strong>",
          "<strong>Esaminate il risultato.</strong> L'area appare nelle unità quadrate corrispondenti agli input.",
          "<strong>Controllate le unità quadrate.</strong> I metri danno metri quadrati; i centimetri danno centimetri quadrati.",
          "<strong>Rileggete i passaggi della soluzione.</strong> Mostrano la sostituzione e il calcolo.",
          "<strong>Usate Reimposta prima di inserire un nuovo triangolo.</strong> Cancella entrambi i campi così il calcolo successivo riparte pulito."
        ],
        "closingParagraphs": [
          "La calcolatrice non chiede né i due cateti né un angolo: un lato e la sua altezza perpendicolare corrispondente determinano completamente l'area."
        ]
      },
      "sec-examples": {
        "h2": "Esempi passo passo di area del triangolo rettangolo da ipotenusa e altezza",
        "blocks": [
          { "kind": "p", "text": "Quattro esempi svolti costruiscono il metodo partendo dal familiare. Ciascuno applica [[K=ch/2]] mostrando ogni sostituzione, e ciascuno verifica che l'altezza rispetti il limite del triangolo rettangolo." },
          { "kind": "h3", "text": "Esempio 1: l'esempio della calcolatrice esistente" },
          { "kind": "p", "text": "Con [[c=10]] e [[h=4.8]]. Passo 1: scrivete la formula, [[K=ch/2]]. Passo 2: sostituite, [[K=\\frac{10\\times4.8}{2}]]. Passo 3: moltiplicate, [[K=\\frac{48}{2}]]. Risposta finale: [[[\\boxed{K=24\\text{ square units}}]]]. L'altezza è valida perché [[4.8<5]], sotto il massimo di metà ipotenusa." },
          { "kind": "h3", "text": "Esempio 2: un triangolo 3-4-5" },
          { "kind": "p", "text": "Con [[a=3]], [[b=4]], [[c=5]]. Trovate prima l'altezza: [[h=ab/c]], quindi [[h=\\frac{3\\times4}{5}=2.4]]. Poi [[K=\\frac{5\\times2.4}{2}]], [[[\\boxed{K=6}]]]. Verificate con i cateti: [[K=\\frac{3\\times4}{2}=6]]. Le due strade concordano, come devono." },
          { "kind": "h3", "text": "Esempio 3: un triangolo rettangolo isoscele" },
          { "kind": "p", "text": "Con [[c=10]] e [[h=5]]. Allora [[K=\\frac{10\\times5}{2}]], [[[\\boxed{K=25}]]]. L'altezza eguaglia metà ipotenusa, quindi i cateti sono uguali e ciascun angolo acuto misura [[45^\\circ]]. Questa è la massima area possibile per qualsiasi triangolo rettangolo con ipotenusa 10." },
          { "kind": "h3", "text": "Esempio 4: un'altezza triangolare più piccola" },
          { "kind": "p", "text": "Con [[c=13]] e [[h=5]]. Allora [[K=\\frac{13\\times5}{2}]], [[[\\boxed{K=32.5\\text{ square units}}]]]. L'altezza rispetta il limite perché [[5\\leq6.5]]: metà ipotenusa è 6,5, e 5 è comodamente sotto." }
        ]
      },
      "sec-applications": {
        "h2": "Applicazioni nella vita reale dell'area del triangolo rettangolo da ipotenusa e altezza",
        "blocks": [
          { "kind": "p", "text": "Dodici situazioni svolte mostrano la formula a scale diverse e in unità diverse. Ciascuna nomina il triangolo nella scena, dà le due misure, sostituisce passo passo e dichiara l'ipotesi alla base. Ogni esempio è un pannello, un profilo, una sezione o un modello semplificato di forma triangolare rettangolare; la formula si applica al triangolo modellato, non a ogni oggetto curvo o irregolare con lo stesso nome." },
          { "kind": "h3", "text": "Esempio 1: vetrata triangolare" },
          { "kind": "p", "text": "Un pannello di vetro triangolare rettangolare ha un'ipotenusa di [[2.5\\text{ m}]] e un'altezza perpendicolare di [[1.2\\text{ m}]]. Usando [[K=ch/2]]: [[K=\\frac{2.5\\times1.2}{2}]], [[[\\boxed{K=1.5\\text{ m}^2}]]]. Questa è l'area del vetro piano prima del telaio, supponendo bordi dritti e un vero angolo retto." },
          { "kind": "h3", "text": "Esempio 2: pannello laterale di rampa triangolare" },
          { "kind": "p", "text": "Un pannello laterale triangolare rettangolare di una rampa ha un'ipotenusa di [[4\\text{ m}]] e un'altezza perpendicolare di [[1.5\\text{ m}]]. Allora [[K=\\frac{4\\times1.5}{2}]], [[[\\boxed{K=3\\text{ m}^2}]]]. Il risultato descrive il profilo triangolare laterale, non la superficie calpestabile." },
          { "kind": "h3", "text": "Esempio 3: sezione di vela triangolare" },
          { "kind": "p", "text": "Una sezione di vela triangolare rettangolare ha un'ipotenusa di [[13\\text{ ft}]] e un'altezza di [[5\\text{ ft}]]. Allora [[K=\\frac{13\\times5}{2}]], [[[\\boxed{K=32.5\\text{ ft}^2}]]]. Questa è l'area del tessuto piano prima di cuciture o curvature; le vere vele si gonfiano, quindi la vela è modellata come piatta." },
          { "kind": "h3", "text": "Esempio 4: rilevamento di una sezione di terreno triangolare" },
          { "kind": "p", "text": "Un appezzamento semplificato triangolare rettangolare ha un'ipotenusa di [[50\\text{ m}]] e un'altezza di [[12\\text{ m}]]. Allora [[K=\\frac{50\\times12}{2}]], [[[\\boxed{K=300\\text{ m}^2}]]]. Questo stima l'area con un modello semplificato che tratta i confini come linee rette su terreno piano." },
          { "kind": "h3", "text": "Esempio 5: piastra di collegamento in acciaio" },
          { "kind": "p", "text": "Una piastra di supporto triangolare rettangolare in acciaio ha un'ipotenusa di [[3.4\\text{ m}]] e un'altezza di [[1.6\\text{ m}]]. Allora [[K=\\frac{3.4\\times1.6}{2}]], [[[\\boxed{K=2.72\\text{ m}^2}]]]. Questa è solo l'area della piastra piana; la capacità portante è un'altra questione." },
          { "kind": "h3", "text": "Esempio 6: profilo laterale di scala" },
          { "kind": "p", "text": "Un profilo laterale di scala semplificato triangolare rettangolare ha un'ipotenusa di [[5\\text{ m}]] e un'altezza di [[2\\text{ m}]]. Allora [[K=\\frac{5\\times2}{2}]], [[[\\boxed{K=5\\text{ m}^2}]]]. Questo descrive il profilo triangolare laterale, non la somma dei singoli gradini e alzate." },
          { "kind": "h3", "text": "Esempio 7: segnale stradale triangolare" },
          { "kind": "p", "text": "Un pannello segnaletico triangolare rettangolare ha un'ipotenusa di [[1.8\\text{ m}]] e un'altezza di [[0.8\\text{ m}]]. Allora [[K=\\frac{1.8\\times0.8}{2}]], [[[\\boxed{K=0.72\\text{ m}^2}]]]. 0,72 metri quadrati di superficie del segnale; ferramenta di montaggio esclusa." },
          { "kind": "h3", "text": "Esempio 8: pannello di supporto solare" },
          { "kind": "p", "text": "Un pannello di supporto per montaggio triangolare rettangolare ha un'ipotenusa di [[3\\text{ m}]] e un'altezza di [[1.2\\text{ m}]]. Allora [[K=\\frac{3\\times1.2}{2}]], [[[\\boxed{K=1.8\\text{ m}^2}]]]. Solo area del pannello; niente sull'elettricità prodotta, dato che si tratta di una staffa di montaggio." },
          { "kind": "h3", "text": "Esempio 9: modello di taglio in compensato" },
          { "kind": "p", "text": "Un modello triangolare rettangolare in compensato ha un'ipotenusa di [[2.5\\text{ m}]] e un'altezza di [[1\\text{ m}]]. Allora [[K=\\frac{2.5\\times1}{2}]], [[[\\boxed{K=1.25\\text{ m}^2}]]]. Pezzo triangolare utilizzabile; gli scarti di taglio richiedono un margine separato." },
          { "kind": "h3", "text": "Esempio 10: striscione triangolare in tessuto" },
          { "kind": "p", "text": "Uno striscione triangolare rettangolare ha un'ipotenusa di [[6\\text{ ft}]] e un'altezza di [[2.4\\text{ ft}]]. Allora [[K=\\frac{6\\times2.4}{2}]], [[[\\boxed{K=7.2\\text{ ft}^2}]]]. 7,2 piedi quadrati di materiale piano; i margini per gli orli li aggiunge il fabbricante." },
          { "kind": "h3", "text": "Esempio 11: grande appezzamento rilevato triangolare" },
          { "kind": "p", "text": "Una sezione di terreno triangolare rettangolare ha un'ipotenusa di [[80\\text{ m}]] e un'altezza di [[30\\text{ m}]]. Allora [[K=\\frac{80\\times30}{2}]], [[[\\boxed{K=1,200\\text{ m}^2}]]]. Valido solo dove l'appezzamento è davvero triangolare rettangolare su terreno piano." },
          { "kind": "h3", "text": "Esempio 12: pannello di supporto per tettoia triangolare" },
          { "kind": "p", "text": "Un pannello di supporto per tettoia triangolare rettangolare ha un'ipotenusa di [[8\\text{ m}]] e un'altezza di [[3.6\\text{ m}]]. Allora [[K=\\frac{8\\times3.6}{2}]], [[[\\boxed{K=14.4\\text{ m}^2}]]]. Area triangolare piana; carichi del vento e fissaggi sono questioni separate." },
          { "kind": "h3", "text": "Confronto degli esempi pratici" }
        ],
        "table": {
          "headers": ["Applicazione", "Ipotenusa c", "Altezza h", "Area", "Unità"],
          "rows": [
            ["Vetrata", "2.5", "1.2", "1.5", "m²"],
            ["Pannello laterale di rampa", "4", "1.5", "3", "m²"],
            ["Sezione di vela", "13", "5", "32.5", "ft²"],
            ["Sezione di terreno", "50", "12", "300", "m²"],
            ["Piastra di collegamento", "3.4", "1.6", "2.72", "m²"],
            ["Profilo di scala", "5", "2", "5", "m²"],
            ["Segnale stradale", "1.8", "0.8", "0.72", "m²"],
            ["Pannello di supporto solare", "3", "1.2", "1.8", "m²"],
            ["Modello in compensato", "2.5", "1", "1.25", "m²"],
            ["Striscione in tessuto", "6", "2.4", "7.2", "ft²"],
            ["Grande appezzamento rilevato", "80", "30", "1,200", "m²"],
            ["Pannello di supporto per tettoia", "8", "3.6", "14.4", "m²"]
          ]
        },
        "imgAlt": "Quattro applicazioni di K = ch/2: vetrata, pannello di rampa, vela e sezione di terreno rilevata",
        "figcaption": "La stessa formula in quattro scene: una vetrata, un pannello laterale di rampa, una vela e una sezione di terreno rilevata."
      },
      "sec-geomean": {
        "h2": "Perché il quadrato dell'altezza è uguale al prodotto di due segmenti dell'ipotenusa?",
        "blocks": [
          { "kind": "p", "text": "L'altezza incontra l'ipotenusa in [[D]], dividendola in [[AD=x]] e [[DB=y]]. La relazione è [[[\\boxed{h^2=xy}]]]. Qui [[x]] è il primo segmento, [[y]] è il secondo, e [[h]] è l'altezza perpendicolare. Vale la pena vedere da dove viene piuttosto che impararla a memoria." },
          { "kind": "h3", "text": "Come funziona questa relazione?" },
          { "kind": "p", "text": "L'altezza crea due triangoli rettangoli più piccoli, ciascuno simile all'originale e quindi simili tra loro. Abbinando il lato corto dell'uno al lato lungo dell'altro si ottiene [[\\frac{x}{h}=\\frac{h}{y}]], che per moltiplicazione incrociata dà [[h^2=xy]]. Estraendo le radici quadrate, [[h=\\sqrt{xy}]]: l'altezza è la media geometrica dei due segmenti dell'ipotenusa, il numero il cui quadrato eguaglia il loro prodotto." },
          { "kind": "h3", "text": "Un esempio numerico" },
          { "kind": "p", "text": "Con [[x=4]] e [[y=9]], allora [[h^2=4\\times9=36]], [[[\\boxed{h=6}]]]. L'ipotenusa completa è [[c=4+9=13]], e l'area è [[K=\\frac{13\\times6}{2}]], [[[\\boxed{K=39}]]]. Quando i due segmenti dell'ipotenusa sono noti, l'altezza segue senza alcuna misura dei cateti." },
          { "kind": "h3", "text": "Quando è utile questa relazione?" },
          { "kind": "p", "text": "Appare negli esercizi di geometria dove l'altezza manca ma i segmenti sono dati, nei problemi di similitudine, e ogni volta che una misura dell'altezza ha bisogno di una verifica indipendente. Spiega anche il limite dell'altezza: il prodotto [[xy]] è limitato dall'ipotenusa fissata, quindi anche l'altezza è limitata. La calcolatrice non ha bisogno di [[x]] e [[y]] come input; questo teorema è conoscenza di supporto, non un campo della calcolatrice." }
        ]
      },
      "sec-legs": {
        "h2": "Come ricavare i due cateti quando ipotenusa e altezza sono note",
        "blocks": [
          { "kind": "p", "text": "La calcolatrice ha bisogno solo di [[c]] e [[h]] per l'area, ma queste due misure contengono anche abbastanza informazioni per determinare le lunghezze dei due cateti, a meno dello scambio delle loro posizioni. Partendo da [[a^2+b^2=c^2]] e [[ab=ch]]. Poiché [[(a^2-b^2)^2=(a^2+b^2)^2-4a^2b^2]], la sostituzione dà [[(a^2-b^2)^2=c^4-4c^2h^2]], e quindi [[[\\boxed{a^2,b^2=\\frac{c^2\\pm c\\sqrt{c^2-4h^2}}{2}}]]]. I due segni corrispondono alle due assegnazioni dei cateti: scambiare i cateti non cambia nulla del triangolo né della sua area." },
          { "kind": "p", "text": "Esempio numerico: con [[c=10]] e [[h=4.8]], allora [[ab=ch=48]] e [[a^2+b^2=100]]. I cateti sono [[a=6]] e [[b=8]]. Verifica: [[6^2+8^2=10^2]], [[36+64=100]]. L'area si verifica in entrambi i modi: [[K=\\frac{6\\times8}{2}=24]] e [[K=\\frac{10\\times4.8}{2}=24]]. Questa è un'ulteriore intuizione matematica, non una funzione in più della calcolatrice esistente, e non deve distrarre dallo scopo della calcolatrice: l'area da ipotenusa e altezza." }
        ]
      },
      "sec-valid": {
        "h2": "Come verificare che le misure di ipotenusa e altezza siano valide",
        "blocks": [
          { "kind": "p", "text": "Per un triangolo rettangolo non degenere, gli input devono soddisfare tre condizioni: [[c>0]], [[h>0]] e [[h\\leq c/2]]. Le prime due escludono lunghezze nulle e negative; la terza è il limite dell'altezza dimostrato prima. Tutte e tre devono valere insieme." },
          { "kind": "h3", "text": "Esempio di input valido" },
          { "kind": "p", "text": "Con [[c=12]] e [[h=5]], l'altezza massima è [[h_{\\max}=6]]. Poiché [[5<6]], le misure sono valide, e [[K=\\frac{12\\times5}{2}=30]]." },
          { "kind": "h3", "text": "Esempio di input non valido" },
          { "kind": "p", "text": "Con [[c=12]] e [[h=7]], l'altezza massima è [[h_{\\max}=6]]. Poiché [[7>6]], le misure non possono descrivere un triangolo rettangolo: con l'ipotenusa fissata a 12, nessuna divisione in segmenti [[x]] e [[y]] può far raggiungere 7 a [[\\sqrt{xy}]]." },
          { "kind": "h3", "text": "Caso limite" },
          { "kind": "p", "text": "Con [[c=12]] e [[h=6]], l'altezza eguaglia il valore massimo possibile. È un triangolo rettangolo isoscele con due cateti uguali, seduto esattamente sul limite. Il limite è inclusivo: [[h\\leq c/2]] ammette l'uguaglianza." },
          { "kind": "h3", "text": "E i valori nulli o negativi?" },
          { "kind": "p", "text": "Un'ipotenusa deve essere positiva, e un'altezza deve essere positiva per un triangolo non degenere. Un'altezza nulla produce area nulla e una forma degenere, una linea anziché un triangolo, mentre le lunghezze negative non hanno significato geometrico. Questa guida non afferma che la calcolatrice esegua automaticamente ogni validazione." }
        ]
      },
      "sec-units": {
        "h2": "Capire le unità di area nei calcoli con ipotenusa e altezza",
        "blocks": [
          { "kind": "p", "text": "L'area è bidimensionale, quindi la sua unità è il quadrato dell'unità di lunghezza. In simboli, [[\\text{m}\\times\\text{m}=\\text{m}^2]]. I selettori di unità esistono perché il risultato possa essere etichettato correttamente." },
          { "kind": "h3", "text": "Perché le unità devono coincidere" },
          { "kind": "p", "text": "L'ipotenusa e l'altezza devono essere espresse nella stessa unità prima di applicare la formula. Se l'ipotenusa è 200 cm e l'altezza è 1 m, convertite prima in 200 cm e 100 cm. Allora [[K=\\frac{200\\times100}{2}]], [[K=10,000\\text{ cm}^2]], o equivalentemente [[K=1\\text{ m}^2]]. Moltiplicare misure in unità diverse produce un numero senza unità pulita, quindi convertite prima e calcolate poi." },
          { "kind": "h3", "text": "Perché l'arrotondamento conta" },
          { "kind": "p", "text": "L'arrotondamento delle misure cambia leggermente l'area finale, perché l'altezza vi è moltiplicata direttamente. Mantenete la piena precisione nei passaggi intermedi e arrotondate solo la risposta finale; arrotondare l'altezza troppo presto accumula l'errore." },
          { "kind": "h3", "text": "Valori esatti contro valori misurati" },
          { "kind": "p", "text": "Le misure esatte, come l'altezza 5 di un triangolo rettangolo isoscele con ipotenusa 10, si comportano diversamente dalle letture con metro o strumento. L'incertezza dello strumento si propaga nell'area, quindi trattate l'ultima cifra come affidabile solo quanto gli input." }
        ]
      },
      "sec-mistakes": {
        "h2": "Errori comuni nel calcolo dell'area del triangolo rettangolo da ipotenusa e altezza",
        "blocks": [
          { "kind": "p", "text": "La maggior parte delle risposte sbagliate viene da input etichettati male anziché da calcoli sbagliati. I quindici errori qui sotto coprono quasi tutti i casi." },
          { "kind": "h3", "text": "1. Confondere l'ipotenusa con un cateto" },
          { "kind": "p", "text": "Inserire un cateto come ipotenusa restringe la base. Correzione: scegliete il lato che non tocca il quadratino di marcatura dell'angolo retto." },
          { "kind": "h3", "text": "2. Misurare l'altezza lungo un lato inclinato" },
          { "kind": "p", "text": "Un segmento che corre lungo un lato non è l'altezza. Correzione: deve partire dal vertice dell'angolo retto e colpire l'ipotenusa a 90 gradi." },
          { "kind": "h3", "text": "3. Usare una distanza non perpendicolare all'ipotenusa" },
          { "kind": "p", "text": "Una distanza non perpendicolare dal vertice all'ipotenusa è più lunga della vera altezza, gonfiando l'area. Correzione: confermate prima la perpendicolarità." },
          { "kind": "h3", "text": "4. Usare l'altezza dal vertice sbagliato" },
          { "kind": "p", "text": "Solo l'altezza dal vertice dell'angolo retto si abbina all'ipotenusa." },
          { "kind": "h3", "text": "5. Dimenticare di dividere per due" },
          { "kind": "p", "text": "[[c\\times h]] è l'area del parallelogramma, non quella del triangolo. Correzione: dimezzate ogni prodotto base-altezza." },
          { "kind": "h3", "text": "6. Inserire la misura sbagliata come c" },
          { "kind": "p", "text": "Un lato più corto inserito come ipotenusa restringe la base. Correzione: l'ipotenusa è sempre il lato più lungo." },
          { "kind": "h3", "text": "7. Inserire la misura sbagliata come h" },
          { "kind": "p", "text": "Un cateto inserito come altezza rompe l'abbinamento perpendicolare. Correzione: l'altezza deve incontrare l'ipotenusa ad angolo retto." },
          { "kind": "h3", "text": "8. Mescolare unità di lunghezza diverse" },
          { "kind": "p", "text": "Un'ipotenusa di 2 m con un'altezza di 150 cm non dà alcun numero significativo. Correzione: convertite prima in un'unica unità." },
          { "kind": "h3", "text": "9. Riportare l'area in unità lineari" },
          { "kind": "p", "text": "Un'area di 24 m² non è 24 m. Correzione: scrivete l'unità al quadrato con il numero." },
          { "kind": "h3", "text": "10. Inserire un'altezza negativa" },
          { "kind": "p", "text": "Le lunghezze non possono essere negative; un'altezza negativa segnala un errore di inserimento. Correzione: reinserite la distanza positiva misurata." },
          { "kind": "h3", "text": "11. Inserire un'ipotenusa nulla" },
          { "kind": "p", "text": "Un'ipotenusa nulla significa che non esiste alcun triangolo. Correzione: verificate che ogni lunghezza sia positiva." },
          { "kind": "h3", "text": "12. Usare un'altezza maggiore di metà ipotenusa" },
          { "kind": "p", "text": "Un'altezza di 6 con [[c=10]] viola il limite. Correzione: ricontrollate il segmento misurato." },
          { "kind": "h3", "text": "13. Supporre che ogni triangolo con stessa base e altezza sia necessariamente rettangolo" },
          { "kind": "p", "text": "[[K=ch/2]] vale per qualsiasi triangolo con base e altezza abbinate. Correzione: applicate il limite dell'altezza solo ai triangoli rettangoli." },
          { "kind": "h3", "text": "14. Confondere l'altezza h con uno dei cateti a o b" },
          { "kind": "p", "text": "In un triangolo 6-8-10 l'altezza è 4,8, che non eguaglia alcun cateto. Correzione: tenete separati [[a]], [[b]] e [[h]]." },
          { "kind": "h3", "text": "15. Supporre che la formula validi automaticamente la geometria del triangolo" },
          { "kind": "p", "text": "Il calcolo non rifiuta mai un input. Correzione: eseguite voi stessi le verifiche di validità." },
          { "kind": "h3", "text": "Sbagliato contro corretto: un esempio concreto" },
          { "kind": "p", "text": "Con [[c=10]] e [[h=4]], il calcolo corretto è [[K=\\frac{10\\times4}{2}=20]]. Saltare il dimezzamento dà [[K=10\\times4=40]], il doppio dell'area del triangolo. Allo stesso modo, [[h=6]] con [[c=10]] fallisce il limite dell'altezza anche se il calcolo produce un numero." }
        ]
      },
      "sec-verify": {
        "h2": "Come verificare che l'area del vostro triangolo rettangolo sia corretta",
        "blocks": [
          { "kind": "p", "text": "Diverse verifiche catturano gli errori comuni. Il triangolo 6-8-10 ne dimostra la maggior parte." },
          { "kind": "h3", "text": "Metodo 1: ricontrollare la formula dell'area" },
          { "kind": "p", "text": "Ricalcolate [[K=ch/2]] con i valori inseriti. Per [[c=10]] e [[h=4.8]], [[K=(10\\times4.8)/2=24]]. Un secondo passaggio cattura gli errori di battitura." },
          { "kind": "h3", "text": "Metodo 2: verificare con i due cateti" },
          { "kind": "p", "text": "Quando i cateti sono noti o ricavati, [[K=ab/2]] deve concordare. Qui [[(6\\times8)/2=24]] corrisponde a [[(10\\times4.8)/2=24]]: due metodi, un triangolo, una risposta." },
          { "kind": "h3", "text": "Metodo 3: verificare il teorema di Pitagora" },
          { "kind": "p", "text": "Confermate [[a^2+b^2=c^2]]: [[36+64=100]]. Se i lati non lo soddisfano, l'identificazione del triangolo è sbagliata." },
          { "kind": "h3", "text": "Metodo 4: verificare la relazione dell'altezza" },
          { "kind": "p", "text": "Confermate [[h=ab/c]]: [[(6\\times8)/10=4.8]]. Una discordanza significa che l'altezza inserita non appartiene a questo triangolo." },
          { "kind": "h3", "text": "Metodo 5: verificare i due segmenti dell'ipotenusa" },
          { "kind": "p", "text": "Confermate [[x+y=c]] e [[h^2=xy]]. Con i segmenti 6,4 e 3,6: [[6.4+3.6=10]] e [[4.8^2=6.4\\times3.6]], poiché [[23.04=23.04]]." },
          { "kind": "h3", "text": "Metodo 6: verificare l'altezza massima" },
          { "kind": "p", "text": "Confermate [[h\\leq c/2]]. Qui [[4.8\\leq5]]. Qualsiasi area di triangolo rettangolo dichiarata sopra [[c^2/4]] per l'ipotenusa data è impossibile." },
          { "kind": "h3", "text": "Metodo 7: verificare le unità" },
          { "kind": "p", "text": "Assicuratevi che il risultato sia in unità quadrate: i metri danno metri quadrati, i centimetri danno centimetri quadrati. Un'area riportata in unità lineari è incompleta anche quando il numero è giusto." }
        ]
      },
      "sec-altitude-table": {
        "h2": "In che modo l'altezza influisce sull'area di un triangolo rettangolo?",
        "blocks": [
          { "kind": "p", "text": "Da [[K=ch/2]], quando l'ipotenusa è fissata l'area cambia direttamente con l'altezza. Raddoppiare l'altezza raddoppia l'area; aumentare l'altezza aumenta l'area nella stessa proporzione. La tabella qui sotto fissa [[c=10]] e varia l'altezza fino al suo massimo di 5." },
          { "kind": "p", "text": "Tutte e cinque le righe descrivono triangoli rettangoli validi perché ogni altezza è al massimo di 5 o sotto. L'altezza non può superare [[c/2]], e l'area massima si verifica quando i due cateti sono uguali. Notate che i cateti non restano fissi mentre l'altezza cambia; ogni riga è un triangolo diverso con un'ipotenusa in comune." }
        ],
        "table": {
          "headers": ["Altezza h", "Area K"],
          "rows": [
            ["1", "5"],
            ["2", "10"],
            ["3", "15"],
            ["4", "20"],
            ["5", "25"]
          ]
        }
      },
      "sec-related": {
        "h2": "Esplora le calcolatrici correlate per il triangolo rettangolo",
        "blocks": [
          { "kind": "p", "text": "Misure diverse richiedono calcolatrici diverse." }
        ]
      },
      "sec-faq": {
        "h2": "Domande frequenti",
        "blocks": []
      },
      "sec-conclusion": {
        "h2": "L'ipotenusa e la sua altezza bastano",
        "blocks": [
          { "kind": "p", "text": "Il metodo ipotenusa-altezza è l'ordinaria regola base-altezza puntata sul lato più lungo. Una volta individuata l'ipotenusa e avuta in mano l'altezza perpendicolare, l'area è a una moltiplicazione e un dimezzamento di distanza, senza bisogno di ricavare prima i cateti." },
          { "kind": "p", "text": "Il suo vero valore è la disciplina: perpendicolarità, limite dell'altezza e relazioni di media geometrica trasformano schizzi approssimativi in numeri verificabili. Verificate l'altezza e la risposta guadagna la sua fiducia." }
        ]
      }
    },
    "faqs": [
      { "question": "Come si calcola l'area di un triangolo rettangolo da ipotenusa e altezza?", "answer": "Moltiplicate l'ipotenusa c per l'altezza perpendicolare h e dividete per due: K = ch/2. Per esempio, c = 10 e h = 4,8 danno K = 24 unità quadrate. Confermate che l'altezza incontri l'ipotenusa ad angolo retto e che h sia al massimo metà di c." },
      { "question": "Qual è la formula dell'area con ipotenusa e altezza?", "answer": "La formula è K = ch/2, dove K è l'area, c è l'ipotenusa come base, e h è l'altezza perpendicolare a quella base. È l'ordinaria regola dell'area del triangolo con il lato più lungo come base, e il risultato usa le unità quadrate corrispondenti." },
      { "question": "Cos'è l'altezza relativa all'ipotenusa?", "answer": "È il segmento perpendicolare tracciato dal vertice dell'angolo retto C all'ipotenusa AB, incontrandola nel punto D: la distanza più breve da quel vertice all'ipotenusa e l'unica altezza che si abbina ad essa. Non è un cateto." },
      { "question": "L'altezza è la stessa cosa dell'ipotenusa?", "answer": "No. L'ipotenusa c è il lato più lungo, opposto all'angolo retto, mentre l'altezza h è la caduta perpendicolare dal vertice dell'angolo retto a quel lato: c è la base, h è l'altezza. In un triangolo 6-8-10, c = 10 e h = 4,8." },
      { "question": "L'altezza può superare metà ipotenusa?", "answer": "No. Per un triangolo rettangolo valido, 0 < h <= c/2. L'altezza è massima quando divide l'ipotenusa in due metà uguali, raggiungendo esattamente c/2. Un valore maggiore, come h = 6 con c = 10, non può appartenere a un tale triangolo." },
      { "question": "Perché l'altezza massima è metà ipotenusa?", "answer": "Da h al quadrato = xy con x + y = c, il prodotto xy è massimo quando x = y = c/2. Allora h al quadrato <= c al quadrato / 4, quindi h <= c/2: la divisione più equilibrata dà l'altezza più alta." },
      { "question": "Cosa succede quando l'altezza eguaglia metà ipotenusa?", "answer": "Il triangolo è un triangolo rettangolo isoscele: cateti uguali, angoli acuti di 45 gradi, e l'altezza che funge anche da mediana all'ipotenusa. Questo caso limite valido dà la massima area possibile, K = c al quadrato / 4." },
      { "question": "Posso calcolare l'area senza conoscere i due cateti?", "answer": "Sì. La base e la sua altezza perpendicolare corrispondente bastano; i cateti non aggiungono nulla sull'area. Inserite l'ipotenusa c e l'altezza h, e K = ch/2 dà l'area direttamente." },
      { "question": "Come si collega la formula basata sull'ipotenusa alla formula dei cateti?", "answer": "Entrambe calcolano la stessa area. Uguagliando ab/2 a ch/2 e moltiplicando per due si ottiene ab = ch, quindi h = ab/c, ed è per questo che calcolare entrambe è una verifica così solida." },
      { "question": "Qual è la relazione tra l'altezza e i due segmenti dell'ipotenusa?", "answer": "L'altezza soddisfa h al quadrato = xy, dove x e y sono i segmenti che taglia dall'ipotenusa, quindi è la loro media geometrica. Viene dalla similitudine dei due triangoli più piccoli, tramite x/h = h/y." },
      { "question": "Ipotenusa e altezza possono determinare i due cateti?", "answer": "Sì, a meno dello scambio. Da a al quadrato + b al quadrato = c al quadrato e ab = ch, i cateti seguono da (c al quadrato +/- c per radice di (c al quadrato - 4h al quadrato)) / 2. Per c = 10 e h = 4,8 questo dà i cateti 6 e 8." },
      { "question": "La calcolatrice funziona con centimetri, metri e piedi?", "answer": "Sì, purché entrambi gli input usino la stessa unità: i metri danno metri quadrati, i centimetri danno centimetri quadrati, i piedi danno piedi quadrati. Convertite prima le unità miste." }
    ]
  }
};
