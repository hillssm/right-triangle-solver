// semiperimeterGuideTranslations.b2fr.ts: Right Triangle Semiperimeter Guide (Page 26 of 45) translation for French (fr).
export const B2_FR = {
  "fr": {
    "tocHeading": "Navigation des sections",
    "tocItems": {
      "sec-intro": "Comment calculer le demi-périmètre d'un triangle rectangle",
      "sec-geometry": "Qu'est-ce qu'un triangle rectangle ?",
      "sec-meaning": "Qu'est-ce que le demi-périmètre d'un triangle rectangle ?",
      "sec-formula": "Formule du demi-périmètre d'un triangle rectangle",
      "sec-calculator": "Comment utiliser la calculatrice de demi-périmètre d'un triangle rectangle",
      "sec-examples": "Exemples pas à pas du demi-périmètre d'un triangle rectangle",
      "sec-practical": "Applications concrètes du demi-périmètre d'un triangle rectangle",
      "sec-inradius": "Quel est le lien entre le demi-périmètre et le rayon du cercle inscrit d'un triangle rectangle ?",
      "sec-heron": "Comment le demi-périmètre est-il utilisé dans la formule de Héron ?",
      "sec-vs-perimeter": "Quelle est la différence entre le périmètre et le demi-périmètre ?",
      "sec-missing-side": "Comment calculer le demi-périmètre quand un côté est manquant",
      "sec-properties": "Propriétés importantes du demi-périmètre d'un triangle rectangle",
      "sec-units": "Comprendre les unités de mesure dans les calculs de demi-périmètre",
      "sec-mistakes": "Erreurs fréquentes dans le calcul du demi-périmètre d'un triangle rectangle",
      "sec-verify": "Comment vérifier que votre calcul de demi-périmètre est correct",
      "sec-related": "Découvrez les calculatrices de triangle rectangle associées",
      "sec-faq": "Questions fréquemment posées",
      "sec-conclusion": "La moitié du contour, une compréhension complète"
    },
    "sections": {
      "sec-intro": {
        "h2": "Comment calculer le demi-périmètre d'un triangle rectangle",
        "blocks": [
          { "kind": "p", "text": "Additionnez les trois côtés d'un triangle rectangle, puis divisez le total par deux." },
          { "kind": "p", "text": "C'est tout le calcul, et cette calculatrice l'effectue pour n'importe quel triangle rectangle dès que vous saisissez les deux cathètes et l'hypoténuse. Trois mesures de côtés sont nécessaires parce que le triangle a trois bords, et l'hypoténuse doit être incluse : c'est l'un de ces trois bords même si elle ne touche jamais l'angle droit. Le total est divisé par deux parce que le demi-périmètre est défini comme exactement la moitié du périmètre complet, une quantité qui revient sans cesse en géométrie du triangle." },
          { "kind": "p", "text": "Un exemple rapide illustre l'idée. Avec [[a=3]], [[b=4]] et [[c=5]] :" },
          { "kind": "p", "text": "[[[s=\\frac{3+4+5}{2}]]]" },
          { "kind": "p", "text": "[[[s=\\frac{12}{2}]]]" },
          { "kind": "p", "text": "[[[\\boxed{s=6\\text{ units}}]]]" },
          { "kind": "p", "text": "Le périmètre complet est de 12 unités, donc son demi-périmètre est de 6 unités. Notez que le demi-périmètre est une mesure linéaire, pas une mesure d'aire : c'est une longueur, exprimée en mètres, en pieds ou en unités simples, jamais en unités carrées. Il devient utile chaque fois qu'une formule demande la moitié du périmètre, ce qui arrive dans la formule de Héron pour l'aire, dans la relation du rayon du cercle inscrit, et dans plusieurs démonstrations géométriques où le périmètre complet ne ferait que gêner." }
        ]
      },
      "sec-geometry": {
        "h2": "Qu'est-ce qu'un triangle rectangle ?",
        "blocks": [
          { "kind": "p", "text": "Avant toute division par deux, les trois côtés doivent être nommés correctement. Les symboles ci-dessous restent fixes dans tout le guide, et la calculatrice utilise les mêmes noms." },
          { "kind": "h3", "text": "Définition d'un triangle rectangle" },
          { "kind": "p", "text": "Un triangle rectangle est un triangle qui contient un angle intérieur mesurant exactement 90 degrés. Il a trois sommets, trois côtés, deux angles aigus et un angle droit, généralement marqué d'un petit carré. Les deux côtés qui forment l'angle droit sont les cathètes ; le côté opposé à l'angle droit est l'hypoténuse. Comme les angles d'un triangle totalisent 180 degrés, [[A+B+C=180^\\circ]], et avec [[C=90^\\circ]] il s'ensuit que [[[\\boxed{A+B=90^\\circ}]]] : les deux angles aigus sont complémentaires, donc connaître l'un détermine l'autre. Bien comprendre cette figure est important parce que la formule du demi-périmètre traite chaque côté comme un bord du contour, et un côté mal nommé fausse le total avant même que la division commence." },
          { "kind": "h3", "text": "Que sont les deux cathètes ?" },
          { "kind": "p", "text": "La cathète [[a]] et la cathète [[b]] sont les deux côtés qui se rejoignent au sommet de l'angle droit, perpendiculaires l'un à l'autre. L'une ou l'autre peut être tracée horizontalement ou verticalement selon l'orientation du triangle ; ce qui les définit, c'est le coin à 90 degrés qu'elles forment, pas leur direction sur la page. Elles diffèrent de l'hypoténuse par leur position et leur longueur : chaque cathète touche l'angle droit, et chaque cathète est plus courte que l'hypoténuse. Dans le travail sur le demi-périmètre, leur rôle est simple : ce sont toutes deux des bords du contour, donc toutes deux entrent dans la somme qui sera divisée par deux." },
          { "kind": "h3", "text": "Qu'est-ce que l'hypoténuse ?" },
          { "kind": "p", "text": "L'hypoténuse est le côté opposé à l'angle droit, toujours le plus long côté du triangle. Elle ne forme jamais l'angle droit ; elle s'étend en face de lui, joignant les extrémités éloignées des deux cathètes. Elle diffère des cathètes par sa position comme par sa longueur : les cathètes se rencontrent à 90 degrés, tandis que l'hypoténuse rencontre chaque cathète sous un angle aigu. Elle complète le contour triangulaire, et c'est pourquoi elle doit figurer dans le calcul du demi-périmètre. Quand les deux cathètes sont connues, le théorème de Pythagore permet de la retrouver : [[[\\boxed{c=\\sqrt{a^2+b^2}}]]]" },
          { "kind": "h3", "text": "Comment identifier correctement les côtés" },
          { "kind": "p", "text": "[[a]] et [[b]] sont les deux côtés qui se rencontrent à 90 degrés, et [[c]] est opposé à l'angle droit. Dans un triangle rectangle non dégénéré, [[c]] est le plus long côté. Le marqueur d'angle droit indique quel côté est [[c]] : c'est celui qui ne touche pas ce sommet. Un rapide contrôle d'ordre aide : triez les trois nombres, et le plus grand doit jouer le rôle de [[c]]. Si le plus grand côté ne se trouve pas en face du coin carré, les noms sont faux, et le demi-périmètre construit dessus sera faux aussi." },
          { "kind": "h3", "text": "Pourquoi le demi-périmètre dépend-il des trois côtés ?" },
          { "kind": "p", "text": "Le demi-périmètre dérive du périmètre complet, et le périmètre complet compte chaque bord du contour. Même si [[a]] et [[b]] sont perpendiculaires, l'hypoténuse reste une partie du contour extérieur du triangle : c'est le bord qui ferme la figure. Exclure [[c]] ne donne pas un demi-périmètre plus court ; cela donne une quantité différente et fausse. Pour [[a=3]], [[b=4]], [[c=5]], omettre l'hypoténuse produit [[(3+4)/2=3.5]], alors que le vrai demi-périmètre est [[(3+4+5)/2=6]]. Les 2,5 unités manquantes sont la part de l'hypoténuse, et aucune formule correcte ne peut l'ignorer." }
        ],
        "imgAlt": "Triangle rectangle ABC avec les cathètes a et b, l'hypoténuse c, l'angle droit en C, montrant P = a+b+c et s = (a+b+c)/2",
        "figcaption": "Triangle ABC : les cathètes a et b se rencontrent à l'angle droit C, l'hypoténuse c ferme le contour, et s = (a + b + c) / 2 est la moitié du périmètre."
      },
      "sec-meaning": {
        "h2": "Qu'est-ce que le demi-périmètre d'un triangle rectangle ?",
        "blocks": [
          { "kind": "h3", "text": "Définition du demi-périmètre" },
          { "kind": "p", "text": "Le demi-périmètre est exactement la moitié du périmètre complet d'un triangle. Si [[P]] est la distance complète autour du triangle, alors le demi-périmètre [[s]] vaut [[[\\boxed{s=\\frac{P}{2}}]]] Pour un triangle rectangle, le périmètre complet est [[P=a+b+c]], donc la définition devient [[[\\boxed{s=\\frac{a+b+c}{2}}]]] Les trois longueurs de côtés sont additionnées avant la division : la somme rassemble tout le contour, et la division par deux le réduit de moitié. Rien n'est omis et rien n'est compté deux fois." },
          { "kind": "h3", "text": "Pourquoi l'appelle-t-on demi-périmètre ?" },
          { "kind": "p", "text": "Le nom s'explique de lui-même une fois décomposé. <em>Demi</em> signifie moitié, et <em>périmètre</em> signifie la longueur complète du contour. Ensemble, demi-périmètre signifie la moitié du périmètre. La lettre [[s]] est le symbole mathématique standard, et elle apparaît dans de nombreuses formules du triangle précisément parce que les demi-longueurs de contour reviennent si souvent. Quand une formule demande [[s]], elle demande ce nombre unique : la moitié de [[a+b+c]]." },
          { "kind": "h3", "text": "Le demi-périmètre représente-t-il un demi-contour physique ?" },
          { "kind": "p", "text": "C'est un point subtil qu'il vaut la peine de bien comprendre. Le demi-périmètre est la moitié du total numérique des trois longueurs de côtés, mais il ne décrit pas nécessairement un parcours physique continu couvrant la moitié du contour du triangle. Parcourir 6 unités le long des bords d'un triangle 3-4-5, par exemple, pourrait signifier parcourir les deux cathètes (3 + 4 = 7, c'est déjà trop loin) ou une cathète plus une partie de l'hypoténuse ; il n'existe pas un unique chemin naturel de moitié. Le demi-périmètre est avant tout une mesure géométrique dérivée, une valeur intermédiaire commode qu'utilisent les formules, plutôt qu'une distance que l'on mesurerait au pas sur le terrain." },
          { "kind": "h3", "text": "Le demi-périmètre est-il une longueur ou une aire ?" },
          { "kind": "p", "text": "Le demi-périmètre est une mesure à une dimension : une longueur. Si les côtés sont en mètres, [[s]] est en mètres ; en centimètres, il est en centimètres ; en pieds, en pieds ; en pouces, en pouces. Il ne doit jamais être exprimé en unités carrées. La division par deux change la taille du nombre, pas sa dimension : la moitié d'une longueur reste une longueur. Confondre [[s]] avec une aire est l'une des erreurs de débutant les plus fréquentes, et garder les unités en ordre est le moyen le plus simple de l'éviter." },
          { "kind": "h3", "text": "Le demi-périmètre est-il toujours supérieur au plus long côté ?" },
          { "kind": "p", "text": "Oui, pour tout triangle valide non dégénéré, et l'inégalité triangulaire montre pourquoi. Tout triangle vérifie [[a+b>c]] : les deux côtés les plus courts réunis dépassent le plus long. Ajoutez [[c]] des deux côtés et [[a+b+c>2c]] s'ensuit ; divisez par deux et le résultat est [[[\\boxed{s>c}]]] Pour un triangle rectangle, cela signifie que le demi-périmètre est toujours supérieur à l'hypoténuse. Pour 3-4-5, [[s=6]] dépasse [[c=5]]. C'est un contrôle de vraisemblance pratique : si votre demi-périmètre calculé est plus petit que l'hypoténuse, les noms des côtés ou l'arithmétique sont faux." }
        ]
      },
      "sec-formula": {
        "h2": "Formule du demi-périmètre d'un triangle rectangle",
        "blocks": [
          { "kind": "p", "text": "Deux formes de la même formule sont utilisées, selon ce qui est connu. La forme compacte part du périmètre complet :" },
          { "kind": "p", "text": "[[[\\boxed{s=\\frac{P}{2}}]]]" },
          { "kind": "p", "text": "La forme développée part des trois côtés :" },
          { "kind": "p", "text": "[[[\\boxed{s=\\frac{a+b+c}{2}}]]]" },
          { "kind": "h3", "text": "Comprendre chaque variable" },
          { "kind": "p", "text": "[[s]] est le demi-périmètre, le résultat recherché. [[P]] est le périmètre complet, la longueur totale du contour. [[a]] est la première cathète et [[b]] la seconde, les deux côtés perpendiculaires. [[c]] est l'hypoténuse, le plus long côté, opposé à l'angle droit. Ne confondez jamais [[P]] et [[s]] : l'un est tout le contour, l'autre en est la moitié." },
          { "kind": "h3", "text": "Pourquoi divise-t-on par deux ?" },
          { "kind": "p", "text": "La division est ce qui fait de la quantité un <em>demi</em>-périmètre plutôt qu'un périmètre. Prenez [[a=3]], [[b=4]], [[c=5]]. Calculez d'abord le périmètre complet : [[P=3+4+5]], donc [[P=12]]. Divisez ensuite par deux : [[s=12/2]], ce qui donne [[[\\boxed{s=6}]]] Mathématiquement, la division ramène le total du contour à la demi-valeur qu'attendent des formules comme celle de Héron. L'omettre répond à une autre question : le périmètre complet, pas le demi-périmètre." },
          { "kind": "h3", "text": "Pourquoi ne peut-on pas utiliser seulement les deux cathètes ?" },
          { "kind": "p", "text": "Parce que les cathètes seules ne sont pas tout le contour. L'approche incorrecte [[s=(3+4)/2]] donne 3,5, un nombre sans signification géométrique pour ce triangle : elle ignore l'hypoténuse, qui est un vrai bord de la figure. L'approche correcte additionne d'abord les trois côtés : [[s=(3+4+5)/2]], ce qui donne [[[\\boxed{s=6}]]] Un raccourci tentant consiste à diviser chaque côté par deux puis à additionner, [[1.5+2+2.5=6]] : l'arithmétique fonctionne ici parce que la division se distribue sur l'addition, mais cela masque la structure de la formule et invite aux erreurs. Additionnez d'abord, puis divisez une seule fois." },
          { "kind": "h3", "text": "Quel est le lien entre le périmètre et le demi-périmètre ?" },
          { "kind": "p", "text": "Ce sont la même mesure à deux échelles. Doubler le demi-périmètre redonne le périmètre, et diviser le périmètre par deux redonne le demi-périmètre :" },
          { "kind": "p", "text": "[[[\\boxed{P=2s}]]]" },
          { "kind": "p", "text": "[[[\\boxed{s=\\frac{P}{2}}]]]" },
          { "kind": "p", "text": "Chaque valeur peut être retrouvée quand l'autre est connue. Si un problème indique que le périmètre est 30, le demi-périmètre est immédiatement 15 ; si un calcul donne [[s=20]], le périmètre complet est 40. Cette relation dans les deux sens est aussi un outil de vérification : après avoir calculé [[s]] à partir des côtés, le doubler doit reproduire la somme des côtés." }
        ]
      },
      "sec-calculator": {
        "h2": "Comment utiliser la calculatrice de demi-périmètre d'un triangle rectangle",
        "blocks": [
          { "kind": "p", "text": "La calculatrice de cette page a un seul rôle : elle prend les trois longueurs de côtés d'un triangle rectangle et renvoie le demi-périmètre, en montrant chaque étape du calcul. Les étapes ci-dessous correspondent exactement à l'interface existante." },
          { "kind": "p", "text": "<strong>Étape 1 : Repérez la calculatrice de demi-périmètre.</strong> Elle se trouve près du haut de la page, sous le titre H1, avec trois champs étiquetés." },
          { "kind": "p", "text": "<strong>Étape 2 : Identifiez la cathète a.</strong> Choisissez l'un des deux côtés formant l'angle droit. L'un ou l'autre des côtés perpendiculaires peut être [[a]]." },
          { "kind": "p", "text": "<strong>Étape 3 : Identifiez la cathète b.</strong> L'autre côté perpendiculaire devient [[b]]." },
          { "kind": "p", "text": "<strong>Étape 4 : Identifiez l'hypoténuse c.</strong> Le plus long côté, opposé à l'angle droit, est [[c]]. Trier les trois mesures et placer la plus grande dans ce champ évite l'erreur de saisie la plus fréquente." },
          { "kind": "p", "text": "<strong>Étape 5 : Saisissez la première cathète.</strong> Tapez la valeur de [[a]] dans le champ Cathète a." },
          { "kind": "p", "text": "<strong>Étape 6 : Saisissez la seconde cathète.</strong> Tapez la valeur de [[b]] dans le champ Cathète b." },
          { "kind": "p", "text": "<strong>Étape 7 : Saisissez l'hypoténuse.</strong> Tapez la valeur de [[c]] dans le champ Hypoténuse c." },
          { "kind": "p", "text": "<strong>Étape 8 : Choisissez les unités de mesure appropriées.</strong> Chaque saisie a son propre sélecteur d'unité. Les trois côtés doivent utiliser des unités compatibles avant d'être additionnés ; mélanger mètres et centimètres fausse la somme." },
          { "kind": "p", "text": "<strong>Étape 9 : Cliquez sur Calculer le demi-périmètre.</strong> L'outil additionne les trois côtés et divise le total par deux." },
          { "kind": "p", "text": "<strong>Étape 10 : Examinez le demi-périmètre affiché.</strong> Le résultat apparaît avec son unité, par exemple [[[\\boxed{s=6\\text{ units}}]]] pour le triangle 3-4-5." },
          { "kind": "p", "text": "<strong>Étape 11 : Vérifiez les étapes de résolution.</strong> La calculatrice montre la substitution et la division, pour que vous puissiez suivre l'arithmétique ligne par ligne." },
          { "kind": "p", "text": "<strong>Étape 12 : Vérifiez que le résultat est la moitié du périmètre complet.</strong> Doublez le résultat : pour 3-4-5, [[2\\times6=12]], ce qui correspond à [[3+4+5]]." },
          { "kind": "p", "text": "<strong>Étape 13 : Utilisez Réinitialiser pour commencer un nouveau calcul.</strong> Le bouton Réinitialiser efface les trois saisies pour que le triangle suivant parte d'un état propre." },
          { "kind": "h3", "text": "Que représente chaque saisie ?" },
          { "kind": "p", "text": "Les trois saisies correspondent aux trois bords du contour. Cathète a et Cathète b reçoivent les deux côtés perpendiculaires ; Hypoténuse c reçoit le plus long côté. La calculatrice additionne exactement ce que vous saisissez et divise le total par deux, donc le rôle de chaque champ est fixe : permuter une valeur de cathète dans le champ de l'hypoténuse change la somme et produit un demi-périmètre faux." },
          { "kind": "h3", "text": "Pourquoi les unités de mesure sont-elles importantes ?" },
          { "kind": "p", "text": "Le demi-périmètre se calcule en additionnant trois longueurs, et l'addition exige des unités compatibles. Additionner 3 mètres à 40 centimètres sans conversion donne un total sans signification. Le sélecteur d'unité de chaque saisie permet de déclarer l'unité que vous avez tapée ; choisissez des sélecteurs qui décrivent les mesures réelles pour que l'addition combine des grandeurs comparables." },
          { "kind": "h3", "text": "Comprendre l'affichage du résultat" },
          { "kind": "p", "text": "L'affichage du résultat montre le demi-périmètre avec son unité linéaire. Derrière, la calculatrice a effectué exactement deux opérations : elle a additionné les trois côtés, puis divisé le total par deux. Aucun autre calcul n'intervient, et l'outil ne calcule ni l'aire ni le rayon du cercle inscrit de lui-même ; ces formules sont des explications d'accompagnement dans ce guide, pas des sorties supplémentaires de la calculatrice." },
          { "kind": "h3", "text": "Comprendre les étapes de résolution" },
          { "kind": "p", "text": "Le panneau des étapes de résolution rejoue le calcul : les valeurs de côtés saisies, leur total, la division par deux et le résultat final. Ce déroulement visible est le moyen le plus rapide de repérer une faute de frappe : si une étape montre 4 là où vous vouliez dire 40, l'erreur est évidente avant que la réponse soit utilisée ailleurs." }
        ]
      },
      "sec-examples": {
        "h2": "Exemples pas à pas du demi-périmètre d'un triangle rectangle",
        "blocks": [
          { "kind": "p", "text": "Les quatre exemples ci-dessous conservent les cas résolus existants et étoffent leurs explications. Chacun substitue les trois côtés, les additionne, divise par deux, puis vérifie la réponse." },
          { "kind": "h3", "text": "Exemple 1 : triangle rectangle 3-4-5" },
          { "kind": "p", "text": "Avec [[a=3,\\;b=4,\\;c=5]], la formule est [[s=\\frac{a+b+c}{2}]]. Substitution : [[s=\\frac{3+4+5}{2}]]. Addition : [[s=\\frac{12}{2}]]. Le résultat final est [[[\\boxed{s=6\\text{ units}}]]] Vérification : [[P=2s=12]], ce qui correspond à la somme directe [[3+4+5]]. Le résultat est correct parce que chaque bord du contour a été compté exactement une fois avant la division." },
          { "kind": "h3", "text": "Exemple 2 : triangle rectangle 5-12-13" },
          { "kind": "p", "text": "Avec [[a=5,\\;b=12,\\;c=13]] : [[s=\\frac{5+12+13}{2}]], donc [[s=\\frac{30}{2}]], ce qui donne [[[\\boxed{s=15\\text{ units}}]]] Le périmètre complet est 30, et la moitié de 30 est 15. Pour contrôle, [[5^2+12^2=13^2]] confirme l'angle droit, donc les noms des côtés sont fiables." },
          { "kind": "h3", "text": "Exemple 3 : triangle rectangle 8-15-17" },
          { "kind": "p", "text": "Avec [[a=8,\\;b=15,\\;c=17]] : [[s=\\frac{8+15+17}{2}]], donc [[s=\\frac{40}{2}]], ce qui donne [[[\\boxed{s=20\\text{ units}}]]] Remarquez la régularité à travers les exemples : à mesure que le triangle grandit, le demi-périmètre grandit au rythme des côtés, toujours exactement à la moitié du périmètre." },
          { "kind": "h3", "text": "Exemple 4 : mesures de côtés décimales" },
          { "kind": "p", "text": "Avec [[a=2.5,\\;b=6,\\;c=6.5]] : [[s=\\frac{2.5+6+6.5}{2}]], donc [[s=\\frac{15}{2}]], ce qui donne [[[\\boxed{s=7.5\\text{ units}}]]] Les valeurs décimales ne changent pas la formule : la même séquence addition-puis-division s'applique. Le contrôle de Pythagore [[2.5^2+6^2=6.5^2]] confirme que ces côtés forment bien un triangle rectangle." }
        ],
        "table": {
          "headers": ["Triangle", "Cathète a", "Cathète b", "Hypoténuse c", "Périmètre complet P", "Demi-périmètre s"],
          "rows": [
            ["3-4-5", "3", "4", "5", "12", "6"],
            ["5-12-13", "5", "12", "13", "30", "15"],
            ["8-15-17", "8", "15", "17", "40", "20"],
            ["2.5-6-6.5", "2.5", "6", "6.5", "15", "7.5"]
          ]
        },
        "closingParagraphs": ["Le tableau montre clairement la régularité : quand les trois dimensions augmentent, le demi-périmètre augmente proportionnellement, toujours exactement à la moitié du périmètre complet. Comparer les lignes révèle aussi que les triangles semblables changent d'échelle ensemble ; doublez chaque côté et le demi-périmètre double aussi."],
        "imgAlt": "Triangle 3-4-5 avec les étapes de calcul : additionner les côtés donne 12, diviser par 2, le demi-périmètre s vaut 6",
        "figcaption": "Additionnez les trois côtés pour obtenir P = 12, puis divisez par 2 : le demi-périmètre s = 6."
      },
      "sec-practical": {
        "h2": "Applications concrètes du demi-périmètre d'un triangle rectangle",
        "blocks": [
          { "kind": "p", "text": "Une mise en garde avant les exemples : le demi-périmètre n'est normalement pas la quantité utilisée pour acheter la moitié des bordures ou des clôtures autour d'un objet triangulaire. Son vrai rôle est celui d'une mesure géométrique intermédiaire, le tremplin vers le rayon du cercle inscrit, les contrôles d'aire et les calculs de conception. Chaque exemple ci-dessous est un modèle géométrique simplifié en triangle rectangle, et chacun calcule le demi-périmètre aux côtés du périmètre complet, de l'aire et du rayon du cercle inscrit, pour que les relations restent visibles." },
          { "kind": "h3", "text": "Exemple 1 : fenêtre triangulaire avec un insert décoratif circulaire" },
          { "kind": "p", "text": "Un modèle de fenêtre triangulaire a [[a=3\\text{ m},\\;b=4\\text{ m},\\;c=5\\text{ m}]]. Demi-périmètre : [[s=\\frac{3+4+5}{2}=6\\text{ m}]] ; périmètre complet [[P=12\\text{ m}]]. Aire [[K=\\frac{3\\times4}{2}=6\\text{ m}^2]] et rayon du cercle inscrit [[r=\\frac{K}{s}=\\frac{6}{6}=1\\text{ m}]]. Le demi-périmètre est ce qui rend le rayon du cercle inscrit calculable : il convertit trois longueurs de côtés en le nombre unique qui relie l'aire au rayon du cercle tangent aux trois côtés du modèle triangulaire idéalisé." },
          { "kind": "h3", "text": "Exemple 2 : support métallique avec un dégagement circulaire" },
          { "kind": "p", "text": "Un support en triangle rectangle a [[a=5\\text{ cm},\\;b=12\\text{ cm},\\;c=13\\text{ cm}]]. Alors [[s=\\frac{5+12+13}{2}=15\\text{ cm}]] et [[P=30\\text{ cm}]]. L'aire [[K=\\frac{5\\times12}{2}=30\\text{ cm}^2]] donne un rayon du cercle inscrit [[r=\\frac{30}{15}=2\\text{ cm}]]. Cette valeur décrit le rayon du cercle inscrit dans le triangle idéalisé et peut guider des études géométriques de dégagement pour une découpe circulaire. Elle ne détermine pas, à elle seule, la sécurité structurelle." },
          { "kind": "h3", "text": "Exemple 3 : pignon de toit avec un projet d'aération circulaire" },
          { "kind": "p", "text": "Un modèle simplifié d'extrémité de toit en triangle rectangle a [[a=6\\text{ ft},\\;b=8\\text{ ft},\\;c=10\\text{ ft}]]. Demi-périmètre [[s=\\frac{6+8+10}{2}=12\\text{ ft}]] ; périmètre [[P=24\\text{ ft}]]. Aire [[K=\\frac{6\\times8}{2}=24\\text{ ft}^2]] et rayon du cercle inscrit [[r=\\frac{24}{12}=2\\text{ ft}]]. Le demi-périmètre transforme les trois longueurs de bords du pignon en rayon du cercle inscrit du modèle simplifié. Une vraie installation d'aération exige des mesures de construction et de dégagement distinctes, au-delà de cette géométrie." },
          { "kind": "h3", "text": "Exemple 4 : aménagement d'un jardin triangulaire" },
          { "kind": "p", "text": "Un modèle de jardin en triangle rectangle a [[a=7\\text{ m},\\;b=24\\text{ m},\\;c=25\\text{ m}]]. Alors [[s=\\frac{7+24+25}{2}=28\\text{ m}]] et [[P=56\\text{ m}]]. L'aire [[K=\\frac{7\\times24}{2}=84\\text{ m}^2]] donne un rayon du cercle inscrit [[r=\\frac{84}{28}=3\\text{ m}]]. Le cercle inscrit est le plus grand cercle qui tient à l'intérieur du triangle idéalisé tout en touchant les trois côtés, utile pour placer un massif ou une fontaine circulaire au stade de la conception." },
          { "kind": "h3", "text": "Exemple 5 : panneau triangulaire de fabrication CNC" },
          { "kind": "p", "text": "Un panneau triangulaire a [[a=8\\text{ cm},\\;b=15\\text{ cm},\\;c=17\\text{ cm}]]. Demi-périmètre [[s=\\frac{8+15+17}{2}=20\\text{ cm}]] ; périmètre [[P=40\\text{ cm}]]. Aire [[K=\\frac{8\\times15}{2}=60\\text{ cm}^2]] et rayon du cercle inscrit [[r=\\frac{60}{20}=3\\text{ cm}]]. Le demi-périmètre et le rayon du cercle inscrit servent ici de valeurs géométriques de référence en modélisation CAO, par exemple pour positionner un élément circulaire par rapport aux bords du panneau." },
          { "kind": "h3", "text": "Exemple 6 : panneau de signalisation triangulaire avec un emblème circulaire" },
          { "kind": "p", "text": "Un panneau de signalisation a [[a=9\\text{ in},\\;b=12\\text{ in},\\;c=15\\text{ in}]]. Alors [[s=\\frac{9+12+15}{2}=18\\text{ in}]] et [[P=36\\text{ in}]]. L'aire [[K=\\frac{9\\times12}{2}=54\\text{ in}^2]] donne un rayon du cercle inscrit [[r=\\frac{54}{18}=3\\text{ in}]]. Le rayon du cercle inscrit fournit une référence mathématique pour l'emblème circulaire inscrit maximal, sous réserve des marges réelles et des contraintes de fixation du panneau." },
          { "kind": "h3", "text": "Exemple 7 : plaque triangulaire industrielle" },
          { "kind": "p", "text": "Une plaque en triangle rectangle a [[a=9\\text{ cm},\\;b=40\\text{ cm},\\;c=41\\text{ cm}]]. Demi-périmètre [[s=\\frac{9+40+41}{2}=45\\text{ cm}]] ; périmètre [[P=90\\text{ cm}]]. Aire [[K=\\frac{9\\times40}{2}=180\\text{ cm}^2]] et rayon du cercle inscrit [[r=\\frac{180}{45}=4\\text{ cm}]]. Le demi-périmètre soutient les calculs géométriques pour un panneau industriel idéalisé, comme le dimensionnement d'un bossage circulaire qui doit rester à l'écart des trois bords." },
          { "kind": "h3", "text": "Exemple 8 : vitrail triangulaire" },
          { "kind": "p", "text": "Une section de verre en triangle rectangle a [[a=12\\text{ in},\\;b=16\\text{ in},\\;c=20\\text{ in}]]. Alors [[s=\\frac{12+16+20}{2}=24\\text{ in}]] et [[P=48\\text{ in}]]. L'aire [[K=\\frac{12\\times16}{2}=96\\text{ in}^2]] donne un rayon du cercle inscrit [[r=\\frac{96}{24}=4\\text{ in}]]. La relation est directe : le demi-périmètre divise le contour par deux, et diviser l'aire par ce demi-contour donne le rayon du cercle inscrit pour la maquette." },
          { "kind": "h3", "text": "Exemple 9 : parcelle de terrain triangulaire arpentée" },
          { "kind": "p", "text": "Un modèle simplifié de parcelle en triangle rectangle a [[a=20\\text{ m},\\;b=21\\text{ m},\\;c=29\\text{ m}]]. Demi-périmètre [[s=\\frac{20+21+29}{2}=35\\text{ m}]] ; périmètre [[P=70\\text{ m}]]. Aire [[K=\\frac{20\\times21}{2}=210\\text{ m}^2]] et rayon du cercle inscrit [[r=\\frac{210}{35}=6\\text{ m}]]. Dans un modèle simplifié d'arpentage, le demi-périmètre sert d'entrée compacte pour les contrôles d'aire et de rayon du cercle inscrit, par exemple pour vérifier une aire de parcelle calculée avec la formule de Héron." },
          { "kind": "h3", "text": "Exemple 10 : cadre architectural triangulaire" },
          { "kind": "p", "text": "Un cadre architectural en triangle rectangle a [[a=12\\text{ m},\\;b=35\\text{ m},\\;c=37\\text{ m}]]. Alors [[s=\\frac{12+35+37}{2}=42\\text{ m}]] et [[P=84\\text{ m}]]. L'aire [[K=\\frac{12\\times35}{2}=210\\text{ m}^2]] donne un rayon du cercle inscrit [[r=\\frac{210}{42}=5\\text{ m}]]. Cette valeur peut soutenir la modélisation mathématique d'un élément circulaire à l'intérieur du cadre triangulaire, comme une fenêtre ronde centrée sur le centre du cercle inscrit." },
          { "kind": "h3", "text": "Exemple 11 : grand revêtement de sol triangulaire" },
          { "kind": "p", "text": "Une section de sol en triangle rectangle a [[a=28\\text{ m},\\;b=45\\text{ m},\\;c=53\\text{ m}]]. Demi-périmètre [[s=\\frac{28+45+53}{2}=63\\text{ m}]] ; périmètre [[P=126\\text{ m}]]. Aire [[K=\\frac{28\\times45}{2}=630\\text{ m}^2]] et rayon du cercle inscrit [[r=\\frac{630}{63}=10\\text{ m}]]. Ici, le demi-périmètre relie les mesures des côtés à la géométrie du cercle inscrit du modèle : un seul nombre fait le pont entre le contour et le plus grand cercle inscriptible." },
          { "kind": "h3", "text": "Exemple 12 : plaque de support triangulaire industrielle" },
          { "kind": "p", "text": "Une grande plaque en triangle rectangle a [[a=33\\text{ cm},\\;b=56\\text{ cm},\\;c=65\\text{ cm}]]. Alors [[s=\\frac{33+56+65}{2}=77\\text{ cm}]] et [[P=154\\text{ cm}]]. L'aire [[K=\\frac{33\\times56}{2}=924\\text{ cm}^2]] donne un rayon du cercle inscrit [[r=\\frac{924}{77}=12\\text{ cm}]]. Ces mesures alimentent un modèle géométrique pour un raccord circulaire ou un élément de conception interne, avec le demi-périmètre comme valeur intermédiaire qui donne accès au rayon du cercle inscrit." }
        ],
        "table": {
          "headers": ["Application pratique", "Cathète a", "Cathète b", "Hypoténuse c", "Périmètre P", "Demi-périmètre s", "Aire K", "Rayon inscrit r", "Unité"],
          "rows": [
            ["Fenêtre triangulaire", "3", "4", "5", "12", "6", "6", "1", "m"],
            ["Support métallique", "5", "12", "13", "30", "15", "30", "2", "cm"],
            ["Aération de pignon", "6", "8", "10", "24", "12", "24", "2", "ft"],
            ["Aménagement de jardin", "7", "24", "25", "56", "28", "84", "3", "m"],
            ["Panneau CNC", "8", "15", "17", "40", "20", "60", "3", "cm"],
            ["Emblème de signalisation", "9", "12", "15", "36", "18", "54", "3", "in"],
            ["Plaque industrielle", "9", "40", "41", "90", "45", "180", "4", "cm"],
            ["Vitrail", "12", "16", "20", "48", "24", "96", "4", "in"],
            ["Parcelle arpentée", "20", "21", "29", "70", "35", "210", "6", "m"],
            ["Cadre architectural", "12", "35", "37", "84", "42", "210", "5", "m"],
            ["Revêtement de sol", "28", "45", "53", "126", "63", "630", "10", "m"],
            ["Plaque de support", "33", "56", "65", "154", "77", "924", "12", "cm"]
          ]
        },
        "closingParagraphs": ["Quelques rappels s'appliquent à chaque ligne ci-dessus. Chaque application est un modèle géométrique simplifié, pas une spécification de construction : les dimensions réelles exigent une vérification séparée, la résistance structurelle ne se lit pas dans le demi-périmètre, et les vraies ouvertures circulaires peuvent exiger des dégagements de fabrication supplémentaires. Le demi-périmètre est une valeur intermédiaire mathématique, le rayon du cercle inscrit est le rayon du cercle inscrit, et le cercle inscrit touche les trois côtés."]
      },
      "sec-inradius": {
        "h2": "Quel est le lien entre le demi-périmètre et le rayon du cercle inscrit d'un triangle rectangle ?",
        "blocks": [
          { "kind": "p", "text": "C'est l'une des sections les plus importantes de l'article, parce que le rayon du cercle inscrit est la principale raison pour laquelle le demi-périmètre existe en tant que quantité nommée. Le cercle inscrit est le plus grand cercle qui tient à l'intérieur d'un triangle tout en touchant les trois côtés, et son rayon s'appelle le rayon du cercle inscrit, noté [[r]]." },
          { "kind": "h3", "text": "Relation entre l'aire et le demi-périmètre" },
          { "kind": "p", "text": "Pour tout triangle, l'aire, le rayon du cercle inscrit et le demi-périmètre sont liés par une seule formule compacte :" },
          { "kind": "p", "text": "[[[\\boxed{K=rs}]]]" },
          { "kind": "p", "text": "où [[K]] est l'aire du triangle, [[r]] est le rayon du cercle inscrit et [[s]] est le demi-périmètre. Réarrangée, elle donne le rayon du cercle inscrit :" },
          { "kind": "p", "text": "[[[\\boxed{r=\\frac{K}{s}}]]]" },
          { "kind": "p", "text": "Connaître le demi-périmètre et l'aire permet donc de calculer directement le rayon du cercle inscrit : divisez l'aire par le demi-périmètre. C'est le bénéfice pratique du demi-périmètre. Il comprime trois longueurs de côtés en un nombre unique qui, avec l'aire, révèle le cercle inscrit." },
          { "kind": "h3", "text": "Formule spéciale du rayon du cercle inscrit pour les triangles rectangles" },
          { "kind": "p", "text": "Pour un triangle rectangle, l'aire est [[K=\\frac{ab}{2}]] et le demi-périmètre est [[s=\\frac{a+b+c}{2}]]. En substituant les deux dans [[r=\\frac{K}{s}]], on obtient :" },
          { "kind": "p", "text": "[[[r=\\frac{ab/2}{(a+b+c)/2}]]]" },
          { "kind": "p", "text": "En simplifiant :" },
          { "kind": "p", "text": "[[[\\boxed{r=\\frac{ab}{a+b+c}}]]]" },
          { "kind": "p", "text": "Il existe aussi une formule équivalente propre au triangle rectangle qui évite entièrement l'aire :" },
          { "kind": "p", "text": "[[[\\boxed{r=\\frac{a+b-c}{2}}]]]" },
          { "kind": "p", "text": "Ces deux expressions sont équivalentes pour un triangle rectangle grâce à la relation de Pythagore : l'algèbre s'effondre une fois [[a^2+b^2=c^2]] appliqué. L'une ou l'autre forme donne le même rayon du cercle inscrit ; la seconde est souvent plus rapide à la main." },
          { "kind": "h3", "text": "Exemple 3-4-5 entièrement résolu" },
          { "kind": "p", "text": "Avec [[a=3,\\;b=4,\\;c=5]] : demi-périmètre [[s=\\frac{3+4+5}{2}=6]], aire [[K=\\frac{3\\times4}{2}=6]], rayon du cercle inscrit [[r=\\frac{6}{6}]], donc [[[\\boxed{r=1}]]] Vérifiez avec le raccourci : [[r=\\frac{3+4-5}{2}]], ce qui donne [[[\\boxed{r=1}]]] Les deux méthodes produisent la même réponse parce que ce sont les mêmes mathématiques écrites de deux façons : l'une passe par l'aire, l'autre l'élimine algébriquement." },
          { "kind": "h3", "text": "Pourquoi le demi-périmètre est-il important pour les calculs de cercle inscrit ?" },
          { "kind": "p", "text": "Le demi-périmètre est le pont entre le contour du triangle et son cercle inscrit. Les concepteurs l'utilisent pour dimensionner des dégagements circulaires à l'intérieur de pièces triangulaires, pour placer des éléments circulaires inscrits en conception géométrique, pour coter des dessins techniques, et pour mener des démonstrations mathématiques qui relient l'aire au rayon. Le rayon du cercle inscrit se rattache aussi à la vérification de l'aire : si [[K]], [[r]] et [[s]] ne vérifient pas [[K=rs]], quelque chose cloche dans la chaîne. Cette calculatrice ne calcule pas le rayon du cercle inscrit automatiquement ; elle fournit le demi-périmètre, et les formules ci-dessus prennent le relais." }
        ],
        "imgAlt": "Triangle rectangle 3-4-5 avec le cercle inscrit de rayon 1 ; demi-périmètre s = 6, aire K = 6, r = K/s",
        "figcaption": "Le cercle inscrit touche les trois côtés ; avec s = 6 et K = 6, le rayon du cercle inscrit r = K / s = 1."
      },
      "sec-heron": {
        "h2": "Comment le demi-périmètre est-il utilisé dans la formule de Héron ?",
        "blocks": [
          { "kind": "p", "text": "La formule de Héron calcule l'aire d'un triangle à partir de ses trois longueurs de côtés, sans exiger une hauteur fournie séparément. Le demi-périmètre en est l'ingrédient central : la formule s'écrit en fonction de [[s]] et des différences entre [[s]] et chaque côté." },
          { "kind": "p", "text": "[[[\\boxed{K=\\sqrt{s(s-a)(s-b)(s-c)}}]]]" },
          { "kind": "p", "text": "Ici [[K]] est l'aire du triangle, [[s]] est le demi-périmètre, et [[a]], [[b]], [[c]] sont les trois longueurs de côtés." },
          { "kind": "h3", "text": "Pourquoi la formule de Héron utilise-t-elle le demi-périmètre ?" },
          { "kind": "p", "text": "Le demi-périmètre est calculé d'abord parce qu'il centre l'expression : chaque facteur [[s-a]], [[s-b]], [[s-c]] mesure de combien le demi-périmètre dépasse un côté. Multiplier ces trois excédents par [[s]] lui-même et prendre la racine carrée convertit l'information du contour en aire. La formule fonctionne pour tout triangle valide, pas seulement les triangles rectangles, et c'est pourquoi le demi-périmètre mérite sa place comme outil géométrique général plutôt que comme curiosité du triangle rectangle." },
          { "kind": "h3", "text": "Exemple 3-4-5 entièrement résolu" },
          { "kind": "p", "text": "Avec [[a=3,\\;b=4,\\;c=5]], calculez d'abord le demi-périmètre : [[s=\\frac{3+4+5}{2}=6]]. Substituez dans la formule de Héron : [[K=\\sqrt{6(6-3)(6-4)(6-5)}]]. Simplifiez : [[K=\\sqrt{6\\times3\\times2\\times1}]], puis [[K=\\sqrt{36}]], ce qui donne [[[\\boxed{K=6\\text{ square units}}]]]" },
          { "kind": "h3", "text": "Vérifiez le résultat avec la formule d'aire du triangle rectangle" },
          { "kind": "p", "text": "La formule d'aire directe du triangle rectangle est [[K=\\frac{ab}{2}]]. En substituant : [[K=\\frac{3\\times4}{2}]], ce qui donne [[[\\boxed{K=6\\text{ square units}}]]] Les deux formules produisent la même aire, et c'est exactement le point : la formule de Héron, construite sur le demi-périmètre, confirme indépendamment le calcul plus simple." },
          { "kind": "h3", "text": "En quoi est-ce utile ?" },
          { "kind": "p", "text": "Les triangles rectangles ont une formule d'aire directe plus simple, donc la formule de Héron est rarement le chemin le plus rapide vers l'aire. Sa valeur réside dans le contrôle des calculs d'aire, dans la compréhension de la façon dont les seules longueurs de côtés déterminent l'aire, dans la résolution de problèmes basés sur les longueurs de côtés où aucune hauteur n'est donnée, et dans la vérification des solutions mathématiques par une voie indépendante. Chaque fois que deux formules sans rapport s'accordent sur l'aire, la confiance dans la réponse augmente fortement." }
        ],
        "imgAlt": "Formule de Héron appliquée à un triangle 3-4-5 : le demi-périmètre 6 donne l'aire 6, vérifiée par K = ab/2",
        "figcaption": "Cinq étapes : les côtés, le demi-périmètre s = 6, la substitution de Héron, l'aire K = 6, le contrôle avec K = ab / 2."
      },
      "sec-vs-perimeter": {
        "h2": "Quelle est la différence entre le périmètre et le demi-périmètre ?",
        "blocks": [
          { "kind": "p", "text": "Les deux quantités décrivent le même contour à des échelles différentes, et les confondre est l'une des erreurs les plus fréquentes dans le travail sur les triangles. Cette section trace la ligne clairement." },
          { "kind": "h3", "text": "Le périmètre mesure le contour complet" },
          { "kind": "p", "text": "Le périmètre est la longueur totale autour du triangle :" },
          { "kind": "p", "text": "[[[\\boxed{P=a+b+c}]]]" },
          { "kind": "p", "text": "Il représente le tour complet des trois bords. Pour le triangle 3-4-5, [[P=12]] unités." },
          { "kind": "h3", "text": "Le demi-périmètre est la moitié du total" },
          { "kind": "p", "text": "Le demi-périmètre est la moitié du périmètre numérique :" },
          { "kind": "p", "text": "[[[\\boxed{s=\\frac{a+b+c}{2}}]]]" },
          { "kind": "p", "text": "Pour le même triangle 3-4-5, [[s=6]] unités. Même triangle, même contour, mais le nombre est divisé par deux parce que les formules qui le consomment, la formule de Héron et la relation du rayon du cercle inscrit, sont écrites pour la demi-valeur." },
          { "kind": "h3", "text": "Comparaison numérique" },
          { "kind": "p", "text": "Prenez un triangle rectangle 6-8-10. Périmètre : [[P=6+8+10]], donc [[[\\boxed{P=24}]]] Demi-périmètre : [[s=\\frac{24}{2}]], donc [[[\\boxed{s=12}]]] Le périmètre répond à « quelle est la longueur de tout le contour ? » ; le demi-périmètre répond à « quelle est la valeur de demi-contour dont ma formule a besoin ? »." },
          { "kind": "h3", "text": "Quand utiliser chaque mesure ?" },
          { "kind": "p", "text": "Utilisez le périmètre quand le travail concerne la longueur complète du contour : encadrer une forme triangulaire, clôturer une parcelle triangulaire, estimer des matériaux de bordure ou mesurer une moulure. Utilisez le demi-périmètre quand le travail est mathématique : la formule de Héron, les calculs de rayon du cercle inscrit, les relations aire-rayon, les démonstrations de géométrie avancée ou la vérification indépendante d'un résultat d'aire. La règle empirique est simple : le travail physique sur le contour prend [[P]] ; le travail sur les formules prend [[s]]." },
          { "kind": "h3", "text": "Le demi-périmètre est-il la moitié de l'aire ?" },
          { "kind": "p", "text": "Non, et cette confusion mérite une correction ferme. Le demi-périmètre est une mesure linéaire : pour 3-4-5, c'est 6 unités. L'aire est une mesure à deux dimensions : pour 3-4-5, c'est 6 unités carrées. Les nombres coïncident ici par accident, mais les quantités diffèrent en nature. Diviser une longueur par deux ne produit jamais une aire, pas plus que diviser un périmètre par deux ne produit une surface." }
        ],
        "table": {
          "headers": ["Grandeur", "Symbole", "Formule", "Signification", "Unité", "Application courante"],
          "rows": [
            ["Périmètre", "[[P]]", "[[P=a+b+c]]", "Longueur totale du contour", "Linéaire (m, ft, in)", "Clôtures, encadrements, moulures"],
            ["Demi-périmètre", "[[s]]", "[[s=(a+b+c)/2]]", "La moitié de la longueur du contour", "Linéaire (m, ft, in)", "Formule de Héron, rayon du cercle inscrit"],
            ["Aire", "[[K]]", "[[K=ab/2]]", "Surface délimitée", "Carrée (m², ft², in²)", "Couverture de surface, matériaux"]
          ]
        }
      },
      "sec-missing-side": {
        "h2": "Comment calculer le demi-périmètre quand un côté est manquant",
        "blocks": [
          { "kind": "p", "text": "La calculatrice de cette page exige les trois longueurs de côtés : elle ne peut pas diviser par deux un total qu'elle ne peut pas additionner. Si un côté est inconnu, calculez-le d'abord avec le théorème de Pythagore, puis procédez avec le demi-périmètre comme d'habitude." },
          { "kind": "h3", "text": "Trouver l'hypoténuse" },
          { "kind": "p", "text": "Quand les deux cathètes sont connues, utilisez [[[\\boxed{c=\\sqrt{a^2+b^2}}]]] Exemple : [[a=6]], [[b=8]]. Alors [[c=\\sqrt{6^2+8^2}]], [[c=\\sqrt{100}]], ce qui donne [[[\\boxed{c=10}]]] Le demi-périmètre suit alors : [[s=\\frac{6+8+10}{2}]], donc [[[\\boxed{s=12}]]]" },
          { "kind": "h3", "text": "Trouver une cathète manquante" },
          { "kind": "p", "text": "Quand l'hypoténuse et une cathète sont connues, utilisez [[[\\boxed{a=\\sqrt{c^2-b^2}}]]] Exemple : [[c=13]], [[b=12]]. Alors [[a=\\sqrt{169-144}]], ce qui donne [[[\\boxed{a=5}]]] Puis [[s=\\frac{5+12+13}{2}]], donc [[[\\boxed{s=15}]]]" },
          { "kind": "h3", "text": "Pourquoi faut-il d'abord trouver le côté manquant ?" },
          { "kind": "p", "text": "Le demi-périmètre exige le total complet des trois côtés, et un côté inconnu ne peut pas simplement être ignoré ou traité comme zéro. La forme hypoténuse de Pythagore additionne des carrés ; la forme cathète les soustrait ; appliquer la mauvaise invente un côté qui n'existe pas. Une fois le côté manquant retrouvé, la <a href=\"/right-triangle-side-calculator/\" class=\"text-primary hover:underline\">Calculatrice de côtés d'un triangle rectangle</a> peut revérifier la valeur, et le calcul du demi-périmètre se poursuit sur un terrain solide. Ces étapes de côté manquant sont des méthodes d'accompagnement pédagogiques, pas des saisies supplémentaires dans la calculatrice existante." }
        ]
      },
      "sec-properties": {
        "h2": "Propriétés importantes du demi-périmètre d'un triangle rectangle",
        "blocks": [
          { "kind": "p", "text": "Le demi-périmètre se comporte de façon prévisible. Ces propriétés servent à la fois de contrôles mentaux rapides et d'outils de raisonnement géométrique." },
          { "kind": "h3", "text": "Le demi-périmètre est supérieur à l'hypoténuse" },
          { "kind": "p", "text": "Pour tout triangle valide, [[a+b>c]]. Ajouter [[c]] des deux côtés donne [[a+b+c>2c]], et diviser par deux produit [[[\\boxed{s>c}]]] Le demi-périmètre dépasse toujours le plus long côté. Si un calcul renvoie [[s]] plus petit que [[c]], les noms ou l'arithmétique sont faux." },
          { "kind": "h3", "text": "Le demi-périmètre est inférieur à la somme des cathètes" },
          { "kind": "p", "text": "L'inégalité triangulaire donne aussi [[c<a+b]]. Ajouter [[a+b]] des deux côtés produit [[a+b+c<2(a+b)]], et diviser par deux donne [[[\\boxed{s<a+b}]]] Le demi-périmètre se situe donc strictement entre l'hypoténuse et la somme des cathètes : [[c<s<a+b]]. Pour 3-4-5 : [[5<6<7]]. Cet encadrement est un contrôle de plausibilité rapide pour toute réponse." },
          { "kind": "h3", "text": "Doubler chaque côté double le demi-périmètre" },
          { "kind": "p", "text": "Changez le triangle 3-4-5 d'échelle par deux : [[a_2=2a,\\;b_2=2b,\\;c_2=2c]] donne les côtés 6, 8, 10. Alors [[s_2=\\frac{2a+2b+2c}{2}]], donc [[[\\boxed{s_2=2s}]]] Numériquement, [[s_2=12=2\\times6]]. Le demi-périmètre est une mesure linéaire, donc une mise à l'échelle uniforme le met à l'échelle du même facteur." },
          { "kind": "h3", "text": "Tripler chaque côté triple le demi-périmètre" },
          { "kind": "p", "text": "La même linéarité vaut pour tout facteur d'échelle. Triplez chaque côté et la somme triple ; diviser la somme triplée par deux donne trois fois le demi-périmètre d'origine : [[[\\boxed{s_2=3s}]]] En général, mettre tous les côtés à l'échelle par [[k]] met [[s]] à l'échelle par [[k]]. C'est pourquoi les triangles semblables ont des demi-périmètres proportionnels." },
          { "kind": "h3", "text": "Que se passe-t-il quand un seul côté change ?" },
          { "kind": "p", "text": "Changer un côté en gardant les deux autres fixes change le demi-périmètre numérique de la moitié du changement de longueur du côté, parce qu'un seul terme de la somme bouge. Mais il y a un piège : les mesures résultantes doivent toujours décrire un triangle valide, et pour cette page, un triangle rectangle. Allonger l'hypoténuse d'un triangle 3-4-5 à 6, par exemple, brise [[a^2+b^2=c^2]], donc les nouveaux nombres ne décrivent plus du tout un triangle rectangle. Ajustez un côté d'un triangle rectangle et les autres doivent s'ajuster pour préserver l'angle droit." },
          { "kind": "h3", "text": "Demi-périmètre d'un triangle 45-45-90" },
          { "kind": "p", "text": "Prenez les deux cathètes égales à [[k]]. L'hypoténuse est [[c=k\\sqrt{2}]], donc le demi-périmètre est [[s=\\frac{k+k+k\\sqrt{2}}{2}]], ce qui se simplifie en [[[\\boxed{s=\\frac{k(2+\\sqrt{2})}{2}}]]] Les cathètes égales contribuent symétriquement, et l'hypoténuse irrationnelle laisse sa marque sur le résultat : pour [[k=1]], [[s=1+\\frac{\\sqrt{2}}{2}\\approx1.7071]]." },
          { "kind": "h3", "text": "Demi-périmètre d'un triangle 30-60-90" },
          { "kind": "p", "text": "Si la cathète la plus courte est [[k]], les côtés sont [[k]], [[k\\sqrt{3}]] et [[2k]]. Donc [[s=\\frac{k+k\\sqrt{3}+2k}{2}]], ce qui donne [[[\\boxed{s=\\frac{k(3+\\sqrt{3})}{2}}]]] Numériquement, avec [[k=2]] les côtés sont 2, [[2\\sqrt{3}\\approx3.464]] et 4, donc [[s\\approx4.732]]. La forme radicale exacte est préférable ici : elle garde toute la précision pour tout calcul ultérieur de Héron ou de rayon du cercle inscrit." }
        ]
      },
      "sec-units": {
        "h2": "Comprendre les unités de mesure dans les calculs de demi-périmètre",
        "blocks": [
          { "kind": "p", "text": "Le demi-périmètre fonctionne dans n'importe quelle unité de longueur, mètres, centimètres, millimètres, kilomètres, pieds, pouces, yards ou miles, parce que ce n'est qu'une somme de longueurs divisée par deux. L'unité de la réponse correspond toujours à l'unité des saisies. La seule règle stricte est la cohérence : chaque côté doit être exprimé dans la même unité avant l'addition." },
          { "kind": "h3", "text": "Pourquoi les trois mesures de côtés doivent-elles utiliser des unités compatibles ?" },
          { "kind": "p", "text": "Le demi-périmètre se calcule en additionnant trois longueurs, et des longueurs dans des unités différentes ne s'additionnent pas directement. Additionner 3 mètres à 40 centimètres comme s'il s'agissait de simples nombres donne 43 de rien de significatif. La somme n'est valide que lorsque chaque terme partage une unité, donc la conversion vient avant l'addition, jamais après." },
          { "kind": "h3", "text": "Exemple résolu de conversion d'unités" },
          { "kind": "p", "text": "Avec [[a=3\\text{ ft}]], [[b=48\\text{ inches}]], [[c=5\\text{ ft}]]. Convertissez d'abord les pouces en pieds : [[48\\text{ inches}=4\\text{ ft}]]. Les trois côtés sont maintenant en pieds : [[s=\\frac{3+4+5}{2}]], ce qui donne [[[\\boxed{s=6\\text{ ft}}]]] Les mesures doivent être converties avant l'addition parce que la formule additionne des nombres bruts ; elle ne peut pas savoir que 48 signifiait des pouces à moins que vous le convertissiez." },
          { "kind": "h3", "text": "En quoi les sélecteurs d'unités de la calculatrice aident-ils ?" },
          { "kind": "p", "text": "Chaque saisie de cette page a son propre sélecteur d'unité de mesure, qui permet de déclarer l'unité du nombre tapé. Réglez chaque sélecteur sur l'unité réelle de sa saisie pour que l'outil combine les valeurs sur une base cohérente. Ne présumez pas de fonctions de conversion au-delà de ce que montre l'interface : les sélecteurs décrivent vos saisies, et le demi-périmètre est calculé à partir des valeurs telles que saisies." },
          { "kind": "h3", "text": "Travailler avec des mesures de côtés décimales" },
          { "kind": "p", "text": "Les décimales suivent la même formule. Avec [[a=2.5,\\;b=6,\\;c=6.5]] : [[s=\\frac{2.5+6+6.5}{2}]], donc [[s=\\frac{15}{2}]], ce qui donne [[[\\boxed{s=7.5\\text{ units}}]]] Gardez toute la précision décimale pendant l'addition et la division ; n'arrondissez que la réponse finale affichée, et seulement si le problème l'exige." },
          { "kind": "h3", "text": "Travailler avec des longueurs de côtés irrationnelles" },
          { "kind": "p", "text": "Certains triangles rectangles ont des côtés irrationnels, et la formule les traite de la même façon. Prenez un triangle 45-45-90 avec [[a=1,\\;b=1,\\;c=\\sqrt{2}]] : [[s=\\frac{1+1+\\sqrt{2}}{2}]], ce qui donne la forme exacte [[[\\boxed{s=1+\\frac{\\sqrt{2}}{2}}]]], environ [[s\\approx1.7071]]. La notation radicale exacte est précieuse en mathématiques parce qu'elle préserve toute la précision : toute utilisation ultérieure de [[s]] dans la formule de Héron ou un calcul de rayon du cercle inscrit part de la vraie valeur, pas d'une valeur arrondie." },
          { "kind": "h3", "text": "Pourquoi éviter d'arrondir trop tôt ?" },
          { "kind": "p", "text": "Un arrondi prématuré injecte de l'erreur dans chaque calcul ultérieur, et le demi-périmètre est souvent une valeur intermédiaire, pas la réponse finale. Arrondir [[s]] à deux décimales avant de l'introduire dans la formule de Héron, où il apparaît quatre fois, aggrave l'erreur sensiblement. Gardez une précision suffisante pendant les étapes intermédiaires : conservez la décimale complète ou le radical exact, et n'arrondissez qu'une fois, à la fin, à la précision qu'exige le problème." }
        ]
      },
      "sec-mistakes": {
        "h2": "Erreurs fréquentes dans le calcul du demi-périmètre d'un triangle rectangle",
        "blocks": [
          { "kind": "p", "text": "Seize erreurs expliquent presque tous les demi-périmètres faux. Chacune est expliquée avec ce qui va mal, pourquoi cela arrive et la bonne approche." },
          { "kind": "p", "text": "<strong>1. Oublier de diviser le total par deux.</strong> Additionner 3 + 4 + 5 = 12 et s'arrêter donne le périmètre, pas le demi-périmètre. Terminez toujours par la division : [[12/2=6]]." },
          { "kind": "p", "text": "<strong>2. Diviser chaque côté avant de comprendre la formule.</strong> Diviser les côtés individuellement par deux puis additionner fonctionne arithmétiquement mais masque la structure de la formule. Additionnez d'abord, divisez une seule fois : [[s=(3+4+5)/2]]." },
          { "kind": "p", "text": "<strong>3. Oublier d'inclure l'hypoténuse.</strong> L'hypoténuse est un bord du contour. L'omettre dans un triangle 3-4-5 donne [[(3+4)/2=3.5]] au lieu de 6." },
          { "kind": "p", "text": "<strong>4. N'utiliser que les deux cathètes perpendiculaires.</strong> Même erreur que ci-dessus sous un autre habit. Les cathètes seules ne sont pas tout le contour ; l'hypoténuse ferme la figure et doit être comptée." },
          { "kind": "p", "text": "<strong>5. Confondre le demi-périmètre avec le périmètre complet.</strong> Répondre 12 pour un triangle 3-4-5 répond à « combien vaut P ? » quand la question portait sur s. Rappelez-vous : [[s=P/2]]." },
          { "kind": "p", "text": "<strong>6. Confondre le demi-périmètre avec l'aire.</strong> Pour 3-4-5, les deux valent 6 numériquement, ce qui invite à la confusion. Ils diffèrent en nature : 6 unités de longueur contre 6 unités carrées de surface." },
          { "kind": "p", "text": "<strong>7. Exprimer le résultat en unités carrées.</strong> Un demi-périmètre de 6 cm carrés est une erreur de catégorie. Diviser une longueur par deux laisse une longueur : 6 cm, pas 6 cm²." },
          { "kind": "p", "text": "<strong>8. Utiliser une hypoténuse incorrecte.</strong> Si la valeur de l'hypoténuse est fausse, la somme est fausse et le demi-périmètre aussi. Vérifiez [[c=\\sqrt{a^2+b^2}]] quand l'hypoténuse a été calculée plutôt que mesurée." },
          { "kind": "p", "text": "<strong>9. Saisir des mesures qui ne forment pas un triangle rectangle.</strong> Testez [[a^2+b^2=c^2]] avant de faire confiance à l'étiquette « triangle rectangle ». L'addition fonctionne toujours, mais le sens géométrique change." },
          { "kind": "p", "text": "<strong>10. Mélanger centimètres et mètres.</strong> Additionner 3 m à 40 cm ne donne 43 de quoi que ce soit. Convertissez d'abord dans une unité." },
          { "kind": "p", "text": "<strong>11. Mélanger pieds et pouces.</strong> Le piège impérial classique. Convertissez les pouces en pieds (divisez par 12) avant d'additionner, ou réglez les sélecteurs d'unités en conséquence." },
          { "kind": "p", "text": "<strong>12. Arrondir trop tôt.</strong> Arrondir [[\\sqrt{2}]] à 1,4 avant d'additionner accumule l'erreur. N'arrondissez que la réponse finale." },
          { "kind": "p", "text": "<strong>13. Utiliser un côté manquant sans le calculer.</strong> Deux côtés connus ne sont pas un demi-périmètre. Retrouvez le troisième avec le théorème de Pythagore d'abord, puis additionnez et divisez par deux." },
          { "kind": "p", "text": "<strong>14. Mal appliquer la formule de Héron.</strong> Les facteurs sont [[s-a]], [[s-b]] et [[s-c]] : chaque côté est soustrait du demi-périmètre, pas d'un autre côté. Mélanger les soustractions casse l'aire." },
          { "kind": "p", "text": "<strong>15. Confondre le rayon du cercle inscrit avec le rayon du cercle circonscrit.</strong> Le rayon du cercle inscrit [[r=K/s]] touche les trois côtés de l'intérieur ; le rayon du cercle circonscrit passe par les sommets et vaut [[c/2]] pour un triangle rectangle. Des cercles différents, des formules différentes." },
          { "kind": "p", "text": "<strong>16. Supposer que le demi-périmètre décrit un demi-contour physique.</strong> C'est la moitié du total numérique, pas un parcours marqué à mi-chemin autour du triangle. Traitez-le comme la valeur intermédiaire dérivée qu'il est." },
          { "kind": "p", "text": "<strong>Faux contre juste, côte à côte.</strong> Avec [[a=3,\\;b=4,\\;c=5]] : incorrect est [[s=3+4+5=12]], qui saute la division et annonce le périmètre complet. Incorrect aussi est [[s=(3+4)/2=3.5]], qui omet l'hypoténuse. Correct est [[s=\\frac{3+4+5}{2}]], ce qui donne [[[\\boxed{s=6}]]]" }
        ]
      },
      "sec-verify": {
        "h2": "Comment vérifier que votre calcul de demi-périmètre est correct",
        "blocks": [
          { "kind": "p", "text": "Huit contrôles indépendants attrapent presque toutes les erreurs. Le triangle 3-4-5 illustre chacun. Les contrôles indépendants comptent parce qu'ils échouent de façons différentes : quand des méthodes sans rapport s'accordent, la réponse a gagné sa confiance." },
          { "kind": "p", "text": "<strong>Méthode 1 : Doublez le demi-périmètre.</strong> [[[\\boxed{P=2s}]]] doit égaler le périmètre complet : [[2\\times6=12=3+4+5]]. Si doubler ne reproduit pas la somme des côtés, la division ou l'addition a mal tourné." },
          { "kind": "p", "text": "<strong>Méthode 2 : Recalculez à partir des trois côtés.</strong> Recalculez [[s=\\frac{a+b+c}{2}]] depuis zéro : [[(3+4+5)/2=6]]. Un second passage attrape les fautes de frappe et les glissades arithmétiques." },
          { "kind": "p", "text": "<strong>Méthode 3 : Vérifiez la relation de Pythagore.</strong> Contrôlez [[a^2+b^2=c^2]] : [[9+16=25]]. Cela confirme que les côtés forment un triangle rectangle, ce qui valide les noms de côtés dont dépend le demi-périmètre." },
          { "kind": "p", "text": "<strong>Méthode 4 : Contrôlez l'hypoténuse.</strong> Confirmez [[c>a]] et [[c>b]] : 5 est supérieur à 3 et supérieur à 4. Si la prétendue hypoténuse n'est pas le plus long côté, les noms sont faux." },
          { "kind": "p", "text": "<strong>Méthode 5 : Contrôlez l'inégalité triangulaire.</strong> Confirmez [[a+b>c]] : [[3+4=7>5]]. La somme des cathètes doit dépasser l'hypoténuse, sinon aucun triangle n'existe." },
          { "kind": "p", "text": "<strong>Méthode 6 : Vérifiez la borne du demi-périmètre.</strong> [[[\\boxed{s>c}]]] doit tenir : [[6>5]]. Cette seule inégalité attrape un nombre surprenant d'erreurs de nommage." },
          { "kind": "p", "text": "<strong>Méthode 7 : Contrôlez les unités.</strong> Confirmez que les trois longueurs de côtés utilisent des unités compatibles et que la sortie est une mesure linéaire. Des unités mélangées invalident la somme même quand l'arithmétique est parfaite." },
          { "kind": "p", "text": "<strong>Méthode 8 : Comparez avec les étapes de résolution de la calculatrice.</strong> Le résultat affiché et les étapes de calcul aident à repérer les erreurs : si une étape montre un côté mal tapé ou une division sautée, l'erreur est visible avant que la réponse soit utilisée." }
        ]
      },
      "sec-conclusion": {
        "h2": "La moitié du contour, une compréhension complète",
        "blocks": [
          { "kind": "p", "text": "Le demi-périmètre d'un triangle rectangle est une petite idée à longue portée. Une addition et une division produisent un nombre qui donne accès au rayon du cercle inscrit, alimente la formule de Héron et affine la vérification de l'aire. La formule demande trois côtés parce que le contour a trois bords, et l'hypoténuse gagne sa place dans la somme comme le bord qui ferme la figure. Tout le reste de ce guide, les exemples résolus, les douze applications, les propriétés, les conversions d'unités, les seize erreurs, les huit contrôles de vérification, existe pour protéger ce total divisé par deux des petites erreurs de nommage et d'unités qui produisent des réponses fausses d'apparence plausible." },
          { "kind": "p", "text": "Utilisez la calculatrice de cette page chaque fois que les trois côtés sont mesurés, retrouvez un côté manquant par le théorème de Pythagore quand ils ne le sont pas, et contrôlez le résultat avec les bornes c &lt; s &lt; a + b avant que le nombre entre dans un dessin ou un modèle. Quand la question se tourne vers la surface à l'intérieur du contour, la formule de Héron et la calculatrice d'aire attendent ; quand elle se tourne vers le cercle à l'intérieur du triangle, le rayon du cercle inscrit est à une division de là." }
        ]
      }
    },
    "relatedHeading": "Découvrez les calculatrices de triangle rectangle associées",
    "relatedIntro": "Chacun de ces outils prolonge le calcul du demi-périmètre dans une direction : le contour complet, la surface, la voie de l'aire par le demi-périmètre, le cercle inscrit, ou les côtés manquants derrière tout cela.",
    "relatedItems": [
      "Calculatrice de périmètre d'un triangle rectangle",
      "Calculatrice d'aire d'un triangle rectangle",
      "Calculatrice d'aire d'un triangle rectangle à partir du demi-périmètre",
      "Calculatrice de rayon du cercle inscrit d'un triangle rectangle",
      "Calculatrice de côtés d'un triangle rectangle"
    ],
    "faqHeading": "Questions fréquemment posées",
    "faqs": [
      {
        "question": "Quelle est la formule du demi-périmètre d'un triangle rectangle ?",
        "answer": "La formule est s = (a + b + c) / 2, où a et b sont les deux cathètes formant l'angle de 90 degrés et c est l'hypoténuse, le plus long côté. Additionnez les trois longueurs de côtés, puis divisez le total par deux. De façon équivalente, s = P / 2, où P est le périmètre complet."
      },
      {
        "question": "Que signifie demi-périmètre ?",
        "answer": "Demi-périmètre signifie la moitié du périmètre. Demi signifie moitié et périmètre signifie la longueur complète du contour, donc le demi-périmètre est exactement la moitié de la distance totale autour du triangle. C'est une mesure géométrique dérivée utilisée comme valeur intermédiaire dans de nombreuses formules du triangle."
      },
      {
        "question": "Pourquoi le demi-périmètre est-il la moitié du périmètre ?",
        "answer": "C'est sa définition : le demi-périmètre se construit en prenant le périmètre complet et en le divisant par deux. La demi-valeur s'avère être la quantité pour laquelle sont écrites des formules comme la formule de Héron et la relation du rayon du cercle inscrit K = rs, et c'est pourquoi elle a mérité son propre nom et son symbole, s."
      },
      {
        "question": "Ai-je besoin des trois côtés pour calculer le demi-périmètre ?",
        "answer": "Oui. Le demi-périmètre est la moitié de la somme des trois longueurs de côtés, donc chaque côté doit être connu, y compris l'hypoténuse. Si un côté est manquant, retrouvez-le d'abord avec le théorème de Pythagore : c = √(a² + b²) pour une hypoténuse manquante, ou a = √(c² − b²) pour une cathète manquante."
      },
      {
        "question": "Quelle est la différence entre le périmètre et le demi-périmètre ?",
        "answer": "Le périmètre P = a + b + c est la longueur complète du contour, tandis que le demi-périmètre s = (a + b + c) / 2 en est la moitié. Utilisez le périmètre pour le travail physique sur le contour comme les clôtures ou les encadrements, et le demi-périmètre pour le travail sur les formules comme la formule de Héron, les calculs de rayon du cercle inscrit et les démonstrations géométriques. Pour un triangle 3-4-5, P = 12 et s = 6."
      },
      {
        "question": "Le demi-périmètre se mesure-t-il en unités carrées ?",
        "answer": "Non. Le demi-périmètre est une mesure de longueur à une dimension, donc il prend des unités linéaires : mètres, centimètres, pieds ou pouces, comme les longueurs de côtés. Les unités carrées appartiennent à l'aire. Annoncer un demi-périmètre de 6 cm² est une erreur de catégorie ; l'unité correcte est 6 cm."
      },
      {
        "question": "Quel est le demi-périmètre d'un triangle rectangle 3-4-5 ?",
        "answer": "Additionnez les côtés : 3 + 4 + 5 = 12, puis divisez par deux : s = 6 unités. Le périmètre complet est de 12 unités. Les côtés vérifient 3² + 4² = 5², ce qui confirme l'angle droit, et le demi-périmètre 6 dépasse l'hypoténuse 5, comme ce doit être le cas pour tout triangle valide."
      },
      {
        "question": "Pourquoi le demi-périmètre est-il utilisé dans la formule de Héron ?",
        "answer": "La formule de Héron, K = √(s(s − a)(s − b)(s − c)), calcule l'aire à partir des seules longueurs de côtés, et elle s'écrit en fonction du demi-périmètre s et des différences s − a, s − b, s − c. Calculer s d'abord centre l'expression et la garde compacte. Pour 3-4-5, s = 6 donne K = √(6 × 3 × 2 × 1) = 6 unités carrées."
      },
      {
        "question": "Quel est le lien entre le demi-périmètre et le rayon du cercle inscrit ?",
        "answer": "L'aire, le rayon du cercle inscrit et le demi-périmètre vérifient K = rs, donc r = K / s. Pour un triangle rectangle, cela se simplifie en r = (a + b − c) / 2. Pour 3-4-5 : s = 6, K = 6, donc r = 1. Le demi-périmètre est le pont qui convertit trois longueurs de côtés en rayon du cercle inscrit."
      },
      {
        "question": "Puis-je calculer le demi-périmètre si un côté est manquant ?",
        "answer": "Oui, mais trouvez d'abord le côté manquant. Avec les cathètes 6 et 8, l'hypoténuse est √(36 + 64) = 10, donc s = (6 + 8 + 10) / 2 = 12. Avec l'hypoténuse 13 et la cathète 12, la cathète manquante est √(169 − 144) = 5, donc s = (5 + 12 + 13) / 2 = 15. La calculatrice de cette page exige les trois côtés saisis."
      },
      {
        "question": "Comment puis-je vérifier ma réponse de demi-périmètre ?",
        "answer": "Doublez-la : 2s doit égaler le périmètre complet a + b + c. Vérifiez que s dépasse l'hypoténuse (s > c) et reste sous la somme des cathètes (s < a + b). Confirmez la relation de Pythagore a² + b² = c², vérifiez que les trois côtés partagent une unité, et comparez avec les étapes de résolution de la calculatrice."
      },
      {
        "question": "Le demi-périmètre peut-il servir à calculer l'aire d'un triangle ?",
        "answer": "Oui, via la formule de Héron : K = √(s(s − a)(s − b)(s − c)). C'est un contrôle indépendant de la formule directe du triangle rectangle K = ab / 2. Pour 3-4-5, les deux donnent 6 unités carrées. La formule de Héron est la plus précieuse quand aucune hauteur n'est connue ou quand vous voulez une seconde computation sans rapport qui confirme l'aire."
      }
    ]
  }
};
