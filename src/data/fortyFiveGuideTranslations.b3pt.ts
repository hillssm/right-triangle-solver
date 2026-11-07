// fortyFiveGuideTranslations.bpt.ts: 45-45-90 Triangle
// Guide (Page 40 of 45) translation.
export const FORTYFIVE_B3_PT = {
  "pt": {
      "meta": {
        "title": "Calculadora de Triângulo 45-45-90 - Hipotenusa, Cateto, Área, Perímetro",
        "description": "Encontre a hipotenusa, o cateto em falta, a área e o perímetro de um triângulo 45-45-90 a partir de um cateto conhecido, usando a razão fixa 1:1:√2 e respostas exatas com radicais.",
        "primaryKeyword": "45-45-90 Triangle Calculator",
        "slug": "45-45-90-triangle-calculator",
      },
      "tocHeading": "Navegação por Secções",
      "tocItems": {
        "sec-intro": "Calculadora de Triângulo 45-45-90",
        "sec-calculate": "Calcular a Hipotenusa, o Cateto, a Área ou o Perímetro",
        "sec-what": "O Que É um Triângulo 45-45-90?",
        "sec-isosceles": "Porque Se Chama Triângulo Retângulo Isósceles?",
        "sec-legs": "Os Dois Catetos Iguais e a Hipotenusa",
        "sec-ratio": "A Razão dos Lados do Triângulo 45-45-90",
        "sec-why-sqrt2": "Porque Aparece a Raiz Quadrada de 2?",
        "sec-hypotenuse": "Fórmula para Encontrar a Hipotenusa a Partir de um Cateto",
        "sec-leg-hyp": "Fórmula para Encontrar um Cateto a Partir da Hipotenusa",
        "sec-area": "Como Calcular a Área de um Triângulo 45-45-90",
        "sec-perimeter": "Como Calcular o Perímetro de um Triângulo 45-45-90",
        "sec-square": "Como a Diagonal de um Quadrado Cria um Triângulo 45-45-90",
        "sec-step-example": "Exemplo Passo a Passo de Resolução de um Triângulo 45-45-90",
        "sec-examples": "Exemplos Resolvidos de Cálculos com Triângulos 45-45-90",
        "sec-exact": "Respostas Exatas Versus Aproximações Decimais",
        "sec-verify": "Como Verificar os Seus Cálculos com Triângulos 45-45-90",
        "sec-properties": "Propriedades Importantes dos Triângulos 45-45-90",
        "sec-vs-3060": "Diferença Entre Triângulos 45-45-90 e 30-60-90",
        "sec-mistakes": "Erros Comuns ao Resolver Triângulos 45-45-90",
        "sec-applications": "Aplicações Práticas dos Triângulos 45-45-90",
        "sec-practice": "Problemas de Prática com Respostas",
        "sec-related": "Calculadoras de Triângulos Retângulos Relacionadas",
        "sec-faq": "Perguntas Frequentes",
      },
      "sections": {
        "sec-intro": {
          "h2": "Calculadora de Triângulo 45-45-90",
          "blocks": [
            {
              "kind": "p",
              "text": "Encontre a hipotenusa, o cateto em falta, a área e o perímetro de um triângulo 45-45-90 a partir de um lado conhecido.",
            },
            {
              "kind": "p",
              "text": "Um triângulo 45-45-90 é um triângulo retângulo cujos três ângulos medem 45°, 45° e 90°. Chama-se triângulo retângulo isósceles porque os seus dois catetos têm o mesmo comprimento, e chama-se triângulo retângulo especial porque os seus lados seguem sempre a mesma razão fixa, por maior ou menor que o triângulo seja. A calculadora de triângulo 45-45-90 desta página usa essa razão para encontrar a hipotenusa, o cateto em falta, a área e o perímetro a partir de um único comprimento de lado que introduzir.",
            },
            {
              "kind": "p",
              "text": "No triângulo ABC, o ângulo A é 45°, o ângulo B é 45° e o ângulo C é 90°. O lado BC é o primeiro cateto [[a]], o lado AC é o segundo cateto [[b]] e o lado AB é a hipotenusa [[c]]. Como os dois ângulos agudos são iguais, os dois catetos são iguais, [[a = b]], e os três lados satisfazem sempre a razão [[a : b : c = 1 : 1 : \\sqrt{2}]], o que significa [[c = a\\sqrt{2}]].",
            },
            {
              "kind": "p",
              "text": "Se [[a = 5]] cm, então o segundo cateto é [[b = 5]] cm, a hipotenusa é [[c = 5\\sqrt{2} \\approx 7.071]] cm e a área é [[A = \\frac{25}{2} = 12.5]] cm². A calculadora também pode determinar o perímetro a partir do mesmo cateto, por isso uma única medida basta para descrever o triângulo inteiro. As secções abaixo explicam a razão, os quatro modos da calculadora e as fórmulas, com exemplos resolvidos em cada passo.",
            },
          ],
        },
        "sec-calculate": {
          "h2": "Calcular a Hipotenusa, o Cateto, a Área ou o Perímetro",
          "blocks": [
            {
              "kind": "p",
              "text": "Quatro modos cobrem todas as formas de começar a partir de um lado conhecido.",
            },
            {
              "kind": "p",
              "text": "A calculadora desta página tem quatro modos, um para cada medida que consegue encontrar. Escolha o modo que corresponde ao lado que conhece e à medida de que precisa. Cada modo pede apenas uma entrada, porque a razão fixa preenche tudo o resto. A tabela abaixo lista os quatro modos, com a entrada que cada um precisa e o resultado que devolve.",
            },
            {
              "kind": "p",
              "text": "Para usar um modo, primeiro descubra qual o lado que conhece. O lado oposto a um ângulo de 45° é um cateto, e qualquer um dos catetos pode servir como [[a]], porque os catetos são iguais. O lado oposto ao ângulo de 90° é a hipotenusa [[c]]. Introduza essa medida como um número positivo, escolha uma unidade e clique no botão Calcular. O resultado aparece com a resolução passo a passo, para que possa ver a fórmula e a substituição, e não apenas a resposta. Use Repor para limpar os campos antes de começar um novo problema.",
            },
            {
              "kind": "p",
              "text": "Modos diferentes precisam de fórmulas diferentes porque cada um começa a partir de um lado conhecido diferente. Encontrar a hipotenusa a partir de um cateto multiplica por √2, enquanto encontrar um cateto a partir da hipotenusa divide por √2. O modo da área eleva o cateto ao quadrado e divide o resultado por dois, e o modo do perímetro soma os três lados. Nunca precisa de determinar os lados em falta antes de usar os modos de área ou de perímetro, porque a calculadora os encontra primeiro internamente.",
            },
            {
              "kind": "p",
              "text": "As quatro fórmulas são [[c = a\\sqrt{2}]] para a hipotenusa, [[a = \\frac{c}{\\sqrt{2}}]] para um cateto, [[A = \\frac{a^2}{2}]] para a área e [[P = a(2 + \\sqrt{2})]] para o perímetro. Mantenha as mesmas unidades ao longo de um cálculo: um cateto introduzido em centímetros dá uma hipotenusa em centímetros e uma área em centímetros quadrados. A calculadora não encontra o raio da circunferência circunscrita, o raio da circunferência inscrita nem medidas de triângulos que não sejam triângulos 45-45-90, por isso confirme os ângulos antes de a usar.",
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
                "Encontrar a hipotenusa a partir do cateto",
                "Cateto a",
                "Hipotenusa c",
              ],
              [
                "Encontrar o cateto a partir da hipotenusa",
                "Hipotenusa c",
                "Cateto a",
              ],
              [
                "Encontrar a área a partir do cateto",
                "Cateto a",
                "Área A",
              ],
              [
                "Encontrar o perímetro a partir do cateto",
                "Cateto a",
                "Perímetro P",
              ],
            ],
          },
        },
        "sec-what": {
          "h2": "O Que É um Triângulo 45-45-90?",
          "blocks": [
            {
              "kind": "p",
              "text": "Um triângulo 45-45-90 recebe o nome dos seus três ângulos.",
            },
            {
              "kind": "p",
              "text": "É um triângulo retângulo, o que significa que um dos seus ângulos é exatamente 90°. Os outros dois ângulos são ambos 45°, e o nome lista os três ângulos por ordem. Como o ângulo reto é fixo e os outros dois ângulos também são fixos, a forma do triângulo fica totalmente determinada: todos os triângulos 45-45-90 têm a mesma forma, e dois triângulos destes diferem apenas no tamanho.",
            },
            {
              "kind": "p",
              "text": "Chama-se triângulo retângulo especial porque os comprimentos dos seus lados seguem uma razão fixa. Na maioria dos triângulos retângulos, conhecer um lado não diz nada sobre os outros. Num triângulo 45-45-90, conhecer um lado diz tudo sobre eles, porque a razão [[1 : 1 : \\sqrt{2}]] liga os três lados entre si. É por isso que a calculadora consegue encontrar a hipotenusa, a área e o perímetro a partir de uma única entrada.",
            },
            {
              "kind": "p",
              "text": "Os três ângulos somam 180°, como tem de acontecer em qualquer triângulo:",
            },
            {
              "kind": "p",
              "text": "[[[45^\\circ + 45^\\circ + 90^\\circ = 180^\\circ]]]",
            },
            {
              "kind": "p",
              "text": "A hipotenusa é o lado mais comprido, porque fica oposta ao maior ângulo, o ângulo de 90°. Os dois catetos são iguais, porque ficam opostos a ângulos iguais. O triângulo pode ser tão pequeno como alguns milímetros ou tão grande como um terreno para construção, e os ângulos mantêm-se iguais enquanto os lados aumentam em conjunto. A razão também se mantém, por isso um triângulo com cateto de 5 cm e um triângulo com cateto de 5 m têm a mesma forma em tamanhos diferentes.",
            },
          ],
          "image": {
            "src": "forty-five-ninety-main.svg",
            "alt": "Triângulo 45-45-90 ABC legendado, com ângulos de 45, 45 e 90 graus, catetos iguais a e b, e hipotenusa c",
            "caption": "Triângulo ABC: ângulos de 45°, 45° e 90°, com catetos iguais a e b e hipotenusa c.",
          },
        },
        "sec-isosceles": {
          "h2": "Porque Se Chama Triângulo Retângulo Isósceles?",
          "blocks": [
            {
              "kind": "p",
              "text": "O nome tem duas partes, e cada parte descreve um facto.",
            },
            {
              "kind": "p",
              "text": "Isósceles significa um triângulo com dois lados iguais. Num triângulo 45-45-90, os dois lados iguais são os catetos [[a]] e [[b]]. Triângulo retângulo significa um triângulo com um ângulo de 90°. Juntando as duas palavras, o nome diz exatamente o que o triângulo é: um triângulo retângulo com dois lados iguais.",
            },
            {
              "kind": "p",
              "text": "Os catetos iguais resultam dos ângulos iguais. Em qualquer triângulo, ângulos iguais ficam opostos a lados iguais. Aqui, os dois ângulos agudos são ambos 45°, por isso os lados opostos a eles têm de ser iguais. O lado oposto ao ângulo A é [[a]], e o lado oposto ao ângulo B é [[b]], por isso [[a = b]]. Isto não é uma coincidência de um desenho: vale para todos os triângulos 45-45-90, porque os ângulos são sempre os mesmos.",
            },
            {
              "kind": "p",
              "text": "O triângulo é simétrico em relação à altura traçada do vértice do ângulo reto até à hipotenusa. Essa altura encontra a hipotenusa no seu ponto médio e em ângulo reto, e divide o triângulo maior em dois triângulos menores que são congruentes entre si. Cada triângulo pequeno tem ângulos de 45°, 45° e 90°, por isso cada um é, por si só, um triângulo 45-45-90, a metade da escala. Essa simetria é outra forma de ver porque os dois catetos têm de coincidir: uma dobra ao longo da altura sobrepõe um cateto ao outro.",
            },
            {
              "kind": "p",
              "text": "A altura do vértice do ângulo reto até à hipotenusa também tem um comprimento útil: é igual a metade da hipotenusa. Para um triângulo com hipotenusa [[c]], a altura é [[\\frac{c}{2}]]. Este facto é útil quando um problema pede a altura do triângulo medida a partir da hipotenusa, e é mais uma consequência da simetria da forma.",
            },
          ],
        },
        "sec-legs": {
          "h2": "Os Dois Catetos Iguais e a Hipotenusa",
          "blocks": [
            {
              "kind": "p",
              "text": "Dois catetos encontram-se no ângulo reto, e a hipotenusa fica do lado oposto.",
            },
            {
              "kind": "p",
              "text": "O cateto [[a]] é um lado perpendicular, o lado BC no triângulo ABC. O cateto [[b]] é o outro lado perpendicular, o lado AC. Os dois catetos encontram-se no vértice C, onde formam o ângulo de 90°, por isso são perpendiculares entre si. Qualquer um dos catetos pode servir de base do triângulo, com o outro cateto a atuar como altura, e é por isso que a fórmula da área pode usar os dois catetos diretamente.",
            },
            {
              "kind": "p",
              "text": "A hipotenusa [[c]] é o lado AB, oposto ao ângulo de 90°. É o lado mais comprido do triângulo, porque o maior ângulo fica sempre oposto ao lado mais comprido. É também o único lado que não é um cateto, por isso nunca deve ser confundida com qualquer um dos catetos. Os dois catetos são iguais, mas a hipotenusa não é igual a eles: é √2 vezes qualquer um dos catetos, cerca de 1.414 vezes mais comprida.",
            },
            {
              "kind": "p",
              "text": "Como os catetos são iguais, qualquer um deles pode ser usado como o cateto conhecido na calculadora. Se um problema der o cateto [[b]] em vez do cateto [[a]], introduza esse valor como o cateto: o resultado é o mesmo, visto que [[a = b]]. A mesma liberdade não se aplica à hipotenusa, que precisa do seu próprio modo. Identificar a hipotenusa é simples em qualquer desenho: procure o pequeno quadrado que marca o ângulo reto, e o lado do outro lado é a hipotenusa.",
            },
          ],
          "table": {
            "headers": [
              "Lado",
              "Ângulo oposto",
              "Comprimento",
            ],
            "rows": [
              [
                "Cateto a (BC)",
                "45°",
                "a",
              ],
              [
                "Cateto b (AC)",
                "45°",
                "a, igual ao cateto a",
              ],
              [
                "Hipotenusa c (AB)",
                "90°",
                "a√2, lado mais comprido",
              ],
            ],
          },
        },
        "sec-ratio": {
          "h2": "A Razão dos Lados do Triângulo 45-45-90",
          "blocks": [
            {
              "kind": "p",
              "text": "A razão 1:1:√2 fixa todos os triângulos 45-45-90.",
            },
            {
              "kind": "p",
              "text": "A razão dos lados de um triângulo 45-45-90 é:",
            },
            {
              "kind": "p",
              "text": "[[[a : b : c = 1 : 1 : \\sqrt{2}]]]",
            },
            {
              "kind": "p",
              "text": "Cada parte da razão descreve um lado. O primeiro cateto representa uma unidade, o segundo cateto também representa uma unidade e a hipotenusa representa √2 unidades. Escritos com o cateto como [[a]], os três lados são [[a = a]], [[b = a]] e [[c = a\\sqrt{2}]]. Se o cateto for 1 cm, o outro cateto é 1 cm e a hipotenusa é √2 cm. Se o cateto for 10 cm, o outro cateto é 10 cm e a hipotenusa é [[10\\sqrt{2}]] cm.",
            },
            {
              "kind": "p",
              "text": "A razão mantém-se igual seja qual for o tamanho do triângulo, porque todos os triângulos 45-45-90 são semelhantes. Ampliar ou reduzir um triângulo multiplica todos os lados pelo mesmo fator, por isso as proporções entre os lados não mudam. Use [[a = 4]] cm como exemplo: o segundo cateto é [[b = 4]] cm e a hipotenusa é [[c = 4\\sqrt{2} \\approx 5.657]] cm, e a razão [[4 : 4 : 5.657]] é a mesma que [[1 : 1 : \\sqrt{2}]].",
            },
            {
              "kind": "p",
              "text": "O valor de √2 é aproximadamente 1.41421356. É um número irracional, por isso a sua expansão decimal nunca termina e nunca se repete, e nenhum decimal é exatamente igual a ele. Mantenha a forma exata com o radical sempre que puder: escrever [[4\\sqrt{2}]] cm é exato, enquanto 5.657 cm é uma aproximação arredondada. Use a forma exata no seu raciocínio e nas respostas finais quando a pergunta pedir um valor exato, e dê o decimal apenas quando for necessária uma resposta aproximada.",
            },
          ],
          "image": {
            "src": "forty-five-ninety-ratio.svg",
            "alt": "Três barras que comparam os dois catetos iguais e a hipotenusa na razão 1 para 1 para a raiz quadrada de 2",
            "caption": "A razão fixa 1:1:√2 compara os dois catetos iguais com a hipotenusa.",
          },
        },
        "sec-why-sqrt2": {
          "h2": "Porque Aparece a Raiz Quadrada de 2?",
          "blocks": [
            {
              "kind": "p",
              "text": "A raiz quadrada de 2 vem diretamente do teorema de Pitágoras.",
            },
            {
              "kind": "p",
              "text": "Comece com os catetos iguais, [[a = b]], e aplique o teorema de Pitágoras, que vale para todos os triângulos retângulos:",
            },
            {
              "kind": "p",
              "text": "[[[a^2 + b^2 = c^2]]]",
            },
            {
              "kind": "p",
              "text": "Substitua os catetos iguais, trocando [[b]] por [[a]]:",
            },
            {
              "kind": "p",
              "text": "[[[a^2 + a^2 = c^2]]]",
            },
            {
              "kind": "p",
              "text": "Combine os dois termos idênticos:",
            },
            {
              "kind": "p",
              "text": "[[[2a^2 = c^2]]]",
            },
            {
              "kind": "p",
              "text": "Tire a raiz quadrada positiva dos dois lados. Os comprimentos dos lados são positivos, por isso a raiz negativa é descartada:",
            },
            {
              "kind": "p",
              "text": "[[[c = a\\sqrt{2}]]]",
            },
            {
              "kind": "p",
              "text": "É essa toda a razão pela qual √2 aparece: dois quadrados iguais somam o dobro de um quadrado, e a raiz quadrada de 2 é o número que desfaz essa duplicação. Esta é uma relação especial, não um atalho aproximado. Resulta dos catetos iguais mais o teorema de Pitágoras, e vale para todos os triângulos 45-45-90 sem exceção.",
            },
            {
              "kind": "p",
              "text": "Use [[a = 5]] cm como verificação numérica:",
            },
            {
              "kind": "p",
              "text": "[[[c = \\sqrt{5^2 + 5^2}]]]",
            },
            {
              "kind": "p",
              "text": "[[[c = \\sqrt{50}]]]",
            },
            {
              "kind": "p",
              "text": "[[[c = 5\\sqrt{2}]]]",
            },
            {
              "kind": "p",
              "text": "[[[c \\approx 7.071 \\text{ cm}]]]",
            },
            {
              "kind": "p",
              "text": "O passo de √50 para [[5\\sqrt{2}]] funciona porque [[50 = 25 \\times 2]], e a raiz quadrada de 25 é 5. Simplificar o radical desta forma mantém a resposta exata e torna o padrão visível: a hipotenusa é sempre o cateto vezes √2, seja qual for o comprimento do cateto.",
            },
          ],
          "image": {
            "src": "forty-five-ninety-pythagoras.svg",
            "alt": "Derivação pitagórica que mostra a ao quadrado mais a ao quadrado igual a c ao quadrado, levando a c igual a a vezes a raiz quadrada de 2",
            "caption": "De a² + a² = c², a hipotenusa tem de ser a√2.",
          },
        },
        "sec-hypotenuse": {
          "h2": "Fórmula para Encontrar a Hipotenusa a Partir de um Cateto",
          "blocks": [
            {
              "kind": "p",
              "text": "Multiplique qualquer um dos catetos por √2 para obter a hipotenusa.",
            },
            {
              "kind": "p",
              "text": "[[[c = a\\sqrt{2}]]]",
            },
            {
              "kind": "p",
              "text": "Aqui, [[c]] é a hipotenusa e [[a]] é qualquer um dos catetos. A fórmula é uma leitura direta da razão dos lados: a hipotenusa representa √2 unidades por cada 1 unidade de cateto, por isso a hipotenusa é √2 vezes o cateto. É preciso multiplicar porque a razão é uma relação de escala, e √2 aparece porque o teorema de Pitágoras obriga a hipotenusa a ser tanto mais comprida do que um cateto.",
            },
            {
              "kind": "p",
              "text": "Use [[a = 5]] cm:",
            },
            {
              "kind": "p",
              "text": "[[[c = 5\\sqrt{2}]]]",
            },
            {
              "kind": "p",
              "text": "[[[c \\approx 7.071 \\text{ cm}]]]",
            },
            {
              "kind": "p",
              "text": "O resultado é mais comprido do que qualquer um dos catetos, como tem de ser: √2 é cerca de 1.414, por isso multiplicar por ele aumenta o comprimento. A resposta exata é [[5\\sqrt{2}]] cm, e 7.071 cm é a aproximação decimal. Mantenha a forma exata quando a pergunta a pedir, e arredonde o decimal apenas no fim do seu raciocínio, nunca a meio.",
            },
            {
              "kind": "p",
              "text": "Use este modo sempre que um cateto for o lado conhecido e a hipotenusa for o lado desconhecido. Como os catetos são iguais, não importa qual o cateto que o problema dá: introduza-o como [[a]] e a fórmula dá a mesma hipotenusa. Uma verificação rápida de senso ajuda: a hipotenusa deve sair cerca de 1.414 vezes o cateto. Se a sua resposta for o dobro do cateto, ou apenas um pouco maior do que o cateto, usou o multiplicador errado.",
            },
          ],
          "image": {
            "src": "forty-five-ninety-hypotenuse.svg",
            "alt": "Triângulo 45-45-90 com cateto de 5 cm e hipotenusa legendada como 5 vezes a raiz quadrada de 2, cerca de 7.071 cm",
            "caption": "Hipotenusa a partir de um cateto: a = 5 cm dá c = 5√2 ≈ 7.071 cm.",
          },
        },
        "sec-leg-hyp": {
          "h2": "Fórmula para Encontrar um Cateto a Partir da Hipotenusa",
          "blocks": [
            {
              "kind": "p",
              "text": "Divida a hipotenusa por √2 para obter um cateto.",
            },
            {
              "kind": "p",
              "text": "[[[a = \\frac{c}{\\sqrt{2}}]]]",
            },
            {
              "kind": "p",
              "text": "Aqui, [[a]] é qualquer um dos catetos e [[c]] é a hipotenusa. Esta fórmula vem de rearranjar [[c = a\\sqrt{2}]]: dividir os dois lados por √2 isola [[a]]. Dividir por √2 reverte a multiplicação original, por isso desfaz exatamente o que a fórmula direta fez. O outro cateto tem o mesmo comprimento, por isso um cálculo dá os dois catetos de uma só vez.",
            },
            {
              "kind": "p",
              "text": "A forma racionalizada costuma ser mais fácil de usar:",
            },
            {
              "kind": "p",
              "text": "[[[a = \\frac{c\\sqrt{2}}{2}]]]",
            },
            {
              "kind": "p",
              "text": "Vem de multiplicar o numerador e o denominador de [[\\frac{c}{\\sqrt{2}}]] por √2. O denominador fica [[\\sqrt{2} \\times \\sqrt{2} = 2]], e o numerador fica [[c\\sqrt{2}]]. As duas formas dão o mesmo valor, mas a forma racionalizada não tem raiz quadrada no denominador, que é a forma que as respostas de exame esperam.",
            },
            {
              "kind": "p",
              "text": "Use [[c = 10]] cm:",
            },
            {
              "kind": "p",
              "text": "[[[a = \\frac{10}{\\sqrt{2}}]]]",
            },
            {
              "kind": "p",
              "text": "[[[a = 5\\sqrt{2}]]]",
            },
            {
              "kind": "p",
              "text": "[[[a \\approx 7.071 \\text{ cm}]]]",
            },
            {
              "kind": "p",
              "text": "Ambos os catetos são [[5\\sqrt{2}]] cm, cerca de 7.071 cm cada um. O cateto é mais curto do que a hipotenusa, como tem de ser, visto que dividir por um número maior do que 1 reduz o valor. Se a sua resposta sair maior do que a hipotenusa, multiplicou em vez de dividir, ou dividiu pelo número errado.",
            },
          ],
          "image": {
            "src": "forty-five-ninety-leg.svg",
            "alt": "Triângulo 45-45-90 com hipotenusa de 10 cm e cada cateto legendado como 5 vezes a raiz quadrada de 2, cerca de 7.071 cm",
            "caption": "Cateto a partir da hipotenusa: c = 10 cm dá a = b = 5√2 ≈ 7.071 cm.",
          },
        },
        "sec-area": {
          "h2": "Como Calcular a Área de um Triângulo 45-45-90",
          "blocks": [
            {
              "kind": "p",
              "text": "A área só precisa de um cateto, porque os catetos são iguais.",
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
              "text": "Como [[a = b]], substitua para obter a área a partir de um só cateto:",
            },
            {
              "kind": "p",
              "text": "[[[A = \\frac{a^2}{2}]]]",
            },
            {
              "kind": "p",
              "text": "A divisão por dois é necessária porque um triângulo cobre metade do retângulo formado pelos seus dois catetos. A área final é expressa em unidades quadradas, como centímetros quadrados, porque a área mede superfície, não comprimento. Um quadrado de lado [[a]] tem área [[a^2]], e o triângulo é exatamente metade desse quadrado, que é outra forma de ver porque a fórmula é [[\\frac{a^2}{2}]].",
            },
            {
              "kind": "p",
              "text": "Use [[a = 6]] cm:",
            },
            {
              "kind": "p",
              "text": "[[[A = \\frac{6 \\times 6}{2}]]]",
            },
            {
              "kind": "p",
              "text": "[[[A = \\frac{36}{2}]]]",
            },
            {
              "kind": "p",
              "text": "[[[A = 18 \\text{ cm}^2]]]",
            },
            {
              "kind": "p",
              "text": "O modo de área da calculadora aceita o cateto e calcula a área diretamente, por isso só introduz [[a]]. Se conhece a hipotenusa em vez do cateto, encontre primeiro o cateto com [[a = \\frac{c}{\\sqrt{2}}]], e depois use [[A = \\frac{a^2}{2}]]. Há também um atalho a partir apenas da hipotenusa: [[A = \\frac{c^2}{4}]], que dá o mesmo resultado. Para [[c = 10]] cm, [[A = \\frac{100}{4} = 25]] cm².",
            },
            {
              "kind": "p",
              "text": "A área cresce com o quadrado do cateto, por isso dobrar o cateto quadruplica a área. Um triângulo com [[a = 12]] cm tem quatro vezes a área do triângulo com [[a = 6]] cm, 72 cm² em vez de 18 cm², e não o dobro. Essa relação quadrática é fácil de esquecer, por isso verifique-a sempre que um problema ampliar ou reduzir um triângulo.",
            },
          ],
          "image": {
            "src": "forty-five-ninety-area-perimeter.svg",
            "alt": "Triângulo 45-45-90 com cateto de 6 cm, hipotenusa de 6 vezes a raiz quadrada de 2 cm, área de 18 centímetros quadrados e perímetro de cerca de 20.485 cm",
            "caption": "Área e perímetro a partir do cateto: a = 6 cm dá A = 18 cm² e P ≈ 20.485 cm.",
          },
        },
        "sec-perimeter": {
          "h2": "Como Calcular o Perímetro de um Triângulo 45-45-90",
          "blocks": [
            {
              "kind": "p",
              "text": "Some os três lados e depois ponha o cateto em evidência.",
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
              "text": "Como [[a = b]] e [[c = a\\sqrt{2}]], substitua essas relações:",
            },
            {
              "kind": "p",
              "text": "[[[P = 2a + a\\sqrt{2}]]]",
            },
            {
              "kind": "p",
              "text": "Ponha [[a]] em evidência para obter a forma simplificada:",
            },
            {
              "kind": "p",
              "text": "[[[P = a(2 + \\sqrt{2})]]]",
            },
            {
              "kind": "p",
              "text": "Os três comprimentos dos lados estão todos incluídos, porque o perímetro percorre toda a fronteira do triângulo: desce por um cateto, atravessa o outro cateto e volta ao longo da hipotenusa. Deixar de fora qualquer lado dá uma distância mais curta que não é o perímetro. O perímetro é uma medida linear, não uma medida de área, por isso a resposta é em unidades simples, como centímetros, nunca em centímetros quadrados.",
            },
            {
              "kind": "p",
              "text": "Use [[a = 5]] cm:",
            },
            {
              "kind": "p",
              "text": "[[[P = 5(2 + \\sqrt{2})]]]",
            },
            {
              "kind": "p",
              "text": "[[[P = 10 + 5\\sqrt{2}]]]",
            },
            {
              "kind": "p",
              "text": "[[[P \\approx 17.071 \\text{ cm}]]]",
            },
            {
              "kind": "p",
              "text": "A forma exata é [[10 + 5\\sqrt{2}]] cm, e 17.071 cm é a forma decimal. O modo de perímetro da calculadora aceita o cateto e soma os três lados internamente. Há também um atalho a partir apenas da hipotenusa: [[P = c(1 + \\sqrt{2})]]. Para [[c = 10]] cm, isso dá [[P = 10(1 + \\sqrt{2}) \\approx 24.142]] cm. O perímetro cresce em proporção direta com o cateto, por isso dobrar o cateto duplica o perímetro.",
            },
          ],
        },
        "sec-square": {
          "h2": "Como a Diagonal de um Quadrado Cria um Triângulo 45-45-90",
          "blocks": [
            {
              "kind": "p",
              "text": "Uma diagonal divide um quadrado em dois triângulos 45-45-90 idênticos.",
            },
            {
              "kind": "p",
              "text": "Um quadrado tem quatro lados iguais e quatro cantos de 90°. Trace uma diagonal, de um canto ao canto oposto, e o quadrado divide-se em dois triângulos. Cada triângulo tem dois lados que são lados do quadrado, por isso esses dois lados são iguais, e o ângulo entre eles é um canto do quadrado, 90°. A diagonal é o terceiro lado, oposto a esse ângulo reto, por isso é a hipotenusa.",
            },
            {
              "kind": "p",
              "text": "A diagonal também divide ao meio os dois ângulos dos cantos por onde passa. Cada canto do quadrado é 90°, e a diagonal divide-o em dois ângulos de 45°. Isso dá a cada triângulo ângulos de 45°, 45° e 90°, que é exatamente um triângulo 45-45-90. Os dois triângulos são congruentes: têm os mesmos comprimentos de lado e os mesmos ângulos, porque partilham a diagonal e cada um fica com dois lados do mesmo quadrado.",
            },
            {
              "kind": "p",
              "text": "Use um quadrado com comprimento de lado [[a]]. A diagonal [[d]] é a hipotenusa do triângulo, por isso o teorema de Pitágoras dá:",
            },
            {
              "kind": "p",
              "text": "[[[d^2 = a^2 + a^2]]]",
            },
            {
              "kind": "p",
              "text": "[[[d^2 = 2a^2]]]",
            },
            {
              "kind": "p",
              "text": "[[[d = a\\sqrt{2}]]]",
            },
            {
              "kind": "p",
              "text": "Use um quadrado com lado de 8 cm:",
            },
            {
              "kind": "p",
              "text": "[[[d = 8\\sqrt{2}]]]",
            },
            {
              "kind": "p",
              "text": "[[[d \\approx 11.314 \\text{ cm}]]]",
            },
            {
              "kind": "p",
              "text": "É por isso que os cálculos da diagonal de um quadrado usam sempre a mesma relação com √2. Sempre que precisar da diagonal de um quadrado, multiplique o lado por √2; sempre que conhecer a diagonal e precisar do lado, divida-a por √2. A mesma regra aplica-se a ladrilhos quadrados, molduras quadradas, terrenos quadrados e qualquer outra forma quadrada, porque todos os quadrados se dividem da mesma forma.",
            },
          ],
          "image": {
            "src": "forty-five-ninety-square-diagonal.svg",
            "alt": "Quadrado de lado 8 cm dividido por uma diagonal em dois triângulos 45-45-90 congruentes, diagonal de cerca de 11.314 cm",
            "caption": "A diagonal de um quadrado de lado 8 cm é d = 8√2 ≈ 11.314 cm.",
          },
        },
        "sec-step-example": {
          "h2": "Exemplo Passo a Passo de Resolução de um Triângulo 45-45-90",
          "blocks": [
            {
              "kind": "p",
              "text": "Um triângulo, a = 5 cm, resolvido do princípio ao fim.",
            },
            {
              "kind": "p",
              "text": "Comece com o cateto [[a = 5]] cm e encontre todas as outras medidas do triângulo, uma fórmula de cada vez. Cada passo usa uma fórmula das secções acima, e a tabela de resumo no fim reúne os resultados.",
            },
            {
              "kind": "steps",
              "steps": [
                "Encontre o segundo cateto: os catetos são iguais, por isso [[b = 5]] cm.",
                "Encontre a hipotenusa: [[c = a\\sqrt{2} = 5\\sqrt{2} \\approx 7.071]] cm.",
                "Encontre a área: [[A = \\frac{a^2}{2} = \\frac{25}{2} = 12.5]] centímetros quadrados.",
                "Encontre o perímetro: [[P = a + b + c = 5 + 5 + 5\\sqrt{2} = 10 + 5\\sqrt{2} \\approx 17.071]] cm.",
              ],
            },
            {
              "kind": "p",
              "text": "As quatro medidas descrevem o mesmo triângulo. Os lados [[5]], [[5]] e [[7.071]] satisfazem a razão [[1 : 1 : \\sqrt{2}]] e o teorema de Pitágoras, [[5^2 + 5^2 = 25 + 25 = 50 = (5\\sqrt{2})^2]]. A área e o perímetro são dois tipos diferentes de medida desse mesmo triângulo: a área cobre a sua superfície, enquanto o perímetro percorre a sua fronteira. Se mudar o cateto, todos os outros valores mudam com ele, mas a razão entre os lados nunca muda.",
            },
          ],
          "table": {
            "headers": [
              "Medida",
              "Valor exato",
              "Valor aproximado",
            ],
            "rows": [
              [
                "Cateto a",
                "5 cm",
                "5 cm",
              ],
              [
                "Cateto b",
                "5 cm",
                "5 cm",
              ],
              [
                "Hipotenusa c",
                "5√2 cm",
                "7.071 cm",
              ],
              [
                "Área A",
                "25/2 cm²",
                "12.5 cm²",
              ],
              [
                "Perímetro P",
                "10 + 5√2 cm",
                "17.071 cm",
              ],
            ],
          },
        },
        "sec-examples": {
          "h2": "Exemplos Resolvidos de Cálculos com Triângulos 45-45-90",
          "blocks": [
            {
              "kind": "p",
              "text": "Oito exemplos resolvidos, cobrindo cada modo da calculadora e uma diagonal de quadrado.",
            },
            {
              "kind": "h3",
              "text": "Exemplo 1: Encontrar a Hipotenusa a Partir de um Cateto",
            },
            {
              "kind": "p",
              "text": "Dado [[a = 4]] cm. Fórmula: [[c = a\\sqrt{2}]]. Substituição: [[c = 4\\sqrt{2}]]. Resposta exata: [[4\\sqrt{2}]] cm. Aproximação decimal: [[c \\approx 5.657]] cm. A hipotenusa é cerca de 1.414 vezes o cateto, por isso 4 cm tornam-se cerca de 5.657 cm. Mantenha a forma exata [[4\\sqrt{2}]] cm quando a pergunta pedir um valor exato.",
            },
            {
              "kind": "h3",
              "text": "Exemplo 2: Encontrar a Hipotenusa a Partir de um Cateto Maior",
            },
            {
              "kind": "p",
              "text": "Dado [[a = 8]] cm. Fórmula: [[c = a\\sqrt{2}]]. Substituição: [[c = 8\\sqrt{2}]]. Resposta exata: [[8\\sqrt{2}]] cm. Aproximação decimal: [[c \\approx 11.314]] cm. Este é o mesmo cálculo do Exemplo 1 ao dobro da escala, e a resposta é exatamente o dobro, o que confirma a escala linear dos comprimentos dos lados. O mesmo valor é a diagonal de um quadrado de lado 8 cm.",
            },
            {
              "kind": "h3",
              "text": "Exemplo 3: Encontrar um Cateto a Partir da Hipotenusa",
            },
            {
              "kind": "p",
              "text": "Dado [[c = 12]] cm. Fórmula: [[a = \\frac{c}{\\sqrt{2}}]]. Substituição: [[a = \\frac{12}{\\sqrt{2}}]]. Racionalizar dá [[a = 6\\sqrt{2}]] cm. Aproximação decimal: [[a \\approx 8.485]] cm. Ambos os catetos são [[6\\sqrt{2}]] cm, porque os catetos são iguais. O cateto é mais curto do que a hipotenusa, como tem de ser.",
            },
            {
              "kind": "h3",
              "text": "Exemplo 4: Encontrar um Cateto a Partir de uma Hipotenusa Maior",
            },
            {
              "kind": "p",
              "text": "Dado [[c = 20]] cm. Fórmula: [[a = \\frac{c\\sqrt{2}}{2}]]. Substituição: [[a = \\frac{20\\sqrt{2}}{2} = 10\\sqrt{2}]] cm. Aproximação decimal: [[a \\approx 14.142]] cm. Ambos os catetos são [[10\\sqrt{2}]] cm. Uma verificação rápida: [[a\\sqrt{2} = 10\\sqrt{2} \\times \\sqrt{2} = 20]] cm, o que devolve a hipotenusa dada.",
            },
            {
              "kind": "h3",
              "text": "Exemplo 5: Calcular a Área",
            },
            {
              "kind": "p",
              "text": "Dado [[a = 7]] cm. Fórmula: [[A = \\frac{a^2}{2}]]. Substituição: [[A = \\frac{49}{2}]]. Resultado: [[A = 24.5]] cm². A área é exata, sem raiz quadrada e sem arredondamento, porque [[7^2 = 49]] se divide por dois de forma limpa. A área é em unidades quadradas, ao contrário dos comprimentos dos lados, por isso a unidade é cm², e não cm.",
            },
            {
              "kind": "h3",
              "text": "Exemplo 6: Calcular o Perímetro",
            },
            {
              "kind": "p",
              "text": "Dado [[a = 6]] cm. Fórmula: [[P = a(2 + \\sqrt{2})]]. Substituição: [[P = 6(2 + \\sqrt{2})]]. Resposta exata: [[P = 12 + 6\\sqrt{2}]] cm. Aproximação decimal: [[P \\approx 20.485]] cm. Somar os lados um a um dá o mesmo resultado: [[6 + 6 + 6\\sqrt{2} = 12 + 6\\sqrt{2}]] cm. O perímetro é em unidades simples, não em unidades quadradas.",
            },
            {
              "kind": "h3",
              "text": "Exemplo 7: Encontrar a Diagonal de um Quadrado",
            },
            {
              "kind": "p",
              "text": "Dado um quadrado com lado de 10 m. Fórmula: [[d = a\\sqrt{2}]]. Substituição: [[d = 10\\sqrt{2}]] m. Resposta exata: [[10\\sqrt{2}]] m. Aproximação decimal: [[d \\approx 14.142]] m. A diagonal divide o quadrado em dois triângulos 45-45-90, cada um com catetos de 10 m e hipotenusa [[10\\sqrt{2}]] m. Esta é a mesma fórmula que encontrar uma hipotenusa a partir de um cateto, porque a diagonal é a hipotenusa.",
            },
            {
              "kind": "h3",
              "text": "Exemplo 8: Encontrar a Hipotenusa a Partir de um Cateto Decimal",
            },
            {
              "kind": "p",
              "text": "Dado [[a = 2.5]] cm. Fórmula: [[c = a\\sqrt{2}]]. Substituição: [[c = 2.5\\sqrt{2}]]. Resposta exata: [[2.5\\sqrt{2}]] cm. Aproximação decimal: [[c \\approx 3.536]] cm. Entradas decimais funcionam exatamente como entradas de números inteiros: multiplique por √2, mantenha primeiro a forma exata e arredonde o decimal apenas no passo final. O segundo cateto também é 2.5 cm.",
            },
            {
              "kind": "p",
              "text": "As respostas exatas e as aproximações decimais servem propósitos diferentes. A forma exata, como [[4\\sqrt{2}]] cm, é precisa e é o que as respostas de exame costumam exigir. A forma decimal, como 5.657 cm, é mais fácil de imaginar e de medir com uma régua. Dê primeiro a forma exata, depois o decimal, e arredonde o decimal apenas no passo final.",
            },
          ],
        },
        "sec-exact": {
          "h2": "Respostas Exatas Versus Aproximações Decimais",
          "blocks": [
            {
              "kind": "p",
              "text": "Uma resposta exata mantém √2; uma resposta decimal arredonda-o.",
            },
            {
              "kind": "p",
              "text": "Compare a resposta exata [[5\\sqrt{2}]] cm com a aproximação decimal 7.071 cm. A primeira é exata: indica o comprimento com precisão, usando o símbolo √2 para representar o número irracional cujo quadrado é 2. A segunda é arredondada: indica o comprimento com três casas decimais, o que está perto do valor verdadeiro mas não é igual a ele. A diferença é pequena, cerca de 0.00007 cm, mas é real, e importa em demonstrações e em cálculos posteriores.",
            },
            {
              "kind": "p",
              "text": "O número √2 é irracional, o que significa que não pode ser escrito como uma fração de dois números inteiros, e a sua expansão decimal nunca termina e nunca se repete. Começa por 1.41421356 e continua sem fim. Qualquer decimal que escrever para ele, por mais longo que seja, é uma aproximação. É por isso que a notação exata com radicais é preferível em demonstrações matemáticas e em respostas de exame que pedem um valor exato: o radical mantém toda a precisão que um decimal perde.",
            },
            {
              "kind": "p",
              "text": "Uma aproximação decimal é mais prática quando precisa de medir, cortar ou construir alguma coisa. Uma régua não consegue medir [[5\\sqrt{2}]] cm diretamente, mas consegue medir 7.071 cm. Um carpinteiro que corta uma travessa diagonal precisa do decimal, enquanto um estudante que demonstra um teorema precisa da forma exata. Use cada forma onde ela se adequa, e assinale os decimais como aproximados para que ninguém os confunda com valores exatos.",
            },
            {
              "kind": "p",
              "text": "O arredondamento deve ser feito no fim de um cálculo, e não a meio. Se substituir √2 por 1.41 cedo e depois multiplicar, todos os passos seguintes carregam esse erro. Para [[a = 5]] cm, usar 1.41 dá [[c = 7.05]] cm, enquanto a aproximação correta é 7.071 cm. Mantenha √2 exato ao longo do raciocínio, na forma [[5\\sqrt{2}]], e arredonde apenas a resposta final. Nunca apresente um decimal arredondado como se fosse exato.",
            },
          ],
        },
        "sec-verify": {
          "h2": "Como Verificar os Seus Cálculos com Triângulos 45-45-90",
          "blocks": [
            {
              "kind": "p",
              "text": "Quatro verificações rápidas apanham quase todos os erros.",
            },
            {
              "kind": "p",
              "text": "Faça pelo menos uma verificação em cada resposta, e as quatro quando o problema importa. O exemplo abaixo usa sempre o triângulo com [[a = 5]] cm, [[b = 5]] cm e [[c = 5\\sqrt{2} \\approx 7.071]] cm.",
            },
            {
              "kind": "h3",
              "text": "Verificação 1: Catetos Iguais",
            },
            {
              "kind": "p",
              "text": "Confirme [[a = b]]. Aqui, ambos os catetos são 5 cm, por isso a verificação passa. Se os seus dois catetos diferirem, um deles está errado, ou o triângulo não é um triângulo 45-45-90. Esta é a verificação mais rápida de todas, porque não precisa de aritmética: os dois catetos têm de coincidir exatamente.",
            },
            {
              "kind": "h3",
              "text": "Verificação 2: Razão dos Lados",
            },
            {
              "kind": "p",
              "text": "Divida a hipotenusa por um cateto: [[\\frac{c}{a} = \\sqrt{2} \\approx 1.414]]. Aqui, [[\\frac{7.071}{5} \\approx 1.414]], por isso a razão mantém-se. Se a divisão der 2, usou por engano a duplicação do triângulo 30-60-90. Se der cerca de 1.732, usou √3 por engano. A razão [[\\frac{c}{a}]] tem de ser √2, e mais nada.",
            },
            {
              "kind": "h3",
              "text": "Verificação 3: Teorema de Pitágoras",
            },
            {
              "kind": "p",
              "text": "Confirme [[a^2 + b^2 = c^2]]. Aqui, [[5^2 + 5^2 = 25 + 25 = 50]], e [[(5\\sqrt{2})^2 = 25 \\times 2 = 50]], por isso o teorema mantém-se. Esta verificação apanha catetos trocados e multiplicadores errados, porque usar o valor errado para qualquer lado quebra a igualdade. A <a href=\"/pythagorean-theorem-calculator/\">calculadora do teorema de Pitágoras</a> faz esta verificação para quaisquer três comprimentos de lado.",
            },
            {
              "kind": "h3",
              "text": "Verificação 4: Soma dos Ângulos",
            },
            {
              "kind": "p",
              "text": "Confirme [[45^\\circ + 45^\\circ + 90^\\circ = 180^\\circ]]. Esta verificação diz respeito à configuração do problema e não à aritmética: se os ângulos do seu triângulo não somarem 180°, ou se não forem 45°, 45° e 90°, as fórmulas do triângulo 45-45-90 não se aplicam, e nenhum comprimento de lado obtido a partir delas pode ser fiável. Confirme primeiro os ângulos, e depois confie nos lados.",
            },
          ],
        },
        "sec-properties": {
          "h2": "Propriedades Importantes dos Triângulos 45-45-90",
          "blocks": [
            {
              "kind": "p",
              "text": "Dez propriedades resultam da razão fixa.",
            },
            {
              "kind": "list",
              "items": [
                "O triângulo tem sempre ângulos de 45°, 45° e 90°, e esses ângulos somam sempre 180°.",
                "Ambos os catetos são iguais, [[a = b]], porque ficam opostos a ângulos iguais de 45°.",
                "A hipotenusa é o lado mais comprido, porque fica oposta ao ângulo de 90°.",
                "A hipotenusa é √2 vezes qualquer um dos catetos, [[c = a\\sqrt{2}]], onde [[\\sqrt{2} \\approx 1.41421356]].",
                "Todos os triângulos 45-45-90 são semelhantes, porque têm os mesmos três ângulos e as mesmas proporções dos lados.",
                "A razão dos lados [[1 : 1 : \\sqrt{2}]] é independente do tamanho do triângulo, por isso ampliar o triângulo deixa a razão inalterada.",
                "A altura até à hipotenusa divide o triângulo em dois triângulos 45-45-90 menores e congruentes.",
                "A altura até à hipotenusa é igual a metade da hipotenusa, [[\\frac{c}{2}]].",
                "A área é metade do quadrado de um cateto, [[A = \\frac{a^2}{2}]], por isso dobrar o cateto quadruplica a área.",
                "O perímetro é [[P = a(2 + \\sqrt{2})]], por isso dobrar o cateto duplica o perímetro.",
              ],
            },
            {
              "kind": "p",
              "text": "Cada propriedade resulta dos ângulos e da razão, e não de um único exemplo. Os ângulos iguais obrigam a catetos iguais, os catetos iguais mais o teorema de Pitágoras obrigam à hipotenusa com √2, e a hipotenusa com √2 obriga às fórmulas da área e do perímetro. Uma vez aceites os três ângulos, tudo o resto fica fixo, e é por isso que um lado conhecido basta para descrever o triângulo inteiro.",
            },
          ],
        },
        "sec-vs-3060": {
          "h2": "Diferença Entre Triângulos 45-45-90 e 30-60-90",
          "blocks": [
            {
              "kind": "p",
              "text": "Os dois triângulos especiais parecem-se, mas as suas razões nunca se misturam.",
            },
            {
              "kind": "p",
              "text": "Ambos são triângulos retângulos especiais, e ambos permitem encontrar todos os lados a partir de um lado conhecido. A diferença está nos ângulos: um triângulo 45-45-90 tem dois ângulos agudos iguais, enquanto um triângulo 30-60-90 tem dois ângulos agudos diferentes. Essa única diferença muda completamente a razão dos lados, por isso as fórmulas de um triângulo dão respostas erradas para o outro.",
            },
            {
              "kind": "p",
              "text": "Um triângulo 45-45-90 é isósceles, com dois catetos iguais, enquanto um triângulo 30-60-90 é escaleno, sem lados iguais. Num triângulo 45-45-90, a hipotenusa é √2 vezes um cateto, enquanto num triângulo 30-60-90 a hipotenusa é o dobro do cateto menor. O cateto maior de um triângulo 30-60-90 é √3 vezes o cateto menor, e não há um lado correspondente num triângulo 45-45-90, porque os seus dois catetos têm o mesmo comprimento. Para um tratamento completo do outro triângulo, consulte a <a href=\"/30-60-90-triangle-calculator/\">calculadora de triângulo 30-60-90</a>, que usa a razão 1:√3:2.",
            },
            {
              "kind": "p",
              "text": "As fórmulas não podem ser trocadas. Usar [[c = 2a]] num triângulo 45-45-90 com [[a = 5]] cm dá 10 cm, enquanto a hipotenusa correta é cerca de 7.071 cm. Usar [[c = a\\sqrt{2}]] num triângulo 30-60-90 com cateto menor de 5 cm dá cerca de 7.071 cm, enquanto a hipotenusa correta é 10 cm. Confirme sempre os ângulos antes de escolher uma fórmula: ângulos agudos iguais significam 45-45-90, e ângulos de 30° e 60° significam 30-60-90.",
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
                "Lados iguais",
                "Dois catetos iguais",
                "Nenhum cateto igual",
              ],
              [
                "Hipotenusa",
                "Cateto × √2",
                "Cateto menor × 2",
              ],
              [
                "Cateto maior",
                "Igual ao cateto menor",
                "Cateto menor × √3",
              ],
              [
                "Tipo de triângulo",
                "Retângulo isósceles",
                "Retângulo escaleno",
              ],
            ],
          },
          "image": {
            "src": "forty-five-ninety-vs-3060.svg",
            "alt": "Dois triângulos retângulos especiais lado a lado, um triângulo 45-45-90 com razão 1 para 1 para a raiz quadrada de 2 e um triângulo 30-60-90 com razão 1 para a raiz quadrada de 3 para 2",
            "caption": "45-45-90 usa 1:1:√2; 30-60-90 usa 1:√3:2. As razões nunca devem ser trocadas.",
          },
        },
        "sec-mistakes": {
          "h2": "Erros Comuns ao Resolver Triângulos 45-45-90",
          "blocks": [
            {
              "kind": "p",
              "text": "Catorze erros aparecem vezes sem conta em problemas com triângulos 45-45-90.",
            },
            {
              "kind": "steps",
              "steps": [
                "Assumir que a hipotenusa é o dobro do cateto: duplicar pertence ao triângulo 30-60-90. Para [[a = 5]] cm, duplicar dá 10 cm, enquanto a hipotenusa correta é [[5\\sqrt{2} \\approx 7.071]] cm. Correto: [[c = a\\sqrt{2}]].",
                "Usar √3 em vez de √2: √3 pertence ao triângulo 30-60-90, cuja razão é [[1 : \\sqrt{3} : 2]]. Um triângulo 45-45-90 usa sempre √2. Correto: [[c = a\\sqrt{2}]].",
                "Esquecer que ambos os catetos são iguais: os dois catetos têm sempre o mesmo comprimento, por isso, se um problema der um cateto, o outro cateto já é conhecido. Para [[a = 5]] cm, [[b = 5]] cm, e não uma nova incógnita. Correto: [[a = b]].",
                "Tratar a hipotenusa como um dos catetos: a hipotenusa é o lado oposto ao ângulo de 90°, e é mais comprida do que qualquer um dos catetos. Usá-la como cateto na fórmula da área dá uma área errada. Correto: identifique primeiro a hipotenusa pela marca do ângulo reto.",
                "Usar [[c = a\\sqrt{3}]]: isto mistura os dois triângulos especiais. Para [[a = 5]] cm, [[a\\sqrt{3} \\approx 8.660]] cm não é nem a hipotenusa nem um cateto deste triângulo. Correto: [[c = a\\sqrt{2} \\approx 7.071]] cm.",
                "Dividir a hipotenusa por 2 em vez de √2: dividir por dois dá o cateto menor do triângulo 30-60-90, e não o cateto do triângulo 45-45-90. Para [[c = 10]] cm, dividir por dois dá 5 cm, enquanto o cateto correto é [[5\\sqrt{2} \\approx 7.071]] cm. Correto: [[a = \\frac{c}{\\sqrt{2}}]].",
                "Esquecer de elevar o cateto ao quadrado ao calcular a área: a área precisa de [[a^2]], e não de [[a]]. Usar [[A = \\frac{a}{2}]] para [[a = 6]] cm dá 3 cm², enquanto a área correta é [[\\frac{36}{2} = 18]] cm². Correto: [[A = \\frac{a^2}{2}]].",
                "Somar apenas os dois catetos ao calcular o perímetro: o perímetro precisa dos três lados. Somar apenas os dois catetos para [[a = 5]] cm dá 10 cm, enquanto o verdadeiro perímetro é cerca de 17.071 cm. Correto: [[P = a + b + c]].",
                "Confundir respostas exatas com aproximações decimais: [[5\\sqrt{2}]] cm é exato, enquanto 7.071 cm é arredondado. Escrever 7.071 cm como se fosse exato perde a precisão que o radical mantém. Correto: dê primeiro a forma exata, depois o decimal.",
                "Arredondar √2 demasiado cedo: usar 1.41 para √2 a meio de um cálculo desloca todos os passos seguintes. Para [[a = 5]] cm, [[5 \\times 1.41 = 7.05]] cm em vez de 7.071 cm. Correto: mantenha √2 exato ao longo do raciocínio e arredonde apenas a resposta final.",
                "Misturar unidades de medida: um cateto em centímetros e uma hipotenusa em metros não podem ser combinados diretamente. Converta todas as medidas para uma unidade antes de calcular. Correto: 0.5 m é igual a 50 cm; depois calcule em centímetros.",
                "Confundir as razões 45-45-90 e 30-60-90: as razões [[1 : 1 : \\sqrt{2}]] e [[1 : \\sqrt{3} : 2]] pertencem a triângulos diferentes. Trocá-las dá uma hipotenusa errada por uma margem grande. Correto: confirme os ângulos e depois escolha a razão que lhes corresponde.",
                "Esquecer que a área exige unidades quadradas: uma área de 18 cm está errada na unidade, mesmo que o número esteja certo. A área mede superfície, por isso são 18 centímetros quadrados. Correto: [[A = 18]] cm².",
                "Usar as fórmulas para um triângulo retângulo qualquer: as fórmulas [[c = a\\sqrt{2}]] e [[A = \\frac{a^2}{2}]] só valem quando os ângulos são 45°, 45° e 90°. Um triângulo retângulo com ângulos de 40° e 50° tem uma razão diferente. Correto: confirme primeiro os ângulos e depois use as fórmulas.",
              ],
            },
          ],
        },
        "sec-applications": {
          "h2": "Aplicações Práticas dos Triângulos 45-45-90",
          "blocks": [
            {
              "kind": "p",
              "text": "A razão aparece sempre que um quadrado é cortado ao meio.",
            },
            {
              "kind": "p",
              "text": "O uso mais comum é encontrar a diagonal de um quadrado. Um ladrilho quadrado com lado de 30 cm tem uma diagonal de [[30\\sqrt{2} \\approx 42.426]] cm, que é o comprimento a cortar quando um ladrilho tem de ser dividido de canto a canto. Uma moldura quadrada, um tampo de mesa quadrado e um terreno quadrado usam todos o mesmo cálculo, porque todos os quadrados se dividem em dois triângulos 45-45-90.",
            },
            {
              "kind": "p",
              "text": "Os trabalhos de casa de geometria e os exercícios de trigonometria usam problemas 45-45-90 para testar se os alunos conseguem identificar os catetos iguais, aplicar a razão e manter respostas exatas com radicais. Um aluno que conhece um lado de um triângulo destes consegue encontrar os restantes sem medir, que é o objetivo da razão. As demonstrações em sala de aula usam o triângulo para mostrar como uma razão fixa transforma uma medida numa descrição completa de uma forma, e como cortar um quadrado ao meio produz o triângulo.",
            },
            {
              "kind": "p",
              "text": "O desenho técnico, os projetos de arquitetura e a geometria da construção usam relações 45-45-90 quando um projeto pede um ângulo de 45°, como uma travessa diagonal, um padrão de base quadrada ou um canto cortado a 45°. Um construtor que conhece um lado de um triângulo destes consegue encontrar a distância diagonal sem a medir diretamente. O trabalho no plano cartesiano usa a mesma ideia: um movimento de 5 unidades para a direita e 5 unidades para cima cobre uma distância diagonal de [[5\\sqrt{2} \\approx 7.071]] unidades. Estes são usos realistas da própria geometria, e não afirmações sobre tolerâncias de engenharia: o trabalho real de projeto acrescenta limites de materiais e margens de segurança para além dos valores geométricos exatos desta página.",
            },
          ],
        },
        "sec-practice": {
          "h2": "Problemas de Prática com Respostas",
          "blocks": [
            {
              "kind": "p",
              "text": "Resolva os seis problemas no papel antes de ler as respostas.",
            },
            {
              "kind": "h3",
              "text": "Problema 1: Encontrar a Hipotenusa a Partir de um Cateto",
            },
            {
              "kind": "p",
              "text": "Um triângulo 45-45-90 tem um cateto de [[a = 9]] cm. Encontre a hipotenusa [[c]].",
            },
            {
              "kind": "h3",
              "text": "Problema 2: Encontrar um Cateto a Partir da Hipotenusa",
            },
            {
              "kind": "p",
              "text": "Um triângulo 45-45-90 tem uma hipotenusa de [[c = 14]] cm. Encontre o cateto [[a]].",
            },
            {
              "kind": "h3",
              "text": "Problema 3: Calcular a Área",
            },
            {
              "kind": "p",
              "text": "Um triângulo 45-45-90 tem um cateto de [[a = 10]] cm. Encontre a área [[A]].",
            },
            {
              "kind": "h3",
              "text": "Problema 4: Calcular o Perímetro",
            },
            {
              "kind": "p",
              "text": "Um triângulo 45-45-90 tem um cateto de [[a = 3]] cm. Encontre o perímetro [[P]].",
            },
            {
              "kind": "h3",
              "text": "Problema 5: Encontrar a Diagonal de um Quadrado",
            },
            {
              "kind": "p",
              "text": "Um quadrado tem um lado com 12 cm. Encontre o comprimento da sua diagonal.",
            },
            {
              "kind": "h3",
              "text": "Problema 6: Verificar um Triângulo 45-45-90 Proposto",
            },
            {
              "kind": "p",
              "text": "Um triângulo tem catetos de 6 cm e 6 cm e uma hipotenusa de [[6\\sqrt{2}]] cm. Use o teorema de Pitágoras para verificar que estes comprimentos de lado formam um triângulo 45-45-90.",
            },
            {
              "kind": "h3",
              "text": "Respostas dos Problemas de Prática",
            },
            {
              "kind": "p",
              "text": "Resposta 1: [[c = a\\sqrt{2} = 9\\sqrt{2} \\approx 12.728]] cm. A resposta exata é [[9\\sqrt{2}]] cm.",
            },
            {
              "kind": "p",
              "text": "Resposta 2: [[a = \\frac{c\\sqrt{2}}{2} = \\frac{14\\sqrt{2}}{2} = 7\\sqrt{2} \\approx 9.899]] cm. Ambos os catetos são [[7\\sqrt{2}]] cm.",
            },
            {
              "kind": "p",
              "text": "Resposta 3: [[A = \\frac{a^2}{2} = \\frac{100}{2} = 50]] cm². A área é exata, sem arredondamento.",
            },
            {
              "kind": "p",
              "text": "Resposta 4: [[P = a(2 + \\sqrt{2}) = 3(2 + \\sqrt{2}) = 6 + 3\\sqrt{2} \\approx 10.243]] cm. Somar os lados um a um dá o mesmo resultado: [[3 + 3 + 3\\sqrt{2} = 6 + 3\\sqrt{2}]] cm.",
            },
            {
              "kind": "p",
              "text": "Resposta 5: [[d = a\\sqrt{2} = 12\\sqrt{2} \\approx 16.971]] cm. A diagonal é a hipotenusa do triângulo 45-45-90 formado ao cortar o quadrado ao meio.",
            },
            {
              "kind": "p",
              "text": "Resposta 6: [[a^2 + b^2 = 36 + 36 = 72]], e [[c^2 = (6\\sqrt{2})^2 = 36 \\times 2 = 72]]. Os dois lados coincidem, e os catetos são iguais, por isso o triângulo é um triângulo 45-45-90 com hipotenusa de cerca de 8.485 cm.",
            },
          ],
        },
      },
      "relatedHeading": "Calculadoras de Triângulos Retângulos Relacionadas",
      "relatedIntro": "Cada calculadora abaixo trata uma tarefa diferente com triângulos retângulos, por isso escolha a ferramenta que corresponde à medida de que precisa.",
      "relatedItems": [
        "Calculadora de Triângulo Retângulo Especial",
        "Calculadora de Triângulo 30-60-90",
        "Calculadora de Lados de Triângulo Retângulo",
        "Calculadora de Área de Triângulo Retângulo",
        "Calculadora de Perímetro de Triângulo Retângulo",
        "Calculadora do Teorema de Pitágoras",
      ],
      "faqHeading": "Perguntas Frequentes",
      "faqs": [
        {
          "question": "O que é um triângulo 45-45-90?",
          "answer": "Um triângulo 45-45-90 é um triângulo retângulo com ângulos de 45°, 45° e 90°. Chama-se triângulo retângulo isósceles porque os seus dois catetos são iguais. Os seus lados seguem sempre a razão fixa [[1 : 1 : \\sqrt{2}]], por isso conhecer um lado basta para encontrar todos os outros.",
        },
        {
          "question": "Qual é a razão dos lados de um triângulo 45-45-90?",
          "answer": "A razão dos lados é [[a : b : c = 1 : 1 : \\sqrt{2}]], onde [[a]] e [[b]] são os catetos iguais e [[c]] é a hipotenusa. Isso significa [[b = a]] e [[c = a\\sqrt{2}]]. A razão é a mesma para todos os triângulos 45-45-90, seja qual for o seu tamanho.",
        },
        {
          "question": "Porque são ambos os catetos iguais?",
          "answer": "Os dois ângulos agudos são ambos 45°, e em qualquer triângulo ângulos iguais ficam opostos a lados iguais. O lado oposto ao ângulo A é o cateto [[a]], e o lado oposto ao ângulo B é o cateto [[b]], por isso [[a = b]]. O triângulo também é simétrico em relação à altura do ângulo reto até à hipotenusa.",
        },
        {
          "question": "Porque é que a hipotenusa é multiplicada por √2?",
          "answer": "O teorema de Pitágoras dá [[a^2 + a^2 = c^2]], que se simplifica para [[2a^2 = c^2]]. Tirar a raiz quadrada dá [[c = a\\sqrt{2}]]. O √2 aparece porque dois quadrados iguais somam o dobro de um quadrado, por isso a hipotenusa tem de ser √2 vezes um cateto.",
        },
        {
          "question": "Como encontro a hipotenusa a partir de um cateto?",
          "answer": "Multiplique o cateto por √2 usando [[c = a\\sqrt{2}]]. Para [[a = 5]] cm, [[c = 5\\sqrt{2} \\approx 7.071]] cm. Qualquer um dos catetos serve, porque os catetos são iguais. Mantenha a forma exata [[5\\sqrt{2}]] cm quando a pergunta pedir um valor exato.",
        },
        {
          "question": "Como encontro um cateto a partir da hipotenusa?",
          "answer": "Divida a hipotenusa por √2 usando [[a = \\frac{c}{\\sqrt{2}}]], ou use a forma racionalizada [[a = \\frac{c\\sqrt{2}}{2}]]. Para [[c = 10]] cm, [[a = 5\\sqrt{2} \\approx 7.071]] cm. Ambos os catetos têm este mesmo comprimento, porque os catetos são iguais.",
        },
        {
          "question": "Como calculo a área de um triângulo 45-45-90?",
          "answer": "Use [[A = \\frac{a^2}{2}]], onde [[a]] é um cateto. Os dois catetos atuam como base e altura, e o triângulo cobre metade do quadrado formado por eles. Para [[a = 6]] cm, [[A = \\frac{36}{2} = 18]] cm². A área é sempre em unidades quadradas.",
        },
        {
          "question": "Como calculo o seu perímetro?",
          "answer": "Some os três lados com [[P = a + b + c]], que se simplifica para [[P = a(2 + \\sqrt{2})]]. Para [[a = 5]] cm, [[P = 10 + 5\\sqrt{2} \\approx 17.071]] cm. O perímetro é uma medida linear, por isso a resposta é em unidades simples, e não em unidades quadradas.",
        },
        {
          "question": "Porque é que a diagonal de um quadrado cria um triângulo 45-45-90?",
          "answer": "Uma diagonal divide um quadrado em dois triângulos, cada um com dois lados do quadrado e um ângulo de canto de 90°. A diagonal também divide ao meio dois ângulos dos cantos, em 45° cada um. Cada triângulo tem, portanto, ângulos de 45°, 45° e 90°, e a sua hipotenusa é a diagonal, [[d = a\\sqrt{2}]].",
        },
        {
          "question": "√2 é um número exato ou uma aproximação?",
          "answer": "O símbolo √2 representa um número irracional exato cujo quadrado é 2, mas a sua expansão decimal nunca termina, começando por 1.41421356. Qualquer decimal que escrever para ele é uma aproximação. Mantenha a forma com o radical nas respostas exatas, e use um decimal apenas quando for necessário um valor medido ou arredondado.",
        },
        {
          "question": "Todos os triângulos 45-45-90 são semelhantes?",
          "answer": "Sim. Todos os triângulos 45-45-90 têm os mesmos três ângulos, 45°, 45° e 90°, e a mesma razão dos lados [[1 : 1 : \\sqrt{2}]]. Dois triângulos destes diferem apenas no tamanho, nunca na forma. Ampliar ou reduzir um deles multiplica todos os lados pelo mesmo fator, por isso as proporções mantêm-se fixas.",
        },
        {
          "question": "Qual é a diferença entre triângulos 45-45-90 e 30-60-90?",
          "answer": "Um triângulo 45-45-90 tem ângulos de 45°, 45° e 90°, catetos iguais e razão [[1 : 1 : \\sqrt{2}]]. Um triângulo 30-60-90 tem ângulos de 30°, 60° e 90°, nenhum lado igual e razão [[1 : \\sqrt{3} : 2]]. As suas fórmulas não podem ser trocadas, por isso confirme sempre primeiro os ângulos.",
        },
      ],
    },
};
