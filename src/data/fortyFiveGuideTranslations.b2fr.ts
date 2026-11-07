// fortyFiveGuideTranslations.bfr.ts: 45-45-90 Triangle
// Guide (Page 40 of 45) translation.
export const FORTYFIVE_B2_FR = {
  "fr": {
      "meta": {
        "title": "Calculatrice de triangle 45-45-90 : hypoténuse, côté, aire, périmètre",
        "description": "Trouvez l'hypoténuse, le côté manquant, l'aire et le périmètre d'un triangle 45-45-90 à partir d'un côté connu, grâce au rapport fixe 1:1:√2 et à des réponses exactes avec radicaux.",
        "primaryKeyword": "45-45-90 Triangle Calculator",
        "slug": "45-45-90-triangle-calculator",
      },
      "tocHeading": "Navigation des sections",
      "tocItems": {
        "sec-intro": "Calculatrice de triangle 45-45-90",
        "sec-calculate": "Calculer l'hypoténuse, un côté, l'aire ou le périmètre",
        "sec-what": "Qu'est-ce qu'un triangle 45-45-90 ?",
        "sec-isosceles": "Pourquoi l'appelle-t-on triangle rectangle isocèle ?",
        "sec-legs": "Comprendre les deux côtés égaux et l'hypoténuse",
        "sec-ratio": "Le rapport des côtés du triangle 45-45-90",
        "sec-why-sqrt2": "Pourquoi la racine carrée de 2 apparaît-elle ?",
        "sec-hypotenuse": "Formule pour trouver l'hypoténuse à partir d'un côté",
        "sec-leg-hyp": "Formule pour trouver un côté à partir de l'hypoténuse",
        "sec-area": "Comment calculer l'aire d'un triangle 45-45-90",
        "sec-perimeter": "Comment calculer le périmètre d'un triangle 45-45-90",
        "sec-square": "Comment la diagonale d'un carré crée un triangle 45-45-90",
        "sec-step-example": "Exemple résolu pas à pas d'un triangle 45-45-90",
        "sec-examples": "Exemples résolus de calculs sur le triangle 45-45-90",
        "sec-exact": "Réponses exactes et approximations décimales",
        "sec-verify": "Comment vérifier vos calculs sur le triangle 45-45-90",
        "sec-properties": "Propriétés importantes des triangles 45-45-90",
        "sec-vs-3060": "Différence entre les triangles 45-45-90 et 30-60-90",
        "sec-mistakes": "Erreurs fréquentes dans la résolution des triangles 45-45-90",
        "sec-applications": "Applications pratiques des triangles 45-45-90",
        "sec-practice": "Exercices avec réponses",
        "sec-related": "Calculatrices de triangles rectangles associées",
        "sec-faq": "Questions fréquentes",
      },
      "sections": {
        "sec-intro": {
          "h2": "Calculatrice de triangle 45-45-90",
          "blocks": [
            {
              "kind": "p",
              "text": "Trouvez l'hypoténuse, le côté manquant, l'aire et le périmètre d'un triangle 45-45-90 à partir d'un seul côté connu.",
            },
            {
              "kind": "p",
              "text": "Un triangle 45-45-90 est un triangle rectangle dont les trois angles mesurent 45°, 45° et 90°. On l'appelle triangle rectangle isocèle parce que ses deux côtés de l'angle droit sont égaux, et triangle rectangle remarquable parce que ses côtés suivent toujours le même rapport fixe, quelle que soit la taille du triangle. La calculatrice de triangle 45-45-90 de cette page utilise ce rapport pour trouver l'hypoténuse, le côté manquant, l'aire et le périmètre à partir d'une seule longueur que vous saisissez.",
            },
            {
              "kind": "p",
              "text": "Dans le triangle ABC, l'angle A mesure 45°, l'angle B mesure 45° et l'angle C mesure 90°. Le côté BC est le premier côté de l'angle droit [[a]], le côté AC est le deuxième côté de l'angle droit [[b]] et le côté AB est l'hypoténuse [[c]]. Comme les deux angles aigus sont égaux, les deux côtés de l'angle droit sont égaux, [[a = b]], et les trois côtés vérifient toujours le rapport [[a : b : c = 1 : 1 : \\sqrt{2}]], ce qui signifie [[c = a\\sqrt{2}]].",
            },
            {
              "kind": "p",
              "text": "Si [[a = 5]] cm, alors le deuxième côté de l'angle droit vaut [[b = 5]] cm, l'hypoténuse vaut [[c = 5\\sqrt{2} \\approx 7.071]] cm et l'aire vaut [[A = \\frac{25}{2} = 12.5]] cm². La calculatrice peut aussi calculer le périmètre à partir du même côté, donc une seule mesure suffit pour décrire tout le triangle. Les sections ci-dessous expliquent le rapport, les quatre modes de la calculatrice et les formules, avec des exemples résolus à chaque étape.",
            },
          ],
        },
        "sec-calculate": {
          "h2": "Calculer l'hypoténuse, un côté, l'aire ou le périmètre",
          "blocks": [
            {
              "kind": "p",
              "text": "Quatre modes couvrent toutes les façons de partir d'un côté connu.",
            },
            {
              "kind": "p",
              "text": "La calculatrice de cette page propose quatre modes, un pour chaque mesure qu'elle peut trouver. Choisissez le mode qui correspond au côté que vous connaissez et à la mesure dont vous avez besoin. Chaque mode ne demande qu'une seule valeur, parce que le rapport fixe complète tout le reste. Le tableau ci-dessous présente les quatre modes avec la valeur demandée et le résultat renvoyé.",
            },
            {
              "kind": "p",
              "text": "Pour utiliser un mode, déterminez d'abord quel côté vous connaissez. Le côté opposé à un angle de 45° est un côté de l'angle droit, et l'un ou l'autre peut servir de [[a]], puisque les côtés de l'angle droit sont égaux. Le côté opposé à l'angle de 90° est l'hypoténuse [[c]]. Saisissez cette mesure sous la forme d'un nombre positif, choisissez une unité, puis cliquez sur le bouton Calculer. Le résultat s'affiche avec le détail du calcul pas à pas, pour que vous voyiez la formule et la substitution, et pas seulement la réponse. Utilisez Réinitialiser pour effacer les champs avant de commencer un nouveau problème.",
            },
            {
              "kind": "p",
              "text": "Les différents modes utilisent des formules différentes parce que chacun part d'un côté connu différent. Trouver l'hypoténuse à partir d'un côté multiplie par √2, tandis que trouver un côté à partir de l'hypoténuse divise par √2. Le mode aire élève le côté au carré puis divise le résultat par deux, et le mode périmètre additionne les trois côtés. Vous n'avez jamais besoin de calculer vous-même les côtés manquants avant d'utiliser les modes aire ou périmètre, parce que la calculatrice les trouve d'abord en interne.",
            },
            {
              "kind": "p",
              "text": "Les quatre formules sont [[c = a\\sqrt{2}]] pour l'hypoténuse, [[a = \\frac{c}{\\sqrt{2}}]] pour un côté, [[A = \\frac{a^2}{2}]] pour l'aire et [[P = a(2 + \\sqrt{2})]] pour le périmètre. Gardez les mêmes unités tout au long d'un calcul : un côté saisi en centimètres donne une hypoténuse en centimètres et une aire en centimètres carrés. La calculatrice ne trouve ni le rayon du cercle circonscrit, ni le rayon du cercle inscrit, ni les mesures de triangles qui ne sont pas des triangles 45-45-90, donc vérifiez les angles avant de l'utiliser.",
            },
          ],
          "table": {
            "headers": [
              "Mode de la calculatrice",
              "Valeur demandée",
              "Résultat",
            ],
            "rows": [
              [
                "Trouver l'hypoténuse à partir d'un côté",
                "Côté a",
                "Hypoténuse c",
              ],
              [
                "Trouver un côté à partir de l'hypoténuse",
                "Hypoténuse c",
                "Côté a",
              ],
              [
                "Trouver l'aire à partir d'un côté",
                "Côté a",
                "Aire A",
              ],
              [
                "Trouver le périmètre à partir d'un côté",
                "Côté a",
                "Périmètre P",
              ],
            ],
          },
        },
        "sec-what": {
          "h2": "Qu'est-ce qu'un triangle 45-45-90 ?",
          "blocks": [
            {
              "kind": "p",
              "text": "Un triangle 45-45-90 tire son nom de ses trois angles.",
            },
            {
              "kind": "p",
              "text": "C'est un triangle rectangle, ce qui signifie que l'un de ses angles mesure exactement 90°. Les deux autres angles mesurent tous les deux 45°, et le nom énumère les trois angles dans l'ordre. Comme l'angle droit est fixe et que les deux autres angles sont fixes aussi, la forme du triangle est entièrement déterminée : tous les triangles 45-45-90 ont la même forme, et deux de ces triangles ne diffèrent que par leur taille.",
            },
            {
              "kind": "p",
              "text": "On l'appelle triangle rectangle remarquable parce que ses côtés suivent un rapport fixe. Dans la plupart des triangles rectangles, connaître un côté ne dit rien des autres. Dans un triangle 45-45-90, connaître un côté donne tous les autres, parce que le rapport [[1 : 1 : \\sqrt{2}]] lie les trois côtés entre eux. C'est pourquoi la calculatrice peut trouver l'hypoténuse, l'aire et le périmètre à partir d'une seule valeur.",
            },
            {
              "kind": "p",
              "text": "Les trois angles totalisent 180°, comme ils le doivent dans tout triangle :",
            },
            {
              "kind": "p",
              "text": "[[[45^\\circ + 45^\\circ + 90^\\circ = 180^\\circ]]]",
            },
            {
              "kind": "p",
              "text": "L'hypoténuse est le côté le plus long, parce qu'elle se trouve en face du plus grand angle, l'angle de 90°. Les deux côtés de l'angle droit sont égaux, parce qu'ils se trouvent en face d'angles égaux. Le triangle peut être aussi petit que quelques millimètres ou aussi grand qu'un terrain à bâtir, et les angles restent les mêmes tandis que les côtés grandissent ensemble. Le rapport reste le même aussi, donc un triangle de côté 5 cm et un triangle de côté 5 m ont la même forme à des tailles différentes.",
            },
          ],
          "image": {
            "src": "forty-five-ninety-main.svg",
            "alt": "Triangle ABC 45-45-90 étiqueté, avec des angles de 45, 45 et 90 degrés, des côtés égaux a et b, et l'hypoténuse c",
            "caption": "Triangle ABC : angles de 45°, 45° et 90°, avec des côtés égaux a et b et l'hypoténuse c.",
          },
        },
        "sec-isosceles": {
          "h2": "Pourquoi l'appelle-t-on triangle rectangle isocèle ?",
          "blocks": [
            {
              "kind": "p",
              "text": "Le nom comporte deux parties, et chacune décrit un fait.",
            },
            {
              "kind": "p",
              "text": "Isocèle signifie un triangle qui a deux côtés égaux. Dans un triangle 45-45-90, les deux côtés égaux sont les côtés de l'angle droit [[a]] et [[b]]. Triangle rectangle signifie un triangle qui a un angle de 90°. En réunissant les deux mots, le nom dit exactement ce qu'est le triangle : un triangle rectangle avec deux côtés égaux.",
            },
            {
              "kind": "p",
              "text": "Les côtés égaux découlent des angles égaux. Dans tout triangle, des angles égaux se trouvent en face de côtés égaux. Ici, les deux angles aigus mesurent tous les deux 45°, donc les côtés opposés doivent être égaux. Le côté opposé à l'angle A est [[a]], et le côté opposé à l'angle B est [[b]], donc [[a = b]]. Ce n'est pas un hasard lié à un seul dessin : cela vaut pour tous les triangles 45-45-90, parce que les angles sont toujours les mêmes.",
            },
            {
              "kind": "p",
              "text": "Le triangle est symétrique par rapport à la hauteur tracée depuis le sommet de l'angle droit jusqu'à l'hypoténuse. Cette hauteur rencontre l'hypoténuse en son milieu et à angle droit, et elle divise le grand triangle en deux triangles plus petits qui sont congruents entre eux. Chaque petit triangle a des angles de 45°, 45° et 90°, donc chacun est lui-même un triangle 45-45-90, à moitié de l'échelle. Cette symétrie est une autre façon de voir pourquoi les deux côtés doivent correspondre : un pliage le long de la hauteur superpose un côté sur l'autre.",
            },
            {
              "kind": "p",
              "text": "La hauteur issue du sommet de l'angle droit jusqu'à l'hypoténuse a aussi une longueur utile : elle vaut la moitié de l'hypoténuse. Pour un triangle d'hypoténuse [[c]], la hauteur vaut [[\\frac{c}{2}]]. Ce fait est pratique quand un problème demande la hauteur du triangle mesurée depuis l'hypoténuse, et c'est une conséquence de plus de la symétrie de la figure.",
            },
          ],
        },
        "sec-legs": {
          "h2": "Comprendre les deux côtés égaux et l'hypoténuse",
          "blocks": [
            {
              "kind": "p",
              "text": "Deux côtés se rencontrent à l'angle droit, et l'hypoténuse se trouve en face.",
            },
            {
              "kind": "p",
              "text": "Le côté [[a]] est un côté perpendiculaire, le côté BC du triangle ABC. Le côté [[b]] est l'autre côté perpendiculaire, le côté AC. Les deux côtés se rencontrent au sommet C, où ils forment l'angle de 90°, donc ils sont perpendiculaires l'un à l'autre. L'un ou l'autre côté peut servir de base du triangle, l'autre côté jouant le rôle de hauteur, ce qui explique pourquoi la formule de l'aire peut utiliser directement les deux côtés.",
            },
            {
              "kind": "p",
              "text": "L'hypoténuse [[c]] est le côté AB, opposé à l'angle de 90°. C'est le côté le plus long du triangle, parce que le plus grand angle se trouve toujours en face du côté le plus long. C'est aussi le seul côté qui n'est pas un côté de l'angle droit, donc il ne faut jamais le confondre avec l'un ou l'autre côté. Les deux côtés sont égaux, mais l'hypoténuse ne leur est pas égale : elle vaut √2 fois l'un ou l'autre côté, soit environ 1.414 fois plus longue.",
            },
            {
              "kind": "p",
              "text": "Comme les côtés sont égaux, l'un ou l'autre peut être utilisé comme côté connu dans la calculatrice. Si un problème donne le côté [[b]] au lieu du côté [[a]], saisissez cette valeur comme côté : le résultat est le même, puisque [[a = b]]. La même liberté ne s'applique pas à l'hypoténuse, qui nécessite son propre mode. Identifier l'hypoténuse est simple dans n'importe quel dessin : cherchez le petit carré qui marque l'angle droit, et le côté en face est l'hypoténuse.",
            },
          ],
          "table": {
            "headers": [
              "Côté",
              "Angle opposé",
              "Longueur",
            ],
            "rows": [
              [
                "Côté a (BC)",
                "45°",
                "a",
              ],
              [
                "Côté b (AC)",
                "45°",
                "a, égal au côté a",
              ],
              [
                "Hypoténuse c (AB)",
                "90°",
                "a√2, côté le plus long",
              ],
            ],
          },
        },
        "sec-ratio": {
          "h2": "Le rapport des côtés du triangle 45-45-90",
          "blocks": [
            {
              "kind": "p",
              "text": "Le rapport 1:1:√2 fixe chaque triangle 45-45-90.",
            },
            {
              "kind": "p",
              "text": "Le rapport des côtés d'un triangle 45-45-90 est :",
            },
            {
              "kind": "p",
              "text": "[[[a : b : c = 1 : 1 : \\sqrt{2}]]]",
            },
            {
              "kind": "p",
              "text": "Chaque partie du rapport décrit un côté. Le premier côté représente une unité, le deuxième côté représente aussi une unité, et l'hypoténuse représente √2 unités. En écrivant le côté sous la forme [[a]], les trois côtés sont [[a = a]], [[b = a]] et [[c = a\\sqrt{2}]]. Si le côté mesure 1 cm, l'autre côté mesure 1 cm et l'hypoténuse mesure √2 cm. Si le côté mesure 10 cm, l'autre côté mesure 10 cm et l'hypoténuse mesure [[10\\sqrt{2}]] cm.",
            },
            {
              "kind": "p",
              "text": "Le rapport reste le même quelle que soit la taille du triangle, parce que tous les triangles 45-45-90 sont semblables. Agrandir ou réduire un triangle multiplie chaque côté par le même facteur, donc les proportions entre les côtés ne changent pas. Prenons [[a = 4]] cm comme exemple : le deuxième côté vaut [[b = 4]] cm et l'hypoténuse vaut [[c = 4\\sqrt{2} \\approx 5.657]] cm, et le rapport [[4 : 4 : 5.657]] est le même que [[1 : 1 : \\sqrt{2}]].",
            },
            {
              "kind": "p",
              "text": "La valeur de √2 est d'environ 1.41421356. C'est un nombre irrationnel, donc son développement décimal ne se termine jamais et ne se répète jamais, et aucun nombre décimal ne lui est exactement égal. Gardez la forme exacte avec radical chaque fois que vous le pouvez : écrire [[4\\sqrt{2}]] cm est exact, tandis que 5.657 cm est une approximation arrondie. Utilisez la forme exacte dans votre raisonnement et dans les réponses finales quand la question demande une valeur exacte, et donnez le nombre décimal seulement quand une réponse approchée est nécessaire.",
            },
          ],
          "image": {
            "src": "forty-five-ninety-ratio.svg",
            "alt": "Trois barres comparant les deux côtés égaux et l'hypoténuse dans le rapport 1 à 1 à racine carrée de 2",
            "caption": "Le rapport fixe 1:1:√2 compare les deux côtés égaux à l'hypoténuse.",
          },
        },
        "sec-why-sqrt2": {
          "h2": "Pourquoi la racine carrée de 2 apparaît-elle ?",
          "blocks": [
            {
              "kind": "p",
              "text": "La racine carrée de 2 vient directement du théorème de Pythagore.",
            },
            {
              "kind": "p",
              "text": "Commencez par les côtés égaux, [[a = b]], et appliquez le théorème de Pythagore, qui vaut pour tout triangle rectangle :",
            },
            {
              "kind": "p",
              "text": "[[[a^2 + b^2 = c^2]]]",
            },
            {
              "kind": "p",
              "text": "Remplacez les côtés égaux, en remplaçant [[b]] par [[a]] :",
            },
            {
              "kind": "p",
              "text": "[[[a^2 + a^2 = c^2]]]",
            },
            {
              "kind": "p",
              "text": "Combinez les deux termes identiques :",
            },
            {
              "kind": "p",
              "text": "[[[2a^2 = c^2]]]",
            },
            {
              "kind": "p",
              "text": "Prenez la racine carrée positive des deux membres. Les longueurs des côtés sont positives, donc la racine négative est écartée :",
            },
            {
              "kind": "p",
              "text": "[[[c = a\\sqrt{2}]]]",
            },
            {
              "kind": "p",
              "text": "Voilà toute la raison pour laquelle √2 apparaît : deux carrés égaux s'ajoutent pour donner deux fois un carré, et la racine carrée de 2 est le nombre qui annule ce doublement. C'est une relation particulière, et non un raccourci approché. Elle découle des côtés égaux et du théorème de Pythagore, et elle vaut pour chaque triangle 45-45-90 sans exception.",
            },
            {
              "kind": "p",
              "text": "Prenons [[a = 5]] cm comme vérification numérique :",
            },
            {
              "kind": "p",
              "text": "[[[c = \\sqrt{5^2 + 5^2}]]]",
            },
            {
              "kind": "p",
              "text": "[[[c = \\sqrt{50}]]]",
            },
            {
              "kind": "p",
              "text": "[[[c = 5\\sqrt{2}]]]",
            },
            {
              "kind": "p",
              "text": "[[[c \\approx 7.071 \\text{ cm}]]]",
            },
            {
              "kind": "p",
              "text": "Le passage de √50 à [[5\\sqrt{2}]] fonctionne parce que [[50 = 25 \\times 2]], et que la racine carrée de 25 est 5. Simplifier le radical de cette façon garde la réponse exacte et rend le schéma visible : l'hypoténuse est toujours le côté multiplié par √2, quelle que soit la longueur du côté.",
            },
          ],
          "image": {
            "src": "forty-five-ninety-pythagoras.svg",
            "alt": "Démonstration avec Pythagore montrant que a au carré plus a au carré égale c au carré, ce qui donne c égale a fois racine carrée de 2",
            "caption": "De a² + a² = c², l'hypoténuse doit être a√2.",
          },
        },
        "sec-hypotenuse": {
          "h2": "Formule pour trouver l'hypoténuse à partir d'un côté",
          "blocks": [
            {
              "kind": "p",
              "text": "Multipliez l'un ou l'autre côté par √2 pour obtenir l'hypoténuse.",
            },
            {
              "kind": "p",
              "text": "[[[c = a\\sqrt{2}]]]",
            },
            {
              "kind": "p",
              "text": "Ici, [[c]] est l'hypoténuse et [[a]] est l'un ou l'autre côté. La formule est une lecture directe du rapport des côtés : l'hypoténuse représente √2 unités pour chaque unité de côté, donc l'hypoténuse vaut √2 fois le côté. La multiplication est nécessaire parce que le rapport est une relation d'échelle, et √2 apparaît parce que le théorème de Pythagore oblige l'hypoténuse à être plus longue que le côté dans cette proportion.",
            },
            {
              "kind": "p",
              "text": "Prenons [[a = 5]] cm :",
            },
            {
              "kind": "p",
              "text": "[[[c = 5\\sqrt{2}]]]",
            },
            {
              "kind": "p",
              "text": "[[[c \\approx 7.071 \\text{ cm}]]]",
            },
            {
              "kind": "p",
              "text": "Le résultat est plus long que l'un ou l'autre côté, comme il le faut : √2 vaut environ 1.414, donc multiplier par ce nombre augmente la longueur. La réponse exacte est [[5\\sqrt{2}]] cm, et 7.071 cm est l'approximation décimale. Gardez la forme exacte quand la question la demande, et arrondissez le nombre décimal seulement à la fin de votre raisonnement, jamais au milieu.",
            },
            {
              "kind": "p",
              "text": "Utilisez ce mode chaque fois qu'un côté est le côté connu et que l'hypoténuse est l'inconnue. Comme les côtés sont égaux, le côté donné par le problème importe peu : saisissez-le comme [[a]] et la formule donne la même hypoténuse. Un contrôle rapide par l'ordre de grandeur aide : l'hypoténuse doit être environ 1.414 fois le côté. Si votre réponse vaut deux fois le côté, ou seulement un peu plus que le côté, vous avez utilisé le mauvais multiplicateur.",
            },
          ],
          "image": {
            "src": "forty-five-ninety-hypotenuse.svg",
            "alt": "Triangle 45-45-90 avec un côté de 5 cm et une hypoténuse étiquetée 5 fois racine carrée de 2, soit environ 7.071 cm",
            "caption": "Hypoténuse à partir d'un côté : a = 5 cm donne c = 5√2 ≈ 7.071 cm.",
          },
        },
        "sec-leg-hyp": {
          "h2": "Formule pour trouver un côté à partir de l'hypoténuse",
          "blocks": [
            {
              "kind": "p",
              "text": "Divisez l'hypoténuse par √2 pour obtenir un côté.",
            },
            {
              "kind": "p",
              "text": "[[[a = \\frac{c}{\\sqrt{2}}]]]",
            },
            {
              "kind": "p",
              "text": "Ici, [[a]] est l'un ou l'autre côté et [[c]] est l'hypoténuse. Cette formule vient de la réorganisation de [[c = a\\sqrt{2}]] : diviser les deux membres par √2 isole [[a]]. Diviser par √2 inverse la multiplication d'origine, donc cela annule exactement ce que la formule directe a fait. L'autre côté a la même longueur, donc un seul calcul donne les deux côtés à la fois.",
            },
            {
              "kind": "p",
              "text": "La forme rationalisée est généralement plus facile à utiliser :",
            },
            {
              "kind": "p",
              "text": "[[[a = \\frac{c\\sqrt{2}}{2}]]]",
            },
            {
              "kind": "p",
              "text": "Elle s'obtient en multipliant le numérateur et le dénominateur de [[\\frac{c}{\\sqrt{2}}]] par √2. Le dénominateur devient [[\\sqrt{2} \\times \\sqrt{2} = 2]], et le numérateur devient [[c\\sqrt{2}]]. Les deux formes donnent la même valeur, mais la forme rationalisée n'a pas de racine carrée au dénominateur, ce qui est la forme attendue dans les réponses d'examen.",
            },
            {
              "kind": "p",
              "text": "Prenons [[c = 10]] cm :",
            },
            {
              "kind": "p",
              "text": "[[[a = \\frac{10}{\\sqrt{2}}]]]",
            },
            {
              "kind": "p",
              "text": "[[[a = 5\\sqrt{2}]]]",
            },
            {
              "kind": "p",
              "text": "[[[a \\approx 7.071 \\text{ cm}]]]",
            },
            {
              "kind": "p",
              "text": "Les deux côtés valent [[5\\sqrt{2}]] cm, soit environ 7.071 cm chacun. Le côté est plus court que l'hypoténuse, comme il le faut, puisque diviser par un nombre supérieur à 1 réduit la valeur. Si votre réponse est plus longue que l'hypoténuse, vous avez multiplié au lieu de diviser, ou divisé par le mauvais nombre.",
            },
          ],
          "image": {
            "src": "forty-five-ninety-leg.svg",
            "alt": "Triangle 45-45-90 avec une hypoténuse de 10 cm et chaque côté étiqueté 5 fois racine carrée de 2, soit environ 7.071 cm",
            "caption": "Côté à partir de l'hypoténuse : c = 10 cm donne a = b = 5√2 ≈ 7.071 cm.",
          },
        },
        "sec-area": {
          "h2": "Comment calculer l'aire d'un triangle 45-45-90",
          "blocks": [
            {
              "kind": "p",
              "text": "L'aire ne nécessite qu'un seul côté, parce que les côtés sont égaux.",
            },
            {
              "kind": "p",
              "text": "L'aire de tout triangle rectangle est la moitié du produit de ses deux côtés, parce que les côtés jouent le rôle de base et de hauteur perpendiculaire :",
            },
            {
              "kind": "p",
              "text": "[[[A = \\frac{ab}{2}]]]",
            },
            {
              "kind": "p",
              "text": "Comme [[a = b]], remplacez pour obtenir l'aire à partir d'un seul côté :",
            },
            {
              "kind": "p",
              "text": "[[[A = \\frac{a^2}{2}]]]",
            },
            {
              "kind": "p",
              "text": "La division par deux est nécessaire parce qu'un triangle couvre la moitié du rectangle formé par ses deux côtés. L'aire finale s'exprime en unités carrées, comme les centimètres carrés, parce que l'aire mesure une surface, et non une longueur. Un carré de côté [[a]] a une aire de [[a^2]], et le triangle est exactement la moitié de ce carré, ce qui est une autre façon de voir pourquoi la formule est [[\\frac{a^2}{2}]].",
            },
            {
              "kind": "p",
              "text": "Prenons [[a = 6]] cm :",
            },
            {
              "kind": "p",
              "text": "[[[A = \\frac{6 \\times 6}{2}]]]",
            },
            {
              "kind": "p",
              "text": "[[[A = \\frac{36}{2}]]]",
            },
            {
              "kind": "p",
              "text": "[[[A = 18 \\text{ cm}^2]]]",
            },
            {
              "kind": "p",
              "text": "Le mode aire de la calculatrice accepte le côté et calcule l'aire directement, donc vous saisissez seulement [[a]]. Si vous connaissez l'hypoténuse au lieu du côté, trouvez d'abord le côté avec [[a = \\frac{c}{\\sqrt{2}}]], puis utilisez [[A = \\frac{a^2}{2}]]. Il existe aussi un raccourci à partir de l'hypoténuse seule : [[A = \\frac{c^2}{4}]], qui donne le même résultat. Pour [[c = 10]] cm, [[A = \\frac{100}{4} = 25]] cm².",
            },
            {
              "kind": "p",
              "text": "L'aire croît avec le carré du côté, donc doubler le côté quadruple l'aire. Un triangle avec [[a = 12]] cm a quatre fois l'aire du triangle avec [[a = 6]] cm, soit 72 cm² au lieu de 18 cm², et non deux fois plus. Cette relation au carré est facile à oublier, donc vérifiez-la chaque fois qu'un problème agrandit ou réduit un triangle.",
            },
          ],
          "image": {
            "src": "forty-five-ninety-area-perimeter.svg",
            "alt": "Triangle 45-45-90 avec un côté de 6 cm, une hypoténuse de 6 fois racine carrée de 2 cm, une aire de 18 centimètres carrés et un périmètre d'environ 20.485 cm",
            "caption": "Aire et périmètre à partir du côté : a = 6 cm donne A = 18 cm² et P ≈ 20.485 cm.",
          },
        },
        "sec-perimeter": {
          "h2": "Comment calculer le périmètre d'un triangle 45-45-90",
          "blocks": [
            {
              "kind": "p",
              "text": "Additionnez les trois côtés, puis mettez le côté en facteur.",
            },
            {
              "kind": "p",
              "text": "Le périmètre est la longueur totale autour du triangle :",
            },
            {
              "kind": "p",
              "text": "[[[P = a + b + c]]]",
            },
            {
              "kind": "p",
              "text": "Comme [[a = b]] et [[c = a\\sqrt{2}]], remplacez ces relations :",
            },
            {
              "kind": "p",
              "text": "[[[P = 2a + a\\sqrt{2}]]]",
            },
            {
              "kind": "p",
              "text": "Mettez [[a]] en facteur pour obtenir la forme simplifiée :",
            },
            {
              "kind": "p",
              "text": "[[[P = a(2 + \\sqrt{2})]]]",
            },
            {
              "kind": "p",
              "text": "Les trois longueurs sont incluses, parce que le périmètre suit tout le contour du triangle : le long d'un côté, puis de l'autre côté, puis le long de l'hypoténuse pour revenir au point de départ. Omettre un côté donne une distance plus courte qui n'est pas le périmètre. Le périmètre est une mesure linéaire, et non une mesure d'aire, donc la réponse est en unités simples comme les centimètres, jamais en centimètres carrés.",
            },
            {
              "kind": "p",
              "text": "Prenons [[a = 5]] cm :",
            },
            {
              "kind": "p",
              "text": "[[[P = 5(2 + \\sqrt{2})]]]",
            },
            {
              "kind": "p",
              "text": "[[[P = 10 + 5\\sqrt{2}]]]",
            },
            {
              "kind": "p",
              "text": "[[[P \\approx 17.071 \\text{ cm}]]]",
            },
            {
              "kind": "p",
              "text": "La forme exacte est [[10 + 5\\sqrt{2}]] cm, et 17.071 cm est la forme décimale. Le mode périmètre de la calculatrice accepte le côté et additionne les trois côtés en interne. Il existe aussi un raccourci à partir de l'hypoténuse seule : [[P = c(1 + \\sqrt{2})]]. Pour [[c = 10]] cm, cela donne [[P = 10(1 + \\sqrt{2}) \\approx 24.142]] cm. Le périmètre croît en proportion directe du côté, donc doubler le côté double le périmètre.",
            },
          ],
        },
        "sec-square": {
          "h2": "Comment la diagonale d'un carré crée un triangle 45-45-90",
          "blocks": [
            {
              "kind": "p",
              "text": "Une diagonale coupe un carré en deux triangles 45-45-90 identiques.",
            },
            {
              "kind": "p",
              "text": "Un carré a quatre côtés égaux et quatre angles de 90°. Tracez une diagonale, d'un coin au coin opposé, et le carré se divise en deux triangles. Chaque triangle a deux côtés qui sont des côtés du carré, donc ces deux côtés sont égaux, et l'angle entre eux est un coin du carré, soit 90°. La diagonale est le troisième côté, opposé à cet angle droit, donc c'est l'hypoténuse.",
            },
            {
              "kind": "p",
              "text": "La diagonale partage aussi en deux les deux angles des coins qu'elle traverse. Chaque coin du carré mesure 90°, et la diagonale le divise en deux angles de 45°. Chaque triangle a donc des angles de 45°, 45° et 90°, ce qui est exactement un triangle 45-45-90. Les deux triangles sont congruents : ils ont les mêmes longueurs de côtés et les mêmes angles, parce qu'ils partagent la diagonale et que chacun prend deux côtés du même carré.",
            },
            {
              "kind": "p",
              "text": "Prenons un carré de côté [[a]]. La diagonale [[d]] est l'hypoténuse du triangle, donc le théorème de Pythagore donne :",
            },
            {
              "kind": "p",
              "text": "[[[d^2 = a^2 + a^2]]]",
            },
            {
              "kind": "p",
              "text": "[[[d^2 = 2a^2]]]",
            },
            {
              "kind": "p",
              "text": "[[[d = a\\sqrt{2}]]]",
            },
            {
              "kind": "p",
              "text": "Prenons un carré de côté 8 cm :",
            },
            {
              "kind": "p",
              "text": "[[[d = 8\\sqrt{2}]]]",
            },
            {
              "kind": "p",
              "text": "[[[d \\approx 11.314 \\text{ cm}]]]",
            },
            {
              "kind": "p",
              "text": "C'est pourquoi les calculs de diagonale d'un carré utilisent toujours la même relation avec √2. Chaque fois que vous avez besoin de la diagonale d'un carré, multipliez le côté par √2 ; chaque fois que vous connaissez la diagonale et que vous avez besoin du côté, divisez-la par √2. La même règle s'applique aux carreaux carrés, aux cadres carrés, aux terrains carrés et à toute autre forme carrée, parce que chaque carré se divise de la même façon.",
            },
          ],
          "image": {
            "src": "forty-five-ninety-square-diagonal.svg",
            "alt": "Carré de côté 8 cm divisé par une diagonale en deux triangles 45-45-90 congruents, diagonale d'environ 11.314 cm",
            "caption": "La diagonale d'un carré de côté 8 cm vaut d = 8√2 ≈ 11.314 cm.",
          },
        },
        "sec-step-example": {
          "h2": "Exemple résolu pas à pas d'un triangle 45-45-90",
          "blocks": [
            {
              "kind": "p",
              "text": "Un seul triangle, a = 5 cm, traité du début à la fin.",
            },
            {
              "kind": "p",
              "text": "Partez du côté [[a = 5]] cm et trouvez toutes les autres mesures du triangle, une formule à la fois. Chaque étape utilise une formule des sections ci-dessus, et le tableau récapitulatif à la fin rassemble les résultats.",
            },
            {
              "kind": "steps",
              "steps": [
                "Trouvez le deuxième côté : les côtés sont égaux, donc [[b = 5]] cm.",
                "Trouvez l'hypoténuse : [[c = a\\sqrt{2} = 5\\sqrt{2} \\approx 7.071]] cm.",
                "Trouvez l'aire : [[A = \\frac{a^2}{2} = \\frac{25}{2} = 12.5]] centimètres carrés.",
                "Trouvez le périmètre : [[P = a + b + c = 5 + 5 + 5\\sqrt{2} = 10 + 5\\sqrt{2} \\approx 17.071]] cm.",
              ],
            },
            {
              "kind": "p",
              "text": "Les quatre mesures décrivent le même triangle. Les côtés [[5]], [[5]] et [[7.071]] vérifient le rapport [[1 : 1 : \\sqrt{2}]] et le théorème de Pythagore, [[5^2 + 5^2 = 25 + 25 = 50 = (5\\sqrt{2})^2]]. L'aire et le périmètre sont deux types de mesures différents de ce même triangle : l'aire couvre sa surface, tandis que le périmètre suit son contour. Si vous changez le côté, toutes les autres valeurs changent avec lui, mais le rapport entre les côtés ne change jamais.",
            },
          ],
          "table": {
            "headers": [
              "Mesure",
              "Valeur exacte",
              "Valeur approchée",
            ],
            "rows": [
              [
                "Côté a",
                "5 cm",
                "5 cm",
              ],
              [
                "Côté b",
                "5 cm",
                "5 cm",
              ],
              [
                "Hypoténuse c",
                "5√2 cm",
                "7.071 cm",
              ],
              [
                "Aire A",
                "25/2 cm²",
                "12.5 cm²",
              ],
              [
                "Périmètre P",
                "10 + 5√2 cm",
                "17.071 cm",
              ],
            ],
          },
        },
        "sec-examples": {
          "h2": "Exemples résolus de calculs sur le triangle 45-45-90",
          "blocks": [
            {
              "kind": "p",
              "text": "Huit exemples résolus, couvrant chaque mode de la calculatrice et une diagonale de carré.",
            },
            {
              "kind": "h3",
              "text": "Exemple 1 : Trouver l'hypoténuse à partir d'un côté",
            },
            {
              "kind": "p",
              "text": "Donné : [[a = 4]] cm. Formule : [[c = a\\sqrt{2}]]. Substitution : [[c = 4\\sqrt{2}]]. Réponse exacte : [[4\\sqrt{2}]] cm. Approximation décimale : [[c \\approx 5.657]] cm. L'hypoténuse vaut environ 1.414 fois le côté, donc 4 cm deviennent environ 5.657 cm. Gardez la forme exacte [[4\\sqrt{2}]] cm quand la question demande une valeur exacte.",
            },
            {
              "kind": "h3",
              "text": "Exemple 2 : Trouver l'hypoténuse à partir d'un côté plus grand",
            },
            {
              "kind": "p",
              "text": "Donné : [[a = 8]] cm. Formule : [[c = a\\sqrt{2}]]. Substitution : [[c = 8\\sqrt{2}]]. Réponse exacte : [[8\\sqrt{2}]] cm. Approximation décimale : [[c \\approx 11.314]] cm. C'est le même calcul que l'exemple 1 à deux fois l'échelle, et la réponse est exactement deux fois plus grande, ce qui confirme la proportionnalité des longueurs des côtés. La même valeur est la diagonale d'un carré de côté 8 cm.",
            },
            {
              "kind": "h3",
              "text": "Exemple 3 : Trouver un côté à partir de l'hypoténuse",
            },
            {
              "kind": "p",
              "text": "Donné : [[c = 12]] cm. Formule : [[a = \\frac{c}{\\sqrt{2}}]]. Substitution : [[a = \\frac{12}{\\sqrt{2}}]]. La rationalisation donne [[a = 6\\sqrt{2}]] cm. Approximation décimale : [[a \\approx 8.485]] cm. Les deux côtés valent [[6\\sqrt{2}]] cm, parce que les côtés sont égaux. Le côté est plus court que l'hypoténuse, comme il le faut.",
            },
            {
              "kind": "h3",
              "text": "Exemple 4 : Trouver un côté à partir d'une hypoténuse plus grande",
            },
            {
              "kind": "p",
              "text": "Donné : [[c = 20]] cm. Formule : [[a = \\frac{c\\sqrt{2}}{2}]]. Substitution : [[a = \\frac{20\\sqrt{2}}{2} = 10\\sqrt{2}]] cm. Approximation décimale : [[a \\approx 14.142]] cm. Les deux côtés valent [[10\\sqrt{2}]] cm. Un contrôle rapide : [[a\\sqrt{2} = 10\\sqrt{2} \\times \\sqrt{2} = 20]] cm, ce qui redonne l'hypoténuse donnée.",
            },
            {
              "kind": "h3",
              "text": "Exemple 5 : Calculer l'aire",
            },
            {
              "kind": "p",
              "text": "Donné : [[a = 7]] cm. Formule : [[A = \\frac{a^2}{2}]]. Substitution : [[A = \\frac{49}{2}]]. Résultat : [[A = 24.5]] cm². L'aire est exacte, sans racine carrée et sans arrondi, parce que [[7^2 = 49]] se divise proprement par deux. L'aire est en unités carrées, contrairement aux longueurs des côtés, donc l'unité est le cm², et non le cm.",
            },
            {
              "kind": "h3",
              "text": "Exemple 6 : Calculer le périmètre",
            },
            {
              "kind": "p",
              "text": "Donné : [[a = 6]] cm. Formule : [[P = a(2 + \\sqrt{2})]]. Substitution : [[P = 6(2 + \\sqrt{2})]]. Réponse exacte : [[P = 12 + 6\\sqrt{2}]] cm. Approximation décimale : [[P \\approx 20.485]] cm. Additionner les côtés un par un donne le même résultat : [[6 + 6 + 6\\sqrt{2} = 12 + 6\\sqrt{2}]] cm. Le périmètre est en unités simples, et non en unités carrées.",
            },
            {
              "kind": "h3",
              "text": "Exemple 7 : Trouver la diagonale d'un carré",
            },
            {
              "kind": "p",
              "text": "Donné : un carré de côté 10 m. Formule : [[d = a\\sqrt{2}]]. Substitution : [[d = 10\\sqrt{2}]] m. Réponse exacte : [[10\\sqrt{2}]] m. Approximation décimale : [[d \\approx 14.142]] m. La diagonale divise le carré en deux triangles 45-45-90, chacun avec des côtés de 10 m et une hypoténuse de [[10\\sqrt{2}]] m. C'est la même formule que pour trouver une hypoténuse à partir d'un côté, parce que la diagonale est l'hypoténuse.",
            },
            {
              "kind": "h3",
              "text": "Exemple 8 : Trouver l'hypoténuse à partir d'un côté décimal",
            },
            {
              "kind": "p",
              "text": "Donné : [[a = 2.5]] cm. Formule : [[c = a\\sqrt{2}]]. Substitution : [[c = 2.5\\sqrt{2}]]. Réponse exacte : [[2.5\\sqrt{2}]] cm. Approximation décimale : [[c \\approx 3.536]] cm. Les valeurs décimales fonctionnent exactement comme les nombres entiers : multipliez par √2, gardez d'abord la forme exacte, et arrondissez le nombre décimal seulement à l'étape finale. Le deuxième côté vaut aussi 2.5 cm.",
            },
            {
              "kind": "p",
              "text": "Les réponses exactes et les approximations décimales servent des objectifs différents. La forme exacte, comme [[4\\sqrt{2}]] cm, est précise et c'est ce que les réponses d'examen exigent généralement. La forme décimale, comme 5.657 cm, est plus facile à imaginer et à mesurer avec une règle. Donnez d'abord la forme exacte, puis le nombre décimal, et arrondissez le nombre décimal seulement à l'étape finale.",
            },
          ],
        },
        "sec-exact": {
          "h2": "Réponses exactes et approximations décimales",
          "blocks": [
            {
              "kind": "p",
              "text": "Une réponse exacte garde √2 ; une réponse décimale l'arrondit.",
            },
            {
              "kind": "p",
              "text": "Comparez la réponse exacte [[5\\sqrt{2}]] cm et l'approximation décimale 7.071 cm. La première est exacte : elle énonce la longueur avec précision, en utilisant le symbole √2 pour désigner le nombre irrationnel dont le carré vaut 2. La seconde est arrondie : elle énonce la longueur à trois décimales, ce qui est proche de la valeur vraie mais ne lui est pas égal. La différence est petite, environ 0.00007 cm, mais elle est réelle, et elle compte dans les démonstrations et dans les calculs ultérieurs.",
            },
            {
              "kind": "p",
              "text": "Le nombre √2 est irrationnel, ce qui signifie qu'il ne peut pas s'écrire comme une fraction de deux nombres entiers, et que son développement décimal ne se termine jamais et ne se répète jamais. Il commence par 1.41421356 et continue sans fin. Tout nombre décimal que vous écrivez pour lui, aussi long soit-il, est une approximation. C'est pourquoi la notation exacte avec radical est préférable dans les démonstrations mathématiques et dans les réponses d'examen qui demandent une valeur exacte : le radical garde toute la précision qu'un nombre décimal perd.",
            },
            {
              "kind": "p",
              "text": "Une approximation décimale est plus pratique quand vous devez mesurer, couper ou construire quelque chose. Une règle ne peut pas mesurer directement [[5\\sqrt{2}]] cm, mais elle peut mesurer 7.071 cm. Un menuisier qui coupe une traverse diagonale a besoin du nombre décimal, tandis qu'un élève qui démontre un théorème a besoin de la forme exacte. Utilisez chaque forme là où elle convient, et indiquez que les nombres décimaux sont approchés pour que personne ne les prenne pour des valeurs exactes.",
            },
            {
              "kind": "p",
              "text": "L'arrondi doit être effectué à la fin d'un calcul, et non au milieu. Si vous remplacez √2 par 1.41 tôt et que vous multipliez ensuite, chaque étape ultérieure porte cette erreur. Pour [[a = 5]] cm, utiliser 1.41 donne [[c = 7.05]] cm, tandis que l'approximation correcte est 7.071 cm. Gardez √2 exact tout au long du raisonnement, sous la forme [[5\\sqrt{2}]], et arrondissez seulement la réponse finale. Ne présentez jamais un nombre décimal arrondi comme s'il était exact.",
            },
          ],
        },
        "sec-verify": {
          "h2": "Comment vérifier vos calculs sur le triangle 45-45-90",
          "blocks": [
            {
              "kind": "p",
              "text": "Quatre contrôles rapides détectent presque toutes les erreurs.",
            },
            {
              "kind": "p",
              "text": "Effectuez au moins un contrôle sur chaque réponse, et les quatre quand le problème compte. L'exemple ci-dessous utilise tout au long le triangle avec [[a = 5]] cm, [[b = 5]] cm et [[c = 5\\sqrt{2} \\approx 7.071]] cm.",
            },
            {
              "kind": "h3",
              "text": "Contrôle 1 : côtés égaux",
            },
            {
              "kind": "p",
              "text": "Vérifiez que [[a = b]]. Ici, les deux côtés valent 5 cm, donc le contrôle est réussi. Si vos deux côtés diffèrent, l'un d'eux est faux, ou le triangle n'est pas du tout un triangle 45-45-90. C'est le contrôle le plus rapide de tous, parce qu'il ne demande aucun calcul : les deux côtés doivent correspondre exactement.",
            },
            {
              "kind": "h3",
              "text": "Contrôle 2 : rapport des côtés",
            },
            {
              "kind": "p",
              "text": "Divisez l'hypoténuse par un côté : [[\\frac{c}{a} = \\sqrt{2} \\approx 1.414]]. Ici, [[\\frac{7.071}{5} \\approx 1.414]], donc le rapport est vérifié. Si la division donne 2, vous avez utilisé par erreur le doublement du triangle 30-60-90. Si elle donne environ 1.732, vous avez utilisé √3 par erreur. Le rapport [[\\frac{c}{a}]] doit être √2, et rien d'autre.",
            },
            {
              "kind": "h3",
              "text": "Contrôle 3 : théorème de Pythagore",
            },
            {
              "kind": "p",
              "text": "Vérifiez que [[a^2 + b^2 = c^2]]. Ici, [[5^2 + 5^2 = 25 + 25 = 50]], et [[(5\\sqrt{2})^2 = 25 \\times 2 = 50]], donc le théorème est vérifié. Ce contrôle détecte les côtés échangés et les mauvais multiplicateurs, parce qu'utiliser une mauvaise valeur pour un côté rompt l'égalité. La <a href=\"/pythagorean-theorem-calculator/\">calculatrice du théorème de Pythagore</a> effectue ce contrôle pour n'importe quelles longueurs de trois côtés.",
            },
            {
              "kind": "h3",
              "text": "Contrôle 4 : somme des angles",
            },
            {
              "kind": "p",
              "text": "Vérifiez que [[45^\\circ + 45^\\circ + 90^\\circ = 180^\\circ]]. Ce contrôle porte sur la mise en place du problème plutôt que sur le calcul : si les angles de votre triangle ne totalisent pas 180°, ou s'ils ne sont pas 45°, 45° et 90°, les formules du triangle 45-45-90 ne s'appliquent pas du tout, et aucune longueur de côté obtenue avec elles ne peut être fiable. Vérifiez d'abord les angles, puis faites confiance aux côtés.",
            },
          ],
        },
        "sec-properties": {
          "h2": "Propriétés importantes des triangles 45-45-90",
          "blocks": [
            {
              "kind": "p",
              "text": "Dix propriétés découlent du rapport fixe.",
            },
            {
              "kind": "list",
              "items": [
                "Le triangle a toujours des angles de 45°, 45° et 90°, et ces angles totalisent toujours 180°.",
                "Les deux côtés sont égaux, [[a = b]], parce qu'ils se trouvent en face d'angles égaux de 45°.",
                "L'hypoténuse est le côté le plus long, parce qu'elle se trouve en face de l'angle de 90°.",
                "L'hypoténuse vaut √2 fois l'un ou l'autre côté, [[c = a\\sqrt{2}]], où [[\\sqrt{2} \\approx 1.41421356]].",
                "Tous les triangles 45-45-90 sont semblables, parce qu'ils ont les mêmes trois angles et les mêmes proportions de côtés.",
                "Le rapport des côtés [[1 : 1 : \\sqrt{2}]] est indépendant de la taille du triangle, donc agrandir ou réduire le triangle laisse le rapport inchangé.",
                "La hauteur vers l'hypoténuse divise le triangle en deux triangles 45-45-90 plus petits et congruents.",
                "La hauteur vers l'hypoténuse vaut la moitié de l'hypoténuse, [[\\frac{c}{2}]].",
                "L'aire vaut la moitié du carré d'un côté, [[A = \\frac{a^2}{2}]], donc doubler le côté quadruple l'aire.",
                "Le périmètre vaut [[P = a(2 + \\sqrt{2})]], donc doubler le côté double le périmètre.",
              ],
            },
            {
              "kind": "p",
              "text": "Chaque propriété découle des angles et du rapport, et non d'un seul exemple. Les angles égaux imposent des côtés égaux, les côtés égaux et le théorème de Pythagore imposent l'hypoténuse en √2, et l'hypoténuse en √2 impose les formules d'aire et de périmètre. Une fois que vous acceptez les trois angles, tout le reste est fixé, ce qui explique pourquoi un seul côté connu suffit pour décrire tout le triangle.",
            },
          ],
        },
        "sec-vs-3060": {
          "h2": "Différence entre les triangles 45-45-90 et 30-60-90",
          "blocks": [
            {
              "kind": "p",
              "text": "Les deux triangles remarquables se ressemblent, mais leurs rapports ne se mélangent jamais.",
            },
            {
              "kind": "p",
              "text": "Les deux sont des triangles rectangles remarquables, et les deux permettent de trouver chaque côté à partir d'un seul côté connu. La différence tient aux angles : un triangle 45-45-90 a deux angles aigus égaux, tandis qu'un triangle 30-60-90 a deux angles aigus différents. Cette seule différence change complètement le rapport des côtés, donc les formules d'un triangle donnent des réponses fausses pour l'autre.",
            },
            {
              "kind": "p",
              "text": "Un triangle 45-45-90 est isocèle, avec deux côtés égaux, tandis qu'un triangle 30-60-90 est scalène, sans aucun côté égal. Dans un triangle 45-45-90, l'hypoténuse vaut √2 fois un côté, tandis que dans un triangle 30-60-90, l'hypoténuse vaut deux fois le petit côté. Le grand côté d'un triangle 30-60-90 vaut √3 fois le petit côté, et il n'y a pas de côté correspondant dans un triangle 45-45-90, parce que ses deux côtés ont la même longueur. Pour un traitement complet de l'autre triangle, consultez la <a href=\"/30-60-90-triangle-calculator/\">calculatrice de triangle 30-60-90</a>, qui utilise le rapport 1:√3:2.",
            },
            {
              "kind": "p",
              "text": "Les formules ne peuvent pas être échangées. Utiliser [[c = 2a]] sur un triangle 45-45-90 avec [[a = 5]] cm donne 10 cm, alors que l'hypoténuse correcte est d'environ 7.071 cm. Utiliser [[c = a\\sqrt{2}]] sur un triangle 30-60-90 avec un petit côté de 5 cm donne environ 7.071 cm, alors que l'hypoténuse correcte est de 10 cm. Vérifiez toujours les angles avant de choisir une formule : des angles aigus égaux signifient 45-45-90, et des angles de 30° et 60° signifient 30-60-90.",
            },
          ],
          "table": {
            "headers": [
              "Caractéristique",
              "45-45-90",
              "30-60-90",
            ],
            "rows": [
              [
                "Angles",
                "45°, 45°, 90°",
                "30°, 60°, 90°",
              ],
              [
                "Rapport des côtés",
                "1:1:√2",
                "1:√3:2",
              ],
              [
                "Côtés égaux",
                "Deux côtés égaux",
                "Aucun côté égal",
              ],
              [
                "Hypoténuse",
                "Côté × √2",
                "Petit côté × 2",
              ],
              [
                "Grand côté",
                "Identique au petit côté",
                "Petit côté × √3",
              ],
              [
                "Type de triangle",
                "Rectangle isocèle",
                "Rectangle scalène",
              ],
            ],
          },
          "image": {
            "src": "forty-five-ninety-vs-3060.svg",
            "alt": "Deux triangles rectangles remarquables côte à côte, un triangle 45-45-90 avec le rapport 1 à 1 à racine carrée de 2 et un triangle 30-60-90 avec le rapport 1 à racine carrée de 3 à 2",
            "caption": "Le triangle 45-45-90 utilise 1:1:√2 ; le triangle 30-60-90 utilise 1:√3:2. Les rapports ne doivent jamais être échangés.",
          },
        },
        "sec-mistakes": {
          "h2": "Erreurs fréquentes dans la résolution des triangles 45-45-90",
          "blocks": [
            {
              "kind": "p",
              "text": "Quatorze erreurs reviennent sans cesse dans les problèmes sur le triangle 45-45-90.",
            },
            {
              "kind": "steps",
              "steps": [
                "Supposer que l'hypoténuse vaut deux fois le côté : le doublement appartient au triangle 30-60-90. Pour [[a = 5]] cm, doubler donne 10 cm, alors que l'hypoténuse correcte vaut [[5\\sqrt{2} \\approx 7.071]] cm. Correct : [[c = a\\sqrt{2}]].",
                "Utiliser √3 au lieu de √2 : √3 appartient au triangle 30-60-90, dont le rapport est [[1 : \\sqrt{3} : 2]]. Un triangle 45-45-90 utilise toujours √2. Correct : [[c = a\\sqrt{2}]].",
                "Oublier que les deux côtés sont égaux : les deux côtés ont toujours la même longueur, donc si un problème donne un côté, l'autre côté est déjà connu. Pour [[a = 5]] cm, [[b = 5]] cm, et ce n'est pas une nouvelle inconnue. Correct : [[a = b]].",
                "Traiter l'hypoténuse comme l'un des côtés : l'hypoténuse est le côté opposé à l'angle de 90°, et elle est plus longue que l'un ou l'autre côté. L'utiliser comme côté dans la formule de l'aire donne une aire fausse. Correct : identifiez d'abord l'hypoténuse grâce au repère de l'angle droit.",
                "Utiliser [[c = a\\sqrt{3}]] : cela mélange les deux triangles remarquables. Pour [[a = 5]] cm, [[a\\sqrt{3} \\approx 8.660]] cm n'est ni l'hypoténuse ni un côté de ce triangle. Correct : [[c = a\\sqrt{2} \\approx 7.071]] cm.",
                "Diviser l'hypoténuse par 2 au lieu de √2 : diviser par deux donne le petit côté du triangle 30-60-90, et non le côté du triangle 45-45-90. Pour [[c = 10]] cm, diviser par deux donne 5 cm, alors que le côté correct vaut [[5\\sqrt{2} \\approx 7.071]] cm. Correct : [[a = \\frac{c}{\\sqrt{2}}]].",
                "Oublier d'élever le côté au carré dans le calcul de l'aire : l'aire nécessite [[a^2]], et non [[a]]. Utiliser [[A = \\frac{a}{2}]] pour [[a = 6]] cm donne 3 cm², alors que l'aire correcte vaut [[\\frac{36}{2} = 18]] cm². Correct : [[A = \\frac{a^2}{2}]].",
                "N'additionner que les deux côtés dans le calcul du périmètre : le périmètre nécessite les trois côtés. Additionner seulement les deux côtés pour [[a = 5]] cm donne 10 cm, alors que le vrai périmètre est d'environ 17.071 cm. Correct : [[P = a + b + c]].",
                "Confondre les réponses exactes et les approximations décimales : [[5\\sqrt{2}]] cm est exact, tandis que 7.071 cm est arrondi. Écrire 7.071 cm comme s'il était exact fait perdre la précision que le radical conserve. Correct : donnez d'abord la forme exacte, puis le nombre décimal.",
                "Arrondir √2 trop tôt : utiliser 1.41 pour √2 au milieu d'un calcul décale chaque étape suivante. Pour [[a = 5]] cm, [[5 \\times 1.41 = 7.05]] cm au lieu de 7.071 cm. Correct : gardez √2 exact tout au long du raisonnement et arrondissez seulement la réponse finale.",
                "Mélanger les unités de mesure : un côté en centimètres et une hypoténuse en mètres ne peuvent pas être combinés directement. Convertissez toutes les mesures dans une seule unité avant de calculer. Correct : 0.5 m vaut 50 cm, puis calculez en centimètres.",
                "Confondre les rapports des triangles 45-45-90 et 30-60-90 : les rapports [[1 : 1 : \\sqrt{2}]] et [[1 : \\sqrt{3} : 2]] appartiennent à des triangles différents. Les échanger donne une hypoténuse fausse avec une large marge d'erreur. Correct : vérifiez les angles, puis choisissez le rapport qui leur correspond.",
                "Oublier que l'aire exige des unités carrées : une aire de 18 cm est fausse par l'unité, même si le nombre est juste. L'aire mesure une surface, donc c'est 18 centimètres carrés. Correct : [[A = 18]] cm².",
                "Utiliser les formules pour un triangle rectangle quelconque : les formules [[c = a\\sqrt{2}]] et [[A = \\frac{a^2}{2}]] ne valent que lorsque les angles sont 45°, 45° et 90°. Un triangle rectangle avec des angles de 40° et 50° a un rapport différent. Correct : vérifiez d'abord les angles, puis utilisez les formules.",
              ],
            },
          ],
        },
        "sec-applications": {
          "h2": "Applications pratiques des triangles 45-45-90",
          "blocks": [
            {
              "kind": "p",
              "text": "Le rapport apparaît partout où un carré est coupé en deux.",
            },
            {
              "kind": "p",
              "text": "L'usage le plus courant est de trouver la diagonale d'un carré. Un carreau carré de côté 30 cm a une diagonale de [[30\\sqrt{2} \\approx 42.426]] cm, qui est la longueur à couper quand un carreau doit être divisé d'un coin à l'autre. Un cadre carré, un plateau de table carré et un terrain carré utilisent tous le même calcul, parce que chaque carré se divise en deux triangles 45-45-90.",
            },
            {
              "kind": "p",
              "text": "Les devoirs de géométrie et les exercices de trigonométrie utilisent des problèmes sur le triangle 45-45-90 pour vérifier si les élèves savent identifier les côtés égaux, appliquer le rapport et garder des réponses exactes avec radicaux. Un élève qui connaît un côté d'un tel triangle peut trouver les autres sans mesurer, ce qui est le but du rapport. Les démonstrations en classe utilisent le triangle pour montrer comment un rapport fixe transforme une seule mesure en une description complète d'une figure, et comment couper un carré en deux produit le triangle.",
            },
            {
              "kind": "p",
              "text": "Le dessin technique, les plans d'architecture et la géométrie de construction utilisent les relations du triangle 45-45-90 quand un plan exige un angle de 45°, comme une traverse diagonale, un motif à base carrée ou un coin coupé à 45°. Un constructeur qui connaît un côté d'un tel triangle peut trouver la distance diagonale sans la mesurer directement. Le travail dans le plan de coordonnées utilise la même idée : un déplacement de 5 unités vers la droite et de 5 unités vers le haut couvre une distance diagonale de [[5\\sqrt{2} \\approx 7.071]] unités. Ce sont des usages réalistes de la géométrie elle-même, et non des affirmations sur les tolérances d'ingénierie : le vrai travail de conception ajoute des limites de matériaux et des marges de sécurité au-delà des valeurs géométriques exactes de cette page.",
            },
          ],
        },
        "sec-practice": {
          "h2": "Exercices avec réponses",
          "blocks": [
            {
              "kind": "p",
              "text": "Faites les six exercices sur papier avant de lire les réponses.",
            },
            {
              "kind": "h3",
              "text": "Problème 1 : Trouver l'hypoténuse à partir d'un côté",
            },
            {
              "kind": "p",
              "text": "Un triangle 45-45-90 a un côté de [[a = 9]] cm. Trouvez l'hypoténuse [[c]].",
            },
            {
              "kind": "h3",
              "text": "Problème 2 : Trouver un côté à partir de l'hypoténuse",
            },
            {
              "kind": "p",
              "text": "Un triangle 45-45-90 a une hypoténuse de [[c = 14]] cm. Trouvez le côté [[a]].",
            },
            {
              "kind": "h3",
              "text": "Problème 3 : Calculer l'aire",
            },
            {
              "kind": "p",
              "text": "Un triangle 45-45-90 a un côté de [[a = 10]] cm. Trouvez l'aire [[A]].",
            },
            {
              "kind": "h3",
              "text": "Problème 4 : Calculer le périmètre",
            },
            {
              "kind": "p",
              "text": "Un triangle 45-45-90 a un côté de [[a = 3]] cm. Trouvez le périmètre [[P]].",
            },
            {
              "kind": "h3",
              "text": "Problème 5 : Trouver la diagonale d'un carré",
            },
            {
              "kind": "p",
              "text": "Un carré a un côté de 12 cm. Trouvez la longueur de sa diagonale.",
            },
            {
              "kind": "h3",
              "text": "Problème 6 : Vérifier un triangle 45-45-90 proposé",
            },
            {
              "kind": "p",
              "text": "Un triangle a des côtés de 6 cm et 6 cm et une hypoténuse de [[6\\sqrt{2}]] cm. Utilisez le théorème de Pythagore pour vérifier que ces longueurs forment un triangle 45-45-90.",
            },
            {
              "kind": "h3",
              "text": "Réponses des exercices",
            },
            {
              "kind": "p",
              "text": "Réponse 1 : [[c = a\\sqrt{2} = 9\\sqrt{2} \\approx 12.728]] cm. La réponse exacte est [[9\\sqrt{2}]] cm.",
            },
            {
              "kind": "p",
              "text": "Réponse 2 : [[a = \\frac{c\\sqrt{2}}{2} = \\frac{14\\sqrt{2}}{2} = 7\\sqrt{2} \\approx 9.899]] cm. Les deux côtés valent [[7\\sqrt{2}]] cm.",
            },
            {
              "kind": "p",
              "text": "Réponse 3 : [[A = \\frac{a^2}{2} = \\frac{100}{2} = 50]] cm². L'aire est exacte, sans arrondi.",
            },
            {
              "kind": "p",
              "text": "Réponse 4 : [[P = a(2 + \\sqrt{2}) = 3(2 + \\sqrt{2}) = 6 + 3\\sqrt{2} \\approx 10.243]] cm. Additionner les côtés un par un donne le même résultat : [[3 + 3 + 3\\sqrt{2} = 6 + 3\\sqrt{2}]] cm.",
            },
            {
              "kind": "p",
              "text": "Réponse 5 : [[d = a\\sqrt{2} = 12\\sqrt{2} \\approx 16.971]] cm. La diagonale est l'hypoténuse du triangle 45-45-90 formé en coupant le carré en deux.",
            },
            {
              "kind": "p",
              "text": "Réponse 6 : [[a^2 + b^2 = 36 + 36 = 72]], et [[c^2 = (6\\sqrt{2})^2 = 36 \\times 2 = 72]]. Les deux membres correspondent, et les côtés sont égaux, donc le triangle est un triangle 45-45-90 avec une hypoténuse d'environ 8.485 cm.",
            },
          ],
        },
      },
      "relatedHeading": "Calculatrices de triangles rectangles associées",
      "relatedIntro": "Chaque calculatrice ci-dessous traite une tâche différente sur le triangle rectangle, donc choisissez l'outil qui correspond à la mesure dont vous avez besoin.",
      "relatedItems": [
        "Calculatrice de triangle rectangle remarquable",
        "Calculatrice de triangle 30-60-90",
        "Calculatrice de côté de triangle rectangle",
        "Calculatrice d'aire de triangle rectangle",
        "Calculatrice de périmètre de triangle rectangle",
        "Calculatrice du théorème de Pythagore",
      ],
      "faqHeading": "Questions fréquentes",
      "faqs": [
        {
          "question": "Qu'est-ce qu'un triangle 45-45-90 ?",
          "answer": "Un triangle 45-45-90 est un triangle rectangle avec des angles de 45°, 45° et 90°. On l'appelle triangle rectangle isocèle parce que ses deux côtés sont égaux. Ses côtés suivent toujours le rapport fixe [[1 : 1 : \\sqrt{2}]], donc connaître un côté suffit pour trouver tous les autres.",
        },
        {
          "question": "Quel est le rapport des côtés d'un triangle 45-45-90 ?",
          "answer": "Le rapport des côtés est [[a : b : c = 1 : 1 : \\sqrt{2}]], où [[a]] et [[b]] sont les côtés égaux et [[c]] est l'hypoténuse. Cela signifie [[b = a]] et [[c = a\\sqrt{2}]]. Le rapport est le même pour chaque triangle 45-45-90, quelle que soit sa taille.",
        },
        {
          "question": "Pourquoi les deux côtés sont-ils égaux ?",
          "answer": "Les deux angles aigus mesurent tous les deux 45°, et dans tout triangle, des angles égaux se trouvent en face de côtés égaux. Le côté opposé à l'angle A est le côté [[a]], et le côté opposé à l'angle B est le côté [[b]], donc [[a = b]]. Le triangle est aussi symétrique par rapport à la hauteur issue de l'angle droit jusqu'à l'hypoténuse.",
        },
        {
          "question": "Pourquoi l'hypoténuse est-elle multipliée par √2 ?",
          "answer": "Le théorème de Pythagore donne [[a^2 + a^2 = c^2]], ce qui se simplifie en [[2a^2 = c^2]]. Prendre la racine carrée donne [[c = a\\sqrt{2}]]. Le √2 apparaît parce que deux carrés égaux s'ajoutent pour donner deux fois un carré, donc l'hypoténuse doit valoir √2 fois un côté.",
        },
        {
          "question": "Comment trouver l'hypoténuse à partir d'un côté ?",
          "answer": "Multipliez le côté par √2 en utilisant [[c = a\\sqrt{2}]]. Pour [[a = 5]] cm, [[c = 5\\sqrt{2} \\approx 7.071]] cm. L'un ou l'autre côté convient, parce que les côtés sont égaux. Gardez la forme exacte [[5\\sqrt{2}]] cm quand la question demande une valeur exacte.",
        },
        {
          "question": "Comment trouver un côté à partir de l'hypoténuse ?",
          "answer": "Divisez l'hypoténuse par √2 en utilisant [[a = \\frac{c}{\\sqrt{2}}]], ou utilisez la forme rationalisée [[a = \\frac{c\\sqrt{2}}{2}]]. Pour [[c = 10]] cm, [[a = 5\\sqrt{2} \\approx 7.071]] cm. Les deux côtés ont cette même longueur, parce que les côtés sont égaux.",
        },
        {
          "question": "Comment calculer l'aire d'un triangle 45-45-90 ?",
          "answer": "Utilisez [[A = \\frac{a^2}{2}]], où [[a]] est un côté. Les deux côtés jouent le rôle de base et de hauteur, et le triangle couvre la moitié du carré formé par eux. Pour [[a = 6]] cm, [[A = \\frac{36}{2} = 18]] cm². L'aire est toujours en unités carrées.",
        },
        {
          "question": "Comment calculer son périmètre ?",
          "answer": "Additionnez les trois côtés avec [[P = a + b + c]], ce qui se simplifie en [[P = a(2 + \\sqrt{2})]]. Pour [[a = 5]] cm, [[P = 10 + 5\\sqrt{2} \\approx 17.071]] cm. Le périmètre est une mesure linéaire, donc la réponse est en unités simples, et non en unités carrées.",
        },
        {
          "question": "Pourquoi la diagonale d'un carré crée-t-elle un triangle 45-45-90 ?",
          "answer": "Une diagonale divise un carré en deux triangles, chacun avec deux côtés du carré et un angle de coin de 90°. La diagonale partage aussi deux angles de coin en 45° chacun. Chaque triangle a donc des angles de 45°, 45° et 90°, et son hypoténuse est la diagonale, [[d = a\\sqrt{2}]].",
        },
        {
          "question": "Est-ce que √2 est un nombre exact ou une approximation ?",
          "answer": "Le symbole √2 désigne un nombre irrationnel exact dont le carré vaut 2, mais son développement décimal ne se termine jamais, en commençant par 1.41421356. Tout nombre décimal que vous écrivez pour lui est une approximation. Gardez la forme avec radical dans les réponses exactes, et utilisez un nombre décimal seulement quand une valeur mesurée ou arrondie est nécessaire.",
        },
        {
          "question": "Est-ce que tous les triangles 45-45-90 sont semblables ?",
          "answer": "Oui. Chaque triangle 45-45-90 a les mêmes trois angles, 45°, 45° et 90°, et le même rapport des côtés [[1 : 1 : \\sqrt{2}]]. Deux de ces triangles ne diffèrent que par leur taille, jamais par leur forme. Agrandir ou réduire l'un d'eux multiplie chaque côté par le même facteur, donc les proportions restent fixes.",
        },
        {
          "question": "Quelle est la différence entre les triangles 45-45-90 et 30-60-90 ?",
          "answer": "Un triangle 45-45-90 a des angles de 45°, 45° et 90°, des côtés égaux et le rapport [[1 : 1 : \\sqrt{2}]]. Un triangle 30-60-90 a des angles de 30°, 60° et 90°, aucun côté égal et le rapport [[1 : \\sqrt{3} : 2]]. Leurs formules ne peuvent pas être échangées, donc vérifiez toujours les angles d'abord.",
        },
      ],
    },
};
