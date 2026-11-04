// altitudeFromProjectionsGuideTranslations.bfr.ts: Right Triangle Altitude From Projections
// Guide (Page 27 of 45) translation.
export const B2_FR = {
  "fr": {
      "tocHeading": "Navigation des sections",
      "tocItems": {
        "sec-intro": "Calculer la hauteur d'un triangle rectangle à partir des projections",
        "sec-altitude": "Qu'est-ce que la hauteur d'un triangle rectangle ?",
        "sec-projections": "Que sont les projections dans un triangle rectangle ?",
        "sec-formula": "Formule de la hauteur d'un triangle rectangle à partir des projections",
        "sec-steps": "Comment calculer la hauteur à partir des projections, étape par étape",
        "sec-diagram": "Schéma de la hauteur d'un triangle rectangle expliqué",
        "sec-proof": "Pourquoi la formule de la hauteur fonctionne-t-elle ? Démonstration avec des triangles semblables",
        "sec-examples": "Exemples résolus de hauteur à partir des projections",
        "sec-verify": "Comment vérifier votre calcul de hauteur",
        "sec-relationships": "Relation entre la hauteur, l'hypoténuse et les côtés du triangle",
        "sec-geomean": "Théorème de la moyenne géométrique et hauteur du triangle rectangle",
        "sec-special": "Cas particuliers et propriétés importantes",
        "sec-mistakes": "Erreurs fréquentes lors du calcul de la hauteur à partir des projections",
        "sec-applications": "Applications pratiques du théorème de la hauteur",
        "sec-practice": "Exercices d'entraînement avec réponses",
        "sec-related": "Découvrez les calculateurs de triangle rectangle associés",
        "sec-faq": "Questions fréquentes",
        "sec-conclusion": "Une racine carrée, une compréhension complète",
      },
      "sections": {
        "sec-intro": {
          "h2": "Calculer la hauteur d'un triangle rectangle à partir des projections",
          "blocks": [
            {
              "kind": "p",
              "text": "Multipliez les deux projections de l'hypoténuse, puis prenez la racine carrée.",
            },
            {
              "kind": "p",
              "text": "Le calculateur de hauteur d'un triangle rectangle à partir des projections trouve la hauteur d'un triangle rectangle à partir des deux projections, [[p]] et [[q]], que la hauteur découpe sur l'hypoténuse. Ni les côtés ni les angles ne sont nécessaires. Saisissez la projection [[p]] et la projection [[q]] dans la même unité, et le calculateur renvoie la hauteur [[h]] avec le théorème de la hauteur :",
            },
            {
              "kind": "p",
              "text": "[[[h=\\sqrt{p \\times q}]]]",
            },
            {
              "kind": "p",
              "text": "La formule fonctionne car tracer la hauteur issue du sommet de l'angle droit crée deux triangles plus petits qui sont semblables entre eux. La similitude impose que la hauteur soit la moyenne géométrique des deux projections. Pour illustrer rapidement, si [[p=9\\text{ cm}]] et [[q=16\\text{ cm}]], multipliez [[9]] par [[16]] pour obtenir [[144]], puis prenez la racine carrée pour obtenir une hauteur de [[12\\text{ cm}]].",
            },
            {
              "kind": "p",
              "text": "Tapez le premier segment de l'hypoténuse dans le champ Projection [[p]] et le second dans le champ Projection [[q]] en gardant les deux dans la même unité. Appuyez sur Calculer pour voir la hauteur, et Réinitialiser efface les champs pour un nouveau problème. Le résultat porte la même unité que les entrées. Si vous connaissez plutôt les côtés du triangle, essayez le <a href=\"/right-triangle-altitude-calculator/\">calculateur de hauteur</a> conçu pour ce cas.",
            },
          ],
        },
        "sec-altitude": {
          "h2": "Qu'est-ce que la hauteur d'un triangle rectangle ?",
          "blocks": [
            {
              "kind": "p",
              "text": "La hauteur d'un triangle rectangle est le segment perpendiculaire tracé du sommet de l'angle droit jusqu'à l'hypoténuse. Sa longueur mesure la plus courte distance entre ce sommet et l'hypoténuse, car une perpendiculaire est toujours le chemin le plus court d'un point à une droite.",
            },
            {
              "kind": "p",
              "text": "Tracez la hauteur et elle atteint l'hypoténuse en un point appelé le pied de la hauteur, généralement noté D. Depuis D, la hauteur monte à exactement 90 degrés pour rejoindre le sommet C de l'angle droit. C'est cette rencontre à angle droit qui fait de CD la hauteur plutôt qu'un simple segment.",
            },
            {
              "kind": "p",
              "text": "Les débutants confondent parfois la hauteur avec l'un des côtés. Les côtés AC et BC se rencontrent à l'angle droit et forment les côtés extérieurs du triangle. La hauteur CD passe à l'intérieur du triangle, du sommet C au côté AB. C'est un troisième segment, distinct, avec sa propre longueur [[h]], et il n'existe que lorsque la hauteur est réellement tracée.",
            },
            {
              "kind": "p",
              "text": "L'hypoténuse peut servir de base car n'importe quel côté peut être une base une fois la hauteur correspondante tracée, ce qui permet d'écrire l'aire comme la moitié du produit de l'hypoténuse par cette hauteur. Tracer la hauteur divise aussi le triangle en deux triangles rectangles plus petits, ACD et CBD, qui portent les relations de similitude à l'origine de chaque formule de cette page.",
            },
          ],
        },
        "sec-projections": {
          "h2": "Que sont les projections dans un triangle rectangle ?",
          "blocks": [
            {
              "kind": "p",
              "text": "Lorsque la hauteur CD rencontre l'hypoténuse AB, le pied D divise AB en deux segments plus petits : AD, appelé [[p]], et DB, appelé [[q]]. Ces deux segments sont les projections des côtés sur l'hypoténuse. Chacun est l'ombre qu'un côté projette sur l'hypoténuse quand la lumière brille droit le long de la hauteur.",
            },
            {
              "kind": "p",
              "text": "La projection [[p]] se trouve à côté du côté AC, et la projection [[q]] se trouve à côté du côté BC. Comme ce sont les deux morceaux de l'hypoténuse, elles s'additionnent exactement :",
            },
            {
              "kind": "p",
              "text": "[[[p+q=c]]]",
            },
            {
              "kind": "p",
              "text": "Ici [[c]] est l'hypoténuse complète. Cette relation d'addition aide à vérifier les réponses et à retrouver une projection manquante quand l'hypoténuse et une projection sont connues. Si vous avez besoin du calcul inverse, c'est-à-dire trouver les projections à partir des longueurs des côtés, le <a href=\"/right-triangle-projection-calculator/\">calculateur de projections</a> traite cette direction.",
            },
            {
              "kind": "p",
              "text": "Les deux projections doivent être des longueurs positives. Une valeur nulle ou négative ne décrit aucun vrai triangle, seulement une forme dégénérée. Et les projections ne sont pas les côtés eux-mêmes : les côtés AC et BC s'inclinent vers les côtés, tandis que [[p]] et [[q]] reposent à plat le long de l'hypoténuse. Les confondre est l'une des erreurs les plus fréquentes des élèves.",
            },
          ],
          "table": {
            "headers": [
              "Mesure",
              "Signification",
            ],
            "rows": [
              [
                "[[p]]",
                "Premier segment de l'hypoténuse",
              ],
              [
                "[[q]]",
                "Second segment de l'hypoténuse",
              ],
              [
                "[[h]]",
                "Hauteur perpendiculaire",
              ],
              [
                "[[c]]",
                "Hypoténuse complète",
              ],
              [
                "[[a]]",
                "Premier côté du triangle",
              ],
              [
                "[[b]]",
                "Second côté du triangle",
              ],
            ],
          },
        },
        "sec-formula": {
          "h2": "Formule de la hauteur d'un triangle rectangle à partir des projections",
          "blocks": [
            {
              "kind": "p",
              "text": "Le théorème de la hauteur énonce :",
            },
            {
              "kind": "p",
              "text": "[[[h^2=p \\times q]]]",
            },
            {
              "kind": "p",
              "text": "Prendre la racine carrée positive des deux membres donne la formule de travail :",
            },
            {
              "kind": "p",
              "text": "[[[h=\\sqrt{p \\times q}]]]",
            },
            {
              "kind": "p",
              "text": "Chaque symbole a un sens fixe. La lettre [[h]] désigne la hauteur relative à l'hypoténuse, la grandeur recherchée. Les lettres [[p]] et [[q]] désignent les deux projections de l'hypoténuse, les grandeurs que vous saisissez. La multiplication joint les projections, et la racine carrée défait ce produit pour renvoyer une longueur.",
            },
            {
              "kind": "p",
              "text": "La multiplication apparaît car la similitude entre les deux petits triangles produit la proportion [[\\frac{h}{p}=\\frac{q}{h}]]. Le produit en croix de cette proportion donne [[h^2=p\\times q]]. La racine carrée apparaît car [[h]] est une longueur, et seule la racine positive de [[h^2]] désigne une distance réelle.",
            },
            {
              "kind": "p",
              "text": "Les unités méritent attention. Si [[p]] et [[q]] sont toutes deux mesurées en centimètres, leur produit est en centimètres carrés, ce qui est correct pour une étape intermédiaire de type aire. Prendre la racine carrée reconvertit les centimètres carrés en simples centimètres pour la hauteur finale. C'est pourquoi les deux entrées doivent partager la même unité : mélanger les unités corromprait le produit et la réponse. Un moyen compact de retenir la formule est que la hauteur est la moyenne géométrique des deux projections, puisque la moyenne géométrique de deux nombres est la racine carrée de leur produit.",
            },
          ],
        },
        "sec-steps": {
          "h2": "Comment calculer la hauteur à partir des projections, étape par étape",
          "blocks": [
            {
              "kind": "steps",
              "steps": [
                "Identifiez les deux projections de l'hypoténuse. Cherchez les segments en lesquels le pied de la hauteur divise l'hypoténuse, et nommez celui à côté du côté AC [[p]] et celui à côté du côté BC [[q]].",
                "Vérifiez que les deux mesures utilisent la même unité. Si l'une est en millimètres et l'autre en centimètres, convertissez l'une d'elles avant d'appliquer la formule.",
                "Multipliez [[p]] et [[q]]. Le produit [[h^2]] est une valeur intermédiaire de type aire, donc son unité est le carré de l'unité d'entrée.",
                "Prenez la racine carrée positive du produit. La racine négative est écartée car une longueur ne peut pas être négative.",
                "Écrivez la réponse finale avec son unité. Un nombre sans unité invite aux erreurs par la suite, surtout quand il alimente un calcul plus long.",
                "Vérifiez que la réponse est raisonnable. La hauteur se trouve toujours entre les deux projections, et elle ne peut jamais dépasser la moitié de l'hypoténuse.",
              ],
            },
            {
              "kind": "p",
              "text": "Voici la méthode appliquée à un exemple complet. Supposons [[p=4\\text{ cm}]] et [[q=9\\text{ cm}]]. Multipliez d'abord : [[4\\times 9=36]], donc [[h^2=36\\text{ cm}^2]]. Puis prenez la racine carrée positive :",
            },
            {
              "kind": "p",
              "text": "[[[h=\\sqrt{36}=6\\text{ cm}]]]",
            },
            {
              "kind": "p",
              "text": "La hauteur est [[6\\text{ cm}]]. À titre de vérification rapide, [[6]] se trouve entre les projections [[4]] et [[9]], conformément au comportement de moyenne géométrique décrit plus loin dans ce guide.",
            },
          ],
        },
        "sec-diagram": {
          "h2": "Schéma de la hauteur d'un triangle rectangle expliqué",
          "blocks": [
            {
              "kind": "p",
              "text": "Le triangle ABC a son angle droit en C. Depuis C, la hauteur CD descend perpendiculairement à l'hypoténuse AB, la rencontrant au pied D. Le segment AD est noté [[p]], DB est noté [[q]], et CD est noté [[h]], tandis que l'hypoténuse AB est [[c]] et les côtés AC et BC sont [[a]] et [[b]].",
            },
            {
              "kind": "p",
              "text": "Deux petits carrés marquent les deux angles droits : un en C à l'intérieur du triangle d'origine, et un en D où la hauteur rencontre l'hypoténuse. La hauteur CD apparaît comme un segment intérieur net, visuellement distinct des deux côtés qui forment le cadre extérieur du triangle.",
            },
            {
              "kind": "p",
              "text": "La hauteur divise ABC en deux triangles rectangles plus petits, ACD et CBD, qui sont semblables entre eux et au triangle d'origine. Dans les exercices de manuels, les projections sont souvent décrites comme les deux segments de l'hypoténuse, ou simplement comme les nombres situés de part et d'autre du pied de la hauteur. Nommez-les [[p]] et [[q]] avant tout calcul.",
            },
          ],
          "image": {
            "src": "altitude-main.svg",
            "alt": "Triangle rectangle ABC avec angle droit en C, hauteur CD vers l'hypoténuse AB, projections AD = [[p]] et DB = [[q]], hauteur CD = [[h]]",
            "caption": "La hauteur CD divise l'hypoténuse AB en projections [[p]] et [[q]] ; [[h]] est la moyenne géométrique de [[p]] et [[q]].",
          },
        },
        "sec-proof": {
          "h2": "Pourquoi la formule de la hauteur fonctionne-t-elle ? Démonstration avec des triangles semblables",
          "blocks": [
            {
              "kind": "p",
              "text": "Le théorème de la hauteur n'est pas une règle à apprendre par cœur aveuglément. Il découle de la similitude des deux triangles créés par la hauteur.",
            },
            {
              "kind": "p",
              "text": "Dans le triangle ACD, les angles aigus en A et en C totalisent 90 degrés, et dans le grand triangle ABC, les angles A et B totalisent aussi 90 degrés. Donc l'angle en C à l'intérieur de ACD égale l'angle B, et l'angle en A égale l'angle en C à l'intérieur de CBD. Les deux petits triangles partagent leurs trois angles, ce qui les rend semblables.",
            },
            {
              "kind": "p",
              "text": "La similitude signifie que les côtés homologues restent dans le même rapport. Dans le triangle ACD, le côté opposé à l'angle A est la hauteur [[h]]. Dans le triangle CBD, le côté opposé à l'angle égal en C est la projection [[q]]. L'autre paire correspondante est la projection [[p]] (opposé au second angle aigu de ACD) sur la hauteur [[h]] (opposé à l'angle correspondant dans CBD). Égaler ces rapports donne la proportion :",
            },
            {
              "kind": "p",
              "text": "[[[\\frac{h}{p}=\\frac{q}{h}]]]",
            },
            {
              "kind": "p",
              "text": "Le produit en croix transforme la proportion en :",
            },
            {
              "kind": "p",
              "text": "[[[h^2=p \\times q]]]",
            },
            {
              "kind": "p",
              "text": "Prendre la racine carrée des deux membres donne [[h=\\sqrt{p\\times q}]]. L'équation [[h^2=p\\times q]] a deux racines algébriques, positive et négative, mais une longueur est une grandeur positive, donc seule la racine positive décrit la hauteur.",
            },
          ],
          "image": {
            "src": "altitude-proof.svg",
            "alt": "Les deux triangles rectangles plus petits ACD et CBD avec les côtés correspondants notés pour montrer [[\\frac{h}{p}=\\frac{q}{h}]]",
            "caption": "Les triangles ACD et CBD sont semblables, donc [[\\frac{h}{p}=\\frac{q}{h}]] et [[h]] au carré vaut [[p]] fois [[q]].",
          },
        },
        "sec-examples": {
          "h2": "Exemples résolus de hauteur à partir des projections",
          "blocks": [
            {
              "kind": "h3",
              "text": "Exemple 1 : Nombres entiers simples",
            },
            {
              "kind": "p",
              "text": "Étant donné [[p=4\\text{ cm}]] et [[q=9\\text{ cm}]], substituez dans la formule :",
            },
            {
              "kind": "p",
              "text": "[[[h=\\sqrt{4 \\times 9}=\\sqrt{36}=6\\text{ cm}]]]",
            },
            {
              "kind": "p",
              "text": "La hauteur est [[6\\text{ cm}]], un nombre entier car [[36]] est un carré parfait.",
            },
            {
              "kind": "h3",
              "text": "Exemple 2 : Projections égales",
            },
            {
              "kind": "p",
              "text": "Étant donné [[p=5\\text{ cm}]] et [[q=5\\text{ cm}]] :",
            },
            {
              "kind": "p",
              "text": "[[[h=\\sqrt{5 \\times 5}=\\sqrt{25}=5\\text{ cm}]]]",
            },
            {
              "kind": "p",
              "text": "Quand les projections sont égales, la hauteur est égale à chaque projection : le cas du triangle rectangle isocèle, où la hauteur vaut exactement la moitié de l'hypoténuse.",
            },
            {
              "kind": "h3",
              "text": "Exemple 3 : Projections décimales",
            },
            {
              "kind": "p",
              "text": "Étant donné [[p=3.6\\text{ m}]] et [[q=6.4\\text{ m}]] :",
            },
            {
              "kind": "p",
              "text": "[[[h=\\sqrt{3.6 \\times 6.4}=\\sqrt{23.04}=4.8\\text{ m}]]]",
            },
            {
              "kind": "p",
              "text": "Les décimales ne changent rien : [[23.04]] est un carré parfait, donc la hauteur est exactement [[4.8\\text{ m}]].",
            },
            {
              "kind": "h3",
              "text": "Exemple 4 : Projections inégales",
            },
            {
              "kind": "p",
              "text": "Étant donné [[p=2\\text{ cm}]] et [[q=18\\text{ cm}]] :",
            },
            {
              "kind": "p",
              "text": "[[[h=\\sqrt{2 \\times 18}=\\sqrt{36}=6\\text{ cm}]]]",
            },
            {
              "kind": "p",
              "text": "La hauteur est [[6\\text{ cm}]], pas [[10\\text{ cm}]]. Faire la moyenne donne la moyenne arithmétique, [[10]], mais la hauteur est la moyenne géométrique, qui donne des valeurs plus faibles pour des entrées inégales.",
            },
            {
              "kind": "h3",
              "text": "Exemple 5 : Carré non parfait",
            },
            {
              "kind": "p",
              "text": "Étant donné [[p=5\\text{ cm}]] et [[q=7\\text{ cm}]] :",
            },
            {
              "kind": "p",
              "text": "[[[h=\\sqrt{5 \\times 7}=\\sqrt{35}\\text{ cm}\\approx 5.916\\text{ cm}]]]",
            },
            {
              "kind": "p",
              "text": "Ici [[35]] n'est pas un carré parfait, donc la réponse exacte est [[\\sqrt{35}\\text{ cm}]]. Utilisez l'approximation [[5.916\\text{ cm}]] pour le travail pratique, mais conservez la forme exacte quand la réponse sert à d'autres calculs.",
            },
            {
              "kind": "h3",
              "text": "Exemple 6 : Unités d'entrée différentes",
            },
            {
              "kind": "p",
              "text": "Étant donné [[p=40\\text{ mm}]] et [[q=9\\text{ cm}]]. Les unités diffèrent, convertissez donc d'abord : [[40\\text{ mm}=4\\text{ cm}]]. Puis :",
            },
            {
              "kind": "p",
              "text": "[[[h=\\sqrt{4 \\times 9}=\\sqrt{36}=6\\text{ cm}]]]",
            },
            {
              "kind": "p",
              "text": "Convertir d'abord est la seule manœuvre sûre : entrer [[40]] et [[9]] directement donne [[\\sqrt{40\\times 9}=\\sqrt{360}]], un nombre faux et sans unité.",
            },
          ],
        },
        "sec-verify": {
          "h2": "Comment vérifier votre calcul de hauteur",
          "blocks": [
            {
              "kind": "h3",
              "text": "Méthode 1 : Vérification par la moyenne géométrique",
            },
            {
              "kind": "p",
              "text": "Élevez votre hauteur au carré et comparez-la au produit des projections. Les deux valeurs doivent correspondre. Pour [[p=4]] et [[q=9]] avec [[h=6]] : [[6^2=36]] et [[4\\times 9=36]]. La concordance confirme le calcul.",
            },
            {
              "kind": "h3",
              "text": "Méthode 2 : Relations entre hypoténuse et côtés",
            },
            {
              "kind": "p",
              "text": "Reconstruisez tout le triangle et recoupez avec une seconde formule. Additionnez d'abord les projections : [[c=4+9=13]]. Puis retrouvez les côtés avec les relations projection-côté : [[a=\\sqrt{p\\times c}=\\sqrt{52}\\approx 7.211]] et [[b=\\sqrt{q\\times c}=\\sqrt{117}\\approx 10.817]]. Vérifiez maintenant avec [[h=ab/c]] : [[(7.211\\times 10.817)/13\\approx 78/13=6]], ce qui correspond. Un <a href=\"/right-triangle-side-calculator/\">calculateur de côtés</a> garde le calcul des côtés bien rangé pendant votre vérification.",
            },
            {
              "kind": "h3",
              "text": "Méthode 3 : Relation avec l'aire du triangle",
            },
            {
              "kind": "p",
              "text": "Le même triangle a deux expressions pour son aire. Avec les côtés : Aire = [[(a\\times b)/2=(7.211\\times 10.817)/2\\approx 39]]. Avec l'hypoténuse et la hauteur : Aire = [[(c\\times h)/2=(13\\times 6)/2=39]]. Les deux expressions concordent, ce qui confirme indépendamment [[h=6]]. L'outil <a href=\"/right-triangle-area-from-altitude-calculator/\">aire à partir de la hauteur</a> repose sur cette même relation.",
            },
          ],
        },
        "sec-relationships": {
          "h2": "Relation entre la hauteur, l'hypoténuse et les côtés du triangle",
          "blocks": [
            {
              "kind": "p",
              "text": "Cinq formules relient les six éléments notés. Le tableau ci-dessous résume ce que chacune trouve et ce dont elle a besoin.",
            },
            {
              "kind": "p",
              "text": "Les quatre premières formules ont besoin d'au moins une projection. Elles découlent des triangles semblables créés par la hauteur, donc elles ne s'appliquent que quand la hauteur est tracée depuis le sommet de l'angle droit. La cinquième formule, [[h=ab/c]], n'a besoin d'aucune projection : elle vient de l'égalisation des deux expressions d'aire, et elle fonctionne dès que les côtés et l'hypoténuse sont connus.",
            },
            {
              "kind": "p",
              "text": "C'est la différence pratique entre les deux calculateurs de hauteur de ce site. Quand vous connaissez les projections, le théorème de la hauteur donne [[h]] directement en une étape. Quand vous connaissez plutôt les côtés, <a href=\"/right-triangle-altitude-from-sides-calculator/\">trouver la hauteur à partir des côtés</a> utilise la voie de l'aire. Choisissez l'outil qui correspond à vos données.",
            },
            {
              "kind": "p",
              "text": "Une autre lecture utile de [[a^2=p\\times c]] : chaque côté est la moyenne géométrique de l'hypoténuse et de sa projection adjacente, en miroir de la hauteur qui est la moyenne géométrique des deux projections.",
            },
          ],
          "table": {
            "headers": [
              "Formule",
              "Trouve",
              "Nécessite",
            ],
            "rows": [
              [
                "[[c=p+q]]",
                "L'hypoténuse",
                "Les deux projections",
              ],
              [
                "[[h^2=p\\times q]]",
                "La hauteur",
                "Les deux projections",
              ],
              [
                "[[a^2=p\\times c]]",
                "Le côté adjacent à la projection [[p]]",
                "La projection [[p]] et l'hypoténuse",
              ],
              [
                "[[b^2=q\\times c]]",
                "Le côté adjacent à la projection [[q]]",
                "La projection [[q]] et l'hypoténuse",
              ],
              [
                "[[h=ab/c]]",
                "La hauteur",
                "Les deux côtés et l'hypoténuse",
              ],
            ],
          },
        },
        "sec-geomean": {
          "h2": "Théorème de la moyenne géométrique et hauteur du triangle rectangle",
          "blocks": [
            {
              "kind": "p",
              "text": "La moyenne géométrique de deux nombres positifs est la racine carrée de leur produit. Pour [[p]] et [[q]] elle est [[\\sqrt{p\\times q}]], ce qui est exactement la formule de la hauteur. Dire que la hauteur est la moyenne géométrique des projections revient donc simplement à reformuler le théorème autrement.",
            },
            {
              "kind": "p",
              "text": "La moyenne arithmétique est la moyenne usuelle : [[(p+q)/2]]. Pour [[p=4]] et [[q=9]], la moyenne géométrique est [[\\sqrt{36}=6]] tandis que la moyenne arithmétique est [[13/2=6.5]]. La hauteur est égale à [[6]], pas [[6.5]], car la proportion issue des triangles semblables impose une relation multiplicative, et non additive.",
            },
            {
              "kind": "p",
              "text": "La moyenne géométrique ne dépasse jamais la moyenne arithmétique pour des entrées positives, avec égalité seulement quand [[p=q]]. C'est pourquoi la hauteur est la plus grande, par rapport à l'hypoténuse, quand les projections sont égales. Un rectangle [[4]] sur [[9]] et un carré [[6]] sur [[6]] ont la même aire, [[36]], c'est la même idée dessinée en formes : la hauteur est le côté du carré dont l'aire égale celle du rectangle.",
            },
          ],
          "image": {
            "src": "altitude-geometric-mean.svg",
            "alt": "Rectangle [[4]] sur [[9]] et carré [[6]] sur [[6]] d'aire égale, plus une droite numérique comparant la moyenne géométrique [[6]] et la moyenne arithmétique [[6.5]]",
            "caption": "Pour [[p=4]] et [[q=9]], la moyenne géométrique [[6]] (la hauteur) se situe sous la moyenne arithmétique [[6.5]].",
          },
        },
        "sec-special": {
          "h2": "Cas particuliers et propriétés importantes",
          "blocks": [
            {
              "kind": "h3",
              "text": "Projections égales",
            },
            {
              "kind": "p",
              "text": "Quand [[p=q]], la hauteur est égale à cette valeur commune : [[h=\\sqrt{p\\times p}=p]]. Le pied de la hauteur tombe au milieu de l'hypoténuse, les côtés sont égaux, et le triangle est un triangle rectangle isocèle avec des angles aigus de 45 degrés, donnant la hauteur maximale pour une hypoténuse fixée.",
            },
            {
              "kind": "h3",
              "text": "Projections très inégales",
            },
            {
              "kind": "p",
              "text": "Quand [[p]] est minuscule et [[q]] est énorme, la hauteur reste modeste : [[p=1]] et [[q=100]] donnent [[h=10]], bien en dessous du milieu des projections. La moyenne géométrique accorde plus de poids à la petite entrée qu'une moyenne ne le ferait.",
            },
            {
              "kind": "h3",
              "text": "Hypoténuse fixée",
            },
            {
              "kind": "p",
              "text": "Gardez l'hypoténuse [[c=p+q]] constante et faites varier la répartition. Le produit [[p\\times q]], et donc la hauteur, est maximal quand la répartition est égale. Algébriquement, [[h\\le\\frac{p+q}{2}]], avec égalité exactement quand [[p=q]]. En clair, aucune hauteur ne peut dépasser la moitié de son hypoténuse.",
            },
            {
              "kind": "h3",
              "text": "Projections nulles",
            },
            {
              "kind": "p",
              "text": "Poser [[p=0]] donne [[h=0]] : le pied de la hauteur coïncide avec le sommet A, le triangle s'aplatit en un segment, et aucun vrai triangle ne subsiste. Traitez les projections nulles comme dégénérées, pas comme une entrée valide du calculateur.",
            },
            {
              "kind": "h3",
              "text": "Projections négatives",
            },
            {
              "kind": "p",
              "text": "Une projection est une longueur, et les longueurs ne peuvent pas être négatives. Une entrée négative n'a aucun sens géométrique et ne donne aucune hauteur valide ; l'erreur se situe en amont, dans la façon dont le segment a été mesuré.",
            },
          ],
          "image": {
            "src": "altitude-equal-vs-unequal.svg",
            "alt": "Deux triangles rectangles avec la même hypoténuse mais des répartitions de projections différentes montrant des hauteurs différentes",
            "caption": "Même hypoténuse, répartitions différentes : des projections égales donnent la hauteur la plus grande.",
          },
        },
        "sec-mistakes": {
          "h2": "Erreurs fréquentes lors du calcul de la hauteur à partir des projections",
          "blocks": [
            {
              "kind": "steps",
              "steps": [
                "Additionner les projections au lieu de les multiplier. La proportion issue des triangles semblables exige un produit : avec [[p=4]] et [[q=9]], [[\\sqrt{4+9}\\approx 3.606]] est faux, tandis que [[\\sqrt{4\\times 9}=6]] est correct.",
                "Oublier la racine carrée. S'arrêter à [[h^2=36]] laisse un nombre de type aire là où une longueur devrait être. Prenez toujours la racine carrée positive pour terminer.",
                "Confondre les projections avec les côtés du triangle. Les côtés s'inclinent hors de l'hypoténuse tandis que [[p]] et [[q]] reposent à plat le long d'elle ; seuls les segments de l'hypoténuse ont leur place dans le théorème de la hauteur.",
                "Mélanger les unités sans convertir. Avec [[p=40\\text{ mm}]] et [[q=9\\text{ cm}]], convertissez d'abord ([[40\\text{ mm}=4\\text{ cm}]]), puis calculez [[h=\\sqrt{4\\times 9}=6\\text{ cm}]].",
                "Saisir des mesures négatives. Une projection négative n'a aucun sens et peut produire des résultats imaginaires. Vérifiez que [[p]] et [[q]] sont positifs avant de calculer.",
                "Reporter [[h^2]] comme [[h]] dans des solutions plus longues. Gardez les notations bien distinctes : [[h^2=36]] est l'étape au carré, [[h=6]] est la hauteur.",
                "Arrondir trop tôt. Gardez les formes exactes comme [[\\sqrt{35}]] le plus longtemps possible et n'arrondissez que la réponse finale.",
                "Appliquer la formule à un triangle non rectangle. La proportion [[\\frac{h}{p}=\\frac{q}{h}]] nécessite l'angle droit en C ; sans lui, l'argument de similitude s'effondre et la formule ne tient pas.",
              ],
            },
          ],
        },
        "sec-applications": {
          "h2": "Applications pratiques du théorème de la hauteur",
          "blocks": [
            {
              "kind": "p",
              "text": "Les cours de géométrie utilisent ce théorème constamment. Les problèmes de hauteur vérifient si les élèves savent repérer les projections, choisir la bonne formule et vérifier avec le théorème de Pythagore, et les exercices de manuels donnent souvent les projections comme de simples nombres sur un schéma étiqueté.",
            },
            {
              "kind": "p",
              "text": "Dans les problèmes de géométrie de style construction, le théorème complète un triangle rectangle quand seules des mesures partielles sont connues. Le dessin d'une ferme triangulaire peut fixer d'abord les segments de l'hypoténuse, la hauteur déterminant alors le point culminant, et les démonstrations de similitude utilisent la même [[\\frac{h}{p}=\\frac{q}{h}]]proportion directement.",
            },
            {
              "kind": "p",
              "text": "Les relevés topographiques et les croquis d'ingénierie modélisent parfois une ligne de visée comme la hauteur d'un triangle rectangle, avec les projections lues sur une ligne de base. Deux distances arbitraires au sol ne déterminent pas à elles seules une hauteur ; la géométrie du triangle rectangle doit être réellement présente avant d'appliquer le théorème.",
            },
            {
              "kind": "p",
              "text": "Les dessins d'architecture de pignons ou de toitures pliées utilisent les mêmes relations pour retrouver une dimension manquante, à condition que l'angle droit soit réellement présent.",
            },
          ],
        },
        "sec-practice": {
          "h2": "Exercices d'entraînement avec réponses",
          "blocks": [
            {
              "kind": "h3",
              "text": "Problème 1 : Débutant",
            },
            {
              "kind": "p",
              "text": "Les projections d'un triangle rectangle sont [[p=25\\text{ cm}]] et [[q=16\\text{ cm}]]. Trouvez la hauteur.",
            },
            {
              "kind": "h3",
              "text": "Problème 2 : Débutant-intermédiaire",
            },
            {
              "kind": "p",
              "text": "Un triangle rectangle a pour projections [[p=12\\text{ m}]] et [[q=27\\text{ m}]]. Trouvez la hauteur relative à l'hypoténuse.",
            },
            {
              "kind": "h3",
              "text": "Problème 3 : Intermédiaire",
            },
            {
              "kind": "p",
              "text": "Le pied de la hauteur divise l'hypoténuse en segments de [[7\\text{ in}]] et [[28\\text{ in}]]. Quelle est la hauteur ?",
            },
            {
              "kind": "h3",
              "text": "Problème 4 : Décimales",
            },
            {
              "kind": "p",
              "text": "Un triangle rectangle a pour projections [[p=2.5\\text{ ft}]] et [[q=14.4\\text{ ft}]]. Calculez la hauteur.",
            },
            {
              "kind": "h3",
              "text": "Problème 5 : Application",
            },
            {
              "kind": "p",
              "text": "Une ferme de toiture en triangle rectangle a un entrait pour hypoténuse. Le pied de la hauteur divise l'entrait en segments de [[3.2\\text{ m}]] et [[12.8\\text{ m}]]. Trouvez la hauteur de la ferme au niveau de la hauteur.",
            },
            {
              "kind": "h3",
              "text": "Réponses des exercices d'entraînement",
            },
            {
              "kind": "p",
              "text": "1. [[h=\\sqrt{25\\times 16}=\\sqrt{400}=20\\text{ cm}]].",
            },
            {
              "kind": "p",
              "text": "2. [[h=\\sqrt{12\\times 27}=\\sqrt{324}=18\\text{ m}]].",
            },
            {
              "kind": "p",
              "text": "3. [[h=\\sqrt{7\\times 28}=\\sqrt{196}=14\\text{ in}]].",
            },
            {
              "kind": "p",
              "text": "4. [[h=\\sqrt{2.5\\times 14.4}=\\sqrt{36}=6\\text{ ft}]].",
            },
            {
              "kind": "p",
              "text": "5. [[h=\\sqrt{3.2\\times 12.8}=\\sqrt{40.96}=6.4\\text{ m}]].",
            },
          ],
        },
        "sec-conclusion": {
          "h2": "Une racine carrée, une compréhension complète",
          "blocks": [
            {
              "kind": "p",
              "text": "Une seule racine carrée résume toute l'idée : la hauteur d'un triangle rectangle est la moyenne géométrique des deux projections sur son hypoténuse. Multipliez [[p]] et [[q]], prenez la racine carrée positive, gardez les unités cohérentes, et la réponse est acquise.",
            },
            {
              "kind": "p",
              "text": "Derrière ce court calcul se cache une belle pièce de géométrie. La hauteur crée deux triangles semblables, la similitude donne la proportion, et la proportion donne la formule. Quand vous voyez cette chaîne, vérifier les réponses, éviter les erreurs et reconnaître les projections dans de nouveaux problèmes deviennent une routine.",
            },
          ],
        },
      },
      "faqHeading": "Questions fréquentes",
      "faqs": [
        {
          "question": "Quelle est la formule de la hauteur à partir des projections ?",
          "answer": "La formule est [[h=\\sqrt{p\\times q}]], où [[h]] est la hauteur relative à l'hypoténuse et [[p]] et [[q]] sont les deux projections. Les deux projections doivent être des longueurs positives mesurées dans la même unité. Multipliez-les, puis prenez la racine carrée positive. Le résultat est la hauteur dans la même unité que les entrées.",
        },
        {
          "question": "Que sont les projections de l'hypoténuse ?",
          "answer": "Les projections sont les deux segments en lesquels le pied de la hauteur divise l'hypoténuse. Dans le triangle ABC, avec l'angle droit en C et la hauteur CD, le segment AD est la projection [[p]] et DB est la projection [[q]]. Ensemble, elles forment l'hypoténuse complète, donc [[p+q=c]]. Ce sont des segments à plat le long de l'hypoténuse, pas les côtés du triangle.",
        },
        {
          "question": "Pourquoi la hauteur est-elle la moyenne géométrique de deux projections ?",
          "answer": "Parce que la hauteur crée deux triangles semblables. Dans les triangles ACD et CBD, les côtés homologues donnent la proportion [[\\frac{h}{p}=\\frac{q}{h}]]. Le produit en croix donne [[h^2=p\\times q]], donc [[h=\\sqrt{p\\times q}]]. Comme la moyenne géométrique de deux nombres est la racine carrée de leur produit, la hauteur est exactement la moyenne géométrique de [[p]] et [[q]].",
        },
        {
          "question": "Puis-je trouver la hauteur sans connaître les côtés du triangle ?",
          "answer": "Oui. Le théorème de la hauteur n'a besoin que des deux projections, les côtés ne sont donc pas nécessaires. Saisissez [[p]] et [[q]] dans le calculateur et il renvoie [[h]] directement. C'est la voie la plus rapide quand un schéma ou un énoncé donne les segments de l'hypoténuse. Si vous connaissez plutôt les côtés, une autre formule, [[h=ab/c]], s'applique.",
        },
        {
          "question": "Les deux projections peuvent-elles avoir des longueurs différentes ?",
          "answer": "Oui, et c'est généralement le cas. Les projections sont deux longueurs positives quelconques, égales ou inégales, et la formule traite les deux cas. Avec [[p=2]] et [[q=18]] la hauteur est [[6]], située entre les deux valeurs. Des projections égales sont simplement le cas particulier qui produit un triangle rectangle isocèle.",
        },
        {
          "question": "Que se passe-t-il quand les deux projections sont égales ?",
          "answer": "Quand [[p=q]], la hauteur est égale à cette valeur commune, puisque [[\\sqrt{p\\times p}=p]]. Le pied de la hauteur tombe au milieu de l'hypoténuse, et le triangle devient un triangle rectangle isocèle avec deux côtés égaux et des angles aigus de [[45^\\circ]]. Pour une hypoténuse fixée, cette répartition donne aussi la plus grande hauteur possible.",
        },
        {
          "question": "La hauteur peut-elle être plus longue que l'une ou l'autre des projections ?",
          "answer": "Elle peut dépasser la plus petite projection. Avec [[p=2]] et [[q=18]], la hauteur est [[6]], ce qui est plus long que [[p=2]]. La moyenne géométrique se situe toujours entre les deux entrées, donc la hauteur se situe entre [[p]] et [[q]]. Elle ne peut jamais dépasser la plus grande projection, ni la moitié de l'hypoténuse.",
        },
        {
          "question": "Et si les projections utilisent des unités différentes ?",
          "answer": "Convertissez l'une d'elles pour que les deux partagent la même unité avant de calculer. Par exemple, changez [[40\\text{ mm}]] en [[4\\text{ cm}]] quand l'autre projection est [[9\\text{ cm}]], puis calculez [[h=\\sqrt{4\\times 9}=6\\text{ cm}]]. Mélanger les unités sans convertir corrompt le produit. Le calculateur suppose des unités identiques, standardisez donc toujours d'abord.",
        },
        {
          "question": "La hauteur peut-elle dépasser la moitié de l'hypoténuse ?",
          "answer": "Non. Pour [[p]] et [[q]] positifs, la moyenne géométrique ne dépasse jamais la moyenne arithmétique, donc [[h=\\sqrt{p\\times q}\\le\\frac{p+q}{2}=\\frac{c}{2}]]. La hauteur vaut exactement la moitié de l'hypoténuse seulement quand [[p=q]]. Tout résultat du calculateur supérieur à la moitié de l'hypoténuse signale une erreur de saisie ou de calcul.",
        },
        {
          "question": "Comment vérifier mon calcul de hauteur ?",
          "answer": "Élevez la hauteur au carré et vérifiez qu'elle est égale à [[p\\times q]]. Pour une vérification plus approfondie, reconstruisez le triangle : [[c=p+q]], [[a=\\sqrt{p\\times c}]], [[b=\\sqrt{q\\times c}]], puis vérifiez [[h=ab/c]]. Vous pouvez aussi comparer les deux expressions de l'aire, [[(a\\times b)/2]] et [[(c\\times h)/2]], qui doivent concorder. Si les trois vérifications sont concluantes, la réponse est solide.",
        },
        {
          "question": "Le théorème de la hauteur est-il lié au théorème de Pythagore ?",
          "answer": "Ils décrivent le même triangle rectangle sous des angles différents. Le théorème de la hauteur découle de la similitude, tandis que le théorème de Pythagore relie les trois côtés : [[a^2+b^2=c^2]]. Ils se renforcent mutuellement : avec [[p=4]] et [[q=9]], les côtés [[\\sqrt{52}]] et [[\\sqrt{117}]] vérifient [[52+117=169=13^2]], ce qui confirme le triangle décrit par le théorème de la hauteur.",
        },
        {
          "question": "Puis-je utiliser cette formule pour un triangle non rectangle ?",
          "answer": "Non. La proportion [[\\frac{h}{p}=\\frac{q}{h}]] dépend des triangles semblables créés par une hauteur issue du sommet de l'angle droit. Sans cet angle droit, l'argument de similitude s'effondre et [[h^2=p\\times q]] ne s'applique pas. Pour les triangles quelconques, utilisez plutôt des formules de hauteur basées sur l'aire ou la trigonométrie, adaptées aux données fournies.",
        },
      ],
      "relatedHeading": "Découvrez les calculateurs de triangle rectangle associés",
      "relatedIntro": "Ces outils effectuent les calculs voisins : trouver les projections, trouver la hauteur à partir des longueurs des côtés, et convertir une hauteur en aire. Chacun s'associe naturellement au théorème de la hauteur de cette page.",
      "relatedItems": [
        "Calculateur de hauteur de triangle rectangle",
        "Calculateur de hauteur de triangle rectangle à partir des côtés",
        "Calculateur de projections de triangle rectangle",
        "Calculateur d'aire de triangle rectangle à partir de la hauteur",
        "Calculateur de côtés de triangle rectangle",
      ],
    },
};
