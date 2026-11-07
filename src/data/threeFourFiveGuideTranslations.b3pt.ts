// threeFourFiveGuideTranslations.bpt.ts: 3-4-5 Triangle
// Guide (Page 42 of 45) translation.
export const THREEFOURFIVE_B3_PT = {
  "pt": {
      "meta": {
        "description": "Escale um triângulo 3-4-5 com esta calculadora: introduza um fator de escala positivo k para encontrar os lados 3k, 4k e 5k, mais a área 6k ao quadrado e o perímetro 12k.",
        "primaryKeyword": "3-4-5 Triangle Calculator",
        "slug": "3-4-5-triangle-calculator",
        "title": "Calculadora de Triângulo 3-4-5 - Escalar Lados, Área, Perímetro",
      },
      "tocHeading": "Navegação por Secções",
      "tocItems": {
        "sec-intro": "Calculadora de Triângulo 3-4-5",
        "sec-calculate": "Escalar um Triângulo 3-4-5 e Calcular as Suas Medidas",
        "sec-what": "O Que É um Triângulo 3-4-5?",
        "sec-pythagorean": "Porque É que 3-4-5 É um Terno Pitagórico?",
        "sec-sides": "Compreender os Três Lados de um Triângulo 3-4-5",
        "sec-ratio": "Compreender a Razão dos Lados 3-4-5",
        "sec-scale-factor": "O Que É o Fator de Escala num Triângulo 3-4-5?",
        "sec-leg-a": "Fórmula para Calcular o Primeiro Cateto",
        "sec-leg-b": "Fórmula para Calcular o Segundo Cateto",
        "sec-hypotenuse": "Fórmula para Calcular a Hipotenusa",
        "sec-area": "Como Calcular a Área de um Triângulo 3-4-5 Escalonado",
        "sec-perimeter": "Como Calcular o Perímetro de um Triângulo 3-4-5 Escalonado",
        "sec-find-k": "Como Encontrar o Fator de Escala a Partir de um Lado Conhecido",
        "sec-step-example": "Exemplo Passo a Passo de Escalonamento de um Triângulo 3-4-5",
        "sec-examples": "Exemplos Resolvidos com Diferentes Fatores de Escala",
        "sec-right-angle": "Porque É que o Triângulo 3-4-5 Mantém Sempre um Ângulo de 90 Graus?",
        "sec-construction": "Como Usar a Regra 3-4-5 para Verificar um Canto Quadrado",
        "sec-applications": "Aplicações do Triângulo 3-4-5 na Construção",
        "sec-similar": "Relação Entre Triângulos Semelhantes e a Razão 3-4-5",
        "sec-vs-special": "Diferença Entre Triângulos 3-4-5, 45-45-90 e 30-60-90",
        "sec-mistakes": "Erros Comuns ao Usar a Calculadora de Triângulo 3-4-5",
        "sec-verify": "Como Verificar um Triângulo 3-4-5 Escalonado",
        "sec-practice": "Problemas de Prática com Respostas",
        "sec-related": "Calculadoras de Triângulos Retângulos Relacionadas",
        "sec-faq": "Perguntas Frequentes",
      },
      "sections": {
        "sec-intro": {
          "blocks": [
            {
              "kind": "p",
              "text": "Escale um triângulo 3-4-5 e encontre os seus lados, a área e o perímetro.",
            },
            {
              "kind": "p",
              "text": "Um triângulo 3-4-5 é um triângulo retângulo cujos comprimentos dos lados seguem a razão [[3 : 4 : 5]]. É o terno pitagórico mais famoso, porque os seus lados de números inteiros satisfazem o teorema de Pitágoras: [[3^2 + 4^2 = 5^2]], visto que [[9 + 16 = 25]]. O lado de comprimento 5 é a hipotenusa, e os lados de comprimento 3 e 4 são os catetos.",
            },
            {
              "kind": "p",
              "text": "A calculadora escala esse triângulo por um fator de escala positivo [[k]], por isso os lados escalonados são [[a = 3k]], [[b = 4k]] e [[c = 5k]]. Também calcula a área, [[A = 6k^2]], e o perímetro, [[P = 12k]], por isso uma entrada dá os cinco resultados. Use a <a href=\"/right-triangle-calculator/\">calculadora de triângulo retângulo</a> para um triângulo retângulo geral.",
            },
            {
              "kind": "p",
              "text": "Por exemplo, com [[k = 2]] os lados passam a ser [[a = 6]], [[b = 8]] e [[c = 10]], a área é [[A = 24]] unidades quadradas e o perímetro é [[P = 24]] unidades.",
            },
          ],
          "h2": "Calculadora de Triângulo 3-4-5",
        },
        "sec-calculate": {
          "blocks": [
            {
              "kind": "p",
              "text": "Um modo, uma entrada e cinco resultados.",
            },
            {
              "kind": "p",
              "text": "A calculadora tem um único modo: escalar um triângulo 3-4-5. Introduza um fator de escala positivo [[k]] e clique em Calcular, e ela devolve os três comprimentos dos lados escalonados, a área e o perímetro. A tabela abaixo lista cada medida com a sua fórmula.",
            },
            {
              "kind": "p",
              "text": "O fator de escala [[k]] multiplica todos os lados originais. Com [[k = 1]] obtém o triângulo 3-4-5 original. Um valor acima de 1 amplia-o, e um valor entre 0 e 1 reduz-o. A calculadora pede [[k]] porque a razão fixa a forma: quando [[k]] é conhecido, todas as medidas seguem.",
            },
            {
              "kind": "p",
              "text": "Introduza apenas um número positivo. Se [[k = 0]], os três lados passam a zero, o que é uma figura degenerada e não um triângulo, e um [[k]] negativo não pode dar comprimentos de lado válidos. Depois de calcular, use Repor para limpar o campo antes de começar um novo problema.",
            },
          ],
          "h2": "Escalar um Triângulo 3-4-5 e Calcular as Suas Medidas",
          "table": {
            "headers": [
              "Medida",
              "Fórmula",
              "Resultado",
            ],
            "rows": [
              [
                "Primeiro cateto",
                "3k",
                "Lado escalonado a",
              ],
              [
                "Segundo cateto",
                "4k",
                "Lado escalonado b",
              ],
              [
                "Hipotenusa",
                "5k",
                "Lado escalonado c",
              ],
              [
                "Área",
                "6k²",
                "Área do triângulo",
              ],
              [
                "Perímetro",
                "12k",
                "Perímetro do triângulo",
              ],
            ],
          },
        },
        "sec-what": {
          "blocks": [
            {
              "kind": "p",
              "text": "Um triângulo 3-4-5 recebe o nome dos seus três comprimentos de lado.",
            },
            {
              "kind": "p",
              "text": "É um triângulo retângulo cujos comprimentos dos lados seguem a razão [[3 : 4 : 5]]. O lado mais comprido, 5, é a hipotenusa, e fica oposto ao ângulo de 90 graus. Os outros dois lados, 3 e 4, são os catetos, e encontram-se no ângulo reto. No triângulo ABC, o ângulo C é 90°, o lado [[a]] é o cateto menor, de comprimento 3, o lado [[b]] é o cateto maior, de comprimento 4, e o lado [[c]] é a hipotenusa, de comprimento 5.",
            },
            {
              "kind": "p",
              "text": "Chama-se terno pitagórico porque 3, 4 e 5 são números inteiros que satisfazem [[a^2 + b^2 = c^2]]. Essa propriedade de números inteiros torna o triângulo útil: construtores, professores e alunos podem verificar um ângulo reto com medidas comuns de números inteiros, sem raízes quadradas nem decimais. É o menor terno pitagórico, e cada cópia escalonada, como 6-8-10, também é um terno pitagórico.",
            },
          ],
          "h2": "O Que É um Triângulo 3-4-5?",
          "image": {
            "alt": "Triângulo retângulo 3-4-5 ABC legendado, com cateto menor a igual a 3, cateto maior b igual a 4, hipotenusa c igual a 5 e marcador de ângulo reto",
            "caption": "Triângulo ABC: os catetos a = 3 e b = 4 encontram-se no ângulo reto, e a hipotenusa é c = 5.",
            "src": "three-four-five-main.svg",
          },
        },
        "sec-pythagorean": {
          "blocks": [
            {
              "kind": "p",
              "text": "Os números 3, 4 e 5 satisfazem o teorema de Pitágoras exatamente.",
            },
            {
              "kind": "p",
              "text": "O teorema de Pitágoras afirma que, num triângulo retângulo, o quadrado da hipotenusa é igual à soma dos quadrados dos catetos:",
            },
            {
              "kind": "p",
              "text": "[[[a^2 + b^2 = c^2]]]",
            },
            {
              "kind": "p",
              "text": "Substitua os comprimentos dos lados 3-4-5:",
            },
            {
              "kind": "p",
              "text": "[[[3^2 + 4^2 = 5^2]]]",
            },
            {
              "kind": "p",
              "text": "Calcule cada quadrado:",
            },
            {
              "kind": "p",
              "text": "[[[9 + 16 = 25]]]",
            },
            {
              "kind": "p",
              "text": "Os dois lados são iguais a 25, por isso a equação mantém-se. Um terno pitagórico é um conjunto de três números inteiros que satisfaz esta equação, e 3-4-5 é o menor. A igualdade também funciona ao contrário: se um triângulo tem lados de comprimento 3, 4 e 5, o ângulo oposto ao lado de comprimento 5 tem de ser 90°.",
            },
            {
              "kind": "p",
              "text": "O lado de comprimento 5 tem de ser a hipotenusa porque é o lado mais comprido. Os lados de comprimento 3 e 4 têm de ser os catetos, porque se encontram no ângulo reto. A <a href=\"/pythagorean-triples-calculator/\">calculadora de ternos pitagóricos</a> lista outros ternos de números inteiros, incluindo 5-12-13, um terno diferente.",
            },
          ],
          "h2": "Porque É que 3-4-5 É um Terno Pitagórico?",
          "image": {
            "alt": "Diagrama pitagórico do triângulo 3-4-5 que mostra 3 ao quadrado mais 4 ao quadrado igual a 5 ao quadrado, com 9 mais 16 igual a 25",
            "caption": "3² + 4² = 5², visto que 9 + 16 = 25, por isso 3-4-5 é um terno pitagórico.",
            "src": "three-four-five-pythagoras.svg",
          },
        },
        "sec-sides": {
          "blocks": [
            {
              "kind": "p",
              "text": "Dois catetos encontram-se no ângulo reto, e a hipotenusa fica do lado oposto.",
            },
            {
              "kind": "p",
              "text": "O cateto menor [[a]] tem comprimento 3 no triângulo básico. É o lado BC no triângulo ABC, e fica oposto ao ângulo A, cerca de 36.87°. O cateto maior [[b]] tem comprimento 4, é o lado AC e fica oposto ao ângulo B, cerca de 53.13°. Os dois catetos encontram-se no vértice C, onde formam o ângulo de 90°.",
            },
            {
              "kind": "p",
              "text": "A hipotenusa [[c]] tem comprimento 5, é o lado AB e fica oposta ao ângulo de 90°. É o lado mais comprido, porque o maior ângulo fica sempre oposto ao lado mais comprido. Quando o triângulo é escalonado, os papéis nunca mudam: [[a]] continua a ser o cateto menor, [[b]] continua a ser o cateto maior e [[c]] continua a ser a hipotenusa.",
            },
          ],
          "h2": "Compreender os Três Lados de um Triângulo 3-4-5",
          "table": {
            "headers": [
              "Lado",
              "Ângulo oposto",
              "Comprimento",
            ],
            "rows": [
              [
                "Cateto menor a (BC)",
                "36.87°",
                "3",
              ],
              [
                "Cateto maior b (AC)",
                "53.13°",
                "4",
              ],
              [
                "Hipotenusa c (AB)",
                "90°",
                "5, lado mais comprido",
              ],
            ],
          },
        },
        "sec-ratio": {
          "blocks": [
            {
              "kind": "p",
              "text": "A razão 3:4:5 fixa a forma de todos os triângulos 3-4-5.",
            },
            {
              "kind": "p",
              "text": "A razão dos lados de um triângulo 3-4-5 é:",
            },
            {
              "kind": "p",
              "text": "[[[a : b : c = 3 : 4 : 5]]]",
            },
            {
              "kind": "p",
              "text": "Cada parte da razão descreve um lado. O cateto menor representa 3 unidades proporcionais, o cateto maior representa 4 unidades proporcionais e a hipotenusa representa 5 unidades proporcionais. Escritos com o fator de escala [[k]], os três lados são [[a = 3k]], [[b = 4k]] e [[c = 5k]], por isso a razão na forma escalonada é [[3k : 4k : 5k]].",
            },
            {
              "kind": "p",
              "text": "A razão não muda quando o triângulo é ampliado ou reduzido, porque multiplicar os três lados pelo mesmo número deixa as suas proporções intactas. Os conjuntos 3, 4, 5 e 6, 8, 10 e 9, 12, 15 e 15, 20, 25 representam todos a mesma forma de triângulo em tamanhos diferentes.",
            },
          ],
          "h2": "Compreender a Razão dos Lados 3-4-5",
          "image": {
            "alt": "Três triângulos 3-4-5 semelhantes de tamanhos diferentes, legendados 3-4-5, 6-8-10 e 9-12-15, com as mesmas proporções",
            "caption": "3-4-5, 6-8-10 e 9-12-15 têm a mesma forma e a mesma razão 3:4:5.",
            "src": "three-four-five-scaled.svg",
          },
        },
        "sec-scale-factor": {
          "blocks": [
            {
              "kind": "p",
              "text": "O fator de escala multiplica todos os lados pelo mesmo número.",
            },
            {
              "kind": "p",
              "text": "Um fator de escala [[k]] multiplica os três comprimentos dos lados originais pelo mesmo número positivo. Os lados escalonados são:",
            },
            {
              "kind": "p",
              "text": "[[[a = 3k, \\quad b = 4k, \\quad c = 5k]]]",
            },
            {
              "kind": "p",
              "text": "Com [[k = 1]] obtém o triângulo original, 3, 4, 5. Um valor de [[k]] maior do que 1 amplia-o, e um valor entre 0 e 1 reduz-o, por exemplo [[k = 0.5]] dá 1.5, 2, 2.5. O fator de escala tem de ser positivo: zero não dá triângulo, e um valor negativo não pode dar comprimentos de lado válidos.",
            },
            {
              "kind": "p",
              "text": "O fator de escala muda o tamanho, não a forma. Todos os comprimentos dos lados correspondentes mantêm-se proporcionais, os ângulos mantêm-se iguais e a razão continua a ser 3:4:5. A tabela acima mostra como os lados, a área e o perímetro mudam com [[k]]: o perímetro cresce com [[k]], enquanto a área cresce com [[k]] ao quadrado.",
            },
          ],
          "h2": "O Que É o Fator de Escala num Triângulo 3-4-5?",
          "image": {
            "alt": "Triângulo 3-4-5 escalonado com fator de escala k igual a 2, com lados legendados a igual a 6, b igual a 8 e c igual a 10",
            "caption": "Com k = 2, os lados são a = 6, b = 8 e c = 10.",
            "src": "three-four-five-scale-factor.svg",
          },
          "table": {
            "headers": [
              "Fator de escala k",
              "Lados",
              "Área",
              "Perímetro",
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
        },
        "sec-leg-a": {
          "blocks": [
            {
              "kind": "p",
              "text": "O cateto menor é três vezes o fator de escala.",
            },
            {
              "kind": "p",
              "text": "[[[a = 3k]]]",
            },
            {
              "kind": "p",
              "text": "Aqui, [[a]] é o cateto menor e [[k]] é o fator de escala. A fórmula é uma leitura direta da razão: o cateto menor representa 3 unidades por cada unidade de [[k]], por isso multiplicar 3 por [[k]] dá o comprimento escalonado. Use [[k = 4]]:",
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
              "text": "O resultado é um comprimento de lado escalonado, não um ângulo nem um fator de escala. É sempre mais curto do que os outros dois lados, porque 3 é a menor parte da razão 3:4:5, e continua a ser o cateto menor em todos os fatores de escala positivos.",
            },
          ],
          "h2": "Fórmula para Calcular o Primeiro Cateto",
        },
        "sec-leg-b": {
          "blocks": [
            {
              "kind": "p",
              "text": "O cateto maior é quatro vezes o fator de escala.",
            },
            {
              "kind": "p",
              "text": "[[[b = 4k]]]",
            },
            {
              "kind": "p",
              "text": "Aqui, [[b]] é o cateto maior e [[k]] é o fator de escala. O cateto maior representa 4 unidades por cada unidade de [[k]], por isso multiplicar 4 por [[k]] dá o comprimento escalonado. Use [[k = 4]]:",
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
              "text": "Este lado continua a ser mais comprido do que o primeiro cateto em todos os fatores de escala positivos, porque 4 é maior do que 3 e os dois lados são multiplicados pelo mesmo [[k]]. Também continua a ser mais curto do que a hipotenusa, porque 4 é menor do que 5. Mantenha os dois catetos na ordem certa: [[a]] é o lado 3 e [[b]] é o lado 4.",
            },
          ],
          "h2": "Fórmula para Calcular o Segundo Cateto",
        },
        "sec-hypotenuse": {
          "blocks": [
            {
              "kind": "p",
              "text": "A hipotenusa é cinco vezes o fator de escala.",
            },
            {
              "kind": "p",
              "text": "[[[c = 5k]]]",
            },
            {
              "kind": "p",
              "text": "Aqui, [[c]] é a hipotenusa e [[k]] é o fator de escala. A hipotenusa representa 5 unidades por cada unidade de [[k]], por isso multiplicar 5 por [[k]] dá o comprimento escalonado. Use [[k = 4]]:",
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
              "text": "A hipotenusa continua a ser o lado mais comprido em todos os fatores de escala positivos, porque 5 é a maior parte da razão. Verifique-a com os catetos: com [[k = 4]] os lados são 12, 16 e 20, e [[12^2 + 16^2 = 144 + 256 = 400 = 20^2]], por isso o teorema de Pitágoras confirma o resultado.",
            },
          ],
          "h2": "Fórmula para Calcular a Hipotenusa",
        },
        "sec-area": {
          "blocks": [
            {
              "kind": "p",
              "text": "A área usa os dois catetos, e o fator de escala é elevado ao quadrado.",
            },
            {
              "kind": "p",
              "text": "A área de qualquer triângulo retângulo é metade do produto dos seus dois catetos, porque os catetos atuam como a base e a altura perpendicular:",
            },
            {
              "kind": "p",
              "text": "[[[A = \\frac{ab}{2}]]]",
            },
            {
              "kind": "p",
              "text": "Substitua os catetos escalonados, [[a = 3k]] e [[b = 4k]]:",
            },
            {
              "kind": "p",
              "text": "[[[A = \\frac{(3k)(4k)}{2}]]]",
            },
            {
              "kind": "p",
              "text": "Simplifique:",
            },
            {
              "kind": "p",
              "text": "[[[A = 6k^2]]]",
            },
            {
              "kind": "p",
              "text": "A divisão por dois é necessária porque um triângulo cobre metade do retângulo formado pelos seus dois catetos. O fator [[k]] é elevado ao quadrado porque os dois catetos têm um fator de [[k]]. A área é medida em unidades quadradas. Dobrar o fator de escala quadruplica a área: com [[k = 2]] a área é 24 unidades quadradas, quatro vezes as 6 unidades quadradas com [[k = 1]]. Para um triângulo retângulo geral, use a <a href=\"/right-triangle-area-calculator/\">calculadora de área de triângulo retângulo</a>.",
            },
            {
              "kind": "p",
              "text": "Use [[k = 3]]:",
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
          "h2": "Como Calcular a Área de um Triângulo 3-4-5 Escalonado",
          "image": {
            "alt": "Diagrama da área de um triângulo 3-4-5 com base 3k, altura 4k e área 6k ao quadrado, que mostra que k igual a 2 dá 24 unidades quadradas",
            "caption": "Área a partir da base 3k e da altura 4k: A = 6k², e k = 2 dá 24 unidades quadradas.",
            "src": "three-four-five-area.svg",
          },
        },
        "sec-perimeter": {
          "blocks": [
            {
              "kind": "p",
              "text": "Some os três lados, e o perímetro escala com k.",
            },
            {
              "kind": "p",
              "text": "O perímetro é o comprimento total à volta do triângulo:",
            },
            {
              "kind": "p",
              "text": "[[[P = a + b + c]]]",
            },
            {
              "kind": "p",
              "text": "Substitua os lados escalonados:",
            },
            {
              "kind": "p",
              "text": "[[[P = 3k + 4k + 5k]]]",
            },
            {
              "kind": "p",
              "text": "Simplifique:",
            },
            {
              "kind": "p",
              "text": "[[[P = 12k]]]",
            },
            {
              "kind": "p",
              "text": "Os três lados têm de ser somados, porque o perímetro percorre toda a fronteira. Deixar de fora qualquer lado dá uma distância mais curta que não é o perímetro. O perímetro escala diretamente com [[k]], por isso dobrar [[k]] duplica o perímetro, ao contrário da área, que quadruplica. O perímetro é em unidades lineares, nunca em unidades quadradas. Para um triângulo retângulo geral, use a <a href=\"/right-triangle-perimeter-calculator/\">calculadora de perímetro de triângulo retângulo</a>.",
            },
            {
              "kind": "p",
              "text": "Use [[k = 3]]:",
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
          "h2": "Como Calcular o Perímetro de um Triângulo 3-4-5 Escalonado",
          "image": {
            "alt": "Diagrama do perímetro de um triângulo 3-4-5 que mostra P igual a 3k mais 4k mais 5k igual a 12k, com k igual a 2 a dar 24 unidades",
            "caption": "Perímetro: P = 3k + 4k + 5k = 12k, e k = 2 dá 24 unidades.",
            "src": "three-four-five-perimeter.svg",
          },
        },
        "sec-find-k": {
          "blocks": [
            {
              "kind": "p",
              "text": "Divida um lado conhecido pela sua parte da razão.",
            },
            {
              "kind": "p",
              "text": "A calculadora aceita [[k]] diretamente, por isso estas equações são cálculos manuais que ajudam a encontrar [[k]] quando já conhece um lado. Divida o lado conhecido pelo número que esse lado representa na razão 3:4:5. Se o cateto menor for conhecido:",
            },
            {
              "kind": "p",
              "text": "[[[k = \\frac{a}{3}]]]",
            },
            {
              "kind": "p",
              "text": "Se o cateto maior for conhecido:",
            },
            {
              "kind": "p",
              "text": "[[[k = \\frac{b}{4}]]]",
            },
            {
              "kind": "p",
              "text": "Se a hipotenusa for conhecida:",
            },
            {
              "kind": "p",
              "text": "[[[k = \\frac{c}{5}]]]",
            },
            {
              "kind": "p",
              "text": "Três exemplos curtos: o cateto menor [[a = 12]] dá [[k = 12 / 3 = 4]]; o cateto maior [[b = 20]] dá [[k = 20 / 4 = 5]]; a hipotenusa [[c = 30]] dá [[k = 30 / 5 = 6]]. Quando tiver [[k]], introduza-o na calculadora. A calculadora, por si só, não aceita um comprimento de lado para encontrar [[k]].",
            },
          ],
          "h2": "Como Encontrar o Fator de Escala a Partir de um Lado Conhecido",
        },
        "sec-step-example": {
          "blocks": [
            {
              "kind": "p",
              "text": "Fator de escala k = 2, resolvido do princípio ao fim.",
            },
            {
              "kind": "p",
              "text": "Comece com [[k = 2]] e encontre todas as medidas do triângulo escalonado, uma fórmula de cada vez. Cada passo usa uma fórmula das secções acima, e a tabela de resumo no fim reúne os resultados.",
            },
            {
              "kind": "steps",
              "steps": [
                "Encontre o primeiro cateto: [[a = 3k = 3 \\times 2 = 6]].",
                "Encontre o segundo cateto: [[b = 4k = 4 \\times 2 = 8]].",
                "Encontre a hipotenusa: [[c = 5k = 5 \\times 2 = 10]].",
                "Encontre a área: [[A = 6k^2 = 6 \\times 4 = 24]] unidades quadradas.",
                "Encontre o perímetro: [[P = 12k = 12 \\times 2 = 24]] unidades.",
              ],
            },
            {
              "kind": "p",
              "text": "O novo triângulo mantém as proporções originais 3:4:5: 6, 8 e 10 são todos o dobro de 3, 4 e 5. Verifique o ângulo reto com Pitágoras: [[6^2 + 8^2 = 36 + 64 = 100 = 10^2]]. A área e o perímetro partilham o número 24 aqui, mas medem coisas diferentes.",
            },
          ],
          "h2": "Exemplo Passo a Passo de Escalonamento de um Triângulo 3-4-5",
          "table": {
            "headers": [
              "Medida",
              "Valor",
            ],
            "rows": [
              [
                "Primeiro cateto a",
                "6",
              ],
              [
                "Segundo cateto b",
                "8",
              ],
              [
                "Hipotenusa c",
                "10",
              ],
              [
                "Área A",
                "24 unidades quadradas",
              ],
              [
                "Perímetro P",
                "24 unidades",
              ],
            ],
          },
        },
        "sec-examples": {
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
              "text": "Dado [[k = 1]]. Lados: [[a = 3]], [[b = 4]], [[c = 5]]. Área: [[A = 6(1^2) = 6]] unidades quadradas. Perímetro: [[P = 12(1) = 12]] unidades.",
            },
            {
              "kind": "h3",
              "text": "Exemplo 2: Fator de Escala de 2",
            },
            {
              "kind": "p",
              "text": "Dado [[k = 2]]. Lados: [[a = 6]], [[b = 8]], [[c = 10]]. Área: [[A = 6(2^2) = 24]] unidades quadradas. Perímetro: [[P = 12(2) = 24]] unidades. Dobrar [[k]] duplica os lados e o perímetro, e quadruplica a área.",
            },
            {
              "kind": "h3",
              "text": "Exemplo 3: Fator de Escala de 3",
            },
            {
              "kind": "p",
              "text": "Dado [[k = 3]]. Lados: [[a = 9]], [[b = 12]], [[c = 15]]. Área: [[A = 6(3^2) = 54]] unidades quadradas. Perímetro: [[P = 12(3) = 36]] unidades.",
            },
            {
              "kind": "h3",
              "text": "Exemplo 4: Fator de Escala de 5",
            },
            {
              "kind": "p",
              "text": "Dado [[k = 5]]. Lados: [[a = 15]], [[b = 20]], [[c = 25]]. Área: [[A = 6(5^2) = 150]] unidades quadradas. Perímetro: [[P = 12(5) = 60]] unidades. Este triângulo 15-20-25 é um tamanho comum na planta de construção.",
            },
            {
              "kind": "h3",
              "text": "Exemplo 5: Fator de Escala de 0.5",
            },
            {
              "kind": "p",
              "text": "Dado [[k = 0.5]]. Lados: [[a = 1.5]], [[b = 2]], [[c = 2.5]]. Área: [[A = 6(0.5^2) = 1.5]] unidades quadradas. Perímetro: [[P = 12(0.5) = 6]] unidades. Um fator de escala abaixo de 1 reduz o triângulo.",
            },
            {
              "kind": "h3",
              "text": "Exemplo 6: Fator de Escala de 1.5",
            },
            {
              "kind": "p",
              "text": "Dado [[k = 1.5]]. Lados: [[a = 4.5]], [[b = 6]], [[c = 7.5]]. Área: [[A = 6(1.5^2) = 13.5]] unidades quadradas. Perímetro: [[P = 12(1.5) = 18]] unidades. Fatores de escala decimais funcionam exatamente como os de números inteiros.",
            },
            {
              "kind": "h3",
              "text": "Exemplo 7: Fator de Escala de 4",
            },
            {
              "kind": "p",
              "text": "Dado [[k = 4]]. Lados: [[a = 12]], [[b = 16]], [[c = 20]]. Área: [[A = 6(4^2) = 96]] unidades quadradas. Perímetro: [[P = 12(4) = 48]] unidades.",
            },
            {
              "kind": "h3",
              "text": "Exemplo 8: Fator de Escala de 10",
            },
            {
              "kind": "p",
              "text": "Dado [[k = 10]]. Lados: [[a = 30]], [[b = 40]], [[c = 50]]. Área: [[A = 6(10^2) = 600]] unidades quadradas. Perímetro: [[P = 12(10) = 120]] unidades. A área cresceu por um fator de 100, enquanto os lados cresceram por um fator de 10.",
            },
            {
              "kind": "p",
              "text": "Em todos os oito exemplos, o padrão nunca muda: os lados crescem com [[k]], o perímetro cresce com [[k]] e a área cresce com [[k]] ao quadrado.",
            },
          ],
          "h2": "Exemplos Resolvidos com Diferentes Fatores de Escala",
        },
        "sec-right-angle": {
          "blocks": [
            {
              "kind": "p",
              "text": "O escalonamento nunca quebra a relação pitagórica.",
            },
            {
              "kind": "p",
              "text": "Os lados escalonados são [[3k]], [[4k]] e [[5k]]. Aplique-lhes o teorema de Pitágoras:",
            },
            {
              "kind": "p",
              "text": "[[[(3k)^2 + (4k)^2 = (5k)^2]]]",
            },
            {
              "kind": "p",
              "text": "Expanda cada quadrado:",
            },
            {
              "kind": "p",
              "text": "[[[9k^2 + 16k^2 = 25k^2]]]",
            },
            {
              "kind": "p",
              "text": "Os dois lados são iguais a [[25k^2]], por isso a relação mantém-se para todos os [[k]] positivos. O fator [[k^2]] aparece nos dois lados, e é por isso que o escalonamento não pode mudar o ângulo. Os dois ângulos agudos mantêm-se em cerca de 36.87° e 53.13°, e a sua soma mantém-se em 90°, por isso o terceiro ângulo mantém-se exatamente em 90°.",
            },
            {
              "kind": "p",
              "text": "Esta é a mesma ideia da semelhança: todos os triângulos 3-4-5 escalonados são semelhantes ao original, com ângulos correspondentes iguais e lados proporcionais. Um triângulo com lados 6, 8, 10 tem os mesmos ângulos que um triângulo com lados 3, 4, 5.",
            },
          ],
          "h2": "Porque É que o Triângulo 3-4-5 Mantém Sempre um Ângulo de 90 Graus?",
        },
        "sec-construction": {
          "blocks": [
            {
              "kind": "p",
              "text": "Marque 3, meça 4 e verifique se a diagonal é 5.",
            },
            {
              "kind": "p",
              "text": "Os construtores usam o método 3-4-5 para verificar um canto de 90 graus sem uma ferramenta de esquadro. Comece no canto e marque 3 unidades ao longo de um lado, depois marque 4 unidades ao longo do lado adjacente. Meça a distância entre os dois pontos marcados: se for 5 unidades, o ângulo é de 90 graus, sujeito à precisão da medição.",
            },
            {
              "kind": "p",
              "text": "Um exemplo prático usa pés: 3 pés numa direção, 4 pés na direção adjacente e uma diagonal de 5 pés. A verificação é [[3^2 + 4^2 = 5^2]], visto que [[9 + 16 = 25]]. Se a diagonal for maior do que 5 pés, o canto é mais aberto do que 90 graus; se for menor, é mais fechado.",
            },
            {
              "kind": "p",
              "text": "Múltiplos maiores funcionam melhor em plantas maiores, porque uma base mais comprida torna um pequeno erro de marcação uma parte menor da medição. Use 6-8-10, 9-12-15, 12-16-20 ou 15-20-25 pés, mantendo a mesma unidade nas três medições.",
            },
            {
              "kind": "p",
              "text": "O método verifica a relação do ângulo reto quando as medições são exatas. Erros, superfícies irregulares, a curvatura da fita e imprecisões de marcação podem afetar o resultado, por isso não afirme que garante uma precisão de construção perfeita. Mantenha a fita nivelada e esticada, e repita a verificação a partir do outro canto quando a planta o permitir.",
            },
          ],
          "h2": "Como Usar a Regra 3-4-5 para Verificar um Canto Quadrado",
          "image": {
            "alt": "Planta de construção que mostra um canto com 3 pés marcados numa direção, 4 pés na direção adjacente e uma diagonal de 5 pés com marcador de ângulo reto",
            "caption": "Marque 3 pés num sentido e 4 pés no outro: uma diagonal de 5 pés significa um canto quadrado.",
            "src": "three-four-five-construction.svg",
          },
        },
        "sec-applications": {
          "blocks": [
            {
              "kind": "p",
              "text": "A regra 3-4-5 aparece onde quer que um canto quadrado importe.",
            },
            {
              "kind": "p",
              "text": "Verificar cantos de ângulo reto é o uso principal: um construtor marca 3 e 4 unidades a partir de um canto e verifica a diagonal de 5 unidades antes de fixar uma estrutura no lugar. A marcação de fundações usa a mesma verificação em cada canto, para que as paredes comecem quadradas.",
            },
            {
              "kind": "p",
              "text": "A marcação de plantas de pisos, a verificação de divisões quadradas, a construção de decks, a instalação de pátios e a colocação de azulejos dependem todos de cantos quadrados, e o método funciona para cada um deles na escala que se adequar ao trabalho. A marcação de vedações, a carpintaria, o paisagismo e a topografia usam a mesma verificação para ângulos retos.",
            },
            {
              "kind": "p",
              "text": "Use medidas realistas para o trabalho, como 3-4-5 pés para uma estrutura pequena ou 9-12-15 pés para o canto de uma fundação. O método é uma verificação prática, não um substituto dos requisitos profissionais de topografia ou de construção.",
            },
          ],
          "h2": "Aplicações do Triângulo 3-4-5 na Construção",
        },
        "sec-similar": {
          "blocks": [
            {
              "kind": "p",
              "text": "Todos os triângulos 3-4-5 escalonados são semelhantes ao original.",
            },
            {
              "kind": "p",
              "text": "Triângulos semelhantes têm a mesma forma mas tamanhos diferentes: os seus ângulos correspondentes são iguais e os seus lados correspondentes são proporcionais. Os triângulos 3-4-5 e 6-8-10 têm ângulos idênticos, cerca de 36.87°, 53.13° e 90°, e cada lado do segundo é exatamente o dobro do lado correspondente do primeiro.",
            },
            {
              "kind": "p",
              "text": "O fator de escala muda o tamanho enquanto a forma se mantém. Todas as razões dos lados mantêm-se 3:4:5, por isso [[a : b : c = 3 : 4 : 5]] vale para o original e para todas as cópias escalonadas. É por isso que a calculadora consegue descrever qualquer triângulo 3-4-5 escalonado com um número, [[k]].",
            },
          ],
          "h2": "Relação Entre Triângulos Semelhantes e a Razão 3-4-5",
        },
        "sec-vs-special": {
          "blocks": [
            {
              "kind": "p",
              "text": "Três triângulos retângulos, três razões de lados diferentes.",
            },
            {
              "kind": "p",
              "text": "Um triângulo 3-4-5 não é automaticamente um triângulo 45-45-90 nem um triângulo 30-60-90. Os três são triângulos retângulos, mas os seus ângulos e as suas razões de lados diferem, por isso as suas fórmulas não podem ser trocadas. O triângulo 3-4-5 tem catetos desiguais e lados de números inteiros, o triângulo 45-45-90 é isósceles com uma hipotenusa de [[a\\sqrt{2}]] e o triângulo 30-60-90 tem uma hipotenusa que é o dobro do seu cateto menor. A <a href=\"/special-right-triangle-calculator/\">calculadora de triângulo retângulo especial</a> cobre os casos 45-45-90 e 30-60-90, enquanto a <a href=\"/5-12-13-triangle-calculator/\">calculadora de triângulo 5-12-13</a> cobre um terno pitagórico diferente.",
            },
            {
              "kind": "p",
              "text": "A tabela abaixo compara os três triângulos lado a lado. Confirme primeiro os ângulos e depois escolha a razão que lhes corresponde: a razão errada dá uma hipotenusa errada e uma área errada.",
            },
          ],
          "h2": "Diferença Entre Triângulos 3-4-5, 45-45-90 e 30-60-90",
          "image": {
            "alt": "Comparação dos ternos pitagóricos 3-4-5, 6-8-10 e 5-12-13, que mostra que 6-8-10 é um 3-4-5 escalonado, enquanto 5-12-13 é um terno diferente",
            "caption": "6-8-10 é um 3-4-5 escalonado, enquanto 5-12-13 é um terno pitagórico diferente.",
            "src": "three-four-five-triples.svg",
          },
          "table": {
            "headers": [
              "Característica",
              "3-4-5",
              "45-45-90",
              "30-60-90",
            ],
            "rows": [
              [
                "Razão dos lados",
                "3:4:5",
                "1:1:√2",
                "1:√3:2",
              ],
              [
                "Ângulos",
                "36.87°, 53.13°, 90°",
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
                "Hipotenusa",
                "5k",
                "a√2",
                "2a",
              ],
              [
                "Propriedade principal",
                "Terno pitagórico",
                "Triângulo retângulo isósceles",
                "Razão especial de ângulos",
              ],
              [
                "Foco da calculadora",
                "Escalonamento",
                "Cálculos de triângulos especiais",
                "Cálculos de triângulos especiais",
              ],
            ],
          },
        },
        "sec-mistakes": {
          "blocks": [
            {
              "kind": "p",
              "text": "Catorze erros aparecem vezes sem conta em problemas 3-4-5.",
            },
            {
              "kind": "steps",
              "steps": [
                "Multiplicar apenas um lado pelo fator de escala: com [[k = 2]] os lados são 6, 8 e 10, e não 6, 4 e 5. Escale os três lados pelo mesmo [[k]].",
                "Esquecer-se de escalar os três lados por igual: escalar apenas os catetos quebra a razão e o ângulo reto. Aplique o mesmo [[k]] a todos os lados.",
                "Tratar o 5 como um cateto em vez da hipotenusa: 5 é o lado mais comprido e fica oposto ao ângulo de 90°. [[c = 5k]] é sempre a hipotenusa.",
                "Confundir o fator de escala com um comprimento de lado: [[k]] é o multiplicador, não um lado. Com [[k = 2]] os lados são 6, 8 e 10.",
                "Usar zero como um fator de escala válido: [[k = 0]] torna os três lados zero, uma figura degenerada, não um triângulo. [[k]] tem de ser maior do que zero.",
                "Introduzir um fator de escala negativo: um [[k]] negativo dá comprimentos de lado negativos, que não podem descrever um triângulo. Introduza apenas um [[k]] positivo.",
                "Esquecer-se de elevar k ao quadrado na fórmula da área: a área cresce com [[k]] ao quadrado. Com [[k = 3]], [[A = 6 \\times 9 = 54]], e não 18.",
                "Confundir a área com o perímetro: a área é em unidades quadradas e o perímetro é em unidades lineares. Com [[k = 2]] ambos são iguais a 24, mas medem coisas diferentes.",
                "Somar apenas dois lados ao calcular o perímetro: com [[k = 2]], [[6 + 8 = 14]] deixa de fora a hipotenusa. Some os três lados.",
                "Misturar unidades de medida: um cateto em pés e uma diagonal em polegadas não podem ser combinados diretamente. Converta todas as medidas para uma unidade primeiro.",
                "Assumir que só 3, 4 e 5 funcionam: qualquer cópia escalonada, como 6-8-10 ou 9-12-15, é um triângulo 3-4-5 válido.",
                "Assumir que todos os triângulos retângulos seguem a razão 3:4:5: a maioria dos triângulos retângulos tem outras razões. Confirme a razão antes de usar as fórmulas.",
                "Confundir um triângulo 3-4-5 com um triângulo 45-45-90: um triângulo 3-4-5 tem ângulos de cerca de 36.87° e 53.13°, e não dois ângulos de 45°.",
                "Arredondar medidas sem necessidade: arredondar cedo arrasta erros para os passos seguintes. Arredonde apenas a resposta final.",
              ],
            },
          ],
          "h2": "Erros Comuns ao Usar a Calculadora de Triângulo 3-4-5",
        },
        "sec-verify": {
          "blocks": [
            {
              "kind": "p",
              "text": "Quatro verificações rápidas apanham quase todos os erros.",
            },
            {
              "kind": "h3",
              "text": "Verificação 1: Razão dos Lados",
            },
            {
              "kind": "p",
              "text": "Confirme [[a : b : c = 3 : 4 : 5]]. Aqui, [[6 : 8 : 10]] divide-se por 2 para dar [[3 : 4 : 5]], por isso a verificação passa. Se os lados não se reduzirem a 3:4:5, não são um triângulo 3-4-5 escalonado.",
            },
            {
              "kind": "h3",
              "text": "Verificação 2: Teorema de Pitágoras",
            },
            {
              "kind": "p",
              "text": "Confirme [[a^2 + b^2 = c^2]]. Aqui, [[6^2 + 8^2 = 36 + 64 = 100]], e [[10^2 = 100]], por isso o teorema mantém-se. Um valor errado para qualquer lado quebra esta igualdade.",
            },
            {
              "kind": "h3",
              "text": "Verificação 3: Consistência do Fator de Escala",
            },
            {
              "kind": "p",
              "text": "Confirme [[\\frac{a}{3} = \\frac{b}{4} = \\frac{c}{5} = k]]. Aqui, cada divisão dá 2, por isso [[k = 2]] a partir dos três lados. Se as três divisões diferirem, pelo menos um lado está errado.",
            },
            {
              "kind": "h3",
              "text": "Verificação 4: Ordem dos Lados",
            },
            {
              "kind": "p",
              "text": "Confirme [[a < b < c]]. Aqui, [[6 < 8 < 10]], por isso a ordem mantém-se. Se a suposta hipotenusa não for o lado mais comprido, as etiquetas estão trocadas.",
            },
          ],
          "h2": "Como Verificar um Triângulo 3-4-5 Escalonado",
        },
        "sec-practice": {
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
              "text": "Escale um triângulo 3-4-5 usando [[k = 2]]. Encontre os três comprimentos dos lados, a área e o perímetro.",
            },
            {
              "kind": "h3",
              "text": "Problema 2: Escalonar com k = 4",
            },
            {
              "kind": "p",
              "text": "Escale um triângulo 3-4-5 usando [[k = 4]]. Encontre os três comprimentos dos lados, a área e o perímetro.",
            },
            {
              "kind": "h3",
              "text": "Problema 3: Área com k = 3",
            },
            {
              "kind": "p",
              "text": "Encontre a área de um triângulo 3-4-5 escalonado com [[k = 3]], em unidades quadradas.",
            },
            {
              "kind": "h3",
              "text": "Problema 4: Perímetro com k = 5",
            },
            {
              "kind": "p",
              "text": "Encontre o perímetro de um triângulo 3-4-5 escalonado com [[k = 5]], em unidades.",
            },
            {
              "kind": "h3",
              "text": "Problema 5: Encontrar k a Partir de a = 15",
            },
            {
              "kind": "p",
              "text": "Um triângulo 3-4-5 escalonado tem um cateto menor de 15. Encontre [[k]] e os outros dois lados.",
            },
            {
              "kind": "h3",
              "text": "Problema 6: Encontrar k a Partir de b = 24",
            },
            {
              "kind": "p",
              "text": "Um triângulo 3-4-5 escalonado tem um cateto maior de 24. Encontre [[k]] e os outros dois lados.",
            },
            {
              "kind": "h3",
              "text": "Problema 7: Encontrar k a Partir de c = 35",
            },
            {
              "kind": "p",
              "text": "Um triângulo 3-4-5 escalonado tem uma hipotenusa de 35. Encontre [[k]] e os dois catetos.",
            },
            {
              "kind": "h3",
              "text": "Problema 8: Verificar 12, 16 e 20",
            },
            {
              "kind": "p",
              "text": "Verifique se 12, 16 e 20 formam um triângulo 3-4-5 escalonado, usando o teorema de Pitágoras e a razão dos lados. Se formarem, indique o fator de escala.",
            },
            {
              "kind": "h3",
              "text": "Respostas dos Problemas de Prática",
            },
            {
              "kind": "p",
              "text": "Resposta 1: [[a = 6]], [[b = 8]], [[c = 10]], [[A = 24]] unidades quadradas, [[P = 24]] unidades.",
            },
            {
              "kind": "p",
              "text": "Resposta 2: [[a = 12]], [[b = 16]], [[c = 20]], [[A = 96]] unidades quadradas, [[P = 48]] unidades.",
            },
            {
              "kind": "p",
              "text": "Resposta 3: [[A = 6(3^2) = 54]] unidades quadradas.",
            },
            {
              "kind": "p",
              "text": "Resposta 4: [[P = 12(5) = 60]] unidades.",
            },
            {
              "kind": "p",
              "text": "Resposta 5: [[k = 15 / 3 = 5]], por isso [[b = 20]] e [[c = 25]].",
            },
            {
              "kind": "p",
              "text": "Resposta 6: [[k = 24 / 4 = 6]], por isso [[a = 18]] e [[c = 30]].",
            },
            {
              "kind": "p",
              "text": "Resposta 7: [[k = 35 / 5 = 7]], por isso [[a = 21]] e [[b = 28]].",
            },
            {
              "kind": "p",
              "text": "Resposta 8: [[12^2 + 16^2 = 144 + 256 = 400 = 20^2]], e [[12 : 16 : 20]] divide-se por 4 para dar [[3 : 4 : 5]], por isso sim, com [[k = 4]].",
            },
          ],
          "h2": "Problemas de Prática com Respostas",
        },
      },
      "relatedHeading": "Calculadoras de Triângulos Retângulos Relacionadas",
      "relatedIntro": "Cada calculadora abaixo trata uma tarefa diferente com triângulos retângulos, por isso escolha a ferramenta que corresponde à medida de que precisa.",
      "relatedItems": [
        "Calculadora de Triângulo Retângulo",
        "Calculadora de Ternos Pitagóricos",
        "Calculadora de Triângulo 5-12-13",
        "Calculadora de Triângulo Retângulo Especial",
        "Calculadora de Área de Triângulo Retângulo",
        "Calculadora de Perímetro de Triângulo Retângulo",
      ],
      "faqHeading": "Perguntas Frequentes",
      "faqs": [
        {
          "answer": "Um triângulo 3-4-5 é um triângulo retângulo cujos comprimentos dos lados seguem a razão [[3 : 4 : 5]]. Os lados de comprimento 3 e 4 são os catetos, que se encontram no ângulo de 90 graus, e o lado de comprimento 5 é a hipotenusa. É o menor terno pitagórico.",
          "question": "O que é um triângulo 3-4-5?",
        },
        {
          "answer": "Os seus lados satisfazem o teorema de Pitágoras: [[3^2 + 4^2 = 5^2]], visto que [[9 + 16 = 25]]. Essa igualdade só vale para triângulos retângulos, por isso o ângulo oposto ao lado de comprimento 5 tem de ser 90 graus. O escalonamento mantém a igualdade, por isso todas as cópias escalonadas mantêm o ângulo reto.",
          "question": "Porque é que um triângulo 3-4-5 forma um ângulo reto?",
        },
        {
          "answer": "A regra é que comprimentos de lado na razão [[3 : 4 : 5]] formam sempre um triângulo retângulo. Os construtores usam-na para verificar cantos quadrados: marque 3 unidades num sentido, 4 unidades no outro sentido e, se a diagonal for 5 unidades, o canto é quadrado, sujeito à precisão da medição.",
          "question": "O que é a regra do triângulo 3-4-5?",
        },
        {
          "answer": "Introduza um fator de escala positivo [[k]] e clique em Calcular. A calculadora multiplica os lados originais por [[k]] para dar [[a = 3k]], [[b = 4k]] e [[c = 5k]], e depois calcula a área [[A = 6k^2]] e o perímetro [[P = 12k]]. Use Repor para limpar o campo.",
          "question": "Como funciona a calculadora de triângulo 3-4-5?",
        },
        {
          "answer": "O fator de escala [[k]] é o número que multiplica os três comprimentos dos lados originais pela mesma quantidade. Com [[k = 1]] obtém o triângulo original, um [[k]] maior amplia-o e um [[k]] entre 0 e 1 reduz-o. A forma e os ângulos mantêm-se iguais.",
          "question": "O que é o fator de escala num triângulo 3-4-5?",
        },
        {
          "answer": "Multiplique cada parte da razão por [[k]]: [[a = 3k]], [[b = 4k]] e [[c = 5k]]. Com [[k = 2]] os lados são 6, 8 e 10. Todos os lados têm de usar o mesmo [[k]], ou a razão quebra-se e o triângulo perde o seu ângulo reto.",
          "question": "Como calculo os lados de um triângulo 3-4-5 escalonado?",
        },
        {
          "answer": "Use os catetos em [[A = \\frac{ab}{2}]], que se simplifica para [[A = 6k^2]] num triângulo 3-4-5 escalonado. Com [[k = 3]], [[A = 6 \\times 9 = 54]] unidades quadradas. A área é sempre em unidades quadradas, e cresce com o quadrado de [[k]].",
          "question": "Como calculo a sua área?",
        },
        {
          "answer": "Some os três lados com [[P = a + b + c]], que se simplifica para [[P = 12k]]. Com [[k = 3]], [[P = 36]] unidades. O perímetro cresce diretamente com [[k]], por isso dobrar [[k]] duplica o perímetro. A resposta é em unidades lineares, não em unidades quadradas.",
          "question": "Como calculo o seu perímetro?",
        },
        {
          "answer": "Sim. Os lados 6, 8 e 10 são o triângulo 3-4-5 escalonado por [[k = 2]], por isso formam a mesma forma com os mesmos ângulos e o mesmo ângulo reto. Qualquer cópia escalonada, como 9-12-15 ou 15-20-25, funciona da mesma forma.",
          "question": "Posso usar 6-8-10 em vez de 3-4-5?",
        },
        {
          "answer": "Um construtor marca 3 pés ao longo de um lado a partir de um canto e 4 pés ao longo do lado adjacente, e depois mede a diagonal entre as marcas. Se marcar 5 pés, o canto é quadrado. Múltiplos maiores, como 6-8-10 ou 9-12-15 pés, adequam-se a plantas maiores.",
          "question": "Como usam os construtores a regra 3-4-5?",
        },
        {
          "answer": "Sim, qualquer valor real positivo de [[k]] dá um triângulo 3-4-5 escalonado válido. Com [[k = 0.5]] os lados são 1.5, 2 e 2.5, e com [[k = 1.5]] são 4.5, 6 e 7.5. Zero e valores negativos não dão triângulos válidos.",
          "question": "O fator de escala pode ser um decimal?",
        },
        {
          "answer": "Sim, todos os triângulos 3-4-5 escalonados com um fator de escala de número inteiro são ternos pitagóricos, porque os seus lados são números inteiros que satisfazem [[a^2 + b^2 = c^2]]. Com um fator de escala decimal, os lados continuam a satisfazer o teorema. O terno 5-12-13 é um terno pitagórico diferente.",
          "question": "Todos os triângulos 3-4-5 são ternos pitagóricos?",
        },
      ],
    },
};
