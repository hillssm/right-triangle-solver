export const B2_FR = {
  "fr": {
    "tocHeading": "Dans ce guide",
    "tocItems": {
      "sec-intro": "Comment calculer le périmètre et le demi-périmètre d'un triangle rectangle",
      "sec-right-triangle": "Qu'est-ce qu'un triangle rectangle ?",
      "sec-perimeter": "Qu'est-ce que le périmètre d'un triangle rectangle ?",
      "sec-semiperimeter": "Qu'est-ce que le demi-périmètre d'un triangle rectangle ?",
      "sec-difference": "Périmètre et demi-périmètre : quelle est la différence ?",
      "sec-modes": "Comprendre les deux modes de la calculatrice",
      "sec-howto": "Comment utiliser le calculateur de périmètre et de demi-périmètre de triangle rectangle",
      "sec-examples": "Exemples détaillés de périmètre et de demi-périmètre de triangle rectangle",
      "sec-practical": "Applications concrètes du périmètre et du demi-périmètre de triangle rectangle",
      "sec-missing-side": "Comment calculer le périmètre quand un côté est manquant",
      "sec-pythagoras": "Quel est le lien entre le théorème de Pythagore et le périmètre d'un triangle rectangle ?",
      "sec-advanced": "Comment le demi-périmètre est-il utilisé dans d'autres formules de triangles ?",
      "sec-perimeter-area": "Quelle est la différence entre le périmètre et l'aire ?",
      "sec-units": "Comprendre les unités de mesure dans les calculs de périmètre et de demi-périmètre",
      "sec-scaling": "Comment les changements de longueurs des côtés affectent-ils le périmètre et le demi-périmètre ?",
      "sec-applications": "Applications pratiques du périmètre de triangle rectangle",
      "sec-mistakes": "Erreurs fréquentes dans le calcul du périmètre et du demi-périmètre de triangle rectangle",
      "sec-verify": "Comment vérifier que le périmètre de votre triangle rectangle est correct",
      "sec-related": "Explorer les calculateurs de triangle rectangle associés",
      "sec-faq": "Questions fréquentes",
      "sec-conclusion": "Un contour, deux mesures utiles"
    },
    "sections": {
      "sec-intro": {
        "h2": "Comment calculer le périmètre et le demi-périmètre d'un triangle rectangle",
        "blocks": [
          { "kind": "p", "text": "Prenons [[a=3]], [[b=4]], [[c=5]]. Le périmètre est [[P=3+4+5]], [[[\\boxed{P=12\\text{ units}}]]] Le demi-périmètre est [[s=\\frac{3+4+5}{2}]], [[[\\boxed{s=6\\text{ units}}]]] C'est exactement ce que le calculateur de périmètre et de demi-périmètre de triangle rectangle renvoie pour ces trois entrées." },
          { "kind": "p", "text": "Le périmètre décrit le contour complet du triangle : la longueur totale que l'on parcourrait en marchant le long des trois côtés pour revenir au point de départ. Le demi-périmètre est la moitié de ce total numérique. Ce sont tous deux des longueurs, mesurées en unités comme les mètres, les centimètres, les pieds ou les pouces. Aucun des deux n'est une aire, et aucun ne s'exprime en unités carrées." },
          { "kind": "p", "text": "Trois mesures de côtés sont nécessaires parce que le contour a trois arêtes, et l'hypoténuse doit être incluse : c'est l'une des trois arêtes même si elle ne touche jamais l'angle droit. Le demi-périmètre est la moitié du périmètre parce que plusieurs formules avancées, dont la formule de Héron et la relation du rayon inscrit, sont construites sur la moitié du contour plutôt que sur le tout. Ces deux calculs sont utiles chaque fois qu'un contour triangulaire doit être mesuré : border un jardin, encadrer un cadre ou fournir une longueur à la formule suivante d'un problème plus long." }
        ]
      },
      "sec-right-triangle": {
        "h2": "Qu'est-ce qu'un triangle rectangle ?",
        "blocks": [
          { "kind": "p", "text": "Avant de commencer toute addition, les trois côtés doivent être nommés sans erreur. Les symboles ci-dessous restent fixes dans tout le guide, et la calculatrice utilise les mêmes noms." },
          { "kind": "h3", "text": "Définition d'un triangle rectangle" },
          { "kind": "p", "text": "Un triangle rectangle est un polygone à trois côtés contenant exactement un angle intérieur de 90 degrés. Il a trois sommets, trois côtés, deux angles aigus et un angle droit généralement marqué d'un petit carré. Les deux côtés qui forment l'angle droit sont les cathètes ; le côté opposé est l'hypoténuse. Comme les angles de tout triangle totalisent 180 degrés, [[A+B+C=180^\\circ]], et avec [[C=90^\\circ]] il vient [[[\\boxed{A+B=90^\\circ}]]] : les deux angles aigus sont complémentaires, donc en connaître un détermine l'autre." },
          { "kind": "h3", "text": "Que sont les deux cathètes ?" },
          { "kind": "p", "text": "La cathète [[a]] est opposée à l'angle [[A]] ; la cathète [[b]] est opposée à l'angle [[B]]. Les deux cathètes se rencontrent au sommet de l'angle droit et sont perpendiculaires entre elles : chacune forme 90 degrés avec l'autre. Elles forment le coin carré du triangle, le genre d'arête que l'on mesurerait le long d'un angle de mur ou du bord d'une table. Pour le travail sur le périmètre, leur rôle est simple : ce sont toutes deux des arêtes du contour, donc toutes deux entrent dans la somme." },
          { "kind": "h3", "text": "Qu'est-ce que l'hypoténuse ?" },
          { "kind": "p", "text": "L'hypoténuse est le côté opposé à l'angle droit, toujours le côté le plus long du triangle. Elle ne forme jamais l'angle droit ; elle s'étend en face de lui, reliant les extrémités éloignées des deux cathètes. Elle diffère des cathètes par sa position et par sa longueur : les cathètes se rencontrent à 90 degrés, tandis que l'hypoténuse rencontre chaque cathète selon un angle aigu. Elle doit être incluse dans le calcul du périmètre complet, parce que le contour n'est pas complet tant que les trois arêtes ne sont pas comptées. Si les deux cathètes sont connues, le théorème de Pythagore la retrouve par [[[\\boxed{c=\\sqrt{a^2+b^2}}]]]" },
          { "kind": "h3", "text": "Pourquoi l'angle droit est-il important ?" },
          { "kind": "p", "text": "L'angle droit est ce qui fait du triangle un triangle rectangle, et tout le reste en découle. Il identifie la forme sur un dessin ou sur le chantier : trouvez le coin carré et le nommage des côtés se met en place. C'est la condition dont le théorème de Pythagore a besoin avant de pouvoir s'appliquer. Dans les mesures de construction et les dessins d'ingénierie, l'angle droit est la référence à laquelle tout est équeré : murs, cadres et supports sont vérifiés avec lui. Pour la vérification, l'angle droit est la promesse que les trois longueurs de côtés doivent tenir par [[a^2+b^2=c^2]]." },
          { "kind": "h3", "text": "Comment identifier correctement les noms des côtés ?" },
          { "kind": "p", "text": "[[a]] et [[b]] sont les cathètes, [[c]] est l'hypoténuse, et dans un triangle rectangle non dégénéré [[c]] est le côté le plus long. L'angle droit est opposé à [[c]], donc le sommet qui porte le marqueur carré indique quel côté est [[c]] : c'est celui qui ne touche pas ce sommet. Un rapide contrôle d'ordre aide : triez les trois nombres, et le plus grand doit jouer le rôle de [[c]]. Si le côté le plus long n'est pas opposé au coin carré, les noms sont faux, et tout calcul construit dessus sera faux aussi." }
        ],
        "imgAlt": "Triangle rectangle ABC avec les cathètes a et b, l'hypoténuse c, le marqueur d'angle droit et les formules P = a+b+c, s = (a+b+c)/2",
        "figcaption": "Le triangle ABC avec les cathètes a et b, l'hypoténuse c et les deux formules du contour."
      },
      "sec-perimeter": {
        "h2": "Qu'est-ce que le périmètre d'un triangle rectangle ?",
        "blocks": [
          { "kind": "p", "text": "Le périmètre est la distance totale autour du contour extérieur d'une forme bidimensionnelle. Pour un triangle, c'est la somme des longueurs de ses trois côtés, [[[\\boxed{P=a+b+c}]]], et chaque côté doit être inclus parce que chaque côté fait partie du contour. En oublier un, et le résultat n'est pas un périmètre ; c'est une promenade partielle." },
          { "kind": "h3", "text": "Pourquoi l'hypoténuse compte-t-elle dans le périmètre ?" },
          { "kind": "p", "text": "Le périmètre mesure le contour extérieur complet, pas seulement les deux côtés perpendiculaires. Même si l'hypoténuse est opposée à l'angle droit, elle reste l'une des trois arêtes du contour : parcourez le triangle et vous parcourez aussi l'hypoténuse. L'omettre, c'est mesurer deux côtés d'un chemin brisé, pas le contour d'un triangle fermé. La formule a trois termes parce que la forme a trois arêtes ; aucune arête n'est facultative, quelle que soit l'orientation du triangle sur la page ou sur le terrain." },
          { "kind": "h3", "text": "Comment calculer le périmètre étape par étape" },
          { "kind": "p", "text": "Prenons [[a=3]], [[b=4]], [[c=5]]. Substituez dans la formule : [[P=3+4+5]]. Additionnez les deux premières longueurs : [[P=7+5]]. Résultat final : [[[\\boxed{P=12\\text{ units}}]]] Concrètement, 12 unités est la longueur d'un mètre ruban posé le long des trois arêtes bout à bout : le contour complet du triangle exprimé comme une seule longueur continue." },
          { "kind": "h3", "text": "Que vous apprend le périmètre dans le travail pratique ?" },
          { "kind": "p", "text": "Il répond à une question dans de nombreux métiers : quelle quantité de matériau le contour consomme-t-il ? Cela couvre les matériaux de bordure, les moulures de fenêtre, les bordures de clôture, les bandes de protection, les cadres décoratifs, les passages de câbles, les bordures de tissu et les profilés métalliques de chant. Dans chaque cas, le périmètre est le nombre apporté au fournisseur. Il décrit la longueur du contour complet du triangle, pas la quantité de surface à l'intérieur : 12 mètres de moulure ne disent rien de l'aire couverte par la fenêtre, et ce n'était jamais le but." }
        ]
      },
      "sec-semiperimeter": {
        "h2": "Qu'est-ce que le demi-périmètre d'un triangle rectangle ?",
        "blocks": [
          { "kind": "p", "text": "Le demi-périmètre est exactement la moitié du périmètre total du triangle : [[[\\boxed{s=\\frac{P}{2}}]]] Comme [[P=a+b+c]], il vient [[[\\boxed{s=\\frac{a+b+c}{2}}]]] L'addition vient avant la division parce que le demi-périmètre divise tout le contour en deux, pas chaque côté séparément. Diviser chaque côté d'abord puis additionner donnerait ici le même nombre, mais la formule énonce l'ordre correct des idées : additionnez le contour, puis divisez-le en deux." },
          { "kind": "h3", "text": "Comment calculer le demi-périmètre étape par étape" },
          { "kind": "p", "text": "Prenons [[a=3]], [[b=4]], [[c=5]]. Additionnez les trois côtés : [[s=\\frac{3+4+5}{2}]]. Simplifiez le total : [[s=\\frac{12}{2}]]. Résultat final : [[[\\boxed{s=6\\text{ units}}]]] Le demi-périmètre est une mesure géométrique dérivée utilisée dans plusieurs formules importantes sur les triangles ; il décrit rarement quelque chose que l'on mesurerait directement au mètre ruban, et c'est pourquoi la calculatrice le calcule pour vous." },
          { "kind": "h3", "text": "Pourquoi le demi-périmètre est-il utilisé en géométrie ?" },
          { "kind": "p", "text": "C'est la variable naturelle de la formule de Héron, de la relation du rayon inscrit [[K=rs]] et de la géométrie du cercle inscrit en général. Les formules d'aire des triangles produisent sans cesse des moitiés, et le demi-périmètre les absorbe toutes d'un coup, et c'est pourquoi les démonstrations et les formules avancées le préfèrent au périmètre total. Quand une formule demande [[s]], entrer [[P]] à la place double ou déforme le résultat d'une autre façon, donc la distinction mérite d'être gardée nette dès le départ." },
          { "kind": "h3", "text": "Le demi-périmètre est-il physiquement la moitié du contour ?" },
          { "kind": "p", "text": "Pas nécessairement. Le demi-périmètre est la moitié du périmètre numérique : 6 unités quand le périmètre est 12. Il ne décrit pas nécessairement un chemin physique continu couvrant la moitié du contour du triangle. Il n'existe pas une seule promenade le long des arêtes qui serait « le demi-périmètre » comme le périmètre est la promenade complète : la moitié est un nombre, pas un itinéraire. Traiter [[s]] comme un demi-circuit physique mène à la confusion ; traitez-le comme la moitié du total, la valeur dont les formules ont besoin." },
          { "kind": "h3", "text": "Le demi-périmètre peut-il être plus petit que le côté le plus long ?" },
          { "kind": "p", "text": "Non. L'inégalité triangulaire exige [[a+b>c]] : les deux côtés les plus courts réunis doivent dépasser le côté le plus long, sinon le triangle ne peut pas se fermer. Ajouter [[c]] des deux côtés donne [[a+b+c>2c]], et diviser en deux donne [[[\\boxed{s>c}]]] Pour un triangle valide non dégénéré, le demi-périmètre est supérieur au côté le plus long. C'est un contrôle mathématique utile : si un demi-périmètre annoncé est plus petit que l'hypoténuse, les mesures ne peuvent pas former un vrai triangle." }
        ]
      },
      "sec-difference": {
        "h2": "Périmètre et demi-périmètre : quelle est la différence ?",
        "blocks": [
          { "kind": "p", "text": "Périmètre : la longueur totale autour du triangle, [[P=a+b+c]]. Demi-périmètre : la moitié du périmètre total, [[s=\\frac{a+b+c}{2}]]. Mêmes trois côtés, grandeurs géométriques différentes : l'un est le tout, l'autre est la moitié. Ils sont liés par [[s=\\frac{P}{2}]] et [[P=2s]], et la calculatrice n'utilise jamais les deux symboles de façon interchangeable." },
          { "kind": "h3", "text": "Comparaison numérique" },
          { "kind": "p", "text": "Prenons un triangle rectangle 6-8-10. Périmètre : [[P=6+8+10]], [[[\\boxed{P=24}]]] Demi-périmètre : [[s=\\frac{24}{2}]], [[[\\boxed{s=12}]]] Les deux nombres diffèrent d'un facteur deux, toujours : [[s=\\frac{P}{2}]] et [[P=2s]]. La différence n'est pas une forme différente ni un triangle différent ; c'est le même contour compté une fois contre compté comme moitié." },
          { "kind": "h3", "text": "Quelle mesure faut-il utiliser ?" },
          { "kind": "p", "text": "Utilisez le périmètre pour border, encadrer, finir, clôturer et estimer les matériaux autour d'un objet : tout travail où la question est de savoir quelle quantité de matériau le contour consomme. Utilisez le demi-périmètre pour la formule de Héron, les relations de rayon inscrit, les calculs de cercle inscrit et les problèmes de géométrie impliquant des longueurs de côtés de triangles : tout travail où une formule demande la moitié du contour comme entrée. Le choix est dicté par la tâche, pas par la préférence : une estimation de moulure veut [[P]], une démonstration d'aire veut [[s]]." },
          { "kind": "h3", "text": "Le demi-périmètre mesure-t-il la moitié de l'aire du triangle ?" },
          { "kind": "p", "text": "Non. Le périmètre comme le demi-périmètre sont des mesures linéaires : des longueurs, exprimées en mètres ou en pieds, jamais en mètres carrés. L'aire mesure la surface bidimensionnelle délimitée par le triangle et utilise des unités carrées. Diviser une longueur en deux donne toujours une longueur. L'avertissement mérite d'être répété parce que les noms semblent liés : le demi-périmètre est la moitié du périmètre, pas la moitié de l'aire, et aucune division d'un contour ne peut produire une surface." }
        ],
        "imgAlt": "Triangle 6-8-10 : barre de périmètre de 24 unités divisée en deux en une barre de demi-périmètre de 12 unités",
        "figcaption": "P = 24 divisé en deux en s = 12 : le contour complet, puis sa moitié."
      },
      "sec-modes": {
        "h2": "Comprendre les deux modes de la calculatrice",
        "blocks": [
          { "kind": "p", "text": "La calculatrice garde les deux calculs dans deux modes séparés parce qu'ils répondent à des questions différentes à partir des mêmes trois entrées. Choisir le mode, c'est choisir la question posée." },
          { "kind": "h3", "text": "Mode calculatrice de périmètre" },
          { "kind": "p", "text": "Ce mode calcule la longueur totale du contour. Entrées : la cathète [[a]], la cathète [[b]], l'hypoténuse [[c]]. Formule : [[P=a+b+c]]. Sortie : le périmètre [[P]]. Le résultat sert à estimer la longueur totale de matériau nécessaire autour d'un contour triangulaire : le nombre apporté au fournisseur quand le travail est de la bordure, de la moulure ou du cadre." },
          { "kind": "h3", "text": "Mode calculatrice de demi-périmètre" },
          { "kind": "p", "text": "Ce mode calcule la moitié du périmètre total. Entrées : la cathète [[a]], la cathète [[b]], l'hypoténuse [[c]]. Formule : [[s=\\frac{a+b+c}{2}]]. Sortie : le demi-périmètre [[s]]. Le résultat sert de valeur intermédiaire dans les calculs avancés sur les triangles : le nombre à introduire dans la formule de Héron ou la relation du rayon inscrit quand le problème continue au-delà du contour." },
          { "kind": "h3", "text": "Pourquoi y a-t-il deux modes séparés ?" },
          { "kind": "p", "text": "Les deux calculs utilisent les mêmes trois mesures de côtés mais renvoient des grandeurs géométriques différentes, et les confondre est l'une des erreurs les plus fréquentes de ce sujet. Deux modes étiquetés gardent l'intention explicite : le bouton dit Calculate Perimeter ou Calculate Semiperimeter, et le résultat est étiqueté [[P]] ou [[s]]. Les deux modes évitent aux utilisateurs les calculs manuels tout en gardant les deux réponses impossibles à confondre. Ne décrivez pas le mode demi-périmètre comme un calculateur d'aire : sa sortie est une longueur, et elle reste une longueur." }
        ]
      },
      "sec-howto": {
        "h2": "Comment utiliser le calculateur de périmètre et de demi-périmètre de triangle rectangle",
        "blocks": [
          { "kind": "p", "text": "Les étapes ci-dessous suivent la disposition à l'écran pour chaque mode, de l'identification des mesures jusqu'à un résultat vérifié. Les deux modes partagent les mêmes trois entrées et ne diffèrent que par le calcul final." },
          { "kind": "h3", "text": "Mode Périmètre" },
          { "kind": "steps", "steps": [
            "<strong>Sélectionnez le mode Perimeter.</strong> Cela indique à la calculatrice que l'objectif est la longueur totale du contour.",
            "<strong>Identifiez la cathète a.</strong> C'est l'un des deux côtés qui forment l'angle droit.",
            "<strong>Identifiez la cathète b.</strong> C'est l'autre côté qui forme l'angle droit.",
            "<strong>Identifiez l'hypoténuse c.</strong> C'est le côté le plus long, opposé à l'angle droit.",
            "<strong>Entrez la cathète a.</strong> Tapez la longueur mesurée dans le premier champ.",
            "<strong>Entrez la cathète b.</strong> Tapez la longueur mesurée dans le deuxième champ.",
            "<strong>Entrez l'hypoténuse c.</strong> Tapez la longueur mesurée dans le troisième champ.",
            "<strong>Sélectionnez les unités appropriées.</strong> Les trois côtés doivent partager une même unité avant que l'addition ait un sens.",
            "<strong>Cliquez sur Calculate Perimeter.</strong> La calculatrice additionne les trois côtés.",
            "<strong>Examinez le résultat.</strong> Vérifiez que le périmètre dépasse le côté le plus long.",
            "<strong>Vérifiez les étapes de résolution affichées.</strong> Elles montrent [[P=a+b+c]] avec les valeurs entrées renseignées.",
            "<strong>Vérifiez que la sortie utilise une unité de mesure linéaire.</strong> Mètres, centimètres, pieds ou pouces : jamais une unité carrée."
          ] },
          { "kind": "h3", "text": "Mode Demi-périmètre" },
          { "kind": "steps", "steps": [
            "<strong>Sélectionnez le mode Semiperimeter.</strong> Cela indique à la calculatrice que l'objectif est la moitié du contour.",
            "<strong>Entrez la cathète a.</strong> Même identification qu'en mode périmètre.",
            "<strong>Entrez la cathète b.</strong> Le deuxième côté qui forme l'angle droit.",
            "<strong>Entrez l'hypoténuse c.</strong> Le côté le plus long, opposé à l'angle droit.",
            "<strong>Sélectionnez des unités de mesure compatibles.</strong> Une seule unité pour les trois côtés.",
            "<strong>Cliquez sur Calculate Semiperimeter.</strong> La calculatrice additionne les trois côtés et divise le total en deux.",
            "<strong>Examinez le résultat.</strong> Il doit être nettement plus petit que le périmètre.",
            "<strong>Vérifiez que le résultat est exactement la moitié du périmètre.</strong> Contrôlez [[s=\\frac{P}{2}]] par rapport à la sortie du mode périmètre.",
            "<strong>Vérifiez les étapes de résolution et la visualisation en direct.</strong> Les étapes montrent l'addition et la division en deux ; le dessin montre le triangle d'où viennent ces nombres.",
            "<strong>Utilisez Reset pour démarrer un nouveau calcul.</strong> Il efface les trois champs pour un départ net."
          ] },
          { "kind": "p", "text": "La visualisation en direct dessine le triangle à partir des côtés entrés, ce qui aide à repérer une hypoténuse mal nommée avant de faire confiance aux nombres. Le schéma de la formule montre où chaque côté se place dans [[P=a+b+c]] ou [[s=\\frac{a+b+c}{2}]]. Aucun mode n'accepte deux côtés : la calculatrice a besoin des trois longueurs du contour, donc un côté manquant doit d'abord être retrouvé, comme l'explique la section sur le côté manquant." }
        ]
      },
      "sec-examples": {
        "h2": "Exemples détaillés de périmètre et de demi-périmètre de triangle rectangle",
        "blocks": [
          { "kind": "p", "text": "Quatre triplets pythagoriciens bien connus montrent le calcul complet pour les deux mesures. Chacun additionne les trois côtés pour le périmètre, puis divise le total en deux pour le demi-périmètre. L'arithmétique est volontairement montrée en entier pour que le motif soit évident." },
          { "kind": "h3", "text": "Exemple 1 : Triangle rectangle 3-4-5" },
          { "kind": "p", "text": "Donnés [[a=3]], [[b=4]], [[c=5]]. Calculez le périmètre : [[P=3+4+5]], [[[\\boxed{P=12\\text{ units}}]]] Calculez le demi-périmètre : [[s=\\frac{3+4+5}{2}]], [[[\\boxed{s=6\\text{ units}}]]] Les deux résultats sont corrects parce que le périmètre compte chaque arête du contour une fois, et que le demi-périmètre est exactement la moitié de ce compte." },
          { "kind": "h3", "text": "Exemple 2 : Triangle rectangle 6-8-10" },
          { "kind": "p", "text": "Donnés [[a=6]], [[b=8]], [[c=10]]. Périmètre : [[P=6+8+10]], [[[\\boxed{P=24\\text{ units}}]]] Demi-périmètre : [[s=\\frac{24}{2}]], [[[\\boxed{s=12\\text{ units}}]]] Doubler les trois côtés double les deux mesures : 24 est le double de 12, et 12 est le double de 6. Mettre le triangle à l'échelle met ses mesures de contour à l'échelle du même facteur." },
          { "kind": "h3", "text": "Exemple 3 : Triangle rectangle 5-12-13" },
          { "kind": "p", "text": "Donnés [[a=5]], [[b=12]], [[c=13]]. Périmètre : [[P=5+12+13]], [[[\\boxed{P=30\\text{ units}}]]] Demi-périmètre : [[s=\\frac{30}{2}]], [[[\\boxed{s=15\\text{ units}}]]] Notez que 15 dépasse l'hypoténuse 13, comme l'exige le contrôle de l'inégalité triangulaire." },
          { "kind": "h3", "text": "Exemple 4 : Triangle rectangle 8-15-17" },
          { "kind": "p", "text": "Donnés [[a=8]], [[b=15]], [[c=17]]. Périmètre : [[P=8+15+17]], [[[\\boxed{P=40\\text{ units}}]]] Demi-périmètre : [[s=\\frac{40}{2}]], [[[\\boxed{s=20\\text{ units}}]]] Là encore, le demi-périmètre dépasse le côté le plus long : 20 contre 17." },
          { "kind": "h3", "text": "Comparaison des exemples fondamentaux" },
          { "kind": "p", "text": "À mesure que les dimensions du triangle augmentent, [[P]] et [[s]] grandissent avec les côtés. Le tableau montre deux motifs à la fois : le périmètre de chaque ligne est la simple somme de ses trois côtés, et le périmètre de chaque ligne est exactement le double de son demi-périmètre. Les lignes 3-4-5 et 6-8-10 montrent aussi directement la mise à l'échelle : chaque côté doublé, les deux mesures de contour doublées." }
        ],
        "table": {
          "headers": ["Triangle", "Cathète a", "Cathète b", "Hypoténuse c", "Périmètre P", "Demi-périmètre s"],
          "rows": [
            ["3-4-5", "3", "4", "5", "12", "6"],
            ["6-8-10", "6", "8", "10", "24", "12"],
            ["5-12-13", "5", "12", "13", "30", "15"],
            ["8-15-17", "8", "15", "17", "40", "20"]
          ]
        }
      },
      "sec-practical": {
        "h2": "Applications concrètes du périmètre et du demi-périmètre de triangle rectangle",
        "blocks": [
          { "kind": "p", "text": "Douze situations résolues portent les deux formules de la page vers l'atelier et le chantier. Chacune nomme un objet ou un modèle triangulaire rectangle simplifié, traite le périmètre et le demi-périmètre par les formules, et énonce la lecture pratique du résultat. Ce sont des modèles simplifiés : toute vraie fenêtre, toiture, jardin, store, panneau ou structure de support ne forme pas un triangle rectangle exact, et un objet irrégulier doit être divisé en formes plus simples avant que les formules s'appliquent. Des marges de matériau peuvent être nécessaires, les chutes de découpe ne sont pas incluses, les contours courbes exigent d'autres calculs, la résistance structurelle ne peut pas se déduire du seul périmètre, et les mesures réelles de construction doivent être vérifiées avant d'acheter les matériaux." },
          { "kind": "h3", "text": "Exemple 1 : Cadre de fenêtre vitrée triangulaire" },
          { "kind": "p", "text": "Une fenêtre triangulaire rectangle a [[a=3\\text{ m}]], [[b=4\\text{ m}]], [[c=5\\text{ m}]]. Périmètre : [[P=3+4+5]], [[[\\boxed{P=12\\text{ m}}]]] Demi-périmètre : [[s=\\frac{12}{2}]], [[[\\boxed{s=6\\text{ m}}]]] Douze mètres est la longueur totale autour du contour triangulaire de la fenêtre : le stock de cadre à commander avant les marges d'onglet et de chute." },
          { "kind": "h3", "text": "Exemple 2 : Bordure de rive de toit" },
          { "kind": "p", "text": "Une section triangulaire d'extrémité de toit a [[a=6\\text{ ft}]], [[b=8\\text{ ft}]], [[c=10\\text{ ft}]]. Périmètre : [[P=6+8+10]], [[[\\boxed{P=24\\text{ ft}}]]] Demi-périmètre : [[s=\\frac{24}{2}]], [[[\\boxed{s=12\\text{ ft}}]]] Le périmètre estime la longueur de bordure autour du contour triangulaire de l'extrémité du toit." },
          { "kind": "h3", "text": "Exemple 3 : Bordure de jardin" },
          { "kind": "p", "text": "Une section de jardin triangulaire rectangle a [[a=5\\text{ m}]], [[b=12\\text{ m}]], [[c=13\\text{ m}]]. Périmètre : [[P=5+12+13]], [[[\\boxed{P=30\\text{ m}}]]] Demi-périmètre : [[s=15\\text{ m}]]. Le périmètre estime la longueur totale de bordure de jardin autour de la section." },
          { "kind": "h3", "text": "Exemple 4 : Support métallique en acier" },
          { "kind": "p", "text": "Un support métallique triangulaire a [[a=8\\text{ cm}]], [[b=15\\text{ cm}]], [[c=17\\text{ cm}]]. Périmètre : [[P=8+15+17]], [[[\\boxed{P=40\\text{ cm}}]]] Demi-périmètre : [[[\\boxed{s=20\\text{ cm}}]]] Le périmètre décrit le bord extérieur du support, utile pour spécifier la finition du chant." },
          { "kind": "h3", "text": "Exemple 5 : Panneau de tissu triangulaire" },
          { "kind": "p", "text": "Un panneau de tissu triangulaire rectangle a [[a=9\\text{ ft}]], [[b=12\\text{ ft}]], [[c=15\\text{ ft}]]. Périmètre : [[P=9+12+15]], [[[\\boxed{P=36\\text{ ft}}]]] Demi-périmètre : [[[\\boxed{s=18\\text{ ft}}]]] Le périmètre estime la longueur du bord avant l'ajout des marges de couture." },
          { "kind": "h3", "text": "Exemple 6 : Cadre de panneau triangulaire" },
          { "kind": "p", "text": "Un panneau a une forme triangulaire rectangle avec [[a=12\\text{ cm}]], [[b=16\\text{ cm}]], [[c=20\\text{ cm}]]. Périmètre : [[P=12+16+20]], [[[\\boxed{P=48\\text{ cm}}]]] Demi-périmètre : [[[\\boxed{s=24\\text{ cm}}]]] Le périmètre total estime le matériau de cadre pour le panneau." },
          { "kind": "h3", "text": "Exemple 7 : Bordure d'aménagement paysager" },
          { "kind": "p", "text": "Une section d'aménagement triangulaire rectangle a [[a=7\\text{ m}]], [[b=24\\text{ m}]], [[c=25\\text{ m}]]. Périmètre : [[P=7+24+25]], [[[\\boxed{P=56\\text{ m}}]]] Demi-périmètre : [[[\\boxed{s=28\\text{ m}}]]] Le périmètre estime le matériau de bordure autour de la section." },
          { "kind": "h3", "text": "Exemple 8 : Support triangulaire de panneau solaire" },
          { "kind": "p", "text": "Un cadre de support triangulaire simplifié a [[a=9\\text{ m}]], [[b=40\\text{ m}]], [[c=41\\text{ m}]]. Périmètre : [[P=9+40+41]], [[[\\boxed{P=90\\text{ m}}]]] Demi-périmètre : [[[\\boxed{s=45\\text{ m}}]]] Ce sont les longueurs des trois côtés du cadre triangulaire modélisé, le point de départ du dimensionnement des éléments." },
          { "kind": "h3", "text": "Exemple 9 : Bordure de store triangulaire" },
          { "kind": "p", "text": "Une section de store triangulaire rectangle a [[a=15\\text{ ft}]], [[b=20\\text{ ft}]], [[c=25\\text{ ft}]]. Périmètre : [[P=15+20+25]], [[[\\boxed{P=60\\text{ ft}}]]] Demi-périmètre : [[[\\boxed{s=30\\text{ ft}}]]] Le périmètre estime le matériau de bordure pour le bord du store." },
          { "kind": "h3", "text": "Exemple 10 : Cadre de pignon d'entrepôt" },
          { "kind": "p", "text": "Un cadre de pignon triangulaire rectangle simplifié a [[a=11\\text{ m}]], [[b=60\\text{ m}]], [[c=61\\text{ m}]]. Périmètre : [[P=11+60+61]], [[[\\boxed{P=132\\text{ m}}]]] Demi-périmètre : [[[\\boxed{s=66\\text{ m}}]]] Le résultat représente le contour complet de la section triangulaire." },
          { "kind": "h3", "text": "Exemple 11 : Panneau triangulaire de fabrication" },
          { "kind": "p", "text": "Un panneau industriel triangulaire rectangle a [[a=13\\text{ cm}]], [[b=84\\text{ cm}]], [[c=85\\text{ cm}]]. Périmètre : [[P=13+84+85]], [[[\\boxed{P=182\\text{ cm}}]]] Demi-périmètre : [[[\\boxed{s=91\\text{ cm}}]]] Le périmètre estime les profilés de protection de chant pour le panneau." },
          { "kind": "h3", "text": "Exemple 12 : Grande structure triangulaire de support" },
          { "kind": "p", "text": "Une structure de support triangulaire rectangle a [[a=28\\text{ m}]], [[b=45\\text{ m}]], [[c=53\\text{ m}]]. Périmètre : [[P=28+45+53]], [[[\\boxed{P=126\\text{ m}}]]] Demi-périmètre : [[[\\boxed{s=63\\text{ m}}]]] Ces mesures servent d'entrées géométriques pour d'autres calculs d'ingénierie." },
          { "kind": "h3", "text": "Comparaison des exemples pratiques" }
        ],
        "table": {
          "headers": ["Application pratique", "Cathète a", "Cathète b", "Hypoténuse c", "Périmètre P", "Demi-périmètre s", "Unité de mesure"],
          "rows": [
            ["Cadre de fenêtre vitrée", "3", "4", "5", "12", "6", "m"],
            ["Bordure de rive de toit", "6", "8", "10", "24", "12", "ft"],
            ["Bordure de jardin", "5", "12", "13", "30", "15", "m"],
            ["Support en acier", "8", "15", "17", "40", "20", "cm"],
            ["Panneau en tissu", "9", "12", "15", "36", "18", "ft"],
            ["Cadre de panneau", "12", "16", "20", "48", "24", "cm"],
            ["Bordure d'aménagement paysager", "7", "24", "25", "56", "28", "m"],
            ["Support de panneau solaire", "9", "40", "41", "90", "45", "m"],
            ["Bordure de store", "15", "20", "25", "60", "30", "ft"],
            ["Pignon d'entrepôt", "11", "60", "61", "132", "66", "m"],
            ["Panneau de fabrication", "13", "84", "85", "182", "91", "cm"],
            ["Structure de support", "28", "45", "53", "126", "63", "m"]
          ]
        }
      },
      "sec-missing-side": {
        "h2": "Comment calculer le périmètre quand un côté est manquant",
        "blocks": [
          { "kind": "p", "text": "La calculatrice de cette page exige les trois longueurs de côtés. Si un côté est inconnu, calculez-le d'abord avec le théorème de Pythagore. Le périmètre ne peut pas être complété à partir de deux côtés : deux longueurs décrivent un coin ouvert, pas un contour fermé." },
          { "kind": "h3", "text": "Trouver l'hypoténuse quand les deux cathètes sont connues" },
          { "kind": "p", "text": "Utilisez le théorème de Pythagore sous sa forme hypoténuse : [[[\\boxed{c=\\sqrt{a^2+b^2}}]]] Exemple : [[a=6]], [[b=8]]. Alors [[c=\\sqrt{6^2+8^2}]], [[c=\\sqrt{36+64}]], [[c=\\sqrt{100}]], [[[\\boxed{c=10}]]] Maintenant le périmètre peut être calculé : [[P=6+8+10]], [[[\\boxed{P=24}]]], avec [[s=12]] qui découle de la division en deux." },
          { "kind": "h3", "text": "Trouver une cathète manquante quand l'hypoténuse est connue" },
          { "kind": "p", "text": "Réarrangez [[a^2+b^2=c^2]] pour isoler la cathète inconnue : [[[\\boxed{a=\\sqrt{c^2-b^2}}]]] Exemple : [[c=13]], [[b=12]]. Alors [[a=\\sqrt{13^2-12^2}]], [[a=\\sqrt{169-144}]], [[a=\\sqrt{25}]], [[[\\boxed{a=5}]]] Le périmètre suit : [[P=5+12+13=30]], [[s=15]]. La soustraction à l'intérieur de la racine est la signature d'une cathète manquante ; une hypoténuse manquante additionne toujours." },
          { "kind": "h3", "text": "Pourquoi le côté manquant doit-il être calculé d'abord ?" },
          { "kind": "p", "text": "Le périmètre exige les trois longueurs du contour. Un côté manquant ne peut pas simplement être ignoré ni estimé sans justification : deux côtés ne délimitent pas un triangle, et un troisième côté deviné rend le total fictif. Si seuls deux côtés sont connus, le <a href=\"/missing-leg-from-c-and-a-calculator/\" class=\"text-primary underline\">calculateur de côté de triangle rectangle</a> trouve le troisième avant que la calculatrice de cette page prenne le relais. Notez qu'il s'agit d'une méthode pédagogique, pas d'un mode d'entrée supplémentaire dans la calculatrice existante : les modes périmètre et demi-périmètre prennent toujours trois côtés chacun." }
        ],
        "imgAlt": "Triangle rectangle avec les cathètes 6 et 8, l'hypoténuse inconnue résolue à 10, donnant un périmètre de 24",
        "figcaption": "Les cathètes 6 et 8 donnent c = 10, donc P = 24 et s = 12."
      },
      "sec-pythagoras": {
        "h2": "Quel est le lien entre le théorème de Pythagore et le périmètre d'un triangle rectangle ?",
        "blocks": [
          { "kind": "p", "text": "Le théorème énonce [[[\\boxed{a^2+b^2=c^2}]]] Il établit la relation entre les deux cathètes et l'hypoténuse : le coin carré force les trois longueurs dans cet équilibre exact. Pour le travail sur le périmètre, le théorème est le pont entre un jeu incomplet de mesures et le contour complet." },
          { "kind": "h3", "text": "Pourquoi est-ce important pour le périmètre ?" },
          { "kind": "p", "text": "Si les deux cathètes sont connues, l'hypoténuse peut être calculée avant de trouver le périmètre complet. Sans le théorème, un côté manquant bloquerait entièrement le calcul ; avec lui, deux côtés connus suffisent à retrouver le troisième et à finir la somme. Le théorème fonctionne aussi dans l'autre sens : une hypoténuse connue et une cathète connue retrouvent l'autre cathète. Dans les deux cas, il transforme un problème à deux côtés en un périmètre à trois côtés." },
          { "kind": "h3", "text": "Exemple résolu" },
          { "kind": "p", "text": "Donnés [[a=5]], [[b=12]]. Trouvez [[c]] : [[c=\\sqrt{5^2+12^2}]], [[c=\\sqrt{25+144}]], [[c=\\sqrt{169}]], [[[\\boxed{c=13}]]] Calculez le périmètre : [[P=5+12+13]], [[[\\boxed{P=30}]]] Calculez le demi-périmètre : [[s=\\frac{30}{2}]], [[[\\boxed{s=15}]]] Un théorème, une addition, une division en deux : la chaîne complète de deux cathètes aux deux mesures du contour." },
          { "kind": "h3", "text": "Comment vérifier un triangle rectangle ?" },
          { "kind": "p", "text": "Les trois mesures doivent satisfaire [[a^2+b^2=c^2]], avec l'hypoténuse comme côté le plus long. Vérifiez aussi l'inégalité triangulaire : pour tout triangle valide, [[a+b>c]], [[a+c>b]] et [[b+c>a]]. Ces conditions comptent lors du contrôle des mesures : un contrôle pythagoricien raté signifie que le triangle n'est pas rectangle, ou qu'un côté est mal nommé ; une inégalité triangulaire ratée signifie que les trois longueurs ne peuvent former aucun triangle. Exécutez les deux contrôles avant de faire confiance à un périmètre construit à partir de mesures de terrain." }
        ]
      },
      "sec-advanced": {
        "h2": "Comment le demi-périmètre est-il utilisé dans d'autres formules de triangles ?",
        "blocks": [
          { "kind": "p", "text": "Cette section donne au demi-périmètre sa profondeur mathématique sans transformer la page en tutoriel d'une autre calculatrice. Le demi-périmètre est plus que la moitié d'un périmètre : c'est la quantité qui relie les longueurs des côtés à l'aire et à la géométrie du cercle, et les formules ci-dessous sont là où il fait ses preuves." },
          { "kind": "h3", "text": "Relation entre le demi-périmètre et le rayon inscrit" },
          { "kind": "p", "text": "L'aire de tout triangle non dégénéré égale son rayon inscrit fois son demi-périmètre : [[[\\boxed{K=rs}]]], où [[K]] est l'aire, [[r]] le rayon inscrit et [[s]] le demi-périmètre. Cette relation vaut pour tous les triangles non dégénérés, pas seulement les rectangles. Pour un triangle rectangle, le rayon inscrit peut aussi être calculé à partir des côtés avec [[[\\boxed{r=\\frac{a+b-c}{2}}]]] Prenons le triangle 3-4-5 : [[s=6]], [[r=\\frac{3+4-5}{2}=1]], puis [[K=1\\times6]], [[[\\boxed{K=6}]]] Le demi-périmètre est une mesure intermédiaire importante dans ce calcul : il porte l'information du contour tandis que le rayon inscrit porte l'information du cercle." },
          { "kind": "h3", "text": "Relation avec la formule de Héron" },
          { "kind": "p", "text": "La formule de Héron calcule l'aire à partir des trois côtés et du demi-périmètre : [[[\\boxed{K=\\sqrt{s(s-a)(s-b)(s-c)}}]]] Elle utilise les trois longueurs de côtés, elle utilise le demi-périmètre, elle calcule l'aire du triangle et elle vaut pour tout triangle valide. Utilisez le triangle 3-4-5 avec [[s=6]] : [[K=\\sqrt{6(6-3)(6-4)(6-5)}]], [[K=\\sqrt{6\\times3\\times2\\times1}]], [[K=\\sqrt{36}]], [[[\\boxed{K=6}]]] Le demi-périmètre apparaît quatre fois à l'intérieur de la racine, ce qui montre à quel point il est central : la formule de Héron ne peut même pas s'écrire sans lui." },
          { "kind": "h3", "text": "Pourquoi le demi-périmètre est-il une mesure fondamentale ?" },
          { "kind": "p", "text": "Il est plus que la moitié d'un périmètre. C'est une quantité mathématique utile qui relie les longueurs des côtés à l'aire et à la géométrie du cercle : la relation du rayon inscrit le traite comme le partenaire naturel de [[r]], et la formule de Héron construit toute l'aire sur lui. Chaque fois qu'une formule a besoin du contour distillé en un seul nombre commode, [[s]] est ce nombre. Cette page ne se transforme pas en tutoriel complet de la formule de Héron ou du rayon inscrit ; elle note la connexion pour que la sortie du mode demi-périmètre ait une suite." }
        ]
      },
      "sec-perimeter-area": {
        "h2": "Quelle est la différence entre le périmètre et l'aire ?",
        "blocks": [
          { "kind": "p", "text": "L'une des confusions les plus persistantes en géométrie est de mélanger le contour avec la surface. Le périmètre et l'aire partagent le même triangle mais mesurent des choses différentes, dans des unités différentes, en répondant à des questions différentes." },
          { "kind": "h3", "text": "Le périmètre mesure le contour" },
          { "kind": "p", "text": "[[P=a+b+c]]. Il mesure la longueur totale autour du triangle : la bordure, la moulure, la ligne de clôture. Les unités sont linéaires : mètres, centimètres, pieds, pouces. Il est unidimensionnel, une longueur et rien d'autre." },
          { "kind": "h3", "text": "L'aire mesure la surface délimitée" },
          { "kind": "p", "text": "[[[\\boxed{K=\\frac{ab}{2}}]]] Elle mesure la région plane bidimensionnelle à l'intérieur du triangle rectangle : le verre dans la fenêtre, le gazon dans la section de jardin. Les unités sont carrées : mètres carrés, centimètres carrés, pieds carrés, pouces carrés. Elle est bidimensionnelle, un compte de surface et rien d'autre." },
          { "kind": "h3", "text": "Deux triangles peuvent-ils avoir le même périmètre mais des aires différentes ?" },
          { "kind": "p", "text": "Oui. Triangle 1 : [[a=5]], [[b=12]], [[c=13]]. Alors [[P=5+12+13=30]] et [[K=\\frac{5\\times12}{2}=30]]. Triangle 2 : [[a=7.5]], [[b=10]], [[c=12.5]]. Vérifiez l'angle droit : [[7.5^2+10^2=56.25+100=156.25=12.5^2]], c'est donc un vrai triangle rectangle. Son périmètre est [[P=7.5+10+12.5=30]], les mêmes 30, mais son aire est [[K=\\frac{7.5\\times10}{2}=37.5]], nettement différente. Un périmètre égal ne signifie pas automatiquement une aire égale : la longueur du contour fixe la bordure totale, mais la forme du triangle décide de la surface que cette bordure délimite." },
          { "kind": "h3", "text": "Pourquoi ne faut-il jamais exprimer le périmètre en unités carrées ?" },
          { "kind": "p", "text": "Un périmètre est une longueur unidimensionnelle ; les unités carrées décrivent une surface bidimensionnelle. Annoncer 12 m² pour un périmètre affirme une surface là où seul un contour a été mesuré, et quiconque lit le nombre imaginera la mauvaise chose. Gardez les unités honnêtes : les longueurs en m, cm, ft, in ; les aires en m², cm², ft², in². L'unité fait partie de la réponse, et la mauvaise unité transforme une bonne réponse en mauvaise." }
        ]
      },
      "sec-units": {
        "h2": "Comprendre les unités de mesure dans les calculs de périmètre et de demi-périmètre",
        "blocks": [
          { "kind": "p", "text": "Mètres, centimètres, millimètres, kilomètres, pieds, pouces, yards, miles : les unités de longueur existent en bien des tailles, et la formule du périmètre accepte chacune d'elles. La seule règle est l'accord : les trois côtés doivent parler la même unité avant d'être additionnés." },
          { "kind": "h3", "text": "Pourquoi les trois longueurs de côtés doivent-elles utiliser des unités compatibles ?" },
          { "kind": "p", "text": "Le périmètre est une somme de longueurs. Additionner 3 pieds à 48 pouces sans convertir mélange deux échelles, et le total n'a pas de sens net : 56 de quoi ? Avant d'additionner des mesures, convertissez-les en une unité commune. Les sélecteurs d'unité de la calculatrice existent exactement pour cette étape, et l'exemple résolu ci-dessous montre la conversion faire son travail discret et essentiel." },
          { "kind": "h3", "text": "Exemple résolu de conversion d'unités" },
          { "kind": "p", "text": "Donnés [[a=3\\text{ ft}]], [[b=48\\text{ inches}]], [[c=5\\text{ ft}]]. Convertissez le côté du milieu : [[48\\text{ inches}=4\\text{ ft}]]. Alors [[P=3+4+5]], [[[\\boxed{P=12\\text{ ft}}]]] Demi-périmètre : [[[\\boxed{s=6\\text{ ft}}]]] Notez que le triplet converti est le triplet familier 3-4-5, ce qui confirme la conversion de façon indépendante : si les pouces avaient été additionnés bruts, le « périmètre » n'aurait été que 56 sans cohérence." },
          { "kind": "h3", "text": "Calculer avec des mesures de côtés décimales" },
          { "kind": "p", "text": "Prenons [[a=2.5]], [[b=6]], [[c=6.5]]. Confirmez d'abord l'angle droit : [[2.5^2+6^2=6.25+36=42.25=6.5^2]]. Calculez le périmètre : [[P=2.5+6+6.5]], [[[\\boxed{P=15\\text{ units}}]]] Puis le demi-périmètre : [[s=\\frac{15}{2}]], [[[\\boxed{s=7.5\\text{ units}}]]] Les décimales suivent la même addition et la même division en deux que les nombres entiers ; les formules n'exigent jamais des entiers, et les mesures d'atelier le sont rarement." },
          { "kind": "h3", "text": "Pourquoi faut-il éviter d'arrondir trop tôt ?" },
          { "kind": "p", "text": "Les calculs de mesure peuvent contenir des valeurs décimales, et chaque arrondi intermédiaire injecte une erreur que les étapes suivantes ne peuvent pas éliminer. Gardez une précision suffisante dans les étapes intermédiaires et n'arrondissez que la réponse finale selon l'exactitude de mesure requise. Arrondir 2.5 à 3 en cours de calcul corromprait [[P]] comme [[s]] ; la calculatrice garde la pleine précision jusqu'au bout, et les calculs à la main doivent faire de même." }
        ]
      },
      "sec-scaling": {
        "h2": "Comment les changements de longueurs des côtés affectent-ils le périmètre et le demi-périmètre ?",
        "blocks": [
          { "kind": "p", "text": "Le périmètre est une mesure linéaire, donc il change d'échelle linéairement avec le triangle : étirez chaque côté d'un certain facteur et le contour s'étire exactement de ce facteur. Le demi-périmètre suit, puisqu'il est toujours la moitié du périmètre." },
          { "kind": "h3", "text": "Que se passe-t-il quand chaque côté double ?" },
          { "kind": "p", "text": "Partez de [[P=a+b+c]]. Si chaque côté double, le nouveau périmètre est [[P_2=2a+2b+2c]], qui se factorise en [[P_2=2(a+b+c)]]. Donc [[[\\boxed{P_2=2P}]]] Le demi-périmètre double aussi, puisque diviser en deux un total doublé double quand même la moitié. La paire 3-4-5 vers 6-8-10 le montre en nombres : 12 devient 24, et 6 devient 12." },
          { "kind": "h3", "text": "Que se passe-t-il quand chaque côté est triplé ?" },
          { "kind": "p", "text": "La même algèbre avec un facteur trois donne [[[\\boxed{P_2=3P}]]] et [[[\\boxed{s_2=3s}]]] La relation d'échelle linéaire vaut pour tout facteur d'échelle [[k]] : multipliez chaque côté par [[k]] et les deux mesures du contour se multiplient par [[k]]. C'est pourquoi les dessins à l'échelle se comportent si bien : mesurez le dessin, multipliez par le facteur d'échelle, et le périmètre réel est prêt." },
          { "kind": "h3", "text": "Que se passe-t-il quand un seul côté change ?" },
          { "kind": "p", "text": "Augmenter un côté en gardant les deux autres fixes change le périmètre de la même quantité : ajoutez 2 unités à un côté et [[P]] grandit d'exactement 2, parce que le périmètre est une simple somme. Mais dans un triangle rectangle, les longueurs des côtés sont liées par le théorème de Pythagore, donc des changements de côtés arbitraires peuvent ne pas préserver la condition d'angle droit. Allonger une cathète sans ajuster l'hypoténuse brise [[a^2+b^2=c^2]], et la forme n'est plus rectangle : la formule du périmètre additionne toujours trois nombres, mais ils ne décrivent plus un triangle rectangle." },
          { "kind": "h3", "text": "Comparer deux triangles rectangles" },
          { "kind": "p", "text": "Mettez 3-4-5 à côté de 6-8-10. Longueurs des côtés : chaque côté doublé, facteur d'échelle 2. Périmètre : 12 contre 24. Demi-périmètre : 6 contre 12. Doubler toutes les longueurs des côtés double les deux mesures du contour, exactement comme l'algèbre le prévoit. La comparaison fonctionne aussi dans l'autre sens : si les périmètres de deux triangles sont dans un rapport 2:1 et que les deux sont rectangles, leurs côtés sont dans ce rapport aussi." }
        ]
      },
      "sec-applications": {
        "h2": "Applications pratiques du périmètre de triangle rectangle",
        "blocks": [
          { "kind": "p", "text": "Le même motif en deux étapes, additionner puis diviser en deux, apparaît partout où un contour triangulaire doit être mesuré et où une formule a besoin de sa moitié. Un vitrier totalise un cadre de fenêtre à partir de ses longueurs de bords ; un couvreur totalise la bordure autour d'un pignon ; un paysagiste totalise la bordure autour d'un massif ; un fabricant totalise le profilé de chant autour d'un panneau. Des trois côtés viennent le périmètre pour la commande de matériau et le demi-périmètre pour toute géométrie en aval. Les quatre panneaux ci-dessous montrent le motif à différentes échelles : un cadre de fenêtre (12 m), une bordure de rive de toit (24 ft), une bordure de jardin (56 m) et un cadre de support en acier (40 cm), chacun étiqueté avec son périmètre et son demi-périmètre." }
        ],
        "imgAlt": "Quatre panneaux : cadre de fenêtre 12 m, bordure de toit 24 ft, bordure de jardin 56 m, cadre en acier 40 cm de périmètres",
        "figcaption": "Quatre usages réels : un cadre de fenêtre, une bordure de rive de toit, une bordure de jardin et un cadre en acier."
      },
      "sec-mistakes": {
        "h2": "Erreurs fréquentes dans le calcul du périmètre et du demi-périmètre de triangle rectangle",
        "blocks": [
          { "kind": "p", "text": "Presque toute réponse fausse dans ce sujet vient d'un côté sauté ou d'un nom confus plutôt que d'une mauvaise arithmétique. Les seize erreurs ci-dessous sont celles qui reviennent sans cesse, chacune avec sa cause et sa correction." },
          { "kind": "h3", "text": "1. Oublier d'inclure l'hypoténuse" },
          { "kind": "p", "text": "Utiliser [[P=a+b]] sur le triangle 3-4-5 donne 7, pas 12. L'erreur arrive parce que l'hypoténuse ne touche jamais l'angle droit, donc elle semble séparée du triangle proprement dit. Correction : le contour a trois arêtes ; comptez les trois, [[P=a+b+c]]." },
          { "kind": "h3", "text": "2. Confondre le périmètre avec le demi-périmètre" },
          { "kind": "p", "text": "Entrer 6 là où 12 appartient, ou l'inverse, divise en deux ou double l'estimation de matériau. L'erreur vient de ce que les deux valeurs partagent les mêmes trois côtés. Correction : étiquetez chaque résultat [[P]] ou [[s]], et vérifiez [[s=\\frac{P}{2}]] avant de continuer." },
          { "kind": "h3", "text": "3. Diviser le périmètre par deux en calculant le périmètre" },
          { "kind": "p", "text": "Calculer [[\\frac{3+4+5}{2}=6]] et l'appeler périmètre sous-estime le contour de moitié. L'erreur est d'exécuter la formule du demi-périmètre par habitude. Correction : [[P=a+b+c]] n'a pas de division ; la division en deux appartient à [[s]] seulement." },
          { "kind": "h3", "text": "4. Oublier de diviser par deux en calculant le demi-périmètre" },
          { "kind": "p", "text": "Annoncer [[s=12]] pour le triangle 3-4-5 fournit à la formule de Héron un [[s]] doublé et corrompt l'aire. Correction : [[s=\\frac{a+b+c}{2}]] se termine toujours par la division en deux ; sans elle, le nombre est le périmètre." },
          { "kind": "h3", "text": "5. Utiliser le mauvais côté comme hypoténuse" },
          { "kind": "p", "text": "Traiter une cathète comme [[c]], par exemple entrer a=5, b=4, c=3, brouille toute formule en aval. L'erreur vient généralement de lire les côtés dans le mauvais ordre. Correction : [[c]] est le côté le plus long, opposé à l'angle droit ; triez les trois nombres et attribuez [[c]] au plus grand." },
          { "kind": "h3", "text": "6. Entrer des mesures qui ne forment pas un triangle rectangle" },
          { "kind": "p", "text": "Les côtés 2, 3, 4 donnent [[P=9]] arithmétiquement, mais [[2^2+3^2=13\\neq16]], donc aucun angle droit n'existe et les formules de la page reposent sur une fausse prémisse. Correction : vérifiez [[a^2+b^2=c^2]] avant de calculer." },
          { "kind": "h3", "text": "7. Mélanger centimètres et mètres" },
          { "kind": "p", "text": "Additionner 3 m, 40 cm et 5 m comme [[3+40+5=48]] produit 48 de rien du tout. Correction : convertissez d'abord en une seule unité : [[40\\text{ cm}=0.4\\text{ m}]], puis [[P=8.4\\text{ m}]]." },
          { "kind": "h3", "text": "8. Mélanger pieds et pouces" },
          { "kind": "p", "text": "Additionner 3 ft, 48 in et 5 ft comme 56 répète la même erreur d'échelle en unités impériales. Correction : [[48\\text{ in}=4\\text{ ft}]], puis [[P=12\\text{ ft}]]." },
          { "kind": "h3", "text": "9. Exprimer le périmètre en unités carrées" },
          { "kind": "p", "text": "Écrire [[P=12\\text{ m}^2]]. L'erreur vient généralement de copier une unité d'aire par habitude après avoir traité des problèmes d'aire. Correction : les périmètres sont des longueurs, donc [[P=12\\text{ m}]]." },
          { "kind": "h3", "text": "10. Présenter le demi-périmètre comme une aire" },
          { "kind": "p", "text": "Traiter [[s=6]] comme 6 unités carrées. Le demi-périmètre est une longueur, la moitié d'un contour, pas une surface. Correction : [[s=6]] unités de longueur, un point c'est tout." },
          { "kind": "h3", "text": "11. Arrondir trop tôt" },
          { "kind": "p", "text": "Arrondir 2.5 à 3 avant d'additionner donne [[3+6+6.5=15.5]] au lieu du vrai 15. L'erreur semble anodine parce que l'arrondi paraît petit. Correction : gardez la pleine précision pendant le calcul et n'arrondissez que la réponse finale." },
          { "kind": "h3", "text": "12. N'utiliser que deux côtés dans la calculatrice existante" },
          { "kind": "p", "text": "Entrer [[a=3]], [[b=4]] sans [[c]] laisse le contour ouvert. La calculatrice a besoin des trois longueurs parce qu'un périmètre est un total fermé. Correction : trouvez d'abord le côté manquant avec le théorème de Pythagore, puis calculez." },
          { "kind": "h3", "text": "13. Ignorer l'inégalité triangulaire" },
          { "kind": "p", "text": "Les côtés 2, 3, 10 donnent [[P=15]] arithmétiquement, mais [[2+3<10]], donc aucun triangle n'existe. Correction : vérifiez [[a+b>c]] avant de faire confiance à un résultat construit à partir des trois nombres." },
          { "kind": "h3", "text": "14. Supposer que le demi-périmètre est un chemin physique de demi-contour" },
          { "kind": "p", "text": "Chercher la « promenade de 6 unités » le long des arêtes 3-4-5. Aucun demi-chemin continu unique n'égale [[s]] en général ; [[s]] est la moitié du total numérique. Correction : traitez [[s]] comme un nombre pour les formules, pas comme un itinéraire à parcourir." },
          { "kind": "h3", "text": "15. Confondre le périmètre avec la somme des seules cathètes perpendiculaires" },
          { "kind": "p", "text": "Calculer [[a+b=7]] et s'arrêter, comme si l'hypoténuse était une décoration intérieure. Correction : l'hypoténuse est une arête du contour ; [[P=a+b+c]], les trois termes, à chaque fois." },
          { "kind": "h3", "text": "16. Supposer que le périmètre seul détermine l'aire du triangle" },
          { "kind": "p", "text": "Croire que [[P=30]] fixe [[K]]. Le triangle 5-12-13 ([[K=30]]) et le triangle 7.5-10-12.5 ([[K=37.5]]) partagent [[P=30]] avec des aires différentes. Correction : l'aire a besoin de plus que le total du contour ; utilisez les cathètes ou la formule de Héron." },
          { "kind": "h3", "text": "Faux contre juste : un exemple concret" },
          { "kind": "p", "text": "Donnés [[a=3]], [[b=4]], [[c=5]]. Périmètre correct : [[P=3+4+5=12]]. Omettre à tort l'hypoténuse : [[3+4=7]]. Sept n'est pas le périmètre complet parce que la troisième arête du contour n'a jamais été comptée. Demi-périmètre correct : [[s=\\frac{12}{2}=6]]. Six n'est pas la longueur totale du contour : c'en est la moitié, la valeur dont des formules comme celle de Héron ont besoin. L'arithmétique paraît assurée dans les trois cas ; seule la géométrie les distingue." }
        ]
      },
      "sec-verify": {
        "h2": "Comment vérifier que le périmètre de votre triangle rectangle est correct",
        "blocks": [
          { "kind": "p", "text": "Sept contrôles indépendants, tous démontrés sur le triangle 3-4-5 ([[a=3]], [[b=4]], [[c=5]], [[P=12]], [[s=6]]). L'accord entre des voies différentes est la preuve la plus forte qu'une réponse est juste, dans les devoirs comme dans la mesure pratique." },
          { "kind": "h3", "text": "Méthode 1 : Additionnez à nouveau les trois côtés" },
          { "kind": "p", "text": "Refaites [[P=a+b+c]] à neuf : [[P=3+4+5=12]]. Un deuxième passage avec les nombres ressaisis attrape les fautes de frappe et les chiffres mal entrés qu'un seul passage cache." },
          { "kind": "h3", "text": "Méthode 2 : Divisez le périmètre par deux" },
          { "kind": "p", "text": "Calculez [[s=\\frac{P}{2}]] : [[s=\\frac{12}{2}=6]]. Si la division en deux ne correspond pas à la sortie du mode demi-périmètre, l'un des deux calculs s'est trompé et les deux méritent un second regard." },
          { "kind": "h3", "text": "Méthode 3 : Doublez le demi-périmètre" },
          { "kind": "p", "text": "Vérifiez [[[\\boxed{P=2s}]]] : [[P=2\\times6=12]]. C'est l'inverse de la méthode 2 et il attrape la même classe d'erreur par l'autre bout : un [[s]] faux échoue ici même quand l'addition d'origine semblait bonne." },
          { "kind": "h3", "text": "Méthode 4 : Vérifiez la relation pythagoricienne" },
          { "kind": "p", "text": "Confirmez [[a^2+b^2=c^2]] : [[3^2+4^2=9+16=25=5^2]]. Cela vérifie l'identification des côtés derrière tout autre calcul ; une hypoténuse fausse signifie qu'un côté a été mal nommé, et [[P]] comme [[s]] doivent être reconstruits." },
          { "kind": "h3", "text": "Méthode 5 : Vérifiez l'inégalité triangulaire" },
          { "kind": "p", "text": "Confirmez [[a+b>c]] : [[3+4=7>5]]. Les trois longueurs doivent pouvoir former un triangle avant que le contrôle d'angle droit ait un sens. Un échec ici vous renvoie aux mesures, pas à l'arithmétique." },
          { "kind": "h3", "text": "Méthode 6 : Vérifiez les unités de mesure" },
          { "kind": "p", "text": "Confirmez que les trois côtés utilisent des unités compatibles. Les unités mélangées sont l'erreur la plus silencieuse de ce sujet : l'arithmétique paraît propre pendant que l'échelle est fausse. Relisez le sélecteur d'unité de chaque entrée avant de faire confiance au total." },
          { "kind": "h3", "text": "Méthode 7 : Comparez avec la visualisation en direct" },
          { "kind": "p", "text": "La calculatrice dessine le triangle à partir des côtés entrés. Si le dessin ne ressemble en rien à l'objet mesuré, un côté a été mal attribué : le côté entré le plus long doit se trouver opposé au coin carré. L'image est un témoin indépendant, et elle vaut un coup d'œil avant que les nombres partent dans une commande ou un rapport." }
        ]
      },
      "sec-related": {
        "h2": "Explorer les calculateurs de triangle rectangle associés",
        "blocks": [
          { "kind": "p", "text": "Des mesures différentes appellent des calculatrices différentes." }
        ]
      },
      "sec-faq": {
        "h2": "Questions fréquentes",
        "blocks": []
      },
      "sec-conclusion": {
        "h2": "Un contour, deux mesures utiles",
        "blocks": [
          { "kind": "p", "text": "Le périmètre totalise le contour ; le demi-périmètre divise ce total en deux pour les formules qui en ont besoin. Le triangle 3-4-5 porte toute l'histoire en miniature : [[P=12]] unités de contour pour la commande de matériau, [[s=6]] unités prêtes pour la formule de Héron ou la relation du rayon inscrit. Une addition et une division en deux couvrent les deux tâches." },
          { "kind": "p", "text": "L'habitude de travail est simple : nommez correctement l'hypoténuse, incluez les trois côtés, accordez les unités, gardez les décimales non arrondies jusqu'au bout, et vérifiez par une deuxième méthode. Avec ces habitudes, [[P=a+b+c]] et [[s=\\frac{a+b+c}{2}]] sont deux des mesures les plus fiables de la géométrie." }
        ]
      }
    },
    "relatedHeading": "Explorer les calculateurs de triangle rectangle associés",
    "relatedIntro": "Des mesures différentes appellent des calculatrices différentes.",
    "relatedItems": [
      { "href": "/right-triangle-perimeter-calculator/", "label": "Calculateur de périmètre de triangle rectangle" },
      { "href": "/right-triangle-semiperimeter-calculator/", "label": "Calculateur de demi-périmètre de triangle rectangle" },
      { "href": "/right-triangle-area-from-semiperimeter-calculator/", "label": "Calculateur d'aire de triangle rectangle à partir du demi-périmètre" },
      { "href": "/right-triangle-area-from-legs-calculator/", "label": "Calculateur d'aire de triangle rectangle à partir des cathètes" },
      { "href": "/pythagorean-theorem-calculator/", "label": "Calculateur du théorème de Pythagore" },
      { "href": "/missing-leg-from-c-and-a-calculator/", "label": "Calculateur de cathète manquante de triangle rectangle" }
    ],
    "faqHeading": "Questions fréquentes",
    "faqs": [
      {
        "question": "Quelle est la formule du périmètre d'un triangle rectangle ?",
        "answer": "P = a + b + c, où a et b sont les deux cathètes et c est l'hypoténuse. Additionnez les trois longueurs de côtés ; le total est la longueur complète du contour en unités linéaires. Pour un triangle 3-4-5, P = 3 + 4 + 5 = 12 unités. Chaque côté doit être inclus, y compris l'hypoténuse, parce que c'est l'une des trois arêtes du contour."
      },
      {
        "question": "Quelle est la formule du demi-périmètre d'un triangle rectangle ?",
        "answer": "s = (a + b + c) / 2, exactement la moitié du périmètre, autrement dit s = P / 2. Additionnez d'abord les trois côtés, puis divisez une fois. Pour un triangle 3-4-5, s = (3 + 4 + 5) / 2 = 6 unités. C'est une longueur, pas une aire, et c'est l'entrée qu'attendent des formules comme celle de Héron."
      },
      {
        "question": "Quelle est la différence entre le périmètre et le demi-périmètre ?",
        "answer": "Le périmètre est tout le contour, P = a + b + c ; le demi-périmètre en est la moitié, s = P / 2. Pour un triangle 6-8-10, P = 24 et s = 12. Utilisez P pour les estimations de matériau autour d'un contour et s comme entrée des formules avancées de géométrie. Les deux diffèrent d'exactement un facteur deux, toujours."
      },
      {
        "question": "Pourquoi l'hypoténuse est-elle incluse dans le périmètre ?",
        "answer": "Parce que le périmètre mesure le contour extérieur complet, et que l'hypoténuse est l'une de ses trois arêtes. Parcourir le triangle, c'est aussi parcourir l'hypoténuse. L'omettre, c'est mesurer un chemin ouvert, pas un contour fermé. Pour 3-4-5, laisser le 5 de côté donne 7, ce qui n'est le périmètre d'aucun triangle avec ces côtés."
      },
      {
        "question": "Puis-je calculer le périmètre si un côté est manquant ?",
        "answer": "Pas directement : la formule a besoin des trois longueurs du contour. Trouvez d'abord le côté manquant avec le théorème de Pythagore : c = sqrt(a^2 + b^2) pour une hypoténuse manquante, ou a = sqrt(c^2 - b^2) pour une cathète manquante. Avec a = 6 et b = 8, c = 10, puis P = 6 + 8 + 10 = 24. La calculatrice de cette page exige les trois côtés."
      },
      {
        "question": "Comment trouver l'hypoténuse avant de calculer le périmètre ?",
        "answer": "Utilisez c = sqrt(a^2 + b^2) avec les deux cathètes connues. Pour a = 5 et b = 12 : c = sqrt(25 + 144) = sqrt(169) = 13. Additionnez ensuite les trois côtés : P = 5 + 12 + 13 = 30. Vérifiez que le résultat est le côté le plus long ; sinon, les cathètes ont été mal nommées."
      },
      {
        "question": "Pourquoi le demi-périmètre est-il utile en géométrie ?",
        "answer": "C'est la variable naturelle de la formule de Héron, K = sqrt(s(s - a)(s - b)(s - c)), et de la relation du rayon inscrit K = r x s. Les formules d'aire produisent sans cesse des moitiés, et le demi-périmètre les absorbe en un nombre commode. Pour 3-4-5, s = 6 alimente les deux formules et les deux renvoient K = 6. Il relie les longueurs des côtés à l'aire et à la géométrie du cercle."
      },
      {
        "question": "Le demi-périmètre est-il la moitié de l'aire du triangle ?",
        "answer": "Non. Le demi-périmètre est la moitié du périmètre, une longueur mesurée en unités comme les mètres ou les pieds. L'aire est une surface bidimensionnelle mesurée en unités carrées. Pour le triangle 3-4-5, s = 6 unités tandis que l'aire est de 6 unités carrées ; les nombres qui coïncident sont une coïncidence propre à ce triangle, pas une règle."
      },
      {
        "question": "Quelles unités faut-il utiliser pour le périmètre ?",
        "answer": "N'importe quelle unité linéaire, tant que les trois côtés la partagent : mètres, centimètres, millimètres, kilomètres, pieds, pouces, yards ou miles. Convertissez avant d'additionner : 3 ft, 48 in, 5 ft deviennent 3 ft, 4 ft, 5 ft, ce qui donne P = 12 ft. N'exprimez jamais un périmètre en unités carrées ; c'est une longueur, pas une surface."
      },
      {
        "question": "Puis-je calculer le périmètre avec des mesures décimales ?",
        "answer": "Oui. Les formules traitent les décimales exactement comme les nombres entiers. Avec a = 2.5, b = 6, c = 6.5 : P = 2.5 + 6 + 6.5 = 15 unités et s = 15 / 2 = 7.5 unités. Gardez la pleine précision pendant l'addition et n'arrondissez que la réponse finale à l'exactitude que les mesures justifient."
      },
      {
        "question": "Comment vérifier que trois côtés forment un triangle rectangle valide ?",
        "answer": "Confirmez la relation pythagoricienne a^2 + b^2 = c^2 avec c comme côté le plus long, et confirmez l'inégalité triangulaire a + b > c. Pour 3, 4, 5 : 9 + 16 = 25 et 3 + 4 > 5, donc le triangle est valide et rectangle. Échouer à l'un des tests signifie que les mesures doivent être revérifiées avant de faire confiance à un périmètre."
      },
      {
        "question": "Quelle est la relation entre le demi-périmètre, le rayon inscrit et la formule de Héron ?",
        "answer": "Le demi-périmètre alimente les deux : K = r x s le relie au rayon inscrit, et K = sqrt(s(s - a)(s - b)(s - c)) est la formule de Héron construite sur lui. Pour un triangle rectangle, le rayon inscrit découle aussi des côtés par r = (a + b - c) / 2. Avec 3-4-5, s = 6 et r = 1, donc K = 1 x 6 = 6, ce qui correspond au résultat de Héron."
      }
    ]
  }
};
