export const SINE_TRANSLATIONS_BATCH2 = {
  "pt": {
    "tocHeading": "Neste Guia",
    "tocItems": {
      "sec-intro": "O Que é uma Calculadora de Razão Seno?",
      "sec-triangle": "Entendendo o Cateto Oposto e a Hipotenusa",
      "sec-whatis": "Entendendo a Razão Seno",
      "sec-formula": "Como Funciona a Fórmula do Seno",
      "sec-howto": "Como Usar a Calculadora de Razão Seno",
      "sec-examples": "Exemplos Passo a Passo de Cálculo do Seno",
      "sec-applications": "Exemplos da Vida Real do Uso da Razão Seno",
      "sec-angle": "Entendendo a Relação Entre Seno e Tamanho do Ângulo",
      "sec-hypotenuse": "Como Encontrar o Cateto Oposto Usando o Seno",
      "sec-recover": "Como Encontrar um Ângulo a Partir de uma Razão Seno",
      "sec-mistakes": "Erros Comuns ao Calcular o Seno",
      "sec-verify": "Como Verificar se o Resultado do Seno é Válido",
      "sec-vs": "Seno vs. Cosseno, Tangente e Cossecante",
      "sec-related": "Explorar Calculadoras Trigonométricas Relacionadas",
      "sec-faq": "Perguntas Frequentes"
    },
    "sections": {
      "sec-intro": {
        "h2": "O Que é uma Calculadora de Razão Seno?",
        "blocks": [
          {
            "kind": "p",
            "text": "Uma calculadora de razão seno responde a uma pergunta: para um ângulo agudo de um triângulo retângulo, como o lado oposto ao ângulo se compara com o lado mais longo? Digite o cateto oposto e a hipotenusa, e a ferramenta divide o cateto oposto pela hipotenusa, retornando [[\\sin(A)=a/c]]. Um triângulo retângulo tem cateto oposto de 3 cm e hipotenusa de 5 cm, logo [[\\sin(A)=3/5=0.6]]. Esse 0.6 é a razão seno: ele indica que o cateto oposto é 60 por cento da hipotenusa. Ele não é um ângulo, então nunca o leia como [[0.6^\\circ]]. O cateto adjacente nunca entra neste cálculo; o cateto oposto e a hipotenusa bastam por si sós. O seno é uma das razões trigonométricas fundamentais, e sua força está em comparar dois comprimentos de uma forma que depende apenas do ângulo, não do tamanho do triângulo. Se o que você precisa é do ângulo em graus, o seno inverso converte a razão em graus."
          }
        ]
      },
      "sec-triangle": {
        "h2": "Entendendo o Cateto Oposto e a Hipotenusa",
        "blocks": [
          {
            "kind": "h3",
            "text": "O Que é um Triângulo Retângulo?"
          },
          {
            "kind": "p",
            "text": "Um triângulo retângulo tem um ângulo de exatamente [[90^\\circ]], o ângulo entre duas linhas perpendiculares, como uma parede encontrando um piso nivelado. A hipotenusa fica oposta a esse ângulo reto e é sempre o lado mais longo, porque precisa atravessar toda a diagonal do canto. Os outros dois ângulos dividem os 90 graus restantes, então ambos são agudos. Os dois catetos se encontram no ângulo reto, perpendiculares entre si, e é a relação deles com a hipotenusa que torna a trigonometria do triângulo retângulo possível."
          },
          {
            "kind": "h3",
            "text": "O Que é o Cateto Oposto?"
          },
          {
            "kind": "p",
            "text": "O cateto oposto [[a]] é o lado diretamente oposto ao ângulo de referência [[A]], o único lado que nunca toca seu vértice. Em problemas práticos, ele costuma representar uma elevação vertical, uma diferença de altura ou uma componente perpendicular: a altura da parede que uma escada alcança, a elevação vertical de uma rampa ou a diferença de elevação em um levantamento topográfico. Qual lado conta como oposto depende do ângulo de referência escolhido, então trocar do ângulo [[A]] para o ângulo [[C]] troca os rótulos oposto e adjacente. Ele aparece no numerador da fórmula do seno porque o seno mede o tamanho desse lado através do ângulo em relação à hipotenusa."
          },
          {
            "kind": "h3",
            "text": "O Que é a Hipotenusa?"
          },
          {
            "kind": "p",
            "text": "A hipotenusa [[c]] é o lado oposto ao ângulo reto: em qualquer diagrama ela fica diante do pequeno quadrado que marca o canto de [[90^\\circ]], e é estritamente mais longa que qualquer cateto. Em problemas práticos, ela costuma representar um comprimento inclinado: uma escada, a superfície de uma rampa, uma viga, um cabo, um tirante diagonal ou um trajeto em linha reta. Ela aparece no denominador da fórmula do seno, e é por isso que todo valor de seno fica entre 0 e 1: o numerador é sempre um cateto legítimo, mais curto que o denominador."
          },
          {
            "kind": "h3",
            "text": "O Que é o Cateto Adjacente?"
          },
          {
            "kind": "p",
            "text": "O cateto adjacente [[b]] é o cateto que toca o ângulo de referência [[A]] sem ser a hipotenusa. Ele não tem papel no cálculo principal do seno, por isso a calculadora nunca o pede. Ele se torna útil ao calcular o cosseno, a tangente ou um lado desconhecido, e quando o teorema de Pitágoras é usado para verificar se os dois comprimentos conhecidos formam um triângulo retângulo legítimo."
          }
        ],
        "imgAlt": "Triângulo retângulo com ângulo A no canto inferior esquerdo, cateto oposto a dourado, hipotenusa c azul, sin(A)=a/c",
        "figcaption": "O ângulo A fica no canto inferior esquerdo; o seno usa o cateto oposto a dourado e a hipotenusa c azul, não o cateto adjacente b."
      },
      "sec-whatis": {
        "h2": "Entendendo a Razão Seno",
        "blocks": [
          {
            "kind": "p",
            "text": "O seno de um ângulo agudo compara o lado diretamente oposto a esse ângulo com o lado mais longo do triângulo:"
          },
          {
            "kind": "p",
            "text": "[[[\\boxed{\\sin(A)=\\frac{a}{c}}]]]"
          },
          {
            "kind": "p",
            "text": "Leia [[\\sin(A)]] como \"o seno do ângulo A\". O numerador [[a]] é o cateto oposto; o denominador [[c]] é a hipotenusa. A fração responde a uma pergunta concreta: que porção da hipotenusa o cateto oposto representa? Como ambas as entradas são comprimentos medidos na mesma unidade, o resultado é um número simples, e esse número depende apenas do ângulo, nunca do tamanho do triângulo."
          },
          {
            "kind": "h3",
            "text": "Entendendo SOH-CAH-TOA"
          },
          {
            "kind": "p",
            "text": "Os estudantes memorizam as três razões principais com o mnemônico SOH-CAH-TOA:"
          },
          {
            "kind": "p",
            "text": "<strong>SOH:</strong> Seno = Oposto / Hipotenusa. <strong>CAH:</strong> Cosseno = Adjacente / Hipotenusa. <strong>TOA:</strong> Tangente = Oposto / Adjacente."
          },
          {
            "kind": "p",
            "text": "SOH corresponde diretamente à fórmula do seno [[\\sin(A)=a/c]]. O mnemônico funciona porque emparelha cada nome de razão com os dois lados de que ela precisa, na ordem certa: para o seno, o cateto oposto vai em cima e a hipotenusa vai embaixo. Uma vez que os dois lados são nomeados corretamente, o mnemônico transforma \"qual lado vai onde\" de um problema de memória em uma consulta."
          },
          {
            "kind": "h3",
            "text": "Por Que o Seno é uma Razão"
          },
          {
            "kind": "p",
            "text": "Dividir dois comprimentos produz um número adimensional porque as unidades se cancelam:"
          },
          {
            "kind": "p",
            "text": "[[[\\frac{3\\,\\text{m}}{5\\,\\text{m}}=0.6]]]"
          },
          {
            "kind": "p",
            "text": "Os metros se cancelam, restando 0.6. Usar 300 cm e 500 cm dá o resultado idêntico, pois ambos os comprimentos escalam juntos. O único requisito é ter unidades compatíveis: ambas as medidas devem usar a mesma unidade, ou uma deve ser convertida antes da divisão. A razão é, portanto, uma propriedade do ângulo, não da régua usada para medir o triângulo."
          },
          {
            "kind": "h3",
            "text": "O Que Significa um Valor de Seno de 0.6?"
          },
          {
            "kind": "p",
            "text": "[[\\sin(A)=0.6]] significa que o cateto oposto é 60 por cento da hipotenusa. O triângulo 3-4-5 é a referência clássica: [[\\sin(A)=3/5=0.6]]. O número revela a forma do triângulo de relance: um seno próximo de 1 significa que o cateto oposto quase iguala a hipotenusa e o ângulo é íngreme; um seno próximo de 0 significa que o cateto oposto é curto em relação à hipotenusa e o ângulo é raso. Nada disso sugere que 0.6 seja um ângulo; é uma proporção, e só o seno inverso a transforma em graus."
          },
          {
            "kind": "h3",
            "text": "Por Que o Seno Fica Entre 0 e 1"
          },
          {
            "kind": "p",
            "text": "A hipotenusa é mais longa que o cateto oposto, logo [[0 \\lt a \\lt c]], e portanto:"
          },
          {
            "kind": "p",
            "text": "[[[\\boxed{0 \\lt \\frac{a}{c} \\lt 1}]]]"
          },
          {
            "kind": "p",
            "text": "Um triângulo retângulo válido e não degenerado não pode ter razão seno de exatamente 0 ou exatamente 1 para seu ângulo agudo. O valor se aproxima de 0 conforme o ângulo se aproxima de [[0^\\circ]], porque o cateto oposto encolhe até quase nada; ele se aproxima de 1 conforme o ângulo se aproxima de [[90^\\circ]], porque o cateto oposto cresce até quase igualar a hipotenusa. Nenhum dos dois valores-limite é atingido pelo ângulo agudo de um triângulo real."
          },
          {
            "kind": "h3",
            "text": "Seno Versus Cosseno"
          },
          {
            "kind": "p",
            "text": "As duas razões compartilham a mesma hipotenusa, mas usam numeradores diferentes:"
          },
          {
            "kind": "p",
            "text": "[[\\sin(A)=a/c]] e [[\\cos(A)=b/c]]."
          },
          {
            "kind": "p",
            "text": "O seno usa o cateto oposto, o cateto diante do ângulo; o cosseno usa o cateto adjacente, o cateto ao lado do ângulo. Um resultado acima de 1 significa que a fração foi invertida ou que a hipotenusa foi colocada no numerador. O seno não é o recíproco do cosseno: o recíproco do seno é a cossecante."
          }
        ],
        "imgAlt": "Três etapas: rotular a=3, b=4, c=5 num triângulo, aplicar sin(A)=a/c, obter 0.6, que significa 60 por cento",
        "figcaption": "Identifique os lados, aplique a fórmula e calcule: o cateto oposto é 60 por cento da hipotenusa."
      },
      "sec-formula": {
        "h2": "Como Funciona a Fórmula do Seno",
        "blocks": [
          {
            "kind": "p",
            "text": "A fórmula segue uma sequência lógica. Comece com a definição em palavras:"
          },
          {
            "kind": "p",
            "text": "[[[\\sin(A)=\\frac{\\text{Opposite}}{\\text{Hypotenuse}}]]]"
          },
          {
            "kind": "p",
            "text": "Em seguida, use a notação existente da página, com [[a]] para o cateto oposto e [[c]] para a hipotenusa:"
          },
          {
            "kind": "p",
            "text": "[[[\\boxed{\\sin(A)=\\frac{a}{c}}]]]"
          },
          {
            "kind": "p",
            "text": "O cateto oposto pertence ao numerador porque o seno mede o tamanho desse lado em relação à hipotenusa; a hipotenusa pertence ao denominador porque é o comprimento de referência contra o qual todos os outros lados são comparados. O arranjo é fixo: o numerador pergunta \"quão grande é este cateto?\", o denominador responde \"em comparação com o quê?\"."
          },
          {
            "kind": "h3",
            "text": "Exemplo Totalmente Resolvido: Um Triângulo Retângulo 3-4-5"
          },
          {
            "kind": "p",
            "text": "Dados [[a=3\\,\\text{cm}]], [[b=4\\,\\text{cm}]] e [[c=5\\,\\text{cm}]]:"
          },
          {
            "kind": "p",
            "text": "<strong>Passo 1:</strong> Escreva a fórmula. [[\\sin(A)=a/c]]"
          },
          {
            "kind": "p",
            "text": "<strong>Passo 2:</strong> Substitua os valores conhecidos. [[\\sin(A)=3/5]]"
          },
          {
            "kind": "p",
            "text": "<strong>Passo 3:</strong> Divida. [[\\boxed{\\sin(A)=0.6}]]"
          },
          {
            "kind": "p",
            "text": "<strong>Passo 4:</strong> Interprete o resultado. O cateto oposto é 60 por cento da hipotenusa."
          },
          {
            "kind": "p",
            "text": "<strong>Passo 5:</strong> Verifique o triângulo. [[3^2+4^2=5^2]], e [[9+16=25]]. A verificação pitagórica confirma que esses comprimentos formam um triângulo retângulo, então o resultado do seno é confiável."
          },
          {
            "kind": "h3",
            "text": "Esclarecimento Importante"
          },
          {
            "kind": "p",
            "text": "Se o leitor quiser o ângulo em vez de sua razão seno, o seno inverso é necessário: [[A=\\sin^{-1}(0.6)\\approx36.87^\\circ]]. O seno inverso também é chamado de arco seno e é uma operação separada do cálculo da razão seno. A calculadora de razão seno existente calcula a razão a partir de dois comprimentos; ela não retorna diretamente o ângulo."
          }
        ]
      },
      "sec-howto": {
        "h2": "Como Usar a Calculadora de Razão Seno",
        "blocks": [
          {
            "kind": "p",
            "text": "A calculadora espelha a fórmula exatamente: duas entradas, um botão, uma razão. Percorra a interface em ordem."
          }
        ],
        "steps": [
          "<strong>Identifique o ângulo de referência [[A]].</strong> Todo cálculo de seno está ancorado em um ângulo agudo; o cateto oposto é definido em relação a ele.",
          "<strong>Localize o cateto oposto [[a]], diretamente oposto ao ângulo [[A]].</strong> É o cateto que nunca toca o vértice do ângulo.",
          "<strong>Localize a hipotenusa [[c]], oposta ao ângulo reto e o lado mais longo.</strong> Ela fica diante do pequeno quadrado que marca o canto de [[90^\\circ]].",
          "<strong>Obtenha ou meça os dois comprimentos.</strong> Use uma fita métrica, uma dimensão de projeto ou valores do enunciado do problema.",
          "<strong>Digite o comprimento do cateto oposto no primeiro campo.</strong> Ele se torna o numerador [[a]].",
          "<strong>Digite o comprimento da hipotenusa no segundo campo.</strong> Ela se torna o denominador [[c]].",
          "<strong>Selecione unidades de medida compatíveis usando os seletores de unidade disponíveis.</strong> Metros com metros, centímetros com centímetros; unidades mistas dão uma razão sem sentido.",
          "<strong>Confirme que ambas as medidas são positivas.</strong> Comprimentos zero ou negativos não podem formar um triângulo.",
          "<strong>Verifique se a hipotenusa é mais longa que o cateto oposto.</strong> Se [[a \\ge c]], as entradas estão trocadas ou o triângulo é impossível.",
          "<strong>Clique em Calculate sin(A).</strong> A ferramenta divide o cateto oposto pela hipotenusa.",
          "<strong>Leia a razão seno resultante.</strong> É um decimal simples, não um ângulo nem um comprimento.",
          "<strong>Confirme que o resultado é maior que 0 e menor que 1.</strong> Para um triângulo retângulo válido e não degenerado com ângulo de referência agudo, esse é o único intervalo legal.",
          "<strong>Use Reset quando quiser limpar as entradas e começar outro cálculo.</strong>"
        ],
        "closingParagraphs": [
          "A calculadora não requer o cateto adjacente nem uma entrada de ângulo. Ela realiza a divisão e nada mais: sem histórico salvo, sem gráficos, sem modos ocultos."
        ]
      },
      "sec-examples": {
        "h2": "Exemplos Passo a Passo de Cálculo do Seno",
        "blocks": [
          {
            "kind": "h3",
            "text": "Exemplo 1: Um Triângulo Retângulo 3-4-5"
          },
          {
            "kind": "p",
            "text": "Dados [[a=3\\,\\text{cm}]], [[b=4\\,\\text{cm}]] e [[c=5\\,\\text{cm}]]:"
          },
          {
            "kind": "p",
            "text": "[[\\sin(A)=\\frac{3}{5}]]"
          },
          {
            "kind": "p",
            "text": "[[\\boxed{\\sin(A)=0.6}]]"
          },
          {
            "kind": "p",
            "text": "O cateto oposto é 60 por cento da hipotenusa."
          },
          {
            "kind": "h3",
            "text": "Exemplo 2: Um Triângulo Retângulo 5-12-13"
          },
          {
            "kind": "p",
            "text": "Dados [[a=5\\,\\text{m}]], [[b=12\\,\\text{m}]] e [[c=13\\,\\text{m}]]:"
          },
          {
            "kind": "p",
            "text": "[[\\sin(A)=\\frac{5}{13}]]"
          },
          {
            "kind": "p",
            "text": "[[\\boxed{\\sin(A)\\approx0.3846}]]"
          },
          {
            "kind": "p",
            "text": "O cateto oposto é aproximadamente 38.46 por cento da hipotenusa."
          },
          {
            "kind": "h3",
            "text": "Exemplo 3: Um Triângulo 30-60-90"
          },
          {
            "kind": "p",
            "text": "Para um ângulo de referência de [[A=30^\\circ]], o cateto oposto é metade da hipotenusa. Use [[a=1\\,\\text{cm}]], [[b=\\sqrt{3}\\,\\text{cm}]] e [[c=2\\,\\text{cm}]]:"
          },
          {
            "kind": "p",
            "text": "[[\\sin(30^\\circ)=\\frac{1}{2}]]"
          },
          {
            "kind": "p",
            "text": "[[\\boxed{\\sin(30^\\circ)=0.5}]]"
          },
          {
            "kind": "p",
            "text": "Este é um resultado útil de ângulo especial: aos 30 graus o cateto oposto é exatamente metade da hipotenusa, por isso este triângulo aparece em tantos problemas de livro-texto."
          },
          {
            "kind": "h3",
            "text": "Exemplo 4: Um Triângulo 45-45-90"
          },
          {
            "kind": "p",
            "text": "Dados [[a=1\\,\\text{cm}]], [[b=1\\,\\text{cm}]] e [[c=\\sqrt{2}\\,\\text{cm}]]:"
          },
          {
            "kind": "p",
            "text": "[[\\sin(45^\\circ)=\\frac{1}{\\sqrt{2}}]]"
          },
          {
            "kind": "p",
            "text": "[[\\boxed{\\sin(45^\\circ)\\approx0.7071}]]"
          },
          {
            "kind": "p",
            "text": "Catetos iguais produzem valores iguais de seno e cosseno para os dois ângulos agudos: aos 45 graus cada ângulo agudo enfrenta um cateto de 1 e uma hipotenusa de [[\\sqrt{2}]], então seno e cosseno coincidem."
          }
        ]
      },
      "sec-applications": {
        "h2": "Exemplos da Vida Real do Uso da Razão Seno",
        "blocks": [
          {
            "kind": "p",
            "text": "Cada exemplo apresenta a situação, identifica o cateto oposto e a hipotenusa, os substitui na fórmula e interpreta o resultado em linguagem simples."
          },
          {
            "kind": "h3",
            "text": "Exemplo 5: Calculando a Razão Seno de uma Escada"
          },
          {
            "kind": "p",
            "text": "Uma escada tem 5 m de comprimento e alcança 4 m de altura numa parede vertical. O ângulo de referência [[A]] é entre a escada e o solo horizontal. A escada é a hipotenusa, [[c=5\\,\\text{m}]], e a altura vertical é o cateto oposto, [[a=4\\,\\text{m}]]:"
          },
          {
            "kind": "p",
            "text": "[[\\sin(A)=\\frac{4}{5}]]"
          },
          {
            "kind": "p",
            "text": "[[\\boxed{\\sin(A)=0.8}]]"
          },
          {
            "kind": "p",
            "text": "A altura vertical é 80 por cento do comprimento da escada. A razão descreve a geometria da escada e não estabelece se a escada está posicionada com segurança."
          },
          {
            "kind": "h3",
            "text": "Exemplo 6: Calculando a Razão Seno de uma Viga de Telhado"
          },
          {
            "kind": "p",
            "text": "Uma viga de telhado tem comprimento inclinado de 6.5 m e elevação vertical de 2.5 m. A viga é a hipotenusa, [[c=6.5\\,\\text{m}]], e a elevação vertical é o cateto oposto, [[a=2.5\\,\\text{m}]]:"
          },
          {
            "kind": "p",
            "text": "[[\\sin(A)=\\frac{2.5}{6.5}]]"
          },
          {
            "kind": "p",
            "text": "[[\\boxed{\\sin(A)\\approx0.3846}]]"
          },
          {
            "kind": "p",
            "text": "A elevação vertical é aproximadamente 38.46 por cento do comprimento da viga. A razão não estabelece adequação estrutural nem conformidade de projeto do telhado."
          },
          {
            "kind": "h3",
            "text": "Exemplo 7: Avaliando a Razão Seno de uma Rampa"
          },
          {
            "kind": "p",
            "text": "Uma rampa simplificada tem comprimento inclinado de 9.5 m e elevação vertical de 0.75 m. A inclinação é a hipotenusa, [[c=9.5\\,\\text{m}]], e a elevação vertical é o cateto oposto, [[a=0.75\\,\\text{m}]]:"
          },
          {
            "kind": "p",
            "text": "[[\\sin(A)=\\frac{0.75}{9.5}]]"
          },
          {
            "kind": "p",
            "text": "[[\\boxed{\\sin(A)\\approx0.07895}]]"
          },
          {
            "kind": "p",
            "text": "A elevação vertical é aproximadamente 7.89 por cento do comprimento inclinado, uma inclinação suave. Esta razão por si só não estabelece acessibilidade nem conformidade com o código de construção."
          },
          {
            "kind": "h3",
            "text": "Exemplo 8: Uma Medição Topográfica"
          },
          {
            "kind": "p",
            "text": "Um triângulo topográfico simplificado tem distância em linha reta de 50 m e diferença de elevação vertical de 30 m. A linha reta é a hipotenusa, [[c=50\\,\\text{m}]], e a diferença vertical é o cateto oposto, [[a=30\\,\\text{m}]]:"
          },
          {
            "kind": "p",
            "text": "[[\\sin(A)=\\frac{30}{50}]]"
          },
          {
            "kind": "p",
            "text": "[[\\boxed{\\sin(A)=0.6}]]"
          },
          {
            "kind": "p",
            "text": "A diferença vertical é 60 por cento da distância em linha reta. Levantamentos reais podem exigir correções adicionais, ajustes de altura do instrumento e medições mais detalhadas."
          },
          {
            "kind": "h3",
            "text": "Exemplo 9: Um Cabo de Ancoragem Sustentando um Poste"
          },
          {
            "kind": "p",
            "text": "Um cabo de ancoragem tem 13 m de comprimento, e seu ponto de fixação está 5 m acima do nível da âncora no solo. O cabo é a hipotenusa, [[c=13\\,\\text{m}]], e a separação vertical é o cateto oposto, [[a=5\\,\\text{m}]]:"
          },
          {
            "kind": "p",
            "text": "[[\\sin(A)=\\frac{5}{13}]]"
          },
          {
            "kind": "p",
            "text": "[[\\boxed{\\sin(A)\\approx0.3846}]]"
          },
          {
            "kind": "p",
            "text": "A separação vertical é aproximadamente 38.46 por cento do comprimento do cabo. A razão não estabelece a tensão do cabo, a resistência da âncora nem a segurança estrutural."
          },
          {
            "kind": "h3",
            "text": "Exemplo 10: Calculando a Razão Seno de uma Longarina de Escada"
          },
          {
            "kind": "p",
            "text": "Uma longarina de escada simplificada tem 5 m de comprimento e cobre uma elevação vertical de 3 m. A longarina é a hipotenusa, [[c=5\\,\\text{m}]], e a elevação vertical é o cateto oposto, [[a=3\\,\\text{m}]]:"
          },
          {
            "kind": "p",
            "text": "[[\\sin(A)=\\frac{3}{5}]]"
          },
          {
            "kind": "p",
            "text": "[[\\boxed{\\sin(A)=0.6}]]"
          },
          {
            "kind": "p",
            "text": "A elevação vertical é 60 por cento do comprimento da longarina diagonal. O cálculo não verifica as dimensões da escada nem a conformidade com o código de construção."
          },
          {
            "kind": "h3",
            "text": "Exemplo 11: Entendendo a Componente Vertical de uma Lança de Guindaste"
          },
          {
            "kind": "p",
            "text": "Uma lança de guindaste simplificada tem comprimento de 10 m e componente vertical de 8 m. A lança é a hipotenusa, [[c=10\\,\\text{m}]], e a componente vertical é o cateto oposto, [[a=8\\,\\text{m}]]:"
          },
          {
            "kind": "p",
            "text": "[[\\sin(A)=\\frac{8}{10}]]"
          },
          {
            "kind": "p",
            "text": "[[\\boxed{\\sin(A)=0.8}]]"
          },
          {
            "kind": "p",
            "text": "A componente vertical é 80 por cento do comprimento da lança. A razão não estabelece a capacidade do guindaste nem a segurança operacional."
          },
          {
            "kind": "h3",
            "text": "Exemplo 12: Um Segmento de Voo Retilíneo de Aeronave"
          },
          {
            "kind": "p",
            "text": "Para um segmento de voo simplificado, uma aeronave percorre 5 km ao longo de um trajeto reto enquanto ganha 1.5 km de altitude. O trajeto é a hipotenusa, [[c=5\\,\\text{km}]], e o ganho vertical é o cateto oposto, [[a=1.5\\,\\text{km}]]:"
          },
          {
            "kind": "p",
            "text": "[[\\sin(A)=\\frac{1.5}{5}]]"
          },
          {
            "kind": "p",
            "text": "[[\\boxed{\\sin(A)=0.3}]]"
          },
          {
            "kind": "p",
            "text": "O ganho vertical é 30 por cento do comprimento do trajeto em linha reta. Este é um exemplo geométrico idealizado, não um cálculo completo de navegação de voo."
          },
          {
            "kind": "h3",
            "text": "Exemplo 13: Um Tirante Mecânico Diagonal"
          },
          {
            "kind": "p",
            "text": "Um tirante diagonal tem comprimento de 2 m e componente vertical de 1.6 m. O tirante é a hipotenusa, [[c=2\\,\\text{m}]], e a componente vertical é o cateto oposto, [[a=1.6\\,\\text{m}]]:"
          },
          {
            "kind": "p",
            "text": "[[\\sin(A)=\\frac{1.6}{2}]]"
          },
          {
            "kind": "p",
            "text": "[[\\boxed{\\sin(A)=0.8}]]"
          },
          {
            "kind": "p",
            "text": "A componente vertical é 80 por cento do comprimento do tirante. A razão não determina a resistência nem a adequação do tirante."
          },
          {
            "kind": "h3",
            "text": "Exemplo 14: A Razão Seno de uma Rota de Caminhada"
          },
          {
            "kind": "p",
            "text": "Um trecho de caminhada reto simplificado tem comprimento de trilha de 100 m e ganho de elevação vertical de 25 m. A trilha é a hipotenusa, [[c=100\\,\\text{m}]], e o ganho de elevação é o cateto oposto, [[a=25\\,\\text{m}]]:"
          },
          {
            "kind": "p",
            "text": "[[\\sin(A)=\\frac{25}{100}]]"
          },
          {
            "kind": "p",
            "text": "[[\\boxed{\\sin(A)=0.25}]]"
          },
          {
            "kind": "p",
            "text": "O ganho de elevação é 25 por cento do comprimento da trilha reta. Trilhas reais de caminhada podem conter curvas e gradientes variáveis."
          },
          {
            "kind": "h3",
            "text": "Exemplo 15: Um Suporte de Toldo"
          },
          {
            "kind": "p",
            "text": "Um suporte de toldo tem comprimento de 3 m e componente vertical de 1.2 m. O suporte é a hipotenusa, [[c=3\\,\\text{m}]], e a componente vertical é o cateto oposto, [[a=1.2\\,\\text{m}]]:"
          },
          {
            "kind": "p",
            "text": "[[\\sin(A)=\\frac{1.2}{3}]]"
          },
          {
            "kind": "p",
            "text": "[[\\boxed{\\sin(A)=0.4}]]"
          },
          {
            "kind": "p",
            "text": "A componente vertical é 40 por cento do comprimento do suporte. O cálculo não estabelece adequação estrutural."
          },
          {
            "kind": "h3",
            "text": "Exemplo 16: Uma Linha de Visão até o Topo de uma Árvore"
          },
          {
            "kind": "p",
            "text": "Uma linha de visão simplificada até o topo de uma árvore mede 20 m. A diferença vertical entre o nível dos olhos do observador e o topo da árvore é 12 m. A linha de visão é a hipotenusa, [[c=20\\,\\text{m}]], e a diferença vertical é o cateto oposto, [[a=12\\,\\text{m}]]:"
          },
          {
            "kind": "p",
            "text": "[[\\sin(A)=\\frac{12}{20}]]"
          },
          {
            "kind": "p",
            "text": "[[\\boxed{\\sin(A)=0.6}]]"
          },
          {
            "kind": "p",
            "text": "A diferença vertical é 60 por cento da distância da linha de visão. O resultado não fornece a altura total da árvore acima do solo, a menos que a altura dos olhos do observador e outras informações necessárias sejam consideradas."
          },
          {
            "kind": "p",
            "text": "O seno é uma razão matemática, não uma grandeza física com unidades. Seu valor prático vem de comparar uma componente vertical ou perpendicular com uma distância inclinada, calcular componentes quando o ângulo é conhecido e verificar relações geométricas. Não trate o seno isolado como um atestado de segurança estrutural, capacidade de carga, acessibilidade ou conformidade de engenharia."
          }
        ],
        "tables": [
          {
            "headers": ["Situação", "Oposto [[a]]", "Hipotenusa [[c]]", "Fórmula", "Razão", "Significado"],
            "rows": [
              ["Escada", "4 m", "5 m", "4/5", "0.8", "A altura é 80% da escada"],
              ["Viga de telhado", "2.5 m", "6.5 m", "2.5/6.5", "0.3846", "A elevação é 38.46% da viga"],
              ["Rampa", "0.75 m", "9.5 m", "0.75/9.5", "0.07895", "Inclinação suave, 7.89% de elevação"],
              ["Levantamento", "30 m", "50 m", "30/50", "0.6", "A elevação é 60% da linha reta"],
              ["Cabo de ancoragem", "5 m", "13 m", "5/13", "0.3846", "A altura é 38.46% do cabo"],
              ["Longarina", "3 m", "5 m", "3/5", "0.6", "A elevação é 60% da longarina"],
              ["Lança de guindaste", "8 m", "10 m", "8/10", "0.8", "O alcance vertical é 80% da lança"],
              ["Segmento de voo", "1.5 km", "5 km", "1.5/5", "0.3", "O ganho é 30% do trajeto"],
              ["Tirante diagonal", "1.6 m", "2 m", "1.6/2", "0.8", "A vertical é 80% do tirante"],
              ["Rota de caminhada", "25 m", "100 m", "25/100", "0.25", "O ganho é 25% da trilha"],
              ["Suporte de toldo", "1.2 m", "3 m", "1.2/3", "0.4", "A vertical é 40% do suporte"],
              ["Linha de visão", "12 m", "20 m", "12/20", "0.6", "A diferença de altura é 60% da linha de visão"]
            ]
          }
        ],
        "imgAlt": "Quatro painéis: escada 0.8, rampa 0.07895, levantamento 0.6, lança de guindaste 0.8, cada um com triângulo rotulado",
        "figcaption": "Quatro cálculos práticos: escada, rampa, levantamento e lança de guindaste, cada um com seu triângulo, fórmula e razão."
      },
      "sec-angle": {
        "h2": "Entendendo a Relação Entre Seno e Tamanho do Ângulo",
        "blocks": [
          {
            "kind": "p",
            "text": "O seno aumenta conforme o ângulo de referência aumenta. A geometria explica o porquê: quando o ângulo [[A]] é pequeno, o cateto oposto é curto em relação à hipotenusa, então a razão fica perto de 0. Conforme o ângulo se alarga, o cateto oposto se torna uma parcela maior da hipotenusa, e a razão sobe em direção a 1. Aos [[30^\\circ]] o seno é exatamente 0.5; aos [[45^\\circ]] é cerca de 0.7071; aos [[60^\\circ]] cerca de 0.8660; e conforme o ângulo se aproxima de [[90^\\circ]], o seno se aproxima de 1."
          }
        ],
        "tables": [
          {
            "headers": ["Ângulo [[A]]", "Razão seno", "Interpretação"],
            "rows": [
              ["[[30^\\circ]]", "0.5", "O cateto oposto é metade da hipotenusa"],
              ["[[45^\\circ]]", "Aproximadamente 0.7071", "O cateto oposto é cerca de 70.71% da hipotenusa"],
              ["[[60^\\circ]]", "Aproximadamente 0.8660", "O cateto oposto é cerca de 86.60% da hipotenusa"],
              ["[[80^\\circ]]", "Aproximadamente 0.9848", "O cateto oposto é cerca de 98.48% da hipotenusa"]
            ]
          }
        ],
        "closingParagraphs": [
          "O padrão é simples e monotônico: todo aumento no ângulo eleva o seno, e a razão permanece entre 0 e 1 para cada ângulo agudo. O seno descreve a forma do triângulo, não seu tamanho absoluto: dois triângulos com o mesmo ângulo agudo têm a mesma razão seno mesmo quando seus comprimentos diferem. Uma entrada de [[90^\\circ]] é um valor de referência limite, não um ângulo agudo de um triângulo retângulo não degenerado."
        ],
        "imgAlt": "Três triângulos a 30, 45 e 60 graus com valores de seno 0.5, 0.7071 e 0.8660; o seno cresce conforme o ângulo aumenta",
        "figcaption": "Conforme o ângulo A cresce, o cateto oposto se torna uma parcela maior da hipotenusa, então sin(A) aumenta."
      },
      "sec-hypotenuse": {
        "h2": "Como Encontrar o Cateto Oposto Usando o Seno",
        "blocks": [
          {
            "kind": "p",
            "text": "A fórmula do seno pode ser rearranjada para encontrar o cateto oposto quando a hipotenusa e o ângulo são conhecidos. Comece com [[\\sin(A)=a/c]] e multiplique ambos os lados por [[c]]:"
          },
          {
            "kind": "p",
            "text": "[[[\\boxed{a=c\\sin(A)}]]]"
          },
          {
            "kind": "p",
            "text": "O cateto oposto é igual à hipotenusa multiplicada pelo seno do ângulo. Dada uma hipotenusa de [[c=10\\,\\text{m}]] e um ângulo de [[A=30^\\circ]], e sabendo que [[\\sin(30^\\circ)=0.5]]:"
          },
          {
            "kind": "p",
            "text": "[[a=10\\times0.5]]"
          },
          {
            "kind": "p",
            "text": "[[\\boxed{a=5\\,\\text{m}}]]"
          },
          {
            "kind": "p",
            "text": "O cateto oposto é metade da hipotenusa para um ângulo de [[30^\\circ]], o que corresponde à geometria 30-60-90: o lado oposto a 30 graus é exatamente metade da hipotenusa."
          },
          {
            "kind": "p",
            "text": "A hipotenusa pode ser encontrada da mesma forma rearranjando novamente:"
          },
          {
            "kind": "p",
            "text": "[[[\\boxed{c=\\frac{a}{\\sin(A)}}]]]"
          },
          {
            "kind": "p",
            "text": "Com um cateto oposto de [[a=6\\,\\text{m}]] e [[A=30^\\circ]]: [[c=6/0.5]], logo [[\\boxed{c=12\\,\\text{m}}]]. Estes são rearranjos matemáticos da mesma fórmula. A calculadora nesta página retorna a razão seno a partir dos comprimentos; ela não calcula diretamente lados desconhecidos."
          }
        ]
      },
      "sec-recover": {
        "h2": "Como Encontrar um Ângulo a Partir de uma Razão Seno",
        "blocks": [
          {
            "kind": "p",
            "text": "A razão seno e o ângulo são grandezas diferentes: uma é uma comparação adimensional de lados, a outra é medida em graus. Quando a razão seno é conhecida e o ângulo é necessário, o seno inverso pode ser usado:"
          },
          {
            "kind": "p",
            "text": "[[[\\boxed{A=\\sin^{-1}\\left(\\frac{a}{c}\\right)}]]]"
          },
          {
            "kind": "p",
            "text": "O seno inverso também é chamado de arco seno. Dada [[\\sin(A)=0.6]]:"
          },
          {
            "kind": "p",
            "text": "[[A=\\sin^{-1}(0.6)]]"
          },
          {
            "kind": "p",
            "text": "[[\\boxed{A\\approx36.87^\\circ}]]"
          },
          {
            "kind": "p",
            "text": "O ângulo é aproximadamente [[36.87^\\circ]] quando a calculadora está ajustada para graus. Este é um cálculo de ângulo separado, não algo que a calculadora de razão seno executa diretamente. O seno inverso pode ter múltiplas soluções de ângulo na trigonometria mais ampla, mas a restrição de ângulo agudo de um triângulo retângulo seleciona a solução aguda apropriada."
          }
        ]
      },
      "sec-mistakes": {
        "h2": "Erros Comuns ao Calcular o Seno",
        "blocks": [
          {
            "kind": "p",
            "text": "A maioria dos erros de seno vem de uma fração invertida, um lado rotulado errado ou um deslize de unidade. Percorra esta lista antes de confiar num resultado."
          }
        ],
        "steps": [
          "<strong>Usar o cateto adjacente em vez do cateto oposto.</strong> Dividir [[b/c]] calcula o cosseno. Com [[a=3]], [[b=4]] e [[c=5]], o cateto errado dá 0.8; o correto dá 0.6.",
          "<strong>Inverter a fórmula e calcular [[c/a]] em vez de [[a/c]].</strong> Isso retorna a cossecante, não o seno. Com [[a=3]] e [[c=5]], a fração invertida dá 1.6667, sempre acima de 1, um sinal de alerta claro.",
          "<strong>Confundir seno com cosseno.</strong> O seno usa o cateto oposto; o cosseno usa o cateto adjacente. Se o cateto errado estiver no numerador, a resposta é o cosseno, não o seno.",
          "<strong>Confundir seno com cossecante.</strong> A cossecante é o recíproco, hipotenusa sobre o cateto oposto. Os nomes parecidos causam erros reais, mas a ordem da fração é exatamente invertida.",
          "<strong>Digitar um cateto oposto maior que a hipotenusa.</strong> A hipotenusa é sempre o lado mais longo. Se [[a \\ge c]], as entradas estão trocadas ou o triângulo é impossível.",
          "<strong>Digitar comprimentos zero ou negativos.</strong> Um triângulo não pode ter lado zero ou negativo, então essas entradas sinalizam um erro de digitação ou uma medida ausente, não um caso limite válido.",
          "<strong>Misturar unidades de medida.</strong> Um cateto oposto de 3 m com uma hipotenusa de 50 cm dá 6, um número sem sentido. Converta para uma única unidade primeiro: 3 m e 5 m dão o correto 0.6.",
          "<strong>Relatar a razão seno como um ângulo em graus.</strong> Um resultado de 0.6 é uma razão, não [[0.6^\\circ]]. Tratá-lo como graus alimenta absurdos em qualquer cálculo seguinte.",
          "<strong>Assumir que o seno tem unidades físicas.</strong> As unidades se cancelam na divisão, então \"0.6 m\" está errado. Escreva o número simples e mantenha as unidades nas medidas de entrada, onde elas pertencem.",
          "<strong>Confundir o ângulo de referência com o ângulo reto.</strong> O seno sempre usa um ângulo agudo. O ângulo de [[90^\\circ]] nunca é o ângulo de referência [[A]] nestes cálculos.",
          "<strong>Arredondar cedo demais.</strong> Arredondar uma divisão intermediária para duas casas decimais e então continuar o cálculo acumula o erro. Mantenha a precisão total em cada etapa e arredonde apenas a resposta final.",
          "<strong>Assumir que o seno é o mesmo para todo ângulo.</strong> Cada ângulo tem seu próprio valor de seno. Um resultado de 0.6 pertence a um ângulo específico (cerca de 36.87 graus), não a todo triângulo retângulo.",
          "<strong>Assumir que um valor de seno de 0.6 significa que o ângulo é [[0.6^\\circ]].</strong> Uma razão não é uma medida em graus. Converta com o seno inverso se o ângulo em si for necessário.",
          "<strong>Confundir seno recíproco com seno inverso.</strong> [[1/\\sin(A)]] é a cossecante, uma razão; [[\\sin^{-1}]] é o seno inverso, que retorna um ângulo. Os nomes parecidos causam erros reais, então leia a notação com atenção.",
          "<strong>Assumir que a razão seno determina o tamanho absoluto de um triângulo.</strong> O seno descreve a forma, não o tamanho: infinitos triângulos compartilham um seno de 0.6, de um cateto oposto de 3 cm a um de 3 km. A razão fixa as proporções; os comprimentos reais precisam de pelo menos uma medida de lado."
        ],
        "closingParagraphs": [
          "<strong>Errado Versus Correto: Uma Comparação Resolvida</strong>",
          "Dados um cateto oposto de [[a=3]] e uma hipotenusa de [[c=5]]:",
          "<strong>Incorreto:</strong> [[5/3\\approx1.6667]]. Esta é a razão cossecante, não a razão seno. O numerador e o denominador estão invertidos.",
          "<strong>Correto:</strong> [[\\sin(A)=3/5=0.6]].",
          "<strong>Verificação:</strong> [[\\csc(A)=1/0.6\\approx1.6667]]. A verificação recíproca confirma o resultado, e a resposta fica entre 0 e 1, como todo seno válido deve."
        ]
      },
      "sec-verify": {
        "h2": "Como Verificar se o Resultado do Seno é Válido",
        "blocks": [
          {
            "kind": "p",
            "text": "Um triângulo retângulo válido e não degenerado exige lados positivos com a hipotenusa estritamente mais longa, [[0 \\lt a \\lt c]], então o resultado do seno deve ficar entre 0 e 1:"
          },
          {
            "kind": "p",
            "text": "[[[\\boxed{0 \\lt \\frac{a}{c} \\lt 1}]]]"
          },
          {
            "kind": "p",
            "text": "Ambas as medidas devem usar unidades compatíveis. Um resultado menor ou igual a 0 ou maior ou igual a 1 geralmente indica entradas inválidas, lados invertidos ou um modelo de triângulo incorreto."
          },
          {
            "kind": "h3",
            "text": "Método 1: Verifique a Razão"
          },
          {
            "kind": "p",
            "text": "Reverifique [[\\sin(A)=a/c]] diretamente. Com [[a=3]] e [[c=5]]: [[\\sin(A)=3/5=0.6]]. Se um segundo cálculo manual discordar, um lado foi rotulado errado ou uma unidade foi misturada."
          },
          {
            "kind": "h3",
            "text": "Método 2: Verifique o Teorema de Pitágoras"
          },
          {
            "kind": "p",
            "text": "Se o cateto adjacente for necessário, calcule [[b=\\sqrt{c^2-a^2}]]. Para [[a=3]] e [[c=5]]: [[b=\\sqrt{25-9}=4]], e [[3^2+4^2=5^2]]. Isso confirma as dimensões do triângulo retângulo 3-4-5. O cateto adjacente é um valor de verificação aqui, não parte da fórmula principal do seno."
          },
          {
            "kind": "h3",
            "text": "Método 3: Verifique Usando o Seno Inverso"
          },
          {
            "kind": "p",
            "text": "Para uma razão seno de 0.6: [[A=\\sin^{-1}(0.6)\\approx36.87^\\circ]]. Como o seno fica um pouco acima de 0.5, o ângulo deve cair um pouco acima de [[30^\\circ]]; se não cair, os rótulos dos lados provavelmente estão trocados. Pequenas diferenças podem surgir do arredondamento."
          }
        ]
      },
      "sec-vs": {
        "h2": "Seno vs. Cosseno, Tangente e Cossecante",
        "blocks": [
          {
            "kind": "p",
            "text": "Cada razão compara um par diferente de lados, usando o mesmo ângulo de referência e os mesmos rótulos de lado:"
          },
          {
            "kind": "p",
            "text": "Seno e cossecante são o par recíproco: [[\\csc(A)=1/\\sin(A)]]. Se [[\\sin(A)=0.6]], então [[\\csc(A)\\approx1.6667]]. Prefira o seno quando o cateto oposto é conhecido contra a hipotenusa, quando uma componente vertical deve ser comparada com um comprimento inclinado, ou quando SOH é o mnemônico correspondente; prefira o cosseno para adjacente sobre hipotenusa, a tangente quando os dois catetos são conhecidos, e a cossecante quando a hipotenusa é comparada com o cateto oposto."
          },
          {
            "kind": "p",
            "text": "Para as razões vizinhas, veja a <a href=\"/cosine-ratio-calculator/\" class=\"text-primary hover:underline\">Calculadora de Razão Cosseno</a>, a <a href=\"/tangent-ratio-calculator/\" class=\"text-primary hover:underline\">Calculadora de Razão Tangente</a>, a <a href=\"/cosecant-ratio-calculator/\" class=\"text-primary hover:underline\">Calculadora de Razão Cossecante</a>, a <a href=\"/secant-ratio-calculator/\" class=\"text-primary hover:underline\">Calculadora de Razão Secante</a> e a <a href=\"/cotangent-ratio-calculator/\" class=\"text-primary hover:underline\">Calculadora de Razão Cotangente</a>."
          }
        ],
        "tables": [
          {
            "headers": ["Razão", "Fórmula", "O que ela compara"],
            "rows": [
              ["Seno", "sin(A) = a/c", "Cateto oposto para hipotenusa"],
              ["Cosseno", "cos(A) = b/c", "Cateto adjacente para hipotenusa"],
              ["Tangente", "tan(A) = a/b", "Cateto oposto para cateto adjacente"],
              ["Cossecante", "csc(A) = c/a", "Hipotenusa para cateto oposto"],
              ["Secante", "sec(A) = c/b", "Hipotenusa para cateto adjacente"],
              ["Cotangente", "cot(A) = b/a", "Cateto adjacente para cateto oposto"]
            ]
          }
        ]
      },
      "sec-related": {
        "h2": "Explorar Calculadoras Trigonométricas Relacionadas",
        "related": [
          {
            "name": "Calculadora de Razão Cosseno"
          },
          {
            "name": "Calculadora de Razão Tangente"
          },
          {
            "name": "Calculadora de Razão Cossecante"
          },
          {
            "name": "Calculadora de Razão Secante"
          },
          {
            "name": "Calculadora de Razão Cotangente"
          },
          {
            "name": "Calculadora de Ângulo de Triângulo Retângulo"
          }
        ]
      },
      "sec-conclusion": {
        "h2": "Use a Razão Seno com Confiança",
        "blocks": [
          {
            "kind": "p",
            "text": "O seno é a primeira das três razões principais: divida o cateto oposto pela hipotenusa e você terá descrito que porção do lado mais longo fica oposta ao ângulo. A fórmula [[\\sin(A)=a/c]] precisa de apenas duas medidas, a resposta é sempre um número adimensional entre 0 e 1, e ela cresce conforme o ângulo de referência cresce. Quando um lado desconhecido é necessário, [[a=c\\sin(A)]] recupera o cateto oposto; quando o ângulo é necessário, [[A=\\sin^{-1}(a/c)]] o recupera. Escada, viga, rampa ou o 3-4-5 de livro-texto, o método nunca muda: identifique o cateto oposto, identifique a hipotenusa, divida e verifique com o intervalo de 0 a 1."
          }
        ]
      }
    },
    "faqs": [
      {
        "question": "Qual é a fórmula do seno para um triângulo retângulo?",
        "answer": "sin(A) = a / c: divida o cateto oposto a pela hipotenusa c. Com um cateto oposto de 3 cm e uma hipotenusa de 5 cm, o resultado é 3/5 = 0.6. Esse decimal é a resposta completa, uma razão adimensional, não um ângulo."
      },
      {
        "question": "Como calcular o seno a partir de dois comprimentos de lado?",
        "answer": "Identifique o ângulo de referência A, meça o cateto oposto a e a hipotenusa c na mesma unidade, confirme que ambos são positivos e que c é mais longa que a, então divida: sin(A) = a / c. Nesta página, digite o cateto oposto no primeiro campo e a hipotenusa no segundo, depois clique em Calculate sin(A)."
      },
      {
        "question": "Qual é a diferença entre seno e cosseno?",
        "answer": "O seno divide o cateto oposto pela hipotenusa (a/c); o cosseno divide o cateto adjacente pela hipotenusa (b/c). Ambos usam a mesma hipotenusa, mas o numerador difere. Um resultado acima de 1 significa que a fração foi invertida ou um cateto foi rotulado errado."
      },
      {
        "question": "Por que o seno é menor que 1 para um ângulo agudo num triângulo retângulo?",
        "answer": "Num triângulo retângulo válido e não degenerado, a hipotenusa é estritamente mais longa que qualquer cateto, logo 0 < a < c. Dividir um comprimento menor por um maior sempre dá um resultado abaixo de 1: 0 < a/c < 1 para todo ângulo de referência agudo."
      },
      {
        "question": "O seno pode ser igual a 1 para um ângulo agudo num triângulo retângulo válido?",
        "answer": "Não. Um seno de exatamente 1 exigiria que o cateto oposto igualasse a hipotenusa, o que colapsa o triângulo numa linha vertical sem largura. O valor 1 é um valor-limite aproximado conforme o ângulo A se aproxima de 90 graus, nunca um valor que um triângulo legítimo produz."
      },
      {
        "question": "O que significa um valor de seno de 0.6?",
        "answer": "O cateto oposto é 60 por cento da hipotenusa. Num triângulo 3-4-5, o lado oposto ao ângulo A é 3 unidades enquanto a hipotenusa é 5 unidades, logo sin(A) = 3/5 = 0.6. Ele descreve a forma do triângulo e não é um ângulo de 0.6 graus."
      },
      {
        "question": "A razão seno tem unidades de medida?",
        "answer": "Não. Ambas as entradas são comprimentos medidos na mesma unidade, então as unidades se cancelam: 3 m / 5 m = 0.6, exatamente como 300 cm / 500 cm = 0.6. Relate o seno como um número simples, nunca com graus, metros ou pés."
      },
      {
        "question": "Como posso encontrar um ângulo a partir de uma razão seno?",
        "answer": "Aplique o seno inverso à razão: A = sin^-1(a/c). Para sin(A) = 0.6, A = sin^-1(0.6), cerca de 36.87 graus. Ajuste sua calculadora científica para o modo de graus primeiro. A calculadora desta página retorna a razão, não o ângulo."
      },
      {
        "question": "Como posso encontrar o cateto oposto usando o seno?",
        "answer": "Rearranje a fórmula para a = c * sin(A). Se a hipotenusa é 10 m e o ângulo A é 30 graus, sin(30 deg) = 0.5, logo a = 10 * 0.5 = 5 m. Este é um rearranjo manual; a calculadora desta página retorna a razão a partir dos comprimentos, não lados desconhecidos."
      },
      {
        "question": "Qual é a diferença entre seno e cossecante?",
        "answer": "O seno divide o cateto oposto pela hipotenusa (a/c); a cossecante é seu recíproco, hipotenusa dividida pelo cateto oposto (c/a). Se sin(A) = 0.6, então csc(A) = 1/0.6, cerca de 1.6667. As duas são recíprocas, nunca fórmulas intercambiáveis."
      },
      {
        "question": "Posso calcular o seno sem conhecer o cateto adjacente?",
        "answer": "Sim. A fórmula principal do seno usa apenas o cateto oposto e a hipotenusa, então o cateto adjacente nunca entra no cálculo. O cateto adjacente só se torna útil quando o teorema de Pitágoras é usado para verificar o triângulo ou quando cosseno, tangente ou secante entram no trabalho."
      },
      {
        "question": "Como o seno é usado em medidas práticas?",
        "answer": "O seno compara uma componente vertical ou perpendicular com um comprimento inclinado: uma escada contra a altura da parede, uma viga de telhado contra sua elevação vertical, uma rampa contra sua elevação, ou uma linha topográfica contra sua diferença de elevação. A razão indica que fração da distância inclinada é vertical, o que é útil para alturas, folgas e cálculos de componentes."
      }
    ],
    "faqHeading": "Perguntas Frequentes",
    "relatedHeading": "Explorar Calculadoras Trigonométricas Relacionadas"
  },
  "bn": {
    "tocHeading": "এই নির্দেশিকায়",
    "tocItems": {
      "sec-intro": "সাইন অনুপাত ক্যালকুলেটর কী?",
      "sec-triangle": "বিপরীত বাহু ও অতিভুজ বোঝা",
      "sec-whatis": "সাইন অনুপাত বোঝা",
      "sec-formula": "সাইন সূত্র কীভাবে কাজ করে",
      "sec-howto": "সাইন অনুপাত ক্যালকুলেটর কীভাবে ব্যবহার করবেন",
      "sec-examples": "সাইন গণনার ধাপে-ধাপে উদাহরণ",
      "sec-applications": "সাইন অনুপাত ব্যবহারের বাস্তব জীবনের উদাহরণ",
      "sec-angle": "সাইন ও কোণের আকারের মধ্যে সম্পর্ক বোঝা",
      "sec-hypotenuse": "সাইন ব্যবহার করে বিপরীত বাহু কীভাবে বের করবেন",
      "sec-recover": "সাইন অনুপাত থেকে কোণ কীভাবে বের করবেন",
      "sec-mistakes": "সাইন গণনায় সাধারণ ভুল",
      "sec-verify": "আপনার সাইন ফলাফল বৈধ কিনা কীভাবে যাচাই করবেন",
      "sec-vs": "সাইন বনাম কোসাইন, ট্যানজেন্ট ও কোসেক্যান্ট",
      "sec-related": "সম্পর্কিত ত্রিকোণমিতিক ক্যালকুলেটর দেখুন",
      "sec-faq": "প্রায়শই জিজ্ঞাসিত প্রশ্ন"
    },
    "sections": {
      "sec-intro": {
        "h2": "সাইন অনুপাত ক্যালকুলেটর কী?",
        "blocks": [
          {
            "kind": "p",
            "text": "একটি সাইন অনুপাত ক্যালকুলেটর একটি প্রশ্নের উত্তর দেয়: সমকোণ ত্রিভুজের সূক্ষ্ম কোণের জন্য, কোণের বিপরীত বাহুটি সবচেয়ে দীর্ঘ বাহুর সাথে কীভাবে তুলনা করা হয়? বিপরীত বাহু ও অতিভুজ লিখুন, আর টুলটি বিপরীত বাহুকে অতিভুজ দিয়ে ভাগ করে, [[\\sin(A)=a/c]] ফিরিয়ে দেয়। একটি সমকোণ ত্রিভুজের বিপরীত বাহু 3 cm ও অতিভুজ 5 cm, তাই [[\\sin(A)=3/5=0.6]]। সেই 0.6 হলো সাইন অনুপাত: এটি বলে বিপরীত বাহু অতিভুজের 60 শতাংশ। এটি কোনো কোণ নয়, তাই এটিকে কখনো [[0.6^\\circ]] হিসেবে পড়বেন না। সন্নিহিত বাহু এই গণনায় কখনো আসে না; বিপরীত বাহু ও অতিভুজ নিজেরাই যথেষ্ট। সাইন মৌলিক ত্রিকোণমিতিক অনুপাতগুলোর একটি, এবং এর শক্তি হলো এটি দুটি দৈর্ঘ্যকে এমনভাবে তুলনা করে যা শুধু কোণের ওপর নির্ভর করে, ত্রিভুজের আকারের ওপর নয়। যদি ডিগ্রিতে কোণ প্রয়োজন হয়, বিপরীত সাইন অনুপাতটিকে ডিগ্রিতে রূপান্তর করে।"
          }
        ]
      },
      "sec-triangle": {
        "h2": "বিপরীত বাহু ও অতিভুজ বোঝা",
        "blocks": [
          {
            "kind": "h3",
            "text": "সমকোণ ত্রিভুজ কী?"
          },
          {
            "kind": "p",
            "text": "সমকোণ ত্রিভুজের একটি কোণ ঠিক [[90^\\circ]], দুটি লম্ব রেখার মধ্যবর্তী কোণ, যেমন সমতল মেঝের সাথে মিলিত একটি দেয়াল। অতিভুজ সেই সমকোণের বিপরীতে থাকে এবং সর্বদা দীর্ঘতম বাহু, কারণ এটি কোণের এক প্রান্ত থেকে অন্য প্রান্ত পর্যন্ত পূর্ণ কর্ণ বিস্তৃত হতে বাধ্য। বাকি দুটি কোণ বাকি 90 ডিগ্রি ভাগ করে নেয়, তাই উভয়ই সূক্ষ্ম। দুটি পাদ সমকোণে মিলিত হয়, পরস্পরের লম্ব, এবং অতিভুজের সাথে তাদের সম্পর্কই সমকোণ ত্রিভুজ ত্রিকোণমিতিকে সম্ভব করে।"
          },
          {
            "kind": "h3",
            "text": "বিপরীত বাহু কী?"
          },
          {
            "kind": "p",
            "text": "বিপরীত বাহু [[a]] হলো রেফারেন্স কোণ [[A]]-এর ঠিক বিপরীতে থাকা বাহু, একমাত্র বাহু যা কখনো এর শীর্ষবিন্দু স্পর্শ করে না। বাস্তব সমস্যায় এটি প্রায়ই উল্লম্ব উচ্চতা, উচ্চতার পার্থক্য বা লম্ব উপাদানের ভূমিকা পালন করে: মই যে দেয়ালের উচ্চতা পর্যন্ত পৌঁছায়, র‍্যাম্পের উল্লম্ব উচ্চতা, অথবা জরিপে উচ্চতার পার্থক্য। কোন বাহু বিপরীত হিসেবে গণ্য হবে তা নির্ভর করে নির্বাচিত রেফারেন্স কোণের ওপর, তাই কোণ [[A]] থেকে কোণ [[C]]-এ গেলে বিপরীত ও সন্নিহিত লেবেল অদলবদল হয়ে যায়। এটি সাইন সূত্রের লবে থাকে কারণ সাইন মাপে অতিভুজের সাপেক্ষে কোণের ওপারের সেই বাহু কত বড়।"
          },
          {
            "kind": "h3",
            "text": "অতিভুজ কী?"
          },
          {
            "kind": "p",
            "text": "অতিভুজ [[c]] হলো সমকোণের বিপরীতে থাকা বাহু: যেকোনো চিত্রে এটি [[90^\\circ]] কোণটিকে চিহ্নিত করা ছোট বর্গের সামনে থাকে, এবং এটি উভয় পাদের চেয়ে কঠোরভাবে দীর্ঘ। বাস্তব সমস্যায় এটি প্রায়ই ঢালু দৈর্ঘ্যের ভূমিকা পালন করে: মই, র‍্যাম্পের পৃষ্ঠ, কড়ি, তার, কর্ণ ব্রেস, অথবা সরলরেখা পথ। এটি সাইন সূত্রের হরে থাকে, যার কারণে প্রতিটি সাইন মান 0 ও 1-এর মধ্যে আসে: লব সর্বদা প্রকৃত পাদ, হরের চেয়ে ছোট।"
          },
          {
            "kind": "h3",
            "text": "সন্নিহিত বাহু কী?"
          },
          {
            "kind": "p",
            "text": "সন্নিহিত বাহু [[b]] হলো সেই পাদ যা রেফারেন্স কোণ [[A]]-কে স্পর্শ করে কিন্তু অতিভুজ নয়। প্রাথমিক সাইন গণনায় এর কোনো ভূমিকা নেই, তাই ক্যালকুলেটরটি এটি কখনো চায় না। কোসাইন, ট্যানজেন্ট বা অজানা বাহু গণনায় এটি উপযোগী হয়, এবং যখন পিথাগোরাসের উপপাদ্য ব্যবহার করে যাচাই করা হয় যে দুটি জানা দৈর্ঘ্য একটি প্রকৃত সমকোণ ত্রিভুজ গঠন করে।"
          }
        ],
        "imgAlt": "নিচে-বাঁয়ে A কোণসহ সমকোণ ত্রিভুজ, সোনালি বিপরীত বাহু a, নীল অতিভুজ c, sin(A)=a/c",
        "figcaption": "কোণ A নিচে-বাঁয়ে বসে; সাইন ব্যবহার করে সোনালি বিপরীত বাহু a ও নীল অতিভুজ c, সন্নিহিত বাহু b নয়।"
      },
      "sec-whatis": {
        "h2": "সাইন অনুপাত বোঝা",
        "blocks": [
          {
            "kind": "p",
            "text": "একটি সূক্ষ্ম কোণের সাইন সেই কোণের ঠিক বিপরীতে থাকা বাহুর সাথে ত্রিভুজের দীর্ঘতম বাহুর তুলনা করে:"
          },
          {
            "kind": "p",
            "text": "[[[\\boxed{\\sin(A)=\\frac{a}{c}}]]]"
          },
          {
            "kind": "p",
            "text": "[[\\sin(A)]] পড়ুন \"কোণ A-এর সাইন\" হিসেবে। লব [[a]] হলো বিপরীত বাহু; হর [[c]] হলো অতিভুজ। ভগ্নাংশটি একটি একক, সুস্পষ্ট প্রশ্নের উত্তর দেয়: অতিভুজের কত অংশ বিপরীত বাহু তৈরি করে? যেহেতু দুটি ইনপুটই একই এককে মাপা দৈর্ঘ্য, ফলাফল একটি সরল সংখ্যা, এবং সেই সংখ্যা শুধু কোণের ওপর নির্ভর করে, ত্রিভুজের আকারের ওপর কখনো নয়।"
          },
          {
            "kind": "h3",
            "text": "SOH-CAH-TOA বোঝা"
          },
          {
            "kind": "p",
            "text": "শিক্ষার্থীরা তিনটি প্রধান অনুপাত SOH-CAH-TOA স্মরণ-সূত্র দিয়ে মনে রাখে:"
          },
          {
            "kind": "p",
            "text": "<strong>SOH:</strong> সাইন = বিপরীত / অতিভুজ। <strong>CAH:</strong> কোসাইন = সন্নিহিত / অতিভুজ। <strong>TOA:</strong> ট্যানজেন্ট = বিপরীত / সন্নিহিত।"
          },
          {
            "kind": "p",
            "text": "SOH সরাসরি সাইন সূত্র [[\\sin(A)=a/c]]-এর সাথে মিলে। স্মরণ-সূত্রটি কাজ করে কারণ এটি প্রতিটি অনুপাতের নামকে সঠিক ক্রমে দুটি প্রয়োজনীয় বাহুর সাথে জোড়া লাগায়: সাইনের জন্য, বিপরীত বাহু ওপরে যায় ও অতিভুজ নিচে যায়। দুটি বাহু একবার সঠিকভাবে নাম দেওয়া হয়ে গেলে, স্মরণ-সূত্রটি \"কোন বাহু কোথায় যাবে\"-কে স্মৃতির সমস্যা থেকে খোঁজে পরিণত করে।"
          },
          {
            "kind": "h3",
            "text": "সাইন কেন একটি অনুপাত"
          },
          {
            "kind": "p",
            "text": "দুটি দৈর্ঘ্য ভাগ করলে মাত্রাহীন সংখ্যা উৎপন্ন হয় কারণ এককগুলো বাতিল হয়ে যায়:"
          },
          {
            "kind": "p",
            "text": "[[[\\frac{3\\,\\text{m}}{5\\,\\text{m}}=0.6]]]"
          },
          {
            "kind": "p",
            "text": "মিটারগুলো বাতিল হয়ে 0.6 থেকে যায়। 300 cm ও 500 cm ব্যবহার করলেও একই ফলাফল দেয়, যেহেতু দুটি দৈর্ঘ্যই একসাথে স্কেল হয়। একমাত্র শর্ত হলো সামঞ্জস্যপূর্ণ একক: উভয় পরিমাপ একই একক ব্যবহার করতে হবে, অথবা ভাগের আগে একটিকে রূপান্তর করতে হবে। তাই অনুপাতটি কোণের ধর্ম, ত্রিভুজ মাপতে ব্যবহৃত নির্দিষ্ট রুলারের নয়।"
          },
          {
            "kind": "h3",
            "text": "0.6 সাইন মানের অর্থ কী?"
          },
          {
            "kind": "p",
            "text": "[[\\sin(A)=0.6]] মানে বিপরীত বাহু অতিভুজের 60 শতাংশ। 3-4-5 ত্রিভুজটি চিরায়ত রেফারেন্স: [[\\sin(A)=3/5=0.6]]। সংখ্যাটি এক নজরে ত্রিভুজের আকৃতি প্রকাশ করে: 1-এর কাছাকাছি সাইন মানে বিপরীত বাহু প্রায় অতিভুজের সমান ও কোণ খাড়া; 0-এর কাছাকাছি সাইন মানে বিপরীত বাহু অতিভুজের সাপেক্ষে ছোট ও কোণ অগভীর। এর কোনোটিই বোঝায় না যে 0.6 একটি কোণ; এটি একটি অনুপাত, এবং শুধু বিপরীত সাইনই একে ডিগ্রিতে পরিণত করে।"
          },
          {
            "kind": "h3",
            "text": "সাইন কেন 0 ও 1-এর মধ্যে থাকে"
          },
          {
            "kind": "p",
            "text": "অতিভুজ বিপরীত বাহুর চেয়ে দীর্ঘ, তাই [[0 \\lt a \\lt c]], এবং সুতরাং:"
          },
          {
            "kind": "p",
            "text": "[[[\\boxed{0 \\lt \\frac{a}{c} \\lt 1}]]]"
          },
          {
            "kind": "p",
            "text": "একটি বৈধ, অ-অপভ্রষ্ট সমকোণ ত্রিভুজের সূক্ষ্ম কোণের জন্য সাইন অনুপাত ঠিক 0 বা ঠিক 1 হতে পারে না। কোণ [[0^\\circ]]-এর দিকে এগোলে মান 0-এর দিকে যায়, কারণ বিপরীত বাহু প্রায় কিছুই না হয়ে সঙ্কুচিত হয়; কোণ [[90^\\circ]]-এর দিকে এগোলে এটি 1-এর দিকে যায়, কারণ বিপরীত বাহু প্রায় অতিভুজের সমান হয়ে বড় হয়। বাস্তব ত্রিভুজের সূক্ষ্ম কোণ এই দুটি সীমা মানের কোনোটিই অর্জন করে না।"
          },
          {
            "kind": "h3",
            "text": "সাইন বনাম কোসাইন"
          },
          {
            "kind": "p",
            "text": "দুটি অনুপাত একই অতিভুজ ভাগ করে কিন্তু ভিন্ন লব ব্যবহার করে:"
          },
          {
            "kind": "p",
            "text": "[[\\sin(A)=a/c]] এবং [[\\cos(A)=b/c]]।"
          },
          {
            "kind": "p",
            "text": "সাইন ব্যবহার করে বিপরীত বাহু, কোণের ওপারের পাদ; কোসাইন ব্যবহার করে সন্নিহিত বাহু, কোণের পাশের পাদ। 1-এর ওপরের ফলাফল মানে ভগ্নাংশটি উল্টে গেছে অথবা অতিভুজ লবে রাখা হয়েছে। সাইন কোসাইনের বিপরীত নয়: সাইনের বিপরীত হলো কোসেক্যান্ট।"
          }
        ],
        "imgAlt": "তিনটি ধাপ: ত্রিভুজে a=3, b=4, c=5 লেবেল করো, sin(A)=a/c প্রয়োগ করো, 0.6 পাও, অর্থ 60 শতাংশ",
        "figcaption": "বাহুগুলো চিহ্নিত করো, সূত্র প্রয়োগ করো, গণনা করো: বিপরীত বাহু অতিভুজের 60 শতাংশ।"
      },
      "sec-formula": {
        "h2": "সাইন সূত্র কীভাবে কাজ করে",
        "blocks": [
          {
            "kind": "p",
            "text": "সূত্রটি একটি যৌক্তিক ক্রম অনুসরণ করে। শব্দে সংজ্ঞা দিয়ে শুরু করো:"
          },
          {
            "kind": "p",
            "text": "[[[\\sin(A)=\\frac{\\text{Opposite}}{\\text{Hypotenuse}}]]]"
          },
          {
            "kind": "p",
            "text": "তারপর পৃষ্ঠার বিদ্যমান চিহ্নায়ন ব্যবহার করো, বিপরীত বাহুর জন্য [[a]] ও অতিভুজের জন্য [[c]]:"
          },
          {
            "kind": "p",
            "text": "[[[\\boxed{\\sin(A)=\\frac{a}{c}}]]]"
          },
          {
            "kind": "p",
            "text": "বিপরীত বাহু লবে থাকে কারণ সাইন অতিভুজের সাপেক্ষে সেই বাহুর আকার মাপে; অতিভুজ হরে থাকে কারণ এটি রেফারেন্স দৈর্ঘ্য যার সাথে অন্য প্রতিটি বাহুর তুলনা করা হয়। বিন্যাস স্থির: লব জিজ্ঞেস করে \"এই পাদ কত বড়?\", হর উত্তর দেয় \"কিসের তুলনায়?\"।"
          },
          {
            "kind": "h3",
            "text": "সম্পূর্ণ সমাধান করা উদাহরণ: একটি 3-4-5 সমকোণ ত্রিভুজ"
          },
          {
            "kind": "p",
            "text": "দেওয়া [[a=3\\,\\text{cm}]], [[b=4\\,\\text{cm}]] ও [[c=5\\,\\text{cm}]]:"
          },
          {
            "kind": "p",
            "text": "<strong>ধাপ 1:</strong> সূত্রটি লেখো। [[\\sin(A)=a/c]]"
          },
          {
            "kind": "p",
            "text": "<strong>ধাপ 2:</strong> জানা মানগুলো বসাও। [[\\sin(A)=3/5]]"
          },
          {
            "kind": "p",
            "text": "<strong>ধাপ 3:</strong> ভাগ করো। [[\\boxed{\\sin(A)=0.6}]]"
          },
          {
            "kind": "p",
            "text": "<strong>ধাপ 4:</strong> ফলাফলের ব্যাখ্যা করো। বিপরীত বাহু অতিভুজের 60 শতাংশ।"
          },
          {
            "kind": "p",
            "text": "<strong>ধাপ 5:</strong> ত্রিভুজটি যাচাই করো। [[3^2+4^2=5^2]], এবং [[9+16=25]]। পিথাগোরীয় যাচাই নিশ্চিত করে এই বাহুগুলো একটি সমকোণ ত্রিভুজ গঠন করে, তাই সাইন ফলাফলটি বিশ্বস্ত।"
          },
          {
            "kind": "h3",
            "text": "গুরুত্বপূর্ণ ব্যাখ্যা"
          },
          {
            "kind": "p",
            "text": "পাঠক যদি সাইন অনুপাতের বদলে কোণটি চায়, তবে বিপরীত সাইন প্রয়োজন: [[A=\\sin^{-1}(0.6)\\approx36.87^\\circ]]। বিপরীত সাইনকে আর্কসাইনও বলা হয় এবং এটি সাইন অনুপাত গণনা থেকে পৃথক একটি অপারেশন। বিদ্যমান সাইন অনুপাত ক্যালকুলেটরটি দুটি বাহুর দৈর্ঘ্য থেকে অনুপাত গণনা করে; এটি সরাসরি কোণ ফেরত দেয় না।"
          }
        ]
      },
      "sec-howto": {
        "h2": "সাইন অনুপাত ক্যালকুলেটর কীভাবে ব্যবহার করবেন",
        "blocks": [
          {
            "kind": "p",
            "text": "ক্যালকুলেটরটি সূত্রকে ঠিক প্রতিফলিত করে: দুটি ইনপুট, একটি বোতাম, একটি অনুপাত। ক্রমানুসারে ইন্টারফেসে এগিয়ে যাও।"
          }
        ],
        "steps": [
          "<strong>রেফারেন্স কোণ [[A]] চিহ্নিত করো।</strong> প্রতিটি সাইন গণনা একটি সূক্ষ্ম কোণে নোঙর করা; বিপরীত বাহু এর সাপেক্ষে সংজ্ঞায়িত।",
          "<strong>বিপরীত বাহু [[a]] খুঁজে বের করো, কোণ [[A]]-এর ঠিক বিপরীতে।</strong> এটি সেই পাদ যা কখনো কোণের শীর্ষবিন্দু স্পর্শ করে না।",
          "<strong>অতিভুজ [[c]] খুঁজে বের করো, সমকোণের বিপরীতে ও দীর্ঘতম বাহু।</strong> এটি [[90^\\circ]] কোণটিকে চিহ্নিত করা ছোট বর্গের সামনে থাকে।",
          "<strong>উভয় বাহুর দৈর্ঘ্য সংগ্রহ করো বা মাপো।</strong> ফিতা, পরিকল্পনার মাত্রা, বা সমস্যার বিবরণের মান ব্যবহার করো।",
          "<strong>প্রথম ইনপুট ক্ষেত্রে বিপরীত বাহুর দৈর্ঘ্য লেখো।</strong> এটি লব [[a]] হয়ে যায়।",
          "<strong>দ্বিতীয় ইনপুট ক্ষেত্রে অতিভুজের দৈর্ঘ্য লেখো।</strong> এটি হর [[c]] হয়ে যায়।",
          "<strong>উপলব্ধ একক নির্বাচক ব্যবহার করে সামঞ্জস্যপূর্ণ পরিমাপ একক বেছে নাও।</strong> মিটারের সাথে মিটার, সেন্টিমিটারের সাথে সেন্টিমিটার; মিশ্র একক অর্থহীন অনুপাত দেয়।",
          "<strong>নিশ্চিত করো উভয় পরিমাপ ধনাত্মক।</strong> শূন্য বা ঋণাত্মক দৈর্ঘ্য ত্রিভুজ গঠন করতে পারে না।",
          "<strong>যাচাই করো অতিভুজ বিপরীত বাহুর চেয়ে দীর্ঘ।</strong> [[a \\ge c]] হলে, ইনপুটগুলো অদলবদল হয়েছে অথবা ত্রিভুজটি অসম্ভব।",
          "<strong>Calculate sin(A)-এ ক্লিক করো।</strong> টুলটি বিপরীত বাহুকে অতিভুজ দিয়ে ভাগ করে।",
          "<strong>ফলে পাওয়া সাইন অনুপাতটি পড়ো।</strong> এটি একটি সরল দশমিক, কোণও নয়, দৈর্ঘ্যও নয়।",
          "<strong>নিশ্চিত করো ফলাফল 0-এর চেয়ে বড় ও 1-এর চেয়ে ছোট।</strong> সূক্ষ্ম রেফারেন্স কোণসহ বৈধ, অ-অপভ্রষ্ট সমকোণ ত্রিভুজের জন্য এটাই একমাত্র বৈধ পরিসর।",
          "<strong>ইনপুট মুছে আরেকটি গণনা শুরু করতে চাইলে Reset ব্যবহার করো।</strong>"
        ],
        "closingParagraphs": [
          "ক্যালকুলেটরের সন্নিহিত বাহু বা কোণ ইনপুটের প্রয়োজন নেই। এটি ভাগ করে আর কিছুই নয়: সংরক্ষিত ইতিহাস নেই, গ্রাফ নেই, লুকানো মোড নেই।"
        ]
      },
      "sec-examples": {
        "h2": "সাইন গণনার ধাপে-ধাপে উদাহরণ",
        "blocks": [
          {
            "kind": "h3",
            "text": "উদাহরণ 1: একটি 3-4-5 সমকোণ ত্রিভুজ"
          },
          {
            "kind": "p",
            "text": "দেওয়া [[a=3\\,\\text{cm}]], [[b=4\\,\\text{cm}]] ও [[c=5\\,\\text{cm}]]:"
          },
          {
            "kind": "p",
            "text": "[[\\sin(A)=\\frac{3}{5}]]"
          },
          {
            "kind": "p",
            "text": "[[\\boxed{\\sin(A)=0.6}]]"
          },
          {
            "kind": "p",
            "text": "বিপরীত বাহু অতিভুজের 60 শতাংশ।"
          },
          {
            "kind": "h3",
            "text": "উদাহরণ 2: একটি 5-12-13 সমকোণ ত্রিভুজ"
          },
          {
            "kind": "p",
            "text": "দেওয়া [[a=5\\,\\text{m}]], [[b=12\\,\\text{m}]] ও [[c=13\\,\\text{m}]]:"
          },
          {
            "kind": "p",
            "text": "[[\\sin(A)=\\frac{5}{13}]]"
          },
          {
            "kind": "p",
            "text": "[[\\boxed{\\sin(A)\\approx0.3846}]]"
          },
          {
            "kind": "p",
            "text": "বিপরীত বাহু অতিভুজের প্রায় 38.46 শতাংশ।"
          },
          {
            "kind": "h3",
            "text": "উদাহরণ 3: একটি 30-60-90 ত্রিভুজ"
          },
          {
            "kind": "p",
            "text": "[[A=30^\\circ]] রেফারেন্স কোণের জন্য, বিপরীত বাহু অতিভুজের অর্ধেক। ব্যবহার করো [[a=1\\,\\text{cm}]], [[b=\\sqrt{3}\\,\\text{cm}]] ও [[c=2\\,\\text{cm}]]:"
          },
          {
            "kind": "p",
            "text": "[[\\sin(30^\\circ)=\\frac{1}{2}]]"
          },
          {
            "kind": "p",
            "text": "[[\\boxed{\\sin(30^\\circ)=0.5}]]"
          },
          {
            "kind": "p",
            "text": "এটি একটি দরকারি বিশেষ-কোণ ফলাফল: 30 ডিগ্রিতে বিপরীত বাহু ঠিক অতিভুজের অর্ধেক, এ কারণেই এই ত্রিভুজটি পাঠ্যবইয়ের এত সমস্যায় আসে।"
          },
          {
            "kind": "h3",
            "text": "উদাহরণ 4: একটি 45-45-90 ত্রিভুজ"
          },
          {
            "kind": "p",
            "text": "দেওয়া [[a=1\\,\\text{cm}]], [[b=1\\,\\text{cm}]] ও [[c=\\sqrt{2}\\,\\text{cm}]]:"
          },
          {
            "kind": "p",
            "text": "[[\\sin(45^\\circ)=\\frac{1}{\\sqrt{2}}]]"
          },
          {
            "kind": "p",
            "text": "[[\\boxed{\\sin(45^\\circ)\\approx0.7071}]]"
          },
          {
            "kind": "p",
            "text": "সমান পাদ দুটি সূক্ষ্ম কোণের জন্য সমান সাইন ও কোসাইন মান উৎপন্ন করে: 45 ডিগ্রিতে প্রতিটি সূক্ষ্ম কোণ 1-এর পাদের ও [[\\sqrt{2}]] অতিভুজের মুখোমুখি, তাই সাইন ও কোসাইন মিলে যায়।"
          }
        ]
      },
      "sec-applications": {
        "h2": "সাইন অনুপাত ব্যবহারের বাস্তব জীবনের উদাহরণ",
        "blocks": [
          {
            "kind": "p",
            "text": "প্রতিটি উদাহরণ পরিস্থিতি বর্ণনা করে, বিপরীত বাহু ও অতিভুজ চিহ্নিত করে, সূত্রে বসায়, এবং ফলাফল সরল ভাষায় ব্যাখ্যা করে।"
          },
          {
            "kind": "h3",
            "text": "উদাহরণ 5: মইয়ের সাইন অনুপাত গণনা"
          },
          {
            "kind": "p",
            "text": "একটি মই 5 m লম্বা এবং একটি উল্লম্ব দেয়াল বেয়ে 4 m ওঠে। রেফারেন্স কোণ [[A]] মই ও অনুভূমিক মাটির মধ্যে। মইটি অতিভুজ, [[c=5\\,\\text{m}]], এবং উল্লম্ব উচ্চতা বিপরীত বাহু, [[a=4\\,\\text{m}]]:"
          },
          {
            "kind": "p",
            "text": "[[\\sin(A)=\\frac{4}{5}]]"
          },
          {
            "kind": "p",
            "text": "[[\\boxed{\\sin(A)=0.8}]]"
          },
          {
            "kind": "p",
            "text": "উল্লম্ব উচ্চতা মইয়ের দৈর্ঘ্যের 80 শতাংশ। অনুপাতটি মইয়ের জ্যামিতি বর্ণনা করে এবং মইটি নিরাপদে স্থাপিত কিনা তা প্রতিষ্ঠা করে না।"
          },
          {
            "kind": "h3",
            "text": "উদাহরণ 6: ছাদের কড়ির সাইন অনুপাত গণনা"
          },
          {
            "kind": "p",
            "text": "একটি ছাদের কড়ির ঢালু দৈর্ঘ্য 6.5 m ও উল্লম্ব উচ্চতা 2.5 m। কড়িটি অতিভুজ, [[c=6.5\\,\\text{m}]], এবং উল্লম্ব উচ্চতা বিপরীত বাহু, [[a=2.5\\,\\text{m}]]:"
          },
          {
            "kind": "p",
            "text": "[[\\sin(A)=\\frac{2.5}{6.5}]]"
          },
          {
            "kind": "p",
            "text": "[[\\boxed{\\sin(A)\\approx0.3846}]]"
          },
          {
            "kind": "p",
            "text": "উল্লম্ব উচ্চতা কড়ির দৈর্ঘ্যের প্রায় 38.46 শতাংশ। অনুপাতটি কাঠামোগত উপযুক্ততা বা ছাদের নকশার মান প্রতিষ্ঠা করে না।"
          },
          {
            "kind": "h3",
            "text": "উদাহরণ 7: র‍্যাম্পের সাইন অনুপাত মূল্যায়ন"
          },
          {
            "kind": "p",
            "text": "একটি সরলীকৃত র‍্যাম্পের ঢালু দৈর্ঘ্য 9.5 m ও উল্লম্ব উচ্চতা 0.75 m। ঢালটি অতিভুজ, [[c=9.5\\,\\text{m}]], এবং উল্লম্ব উচ্চতা বিপরীত বাহু, [[a=0.75\\,\\text{m}]]:"
          },
          {
            "kind": "p",
            "text": "[[\\sin(A)=\\frac{0.75}{9.5}]]"
          },
          {
            "kind": "p",
            "text": "[[\\boxed{\\sin(A)\\approx0.07895}]]"
          },
          {
            "kind": "p",
            "text": "উল্লম্ব উচ্চতা ঢালু দৈর্ঘ্যের প্রায় 7.89 শতাংশ, একটি মৃদু ঢাল। এই অনুপাতটি একা প্রবেশগম্যতা বা বিল্ডিং-কোড সম্মতি প্রতিষ্ঠা করে না।"
          },
          {
            "kind": "h3",
            "text": "উদাহরণ 8: একটি জরিপ পরিমাপ"
          },
          {
            "kind": "p",
            "text": "একটি সরলীকৃত জরিপ ত্রিভুজের সরলরেখা দূরত্ব 50 m ও উল্লম্ব উচ্চতার পার্থক্য 30 m। সরলরেখাটি অতিভুজ, [[c=50\\,\\text{m}]], এবং উল্লম্ব পার্থক্য বিপরীত বাহু, [[a=30\\,\\text{m}]]:"
          },
          {
            "kind": "p",
            "text": "[[\\sin(A)=\\frac{30}{50}]]"
          },
          {
            "kind": "p",
            "text": "[[\\boxed{\\sin(A)=0.6}]]"
          },
          {
            "kind": "p",
            "text": "উল্লম্ব পার্থক্য সরলরেখা দূরত্বের 60 শতাংশ। বাস্তব জরিপে অতিরিক্ত সংশোধন, যন্ত্র-উচ্চতা সমন্বয় ও আরো বিস্তারিত পরিমাপ প্রয়োজন হতে পারে।"
          },
          {
            "kind": "h3",
            "text": "উদাহরণ 9: একটি খুঁটিকে ধরে রাখা গাই তার"
          },
          {
            "kind": "p",
            "text": "একটি গাই তার 13 m লম্বা, এবং এর সংযোগ বিন্দু মাটির নোঙরের স্তর থেকে 5 m ওপরে। তারটি অতিভুজ, [[c=13\\,\\text{m}]], এবং উল্লম্ব বিচ্ছিন্নতা বিপরীত বাহু, [[a=5\\,\\text{m}]]:"
          },
          {
            "kind": "p",
            "text": "[[\\sin(A)=\\frac{5}{13}]]"
          },
          {
            "kind": "p",
            "text": "[[\\boxed{\\sin(A)\\approx0.3846}]]"
          },
          {
            "kind": "p",
            "text": "উল্লম্ব বিচ্ছিন্নতা তারের দৈর্ঘ্যের প্রায় 38.46 শতাংশ। অনুপাতটি তারের টান, নোঙরের শক্তি বা কাঠামোগত নিরাপত্তা প্রতিষ্ঠা করে না।"
          },
          {
            "kind": "h3",
            "text": "উদাহরণ 10: সিঁড়ির স্ট্রিংগারের সাইন অনুপাত গণনা"
          },
          {
            "kind": "p",
            "text": "একটি সরলীকৃত সিঁড়ির স্ট্রিংগার 5 m লম্বা এবং 3 m উল্লম্ব উচ্চতা জুড়ে। স্ট্রিংগারটি অতিভুজ, [[c=5\\,\\text{m}]], এবং উল্লম্ব উচ্চতা বিপরীত বাহু, [[a=3\\,\\text{m}]]:"
          },
          {
            "kind": "p",
            "text": "[[\\sin(A)=\\frac{3}{5}]]"
          },
          {
            "kind": "p",
            "text": "[[\\boxed{\\sin(A)=0.6}]]"
          },
          {
            "kind": "p",
            "text": "উল্লম্ব উচ্চতা কর্ণ স্ট্রিংগারের দৈর্ঘ্যের 60 শতাংশ। গণনাটি সিঁড়ির মাত্রা বা বিল্ডিং-কোড সম্মতি যাচাই করে না।"
          },
          {
            "kind": "h3",
            "text": "উদাহরণ 11: ক্রেন বুমের উল্লম্ব উপাদান বোঝা"
          },
          {
            "kind": "p",
            "text": "একটি সরলীকৃত ক্রেন বুমের দৈর্ঘ্য 10 m ও উল্লম্ব উপাদান 8 m। বুমটি অতিভুজ, [[c=10\\,\\text{m}]], এবং উল্লম্ব উপাদান বিপরীত বাহু, [[a=8\\,\\text{m}]]:"
          },
          {
            "kind": "p",
            "text": "[[\\sin(A)=\\frac{8}{10}]]"
          },
          {
            "kind": "p",
            "text": "[[\\boxed{\\sin(A)=0.8}]]"
          },
          {
            "kind": "p",
            "text": "উল্লম্ব উপাদান বুমের দৈর্ঘ্যের 80 শতাংশ। অনুপাতটি ক্রেনের ক্ষমতা বা কার্যকরী নিরাপত্তা প্রতিষ্ঠা করে না।"
          },
          {
            "kind": "h3",
            "text": "উদাহরণ 12: একটি সরল বিমান ফ্লাইট অংশ"
          },
          {
            "kind": "p",
            "text": "একটি সরলীকৃত ফ্লাইট অংশের জন্য, একটি বিমান সরল পথে 5 km ভ্রমণ করে উচ্চতায় 1.5 km বাড়ে। পথটি অতিভুজ, [[c=5\\,\\text{km}]], এবং উল্লম্ব বৃদ্ধি বিপরীত বাহু, [[a=1.5\\,\\text{km}]]:"
          },
          {
            "kind": "p",
            "text": "[[\\sin(A)=\\frac{1.5}{5}]]"
          },
          {
            "kind": "p",
            "text": "[[\\boxed{\\sin(A)=0.3}]]"
          },
          {
            "kind": "p",
            "text": "উল্লম্ব বৃদ্ধি সরলরেখা পথের দৈর্ঘ্যের 30 শতাংশ। এটি একটি আদর্শায়িত জ্যামিতিক উদাহরণ, সম্পূর্ণ ফ্লাইট-নেভিগেশন গণনা নয়।"
          },
          {
            "kind": "h3",
            "text": "উদাহরণ 13: একটি কর্ণ যান্ত্রিক ব্রেস"
          },
          {
            "kind": "p",
            "text": "একটি কর্ণ ব্রেসের দৈর্ঘ্য 2 m ও উল্লম্ব উপাদান 1.6 m। ব্রেসটি অতিভুজ, [[c=2\\,\\text{m}]], এবং উল্লম্ব উপাদান বিপরীত বাহু, [[a=1.6\\,\\text{m}]]:"
          },
          {
            "kind": "p",
            "text": "[[\\sin(A)=\\frac{1.6}{2}]]"
          },
          {
            "kind": "p",
            "text": "[[\\boxed{\\sin(A)=0.8}]]"
          },
          {
            "kind": "p",
            "text": "উল্লম্ব উপাদান ব্রেসের দৈর্ঘ্যের 80 শতাংশ। অনুপাতটি ব্রেসের শক্তি বা উপযুক্ততা নির্ধারণ করে না।"
          },
          {
            "kind": "h3",
            "text": "উদাহরণ 14: একটি হাইকিং রুটের সাইন অনুপাত"
          },
          {
            "kind": "p",
            "text": "একটি সরলীকৃত সরল হাইকিং অংশের পথের দৈর্ঘ্য 100 m ও উল্লম্ব উচ্চতা বৃদ্ধি 25 m। পথটি অতিভুজ, [[c=100\\,\\text{m}]], এবং উচ্চতা বৃদ্ধি বিপরীত বাহু, [[a=25\\,\\text{m}]]:"
          },
          {
            "kind": "p",
            "text": "[[\\sin(A)=\\frac{25}{100}]]"
          },
          {
            "kind": "p",
            "text": "[[\\boxed{\\sin(A)=0.25}]]"
          },
          {
            "kind": "p",
            "text": "উচ্চতা বৃদ্ধি সরল পথের দৈর্ঘ্যের 25 শতাংশ। প্রকৃত হাইকিং ট্রেইলে বাঁক ও পরিবর্তনশীল ঢাল থাকতে পারে।"
          },
          {
            "kind": "h3",
            "text": "উদাহরণ 15: একটি ছাউনির সাপোর্ট"
          },
          {
            "kind": "p",
            "text": "একটি ছাউনির সাপোর্টের দৈর্ঘ্য 3 m ও উল্লম্ব উপাদান 1.2 m। সাপোর্টটি অতিভুজ, [[c=3\\,\\text{m}]], এবং উল্লম্ব উপাদান বিপরীত বাহু, [[a=1.2\\,\\text{m}]]:"
          },
          {
            "kind": "p",
            "text": "[[\\sin(A)=\\frac{1.2}{3}]]"
          },
          {
            "kind": "p",
            "text": "[[\\boxed{\\sin(A)=0.4}]]"
          },
          {
            "kind": "p",
            "text": "উল্লম্ব উপাদান সাপোর্টের দৈর্ঘ্যের 40 শতাংশ। গণনাটি কাঠামোগত উপযুক্ততা প্রতিষ্ঠা করে না।"
          },
          {
            "kind": "h3",
            "text": "উদাহরণ 16: গাছের চূড়া পর্যন্ত দৃষ্টির রেখা"
          },
          {
            "kind": "p",
            "text": "গাছের চূড়া পর্যন্ত একটি সরলীকৃত দৃষ্টির রেখা 20 m। পর্যবেক্ষকের চোখের স্তর ও গাছের চূড়ার মধ্যে উল্লম্ব পার্থক্য 12 m। দৃষ্টির রেখাটি অতিভুজ, [[c=20\\,\\text{m}]], এবং উল্লম্ব পার্থক্য বিপরীত বাহু, [[a=12\\,\\text{m}]]:"
          },
          {
            "kind": "p",
            "text": "[[\\sin(A)=\\frac{12}{20}]]"
          },
          {
            "kind": "p",
            "text": "[[\\boxed{\\sin(A)=0.6}]]"
          },
          {
            "kind": "p",
            "text": "উল্লম্ব পার্থক্য দৃষ্টির রেখার দূরত্বের 60 শতাংশ। পর্যবেক্ষকের চোখের উচ্চতা ও অন্যান্য প্রয়োজনীয় তথ্য বিবেচনা না করলে ফলাফলটি মাটির ওপরে গাছের মোট উচ্চতা দেয় না।"
          },
          {
            "kind": "p",
            "text": "সাইন একটি গাণিতিক অনুপাত, এককসহ ভৌত রাশি নয়। এর বাস্তব মূল্য আসে ঢালু দূরত্বের সাথে উল্লম্ব বা লম্ব উপাদান তুলনা করা থেকে, কোণ জানা থাকলে উপাদান গণনা থেকে, এবং জ্যামিতিক সম্পর্ক যাচাই থেকে। শুধু সাইনকে কাঠামোগত নিরাপত্তা, ভারবহন ক্ষমতা, প্রবেশগম্যতা বা প্রকৌশল সম্মতির সনদ হিসেবে ধরবেন না।"
          }
        ],
        "tables": [
          {
            "headers": ["পরিস্থিতি", "বিপরীত [[a]]", "অতিভুজ [[c]]", "সূত্র", "অনুপাত", "অর্থ"],
            "rows": [
              ["মই", "4 m", "5 m", "4/5", "0.8", "উচ্চতা মইয়ের দৈর্ঘ্যের 80%"],
              ["ছাদের কড়ি", "2.5 m", "6.5 m", "2.5/6.5", "0.3846", "উচ্চতা কড়ির দৈর্ঘ্যের 38.46%"],
              ["র‍্যাম্প", "0.75 m", "9.5 m", "0.75/9.5", "0.07895", "মৃদু ঢাল, 7.89% উচ্চতা"],
              ["জরিপ", "30 m", "50 m", "30/50", "0.6", "উচ্চতা রেখা দূরত্বের 60%"],
              ["গাই তার", "5 m", "13 m", "5/13", "0.3846", "উচ্চতা তারের দৈর্ঘ্যের 38.46%"],
              ["সিঁড়ির স্ট্রিংগার", "3 m", "5 m", "3/5", "0.6", "উচ্চতা স্ট্রিংগারের দৈর্ঘ্যের 60%"],
              ["ক্রেন বুম", "8 m", "10 m", "8/10", "0.8", "উল্লম্ব পৌঁছ বুমের 80%"],
              ["ফ্লাইট অংশ", "1.5 km", "5 km", "1.5/5", "0.3", "বৃদ্ধি ফ্লাইট পথের 30%"],
              ["কর্ণ ব্রেস", "1.6 m", "2 m", "1.6/2", "0.8", "উল্লম্ব ব্রেসের দৈর্ঘ্যের 80%"],
              ["হাইকিং রুট", "25 m", "100 m", "25/100", "0.25", "বৃদ্ধি পথের দৈর্ঘ্যের 25%"],
              ["ছাউনির সাপোর্ট", "1.2 m", "3 m", "1.2/3", "0.4", "উল্লম্ব সাপোর্টের 40%"],
              ["দৃষ্টির রেখা", "12 m", "20 m", "12/20", "0.6", "উচ্চতার পার্থক্য দৃষ্টিরেখার 60%"]
            ]
          }
        ],
        "imgAlt": "চারটি প্যানেল: মই অনুপাত 0.8, র‍্যাম্প 0.07895, জরিপ 0.6, ক্রেন বুম 0.8, প্রতিটির সাথে লেবেলযুক্ত সমকোণ ত্রিভুজ",
        "figcaption": "চারটি বাস্তব গণনা: মই, র‍্যাম্প, জরিপ ও ক্রেন বুম, প্রতিটির সাথে ত্রিভুজ, সূত্র ও অনুপাত।"
      },
      "sec-angle": {
        "h2": "সাইন ও কোণের আকারের মধ্যে সম্পর্ক বোঝা",
        "blocks": [
          {
            "kind": "p",
            "text": "রেফারেন্স কোণ বাড়ার সাথে সাইন বাড়ে। জ্যামিতি ব্যাখ্যা করে কেন: যখন কোণ [[A]] ছোট হয়, বিপরীত বাহু অতিভুজের সাপেক্ষে ছোট হয়, তাই অনুপাতটি 0-এর কাছে থাকে। কোণ প্রশস্ত হলে, বিপরীত বাহু অতিভুজের বড় অংশ হয়, এবং অনুপাতটি 1-এর দিকে ওঠে। [[30^\\circ]]-তে সাইন ঠিক 0.5; [[45^\\circ]]-তে প্রায় 0.7071; [[60^\\circ]]-তে প্রায় 0.8660; এবং কোণ [[90^\\circ]]-এর দিকে এগোলে, সাইন 1-এর দিকে যায়।"
          }
        ],
        "tables": [
          {
            "headers": ["কোণ [[A]]", "সাইন অনুপাত", "ব্যাখ্যা"],
            "rows": [
              ["[[30^\\circ]]", "0.5", "বিপরীত বাহু অতিভুজের অর্ধেক"],
              ["[[45^\\circ]]", "প্রায় 0.7071", "বিপরীত বাহু অতিভুজের প্রায় 70.71%"],
              ["[[60^\\circ]]", "প্রায় 0.8660", "বিপরীত বাহু অতিভুজের প্রায় 86.60%"],
              ["[[80^\\circ]]", "প্রায় 0.9848", "বিপরীত বাহু অতিভুজের প্রায় 98.48%"]
            ]
          }
        ],
        "closingParagraphs": [
          "প্যাটার্নটি সরল ও একঘেয়েমিপূর্ণ: কোণের প্রতিটি বৃদ্ধি সাইন বাড়ায়, এবং প্রতিটি সূক্ষ্ম কোণের জন্য অনুপাতটি 0 ও 1-এর মধ্যে থাকে। সাইন ত্রিভুজের আকৃতি বর্ণনা করে, এর পরম আকার নয়: একই সূক্ষ্ম কোণসহ দুটি ত্রিভুজের সাইন অনুপাত একই থাকে এমনকি বাহুর দৈর্ঘ্য ভিন্ন হলেও। [[90^\\circ]]-এর একটি এন্ট্রি একটি সীমা রেফারেন্স মান, অ-অপভ্রষ্ট সমকোণ ত্রিভুজের সূক্ষ্ম কোণ নয়।"
        ],
        "imgAlt": "30, 45, 60 ডিগ্রিতে তিনটি ত্রিভুজ, সাইন মান 0.5, 0.7071, 0.8660; কোণ বাড়লে সাইন বাড়ে",
        "figcaption": "কোণ A বাড়ার সাথে বিপরীত বাহু অতিভুজের বড় অংশ হয়, তাই sin(A) বাড়ে।"
      },
      "sec-hypotenuse": {
        "h2": "সাইন ব্যবহার করে বিপরীত বাহু কীভাবে বের করবেন",
        "blocks": [
          {
            "kind": "p",
            "text": "অতিভুজ ও কোণ জানা থাকলে বিপরীত বাহু বের করতে সাইন সূত্রটি পুনর্বিন্যাস করা যায়। [[\\sin(A)=a/c]] দিয়ে শুরু করে উভয় পক্ষকে [[c]] দিয়ে গুণ করো:"
          },
          {
            "kind": "p",
            "text": "[[[\\boxed{a=c\\sin(A)}]]]"
          },
          {
            "kind": "p",
            "text": "বিপরীত বাহু সমান অতিভুজ গুণ কোণের সাইন। অতিভুজ [[c=10\\,\\text{m}]] ও কোণ [[A=30^\\circ]] দেওয়া, এবং [[\\sin(30^\\circ)=0.5]] জানা:"
          },
          {
            "kind": "p",
            "text": "[[a=10\\times0.5]]"
          },
          {
            "kind": "p",
            "text": "[[\\boxed{a=5\\,\\text{m}}]]"
          },
          {
            "kind": "p",
            "text": "[[30^\\circ]] কোণের জন্য বিপরীত বাহু অতিভুজের অর্ধেক, যা 30-60-90 জ্যামিতির সাথে মেলে: 30 ডিগ্রির বিপরীতে থাকা বাহু ঠিক অতিভুজের অর্ধেক।"
          },
          {
            "kind": "p",
            "text": "আবার পুনর্বিন্যাস করে অতিভুজ একইভাবে বের করা যায়:"
          },
          {
            "kind": "p",
            "text": "[[[\\boxed{c=\\frac{a}{\\sin(A)}}]]]"
          },
          {
            "kind": "p",
            "text": "বিপরীত বাহু [[a=6\\,\\text{m}]] ও [[A=30^\\circ]] সহ: [[c=6/0.5]], তাই [[\\boxed{c=12\\,\\text{m}}]]। এগুলো একই সূত্রের গাণিতিক পুনর্বিন্যাস। এই পৃষ্ঠার ক্যালকুলেটর বাহুর দৈর্ঘ্য থেকে সাইন অনুপাত ফেরত দেয়; এটি সরাসরি অজানা বাহু গণনা করে না।"
          }
        ]
      },
      "sec-recover": {
        "h2": "সাইন অনুপাত থেকে কোণ কীভাবে বের করবেন",
        "blocks": [
          {
            "kind": "p",
            "text": "সাইন অনুপাত ও কোণ ভিন্ন রাশি: একটি বাহুর মাত্রাহীন তুলনা, অন্যটি ডিগ্রিতে মাপা। সাইন অনুপাত জানা থাকলে ও কোণ প্রয়োজন হলে, বিপরীত সাইন ব্যবহার করা যায়:"
          },
          {
            "kind": "p",
            "text": "[[[\\boxed{A=\\sin^{-1}\\left(\\frac{a}{c}\\right)}]]]"
          },
          {
            "kind": "p",
            "text": "বিপরীত সাইনকে আর্কসাইনও বলা হয়। [[\\sin(A)=0.6]] দেওয়া:"
          },
          {
            "kind": "p",
            "text": "[[A=\\sin^{-1}(0.6)]]"
          },
          {
            "kind": "p",
            "text": "[[\\boxed{A\\approx36.87^\\circ}]]"
          },
          {
            "kind": "p",
            "text": "ক্যালকুলেটরটি ডিগ্রিতে সেট থাকলে কোণটি প্রায় [[36.87^\\circ]]। এটি একটি পৃথক কোণ গণনা, সাইন অনুপাত ক্যালকুলেটর সরাসরি করে এমন কিছু নয়। বিস্তৃত ত্রিকোণমিতিতে বিপরীত সাইনের একাধিক কোণ সমাধান থাকতে পারে, কিন্তু সমকোণ ত্রিভুজের সূক্ষ্ম-কোণ সীমাবদ্ধতা উপযুক্ত সূক্ষ্ম সমাধান নির্বাচন করে।"
          }
        ]
      },
      "sec-mistakes": {
        "h2": "সাইন গণনায় সাধারণ ভুল",
        "blocks": [
          {
            "kind": "p",
            "text": "বেশিরভাগ সাইন ভুল আসে উল্টো ভগ্নাংশ, ভুল লেবেলযুক্ত বাহু, বা এককের ভুল থেকে। ফলাফলে বিশ্বাস করার আগে এই তালিকাটি পার করো।"
          }
        ],
        "steps": [
          "<strong>বিপরীত বাহুর বদলে সন্নিহিত বাহু ব্যবহার।</strong> [[b/c]] ভাগ করলে কোসাইন গণনা হয়। [[a=3]], [[b=4]] ও [[c=5]] সহ, ভুল পাদ দেয় 0.8; সঠিকটি দেয় 0.6।",
          "<strong>সূত্র উল্টে [[a/c]]-এর বদলে [[c/a]] গণনা।</strong> এটি কোসেক্যান্ট ফেরত দেয়, সাইন নয়। [[a=3]] ও [[c=5]] সহ, উল্টো ভগ্নাংশ দেয় 1.6667, সর্বদা 1-এর ওপরে, একটি স্পষ্ট সতর্ক সংকেত।",
          "<strong>সাইনকে কোসাইনের সাথে গুলিয়ে ফেলা।</strong> সাইন ব্যবহার করে বিপরীত বাহু; কোসাইন ব্যবহার করে সন্নিহিত বাহু। ভুল পাদ লবে থাকলে উত্তর কোসাইন, সাইন নয়।",
          "<strong>সাইনকে কোসেক্যান্টের সাথে গুলিয়ে ফেলা।</strong> কোসেক্যান্ট হলো বিপরীত, অতিভুজ বটে বিপরীত বাহু। মিল নাম আসল ভুলের কারণ, কিন্তু ভগ্নাংশের ক্রম ঠিক উল্টো।",
          "<strong>অতিভুজের চেয়ে দীর্ঘ বিপরীত বাহু লেখা।</strong> অতিভুজ সর্বদা দীর্ঘতম বাহু। [[a \\ge c]] হলে, ইনপুটগুলো অদলবদল হয়েছে অথবা ত্রিভুজটি অসম্ভব।",
          "<strong>শূন্য বা ঋণাত্মক বাহুর দৈর্ঘ্য লেখা।</strong> ত্রিভুজের শূন্য বা ঋণাত্মক বাহু থাকতে পারে না, তাই এই ইনপুটগুলো ডেটা এন্ট্রি ত্রুটি বা অনুপস্থিত পরিমাপের সংকেত, বৈধ প্রান্তিক কেস নয়।",
          "<strong>পরিমাপ একক মেশানো।</strong> 3 m বিপরীত বাহুর সাথে 50 cm অতিভুজ দিলে 6 আসে, একটি অর্থহীন সংখ্যা। প্রথমে একক এককে রূপান্তর করো: 3 m ও 5 m সঠিক 0.6 দেয়।",
          "<strong>সাইন অনুপাতকে ডিগ্রিতে কোণ হিসেবে প্রতিবেদন।</strong> 0.6 ফলাফল একটি অনুপাত, [[0.6^\\circ]] নয়। একে ডিগ্রি হিসেবে ধরলে যেকোনো পরবর্তী গণনায় অর্থহীনতা ঢুকে।",
          "<strong>সাইনের ভৌত একক আছে ধরে নেওয়া।</strong> ভাগে এককগুলো বাতিল হয়, তাই \"0.6 m\" ভুল। সরল সংখ্যাটি লেখো ও এককগুলো ইনপুট পরিমাপে রাখো যেখানে সেগুলো থাকে।",
          "<strong>রেফারেন্স কোণকে সমকোণের সাথে গুলিয়ে ফেলা।</strong> সাইন সর্বদা একটি সূক্ষ্ম কোণ ব্যবহার করে। এই গণনায় [[90^\\circ]] কোণটি কখনো রেফারেন্স কোণ [[A]] নয়।",
          "<strong>অত তাড়াতাড়ি গোল করা।</strong> মধ্যবর্তী ভাগ দুই দশমিকে গোল করে গণনা চালিয়ে গেলে ত্রুটি জমা হয়। প্রতিটি ধাপে পূর্ণ নির্ভুলতা রাখো ও শুধু চূড়ান্ত উত্তর গোল করো।",
          "<strong>প্রতিটি কোণের জন্য সাইন একই ধরে নেওয়া।</strong> প্রতিটি কোণের নিজস্ব সাইন মান আছে। 0.6 ফলাফল একটি নির্দিষ্ট কোণের (প্রায় 36.87 ডিগ্রি), প্রতিটি সমকোণ ত্রিভুজের নয়।",
          "<strong>0.6 সাইন মান মানে কোণ [[0.6^\\circ]] ধরে নেওয়া।</strong> একটি অনুপাত ডিগ্রি পরিমাপ নয়। কোণ নিজেই প্রয়োজন হলে বিপরীত সাইন দিয়ে রূপান্তর করো।",
          "<strong>বিপরীতক সাইনকে বিপরীত সাইনের সাথে গুলিয়ে ফেলা।</strong> [[1/\\sin(A)]] হলো কোসেক্যান্ট, একটি অনুপাত; [[\\sin^{-1}]] হলো বিপরীত সাইন, যা একটি কোণ ফেরত দেয়। মিল নাম আসল ভুলের কারণ, তাই চিহ্নায়ন মনোযোগ দিয়ে পড়ো।",
          "<strong>সাইন অনুপাত ত্রিভুজের পরম আকার নির্ধারণ করে ধরে নেওয়া।</strong> সাইন আকৃতি বর্ণনা করে, আকার নয়: 3 cm বিপরীত বাহু থেকে 3 km-এর বিপরীত বাহু পর্যন্ত অসীম ত্রিভুজ 0.6 সাইন ভাগ করে। অনুপাতটি অনুপাতগুলো স্থির করে; প্রকৃত দৈর্ঘ্যের জন্য কমপক্ষে একটি বাহুর পরিমাপ প্রয়োজন।"
        ],
        "closingParagraphs": [
          "<strong>ভুল বনাম সঠিক: একটি সমাধান করা তুলনা</strong>",
          "বিপরীত বাহু [[a=3]] ও অতিভুজ [[c=5]] দেওয়া:",
          "<strong>ভুল:</strong> [[5/3\\approx1.6667]]। এটি কোসেক্যান্ট অনুপাত, সাইন অনুপাত নয়। লব ও হর উল্টে গেছে।",
          "<strong>সঠিক:</strong> [[\\sin(A)=3/5=0.6]]।",
          "<strong>যাচাই:</strong> [[\\csc(A)=1/0.6\\approx1.6667]]। বিপরীত যাচাই ফলাফল নিশ্চিত করে, এবং উত্তরটি 0 ও 1-এর মধ্যে আছে, যেমন প্রতিটি বৈধ সাইনকে থাকতে হবে।"
        ]
      },
      "sec-verify": {
        "h2": "আপনার সাইন ফলাফল বৈধ কিনা কীভাবে যাচাই করবেন",
        "blocks": [
          {
            "kind": "p",
            "text": "একটি বৈধ, অ-অপভ্রষ্ট সমকোণ ত্রিভুজের ধনাত্মক বাহু প্রয়োজন যেখানে অতিভুজ কঠোরভাবে দীর্ঘতম, [[0 \\lt a \\lt c]], তাই সাইন ফলাফলটি 0 ও 1-এর মধ্যে পড়তে হবে:"
          },
          {
            "kind": "p",
            "text": "[[[\\boxed{0 \\lt \\frac{a}{c} \\lt 1}]]]"
          },
          {
            "kind": "p",
            "text": "উভয় পরিমাপে সামঞ্জস্যপূর্ণ একক ব্যবহার করতে হবে। 0-এর চেয়ে কম বা সমান অথবা 1-এর চেয়ে বড় বা সমান ফলাফল সাধারণত অবৈধ ইনপুট, উল্টো বাহু, বা ভুল ত্রিভুজ মডেল নির্দেশ করে।"
          },
          {
            "kind": "h3",
            "text": "পদ্ধতি 1: অনুপাতটি যাচাই করো"
          },
          {
            "kind": "p",
            "text": "সরাসরি [[\\sin(A)=a/c]] পুনরায় যাচাই করো। [[a=3]] ও [[c=5]] সহ: [[\\sin(A)=3/5=0.6]]। দ্বিতীয় হাতের গণনা না মিললে, একটি বাহু ভুল লেবেল হয়েছে বা একটি একক মিশেছে।"
          },
          {
            "kind": "h3",
            "text": "পদ্ধতি 2: পিথাগোরাসের উপপাদ্য যাচাই করো"
          },
          {
            "kind": "p",
            "text": "সন্নিহিত বাহু প্রয়োজন হলে, [[b=\\sqrt{c^2-a^2}]] গণনা করো। [[a=3]] ও [[c=5]]-এর জন্য: [[b=\\sqrt{25-9}=4]], এবং [[3^2+4^2=5^2]]। এটি 3-4-5 সমকোণ ত্রিভুজের মাত্রা নিশ্চিত করে। সন্নিহিত বাহু এখানে যাচাই মান, প্রাথমিক সাইন সূত্রের অংশ নয়।"
          },
          {
            "kind": "h3",
            "text": "পদ্ধতি 3: বিপরীত সাইন ব্যবহার করে যাচাই করো"
          },
          {
            "kind": "p",
            "text": "0.6 সাইন অনুপাতের জন্য: [[A=\\sin^{-1}(0.6)\\approx36.87^\\circ]]। যেহেতু সাইনটি 0.5-এর কিছুটা ওপরে, কোণটি [[30^\\circ]]-এর কিছুটা ওপরে নামা উচিত; না নামলে, বাহুর লেবেলগুলো সম্ভবত অদলবদল হয়েছে। গোল করার কারণে ছোট পার্থক্য আসতে পারে।"
          }
        ]
      },
      "sec-vs": {
        "h2": "সাইন বনাম কোসাইন, ট্যানজেন্ট ও কোসেক্যান্ট",
        "blocks": [
          {
            "kind": "p",
            "text": "প্রতিটি অনুপাত বাহুর ভিন্ন জোড়া তুলনা করে, একই রেফারেন্স কোণ ও বাহুর লেবেল ব্যবহার করে:"
          },
          {
            "kind": "p",
            "text": "সাইন ও কোসেক্যান্ট বিপরীত জোড়া: [[\\csc(A)=1/\\sin(A)]]। [[\\sin(A)=0.6]] হলে, [[\\csc(A)\\approx1.6667]]। যখন অতিভুজের বিপরীতে বিপরীত বাহু জানা থাকে, যখন উল্লম্ব উপাদান ঢালু দৈর্ঘ্যের সাথে তুলনা করতে হয়, অথবা যখন SOH মিলে যাওয়া স্মরণ-সূত্র, তখন সাইন ব্যবহার করো; সন্নিহিত বটে অতিভুজের জন্য কোসাইন, দুটি পাদ জানা থাকলে ট্যানজেন্ট, এবং অতিভুজকে বিপরীত বাহুর সাথে তুলনা করলে কোসেক্যান্ট ব্যবহার করো।"
          },
          {
            "kind": "p",
            "text": "পার্শ্ববর্তী অনুপাতগুলোর জন্য, <a href=\"/cosine-ratio-calculator/\" class=\"text-primary hover:underline\">কোসাইন অনুপাত ক্যালকুলেটর</a>, <a href=\"/tangent-ratio-calculator/\" class=\"text-primary hover:underline\">ট্যানজেন্ট অনুপাত ক্যালকুলেটর</a>, <a href=\"/cosecant-ratio-calculator/\" class=\"text-primary hover:underline\">কোসেক্যান্ট অনুপাত ক্যালকুলেটর</a>, <a href=\"/secant-ratio-calculator/\" class=\"text-primary hover:underline\">সেক্যান্ট অনুপাত ক্যালকুলেটর</a>, এবং <a href=\"/cotangent-ratio-calculator/\" class=\"text-primary hover:underline\">কোট্যানজেন্ট অনুপাত ক্যালকুলেটর</a> দেখুন।"
          }
        ],
        "tables": [
          {
            "headers": ["অনুপাত", "সূত্র", "এটি কী তুলনা করে"],
            "rows": [
              ["সাইন", "sin(A) = a/c", "বিপরীত বাহু বনাম অতিভুজ"],
              ["কোসাইন", "cos(A) = b/c", "সন্নিহিত বাহু বনাম অতিভুজ"],
              ["ট্যানজেন্ট", "tan(A) = a/b", "বিপরীত বাহু বনাম সন্নিহিত বাহু"],
              ["কোসেক্যান্ট", "csc(A) = c/a", "অতিভুজ বনাম বিপরীত বাহু"],
              ["সেক্যান্ট", "sec(A) = c/b", "অতিভুজ বনাম সন্নিহিত বাহু"],
              ["কোট্যানজেন্ট", "cot(A) = b/a", "সন্নিহিত বাহু বনাম বিপরীত বাহু"]
            ]
          }
        ]
      },
      "sec-related": {
        "h2": "সম্পর্কিত ত্রিকোণমিতিক ক্যালকুলেটর দেখুন",
        "related": [
          {
            "name": "কোসাইন অনুপাত ক্যালকুলেটর"
          },
          {
            "name": "ট্যানজেন্ট অনুপাত ক্যালকুলেটর"
          },
          {
            "name": "কোসেক্যান্ট অনুপাত ক্যালকুলেটর"
          },
          {
            "name": "সেক্যান্ট অনুপাত ক্যালকুলেটর"
          },
          {
            "name": "কোট্যানজেন্ট অনুপাত ক্যালকুলেটর"
          },
          {
            "name": "সমকোণ ত্রিভুজ কোণ ক্যালকুলেটর"
          }
        ]
      },
      "sec-conclusion": {
        "h2": "আত্মবিশ্বাসের সাথে সাইন অনুপাত ব্যবহার করো",
        "blocks": [
          {
            "kind": "p",
            "text": "সাইন তিনটি প্রধান অনুপাতের প্রথম: বিপরীত বাহুকে অতিভুজ দিয়ে ভাগ করো এবং তুমি বর্ণনা করেছো দীর্ঘতম বাহুর কত অংশ কোণের বিপরীতে থাকে। সূত্র [[\\sin(A)=a/c]]-এর মাত্র দুটি পরিমাপ প্রয়োজন, উত্তর সর্বদা 0 ও 1-এর মধ্যে একটি মাত্রাহীন সংখ্যা, এবং এটি রেফারেন্স কোণ বাড়ার সাথে বাড়ে। অজানা বাহু প্রয়োজন হলে, [[a=c\\sin(A)]] বিপরীত বাহু উদ্ধার করে; কোণ প্রয়োজন হলে, [[A=\\sin^{-1}(a/c)]] তা উদ্ধার করে। মই, কড়ি, র‍্যাম্প, বা পাঠ্যবইয়ের 3-4-5, পদ্ধতি কখনো বদলায় না: বিপরীত বাহু চিহ্নিত করো, অতিভুজ চিহ্নিত করো, ভাগ করো, এবং 0-থেকে-1 পরিসর দিয়ে যাচাই করো।"
          }
        ]
      }
    },
    "faqs": [
      {
        "question": "সমকোণ ত্রিভুজের জন্য সাইন সূত্রটি কী?",
        "answer": "sin(A) = a / c: বিপরীত বাহু a-কে অতিভুজ c দিয়ে ভাগ করো। বিপরীত বাহু 3 cm ও অতিভুজ 5 cm হলে, ফলাফল 3/5 = 0.6। সেই দশমিকই সম্পূর্ণ উত্তর, একটি মাত্রাহীন অনুপাত, কোণ নয়।"
      },
      {
        "question": "দুটি বাহুর দৈর্ঘ্য থেকে সাইন কীভাবে গণনা করবেন?",
        "answer": "রেফারেন্স কোণ A চিহ্নিত করো, বিপরীত বাহু a ও অতিভুজ c একই এককে মাপো, উভয়ই ধনাত্মক এবং c, a-এর চেয়ে দীর্ঘ তা নিশ্চিত করো, তারপর ভাগ করো: sin(A) = a / c। এই পৃষ্ঠায়, প্রথম ক্ষেত্রে বিপরীত বাহু ও দ্বিতীয় ক্ষেত্রে অতিভুজ লেখো, তারপর Calculate sin(A)-এ ক্লিক করো।"
      },
      {
        "question": "সাইন ও কোসাইনের মধ্যে পার্থক্য কী?",
        "answer": "সাইন বিপরীত বাহুকে অতিভুজ দিয়ে ভাগ করে (a/c); কোসাইন সন্নিহিত বাহুকে অতিভুজ দিয়ে ভাগ করে (b/c)। উভয়ই একই অতিভুজ ব্যবহার করে, কিন্তু লব ভিন্ন। 1-এর ওপরের ফলাফল মানে ভগ্নাংশ উল্টে গেছে বা একটি পাদ ভুল লেবেল হয়েছে।"
      },
      {
        "question": "সমকোণ ত্রিভুজের সূক্ষ্ম কোণের জন্য সাইন কেন 1-এর কম?",
        "answer": "বৈধ, অ-অপভ্রষ্ট সমকোণ ত্রিভুজে অতিভুজ উভয় পাদের চেয়ে কঠোরভাবে দীর্ঘ, তাই 0 < a < c। ছোট দৈর্ঘ্যকে বড় দৈর্ঘ্য দিয়ে ভাগ করলে সর্বদা 1-এর নিচের ফলাফল আসে: প্রতিটি সূক্ষ্ম রেফারেন্স কোণের জন্য 0 < a/c < 1।"
      },
      {
        "question": "বৈধ সমকোণ ত্রিভুজে সূক্ষ্ম কোণের জন্য সাইন কি 1-এর সমান হতে পারে?",
        "answer": "না। ঠিক 1 সাইনের জন্য বিপরীত বাহুকে অতিভুজের সমান হতে হবে, যা ত্রিভুজটিকে প্রস্থহীন উল্লম্ব রেখায় ভেঙে ফেলে। 1 মানটি একটি সীমা মান যার দিকে কোণ A 90 ডিগ্রির কাছে আসে, প্রকৃত ত্রিভুজ কখনো উৎপন্ন করে এমন মান নয়।"
      },
      {
        "question": "0.6 সাইন মানের অর্থ কী?",
        "answer": "বিপরীত বাহু অতিভুজের 60 শতাংশ। 3-4-5 ত্রিভুজে, কোণ A-এর বিপরীতে থাকা বাহু 3 একক যখন অতিভুজ 5 একক, তাই sin(A) = 3/5 = 0.6। এটি ত্রিভুজের আকৃতি বর্ণনা করে এবং 0.6 ডিগ্রির কোণ নয়।"
      },
      {
        "question": "সাইন অনুপাতের কি পরিমাপ একক আছে?",
        "answer": "না। উভয় ইনপুট একই এককে মাপা দৈর্ঘ্য, তাই এককগুলো বাতিল হয়: 3 m / 5 m = 0.6, ঠিক যেমন 300 cm / 500 cm = 0.6। সাইনকে সরল সংখ্যা হিসেবে প্রতিবেদন করো, কখনো ডিগ্রি, মিটার বা ফুট সহ নয়।"
      },
      {
        "question": "সাইন অনুপাত থেকে কোণ কীভাবে বের করবো?",
        "answer": "অনুপাতটিতে বিপরীত সাইন প্রয়োগ করো: A = sin^-1(a/c)। sin(A) = 0.6-এর জন্য, A = sin^-1(0.6), প্রায় 36.87 ডিগ্রি। আগে তোমার বৈজ্ঞানিক ক্যালকুলেটর ডিগ্রি মোডে সেট করো। এই পৃষ্ঠার ক্যালকুলেটর অনুপাত ফেরত দেয়, কোণ নয়।"
      },
      {
        "question": "সাইন ব্যবহার করে বিপরীত বাহু কীভাবে বের করবো?",
        "answer": "সূত্রটি পুনর্বিন্যাস করো a = c * sin(A) রূপে। অতিভুজ 10 m ও কোণ A 30 ডিগ্রি হলে, sin(30 deg) = 0.5, তাই a = 10 * 0.5 = 5 m। এটি একটি ম্যানুয়াল পুনর্বিন্যাস; এই পৃষ্ঠার ক্যালকুলেটর বাহুর দৈর্ঘ্য থেকে অনুপাত ফেরত দেয়, অজানা বাহু নয়।"
      },
      {
        "question": "সাইন ও কোসেক্যান্টের মধ্যে পার্থক্য কী?",
        "answer": "সাইন বিপরীত বাহুকে অতিভুজ দিয়ে ভাগ করে (a/c); কোসেক্যান্ট এর বিপরীত, অতিভুজ ভাগ বিপরীত বাহু (c/a)। sin(A) = 0.6 হলে, csc(A) = 1/0.6, প্রায় 1.6667। দুটি বিপরীত, কখনো বিনিময়যোগ্য সূত্র নয়।"
      },
      {
        "question": "সন্নিহিত বাহু না জেনে কি সাইন গণনা করা যায়?",
        "answer": "হ্যাঁ। প্রাথমিক সাইন সূত্র শুধু বিপরীত বাহু ও অতিভুজ ব্যবহার করে, তাই সন্নিহিত বাহু কখনো গণনায় আসে না। সন্নিহিত বাহু তখনই উপযোগী হয় যখন পিথাগোরাসের উপপাদ্য ত্রিভুজ যাচাই করতে ব্যবহার করা হয় অথবা যখন কোসাইন, ট্যানজেন্ট বা সেক্যান্ট কাজে আসে।"
      },
      {
        "question": "বাস্তব পরিমাপে সাইন কীভাবে ব্যবহার করা হয়?",
        "answer": "সাইন ঢালু দৈর্ঘ্যের সাথে উল্লম্ব বা লম্ব উপাদান তুলনা করে: দেয়ালের উচ্চতার বিপরীতে মই, উল্লম্ব উচ্চতার বিপরীতে ছাদের কড়ি, উচ্চতার বিপরীতে র‍্যাম্প, অথবা উচ্চতার পার্থক্যের বিপরীতে জরিপ রেখা। অনুপাতটি বলে ঢালু দূরত্বের কত ভগ্নাংশ উল্লম্ব, যা উচ্চতা, ফাঁকা জায়গা ও উপাদান গণনায় উপযোগী।"
      }
    ],
    "faqHeading": "প্রায়শই জিজ্ঞাসিত প্রশ্ন",
    "relatedHeading": "সম্পর্কিত ত্রিকোণমিতিক ক্যালকুলেটর দেখুন"
  },
  "ja": {
    "tocHeading": "このガイドの内容",
    "tocItems": {
      "sec-intro": "サイン比計算機とは？",
      "sec-triangle": "対辺と斜辺を理解する",
      "sec-whatis": "サイン比を理解する",
      "sec-formula": "サインの公式の仕組み",
      "sec-howto": "サイン比計算機の使い方",
      "sec-examples": "サイン計算のステップバイステップ例",
      "sec-applications": "サイン比の実生活の例",
      "sec-angle": "サインと角度の大きさの関係を理解する",
      "sec-hypotenuse": "サインを使って対辺を求める方法",
      "sec-recover": "サイン比から角度を求める方法",
      "sec-mistakes": "サイン計算でありがちな間違い",
      "sec-verify": "サインの結果が有効か確認する方法",
      "sec-vs": "サイン vs コサイン・タンジェント・コセカント",
      "sec-related": "関連する三角関数計算機を見る",
      "sec-faq": "よくある質問"
    },
    "sections": {
      "sec-intro": {
        "h2": "サイン比計算機とは？",
        "blocks": [
          {
            "kind": "p",
            "text": "サイン比計算機が答える問いは一つです。直角三角形の鋭角について、その角に対向する辺は最長辺とどう比較されるか？対辺と斜辺を入力すると、ツールは対辺を斜辺で割り、[[\\sin(A)=a/c]] を返します。直角三角形の対辺が 3 cm、斜辺が 5 cm の場合、[[\\sin(A)=3/5=0.6]] となります。この 0.6 がサイン比です。対辺が斜辺の 60 パーセントであることを示します。これは角度ではないので、[[0.6^\\circ]] と読み取ってはいけません。隣辺はこの計算には一切入りません。対辺と斜辺だけで十分です。サインは基本的な三角比の一つであり、その力は、三角形の大きさではなく角度だけに依存する形で二つの長さを比較できることにあります。必要なのが度数表示の角度である場合は、逆サインで比を度に変換します。"
          }
        ]
      },
      "sec-triangle": {
        "h2": "対辺と斜辺を理解する",
        "blocks": [
          {
            "kind": "h3",
            "text": "直角三角形とは？"
          },
          {
            "kind": "p",
            "text": "直角三角形は、[[90^\\circ]] の角を一つ持ちます。二つの垂直な直線がなす角、たとえば壁が水平な床と交わる角です。斜辺はその直角に対向し、角の対角線全体にまたがる必要があるため、常に最長の辺です。残りの二つの角は残りの 90 度を分け合うため、どちらも鋭角です。二つの直角をはさむ辺は直角で交わり、互いに垂直です。斜辺との関係こそが直角三角形の三角法を可能にしています。"
          },
          {
            "kind": "h3",
            "text": "対辺とは？"
          },
          {
            "kind": "p",
            "text": "対辺 [[a]] は基準角 [[A]] の真向かいの辺で、その頂点に一切触れない唯一の辺です。実用的な問題では、垂直な高さ、高低差、垂直成分の役割を果たすことが多いです。はしごが届く壁の高さ、スロープの垂直な高さ、測量における標高差などです。どの辺が対辺になるかは選んだ基準角によって決まるため、角 [[A]] から角 [[C]] に切り替えると対辺と隣辺のラベルが入れ替わります。サインの公式では分子に現れます。サインは、角を挟むその辺が斜辺に対してどれだけ大きいかを測るからです。"
          },
          {
            "kind": "h3",
            "text": "斜辺とは？"
          },
          {
            "kind": "p",
            "text": "斜辺 [[c]] は直角に対向する辺です。図では [[90^\\circ]] の角を示す小さな正方形の向かいにあり、どちらの直角をはさむ辺よりも厳密に長いです。実用的な問題では、傾斜した長さの役割を果たすことが多いです。はしご、スロープ面、垂木、ケーブル、斜めの筋交い、直線経路などです。サインの公式では分母に現れるため、すべてのサイン値は 0 と 1 の間になります。分子は常に真の直角をはさむ辺であり、分母より短いからです。"
          },
          {
            "kind": "h3",
            "text": "隣辺とは？"
          },
          {
            "kind": "p",
            "text": "隣辺 [[b]] は基準角 [[A]] に触れる直角をはさむ辺で、斜辺ではありません。主なサイン計算では役割がなく、計算機が尋ねることもありません。コサイン、タンジェント、未知の辺を計算するときや、二つの既知の長さが真の直角三角形をなすことをピタゴラスの定理で確認するときに役立ちます。"
          }
        ],
        "imgAlt": "左下に角Aのある直角三角形、金色の対辺a、青色の斜辺c、sin(A)=a/c",
        "figcaption": "角Aは左下に位置します。サインは金色の対辺aと青色の斜辺cを使い、隣辺bは使いません。"
      },
      "sec-whatis": {
        "h2": "サイン比を理解する",
        "blocks": [
          {
            "kind": "p",
            "text": "鋭角のサインは、その角の真向かいの辺を三角形の最長辺と比較します。"
          },
          {
            "kind": "p",
            "text": "[[[\\boxed{\\sin(A)=\\frac{a}{c}}]]]"
          },
          {
            "kind": "p",
            "text": "[[\\sin(A)]] は「角 A のサイン」と読みます。分子 [[a]] は対辺、分母 [[c]] は斜辺です。この分数は、一つの具体的な問いに答えます。斜辺のうち対辺が占める割合はどれだけか？二つの入力はどちらも同じ単位で測った長さなので、結果は単なる数値であり、その数値は角度だけに依存し、三角形の大きさには依存しません。"
          },
          {
            "kind": "h3",
            "text": "SOH-CAH-TOA を理解する"
          },
          {
            "kind": "p",
            "text": "学生は三つの主な比を SOH-CAH-TOA という覚え方で覚えます。"
          },
          {
            "kind": "p",
            "text": "<strong>SOH:</strong> サイン = 対辺 / 斜辺。<strong>CAH:</strong> コサイン = 隣辺 / 斜辺。<strong>TOA:</strong> タンジェント = 対辺 / 隣辺。"
          },
          {
            "kind": "p",
            "text": "SOH はサインの公式 [[\\sin(A)=a/c]] に直接対応します。この覚え方が機能するのは、各比の名前を必要な二辺と正しい順序で結びつけるからです。サインでは対辺が上に、斜辺が下に来ます。二辺の名前を正しく付けられれば、この覚え方により「どちらの辺をどこに置くか」は記憶の問題ではなく検索になります。"
          },
          {
            "kind": "h3",
            "text": "サインが比である理由"
          },
          {
            "kind": "p",
            "text": "二つの長さを割ると単位が打ち消されるため、無次元の数値が得られます。"
          },
          {
            "kind": "p",
            "text": "[[[\\frac{3\\,\\text{m}}{5\\,\\text{m}}=0.6]]]"
          },
          {
            "kind": "p",
            "text": "メートルが打ち消されて 0.6 が残ります。300 cm と 500 cm を使っても、二つの長さが一緒に拡大縮小するため同じ結果になります。唯一の条件は単位の互換性です。両方の測定が同じ単位でなければならず、割る前にどちらかを変換する必要があります。したがって比は角度の性質であり、三角形を測る特定の定規の性質ではありません。"
          },
          {
            "kind": "h3",
            "text": "サイン値 0.6 の意味は？"
          },
          {
            "kind": "p",
            "text": "[[\\sin(A)=0.6]] は、対辺が斜辺の 60 パーセントであることを意味します。3-4-5 三角形は古典的な基準です。[[\\sin(A)=3/5=0.6]]。この数値は三角形の形状を一目で示します。1 に近いサインは対辺が斜辺とほぼ等しく、角度が急であることを意味します。0 に近いサインは対辺が斜辺に対して短く、角度が浅いことを意味します。これらのどれも 0.6 が角度であることを示しません。これは比率であり、逆サインだけが度に変換します。"
          },
          {
            "kind": "h3",
            "text": "サインが 0 と 1 の間にある理由"
          },
          {
            "kind": "p",
            "text": "斜辺は対辺より長いため、[[0 \\lt a \\lt c]] であり、したがって:"
          },
          {
            "kind": "p",
            "text": "[[[\\boxed{0 \\lt \\frac{a}{c} \\lt 1}]]]"
          },
          {
            "kind": "p",
            "text": "有効な退化していない直角三角形の鋭角は、サイン比がちょうど 0 やちょうど 1 になることはありません。角度が [[0^\\circ]] に近づくと対辺がほぼゼロまで縮むため、値は 0 に近づきます。角度が [[90^\\circ]] に近づくと対辺が斜辺とほぼ等しくなるまで伸びるため、値は 1 に近づきます。実際の三角形の鋭角がこの二つの極限値に達することはありません。"
          },
          {
            "kind": "h3",
            "text": "サインとコサインの比較"
          },
          {
            "kind": "p",
            "text": "二つの比は同じ斜辺を共有しますが、分子が異なります。"
          },
          {
            "kind": "p",
            "text": "[[\\sin(A)=a/c]] と [[\\cos(A)=b/c]]。"
          },
          {
            "kind": "p",
            "text": "サインは対辺、角の向かいの直角をはさむ辺を使います。コサインは隣辺、角の隣の直角をはさむ辺を使います。1 を超える結果は、分数が反転したか、斜辺が分子に置かれたことを意味します。サインはコサインの逆数ではありません。サインの逆数はコセカントです。"
          }
        ],
        "imgAlt": "三つの手順: 三角形にa=3、b=4、c=5とラベル付けし、sin(A)=a/cを適用して0.6を得る。意味は60パーセント",
        "figcaption": "辺を特定し、公式を適用して計算します。対辺は斜辺の 60 パーセントです。"
      },
      "sec-formula": {
        "h2": "サインの公式の仕組み",
        "blocks": [
          {
            "kind": "p",
            "text": "公式は論理的な手順に従います。まず言葉での定義から始めます。"
          },
          {
            "kind": "p",
            "text": "[[[\\sin(A)=\\frac{\\text{Opposite}}{\\text{Hypotenuse}}]]]"
          },
          {
            "kind": "p",
            "text": "次にこのページの既存の記法を使い、対辺に [[a]]、斜辺に [[c]] を使います。"
          },
          {
            "kind": "p",
            "text": "[[[\\boxed{\\sin(A)=\\frac{a}{c}}]]]"
          },
          {
            "kind": "p",
            "text": "対辺は、サインが斜辺に対するその辺の大きさを測るため分子に属します。斜辺は、他のすべての辺が比較される基準の長さであるため分母に属します。この配置は固定です。分子は「この直角をはさむ辺はどれだけ大きいか？」と問い、分母は「何と比べてか？」と答えます。"
          },
          {
            "kind": "h3",
            "text": "完全な計算例: 3-4-5 の直角三角形"
          },
          {
            "kind": "p",
            "text": "[[a=3\\,\\text{cm}]]、[[b=4\\,\\text{cm}]]、[[c=5\\,\\text{cm}]] が与えられた場合:"
          },
          {
            "kind": "p",
            "text": "<strong>手順 1:</strong> 公式を書きます。[[\\sin(A)=a/c]]"
          },
          {
            "kind": "p",
            "text": "<strong>手順 2:</strong> 既知の値を代入します。[[\\sin(A)=3/5]]"
          },
          {
            "kind": "p",
            "text": "<strong>手順 3:</strong> 割ります。[[\\boxed{\\sin(A)=0.6}]]"
          },
          {
            "kind": "p",
            "text": "<strong>手順 4:</strong> 結果を解釈します。対辺は斜辺の 60 パーセントです。"
          },
          {
            "kind": "p",
            "text": "<strong>手順 5:</strong> 三角形を検証します。[[3^2+4^2=5^2]]、および [[9+16=25]]。ピタゴラスによる検査で、これらの辺の長さが直角三角形をなすことが確認されるため、サインの結果は信頼できます。"
          },
          {
            "kind": "h3",
            "text": "重要な補足"
          },
          {
            "kind": "p",
            "text": "サイン比ではなく角度そのものが欲しい場合は、逆サインが必要です。[[A=\\sin^{-1}(0.6)\\approx36.87^\\circ]]。逆サインはアークサインとも呼ばれ、サイン比の計算とは別の操作です。既存のサイン比計算機は二つの辺の長さから比を計算します。角度を直接返すものではありません。"
          }
        ]
      },
      "sec-howto": {
        "h2": "サイン比計算機の使い方",
        "blocks": [
          {
            "kind": "p",
            "text": "計算機は公式をそのまま反映しています。二つの入力、一つのボタン、一つの比です。順番にインターフェースを進みます。"
          }
        ],
        "steps": [
          "<strong>基準角 [[A]] を特定します。</strong> すべてのサイン計算は一つの鋭角に固定されます。対辺はそれを基準に定義されます。",
          "<strong>対辺 [[a]] を見つけます。角 [[A]] の真向かいです。</strong> 角の頂点に一切触れない直角をはさむ辺です。",
          "<strong>斜辺 [[c]] を見つけます。直角の向かいで最長の辺です。</strong> [[90^\\circ]] の角を示す小さな正方形の向かいにあります。",
          "<strong>両方の辺の長さを取得または測定します。</strong> テープ、設計寸法、問題文の値を使います。",
          "<strong>最初の入力欄に対辺の長さを入力します。</strong> これが分子 [[a]] になります。",
          "<strong>二番目の入力欄に斜辺の長さを入力します。</strong> これが分母 [[c]] になります。",
          "<strong>利用可能な単位選択で互換性のある測定単位を選びます。</strong> メートルにはメートル、センチメートルにはセンチメートル。混ざった単位では意味のない比になります。",
          "<strong>両方の測定値が正であることを確認します。</strong> ゼロや負の長さでは三角形は作れません。",
          "<strong>斜辺が対辺より長いことを確認します。</strong> [[a \\ge c]] の場合、入力が入れ替わっているか、三角形が不可能です。",
          "<strong>Calculate sin(A) をクリックします。</strong> ツールは対辺を斜辺で割ります。",
          "<strong>得られたサイン比を読みます。</strong> これは単なる小数であり、角度でも長さでもありません。",
          "<strong>結果が 0 より大きく 1 より小さいことを確認します。</strong> 鋭角を基準角とする有効で退化していない直角三角形では、これが唯一の合法範囲です。",
          "<strong>入力をクリアして別の計算を始めたい場合は Reset を使います。</strong>"
        ],
        "closingParagraphs": [
          "計算機は隣辺も角度の入力も必要としません。割り算を行うだけで、他には何もしません。保存された履歴もグラフも隠しモードもありません。"
        ]
      },
      "sec-examples": {
        "h2": "サイン計算のステップバイステップ例",
        "blocks": [
          {
            "kind": "h3",
            "text": "例 1: 3-4-5 の直角三角形"
          },
          {
            "kind": "p",
            "text": "[[a=3\\,\\text{cm}]]、[[b=4\\,\\text{cm}]]、[[c=5\\,\\text{cm}]] が与えられた場合:"
          },
          {
            "kind": "p",
            "text": "[[\\sin(A)=\\frac{3}{5}]]"
          },
          {
            "kind": "p",
            "text": "[[\\boxed{\\sin(A)=0.6}]]"
          },
          {
            "kind": "p",
            "text": "対辺は斜辺の 60 パーセントです。"
          },
          {
            "kind": "h3",
            "text": "例 2: 5-12-13 の直角三角形"
          },
          {
            "kind": "p",
            "text": "[[a=5\\,\\text{m}]]、[[b=12\\,\\text{m}]]、[[c=13\\,\\text{m}]] が与えられた場合:"
          },
          {
            "kind": "p",
            "text": "[[\\sin(A)=\\frac{5}{13}]]"
          },
          {
            "kind": "p",
            "text": "[[\\boxed{\\sin(A)\\approx0.3846}]]"
          },
          {
            "kind": "p",
            "text": "対辺は斜辺の約 38.46 パーセントです。"
          },
          {
            "kind": "h3",
            "text": "例 3: 30-60-90 三角形"
          },
          {
            "kind": "p",
            "text": "基準角 [[A=30^\\circ]] では、対辺は斜辺の半分です。[[a=1\\,\\text{cm}]]、[[b=\\sqrt{3}\\,\\text{cm}]]、[[c=2\\,\\text{cm}]] を使います:"
          },
          {
            "kind": "p",
            "text": "[[\\sin(30^\\circ)=\\frac{1}{2}]]"
          },
          {
            "kind": "p",
            "text": "[[\\boxed{\\sin(30^\\circ)=0.5}]]"
          },
          {
            "kind": "p",
            "text": "これは有用な特殊角の結果です。30 度では対辺が斜辺のちょうど半分になるため、この三角形は教科書の問題に頻繁に登場します。"
          },
          {
            "kind": "h3",
            "text": "例 4: 45-45-90 三角形"
          },
          {
            "kind": "p",
            "text": "[[a=1\\,\\text{cm}]]、[[b=1\\,\\text{cm}]]、[[c=\\sqrt{2}\\,\\text{cm}]] が与えられた場合:"
          },
          {
            "kind": "p",
            "text": "[[\\sin(45^\\circ)=\\frac{1}{\\sqrt{2}}]]"
          },
          {
            "kind": "p",
            "text": "[[\\boxed{\\sin(45^\\circ)\\approx0.7071}]]"
          },
          {
            "kind": "p",
            "text": "等しい直角をはさむ辺は二つの鋭角について等しいサイン値とコサイン値を生みます。45 度では各鋭角が長さ 1 の直角をはさむ辺と [[\\sqrt{2}]] の斜辺に向き合うため、サインとコサインが一致します。"
          }
        ]
      },
      "sec-applications": {
        "h2": "サイン比の実生活の例",
        "blocks": [
          {
            "kind": "p",
            "text": "各例は状況を述べ、対辺と斜辺を特定し、公式に代入し、結果を平易な言葉で解釈します。"
          },
          {
            "kind": "h3",
            "text": "例 5: はしごのサイン比の計算"
          },
          {
            "kind": "p",
            "text": "はしごは長さ 5 m で、垂直な壁を 4 m 上ります。基準角 [[A]] ははしごと水平な地面の間にあります。はしごは斜辺 [[c=5\\,\\text{m}]]、垂直な高さは対辺 [[a=4\\,\\text{m}]] です。"
          },
          {
            "kind": "p",
            "text": "[[\\sin(A)=\\frac{4}{5}]]"
          },
          {
            "kind": "p",
            "text": "[[\\boxed{\\sin(A)=0.8}]]"
          },
          {
            "kind": "p",
            "text": "垂直な高さははしごの長さの 80 パーセントです。この比ははしごの形状を表し、はしごが安全に設置されているかどうかを立証するものではありません。"
          },
          {
            "kind": "h3",
            "text": "例 6: 屋根の垂木のサイン比の計算"
          },
          {
            "kind": "p",
            "text": "屋根の垂木は傾斜長さ 6.5 m、垂直な高さ 2.5 m です。垂木は斜辺 [[c=6.5\\,\\text{m}]]、垂直な高さは対辺 [[a=2.5\\,\\text{m}]] です。"
          },
          {
            "kind": "p",
            "text": "[[\\sin(A)=\\frac{2.5}{6.5}]]"
          },
          {
            "kind": "p",
            "text": "[[\\boxed{\\sin(A)\\approx0.3846}]]"
          },
          {
            "kind": "p",
            "text": "垂直な高さは垂木の長さの約 38.46 パーセントです。この比は構造的な適合性や屋根設計への準拠を立証するものではありません。"
          },
          {
            "kind": "h3",
            "text": "例 7: スロープのサイン比の評価"
          },
          {
            "kind": "p",
            "text": "簡略化したスロープは傾斜長さ 9.5 m、垂直な高さ 0.75 m です。傾斜は斜辺 [[c=9.5\\,\\text{m}]]、垂直な高さは対辺 [[a=0.75\\,\\text{m}]] です。"
          },
          {
            "kind": "p",
            "text": "[[\\sin(A)=\\frac{0.75}{9.5}]]"
          },
          {
            "kind": "p",
            "text": "[[\\boxed{\\sin(A)\\approx0.07895}]]"
          },
          {
            "kind": "p",
            "text": "垂直な高さは傾斜長さの約 7.89 パーセントで、緩やかな傾斜です。この比だけではバリアフリーや建築基準法への準拠を立証するものではありません。"
          },
          {
            "kind": "h3",
            "text": "例 8: 測量の測定"
          },
          {
            "kind": "p",
            "text": "簡略化した測量三角形の直線距離は 50 m、垂直な標高差は 30 m です。直線は斜辺 [[c=50\\,\\text{m}]]、垂直な差は対辺 [[a=30\\,\\text{m}]] です。"
          },
          {
            "kind": "p",
            "text": "[[\\sin(A)=\\frac{30}{50}]]"
          },
          {
            "kind": "p",
            "text": "[[\\boxed{\\sin(A)=0.6}]]"
          },
          {
            "kind": "p",
            "text": "垂直な差は直線距離の 60 パーセントです。実際の測量では追加の補正、器械高の調整、より詳細な測定が必要になる場合があります。"
          },
          {
            "kind": "h3",
            "text": "例 9: ポールを支える支線"
          },
          {
            "kind": "p",
            "text": "支線は長さ 13 m で、その取付点は地上のアンカーのレベルより 5 m 高い位置にあります。支線は斜辺 [[c=13\\,\\text{m}]]、垂直な間隔は対辺 [[a=5\\,\\text{m}]] です。"
          },
          {
            "kind": "p",
            "text": "[[\\sin(A)=\\frac{5}{13}]]"
          },
          {
            "kind": "p",
            "text": "[[\\boxed{\\sin(A)\\approx0.3846}]]"
          },
          {
            "kind": "p",
            "text": "垂直な間隔は支線の長さの約 38.46 パーセントです。この比は支線の張力、アンカーの強度、構造の安全性を立証するものではありません。"
          },
          {
            "kind": "h3",
            "text": "例 10: 階段のささら桁のサイン比の計算"
          },
          {
            "kind": "p",
            "text": "簡略化した階段のささら桁は長さ 5 m で、垂直な高さ 3 m をカバーします。ささら桁は斜辺 [[c=5\\,\\text{m}]]、垂直な高さは対辺 [[a=3\\,\\text{m}]] です。"
          },
          {
            "kind": "p",
            "text": "[[\\sin(A)=\\frac{3}{5}]]"
          },
          {
            "kind": "p",
            "text": "[[\\boxed{\\sin(A)=0.6}]]"
          },
          {
            "kind": "p",
            "text": "垂直な高さは対角線上のささら桁の長さの 60 パーセントです。この計算は階段の寸法や建築基準法への準拠を確認するものではありません。"
          },
          {
            "kind": "h3",
            "text": "例 11: クレーンのブームの垂直成分を理解する"
          },
          {
            "kind": "p",
            "text": "簡略化したクレーンのブームは長さ 10 m、垂直成分 8 m です。ブームは斜辺 [[c=10\\,\\text{m}]]、垂直成分は対辺 [[a=8\\,\\text{m}]] です。"
          },
          {
            "kind": "p",
            "text": "[[\\sin(A)=\\frac{8}{10}]]"
          },
          {
            "kind": "p",
            "text": "[[\\boxed{\\sin(A)=0.8}]]"
          },
          {
            "kind": "p",
            "text": "垂直成分はブームの長さの 80 パーセントです。この比はクレーンの能力や作業の安全性を立証するものではありません。"
          },
          {
            "kind": "h3",
            "text": "例 12: 航空機の直線飛行区間"
          },
          {
            "kind": "p",
            "text": "簡略化した飛行区間では、航空機は直線経路に沿って 5 km 飛行しながら 1.5 km 上昇します。経路は斜辺 [[c=5\\,\\text{km}]]、垂直な上昇は対辺 [[a=1.5\\,\\text{km}]] です。"
          },
          {
            "kind": "p",
            "text": "[[\\sin(A)=\\frac{1.5}{5}]]"
          },
          {
            "kind": "p",
            "text": "[[\\boxed{\\sin(A)=0.3}]]"
          },
          {
            "kind": "p",
            "text": "垂直な上昇は直線経路の長さの 30 パーセントです。これは理想化された幾何学的な例であり、完全な飛行航法の計算ではありません。"
          },
          {
            "kind": "h3",
            "text": "例 13: 斜めの機械的筋交い"
          },
          {
            "kind": "p",
            "text": "斜めの筋交いは長さ 2 m、垂直成分 1.6 m です。筋交いは斜辺 [[c=2\\,\\text{m}]]、垂直成分は対辺 [[a=1.6\\,\\text{m}]] です。"
          },
          {
            "kind": "p",
            "text": "[[\\sin(A)=\\frac{1.6}{2}]]"
          },
          {
            "kind": "p",
            "text": "[[\\boxed{\\sin(A)=0.8}]]"
          },
          {
            "kind": "p",
            "text": "垂直成分は筋交いの長さの 80 パーセントです。この比は筋交いの強度や適合性を決定するものではありません。"
          },
          {
            "kind": "h3",
            "text": "例 14: ハイキングルートのサイン比"
          },
          {
            "kind": "p",
            "text": "簡略化した直線のハイキング区間は経路長 100 m、垂直な標高上昇 25 m です。経路は斜辺 [[c=100\\,\\text{m}]]、標高上昇は対辺 [[a=25\\,\\text{m}]] です。"
          },
          {
            "kind": "p",
            "text": "[[\\sin(A)=\\frac{25}{100}]]"
          },
          {
            "kind": "p",
            "text": "[[\\boxed{\\sin(A)=0.25}]]"
          },
          {
            "kind": "p",
            "text": "標高上昇は直線経路の長さの 25 パーセントです。実際のハイキングコースにはカーブや変化する勾配がある場合があります。"
          },
          {
            "kind": "h3",
            "text": "例 15: オーニングの支柱"
          },
          {
            "kind": "p",
            "text": "オーニングの支柱は長さ 3 m、垂直成分 1.2 m です。支柱は斜辺 [[c=3\\,\\text{m}]]、垂直成分は対辺 [[a=1.2\\,\\text{m}]] です。"
          },
          {
            "kind": "p",
            "text": "[[\\sin(A)=\\frac{1.2}{3}]]"
          },
          {
            "kind": "p",
            "text": "[[\\boxed{\\sin(A)=0.4}]]"
          },
          {
            "kind": "p",
            "text": "垂直成分は支柱の長さの 40 パーセントです。この計算は構造的な適合性を立証するものではありません。"
          },
          {
            "kind": "h3",
            "text": "例 16: 木の頂上への視線"
          },
          {
            "kind": "p",
            "text": "木の頂上への簡略化した視線は 20 m です。観測者の目の高さと木の頂上の間の垂直な差は 12 m です。視線は斜辺 [[c=20\\,\\text{m}]]、垂直な差は対辺 [[a=12\\,\\text{m}]] です。"
          },
          {
            "kind": "p",
            "text": "[[\\sin(A)=\\frac{12}{20}]]"
          },
          {
            "kind": "p",
            "text": "[[\\boxed{\\sin(A)=0.6}]]"
          },
          {
            "kind": "p",
            "text": "垂直な差は視線距離の 60 パーセントです。観測者の目の高さやその他の必要な情報を考慮しない限り、結果は地面からの木の総高を与えません。"
          },
          {
            "kind": "p",
            "text": "サインは数学的な比であり、単位を持つ物理量ではありません。その実用的価値は、垂直または直交する成分を傾斜距離と比較すること、角度が既知のときに成分を計算すること、幾何学的関係を検証することにあります。サイン単独を構造の安全性、荷重能力、バリアフリー、工学的準拠の証明として扱わないでください。"
          }
        ],
        "tables": [
          {
            "headers": ["状況", "対辺 [[a]]", "斜辺 [[c]]", "公式", "比", "意味"],
            "rows": [
              ["はしご", "4 m", "5 m", "4/5", "0.8", "高さははしごの長さの 80%"],
              ["屋根の垂木", "2.5 m", "6.5 m", "2.5/6.5", "0.3846", "高さは垂木の長さの 38.46%"],
              ["スロープ", "0.75 m", "9.5 m", "0.75/9.5", "0.07895", "緩やかな傾斜、高さ 7.89%"],
              ["測量", "30 m", "50 m", "30/50", "0.6", "標高は直線距離の 60%"],
              ["支線", "5 m", "13 m", "5/13", "0.3846", "高さは支線の長さの 38.46%"],
              ["ささら桁", "3 m", "5 m", "3/5", "0.6", "高さはささら桁の長さの 60%"],
              ["クレーンのブーム", "8 m", "10 m", "8/10", "0.8", "垂直到達はブームの 80%"],
              ["飛行区間", "1.5 km", "5 km", "1.5/5", "0.3", "上昇は飛行経路の 30%"],
              ["斜めの筋交い", "1.6 m", "2 m", "1.6/2", "0.8", "垂直は筋交いの長さの 80%"],
              ["ハイキングルート", "25 m", "100 m", "25/100", "0.25", "上昇は経路長の 25%"],
              ["オーニングの支柱", "1.2 m", "3 m", "1.2/3", "0.4", "垂直は支柱の 40%"],
              ["視線", "12 m", "20 m", "12/20", "0.6", "高低差は視線の 60%"]
            ]
          }
        ],
        "imgAlt": "四つのパネル: 比0.8のはしご、0.07895のスロープ、0.6の測量、0.8のクレーンのブーム。各々にラベル付き直角三角形",
        "figcaption": "四つの実用計算: はしご、スロープ、測量、クレーンのブーム。各々に三角形、公式、比を添えています。"
      },
      "sec-angle": {
        "h2": "サインと角度の大きさの関係を理解する",
        "blocks": [
          {
            "kind": "p",
            "text": "サインは基準角が大きくなると増加します。幾何学がその理由を説明します。角 [[A]] が小さいとき、対辺は斜辺に対して短いため、比は 0 の近くにあります。角度が広がると、対辺は斜辺のより大きな部分を占めるようになり、比は 1 に向かって上昇します。[[30^\\circ]] ではサインはちょうど 0.5 です。[[45^\\circ]] では約 0.7071 です。[[60^\\circ]] では約 0.8660 です。角度が [[90^\\circ]] に近づくと、サインは 1 に近づきます。"
          }
        ],
        "tables": [
          {
            "headers": ["角度 [[A]]", "サイン比", "解釈"],
            "rows": [
              ["[[30^\\circ]]", "0.5", "対辺は斜辺の半分"],
              ["[[45^\\circ]]", "約 0.7071", "対辺は斜辺の約 70.71%"],
              ["[[60^\\circ]]", "約 0.8660", "対辺は斜辺の約 86.60%"],
              ["[[80^\\circ]]", "約 0.9848", "対辺は斜辺の約 98.48%"]
            ]
          }
        ],
        "closingParagraphs": [
          "パターンは単純で単調です。角度が増すたびにサインは上昇し、比はすべての鋭角について 0 と 1 の間にとどまります。サインは三角形の絶対的な大きさではなく形状を表します。二つの三角形は鋭角が同じであれば、辺の長さが異なっても同じサイン比を持ちます。[[90^\\circ]] の項目は極限の基準値であり、退化していない直角三角形の鋭角ではありません。"
        ],
        "imgAlt": "30、45、60度の三つの三角形。サイン値は0.5、0.7071、0.8660。角度が大きくなるとサインも上昇する",
        "figcaption": "角 A が大きくなると、対辺は斜辺のより大きな部分を占めるため、sin(A) は上昇します。"
      },
      "sec-hypotenuse": {
        "h2": "サインを使って対辺を求める方法",
        "blocks": [
          {
            "kind": "p",
            "text": "斜辺と角度が既知の場合、サインの公式を変形して対辺を求めることができます。[[\\sin(A)=a/c]] から始め、両辺に [[c]] を掛けます。"
          },
          {
            "kind": "p",
            "text": "[[[\\boxed{a=c\\sin(A)}]]]"
          },
          {
            "kind": "p",
            "text": "対辺は斜辺に角度のサインを掛けたものに等しくなります。斜辺 [[c=10\\,\\text{m}]]、角度 [[A=30^\\circ]] が与えられ、[[\\sin(30^\\circ)=0.5]] がわかっている場合:"
          },
          {
            "kind": "p",
            "text": "[[a=10\\times0.5]]"
          },
          {
            "kind": "p",
            "text": "[[\\boxed{a=5\\,\\text{m}}]]"
          },
          {
            "kind": "p",
            "text": "対辺は [[30^\\circ]] の角に対して斜辺の半分であり、30-60-90 の幾何学と一致します。30 度に対向する辺は斜辺のちょうど半分です。"
          },
          {
            "kind": "p",
            "text": "斜辺も再び変形することで同様に求められます。"
          },
          {
            "kind": "p",
            "text": "[[[\\boxed{c=\\frac{a}{\\sin(A)}}]]]"
          },
          {
            "kind": "p",
            "text": "対辺 [[a=6\\,\\text{m}]] と [[A=30^\\circ]] の場合: [[c=6/0.5]]、したがって [[\\boxed{c=12\\,\\text{m}}]]。これらは同じ公式の数学的変形です。このページの計算機は辺の長さからサイン比を返します。未知の辺を直接計算するものではありません。"
          }
        ]
      },
      "sec-recover": {
        "h2": "サイン比から角度を求める方法",
        "blocks": [
          {
            "kind": "p",
            "text": "サイン比と角度は異なる量です。一つは辺の無次元の比較、もう一つは度で測られる量です。サイン比が既知で角度が必要な場合、逆サインが使えます。"
          },
          {
            "kind": "p",
            "text": "[[[\\boxed{A=\\sin^{-1}\\left(\\frac{a}{c}\\right)}]]]"
          },
          {
            "kind": "p",
            "text": "逆サインはアークサインとも呼ばれます。[[\\sin(A)=0.6]] が与えられた場合:"
          },
          {
            "kind": "p",
            "text": "[[A=\\sin^{-1}(0.6)]]"
          },
          {
            "kind": "p",
            "text": "[[\\boxed{A\\approx36.87^\\circ}]]"
          },
          {
            "kind": "p",
            "text": "計算機が度モードに設定されている場合、角度は約 [[36.87^\\circ]] です。これは別の角度計算であり、サイン比計算機が直接行うものではありません。より広い三角法では逆サインに複数の角度解がある場合がありますが、直角三角形の鋭角という制約により適切な鋭角の解が選ばれます。"
          }
        ]
      },
      "sec-mistakes": {
        "h2": "サイン計算でありがちな間違い",
        "blocks": [
          {
            "kind": "p",
            "text": "ほとんどのサインの間違いは、反転した分数、誤った辺のラベル、単位のずれから生じます。結果を信じる前にこのリストを確認してください。"
          }
        ],
        "steps": [
          "<strong>対辺の代わりに隣辺を使う。</strong> [[b/c]] を割るとコサインが計算されます。[[a=3]]、[[b=4]]、[[c=5]] の場合、間違った直角をはさむ辺では 0.8、正しい方では 0.6 が得られます。",
          "<strong>公式を反転して [[a/c]] の代わりに [[c/a]] を計算する。</strong> これはコセカントを返し、サインではありません。[[a=3]] と [[c=5]] の場合、反転した分数は 1.6667 となり、常に 1 を超えるため、明確な警告サインです。",
          "<strong>サインとコサインを混同する。</strong> サインは対辺を使い、コサインは隣辺を使います。分子に間違った直角をはさむ辺があれば、答えはサインではなくコサインです。",
          "<strong>サインとコセカントを混同する。</strong> コセカントは逆数、斜辺割る対辺です。似た名前が実際の間違いを引き起こしますが、分数の順序はちょうど反対です。",
          "<strong>斜辺より長い対辺を入力する。</strong> 斜辺は常に最長の辺です。[[a \\ge c]] の場合、入力が入れ替わっているか、三角形が不可能です。",
          "<strong>ゼロまたは負の辺の長さを入力する。</strong> 三角形にゼロや負の辺はあり得ないため、これらの入力は有効な境界例ではなく、データ入力ミスや測定漏れのサインです。",
          "<strong>測定単位を混ぜる。</strong> 3 m の対辺と 50 cm の斜辺では 6 となり、意味のない数値です。まず単一の単位に変換します。3 m と 5 m では正しい 0.6 が得られます。",
          "<strong>サイン比を度数表示の角度として報告する。</strong> 結果 0.6 は比であり、[[0.6^\\circ]] ではありません。これを度として扱うと、後続の計算すべてにナンセンスが混入します。",
          "<strong>サインに物理単位があると想定する。</strong> 割り算で単位は打ち消されるため、「0.6 m」は誤りです。単なる数値を書き、単位は属する入力測定に残します。",
          "<strong>基準角と直角を混同する。</strong> サインは常に鋭角を使います。これらの計算では [[90^\\circ]] の角が基準角 [[A]] になることはありません。",
          "<strong>丸めが早すぎる。</strong> 中間の割り算を小数第 2 位で丸めてから計算を続けると誤差が蓄積します。すべての手順で完全な精度を保ち、最終的な答えだけを丸めます。",
          "<strong>サインがすべての角度で同じだと想定する。</strong> 各角度には独自のサイン値があります。0.6 という結果は一つの特定の角度（約 36.87 度）に属し、すべての直角三角形に属するものではありません。",
          "<strong>サイン値 0.6 が角度 [[0.6^\\circ]] であることを意味すると想定する。</strong> 比は度数表示ではありません。角度そのものが必要な場合は逆サインで変換します。",
          "<strong>逆数サインと逆サインを混同する。</strong> [[1/\\sin(A)]] はコセカント、比です。[[\\sin^{-1}]] は逆サインで、角度を返します。似た名前が実際の間違いを引き起こすため、記法を注意深く読みます。",
          "<strong>サイン比が三角形の絶対的な大きさを決定すると想定する。</strong> サインは形状を表し、大きさを表しません。対辺 3 cm から 3 km まで、無数の三角形がサイン 0.6 を共有します。比は比率を固定します。実際の長さには少なくとも一つの辺の測定が必要です。"
        ],
        "closingParagraphs": [
          "<strong>間違いと正解: 計算済みの比較</strong>",
          "対辺 [[a=3]] と斜辺 [[c=5]] が与えられた場合:",
          "<strong>誤り:</strong> [[5/3\\approx1.6667]]。これはコセカント比であり、サイン比ではありません。分子と分母が反転しています。",
          "<strong>正解:</strong> [[\\sin(A)=3/5=0.6]]。",
          "<strong>確認:</strong> [[\\csc(A)=1/0.6\\approx1.6667]]。逆数の検査で結果が確認され、答えは 0 と 1 の間にあり、すべての有効なサインがそうであるべきです。"
        ]
      },
      "sec-verify": {
        "h2": "サインの結果が有効か確認する方法",
        "blocks": [
          {
            "kind": "p",
            "text": "有効で退化していない直角三角形では、辺は正で、斜辺が厳密に最長である必要があります。[[0 \\lt a \\lt c]]。そのためサインの結果は 0 と 1 の間に収まらなければなりません。"
          },
          {
            "kind": "p",
            "text": "[[[\\boxed{0 \\lt \\frac{a}{c} \\lt 1}]]]"
          },
          {
            "kind": "p",
            "text": "両方の測定は互換性のある単位でなければなりません。0 以下または 1 以上の結果は通常、無効な入力、入れ替わった辺、誤った三角形モデルを示します。"
          },
          {
            "kind": "h3",
            "text": "方法 1: 比を確認する"
          },
          {
            "kind": "p",
            "text": "[[\\sin(A)=a/c]] を直接再確認します。[[a=3]] と [[c=5]] の場合: [[\\sin(A)=3/5=0.6]]。二度目の手計算が一致しない場合、辺のラベルが誤っているか単位が混ざっています。"
          },
          {
            "kind": "h3",
            "text": "方法 2: ピタゴラスの定理で確認する"
          },
          {
            "kind": "p",
            "text": "隣辺が必要な場合は [[b=\\sqrt{c^2-a^2}]] を計算します。[[a=3]] と [[c=5]] の場合: [[b=\\sqrt{25-9}=4]]、および [[3^2+4^2=5^2]]。これにより 3-4-5 の直角三角形の寸法が確認されます。隣辺はここでは検証値であり、主なサイン公式の一部ではありません。"
          },
          {
            "kind": "h3",
            "text": "方法 3: 逆サインで確認する"
          },
          {
            "kind": "p",
            "text": "サイン比 0.6 の場合: [[A=\\sin^{-1}(0.6)\\approx36.87^\\circ]]。サインは 0.5 より少し上なので、角度は [[30^\\circ]] より少し上に来るはずです。そうでない場合、辺のラベルがおそらく入れ替わっています。小さな差は丸めによるものかもしれません。"
          }
        ]
      },
      "sec-vs": {
        "h2": "サイン vs コサイン、タンジェント、コセカント",
        "blocks": [
          {
            "kind": "p",
            "text": "各比は異なる辺の組み合わせを比較し、同じ基準角と辺のラベルを使います。"
          },
          {
            "kind": "p",
            "text": "サインとコセカントは逆数の組です。[[\\csc(A)=1/\\sin(A)]]。[[\\sin(A)=0.6]] の場合、[[\\csc(A)\\approx1.6667]] となります。斜辺に対して対辺が既知の場合、垂直成分を傾斜長さと比較する必要がある場合、または SOH が対応する覚え方である場合にサインを使います。隣辺割る斜辺にはコサイン、二つの直角をはさむ辺が既知の場合はタンジェント、斜辺を対辺と比較する場合はコセカントを使います。"
          },
          {
            "kind": "p",
            "text": "隣接する比については、<a href=\"/cosine-ratio-calculator/\" class=\"text-primary hover:underline\">コサイン比計算機</a>、<a href=\"/tangent-ratio-calculator/\" class=\"text-primary hover:underline\">タンジェント比計算機</a>、<a href=\"/cosecant-ratio-calculator/\" class=\"text-primary hover:underline\">コセカント比計算機</a>、<a href=\"/secant-ratio-calculator/\" class=\"text-primary hover:underline\">セカント比計算機</a>、<a href=\"/cotangent-ratio-calculator/\" class=\"text-primary hover:underline\">コタンジェント比計算機</a>をご覧ください。"
          }
        ],
        "tables": [
          {
            "headers": ["比", "公式", "比較するもの"],
            "rows": [
              ["サイン", "sin(A) = a/c", "対辺と斜辺"],
              ["コサイン", "cos(A) = b/c", "隣辺と斜辺"],
              ["タンジェント", "tan(A) = a/b", "対辺と隣辺"],
              ["コセカント", "csc(A) = c/a", "斜辺と対辺"],
              ["セカント", "sec(A) = c/b", "斜辺と隣辺"],
              ["コタンジェント", "cot(A) = b/a", "隣辺と対辺"]
            ]
          }
        ]
      },
      "sec-related": {
        "h2": "関連する三角関数計算機を見る",
        "related": [
          {
            "name": "コサイン比計算機"
          },
          {
            "name": "タンジェント比計算機"
          },
          {
            "name": "コセカント比計算機"
          },
          {
            "name": "セカント比計算機"
          },
          {
            "name": "コタンジェント比計算機"
          },
          {
            "name": "直角三角形角度計算機"
          }
        ]
      },
      "sec-conclusion": {
        "h2": "自信を持ってサイン比を使う",
        "blocks": [
          {
            "kind": "p",
            "text": "サインは三つの主な比の最初のものです。対辺を斜辺で割れば、角に対向する最長辺の部分がどれだけかが記述されます。公式 [[\\sin(A)=a/c]] に必要な測定は二つだけです。答えは常に 0 と 1 の間の無次元数であり、基準角が大きくなるにつれて増加します。未知の辺が必要な場合は [[a=c\\sin(A)]] で対辺を回復し、角度が必要な場合は [[A=\\sin^{-1}(a/c)]] で回復します。はしご、垂木、スロープ、教科書の 3-4-5 のいずれでも、方法は変わりません。対辺を特定し、斜辺を特定し、割り、0 から 1 の範囲で検証します。"
          }
        ]
      }
    },
    "faqs": [
      {
        "question": "直角三角形のサインの公式は？",
        "answer": "sin(A) = a / c です。対辺 a を斜辺 c で割ります。対辺 3 cm、斜辺 5 cm の場合、結果は 3/5 = 0.6 です。この小数が完全な答えであり、無次元の比であって角度ではありません。"
      },
      {
        "question": "二つの辺の長さからサインをどう計算しますか？",
        "answer": "基準角 A を特定し、対辺 a と斜辺 c を同じ単位で測定し、両方が正で、c が a より長いことを確認してから割ります。sin(A) = a / c。このページでは、最初の欄に対辺、二番目の欄に斜辺を入力し、Calculate sin(A) をクリックします。"
      },
      {
        "question": "サインとコサインの違いは？",
        "answer": "サインは対辺を斜辺で割り (a/c)、コサインは隣辺を斜辺で割ります (b/c)。どちらも同じ斜辺を使いますが、分子が異なります。1 を超える結果は、分数が反転したか、直角をはさむ辺のラベルが誤っていることを意味します。"
      },
      {
        "question": "直角三角形の鋭角でサインが 1 未満になるのはなぜ？",
        "answer": "有効で退化していない直角三角形では、斜辺はどちらの直角をはさむ辺よりも厳密に長いため、0 < a < c です。小さい長さを大きい長さで割ると、結果は常に 1 未満になります。すべての鋭角の基準角について 0 < a/c < 1 です。"
      },
      {
        "question": "有効な直角三角形の鋭角でサインが 1 になることはありますか？",
        "answer": "いいえ。ちょうど 1 のサインには対辺が斜辺と等しい必要があり、三角形は幅のない垂直な線に崩れます。値 1 は角 A が 90 度に近づくにつれて近づく極限値であり、真の三角形が生み出す値ではありません。"
      },
      {
        "question": "サイン値 0.6 の意味は？",
        "answer": "対辺が斜辺の 60 パーセントです。3-4-5 三角形では、角 A の向かいの辺が 3 単位、斜辺が 5 単位のため、sin(A) = 3/5 = 0.6 です。これは三角形の形状を表し、0.6 度の角度ではありません。"
      },
      {
        "question": "サイン比に測定単位はありますか？",
        "answer": "いいえ。両方の入力は同じ単位で測った長さのため、単位は打ち消されます。3 m / 5 m = 0.6 で、300 cm / 500 cm = 0.6 と全く同じです。サインは単なる数値として報告し、度、メートル、フィートを付けないでください。"
      },
      {
        "question": "サイン比から角度をどう求めますか？",
        "answer": "比に逆サインを適用します。A = sin^-1(a/c)。sin(A) = 0.6 の場合、A = sin^-1(0.6)、約 36.87 度です。まず関数電卓を度モードに設定してください。このページの計算機は比を返し、角度ではありません。"
      },
      {
        "question": "サインを使って対辺をどう求めますか？",
        "answer": "公式を a = c * sin(A) に変形します。斜辺が 10 m、角 A が 30 度の場合、sin(30 deg) = 0.5 なので、a = 10 * 0.5 = 5 m です。これは手動の変形です。このページの計算機は辺の長さから比を返し、未知の辺ではありません。"
      },
      {
        "question": "サインとコセカントの違いは？",
        "answer": "サインは対辺を斜辺で割り (a/c)、コセカントはその逆数、斜辺割る対辺です (c/a)。sin(A) = 0.6 の場合、csc(A) = 1/0.6、約 1.6667 です。二つは逆数の関係にあり、互換性のある公式ではありません。"
      },
      {
        "question": "隣辺がわからなくてもサインは計算できますか？",
        "answer": "はい。主なサインの公式は対辺と斜辺だけを使うため、隣辺は計算に一切入りません。隣辺は、ピタゴラスの定理で三角形を検証するとき、またはコサイン、タンジェント、セカントが関わるときにだけ役立ちます。"
      },
      {
        "question": "サインは実際の測定でどう使われますか？",
        "answer": "サインは垂直または直交する成分を傾斜長さと比較します。壁の高さに対するはしご、垂直な高さに対する屋根の垂木、高さに対するスロープ、標高差に対する測量線などです。この比は、傾斜距離のうち垂直な部分が占める割合を示し、高さ、空き、成分の計算に役立ちます。"
      }
    ],
    "faqHeading": "よくある質問",
    "relatedHeading": "関連する三角関数計算機を見る"
  },
  "ko": {
    "tocHeading": "이 가이드에서",
    "tocItems": {
      "sec-intro": "사인 비 계산기란?",
      "sec-triangle": "대변과 빗변 이해하기",
      "sec-whatis": "사인 비 이해하기",
      "sec-formula": "사인 공식의 원리",
      "sec-howto": "사인 비 계산기 사용법",
      "sec-examples": "사인 계산 단계별 예제",
      "sec-applications": "사인 비의 실생활 활용 예제",
      "sec-angle": "사인과 각도 크기의 관계 이해하기",
      "sec-hypotenuse": "사인을 이용한 대변 구하기",
      "sec-recover": "사인 비로부터 각도 구하기",
      "sec-mistakes": "사인 계산 시 흔한 실수",
      "sec-verify": "사인 결과의 유효성 확인 방법",
      "sec-vs": "사인 vs 코사인, 탄젠트, 코시컨트",
      "sec-related": "관련 삼각함수 계산기 살펴보기",
      "sec-faq": "자주 묻는 질문"
    },
    "sections": {
      "sec-intro": {
        "h2": "사인 비 계산기란?",
        "blocks": [
          {
            "kind": "p",
            "text": "사인 비 계산기는 하나의 질문에 답합니다. 직각삼각형의 예각에 대해, 그 각의 맞은편 변이 가장 긴 변과 어떻게 비교되는가? 대변과 빗변을 입력하면 도구가 대변을 빗변으로 나누어 [[\\sin(A)=a/c]]를 반환합니다. 직각삼각형의 대변이 3cm, 빗변이 5cm이므로 [[\\sin(A)=3/5=0.6]]입니다. 이 0.6이 사인 비입니다. 대변이 빗변의 60퍼센트라는 뜻입니다. 각도가 아니므로 [[0.6^\\circ]]로 읽으면 안 됩니다. 인접변은 이 계산에 전혀 들어가지 않습니다. 대변과 빗변만으로 충분합니다. 사인은 기본적인 삼각함수 비 중 하나이며, 삼각형의 크기가 아니라 각도에만 의존하는 방식으로 두 길이를 비교한다는 점이 강점입니다. 필요한 것이 도 단위의 각도라면 역사인이 비를 도 단위로 변환해 줍니다."
          }
        ]
      },
      "sec-triangle": {
        "h2": "대변과 빗변 이해하기",
        "blocks": [
          {
            "kind": "h3",
            "text": "직각삼각형이란?"
          },
          {
            "kind": "p",
            "text": "직각삼각형은 한 각이 정확히 [[90^\\circ]]인 삼각형으로, 수직인 두 직선 사이의 각, 즉 벽과 수평 바닥이 만나는 모서리와 같습니다. 빗변은 그 직각의 맞은편에 있으며 항상 가장 긴 변입니다. 모서리를 가로지르는 전체 대각선을 잇기 때문입니다. 나머지 두 각은 남은 90도를 나누어 가지므로 둘 다 예각입니다. 두 직각변은 직각에서 서로 수직으로 만나며, 빗변과의 관계 덕분에 직각삼각형 삼각함수가 가능합니다."
          },
          {
            "kind": "h3",
            "text": "대변이란?"
          },
          {
            "kind": "p",
            "text": "대변 [[a]]는 기준각 [[A]]의 정 맞은편에 있는 변으로, 그 각의 꼭짓점에 절대 닿지 않는 유일한 변입니다. 실제 문제에서는 흔히 수직 높이, 높이 차이, 수직 성분의 역할을 합니다. 사다리가 닿는 벽의 높이, 경사로의 수직 높이, 측량에서의 표고 차이 등이 그 예입니다. 어느 변이 대변이 되는지는 선택한 기준각에 따라 달라지므로, 각 [[A]]에서 각 [[C]]로 바꾸면 대변과 인접변의 이름이 서로 바뀝니다. 사인 공식의 분자에 나타나는 이유는, 사인이 각 맞은편 변이 빗변에 비해 얼마나 큰지를 측정하기 때문입니다."
          },
          {
            "kind": "h3",
            "text": "빗변이란?"
          },
          {
            "kind": "p",
            "text": "빗변 [[c]]는 직각의 맞은편에 있는 변입니다. 어떤 도면에서도 [[90^\\circ]] 모서리를 표시하는 작은 정사각형의 맞은편에 있으며, 두 직각변보다 엄격히 더 깁니다. 실제 문제에서는 흔히 경사진 길이의 역할을 합니다. 사다리, 경사로 표면, 서까래, 케이블, 대각 버팀목, 직선 경로 등이 그 예입니다. 사인 공식의 분모에 나타나므로 모든 사인 값이 0과 1 사이에 나오는 이유가 됩니다. 분자는 항상 분모보다 짧은 진짜 직각변이기 때문입니다."
          },
          {
            "kind": "h3",
            "text": "인접변이란?"
          },
          {
            "kind": "p",
            "text": "인접변 [[b]]는 빗변이 아닌 직각변 중 기준각 [[A]]에 닿는 변입니다. 기본 사인 계산에는 아무 역할도 하지 않으므로 계산기가 절대 묻지 않습니다. 코사인, 탄젠트, 빠진 변을 계산하거나, 피타고라스 정리로 알려진 두 길이가 진짜 직각삼각형을 이루는지 확인할 때 유용해집니다."
          }
        ],
        "imgAlt": "왼쪽 아래에 각 A가 있는 직각삼각형, 금색 대변 a, 파란색 빗변 c, sin(A)=a/c",
        "figcaption": "각 A는 왼쪽 아래에 있습니다. 사인은 금색 대변 a와 파란색 빗변 c를 사용하며, 인접변 b는 사용하지 않습니다."
      },
      "sec-whatis": {
        "h2": "사인 비 이해하기",
        "blocks": [
          {
            "kind": "p",
            "text": "예각의 사인은 그 각의 정 맞은편 변을 삼각형의 가장 긴 변과 비교합니다."
          },
          {
            "kind": "p",
            "text": "[[[\\boxed{\\sin(A)=\\frac{a}{c}}]]]"
          },
          {
            "kind": "p",
            "text": "[[\\sin(A)]]는 \"각 A의 사인\"으로 읽습니다. 분자 [[a]]는 대변, 분모 [[c]]는 빗변입니다. 이 분수는 하나의 구체적인 질문에 답합니다. 빗변 중 대변이 차지하는 비율은 얼마인가? 두 입력이 모두 같은 단위로 측정한 길이이므로 결과는 그냥 숫자이며, 그 숫자는 삼각형의 크기가 아니라 각도에만 의존합니다."
          },
          {
            "kind": "h3",
            "text": "SOH-CAH-TOA 이해하기"
          },
          {
            "kind": "p",
            "text": "학생들은 세 가지 주요 비를 SOH-CAH-TOA라는 암기법으로 외웁니다."
          },
          {
            "kind": "p",
            "text": "<strong>SOH:</strong> 사인 = 대변 / 빗변. <strong>CAH:</strong> 코사인 = 인접변 / 빗변. <strong>TOA:</strong> 탄젠트 = 대변 / 인접변."
          },
          {
            "kind": "p",
            "text": "SOH는 사인 공식 [[\\sin(A)=a/c]]와 직접 대응합니다. 이 암기법이 통하는 이유는 각 비의 이름에 필요한 두 변을 올바른 순서로 짝지어 주기 때문입니다. 사인의 경우 대변이 위에, 빗변이 아래에 옵니다. 두 변의 이름을 정확히 붙이고 나면, \"어느 변이 어디에\"라는 문제가 암기 문제에서 단순 조회로 바뀝니다."
          },
          {
            "kind": "h3",
            "text": "사인이 비인 이유"
          },
          {
            "kind": "p",
            "text": "두 길이를 나누면 단위가 약분되므로 무차원 숫자가 됩니다."
          },
          {
            "kind": "p",
            "text": "[[[\\frac{3\\,\\text{m}}{5\\,\\text{m}}=0.6]]]"
          },
          {
            "kind": "p",
            "text": "미터가 약분되어 0.6이 남습니다. 300cm와 500cm를 써도 두 길이가 함께 확대되므로 결과는 동일합니다. 유일한 조건은 단위가 호환되는 것입니다. 두 측정값이 같은 단위를 쓰거나, 나누기 전에 하나를 변환해야 합니다. 따라서 이 비는 삼각형을 잰 자의 속성이 아니라 각의 속성입니다."
          },
          {
            "kind": "h3",
            "text": "사인 값 0.6의 의미는?"
          },
          {
            "kind": "p",
            "text": "[[\\sin(A)=0.6]]은 대변이 빗변의 60퍼센트라는 뜻입니다. 3-4-5 삼각형이 대표적인 기준입니다. [[\\sin(A)=3/5=0.6]]. 이 숫자는 삼각형의 모양을 한눈에 보여줍니다. 사인이 1에 가까우면 대변이 빗변과 거의 같고 각도가 가파르며, 사인이 0에 가까우면 대변이 빗변에 비해 짧고 각도가 완만합니다. 이 중 어느 것도 0.6이 각도라는 뜻은 아닙니다. 이것은 비율이며, 역사인만이 이를 도 단위로 바꿉니다."
          },
          {
            "kind": "h3",
            "text": "사인이 0과 1 사이에 있는 이유"
          },
          {
            "kind": "p",
            "text": "빗변은 대변보다 길므로 [[0 \\lt a \\lt c]]이고, 따라서 다음이 성립합니다."
          },
          {
            "kind": "p",
            "text": "[[[\\boxed{0 \\lt \\frac{a}{c} \\lt 1}]]]"
          },
          {
            "kind": "p",
            "text": "유효하고 퇴화되지 않은 직각삼각형은 예각에 대해 사인 비가 정확히 0이거나 정확히 1일 수 없습니다. 각도가 [[0^\\circ]]에 가까워지면 대변은 사라질 듯이 줄어들어 값이 0에 접근하고, 각도가 [[90^\\circ]]에 가까워지면 대변이 빗변과 거의 같아질 만큼 커져 값이 1에 접근합니다. 어느 한계값도 실제 삼각형의 예각에서는 도달되지 않습니다."
          },
          {
            "kind": "h3",
            "text": "사인 vs 코사인"
          },
          {
            "kind": "p",
            "text": "두 비는 같은 빗변을 공유하지만 분자가 다릅니다."
          },
          {
            "kind": "p",
            "text": "[[\\sin(A)=a/c]] 와 [[\\cos(A)=b/c]]."
          },
          {
            "kind": "p",
            "text": "사인은 대변, 즉 각의 맞은편 직각변을 사용하고, 코사인은 인접변, 즉 각 옆의 직각변을 사용합니다. 결과가 1을 넘으면 분수를 뒤집었거나 빗변을 분자에 넣은 것입니다. 사인은 코사인의 역수가 아닙니다. 사인의 역수는 코시컨트입니다."
          }
        ],
        "imgAlt": "세 단계: 삼각형에 a=3, b=4, c=5 표시, sin(A)=a/c 적용, 0.6 도출, 60퍼센트 의미",
        "figcaption": "변을 확인하고, 공식을 적용하고, 계산합니다. 대변은 빗변의 60퍼센트입니다."
      },
      "sec-formula": {
        "h2": "사인 공식의 원리",
        "blocks": [
          {
            "kind": "p",
            "text": "공식은 논리적인 순서를 따릅니다. 말로 된 정의부터 시작합니다."
          },
          {
            "kind": "p",
            "text": "[[[\\sin(A)=\\frac{\\text{Opposite}}{\\text{Hypotenuse}}]]]"
          },
          {
            "kind": "p",
            "text": "다음으로 이 페이지의 표기법을 사용합니다. 대변은 [[a]], 빗변은 [[c]]입니다."
          },
          {
            "kind": "p",
            "text": "[[[\\boxed{\\sin(A)=\\frac{a}{c}}]]]"
          },
          {
            "kind": "p",
            "text": "대변이 분자에 오는 이유는 사인이 그 변의 크기를 빗변에 상대적으로 측정하기 때문이고, 빗변이 분모에 오는 이유는 다른 모든 변을 비교하는 기준 길이기 때문입니다. 배치는 고정되어 있습니다. 분자는 \"이 변이 얼마나 큰가?\"를 묻고, 분모는 \"무엇과 비교해서?\"에 답합니다."
          },
          {
            "kind": "h3",
            "text": "완전 풀이 예제: 3-4-5 직각삼각형"
          },
          {
            "kind": "p",
            "text": "[[a=3\\,\\text{cm}]], [[b=4\\,\\text{cm}]], [[c=5\\,\\text{cm}]]이 주어졌습니다."
          },
          {
            "kind": "p",
            "text": "<strong>1단계:</strong> 공식을 씁니다. [[\\sin(A)=a/c]]"
          },
          {
            "kind": "p",
            "text": "<strong>2단계:</strong> 알려진 값을 대입합니다. [[\\sin(A)=3/5]]"
          },
          {
            "kind": "p",
            "text": "<strong>3단계:</strong> 나눕니다. [[\\boxed{\\sin(A)=0.6}]]"
          },
          {
            "kind": "p",
            "text": "<strong>4단계:</strong> 결과를 해석합니다. 대변은 빗변의 60퍼센트입니다."
          },
          {
            "kind": "p",
            "text": "<strong>5단계:</strong> 삼각형을 확인합니다. [[3^2+4^2=5^2]], 그리고 [[9+16=25]]. 피타고라스 검사로 이 변의 길이들이 직각삼각형을 이룬다는 것이 확인되므로 사인 결과를 신뢰할 수 있습니다."
          },
          {
            "kind": "h3",
            "text": "중요한 설명"
          },
          {
            "kind": "p",
            "text": "사인 비가 아니라 각도 자체가 필요하다면 역사인이 필요합니다. [[A=\\sin^{-1}(0.6)\\approx36.87^\\circ]]. 역사인은 아크사인이라고도 하며, 사인 비를 계산하는 것과는 별개의 연산입니다. 이 페이지의 사인 비 계산기는 두 변의 길이로부터 비를 계산할 뿐, 각도를 직접 반환하지 않습니다."
          }
        ]
      },
      "sec-howto": {
        "h2": "사인 비 계산기 사용법",
        "blocks": [
          {
            "kind": "p",
            "text": "계산기는 공식을 그대로 반영합니다. 입력 두 개, 버튼 하나, 비 하나입니다. 인터페이스를 순서대로 따라가세요."
          }
        ],
        "steps": [
          "<strong>기준각 [[A]]를 확인합니다.</strong> 모든 사인 계산은 하나의 예각에 고정됩니다. 대변은 그 각을 기준으로 정의됩니다.",
          "<strong>각 [[A]]의 정 맞은편에 있는 대변 [[a]]를 찾습니다.</strong> 각의 꼭짓점에 절대 닿지 않는 직각변입니다.",
          "<strong>직각의 맞은편에 있고 가장 긴 변인 빗변 [[c]]를 찾습니다.</strong> [[90^\\circ]] 모서리를 표시하는 작은 정사각형의 맞은편에 있습니다.",
          "<strong>두 변의 길이를 구하거나 측정합니다.</strong> 줄자, 도면 치수, 문제에 주어진 값을 사용합니다.",
          "<strong>첫 번째 입력란에 대변의 길이를 입력합니다.</strong> 이것이 분자 [[a]]가 됩니다.",
          "<strong>두 번째 입력란에 빗변의 길이를 입력합니다.</strong> 이것이 분모 [[c]]가 됩니다.",
          "<strong>사용 가능한 단위 선택기로 호환되는 측정 단위를 선택합니다.</strong> 미터는 미터끼리, 센티미터는 센티미터끼리. 단위가 섞이면 무의미한 비가 나옵니다.",
          "<strong>두 측정값이 모두 양수인지 확인합니다.</strong> 0이나 음수 길이는 삼각형을 이룰 수 없습니다.",
          "<strong>빗변이 대변보다 긴지 확인합니다.</strong> [[a \\ge c]]라면 입력이 뒤바뀌었거나 삼각형이 불가능합니다.",
          "<strong>Calculate sin(A)를 클릭합니다.</strong> 도구가 대변을 빗변으로 나눕니다.",
          "<strong>나온 사인 비를 읽습니다.</strong> 각도도 길이도 아닌 그냥 소수입니다.",
          "<strong>결과가 0보다 크고 1보다 작은지 확인합니다.</strong> 유효하고 퇴화되지 않은 직각삼각형의 예각 기준각에서는 그 범위가 유일하게 합법적입니다.",
          "<strong>입력을 지우고 새로 계산하려면 Reset을 사용합니다.</strong>"
        ],
        "closingParagraphs": [
          "이 계산기는 인접변이나 각도 입력을 요구하지 않습니다. 나눗셈만 수행할 뿐, 저장된 기록도, 그래프도, 숨겨진 모드도 없습니다."
        ]
      },
      "sec-examples": {
        "h2": "사인 계산 단계별 예제",
        "blocks": [
          {
            "kind": "h3",
            "text": "예제 1: 3-4-5 직각삼각형"
          },
          {
            "kind": "p",
            "text": "[[a=3\\,\\text{cm}]], [[b=4\\,\\text{cm}]], [[c=5\\,\\text{cm}]]이 주어졌습니다."
          },
          {
            "kind": "p",
            "text": "[[\\sin(A)=\\frac{3}{5}]]"
          },
          {
            "kind": "p",
            "text": "[[\\boxed{\\sin(A)=0.6}]]"
          },
          {
            "kind": "p",
            "text": "대변은 빗변의 60퍼센트입니다."
          },
          {
            "kind": "h3",
            "text": "예제 2: 5-12-13 직각삼각형"
          },
          {
            "kind": "p",
            "text": "[[a=5\\,\\text{m}]], [[b=12\\,\\text{m}]], [[c=13\\,\\text{m}]]이 주어졌습니다."
          },
          {
            "kind": "p",
            "text": "[[\\sin(A)=\\frac{5}{13}]]"
          },
          {
            "kind": "p",
            "text": "[[\\boxed{\\sin(A)\\approx0.3846}]]"
          },
          {
            "kind": "p",
            "text": "대변은 빗변의 약 38.46퍼센트입니다."
          },
          {
            "kind": "h3",
            "text": "예제 3: 30-60-90 삼각형"
          },
          {
            "kind": "p",
            "text": "기준각 [[A=30^\\circ]]에서는 대변이 빗변의 절반입니다. [[a=1\\,\\text{cm}]], [[b=\\sqrt{3}\\,\\text{cm}]], [[c=2\\,\\text{cm}]]을 사용합니다."
          },
          {
            "kind": "p",
            "text": "[[\\sin(30^\\circ)=\\frac{1}{2}]]"
          },
          {
            "kind": "p",
            "text": "[[\\boxed{\\sin(30^\\circ)=0.5}]]"
          },
          {
            "kind": "p",
            "text": "유용한 특수각 결과입니다. 30도에서 대변은 빗변의 정확히 절반이므로, 이 삼각형이 교과서 문제에 자주 등장합니다."
          },
          {
            "kind": "h3",
            "text": "예제 4: 45-45-90 삼각형"
          },
          {
            "kind": "p",
            "text": "[[a=1\\,\\text{cm}]], [[b=1\\,\\text{cm}]], [[c=\\sqrt{2}\\,\\text{cm}]]이 주어졌습니다."
          },
          {
            "kind": "p",
            "text": "[[\\sin(45^\\circ)=\\frac{1}{\\sqrt{2}}]]"
          },
          {
            "kind": "p",
            "text": "[[\\boxed{\\sin(45^\\circ)\\approx0.7071}]]"
          },
          {
            "kind": "p",
            "text": "두 직각변이 같으면 두 예각의 사인과 코사인 값이 같습니다. 45도에서 각 예각은 길이 1인 직각변과 [[\\sqrt{2}]]인 빗변을 마주하므로 사인과 코사인이 일치합니다."
          }
        ]
      },
      "sec-applications": {
        "h2": "사인 비의 실생활 활용 예제",
        "blocks": [
          {
            "kind": "p",
            "text": "각 예제는 상황을 설명하고, 대변과 빗변을 확인한 뒤, 공식에 대입하고, 결과를 쉬운 말로 해석합니다."
          },
          {
            "kind": "h3",
            "text": "예제 5: 사다리의 사인 비 계산"
          },
          {
            "kind": "p",
            "text": "사다리의 길이가 5m이고 수직 벽을 따라 4m까지 닿습니다. 기준각 [[A]]는 사다리와 수평 지면 사이의 각입니다. 사다리가 빗변 [[c=5\\,\\text{m}]]이고, 수직 높이가 대변 [[a=4\\,\\text{m}]]입니다."
          },
          {
            "kind": "p",
            "text": "[[\\sin(A)=\\frac{4}{5}]]"
          },
          {
            "kind": "p",
            "text": "[[\\boxed{\\sin(A)=0.8}]]"
          },
          {
            "kind": "p",
            "text": "수직 높이는 사다리 길이의 80퍼센트입니다. 이 비는 사다리의 기하학을 설명할 뿐, 사다리가 안전하게 놓였는지를 판단하지 않습니다."
          },
          {
            "kind": "h3",
            "text": "예제 6: 지붕 서까래의 사인 비 계산"
          },
          {
            "kind": "p",
            "text": "지붕 서까래의 경사 길이는 6.5m, 수직 높이는 2.5m입니다. 서까래가 빗변 [[c=6.5\\,\\text{m}]]이고, 수직 높이가 대변 [[a=2.5\\,\\text{m}]]입니다."
          },
          {
            "kind": "p",
            "text": "[[\\sin(A)=\\frac{2.5}{6.5}]]"
          },
          {
            "kind": "p",
            "text": "[[\\boxed{\\sin(A)\\approx0.3846}]]"
          },
          {
            "kind": "p",
            "text": "수직 높이는 서까래 길이의 약 38.46퍼센트입니다. 이 비는 구조적 적합성이나 지붕 설계 기준 충족 여부를 판단하지 않습니다."
          },
          {
            "kind": "h3",
            "text": "예제 7: 경사로의 사인 비 평가"
          },
          {
            "kind": "p",
            "text": "단순화된 경사로의 경사 길이는 9.5m, 수직 높이는 0.75m입니다. 경사면이 빗변 [[c=9.5\\,\\text{m}]]이고, 수직 높이가 대변 [[a=0.75\\,\\text{m}]]입니다."
          },
          {
            "kind": "p",
            "text": "[[\\sin(A)=\\frac{0.75}{9.5}]]"
          },
          {
            "kind": "p",
            "text": "[[\\boxed{\\sin(A)\\approx0.07895}]]"
          },
          {
            "kind": "p",
            "text": "수직 높이는 경사 길이의 약 7.89퍼센트로 완만한 경사입니다. 이 비만으로는 접근성이나 건축 기준 충족 여부를 판단할 수 없습니다."
          },
          {
            "kind": "h3",
            "text": "예제 8: 측량 측정"
          },
          {
            "kind": "p",
            "text": "단순화된 측량 삼각형의 직선 거리는 50m, 수직 표고 차이는 30m입니다. 직선이 빗변 [[c=50\\,\\text{m}]]이고, 수직 차이가 대변 [[a=30\\,\\text{m}]]입니다."
          },
          {
            "kind": "p",
            "text": "[[\\sin(A)=\\frac{30}{50}]]"
          },
          {
            "kind": "p",
            "text": "[[\\boxed{\\sin(A)=0.6}]]"
          },
          {
            "kind": "p",
            "text": "수직 차이는 직선 거리의 60퍼센트입니다. 실제 측량에서는 추가 보정, 측기 높이 조정, 더 정밀한 측정이 필요할 수 있습니다."
          },
          {
            "kind": "h3",
            "text": "예제 9: 기둥을 지탱하는 지선"
          },
          {
            "kind": "p",
            "text": "지선의 길이는 13m이며, 부착 지점은 지상 앵커 수준보다 5m 위에 있습니다. 지선이 빗변 [[c=13\\,\\text{m}]]이고, 수직 간격이 대변 [[a=5\\,\\text{m}]]입니다."
          },
          {
            "kind": "p",
            "text": "[[\\sin(A)=\\frac{5}{13}]]"
          },
          {
            "kind": "p",
            "text": "[[\\boxed{\\sin(A)\\approx0.3846}]]"
          },
          {
            "kind": "p",
            "text": "수직 간격은 지선 길이의 약 38.46퍼센트입니다. 이 비는 지선의 장력, 앵커 강도, 구조 안전을 판단하지 않습니다."
          },
          {
            "kind": "h3",
            "text": "예제 10: 계단 현판의 사인 비 계산"
          },
          {
            "kind": "p",
            "text": "단순화된 계단 현판의 길이는 5m이고 수직 높이 3m를 잇습니다. 현판이 빗변 [[c=5\\,\\text{m}]]이고, 수직 높이가 대변 [[a=3\\,\\text{m}]]입니다."
          },
          {
            "kind": "p",
            "text": "[[\\sin(A)=\\frac{3}{5}]]"
          },
          {
            "kind": "p",
            "text": "[[\\boxed{\\sin(A)=0.6}]]"
          },
          {
            "kind": "p",
            "text": "수직 높이는 대각선 현판 길이의 60퍼센트입니다. 이 계산은 계단 치수나 건축 기준 충족 여부를 검증하지 않습니다."
          },
          {
            "kind": "h3",
            "text": "예제 11: 크레인 붐의 수직 성분 이해"
          },
          {
            "kind": "p",
            "text": "단순화된 크레인 붐의 길이는 10m, 수직 성분은 8m입니다. 붐이 빗변 [[c=10\\,\\text{m}]]이고, 수직 성분이 대변 [[a=8\\,\\text{m}]]입니다."
          },
          {
            "kind": "p",
            "text": "[[\\sin(A)=\\frac{8}{10}]]"
          },
          {
            "kind": "p",
            "text": "[[\\boxed{\\sin(A)=0.8}]]"
          },
          {
            "kind": "p",
            "text": "수직 성분은 붐 길이의 80퍼센트입니다. 이 비는 크레인 용량이나 작업 안전을 판단하지 않습니다."
          },
          {
            "kind": "h3",
            "text": "예제 12: 직선 비행 구간"
          },
          {
            "kind": "p",
            "text": "단순화된 비행 구간에서 항공기는 직선 경로를 따라 5km를 이동하며 1.5km를 상승합니다. 경로가 빗변 [[c=5\\,\\text{km}]]이고, 수직 상승이 대변 [[a=1.5\\,\\text{km}]]입니다."
          },
          {
            "kind": "p",
            "text": "[[\\sin(A)=\\frac{1.5}{5}]]"
          },
          {
            "kind": "p",
            "text": "[[\\boxed{\\sin(A)=0.3}]]"
          },
          {
            "kind": "p",
            "text": "수직 상승은 직선 경로 길이의 30퍼센트입니다. 이는 이상화된 기하학 예제이며 완전한 비행 항법 계산이 아닙니다."
          },
          {
            "kind": "h3",
            "text": "예제 13: 대각 기계 버팀목"
          },
          {
            "kind": "p",
            "text": "대각 버팀목의 길이는 2m, 수직 성분은 1.6m입니다. 버팀목이 빗변 [[c=2\\,\\text{m}]]이고, 수직 성분이 대변 [[a=1.6\\,\\text{m}]]입니다."
          },
          {
            "kind": "p",
            "text": "[[\\sin(A)=\\frac{1.6}{2}]]"
          },
          {
            "kind": "p",
            "text": "[[\\boxed{\\sin(A)=0.8}]]"
          },
          {
            "kind": "p",
            "text": "수직 성분은 버팀목 길이의 80퍼센트입니다. 이 비는 버팀목의 강도나 적합성을 판단하지 않습니다."
          },
          {
            "kind": "h3",
            "text": "예제 14: 등산로의 사인 비"
          },
          {
            "kind": "p",
            "text": "단순화된 직선 등산 구간의 경로 길이는 100m, 수직 표고 상승은 25m입니다. 경로가 빗변 [[c=100\\,\\text{m}]]이고, 표고 상승이 대변 [[a=25\\,\\text{m}]]입니다."
          },
          {
            "kind": "p",
            "text": "[[\\sin(A)=\\frac{25}{100}]]"
          },
          {
            "kind": "p",
            "text": "[[\\boxed{\\sin(A)=0.25}]]"
          },
          {
            "kind": "p",
            "text": "표고 상승은 직선 경로 길이의 25퍼센트입니다. 실제 등산로에는 굽은 구간과 변하는 경사가 있을 수 있습니다."
          },
          {
            "kind": "h3",
            "text": "예제 15: 차양 지지대"
          },
          {
            "kind": "p",
            "text": "차양 지지대의 길이는 3m, 수직 성분은 1.2m입니다. 지지대가 빗변 [[c=3\\,\\text{m}]]이고, 수직 성분이 대변 [[a=1.2\\,\\text{m}]]입니다."
          },
          {
            "kind": "p",
            "text": "[[\\sin(A)=\\frac{1.2}{3}]]"
          },
          {
            "kind": "p",
            "text": "[[\\boxed{\\sin(A)=0.4}]]"
          },
          {
            "kind": "p",
            "text": "수직 성분은 지지대 길이의 40퍼센트입니다. 이 계산은 구조적 적합성을 판단하지 않습니다."
          },
          {
            "kind": "h3",
            "text": "예제 16: 나무 꼭대기를 향한 시선"
          },
          {
            "kind": "p",
            "text": "나무 꼭대기를 향한 단순화된 시선의 길이는 20m입니다. 관찰자의 눈높이와 나무 꼭대기 사이의 수직 차이는 12m입니다. 시선이 빗변 [[c=20\\,\\text{m}]]이고, 수직 차이가 대변 [[a=12\\,\\text{m}]]입니다."
          },
          {
            "kind": "p",
            "text": "[[\\sin(A)=\\frac{12}{20}]]"
          },
          {
            "kind": "p",
            "text": "[[\\boxed{\\sin(A)=0.6}]]"
          },
          {
            "kind": "p",
            "text": "수직 차이는 시선 거리의 60퍼센트입니다. 관찰자의 눈높이와 필요한 다른 정보를 고려하지 않으면 나무의 지상 전체 높이는 알 수 없습니다."
          },
          {
            "kind": "p",
            "text": "사인은 단위가 있는 물리량이 아니라 수학적 비입니다. 수직 또는 수직 성분을 경사 거리와 비교하고, 각도를 알 때 성분을 계산하고, 기하학적 관계를 검증하는 데 실용적 가치가 있습니다. 사인 하나만으로 구조 안전, 하중 용량, 접근성, 공학적 적합성을 증명했다고 여기지 마세요."
          }
        ],
        "tables": [
          {
            "headers": ["상황", "대변 [[a]]", "빗변 [[c]]", "공식", "비", "의미"],
            "rows": [
              ["사다리", "4 m", "5 m", "4/5", "0.8", "높이는 사다리 길이의 80%"],
              ["지붕 서까래", "2.5 m", "6.5 m", "2.5/6.5", "0.3846", "높이는 서까래 길이의 38.46%"],
              ["경사로", "0.75 m", "9.5 m", "0.75/9.5", "0.07895", "완만한 경사, 7.89% 상승"],
              ["측량", "30 m", "50 m", "30/50", "0.6", "표고는 직선 거리의 60%"],
              ["지선", "5 m", "13 m", "5/13", "0.3846", "높이는 지선 길이의 38.46%"],
              ["계단 현판", "3 m", "5 m", "3/5", "0.6", "상승은 현판 길이의 60%"],
              ["크레인 붐", "8 m", "10 m", "8/10", "0.8", "수직 도달 범위는 붐의 80%"],
              ["비행 구간", "1.5 km", "5 km", "1.5/5", "0.3", "상승은 비행 경로의 30%"],
              ["대각 버팀목", "1.6 m", "2 m", "1.6/2", "0.8", "수직 성분은 버팀목의 80%"],
              ["등산로", "25 m", "100 m", "25/100", "0.25", "상승은 경로 길이의 25%"],
              ["차양 지지대", "1.2 m", "3 m", "1.2/3", "0.4", "수직 성분은 지지대의 40%"],
              ["시선", "12 m", "20 m", "12/20", "0.6", "높이 차이는 시선의 60%"]
            ]
          }
        ],
        "imgAlt": "네 패널: 사다리 비 0.8, 경사로 0.07895, 측량 0.6, 크레인 붐 0.8, 각각 표시된 직각삼각형 포함",
        "figcaption": "네 가지 실용 계산: 사다리, 경사로, 측량, 크레인 붐, 각각 삼각형, 공식, 비와 함께."
      },
      "sec-angle": {
        "h2": "사인과 각도 크기의 관계 이해하기",
        "blocks": [
          {
            "kind": "p",
            "text": "기준각이 커지면 사인도 커집니다. 기하학이 이유를 설명합니다. 각 [[A]]가 작으면 대변이 빗변에 비해 짧아 비가 0에 가깝습니다. 각이 넓어지면 대변이 빗변에서 차지하는 비중이 커져 비가 1을 향해 올라갑니다. [[30^\\circ]]에서는 사인이 정확히 0.5, [[45^\\circ]]에서는 약 0.7071, [[60^\\circ]]에서는 약 0.8660이며, 각도가 [[90^\\circ]]에 가까워지면 사인은 1에 접근합니다."
          }
        ],
        "tables": [
          {
            "headers": ["각 [[A]]", "사인 비", "해석"],
            "rows": [
              ["[[30^\\circ]]", "0.5", "대변은 빗변의 절반"],
              ["[[45^\\circ]]", "약 0.7071", "대변은 빗변의 약 70.71%"],
              ["[[60^\\circ]]", "약 0.8660", "대변은 빗변의 약 86.60%"],
              ["[[80^\\circ]]", "약 0.9848", "대변은 빗변의 약 98.48%"]
            ]
          }
        ],
        "closingParagraphs": [
          "패턴은 단순하고 단조롭습니다. 각도가 조금이라도 커지면 사인이 올라가고, 비는 모든 예각에 대해 0과 1 사이에 머뭅니다. 사인은 절대적인 크기가 아니라 삼각형의 모양을 설명합니다. 예각이 같은 두 삼각형은 변의 길이가 달라도 사인 비가 같습니다. [[90^\\circ]] 항목은 한계 기준값일 뿐, 퇴화되지 않은 직각삼각형의 예각이 아닙니다."
        ],
        "imgAlt": "30, 45, 60도 삼각형 세 개, 사인 값 0.5, 0.7071, 0.8660, 각도가 커질수록 사인 증가",
        "figcaption": "각 A가 커지면 대변이 빗변에서 차지하는 비중이 커지므로 sin(A)가 증가합니다."
      },
      "sec-hypotenuse": {
        "h2": "사인을 이용한 대변 구하기",
        "blocks": [
          {
            "kind": "p",
            "text": "빗변과 각도를 알 때 대변을 구하려면 사인 공식을 변형합니다. [[\\sin(A)=a/c]]에서 양변에 [[c]]를 곱합니다."
          },
          {
            "kind": "p",
            "text": "[[[\\boxed{a=c\\sin(A)}]]]"
          },
          {
            "kind": "p",
            "text": "대변은 빗변에 각도의 사인을 곱한 것과 같습니다. 빗변 [[c=10\\,\\text{m}]], 각도 [[A=30^\\circ]]이고, [[\\sin(30^\\circ)=0.5]]임을 알 때:"
          },
          {
            "kind": "p",
            "text": "[[a=10\\times0.5]]"
          },
          {
            "kind": "p",
            "text": "[[\\boxed{a=5\\,\\text{m}}]]"
          },
          {
            "kind": "p",
            "text": "[[30^\\circ]] 각도에서 대변은 빗변의 절반이며, 이는 30-60-90 기하학과 일치합니다. 30도 맞은편 변은 빗변의 정확히 절반입니다."
          },
          {
            "kind": "p",
            "text": "빗변도 다시 변형하면 같은 방식으로 구할 수 있습니다."
          },
          {
            "kind": "p",
            "text": "[[[\\boxed{c=\\frac{a}{\\sin(A)}}]]]"
          },
          {
            "kind": "p",
            "text": "대변 [[a=6\\,\\text{m}]], [[A=30^\\circ]]일 때: [[c=6/0.5]]이므로 [[\\boxed{c=12\\,\\text{m}}]]입니다. 같은 공식의 수학적 변형입니다. 이 페이지의 계산기는 변의 길이로부터 사인 비를 반환하며, 빠진 변을 직접 계산하지는 않습니다."
          }
        ]
      },
      "sec-recover": {
        "h2": "사인 비로부터 각도 구하기",
        "blocks": [
          {
            "kind": "p",
            "text": "사인 비와 각도는 다른 양입니다. 하나는 무차원의 변 비교이고, 다른 하나는 도 단위로 측정됩니다. 사인 비를 알고 각도가 필요하면 역사인을 사용할 수 있습니다."
          },
          {
            "kind": "p",
            "text": "[[[\\boxed{A=\\sin^{-1}\\left(\\frac{a}{c}\\right)}]]]"
          },
          {
            "kind": "p",
            "text": "역사인은 아크사인이라고도 합니다. [[\\sin(A)=0.6]]이 주어지면:"
          },
          {
            "kind": "p",
            "text": "[[A=\\sin^{-1}(0.6)]]"
          },
          {
            "kind": "p",
            "text": "[[\\boxed{A\\approx36.87^\\circ}]]"
          },
          {
            "kind": "p",
            "text": "계산기가 도 모드일 때 각도는 약 [[36.87^\\circ]]입니다. 이는 사인 비 계산기가 직접 수행하는 것이 아니라 별도의 각도 계산입니다. 넓은 삼각함수에서는 역사인에 여러 각도 해가 있을 수 있지만, 직각삼각형의 예각 제한이 적절한 예각 해를 선택합니다."
          }
        ]
      },
      "sec-mistakes": {
        "h2": "사인 계산 시 흔한 실수",
        "blocks": [
          {
            "kind": "p",
            "text": "사인 오류의 대부분은 뒤집힌 분수, 잘못 붙인 변 이름, 단위 실수에서 옵니다. 결과를 믿기 전에 이 목록을 확인하세요."
          }
        ],
        "steps": [
          "<strong>대변 대신 인접변을 사용하기.</strong> [[b/c]]를 나누면 코사인이 계산됩니다. [[a=3]], [[b=4]], [[c=5]]일 때 잘못된 변은 0.8을, 올바른 변은 0.6을 줍니다.",
          "<strong>공식을 뒤집어 [[a/c]] 대신 [[c/a]]를 계산하기.</strong> 사인이 아니라 코시컨트가 나옵니다. [[a=3]], [[c=5]]일 때 뒤집힌 분수는 1.6667을 주며, 항상 1을 넘어 명확한 경고 신호입니다.",
          "<strong>사인과 코사인 혼동하기.</strong> 사인은 대변을, 코사인은 인접변을 사용합니다. 분자에 잘못된 변이 들어가면 답은 사인이 아니라 코사인입니다.",
          "<strong>사인과 코시컨트 혼동하기.</strong> 코시컨트는 역수, 즉 빗변을 대변으로 나눈 것입니다. 이름이 비슷해 실제 오류가 생기지만, 분수 순서는 정확히 반대입니다.",
          "<strong>빗변보다 긴 대변 입력하기.</strong> 빗변은 항상 가장 긴 변입니다. [[a \\ge c]]라면 입력이 뒤바뀌었거나 삼각형이 불가능합니다.",
          "<strong>0이나 음수 변 길이 입력하기.</strong> 삼각형의 변이 0이거나 음수일 수 없으므로, 이런 입력은 유효한 경계 경우가 아니라 데이터 입력 오류나 빠진 측정의 신호입니다.",
          "<strong>측정 단위 섞기.</strong> 대변 3m에 빗변 50cm를 쓰면 6이라는 무의미한 숫자가 나옵니다. 먼저 하나의 단위로 변환하세요. 3m와 5m는 올바른 0.6을 줍니다.",
          "<strong>사인 비를 도 단위 각도로 보고하기.</strong> 0.6이라는 결과는 비이지 [[0.6^\\circ]]가 아닙니다. 이를 도 단위로 취급하면 이후 모든 계산에 엉터리가 들어갑니다.",
          "<strong>사인에 물리적 단위가 있다고 가정하기.</strong> 나눗셈에서 단위가 약분되므로 \"0.6 m\"는 틀렸습니다. 그냥 숫자를 쓰고 단위는 제자리에 있는 입력 측정값에 둡니다.",
          "<strong>기준각과 직각 혼동하기.</strong> 사인은 항상 예각을 사용합니다. [[90^\\circ]] 각은 이 계산에서 기준각 [[A]]가 절대 아닙니다.",
          "<strong>너무 일찍 반올림하기.</strong> 중간 나눗셈을 소수 둘째 자리로 반올림한 뒤 계산을 이어가면 오차가 커집니다. 모든 단계에서 전체 정밀도를 유지하고 최종 답만 반올림합니다.",
          "<strong>모든 각도의 사인이 같다고 가정하기.</strong> 각 각도마다 고유의 사인 값이 있습니다. 0.6이라는 결과는 하나의 특정 각도(약 36.87도)에 속하며, 모든 직각삼각형에 해당하는 것이 아닙니다.",
          "<strong>사인 값 0.6이 각도 [[0.6^\\circ]]라는 뜻이라고 가정하기.</strong> 비는 도 단위 측정이 아닙니다. 각도 자체가 필요하면 역사인으로 변환하세요.",
          "<strong>사인의 역수와 역사인 혼동하기.</strong> [[1/\\sin(A)]]는 코시컨트, 즉 비이고, [[\\sin^{-1}]]는 각도를 반환하는 역사인입니다. 이름이 비슷해 실제 오류가 생기므로 표기법을 주의 깊게 읽으세요.",
          "<strong>사인 비가 삼각형의 절대적 크기를 정한다고 가정하기.</strong> 사인은 크기가 아니라 모양을 설명합니다. 대변 3cm부터 3km까지 무한히 많은 삼각형이 사인 0.6을 공유합니다. 비는 비율을 정하고, 실제 길이에는 최소 하나의 변 측정이 필요합니다."
        ],
        "closingParagraphs": [
          "<strong>틀림 vs 맞음: 풀이 비교</strong>",
          "대변 [[a=3]], 빗변 [[c=5]]가 주어졌습니다.",
          "<strong>틀림:</strong> [[5/3\\approx1.6667]]. 사인 비가 아니라 코시컨트 비입니다. 분자와 분모가 뒤바뀌었습니다.",
          "<strong>맞음:</strong> [[\\sin(A)=3/5=0.6]].",
          "<strong>확인:</strong> [[\\csc(A)=1/0.6\\approx1.6667]]. 역수 검사로 결과가 확인되며, 답은 0과 1 사이에 있어 유효한 사인이 갖춰야 할 조건을 만족합니다."
        ]
      },
      "sec-verify": {
        "h2": "사인 결과의 유효성 확인 방법",
        "blocks": [
          {
            "kind": "p",
            "text": "유효하고 퇴화되지 않은 직각삼각형은 양수 변과, 빗변이 엄격히 가장 길다는 조건 [[0 \\lt a \\lt c]]를 요구하므로, 사인 결과는 0과 1 사이에 있어야 합니다."
          },
          {
            "kind": "p",
            "text": "[[[\\boxed{0 \\lt \\frac{a}{c} \\lt 1}]]]"
          },
          {
            "kind": "p",
            "text": "두 측정값은 호환되는 단위를 써야 합니다. 0 이하이거나 1 이상인 결과는 보통 유효하지 않은 입력, 뒤바뀐 변, 잘못된 삼각형 모델을 나타냅니다."
          },
          {
            "kind": "h3",
            "text": "방법 1: 비 확인"
          },
          {
            "kind": "p",
            "text": "[[\\sin(A)=a/c]]를 직접 다시 확인합니다. [[a=3]], [[c=5]]일 때: [[\\sin(A)=3/5=0.6]]. 두 번째 손 계산이 다르면 변 이름이 잘못 붙었거나 단위가 섞인 것입니다."
          },
          {
            "kind": "h3",
            "text": "방법 2: 피타고라스 정리 확인"
          },
          {
            "kind": "p",
            "text": "인접변이 필요하면 [[b=\\sqrt{c^2-a^2}]]를 계산합니다. [[a=3]], [[c=5]]일 때: [[b=\\sqrt{25-9}=4]], 그리고 [[3^2+4^2=5^2]]. 3-4-5 직각삼각형의 치수가 확인됩니다. 인접변은 여기서 검증용 값일 뿐, 기본 사인 공식의 일부가 아닙니다."
          },
          {
            "kind": "h3",
            "text": "방법 3: 역사인으로 확인"
          },
          {
            "kind": "p",
            "text": "사인 비 0.6에 대해: [[A=\\sin^{-1}(0.6)\\approx36.87^\\circ]]. 사인이 0.5보다 살짝 위에 있으므로 각도는 [[30^\\circ]]보다 약간 위에 나와야 합니다. 그렇지 않다면 변 이름이 뒤바뀐 것일 가능성이 큽니다. 반올림으로 작은 차이가 생길 수 있습니다."
          }
        ]
      },
      "sec-vs": {
        "h2": "사인 vs 코사인, 탄젠트, 코시컨트",
        "blocks": [
          {
            "kind": "p",
            "text": "각 비는 같은 기준각과 변 이름을 사용하면서 서로 다른 변 쌍을 비교합니다."
          },
          {
            "kind": "p",
            "text": "사인과 코시컨트는 역수 쌍입니다. [[\\csc(A)=1/\\sin(A)]]. [[\\sin(A)=0.6]]이면 [[\\csc(A)\\approx1.6667]]입니다. 빗변에 대한 대변이 알려졌을 때, 수직 성분을 경사 길이와 비교해야 할 때, 또는 SOH가 맞는 암기법일 때는 사인을 사용합니다. 빗변에 대한 인접변에는 코사인, 두 직각변이 모두 알려졌을 때는 탄젠트, 빗변을 대변과 비교할 때는 코시컨트를 사용합니다."
          },
          {
            "kind": "p",
            "text": "인접한 비는 <a href=\"/cosine-ratio-calculator/\" class=\"text-primary hover:underline\">코사인 비 계산기</a>, <a href=\"/tangent-ratio-calculator/\" class=\"text-primary hover:underline\">탄젠트 비 계산기</a>, <a href=\"/cosecant-ratio-calculator/\" class=\"text-primary hover:underline\">코시컨트 비 계산기</a>, <a href=\"/secant-ratio-calculator/\" class=\"text-primary hover:underline\">시컨트 비 계산기</a>, <a href=\"/cotangent-ratio-calculator/\" class=\"text-primary hover:underline\">코탄젠트 비 계산기</a>를 참조하세요."
          }
        ],
        "tables": [
          {
            "headers": ["비", "공식", "비교하는 것"],
            "rows": [
              ["사인", "sin(A) = a/c", "대변과 빗변"],
              ["코사인", "cos(A) = b/c", "인접변과 빗변"],
              ["탄젠트", "tan(A) = a/b", "대변과 인접변"],
              ["코시컨트", "csc(A) = c/a", "빗변과 대변"],
              ["시컨트", "sec(A) = c/b", "빗변과 인접변"],
              ["코탄젠트", "cot(A) = b/a", "인접변과 대변"]
            ]
          }
        ]
      },
      "sec-related": {
        "h2": "관련 삼각함수 계산기 살펴보기",
        "related": [
          {
            "name": "코사인 비 계산기"
          },
          {
            "name": "탄젠트 비 계산기"
          },
          {
            "name": "코시컨트 비 계산기"
          },
          {
            "name": "시컨트 비 계산기"
          },
          {
            "name": "코탄젠트 비 계산기"
          },
          {
            "name": "직각삼각형 각도 계산기"
          }
        ]
      },
      "sec-conclusion": {
        "h2": "사인 비를 자신 있게 활용하세요",
        "blocks": [
          {
            "kind": "p",
            "text": "사인은 세 가지 주요 비 중 첫 번째입니다. 대변을 빗변으로 나누면 각 맞은편에 있는 가장 긴 변의 비율이 설명됩니다. 공식 [[\\sin(A)=a/c]]는 두 번의 측정만 필요하고, 답은 항상 0과 1 사이의 무차원 숫자이며, 기준각이 커질수록 증가합니다. 빠진 변이 필요하면 [[a=c\\sin(A)]]로 대변을 구하고, 각도가 필요하면 [[A=\\sin^{-1}(a/c)]]로 구합니다. 사다리, 서까래, 경사로, 교과서의 3-4-5, 방법은 절대 바뀌지 않습니다. 대변을 확인하고, 빗변을 확인하고, 나누고, 0부터 1까지의 범위로 검증합니다."
          }
        ]
      }
    },
    "faqs": [
      {
        "question": "직각삼각형의 사인 공식은 무엇인가요?",
        "answer": "sin(A) = a / c: 대변 a를 빗변 c로 나눕니다. 대변이 3cm, 빗변이 5cm이면 결과는 3/5 = 0.6입니다. 이 소수가 완전한 답이며, 무차원 비이지 각도가 아닙니다."
      },
      {
        "question": "두 변의 길이로 사인을 계산하는 방법은?",
        "answer": "기준각 A를 확인하고, 대변 a와 빗변 c를 같은 단위로 측정합니다. 둘 다 양수이고 c가 a보다 긴지 확인한 뒤 나눕니다. sin(A) = a / c. 이 페이지에서는 첫 번째 입력란에 대변을, 두 번째 입력란에 빗변을 입력하고 Calculate sin(A)를 클릭합니다."
      },
      {
        "question": "사인과 코사인의 차이는 무엇인가요?",
        "answer": "사인은 대변을 빗변으로 나누고(a/c), 코사인은 인접변을 빗변으로 나눕니다(b/c). 둘 다 같은 빗변을 사용하지만 분자가 다릅니다. 결과가 1을 넘으면 분수가 뒤집혔거나 변 이름이 잘못 붙은 것입니다."
      },
      {
        "question": "직각삼각형의 예각에서 사인이 1보다 작은 이유는?",
        "answer": "유효하고 퇴화되지 않은 직각삼각형에서 빗변은 어느 직각변보다 엄격히 길므로 0 < a < c입니다. 작은 길이를 큰 길이로 나누면 항상 1보다 작은 결과가 나옵니다. 모든 예각 기준각에 대해 0 < a/c < 1입니다."
      },
      {
        "question": "유효한 직각삼각형의 예각에서 사인이 1이 될 수 있나요?",
        "answer": "아닙니다. 사인이 정확히 1이 되려면 대변이 빗변과 같아야 하며, 그러면 삼각형이 너비 없는 수직선으로 붕괴합니다. 1은 각 A가 90도에 가까워질 때 접근하는 한계값일 뿐, 진짜 삼각형이 만들어내는 값이 아닙니다."
      },
      {
        "question": "사인 값 0.6은 무슨 의미인가요?",
        "answer": "대변이 빗변의 60퍼센트라는 뜻입니다. 3-4-5 삼각형에서는 각 A 맞은편 변이 3단위, 빗변이 5단위이므로 sin(A) = 3/5 = 0.6입니다. 삼각형의 모양을 설명하며, 0.6도라는 각도가 아닙니다."
      },
      {
        "question": "사인 비에 측정 단위가 있나요?",
        "answer": "없습니다. 두 입력은 모두 같은 단위로 잰 길이이므로 단위가 약분됩니다. 3 m / 5 m = 0.6은 300 cm / 500 cm = 0.6과 같습니다. 사인은 그냥 숫자로 보고하며, 도, 미터, 피트를 절대 붙이지 않습니다."
      },
      {
        "question": "사인 비로부터 각도를 구하는 방법은?",
        "answer": "비에 역사인을 적용합니다. A = sin^-1(a/c). sin(A) = 0.6이면 A = sin^-1(0.6), 약 36.87도입니다. 먼저 공학용 계산기를 도 모드로 설정하세요. 이 페이지의 계산기는 각도가 아니라 비를 반환합니다."
      },
      {
        "question": "사인으로 대변을 구하는 방법은?",
        "answer": "공식을 a = c * sin(A)로 변형합니다. 빗변이 10m, 각 A가 30도이면 sin(30 deg) = 0.5이므로 a = 10 * 0.5 = 5 m입니다. 이는 수동 변형이며, 이 페이지의 계산기는 변의 길이로부터 비를 반환할 뿐 빠진 변을 구하지 않습니다."
      },
      {
        "question": "사인과 코시컨트의 차이는 무엇인가요?",
        "answer": "사인은 대변을 빗변으로 나누고(a/c), 코시컨트는 그 역수인 빗변을 대변으로 나눕니다(c/a). sin(A) = 0.6이면 csc(A) = 1/0.6, 약 1.6667입니다. 둘은 역수 관계이며 공식을 서로 바꿔 쓸 수 없습니다."
      },
      {
        "question": "인접변을 모르고도 사인을 계산할 수 있나요?",
        "answer": "네. 기본 사인 공식은 대변과 빗변만 사용하므로 인접변은 계산에 전혀 들어가지 않습니다. 인접변은 피타고라스 정리로 삼각형을 검증하거나, 코사인, 탄젠트, 시컨트가 필요한 경우에만 유용합니다."
      },
      {
        "question": "사인은 실제 측정에서 어떻게 사용되나요?",
        "answer": "사인은 수직 또는 수직 성분을 경사 길이와 비교합니다. 벽 높이에 대한 사다리, 수직 높이에 대한 지붕 서까래, 높이에 대한 경사로, 표고 차이에 대한 측량선이 그 예입니다. 이 비는 경사 거리 중 수직인 부분이 얼마인지 알려주므로 높이, 간격, 성분 계산에 유용합니다."
      }
    ],
    "faqHeading": "자주 묻는 질문",
    "relatedHeading": "관련 삼각함수 계산기 살펴보기"
  },
  "ms": {
    "tocHeading": "Dalam Panduan Ini",
    "tocItems": {
      "sec-intro": "Apakah Itu Kalkulator Nisbah Sinus?",
      "sec-triangle": "Memahami Sisi Bertentangan dan Hipotenus",
      "sec-whatis": "Memahami Nisbah Sinus",
      "sec-formula": "Bagaimana Formula Sinus Berfungsi",
      "sec-howto": "Cara Menggunakan Kalkulator Nisbah Sinus",
      "sec-examples": "Contoh Langkah demi Langkah Mengira Sinus",
      "sec-applications": "Contoh Sebenar Menggunakan Nisbah Sinus",
      "sec-angle": "Memahami Hubungan antara Sinus dengan Saiz Sudut",
      "sec-hypotenuse": "Cara Mencari Sisi Bertentangan Menggunakan Sinus",
      "sec-recover": "Cara Mencari Sudut daripada Nisbah Sinus",
      "sec-mistakes": "Kesilapan Lazim Semasa Mengira Sinus",
      "sec-verify": "Cara Menyemak Sama Ada Hasil Sinus Anda Sah",
      "sec-vs": "Sinus lawan Kosinus, Tangen dan Kosekan",
      "sec-related": "Terokai Kalkulator Trigonometri Berkaitan",
      "sec-faq": "Soalan Lazim"
    },
    "sections": {
      "sec-intro": {
        "h2": "Apakah Itu Kalkulator Nisbah Sinus?",
        "blocks": [
          {
            "kind": "p",
            "text": "Kalkulator nisbah sinus menjawab satu soalan: untuk sudut tirus dalam segi tiga bersudut tepat, bagaimanakah sisi yang terletak bertentangan dengan sudut itu berbanding dengan sisi terpanjang? Masukkan sisi bertentangan dan hipotenus, dan alat ini akan membahagikan sisi bertentangan dengan hipotenus, lalu memaparkan [[\\sin(A)=a/c]]. Sebuah segi tiga bersudut tepat mempunyai sisi bertentangan 3 cm dan hipotenus 5 cm, jadi [[\\sin(A)=3/5=0.6]]. Angka 0.6 itu ialah nisbah sinus: ia memberitahu anda sisi bertentangan itu adalah 60 peratus daripada hipotenus. Ia bukan sudut, jadi jangan sekali-kali membacanya sebagai [[0.6^\\circ]]. Sisi bersebelahan tidak terlibat dalam pengiraan ini; sisi bertentangan dan hipotenus sahaja sudah mencukupi. Sinus ialah salah satu nisbah trigonometri asas, dan kekuatannya ialah ia membandingkan dua panjang dalam cara yang hanya bergantung pada sudut, bukan pada saiz segi tiga. Jika yang anda perlukan ialah sudut dalam darjah, sinus songsang akan menukar nisbah itu kepada darjah."
          }
        ]
      },
      "sec-triangle": {
        "h2": "Memahami Sisi Bertentangan dan Hipotenus",
        "blocks": [
          {
            "kind": "h3",
            "text": "Apakah Segi Tiga Bersudut Tepat?"
          },
          {
            "kind": "p",
            "text": "Segi tiga bersudut tepat mempunyai satu sudut tepat [[90^\\circ]], iaitu sudut antara dua garis serenjang, seperti dinding yang bertemu lantai yang rata. Hipotenus terletak bertentangan dengan sudut tepat itu dan sentiasa merupakan sisi terpanjang, kerana ia mesti merentasi pepenjuru penuh di seberang sudut itu. Dua sudut yang lain berkongsi baki 90 darjah, jadi kedua-duanya ialah sudut tirus. Dua kaki bertemu pada sudut tepat, berserenjang antara satu sama lain, dan hubungan mereka dengan hipotenuslah yang menjadikan trigonometri segi tiga bersudut tepat boleh dilakukan."
          },
          {
            "kind": "h3",
            "text": "Apakah Sisi Bertentangan?"
          },
          {
            "kind": "p",
            "text": "Sisi bertentangan [[a]] ialah sisi yang terletak tepat di seberang sudut rujukan [[A]], satu-satunya sisi yang tidak pernah menyentuh bucu sudut itu. Dalam masalah praktikal, ia sering memainkan peranan sebagai kenaikan menegak, perbezaan ketinggian, atau komponen serenjang: ketinggian dinding yang dicapai oleh tangga, kenaikan menegak tanjakan, atau perbezaan ketinggian dalam ukur. Sisi yang dikira sebagai bertentangan bergantung pada sudut rujukan yang dipilih, jadi bertukar daripada sudut [[A]] kepada sudut [[C]] akan menukar label sisi bertentangan dan sisi bersebelahan. Ia muncul dalam pengangka formula sinus kerana sinus mengukur betapa besarnya sisi di seberang sudut itu berbanding hipotenus."
          },
          {
            "kind": "h3",
            "text": "Apakah Hipotenus?"
          },
          {
            "kind": "p",
            "text": "Hipotenus [[c]] ialah sisi yang bertentangan dengan sudut tepat: dalam mana-mana rajah ia menghadap petak kecil yang menandakan sudut [[90^\\circ]], dan ia adalah lebih panjang daripada mana-mana kaki. Dalam masalah praktikal, ia sering memainkan peranan sebagai panjang cerun: tangga, permukaan tanjakan, kasau, kabel, penguat pepenjuru, atau laluan lurus. Ia muncul dalam penyebut formula sinus, yang menjelaskan mengapa setiap nilai sinus terletak antara 0 dengan 1: pengangka sentiasa merupakan kaki yang sebenar, lebih pendek daripada penyebut."
          },
          {
            "kind": "h3",
            "text": "Apakah Sisi Bersebelahan?"
          },
          {
            "kind": "p",
            "text": "Sisi bersebelahan [[b]] ialah kaki yang menyentuh sudut rujukan [[A]] tanpa menjadi hipotenus. Ia tidak memainkan sebarang peranan dalam pengiraan sinus utama, yang menjelaskan mengapa kalkulator tidak pernah memintanya. Ia menjadi berguna semasa mengira kosinus, tangen, atau sisi yang hilang, dan apabila teorem Pythagoras digunakan untuk mengesahkan bahawa dua panjang yang diketahui membentuk segi tiga bersudut tepat yang sebenar."
          }
        ],
        "imgAlt": "Segi tiga bersudut tepat dengan sudut A di kiri bawah, sisi bertentangan a emas, hipotenus c biru, sin(A)=a/c",
        "figcaption": "Sudut A terletak di kiri bawah; sinus menggunakan sisi bertentangan a berwarna emas dan hipotenus c berwarna biru, bukan sisi bersebelahan b."
      },
      "sec-whatis": {
        "h2": "Memahami Nisbah Sinus",
        "blocks": [
          {
            "kind": "p",
            "text": "Sinus bagi sudut tirus membandingkan sisi yang terletak tepat di seberang sudut itu dengan sisi terpanjang segi tiga:"
          },
          {
            "kind": "p",
            "text": "[[[\\boxed{\\sin(A)=\\frac{a}{c}}]]]"
          },
          {
            "kind": "p",
            "text": "Baca [[\\sin(A)]] sebagai \"sinus bagi sudut A\". Pengangka [[a]] ialah sisi bertentangan; penyebut [[c]] ialah hipotenus. Pecahan itu menjawab satu soalan yang konkrit: berapa bahagian hipotenus yang membentuk sisi bertentangan itu? Oleh kerana kedua-dua entri ialah panjang yang diukur dalam unit yang sama, hasilnya ialah nombor biasa, dan nombor itu hanya bergantung pada sudut, tidak pernah pada saiz segi tiga."
          },
          {
            "kind": "h3",
            "text": "Memahami SOH-CAH-TOA"
          },
          {
            "kind": "p",
            "text": "Pelajar mengingati tiga nisbah utama dengan mnemonik SOH-CAH-TOA:"
          },
          {
            "kind": "p",
            "text": "<strong>SOH:</strong> Sinus = Bertentangan / Hipotenus. <strong>CAH:</strong> Kosinus = Bersebelahan / Hipotenus. <strong>TOA:</strong> Tangen = Bertentangan / Bersebelahan."
          },
          {
            "kind": "p",
            "text": "SOH sepadan secara langsung dengan formula sinus [[\\sin(A)=a/c]]. Mnemonik ini berfungsi kerana ia memasangkan setiap nama nisbah dengan dua sisi yang diperlukannya, dalam susunan yang betul: untuk sinus, sisi bertentangan berada di atas dan hipotenus di bawah. Setelah kedua-dua sisi dinamakan dengan betul, mnemonik itu menukar \"sisi mana berada di mana\" daripada masalah hafalan kepada carian mudah."
          },
          {
            "kind": "h3",
            "text": "Mengapa Sinus Ialah Nisbah"
          },
          {
            "kind": "p",
            "text": "Membahagikan dua panjang menghasilkan nombor tanpa dimensi kerana unit-unitnya saling membatalkan:"
          },
          {
            "kind": "p",
            "text": "[[[\\frac{3\\,\\text{m}}{5\\,\\text{m}}=0.6]]]"
          },
          {
            "kind": "p",
            "text": "Meter-metermu membatal, meninggalkan 0.6. Menggunakan 300 cm dan 500 cm memberikan hasil yang sama, kerana kedua-dua panjang berskala bersama. Satu-satunya syarat ialah unit yang serasi: kedua-dua ukuran mesti menggunakan unit yang sama, atau satu mesti ditukar sebelum dibahagikan. Nisbah itu oleh itu merupakan sifat sudut, bukan sifat pembaris tertentu yang digunakan untuk mengukur segi tiga."
          },
          {
            "kind": "h3",
            "text": "Apakah Maksud Nilai Sinus 0.6?"
          },
          {
            "kind": "p",
            "text": "[[\\sin(A)=0.6]] bermaksud sisi bertentangan ialah 60 peratus daripada hipotenus. Segi tiga 3-4-5 ialah rujukan klasik: [[\\sin(A)=3/5=0.6]]. Nombor itu mendedahkan bentuk segi tiga sepintas lalu: sinus yang hampir dengan 1 bermaksud sisi bertentangan hampir menyamai hipotenus dan sudutnya curam; sinus yang hampir dengan 0 bermaksud sisi bertentangan pendek berbanding hipotenus dan sudutnya landai. Tiada satu pun daripada ini menunjukkan bahawa 0.6 ialah sudut; ia ialah perkadaran, dan hanya sinus songsang yang menukarkannya kepada darjah."
          },
          {
            "kind": "h3",
            "text": "Mengapa Sinus Terletak antara 0 dengan 1"
          },
          {
            "kind": "p",
            "text": "Hipotenus lebih panjang daripada sisi bertentangan, jadi [[0 \\lt a \\lt c]], dan oleh itu:"
          },
          {
            "kind": "p",
            "text": "[[[\\boxed{0 \\lt \\frac{a}{c} \\lt 1}]]]"
          },
          {
            "kind": "p",
            "text": "Segi tiga bersudut tepat yang sah dan tidak merosot tidak boleh mempunyai nisbah sinus tepat 0 atau tepat 1 untuk sudut tirusnya. Nilai itu menghampiri 0 apabila sudut menghampiri [[0^\\circ]], kerana sisi bertentangan mengecut menghampiri tiada; ia menghampiri 1 apabila sudut menghampiri [[90^\\circ]], kerana sisi bertentangan membesar sehingga hampir menyamai hipotenus. Tiada satu pun nilai had ini dicapai oleh sudut tirus segi tiga sebenar."
          },
          {
            "kind": "h3",
            "text": "Sinus lawan Kosinus"
          },
          {
            "kind": "p",
            "text": "Dua nisbah itu berkongsi hipotenus yang sama tetapi menggunakan pengangka yang berbeza:"
          },
          {
            "kind": "p",
            "text": "[[\\sin(A)=a/c]] dan [[\\cos(A)=b/c]]."
          },
          {
            "kind": "p",
            "text": "Sinus menggunakan sisi bertentangan, kaki yang terletak di seberang sudut; kosinus menggunakan sisi bersebelahan, kaki yang terletak di sebelah sudut. Hasil yang melebihi 1 bermaksud pecahan itu telah diterbalikkan atau hipotenus telah diletakkan dalam pengangka. Sinus bukan salingan kosinus: salingan sinus ialah kosekan."
          }
        ],
        "imgAlt": "Tiga langkah: label a=3, b=4, c=5 pada segi tiga, gunakan sin(A)=a/c, dapat 0.6, bermaksud 60 peratus",
        "figcaption": "Kenal pasti sisi-sisinya, gunakan formula, dan kira: sisi bertentangan ialah 60 peratus daripada hipotenus."
      },
      "sec-formula": {
        "h2": "Bagaimana Formula Sinus Berfungsi",
        "blocks": [
          {
            "kind": "p",
            "text": "Formula ini mengikut urutan yang logik. Mulakan dengan definisi dalam perkataan:"
          },
          {
            "kind": "p",
            "text": "[[[\\sin(A)=\\frac{\\text{Opposite}}{\\text{Hypotenuse}}]]]"
          },
          {
            "kind": "p",
            "text": "Kemudian gunakan tatatanda halaman sedia ada, dengan [[a]] untuk sisi bertentangan dan [[c]] untuk hipotenus:"
          },
          {
            "kind": "p",
            "text": "[[[\\boxed{\\sin(A)=\\frac{a}{c}}]]]"
          },
          {
            "kind": "p",
            "text": "Sisi bertentangan berada dalam pengangka kerana sinus mengukur saiz sisi itu berbanding hipotenus; hipotenus berada dalam penyebut kerana ia ialah panjang rujukan yang menjadi pembanding bagi setiap sisi lain. Susunannya adalah tetap: pengangka bertanya \"sebesar mana kaki ini?\", penyebut menjawab \"berbanding dengan apa?\"."
          },
          {
            "kind": "h3",
            "text": "Contoh Dikerjakan Sepenuhnya: Segi Tiga Bersudut Tepat 3-4-5"
          },
          {
            "kind": "p",
            "text": "Diberi [[a=3\\,\\text{cm}]], [[b=4\\,\\text{cm}]], dan [[c=5\\,\\text{cm}]]:"
          },
          {
            "kind": "p",
            "text": "<strong>Langkah 1:</strong> Tulis formula. [[\\sin(A)=a/c]]"
          },
          {
            "kind": "p",
            "text": "<strong>Langkah 2:</strong> Gantikan nilai-nilai yang diketahui. [[\\sin(A)=3/5]]"
          },
          {
            "kind": "p",
            "text": "<strong>Langkah 3:</strong> Bahagikan. [[\\boxed{\\sin(A)=0.6}]]"
          },
          {
            "kind": "p",
            "text": "<strong>Langkah 4:</strong> Tafsir hasilnya. Sisi bertentangan ialah 60 peratus daripada hipotenus."
          },
          {
            "kind": "p",
            "text": "<strong>Langkah 5:</strong> Sahkan segi tiga. [[3^2+4^2=5^2]], dan [[9+16=25]]. Semakan Pythagoras mengesahkan bahawa panjang-panjang sisi ini membentuk segi tiga bersudut tepat, jadi hasil sinus boleh dipercayai."
          },
          {
            "kind": "h3",
            "text": "Penjelasan Penting"
          },
          {
            "kind": "p",
            "text": "Jika pembaca mahukan sudut dan bukannya nisbah sinusnya, sinus songsang diperlukan: [[A=\\sin^{-1}(0.6)\\approx36.87^\\circ]]. Sinus songsang juga dipanggil arsinus dan merupakan operasi berasingan daripada pengiraan nisbah sinus. Kalkulator nisbah sinus sedia ada mengira nisbah daripada dua panjang sisi; ia tidak memaparkan sudut secara langsung."
          }
        ]
      },
      "sec-howto": {
        "h2": "Cara Menggunakan Kalkulator Nisbah Sinus",
        "blocks": [
          {
            "kind": "p",
            "text": "Kalkulator ini mencerminkan formula dengan tepat: dua input, satu butang, satu nisbah. Ikuti antara muka mengikut urutan."
          }
        ],
        "steps": [
          "<strong>Kenal pasti sudut rujukan [[A]].</strong> Setiap pengiraan sinus berlabuh pada satu sudut tirus; sisi bertentangan ditakrifkan secara relatif kepadanya.",
          "<strong>Cari sisi bertentangan [[a]], tepat di seberang sudut [[A]].</strong> Ia ialah kaki yang tidak pernah menyentuh bucu sudut itu.",
          "<strong>Cari hipotenus [[c]], bertentangan dengan sudut tepat dan sisi terpanjang.</strong> Ia menghadap petak kecil yang menandakan sudut [[90^\\circ]].",
          "<strong>Dapatkan atau ukur kedua-dua panjang sisi.</strong> Gunakan pita pengukur, dimensi pelan, atau nilai daripada pernyataan masalah.",
          "<strong>Masukkan panjang sisi bertentangan dalam medan input pertama.</strong> Ini menjadi pengangka [[a]].",
          "<strong>Masukkan panjang hipotenus dalam medan input kedua.</strong> Ini menjadi penyebut [[c]].",
          "<strong>Pilih unit pengukuran yang serasi menggunakan pemilih unit yang tersedia.</strong> Meter dengan meter, sentimeter dengan sentimeter; unit yang bercampur menghasilkan nisbah yang tidak bermakna.",
          "<strong>Pastikan kedua-dua ukuran adalah positif.</strong> Panjang sifar atau negatif tidak boleh membentuk segi tiga.",
          "<strong>Semak bahawa hipotenus lebih panjang daripada sisi bertentangan.</strong> Jika [[a \\ge c]], input telah bertukar tempat atau segi tiga itu mustahil.",
          "<strong>Klik Calculate sin(A).</strong> Alat ini membahagikan sisi bertentangan dengan hipotenus.",
          "<strong>Baca nisbah sinus yang terhasil.</strong> Ia ialah perpuluhan biasa, bukan sudut dan bukan panjang.",
          "<strong>Pastikan hasilnya lebih besar daripada 0 dan kurang daripada 1.</strong> Untuk segi tiga bersudut tepat yang sah dan tidak merosot dengan sudut rujukan tirus, itulah satu-satunya julat yang sah.",
          "<strong>Gunakan Reset apabila anda ingin mengosongkan input dan memulakan pengiraan baharu.</strong>"
        ],
        "closingParagraphs": [
          "Kalkulator ini tidak memerlukan sisi bersebelahan atau input sudut. Ia melakukan pembahagian dan tidak lebih: tiada sejarah tersimpan, tiada graf, tiada mod tersembunyi."
        ]
      },
      "sec-examples": {
        "h2": "Contoh Langkah demi Langkah Mengira Sinus",
        "blocks": [
          {
            "kind": "h3",
            "text": "Contoh 1: Segi Tiga Bersudut Tepat 3-4-5"
          },
          {
            "kind": "p",
            "text": "Diberi [[a=3\\,\\text{cm}]], [[b=4\\,\\text{cm}]], dan [[c=5\\,\\text{cm}]]:"
          },
          {
            "kind": "p",
            "text": "[[\\sin(A)=\\frac{3}{5}]]"
          },
          {
            "kind": "p",
            "text": "[[\\boxed{\\sin(A)=0.6}]]"
          },
          {
            "kind": "p",
            "text": "Sisi bertentangan ialah 60 peratus daripada hipotenus."
          },
          {
            "kind": "h3",
            "text": "Contoh 2: Segi Tiga Bersudut Tepat 5-12-13"
          },
          {
            "kind": "p",
            "text": "Diberi [[a=5\\,\\text{m}]], [[b=12\\,\\text{m}]], dan [[c=13\\,\\text{m}]]:"
          },
          {
            "kind": "p",
            "text": "[[\\sin(A)=\\frac{5}{13}]]"
          },
          {
            "kind": "p",
            "text": "[[\\boxed{\\sin(A)\\approx0.3846}]]"
          },
          {
            "kind": "p",
            "text": "Sisi bertentangan ialah kira-kira 38.46 peratus daripada hipotenus."
          },
          {
            "kind": "h3",
            "text": "Contoh 3: Segi Tiga 30-60-90"
          },
          {
            "kind": "p",
            "text": "Untuk sudut rujukan [[A=30^\\circ]], sisi bertentangan ialah separuh hipotenus. Gunakan [[a=1\\,\\text{cm}]], [[b=\\sqrt{3}\\,\\text{cm}]], dan [[c=2\\,\\text{cm}]]:"
          },
          {
            "kind": "p",
            "text": "[[\\sin(30^\\circ)=\\frac{1}{2}]]"
          },
          {
            "kind": "p",
            "text": "[[\\boxed{\\sin(30^\\circ)=0.5}]]"
          },
          {
            "kind": "p",
            "text": "Ini ialah hasil sudut khas yang berguna: pada 30 darjah sisi bertentangan adalah tepat separuh hipotenus, yang menjelaskan mengapa segi tiga ini muncul dalam begitu banyak masalah buku teks."
          },
          {
            "kind": "h3",
            "text": "Contoh 4: Segi Tiga 45-45-90"
          },
          {
            "kind": "p",
            "text": "Diberi [[a=1\\,\\text{cm}]], [[b=1\\,\\text{cm}]], dan [[c=\\sqrt{2}\\,\\text{cm}]]:"
          },
          {
            "kind": "p",
            "text": "[[\\sin(45^\\circ)=\\frac{1}{\\sqrt{2}}]]"
          },
          {
            "kind": "p",
            "text": "[[\\boxed{\\sin(45^\\circ)\\approx0.7071}]]"
          },
          {
            "kind": "p",
            "text": "Kaki-kaki yang sama menghasilkan nilai sinus dan kosinus yang sama untuk dua sudut tirus: pada 45 darjah setiap sudut tirus menghadap kaki 1 dan hipotenus [[\\sqrt{2}]], jadi sinus dan kosinus bertepatan."
          }
        ]
      },
      "sec-applications": {
        "h2": "Contoh Sebenar Menggunakan Nisbah Sinus",
        "blocks": [
          {
            "kind": "p",
            "text": "Setiap contoh menyatakan situasi, mengenal pasti sisi bertentangan dan hipotenus, menggantikannya ke dalam formula, dan mentafsir hasilnya dalam bahasa yang mudah."
          },
          {
            "kind": "h3",
            "text": "Contoh 5: Mengira Nisbah Sinus Tangga"
          },
          {
            "kind": "p",
            "text": "Sebuah tangga panjangnya 5 m dan mencapai 4 m ke atas dinding menegak. Sudut rujukan [[A]] ialah antara tangga dengan tanah mendatar. Tangga ialah hipotenus, [[c=5\\,\\text{m}]], dan ketinggian menegak ialah sisi bertentangan, [[a=4\\,\\text{m}]]:"
          },
          {
            "kind": "p",
            "text": "[[\\sin(A)=\\frac{4}{5}]]"
          },
          {
            "kind": "p",
            "text": "[[\\boxed{\\sin(A)=0.8}]]"
          },
          {
            "kind": "p",
            "text": "Ketinggian menegak ialah 80 peratus daripada panjang tangga. Nisbah itu menggambarkan geometri tangga dan tidak menetapkan sama ada tangga diposisikan dengan selamat."
          },
          {
            "kind": "h3",
            "text": "Contoh 6: Mengira Nisbah Sinus Kasau Bumbung"
          },
          {
            "kind": "p",
            "text": "Sebuah kasau bumbung mempunyai panjang cerun 6.5 m dan kenaikan menegak 2.5 m. Kasau ialah hipotenus, [[c=6.5\\,\\text{m}]], dan kenaikan menegak ialah sisi bertentangan, [[a=2.5\\,\\text{m}]]:"
          },
          {
            "kind": "p",
            "text": "[[\\sin(A)=\\frac{2.5}{6.5}]]"
          },
          {
            "kind": "p",
            "text": "[[\\boxed{\\sin(A)\\approx0.3846}]]"
          },
          {
            "kind": "p",
            "text": "Kenaikan menegak ialah kira-kira 38.46 peratus daripada panjang kasau. Nisbah itu tidak menetapkan kesesuaian struktur atau pematuhan reka bentuk bumbung."
          },
          {
            "kind": "h3",
            "text": "Contoh 7: Menilai Nisbah Sinus Tanjakan"
          },
          {
            "kind": "p",
            "text": "Sebuah tanjakan ringkas mempunyai panjang cerun 9.5 m dan kenaikan menegak 0.75 m. Cerun ialah hipotenus, [[c=9.5\\,\\text{m}]], dan kenaikan menegak ialah sisi bertentangan, [[a=0.75\\,\\text{m}]]:"
          },
          {
            "kind": "p",
            "text": "[[\\sin(A)=\\frac{0.75}{9.5}]]"
          },
          {
            "kind": "p",
            "text": "[[\\boxed{\\sin(A)\\approx0.07895}]]"
          },
          {
            "kind": "p",
            "text": "Kenaikan menegak ialah kira-kira 7.89 peratus daripada panjang cerun, cerun yang landai. Nisbah ini sahaja tidak menetapkan kebolehcapaian atau pematuhan kod bangunan."
          },
          {
            "kind": "h3",
            "text": "Contoh 8: Pengukuran Ukur Tanah"
          },
          {
            "kind": "p",
            "text": "Sebuah segi tiga ukur ringkas mempunyai jarak garis lurus 50 m dan perbezaan ketinggian menegak 30 m. Garis lurus ialah hipotenus, [[c=50\\,\\text{m}]], dan perbezaan menegak ialah sisi bertentangan, [[a=30\\,\\text{m}]]:"
          },
          {
            "kind": "p",
            "text": "[[\\sin(A)=\\frac{30}{50}]]"
          },
          {
            "kind": "p",
            "text": "[[\\boxed{\\sin(A)=0.6}]]"
          },
          {
            "kind": "p",
            "text": "Perbezaan menegak ialah 60 peratus daripada jarak garis lurus. Ukur sebenar mungkin memerlukan pembetulan tambahan, pelarasan ketinggian alat, dan pengukuran yang lebih terperinci."
          },
          {
            "kind": "h3",
            "text": "Contoh 9: Wayar Pengikat yang Menyokong Tiang"
          },
          {
            "kind": "p",
            "text": "Sebuah wayar pengikat panjangnya 13 m, dan titik tambatannya berada 5 m di atas aras sauh tanah. Wayar ialah hipotenus, [[c=13\\,\\text{m}]], dan pemisahan menegak ialah sisi bertentangan, [[a=5\\,\\text{m}]]:"
          },
          {
            "kind": "p",
            "text": "[[\\sin(A)=\\frac{5}{13}]]"
          },
          {
            "kind": "p",
            "text": "[[\\boxed{\\sin(A)\\approx0.3846}]]"
          },
          {
            "kind": "p",
            "text": "Pemisahan menegak ialah kira-kira 38.46 peratus daripada panjang wayar. Nisbah itu tidak menetapkan ketegangan wayar, kekuatan sauh, atau keselamatan struktur."
          },
          {
            "kind": "h3",
            "text": "Contoh 10: Mengira Nisbah Sinus Penjuru Tangga"
          },
          {
            "kind": "p",
            "text": "Sebuah penjuru tangga ringkas panjangnya 5 m dan merentasi kenaikan menegak 3 m. Penjuru ialah hipotenus, [[c=5\\,\\text{m}]], dan kenaikan menegak ialah sisi bertentangan, [[a=3\\,\\text{m}]]:"
          },
          {
            "kind": "p",
            "text": "[[\\sin(A)=\\frac{3}{5}]]"
          },
          {
            "kind": "p",
            "text": "[[\\boxed{\\sin(A)=0.6}]]"
          },
          {
            "kind": "p",
            "text": "Kenaikan menegak ialah 60 peratus daripada panjang penjuru pepenjuru. Pengiraan ini tidak mengesahkan dimensi tangga atau pematuhan kod bangunan."
          },
          {
            "kind": "h3",
            "text": "Contoh 11: Memahami Komponen Menegak Boom Kren"
          },
          {
            "kind": "p",
            "text": "Sebuah boom kren ringkas mempunyai panjang 10 m dan komponen menegak 8 m. Boom ialah hipotenus, [[c=10\\,\\text{m}]], dan komponen menegak ialah sisi bertentangan, [[a=8\\,\\text{m}]]:"
          },
          {
            "kind": "p",
            "text": "[[\\sin(A)=\\frac{8}{10}]]"
          },
          {
            "kind": "p",
            "text": "[[\\boxed{\\sin(A)=0.8}]]"
          },
          {
            "kind": "p",
            "text": "Komponen menegak ialah 80 peratus daripada panjang boom. Nisbah itu tidak menetapkan kapasiti kren atau keselamatan operasi."
          },
          {
            "kind": "h3",
            "text": "Contoh 12: Segmen Penerbangan Pesawat yang Lurus"
          },
          {
            "kind": "p",
            "text": "Untuk segmen penerbangan ringkas, sebuah pesawat terbang 5 km sepanjang laluan lurus sambil menaik 1.5 km dalam ketinggian. Laluan ialah hipotenus, [[c=5\\,\\text{km}]], dan kenaikan menegak ialah sisi bertentangan, [[a=1.5\\,\\text{km}]]:"
          },
          {
            "kind": "p",
            "text": "[[\\sin(A)=\\frac{1.5}{5}]]"
          },
          {
            "kind": "p",
            "text": "[[\\boxed{\\sin(A)=0.3}]]"
          },
          {
            "kind": "p",
            "text": "Kenaikan menegak ialah 30 peratus daripada panjang laluan garis lurus. Ini ialah contoh geometri yang diidealkan, bukan pengiraan navigasi penerbangan yang lengkap."
          },
          {
            "kind": "h3",
            "text": "Contoh 13: Penguat Mekanikal Pepenjuru"
          },
          {
            "kind": "p",
            "text": "Sebuah penguat pepenjuru mempunyai panjang 2 m dan komponen menegak 1.6 m. Penguat ialah hipotenus, [[c=2\\,\\text{m}]], dan komponen menegak ialah sisi bertentangan, [[a=1.6\\,\\text{m}]]:"
          },
          {
            "kind": "p",
            "text": "[[\\sin(A)=\\frac{1.6}{2}]]"
          },
          {
            "kind": "p",
            "text": "[[\\boxed{\\sin(A)=0.8}]]"
          },
          {
            "kind": "p",
            "text": "Komponen menegak ialah 80 peratus daripada panjang penguat. Nisbah itu tidak menentukan kekuatan atau kesesuaian penguat."
          },
          {
            "kind": "h3",
            "text": "Contoh 14: Nisbah Sinus Laluan Pendakian"
          },
          {
            "kind": "p",
            "text": "Bahagian pendakian lurus ringkas mempunyai panjang laluan 100 m dan kenaikan ketinggian menegak 25 m. Laluan ialah hipotenus, [[c=100\\,\\text{m}]], dan kenaikan ketinggian ialah sisi bertentangan, [[a=25\\,\\text{m}]]:"
          },
          {
            "kind": "p",
            "text": "[[\\sin(A)=\\frac{25}{100}]]"
          },
          {
            "kind": "p",
            "text": "[[\\boxed{\\sin(A)=0.25}]]"
          },
          {
            "kind": "p",
            "text": "Kenaikan ketinggian ialah 25 peratus daripada panjang laluan lurus. Denai pendakian sebenar mungkin mengandungi selekoh dan kecerunan yang berubah."
          },
          {
            "kind": "h3",
            "text": "Contoh 15: Penyokong Bidai"
          },
          {
            "kind": "p",
            "text": "Sebuah penyokong bidai mempunyai panjang 3 m dan komponen menegak 1.2 m. Penyokong ialah hipotenus, [[c=3\\,\\text{m}]], dan komponen menegak ialah sisi bertentangan, [[a=1.2\\,\\text{m}]]:"
          },
          {
            "kind": "p",
            "text": "[[\\sin(A)=\\frac{1.2}{3}]]"
          },
          {
            "kind": "p",
            "text": "[[\\boxed{\\sin(A)=0.4}]]"
          },
          {
            "kind": "p",
            "text": "Komponen menegak ialah 40 peratus daripada panjang penyokong. Pengiraan ini tidak menetapkan kesesuaian struktur."
          },
          {
            "kind": "h3",
            "text": "Contoh 16: Garis Penglihatan ke Puncak Pokok"
          },
          {
            "kind": "p",
            "text": "Garis penglihatan ringkas ke puncak pokok berukuran 20 m. Perbezaan menegak antara aras mata pemerhati dengan puncak pokok ialah 12 m. Garis penglihatan ialah hipotenus, [[c=20\\,\\text{m}]], dan perbezaan menegak ialah sisi bertentangan, [[a=12\\,\\text{m}]]:"
          },
          {
            "kind": "p",
            "text": "[[\\sin(A)=\\frac{12}{20}]]"
          },
          {
            "kind": "p",
            "text": "[[\\boxed{\\sin(A)=0.6}]]"
          },
          {
            "kind": "p",
            "text": "Perbezaan menegak ialah 60 peratus daripada jarak garis penglihatan. Hasil itu tidak memberikan jumlah ketinggian pokok di atas tanah melainkan ketinggian mata pemerhati dan maklumat lain yang diperlukan diambil kira."
          },
          {
            "kind": "p",
            "text": "Sinus ialah nisbah matematik, bukan kuantiti fizikal yang berunit. Nilai praktikalnya datang daripada membandingkan komponen menegak atau serenjang dengan jarak cerun, mengira komponen apabila sudut diketahui, dan mengesahkan hubungan geometri. Jangan anggap sinus sahaja sebagai sijil keselamatan struktur, kapasiti beban, kebolehcapaian, atau pematuhan kejuruteraan."
          }
        ],
        "tables": [
          {
            "headers": ["Situasi", "Bertentangan [[a]]", "Hipotenus [[c]]", "Formula", "Nisbah", "Makna"],
            "rows": [
              ["Tangga", "4 m", "5 m", "4/5", "0.8", "Ketinggian ialah 80% daripada panjang tangga"],
              ["Kasau bumbung", "2.5 m", "6.5 m", "2.5/6.5", "0.3846", "Kenaikan ialah 38.46% daripada panjang kasau"],
              ["Tanjakan", "0.75 m", "9.5 m", "0.75/9.5", "0.07895", "Cerun landai, kenaikan 7.89%"],
              ["Ukur tanah", "30 m", "50 m", "30/50", "0.6", "Ketinggian ialah 60% daripada jarak garis"],
              ["Wayar pengikat", "5 m", "13 m", "5/13", "0.3846", "Ketinggian ialah 38.46% daripada panjang wayar"],
              ["Penjuru tangga", "3 m", "5 m", "3/5", "0.6", "Kenaikan ialah 60% daripada panjang penjuru"],
              ["Boom kren", "8 m", "10 m", "8/10", "0.8", "Capaian menegak ialah 80% daripada boom"],
              ["Segmen penerbangan", "1.5 km", "5 km", "1.5/5", "0.3", "Kenaikan ialah 30% daripada laluan penerbangan"],
              ["Penguat pepenjuru", "1.6 m", "2 m", "1.6/2", "0.8", "Komponen menegak ialah 80% daripada penguat"],
              ["Laluan pendakian", "25 m", "100 m", "25/100", "0.25", "Kenaikan ialah 25% daripada panjang laluan"],
              ["Penyokong bidai", "1.2 m", "3 m", "1.2/3", "0.4", "Komponen menegak ialah 40% daripada penyokong"],
              ["Garis penglihatan", "12 m", "20 m", "12/20", "0.6", "Perbezaan ketinggian ialah 60% daripada garis penglihatan"]
            ]
          }
        ],
        "imgAlt": "Empat panel: tangga 0.8, tanjakan 0.07895, ukur tanah 0.6, boom kren 0.8, setiap satunya segi tiga berlabel",
        "figcaption": "Empat pengiraan praktikal: tangga, tanjakan, ukur tanah, dan boom kren, setiap satu dengan segi tiganya, formula, dan nisbah."
      },
      "sec-angle": {
        "h2": "Memahami Hubungan antara Sinus dengan Saiz Sudut",
        "blocks": [
          {
            "kind": "p",
            "text": "Sinus meningkat apabila sudut rujukan meningkat. Geometrinya menjelaskan mengapa: apabila sudut [[A]] kecil, sisi bertentangan adalah pendek berbanding hipotenus, jadi nisbah berada hampir dengan 0. Apabila sudut melebar, sisi bertentangan menjadi bahagian yang lebih besar daripada hipotenus, dan nisbah mendaki ke arah 1. Pada [[30^\\circ]] sinusnya tepat 0.5; pada [[45^\\circ]] ia kira-kira 0.7071; pada [[60^\\circ]] kira-kira 0.8660; dan apabila sudut menghampiri [[90^\\circ]], sinus menghampiri 1."
          }
        ],
        "tables": [
          {
            "headers": ["Sudut [[A]]", "Nisbah sinus", "Tafsiran"],
            "rows": [
              ["[[30^\\circ]]", "0.5", "Sisi bertentangan ialah separuh hipotenus"],
              ["[[45^\\circ]]", "Kira-kira 0.7071", "Sisi bertentangan ialah kira-kira 70.71% daripada hipotenus"],
              ["[[60^\\circ]]", "Kira-kira 0.8660", "Sisi bertentangan ialah kira-kira 86.60% daripada hipotenus"],
              ["[[80^\\circ]]", "Kira-kira 0.9848", "Sisi bertentangan ialah kira-kira 98.48% daripada hipotenus"]
            ]
          }
        ],
        "closingParagraphs": [
          "Coraknya mudah dan menaik secara monoton: setiap pertambahan sudut menaikkan sinus, dan nisbah kekal antara 0 dengan 1 untuk setiap sudut tirus. Sinus menggambarkan bentuk segi tiga dan bukannya saiz mutlaknya: dua segi tiga dengan sudut tirus yang sama mempunyai nisbah sinus yang sama walaupun panjang sisinya berbeza. Entri [[90^\\circ]] ialah nilai rujukan had, bukan sudut tirus dalam segi tiga bersudut tepat yang tidak merosot."
        ],
        "imgAlt": "Tiga segi tiga pada 30, 45, 60 darjah dengan nilai sinus 0.5, 0.7071, 0.8660; sinus meningkat apabila sudut membesar",
        "figcaption": "Apabila sudut A membesar, sisi bertentangan menjadi bahagian yang lebih besar daripada hipotenus, jadi sin(A) meningkat."
      },
      "sec-hypotenuse": {
        "h2": "Cara Mencari Sisi Bertentangan Menggunakan Sinus",
        "blocks": [
          {
            "kind": "p",
            "text": "Formula sinus boleh disusun semula untuk mencari sisi bertentangan apabila hipotenus dan sudut diketahui. Mulakan dengan [[\\sin(A)=a/c]] dan darabkan kedua-dua belah dengan [[c]]:"
          },
          {
            "kind": "p",
            "text": "[[[\\boxed{a=c\\sin(A)}]]]"
          },
          {
            "kind": "p",
            "text": "Sisi bertentangan sama dengan hipotenus didarab dengan sinus sudut. Diberi hipotenus [[c=10\\,\\text{m}]] dan sudut [[A=30^\\circ]], dan mengetahui bahawa [[\\sin(30^\\circ)=0.5]]:"
          },
          {
            "kind": "p",
            "text": "[[a=10\\times0.5]]"
          },
          {
            "kind": "p",
            "text": "[[\\boxed{a=5\\,\\text{m}}]]"
          },
          {
            "kind": "p",
            "text": "Sisi bertentangan ialah separuh hipotenus untuk sudut [[30^\\circ]], yang sepadan dengan geometri 30-60-90: sisi yang bertentangan dengan 30 darjah adalah tepat separuh hipotenus."
          },
          {
            "kind": "p",
            "text": "Hipotenus boleh dicari dengan cara yang sama dengan menyusun semula sekali lagi:"
          },
          {
            "kind": "p",
            "text": "[[[\\boxed{c=\\frac{a}{\\sin(A)}}]]]"
          },
          {
            "kind": "p",
            "text": "Dengan sisi bertentangan [[a=6\\,\\text{m}]] dan [[A=30^\\circ]]: [[c=6/0.5]], jadi [[\\boxed{c=12\\,\\text{m}}]]. Ini ialah susunan semula matematik bagi formula yang sama. Kalkulator di halaman ini memaparkan nisbah sinus daripada panjang sisi; ia tidak mengira sisi yang hilang secara langsung."
          }
        ]
      },
      "sec-recover": {
        "h2": "Cara Mencari Sudut daripada Nisbah Sinus",
        "blocks": [
          {
            "kind": "p",
            "text": "Nisbah sinus dan sudut adalah kuantiti yang berbeza: satu ialah perbandingan sisi tanpa dimensi, satu lagi diukur dalam darjah. Apabila nisbah sinus diketahui dan sudut diperlukan, sinus songsang boleh digunakan:"
          },
          {
            "kind": "p",
            "text": "[[[\\boxed{A=\\sin^{-1}\\left(\\frac{a}{c}\\right)}]]]"
          },
          {
            "kind": "p",
            "text": "Sinus songsang juga dipanggil arsinus. Diberi [[\\sin(A)=0.6]]:"
          },
          {
            "kind": "p",
            "text": "[[A=\\sin^{-1}(0.6)]]"
          },
          {
            "kind": "p",
            "text": "[[\\boxed{A\\approx36.87^\\circ}]]"
          },
          {
            "kind": "p",
            "text": "Sudut itu ialah kira-kira [[36.87^\\circ]] apabila kalkulator ditetapkan kepada darjah. Ini ialah pengiraan sudut yang berasingan, bukan sesuatu yang dilakukan oleh kalkulator nisbah sinus secara langsung. Sinus songsang boleh mempunyai pelbagai penyelesaian sudut dalam trigonometri yang lebih luas, tetapi sekatan sudut tirus bagi segi tiga bersudut tepat memilih penyelesaian tirus yang sesuai."
          }
        ]
      },
      "sec-mistakes": {
        "h2": "Kesilapan Lazim Semasa Mengira Sinus",
        "blocks": [
          {
            "kind": "p",
            "text": "Kebanyakan kesilapan sinus datang daripada pecahan yang terbalik, sisi yang dilabelkan salah, atau kesilapan unit. Semak senarai ini sebelum mempercayai sesuatu hasil."
          }
        ],
        "steps": [
          "<strong>Menggunakan sisi bersebelahan dan bukannya sisi bertentangan.</strong> Membahagikan [[b/c]] akan mengira kosinus. Dengan [[a=3]], [[b=4]], dan [[c=5]], kaki yang salah memberikan 0.8; kaki yang betul memberikan 0.6.",
          "<strong>Menterbalikkan formula dan mengira [[c/a]] dan bukannya [[a/c]].</strong> Ini memaparkan kosekan, bukan sinus. Dengan [[a=3]] dan [[c=5]], pecahan yang terbalik memberikan 1.6667, sentiasa melebihi 1, tanda amaran yang jelas.",
          "<strong>Mengelirukan sinus dengan kosinus.</strong> Sinus menggunakan sisi bertentangan; kosinus menggunakan sisi bersebelahan. Jika kaki yang salah berada dalam pengangka, jawapannya ialah kosinus, bukan sinus.",
          "<strong>Mengelirukan sinus dengan kosekan.</strong> Kosekan ialah salingan, hipotenus dibahagikan dengan sisi bertentangan. Nama-nama yang serupa menyebabkan kesilapan sebenar, tetapi susunan pecahan adalah betul-betul terbalik.",
          "<strong>Memasukkan sisi bertentangan yang lebih panjang daripada hipotenus.</strong> Hipotenus sentiasa merupakan sisi terpanjang. Jika [[a \\ge c]], input telah bertukar tempat atau segi tiga itu mustahil.",
          "<strong>Memasukkan panjang sisi sifar atau negatif.</strong> Segi tiga tidak boleh mempunyai sisi sifar atau negatif, jadi input ini menandakan ralat kemasukan data atau ukuran yang hilang, bukan kes sempadan yang sah.",
          "<strong>Mencampurkan unit pengukuran.</strong> Sisi bertentangan 3 m dengan hipotenus 50 cm memberikan 6, nombor yang tidak bermakna. Tukar kepada satu unit dahulu: 3 m dan 5 m memberikan 0.6 yang betul.",
          "<strong>Melaporkan nisbah sinus sebagai sudut dalam darjah.</strong> Hasil 0.6 ialah nisbah, bukan [[0.6^\\circ]]. Menganggapnya sebagai darjah memasukkan karut ke dalam sebarang pengiraan susulan.",
          "<strong>Menganggap sinus mempunyai unit fizikal.</strong> Unit-unit membatal dalam pembahagian, jadi \"0.6 m\" adalah salah. Tulis nombor biasa dan simpan unit-unit dalam ukuran input di tempat yang sepatutnya.",
          "<strong>Mengelirukan sudut rujukan dengan sudut tepat.</strong> Sinus sentiasa menggunakan sudut tirus. Sudut [[90^\\circ]] tidak pernah menjadi sudut rujukan [[A]] dalam pengiraan ini.",
          "<strong>Membundarkan terlalu awal.</strong> Membundarkan pembahagian perantaraan kepada dua perpuluhan dan kemudian meneruskan pengiraan akan menggandakan ralat. Kekalkan ketepatan penuh melalui setiap langkah dan bundarkan hanya jawapan akhir.",
          "<strong>Menganggap sinus adalah sama untuk setiap sudut.</strong> Setiap sudut mempunyai nilai sinusnya sendiri. Hasil 0.6 tergolong kepada satu sudut tertentu (kira-kira 36.87 darjah), bukan kepada setiap segi tiga bersudut tepat.",
          "<strong>Menganggap nilai sinus 0.6 bermaksud sudutnya ialah [[0.6^\\circ]].</strong> Nisbah bukanlah ukuran darjah. Tukar dengan sinus songsang jika sudut itu sendiri diperlukan.",
          "<strong>Mengelirukan salingan sinus dengan sinus songsang.</strong> [[1/\\sin(A)]] ialah kosekan, iaitu nisbah; [[\\sin^{-1}]] ialah sinus songsang, yang memaparkan sudut. Nama-nama yang serupa menyebabkan kesilapan sebenar, jadi baca tatatanda dengan teliti.",
          "<strong>Menganggap nisbah sinus menentukan saiz mutlak segi tiga.</strong> Sinus menggambarkan bentuk, bukan saiz: banyak segi tiga yang tidak terhingga berkongsi sinus 0.6, daripada sisi bertentangan 3 cm kepada sisi 3 km. Nisbah menetapkan perkadaran; panjang sebenar memerlukan sekurang-kurangnya satu ukuran sisi."
        ],
        "closingParagraphs": [
          "<strong>Salah lawan Betul: Perbandingan Dikerjakan</strong>",
          "Diberi sisi bertentangan [[a=3]] dan hipotenus [[c=5]]:",
          "<strong>Salah:</strong> [[5/3\\approx1.6667]]. Ini ialah nisbah kosekan, bukan nisbah sinus. Pengangka dan penyebut terbalik.",
          "<strong>Betul:</strong> [[\\sin(A)=3/5=0.6]].",
          "<strong>Sahkan:</strong> [[\\csc(A)=1/0.6\\approx1.6667]]. Semakan salingan mengesahkan hasilnya, dan jawapan terletak antara 0 dengan 1, seperti yang mesti dipatuhi oleh setiap sinus yang sah."
        ]
      },
      "sec-verify": {
        "h2": "Cara Menyemak Sama Ada Hasil Sinus Anda Sah",
        "blocks": [
          {
            "kind": "p",
            "text": "Segi tiga bersudut tepat yang sah dan tidak merosot memerlukan sisi-sisi positif dengan hipotenus yang paling panjang, [[0 \\lt a \\lt c]], jadi hasil sinus mesti berada antara 0 dengan 1:"
          },
          {
            "kind": "p",
            "text": "[[[\\boxed{0 \\lt \\frac{a}{c} \\lt 1}]]]"
          },
          {
            "kind": "p",
            "text": "Kedua-dua ukuran mesti menggunakan unit yang serasi. Hasil yang kurang daripada atau sama dengan 0, atau lebih besar daripada atau sama dengan 1, biasanya menunjukkan input yang tidak sah, sisi yang terbalik, atau model segi tiga yang salah."
          },
          {
            "kind": "h3",
            "text": "Kaedah 1: Semak Nisbah"
          },
          {
            "kind": "p",
            "text": "Sahkan semula [[\\sin(A)=a/c]] secara langsung. Dengan [[a=3]] dan [[c=5]]: [[\\sin(A)=3/5=0.6]]. Jika pengiraan tangan kedua tidak bersetuju, sesuatu sisi telah dilabelkan salah atau sesuatu unit telah bercampur."
          },
          {
            "kind": "h3",
            "text": "Kaedah 2: Semak Teorem Pythagoras"
          },
          {
            "kind": "p",
            "text": "Jika sisi bersebelahan diperlukan, kira [[b=\\sqrt{c^2-a^2}]]. Untuk [[a=3]] dan [[c=5]]: [[b=\\sqrt{25-9}=4]], dan [[3^2+4^2=5^2]]. Ini mengesahkan dimensi segi tiga bersudut tepat 3-4-5. Sisi bersebelahan ialah nilai pengesahan di sini, bukan sebahagian daripada formula sinus utama."
          },
          {
            "kind": "h3",
            "text": "Kaedah 3: Semak Menggunakan Sinus Songsang"
          },
          {
            "kind": "p",
            "text": "Untuk nisbah sinus 0.6: [[A=\\sin^{-1}(0.6)\\approx36.87^\\circ]]. Oleh kerana sinus terletak sederhana di atas 0.5, sudut sepatutnya berada sedikit di atas [[30^\\circ]]; jika tidak, label sisi mungkin telah bertukar tempat. Perbezaan kecil mungkin timbul daripada pembundaran."
          }
        ]
      },
      "sec-vs": {
        "h2": "Sinus lawan Kosinus, Tangen dan Kosekan",
        "blocks": [
          {
            "kind": "p",
            "text": "Setiap nisbah membandingkan pasangan sisi yang berbeza, menggunakan sudut rujukan dan label sisi yang sama:"
          },
          {
            "kind": "p",
            "text": "Sinus dan kosekan ialah pasangan salingan: [[\\csc(A)=1/\\sin(A)]]. Jika [[\\sin(A)=0.6]], maka [[\\csc(A)\\approx1.6667]]. Capai sinus apabila sisi bertentangan diketahui berbanding hipotenus, apabila komponen menegak mesti dibandingkan dengan panjang cerun, atau apabila SOH ialah mnemonik yang sepadan; capai kosinus untuk bersebelahan berbanding hipotenus, tangen apabila dua kaki diketahui, dan kosekan apabila hipotenus dibandingkan dengan sisi bertentangan."
          },
          {
            "kind": "p",
            "text": "Untuk nisbah-nisbah jiran, lihat <a href=\"/cosine-ratio-calculator/\" class=\"text-primary hover:underline\">Kalkulator Nisbah Kosinus</a>, <a href=\"/tangent-ratio-calculator/\" class=\"text-primary hover:underline\">Kalkulator Nisbah Tangen</a>, <a href=\"/cosecant-ratio-calculator/\" class=\"text-primary hover:underline\">Kalkulator Nisbah Kosekan</a>, <a href=\"/secant-ratio-calculator/\" class=\"text-primary hover:underline\">Kalkulator Nisbah Sekan</a>, dan <a href=\"/cotangent-ratio-calculator/\" class=\"text-primary hover:underline\">Kalkulator Nisbah Kotangen</a>."
          }
        ],
        "tables": [
          {
            "headers": ["Nisbah", "Formula", "Apa yang dibandingkan"],
            "rows": [
              ["Sinus", "sin(A) = a/c", "Sisi bertentangan berbanding hipotenus"],
              ["Kosinus", "cos(A) = b/c", "Sisi bersebelahan berbanding hipotenus"],
              ["Tangen", "tan(A) = a/b", "Sisi bertentangan berbanding sisi bersebelahan"],
              ["Kosekan", "csc(A) = c/a", "Hipotenus berbanding sisi bertentangan"],
              ["Sekan", "sec(A) = c/b", "Hipotenus berbanding sisi bersebelahan"],
              ["Kotangen", "cot(A) = b/a", "Sisi bersebelahan berbanding sisi bertentangan"]
            ]
          }
        ]
      },
      "sec-related": {
        "h2": "Terokai Kalkulator Trigonometri Berkaitan",
        "related": [
          {
            "name": "Kalkulator Nisbah Kosinus"
          },
          {
            "name": "Kalkulator Nisbah Tangen"
          },
          {
            "name": "Kalkulator Nisbah Kosekan"
          },
          {
            "name": "Kalkulator Nisbah Sekan"
          },
          {
            "name": "Kalkulator Nisbah Kotangen"
          },
          {
            "name": "Kalkulator Sudut Segi Tiga Bersudut Tepat"
          }
        ]
      },
      "sec-conclusion": {
        "h2": "Gunakan Nisbah Sinus dengan Yakin",
        "blocks": [
          {
            "kind": "p",
            "text": "Sinus ialah nisbah pertama daripada tiga nisbah utama: bahagikan sisi bertentangan dengan hipotenus dan anda telah menggambarkan berapa bahagian sisi terpanjang yang terletak di seberang sudut. Formula [[\\sin(A)=a/c]] hanya memerlukan dua ukuran, jawapannya sentiasa nombor tanpa dimensi antara 0 dengan 1, dan ia meningkat apabila sudut rujukan meningkat. Apabila sisi yang hilang diperlukan, [[a=c\\sin(A)]] memulihkan sisi bertentangan; apabila sudut diperlukan, [[A=\\sin^{-1}(a/c)]] memulihkannya. Tangga, kasau, tanjakan, atau 3-4-5 buku teks, kaedahnya tidak pernah berubah: kenal pasti sisi bertentangan, kenal pasti hipotenus, bahagikan, dan sahkan dengan julat 0 hingga 1."
          }
        ]
      }
    },
    "faqs": [
      {
        "question": "Apakah formula sinus untuk segi tiga bersudut tepat?",
        "answer": "sin(A) = a / c: bahagikan sisi bertentangan a dengan hipotenus c. Dengan sisi bertentangan 3 cm dan hipotenus 5 cm, hasilnya ialah 3/5 = 0.6. Perpuluhan itu ialah jawapan lengkap, nisbah tanpa dimensi, bukan sudut."
      },
      {
        "question": "Bagaimana cara mengira sinus daripada dua panjang sisi?",
        "answer": "Kenal pasti sudut rujukan A, ukur sisi bertentangan a dan hipotenus c dalam unit yang sama, pastikan kedua-duanya positif dan c lebih panjang daripada a, kemudian bahagikan: sin(A) = a / c. Di halaman ini, masukkan sisi bertentangan dalam medan pertama dan hipotenus dalam medan kedua, kemudian klik Calculate sin(A)."
      },
      {
        "question": "Apakah perbezaan antara sinus dan kosinus?",
        "answer": "Sinus membahagikan sisi bertentangan dengan hipotenus (a/c); kosinus membahagikan sisi bersebelahan dengan hipotenus (b/c). Kedua-duanya menggunakan hipotenus yang sama, tetapi pengangkanya berbeza. Hasil yang melebihi 1 bermaksud pecahan telah diterbalikkan atau kaki telah dilabelkan salah."
      },
      {
        "question": "Mengapa sinus kurang daripada 1 untuk sudut tirus dalam segi tiga bersudut tepat?",
        "answer": "Dalam segi tiga bersudut tepat yang sah dan tidak merosot, hipotenus adalah lebih panjang daripada mana-mana kaki, jadi 0 < a < c. Membahagikan panjang yang lebih kecil dengan panjang yang lebih besar sentiasa memberikan hasil di bawah 1: 0 < a/c < 1 untuk setiap sudut rujukan tirus."
      },
      {
        "question": "Bolehkah sinus bersamaan 1 untuk sudut tirus dalam segi tiga bersudut tepat yang sah?",
        "answer": "Tidak. Sinus yang tepat 1 memerlukan sisi bertentangan sama dengan hipotenus, yang meruntuhkan segi tiga kepada garis menegak tanpa lebar. Nilai 1 ialah nilai had yang dihampiri apabila sudut A menghampiri 90 darjah, bukan nilai yang dihasilkan oleh segi tiga sebenar."
      },
      {
        "question": "Apakah maksud nilai sinus 0.6?",
        "answer": "Sisi bertentangan ialah 60 peratus daripada hipotenus. Dalam segi tiga 3-4-5, sisi yang terletak di seberang sudut A ialah 3 unit manakala hipotenus ialah 5 unit, jadi sin(A) = 3/5 = 0.6. Ia menggambarkan bentuk segi tiga dan bukan sudut 0.6 darjah."
      },
      {
        "question": "Adakah nisbah sinus mempunyai unit pengukuran?",
        "answer": "Tidak. Kedua-dua input ialah panjang yang diukur dalam unit yang sama, jadi unit-unit membatal: 3 m / 5 m = 0.6, sama seperti 300 cm / 500 cm = 0.6. Laporkan sinus sebagai nombor biasa, jangan sekali-kali dengan darjah, meter, atau kaki."
      },
      {
        "question": "Bagaimana cara mencari sudut daripada nisbah sinus?",
        "answer": "Gunakan sinus songsang pada nisbah: A = sin^-1(a/c). Untuk sin(A) = 0.6, A = sin^-1(0.6), kira-kira 36.87 darjah. Tetapkan kalkulator saintifik anda kepada mod darjah terlebih dahulu. Kalkulator halaman ini memaparkan nisbah, bukan sudut."
      },
      {
        "question": "Bagaimana cara mencari sisi bertentangan menggunakan sinus?",
        "answer": "Susun semula formula kepada a = c * sin(A). Jika hipotenus ialah 10 m dan sudut A ialah 30 darjah, sin(30 deg) = 0.5, jadi a = 10 * 0.5 = 5 m. Ini ialah susunan semula manual; kalkulator halaman ini memaparkan nisbah daripada panjang sisi, bukan sisi yang hilang."
      },
      {
        "question": "Apakah perbezaan antara sinus dan kosekan?",
        "answer": "Sinus membahagikan sisi bertentangan dengan hipotenus (a/c); kosekan ialah salingannya, hipotenus dibahagikan dengan sisi bertentangan (c/a). Jika sin(A) = 0.6, maka csc(A) = 1/0.6, kira-kira 1.6667. Kedua-duanya ialah salingan, dan formulanya tidak boleh ditukar ganti."
      },
      {
        "question": "Bolehkah saya mengira sinus tanpa mengetahui sisi bersebelahan?",
        "answer": "Ya. Formula sinus utama hanya menggunakan sisi bertentangan dan hipotenus, jadi sisi bersebelahan tidak pernah masuk ke dalam pengiraan. Sisi bersebelahan menjadi berguna hanya apabila teorem Pythagoras digunakan untuk mengesahkan segi tiga atau apabila kosinus, tangen, atau sekan masuk ke dalam kerja."
      },
      {
        "question": "Bagaimana sinus digunakan dalam pengukuran praktikal?",
        "answer": "Sinus membandingkan komponen menegak atau serenjang dengan panjang cerun: tangga berbanding ketinggian dindingnya, kasau bumbung berbanding kenaikan menegaknya, tanjakan berbanding kenaikannya, atau garis ukur berbanding perbezaan ketinggiannya. Nisbah memberitahu anda berapa pecahan jarak cerun yang bersifat menegak, yang berguna untuk ketinggian, kelegaan, dan pengiraan komponen."
      }
    ],
    "faqHeading": "Soalan Lazim",
    "relatedHeading": "Terokai Kalkulator Trigonometri Berkaitan"
  },
  "pl": {
    "tocHeading": "W tym przewodniku",
    "tocItems": {
      "sec-intro": "Czym jest kalkulator stosunku sinus?",
      "sec-triangle": "Zrozumienie boku przeciwległego i przeciwprostokątnej",
      "sec-whatis": "Zrozumienie stosunku sinus",
      "sec-formula": "Jak działa wzór na sinus",
      "sec-howto": "Jak korzystać z kalkulatora stosunku sinus",
      "sec-examples": "Krok po kroku: przykłady obliczania sinusa",
      "sec-applications": "Przykłady z życia wzięte dotyczące stosunku sinus",
      "sec-angle": "Zrozumienie związku między sinusem a wielkością kąta",
      "sec-hypotenuse": "Jak znaleźć bok przeciwległy przy użyciu sinusa",
      "sec-recover": "Jak znaleźć kąt na podstawie stosunku sinus",
      "sec-mistakes": "Typowe błędy przy obliczaniu sinusa",
      "sec-verify": "Jak sprawdzić, czy wynik sinusa jest poprawny",
      "sec-vs": "Sinus a cosinus, tangens i cosecans",
      "sec-related": "Poznaj powiązane kalkulatory trygonometryczne",
      "sec-faq": "Często zadawane pytania"
    },
    "sections": {
      "sec-intro": {
        "h2": "Czym jest kalkulator stosunku sinus?",
        "blocks": [
          {
            "kind": "p",
            "text": "Kalkulator stosunku sinus odpowiada na jedno pytanie: dla kąta ostrego w trójkącie prostokątnym, jak bok leżący naprzeciw kąta ma się do najdłuższego boku? Wpisz bok przeciwległy i przeciwprostokątną, a narzędzie podzieli bok przeciwległy przez przeciwprostokątną, zwracając [[\\sin(A)=a/c]]. Trójkąt prostokątny ma bok przeciwległy 3 cm i przeciwprostokątną 5 cm, więc [[\\sin(A)=3/5=0.6]]. Liczba 0,6 to stosunek sinus: mówi, że bok przeciwległy stanowi 60 procent przeciwprostokątnej. Nie jest to kąt, więc nigdy nie odczytuj jej jako [[0.6^\\circ]]. Bok przyległy nie bierze udziału w tym obliczeniu; sam bok przeciwległy i przeciwprostokątna wystarczą. Sinus jest jednym z podstawowych stosunków trygonometrycznych, a jego siła polega na tym, że porównuje dwie długości w sposób zależny wyłącznie od kąta, a nie od wielkości trójkąta. Jeśli potrzebny jest kąt w stopniach, arcus sinus zamieni stosunek na stopnie."
          }
        ]
      },
      "sec-triangle": {
        "h2": "Zrozumienie boku przeciwległego i przeciwprostokątnej",
        "blocks": [
          {
            "kind": "h3",
            "text": "Czym jest trójkąt prostokątny?"
          },
          {
            "kind": "p",
            "text": "Trójkąt prostokątny ma jeden kąt dokładnie [[90^\\circ]], czyli kąt między dwiema prostymi prostopadłymi, jak ściana stykająca się z równą podłogą. Przeciwprostokątna leży naprzeciw tego kąta prostego i jest zawsze najdłuższym bokiem, ponieważ musi spinać pełną przekątną przez róg. Pozostałe dwa kąty dzielą pozostałe 90 stopni, więc oba są ostre. Dwie przyprostokątne spotykają się pod kątem prostym, prostopadle do siebie, i to ich związek z przeciwprostokątną umożliwia trygonometrię trójkąta prostokątnego."
          },
          {
            "kind": "h3",
            "text": "Czym jest bok przeciwległy?"
          },
          {
            "kind": "p",
            "text": "Bok przeciwległy [[a]] to bok leżący bezpośrednio naprzeciw kąta odniesienia [[A]], jedyny bok, który nigdy nie dotyka jego wierzchołka. W zadaniach praktycznych często pełni rolę wzniesienia pionowego, różnicy wysokości lub składowej prostopadłej: wysokości ściany, na jaką sięga drabina, pionowego wzniesienia rampy albo różnicy wysokości w geodezji. To, który bok liczy się jako przeciwległy, zależy od wybranego kąta odniesienia, więc zmiana kąta [[A]] na kąt [[C]] zamienia oznaczenia boków przeciwległego i przyległego. Występuje w liczniku wzoru na sinus, ponieważ sinus mierzy, jak duży jest bok naprzeciw kąta względem przeciwprostokątnej."
          },
          {
            "kind": "h3",
            "text": "Czym jest przeciwprostokątna?"
          },
          {
            "kind": "p",
            "text": "Przeciwprostokątna [[c]] to bok naprzeciw kąta prostego: na każdym rysunku leży naprzeciw małego kwadratu oznaczającego róg [[90^\\circ]] i jest ściśle dłuższa od każdej z przyprostokątnych. W zadaniach praktycznych często pełni rolę długości pochyłej: drabiny, powierzchni rampy, krokwi, liny, stężenia ukośnego albo prostej drogi. Występuje w mianowniku wzoru na sinus, dlatego każda wartość sinusa wypada między 0 a 1: licznik jest zawsze prawdziwą przyprostokątną, krótszą od mianownika."
          },
          {
            "kind": "h3",
            "text": "Czym jest bok przyległy?"
          },
          {
            "kind": "p",
            "text": "Bok przyległy [[b]] to przyprostokątna dotykająca kąta odniesienia [[A]], która nie jest przeciwprostokątną. Nie odgrywa żadnej roli w podstawowym obliczeniu sinusa, dlatego kalkulator nigdy o niego nie pyta. Przydaje się przy obliczaniu cosinusa, tangensa albo brakującego boku oraz gdy twierdzenie Pitagorasa służy do sprawdzenia, czy dwie znane długości tworzą prawdziwy trójkąt prostokątny."
          }
        ],
        "imgAlt": "Trójkąt prostokątny z kątem A w lewym dolnym rogu, złoty bok przeciwległy a, niebieska przeciwprostokątna c, sin(A)=a/c",
        "figcaption": "Kąt A leży w lewym dolnym rogu; sinus używa złotego boku przeciwległego a i niebieskiej przeciwprostokątnej c, a nie boku przyległego b."
      },
      "sec-whatis": {
        "h2": "Zrozumienie stosunku sinus",
        "blocks": [
          {
            "kind": "p",
            "text": "Sinus kąta ostrego porównuje bok leżący bezpośrednio naprzeciw tego kąta z najdłuższym bokiem trójkąta:"
          },
          {
            "kind": "p",
            "text": "[[[\\boxed{\\sin(A)=\\frac{a}{c}}]]]"
          },
          {
            "kind": "p",
            "text": "Odczytuj [[\\sin(A)]] jako \"sinus kąta A\". Licznik [[a]] to bok przeciwległy; mianownik [[c]] to przeciwprostokątna. Ułamek odpowiada na jedno, konkretne pytanie: jaką część przeciwprostokątnej stanowi bok przeciwległy? Ponieważ oba wpisy to długości zmierzone w tej samej jednostce, wynik jest zwykłą liczbą, a liczba ta zależy wyłącznie od kąta, nigdy od wielkości trójkąta."
          },
          {
            "kind": "h3",
            "text": "Zrozumienie mnemotechniki SOH-CAH-TOA"
          },
          {
            "kind": "p",
            "text": "Uczniowie zapamiętują trzy główne stosunki za pomocą mnemotechniki SOH-CAH-TOA:"
          },
          {
            "kind": "p",
            "text": "<strong>SOH:</strong> Sinus = Przeciwległy / Przeciwprostokątna. <strong>CAH:</strong> Cosinus = Przyległy / Przeciwprostokątna. <strong>TOA:</strong> Tangens = Przeciwległy / Przyległy."
          },
          {
            "kind": "p",
            "text": "SOH odpowiada bezpośrednio wzorowi na sinus [[\\sin(A)=a/c]]. Mnemotechnika działa, ponieważ łączy każdą nazwę stosunku z dwoma potrzebnymi bokami, we właściwej kolejności: dla sinusa bok przeciwległy idzie na górę, a przeciwprostokątna na dół. Gdy oba boki są poprawnie nazwane, mnemotechnika zamienia pytanie \"który bok gdzie\" z problemu pamięciowego w proste wyszukiwanie."
          },
          {
            "kind": "h3",
            "text": "Dlaczego sinus jest stosunkiem"
          },
          {
            "kind": "p",
            "text": "Dzielenie dwóch długości daje liczbę bezwymiarową, ponieważ jednostki się skracają:"
          },
          {
            "kind": "p",
            "text": "[[[\\frac{3\\,\\text{m}}{5\\,\\text{m}}=0.6]]]"
          },
          {
            "kind": "p",
            "text": "Metry się skracają, zostaje 0,6. Użycie 300 cm i 500 cm daje identyczny wynik, ponieważ obie długości skalują się razem. Jedynym wymogiem są zgodne jednostki: oba pomiary muszą używać tej samej jednostki albo jeden trzeba przeliczyć przed dzieleniem. Stosunek jest więc własnością kąta, a nie konkretnej linijki użytej do zmierzenia trójkąta."
          },
          {
            "kind": "h3",
            "text": "Co oznacza wartość sinusa 0,6?"
          },
          {
            "kind": "p",
            "text": "[[\\sin(A)=0.6]] oznacza, że bok przeciwległy stanowi 60 procent przeciwprostokątnej. Trójkąt 3-4-5 to klasyczne odniesienie: [[\\sin(A)=3/5=0.6]]. Liczba od razu ujawnia kształt trójkąta: sinus bliski 1 oznacza, że bok przeciwległy prawie dorównuje przeciwprostokątnej, a kąt jest stromy; sinus bliski 0 oznacza, że bok przeciwległy jest krótki względem przeciwprostokątnej, a kąt jest łagodny. Nic z tego nie sugeruje, że 0,6 jest kątem; to proporcja, a tylko arcus sinus zamienia ją na stopnie."
          },
          {
            "kind": "h3",
            "text": "Dlaczego sinus mieści się między 0 a 1"
          },
          {
            "kind": "p",
            "text": "Przeciwprostokątna jest dłuższa od boku przeciwległego, więc [[0 \\lt a \\lt c]], a zatem:"
          },
          {
            "kind": "p",
            "text": "[[[\\boxed{0 \\lt \\frac{a}{c} \\lt 1}]]]"
          },
          {
            "kind": "p",
            "text": "Poprawny, niezdegenerowany trójkąt prostokątny nie może mieć stosunku sinus dokładnie 0 ani dokładnie 1 dla swojego kąta ostrego. Wartość dąży do 0, gdy kąt zbliża się do [[0^\\circ]], ponieważ bok przeciwległy kurczy się ku znikaniu; dąży do 1, gdy kąt zbliża się do [[90^\\circ]], ponieważ bok przeciwległy rośnie, aż niemal dorówna przeciwprostokątnej. Żadna z tych wartości granicznych nie jest osiągana przez kąt ostry prawdziwego trójkąta."
          },
          {
            "kind": "h3",
            "text": "Sinus a cosinus"
          },
          {
            "kind": "p",
            "text": "Oba stosunki mają tę samą przeciwprostokątną, ale używają różnych liczników:"
          },
          {
            "kind": "p",
            "text": "[[\\sin(A)=a/c]] oraz [[\\cos(A)=b/c]]."
          },
          {
            "kind": "p",
            "text": "Sinus używa boku przeciwległego, przyprostokątnej naprzeciw kąta; cosinus używa boku przyległego, przyprostokątnej obok kąta. Wynik powyżej 1 oznacza, że ułamek został odwrócony albo przeciwprostokątna znalazła się w liczniku. Sinus nie jest odwrotnością cosinusa: odwrotnością sinusa jest cosecans."
          }
        ],
        "imgAlt": "Trzy kroki: oznacz a=3, b=4, c=5 na trójkącie, zastosuj sin(A)=a/c, otrzymaj 0,6, czyli 60 procent",
        "figcaption": "Rozpoznaj boki, zastosuj wzór i oblicz: bok przeciwległy stanowi 60 procent przeciwprostokątnej."
      },
      "sec-formula": {
        "h2": "Jak działa wzór na sinus",
        "blocks": [
          {
            "kind": "p",
            "text": "Wzór podąża za logiczną sekwencją. Zacznij od definicji słownej:"
          },
          {
            "kind": "p",
            "text": "[[[\\sin(A)=\\frac{\\text{Opposite}}{\\text{Hypotenuse}}]]]"
          },
          {
            "kind": "p",
            "text": "Następnie użyj notacji stosowanej na stronie, z [[a]] dla boku przeciwległego i [[c]] dla przeciwprostokątnej:"
          },
          {
            "kind": "p",
            "text": "[[[\\boxed{\\sin(A)=\\frac{a}{c}}]]]"
          },
          {
            "kind": "p",
            "text": "Bok przeciwległy trafia do licznika, ponieważ sinus mierzy wielkość tego boku względem przeciwprostokątnej; przeciwprostokątna trafia do mianownika, ponieważ jest długością odniesienia, do której porównuje się każdy inny bok. Układ jest ustalony: licznik pyta \"jak duży jest ten bok?\", mianownik odpowiada \"w porównaniu z czym?\"."
          },
          {
            "kind": "h3",
            "text": "W pełni rozpisany przykład: trójkąt prostokątny 3-4-5"
          },
          {
            "kind": "p",
            "text": "Dane: [[a=3\\,\\text{cm}]], [[b=4\\,\\text{cm}]] i [[c=5\\,\\text{cm}]]:"
          },
          {
            "kind": "p",
            "text": "<strong>Krok 1:</strong> Zapisz wzór. [[\\sin(A)=a/c]]"
          },
          {
            "kind": "p",
            "text": "<strong>Krok 2:</strong> Podstaw znane wartości. [[\\sin(A)=3/5]]"
          },
          {
            "kind": "p",
            "text": "<strong>Krok 3:</strong> Podziel. [[\\boxed{\\sin(A)=0.6}]]"
          },
          {
            "kind": "p",
            "text": "<strong>Krok 4:</strong> Zinterpretuj wynik. Bok przeciwległy stanowi 60 procent przeciwprostokątnej."
          },
          {
            "kind": "p",
            "text": "<strong>Krok 5:</strong> Zweryfikuj trójkąt. [[3^2+4^2=5^2]], oraz [[9+16=25]]. Sprawdzenie Pitagorasa potwierdza, że te długości boków tworzą trójkąt prostokątny, więc wynik sinusa jest wiarygodny."
          },
          {
            "kind": "h3",
            "text": "Ważne wyjaśnienie"
          },
          {
            "kind": "p",
            "text": "Jeśli czytelnik potrzebuje kąta, a nie jego sinusa, wymagany jest arcus sinus: [[A=\\sin^{-1}(0.6)\\approx36.87^\\circ]]. Arcus sinus, nazywany też arcsinusem, to operacja odrębna od obliczania stosunku sinus. Istniejący kalkulator stosunku sinus oblicza stosunek z dwóch długości boków; nie zwraca bezpośrednio kąta."
          }
        ]
      },
      "sec-howto": {
        "h2": "Jak korzystać z kalkulatora stosunku sinus",
        "blocks": [
          {
            "kind": "p",
            "text": "Kalkulator dokładnie odzwierciedla wzór: dwa wejścia, jeden przycisk, jeden stosunek. Przejdź przez interfejs po kolei."
          }
        ],
        "steps": [
          "<strong>Rozpoznaj kąt odniesienia [[A]].</strong> Każde obliczenie sinusa jest zakotwiczone w jednym kącie ostrym; bok przeciwległy jest zdefiniowany względem niego.",
          "<strong>Zlokalizuj bok przeciwległy [[a]], bezpośrednio naprzeciw kąta [[A]].</strong> To przyprostokątna, która nigdy nie dotyka wierzchołka kąta.",
          "<strong>Zlokalizuj przeciwprostokątną [[c]], naprzeciw kąta prostego i najdłuższy bok.</strong> Leży naprzeciw małego kwadratu oznaczającego róg [[90^\\circ]].",
          "<strong>Uzyskaj lub zmierz obie długości boków.</strong> Użyj taśmy mierniczej, wymiaru z planu albo wartości z treści zadania.",
          "<strong>Wpisz długość boku przeciwległego w pierwsze pole wejściowe.</strong> Staje się licznikiem [[a]].",
          "<strong>Wpisz długość przeciwprostokątnej w drugie pole wejściowe.</strong> Staje się mianownikiem [[c]].",
          "<strong>Wybierz zgodne jednostki miary za pomocą dostępnych selektorów jednostek.</strong> Metry z metrami, centymetry z centymetrami; mieszane jednostki dają bezsensowny stosunek.",
          "<strong>Upewnij się, że oba pomiary są dodatnie.</strong> Zerowe lub ujemne długości nie mogą utworzyć trójkąta.",
          "<strong>Sprawdź, czy przeciwprostokątna jest dłuższa od boku przeciwległego.</strong> Jeśli [[a \\ge c]], wejścia są zamienione albo trójkąt jest niemożliwy.",
          "<strong>Kliknij Calculate sin(A).</strong> Narzędzie dzieli bok przeciwległy przez przeciwprostokątną.",
          "<strong>Odczytaj wynikowy stosunek sinus.</strong> To zwykła liczba dziesiętna, nie kąt i nie długość.",
          "<strong>Upewnij się, że wynik jest większy od 0 i mniejszy od 1.</strong> Dla poprawnego, niezdegenerowanego trójkąta prostokątnego o ostrym kącie odniesienia to jedyny dopuszczalny zakres.",
          "<strong>Użyj Reset, gdy chcesz wyczyścić wejścia i rozpocząć kolejne obliczenie.</strong>"
        ],
        "closingParagraphs": [
          "Kalkulator nie wymaga boku przyległego ani wejścia kąta. Wykonuje dzielenie i nic więcej: brak zapisywanej historii, wykresów czy ukrytych trybów."
        ]
      },
      "sec-examples": {
        "h2": "Krok po kroku: przykłady obliczania sinusa",
        "blocks": [
          {
            "kind": "h3",
            "text": "Przykład 1: Trójkąt prostokątny 3-4-5"
          },
          {
            "kind": "p",
            "text": "Dane: [[a=3\\,\\text{cm}]], [[b=4\\,\\text{cm}]] i [[c=5\\,\\text{cm}]]:"
          },
          {
            "kind": "p",
            "text": "[[\\sin(A)=\\frac{3}{5}]]"
          },
          {
            "kind": "p",
            "text": "[[\\boxed{\\sin(A)=0.6}]]"
          },
          {
            "kind": "p",
            "text": "Bok przeciwległy stanowi 60 procent przeciwprostokątnej."
          },
          {
            "kind": "h3",
            "text": "Przykład 2: Trójkąt prostokątny 5-12-13"
          },
          {
            "kind": "p",
            "text": "Dane: [[a=5\\,\\text{m}]], [[b=12\\,\\text{m}]] i [[c=13\\,\\text{m}]]:"
          },
          {
            "kind": "p",
            "text": "[[\\sin(A)=\\frac{5}{13}]]"
          },
          {
            "kind": "p",
            "text": "[[\\boxed{\\sin(A)\\approx0.3846}]]"
          },
          {
            "kind": "p",
            "text": "Bok przeciwległy stanowi około 38.46 procent przeciwprostokątnej."
          },
          {
            "kind": "h3",
            "text": "Przykład 3: Trójkąt 30-60-90"
          },
          {
            "kind": "p",
            "text": "Dla kąta odniesienia [[A=30^\\circ]] bok przeciwległy jest połową przeciwprostokątnej. Użyj [[a=1\\,\\text{cm}]], [[b=\\sqrt{3}\\,\\text{cm}]] i [[c=2\\,\\text{cm}]]:"
          },
          {
            "kind": "p",
            "text": "[[\\sin(30^\\circ)=\\frac{1}{2}]]"
          },
          {
            "kind": "p",
            "text": "[[\\boxed{\\sin(30^\\circ)=0.5}]]"
          },
          {
            "kind": "p",
            "text": "To użyteczny wynik dla kąta szczególnego: przy 30 stopniach bok przeciwległy jest dokładnie połową przeciwprostokątnej, dlatego ten trójkąt pojawia się w tylu zadaniach podręcznikowych."
          },
          {
            "kind": "h3",
            "text": "Przykład 4: Trójkąt 45-45-90"
          },
          {
            "kind": "p",
            "text": "Dane: [[a=1\\,\\text{cm}]], [[b=1\\,\\text{cm}]] i [[c=\\sqrt{2}\\,\\text{cm}]]:"
          },
          {
            "kind": "p",
            "text": "[[\\sin(45^\\circ)=\\frac{1}{\\sqrt{2}}]]"
          },
          {
            "kind": "p",
            "text": "[[\\boxed{\\sin(45^\\circ)\\approx0.7071}]]"
          },
          {
            "kind": "p",
            "text": "Równe przyprostokątne dają równe wartości sinusa i cosinusa dla obu kątów ostrych: przy 45 stopniach każdy kąt ostry leży naprzeciw przyprostokątnej 1 i przeciwprostokątnej [[\\sqrt{2}]], więc sinus i cosinus się pokrywają."
          }
        ]
      },
      "sec-applications": {
        "h2": "Przykłady z życia wzięte dotyczące stosunku sinus",
        "blocks": [
          {
            "kind": "p",
            "text": "Każdy przykład podaje sytuację, rozpoznaje bok przeciwległy i przeciwprostokątną, podstawia je do wzoru i interpretuje wynik prostym językiem."
          },
          {
            "kind": "h3",
            "text": "Przykład 5: Obliczanie stosunku sinus drabiny"
          },
          {
            "kind": "p",
            "text": "Drabina ma 5 m długości i sięga 4 m w górę pionowej ściany. Kąt odniesienia [[A]] leży między drabiną a poziomym gruntem. Drabina jest przeciwprostokątną, [[c=5\\,\\text{m}]], a pionowa wysokość jest bokiem przeciwległym, [[a=4\\,\\text{m}]]:"
          },
          {
            "kind": "p",
            "text": "[[\\sin(A)=\\frac{4}{5}]]"
          },
          {
            "kind": "p",
            "text": "[[\\boxed{\\sin(A)=0.8}]]"
          },
          {
            "kind": "p",
            "text": "Pionowa wysokość stanowi 80 procent długości drabiny. Stosunek opisuje geometrię drabiny i nie przesądza, czy drabina jest bezpiecznie ustawiona."
          },
          {
            "kind": "h3",
            "text": "Przykład 6: Obliczanie stosunku sinus krokwi dachowej"
          },
          {
            "kind": "p",
            "text": "Krokiew dachowa ma długość pochyłą 6.5 m i pionowe wzniesienie 2.5 m. Krokiew jest przeciwprostokątną, [[c=6.5\\,\\text{m}]], a pionowe wzniesienie jest bokiem przeciwległym, [[a=2.5\\,\\text{m}]]:"
          },
          {
            "kind": "p",
            "text": "[[\\sin(A)=\\frac{2.5}{6.5}]]"
          },
          {
            "kind": "p",
            "text": "[[\\boxed{\\sin(A)\\approx0.3846}]]"
          },
          {
            "kind": "p",
            "text": "Pionowe wzniesienie stanowi około 38.46 procent długości krokwi. Stosunek nie przesądza przydatności konstrukcyjnej ani zgodności projektu dachu."
          },
          {
            "kind": "h3",
            "text": "Przykład 7: Ocena stosunku sinus rampy"
          },
          {
            "kind": "p",
            "text": "Uproszczona rampa ma długość pochyłą 9.5 m i pionowe wzniesienie 0.75 m. Pochyłość jest przeciwprostokątną, [[c=9.5\\,\\text{m}]], a pionowe wzniesienie jest bokiem przeciwległym, [[a=0.75\\,\\text{m}]]:"
          },
          {
            "kind": "p",
            "text": "[[\\sin(A)=\\frac{0.75}{9.5}]]"
          },
          {
            "kind": "p",
            "text": "[[\\boxed{\\sin(A)\\approx0.07895}]]"
          },
          {
            "kind": "p",
            "text": "Pionowe wzniesienie stanowi około 7.89 procent długości pochyłej, łagodne zbocze. Sam ten stosunek nie przesądza dostępności ani zgodności z przepisami budowlanymi."
          },
          {
            "kind": "h3",
            "text": "Przykład 8: Pomiar geodezyjny"
          },
          {
            "kind": "p",
            "text": "Uproszczony trójkąt geodezyjny ma odległość w linii prostej 50 m i pionową różnicę wysokości 30 m. Prosta jest przeciwprostokątną, [[c=50\\,\\text{m}]], a pionowa różnica jest bokiem przeciwległym, [[a=30\\,\\text{m}]]:"
          },
          {
            "kind": "p",
            "text": "[[\\sin(A)=\\frac{30}{50}]]"
          },
          {
            "kind": "p",
            "text": "[[\\boxed{\\sin(A)=0.6}]]"
          },
          {
            "kind": "p",
            "text": "Pionowa różnica stanowi 60 procent odległości w linii prostej. Prawdziwa geodezja może wymagać dodatkowych poprawek, korekty wysokości instrumentu i bardziej szczegółowych pomiarów."
          },
          {
            "kind": "h3",
            "text": "Przykład 9: Odciąg podtrzymujący słup"
          },
          {
            "kind": "p",
            "text": "Odciąg ma 13 m długości, a punkt jego mocowania znajduje się 5 m powyżej poziomu kotwy gruntowej. Lina jest przeciwprostokątną, [[c=13\\,\\text{m}]], a pionowa odległość jest bokiem przeciwległym, [[a=5\\,\\text{m}]]:"
          },
          {
            "kind": "p",
            "text": "[[\\sin(A)=\\frac{5}{13}]]"
          },
          {
            "kind": "p",
            "text": "[[\\boxed{\\sin(A)\\approx0.3846}]]"
          },
          {
            "kind": "p",
            "text": "Pionowa odległość stanowi około 38.46 procent długości liny. Stosunek nie przesądza naciągu liny, wytrzymałości kotwy ani bezpieczeństwa konstrukcji."
          },
          {
            "kind": "h3",
            "text": "Przykład 10: Obliczanie stosunku sinus belki schodowej"
          },
          {
            "kind": "p",
            "text": "Uproszczona belka schodowa (policzek) ma 5 m długości i pokonuje pionowe wzniesienie 3 m. Belka jest przeciwprostokątną, [[c=5\\,\\text{m}]], a pionowe wzniesienie jest bokiem przeciwległym, [[a=3\\,\\text{m}]]:"
          },
          {
            "kind": "p",
            "text": "[[\\sin(A)=\\frac{3}{5}]]"
          },
          {
            "kind": "p",
            "text": "[[\\boxed{\\sin(A)=0.6}]]"
          },
          {
            "kind": "p",
            "text": "Pionowe wzniesienie stanowi 60 procent długości ukośnej belki. Obliczenie nie weryfikuje wymiarów schodów ani zgodności z przepisami budowlanymi."
          },
          {
            "kind": "h3",
            "text": "Przykład 11: Zrozumienie składowej pionowej wysięgnika dźwigu"
          },
          {
            "kind": "p",
            "text": "Uproszczony wysięgnik dźwigu ma długość 10 m i składową pionową 8 m. Wysięgnik jest przeciwprostokątną, [[c=10\\,\\text{m}]], a składowa pionowa jest bokiem przeciwległym, [[a=8\\,\\text{m}]]:"
          },
          {
            "kind": "p",
            "text": "[[\\sin(A)=\\frac{8}{10}]]"
          },
          {
            "kind": "p",
            "text": "[[\\boxed{\\sin(A)=0.8}]]"
          },
          {
            "kind": "p",
            "text": "Składowa pionowa stanowi 80 procent długości wysięgnika. Stosunek nie przesądza udźwigu dźwigu ani bezpieczeństwa pracy."
          },
          {
            "kind": "h3",
            "text": "Przykład 12: Prosty odcinek lotu samolotu"
          },
          {
            "kind": "p",
            "text": "W uproszczonym odcinku lotu samolot pokonuje 5 km wzdłuż prostej trasy, zyskując 1.5 km wysokości. Trasa jest przeciwprostokątną, [[c=5\\,\\text{km}]], a pionowy zysk jest bokiem przeciwległym, [[a=1.5\\,\\text{km}]]:"
          },
          {
            "kind": "p",
            "text": "[[\\sin(A)=\\frac{1.5}{5}]]"
          },
          {
            "kind": "p",
            "text": "[[\\boxed{\\sin(A)=0.3}]]"
          },
          {
            "kind": "p",
            "text": "Pionowy zysk stanowi 30 procent długości prostej trasy. To wyidealizowany przykład geometryczny, a nie pełne obliczenie nawigacji lotniczej."
          },
          {
            "kind": "h3",
            "text": "Przykład 13: Ukośne stężenie mechaniczne"
          },
          {
            "kind": "p",
            "text": "Ukośne stężenie ma długość 2 m i składową pionową 1.6 m. Stężenie jest przeciwprostokątną, [[c=2\\,\\text{m}]], a składowa pionowa jest bokiem przeciwległym, [[a=1.6\\,\\text{m}]]:"
          },
          {
            "kind": "p",
            "text": "[[\\sin(A)=\\frac{1.6}{2}]]"
          },
          {
            "kind": "p",
            "text": "[[\\boxed{\\sin(A)=0.8}]]"
          },
          {
            "kind": "p",
            "text": "Składowa pionowa stanowi 80 procent długości stężenia. Stosunek nie określa wytrzymałości ani przydatności stężenia."
          },
          {
            "kind": "h3",
            "text": "Przykład 14: Stosunek sinus szlaku turystycznego"
          },
          {
            "kind": "p",
            "text": "Uproszczony prosty odcinek szlaku ma długość trasy 100 m i pionowy zysk wysokości 25 m. Trasa jest przeciwprostokątną, [[c=100\\,\\text{m}]], a zysk wysokości jest bokiem przeciwległym, [[a=25\\,\\text{m}]]:"
          },
          {
            "kind": "p",
            "text": "[[\\sin(A)=\\frac{25}{100}]]"
          },
          {
            "kind": "p",
            "text": "[[\\boxed{\\sin(A)=0.25}]]"
          },
          {
            "kind": "p",
            "text": "Zysk wysokości stanowi 25 procent długości prostej trasy. Rzeczywiste szlaki turystyczne mogą zawierać zakręty i zmienne nachylenia."
          },
          {
            "kind": "h3",
            "text": "Przykład 15: Wspornik markizy"
          },
          {
            "kind": "p",
            "text": "Wspornik markizy ma długość 3 m i składową pionową 1.2 m. Wspornik jest przeciwprostokątną, [[c=3\\,\\text{m}]], a składowa pionowa jest bokiem przeciwległym, [[a=1.2\\,\\text{m}]]:"
          },
          {
            "kind": "p",
            "text": "[[\\sin(A)=\\frac{1.2}{3}]]"
          },
          {
            "kind": "p",
            "text": "[[\\boxed{\\sin(A)=0.4}]]"
          },
          {
            "kind": "p",
            "text": "Składowa pionowa stanowi 40 procent długości wspornika. Obliczenie nie przesądza przydatności konstrukcyjnej."
          },
          {
            "kind": "h3",
            "text": "Przykład 16: Linia wzroku do wierzchołka drzewa"
          },
          {
            "kind": "p",
            "text": "Uproszczona linia wzroku do wierzchołka drzewa mierzy 20 m. Pionowa różnica między poziomem oczu obserwatora a wierzchołkiem drzewa wynosi 12 m. Linia wzroku jest przeciwprostokątną, [[c=20\\,\\text{m}]], a pionowa różnica jest bokiem przeciwległym, [[a=12\\,\\text{m}]]:"
          },
          {
            "kind": "p",
            "text": "[[\\sin(A)=\\frac{12}{20}]]"
          },
          {
            "kind": "p",
            "text": "[[\\boxed{\\sin(A)=0.6}]]"
          },
          {
            "kind": "p",
            "text": "Pionowa różnica stanowi 60 procent odległości w linii wzroku. Wynik nie podaje całkowitej wysokości drzewa nad gruntem, chyba że uwzględni się wysokość oczu obserwatora i inne potrzebne informacje."
          },
          {
            "kind": "p",
            "text": "Sinus jest stosunkiem matematycznym, a nie wielkością fizyczną z jednostkami. Jego praktyczna wartość wynika z porównywania składowej pionowej lub prostopadłej z długością pochyłą, obliczania składowych, gdy kąt jest znany, oraz weryfikowania zależności geometrycznych. Nie traktuj samego sinusa jako poświadczenia bezpieczeństwa konstrukcji, nośności, dostępności ani zgodności inżynierskiej."
          }
        ],
        "tables": [
          {
            "headers": ["Sytuacja", "Przeciwległy [[a]]", "Przeciwprostokątna [[c]]", "Wzór", "Stosunek", "Znaczenie"],
            "rows": [
              ["Drabina", "4 m", "5 m", "4/5", "0.8", "Wysokość to 80% długości drabiny"],
              ["Krokiew dachowa", "2.5 m", "6.5 m", "2.5/6.5", "0.3846", "Wzniesienie to 38.46% długości krokwi"],
              ["Rampa", "0.75 m", "9.5 m", "0.75/9.5", "0.07895", "Łagodne zbocze, wzniesienie 7.89%"],
              ["Geodezja", "30 m", "50 m", "30/50", "0.6", "Różnica wysokości to 60% odległości"],
              ["Odciąg", "5 m", "13 m", "5/13", "0.3846", "Wysokość to 38.46% długości liny"],
              ["Belka schodowa", "3 m", "5 m", "3/5", "0.6", "Wzniesienie to 60% długości belki"],
              ["Wysięgnik dźwigu", "8 m", "10 m", "8/10", "0.8", "Zasięg pionowy to 80% wysięgnika"],
              ["Odcinek lotu", "1.5 km", "5 km", "1.5/5", "0.3", "Zysk to 30% trasy lotu"],
              ["Stężenie ukośne", "1.6 m", "2 m", "1.6/2", "0.8", "Składowa pionowa to 80% stężenia"],
              ["Szlak turystyczny", "25 m", "100 m", "25/100", "0.25", "Zysk to 25% długości trasy"],
              ["Wspornik markizy", "1.2 m", "3 m", "1.2/3", "0.4", "Składowa pionowa to 40% wspornika"],
              ["Linia wzroku", "12 m", "20 m", "12/20", "0.6", "Różnica wysokości to 60% linii wzroku"]
            ]
          }
        ],
        "imgAlt": "Cztery panele: drabina 0.8, rampa 0.07895, geodezja 0.6, wysięgnik 0.8, każdy z opisanym trójkątem",
        "figcaption": "Cztery praktyczne obliczenia: drabina, rampa, geodezja i wysięgnik dźwigu, każde z trójkątem, wzorem i stosunkiem."
      },
      "sec-angle": {
        "h2": "Zrozumienie związku między sinusem a wielkością kąta",
        "blocks": [
          {
            "kind": "p",
            "text": "Sinus rośnie wraz ze wzrostem kąta odniesienia. Geometria wyjaśnia dlaczego: gdy kąt [[A]] jest mały, bok przeciwległy jest krótki względem przeciwprostokątnej, więc stosunek leży blisko 0. W miarę jak kąt się rozszerza, bok przeciwległy staje się większą częścią przeciwprostokątnej, a stosunek wspina się ku 1. Przy [[30^\\circ]] sinus wynosi dokładnie 0,5; przy [[45^\\circ]] około 0.7071; przy [[60^\\circ]] około 0.8660; a gdy kąt zbliża się do [[90^\\circ]], sinus zbliża się do 1."
          }
        ],
        "tables": [
          {
            "headers": ["Kąt [[A]]", "Stosunek sinus", "Interpretacja"],
            "rows": [
              ["[[30^\\circ]]", "0.5", "Bok przeciwległy to połowa przeciwprostokątnej"],
              ["[[45^\\circ]]", "Około 0.7071", "Bok przeciwległy to około 70.71% przeciwprostokątnej"],
              ["[[60^\\circ]]", "Około 0.8660", "Bok przeciwległy to około 86.60% przeciwprostokątnej"],
              ["[[80^\\circ]]", "Około 0.9848", "Bok przeciwległy to około 98.48% przeciwprostokątnej"]
            ]
          }
        ],
        "closingParagraphs": [
          "Wzorzec jest prosty i monotoniczny: każdy wzrost kąta podnosi sinus, a stosunek pozostaje między 0 a 1 dla każdego kąta ostrego. Sinus opisuje kształt trójkąta, a nie jego bezwzględną wielkość: dwa trójkąty o tym samym kącie ostrym mają ten sam stosunek sinus, nawet gdy długości ich boków różnią się. Wpis [[90^\\circ]] jest graniczną wartością odniesienia, a nie kątem ostrym niezdegenerowanego trójkąta prostokątnego."
        ],
        "imgAlt": "Trzy trójkąty o kątach 30, 45 i 60 stopni z wartościami sinusa 0.5, 0.7071 i 0.8660; sinus rośnie wraz z kątem",
        "figcaption": "W miarę jak kąt A rośnie, bok przeciwległy staje się większą częścią przeciwprostokątnej, więc sin(A) rośnie."
      },
      "sec-hypotenuse": {
        "h2": "Jak znaleźć bok przeciwległy przy użyciu sinusa",
        "blocks": [
          {
            "kind": "p",
            "text": "Wzór na sinus można przekształcić, aby znaleźć bok przeciwległy, gdy znane są przeciwprostokątna i kąt. Zacznij od [[\\sin(A)=a/c]] i pomnóż obie strony przez [[c]]:"
          },
          {
            "kind": "p",
            "text": "[[[\\boxed{a=c\\sin(A)}]]]"
          },
          {
            "kind": "p",
            "text": "Bok przeciwległy równa się przeciwprostokątnej pomnożonej przez sinus kąta. Przy przeciwprostokątnej [[c=10\\,\\text{m}]] i kącie [[A=30^\\circ]], wiedząc, że [[\\sin(30^\\circ)=0.5]]:"
          },
          {
            "kind": "p",
            "text": "[[a=10\\times0.5]]"
          },
          {
            "kind": "p",
            "text": "[[\\boxed{a=5\\,\\text{m}}]]"
          },
          {
            "kind": "p",
            "text": "Bok przeciwległy jest połową przeciwprostokątnej dla kąta [[30^\\circ]], co zgadza się z geometrią 30-60-90: bok naprzeciw 30 stopni jest dokładnie połową przeciwprostokątnej."
          },
          {
            "kind": "p",
            "text": "Przeciwprostokątną można znaleźć tak samo, przekształcając ponownie:"
          },
          {
            "kind": "p",
            "text": "[[[\\boxed{c=\\frac{a}{\\sin(A)}}]]]"
          },
          {
            "kind": "p",
            "text": "Przy boku przeciwległym [[a=6\\,\\text{m}]] i [[A=30^\\circ]]: [[c=6/0.5]], więc [[\\boxed{c=12\\,\\text{m}}]]. To matematyczne przekształcenia tego samego wzoru. Kalkulator na tej stronie zwraca stosunek sinus z długości boków; nie oblicza bezpośrednio brakujących boków."
          }
        ]
      },
      "sec-recover": {
        "h2": "Jak znaleźć kąt na podstawie stosunku sinus",
        "blocks": [
          {
            "kind": "p",
            "text": "Stosunek sinus i kąt to różne wielkości: jedna jest bezwymiarowym porównaniem boków, druga jest mierzona w stopniach. Gdy stosunek sinus jest znany, a potrzebny jest kąt, można użyć arcus sinusa:"
          },
          {
            "kind": "p",
            "text": "[[[\\boxed{A=\\sin^{-1}\\left(\\frac{a}{c}\\right)}]]]"
          },
          {
            "kind": "p",
            "text": "Arcus sinus nazywany jest też arcsinusem. Dane: [[\\sin(A)=0.6]]:"
          },
          {
            "kind": "p",
            "text": "[[A=\\sin^{-1}(0.6)]]"
          },
          {
            "kind": "p",
            "text": "[[\\boxed{A\\approx36.87^\\circ}]]"
          },
          {
            "kind": "p",
            "text": "Kąt wynosi około [[36.87^\\circ]], gdy kalkulator jest ustawiony na stopnie. To odrębne obliczenie kąta, nie coś, co kalkulator stosunku sinus wykonuje bezpośrednio. Arcus sinus może mieć wiele rozwiązań kątowych w szerszej trygonometrii, ale ograniczenie do kąta ostrego w trójkącie prostokątnym wybiera odpowiednie ostre rozwiązanie."
          }
        ]
      },
      "sec-mistakes": {
        "h2": "Typowe błędy przy obliczaniu sinusa",
        "blocks": [
          {
            "kind": "p",
            "text": "Większość błędów sinusa wynika z odwróconego ułamka, błędnie oznaczonego boku albo pomyłki jednostek. Przejrzyj tę listę, zanim zaufasz wynikowi."
          }
        ],
        "steps": [
          "<strong>Użycie boku przyległego zamiast przeciwległego.</strong> Dzielenie [[b/c]] oblicza cosinus. Przy [[a=3]], [[b=4]] i [[c=5]] zły bok daje 0.8; właściwy daje 0.6.",
          "<strong>Odwrócenie wzoru i obliczenie [[c/a]] zamiast [[a/c]].</strong> To zwraca cosecans, nie sinus. Przy [[a=3]] i [[c=5]] odwrócony ułamek daje 1.6667, zawsze powyżej 1, wyraźny znak ostrzegawczy.",
          "<strong>Mylenie sinusa z cosinusem.</strong> Sinus używa boku przeciwległego; cosinus używa boku przyległego. Jeśli w liczniku jest zły bok, odpowiedzią jest cosinus, nie sinus.",
          "<strong>Mylenie sinusa z cosecansem.</strong> Cosecans jest odwrotnością, przeciwprostokątna podzielona przez bok przeciwległy. Podobne nazwy powodują prawdziwe błędy, ale kolejność ułamka jest dokładnie odwrócona.",
          "<strong>Wpisanie boku przeciwległego dłuższego od przeciwprostokątnej.</strong> Przeciwprostokątna jest zawsze najdłuższym bokiem. Jeśli [[a \\ge c]], wejścia są zamienione albo trójkąt jest niemożliwy.",
          "<strong>Wpisywanie zerowych lub ujemnych długości boków.</strong> Trójkąt nie może mieć zerowego ani ujemnego boku, więc takie wejścia sygnalizują błąd wprowadzania danych albo brakujący pomiar, a nie poprawny przypadek brzegowy.",
          "<strong>Mieszanie jednostek miary.</strong> Bok przeciwległy 3 m z przeciwprostokątną 50 cm daje 6, bezsensowną liczbę. Najpierw przelicz na jedną jednostkę: 3 m i 5 m dają poprawne 0.6.",
          "<strong>Podawanie stosunku sinus jako kąta w stopniach.</strong> Wynik 0.6 to stosunek, nie [[0.6^\\circ]]. Traktowanie go jako stopni wprowadza nonsens do każdego kolejnego obliczenia.",
          "<strong>Zakładanie, że sinus ma jednostki fizyczne.</strong> Jednostki skracają się w dzieleniu, więc \"0.6 m\" jest błędne. Zapisz zwykłą liczbę, a jednostki zostaw w pomiarach wejściowych, tam gdzie ich miejsce.",
          "<strong>Mylenie kąta odniesienia z kątem prostym.</strong> Sinus zawsze używa kąta ostrego. Kąt [[90^\\circ]] nigdy nie jest kątem odniesienia [[A]] w tych obliczeniach.",
          "<strong>Zaokrąglanie zbyt wcześnie.</strong> Zaokrąglenie pośredniego dzielenia do dwóch miejsc po przecinku i kontynuowanie obliczeń potęguje błąd. Zachowaj pełną precyzję na każdym kroku i zaokrąglij tylko ostateczną odpowiedź.",
          "<strong>Zakładanie, że sinus jest taki sam dla każdego kąta.</strong> Każdy kąt ma własną wartość sinusa. Wynik 0.6 należy do jednego konkretnego kąta (około 36.87 stopnia), a nie do każdego trójkąta prostokątnego.",
          "<strong>Zakładanie, że wartość sinusa 0.6 oznacza kąt [[0.6^\\circ]].</strong> Stosunek nie jest miarą stopni. Przelicz arcus sinusem, jeśli potrzebny jest sam kąt.",
          "<strong>Mylenie odwrotności sinusa z arcus sinusem.</strong> [[1/\\sin(A)]] to cosecans, stosunek; [[\\sin^{-1}]] to arcus sinus, który zwraca kąt. Podobne nazwy powodują prawdziwe błędy, więc czytaj notację uważnie.",
          "<strong>Zakładanie, że stosunek sinus określa bezwzględną wielkość trójkąta.</strong> Sinus opisuje kształt, nie wielkość: nieskończenie wiele trójkątów ma sinus 0.6, od boku przeciwległego 3 cm do boku 3 km. Stosunek ustala proporcje; rzeczywiste długości wymagają co najmniej jednego pomiaru boku."
        ],
        "closingParagraphs": [
          "<strong>Błędnie a poprawnie: rozpisane porównanie</strong>",
          "Dane: bok przeciwległy [[a=3]] i przeciwprostokątna [[c=5]]:",
          "<strong>Błędnie:</strong> [[5/3\\approx1.6667]]. To stosunek cosecansa, nie sinusa. Licznik i mianownik są odwrócone.",
          "<strong>Poprawnie:</strong> [[\\sin(A)=3/5=0.6]].",
          "<strong>Weryfikacja:</strong> [[\\csc(A)=1/0.6\\approx1.6667]]. Sprawdzenie odwrotnością potwierdza wynik, a odpowiedź leży między 0 a 1, jak każdy poprawny sinus."
        ]
      },
      "sec-verify": {
        "h2": "Jak sprawdzić, czy wynik sinusa jest poprawny",
        "blocks": [
          {
            "kind": "p",
            "text": "Poprawny, niezdegenerowany trójkąt prostokątny wymaga dodatnich boków, przy czym przeciwprostokątna jest ściśle najdłuższa, [[0 \\lt a \\lt c]], więc wynik sinusa musi wypaść między 0 a 1:"
          },
          {
            "kind": "p",
            "text": "[[[\\boxed{0 \\lt \\frac{a}{c} \\lt 1}]]]"
          },
          {
            "kind": "p",
            "text": "Oba pomiary muszą używać zgodnych jednostek. Wynik mniejszy lub równy 0 albo większy lub równy 1 zwykle wskazuje nieprawidłowe wejścia, odwrócone boki albo błędny model trójkąta."
          },
          {
            "kind": "h3",
            "text": "Metoda 1: Sprawdź stosunek"
          },
          {
            "kind": "p",
            "text": "Zweryfikuj bezpośrednio [[\\sin(A)=a/c]]. Przy [[a=3]] i [[c=5]]: [[\\sin(A)=3/5=0.6]]. Jeśli drugie ręczne obliczenie się nie zgadza, bok został błędnie oznaczony albo jednostka została zmieszana."
          },
          {
            "kind": "h3",
            "text": "Metoda 2: Sprawdź twierdzenie Pitagorasa"
          },
          {
            "kind": "p",
            "text": "Jeśli bok przyległy jest potrzebny, oblicz [[b=\\sqrt{c^2-a^2}]]. Dla [[a=3]] i [[c=5]]: [[b=\\sqrt{25-9}=4]], oraz [[3^2+4^2=5^2]]. To potwierdza wymiary trójkąta prostokątnego 3-4-5. Bok przyległy jest tu wartością weryfikacyjną, a nie częścią podstawowego wzoru na sinus."
          },
          {
            "kind": "h3",
            "text": "Metoda 3: Sprawdź przy użyciu arcus sinusa"
          },
          {
            "kind": "p",
            "text": "Dla stosunku sinus 0.6: [[A=\\sin^{-1}(0.6)\\approx36.87^\\circ]]. Ponieważ sinus leży umiarkowanie powyżej 0.5, kąt powinien wypaść nieco powyżej [[30^\\circ]]; jeśli tak nie jest, oznaczenia boków są prawdopodobnie zamienione. Drobne różnice mogą wynikać z zaokrągleń."
          }
        ]
      },
      "sec-vs": {
        "h2": "Sinus a cosinus, tangens i cosecans",
        "blocks": [
          {
            "kind": "p",
            "text": "Każdy stosunek porównuje inną parę boków, przy tym samym kącie odniesienia i oznaczeniach boków:"
          },
          {
            "kind": "p",
            "text": "Sinus i cosecans tworzą parę odwrotną: [[\\csc(A)=1/\\sin(A)]]. Jeśli [[\\sin(A)=0.6]], to [[\\csc(A)\\approx1.6667]]. Sięgaj po sinus, gdy bok przeciwległy jest znany względem przeciwprostokątnej, gdy składową pionową trzeba porównać z długością pochyłą albo gdy SOH jest pasującą mnemotechniką; sięgaj po cosinus dla przyległego przez przeciwprostokątną, po tangens, gdy znane są obie przyprostokątne, i po cosecans, gdy przeciwprostokątna jest porównywana z bokiem przeciwległym."
          },
          {
            "kind": "p",
            "text": "Sąsiednie stosunki znajdziesz w <a href=\"/cosine-ratio-calculator/\" class=\"text-primary hover:underline\">Kalkulatorze stosunku cosinus</a>, <a href=\"/tangent-ratio-calculator/\" class=\"text-primary hover:underline\">Kalkulatorze stosunku tangens</a>, <a href=\"/cosecant-ratio-calculator/\" class=\"text-primary hover:underline\">Kalkulatorze stosunku cosecans</a>, <a href=\"/secant-ratio-calculator/\" class=\"text-primary hover:underline\">Kalkulatorze stosunku secans</a> i <a href=\"/cotangent-ratio-calculator/\" class=\"text-primary hover:underline\">Kalkulatorze stosunku cotangens</a>."
          }
        ],
        "tables": [
          {
            "headers": ["Stosunek", "Wzór", "Co porównuje"],
            "rows": [
              ["Sinus", "sin(A) = a/c", "Bok przeciwległy do przeciwprostokątnej"],
              ["Cosinus", "cos(A) = b/c", "Bok przyległy do przeciwprostokątnej"],
              ["Tangens", "tan(A) = a/b", "Bok przeciwległy do boku przyległego"],
              ["Cosecans", "csc(A) = c/a", "Przeciwprostokątna do boku przeciwległego"],
              ["Secans", "sec(A) = c/b", "Przeciwprostokątna do boku przyległego"],
              ["Cotangens", "cot(A) = b/a", "Bok przyległy do boku przeciwległego"]
            ]
          }
        ]
      },
      "sec-related": {
        "h2": "Poznaj powiązane kalkulatory trygonometryczne",
        "related": [
          {
            "name": "Kalkulator stosunku cosinus"
          },
          {
            "name": "Kalkulator stosunku tangens"
          },
          {
            "name": "Kalkulator stosunku cosecans"
          },
          {
            "name": "Kalkulator stosunku secans"
          },
          {
            "name": "Kalkulator stosunku cotangens"
          },
          {
            "name": "Kalkulator kąta trójkąta prostokątnego"
          }
        ]
      },
      "sec-conclusion": {
        "h2": "Korzystaj ze stosunku sinus z pewnością",
        "blocks": [
          {
            "kind": "p",
            "text": "Sinus jest pierwszym z trzech głównych stosunków: podziel bok przeciwległy przez przeciwprostokątną, a opiszesz, jaka część najdłuższego boku leży naprzeciw kąta. Wzór [[\\sin(A)=a/c]] potrzebuje tylko dwóch pomiarów, odpowiedź jest zawsze bezwymiarową liczbą między 0 a 1 i rośnie wraz ze wzrostem kąta odniesienia. Gdy potrzebny jest brakujący bok, [[a=c\\sin(A)]] odzyskuje bok przeciwległy; gdy potrzebny jest kąt, [[A=\\sin^{-1}(a/c)]] go odzyskuje. Drabina, krokiew, rampa czy podręcznikowe 3-4-5, metoda nigdy się nie zmienia: rozpoznaj bok przeciwległy, rozpoznaj przeciwprostokątną, podziel i zweryfikuj zakresem 0 do 1."
          }
        ]
      }
    },
    "faqs": [
      {
        "question": "Jaki jest wzór na sinus dla trójkąta prostokątnego?",
        "answer": "sin(A) = a / c: podziel bok przeciwległy a przez przeciwprostokątną c. Przy boku przeciwległym 3 cm i przeciwprostokątnej 5 cm wynik to 3/5 = 0.6. Ten ułamek dziesiętny to pełna odpowiedź, bezwymiarowy stosunek, nie kąt."
      },
      {
        "question": "Jak obliczyć sinus z dwóch długości boków?",
        "answer": "Rozpoznaj kąt odniesienia A, zmierz bok przeciwległy a i przeciwprostokątną c w tej samej jednostce, upewnij się, że oba są dodatnie i że c jest dłuższe od a, a następnie podziel: sin(A) = a / c. Na tej stronie wpisz bok przeciwległy w pierwsze pole, a przeciwprostokątną w drugie, po czym kliknij Calculate sin(A)."
      },
      {
        "question": "Jaka jest różnica między sinusem a cosinusem?",
        "answer": "Sinus dzieli bok przeciwległy przez przeciwprostokątną (a/c); cosinus dzieli bok przyległy przez przeciwprostokątną (b/c). Oba używają tej samej przeciwprostokątnej, ale licznik różni się. Wynik powyżej 1 oznacza, że ułamek został odwrócony albo bok został błędnie oznaczony."
      },
      {
        "question": "Dlaczego sinus jest mniejszy od 1 dla kąta ostrego w trójkącie prostokątnym?",
        "answer": "W poprawnym, niezdegenerowanym trójkącie prostokątnym przeciwprostokątna jest ściśle dłuższa od każdej przyprostokątnej, więc 0 < a < c. Dzielenie mniejszej długości przez większą zawsze daje wynik poniżej 1: 0 < a/c < 1 dla każdego ostrego kąta odniesienia."
      },
      {
        "question": "Czy sinus może wynosić 1 dla kąta ostrego w poprawnym trójkącie prostokątnym?",
        "answer": "Nie. Sinus równy dokładnie 1 wymagałby, aby bok przeciwległy równał się przeciwprostokątnej, co zwija trójkąt do pionowej linii bez szerokości. Wartość 1 jest wartością graniczną, do której dąży się, gdy kąt A zbliża się do 90 stopni, nigdy wartością, jaką wytwarza prawdziwy trójkąt."
      },
      {
        "question": "Co oznacza wartość sinusa 0.6?",
        "answer": "Bok przeciwległy stanowi 60 procent przeciwprostokątnej. W trójkącie 3-4-5 bok naprzeciw kąta A ma 3 jednostki, a przeciwprostokątna 5 jednostek, więc sin(A) = 3/5 = 0.6. Opisuje to kształt trójkąta i nie jest kątem 0.6 stopnia."
      },
      {
        "question": "Czy stosunek sinus ma jednostki miary?",
        "answer": "Nie. Oba wejścia to długości zmierzone w tej samej jednostce, więc jednostki się skracają: 3 m / 5 m = 0.6, dokładnie jak 300 cm / 500 cm = 0.6. Podawaj sinus jako zwykłą liczbę, nigdy ze stopniami, metrami ani stopami."
      },
      {
        "question": "Jak znaleźć kąt na podstawie stosunku sinus?",
        "answer": "Zastosuj arcus sinus do stosunku: A = sin^-1(a/c). Dla sin(A) = 0.6, A = sin^-1(0.6), około 36.87 stopnia. Najpierw ustaw kalkulator naukowy w trybie stopni. Kalkulator na tej stronie zwraca stosunek, nie kąt."
      },
      {
        "question": "Jak znaleźć bok przeciwległy przy użyciu sinusa?",
        "answer": "Przekształć wzór do postaci a = c * sin(A). Jeśli przeciwprostokątna ma 10 m, a kąt A wynosi 30 stopni, sin(30 deg) = 0.5, więc a = 10 * 0.5 = 5 m. To ręczne przekształcenie; kalkulator na tej stronie zwraca stosunek z długości boków, nie brakujące boki."
      },
      {
        "question": "Jaka jest różnica między sinusem a cosecansem?",
        "answer": "Sinus dzieli bok przeciwległy przez przeciwprostokątną (a/c); cosecans jest jego odwrotnością, przeciwprostokątna podzielona przez bok przeciwległy (c/a). Jeśli sin(A) = 0.6, to csc(A) = 1/0.6, około 1.6667. Oba są odwrotnościami, nigdy wymiennymi wzorami."
      },
      {
        "question": "Czy mogę obliczyć sinus, nie znając boku przyległego?",
        "answer": "Tak. Podstawowy wzór na sinus używa tylko boku przeciwległego i przeciwprostokątnej, więc bok przyległy nigdy nie wchodzi do obliczenia. Bok przyległy przydaje się dopiero, gdy twierdzenie Pitagorasa służy do weryfikacji trójkąta albo gdy do pracy wchodzą cosinus, tangens lub secans."
      },
      {
        "question": "Jak sinus jest używany w praktycznych pomiarach?",
        "answer": "Sinus porównuje składową pionową lub prostopadłą z długością pochyłą: drabinę z wysokością ściany, krokiew dachową z jej pionowym wzniesieniem, rampę z jej wzniesieniem albo linię geodezyjną z różnicą wysokości. Stosunek mówi, jaka część pochyłej odległości jest pionowa, co przydaje się przy wysokościach, prześwitach i obliczeniach składowych."
      }
    ],
    "faqHeading": "Często zadawane pytania",
    "relatedHeading": "Poznaj powiązane kalkulatory trygonometryczne"
  }
};
