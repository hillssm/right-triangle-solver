// altitudeGuideTranslations.bfr.ts: Right Triangle Altitude From Projections
// Guide (Page 29 of 45) translation.
export const B2_FR = {
  "fr": {
      "tocHeading": "Navigation des sections",
      "tocItems": {
        "sec-intro": "Calculateur de hauteur du triangle rectangle",
        "sec-calculate": "Calculer la hauteur d'un triangle rectangle",
        "sec-what": "Qu'est-ce que la hauteur d'un triangle rectangle ?",
        "sec-diagram": "Schéma de la hauteur du triangle rectangle expliqué",
        "sec-formulas": "Formules de la hauteur du triangle rectangle expliquées",
        "sec-how": "Comment utiliser le calculateur de hauteur du triangle rectangle",
        "sec-method1": "Méthode 1 : trouver la hauteur du triangle rectangle à partir des côtés",
        "sec-method2": "Méthode 2 : trouver la hauteur à partir des projections sur l'hypoténuse",
        "sec-two-sides": "Comment trouver la hauteur quand seuls deux côtés sont connus",
        "sec-why": "Pourquoi la formule de la hauteur du triangle rectangle fonctionne-t-elle ?",
        "sec-proof": "Démonstration du théorème de la hauteur à l'aide des triangles semblables",
        "sec-examples": "Exemples résolus de hauteur du triangle rectangle",
        "sec-area": "Relation entre la hauteur et l'aire du triangle",
        "sec-geomean": "Moyenne géométrique et projections sur l'hypoténuse",
        "sec-properties": "Propriétés importantes de la hauteur du triangle rectangle",
        "sec-verify": "Comment vérifier que votre réponse de hauteur est correcte",
        "sec-mistakes": "Erreurs fréquentes lors du calcul de la hauteur",
        "sec-applications": "Applications concrètes de la hauteur du triangle rectangle",
        "sec-practice": "Exercices avec réponses",
        "sec-related": "Explorer les calculateurs de triangle rectangle associés",
        "sec-faq": "Questions fréquentes",
        "sec-conclusion": "Calculateurs de triangle rectangle associés",
      },
      "sections": {
        "sec-intro": {
          "h2": "Calculateur de hauteur du triangle rectangle",
          "blocks": [
            {
              "kind": "p",
              "text": "Ce guide présente deux façons de trouver la hauteur d'un triangle rectangle, avec des exemples résolus pour chacune.",
            },
            {
              "kind": "p",
              "text": "La hauteur est le segment perpendiculaire abaissé du sommet de l'angle droit vers l'hypoténuse. Le calculateur de hauteur du triangle rectangle trouve cette longueur à partir soit des trois longueurs de côtés, soit des deux projections sur l'hypoténuse. Choisissez le mode qui correspond à ce que vous connaissez, entrez vos mesures, et le calculateur renvoie la hauteur dans la même unité.",
            },
            {
              "kind": "p",
              "text": "[[[h=\\frac{ab}{c}]]]",
            },
            {
              "kind": "p",
              "text": "[[[h=\\sqrt{pq}]]]",
            },
            {
              "kind": "p",
              "text": "La première formule utilise les deux côtés de l'angle droit [[a]] et [[b]] avec l'hypoténuse [[c]]. La seconde utilise les projections [[p]] et [[q]], les deux segments que la hauteur découpe sur l'hypoténuse. Les deux formules trouvent la même hauteur perpendiculaire ; elles partent simplement de mesures connues différentes.",
            },
          ],
        },
        "sec-calculate": {
          "h2": "Calculer la hauteur d'un triangle rectangle",
          "blocks": [
            {
              "kind": "p",
              "text": "Le calculateur situé à côté de ce guide offre deux modes, et choisir le bon est la seule configuration nécessaire. Chaque mode demande des mesures différentes et applique une formule différente, alors lisez d'abord le tableau et faites correspondre le mode à vos valeurs connues.",
            },
            {
              "kind": "p",
              "text": "Le mode 1, Hauteur vers l'hypoténuse, accepte le côté a, le côté b et l'hypoténuse c. Il calcule la hauteur avec [[h=\\frac{ab}{c}]], qui divise le produit des deux côtés de l'angle droit par l'hypoténuse. Le mode 2, Hauteur au carré, accepte la projection p et la projection q, les deux morceaux de l'hypoténuse, et applique [[h=\\sqrt{pq}]], la moyenne géométrique des projections.",
            },
            {
              "kind": "p",
              "text": "Toutes les mesures doivent utiliser des unités compatibles : des centimètres avec des centimètres, des mètres avec des mètres. Le résultat arrive dans l'unité de longueur commune de vos entrées. Utilisez le bouton Réinitialiser pour effacer les champs avant de commencer un nouveau problème.",
            },
          ],
          "table": {
            "headers": [
              "Mesures connues",
              "Mode du calculateur",
              "Formule",
            ],
            "rows": [
              [
                "Côtés a, b et hypoténuse c",
                "Hauteur vers l'hypoténuse",
                "[[h=\\frac{ab}{c}]]",
              ],
              [
                "Projections p et q sur l'hypoténuse",
                "Hauteur au carré",
                "[[h=\\sqrt{pq}]]",
              ],
            ],
          },
        },
        "sec-what": {
          "h2": "Qu'est-ce que la hauteur d'un triangle rectangle ?",
          "blocks": [
            {
              "kind": "p",
              "text": "Une hauteur est un segment perpendiculaire tracé d'un sommet d'un triangle jusqu'à la droite contenant le côté opposé. Dans un triangle rectangle, la hauteur la plus utile part du sommet de l'angle droit et rencontre l'hypoténuse à angle droit. Le point où elle arrive s'appelle le pied de la hauteur, et l'hypoténuse est la base naturelle de ce couple base-hauteur.",
            },
            {
              "kind": "p",
              "text": "Tout triangle a trois hauteurs, et un triangle rectangle ne fait pas exception. Deux d'entre elles coïncident avec les côtés de l'angle droit : si vous prenez un côté comme base, l'autre côté lui est déjà perpendiculaire, donc il sert de hauteur. La troisième hauteur va du sommet de l'angle droit à l'hypoténuse et se trouve à l'intérieur du triangle. Cette page calcule cette troisième hauteur, la seule qui demande un vrai calcul.",
            },
            {
              "kind": "p",
              "text": "Comme elle rencontre l'hypoténuse à angle droit, cette hauteur divise le triangle d'origine en deux triangles rectangles plus petits. Ces deux triangles sont semblables entre eux et au triangle d'origine, ce qui explique les élégantes relations de moyenne géométrique explorées plus loin dans ce guide.",
            },
          ],
        },
        "sec-diagram": {
          "h2": "Schéma de la hauteur du triangle rectangle expliqué",
          "blocks": [
            {
              "kind": "p",
              "text": "Le schéma ci-dessous montre le triangle ABC avec l'angle droit en C. Les côtés AC et BC se rencontrent à angle droit, donc AB est opposé à l'angle droit et doit être l'hypoténuse. La hauteur CD va de C au côté AB, le rencontrant en D avec un marqueur d'angle droit qui montre la relation de perpendicularité.",
            },
            {
              "kind": "p",
              "text": "Chaque côté a une étiquette standard : AC = a, BC = b, AB = c, et la hauteur CD = h. La hauteur divise l'hypoténuse en deux projections, AD = p et DB = q, donc c = p + q. Notez que p se trouve à côté du côté a et q à côté du côté b, un motif qui compte pour la démonstration par similitude plus loin.",
            },
            {
              "kind": "p",
              "text": "Lire le schéma de gauche à droite raconte toute l'histoire : un triangle rectangle, une hauteur qui descend vers l'hypoténuse, deux segments de projection, et le triangle d'origine divisé en deux triangles rectangles plus petits, ACD et CBD, qui partagent la hauteur comme côté commun.",
            },
          ],
          "image": {
            "src": "altitude-main.svg",
            "alt": "Triangle ABC avec angle droit en C ; hauteur CD tracée vers l'hypoténuse AB, avec AC égal à a, BC égal à b, AB égal à c, CD égal à h, AD égal à p, DB égal à q",
            "caption": "La hauteur CD descend de l'angle droit C perpendiculairement à l'hypoténuse AB, la divisant en projections p et q.",
          },
        },
        "sec-formulas": {
          "h2": "Formules de la hauteur du triangle rectangle expliquées",
          "blocks": [
            {
              "kind": "p",
              "text": "Quatre formules trouvent la même hauteur, et chacune part de mesures connues différentes. Le calculateur en direct applique directement les deux premières ; les deux autres sont des méthodes manuelles que vous pouvez utiliser quand vos mesures sont incomplètes ou quand vous voulez vérifier un résultat d'une autre façon.",
            },
            {
              "kind": "p",
              "text": "La formule des côtés [[h=\\frac{ab}{c}]] a besoin des deux côtés de l'angle droit et de l'hypoténuse. La formule des projections [[h=\\sqrt{pq}]] n'a besoin que des deux segments de l'hypoténuse, et elle est équivalente au théorème de la hauteur [[h^2=pq]]. Quand vous connaissez les côtés mais pas l'hypoténuse, remplacez [[c=\\sqrt{a^2+b^2}]] pour obtenir [[h=\\frac{ab}{\\sqrt{a^2+b^2}}]]. Quand vous connaissez l'aire A et l'hypoténuse c, utilisez [[h=\\frac{2A}{c}]], qui vient directement de la formule de l'aire avec l'hypoténuse comme base.",
            },
            {
              "kind": "p",
              "text": "Ne traitez jamais ces formules comme quatre modes du calculateur. Le calculateur garde exactement deux modes : Hauteur vers l'hypoténuse et Hauteur au carré. Les autres formules servent de méthodes de calcul manuel, pour obtenir une mesure manquante avant d'entrer dans le calculateur, ou pour vérifier une réponse produite par le calculateur.",
            },
          ],
          "table": {
            "headers": [
              "Formule",
              "Entrées requises",
            ],
            "rows": [
              [
                "[[h=\\frac{ab}{c}]]",
                "Côtés a, b et hypoténuse c",
              ],
              [
                "[[h=\\sqrt{pq}]]",
                "Projections p et q",
              ],
              [
                "[[h=\\frac{ab}{\\sqrt{a^2 + b^2}}]]",
                "Les deux côtés a, b",
              ],
              [
                "[[h=\\frac{2A}{c}]]",
                "Aire A et hypoténuse c",
              ],
            ],
          },
        },
        "sec-how": {
          "h2": "Comment utiliser le calculateur de hauteur du triangle rectangle",
          "blocks": [
            {
              "kind": "p",
              "text": "Suivez ces étapes dans l'ordre et le calculateur fait le reste. Le processus prend moins d'une minute une fois que vous savez quelles mesures vous avez.",
            },
            {
              "kind": "steps",
              "steps": [
                "Identifiez vos mesures connues : s'agit-il de trois longueurs de côtés, ou des deux projections sur l'hypoténuse ?",
                "Sélectionnez le mode du calculateur correspondant : Hauteur vers l'hypoténuse pour trois côtés, Hauteur au carré pour deux projections.",
                "Entrez des mesures positives dans des unités compatibles, en convertissant d'abord si elles arrivent dans des unités mélangées.",
                "Vérifiez que les mesures décrivent un triangle rectangle valide, avec les côtés satisfaisant le théorème de Pythagore.",
                "Cliquez sur le bouton Calculer pour exécuter le mode sélectionné.",
                "Lisez le résultat de la hauteur dans l'unité commune de vos entrées.",
                "Vérifiez la réponse avec l'une des méthodes de contrôle de ce guide si le problème est important.",
                "Cliquez sur Réinitialiser avant d'entrer un nouveau problème pour que les anciennes valeurs ne se mélangent jamais aux nouvelles.",
              ],
            },
            {
              "kind": "p",
              "text": "Le choix du mode est l'étape qui compte le plus. Si vous connaissez les côtés a et b plus l'hypoténuse c, le mode Hauteur vers l'hypoténuse convient. Si vous savez seulement comment l'hypoténuse se divise en p et q, choisissez Hauteur au carré. Le mauvais mode rejette des entrées valides, alors faire correspondre le mode aux mesures évite bien des frustrations.",
            },
          ],
        },
        "sec-method1": {
          "h2": "Méthode 1 : trouver la hauteur du triangle rectangle à partir des côtés",
          "blocks": [
            {
              "kind": "p",
              "text": "Quand les trois longueurs de côtés sont connues, la hauteur vient d'une seule division. La formule [[h=\\frac{ab}{c}]] multiplie les deux côtés de l'angle droit et divise par l'hypoténuse, et chaque symbole a un sens fixe : a et b sont les côtés perpendiculaires, c est l'hypoténuse, et h est la hauteur vers l'hypoténuse.",
            },
            {
              "kind": "p",
              "text": "Le classique triangle 3-4-5 montre chaque étape. Avec a = 3 cm, b = 4 cm et c = 5 cm, remplacez dans la formule :",
            },
            {
              "kind": "p",
              "text": "[[[h=\\frac{(3 \\times 4)}{5}]]]",
            },
            {
              "kind": "p",
              "text": "Multipliez d'abord les côtés : 3 × 4 = 12. Puis divisez par l'hypoténuse :",
            },
            {
              "kind": "p",
              "text": "[[[h=\\frac{12}{5}]]]",
            },
            {
              "kind": "p",
              "text": "Le résultat est h = 2.4 cm. Notez que 2.4 est plus court que les deux côtés, ce qui arrive toujours pour la hauteur vers l'hypoténuse, et la section de démonstration expliquera plus loin pourquoi la division par c est géométriquement naturelle.",
            },
            {
              "kind": "p",
              "text": "Utilisez cette méthode chaque fois que les trois côtés sont connus ou mesurables directement. Pour un outil dédié qui n'accepte que les côtés, essayez le <a href=\"/right-triangle-altitude-from-sides-calculator/\">calculateur de hauteur à partir des côtés</a>, qui développe la même formule plus en profondeur.",
            },
          ],
          "image": {
            "src": "altitude-sides-345.svg",
            "alt": "Triangle rectangle avec côtés 3 et 4, hypoténuse 5, hauteur 2.4 tracée perpendiculairement à l'hypoténuse",
            "caption": "Un triangle 3-4-5 : la hauteur h égale (3 × 4) / 5 = 2.4.",
          },
        },
        "sec-method2": {
          "h2": "Méthode 2 : trouver la hauteur à partir des projections sur l'hypoténuse",
          "blocks": [
            {
              "kind": "p",
              "text": "Quand l'hypoténuse est déjà divisée en ses deux projections, le théorème de la hauteur donne un raccourci. Le théorème affirme [[h^2=pq]], donc la hauteur est la racine carrée du produit des deux projections :",
            },
            {
              "kind": "p",
              "text": "[[[h=\\sqrt{pq}]]]",
            },
            {
              "kind": "p",
              "text": "Prenez p = 9 cm et q = 16 cm. Écrivez d'abord la relation au carré :",
            },
            {
              "kind": "p",
              "text": "[[[h^2=9 \\times 16]]]",
            },
            {
              "kind": "p",
              "text": "Multipliez : 9 × 16 = 144, donc [[h^2=144]]. Prenez maintenant la racine carrée :",
            },
            {
              "kind": "p",
              "text": "[[[h=\\sqrt{144}]]]",
            },
            {
              "kind": "p",
              "text": "Le résultat est h = 12 cm. Cela signifie que la hauteur est la moyenne géométrique des deux projections : elle se situe entre elles en taille, plus proche de leur moyenne que de l'une ou l'autre extrémité, un sens expliqué plus en détail dans la section sur la moyenne géométrique.",
            },
            {
              "kind": "p",
              "text": "Rappelez-vous que p et q sont des segments de l'hypoténuse, pas les côtés du triangle. Une erreur fréquente est d'entrer les longueurs des côtés comme projections, ce qui produit une mauvaise réponse. Pour un outil construit autour de cette seule méthode, voir le <a href=\"/right-triangle-altitude-from-projections-calculator/\">calculateur de hauteur à partir des projections</a>.",
            },
          ],
          "image": {
            "src": "altitude-projections.svg",
            "alt": "Triangle rectangle avec hauteur h divisant l'hypoténuse en projections p = 9 et q = 16, hauteur h = 12",
            "caption": "La hauteur est la moyenne géométrique des projections : √(9 × 16) = 12.",
          },
        },
        "sec-two-sides": {
          "h2": "Comment trouver la hauteur quand seuls deux côtés sont connus",
          "blocks": [
            {
              "kind": "p",
              "text": "Parfois le troisième côté manque, mais le théorème de Pythagore le retrouve en une étape. La méthode de récupération dépend des deux côtés que vous connaissez, alors traitez chaque cas séparément.",
            },
            {
              "kind": "h3",
              "text": "Cas 1 : les deux côtés de l'angle droit sont connus",
            },
            {
              "kind": "p",
              "text": "Avec a = 6 cm et b = 8 cm, trouvez d'abord l'hypoténuse avec [[c=\\sqrt{a^2+b^2}]] :",
            },
            {
              "kind": "p",
              "text": "[[[c=\\sqrt{6^2+8^2}=\\sqrt{36+64}=\\sqrt{100}=10]]]",
            },
            {
              "kind": "p",
              "text": "Les trois côtés sont maintenant connus, alors appliquez la formule des côtés : h = (6 × 8) / 10 = 48 / 10 = 4.8 cm. L'hypoténuse manquante était le seul obstacle, et la hauteur suit directement.",
            },
            {
              "kind": "h3",
              "text": "Cas 2 : un côté et l'hypoténuse sont connus",
            },
            {
              "kind": "p",
              "text": "Avec a = 5 cm et c = 13 cm, trouvez le côté manquant avec [[b=\\sqrt{c^2-a^2}]] :",
            },
            {
              "kind": "p",
              "text": "[[[b=\\sqrt{13^2-5^2}=\\sqrt{169-25}=\\sqrt{144}=12]]]",
            },
            {
              "kind": "p",
              "text": "Avec b = 12 cm retrouvé, la hauteur est h = (5 × 12) / 13 = 60/13 cm ≈ 4.615 cm. Ce sont des calculs manuels pour obtenir d'abord les mesures requises ; le calculateur lui-même demande des entrées complètes, alors faites ce travail préparatoire sur papier avant d'entrer les valeurs.",
            },
            {
              "kind": "p",
              "text": "Si vous avez souvent besoin du côté manquant lui-même, le <a href=\"/right-triangle-side-calculator/\">calculateur de côté</a> le trouve directement avant de passer à la hauteur.",
            },
          ],
        },
        "sec-why": {
          "h2": "Pourquoi la formule de la hauteur du triangle rectangle fonctionne-t-elle ?",
          "blocks": [
            {
              "kind": "p",
              "text": "La formule fonctionne parce qu'un triangle peut être mesuré avec deux couples base-hauteur différents, et l'aire reste la même dans les deux cas. Cet argument d'aire est la démonstration la plus courte et honnête de [[h=\\frac{ab}{c}]].",
            },
            {
              "kind": "p",
              "text": "D'abord, utilisez les côtés de l'angle droit comme couple base-hauteur. Comme les côtés sont perpendiculaires, l'aire est simplement la moitié de leur produit :",
            },
            {
              "kind": "p",
              "text": "[[[A=\\frac{ab}{2}]]]",
            },
            {
              "kind": "p",
              "text": "Utilisez maintenant l'hypoténuse comme base et la hauteur comme hauteur. Le même triangle a la même aire :",
            },
            {
              "kind": "p",
              "text": "[[[A=\\frac{ch}{2}]]]",
            },
            {
              "kind": "p",
              "text": "Deux expressions pour une aire, alors égalez-les :",
            },
            {
              "kind": "p",
              "text": "[[[\\frac{ab}{2}=\\frac{ch}{2}]]]",
            },
            {
              "kind": "p",
              "text": "Multipliez les deux côtés par 2 pour éliminer les fractions, ce qui donne ab = ch. Divisez les deux côtés par c :",
            },
            {
              "kind": "p",
              "text": "[[[h=\\frac{ab}{c}]]]",
            },
            {
              "kind": "p",
              "text": "Chaque étape est une opération arithmétique réversible, donc la division par l'hypoténuse n'est pas un tour de passe-passe ; c'est le prix algébrique du passage du couple base-hauteur des côtés à celui de l'hypoténuse pendant que l'aire reste fixe.",
            },
          ],
          "image": {
            "src": "altitude-area-comparison.svg",
            "alt": "Le même triangle rectangle dessiné deux fois : d'abord avec base a et hauteur b, puis avec base c et hauteur h",
            "caption": "Même triangle, deux couples base-hauteur : l'aire égale ab/2 et ch/2, donc h égale ab/c.",
          },
        },
        "sec-proof": {
          "h2": "Démonstration du théorème de la hauteur à l'aide des triangles semblables",
          "blocks": [
            {
              "kind": "p",
              "text": "La formule des projections [[h=\\sqrt{pq}]] vient de la similitude. Gardez les étiquettes cohérentes : le triangle ABC est rectangle en C, D se trouve sur AB, CD est perpendiculaire à AB, AD = p, DB = q, et CD = h.",
            },
            {
              "kind": "p",
              "text": "La hauteur divise ABC en deux triangles rectangles plus petits, ACD et CBD. L'angle en A est commun à ABC et ACD, donc ces deux-là sont semblables ; de même l'angle en B est commun à ABC et CBD. Comme les deux petits triangles sont semblables au triangle d'origine, ils sont semblables entre eux : le triangle ACD est semblable au triangle CBD.",
            },
            {
              "kind": "p",
              "text": "Écrivez la similitude comme une proportion des côtés correspondants. Le petit côté de ACD est p et le grand côté est h ; dans CBD le petit côté est h et le grand côté est q. Les faire correspondre donne :",
            },
            {
              "kind": "p",
              "text": "[[[\\frac{p}{h}=\\frac{h}{q}]]]",
            },
            {
              "kind": "p",
              "text": "Faites le produit en croix : h × h = p × q, donc h² = pq. Prenez la racine carrée :",
            },
            {
              "kind": "p",
              "text": "[[[h=\\sqrt{pq}]]]",
            },
            {
              "kind": "p",
              "text": "Seule la racine positive est utilisée parce que les longueurs de côtés sont positives. Une racine négative n'a pas de sens géométrique ici. L'idée clé est que la hauteur est la moyenne proportionnelle entre les deux segments de l'hypoténuse, ce qui est exactement ce qu'est une moyenne géométrique.",
            },
          ],
          "image": {
            "src": "altitude-similar-triangles.svg",
            "alt": "Triangle rectangle d'origine ABC avec hauteur CD, à côté des deux petits triangles semblables ACD et CBD avec côtés correspondants étiquetés",
            "caption": "Les triangles ACD et CBD sont semblables : p/h = h/q, donc h au carré égale p fois q.",
          },
        },
        "sec-examples": {
          "h2": "Exemples résolus de hauteur du triangle rectangle",
          "blocks": [
            {
              "kind": "p",
              "text": "Sept exemples couvrent les deux modes du calculateur, la conversion d'unités et les mesures décimales. Chacun montre les valeurs données, la formule choisie, la substitution et la réponse finale.",
            },
            {
              "kind": "h3",
              "text": "Exemple 1 : triangle classique 3-4-5",
            },
            {
              "kind": "p",
              "text": "Avec a = 3 cm, b = 4 cm, c = 5 cm. Utilisez [[h=\\frac{ab}{c}]] : h = (3 × 4) / 5 = 12 / 5 = 2.4 cm. La hauteur est plus courte que chaque côté, comme toujours.",
            },
            {
              "kind": "h3",
              "text": "Exemple 2 : triangle 5-12-13",
            },
            {
              "kind": "p",
              "text": "Avec a = 5 m, b = 12 m, c = 13 m. Utilisez [[h=\\frac{ab}{c}]] : h = (5 × 12) / 13 = 60/13 m ≈ 4.615 m. Gardez la fraction jusqu'à la dernière étape pour une décimale propre.",
            },
            {
              "kind": "h3",
              "text": "Exemple 3 : triangle 8-15-17",
            },
            {
              "kind": "p",
              "text": "Avec a = 8 cm, b = 15 cm, c = 17 cm. Utilisez [[h=\\frac{ab}{c}]] : h = (8 × 15) / 17 = 120/17 cm ≈ 7.059 cm. Des côtés plus grands donnent toujours une hauteur plus petite que les deux.",
            },
            {
              "kind": "h3",
              "text": "Exemple 4 : projections égales sur l'hypoténuse",
            },
            {
              "kind": "p",
              "text": "Avec p = 5 cm et q = 5 cm. Utilisez [[h=\\sqrt{pq}]] : h = √(5 × 5) = √25 = 5 cm. Des projections égales signifient que la hauteur est aussi grande que possible pour cette hypoténuse, et le triangle est un triangle rectangle isocèle : chaque côté vaut 5√2 cm, environ 7.07 cm.",
            },
            {
              "kind": "h3",
              "text": "Exemple 5 : projections inégales sur l'hypoténuse",
            },
            {
              "kind": "p",
              "text": "Avec p = 4 cm et q = 25 cm. Utilisez [[h=\\sqrt{pq}]] : h = √(4 × 25) = √100 = 10 cm. Notez comment la hauteur de 10 se situe entre les deux projections, 4 et 25, ce qui est la marque de la moyenne géométrique.",
            },
            {
              "kind": "h3",
              "text": "Exemple 6 : mesures décimales",
            },
            {
              "kind": "p",
              "text": "Avec a = 1.5 m, b = 2 m, c = 2.5 m. Utilisez [[h=\\frac{ab}{c}]] : h = (1.5 × 2) / 2.5 = 3 / 2.5 = 1.2 m. Les décimales fonctionnent exactement comme les nombres entiers tant que chaque valeur utilise la même unité.",
            },
            {
              "kind": "h3",
              "text": "Exemple 7 : unités de mesure différentes",
            },
            {
              "kind": "p",
              "text": "Avec a = 30 cm, b = 0.4 m, c = 0.5 m. Convertissez d'abord tout en centimètres : b = 40 cm, c = 50 cm. Alors h = (30 × 40) / 50 = 1200 / 50 = 24 cm. Convertir avant de substituer évite l'erreur d'unité la plus fréquente.",
            },
          ],
        },
        "sec-area": {
          "h2": "Relation entre la hauteur et l'aire du triangle",
          "blocks": [
            {
              "kind": "p",
              "text": "L'aire et la hauteur se déterminent mutuellement une fois l'hypoténuse connue. Avec l'hypoténuse comme base, l'aire A = ch/2, donc résoudre pour la hauteur donne [[h=\\frac{2A}{c}]]. C'est une voie vraiment différente : elle saute complètement les côtés.",
            },
            {
              "kind": "p",
              "text": "Supposons qu'un problème donne l'aire A = 54 cm² et l'hypoténuse c = 15 cm. Remplacez :",
            },
            {
              "kind": "p",
              "text": "[[[h=\\frac{2 \\times 54}{15}]]]",
            },
            {
              "kind": "p",
              "text": "Multipliez le numérateur : 2 × 54 = 108. Puis divisez : h = 108 / 15 = 7.2 cm. La hauteur suit sans connaître les côtés individuels.",
            },
            {
              "kind": "p",
              "text": "Cette voie est utile quand l'aire est donnée directement, par exemple dans des problèmes énoncés sur des terrains ou des matériaux. Elle sert aussi d'outil de vérification : calculez la hauteur à partir des côtés, puis confirmez que 2A/c donne la même valeur. Le <a href=\"/right-triangle-area-calculator/\">calculateur d'aire</a> trouve l'aire à partir de toutes les mesures qu'un problème fournit.",
            },
          ],
        },
        "sec-geomean": {
          "h2": "Moyenne géométrique et projections sur l'hypoténuse",
          "blocks": [
            {
              "kind": "p",
              "text": "Le théorème de la hauteur affirme que la hauteur est la moyenne géométrique des deux projections, et la moyenne géométrique est un type spécifique de moyenne. Prenez p = 4 et q = 9. Leur moyenne géométrique est √(4 × 9) = √36 = 6, donc un triangle avec ces projections a une hauteur de 6.",
            },
            {
              "kind": "p",
              "text": "Comparez avec la moyenne arithmétique ordinaire : (4 + 9) / 2 = 6.5. Les deux moyennes diffèrent, et seul 6 est la bonne hauteur. La moyenne arithmétique fait la moyenne en additionnant, tandis que la moyenne géométrique fait la moyenne en multipliant, ce qui convient à des longueurs qui varient ensemble plutôt qu'elles ne s'additionnent.",
            },
            {
              "kind": "p",
              "text": "Géométriquement, la relation de moyenne proportionnelle h² = pq signifie que la hauteur est liée à chaque projection de la même façon que les projections sont liées entre elles. Cette symétrie est ce qui rend les deux petits triangles semblables, et c'est pourquoi la hauteur se situe toujours entre les deux projections en taille, jamais égale à la moyenne arithmétique sauf si p égale q.",
            },
          ],
        },
        "sec-properties": {
          "h2": "Propriétés importantes de la hauteur du triangle rectangle",
          "blocks": [
            {
              "kind": "p",
              "text": "Sept propriétés décrivent la hauteur vers l'hypoténuse. Ensemble, elles donnent une intuition fiable des valeurs de hauteur possibles et de leur comportement.",
            },
            {
              "kind": "list",
              "items": [
                "La hauteur vers l'hypoténuse lui est perpendiculaire, c'est donc la distance la plus courte du sommet de l'angle droit à l'hypoténuse.",
                "La hauteur divise le triangle en deux triangles plus petits, chacun semblable au triangle d'origine et semblable l'un à l'autre.",
                "La hauteur est plus courte que les deux côtés ; aucun côté ne peut être le plus court chemin vers l'hypoténuse.",
                "La hauteur est plus courte que l'hypoténuse elle-même, puisque un segment perpendiculaire est le trajet le plus court.",
                "La hauteur est la moyenne géométrique des deux projections sur l'hypoténuse, [[h=\\sqrt{pq}]].",
                "Pour une hypoténuse fixe, la hauteur est maximale quand les deux projections sont égales, ce qui arrive quand les deux côtés sont égaux.",
                "Multiplier chaque longueur de côté par le même facteur multiplie la hauteur par ce facteur ; doublez le triangle, doublez la hauteur.",
              ],
            },
            {
              "kind": "p",
              "text": "La sixième propriété a une borne précise : la hauteur ne peut jamais dépasser la moitié de l'hypoténuse, [[h \\leq \\frac{c}{2}]], avec égalité seulement quand les côtés sont égaux. Un triangle 45-45-90 avec hypoténuse 10 a une hauteur d'exactement 5, le maximum ; un triangle 6-8-10 avec la même hypoténuse n'atteint que 4.8, comme le montre le schéma.",
            },
          ],
          "image": {
            "src": "altitude-equal-vs-unequal.svg",
            "alt": "Deux triangles rectangles partageant une hypoténuse de 10 : un triangle 45-45-90 avec hauteur 5 et un triangle de type 6-8-10 avec hauteur 4",
            "caption": "Même hypoténuse 10 : des projections égales donnent la plus grande hauteur, 5.",
          },
        },
        "sec-verify": {
          "h2": "Comment vérifier que votre réponse de hauteur est correcte",
          "blocks": [
            {
              "kind": "p",
              "text": "Trois vérifications indépendantes détectent les erreurs de calcul. Utilisez au moins l'une d'elles chaque fois qu'une réponse de hauteur compte.",
            },
            {
              "kind": "h3",
              "text": "Vérification 1 : aire du triangle",
            },
            {
              "kind": "p",
              "text": "Comparez ab/2 avec ch/2 en utilisant votre hauteur. Pour le triangle 3-4-5 avec h = 2.4 : ab/2 = (3 × 4)/2 = 6, et ch/2 = (5 × 2.4)/2 = 6. Des aires concordantes confirment que la hauteur s'accorde avec les côtés.",
            },
            {
              "kind": "h3",
              "text": "Vérification 2 : moyenne géométrique",
            },
            {
              "kind": "p",
              "text": "Vérifiez [[h^2=pq]] quand les projections sont connues. Avec p = 9 et q = 16 : h² = 12² = 144, et pq = 9 × 16 = 144. L'égalité signifie que la hauteur est cohérente avec la division de l'hypoténuse.",
            },
            {
              "kind": "h3",
              "text": "Vérification 3 : théorème de Pythagore",
            },
            {
              "kind": "p",
              "text": "Confirmez [[a^2+b^2=c^2]] pour les côtés donnés : 9 + 16 = 25 dans le cas 3-4-5. Cette vérification valide les longueurs des côtés, pas la hauteur directement, mais une mauvaise entrée de côté est la raison la plus fréquente pour laquelle une réponse de hauteur échoue aux deux autres vérifications.",
            },
            {
              "kind": "p",
              "text": "Effectuez chaque vérification avec des unités cohérentes. Mélanger centimètres et mètres fausse silencieusement la vérification d'aire, alors convertissez d'abord et vérifiez ensuite.",
            },
          ],
        },
        "sec-mistakes": {
          "h2": "Erreurs fréquentes lors du calcul de la hauteur",
          "blocks": [
            {
              "kind": "p",
              "text": "Dix erreurs reviennent sans cesse. Chacune est facile à repérer une fois qu'on connaît sa signature.",
            },
            {
              "kind": "steps",
              "steps": [
                "Confondre la hauteur avec un côté. La hauteur rencontre l'hypoténuse à angle droit ; un côté rencontre l'autre côté à l'angle droit. Dans un triangle 3-4-5, h = 2.4, pas 3 ni 4.",
                "Choisir le mauvais mode du calculateur. Entrer des côtés et une hypoténuse dans le mode Hauteur au carré, qui attend des projections, produit des absurdités. Faites correspondre le mode aux mesures.",
                "Confondre projections et côtés. Entrer a = 3 et b = 4 comme p et q calcule √(12) ≈ 3.46, ce qui n'est pas la hauteur. Les projections sont des segments de l'hypoténuse.",
                "Utiliser la mauvaise hypoténuse. Diviser ab par un côté au lieu de l'hypoténuse, par exemple 12/4 = 3, surestime la hauteur. Le diviseur doit être le côté le plus long, c.",
                "Oublier la racine carrée dans la formule des projections. S'arrêter à h² = 144 donne 144 comme hauteur ; la vraie réponse est h = 12.",
                "Mélanger centimètres et mètres. Avec a = 30 cm et c = 0.5 m, substituer 0.5 directement donne une mauvaise hauteur. Convertissez d'abord : 50 cm.",
                "Entrer des longueurs de côtés invalides. Des côtés comme 2, 3, 10 ne satisfont pas le théorème de Pythagore, donc aucun triangle rectangle n'existe et aucune hauteur n'est définie.",
                "Arrondir trop tôt. Arrondir 60/13 à 4.6 avant une étape suivante propage l'erreur. Gardez la fraction et arrondissez seulement la réponse finale.",
                "Traiter h² comme la hauteur finale. Si un calcul se termine avec h² = 36, la hauteur est 6, pas 36.",
                "Appliquer les formules du triangle rectangle à un triangle quelconque. Les formules ici exigent un angle droit ; pour les autres triangles, les relations de hauteur diffèrent.",
              ],
            },
          ],
        },
        "sec-applications": {
          "h2": "Applications concrètes de la hauteur du triangle rectangle",
          "blocks": [
            {
              "kind": "p",
              "text": "Les calculs de hauteur soutiennent tout travail fondé sur la géométrie du triangle rectangle. Dans l'enseignement de la géométrie, le théorème de la hauteur donne aux élèves un premier aperçu des démonstrations de similitude et des moyennes géométriques. Le dessin technique et la conception géométrique utilisent la hauteur pour positionner des perpendiculaires lors de l'agencement de panneaux triangulaires ou de formes d'équerres.",
            },
            {
              "kind": "p",
              "text": "La géométrie d'arpentage utilise les relations du triangle rectangle pour lever des parcelles avec des décalages perpendiculaires, et les modèles de planification de construction les utilisent quand un cadre triangulaire rectangle doit rencontrer un mur à angle droit. Les calculs d'aire fonctionnent dans l'autre sens : à partir d'une hauteur et d'une hypoténuse connues, [[h=\\frac{2A}{c}]] retrouve la hauteur sans mesurer les côtés.",
            },
            {
              "kind": "p",
              "text": "Ce sont des esquisses géométriques hypothétiques, pas des procédures d'ingénierie. Les vrais travaux d'arpentage et de structure exigent des mesures adaptées, des hypothèses de conception et des normes professionnelles ; le théorème de la hauteur décrit la géométrie, il ne remplace jamais les méthodes professionnelles.",
            },
          ],
        },
        "sec-practice": {
          "h2": "Exercices avec réponses",
          "blocks": [
            {
              "kind": "p",
              "text": "Cinq problèmes utilisent des valeurs non vues dans les exemples principaux. Résolvez chacun, puis vérifiez les réponses ci-dessous.",
            },
            {
              "kind": "h3",
              "text": "Problème 1 : basé sur les côtés, niveau débutant",
            },
            {
              "kind": "p",
              "text": "Un triangle rectangle a des côtés a = 9 cm et b = 40 cm avec hypoténuse c = 41 cm. Trouvez la hauteur vers l'hypoténuse.",
            },
            {
              "kind": "h3",
              "text": "Problème 2 : basé sur les projections, niveau débutant",
            },
            {
              "kind": "p",
              "text": "La hauteur d'un triangle rectangle divise l'hypoténuse en p = 16 m et q = 36 m. Trouvez la hauteur.",
            },
            {
              "kind": "h3",
              "text": "Problème 3 : mesures décimales",
            },
            {
              "kind": "p",
              "text": "Un triangle rectangle a a = 0.6 m, b = 0.8 m, c = 1.0 m. Trouvez la hauteur vers l'hypoténuse.",
            },
            {
              "kind": "h3",
              "text": "Problème 4 : côté manquant",
            },
            {
              "kind": "p",
              "text": "Un triangle rectangle a un côté a = 7 in et une hypoténuse c = 25 in. Trouvez la hauteur vers l'hypoténuse.",
            },
            {
              "kind": "h3",
              "text": "Problème 5 : aire d'une plate-bande",
            },
            {
              "kind": "p",
              "text": "Une plate-bande triangulaire rectangle a une aire A = 96 m² et une hypoténuse de 20 m. Trouvez la hauteur vers l'hypoténuse.",
            },
            {
              "kind": "h3",
              "text": "Réponses des exercices",
            },
            {
              "kind": "p",
              "text": "Problème 1 : h = (9 × 40) / 41 = 360/41 cm ≈ 8.780 cm. Confirmez d'abord les côtés : 9² + 40² = 81 + 1600 = 1681 = 41², donc le triangle est valide.",
            },
            {
              "kind": "p",
              "text": "Problème 2 : h = √(16 × 36) = √576 = 24 m. La hauteur se situe entre les deux projections, comme la moyenne géométrique doit le faire.",
            },
            {
              "kind": "p",
              "text": "Problème 3 : h = (0.6 × 0.8) / 1.0 = 0.48 / 1.0 = 0.48 m. Les décimales exigent le même traitement que les nombres entiers.",
            },
            {
              "kind": "p",
              "text": "Problème 4 : retrouvez le côté manquant : b = √(25² − 7²) = √(625 − 49) = √576 = 24 in. Alors h = (7 × 24) / 25 = 168/25 in ≈ 6.72 in.",
            },
            {
              "kind": "p",
              "text": "Problème 5 : utilisez la voie de l'aire : h = 2A/c = (2 × 96) / 20 = 192 / 20 = 9.6 m. Aucune mesure de côté n'était nécessaire.",
            },
          ],
        },
        "sec-conclusion": {
          "h2": "Calculateurs de triangle rectangle associés",
          "blocks": [
            {
              "kind": "p",
              "text": "Ce guide a couvert les deux modes de hauteur : longueurs de côtés et projections sur l'hypoténuse. Si vous savez déjà quelles mesures vous avez, les outils spécialisés vont plus loin : le <a href=\"/right-triangle-altitude-from-sides-calculator/\">calculateur de hauteur à partir des côtés</a> et le <a href=\"/right-triangle-altitude-from-projections-calculator/\">calculateur de hauteur à partir des projections</a>. Le <a href=\"/right-triangle-projection-calculator/\">calculateur de projection</a> trouve p et q eux-mêmes quand seuls les côtés sont connus.",
            },
          ],
        },
      },
      "faqHeading": "Questions fréquentes",
      "faqs": [
        {
          "question": "Quelle est la hauteur d'un triangle rectangle ?",
          "answer": "La hauteur vers l'hypoténuse est le segment perpendiculaire allant du sommet de l'angle droit à l'hypoténuse. C'est la troisième hauteur du triangle rectangle, distincte des deux côtés, et elle divise l'hypoténuse en projections p et q.",
        },
        {
          "question": "Comment calculer la hauteur d'un triangle rectangle ?",
          "answer": "Utilisez la formule des côtés [[h=\\frac{ab}{c}]] quand les côtés et l'hypoténuse sont connus, ou la formule des projections [[h=\\sqrt{pq}]] quand les segments de l'hypoténuse sont connus. Le calculateur applique le mode qui correspond à vos mesures.",
        },
        {
          "question": "Quelle est la formule de la hauteur avec trois côtés ?",
          "answer": "Avec les côtés a et b et l'hypoténuse c, la hauteur est [[h=\\frac{ab}{c}]]. Multipliez les deux côtés et divisez par l'hypoténuse. Pour un triangle 3-4-5, h = (3 × 4) / 5 = 2.4.",
        },
        {
          "question": "Comment calculer la hauteur à partir des projections ?",
          "answer": "Le théorème de la hauteur affirme [[h^2=pq]], alors prenez la racine carrée : [[h=\\sqrt{pq}]]. Pour p = 9 et q = 16, h = √(9 × 16) = √144 = 12. Les projections sont des segments de l'hypoténuse, pas les côtés.",
        },
        {
          "question": "Puis-je calculer la hauteur avec seulement deux côtés ?",
          "answer": "Oui, en retrouvant d'abord le troisième côté. Avec les deux côtés, trouvez [[c=\\sqrt{a^2+b^2}]] ; avec un côté et l'hypoténuse, trouvez [[b=\\sqrt{c^2-a^2}]]. Puis appliquez [[h=\\frac{ab}{c}]] comme d'habitude.",
        },
        {
          "question": "L'altitude et la hauteur désignent-elles la même chose ?",
          "answer": "Dans les triangles rectangles les termes se chevauchent souvent, mais altitude a le sens précis d'un segment perpendiculaire d'un sommet au côté opposé. Sur cette page, altitude signifie toujours la perpendiculaire du sommet de l'angle droit à l'hypoténuse.",
        },
        {
          "question": "La hauteur est-elle toujours plus courte que l'hypoténuse ?",
          "answer": "Oui. La hauteur est la distance la plus courte du sommet de l'angle droit à l'hypoténuse, et l'hypoténuse est plus longue que tout segment de ce type. Elle est aussi plus courte que les deux côtés.",
        },
        {
          "question": "La hauteur peut-elle être égale à une projection sur l'hypoténuse ?",
          "answer": "Oui, quand les projections sont égales. Si p = q, alors [[h=\\sqrt{p \\times p}=p]], donc la hauteur égale chaque projection. Cela arrive dans les triangles rectangles isocèles, où la hauteur vaut aussi la moitié de l'hypoténuse.",
        },
        {
          "question": "Quel est le lien entre le théorème de la moyenne géométrique et la hauteur ?",
          "answer": "Le théorème de la moyenne géométrique est un autre nom du théorème de la hauteur : [[h=\\sqrt{pq}]] affirme que la hauteur est la moyenne géométrique des projections sur l'hypoténuse. La similitude des deux petits triangles le prouve.",
        },
        {
          "question": "Comment vérifier mon calcul de hauteur ?",
          "answer": "Comparez les deux formules d'aire ab/2 et ch/2 ; elles doivent concorder. Si les projections sont connues, confirmez [[h^2=pq]]. Vérifiez aussi [[a^2+b^2=c^2]] pour confirmer que les côtés décrivent un triangle rectangle valide.",
        },
        {
          "question": "Puis-je utiliser ce calculateur pour un triangle non rectangle ?",
          "answer": "Non. Les deux formules exigent un angle droit : l'argument d'aire a besoin de côtés perpendiculaires, et le théorème de la hauteur a besoin de la similitude de l'angle droit. Pour les autres triangles, les relations de hauteur sont différentes.",
        },
        {
          "question": "Quel mode du calculateur dois-je choisir ?",
          "answer": "Choisissez Hauteur vers l'hypoténuse quand vous connaissez les deux côtés et l'hypoténuse. Choisissez Hauteur au carré quand vous connaissez les deux projections p et q sur l'hypoténuse. Faire correspondre le mode à vos mesures connues est la seule configuration qui compte.",
        },
      ],
      "relatedHeading": "Explorer les calculateurs de triangle rectangle associés",
      "relatedIntro": "Choisissez l'outil qui correspond aux mesures que vous connaissez déjà.",
      "relatedItems": [
        "Calculateur de hauteur du triangle rectangle à partir des côtés",
        "Calculateur de hauteur du triangle rectangle à partir des projections",
        "Calculateur d'aire du triangle rectangle",
        "Calculateur de côté du triangle rectangle",
        "Calculateur de projection du triangle rectangle",
      ],
    },
};
