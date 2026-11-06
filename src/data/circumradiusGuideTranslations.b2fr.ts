// circumradiusGuideTranslations.bfr.ts: Right Triangle Circumradius
// Guide (Page 35 of 45) translation.
export const CIRCUMR_B2_FR = {
  "fr": {
      "tocHeading": "Contenu du guide",
      "tocItems": {
        "sec-intro": "Calculateur de rayon circonscrit d'un triangle rectangle",
        "sec-calculate": "Calculer le rayon circonscrit d'un triangle rectangle",
        "sec-what-circumradius": "Qu'est-ce que le rayon circonscrit d'un triangle rectangle ?",
        "sec-circumcircle": "Qu'est-ce qu'un cercle circonscrit en géométrie du triangle rectangle ?",
        "sec-formula": "Formule du rayon circonscrit d'un triangle rectangle",
        "sec-why-diameter": "Pourquoi l'hypoténuse est-elle le diamètre du cercle circonscrit ?",
        "sec-circumcenter": "Qu'est-ce que le centre du cercle circonscrit d'un triangle rectangle ?",
        "sec-how-to-use": "Comment utiliser le calculateur de rayon circonscrit d'un triangle rectangle",
        "sec-step-example": "Exemple étape par étape pour trouver le rayon circonscrit",
        "sec-diagram": "Schéma du cercle circonscrit d'un triangle rectangle expliqué",
        "sec-proof": "Pourquoi la formule du rayon circonscrit fonctionne-t-elle ?",
        "sec-thales": "Comprendre le théorème de Thalès et le cercle circonscrit",
        "sec-examples": "Exemples détaillés de calcul du rayon circonscrit d'un triangle rectangle",
        "sec-legs-known": "Comment trouver le rayon circonscrit quand les deux côtés de l'angle droit sont connus",
        "sec-diameter": "Relation entre le rayon circonscrit et le diamètre",
        "sec-vs-inradius": "Rayon circonscrit ou rayon inscrit d'un triangle rectangle",
        "sec-pythagoras": "Relation entre le rayon circonscrit et le théorème de Pythagore",
        "sec-verify": "Comment vérifier votre calcul de rayon circonscrit",
        "sec-properties": "Propriétés importantes du rayon circonscrit dans les triangles rectangles",
        "sec-mistakes": "Erreurs fréquentes lors du calcul du rayon circonscrit",
        "sec-applications": "Applications pratiques du rayon circonscrit",
        "sec-practice": "Exercices avec réponses",
        "sec-related": "Découvrir les calculateurs de triangle rectangle associés",
        "sec-faq": "Questions fréquemment posées",
      },
      "sections": {
        "sec-intro": {
          "h2": "Calculateur de rayon circonscrit d'un triangle rectangle",
          "blocks": [
            {
              "kind": "p",
              "text": "Trouvez le rayon circonscrit d'un triangle rectangle en une seule division : divisez l'hypoténuse par deux.",
            },
            {
              "kind": "p",
              "text": "Le rayon circonscrit est le rayon du cercle qui passe par les trois sommets du triangle, appelé cercle circonscrit. L'hypoténuse c est le côté opposé à l'angle droit, et c'est la seule mesure dont ce calculateur a besoin, car l'hypoténuse est aussi le diamètre du cercle circonscrit. La formule est [[R = \\frac{c}{2}]], où [[R]] est le rayon circonscrit et [[c]] est l'hypoténuse complète.",
            },
            {
              "kind": "p",
              "text": "Par exemple, si [[c = 10]] cm, alors [[R = \\frac{10}{2} = 5]] cm. Ces 5 cm correspondent à la distance entre le centre du cercle circonscrit et chaque sommet du triangle. La même distance atteint le sommet A, le sommet B et le sommet C, et c'est exactement ce qui fait que le cercle passe par les trois.",
            },
          ],
        },
        "sec-calculate": {
          "h2": "Calculer le rayon circonscrit d'un triangle rectangle",
          "blocks": [
            {
              "kind": "p",
              "text": "Le calculateur de cette page comporte un seul champ de saisie, pour l'hypoténuse c. L'hypoténuse est le côté opposé à l'angle droit, et c'est aussi le côté le plus long du triangle. Mesurez-la d'une extrémité à l'autre, dans l'unité que vous utilisez, puis saisissez ce seul nombre.",
            },
            {
              "kind": "p",
              "text": "L'hypoténuse seule suffit, car le rayon circonscrit ne dépend de rien d'autre. C'est pourquoi le calculateur n'a besoin ni d'une deuxième ni d'une troisième saisie.",
            },
            {
              "kind": "p",
              "text": "Saisissez une longueur positive. Une hypoténuse nulle ou négative ne décrit aucun triangle réel, et le calculateur n'a alors rien de sensé à diviser par deux. Gardez une unité cohérente avec votre problème : si c est en centimètres, la réponse est en centimètres, et si c est en mètres, la réponse est en mètres.",
            },
            {
              "kind": "p",
              "text": "Cliquez sur Calculer le rayon circonscrit R pour voir le résultat, et utilisez Réinitialiser pour effacer le champ avant un nouveau problème. Lisez la réponse comme un rayon, et non comme un diamètre. Si le calculateur affiche 5 cm pour une hypoténuse de 10 cm, le cercle mesure 10 cm d'un bord à l'autre, et 5 cm est la distance de son centre à son bord.",
            },
          ],
        },
        "sec-what-circumradius": {
          "h2": "Qu'est-ce que le rayon circonscrit d'un triangle rectangle ?",
          "blocks": [
            {
              "kind": "p",
              "text": "Le rayon circonscrit d'un triangle rectangle est le rayon de son cercle circonscrit, le cercle tracé par les trois sommets. Prenez le triangle ABC avec l'angle droit en C. Tracez un cercle qui passe exactement par A, B et C. La distance entre le centre de ce cercle et l'un quelconque des trois sommets est le rayon circonscrit, noté [[R]].",
            },
            {
              "kind": "p",
              "text": "Le centre du cercle s'appelle le centre du cercle circonscrit, noté [[O]]. Dans un triangle rectangle, [[O]] se trouve au milieu de l'hypoténuse AB. Comme [[O]] est le centre, les distances de [[O]] aux trois sommets sont toutes égales, donc [[AO = BO = CO = R]]. Un seul nombre, [[R]], décrit les trois distances à la fois.",
            },
            {
              "kind": "p",
              "text": "Un exemple simple rend la notion concrète. Dans un triangle 6-8-10, l'hypoténuse mesure 10 cm, donc le rayon circonscrit mesure 5 cm. Le centre se trouve à 5 cm de A, à 5 cm de B et à 5 cm de C. Les côtés de l'angle droit, 6 cm et 8 cm, sont des côtés du triangle, et non des rayons, et aucun des deux n'est égal au rayon circonscrit ici.",
            },
          ],
          "image": {
            "src": "circumradius-main-circumcircle.svg",
            "alt": "Triangle rectangle ABC dans son cercle circonscrit avec le centre O au milieu de l'hypoténuse AB",
            "caption": "Triangle ABC dans son cercle circonscrit : O est le centre, et AO, BO et CO sont chacun égaux à R.",
          },
        },
        "sec-circumcircle": {
          "h2": "Qu'est-ce qu'un cercle circonscrit en géométrie du triangle rectangle ?",
          "blocks": [
            {
              "kind": "p",
              "text": "Un cercle circonscrit est un cercle qui passe par chaque sommet d'un polygone. Pour un triangle, cela signifie que le cercle passe par les trois coins, et rien d'autre n'est exigé de lui. Chaque triangle possède exactement un cercle circonscrit, car trois points non alignés déterminent un seul cercle.",
            },
            {
              "kind": "p",
              "text": "Dans un triangle rectangle, le cercle circonscrit a une forme particulière. Le triangle tient dans le cercle avec son hypoténuse tendue en ligne droite au milieu, d'un côté du cercle à l'autre. Le troisième sommet, le sommet C de l'angle droit, se trouve sur le cercle, entre les deux autres. Aucune partie du triangle ne dépasse du cercle, et le cercle est le plus petit qui puisse passer par les trois sommets.",
            },
            {
              "kind": "p",
              "text": "Le cercle circonscrit est différent du cercle inscrit. Le cercle inscrit se trouve à l'intérieur du triangle et touche les trois côtés de l'intérieur. Le cercle circonscrit entoure le triangle et ne le touche qu'aux trois sommets. Confondre les deux cercles est la source de confusion la plus fréquente sur cette page, et la section de comparaison ci-dessous les présente côte à côte.",
            },
          ],
        },
        "sec-formula": {
          "h2": "Formule du rayon circonscrit d'un triangle rectangle",
          "blocks": [
            {
              "kind": "p",
              "text": "La formule du rayon circonscrit d'un triangle rectangle est assez courte pour être retenue d'un coup d'œil :",
            },
            {
              "kind": "p",
              "text": "[[[R = \\frac{c}{2}]]]",
            },
            {
              "kind": "p",
              "text": "Ici, [[R]] est le rayon circonscrit, le rayon du cercle circonscrit, et [[c]] est l'hypoténuse complète, le côté opposé à l'angle droit. La formule dit : prenez l'hypoténuse et divisez-la par deux.",
            },
            {
              "kind": "p",
              "text": "Le calcul comporte deux étapes. D'abord, identifiez correctement l'hypoténuse. C'est le côté en face de l'angle droit, et c'est toujours le côté le plus long. Ensuite, divisez sa longueur par deux. Il n'y a ni carré, ni racine carrée, ni deuxième mesure à trouver d'abord, à condition que l'hypoténuse soit déjà connue.",
            },
            {
              "kind": "p",
              "text": "La raison pour laquelle la division fonctionne est que l'hypoténuse est le diamètre du cercle circonscrit. Un rayon vaut toujours la moitié d'un diamètre, donc [[R = \\frac{D}{2}]], où [[D]] est le diamètre. Dans un triangle rectangle, [[D = c]], donc en remplaçant on obtient [[R = \\frac{c}{2}]]. La formule est en réalité la relation familière entre rayon et diamètre, appliquée à un diamètre qui se trouve être un côté du triangle.",
            },
            {
              "kind": "p",
              "text": "Pour un triangle quelconque, qui n'est pas nécessairement rectangle, le rayon circonscrit suit la formule [[R = \\frac{abc}{4A}]], où [[a]], [[b]] et [[c]] sont les trois côtés et [[A]] est l'aire du triangle. Pour un triangle rectangle, elle se simplifie en [[R = \\frac{c}{2}]], car l'aire est [[A = \\frac{ab}{2}]]. Utilisez la formule générale uniquement pour les triangles qui ne sont pas rectangles.",
            },
          ],
        },
        "sec-why-diameter": {
          "h2": "Pourquoi l'hypoténuse est-elle le diamètre du cercle circonscrit ?",
          "blocks": [
            {
              "kind": "p",
              "text": "C'est l'idée sur laquelle repose toute la page, elle mérite donc un examen attentif. Prenez le triangle rectangle ABC avec l'angle droit en C, et soit [[O]] le milieu de l'hypoténuse AB. L'affirmation est que [[O]] est à égale distance des trois sommets, ce qui en fait le centre du cercle circonscrit, et que AB, qui passe par [[O]] avec ses deux extrémités sur le cercle, est un diamètre.",
            },
            {
              "kind": "p",
              "text": "Le fait essentiel est la propriété du milieu d'un triangle rectangle : le milieu de l'hypoténuse est à égale distance des trois sommets. En symboles, [[OA = OB = OC]]. Comme [[O]] est le milieu de AB, [[OA]] et [[OB]] valent chacun la moitié de l'hypoténuse, donc [[OA = OB = \\frac{c}{2}]].",
            },
            {
              "kind": "p",
              "text": "Pourquoi [[OC]] est-il égal à la moitié de l'hypoténuse ? Une façon de le voir est de compléter le rectangle. Tracez une copie du triangle ABC tournée d'un demi-tour autour de [[O]], de sorte que les deux triangles forment ensemble un rectangle dont AB est une diagonale. Les diagonales d'un rectangle sont égales et se coupent en leur milieu, donc [[OC = \\frac{c}{2}]] aussi.",
            },
            {
              "kind": "p",
              "text": "Une fois [[OA = OB = OC]] établi, la suite en découle. Un cercle centré en [[O]] de rayon [[\\frac{c}{2}]] passe par A, B et C, donc c'est le cercle circonscrit, [[O]] est le centre du cercle circonscrit et [[\\frac{c}{2}]] est le rayon circonscrit. Comme A et B sont les extrémités opposées d'une droite passant par le centre, AB est un diamètre, donc [[AB = 2R]], c'est-à-dire [[c = 2R]] et donc [[R = \\frac{c}{2}]].",
            },
          ],
          "image": {
            "src": "circumradius-hypotenuse-diameter.svg",
            "alt": "Hypoténuse AB représentée comme le diamètre du cercle circonscrit, avec AO et OB égaux à R",
            "caption": "L'hypoténuse AB est le diamètre : AO et OB sont chacun égaux à R, et AB est égal à 2R.",
          },
        },
        "sec-circumcenter": {
          "h2": "Qu'est-ce que le centre du cercle circonscrit d'un triangle rectangle ?",
          "blocks": [
            {
              "kind": "p",
              "text": "Le centre du cercle circonscrit d'un triangle est le point à égale distance des trois sommets, et c'est le centre du cercle circonscrit. On le trouve là où se rencontrent les médiatrices des côtés.",
            },
            {
              "kind": "p",
              "text": "Pour un triangle rectangle, les médiatrices se rencontrent en un point que l'on peut trouver sans les tracer : le milieu de l'hypoténuse. Partagez AB en deux et vous obtenez le centre du cercle circonscrit [[O]]. Partager l'un ou l'autre côté de l'angle droit en deux donne une droite qui passe par le même point, ce qui est un contrôle utile quand on construit le centre au compas et à la règle.",
            },
            {
              "kind": "p",
              "text": "Le centre du cercle circonscrit se trouve sur l'hypoténuse elle-même, exactement à mi-chemin le long de celle-ci. C'est la particularité des triangles rectangles. Dans un triangle acutangle, les trois angles sont inférieurs à 90 degrés et le centre du cercle circonscrit tombe à l'intérieur du triangle. Le triangle rectangle est le cas limite, avec le centre situé sur le bord du triangle, sur son côté le plus long.",
            },
            {
              "kind": "p",
              "text": "Le centre du cercle circonscrit n'est pas le sommet de l'angle droit. Le sommet C est un point du cercle, à distance [[R]] de [[O]], tandis que [[O]] est le centre. Confondre les deux est une erreur fréquente, car C est le coin le plus visible du triangle. Rappelez-vous que le centre doit être à égale distance de A, B et C, et que C n'est pas à égale distance de A et de B sauf si le triangle est isocèle d'une façon particulière, donc C ne peut pas être le centre en général.",
            },
          ],
          "image": {
            "src": "circumradius-circumcenter.svg",
            "alt": "Centre du cercle circonscrit O au milieu de l'hypoténuse, à égale distance des trois sommets",
            "caption": "O est le milieu de AB, avec OA, OB et OC tous égaux à R.",
          },
        },
        "sec-how-to-use": {
          "h2": "Comment utiliser le calculateur de rayon circonscrit d'un triangle rectangle",
          "blocks": [
            {
              "kind": "p",
              "text": "Neuf courtes étapes vous mènent d'un triangle étiqueté à une réponse vérifiée. Les côtés de l'angle droit ne sont nécessaires à aucun moment, car l'hypoténuse seule détermine le rayon circonscrit.",
            },
            {
              "kind": "steps",
              "steps": [
                "Identifiez le triangle rectangle de votre problème et vérifiez qu'il possède un angle droit.",
                "Repérez l'angle droit, généralement marqué par un petit carré au sommet C.",
                "Identifiez le côté opposé à l'angle droit ; ce côté est l'hypoténuse c.",
                "Vérifiez que ce côté est le côté le plus long du triangle. Si ce n'est pas le cas, réétiquetez le schéma avant de continuer.",
                "Choisissez l'unité appropriée et convertissez les mesures pour qu'elles utilisent toutes cette unité.",
                "Saisissez la longueur de l'hypoténuse dans le champ Hypoténuse c.",
                "Cliquez sur Calculer le rayon circonscrit R et lisez le résultat.",
                "Vérifiez le résultat : il doit être positif, dans la même unité que c, et exactement égal à la moitié de c.",
                "Utilisez Réinitialiser pour commencer un autre calcul.",
              ],
            },
            {
              "kind": "p",
              "text": "Si votre problème donne les deux côtés de l'angle droit au lieu de l'hypoténuse, trouvez d'abord c avec le théorème de Pythagore, [[c = \\sqrt{a^2 + b^2}]], puis saisissez cette valeur. Le <a href=\"/right-triangle-side-calculator/\">calculateur de côté de triangle rectangle</a> peut trouver l'hypoténuse manquante pour vous, et la section sur les côtés ci-dessous présente un exemple complet.",
            },
          ],
        },
        "sec-step-example": {
          "h2": "Exemple étape par étape pour trouver le rayon circonscrit",
          "blocks": [
            {
              "kind": "p",
              "text": "Prenez [[c = 10]] cm. Les trois étapes ci-dessous montrent tout le calcul, sans rien sauter.",
            },
            {
              "kind": "steps",
              "steps": [
                "Écrivez la formule : [[R = \\frac{c}{2}]].",
                "Remplacez par la valeur connue : [[R = \\frac{10}{2}]].",
                "Divisez : [[R = 5]] cm.",
              ],
            },
            {
              "kind": "p",
              "text": "La réponse 5 cm signifie que le cercle circonscrit a un rayon de 5 cm. Son centre, le milieu de l'hypoténuse, se trouve à 5 cm de chaque sommet du triangle, et le cercle passe par les trois sommets. Le diamètre du cercle est de 10 cm, comme l'hypoténuse.",
            },
            {
              "kind": "p",
              "text": "Vérifiez la réponse avec la relation entre diamètre et rayon, [[2R = c]]. Doubler le rayon donne [[2 \\times 5 = 10]] cm, ce qui correspond exactement à l'hypoténuse. Si doubler votre réponse ne redonne pas l'hypoténuse de départ, la division s'est trompée quelque part, et le contrôle le repère aussitôt.",
            },
          ],
          "image": {
            "src": "circumradius-example-c10.svg",
            "alt": "Exemple détaillé avec une hypoténuse de 10 cm et un rayon circonscrit de 5 cm dans le cercle circonscrit",
            "caption": "Exemple détaillé : c = 10 cm donne R = 5 cm, et 2 fois 5 cm égale 10 cm.",
          },
        },
        "sec-diagram": {
          "h2": "Schéma du cercle circonscrit d'un triangle rectangle expliqué",
          "blocks": [
            {
              "kind": "p",
              "text": "Le schéma montre le triangle ABC avec l'angle droit en C. Le côté AC est le côté a de l'angle droit, le côté BC est le côté b de l'angle droit, et le côté AB est l'hypoténuse c. Le point [[O]] marque le milieu de AB, et un cercle centré en [[O]] passe par A, B et C.",
            },
            {
              "kind": "p",
              "text": "Lisez le schéma dans cet ordre. Partez de A, suivez le côté a jusqu'à C, puis le côté b jusqu'à B, puis revenez le long de l'hypoténuse de B à A, en passant par [[O]] en chemin. Les segments de [[O]] vers A, B et C sont tous des rayons, chacun noté [[R]].",
            },
            {
              "kind": "p",
              "text": "Le segment AB passe par le centre [[O]] et a ses deux extrémités sur le cercle, ce qui est la définition d'un diamètre. C'est pourquoi AB est tracé comme une droite au milieu du cercle, et non comme une corde décalée sur le côté. L'angle droit en C se trouve sur le cercle lui-même, ce qui est l'image décrite par le théorème de Thalès.",
            },
          ],
        },
        "sec-proof": {
          "h2": "Pourquoi la formule du rayon circonscrit fonctionne-t-elle ?",
          "blocks": [
            {
              "kind": "p",
              "text": "La preuve utilise le milieu de l'hypoténuse et le fait qu'il est à égale distance des trois sommets. Soit [[M]] le milieu de AB dans le triangle rectangle ABC, avec l'angle droit en C. Alors [[AM = BM = \\frac{c}{2}]] par définition d'un milieu. L'étape qui demande une preuve est [[MA = MB = MC]], l'affirmation selon laquelle la troisième distance est égale aux deux premières.",
            },
            {
              "kind": "p",
              "text": "Une façon nette de le montrer est de prolonger la médiane CM jusqu'à un point D tel que [[MD = MC]], puis de joindre D à A et à B. Le quadrilatère ACBD a pour diagonales AB et CD qui se coupent en leur milieu en [[M]], donc c'est un parallélogramme. Son angle en C est un angle droit, et un parallélogramme avec un angle droit est un rectangle, donc ACBD est un rectangle.",
            },
            {
              "kind": "p",
              "text": "Les diagonales d'un rectangle sont égales, donc [[CD = AB = c]]. Comme [[M]] partage CD en deux, [[MC = \\frac{CD}{2} = \\frac{c}{2}]]. Cela correspond à [[MA]] et à [[MB]], donc [[MA = MB = MC = \\frac{c}{2}]]. Le point [[M]] est à égale distance de A, B et C, ce qui en fait le centre du cercle circonscrit, et la distance commune [[\\frac{c}{2}]] est le rayon circonscrit. Donc [[R = \\frac{c}{2}]].",
            },
          ],
        },
        "sec-thales": {
          "h2": "Comprendre le théorème de Thalès et le cercle circonscrit",
          "blocks": [
            {
              "kind": "p",
              "text": "Le théorème de Thalès affirme qu'un angle sous-tendu par un diamètre en un point du cercle est un angle droit. Sur l'image, AB est un diamètre d'un cercle et C est un point quelconque du cercle, autre que A ou B. Alors l'angle ACB mesure 90 degrés. Le théorème porte le nom de Thalès de Milet, à qui l'on attribue la première preuve connue.",
            },
            {
              "kind": "p",
              "text": "La réciproque est ce que cette page utilise : si un triangle a un angle droit, son hypoténuse peut être traitée comme le diamètre d'un cercle passant par les trois sommets. Prenez le triangle ABC avec un angle C égal à 90 degrés. La réciproque dit que C se trouve sur le cercle de diamètre AB, donc ce cercle est le cercle circonscrit du triangle, et son rayon est la moitié de AB.",
            },
            {
              "kind": "p",
              "text": "Les deux sens ensemble donnent un test complet. Un point C sur le cercle de diamètre AB donne toujours un angle droit en C, et un angle droit en C place toujours C sur ce cercle.",
            },
            {
              "kind": "p",
              "text": "Le théorème explique aussi la position du centre du cercle circonscrit. Le centre du cercle est le milieu de son diamètre, et le diamètre est l'hypoténuse, donc le centre est le milieu de l'hypoténuse. Rien d'autre sur le triangle n'a besoin d'être connu. C'est pourquoi le calculateur ne demande qu'un seul nombre.",
            },
          ],
          "image": {
            "src": "circumradius-thales-theorem.svg",
            "alt": "Schéma du théorème de Thalès avec le diamètre AB et le point C sur le cercle formant un angle droit",
            "caption": "Théorème de Thalès : AB est le diamètre, C est sur le cercle, et l'angle C mesure 90 degrés.",
          },
        },
        "sec-examples": {
          "h2": "Exemples détaillés de calcul du rayon circonscrit d'un triangle rectangle",
          "blocks": [
            {
              "kind": "h3",
              "text": "Exemple 1 : Nombre entier simple",
            },
            {
              "kind": "p",
              "text": "Avec [[c = 10]] cm, la formule donne [[R = \\frac{10}{2} = 5]] cm. Le cercle circonscrit a un diamètre de 10 cm et un rayon de 5 cm, et son centre est le milieu de l'hypoténuse, à 5 cm de chaque sommet.",
            },
            {
              "kind": "h3",
              "text": "Exemple 2 : Mesure plus grande",
            },
            {
              "kind": "p",
              "text": "Avec [[c = 24]] m, [[R = \\frac{24}{2} = 12]] m. Des nombres plus grands ne changent rien à la méthode : divisez l'hypoténuse par deux et gardez l'unité. Un cercle de 24 m de large a un rayon de 12 m.",
            },
            {
              "kind": "h3",
              "text": "Exemple 3 : Mesure décimale",
            },
            {
              "kind": "p",
              "text": "Avec [[c = 7.5]] cm, [[R = \\frac{7.5}{2} = 3.75]] cm. Une hypoténuse décimale donne un rayon circonscrit décimal, ce qui est normal. Vérifiez en doublant : [[2 \\times 3.75 = 7.5]] cm, ce qui redonne l'hypoténuse.",
            },
            {
              "kind": "h3",
              "text": "Exemple 4 : Hypoténuse impaire",
            },
            {
              "kind": "p",
              "text": "Avec [[c = 13]] cm, [[R = \\frac{13}{2} = 6.5]] cm. Un nombre entier impair divisé par deux donne un nombre se terminant par ,5. C'est le triangle 5-12-13, dont les côtés de l'angle droit mesurent 5 cm et 12 cm, puisque [[5^2 + 12^2 = 25 + 144 = 169 = 13^2]].",
            },
            {
              "kind": "h3",
              "text": "Exemple 5 : Mesure en millimètres",
            },
            {
              "kind": "p",
              "text": "Avec [[c = 180]] mm, [[R = \\frac{180}{2} = 90]] mm. Les petites unités fonctionnent de la même façon, et garder l'unité en millimètres tout au long évite toute conversion. En centimètres, la même réponse est 9 cm, puisque 90 mm égalent 9 cm.",
            },
            {
              "kind": "h3",
              "text": "Exemple 6 : Mesure fractionnaire",
            },
            {
              "kind": "p",
              "text": "Avec [[c = \\frac{15}{2}]] ft, [[R = \\frac{15/2}{2} = \\frac{15}{4}]] ft, soit 3,75 ft. Diviser par 2 revient à multiplier le dénominateur par 2, donc le dénominateur passe de 2 à 4. La forme décimale, 3,75 ft, est la même réponse écrite différemment.",
            },
            {
              "kind": "h3",
              "text": "Exemple 7 : Unités différentes",
            },
            {
              "kind": "p",
              "text": "Avec [[c = 1.2]] m, [[R = \\frac{1.2}{2} = 0.6]] m. En convertissant en centimètres, 0,6 m égale 60 cm, car 1 m vaut 100 cm. L'une ou l'autre unité est correcte, mais la réponse doit indiquer laquelle elle utilise.",
            },
            {
              "kind": "h3",
              "text": "Exemple 8 : Grande mesure décimale",
            },
            {
              "kind": "p",
              "text": "Avec [[c = 125.6]] m, [[R = \\frac{125.6}{2} = 62.8]] m. Doubler 62,8 redonne 125,6, ce qui confirme la division.",
            },
          ],
        },
        "sec-legs-known": {
          "h2": "Comment trouver le rayon circonscrit quand les deux côtés de l'angle droit sont connus",
          "blocks": [
            {
              "kind": "p",
              "text": "Le calculateur de cette page demande l'hypoténuse, mais beaucoup de problèmes donnent les deux côtés de l'angle droit à la place. Dans ce cas, trouvez d'abord l'hypoténuse avec le théorème de Pythagore, puis divisez-la par deux. Les deux étapes se combinent en une seule formule, [[R = \\frac{\\sqrt{a^2 + b^2}}{2}]], où [[a]] et [[b]] sont les côtés de l'angle droit.",
            },
            {
              "kind": "p",
              "text": "Prenez [[a = 6]] cm et [[b = 8]] cm. D'abord, mettez les deux côtés au carré et additionnez : [[a^2 + b^2 = 36 + 64 = 100]]. Puis prenez la racine carrée pour obtenir l'hypoténuse : [[c = \\sqrt{100} = 10]] cm. Puis divisez-la par deux : [[R = \\frac{10}{2} = 5]] cm.",
            },
            {
              "kind": "p",
              "text": "Le <a href=\"/pythagorean-theorem-calculator/\">calculateur du théorème de Pythagore</a> trouve une hypoténuse manquante à partir de deux côtés de l'angle droit, ce qui est la même première étape que celle utilisée ici. Le <a href=\"/right-triangle-area-calculator/\">calculateur d'aire de triangle rectangle</a> utilise les mêmes deux côtés d'une autre façon, en calculant [[A = \\frac{ab}{2}]], soit 24 centimètres carrés pour le triangle 6-8-10.",
            },
          ],
        },
        "sec-diameter": {
          "h2": "Relation entre le rayon circonscrit et le diamètre",
          "blocks": [
            {
              "kind": "p",
              "text": "Le rayon et le diamètre décrivent le même cercle de deux façons. Le diamètre [[D]] est la distance en ligne droite à travers le cercle en passant par son centre, et le rayon [[R]] est la distance du centre au bord, donc [[D = 2R]] et [[R = \\frac{D}{2}]]. Doubler un rayon donne le diamètre, et diviser un diamètre par deux donne le rayon.",
            },
            {
              "kind": "p",
              "text": "Pour un triangle rectangle, le diamètre a une deuxième identité : il est égal à l'hypoténuse. L'hypoténuse s'étend à travers le cercle circonscrit d'un côté à l'autre, en passant par le centre, donc [[D = c]]. En combinant les deux relations, on obtient [[c = 2R]] et [[R = \\frac{c}{2}]], ce qui est la formule sur laquelle repose cette page.",
            },
            {
              "kind": "p",
              "text": "Un exemple numérique permet de bien distinguer les trois longueurs. Dans un triangle avec [[c = 18]] cm, le diamètre est [[D = 18]] cm et le rayon circonscrit est [[R = 9]] cm. L'hypoténuse, 18 cm, et le diamètre, 18 cm, sont la même droite mesurée dans deux rôles, tandis que le rayon, 9 cm, est la moitié de cette droite.",
            },
          ],
        },
        "sec-vs-inradius": {
          "h2": "Rayon circonscrit ou rayon inscrit d'un triangle rectangle",
          "blocks": [
            {
              "kind": "p",
              "text": "Le rayon circonscrit et le rayon inscrit sont les deux rayons d'un triangle rectangle, et ils décrivent deux cercles différents. Le rayon circonscrit [[R]] est le rayon du cercle circonscrit, qui passe par les trois sommets. Le rayon inscrit [[r]] est le rayon du cercle inscrit, qui se trouve à l'intérieur du triangle et touche les trois côtés. Un cercle entoure le triangle, l'autre se trouve à l'intérieur.",
            },
            {
              "kind": "p",
              "text": "Pour un triangle rectangle, le rayon circonscrit est [[R = \\frac{c}{2}]], tandis que le rayon inscrit est [[r = \\frac{a + b - c}{2}]], où [[a]] et [[b]] sont les côtés de l'angle droit et [[c]] est l'hypoténuse. Le rayon circonscrit n'a besoin que de l'hypoténuse ; le rayon inscrit a besoin des trois côtés, car la façon dont le cercle inscrit s'ajuste dépend de la forme du triangle, et non seulement de son côté le plus long.",
            },
            {
              "kind": "p",
              "text": "Les centres diffèrent aussi. Le centre du cercle circonscrit est le milieu de l'hypoténuse, sur le bord du triangle. Le centre du cercle inscrit est à l'intérieur du triangle, là où se rencontrent les bissectrices des angles, à distance [[r]] de chaque côté.",
            },
            {
              "kind": "p",
              "text": "Utilisez le triangle 6-8-10 pour voir la différence en chiffres. Le rayon circonscrit est [[R = \\frac{10}{2} = 5]] cm, et le rayon inscrit est [[r = \\frac{6 + 8 - 10}{2} = \\frac{4}{2} = 2]] cm.",
            },
            {
              "kind": "p",
              "text": "Pour les problèmes sur le cercle inscrit, utilisez le <a href=\"/right-triangle-inradius-calculator/\">calculateur de rayon inscrit d'un triangle rectangle</a>, qui applique directement [[r = \\frac{a + b - c}{2}]]. Le <a href=\"/right-triangle-radius-calculator/\">calculateur de rayon d'un triangle rectangle</a> couvre les deux rayons sur une seule page quand vous avez besoin de les comparer.",
            },
          ],
          "table": {
            "headers": [
              "Caractéristique",
              "Rayon circonscrit R",
              "Rayon inscrit r",
            ],
            "rows": [
              [
                "Cercle",
                "Cercle circonscrit",
                "Cercle inscrit",
              ],
              [
                "Position",
                "Autour du triangle",
                "À l'intérieur du triangle",
              ],
              [
                "Contact",
                "Passe par les sommets",
                "Tangent aux côtés",
              ],
              [
                "Formule pour le triangle rectangle",
                "c/2",
                "(a+b-c)/2",
              ],
              [
                "Centre",
                "Centre du cercle circonscrit",
                "Centre du cercle inscrit",
              ],
            ],
          },
          "image": {
            "src": "circumradius-vs-incircle.svg",
            "alt": "Cercle circonscrit passant par les sommets à côté du cercle inscrit touchant les côtés, triangle 6-8-10",
            "caption": "Cercle circonscrit (R = 5 cm) autour du triangle, cercle inscrit (r = 2 cm) à l'intérieur, triangle 6-8-10.",
          },
        },
        "sec-pythagoras": {
          "h2": "Relation entre le rayon circonscrit et le théorème de Pythagore",
          "blocks": [
            {
              "kind": "p",
              "text": "Le théorème de Pythagore affirme que dans un triangle rectangle, [[a^2 + b^2 = c^2]], où [[a]] et [[b]] sont les côtés de l'angle droit et [[c]] est l'hypoténuse. C'est le lien entre les côtés de l'angle droit et l'hypoténuse, et par l'hypoténuse, c'est aussi un lien vers le rayon circonscrit.",
            },
            {
              "kind": "p",
              "text": "Comme [[R = \\frac{c}{2}]], et que le théorème donne [[c = \\sqrt{a^2 + b^2}]], la substitution donne [[R = \\frac{\\sqrt{a^2 + b^2}}{2}]]. Cette formule combinée trouve le rayon circonscrit à partir des deux côtés de l'angle droit en une seule étape, sans écrire l'hypoténuse séparément. C'est le même calcul en deux étapes que dans la section sur les côtés, écrit comme une seule expression.",
            },
            {
              "kind": "p",
              "text": "Vérifiez-le avec le triangle 6-8-10. Les côtés de l'angle droit donnent [[\\sqrt{6^2 + 8^2} = \\sqrt{36 + 64} = \\sqrt{100} = 10]] cm pour l'hypoténuse, et diviser par deux donne [[R = 5]] cm. Le théorème de Pythagore fournit l'hypoténuse, et la formule du rayon circonscrit la divise par deux.",
            },
          ],
        },
        "sec-verify": {
          "h2": "Comment vérifier votre calcul de rayon circonscrit",
          "blocks": [
            {
              "kind": "p",
              "text": "Quatre contrôles indépendants repèrent presque toutes les erreurs. Faites-en au moins un pour chaque réponse, et les quatre quand le problème compte. L'exemple ci-dessous utilise le triangle 6-8-10, avec [[c = 10]] cm et [[R = 5]] cm, tout au long.",
            },
            {
              "kind": "h3",
              "text": "Contrôle 1 : Relation entre diamètre et rayon",
            },
            {
              "kind": "p",
              "text": "Doublez le rayon circonscrit et comparez avec l'hypoténuse : [[2R = c]]. Ici, [[2 \\times 5 = 10]] cm, ce qui correspond exactement à c. Si doubler votre réponse ne redonne pas l'hypoténuse, la division par deux s'est trompée.",
            },
            {
              "kind": "h3",
              "text": "Contrôle 2 : Relation avec le milieu",
            },
            {
              "kind": "p",
              "text": "Le centre du cercle circonscrit doit se trouver à mi-chemin le long de l'hypoténuse. Mesurez depuis l'une ou l'autre extrémité de l'hypoténuse jusqu'au centre : chaque moitié doit être égale à [[R]]. Ici, chaque moitié mesure 5 cm, ce qui correspond au rayon circonscrit. Un centre qui n'est pas au milieu n'est pas le centre du cercle circonscrit.",
            },
            {
              "kind": "h3",
              "text": "Contrôle 3 : Distances égales",
            },
            {
              "kind": "p",
              "text": "Vérifiez [[OA = OB = OC = R]]. Le centre doit être à la même distance des trois sommets. Dans le triangle 6-8-10, chaque distance est de 5 cm. Si la distance au sommet de l'angle droit diffère de la distance aux extrémités de l'hypoténuse, le centre ou le rayon est faux.",
            },
            {
              "kind": "h3",
              "text": "Contrôle 4 : Théorème de Pythagore",
            },
            {
              "kind": "p",
              "text": "Quand les côtés de l'angle droit sont connus, vérifiez [[a^2 + b^2 = c^2]] et comparez l'hypoténuse obtenue avec [[2R]]. Ici, [[6^2 + 8^2 = 36 + 64 = 100 = 10^2]], donc [[c = 10]] cm, et [[2R = 10]] cm est en accord. Ce contrôle teste tout le triangle, donc il repère les erreurs d'étiquetage que le premier contrôle peut manquer.",
            },
          ],
        },
        "sec-properties": {
          "h2": "Propriétés importantes du rayon circonscrit dans les triangles rectangles",
          "blocks": [
            {
              "kind": "p",
              "text": "Neuf propriétés découlent directement de [[R = \\frac{c}{2}]]. Chacune sert aussi de contrôle de bon sens pour une nouvelle réponse.",
            },
            {
              "kind": "list",
              "items": [
                "Le rayon circonscrit est exactement la moitié de l'hypoténuse, [[R = \\frac{c}{2}]], sans aucune approximation.",
                "L'hypoténuse est le diamètre du cercle circonscrit, donc [[D = c]] et [[c = 2R]].",
                "Le centre du cercle circonscrit se trouve au milieu de l'hypoténuse, sur le côté le plus long du triangle.",
                "Le rayon circonscrit est toujours positif pour un triangle non dégénéré, puisque l'hypoténuse est une longueur positive.",
                "Le rayon circonscrit est égal à la moitié de l'hypoténuse, et comme l'hypoténuse est le côté le plus long, le rayon circonscrit est inférieur à l'hypoténuse. Qu'il soit plus grand ou plus petit qu'un côté donné de l'angle droit dépend du triangle : dans un triangle 6-8-10, [[R = 5]] cm est plus petit que le côté de 8 cm, tandis que dans un triangle 5-12-13, [[R = 6.5]] cm est plus grand que le côté de 5 cm.",
                "Augmenter l'hypoténuse augmente le rayon circonscrit proportionnellement, car [[R]] est la moitié de [[c]].",
                "Doubler l'hypoténuse double le rayon circonscrit : si [[c]] devient [[2c]], alors [[R]] devient [[c]].",
                "Les côtés de l'angle droit ne sont pas nécessaires quand l'hypoténuse est déjà connue ; la formule utilise [[c]] seul.",
                "Les trois sommets sont à égale distance du centre du cercle circonscrit, avec [[AO = BO = CO = R]].",
              ],
            },
          ],
        },
        "sec-mistakes": {
          "h2": "Erreurs fréquentes lors du calcul du rayon circonscrit",
          "blocks": [
            {
              "kind": "steps",
              "steps": [
                "Saisir un côté de l'angle droit au lieu de l'hypoténuse : diviser un côté par deux donne la moitié d'un côté, et non le rayon circonscrit. Dans un triangle 6-8-10, diviser 6 cm par deux donne 3 cm, alors que le vrai rayon circonscrit est de 5 cm.",
                "Oublier de diviser par deux : donner l'hypoténuse comme réponse donne le diamètre, et non le rayon. Avec [[c = 10]] cm, la réponse est 5 cm, et non 10 cm.",
                "Traiter l'hypoténuse comme le rayon : c'est la même erreur vue dans l'autre sens. L'hypoténuse couvre toute la largeur du cercle, donc c'est le diamètre, et le rayon en est la moitié.",
                "Confondre le rayon circonscrit et le rayon inscrit : le rayon inscrit d'un triangle 6-8-10 est de 2 cm, tandis que le rayon circonscrit est de 5 cm. Les deux cercles sont différents, et leurs formules sont différentes aussi.",
                "Confondre le centre du cercle circonscrit et le sommet de l'angle droit : le centre du cercle circonscrit est le milieu de l'hypoténuse, et non le sommet C. Le sommet C est un point du cercle, à distance [[R]] du centre.",
                "Supposer que le centre est toujours à l'intérieur d'un triangle : dans un triangle rectangle, le centre du cercle circonscrit se trouve sur l'hypoténuse, et dans un triangle obtusangle, il se trouve à l'extérieur.",
                "Utiliser la formule sur un triangle quelconque : [[R = \\frac{c}{2}]] ne vaut que pour les triangles rectangles. Pour un triangle quelconque, utilisez [[R = \\frac{abc}{4A}]], où [[A]] est l'aire.",
                "Mélanger les unités de mesure : une hypoténuse en mètres et une réponse donnée en centimètres diffèrent d'un facteur 100. Convertissez d'abord, puis divisez par deux.",
                "Utiliser des valeurs d'hypoténuse nulles ou négatives : une longueur ne peut pas être nulle ou négative dans un vrai triangle. Une saisie nulle ou négative signifie que la mesure est fausse.",
                "Confondre diamètre et rayon : le diamètre vaut deux fois le rayon. Si votre réponse vaut deux fois la valeur attendue, vous avez probablement donné [[D]] au lieu de [[R]].",
                "Supposer que le cercle circonscrit touche les trois côtés : le cercle circonscrit passe par les sommets et ne touche le triangle qu'en ces trois points. Le cercle qui touche les côtés est le cercle inscrit.",
                "Oublier que le cercle passe par les trois sommets : les trois doivent se trouver sur le cercle, et c'est exactement ce que [[OA = OB = OC]] garantit.",
              ],
            },
          ],
        },
        "sec-applications": {
          "h2": "Applications pratiques du rayon circonscrit",
          "blocks": [
            {
              "kind": "p",
              "text": "L'usage le plus direct est le travail de géométrie à la maison et en classe, où les problèmes de rayon circonscrit vérifient si les élèves savent identifier l'hypoténuse et appliquer [[R = \\frac{c}{2}]] au lieu de recourir à une formule plus compliquée. Les exercices de construction de cercles utilisent la même idée : à partir d'un triangle rectangle, tracez son cercle circonscrit en divisant l'hypoténuse par deux et en réglant un compas sur ce rayon.",
            },
            {
              "kind": "p",
              "text": "Le dessin technique utilise cette relation quand un triangle rectangle doit être placé dans un cadre circulaire ou quand un arc de cercle doit passer par trois points donnés. La modélisation géométrique et la géométrie analytique utilisent le même fait pour placer le centre du cercle circonscrit d'un triangle au milieu de son hypoténuse.",
            },
            {
              "kind": "p",
              "text": "Les enseignants utilisent ce sujet comme leçon de transition entre les triangles et les cercles, car c'est l'un des premiers endroits où les deux sujets se rencontrent. Le théorème de Thalès, la propriété du milieu et la relation entre rayon et diamètre apparaissent tous dans une seule figure, donc le rayon circonscrit est un moyen compact de les revoir ensemble.",
            },
          ],
        },
        "sec-practice": {
          "h2": "Exercices avec réponses",
          "blocks": [
            {
              "kind": "p",
              "text": "Essayez les six problèmes sur papier avant de lire les réponses. Aucune valeur ne reprend les exemples détaillés, et chaque solution est expliquée en entier ci-dessous.",
            },
            {
              "kind": "h3",
              "text": "Problème 1 : Nombre entier simple",
            },
            {
              "kind": "p",
              "text": "Un triangle rectangle a une hypoténuse [[c = 26]] cm. Trouvez le rayon circonscrit [[R]].",
            },
            {
              "kind": "h3",
              "text": "Problème 2 : Hypoténuse décimale",
            },
            {
              "kind": "p",
              "text": "Avec [[c = 9.4]] m, trouvez le rayon circonscrit [[R]] en mètres.",
            },
            {
              "kind": "h3",
              "text": "Problème 3 : Mesure fractionnaire",
            },
            {
              "kind": "p",
              "text": "Avec [[c = \\frac{9}{4}]] ft, trouvez [[R]] sous forme de fraction, puis sous forme décimale.",
            },
            {
              "kind": "h3",
              "text": "Problème 4 : Conversion d'unités",
            },
            {
              "kind": "p",
              "text": "Un triangle rectangle a une hypoténuse [[c = 240]] cm. Trouvez le rayon circonscrit en mètres.",
            },
            {
              "kind": "h3",
              "text": "Problème 5 : Trouver l'hypoténuse à partir de deux côtés de l'angle droit",
            },
            {
              "kind": "p",
              "text": "Un triangle rectangle a des côtés de l'angle droit [[a = 9]] cm et [[b = 12]] cm. Trouvez l'hypoténuse, puis le rayon circonscrit.",
            },
            {
              "kind": "h3",
              "text": "Problème 6 : Rayon circonscrit ou rayon inscrit ?",
            },
            {
              "kind": "p",
              "text": "Un triangle rectangle a des côtés de l'angle droit de 5 cm et 12 cm et une hypoténuse de 13 cm. Trouvez à la fois le rayon circonscrit [[R]] et le rayon inscrit [[r]], et indiquez à quel cercle chacun appartient.",
            },
            {
              "kind": "h3",
              "text": "Réponses des exercices",
            },
            {
              "kind": "p",
              "text": "Réponse 1 : [[R = \\frac{26}{2} = 13]] cm. Vérification : [[2 \\times 13 = 26]] cm.",
            },
            {
              "kind": "p",
              "text": "Réponse 2 : [[R = \\frac{9.4}{2} = 4.7]] m. Vérification : [[2 \\times 4.7 = 9.4]] m.",
            },
            {
              "kind": "p",
              "text": "Réponse 3 : [[R = \\frac{9/4}{2} = \\frac{9}{8}]] ft, soit 1,125 ft. Diviser par 2 double le dénominateur, qui passe de 4 à 8.",
            },
            {
              "kind": "p",
              "text": "Réponse 4 : [[R = \\frac{240}{2} = 120]] cm, et 120 cm égalent 1,2 m, puisque 100 cm valent 1 m.",
            },
            {
              "kind": "p",
              "text": "Réponse 5 : [[c = \\sqrt{9^2 + 12^2} = \\sqrt{81 + 144} = \\sqrt{225} = 15]] cm, puis [[R = \\frac{15}{2} = 7.5]] cm.",
            },
            {
              "kind": "p",
              "text": "Réponse 6 : Le rayon circonscrit appartient au cercle circonscrit, [[R = \\frac{13}{2} = 6.5]] cm, et le rayon inscrit appartient au cercle inscrit, [[r = \\frac{5 + 12 - 13}{2} = \\frac{4}{2} = 2]] cm. Le cercle circonscrit passe par les sommets ; le cercle inscrit touche les côtés.",
            },
          ],
        },
      },
      "relatedHeading": "Découvrir les calculateurs de triangle rectangle associés",
      "relatedIntro": "Chaque calculateur ci-dessous traite une tâche précise du triangle rectangle, choisissez donc l'outil qui correspond à la mesure que vous devez trouver.",
      "relatedItems": [
        "Calculateur de rayon d'un triangle rectangle",
        "Calculateur de rayon inscrit d'un triangle rectangle",
        "Calculateur de côté d'un triangle rectangle",
        "Calculateur d'aire d'un triangle rectangle",
        "Calculateur du théorème de Pythagore",
      ],
      "faqHeading": "Questions fréquemment posées",
      "faqs": [
        {
          "question": "Quelle est la formule du rayon circonscrit d'un triangle rectangle ?",
          "answer": "La formule est [[R = \\frac{c}{2}]], où [[R]] est le rayon circonscrit et [[c]] est l'hypoténuse. Identifiez le côté opposé à l'angle droit, puis divisez sa longueur par deux. Par exemple, une hypoténuse de 10 cm donne un rayon circonscrit de 5 cm.",
        },
        {
          "question": "Pourquoi l'hypoténuse est-elle le diamètre du cercle circonscrit ?",
          "answer": "Le milieu de l'hypoténuse est à égale distance des trois sommets, donc c'est le centre du cercle circonscrit. L'hypoténuse passe par ce centre avec ses deux extrémités sur le cercle, ce qui est la définition d'un diamètre. La diviser par deux donne donc le rayon.",
        },
        {
          "question": "Où se trouve le centre du cercle circonscrit d'un triangle rectangle ?",
          "answer": "Le centre du cercle circonscrit se trouve au milieu de l'hypoténuse, sur le côté le plus long du triangle. Il est à égale distance des trois sommets, avec [[AO = BO = CO = R]]. Ce n'est pas le sommet de l'angle droit, qui est un point du cercle.",
        },
        {
          "question": "Que signifie rayon circonscrit ?",
          "answer": "Le rayon circonscrit désigne le rayon du cercle circonscrit, le cercle qui passe par les trois sommets du triangle. C'est la distance entre le centre du cercle circonscrit et n'importe quel sommet. Dans un triangle rectangle, il est égal à la moitié de l'hypoténuse.",
        },
        {
          "question": "Ai-je besoin des deux côtés de l'angle droit pour calculer le rayon circonscrit ?",
          "answer": "Non. L'hypoténuse seule suffit, car [[R = \\frac{c}{2}]]. Les côtés de l'angle droit ne sont nécessaires que lorsque l'hypoténuse est inconnue, auquel cas trouvez-la d'abord avec [[c = \\sqrt{a^2 + b^2}]] puis divisez-la par deux. C'est pourquoi ce calculateur ne demande qu'une seule valeur, et cela garde chaque calcul court et simple.",
        },
        {
          "question": "Le rayon circonscrit est-il la moitié de l'hypoténuse ?",
          "answer": "Oui, toujours, pour un triangle rectangle. L'hypoténuse est le diamètre du cercle circonscrit, et un rayon vaut la moitié d'un diamètre, donc [[R = \\frac{c}{2}]]. Doubler le rayon circonscrit redonne toujours l'hypoténuse. Par exemple, une hypoténuse de 14 cm donne un rayon circonscrit de 7 cm, et doubler 7 cm redonne 14 cm.",
        },
        {
          "question": "Le rayon circonscrit est-il le même que le rayon inscrit ?",
          "answer": "Non. Le rayon circonscrit est le rayon du cercle passant par les sommets, [[R = \\frac{c}{2}]], tandis que le rayon inscrit est le rayon du cercle à l'intérieur du triangle qui touche ses côtés, [[r = \\frac{a + b - c}{2}]]. Dans un triangle 6-8-10, ils valent 5 cm et 2 cm.",
        },
        {
          "question": "Le centre du cercle circonscrit peut-il se trouver à l'extérieur d'un triangle ?",
          "answer": "Oui, pour un triangle obtusangle, le centre du cercle circonscrit se trouve à l'extérieur. Pour un triangle acutangle, il se trouve à l'intérieur. Un triangle rectangle est le cas limite : son centre du cercle circonscrit se trouve sur l'hypoténuse, exactement en son milieu. Le centre n'est donc jamais à l'intérieur de la région triangulaire d'un triangle rectangle, mais il n'est jamais à l'extérieur du triangle non plus.",
        },
        {
          "question": "Quel est le lien entre le théorème de Thalès et le rayon circonscrit ?",
          "answer": "Le théorème de Thalès dit qu'un angle sous-tendu par un diamètre est un angle droit, et sa réciproque dit que l'hypoténuse d'un triangle rectangle est un diamètre. Cela fait du milieu de l'hypoténuse le centre, et de la moitié de l'hypoténuse le rayon.",
        },
        {
          "question": "Puis-je trouver le rayon circonscrit en utilisant les deux côtés de l'angle droit ?",
          "answer": "Oui. Trouvez d'abord l'hypoténuse avec [[c = \\sqrt{a^2 + b^2}]], puis divisez-la par deux : [[R = \\frac{\\sqrt{a^2 + b^2}}{2}]]. Pour des côtés de 6 cm et 8 cm, l'hypoténuse est de 10 cm et le rayon circonscrit est de 5 cm. Utilisez les mêmes deux étapes pour n'importe quelle paire de côtés de l'angle droit, et vérifiez le résultat avec le test du diamètre.",
        },
        {
          "question": "Que se passe-t-il si l'hypoténuse double ?",
          "answer": "Le rayon circonscrit double aussi, car [[R]] est la moitié de [[c]]. Si une hypoténuse de 10 cm donne [[R = 5]] cm, une hypoténuse de 20 cm donne [[R = 10]] cm. La relation est directement proportionnelle, donc tripler l'hypoténuse triple aussi le rayon circonscrit.",
        },
        {
          "question": "Le cercle circonscrit passe-t-il par les trois sommets ?",
          "answer": "Oui. C'est la définition d'un cercle circonscrit : un cercle qui passe par chaque sommet du triangle. Dans un triangle rectangle, le centre est le milieu de l'hypoténuse et chaque sommet se trouve exactement à [[R]] de celui-ci.",
        },
      ],
    },
};
