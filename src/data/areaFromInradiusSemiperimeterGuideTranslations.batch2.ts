// areaFromInradiusSemiperimeterGuideTranslations.batch2.ts: Right Triangle Area From
// Inradius and Semiperimeter Guide (Page 20 of 45) translations for French (fr),
// German (de), and Italian (it).
export const AREA_FROM_INRADIUS_SEMIPERIMETER_TRANSLATIONS_BATCH2 = {
  "fr": {
    "faqs": [
      {
        "question": "Quelle est la formule de l'aire utilisant le rayon inscrit et le demi-périmètre ?",
        "answer": "Multipliez le rayon inscrit r par le demi-périmètre s : K = rs. Par exemple, r = 2 et s = 12 donnent K = 24 unités carrées. La formule vaut pour tout triangle non dégénéré, pas seulement pour les triangles rectangles."
      },
      {
        "question": "Qu'est-ce que le rayon inscrit d'un triangle rectangle ?",
        "answer": "C'est le rayon du cercle inscrit dans le triangle, la distance perpendiculaire entre le centre du cercle inscrit et n'importe quel côté. Dans un triangle 3-4-5, le rayon inscrit vaut 1 ; dans un triangle 6-8-10, il vaut 2."
      },
      {
        "question": "Comment calculer le rayon inscrit d'un triangle rectangle ?",
        "answer": "À partir des trois côtés, utilisez le raccourci r = (a + b - c) / 2, où a et b sont les cathètes et c l'hypoténuse. Pour un triangle 5-12-13, cela donne r = 2."
      },
      {
        "question": "Comment calculer le demi-périmètre ?",
        "answer": "Additionnez les trois côtés et divisez le total par deux : s = (a + b + c) / 2. Pour un triangle 5-12-13, s = 15. Il est toujours plus grand que chaque côté pris séparément."
      },
      {
        "question": "Pourquoi l'aire est-elle égale au rayon inscrit multiplié par le demi-périmètre ?",
        "answer": "Relier le centre du cercle inscrit aux trois sommets divise le triangle en trois triangles plus petits de hauteur commune r et de bases a, b et c. Leurs aires ar/2 + br/2 + cr/2 se factorisent en r(a+b+c)/2, et comme s = (a+b+c)/2, le total vaut rs."
      },
      {
        "question": "La formule fonctionne-t-elle pour les triangles non rectangles ?",
        "answer": "Oui. K = rs est valable pour tout triangle non dégénéré. Seul le raccourci r = (a+b-c)/2 est propre aux triangles rectangles, car il repose sur le carré formé à l'angle droit."
      },
      {
        "question": "Quelle est la différence entre le rayon inscrit et le rayon circonscrit ?",
        "answer": "Le rayon inscrit r est le rayon du cercle intérieur au triangle, tangent aux trois côtés ; le rayon circonscrit R est le rayon du cercle passant par les trois sommets. Pour un triangle rectangle, R = c/2."
      },
      {
        "question": "Peut-on calculer l'aire sans connaître les trois côtés ?",
        "answer": "Oui. Si le rayon inscrit et le demi-périmètre sont déjà connus, K = rs donne l'aire directement en une multiplication, sans aucune longueur de côté."
      },
      {
        "question": "Le demi-périmètre est-il la même chose que la moitié du périmètre ?",
        "answer": "Oui, exactement : s = P/2 = (a+b+c)/2. La distinction compte parce que la formule exige la valeur divisée par deux ; utiliser le périmètre complet double la réponse."
      },
      {
        "question": "Quel est le lien entre le rayon inscrit et les trois côtés ?",
        "answer": "Dans un triangle rectangle, r = (a+b-c)/2, où a et b sont les cathètes et c l'hypoténuse. On a aussi s + r = a + b et s - r = c, donc les côtés se retrouvent à partir de r et s."
      },
      {
        "question": "Quelle est la différence entre la formule de Héron et la formule du rayon inscrit ?",
        "answer": "La formule de Héron, K = sqrt(s(s-a)(s-b)(s-c)), exige les trois côtés ; la formule du rayon inscrit, K = rs, n'exige que r et s. Utilisez Héron quand vous avez les côtés, et K = rs quand r et s sont déjà connus. Les deux donnent la même aire sur des données cohérentes."
      },
      {
        "question": "Comment vérifier l'aire calculée ?",
        "answer": "Vérifiez avec des méthodes indépendantes : la formule des cathètes K = ab/2, le théorème de Pythagore, le raccourci du rayon inscrit, la définition du demi-périmètre et la formule de Héron. Quand plusieurs méthodes s'accordent, les données et les calculs sont justes."
      }
    ],
    "relatedHeading": "Explorer les calculatrices de triangle rectangle associées",
    "relatedItems": [
      "Calculatrice d'aire de triangle rectangle à partir des cathètes",
      "Calculatrice d'aire de triangle rectangle à partir de l'hypoténuse et de la hauteur",
      "Calculatrice d'aire de triangle rectangle à partir d'un angle",
      "Calculatrice d'aire de triangle rectangle à partir de la hauteur",
      "Calculatrice de rayon inscrit de triangle rectangle",
      "Calculatrice de demi-périmètre de triangle rectangle"
    ],
    "relatedIntro": "Des mesures différentes demandent des calculatrices différentes.",
    "faqHeading": "Questions fréquemment posées",
    "tocHeading": "Dans ce guide",
    "tocItems": {
      "sec-intro": "Comment calculer l'aire d'un triangle rectangle avec le rayon inscrit et le demi-périmètre",
      "sec-incircle": "Qu'est-ce qu'un cercle inscrit en géométrie ?",
      "sec-semiperimeter": "Qu'est-ce que le demi-périmètre d'un triangle ?",
      "sec-formula": "Pourquoi l'aire vaut le rayon inscrit fois le demi-périmètre",
      "sec-inradius": "Comment trouver le rayon inscrit d'un triangle rectangle",
      "sec-howto": "Comment utiliser la calculatrice d'aire à partir du rayon inscrit et du demi-périmètre",
      "sec-examples": "Exemples résolus étape par étape",
      "sec-applications": "Applications concrètes",
      "sec-relationship": "Comment le rayon inscrit et le demi-périmètre sont liés aux trois côtés",
      "sec-valid": "Vérifier si vos mesures sont valides",
      "sec-heron": "Comparaison entre la formule du rayon inscrit et la formule de Héron",
      "sec-legs": "Pourquoi la formule du rayon inscrit s'accorde avec la formule des cathètes",
      "sec-mistakes": "Erreurs fréquentes",
      "sec-verify": "Comment vérifier votre aire",
      "sec-units": "Unités de mesure et arrondis",
      "sec-related": "Explorer les calculatrices de triangle rectangle associées",
      "sec-faq": "Questions fréquemment posées",
      "sec-conclusion": "Conclusion"
    },
    "sections": {
      "sec-intro": {
        "h2": "Comment calculer l'aire d'un triangle rectangle avec le rayon inscrit et le demi-périmètre",
        "blocks": [
          { "kind": "p", "text": "Un triangle rectangle a un rayon inscrit de [[r=2]] et un demi-périmètre de [[s=12]]. Appliquez [[K=r\\times s]] : [[K=2\\times12]], [[[\\boxed{K=24\\text{ square units}}]]] Le triangle enferme 24 unités carrées de surface plane. Voilà la méthode complète que la calculatrice automatise : deux mesures, une multiplication, une réponse." },
          { "kind": "p", "text": "Le rayon inscrit est le rayon du cercle qui se loge parfaitement à l'intérieur du triangle en touchant ses trois côtés. Le demi-périmètre est la moitié de la distance autour du triangle. Ensemble, ils suffisent à déterminer l'aire parce que le rayon du cercle joue le rôle de hauteur de trois triangles plus petits dont les bases sont les côtés du triangle. Cette identité vaut pour tout triangle non dégénéré, pas seulement pour les triangles rectangles ; ce qui est propre aux triangles rectangles, c'est la façon rapide de calculer le rayon inscrit lui-même à partir des trois côtés. Elle est surtout utile quand le cercle inscrit a été mesuré directement, ou quand le rayon inscrit et le demi-périmètre sont déjà connus grâce à des travaux antérieurs." }
        ]
      },
      "sec-incircle": {
        "h2": "Qu'est-ce qu'un cercle inscrit en géométrie ?",
        "blocks": [
          { "kind": "p", "text": "La notation utilisée partout est la suivante : [[A]], [[B]] et [[C]] sont les sommets et les angles avec [[C=90^\\circ]] ; [[a]] et [[b]] sont les deux cathètes ; [[c]] est l'hypoténuse opposée à [[C]] ; [[r]] est le rayon inscrit ; [[I]] est le centre du cercle inscrit ; [[s]] est le demi-périmètre ; [[P]] est le périmètre ; et [[K]] est l'aire, utilisée partout pour ne jamais la confondre avec l'angle [[A]]." },
          { "kind": "h3", "text": "Définition d'un cercle inscrit" },
          { "kind": "p", "text": "Un cercle inscrit est le plus grand cercle qui tient à l'intérieur d'un triangle tout en touchant ses trois côtés. Il reste entièrement à l'intérieur parce que chaque côté du triangle est une tangente au cercle : le cercle atteint le côté en exactement un point et reste du côté intérieur. Un cercle qui se trouve seulement près d'un côté ne compte pas ; le cercle inscrit doit être tangent à chaque côté, le toucher en un seul point puis repartir vers l'intérieur. Tout triangle non dégénéré possède exactement un tel cercle, avec un centre unique, parce que les trois droites ne sont pas parallèles et que leur géométrie fixe le cercle complètement." },
          { "kind": "h3", "text": "Qu'est-ce que le rayon inscrit ?" },
          { "kind": "p", "text": "Le rayon inscrit est la distance entre le centre du cercle inscrit et n'importe quel côté du triangle. Si [[I]] est le centre du cercle inscrit et [[D]] le point où le cercle inscrit touche un côté, alors [[r=ID]]. Le rayon du cercle est la plus courte distance entre son centre et le côté tangent, et cette plus courte distance est la même pour les trois côtés, ce qui explique que le cercle soit tangent aux trois côtés plutôt que simplement proche d'eux." },
          { "kind": "h3", "text": "Pourquoi le rayon inscrit est-il perpendiculaire à chaque côté ?" },
          { "kind": "p", "text": "Une propriété de base des cercles dit qu'en tout point où une droite touche un cercle, le rayon mené à ce point rencontre la droite à angle droit. Donc si [[D]] est le point de tangence sur le côté [[AB]], alors [[ID\\perp AB]]. Il en va de même pour les deux autres côtés. Cette perpendicularité n'est pas décorative : c'est elle qui permet à chaque rayon de jouer le rôle de hauteur d'un triangle plus petit quand on établit la formule d'aire, puisque la hauteur d'un triangle doit être perpendiculaire à sa base." },
          { "kind": "h3", "text": "Comprendre le centre du cercle inscrit" },
          { "kind": "p", "text": "Le centre du cercle inscrit [[I]] est le point où se rencontrent les trois bissectrices intérieures du triangle. Chaque bissectrice est l'ensemble des points à égale distance des deux côtés formant cet angle, donc un point situé sur les trois bissectrices est à égale distance des trois côtés, et il se trouve forcément à l'intérieur du triangle. Cette distance commune est exactement le rayon inscrit, et le cercle de centre [[I]] et de rayon [[r]] touche chaque côté une fois : c'est le cercle inscrit." },
          { "kind": "h3", "text": "Le rayon inscrit est-il le même que le rayon circonscrit ?" },
          { "kind": "p", "text": "Non. Le rayon inscrit [[r]] est le rayon du cercle intérieur au triangle, tandis que le rayon circonscrit [[R]] est le rayon du cercle qui passe par les trois sommets, le cercle circonscrit. Pour un triangle rectangle, le centre du cercle circonscrit est le milieu de l'hypoténuse, donc [[[\\boxed{R=\\frac{c}{2}}]]] Les deux rayons décrivent des cercles complètement différents : l'un est inscrit dans le triangle, l'autre est tracé autour. Les confondre est l'une des erreurs les plus fréquentes sur ce sujet, alors gardez-les séparés : [[r]] pour l'intérieur, [[R]] pour l'extérieur." }
        ],
        "imgAlt": "Triangle ABC avec cercle inscrit, centre I, rayon r, points de tangence et cercle circonscrit",
        "figcaption": "Le triangle ABC et son cercle inscrit : centre I, rayon inscrit r = ID avec ID perpendiculaire à chaque côté, plus le cercle circonscrit pour comparer."
      },
      "sec-semiperimeter": {
        "h2": "Qu'est-ce que le demi-périmètre d'un triangle ?",
        "blocks": [
          { "kind": "h3", "text": "Définition du demi-périmètre" },
          { "kind": "p", "text": "Le demi-périmètre est la moitié du périmètre total d'un triangle : [[[\\boxed{s=\\frac{a+b+c}{2}}]]], où [[a]] et [[b]] sont les cathètes et [[c]] l'hypoténuse. C'est une longueur, comme n'importe quel côté, et il mérite sa place dans la formule d'aire parce qu'il combine les trois côtés en un seul nombre." },
          { "kind": "h3", "text": "Différence entre périmètre et demi-périmètre" },
          { "kind": "p", "text": "Le périmètre est la distance complète autour du triangle, [[P=a+b+c]], tandis que le demi-périmètre en est la moitié, [[s=\\frac{P}{2}]]. Pour un triangle 3-4-5 : [[P=3+4+5=12]] et [[s=\\frac{12}{2}=6]]. Le demi-périmètre n'est pas la longueur du contour ; c'est sa moitié, et introduire le périmètre complet dans [[K=rs]] doublerait la vraie aire." },
          { "kind": "h3", "text": "Pourquoi le demi-périmètre figure-t-il dans la formule d'aire ?" },
          { "kind": "p", "text": "Relier le centre du cercle inscrit aux trois sommets divise le triangle en trois triangles plus petits, chacun de hauteur perpendiculaire [[r]]. Leurs bases sont [[a]], [[b]] et [[c]], donc leur aire combinée vaut [[K=\\frac12r(a+b+c)]]. Comme [[s=\\frac{a+b+c}{2}]], le demi-périmètre est déjà intégré dans [[s]], ce qui donne [[K=rs]]. La section suivante établit cela en détail." },
          { "kind": "h3", "text": "Le demi-périmètre peut-il être plus petit qu'un côté ?" },
          { "kind": "p", "text": "Non. L'inégalité triangulaire dit que pour tout triangle, [[a+b>c]], donc [[s=\\frac{a+b+c}{2}>c]]. Le même raisonnement s'applique aux deux autres côtés : [[s>a]] et [[s>b]]. Le demi-périmètre est toujours plus grand que chaque côté pris séparément. C'est un contrôle rapide des données : si un demi-périmètre annoncé est plus petit qu'un côté, les nombres ne peuvent pas décrire un vrai triangle." }
        ]
      },
      "sec-formula": {
        "h2": "Pourquoi l'aire d'un triangle vaut-elle le rayon inscrit fois le demi-périmètre ?",
        "blocks": [
          { "kind": "p", "text": "Partez de la règle standard de l'aire d'un triangle : [[K=\\frac12\\times\\text{base}\\times\\text{height}]]. Tracer des segments du centre du cercle inscrit [[I]] vers les trois sommets divise le triangle d'origine en trois triangles plus petits. Chaque petit triangle a une base égale à un côté du triangle d'origine et une hauteur perpendiculaire égale au rayon inscrit [[r]], parce que le rayon rencontre chaque côté à angle droit. Cela fonctionne pour tout triangle non dégénéré ; pour cette calculatrice le triangle est rectangle, mais l'identité d'aire elle-même est pleinement générale." },
          { "kind": "h3", "text": "Aire du premier petit triangle" },
          { "kind": "p", "text": "Le petit triangle dressé sur le côté [[a]] a pour base [[a]] et pour hauteur [[r]] : [[[\\boxed{K_1=\\frac{ar}{2}}]]]" },
          { "kind": "h3", "text": "Aire du deuxième petit triangle" },
          { "kind": "p", "text": "Le petit triangle dressé sur le côté [[b]] a pour base [[b]] et pour hauteur [[r]] : [[[\\boxed{K_2=\\frac{br}{2}}]]]" },
          { "kind": "h3", "text": "Aire du troisième petit triangle" },
          { "kind": "p", "text": "Le petit triangle dressé sur le côté [[c]] a pour base [[c]] et pour hauteur [[r]] : [[[\\boxed{K_3=\\frac{cr}{2}}]]]" },
          { "kind": "h3", "text": "Additionnez les trois aires" },
          { "kind": "p", "text": "Les trois petits triangles pavent l'original sans chevauchement, donc [[K=K_1+K_2+K_3]]. En substituant : [[K=\\frac{ar}{2}+\\frac{br}{2}+\\frac{cr}{2}]]. Factorisez [[\\frac{r}{2}]] : [[K=\\frac{r(a+b+c)}{2}]]. Rappelez-vous [[s=\\frac{a+b+c}{2}]], donc [[[\\boxed{K=r\\times s}]]] Chaque transition est justifiée : le pavage est exact, la hauteur [[r]] est commune, et le demi-périmètre absorbe la division par deux." },
          { "kind": "h3", "text": "Pourquoi cette formule n'exige-t-elle pas une autre division par deux ?" },
          { "kind": "p", "text": "Parce que le facteur un demi est déjà intégré dans le demi-périmètre. Les trois moitiés se combinent en [[\\frac{r(a+b+c)}{2}]], et [[s]] est exactement la moitié du périmètre, donc diviser par deux une seconde fois réduirait l'expression correcte au quart. Calculez [[r\\times s]] et arrêtez-vous là ; diviser encore par deux est une erreur, pas une correction." }
        ],
        "imgAlt": "Cercle inscrit divisant le triangle ABC en trois petits triangles de hauteur r et de bases a, b, c",
        "figcaption": "Trois petits triangles de hauteur commune r et de bases a, b, c : leurs aires ar/2 + br/2 + cr/2 s'additionnent en rs."
      },
      "sec-inradius": {
        "h2": "Comment calculer le rayon inscrit à partir des trois côtés",
        "blocks": [
          { "kind": "p", "text": "Quand les trois côtés sont connus, le rayon inscrit d'un triangle rectangle suit un raccourci qui évite de tracer le cercle inscrit : [[[\\boxed{r=\\frac{a+b-c}{2}}]]], où [[a]] et [[b]] sont les cathètes perpendiculaires et [[c]] l'hypoténuse. C'est l'un des faits les plus pratiques de la géométrie du triangle rectangle." },
          { "kind": "h3", "text": "Établir la formule du rayon inscrit du triangle rectangle" },
          { "kind": "p", "text": "La démonstration utilise le théorème des segments de tangentes égales : depuis un point extérieur commun, les deux segments de tangentes menés à un cercle ont des longueurs égales. Notons [[x]] la longueur des tangentes issues du sommet [[A]], [[y]] celle des tangentes issues du sommet [[B]], et [[z]] celle des tangentes issues du sommet [[C]]. À l'angle droit [[C]], les deux tangentes au cercle inscrit suivent les cathètes perpendiculaires et ont chacune pour longueur [[r]], formant un petit carré avec les deux rayons, donc [[z=r]]. Les côtés valent alors [[a=y+r]], [[b=x+r]] et [[c=x+y]]. Soustrayez : [[a+b-c=(y+r)+(x+r)-(x+y)]], donc [[a+b-c=2r]], ce qui donne [[[\\boxed{r=\\frac{a+b-c}{2}}]]] Le carré à l'angle droit explique pourquoi ce raccourci appartient aux seuls triangles rectangles." },
          { "kind": "h3", "text": "Exemple avec un triangle 3-4-5" },
          { "kind": "p", "text": "Avec [[a=3]], [[b=4]], [[c=5]] : [[r=\\frac{3+4-5}{2}]], [[[\\boxed{r=1}]]] Le rayon du cercle inscrit vaut exactement 1, sans aucune construction." },
          { "kind": "h3", "text": "Exemple avec un triangle 5-12-13" },
          { "kind": "p", "text": "Avec [[a=5]], [[b=12]], [[c=13]] : [[r=\\frac{5+12-13}{2}]], [[[\\boxed{r=2}]]] Là encore, le rayon inscrit découle directement des longueurs des côtés." },
          { "kind": "h3", "text": "Calculer le demi-périmètre en même temps" },
          { "kind": "p", "text": "Avec les mêmes trois côtés, calculez [[s=\\frac{a+b+c}{2}]] en même temps que [[r]]. Pour le triangle 5-12-13 : [[s=\\frac{5+12+13}{2}=15]], puis [[K=rs=2\\times15=30]]. Un seul passage sur les trois côtés fournit les deux entrées de la calculatrice ainsi que l'aire elle-même." },
          { "kind": "h3", "text": "Quand utiliser ce raccourci ?" },
          { "kind": "p", "text": "Utilisez-le chaque fois que les trois côtés sont connus mais que le cercle inscrit n'a été ni mesuré ni tracé : les exercices de manuels, les dimensions de construction et les données d'arpentage donnent généralement des longueurs de côtés, pas un rayon inscrit. Le raccourci les convertit en [[r]] en une ligne. Quand le rayon inscrit est la quantité mesurée, saisissez-le directement et sautez la conversion." }
        ],
        "imgAlt": "Triangle 3-4-5 montrant les segments de tangentes égaux et le raccourci r = (a+b-c)/2 = 1",
        "figcaption": "Segments de tangentes sur un triangle 3-4-5 : des longueurs égales depuis chaque sommet donnent r = (3 + 4 - 5)/2 = 1."
      },
      "sec-howto": {
        "h2": "Comment utiliser la calculatrice d'aire d'un triangle rectangle à partir du rayon inscrit et du demi-périmètre",
        "blocks": [
          { "kind": "p", "text": "La calculatrice n'a besoin que de deux entrées exactement. Le parcours ci-dessous suit l'ordre de l'écran, des mesures connues jusqu'au résultat vérifié." }
        ],
        "steps": [
          "<strong>Identifiez le rayon inscrit r.</strong> Le rayon du cercle inscrit, la distance perpendiculaire entre le centre du cercle inscrit et n'importe quel côté.",
          "<strong>Identifiez le demi-périmètre s.</strong> La moitié du périmètre total du triangle.",
          "<strong>Si les trois côtés sont connus, calculez r avec [[r=\\frac{a+b-c}{2}]].</strong> Ici [[a]] et [[b]] sont les cathètes et [[c]] l'hypoténuse.",
          "<strong>Calculez s avec [[s=\\frac{a+b+c}{2}]].</strong>",
          "<strong>Saisissez le rayon inscrit dans le premier champ.</strong>",
          "<strong>Saisissez le demi-périmètre dans le deuxième champ.</strong>",
          "<strong>Sélectionnez des unités de longueur compatibles.</strong> Les deux mesures doivent utiliser la même unité.",
          "<strong>Vérifiez que les deux valeurs sont positives.</strong> Des longueurs nulles ou négatives ne décrivent aucun triangle.",
          "<strong>Cliquez sur « Calculate Area ».</strong>",
          "<strong>Examinez le résultat.</strong> L'aire apparaît dans les unités carrées correspondant aux entrées.",
          "<strong>Confirmez que la réponse est exprimée en unités carrées.</strong> Des mètres donnent des mètres carrés ; des centimètres donnent des centimètres carrés.",
          "<strong>Relisez la solution mathématique.</strong> Elle montre la substitution et le calcul.",
          "<strong>Utilisez « Reset » pour commencer un nouveau calcul.</strong> Cela efface les deux champs pour que le calcul suivant reparte de zéro."
        ],
        "closingParagraphs": [
          "La calculatrice ne demande pas les trois longueurs de côté : le rayon inscrit et le demi-périmètre contiennent déjà tout ce dont la formule [[K=rs]] a besoin."
        ]
      },
      "sec-examples": {
        "h2": "Exemples d'aire calculée étape par étape avec le rayon inscrit et le demi-périmètre",
        "blocks": [
          { "kind": "p", "text": "Quatre exemples résolus construisent la méthode à partir du familier vers le haut. Chacun calcule le demi-périmètre et le rayon inscrit à partir des trois côtés, applique [[K=rs]] en montrant chaque substitution, et vérifie avec la formule des cathètes." },
          { "kind": "h3", "text": "Exemple 1 : triangle rectangle 3-4-5" },
          { "kind": "p", "text": "Avec [[a=3]], [[b=4]], [[c=5]]. Étape 1 : le demi-périmètre, [[s=\\frac{3+4+5}{2}=6]]. Étape 2 : le rayon inscrit, [[r=\\frac{3+4-5}{2}=1]]. Étape 3 : appliquez la formule, [[K=1\\times6]], [[[\\boxed{K=6\\text{ square units}}]]] Vérification : [[K=\\frac{3\\times4}{2}=6]]." },
          { "kind": "h3", "text": "Exemple 2 : triangle rectangle 6-8-10" },
          { "kind": "p", "text": "Avec [[a=6]], [[b=8]], [[c=10]]. Alors [[s=\\frac{6+8+10}{2}=12]], [[r=\\frac{6+8-10}{2}=2]], et [[K=2\\times12]], [[[\\boxed{K=24\\text{ square units}}]]] Vérification : [[K=\\frac{6\\times8}{2}=24]]." },
          { "kind": "h3", "text": "Exemple 3 : triangle rectangle 5-12-13" },
          { "kind": "p", "text": "Avec [[a=5]], [[b=12]], [[c=13]]. Alors [[s=\\frac{5+12+13}{2}=15]], [[r=\\frac{5+12-13}{2}=2]], et [[K=2\\times15]], [[[\\boxed{K=30\\text{ square units}}]]] Vérification : [[K=\\frac{5\\times12}{2}=30]]." },
          { "kind": "h3", "text": "Exemple 4 : triangle rectangle 8-15-17" },
          { "kind": "p", "text": "Avec [[a=8]], [[b=15]], [[c=17]]. Alors [[s=\\frac{8+15+17}{2}=20]], [[r=\\frac{8+15-17}{2}=3]], et [[K=3\\times20]], [[[\\boxed{K=60\\text{ square units}}]]] Vérification : [[K=\\frac{8\\times15}{2}=60]]." },
          { "kind": "h3", "text": "Comparaison des exemples de base" }
        ],
        "table": {
          "headers": ["Triangle", "Demi-périmètre s", "Rayon inscrit r", "Aire K = rs"],
          "rows": [
            ["3-4-5", "6", "1", "6"],
            ["6-8-10", "12", "2", "24"],
            ["5-12-13", "15", "2", "30"],
            ["8-15-17", "20", "3", "60"]
          ]
        }
      },
      "sec-applications": {
        "h2": "Applications concrètes de l'aire d'un triangle rectangle avec le rayon inscrit et le demi-périmètre",
        "blocks": [
          { "kind": "p", "text": "Douze situations résolues montrent la formule à différentes échelles et dans différentes unités. Chacune nomme l'objet triangulaire, donne les trois mesures de côté, calcule le rayon inscrit et le demi-périmètre, applique la formule principale étape par étape, et énonce l'hypothèse qui la sous-tend. Chaque exemple est un panneau, une section, un profil triangulaire rectangle, ou un modèle géométrique simplifié ; quand l'objet réel est courbe ou irrégulier, le calcul ne couvre que le triangle modélisé." },
          { "kind": "h3", "text": "Exemple 1 : fenêtre en verre triangulaire" },
          { "kind": "p", "text": "Une fenêtre en verre en triangle rectangle a [[a=3\\text{ m}]], [[b=4\\text{ m}]], [[c=5\\text{ m}]]. Rayon inscrit : [[r=\\frac{3+4-5}{2}=1\\text{ m}]]. Demi-périmètre : [[s=\\frac{3+4+5}{2}=6\\text{ m}]]. Aire : [[K=1\\times6]], [[[\\boxed{K=6\\text{ m}^2}]]] C'est l'aire de verre plane avant de tenir compte des dimensions du cadre." },
          { "kind": "h3", "text": "Exemple 2 : équerre de support en acier" },
          { "kind": "p", "text": "Une plaque triangulaire de support en acier a [[a=5\\text{ cm}]], [[b=12\\text{ cm}]], [[c=13\\text{ cm}]]. Alors [[r=2\\text{ cm}]], [[s=15\\text{ cm}]], [[[\\boxed{K=30\\text{ cm}^2}]]] L'aire seule ne détermine pas la capacité de charge de la plaque." },
          { "kind": "h3", "text": "Exemple 3 : profil latéral de rampe triangulaire" },
          { "kind": "p", "text": "Un profil de rampe simplifié en triangle rectangle a [[a=6\\text{ m}]], [[b=8\\text{ m}]], [[c=10\\text{ m}]]. Alors [[r=2\\text{ m}]], [[s=12\\text{ m}]], [[[\\boxed{K=24\\text{ m}^2}]]] Cela représente le profil latéral, pas la surface de marche inclinée." },
          { "kind": "h3", "text": "Exemple 4 : panneau triangulaire de support de toit" },
          { "kind": "p", "text": "Un panneau triangulaire rectangle de support de toit a [[a=8\\text{ ft}]], [[b=15\\text{ ft}]], [[c=17\\text{ ft}]]. Alors [[r=3\\text{ ft}]], [[s=20\\text{ ft}]], [[[\\boxed{K=60\\text{ ft}^2}]]] Le résultat est l'aire estimée du panneau triangulaire plan." },
          { "kind": "h3", "text": "Exemple 5 : section de jardin arpentée" },
          { "kind": "p", "text": "Une section de jardin en triangle rectangle a [[a=7\\text{ m}]], [[b=24\\text{ m}]], [[c=25\\text{ m}]]. Alors [[r=3\\text{ m}]], [[s=28\\text{ m}]], [[[\\boxed{K=84\\text{ m}^2}]]] La formule donne l'aire de la section triangulaire directement à partir de ses trois mesures de contour." },
          { "kind": "h3", "text": "Exemple 6 : voile en tissu triangulaire" },
          { "kind": "p", "text": "Un panneau en tissu en triangle rectangle a [[a=9\\text{ ft}]], [[b=12\\text{ ft}]], [[c=15\\text{ ft}]]. Alors [[r=3\\text{ ft}]], [[s=18\\text{ ft}]], [[[\\boxed{K=54\\text{ ft}^2}]]] Les coutures et les marges de tissu sont exclues de ce chiffre de panneau plan." },
          { "kind": "h3", "text": "Exemple 7 : grande section de terrain triangulaire" },
          { "kind": "p", "text": "Une section de terrain arpentée modélisée comme un triangle rectangle a [[a=9\\text{ m}]], [[b=40\\text{ m}]], [[c=41\\text{ m}]]. Alors [[r=4\\text{ m}]], [[s=45\\text{ m}]], [[[\\boxed{K=180\\text{ m}^2}]]] Le modèle triangulaire rectangle simplifié suppose des limites droites sur un sol plat." },
          { "kind": "h3", "text": "Exemple 8 : gabarit de découpe en contreplaqué" },
          { "kind": "p", "text": "Un gabarit triangulaire en contreplaqué a [[a=12\\text{ cm}]], [[b=16\\text{ cm}]], [[c=20\\text{ cm}]]. Alors [[r=4\\text{ cm}]], [[s=24\\text{ cm}]], [[[\\boxed{K=96\\text{ cm}^2}]]] L'aire aide à estimer les besoins en matériau avant les chutes de découpe." },
          { "kind": "h3", "text": "Exemple 9 : grand panneau de signalisation triangulaire" },
          { "kind": "p", "text": "Un panneau de signalisation en triangle rectangle a [[a=20\\text{ m}]], [[b=21\\text{ m}]], [[c=29\\text{ m}]]. Alors [[r=6\\text{ m}]], [[s=35\\text{ m}]], [[[\\boxed{K=210\\text{ m}^2}]]] Le résultat représente la surface triangulaire plane face au spectateur." },
          { "kind": "h3", "text": "Exemple 10 : support triangulaire de store" },
          { "kind": "p", "text": "Une section de support de store en triangle rectangle a [[a=15\\text{ ft}]], [[b=20\\text{ ft}]], [[c=25\\text{ ft}]]. Alors [[r=5\\text{ ft}]], [[s=30\\text{ ft}]], [[[\\boxed{K=150\\text{ ft}^2}]]] C'est l'aire calculée de la section triangulaire modélisée." },
          { "kind": "h3", "text": "Exemple 11 : panneau de support industriel" },
          { "kind": "p", "text": "Un panneau de support industriel en triangle rectangle a [[a=11\\text{ m}]], [[b=60\\text{ m}]], [[c=61\\text{ m}]]. Alors [[r=5\\text{ m}]], [[s=66\\text{ m}]], [[[\\boxed{K=330\\text{ m}^2}]]] Ce calcul géométrique décrit l'aire plane du panneau, pas ses performances structurelles." },
          { "kind": "h3", "text": "Exemple 12 : grande section triangulaire d'extrémité de toit" },
          { "kind": "p", "text": "Une section d'extrémité de toit en triangle rectangle a [[a=13\\text{ ft}]], [[b=84\\text{ ft}]], [[c=85\\text{ ft}]]. Alors [[r=6\\text{ ft}]], [[s=91\\text{ ft}]], [[[\\boxed{K=546\\text{ ft}^2}]]] L'aire calculée aide à estimer la couverture triangulaire plane." },
          { "kind": "h3", "text": "Comparaison des exemples pratiques" }
        ],
        "table": {
          "headers": ["Application", "Côté a", "Côté b", "Hypoténuse c", "Rayon inscrit r", "Demi-périmètre s", "Aire"],
          "rows": [
            ["Fenêtre en verre", "3", "4", "5", "1", "6", "6 m²"],
            ["Équerre en acier", "5", "12", "13", "2", "15", "30 cm²"],
            ["Profil de rampe", "6", "8", "10", "2", "12", "24 m²"],
            ["Panneau de toit", "8", "15", "17", "3", "20", "60 ft²"],
            ["Section de jardin", "7", "24", "25", "3", "28", "84 m²"],
            ["Voile en tissu", "9", "12", "15", "3", "18", "54 ft²"],
            ["Section de terrain", "9", "40", "41", "4", "45", "180 m²"],
            ["Gabarit en contreplaqué", "12", "16", "20", "4", "24", "96 cm²"],
            ["Panneau de signalisation", "20", "21", "29", "6", "35", "210 m²"],
            ["Support de store", "15", "20", "25", "5", "30", "150 ft²"],
            ["Panneau industriel", "11", "60", "61", "5", "66", "330 m²"],
            ["Extrémité de toit", "13", "84", "85", "6", "91", "546 ft²"]
          ]
        }
      },
      "sec-relationship": {
        "h2": "Comment le rayon inscrit et le demi-périmètre sont-ils liés aux trois côtés ?",
        "blocks": [
          { "kind": "p", "text": "Dans un triangle rectangle, le rayon inscrit et le demi-périmètre ne sont pas indépendants des côtés ; ils sont construits à partir d'eux. En partant de [[r=\\frac{a+b-c}{2}]] et [[s=\\frac{a+b+c}{2}]], additionnez et soustrayez les deux expressions. L'addition donne [[[\\boxed{s+r=a+b}]]], et la soustraction donne [[[\\boxed{s-r=c}]]] Ces deux identités sont propres aux triangles rectangles sous la notation donnée, et elles transforment les deux entrées de la calculatrice en une quantité surprenante d'informations sur le triangle lui-même." },
          { "kind": "h3", "text": "Retrouver l'hypoténuse" },
          { "kind": "p", "text": "D'après [[s-r=c]], l'hypoténuse se retrouve quand [[r]] et [[s]] sont connus. Pour [[r=2]] et [[s=12]] : [[c=12-2]], [[[\\boxed{c=10}]]] Deux entrées révèlent ainsi le côté le plus long sans autre mesure." },
          { "kind": "h3", "text": "Retrouver la somme des deux cathètes" },
          { "kind": "p", "text": "D'après [[a+b=s+r]], la somme des cathètes suit directement. Pour [[r=2]] et [[s=12]] : [[a+b=14]]. La somme seule ne permet pas d'identifier chaque cathète séparément ; les longueurs individuelles exigent une information de plus." },
          { "kind": "h3", "text": "Retrouver le produit des deux cathètes" },
          { "kind": "p", "text": "Comme [[K=\\frac{ab}{2}]] et [[K=rs]], il suit que [[[\\boxed{ab=2rs}]]] Pour [[r=2]] et [[s=12]] : [[ab=48]]. Avec [[a+b=14]] et [[ab=48]], les deux cathètes sont 6 et 8 : [[6+8=14]] et [[6\\times8=48]]. Les deux cathètes peuvent être interchangées sans changer l'aire du triangle." },
          { "kind": "h3", "text": "Retrouver les deux longueurs de cathètes" },
          { "kind": "p", "text": "La somme et le produit font de [[a]] et [[b]] les deux racines de [[t^2-(s+r)t+2rs=0]], ce qui donne [[[\\boxed{a,b=\\frac{(s+r)\\pm\\sqrt{(s+r)^2-8rs}}{2}}]]] Les deux signes correspondent aux deux attributions possibles des cathètes. Avec [[r=2]] et [[s=12]] : [[a,b=\\frac{14\\pm\\sqrt{196-192}}{2}]], donc [[a,b=\\frac{14\\pm2}{2}]], cathètes 6 et 8. C'est une déduction mathématique avancée, pas une fonction supplémentaire de la calculatrice." }
        ]
      },
      "sec-valid": {
        "h2": "Comment vérifier si le rayon inscrit et le demi-périmètre forment un triangle rectangle valide",
        "blocks": [
          { "kind": "p", "text": "La calculatrice multiplie deux entrées, mais toutes les paires positives de longueurs ne décrivent pas un triangle rectangle. Les contrôles ci-dessous séparent l'arithmétique de la géométrie." },
          { "kind": "h3", "text": "Conditions d'entrée de base" },
          { "kind": "p", "text": "Les entrées doivent satisfaire [[r>0]] et [[s>0]]. Pour un triangle rectangle, [[s>r]] est aussi exigé, parce que [[c=s-r]] et que l'hypoténuse doit être positive. Ces trois conditions sont nécessaires mais pas suffisantes." },
          { "kind": "h3", "text": "Un contrôle avancé de cohérence du triangle rectangle" },
          { "kind": "p", "text": "D'après [[a+b=s+r]] et [[ab=2rs]], les deux cathètes sont réelles exactement quand le discriminant [[\\Delta=(s+r)^2-8rs]] est non négatif. Simplifié : [[[\\boxed{\\Delta=s^2-6rs+r^2}]]] Pour des longueurs de cathètes réelles, [[\\Delta\\geq0]]. Comme [[s]] doit dépasser [[r]], la condition équivalente pour un triangle rectangle est [[[\\boxed{\\frac{s}{r}\\geq3+2\\sqrt2}]]], ou [[[\\boxed{\\frac{r}{s}\\leq3-2\\sqrt2}]]] L'égalité se produit pour un triangle rectangle isocèle, l'ajustement le plus serré possible. C'est un test mathématique avancé de compatibilité, clairement séparé des contrôles de base ci-dessus." },
          { "kind": "h3", "text": "Exemple valide" },
          { "kind": "p", "text": "Avec [[r=2]] et [[s=12]], le rapport vaut [[\\frac{s}{r}=6]]. Comme [[6>3+2\\sqrt2]] (environ 5.83), les valeurs peuvent décrire un triangle rectangle valide, et les côtés correspondants sont 6, 8 et 10." },
          { "kind": "h3", "text": "Exemple incompatible" },
          { "kind": "p", "text": "Avec [[r=2]] et [[s=10]], le rapport vaut [[\\frac{s}{r}=5]], sous le seuil requis d'environ 5.83. Cette paire ne peut pas décrire un triangle rectangle, même si multiplier les entrées produit un résultat numérique. Calculer [[rs]] et confirmer que les mesures décrivent un triangle rectangle sont deux tâches différentes. Ce guide ne prétend pas que la calculatrice effectue ce contrôle automatiquement." }
        ]
      },
      "sec-heron": {
        "h2": "Comment la formule du rayon inscrit se compare-t-elle à la formule de Héron ?",
        "blocks": [
          { "kind": "p", "text": "La formule de Héron calcule l'aire à partir des trois côtés : [[[\\boxed{K=\\sqrt{s(s-a)(s-b)(s-c)}}]]] Elle utilise les trois longueurs de côté et le demi-périmètre, elle fonctionne pour tout triangle non dégénéré, et elle n'a pas besoin du rayon inscrit comme entrée séparée. Comparez-la avec [[[\\boxed{K=rs}]]] Les deux sont proches parentes : le demi-périmètre [[s]] figure dans les deux, et prouver qu'elles s'accordent est l'une des façons les plus nettes de voir que [[K=rs]] est correcte." },
          { "kind": "h3", "text": "Quand la formule du rayon inscrit est-elle plus facile ?" },
          { "kind": "p", "text": "[[K=rs]] est particulièrement commode quand le rayon inscrit et le demi-périmètre sont déjà connus : une seule multiplication, pas de racines carrées, pas de factorisation de différences de côtés. Quand un cercle inscrit a été mesuré, ou quand des étapes antérieures ont déjà produit [[r]] et [[s]], c'est le chemin le plus court vers l'aire." },
          { "kind": "h3", "text": "Quand la formule de Héron est-elle plus utile ?" },
          { "kind": "p", "text": "La formule de Héron est le meilleur choix quand les trois longueurs de côté sont connues mais que le rayon inscrit n'a pas été calculé. Elle atteint l'aire directement depuis [[a]], [[b]] et [[c]] sans le détour par [[r]]. Aucune des deux formules n'est universellement plus précise ; elles sont exactes sur des entrées cohérentes, et elles ne divergent que quand les entrées sont incohérentes." },
          { "kind": "h3", "text": "Vérifiez les deux formules avec un triangle 3-4-5" },
          { "kind": "p", "text": "Avec [[a=3]], [[b=4]], [[c=5]], avec [[s=6]] et [[r=1]]. Avec le rayon inscrit : [[K=1\\times6=6]]. Avec la formule de Héron : [[K=\\sqrt{6(6-3)(6-4)(6-5)}]], donc [[K=\\sqrt{6\\times3\\times2\\times1}]], [[[\\boxed{K=6}]]] Les résultats s'accordent parce que les deux formules mesurent la même région ; ce sont deux expressions d'une seule aire, et leur accord est un signe fort que le calcul est juste." }
        ]
      },
      "sec-legs": {
        "h2": "Pourquoi la formule du rayon inscrit donne-t-elle la même aire que la formule des cathètes ?",
        "blocks": [
          { "kind": "p", "text": "Deux formules revendiquent la même aire : [[K=\\frac{ab}{2}]] et [[K=rs]]. Écrire [[r]] et [[s]] en fonction des côtés donne [[rs=\\frac{a+b-c}{2}\\times\\frac{a+b+c}{2}]], donc [[rs=\\frac{(a+b-c)(a+b+c)}{4}]]. Le numérateur est une différence de carrés : [[rs=\\frac{(a+b)^2-c^2}{4}]]. Appliquez le théorème de Pythagore [[c^2=a^2+b^2]] : [[rs=\\frac{a^2+2ab+b^2-a^2-b^2}{4}]], donc [[[\\boxed{rs=\\frac{ab}{2}}]]] Les deux formules sont identiques sur tout triangle rectangle ; elles ne peuvent pas diverger sur des entrées cohérentes." },
          { "kind": "p", "text": "Vérifiez avec un triangle 3-4-5 : [[r=1]], [[s=6]], [[rs=6]], et [[\\frac{ab}{2}=\\frac{3\\times4}{2}=6]]. Avec un triangle 6-8-10 : [[r=2]], [[s=12]], [[rs=24]], et [[\\frac{ab}{2}=\\frac{6\\times8}{2}=24]]. La familière formule des cathètes et la formule du rayon inscrit sont la même quantité sous des habits différents." }
        ]
      },
      "sec-mistakes": {
        "h2": "Erreurs fréquentes lors du calcul de l'aire à partir du rayon inscrit et du demi-périmètre",
        "blocks": [
          { "kind": "p", "text": "La plupart des mauvaises réponses viennent d'entrées mal étiquetées plutôt que d'un mauvais calcul. Les quinze erreurs ci-dessous couvrent presque chacune d'elles." },
          { "kind": "h3", "text": "1. Confondre le rayon inscrit avec le rayon circonscrit" },
          { "kind": "p", "text": "Le rayon inscrit est le cercle intérieur ; le rayon circonscrit est le cercle autour. Dans un triangle 6-8-10, [[r=2]] mais [[R=\\frac{c}{2}=5]]. Utiliser 5 pour [[r]] donne [[K=5\\times12=60]] au lieu de 24. Correction : demandez-vous si le cercle se trouve à l'intérieur du triangle ou passe par ses sommets." },
          { "kind": "h3", "text": "2. Utiliser le périmètre complet au lieu du demi-périmètre" },
          { "kind": "p", "text": "La formule exige [[s]], la moitié du périmètre. Avec [[r=2]] et le périmètre complet 24 au lieu de [[s=12]], le résultat est [[K=2\\times24=48]], le double du 24 correct. Correction : divisez le périmètre par deux avant de multiplier." },
          { "kind": "h3", "text": "3. Diviser encore la réponse finale par deux" },
          { "kind": "p", "text": "La division par deux est déjà dans [[s]]. Diviser [[2\\times12=24]] encore par deux donne 12, la moitié de la vraie aire. Correction : calculez [[rs]] et arrêtez-vous." },
          { "kind": "h3", "text": "4. Confondre le centre du cercle inscrit avec le centre du cercle circonscrit" },
          { "kind": "p", "text": "Le centre du cercle inscrit est où les bissectrices se rencontrent ; le centre du cercle circonscrit est où les médiatrices se rencontrent, et pour un triangle rectangle il se trouve au milieu de l'hypoténuse. Ce sont des points différents. Correction : tracez la bonne construction pour le cercle dont vous avez besoin." },
          { "kind": "h3", "text": "5. Traiter le rayon inscrit comme un côté du triangle" },
          { "kind": "p", "text": "Le rayon inscrit est une distance à l'intérieur du triangle, pas l'un de ses trois côtés. Il n'a jamais sa place dans [[a+b+c]]. Correction : gardez [[r]] hors de toute expression de longueur de côté." },
          { "kind": "h3", "text": "6. Utiliser une formule incorrecte du rayon inscrit du triangle rectangle" },
          { "kind": "p", "text": "Le raccourci du triangle rectangle est [[r=\\frac{a+b-c}{2}]], pas une variante avec le mauvais signe ou le mauvais côté divisé par deux. Une faute courante est d'utiliser [[r=\\frac{a+c-b}{2}]], qui donne un nombre différent sauf si le triangle est isocèle. Correction : le côté soustrait est toujours l'hypoténuse [[c]]." },
          { "kind": "h3", "text": "7. Oublier que c est l'hypoténuse" },
          { "kind": "p", "text": "Dans le raccourci, [[c]] désigne spécifiquement l'hypoténuse. Correction : étiquetez le côté le plus long [[c]] avant d'appliquer la formule." },
          { "kind": "h3", "text": "8. Utiliser le mauvais côté comme hypoténuse" },
          { "kind": "p", "text": "Choisir une cathète pour [[c]] corrompt à la fois [[r]] et [[s]]. Correction : l'hypoténuse est le côté opposé à l'angle droit, toujours le plus long." },
          { "kind": "h3", "text": "9. Mélanger différentes unités de mesure" },
          { "kind": "p", "text": "Un rayon inscrit de 20 cm avec un demi-périmètre de 1 m ne donne aucun nombre sensé avant conversion. Correction : convertissez d'abord vers une seule unité, puis multipliez." },
          { "kind": "h3", "text": "10. Saisir des longueurs nulles ou négatives" },
          { "kind": "p", "text": "Les longueurs nulles et négatives ne décrivent aucun triangle. Correction : vérifiez que chaque longueur saisie est positive." },
          { "kind": "h3", "text": "11. Supposer que toute paire positive de r et s représente un triangle rectangle" },
          { "kind": "p", "text": "Comme montré plus haut, [[r=2]] avec [[s=10]] donne le nombre 20 mais aucun triangle rectangle. Correction : appliquez le contrôle [[s/r\\geq3+2\\sqrt2]] quand la géométrie compte." },
          { "kind": "h3", "text": "12. Exprimer l'aire en unités linéaires" },
          { "kind": "p", "text": "Une aire de 24 m² n'est pas 24 m. Correction : écrivez l'unité carrée avec le nombre." },
          { "kind": "h3", "text": "13. Arrondir le rayon inscrit trop tôt" },
          { "kind": "p", "text": "Arrondir [[r]] avant de multiplier déplace toute l'aire. Correction : gardez la pleine précision dans les étapes intermédiaires et n'arrondissez que la réponse finale." },
          { "kind": "h3", "text": "14. Confondre le demi-périmètre avec la somme de deux côtés" },
          { "kind": "p", "text": "Le demi-périmètre est la moitié de la somme des trois côtés, pas la somme de deux. Correction : additionnez les trois côtés, puis divisez par deux." },
          { "kind": "h3", "text": "15. Supposer que la formule ne fonctionne que pour les triangles rectangles" },
          { "kind": "p", "text": "[[K=rs]] vaut pour tout triangle non dégénéré ; seul le raccourci [[r=\\frac{a+b-c}{2}]] est propre aux triangles rectangles. Correction : appliquez la formule d'aire librement, mais utilisez la dérivation générale du rayon inscrit pour les triangles non rectangles." },
          { "kind": "h3", "text": "Faux contre correct : un exemple concret" },
          { "kind": "p", "text": "Prenez un triangle 6-8-10. Correct : [[r=2]], [[s=12]], [[K=2\\times12=24]]. Utiliser incorrectement le périmètre complet : [[K=2\\times24=48]], ce qui double l'aire. Diviser incorrectement la bonne réponse encore par deux : [[K=\\frac{24}{2}=12]], ce qui la réduit de moitié. Les deux erreurs viennent d'une mauvaise gestion du facteur un demi qui vit à l'intérieur de [[s]]." }
        ]
      },
      "sec-verify": {
        "h2": "Comment vérifier si l'aire de votre triangle rectangle est correcte",
        "blocks": [
          { "kind": "p", "text": "Plusieurs contrôles indépendants attrapent les erreurs fréquentes. Le triangle 3-4-5 illustre la plupart d'entre eux." },
          { "kind": "h3", "text": "Méthode 1 : rayon inscrit et demi-périmètre" },
          { "kind": "p", "text": "Recalculez [[K=rs]] avec les valeurs saisies. Pour [[r=1]] et [[s=6]], [[K=1\\times6=6]]. Un second passage attrape les fautes de frappe." },
          { "kind": "h3", "text": "Méthode 2 : deux cathètes perpendiculaires" },
          { "kind": "p", "text": "Quand les cathètes sont connues ou retrouvées, [[K=\\frac{ab}{2}]] doit s'accorder. Ici [[\\frac{3\\times4}{2}=6]] correspond à [[1\\times6=6]] : deux méthodes, un triangle, une réponse." },
          { "kind": "h3", "text": "Méthode 3 : théorème de Pythagore" },
          { "kind": "p", "text": "Confirmez [[a^2+b^2=c^2]] : [[9+16=25]]. Si les côtés ne le satisfont pas, l'identification du triangle est fausse." },
          { "kind": "h3", "text": "Méthode 4 : rayon inscrit du triangle rectangle" },
          { "kind": "p", "text": "Confirmez [[r=\\frac{a+b-c}{2}]] : [[\\frac{3+4-5}{2}=1]]. Un désaccord signifie que le rayon inscrit saisi n'appartient pas à ce triangle." },
          { "kind": "h3", "text": "Méthode 5 : demi-périmètre" },
          { "kind": "p", "text": "Confirmez [[s=\\frac{a+b+c}{2}]] : [[\\frac{3+4+5}{2}=6]]. Cela attrape les confusions entre périmètre et demi-périmètre." },
          { "kind": "h3", "text": "Méthode 6 : formule de Héron" },
          { "kind": "p", "text": "Confirmez [[K=\\sqrt{s(s-a)(s-b)(s-c)}]] : [[K=\\sqrt{6\\times3\\times2\\times1}=6]]. L'accord entre des formules indépendantes est le contrôle le plus fort disponible." },
          { "kind": "p", "text": "Voici pourquoi l'accord entre des formules indépendantes est un contrôle mathématique utile : une erreur commise sur un chemin se reproduit rarement sur un autre, donc deux réponses concordantes issues de formules différentes signifient que les entrées et les calculs sont justes." }
        ],
        "imgAlt": "Aire du triangle 3-4-5 comparée avec K = rs, K = ab/2 et la formule de Héron",
        "figcaption": "Trois méthodes, une réponse : K = rs, K = ab/2 et la formule de Héron donnent toutes 6 pour le triangle 3-4-5."
      },
      "sec-units": {
        "h2": "Comprendre les unités de mesure dans les calculs de rayon inscrit et de demi-périmètre",
        "blocks": [
          { "kind": "p", "text": "L'aire est bidimensionnelle, donc son unité est le carré de l'unité de longueur. En symboles, [[\\text{cm}\\times\\text{cm}=\\text{cm}^2]]. Il en va de même pour les mètres et les mètres carrés, les millimètres et les millimètres carrés, les pieds et les pieds carrés, les pouces et les pouces carrés. Les sélecteurs d'unités existent pour que le résultat puisse être étiqueté correctement." },
          { "kind": "h3", "text": "Pourquoi les deux entrées doivent utiliser des unités compatibles" },
          { "kind": "p", "text": "Le rayon inscrit et le demi-périmètre doivent être exprimés dans la même unité avant d'appliquer la formule. Si [[r=20\\text{ cm}]] et [[s=1\\text{ m}]], convertissez d'abord : [[1\\text{ m}=100\\text{ cm}]]. Puis [[K=20\\times100]], [[[\\boxed{K=2,000\\text{ cm}^2}]]], ou de façon équivalente [[[\\boxed{K=0.2\\text{ m}^2}]]] Multiplier des mesures dans des unités différentes produit un nombre sans unité propre, alors convertissez d'abord et calculez ensuite." },
          { "kind": "h3", "text": "Pourquoi éviter les arrondis précoces" },
          { "kind": "p", "text": "Des valeurs arrondies de [[r]] ou [[s]] peuvent légèrement affecter l'aire finale, parce que le rayon inscrit y est multiplié directement. Gardez une précision suffisante dans les calculs intermédiaires et n'arrondissez que la réponse finale. Ce guide ne prétend rien sur la précision interne de la calculatrice au-delà de ce que son interface montre." },
          { "kind": "h3", "text": "Mesures exactes contre mesures pratiques" },
          { "kind": "p", "text": "Les dimensions mathématiques exactes, comme le rayon inscrit 1 d'un triangle 3-4-5, se comportent différemment des mesures prises avec des instruments physiques. L'incertitude de l'instrument se propage dans l'aire, alors traitez le dernier chiffre comme seulement aussi fiable que les entrées. Un rayon inscrit de 2 cm mesuré au ruban pourrait vraiment être 1,9 ou 2,1, et l'aire porte cette incertitude avec elle." }
        ]
      },
      "sec-faq": {
        "h2": "Questions fréquemment posées",
        "blocks": [
          { "kind": "p", "text": "Voici les réponses aux questions les plus courantes sur l'aire calculée à partir du rayon inscrit et du demi-périmètre." }
        ]
      },
      "sec-related": {
        "h2": "Explorer les calculatrices de triangle rectangle associées",
        "blocks": [
          { "kind": "p", "text": "Des mesures différentes demandent des calculatrices différentes." }
        ]
      },
      "sec-conclusion": {
        "h2": "Deux mesures portent toute l'aire",
        "blocks": [
          { "kind": "p", "text": "Le rayon inscrit et le demi-périmètre semblent des entrées modestes, mais ensemble ils encodent toute l'étendue du triangle. La dérivation par les trois petits triangles montre pourquoi le produit est exact, l'argument des segments de tangentes montre d'où vient le raccourci du triangle rectangle, et les comparaisons avec la formule des cathètes et la formule de Héron montrent que le résultat s'accorde toujours avec le reste de la géométrie." },
          { "kind": "p", "text": "L'habitude de travail est simple : confirmez ce que r et s sont vraiment, gardez les unités cohérentes, et vérifiez la réponse par une formule indépendante. Quand ces habitudes tiennent, K = rs est l'un des calculs d'aire les plus fiables de la géométrie du triangle." }
        ]
      }
    }
  },
  "de": {
    "faqs": [
      {
        "question": "Wie lautet die Formel für die Fläche mit Inkreisradius und Halbumfang?",
        "answer": "Multiplizieren Sie den Inkreisradius r mit dem Halbumfang s: K = rs. Zum Beispiel ergeben r = 2 und s = 12 den Wert K = 24 Flächeneinheiten. Die Formel gilt für jedes nicht entartete Dreieck, nicht nur für rechtwinklige Dreiecke."
      },
      {
        "question": "Was ist ein Inkreisradius in einem rechtwinkligen Dreieck?",
        "answer": "Es ist der Radius des dem Dreieck einbeschriebenen Kreises, der senkrechte Abstand vom Inkreismittelpunkt zu einer beliebigen Seite. In einem 3-4-5-Dreieck beträgt der Inkreisradius 1, in einem 6-8-10-Dreieck 2."
      },
      {
        "question": "Wie berechnet man den Inkreisradius eines rechtwinkligen Dreiecks?",
        "answer": "Aus den drei Seiten verwenden Sie die Abkürzung r = (a + b - c) / 2, wobei a und b die Katheten und c die Hypotenuse sind. Für ein 5-12-13-Dreieck ergibt das r = 2."
      },
      {
        "question": "Wie berechnet man den Halbumfang?",
        "answer": "Addieren Sie die drei Seiten und halbieren Sie die Summe: s = (a + b + c) / 2. Für ein 5-12-13-Dreieck ist s = 15. Er ist immer größer als jede einzelne Seite."
      },
      {
        "question": "Warum ist die Fläche gleich Inkreisradius mal Halbumfang?",
        "answer": "Verbindet man den Inkreismittelpunkt mit den drei Eckpunkten, zerfällt das Dreieck in drei kleinere Dreiecke mit gemeinsamer Höhe r und den Grundseiten a, b und c. Ihre Flächen ar/2 + br/2 + cr/2 lassen sich zu r(a+b+c)/2 zusammenfassen, und da s = (a+b+c)/2 ist, beträgt die Gesamtfläche rs."
      },
      {
        "question": "Funktioniert die Formel auch für nicht rechtwinklige Dreiecke?",
        "answer": "Ja. K = rs gilt für jedes nicht entartete Dreieck. Nur die Abkürzung r = (a+b-c)/2 ist spezifisch für rechtwinklige Dreiecke, weil sie auf dem Quadrat am rechten Winkel beruht."
      },
      {
        "question": "Was ist der Unterschied zwischen Inkreisradius und Umkreisradius?",
        "answer": "Der Inkreisradius r ist der Radius des Kreises im Inneren des Dreiecks, der alle drei Seiten berührt; der Umkreisradius R ist der Radius des Kreises durch die drei Eckpunkte. Für ein rechtwinkliges Dreieck gilt R = c/2."
      },
      {
        "question": "Kann man die Fläche berechnen, ohne alle drei Seiten zu kennen?",
        "answer": "Ja. Wenn Inkreisradius und Halbumfang bereits bekannt sind, liefert K = rs die Fläche direkt mit einer einzigen Multiplikation, ganz ohne Seitenlängen."
      },
      {
        "question": "Ist der Halbumfang dasselbe wie der halbe Umfang?",
        "answer": "Ja, genau: s = P/2 = (a+b+c)/2. Die Unterscheidung ist wichtig, weil die Formel den halbierten Wert braucht; mit dem vollen Umfang verdoppelt sich die Antwort."
      },
      {
        "question": "Wie hängt der Inkreisradius mit den drei Seiten zusammen?",
        "answer": "In einem rechtwinkligen Dreieck gilt r = (a+b-c)/2, wobei a und b die Katheten und c die Hypotenuse sind. Außerdem gilt s + r = a + b und s - r = c, sodass sich die Seiten aus r und s zurückgewinnen lassen."
      },
      {
        "question": "Was ist der Unterschied zwischen der Heronischen Formel und der Inkreisradius-Formel?",
        "answer": "Die Heronische Formel, K = sqrt(s(s-a)(s-b)(s-c)), braucht alle drei Seiten; die Inkreisradius-Formel, K = rs, braucht nur r und s. Verwenden Sie Heron, wenn Sie die Seiten haben, und K = rs, wenn r und s bereits vorliegen. Beide liefern bei konsistenten Eingaben dieselbe Fläche."
      },
      {
        "question": "Wie kann man die berechnete Fläche überprüfen?",
        "answer": "Prüfen Sie mit unabhängigen Methoden: der Kathetenformel K = ab/2, dem Satz des Pythagoras, der Inkreisradius-Abkürzung, der Halbumfang-Definition und der Heronischen Formel. Stimmen mehrere Methoden überein, sind Eingaben und Rechnung korrekt."
      }
    ],
    "relatedHeading": "Passende Rechner für rechtwinklige Dreiecke entdecken",
    "relatedItems": [
      "Flächenrechner für rechtwinklige Dreiecke aus Katheten",
      "Flächenrechner für rechtwinklige Dreiecke aus Hypotenuse und Höhe",
      "Flächenrechner für rechtwinklige Dreiecke aus Winkel",
      "Flächenrechner für rechtwinklige Dreiecke aus Höhe",
      "Inkreisradius-Rechner für rechtwinklige Dreiecke",
      "Halbumfang-Rechner für rechtwinklige Dreiecke"
    ],
    "relatedIntro": "Unterschiedliche Messungen erfordern unterschiedliche Rechner.",
    "faqHeading": "Häufig gestellte Fragen",
    "tocHeading": "In diesem Leitfaden",
    "tocItems": {
      "sec-intro": "So berechnen Sie die Fläche eines rechtwinkligen Dreiecks mit Inkreisradius und Halbumfang",
      "sec-incircle": "Was ist ein Inkreis in der Geometrie?",
      "sec-semiperimeter": "Was ist der Halbumfang eines Dreiecks?",
      "sec-formula": "Warum die Fläche gleich Inkreisradius mal Halbumfang ist",
      "sec-inradius": "So finden Sie den Inkreisradius eines rechtwinkligen Dreiecks",
      "sec-howto": "So verwenden Sie den Flächenrechner mit Inkreisradius und Halbumfang",
      "sec-examples": "Schritt für Schritt gelöste Beispiele",
      "sec-applications": "Anwendungen aus der Praxis",
      "sec-relationship": "Wie Inkreisradius und Halbumfang mit den drei Seiten zusammenhängen",
      "sec-valid": "Prüfen, ob Ihre Messungen gültig sind",
      "sec-heron": "Wie sich die Inkreisradius-Formel mit der Heronischen Formel vergleicht",
      "sec-legs": "Warum die Inkreisradius-Formel mit der Kathetenformel übereinstimmt",
      "sec-mistakes": "Häufige Fehler",
      "sec-verify": "So überprüfen Sie Ihre Fläche",
      "sec-units": "Maßeinheiten und Rundung",
      "sec-related": "Passende Rechner für rechtwinklige Dreiecke entdecken",
      "sec-faq": "Häufig gestellte Fragen",
      "sec-conclusion": "Fazit"
    },
    "sections": {
      "sec-intro": {
        "h2": "So berechnen Sie die Fläche eines rechtwinkligen Dreiecks mit Inkreisradius und Halbumfang",
        "blocks": [
          { "kind": "p", "text": "Ein rechtwinkliges Dreieck hat einen Inkreisradius von [[r=2]] und einen Halbumfang von [[s=12]]. Wenden Sie [[K=r\\times s]] an: [[K=2\\times12]], [[[\\boxed{K=24\\text{ square units}}]]] Das Dreieck schließt 24 Flächeneinheiten ebener Fläche ein. Das ist die vollständige Methode, die der Rechner automatisiert: zwei Messungen, eine Multiplikation, eine Antwort." },
          { "kind": "p", "text": "Der Inkreisradius ist der Radius des Kreises, der sich passgenau im Inneren des Dreiecks befindet und alle drei Seiten berührt. Der Halbumfang ist die halbe Strecke um das Dreieck herum. Zusammen genügen sie, um die Fläche zu bestimmen, weil der Kreisradius als Höhe dreier kleinerer Dreiecke wirkt, deren Grundseiten die Seiten des Dreiecks sind. Diese Identität gilt für jedes nicht entartete Dreieck, nicht nur für rechtwinklige; das Besondere an rechtwinkligen Dreiecken ist die schnelle Art, wie sich der Inkreisradius selbst aus den drei Seiten berechnen lässt. Am nützlichsten ist sie, wenn der Inkreis direkt vermessen wurde oder wenn Inkreisradius und Halbumfang aus früheren Arbeiten bereits bekannt sind." }
        ]
      },
      "sec-incircle": {
        "h2": "Was ist ein Inkreis in der Geometrie?",
        "blocks": [
          { "kind": "p", "text": "Die durchgehende Notation lautet: [[A]], [[B]] und [[C]] sind die Eckpunkte und Winkel mit [[C=90^\\circ]]; [[a]] und [[b]] sind die beiden Katheten; [[c]] ist die Hypotenuse gegenüber [[C]]; [[r]] ist der Inkreisradius; [[I]] ist der Inkreismittelpunkt; [[s]] ist der Halbumfang; [[P]] ist der Umfang; und [[K]] ist die Fläche, die überall verwendet wird, damit sie nie mit dem Winkel [[A]] verwechselt wird." },
          { "kind": "h3", "text": "Definition eines Inkreises" },
          { "kind": "p", "text": "Ein Inkreis ist der größte Kreis, der in ein Dreieck passt und dabei alle drei Seiten berührt. Er liegt vollständig im Inneren, weil jede Dreiecksseite eine Tangente an den Kreis ist: Der Kreis erreicht die Seite in genau einem Punkt und bleibt auf ihrer Innenseite. Ein Kreis, der nur in der Nähe einer Seite liegt, zählt nicht; der Inkreis muss jede Seite berühren, sie in einem einzigen Punkt tangieren und dann ins Innere zurückkehren. Jedes nicht entartete Dreieck besitzt genau einen solchen Kreis mit eindeutigem Mittelpunkt, weil die drei Geraden nicht parallel sind und ihre Geometrie den Kreis vollständig festlegt." },
          { "kind": "h3", "text": "Was ist ein Inkreisradius?" },
          { "kind": "p", "text": "Der Inkreisradius ist der Abstand vom Inkreismittelpunkt zu einer beliebigen Dreiecksseite. Wenn [[I]] der Inkreismittelpunkt und [[D]] der Punkt ist, in dem der Inkreis eine Seite berührt, dann gilt [[r=ID]]. Der Kreisradius ist der kürzeste Abstand von seinem Mittelpunkt zur Tangentenseite, und dieser kürzeste Abstand ist für alle drei Seiten gleich, weshalb der Kreis alle drei Seiten berührt statt ihnen nur nahezukommen." },
          { "kind": "h3", "text": "Warum steht der Inkreisradius senkrecht auf jeder Seite?" },
          { "kind": "p", "text": "Eine grundlegende Kreiseigenschaft besagt, dass in jedem Punkt, in dem eine Gerade einen Kreis berührt, der zu diesem Punkt gezogene Radius die Gerade im rechten Winkel trifft. Wenn also [[D]] der Berührpunkt auf der Seite [[AB]] ist, dann gilt [[ID\\perp AB]]. Dasselbe gilt für die beiden anderen Seiten. Diese Senkrechtheit ist nicht dekorativ: Erst sie lässt jeden Radius als Höhe eines kleineren Dreiecks wirken, wenn die Flächenformel hergeleitet wird, denn die Höhe eines Dreiecks muss senkrecht auf seiner Grundseite stehen." },
          { "kind": "h3", "text": "Den Inkreismittelpunkt verstehen" },
          { "kind": "p", "text": "Der Inkreismittelpunkt [[I]] ist der Punkt, in dem sich die drei inneren Winkelhalbierenden des Dreiecks treffen. Jede Winkelhalbierende ist die Menge der Punkte mit gleichem Abstand zu den beiden Seiten, die den Winkel bilden; ein Punkt auf allen drei Halbierenden hat also zu allen drei Seiten den gleichen Abstand und muss im Inneren des Dreiecks liegen. Dieser gemeinsame Abstand ist genau der Inkreisradius, und der Kreis um [[I]] mit Radius [[r]] berührt jede Seite einmal: der Inkreis." },
          { "kind": "h3", "text": "Ist der Inkreisradius dasselbe wie der Umkreisradius?" },
          { "kind": "p", "text": "Nein. Der Inkreisradius [[r]] ist der Radius des Kreises im Inneren des Dreiecks, während der Umkreisradius [[R]] der Radius des Kreises durch alle drei Eckpunkte ist, des Umkreises. Bei einem rechtwinkligen Dreieck liegt der Umkreismittelpunkt in der Mitte der Hypotenuse, also [[[\\boxed{R=\\frac{c}{2}}]]] Die beiden Radien beschreiben völlig verschiedene Kreise: Der eine ist dem Dreieck einbeschrieben, der andere um es herum gezeichnet. Sie zu verwechseln gehört zu den häufigsten Fehlern in diesem Thema; halten Sie sie auseinander: [[r]] für innen, [[R]] für außen." }
        ],
        "imgAlt": "Dreieck ABC mit Inkreis, Mittelpunkt I, Inkreisradius r, Berührpunkten und Umkreis",
        "figcaption": "Dreieck ABC und sein Inkreis: Inkreismittelpunkt I, Inkreisradius r = ID mit ID senkrecht zu jeder Seite, plus Umkreis zum Vergleich."
      },
      "sec-semiperimeter": {
        "h2": "Was ist der Halbumfang eines Dreiecks?",
        "blocks": [
          { "kind": "h3", "text": "Definition des Halbumfangs" },
          { "kind": "p", "text": "Der Halbumfang ist der halbe Gesamtumfang eines Dreiecks: [[[\\boxed{s=\\frac{a+b+c}{2}}]]], wobei [[a]] und [[b]] die Katheten und [[c]] die Hypotenuse sind. Er ist eine Länge wie jede Seite, und er verdient seinen Platz in der Flächenformel, weil er alle drei Seiten zu einer einzigen Zahl zusammenfasst." },
          { "kind": "h3", "text": "Unterschied zwischen Umfang und Halbumfang" },
          { "kind": "p", "text": "Der Umfang ist die volle Strecke um das Dreieck herum, [[P=a+b+c]], während der Halbumfang dessen Hälfte ist, [[s=\\frac{P}{2}]]. Für ein 3-4-5-Dreieck: [[P=3+4+5=12]] und [[s=\\frac{12}{2}=6]]. Der Halbumfang ist nicht die Länge der Begrenzung; er ist ihre Hälfte, und den vollen Umfang in [[K=rs]] einzusetzen würde die wahre Fläche verdoppeln." },
          { "kind": "h3", "text": "Warum wird der Halbumfang in der Flächenformel verwendet?" },
          { "kind": "p", "text": "Verbindet man den Inkreismittelpunkt mit den drei Eckpunkten, zerfällt das Dreieck in drei kleinere Dreiecke, jedes mit senkrechter Höhe [[r]]. Ihre Grundseiten sind [[a]], [[b]] und [[c]], ihre Gesamtfläche beträgt also [[K=\\frac12r(a+b+c)]]. Da [[s=\\frac{a+b+c}{2}]] ist, steckt der halbe Umfang bereits in [[s]], was [[K=rs]] ergibt. Der nächste Abschnitt leitet dies vollständig her." },
          { "kind": "h3", "text": "Kann der Halbumfang kleiner als eine Seite sein?" },
          { "kind": "p", "text": "Nein. Die Dreiecksungleichung besagt, dass für jedes Dreieck [[a+b>c]] gilt, also [[s=\\frac{a+b+c}{2}>c]]. Dasselbe Argument gilt für die beiden anderen Seiten: [[s>a]] und [[s>b]]. Der Halbumfang ist immer größer als jede einzelne Seite. Das ist eine schnelle Plausibilitätsprüfung der Eingaben: Wenn ein angeblicher Halbumfang kleiner als eine Seite ist, können die Zahlen kein echtes Dreieck beschreiben." }
        ]
      },
      "sec-formula": {
        "h2": "Warum die Fläche eines Dreiecks gleich Inkreisradius mal Halbumfang ist",
        "blocks": [
          { "kind": "p", "text": "Beginnen Sie mit der Standardregel für die Dreiecksfläche: [[K=\\frac12\\times\\text{base}\\times\\text{height}]]. Zieht man Strecken vom Inkreismittelpunkt [[I]] zu den drei Eckpunkten, zerfällt das ursprüngliche Dreieck in drei kleinere Dreiecke. Jedes kleinere Dreieck hat eine Grundseite gleich einer Seite des ursprünglichen Dreiecks und eine senkrechte Höhe gleich dem Inkreisradius [[r]], weil der Radius jede Seite im rechten Winkel trifft. Das funktioniert für jedes nicht entartete Dreieck; für diesen Rechner ist das Dreieck rechtwinklig, aber die Flächenidentität selbst ist vollständig allgemein." },
          { "kind": "h3", "text": "Fläche des ersten kleineren Dreiecks" },
          { "kind": "p", "text": "Das kleinere Dreieck auf der Seite [[a]] hat die Grundseite [[a]] und die Höhe [[r]]: [[[\\boxed{K_1=\\frac{ar}{2}}]]]" },
          { "kind": "h3", "text": "Fläche des zweiten kleineren Dreiecks" },
          { "kind": "p", "text": "Das kleinere Dreieck auf der Seite [[b]] hat die Grundseite [[b]] und die Höhe [[r]]: [[[\\boxed{K_2=\\frac{br}{2}}]]]" },
          { "kind": "h3", "text": "Fläche des dritten kleineren Dreiecks" },
          { "kind": "p", "text": "Das kleinere Dreieck auf der Seite [[c]] hat die Grundseite [[c]] und die Höhe [[r]]: [[[\\boxed{K_3=\\frac{cr}{2}}]]]" },
          { "kind": "h3", "text": "Die drei Flächen addieren" },
          { "kind": "p", "text": "Die drei kleineren Dreiecke pflastern das Original ohne Überlappung, also [[K=K_1+K_2+K_3]]. Einsetzen: [[K=\\frac{ar}{2}+\\frac{br}{2}+\\frac{cr}{2}]]. [[\\frac{r}{2}]] ausklammern: [[K=\\frac{r(a+b+c)}{2}]]. Beachten Sie [[s=\\frac{a+b+c}{2}]], daher [[[\\boxed{K=r\\times s}]]] Jeder Übergang ist begründet: Die Pflasterung ist exakt, die Höhe [[r]] ist gemeinsam, und der Halbumfang nimmt die Division durch zwei auf." },
          { "kind": "h3", "text": "Warum braucht diese Formel keine weitere Division durch zwei?" },
          { "kind": "p", "text": "Weil die Hälfte bereits im Halbumfang steckt. Die drei Hälften verbinden sich zu [[\\frac{r(a+b+c)}{2}]], und [[s]] ist genau der halbe Umfang; ein zweites Halbieren würde den korrekten Ausdruck vierteln. Berechnen Sie [[r\\times s]] und hören Sie dort auf; ein weiteres Halbieren ist ein Fehler, keine Korrektur." }
        ],
        "imgAlt": "Inkreis teilt Dreieck ABC in drei kleinere Dreiecke mit Höhe r und Grundseiten a, b, c",
        "figcaption": "Drei kleinere Dreiecke mit gemeinsamer Höhe r und Grundseiten a, b, c: Ihre Flächen ar/2 + br/2 + cr/2 ergeben zusammen rs."
      },
      "sec-inradius": {
        "h2": "So berechnen Sie den Inkreisradius aus den drei Seitenlängen",
        "blocks": [
          { "kind": "p", "text": "Wenn die drei Seiten bekannt sind, folgt der Inkreisradius eines rechtwinkligen Dreiecks einer Abkürzung, die das Zeichnen des Inkreises ganz vermeidet: [[[\\boxed{r=\\frac{a+b-c}{2}}]]], wobei [[a]] und [[b]] die senkrechten Katheten und [[c]] die Hypotenuse sind. Das ist eine der praktischsten Tatsachen in der Geometrie rechtwinkliger Dreiecke." },
          { "kind": "h3", "text": "Herleitung der Inkreisradius-Formel für rechtwinklige Dreiecke" },
          { "kind": "p", "text": "Die Herleitung nutzt den Satz von den gleichen Tangentenabschnitten: Von einem gemeinsamen äußeren Punkt aus haben die beiden an einen Kreis gezogenen Tangentenabschnitte gleiche Länge. Die Tangentenlängen von den drei Eckpunkten seien [[x]] vom Eckpunkt [[A]], [[y]] vom Eckpunkt [[B]] und [[z]] vom Eckpunkt [[C]]. Am rechten Winkel [[C]] verlaufen die beiden Tangenten des Inkreises entlang der senkrechten Katheten und haben jeweils die Länge [[r]]; sie bilden mit den beiden Radien ein kleines Quadrat, also [[z=r]]. Die Seiten sind dann [[a=y+r]], [[b=x+r]] und [[c=x+y]]. Subtrahieren: [[a+b-c=(y+r)+(x+r)-(x+y)]], also [[a+b-c=2r]], was [[[\\boxed{r=\\frac{a+b-c}{2}}]]] ergibt. Das Quadrat am rechten Winkel erklärt, warum diese Abkürzung allein den rechtwinkligen Dreiecken gehört." },
          { "kind": "h3", "text": "Beispiel mit einem 3-4-5-Dreieck" },
          { "kind": "p", "text": "Gegeben [[a=3]], [[b=4]], [[c=5]]: [[r=\\frac{3+4-5}{2}]], [[[\\boxed{r=1}]]] Der Inkreisradius beträgt genau 1, ganz ohne Konstruktion." },
          { "kind": "h3", "text": "Beispiel mit einem 5-12-13-Dreieck" },
          { "kind": "p", "text": "Gegeben [[a=5]], [[b=12]], [[c=13]]: [[r=\\frac{5+12-13}{2}]], [[[\\boxed{r=2}]]] Auch hier ergibt sich der Inkreisradius direkt aus den Seitenlängen." },
          { "kind": "h3", "text": "Den Halbumfang gleichzeitig berechnen" },
          { "kind": "p", "text": "Mit denselben drei Seiten berechnen Sie [[s=\\frac{a+b+c}{2}]] zusammen mit [[r]]. Für das 5-12-13-Dreieck: [[s=\\frac{5+12+13}{2}=15]], und dann [[K=rs=2\\times15=30]]. Ein einziger Durchgang über die drei Seiten liefert beide Rechnereingaben und die Fläche selbst." },
          { "kind": "h3", "text": "Wann sollten Sie diese Abkürzung verwenden?" },
          { "kind": "p", "text": "Verwenden Sie sie immer, wenn die drei Seiten bekannt sind, der Inkreis aber weder vermessen noch gezeichnet wurde: Lehrbuchaufgaben, Konstruktionsmaße und Vermessungsdaten geben üblicherweise Seitenlängen an, keinen Inkreisradius. Die Abkürzung wandelt sie in einer Zeile in [[r]] um. Wenn der Inkreisradius die gemessene Größe ist, geben Sie ihn stattdessen direkt ein und überspringen die Umrechnung." }
        ],
        "imgAlt": "3-4-5-Dreieck mit gleichen Tangentenabschnitten und Abkürzung r = (a+b-c)/2 = 1",
        "figcaption": "Tangentenabschnitte an einem 3-4-5-Dreieck: Gleiche Längen von jedem Eckpunkt ergeben r = (3 + 4 - 5)/2 = 1."
      },
      "sec-howto": {
        "h2": "So verwenden Sie den Flächenrechner für rechtwinklige Dreiecke mit Inkreisradius und Halbumfang",
        "blocks": [
          { "kind": "p", "text": "Der Rechner braucht genau zwei Eingaben. Die folgende Anleitung folgt der Bildschirmreihenfolge, von bekannten Messungen bis zum geprüften Ergebnis." }
        ],
        "steps": [
          "<strong>Bestimmen Sie den Inkreisradius r.</strong> Der Radius des einbeschriebenen Kreises, der senkrechte Abstand vom Inkreismittelpunkt zu einer beliebigen Seite.",
          "<strong>Bestimmen Sie den Halbumfang s.</strong> Der halbe Gesamtumfang des Dreiecks.",
          "<strong>Wenn die drei Seiten bekannt sind, berechnen Sie r mit [[r=\\frac{a+b-c}{2}]].</strong> Dabei sind [[a]] und [[b]] die Katheten und [[c]] die Hypotenuse.",
          "<strong>Berechnen Sie s mit [[s=\\frac{a+b+c}{2}]].</strong>",
          "<strong>Geben Sie den Inkreisradius in das erste Feld ein.</strong>",
          "<strong>Geben Sie den Halbumfang in das zweite Feld ein.</strong>",
          "<strong>Wählen Sie passende Längeneinheiten.</strong> Beide Messungen müssen dieselbe Einheit verwenden.",
          "<strong>Prüfen Sie, dass beide Werte positiv sind.</strong> Null oder negative Längen beschreiben kein Dreieck.",
          "<strong>Klicken Sie auf „Calculate Area“.</strong>",
          "<strong>Prüfen Sie das Ergebnis.</strong> Die Fläche erscheint in den Quadrateinheiten passend zu den Eingaben.",
          "<strong>Bestätigen Sie, dass die Antwort in Quadrateinheiten ausgedrückt ist.</strong> Meter ergeben Quadratmeter; Zentimeter ergeben Quadratzentimeter.",
          "<strong>Sehen Sie sich die mathematische Lösung an.</strong> Sie zeigt die Einsetzung und die Rechnung.",
          "<strong>Verwenden Sie „Reset“, wenn Sie eine neue Berechnung beginnen.</strong> Es löscht beide Felder, sodass die nächste Berechnung sauber startet."
        ],
        "closingParagraphs": [
          "Der Rechner fragt nicht nach den drei Seitenlängen: Inkreisradius und Halbumfang enthalten bereits alles, was die Formel [[K=rs]] braucht."
        ]
      },
      "sec-examples": {
        "h2": "Schritt-für-Schritt-Beispiele zur Flächenberechnung mit Inkreisradius und Halbumfang",
        "blocks": [
          { "kind": "p", "text": "Vier gelöste Beispiele bauen die Methode vom Vertrauten her auf. Jedes berechnet Halbumfang und Inkreisradius aus den drei Seiten, wendet [[K=rs]] an, wobei jede Einsetzung gezeigt wird, und prüft mit der Kathetenformel." },
          { "kind": "h3", "text": "Beispiel 1: Rechtwinkliges 3-4-5-Dreieck" },
          { "kind": "p", "text": "Gegeben [[a=3]], [[b=4]], [[c=5]]. Schritt 1: Halbumfang, [[s=\\frac{3+4+5}{2}=6]]. Schritt 2: Inkreisradius, [[r=\\frac{3+4-5}{2}=1]]. Schritt 3: Formel anwenden, [[K=1\\times6]], [[[\\boxed{K=6\\text{ square units}}]]] Probe: [[K=\\frac{3\\times4}{2}=6]]." },
          { "kind": "h3", "text": "Beispiel 2: Rechtwinkliges 6-8-10-Dreieck" },
          { "kind": "p", "text": "Gegeben [[a=6]], [[b=8]], [[c=10]]. Dann [[s=\\frac{6+8+10}{2}=12]], [[r=\\frac{6+8-10}{2}=2]], und [[K=2\\times12]], [[[\\boxed{K=24\\text{ square units}}]]] Probe: [[K=\\frac{6\\times8}{2}=24]]." },
          { "kind": "h3", "text": "Beispiel 3: Rechtwinkliges 5-12-13-Dreieck" },
          { "kind": "p", "text": "Gegeben [[a=5]], [[b=12]], [[c=13]]. Dann [[s=\\frac{5+12+13}{2}=15]], [[r=\\frac{5+12-13}{2}=2]], und [[K=2\\times15]], [[[\\boxed{K=30\\text{ square units}}]]] Probe: [[K=\\frac{5\\times12}{2}=30]]." },
          { "kind": "h3", "text": "Beispiel 4: Rechtwinkliges 8-15-17-Dreieck" },
          { "kind": "p", "text": "Gegeben [[a=8]], [[b=15]], [[c=17]]. Dann [[s=\\frac{8+15+17}{2}=20]], [[r=\\frac{8+15-17}{2}=3]], und [[K=3\\times20]], [[[\\boxed{K=60\\text{ square units}}]]] Probe: [[K=\\frac{8\\times15}{2}=60]]." },
          { "kind": "h3", "text": "Vergleich der Grundlagenbeispiele" }
        ],
        "table": {
          "headers": ["Dreieck", "Halbumfang s", "Inkreisradius r", "Fläche K = rs"],
          "rows": [
            ["3-4-5", "6", "1", "6"],
            ["6-8-10", "12", "2", "24"],
            ["5-12-13", "15", "2", "30"],
            ["8-15-17", "20", "3", "60"]
          ]
        }
      },
      "sec-applications": {
        "h2": "Praxisanwendungen der rechtwinkligen Dreiecksfläche mit Inkreisradius und Halbumfang",
        "blocks": [
          { "kind": "p", "text": "Zwölf gelöste Situationen zeigen die Formel in verschiedenen Maßstäben und Einheiten. Jede benennt das dreieckige Objekt, gibt die drei Seitenmessungen an, berechnet Inkreisradius und Halbumfang, wendet die Hauptformel Schritt für Schritt an und nennt die Annahme dahinter. Jedes Beispiel ist eine rechtwinklig-dreieckige Platte, ein Querschnitt, ein Profil oder ein vereinfachtes geometrisches Modell; wo das reale Objekt gekrümmt oder unregelmäßig ist, deckt die Berechnung nur das modellierte Dreieck ab." },
          { "kind": "h3", "text": "Beispiel 1: Dreieckiges Glasfenster" },
          { "kind": "p", "text": "Ein rechtwinklig-dreieckiges Glasfenster hat [[a=3\\text{ m}]], [[b=4\\text{ m}]], [[c=5\\text{ m}]]. Inkreisradius: [[r=\\frac{3+4-5}{2}=1\\text{ m}]]. Halbumfang: [[s=\\frac{3+4+5}{2}=6\\text{ m}]]. Fläche: [[K=1\\times6]], [[[\\boxed{K=6\\text{ m}^2}]]] Das ist die ebene Glasfläche vor Berücksichtigung der Rahmenmaße." },
          { "kind": "h3", "text": "Beispiel 2: Stahl-Stützwinkel" },
          { "kind": "p", "text": "Eine dreieckige Stahlstützplatte hat [[a=5\\text{ cm}]], [[b=12\\text{ cm}]], [[c=13\\text{ cm}]]. Dann [[r=2\\text{ cm}]], [[s=15\\text{ cm}]], [[[\\boxed{K=30\\text{ cm}^2}]]] Die Fläche allein bestimmt nicht die Tragfähigkeit der Platte." },
          { "kind": "h3", "text": "Beispiel 3: Dreieckiges Rampen-Seitenprofil" },
          { "kind": "p", "text": "Ein vereinfachtes rechtwinklig-dreieckiges Rampenprofil hat [[a=6\\text{ m}]], [[b=8\\text{ m}]], [[c=10\\text{ m}]]. Dann [[r=2\\text{ m}]], [[s=12\\text{ m}]], [[[\\boxed{K=24\\text{ m}^2}]]] Das stellt das Seitenprofil dar, nicht die geneigte Lauffläche." },
          { "kind": "h3", "text": "Beispiel 4: Dreieckige Dachstützplatte" },
          { "kind": "p", "text": "Eine rechtwinklig-dreieckige Dachstützplatte hat [[a=8\\text{ ft}]], [[b=15\\text{ ft}]], [[c=17\\text{ ft}]]. Dann [[r=3\\text{ ft}]], [[s=20\\text{ ft}]], [[[\\boxed{K=60\\text{ ft}^2}]]] Das Ergebnis ist die geschätzte ebene dreieckige Plattenfläche." },
          { "kind": "h3", "text": "Beispiel 5: Vermessene Gartensektion" },
          { "kind": "p", "text": "Eine rechtwinklig-dreieckige Gartensektion hat [[a=7\\text{ m}]], [[b=24\\text{ m}]], [[c=25\\text{ m}]]. Dann [[r=3\\text{ m}]], [[s=28\\text{ m}]], [[[\\boxed{K=84\\text{ m}^2}]]] Die Formel liefert die Fläche der dreieckigen Sektion direkt aus ihren drei Grenzmessungen." },
          { "kind": "h3", "text": "Beispiel 6: Dreieckiges Stoffsegel" },
          { "kind": "p", "text": "Eine rechtwinklig-dreieckige Stoffbahn hat [[a=9\\text{ ft}]], [[b=12\\text{ ft}]], [[c=15\\text{ ft}]]. Dann [[r=3\\text{ ft}]], [[s=18\\text{ ft}]], [[[\\boxed{K=54\\text{ ft}^2}]]] Nähte und Stoffzugaben sind in dieser ebenen Bahnzahl nicht enthalten." },
          { "kind": "h3", "text": "Beispiel 7: Große dreieckige Landsektion" },
          { "kind": "p", "text": "Eine vermessene Landsektion, modelliert als rechtwinkliges Dreieck, hat [[a=9\\text{ m}]], [[b=40\\text{ m}]], [[c=41\\text{ m}]]. Dann [[r=4\\text{ m}]], [[s=45\\text{ m}]], [[[\\boxed{K=180\\text{ m}^2}]]] Das vereinfachte rechtwinklig-dreieckige Modell setzt gerade Grenzen auf ebenem Boden voraus." },
          { "kind": "h3", "text": "Beispiel 8: Sperrholz-Schneidschablone" },
          { "kind": "p", "text": "Eine dreieckige Sperrholzschablone hat [[a=12\\text{ cm}]], [[b=16\\text{ cm}]], [[c=20\\text{ cm}]]. Dann [[r=4\\text{ cm}]], [[s=24\\text{ cm}]], [[[\\boxed{K=96\\text{ cm}^2}]]] Die Fläche hilft, den Materialbedarf vor dem Schnittverschnitt abzuschätzen." },
          { "kind": "h3", "text": "Beispiel 9: Großes dreieckiges Schildpaneel" },
          { "kind": "p", "text": "Ein rechtwinklig-dreieckiges Schildpaneel hat [[a=20\\text{ m}]], [[b=21\\text{ m}]], [[c=29\\text{ m}]]. Dann [[r=6\\text{ m}]], [[s=35\\text{ m}]], [[[\\boxed{K=210\\text{ m}^2}]]] Das Ergebnis stellt die ebene Dreiecksfläche dar, die dem Betrachter zugewandt ist." },
          { "kind": "h3", "text": "Beispiel 10: Dreieckige Markisenstütze" },
          { "kind": "p", "text": "Eine rechtwinklig-dreieckige Markisenstützsektion hat [[a=15\\text{ ft}]], [[b=20\\text{ ft}]], [[c=25\\text{ ft}]]. Dann [[r=5\\text{ ft}]], [[s=30\\text{ ft}]], [[[\\boxed{K=150\\text{ ft}^2}]]] Das ist die berechnete Fläche der modellierten dreieckigen Sektion." },
          { "kind": "h3", "text": "Beispiel 11: Industrielle Stützplatte" },
          { "kind": "p", "text": "Eine rechtwinklig-dreieckige industrielle Stützplatte hat [[a=11\\text{ m}]], [[b=60\\text{ m}]], [[c=61\\text{ m}]]. Dann [[r=5\\text{ m}]], [[s=66\\text{ m}]], [[[\\boxed{K=330\\text{ m}^2}]]] Diese geometrische Berechnung beschreibt die ebene Fläche der Platte, nicht ihre strukturelle Leistung." },
          { "kind": "h3", "text": "Beispiel 12: Große dreieckige Dachendsektion" },
          { "kind": "p", "text": "Eine rechtwinklig-dreieckige Dachendsektion hat [[a=13\\text{ ft}]], [[b=84\\text{ ft}]], [[c=85\\text{ ft}]]. Dann [[r=6\\text{ ft}]], [[s=91\\text{ ft}]], [[[\\boxed{K=546\\text{ ft}^2}]]] Die berechnete Fläche hilft, die ebene dreieckige Abdeckung abzuschätzen." },
          { "kind": "h3", "text": "Vergleich der Praxisbeispiele" }
        ],
        "table": {
          "headers": ["Anwendung", "Seite a", "Seite b", "Hypotenuse c", "Inkreisradius r", "Halbumfang s", "Fläche"],
          "rows": [
            ["Glasfenster", "3", "4", "5", "1", "6", "6 m²"],
            ["Stahlwinkel", "5", "12", "13", "2", "15", "30 cm²"],
            ["Rampenprofil", "6", "8", "10", "2", "12", "24 m²"],
            ["Dachplatte", "8", "15", "17", "3", "20", "60 ft²"],
            ["Gartensektion", "7", "24", "25", "3", "28", "84 m²"],
            ["Stoffsegel", "9", "12", "15", "3", "18", "54 ft²"],
            ["Landsektion", "9", "40", "41", "4", "45", "180 m²"],
            ["Sperrholzschablone", "12", "16", "20", "4", "24", "96 cm²"],
            ["Schildpaneel", "20", "21", "29", "6", "35", "210 m²"],
            ["Markisenstütze", "15", "20", "25", "5", "30", "150 ft²"],
            ["Industrieplatte", "11", "60", "61", "5", "66", "330 m²"],
            ["Dachendsektion", "13", "84", "85", "6", "91", "546 ft²"]
          ]
        }
      },
      "sec-relationship": {
        "h2": "Wie hängen Inkreisradius und Halbumfang mit den drei Seiten zusammen?",
        "blocks": [
          { "kind": "p", "text": "In einem rechtwinkligen Dreieck sind Inkreisradius und Halbumfang nicht unabhängig von den Seiten; sie sind aus ihnen aufgebaut. Ausgehend von [[r=\\frac{a+b-c}{2}]] und [[s=\\frac{a+b+c}{2}]] addieren und subtrahieren Sie die beiden Ausdrücke. Addieren ergibt [[[\\boxed{s+r=a+b}]]], Subtrahieren ergibt [[[\\boxed{s-r=c}]]] Diese beiden Identitäten gelten nur für rechtwinklige Dreiecke unter der gegebenen Notation, und sie verwandeln die beiden Rechnereingaben in eine überraschende Menge an Information über das Dreieck selbst." },
          { "kind": "h3", "text": "Die Hypotenuse zurückgewinnen" },
          { "kind": "p", "text": "Aus [[s-r=c]] lässt sich die Hypotenuse zurückgewinnen, wenn [[r]] und [[s]] bekannt sind. Für [[r=2]] und [[s=12]]: [[c=12-2]], [[[\\boxed{c=10}]]] Zwei Eingaben enthüllen so die längste Seite ganz ohne weitere Messung." },
          { "kind": "h3", "text": "Die Summe der beiden Katheten zurückgewinnen" },
          { "kind": "p", "text": "Aus [[a+b=s+r]] folgt die Kathetensumme direkt. Für [[r=2]] und [[s=12]]: [[a+b=14]]. Die Summe allein kann nicht jede Kathete einzeln identifizieren; die einzelnen Längen brauchen eine weitere Information." },
          { "kind": "h3", "text": "Das Produkt der beiden Katheten zurückgewinnen" },
          { "kind": "p", "text": "Da [[K=\\frac{ab}{2}]] und [[K=rs]], folgt [[[\\boxed{ab=2rs}]]] Für [[r=2]] und [[s=12]]: [[ab=48]]. Mit [[a+b=14]] und [[ab=48]] sind die beiden Katheten 6 und 8: [[6+8=14]] und [[6\\times8=48]]. Die beiden Katheten lassen sich vertauschen, ohne die Dreiecksfläche zu ändern." },
          { "kind": "h3", "text": "Beide Kathetenlängen zurückgewinnen" },
          { "kind": "p", "text": "Summe und Produkt machen [[a]] und [[b]] zu den beiden Nullstellen von [[t^2-(s+r)t+2rs=0]], was [[[\\boxed{a,b=\\frac{(s+r)\\pm\\sqrt{(s+r)^2-8rs}}{2}}]]] ergibt. Die beiden Vorzeichen entsprechen den beiden möglichen Kathetenzuordnungen. Mit [[r=2]] und [[s=12]]: [[a,b=\\frac{14\\pm\\sqrt{196-192}}{2}]], also [[a,b=\\frac{14\\pm2}{2}]], Katheten 6 und 8. Das ist eine fortgeschrittene mathematische Schlussfolgerung, keine zusätzliche Rechnerfunktion." }
        ]
      },
      "sec-valid": {
        "h2": "So prüfen Sie, ob Inkreisradius und Halbumfang ein gültiges rechtwinkliges Dreieck bilden",
        "blocks": [
          { "kind": "p", "text": "Der Rechner multipliziert zwei Eingaben, aber nicht jedes positive Längenpaar beschreibt ein rechtwinkliges Dreieck. Die folgenden Prüfungen trennen Arithmetik von Geometrie." },
          { "kind": "h3", "text": "Grundlegende Eingabebedingungen" },
          { "kind": "p", "text": "Die Eingaben müssen [[r>0]] und [[s>0]] erfüllen. Für ein rechtwinkliges Dreieck ist zusätzlich [[s>r]] erforderlich, weil [[c=s-r]] und die Hypotenuse positiv sein muss. Diese drei Bedingungen sind notwendig, aber nicht hinreichend." },
          { "kind": "h3", "text": "Eine fortgeschrittene Konsistenzprüfung für rechtwinklige Dreiecke" },
          { "kind": "p", "text": "Aus [[a+b=s+r]] und [[ab=2rs]] sind die beiden Katheten genau dann reell, wenn die Diskriminante [[\\Delta=(s+r)^2-8rs]] nicht negativ ist. Vereinfacht: [[[\\boxed{\\Delta=s^2-6rs+r^2}]]] Für reelle Kathetenlängen gilt [[\\Delta\\geq0]]. Da [[s]] größer als [[r]] sein muss, lautet die äquivalente Bedingung für rechtwinklige Dreiecke [[[\\boxed{\\frac{s}{r}\\geq3+2\\sqrt2}]]] oder [[[\\boxed{\\frac{r}{s}\\leq3-2\\sqrt2}]]] Gleichheit tritt beim gleichschenklig-rechtwinkligen Dreieck auf, der engstmöglichen Passung. Dies ist ein fortgeschrittener mathematischer Verträglichkeitstest, klar getrennt von den obigen Grundprüfungen." },
          { "kind": "h3", "text": "Gültiges Beispiel" },
          { "kind": "p", "text": "Gegeben [[r=2]] und [[s=12]], beträgt das Verhältnis [[\\frac{s}{r}=6]]. Da [[6>3+2\\sqrt2]] (etwa 5.83), können die Werte ein gültiges rechtwinkliges Dreieck beschreiben, und die zugehörigen Seiten sind 6, 8 und 10." },
          { "kind": "h3", "text": "Unverträgliches Beispiel" },
          { "kind": "p", "text": "Gegeben [[r=2]] und [[s=10]], beträgt das Verhältnis [[\\frac{s}{r}=5]], unterhalb der erforderlichen Schwelle von etwa 5.83. Dieses Paar kann kein rechtwinkliges Dreieck beschreiben, obwohl das Multiplizieren der Eingaben ein numerisches Ergebnis liefert. [[rs]] zu berechnen und zu bestätigen, dass die Messungen ein rechtwinkliges Dreieck beschreiben, sind zwei verschiedene Aufgaben. Dieser Leitfaden behauptet nicht, dass der Rechner diese Prüfung automatisch durchführt." }
        ]
      },
      "sec-heron": {
        "h2": "Wie vergleicht sich die Inkreisradius-Formel mit der Heronischen Formel?",
        "blocks": [
          { "kind": "p", "text": "Die Heronische Formel berechnet die Fläche aus allen drei Seiten: [[[\\boxed{K=\\sqrt{s(s-a)(s-b)(s-c)}}]]] Sie verwendet die drei Seitenlängen und den Halbumfang, sie funktioniert für jedes nicht entartete Dreieck, und sie braucht den Inkreisradius nicht als separate Eingabe. Vergleichen Sie sie mit [[[\\boxed{K=rs}]]] Die beiden sind nahe verwandt: Der Halbumfang [[s]] kommt in beiden vor, und zu beweisen, dass sie übereinstimmen, ist einer der saubersten Wege zu sehen, dass [[K=rs]] korrekt ist." },
          { "kind": "h3", "text": "Wann ist die Inkreisradius-Formel einfacher?" },
          { "kind": "p", "text": "[[K=rs]] ist besonders bequem, wenn Inkreisradius und Halbumfang bereits bekannt sind: eine einzige Multiplikation, keine Quadratwurzeln, kein Faktorisieren von Seitendifferenzen. Wenn ein Inkreis vermessen wurde oder wenn frühere Schritte bereits [[r]] und [[s]] geliefert haben, ist dies der kürzeste Weg zur Fläche." },
          { "kind": "h3", "text": "Wann ist die Heronische Formel nützlicher?" },
          { "kind": "p", "text": "Die Heronische Formel ist die bessere Wahl, wenn die drei Seitenlängen bekannt sind, der Inkreisradius aber nicht berechnet wurde. Sie erreicht die Fläche direkt aus [[a]], [[b]] und [[c]] ohne den Umweg über [[r]]. Keine der beiden Formeln ist universell genauer; sie sind bei konsistenten Eingaben exakt, und sie weichen nur bei inkonsistenten Eingaben voneinander ab." },
          { "kind": "h3", "text": "Beide Formeln an einem 3-4-5-Dreieck prüfen" },
          { "kind": "p", "text": "Gegeben [[a=3]], [[b=4]], [[c=5]], mit [[s=6]] und [[r=1]]. Mit dem Inkreisradius: [[K=1\\times6=6]]. Mit der Heronischen Formel: [[K=\\sqrt{6(6-3)(6-4)(6-5)}]], also [[K=\\sqrt{6\\times3\\times2\\times1}]], [[[\\boxed{K=6}]]] Die Ergebnisse stimmen überein, weil beide Formeln dieselbe Region messen; sie sind zwei Ausdrücke einer einzigen Fläche, und ihre Übereinstimmung ist ein starkes Zeichen, dass die Rechnung stimmt." }
        ]
      },
      "sec-legs": {
        "h2": "Warum liefert die Inkreisradius-Formel dieselbe Fläche wie die Kathetenformel?",
        "blocks": [
          { "kind": "p", "text": "Zwei Formeln beanspruchen dieselbe Fläche: [[K=\\frac{ab}{2}]] und [[K=rs]]. Schreibt man [[r]] und [[s]] durch die Seiten aus, erhält man [[rs=\\frac{a+b-c}{2}\\times\\frac{a+b+c}{2}]], also [[rs=\\frac{(a+b-c)(a+b+c)}{4}]]. Der Zähler ist eine Differenz von Quadraten: [[rs=\\frac{(a+b)^2-c^2}{4}]]. Wenden Sie den Satz des Pythagoras [[c^2=a^2+b^2]] an: [[rs=\\frac{a^2+2ab+b^2-a^2-b^2}{4}]], daher [[[\\boxed{rs=\\frac{ab}{2}}]]] Die beiden Formeln sind auf jedem rechtwinkligen Dreieck identisch; bei konsistenten Eingaben können sie nicht voneinander abweichen." },
          { "kind": "p", "text": "Prüfen Sie mit einem 3-4-5-Dreieck: [[r=1]], [[s=6]], [[rs=6]] und [[\\frac{ab}{2}=\\frac{3\\times4}{2}=6]]. Mit einem 6-8-10-Dreieck: [[r=2]], [[s=12]], [[rs=24]] und [[\\frac{ab}{2}=\\frac{6\\times8}{2}=24]]. Die vertraute Kathetenformel und die Inkreisradius-Formel sind dieselbe Größe in verschiedenen Kleidern." }
        ]
      },
      "sec-mistakes": {
        "h2": "Häufige Fehler bei der Flächenberechnung aus Inkreisradius und Halbumfang",
        "blocks": [
          { "kind": "p", "text": "Die meisten falschen Antworten stammen aus falsch beschrifteten Eingaben statt aus schlechter Arithmetik. Die fünfzehn Fehler unten decken fast jeden ab." },
          { "kind": "h3", "text": "1. Inkreisradius mit Umkreisradius verwechseln" },
          { "kind": "p", "text": "Der Inkreisradius ist der Kreis innen; der Umkreisradius ist der Kreis außen. In einem 6-8-10-Dreieck ist [[r=2]], aber [[R=\\frac{c}{2}=5]]. 5 für [[r]] zu verwenden ergibt [[K=5\\times12=60]] statt 24. Korrektur: Fragen Sie, ob der Kreis im Inneren des Dreiecks sitzt oder durch seine Eckpunkte verläuft." },
          { "kind": "h3", "text": "2. Den vollen Umfang statt des Halbumfangs verwenden" },
          { "kind": "p", "text": "Die Formel braucht [[s]], den halben Umfang. Mit [[r=2]] und vollem Umfang 24 statt [[s=12]] ist das Ergebnis [[K=2\\times24=48]], das Doppelte der korrekten 24. Korrektur: Halbieren Sie den Umfang vor dem Multiplizieren." },
          { "kind": "h3", "text": "3. Die fertige Antwort noch einmal durch zwei teilen" },
          { "kind": "p", "text": "Das Halbieren steckt bereits in [[s]]. [[2\\times12=24]] noch einmal durch zwei zu teilen ergibt 12, die Hälfte der wahren Fläche. Korrektur: Berechnen Sie [[rs]] und hören Sie auf." },
          { "kind": "h3", "text": "4. Inkreismittelpunkt mit Umkreismittelpunkt verwechseln" },
          { "kind": "p", "text": "Der Inkreismittelpunkt ist, wo sich die Winkelhalbierenden treffen; der Umkreismittelpunkt ist, wo sich die Mittelsenkrechten treffen, und bei einem rechtwinkligen Dreieck liegt er in der Mitte der Hypotenuse. Es sind verschiedene Punkte. Korrektur: Verfolgen Sie die korrekte Konstruktion für den Kreis, den Sie brauchen." },
          { "kind": "h3", "text": "5. Den Inkreisradius als Dreiecksseite behandeln" },
          { "kind": "p", "text": "Der Inkreisradius ist ein Abstand im Inneren des Dreiecks, keine seiner drei Seiten. Er gehört nie in [[a+b+c]]. Korrektur: Halten Sie [[r]] aus jedem Seitenlängenausdruck heraus." },
          { "kind": "h3", "text": "6. Eine falsche Inkreisradius-Formel für rechtwinklige Dreiecke verwenden" },
          { "kind": "p", "text": "Die Abkürzung für rechtwinklige Dreiecke lautet [[r=\\frac{a+b-c}{2}]], keine Variante mit falschem Vorzeichen oder falsch halbierter Seite. Ein häufiger Ausrutscher ist [[r=\\frac{a+c-b}{2}]], was eine andere Zahl ergibt, außer das Dreieck ist gleichschenklig. Korrektur: Die subtrahierte Seite ist immer die Hypotenuse [[c]]." },
          { "kind": "h3", "text": "7. Vergessen, dass c die Hypotenuse ist" },
          { "kind": "p", "text": "In der Abkürzung bedeutet [[c]] ausdrücklich die Hypotenuse. Korrektur: Beschriften Sie die längste Seite mit [[c]], bevor Sie die Formel anwenden." },
          { "kind": "h3", "text": "8. Die falsche Seite als Hypotenuse verwenden" },
          { "kind": "p", "text": "Eine Kathete für [[c]] zu wählen verfälscht sowohl [[r]] als auch [[s]]. Korrektur: Die Hypotenuse ist die Seite gegenüber dem rechten Winkel, immer die längste." },
          { "kind": "h3", "text": "9. Verschiedene Maßeinheiten mischen" },
          { "kind": "p", "text": "Ein Inkreisradius von 20 cm mit einem Halbumfang von 1 m ergibt vor der Umrechnung keine sinnvolle Zahl. Korrektur: Rechnen Sie zuerst in eine Einheit um, dann multiplizieren Sie." },
          { "kind": "h3", "text": "10. Null oder negative Längen eingeben" },
          { "kind": "p", "text": "Null- und negative Längen beschreiben kein Dreieck. Korrektur: Prüfen Sie, dass jede eingegebene Länge positiv ist." },
          { "kind": "h3", "text": "11. Annehmen, dass jedes positive r- und s-Paar ein rechtwinkliges Dreieck darstellt" },
          { "kind": "p", "text": "Wie oben gezeigt, liefert [[r=2]] mit [[s=10]] die Zahl 20, aber kein rechtwinkliges Dreieck. Korrektur: Führen Sie die Prüfung [[s/r\\geq3+2\\sqrt2]] durch, wenn die Geometrie zählt." },
          { "kind": "h3", "text": "12. Die Fläche in linearen Einheiten angeben" },
          { "kind": "p", "text": "Eine Fläche von 24 m² ist nicht 24 m. Korrektur: Schreiben Sie die Quadrateinheit zur Zahl." },
          { "kind": "h3", "text": "13. Den Inkreisradius zu früh runden" },
          { "kind": "p", "text": "[[r]] vor dem Multiplizieren zu runden verschiebt die ganze Fläche. Korrektur: Behalten Sie in den Zwischenschritten die volle Genauigkeit und runden Sie nur die endgültige Antwort." },
          { "kind": "h3", "text": "14. Halbumfang mit der Summe zweier Seiten verwechseln" },
          { "kind": "p", "text": "Der Halbumfang ist die Hälfte der Summe aller drei Seiten, nicht die Summe zweier. Korrektur: Addieren Sie alle drei Seiten und halbieren Sie dann." },
          { "kind": "h3", "text": "15. Annehmen, dass die Formel nur für rechtwinklige Dreiecke funktioniert" },
          { "kind": "p", "text": "[[K=rs]] gilt für jedes nicht entartete Dreieck; nur die Abkürzung [[r=\\frac{a+b-c}{2}]] ist spezifisch für rechtwinklige Dreiecke. Korrektur: Wenden Sie die Flächenformel frei an, verwenden Sie aber für nicht rechtwinklige Dreiecke die allgemeine Inkreisradius-Herleitung." },
          { "kind": "h3", "text": "Falsch gegen richtig: Ein konkretes Beispiel" },
          { "kind": "p", "text": "Nehmen Sie ein 6-8-10-Dreieck. Richtig: [[r=2]], [[s=12]], [[K=2\\times12=24]]. Fälschlich den vollen Umfang verwenden: [[K=2\\times24=48]], was die Fläche verdoppelt. Fälschlich die korrekte Antwort noch einmal durch zwei teilen: [[K=\\frac{24}{2}=12]], was sie halbiert. Beide Fehler stammen aus dem falschen Umgang mit der Hälfte, die in [[s]] steckt." }
        ]
      },
      "sec-verify": {
        "h2": "So prüfen Sie, ob Ihre rechtwinklige Dreiecksfläche korrekt ist",
        "blocks": [
          { "kind": "p", "text": "Mehrere unabhängige Prüfungen fangen die häufigen Fehler. Das 3-4-5-Dreieck demonstriert die meisten davon." },
          { "kind": "h3", "text": "Methode 1: Inkreisradius und Halbumfang" },
          { "kind": "p", "text": "Berechnen Sie [[K=rs]] mit den eingegebenen Werten neu. Für [[r=1]] und [[s=6]]: [[K=1\\times6=6]]. Ein zweiter Durchgang fängt Tippfehler." },
          { "kind": "h3", "text": "Methode 2: Zwei senkrechte Katheten" },
          { "kind": "p", "text": "Wenn die Katheten bekannt oder zurückgewonnen sind, muss [[K=\\frac{ab}{2}]] übereinstimmen. Hier entspricht [[\\frac{3\\times4}{2}=6]] dem Wert [[1\\times6=6]]: zwei Methoden, ein Dreieck, eine Antwort." },
          { "kind": "h3", "text": "Methode 3: Satz des Pythagoras" },
          { "kind": "p", "text": "Bestätigen Sie [[a^2+b^2=c^2]]: [[9+16=25]]. Wenn die Seiten ihn nicht erfüllen, ist die Dreiecksidentifikation falsch." },
          { "kind": "h3", "text": "Methode 4: Rechtwinkliger Inkreisradius" },
          { "kind": "p", "text": "Bestätigen Sie [[r=\\frac{a+b-c}{2}]]: [[\\frac{3+4-5}{2}=1]]. Eine Abweichung bedeutet, dass der eingegebene Inkreisradius nicht zu diesem Dreieck gehört." },
          { "kind": "h3", "text": "Methode 5: Halbumfang" },
          { "kind": "p", "text": "Bestätigen Sie [[s=\\frac{a+b+c}{2}]]: [[\\frac{3+4+5}{2}=6]]. Das fängt Verwechslungen zwischen Umfang und Halbumfang." },
          { "kind": "h3", "text": "Methode 6: Heronische Formel" },
          { "kind": "p", "text": "Bestätigen Sie [[K=\\sqrt{s(s-a)(s-b)(s-c)}]]: [[K=\\sqrt{6\\times3\\times2\\times1}=6]]. Die Übereinstimmung unabhängiger Formeln ist die stärkste verfügbare Prüfung." },
          { "kind": "p", "text": "Warum die Übereinstimmung unabhängiger Formeln eine nützliche mathematische Prüfung ist: Ein Fehler auf einem Weg wiederholt sich selten auf einem anderen; zwei übereinstimmende Antworten aus verschiedenen Formeln bedeuten also, dass Eingaben und Rechnung korrekt sind." }
        ],
        "imgAlt": "3-4-5-Dreiecksfläche verglichen über K = rs, K = ab/2 und die Heronische Formel",
        "figcaption": "Drei Methoden, eine Antwort: K = rs, K = ab/2 und die Heronische Formel ergeben alle 6 für das 3-4-5-Dreieck."
      },
      "sec-units": {
        "h2": "Maßeinheiten bei Inkreisradius- und Halbumfang-Berechnungen verstehen",
        "blocks": [
          { "kind": "p", "text": "Fläche ist zweidimensional, ihre Einheit ist also das Quadrat der Längeneinheit. In Symbolen: [[\\text{cm}\\times\\text{cm}=\\text{cm}^2]]. Dasselbe gilt für Meter und Quadratmeter, Millimeter und Quadratmillimeter, Fuß und Quadratfuß, Zoll und Quadratzoll. Die Einheitenwähler existieren, damit das Ergebnis korrekt beschriftet werden kann." },
          { "kind": "h3", "text": "Warum beide Eingaben verträgliche Einheiten verwenden müssen" },
          { "kind": "p", "text": "Inkreisradius und Halbumfang müssen vor Anwendung der Formel in derselben Einheit ausgedrückt sein. Wenn [[r=20\\text{ cm}]] und [[s=1\\text{ m}]], rechnen Sie zuerst um: [[1\\text{ m}=100\\text{ cm}]]. Dann [[K=20\\times100]], [[[\\boxed{K=2,000\\text{ cm}^2}]]], oder äquivalent [[[\\boxed{K=0.2\\text{ m}^2}]]] Messungen in verschiedenen Einheiten zu multiplizieren erzeugt eine Zahl ohne saubere Einheit; rechnen Sie also zuerst um und dann." },
          { "kind": "h3", "text": "Warum Sie frühes Runden vermeiden sollten" },
          { "kind": "p", "text": "Gerundete Werte von [[r]] oder [[s]] können die endgültige Fläche leicht beeinflussen, weil der Inkreisradius direkt in sie hineinmultipliziert wird. Behalten Sie in den Zwischenrechnungen ausreichende Genauigkeit und runden Sie nur die endgültige Antwort. Dieser Leitfaden behauptet nichts über die interne Genauigkeit des Rechners hinaus, was seine Oberfläche zeigt." },
          { "kind": "h3", "text": "Exakte Messungen gegenüber praktischen Messungen" },
          { "kind": "p", "text": "Exakte mathematische Maße, wie der Inkreisradius 1 eines 3-4-5-Dreiecks, verhalten sich anders als Messungen mit physischen Instrumenten. Die Instrumentenunsicherheit fließt in die Fläche ein; behandeln Sie die letzte Ziffer also nur so zuverlässig wie die Eingaben. Ein bandgemessener Inkreisradius von 2 cm könnte in Wahrheit 1,9 oder 2,1 sein, und die Fläche trägt diese Unsicherheit mit sich." }
        ]
      },
      "sec-faq": {
        "h2": "Häufig gestellte Fragen",
        "blocks": [
          { "kind": "p", "text": "Hier finden Sie Antworten auf die häufigsten Fragen zur Fläche aus Inkreisradius und Halbumfang." }
        ]
      },
      "sec-related": {
        "h2": "Passende Rechner für rechtwinklige Dreiecke entdecken",
        "blocks": [
          { "kind": "p", "text": "Unterschiedliche Messungen erfordern unterschiedliche Rechner." }
        ]
      },
      "sec-conclusion": {
        "h2": "Zwei Messungen tragen die ganze Fläche",
        "blocks": [
          { "kind": "p", "text": "Inkreisradius und Halbumfang wirken wie bescheidene Eingaben, doch zusammen kodieren sie die volle Ausdehnung des Dreiecks. Die Herleitung über die drei kleineren Dreiecke zeigt, warum das Produkt exakt ist; das Tangentenabschnitt-Argument zeigt, woher die Abkürzung für rechtwinklige Dreiecke kommt; und die Vergleiche mit der Kathetenformel und der Heronischen Formel zeigen, dass das Ergebnis immer mit dem Rest der Geometrie übereinstimmt." },
          { "kind": "p", "text": "Die Arbeitsgewohnheit ist einfach: Bestätigen Sie, was r und s wirklich sind, halten Sie die Einheiten konsistent und prüfen Sie die Antwort über eine unabhängige Formel. Wenn diese Gewohnheiten sitzen, ist K = rs eine der verlässlichsten Flächenberechnungen in der Dreiecksgeometrie." }
        ]
      }
    }
  },
  "it": {
    "faqs": [
      {
        "question": "Qual è la formula dell'area con raggio inscritto e semiperimetro?",
        "answer": "Moltiplica il raggio inscritto r per il semiperimetro s: K = rs. Per esempio, r = 2 e s = 12 danno K = 24 unità quadrate. La formula vale per ogni triangolo non degenere, non solo per i triangoli rettangoli."
      },
      {
        "question": "Che cos'è il raggio inscritto in un triangolo rettangolo?",
        "answer": "È il raggio del cerchio inscritto nel triangolo, la distanza perpendicolare dall'incentro a un qualsiasi lato. In un triangolo 3-4-5 il raggio inscritto è 1; in un triangolo 6-8-10 è 2."
      },
      {
        "question": "Come si calcola il raggio inscritto di un triangolo rettangolo?",
        "answer": "Dai tre lati, usa la scorciatoia r = (a + b - c) / 2, dove a e b sono i cateti e c è l'ipotenusa. Per un triangolo 5-12-13 questo dà r = 2."
      },
      {
        "question": "Come si calcola il semiperimetro?",
        "answer": "Somma i tre lati e dimezza il totale: s = (a + b + c) / 2. Per un triangolo 5-12-13, s = 15. È sempre maggiore di ciascun singolo lato."
      },
      {
        "question": "Perché l'area è uguale al raggio inscritto per il semiperimetro?",
        "answer": "Congiungendo l'incentro ai tre vertici, il triangolo si divide in tre triangoli più piccoli di altezza comune r e basi a, b e c. Le loro aree ar/2 + br/2 + cr/2 si raccolgono in r(a+b+c)/2 e, poiché s = (a+b+c)/2, il totale è rs."
      },
      {
        "question": "La formula funziona per i triangoli non rettangoli?",
        "answer": "Sì. K = rs vale per ogni triangolo non degenere. Solo la scorciatoia r = (a+b-c)/2 è specifica dei triangoli rettangoli, perché si basa sul quadrato formato all'angolo retto."
      },
      {
        "question": "Qual è la differenza tra raggio inscritto e raggio circoscritto?",
        "answer": "Il raggio inscritto r è il raggio del cerchio interno al triangolo, tangente ai tre lati; il raggio circoscritto R è il raggio del cerchio passante per i tre vertici. Per un triangolo rettangolo, R = c/2."
      },
      {
        "question": "Si può calcolare l'area senza conoscere tutti e tre i lati?",
        "answer": "Sì. Se il raggio inscritto e il semiperimetro sono già noti, K = rs dà l'area direttamente con una sola moltiplicazione, senza bisogno delle lunghezze dei lati."
      },
      {
        "question": "Il semiperimetro è la stessa cosa della metà del perimetro?",
        "answer": "Sì, esattamente: s = P/2 = (a+b+c)/2. La distinzione conta perché la formula richiede il valore dimezzato; usare il perimetro intero raddoppia la risposta."
      },
      {
        "question": "Come è legato il raggio inscritto ai tre lati?",
        "answer": "In un triangolo rettangolo, r = (a+b-c)/2, dove a e b sono i cateti e c è l'ipotenusa. Vale anche s + r = a + b e s - r = c, quindi i lati si possono ricavare da r e s."
      },
      {
        "question": "Qual è la differenza tra la formula di Erone e la formula del raggio inscritto?",
        "answer": "La formula di Erone, K = sqrt(s(s-a)(s-b)(s-c)), richiede tutti e tre i lati; la formula del raggio inscritto, K = rs, richiede solo r e s. Usa Erone quando hai i lati, e K = rs quando r e s sono già disponibili. Entrambe danno la stessa area su dati coerenti."
      },
      {
        "question": "Come si può verificare l'area calcolata?",
        "answer": "Verifica con metodi indipendenti: la formula dei cateti K = ab/2, il teorema di Pitagora, la scorciatoia del raggio inscritto, la definizione di semiperimetro e la formula di Erone. Quando più metodi concordano, i dati e i calcoli sono corretti."
      }
    ],
    "relatedHeading": "Esplora i calcolatori correlati per triangoli rettangoli",
    "relatedItems": [
      "Calcolatore dell'area del triangolo rettangolo dai cateti",
      "Calcolatore dell'area del triangolo rettangolo da ipotenusa e altezza",
      "Calcolatore dell'area del triangolo rettangolo da un angolo",
      "Calcolatore dell'area del triangolo rettangolo dall'altezza",
      "Calcolatore del raggio inscritto del triangolo rettangolo",
      "Calcolatore del semiperimetro del triangolo rettangolo"
    ],
    "relatedIntro": "Misure diverse richiedono calcolatori diversi.",
    "faqHeading": "Domande frequenti",
    "tocHeading": "In questa guida",
    "tocItems": {
      "sec-intro": "Come calcolare l'area di un triangolo rettangolo con raggio inscritto e semiperimetro",
      "sec-incircle": "Che cos'è un cerchio inscritto in geometria?",
      "sec-semiperimeter": "Che cos'è il semiperimetro di un triangolo?",
      "sec-formula": "Perché l'area è uguale al raggio inscritto per il semiperimetro",
      "sec-inradius": "Come trovare il raggio inscritto di un triangolo rettangolo",
      "sec-howto": "Come usare il calcolatore di area da raggio inscritto e semiperimetro",
      "sec-examples": "Esempi risolti passo passo",
      "sec-applications": "Applicazioni nel mondo reale",
      "sec-relationship": "Come raggio inscritto e semiperimetro sono legati ai tre lati",
      "sec-valid": "Verificare se le misure sono valide",
      "sec-heron": "Confronto tra la formula del raggio inscritto e la formula di Erone",
      "sec-legs": "Perché la formula del raggio inscritto concorda con la formula dei cateti",
      "sec-mistakes": "Errori comuni",
      "sec-verify": "Come verificare la tua area",
      "sec-units": "Unità di misura e arrotondamenti",
      "sec-related": "Esplora i calcolatori correlati per triangoli rettangoli",
      "sec-faq": "Domande frequenti",
      "sec-conclusion": "Conclusione"
    },
    "sections": {
      "sec-intro": {
        "h2": "Come calcolare l'area di un triangolo rettangolo con raggio inscritto e semiperimetro",
        "blocks": [
          { "kind": "p", "text": "Un triangolo rettangolo ha un raggio inscritto di [[r=2]] e un semiperimetro di [[s=12]]. Applica [[K=r\\times s]]: [[K=2\\times12]], [[[\\boxed{K=24\\text{ square units}}]]] Il triangolo racchiude 24 unità quadrate di superficie piana. Questo è il metodo completo che il calcolatore automatizza: due misure, una moltiplicazione, una risposta." },
          { "kind": "p", "text": "Il raggio inscritto è il raggio del cerchio che si adatta perfettamente all'interno del triangolo toccando tutti e tre i lati. Il semiperimetro è metà della distanza attorno al triangolo. Insieme bastano a determinare l'area perché il raggio del cerchio funge da altezza di tre triangoli più piccoli le cui basi sono i lati del triangolo. Questa identità vale per ogni triangolo non degenere, non solo per i triangoli rettangoli; ciò che è speciale nei triangoli rettangoli è il modo rapido in cui il raggio inscritto stesso si può calcolare dai tre lati. È utilissima quando il cerchio inscritto è stato misurato direttamente, o quando il raggio inscritto e il semiperimetro sono già noti da lavori precedenti." }
        ]
      },
      "sec-incircle": {
        "h2": "Che cos'è un cerchio inscritto in geometria?",
        "blocks": [
          { "kind": "p", "text": "La notazione usata ovunque è: [[A]], [[B]] e [[C]] sono i vertici e gli angoli con [[C=90^\\circ]]; [[a]] e [[b]] sono i due cateti; [[c]] è l'ipotenusa opposta a [[C]]; [[r]] è il raggio inscritto; [[I]] è l'incentro; [[s]] è il semiperimetro; [[P]] è il perimetro; e [[K]] è l'area, usata ovunque per non confonderla mai con l'angolo [[A]]." },
          { "kind": "h3", "text": "Definizione di cerchio inscritto" },
          { "kind": "p", "text": "Un cerchio inscritto è il cerchio più grande che sta dentro un triangolo toccando tutti e tre i suoi lati. Resta interamente all'interno perché ogni lato del triangolo è una tangente al cerchio: il cerchio raggiunge il lato in esattamente un punto e resta dalla parte interna. Un cerchio che si trova solo vicino a un lato non conta; il cerchio inscritto deve essere tangente a ciascun lato, toccarlo in un unico punto e poi tornare verso l'interno. Ogni triangolo non degenere ha esattamente un tale cerchio, con un centro unico, perché le tre rette non sono parallele e la loro geometria fissa completamente il cerchio." },
          { "kind": "h3", "text": "Che cos'è il raggio inscritto?" },
          { "kind": "p", "text": "Il raggio inscritto è la distanza dall'incentro a un qualsiasi lato del triangolo. Se [[I]] è l'incentro e [[D]] è il punto in cui il cerchio inscritto tocca un lato, allora [[r=ID]]. Il raggio del cerchio è la distanza più breve dal suo centro al lato tangente, e questa distanza più breve è la stessa per tutti e tre i lati, ed è per questo che il cerchio è tangente a tutti e tre i lati invece di esserne solo vicino." },
          { "kind": "h3", "text": "Perché il raggio inscritto è perpendicolare a ciascun lato?" },
          { "kind": "p", "text": "Una proprietà di base dei cerchi dice che in ogni punto in cui una retta tocca un cerchio, il raggio condotto a quel punto incontra la retta ad angolo retto. Quindi se [[D]] è il punto di tangenza sul lato [[AB]], allora [[ID\\perp AB]]. Lo stesso vale per gli altri due lati. Questa perpendicolarità non è decorativa: è ciò che permette a ciascun raggio di fungere da altezza di un triangolo più piccolo quando si ricava la formula dell'area, poiché l'altezza di un triangolo deve essere perpendicolare alla sua base." },
          { "kind": "h3", "text": "Capire l'incentro" },
          { "kind": "p", "text": "L'incentro [[I]] è il punto in cui si incontrano le tre bisettrici interne del triangolo. Ogni bisettrice è l'insieme dei punti equidistanti dai due lati che formano quell'angolo, quindi un punto che giace su tutte e tre le bisettrici è equidistante da tutti e tre i lati, e deve trovarsi dentro il triangolo. Quella distanza comune è esattamente il raggio inscritto, e il cerchio di centro [[I]] e raggio [[r]] tocca ciascun lato una volta: il cerchio inscritto." },
          { "kind": "h3", "text": "Il raggio inscritto è uguale al raggio circoscritto?" },
          { "kind": "p", "text": "No. Il raggio inscritto [[r]] è il raggio del cerchio dentro il triangolo, mentre il raggio circoscritto [[R]] è il raggio del cerchio che passa per tutti e tre i vertici, il cerchio circoscritto. Per un triangolo rettangolo il centro del cerchio circoscritto è il punto medio dell'ipotenusa, quindi [[[\\boxed{R=\\frac{c}{2}}]]] I due raggi descrivono cerchi completamente diversi: uno è inscritto nel triangolo, l'altro è tracciato attorno. Confonderli è uno degli errori più comuni in questo argomento, quindi tienili separati: [[r]] per dentro, [[R]] per attorno." }
        ],
        "imgAlt": "Triangolo ABC con cerchio inscritto, incentro I, raggio r, punti di tangenza e cerchio circoscritto",
        "figcaption": "Il triangolo ABC e il suo cerchio inscritto: incentro I, raggio inscritto r = ID con ID perpendicolare a ciascun lato, più il cerchio circoscritto per confronto."
      },
      "sec-semiperimeter": {
        "h2": "Che cos'è il semiperimetro di un triangolo?",
        "blocks": [
          { "kind": "h3", "text": "Definizione di semiperimetro" },
          { "kind": "p", "text": "Il semiperimetro è metà del perimetro totale di un triangolo: [[[\\boxed{s=\\frac{a+b+c}{2}}]]], dove [[a]] e [[b]] sono i cateti e [[c]] è l'ipotenusa. È una lunghezza, come un qualsiasi lato, e si guadagna il suo posto nella formula dell'area perché combina tutti e tre i lati in un unico numero." },
          { "kind": "h3", "text": "Differenza tra perimetro e semiperimetro" },
          { "kind": "p", "text": "Il perimetro è l'intera distanza attorno al triangolo, [[P=a+b+c]], mentre il semiperimetro ne è la metà, [[s=\\frac{P}{2}]]. Per un triangolo 3-4-5: [[P=3+4+5=12]] e [[s=\\frac{12}{2}=6]]. Il semiperimetro non è la lunghezza del contorno; è la sua metà, e inserire il perimetro intero in [[K=rs]] raddoppierebbe la vera area." },
          { "kind": "h3", "text": "Perché il semiperimetro si usa nella formula dell'area?" },
          { "kind": "p", "text": "Congiungendo l'incentro ai tre vertici, il triangolo si divide in tre triangoli più piccoli, ciascuno di altezza perpendicolare [[r]]. Le loro basi sono [[a]], [[b]] e [[c]], quindi la loro area combinata è [[K=\\frac12r(a+b+c)]]. Poiché [[s=\\frac{a+b+c}{2}]], il mezzo perimetro è già incorporato in [[s]], dando [[K=rs]]. La prossima sezione lo ricava per intero." },
          { "kind": "h3", "text": "Il semiperimetro può essere minore di un lato?" },
          { "kind": "p", "text": "No. La disuguaglianza triangolare dice che per ogni triangolo [[a+b>c]], quindi [[s=\\frac{a+b+c}{2}>c]]. Lo stesso ragionamento vale per gli altri due lati: [[s>a]] e [[s>b]]. Il semiperimetro è sempre maggiore di ciascun singolo lato. È un rapido controllo di coerenza sui dati: se un semiperimetro dichiarato è minore di un qualsiasi lato, i numeri non possono descrivere un vero triangolo." }
        ]
      },
      "sec-formula": {
        "h2": "Perché l'area di un triangolo è uguale al raggio inscritto per il semiperimetro?",
        "blocks": [
          { "kind": "p", "text": "Parti dalla regola standard dell'area di un triangolo: [[K=\\frac12\\times\\text{base}\\times\\text{height}]]. Tracciando segmenti dall'incentro [[I]] ai tre vertici, il triangolo originale si divide in tre triangoli più piccoli. Ogni triangolo più piccolo ha una base uguale a un lato del triangolo originale e un'altezza perpendicolare uguale al raggio inscritto [[r]], perché il raggio incontra ciascun lato ad angolo retto. Funziona per ogni triangolo non degenere; per questo calcolatore il triangolo è rettangolo, ma l'identità dell'area in sé è del tutto generale." },
          { "kind": "h3", "text": "Area del primo triangolo più piccolo" },
          { "kind": "p", "text": "Il triangolo più piccolo che poggia sul lato [[a]] ha base [[a]] e altezza [[r]]: [[[\\boxed{K_1=\\frac{ar}{2}}]]]" },
          { "kind": "h3", "text": "Area del secondo triangolo più piccolo" },
          { "kind": "p", "text": "Il triangolo più piccolo che poggia sul lato [[b]] ha base [[b]] e altezza [[r]]: [[[\\boxed{K_2=\\frac{br}{2}}]]]" },
          { "kind": "h3", "text": "Area del terzo triangolo più piccolo" },
          { "kind": "p", "text": "Il triangolo più piccolo che poggia sul lato [[c]] ha base [[c]] e altezza [[r]]: [[[\\boxed{K_3=\\frac{cr}{2}}]]]" },
          { "kind": "h3", "text": "Somma le tre aree" },
          { "kind": "p", "text": "I tre triangoli più piccoli tassellano l'originale senza sovrapposizioni, quindi [[K=K_1+K_2+K_3]]. Sostituendo: [[K=\\frac{ar}{2}+\\frac{br}{2}+\\frac{cr}{2}]]. Raccogli [[\\frac{r}{2}]]: [[K=\\frac{r(a+b+c)}{2}]]. Ricorda [[s=\\frac{a+b+c}{2}]], quindi [[[\\boxed{K=r\\times s}]]] Ogni passaggio è giustificato: la tassellazione è esatta, l'altezza [[r]] è comune, e il semiperimetro assorbe la divisione per due." },
          { "kind": "h3", "text": "Perché questa formula non richiede un'altra divisione per due?" },
          { "kind": "p", "text": "Perché la metà è già incorporata nel semiperimetro. Le tre metà si combinano in [[\\frac{r(a+b+c)}{2}]], e [[s]] è esattamente metà del perimetro, quindi dividere per due una seconda volta ridurrebbe l'espressione corretta a un quarto. Calcola [[r\\times s]] e fermati lì; un ulteriore dimezzamento è un errore, non una correzione." }
        ],
        "imgAlt": "Cerchio inscritto che divide il triangolo ABC in tre triangoli più piccoli di altezza r e basi a, b, c",
        "figcaption": "Tre triangoli più piccoli di altezza comune r e basi a, b, c: le loro aree ar/2 + br/2 + cr/2 sommano a rs."
      },
      "sec-inradius": {
        "h2": "Come calcolare il raggio inscritto dalle tre lunghezze dei lati",
        "blocks": [
          { "kind": "p", "text": "Quando i tre lati sono noti, il raggio inscritto di un triangolo rettangolo segue una scorciatoia che evita del tutto di tracciare il cerchio inscritto: [[[\\boxed{r=\\frac{a+b-c}{2}}]]], dove [[a]] e [[b]] sono i cateti perpendicolari e [[c]] è l'ipotenusa. È uno dei fatti più utili nella geometria del triangolo rettangolo." },
          { "kind": "h3", "text": "Ricavare la formula del raggio inscritto del triangolo rettangolo" },
          { "kind": "p", "text": "La dimostrazione usa il teorema dei segmenti di tangente uguali: da un punto esterno comune, i due segmenti di tangente condotti a un cerchio hanno lunghezze uguali. Siano [[x]] le lunghezze di tangente dal vertice [[A]], [[y]] dal vertice [[B]] e [[z]] dal vertice [[C]]. All'angolo retto [[C]], le due tangenti del cerchio inscritto corrono lungo i cateti perpendicolari e hanno ciascuna lunghezza [[r]], formando un piccolo quadrato con i due raggi, quindi [[z=r]]. I lati sono allora [[a=y+r]], [[b=x+r]] e [[c=x+y]]. Sottrai: [[a+b-c=(y+r)+(x+r)-(x+y)]], quindi [[a+b-c=2r]], dando [[[\\boxed{r=\\frac{a+b-c}{2}}]]] Il quadrato all'angolo retto è il motivo per cui questa scorciatoia appartiene ai soli triangoli rettangoli." },
          { "kind": "h3", "text": "Esempio con un triangolo 3-4-5" },
          { "kind": "p", "text": "Dati [[a=3]], [[b=4]], [[c=5]]: [[r=\\frac{3+4-5}{2}]], [[[\\boxed{r=1}]]] Il raggio del cerchio inscritto è esattamente 1, senza alcuna costruzione." },
          { "kind": "h3", "text": "Esempio con un triangolo 5-12-13" },
          { "kind": "p", "text": "Dati [[a=5]], [[b=12]], [[c=13]]: [[r=\\frac{5+12-13}{2}]], [[[\\boxed{r=2}]]] Anche qui, il raggio inscritto discende direttamente dalle lunghezze dei lati." },
          { "kind": "h3", "text": "Calcolare il semiperimetro allo stesso tempo" },
          { "kind": "p", "text": "Con gli stessi tre lati, calcola [[s=\\frac{a+b+c}{2}]] insieme a [[r]]. Per il triangolo 5-12-13: [[s=\\frac{5+12+13}{2}=15]], e poi [[K=rs=2\\times15=30]]. Un unico passaggio sui tre lati fornisce entrambi gli input del calcolatore e l'area stessa." },
          { "kind": "h3", "text": "Quando usare questa scorciatoia?" },
          { "kind": "p", "text": "Usala ogni volta che i tre lati sono noti ma il cerchio inscritto non è stato né misurato né tracciato: gli esercizi dei manuali, le dimensioni di costruzione e i dati di rilievo danno di solito lunghezze di lati, non un raggio inscritto. La scorciatoia li converte in [[r]] in una riga. Quando il raggio inscritto è invece la quantità misurata, inseriscilo direttamente e salta la conversione." }
        ],
        "imgAlt": "Triangolo 3-4-5 con segmenti di tangente uguali e scorciatoia r = (a+b-c)/2 = 1",
        "figcaption": "Segmenti di tangente su un triangolo 3-4-5: lunghezze uguali da ciascun vertice danno r = (3 + 4 - 5)/2 = 1."
      },
      "sec-howto": {
        "h2": "Come usare il calcolatore di area del triangolo rettangolo da raggio inscritto e semiperimetro",
        "blocks": [
          { "kind": "p", "text": "Il calcolatore richiede esattamente due input. La procedura qui sotto segue l'ordine dello schermo, dalle misure note al risultato verificato." }
        ],
        "steps": [
          "<strong>Identifica il raggio inscritto r.</strong> Il raggio del cerchio inscritto, la distanza perpendicolare dall'incentro a un qualsiasi lato.",
          "<strong>Identifica il semiperimetro s.</strong> Metà del perimetro totale del triangolo.",
          "<strong>Se i tre lati sono noti, calcola r con [[r=\\frac{a+b-c}{2}]].</strong> Qui [[a]] e [[b]] sono i cateti e [[c]] è l'ipotenusa.",
          "<strong>Calcola s con [[s=\\frac{a+b+c}{2}]].</strong>",
          "<strong>Inserisci il raggio inscritto nel primo campo.</strong>",
          "<strong>Inserisci il semiperimetro nel secondo campo.</strong>",
          "<strong>Seleziona unità di lunghezza compatibili.</strong> Entrambe le misure devono usare la stessa unità.",
          "<strong>Verifica che entrambi i valori siano positivi.</strong> Lunghezze nulle o negative non descrivono alcun triangolo.",
          "<strong>Fai clic su «Calculate Area».</strong>",
          "<strong>Esamina il risultato.</strong> L'area appare nelle unità quadrate corrispondenti agli input.",
          "<strong>Conferma che la risposta sia espressa in unità quadrate.</strong> I metri danno metri quadrati; i centimetri danno centimetri quadrati.",
          "<strong>Rivedi la soluzione matematica.</strong> Mostra la sostituzione e i calcoli.",
          "<strong>Usa «Reset» quando inizi un nuovo calcolo.</strong> Azzera entrambi i campi così il calcolo successivo parte pulito."
        ],
        "closingParagraphs": [
          "Il calcolatore non chiede le tre lunghezze dei lati: il raggio inscritto e il semiperimetro contengono già tutto ciò di cui la formula [[K=rs]] ha bisogno."
        ]
      },
      "sec-examples": {
        "h2": "Esempi passo passo di calcolo dell'area con raggio inscritto e semiperimetro",
        "blocks": [
          { "kind": "p", "text": "Quattro esempi risolti costruiscono il metodo dal familiare verso l'alto. Ognuno calcola il semiperimetro e il raggio inscritto dai tre lati, applica [[K=rs]] mostrando ogni sostituzione, e verifica con la formula dei cateti." },
          { "kind": "h3", "text": "Esempio 1: triangolo rettangolo 3-4-5" },
          { "kind": "p", "text": "Dati [[a=3]], [[b=4]], [[c=5]]. Passo 1: semiperimetro, [[s=\\frac{3+4+5}{2}=6]]. Passo 2: raggio inscritto, [[r=\\frac{3+4-5}{2}=1]]. Passo 3: applica la formula, [[K=1\\times6]], [[[\\boxed{K=6\\text{ square units}}]]] Verifica: [[K=\\frac{3\\times4}{2}=6]]." },
          { "kind": "h3", "text": "Esempio 2: triangolo rettangolo 6-8-10" },
          { "kind": "p", "text": "Dati [[a=6]], [[b=8]], [[c=10]]. Allora [[s=\\frac{6+8+10}{2}=12]], [[r=\\frac{6+8-10}{2}=2]], e [[K=2\\times12]], [[[\\boxed{K=24\\text{ square units}}]]] Verifica: [[K=\\frac{6\\times8}{2}=24]]." },
          { "kind": "h3", "text": "Esempio 3: triangolo rettangolo 5-12-13" },
          { "kind": "p", "text": "Dati [[a=5]], [[b=12]], [[c=13]]. Allora [[s=\\frac{5+12+13}{2}=15]], [[r=\\frac{5+12-13}{2}=2]], e [[K=2\\times15]], [[[\\boxed{K=30\\text{ square units}}]]] Verifica: [[K=\\frac{5\\times12}{2}=30]]." },
          { "kind": "h3", "text": "Esempio 4: triangolo rettangolo 8-15-17" },
          { "kind": "p", "text": "Dati [[a=8]], [[b=15]], [[c=17]]. Allora [[s=\\frac{8+15+17}{2}=20]], [[r=\\frac{8+15-17}{2}=3]], e [[K=3\\times20]], [[[\\boxed{K=60\\text{ square units}}]]] Verifica: [[K=\\frac{8\\times15}{2}=60]]." },
          { "kind": "h3", "text": "Confronto degli esempi di base" }
        ],
        "table": {
          "headers": ["Triangolo", "Semiperimetro s", "Raggio inscritto r", "Area K = rs"],
          "rows": [
            ["3-4-5", "6", "1", "6"],
            ["6-8-10", "12", "2", "24"],
            ["5-12-13", "15", "2", "30"],
            ["8-15-17", "20", "3", "60"]
          ]
        }
      },
      "sec-applications": {
        "h2": "Applicazioni nel mondo reale dell'area del triangolo rettangolo con raggio inscritto e semiperimetro",
        "blocks": [
          { "kind": "p", "text": "Dodici situazioni risolte mostrano la formula a scale diverse e in unità diverse. Ognuna nomina l'oggetto triangolare, dà le tre misure dei lati, calcola il raggio inscritto e il semiperimetro, applica la formula principale passo passo e dichiara l'ipotesi alla base. Ogni esempio è un pannello, una sezione, un profilo a triangolo rettangolo o un modello geometrico semplificato; dove l'oggetto reale è curvo o irregolare, il calcolo copre solo il triangolo modellato." },
          { "kind": "h3", "text": "Esempio 1: finestra in vetro triangolare" },
          { "kind": "p", "text": "Una finestra in vetro a triangolo rettangolo ha [[a=3\\text{ m}]], [[b=4\\text{ m}]], [[c=5\\text{ m}]]. Raggio inscritto: [[r=\\frac{3+4-5}{2}=1\\text{ m}]]. Semiperimetro: [[s=\\frac{3+4+5}{2}=6\\text{ m}]]. Area: [[K=1\\times6]], [[[\\boxed{K=6\\text{ m}^2}]]] È l'area di vetro piana prima di considerare le dimensioni del telaio." },
          { "kind": "h3", "text": "Esempio 2: staffa di supporto in acciaio" },
          { "kind": "p", "text": "Una piastra triangolare di supporto in acciaio ha [[a=5\\text{ cm}]], [[b=12\\text{ cm}]], [[c=13\\text{ cm}]]. Allora [[r=2\\text{ cm}]], [[s=15\\text{ cm}]], [[[\\boxed{K=30\\text{ cm}^2}]]] La sola area non determina la capacità portante della piastra." },
          { "kind": "h3", "text": "Esempio 3: profilo laterale di rampa triangolare" },
          { "kind": "p", "text": "Un profilo di rampa semplificato a triangolo rettangolo ha [[a=6\\text{ m}]], [[b=8\\text{ m}]], [[c=10\\text{ m}]]. Allora [[r=2\\text{ m}]], [[s=12\\text{ m}]], [[[\\boxed{K=24\\text{ m}^2}]]] Rappresenta il profilo laterale, non la superficie di camminamento inclinata." },
          { "kind": "h3", "text": "Esempio 4: pannello triangolare di supporto del tetto" },
          { "kind": "p", "text": "Un pannello triangolare rettangolo di supporto del tetto ha [[a=8\\text{ ft}]], [[b=15\\text{ ft}]], [[c=17\\text{ ft}]]. Allora [[r=3\\text{ ft}]], [[s=20\\text{ ft}]], [[[\\boxed{K=60\\text{ ft}^2}]]] Il risultato è l'area stimata del pannello triangolare piano." },
          { "kind": "h3", "text": "Esempio 5: sezione di giardino rilevata" },
          { "kind": "p", "text": "Una sezione di giardino a triangolo rettangolo ha [[a=7\\text{ m}]], [[b=24\\text{ m}]], [[c=25\\text{ m}]]. Allora [[r=3\\text{ m}]], [[s=28\\text{ m}]], [[[\\boxed{K=84\\text{ m}^2}]]] La formula dà l'area della sezione triangolare direttamente dalle sue tre misure di confine." },
          { "kind": "h3", "text": "Esempio 6: vela in tessuto triangolare" },
          { "kind": "p", "text": "Un pannello in tessuto a triangolo rettangolo ha [[a=9\\text{ ft}]], [[b=12\\text{ ft}]], [[c=15\\text{ ft}]]. Allora [[r=3\\text{ ft}]], [[s=18\\text{ ft}]], [[[\\boxed{K=54\\text{ ft}^2}]]] Cuciture e margini di tessuto sono esclusi da questa cifra di pannello piano." },
          { "kind": "h3", "text": "Esempio 7: grande sezione di terreno triangolare" },
          { "kind": "p", "text": "Una sezione di terreno rilevata, modellata come triangolo rettangolo, ha [[a=9\\text{ m}]], [[b=40\\text{ m}]], [[c=41\\text{ m}]]. Allora [[r=4\\text{ m}]], [[s=45\\text{ m}]], [[[\\boxed{K=180\\text{ m}^2}]]] Il modello semplificato a triangolo rettangolo assume confini rettilinei su terreno piano." },
          { "kind": "h3", "text": "Esempio 8: sagoma di taglio in compensato" },
          { "kind": "p", "text": "Una sagoma triangolare in compensato ha [[a=12\\text{ cm}]], [[b=16\\text{ cm}]], [[c=20\\text{ cm}]]. Allora [[r=4\\text{ cm}]], [[s=24\\text{ cm}]], [[[\\boxed{K=96\\text{ cm}^2}]]] L'area aiuta a stimare il fabbisogno di materiale prima degli scarti di taglio." },
          { "kind": "h3", "text": "Esempio 9: grande pannello segnaletico triangolare" },
          { "kind": "p", "text": "Un pannello segnaletico a triangolo rettangolo ha [[a=20\\text{ m}]], [[b=21\\text{ m}]], [[c=29\\text{ m}]]. Allora [[r=6\\text{ m}]], [[s=35\\text{ m}]], [[[\\boxed{K=210\\text{ m}^2}]]] Il risultato rappresenta la superficie triangolare piana rivolta verso l'osservatore." },
          { "kind": "h3", "text": "Esempio 10: supporto triangolare per tenda da sole" },
          { "kind": "p", "text": "Una sezione di supporto per tenda da sole a triangolo rettangolo ha [[a=15\\text{ ft}]], [[b=20\\text{ ft}]], [[c=25\\text{ ft}]]. Allora [[r=5\\text{ ft}]], [[s=30\\text{ ft}]], [[[\\boxed{K=150\\text{ ft}^2}]]] È l'area calcolata della sezione triangolare modellata." },
          { "kind": "h3", "text": "Esempio 11: pannello di supporto industriale" },
          { "kind": "p", "text": "Un pannello di supporto industriale a triangolo rettangolo ha [[a=11\\text{ m}]], [[b=60\\text{ m}]], [[c=61\\text{ m}]]. Allora [[r=5\\text{ m}]], [[s=66\\text{ m}]], [[[\\boxed{K=330\\text{ m}^2}]]] Questo calcolo geometrico descrive l'area piana del pannello, non le sue prestazioni strutturali." },
          { "kind": "h3", "text": "Esempio 12: grande sezione triangolare di estremità del tetto" },
          { "kind": "p", "text": "Una sezione di estremità del tetto a triangolo rettangolo ha [[a=13\\text{ ft}]], [[b=84\\text{ ft}]], [[c=85\\text{ ft}]]. Allora [[r=6\\text{ ft}]], [[s=91\\text{ ft}]], [[[\\boxed{K=546\\text{ ft}^2}]]] L'area calcolata aiuta a stimare la copertura triangolare piana." },
          { "kind": "h3", "text": "Confronto degli esempi pratici" }
        ],
        "table": {
          "headers": ["Applicazione", "Lato a", "Lato b", "Ipotenusa c", "Raggio inscritto r", "Semiperimetro s", "Area"],
          "rows": [
            ["Finestra in vetro", "3", "4", "5", "1", "6", "6 m²"],
            ["Staffa in acciaio", "5", "12", "13", "2", "15", "30 cm²"],
            ["Profilo di rampa", "6", "8", "10", "2", "12", "24 m²"],
            ["Pannello del tetto", "8", "15", "17", "3", "20", "60 ft²"],
            ["Sezione di giardino", "7", "24", "25", "3", "28", "84 m²"],
            ["Vela in tessuto", "9", "12", "15", "3", "18", "54 ft²"],
            ["Sezione di terreno", "9", "40", "41", "4", "45", "180 m²"],
            ["Sagoma in compensato", "12", "16", "20", "4", "24", "96 cm²"],
            ["Pannello segnaletico", "20", "21", "29", "6", "35", "210 m²"],
            ["Supporto per tenda", "15", "20", "25", "5", "30", "150 ft²"],
            ["Pannello industriale", "11", "60", "61", "5", "66", "330 m²"],
            ["Estremità del tetto", "13", "84", "85", "6", "91", "546 ft²"]
          ]
        }
      },
      "sec-relationship": {
        "h2": "Come sono legati il raggio inscritto e il semiperimetro ai tre lati?",
        "blocks": [
          { "kind": "p", "text": "In un triangolo rettangolo il raggio inscritto e il semiperimetro non sono indipendenti dai lati; sono costruiti a partire da essi. Partendo da [[r=\\frac{a+b-c}{2}]] e [[s=\\frac{a+b+c}{2}]], somma e sottrai le due espressioni. La somma dà [[[\\boxed{s+r=a+b}]]], e la sottrazione dà [[[\\boxed{s-r=c}]]] Queste due identità sono specifiche dei triangoli rettangoli con la notazione data, e trasformano i due input del calcolatore in una sorprendente quantità di informazioni sul triangolo stesso." },
          { "kind": "h3", "text": "Ricavare l'ipotenusa" },
          { "kind": "p", "text": "Da [[s-r=c]], l'ipotenusa si può ricavare quando [[r]] e [[s]] sono noti. Per [[r=2]] e [[s=12]]: [[c=12-2]], [[[\\boxed{c=10}]]] Due input rivelano così il lato più lungo senza ulteriori misure." },
          { "kind": "h3", "text": "Ricavare la somma dei due cateti" },
          { "kind": "p", "text": "Da [[a+b=s+r]], la somma dei cateti segue direttamente. Per [[r=2]] e [[s=12]]: [[a+b=14]]. La sola somma non può identificare ciascun cateto separatamente; le lunghezze individuali richiedono un'altra informazione." },
          { "kind": "h3", "text": "Ricavare il prodotto dei due cateti" },
          { "kind": "p", "text": "Poiché [[K=\\frac{ab}{2}]] e [[K=rs]], segue che [[[\\boxed{ab=2rs}]]] Per [[r=2]] e [[s=12]]: [[ab=48]]. Con [[a+b=14]] e [[ab=48]], i due cateti sono 6 e 8: [[6+8=14]] e [[6\\times8=48]]. I due cateti si possono scambiare senza cambiare l'area del triangolo." },
          { "kind": "h3", "text": "Ricavare entrambe le lunghezze dei cateti" },
          { "kind": "p", "text": "La somma e il prodotto fanno di [[a]] e [[b]] le due radici di [[t^2-(s+r)t+2rs=0]], dando [[[\\boxed{a,b=\\frac{(s+r)\\pm\\sqrt{(s+r)^2-8rs}}{2}}]]] I due segni corrispondono alle due possibili assegnazioni dei cateti. Con [[r=2]] e [[s=12]]: [[a,b=\\frac{14\\pm\\sqrt{196-192}}{2}]], quindi [[a,b=\\frac{14\\pm2}{2}]], cateti 6 e 8. È una deduzione matematica avanzata, non una funzione aggiuntiva del calcolatore." }
        ]
      },
      "sec-valid": {
        "h2": "Come verificare se raggio inscritto e semiperimetro formano un triangolo rettangolo valido",
        "blocks": [
          { "kind": "p", "text": "Il calcolatore moltiplica due input, ma non ogni coppia positiva di lunghezze descrive un triangolo rettangolo. I controlli qui sotto separano l'aritmetica dalla geometria." },
          { "kind": "h3", "text": "Condizioni di base sugli input" },
          { "kind": "p", "text": "Gli input devono soddisfare [[r>0]] e [[s>0]]. Per un triangolo rettangolo è richiesto anche [[s>r]], perché [[c=s-r]] e l'ipotenusa deve essere positiva. Queste tre condizioni sono necessarie ma non sufficienti." },
          { "kind": "h3", "text": "Un controllo avanzato di coerenza del triangolo rettangolo" },
          { "kind": "p", "text": "Da [[a+b=s+r]] e [[ab=2rs]], i due cateti sono reali esattamente quando il discriminante [[\\Delta=(s+r)^2-8rs]] è non negativo. Semplificato: [[[\\boxed{\\Delta=s^2-6rs+r^2}]]] Per lunghezze dei cateti reali, [[\\Delta\\geq0]]. Poiché [[s]] deve superare [[r]], la condizione equivalente per il triangolo rettangolo è [[[\\boxed{\\frac{s}{r}\\geq3+2\\sqrt2}]]], oppure [[[\\boxed{\\frac{r}{s}\\leq3-2\\sqrt2}]]] L'uguaglianza si verifica per un triangolo rettangolo isoscele, l'adattamento più stretto possibile. È un test matematico avanzato di compatibilità, chiaramente separato dai controlli di base sopra." },
          { "kind": "h3", "text": "Esempio valido" },
          { "kind": "p", "text": "Dati [[r=2]] e [[s=12]], il rapporto è [[\\frac{s}{r}=6]]. Poiché [[6>3+2\\sqrt2]] (circa 5.83), i valori possono descrivere un triangolo rettangolo valido, e i lati corrispondenti sono 6, 8 e 10." },
          { "kind": "h3", "text": "Esempio incompatibile" },
          { "kind": "p", "text": "Dati [[r=2]] e [[s=10]], il rapporto è [[\\frac{s}{r}=5]], sotto la soglia richiesta di circa 5.83. Questa coppia non può descrivere un triangolo rettangolo, anche se moltiplicare gli input produce un risultato numerico. Calcolare [[rs]] e confermare che le misure descrivono un triangolo rettangolo sono due compiti diversi. Questa guida non afferma che il calcolatore esegua questo controllo automaticamente." }
        ]
      },
      "sec-heron": {
        "h2": "Come si confronta la formula del raggio inscritto con la formula di Erone?",
        "blocks": [
          { "kind": "p", "text": "La formula di Erone calcola l'area da tutti e tre i lati: [[[\\boxed{K=\\sqrt{s(s-a)(s-b)(s-c)}}]]] Usa le tre lunghezze dei lati e il semiperimetro, funziona per ogni triangolo non degenere, e non ha bisogno del raggio inscritto come input separato. Confrontala con [[[\\boxed{K=rs}]]] Le due sono parenti strette: il semiperimetro [[s]] compare in entrambe, e dimostrare che concordano è uno dei modi più puliti per vedere che [[K=rs]] è corretta." },
          { "kind": "h3", "text": "Quando la formula del raggio inscritto è più facile?" },
          { "kind": "p", "text": "[[K=rs]] è particolarmente comoda quando il raggio inscritto e il semiperimetro sono già noti: una sola moltiplicazione, niente radici quadrate, niente scomposizioni di differenze di lati. Quando un cerchio inscritto è stato misurato, o quando passi precedenti hanno già prodotto [[r]] e [[s]], è la via più breve verso l'area." },
          { "kind": "h3", "text": "Quando la formula di Erone è più utile?" },
          { "kind": "p", "text": "La formula di Erone è la scelta migliore quando le tre lunghezze dei lati sono note ma il raggio inscritto non è stato calcolato. Raggiunge l'area direttamente da [[a]], [[b]] e [[c]] senza la deviazione per [[r]]. Nessuna delle due formule è universalmente più precisa; sono esatte su input coerenti, e divergono solo quando gli input sono incoerenti." },
          { "kind": "h3", "text": "Verifica entrambe le formule con un triangolo 3-4-5" },
          { "kind": "p", "text": "Dati [[a=3]], [[b=4]], [[c=5]], con [[s=6]] e [[r=1]]. Con il raggio inscritto: [[K=1\\times6=6]]. Con la formula di Erone: [[K=\\sqrt{6(6-3)(6-4)(6-5)}]], quindi [[K=\\sqrt{6\\times3\\times2\\times1}]], [[[\\boxed{K=6}]]] I risultati concordano perché entrambe le formule misurano la stessa regione; sono due espressioni di un'unica area, e la loro concordanza è un forte segnale che i calcoli sono giusti." }
        ]
      },
      "sec-legs": {
        "h2": "Perché la formula del raggio inscritto produce la stessa area della formula dei cateti?",
        "blocks": [
          { "kind": "p", "text": "Due formule rivendicano la stessa area: [[K=\\frac{ab}{2}]] e [[K=rs]]. Scrivendo [[r]] e [[s]] in funzione dei lati si ottiene [[rs=\\frac{a+b-c}{2}\\times\\frac{a+b+c}{2}]], quindi [[rs=\\frac{(a+b-c)(a+b+c)}{4}]]. Il numeratore è una differenza di quadrati: [[rs=\\frac{(a+b)^2-c^2}{4}]]. Applica il teorema di Pitagora [[c^2=a^2+b^2]]: [[rs=\\frac{a^2+2ab+b^2-a^2-b^2}{4}]], quindi [[[\\boxed{rs=\\frac{ab}{2}}]]] Le due formule sono identiche su ogni triangolo rettangolo; non possono divergere su input coerenti." },
          { "kind": "p", "text": "Verifica con un triangolo 3-4-5: [[r=1]], [[s=6]], [[rs=6]], e [[\\frac{ab}{2}=\\frac{3\\times4}{2}=6]]. Con un triangolo 6-8-10: [[r=2]], [[s=12]], [[rs=24]], e [[\\frac{ab}{2}=\\frac{6\\times8}{2}=24]]. La familiare formula dei cateti e la formula del raggio inscritto sono la stessa quantità in vesti diverse." }
        ]
      },
      "sec-mistakes": {
        "h2": "Errori comuni nel calcolo dell'area da raggio inscritto e semiperimetro",
        "blocks": [
          { "kind": "p", "text": "La maggior parte delle risposte sbagliate deriva da input etichettati male piuttosto che da calcoli errati. I quindici errori qui sotto coprono quasi tutti i casi." },
          { "kind": "h3", "text": "1. Confondere il raggio inscritto con il raggio circoscritto" },
          { "kind": "p", "text": "Il raggio inscritto è il cerchio dentro; il raggio circoscritto è il cerchio attorno. In un triangolo 6-8-10, [[r=2]] ma [[R=\\frac{c}{2}=5]]. Usare 5 per [[r]] dà [[K=5\\times12=60]] invece di 24. Correzione: chiediti se il cerchio sta dentro il triangolo o passa per i suoi vertici." },
          { "kind": "h3", "text": "2. Usare il perimetro intero invece del semiperimetro" },
          { "kind": "p", "text": "La formula richiede [[s]], metà del perimetro. Con [[r=2]] e il perimetro intero 24 invece di [[s=12]], il risultato è [[K=2\\times24=48]], il doppio del 24 corretto. Correzione: dimezza il perimetro prima di moltiplicare." },
          { "kind": "h3", "text": "3. Dividere di nuovo la risposta finale per due" },
          { "kind": "p", "text": "Il dimezzamento è già dentro [[s]]. Dividere [[2\\times12=24]] di nuovo per due dà 12, metà della vera area. Correzione: calcola [[rs]] e fermati." },
          { "kind": "h3", "text": "4. Confondere l'incentro con il circocentro" },
          { "kind": "p", "text": "L'incentro è dove si incontrano le bisettrici; il circocentro è dove si incontrano gli assi, e per un triangolo rettangolo si trova nel punto medio dell'ipotenusa. Sono punti diversi. Correzione: traccia la costruzione corretta per il cerchio che ti serve." },
          { "kind": "h3", "text": "5. Trattare il raggio inscritto come un lato del triangolo" },
          { "kind": "p", "text": "Il raggio inscritto è una distanza dentro il triangolo, non uno dei suoi tre lati. Non appartiene mai a [[a+b+c]]. Correzione: tieni [[r]] fuori da ogni espressione di lunghezza dei lati." },
          { "kind": "h3", "text": "6. Usare una formula errata del raggio inscritto del triangolo rettangolo" },
          { "kind": "p", "text": "La scorciatoia del triangolo rettangolo è [[r=\\frac{a+b-c}{2}]], non una variante con il segno sbagliato o il lato sbagliato dimezzato. Un errore comune è usare [[r=\\frac{a+c-b}{2}]], che dà un numero diverso a meno che il triangolo sia isoscele. Correzione: il lato sottratto è sempre l'ipotenusa [[c]]." },
          { "kind": "h3", "text": "7. Dimenticare che c è l'ipotenusa" },
          { "kind": "p", "text": "Nella scorciatoia, [[c]] indica specificamente l'ipotenusa. Correzione: etichetta il lato più lungo come [[c]] prima di applicare la formula." },
          { "kind": "h3", "text": "8. Usare il lato sbagliato come ipotenusa" },
          { "kind": "p", "text": "Scegliere un cateto per [[c]] corrompe sia [[r]] sia [[s]]. Correzione: l'ipotenusa è il lato opposto all'angolo retto, sempre il più lungo." },
          { "kind": "h3", "text": "9. Mescolare unità di misura diverse" },
          { "kind": "p", "text": "Un raggio inscritto di 20 cm con un semiperimetro di 1 m non dà alcun numero sensato prima della conversione. Correzione: converti prima in un'unica unità, poi moltiplica." },
          { "kind": "h3", "text": "10. Inserire lunghezze nulle o negative" },
          { "kind": "p", "text": "Lunghezze nulle e negative non descrivono alcun triangolo. Correzione: verifica che ogni lunghezza inserita sia positiva." },
          { "kind": "h3", "text": "11. Supporre che ogni coppia positiva di r e s rappresenti un triangolo rettangolo" },
          { "kind": "p", "text": "Come mostrato sopra, [[r=2]] con [[s=10]] dà il numero 20 ma nessun triangolo rettangolo. Correzione: esegui il controllo [[s/r\\geq3+2\\sqrt2]] quando la geometria conta." },
          { "kind": "h3", "text": "12. Riportare l'area in unità lineari" },
          { "kind": "p", "text": "Un'area di 24 m² non è 24 m. Correzione: scrivi l'unità quadrata insieme al numero." },
          { "kind": "h3", "text": "13. Arrotondare il raggio inscritto troppo presto" },
          { "kind": "p", "text": "Arrotondare [[r]] prima di moltiplicare sposta l'intera area. Correzione: mantieni la piena precisione nei passaggi intermedi e arrotonda solo la risposta finale." },
          { "kind": "h3", "text": "14. Confondere il semiperimetro con la somma di due lati" },
          { "kind": "p", "text": "Il semiperimetro è metà della somma di tutti e tre i lati, non la somma di due. Correzione: somma tutti e tre i lati, poi dimezza." },
          { "kind": "h3", "text": "15. Supporre che la formula funzioni solo per i triangoli rettangoli" },
          { "kind": "p", "text": "[[K=rs]] vale per ogni triangolo non degenere; solo la scorciatoia [[r=\\frac{a+b-c}{2}]] è specifica dei triangoli rettangoli. Correzione: applica liberamente la formula dell'area, ma usa la derivazione generale del raggio inscritto per i triangoli non rettangoli." },
          { "kind": "h3", "text": "Sbagliato contro corretto: un esempio concreto" },
          { "kind": "p", "text": "Prendi un triangolo 6-8-10. Corretto: [[r=2]], [[s=12]], [[K=2\\times12=24]]. Usare scorrettamente il perimetro intero: [[K=2\\times24=48]], che raddoppia l'area. Dividere scorrettamente la risposta corretta di nuovo per due: [[K=\\frac{24}{2}=12]], che la dimezza. Entrambi gli errori derivano dalla cattiva gestione della metà che vive dentro [[s]]." }
        ]
      },
      "sec-verify": {
        "h2": "Come verificare se l'area del tuo triangolo rettangolo è corretta",
        "blocks": [
          { "kind": "p", "text": "Diversi controlli indipendenti individuano gli errori comuni. Il triangolo 3-4-5 ne dimostra la maggior parte." },
          { "kind": "h3", "text": "Metodo 1: raggio inscritto e semiperimetro" },
          { "kind": "p", "text": "Ricalcola [[K=rs]] con i valori inseriti. Per [[r=1]] e [[s=6]], [[K=1\\times6=6]]. Un secondo passaggio individua i refusi." },
          { "kind": "h3", "text": "Metodo 2: due cateti perpendicolari" },
          { "kind": "p", "text": "Quando i cateti sono noti o ricavati, [[K=\\frac{ab}{2}]] deve concordare. Qui [[\\frac{3\\times4}{2}=6]] corrisponde a [[1\\times6=6]]: due metodi, un triangolo, una risposta." },
          { "kind": "h3", "text": "Metodo 3: teorema di Pitagora" },
          { "kind": "p", "text": "Conferma [[a^2+b^2=c^2]]: [[9+16=25]]. Se i lati non lo soddisfano, l'identificazione del triangolo è sbagliata." },
          { "kind": "h3", "text": "Metodo 4: raggio inscritto del triangolo rettangolo" },
          { "kind": "p", "text": "Conferma [[r=\\frac{a+b-c}{2}]]: [[\\frac{3+4-5}{2}=1]]. Una discordanza significa che il raggio inscritto inserito non appartiene a questo triangolo." },
          { "kind": "h3", "text": "Metodo 5: semiperimetro" },
          { "kind": "p", "text": "Conferma [[s=\\frac{a+b+c}{2}]]: [[\\frac{3+4+5}{2}=6]]. Questo individua le confusioni tra perimetro e semiperimetro." },
          { "kind": "h3", "text": "Metodo 6: formula di Erone" },
          { "kind": "p", "text": "Conferma [[K=\\sqrt{s(s-a)(s-b)(s-c)}]]: [[K=\\sqrt{6\\times3\\times2\\times1}=6]]. La concordanza tra formule indipendenti è il controllo più forte disponibile." },
          { "kind": "p", "text": "Ecco perché la concordanza tra formule indipendenti è un utile controllo matematico: un errore su una strada raramente si riproduce su un'altra, quindi due risposte concordanti da formule diverse significano che sia gli input sia i calcoli sono corretti." }
        ],
        "imgAlt": "Area del triangolo 3-4-5 confrontata con K = rs, K = ab/2 e la formula di Erone",
        "figcaption": "Tre metodi, una risposta: K = rs, K = ab/2 e la formula di Erone danno tutti 6 per il triangolo 3-4-5."
      },
      "sec-units": {
        "h2": "Capire le unità di misura nei calcoli di raggio inscritto e semiperimetro",
        "blocks": [
          { "kind": "p", "text": "L'area è bidimensionale, quindi la sua unità è il quadrato dell'unità di lunghezza. In simboli, [[\\text{cm}\\times\\text{cm}=\\text{cm}^2]]. Lo stesso vale per metri e metri quadrati, millimetri e millimetri quadrati, piedi e piedi quadrati, pollici e pollici quadrati. I selettori di unità esistono perché il risultato possa essere etichettato correttamente." },
          { "kind": "h3", "text": "Perché entrambi gli input devono usare unità compatibili" },
          { "kind": "p", "text": "Il raggio inscritto e il semiperimetro devono essere espressi nella stessa unità prima di applicare la formula. Se [[r=20\\text{ cm}]] e [[s=1\\text{ m}]], converti prima: [[1\\text{ m}=100\\text{ cm}]]. Poi [[K=20\\times100]], [[[\\boxed{K=2,000\\text{ cm}^2}]]], o equivalentemente [[[\\boxed{K=0.2\\text{ m}^2}]]] Moltiplicare misure in unità diverse produce un numero senza un'unità pulita, quindi converti prima e calcola dopo." },
          { "kind": "h3", "text": "Perché evitare gli arrotondamenti precoci" },
          { "kind": "p", "text": "Valori arrotondati di [[r]] o [[s]] possono influenzare leggermente l'area finale, perché il raggio inscritto vi è moltiplicato direttamente. Mantieni una precisione sufficiente nei calcoli intermedi e arrotonda solo la risposta finale. Questa guida non afferma nulla sulla precisione interna del calcolatore oltre ciò che mostra la sua interfaccia." },
          { "kind": "h3", "text": "Misure esatte contro misure pratiche" },
          { "kind": "p", "text": "Le dimensioni matematiche esatte, come il raggio inscritto 1 di un triangolo 3-4-5, si comportano diversamente dalle misure prese con strumenti fisici. L'incertezza dello strumento si propaga nell'area, quindi tratta l'ultima cifra come affidabile solo quanto gli input. Un raggio inscritto di 2 cm misurato col metro potrebbe essere in realtà 1,9 o 2,1, e l'area porta con sé quell'incertezza." }
        ]
      },
      "sec-faq": {
        "h2": "Domande frequenti",
        "blocks": [
          { "kind": "p", "text": "Ecco le risposte alle domande più comuni sull'area calcolata da raggio inscritto e semiperimetro." }
        ]
      },
      "sec-related": {
        "h2": "Esplora i calcolatori correlati per triangoli rettangoli",
        "blocks": [
          { "kind": "p", "text": "Misure diverse richiedono calcolatori diversi." }
        ]
      },
      "sec-conclusion": {
        "h2": "Due misure portano l'intera area",
        "blocks": [
          { "kind": "p", "text": "Il raggio inscritto e il semiperimetro sembrano input modesti, ma insieme codificano l'intera estensione del triangolo. La derivazione attraverso i tre triangoli più piccoli mostra perché il prodotto è esatto, l'argomento dei segmenti di tangente mostra da dove viene la scorciatoia del triangolo rettangolo, e i confronti con la formula dei cateti e la formula di Erone mostrano che il risultato concorda sempre con il resto della geometria." },
          { "kind": "p", "text": "L'abitudine di lavoro è semplice: conferma cosa sono davvero r e s, mantieni coerenti le unità, e verifica la risposta con una formula indipendente. Quando queste abitudini reggono, K = rs è uno dei calcoli di area più affidabili nella geometria del triangolo." }
        ]
      }
    }
  }
};
