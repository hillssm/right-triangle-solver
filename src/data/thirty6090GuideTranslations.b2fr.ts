// thirty6090GuideTranslations.bfr.ts: 30-60-90 Triangle
// Guide (Page 39 of 45) translation.
export const THIRTY6090_B2_FR = {
  "fr": {
      "meta": {
        "title": "Calculatrice de Triangle 30-60-90 - Côtés, Aire, Périmètre",
        "description": "Utilisez la calculatrice de triangle 30-60-90 pour trouver le petit côté, le grand côté, l'hypoténuse, l'aire et le périmètre à partir d'un seul côté connu, grâce au rapport 1:√3:2.",
        "primaryKeyword": "30-60-90 Triangle Calculator",
        "slug": "30-60-90-triangle-calculator",
      },
      "tocHeading": "Contenu du guide",
      "tocItems": {
        "sec-intro": "Calculatrice de Triangle 30-60-90",
        "sec-calculate": "Calculer les Côtés Manquants, l'Aire et le Périmètre",
        "sec-what": "Qu'est-ce qu'un Triangle 30-60-90 ?",
        "sec-sides": "Comprendre le Petit Côté, le Grand Côté et l'Hypoténuse",
        "sec-ratio": "Le Rapport des Côtés du Triangle 30-60-90",
        "sec-why-sqrt3": "Pourquoi la Racine Carrée de 3 Apparaît-elle ?",
        "sec-long-leg": "Formule pour Trouver le Grand Côté à Partir du Petit Côté",
        "sec-hypotenuse": "Formule pour Trouver l'Hypoténuse à Partir du Petit Côté",
        "sec-short-leg-hyp": "Formule pour Trouver le Petit Côté à Partir de l'Hypoténuse",
        "sec-short-leg-long": "Formule pour Trouver le Petit Côté à Partir du Grand Côté",
        "sec-long-leg-hyp": "Formule pour Trouver le Grand Côté à Partir de l'Hypoténuse",
        "sec-area": "Comment Calculer l'Aire d'un Triangle 30-60-90",
        "sec-perimeter": "Comment Calculer le Périmètre d'un Triangle 30-60-90",
        "sec-step-example": "Exemple Résolu Étape par Étape d'un Triangle 30-60-90",
        "sec-examples": "Exemples Détaillés de Calculs sur le Triangle 30-60-90",
        "sec-derive-pythagoras": "Comment Déduire le Rapport du Triangle 30-60-90 avec Pythagore",
        "sec-equilateral": "Relation Entre les Triangles 30-60-90 et les Triangles Équilatéraux",
        "sec-trig": "Relations Trigonométriques dans un Triangle 30-60-90",
        "sec-verify": "Comment Vérifier Vos Calculs sur le Triangle 30-60-90",
        "sec-properties": "Propriétés Importantes des Triangles 30-60-90",
        "sec-mistakes": "Erreurs Fréquentes dans la Résolution des Triangles 30-60-90",
        "sec-applications": "Applications Pratiques des Triangles 30-60-90",
        "sec-practice": "Exercices avec Réponses",
        "sec-related": "Découvrir les Calculatrices de Triangle Rectangle Associées",
        "sec-faq": "Questions Fréquentes",
      },
      "sections": {
        "sec-intro": {
          "h2": "Calculatrice de Triangle 30-60-90",
          "blocks": [
            {
              "kind": "p",
              "text": "Trouvez chaque côté manquant, l'aire et le périmètre d'un triangle 30-60-90 à partir d'un seul côté connu.",
            },
            {
              "kind": "p",
              "text": "Un triangle 30-60-90 est un triangle rectangle dont les trois angles mesurent 30°, 60° et 90°. On l'appelle un triangle rectangle spécial parce que ses côtés suivent toujours le même rapport fixe, quelle que soit la taille du triangle. La calculatrice de triangle 30-60-90 de cette page utilise ce rapport pour trouver le petit côté, le grand côté, l'hypoténuse, l'aire et le périmètre à partir d'une seule longueur de côté que vous saisissez.",
            },
            {
              "kind": "p",
              "text": "Dans le triangle ABC, l'angle A mesure 30°, l'angle B mesure 60° et l'angle C mesure 90°. Le côté BC est le petit côté [[a]], opposé à l'angle de 30°. Le côté AC est le grand côté [[b]], opposé à l'angle de 60°. Le côté AB est l'hypoténuse [[c]], opposée à l'angle de 90°. Les trois côtés vérifient toujours [[a : b : c = 1 : \\sqrt{3} : 2]], ce qui signifie [[b = a\\sqrt{3}]] et [[c = 2a]].",
            },
            {
              "kind": "p",
              "text": "Si [[a = 5]] cm, alors [[b = 5\\sqrt{3} \\approx 8.660]] cm et [[c = 2 \\times 5 = 10]] cm. La calculatrice peut aussi calculer l'aire et le périmètre à partir du même petit côté, donc une seule mesure suffit pour décrire tout le triangle. Les sections ci-dessous expliquent le rapport, les sept modes de calcul et les formules, avec des exemples détaillés à chaque étape.",
            },
          ],
        },
        "sec-calculate": {
          "h2": "Calculer les Côtés Manquants, l'Aire et le Périmètre",
          "blocks": [
            {
              "kind": "p",
              "text": "Sept modes couvrent toutes les façons de partir d'un seul côté connu.",
            },
            {
              "kind": "p",
              "text": "La calculatrice de cette page propose sept modes, un pour chaque mesure qu'elle peut trouver. Choisissez le mode qui correspond au côté que vous connaissez et à la mesure dont vous avez besoin. Chaque mode ne demande qu'une seule valeur, parce que le rapport fixe complète tout le reste. Le tableau ci-dessous présente les sept modes avec la valeur demandée par chacun et le résultat qu'il renvoie.",
            },
            {
              "kind": "p",
              "text": "Pour utiliser un mode, commencez par déterminer quel côté vous connaissez. Le côté opposé à l'angle de 30° est le petit côté [[a]], le côté opposé à l'angle de 60° est le grand côté [[b]] et le côté opposé à l'angle de 90° est l'hypoténuse [[c]]. Saisissez cette mesure sous forme de nombre positif, choisissez une unité, puis cliquez sur le bouton Calculer. Le résultat s'affiche avec un raisonnement étape par étape, pour que vous voyiez la formule et la substitution, et pas seulement la réponse. Utilisez Réinitialiser pour effacer les champs avant de commencer un nouveau problème.",
            },
            {
              "kind": "p",
              "text": "Les différents modes utilisent des formules différentes parce que chacun part d'un côté connu différent. Trouver le grand côté à partir du petit côté multiplie par √3, tandis que trouver le petit côté à partir de l'hypoténuse divise par 2. Les modes d'aire et de périmètre partent du petit côté et calculent d'abord les autres côtés en interne, puis appliquent la formule d'aire ou de périmètre. Vous n'avez jamais besoin de calculer vous-même les côtés manquants avant d'utiliser ces deux modes.",
            },
          ],
          "table": {
            "headers": [
              "Mode de calculatrice",
              "Valeur requise",
              "Résultat",
            ],
            "rows": [
              [
                "Grand côté à partir du petit côté",
                "Petit côté a",
                "Grand côté b",
              ],
              [
                "Hypoténuse à partir du petit côté",
                "Petit côté a",
                "Hypoténuse c",
              ],
              [
                "Petit côté à partir de l'hypoténuse",
                "Hypoténuse c",
                "Petit côté a",
              ],
              [
                "Petit côté à partir du grand côté",
                "Grand côté b",
                "Petit côté a",
              ],
              [
                "Grand côté à partir de l'hypoténuse",
                "Hypoténuse c",
                "Grand côté b",
              ],
              [
                "Aire à partir du petit côté",
                "Petit côté a",
                "Aire A",
              ],
              [
                "Périmètre à partir du petit côté",
                "Petit côté a",
                "Périmètre P",
              ],
            ],
          },
          "image": {
            "src": "thirty-60-90-modes.svg",
            "alt": "Aperçu des sept modes de la calculatrice 30-60-90, avec la valeur connue et le résultat calculé pour chaque mode",
            "caption": "Sept modes : chacun part d'un seul côté connu et trouve une mesure manquante.",
          },
        },
        "sec-what": {
          "h2": "Qu'est-ce qu'un Triangle 30-60-90 ?",
          "blocks": [
            {
              "kind": "p",
              "text": "Un triangle 30-60-90 doit son nom à ses trois angles.",
            },
            {
              "kind": "p",
              "text": "C'est un triangle rectangle, ce qui signifie que l'un de ses angles mesure exactement 90°. Les deux autres angles mesurent 30° et 60°, et le nom énumère les trois dans l'ordre. Comme l'angle droit est fixe et que les deux autres angles sont fixes aussi, la forme du triangle est entièrement déterminée : chaque triangle 30-60-90 a la même forme, et deux triangles de ce type ne diffèrent que par leur taille.",
            },
            {
              "kind": "p",
              "text": "On l'appelle un triangle rectangle spécial parce que ses côtés suivent un rapport fixe. Dans la plupart des triangles rectangles, connaître un côté ne dit rien des autres. Dans un triangle 30-60-90, connaître un côté les donne tous, parce que le rapport [[1 : \\sqrt{3} : 2]] lie les trois côtés entre eux. C'est pourquoi la calculatrice peut trouver cinq mesures à partir d'une seule valeur.",
            },
            {
              "kind": "p",
              "text": "Les trois angles totalisent 180°, comme dans tout triangle : [[30° + 60° + 90° = 180°]]. Le triangle peut être aussi petit que quelques millimètres ou aussi grand qu'un terrain à bâtir, et les angles restent les mêmes pendant que les côtés grandissent ensemble. Le rapport reste le même aussi, donc un triangle de petit côté 5 cm et un triangle de petit côté 5 m ont la même forme à des tailles différentes.",
            },
          ],
          "image": {
            "src": "thirty-60-90-main.svg",
            "alt": "Triangle 30-60-90 ABC étiqueté, avec des angles de 30, 60 et 90 degrés, un petit côté a, un grand côté a fois racine carrée de 3 et une hypoténuse 2a",
            "caption": "Triangle ABC : angles de 30°, 60° et 90°, avec des côtés a, a√3 et 2a.",
          },
        },
        "sec-sides": {
          "h2": "Comprendre le Petit Côté, le Grand Côté et l'Hypoténuse",
          "blocks": [
            {
              "kind": "p",
              "text": "Les trois côtés tirent leur nom des angles qui leur sont opposés.",
            },
            {
              "kind": "p",
              "text": "Le petit côté [[a]] est le côté opposé à l'angle de 30°. C'est le côté le plus court du triangle, parce que le plus petit angle est toujours opposé au côté le plus court. Dans le triangle ABC, c'est le côté BC. Le petit côté est le point de départ naturel de la plupart des calculs, parce que les deux autres côtés en sont de simples multiples : le grand côté vaut [[a\\sqrt{3}]] et l'hypoténuse vaut [[2a]].",
            },
            {
              "kind": "p",
              "text": "Le grand côté [[b]] est le côté opposé à l'angle de 60°. Il est plus long que le petit côté et plus court que l'hypoténuse. Dans le triangle ABC, c'est le côté AC. Sa longueur vaut [[\\sqrt{3} \\approx 1.732]] fois le petit côté, donc il est un peu moins de deux fois plus long. L'hypoténuse [[c]] est le côté opposé à l'angle de 90°, le côté AB, et c'est le côté le plus long du triangle, exactement deux fois le petit côté.",
            },
            {
              "kind": "p",
              "text": "Identifier les côtés par leurs angles opposés est plus fiable que de se fier à l'orientation du schéma. Un triangle peut être tourné ou retourné, de sorte que le petit côté peut apparaître à gauche, à droite ou en bas. La règle de l'angle opposé ne change jamais : trouvez l'angle de 30°, et le côté en face est le petit côté. Trouvez l'angle de 90°, marqué par un petit carré, et le côté en face est l'hypoténuse.",
            },
          ],
          "table": {
            "headers": [
              "Côté",
              "Angle opposé",
              "Taille",
            ],
            "rows": [
              [
                "Petit côté a",
                "30°",
                "Le plus petit",
              ],
              [
                "Grand côté b",
                "60°",
                "Moyen",
              ],
              [
                "Hypoténuse c",
                "90°",
                "Le plus long",
              ],
            ],
          },
        },
        "sec-ratio": {
          "h2": "Le Rapport des Côtés du Triangle 30-60-90",
          "blocks": [
            {
              "kind": "p",
              "text": "Le rapport 1:√3:2 fixe chaque triangle 30-60-90.",
            },
            {
              "kind": "p",
              "text": "Le rapport des côtés d'un triangle 30-60-90 est :",
            },
            {
              "kind": "p",
              "text": "[[[a : b : c = 1 : \\sqrt{3} : 2]]]",
            },
            {
              "kind": "p",
              "text": "Chaque partie du rapport décrit un côté. Le petit côté représente une unité, le grand côté représente √3 unités et l'hypoténuse représente deux unités. Écrit avec le petit côté noté [[a]], les trois côtés sont [[a = a]], [[b = a\\sqrt{3}]] et [[c = 2a]]. Si le petit côté mesure 1 cm, le grand côté mesure √3 cm et l'hypoténuse mesure 2 cm. Si le petit côté mesure 10 cm, le grand côté mesure [[10\\sqrt{3}]] cm et l'hypoténuse mesure 20 cm.",
            },
            {
              "kind": "p",
              "text": "Le rapport reste le même quelle que soit la taille du triangle, parce que tous les triangles 30-60-90 sont semblables. Agrandir ou réduire un triangle multiplie chaque côté par le même facteur, donc les proportions entre les côtés ne changent pas. Prenons [[a = 4]] cm comme exemple : le grand côté vaut [[b = 4\\sqrt{3} \\approx 6.928]] cm et l'hypoténuse vaut [[c = 8]] cm, et le rapport [[4 : 6.928 : 8]] est le même que [[1 : \\sqrt{3} : 2]].",
            },
            {
              "kind": "p",
              "text": "Gardez la forme radicale exacte chaque fois que possible. √3 vaut environ 1.732, mais c'est un nombre irrationnel, donc aucune valeur décimale ne l'égale exactement. Écrire [[4\\sqrt{3}]] cm est exact, tandis que 6.928 cm est une approximation arrondie. Utilisez la forme exacte dans votre raisonnement et dans les réponses finales quand la question exige une valeur exacte, et donnez la valeur décimale seulement quand une réponse approchée est demandée.",
            },
          ],
          "image": {
            "src": "thirty-60-90-ratio.svg",
            "alt": "Trois barres comparant le petit côté, le grand côté et l'hypoténuse dans le rapport 1 à racine carrée de 3 à 2",
            "caption": "Le rapport fixe 1:√3:2 compare le petit côté, le grand côté et l'hypoténuse.",
          },
        },
        "sec-why-sqrt3": {
          "h2": "Pourquoi la Racine Carrée de 3 Apparaît-elle ?",
          "blocks": [
            {
              "kind": "p",
              "text": "La racine carrée de 3 vient de la coupe d'un triangle équilatéral en deux.",
            },
            {
              "kind": "p",
              "text": "Commencez avec un triangle équilatéral dont la longueur de côté est [[2a]]. Ses trois côtés sont égaux et ses trois angles mesurent 60°. Tracez maintenant une hauteur depuis un sommet jusqu'au côté opposé. La hauteur est la droite qui part du sommet et rencontre le côté opposé à angle droit.",
            },
            {
              "kind": "p",
              "text": "La hauteur partage la base en deux, la coupant en deux segments égaux de longueur [[a]]. Elle divise aussi le triangle équilatéral en deux triangles rectangles congruents. Chaque petit triangle a des angles de 30°, 60° et 90° : l'angle de 60° subsiste à la base, la hauteur crée un angle de 90° là où elle rencontre la base, et l'angle de 60° au sommet est partagé en deux angles de 30°. L'hypoténuse de chaque petit triangle est le côté du triangle équilatéral, [[2a]], et le petit côté est la moitié de la base, [[a]].",
            },
            {
              "kind": "p",
              "text": "Le côté restant du petit triangle est la hauteur elle-même. Appelons-le [[b]] et appliquons le théorème de Pythagore :",
            },
            {
              "kind": "p",
              "text": "[[[b^2 = (2a)^2 - a^2]]]",
            },
            {
              "kind": "p",
              "text": "[[[b^2 = 4a^2 - a^2]]]",
            },
            {
              "kind": "p",
              "text": "[[[b^2 = 3a^2]]]",
            },
            {
              "kind": "p",
              "text": "[[[b = a\\sqrt{3}]]]",
            },
            {
              "kind": "p",
              "text": "Le 3 sous la racine carrée vient de [[4a^2 - a^2 = 3a^2]], la différence entre le carré de l'hypoténuse et le carré du petit côté. C'est toute la raison pour laquelle √3 apparaît dans chaque formule du triangle 30-60-90 : le grand côté est la hauteur d'un triangle équilatéral, et Pythagore impose qu'il vaille [[a\\sqrt{3}]]. Cette déduction prouve aussi le rapport des côtés, parce que les trois côtés du petit triangle sont maintenant [[a]], [[a\\sqrt{3}]] et [[2a]].",
            },
          ],
          "image": {
            "src": "thirty-60-90-equilateral.svg",
            "alt": "Triangle équilatéral de côté 2a partagé par une hauteur en deux triangles 30-60-90 congruents, avec une hauteur de a fois racine carrée de 3",
            "caption": "Une hauteur partage un triangle équilatéral de côté 2a en deux triangles 30-60-90.",
          },
        },
        "sec-long-leg": {
          "h2": "Formule pour Trouver le Grand Côté à Partir du Petit Côté",
          "blocks": [
            {
              "kind": "p",
              "text": "Multipliez le petit côté par √3 pour obtenir le grand côté.",
            },
            {
              "kind": "p",
              "text": "[[[b = a\\sqrt{3}]]]",
            },
            {
              "kind": "p",
              "text": "Ici, [[b]] est le grand côté et [[a]] est le petit côté. La formule est une lecture directe du rapport des côtés : le grand côté représente √3 unités pour chaque unité de petit côté, donc le grand côté vaut √3 fois le petit côté. La multiplication est nécessaire parce que le rapport est une relation de mise à l'échelle, et √3 apparaît parce que le grand côté est la hauteur du triangle équilatéral qui engendre ce triangle.",
            },
            {
              "kind": "p",
              "text": "Prenons [[a = 5]] cm comme exemple :",
            },
            {
              "kind": "p",
              "text": "[[[b = 5\\sqrt{3}]]]",
            },
            {
              "kind": "p",
              "text": "[[[b \\approx 8.660 \\text{ cm}]]]",
            },
            {
              "kind": "p",
              "text": "Le résultat est plus long que le petit côté, comme il se doit : √3 vaut environ 1.732, donc multiplier par ce nombre augmente la longueur. La réponse exacte est [[5\\sqrt{3}]] cm, et 8.660 cm est l'approximation décimale. Gardez la forme exacte quand la question l'exige, et arrondissez la valeur décimale seulement à la fin de votre raisonnement, jamais au milieu.",
            },
            {
              "kind": "p",
              "text": "Utilisez ce mode chaque fois que le petit côté est le côté connu et que le grand côté est l'inconnu. Dans un problème de manuel, le petit côté est généralement le côté opposé à l'angle de 30°, donc vérifiez l'angle avant de multiplier. Un rapide contrôle du bon sens aide : le grand côté doit être un peu moins de deux fois le petit côté, puisque √3 est un peu moins de 2. Si votre réponse dépasse deux fois le petit côté, vous avez multiplié par le mauvais nombre.",
            },
          ],
          "image": {
            "src": "thirty-60-90-long-leg.svg",
            "alt": "Triangle 30-60-90 avec un petit côté de 5 cm et un grand côté étiqueté 5 fois racine carrée de 3, environ 8.660 cm",
            "caption": "Grand côté à partir du petit côté : a = 5 cm donne b = 5√3 ≈ 8.660 cm.",
          },
        },
        "sec-hypotenuse": {
          "h2": "Formule pour Trouver l'Hypoténuse à Partir du Petit Côté",
          "blocks": [
            {
              "kind": "p",
              "text": "Doublez le petit côté pour obtenir l'hypoténuse.",
            },
            {
              "kind": "p",
              "text": "[[[c = 2a]]]",
            },
            {
              "kind": "p",
              "text": "Ici, [[c]] est l'hypoténuse et [[a]] est le petit côté. L'hypoténuse vaut toujours exactement deux fois le petit côté, sans racine carrée. C'est la plus simple des formules du triangle 30-60-90, et aussi la plus utile pour les vérifications mentales rapides.",
            },
            {
              "kind": "p",
              "text": "La raison remonte au triangle équilatéral. L'hypoténuse du triangle 30-60-90 est un côté entier du triangle équilatéral, tandis que le petit côté est la moitié d'un côté, parce que la hauteur partage la base en deux. Un côté entier vaut deux fois une moitié de côté, donc l'hypoténuse vaut deux fois le petit côté. Prenons [[a = 7]] cm :",
            },
            {
              "kind": "p",
              "text": "[[[c = 2 \\times 7]]]",
            },
            {
              "kind": "p",
              "text": "[[[c = 14 \\text{ cm}]]]",
            },
            {
              "kind": "p",
              "text": "La réponse est exacte, sans arrondi, parce que doubler un nombre entier donne un nombre entier. Si le petit côté est un nombre décimal, l'hypoténuse vaut quand même exactement deux fois ce nombre, donc [[a = 2.5]] cm donne [[c = 5]] cm.",
            },
            {
              "kind": "p",
              "text": "C'est le mode à choisir quand un problème donne le petit côté et demande le côté le plus long. Comme la réponse est un simple doublement, c'est aussi le moyen le plus rapide de repérer un petit côté erroné : si l'hypoténuse du problème ne vaut pas deux fois votre petit côté, soit le petit côté est faux, soit le triangle n'est pas un triangle 30-60-90. Vérifiez les angles avant de faire confiance au doublement.",
            },
          ],
          "image": {
            "src": "thirty-60-90-hypotenuse.svg",
            "alt": "Triangle 30-60-90 avec un petit côté de 5 cm et une hypoténuse étiquetée 2a égale à 10 cm",
            "caption": "Hypoténuse à partir du petit côté : c = 2a, donc a = 5 cm donne c = 10 cm.",
          },
        },
        "sec-short-leg-hyp": {
          "h2": "Formule pour Trouver le Petit Côté à Partir de l'Hypoténuse",
          "blocks": [
            {
              "kind": "p",
              "text": "Divisez l'hypoténuse par deux pour obtenir le petit côté.",
            },
            {
              "kind": "p",
              "text": "[[[a = \\frac{c}{2}]]]",
            },
            {
              "kind": "p",
              "text": "Ici, [[a]] est le petit côté et [[c]] est l'hypoténuse. Cette formule est l'inverse de [[c = 2a]] : puisque l'hypoténuse vaut deux fois le petit côté, le petit côté vaut la moitié de l'hypoténuse. En réarrangeant [[c = 2a]] et en divisant les deux membres par 2, on obtient [[a = \\frac{c}{2}]].",
            },
            {
              "kind": "p",
              "text": "Prenons [[c = 18]] cm :",
            },
            {
              "kind": "p",
              "text": "[[[a = \\frac{18}{2}]]]",
            },
            {
              "kind": "p",
              "text": "[[[a = 9 \\text{ cm}]]]",
            },
            {
              "kind": "p",
              "text": "La réponse est exacte, sans racine carrée et sans arrondi. Cette relation s'applique spécifiquement aux triangles 30-60-90. Dans un triangle rectangle général, l'hypoténuse ne vaut pas deux fois le petit côté, donc n'utilisez pas cette formule à moins de savoir que les angles mesurent 30°, 60° et 90°. Si l'hypoténuse est un nombre impair, le petit côté est une valeur avec une demie, par exemple [[c = 15]] cm donne [[a = 7.5]] cm.",
            },
            {
              "kind": "p",
              "text": "Ce mode est le point de départ de la plupart des problèmes qui donnent l'hypoténuse. Une fois le petit côté connu, le grand côté suit avec [[b = a\\sqrt{3}]] et l'aire et le périmètre suivent avec leurs propres formules. Une réponse avec une demie est normale ici et n'est pas le signe d'une erreur, donc n'arrondissez pas 7.5 cm à 8 cm : la moitié exacte est la bonne réponse.",
            },
          ],
        },
        "sec-short-leg-long": {
          "h2": "Formule pour Trouver le Petit Côté à Partir du Grand Côté",
          "blocks": [
            {
              "kind": "p",
              "text": "Divisez le grand côté par √3 pour obtenir le petit côté.",
            },
            {
              "kind": "p",
              "text": "[[[a = \\frac{b}{\\sqrt{3}}]]]",
            },
            {
              "kind": "p",
              "text": "Ici, [[a]] est le petit côté et [[b]] est le grand côté. Cette formule vient de la réorganisation de [[b = a\\sqrt{3}]] : diviser les deux membres par √3 isole [[a]]. Diviser par √3 inverse la multiplication d'origine, donc cela annule exactement ce que la formule directe a fait.",
            },
            {
              "kind": "p",
              "text": "Prenons [[b = 12]] cm :",
            },
            {
              "kind": "p",
              "text": "[[[a = \\frac{12}{\\sqrt{3}}]]]",
            },
            {
              "kind": "p",
              "text": "Rationalisez le dénominateur en multipliant le numérateur et le dénominateur par √3 : [[a = \\frac{12\\sqrt{3}}{3} = 4\\sqrt{3}]] cm, soit environ 6.928 cm. La réponse exacte est [[4\\sqrt{3}]] cm, et 6.928 cm est la forme décimale. Le petit côté est plus petit que le grand côté, comme il se doit, puisque diviser par un nombre supérieur à 1 réduit la valeur.",
            },
            {
              "kind": "p",
              "text": "La rationalisation vaut la peine parce qu'elle laisse la réponse sous la forme exacte standard, un nombre entier fois √3. Une approximation décimale cache cette structure, et une fraction non rationalisée avec √3 au dénominateur n'est pas la forme attendue dans les réponses d'examen. Quand le grand côté est déjà un multiple de √3, la division est nette : [[b = 9\\sqrt{3}]] cm donne [[a = 9]] cm directement.",
            },
          ],
        },
        "sec-long-leg-hyp": {
          "h2": "Formule pour Trouver le Grand Côté à Partir de l'Hypoténuse",
          "blocks": [
            {
              "kind": "p",
              "text": "Multipliez la moitié de l'hypoténuse par √3 pour obtenir le grand côté.",
            },
            {
              "kind": "p",
              "text": "[[[b = \\frac{c\\sqrt{3}}{2}]]]",
            },
            {
              "kind": "p",
              "text": "Ici, [[b]] est le grand côté et [[c]] est l'hypoténuse. Cette formule est construite en deux étapes. Trouvez d'abord le petit côté avec [[a = \\frac{c}{2}]], puis trouvez le grand côté avec [[b = a\\sqrt{3}]]. En remplaçant la première formule dans la seconde, on obtient [[b = \\frac{c}{2}\\sqrt{3}]], ce qui est la même chose que [[b = \\frac{c\\sqrt{3}}{2}]].",
            },
            {
              "kind": "p",
              "text": "Prenons [[c = 16]] cm :",
            },
            {
              "kind": "p",
              "text": "[[[b = \\frac{16\\sqrt{3}}{2}]]]",
            },
            {
              "kind": "p",
              "text": "[[[b = 8\\sqrt{3} \\approx 13.856 \\text{ cm}]]]",
            },
            {
              "kind": "p",
              "text": "Le résultat se situe entre le petit côté et l'hypoténuse, comme il se doit. Le petit côté ici vaut [[a = 8]] cm, le grand côté vaut environ 13.856 cm et l'hypoténuse vaut 16 cm, donc [[8 < 13.856 < 16]]. Cet ordre est une vérification rapide de toute réponse donnée par cette formule.",
            },
            {
              "kind": "p",
              "text": "Faire le calcul en deux étapes est une bonne habitude, même si la formule unique fait les deux à la fois. Trouvez d'abord le petit côté, [[a = \\frac{c}{2} = 8]] cm, puis multipliez par √3. Si la méthode en deux étapes et la formule unique ne s'accordent pas, l'erreur est dans le calcul, pas dans la formule, et la méthode en deux étapes montre exactement où elle s'est produite.",
            },
          ],
        },
        "sec-area": {
          "h2": "Comment Calculer l'Aire d'un Triangle 30-60-90",
          "blocks": [
            {
              "kind": "p",
              "text": "L'aire n'a besoin que du petit côté, parce que le grand côté en découle.",
            },
            {
              "kind": "p",
              "text": "L'aire d'un triangle rectangle quelconque est la moitié du produit de ses deux côtés, parce que les côtés jouent le rôle de la base et de la hauteur perpendiculaire :",
            },
            {
              "kind": "p",
              "text": "[[[A = \\frac{ab}{2}]]]",
            },
            {
              "kind": "p",
              "text": "Comme [[b = a\\sqrt{3}]], remplacez pour obtenir l'aire à partir du seul petit côté :",
            },
            {
              "kind": "p",
              "text": "[[[A = \\frac{a^2\\sqrt{3}}{2}]]]",
            },
            {
              "kind": "p",
              "text": "La division par deux est nécessaire parce qu'un triangle couvre la moitié du rectangle formé par ses deux côtés. L'aire finale s'exprime en unités carrées, comme les centimètres carrés, parce que l'aire mesure une surface, pas une longueur. Prenons [[a = 6]] cm. Trouvez d'abord le grand côté, [[b = 6\\sqrt{3}]] cm, puis calculez :",
            },
            {
              "kind": "p",
              "text": "[[[A = \\frac{6 \\times 6\\sqrt{3}}{2}]]]",
            },
            {
              "kind": "p",
              "text": "[[[A = 18\\sqrt{3} \\approx 31.177 \\text{ cm}^2]]]",
            },
            {
              "kind": "p",
              "text": "Le mode d'aire de la calculatrice accepte le petit côté et calcule le grand côté en interne, donc vous saisissez seulement [[a]] et la calculatrice fait le reste. Si vous connaissez le grand côté au lieu du petit côté, utilisez la <a href=\"/right-triangle-area-calculator/\">calculatrice d'aire de triangle rectangle</a>, qui accepte les deux côtés directement.",
            },
            {
              "kind": "p",
              "text": "L'aire croît avec le carré du petit côté, donc doubler le petit côté quadruple l'aire. Un triangle avec [[a = 12]] cm a une aire quatre fois plus grande que celle du triangle avec [[a = 6]] cm, environ 124.708 cm², et non deux fois plus grande. Cette relation au carré est facile à oublier, donc vérifiez-la chaque fois qu'un problème agrandit ou réduit un triangle.",
            },
          ],
          "image": {
            "src": "thirty-60-90-area.svg",
            "alt": "Triangle 30-60-90 avec un petit côté de 6 cm et un grand côté de 6 fois racine carrée de 3 cm comme base et hauteur, aire de 18 fois racine carrée de 3 centimètres carrés",
            "caption": "Aire à partir du petit côté : a = 6 cm donne A = 18√3 ≈ 31.177 cm².",
          },
        },
        "sec-perimeter": {
          "h2": "Comment Calculer le Périmètre d'un Triangle 30-60-90",
          "blocks": [
            {
              "kind": "p",
              "text": "Additionnez les trois côtés, puis mettez le petit côté en facteur.",
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
              "text": "Remplacez par les relations du triangle spécial, [[b = a\\sqrt{3}]] et [[c = 2a]] :",
            },
            {
              "kind": "p",
              "text": "[[[P = a + a\\sqrt{3} + 2a]]]",
            },
            {
              "kind": "p",
              "text": "Regroupez les termes semblables pour obtenir la forme simplifiée :",
            },
            {
              "kind": "p",
              "text": "[[[P = a(3 + \\sqrt{3})]]]",
            },
            {
              "kind": "p",
              "text": "Les trois longueurs de côté sont toutes incluses, parce que le périmètre suit tout le contour du triangle : le long du petit côté, puis du grand côté, et de retour le long de l'hypoténuse. Omettre un côté donne une distance plus courte qui n'est pas le périmètre. Le périmètre est une mesure linéaire, pas une mesure d'aire, donc la réponse est en unités simples comme les centimètres, jamais en centimètres carrés.",
            },
            {
              "kind": "p",
              "text": "Prenons [[a = 5]] cm :",
            },
            {
              "kind": "p",
              "text": "[[[P = 5(3 + \\sqrt{3})]]]",
            },
            {
              "kind": "p",
              "text": "[[[P \\approx 23.660 \\text{ cm}]]]",
            },
            {
              "kind": "p",
              "text": "La forme exacte est [[5(3 + \\sqrt{3})]] cm, et 23.660 cm est la forme décimale. Le mode de périmètre de la calculatrice accepte le petit côté et additionne les trois côtés en interne. Si vous connaissez déjà les trois côtés, la <a href=\"/right-triangle-perimeter-calculator/\">calculatrice de périmètre de triangle rectangle</a> les additionne directement.",
            },
            {
              "kind": "p",
              "text": "Le périmètre croît en proportion directe du petit côté, donc doubler le petit côté double le périmètre. Un triangle avec [[a = 10]] cm a un périmètre d'environ 47.321 cm, exactement deux fois les 23.660 cm du triangle avec [[a = 5]] cm. Cette mise à l'échelle linéaire est une vérification utile : si doubler le petit côté ne double pas votre périmètre, le calcul s'est trompé quelque part.",
            },
          ],
          "image": {
            "src": "thirty-60-90-perimeter.svg",
            "alt": "Triangle 30-60-90 avec les trois côtés étiquetés 5 cm, 5 fois racine carrée de 3 cm et 10 cm, périmètre d'environ 23.660 cm",
            "caption": "Périmètre à partir du petit côté : a = 5 cm donne P = 5(3 + √3) ≈ 23.660 cm.",
          },
        },
        "sec-step-example": {
          "h2": "Exemple Résolu Étape par Étape d'un Triangle 30-60-90",
          "blocks": [
            {
              "kind": "p",
              "text": "Un seul triangle, a = 5 cm, traité du début à la fin.",
            },
            {
              "kind": "p",
              "text": "Commencez avec le petit côté [[a = 5]] cm et trouvez chaque autre mesure du triangle, une formule à la fois. Chaque étape utilise une formule des sections ci-dessus, et le tableau récapitulatif à la fin rassemble les résultats.",
            },
            {
              "kind": "steps",
              "steps": [
                "Trouvez le grand côté : [[b = a\\sqrt{3} = 5\\sqrt{3} \\approx 8.660]] cm.",
                "Trouvez l'hypoténuse : [[c = 2a = 2 \\times 5 = 10]] cm.",
                "Trouvez l'aire : [[A = \\frac{ab}{2} = \\frac{5 \\times 5\\sqrt{3}}{2} = \\frac{25\\sqrt{3}}{2} \\approx 21.651]] centimètres carrés.",
                "Trouvez le périmètre : [[P = a + b + c = 5 + 5\\sqrt{3} + 10 = 15 + 5\\sqrt{3} \\approx 23.660]] cm.",
              ],
            },
            {
              "kind": "p",
              "text": "Les quatre mesures décrivent le même triangle. Les côtés [[5]], [[8.660]] et [[10]] vérifient le rapport [[1 : \\sqrt{3} : 2]] et le théorème de Pythagore, [[5^2 + (5\\sqrt{3})^2 = 25 + 75 = 100 = 10^2]]. L'aire et le périmètre sont deux types de mesures différents de ce même triangle : l'aire couvre sa surface, tandis que le périmètre suit son contour.",
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
                "Petit côté a",
                "5 cm",
                "5 cm",
              ],
              [
                "Grand côté b",
                "5√3 cm",
                "8.660 cm",
              ],
              [
                "Hypoténuse c",
                "10 cm",
                "10 cm",
              ],
              [
                "Aire A",
                "25√3/2 cm²",
                "21.651 cm²",
              ],
              [
                "Périmètre P",
                "15 + 5√3 cm",
                "23.660 cm",
              ],
            ],
          },
        },
        "sec-examples": {
          "h2": "Exemples Détaillés de Calculs sur le Triangle 30-60-90",
          "blocks": [
            {
              "kind": "p",
              "text": "Huit exemples détaillés, un pour chaque mode de calculatrice, plus un cas plus grand.",
            },
            {
              "kind": "h3",
              "text": "Exemple 1 : Trouver le Grand Côté",
            },
            {
              "kind": "p",
              "text": "Étant donné [[a = 4]] cm. Formule : [[b = a\\sqrt{3}]]. Substitution : [[b = 4\\sqrt{3}]]. Résultat : [[b \\approx 6.928]] cm. Le grand côté vaut environ 1.732 fois le petit côté, donc 4 cm deviennent environ 6.928 cm. La réponse exacte est [[4\\sqrt{3}]] cm.",
            },
            {
              "kind": "h3",
              "text": "Exemple 2 : Trouver l'Hypoténuse",
            },
            {
              "kind": "p",
              "text": "Étant donné [[a = 9]] cm. Formule : [[c = 2a]]. Substitution : [[c = 2 \\times 9]]. Résultat : [[c = 18]] cm. L'hypoténuse vaut exactement deux fois le petit côté, donc la réponse ne demande aucun arrondi. C'est la vérification la plus rapide de tout le sujet : toute hypoténuse qui ne vaut pas deux fois le petit côté signale une erreur.",
            },
            {
              "kind": "h3",
              "text": "Exemple 3 : Trouver le Petit Côté à Partir de l'Hypoténuse",
            },
            {
              "kind": "p",
              "text": "Étant donné [[c = 20]] cm. Formule : [[a = \\frac{c}{2}]]. Substitution : [[a = \\frac{20}{2}]]. Résultat : [[a = 10]] cm. Diviser l'hypoténuse par deux inverse le doublement de l'exemple 2. Le petit côté vaut exactement la moitié de l'hypoténuse, donc la réponse est exacte.",
            },
            {
              "kind": "h3",
              "text": "Exemple 4 : Trouver le Petit Côté à Partir du Grand Côté",
            },
            {
              "kind": "p",
              "text": "Étant donné [[b = 15]] cm. Formule : [[a = \\frac{b}{\\sqrt{3}}]]. Substitution : [[a = \\frac{15}{\\sqrt{3}}]]. La rationalisation donne [[a = 5\\sqrt{3}]] cm, donc le résultat est [[a \\approx 8.660]] cm. Diviser par √3 ramène le grand côté au petit côté, ce qui est l'inverse de multiplier par √3.",
            },
            {
              "kind": "h3",
              "text": "Exemple 5 : Trouver le Grand Côté à Partir de l'Hypoténuse",
            },
            {
              "kind": "p",
              "text": "Étant donné [[c = 12]] cm. Formule : [[b = \\frac{c\\sqrt{3}}{2}]]. Substitution : [[b = \\frac{12\\sqrt{3}}{2}]]. Résultat : [[b = 6\\sqrt{3} \\approx 10.392]] cm. Le grand côté se situe entre le petit côté, [[a = 6]] cm, et l'hypoténuse, 12 cm, ce qui confirme l'ordre [[a < b < c]].",
            },
            {
              "kind": "h3",
              "text": "Exemple 6 : Calculer l'Aire",
            },
            {
              "kind": "p",
              "text": "Étant donné [[a = 8]] cm. Formule : [[A = \\frac{a^2\\sqrt{3}}{2}]]. Substitution : [[A = \\frac{64\\sqrt{3}}{2}]]. Résultat : [[A = 32\\sqrt{3} \\approx 55.426]] centimètres carrés. La réponse exacte est [[32\\sqrt{3}]] cm², et la valeur décimale est arrondie à trois décimales. L'aire est en unités carrées, contrairement aux longueurs des côtés.",
            },
            {
              "kind": "h3",
              "text": "Exemple 7 : Calculer le Périmètre",
            },
            {
              "kind": "p",
              "text": "Étant donné [[a = 3]] cm. Formule : [[P = a(3 + \\sqrt{3})]]. Substitution : [[P = 3(3 + \\sqrt{3})]]. Résultat : [[P = 9 + 3\\sqrt{3} \\approx 14.196]] cm. Additionner les côtés un par un donne le même résultat : [[3 + 3\\sqrt{3} + 6 = 9 + 3\\sqrt{3}]] cm. Le périmètre est en unités simples, pas en unités carrées.",
            },
            {
              "kind": "h3",
              "text": "Exemple 8 : Mesures Plus Grandes",
            },
            {
              "kind": "p",
              "text": "Étant donné [[a = 10]] m. Formule : [[b = a\\sqrt{3}]] et [[c = 2a]]. Substitution : [[b = 10\\sqrt{3}]] m et [[c = 2 \\times 10]] m. Résultat : [[b \\approx 17.321]] m et [[c = 20]] m. Le rapport fonctionne à n'importe quelle échelle : ce triangle est le triangle de [[a = 5]] cm doublé, donc chaque côté est deux fois plus long et le rapport [[1 : \\sqrt{3} : 2]] est inchangé.",
            },
            {
              "kind": "p",
              "text": "Les réponses exactes et les approximations décimales servent des buts différents. La forme exacte, comme [[4\\sqrt{3}]] cm, est précise et c'est ce que les réponses d'examen exigent généralement. La forme décimale, comme 6.928 cm, est plus facile à imaginer et à mesurer avec une règle. Donnez d'abord la forme exacte, puis la valeur décimale, et arrondissez la valeur décimale seulement à l'étape finale.",
            },
          ],
        },
        "sec-derive-pythagoras": {
          "h2": "Comment Déduire le Rapport du Triangle 30-60-90 avec Pythagore",
          "blocks": [
            {
              "kind": "p",
              "text": "Le rapport découle de Pythagore plus un fait : l'hypoténuse vaut deux fois le petit côté.",
            },
            {
              "kind": "p",
              "text": "Soient [[a]] le petit côté, [[b]] le grand côté et [[c]] l'hypoténuse. D'après la construction du triangle équilatéral, l'hypoténuse vaut deux fois le petit côté :",
            },
            {
              "kind": "p",
              "text": "[[[c = 2a]]]",
            },
            {
              "kind": "p",
              "text": "Appliquez maintenant le théorème de Pythagore, qui vaut pour tout triangle rectangle :",
            },
            {
              "kind": "p",
              "text": "[[[a^2 + b^2 = c^2]]]",
            },
            {
              "kind": "p",
              "text": "Remplacez [[c = 2a]] :",
            },
            {
              "kind": "p",
              "text": "[[[a^2 + b^2 = 4a^2]]]",
            },
            {
              "kind": "p",
              "text": "Réorganisez en soustrayant [[a^2]] des deux membres :",
            },
            {
              "kind": "p",
              "text": "[[[b^2 = 3a^2]]]",
            },
            {
              "kind": "p",
              "text": "Prenez la racine carrée des deux membres. Les longueurs sont positives, donc la racine négative est écartée :",
            },
            {
              "kind": "p",
              "text": "[[[b = a\\sqrt{3}]]]",
            },
            {
              "kind": "p",
              "text": "Les trois côtés sont maintenant [[a]], [[a\\sqrt{3}]] et [[2a]], ce qui donne le rapport [[a : b : c = 1 : \\sqrt{3} : 2]]. Chaque formule de longueur de côté de cette page vient de cette relation fixe : la formule du grand côté la lit directement, la formule de l'hypoténuse est le fait de départ, et les formules d'aire et de périmètre remplacent les deux expressions des côtés. La <a href=\"/pythagorean-theorem-calculator/\">calculatrice du théorème de Pythagore</a> vérifie la même relation pour tout triangle rectangle.",
            },
            {
              "kind": "p",
              "text": "La preuve n'a besoin que de deux ingrédients, et les deux sont faciles à énoncer. Le premier est le fait [[c = 2a]], qui vient du triangle équilatéral. Le second est le théorème de Pythagore, qui vaut pour tout triangle rectangle. Rien d'autre n'est supposé, donc la preuve montre que le rapport est imposé par ces deux faits seuls, et non par un cas particulier ou une coïncidence.",
            },
          ],
        },
        "sec-equilateral": {
          "h2": "Relation Entre les Triangles 30-60-90 et les Triangles Équilatéraux",
          "blocks": [
            {
              "kind": "p",
              "text": "Chaque triangle 30-60-90 est la moitié d'un triangle équilatéral.",
            },
            {
              "kind": "p",
              "text": "Un triangle équilatéral a trois côtés égaux et trois angles égaux de 60°. Tracez une hauteur depuis un sommet jusqu'au côté opposé, et la hauteur partage la base en deux moitiés égales. Elle partage aussi l'angle de 60° au sommet en deux angles de 30°. Le résultat est deux triangles rectangles congruents, chacun avec des angles de 30°, 60° et 90°.",
            },
            {
              "kind": "p",
              "text": "Chaque moitié conserve un côté entier du triangle équilatéral comme hypoténuse, prend la moitié d'un côté comme petit côté et utilise la hauteur comme grand côté. C'est pourquoi l'hypoténuse vaut deux fois le petit côté et pourquoi le grand côté vaut [[a\\sqrt{3}]]. La relation avec √3 apparaît parce que la hauteur d'un triangle équilatéral vaut toujours [[\\frac{\\sqrt{3}}{2}]] fois la longueur du côté, ce qui est le même fait écrit avec d'autres lettres.",
            },
            {
              "kind": "p",
              "text": "Cette construction est utile en géométrie et en trigonométrie parce qu'elle transforme le triangle équilatéral en une source de valeurs exactes. La hauteur d'un triangle équilatéral de côté 10 cm vaut [[5\\sqrt{3} \\approx 8.660]] cm, trouvée en traitant sa moitié comme un triangle 30-60-90 de petit côté 5 cm. La même construction donne les valeurs exactes du sinus, du cosinus et de la tangente pour 30° et 60°, ce qui explique pourquoi ces valeurs figurent dans chaque table de trigonométrie.",
            },
          ],
        },
        "sec-trig": {
          "h2": "Relations Trigonométriques dans un Triangle 30-60-90",
          "blocks": [
            {
              "kind": "p",
              "text": "Le rapport fixe donne des valeurs exactes de sinus, cosinus et tangente pour 30° et 60°.",
            },
            {
              "kind": "p",
              "text": "Les rapports trigonométriques comparent les côtés d'un triangle rectangle. Le sinus est le côté opposé sur l'hypoténuse, le cosinus est le côté adjacent sur l'hypoténuse et la tangente est le côté opposé sur le côté adjacent. Comme les côtés d'un triangle 30-60-90 sont toujours dans le rapport [[1 : \\sqrt{3} : 2]], ces comparaisons donnent toujours les mêmes valeurs, quelle que soit la taille du triangle.",
            },
            {
              "kind": "p",
              "text": "Pour l'angle de 30°, le côté opposé est le petit côté [[a]] et le côté adjacent est le grand côté [[b]], donc [[\\sin 30° = \\frac{a}{2a} = \\frac{1}{2}]], [[\\cos 30° = \\frac{a\\sqrt{3}}{2a} = \\frac{\\sqrt{3}}{2}]] et [[\\tan 30° = \\frac{a}{a\\sqrt{3}} = \\frac{1}{\\sqrt{3}}]]. Pour l'angle de 60°, les côtés opposé et adjacent s'échangent, donc [[\\sin 60° = \\frac{\\sqrt{3}}{2}]], [[\\cos 60° = \\frac{1}{2}]] et [[\\tan 60° = \\sqrt{3}]].",
            },
            {
              "kind": "p",
              "text": "Remarquez la symétrie : [[\\sin 30° = \\cos 60°]] et [[\\cos 30° = \\sin 60°]], parce que les deux angles aigus sont complémentaires et totalisent 90°. Ces valeurs s'accordent exactement avec le rapport fixe des côtés, ce qui est un bon contrôle croisé : si une valeur de sinus ne correspond pas au rapport, l'un des deux est faux. Gardez cette section comme contexte : la calculatrice de cette page trouve les côtés, l'aire et le périmètre, et ne calcule pas les fonctions trigonométriques en tant que mode.",
            },
          ],
          "table": {
            "headers": [
              "Angle",
              "sin",
              "cos",
              "tan",
            ],
            "rows": [
              [
                "30°",
                "1/2",
                "√3/2",
                "1/√3",
              ],
              [
                "60°",
                "√3/2",
                "1/2",
                "√3",
              ],
            ],
          },
        },
        "sec-verify": {
          "h2": "Comment Vérifier Vos Calculs sur le Triangle 30-60-90",
          "blocks": [
            {
              "kind": "p",
              "text": "Quatre vérifications rapides repèrent presque chaque erreur.",
            },
            {
              "kind": "p",
              "text": "Faites au moins une vérification sur chaque réponse, et les quatre quand le problème compte. L'exemple ci-dessous utilise tout au long le triangle avec [[a = 5]] cm, [[b = 5\\sqrt{3} \\approx 8.660]] cm et [[c = 10]] cm.",
            },
            {
              "kind": "h3",
              "text": "Vérification 1 : Rapport des Côtés",
            },
            {
              "kind": "p",
              "text": "Divisez le grand côté par le petit côté et l'hypoténuse par le petit côté : [[\\frac{b}{a} = \\sqrt{3} \\approx 1.732]] et [[\\frac{c}{a} = 2]]. Ici, [[\\frac{8.660}{5} \\approx 1.732]] et [[\\frac{10}{5} = 2]], donc le rapport est vérifié. Si l'une des divisions donne une valeur différente, l'un des côtés est faux.",
            },
            {
              "kind": "h3",
              "text": "Vérification 2 : Théorème de Pythagore",
            },
            {
              "kind": "p",
              "text": "Confirmez [[a^2 + b^2 = c^2]]. Ici, [[5^2 + (5\\sqrt{3})^2 = 25 + 75 = 100 = 10^2]], donc le théorème est vérifié. Cette vérification repère les côtés échangés, parce qu'utiliser la mauvaise valeur pour [[b]] brise l'égalité. La <a href=\"/pythagorean-theorem-calculator/\">calculatrice du théorème de Pythagore</a> effectue cette vérification pour trois longueurs de côté quelconques.",
            },
            {
              "kind": "h3",
              "text": "Vérification 3 : Somme des Angles",
            },
            {
              "kind": "p",
              "text": "Confirmez [[30° + 60° + 90° = 180°]]. Cette vérification porte sur la mise en place du problème plutôt que sur le calcul : si les angles de votre triangle ne totalisent pas 180°, ou s'ils ne mesurent pas 30°, 60° et 90°, les formules du triangle 30-60-90 ne s'appliquent pas du tout, et aucune longueur de côté tirée d'elles ne peut être fiable.",
            },
            {
              "kind": "h3",
              "text": "Vérification 4 : Ordre des Côtés",
            },
            {
              "kind": "p",
              "text": "Confirmez [[a < b < c]]. Ici, [[5 < 8.660 < 10]], donc l'ordre est vérifié. Le petit côté doit être le côté le plus court, le grand côté doit se situer au milieu et l'hypoténuse doit être le côté le plus long. Toute réponse qui brise cet ordre, comme un grand côté plus long que l'hypoténuse, est fausse à première vue.",
            },
          ],
        },
        "sec-properties": {
          "h2": "Propriétés Importantes des Triangles 30-60-90",
          "blocks": [
            {
              "kind": "p",
              "text": "Dix propriétés découlent du rapport fixe.",
            },
            {
              "kind": "list",
              "items": [
                "Le triangle a toujours des angles de 30°, 60° et 90°, et ces angles totalisent toujours 180°.",
                "Le petit côté est opposé à l'angle de 30°, et c'est le côté le plus court du triangle.",
                "Le grand côté est opposé à l'angle de 60°, et il se situe entre le petit côté et l'hypoténuse en longueur.",
                "L'hypoténuse est opposée à l'angle de 90°, et c'est le côté le plus long du triangle.",
                "L'hypoténuse vaut deux fois le petit côté, [[c = 2a]], sans racine carrée.",
                "Le grand côté vaut √3 fois le petit côté, [[b = a\\sqrt{3}]], où [[\\sqrt{3} \\approx 1.732]].",
                "Le rapport des côtés [[1 : \\sqrt{3} : 2]] est indépendant de la taille du triangle, donc agrandir ou réduire le triangle laisse le rapport inchangé.",
                "Tous les triangles 30-60-90 sont semblables, parce qu'ils ont les mêmes trois angles et les mêmes proportions de côtés.",
                "L'aire dépend du carré du petit côté, [[A = \\frac{a^2\\sqrt{3}}{2}]], donc doubler le petit côté quadruple l'aire.",
                "Le périmètre varie directement avec le petit côté, [[P = a(3 + \\sqrt{3})]], donc doubler le petit côté double le périmètre.",
              ],
            },
          ],
        },
        "sec-mistakes": {
          "h2": "Erreurs Fréquentes dans la Résolution des Triangles 30-60-90",
          "blocks": [
            {
              "kind": "p",
              "text": "Quatorze erreurs reviennent sans cesse dans les problèmes de triangles 30-60-90.",
            },
            {
              "kind": "steps",
              "steps": [
                "Confondre le petit et le grand côté : le petit côté est opposé à 30° et le grand côté est opposé à 60°. Identifiez chaque côté par son angle opposé, et non par l'orientation du schéma. Correct : [[a]] opposé à 30°, [[b]] opposé à 60°.",
                "Utiliser √2 au lieu de √3 : √2 appartient au triangle 45-45-90, dont le rapport est [[1 : 1 : \\sqrt{2}]]. Un triangle 30-60-90 utilise toujours √3. Correct : [[b = a\\sqrt{3}]].",
                "Multiplier le petit côté par 2 pour trouver le grand côté : doubler donne l'hypoténuse, pas le grand côté. Pour [[a = 5]] cm, doubler donne 10 cm, ce qui est [[c]], tandis que le grand côté vaut [[5\\sqrt{3} \\approx 8.660]] cm. Correct : [[b = a\\sqrt{3}]].",
                "Utiliser [[a\\sqrt{3}]] comme hypoténuse : l'hypoténuse vaut [[2a]], et non [[a\\sqrt{3}]]. Pour [[a = 5]] cm, [[a\\sqrt{3} \\approx 8.660]] cm est le grand côté, et l'hypoténuse vaut 10 cm. Correct : [[c = 2a]].",
                "Oublier que l'hypoténuse vaut [[2a]] : les élèves appliquent parfois Pythagore pour trouver l'hypoténuse alors que doubler suffirait. Doubler est plus rapide et exact. Correct : [[c = 2a]].",
                "Diviser par 2 au lieu de √3 pour trouver le petit côté à partir du grand côté : diviser [[b]] par 2 donne [[\\frac{b}{2}]], ce qui n'est pas le petit côté. Pour [[b = 12]] cm, diviser par 2 donne 6 cm, tandis que le petit côté correct vaut [[4\\sqrt{3} \\approx 6.928]] cm. Correct : [[a = \\frac{b}{\\sqrt{3}}]].",
                "Oublier de diviser par deux dans le calcul de l'aire : l'aire est la moitié du produit des côtés. Utiliser [[A = ab]] double la vraie aire. Pour [[a = 6]] cm, [[ab = 36\\sqrt{3}]] cm² vaut deux fois la valeur correcte de [[18\\sqrt{3}]] cm². Correct : [[A = \\frac{ab}{2}]].",
                "N'additionner que deux côtés dans le calcul du périmètre : le périmètre a besoin des trois côtés. Additionner seulement les deux côtés pour [[a = 5]] cm donne [[5 + 5\\sqrt{3} \\approx 13.660]] cm, tandis que le vrai périmètre est d'environ 23.660 cm. Correct : [[P = a + b + c]].",
                "Confondre les réponses exactes et les approximations décimales : [[5\\sqrt{3}]] cm est exact, tandis que 8.660 cm est arrondi. Écrire 8.660 cm comme si c'était exact fait perdre la précision que le radical conserve. Correct : donnez d'abord la forme exacte, puis la valeur décimale.",
                "Arrondir √3 trop tôt : utiliser 1.73 pour √3 au milieu d'un calcul décale chaque étape suivante. Pour [[a = 5]] cm, [[5 \\times 1.73 = 8.65]] cm au lieu de 8.660 cm. Correct : gardez √3 exact tout au long du raisonnement et arrondissez seulement la réponse finale.",
                "Mélanger les unités de mesure : un petit côté en centimètres et une hypoténuse en mètres ne peuvent pas être combinés directement. Convertissez chaque mesure dans une même unité avant de calculer. Correct : 0.5 m vaut 50 cm, puis calculez en centimètres.",
                "Appliquer les formules à un triangle aux angles différents : les formules [[b = a\\sqrt{3}]] et [[c = 2a]] ne valent que lorsque les angles mesurent 30°, 60° et 90°. Un triangle rectangle aux angles de 40° et 50° a un rapport différent. Correct : confirmez d'abord les angles, puis utilisez les formules.",
                "Confondre les côtés opposés aux angles de 30 degrés et de 60 degrés : le côté opposé à 30° est le petit côté et le côté opposé à 60° est le grand côté, jamais l'inverse. Les échanger rend le grand côté plus court que le petit côté, ce qui est impossible. Correct : [[a]] opposé à 30°, [[b]] opposé à 60°.",
                "Oublier que l'aire exige des unités carrées : une aire de 31.177 cm est fausse par l'unité, même si le nombre est juste. L'aire mesure une surface, donc elle vaut 31.177 centimètres carrés. Correct : [[A = 18\\sqrt{3} \\approx 31.177]] cm².",
              ],
            },
          ],
        },
        "sec-applications": {
          "h2": "Applications Pratiques des Triangles 30-60-90",
          "blocks": [
            {
              "kind": "p",
              "text": "Le rapport apparaît partout où un angle de 30° ou 60° rencontre un angle droit.",
            },
            {
              "kind": "p",
              "text": "L'usage le plus courant est celui des devoirs de géométrie et des exercices de trigonométrie, où les problèmes de triangles 30-60-90 vérifient si les élèves savent identifier le petit côté, appliquer le rapport et conserver des réponses radicales exactes. Les calculs de hauteur de triangle équilatéral utilisent la même idée en sens inverse : la hauteur d'un triangle équilatéral est le grand côté du triangle 30-60-90 formé en le coupant en deux, donc un côté de 10 cm donne une hauteur de [[5\\sqrt{3} \\approx 8.660]] cm.",
            },
            {
              "kind": "p",
              "text": "Le dessin technique, l'architecture et la géométrie de construction utilisent les relations du triangle 30-60-90 quand un plan exige un angle de 30° ou 60°, comme une pente de toit, une rampe ou un contreventement diagonal. Un constructeur qui connaît un côté d'un tel triangle peut trouver les autres sans les mesurer directement. Les démonstrations en classe utilisent le triangle pour montrer comment un rapport fixe transforme une mesure en une description complète d'une forme.",
            },
            {
              "kind": "p",
              "text": "La modélisation mathématique utilise le rapport partout où les relations de diagonale et de hauteur dans les formes géométriques exigent des valeurs exactes, par exemple dans les motifs hexagonaux, où les angles de 60° d'un hexagone régulier créent des triangles 30-60-90 à l'intérieur de la forme. Ce sont des usages réalistes de la géométrie elle-même, et non des affirmations sur les tolérances d'ingénierie : le vrai travail de conception ajoute des limites de matériaux et des marges de sécurité au-delà des valeurs géométriques exactes de cette page.",
            },
          ],
        },
        "sec-practice": {
          "h2": "Exercices avec Réponses",
          "blocks": [
            {
              "kind": "p",
              "text": "Faites les six exercices sur papier avant de lire les réponses.",
            },
            {
              "kind": "h3",
              "text": "Exercice 1 : Trouver le Grand Côté à Partir du Petit Côté",
            },
            {
              "kind": "p",
              "text": "Un triangle 30-60-90 a un petit côté de [[a = 6]] cm. Trouvez le grand côté [[b]].",
            },
            {
              "kind": "h3",
              "text": "Exercice 2 : Trouver l'Hypoténuse à Partir du Petit Côté",
            },
            {
              "kind": "p",
              "text": "Un triangle 30-60-90 a un petit côté de [[a = 11]] cm. Trouvez l'hypoténuse [[c]].",
            },
            {
              "kind": "h3",
              "text": "Exercice 3 : Trouver le Petit Côté à Partir de l'Hypoténuse",
            },
            {
              "kind": "p",
              "text": "Un triangle 30-60-90 a une hypoténuse de [[c = 24]] cm. Trouvez le petit côté [[a]].",
            },
            {
              "kind": "h3",
              "text": "Exercice 4 : Trouver le Grand Côté à Partir de l'Hypoténuse",
            },
            {
              "kind": "p",
              "text": "Un triangle 30-60-90 a une hypoténuse de [[c = 14]] cm. Trouvez le grand côté [[b]].",
            },
            {
              "kind": "h3",
              "text": "Exercice 5 : Calculer l'Aire à Partir du Petit Côté",
            },
            {
              "kind": "p",
              "text": "Un triangle 30-60-90 a un petit côté de [[a = 9]] cm. Trouvez l'aire [[A]].",
            },
            {
              "kind": "h3",
              "text": "Exercice 6 : Calculer le Périmètre à Partir du Petit Côté",
            },
            {
              "kind": "p",
              "text": "Un triangle 30-60-90 a un petit côté de [[a = 7]] cm. Trouvez le périmètre [[P]].",
            },
            {
              "kind": "h3",
              "text": "Réponses des Exercices",
            },
            {
              "kind": "p",
              "text": "Réponse 1 : [[b = a\\sqrt{3} = 6\\sqrt{3} \\approx 10.392]] cm. La réponse exacte est [[6\\sqrt{3}]] cm.",
            },
            {
              "kind": "p",
              "text": "Réponse 2 : [[c = 2a = 2 \\times 11 = 22]] cm. L'hypoténuse vaut exactement deux fois le petit côté.",
            },
            {
              "kind": "p",
              "text": "Réponse 3 : [[a = \\frac{c}{2} = \\frac{24}{2} = 12]] cm. Le petit côté vaut exactement la moitié de l'hypoténuse.",
            },
            {
              "kind": "p",
              "text": "Réponse 4 : [[b = \\frac{c\\sqrt{3}}{2} = \\frac{14\\sqrt{3}}{2} = 7\\sqrt{3} \\approx 12.124]] cm. Vérifiez l'ordre : le petit côté mesure 7 cm, le grand côté environ 12.124 cm et l'hypoténuse 14 cm.",
            },
            {
              "kind": "p",
              "text": "Réponse 5 : [[A = \\frac{a^2\\sqrt{3}}{2} = \\frac{81\\sqrt{3}}{2} \\approx 70.148]] centimètres carrés. La réponse exacte est [[\\frac{81\\sqrt{3}}{2}]] cm².",
            },
            {
              "kind": "p",
              "text": "Réponse 6 : [[P = a(3 + \\sqrt{3}) = 7(3 + \\sqrt{3}) \\approx 33.124]] cm. Additionner les côtés un par un donne le même résultat : [[7 + 7\\sqrt{3} + 14 = 21 + 7\\sqrt{3} \\approx 33.124]] cm.",
            },
          ],
        },
      },
      "relatedHeading": "Calculatrices de Triangle Rectangle Associées",
      "relatedIntro": "Chaque calculatrice ci-dessous traite une tâche différente du triangle rectangle, donc choisissez l'outil qui correspond à la mesure dont vous avez besoin.",
      "relatedItems": [
        "Calculatrice de Triangle Spécial",
        "Calculatrice de Triangle 45-45-90",
        "Calculatrice de Côté de Triangle Rectangle",
        "Calculatrice d'Aire de Triangle Rectangle",
        "Calculatrice de Périmètre de Triangle Rectangle",
        "Calculatrice du Théorème de Pythagore",
      ],
      "faqHeading": "Questions Fréquentes",
      "faqs": [
        {
          "question": "Qu'est-ce qu'un triangle 30-60-90 ?",
          "answer": "Un triangle 30-60-90 est un triangle rectangle aux angles de 30°, 60° et 90°. On l'appelle un triangle rectangle spécial parce que ses côtés suivent toujours le rapport fixe [[1 : \\sqrt{3} : 2]]. Connaître un côté suffit pour trouver tous les autres, ce qui explique pourquoi la calculatrice n'a besoin que d'une seule valeur.",
        },
        {
          "question": "Quel est le rapport des côtés d'un triangle 30-60-90 ?",
          "answer": "Le rapport des côtés est [[a : b : c = 1 : \\sqrt{3} : 2]], où [[a]] est le petit côté, [[b]] est le grand côté et [[c]] est l'hypoténuse. Cela signifie [[b = a\\sqrt{3}]] et [[c = 2a]]. Le rapport est le même pour chaque triangle 30-60-90, quelle que soit sa taille.",
        },
        {
          "question": "Pourquoi le grand côté est-il multiplié par √3 ?",
          "answer": "Le grand côté est la hauteur du triangle équilatéral qui engendre un triangle 30-60-90. Couper un triangle équilatéral de côté [[2a]] en deux donne [[b^2 = (2a)^2 - a^2 = 3a^2]], donc [[b = a\\sqrt{3}]]. Le √3 vient du théorème de Pythagore appliqué à cette construction.",
        },
        {
          "question": "Comment trouver l'hypoténuse à partir du petit côté ?",
          "answer": "Doublez le petit côté : [[c = 2a]]. Si [[a = 7]] cm, alors [[c = 2 \\times 7 = 14]] cm. L'hypoténuse vaut toujours exactement deux fois le petit côté dans un triangle 30-60-90, parce qu'elle est un côté entier du triangle équilatéral alors que le petit côté est la moitié d'un côté.",
        },
        {
          "question": "Comment trouver le petit côté à partir de l'hypoténuse ?",
          "answer": "Divisez l'hypoténuse par deux : [[a = \\frac{c}{2}]]. Si [[c = 18]] cm, alors [[a = \\frac{18}{2} = 9]] cm. C'est l'inverse du doublement du petit côté pour trouver l'hypoténuse, et cela ne fonctionne que pour les triangles 30-60-90, où l'hypoténuse vaut toujours deux fois le petit côté.",
        },
        {
          "question": "Comment calculer le grand côté à partir de l'hypoténuse ?",
          "answer": "Utilisez [[b = \\frac{c\\sqrt{3}}{2}]]. Divisez d'abord l'hypoténuse par deux pour obtenir le petit côté, puis multipliez par √3. Si [[c = 16]] cm, alors [[b = 8\\sqrt{3} \\approx 13.856]] cm. Le grand côté se situe entre le petit côté et l'hypoténuse en longueur.",
        },
        {
          "question": "Comment trouver le petit côté à partir du grand côté ?",
          "answer": "Divisez le grand côté par √3 : [[a = \\frac{b}{\\sqrt{3}}]]. Si [[b = 12]] cm, alors [[a = \\frac{12}{\\sqrt{3}} = 4\\sqrt{3} \\approx 6.928]] cm. Diviser par √3 inverse la multiplication utilisée pour trouver le grand côté à partir du petit côté.",
        },
        {
          "question": "Comment calculer l'aire d'un triangle 30-60-90 ?",
          "answer": "Utilisez [[A = \\frac{a^2\\sqrt{3}}{2}]], où [[a]] est le petit côté. Si [[a = 6]] cm, alors [[A = 18\\sqrt{3} \\approx 31.177]] centimètres carrés. La formule est la moitié du produit des deux côtés, avec le grand côté remplacé par [[a\\sqrt{3}]]. L'aire est toujours en unités carrées.",
        },
        {
          "question": "Comment calculer le périmètre d'un triangle 30-60-90 ?",
          "answer": "Utilisez [[P = a(3 + \\sqrt{3})]], où [[a]] est le petit côté. Si [[a = 5]] cm, alors [[P = 5(3 + \\sqrt{3}) \\approx 23.660]] cm. La formule additionne les trois côtés, [[a + a\\sqrt{3} + 2a]], et met [[a]] en facteur. Le périmètre est en unités simples, pas en unités carrées.",
        },
        {
          "question": "Un triangle 30-60-90 peut-il avoir des côtés décimaux ?",
          "answer": "Oui. Le rapport fonctionne pour toute longueur positive, entière ou décimale. Si [[a = 2.5]] cm, alors [[b = 2.5\\sqrt{3} \\approx 4.330]] cm et [[c = 5]] cm. Les décimales ne changent rien à la méthode : multipliez par √3 pour le grand côté et doublez pour l'hypoténuse, puis arrondissez seulement la réponse finale.",
        },
        {
          "question": "Tous les triangles 30-60-90 sont-ils semblables ?",
          "answer": "Oui. Tous les triangles 30-60-90 ont les mêmes trois angles, 30°, 60° et 90°, et le même rapport des côtés, [[1 : \\sqrt{3} : 2]]. Les mêmes angles et les mêmes proportions signifient que les triangles sont semblables, donc ils ne diffèrent que par leur taille. Agrandir ou réduire l'un d'eux donne un autre triangle 30-60-90.",
        },
        {
          "question": "Comment vérifier si mes mesures de triangle sont correctes ?",
          "answer": "Vérifiez le rapport, [[\\frac{b}{a} = \\sqrt{3}]] et [[\\frac{c}{a} = 2]], puis confirmez [[a^2 + b^2 = c^2]] avec le théorème de Pythagore, et confirmez [[a < b < c]]. Pour [[a = 5]] cm, [[b \\approx 8.660]] cm et [[c = 10]] cm, les quatre vérifications sont réussies. Si l'une des vérifications échoue, refaites le calcul.",
        },
      ],
    },
};
