// hypotenuseFromProjectionsGuideTranslations.bfr.ts: Right Triangle Altitude From Projections
// Guide (Page 30 of 45) translation.
export const HFP_B2_FR = {
  "fr": {
      "tocHeading": "Contenu du guide",
      "tocItems": {
        "sec-altitude": "Comment les projections de l'hypoténuse se rapportent à la hauteur",
        "sec-applications": "Applications pratiques des calculs de projection de l'hypoténuse",
        "sec-calculate": "Calculer l'hypoténuse à partir de deux projections",
        "sec-compare": "Hypoténuse à partir des projections ou hypoténuse à partir des côtés",
        "sec-diagram": "Schéma des projections de l'hypoténuse du triangle rectangle expliqué",
        "sec-examples": "Exemples résolus d'hypoténuse à partir de projections",
        "sec-faq": "Questions fréquemment posées",
        "sec-formula": "Formule de l'hypoténuse du triangle rectangle à partir des projections",
        "sec-how": "Comment utiliser la calculatrice d'hypoténuse à partir des projections",
        "sec-intro": "Calculatrice d'hypoténuse du triangle rectangle à partir des projections",
        "sec-legs": "Relation entre les projections de l'hypoténuse et les côtés du triangle",
        "sec-manual": "Comment calculer l'hypoténuse à partir des projections manuellement",
        "sec-mistakes": "Erreurs courantes lors du calcul de l'hypoténuse à partir des projections",
        "sec-practice": "Exercices avec réponses",
        "sec-pythagoras": "Projections de l'hypoténuse et théorème de Pythagore",
        "sec-related": "Explorer les calculatrices de triangle rectangle associées",
        "sec-special": "Cas particuliers et propriétés importantes",
        "sec-understanding": "Comprendre l'hypoténuse et ses deux segments",
        "sec-verify": "Comment vérifier votre calcul d'hypoténuse",
        "sec-what": "Que sont les projections de l'hypoténuse dans un triangle rectangle ?",
        "sec-why": "Pourquoi l'hypoténuse est-elle égale à la somme de ses projections ?",
      },
      "sections": {
        "sec-calculate": {
          "blocks": [
            {
              "kind": "p",
              "text": "Les deux champs de saisie acceptent les longueurs de projection p et q, toutes deux mesurées le long de l'hypoténuse. Les sélecteurs d'unités permettent de saisir des centimètres, des mètres, des millimètres, des pieds ou des pouces, à condition que p et q utilisent des unités compatibles avant d'être additionnées.",
            },
            {
              "kind": "p",
              "text": "[[[c = p + q]]]",
            },
            {
              "kind": "p",
              "text": "Appuyez sur le bouton Calculer l'hypoténuse c pour voir le résultat, et utilisez Réinitialiser pour effacer les champs avant un nouveau problème. Seules les longueurs positives sont acceptées, car une projection est un segment réel de l'hypoténuse, et une valeur nulle ou négative ne peut pas en décrire une.",
            },
            {
              "kind": "p",
              "text": "Le résultat est la longueur complète de l'hypoténuse c dans l'unité choisie. Le calcul est une simple addition, mais les sections ci-dessous expliquent ce que signifient les segments et comment vérifier la réponse à la main.",
            },
          ],
          "h2": "Calculer l'hypoténuse à partir de deux projections",
        },
        "sec-formula": {
          "blocks": [
            {
              "kind": "p",
              "text": "La formule est [[c = p + q]], où c est l'hypoténuse complète, p le premier segment de projection et q le second. Elle utilise l'addition plutôt que la multiplication ou les racines carrées, car les deux projections sont des parties adjacentes d'un même côté droit, et l'addition des segments reconstruit ce côté à partir de ses parties. Imaginez que vous mesurez deux morceaux d'une planche et que vous additionnez les mesures pour obtenir la longueur totale de la planche.",
            },
            {
              "kind": "p",
              "text": "[[[c = p + q]]]",
            },
            {
              "kind": "p",
              "text": "Une question fréquente est de savoir pourquoi la formule ne fait pas la moyenne des deux segments. La moyenne donnerait la moitié de l'hypoténuse, ce qui répond à une autre question. L'addition reconstruit tout le côté ; la moyenne et la moyenne géométrique appartiennent à d'autres formules traitées plus loin dans ce guide.",
            },
            {
              "kind": "p",
              "text": "Prenez [[p = 7]] cm et [[q = 11]] cm. La substitution donne [[c = 7 + 11]], donc [[c = 18]] cm. La formule elle-même est simple ; l'essentiel est de comprendre quels deux segments comptent comme projections.",
            },
            {
              "kind": "p",
              "text": "Les deux segments doivent utiliser des unités compatibles avant de les additionner. Si p est en millimètres et q en centimètres, convertissez d'abord l'un d'eux, exactement comme la calculatrice de cette page vous invite à le faire.",
            },
          ],
          "h2": "Formule de l'hypoténuse du triangle rectangle à partir des projections",
        },
        "sec-how": {
          "blocks": [
            {
              "kind": "p",
              "text": "Neuf étapes courtes vous mènent d'un schéma étiqueté à une hypoténuse vérifiée.",
            },
            {
              "kind": "steps",
              "steps": [
                "Identifiez le triangle rectangle de votre problème et vérifiez qu'il possède un angle droit.",
                "Repérez l'hypoténuse : le côté opposé à l'angle droit.",
                "Trouvez le point où la hauteur issue de l'angle droit rencontre l'hypoténuse.",
                "Identifiez les deux projections p et q comme les segments de part et d'autre de ce point, en utilisant le guide de la <a href=\"/right-triangle-projection-p-calculator/\">calculatrice de projection p</a> pour le premier segment. La <a href=\"/right-triangle-projection-q-calculator/\">calculatrice de projection q</a> traite le second segment de la même manière.",
                "Convertissez les deux mesures en unités compatibles si nécessaire.",
                "Saisissez p dans le champ Projection p et q dans le champ Projection q.",
                "Cliquez sur le bouton Calculer l'hypoténuse c.",
                "Lisez le résultat de l'hypoténuse dans l'unité choisie.",
                "Utilisez Réinitialiser avant de commencer un nouveau problème.",
              ],
            },
            {
              "kind": "p",
              "text": "Une identification correcte est le plus important. Les champs attendent les deux segments de l'hypoténuse elle-même, pas les côtés ni la hauteur. Saisir une mauvaise paire produit quand même une somme, mais ce ne sera pas l'hypoténuse.",
            },
          ],
          "h2": "Comment utiliser la calculatrice d'hypoténuse à partir des projections",
        },
        "sec-intro": {
          "blocks": [
            {
              "kind": "p",
              "text": "Cette calculatrice trouve l'hypoténuse d'un triangle rectangle en additionnant ses deux segments de projection.",
            },
            {
              "kind": "p",
              "text": "Les projections p et q sont les deux morceaux de l'hypoténuse créés lorsque la hauteur issue de l'angle droit la rencontre. Saisissez les deux longueurs, et la calculatrice les additionne avec la formule [[c = p + q]] pour renvoyer l'hypoténuse complète. Par exemple, si [[p = 4]] cm et [[q = 9]] cm, alors [[c = 4 + 9 = 13]] cm.",
            },
            {
              "kind": "p",
              "text": "L'hypoténuse est le côté le plus long du triangle rectangle et se trouve en face de l'angle droit. La calculatrice apparaît en premier sur cette page, suivie de la formule, de la géométrie qui l'explique, d'exemples résolus et de moyens de vérifier votre réponse.",
            },
            {
              "kind": "p",
              "text": "Le guide convient aux collégiens qui découvrent les projections, aux classes de géométrie du lycée et à tous ceux qui vérifient un devoir. Chaque formule est traitée avec des nombres réels, pour que vous puissiez suivre chaque étape sans vous arrêter pour décoder des symboles.",
            },
          ],
          "h2": "Calculatrice d'hypoténuse du triangle rectangle à partir des projections",
        },
        "sec-manual": {
          "blocks": [
            {
              "kind": "p",
              "text": "Le calcul manuel est une simple substitution dans [[c = p + q]]. Prenez [[p = 3.6]] cm et [[q = 6.4]] cm.",
            },
            {
              "kind": "p",
              "text": "[[[c = p + q]]]",
            },
            {
              "kind": "p",
              "text": "Remplacez les valeurs : [[c = 3.6 + 6.4]]. Additionnez-les : [[c = 10]] cm.",
            },
            {
              "kind": "p",
              "text": "Alignez les virgules décimales lors d'une addition à la main : 3,6 plus 6,4 donne 10,0, et le zéro final peut être supprimé pour obtenir proprement [[c = 10]] cm. Gardez l'unité attachée à la réponse ; un nombre seul n'est pas une longueur complète.",
            },
            {
              "kind": "p",
              "text": "Aucun calcul pythagoricien n'est nécessaire, car les deux longueurs de projection sont déjà connues. Pour vérifier, assurez-vous que la somme a du sens : 3,6 plus 6,4 font clairement 10, et l'hypoténuse doit être plus longue que chaque projection prise isolément.",
            },
          ],
          "h2": "Comment calculer l'hypoténuse à partir des projections manuellement",
        },
        "sec-understanding": {
          "blocks": [
            {
              "kind": "p",
              "text": "L'hypoténuse est le côté opposé à l'angle droit, et dans tout triangle rectangle non dégénéré, c'est le côté le plus long. Lorsque la hauteur issue du sommet de l'angle droit tombe perpendiculairement sur elle, l'hypoténuse est divisée en deux segments plus courts placés bout à bout sur la même ligne droite.",
            },
            {
              "kind": "p",
              "text": "Comme les deux segments se trouvent sur ce même côté, ils se comportent comme deux morceaux adjacents d'une règle : les placer ensemble reconstruit exactement tout le côté, sans chevauchement ni espace. C'est pourquoi les projections s'additionnent toujours pour donner l'hypoténuse.",
            },
            {
              "kind": "p",
              "text": "Ces étiquettes correspondent au schéma principal ci-dessous. Les sommets A et B sont les coins aux angles aigus, C est le sommet de l'angle droit, et D est le pied de la hauteur CD sur l'hypoténuse AB, avec [[AD = p]] et [[DB = q]].",
            },
          ],
          "h2": "Comprendre l'hypoténuse et ses deux segments",
          "table": {
            "headers": [
              "Symbole",
              "Signification",
            ],
            "rows": [
              [
                "a",
                "Premier côté perpendiculaire",
              ],
              [
                "b",
                "Second côté perpendiculaire",
              ],
              [
                "c",
                "Hypoténuse complète",
              ],
              [
                "p",
                "Première projection de l'hypoténuse",
              ],
              [
                "q",
                "Seconde projection de l'hypoténuse",
              ],
              [
                "h",
                "Hauteur relative à l'hypoténuse",
              ],
            ],
          },
        },
        "sec-what": {
          "blocks": [
            {
              "kind": "p",
              "text": "Commencez par un triangle rectangle et tracez la hauteur issue du sommet de l'angle droit, perpendiculaire à l'hypoténuse. La hauteur touche l'hypoténuse en un point, appelé pied, et ce point divise l'hypoténuse en deux segments adjacents. Ces deux segments sont les projections de l'hypoténuse : [[p = AD]] et [[q = DB]] lorsque le triangle est ABC avec son angle droit en C et sa hauteur CD. La <a href=\"/right-triangle-projection-calculator/\">calculatrice de projection</a> traite chaque segment séparément.",
            },
            {
              "kind": "p",
              "text": "Une projection n'est pas un côté. Les côtés a et b sont les deux côtés qui forment l'angle droit, tandis que les projections p et q se trouvent à plat le long de l'hypoténuse elle-même. Les confondre est l'erreur d'étiquetage la plus courante, alors demandez-vous toujours : cette longueur est-elle sur l'hypoténuse, ou est-ce l'un des côtés autour de l'angle droit ?",
            },
            {
              "kind": "p",
              "text": "Voici un exemple simple pour débuter. Si la hauteur divise une hypoténuse en un segment de 4 cm et un segment de 9 cm, alors [[p = 4]] cm et [[q = 9]] cm, et l'hypoténuse complète vaut [[c = 4 + 9 = 13]] cm. La formule [[c = p + q]] reconstruit simplement tout le côté à partir de ses deux parties.",
            },
            {
              "kind": "p",
              "text": "Une bonne habitude d'étiquetage évite la plupart des erreurs : partez du sommet C de l'angle droit, tracez la hauteur jusqu'à l'hypoténuse et marquez le pied D. Le segment qui touche A est p et celui qui touche B est q. Une fois ces deux étiquettes fixées, le reste du guide s'applique directement.",
            },
          ],
          "h2": "Que sont les projections de l'hypoténuse dans un triangle rectangle ?",
        },
        "sec-altitude": {
          "blocks": [
            {
              "kind": "p",
              "text": "Les mêmes projections donnent la hauteur grâce au théorème de la moyenne géométrique : [[h^2 = pq]], donc [[h = \\sqrt{pq}]]. Avec [[p = 9]] cm et [[q = 16]] cm, [[h = \\sqrt{9 \\times 16} = \\sqrt{144} = 12]] cm.",
            },
            {
              "kind": "p",
              "text": "Comparez les deux formules : [[c = p + q]] additionne les projections, tandis que [[h = \\sqrt{pq}]] prend leur moyenne géométrique. Elles répondent à des questions différentes. L'hypoténuse est la longueur totale du côté ; la hauteur est la distance perpendiculaire de l'angle droit jusqu'à ce côté.",
            },
            {
              "kind": "p",
              "text": "Pour les problèmes de hauteur, utilisez la <a href=\"/right-triangle-altitude-from-projections-calculator/\">calculatrice de hauteur à partir des projections</a>, construite autour de [[h = \\sqrt{pq}]]. Gardez les deux résultats distincts : dans ce triangle, l'hypoténuse vaut 25 cm tandis que la hauteur n'est que de 12 cm.",
            },
            {
              "kind": "p",
              "text": "Un contrôle de vraisemblance intégré s'applique ici : la hauteur est toujours plus courte que l'hypoténuse. Dans l'exemple traité, 12 cm est bien inférieur à 25 cm. Si votre hauteur dépasse un jour votre hypoténuse, revérifiez la formule utilisée.",
            },
          ],
          "h2": "Comment les projections de l'hypoténuse se rapportent à la hauteur",
          "image": {
            "alt": "Triangle rectangle avec des projections de 9 et 16 sur l'hypoténuse, une hypoténuse de 25 et une hauteur de 12 tracée perpendiculairement à l'hypoténuse",
            "caption": "Mêmes projections, deux formules : c = 9 + 16 = 25, h = sqrt(9 x 16) = 12.",
            "src": "hypotenuse-altitude-p9q16.svg",
          },
        },
        "sec-diagram": {
          "blocks": [
            {
              "kind": "p",
              "text": "Le schéma principal montre le triangle ABC avec l'angle droit en C. Le côté AC est le côté a, le côté BC est le côté b, et le côté AB est l'hypoténuse c. La hauteur CD part de C perpendiculairement à AB et la touche en D.",
            },
            {
              "kind": "p",
              "text": "Un bon ordre de lecture commence au sommet C : suivez le côté a jusqu'à A, le côté b jusqu'à B, puis parcourez l'hypoténuse c de A à B. Faites une pause en D, le pied de la hauteur, pour voir la division en p et q. Lire le schéma ainsi relie les étiquettes à la formule.",
            },
            {
              "kind": "p",
              "text": "Le point D divise AB en deux parties : le segment AD est la projection p et le segment DB est la projection q. Les étiquettes sont placées directement sur le schéma pour que vous puissiez voir où p commence, où q se termine, et comment les deux couvrent ensemble tout le côté de A à B.",
            },
            {
              "kind": "p",
              "text": "Les marqueurs d'angle droit en C et D confirment la géométrie. Le marqueur en C fait de AB l'hypoténuse, et le marqueur en D confirme que CD est la hauteur. Le triangle d'origine est maintenant divisé en deux triangles rectangles plus petits, ACD et CBD, qui reviendront plus loin dans ce guide.",
            },
          ],
          "h2": "Schéma des projections de l'hypoténuse du triangle rectangle expliqué",
          "image": {
            "alt": "Triangle rectangle ABC avec l'angle droit en C ; hauteur CD tracée perpendiculairement à l'hypoténuse AB, la divisant en projection p (segment AD) et projection q (segment DB), avec les côtés a et b étiquetés",
            "caption": "La hauteur CD divise l'hypoténuse AB en projections p et q.",
            "src": "hypotenuse-projections-main.svg",
          },
        },
        "sec-examples": {
          "blocks": [
            {
              "kind": "p",
              "text": "Chaque exemple indique les valeurs données, la substitution et la réponse finale. Le commentaire reste court pour que le calcul reste visible.",
            },
            {
              "kind": "p",
              "text": "Tous les exemples gardent des unités cohérentes, des valeurs données à la réponse. Lorsque les unités diffèrent, l'exemple convertit d'abord et le dit explicitement, pour que vous puissiez adopter cette habitude dans votre propre travail.",
            },
            {
              "kind": "h3",
              "text": "Exemple 1 : Nombres entiers",
            },
            {
              "kind": "p",
              "text": "Avec [[p = 4]] cm et [[q = 9]] cm, la formule [[c = p + q]] donne [[c = 4 + 9]], donc [[c = 13]] cm. Deux projections entières produisent ici une hypoténuse entière, mais ce n'est pas garanti en général.",
            },
            {
              "kind": "h3",
              "text": "Exemple 2 : Projections égales",
            },
            {
              "kind": "p",
              "text": "Avec [[p = 5]] cm et [[q = 5]] cm, [[c = 5 + 5 = 10]] cm. Des projections égales signifient que la hauteur frappe le milieu de l'hypoténuse, ce qui arrive exactement quand les deux côtés sont égaux : un triangle rectangle isocèle. Comme les côtés sont égaux, la hauteur est aussi la médiane, c'est pourquoi elle coupe l'hypoténuse en deux.",
            },
            {
              "kind": "h3",
              "text": "Exemple 3 : Projections décimales",
            },
            {
              "kind": "p",
              "text": "Avec [[p = 3.6]] m et [[q = 6.4]] m, [[c = 3.6 + 6.4 = 10]] m. Alignez les virgules décimales et additionnez comme d'habitude ; l'unité reste le mètre tout au long.",
            },
            {
              "kind": "h3",
              "text": "Exemple 4 : Projections inégales",
            },
            {
              "kind": "p",
              "text": "Avec [[p = 2]] cm et [[q = 18]] cm, [[c = 2 + 18 = 20]] cm. Les projections n'ont pas besoin d'être proches en taille ; la somme reconstruit toujours l'hypoténuse complète.",
            },
            {
              "kind": "h3",
              "text": "Exemple 5 : Mesures plus grandes",
            },
            {
              "kind": "p",
              "text": "Avec [[p = 125]] mm et [[q = 275]] mm, [[c = 125 + 275 = 400]] mm. De grandes valeurs ne changent rien à la méthode.",
            },
            {
              "kind": "h3",
              "text": "Exemple 6 : Unités mixtes",
            },
            {
              "kind": "p",
              "text": "Avec [[p = 40]] mm et [[q = 9]] cm, convertissez d'abord : 40 mm égalent 4 cm. Puis [[c = 4 + 9 = 13]] cm. Additionner avant de convertir donnerait un 49 sans signification.",
            },
            {
              "kind": "h3",
              "text": "Exemple 7 : Mesures fractionnaires",
            },
            {
              "kind": "p",
              "text": "Avec [[p = \\frac{1}{2}]] ft et [[q = \\frac{3}{4}]] ft, écrivez les deux avec le dénominateur 4 : [[c = \\frac{2}{4} + \\frac{3}{4} = \\frac{5}{4}]] ft, soit 1,25 ft.",
            },
            {
              "kind": "h3",
              "text": "Exemple 8 : Trouver une projection manquante",
            },
            {
              "kind": "p",
              "text": "Avec [[c = 25]] cm et [[p = 9]] cm, résolvez [[q = c - p]] : [[q = 25 - 9 = 16]] cm. Cette étape inverse montre que la relation fonctionne dans les deux sens, bien que la calculatrice de cette page additionne p et q pour trouver c plutôt que de résoudre une projection manquante.",
            },
          ],
          "h2": "Exemples résolus d'hypoténuse à partir de projections",
        },
        "sec-legs": {
          "blocks": [
            {
              "kind": "p",
              "text": "Les projections déterminent aussi les côtés grâce au théorème des projections : [[a^2 = cp]] et [[b^2 = cq]]. Chaque côté est la moyenne géométrique de l'hypoténuse et de sa projection adjacente, un fait qui découle de la similitude des petits triangles avec le triangle d'origine.",
            },
            {
              "kind": "p",
              "text": "Prendre les racines carrées donne [[a = \\sqrt{cp}]] et [[b = \\sqrt{cq}]]. Avec [[p = 9]] cm et [[q = 16]] cm, trouvez d'abord [[c = 9 + 16 = 25]] cm. Puis [[a = \\sqrt{25 \\times 9} = \\sqrt{225} = 15]] cm et [[b = \\sqrt{25 \\times 16} = \\sqrt{400} = 20]] cm.",
            },
            {
              "kind": "p",
              "text": "L'hypoténuse est donc la clé qui débloque les côtés restants : une fois c connu, chaque côté découle de sa propre projection. La <a href=\"/right-triangle-side-calculator/\">calculatrice de côtés</a> résout directement des problèmes similaires de côtés manquants.",
            },
            {
              "kind": "p",
              "text": "L'appariement n'est pas arbitraire : le côté a se trouve contre la projection p dans le petit triangle ACD, qui est semblable au triangle entier, donc a se relie à c et p tandis que b se relie à c et q. Se souvenir de quel côté s'apparie avec quelle projection permet de garder les racines carrées sur les bons segments.",
            },
          ],
          "h2": "Relation entre les projections de l'hypoténuse et les côtés du triangle",
          "image": {
            "alt": "Triangle rectangle avec des projections de 9 et 16 et une hypoténuse de 25, montrant que le côté a vaut 15 d'après a au carré égal 25 fois 9, et que le côté b vaut 20 d'après b au carré égal 25 fois 16",
            "caption": "Côté a = sqrt(25 x 9) = 15 ; côté b = sqrt(25 x 16) = 20.",
            "src": "hypotenuse-projection-theorem-legs.svg",
          },
        },
        "sec-why": {
          "blocks": [
            {
              "kind": "p",
              "text": "La raison est le postulat d'addition des segments : si le point D se trouve sur le segment AB entre A et B, alors la longueur AB égale AD plus DB. Ici, D est le pied de la hauteur et A et B sont les extrémités de l'hypoténuse, donc [[AB = AD + DB]].",
            },
            {
              "kind": "p",
              "text": "[[[c = p + q]]]",
            },
            {
              "kind": "p",
              "text": "Remplacer les symboles standard donne directement la formule. Dans un triangle rectangle non dégénéré, le pied de la hauteur tombe toujours entre les extrémités, donc le postulat s'applique toujours. Aucune trigonométrie n'est nécessaire pour cette étape.",
            },
            {
              "kind": "p",
              "text": "La similitude des triangles est l'outil derrière les relations de projection plus profondes, comme [[a^2 = cp]], mais la simple addition des segments suffit à établir [[c = p + q]]. Le schéma ci-dessous montre la même idée sur une seule ligne droite.",
            },
            {
              "kind": "p",
              "text": "Un détail mérite d'être souligné : D tombe toujours strictement entre A et B dans un vrai triangle rectangle, jamais à une extrémité et jamais en dehors du segment. Ce placement rend le postulat d'addition des segments applicable, et c'est pourquoi les projections nulles ou négatives sont rejetées.",
            },
          ],
          "h2": "Pourquoi l'hypoténuse est-elle égale à la somme de ses projections ?",
          "image": {
            "alt": "Segment droit AB divisé au point D en segment AD étiqueté p et segment DB étiqueté q, montrant que le segment entier égale p plus q",
            "caption": "Un point entre A et B divise le segment : AB = AD + DB.",
            "src": "hypotenuse-segment-addition.svg",
          },
        },
        "sec-applications": {
          "blocks": [
            {
              "kind": "p",
              "text": "En classe et dans les devoirs, les problèmes de projection vérifient si les élèves savent étiqueter un schéma et appliquer [[c = p + q]] au lieu de recourir au théorème de Pythagore. Les exercices de dessin technique utilisent la même compétence lorsqu'une hauteur divise une hypoténuse mesurée sur un plan.",
            },
            {
              "kind": "p",
              "text": "Les modèles d'arpentage et la géométrie architecturale réduisent parfois un tracé en triangle rectangle à une hypoténuse coupée par une perpendiculaire, où l'addition des deux segments marqués donne la portée totale. Les constructions géométriques sur papier utilisent la somme pour régler les largeurs de compas.",
            },
            {
              "kind": "p",
              "text": "La condition est toujours la même : p et q doivent être des parties adjacentes d'une même hypoténuse dans un vrai triangle rectangle. Des distances arbitraires ne conviennent jamais, aussi tentante que soit l'addition.",
            },
            {
              "kind": "p",
              "text": "Les enseignants peuvent utiliser la configuration des projections comme leçon de transition : elle revoit l'addition des segments des classes précédentes tout en annonçant les théorèmes de similitude qui arriveront plus tard dans le cours de géométrie.",
            },
          ],
          "h2": "Applications pratiques des calculs de projection de l'hypoténuse",
        },
        "sec-compare": {
          "blocks": [
            {
              "kind": "p",
              "text": "Deux chemins mènent à l'hypoténuse. Lorsque les segments de la hauteur sont connus, utilisez l'addition des segments : [[c = p + q]]. Lorsque les deux côtés autour de l'angle droit sont connus à la place, utilisez le théorème de Pythagore : [[c = \\sqrt{a^2 + b^2}]].",
            },
            {
              "kind": "p",
              "text": "Choisissez la formule des projections quand le problème donne le pied de la hauteur et ses deux segments ; choisissez la formule des côtés quand il donne les deux côtés perpendiculaires. Dans un même triangle cohérent, les deux chemins produisent le même c.",
            },
            {
              "kind": "p",
              "text": "Un contrôle croisé rapide relie les deux formules. À partir des projections [[p = 9]] et [[q = 16]], [[c = 25]]. Les côtés sont [[a = 15]] et [[b = 20]], et [[\\sqrt{15^2 + 20^2} = \\sqrt{625} = 25]]. Les deux chemins aboutissent à la même hypoténuse.",
            },
          ],
          "h2": "Hypoténuse à partir des projections ou hypoténuse à partir des côtés",
          "table": {
            "headers": [
              "Valeurs connues",
              "Formule",
              "Méthode",
            ],
            "rows": [
              [
                "Projections p et q",
                "c = p + q",
                "Addition des segments",
              ],
              [
                "Côtés a et b",
                "c = √(a² + b²)",
                "Théorème de Pythagore",
              ],
            ],
          },
        },
        "sec-mistakes": {
          "blocks": [
            {
              "kind": "p",
              "text": "Chaque erreur ci-dessous est suivie de sa correction.",
            },
            {
              "kind": "steps",
              "steps": [
                "Multiplier p et q au lieu de les additionner. Avec [[p = 4]] et [[q = 9]], le produit 36 n'a aucun sens ici ; l'hypoténuse est [[4 + 9 = 13]].",
                "Confondre les projections avec les côtés. Les côtés se rencontrent à l'angle droit ; les projections se trouvent le long de l'hypoténuse. Étiquetez chaque longueur avant de calculer.",
                "Utiliser la hauteur comme une projection. La hauteur h est perpendiculaire à l'hypoténuse, pas un morceau de celle-ci, donc elle n'a jamais sa place dans [[c = p + q]].",
                "Mélanger les unités de mesure. [[p = 40]] mm et [[q = 9]] cm doivent devenir 4 cm et 9 cm avant d'additionner ; la somme brute 49 n'a aucune unité valide.",
                "Saisir des longueurs négatives. Les projections sont positives par définition, donc une saisie négative signale une erreur de données.",
                "Confondre l'hypoténuse avec un côté. L'hypoténuse se trouve en face de l'angle droit et est le côté le plus long ; un côté ne peut jamais jouer son rôle.",
                "Oublier un segment. Additionner seulement p donne une longueur partielle ; l'hypoténuse a besoin des deux parties.",
                "Utiliser des mesures sans rapport. Les deux nombres doivent être les parties adjacentes de la même hypoténuse, pas des longueurs arbitraires du problème.",
                "Appliquer le théorème de Pythagore à p et q. La valeur [[\\sqrt{p^2 + q^2}]] n'est pas l'hypoténuse, car p et q sont colinéaires, pas perpendiculaires.",
                "Confondre [[c = p + q]] avec [[h = \\sqrt{pq}]]. L'addition trouve l'hypoténuse ; la moyenne géométrique trouve la hauteur. Échanger les formules échange les réponses.",
              ],
            },
            {
              "kind": "p",
              "text": "Si vous vous surprenez en pleine erreur, arrêtez-vous et réétiquetez le schéma avant de recalculer. La plupart des erreurs ci-dessus disparaissent une fois que p et q sont clairement marqués sur l'hypoténuse et que tout le reste est barré.",
            },
          ],
          "h2": "Erreurs courantes lors du calcul de l'hypoténuse à partir des projections",
        },
        "sec-practice": {
          "blocks": [
            {
              "kind": "p",
              "text": "Essayez ces six problèmes, puis vérifiez les réponses détaillées ci-dessous. Aucune des valeurs ne reprend les exemples résolus.",
            },
            {
              "kind": "p",
              "text": "Faites chaque problème sur papier avant de lire sa réponse. Cachez les réponses avec votre main si nécessaire ; le problème en plusieurs étapes est le meilleur test pour savoir si les théorèmes de projection sont bien assimilés.",
            },
            {
              "kind": "h3",
              "text": "Problème 1 : Nombres entiers",
            },
            {
              "kind": "p",
              "text": "La hauteur d'un triangle rectangle divise l'hypoténuse en [[p = 12]] cm et [[q = 4]] cm. Trouvez c.",
            },
            {
              "kind": "h3",
              "text": "Problème 2 : Décimales",
            },
            {
              "kind": "p",
              "text": "Avec [[p = 2.5]] m et [[q = 7.5]] m, trouvez l'hypoténuse.",
            },
            {
              "kind": "h3",
              "text": "Problème 3 : Projections égales",
            },
            {
              "kind": "p",
              "text": "Avec [[p = 7]] in et [[q = 7]] in, trouvez c. De quel type de triangle s'agit-il ?",
            },
            {
              "kind": "h3",
              "text": "Problème 4 : Conversion d'unités",
            },
            {
              "kind": "p",
              "text": "Avec [[p = 200]] mm et [[q = 35]] cm, trouvez l'hypoténuse en centimètres.",
            },
            {
              "kind": "h3",
              "text": "Problème 5 : Projection manquante",
            },
            {
              "kind": "p",
              "text": "Une hypoténuse mesure [[c = 50]] cm et une projection vaut [[q = 32]] cm. Trouvez p.",
            },
            {
              "kind": "h3",
              "text": "Problème 6 : Plusieurs étapes avec les côtés",
            },
            {
              "kind": "p",
              "text": "Avec [[p = 16]] cm et [[q = 9]] cm, trouvez c, puis trouvez les côtés a et b.",
            },
            {
              "kind": "h3",
              "text": "Réponses des exercices",
            },
            {
              "kind": "p",
              "text": "Réponse 1 : [[c = 12 + 4 = 16]] cm.",
            },
            {
              "kind": "p",
              "text": "Réponse 2 : [[c = 2.5 + 7.5 = 10]] m.",
            },
            {
              "kind": "p",
              "text": "Réponse 3 : [[c = 7 + 7 = 14]] in. Des projections égales donnent un triangle rectangle isocèle.",
            },
            {
              "kind": "p",
              "text": "Réponse 4 : Convertissez 200 mm en 20 cm, puis [[c = 20 + 35 = 55]] cm.",
            },
            {
              "kind": "p",
              "text": "Réponse 5 : [[p = c - q = 50 - 32 = 18]] cm.",
            },
            {
              "kind": "p",
              "text": "Réponse 6 : [[c = 16 + 9 = 25]] cm. Puis [[a = \\sqrt{25 \\times 16} = 20]] cm et [[b = \\sqrt{25 \\times 9} = 15]] cm.",
            },
          ],
          "h2": "Exercices avec réponses",
        },
        "sec-pythagoras": {
          "blocks": [
            {
              "kind": "p",
              "text": "Les relations de projection concordent exactement avec le théorème de Pythagore. Partez du théorème des projections : [[a^2 = cp]] et [[b^2 = cq]]. Additionner les deux équations donne [[a^2 + b^2 = cp + cq]].",
            },
            {
              "kind": "p",
              "text": "[[[a^2 + b^2 = c(p + q)]]]",
            },
            {
              "kind": "p",
              "text": "Mettre c en facteur est valide car il multiplie les deux termes. Comme [[p + q = c]], la substitution donne :",
            },
            {
              "kind": "p",
              "text": "[[[a^2 + b^2 = c^2]]]",
            },
            {
              "kind": "p",
              "text": "Un contrôle numérique avec le triangle 9-16-25 confirme l'algèbre : [[a^2 + b^2 = 225 + 400 = 625]] et [[c^2 = 25^2 = 625]]. Les deux côtés concordent, ce qui est exactement ce que prédit la preuve factorisée.",
            },
            {
              "kind": "p",
              "text": "La preuve se referme proprement : la simple somme des segments est au cœur de la relation pythagoricienne. Le schéma ci-dessous montre d'où viennent [[a^2 = cp]] et [[b^2 = cq]] : chaque petit triangle partage ses angles avec le triangle d'origine, donc les côtés correspondants restent proportionnels.",
            },
          ],
          "h2": "Projections de l'hypoténuse et théorème de Pythagore",
          "image": {
            "alt": "Triangle rectangle ABC d'origine à côté des deux petits triangles semblables ACD et CBD avec des angles correspondants et des côtés correspondants étiquetés",
            "caption": "Les triangles ACD et CBD sont semblables à ABC, donnant a au carré égal cp et b au carré égal cq.",
            "src": "hypotenuse-similar-triangles.svg",
          },
        },
        "sec-special": {
          "blocks": [
            {
              "kind": "p",
              "text": "Chaque propriété ci-dessous découle directement de l'addition, ce qui les rend faciles à accepter.",
            },
            {
              "items": [
                "Projections égales : si [[p = q]], alors [[c = 2p]]. La hauteur tombe au milieu, et les deux côtés sont égaux, donnant un triangle rectangle isocèle.",
                "Projections inégales : toute paire positive convient. La hauteur penche vers la projection la plus longue, et le côté le plus proche est le plus court.",
                "Très petites projections : la formule reste valable, par exemple [[p = 0.5]] mm et [[q = 1.5]] mm donnent [[c = 2]] mm.",
                "Très grandes projections : il n'y a pas de limite supérieure, par exemple [[p = 1200]] m et [[q = 800]] m donnent [[c = 2000]] m.",
                "Mise à l'échelle : doubler les deux projections double l'hypoténuse, puisque [[2p + 2q = 2(p + q)]].",
                "Échanger p et q : [[p + q = q + p]], donc l'hypoténuse est inchangée et seules les étiquettes AD et DB changent de place.",
                "Projections de longueur nulle : [[p = 0]] signifie que la hauteur coïncide avec un côté, donc le triangle est dégénéré et la calculatrice ne l'accepte pas.",
                "Projections négatives : les longueurs ne peuvent pas être négatives, donc une saisie négative est toujours une erreur de données.",
              ],
              "kind": "list",
            },
            {
              "kind": "p",
              "text": "Le schéma compare deux triangles avec la même hypoténuse mais des découpes de projection différentes, montrant comment la forme change tandis que la somme reste fixe.",
            },
          ],
          "h2": "Cas particuliers et propriétés importantes",
          "image": {
            "alt": "Deux triangles rectangles avec la même longueur d'hypoténuse 10 : l'un avec des projections égales 5 et 5, l'autre avec des projections 2 et 8",
            "caption": "Même hypoténuse, formes différentes : p = q = 5 contre p = 2, q = 8.",
            "src": "hypotenuse-equal-vs-unequal.svg",
          },
        },
        "sec-verify": {
          "blocks": [
            {
              "kind": "p",
              "text": "Trois contrôles rapides détectent presque toutes les erreurs de calcul. Le premier est le calcul direct ; les deux autres le confirment sous des angles différents.",
            },
            {
              "kind": "h3",
              "text": "Contrôle 1 : Recalculer l'addition des segments",
            },
            {
              "kind": "p",
              "text": "Additionnez p et q à nouveau, lentement. Avec [[p = 4]] et [[q = 9]], vérifiez [[4 + 9 = 13]]. Une étourderie ici est la source la plus courante d'une mauvaise réponse.",
            },
            {
              "kind": "h3",
              "text": "Contrôle 2 : Vérifier que les côtés respectent Pythagore",
            },
            {
              "kind": "p",
              "text": "Calculez les côtés à partir des projections, [[a = \\sqrt{cp}]] et [[b = \\sqrt{cq}]], puis vérifiez [[a^2 + b^2 = c^2]]. Pour [[p = 9]], [[q = 16]], [[c = 25]] : [[a = 15]], [[b = 20]] et [[225 + 400 = 625]]. Ce contrôle géométrique va au-delà de l'addition de la calculatrice.",
            },
            {
              "kind": "h3",
              "text": "Contrôle 3 : Contrôle de vraisemblance du schéma",
            },
            {
              "kind": "p",
              "text": "Vérifiez que les deux projections sont positives, qu'elles se trouvent toutes deux sur la même hypoténuse, et que c est plus longue que chaque segment pris isolément. Si le résultat est plus petit que p ou q, une valeur a été saisie dans le mauvais champ.",
            },
          ],
          "h2": "Comment vérifier votre calcul d'hypoténuse",
        },
      },
      "faqHeading": "Foire aux questions",
      "faqs": [
        {
          "answer": "La formule est [[c = p + q]], où p et q sont les deux segments de projection de l'hypoténuse. Additionnez les deux longueurs pour obtenir l'hypoténuse complète. Par exemple, [[p = 4]] cm et [[q = 9]] cm donnent [[c = 13]] cm.",
          "question": "Quelle est la formule de l'hypoténuse à partir des projections ?",
        },
        {
          "answer": "Ce sont les deux segments créés lorsque la hauteur issue de l'angle droit rencontre l'hypoténuse. Étiquetés [[p = AD]] et [[q = DB]] dans le triangle ABC avec la hauteur CD, ils se placent bout à bout le long de l'hypoténuse et la couvrent entièrement.",
          "question": "Que sont les projections de l'hypoténuse ?",
        },
        {
          "answer": "À cause de l'addition des segments : le pied de la hauteur se trouve entre les extrémités de l'hypoténuse, donc le côté entier égale la somme de ses parties. Remplacer les symboles standard transforme [[AB = AD + DB]] en [[c = p + q]]. Aucune trigonométrie n'est requise.",
          "question": "Pourquoi additionne-t-on p et q ?",
        },
        {
          "answer": "Non. Les côtés a et b forment l'angle droit, tandis que les projections p et q se trouvent le long de l'hypoténuse. Les confondre est l'erreur d'étiquetage la plus courante, alors vérifiez la position de chaque longueur sur le schéma avant de calculer.",
          "question": "Les projections sont-elles les mêmes que les côtés du triangle ?",
        },
        {
          "answer": "Oui. La hauteur frappe rarement le milieu exact, donc p et q sont généralement inégaux. Toute paire positive est valide, et la somme donne toujours l'hypoténuse. Le triangle penche simplement vers la projection la plus longue.",
          "question": "Les projections peuvent-elles avoir des longueurs différentes ?",
        },
        {
          "answer": "La formule devient [[c = 2p]]. La hauteur coupe l'hypoténuse en deux, les deux côtés sont égaux, et le triangle est un triangle rectangle isocèle. Géométriquement, la hauteur tombe exactement au milieu.",
          "question": "Que se passe-t-il quand p et q sont égaux ?",
        },
        {
          "answer": "Oui, avec une formule différente : [[h = \\sqrt{pq}]], la moyenne géométrique des projections. La <a href=\"/right-triangle-altitude-from-projections-calculator/\">calculatrice de hauteur à partir des projections</a> est conçue pour ce calcul. Gardez-la séparée de [[c = p + q]], qui trouve l'hypoténuse.",
          "question": "Puis-je calculer la hauteur en utilisant p et q ?",
        },
        {
          "answer": "Oui. Trouvez d'abord [[c = p + q]], puis utilisez [[a = \\sqrt{cp}]] et [[b = \\sqrt{cq}]]. Pour [[p = 9]], [[q = 16]] et [[c = 25]], les côtés sont 15 et 20. Ce sont des prolongements pédagogiques plutôt que la fonction principale de cette calculatrice.",
          "question": "Puis-je trouver les côtés du triangle à partir des projections ?",
        },
        {
          "answer": "Non. Trouver l'hypoténuse à partir des projections ne demande qu'une addition, sans racines carrées. Le théorème de Pythagore devient utile quand les côtés sont connus à la place, ou pour vérifier un résultat via les côtés.",
          "question": "Le théorème de Pythagore est-il nécessaire pour ce calcul ?",
        },
        {
          "answer": "Convertissez une mesure pour que les deux utilisent la même unité avant d'additionner. Par exemple, [[p = 40]] mm deviennent 4 cm quand [[q = 9]] cm, donnant [[c = 13]] cm. Les sélecteurs d'unités de la calculatrice servent au même but.",
          "question": "Et si p et q ont des unités différentes ?",
        },
        {
          "answer": "Non. Une projection n'est qu'une partie de l'hypoténuse, donc elle doit être plus courte que le tout. Si votre résultat montre le contraire, une valeur a été saisie dans le mauvais champ.",
          "question": "Une projection peut-elle être plus longue que l'hypoténuse ?",
        },
        {
          "answer": "Recalculez [[c = p + q]] lentement, puis vérifiez que les côtés satisfont [[a^2 + b^2 = c^2]]. Vérifiez aussi que les deux projections sont positives et que c dépasse chacune d'elles. Les trois contrôles prennent moins d'une minute.",
          "question": "Comment puis-je vérifier le résultat de l'hypoténuse ?",
        },
      ],
      "relatedHeading": "Explorer les calculatrices de triangle rectangle associées",
      "relatedIntro": "Choisissez l'outil suivant selon les mesures que vous connaissez. Chaque calculatrice ci-dessous traite une tâche spécifique du triangle rectangle, des segments de projection individuels à la hauteur et aux côtés du triangle.",
      "relatedItems": [
        "Calculatrice de projection du triangle rectangle",
        "Calculatrice de projection p du triangle rectangle",
        "Calculatrice de projection q du triangle rectangle",
        "Calculatrice de hauteur à partir des projections du triangle rectangle",
        "Calculatrice de côtés du triangle rectangle",
      ],
    },
};
