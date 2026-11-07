// fiveTwelveThirteenGuideTranslations.bpt.ts: 5-12-13 Triangle
// Guide (Page 43 of 45) translation.
export const FIVETWELVETHIRTEEN_B3_PT = {
  "pt": {
      "meta": {
        "title": "Calculadora de Triângulo 5-12-13 - Escalar Lados, Área, Perímetro",
        "description": "Escale um triângulo 5-12-13: insira um fator de escala positivo k para encontrar os lados 5k, 12k e 13k, além da área 30k ao quadrado e do perímetro 30k.",
        "primaryKeyword": "Calculadora de Triângulo 5-12-13",
        "slug": "5-12-13-triangle-calculator",
      },
      "tocHeading": "Navegação das Seções",
      "tocItems": {
        "sec-intro": "Calculadora de Triângulo 5-12-13",
        "sec-calculate": "Escale um Triângulo 5-12-13 e Calcule Suas Medidas",
        "sec-what": "O Que É um Triângulo 5-12-13?",
        "sec-pythagorean": "Por Que 5-12-13 É um Terno Pitagórico?",
        "sec-sides": "Entendendo os Três Lados de um Triângulo 5-12-13",
        "sec-ratio": "Entendendo a Razão de Lados 5-12-13",
        "sec-scale-factor": "O Que É o Fator de Escala em um Triângulo 5-12-13?",
        "sec-leg-a": "Fórmula para Calcular o Cateto Menor",
        "sec-leg-b": "Fórmula para Calcular o Cateto Maior",
        "sec-hypotenuse": "Fórmula para Calcular a Hipotenusa",
        "sec-area": "Como Calcular a Área de um Triângulo 5-12-13 Escalonado",
        "sec-perimeter": "Como Calcular o Perímetro de um Triângulo 5-12-13 Escalonado",
        "sec-find-k": "Como Encontrar o Fator de Escala a Partir de um Lado Conhecido",
        "sec-step-example": "Exemplo Passo a Passo de Escalonamento de um Triângulo 5-12-13",
        "sec-examples": "Exemplos Resolvidos com Diferentes Fatores de Escala",
        "sec-right-angle": "Por Que o Triângulo 5-12-13 Sempre Mantém um Ângulo de 90 Graus?",
        "sec-euclid": "Como o Terno 5-12-13 É Gerado Usando a Fórmula de Euclides?",
        "sec-applications": "Aplicações do Triângulo 5-12-13 em Geometria e Medição",
        "sec-vs-triples": "Diferença Entre 5-12-13 e Outros Ternos Pitagóricos",
        "sec-vs-special": "Diferença Entre Triângulos 5-12-13, 45-45-90 e 30-60-90",
        "sec-mistakes": "Erros Comuns ao Usar a Calculadora de Triângulo 5-12-13",
        "sec-verify": "Como Verificar um Triângulo 5-12-13 Escalonado",
        "sec-practice": "Problemas de Prática com Respostas",
        "sec-related": "Calculadoras de Triângulo Retângulo Relacionadas",
        "sec-faq": "Perguntas Frequentes",
      },
      "sections": {
        "sec-intro": {
          "h2": "Calculadora de Triângulo 5-12-13",
          "blocks": [
            {
              "kind": "p",
              "text": "Escale um triângulo 5-12-13 e encontre seus lados, área e perímetro.",
            },
            {
              "kind": "p",
              "text": "Um triângulo 5-12-13 é um triângulo retângulo cujos lados seguem a razão [[5 : 12 : 13]]. É um terno pitagórico, porque seus lados de números inteiros satisfazem o teorema de Pitágoras: [[5^2 + 12^2 = 13^2]], pois [[25 + 144 = 169]]. O lado de comprimento 13 é a hipotenusa, e os lados de comprimento 5 e 12 são os catetos que se encontram no ângulo reto.",
            },
            {
              "kind": "p",
              "text": "A calculadora escala esse triângulo por um fator de escala positivo [[k]], de modo que os lados escalonados são [[a = 5k]], [[b = 12k]] e [[c = 13k]]. Ela também calcula a área, [[A = 30k^2]], e o perímetro, [[P = 30k]], de forma que uma única entrada fornece os cinco resultados. Use a <a href=\"/right-triangle-calculator/\">calculadora de triângulo retângulo</a> para um triângulo retângulo geral.",
            },
            {
              "kind": "p",
              "text": "Por exemplo, com [[k = 2]] os lados se tornam [[a = 10]], [[b = 24]] e [[c = 26]], a área é [[A = 120]] unidades quadradas e o perímetro é [[P = 60]] unidades.",
            },
          ],
        },
        "sec-calculate": {
          "h2": "Escale um Triângulo 5-12-13 e Calcule Suas Medidas",
          "blocks": [
            {
              "kind": "p",
              "text": "Uma entrada, cinco resultados: insira k e leia as medidas do triângulo escalonado.",
            },
            {
              "kind": "p",
              "text": "A calculadora tem um único modo, Escalar Triângulo 5-12-13. Insira um fator de escala positivo [[k]] na caixa de entrada e pressione Calcular. A ferramenta multiplica 5, 12 e 13 por [[k]] e, em seguida, calcula a área e o perímetro a partir dos lados escalonados. Pressione Redefinir para limpar a entrada e começar novamente.",
            },
            {
              "kind": "p",
              "text": "O fator de escala é o número que amplia ou reduz o triângulo original. Com [[k = 1]] você obtém o triângulo original 5, 12, 13. Com [[k]] maior que 1 o triângulo cresce, e com [[k]] entre 0 e 1 ele encolhe, mas a forma nunca muda.",
            },
            {
              "kind": "p",
              "text": "Todos os resultados vêm do mesmo [[k]], por isso os cinco valores sempre concordam entre si. Se [[k]] for zero ou negativo, a calculadora não o aceitará, porque zero produz uma figura degenerada e valores negativos não podem descrever comprimentos de lados.",
            },
          ],
          "table": {
            "headers": [
              "Medida",
              "Fórmula",
              "Resultado",
            ],
            "rows": [
              [
                "Cateto menor",
                "5k",
                "Lado escalonado a",
              ],
              [
                "Cateto maior",
                "12k",
                "Lado escalonado b",
              ],
              [
                "Hipotenusa",
                "13k",
                "Lado escalonado c",
              ],
              [
                "Área",
                "30k²",
                "Área do triângulo",
              ],
              [
                "Perímetro",
                "30k",
                "Perímetro do triângulo",
              ],
            ],
          },
        },
        "sec-what": {
          "h2": "O Que É um Triângulo 5-12-13?",
          "blocks": [
            {
              "kind": "p",
              "text": "Um triângulo retângulo com lados de números inteiros na razão 5:12:13.",
            },
            {
              "kind": "p",
              "text": "Um triângulo 5-12-13 é um triângulo retângulo cujos três lados medem 5, 12 e 13 unidades, ou qualquer conjunto de comprimentos na mesma proporção. O lado mais longo, 13, é a hipotenusa e fica oposto ao ângulo de 90 graus. Os lados de comprimento 5 e 12 são os catetos, e eles se encontram no ângulo reto.",
            },
            {
              "kind": "p",
              "text": "Ele é chamado de terno pitagórico porque os três números inteiros satisfazem [[5^2 + 12^2 = 13^2]]. Essa única verificação é o que faz do triângulo um triângulo retângulo, e não um desenho ou uma medição. Escale os lados por qualquer fator positivo e a razão permanece 5:12:13, de modo que o triângulo ampliado ou reduzido continua sendo um triângulo retângulo com a mesma forma.",
            },
          ],
          "image": {
            "src": "five-twelve-thirteen-main.svg",
            "alt": "Triângulo retângulo 5-12-13 ABC rotulado, com cateto menor a igual a 5, cateto maior b igual a 12, hipotenusa c igual a 13 e um marcador de ângulo reto",
            "caption": "Triângulo ABC: os catetos a = 5 e b = 12 se encontram no ângulo reto, e a hipotenusa é c = 13.",
          },
        },
        "sec-pythagorean": {
          "h2": "Por Que 5-12-13 É um Terno Pitagórico?",
          "blocks": [
            {
              "kind": "p",
              "text": "Os quadrados dos catetos somam o quadrado da hipotenusa.",
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
              "text": "Os dois lados concordam, então a equação vale exatamente. É o teorema de Pitágoras em ação: quando os quadrados dos dois lados menores somam o quadrado do lado mais longo, o ângulo oposto ao lado mais longo deve ser um ângulo reto.",
            },
            {
              "kind": "p",
              "text": "O número 13 tem de ser a hipotenusa porque é o lado mais longo, e a hipotenusa sempre fica oposta ao ângulo de 90 graus. Os números 5 e 12 são os catetos. Como 5, 12 e 13 são números inteiros, o terno é prático para lições de casa, provas e trabalhos de medição em que respostas exatas são importantes.",
            },
            {
              "kind": "p",
              "text": "Essa verificação é a recíproca do teorema de Pitágoras: o teorema diz que um triângulo retângulo satisfaz [[a^2 + b^2 = c^2]], e a recíproca diz que qualquer triângulo cujos lados satisfazem a equação deve conter um ângulo reto. A maioria dos triângulos retângulos não tem todos os lados de números inteiros, e é isso que torna um terno especial.",
            },
          ],
          "image": {
            "src": "five-twelve-thirteen-pythagoras.svg",
            "alt": "Diagrama do teorema de Pitágoras para um triângulo 5-12-13 mostrando que 25 mais 144 é igual a 169",
            "caption": "25 + 144 = 169, então o ângulo oposto a 13 é de 90 graus.",
          },
        },
        "sec-sides": {
          "h2": "Entendendo os Três Lados de um Triângulo 5-12-13",
          "blocks": [
            {
              "kind": "p",
              "text": "Três lados, três funções: dois catetos e uma hipotenusa.",
            },
            {
              "kind": "p",
              "text": "O cateto menor [[a]] mede 5 no triângulo básico. Ele fica oposto ao menor ângulo agudo, cerca de 22.62 graus, e é o lado que a maioria dos alunos percebe primeiro, porque é o menor dos três.",
            },
            {
              "kind": "p",
              "text": "O cateto maior [[b]] mede 12 no triângulo básico. Ele fica oposto ao maior ângulo agudo, cerca de 67.38 graus. A hipotenusa [[c]] mede 13, o lado mais longo, e fica oposta ao ângulo de 90 graus. Quando o triângulo é escalonado por [[k]], os rótulos permanecem na mesma ordem: [[a = 5k]], [[b = 12k]] e [[c = 13k]].",
            },
          ],
          "table": {
            "headers": [
              "Lado",
              "Comprimento no triângulo básico",
              "Posição",
            ],
            "rows": [
              [
                "Cateto menor a",
                "5",
                "Oposto ao ângulo de 22.62°",
              ],
              [
                "Cateto maior b",
                "12",
                "Oposto ao ângulo de 67.38°",
              ],
              [
                "Hipotenusa c",
                "13",
                "Oposto ao ângulo de 90°",
              ],
            ],
          },
        },
        "sec-ratio": {
          "h2": "Entendendo a Razão de Lados 5-12-13",
          "blocks": [
            {
              "kind": "p",
              "text": "A razão 5:12:13 nunca muda, não importa o tamanho do triângulo.",
            },
            {
              "kind": "p",
              "text": "[[[5 : 12 : 13]]]",
            },
            {
              "kind": "p",
              "text": "O cateto menor representa 5 unidades proporcionais, o cateto maior 12 e a hipotenusa 13.",
            },
            {
              "kind": "p",
              "text": "O escalonamento multiplica cada parte pelo mesmo [[k]], de modo que a razão se torna [[[5k : 12k : 13k]]] com a mesma forma por baixo. Os conjuntos 5, 12, 13; 10, 24, 26; 15, 36, 39; 20, 48, 52; e 25, 60, 65 descrevem todos o mesmo triângulo em tamanhos diferentes, porque cada conjunto é a razão básica multiplicada por 1, 2, 3, 4 e 5.",
            },
            {
              "kind": "p",
              "text": "É por isso que a razão é a verdadeira identidade do triângulo. Dois triângulos com a mesma razão são semelhantes: mesmos ângulos, mesma forma, tamanho diferente.",
            },
            {
              "kind": "p",
              "text": "Para testar um conjunto de medidas, divida os três números pelo seu maior divisor comum e veja se resta 5, 12, 13. Para 10, 24, 26 o divisor é 2, e a divisão resulta em 5, 12, 13. Para 15, 36, 39 o divisor é 3, e a divisão resulta no mesmo terno. Se a divisão deixar quaisquer outros três números, o conjunto não é um triângulo 5-12-13.",
            },
          ],
          "image": {
            "src": "five-twelve-thirteen-scaled.svg",
            "alt": "Três triângulos semelhantes rotulados 5-12-13, 10-24-26 e 15-36-39 em tamanhos crescentes",
            "caption": "Mesmas proporções, mesmos ângulos: k = 1, k = 2 e k = 3.",
          },
        },
        "sec-scale-factor": {
          "h2": "O Que É o Fator de Escala em um Triângulo 5-12-13?",
          "blocks": [
            {
              "kind": "p",
              "text": "k é o multiplicador que define o tamanho do triângulo.",
            },
            {
              "kind": "p",
              "text": "[[[a = 5k,\\quad b = 12k,\\quad c = 13k]]]",
            },
            {
              "kind": "p",
              "text": "Um fator de escala multiplica os três comprimentos originais dos lados pelo mesmo número positivo.",
            },
            {
              "kind": "p",
              "text": "Com [[k = 1]] você obtém o triângulo original. Com [[k]] maior que 1 o triângulo cresce, e com [[k]] entre 0 e 1 ele encolhe. O fator de escala muda o tamanho, não a forma: cada ângulo permanece o mesmo e cada lado permanece em proporção.",
            },
            {
              "kind": "p",
              "text": "O mesmo fator deve ser aplicado aos três lados. Escalonar apenas um ou dois lados quebra a razão, quebra a verificação pitagórica, e o resultado deixa de ser um triângulo 5-12-13.",
            },
            {
              "kind": "p",
              "text": "Um fator de escala também pode ser lido como uma razão entre lados correspondentes: divida um lado do novo triângulo pelo lado correspondente do original, e a resposta é [[k]]. Por exemplo, um cateto maior de 36 contra o original 12 resulta em [[k = 36 / 12 = 3]]. Esse é o mesmo [[k]] que a calculadora pede, encontrado a partir de uma medição em vez de escolhido antecipadamente.",
            },
          ],
          "table": {
            "headers": [
              "Fator de escala",
              "Efeito",
              "Lados de exemplo",
            ],
            "rows": [
              [
                "k = 1",
                "Triângulo original",
                "5, 12, 13",
              ],
              [
                "k = 2",
                "Dobrado",
                "10, 24, 26",
              ],
              [
                "k = 0.5",
                "Reduzido à metade",
                "2.5, 6, 6.5",
              ],
              [
                "k = 10",
                "Dez vezes maior",
                "50, 120, 130",
              ],
            ],
          },
          "image": {
            "src": "five-twelve-thirteen-scale-factor.svg",
            "alt": "Triângulo 5-12-13 escalonado com k igual a 2, mostrando os lados a igual a 10, b igual a 24 e c igual a 26",
            "caption": "Com k = 2, os lados se tornam 10, 24 e 26.",
          },
        },
        "sec-leg-a": {
          "h2": "Fórmula para Calcular o Cateto Menor",
          "blocks": [
            {
              "kind": "p",
              "text": "O cateto menor é cinco vezes o fator de escala.",
            },
            {
              "kind": "p",
              "text": "[[[a = 5k]]]",
            },
            {
              "kind": "p",
              "text": "Use [[k = 4]]: [[[a = 5 \\times 4 = 20]]]",
            },
            {
              "kind": "p",
              "text": "O cateto menor tem 20 unidades de comprimento. É o menor lado em qualquer fator de escala, porque 5 é o menor número da razão.",
            },
          ],
        },
        "sec-leg-b": {
          "h2": "Fórmula para Calcular o Cateto Maior",
          "blocks": [
            {
              "kind": "p",
              "text": "O cateto maior é doze vezes o fator de escala.",
            },
            {
              "kind": "p",
              "text": "[[[b = 12k]]]",
            },
            {
              "kind": "p",
              "text": "Use [[k = 4]]: [[[b = 12 \\times 4 = 48]]]",
            },
            {
              "kind": "p",
              "text": "O cateto maior tem 48 unidades de comprimento. É maior que o cateto menor porque 12 é maior que 5, mas continua menor que a hipotenusa em qualquer fator de escala positivo.",
            },
          ],
        },
        "sec-hypotenuse": {
          "h2": "Fórmula para Calcular a Hipotenusa",
          "blocks": [
            {
              "kind": "p",
              "text": "A hipotenusa é treze vezes o fator de escala.",
            },
            {
              "kind": "p",
              "text": "[[[c = 13k]]]",
            },
            {
              "kind": "p",
              "text": "Use [[k = 4]]: [[[c = 13 \\times 4 = 52]]]",
            },
            {
              "kind": "p",
              "text": "A hipotenusa tem 52 unidades de comprimento. Ela permanece o lado mais longo em qualquer fator de escala positivo, porque 13 é o maior número da razão e a hipotenusa sempre fica oposta ao ângulo reto.",
            },
          ],
        },
        "sec-area": {
          "h2": "Como Calcular a Área de um Triângulo 5-12-13 Escalonado",
          "blocks": [
            {
              "kind": "p",
              "text": "Metade do produto dos dois catetos dá a área.",
            },
            {
              "kind": "p",
              "text": "[[[A = \\frac{ab}{2}]]]",
            },
            {
              "kind": "p",
              "text": "Substitua os lados escalonados: [[[A = \\frac{(5k)(12k)}{2}]]]",
            },
            {
              "kind": "p",
              "text": "Simplifique: [[[A = \\frac{60k^2}{2}]]]",
            },
            {
              "kind": "p",
              "text": "[[[\\boxed{A = 30k^2}]]]",
            },
            {
              "kind": "p",
              "text": "Os dois catetos são a base e a altura, porque se encontram no ângulo reto. Dividir o produto deles pela metade dá a área do triângulo. O fator de escala é elevado ao quadrado, então dobrar [[k]] torna a área quatro vezes maior. A área é medida em unidades quadradas.",
            },
            {
              "kind": "p",
              "text": "Use [[k = 3]]: [[[A = 30(3^2) = 270]]] unidades quadradas.",
            },
            {
              "kind": "p",
              "text": "A hipotenusa nunca entra na fórmula da área, porque a área de um triângulo retângulo vem de seus dois catetos. Como verificação com [[k = 2]], os catetos são 10 e 24, então [[A = (10 \\times 24) / 2 = 120]] unidades quadradas, o que corresponde a [[A = 30(2^2) = 120]].",
            },
          ],
          "image": {
            "src": "five-twelve-thirteen-area.svg",
            "alt": "Diagrama de área de um triângulo 5-12-13 escalonado com base 5k, altura 12k e área 30k ao quadrado",
            "caption": "Com k = 2, a área é 120 unidades quadradas.",
          },
        },
        "sec-perimeter": {
          "h2": "Como Calcular o Perímetro de um Triângulo 5-12-13 Escalonado",
          "blocks": [
            {
              "kind": "p",
              "text": "Some os três lados escalonados para obter o perímetro.",
            },
            {
              "kind": "p",
              "text": "[[[P = a + b + c]]]",
            },
            {
              "kind": "p",
              "text": "Substitua: [[[P = 5k + 12k + 13k]]]",
            },
            {
              "kind": "p",
              "text": "[[[\\boxed{P = 30k}]]]",
            },
            {
              "kind": "p",
              "text": "Todos os lados contam, então some os três. O perímetro cresce em proporção direta a [[k]]: dobrar o fator de escala dobra o perímetro. O perímetro é medido em unidades lineares, não em unidades quadradas.",
            },
            {
              "kind": "p",
              "text": "Use [[k = 3]]: [[[P = 30 \\times 3 = 90]]] unidades.",
            },
            {
              "kind": "p",
              "text": "Como verificação com [[k = 2]], some os lados escalonados diretamente: [[P = 10 + 24 + 26 = 60]] unidades, o que corresponde a [[P = 30 \\times 2 = 60]]. O perímetro responde a uma pergunta diferente da área: ele mede a distância ao redor do triângulo, não o espaço dentro dele.",
            },
          ],
          "image": {
            "src": "five-twelve-thirteen-perimeter.svg",
            "alt": "Diagrama de perímetro de um triângulo 5-12-13 escalonado com lados 5k, 12k e 13k somando 30k",
            "caption": "Com k = 2, o perímetro é 60 unidades.",
          },
        },
        "sec-find-k": {
          "h2": "Como Encontrar o Fator de Escala a Partir de um Lado Conhecido",
          "blocks": [
            {
              "kind": "p",
              "text": "Divida um lado conhecido pelo seu número da razão para encontrar k à mão.",
            },
            {
              "kind": "p",
              "text": "A calculadora recebe [[k]] diretamente, mas você pode calcular [[k]] por conta própria quando já conhece um lado. Divida o lado conhecido pelo número correspondente da razão 5:12:13.",
            },
            {
              "kind": "p",
              "text": "Se o cateto menor for conhecido: [[[k = \\frac{a}{5}]]]",
            },
            {
              "kind": "p",
              "text": "Se o cateto maior for conhecido: [[[k = \\frac{b}{12}]]]",
            },
            {
              "kind": "p",
              "text": "Se a hipotenusa for conhecida: [[[k = \\frac{c}{13}]]]",
            },
            {
              "kind": "p",
              "text": "Exemplo 1: com [[a = 20]], [[k = 20 / 5 = 4]]. Exemplo 2: com [[b = 36]], [[k = 36 / 12 = 3]]. Exemplo 3: com [[c = 65]], [[k = 65 / 13 = 5]]. Insira o k encontrado na calculadora para obter os outros lados, a área e o perímetro.",
            },
            {
              "kind": "p",
              "text": "Às vezes [[k]] não é um número inteiro. Com [[b = 30]], por exemplo, [[k = 30 / 12 = 2.5]], e os outros lados são [[a = 5 \\times 2.5 = 12.5]] e [[c = 13 \\times 2.5 = 32.5]]. Quando você calcula [[k]] a partir de dois lados conhecidos diferentes, as duas respostas devem concordar; se não concordarem, as medidas não formam um triângulo 5-12-13.",
            },
          ],
        },
        "sec-step-example": {
          "h2": "Exemplo Passo a Passo de Escalonamento de um Triângulo 5-12-13",
          "blocks": [
            {
              "kind": "p",
              "text": "Fator de escala k = 2, resolvido do início ao fim.",
            },
            {
              "kind": "p",
              "text": "Comece com [[k = 2]] e encontre cada medida do triângulo escalonado, uma fórmula de cada vez. Cada passo usa uma fórmula das seções acima, e a tabela de resumo no final reúne os resultados.",
            },
            {
              "kind": "steps",
              "steps": [
                "Encontre o cateto menor: [[a = 5k = 5 \\times 2 = 10]].",
                "Encontre o cateto maior: [[b = 12k = 12 \\times 2 = 24]].",
                "Encontre a hipotenusa: [[c = 13k = 13 \\times 2 = 26]].",
                "Encontre a área: [[A = 30k^2 = 30 \\times 4 = 120]] unidades quadradas.",
                "Encontre o perímetro: [[P = 30k = 30 \\times 2 = 60]] unidades.",
              ],
            },
            {
              "kind": "p",
              "text": "O novo triângulo mantém as proporções originais 5:12:13: 10, 24 e 26 são todos o dobro de 5, 12 e 13. Verifique o ângulo reto com Pitágoras: [[10^2 + 24^2 = 100 + 576 = 676 = 26^2]].",
            },
          ],
          "table": {
            "headers": [
              "Medida",
              "Valor",
            ],
            "rows": [
              [
                "Cateto menor a",
                "10",
              ],
              [
                "Cateto maior b",
                "24",
              ],
              [
                "Hipotenusa c",
                "26",
              ],
              [
                "Área A",
                "120 unidades quadradas",
              ],
              [
                "Perímetro P",
                "60 unidades",
              ],
            ],
          },
        },
        "sec-examples": {
          "h2": "Exemplos Resolvidos com Diferentes Fatores de Escala",
          "blocks": [
            {
              "kind": "p",
              "text": "Oito exemplos resolvidos, do triângulo original até k = 10.",
            },
            {
              "kind": "h3",
              "text": "Exemplo 1: Triângulo Original, k = 1",
            },
            {
              "kind": "p",
              "text": "Dado [[k = 1]]. Lados: [[a = 5]], [[b = 12]], [[c = 13]]. Área: [[A = 30(1^2) = 30]] unidades quadradas. Perímetro: [[P = 30(1) = 30]] unidades. Este é o triângulo original, a menor versão de números inteiros do terno.",
            },
            {
              "kind": "h3",
              "text": "Exemplo 2: Fator de Escala de 2",
            },
            {
              "kind": "p",
              "text": "Dado [[k = 2]]. Lados: [[a = 10]], [[b = 24]], [[c = 26]]. Área: [[A = 30(2^2) = 120]] unidades quadradas. Perímetro: [[P = 30(2) = 60]] unidades. Dobrar o fator de escala dobra cada lado e o perímetro, mas a área cresce quatro vezes.",
            },
            {
              "kind": "h3",
              "text": "Exemplo 3: Fator de Escala de 3",
            },
            {
              "kind": "p",
              "text": "Dado [[k = 3]]. Lados: [[a = 15]], [[b = 36]], [[c = 39]]. Área: [[A = 30(3^2) = 270]] unidades quadradas. Perímetro: [[P = 30(3) = 90]] unidades. Triplicar os lados triplica o perímetro, enquanto a área se torna nove vezes a original.",
            },
            {
              "kind": "h3",
              "text": "Exemplo 4: Fator de Escala de 4",
            },
            {
              "kind": "p",
              "text": "Dado [[k = 4]]. Lados: [[a = 20]], [[b = 48]], [[c = 52]]. Área: [[A = 30(4^2) = 480]] unidades quadradas. Perímetro: [[P = 30(4) = 120]] unidades. Cada lado é quatro vezes o original, e a área é dezesseis vezes a original.",
            },
            {
              "kind": "h3",
              "text": "Exemplo 5: Fator de Escala de 0.5",
            },
            {
              "kind": "p",
              "text": "Dado [[k = 0.5]]. Lados: [[a = 2.5]], [[b = 6]], [[c = 6.5]]. Área: [[A = 30(0.5^2) = 7.5]] unidades quadradas. Perímetro: [[P = 30(0.5) = 15]] unidades. Reduzir o triângulo à metade reduz os lados e o perímetro à metade, enquanto a área cai para um quarto.",
            },
            {
              "kind": "h3",
              "text": "Exemplo 6: Fator de Escala de 1.5",
            },
            {
              "kind": "p",
              "text": "Dado [[k = 1.5]]. Lados: [[a = 7.5]], [[b = 18]], [[c = 19.5]]. Área: [[A = 30(1.5^2) = 67.5]] unidades quadradas. Perímetro: [[P = 30(1.5) = 45]] unidades. Um fator de escala decimal funciona da mesma forma: multiplique cada lado por 1.5.",
            },
            {
              "kind": "h3",
              "text": "Exemplo 7: Fator de Escala de 5",
            },
            {
              "kind": "p",
              "text": "Dado [[k = 5]]. Lados: [[a = 25]], [[b = 60]], [[c = 65]]. Área: [[A = 30(5^2) = 750]] unidades quadradas. Perímetro: [[P = 30(5) = 150]] unidades. Um fator de escala de 5 produz um triângulo bem maior, útil para trabalhos de layout em que o 5, 12, 13 básico é pequeno demais.",
            },
            {
              "kind": "h3",
              "text": "Exemplo 8: Fator de Escala de 10",
            },
            {
              "kind": "p",
              "text": "Dado [[k = 10]]. Lados: [[a = 50]], [[b = 120]], [[c = 130]]. Área: [[A = 30(10^2) = 3000]] unidades quadradas. Perímetro: [[P = 30(10) = 300]] unidades. Nesse tamanho os números permanecem exatos, o que é uma vantagem de trabalhar com um terno de números inteiros.",
            },
            {
              "kind": "p",
              "text": "Em todos os oito exemplos o padrão se mantém: lados e perímetro crescem com [[k]], a área cresce com [[k]] ao quadrado, e a razão 5:12:13 nunca muda.",
            },
          ],
        },
        "sec-right-angle": {
          "h2": "Por Que o Triângulo 5-12-13 Sempre Mantém um Ângulo de 90 Graus?",
          "blocks": [
            {
              "kind": "p",
              "text": "O escalonamento não pode quebrar a verificação pitagórica.",
            },
            {
              "kind": "p",
              "text": "Os lados escalonados são [[[5k,\\quad 12k,\\quad 13k]]]",
            },
            {
              "kind": "p",
              "text": "Aplique Pitágoras: [[[(5k)^2 + (12k)^2 = (13k)^2]]]",
            },
            {
              "kind": "p",
              "text": "Expanda: [[[25k^2 + 144k^2 = 169k^2]]]",
            },
            {
              "kind": "p",
              "text": "[[[169k^2 = 169k^2]]]",
            },
            {
              "kind": "p",
              "text": "Os dois lados coincidem para todo [[k]] positivo, porque o fator [[k^2]] é comum aos três termos. O escalonamento estica o triângulo sem mudar seus ângulos, então o ângulo de 90 graus sobrevive em qualquer tamanho. Essa é a mesma ideia dos triângulos semelhantes: mesma forma, tamanho diferente.",
            },
            {
              "kind": "p",
              "text": "Os ângulos nunca mudam com o escalonamento. Em qualquer [[k]] positivo os ângulos agudos permanecem cerca de 22.62 e 67.38 graus, porque o seno do menor ângulo é sempre [[5 / 13]] e o seno do maior ângulo é sempre [[12 / 13]]. Apenas os comprimentos dos lados mudam, e todos mudam juntos.",
            },
          ],
          "image": {
            "src": "five-twelve-thirteen-angles.svg",
            "alt": "Diagrama de ângulos de um triângulo 5-12-13 mostrando o ângulo de 90 graus e os ângulos agudos de cerca de 22.62 e 67.38 graus",
            "caption": "Os ângulos agudos são cerca de 22.62 e 67.38 graus, e somam 90 graus.",
          },
        },
        "sec-euclid": {
          "h2": "Como o Terno 5-12-13 É Gerado Usando a Fórmula de Euclides?",
          "blocks": [
            {
              "kind": "p",
              "text": "Dois números pequenos, m = 3 e n = 2, geram todo o terno.",
            },
            {
              "kind": "p",
              "text": "A fórmula de Euclides constrói ternos pitagóricos primitivos a partir de dois inteiros positivos [[m]] e [[n]]: [[[a = m^2 - n^2,\\quad b = 2mn,\\quad c = m^2 + n^2]]]",
            },
            {
              "kind": "p",
              "text": "Use [[m = 3]] e [[n = 2]]: [[[a = 3^2 - 2^2 = 9 - 4 = 5]]]",
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
              "text": "O resultado é a razão em destaque [[[\\boxed{5:12:13}]]]",
            },
            {
              "kind": "p",
              "text": "A fórmula funciona quando [[m]] é maior que [[n]], os dois números não têm fator comum, e um é par enquanto o outro é ímpar. Essas condições produzem um terno primitivo, que não pode ser reduzido a um terno menor de números inteiros. A fórmula de Euclides é um extra avançado: a calculadora em si precisa apenas de [[k]], mas a fórmula mostra de onde vêm 5, 12 e 13.",
            },
            {
              "kind": "p",
              "text": "Outras escolhas de [[m]] e [[n]] geram outros ternos. Com [[m = 2]] e [[n = 1]] a fórmula dá 3, 4 e 5. Com [[m = 4]] e [[n = 1]] ela dá 15, 8 e 17, que é o terno 8-15-17 em outra ordem. O terno 5-12-13 é o membro dessa família que vem de [[m = 3]] e [[n = 2]].",
            },
          ],
          "image": {
            "src": "five-twelve-thirteen-euclid.svg",
            "alt": "Diagrama de fluxo da fórmula de Euclides com m igual a 3 e n igual a 2 produzindo 5, 12 e 13",
            "caption": "m = 3 e n = 2 dão a = 5, b = 12 e c = 13.",
          },
        },
        "sec-applications": {
          "h2": "Aplicações do Triângulo 5-12-13 em Geometria e Medição",
          "blocks": [
            {
              "kind": "p",
              "text": "Um ângulo reto de números inteiros é útil onde quer que cantos exatos importem.",
            },
            {
              "kind": "p",
              "text": "Em lições de casa e prática para provas de geometria, o terno permite verificações rápidas de ângulo reto sem transferidor: se três comprimentos se encaixam em 5:12:13, o ângulo entre os dois lados menores é de 90 graus. Os professores o usam em exercícios do teorema de Pitágoras, problemas de semelhança de triângulos e trabalhos de desenho em escala.",
            },
            {
              "kind": "p",
              "text": "Construtores e carpinteiros usam versões escalonadas para marcar cantos em esquadro: marque 5 unidades ao longo de uma borda e 12 ao longo da outra, e a diagonal deve medir 13. Agrimensores e trabalhos de desenho técnico dependem da mesma ideia em escalas maiores, com 10, 24, 26 ou 25, 60, 65 quando o triângulo básico é pequeno demais.",
            },
            {
              "kind": "p",
              "text": "A razão também ajuda na modelagem matemática e em demonstrações em sala de aula, onde números inteiros exatos mantêm a aritmética limpa. Para construções reais, a precisão das medições e as condições do local ainda importam, e essa razão não substitui a topografia profissional nem as normas de construção.",
            },
          ],
        },
        "sec-vs-triples": {
          "h2": "Diferença Entre 5-12-13 e Outros Ternos Pitagóricos",
          "blocks": [
            {
              "kind": "p",
              "text": "Todo terno primitivo é um triângulo retângulo, mas cada um tem sua própria forma.",
            },
            {
              "kind": "p",
              "text": "A tabela abaixo compara cinco ternos primitivos bem conhecidos. Todos satisfazem o teorema de Pitágoras, mas suas proporções de lados e ângulos agudos diferem, então cada um cria um triângulo de forma diferente. Escalonar um terno produz triângulos semelhantes, nunca um terno diferente: 10, 24, 26 é um 5-12-13 escalonado, enquanto 3, 4, 5 é uma forma completamente diferente.",
            },
            {
              "kind": "p",
              "text": "O triângulo 5-12-13 é mais longo e estreito que o triângulo 3-4-5: seu cateto maior é mais que o dobro do cateto menor, enquanto o 3-4-5 é mais próximo de um quadrado. Essa diferença aparece nos ângulos, com 22.62 e 67.38 graus aqui contra 36.87 e 53.13 graus para o 3-4-5. Saiba mais na página da <a href=\"/pythagorean-triples-calculator/\">calculadora de ternos pitagóricos</a>.",
            },
            {
              "kind": "p",
              "text": "Somente os ternos da tabela são primitivos, o que significa que seus três números não têm divisor comum maior que 1. Um terno escalonado como 6, 8, 10 ou 10, 24, 26 não é primitivo, porque os três números são divisíveis por 2. Os ternos primitivos são os membros básicos de cada família, e todos os outros membros são cópias escalonadas de um deles.",
            },
          ],
          "table": {
            "headers": [
              "Terno pitagórico",
              "Razão de lados",
              "Hipotenusa",
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
          "h2": "Diferença Entre Triângulos 5-12-13, 45-45-90 e 30-60-90",
          "blocks": [
            {
              "kind": "p",
              "text": "O 5-12-13 tem seus próprios ângulos, não os ângulos padrão dos triângulos especiais.",
            },
            {
              "kind": "p",
              "text": "Um triângulo 5-12-13 não é um triângulo 45-45-90 nem um triângulo 30-60-90. Seus ângulos agudos são cerca de 22.62 e 67.38 graus, e seus catetos são desiguais, então ele pertence à família dos ternos pitagóricos e não a nenhuma das famílias de ângulos especiais.",
            },
            {
              "kind": "p",
              "text": "Use a <a href=\"/45-45-90-triangle-calculator/\">calculadora de triângulo 45-45-90</a> para triângulos retângulos isósceles e a <a href=\"/30-60-90-triangle-calculator/\">calculadora de triângulo 30-60-90</a> para a família 30-60-90. A página 5-12-13 é a ferramenta certa quando os lados seguem a razão 5:12:13.",
            },
            {
              "kind": "p",
              "text": "Para saber a qual família um triângulo retângulo pertence, verifique seus ângulos ou sua razão de lados. Catetos iguais e ângulos de 45 graus significam 45-45-90. Ângulos de 30 e 60 graus significam 30-60-90. Lados na razão 5:12:13, com ângulos próximos de 22.62 e 67.38 graus, significam um triângulo 5-12-13. As três famílias nunca se sobrepõem.",
            },
          ],
          "table": {
            "headers": [
              "Característica",
              "5-12-13",
              "45-45-90",
              "30-60-90",
            ],
            "rows": [
              [
                "Razão de lados",
                "5:12:13",
                "1:1:√2",
                "1:√3:2",
              ],
              [
                "Ângulos",
                "22.62°, 67.38°, 90° aproximadamente",
                "45°, 45°, 90°",
                "30°, 60°, 90°",
              ],
              [
                "Catetos iguais",
                "Não",
                "Sim",
                "Não",
              ],
              [
                "Propriedade principal",
                "Terno pitagórico",
                "Triângulo retângulo isósceles",
                "Razão de ângulos especiais",
              ],
              [
                "Hipotenusa",
                "13k",
                "a√2",
                "2a",
              ],
            ],
          },
        },
        "sec-mistakes": {
          "h2": "Erros Comuns ao Usar a Calculadora de Triângulo 5-12-13",
          "blocks": [
            {
              "kind": "p",
              "text": "Quatorze erros aparecem repetidamente em problemas de 5-12-13.",
            },
            {
              "kind": "steps",
              "steps": [
                "Tratar 13 como um cateto em vez da hipotenusa: 13 é o lado mais longo e fica oposto ao ângulo de 90 graus. [[c = 13k]] é sempre a hipotenusa.",
                "Confundir o cateto menor com o cateto maior: [[a = 5k]] é o cateto menor e [[b = 12k]] é o cateto maior. Mantenha os rótulos em ordem.",
                "Escalonar apenas um ou dois lados: escalonar apenas os catetos quebra a razão e o ângulo reto. Aplique o mesmo [[k]] a todos os lados.",
                "Confundir o fator de escala com um comprimento de lado: [[k]] é o multiplicador, não um lado. Com [[k = 2]] os lados são 10, 24 e 26.",
                "Usar zero como fator de escala válido: [[k = 0]] torna os três lados zero, uma figura degenerada, não um triângulo. [[k]] deve ser maior que zero.",
                "Inserir um fator de escala negativo: um [[k]] negativo produz comprimentos de lados negativos, que não podem descrever um triângulo. Insira apenas um [[k]] positivo.",
                "Esquecer de elevar k ao quadrado na fórmula da área: a área cresce com [[k]] ao quadrado. Com [[k = 3]] a área é [[A = 30 \\times 9 = 270]], não 90.",
                "Confundir área e perímetro: a área é medida em unidades quadradas e usa [[A = 30k^2]], enquanto o perímetro é medido em unidades lineares e usa [[P = 30k]].",
                "Somar apenas dois lados ao calcular o perímetro: o perímetro inclui os três lados, então [[P = 5k + 12k + 13k = 30k]].",
                "Misturar unidades de medida: mantenha uma única unidade para os três lados. Se os catetos estão em centímetros, a área sai em centímetros quadrados e o perímetro em centímetros.",
                "Supor que apenas 5, 12 e 13 funcionam: qualquer conjunto escalonado, como 10, 24, 26 ou 15, 36, 39, continua sendo um triângulo 5-12-13, porque a razão é a mesma.",
                "Supor que todo triângulo retângulo segue a razão 5:12:13: a maioria dos triângulos retângulos tem outros comprimentos de lados. A razão se aplica apenas quando os lados se encaixam em 5:12:13.",
                "Confundir os ternos 5-12-13 e 3-4-5: 3, 4, 5 e 5, 12, 13 são ternos diferentes com ângulos diferentes. Verifique a razão antes de escolher uma fórmula.",
                "Arredondar medidas sem necessidade: o terno fornece números inteiros exatos, então mantenha-os exatos. Arredonde apenas quando um fator de escala como 1.5 forçar um decimal, e diga isso.",
              ],
            },
          ],
        },
        "sec-verify": {
          "h2": "Como Verificar um Triângulo 5-12-13 Escalonado",
          "blocks": [
            {
              "kind": "p",
              "text": "Quatro verificações rápidas confirmam um triângulo 5-12-13 escalonado.",
            },
            {
              "kind": "h3",
              "text": "Verificação 1: Razão de Lados",
            },
            {
              "kind": "p",
              "text": "Os lados devem se encaixar em [[[a : b : c = 5 : 12 : 13]]]",
            },
            {
              "kind": "h3",
              "text": "Verificação 2: Teorema de Pitágoras",
            },
            {
              "kind": "p",
              "text": "Os catetos devem satisfazer [[[a^2 + b^2 = c^2]]]",
            },
            {
              "kind": "h3",
              "text": "Verificação 3: Consistência do Fator de Escala",
            },
            {
              "kind": "p",
              "text": "Cada lado dividido pelo seu número da razão deve dar o mesmo [[k]]: [[[\\frac{a}{5} = \\frac{b}{12} = \\frac{c}{13} = k]]]",
            },
            {
              "kind": "h3",
              "text": "Verificação 4: Ordem dos Lados",
            },
            {
              "kind": "p",
              "text": "Os lados devem ir do menor ao maior: [[[a < b < c]]]",
            },
            {
              "kind": "p",
              "text": "Use 10, 24, 26 como exemplo. A razão é 10:24:26, que se reduz a 5:12:13, e a verificação pitagórica dá [[10^2 + 24^2 = 100 + 576 = 676 = 26^2]]. A verificação do fator de escala dá [[10 / 5 = 24 / 12 = 26 / 13 = 2]]. As quatro verificações passam, então as medidas formam um triângulo 5-12-13 escalonado.",
            },
            {
              "kind": "p",
              "text": "Se alguma verificação falhar, meça novamente ou revise a aritmética antes de confiar nos números. Uma verificação de razão que falha geralmente significa que um lado foi escalonado por um fator diferente, e uma verificação pitagórica que falha geralmente significa que o lado mais longo foi confundido com um cateto. Corrija o lado que quebra o padrão e execute as quatro verificações novamente.",
            },
          ],
        },
        "sec-practice": {
          "h2": "Problemas de Prática com Respostas",
          "blocks": [
            {
              "kind": "p",
              "text": "Resolva os oito problemas no papel antes de ler as respostas.",
            },
            {
              "kind": "h3",
              "text": "Problema 1: Escalonar com k = 2",
            },
            {
              "kind": "p",
              "text": "Escale um triângulo 5-12-13 usando [[k = 2]]. Encontre os três comprimentos dos lados, a área e o perímetro.",
            },
            {
              "kind": "h3",
              "text": "Problema 2: Escalonar com k = 4",
            },
            {
              "kind": "p",
              "text": "Escale um triângulo 5-12-13 usando [[k = 4]]. Encontre os três comprimentos dos lados, a área e o perímetro.",
            },
            {
              "kind": "h3",
              "text": "Problema 3: Área com k = 3",
            },
            {
              "kind": "p",
              "text": "Encontre a área de um triângulo 5-12-13 escalonado com [[k = 3]], em unidades quadradas.",
            },
            {
              "kind": "h3",
              "text": "Problema 4: Perímetro com k = 5",
            },
            {
              "kind": "p",
              "text": "Encontre o perímetro de um triângulo 5-12-13 escalonado com [[k = 5]], em unidades.",
            },
            {
              "kind": "h3",
              "text": "Problema 5: Encontrar k a Partir do Cateto Menor",
            },
            {
              "kind": "p",
              "text": "O cateto menor de um triângulo 5-12-13 escalonado é 25. Encontre o fator de escala [[k]] e, em seguida, encontre os outros dois lados.",
            },
            {
              "kind": "h3",
              "text": "Problema 6: Encontrar k a Partir do Cateto Maior",
            },
            {
              "kind": "p",
              "text": "O cateto maior de um triângulo 5-12-13 escalonado é 48. Encontre o fator de escala [[k]] e, em seguida, encontre os outros dois lados.",
            },
            {
              "kind": "h3",
              "text": "Problema 7: Encontrar k a Partir da Hipotenusa",
            },
            {
              "kind": "p",
              "text": "A hipotenusa de um triângulo 5-12-13 escalonado é 78. Encontre o fator de escala [[k]] e, em seguida, encontre os dois catetos.",
            },
            {
              "kind": "h3",
              "text": "Problema 8: Verificar 15, 36 e 39",
            },
            {
              "kind": "p",
              "text": "Os comprimentos dos lados 15, 36 e 39 formam um triângulo 5-12-13 escalonado? Verifique a razão e o teorema de Pitágoras.",
            },
            {
              "kind": "h3",
              "text": "Respostas",
            },
            {
              "kind": "p",
              "text": "1. Lados 10, 24, 26; área 120 unidades quadradas; perímetro 60 unidades.",
            },
            {
              "kind": "p",
              "text": "2. Lados 20, 48, 52; área 480 unidades quadradas; perímetro 120 unidades.",
            },
            {
              "kind": "p",
              "text": "3. Área [[A = 30 \\times 9 = 270]] unidades quadradas.",
            },
            {
              "kind": "p",
              "text": "4. Perímetro [[P = 30 \\times 5 = 150]] unidades.",
            },
            {
              "kind": "p",
              "text": "5. [[k = 25 / 5 = 5]]; o cateto maior é 60 e a hipotenusa é 65.",
            },
            {
              "kind": "p",
              "text": "6. [[k = 48 / 12 = 4]]; o cateto menor é 20 e a hipotenusa é 52.",
            },
            {
              "kind": "p",
              "text": "7. [[k = 78 / 13 = 6]]; o cateto menor é 30 e o cateto maior é 72.",
            },
            {
              "kind": "p",
              "text": "8. Sim: [[15^2 + 36^2 = 225 + 1296 = 1521 = 39^2]], e 15:36:39 se reduz a 5:12:13, então [[k = 3]].",
            },
          ],
        },
      },
      "relatedHeading": "Calculadoras de Triângulo Retângulo Relacionadas",
      "relatedIntro": "Cada calculadora abaixo trata de uma tarefa diferente de triângulo retângulo, então escolha a ferramenta que corresponde à medida de que você precisa.",
      "relatedItems": [
        "Calculadora de Ternos Pitagóricos",
        "Calculadora de Triângulo 3-4-5",
        "Calculadora de Lados de Triângulo Retângulo",
        "Calculadora do Teorema de Pitágoras",
        "Calculadora de Área de Triângulo Retângulo",
        "Calculadora de Perímetro de Triângulo Retângulo",
      ],
      "faqHeading": "Perguntas Frequentes",
      "faqs": [
        {
          "question": "O que é um triângulo 5-12-13?",
          "answer": "Um triângulo 5-12-13 é um triângulo retângulo com lados de comprimento 5, 12 e 13, ou qualquer conjunto escalonado na mesma razão. O lado de comprimento 13 é a hipotenusa, e os lados de comprimento 5 e 12 são os catetos que se encontram no ângulo reto.",
        },
        {
          "question": "Por que 5-12-13 é um triângulo retângulo?",
          "answer": "Porque seus lados satisfazem o teorema de Pitágoras: [[5^2 + 12^2 = 25 + 144 = 169 = 13^2]]. Quando os quadrados dos dois lados menores somam o quadrado do lado mais longo, o ângulo oposto a esse lado é de 90 graus.",
        },
        {
          "question": "Qual é a razão de lados do triângulo 5-12-13?",
          "answer": "A razão é 5:12:13: o cateto menor tem 5 partes, o cateto maior tem 12 partes e a hipotenusa tem 13 partes. O escalonamento multiplica cada parte pelo mesmo fator [[k]], então a razão nunca muda.",
        },
        {
          "question": "Como funciona a calculadora de triângulo 5-12-13?",
          "answer": "Insira um fator de escala positivo [[k]] e pressione Calcular. A calculadora retorna os lados escalonados [[a = 5k]], [[b = 12k]] e [[c = 13k]], além da área [[A = 30k^2]] e do perímetro [[P = 30k]].",
        },
        {
          "question": "O que é o fator de escala em um triângulo 5-12-13?",
          "answer": "O fator de escala [[k]] é o número que multiplica os três lados do triângulo básico. Com [[k = 1]] você obtém o triângulo original; valores maiores o ampliam e valores entre 0 e 1 o reduzem.",
        },
        {
          "question": "Como calculo os lados de um triângulo 5-12-13 escalonado?",
          "answer": "Multiplique cada lado básico por [[k]]: o cateto menor é [[a = 5k]], o cateto maior é [[b = 12k]] e a hipotenusa é [[c = 13k]]. Para [[k = 4]] os lados são 20, 48 e 52.",
        },
        {
          "question": "Como calculo sua área?",
          "answer": "Use [[A = 30k^2]]. A área vem da metade do produto dos catetos, [[A = (5k)(12k) / 2]]. Com [[k = 3]] a área é 270 unidades quadradas.",
        },
        {
          "question": "Como calculo seu perímetro?",
          "answer": "Use [[P = 30k]]. Some os três lados escalonados: [[P = 5k + 12k + 13k]]. Com [[k = 3]] o perímetro é 90 unidades.",
        },
        {
          "question": "Posso usar 10-24-26 em vez de 5-12-13?",
          "answer": "Sim. O conjunto 10, 24, 26 é o triângulo 5-12-13 escalonado por [[k = 2]], então tem a mesma forma e os mesmos ângulos. Qualquer múltiplo de 5, 12 e 13 funciona da mesma forma.",
        },
        {
          "question": "Como o terno 5-12-13 é gerado?",
          "answer": "A fórmula de Euclides com [[m = 3]] e [[n = 2]] dá [[a = 3^2 - 2^2 = 5]], [[b = 2(3)(2) = 12]] e [[c = 3^2 + 2^2 = 13]]. Os valores 3 e 2 são primos entre si e têm paridades opostas, então o terno é primitivo.",
        },
        {
          "question": "Qual é a diferença entre 3-4-5 e 5-12-13?",
          "answer": "Ambos são ternos pitagóricos primitivos, mas suas proporções diferem: o 3-4-5 tem ângulos de cerca de 36.87 e 53.13 graus, enquanto o 5-12-13 tem ângulos de cerca de 22.62 e 67.38 graus. Cada terno produz um triângulo de forma diferente.",
        },
        {
          "question": "Todo triângulo 5-12-13 escalonado é um triângulo retângulo?",
          "answer": "Sim. Para todo [[k]] positivo os lados escalonados satisfazem [[(5k)^2 + (12k)^2 = (13k)^2]], então o teorema de Pitágoras vale e o ângulo oposto ao lado mais longo permanece 90 graus.",
        },
      ],
    },
};
