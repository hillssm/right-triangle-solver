// pythagoreanTriplesGuideTranslations.bfr.ts: Pythagorean Triples
// Guide (Page 44 of 45) translation.
export const PYTHAGOREANTRIPLES_B2_FR = {
  "fr": {
      "meta": {
        "title": "Calculatrice de triplets pythagoriciens - Vérifier et générer des triplets",
        "description": "Vérifiez si trois nombres entiers forment un triplet pythagoricien et générez des triplets avec la formule d'Euclide. Apprenez les triplets primitifs, la mise à l'échelle et des exemples détaillés.",
        "primaryKeyword": "Calculatrice de triplets pythagoriciens",
        "slug": "pythagorean-triples-calculator",
      },
      "tocHeading": "Navigation des sections",
      "tocItems": {
        "sec-intro": "Calculatrice de triplets pythagoriciens",
        "sec-calculate": "Vérifier ou générer des triplets pythagoriciens avec la calculatrice",
        "sec-what": "Qu'est-ce qu'un triplet pythagoricien ?",
        "sec-pythagorean": "Comprendre le théorème de Pythagore",
        "sec-check": "Comment vérifier si trois nombres forment un triplet pythagoricien",
        "sec-euclid": "Comment générer des triplets pythagoriciens avec la formule d'Euclide",
        "sec-proof": "Preuve mathématique de la formule d'Euclide",
        "sec-primitive": "Qu'est-ce qu'un triplet pythagoricien primitif ?",
        "sec-nonprimitive": "Qu'est-ce qu'un triplet pythagoricien non primitif ?",
        "sec-conditions": "Conditions pour générer des triplets pythagoriciens primitifs",
        "sec-difference": "Différence entre les triplets primitifs et non primitifs",
        "sec-scaling": "Comment générer plus de triplets en mettant à l'échelle des triplets existants",
        "sec-examples": "Exemples courants de triplets pythagoriciens",
        "sec-worked": "Exemples détaillés pas à pas avec la calculatrice",
        "sec-infinite": "Pourquoi existe-t-il une infinité de triplets pythagoriciens ?",
        "sec-recognize": "Comment reconnaître un triplet pythagoricien sans deviner",
        "sec-ordinary": "Les triplets pythagoriciens et les triangles rectangles ordinaires",
        "sec-mistakes": "Erreurs courantes avec la calculatrice de triplets pythagoriciens",
        "sec-practice": "Exercices avec réponses",
        "sec-related": "Calculatrices de triangles rectangles associées",
        "sec-faq": "Questions fréquentes",
      },
      "sections": {
        "sec-intro": {
          "h2": "Calculatrice de triplets pythagoriciens",
          "blocks": [
            {
              "kind": "p",
              "text": "Vérifiez des triplets de nombres entiers et générez-en de nouveaux avec la formule d'Euclide.",
            },
            {
              "kind": "p",
              "text": "Un triplet pythagoricien est un ensemble de trois nombres entiers positifs qui peuvent servir de côtés d'un triangle rectangle. Les deux nombres les plus petits sont les cathètes, le plus grand nombre est l'hypoténuse, et les trois valeurs satisfont le théorème de Pythagore.",
            },
            {
              "kind": "p",
              "text": "[[[a^2+b^2=c^2]]]",
            },
            {
              "kind": "p",
              "text": "La calculatrice de triplets pythagoriciens fait deux choses. En mode vérification, vous saisissez trois nombres entiers et elle teste s'ils forment un triplet valide. En mode génération, vous saisissez deux entiers, [[m]] et [[n]], et elle construit un nouveau triplet avec la formule d'Euclide. Vérifier et générer sont deux tâches différentes, et cette page explique les deux, étape par étape.",
            },
            {
              "kind": "p",
              "text": "L'exemple le plus connu est [[3]], [[4]] et [[5]]. En élevant les cathètes au carré et en les additionnant, on obtient [[3^2+4^2=9+16=25]], ce qui est égal à [[5^2]]. Comme les deux côtés correspondent exactement, [[(3, 4, 5)]] est un triplet valide. Un triplet primitif est un triplet dont les trois nombres n'ont aucun facteur commun supérieur à [[1]] ; [[3]], [[4]] et [[5]] n'ont rien en commun, donc [[(3, 4, 5)]] est primitif. Les sections ci-dessous montrent comment vérifier trois nombres quelconques, comment générer des triplets de n'importe quelle taille et comment distinguer les triplets primitifs des copies mises à l'échelle.",
            },
          ],
        },
        "sec-calculate": {
          "h2": "Vérifier ou générer des triplets pythagoriciens avec la calculatrice",
          "blocks": [
            {
              "kind": "p",
              "text": "Deux modes, une seule page : vérifier un ensemble de nombres, ou construire un nouveau triplet.",
            },
            {
              "kind": "h3",
              "text": "Mode 1 : Vérifier un triplet pythagoricien",
            },
            {
              "kind": "p",
              "text": "Saisissez les trois longueurs des côtés sous la forme [[a]], [[b]] et [[c]], [[c]] étant la plus grande valeur. La calculatrice élève [[a]] et [[b]] au carré, additionne les résultats, élève [[c]] au carré et compare les deux côtés de l'équation.",
            },
            {
              "kind": "p",
              "text": "[[[a^2+b^2=c^2]]]",
            },
            {
              "kind": "p",
              "text": "Quand les deux côtés sont égaux, les trois nombres forment un triplet pythagoricien valide, et le résultat l'indique. Quand ils diffèrent, les nombres ne forment pas un triplet, et le résultat affiche les deux totaux inégaux pour que vous puissiez voir de combien ils s'écartent. Les trois saisies doivent être des nombres entiers positifs, et toutes les trois doivent utiliser la même unité.",
            },
            {
              "kind": "h3",
              "text": "Mode 2 : Générer des triplets pythagoriciens",
            },
            {
              "kind": "p",
              "text": "Saisissez deux entiers positifs, [[m]] et [[n]], [[m]] étant supérieur à [[n]]. La calculatrice applique la formule d'Euclide pour produire trois longueurs de côtés entières.",
            },
            {
              "kind": "p",
              "text": "[[[a=m^2-n^2]]]",
            },
            {
              "kind": "p",
              "text": "[[[b=2mn]]]",
            },
            {
              "kind": "p",
              "text": "[[[c=m^2+n^2]]]",
            },
            {
              "kind": "p",
              "text": "Le résultat est toujours un triplet valide, car la formule d'Euclide est construite pour satisfaire le théorème de Pythagore. Les deux cathètes peuvent apparaître dans l'un ou l'autre ordre, mais [[c]] est toujours l'hypoténuse. Pour utiliser la calculatrice, choisissez un mode, saisissez des nombres valides, cliquez sur Calculer, puis lisez le résultat avec son raisonnement pas à pas. Cliquez sur Réinitialiser pour effacer les champs et recommencer.",
            },
          ],
        },
        "sec-what": {
          "h2": "Qu'est-ce qu'un triplet pythagoricien ?",
          "blocks": [
            {
              "kind": "p",
              "text": "Trois nombres entiers positifs qui correspondent exactement au théorème de Pythagore.",
            },
            {
              "kind": "p",
              "text": "Un triplet pythagoricien est un ensemble de trois entiers positifs, noté [[(a, b, c)]], qui satisfait l'équation [[a^2+b^2=c^2]]. Ici, [[a]] et [[b]] sont les cathètes, les deux côtés qui se rencontrent à l'angle droit, et [[c]] est l'hypoténuse, le côté opposé à l'angle droit et toujours le plus long des trois.",
            },
            {
              "kind": "p",
              "text": "L'équation doit être vérifiée exactement. Un quasi-succès n'est pas un triplet : si la somme des carrés des cathètes diffère du carré de l'hypoténuse ne serait-ce que d'une unité, les trois nombres échouent au test. Cette égalité stricte rend le triplet utile en construction et en menuiserie, où un contrôle [[3]]-[[4]]-[[5]] marque un angle droit sans erreur de mesure.",
            },
            {
              "kind": "p",
              "text": "Les trois nombres doivent être entiers et positifs. Un triangle rectangle dont les côtés sont décimaux, par exemple des cathètes [[1.5]] et [[2]] avec une hypoténuse [[2.5]], satisfait le théorème de Pythagore mais n'est pas un triplet pythagoricien, car la définition exige des entiers. De même, un triangle dont un côté est irrationnel, par exemple des cathètes [[1]] et [[1]] avec une hypoténuse [[\\sqrt{2}]], est un triangle rectangle mais pas un triplet. Le mot triplet est réservé aux seules solutions entières positives.",
            },
            {
              "kind": "p",
              "text": "Le triplet [[(3, 4, 5)]] est le premier exemple naturel. Ses cathètes sont [[3]] et [[4]], son hypoténuse est [[5]], et [[9+16=25]] confirme l'équation. L'ordre des cathètes n'a pas d'importance : [[(4, 3, 5)]] décrit le même triangle. Ce qui compte, c'est que les deux plus petits nombres soient les cathètes et le plus grand l'hypoténuse.",
            },
          ],
          "image": {
            "src": "pythagorean-triples-squares.svg",
            "alt": "Carrés dessinés sur les côtés 3, 4 et 5, d'aires 9, 16 et 25, montrant que 9 plus 16 égale 25",
            "caption": "Les carrés construits sur les côtés 3, 4 et 5 ont pour aires 9, 16 et 25. Comme 9 + 16 = 25, les nombres 3, 4 et 5 forment un triplet pythagoricien.",
          },
        },
        "sec-pythagorean": {
          "h2": "Comprendre le théorème de Pythagore",
          "blocks": [
            {
              "kind": "p",
              "text": "Le théorème derrière chaque triplet : les carrés des cathètes s'additionnent pour donner le carré de l'hypoténuse.",
            },
            {
              "kind": "p",
              "text": "Le théorème de Pythagore affirme que dans tout triangle rectangle, le carré de l'hypoténuse est égal à la somme des carrés des deux autres côtés. Avec des cathètes [[a]] et [[b]] et une hypoténuse [[c]], le théorème s'écrit comme suit.",
            },
            {
              "kind": "p",
              "text": "[[[a^2+b^2=c^2]]]",
            },
            {
              "kind": "p",
              "text": "Une façon claire de le voir est celle des aires. Dessinez un carré sur chaque côté du triangle. Le carré construit sur la cathète [[a]] a pour aire [[a^2]], le carré construit sur la cathète [[b]] a pour aire [[b^2]], et le carré construit sur l'hypoténuse a pour aire [[c^2]]. Le théorème dit que les deux premières aires s'additionnent pour donner la troisième. Pour le triangle [[3]]-[[4]]-[[5]], les carrés ont pour aires [[9]], [[16]] et [[25]], et [[9+16=25]] montre directement cet équilibre.",
            },
            {
              "kind": "p",
              "text": "Cette image par les aires explique aussi pourquoi [[3]]-[[4]]-[[5]] est un triangle rectangle valide. Ses longueurs de côtés satisfont exactement l'équilibre des aires, donc l'angle entre les cathètes doit être un angle droit. Chaque triplet pythagoricien satisfait le théorème, car un triplet est défini par cette équation. L'inverse n'est pas vrai : beaucoup de triangles rectangles ont des longueurs de côtés qui ne sont pas des nombres entiers, donc ils satisfont le théorème sans être des triplets. Utilisez la <a href=\"/pythagorean-theorem-calculator/\">calculatrice du théorème de Pythagore</a> quand un triangle a des côtés décimaux ou inconnus au lieu de triplets entiers.",
            },
          ],
          "image": {
            "src": "pythagorean-triples-theorem.svg",
            "alt": "Triangle rectangle ABC avec des cathètes a égale 3 et b égale 4, une hypoténuse c égale 5, un marqueur d'angle droit et la formule a au carré plus b au carré égale c au carré",
            "caption": "Triangle rectangle ABC avec des cathètes a = 3 et b = 4 et une hypoténuse c = 5. Le marqueur d'angle droit se trouve en C, et 3 au carré plus 4 au carré égale 5 au carré.",
          },
        },
        "sec-check": {
          "h2": "Comment vérifier si trois nombres forment un triplet pythagoricien",
          "blocks": [
            {
              "kind": "p",
              "text": "Huit courtes étapes transforment trois nombres entiers quelconques en un oui ou un non clair.",
            },
            {
              "kind": "steps",
              "steps": [
                "Identifiez la plus grande des trois valeurs.",
                "Attribuez la plus grande valeur à [[c]], l'hypoténuse.",
                "Attribuez les deux autres valeurs à [[a]] et [[b]], les cathètes.",
                "Élevez [[a]] au carré.",
                "Élevez [[b]] au carré.",
                "Additionnez les deux carrés.",
                "Élevez [[c]] au carré.",
                "Comparez les deux résultats : égaux, c'est un triplet valide ; inégaux, ce n'est pas un triplet.",
              ],
            },
            {
              "kind": "p",
              "text": "Voici un exemple valide. Vérifiez [[7]], [[24]] et [[25]] : la plus grande valeur est [[25]], c'est donc l'hypoténuse. Élevez les cathètes au carré et additionnez.",
            },
            {
              "kind": "p",
              "text": "[[[7^2+24^2=25^2]]]",
            },
            {
              "kind": "p",
              "text": "[[[49+576=625]]]",
            },
            {
              "kind": "p",
              "text": "Comme [[625=625]], les deux côtés correspondent, donc [[(7, 24, 25)]] est un triplet pythagoricien valide. Il est aussi primitif, car [[7]], [[24]] et [[25]] n'ont aucun facteur commun supérieur à [[1]].",
            },
            {
              "kind": "p",
              "text": "Voici maintenant un exemple invalide. Vérifiez [[4]], [[5]] et [[6]] : la plus grande valeur est [[6]], c'est donc l'hypoténuse.",
            },
            {
              "kind": "p",
              "text": "[[[4^2+5^2 \\neq 6^2]]]",
            },
            {
              "kind": "p",
              "text": "[[[16+25=41]]]",
            },
            {
              "kind": "p",
              "text": "[[[6^2=36]]]",
            },
            {
              "kind": "p",
              "text": "Comme [[41]] n'est pas égal à [[36]], ces valeurs ne forment pas un triplet pythagoricien. Les mêmes huit étapes fonctionnent pour n'importe quelles entrées entières positives, grandes ou petites, donc la vérification exacte ne dépend jamais de la mémoire ni des devinettes.",
            },
          ],
          "image": {
            "src": "pythagorean-triples-check-flow.svg",
            "alt": "Parcours étape par étape pour vérifier 7, 24, 25 : élever les cathètes au carré pour obtenir 49 et 576, additionner pour obtenir 625, élever l'hypoténuse au carré pour obtenir 625, et confirmer l'égalité",
            "caption": "Vérification de 7, 24, 25 étape par étape : 49 + 576 = 625 et 25 au carré = 625, donc les deux côtés correspondent et le triplet est valide.",
          },
        },
        "sec-euclid": {
          "h2": "Comment générer des triplets pythagoriciens avec la formule d'Euclide",
          "blocks": [
            {
              "kind": "p",
              "text": "Deux petits entiers en entrée, un triplet complet en sortie : c'est la formule d'Euclide.",
            },
            {
              "kind": "p",
              "text": "La formule d'Euclide construit un triplet pythagoricien à partir de deux entiers positifs, [[m]] et [[n]], [[m]] étant supérieur à [[n]]. Le paramètre [[m]] est le plus grand entier et [[n]] le plus petit, et les deux doivent être des nombres entiers. Les trois formules produisent les deux cathètes et l'hypoténuse.",
            },
            {
              "kind": "p",
              "text": "[[[a=m^2-n^2]]]",
            },
            {
              "kind": "p",
              "text": "[[[b=2mn]]]",
            },
            {
              "kind": "p",
              "text": "[[[c=m^2+n^2]]]",
            },
            {
              "kind": "p",
              "text": "La condition [[m>n>0]] est importante. Si [[m]] est égal à [[n]], la première cathète devient nulle, ce qui n'est pas un côté de triangle. Si [[m]] est inférieur à [[n]], la première cathète devient négative, ce qui est également impossible. Les valeurs décimales de [[m]] et [[n]] ne sont pas valides ici non plus, car la formule est conçue pour des paramètres entiers qui produisent des côtés entiers.",
            },
            {
              "kind": "p",
              "text": "Essayez [[m=2]] et [[n=1]]. La première cathète est [[a=2^2-1^2=4-1=3]], la deuxième cathète est [[b=2(2)(1)=4]], et l'hypoténuse est [[c=2^2+1^2=4+1=5]]. Le résultat est le triplet [[(3, 4, 5)]]. Remarquez que les cathètes générées peuvent apparaître dans l'un ou l'autre ordre : la formule peut renvoyer la plus grande cathète en premier ou en second, mais [[c]] est toujours l'hypoténuse. La section suivante prouve pourquoi ces formules satisfont toujours le théorème de Pythagore.",
            },
          ],
          "image": {
            "src": "pythagorean-triples-euclid-flow.svg",
            "alt": "Organigramme de la formule d'Euclide avec m égale 3 et n égale 2 produisant 5, 12 et 13",
            "caption": "La formule d'Euclide avec m = 3 et n = 2 : m au carré moins n au carré vaut 5, 2mn vaut 12, et m au carré plus n au carré vaut 13, ce qui donne le triplet 5, 12, 13.",
          },
        },
        "sec-proof": {
          "h2": "Preuve mathématique de la formule d'Euclide",
          "blocks": [
            {
              "kind": "p",
              "text": "Une courte preuve algébrique montre pourquoi la formule d'Euclide ne peut jamais échouer.",
            },
            {
              "kind": "p",
              "text": "Commencez avec les deux formules des cathètes, [[a=m^2-n^2]] et [[b=2mn]], et testez si [[a^2+b^2]] est égal à [[c^2]] quand [[c=m^2+n^2]]. Remplacez les formules dans le membre de gauche de l'équation de Pythagore.",
            },
            {
              "kind": "p",
              "text": "[[[a^2+b^2=(m^2-n^2)^2+(2mn)^2]]]",
            },
            {
              "kind": "p",
              "text": "Développez les deux carrés. Le premier carré se développe en [[m^4-2m^2n^2+n^4]] et le second en [[4m^2n^2]], donc la somme devient l'expression suivante.",
            },
            {
              "kind": "p",
              "text": "[[[=m^4-2m^2n^2+n^4+4m^2n^2]]]",
            },
            {
              "kind": "p",
              "text": "Combinez les termes du milieu : [[-2m^2n^2+4m^2n^2]] donne [[+2m^2n^2]]. L'expression est maintenant un carré parfait déguisé.",
            },
            {
              "kind": "p",
              "text": "[[[=m^4+2m^2n^2+n^4]]]",
            },
            {
              "kind": "p",
              "text": "Factorisez-la. Le résultat est le carré de [[m^2+n^2]], ce qui est exactement [[c]].",
            },
            {
              "kind": "p",
              "text": "[[[=(m^2+n^2)^2]]]",
            },
            {
              "kind": "p",
              "text": "Comme [[c=m^2+n^2]], le membre de droite est [[c^2]], et la preuve est terminée.",
            },
            {
              "kind": "p",
              "text": "[[[a^2+b^2=c^2]]]",
            },
            {
              "kind": "p",
              "text": "L'étape clé est la simplification partielle des termes du milieu : le [[-2m^2n^2]] du premier carré et le [[+4m^2n^2]] du second laissent exactement le [[+2m^2n^2]] nécessaire pour compléter le carré. Comme cela fonctionne pour tous les entiers [[m]] et [[n]] avec [[m>n>0]], chaque paire génère un véritable triplet pythagoricien. La preuve ne dit rien sur le caractère primitif, en revanche : le fait que le résultat soit primitif dépend des conditions supplémentaires présentées dans les sections ci-dessous.",
            },
          ],
        },
        "sec-primitive": {
          "h2": "Qu'est-ce qu'un triplet pythagoricien primitif ?",
          "blocks": [
            {
              "kind": "p",
              "text": "Un triplet primitif est un triplet sous sa forme la plus simple, sans facteur partagé.",
            },
            {
              "kind": "p",
              "text": "Un triplet pythagoricien primitif est un triplet dont les trois longueurs de côtés n'ont aucun facteur entier positif commun supérieur à [[1]]. En symboles, le plus grand commun diviseur des trois côtés est [[1]].",
            },
            {
              "kind": "p",
              "text": "[[[\\gcd(a,b,c)=1]]]",
            },
            {
              "kind": "p",
              "text": "Le triplet [[(3, 4, 5)]] est primitif car [[\\gcd(3,4,5)=1]] : aucun entier supérieur à [[1]] ne divise les trois nombres. Il en va de même pour [[(5, 12, 13)]], [[(8, 15, 17)]] et [[(7, 24, 25)]]. Chacun de ces triplets est un triplet de base qui ne peut pas être réduit à un triplet entier plus petit par division.",
            },
            {
              "kind": "p",
              "text": "Primitif ne signifie pas que le triplet est le plus petit possible à tous égards. Cela signifie seulement que les trois valeurs n'ont aucun facteur commun autre que [[1]]. Un grand triplet primitif comme [[(20, 21, 29)]] reste primitif, car [[20]], [[21]] et [[29]] n'ont pas de diviseur commun. Le tableau ci-dessous compare les diviseurs d'un triplet primitif et d'une copie mise à l'échelle.",
            },
          ],
          "table": {
            "headers": [
              "Triplet",
              "Diviseurs communs",
              "Primitif ?",
            ],
            "rows": [
              [
                "[[(3, 4, 5)]]",
                "[[1]]",
                "Oui",
              ],
              [
                "[[(5, 12, 13)]]",
                "[[1]]",
                "Oui",
              ],
              [
                "[[(8, 15, 17)]]",
                "[[1]]",
                "Oui",
              ],
              [
                "[[(6, 8, 10)]]",
                "[[1, 2]]",
                "Non",
              ],
              [
                "[[(9, 12, 15)]]",
                "[[1, 3]]",
                "Non",
              ],
            ],
          },
          "image": {
            "src": "pythagorean-triples-primitive-vs-scaled.svg",
            "alt": "Deux triangles rectangles, 3-4-5 et 6-8-10, montrant que le second est le double du premier et que seul le premier est primitif",
            "caption": "Le triangle 3-4-5 est primitif, tandis que le triangle 6-8-10 est deux fois plus grand pour chaque côté : pgcd(3, 4, 5) = 1, mais pgcd(6, 8, 10) = 2.",
          },
        },
        "sec-nonprimitive": {
          "h2": "Qu'est-ce qu'un triplet pythagoricien non primitif ?",
          "blocks": [
            {
              "kind": "p",
              "text": "Un triplet non primitif est une copie mise à l'échelle d'un triplet primitif.",
            },
            {
              "kind": "p",
              "text": "Un triplet pythagoricien non primitif est un triplet dont les trois valeurs partagent un facteur entier commun supérieur à [[1]]. C'est toujours un triplet valide, car il satisfait exactement [[a^2+b^2=c^2]]. Il n'est simplement pas sous sa forme la plus simple.",
            },
            {
              "kind": "p",
              "text": "Partez du triplet primitif [[(3, 4, 5)]] et multipliez chaque côté par [[2]]. Le résultat est [[(6, 8, 10)]], et la vérification fonctionne toujours : [[36+64=100]]. Multipliez par [[3]] à la place et le résultat est [[(9, 12, 15)]], avec [[81+144=225]]. Les deux triplets mis à l'échelle sont valides, et aucun des deux n'est primitif, car le premier partage le facteur [[2]] et le second partage le facteur [[3]].",
            },
            {
              "kind": "p",
              "text": "Trouver le facteur commun est simple : prenez le plus grand commun diviseur des trois côtés. Pour [[(6, 8, 10)]], c'est [[2]] ; pour [[(9, 12, 15)]], c'est [[3]]. Diviser chaque côté par ce facteur permet de retrouver le triplet primitif sous-jacent. Ainsi, [[(6, 8, 10)]] divisé par [[2]] redonne [[(3, 4, 5)]], et [[(9, 12, 15)]] divisé par [[3]] redonne également [[(3, 4, 5)]]. Chaque triplet non primitif se réduit de cette façon à exactement un triplet primitif.",
            },
          ],
        },
        "sec-conditions": {
          "h2": "Conditions pour générer des triplets pythagoriciens primitifs",
          "blocks": [
            {
              "kind": "p",
              "text": "La formule d'Euclide ne donne un triplet primitif que lorsque les deux conditions sur les paramètres sont remplies.",
            },
            {
              "kind": "p",
              "text": "Deux conditions sur [[m]] et [[n]] décident si la formule d'Euclide produit un triplet primitif. Les deux doivent être remplies en même temps, et aucune ne suffit à elle seule.",
            },
            {
              "kind": "h3",
              "text": "Condition 1 : paramètres premiers entre eux",
            },
            {
              "kind": "p",
              "text": "Les paramètres doivent être premiers entre eux, c'est-à-dire qu'ils ne partagent aucun facteur commun supérieur à [[1]].",
            },
            {
              "kind": "p",
              "text": "[[[\\gcd(m,n)=1]]]",
            },
            {
              "kind": "p",
              "text": "Quand [[m]] et [[n]] partagent un facteur, ce facteur se retrouve dans les trois côtés générés. Par exemple, [[m=4]] et [[n=2]] partagent le facteur [[2]], et la formule produit [[(12, 16, 20)]], dont les côtés partagent tous le facteur [[4]]. Le résultat est non primitif.",
            },
            {
              "kind": "h3",
              "text": "Condition 2 : parités opposées",
            },
            {
              "kind": "p",
              "text": "Un paramètre doit être pair et l'autre impair. Quand les deux paramètres sont impairs, les cathètes et l'hypoténuse générées sont toutes paires, donc le triplet partage le facteur [[2]] et ne peut pas être primitif. Par exemple, [[m=3]] et [[n=1]] sont premiers entre eux mais tous deux impairs, et la formule produit [[(8, 6, 10)]], qui est le triplet non primitif [[(6, 8, 10)]] avec les cathètes dans un ordre différent.",
            },
            {
              "kind": "p",
              "text": "Trois paires de paramètres montrent comment les conditions fonctionnent ensemble. La paire [[(2, 1)]] est formée de nombres premiers entre eux de parités opposées et donne le triplet primitif [[(3, 4, 5)]]. La paire [[(3, 2)]] est formée de nombres premiers entre eux de parités opposées et donne le triplet primitif [[(5, 12, 13)]]. La paire [[(3, 1)]] est formée de nombres premiers entre eux mais tous deux impairs, donc elle donne le triplet non primitif [[(6, 8, 10)]]. La primalité relative sans parités opposées ne suffit pas, et les parités opposées sans primalité relative ne suffisent pas non plus.",
            },
          ],
          "image": {
            "src": "pythagorean-triples-conditions.svg",
            "alt": "Deux exemples de paramètres : m égale 3 et n égale 2 donnent le triplet primitif 5-12-13, tandis que m égale 3 et n égale 1 donnent le triplet non primitif 6-8-10",
            "caption": "Les paramètres m = 3, n = 2 sont premiers entre eux et de parités opposées, et donnent le triplet primitif 5-12-13. Les paramètres m = 3, n = 1 sont tous deux impairs et donnent le triplet non primitif 6-8-10.",
          },
        },
        "sec-difference": {
          "h2": "Différence entre les triplets primitifs et non primitifs",
          "blocks": [
            {
              "kind": "p",
              "text": "Même théorème, forme différente : un tableau résume toute la distinction.",
            },
            {
              "kind": "p",
              "text": "Les deux types de triplets satisfont exactement le théorème de Pythagore, donc les deux décrivent de véritables triangles rectangles. La différence porte seulement sur les facteurs partagés et sur la façon dont le triplet a été produit. Un triplet primitif est un motif de base ; un triplet non primitif est généralement un multiple d'un triplet primitif.",
            },
          ],
          "table": {
            "headers": [
              "Caractéristique",
              "Primitif",
              "Non primitif",
            ],
            "rows": [
              [
                "Diviseur commun",
                "Seulement [[1]]",
                "Supérieur à [[1]]",
              ],
              [
                "Longueurs des côtés",
                "Ne peut pas être réduit à un triplet entier plus petit",
                "Peut être divisé par un facteur commun",
              ],
              [
                "Exemple",
                "[[3, 4, 5]]",
                "[[6, 8, 10]]",
              ],
              [
                "Génération",
                "[[m]], [[n]] premiers entre eux et de parités opposées",
                "Autres combinaisons de paramètres ou multiples entiers",
              ],
              [
                "Relation",
                "Triplet entier de base",
                "Souvent un multiple d'un triplet primitif",
              ],
            ],
          },
        },
        "sec-scaling": {
          "h2": "Comment générer plus de triplets en mettant à l'échelle des triplets existants",
          "blocks": [
            {
              "kind": "p",
              "text": "Multipliez chaque côté par le même nombre entier et le triplet reste valide.",
            },
            {
              "kind": "p",
              "text": "Pour tout entier positif [[k]], multiplier chaque côté d'un triplet pythagoricien [[(a, b, c)]] par [[k]] donne un autre triplet pythagoricien, [[(ka, kb, kc)]].",
            },
            {
              "kind": "p",
              "text": "[[[\\boxed{(ka, kb, kc)}]]]",
            },
            {
              "kind": "p",
              "text": "La raison est une simple algèbre. Élever les cathètes mises à l'échelle au carré donne [[(ka)^2+(kb)^2=k^2a^2+k^2b^2]], et factoriser [[k^2]] donne [[k^2(a^2+b^2)]]. Comme le triplet d'origine satisfait [[a^2+b^2=c^2]], la somme mise à l'échelle est égale à [[k^2c^2]], ce qui est [[(kc)^2]]. Le triplet mis à l'échelle satisfait donc le théorème exactement.",
            },
            {
              "kind": "p",
              "text": "Mettre à l'échelle [[(3, 4, 5)]] par [[2]] donne [[(6, 8, 10)]], et mettre à l'échelle par [[3]] donne [[(9, 12, 15)]]. Mettre à l'échelle [[(5, 12, 13)]] par [[2]] donne [[(10, 24, 26)]], et mettre à l'échelle [[(8, 15, 17)]] par [[3]] donne [[(24, 45, 51)]]. Chaque résultat est un triplet valide, et chacun est non primitif, car le multiplicateur devient un facteur commun des trois côtés.",
            },
            {
              "kind": "p",
              "text": "Un multiplicateur entier préserve des longueurs de côtés entières, ce qui fait de la mise à l'échelle un moyen fiable de construire de nouveaux triplets. Un multiplicateur réel quelconque, comme [[1.5]], conserve un triangle rectangle de même forme, mais les côtés peuvent cesser d'être des nombres entiers : [[(3, 4, 5)]] mis à l'échelle par [[1.5]] donne [[(4.5, 6, 7.5)]], qui est un triangle rectangle mais pas un triplet pythagoricien. Notez que la calculatrice elle-même n'a pas de champ de multiplicateur séparé ; la mise à l'échelle est un calcul manuel que vous faites avec les triplets qu'elle vérifie ou génère.",
            },
          ],
          "image": {
            "src": "pythagorean-triples-scaling.svg",
            "alt": "Le triplet 3-4-5 multiplié par 2, 3 et 4 pour donner 6-8-10, 9-12-15 et 12-16-20",
            "caption": "Mettre à l'échelle 3-4-5 par 2, 3 et 4 donne 6-8-10, 9-12-15 et 12-16-20. Chaque ensemble mis à l'échelle reste un triplet pythagoricien valide.",
          },
        },
        "sec-examples": {
          "h2": "Exemples courants de triplets pythagoriciens",
          "blocks": [
            {
              "kind": "p",
              "text": "Dix triplets à connaître par cœur, chacun vérifié.",
            },
            {
              "kind": "p",
              "text": "Le tableau ci-dessous présente dix triplets pythagoriciens bien connus. Chaque ligne a été vérifiée avec le théorème de Pythagore, et chaque ligne est primitive sauf lorsqu'un multiple mis à l'échelle est indiqué. Les cathètes de chaque ligne peuvent être énumérées dans l'un ou l'autre ordre : [[(4, 3, 5)]] est le même triangle que [[(3, 4, 5)]].",
            },
          ],
          "table": {
            "headers": [
              "Première cathète",
              "Deuxième cathète",
              "Hypoténuse",
            ],
            "rows": [
              [
                "[[3]]",
                "[[4]]",
                "[[5]]",
              ],
              [
                "[[5]]",
                "[[12]]",
                "[[13]]",
              ],
              [
                "[[8]]",
                "[[15]]",
                "[[17]]",
              ],
              [
                "[[7]]",
                "[[24]]",
                "[[25]]",
              ],
              [
                "[[20]]",
                "[[21]]",
                "[[29]]",
              ],
              [
                "[[12]]",
                "[[35]]",
                "[[37]]",
              ],
              [
                "[[9]]",
                "[[40]]",
                "[[41]]",
              ],
              [
                "[[28]]",
                "[[45]]",
                "[[53]]",
              ],
              [
                "[[11]]",
                "[[60]]",
                "[[61]]",
              ],
              [
                "[[16]]",
                "[[63]]",
                "[[65]]",
              ],
            ],
          },
          "image": {
            "src": "pythagorean-triples-compare.svg",
            "alt": "Trois triangles rectangles dessinés à l'échelle : 3-4-5, 5-12-13 et 8-15-17, montrant des formes différentes",
            "caption": "Trois triplets primitifs dessinés à l'échelle : 3-4-5, 5-12-13 et 8-15-17. Chacun a une forme différente et des angles aigus différents.",
          },
        },
        "sec-worked": {
          "h2": "Exemples détaillés pas à pas avec la calculatrice",
          "blocks": [
            {
              "kind": "p",
              "text": "Huit exemples couvrant les deux modes : quatre vérifications et quatre générations.",
            },
            {
              "kind": "h3",
              "text": "Exemple 1 : Vérifier 3, 4, 5",
            },
            {
              "kind": "p",
              "text": "Saisissez [[a=3]], [[b=4]] et [[c=5]] en mode vérification. Élevez les cathètes au carré et additionnez : [[3^2+4^2=9+16=25]]. Élevez l'hypoténuse au carré : [[5^2=25]]. Comme [[25=25]], le résultat est un triplet valide. Il est primitif, car [[3]], [[4]] et [[5]] n'ont aucun facteur commun.",
            },
            {
              "kind": "h3",
              "text": "Exemple 2 : Vérifier 5, 12, 13",
            },
            {
              "kind": "p",
              "text": "Saisissez [[a=5]], [[b=12]] et [[c=13]]. Les cathètes donnent [[5^2+12^2=25+144=169]], et l'hypoténuse donne [[13^2=169]]. Comme [[169=169]], le résultat est un triplet valide. Il est primitif, car [[\\gcd(5,12,13)=1]].",
            },
            {
              "kind": "h3",
              "text": "Exemple 3 : Vérifier 6, 8, 10",
            },
            {
              "kind": "p",
              "text": "Saisissez [[a=6]], [[b=8]] et [[c=10]]. Les cathètes donnent [[6^2+8^2=36+64=100]], et l'hypoténuse donne [[10^2=100]]. Comme [[100=100]], le résultat est un triplet valide. Il est non primitif, car les trois côtés partagent le facteur [[2]] ; diviser par [[2]] redonne le triplet primitif [[(3, 4, 5)]].",
            },
            {
              "kind": "h3",
              "text": "Exemple 4 : Vérifier 7, 24, 25",
            },
            {
              "kind": "p",
              "text": "Saisissez [[a=7]], [[b=24]] et [[c=25]]. Les cathètes donnent [[7^2+24^2=49+576=625]], et l'hypoténuse donne [[25^2=625]]. Comme [[625=625]], le résultat est un triplet valide. Il est primitif, car [[7]], [[24]] et [[25]] n'ont aucun facteur commun.",
            },
            {
              "kind": "h3",
              "text": "Exemple 5 : Générer avec m = 2, n = 1",
            },
            {
              "kind": "p",
              "text": "Saisissez [[m=2]] et [[n=1]] en mode génération. La première cathète est [[a=2^2-1^2=3]], la deuxième cathète est [[b=2(2)(1)=4]], et l'hypoténuse est [[c=2^2+1^2=5]]. Le résultat est [[(3, 4, 5)]], un triplet primitif.",
            },
            {
              "kind": "h3",
              "text": "Exemple 6 : Générer avec m = 3, n = 2",
            },
            {
              "kind": "p",
              "text": "Saisissez [[m=3]] et [[n=2]]. La première cathète est [[a=3^2-2^2=9-4=5]], la deuxième cathète est [[b=2(3)(2)=12]], et l'hypoténuse est [[c=3^2+2^2=13]]. Le résultat est [[(5, 12, 13)]], un triplet primitif, car [[3]] et [[2]] sont premiers entre eux et de parités opposées.",
            },
            {
              "kind": "h3",
              "text": "Exemple 7 : Générer avec m = 4, n = 1",
            },
            {
              "kind": "p",
              "text": "Saisissez [[m=4]] et [[n=1]]. Les formules donnent [[a=4^2-1^2=15]], [[b=2(4)(1)=8]] et [[c=4^2+1^2=17]]. En énumérant les cathètes par ordre croissant, le résultat est [[(8, 15, 17)]]. Il est primitif, car [[4]] et [[1]] sont premiers entre eux et de parités opposées.",
            },
            {
              "kind": "h3",
              "text": "Exemple 8 : Générer avec m = 3, n = 1",
            },
            {
              "kind": "p",
              "text": "Saisissez [[m=3]] et [[n=1]]. Les formules donnent [[a=3^2-1^2=8]], [[b=2(3)(1)=6]] et [[c=3^2+1^2=10]]. En énumérant les cathètes par ordre croissant, le résultat est [[(6, 8, 10)]]. Ce triplet est non primitif : [[3]] et [[1]] sont premiers entre eux, mais tous deux impairs, donc la condition de parités opposées échoue et chaque côté est pair. Diviser par [[2]] redonne le triplet primitif [[(3, 4, 5)]].",
            },
          ],
        },
        "sec-infinite": {
          "h2": "Pourquoi existe-t-il une infinité de triplets pythagoriciens ?",
          "blocks": [
            {
              "kind": "p",
              "text": "La formule d'Euclide ne manque jamais d'entrées, donc elle ne manque jamais de triplets.",
            },
            {
              "kind": "p",
              "text": "La formule d'Euclide accepte n'importe quelle paire d'entiers positifs [[m]] et [[n]] avec [[m]] supérieur à [[n]], et il existe une infinité de telles paires. Chaque nouvelle paire produit un triplet, et des paires différentes produisent généralement des triplets différents. Les paires [[(2, 1)]], [[(3, 2)]], [[(4, 1)]], [[(4, 3)]] et [[(5, 2)]] donnent respectivement [[(3, 4, 5)]], [[(5, 12, 13)]], [[(8, 15, 17)]], [[(7, 24, 25)]] et [[(20, 21, 29)]], et la liste continue : [[(5, 4)]] donne [[(9, 40, 41)]], et [[(6, 1)]] donne [[(12, 35, 37)]]. Des valeurs de [[m]] plus grandes continuent de produire des triplets plus grands sans fin.",
            },
            {
              "kind": "p",
              "text": "Les multiples entiers en ajoutent encore davantage. Chaque triplet primitif génère toute une famille de copies mises à l'échelle : [[(3, 4, 5)]] à lui seul donne [[(6, 8, 10)]], [[(9, 12, 15)]], [[(12, 16, 20)]], et ainsi de suite à l'infini. Entre les paires de paramètres sans fin et les multiples sans fin, l'offre de triplets pythagoriciens est infinie. Notez la formulation prudente : toutes les paires de paramètres ne produisent pas un triplet primitif, mais chaque paire produit un triplet valide, et les triplets primitifs sont infinis eux aussi.",
            },
          ],
        },
        "sec-recognize": {
          "h2": "Comment reconnaître un triplet pythagoricien sans deviner",
          "blocks": [
            {
              "kind": "p",
              "text": "Quelques habitudes font ressortir les triplets familiers avant même de calculer.",
            },
            {
              "kind": "p",
              "text": "Commencez par traiter la plus grande valeur comme l'hypoténuse et comparez les valeurs au carré, exactement comme le décrivent les étapes de vérification. Avec de la pratique, les triplets courants deviennent familiers : [[3]]-[[4]]-[[5]], [[5]]-[[12]]-[[13]], [[8]]-[[15]]-[[17]] et [[7]]-[[24]]-[[25]] apparaissent si souvent dans les manuels et les examens que les reconnaître fait vraiment gagner du temps.",
            },
            {
              "kind": "p",
              "text": "Cherchez ensuite les facteurs communs. Si les trois nombres sont pairs, divisez par [[2]] et voyez ce qui reste. L'ensemble [[6]]-[[8]]-[[10]] se reconnaît immédiatement comme le double de [[3]]-[[4]]-[[5]] une fois le facteur [[2]] repéré. Réduire un triplet non primitif à sa forme primitive révèle souvent un motif familier caché derrière des nombres plus grands.",
            },
            {
              "kind": "p",
              "text": "Quand vous avez besoin d'un nouveau triplet plutôt que d'une vérification, la formule d'Euclide est la voie fiable : choisissez de petites valeurs de [[m]] et [[n]] et générez. La reconnaissance est un raccourci utile, mais la vérification exacte reste le mot final. Un triplet qui semble familier mérite toujours le test d'élévation au carré et de comparaison avant de vous y fier.",
            },
          ],
        },
        "sec-ordinary": {
          "h2": "Les triplets pythagoriciens et les triangles rectangles ordinaires",
          "blocks": [
            {
              "kind": "p",
              "text": "Chaque triplet est un triangle rectangle, mais la plupart des triangles rectangles ne sont pas des triplets.",
            },
            {
              "kind": "p",
              "text": "Un triangle rectangle peut avoir des longueurs de côtés entières, décimales ou irrationnelles. Seule la première catégorie peut former un triplet pythagoricien. Le triplet [[(3, 4, 5)]] est un triangle rectangle entier, et il est admissible. Un triangle avec des cathètes [[1]] et [[1]] et une hypoténuse [[\\sqrt{2}]] est un véritable triangle rectangle, puisque [[1+1=2]], mais son hypoténuse est irrationnelle, donc ce n'est pas un triplet. Un triangle avec des côtés [[3]], [[4]] et [[5.1]] échoue à l'équation, puisque [[9+16=25]] et [[5.1^2=26.01]], donc ce n'est même pas un triangle rectangle.",
            },
            {
              "kind": "p",
              "text": "La distinction compte en pratique. Les constructeurs utilisent [[3]]-[[4]]-[[5]] parce que les nombres entiers sont faciles à mesurer avec un mètre ruban. Un triangle avec des côtés [[3]], [[4]] et [[5.1]] semble presque droit mais s'écarte d'un angle visible, et aucun contrôle par nombres entiers ne le validerait. Le théorème de Pythagore s'applique à tous les triangles rectangles, quelles que soient leurs longueurs de côtés. Le terme triplet pythagoricien désigne seulement les solutions entières positives, et c'est ce sens étroit qui rend les triplets spéciaux.",
            },
          ],
        },
        "sec-mistakes": {
          "h2": "Erreurs courantes avec la calculatrice de triplets pythagoriciens",
          "blocks": [
            {
              "kind": "p",
              "text": "Quinze erreurs, chacune avec le correctif à côté.",
            },
            {
              "kind": "list",
              "items": [
                "Saisir [[c]] comme un côté plus petit : l'hypoténuse doit être la plus grande valeur, donc attribuez toujours le plus grand nombre à [[c]] avant de vérifier.",
                "Oublier d'élever les valeurs au carré : le théorème compare des carrés, pas les longueurs des côtés elles-mêmes, donc élevez d'abord [[a]], [[b]] et [[c]] au carré.",
                "Additionner les côtés au lieu de leurs carrés : [[a+b]] est la mauvaise somme ; la vérification exige [[a^2+b^2]] comparé à [[c^2]].",
                "Utiliser [[a+b=c]] au lieu de [[a^2+b^2=c^2]] : la simple somme de deux côtés n'égale jamais l'hypoténuse dans un triangle rectangle.",
                "Confondre l'hypoténuse avec une cathète : l'hypoténuse se trouve en face de l'angle droit et est toujours le côté le plus long.",
                "Utiliser des valeurs décimales en espérant un triplet entier : les décimales peuvent former un triangle rectangle, mais seuls les entiers positifs forment un triplet pythagoricien.",
                "Saisir des longueurs de côtés nulles ou négatives : les longueurs de côtés doivent être positives, et les entrées nulles ou négatives sont rejetées.",
                "Utiliser [[m]] égal à [[n]] : la première cathète devient [[m^2-n^2=0]], ce qui n'est pas un côté de triangle.",
                "Utiliser [[m]] inférieur à [[n]] : la première cathète devient négative, ce qui est impossible pour une longueur de côté.",
                "Saisir des valeurs décimales pour [[m]] et [[n]] : la formule d'Euclide exige des paramètres entiers positifs pour produire des côtés entiers.",
                "Supposer que chaque triplet généré est primitif : la génération garantit seulement un triplet valide, et le caractère primitif exige des paramètres premiers entre eux et de parités opposées.",
                "Supposer que tous les triplets primitifs sont des multiples de [[3]]-[[4]]-[[5]] : [[5]]-[[12]]-[[13]] et [[8]]-[[15]]-[[17]] sont des triplets primitifs indépendants, pas des multiples de [[3]]-[[4]]-[[5]].",
                "Oublier la condition de parités opposées : deux paramètres impairs produisent un triplet pair et non primitif, comme le montrent [[m=3]] et [[n=1]].",
                "Oublier de vérifier les facteurs communs : un triplet comme [[(12, 16, 20)]] semble nouveau jusqu'à ce que le facteur partagé [[4]] révèle qu'il s'agit d'un [[(3, 4, 5)]] mis à l'échelle.",
                "Confondre un triangle rectangle valide avec un triplet pythagoricien entier : un triangle dont les côtés sont irrationnels ou décimaux peut satisfaire le théorème sans être un triplet.",
              ],
            },
          ],
        },
        "sec-practice": {
          "h2": "Exercices avec réponses",
          "blocks": [
            {
              "kind": "p",
              "text": "Huit problèmes, quatre vérifications et quatre générations, avec des solutions complètes.",
            },
            {
              "kind": "list",
              "items": [
                "Vérifiez si [[8]], [[15]] et [[17]] forment un triplet. Réponse : oui, primitif. [[8^2+15^2=64+225=289=17^2]], et les trois nombres n'ont aucun facteur commun.",
                "Vérifiez si [[6]], [[8]] et [[11]] forment un triplet. Réponse : non. [[6^2+8^2=36+64=100]], mais [[11^2=121]], donc les deux côtés diffèrent.",
                "Déterminez si [[9]], [[12]] et [[15]] sont primitifs. Réponse : non primitifs. Les nombres partagent le facteur [[3]], et diviser par [[3]] donne le triplet primitif [[(3, 4, 5)]].",
                "Générez un triplet avec [[m=2]] et [[n=1]]. Réponse : [[(3, 4, 5)]]. [[a=4-1=3]], [[b=4]], [[c=4+1=5]].",
                "Générez un triplet avec [[m=3]] et [[n=2]]. Réponse : [[(5, 12, 13)]]. [[a=9-4=5]], [[b=12]], [[c=9+4=13]].",
                "Générez un triplet avec [[m=4]] et [[n=1]]. Réponse : [[(8, 15, 17)]]. [[a=16-1=15]], [[b=8]], [[c=16+1=17]], avec les cathètes triées par ordre croissant.",
                "Déterminez si [[m=3]] et [[n=1]] produisent un triplet primitif. Réponse : non. Les paramètres sont premiers entre eux mais tous deux impairs, donc le résultat est le triplet non primitif [[(6, 8, 10)]].",
                "Trouvez le multiplicateur commun entre [[3]]-[[4]]-[[5]] et [[15]]-[[20]]-[[25]]. Réponse : [[5]]. Chaque côté de [[(3, 4, 5)]] multiplié par [[5]] donne [[(15, 20, 25)]].",
              ],
            },
          ],
        },
      },
      "relatedHeading": "Calculatrices de triangles rectangles associées",
      "relatedIntro": "Chaque calculatrice ci-dessous traite une tâche différente du triangle rectangle, alors choisissez l'outil qui correspond à la mesure dont vous avez besoin.",
      "relatedItems": [
        "Calculatrice de triangle rectangle",
        "Calculatrice du théorème de Pythagore",
        "Calculatrice de triangle 3-4-5",
        "Calculatrice de triangle 5-12-13",
        "Calculatrice de côté de triangle rectangle",
        "Calculatrice de triangle rectangle spécial",
      ],
      "faqHeading": "Questions fréquentes",
      "faqs": [
        {
          "question": "Qu'est-ce qu'un triplet pythagoricien ?",
          "answer": "Un triplet pythagoricien est un ensemble de trois nombres entiers positifs, noté [[(a, b, c)]], qui satisfait l'équation [[a^2+b^2=c^2]]. Les deux plus petits nombres sont les cathètes d'un triangle rectangle et le plus grand est l'hypoténuse. L'exemple le plus connu est [[(3, 4, 5)]], puisque [[9+16=25]].",
        },
        {
          "question": "Comment fonctionne la calculatrice de triplets pythagoriciens ?",
          "answer": "Elle a deux modes. Le mode vérification prend trois nombres entiers et teste si [[a^2+b^2=c^2]] est vérifié. Le mode génération prend deux entiers, [[m]] et [[n]], et applique la formule d'Euclide pour construire un nouveau triplet. Les deux modes affichent un raisonnement pas à pas avec le résultat.",
        },
        {
          "question": "Comment vérifier si trois nombres forment un triplet pythagoricien ?",
          "answer": "Prenez la plus grande valeur comme hypoténuse [[c]] et les deux autres comme cathètes [[a]] et [[b]]. Élevez les trois au carré, additionnez [[a^2+b^2]] et comparez avec [[c^2]]. Des totaux égaux signifient un triplet valide ; des totaux inégaux signifient que les nombres n'en forment pas un.",
        },
        {
          "question": "Qu'est-ce que la formule d'Euclide ?",
          "answer": "La formule d'Euclide génère un triplet pythagoricien à partir de deux entiers positifs, [[m]] et [[n]], [[m]] étant supérieur à [[n]]. Les formules sont [[a=m^2-n^2]], [[b=2mn]] et [[c=m^2+n^2]]. Chaque paire produit un triplet valide, comme le montre la preuve algébrique de cette page.",
        },
        {
          "question": "Que sont m et n dans la formule du triplet pythagoricien ?",
          "answer": "Les valeurs [[m]] et [[n]] sont des paramètres entiers positifs de la formule d'Euclide. La valeur [[m]] est le plus grand entier et [[n]] le plus petit, avec [[m>n>0]]. Des valeurs plus grandes de [[m]] produisent des triplets plus grands, et des paires différentes produisent des triplets différents.",
        },
        {
          "question": "Qu'est-ce qu'un triplet pythagoricien primitif ?",
          "answer": "Un triplet primitif est un triplet dont les trois longueurs de côtés n'ont aucun facteur commun supérieur à [[1]], donc [[\\gcd(a,b,c)=1]]. Les exemples incluent [[(3, 4, 5)]], [[(5, 12, 13)]], [[(8, 15, 17)]] et [[(7, 24, 25)]]. Les triplets primitifs ne peuvent pas être réduits à un triplet entier plus petit.",
        },
        {
          "question": "Qu'est-ce qu'un triplet pythagoricien non primitif ?",
          "answer": "Un triplet non primitif est un triplet valide dont les trois côtés partagent un facteur commun supérieur à [[1]]. Par exemple, [[(6, 8, 10)]] est le double de [[(3, 4, 5)]] et [[(9, 12, 15)]] est le triple de [[(3, 4, 5)]]. Diviser par le facteur commun redonne le triplet primitif sous-jacent.",
        },
        {
          "question": "Comment savoir si un triplet généré est primitif ?",
          "answer": "Vérifiez les deux conditions sur les paramètres : [[m]] et [[n]] doivent être premiers entre eux, donc [[\\gcd(m,n)=1]], et ils doivent avoir des parités opposées, donc l'un est pair et l'autre impair. Si les deux conditions sont remplies, le triplet généré est primitif. Si l'une ou l'autre échoue, il est non primitif.",
        },
        {
          "question": "Les nombres décimaux peuvent-ils former un triplet pythagoricien ?",
          "answer": "Non. Un triplet pythagoricien est défini comme trois entiers positifs, donc des longueurs de côtés décimales ne sont jamais admissibles. Les décimales peuvent toujours former un triangle rectangle qui satisfait [[a^2+b^2=c^2]], par exemple des cathètes [[1.5]] et [[2]] avec une hypoténuse [[2.5]], mais ce triangle n'est pas un triplet pythagoricien.",
        },
        {
          "question": "Existe-t-il une infinité de triplets pythagoriciens ?",
          "answer": "Oui. La formule d'Euclide accepte une infinité de paires entières [[(m, n)]], et chaque paire produit un triplet. Les multiples entiers en ajoutent davantage : chaque triplet primitif génère une famille infinie de copies mises à l'échelle. L'offre de triplets ne s'épuise jamais.",
        },
        {
          "question": "Chaque triplet pythagoricien peut-il être généré avec la formule d'Euclide ?",
          "answer": "Oui, chaque triplet primitif provient de la formule d'Euclide avec des paramètres premiers entre eux et de parités opposées adaptés, et chaque triplet non primitif est un multiple d'un triplet primitif. Chaque triplet pythagoricien peut donc être atteint par la formule d'Euclide plus une mise à l'échelle par un entier positif.",
        },
        {
          "question": "Quel est le triplet pythagoricien le plus courant ?",
          "answer": "Le triplet [[(3, 4, 5)]] est le plus courant et le plus connu. C'est le plus petit triplet primitif, il est facile à retenir, et les constructeurs et les menuisiers l'utilisent depuis des siècles pour vérifier les angles droits. Les suivants les plus familiers sont [[(5, 12, 13)]] et [[(8, 15, 17)]].",
        },
      ],
    },
};
