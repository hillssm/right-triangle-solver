// projectionGuideTranslations.bpt.ts: Right Triangle Projection
// Guide (Page 33 of 45) translation.
export const PRJ_B3_PT = {
  "pt": {
      "faqHeading": "Perguntas Frequentes",
      "faqs": [
        {
          "question": "O que é uma projeção em um triângulo retângulo?",
          "answer": "Uma projeção é um segmento da hipotenusa criado quando a altura traçada a partir do ângulo reto encontra a hipotenusa. A altura divide a hipotenusa em duas partes, p e q. Cada parte é a projeção de um cateto sobre a hipotenusa.",
        },
        {
          "question": "Qual é a diferença entre a projeção p e a projeção q?",
          "answer": "A projeção p fica junto ao vértice A e pertence ao cateto a, enquanto a projeção q fica junto ao vértice B e pertence ao cateto b. Elas são as duas partes da mesma hipotenusa, e [[p + q = c]]. Trocar uma pela outra troca os catetos que elas descrevem.",
        },
        {
          "question": "Qual é a fórmula da projeção p?",
          "answer": "A fórmula é [[p = a^2 / c]], em que a é o cateto a e c é a hipotenusa completa. Eleve o cateto a ao quadrado primeiro e depois divida por c. Com [[a = 9]] cm e [[c = 15]] cm, [[p = 81 / 15 = 5.4]] cm.",
        },
        {
          "question": "Qual é a fórmula da projeção q?",
          "answer": "A fórmula é [[q = b^2 / c]], em que b é o cateto b e c é a hipotenusa completa. Eleve o cateto b ao quadrado primeiro e depois divida por c. Com [[b = 12]] cm e [[c = 15]] cm, [[q = 144 / 15 = 9.6]] cm.",
        },
        {
          "question": "Como calcular o cateto a a partir da projeção p?",
          "answer": "Use [[a = \\sqrt{c \\times p}]]. Multiplique a hipotenusa c pela projeção p e depois tire a raiz quadrada. Com [[c = 25]] cm e [[p = 9]] cm, [[a = \\sqrt{225} = 15]] cm. A raiz quadrada é necessária porque cp é igual a a ao quadrado, e não a a.",
        },
        {
          "question": "Como calcular o cateto b a partir da projeção q?",
          "answer": "Use [[b = \\sqrt{c \\times q}]]. Multiplique a hipotenusa c pela projeção q e depois tire a raiz quadrada. Com [[c = 25]] cm e [[q = 16]] cm, [[b = \\sqrt{400} = 20]] cm. A raiz quadrada transforma o comprimento ao quadrado de volta em um comprimento de lado.",
        },
        {
          "question": "Como encontrar a hipotenusa a partir de duas projeções?",
          "answer": "Some as duas projeções: [[c = p + q]]. A altura divide a hipotenusa exatamente nesses dois segmentos, então a soma deles reconstrói o lado inteiro. Com [[p = 9]] cm e [[q = 16]] cm, [[c = 25]] cm.",
        },
        {
          "question": "Por que usamos uma raiz quadrada no teorema da projeção?",
          "answer": "Porque o teorema fornece o quadrado de um cateto, e não o cateto em si. A afirmação [[a^2 = c \\times p]] descreve um comprimento ao quadrado. Tirar a raiz quadrada desfaz a elevação ao quadrado e devolve um comprimento comum. Pular esse passo apresenta um valor ao quadrado como se fosse um lado.",
        },
        {
          "question": "As projeções podem determinar a altura?",
          "answer": "Sim. A altura é a média geométrica das duas projeções: [[h = \\sqrt{p \\times q}]]. Com [[p = 9]] cm e [[q = 16]] cm, [[h = \\sqrt{144} = 12]] cm. Esta página não tem modo de altura, então use a calculadora dedicada de altura a partir das projeções para esse passo.",
        },
        {
          "question": "Como as projeções se relacionam com o teorema de Pitágoras?",
          "answer": "Somar as duas fórmulas de projeção dá [[a^2 + b^2 = c \\times p + c \\times q = c(p + q)]]. Como [[p + q = c]], isso se torna [[a^2 + b^2 = c^2]]. O teorema da projeção divide a relação pitagórica em uma parte por cateto.",
        },
        {
          "question": "Qual modo da calculadora devo escolher?",
          "answer": "Combine o modo com os valores que você conhece. Use o segmento p quando souber a e c, o segmento q quando souber b e c, o cateto a quando souber c e p, o cateto b quando souber c e q, e a soma das projeções para c quando souber p e q.",
        },
        {
          "question": "As projeções são iguais aos catetos de um triângulo retângulo?",
          "answer": "Não. Os catetos são os dois lados que formam o ângulo reto, enquanto as projeções são segmentos ao longo da hipotenusa. Na maioria dos casos, uma projeção é mais curta que o seu cateto, e ela fica sobre a hipotenusa, e não ao longo do lado do triângulo.",
        },
      ],
      "relatedHeading": "Explore Calculadoras Relacionadas de Triângulo Retângulo",
      "relatedIntro": "Escolha a próxima ferramenta pela medida de que você precisa, pois cada calculadora abaixo trata de uma tarefa específica de projeção.",
      "relatedItems": [
        "Calculadora de Projeção P do Triângulo Retângulo",
        "Calculadora de Projeção Q do Triângulo Retângulo",
        "Calculadora de Cateto A a Partir da Projeção do Triângulo Retângulo",
        "Calculadora de Cateto B a Partir da Projeção do Triângulo Retângulo",
        "Calculadora de Hipotenusa a Partir das Projeções do Triângulo Retângulo",
        "Calculadora de Altura a Partir das Projeções do Triângulo Retângulo",
        "Calculadora de Altura do Triângulo Retângulo",
      ],
      "sections": {
        "sec-intro": {
          "blocks": [
            {
              "kind": "p",
              "text": "Uma projeção em um triângulo retângulo é a sombra que um cateto projeta sobre a hipotenusa. Trace a altura a partir do vértice do ângulo reto até a hipotenusa, e ela divide esse lado em dois segmentos, chamados p e q. O segmento p pertence ao cateto a, e o segmento q pertence ao cateto b.",
            },
            {
              "kind": "p",
              "text": "Esta Calculadora de Projeção do Triângulo Retângulo trabalha com as cinco relações de projeção. Ela encontra a projeção p a partir do cateto a, a projeção q a partir do cateto b, o cateto a a partir da projeção p, o cateto b a partir da projeção q, e a hipotenusa completa a partir de p e q. Cada tarefa é um modo separado, então você escolhe o que corresponde às medidas que já conhece.",
            },
            {
              "kind": "p",
              "text": "As mesmas duas projeções também podem reconstruir o triângulo inteiro. Por exemplo, se [[p = 9]] cm e [[q = 16]] cm, então [[c = 9 + 16 = 25]] cm, e a altura é [[h = \\sqrt{9 \\times 16} = 12]] cm. Este guia explica cada modo, mostra as fórmulas, apresenta exemplos resolvidos e ensina como conferir cada resposta.",
            },
          ],
          "h2": "Calculadora de Projeção do Triângulo Retângulo",
        },
        "sec-calculate": {
          "blocks": [
            {
              "kind": "p",
              "text": "A calculadora desta página oferece cinco modos, um para cada relação de projeção. Cada modo pede duas medidas conhecidas e devolve um valor desconhecido. Você nunca precisa resolver o triângulo inteiro primeiro: escolha o modo que corresponde aos seus números, digite-os e leia o resultado.",
            },
            {
              "kind": "p",
              "text": "A tabela abaixo é a maneira mais rápida de escolher. Encontre a linha cujas medidas conhecidas correspondem às suas, e essa linha indica o modo a usar. As seções seguintes explicam cada modo em detalhes, com um exemplo resolvido para cada um.",
            },
          ],
          "h2": "Calcular Projeções e Segmentos da Hipotenusa do Triângulo Retângulo",
          "table": {
            "headers": [
              "Modo da Calculadora",
              "Medidas Conhecidas",
              "Resultado",
            ],
            "rows": [
              [
                "Segmento da Hipotenusa p",
                "Cateto a e hipotenusa c",
                "Projeção p",
              ],
              [
                "Segmento da Hipotenusa q",
                "Cateto b e hipotenusa c",
                "Projeção q",
              ],
              [
                "Cateto a a Partir da Projeção ao Quadrado",
                "Hipotenusa c e projeção p",
                "Cateto a",
              ],
              [
                "Cateto b a Partir da Projeção ao Quadrado",
                "Hipotenusa c e projeção q",
                "Cateto b",
              ],
              [
                "Soma das Projeções para c",
                "Projeção p e projeção q",
                "Hipotenusa c",
              ],
            ],
          },
        },
        "sec-what-projections": {
          "blocks": [
            {
              "kind": "p",
              "text": "Considere o triângulo retângulo ABC, com o ângulo reto em C. Os dois lados que formam o ângulo reto são os catetos, AC e BC. O lado oposto ao ângulo reto é a hipotenusa, AB. Agora trace a altura de C em linha reta até a hipotenusa, encontrando-a em um ponto chamado D. Essa altura é perpendicular à hipotenusa, então ela encontra AB em um ângulo reto.",
            },
            {
              "kind": "p",
              "text": "O ponto D divide a hipotenusa em dois segmentos adjacentes. O segmento junto ao vértice A, chamado AD, é a projeção p. O segmento junto ao vértice B, chamado DB, é a projeção q. Juntos, eles formam toda a hipotenusa:",
            },
            {
              "kind": "p",
              "text": "[[[p + q = c]]]",
            },
            {
              "kind": "p",
              "text": "Cada projeção pertence ao cateto que toca o seu vértice. O cateto a toca o vértice A, então a sua projeção é p. O cateto b toca o vértice B, então a sua projeção é q. Essa associação nunca muda: a vai com p, e b vai com q.",
            },
            {
              "kind": "p",
              "text": "As projeções ficam sobre a hipotenusa. Elas não são lados do triângulo e não são perpendiculares a nada. Imagine cada uma como a sombra que o seu cateto projeta sobre a hipotenusa quando a altura desce em linha reta até ela.",
            },
          ],
          "h2": "O Que São Projeções em um Triângulo Retângulo?",
        },
        "sec-sides-segments": {
          "blocks": [
            {
              "kind": "p",
              "text": "Um triângulo tem seis partes nomeadas, e cada uma tem uma posição fixa. A tabela abaixo lista cada parte com o seu símbolo, o seu significado e onde ela fica. Aprenda esta tabela uma vez, e todas as fórmulas deste guia ficarão claras.",
            },
            {
              "kind": "p",
              "text": "Identificar o segmento correto é importante porque cada modo da calculadora espera entradas específicas. Digitar uma projeção onde deveria estar um cateto, ou digitar p onde deveria estar q, ainda produz um número, mas responde a uma pergunta diferente da que você fez. Rotule o diagrama primeiro e depois associe os rótulos ao modo.",
            },
          ],
          "h2": "Entendendo os Lados e Segmentos de um Triângulo Retângulo",
          "table": {
            "headers": [
              "Símbolo",
              "Nome",
              "Posição",
            ],
            "rows": [
              [
                "a",
                "Cateto a (lado AC)",
                "Lado perpendicular que toca o vértice A",
              ],
              [
                "b",
                "Cateto b (lado BC)",
                "Lado perpendicular que toca o vértice B",
              ],
              [
                "c",
                "Hipotenusa (lado AB)",
                "Lado mais longo, oposto ao ângulo reto",
              ],
              [
                "p",
                "Projeção p (segmento AD)",
                "Parte da hipotenusa junto ao vértice A",
              ],
              [
                "q",
                "Projeção q (segmento DB)",
                "Parte da hipotenusa junto ao vértice B",
              ],
              [
                "h",
                "Altura (segmento CD)",
                "Perpendicular de C até a hipotenusa",
              ],
            ],
          },
        },
        "sec-formulas": {
          "blocks": [
            {
              "kind": "p",
              "text": "Cinco fórmulas cobrem todos os modos desta página. As duas primeiras encontram projeções a partir dos catetos. As duas seguintes recuperam catetos a partir das projeções. A última reconstrói a hipotenusa a partir das suas duas partes.",
            },
            {
              "kind": "p",
              "text": "Projeção p, a partir do cateto a e da hipotenusa:",
            },
            {
              "kind": "p",
              "text": "[[[p = \\frac{a^2}{c}]]]",
            },
            {
              "kind": "p",
              "text": "Projeção q, a partir do cateto b e da hipotenusa:",
            },
            {
              "kind": "p",
              "text": "[[[q = \\frac{b^2}{c}]]]",
            },
            {
              "kind": "p",
              "text": "Cateto a, a partir da hipotenusa e da projeção p:",
            },
            {
              "kind": "p",
              "text": "[[[a = \\sqrt{c \\times p}]]]",
            },
            {
              "kind": "p",
              "text": "Cateto b, a partir da hipotenusa e da projeção q:",
            },
            {
              "kind": "p",
              "text": "[[[b = \\sqrt{c \\times q}]]]",
            },
            {
              "kind": "p",
              "text": "Hipotenusa, a partir das duas projeções:",
            },
            {
              "kind": "p",
              "text": "[[[c = p + q]]]",
            },
            {
              "kind": "p",
              "text": "Encontrar uma projeção significa elevar um cateto ao quadrado e dividir pela hipotenusa. Encontrar um cateto significa multiplicar a hipotenusa por uma projeção e tirar a raiz quadrada. Encontrar a hipotenusa significa somar dois segmentos. A raiz quadrada aparece apenas ao recuperar um cateto, porque somente as fórmulas dos catetos partem de um comprimento ao quadrado. Todas as medidas devem usar a mesma unidade, então converta antes de calcular.",
            },
          ],
          "h2": "Fórmulas de Projeção do Triângulo Retângulo Explicadas",
        },
        "sec-choose-mode": {
          "blocks": [
            {
              "kind": "p",
              "text": "Escolher o modo é um exercício de associação: encontre o modo que pede as duas medidas que você conhece, e a calculadora devolve a que falta.",
            },
            {
              "kind": "h3",
              "text": "Modo 1: Segmento da Hipotenusa p",
            },
            {
              "kind": "p",
              "text": "Escolha este modo quando souber o cateto a e a hipotenusa c. A fórmula é [[p = a^2 / c]]. Eleve o cateto a ao quadrado e depois divida por c. Use-o quando um problema fornecer um cateto e toda a hipotenusa e perguntar quanto da hipotenusa pertence a esse cateto.",
            },
            {
              "kind": "h3",
              "text": "Modo 2: Segmento da Hipotenusa q",
            },
            {
              "kind": "p",
              "text": "Escolha este modo quando souber o cateto b e a hipotenusa c. A fórmula é [[q = b^2 / c]]. É a imagem espelhada do modo 1, com o cateto b no lugar do cateto a. Use-o quando o cateto conhecido for o que toca o vértice B.",
            },
            {
              "kind": "h3",
              "text": "Modo 3: Cateto a a Partir da Projeção ao Quadrado",
            },
            {
              "kind": "p",
              "text": "Escolha este modo quando souber a hipotenusa c e a projeção p. A fórmula é [[a = \\sqrt{c \\times p}]]. Multiplique primeiro e depois tire a raiz quadrada. Use-o quando um problema fornecer a hipotenusa e o segmento junto a A e perguntar pelo cateto.",
            },
            {
              "kind": "h3",
              "text": "Modo 4: Cateto b a Partir da Projeção ao Quadrado",
            },
            {
              "kind": "p",
              "text": "Escolha este modo quando souber a hipotenusa c e a projeção q. A fórmula é [[b = \\sqrt{c \\times q}]]. É a imagem espelhada do modo 3, com q no lugar de p. Use-o quando o segmento conhecido for o junto a B.",
            },
            {
              "kind": "h3",
              "text": "Modo 5: Soma das Projeções para c",
            },
            {
              "kind": "p",
              "text": "Escolha este modo quando souber as duas projeções, p e q. A fórmula é [[c = p + q]], uma soma simples, sem elevar ao quadrado e sem raiz quadrada.",
            },
            {
              "kind": "p",
              "text": "Guia rápido de decisão: um cateto com c dá uma projeção, c com uma projeção dá um cateto, e as duas projeções juntas dão c. Se os seus valores conhecidos não corresponderem a nenhum desses pares, você precisa de outra medida primeiro.",
            },
          ],
          "h2": "Como Escolher o Modo Correto da Calculadora",
          "image": {
            "alt": "Cinco modos da calculadora com seus valores conhecidos e resultados: segmento p a partir de a e c, segmento q a partir de b e c, cateto a a partir de c e p, cateto b a partir de c e q, e hipotenusa c a partir de p e q",
            "caption": "Cinco modos, um por par conhecido: um cateto com c dá uma projeção, c com uma projeção dá um cateto, e p com q dá c.",
            "src": "projection-five-modes.svg",
          },
        },
        "sec-projection-p": {
          "blocks": [
            {
              "kind": "p",
              "text": "A projeção p é a parte da hipotenusa que pertence ao cateto a. A fórmula divide o quadrado do cateto a pela hipotenusa completa:",
            },
            {
              "kind": "p",
              "text": "[[[p = \\frac{a^2}{c}]]]",
            },
            {
              "kind": "p",
              "text": "Use [[a = 9]] cm e [[c = 15]] cm. O passo 1 escreve a fórmula, [[p = a^2 / c]]. O passo 2 substitui os valores, [[p = 9^2 / 15 = 81 / 15]]. O passo 3 divide, dando [[p = 5.4]] cm. A resposta é um comprimento ao longo da hipotenusa, medido na mesma unidade que a e c.",
            },
            {
              "kind": "p",
              "text": "Uma verificação rápida confirma o resultado. O outro cateto deste triângulo mede 12 cm, então a sua projeção é [[q = 12^2 / 15 = 144 / 15 = 9.6]] cm. Somar as duas projeções dá [[5.4 + 9.6 = 15]] cm, que é exatamente c. Se as suas duas projeções não somarem c, uma das entradas estava errada. A <a href=\"/right-triangle-projection-p-calculator/\">calculadora de projeção p</a> faz esse cálculo sozinha quando você precisar dela com frequência.",
            },
          ],
          "h2": "Como Calcular a Projeção P a Partir do Cateto A e da Hipotenusa",
          "image": {
            "alt": "Triângulo retângulo mostrando o cateto a ao quadrado dividido pela hipotenusa c dá a projeção p, com a igual a 9 cm e c igual a 15 cm, resultando em p igual a 5,4 cm",
            "caption": "Projeção p a partir do cateto a: p é igual a a ao quadrado sobre c, então 81 sobre 15 dá 5,4 cm.",
            "src": "projection-p-leg-a.svg",
          },
        },
        "sec-projection-q": {
          "blocks": [
            {
              "kind": "p",
              "text": "A projeção q é a parte da hipotenusa que pertence ao cateto b. A fórmula divide o quadrado do cateto b pela hipotenusa completa:",
            },
            {
              "kind": "p",
              "text": "[[[q = \\frac{b^2}{c}]]]",
            },
            {
              "kind": "p",
              "text": "Use [[b = 12]] cm e [[c = 15]] cm. O passo 1 escreve a fórmula, [[q = b^2 / c]]. O passo 2 substitui os valores, [[q = 12^2 / 15 = 144 / 15]]. O passo 3 divide, dando [[q = 9.6]] cm. A resposta é o segmento junto ao vértice B, no lado oposto do pé da altura em relação a p.",
            },
            {
              "kind": "p",
              "text": "Compare as duas projeções antes de continuar. Aqui p é 5,4 cm e q é 9,6 cm, então q é maior, o que corresponde ao cateto b ser mais longo que o cateto a. O cateto mais longo sempre projeta a projeção mais longa. Se o seu cateto mais longo produziu a projeção mais curta, você trocou p e q. A <a href=\"/right-triangle-projection-q-calculator/\">calculadora de projeção q</a> faz esse cálculo sozinha quando você precisar dela com frequência.",
            },
          ],
          "h2": "Como Calcular a Projeção Q a Partir do Cateto B e da Hipotenusa",
          "image": {
            "alt": "Triângulo retângulo mostrando o cateto b ao quadrado dividido pela hipotenusa c dá a projeção q, com b igual a 12 cm e c igual a 15 cm, resultando em q igual a 9,6 cm",
            "caption": "Projeção q a partir do cateto b: q é igual a b ao quadrado sobre c, então 144 sobre 15 dá 9,6 cm.",
            "src": "projection-q-leg-b.svg",
          },
        },
        "sec-leg-a": {
          "blocks": [
            {
              "kind": "p",
              "text": "Para recuperar o cateto a, multiplique a hipotenusa pela projeção p e tire a raiz quadrada:",
            },
            {
              "kind": "p",
              "text": "[[[a = \\sqrt{c \\times p}]]]",
            },
            {
              "kind": "p",
              "text": "Use [[c = 25]] cm e [[p = 9]] cm. O produto é [[25 \\times 9 = 225]], e a raiz quadrada de 225 é 15, então [[a = 15]] cm. O produto 225 é um comprimento ao quadrado, e não um lado, e é por isso que a raiz quadrada não pode ser pulada. Apresentar 225 como o cateto afirmaria um lado nove vezes mais longo que a hipotenusa.",
            },
            {
              "kind": "p",
              "text": "O passo da raiz quadrada é o ponto central deste modo. O teorema da projeção diz que [[a^2 = c \\times p]], então o produto dá o quadrado do cateto. Desfazer um quadrado exige uma raiz quadrada, assim como desfazer uma duplicação exige dividir pela metade. A <a href=\"/right-triangle-leg-a-from-projection-calculator/\">calculadora de cateto a a partir da projeção</a> cobre esse cálculo por completo quando você precisar dele sozinho.",
            },
          ],
          "h2": "Como Encontrar o Cateto A a Partir da Projeção P",
        },
        "sec-leg-b": {
          "blocks": [
            {
              "kind": "p",
              "text": "Para recuperar o cateto b, multiplique a hipotenusa pela projeção q e tire a raiz quadrada:",
            },
            {
              "kind": "p",
              "text": "[[[b = \\sqrt{c \\times q}]]]",
            },
            {
              "kind": "p",
              "text": "Use [[c = 25]] cm e [[q = 16]] cm. O produto é [[25 \\times 16 = 400]], e a raiz quadrada de 400 é 20, então [[b = 20]] cm. O método é a imagem espelhada do cálculo do cateto a, com q no lugar de p. A associação é fixada pelos rótulos do triângulo, então digitar p aqui devolveria o cateto a.",
            },
            {
              "kind": "p",
              "text": "Confira a resposta em relação ao tamanho do triângulo. O cateto b deve ser mais curto que a hipotenusa, e 20 cm é mais curto que 25 cm, então o resultado passa na primeira verificação de bom senso. Elevá-lo ao quadrado dá [[20^2 = 400]], que corresponde a [[c \\times q = 25 \\times 16 = 400]], então o teorema se confirma exatamente. A <a href=\"/right-triangle-leg-b-from-projection-calculator/\">calculadora de cateto b a partir da projeção</a> cobre esse cálculo por completo quando você precisar dele sozinho.",
            },
          ],
          "h2": "Como Encontrar o Cateto B a Partir da Projeção Q",
        },
        "sec-hypotenuse": {
          "blocks": [
            {
              "kind": "p",
              "text": "As duas projeções são as duas partes de um único lado reto, então a hipotenusa é a soma delas:",
            },
            {
              "kind": "p",
              "text": "[[[c = p + q]]]",
            },
            {
              "kind": "p",
              "text": "Use [[p = 9]] cm e [[q = 16]] cm. Somar dá [[c = 9 + 16 = 25]] cm. Este é o princípio da adição de segmentos: quando um ponto divide um segmento em duas partes, o segmento inteiro é igual à soma das suas partes. O pé da altura D divide a hipotenusa AB em AD e DB, então AB é igual a AD mais DB.",
            },
            {
              "kind": "p",
              "text": "Este modo também é a verificação mais rápida dos outros quatro modos. Sempre que você calcular p e q separadamente, some-os e compare com c. No triângulo 9-12-15, [[p = 5.4]] cm e [[q = 9.6]] cm somam 15 cm, confirmando as duas projeções de uma vez. A <a href=\"/right-triangle-hypotenuse-from-projections-calculator/\">calculadora de hipotenusa a partir das projeções</a> cobre esse cálculo por completo quando você precisar dele sozinho.",
            },
          ],
          "h2": "Como Calcular a Hipotenusa Completa a Partir das Projeções",
        },
        "sec-how-to-use": {
          "blocks": [
            {
              "kind": "p",
              "text": "Dez passos curtos levam você de um diagrama rotulado a uma resposta conferida. Os passos são os mesmos para todos os modos; só mudam o modo escolhido e os números digitados.",
            },
            {
              "kind": "steps",
              "steps": [
                "Identifique quais medidas são conhecidas.",
                "Abra o seletor de modo da calculadora.",
                "Escolha o modo de cálculo correspondente.",
                "Digite a primeira medida necessária.",
                "Digite a segunda medida necessária.",
                "Selecione unidades de medida compatíveis.",
                "Clique no botão Calcular correspondente.",
                "Leia o resultado exibido.",
                "Confira a resposta usando outra relação geométrica quando apropriado.",
                "Use Redefinir antes de iniciar outro cálculo.",
              ],
            },
            {
              "kind": "p",
              "text": "O passo 1 faz a maior parte do trabalho. Rotule o triângulo, marque p e q na hipotenusa e anote a qual cateto cada projeção pertence. Com os rótulos definidos, a escolha do modo segue a tabela no início deste guia, e a calculadora cuida da aritmética. Não descreva nem espere recursos que a página não tem: ela não calcula a altura, os ângulos nem a área automaticamente.",
            },
          ],
          "h2": "Como Usar a Calculadora de Projeção do Triângulo Retângulo",
        },
        "sec-diagram": {
          "blocks": [
            {
              "kind": "p",
              "text": "O diagrama principal mostra o triângulo ABC com o ângulo reto em C. O lado AC é o cateto a, o lado BC é o cateto b, e o lado AB é a hipotenusa c. A altura CD desce de C perpendicular a AB e a toca em D. Dois quadradinhos marcam os ângulos retos: um em C, entre os catetos, e um em D, entre a altura e a hipotenusa.",
            },
            {
              "kind": "p",
              "text": "O ponto D divide a hipotenusa no segmento AD, que é a projeção p, e no segmento DB, que é a projeção q. A altura CD é rotulada como h. Percorra o diagrama nesta ordem para fixar os rótulos: comece em A, siga pelo cateto a até C, depois pelo cateto b até B, e volte pela hipotenusa de B até A, parando em D para ver a divisão em q e p.",
            },
            {
              "kind": "p",
              "text": "A altura cria dois triângulos retângulos menores, ACD e CBD, dentro do original. No triângulo ACD, a hipotenusa é o cateto a e um cateto é a projeção p. No triângulo CBD, a hipotenusa é o cateto b e um cateto é a projeção q.",
            },
          ],
          "h2": "Entendendo o Diagrama de Projeção do Triângulo Retângulo",
          "image": {
            "alt": "Triângulo retângulo ABC com ângulo reto em C, altura CD até a hipotenusa AB, catetos a e b, hipotenusa c, projeções p e q, e altura h rotulados",
            "caption": "Triângulo principal ABC: a altura CD divide a hipotenusa AB na projeção p (AD) e na projeção q (DB).",
            "src": "projection-main-triangle.svg",
          },
        },
        "sec-proof": {
          "blocks": [
            {
              "kind": "p",
              "text": "A demonstração se apoia em triângulos semelhantes. Traçar a altura CD divide o triângulo ABC em dois triângulos retângulos menores, ACD e CBD, e ambos são semelhantes ao triângulo original. Semelhança significa que os seus lados correspondentes mantêm a mesma proporção, e uma dessas proporções fornece o teorema da projeção diretamente.",
            },
            {
              "kind": "p",
              "text": "Comece com o cateto a. O triângulo ACD compartilha o ângulo em A com o triângulo ABC, e ambos contêm um ângulo reto, então os terceiros ângulos também devem coincidir. Associar os lados que ocupam as mesmas posições dá a proporção:",
            },
            {
              "kind": "p",
              "text": "[[[\\frac{AD}{AC} = \\frac{AC}{AB}]]]",
            },
            {
              "kind": "p",
              "text": "Agora substitua pelos símbolos padrão: [[AD = p]], [[AC = a]] e [[AB = c]]. A proporção se torna:",
            },
            {
              "kind": "p",
              "text": "[[[\\frac{p}{a} = \\frac{a}{c}]]]",
            },
            {
              "kind": "p",
              "text": "A multiplicação cruzada elimina as frações: [[p \\times c = a \\times a]], que é [[a^2 = c \\times p]]. O mesmo argumento aplicado ao outro triângulo pequeno, CBD, dá [[b^2 = c \\times q]], pois o triângulo CBD compartilha o ângulo em B com o triângulo inteiro. A semelhança faz todo o trabalho: os lados correspondentes de triângulos semelhantes permanecem proporcionais, e o teorema da projeção é o que essa proporção se torna após a multiplicação cruzada.",
            },
          ],
          "h2": "Por Que os Teoremas da Projeção Funcionam?",
          "image": {
            "alt": "Triângulo retângulo original ABC ao lado dos triângulos semelhantes menores ACD e CBD, mostrando as proporções p sobre a igual a a sobre c e q sobre b igual a b sobre c",
            "caption": "Demonstração por triângulos semelhantes: p sobre a é igual a a sobre c, e q sobre b é igual a b sobre c.",
            "src": "projection-similar-triangles.svg",
          },
        },
        "sec-examples": {
          "blocks": [
            {
              "kind": "p",
              "text": "Cada exemplo apresenta os valores dados, o modo, a substituição e a resposta final. Dois exemplos cobrem cada um dos cinco modos, para que você veja cada modo duas vezes com números diferentes.",
            },
            {
              "kind": "h3",
              "text": "Exemplo 1: Encontrar a Projeção P",
            },
            {
              "kind": "p",
              "text": "Dados [[a = 9]] cm e [[c = 15]] cm, use o modo 1, Segmento da Hipotenusa p. A fórmula dá [[p = 9^2 / 15 = 81 / 15 = 5.4]] cm. ",
            },
            {
              "kind": "h3",
              "text": "Exemplo 2: Encontrar a Projeção P",
            },
            {
              "kind": "p",
              "text": "Dados [[a = 12]] m e [[c = 20]] m, use o modo 1. A fórmula dá [[p = 12^2 / 20 = 144 / 20 = 7.2]] m. A outra projeção é 12,8 m, e [[7.2 + 12.8 = 20]] m confirma o resultado.",
            },
            {
              "kind": "h3",
              "text": "Exemplo 3: Encontrar a Projeção Q",
            },
            {
              "kind": "p",
              "text": "Dados [[b = 12]] cm e [[c = 15]] cm, use o modo 2, Segmento da Hipotenusa q. A fórmula dá [[q = 12^2 / 15 = 144 / 15 = 9.6]] cm. Este é o mesmo triângulo do Exemplo 1, visto a partir do outro cateto.",
            },
            {
              "kind": "h3",
              "text": "Exemplo 4: Encontrar a Projeção Q",
            },
            {
              "kind": "p",
              "text": "Dados [[b = 8]] m e [[c = 10]] m, use o modo 2. A fórmula dá [[q = 8^2 / 10 = 64 / 10 = 6.4]] m. A outra projeção é 3,6 m, e este é o conhecido triângulo 6-8-10.",
            },
            {
              "kind": "h3",
              "text": "Exemplo 5: Encontrar o Cateto A",
            },
            {
              "kind": "p",
              "text": "Dados [[c = 25]] cm e [[p = 9]] cm, use o modo 3, Cateto a a Partir da Projeção ao Quadrado. A fórmula dá [[a = \\sqrt{25 \\times 9} = \\sqrt{225} = 15]] cm. O produto é um quadrado perfeito, então a resposta é exata, sem necessidade de arredondamento.",
            },
            {
              "kind": "h3",
              "text": "Exemplo 6: Encontrar o Cateto A",
            },
            {
              "kind": "p",
              "text": "Dados [[c = 10]] cm e [[p = 4]] cm, use o modo 3. A fórmula dá [[a = \\sqrt{10 \\times 4} = \\sqrt{40} \\approx 6.325]] cm. O produto 40 não é um quadrado perfeito, então a resposta é uma aproximação arredondada para três casas decimais.",
            },
            {
              "kind": "h3",
              "text": "Exemplo 7: Encontrar o Cateto B",
            },
            {
              "kind": "p",
              "text": "Dados [[c = 25]] cm e [[q = 16]] cm, use o modo 4, Cateto b a Partir da Projeção ao Quadrado. A fórmula dá [[b = \\sqrt{25 \\times 16} = \\sqrt{400} = 20]] cm. Este é o mesmo triângulo do Exemplo 5, visto a partir da outra projeção, e os dois catetos 15 e 20 completam o triângulo 15-20-25.",
            },
            {
              "kind": "h3",
              "text": "Exemplo 8: Encontrar o Cateto B",
            },
            {
              "kind": "p",
              "text": "Dados [[c = 10]] cm e [[q = 6]] cm, use o modo 4. A fórmula dá [[b = \\sqrt{10 \\times 6} = \\sqrt{60} \\approx 7.746]] cm. O cateto a correspondente é cerca de 6,325 cm, do Exemplo 6.",
            },
            {
              "kind": "h3",
              "text": "Exemplo 9: Encontrar a Hipotenusa",
            },
            {
              "kind": "p",
              "text": "Dados [[p = 9]] cm e [[q = 16]] cm, use o modo 5, Soma das Projeções para c. A fórmula dá [[c = 9 + 16 = 25]] cm. Não são necessários quadrados nem raiz quadrada, pois os dois segmentos simplesmente se juntam no lado inteiro.",
            },
            {
              "kind": "h3",
              "text": "Exemplo 10: Encontrar a Hipotenusa",
            },
            {
              "kind": "p",
              "text": "Dados [[p = 3.5]] m e [[q = 6.5]] m, use o modo 5. A fórmula dá [[c = 3.5 + 6.5 = 10]] m. Projeções decimais somam da mesma forma que números inteiros, então alinhe as vírgulas decimais e some.",
            },
          ],
          "h2": "Exemplos Resolvidos Usando os Cinco Modos da Calculadora",
        },
        "sec-all-measurements": {
          "blocks": [
            {
              "kind": "p",
              "text": "Conhecer as duas projeções basta para reconstruir o triângulo inteiro. Use [[p = 9]] cm e [[q = 16]] cm. Primeiro, a hipotenusa é [[c = 9 + 16 = 25]] cm. Depois, o cateto a é [[a = \\sqrt{25 \\times 9} = 15]] cm, e o cateto b é [[b = \\sqrt{25 \\times 16} = 20]] cm. A altura é [[h = \\sqrt{9 \\times 16} = \\sqrt{144} = 12]] cm.",
            },
            {
              "kind": "p",
              "text": "Um par de números produz quatro comprimentos: c, a, b e h. Esse é o poder das relações de projeção: dois segmentos na hipotenusa carregam a forma completa do triângulo. Uma verificação final fecha o ciclo: [[15^2 + 20^2 = 225 + 400 = 625 = 25^2]], então o teorema de Pitágoras confirma o triângulo inteiro de uma vez.",
            },
            {
              "kind": "p",
              "text": "Lembre-se de que estas são relações matemáticas, e não modos separados da calculadora. Esta página calcula um valor por modo. Reconstruir o triângulo inteiro significa executar um modo e depois usar o seu resultado no próximo, ou fazer os passos à mão como mostrado acima.",
            },
          ],
          "h2": "Como Calcular Todas as Principais Medidas de um Triângulo Retângulo",
          "image": {
            "alt": "Triângulo retângulo com projeções p igual a 9 e q igual a 16, hipotenusa 25, catetos 15 e 20, e altura 12, mostrando as seis medidas em um único diagrama",
            "caption": "Um par de projeções reconstrói o triângulo: c = 25, a = 15, b = 20, h = 12.",
            "src": "projection-numerical-example.svg",
          },
        },
        "sec-pythagoras": {
          "blocks": [
            {
              "kind": "p",
              "text": "O teorema da projeção e o teorema de Pitágoras concordam exatamente, e a álgebra mostra por quê. Comece com as duas fórmulas de projeção:",
            },
            {
              "kind": "p",
              "text": "[[[a^2 = c \\times p]]]",
            },
            {
              "kind": "p",
              "text": "Some a fórmula correspondente do cateto b, [[b^2 = c \\times q]], para obter:",
            },
            {
              "kind": "p",
              "text": "[[[a^2 + b^2 = c \\times p + c \\times q]]]",
            },
            {
              "kind": "p",
              "text": "Colocar c em evidência no lado direito dá [[a^2 + b^2 = c(p + q)]]. Como [[p + q = c]], a substituição produz o resultado conhecido:",
            },
            {
              "kind": "p",
              "text": "[[[a^2 + b^2 = c^2]]]",
            },
            {
              "kind": "p",
              "text": "Uma verificação numérica com o triângulo 9-16-25 confirma: [[a^2 + b^2 = 225 + 400 = 625]] e [[c^2 = 25^2 = 625]]. Os dois teoremas não são rivais. O teorema da projeção divide a relação pitagórica em uma parte por cateto, e somar as partes a reconstrói. É por isso que cada resultado desta página pode ser conferido com o teorema de Pitágoras.",
            },
          ],
          "h2": "Relação Entre as Projeções e o Teorema de Pitágoras",
        },
        "sec-altitude": {
          "blocks": [
            {
              "kind": "p",
              "text": "A altura é a média geométrica das duas projeções:",
            },
            {
              "kind": "p",
              "text": "[[[h = \\sqrt{p \\times q}]]]",
            },
            {
              "kind": "p",
              "text": "Use [[p = 9]] cm e [[q = 16]] cm. O produto é [[9 \\times 16 = 144]], e a raiz quadrada de 144 é 12, então [[h = 12]] cm. A altura é o segmento perpendicular do ângulo reto até a hipotenusa, e o seu comprimento fica determinado quando p e q são conhecidos. Esta é a mesma ideia de média geométrica que liga os catetos às projeções, aplicada à altura.",
            },
            {
              "kind": "p",
              "text": "Observe que esta página não tem um modo dedicado à altura. A calculadora devolve projeções, catetos e a hipotenusa, mas não h. Para uma página que resolve a altura diretamente, use a <a href=\"/right-triangle-altitude-from-projections-calculator/\">calculadora de altura a partir das projeções</a>, que recebe p e q e devolve h. A <a href=\"/right-triangle-altitude-calculator/\">calculadora de altura</a> cobre outras maneiras de encontrar h, a partir dos catetos ou da área.",
            },
          ],
          "h2": "Relação Entre as Projeções e a Altura",
        },
        "sec-verify": {
          "blocks": [
            {
              "kind": "p",
              "text": "Quatro verificações independentes detectam quase todos os erros. Faça pelo menos uma delas em cada resposta, e faça as quatro quando o problema for importante. Cada verificação usa uma relação diferente, então um erro que passa por uma geralmente é detectado por outra.",
            },
            {
              "kind": "h3",
              "text": "Verificação 1: Soma das Projeções",
            },
            {
              "kind": "p",
              "text": "Confirme que [[p + q = c]]. Com [[p = 9]] cm, [[q = 16]] cm e [[c = 25]] cm, [[9 + 16 = 25]], então os segmentos se encaixam. Se a soma diferir de c, uma das projeções está errada.",
            },
            {
              "kind": "h3",
              "text": "Verificação 2: Teorema da Projeção para o Cateto A",
            },
            {
              "kind": "p",
              "text": "Eleve o cateto a ao quadrado e compare com [[c \\times p]]. Com [[a = 15]] cm, [[c = 25]] cm e [[p = 9]] cm, [[a^2 = 225]] e [[c \\times p = 225]], então a resposta passa. Se os dois números diferirem, o cateto ou a projeção está errado.",
            },
            {
              "kind": "h3",
              "text": "Verificação 3: Teorema da Projeção para o Cateto B",
            },
            {
              "kind": "p",
              "text": "Eleve o cateto b ao quadrado e compare com [[c \\times q]]. Com [[b = 20]] cm, [[c = 25]] cm e [[q = 16]] cm, [[b^2 = 400]] e [[c \\times q = 400]], então a resposta passa. Use esta verificação sempre que a sua resposta for um cateto.",
            },
            {
              "kind": "h3",
              "text": "Verificação 4: Teorema de Pitágoras",
            },
            {
              "kind": "p",
              "text": "Confirme que [[a^2 + b^2 = c^2]]. Com [[a = 15]] cm, [[b = 20]] cm e [[c = 25]] cm, [[225 + 400 = 625 = 25^2]]. Esta verificação testa o triângulo inteiro de uma vez, e não apenas uma fórmula, então é a mais forte das quatro.",
            },
          ],
          "h2": "Como Verificar Seus Cálculos de Projeção",
        },
        "sec-mistakes": {
          "blocks": [
            {
              "kind": "p",
              "text": "A maioria dos erros abaixo tem origem nos rótulos, e não na aritmética, então rotule o diagrama novamente antes de recalcular quando uma resposta parecer errada.",
            },
            {
              "kind": "steps",
              "steps": [
                "Confundir a projeção p com a projeção q: p fica junto a A e pertence ao cateto a, enquanto q fica junto a B e pertence ao cateto b.",
                "Associar o cateto a a q em vez de p: o cateto a usa p, então [[a = \\sqrt{c \\times p}]]. Usar q devolve o cateto b, e não o cateto a.",
                "Associar o cateto b a p em vez de q: o cateto b usa q, então [[b = \\sqrt{c \\times q}]]. Usar p devolve o cateto a, e não o cateto b.",
                "Esquecer a raiz quadrada ao calcular um cateto: o produto cp é a ao quadrado, e não a. Com c = 25 e p = 9, o cateto é 15 cm, e não 225.",
                "Misturar unidades de medida diferentes: converta primeiro. Multiplicar metros por centímetros dá um produto sem sentido, então coloque as duas entradas em uma só unidade.",
                "Usar o modo errado da calculadora: associe o modo aos seus valores conhecidos com a tabela no início deste guia.",
                "Tratar p ou q como um cateto perpendicular: as projeções ficam sobre a hipotenusa. Elas são segmentos da hipotenusa, e não lados do triângulo.",
                "Esquecer que c = p + q: as duas projeções devem somar a hipotenusa.",
                "Usar comprimentos inválidos ou negativos: os comprimentos são positivos, então uma entrada negativa indica um erro nos dados, e projeções zero não descrevem nenhum triângulo real.",
                "Arredondar cedo demais: mantenha a precisão total até o passo final e arredonde uma só vez.",
                "Aplicar as fórmulas a um triângulo qualquer: o teorema exige um ângulo reto e a sua altura, então sem eles não há projeções p e q neste sentido.",
                "Confundir comprimentos de lados ao quadrado com comprimentos reais de lados: 225 é a ao quadrado, enquanto 15 é a. Diga a qual deles você se refere antes de escrever um número.",
              ],
            },
          ],
          "h2": "Erros Comuns ao Usar uma Calculadora de Projeção do Triângulo Retângulo",
        },
        "sec-properties": {
          "blocks": [
            {
              "kind": "p",
              "text": "Seis propriedades decorrem diretamente das fórmulas de projeção. Cada uma serve também como verificação de bom senso para uma resposta nova.",
            },
            {
              "kind": "list",
              "items": [
                "Projeções iguais produzem catetos iguais. Com [[p = q = 5]] e [[c = 10]], os dois catetos são iguais a [[\\sqrt{50} \\approx 7.071]], e o triângulo é um triângulo retângulo isósceles.",
                "Projeções desiguais produzem catetos desiguais: a projeção mais longa pertence ao cateto mais longo.",
                "Trocar p e q troca os comprimentos dos catetos correspondentes, mas não muda a hipotenusa total, pois [[p + q = c]] de qualquer forma.",
                "Multiplicar todas as medidas pelo mesmo fator positivo multiplica cada resultado por esse fator. Dobrar p e q dobra c, a, b e h.",
                "As projeções são sempre positivas e sempre menores que c em um triângulo retângulo válido e não degenerado. Uma projeção igual a c deixaria a outra projeção em zero.",
                "O cateto mais longo sempre projeta a projeção mais longa. Comparar os comprimentos dos catetos com os das projeções é uma maneira rápida de detectar um rótulo trocado.",
              ],
            },
            {
              "kind": "p",
              "text": "O diagrama abaixo mostra os dois casos com a hipotenusa mantida em 10. Projeções iguais a dividem igualmente e dão catetos iguais, enquanto projeções desiguais dão catetos de comprimentos diferentes.",
            },
          ],
          "h2": "Casos Especiais e Propriedades Importantes das Projeções",
          "image": {
            "alt": "Dois triângulos retângulos com hipotenusa 10: um com projeções p e q iguais de 5, dando catetos iguais, e um com p igual a 2 e q igual a 8, dando catetos desiguais",
            "caption": "Projeções iguais dão catetos iguais; projeções desiguais dão catetos desiguais, com a mesma hipotenusa de 10.",
            "src": "projection-equal-vs-unequal.svg",
          },
        },
        "sec-applications": {
          "blocks": [
            {
              "kind": "p",
              "text": "O uso mais direto é o dever de casa de geometria e o trabalho em sala de aula, em que os problemas de projeção testam se os alunos sabem rotular um diagrama e aplicar [[a^2 = c \\times p]] em vez de recorrer ao teorema de Pitágoras por hábito. Os exercícios de triângulos semelhantes usam a mesma configuração, pois a própria demonstração é um exercício de associação de lados correspondentes.",
            },
            {
              "kind": "p",
              "text": "O desenho técnico usa o teorema quando um triângulo retângulo precisa ser reconstruído a partir de medidas parciais: se um desenho fornece a hipotenusa e o pé da altura, o cateto que falta segue sem medir a figura novamente.",
            },
            {
              "kind": "p",
              "text": "Uma condição limita todas as aplicações: a geometria necessária do triângulo retângulo precisa existir de fato. O teorema descreve relações geométricas exatas, e não medidas aproximadas de campo, então ele nunca substitui um levantamento cuidadoso ou uma medição profissional de engenharia. Dentro do seu contexto adequado, porém, ele transforma dois comprimentos conhecidos em um terceiro com uma única multiplicação e uma raiz quadrada.",
            },
          ],
          "h2": "Aplicações Práticas das Relações de Projeção do Triângulo Retângulo",
        },
        "sec-practice": {
          "blocks": [
            {
              "kind": "p",
              "text": "Tente resolver os seis problemas no papel antes de ler as respostas. Nenhum dos valores repete os exemplos resolvidos, e o último problema combina várias ideias deste guia.",
            },
            {
              "kind": "h3",
              "text": "Problema 1: Encontrar a Projeção P",
            },
            {
              "kind": "p",
              "text": "Um triângulo retângulo tem cateto [[a = 6]] cm e hipotenusa [[c = 10]] cm. Encontre a projeção p.",
            },
            {
              "kind": "h3",
              "text": "Problema 2: Encontrar a Projeção Q",
            },
            {
              "kind": "p",
              "text": "Um triângulo retângulo tem cateto [[b = 15]] cm e hipotenusa [[c = 25]] cm. Encontre a projeção q.",
            },
            {
              "kind": "h3",
              "text": "Problema 3: Encontrar o Cateto A",
            },
            {
              "kind": "p",
              "text": "Um triângulo retângulo tem hipotenusa [[c = 17]] cm e projeção [[p = 8]] cm. Encontre o cateto a.",
            },
            {
              "kind": "h3",
              "text": "Problema 4: Encontrar o Cateto B",
            },
            {
              "kind": "p",
              "text": "Um triângulo retângulo tem hipotenusa [[c = 13]] cm e projeção [[q = 9]] cm. Encontre o cateto b.",
            },
            {
              "kind": "h3",
              "text": "Problema 5: Encontrar a Hipotenusa",
            },
            {
              "kind": "p",
              "text": "Um triângulo retângulo tem projeções [[p = 5]] cm e [[q = 20]] cm. Encontre a hipotenusa c.",
            },
            {
              "kind": "h3",
              "text": "Problema 6: Teorema da Projeção em Vários Passos",
            },
            {
              "kind": "p",
              "text": "Um triângulo retângulo tem projeções [[p = 4]] cm e [[q = 9]] cm. Encontre a hipotenusa, os dois catetos e a altura, e depois confira o resultado com o teorema de Pitágoras.",
            },
            {
              "kind": "h3",
              "text": "Respostas dos Problemas de Prática",
            },
            {
              "kind": "p",
              "text": "Resposta 1: [[p = 6^2 / 10 = 36 / 10 = 3.6]] cm.",
            },
            {
              "kind": "p",
              "text": "Resposta 2: [[q = 15^2 / 25 = 225 / 25 = 9]] cm.",
            },
            {
              "kind": "p",
              "text": "Resposta 3: [[a = \\sqrt{17 \\times 8} = \\sqrt{136} \\approx 11.662]] cm.",
            },
            {
              "kind": "p",
              "text": "Resposta 4: [[b = \\sqrt{13 \\times 9} = \\sqrt{117} \\approx 10.817]] cm.",
            },
            {
              "kind": "p",
              "text": "Resposta 5: [[c = 5 + 20 = 25]] cm.",
            },
            {
              "kind": "p",
              "text": "Resposta 6: [[c = 4 + 9 = 13]] cm, [[a = \\sqrt{13 \\times 4} = \\sqrt{52} \\approx 7.211]] cm, [[b = \\sqrt{13 \\times 9} = \\sqrt{117} \\approx 10.817]] cm, [[h = \\sqrt{4 \\times 9} = 6]] cm. Confira: [[52 + 117 = 169 = 13^2]].",
            },
          ],
          "h2": "Problemas de Prática com Respostas",
        },
      },
      "tocHeading": "Conteúdo do Guia",
      "tocItems": {
        "sec-intro": "Calculadora de Projeção do Triângulo Retângulo",
        "sec-calculate": "Calcular Projeções e Segmentos da Hipotenusa do Triângulo Retângulo",
        "sec-what-projections": "O Que São Projeções em um Triângulo Retângulo?",
        "sec-sides-segments": "Entendendo os Lados e Segmentos de um Triângulo Retângulo",
        "sec-formulas": "Fórmulas de Projeção do Triângulo Retângulo Explicadas",
        "sec-choose-mode": "Como Escolher o Modo Correto da Calculadora",
        "sec-projection-p": "Como Calcular a Projeção P a Partir do Cateto A e da Hipotenusa",
        "sec-projection-q": "Como Calcular a Projeção Q a Partir do Cateto B e da Hipotenusa",
        "sec-leg-a": "Como Encontrar o Cateto A a Partir da Projeção P",
        "sec-leg-b": "Como Encontrar o Cateto B a Partir da Projeção Q",
        "sec-hypotenuse": "Como Calcular a Hipotenusa Completa a Partir das Projeções",
        "sec-how-to-use": "Como Usar a Calculadora de Projeção do Triângulo Retângulo",
        "sec-diagram": "Entendendo o Diagrama de Projeção do Triângulo Retângulo",
        "sec-proof": "Por Que os Teoremas da Projeção Funcionam?",
        "sec-examples": "Exemplos Resolvidos Usando os Cinco Modos da Calculadora",
        "sec-all-measurements": "Como Calcular Todas as Principais Medidas de um Triângulo Retângulo",
        "sec-pythagoras": "Relação Entre as Projeções e o Teorema de Pitágoras",
        "sec-altitude": "Relação Entre as Projeções e a Altura",
        "sec-verify": "Como Verificar Seus Cálculos de Projeção",
        "sec-mistakes": "Erros Comuns ao Usar uma Calculadora de Projeção do Triângulo Retângulo",
        "sec-properties": "Casos Especiais e Propriedades Importantes das Projeções",
        "sec-applications": "Aplicações Práticas das Relações de Projeção do Triângulo Retângulo",
        "sec-practice": "Problemas de Prática com Respostas",
        "sec-related": "Explore Calculadoras Relacionadas de Triângulo Retângulo",
        "sec-faq": "Perguntas Frequentes",
      },
    },
};
