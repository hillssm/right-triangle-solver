// fiveTwelveThirteenGuideTranslations.bfr.ts: 5-12-13 Triangle
// Guide (Page 43 of 45) translation.
export const FIVETWELVETHIRTEEN_B2_FR = {
  "fr": {
      "meta": {
        "title": "Calculateur de Triangle 5-12-13 : côtés, aire et périmètre à l'échelle",
        "description": "Mettez un triangle 5-12-13 à l'échelle : entrez un facteur d'échelle positif k pour trouver les côtés 5k, 12k et 13k, ainsi que l'aire 30k au carré et le périmètre 30k.",
        "primaryKeyword": "Calculateur de Triangle 5-12-13",
        "slug": "5-12-13-triangle-calculator",
      },
      "tocHeading": "Navigation des sections",
      "tocItems": {
        "sec-intro": "Calculateur de Triangle 5-12-13",
        "sec-calculate": "Mettre un triangle 5-12-13 à l'échelle et calculer ses mesures",
        "sec-what": "Qu'est-ce qu'un triangle 5-12-13 ?",
        "sec-pythagorean": "Pourquoi 5-12-13 est-il un triplet pythagoricien ?",
        "sec-sides": "Comprendre les trois côtés d'un triangle 5-12-13",
        "sec-ratio": "Comprendre le rapport des côtés 5-12-13",
        "sec-scale-factor": "Qu'est-ce que le facteur d'échelle dans un triangle 5-12-13 ?",
        "sec-leg-a": "Formule pour calculer le petit côté de l'angle droit",
        "sec-leg-b": "Formule pour calculer le grand côté de l'angle droit",
        "sec-hypotenuse": "Formule pour calculer l'hypoténuse",
        "sec-area": "Comment calculer l'aire d'un triangle 5-12-13 mis à l'échelle",
        "sec-perimeter": "Comment calculer le périmètre d'un triangle 5-12-13 mis à l'échelle",
        "sec-find-k": "Comment trouver le facteur d'échelle à partir d'un côté connu",
        "sec-step-example": "Exemple pas à pas de mise à l'échelle d'un triangle 5-12-13",
        "sec-examples": "Exemples résolus avec différents facteurs d'échelle",
        "sec-right-angle": "Pourquoi le triangle 5-12-13 garde-t-il toujours un angle de 90 degrés ?",
        "sec-euclid": "Comment le triplet 5-12-13 est-il généré avec la formule d'Euclide ?",
        "sec-applications": "Applications du triangle 5-12-13 en géométrie et en mesure",
        "sec-vs-triples": "Différence entre 5-12-13 et les autres triplets pythagoriciens",
        "sec-vs-special": "Différence entre les triangles 5-12-13, 45-45-90 et 30-60-90",
        "sec-mistakes": "Erreurs fréquentes avec le calculateur de triangle 5-12-13",
        "sec-verify": "Comment vérifier un triangle 5-12-13 mis à l'échelle",
        "sec-practice": "Exercices avec réponses",
        "sec-related": "Calculateurs de triangle rectangle associés",
        "sec-faq": "Questions fréquentes",
      },
      "sections": {
        "sec-intro": {
          "h2": "Calculateur de Triangle 5-12-13",
          "blocks": [
            {
              "kind": "p",
              "text": "Mettez un triangle 5-12-13 à l'échelle et trouvez ses côtés, son aire et son périmètre.",
            },
            {
              "kind": "p",
              "text": "Un triangle 5-12-13 est un triangle rectangle dont les côtés suivent le rapport [[5 : 12 : 13]]. C'est un triplet pythagoricien, car ses côtés entiers vérifient le théorème de Pythagore : [[5^2 + 12^2 = 13^2]], puisque [[25 + 144 = 169]]. Le côté de longueur 13 est l'hypoténuse, et les côtés de longueur 5 et 12 sont les côtés de l'angle droit qui se rencontrent à l'angle droit.",
            },
            {
              "kind": "p",
              "text": "Le calculateur met ce triangle à l'échelle avec un facteur d'échelle positif [[k]], de sorte que les côtés mis à l'échelle sont [[a = 5k]], [[b = 12k]] et [[c = 13k]]. Il calcule aussi l'aire, [[A = 30k^2]], et le périmètre, [[P = 30k]], donc une seule entrée donne les cinq résultats. Utilisez le <a href=\"/right-triangle-calculator/\">calculateur de triangle rectangle</a> pour un triangle rectangle général.",
            },
            {
              "kind": "p",
              "text": "Par exemple, avec [[k = 2]] les côtés deviennent [[a = 10]], [[b = 24]] et [[c = 26]], l'aire est [[A = 120]] unités carrées et le périmètre est [[P = 60]] unités.",
            },
          ],
        },
        "sec-calculate": {
          "h2": "Mettre un triangle 5-12-13 à l'échelle et calculer ses mesures",
          "blocks": [
            {
              "kind": "p",
              "text": "Une seule entrée, cinq résultats : entrez k et lisez les mesures du triangle mis à l'échelle.",
            },
            {
              "kind": "p",
              "text": "Le calculateur a un seul mode, Mettre le triangle 5-12-13 à l'échelle. Entrez un facteur d'échelle positif [[k]] dans la case de saisie et appuyez sur Calculer. L'outil multiplie 5, 12 et 13 par [[k]], puis calcule l'aire et le périmètre à partir des côtés mis à l'échelle. Appuyez sur Réinitialiser pour effacer la saisie et recommencer.",
            },
            {
              "kind": "p",
              "text": "Le facteur d'échelle est le nombre qui agrandit ou réduit le triangle d'origine. Avec [[k = 1]] vous obtenez le triangle d'origine 5, 12, 13. Avec [[k]] supérieur à 1 le triangle grandit, et avec [[k]] entre 0 et 1 il rétrécit, mais la forme ne change jamais.",
            },
            {
              "kind": "p",
              "text": "Tous les résultats proviennent du même [[k]], donc les cinq sorties s'accordent toujours entre elles. Si [[k]] est nul ou négatif, le calculateur ne l'acceptera pas, car zéro donne une figure dégénérée et les valeurs négatives ne peuvent pas décrire des longueurs de côtés.",
            },
          ],
          "table": {
            "headers": [
              "Mesure",
              "Formule",
              "Résultat",
            ],
            "rows": [
              [
                "Petit côté de l'angle droit",
                "5k",
                "Côté a mis à l'échelle",
              ],
              [
                "Grand côté de l'angle droit",
                "12k",
                "Côté b mis à l'échelle",
              ],
              [
                "Hypoténuse",
                "13k",
                "Côté c mis à l'échelle",
              ],
              [
                "Aire",
                "30k²",
                "Aire du triangle",
              ],
              [
                "Périmètre",
                "30k",
                "Périmètre du triangle",
              ],
            ],
          },
        },
        "sec-what": {
          "h2": "Qu'est-ce qu'un triangle 5-12-13 ?",
          "blocks": [
            {
              "kind": "p",
              "text": "Un triangle rectangle dont les côtés entiers sont dans le rapport 5:12:13.",
            },
            {
              "kind": "p",
              "text": "Un triangle 5-12-13 est un triangle rectangle dont les trois côtés mesurent 5, 12 et 13 unités, ou n'importe quel ensemble de longueurs dans la même proportion. Le côté le plus long, 13, est l'hypoténuse et se trouve en face de l'angle de 90 degrés. Les côtés de longueur 5 et 12 sont les côtés de l'angle droit, et ils se rencontrent à l'angle droit.",
            },
            {
              "kind": "p",
              "text": "On l'appelle un triplet pythagoricien parce que les trois nombres entiers vérifient [[5^2 + 12^2 = 13^2]]. Cette seule vérification fait du triangle un triangle rectangle, et non un dessin ou une mesure. Si l'on met les côtés à l'échelle avec n'importe quel facteur positif, le rapport reste 5:12:13, donc le triangle agrandi ou réduit reste un triangle rectangle de même forme.",
            },
          ],
          "image": {
            "src": "five-twelve-thirteen-main.svg",
            "alt": "Triangle rectangle 5-12-13 ABC étiqueté avec le petit côté de l'angle droit a égal à 5, le grand côté de l'angle droit b égal à 12, l'hypoténuse c égale à 13 et un marqueur d'angle droit",
            "caption": "Triangle ABC : les côtés a = 5 et b = 12 se rencontrent à l'angle droit, et l'hypoténuse est c = 13.",
          },
        },
        "sec-pythagorean": {
          "h2": "Pourquoi 5-12-13 est-il un triplet pythagoricien ?",
          "blocks": [
            {
              "kind": "p",
              "text": "Les carrés des côtés de l'angle droit s'additionnent pour donner le carré de l'hypoténuse.",
            },
            {
              "kind": "p",
              "text": "[[[a^2 + b^2 = c^2]]]",
            },
            {
              "kind": "p",
              "text": "[[[5^2 + 12^2 = 13^2]]]",
            },
            {
              "kind": "p",
              "text": "[[[25 + 144 = 169]]]",
            },
            {
              "kind": "p",
              "text": "[[[169 = 169]]]",
            },
            {
              "kind": "p",
              "text": "Les deux côtés sont égaux, donc l'équation est vérifiée exactement. C'est le théorème de Pythagore en action : quand les carrés des deux côtés les plus courts s'additionnent pour donner le carré du côté le plus long, l'angle en face du côté le plus long doit être un angle droit.",
            },
            {
              "kind": "p",
              "text": "Le nombre 13 doit être l'hypoténuse parce que c'est le côté le plus long, et l'hypoténuse se trouve toujours en face de l'angle de 90 degrés. Les nombres 5 et 12 sont les côtés de l'angle droit. Comme 5, 12 et 13 sont des nombres entiers, le triplet est pratique pour les devoirs, les contrôles et les travaux de mesure où les réponses exactes comptent.",
            },
            {
              "kind": "p",
              "text": "Cette vérification est la réciproque du théorème de Pythagore : le théorème dit qu'un triangle rectangle vérifie [[a^2 + b^2 = c^2]], et la réciproque dit que tout triangle dont les côtés vérifient l'équation doit contenir un angle droit. La plupart des triangles rectangles n'ont pas tous des côtés entiers, et c'est ce qui rend un triplet spécial.",
            },
          ],
          "image": {
            "src": "five-twelve-thirteen-pythagoras.svg",
            "alt": "Schéma du théorème de Pythagore pour un triangle 5-12-13 montrant que 25 plus 144 égale 169",
            "caption": "25 + 144 = 169, donc l'angle en face de 13 mesure 90 degrés.",
          },
        },
        "sec-sides": {
          "h2": "Comprendre les trois côtés d'un triangle 5-12-13",
          "blocks": [
            {
              "kind": "p",
              "text": "Trois côtés, trois rôles : deux côtés de l'angle droit et une hypoténuse.",
            },
            {
              "kind": "p",
              "text": "Le petit côté de l'angle droit [[a]] mesure 5 dans le triangle de base. Il se trouve en face du plus petit angle aigu, environ 22.62 degrés, et c'est le côté que la plupart des élèves repèrent en premier parce que c'est le plus court des trois.",
            },
            {
              "kind": "p",
              "text": "Le grand côté de l'angle droit [[b]] mesure 12 dans le triangle de base. Il se trouve en face du plus grand angle aigu, environ 67.38 degrés. L'hypoténuse [[c]] mesure 13, le côté le plus long, et elle se trouve en face de l'angle de 90 degrés. Quand le triangle est mis à l'échelle par [[k]], les étiquettes restent dans le même ordre : [[a = 5k]], [[b = 12k]] et [[c = 13k]].",
            },
          ],
          "table": {
            "headers": [
              "Côté",
              "Longueur dans le triangle de base",
              "Position",
            ],
            "rows": [
              [
                "Petit côté de l'angle droit a",
                "5",
                "En face de l'angle de 22.62°",
              ],
              [
                "Grand côté de l'angle droit b",
                "12",
                "En face de l'angle de 67.38°",
              ],
              [
                "Hypoténuse c",
                "13",
                "En face de l'angle de 90°",
              ],
            ],
          },
        },
        "sec-ratio": {
          "h2": "Comprendre le rapport des côtés 5-12-13",
          "blocks": [
            {
              "kind": "p",
              "text": "Le rapport 5:12:13 ne change jamais, quelle que soit la taille du triangle.",
            },
            {
              "kind": "p",
              "text": "[[[5 : 12 : 13]]]",
            },
            {
              "kind": "p",
              "text": "Le petit côté de l'angle droit représente 5 unités proportionnelles, le grand côté de l'angle droit 12, et l'hypoténuse 13.",
            },
            {
              "kind": "p",
              "text": "La mise à l'échelle multiplie chaque partie par le même [[k]], donc le rapport devient [[[5k : 12k : 13k]]] avec la même forme en dessous. Les ensembles 5, 12, 13 ; 10, 24, 26 ; 15, 36, 39 ; 20, 48, 52 ; et 25, 60, 65 décrivent tous le même triangle à différentes tailles, car chaque ensemble est le rapport de base multiplié par 1, 2, 3, 4 et 5.",
            },
            {
              "kind": "p",
              "text": "C'est pourquoi le rapport est la véritable identité du triangle. Deux triangles avec le même rapport sont semblables : mêmes angles, même forme, taille différente.",
            },
            {
              "kind": "p",
              "text": "Pour tester un ensemble de mesures, divisez les trois nombres par leur plus grand commun diviseur et voyez s'il reste 5, 12, 13. Pour 10, 24, 26 le diviseur est 2, et la division donne 5, 12, 13. Pour 15, 36, 39 le diviseur est 3, et la division donne le même triplet. Si la division laisse trois autres nombres, l'ensemble n'est pas un triangle 5-12-13.",
            },
          ],
          "image": {
            "src": "five-twelve-thirteen-scaled.svg",
            "alt": "Trois triangles semblables étiquetés 5-12-13, 10-24-26 et 15-36-39 à des tailles croissantes",
            "caption": "Mêmes proportions, mêmes angles : k = 1, k = 2 et k = 3.",
          },
        },
        "sec-scale-factor": {
          "h2": "Qu'est-ce que le facteur d'échelle dans un triangle 5-12-13 ?",
          "blocks": [
            {
              "kind": "p",
              "text": "k est le multiplicateur qui fixe la taille du triangle.",
            },
            {
              "kind": "p",
              "text": "[[[a = 5k,\\quad b = 12k,\\quad c = 13k]]]",
            },
            {
              "kind": "p",
              "text": "Un facteur d'échelle multiplie les trois longueurs d'origine par le même nombre positif.",
            },
            {
              "kind": "p",
              "text": "Avec [[k = 1]] vous obtenez le triangle d'origine. Avec [[k]] supérieur à 1 le triangle grandit, et avec [[k]] entre 0 et 1 il rétrécit. Le facteur d'échelle change la taille, pas la forme : chaque angle reste le même et chaque côté reste en proportion.",
            },
            {
              "kind": "p",
              "text": "Le même facteur doit être appliqué aux trois côtés. Mettre à l'échelle seulement un ou deux côtés brise le rapport, brise la vérification de Pythagore, et le résultat n'est plus un triangle 5-12-13.",
            },
            {
              "kind": "p",
              "text": "Un facteur d'échelle peut aussi se lire comme un rapport de côtés correspondants : divisez un côté du nouveau triangle par le côté correspondant du triangle d'origine, et la réponse est [[k]]. Par exemple, un grand côté de l'angle droit de 36 face à l'original de 12 donne [[k = 36 / 12 = 3]]. C'est le même [[k]] que demande le calculateur, trouvé à partir d'une mesure au lieu d'être choisi à l'avance.",
            },
          ],
          "table": {
            "headers": [
              "Facteur d'échelle",
              "Effet",
              "Exemples de côtés",
            ],
            "rows": [
              [
                "k = 1",
                "Triangle d'origine",
                "5, 12, 13",
              ],
              [
                "k = 2",
                "Doublé",
                "10, 24, 26",
              ],
              [
                "k = 0.5",
                "Réduit de moitié",
                "2.5, 6, 6.5",
              ],
              [
                "k = 10",
                "Dix fois plus grand",
                "50, 120, 130",
              ],
            ],
          },
          "image": {
            "src": "five-twelve-thirteen-scale-factor.svg",
            "alt": "Triangle 5-12-13 mis à l'échelle avec k égal à 2, montrant les côtés a égal à 10, b égal à 24 et c égal à 26",
            "caption": "Avec k = 2, les côtés deviennent 10, 24 et 26.",
          },
        },
        "sec-leg-a": {
          "h2": "Formule pour calculer le petit côté de l'angle droit",
          "blocks": [
            {
              "kind": "p",
              "text": "Le petit côté de l'angle droit vaut cinq fois le facteur d'échelle.",
            },
            {
              "kind": "p",
              "text": "[[[a = 5k]]]",
            },
            {
              "kind": "p",
              "text": "Utilisez [[k = 4]] : [[[a = 5 \\times 4 = 20]]]",
            },
            {
              "kind": "p",
              "text": "Le petit côté de l'angle droit mesure 20 unités. C'est le plus petit côté à chaque facteur d'échelle, car 5 est le plus petit nombre du rapport.",
            },
          ],
        },
        "sec-leg-b": {
          "h2": "Formule pour calculer le grand côté de l'angle droit",
          "blocks": [
            {
              "kind": "p",
              "text": "Le grand côté de l'angle droit vaut douze fois le facteur d'échelle.",
            },
            {
              "kind": "p",
              "text": "[[[b = 12k]]]",
            },
            {
              "kind": "p",
              "text": "Utilisez [[k = 4]] : [[[b = 12 \\times 4 = 48]]]",
            },
            {
              "kind": "p",
              "text": "Le grand côté de l'angle droit mesure 48 unités. Il est plus long que le petit côté de l'angle droit parce que 12 est plus grand que 5, mais il reste plus court que l'hypoténuse à chaque facteur d'échelle positif.",
            },
          ],
        },
        "sec-hypotenuse": {
          "h2": "Formule pour calculer l'hypoténuse",
          "blocks": [
            {
              "kind": "p",
              "text": "L'hypoténuse vaut treize fois le facteur d'échelle.",
            },
            {
              "kind": "p",
              "text": "[[[c = 13k]]]",
            },
            {
              "kind": "p",
              "text": "Utilisez [[k = 4]] : [[[c = 13 \\times 4 = 52]]]",
            },
            {
              "kind": "p",
              "text": "L'hypoténuse mesure 52 unités. Elle reste le côté le plus long à chaque facteur d'échelle positif, car 13 est le plus grand nombre du rapport et l'hypoténuse se trouve toujours en face de l'angle droit.",
            },
          ],
        },
        "sec-area": {
          "h2": "Comment calculer l'aire d'un triangle 5-12-13 mis à l'échelle",
          "blocks": [
            {
              "kind": "p",
              "text": "La moitié du produit des deux côtés de l'angle droit donne l'aire.",
            },
            {
              "kind": "p",
              "text": "[[[A = \\frac{ab}{2}]]]",
            },
            {
              "kind": "p",
              "text": "Remplacez les côtés mis à l'échelle : [[[A = \\frac{(5k)(12k)}{2}]]]",
            },
            {
              "kind": "p",
              "text": "Simplifiez : [[[A = \\frac{60k^2}{2}]]]",
            },
            {
              "kind": "p",
              "text": "[[[\\boxed{A = 30k^2}]]]",
            },
            {
              "kind": "p",
              "text": "Les deux côtés de l'angle droit sont la base et la hauteur, car ils se rencontrent à l'angle droit. La moitié de leur produit donne l'aire du triangle. Le facteur d'échelle est au carré, donc doubler [[k]] rend l'aire quatre fois plus grande. L'aire se mesure en unités carrées.",
            },
            {
              "kind": "p",
              "text": "Utilisez [[k = 3]] : [[[A = 30(3^2) = 270]]] unités carrées.",
            },
            {
              "kind": "p",
              "text": "L'hypoténuse n'entre jamais dans la formule de l'aire, car l'aire d'un triangle rectangle provient de ses deux côtés de l'angle droit. Pour vérifier avec [[k = 2]], les côtés de l'angle droit sont 10 et 24, donc [[A = (10 \\times 24) / 2 = 120]] unités carrées, ce qui correspond à [[A = 30(2^2) = 120]].",
            },
          ],
          "image": {
            "src": "five-twelve-thirteen-area.svg",
            "alt": "Schéma de l'aire d'un triangle 5-12-13 mis à l'échelle avec une base de 5k, une hauteur de 12k et une aire de 30k au carré",
            "caption": "Avec k = 2, l'aire est de 120 unités carrées.",
          },
        },
        "sec-perimeter": {
          "h2": "Comment calculer le périmètre d'un triangle 5-12-13 mis à l'échelle",
          "blocks": [
            {
              "kind": "p",
              "text": "Additionnez les trois côtés mis à l'échelle pour obtenir le périmètre.",
            },
            {
              "kind": "p",
              "text": "[[[P = a + b + c]]]",
            },
            {
              "kind": "p",
              "text": "Remplacez : [[[P = 5k + 12k + 13k]]]",
            },
            {
              "kind": "p",
              "text": "[[[\\boxed{P = 30k}]]]",
            },
            {
              "kind": "p",
              "text": "Chaque côté compte, donc additionnez les trois. Le périmètre croît en proportion directe de [[k]] : doubler le facteur d'échelle double le périmètre. Le périmètre se mesure en unités linéaires, et non en unités carrées.",
            },
            {
              "kind": "p",
              "text": "Utilisez [[k = 3]] : [[[P = 30 \\times 3 = 90]]] unités.",
            },
            {
              "kind": "p",
              "text": "Pour vérifier avec [[k = 2]], additionnez directement les côtés mis à l'échelle : [[P = 10 + 24 + 26 = 60]] unités, ce qui correspond à [[P = 30 \\times 2 = 60]]. Le périmètre répond à une question différente de l'aire : il mesure la distance autour du triangle, et non l'espace à l'intérieur.",
            },
          ],
          "image": {
            "src": "five-twelve-thirteen-perimeter.svg",
            "alt": "Schéma du périmètre d'un triangle 5-12-13 mis à l'échelle avec des côtés de 5k, 12k et 13k dont la somme est 30k",
            "caption": "Avec k = 2, le périmètre est de 60 unités.",
          },
        },
        "sec-find-k": {
          "h2": "Comment trouver le facteur d'échelle à partir d'un côté connu",
          "blocks": [
            {
              "kind": "p",
              "text": "Divisez un côté connu par son nombre du rapport pour trouver k à la main.",
            },
            {
              "kind": "p",
              "text": "Le calculateur prend [[k]] directement, mais vous pouvez calculer [[k]] vous-même quand vous connaissez déjà un côté. Divisez le côté connu par le nombre correspondant du rapport 5:12:13.",
            },
            {
              "kind": "p",
              "text": "Si le petit côté de l'angle droit est connu : [[[k = \\frac{a}{5}]]]",
            },
            {
              "kind": "p",
              "text": "Si le grand côté de l'angle droit est connu : [[[k = \\frac{b}{12}]]]",
            },
            {
              "kind": "p",
              "text": "Si l'hypoténuse est connue : [[[k = \\frac{c}{13}]]]",
            },
            {
              "kind": "p",
              "text": "Exemple 1 : avec [[a = 20]], [[k = 20 / 5 = 4]]. Exemple 2 : avec [[b = 36]], [[k = 36 / 12 = 3]]. Exemple 3 : avec [[c = 65]], [[k = 65 / 13 = 5]]. Entrez le k trouvé dans le calculateur pour obtenir les autres côtés, l'aire et le périmètre.",
            },
            {
              "kind": "p",
              "text": "Parfois [[k]] n'est pas un nombre entier. Avec [[b = 30]], par exemple, [[k = 30 / 12 = 2.5]], et les autres côtés sont [[a = 5 \\times 2.5 = 12.5]] et [[c = 13 \\times 2.5 = 32.5]]. Quand vous calculez [[k]] à partir de deux côtés connus différents, les deux réponses doivent s'accorder ; si ce n'est pas le cas, les mesures ne forment pas un triangle 5-12-13.",
            },
          ],
        },
        "sec-step-example": {
          "h2": "Exemple pas à pas de mise à l'échelle d'un triangle 5-12-13",
          "blocks": [
            {
              "kind": "p",
              "text": "Facteur d'échelle k = 2, traité du début à la fin.",
            },
            {
              "kind": "p",
              "text": "Commencez avec [[k = 2]] et trouvez chaque mesure du triangle mis à l'échelle, une formule à la fois. Chaque étape utilise une formule des sections ci-dessus, et le tableau récapitulatif à la fin rassemble les résultats.",
            },
            {
              "kind": "steps",
              "steps": [
                "Trouvez le petit côté de l'angle droit : [[a = 5k = 5 \\times 2 = 10]].",
                "Trouvez le grand côté de l'angle droit : [[b = 12k = 12 \\times 2 = 24]].",
                "Trouvez l'hypoténuse : [[c = 13k = 13 \\times 2 = 26]].",
                "Trouvez l'aire : [[A = 30k^2 = 30 \\times 4 = 120]] unités carrées.",
                "Trouvez le périmètre : [[P = 30k = 30 \\times 2 = 60]] unités.",
              ],
            },
            {
              "kind": "p",
              "text": "Le nouveau triangle garde les proportions d'origine 5:12:13 : 10, 24 et 26 valent tous le double de 5, 12 et 13. Vérifiez l'angle droit avec Pythagore : [[10^2 + 24^2 = 100 + 576 = 676 = 26^2]].",
            },
          ],
          "table": {
            "headers": [
              "Mesure",
              "Valeur",
            ],
            "rows": [
              [
                "Petit côté de l'angle droit a",
                "10",
              ],
              [
                "Grand côté de l'angle droit b",
                "24",
              ],
              [
                "Hypoténuse c",
                "26",
              ],
              [
                "Aire A",
                "120 unités carrées",
              ],
              [
                "Périmètre P",
                "60 unités",
              ],
            ],
          },
        },
        "sec-examples": {
          "h2": "Exemples résolus avec différents facteurs d'échelle",
          "blocks": [
            {
              "kind": "p",
              "text": "Huit exemples résolus, du triangle d'origine jusqu'à k = 10.",
            },
            {
              "kind": "h3",
              "text": "Exemple 1 : Triangle d'origine, k = 1",
            },
            {
              "kind": "p",
              "text": "Donné [[k = 1]]. Côtés : [[a = 5]], [[b = 12]], [[c = 13]]. Aire : [[A = 30(1^2) = 30]] unités carrées. Périmètre : [[P = 30(1) = 30]] unités. C'est le triangle d'origine, la plus petite version entière du triplet.",
            },
            {
              "kind": "h3",
              "text": "Exemple 2 : Facteur d'échelle de 2",
            },
            {
              "kind": "p",
              "text": "Donné [[k = 2]]. Côtés : [[a = 10]], [[b = 24]], [[c = 26]]. Aire : [[A = 30(2^2) = 120]] unités carrées. Périmètre : [[P = 30(2) = 60]] unités. Doubler le facteur d'échelle double chaque côté et le périmètre, mais l'aire est multipliée par quatre.",
            },
            {
              "kind": "h3",
              "text": "Exemple 3 : Facteur d'échelle de 3",
            },
            {
              "kind": "p",
              "text": "Donné [[k = 3]]. Côtés : [[a = 15]], [[b = 36]], [[c = 39]]. Aire : [[A = 30(3^2) = 270]] unités carrées. Périmètre : [[P = 30(3) = 90]] unités. Tripler les côtés triple le périmètre, tandis que l'aire devient neuf fois celle d'origine.",
            },
            {
              "kind": "h3",
              "text": "Exemple 4 : Facteur d'échelle de 4",
            },
            {
              "kind": "p",
              "text": "Donné [[k = 4]]. Côtés : [[a = 20]], [[b = 48]], [[c = 52]]. Aire : [[A = 30(4^2) = 480]] unités carrées. Périmètre : [[P = 30(4) = 120]] unités. Chaque côté vaut quatre fois l'original, et l'aire vaut seize fois celle d'origine.",
            },
            {
              "kind": "h3",
              "text": "Exemple 5 : Facteur d'échelle de 0.5",
            },
            {
              "kind": "p",
              "text": "Donné [[k = 0.5]]. Côtés : [[a = 2.5]], [[b = 6]], [[c = 6.5]]. Aire : [[A = 30(0.5^2) = 7.5]] unités carrées. Périmètre : [[P = 30(0.5) = 15]] unités. Réduire le triangle de moitié divise les côtés et le périmètre par deux, tandis que l'aire tombe au quart.",
            },
            {
              "kind": "h3",
              "text": "Exemple 6 : Facteur d'échelle de 1.5",
            },
            {
              "kind": "p",
              "text": "Donné [[k = 1.5]]. Côtés : [[a = 7.5]], [[b = 18]], [[c = 19.5]]. Aire : [[A = 30(1.5^2) = 67.5]] unités carrées. Périmètre : [[P = 30(1.5) = 45]] unités. Un facteur d'échelle décimal fonctionne de la même façon : multipliez chaque côté par 1.5.",
            },
            {
              "kind": "h3",
              "text": "Exemple 7 : Facteur d'échelle de 5",
            },
            {
              "kind": "p",
              "text": "Donné [[k = 5]]. Côtés : [[a = 25]], [[b = 60]], [[c = 65]]. Aire : [[A = 30(5^2) = 750]] unités carrées. Périmètre : [[P = 30(5) = 150]] unités. Un facteur d'échelle de 5 donne un triangle beaucoup plus grand, utile pour les travaux de tracé où le 5, 12, 13 de base est trop petit.",
            },
            {
              "kind": "h3",
              "text": "Exemple 8 : Facteur d'échelle de 10",
            },
            {
              "kind": "p",
              "text": "Donné [[k = 10]]. Côtés : [[a = 50]], [[b = 120]], [[c = 130]]. Aire : [[A = 30(10^2) = 3000]] unités carrées. Périmètre : [[P = 30(10) = 300]] unités. À cette taille, les nombres restent exacts, ce qui est un avantage de travailler avec un triplet entier.",
            },
            {
              "kind": "p",
              "text": "Dans les huit exemples, le schéma se confirme : les côtés et le périmètre croissent avec [[k]], l'aire croît avec [[k]] au carré, et le rapport 5:12:13 ne change jamais.",
            },
          ],
        },
        "sec-right-angle": {
          "h2": "Pourquoi le triangle 5-12-13 garde-t-il toujours un angle de 90 degrés ?",
          "blocks": [
            {
              "kind": "p",
              "text": "La mise à l'échelle ne peut pas briser la vérification de Pythagore.",
            },
            {
              "kind": "p",
              "text": "Les côtés mis à l'échelle sont [[[5k,\\quad 12k,\\quad 13k]]]",
            },
            {
              "kind": "p",
              "text": "Appliquez Pythagore : [[[(5k)^2 + (12k)^2 = (13k)^2]]]",
            },
            {
              "kind": "p",
              "text": "Développez : [[[25k^2 + 144k^2 = 169k^2]]]",
            },
            {
              "kind": "p",
              "text": "[[[169k^2 = 169k^2]]]",
            },
            {
              "kind": "p",
              "text": "Les deux côtés correspondent pour chaque [[k]] positif, car le facteur [[k^2]] est commun aux trois termes. La mise à l'échelle étire le triangle sans changer ses angles, donc l'angle de 90 degrés survit à n'importe quelle taille. C'est la même idée que les triangles semblables : même forme, taille différente.",
            },
            {
              "kind": "p",
              "text": "Les angles ne changent jamais avec la mise à l'échelle. À chaque [[k]] positif, les angles aigus restent environ 22.62 et 67.38 degrés, car le sinus du plus petit angle vaut toujours [[5 / 13]] et le sinus du plus grand angle vaut toujours [[12 / 13]]. Seules les longueurs des côtés bougent, et elles bougent toutes ensemble.",
            },
          ],
          "image": {
            "src": "five-twelve-thirteen-angles.svg",
            "alt": "Schéma des angles d'un triangle 5-12-13 montrant l'angle de 90 degrés et les angles aigus d'environ 22.62 et 67.38 degrés",
            "caption": "Les angles aigus mesurent environ 22.62 et 67.38 degrés, et leur somme est de 90 degrés.",
          },
        },
        "sec-euclid": {
          "h2": "Comment le triplet 5-12-13 est-il généré avec la formule d'Euclide ?",
          "blocks": [
            {
              "kind": "p",
              "text": "Deux petits nombres, m = 3 et n = 2, génèrent tout le triplet.",
            },
            {
              "kind": "p",
              "text": "La formule d'Euclide construit des triplets pythagoriciens primitifs à partir de deux entiers positifs [[m]] et [[n]] : [[[a = m^2 - n^2,\\quad b = 2mn,\\quad c = m^2 + n^2]]]",
            },
            {
              "kind": "p",
              "text": "Utilisez [[m = 3]] et [[n = 2]] : [[[a = 3^2 - 2^2 = 9 - 4 = 5]]]",
            },
            {
              "kind": "p",
              "text": "[[[b = 2(3)(2) = 12]]]",
            },
            {
              "kind": "p",
              "text": "[[[c = 3^2 + 2^2 = 9 + 4 = 13]]]",
            },
            {
              "kind": "p",
              "text": "Le résultat est le rapport encadré [[[\\boxed{5:12:13}]]]",
            },
            {
              "kind": "p",
              "text": "La formule fonctionne quand [[m]] est supérieur à [[n]], que les deux nombres n'ont aucun facteur commun, et que l'un est pair tandis que l'autre est impair. Ces conditions donnent un triplet primitif, c'est-à-dire un triplet qui ne peut pas être réduit à un triplet entier plus petit. La formule d'Euclide est un complément avancé : le calculateur lui-même n'a besoin que de [[k]], mais la formule montre d'où viennent 5, 12 et 13.",
            },
            {
              "kind": "p",
              "text": "D'autres choix de [[m]] et [[n]] génèrent d'autres triplets. Avec [[m = 2]] et [[n = 1]] la formule donne 3, 4 et 5. Avec [[m = 4]] et [[n = 1]] elle donne 15, 8 et 17, c'est-à-dire le triplet 8-15-17 dans un ordre différent. Le triplet 5-12-13 est le membre de cette famille qui provient de [[m = 3]] et [[n = 2]].",
            },
          ],
          "image": {
            "src": "five-twelve-thirteen-euclid.svg",
            "alt": "Schéma du déroulement de la formule d'Euclide avec m égal à 3 et n égal à 2 produisant 5, 12 et 13",
            "caption": "m = 3 et n = 2 donnent a = 5, b = 12 et c = 13.",
          },
        },
        "sec-applications": {
          "h2": "Applications du triangle 5-12-13 en géométrie et en mesure",
          "blocks": [
            {
              "kind": "p",
              "text": "Un angle droit en nombres entiers est utile partout où les coins exacts comptent.",
            },
            {
              "kind": "p",
              "text": "Dans les devoirs de géométrie et la préparation aux examens, le triplet permet des vérifications rapides d'angle droit sans rapporteur : si trois longueurs correspondent à 5:12:13, l'angle entre les deux côtés les plus courts mesure 90 degrés. Les enseignants l'utilisent pour les exercices sur le théorème de Pythagore, les problèmes de triangles semblables et les travaux de dessin à l'échelle.",
            },
            {
              "kind": "p",
              "text": "Les constructeurs et les menuisiers utilisent des versions mises à l'échelle pour tracer des coins droits : marquez 5 unités le long d'un bord et 12 le long de l'autre, et la diagonale doit mesurer 13. Les géomètres et les travaux de dessin technique s'appuient sur la même idée à plus grande échelle, avec 10, 24, 26 ou 25, 60, 65 quand le triangle de base est trop petit.",
            },
            {
              "kind": "p",
              "text": "Le rapport aide aussi dans la modélisation mathématique et les démonstrations en classe, où les nombres entiers exacts gardent le calcul simple. Pour la construction réelle, la précision des mesures et les conditions du chantier comptent toujours, et ce rapport ne remplace pas l'arpentage professionnel ni les normes de construction.",
            },
          ],
        },
        "sec-vs-triples": {
          "h2": "Différence entre 5-12-13 et les autres triplets pythagoriciens",
          "blocks": [
            {
              "kind": "p",
              "text": "Chaque triplet primitif est un triangle rectangle, mais chacun a sa propre forme.",
            },
            {
              "kind": "p",
              "text": "Le tableau ci-dessous compare cinq triplets primitifs bien connus. Tous vérifient le théorème de Pythagore, mais leurs proportions de côtés et leurs angles aigus diffèrent, donc chacun crée une forme de triangle différente. Mettre un triplet à l'échelle donne des triangles semblables, jamais un triplet différent : 10, 24, 26 est un 5-12-13 mis à l'échelle, tandis que 3, 4, 5 est une forme tout à fait différente.",
            },
            {
              "kind": "p",
              "text": "Le triangle 5-12-13 est plus long et plus étroit que le triangle 3-4-5 : son grand côté de l'angle droit vaut plus du double de son petit côté, tandis que 3-4-5 est plus proche du carré. Cette différence se voit dans les angles, avec 22.62 et 67.38 degrés ici contre 36.87 et 53.13 degrés pour 3-4-5. Pour en savoir plus, consultez la page du <a href=\"/pythagorean-triples-calculator/\">calculateur de triplets pythagoriciens</a>.",
            },
            {
              "kind": "p",
              "text": "Seuls les triplets du tableau sont primitifs, ce qui signifie que leurs trois nombres n'ont aucun diviseur commun supérieur à 1. Un triplet mis à l'échelle comme 6, 8, 10 ou 10, 24, 26 n'est pas primitif, car les trois nombres se divisent par 2. Les triplets primitifs sont les membres de base de chaque famille, et tous les autres membres sont des copies mises à l'échelle de l'un d'eux.",
            },
          ],
          "table": {
            "headers": [
              "Triplet pythagoricien",
              "Rapport des côtés",
              "Hypoténuse",
            ],
            "rows": [
              [
                "3-4-5",
                "3:4:5",
                "5",
              ],
              [
                "5-12-13",
                "5:12:13",
                "13",
              ],
              [
                "8-15-17",
                "8:15:17",
                "17",
              ],
              [
                "7-24-25",
                "7:24:25",
                "25",
              ],
              [
                "9-40-41",
                "9:40:41",
                "41",
              ],
            ],
          },
        },
        "sec-vs-special": {
          "h2": "Différence entre les triangles 5-12-13, 45-45-90 et 30-60-90",
          "blocks": [
            {
              "kind": "p",
              "text": "Le triangle 5-12-13 a ses propres angles, et non les angles standard des triangles spéciaux.",
            },
            {
              "kind": "p",
              "text": "Un triangle 5-12-13 n'est pas un triangle 45-45-90 ni un triangle 30-60-90. Ses angles aigus mesurent environ 22.62 et 67.38 degrés, et ses côtés de l'angle droit sont inégaux, donc il appartient à la famille des triplets pythagoriciens plutôt qu'à l'une ou l'autre famille d'angles spéciaux.",
            },
            {
              "kind": "p",
              "text": "Utilisez le <a href=\"/45-45-90-triangle-calculator/\">calculateur de triangle 45-45-90</a> pour les triangles rectangles isocèles et le <a href=\"/30-60-90-triangle-calculator/\">calculateur de triangle 30-60-90</a> pour la famille 30-60-90. La page 5-12-13 est l'outil qu'il faut quand les côtés suivent le rapport 5:12:13.",
            },
            {
              "kind": "p",
              "text": "Pour savoir à quelle famille appartient un triangle rectangle, vérifiez ses angles ou son rapport de côtés. Des côtés égaux et des angles de 45 degrés signifient 45-45-90. Des angles de 30 et 60 degrés signifient 30-60-90. Des côtés dans le rapport 5:12:13, avec des angles proches de 22.62 et 67.38 degrés, signifient un triangle 5-12-13. Les trois familles ne se chevauchent jamais.",
            },
          ],
          "table": {
            "headers": [
              "Caractéristique",
              "5-12-13",
              "45-45-90",
              "30-60-90",
            ],
            "rows": [
              [
                "Rapport des côtés",
                "5:12:13",
                "1:1:√2",
                "1:√3:2",
              ],
              [
                "Angles",
                "22.62°, 67.38°, 90° environ",
                "45°, 45°, 90°",
                "30°, 60°, 90°",
              ],
              [
                "Côtés égaux",
                "Non",
                "Oui",
                "Non",
              ],
              [
                "Propriété principale",
                "Triplet pythagoricien",
                "Triangle rectangle isocèle",
                "Rapport d'angles spéciaux",
              ],
              [
                "Hypoténuse",
                "13k",
                "a√2",
                "2a",
              ],
            ],
          },
        },
        "sec-mistakes": {
          "h2": "Erreurs fréquentes avec le calculateur de triangle 5-12-13",
          "blocks": [
            {
              "kind": "p",
              "text": "Quatorze erreurs reviennent sans cesse dans les problèmes de 5-12-13.",
            },
            {
              "kind": "steps",
              "steps": [
                "Prendre 13 pour un côté de l'angle droit au lieu de l'hypoténuse : 13 est le côté le plus long et se trouve en face de l'angle de 90 degrés. [[c = 13k]] est toujours l'hypoténuse.",
                "Confondre le petit côté de l'angle droit avec le grand : [[a = 5k]] est le petit côté de l'angle droit et [[b = 12k]] est le grand côté de l'angle droit. Gardez les étiquettes dans l'ordre.",
                "Mettre à l'échelle seulement un ou deux côtés : mettre à l'échelle seulement les côtés de l'angle droit brise le rapport et l'angle droit. Appliquez le même [[k]] à chaque côté.",
                "Confondre le facteur d'échelle avec une longueur de côté : [[k]] est le multiplicateur, pas un côté. Avec [[k = 2]] les côtés sont 10, 24 et 26.",
                "Utiliser zéro comme facteur d'échelle valable : [[k = 0]] rend les trois côtés nuls, une figure dégénérée, et non un triangle. [[k]] doit être supérieur à zéro.",
                "Entrer un facteur d'échelle négatif : un [[k]] négatif donne des longueurs de côtés négatives, qui ne peuvent pas décrire un triangle. Entrez seulement un [[k]] positif.",
                "Oublier de mettre k au carré dans la formule de l'aire : l'aire croît avec [[k]] au carré. Avec [[k = 3]] l'aire est [[A = 30 \\times 9 = 270]], et non 90.",
                "Confondre l'aire et le périmètre : l'aire se mesure en unités carrées et utilise [[A = 30k^2]], tandis que le périmètre se mesure en unités linéaires et utilise [[P = 30k]].",
                "Additionner seulement deux côtés pour calculer le périmètre : le périmètre comprend les trois côtés, donc [[P = 5k + 12k + 13k = 30k]].",
                "Mélanger les unités de mesure : gardez une seule unité pour les trois côtés. Si les côtés de l'angle droit sont en centimètres, l'aire est en centimètres carrés et le périmètre en centimètres.",
                "Supposer que seuls 5, 12 et 13 fonctionnent : tout ensemble mis à l'échelle comme 10, 24, 26 ou 15, 36, 39 reste un triangle 5-12-13, car le rapport est le même.",
                "Supposer que chaque triangle rectangle suit le rapport 5:12:13 : la plupart des triangles rectangles ont d'autres longueurs de côtés. Le rapport s'applique seulement quand les côtés correspondent à 5:12:13.",
                "Confondre les triplets 5-12-13 et 3-4-5 : 3, 4, 5 et 5, 12, 13 sont des triplets différents avec des angles différents. Vérifiez le rapport avant de choisir une formule.",
                "Arrondir les mesures sans nécessité : le triplet donne des nombres entiers exacts, donc gardez-les exacts. Arrondissez seulement quand un facteur d'échelle comme 1.5 impose un décimal, et dites-le.",
              ],
            },
          ],
        },
        "sec-verify": {
          "h2": "Comment vérifier un triangle 5-12-13 mis à l'échelle",
          "blocks": [
            {
              "kind": "p",
              "text": "Quatre vérifications rapides confirment un triangle 5-12-13 mis à l'échelle.",
            },
            {
              "kind": "h3",
              "text": "Vérification 1 : Rapport des côtés",
            },
            {
              "kind": "p",
              "text": "Les côtés doivent correspondre à [[[a : b : c = 5 : 12 : 13]]]",
            },
            {
              "kind": "h3",
              "text": "Vérification 2 : Théorème de Pythagore",
            },
            {
              "kind": "p",
              "text": "Les côtés de l'angle droit doivent vérifier [[[a^2 + b^2 = c^2]]]",
            },
            {
              "kind": "h3",
              "text": "Vérification 3 : Cohérence du facteur d'échelle",
            },
            {
              "kind": "p",
              "text": "Chaque côté divisé par son nombre du rapport doit donner le même [[k]] : [[[\\frac{a}{5} = \\frac{b}{12} = \\frac{c}{13} = k]]]",
            },
            {
              "kind": "h3",
              "text": "Vérification 4 : Ordre des côtés",
            },
            {
              "kind": "p",
              "text": "Les côtés doivent aller du plus court au plus long : [[[a < b < c]]]",
            },
            {
              "kind": "p",
              "text": "Prenez 10, 24, 26 comme exemple. Le rapport est 10:24:26, qui se réduit à 5:12:13, et la vérification de Pythagore donne [[10^2 + 24^2 = 100 + 576 = 676 = 26^2]]. La vérification du facteur d'échelle donne [[10 / 5 = 24 / 12 = 26 / 13 = 2]]. Les quatre vérifications sont réussies, donc les mesures forment un triangle 5-12-13 mis à l'échelle.",
            },
            {
              "kind": "p",
              "text": "Si une vérification échoue, mesurez de nouveau ou revérifiez le calcul avant de faire confiance aux nombres. Une vérification de rapport qui échoue signifie généralement qu'un côté a été mis à l'échelle avec un facteur différent, et une vérification de Pythagore qui échoue signifie généralement que le côté le plus long a été pris pour un côté de l'angle droit. Corrigez le côté qui brise le schéma, puis refaites les quatre vérifications.",
            },
          ],
        },
        "sec-practice": {
          "h2": "Exercices avec réponses",
          "blocks": [
            {
              "kind": "p",
              "text": "Faites les huit exercices sur papier avant de lire les réponses.",
            },
            {
              "kind": "h3",
              "text": "Problème 1 : Mise à l'échelle avec k = 2",
            },
            {
              "kind": "p",
              "text": "Mettez un triangle 5-12-13 à l'échelle avec [[k = 2]]. Trouvez les trois longueurs de côtés, l'aire et le périmètre.",
            },
            {
              "kind": "h3",
              "text": "Problème 2 : Mise à l'échelle avec k = 4",
            },
            {
              "kind": "p",
              "text": "Mettez un triangle 5-12-13 à l'échelle avec [[k = 4]]. Trouvez les trois longueurs de côtés, l'aire et le périmètre.",
            },
            {
              "kind": "h3",
              "text": "Problème 3 : Aire avec k = 3",
            },
            {
              "kind": "p",
              "text": "Trouvez l'aire d'un triangle 5-12-13 mis à l'échelle avec [[k = 3]], en unités carrées.",
            },
            {
              "kind": "h3",
              "text": "Problème 4 : Périmètre avec k = 5",
            },
            {
              "kind": "p",
              "text": "Trouvez le périmètre d'un triangle 5-12-13 mis à l'échelle avec [[k = 5]], en unités.",
            },
            {
              "kind": "h3",
              "text": "Problème 5 : Trouver k à partir du petit côté de l'angle droit",
            },
            {
              "kind": "p",
              "text": "Le petit côté de l'angle droit d'un triangle 5-12-13 mis à l'échelle est 25. Trouvez le facteur d'échelle [[k]], puis trouvez les deux autres côtés.",
            },
            {
              "kind": "h3",
              "text": "Problème 6 : Trouver k à partir du grand côté de l'angle droit",
            },
            {
              "kind": "p",
              "text": "Le grand côté de l'angle droit d'un triangle 5-12-13 mis à l'échelle est 48. Trouvez le facteur d'échelle [[k]], puis trouvez les deux autres côtés.",
            },
            {
              "kind": "h3",
              "text": "Problème 7 : Trouver k à partir de l'hypoténuse",
            },
            {
              "kind": "p",
              "text": "L'hypoténuse d'un triangle 5-12-13 mis à l'échelle est 78. Trouvez le facteur d'échelle [[k]], puis trouvez les deux côtés de l'angle droit.",
            },
            {
              "kind": "h3",
              "text": "Problème 8 : Vérifier 15, 36 et 39",
            },
            {
              "kind": "p",
              "text": "Les longueurs de côtés 15, 36 et 39 forment-elles un triangle 5-12-13 mis à l'échelle ? Vérifiez le rapport et le théorème de Pythagore.",
            },
            {
              "kind": "h3",
              "text": "Réponses",
            },
            {
              "kind": "p",
              "text": "1. Côtés 10, 24, 26 ; aire 120 unités carrées ; périmètre 60 unités.",
            },
            {
              "kind": "p",
              "text": "2. Côtés 20, 48, 52 ; aire 480 unités carrées ; périmètre 120 unités.",
            },
            {
              "kind": "p",
              "text": "3. Aire [[A = 30 \\times 9 = 270]] unités carrées.",
            },
            {
              "kind": "p",
              "text": "4. Périmètre [[P = 30 \\times 5 = 150]] unités.",
            },
            {
              "kind": "p",
              "text": "5. [[k = 25 / 5 = 5]] ; le grand côté de l'angle droit est 60 et l'hypoténuse est 65.",
            },
            {
              "kind": "p",
              "text": "6. [[k = 48 / 12 = 4]] ; le petit côté de l'angle droit est 20 et l'hypoténuse est 52.",
            },
            {
              "kind": "p",
              "text": "7. [[k = 78 / 13 = 6]] ; le petit côté de l'angle droit est 30 et le grand côté de l'angle droit est 72.",
            },
            {
              "kind": "p",
              "text": "8. Oui : [[15^2 + 36^2 = 225 + 1296 = 1521 = 39^2]], et 15:36:39 se réduit à 5:12:13, donc [[k = 3]].",
            },
          ],
        },
      },
      "relatedHeading": "Calculateurs de triangle rectangle associés",
      "relatedIntro": "Chaque calculateur ci-dessous traite une tâche différente sur le triangle rectangle, donc choisissez l'outil qui correspond à la mesure dont vous avez besoin.",
      "relatedItems": [
        "Calculateur de triplets pythagoriciens",
        "Calculateur de triangle 3-4-5",
        "Calculateur de côté de triangle rectangle",
        "Calculateur du théorème de Pythagore",
        "Calculateur d'aire de triangle rectangle",
        "Calculateur de périmètre de triangle rectangle",
      ],
      "faqHeading": "Questions fréquentes",
      "faqs": [
        {
          "question": "Qu'est-ce qu'un triangle 5-12-13 ?",
          "answer": "Un triangle 5-12-13 est un triangle rectangle dont les côtés mesurent 5, 12 et 13, ou tout ensemble mis à l'échelle dans le même rapport. Le côté de longueur 13 est l'hypoténuse, et les côtés de longueur 5 et 12 sont les côtés de l'angle droit qui se rencontrent à l'angle droit.",
        },
        {
          "question": "Pourquoi 5-12-13 est-il un triangle rectangle ?",
          "answer": "Parce que ses côtés vérifient le théorème de Pythagore : [[5^2 + 12^2 = 25 + 144 = 169 = 13^2]]. Quand les carrés des deux côtés les plus courts s'additionnent pour donner le carré du côté le plus long, l'angle en face de ce côté mesure 90 degrés.",
        },
        {
          "question": "Quel est le rapport des côtés d'un triangle 5-12-13 ?",
          "answer": "Le rapport est 5:12:13 : le petit côté de l'angle droit vaut 5 parties, le grand côté de l'angle droit 12 parties, et l'hypoténuse 13 parties. La mise à l'échelle multiplie chaque partie par le même facteur [[k]], donc le rapport ne change jamais.",
        },
        {
          "question": "Comment fonctionne le calculateur de triangle 5-12-13 ?",
          "answer": "Entrez un facteur d'échelle positif [[k]] et appuyez sur Calculer. Le calculateur renvoie les côtés mis à l'échelle [[a = 5k]], [[b = 12k]] et [[c = 13k]], ainsi que l'aire [[A = 30k^2]] et le périmètre [[P = 30k]].",
        },
        {
          "question": "Qu'est-ce que le facteur d'échelle dans un triangle 5-12-13 ?",
          "answer": "Le facteur d'échelle [[k]] est le nombre qui multiplie les trois côtés du triangle de base. Avec [[k = 1]] vous obtenez le triangle d'origine ; les valeurs plus grandes l'agrandissent et les valeurs entre 0 et 1 le réduisent.",
        },
        {
          "question": "Comment calculer les côtés d'un triangle 5-12-13 mis à l'échelle ?",
          "answer": "Multipliez chaque côté de base par [[k]] : le petit côté de l'angle droit est [[a = 5k]], le grand côté de l'angle droit est [[b = 12k]], et l'hypoténuse est [[c = 13k]]. Pour [[k = 4]] les côtés sont 20, 48 et 52.",
        },
        {
          "question": "Comment calculer son aire ?",
          "answer": "Utilisez [[A = 30k^2]]. L'aire provient de la moitié du produit des côtés de l'angle droit, [[A = (5k)(12k) / 2]]. Avec [[k = 3]] l'aire est de 270 unités carrées.",
        },
        {
          "question": "Comment calculer son périmètre ?",
          "answer": "Utilisez [[P = 30k]]. Additionnez les trois côtés mis à l'échelle : [[P = 5k + 12k + 13k]]. Avec [[k = 3]] le périmètre est de 90 unités.",
        },
        {
          "question": "Peut-on utiliser 10-24-26 au lieu de 5-12-13 ?",
          "answer": "Oui. L'ensemble 10, 24, 26 est le triangle 5-12-13 mis à l'échelle par [[k = 2]], donc il a la même forme et les mêmes angles. Tout multiple de 5, 12 et 13 fonctionne de la même façon.",
        },
        {
          "question": "Comment le triplet 5-12-13 est-il généré ?",
          "answer": "La formule d'Euclide avec [[m = 3]] et [[n = 2]] donne [[a = 3^2 - 2^2 = 5]], [[b = 2(3)(2) = 12]] et [[c = 3^2 + 2^2 = 13]]. Les valeurs 3 et 2 sont premières entre elles et de parité opposée, donc le triplet est primitif.",
        },
        {
          "question": "Quelle est la différence entre 3-4-5 et 5-12-13 ?",
          "answer": "Les deux sont des triplets pythagoriciens primitifs, mais leurs proportions diffèrent : 3-4-5 a des angles d'environ 36.87 et 53.13 degrés, tandis que 5-12-13 a des angles d'environ 22.62 et 67.38 degrés. Chaque triplet forme un triangle de forme différente.",
        },
        {
          "question": "Chaque triangle 5-12-13 mis à l'échelle est-il un triangle rectangle ?",
          "answer": "Oui. Pour chaque [[k]] positif, les côtés mis à l'échelle vérifient [[(5k)^2 + (12k)^2 = (13k)^2]], donc le théorème de Pythagore est vérifié et l'angle en face du côté le plus long reste de 90 degrés.",
        },
      ],
    },
};
