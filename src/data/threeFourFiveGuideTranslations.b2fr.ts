// threeFourFiveGuideTranslations.bfr.ts: 3-4-5 Triangle
// Guide (Page 42 of 45) translation.
export const THREEFOURFIVE_B2_FR = {
  "fr": {
      "meta": {
        "title": "Calculatrice de triangle 3-4-5 : mettre à l'échelle les côtés, l'aire et le périmètre",
        "description": "Mettez un triangle 3-4-5 à l'échelle avec cette calculatrice : saisissez un facteur d'échelle k positif pour trouver les côtés 3k, 4k et 5k, ainsi que l'aire 6k au carré et le périmètre 12k.",
        "primaryKeyword": "3-4-5 Triangle Calculator",
        "slug": "3-4-5-triangle-calculator",
      },
      "tocHeading": "Navigation des sections",
      "tocItems": {
        "sec-intro": "Calculatrice de triangle 3-4-5",
        "sec-calculate": "Mettre un triangle 3-4-5 à l'échelle et calculer ses mesures",
        "sec-what": "Qu'est-ce qu'un triangle 3-4-5 ?",
        "sec-pythagorean": "Pourquoi 3-4-5 est-il un triplet de Pythagore ?",
        "sec-sides": "Comprendre les trois côtés d'un triangle 3-4-5",
        "sec-ratio": "Comprendre le rapport des côtés 3-4-5",
        "sec-scale-factor": "Qu'est-ce que le facteur d'échelle dans un triangle 3-4-5 ?",
        "sec-leg-a": "Formule pour calculer le premier côté de l'angle droit",
        "sec-leg-b": "Formule pour calculer le deuxième côté de l'angle droit",
        "sec-hypotenuse": "Formule pour calculer l'hypoténuse",
        "sec-area": "Comment calculer l'aire d'un triangle 3-4-5 mis à l'échelle",
        "sec-perimeter": "Comment calculer le périmètre d'un triangle 3-4-5 mis à l'échelle",
        "sec-find-k": "Comment trouver le facteur d'échelle à partir d'un côté connu",
        "sec-step-example": "Exemple résolu pas à pas de la mise à l'échelle d'un triangle 3-4-5",
        "sec-examples": "Exemples résolus avec différents facteurs d'échelle",
        "sec-right-angle": "Pourquoi le triangle 3-4-5 garde-t-il toujours un angle de 90 degrés ?",
        "sec-construction": "Comment utiliser la règle 3-4-5 pour vérifier un angle droit",
        "sec-applications": "Applications du triangle 3-4-5 dans la construction",
        "sec-similar": "Relation entre les triangles semblables et le rapport 3-4-5",
        "sec-vs-special": "Différence entre les triangles 3-4-5, 45-45-90 et 30-60-90",
        "sec-mistakes": "Erreurs fréquentes avec la calculatrice de triangle 3-4-5",
        "sec-verify": "Comment vérifier un triangle 3-4-5 mis à l'échelle",
        "sec-practice": "Exercices avec réponses",
        "sec-related": "Calculatrices de triangles rectangles associées",
        "sec-faq": "Questions fréquentes",
      },
      "sections": {
        "sec-intro": {
          "h2": "Calculatrice de triangle 3-4-5",
          "blocks": [
            {
              "kind": "p",
              "text": "Mettez un triangle 3-4-5 à l'échelle et trouvez ses côtés, son aire et son périmètre.",
            },
            {
              "kind": "p",
              "text": "Un triangle 3-4-5 est un triangle rectangle dont les longueurs des côtés suivent le rapport [[3 : 4 : 5]]. C'est le triplet de Pythagore le plus célèbre, parce que ses côtés entiers vérifient le théorème de Pythagore : [[3^2 + 4^2 = 5^2]], puisque [[9 + 16 = 25]]. Le côté de longueur 5 est l'hypoténuse, et les côtés de longueur 3 et 4 sont les côtés de l'angle droit.",
            },
            {
              "kind": "p",
              "text": "La calculatrice met ce triangle à l'échelle avec un facteur d'échelle positif [[k]], de sorte que les côtés mis à l'échelle sont [[a = 3k]], [[b = 4k]] et [[c = 5k]]. Elle calcule aussi l'aire, [[A = 6k^2]], et le périmètre, [[P = 12k]], donc une seule saisie donne les cinq résultats. Utilisez la <a href=\"/right-triangle-calculator/\">calculatrice de triangle rectangle</a> pour un triangle rectangle quelconque.",
            },
            {
              "kind": "p",
              "text": "Par exemple, avec [[k = 2]], les côtés deviennent [[a = 6]], [[b = 8]] et [[c = 10]], l'aire vaut [[A = 24]] unités carrées et le périmètre vaut [[P = 24]] unités.",
            },
          ],
        },
        "sec-calculate": {
          "h2": "Mettre un triangle 3-4-5 à l'échelle et calculer ses mesures",
          "blocks": [
            {
              "kind": "p",
              "text": "Un seul mode, une seule saisie et cinq résultats.",
            },
            {
              "kind": "p",
              "text": "La calculatrice n'a qu'un seul mode : mettre un triangle 3-4-5 à l'échelle. Saisissez un facteur d'échelle positif [[k]] et cliquez sur Calculer, et elle renvoie les trois longueurs des côtés mis à l'échelle, l'aire et le périmètre. Le tableau ci-dessous présente chaque mesure avec sa formule.",
            },
            {
              "kind": "p",
              "text": "Le facteur d'échelle [[k]] multiplie chaque côté d'origine. Avec [[k = 1]], vous obtenez le triangle 3-4-5 d'origine. Une valeur supérieure à 1 l'agrandit, et une valeur comprise entre 0 et 1 le réduit. La calculatrice demande [[k]] parce que le rapport fixe la forme : une fois [[k]] connu, chaque mesure suit.",
            },
            {
              "kind": "p",
              "text": "Saisissez uniquement un nombre positif. Si [[k = 0]], les trois côtés deviennent nuls, ce qui donne une figure dégénérée plutôt qu'un triangle, et un [[k]] négatif ne peut pas donner des longueurs de côtés valides. Après le calcul, utilisez Réinitialiser pour effacer le champ avant de commencer un nouveau problème.",
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
                "Premier côté de l'angle droit",
                "3k",
                "Côté a mis à l'échelle",
              ],
              [
                "Deuxième côté de l'angle droit",
                "4k",
                "Côté b mis à l'échelle",
              ],
              [
                "Hypoténuse",
                "5k",
                "Côté c mis à l'échelle",
              ],
              [
                "Aire",
                "6k²",
                "Aire du triangle",
              ],
              [
                "Périmètre",
                "12k",
                "Périmètre du triangle",
              ],
            ],
          },
        },
        "sec-what": {
          "h2": "Qu'est-ce qu'un triangle 3-4-5 ?",
          "blocks": [
            {
              "kind": "p",
              "text": "Un triangle 3-4-5 tire son nom des longueurs de ses trois côtés.",
            },
            {
              "kind": "p",
              "text": "C'est un triangle rectangle dont les longueurs des côtés suivent le rapport [[3 : 4 : 5]]. Le côté le plus long, 5, est l'hypoténuse, et il se trouve en face de l'angle de 90 degrés. Les deux autres côtés, 3 et 4, sont les côtés de l'angle droit, et ils se rencontrent à l'angle droit. Dans le triangle ABC, l'angle C mesure 90°, le côté [[a]] est le petit côté de l'angle droit, de longueur 3, le côté [[b]] est le grand côté de l'angle droit, de longueur 4, et le côté [[c]] est l'hypoténuse, de longueur 5.",
            },
            {
              "kind": "p",
              "text": "On l'appelle triplet de Pythagore parce que 3, 4 et 5 sont des nombres entiers qui vérifient [[a^2 + b^2 = c^2]]. Cette propriété des nombres entiers rend le triangle utile : les constructeurs, les enseignants et les élèves peuvent vérifier un angle droit avec des mesures entières ordinaires, sans racines carrées ni décimales. C'est le plus petit triplet de Pythagore, et chaque copie mise à l'échelle, comme 6-8-10, en est aussi un.",
            },
          ],
          "image": {
            "src": "three-four-five-main.svg",
            "alt": "Triangle rectangle 3-4-5 ABC étiqueté, avec le petit côté de l'angle droit a égal à 3, le grand côté de l'angle droit b égal à 4, l'hypoténuse c égale à 5 et un marqueur d'angle droit",
            "caption": "Triangle ABC : les côtés de l'angle droit a = 3 et b = 4 se rencontrent à l'angle droit, et l'hypoténuse est c = 5.",
          },
        },
        "sec-pythagorean": {
          "h2": "Pourquoi 3-4-5 est-il un triplet de Pythagore ?",
          "blocks": [
            {
              "kind": "p",
              "text": "Les nombres 3, 4 et 5 vérifient exactement le théorème de Pythagore.",
            },
            {
              "kind": "p",
              "text": "Le théorème de Pythagore affirme que, dans un triangle rectangle, le carré de l'hypoténuse est égal à la somme des carrés des côtés de l'angle droit :",
            },
            {
              "kind": "p",
              "text": "[[[a^2 + b^2 = c^2]]]",
            },
            {
              "kind": "p",
              "text": "Remplaçons par les longueurs des côtés 3-4-5 :",
            },
            {
              "kind": "p",
              "text": "[[[3^2 + 4^2 = 5^2]]]",
            },
            {
              "kind": "p",
              "text": "Calculons chaque carré :",
            },
            {
              "kind": "p",
              "text": "[[[9 + 16 = 25]]]",
            },
            {
              "kind": "p",
              "text": "Les deux membres valent 25, donc l'égalité est vérifiée. Un triplet de Pythagore est un ensemble de trois nombres entiers qui vérifient cette équation, et 3-4-5 est le plus petit. L'égalité fonctionne aussi dans l'autre sens : si un triangle a des côtés de longueurs 3, 4 et 5, l'angle opposé au côté de longueur 5 doit mesurer 90°.",
            },
            {
              "kind": "p",
              "text": "Le côté de longueur 5 doit être l'hypoténuse parce que c'est le côté le plus long. Les côtés de longueur 3 et 4 doivent être les côtés de l'angle droit, parce qu'ils se rencontrent à l'angle droit. La <a href=\"/pythagorean-triples-calculator/\">calculatrice de triplets de Pythagore</a> présente d'autres triplets entiers, dont 5-12-13, un triplet différent.",
            },
          ],
          "image": {
            "src": "three-four-five-pythagoras.svg",
            "alt": "Schéma de Pythagore pour le triangle 3-4-5 montrant que 3 au carré plus 4 au carré égale 5 au carré, avec 9 plus 16 égale 25",
            "caption": "3² + 4² = 5², puisque 9 + 16 = 25, donc 3-4-5 est un triplet de Pythagore.",
          },
        },
        "sec-sides": {
          "h2": "Comprendre les trois côtés d'un triangle 3-4-5",
          "blocks": [
            {
              "kind": "p",
              "text": "Deux côtés de l'angle droit se rencontrent à l'angle droit, et l'hypoténuse se trouve en face.",
            },
            {
              "kind": "p",
              "text": "Le petit côté de l'angle droit [[a]] a une longueur de 3 dans le triangle de base. C'est le côté BC du triangle ABC, et il se trouve en face de l'angle A, d'environ 36.87°. Le grand côté de l'angle droit [[b]] a une longueur de 4, c'est le côté AC, et il se trouve en face de l'angle B, d'environ 53.13°. Les deux côtés de l'angle droit se rencontrent au sommet C, où ils forment l'angle de 90°.",
            },
            {
              "kind": "p",
              "text": "L'hypoténuse [[c]] a une longueur de 5, c'est le côté AB, et elle se trouve en face de l'angle de 90°. C'est le côté le plus long, parce que le plus grand angle se trouve toujours en face du côté le plus long. Quand le triangle est mis à l'échelle, les rôles ne changent jamais : [[a]] reste le petit côté de l'angle droit, [[b]] reste le grand côté de l'angle droit et [[c]] reste l'hypoténuse.",
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
                "Petit côté de l'angle droit a (BC)",
                "36.87°",
                "3",
              ],
              [
                "Grand côté de l'angle droit b (AC)",
                "53.13°",
                "4",
              ],
              [
                "Hypoténuse c (AB)",
                "90°",
                "5, côté le plus long",
              ],
            ],
          },
        },
        "sec-ratio": {
          "h2": "Comprendre le rapport des côtés 3-4-5",
          "blocks": [
            {
              "kind": "p",
              "text": "Le rapport 3:4:5 fixe la forme de chaque triangle 3-4-5.",
            },
            {
              "kind": "p",
              "text": "Le rapport des côtés d'un triangle 3-4-5 est :",
            },
            {
              "kind": "p",
              "text": "[[[a : b : c = 3 : 4 : 5]]]",
            },
            {
              "kind": "p",
              "text": "Chaque partie du rapport décrit un côté. Le petit côté de l'angle droit représente 3 unités proportionnelles, le grand côté de l'angle droit représente 4 unités proportionnelles et l'hypoténuse représente 5 unités proportionnelles. Écrit avec le facteur d'échelle [[k]], les trois côtés sont [[a = 3k]], [[b = 4k]] et [[c = 5k]], donc le rapport sous forme mise à l'échelle est [[3k : 4k : 5k]].",
            },
            {
              "kind": "p",
              "text": "Le rapport ne change pas quand le triangle est agrandi ou réduit, parce que multiplier les trois côtés par le même nombre laisse leurs proportions intactes. Les ensembles 3, 4, 5 et 6, 8, 10 et 9, 12, 15 et 15, 20, 25 représentent tous la même forme de triangle à des tailles différentes.",
            },
          ],
          "image": {
            "src": "three-four-five-scaled.svg",
            "alt": "Trois triangles 3-4-5 semblables de tailles différentes, étiquetés 3-4-5, 6-8-10 et 9-12-15, avec les mêmes proportions",
            "caption": "3-4-5, 6-8-10 et 9-12-15 ont la même forme et le même rapport 3:4:5.",
          },
        },
        "sec-scale-factor": {
          "h2": "Qu'est-ce que le facteur d'échelle dans un triangle 3-4-5 ?",
          "blocks": [
            {
              "kind": "p",
              "text": "Le facteur d'échelle multiplie chaque côté par le même nombre.",
            },
            {
              "kind": "p",
              "text": "Un facteur d'échelle [[k]] multiplie les trois longueurs des côtés d'origine par le même nombre positif. Les côtés mis à l'échelle sont :",
            },
            {
              "kind": "p",
              "text": "[[[a = 3k, \\quad b = 4k, \\quad c = 5k]]]",
            },
            {
              "kind": "p",
              "text": "Avec [[k = 1]], vous obtenez le triangle d'origine, 3, 4, 5. Une valeur de [[k]] supérieure à 1 l'agrandit, et une valeur comprise entre 0 et 1 le réduit, par exemple [[k = 0.5]] donne 1.5, 2, 2.5. Le facteur d'échelle doit être positif : zéro ne donne aucun triangle, et une valeur négative ne peut pas donner des longueurs de côtés valides.",
            },
            {
              "kind": "p",
              "text": "Le facteur d'échelle change la taille, pas la forme. Toutes les longueurs des côtés correspondants restent proportionnelles, les angles restent les mêmes et le rapport reste 3:4:5. Le tableau ci-dessus montre comment les côtés, l'aire et le périmètre changent avec [[k]] : le périmètre croît avec [[k]], tandis que l'aire croît avec [[k]] au carré.",
            },
          ],
          "table": {
            "headers": [
              "Facteur d'échelle k",
              "Côtés",
              "Aire",
              "Périmètre",
            ],
            "rows": [
              [
                "0.5",
                "1.5, 2, 2.5",
                "1.5",
                "6",
              ],
              [
                "1",
                "3, 4, 5",
                "6",
                "12",
              ],
              [
                "2",
                "6, 8, 10",
                "24",
                "24",
              ],
              [
                "3",
                "9, 12, 15",
                "54",
                "36",
              ],
            ],
          },
          "image": {
            "src": "three-four-five-scale-factor.svg",
            "alt": "Triangle 3-4-5 mis à l'échelle avec un facteur d'échelle k égal à 2, avec les côtés étiquetés a égal à 6, b égal à 8 et c égal à 10",
            "caption": "Avec k = 2, les côtés sont a = 6, b = 8 et c = 10.",
          },
        },
        "sec-leg-a": {
          "h2": "Formule pour calculer le premier côté de l'angle droit",
          "blocks": [
            {
              "kind": "p",
              "text": "Le petit côté de l'angle droit vaut trois fois le facteur d'échelle.",
            },
            {
              "kind": "p",
              "text": "[[[a = 3k]]]",
            },
            {
              "kind": "p",
              "text": "Ici, [[a]] est le petit côté de l'angle droit et [[k]] est le facteur d'échelle. La formule est une lecture directe du rapport : le petit côté de l'angle droit représente 3 unités pour chaque unité de [[k]], donc multiplier 3 par [[k]] donne la longueur mise à l'échelle. Prenons [[k = 4]] :",
            },
            {
              "kind": "p",
              "text": "[[[a = 3 \\times 4]]]",
            },
            {
              "kind": "p",
              "text": "[[[a = 12]]]",
            },
            {
              "kind": "p",
              "text": "Le résultat est une longueur de côté mise à l'échelle, pas un angle et pas un facteur d'échelle. Il est toujours plus court que les deux autres côtés, parce que 3 est la plus petite partie du rapport 3:4:5, et il reste le petit côté de l'angle droit pour chaque facteur d'échelle positif.",
            },
          ],
        },
        "sec-leg-b": {
          "h2": "Formule pour calculer le deuxième côté de l'angle droit",
          "blocks": [
            {
              "kind": "p",
              "text": "Le grand côté de l'angle droit vaut quatre fois le facteur d'échelle.",
            },
            {
              "kind": "p",
              "text": "[[[b = 4k]]]",
            },
            {
              "kind": "p",
              "text": "Ici, [[b]] est le grand côté de l'angle droit et [[k]] est le facteur d'échelle. Le grand côté de l'angle droit représente 4 unités pour chaque unité de [[k]], donc multiplier 4 par [[k]] donne la longueur mise à l'échelle. Prenons [[k = 4]] :",
            },
            {
              "kind": "p",
              "text": "[[[b = 4 \\times 4]]]",
            },
            {
              "kind": "p",
              "text": "[[[b = 16]]]",
            },
            {
              "kind": "p",
              "text": "Ce côté reste plus long que le premier côté de l'angle droit pour chaque facteur d'échelle positif, parce que 4 est plus grand que 3 et que les deux côtés sont multipliés par le même [[k]]. Il reste aussi plus court que l'hypoténuse, parce que 4 est plus petit que 5. Gardez les deux côtés de l'angle droit dans le bon ordre : [[a]] est le côté 3 et [[b]] est le côté 4.",
            },
          ],
        },
        "sec-hypotenuse": {
          "h2": "Formule pour calculer l'hypoténuse",
          "blocks": [
            {
              "kind": "p",
              "text": "L'hypoténuse vaut cinq fois le facteur d'échelle.",
            },
            {
              "kind": "p",
              "text": "[[[c = 5k]]]",
            },
            {
              "kind": "p",
              "text": "Ici, [[c]] est l'hypoténuse et [[k]] est le facteur d'échelle. L'hypoténuse représente 5 unités pour chaque unité de [[k]], donc multiplier 5 par [[k]] donne la longueur mise à l'échelle. Prenons [[k = 4]] :",
            },
            {
              "kind": "p",
              "text": "[[[c = 5 \\times 4]]]",
            },
            {
              "kind": "p",
              "text": "[[[c = 20]]]",
            },
            {
              "kind": "p",
              "text": "L'hypoténuse reste le côté le plus long pour chaque facteur d'échelle positif, parce que 5 est la plus grande partie du rapport. Vérifiez-la par rapport aux côtés de l'angle droit : avec [[k = 4]], les côtés sont 12, 16 et 20, et [[12^2 + 16^2 = 144 + 256 = 400 = 20^2]], donc le théorème de Pythagore confirme le résultat.",
            },
          ],
        },
        "sec-area": {
          "h2": "Comment calculer l'aire d'un triangle 3-4-5 mis à l'échelle",
          "blocks": [
            {
              "kind": "p",
              "text": "L'aire utilise les deux côtés de l'angle droit, et le facteur d'échelle est au carré.",
            },
            {
              "kind": "p",
              "text": "L'aire d'un triangle rectangle vaut la moitié du produit de ses deux côtés de l'angle droit, parce que ces côtés jouent le rôle de la base et de la hauteur perpendiculaire :",
            },
            {
              "kind": "p",
              "text": "[[[A = \\frac{ab}{2}]]]",
            },
            {
              "kind": "p",
              "text": "Remplaçons par les côtés mis à l'échelle, [[a = 3k]] et [[b = 4k]] :",
            },
            {
              "kind": "p",
              "text": "[[[A = \\frac{(3k)(4k)}{2}]]]",
            },
            {
              "kind": "p",
              "text": "Simplifions :",
            },
            {
              "kind": "p",
              "text": "[[[A = 6k^2]]]",
            },
            {
              "kind": "p",
              "text": "La division par deux est nécessaire parce qu'un triangle couvre la moitié du rectangle formé par ses deux côtés de l'angle droit. Le facteur [[k]] est au carré parce que les deux côtés portent un facteur [[k]]. L'aire se mesure en unités carrées. Doubler le facteur d'échelle quadruple l'aire : avec [[k = 2]], l'aire vaut 24 unités carrées, soit quatre fois les 6 unités carrées obtenues avec [[k = 1]]. Pour un triangle rectangle quelconque, utilisez plutôt la <a href=\"/right-triangle-area-calculator/\">calculatrice d'aire de triangle rectangle</a>.",
            },
            {
              "kind": "p",
              "text": "Prenons [[k = 3]] :",
            },
            {
              "kind": "p",
              "text": "[[[A = 6(3^2)]]]",
            },
            {
              "kind": "p",
              "text": "[[[A = 54 \\text{ square units}]]]",
            },
          ],
          "image": {
            "src": "three-four-five-area.svg",
            "alt": "Schéma de l'aire d'un triangle 3-4-5 avec une base de 3k, une hauteur de 4k et une aire de 6k au carré, montrant que k égal à 2 donne 24 unités carrées",
            "caption": "Aire à partir de la base 3k et de la hauteur 4k : A = 6k², et k = 2 donne 24 unités carrées.",
          },
        },
        "sec-perimeter": {
          "h2": "Comment calculer le périmètre d'un triangle 3-4-5 mis à l'échelle",
          "blocks": [
            {
              "kind": "p",
              "text": "Additionnez les trois côtés, et le périmètre varie avec k.",
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
              "text": "Remplaçons par les côtés mis à l'échelle :",
            },
            {
              "kind": "p",
              "text": "[[[P = 3k + 4k + 5k]]]",
            },
            {
              "kind": "p",
              "text": "Simplifions :",
            },
            {
              "kind": "p",
              "text": "[[[P = 12k]]]",
            },
            {
              "kind": "p",
              "text": "Les trois côtés doivent tous être additionnés, parce que le périmètre parcourt tout le contour. Omettre un côté donne une distance plus courte qui n'est pas le périmètre. Le périmètre varie directement avec [[k]], donc doubler [[k]] double le périmètre, contrairement à l'aire, qui quadruple. Le périmètre est en unités linéaires, jamais en unités carrées. Pour un triangle rectangle quelconque, utilisez la <a href=\"/right-triangle-perimeter-calculator/\">calculatrice de périmètre de triangle rectangle</a>.",
            },
            {
              "kind": "p",
              "text": "Prenons [[k = 3]] :",
            },
            {
              "kind": "p",
              "text": "[[[P = 12 \\times 3]]]",
            },
            {
              "kind": "p",
              "text": "[[[P = 36 \\text{ units}]]]",
            },
          ],
          "image": {
            "src": "three-four-five-perimeter.svg",
            "alt": "Schéma du périmètre d'un triangle 3-4-5 montrant que P égale 3k plus 4k plus 5k égale 12k, avec k égal à 2 donnant 24 unités",
            "caption": "Périmètre : P = 3k + 4k + 5k = 12k, et k = 2 donne 24 unités.",
          },
        },
        "sec-find-k": {
          "h2": "Comment trouver le facteur d'échelle à partir d'un côté connu",
          "blocks": [
            {
              "kind": "p",
              "text": "Divisez un côté connu par sa part du rapport.",
            },
            {
              "kind": "p",
              "text": "La calculatrice accepte directement [[k]], donc ces équations sont des calculs manuels qui vous aident à trouver [[k]] quand vous connaissez déjà un côté. Divisez le côté connu par le nombre que ce côté représente dans le rapport 3:4:5. Si le petit côté de l'angle droit est connu :",
            },
            {
              "kind": "p",
              "text": "[[[k = \\frac{a}{3}]]]",
            },
            {
              "kind": "p",
              "text": "Si le grand côté de l'angle droit est connu :",
            },
            {
              "kind": "p",
              "text": "[[[k = \\frac{b}{4}]]]",
            },
            {
              "kind": "p",
              "text": "Si l'hypoténuse est connue :",
            },
            {
              "kind": "p",
              "text": "[[[k = \\frac{c}{5}]]]",
            },
            {
              "kind": "p",
              "text": "Trois exemples courts : le petit côté de l'angle droit [[a = 12]] donne [[k = 12 / 3 = 4]] ; le grand côté de l'angle droit [[b = 20]] donne [[k = 20 / 4 = 5]] ; l'hypoténuse [[c = 30]] donne [[k = 30 / 5 = 6]]. Une fois [[k]] obtenu, saisissez-le dans la calculatrice. La calculatrice elle-même n'accepte pas une longueur de côté pour trouver [[k]] à votre place.",
            },
          ],
        },
        "sec-step-example": {
          "h2": "Exemple résolu pas à pas de la mise à l'échelle d'un triangle 3-4-5",
          "blocks": [
            {
              "kind": "p",
              "text": "Facteur d'échelle k = 2, traité du début à la fin.",
            },
            {
              "kind": "p",
              "text": "Partez de [[k = 2]] et trouvez chaque mesure du triangle mis à l'échelle, une formule à la fois. Chaque étape utilise une formule des sections ci-dessus, et le tableau récapitulatif à la fin rassemble les résultats.",
            },
            {
              "kind": "steps",
              "steps": [
                "Trouvez le premier côté de l'angle droit : [[a = 3k = 3 \\times 2 = 6]].",
                "Trouvez le deuxième côté de l'angle droit : [[b = 4k = 4 \\times 2 = 8]].",
                "Trouvez l'hypoténuse : [[c = 5k = 5 \\times 2 = 10]].",
                "Trouvez l'aire : [[A = 6k^2 = 6 \\times 4 = 24]] unités carrées.",
                "Trouvez le périmètre : [[P = 12k = 12 \\times 2 = 24]] unités.",
              ],
            },
            {
              "kind": "p",
              "text": "Le nouveau triangle conserve les proportions 3:4:5 d'origine : 6, 8 et 10 valent tous le double de 3, 4 et 5. Vérifiez l'angle droit avec Pythagore : [[6^2 + 8^2 = 36 + 64 = 100 = 10^2]]. L'aire et le périmètre partagent ici le nombre 24, mais ils mesurent des choses différentes.",
            },
          ],
          "table": {
            "headers": [
              "Mesure",
              "Valeur",
            ],
            "rows": [
              [
                "Premier côté de l'angle droit a",
                "6",
              ],
              [
                "Deuxième côté de l'angle droit b",
                "8",
              ],
              [
                "Hypoténuse c",
                "10",
              ],
              [
                "Aire A",
                "24 unités carrées",
              ],
              [
                "Périmètre P",
                "24 unités",
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
              "text": "Exemple 1 : triangle d'origine, k = 1",
            },
            {
              "kind": "p",
              "text": "Donné : [[k = 1]]. Côtés : [[a = 3]], [[b = 4]], [[c = 5]]. Aire : [[A = 6(1^2) = 6]] unités carrées. Périmètre : [[P = 12(1) = 12]] unités.",
            },
            {
              "kind": "h3",
              "text": "Exemple 2 : facteur d'échelle de 2",
            },
            {
              "kind": "p",
              "text": "Donné : [[k = 2]]. Côtés : [[a = 6]], [[b = 8]], [[c = 10]]. Aire : [[A = 6(2^2) = 24]] unités carrées. Périmètre : [[P = 12(2) = 24]] unités. Doubler [[k]] double les côtés et le périmètre, et quadruple l'aire.",
            },
            {
              "kind": "h3",
              "text": "Exemple 3 : facteur d'échelle de 3",
            },
            {
              "kind": "p",
              "text": "Donné : [[k = 3]]. Côtés : [[a = 9]], [[b = 12]], [[c = 15]]. Aire : [[A = 6(3^2) = 54]] unités carrées. Périmètre : [[P = 12(3) = 36]] unités.",
            },
            {
              "kind": "h3",
              "text": "Exemple 4 : facteur d'échelle de 5",
            },
            {
              "kind": "p",
              "text": "Donné : [[k = 5]]. Côtés : [[a = 15]], [[b = 20]], [[c = 25]]. Aire : [[A = 6(5^2) = 150]] unités carrées. Périmètre : [[P = 12(5) = 60]] unités. Ce triangle 15-20-25 est une taille courante dans les tracés de construction.",
            },
            {
              "kind": "h3",
              "text": "Exemple 5 : facteur d'échelle de 0.5",
            },
            {
              "kind": "p",
              "text": "Donné : [[k = 0.5]]. Côtés : [[a = 1.5]], [[b = 2]], [[c = 2.5]]. Aire : [[A = 6(0.5^2) = 1.5]] unités carrées. Périmètre : [[P = 12(0.5) = 6]] unités. Un facteur d'échelle inférieur à 1 réduit le triangle.",
            },
            {
              "kind": "h3",
              "text": "Exemple 6 : facteur d'échelle de 1.5",
            },
            {
              "kind": "p",
              "text": "Donné : [[k = 1.5]]. Côtés : [[a = 4.5]], [[b = 6]], [[c = 7.5]]. Aire : [[A = 6(1.5^2) = 13.5]] unités carrées. Périmètre : [[P = 12(1.5) = 18]] unités. Les facteurs d'échelle décimaux fonctionnent exactement comme les facteurs entiers.",
            },
            {
              "kind": "h3",
              "text": "Exemple 7 : facteur d'échelle de 4",
            },
            {
              "kind": "p",
              "text": "Donné : [[k = 4]]. Côtés : [[a = 12]], [[b = 16]], [[c = 20]]. Aire : [[A = 6(4^2) = 96]] unités carrées. Périmètre : [[P = 12(4) = 48]] unités.",
            },
            {
              "kind": "h3",
              "text": "Exemple 8 : facteur d'échelle de 10",
            },
            {
              "kind": "p",
              "text": "Donné : [[k = 10]]. Côtés : [[a = 30]], [[b = 40]], [[c = 50]]. Aire : [[A = 6(10^2) = 600]] unités carrées. Périmètre : [[P = 12(10) = 120]] unités. L'aire a été multipliée par 100, tandis que les côtés ont été multipliés par 10.",
            },
            {
              "kind": "p",
              "text": "Dans les huit exemples, le schéma ne change jamais : les côtés croissent avec [[k]], le périmètre croît avec [[k]] et l'aire croît avec [[k]] au carré.",
            },
          ],
        },
        "sec-right-angle": {
          "h2": "Pourquoi le triangle 3-4-5 garde-t-il toujours un angle de 90 degrés ?",
          "blocks": [
            {
              "kind": "p",
              "text": "La mise à l'échelle ne rompt jamais la relation de Pythagore.",
            },
            {
              "kind": "p",
              "text": "Les côtés mis à l'échelle sont [[3k]], [[4k]] et [[5k]]. Appliquons-leur le théorème de Pythagore :",
            },
            {
              "kind": "p",
              "text": "[[[(3k)^2 + (4k)^2 = (5k)^2]]]",
            },
            {
              "kind": "p",
              "text": "Développons chaque carré :",
            },
            {
              "kind": "p",
              "text": "[[[9k^2 + 16k^2 = 25k^2]]]",
            },
            {
              "kind": "p",
              "text": "Les deux membres valent [[25k^2]], donc la relation est vérifiée pour chaque [[k]] positif. Le facteur [[k^2]] apparaît des deux côtés, et c'est pourquoi la mise à l'échelle ne peut pas changer l'angle. Les deux angles aigus restent à environ 36.87° et 53.13°, et leur somme reste à 90°, donc le troisième angle reste à exactement 90°.",
            },
            {
              "kind": "p",
              "text": "C'est la même idée que la similitude : chaque triangle 3-4-5 mis à l'échelle est semblable à l'original, avec des angles correspondants égaux et des côtés proportionnels. Un triangle de côtés 6, 8, 10 a les mêmes angles qu'un triangle de côtés 3, 4, 5.",
            },
          ],
        },
        "sec-construction": {
          "h2": "Comment utiliser la règle 3-4-5 pour vérifier un angle droit",
          "blocks": [
            {
              "kind": "p",
              "text": "Marquez 3, mesurez 4 et vérifiez que la diagonale vaut 5.",
            },
            {
              "kind": "p",
              "text": "Les constructeurs utilisent la méthode 3-4-5 pour vérifier un angle de 90 degrés sans équerre. Partez du coin et marquez 3 unités le long d'un côté, puis marquez 4 unités le long du côté adjacent. Mesurez la distance entre les deux extrémités marquées : si elle vaut 5 unités, l'angle mesure 90 degrés, dans la limite de la précision des mesures.",
            },
            {
              "kind": "p",
              "text": "Un exemple pratique utilise les pieds : 3 pieds dans une direction, 4 pieds dans la direction adjacente et une diagonale de 5 pieds. La vérification est [[3^2 + 4^2 = 5^2]], puisque [[9 + 16 = 25]]. Si la diagonale dépasse 5 pieds, le coin est plus ouvert que 90 degrés ; si elle est plus courte, il est plus fermé.",
            },
            {
              "kind": "p",
              "text": "Des multiples plus grands conviennent mieux aux grands tracés, parce qu'une base plus longue rend une petite erreur de marquage plus faible en proportion de la mesure. Utilisez 6-8-10, 9-12-15, 12-16-20 ou 15-20-25 pieds, en gardant la même unité pour les trois mesures.",
            },
            {
              "kind": "p",
              "text": "La méthode vérifie la relation d'angle droit quand les mesures sont précises. Les erreurs, les surfaces irrégulières, l'affaissement du mètre ruban et les imprécisions de marquage peuvent influencer le résultat, donc ne prétendez pas qu'elle garantit une précision de construction parfaite. Gardez le ruban à niveau et tendu, et répétez la vérification depuis l'autre coin quand le tracé le permet.",
            },
          ],
          "image": {
            "src": "three-four-five-construction.svg",
            "alt": "Tracé de construction montrant un coin avec 3 pieds marqués dans une direction, 4 pieds dans la direction adjacente et une diagonale de 5 pieds avec un marqueur d'angle droit",
            "caption": "Marquez 3 pieds dans un sens et 4 pieds dans l'autre : une diagonale de 5 pieds signifie un coin d'équerre.",
          },
        },
        "sec-applications": {
          "h2": "Applications du triangle 3-4-5 dans la construction",
          "blocks": [
            {
              "kind": "p",
              "text": "La règle 3-4-5 se rencontre partout où un angle droit compte.",
            },
            {
              "kind": "p",
              "text": "Vérifier les angles droits est l'usage principal : un constructeur marque 3 et 4 unités à partir d'un coin et vérifie la diagonale de 5 unités avant de fixer un cadre en place. Le tracé des fondations utilise la même vérification à chaque coin, pour que les murs partent d'équerre.",
            },
            {
              "kind": "p",
              "text": "Le tracé des plans d'étage, la vérification des pièces d'équerre, la construction de terrasses, la pose de patios et la pose de carrelage reposent tous sur des angles droits, et la méthode fonctionne pour chacun d'eux à l'échelle qui convient au chantier. Le tracé des clôtures, la menuiserie, l'aménagement paysager et l'arpentage utilisent la même vérification pour les angles droits.",
            },
            {
              "kind": "p",
              "text": "Utilisez des mesures réalistes pour le chantier, comme 3-4-5 pieds pour un petit cadre ou 9-12-15 pieds pour un coin de fondation. La méthode est une vérification pratique, pas un substitut aux exigences professionnelles d'arpentage ou de construction.",
            },
          ],
        },
        "sec-similar": {
          "h2": "Relation entre les triangles semblables et le rapport 3-4-5",
          "blocks": [
            {
              "kind": "p",
              "text": "Chaque triangle 3-4-5 mis à l'échelle est semblable à l'original.",
            },
            {
              "kind": "p",
              "text": "Les triangles semblables ont la même forme mais des tailles différentes : leurs angles correspondants sont égaux et leurs côtés correspondants sont proportionnels. Les triangles 3-4-5 et 6-8-10 ont des angles identiques, environ 36.87°, 53.13° et 90°, et chaque côté du second vaut exactement le double du côté correspondant du premier.",
            },
            {
              "kind": "p",
              "text": "Le facteur d'échelle change la taille tandis que la forme reste inchangée. Tous les rapports des côtés restent 3:4:5, donc [[a : b : c = 3 : 4 : 5]] vaut pour l'original et pour chaque copie mise à l'échelle. C'est pourquoi la calculatrice peut décrire n'importe quel triangle 3-4-5 mis à l'échelle avec un seul nombre, [[k]].",
            },
          ],
        },
        "sec-vs-special": {
          "h2": "Différence entre les triangles 3-4-5, 45-45-90 et 30-60-90",
          "blocks": [
            {
              "kind": "p",
              "text": "Trois triangles rectangles, trois rapports de côtés différents.",
            },
            {
              "kind": "p",
              "text": "Un triangle 3-4-5 n'est pas automatiquement un triangle 45-45-90 ou 30-60-90. Les trois sont des triangles rectangles, mais leurs angles et leurs rapports de côtés diffèrent, donc leurs formules ne peuvent pas être échangées. Le triangle 3-4-5 a des côtés de l'angle droit inégaux et des côtés entiers, le triangle 45-45-90 est isocèle avec une hypoténuse de [[a\\sqrt{2}]], et le triangle 30-60-90 a une hypoténuse égale au double de son petit côté. La <a href=\"/special-right-triangle-calculator/\">calculatrice de triangle rectangle remarquable</a> couvre les cas 45-45-90 et 30-60-90, tandis que la <a href=\"/5-12-13-triangle-calculator/\">calculatrice de triangle 5-12-13</a> couvre un autre triplet de Pythagore.",
            },
            {
              "kind": "p",
              "text": "Le tableau ci-dessous compare les trois triangles côte à côte. Vérifiez d'abord les angles, puis choisissez le rapport qui leur correspond : un mauvais rapport donne une mauvaise hypoténuse et une mauvaise aire.",
            },
          ],
          "table": {
            "headers": [
              "Caractéristique",
              "3-4-5",
              "45-45-90",
              "30-60-90",
            ],
            "rows": [
              [
                "Rapport des côtés",
                "3:4:5",
                "1:1:√2",
                "1:√3:2",
              ],
              [
                "Angles",
                "36.87°, 53.13°, 90°",
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
                "Hypoténuse",
                "5k",
                "a√2",
                "2a",
              ],
              [
                "Propriété principale",
                "Triplet de Pythagore",
                "Triangle rectangle isocèle",
                "Rapport d'angles remarquable",
              ],
              [
                "Fonction de la calculatrice",
                "Mise à l'échelle",
                "Calculs de triangle remarquable",
                "Calculs de triangle remarquable",
              ],
            ],
          },
          "image": {
            "src": "three-four-five-triples.svg",
            "alt": "Comparaison des triplets de Pythagore 3-4-5, 6-8-10 et 5-12-13, montrant que 6-8-10 est un 3-4-5 mis à l'échelle, tandis que 5-12-13 est un triplet différent",
            "caption": "6-8-10 est un 3-4-5 mis à l'échelle, tandis que 5-12-13 est un autre triplet de Pythagore.",
          },
        },
        "sec-mistakes": {
          "h2": "Erreurs fréquentes avec la calculatrice de triangle 3-4-5",
          "blocks": [
            {
              "kind": "p",
              "text": "Quatorze erreurs reviennent sans cesse dans les problèmes 3-4-5.",
            },
            {
              "kind": "steps",
              "steps": [
                "Ne multiplier qu'un seul côté par le facteur d'échelle : avec [[k = 2]], les côtés sont 6, 8 et 10, pas 6, 4 et 5. Mettez les trois côtés à l'échelle avec le même [[k]].",
                "Oublier de mettre les trois côtés à l'échelle de la même façon : ne mettre à l'échelle que les côtés de l'angle droit rompt le rapport et l'angle droit. Appliquez le même [[k]] à chaque côté.",
                "Prendre 5 pour un côté de l'angle droit au lieu de l'hypoténuse : 5 est le côté le plus long et se trouve en face de l'angle de 90°. [[c = 5k]] est toujours l'hypoténuse.",
                "Confondre le facteur d'échelle avec une longueur de côté : [[k]] est le multiplicateur, pas un côté. Avec [[k = 2]], les côtés sont 6, 8 et 10.",
                "Utiliser zéro comme facteur d'échelle valide : [[k = 0]] rend les trois côtés nuls, une figure dégénérée, pas un triangle. [[k]] doit être supérieur à zéro.",
                "Saisir un facteur d'échelle négatif : un [[k]] négatif donne des longueurs de côtés négatives, qui ne peuvent pas décrire un triangle. Saisissez uniquement un [[k]] positif.",
                "Oublier de mettre k au carré dans la formule de l'aire : l'aire croît avec [[k]] au carré. Avec [[k = 3]], [[A = 6 \\times 9 = 54]], pas 18.",
                "Confondre l'aire et le périmètre : l'aire est en unités carrées et le périmètre en unités linéaires. Avec [[k = 2]], les deux valent 24, mais ils mesurent des choses différentes.",
                "N'additionner que deux côtés pour calculer le périmètre : avec [[k = 2]], [[6 + 8 = 14]] oublie l'hypoténuse. Additionnez les trois côtés.",
                "Mélanger les unités de mesure : un côté en pieds et une diagonale en pouces ne peuvent pas être combinés directement. Convertissez toutes les mesures dans une seule unité avant de calculer.",
                "Supposer que seuls 3, 4 et 5 fonctionnent : toute copie mise à l'échelle, comme 6-8-10 ou 9-12-15, est un triangle 3-4-5 valide.",
                "Supposer que chaque triangle rectangle suit le rapport 3:4:5 : la plupart des triangles rectangles ont d'autres rapports. Vérifiez le rapport avant d'utiliser les formules.",
                "Confondre un triangle 3-4-5 avec un triangle 45-45-90 : un triangle 3-4-5 a des angles d'environ 36.87° et 53.13°, pas deux angles de 45°.",
                "Arrondir les mesures sans raison : arrondir tôt propage les erreurs dans les étapes suivantes. Arrondissez seulement la réponse finale.",
              ],
            },
          ],
        },
        "sec-verify": {
          "h2": "Comment vérifier un triangle 3-4-5 mis à l'échelle",
          "blocks": [
            {
              "kind": "p",
              "text": "Quatre vérifications rapides détectent presque toutes les erreurs.",
            },
            {
              "kind": "h3",
              "text": "Vérification 1 : rapport des côtés",
            },
            {
              "kind": "p",
              "text": "Vérifiez [[a : b : c = 3 : 4 : 5]]. Ici, [[6 : 8 : 10]] se divise par 2 pour donner [[3 : 4 : 5]], donc la vérification réussit. Si les côtés ne se réduisent pas à 3:4:5, ce n'est pas un triangle 3-4-5 mis à l'échelle.",
            },
            {
              "kind": "h3",
              "text": "Vérification 2 : théorème de Pythagore",
            },
            {
              "kind": "p",
              "text": "Vérifiez [[a^2 + b^2 = c^2]]. Ici, [[6^2 + 8^2 = 36 + 64 = 100]], et [[10^2 = 100]], donc le théorème est vérifié. Une valeur fausse pour n'importe quel côté rompt cette égalité.",
            },
            {
              "kind": "h3",
              "text": "Vérification 3 : cohérence du facteur d'échelle",
            },
            {
              "kind": "p",
              "text": "Vérifiez [[\\frac{a}{3} = \\frac{b}{4} = \\frac{c}{5} = k]]. Ici, chaque division donne 2, donc [[k = 2]] à partir des trois côtés. Si les trois divisions diffèrent, au moins un côté est faux.",
            },
            {
              "kind": "h3",
              "text": "Vérification 4 : ordre des côtés",
            },
            {
              "kind": "p",
              "text": "Vérifiez [[a < b < c]]. Ici, [[6 < 8 < 10]], donc l'ordre est respecté. Si l'hypoténuse supposée n'est pas le côté le plus long, les étiquettes sont mélangées.",
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
              "text": "Exercice 1 : mise à l'échelle avec k = 2",
            },
            {
              "kind": "p",
              "text": "Mettez un triangle 3-4-5 à l'échelle avec [[k = 2]]. Trouvez les trois longueurs des côtés, l'aire et le périmètre.",
            },
            {
              "kind": "h3",
              "text": "Exercice 2 : mise à l'échelle avec k = 4",
            },
            {
              "kind": "p",
              "text": "Mettez un triangle 3-4-5 à l'échelle avec [[k = 4]]. Trouvez les trois longueurs des côtés, l'aire et le périmètre.",
            },
            {
              "kind": "h3",
              "text": "Exercice 3 : aire avec k = 3",
            },
            {
              "kind": "p",
              "text": "Trouvez l'aire d'un triangle 3-4-5 mis à l'échelle avec [[k = 3]], en unités carrées.",
            },
            {
              "kind": "h3",
              "text": "Exercice 4 : périmètre avec k = 5",
            },
            {
              "kind": "p",
              "text": "Trouvez le périmètre d'un triangle 3-4-5 mis à l'échelle avec [[k = 5]], en unités.",
            },
            {
              "kind": "h3",
              "text": "Exercice 5 : trouver k à partir de a = 15",
            },
            {
              "kind": "p",
              "text": "Un triangle 3-4-5 mis à l'échelle a un petit côté de l'angle droit de 15. Trouvez [[k]] et les deux autres côtés.",
            },
            {
              "kind": "h3",
              "text": "Exercice 6 : trouver k à partir de b = 24",
            },
            {
              "kind": "p",
              "text": "Un triangle 3-4-5 mis à l'échelle a un grand côté de l'angle droit de 24. Trouvez [[k]] et les deux autres côtés.",
            },
            {
              "kind": "h3",
              "text": "Exercice 7 : trouver k à partir de c = 35",
            },
            {
              "kind": "p",
              "text": "Un triangle 3-4-5 mis à l'échelle a une hypoténuse de 35. Trouvez [[k]] et les deux côtés de l'angle droit.",
            },
            {
              "kind": "h3",
              "text": "Exercice 8 : vérifier 12, 16 et 20",
            },
            {
              "kind": "p",
              "text": "Vérifiez si 12, 16 et 20 forment un triangle 3-4-5 mis à l'échelle, en utilisant le théorème de Pythagore et le rapport des côtés. Si oui, indiquez le facteur d'échelle.",
            },
            {
              "kind": "h3",
              "text": "Réponses des exercices",
            },
            {
              "kind": "p",
              "text": "Réponse 1 : [[a = 6]], [[b = 8]], [[c = 10]], [[A = 24]] unités carrées, [[P = 24]] unités.",
            },
            {
              "kind": "p",
              "text": "Réponse 2 : [[a = 12]], [[b = 16]], [[c = 20]], [[A = 96]] unités carrées, [[P = 48]] unités.",
            },
            {
              "kind": "p",
              "text": "Réponse 3 : [[A = 6(3^2) = 54]] unités carrées.",
            },
            {
              "kind": "p",
              "text": "Réponse 4 : [[P = 12(5) = 60]] unités.",
            },
            {
              "kind": "p",
              "text": "Réponse 5 : [[k = 15 / 3 = 5]], donc [[b = 20]] et [[c = 25]].",
            },
            {
              "kind": "p",
              "text": "Réponse 6 : [[k = 24 / 4 = 6]], donc [[a = 18]] et [[c = 30]].",
            },
            {
              "kind": "p",
              "text": "Réponse 7 : [[k = 35 / 5 = 7]], donc [[a = 21]] et [[b = 28]].",
            },
            {
              "kind": "p",
              "text": "Réponse 8 : [[12^2 + 16^2 = 144 + 256 = 400 = 20^2]], et [[12 : 16 : 20]] se divise par 4 pour donner [[3 : 4 : 5]], donc oui, avec [[k = 4]].",
            },
          ],
        },
      },
      "relatedHeading": "Calculatrices de triangles rectangles associées",
      "relatedIntro": "Chaque calculatrice ci-dessous traite une tâche différente sur les triangles rectangles, donc choisissez l'outil qui correspond à la mesure dont vous avez besoin.",
      "relatedItems": [
        "Calculatrice de triangle rectangle",
        "Calculatrice de triplets de Pythagore",
        "Calculatrice de triangle 5-12-13",
        "Calculatrice de triangle rectangle remarquable",
        "Calculatrice d'aire de triangle rectangle",
        "Calculatrice de périmètre de triangle rectangle",
      ],
      "faqHeading": "Questions fréquentes",
      "faqs": [
        {
          "question": "Qu'est-ce qu'un triangle 3-4-5 ?",
          "answer": "Un triangle 3-4-5 est un triangle rectangle dont les longueurs des côtés suivent le rapport [[3 : 4 : 5]]. Les côtés de longueur 3 et 4 sont les côtés de l'angle droit, qui se rencontrent à l'angle de 90 degrés, et le côté de longueur 5 est l'hypoténuse. C'est le plus petit triplet de Pythagore.",
        },
        {
          "question": "Pourquoi un triangle 3-4-5 forme-t-il un angle droit ?",
          "answer": "Ses côtés vérifient le théorème de Pythagore : [[3^2 + 4^2 = 5^2]], puisque [[9 + 16 = 25]]. Cette égalité ne vaut que pour les triangles rectangles, donc l'angle opposé au côté de longueur 5 doit mesurer 90 degrés. La mise à l'échelle conserve l'égalité, donc chaque copie mise à l'échelle conserve l'angle droit.",
        },
        {
          "question": "Qu'est-ce que la règle du triangle 3-4-5 ?",
          "answer": "La règle est que des longueurs de côtés dans le rapport [[3 : 4 : 5]] forment toujours un triangle rectangle. Les constructeurs l'utilisent pour vérifier les angles droits : marquez 3 unités dans un sens, 4 unités dans l'autre sens, et si la diagonale vaut 5 unités, le coin est d'équerre, dans la limite de la précision des mesures.",
        },
        {
          "question": "Comment fonctionne la calculatrice de triangle 3-4-5 ?",
          "answer": "Saisissez un facteur d'échelle positif [[k]] et cliquez sur Calculer. La calculatrice multiplie les côtés d'origine par [[k]] pour donner [[a = 3k]], [[b = 4k]] et [[c = 5k]], puis calcule l'aire [[A = 6k^2]] et le périmètre [[P = 12k]]. Utilisez Réinitialiser pour effacer le champ.",
        },
        {
          "question": "Qu'est-ce que le facteur d'échelle dans un triangle 3-4-5 ?",
          "answer": "Le facteur d'échelle [[k]] est le nombre qui multiplie les trois longueurs des côtés d'origine par le même montant. Avec [[k = 1]], vous obtenez le triangle d'origine, un [[k]] plus grand l'agrandit et un [[k]] compris entre 0 et 1 le réduit. La forme et les angles restent les mêmes.",
        },
        {
          "question": "Comment calculer les côtés d'un triangle 3-4-5 mis à l'échelle ?",
          "answer": "Multipliez chaque partie du rapport par [[k]] : [[a = 3k]], [[b = 4k]] et [[c = 5k]]. Avec [[k = 2]], les côtés sont 6, 8 et 10. Chaque côté doit utiliser le même [[k]], sinon le rapport se rompt et le triangle perd son angle droit.",
        },
        {
          "question": "Comment calculer son aire ?",
          "answer": "Utilisez les côtés de l'angle droit dans [[A = \\frac{ab}{2}]], ce qui se simplifie en [[A = 6k^2]] pour un triangle 3-4-5 mis à l'échelle. Avec [[k = 3]], [[A = 6 \\times 9 = 54]] unités carrées. L'aire est toujours en unités carrées, et elle croît avec le carré de [[k]].",
        },
        {
          "question": "Comment calculer son périmètre ?",
          "answer": "Additionnez les trois côtés avec [[P = a + b + c]], ce qui se simplifie en [[P = 12k]]. Avec [[k = 3]], [[P = 36]] unités. Le périmètre croît directement avec [[k]], donc doubler [[k]] double le périmètre. La réponse est en unités linéaires, pas en unités carrées.",
        },
        {
          "question": "Peut-on utiliser 6-8-10 au lieu de 3-4-5 ?",
          "answer": "Oui. Les côtés 6, 8 et 10 sont le triangle 3-4-5 mis à l'échelle par [[k = 2]], donc ils forment la même forme avec les mêmes angles et le même angle droit. Toute copie mise à l'échelle, comme 9-12-15 ou 15-20-25, fonctionne de la même façon.",
        },
        {
          "question": "Comment les constructeurs utilisent-ils la règle 3-4-5 ?",
          "answer": "Un constructeur marque 3 pieds le long d'un côté à partir d'un coin et 4 pieds le long du côté adjacent, puis mesure la diagonale entre les marques. Si elle indique 5 pieds, le coin est d'équerre. Des multiples plus grands, comme 6-8-10 ou 9-12-15 pieds, conviennent aux grands tracés.",
        },
        {
          "question": "Le facteur d'échelle peut-il être un nombre décimal ?",
          "answer": "Oui, toute valeur réelle positive de [[k]] donne un triangle 3-4-5 mis à l'échelle valide. Avec [[k = 0.5]], les côtés sont 1.5, 2 et 2.5, et avec [[k = 1.5]], ils sont 4.5, 6 et 7.5. Zéro et les valeurs négatives ne donnent pas de triangles valides.",
        },
        {
          "question": "Chaque triangle 3-4-5 est-il un triplet de Pythagore ?",
          "answer": "Oui, chaque triangle 3-4-5 mis à l'échelle avec un facteur d'échelle entier est un triplet de Pythagore, parce que ses côtés sont des nombres entiers qui vérifient [[a^2 + b^2 = c^2]]. Avec un facteur d'échelle décimal, les côtés vérifient toujours le théorème. Le triplet 5-12-13 est un autre triplet de Pythagore.",
        },
      ],
    },
};
