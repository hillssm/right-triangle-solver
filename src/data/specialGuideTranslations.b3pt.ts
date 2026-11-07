// specialGuideTranslations.bpt.ts: Special Right Triangle
// Guide (Page 41 of 45) translation.
export const SPECIAL_B3_PT = {
  "pt": {
      "meta": {
        "title": "Calculadora de Triângulo Retângulo Especial - Razões 45-45-90 e 30-60-90",
        "description": "Resolva triângulos 45-45-90 e 30-60-90 com a Calculadora de Triângulo Retângulo Especial. Use as razões fixas 1:1:√2 e 1:√3:2 para encontrar os lados que faltam rapidamente.",
        "primaryKeyword": "Calculadora de Triângulo Retângulo Especial",
        "slug": "special-right-triangle-calculator",
      },
      "tocHeading": "Navegação das Seções",
      "tocItems": {
        "sec-intro": "Calculadora de Triângulo Retângulo Especial",
        "sec-calculate": "Calcular os Lados que Faltam de Triângulos Retângulos Especiais",
        "sec-what": "O Que São Triângulos Retângulos Especiais?",
        "sec-types": "Os Dois Principais Tipos de Triângulos Retângulos Especiais",
        "sec-454590": "Entendendo o Triângulo 45-45-90",
        "sec-derive-454590": "Derivando a Razão dos Lados do Triângulo 45-45-90",
        "sec-306090": "Entendendo o Triângulo 30-60-90",
        "sec-derive-306090": "Derivando a Razão dos Lados do Triângulo 30-60-90",
        "sec-compare": "Comparando as Razões dos Lados dos Dois Triângulos Especiais",
        "sec-how-hyp-45": "Como Usar a Calculadora de Hipotenusa 45-45-90",
        "sec-how-leg-45": "Como Encontrar um Cateto a Partir da Hipotenusa 45-45-90",
        "sec-how-long-30": "Como Usar a Calculadora de Cateto Maior 30-60-90",
        "sec-how-hyp-30": "Como Usar a Calculadora de Hipotenusa 30-60-90",
        "sec-examples": "Exemplos Passo a Passo para os Dois Tipos de Triângulo Especial",
        "sec-area-perimeter": "Relações de Área e Perímetro em Triângulos Retângulos Especiais",
        "sec-exact": "Respostas Exatas com Radicais Versus Aproximações Decimais",
        "sec-verify": "Como Verificar os Cálculos de Triângulos Retângulos Especiais",
        "sec-mistakes": "Erros Comuns ao Resolver Triângulos Retângulos Especiais",
        "sec-applications": "Aplicações Práticas dos Triângulos Retângulos Especiais",
        "sec-practice": "Problemas Práticos com Respostas",
        "sec-related": "Calculadoras Relacionadas de Triângulo Retângulo",
        "sec-faq": "Perguntas Frequentes",
      },
      "sections": {
        "sec-intro": {
          "h2": "Calculadora de Triângulo Retângulo Especial",
          "blocks": [
            {
              "kind": "p",
              "text": "Resolva triângulos 45-45-90 e 30-60-90 a partir de um lado conhecido, usando suas razões fixas de lados.",
            },
            {
              "kind": "p",
              "text": "Um triângulo retângulo especial é um triângulo retângulo cujos ângulos produzem uma razão fixa de lados que nunca muda, não importa quão grande ou pequeno seja o triângulo. Apenas dois padrões de ângulos fazem isso na geometria escolar: o triângulo 45-45-90 e o triângulo 30-60-90. A Calculadora de Triângulo Retângulo Especial desta página cobre os dois tipos, então um lado conhecido é suficiente para encontrar todos os outros lados.",
            },
            {
              "kind": "p",
              "text": "O triângulo 45-45-90 tem dois catetos iguais, e seus lados seguem a razão [[a : b : c = 1 : 1 : \\sqrt{2}]]. O triângulo 30-60-90 tem três comprimentos de lado diferentes, e seus lados seguem a razão [[a : b : c = 1 : \\sqrt{3} : 2]]. Aqui [[a]] e [[b]] são os catetos e [[c]] é a hipotenusa, e o significado de [[a]] e [[b]] muda com o tipo de triângulo, então as seções abaixo sempre indicam qual tipo elas usam.",
            },
            {
              "kind": "p",
              "text": "Se um triângulo 45-45-90 tem um cateto de 5 cm, o outro cateto também mede 5 cm e a hipotenusa é [[c = 5\\sqrt{2} \\approx 7.071]] cm. Se um triângulo 30-60-90 tem um cateto menor de 5 cm, o cateto maior é [[b = 5\\sqrt{3} \\approx 8.660]] cm e a hipotenusa é [[c = 10]] cm. Os quatro modos da calculadora nesta página executam exatamente esses passos, e o guia abaixo explica de onde vem cada razão, como escolher o modo certo e como verificar cada resposta.",
            },
          ],
        },
        "sec-calculate": {
          "h2": "Calcular os Lados que Faltam de Triângulos Retângulos Especiais",
          "blocks": [
            {
              "kind": "p",
              "text": "A calculadora desta página tem quatro modos, um para cada lado que falta que um problema de triângulo retângulo especial geralmente pede. Escolha primeiro o tipo de triângulo, depois escolha o lado que você conhece e o lado de que precisa. A tabela abaixo lista todos os modos com sua entrada, sua fórmula e seu resultado.",
            },
          ],
          "table": {
            "headers": [
              "Modo da calculadora",
              "Entrada necessária",
              "Resultado",
            ],
            "rows": [
              [
                "45-45-90: Hipotenusa",
                "Cateto a",
                "Hipotenusa c",
              ],
              [
                "45-45-90: Cateto",
                "Hipotenusa c",
                "Cateto a",
              ],
              [
                "30-60-90: Cateto maior",
                "Cateto menor a",
                "Cateto maior b",
              ],
              [
                "30-60-90: Hipotenusa",
                "Cateto menor a",
                "Hipotenusa c",
              ],
            ],
          },
          "blocks2": [
            {
              "kind": "p",
              "text": "O Modo 1 encontra a hipotenusa de um triângulo 45-45-90 a partir de qualquer um dos catetos iguais.",
            },
            {
              "kind": "p",
              "text": "[[[c = a\\sqrt{2}]]]",
            },
            {
              "kind": "p",
              "text": "O Modo 2 encontra um cateto de um triângulo 45-45-90 a partir da hipotenusa.",
            },
            {
              "kind": "p",
              "text": "[[[a = \\frac{c}{\\sqrt{2}}]]]",
            },
            {
              "kind": "p",
              "text": "O Modo 3 encontra o cateto maior de um triângulo 30-60-90 a partir do cateto menor.",
            },
            {
              "kind": "p",
              "text": "[[[b = a\\sqrt{3}]]]",
            },
            {
              "kind": "p",
              "text": "O Modo 4 encontra a hipotenusa de um triângulo 30-60-90 a partir do cateto menor.",
            },
            {
              "kind": "p",
              "text": "[[[c = 2a]]]",
            },
            {
              "kind": "p",
              "text": "Para usar qualquer modo, confirme o tipo de triângulo a partir de seus ângulos, identifique o lado conhecido, insira uma medida positiva, escolha uma unidade que corresponda ao restante do problema e clique em Calcular. Use Redefinir antes de um novo cálculo para que um valor antigo não contamine a próxima resposta. Cada modo precisa de uma fórmula diferente porque cada modo começa de um lado conhecido diferente, e os dois tipos de triângulo têm razões diferentes, então uma fórmula 45-45-90 nunca pertence a um problema 30-60-90.",
            },
          ],
          "image": {
            "src": "special-four-modes.svg",
            "alt": "Diagrama de fluxo dos quatro modos da Calculadora de Triângulo Retângulo Especial: 45-45-90 cateto para hipotenusa, 45-45-90 hipotenusa para cateto, 30-60-90 cateto menor para cateto maior e 30-60-90 cateto menor para hipotenusa",
            "caption": "Os quatro modos da calculadora: cada um começa de um lado conhecido e aplica uma razão fixa.",
          },
        },
        "sec-what": {
          "h2": "O Que São Triângulos Retângulos Especiais?",
          "blocks": [
            {
              "kind": "p",
              "text": "Um triângulo retângulo especial é um triângulo retângulo cujos três ângulos são fixados em valores que forçam seus lados a uma razão imutável. A maioria dos triângulos retângulos não tem esse atalho: conhecer um lado não diz nada sobre os outros até que você também conheça um ângulo ou um segundo lado. Em um triângulo retângulo especial, só os ângulos fixam a forma, então um comprimento de lado fixa o triângulo inteiro.",
            },
            {
              "kind": "p",
              "text": "O teorema de Pitágoras continua valendo, e é a ferramenta que produz ambas as razões. Em um triângulo 45-45-90, os dois catetos iguais fazem o teorema se reduzir a [[2a^2 = c^2]], o que dá [[c = a\\sqrt{2}]]. Em um triângulo 30-60-90, a hipotenusa é o dobro do cateto menor, então o teorema dá [[b^2 = (2a)^2 - a^2 = 3a^2]], o que dá [[b = a\\sqrt{3}]]. As derivações completas aparecem em suas próprias seções abaixo.",
            },
            {
              "kind": "p",
              "text": "As razões permanecem as mesmas em todos os tamanhos porque os triângulos são semelhantes dentro de seu próprio tipo. Um triângulo 45-45-90 com um cateto de 1 cm e um com um cateto de 100 cm têm a mesma forma, os mesmos ângulos e a mesma razão 1:1:√2. Essa independência de escala é o que torna esses triângulos tão úteis na geometria e na trigonometria: depois de reconhecer o padrão de ângulos, você pode escrever todos os lados sem medir nem usar seno e cosseno.",
            },
            {
              "kind": "p",
              "text": "Os triângulos 45-45-90 e 30-60-90 são duas famílias diferentes, não dois nomes para a mesma forma. Um tem dois catetos iguais e o outro tem três comprimentos de lado diferentes. Confundi-los é o erro mais comum neste tema, então a próxima seção apresenta cada família separadamente antes de o guia compará-las lado a lado.",
            },
          ],
          "image": {
            "src": "special-both-types.svg",
            "alt": "Dois triângulos retângulos especiais lado a lado: um triângulo 45-45-90 com razão 1:1:√2 e um triângulo 30-60-90 com razão 1:√3:2",
            "caption": "Os dois triângulos retângulos especiais: 45-45-90 com catetos iguais, e 30-60-90 com três lados diferentes.",
          },
        },
        "sec-types": {
          "h2": "Os Dois Principais Tipos de Triângulos Retângulos Especiais",
          "blocks": [
            {
              "kind": "p",
              "text": "Ambos os triângulos especiais são triângulos retângulos, então cada um tem um ângulo de 90° e uma hipotenusa oposta a ele. O que difere é o par de ângulos agudos, e os ângulos agudos decidem a razão dos lados. Aprenda cada tipo separadamente primeiro, e a comparação mais adiante neste guia será fácil de acompanhar.",
            },
            {
              "kind": "h3",
              "text": "Triângulo 45-45-90",
            },
            {
              "kind": "list",
              "items": [
                "Ângulos: 45°, 45°, 90°.",
                "Dois catetos iguais, então qualquer um dos catetos pode servir como a entrada conhecida.",
                "A hipotenusa é igual ao cateto vezes √2, [[c = a\\sqrt{2}]].",
                "Razão dos lados: [[a : b : c = 1 : 1 : \\sqrt{2}]].",
                "Também chamado de triângulo retângulo isósceles.",
              ],
            },
            {
              "kind": "h3",
              "text": "Triângulo 30-60-90",
            },
            {
              "kind": "list",
              "items": [
                "Ângulos: 30°, 60°, 90°.",
                "Cateto menor [[a]] oposto ao ângulo de 30°, cateto maior [[b]] oposto ao ângulo de 60°.",
                "A hipotenusa é igual ao dobro do cateto menor, [[c = 2a]].",
                "O cateto maior é igual ao cateto menor vezes √3, [[b = a\\sqrt{3}]].",
                "Razão dos lados: [[a : b : c = 1 : \\sqrt{3} : 2]].",
                "Um triângulo retângulo escaleno, pois os três lados diferem.",
              ],
            },
            {
              "kind": "p",
              "text": "A diferença visual é clara quando você procura por ela. Em um triângulo 45-45-90, os dois catetos parecem ter o mesmo comprimento, e a hipotenusa forma 45° com cada cateto. Em um triângulo 30-60-90, o cateto oposto ao ângulo de 30° é visivelmente o lado mais curto, o cateto oposto ao ângulo de 60° é mais longo, e a hipotenusa é exatamente o dobro do cateto menor. A tabela abaixo resume o contraste.",
            },
          ],
          "table": {
            "headers": [
              "Característica",
              "45-45-90",
              "30-60-90",
            ],
            "rows": [
              [
                "Ângulos",
                "45°, 45°, 90°",
                "30°, 60°, 90°",
              ],
              [
                "Razão dos lados",
                "1:1:√2",
                "1:√3:2",
              ],
              [
                "Catetos iguais",
                "Sim",
                "Não",
              ],
              [
                "Lado mais curto",
                "Ambos os catetos",
                "Cateto menor (oposto a 30°)",
              ],
              [
                "Lado mais longo",
                "Hipotenusa",
                "Hipotenusa",
              ],
              [
                "Fórmula da hipotenusa",
                "a√2",
                "2a",
              ],
              [
                "Fórmula do cateto maior",
                "Não aplicável",
                "a√3",
              ],
              [
                "Tipo de triângulo",
                "Retângulo isósceles",
                "Retângulo escaleno",
              ],
            ],
          },
        },
        "sec-454590": {
          "h2": "Entendendo o Triângulo 45-45-90",
          "blocks": [
            {
              "kind": "p",
              "text": "Um triângulo 45-45-90 é um triângulo retângulo isósceles. Seus dois ângulos agudos são ambos de 45°, então os ângulos somam [[45° + 45° + 90° = 180°]], como todo triângulo deve somar. Como os dois ângulos agudos são iguais, os lados opostos a eles também são iguais, e é por isso que os dois catetos têm o mesmo comprimento.",
            },
            {
              "kind": "p",
              "text": "Chame os catetos de [[a]] e [[b]] e a hipotenusa de [[c]]. Catetos iguais significam [[a = b]], e a razão dos lados é [[a : b : c = 1 : 1 : \\sqrt{2}]]. A hipotenusa é o lado mais longo, como em todo triângulo retângulo, e é mais longa que cada cateto por um fator de √2, cerca de 1.414.",
            },
            {
              "kind": "p",
              "text": "As duas fórmulas de trabalho são a hipotenusa a partir de um cateto e o cateto a partir da hipotenusa.",
            },
            {
              "kind": "p",
              "text": "[[[c = a\\sqrt{2}]]]",
            },
            {
              "kind": "p",
              "text": "[[[a = \\frac{c}{\\sqrt{2}}]]]",
            },
            {
              "kind": "p",
              "text": "Considere um cateto de 5 cm. O outro cateto mede 5 cm, e a hipotenusa é [[c = 5\\sqrt{2} \\approx 7.071]] cm. Os mesmos passos funcionam em qualquer tamanho: um cateto de 12 cm dá uma hipotenusa de [[12\\sqrt{2} \\approx 16.971]] cm, e um cateto de 1 unidade dá uma hipotenusa de √2 unidades. A <a href=\"/45-45-90-triangle-calculator/\">calculadora de triângulo 45-45-90</a> cobre este tipo de triângulo em todos os detalhes, incluindo área e perímetro.",
            },
          ],
          "image": {
            "src": "special-454590-geometry.svg",
            "alt": "Um triângulo 45-45-90 com dois catetos iguais marcados como congruentes, ângulos de 45°, 45° e 90°, e hipotenusa rotulada como a√2",
            "caption": "Um triângulo 45-45-90: catetos iguais, ângulos agudos iguais e uma hipotenusa de a√2.",
          },
        },
        "sec-derive-454590": {
          "h2": "Derivando a Razão dos Lados do Triângulo 45-45-90",
          "blocks": [
            {
              "kind": "p",
              "text": "A razão 1:1:√2 não é uma regra para decorar às cegas. Ela segue em poucos passos do teorema de Pitágoras, e ver os passos uma vez torna a razão difícil de esquecer. Comece com o fato de que os catetos são iguais.",
            },
            {
              "kind": "p",
              "text": "[[[a = b]]]",
            },
            {
              "kind": "p",
              "text": "Aplique o teorema de Pitágoras aos catetos e à hipotenusa.",
            },
            {
              "kind": "p",
              "text": "[[[a^2 + b^2 = c^2]]]",
            },
            {
              "kind": "p",
              "text": "Substitua [[b]] por [[a]], pois os catetos são iguais.",
            },
            {
              "kind": "p",
              "text": "[[[a^2 + a^2 = c^2]]]",
            },
            {
              "kind": "p",
              "text": "Combine os dois termos idênticos.",
            },
            {
              "kind": "p",
              "text": "[[[2a^2 = c^2]]]",
            },
            {
              "kind": "p",
              "text": "Tire a raiz quadrada positiva dos dois lados. Os comprimentos são positivos, então a raiz negativa é descartada.",
            },
            {
              "kind": "p",
              "text": "[[[c = a\\sqrt{2}]]]",
            },
            {
              "kind": "p",
              "text": "Defina [[a = 1]] e a razão aparece diretamente: catetos 1 e 1, hipotenusa √2, então a razão é [[1 : 1 : \\sqrt{2}]]. A mesma razão explica a diagonal de um quadrado. Um quadrado com lado [[a]] tem uma diagonal que o divide em dois triângulos 45-45-90 congruentes, e a diagonal é a hipotenusa de qualquer um deles, então a diagonal é igual a [[a\\sqrt{2}]]. Um quadrado com um lado de 8 cm tem uma diagonal de [[8\\sqrt{2} \\approx 11.314]] cm.",
            },
          ],
          "images": [
            {
              "src": "special-454590-derivation.svg",
              "alt": "Um triângulo 45-45-90 rotulado mostrando a derivação de Pitágoras a ao quadrado mais a ao quadrado igual a c ao quadrado, dando c igual a a vezes raiz de 2",
              "caption": "A derivação de Pitágoras: catetos iguais transformam a² + b² = c² em 2a² = c².",
            },
            {
              "src": "special-square-diagonal.svg",
              "alt": "Um quadrado com lado de 8 cm e uma diagonal de 8 raiz de 2 cm, dividido em dois triângulos 45-45-90 congruentes",
              "caption": "A diagonal de um quadrado divide o quadrado em dois triângulos 45-45-90 congruentes.",
            },
          ],
        },
        "sec-306090": {
          "h2": "Entendendo o Triângulo 30-60-90",
          "blocks": [
            {
              "kind": "p",
              "text": "Um triângulo 30-60-90 tem três ângulos diferentes, então tem três comprimentos de lado diferentes. O lado oposto ao menor ângulo é o lado mais curto, o lado oposto ao ângulo do meio é o lado do meio, e o lado oposto ao ângulo de 90° é a hipotenusa. Essa regra do lado oposto é toda a chave para rotular este triângulo corretamente.",
            },
            {
              "kind": "p",
              "text": "Use [[a]] para o cateto menor oposto a 30°, [[b]] para o cateto maior oposto a 60° e [[c]] para a hipotenusa oposta a 90°. As duas fórmulas de trabalho são o cateto maior a partir do cateto menor e a hipotenusa a partir do cateto menor.",
            },
            {
              "kind": "p",
              "text": "[[[b = a\\sqrt{3}]]]",
            },
            {
              "kind": "p",
              "text": "[[[c = 2a]]]",
            },
            {
              "kind": "p",
              "text": "A razão dos lados é [[a : b : c = 1 : \\sqrt{3} : 2]], com √3 cerca de 1.732. Considere um cateto menor de 5 cm. O cateto maior é [[b = 5\\sqrt{3} \\approx 8.660]] cm e a hipotenusa é [[c = 10]] cm. Verifique com o teorema de Pitágoras: [[5^2 + (5\\sqrt{3})^2 = 25 + 75 = 100 = 10^2]], o que confirma que os três lados se encaixam.",
            },
            {
              "kind": "p",
              "text": "A hipotenusa é sempre exatamente o dobro do cateto menor, o que é a verificação mais rápida neste tema. Se um problema diz que a hipotenusa é 14 cm, o cateto menor é 7 cm de imediato, e o cateto maior segue como [[7\\sqrt{3} \\approx 12.124]] cm. A <a href=\"/30-60-90-triangle-calculator/\">calculadora de triângulo 30-60-90</a> cobre este tipo de triângulo em todos os detalhes, incluindo sua derivação a partir do triângulo equilátero.",
            },
          ],
          "image": {
            "src": "special-306090-geometry.svg",
            "alt": "Um triângulo 30-60-90 com cateto menor a oposto a 30 graus, cateto maior a raiz de 3 oposto a 60 graus, e hipotenusa 2a oposta a 90 graus",
            "caption": "Um triângulo 30-60-90: o cateto menor fica oposto a 30°, o cateto maior oposto a 60°.",
          },
        },
        "sec-derive-306090": {
          "h2": "Derivando a Razão dos Lados do Triângulo 30-60-90",
          "blocks": [
            {
              "kind": "p",
              "text": "A razão 1:√3:2 vem de um triângulo equilátero, e vale a pena acompanhar a construção passo a passo. Comece com um triângulo equilátero cujo lado mede [[2a]]. Todos os três ângulos são de 60° e todos os três lados são iguais.",
            },
            {
              "kind": "p",
              "text": "Trace uma altura de um vértice até o lado oposto. A altura faz três coisas ao mesmo tempo: divide o triângulo equilátero em dois triângulos retângulos congruentes, corta a base em dois segmentos de comprimento [[a]] e divide um ângulo de 60° em dois ângulos de 30°. Cada metade é agora um triângulo com ângulos de 30°, 60° e 90°.",
            },
            {
              "kind": "p",
              "text": "Em qualquer uma das metades, a hipotenusa é o lado original do equilátero, [[2a]], e o cateto menor é a meia-base, [[a]]. Chame a altura, que é o cateto maior, de [[b]]. Aplique o teorema de Pitágoras ao meio triângulo.",
            },
            {
              "kind": "p",
              "text": "[[[b^2 = (2a)^2 - a^2]]]",
            },
            {
              "kind": "p",
              "text": "Expanda o quadrado.",
            },
            {
              "kind": "p",
              "text": "[[[b^2 = 4a^2 - a^2]]]",
            },
            {
              "kind": "p",
              "text": "Simplifique.",
            },
            {
              "kind": "p",
              "text": "[[[b^2 = 3a^2]]]",
            },
            {
              "kind": "p",
              "text": "Tire a raiz quadrada positiva.",
            },
            {
              "kind": "p",
              "text": "[[[b = a\\sqrt{3}]]]",
            },
            {
              "kind": "p",
              "text": "Defina [[a = 1]] e a razão aparece: cateto menor 1, cateto maior √3, hipotenusa 2, então a razão é [[1 : \\sqrt{3} : 2]]. A altura de um triângulo equilátero com lado de 10 cm é, portanto, [[5\\sqrt{3} \\approx 8.660]] cm, pois a altura é o cateto maior de um triângulo 30-60-90 com cateto menor de 5 cm.",
            },
          ],
          "image": {
            "src": "special-equilateral-derivation.svg",
            "alt": "Um triângulo equilátero com lado 2a dividido por uma altura em dois triângulos 30-60-90 congruentes, cada um com cateto menor a, cateto maior a raiz de 3, e hipotenusa 2a",
            "caption": "Uma altura divide um triângulo equilátero em dois triângulos 30-60-90 congruentes.",
          },
        },
        "sec-compare": {
          "h2": "Comparando as Razões dos Lados dos Dois Triângulos Especiais",
          "blocks": [
            {
              "kind": "p",
              "text": "As duas razões parecem iguais à primeira vista, e é exatamente por isso que elas se confundem. Ambas contêm uma raiz quadrada e um número inteiro pequeno, e ambas descrevem um triângulo retângulo. Mas os números ficam em lugares diferentes: em 1:1:√2 a raiz pertence à hipotenusa, enquanto em 1:√3:2 a raiz pertence ao cateto maior e a hipotenusa é o número inteiro 2.",
            },
          ],
          "table": {
            "headers": [
              "Característica",
              "45-45-90",
              "30-60-90",
            ],
            "rows": [
              [
                "Ângulos",
                "45°, 45°, 90°",
                "30°, 60°, 90°",
              ],
              [
                "Razão dos lados",
                "1:1:√2",
                "1:√3:2",
              ],
              [
                "Catetos iguais",
                "Sim",
                "Não",
              ],
              [
                "Lado mais curto",
                "Ambos os catetos",
                "Cateto menor",
              ],
              [
                "Lado mais longo",
                "Hipotenusa",
                "Hipotenusa",
              ],
              [
                "Fórmula da hipotenusa",
                "a√2",
                "2a",
              ],
              [
                "Fórmula do cateto maior",
                "Não aplicável",
                "a√3",
              ],
              [
                "Tipo de triângulo",
                "Retângulo isósceles",
                "Retângulo escaleno",
              ],
            ],
          },
          "blocks2": [
            {
              "kind": "p",
              "text": "As fórmulas não podem ser trocadas. Multiplicar um cateto menor 30-60-90 por √2 dá uma hipotenusa errada, e dobrar um cateto 45-45-90 dá uma hipotenusa errada. Os dois triângulos vêm de construções diferentes, uma diagonal de quadrado para o 45-45-90 e uma altura de triângulo equilátero para o 30-60-90, então suas razões respondem a perguntas de geometria diferentes.",
            },
            {
              "kind": "p",
              "text": "Um exemplo numérico para cada tipo mostra a diferença. Um triângulo 45-45-90 com cateto de 5 cm tem hipotenusa [[5\\sqrt{2} \\approx 7.071]] cm. Um triângulo 30-60-90 com cateto menor de 5 cm tem hipotenusa de 10 cm e cateto maior [[5\\sqrt{3} \\approx 8.660]] cm. Mesmo número inicial, respostas bem diferentes, e a única maneira de distingui-los é o padrão de ângulos.",
            },
          ],
          "image": {
            "src": "special-ratio-comparison.svg",
            "alt": "Comparação lado a lado da razão 45-45-90 1:1:√2 e da razão 30-60-90 1:√3:2 na mesma escala",
            "caption": "Ambas as razões na mesma escala: a raiz fica na hipotenusa para o 45-45-90, e no cateto maior para o 30-60-90.",
          },
        },
        "sec-how-hyp-45": {
          "h2": "Como Usar a Calculadora de Hipotenusa 45-45-90",
          "blocks": [
            {
              "kind": "p",
              "text": "O Modo 1 é o modo mais usado desta página, e leva apenas alguns segundos depois que o tipo de triângulo é confirmado. Siga os passos em ordem.",
            },
            {
              "kind": "steps",
              "steps": [
                "Confirme que o triângulo é 45-45-90: ambos os ângulos agudos medem 45°.",
                "Escolha qualquer um dos catetos iguais como o lado conhecido, pois os dois catetos têm o mesmo comprimento.",
                "Selecione o modo de hipotenusa 45-45-90 na calculadora.",
                "Insira o comprimento do cateto como um número positivo.",
                "Escolha a unidade que corresponde ao restante do problema.",
                "Clique em Calcular Hipotenusa c.",
                "Leia o resultado, que é a hipotenusa na mesma unidade.",
                "Use Redefinir antes de iniciar um novo cálculo.",
              ],
            },
            {
              "kind": "p",
              "text": "O modo aplica a fórmula abaixo.",
            },
            {
              "kind": "p",
              "text": "[[[c = a\\sqrt{2}]]]",
            },
            {
              "kind": "p",
              "text": "Com um cateto de 7 cm, a hipotenusa é [[c = 7\\sqrt{2} \\approx 9.899]] cm. A fórmula só é válida quando ambos os ângulos agudos são de 45°, então verifique os ângulos antes de confiar na resposta. Se os ângulos forem de 30° e 60°, mude para um modo 30-60-90.",
            },
          ],
        },
        "sec-how-leg-45": {
          "h2": "Como Encontrar um Cateto a Partir da Hipotenusa 45-45-90",
          "blocks": [
            {
              "kind": "p",
              "text": "O Modo 2 funciona ao contrário, da hipotenusa para um cateto. Ele divide por √2, que é o passo mais esquecido. A fórmula é mostrada abaixo.",
            },
            {
              "kind": "p",
              "text": "[[[a = \\frac{c}{\\sqrt{2}}]]]",
            },
            {
              "kind": "p",
              "text": "O mesmo resultado pode ser escrito na forma racionalizada, que evita uma raiz no denominador.",
            },
            {
              "kind": "p",
              "text": "[[[a = \\frac{c\\sqrt{2}}{2}]]]",
            },
            {
              "kind": "p",
              "text": "Para usar o modo, confirme o padrão de ângulos 45-45-90, selecione o modo de cateto 45-45-90, insira a hipotenusa, escolha a unidade e clique em Calcular. Com uma hipotenusa de 10 cm, o cateto é [[a = \\frac{10}{\\sqrt{2}} = 5\\sqrt{2} \\approx 7.071]] cm. Os dois catetos têm este comprimento, pois os catetos são iguais, então a única resposta descreve o triângulo inteiro. Uma verificação rápida: [[7.071^2 + 7.071^2 \\approx 50 + 50 = 100 = 10^2]], que corresponde à hipotenusa ao quadrado.",
            },
          ],
        },
        "sec-how-long-30": {
          "h2": "Como Usar a Calculadora de Cateto Maior 30-60-90",
          "blocks": [
            {
              "kind": "p",
              "text": "O Modo 3 encontra o cateto maior a partir do cateto menor, e a única parte difícil é identificar o cateto menor corretamente. O cateto menor é o lado oposto ao ângulo de 30°, e é sempre o lado mais curto do triângulo.",
            },
            {
              "kind": "steps",
              "steps": [
                "Confirme que o triângulo é 30-60-90 a partir de seus ângulos.",
                "Encontre o lado oposto ao ângulo de 30°: esse é o cateto menor.",
                "Selecione o modo de cateto maior 30-60-90 na calculadora.",
                "Insira o cateto menor como um número positivo.",
                "Escolha a unidade que corresponde ao restante do problema.",
                "Clique em Calcular Cateto Maior.",
                "Leia o resultado, que é o cateto maior na mesma unidade.",
              ],
            },
            {
              "kind": "p",
              "text": "O modo aplica a fórmula abaixo.",
            },
            {
              "kind": "p",
              "text": "[[[b = a\\sqrt{3}]]]",
            },
            {
              "kind": "p",
              "text": "Com um cateto menor de 6 cm, o cateto maior é [[b = 6\\sqrt{3} \\approx 10.392]] cm. Inserir a hipotenusa ou o cateto maior por engano dá uma resposta errada, então rotule os lados primeiro e insira apenas o cateto menor.",
            },
          ],
        },
        "sec-how-hyp-30": {
          "h2": "Como Usar a Calculadora de Hipotenusa 30-60-90",
          "blocks": [
            {
              "kind": "p",
              "text": "O Modo 4 é o modo mais simples da página, porque a hipotenusa de um triângulo 30-60-90 é exatamente o dobro do cateto menor. Não há raiz quadrada envolvida, o que torna a resposta fácil de verificar à mão.",
            },
            {
              "kind": "steps",
              "steps": [
                "Confirme que o triângulo é 30-60-90 a partir de seus ângulos.",
                "Identifique o cateto menor, o lado oposto ao ângulo de 30°.",
                "Selecione o modo de hipotenusa 30-60-90 na calculadora.",
                "Insira o cateto menor como um número positivo.",
                "Escolha a unidade que corresponde ao restante do problema.",
                "Clique em Calcular Hipotenusa c.",
                "Leia o resultado, que é a hipotenusa na mesma unidade.",
              ],
            },
            {
              "kind": "p",
              "text": "O modo aplica a fórmula abaixo.",
            },
            {
              "kind": "p",
              "text": "[[[c = 2a]]]",
            },
            {
              "kind": "p",
              "text": "Com um cateto menor de 8 cm, a hipotenusa é [[c = 16]] cm. O cateto maior do mesmo triângulo é [[8\\sqrt{3} \\approx 13.856]] cm, que fica entre o cateto menor e a hipotenusa, como deveria. Se um resultado sair menor que o cateto menor, o modo errado foi selecionado.",
            },
          ],
        },
        "sec-examples": {
          "h2": "Exemplos Passo a Passo para os Dois Tipos de Triângulo Especial",
          "blocks": [
            {
              "kind": "p",
              "text": "Estes dois exemplos resolvidos encontram todos os lados de cada tipo de triângulo a partir de um lado conhecido. Área e perímetro aparecem aqui como cálculos manuais extras, não como modos da calculadora: a calculadora desta página encontra apenas comprimentos de lados.",
            },
            {
              "kind": "h3",
              "text": "Exemplo 1: Triângulo 45-45-90",
            },
            {
              "kind": "p",
              "text": "Dado um triângulo 45-45-90 com cateto [[a = 5]] cm, encontre o outro cateto, a hipotenusa, a área e o perímetro.",
            },
            {
              "kind": "p",
              "text": "Os catetos são iguais, então o outro cateto é [[b = 5]] cm. A hipotenusa segue da razão.",
            },
            {
              "kind": "p",
              "text": "[[[c = 5\\sqrt{2} \\approx 7.071]]]",
            },
            {
              "kind": "p",
              "text": "A área é metade do produto dos catetos.",
            },
            {
              "kind": "p",
              "text": "[[[A = \\frac{25}{2} = 12.5 \\text{ cm}^2]]]",
            },
            {
              "kind": "p",
              "text": "O perímetro é a soma dos três lados.",
            },
            {
              "kind": "p",
              "text": "[[[P = 10 + 5\\sqrt{2} \\approx 17.071 \\text{ cm}]]]",
            },
            {
              "kind": "h3",
              "text": "Exemplo 2: Triângulo 30-60-90",
            },
            {
              "kind": "p",
              "text": "Dado um triângulo 30-60-90 com cateto menor [[a = 5]] cm, encontre o cateto maior, a hipotenusa, a área e o perímetro.",
            },
            {
              "kind": "p",
              "text": "O cateto maior é o cateto menor vezes √3, e a hipotenusa é o dobro do cateto menor.",
            },
            {
              "kind": "p",
              "text": "[[[b = 5\\sqrt{3} \\approx 8.660]]]",
            },
            {
              "kind": "p",
              "text": "[[[c = 10]]]",
            },
            {
              "kind": "p",
              "text": "A área é metade do produto dos catetos.",
            },
            {
              "kind": "p",
              "text": "[[[A = \\frac{25\\sqrt{3}}{2} \\approx 21.651 \\text{ cm}^2]]]",
            },
            {
              "kind": "p",
              "text": "O perímetro é a soma dos três lados.",
            },
            {
              "kind": "p",
              "text": "[[[P = 15 + 5\\sqrt{3} \\approx 23.660 \\text{ cm}]]]",
            },
            {
              "kind": "p",
              "text": "Os dois exemplos conferem com o teorema de Pitágoras. Para o primeiro, [[5^2 + 5^2 = 50]] e [[7.071^2 \\approx 50]]. Para o segundo, [[5^2 + 8.660^2 \\approx 25 + 75 = 100 = 10^2]].",
            },
          ],
        },
        "sec-area-perimeter": {
          "h2": "Relações de Área e Perímetro em Triângulos Retângulos Especiais",
          "blocks": [
            {
              "kind": "p",
              "text": "Área e perímetro são cálculos úteis de acompanhamento depois que os lados são conhecidos, mas são relações manuais, não funções da calculadora desta página. As fórmulas abaixo usam os mesmos rótulos de lados do restante do guia, com [[a]] como o cateto conhecido para o 45-45-90 e o cateto menor para o 30-60-90.",
            },
            {
              "kind": "p",
              "text": "Para um triângulo 45-45-90, a área é metade do quadrado de um cateto, e o perímetro é o cateto vezes [[2 + \\sqrt{2}]].",
            },
            {
              "kind": "p",
              "text": "[[[A = \\frac{a^2}{2}]]]",
            },
            {
              "kind": "p",
              "text": "[[[P = a(2 + \\sqrt{2})]]]",
            },
            {
              "kind": "p",
              "text": "Para um triângulo 30-60-90, a área é metade do produto dos catetos, e o perímetro é o cateto menor vezes [[3 + \\sqrt{3}]].",
            },
            {
              "kind": "p",
              "text": "[[[A = \\frac{a^2\\sqrt{3}}{2}]]]",
            },
            {
              "kind": "p",
              "text": "[[[P = a(3 + \\sqrt{3})]]]",
            },
            {
              "kind": "p",
              "text": "Considere um triângulo 45-45-90 com cateto de 6 cm. Sua área é [[A = \\frac{36}{2} = 18]] cm², e seu perímetro é [[P = 6(2 + \\sqrt{2}) \\approx 20.485]] cm. Considere um triângulo 30-60-90 com cateto menor de 6 cm. Sua área é [[A = \\frac{36\\sqrt{3}}{2} = 18\\sqrt{3} \\approx 31.177]] cm², e seu perímetro é [[P = 6(3 + \\sqrt{3}) \\approx 28.392]] cm. Mantenha as unidades corretas: a área é sempre em unidades quadradas e o perímetro em unidades lineares, então uma resposta de 18 cm para uma área é um erro de unidade, não um erro de arredondamento.",
            },
          ],
        },
        "sec-exact": {
          "h2": "Respostas Exatas com Radicais Versus Aproximações Decimais",
          "blocks": [
            {
              "kind": "p",
              "text": "As raízes quadradas neste guia são números irracionais, o que significa que suas expansões decimais nunca terminam e nunca se repetem. Os dois valores a conhecer são mostrados abaixo.",
            },
            {
              "kind": "p",
              "text": "[[[\\sqrt{2} \\approx 1.41421356]]]",
            },
            {
              "kind": "p",
              "text": "[[[\\sqrt{3} \\approx 1.73205081]]]",
            },
            {
              "kind": "p",
              "text": "Uma resposta exata mantém a raiz no lugar, como [[5\\sqrt{2}]], enquanto uma resposta decimal a substitui por uma aproximação, como [[5\\sqrt{2} \\approx 7.071]]. Respostas exatas são preferidas na matemática escolar porque não carregam erro de arredondamento e mostram a estrutura do problema. Um professor pode ver de imediato que [[5\\sqrt{2}]] veio de um triângulo 45-45-90, enquanto 7.071 poderia ter vindo de qualquer lugar.",
            },
            {
              "kind": "p",
              "text": "Decimais são melhores para medidas práticas, onde uma régua ou uma ferramenta de corte precisa de um número, não de um símbolo. Quando um decimal é necessário, arredonde apenas no final do cálculo, nunca no meio. Arredondar √2 para 1.41 antes de multiplicar por 5 dá 7.05, o que está errado em 0.021 em relação ao verdadeiro 7.071, e o erro cresce com números maiores. Rotule todo decimal com o sinal de aproximadamente igual, para que um leitor nunca confunda [[5\\sqrt{3} \\approx 8.660]] com uma igualdade exata.",
            },
          ],
        },
        "sec-verify": {
          "h2": "Como Verificar os Cálculos de Triângulos Retângulos Especiais",
          "blocks": [
            {
              "kind": "p",
              "text": "Toda resposta de triângulo especial pode ser verificada em menos de um minuto com três testes: a razão dos lados, o teorema de Pitágoras e a soma dos ângulos. Execute pelo menos dois deles antes de confiar em um resultado.",
            },
            {
              "kind": "p",
              "text": "Para um triângulo 45-45-90, verifique se os catetos são iguais, [[a = b]], e se os lados satisfazem o teorema de Pitágoras, [[a^2 + b^2 = c^2]]. Com [[a = 5]] cm e [[c = 7.071]] cm, a verificação é [[25 + 25 = 50]] contra [[7.071^2 \\approx 50]], o que confere.",
            },
            {
              "kind": "p",
              "text": "Para um triângulo 30-60-90, verifique se o cateto maior é o cateto menor vezes √3, [[b = a\\sqrt{3}]], se a hipotenusa é o dobro do cateto menor, [[c = 2a]], e se [[a^2 + b^2 = c^2]]. Com [[a = 5]] cm, [[b = 8.660]] cm e [[c = 10]] cm, a verificação é [[25 + 75 = 100 = 10^2]], o que confere.",
            },
            {
              "kind": "p",
              "text": "Verifique também a soma dos ângulos: os três ângulos devem somar 180°. Um triângulo 45-45-90 dá [[45° + 45° + 90° = 180°]], e um triângulo 30-60-90 dá [[30° + 60° + 90° = 180°]]. Se a razão, o teorema e os ângulos conferirem, a resposta é sólida. Se qualquer um deles falhar, o tipo de triângulo foi identificado errado ou a fórmula errada foi usada.",
            },
          ],
        },
        "sec-mistakes": {
          "h2": "Erros Comuns ao Resolver Triângulos Retângulos Especiais",
          "blocks": [
            {
              "kind": "p",
              "text": "Quatorze erros causam quase todas as respostas erradas neste tema. Cada um é listado abaixo com a abordagem correta, para que você possa identificar seu próprio erro rapidamente.",
            },
            {
              "kind": "list",
              "items": [
                "Confundir triângulos 45-45-90 com 30-60-90. Verifique os ângulos primeiro: dois ângulos de 45° significam 45-45-90, enquanto 30° e 60° significam 30-60-90.",
                "Usar √3 em vez de √2. A hipotenusa 45-45-90 é [[c = a\\sqrt{2}]], nunca [[a\\sqrt{3}]].",
                "Usar √2 em vez de √3. O cateto maior 30-60-90 é [[b = a\\sqrt{3}]], nunca [[a\\sqrt{2}]].",
                "Supor que ambos os catetos são iguais em um triângulo 30-60-90. Só o triângulo 45-45-90 tem catetos iguais; no 30-60-90, o cateto maior é √3 vezes o cateto menor.",
                "Supor que os catetos menor e maior são iguais. O cateto menor fica oposto a 30° e o cateto maior oposto a 60°, então eles diferem por um fator de √3.",
                "Esquecer que a hipotenusa 30-60-90 é igual ao dobro do cateto menor. É [[c = 2a]], uma duplicação com número inteiro, sem raiz quadrada.",
                "Usar o lado de entrada errado. Os Modos 3 e 4 precisam do cateto menor, então inserir o cateto maior ou a hipotenusa dá uma resposta errada.",
                "Confundir o cateto menor com a hipotenusa. A hipotenusa é o lado mais longo e fica oposta ao ângulo de 90°; o cateto menor é o lado mais curto.",
                "Esquecer de dividir por √2 ao encontrar um cateto 45-45-90. O cateto é [[a = \\frac{c}{\\sqrt{2}}]], não [[a = c\\sqrt{2}]], o que tornaria o cateto mais longo que a hipotenusa.",
                "Esquecer de multiplicar por √3 ao encontrar um cateto maior 30-60-90. O cateto maior é [[b = a\\sqrt{3}]], e usar [[a]] sozinho devolve o cateto menor.",
                "Arredondar radicais cedo demais. Mantenha [[\\sqrt{2}]] e [[\\sqrt{3}]] exatos em todos os passos e arredonde apenas a resposta final.",
                "Misturar unidades. Um cateto em cm e uma hipotenusa em mm não podem compartilhar uma fórmula; converta primeiro, depois calcule.",
                "Confundir área e perímetro. A área usa unidades quadradas e a fórmula [[A = \\frac{a^2}{2}]] para o 45-45-90, enquanto o perímetro usa unidades lineares e [[P = a(2 + \\sqrt{2})]].",
                "Aplicar fórmulas de triângulos especiais a triângulos retângulos arbitrários. As razões 1:1:√2 e 1:√3:2 funcionam apenas para seus próprios padrões de ângulos; um triângulo 20-70-90 precisa de trigonometria.",
              ],
            },
          ],
        },
        "sec-applications": {
          "h2": "Aplicações Práticas dos Triângulos Retângulos Especiais",
          "blocks": [
            {
              "kind": "p",
              "text": "Triângulos retângulos especiais aparecem onde quer que surjam quadrados, triângulos equiláteros e ângulos padrão. Uma diagonal de quadrado é um problema 45-45-90: um tampo de mesa quadrado com lado de 60 cm tem uma diagonal de [[60\\sqrt{2} \\approx 84.853]] cm. Uma altura de triângulo equilátero é um problema 30-60-90: uma placa triangular com lado de 40 cm tem uma altura de [[20\\sqrt{3} \\approx 34.641]] cm.",
            },
            {
              "kind": "p",
              "text": "Na sala de aula, esses triângulos tornam a lição de casa de geometria e os exercícios de trigonometria mais rápidos, porque ângulos padrão como 30°, 45° e 60° têm valores exatos de seno e cosseno que vêm diretamente dessas razões. No desenho técnico e no traçado com ângulos padrão, os esquadros de 45° e 30-60 são construídos exatamente sobre esses triângulos, então um desenhista pode traçar uma linha de 45° ou de 30° conhecendo as proporções dos lados com antecedência.",
            },
            {
              "kind": "p",
              "text": "Conceitos de arquitetura e design usam os mesmos padrões para contraventamento diagonal, inclinações de telhado e layouts de azulejos, e a geometria da construção os usa para verificações rápidas no local, como confirmar que um canto é quadrado medindo uma diagonal no estilo 3-4-5 ou uma diagonal 45-45-90. A modelagem matemática e as demonstrações em sala de aula também os usam, pois as respostas exatas com radicais mantêm o raciocínio visível em vez de escondê-lo dentro de uma calculadora. Trate-os como atalhos de geometria para planejamento e verificação, não como substitutos de medição de engenharia adequada onde a precisão é necessária.",
            },
          ],
        },
        "sec-practice": {
          "h2": "Problemas Práticos com Respostas",
          "blocks": [
            {
              "kind": "p",
              "text": "Resolva cada problema por conta própria, depois verifique a solução. Perguntas de área e perímetro são exercícios manuais, não modos da calculadora. Use números diferentes dos exemplos principais para que os padrões tenham de ser aplicados de novo.",
            },
            {
              "kind": "h3",
              "text": "Problemas 45-45-90",
            },
            {
              "kind": "steps",
              "steps": [
                "Um triângulo 45-45-90 tem um cateto de 7 cm. Encontre a hipotenusa. Solução: [[c = 7\\sqrt{2} \\approx 9.899]] cm.",
                "Um triângulo 45-45-90 tem uma hipotenusa de 12 cm. Encontre um cateto. Solução: [[a = \\frac{12}{\\sqrt{2}} = 6\\sqrt{2} \\approx 8.485]] cm.",
                "Um triângulo 45-45-90 tem um cateto de 9 cm. Encontre a área. Solução: [[A = \\frac{81}{2} = 40.5]] cm².",
                "Um triângulo 45-45-90 tem um cateto de 4 cm. Encontre o perímetro. Solução: [[P = 8 + 4\\sqrt{2} \\approx 13.657]] cm.",
              ],
            },
            {
              "kind": "h3",
              "text": "Problemas 30-60-90",
            },
            {
              "kind": "steps",
              "steps": [
                "Um triângulo 30-60-90 tem um cateto menor de 7 cm. Encontre o cateto maior. Solução: [[b = 7\\sqrt{3} \\approx 12.124]] cm.",
                "Um triângulo 30-60-90 tem um cateto menor de 9 cm. Encontre a hipotenusa. Solução: [[c = 2 \\times 9 = 18]] cm.",
                "Um triângulo 30-60-90 tem um cateto menor de 6 cm. Encontre a área. Solução: [[A = 18\\sqrt{3} \\approx 31.177]] cm².",
                "Um triângulo 30-60-90 tem um cateto menor de 10 cm. Encontre o perímetro. Solução: [[P = 30 + 10\\sqrt{3} \\approx 47.321]] cm.",
              ],
            },
          ],
        },
      },
      "relatedHeading": "Calculadoras Relacionadas de Triângulo Retângulo",
      "relatedIntro": "Cada ferramenta abaixo resolve um tipo diferente de problema de triângulo retângulo. Escolha a que corresponde às informações que você já tem.",
      "relatedItems": [
        "Calculadora de Triângulo 45-45-90",
        "Calculadora de Triângulo 30-60-90",
        "Calculadora de Lados de Triângulo Retângulo",
        "Calculadora de Razões Trigonométricas",
        "Calculadora de Ângulos de Triângulo Retângulo",
        "Calculadora do Teorema de Pitágoras",
      ],
      "faqHeading": "Perguntas Frequentes",
      "faqs": [
        {
          "question": "O que é um triângulo retângulo especial?",
          "answer": "Um triângulo retângulo especial é um triângulo retângulo cujos ângulos fixam sua razão de lados, então um lado conhecido determina todos os outros lados. Os dois tipos são o triângulo 45-45-90, com razão [[1 : 1 : \\sqrt{2}]], e o triângulo 30-60-90, com razão [[1 : \\sqrt{3} : 2]].",
        },
        {
          "question": "Quais triângulos retângulos especiais esta calculadora cobre?",
          "answer": "Esta calculadora cobre o triângulo 45-45-90 e o triângulo 30-60-90, os dois triângulos retângulos especiais usados na geometria escolar. Ela tem quatro modos: hipotenusa 45-45-90 a partir de um cateto, cateto 45-45-90 a partir de uma hipotenusa, cateto maior 30-60-90 a partir de um cateto menor, e hipotenusa 30-60-90 a partir de um cateto menor.",
        },
        {
          "question": "Qual é a razão dos lados de um triângulo 45-45-90?",
          "answer": "A razão dos lados de um triângulo 45-45-90 é [[1 : 1 : \\sqrt{2}]]. Os dois catetos são iguais, e a hipotenusa é o cateto vezes √2, cerca de 1.414. Com um cateto de 5 cm, a hipotenusa é [[5\\sqrt{2} \\approx 7.071]] cm.",
        },
        {
          "question": "Qual é a razão dos lados de um triângulo 30-60-90?",
          "answer": "A razão dos lados de um triângulo 30-60-90 é [[1 : \\sqrt{3} : 2]]. O cateto menor fica oposto a 30°, o cateto maior oposto a 60°, e a hipotenusa oposta a 90°. Com um cateto menor de 5 cm, o cateto maior é [[5\\sqrt{3} \\approx 8.660]] cm e a hipotenusa é 10 cm.",
        },
        {
          "question": "Por que √2 aparece em um triângulo 45-45-90?",
          "answer": "O √2 vem do teorema de Pitágoras aplicado a dois catetos iguais. Com [[a = b]], o teorema dá [[a^2 + a^2 = c^2]], então [[2a^2 = c^2]] e [[c = a\\sqrt{2}]]. A raiz é o preço de transformar dois quadrados iguais em um quadrado de hipotenusa.",
        },
        {
          "question": "Por que √3 aparece em um triângulo 30-60-90?",
          "answer": "O √3 vem de dividir um triângulo equilátero ao meio. Uma altura divide um triângulo equilátero de lado [[2a]] em dois triângulos 30-60-90, e o teorema de Pitágoras em uma metade dá [[b^2 = 3a^2]], então o cateto maior é [[b = a\\sqrt{3}]].",
        },
        {
          "question": "Como encontro a hipotenusa de um triângulo 45-45-90?",
          "answer": "Multiplique qualquer um dos catetos iguais por √2. A fórmula é [[c = a\\sqrt{2}]]. Por exemplo, um cateto de 7 cm dá uma hipotenusa de [[7\\sqrt{2} \\approx 9.899]] cm. Selecione o modo de hipotenusa 45-45-90, insira o cateto e clique em Calcular.",
        },
        {
          "question": "Como encontro o cateto maior de um triângulo 30-60-90?",
          "answer": "Multiplique o cateto menor por √3. A fórmula é [[b = a\\sqrt{3}]]. Por exemplo, um cateto menor de 6 cm dá um cateto maior de [[6\\sqrt{3} \\approx 10.392]] cm. Certifique-se de inserir o cateto menor, o lado oposto ao ângulo de 30°, não a hipotenusa.",
        },
        {
          "question": "Posso calcular o cateto que falta a partir da hipotenusa?",
          "answer": "Sim, para um triângulo 45-45-90. Divida a hipotenusa por √2, usando [[a = \\frac{c}{\\sqrt{2}}]] ou a forma racionalizada [[a = \\frac{c\\sqrt{2}}{2}]]. Uma hipotenusa de 10 cm dá um cateto de [[5\\sqrt{2} \\approx 7.071]] cm, e os dois catetos compartilham esse comprimento.",
        },
        {
          "question": "Todos os triângulos retângulos especiais são semelhantes dentro de seu próprio tipo?",
          "answer": "Sim. Todo triângulo 45-45-90 tem os mesmos ângulos e a mesma razão 1:1:√2, então quaisquer dois são semelhantes. Todo triângulo 30-60-90 também compartilha a razão 1:√3:2. Um triângulo 45-45-90 nunca é semelhante a um triângulo 30-60-90, porque seus ângulos diferem.",
        },
        {
          "question": "Qual é a diferença entre os dois tipos de triângulo especial?",
          "answer": "Um triângulo 45-45-90 tem dois catetos iguais e a razão 1:1:√2, enquanto um triângulo 30-60-90 tem três lados diferentes e a razão 1:√3:2. O primeiro vem de uma diagonal de quadrado, o segundo de uma altura de triângulo equilátero, e suas fórmulas não podem ser trocadas.",
        },
        {
          "question": "Como posso verificar os comprimentos dos lados que calculei?",
          "answer": "Verifique a razão dos lados, o teorema de Pitágoras e a soma dos ângulos. Para o 45-45-90, confirme [[a = b]] e [[a^2 + b^2 = c^2]]. Para o 30-60-90, confirme [[b = a\\sqrt{3}]], [[c = 2a]] e [[a^2 + b^2 = c^2]]. Se as três verificações conferirem, a resposta é sólida.",
        },
      ],
    },
};
