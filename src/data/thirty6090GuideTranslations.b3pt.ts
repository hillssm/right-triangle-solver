// thirty6090GuideTranslations.bpt.ts: 30-60-90 Triangle
// Guide (Page 39 of 45) translation.
export const THIRTY6090_B3_PT = {
  "pt": {
      "meta": {
        "title": "Calculadora de triângulo 30-60-90: lados, área e perímetro",
        "description": "Use a calculadora de triângulo 30-60-90 para encontrar o cateto menor, o cateto maior, a hipotenusa, a área e o perímetro a partir de um lado conhecido usando a razão 1:√3:2.",
        "primaryKeyword": "30-60-90 Triangle Calculator",
        "slug": "30-60-90-triangle-calculator",
      },
      "tocHeading": "Conteúdo do guia",
      "tocItems": {
        "sec-intro": "Calculadora de triângulo 30-60-90",
        "sec-calculate": "Calcular lados desconhecidos, área e perímetro",
        "sec-what": "O que é um triângulo 30-60-90?",
        "sec-sides": "Entendendo o cateto menor, o cateto maior e a hipotenusa",
        "sec-ratio": "A razão dos lados do triângulo 30-60-90",
        "sec-why-sqrt3": "Por que aparece a raiz quadrada de 3?",
        "sec-long-leg": "Fórmula para encontrar o cateto maior a partir do cateto menor",
        "sec-hypotenuse": "Fórmula para encontrar a hipotenusa a partir do cateto menor",
        "sec-short-leg-hyp": "Fórmula para encontrar o cateto menor a partir da hipotenusa",
        "sec-short-leg-long": "Fórmula para encontrar o cateto menor a partir do cateto maior",
        "sec-long-leg-hyp": "Fórmula para encontrar o cateto maior a partir da hipotenusa",
        "sec-area": "Como calcular a área de um triângulo 30-60-90",
        "sec-perimeter": "Como calcular o perímetro de um triângulo 30-60-90",
        "sec-step-example": "Exemplo passo a passo de resolução de um triângulo 30-60-90",
        "sec-examples": "Exemplos resolvidos de cálculos com triângulos 30-60-90",
        "sec-derive-pythagoras": "Como deduzir a razão do triângulo 30-60-90 usando Pitágoras",
        "sec-equilateral": "Relação entre triângulos 30-60-90 e triângulos equiláteros",
        "sec-trig": "Relações trigonométricas em um triângulo 30-60-90",
        "sec-verify": "Como verificar os cálculos do seu triângulo 30-60-90",
        "sec-properties": "Propriedades importantes dos triângulos 30-60-90",
        "sec-mistakes": "Erros comuns ao resolver triângulos 30-60-90",
        "sec-applications": "Aplicações práticas dos triângulos 30-60-90",
        "sec-practice": "Problemas de prática com respostas",
        "sec-related": "Explorar calculadoras de triângulo retângulo relacionadas",
        "sec-faq": "Perguntas frequentes",
      },
      "sections": {
        "sec-intro": {
          "h2": "Calculadora de triângulo 30-60-90",
          "blocks": [
            {
              "kind": "p",
              "text": "Encontre todos os lados desconhecidos, a área e o perímetro de um triângulo 30-60-90 a partir de um único lado conhecido.",
            },
            {
              "kind": "p",
              "text": "Um triângulo 30-60-90 é um triângulo retângulo cujos três ângulos medem 30°, 60° e 90°. Ele é chamado de triângulo retângulo especial porque os comprimentos dos seus lados sempre seguem a mesma razão fixa, não importa o tamanho do triângulo. A calculadora de triângulo 30-60-90 desta página usa essa razão para encontrar o cateto menor, o cateto maior, a hipotenusa, a área e o perímetro a partir de um comprimento de lado que você informar.",
            },
            {
              "kind": "p",
              "text": "No triângulo ABC, o ângulo A mede 30°, o ângulo B mede 60° e o ângulo C mede 90°. O lado BC é o cateto menor [[a]], oposto ao ângulo de 30°. O lado AC é o cateto maior [[b]], oposto ao ângulo de 60°. O lado AB é a hipotenusa [[c]], oposta ao ângulo de 90°. Os três lados sempre satisfazem [[a : b : c = 1 : \\sqrt{3} : 2]], o que significa [[b = a\\sqrt{3}]] e [[c = 2a]].",
            },
            {
              "kind": "p",
              "text": "Se [[a = 5]] cm, então [[b = 5\\sqrt{3} \\approx 8.660]] cm e [[c = 2 \\times 5 = 10]] cm. A calculadora também pode calcular a área e o perímetro a partir do mesmo cateto menor, então uma única medida basta para descrever o triângulo inteiro. As seções abaixo explicam a razão, os sete modos da calculadora e as fórmulas, com exemplos resolvidos em cada etapa.",
            },
          ],
        },
        "sec-calculate": {
          "h2": "Calcular lados desconhecidos, área e perímetro",
          "blocks": [
            {
              "kind": "p",
              "text": "Sete modos cobrem todas as formas de começar a partir de um lado conhecido.",
            },
            {
              "kind": "p",
              "text": "A calculadora desta página tem sete modos, um para cada medida que ela pode encontrar. Escolha o modo que corresponde ao lado que você conhece e à medida de que precisa. Cada modo pede apenas uma entrada, porque a razão fixa preenche todo o resto. A tabela abaixo lista os sete modos com a entrada que cada um precisa e o resultado que ele devolve.",
            },
            {
              "kind": "p",
              "text": "Para usar um modo, primeiro descubra qual lado você conhece. O lado oposto ao ângulo de 30° é o cateto menor [[a]], o lado oposto ao ângulo de 60° é o cateto maior [[b]] e o lado oposto ao ângulo de 90° é a hipotenusa [[c]]. Informe essa medida como um número positivo, escolha uma unidade e clique no botão Calcular. O resultado aparece com a resolução passo a passo, para que você veja a fórmula e a substituição, e não apenas a resposta. Use Redefinir para limpar os campos antes de começar um novo problema.",
            },
            {
              "kind": "p",
              "text": "Modos diferentes precisam de fórmulas diferentes porque cada um começa a partir de um lado conhecido diferente. Encontrar o cateto maior a partir do cateto menor multiplica por √3, enquanto encontrar o cateto menor a partir da hipotenusa divide por 2. Os modos de área e perímetro começam a partir do cateto menor e calculam os outros lados internamente primeiro, e depois aplicam a fórmula da área ou do perímetro. Você nunca precisa calcular os lados desconhecidos por conta própria antes de usar esses dois modos.",
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
                "Cateto maior a partir do cateto menor",
                "Cateto menor a",
                "Cateto maior b",
              ],
              [
                "Hipotenusa a partir do cateto menor",
                "Cateto menor a",
                "Hipotenusa c",
              ],
              [
                "Cateto menor a partir da hipotenusa",
                "Hipotenusa c",
                "Cateto menor a",
              ],
              [
                "Cateto menor a partir do cateto maior",
                "Cateto maior b",
                "Cateto menor a",
              ],
              [
                "Cateto maior a partir da hipotenusa",
                "Hipotenusa c",
                "Cateto maior b",
              ],
              [
                "Área a partir do cateto menor",
                "Cateto menor a",
                "Área A",
              ],
              [
                "Perímetro a partir do cateto menor",
                "Cateto menor a",
                "Perímetro P",
              ],
            ],
          },
          "image": {
            "src": "thirty-60-90-modes.svg",
            "alt": "Visão geral dos sete modos da calculadora 30-60-90, mostrando a entrada conhecida e a saída calculada de cada modo",
            "caption": "Sete modos: cada um começa a partir de um único lado conhecido e encontra uma medida desconhecida.",
          },
        },
        "sec-what": {
          "h2": "O que é um triângulo 30-60-90?",
          "blocks": [
            {
              "kind": "p",
              "text": "Um triângulo 30-60-90 recebe esse nome por causa dos seus três ângulos.",
            },
            {
              "kind": "p",
              "text": "Ele é um triângulo retângulo, o que significa que um dos seus ângulos mede exatamente 90°. Os outros dois ângulos medem 30° e 60°, e o nome lista os três em ordem. Como o ângulo reto é fixo e os outros dois ângulos também são fixos, a forma do triângulo fica totalmente determinada: todo triângulo 30-60-90 tem a mesma forma, e dois triângulos desse tipo diferem apenas em tamanho.",
            },
            {
              "kind": "p",
              "text": "Ele é chamado de triângulo retângulo especial porque os comprimentos dos seus lados seguem uma razão fixa. Na maioria dos triângulos retângulos, conhecer um lado não diz nada sobre os outros. Em um triângulo 30-60-90, conhecer um lado revela todos eles, porque a razão [[1 : \\sqrt{3} : 2]] mantém os três lados ligados. É por isso que a calculadora consegue encontrar cinco medidas a partir de uma única entrada.",
            },
            {
              "kind": "p",
              "text": "Os três ângulos somam 180°, como devem somar em todo triângulo: [[30° + 60° + 90° = 180°]]. O triângulo pode ser tão pequeno quanto alguns milímetros ou tão grande quanto um terreno, e os ângulos permanecem os mesmos enquanto os lados aumentam juntos. A razão também permanece a mesma, então um triângulo com cateto menor de 5 cm e um triângulo com cateto menor de 5 m têm a mesma forma em tamanhos diferentes.",
            },
          ],
          "image": {
            "src": "thirty-60-90-main.svg",
            "alt": "Triângulo 30-60-90 ABC rotulado, com ângulos de 30, 60 e 90 graus, cateto menor a, cateto maior a vezes a raiz quadrada de 3 e hipotenusa 2a",
            "caption": "Triângulo ABC: ângulos de 30°, 60° e 90°, com lados a, a√3 e 2a.",
          },
        },
        "sec-sides": {
          "h2": "Entendendo o cateto menor, o cateto maior e a hipotenusa",
          "blocks": [
            {
              "kind": "p",
              "text": "Os três lados recebem seus nomes a partir dos ângulos opostos a eles.",
            },
            {
              "kind": "p",
              "text": "O cateto menor [[a]] é o lado oposto ao ângulo de 30°. Ele é o menor lado do triângulo, porque o menor ângulo sempre fica oposto ao menor lado. No triângulo ABC, ele é o lado BC. O cateto menor é o ponto de partida natural da maioria dos cálculos, porque os outros dois lados são múltiplos simples dele: o cateto maior é [[a\\sqrt{3}]] e a hipotenusa é [[2a]].",
            },
            {
              "kind": "p",
              "text": "O cateto maior [[b]] é o lado oposto ao ângulo de 60°. Ele é maior que o cateto menor e menor que a hipotenusa. No triângulo ABC, ele é o lado AC. Seu comprimento é [[\\sqrt{3} \\approx 1.732]] vezes o cateto menor, então ele é um pouco menos que o dobro. A hipotenusa [[c]] é o lado oposto ao ângulo de 90°, o lado AB, e é o maior lado do triângulo, exatamente o dobro do cateto menor.",
            },
            {
              "kind": "p",
              "text": "Identificar os lados pelos ângulos opostos é mais confiável do que julgar pela forma como o desenho está feito. Um triângulo pode ser girado ou virado, então o cateto menor pode aparecer à esquerda, à direita ou embaixo. A regra do ângulo oposto nunca muda: encontre o ângulo de 30°, e o lado em frente a ele é o cateto menor. Encontre o ângulo de 90°, marcado com um pequeno quadrado, e o lado em frente a ele é a hipotenusa.",
            },
          ],
          "table": {
            "headers": [
              "Lado",
              "Ângulo oposto",
              "Tamanho",
            ],
            "rows": [
              [
                "Cateto menor a",
                "30°",
                "Menor",
              ],
              [
                "Cateto maior b",
                "60°",
                "Intermediário",
              ],
              [
                "Hipotenusa c",
                "90°",
                "Maior",
              ],
            ],
          },
        },
        "sec-ratio": {
          "h2": "A razão dos lados do triângulo 30-60-90",
          "blocks": [
            {
              "kind": "p",
              "text": "A razão 1:√3:2 fixa todo triângulo 30-60-90.",
            },
            {
              "kind": "p",
              "text": "A razão dos lados de um triângulo 30-60-90 é:",
            },
            {
              "kind": "p",
              "text": "[[[a : b : c = 1 : \\sqrt{3} : 2]]]",
            },
            {
              "kind": "p",
              "text": "Cada parte da razão descreve um lado. O cateto menor representa uma unidade, o cateto maior representa √3 unidades e a hipotenusa representa duas unidades. Escritos com o cateto menor como [[a]], os três lados são [[a = a]], [[b = a\\sqrt{3}]] e [[c = 2a]]. Se o cateto menor mede 1 cm, o cateto maior mede √3 cm e a hipotenusa mede 2 cm. Se o cateto menor mede 10 cm, o cateto maior mede [[10\\sqrt{3}]] cm e a hipotenusa mede 20 cm.",
            },
            {
              "kind": "p",
              "text": "A razão permanece a mesma, não importa o tamanho do triângulo, porque todos os triângulos 30-60-90 são semelhantes. Aumentar ou diminuir um triângulo multiplica todos os lados pelo mesmo fator, então as proporções entre os lados não mudam. Use [[a = 4]] cm como exemplo: o cateto maior é [[b = 4\\sqrt{3} \\approx 6.928]] cm e a hipotenusa é [[c = 8]] cm, e a razão [[4 : 6.928 : 8]] é a mesma que [[1 : \\sqrt{3} : 2]].",
            },
            {
              "kind": "p",
              "text": "Mantenha a forma radical exata sempre que puder. √3 é aproximadamente 1.732, mas é um número irracional, então nenhum decimal é exatamente igual a ele. Escrever [[4\\sqrt{3}]] cm é exato, enquanto 6.928 cm é uma aproximação arredondada. Use a forma exata no seu desenvolvimento e nas respostas finais quando a questão pedir um valor exato, e apresente o decimal apenas quando for preciso um valor aproximado.",
            },
          ],
          "image": {
            "src": "thirty-60-90-ratio.svg",
            "alt": "Três barras comparando o cateto menor, o cateto maior e a hipotenusa na razão 1 para raiz quadrada de 3 para 2",
            "caption": "A razão fixa 1:√3:2 compara o cateto menor, o cateto maior e a hipotenusa.",
          },
        },
        "sec-why-sqrt3": {
          "h2": "Por que aparece a raiz quadrada de 3?",
          "blocks": [
            {
              "kind": "p",
              "text": "A raiz quadrada de 3 vem de cortar um triângulo equilátero ao meio.",
            },
            {
              "kind": "p",
              "text": "Comece com um triângulo equilátero cujo lado mede [[2a]]. Os três lados são iguais e os três ângulos medem 60°. Agora trace uma altura de um vértice até o lado oposto. A altura é a linha que parte do vértice e encontra o lado oposto em um ângulo reto.",
            },
            {
              "kind": "p",
              "text": "A altura divide a base ao meio, separando-a em dois segmentos iguais de comprimento [[a]]. Ela também divide o triângulo equilátero em dois triângulos retângulos congruentes. Cada triângulo menor tem ângulos de 30°, 60° e 90°: o ângulo de 60° permanece na base, a altura cria um ângulo de 90° onde encontra a base, e o ângulo de 60° no vértice superior é dividido em dois ângulos de 30°. A hipotenusa de cada triângulo pequeno é o lado do triângulo equilátero, [[2a]], e o cateto menor é metade da base, [[a]].",
            },
            {
              "kind": "p",
              "text": "O outro cateto do triângulo pequeno é a própria altura. Chame-o de [[b]] e aplique o teorema de Pitágoras:",
            },
            {
              "kind": "p",
              "text": "[[[b^2 = (2a)^2 - a^2]]]",
            },
            {
              "kind": "p",
              "text": "[[[b^2 = 4a^2 - a^2]]]",
            },
            {
              "kind": "p",
              "text": "[[[b^2 = 3a^2]]]",
            },
            {
              "kind": "p",
              "text": "[[[b = a\\sqrt{3}]]]",
            },
            {
              "kind": "p",
              "text": "O 3 dentro da raiz quadrada vem de [[4a^2 - a^2 = 3a^2]], a diferença entre o quadrado da hipotenusa e o quadrado do cateto menor. Essa é toda a razão pela qual √3 aparece em todas as fórmulas do triângulo 30-60-90: o cateto maior é a altura de um triângulo equilátero, e Pitágoras o obriga a ser [[a\\sqrt{3}]]. A dedução também prova a razão dos lados, porque os três lados do triângulo pequeno são agora [[a]], [[a\\sqrt{3}]] e [[2a]].",
            },
          ],
          "image": {
            "src": "thirty-60-90-equilateral.svg",
            "alt": "Triângulo equilátero de lado 2a dividido por uma altura em dois triângulos 30-60-90 congruentes, com altura a vezes a raiz quadrada de 3",
            "caption": "Uma altura divide um triângulo equilátero de lado 2a em dois triângulos 30-60-90.",
          },
        },
        "sec-long-leg": {
          "h2": "Fórmula para encontrar o cateto maior a partir do cateto menor",
          "blocks": [
            {
              "kind": "p",
              "text": "Multiplique o cateto menor por √3 para obter o cateto maior.",
            },
            {
              "kind": "p",
              "text": "[[[b = a\\sqrt{3}]]]",
            },
            {
              "kind": "p",
              "text": "Aqui [[b]] é o cateto maior e [[a]] é o cateto menor. A fórmula é uma leitura direta da razão dos lados: o cateto maior representa √3 unidades para cada 1 unidade de cateto menor, então o cateto maior é √3 vezes o cateto menor. A multiplicação é necessária porque a razão é uma relação de escala, e √3 aparece porque o cateto maior é a altura do triângulo equilátero que gera este triângulo.",
            },
            {
              "kind": "p",
              "text": "Use [[a = 5]] cm como exemplo:",
            },
            {
              "kind": "p",
              "text": "[[[b = 5\\sqrt{3}]]]",
            },
            {
              "kind": "p",
              "text": "[[[b \\approx 8.660 \\text{ cm}]]]",
            },
            {
              "kind": "p",
              "text": "O resultado é maior que o cateto menor, como deve ser: √3 é cerca de 1.732, então multiplicar por ele aumenta o comprimento. A resposta exata é [[5\\sqrt{3}]] cm, e 8.660 cm é a aproximação decimal. Mantenha a forma exata quando a questão pedir, e arredonde o decimal apenas no fim do seu desenvolvimento, nunca no meio.",
            },
            {
              "kind": "p",
              "text": "Use este modo sempre que o cateto menor for o lado conhecido e o cateto maior for o desconhecido. Em um problema de livro, o cateto menor costuma ser o lado oposto ao ângulo de 30°, então verifique o ângulo antes de multiplicar. Uma verificação rápida de bom senso ajuda: o cateto maior deve sair um pouco menos que o dobro do cateto menor, já que √3 é um pouco menos que 2. Se a sua resposta for mais que o dobro do cateto menor, você multiplicou pelo número errado.",
            },
          ],
          "image": {
            "src": "thirty-60-90-long-leg.svg",
            "alt": "Triângulo 30-60-90 com cateto menor de 5 cm e cateto maior rotulado como 5 vezes a raiz quadrada de 3, cerca de 8.660 cm",
            "caption": "Cateto maior a partir do cateto menor: a = 5 cm resulta em b = 5√3 ≈ 8.660 cm.",
          },
        },
        "sec-hypotenuse": {
          "h2": "Fórmula para encontrar a hipotenusa a partir do cateto menor",
          "blocks": [
            {
              "kind": "p",
              "text": "Dobre o cateto menor para obter a hipotenusa.",
            },
            {
              "kind": "p",
              "text": "[[[c = 2a]]]",
            },
            {
              "kind": "p",
              "text": "Aqui [[c]] é a hipotenusa e [[a]] é o cateto menor. A hipotenusa é sempre exatamente o dobro do cateto menor, sem nenhuma raiz quadrada envolvida. Esta é a mais simples das fórmulas do triângulo 30-60-90, e também a mais útil para verificações mentais rápidas.",
            },
            {
              "kind": "p",
              "text": "A razão vem do triângulo equilátero. A hipotenusa do triângulo 30-60-90 é um lado inteiro do triângulo equilátero, enquanto o cateto menor é metade de um lado, porque a altura divide a base ao meio. Um lado inteiro é o dobro de meio lado, então a hipotenusa é o dobro do cateto menor. Use [[a = 7]] cm:",
            },
            {
              "kind": "p",
              "text": "[[[c = 2 \\times 7]]]",
            },
            {
              "kind": "p",
              "text": "[[[c = 14 \\text{ cm}]]]",
            },
            {
              "kind": "p",
              "text": "A resposta é exata, sem arredondamento, porque dobrar um número inteiro resulta em um número inteiro. Se o cateto menor for um decimal, a hipotenusa ainda é exatamente o dobro dele, então [[a = 2.5]] cm resulta em [[c = 5]] cm.",
            },
            {
              "kind": "p",
              "text": "Este é o modo a escolher quando um problema informa o cateto menor e pede o maior lado. Como a resposta é uma simples duplicação, ela também é a maneira mais rápida de perceber um cateto menor errado: se a hipotenusa do problema não for o dobro do seu cateto menor, ou o cateto menor está errado ou o triângulo não é um triângulo 30-60-90. Verifique os ângulos antes de confiar na duplicação.",
            },
          ],
          "image": {
            "src": "thirty-60-90-hypotenuse.svg",
            "alt": "Triângulo 30-60-90 com cateto menor de 5 cm e hipotenusa rotulada como 2a igual a 10 cm",
            "caption": "Hipotenusa a partir do cateto menor: c = 2a, então a = 5 cm resulta em c = 10 cm.",
          },
        },
        "sec-short-leg-hyp": {
          "h2": "Fórmula para encontrar o cateto menor a partir da hipotenusa",
          "blocks": [
            {
              "kind": "p",
              "text": "Divida a hipotenusa ao meio para obter o cateto menor.",
            },
            {
              "kind": "p",
              "text": "[[[a = \\frac{c}{2}]]]",
            },
            {
              "kind": "p",
              "text": "Aqui [[a]] é o cateto menor e [[c]] é a hipotenusa. Esta fórmula é o inverso de [[c = 2a]]: como a hipotenusa é o dobro do cateto menor, o cateto menor é metade da hipotenusa. Reorganizar [[c = 2a]] dividindo os dois lados por 2 resulta em [[a = \\frac{c}{2}]].",
            },
            {
              "kind": "p",
              "text": "Use [[c = 18]] cm:",
            },
            {
              "kind": "p",
              "text": "[[[a = \\frac{18}{2}]]]",
            },
            {
              "kind": "p",
              "text": "[[[a = 9 \\text{ cm}]]]",
            },
            {
              "kind": "p",
              "text": "A resposta é exata, sem raiz quadrada e sem arredondamento. Esta relação vale especificamente para triângulos 30-60-90. Em um triângulo retângulo geral, a hipotenusa não é o dobro do cateto menor, então não use esta fórmula a menos que você saiba que os ângulos são 30°, 60° e 90°. Se a hipotenusa for um número ímpar, o cateto menor é um valor com meio, por exemplo [[c = 15]] cm resulta em [[a = 7.5]] cm.",
            },
            {
              "kind": "p",
              "text": "Este modo é o ponto de partida da maioria dos problemas que informam a hipotenusa. Quando o cateto menor é conhecido, o cateto maior segue de [[b = a\\sqrt{3}]] e a área e o perímetro seguem de suas próprias fórmulas. Uma resposta com meio é normal aqui e não é sinal de erro, então não arredonde 7.5 cm para 8 cm: a metade exata é a resposta correta.",
            },
          ],
        },
        "sec-short-leg-long": {
          "h2": "Fórmula para encontrar o cateto menor a partir do cateto maior",
          "blocks": [
            {
              "kind": "p",
              "text": "Divida o cateto maior por √3 para obter o cateto menor.",
            },
            {
              "kind": "p",
              "text": "[[[a = \\frac{b}{\\sqrt{3}}]]]",
            },
            {
              "kind": "p",
              "text": "Aqui [[a]] é o cateto menor e [[b]] é o cateto maior. Esta fórmula vem de reorganizar [[b = a\\sqrt{3}]]: dividir os dois lados por √3 isola [[a]]. Dividir por √3 reverte a multiplicação original, então desfaz exatamente o que a fórmula direta fez.",
            },
            {
              "kind": "p",
              "text": "Use [[b = 12]] cm:",
            },
            {
              "kind": "p",
              "text": "[[[a = \\frac{12}{\\sqrt{3}}]]]",
            },
            {
              "kind": "p",
              "text": "Racionalize o denominador multiplicando o numerador e o denominador por √3: [[a = \\frac{12\\sqrt{3}}{3} = 4\\sqrt{3}]] cm, o que é aproximadamente 6.928 cm. A resposta exata é [[4\\sqrt{3}]] cm, e 6.928 cm é a forma decimal. O cateto menor é menor que o cateto maior, como deve ser, já que dividir por um número maior que 1 diminui o valor.",
            },
            {
              "kind": "p",
              "text": "Racionalizar vale a pena porque deixa a resposta na forma exata padrão, um número inteiro vezes √3. Uma aproximação decimal esconde essa estrutura, e uma fração não racionalizada com √3 no denominador não é a forma que as respostas de prova esperam. Quando o cateto maior já é um múltiplo de √3, a divisão é limpa: [[b = 9\\sqrt{3}]] cm resulta em [[a = 9]] cm diretamente.",
            },
          ],
        },
        "sec-long-leg-hyp": {
          "h2": "Fórmula para encontrar o cateto maior a partir da hipotenusa",
          "blocks": [
            {
              "kind": "p",
              "text": "Multiplique metade da hipotenusa por √3 para obter o cateto maior.",
            },
            {
              "kind": "p",
              "text": "[[[b = \\frac{c\\sqrt{3}}{2}]]]",
            },
            {
              "kind": "p",
              "text": "Aqui [[b]] é o cateto maior e [[c]] é a hipotenusa. Esta fórmula é construída a partir de dois passos. Primeiro encontre o cateto menor com [[a = \\frac{c}{2}]], depois encontre o cateto maior com [[b = a\\sqrt{3}]]. Substituir a primeira fórmula na segunda resulta em [[b = \\frac{c}{2}\\sqrt{3}]], que é o mesmo que [[b = \\frac{c\\sqrt{3}}{2}]].",
            },
            {
              "kind": "p",
              "text": "Use [[c = 16]] cm:",
            },
            {
              "kind": "p",
              "text": "[[[b = \\frac{16\\sqrt{3}}{2}]]]",
            },
            {
              "kind": "p",
              "text": "[[[b = 8\\sqrt{3} \\approx 13.856 \\text{ cm}]]]",
            },
            {
              "kind": "p",
              "text": "O resultado fica entre o cateto menor e a hipotenusa, como deveria. O cateto menor aqui é [[a = 8]] cm, o cateto maior é cerca de 13.856 cm e a hipotenusa é 16 cm, então [[8 < 13.856 < 16]]. Essa ordem é uma verificação rápida para qualquer resposta desta fórmula.",
            },
            {
              "kind": "p",
              "text": "Fazer o cálculo em dois passos é um bom hábito, mesmo que a fórmula única faça os dois de uma vez. Encontre o cateto menor primeiro, [[a = \\frac{c}{2} = 8]] cm, depois multiplique por √3. Se o caminho em dois passos e a fórmula única discordarem, o erro está na aritmética, não na fórmula, e o caminho em dois passos mostra exatamente onde ele aconteceu.",
            },
          ],
        },
        "sec-area": {
          "h2": "Como calcular a área de um triângulo 30-60-90",
          "blocks": [
            {
              "kind": "p",
              "text": "A área precisa apenas do cateto menor, porque o cateto maior segue a partir dele.",
            },
            {
              "kind": "p",
              "text": "A área de qualquer triângulo retângulo é metade do produto dos seus dois catetos, porque os catetos atuam como base e altura perpendicular:",
            },
            {
              "kind": "p",
              "text": "[[[A = \\frac{ab}{2}]]]",
            },
            {
              "kind": "p",
              "text": "Como [[b = a\\sqrt{3}]], substitua para obter a área apenas a partir do cateto menor:",
            },
            {
              "kind": "p",
              "text": "[[[A = \\frac{a^2\\sqrt{3}}{2}]]]",
            },
            {
              "kind": "p",
              "text": "A divisão por dois é necessária porque um triângulo cobre metade do retângulo formado pelos seus dois catetos. A área final é expressa em unidades quadradas, como centímetros quadrados, porque a área mede superfície, não comprimento. Use [[a = 6]] cm. Primeiro encontre o cateto maior, [[b = 6\\sqrt{3}]] cm, depois calcule:",
            },
            {
              "kind": "p",
              "text": "[[[A = \\frac{6 \\times 6\\sqrt{3}}{2}]]]",
            },
            {
              "kind": "p",
              "text": "[[[A = 18\\sqrt{3} \\approx 31.177 \\text{ cm}^2]]]",
            },
            {
              "kind": "p",
              "text": "O modo de área da calculadora aceita o cateto menor e calcula o cateto maior internamente, então você informa apenas [[a]] e a calculadora faz o resto. Se você conhece o cateto maior em vez do cateto menor, use a <a href=\"/right-triangle-area-calculator/\">calculadora de área do triângulo retângulo</a>, que aceita os dois catetos diretamente.",
            },
            {
              "kind": "p",
              "text": "A área cresce com o quadrado do cateto menor, então dobrar o cateto menor quadruplica a área. Um triângulo com [[a = 12]] cm tem quatro vezes a área do triângulo com [[a = 6]] cm, cerca de 124.708 cm², e não o dobro. Essa relação quadrática é fácil de esquecer, então verifique-a sempre que um problema aumentar ou diminuir um triângulo.",
            },
          ],
          "image": {
            "src": "thirty-60-90-area.svg",
            "alt": "Triângulo 30-60-90 com cateto menor de 6 cm e cateto maior de 6 vezes a raiz quadrada de 3 cm como base e altura, área de 18 vezes a raiz quadrada de 3 centímetros quadrados",
            "caption": "Área a partir do cateto menor: a = 6 cm resulta em A = 18√3 ≈ 31.177 cm².",
          },
        },
        "sec-perimeter": {
          "h2": "Como calcular o perímetro de um triângulo 30-60-90",
          "blocks": [
            {
              "kind": "p",
              "text": "Some os três lados e depois coloque o cateto menor em evidência.",
            },
            {
              "kind": "p",
              "text": "O perímetro é o comprimento total ao redor do triângulo:",
            },
            {
              "kind": "p",
              "text": "[[[P = a + b + c]]]",
            },
            {
              "kind": "p",
              "text": "Substitua as relações especiais do triângulo, [[b = a\\sqrt{3}]] e [[c = 2a]]:",
            },
            {
              "kind": "p",
              "text": "[[[P = a + a\\sqrt{3} + 2a]]]",
            },
            {
              "kind": "p",
              "text": "Combine os termos semelhantes para obter a forma simplificada:",
            },
            {
              "kind": "p",
              "text": "[[[P = a(3 + \\sqrt{3})]]]",
            },
            {
              "kind": "p",
              "text": "Os três comprimentos de lado estão incluídos, porque o perímetro percorre toda a fronteira do triângulo: descendo pelo cateto menor, atravessando o cateto maior e voltando pela hipotenusa. Deixar qualquer lado de fora resulta em uma distância menor, que não é o perímetro. O perímetro é uma medida linear, não uma medida de área, então a resposta é em unidades simples, como centímetros, nunca em centímetros quadrados.",
            },
            {
              "kind": "p",
              "text": "Use [[a = 5]] cm:",
            },
            {
              "kind": "p",
              "text": "[[[P = 5(3 + \\sqrt{3})]]]",
            },
            {
              "kind": "p",
              "text": "[[[P \\approx 23.660 \\text{ cm}]]]",
            },
            {
              "kind": "p",
              "text": "A forma exata é [[5(3 + \\sqrt{3})]] cm, e 23.660 cm é a forma decimal. O modo de perímetro da calculadora aceita o cateto menor e soma os três lados internamente. Se você já conhece os três lados, a <a href=\"/right-triangle-perimeter-calculator/\">calculadora de perímetro do triângulo retângulo</a> os soma diretamente.",
            },
            {
              "kind": "p",
              "text": "O perímetro cresce em proporção direta ao cateto menor, então dobrar o cateto menor dobra o perímetro. Um triângulo com [[a = 10]] cm tem um perímetro de cerca de 47.321 cm, exatamente o dobro dos 23.660 cm do triângulo com [[a = 5]] cm. Essa escala linear é uma verificação útil: se dobrar o cateto menor não dobrar o seu perímetro, a aritmética errou em algum lugar.",
            },
          ],
          "image": {
            "src": "thirty-60-90-perimeter.svg",
            "alt": "Triângulo 30-60-90 com os três lados rotulados como 5 cm, 5 vezes a raiz quadrada de 3 cm e 10 cm, perímetro de cerca de 23.660 cm",
            "caption": "Perímetro a partir do cateto menor: a = 5 cm resulta em P = 5(3 + √3) ≈ 23.660 cm.",
          },
        },
        "sec-step-example": {
          "h2": "Exemplo passo a passo de resolução de um triângulo 30-60-90",
          "blocks": [
            {
              "kind": "p",
              "text": "Um triângulo, a = 5 cm, resolvido do início ao fim.",
            },
            {
              "kind": "p",
              "text": "Comece com o cateto menor [[a = 5]] cm e encontre todas as outras medidas do triângulo, uma fórmula de cada vez. Cada passo usa uma fórmula das seções acima, e a tabela de resumo no fim reúne os resultados.",
            },
            {
              "kind": "steps",
              "steps": [
                "Encontre o cateto maior: [[b = a\\sqrt{3} = 5\\sqrt{3} \\approx 8.660]] cm.",
                "Encontre a hipotenusa: [[c = 2a = 2 \\times 5 = 10]] cm.",
                "Encontre a área: [[A = \\frac{ab}{2} = \\frac{5 \\times 5\\sqrt{3}}{2} = \\frac{25\\sqrt{3}}{2} \\approx 21.651]] centímetros quadrados.",
                "Encontre o perímetro: [[P = a + b + c = 5 + 5\\sqrt{3} + 10 = 15 + 5\\sqrt{3} \\approx 23.660]] cm.",
              ],
            },
            {
              "kind": "p",
              "text": "As quatro medidas descrevem o mesmo triângulo. Os lados [[5]], [[8.660]] e [[10]] satisfazem a razão [[1 : \\sqrt{3} : 2]] e o teorema de Pitágoras, [[5^2 + (5\\sqrt{3})^2 = 25 + 75 = 100 = 10^2]]. A área e o perímetro são dois tipos diferentes de medida desse mesmo triângulo: a área cobre a sua superfície, enquanto o perímetro percorre a sua fronteira.",
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
                "Cateto menor a",
                "5 cm",
                "5 cm",
              ],
              [
                "Cateto maior b",
                "5√3 cm",
                "8.660 cm",
              ],
              [
                "Hipotenusa c",
                "10 cm",
                "10 cm",
              ],
              [
                "Área A",
                "25√3/2 cm²",
                "21.651 cm²",
              ],
              [
                "Perímetro P",
                "15 + 5√3 cm",
                "23.660 cm",
              ],
            ],
          },
        },
        "sec-examples": {
          "h2": "Exemplos resolvidos de cálculos com triângulos 30-60-90",
          "blocks": [
            {
              "kind": "p",
              "text": "Oito exemplos resolvidos, um para cada modo da calculadora mais um caso maior.",
            },
            {
              "kind": "h3",
              "text": "Exemplo 1: Encontrar o cateto maior",
            },
            {
              "kind": "p",
              "text": "Dados [[a = 4]] cm. Fórmula: [[b = a\\sqrt{3}]]. Substituição: [[b = 4\\sqrt{3}]]. Resultado: [[b \\approx 6.928]] cm. O cateto maior é cerca de 1.732 vezes o cateto menor, então 4 cm se tornam cerca de 6.928 cm. A resposta exata é [[4\\sqrt{3}]] cm.",
            },
            {
              "kind": "h3",
              "text": "Exemplo 2: Encontrar a hipotenusa",
            },
            {
              "kind": "p",
              "text": "Dados [[a = 9]] cm. Fórmula: [[c = 2a]]. Substituição: [[c = 2 \\times 9]]. Resultado: [[c = 18]] cm. A hipotenusa é exatamente o dobro do cateto menor, então a resposta não precisa de arredondamento. Esta é a verificação mais rápida de todo o assunto: qualquer hipotenusa que não seja o dobro do cateto menor indica um erro.",
            },
            {
              "kind": "h3",
              "text": "Exemplo 3: Encontrar o cateto menor a partir da hipotenusa",
            },
            {
              "kind": "p",
              "text": "Dados [[c = 20]] cm. Fórmula: [[a = \\frac{c}{2}]]. Substituição: [[a = \\frac{20}{2}]]. Resultado: [[a = 10]] cm. Dividir a hipotenusa ao meio reverte a duplicação do Exemplo 2. O cateto menor é exatamente metade da hipotenusa, então a resposta é exata.",
            },
            {
              "kind": "h3",
              "text": "Exemplo 4: Encontrar o cateto menor a partir do cateto maior",
            },
            {
              "kind": "p",
              "text": "Dados [[b = 15]] cm. Fórmula: [[a = \\frac{b}{\\sqrt{3}}]]. Substituição: [[a = \\frac{15}{\\sqrt{3}}]]. A racionalização resulta em [[a = 5\\sqrt{3}]] cm, então o resultado é [[a \\approx 8.660]] cm. Dividir por √3 reduz o cateto maior de volta ao cateto menor, que é o inverso de multiplicar por √3.",
            },
            {
              "kind": "h3",
              "text": "Exemplo 5: Encontrar o cateto maior a partir da hipotenusa",
            },
            {
              "kind": "p",
              "text": "Dados [[c = 12]] cm. Fórmula: [[b = \\frac{c\\sqrt{3}}{2}]]. Substituição: [[b = \\frac{12\\sqrt{3}}{2}]]. Resultado: [[b = 6\\sqrt{3} \\approx 10.392]] cm. O cateto maior fica entre o cateto menor, [[a = 6]] cm, e a hipotenusa, 12 cm, o que confirma a ordem [[a < b < c]].",
            },
            {
              "kind": "h3",
              "text": "Exemplo 6: Calcular a área",
            },
            {
              "kind": "p",
              "text": "Dados [[a = 8]] cm. Fórmula: [[A = \\frac{a^2\\sqrt{3}}{2}]]. Substituição: [[A = \\frac{64\\sqrt{3}}{2}]]. Resultado: [[A = 32\\sqrt{3} \\approx 55.426]] centímetros quadrados. A resposta exata é [[32\\sqrt{3}]] cm², e o decimal é arredondado para três casas. A área é em unidades quadradas, diferente dos comprimentos dos lados.",
            },
            {
              "kind": "h3",
              "text": "Exemplo 7: Calcular o perímetro",
            },
            {
              "kind": "p",
              "text": "Dados [[a = 3]] cm. Fórmula: [[P = a(3 + \\sqrt{3})]]. Substituição: [[P = 3(3 + \\sqrt{3})]]. Resultado: [[P = 9 + 3\\sqrt{3} \\approx 14.196]] cm. Somar os lados um por um dá o mesmo resultado: [[3 + 3\\sqrt{3} + 6 = 9 + 3\\sqrt{3}]] cm. O perímetro é em unidades simples, não em unidades quadradas.",
            },
            {
              "kind": "h3",
              "text": "Exemplo 8: Medidas maiores",
            },
            {
              "kind": "p",
              "text": "Dados [[a = 10]] m. Fórmula: [[b = a\\sqrt{3}]] e [[c = 2a]]. Substituição: [[b = 10\\sqrt{3}]] m e [[c = 2 \\times 10]] m. Resultado: [[b \\approx 17.321]] m e [[c = 20]] m. A razão funciona em qualquer escala: este triângulo é o triângulo com [[a = 5]] cm dobrado, então cada lado é duas vezes maior e a razão [[1 : \\sqrt{3} : 2]] permanece inalterada.",
            },
            {
              "kind": "p",
              "text": "Respostas exatas e aproximações decimais servem a propósitos diferentes. A forma exata, como [[4\\sqrt{3}]] cm, é precisa e é o que as respostas de prova costumam exigir. A forma decimal, como 6.928 cm, é mais fácil de imaginar e de medir com uma régua. Apresente a forma exata primeiro, depois o decimal, e arredonde o decimal apenas na etapa final.",
            },
          ],
        },
        "sec-derive-pythagoras": {
          "h2": "Como deduzir a razão do triângulo 30-60-90 usando Pitágoras",
          "blocks": [
            {
              "kind": "p",
              "text": "A razão segue de Pitágoras mais um fato: a hipotenusa é o dobro do cateto menor.",
            },
            {
              "kind": "p",
              "text": "Seja [[a]] o cateto menor, [[b]] o cateto maior e [[c]] a hipotenusa. A partir da construção com o triângulo equilátero, a hipotenusa é o dobro do cateto menor:",
            },
            {
              "kind": "p",
              "text": "[[[c = 2a]]]",
            },
            {
              "kind": "p",
              "text": "Agora aplique o teorema de Pitágoras, que vale para todo triângulo retângulo:",
            },
            {
              "kind": "p",
              "text": "[[[a^2 + b^2 = c^2]]]",
            },
            {
              "kind": "p",
              "text": "Substitua [[c = 2a]]:",
            },
            {
              "kind": "p",
              "text": "[[[a^2 + b^2 = 4a^2]]]",
            },
            {
              "kind": "p",
              "text": "Reorganize subtraindo [[a^2]] dos dois lados:",
            },
            {
              "kind": "p",
              "text": "[[[b^2 = 3a^2]]]",
            },
            {
              "kind": "p",
              "text": "Tire a raiz quadrada dos dois lados. Os comprimentos são positivos, então a raiz negativa é descartada:",
            },
            {
              "kind": "p",
              "text": "[[[b = a\\sqrt{3}]]]",
            },
            {
              "kind": "p",
              "text": "Os três lados agora são [[a]], [[a\\sqrt{3}]] e [[2a]], o que resulta na razão [[a : b : c = 1 : \\sqrt{3} : 2]]. Todas as fórmulas de comprimento de lado desta página vêm desta relação fixa: a fórmula do cateto maior a lê diretamente, a fórmula da hipotenusa é o fato inicial, e as fórmulas de área e perímetro substituem as duas expressões dos lados. A <a href=\"/pythagorean-theorem-calculator/\">calculadora do teorema de Pitágoras</a> verifica a mesma relação para qualquer triângulo retângulo.",
            },
            {
              "kind": "p",
              "text": "A demonstração precisa de apenas dois ingredientes, e ambos são fáceis de enunciar. O primeiro é o fato [[c = 2a]], que vem do triângulo equilátero. O segundo é o teorema de Pitágoras, que vale para todo triângulo retângulo. Nada mais é assumido, então a demonstração mostra que a razão é imposta apenas por esses dois fatos, e não por um caso especial ou uma coincidência.",
            },
          ],
        },
        "sec-equilateral": {
          "h2": "Relação entre triângulos 30-60-90 e triângulos equiláteros",
          "blocks": [
            {
              "kind": "p",
              "text": "Todo triângulo 30-60-90 é metade de um triângulo equilátero.",
            },
            {
              "kind": "p",
              "text": "Um triângulo equilátero tem três lados iguais e três ângulos iguais de 60°. Trace uma altura de um vértice até o lado oposto, e a altura divide a base em duas metades iguais. Ela também divide o ângulo de 60° no vértice superior em dois ângulos de 30°. O resultado são dois triângulos retângulos congruentes, cada um com ângulos de 30°, 60° e 90°.",
            },
            {
              "kind": "p",
              "text": "Cada metade mantém um lado inteiro do triângulo equilátero como sua hipotenusa, toma metade de um lado como seu cateto menor e usa a altura como seu cateto maior. É por isso que a hipotenusa é o dobro do cateto menor e que o cateto maior é [[a\\sqrt{3}]]. A relação com √3 aparece porque a altura de um triângulo equilátero é sempre [[\\frac{\\sqrt{3}}{2}]] vezes o comprimento do lado, que é o mesmo fato escrito com letras diferentes.",
            },
            {
              "kind": "p",
              "text": "Esta construção é útil em geometria e trigonometria porque transforma o triângulo equilátero em uma fonte de valores exatos. A altura de um triângulo equilátero de lado 10 cm é [[5\\sqrt{3} \\approx 8.660]] cm, encontrada tratando metade dele como um triângulo 30-60-90 com cateto menor de 5 cm. A mesma construção fornece os valores exatos de seno, cosseno e tangente para 30° e 60°, e é por isso que esses valores aparecem em todas as tabelas de trigonometria.",
            },
          ],
        },
        "sec-trig": {
          "h2": "Relações trigonométricas em um triângulo 30-60-90",
          "blocks": [
            {
              "kind": "p",
              "text": "A razão fixa fornece valores exatos de seno, cosseno e tangente para 30° e 60°.",
            },
            {
              "kind": "p",
              "text": "As razões trigonométricas comparam lados de um triângulo retângulo. O seno é o cateto oposto sobre a hipotenusa, o cosseno é o cateto adjacente sobre a hipotenusa e a tangente é o cateto oposto sobre o cateto adjacente. Como os lados de um triângulo 30-60-90 estão sempre na razão [[1 : \\sqrt{3} : 2]], essas comparações sempre fornecem os mesmos valores, qualquer que seja o tamanho do triângulo.",
            },
            {
              "kind": "p",
              "text": "Para o ângulo de 30°, o lado oposto é o cateto menor [[a]] e o lado adjacente é o cateto maior [[b]], então [[\\sin 30° = \\frac{a}{2a} = \\frac{1}{2}]], [[\\cos 30° = \\frac{a\\sqrt{3}}{2a} = \\frac{\\sqrt{3}}{2}]] e [[\\tan 30° = \\frac{a}{a\\sqrt{3}} = \\frac{1}{\\sqrt{3}}]]. Para o ângulo de 60°, os lados oposto e adjacente trocam de lugar, então [[\\sin 60° = \\frac{\\sqrt{3}}{2}]], [[\\cos 60° = \\frac{1}{2}]] e [[\\tan 60° = \\sqrt{3}]].",
            },
            {
              "kind": "p",
              "text": "Observe a simetria: [[\\sin 30° = \\cos 60°]] e [[\\cos 30° = \\sin 60°]], porque os dois ângulos agudos são complementares e somam 90°. Esses valores concordam exatamente com a razão fixa dos lados, o que é uma boa verificação cruzada: se um valor de seno não corresponder à razão, um dos dois está errado. Mantenha esta seção como contexto: a calculadora desta página encontra lados, área e perímetro, e não calcula funções trigonométricas como modo.",
            },
          ],
          "table": {
            "headers": [
              "Ângulo",
              "sin",
              "cos",
              "tan",
            ],
            "rows": [
              [
                "30°",
                "1/2",
                "√3/2",
                "1/√3",
              ],
              [
                "60°",
                "√3/2",
                "1/2",
                "√3",
              ],
            ],
          },
        },
        "sec-verify": {
          "h2": "Como verificar os cálculos do seu triângulo 30-60-90",
          "blocks": [
            {
              "kind": "p",
              "text": "Quatro verificações rápidas detectam quase todos os erros.",
            },
            {
              "kind": "p",
              "text": "Faça pelo menos uma verificação em cada resposta, e as quatro quando o problema for importante. O exemplo abaixo usa o triângulo com [[a = 5]] cm, [[b = 5\\sqrt{3} \\approx 8.660]] cm e [[c = 10]] cm em todo o texto.",
            },
            {
              "kind": "h3",
              "text": "Verificação 1: Razão dos lados",
            },
            {
              "kind": "p",
              "text": "Divida o cateto maior pelo cateto menor e a hipotenusa pelo cateto menor: [[\\frac{b}{a} = \\sqrt{3} \\approx 1.732]] e [[\\frac{c}{a} = 2]]. Aqui [[\\frac{8.660}{5} \\approx 1.732]] e [[\\frac{10}{5} = 2]], então a razão se confirma. Se qualquer uma das divisões der um valor diferente, um dos lados está errado.",
            },
            {
              "kind": "h3",
              "text": "Verificação 2: Teorema de Pitágoras",
            },
            {
              "kind": "p",
              "text": "Confirme [[a^2 + b^2 = c^2]]. Aqui [[5^2 + (5\\sqrt{3})^2 = 25 + 75 = 100 = 10^2]], então o teorema se confirma. Esta verificação detecta catetos trocados, porque usar o valor errado para [[b]] quebra a igualdade. A <a href=\"/pythagorean-theorem-calculator/\">calculadora do teorema de Pitágoras</a> executa esta verificação para quaisquer três comprimentos de lado.",
            },
            {
              "kind": "h3",
              "text": "Verificação 3: Soma dos ângulos",
            },
            {
              "kind": "p",
              "text": "Confirme [[30° + 60° + 90° = 180°]]. Esta verificação diz respeito à configuração do problema, e não à aritmética: se os ângulos do seu triângulo não somarem 180°, ou se não forem 30°, 60° e 90°, as fórmulas do triângulo 30-60-90 não se aplicam, e nenhum comprimento de lado obtido com elas pode ser confiável.",
            },
            {
              "kind": "h3",
              "text": "Verificação 4: Ordem dos lados",
            },
            {
              "kind": "p",
              "text": "Confirme [[a < b < c]]. Aqui [[5 < 8.660 < 10]], então a ordem se confirma. O cateto menor deve ser o menor lado, o cateto maior deve ficar no meio e a hipotenusa deve ser o maior lado. Qualquer resposta que quebre essa ordem, como um cateto maior mais longo que a hipotenusa, está errada à primeira vista.",
            },
          ],
        },
        "sec-properties": {
          "h2": "Propriedades importantes dos triângulos 30-60-90",
          "blocks": [
            {
              "kind": "p",
              "text": "Dez propriedades decorrem da razão fixa.",
            },
            {
              "kind": "list",
              "items": [
                "O triângulo sempre tem ângulos de 30°, 60° e 90°, e esses ângulos sempre somam 180°.",
                "O cateto menor é oposto ao ângulo de 30°, e é o menor lado do triângulo.",
                "O cateto maior é oposto ao ângulo de 60°, e fica entre o cateto menor e a hipotenusa em comprimento.",
                "A hipotenusa é oposta ao ângulo de 90°, e é o maior lado do triângulo.",
                "A hipotenusa é o dobro do cateto menor, [[c = 2a]], sem nenhuma raiz quadrada envolvida.",
                "O cateto maior é √3 vezes o cateto menor, [[b = a\\sqrt{3}]], onde [[\\sqrt{3} \\approx 1.732]].",
                "A razão dos lados [[1 : \\sqrt{3} : 2]] independe do tamanho do triângulo, então aumentar o triângulo deixa a razão inalterada.",
                "Todos os triângulos 30-60-90 são semelhantes, porque têm os mesmos três ângulos e as mesmas proporções de lados.",
                "A área depende do quadrado do cateto menor, [[A = \\frac{a^2\\sqrt{3}}{2}]], então dobrar o cateto menor quadruplica a área.",
                "O perímetro varia diretamente com o cateto menor, [[P = a(3 + \\sqrt{3})]], então dobrar o cateto menor dobra o perímetro.",
              ],
            },
          ],
        },
        "sec-mistakes": {
          "h2": "Erros comuns ao resolver triângulos 30-60-90",
          "blocks": [
            {
              "kind": "p",
              "text": "Quatorze erros aparecem repetidamente em problemas de triângulos 30-60-90.",
            },
            {
              "kind": "steps",
              "steps": [
                "Confundir o cateto menor com o cateto maior: o cateto menor é oposto a 30° e o cateto maior é oposto a 60°. Identifique cada lado pelo seu ângulo oposto, e não pela forma como o desenho está girado. Correto: [[a]] oposto a 30°, [[b]] oposto a 60°.",
                "Usar √2 em vez de √3: √2 pertence ao triângulo 45-45-90, cuja razão é [[1 : 1 : \\sqrt{2}]]. Um triângulo 30-60-90 sempre usa √3. Correto: [[b = a\\sqrt{3}]].",
                "Multiplicar o cateto menor por 2 para encontrar o cateto maior: dobrar resulta na hipotenusa, e não no cateto maior. Para [[a = 5]] cm, dobrar resulta em 10 cm, que é [[c]], enquanto o cateto maior é [[5\\sqrt{3} \\approx 8.660]] cm. Correto: [[b = a\\sqrt{3}]].",
                "Usar [[a\\sqrt{3}]] como hipotenusa: a hipotenusa é [[2a]], e não [[a\\sqrt{3}]]. Para [[a = 5]] cm, [[a\\sqrt{3} \\approx 8.660]] cm é o cateto maior, e a hipotenusa é 10 cm. Correto: [[c = 2a]].",
                "Esquecer que a hipotenusa é igual a [[2a]]: os alunos às vezes aplicam Pitágoras para encontrar a hipotenusa quando dobrar bastaria. Dobrar é mais rápido e exato. Correto: [[c = 2a]].",
                "Dividir por 2 em vez de √3 ao encontrar o cateto menor a partir do cateto maior: dividir [[b]] por 2 resulta em [[\\frac{b}{2}]], que não é o cateto menor. Para [[b = 12]] cm, dividir por 2 resulta em 6 cm, enquanto o cateto menor correto é [[4\\sqrt{3} \\approx 6.928]] cm. Correto: [[a = \\frac{b}{\\sqrt{3}}]].",
                "Esquecer de dividir por dois ao calcular a área: a área é metade do produto dos catetos. Usar [[A = ab]] dobra a área verdadeira. Para [[a = 6]] cm, [[ab = 36\\sqrt{3}]] cm² é o dobro dos [[18\\sqrt{3}]] cm² corretos. Correto: [[A = \\frac{ab}{2}]].",
                "Somar apenas dois lados ao calcular o perímetro: o perímetro precisa dos três lados. Somar apenas os dois catetos para [[a = 5]] cm resulta em [[5 + 5\\sqrt{3} \\approx 13.660]] cm, enquanto o perímetro verdadeiro é cerca de 23.660 cm. Correto: [[P = a + b + c]].",
                "Confundir respostas exatas com aproximações decimais: [[5\\sqrt{3}]] cm é exato, enquanto 8.660 cm é arredondado. Escrever 8.660 cm como se fosse exato perde a precisão que o radical mantém. Correto: apresente a forma exata primeiro, depois o decimal.",
                "Arredondar √3 cedo demais: usar 1.73 para √3 no meio de um cálculo desloca todas as etapas seguintes. Para [[a = 5]] cm, [[5 \\times 1.73 = 8.65]] cm em vez de 8.660 cm. Correto: mantenha √3 exato ao longo do desenvolvimento e arredonde apenas a resposta final.",
                "Misturar unidades de medida: um cateto menor em centímetros e uma hipotenusa em metros não podem ser combinados diretamente. Converta todas as medidas para uma unidade antes de calcular. Correto: 0.5 m equivale a 50 cm, depois calcule em centímetros.",
                "Aplicar as fórmulas a um triângulo com ângulos diferentes: as fórmulas [[b = a\\sqrt{3}]] e [[c = 2a]] valem apenas quando os ângulos são 30°, 60° e 90°. Um triângulo retângulo com ângulos de 40° e 50° tem uma razão diferente. Correto: confirme os ângulos primeiro e depois use as fórmulas.",
                "Confundir os lados opostos aos ângulos de 30 e 60 graus: o lado oposto a 30° é o cateto menor e o lado oposto a 60° é o cateto maior, nunca o contrário. Trocá-los faz o cateto maior ficar menor que o cateto menor, o que é impossível. Correto: [[a]] oposto a 30°, [[b]] oposto a 60°.",
                "Esquecer que a área exige unidades quadradas: uma área de 31.177 cm está errada na unidade, mesmo que o número esteja certo. A área mede superfície, então é 31.177 centímetros quadrados. Correto: [[A = 18\\sqrt{3} \\approx 31.177]] cm².",
              ],
            },
          ],
        },
        "sec-applications": {
          "h2": "Aplicações práticas dos triângulos 30-60-90",
          "blocks": [
            {
              "kind": "p",
              "text": "A razão aparece onde quer que um ângulo de 30° ou 60° se encontre com um ângulo reto.",
            },
            {
              "kind": "p",
              "text": "O uso mais comum é em lições de geometria e exercícios de trigonometria, onde os problemas de triângulos 30-60-90 testam se os alunos conseguem identificar o cateto menor, aplicar a razão e manter respostas radicais exatas. Os cálculos de altura de triângulos equiláteros usam a mesma ideia ao contrário: a altura de um triângulo equilátero é o cateto maior do triângulo 30-60-90 formado ao cortá-lo ao meio, então um lado de 10 cm resulta em uma altura de [[5\\sqrt{3} \\approx 8.660]] cm.",
            },
            {
              "kind": "p",
              "text": "O desenho técnico, a arquitetura e a geometria da construção usam as relações do triângulo 30-60-90 quando um projeto pede um ângulo de 30° ou 60°, como a inclinação de um telhado, uma rampa ou uma viga diagonal. Um construtor que conhece um lado desse triângulo pode encontrar os outros sem medi-los diretamente. As demonstrações em sala de aula usam o triângulo para mostrar como uma razão fixa transforma uma medida em uma descrição completa de uma forma.",
            },
            {
              "kind": "p",
              "text": "A modelagem matemática usa a razão onde quer que relações diagonais e de altura em formas geométricas precisem de valores exatos, por exemplo em padrões hexagonais, onde os ângulos de 60° de um hexágono regular criam triângulos 30-60-90 dentro da forma. Estes são usos realistas da própria geometria, e não afirmações sobre tolerâncias de engenharia: o trabalho real de projeto acrescenta limites de material e margens de segurança além dos valores geométricos exatos desta página.",
            },
          ],
        },
        "sec-practice": {
          "h2": "Problemas de prática com respostas",
          "blocks": [
            {
              "kind": "p",
              "text": "Resolva os seis problemas no papel antes de ler as respostas.",
            },
            {
              "kind": "h3",
              "text": "Problema 1: Encontrar o cateto maior a partir do cateto menor",
            },
            {
              "kind": "p",
              "text": "Um triângulo 30-60-90 tem um cateto menor de [[a = 6]] cm. Encontre o cateto maior [[b]].",
            },
            {
              "kind": "h3",
              "text": "Problema 2: Encontrar a hipotenusa a partir do cateto menor",
            },
            {
              "kind": "p",
              "text": "Um triângulo 30-60-90 tem um cateto menor de [[a = 11]] cm. Encontre a hipotenusa [[c]].",
            },
            {
              "kind": "h3",
              "text": "Problema 3: Encontrar o cateto menor a partir da hipotenusa",
            },
            {
              "kind": "p",
              "text": "Um triângulo 30-60-90 tem uma hipotenusa de [[c = 24]] cm. Encontre o cateto menor [[a]].",
            },
            {
              "kind": "h3",
              "text": "Problema 4: Encontrar o cateto maior a partir da hipotenusa",
            },
            {
              "kind": "p",
              "text": "Um triângulo 30-60-90 tem uma hipotenusa de [[c = 14]] cm. Encontre o cateto maior [[b]].",
            },
            {
              "kind": "h3",
              "text": "Problema 5: Calcular a área a partir do cateto menor",
            },
            {
              "kind": "p",
              "text": "Um triângulo 30-60-90 tem um cateto menor de [[a = 9]] cm. Encontre a área [[A]].",
            },
            {
              "kind": "h3",
              "text": "Problema 6: Calcular o perímetro a partir do cateto menor",
            },
            {
              "kind": "p",
              "text": "Um triângulo 30-60-90 tem um cateto menor de [[a = 7]] cm. Encontre o perímetro [[P]].",
            },
            {
              "kind": "h3",
              "text": "Respostas dos problemas de prática",
            },
            {
              "kind": "p",
              "text": "Resposta 1: [[b = a\\sqrt{3} = 6\\sqrt{3} \\approx 10.392]] cm. A resposta exata é [[6\\sqrt{3}]] cm.",
            },
            {
              "kind": "p",
              "text": "Resposta 2: [[c = 2a = 2 \\times 11 = 22]] cm. A hipotenusa é exatamente o dobro do cateto menor.",
            },
            {
              "kind": "p",
              "text": "Resposta 3: [[a = \\frac{c}{2} = \\frac{24}{2} = 12]] cm. O cateto menor é exatamente metade da hipotenusa.",
            },
            {
              "kind": "p",
              "text": "Resposta 4: [[b = \\frac{c\\sqrt{3}}{2} = \\frac{14\\sqrt{3}}{2} = 7\\sqrt{3} \\approx 12.124]] cm. Verifique a ordem: o cateto menor é 7 cm, o cateto maior é cerca de 12.124 cm e a hipotenusa é 14 cm.",
            },
            {
              "kind": "p",
              "text": "Resposta 5: [[A = \\frac{a^2\\sqrt{3}}{2} = \\frac{81\\sqrt{3}}{2} \\approx 70.148]] centímetros quadrados. A resposta exata é [[\\frac{81\\sqrt{3}}{2}]] cm².",
            },
            {
              "kind": "p",
              "text": "Resposta 6: [[P = a(3 + \\sqrt{3}) = 7(3 + \\sqrt{3}) \\approx 33.124]] cm. Somar os lados um por um dá o mesmo resultado: [[7 + 7\\sqrt{3} + 14 = 21 + 7\\sqrt{3} \\approx 33.124]] cm.",
            },
          ],
        },
      },
      "relatedHeading": "Calculadoras de triângulo retângulo relacionadas",
      "relatedIntro": "Cada calculadora abaixo cuida de uma tarefa diferente com triângulos retângulos, então escolha a ferramenta que corresponde à medida de que você precisa.",
      "relatedItems": [
        "Calculadora de triângulo retângulo especial",
        "Calculadora de triângulo 45-45-90",
        "Calculadora de lados do triângulo retângulo",
        "Calculadora de área do triângulo retângulo",
        "Calculadora de perímetro do triângulo retângulo",
        "Calculadora do teorema de Pitágoras",
      ],
      "faqHeading": "Perguntas frequentes",
      "faqs": [
        {
          "question": "O que é um triângulo 30-60-90?",
          "answer": "Um triângulo 30-60-90 é um triângulo retângulo com ângulos de 30°, 60° e 90°. Ele é chamado de triângulo retângulo especial porque os comprimentos dos seus lados sempre seguem a razão fixa [[1 : \\sqrt{3} : 2]]. Conhecer um lado basta para encontrar todos os outros, e é por isso que a calculadora precisa de apenas uma entrada.",
        },
        {
          "question": "Qual é a razão dos lados de um triângulo 30-60-90?",
          "answer": "A razão dos lados é [[a : b : c = 1 : \\sqrt{3} : 2]], onde [[a]] é o cateto menor, [[b]] é o cateto maior e [[c]] é a hipotenusa. Isso significa [[b = a\\sqrt{3}]] e [[c = 2a]]. A razão é a mesma para todo triângulo 30-60-90, qualquer que seja o seu tamanho.",
        },
        {
          "question": "Por que o cateto maior é multiplicado por √3?",
          "answer": "O cateto maior é a altura do triângulo equilátero que gera um triângulo 30-60-90. Cortar um triângulo equilátero de lado [[2a]] ao meio resulta em [[b^2 = (2a)^2 - a^2 = 3a^2]], então [[b = a\\sqrt{3}]]. O √3 vem do teorema de Pitágoras aplicado a essa construção.",
        },
        {
          "question": "Como encontro a hipotenusa a partir do cateto menor?",
          "answer": "Dobre o cateto menor: [[c = 2a]]. Se [[a = 7]] cm, então [[c = 2 \\times 7 = 14]] cm. A hipotenusa é sempre exatamente o dobro do cateto menor em um triângulo 30-60-90, porque ela é um lado inteiro do triângulo equilátero, enquanto o cateto menor é metade de um lado.",
        },
        {
          "question": "Como encontro o cateto menor a partir da hipotenusa?",
          "answer": "Divida a hipotenusa ao meio: [[a = \\frac{c}{2}]]. Se [[c = 18]] cm, então [[a = \\frac{18}{2} = 9]] cm. Isto é o inverso de dobrar o cateto menor para encontrar a hipotenusa, e funciona apenas para triângulos 30-60-90, onde a hipotenusa é sempre o dobro do cateto menor.",
        },
        {
          "question": "Como calculo o cateto maior a partir da hipotenusa?",
          "answer": "Use [[b = \\frac{c\\sqrt{3}}{2}]]. Primeiro divida a hipotenusa ao meio para obter o cateto menor, depois multiplique por √3. Se [[c = 16]] cm, então [[b = 8\\sqrt{3} \\approx 13.856]] cm. O cateto maior fica entre o cateto menor e a hipotenusa em comprimento.",
        },
        {
          "question": "Como encontro o cateto menor a partir do cateto maior?",
          "answer": "Divida o cateto maior por √3: [[a = \\frac{b}{\\sqrt{3}}]]. Se [[b = 12]] cm, então [[a = \\frac{12}{\\sqrt{3}} = 4\\sqrt{3} \\approx 6.928]] cm. Dividir por √3 reverte a multiplicação usada para encontrar o cateto maior a partir do cateto menor.",
        },
        {
          "question": "Como calculo a área de um triângulo 30-60-90?",
          "answer": "Use [[A = \\frac{a^2\\sqrt{3}}{2}]], onde [[a]] é o cateto menor. Se [[a = 6]] cm, então [[A = 18\\sqrt{3} \\approx 31.177]] centímetros quadrados. A fórmula é metade do produto dos dois catetos, com o cateto maior substituído por [[a\\sqrt{3}]]. A área é sempre em unidades quadradas.",
        },
        {
          "question": "Como calculo o perímetro de um triângulo 30-60-90?",
          "answer": "Use [[P = a(3 + \\sqrt{3})]], onde [[a]] é o cateto menor. Se [[a = 5]] cm, então [[P = 5(3 + \\sqrt{3}) \\approx 23.660]] cm. A fórmula soma os três lados, [[a + a\\sqrt{3} + 2a]], e coloca [[a]] em evidência. O perímetro é em unidades simples, não em unidades quadradas.",
        },
        {
          "question": "Um triângulo 30-60-90 pode ter comprimentos de lado decimais?",
          "answer": "Sim. A razão funciona para qualquer comprimento positivo, inteiro ou decimal. Se [[a = 2.5]] cm, então [[b = 2.5\\sqrt{3} \\approx 4.330]] cm e [[c = 5]] cm. Os decimais não mudam nada no método: multiplique por √3 para o cateto maior e dobre para a hipotenusa, e arredonde apenas a resposta final.",
        },
        {
          "question": "Todo triângulo 30-60-90 é semelhante?",
          "answer": "Sim. Todos os triângulos 30-60-90 têm os mesmos três ângulos, 30°, 60° e 90°, e a mesma razão dos lados, [[1 : \\sqrt{3} : 2]]. Mesmos ângulos mais mesmas proporções significam que os triângulos são semelhantes, então eles diferem apenas em tamanho. Aumentar ou diminuir um deles resulta em outro triângulo 30-60-90.",
        },
        {
          "question": "Como posso verificar se as medidas do meu triângulo estão corretas?",
          "answer": "Verifique a razão, [[\\frac{b}{a} = \\sqrt{3}]] e [[\\frac{c}{a} = 2]], depois confirme [[a^2 + b^2 = c^2]] com o teorema de Pitágoras, e confirme [[a < b < c]]. Para [[a = 5]] cm, [[b \\approx 8.660]] cm e [[c = 10]] cm, as quatro verificações passam. Se alguma verificação falhar, refaça o cálculo.",
        },
      ],
    },
};
