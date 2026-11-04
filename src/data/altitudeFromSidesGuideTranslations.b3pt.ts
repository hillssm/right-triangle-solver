// altitudeFromSidesGuideTranslations.bpt.ts: Right Triangle Altitude From Projections
// Guide (Page 28 of 45) translation.
export const B3_PT = {
  "pt": {
      "tocHeading": "Navegação por Seções",
      "tocItems": {
        "sec-intro": "Calculadora de Altura do Triângulo Retângulo a Partir dos Lados",
        "sec-calculate": "Calcular a Altura do Triângulo Retângulo a Partir dos Lados",
        "sec-altitude": "O Que é a Altura de um Triângulo Retângulo?",
        "sec-sides": "Entendendo os Lados de um Triângulo Retângulo",
        "sec-formula": "Fórmula da Altura do Triângulo Retângulo a Partir dos Lados",
        "sec-use": "Como Usar a Calculadora de Altura do Triângulo Retângulo a Partir dos Lados",
        "sec-manual": "Cálculo da Altura Passo a Passo Sem Calculadora",
        "sec-diagram": "Diagrama da Altura do Triângulo Retângulo Explicado",
        "sec-proof": "Por Que a Fórmula da Altura Funciona?",
        "sec-examples": "Exemplos Resolvidos de Altura do Triângulo Retângulo a Partir dos Lados",
        "sec-two-sides": "Como Encontrar a Altura Quando Apenas Dois Lados São Conhecidos",
        "sec-verify": "Como Verificar o Seu Cálculo da Altura",
        "sec-vs-projections": "Altura a Partir dos Lados vs. Altura a Partir das Projeções",
        "sec-area-rel": "Relação Entre Altura, Área e Hipotenusa",
        "sec-properties": "Propriedades Especiais da Altura Relativa à Hipotenusa",
        "sec-mistakes": "Erros Comuns ao Calcular a Altura do Triângulo Retângulo",
        "sec-applications": "Usos Práticos dos Cálculos da Altura do Triângulo Retângulo",
        "sec-practice": "Problemas Práticos com Soluções",
        "sec-related": "Explore as Calculadoras de Triângulo Retângulo Relacionadas",
        "sec-faq": "Perguntas Frequentes",
        "sec-conclusion": "Calculadoras de Triângulo Retângulo Relacionadas",
      },
      "sections": {
        "sec-intro": {
          "h2": "Calculadora de Altura do Triângulo Retângulo a Partir dos Lados",
          "blocks": [
            {
              "kind": "p",
              "text": "Digite os dois catetos e a hipotenusa para encontrar a altura em segundos.",
            },
            {
              "kind": "p",
              "text": "Esta calculadora encontra a altura de um triângulo retângulo: a distância perpendicular do vértice do ângulo reto até a hipotenusa. Digite os dois catetos, [[a]] e [[b]], e a hipotenusa [[c]], e ela retorna [[h]] usando [[h=\\frac{ab}{c}]]. A resposta sai na mesma unidade das suas entradas.",
            },
            {
              "kind": "p",
              "text": "Por exemplo, um triângulo com catetos de 3 cm e 4 cm e hipotenusa de 5 cm resulta em [[h=\\frac{3 \\times 4}{5}=2.4\\text{ cm}]]. Observe que 2,4 cm é menor que qualquer um dos catetos, o que é sempre verdade para a altura relativa à hipotenusa.",
            },
          ],
        },
        "sec-calculate": {
          "h2": "Calcular a Altura do Triângulo Retângulo a Partir dos Lados",
          "blocks": [
            {
              "kind": "p",
              "text": "A calculadora recebe três medidas. O cateto a é o primeiro lado perpendicular, o cateto b é o segundo lado perpendicular e a hipotenusa c é o lado mais longo, oposto ao ângulo reto. Os três devem usar a mesma unidade, então converta metros para centímetros ou pés para polegadas antes de digitar.",
            },
            {
              "kind": "p",
              "text": "Clique em Calcular Altura h para ver o resultado com a substituição, e use Redefinir para limpar os campos para o próximo problema. A calculadora responde com a fórmula compacta:",
            },
            {
              "kind": "p",
              "text": "[[[h=\\frac{ab}{c}]]]",
            },
            {
              "kind": "p",
              "text": "Se você conhece apenas dois lados, recupere o terceiro com o teorema de Pitágoras primeiro, ou experimente a <a href=\"/right-triangle-altitude-calculator/\">calculadora de altura</a> geral para um ponto de partida diferente.",
            },
          ],
        },
        "sec-altitude": {
          "h2": "O Que é a Altura de um Triângulo Retângulo?",
          "blocks": [
            {
              "kind": "p",
              "text": "Uma altura é a distância perpendicular de um vértice até o lado oposto. Nesta página, ela sempre desce do vértice do ângulo reto em linha reta até a hipotenusa, encontrando-a em ângulo reto. A hipotenusa é a base porque é o único lado oposto ao ângulo reto, e o segmento cai dentro do triângulo.",
            },
            {
              "kind": "p",
              "text": "Um triângulo retângulo tem três alturas, mas duas delas são triviais: o cateto [[a]] é a altura relativa à base [[b]], e o cateto [[b]] é a altura relativa à base [[a]], já que os catetos já são perpendiculares. A interessante é a terceira altura, relativa à hipotenusa, porque é um segmento interior genuinamente novo e é menor que qualquer um dos catetos.",
            },
            {
              "kind": "p",
              "text": "Essa terceira altura é o que esta calculadora encontra, e é o que os livros didáticos geralmente querem dizer quando pedem a altura de um triângulo retângulo.",
            },
          ],
        },
        "sec-sides": {
          "h2": "Entendendo os Lados de um Triângulo Retângulo",
          "blocks": [
            {
              "kind": "p",
              "text": "Rótulos corretos fazem a fórmula funcionar. Os catetos [[a]] e [[b]] são os dois lados perpendiculares que se encontram no ângulo reto. A hipotenusa [[c]] é o lado mais longo, oposto ao ângulo reto. A altura [[h]] não é um lado, mas a queda perpendicular do vértice do ângulo reto até a hipotenusa.",
            },
            {
              "kind": "p",
              "text": "Identifique sempre a hipotenusa primeiro: ela é a mais longa das três medidas. Em um triângulo 3-4-5, 5 deve ser [[c]], e uma verificação rápida [[3^2+4^2=5^2]] confirma a rotulagem. Rotular 5 como cateto dividiria pelo lado errado e corromperia a resposta.",
            },
          ],
          "table": {
            "headers": [
              "Variável",
              "Definição",
              "Papel no cálculo",
            ],
            "rows": [
              [
                "a",
                "Primeiro cateto perpendicular",
                "Multiplicado por b no numerador",
              ],
              [
                "b",
                "Segundo cateto perpendicular",
                "Multiplicado por a no numerador",
              ],
              [
                "c",
                "Hipotenusa, lado mais longo",
                "Divide ab no denominador",
              ],
              [
                "h",
                "Altura relativa à hipotenusa",
                "O resultado da fórmula",
              ],
            ],
          },
        },
        "sec-formula": {
          "h2": "Fórmula da Altura do Triângulo Retângulo a Partir dos Lados",
          "blocks": [
            {
              "kind": "p",
              "text": "A fórmula é curta e fácil de memorizar:",
            },
            {
              "kind": "p",
              "text": "[[[h=\\frac{ab}{c}]]]",
            },
            {
              "kind": "p",
              "text": "Os catetos são multiplicados porque o produto deles está ligado à área: a área é igual à metade de [[ab]], então [[ab]] é o dobro da área. Dividir pela hipotenusa então isola [[h]], já que a mesma área também é igual à metade de [[ch]]. O resultado é um comprimento comum, por isso as três entradas devem compartilhar uma unidade.",
            },
            {
              "kind": "p",
              "text": "Experimente um triângulo 6-8-10: [[h=\\frac{6 \\times 8}{10}=\\frac{48}{10}=4.8\\text{ cm}]]. Geometricamente, 4,8 cm é o caminho mais curto do vértice do ângulo reto até a hipotenusa. (A demonstração completa aparece na seção de demonstração abaixo.)",
            },
            {
              "kind": "p",
              "text": "Um hábito útil é verificar as unidades antes de substituir. Se [[a]] vale 60 mm, [[b]] vale 8 cm e [[c]] vale 100 mm, converta primeiro para uma unidade: [[a=6\\text{ cm}]], [[b=8\\text{ cm}]], [[c=10\\text{ cm}]], que é o mesmo triângulo 6-8-10 e dá o mesmo [[4.8\\text{ cm}]]. A fórmula nunca corrige unidades mistas para você, então essa única verificação evita os erros mais constrangedores.",
            },
          ],
        },
        "sec-use": {
          "h2": "Como Usar a Calculadora de Altura do Triângulo Retângulo a Partir dos Lados",
          "blocks": [
            {
              "kind": "p",
              "text": "Siga estes oito passos para um resultado limpo sempre.",
            },
            {
              "kind": "steps",
              "steps": [
                "Encontre o ângulo reto, o canto onde dois lados se encontram em esquadro, geralmente marcado com um pequeno quadrado. Sem um ângulo reto confirmado, esta fórmula não se aplica.",
                "Localize os dois catetos perpendiculares que formam esse canto; chame-os de a e b em qualquer ordem, já que a fórmula os trata de forma simétrica.",
                "Identifique a hipotenusa: o lado oposto ao ângulo reto e o mais longo dos três. Confirme que ela é maior que ambos os catetos.",
                "Converta as três medidas para a mesma unidade antes de digitar qualquer coisa. Unidades mistas são o erro de entrada mais comum.",
                "Digite a, b e c nos campos correspondentes.",
                "Clique no botão Calcular Altura h para multiplicar os catetos, dividir pela hipotenusa e exibir a altura.",
                "Leia o resultado e verifique se os números substituídos correspondem ao que você pretendia digitar.",
                "Use Redefinir para limpar as entradas antes do próximo problema, para que valores antigos não corrompam a nova resposta.",
              ],
            },
            {
              "kind": "p",
              "text": "Antes de confiar em uma resposta, faça uma verificação pitagórica: [[a^2+b^2]] deve ser igual a [[c^2]]. Pequenos arredondamentos de medição são aceitáveis, mas uma grande divergência significa que os lados não formam um triângulo retângulo.",
            },
          ],
        },
        "sec-manual": {
          "h2": "Cálculo da Altura Passo a Passo Sem Calculadora",
          "blocks": [
            {
              "kind": "p",
              "text": "Você pode encontrar a altura à mão em cinco passos curtos. Tome [[a=9\\text{ cm}]], [[b=12\\text{ cm}]], [[c=15\\text{ cm}]] e primeiro confirme que o triângulo é válido: [[9^2+12^2=81+144=225=15^2]].",
            },
            {
              "kind": "p",
              "text": "Passo 1, escreva a fórmula: [[[h=\\frac{ab}{c}]]]",
            },
            {
              "kind": "p",
              "text": "Passo 2, substitua: [[[h=\\frac{9 \\times 12}{15}]]]",
            },
            {
              "kind": "p",
              "text": "Passo 3, multiplique os catetos: [[9 \\times 12=108]], então [[[h=\\frac{108}{15}]]]",
            },
            {
              "kind": "p",
              "text": "Passo 4, divida: [[108 \\div 15=7.2]], então [[h=7.2\\text{ cm}]]. Passo 5, verifique com a área. Pelos catetos, [[A=\\frac{9 \\times 12}{2}=54\\text{ cm}^2]]; pela hipotenusa e pela altura, [[A=\\frac{15 \\times 7.2}{2}=54\\text{ cm}^2]].",
            },
            {
              "kind": "p",
              "text": "As duas áreas concordam porque descrevem o mesmo triângulo. Os catetos dão um par base-altura e a hipotenusa dá outro, mas a região delimitada é idêntica. Áreas coincidentes confirmam a altura.",
            },
            {
              "kind": "p",
              "text": "Por que a verificação pela área funciona tão bem? Porque a própria fórmula da altura vem da igualdade das duas expressões de área, então verificar pela área fecha o ciclo: qualquer deslize aritmético na multiplicação ou na divisão faria as duas áreas divergirem. Quando elas coincidem, tanto o uso da fórmula quanto a aritmética são confirmados de uma só vez.",
            },
          ],
        },
        "sec-diagram": {
          "h2": "Diagrama da Altura do Triângulo Retângulo Explicado",
          "blocks": [
            {
              "kind": "p",
              "text": "Rotule o triângulo ABC com o ângulo reto em C. Então AC é o cateto [[a]], BC é o cateto [[b]] e AB é a hipotenusa [[c]]. O ponto D está sobre AB, e o segmento CD encontra AB em ângulo reto; CD é a altura [[h]]. Pequenos marcadores quadrados em C e D mostram os dois ângulos retos.",
            },
            {
              "kind": "p",
              "text": "A altura CD divide o triângulo grande em dois triângulos retângulos menores, ACD e BCD, cada um com seu ângulo reto em D. Ambos são semelhantes ao triângulo original ABC e entre si, um fato do qual as seções de demonstração e projeções dependem.",
            },
            {
              "kind": "p",
              "text": "Ao esboçar sua própria versão, comece com o ângulo reto em C, desenhe os catetos e depois ligue as extremidades livres para formar a hipotenusa. Desça a altura por último, verificando que ela encontra a hipotenusa em esquadro. Rotular na ordem a, b, c, h mantém todos os cálculos seguintes organizados.",
            },
          ],
          "image": {
            "src": "altitude-main.svg",
            "alt": "Triângulo ABC com ângulo reto em C, altura CD traçada até a hipotenusa AB; AC igual a a, BC igual a b, AB igual a c, CD igual a h",
            "caption": "A altura CD desce do ângulo reto C até a hipotenusa AB; h é igual a (a x b) / c.",
          },
        },
        "sec-proof": {
          "h2": "Por Que a Fórmula da Altura Funciona?",
          "blocks": [
            {
              "kind": "p",
              "text": "A fórmula decorre da área de um triângulo. A área é igual à metade da base vezes a altura, e um triângulo retângulo oferece dois pares convenientes de base-altura. Com os catetos como base e altura:",
            },
            {
              "kind": "p",
              "text": "[[[A=\\frac{a \\times b}{2}]]]",
            },
            {
              "kind": "p",
              "text": "Com a hipotenusa como base e a altura como altura:",
            },
            {
              "kind": "p",
              "text": "[[[A=\\frac{c \\times h}{2}]]]",
            },
            {
              "kind": "p",
              "text": "Ambas as expressões descrevem o mesmo triângulo, então iguale-as:",
            },
            {
              "kind": "p",
              "text": "[[[\\frac{ab}{2}=\\frac{ch}{2}]]]",
            },
            {
              "kind": "p",
              "text": "Multiplique por 2 e depois divida por [[c]]:",
            },
            {
              "kind": "p",
              "text": "[[[ab=ch]]]",
            },
            {
              "kind": "p",
              "text": "[[[h=\\frac{ab}{c}]]]",
            },
            {
              "kind": "p",
              "text": "Um triângulo pode ser medido com diferentes pares base-altura enquanto sua área permanece fixa, então igualar as duas expressões é legítimo e a álgebra isola [[h]]. O diagrama mostra o mesmo triângulo duas vezes, uma com base [[a]] e altura [[b]], outra com base [[c]] e altura [[h]].",
            },
            {
              "kind": "p",
              "text": "A demonstração também explica por que a altura é sempre menor que os catetos. Como [[c]] é o lado mais longo, dividir [[ab]] pelo maior dos três comprimentos deve produzir um valor menor que qualquer cateto sozinho. Toda fórmula posterior desta página, das projeções aos triângulos semelhantes, é uma variação desta mesma ideia de área.",
            },
          ],
          "image": {
            "src": "altitude-two-base-height.svg",
            "alt": "O mesmo triângulo retângulo desenhado duas vezes: primeiro com base a e altura b, depois com base c e altura h",
            "caption": "Mesmo triângulo, dois pares base-altura: a área é igual a ab/2 e a ch/2, então h é igual a ab/c.",
          },
        },
        "sec-examples": {
          "h2": "Exemplos Resolvidos de Altura do Triângulo Retângulo a Partir dos Lados",
          "blocks": [
            {
              "kind": "p",
              "text": "Os sete exemplos abaixo vão dos clássicos ternos pitagóricos de números inteiros a decimais, catetos iguais e unidades mistas. Cada um segue o mesmo ritmo: declare o que é dado, substitua na fórmula, simplifique e termine com a unidade. Lê-los em ordem cria o hábito de verificar unidades e razoabilidade antes de confiar em qualquer resposta.",
            },
            {
              "kind": "h3",
              "text": "Exemplo 1: Triângulo Clássico 3-4-5",
            },
            {
              "kind": "p",
              "text": "Dados [[a=3\\text{ cm}]], [[b=4\\text{ cm}]], [[c=5\\text{ cm}]]:",
            },
            {
              "kind": "p",
              "text": "[[[h=\\frac{3 \\times 4}{5}=\\frac{12}{5}=2.4\\text{ cm}]]]",
            },
            {
              "kind": "p",
              "text": "A altura é [[2.4\\text{ cm}]]. Este exemplo de referência vale a pena memorizar, já que 3-4-5 é o terno pitagórico mais comum e 2,4 é um decimal arrumado.",
            },
            {
              "kind": "h3",
              "text": "Exemplo 2: Triângulo 5-12-13",
            },
            {
              "kind": "p",
              "text": "Dados [[a=5\\text{ m}]], [[b=12\\text{ m}]], [[c=13\\text{ m}]]:",
            },
            {
              "kind": "p",
              "text": "[[[h=\\frac{5 \\times 12}{13}=\\frac{60}{13}\\approx 4.615\\text{ m}]]]",
            },
            {
              "kind": "p",
              "text": "A altura exata é [[60/13]] metros, cerca de 4,615 m. Mantenha a fração quando a precisão importar, já que arredondar cedo carrega erro para o trabalho seguinte.",
            },
            {
              "kind": "h3",
              "text": "Exemplo 3: Triângulo 8-15-17",
            },
            {
              "kind": "p",
              "text": "Dados [[a=8\\text{ cm}]], [[b=15\\text{ cm}]], [[c=17\\text{ cm}]]:",
            },
            {
              "kind": "p",
              "text": "[[[h=\\frac{8 \\times 15}{17}=\\frac{120}{17}\\approx 7.059\\text{ cm}]]]",
            },
            {
              "kind": "p",
              "text": "A altura é cerca de [[7.059\\text{ cm}]]. Trocar os catetos para 15 e 8 dá o produto idêntico, confirmando que a fórmula trata os catetos simetricamente.",
            },
            {
              "kind": "h3",
              "text": "Exemplo 4: Catetos Iguais e o Triângulo 45-45-90",
            },
            {
              "kind": "p",
              "text": "Dados [[a=10\\text{ cm}]], [[b=10\\text{ cm}]], [[c=10\\sqrt{2}\\text{ cm}]]:",
            },
            {
              "kind": "p",
              "text": "[[[h=\\frac{10 \\times 10}{10\\sqrt{2}}=\\frac{10}{\\sqrt{2}}=5\\sqrt{2}\\approx 7.071\\text{ cm}]]]",
            },
            {
              "kind": "p",
              "text": "Catetos iguais formam um triângulo 45-45-90, e a altura o divide em duas metades congruentes. A forma exata [[5\\sqrt{2}]] cm supera o decimal no trabalho teórico.",
            },
            {
              "kind": "h3",
              "text": "Exemplo 5: Medidas Decimais",
            },
            {
              "kind": "p",
              "text": "Dados [[a=1.5\\text{ m}]], [[b=2\\text{ m}]], [[c=2.5\\text{ m}]]:",
            },
            {
              "kind": "p",
              "text": "[[[h=\\frac{1.5 \\times 2}{2.5}=\\frac{3}{2.5}=1.2\\text{ m}]]]",
            },
            {
              "kind": "p",
              "text": "A altura é [[1.2\\text{ m}]]. Decimais não precisam de tratamento especial: multiplique e divida como de costume, mantendo a mesma unidade na resposta.",
            },
            {
              "kind": "h3",
              "text": "Exemplo 6: Unidades Mistas Que Devem Combinar Primeiro",
            },
            {
              "kind": "p",
              "text": "Dados [[a=30\\text{ cm}]], [[b=0.4\\text{ m}]], [[c=0.5\\text{ m}]], converta primeiro para centímetros: [[a=30\\text{ cm}]], [[b=40\\text{ cm}]], [[c=50\\text{ cm}]].",
            },
            {
              "kind": "p",
              "text": "[[[h=\\frac{30 \\times 40}{50}=\\frac{1200}{50}=24\\text{ cm}]]]",
            },
            {
              "kind": "p",
              "text": "Converter primeiro dá um limpo [[24\\text{ cm}]]. Metros não convertidos teriam inflado a resposta por um fator de 100.",
            },
            {
              "kind": "h3",
              "text": "Exemplo 7: Triângulo Maior 20-21-29",
            },
            {
              "kind": "p",
              "text": "Dados [[a=20\\text{ ft}]], [[b=21\\text{ ft}]], [[c=29\\text{ ft}]]:",
            },
            {
              "kind": "p",
              "text": "[[[h=\\frac{20 \\times 21}{29}=\\frac{420}{29}\\approx 14.483\\text{ ft}]]]",
            },
            {
              "kind": "p",
              "text": "A altura é cerca de [[14.483\\text{ ft}]], confortavelmente abaixo do cateto mais curto de 20 ft, como a altura relativa à hipotenusa sempre é.",
            },
          ],
          "image": {
            "src": "altitude-345.svg",
            "alt": "Triângulo retângulo com catetos 3 e 4, hipotenusa 5 e altura 2,4 traçada até a hipotenusa",
            "caption": "Um triângulo 3-4-5 desenhado em escala: a altura h é igual a (3 x 4) / 5 = 2,4.",
          },
        },
        "sec-two-sides": {
          "h2": "Como Encontrar a Altura Quando Apenas Dois Lados São Conhecidos",
          "blocks": [
            {
              "kind": "p",
              "text": "A calculadora ao vivo pede os três lados, mas dois lados bastam para recuperar o terceiro com o teorema de Pitágoras. Há dois casos, dependendo de quais lados você conhece, e ambos terminam com a conhecida fórmula da altura.",
            },
            {
              "kind": "p",
              "text": "A lógica é a mesma nos dois casos: o teorema de Pitágoras restaura o lado ausente e a fórmula da altura faz o resto. O Caso 1 soma os catetos sob uma raiz quadrada para encontrar a hipotenusa, enquanto o Caso 2 subtrai para recuperar um cateto. Observe que o Caso 2 só funciona quando o lado conhecido é verdadeiramente a hipotenusa; se [[a>c]], a raiz quadrada fica negativa e esse triângulo não existe.",
            },
            {
              "kind": "h3",
              "text": "Caso 1: Ambos os Catetos Conhecidos",
            },
            {
              "kind": "p",
              "text": "Tome [[a=7]] e [[b=24]]. Encontre a hipotenusa primeiro: [[[c=\\sqrt{7^2+24^2}=\\sqrt{49+576}=\\sqrt{625}=25]]] Então a altura segue: [[[h=\\frac{7 \\times 24}{25}=\\frac{168}{25}=6.72]]]",
            },
            {
              "kind": "h3",
              "text": "Caso 2: Um Cateto e a Hipotenusa Conhecidos",
            },
            {
              "kind": "p",
              "text": "Tome [[a=8]] e [[c=10]]. Recupere o cateto ausente com o teorema de Pitágoras rearranjado: [[[b=\\sqrt{c^2-a^2}=\\sqrt{100-64}=\\sqrt{36}=6]]] Então a altura é: [[[h=\\frac{8 \\times 6}{10}=\\frac{48}{10}=4.8]]]",
            },
            {
              "kind": "p",
              "text": "Trate estes como alternativas didáticas, já que a calculadora espera três medidas. Uma <a href=\"/right-triangle-side-calculator/\">calculadora de lados</a> dedicada pode recuperar o comprimento ausente antes de você continuar aqui.",
            },
          ],
        },
        "sec-verify": {
          "h2": "Como Verificar o Seu Cálculo da Altura",
          "blocks": [
            {
              "kind": "p",
              "text": "Três verificações independentes confirmam uma resposta de altura. As três abaixo usam o triângulo 3-4-5, onde a altura é 2,4. Use pelo menos uma delas sempre que uma resposta alimentar um trabalho posterior, já que uma altura errada corrompe silenciosamente tudo o que for construído sobre ela.",
            },
            {
              "kind": "h3",
              "text": "Método 1: Comparação de Áreas",
            },
            {
              "kind": "p",
              "text": "Calcule a área das duas formas e exija concordância. Pelos catetos: [[[A=\\frac{3 \\times 4}{2}=6]]] Pela hipotenusa e pela altura: [[[A=\\frac{5 \\times 2.4}{2}=6]]] Áreas coincidentes confirmam a própria altura.",
            },
            {
              "kind": "h3",
              "text": "Método 2: Projeções da Hipotenusa",
            },
            {
              "kind": "p",
              "text": "Divida a hipotenusa nas projeções dos catetos [[p=\\frac{a^2}{c}=\\frac{9}{5}=1.8]] e [[q=\\frac{b^2}{c}=\\frac{16}{5}=3.2]]. A altura é a média geométrica delas: [[[h=\\sqrt{1.8 \\times 3.2}=\\sqrt{5.76}=2.4]]] Recuperar 2,4 a partir de uma fórmula diferente é uma evidência forte.",
            },
            {
              "kind": "h3",
              "text": "Método 3: Verificação Pitagórica",
            },
            {
              "kind": "p",
              "text": "Confirme que os lados formam um triângulo retângulo: [[[3^2+4^2=9+16=25=5^2]]] Isso valida os comprimentos dos lados, não a altura. Execute-a primeiro quando um problema lhe entregar os lados, e depois use a verificação pela área ou pelas projeções para validar a altura.",
            },
          ],
        },
        "sec-vs-projections": {
          "h2": "Altura a Partir dos Lados vs. Altura a Partir das Projeções",
          "blocks": [
            {
              "kind": "p",
              "text": "A altura pode ser encontrada de duas formas. O método dos lados, nesta página, é [[h=\\frac{ab}{c}]], partindo dos três comprimentos dos lados. O método das projeções é [[h=\\sqrt{pq}]], partindo dos dois segmentos em que a altura divide a hipotenusa. Ambos descrevem o mesmo segmento e sempre concordam para o mesmo triângulo; a escolha depende de quais medidas você tem. Para a segunda rota, veja a página da <a href=\"/right-triangle-altitude-from-projections-calculator/\">calculadora de altura a partir das projeções</a>.",
            },
          ],
          "table": {
            "headers": [
              "Método",
              "Entradas necessárias",
              "Fórmula",
              "Melhor caso de uso",
            ],
            "rows": [
              [
                "Altura a partir dos lados",
                "Catetos a e b, hipotenusa c",
                "h = ab / c",
                "Os comprimentos dos lados são conhecidos; não precisa de raízes quadradas",
              ],
              [
                "Altura a partir das projeções",
                "Segmentos da hipotenusa p e q",
                "h = raiz quadrada de (p vezes q)",
                "O pé da altura divide a hipotenusa em partes conhecidas",
              ],
            ],
          },
          "image": {
            "src": "altitude-projections-similar.svg",
            "alt": "Triângulo retângulo com altura h mostrando as projeções p e q e os dois triângulos semelhantes menores",
            "caption": "A altura divide a hipotenusa em p e q; a fórmula dos lados e a fórmula das projeções dão o mesmo h.",
          },
        },
        "sec-area-rel": {
          "h2": "Relação Entre Altura, Área e Hipotenusa",
          "blocks": [
            {
              "kind": "p",
              "text": "Altura, área e hipotenusa se ligam por duas expressões para uma mesma área. Pelos catetos: [[[A=\\frac{ab}{2}]]] Pela hipotenusa e pela altura: [[[A=\\frac{ch}{2}]]]",
            },
            {
              "kind": "p",
              "text": "Resolver a segunda expressão para [[h]] dá um rearranjo prático: [[[h=\\frac{2A}{c}]]]",
            },
            {
              "kind": "p",
              "text": "Isso oferece uma segunda rota quando a área é conhecida diretamente. Para um triângulo com área [[54\\text{ cm}^2]] e hipotenusa [[15\\text{ cm}]], [[[h=\\frac{2 \\times 54}{15}=\\frac{108}{15}=7.2\\text{ cm}]]], a mesma resposta que a fórmula dos lados deu para o triângulo 9-12-15. Se você precisar primeiro da área, uma <a href=\"/right-triangle-area-calculator/\">calculadora de área</a> resolve essa etapa, e a <a href=\"/right-triangle-area-from-altitude-calculator/\">calculadora de área a partir da altura</a> inverte o cálculo depois que [[h]] é conhecido.",
            },
            {
              "kind": "p",
              "text": "Esta rota brilha quando um problema declara a área diretamente, como muitas questões de livros fazem, ou quando a área foi calculada em uma parte anterior. Em vez de caçar os catetos individuais, você divide o dobro da área pela hipotenusa e termina em uma linha. É a mesma altura que a fórmula dos lados dá, alcançada a partir de um ponto de partida diferente.",
            },
          ],
        },
        "sec-properties": {
          "h2": "Propriedades Especiais da Altura Relativa à Hipotenusa",
          "blocks": [
            {
              "kind": "p",
              "text": "A altura relativa à hipotenusa é sempre menor que qualquer cateto e menor que a própria hipotenusa, já que [[h=ab/c]] fica abaixo de [[a]] sempre que [[b<c]]. Catetos iguais dão um triângulo 45-45-90 simétrico em que a altura bissecta a hipotenusa. Para uma hipotenusa fixa, a altura é máxima quando os catetos são iguais: com hipotenusa 10, o triângulo 45-45-90 dá [[h=5]] enquanto o triângulo 6-8-10 dá apenas 4,8.",
            },
            {
              "kind": "p",
              "text": "Nenhuma divisão da mesma hipotenusa supera esse máximo, que é a desigualdade [[h \\le \\frac{c}{2}]], com igualdade apenas no caso 45-45-90. A escala também se comporta de forma simples: dobrar todos os lados dobra a altura, então 3-4-5 em 2,4 vira 6-8-10 em 4,8. Por fim, a altura divide o triângulo em dois triângulos menores semelhantes ao original, por isso as relações de projeção e área concordam.",
            },
          ],
          "image": {
            "src": "altitude-equal-vs-unequal.svg",
            "alt": "Dois triângulos retângulos compartilhando uma hipotenusa de 10: um triângulo 45-45-90 com altura 5 e um triângulo 6-8-10 com altura 4,8",
            "caption": "Mesma hipotenusa 10: catetos iguais dão a altura mais alta, 5.",
          },
        },
        "sec-mistakes": {
          "h2": "Erros Comuns ao Calcular a Altura do Triângulo Retângulo",
          "blocks": [
            {
              "kind": "p",
              "text": "Evite estes nove erros e quase todo cálculo de altura sai sem problemas.",
            },
            {
              "kind": "steps",
              "steps": [
                "Confundir a hipotenusa com um cateto. Correção: escolha primeiro o lado mais longo como c; em um triângulo 3-4-5, 5 deve ser c.",
                "Multiplicar os três lados. Calcular abc não tem significado geométrico aqui. Correção: multiplique apenas os catetos e depois divida pela hipotenusa.",
                "Esquecer de dividir por c. Parar em ab deixa o dobro da área, não um comprimento. Correção: termine sempre com a divisão.",
                "Misturar unidades. Digitar a em centímetros e c em metros corrompe a divisão silenciosamente. Correção: converta tudo para uma unidade primeiro.",
                "Usar lados que não formam um triângulo retângulo. A fórmula pressupõe um ângulo reto, então 2, 3, 4 dá absurdo. Correção: verifique a^2 + b^2 = c^2 primeiro.",
                "Confundir a altura com um dos catetos. Livros que pedem a altura geralmente querem a relativa à hipotenusa. Correção: confirme qual altura a questão pede.",
                "Arredondar valores intermediários cedo demais. Arredondar 60/13 para 4,6 no meio do cálculo injeta erro. Correção: arredonde apenas a resposta final.",
                "Usar uma fórmula de área incorretamente. Escrever Área = c vezes h sem a metade dobra a resposta. Correção: use Área = ch/2 ao resolver para h.",
                "Confundir a altura relativa à hipotenusa com a altura relativa a um cateto. São segmentos diferentes. Correção: a altura relativa à hipotenusa é o segmento interior mais curto h = ab/c.",
              ],
            },
          ],
        },
        "sec-applications": {
          "h2": "Usos Práticos dos Cálculos da Altura do Triângulo Retângulo",
          "blocks": [
            {
              "kind": "p",
              "text": "Estudantes encontram essa altura na lição de geometria sobre área, semelhança e média geométrica, enquanto professores a usam para conectar o teorema de Pitágoras às fórmulas de área em uma única figura, já que um só diagrama carrega [[ab/2]] e [[ch/2]]. Desenhistas e projetistas a usam quando um painel triangular ou suporte precisa ser dimensionado a partir de sua altura, e layouts triangulares de contraventamento às vezes precisam da menor distância transversal entre uma junta e um membro.",
            },
            {
              "kind": "p",
              "text": "Topógrafos que trabalham com linhas de visada em triângulo retângulo usam a mesma relação para conferir distâncias calculadas contra as medidas. Trate estes como modelos matemáticos com medidas idealizadas: o trabalho real de engenharia ou construção exige métodos de medição adequados, premissas de projeto declaradas e normas profissionais antes que qualquer resultado de fórmula seja confiável no canteiro.",
            },
            {
              "kind": "p",
              "text": "Na sala de aula, a altura também serve como tema de transição: ela amarra o teorema de Pitágoras, as fórmulas de área e os triângulos semelhantes em uma só figura. Um único diagrama bem desenhado pode carregar uma aula inteira, por isso essa construção aparece tão frequentemente nos livros didáticos.",
            },
          ],
        },
        "sec-practice": {
          "h2": "Problemas Práticos com Soluções",
          "blocks": [
            {
              "kind": "p",
              "text": "Tente cada problema por conta própria e depois confira as respostas resolvidas abaixo.",
            },
            {
              "kind": "h3",
              "text": "Problema 1: Números Inteiros Básicos",
            },
            {
              "kind": "p",
              "text": "Um triângulo retângulo tem catetos de 6 cm e 8 cm e hipotenusa de 10 cm. Encontre a altura relativa à hipotenusa.",
            },
            {
              "kind": "h3",
              "text": "Problema 2: Terno Pitagórico",
            },
            {
              "kind": "p",
              "text": "Um triângulo retângulo tem catetos de 12 m e 16 m e hipotenusa de 20 m. Encontre a altura relativa à hipotenusa.",
            },
            {
              "kind": "h3",
              "text": "Problema 3: Medidas Decimais",
            },
            {
              "kind": "p",
              "text": "Um triângulo retângulo tem catetos de 4,5 in e 6 in e hipotenusa de 7,5 in. Encontre a altura relativa à hipotenusa.",
            },
            {
              "kind": "h3",
              "text": "Problema 4: Catetos Iguais",
            },
            {
              "kind": "p",
              "text": "Um triângulo retângulo tem dois catetos iguais de 14 ft cada. Encontre a hipotenusa e depois a altura relativa à hipotenusa.",
            },
            {
              "kind": "h3",
              "text": "Problema 5: Conversão de Unidades",
            },
            {
              "kind": "p",
              "text": "Um triângulo retângulo tem lados de 2,4 m, 70 cm e 2,5 m. Converta as unidades primeiro e depois encontre a altura relativa à hipotenusa.",
            },
            {
              "kind": "h3",
              "text": "Respostas dos Problemas Práticos",
            },
            {
              "kind": "p",
              "text": "1. [[h=\\frac{6 \\times 8}{10}=\\frac{48}{10}=4.8\\text{ cm}]]. O padrão 3-4-5 em escala dá um decimal limpo.",
            },
            {
              "kind": "p",
              "text": "2. [[12^2+16^2=144+256=400=20^2]] confirma o terno, então [[h=\\frac{12 \\times 16}{20}=\\frac{192}{20}=9.6\\text{ m}]].",
            },
            {
              "kind": "p",
              "text": "3. [[h=\\frac{4.5 \\times 6}{7.5}=\\frac{27}{7.5}=3.6\\text{ in}]]. Decimais dividem de forma limpa quando o terno é consistente.",
            },
            {
              "kind": "p",
              "text": "4. [[c=\\sqrt{14^2+14^2}=14\\sqrt{2}\\text{ ft}]], então [[h=\\frac{14 \\times 14}{14\\sqrt{2}}=7\\sqrt{2}\\approx 9.899\\text{ ft}]], exatamente metade da hipotenusa como esperado para 45-45-90.",
            },
            {
              "kind": "p",
              "text": "5. Em centímetros: [[a=240]], [[b=70]], [[c=250]], e [[2.4^2+0.7^2=5.76+0.49=6.25=2.5^2]] confere. Então [[h=\\frac{240 \\times 70}{250}=\\frac{16800}{250}=67.2\\text{ cm}]].",
            },
          ],
        },
        "sec-conclusion": {
          "h2": "Calculadoras de Triângulo Retângulo Relacionadas",
          "blocks": [
            {
              "kind": "p",
              "text": "Com a fórmula da altura em mãos, escolha a próxima ferramenta pelo que você sabe. Se você conhece os segmentos da hipotenusa em vez dos lados, vá para a calculadora de projeções. Se você conhece a altura e quer a área, a ferramenta <a href=\"/right-triangle-area-from-hypotenuse-and-altitude-calculator/\">área a partir da hipotenusa e da altura</a> inverte o cálculo da seção de área. As cinco calculadoras relacionadas abaixo cobrem todos os cálculos vizinhos. Comece com a ferramenta que corresponde às medidas que você já tem, e deixe cada resultado verificar o próximo.",
            },
          ],
        },
      },
      "faqHeading": "Perguntas Frequentes",
      "faqs": [
        {
          "question": "Qual é a fórmula da altura a partir dos três lados?",
          "answer": "A fórmula é [[h=\\frac{ab}{c}]], onde [[a]] e [[b]] são os dois catetos perpendiculares e [[c]] é a hipotenusa. Multiplique os catetos e depois divida pela hipotenusa. O resultado é um comprimento na mesma unidade dos lados digitados.",
        },
        {
          "question": "Como se encontra a altura de um triângulo retângulo?",
          "answer": "Identifique o ângulo reto, rotule os dois catetos [[a]] e [[b]] e a hipotenusa [[c]], garantindo que todas as unidades combinem. Depois calcule [[h=\\frac{ab}{c}]]. Para um triângulo 3-4-5, isso dá [[h=\\frac{12}{5}=2.4]], um segmento menor que qualquer cateto.",
        },
        {
          "question": "Por que a hipotenusa está no denominador?",
          "answer": "Vem da demonstração pela área. A área é igual a [[ab/2]] usando os catetos e [[ch/2]] usando a hipotenusa como base. Igualar as duas dá [[ab=ch]], e resolver para [[h]] coloca [[c]] no denominador. Quanto mais longa a hipotenusa, menor a altura para uma dada área.",
        },
        {
          "question": "Posso calcular a altura usando apenas dois lados?",
          "answer": "Sim, com um passo extra. Se você conhece ambos os catetos, encontre primeiro a hipotenusa com [[c=\\sqrt{a^2+b^2}]]. Se você conhece um cateto e a hipotenusa, encontre o outro cateto com [[b=\\sqrt{c^2-a^2}]]. Depois use [[h=\\frac{ab}{c}]] como de costume.",
        },
        {
          "question": "A altura é sempre a mesma, seja qual for a base?",
          "answer": "Depende de qual altura se tem em mente. Altura geralmente significa a distância perpendicular até uma base escolhida, então a altura relativa à hipotenusa é a altura quando a hipotenusa é a base. Se um cateto for escolhido como base, a altura é o outro cateto, um segmento totalmente diferente.",
        },
        {
          "question": "A altura é sempre menor que os catetos?",
          "answer": "Sim, a altura relativa à hipotenusa é sempre menor que qualquer cateto do mesmo triângulo. Ela é o segmento mais curto do vértice do ângulo reto até a hipotenusa, enquanto cada cateto é um caminho mais longo até o mesmo lado. Ela também é menor que a própria hipotenusa.",
        },
        {
          "question": "Posso usar esta fórmula para qualquer triângulo?",
          "answer": "Não, apenas para triângulos retângulos. A dedução depende de os catetos serem perpendiculares, o que dá a área como [[ab/2]]. Para um triângulo acutângulo ou obtusângulo, encontre a altura com a fórmula geral da área ou com trigonometria. Confirme sempre o ângulo reto primeiro.",
        },
        {
          "question": "E se os comprimentos dos meus lados não satisfizerem o teorema de Pitágoras?",
          "answer": "Então eles não formam um triângulo retângulo e a fórmula não se aplica. Meça novamente os lados ou verifique a rotulagem, já que o lado mais longo deve ser a hipotenusa. Pequenas diferenças de arredondamento são aceitáveis, mas uma grande divergência significa que o triângulo não é retângulo.",
        },
        {
          "question": "Como encontro a altura de um triângulo 3-4-5?",
          "answer": "Multiplique os catetos e divida pela hipotenusa: [[h=\\frac{3 \\times 4}{5}=\\frac{12}{5}=2.4\\text{ cm}]] (ou qualquer unidade que seus lados usem). O triângulo 3-4-5 é o exemplo clássico resolvido porque os três lados são números inteiros.",
        },
        {
          "question": "Qual é a altura de um triângulo 5-12-13?",
          "answer": "Ela é [[h=\\frac{5 \\times 12}{13}=\\frac{60}{13}\\approx 4.615]], na unidade dos lados. Mantenha a fração exata [[60/13]] quando precisar de precisão total, e arredonde para 4,615 apenas na resposta final relatada.",
        },
        {
          "question": "Como a altura se relaciona com a área?",
          "answer": "A área pode ser escrita de duas formas: [[A=\\frac{ab}{2}]] e [[A=\\frac{ch}{2}]]. Reorganizar a segunda dá [[h=\\frac{2A}{c}]], então conhecer a área e a hipotenusa é outra rota para a mesma altura. Ambas as formas descrevem o triângulo idêntico.",
        },
        {
          "question": "Qual é a diferença entre altura a partir dos lados e altura a partir das projeções?",
          "answer": "A altura a partir dos lados usa [[h=\\frac{ab}{c}]] com os três comprimentos dos lados. A altura a partir das projeções usa [[h=\\sqrt{pq}]] com os dois segmentos da hipotenusa. Ambas encontram o mesmo segmento; a escolha depende de quais medidas você tem.",
        },
      ],
      "relatedHeading": "Explore as Calculadoras de Triângulo Retângulo Relacionadas",
      "relatedIntro": "Escolha a calculadora que corresponde às medidas que você já tem.",
      "relatedItems": [
        "Calculadora de Altura do Triângulo Retângulo",
        "Calculadora de Altura do Triângulo Retângulo a Partir das Projeções",
        "Calculadora de Projeção do Triângulo Retângulo",
        "Calculadora de Área do Triângulo Retângulo",
        "Calculadora de Área do Triângulo Retângulo a Partir da Altura",
      ],
    },
};
