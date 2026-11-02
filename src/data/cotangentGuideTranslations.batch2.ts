/**
 * cotangentGuideTranslations.batch2.ts
 * Translations of the Cotangent Ratio Calculator guide (CotangentRatioGuide.astro)
 * Batch 2: Portuguese (pt), Bengali (bn), Japanese (ja), Korean (ko), Malay (ms), Polish (pl).
 *
 * Structure per language:
 * - tocHeading, tocItems (14 entries keyed by section id)
 * - sections (13 entries: cot-intro, cot-triangle, cot-whatis, cot-formula,
 *   cot-howto, cot-examples, cot-applications, cot-angle, cot-recover,
 *   cot-mistakes, cot-verify, cot-vs, cot-related)
 *   Each section: h2, blocks (ordered {kind: 'p'|'h3', text}), optional steps,
 *   closingParagraphs, tables (plural, [{headers, rows}]), figures (plural,
 *   [{alt, caption}]), related ([{name}]) on cot-related
 * - faqHeading, relatedHeading
 * - faqs (12 question/answer pairs)
 * - conclusion (h2, paragraphs)
 *
 * Formulas, KaTeX markup ([[...]] and [[[..]]]), variable names, numbers, and
 * degree values are preserved exactly as in the English source. URLs are never
 * translated. No em dashes. Alt texts stay under 125 characters.
 */

export const COTANGENT_TRANSLATIONS_BATCH2 = {
  "pt": {
    "tocHeading": "Neste guia",
    "tocItems": {
      "cot-intro": "O que é uma calculadora de razão cotangente?",
      "cot-triangle": "Entendendo o lado adjacente e o lado oposto",
      "cot-whatis": "Entendendo a razão cotangente",
      "cot-formula": "Como funciona a fórmula da cotangente",
      "cot-howto": "Como usar a calculadora de razão cotangente",
      "cot-examples": "Exemplos passo a passo de cálculo da cotangente",
      "cot-applications": "Exemplos reais do uso da razão cotangente",
      "cot-angle": "A relação entre a cotangente e o tamanho do ângulo",
      "cot-recover": "Como encontrar um ângulo quando a cotangente é conhecida",
      "cot-mistakes": "Erros comuns ao calcular a cotangente",
      "cot-verify": "Como verificar se o resultado da cotangente é válido",
      "cot-vs": "Cotangente vs. tangente, seno e cosseno",
      "cot-related": "Explore calculadoras trigonométricas relacionadas",
      "cot-faq": "Perguntas frequentes"
    },
    "sections": {
      "cot-intro": {
        "h2": "O que é uma calculadora de razão cotangente?",
        "blocks": [
          {
            "kind": "p",
            "text": "Uma calculadora de razão cotangente responde a uma pergunta: para um ângulo agudo em um triângulo retângulo, como o lado junto ao ângulo se compara com o lado oposto a ele? Digite os dois comprimentos dos lados, e a ferramenta divide o lado adjacente pelo lado oposto, retornando [[\\cot(A)=b/a]]. Com um lado adjacente de 4 cm e um lado oposto de 3 cm, o cálculo é [[4/3\\approx1.3333]]: o lado adjacente é cerca de 1.3333 vezes o comprimento do lado oposto. Esse decimal é a resposta completa. Ele não tem unidades, pois os centímetros se cancelam na divisão, e não é um ângulo em graus. A hipotenusa nunca entra nesse cálculo; os dois catetos perpendiculares são suficientes. A cotangente também é o recíproco da tangente, e é por isso que muitos livros didáticos a apresentam como a forma invertida de [[\\tan(A)]]."
          }
        ],
        "steps": [],
        "closingParagraphs": [],
        "tables": [],
        "figures": []
      },
      "cot-triangle": {
        "h2": "Entendendo o lado adjacente e o lado oposto",
        "blocks": [
          {
            "kind": "h3",
            "text": "O que é um triângulo retângulo?"
          },
          {
            "kind": "p",
            "text": "Um triângulo retângulo tem um ângulo de exatamente [[90^\\circ]], o ângulo entre duas retas perpendiculares, como uma parede encontrando um piso nivelado. A hipotenusa fica oposta a esse ângulo reto e é sempre o lado mais longo. Os outros dois ângulos dividem os 90 graus restantes, de modo que ambos são agudos. Os dois catetos se encontram no ângulo reto, perpendiculares entre si, e é a relação entre eles que a cotangente descreve."
          },
          {
            "kind": "h3",
            "text": "O que é o lado adjacente?"
          },
          {
            "kind": "p",
            "text": "O lado adjacente [[b]] é o cateto que toca o ângulo de referência [[A]] sem ser a hipotenusa. Em problemas práticos, ele costuma representar o percurso horizontal: a distância no solo até a base de uma escada, a projeção horizontal de um telhado ou o componente horizontal de uma força. Ele entra no numerador da fórmula da cotangente. Qual cateto conta como adjacente depende do ângulo de referência escolhido, de modo que trocar do ângulo [[A]] para o ângulo [[B]] inverte os rótulos de adjacente e oposto."
          },
          {
            "kind": "h3",
            "text": "O que é o lado oposto?"
          },
          {
            "kind": "p",
            "text": "O lado oposto [[a]] fica diretamente em frente ao ângulo [[A]] e nunca toca seu vértice. Em problemas práticos, ele costuma representar a elevação vertical: a altura de uma parede, uma diferença de elevação ou o componente vertical de uma medição. Ele entra no denominador da fórmula da cotangente, o que significa que aumentá-lo diminui a razão e diminuí-lo aumenta a razão."
          },
          {
            "kind": "h3",
            "text": "O que é a hipotenusa?"
          },
          {
            "kind": "p",
            "text": "A hipotenusa [[c]] é o lado oposto ao ângulo reto: em qualquer diagrama, ela fica diante do pequeno quadrado que marca o canto de [[90^\\circ]] e é estritamente mais longa que qualquer um dos catetos. Ela não desempenha nenhum papel na razão cotangente básica, e é por isso que a calculadora nunca a pede. Ela se torna relevante quando o seno, o cosseno, a secante ou a cossecante entram no trabalho, ou quando o teorema de Pitágoras é usado para verificar que os dois catetos formam um triângulo retângulo genuíno."
          }
        ],
        "steps": [],
        "closingParagraphs": [],
        "tables": [],
        "figures": [
          {
            "alt": "Triângulo retângulo com ângulo A no canto inferior esquerdo, lado adjacente b dourado, lado oposto a verde, cot(A)=b/a",
            "caption": "O ângulo A está no canto inferior esquerdo; a cotangente usa o lado adjacente dourado b e o lado oposto verde a, não a hipotenusa c."
          }
        ]
      },
      "cot-whatis": {
        "h2": "Entendendo a razão cotangente",
        "blocks": [
          {
            "kind": "p",
            "text": "A cotangente compara o comprimento junto ao ângulo de referência com o comprimento oposto a ele:"
          },
          {
            "kind": "p",
            "text": "[[[\\cot(A)=\\frac{b}{a}]]]"
          },
          {
            "kind": "p",
            "text": "Aqui, [[\\cot(A)]] é a cotangente do ângulo [[A]], [[b]] é o lado adjacente e [[a]] é o lado oposto: quantas vezes o lado oposto cabe dentro do lado adjacente."
          },
          {
            "kind": "h3",
            "text": "A cotangente como recíproco da tangente"
          },
          {
            "kind": "p",
            "text": "A tangente divide o lado oposto pelo lado adjacente, [[\\tan(A)=a/b]]. Tomar o recíproco inverte essa fração, [[1/\\tan(A)=b/a]], que é exatamente a fórmula da cotangente:"
          },
          {
            "kind": "p",
            "text": "[[[\\boxed{\\cot(A)=\\frac{1}{\\tan(A)}=\\frac{b}{a}}]]]]"
          },
          {
            "kind": "p",
            "text": "Com [[\\tan(A)=3/4=0.75]], o recíproco é [[\\cot(A)=1/0.75=4/3\\approx1.3333]]: o mesmo triângulo, descrito na direção oposta. Essa distinção importa porque [[\\tan^{-1}]] denota a função tangente inversa, enquanto [[1/\\tan(A)]] é a tangente recíproca: ideias relacionadas, significados diferentes, respostas diferentes."
          },
          {
            "kind": "h3",
            "text": "Entendendo a cotangente como percurso dividido pela elevação"
          },
          {
            "kind": "p",
            "text": "Quando o ângulo [[A]] é medido a partir da horizontal, o lado adjacente pode representar o percurso horizontal e o lado oposto a elevação vertical. Então [[\\cot(A)=\\frac{\\text{Horizontal run}}{\\text{Vertical rise}}]]. A tangente dá a mesma relação invertida, elevação dividida pelo percurso. Essa leitura de percurso sobre elevação torna a cotangente a razão natural para perguntas como \"quanta distância horizontal cobre quanta altura?\", e ela depende do ângulo de referência escolhido e da geometria da situação."
          },
          {
            "kind": "h3",
            "text": "O que significa um valor de cotangente?"
          },
          {
            "kind": "p",
            "text": "Uma cotangente maior que 1 significa que o lado adjacente é mais longo que o lado oposto, e o ângulo de referência é menor que [[45^\\circ]]. Uma cotangente igual a 1 significa que os dois catetos são iguais e o ângulo [[A]] é exatamente [[45^\\circ]]. Uma cotangente entre 0 e 1 significa que o lado oposto é mais longo que o adjacente, e o ângulo de referência fica entre [[45^\\circ]] e [[90^\\circ]]."
          },
          {
            "kind": "h3",
            "text": "Por que a cotangente pode ser maior que 1"
          },
          {
            "kind": "p",
            "text": "Diferentemente do seno e do cosseno, a cotangente não tem teto de 0 a 1 porque a hipotenusa nunca entra na divisão. Para [[\\cot(A)=8/2=4]], o lado adjacente é simplesmente quatro vezes o lado oposto, e o ângulo de referência é um ângulo agudo relativamente pequeno. Qualquer valor positivo finito é possível."
          },
          {
            "kind": "h3",
            "text": "Por que a cotangente pode ser menor que 1"
          },
          {
            "kind": "p",
            "text": "Para [[\\cot(A)=3/6=0.5]], o lado adjacente é metade do lado oposto, de modo que o ângulo de referência é um ângulo agudo relativamente grande. A razão cai abaixo de 1 sem que nada esteja errado: é simplesmente a assinatura de um triângulo mais alto e estreito."
          },
          {
            "kind": "h3",
            "text": "Por que a cotangente é uma razão adimensional"
          },
          {
            "kind": "p",
            "text": "Dividir um comprimento por outro cancela as unidades: [[4\\text{ m}/3\\text{ m}=4/3]], e [[400\\text{ cm}/300\\text{ cm}=4/3]] também. O número descreve a forma do triângulo, não uma medição com unidades físicas, então escreva o resultado como um número simples, nunca com metros, centímetros ou graus anexados."
          }
        ],
        "steps": [],
        "closingParagraphs": [],
        "tables": [],
        "figures": [
          {
            "alt": "Três etapas: triângulo 3-4-5 rotulado, tangente tan(A)=3/4=0.75, cotangente cot(A)=4/3=1.3333, a relação recíproca",
            "caption": "Três etapas: rotule o triângulo 3-4-5, calcule a tangente tan(A) = 3/4 e depois inverta a fração para obter cot(A) = 4/3."
          }
        ]
      },
      "cot-formula": {
        "h2": "Como funciona a fórmula da cotangente",
        "blocks": [
          {
            "kind": "p",
            "text": "Parta da definição: a cotangente é o lado adjacente dividido pelo lado oposto. Na notação desta página:"
          },
          {
            "kind": "p",
            "text": "[[[\\boxed{\\cot(A)=\\frac{b}{a}}]]]]"
          },
          {
            "kind": "p",
            "text": "O lado adjacente é o numerador porque é o comprimento que está sendo comparado; o lado oposto é o denominador porque é o comprimento de referência, a unidade de \"quantos destes cabem naquele\". Trocá-los dá a razão tangente em vez disso."
          },
          {
            "kind": "h3",
            "text": "Exemplo totalmente resolvido: um triângulo retângulo 3-4-5"
          },
          {
            "kind": "p",
            "text": "Dados [[b=4\\text{ cm}]], [[a=3\\text{ cm}]], [[c=5\\text{ cm}]]:"
          },
          {
            "kind": "p",
            "text": "Etapa 1: Escreva a fórmula. [[\\cot(A)=b/a]]"
          },
          {
            "kind": "p",
            "text": "Etapa 2: Substitua as medidas. [[\\cot(A)=4/3]]"
          },
          {
            "kind": "p",
            "text": "Etapa 3: Divida. [[\\boxed{\\cot(A)\\approx1.3333}]]"
          },
          {
            "kind": "p",
            "text": "Etapa 4: Interprete a resposta. O lado adjacente é cerca de 1.3333 vezes o lado oposto."
          },
          {
            "kind": "p",
            "text": "Etapa 5: Verifique com a razão tangente. [[\\tan(A)=3/4=0.75]], e [[1/0.75\\approx1.3333]]. Ambos os caminhos chegam ao mesmo número, que é exatamente como as razões recíprocas se comportam."
          }
        ],
        "steps": [],
        "closingParagraphs": [],
        "tables": [],
        "figures": []
      },
      "cot-howto": {
        "h2": "Como usar a calculadora de razão cotangente",
        "blocks": [
          {
            "kind": "p",
            "text": "O passo a passo abaixo corresponde à interface real desta página."
          }
        ],
        "steps": [
          "<strong>Identifique o ângulo de referência [[A]],</strong> pois os lados adjacente e oposto são definidos em relação a ele.",
          "<strong>Localize o lado adjacente [[b]]:</strong> o cateto que toca o ângulo [[A]] e não é a hipotenusa.",
          "<strong>Localize o lado oposto [[a]]:</strong> o cateto diretamente em frente ao ângulo [[A]], aquele que nunca toca seu vértice.",
          "<strong>Meça ou obtenha os dois comprimentos dos lados</strong> na mesma unidade.",
          "<strong>Digite o comprimento do lado adjacente</strong> no primeiro campo de entrada.",
          "<strong>Digite o comprimento do lado oposto</strong> no segundo campo de entrada.",
          "<strong>Selecione unidades compatíveis nos seletores de unidade</strong> para que a divisão compare valores equivalentes.",
          "<strong>Confirme que ambas as medidas são positivas;</strong> comprimentos zero ou negativos não podem formar um triângulo real.",
          "<strong>Clique em Calcular cot(A)</strong> para dividir o lado adjacente pelo lado oposto.",
          "<strong>Leia a razão cotangente:</strong> o lado adjacente expresso como múltiplo do lado oposto.",
          "<strong>Interprete o resultado:</strong> maior que 1 significa um lado adjacente mais longo, igual a 1 significa catetos iguais, menor que 1 significa um lado oposto mais longo.",
          "<strong>Use Redefinir</strong> para limpar as entradas e começar de novo."
        ],
        "closingParagraphs": [
          "A calculadora não pede hipotenusa nem ângulo em graus: dois comprimentos de lado positivos são a entrada completa, e o resultado é sempre um número positivo e adimensional."
        ],
        "tables": [],
        "figures": []
      },
      "cot-examples": {
        "h2": "Exemplos passo a passo de cálculo da cotangente",
        "blocks": [
          {
            "kind": "p",
            "text": "Cada exemplo segue o mesmo padrão: escreva a fórmula, substitua, divida, interprete."
          },
          {
            "kind": "h3",
            "text": "Exemplo 1: um triângulo retângulo 3-4-5"
          },
          {
            "kind": "p",
            "text": "Dados [[b=4\\text{ cm}]], [[a=3\\text{ cm}]], [[c=5\\text{ cm}]]:"
          },
          {
            "kind": "p",
            "text": "[[\\cot(A)=4/3]]"
          },
          {
            "kind": "p",
            "text": "[[\\boxed{\\cot(A)\\approx1.3333}]]"
          },
          {
            "kind": "p",
            "text": "O lado adjacente é cerca de 1.3333 vezes o lado oposto; a hipotenusa fica totalmente fora do cálculo."
          },
          {
            "kind": "h3",
            "text": "Exemplo 2: um triângulo retângulo 5-12-13"
          },
          {
            "kind": "p",
            "text": "Dados [[b=12\\text{ m}]], [[a=5\\text{ m}]], [[c=13\\text{ m}]]:"
          },
          {
            "kind": "p",
            "text": "[[\\cot(A)=12/5]]"
          },
          {
            "kind": "p",
            "text": "[[\\boxed{\\cot(A)=2.4}]]"
          },
          {
            "kind": "p",
            "text": "A razão é maior que 1 porque o lado adjacente é o cateto mais longo; ela nos diz que o lado adjacente é 2.4 vezes o lado oposto, não o tamanho do triângulo."
          },
          {
            "kind": "h3",
            "text": "Exemplo 3: um triângulo retângulo isósceles"
          },
          {
            "kind": "p",
            "text": "Dados [[b=6\\text{ cm}]], [[a=6\\text{ cm}]], [[c=6\\sqrt{2}\\text{ cm}]]:"
          },
          {
            "kind": "p",
            "text": "[[\\cot(A)=6/6]]"
          },
          {
            "kind": "p",
            "text": "[[\\boxed{\\cot(A)=1}]]"
          },
          {
            "kind": "p",
            "text": "Catetos iguais dão uma razão de exatamente 1, que é a assinatura de um ângulo de referência de [[45^\\circ]]."
          },
          {
            "kind": "h3",
            "text": "Exemplo 4: um triângulo com lado adjacente menor"
          },
          {
            "kind": "p",
            "text": "Dados [[b=6\\text{ m}]] e [[a=8\\text{ m}]]:"
          },
          {
            "kind": "p",
            "text": "[[\\cot(A)=6/8]]"
          },
          {
            "kind": "p",
            "text": "[[\\boxed{\\cot(A)=0.75}]]"
          },
          {
            "kind": "p",
            "text": "O resultado é menor que 1 porque o lado oposto é o cateto mais longo, de modo que o ângulo de referência é maior que [[45^\\circ]]."
          }
        ],
        "steps": [],
        "closingParagraphs": [],
        "tables": [],
        "figures": []
      },
      "cot-applications": {
        "h2": "Exemplos reais do uso da razão cotangente",
        "blocks": [
          {
            "kind": "p",
            "text": "A cotangente é uma razão matemática, não uma grandeza física com unidades. Seu valor prático está em comparar o percurso horizontal com a elevação vertical, verificar a geometria de triângulos e usar fórmulas que pedem especificamente o adjacente dividido pelo oposto. Cada exemplo assume um triângulo retângulo simplificado, e nenhuma dessas razões, sozinha, resolve questões de segurança, resistência ou conformidade com normas."
          },
          {
            "kind": "h3",
            "text": "Exemplo 5: encontrando a razão percurso-elevação de uma escada"
          },
          {
            "kind": "p",
            "text": "Uma escada está apoiada contra uma parede vertical. Sua base está a 3 m da parede e ela alcança 4 m de altura na parede. A distância horizontal é o lado adjacente [[b=3\\text{ m}]], o alcance vertical o lado oposto [[a=4\\text{ m}]]. [[\\cot(A)=3/4]], de modo que [[\\boxed{\\cot(A)=0.75}]]: a distância horizontal é 75 por cento da altura vertical. A razão descreve a geometria da escada; ela não determina se a escada está posicionada com segurança."
          },
          {
            "kind": "h3",
            "text": "Exemplo 6: calculando a razão percurso-elevação de um telhado"
          },
          {
            "kind": "p",
            "text": "Uma seção de telhado tem um percurso horizontal de 4 m e uma elevação vertical de 3 m. Aqui [[b=4\\text{ m}]] e [[a=3\\text{ m}]]. [[\\cot(A)=4/3]], de modo que [[\\boxed{\\cot(A)\\approx1.3333}]]: o percurso horizontal é cerca de 1.3333 vezes a elevação vertical. Essa razão não é uma avaliação estrutural ou de norma de telhado completa."
          },
          {
            "kind": "h3",
            "text": "Exemplo 7: avaliando a razão cotangente de uma rampa"
          },
          {
            "kind": "p",
            "text": "Uma rampa simplificada tem um percurso horizontal de 9 m e uma elevação vertical de 0.75 m. Com [[b=9\\text{ m}]] e [[a=0.75\\text{ m}]]: [[\\cot(A)=9/0.75]], de modo que [[\\boxed{\\cot(A)=12}]]. O percurso horizontal é 12 vezes a elevação vertical, a assinatura de uma inclinação suave. A razão sozinha não determina acessibilidade nem conformidade com normas de construção."
          },
          {
            "kind": "h3",
            "text": "Exemplo 8: uma medição de levantamento topográfico"
          },
          {
            "kind": "p",
            "text": "Um triângulo de levantamento topográfico simplificado tem uma distância horizontal de 40 m e uma diferença de elevação vertical de 30 m. Com [[b=40\\text{ m}]] e [[a=30\\text{ m}]]: [[\\cot(A)=40/30]], de modo que [[\\boxed{\\cot(A)\\approx1.3333}]]. A razão compara a separação horizontal com a diferença vertical diretamente. A topografia real pode exigir medições adicionais, correções e procedimentos de instrumento."
          },
          {
            "kind": "h3",
            "text": "Exemplo 9: um cabo de sustentação apoiando um poste"
          },
          {
            "kind": "p",
            "text": "Um cabo de sustentação conecta um poste a uma âncora no solo. A âncora está a 12 m horizontalmente do poste, e o ponto de fixação está a 5 m acima do solo. Com [[b=12\\text{ m}]] e [[a=5\\text{ m}]]: [[\\cot(A)=12/5]], de modo que [[\\boxed{\\cot(A)=2.4}]]. A distância horizontal é 2.4 vezes a separação vertical. Essa razão não estabelece a tensão do cabo, a resistência da âncora nem a segurança estrutural."
          },
          {
            "kind": "h3",
            "text": "Exemplo 10: entendendo a razão percurso-elevação de uma escada de degraus"
          },
          {
            "kind": "p",
            "text": "Uma escada de degraus simplificada tem um percurso horizontal de 4 m e uma elevação vertical de 3 m. Com [[b=4\\text{ m}]] e [[a=3\\text{ m}]]: [[\\cot(A)=4/3]], de modo que [[\\boxed{\\cot(A)\\approx1.3333}]]. O percurso horizontal é cerca de 1.3333 vezes a elevação vertical. O exemplo descreve uma diagonal idealizada e não verifica as dimensões da escada nem a conformidade com normas."
          },
          {
            "kind": "h3",
            "text": "Exemplo 11: os componentes horizontal e vertical da lança de um guindaste"
          },
          {
            "kind": "p",
            "text": "Uma lança de guindaste simplificada forma um triângulo retângulo com uma projeção horizontal de 6 m e uma elevação vertical de 8 m. Com [[b=6\\text{ m}]] e [[a=8\\text{ m}]]: [[\\cot(A)=6/8]], de modo que [[\\boxed{\\cot(A)=0.75}]]. A projeção horizontal é 75 por cento do componente vertical. A razão não estabelece a capacidade de elevação nem a segurança operacional."
          },
          {
            "kind": "h3",
            "text": "Exemplo 12: um segmento reto de voo de aeronave"
          },
          {
            "kind": "p",
            "text": "Para um segmento de voo simplificado, uma aeronave percorre um trajeto reto com um deslocamento horizontal de 4 km e um ganho vertical de 3 km. Com [[b=4\\text{ km}]] e [[a=3\\text{ km}]]: [[\\cot(A)=4/3]], de modo que [[\\boxed{\\cot(A)\\approx1.3333}]]. O deslocamento horizontal é cerca de 1.3333 vezes o ganho vertical. Este é um modelo geométrico idealizado, não um cálculo completo de navegação de voo."
          },
          {
            "kind": "h3",
            "text": "Exemplo 13: um reforço mecânico diagonal"
          },
          {
            "kind": "p",
            "text": "Um reforço diagonal tem um deslocamento horizontal de 1.2 m e uma elevação vertical de 1.6 m. Com [[b=1.2\\text{ m}]] e [[a=1.6\\text{ m}]]: [[\\cot(A)=1.2/1.6]], de modo que [[\\boxed{\\cot(A)=0.75}]]. O deslocamento horizontal é 75 por cento da elevação vertical. A razão não determina a resistência do reforço nem sua adequação."
          },
          {
            "kind": "h3",
            "text": "Exemplo 14: um trecho reto de trilha"
          },
          {
            "kind": "p",
            "text": "Um trecho reto simplificado de uma trilha tem um deslocamento horizontal de 80 m e um ganho vertical de 60 m. Com [[b=80\\text{ m}]] e [[a=60\\text{ m}]]: [[\\cot(A)=80/60]], de modo que [[\\boxed{\\cot(A)\\approx1.3333}]]. O deslocamento horizontal é cerca de 1.3333 vezes o ganho de elevação. Trilhas reais podem ter curvas e gradientes variáveis."
          },
          {
            "kind": "h3",
            "text": "Exemplo 15: um suporte de toldo"
          },
          {
            "kind": "p",
            "text": "Um suporte diagonal de toldo tem uma projeção horizontal de 2.4 m e uma elevação vertical de 1.8 m. Com [[b=2.4\\text{ m}]] e [[a=1.8\\text{ m}]]: [[\\cot(A)=2.4/1.8]], de modo que [[\\boxed{\\cot(A)\\approx1.3333}]]. A razão descreve a projeção horizontal em relação à elevação vertical. Esse cálculo não estabelece a adequação estrutural."
          },
          {
            "kind": "h3",
            "text": "Exemplo 16: um cabo entre duas alturas diferentes"
          },
          {
            "kind": "p",
            "text": "Um cabo reto se estende por 24 m horizontalmente entre dois pontos com uma separação vertical de 7 m. Com [[b=24\\text{ m}]] e [[a=7\\text{ m}]]: [[\\cot(A)=24/7]], de modo que [[\\boxed{\\cot(A)\\approx3.4286}]]. A separação horizontal é cerca de 3.4286 vezes a diferença vertical. O modelo assume uma linha reta entre os pontos."
          },
          {
            "kind": "h3",
            "text": "Exemplos práticos comparados"
          },
          {
            "kind": "p",
            "text": "O padrão se mantém em todos: a razão é grande quando o lado adjacente supera em muito o lado oposto, e pequena quando o lado oposto domina."
          }
        ],
        "steps": [],
        "closingParagraphs": [],
        "tables": [
          {
            "headers": ["Situação", "Lado adjacente b", "Lado oposto a", "Fórmula da cotangente", "Razão calculada", "Interpretação"],
            "rows": [
              ["Escada", "3 m", "4 m", "3/4", "0.75", "O percurso é 75% do alcance vertical"],
              ["Telhado", "4 m", "3 m", "4/3", "1.3333", "O percurso é 1.3333 vezes a elevação"],
              ["Rampa", "9 m", "0.75 m", "9/0.75", "12", "O percurso é 12 vezes a elevação"],
              ["Topografia", "40 m", "30 m", "40/30", "1.3333", "A distância é 1.3333 vezes o desnível"],
              ["Cabo de sustentação", "12 m", "5 m", "12/5", "2.4", "A distância é 2.4 vezes a altura"],
              ["Escada de degraus", "4 m", "3 m", "4/3", "1.3333", "O percurso é 1.3333 vezes a elevação"],
              ["Lança de guindaste", "6 m", "8 m", "6/8", "0.75", "A projeção é 75% da elevação"],
              ["Segmento de voo", "4 km", "3 km", "4/3", "1.3333", "O deslocamento é 1.3333 vezes o ganho"],
              ["Reforço", "1.2 m", "1.6 m", "1.2/1.6", "0.75", "O deslocamento é 75% da elevação"],
              ["Trilha", "80 m", "60 m", "80/60", "1.3333", "O deslocamento é 1.3333 vezes o ganho"],
              ["Suporte de toldo", "2.4 m", "1.8 m", "2.4/1.8", "1.3333", "A projeção é 1.3333 vezes a elevação"],
              ["Cabo", "24 m", "7 m", "24/7", "3.4286", "A separação é 3.4286 vezes o desnível"]
            ]
          }
        ],
        "figures": [
          {
            "alt": "Quatro painéis: razão da escada 0.75, telhado 1.3333, rampa 12, topografia 1.3333, com triângulo retângulo rotulado",
            "caption": "Quatro cálculos práticos: escada, telhado, rampa e topografia, cada um com seu triângulo, fórmula e razão."
          }
        ]
      },
      "cot-angle": {
        "h2": "A relação entre a cotangente e o tamanho do ângulo",
        "blocks": [
          {
            "kind": "p",
            "text": "A cotangente diminui à medida que o ângulo agudo cresce. Um ângulo pequeno mantém o lado adjacente muito mais longo que o lado oposto, de modo que a razão é grande; conforme o ângulo [[A]] se abre em direção a [[90^\\circ]], o lado oposto assume o controle e a razão cai em direção a 0. Os valores de referência verificados abaixo mostram o padrão:"
          },
          {
            "kind": "p",
            "text": "As medidas da tabela são ilustrativas: as razões, não os comprimentos absolutos, determinam os ângulos. A razão cresce sem limite à medida que o ângulo se aproxima de [[0^\\circ]] e se aproxima de 0 à medida que o ângulo se aproxima de [[90^\\circ]], permanecendo positiva e finita para cada triângulo válido."
          }
        ],
        "steps": [],
        "closingParagraphs": [
          "A calculadora não recebe ângulo como entrada; esses valores de referência servem como orientação e valores de verificação ao conferir um resultado."
        ],
        "tables": [
          {
            "headers": ["Ângulo A", "Lado adjacente b", "Lado oposto a", "Razão cotangente"],
            "rows": [
              ["30 deg", "sqrt(3)", "1", "Aproximadamente 1.7321"],
              ["45 deg", "1", "1", "1"],
              ["60 deg", "1", "sqrt(3)", "Aproximadamente 0.5774"],
              ["75 deg", "1", "Aproximadamente 3.7321", "Aproximadamente 0.2679"]
            ]
          }
        ],
        "figures": [
          {
            "alt": "Três triângulos a 30, 45 e 60 graus com valores de cotangente 1.7321, 1, 0.5774; a cotangente cai conforme o ângulo cresce",
            "caption": "À medida que o ângulo A cresce, o lado oposto passa a representar uma parcela maior do lado adjacente, de modo que cot(A) cai."
          }
        ]
      },
      "cot-recover": {
        "h2": "Como encontrar um ângulo quando a cotangente é conhecida",
        "blocks": [
          {
            "kind": "p",
            "text": "A razão cotangente não é, por si só, um ângulo. Quando a razão é conhecida e o ângulo é necessário, a trigonometria inversa faz a ponte. Para uma razão cotangente positiva em um triângulo retângulo, tome o recíproco para recuperar a razão tangente e depois aplique a tangente inversa:"
          },
          {
            "kind": "p",
            "text": "[[[\\boxed{A=\\tan^{-1}\\left(\\frac{1}{\\cot(A)}\\right)}]]]"
          },
          {
            "kind": "p",
            "text": "De forma equivalente, como [[\\tan(A)=a/b]]:"
          },
          {
            "kind": "p",
            "text": "[[[\\boxed{A=\\tan^{-1}\\left(\\frac{a}{b}\\right)}]]]"
          },
          {
            "kind": "h3",
            "text": "Exemplo resolvido"
          },
          {
            "kind": "p",
            "text": "Dados [[\\cot(A)=4/3]]: o recíproco é [[\\tan(A)=3/4]], de modo que [[A=\\tan^{-1}(3/4)]] e [[\\boxed{A\\approx36.87^\\circ}]]. Ajuste a calculadora científica para o modo de graus antes de pressionar a tecla de tangente inversa. Este é um cálculo de ângulo separado; a calculadora de razão cotangente desta página recebe comprimentos de lados e retorna a razão, nunca o ângulo."
          }
        ],
        "steps": [],
        "closingParagraphs": [],
        "tables": [],
        "figures": []
      },
      "cot-mistakes": {
        "h2": "Erros comuns ao calcular a cotangente",
        "blocks": [],
        "steps": [
          "<strong>Inverter a fórmula para [[a/b]] em vez de [[b/a]].</strong> Isso calcula a tangente. Correção: coloque o lado adjacente em cima.",
          "<strong>Confundir cotangente com tangente.</strong> Informar 0.75 para um triângulo 3-4-5. Correção: a tangente é o oposto sobre o adjacente; a cotangente é a fração invertida.",
          "<strong>Confundir cotangente com cosseno.</strong> Usar [[b/c]]. Correção: o cosseno precisa da hipotenusa; a cotangente nunca a toca.",
          "<strong>Usar a hipotenusa em vez de um dos dois catetos.</strong> Calcular [[b/c]] ou [[c/a]]. Correção: o denominador é o cateto oposto [[a]], não [[c]].",
          "<strong>Trocar o lado adjacente pelo lado oposto.</strong> Escolher o cateto errado. Correção: trace a partir do ângulo [[A]]: o cateto que o toca é o adjacente, o que fica em frente a ele é o oposto.",
          "<strong>Esquecer que os rótulos dos lados dependem do ângulo de referência.</strong> Usar rótulos desenhados para o ângulo [[B]]. Correção: rotule novamente sempre que o ângulo de referência mudar.",
          "<strong>Assumir que a cotangente deve estar entre 0 e 1.</strong> Tratar 2.4 ou 12 como erros. Correção: esses valores estão corretos; apenas o seno e o cosseno têm teto em 1.",
          "<strong>Assumir que uma cotangente de 1 significa um triângulo inválido.</strong> Correção: [[\\cot(A)=1]] significa simplesmente catetos iguais e um ângulo de [[45^\\circ]], um triângulo perfeitamente válido.",
          "<strong>Informar a razão com metros ou centímetros.</strong> Escrever 1.3333 m. Correção: as unidades já se cancelaram, então informe um número simples.",
          "<strong>Digitar comprimentos de lado zero ou negativos.</strong> Divisão por zero ou uma razão negativa sem sentido. Correção: use apenas comprimentos positivos.",
          "<strong>Misturar unidades de medida.</strong> Metros divididos por centímetros distorcem a razão em 100. Correção: converta ambos os lados para uma unidade primeiro.",
          "<strong>Arredondar cedo demais.</strong> Arredondar [[4/3]] para 1.33 antes de verificar adiciona erro evitável. Correção: mantenha dígitos extras até a etapa final.",
          "<strong>Assumir que a cotangente é um ângulo em graus.</strong> Ler 1.3333 como 1.3333 graus. Correção: é uma razão; o ângulo precisa da tangente inversa.",
          "<strong>Confundir tangente recíproca com tangente inversa.</strong> Escrever [[1/\\tan(A)]] quando [[\\tan^{-1}(a/b)]] é necessário, ou o contrário. Correção: o recíproco inverte a fração; a inversa recupera o ângulo.",
          "<strong>Assumir que o valor da cotangente determina o tamanho do triângulo.</strong> Dois triângulos muito diferentes podem compartilhar [[\\cot(A)=1.3333]]. Correção: a razão fixa a forma, não a escala."
        ],
        "closingParagraphs": [
          "<strong>Errado versus correto.</strong> Dados [[b=4]] e [[a=3]]:",
          "Incorreto: [[3/4=0.75]]. Esta é a razão tangente, não a cotangente.",
          "Correto: [[\\cot(A)=4/3\\approx1.3333]]. Verificação: [[\\tan(A)=3/4=0.75]] e [[1/0.75\\approx1.3333]], o que confirma a relação recíproca."
        ],
        "tables": [],
        "figures": []
      },
      "cot-verify": {
        "h2": "Como verificar se o resultado da cotangente é válido",
        "blocks": [
          {
            "kind": "p",
            "text": "Um triângulo retângulo válido e não degenerado exige catetos positivos, [[a \\gt 0]] e [[b \\gt 0]], de modo que o resultado da cotangente deve ser um número positivo e finito:"
          },
          {
            "kind": "p",
            "text": "[[[\\boxed{\\cot(A)=\\frac{b}{a} \\gt 0}]]]"
          },
          {
            "kind": "p",
            "text": "Ambas as medidas devem usar unidades compatíveis. Um resultado maior que 1, igual a 1 ou menor que 1 pode ser válido; diferentemente do seno e do cosseno, a cotangente não tem teto em 1."
          },
          {
            "kind": "h3",
            "text": "Método 1: verifique o recíproco da tangente"
          },
          {
            "kind": "p",
            "text": "Verifique [[\\tan(A)=a/b]] e depois confirme [[\\cot(A)=1/\\tan(A)]]. Com [[a=3]] e [[b=4]]: [[\\tan(A)=3/4=0.75]], de modo que [[\\cot(A)=1/0.75\\approx1.3333]]. Uma divergência entre os dois caminhos indica uma fração invertida ou um lado rotulado errado."
          },
          {
            "kind": "h3",
            "text": "Método 2: verifique o teorema de Pitágoras"
          },
          {
            "kind": "p",
            "text": "Se a hipotenusa for conhecida ou necessária, calcule [[c=\\sqrt{a^2+b^2}]]. Para [[a=3]] e [[b=4]]: [[c=\\sqrt{9+16}=5]], e [[3^2+4^2=5^2]]. Isso confirma que os comprimentos dos lados formam um triângulo retângulo genuíno. A hipotenusa é um valor de verificação aqui, não parte da fórmula primária da cotangente."
          },
          {
            "kind": "h3",
            "text": "Método 3: verifique a relação com o ângulo"
          },
          {
            "kind": "p",
            "text": "Para uma razão cotangente conhecida, recupere o ângulo com [[A=\\tan^{-1}(a/b)]]. Com [[a=3]] e [[b=4]]: [[A\\approx36.87^\\circ]]. Como o lado adjacente é mais longo que o lado oposto, o ângulo deve ficar abaixo de [[45^\\circ]]; se não ficar, os rótulos dos lados provavelmente estão trocados. Pequenas diferenças podem surgir do arredondamento."
          }
        ],
        "steps": [],
        "closingParagraphs": [],
        "tables": [],
        "figures": []
      },
      "cot-vs": {
        "h2": "Cotangente vs. tangente, seno e cosseno",
        "blocks": [
          {
            "kind": "p",
            "text": "Cada razão compara um par diferente de lados, usando o mesmo ângulo de referência e os mesmos rótulos de lado:"
          }
        ],
        "steps": [],
        "closingParagraphs": [
          "A cotangente e a tangente são o par recíproco: [[\\cot(A)=1/\\tan(A)]]. Se [[\\tan(A)=0.75]], então [[\\cot(A)\\approx1.3333]]. Use a cotangente quando uma fórmula pedir o adjacente dividido pelo oposto, quando estiver trabalhando relações de percurso para elevação, ou quando apenas os dois catetos forem conhecidos; use a tangente para elevação sobre percurso, o seno para o lado oposto contra a hipotenusa e o cosseno para o lado adjacente contra a hipotenusa.",
          "Para as razões vizinhas, veja a <a href=\"/sine-ratio-calculator/\" class=\"text-primary hover:underline\">Calculadora de Razão Seno</a>, a <a href=\"/cosine-ratio-calculator/\" class=\"text-primary hover:underline\">Calculadora de Razão Cosseno</a>, a <a href=\"/tangent-ratio-calculator/\" class=\"text-primary hover:underline\">Calculadora de Razão Tangente</a>, a <a href=\"/secant-ratio-calculator/\" class=\"text-primary hover:underline\">Calculadora de Razão Secante</a> e a <a href=\"/cosecant-ratio-calculator/\" class=\"text-primary hover:underline\">Calculadora de Razão Cossecante</a>."
        ],
        "tables": [
          {
            "headers": ["Razão", "Fórmula", "O que ela compara"],
            "rows": [
              ["Seno", "sin(A) = a/c", "Lado oposto com a hipotenusa"],
              ["Cosseno", "cos(A) = b/c", "Lado adjacente com a hipotenusa"],
              ["Tangente", "tan(A) = a/b", "Lado oposto com o lado adjacente"],
              ["Cotangente", "cot(A) = b/a", "Lado adjacente com o lado oposto"],
              ["Secante", "sec(A) = c/b", "Hipotenusa com o lado adjacente"],
              ["Cossecante", "csc(A) = c/a", "Hipotenusa com o lado oposto"]
            ]
          }
        ],
        "figures": []
      },
      "cot-related": {
        "h2": "Explore calculadoras trigonométricas relacionadas",
        "blocks": [],
        "steps": [],
        "closingParagraphs": [],
        "related": [
          { "name": "Calculadora de Razão Seno" },
          { "name": "Calculadora de Razão Cosseno" },
          { "name": "Calculadora de Razão Tangente" },
          { "name": "Calculadora de Razão Secante" },
          { "name": "Calculadora de Razão Cossecante" },
          { "name": "Calculadora de Ângulo de Triângulo Retângulo" }
        ],
        "tables": [],
        "figures": []
      }
    },
    "faqs": [
      {
        "question": "Qual é a fórmula da cotangente para um triângulo retângulo?",
        "answer": "cot(A) = b / a: divida o lado adjacente ao ângulo A pelo lado oposto ao ângulo A. Com um lado adjacente de 4 cm e um lado oposto de 3 cm, o resultado é 4/3, cerca de 1.3333."
      },
      {
        "question": "Como a cotangente se relaciona com a tangente?",
        "answer": "A cotangente é o recíproco da tangente: cot(A) = 1 / tan(A). Se tan(A) = 3/4 = 0.75, então cot(A) = 4/3, cerca de 1.3333. As duas razões descrevem o mesmo triângulo sob perspectivas invertidas, e a verificação recíproca é a forma mais rápida de conferir um resultado."
      },
      {
        "question": "Qual é a diferença entre cotangente e cosseno?",
        "answer": "A cotangente divide o lado adjacente pelo lado oposto (b/a), usando apenas os dois catetos. O cosseno divide o lado adjacente pela hipotenusa (b/c). A cotangente é o recíproco da tangente, não do cosseno; essa distinção é um dos erros mais testados na trigonometria inicial."
      },
      {
        "question": "A cotangente pode ser maior que 1?",
        "answer": "Sim. A cotangente não tem teto de 0 a 1 porque nenhuma hipotenusa entra na conta. Quando o lado adjacente é mais longo que o lado oposto, o resultado fica acima de 1: para um ângulo de 30 graus, cot(30 deg) é cerca de 1.7321. Valores de 2.4, 12 ou qualquer número positivo finito são todos possíveis."
      },
      {
        "question": "O que significa um valor de cotangente de 1?",
        "answer": "Os lados adjacente e oposto têm o mesmo comprimento, de modo que o triângulo é isósceles no ângulo de referência e o ângulo A é de 45 graus. Um lado adjacente de 6 cm e um lado oposto de 6 cm dão cot(A) = 6/6 = 1."
      },
      {
        "question": "A cotangente pode ser menor que 1?",
        "answer": "Sim, sempre que o lado oposto for mais longo que o lado adjacente. Um lado adjacente de 6 m e um lado oposto de 8 m dão cot(A) = 6/8 = 0.75, e o ângulo de referência é então maior que 45 graus."
      },
      {
        "question": "A cotangente tem unidades de medida?",
        "answer": "Não. Ambas as entradas são comprimentos medidos na mesma unidade, de modo que as unidades se cancelam: 4 m / 3 m = 4/3, exatamente como 400 cm / 300 cm = 4/3. Informe a cotangente como um número simples e adimensional, nunca com graus, metros ou pés anexados."
      },
      {
        "question": "Como calcular a cotangente a partir dos comprimentos dos lados?",
        "answer": "Meça o lado adjacente b e o lado oposto a na mesma unidade, confirme que ambos são positivos e depois divida: cot(A) = b / a. Nesta página, digite o lado adjacente no primeiro campo e o lado oposto no segundo, escolha unidades compatíveis e clique em Calcular cot(A)."
      },
      {
        "question": "Como posso encontrar um ângulo a partir de uma razão cotangente?",
        "answer": "Tome o recíproco para obter a razão tangente e depois aplique a tangente inversa: A = tan^-1(a / b). Para cot(A) = 4/3, a razão tangente é 3/4, de modo que A = tan^-1(0.75), cerca de 36.87 graus. Ajuste sua calculadora científica para o modo de graus primeiro. A calculadora desta página retorna a razão, não o ângulo."
      },
      {
        "question": "A calculadora de cotangente precisa da hipotenusa?",
        "answer": "Não. A razão cotangente básica usa apenas os dois lados perpendiculares, de modo que a hipotenusa nunca entra na fórmula. Ela se torna relevante apenas para trabalhos de acompanhamento com seno, cosseno, secante ou cossecante, ou quando o teorema de Pitágoras é usado para verificar o triângulo."
      },
      {
        "question": "O que a cotangente significa em termos de percurso e elevação?",
        "answer": "Quando o ângulo A é medido a partir da horizontal, cot(A) é o percurso horizontal dividido pela elevação vertical. Uma cotangente de 0.75 significa que o percurso horizontal é 75 por cento da elevação vertical; uma cotangente de 12 significa que o percurso é doze vezes a elevação. A tangente é a mesma ideia invertida: elevação dividida pelo percurso."
      },
      {
        "question": "Quando devo usar a cotangente em vez da tangente?",
        "answer": "Use a cotangente quando uma fórmula ou procedimento pedir especificamente o adjacente dividido pelo oposto, quando estiver comparando o percurso horizontal com a elevação vertical, ou quando os lados conhecidos forem os dois catetos. Se a relação conhecida for elevação sobre percurso, ou oposto sobre adjacente, a tangente é a escolha direta."
      }
    ],
    "faqHeading": "Perguntas frequentes",
    "relatedHeading": "Explore calculadoras trigonométricas relacionadas",
    "conclusion": {
      "h2": "Use a razão cotangente com confiança",
      "paragraphs": [
        "A cotangente é a forma invertida da tangente: divida o lado adjacente pelo lado oposto e você terá descrito a forma de percurso para elevação do triângulo. A fórmula [[\\cot(A)=b/a]] precisa de apenas duas medidas, a resposta é sempre um número positivo e adimensional, e ela pode ficar acima, em ou abaixo de 1 dependendo de qual cateto é mais longo. Quando o próprio ângulo for necessário, [[A=\\tan^{-1}(a/b)]] o recupera. Escada, telhado, rampa ou o clássico 3-4-5, o método nunca muda: identifique o lado adjacente, identifique o lado oposto, divida e verifique com o recíproco da tangente."
      ]
    }
  },
  "bn": {
    "tocHeading": "এই গাইডে",
    "tocItems": {
      "cot-intro": "কোট্যানজেন্ট অনুপাত ক্যালকুলেটর কী?",
      "cot-triangle": "সংলগ্ন বাহু ও বিপরীত বাহু বোঝা",
      "cot-whatis": "কোট্যানজেন্ট অনুপাত বোঝা",
      "cot-formula": "কোট্যানজেন্ট সূত্র কীভাবে কাজ করে",
      "cot-howto": "কোট্যানজেন্ট অনুপাত ক্যালকুলেটর কীভাবে ব্যবহার করবেন",
      "cot-examples": "কোট্যানজেন্ট গণনার ধাপে ধাপে উদাহরণ",
      "cot-applications": "কোট্যানজেন্ট অনুপাতের বাস্তব জীবনের উদাহরণ",
      "cot-angle": "কোট্যানজেন্ট ও কোণের আকারের সম্পর্ক বোঝা",
      "cot-recover": "কোট্যানজেন্ট জানা থাকলে কোণ কীভাবে বের করবেন",
      "cot-mistakes": "কোট্যানজেন্ট গণনায় সাধারণ ভুল",
      "cot-verify": "আপনার কোট্যানজেন্ট ফলাফল সঠিক কিনা কীভাবে যাচাই করবেন",
      "cot-vs": "কোট্যানজেন্ট বনাম ট্যানজেন্ট, সাইন ও কোসাইন",
      "cot-related": "সম্পর্কিত ত্রিকোণমিতিক ক্যালকুলেটর দেখুন",
      "cot-faq": "প্রায়শই জিজ্ঞাসিত প্রশ্ন"
    },
    "sections": {
      "cot-intro": {
        "h2": "কোট্যানজেন্ট অনুপাত ক্যালকুলেটর কী?",
        "blocks": [
          {
            "kind": "p",
            "text": "কোট্যানজেন্ট অনুপাত ক্যালকুলেটর একটি প্রশ্নের উত্তর দেয়: সমকোণী ত্রিভুজের একটি সূক্ষ্মকোণের জন্য, কোণের পাশের বাহুটি কোণের বিপরীত বাহুর তুলনায় কেমন? দুটি বাহুর দৈর্ঘ্য লিখুন, আর টুলটি সংলগ্ন বাহুকে বিপরীত বাহু দিয়ে ভাগ করে [[\\cot(A)=b/a]] ফেরত দেয়। সংলগ্ন বাহু 4 সেমি ও বিপরীত বাহু 3 সেমি হলে গণনা হয় [[4/3\\approx1.3333]]: সংলগ্ন বাহুটি বিপরীত বাহুর প্রায় 1.3333 গুণ লম্বা। এই দশমিকই সম্পূর্ণ উত্তর। এর কোনো একক নেই, কারণ ভাগের সময় সেন্টিমিটার কেটে যায়, এবং এটি ডিগ্রিতে কোণ নয়। অতিভুজ কখনোই এই গণনায় ঢোকে না; দুটি লম্ব বাহুই যথেষ্ট। কোট্যানজেন্ট ট্যানজেন্টের ব্যুৎক্রমও বটে, আর সে কারণে অনেক পাঠ্যবই একে [[\\tan(A)]]-এর উল্টো রূপ হিসেবে পরিচয় করিয়ে দেয়।"
          }
        ],
        "steps": [],
        "closingParagraphs": [],
        "tables": [],
        "figures": []
      },
      "cot-triangle": {
        "h2": "সংলগ্ন বাহু ও বিপরীত বাহু বোঝা",
        "blocks": [
          {
            "kind": "h3",
            "text": "সমকোণী ত্রিভুজ কী?"
          },
          {
            "kind": "p",
            "text": "সমকোণী ত্রিভুজের একটি কোণ ঠিক [[90^\\circ]], দুটি লম্ব রেখার মধ্যবর্তী কোণ, যেমন সমতল মেঝের সঙ্গে দেয়ালের মিলন। অতিভুজ সেই সমকোণের বিপরীতে থাকে এবং সবসময় সবচেয়ে লম্বা বাহু। বাকি দুটি কোণ অবশিষ্ট 90 ডিগ্রি ভাগ করে নেয়, তাই দুটোই সূক্ষ্মকোণ। দুটি বাহু সমকোণে মিলিত হয়, পরস্পরের ওপর লম্ব, এবং তাদের সম্পর্কই কোট্যানজেন্ট বর্ণনা করে।"
          },
          {
            "kind": "h3",
            "text": "সংলগ্ন বাহু কী?"
          },
          {
            "kind": "p",
            "text": "সংলগ্ন বাহু [[b]] হলো সেই বাহু যা অতিভুজ না হয়ে রেফারেন্স কোণ [[A]]-কে স্পর্শ করে। বাস্তব সমস্যায় এটি প্রায়ই অনুভূমিক দূরত্বের ভূমিকা নেয়: মইয়ের গোড়া থেকে মাটির দূরত্ব, ছাদের অনুভূমিক প্রক্ষেপণ, বা বলের অনুভূমিক উপাংশ। এটি কোট্যানজেন্ট সূত্রের লবে বসে। কোন বাহু সংলগ্ন হিসেবে গণ্য হবে তা নির্ভর করে নির্বাচিত রেফারেন্স কোণের ওপর, তাই কোণ [[A]] থেকে কোণ [[B]]-তে বদলালে সংলগ্ন ও বিপরীতের নাম অদলবদল হয়ে যায়।"
          },
          {
            "kind": "h3",
            "text": "বিপরীত বাহু কী?"
          },
          {
            "kind": "p",
            "text": "বিপরীত বাহু [[a]] কোণ [[A]]-এর ঠিক বিপরীতে থাকে এবং এর শীর্ষবিন্দুকে কখনো স্পর্শ করে না। বাস্তব সমস্যায় এটি প্রায়ই উল্লম্ব উচ্চতার ভূমিকা নেয়: দেয়ালের উচ্চতা, উচ্চতার পার্থক্য, বা কোনো পরিমাপের উল্লম্ব উপাংশ। এটি কোট্যানজেন্ট সূত্রের হরে বসে, যার অর্থ একে বড় করলে অনুপাত ছোট হয়, আর ছোট করলে অনুপাত বড় হয়।"
          },
          {
            "kind": "h3",
            "text": "অতিভুজ কী?"
          },
          {
            "kind": "p",
            "text": "অতিভুজ [[c]] হলো সমকোণের বিপরীত বাহু: যেকোনো চিত্রে এটি [[90^\\circ]] কোণ চিহ্নিতকারী ছোট বর্গটির মুখোমুখি থাকে, এবং যেকোনো বাহুর চেয়ে কঠোরভাবে লম্বা। মৌলিক কোট্যানজেন্ট অনুপাতে এর কোনো ভূমিকা নেই, তাই ক্যালকুলেটর কখনো এটি চায় না। সাইন, কোসাইন, সেক্যান্ট বা কোসেক্যান্ট কাজে ঢুকলে, বা দুটি বাহু সত্যিকারের সমকোণী ত্রিভুজ গঠন করে কিনা তা পিথাগোরাসের উপপাদ্য দিয়ে যাচাই করার সময় এটি প্রাসঙ্গিক হয়।"
          }
        ],
        "steps": [],
        "closingParagraphs": [],
        "tables": [],
        "figures": [
          {
            "alt": "সমকোণী ত্রিভুজ, নিচে-বামে কোণ A, সোনালি সংলগ্ন বাহু b, সবুজ বিপরীত বাহু a, cot(A)=b/a",
            "caption": "কোণ A নিচে-বাম কোণায়; কোট্যানজেন্ট সোনালি সংলগ্ন বাহু b ও সবুজ বিপরীত বাহু a ব্যবহার করে, অতিভুজ c নয়।"
          }
        ]
      },
      "cot-whatis": {
        "h2": "কোট্যানজেন্ট অনুপাত বোঝা",
        "blocks": [
          {
            "kind": "p",
            "text": "কোট্যানজেন্ট রেফারেন্স কোণের পাশের দৈর্ঘ্যের সঙ্গে এর বিপরীত দৈর্ঘ্যের তুলনা করে:"
          },
          {
            "kind": "p",
            "text": "[[[\\cot(A)=\\frac{b}{a}]]]"
          },
          {
            "kind": "p",
            "text": "এখানে [[\\cot(A)]] হলো কোণ [[A]]-এর কোট্যানজেন্ট, [[b]] সংলগ্ন বাহু, আর [[a]] বিপরীত বাহু: বিপরীত বাহুটি সংলগ্ন বাহুর ভেতরে কতবার আঁটে।"
          },
          {
            "kind": "h3",
            "text": "ট্যানজেন্টের ব্যুৎক্রম হিসেবে কোট্যানজেন্ট"
          },
          {
            "kind": "p",
            "text": "ট্যানজেন্ট বিপরীত বাহুকে সংলগ্ন বাহু দিয়ে ভাগ করে, [[\\tan(A)=a/b]]। এর ব্যুৎক্রম নিলে ভগ্নাংশটি উল্টে যায়, [[1/\\tan(A)=b/a]], যা ঠিক কোট্যানজেন্ট সূত্র:"
          },
          {
            "kind": "p",
            "text": "[[[\\boxed{\\cot(A)=\\frac{1}{\\tan(A)}=\\frac{b}{a}}]]]]"
          },
          {
            "kind": "p",
            "text": "[[\\tan(A)=3/4=0.75]] হলে ব্যুৎক্রম হয় [[\\cot(A)=1/0.75=4/3\\approx1.3333]]: একই ত্রিভুজ, বিপরীত দিক থেকে বর্ণনা করা। এই পার্থক্য গুরুত্বপূর্ণ, কারণ [[\\tan^{-1}]] বিপরীত ট্যানজেন্ট ফাংশন নির্দেশ করে, আর [[1/\\tan(A)]] ব্যুৎক্রম ট্যানজেন্ট: সম্পর্কিত ধারণা, আলাদা অর্থ, আলাদা উত্তর।"
          },
          {
            "kind": "h3",
            "text": "অনুভূমিক দূরত্ব বনাম উল্লম্ব উচ্চতা হিসেবে কোট্যানজেন্ট বোঝা"
          },
          {
            "kind": "p",
            "text": "কোণ [[A]] অনুভূমিক থেকে মাপা হলে সংলগ্ন বাহু অনুভূমিক দূরত্ব আর বিপরীত বাহু উল্লম্ব উচ্চতা নির্দেশ করতে পারে। তখন [[\\cot(A)=\\frac{\\text{Horizontal run}}{\\text{Vertical rise}}]]। ট্যানজেন্ট একই সম্পর্ক উল্টোভাবে দেয়, উচ্চতা বনাম দূরত্ব। এই দূরত্ব-বনাম-উচ্চতা পাঠ কোট্যানজেন্টকে \"কতটা অনুভূমিক দূরত্বে কতটা উচ্চতা?\" ধরনের প্রশ্নের স্বাভাবিক অনুপাত বানায়, এবং এটি নির্ভর করে নির্বাচিত রেফারেন্স কোণ ও পরিস্থিতির জ্যামিতির ওপর।"
          },
          {
            "kind": "h3",
            "text": "কোট্যানজেন্ট মানের অর্থ কী?"
          },
          {
            "kind": "p",
            "text": "1-এর বেশি কোট্যানজেন্ট মানে সংলগ্ন বাহু বিপরীত বাহুর চেয়ে লম্বা, আর রেফারেন্স কোণ [[45^\\circ]]-এর কম। 1-এর সমান কোট্যানজেন্ট মানে দুটি বাহু সমান এবং কোণ [[A]] ঠিক [[45^\\circ]]। 0 থেকে 1-এর মধ্যে কোট্যানজেন্ট মানে বিপরীত বাহু সংলগ্ন বাহুর চেয়ে লম্বা, আর রেফারেন্স কোণ [[45^\\circ]] থেকে [[90^\\circ]]-এর মধ্যে।"
          },
          {
            "kind": "h3",
            "text": "কোট্যানজেন্ট কেন 1-এর বেশি হতে পারে"
          },
          {
            "kind": "p",
            "text": "সাইন ও কোসাইনের মতো কোট্যানজেন্টের 0-থেকে-1 সীমা নেই, কারণ ভাগে অতিভুজ কখনো ঢোকে না। [[\\cot(A)=8/2=4]]-এর ক্ষেত্রে সংলগ্ন বাহু কেবল বিপরীত বাহুর চার গুণ, আর রেফারেন্স কোণ একটি অপেক্ষাকৃত ছোট সূক্ষ্মকোণ। যেকোনো ধনাত্মক সসীম মানই সম্ভব।"
          },
          {
            "kind": "h3",
            "text": "কোট্যানজেন্ট কেন 1-এর কম হতে পারে"
          },
          {
            "kind": "p",
            "text": "[[\\cot(A)=3/6=0.5]]-এর ক্ষেত্রে সংলগ্ন বাহু বিপরীত বাহুর অর্ধেক, তাই রেফারেন্স কোণ একটি অপেক্ষাকৃত বড় সূক্ষ্মকোণ। অনুপাত 1-এর নিচে নেমে আসে, এতে কিছু ভুল হয়নি: এটি কেবল লম্বা, সরু ত্রিভুজের স্বাক্ষর।"
          },
          {
            "kind": "h3",
            "text": "কোট্যানজেন্ট কেন এককহীন অনুপাত"
          },
          {
            "kind": "p",
            "text": "এক দৈর্ঘ্যকে আরেক দৈর্ঘ্য দিয়ে ভাগ করলে একক কেটে যায়: [[4\\text{ m}/3\\text{ m}=4/3]], আর [[400\\text{ cm}/300\\text{ cm}=4/3]]-ও। সংখ্যাটি ত্রিভুজের আকৃতি বর্ণনা করে, ভৌত এককসহ পরিমাপ নয়, তাই ফলাফলটি সাদা সংখ্যা হিসেবে লিখুন, মিটার, সেন্টিমিটার বা ডিগ্রি কখনো জুড়ে দেবেন না।"
          }
        ],
        "steps": [],
        "closingParagraphs": [],
        "tables": [],
        "figures": [
          {
            "alt": "তিনটি ধাপ: 3-4-5 ত্রিভুজে নাম দেওয়া, ট্যানজেন্ট tan(A)=3/4=0.75, কোট্যানজেন্ট cot(A)=4/3=1.3333, ব্যুৎক্রম সম্পর্ক",
            "caption": "তিনটি ধাপ: 3-4-5 ত্রিভুজে নাম দিন, ট্যানজেন্ট tan(A) = 3/4 গণনা করুন, তারপর ভগ্নাংশটি উল্টে cot(A) = 4/3 পান।"
          }
        ]
      },
      "cot-formula": {
        "h2": "কোট্যানজেন্ট সূত্র কীভাবে কাজ করে",
        "blocks": [
          {
            "kind": "p",
            "text": "সংজ্ঞা থেকে শুরু করুন: কোট্যানজেন্ট হলো সংলগ্ন বাহুকে বিপরীত বাহু দিয়ে ভাগ করা। এই পৃষ্ঠার চিহ্নপদ্ধতিতে:"
          },
          {
            "kind": "p",
            "text": "[[[\\boxed{\\cot(A)=\\frac{b}{a}}]]]]"
          },
          {
            "kind": "p",
            "text": "সংলগ্ন বাহু লব, কারণ এটিই তুলনা করা দৈর্ঘ্য; বিপরীত বাহু হর, কারণ এটি রেফারেন্স দৈর্ঘ্য, \"এটির কতগুলো ওটার ভেতরে আঁটে\" সেই একক। দুটিকে অদলবদল করলে ট্যানজেন্ট অনুপাত পাওয়া যায়।"
          },
          {
            "kind": "h3",
            "text": "সম্পূর্ণ সমাধানসহ উদাহরণ: একটি 3-4-5 সমকোণী ত্রিভুজ"
          },
          {
            "kind": "p",
            "text": "দেওয়া আছে [[b=4\\text{ cm}]], [[a=3\\text{ cm}]], [[c=5\\text{ cm}]]:"
          },
          {
            "kind": "p",
            "text": "ধাপ 1: সূত্রটি লিখুন। [[\\cot(A)=b/a]]"
          },
          {
            "kind": "p",
            "text": "ধাপ 2: পরিমাপগুলো বসান। [[\\cot(A)=4/3]]"
          },
          {
            "kind": "p",
            "text": "ধাপ 3: ভাগ করুন। [[\\boxed{\\cot(A)\\approx1.3333}]]"
          },
          {
            "kind": "p",
            "text": "ধাপ 4: উত্তরের ব্যাখ্যা করুন। সংলগ্ন বাহু বিপরীত বাহুর প্রায় 1.3333 গুণ।"
          },
          {
            "kind": "p",
            "text": "ধাপ 5: ট্যানজেন্ট অনুপাত দিয়ে যাচাই করুন। [[\\tan(A)=3/4=0.75]], আর [[1/0.75\\approx1.3333]]। দুটি পথই একই সংখ্যায় পৌঁছায়, ব্যুৎক্রম অনুপাত ঠিক এভাবেই আচরণ করে।"
          }
        ],
        "steps": [],
        "closingParagraphs": [],
        "tables": [],
        "figures": []
      },
      "cot-howto": {
        "h2": "কোট্যানজেন্ট অনুপাত ক্যালকুলেটর কীভাবে ব্যবহার করবেন",
        "blocks": [
          {
            "kind": "p",
            "text": "নিচের ধাপগুলো এই পৃষ্ঠার আসল ইন্টারফেসের সঙ্গে মিলে যায়।"
          }
        ],
        "steps": [
          "<strong>রেফারেন্স কোণ [[A]] চিহ্নিত করুন,</strong> কারণ সংলগ্ন ও বিপরীত বাহু এর সাপেক্ষেই সংজ্ঞায়িত।",
          "<strong>সংলগ্ন বাহু [[b]] খুঁজুন:</strong> কোণ [[A]]-কে স্পর্শকারী বাহু, যা অতিভুজ নয়।",
          "<strong>বিপরীত বাহু [[a]] খুঁজুন:</strong> কোণ [[A]]-এর ঠিক বিপরীত বাহু, যা এর শীর্ষবিন্দু কখনো স্পর্শ করে না।",
          "<strong>দুটি বাহুর দৈর্ঘ্য মাপুন বা সংগ্রহ করুন</strong> একই এককে।",
          "<strong>সংলগ্ন বাহুর দৈর্ঘ্য লিখুন</strong> প্রথম ইনপুট ঘরে।",
          "<strong>বিপরীত বাহুর দৈর্ঘ্য লিখুন</strong> দ্বিতীয় ইনপুট ঘরে।",
          "<strong>একক নির্বাচকে সামঞ্জস্যপূর্ণ একক বেছে নিন</strong> যাতে ভাগে তুলনা হয় সমানের সঙ্গে সমানের।",
          "<strong>নিশ্চিত করুন দুটি পরিমাপই ধনাত্মক;</strong> শূন্য বা ঋণাত্মক দৈর্ঘ্যে বাস্তব ত্রিভুজ গঠন সম্ভব নয়।",
          "<strong>হিসাব করুন cot(A)-তে ক্লিক করুন</strong> সংলগ্ন বাহুকে বিপরীত বাহু দিয়ে ভাগ করতে।",
          "<strong>কোট্যানজেন্ট অনুপাত পড়ুন:</strong> বিপরীত বাহুর গুণিতক হিসেবে প্রকাশিত সংলগ্ন বাহু।",
          "<strong>ফলাফলের ব্যাখ্যা করুন:</strong> 1-এর বেশি মানে লম্বা সংলগ্ন বাহু, 1-এর সমান মানে সমান বাহু, 1-এর কম মানে লম্বা বিপরীত বাহু।",
          "<strong>Reset ব্যবহার করুন</strong> ইনপুট মুছে নতুন করে শুরু করতে।"
        ],
        "closingParagraphs": [
          "ক্যালকুলেটর অতিভুজ চায় না, ডিগ্রিতে কোণও চায় না: দুটি ধনাত্মক বাহুর দৈর্ঘ্যই সম্পূর্ণ ইনপুট, আর ফলাফল সবসময় একটি ধনাত্মক, এককহীন সংখ্যা।"
        ],
        "tables": [],
        "figures": []
      },
      "cot-examples": {
        "h2": "কোট্যানজেন্ট গণনার ধাপে ধাপে উদাহরণ",
        "blocks": [
          {
            "kind": "p",
            "text": "প্রতিটি উদাহরণ একই ধাঁচ অনুসরণ করে: সূত্র লিখুন, বসান, ভাগ করুন, ব্যাখ্যা করুন।"
          },
          {
            "kind": "h3",
            "text": "উদাহরণ 1: একটি 3-4-5 সমকোণী ত্রিভুজ"
          },
          {
            "kind": "p",
            "text": "দেওয়া আছে [[b=4\\text{ cm}]], [[a=3\\text{ cm}]], [[c=5\\text{ cm}]]:"
          },
          {
            "kind": "p",
            "text": "[[\\cot(A)=4/3]]"
          },
          {
            "kind": "p",
            "text": "[[\\boxed{\\cot(A)\\approx1.3333}]]"
          },
          {
            "kind": "p",
            "text": "সংলগ্ন বাহু বিপরীত বাহুর প্রায় 1.3333 গুণ; অতিভুজ গণনার সম্পূর্ণ বাইরে।"
          },
          {
            "kind": "h3",
            "text": "উদাহরণ 2: একটি 5-12-13 সমকোণী ত্রিভুজ"
          },
          {
            "kind": "p",
            "text": "দেওয়া আছে [[b=12\\text{ m}]], [[a=5\\text{ m}]], [[c=13\\text{ m}]]:"
          },
          {
            "kind": "p",
            "text": "[[\\cot(A)=12/5]]"
          },
          {
            "kind": "p",
            "text": "[[\\boxed{\\cot(A)=2.4}]]"
          },
          {
            "kind": "p",
            "text": "অনুপাতটি 1-এর বেশি, কারণ সংলগ্ন বাহু লম্বা বাহু; এটি বলে সংলগ্ন বাহু বিপরীত বাহুর 2.4 গুণ, ত্রিভুজটি কত বড় তা নয়।"
          },
          {
            "kind": "h3",
            "text": "উদাহরণ 3: একটি সমদ্বিবাহু সমকোণী ত্রিভুজ"
          },
          {
            "kind": "p",
            "text": "দেওয়া আছে [[b=6\\text{ cm}]], [[a=6\\text{ cm}]], [[c=6\\sqrt{2}\\text{ cm}]]:"
          },
          {
            "kind": "p",
            "text": "[[\\cot(A)=6/6]]"
          },
          {
            "kind": "p",
            "text": "[[\\boxed{\\cot(A)=1}]]"
          },
          {
            "kind": "p",
            "text": "সমান বাহুতে অনুপাত ঠিক 1 হয়, যা [[45^\\circ]] রেফারেন্স কোণের স্বাক্ষর।"
          },
          {
            "kind": "h3",
            "text": "উদাহরণ 4: ছোট সংলগ্ন বাহুর একটি ত্রিভুজ"
          },
          {
            "kind": "p",
            "text": "দেওয়া আছে [[b=6\\text{ m}]] ও [[a=8\\text{ m}]]:"
          },
          {
            "kind": "p",
            "text": "[[\\cot(A)=6/8]]"
          },
          {
            "kind": "p",
            "text": "[[\\boxed{\\cot(A)=0.75}]]"
          },
          {
            "kind": "p",
            "text": "ফলাফল 1-এর কম, কারণ বিপরীত বাহু লম্বা বাহু, তাই রেফারেন্স কোণ [[45^\\circ]]-এর বেশি।"
          }
        ],
        "steps": [],
        "closingParagraphs": [],
        "tables": [],
        "figures": []
      },
      "cot-applications": {
        "h2": "কোট্যানজেন্ট অনুপাতের বাস্তব জীবনের উদাহরণ",
        "blocks": [
          {
            "kind": "p",
            "text": "কোট্যানজেন্ট একটি গাণিতিক অনুপাত, এককসহ ভৌত পরিমাণ নয়। এর বাস্তব মূল্য অনুভূমিক দূরত্বের সঙ্গে উল্লম্ব উচ্চতার তুলনায়, ত্রিভুজের জ্যামিতি পরীক্ষায়, আর যেসব সূত্রে বিশেষভাবে সংলগ্ন বনাম বিপরীত চাওয়া হয় সেগুলোতে। প্রতিটি উদাহরণে সরলীকৃত সমকোণী ত্রিভুজ ধরা হয়েছে, এবং এই অনুপাতগুলোর কোনোটিই একা নিরাপত্তা, শক্তি বা কোড-সম্মতির প্রশ্ন নিষ্পত্তি করে না।"
          },
          {
            "kind": "h3",
            "text": "উদাহরণ 5: মইয়ের দূরত্ব-বনাম-উচ্চতা অনুপাত বের করা"
          },
          {
            "kind": "p",
            "text": "একটি মই খাড়া দেয়ালে হেলান দিয়ে আছে। এর গোড়া দেয়াল থেকে 3 m দূরে, আর এটি দেয়াল বেয়ে 4 m উঁচুতে পৌঁছেছে। অনুভূমিক দূরত্ব সংলগ্ন বাহু [[b=3\\text{ m}]], উল্লম্ব পৌঁছ বিপরীত বাহু [[a=4\\text{ m}]]। [[\\cot(A)=3/4]], তাই [[\\boxed{\\cot(A)=0.75}]]: অনুভূমিক দূরত্ব উল্লম্ব উচ্চতার 75 শতাংশ। অনুপাতটি মইয়ের জ্যামিতি বর্ণনা করে; মই নিরাপদে বসানো আছে কিনা তা নির্ধারণ করে না।"
          },
          {
            "kind": "h3",
            "text": "উদাহরণ 6: ছাদের দূরত্ব-বনাম-উচ্চতা অনুপাত গণনা"
          },
          {
            "kind": "p",
            "text": "ছাদের একটি অংশের অনুভূমিক দূরত্ব 4 m আর উল্লম্ব উচ্চতা 3 m। এখানে [[b=4\\text{ m}]] ও [[a=3\\text{ m}]]। [[\\cot(A)=4/3]], তাই [[\\boxed{\\cot(A)\\approx1.3333}]]: অনুভূমিক দূরত্ব উল্লম্ব উচ্চতার প্রায় 1.3333 গুণ। এই অনুপাত সম্পূর্ণ কাঠামোগত বা ছাদ-কোড মূল্যায়ন নয়।"
          },
          {
            "kind": "h3",
            "text": "উদাহরণ 7: র‍্যাম্পের কোট্যানজেন্ট অনুপাত মূল্যায়ন"
          },
          {
            "kind": "p",
            "text": "সরলীকৃত একটি র‍্যাম্পের অনুভূমিক দূরত্ব 9 m আর উল্লম্ব উচ্চতা 0.75 m। [[b=9\\text{ m}]] ও [[a=0.75\\text{ m}]] হলে: [[\\cot(A)=9/0.75]], তাই [[\\boxed{\\cot(A)=12}]]। অনুভূমিক দূরত্ব উল্লম্ব উচ্চতার 12 গুণ, মৃদু ঢালের স্বাক্ষর। অনুপাত একা প্রবেশযোগ্যতা বা ভবন-কোড সম্মতি নির্ধারণ করে না।"
          },
          {
            "kind": "h3",
            "text": "উদাহরণ 8: জরিপ পরিমাপ"
          },
          {
            "kind": "p",
            "text": "সরলীকৃত একটি জরিপ ত্রিভুজের অনুভূমিক দূরত্ব 40 m আর উল্লম্ব উচ্চতার পার্থক্য 30 m। [[b=40\\text{ m}]] ও [[a=30\\text{ m}]] হলে: [[\\cot(A)=40/30]], তাই [[\\boxed{\\cot(A)\\approx1.3333}]]। অনুপাতটি অনুভূমিক বিচ্ছেদের সঙ্গে উল্লম্ব পার্থক্যের সরাসরি তুলনা করে। প্রকৃত জরিপে অতিরিক্ত পরিমাপ, সংশোধন ও যন্ত্র-পদ্ধতি লাগতে পারে।"
          },
          {
            "kind": "h3",
            "text": "উদাহরণ 9: খুঁটিকে ধরে রাখা গাই তার"
          },
          {
            "kind": "p",
            "text": "একটি গাই তার খুঁটিকে মাটির নোঙরের সঙ্গে যুক্ত করে। নোঙরটি খুঁটি থেকে অনুভূমিকভাবে 12 m দূরে, আর সংযোগ বিন্দু মাটি থেকে 5 m উঁচুতে। [[b=12\\text{ m}]] ও [[a=5\\text{ m}]] হলে: [[\\cot(A)=12/5]], তাই [[\\boxed{\\cot(A)=2.4}]]। অনুভূমিক দূরত্ব উল্লম্ব বিচ্ছেদের 2.4 গুণ। এই অনুপাত তারের টান, নোঙরের শক্তি বা কাঠামোগত নিরাপত্তা প্রতিষ্ঠা করে না।"
          },
          {
            "kind": "h3",
            "text": "উদাহরণ 10: সিঁড়ির দূরত্ব-বনাম-উচ্চতা অনুপাত বোঝা"
          },
          {
            "kind": "p",
            "text": "সরলীকৃত একটি সিঁড়ির অনুভূমিক দূরত্ব 4 m আর উল্লম্ব উচ্চতা 3 m। [[b=4\\text{ m}]] ও [[a=3\\text{ m}]] হলে: [[\\cot(A)=4/3]], তাই [[\\boxed{\\cot(A)\\approx1.3333}]]। অনুভূমিক দূরত্ব উল্লম্ব উচ্চতার প্রায় 1.3333 গুণ। উদাহরণটি আদর্শ কর্ণ বর্ণনা করে; সিঁড়ির মাপ বা কোড-সম্মতি যাচাই করে না।"
          },
          {
            "kind": "h3",
            "text": "উদাহরণ 11: ক্রেন বুমের অনুভূমিক ও উল্লম্ব উপাংশ"
          },
          {
            "kind": "p",
            "text": "সরলীকৃত একটি ক্রেন বুম 6 m অনুভূমিক প্রক্ষেপণ ও 8 m উল্লম্ব উচ্চতা নিয়ে সমকোণী ত্রিভুজ গঠন করে। [[b=6\\text{ m}]] ও [[a=8\\text{ m}]] হলে: [[\\cot(A)=6/8]], তাই [[\\boxed{\\cot(A)=0.75}]]। অনুভূমিক প্রক্ষেপণ উল্লম্ব উপাংশের 75 শতাংশ। অনুপাতটি উত্তোলন ক্ষমতা বা পরিচালন নিরাপত্তা প্রতিষ্ঠা করে না।"
          },
          {
            "kind": "h3",
            "text": "উদাহরণ 12: সরল বিমান উড্ডয়ন খণ্ড"
          },
          {
            "kind": "p",
            "text": "সরলীকৃত একটি উড্ডয়ন খণ্ডে বিমান 4 km অনুভূমিক সরণ ও 3 km উল্লম্ব লাভ নিয়ে সরল পথে চলে। [[b=4\\text{ km}]] ও [[a=3\\text{ km}]] হলে: [[\\cot(A)=4/3]], তাই [[\\boxed{\\cot(A)\\approx1.3333}]]। অনুভূমিক সরণ উল্লম্ব লাভের প্রায় 1.3333 গুণ। এটি আদর্শ জ্যামিতিক মডেল, সম্পূর্ণ উড্ডয়ন-ন্যাভিগেশন গণনা নয়।"
          },
          {
            "kind": "h3",
            "text": "উদাহরণ 13: কর্ণাকার যান্ত্রিক ব্রেস"
          },
          {
            "kind": "p",
            "text": "কর্ণাকার ব্রেসের অনুভূমিক সরণ 1.2 m আর উল্লম্ব উচ্চতা 1.6 m। [[b=1.2\\text{ m}]] ও [[a=1.6\\text{ m}]] হলে: [[\\cot(A)=1.2/1.6]], তাই [[\\boxed{\\cot(A)=0.75}]]। অনুভূমিক সরণ উল্লম্ব উচ্চতার 75 শতাংশ। অনুপাতটি ব্রেসের শক্তি বা উপযুক্ততা নির্ধারণ করে না।"
          },
          {
            "kind": "h3",
            "text": "উদাহরণ 14: সরল হাইকিং অংশ"
          },
          {
            "kind": "p",
            "text": "হাইকিং পথের সরলীকৃত একটি সরল অংশের অনুভূমিক সরণ 80 m আর উল্লম্ব লাভ 60 m। [[b=80\\text{ m}]] ও [[a=60\\text{ m}]] হলে: [[\\cot(A)=80/60]], তাই [[\\boxed{\\cot(A)\\approx1.3333}]]। অনুভূমিক সরণ উচ্চতা লাভের প্রায় 1.3333 গুণ। প্রকৃত পথে বাঁক ও বদলানো ঢাল থাকতে পারে।"
          },
          {
            "kind": "h3",
            "text": "উদাহরণ 15: ছাউনির সাপোর্ট"
          },
          {
            "kind": "p",
            "text": "কর্ণাকার ছাউনি সাপোর্টের অনুভূমিক প্রক্ষেপণ 2.4 m আর উল্লম্ব উচ্চতা 1.8 m। [[b=2.4\\text{ m}]] ও [[a=1.8\\text{ m}]] হলে: [[\\cot(A)=2.4/1.8]], তাই [[\\boxed{\\cot(A)\\approx1.3333}]]। অনুপাতটি উল্লম্ব উচ্চতার সাপেক্ষে অনুভূমিক প্রক্ষেপণ বর্ণনা করে। এই গণনা কাঠামোগত উপযুক্ততা প্রতিষ্ঠা করে না।"
          },
          {
            "kind": "h3",
            "text": "উদাহরণ 16: দুটি ভিন্ন উচ্চতার মধ্যে বিস্তৃত তার"
          },
          {
            "kind": "p",
            "text": "একটি সরল তার 7 m উল্লম্ব বিচ্ছেদসহ দুটি বিন্দুর মধ্যে অনুভূমিকভাবে 24 m বিস্তৃত। [[b=24\\text{ m}]] ও [[a=7\\text{ m}]] হলে: [[\\cot(A)=24/7]], তাই [[\\boxed{\\cot(A)\\approx3.4286}]]। অনুভূমিক বিচ্ছেদ উল্লম্ব পার্থক্যের প্রায় 3.4286 গুণ। মডেলটি প্রান্তবিন্দুর মধ্যে সরলরেখা ধরে নিয়েছে।"
          },
          {
            "kind": "h3",
            "text": "বাস্তব উদাহরণগুলোর তুলনা"
          },
          {
            "kind": "p",
            "text": "ধাঁচটি সর্বত্র বজায় থাকে: সংলগ্ন বাহু বিপরীত বাহুকে বামন করলে অনুপাত বড় হয়, আর বিপরীত বাহু প্রাধান্য পেলে ছোট হয়।"
          }
        ],
        "steps": [],
        "closingParagraphs": [],
        "tables": [
          {
            "headers": ["পরিস্থিতি", "সংলগ্ন বাহু b", "বিপরীত বাহু a", "কোট্যানজেন্ট সূত্র", "গণনাকৃত অনুপাত", "ব্যাখ্যা"],
            "rows": [
              ["মই", "3 m", "4 m", "3/4", "0.75", "দূরত্ব উল্লম্ব পৌঁছের 75%"],
              ["ছাদ", "4 m", "3 m", "4/3", "1.3333", "দূরত্ব উচ্চতার 1.3333 গুণ"],
              ["র‍্যাম্প", "9 m", "0.75 m", "9/0.75", "12", "দূরত্ব উচ্চতার 12 গুণ"],
              ["জরিপ", "40 m", "30 m", "40/30", "1.3333", "দূরত্ব উচ্চতার ফাঁকের 1.3333 গুণ"],
              ["গাই তার", "12 m", "5 m", "12/5", "2.4", "দূরত্ব উচ্চতার 2.4 গুণ"],
              ["সিঁড়ি", "4 m", "3 m", "4/3", "1.3333", "দূরত্ব উচ্চতার 1.3333 গুণ"],
              ["ক্রেন বুম", "6 m", "8 m", "6/8", "0.75", "প্রক্ষেপণ উচ্চতার 75%"],
              ["উড্ডয়ন খণ্ড", "4 km", "3 km", "4/3", "1.3333", "সরণ লাভের 1.3333 গুণ"],
              ["ব্রেস", "1.2 m", "1.6 m", "1.2/1.6", "0.75", "সরণ উচ্চতার 75%"],
              ["হাইকিং পথ", "80 m", "60 m", "80/60", "1.3333", "সরণ লাভের 1.3333 গুণ"],
              ["ছাউনি সাপোর্ট", "2.4 m", "1.8 m", "2.4/1.8", "1.3333", "প্রক্ষেপণ উচ্চতার 1.3333 গুণ"],
              ["তার", "24 m", "7 m", "24/7", "3.4286", "বিচ্ছেদ উচ্চতার ফাঁকের 3.4286 গুণ"]
            ]
          }
        ],
        "figures": [
          {
            "alt": "চারটি প্যানেল: মই অনুপাত 0.75, ছাদ 1.3333, র‍্যাম্প 12, জরিপ 1.3333, প্রতিটিতে নামাঙ্কিত সমকোণী ত্রিভুজ",
            "caption": "চারটি বাস্তব গণনা: মই, ছাদ, র‍্যাম্প ও জরিপ, প্রতিটির ত্রিভুজ, সূত্র ও অনুপাতসহ।"
          }
        ]
      },
      "cot-angle": {
        "h2": "কোট্যানজেন্ট ও কোণের আকারের সম্পর্ক বোঝা",
        "blocks": [
          {
            "kind": "p",
            "text": "সূক্ষ্মকোণ বাড়ার সঙ্গে কোট্যানজেন্ট কমে। ছোট কোণে সংলগ্ন বাহু বিপরীত বাহুর চেয়ে অনেক লম্বা থাকে, তাই অনুপাত বড় হয়; কোণ [[A]] [[90^\\circ]]-এর দিকে খুলতে থাকলে বিপরীত বাহু এগিয়ে যায় আর অনুপাত 0-এর দিকে নেমে আসে। নিচে যাচাইকৃত রেফারেন্স মানগুলো এই ধাঁচ দেখায়:"
          },
          {
            "kind": "p",
            "text": "টেবিলের পরিমাপগুলো দৃষ্টান্তমূলক: অনুপাতগুলোই, পরম দৈর্ঘ্য নয়, কোণ নির্ধারণ করে। কোণ [[0^\\circ]]-এর দিকে এগোলে অনুপাত সীমাহীনভাবে বাড়ে, আর কোণ [[90^\\circ]]-এর দিকে এগোলে 0-এর দিকে যায়, প্রতিটি বৈধ ত্রিভুজে ধনাত্মক ও সসীম থাকে।"
          }
        ],
        "steps": [],
        "closingParagraphs": [
          "ক্যালকুলেটর কোণ ইনপুট নেয় না; ফলাফল যাচাইয়ের সময় এই রেফারেন্স মানগুলো দিকনির্দেশনা ও পরীক্ষামূল্য হিসেবে কাজ করে।"
        ],
        "tables": [
          {
            "headers": ["কোণ A", "সংলগ্ন বাহু b", "বিপরীত বাহু a", "কোট্যানজেন্ট অনুপাত"],
            "rows": [
              ["30 deg", "sqrt(3)", "1", "প্রায় 1.7321"],
              ["45 deg", "1", "1", "1"],
              ["60 deg", "1", "sqrt(3)", "প্রায় 0.5774"],
              ["75 deg", "1", "প্রায় 3.7321", "প্রায় 0.2679"]
            ]
          }
        ],
        "figures": [
          {
            "alt": "30, 45, 60 ডিগ্রিতে তিনটি ত্রিভুজ, কোট্যানজেন্ট মান 1.7321, 1, 0.5774; কোণ বাড়লে কোট্যানজেন্ট কমে",
            "caption": "কোণ A বাড়ার সঙ্গে বিপরীত বাহু সংলগ্ন বাহুর বড় অংশ দখল করে, তাই cot(A) কমে।"
          }
        ]
      },
      "cot-recover": {
        "h2": "কোট্যানজেন্ট জানা থাকলে কোণ কীভাবে বের করবেন",
        "blocks": [
          {
            "kind": "p",
            "text": "কোট্যানজেন্ট অনুপাত নিজে কোণ নয়। অনুপাত জানা থাকলে আর কোণ দরকার হলে বিপরীত ত্রিকোণমিতি সেতু গড়ে। সমকোণী ত্রিভুজে ধনাত্মক কোট্যানজেন্ট অনুপাতের জন্য ব্যুৎক্রম নিয়ে ট্যানজেন্ট অনুপাত ফিরে পান, তারপর বিপরীত ট্যানজেন্ট প্রয়োগ করুন:"
          },
          {
            "kind": "p",
            "text": "[[[\\boxed{A=\\tan^{-1}\\left(\\frac{1}{\\cot(A)}\\right)}]]]"
          },
          {
            "kind": "p",
            "text": "সমতুল্যভাবে, যেহেতু [[\\tan(A)=a/b]]:"
          },
          {
            "kind": "p",
            "text": "[[[\\boxed{A=\\tan^{-1}\\left(\\frac{a}{b}\\right)}]]]"
          },
          {
            "kind": "h3",
            "text": "সমাধানসহ উদাহরণ"
          },
          {
            "kind": "p",
            "text": "[[\\cot(A)=4/3]] দেওয়া: ব্যুৎক্রম হলো [[\\tan(A)=3/4]], তাই [[A=\\tan^{-1}(3/4)]] আর [[\\boxed{A\\approx36.87^\\circ}]]। বিপরীত ট্যানজেন্ট কী চাপার আগে বৈজ্ঞানিক ক্যালকুলেটর ডিগ্রি মোডে সেট করুন। এটি পৃথক কোণ গণনা; এই পৃষ্ঠার কোট্যানজেন্ট অনুপাত ক্যালকুলেটর বাহুর দৈর্ঘ্য নিয়ে অনুপাত ফেরত দেয়, কোণ কখনো নয়।"
          }
        ],
        "steps": [],
        "closingParagraphs": [],
        "tables": [],
        "figures": []
      },
      "cot-mistakes": {
        "h2": "কোট্যানজেন্ট গণনায় সাধারণ ভুল",
        "blocks": [],
        "steps": [
          "<strong>সূত্র উল্টে [[b/a]]-এর বদলে [[a/b]] লেখা।</strong> এতে ট্যানজেন্ট গণনা হয়। সংশোধন: সংলগ্ন বাহু ওপরে রাখুন।",
          "<strong>কোট্যানজেন্টের সঙ্গে ট্যানজেন্ট গুলিয়ে ফেলা।</strong> 3-4-5 ত্রিভুজে 0.75 জানানো। সংশোধন: ট্যানজেন্ট বিপরীত বনাম সংলগ্ন; কোট্যানজেন্ট উল্টো ভগ্নাংশ।",
          "<strong>কোট্যানজেন্টের সঙ্গে কোসাইন গুলিয়ে ফেলা।</strong> [[b/c]] ব্যবহার করা। সংশোধন: কোসাইনে অতিভুজ দরকার; কোট্যানজেন্ট একে কখনো স্পর্শ করে না।",
          "<strong>দুটি বাহুর একটির বদলে অতিভুজ ব্যবহার করা।</strong> [[b/c]] বা [[c/a]] গণনা করা। সংশোধন: হরে বিপরীত বাহু [[a]], [[c]] নয়।",
          "<strong>সংলগ্ন ও বিপরীত বাহু অদলবদল করা।</strong> ভুল বাহু বেছে নেওয়া। সংশোধন: কোণ [[A]] থেকে ট্রেস করুন: যে বাহু একে স্পর্শ করে সেটি সংলগ্ন, যেটি এর বিপরীতে সেটি বিপরীত।",
          "<strong>ভুলে যাওয়া যে বাহুর নাম রেফারেন্স কোণের ওপর নির্ভর করে।</strong> কোণ [[B]]-এর জন্য আঁকা নাম ব্যবহার করা। সংশোধন: রেফারেন্স কোণ বদলালেই নাম নতুন করে দিন।",
          "<strong>ধরে নেওয়া যে কোট্যানজেন্ট 0 থেকে 1-এর মধ্যে হতেই হবে।</strong> 2.4 বা 12-কে ভুল ভাবা। সংশোধন: এই মানগুলো ঠিক আছে; কেবল সাইন ও কোসাইন 1-এ সীমাবদ্ধ।",
          "<strong>ধরে নেওয়া যে 1 কোট্যানজেন্ট মানে অবৈধ ত্রিভুজ।</strong> সংশোধন: [[\\cot(A)=1]] মানে কেবল সমান বাহু ও [[45^\\circ]] কোণ, পুরোপুরি বৈধ ত্রিভুজ।",
          "<strong>অনুপাত মিটার বা সেন্টিমিটারে জানানো।</strong> 1.3333 m লেখা। সংশোধন: একক ইতিমধ্যে কেটে গেছে, তাই সাদা সংখ্যা জানান।",
          "<strong>শূন্য বা ঋণাত্মক বাহুর দৈর্ঘ্য লেখা।</strong> শূন্য দিয়ে ভাগ বা অর্থহীন ঋণাত্মক অনুপাত। সংশোধন: শুধু ধনাত্মক দৈর্ঘ্য ব্যবহার করুন।",
          "<strong>পরিমাপের একক মেশানো।</strong> সেন্টিমিটার দিয়ে ভাগ করা মিটার অনুপাতকে 100 গুণ বিকৃত করে। সংশোধন: প্রথমে দুটি বাহুই এক এককে রূপান্তর করুন।",
          "<strong>আগেই গোল করা।</strong> যাচাইয়ের আগে [[4/3]]-কে 1.33 করা এড়ানো-যোগ্য ত্রুটি যোগ করে। সংশোধন: শেষ ধাপ পর্যন্ত অতিরিক্ত অঙ্ক রাখুন।",
          "<strong>ধরে নেওয়া যে কোট্যানজেন্ট ডিগ্রিতে কোণ।</strong> 1.3333-কে 1.3333 ডিগ্রি পড়া। সংশোধন: এটি অনুপাত; কোণের জন্য বিপরীত ট্যানজেন্ট দরকার।",
          "<strong>ব্যুৎক্রম ট্যানজেন্টের সঙ্গে বিপরীত ট্যানজেন্ট গুলিয়ে ফেলা।</strong> [[\\tan^{-1}(a/b)]] দরকার হলে [[1/\\tan(A)]] লেখা, বা উল্টোটা। সংশোধন: ব্যুৎক্রম ভগ্নাংশ উল্টায়; বিপরীত কোণ ফিরিয়ে আনে।",
          "<strong>ধরে নেওয়া যে কোট্যানজেন্ট মান ত্রিভুজের আকার নির্ধারণ করে।</strong> খুব আলাদা দুটি ত্রিভুজে [[\\cot(A)=1.3333]] থাকতে পারে। সংশোধন: অনুপাত আকৃতি নির্ধারণ করে, স্কেল নয়।"
        ],
        "closingParagraphs": [
          "<strong>ভুল বনাম সঠিক।</strong> [[b=4]] ও [[a=3]] দেওয়া:",
          "ভুল: [[3/4=0.75]]। এটি ট্যানজেন্ট অনুপাত, কোট্যানজেন্ট নয়।",
          "সঠিক: [[\\cot(A)=4/3\\approx1.3333]]। যাচাই: [[\\tan(A)=3/4=0.75]] আর [[1/0.75\\approx1.3333]], যা ব্যুৎক্রম সম্পর্ক নিশ্চিত করে।"
        ],
        "tables": [],
        "figures": []
      },
      "cot-verify": {
        "h2": "আপনার কোট্যানজেন্ট ফলাফল সঠিক কিনা কীভাবে যাচাই করবেন",
        "blocks": [
          {
            "kind": "p",
            "text": "বৈধ, অ-অধঃপতিত সমকোণী ত্রিভুজে ধনাত্মক বাহু দরকার, [[a \\gt 0]] ও [[b \\gt 0]], তাই কোট্যানজেন্ট ফলাফল ধনাত্মক, সসীম সংখ্যা হতেই হবে:"
          },
          {
            "kind": "p",
            "text": "[[[\\boxed{\\cot(A)=\\frac{b}{a} \\gt 0}]]]"
          },
          {
            "kind": "p",
            "text": "দুটি পরিমাপেই সামঞ্জস্যপূর্ণ একক ব্যবহার করতে হবে। 1-এর বেশি, 1-এর সমান বা 1-এর কম ফলাফল সবই বৈধ হতে পারে; সাইন ও কোসাইনের মতো কোট্যানজেন্ট 1-এ সীমাবদ্ধ নয়।"
          },
          {
            "kind": "h3",
            "text": "পদ্ধতি 1: ট্যানজেন্টের ব্যুৎক্রম পরীক্ষা করুন"
          },
          {
            "kind": "p",
            "text": "[[\\tan(A)=a/b]] যাচাই করুন, তারপর [[\\cot(A)=1/\\tan(A)]] নিশ্চিত করুন। [[a=3]] ও [[b=4]] হলে: [[\\tan(A)=3/4=0.75]], তাই [[\\cot(A)=1/0.75\\approx1.3333]]। দুটি পথের মধ্যে অমিল উল্টো ভগ্নাংশ বা ভুল নামাঙ্কিত বাহুর সংকেত দেয়।"
          },
          {
            "kind": "h3",
            "text": "পদ্ধতি 2: পিথাগোরাসের উপপাদ্য পরীক্ষা করুন"
          },
          {
            "kind": "p",
            "text": "অতিভুজ জানা বা দরকার হলে [[c=\\sqrt{a^2+b^2}]] গণনা করুন। [[a=3]] ও [[b=4]]-এর জন্য: [[c=\\sqrt{9+16}=5]], আর [[3^2+4^2=5^2]]। এটি নিশ্চিত করে বাহুর দৈর্ঘ্যগুলো সত্যিকারের সমকোণী ত্রিভুজ গঠন করে। অতিভুজ এখানে যাচাই মান, প্রাথমিক কোট্যানজেন্ট সূত্রের অংশ নয়।"
          },
          {
            "kind": "h3",
            "text": "পদ্ধতি 3: কোণ সম্পর্ক পরীক্ষা করুন"
          },
          {
            "kind": "p",
            "text": "জানা কোট্যানজেন্ট অনুপাতের জন্য [[A=\\tan^{-1}(a/b)]] দিয়ে কোণ ফিরে পান। [[a=3]] ও [[b=4]] হলে: [[A\\approx36.87^\\circ]]। সংলগ্ন বাহু বিপরীত বাহুর চেয়ে লম্বা হওয়ায় কোণ [[45^\\circ]]-এর নিচে নামা উচিত; না নামলে বাহুর নাম সম্ভবত অদলবদল হয়েছে। গোল করার কারণে সামান্য পার্থক্য হতে পারে।"
          }
        ],
        "steps": [],
        "closingParagraphs": [],
        "tables": [],
        "figures": []
      },
      "cot-vs": {
        "h2": "কোট্যানজেন্ট বনাম ট্যানজেন্ট, সাইন ও কোসাইন",
        "blocks": [
          {
            "kind": "p",
            "text": "প্রতিটি অনুপাত বাহুর ভিন্ন জোড়ার তুলনা করে, একই রেফারেন্স কোণ ও বাহুর নাম ব্যবহার করে:"
          }
        ],
        "steps": [],
        "closingParagraphs": [
          "কোট্যানজেন্ট ও ট্যানজেন্ট ব্যুৎক্রম জোড়া: [[\\cot(A)=1/\\tan(A)]]। [[\\tan(A)=0.75]] হলে [[\\cot(A)\\approx1.3333]]। সংলগ্ন বনাম বিপরীত চাওয়া সূত্রে, দূরত্ব-বনাম-উচ্চতা সম্পর্কে কাজ করলে, বা শুধু দুটি বাহু জানা থাকলে কোট্যানজেন্ট নিন; উচ্চতা-বনাম-দূরত্বে ট্যানজেন্ট, অতিভুজের বিপরীতে বিপরীত বাহুতে সাইন, আর অতিভুজের বিপরীতে সংলগ্ন বাহুতে কোসাইন নিন।",
          "পার্শ্ববর্তী অনুপাতগুলোর জন্য দেখুন <a href=\"/sine-ratio-calculator/\" class=\"text-primary hover:underline\">সাইন অনুপাত ক্যালকুলেটর</a>, <a href=\"/cosine-ratio-calculator/\" class=\"text-primary hover:underline\">কোসাইন অনুপাত ক্যালকুলেটর</a>, <a href=\"/tangent-ratio-calculator/\" class=\"text-primary hover:underline\">ট্যানজেন্ট অনুপাত ক্যালকুলেটর</a>, <a href=\"/secant-ratio-calculator/\" class=\"text-primary hover:underline\">সেক্যান্ট অনুপাত ক্যালকুলেটর</a> ও <a href=\"/cosecant-ratio-calculator/\" class=\"text-primary hover:underline\">কোসেক্যান্ট অনুপাত ক্যালকুলেটর</a>।"
        ],
        "tables": [
          {
            "headers": ["অনুপাত", "সূত্র", "এটি কিসের তুলনা করে"],
            "rows": [
              ["সাইন", "sin(A) = a/c", "অতিভুজের বিপরীতে বিপরীত বাহু"],
              ["কোসাইন", "cos(A) = b/c", "অতিভুজের বিপরীতে সংলগ্ন বাহু"],
              ["ট্যানজেন্ট", "tan(A) = a/b", "সংলগ্ন বাহুর বিপরীতে বিপরীত বাহু"],
              ["কোট্যানজেন্ট", "cot(A) = b/a", "বিপরীত বাহুর বিপরীতে সংলগ্ন বাহু"],
              ["সেক্যান্ট", "sec(A) = c/b", "সংলগ্ন বাহুর বিপরীতে অতিভুজ"],
              ["কোসেক্যান্ট", "csc(A) = c/a", "বিপরীত বাহুর বিপরীতে অতিভুজ"]
            ]
          }
        ],
        "figures": []
      },
      "cot-related": {
        "h2": "সম্পর্কিত ত্রিকোণমিতিক ক্যালকুলেটর দেখুন",
        "blocks": [],
        "steps": [],
        "closingParagraphs": [],
        "related": [
          { "name": "সাইন অনুপাত ক্যালকুলেটর" },
          { "name": "কোসাইন অনুপাত ক্যালকুলেটর" },
          { "name": "ট্যানজেন্ট অনুপাত ক্যালকুলেটর" },
          { "name": "সেক্যান্ট অনুপাত ক্যালকুলেটর" },
          { "name": "কোসেক্যান্ট অনুপাত ক্যালকুলেটর" },
          { "name": "সমকোণী ত্রিভুজ কোণ ক্যালকুলেটর" }
        ],
        "tables": [],
        "figures": []
      }
    },
    "faqs": [
      {
        "question": "সমকোণী ত্রিভুজে কোট্যানজেন্ট সূত্র কী?",
        "answer": "cot(A) = b / a: কোণ A-এর সংলগ্ন বাহুকে কোণ A-এর বিপরীত বাহু দিয়ে ভাগ করুন। সংলগ্ন বাহু 4 সেমি ও বিপরীত বাহু 3 সেমি হলে ফলাফল 4/3, প্রায় 1.3333।"
      },
      {
        "question": "কোট্যানজেন্ট ট্যানজেন্টের সঙ্গে কীভাবে সম্পর্কিত?",
        "answer": "কোট্যানজেন্ট ট্যানজেন্টের ব্যুৎক্রম: cot(A) = 1 / tan(A)। tan(A) = 3/4 = 0.75 হলে cot(A) = 4/3, প্রায় 1.3333। দুটি অনুপাত একই ত্রিভুজকে উল্টো দৃষ্টিকোণ থেকে বর্ণনা করে, আর ব্যুৎক্রম পরীক্ষা ফলাফল যাচাইয়ের দ্রুততম উপায়।"
      },
      {
        "question": "কোট্যানজেন্ট ও কোসাইনের মধ্যে পার্থক্য কী?",
        "answer": "কোট্যানজেন্ট সংলগ্ন বাহুকে বিপরীত বাহু দিয়ে ভাগ করে (b/a), শুধু দুটি বাহু ব্যবহার করে। কোসাইন সংলগ্ন বাহুকে অতিভুজ দিয়ে ভাগ করে (b/c)। কোট্যানজেন্ট ট্যানজেন্টের ব্যুৎক্রম, কোসাইনের নয়; এই পার্থক্য প্রাথমিক ত্রিকোণমিতিতে সবচেয়ে বেশি পরীক্ষিত ভুলগুলোর একটি।"
      },
      {
        "question": "কোট্যানজেন্ট কি 1-এর বেশি হতে পারে?",
        "answer": "হ্যাঁ। কোট্যানজেন্টের 0-থেকে-1 সীমা নেই, কারণ ভাগে অতিভুজ ঢোকে না। সংলগ্ন বাহু বিপরীত বাহুর চেয়ে লম্বা হলে ফলাফল 1-এর ওপরে হয়: 30 ডিগ্রি কোণে cot(30 deg) প্রায় 1.7321। 2.4, 12 বা যেকোনো ধনাত্মক সসীম সংখ্যাই সম্ভব।"
      },
      {
        "question": "1 কোট্যানজেন্ট মানের অর্থ কী?",
        "answer": "সংলগ্ন ও বিপরীত বাহু সমান দৈর্ঘ্যের, তাই ত্রিভুজটি রেফারেন্স কোণে সমদ্বিবাহু আর কোণ A 45 ডিগ্রি। 6 সেমি সংলগ্ন বাহু ও 6 সেমি বিপরীত বাহুতে cot(A) = 6/6 = 1।"
      },
      {
        "question": "কোট্যানজেন্ট কি 1-এর কম হতে পারে?",
        "answer": "হ্যাঁ, যখনই বিপরীত বাহু সংলগ্ন বাহুর চেয়ে লম্বা হয়। 6 m সংলগ্ন বাহু ও 8 m বিপরীত বাহুতে cot(A) = 6/8 = 0.75, আর রেফারেন্স কোণ তখন 45 ডিগ্রির বেশি।"
      },
      {
        "question": "কোট্যানজেন্টের কি পরিমাপের একক আছে?",
        "answer": "না। দুটি ইনপুটই একই এককে মাপা দৈর্ঘ্য, তাই একক কেটে যায়: 4 m / 3 m = 4/3, ঠিক যেমন 400 cm / 300 cm = 4/3। কোট্যানজেন্ট সাদা এককহীন সংখ্যা হিসেবে জানান, ডিগ্রি, মিটার বা ফুট কখনো জুড়ে দেবেন না।"
      },
      {
        "question": "বাহুর দৈর্ঘ্য থেকে কোট্যানজেন্ট কীভাবে গণনা করবেন?",
        "answer": "সংলগ্ন বাহু b ও বিপরীত বাহু a একই এককে মাপুন, দুটোই ধনাত্মক নিশ্চিত করুন, তারপর ভাগ করুন: cot(A) = b / a। এই পৃষ্ঠায় প্রথম ঘরে সংলগ্ন বাহু আর দ্বিতীয় ঘরে বিপরীত বাহু লিখুন, সামঞ্জস্যপূর্ণ একক বেছে নিন, আর হিসাব করুন cot(A)-তে ক্লিক করুন।"
      },
      {
        "question": "কোট্যানজেন্ট অনুপাত থেকে কোণ কীভাবে বের করব?",
        "answer": "ট্যানজেন্ট অনুপাত পেতে ব্যুৎক্রম নিন, তারপর বিপরীত ট্যানজেন্ট প্রয়োগ করুন: A = tan^-1(a / b)। cot(A) = 4/3-এর ক্ষেত্রে ট্যানজেন্ট অনুপাত 3/4, তাই A = tan^-1(0.75), প্রায় 36.87 ডিগ্রি। প্রথমে বৈজ্ঞানিক ক্যালকুলেটর ডিগ্রি মোডে সেট করুন। এই পৃষ্ঠার ক্যালকুলেটর অনুপাত ফেরত দেয়, কোণ নয়।"
      },
      {
        "question": "কোট্যানজেন্ট ক্যালকুলেটরের কি অতিভুজ দরকার?",
        "answer": "না। মৌলিক কোট্যানজেন্ট অনুপাত শুধু দুটি লম্ব বাহু ব্যবহার করে, তাই অতিভুজ কখনো সূত্রে ঢোকে না। এটি কেবল সাইন, কোসাইন, সেক্যান্ট বা কোসেক্যান্ট নিয়ে পরবর্তী কাজে, বা ত্রিভুজ যাচাইয়ে পিথাগোরাসের উপপাদ্য ব্যবহারের সময় প্রাসঙ্গিক হয়।"
      },
      {
        "question": "দূরত্ব ও উচ্চতার ভাষায় কোট্যানজেন্টের অর্থ কী?",
        "answer": "কোণ A অনুভূমিক থেকে মাপা হলে cot(A) হলো অনুভূমিক দূরত্ব বনাম উল্লম্ব উচ্চতা। 0.75 কোট্যানজেন্ট মানে অনুভূমিক দূরত্ব উল্লম্ব উচ্চতার 75 শতাংশ; 12 কোট্যানজেন্ট মানে দূরত্ব উচ্চতার বারো গুণ। ট্যানজেন্ট একই ধারণা উল্টোভাবে: উচ্চতা বনাম দূরত্ব।"
      },
      {
        "question": "ট্যানজেন্টের বদলে কোট্যানজেন্ট কখন ব্যবহার করব?",
        "answer": "কোট্যানজেন্ট ব্যবহার করুন যখন কোনো সূত্র বা পদ্ধতি বিশেষভাবে সংলগ্ন বনাম বিপরীত চায়, যখন অনুভূমিক দূরত্বের সঙ্গে উল্লম্ব উচ্চতার তুলনা করছেন, বা যখন জানা বাহু দুটি বাহু। জানা সম্পর্ক উচ্চতা বনাম দূরত্ব, বা বিপরীত বনাম সংলগ্ন হলে ট্যানজেন্ট সরাসরি পছন্দ।"
      }
    ],
    "faqHeading": "প্রায়শই জিজ্ঞাসিত প্রশ্ন",
    "relatedHeading": "সম্পর্কিত ত্রিকোণমিতিক ক্যালকুলেটর দেখুন",
    "conclusion": {
      "h2": "আত্মবিশ্বাসের সঙ্গে কোট্যানজেন্ট অনুপাত ব্যবহার করুন",
      "paragraphs": [
        "কোট্যানজেন্ট ট্যানজেন্টের উল্টো রূপ: সংলগ্ন বাহুকে বিপরীত বাহু দিয়ে ভাগ করুন আর ত্রিভুজের দূরত্ব-বনাম-উচ্চতা আকৃতি বর্ণনা হয়ে গেল। [[\\cot(A)=b/a]] সূত্রে মাত্র দুটি পরিমাপ দরকার, উত্তর সবসময় ধনাত্মক এককহীন সংখ্যা, আর কোন বাহু লম্বা তার ওপর নির্ভর করে এটি 1-এর ওপরে, সমান বা নিচে হতে পারে। কোণ নিজে দরকার হলে [[A=\\tan^{-1}(a/b)]] তা ফিরিয়ে আনে। মই, ছাদ, র‍্যাম্প বা পাঠ্যবইয়ের 3-4-5, পদ্ধতি কখনো বদলায় না: সংলগ্ন বাহু চিহ্নিত করুন, বিপরীত বাহু চিহ্নিত করুন, ভাগ করুন, আর ট্যানজেন্টের ব্যুৎক্রম দিয়ে যাচাই করুন।"
      ]
    }
  },
  "ja": {
    "tocHeading": "このガイドの内容",
    "tocItems": {
      "cot-intro": "余接比計算機とは?",
      "cot-triangle": "隣辺と対辺を理解する",
      "cot-whatis": "余接比を理解する",
      "cot-formula": "余接の公式の仕組み",
      "cot-howto": "余接比計算機の使い方",
      "cot-examples": "余接の計算を段階的に学ぶ例",
      "cot-applications": "余接比の実生活での使用例",
      "cot-angle": "余接と角の大きさの関係を理解する",
      "cot-recover": "余接が既知のときに角を求める方法",
      "cot-mistakes": "余接の計算でよくある間違い",
      "cot-verify": "余接の結果が正しいか確認する方法",
      "cot-vs": "余接 vs 正接・正弦・余弦",
      "cot-related": "関連する三角比計算機を見る",
      "cot-faq": "よくある質問"
    },
    "sections": {
      "cot-intro": {
        "h2": "余接比計算機とは?",
        "blocks": [
          {
            "kind": "p",
            "text": "余接比計算機が答える問いは一つです。直角三角形の鋭角について、角に接する辺は角に向かい合う辺と比べてどうか、という問いです。2つの辺の長さを入力すると、このツールは隣辺を対辺で割り、[[\\cot(A)=b/a]] を返します。隣辺が 4 cm、対辺が 3 cm の場合、計算は [[4/3\\approx1.3333]] となります。隣辺は対辺の約 1.3333 倍の長さです。この小数が答えのすべてです。割り算でセンチメートルが打ち消されるため単位はなく、度数法の角度でもありません。斜辺はこの計算には一切登場しません。垂直に交わる2つの辺だけで十分です。余接は正接の逆数でもあり、多くの教科書が [[\\tan(A)]] を反転させた形として紹介する理由もそこにあります。"
          }
        ],
        "steps": [],
        "closingParagraphs": [],
        "tables": [],
        "figures": []
      },
      "cot-triangle": {
        "h2": "隣辺と対辺を理解する",
        "blocks": [
          {
            "kind": "h3",
            "text": "直角三角形とは?"
          },
          {
            "kind": "p",
            "text": "直角三角形は、ちょうど [[90^\\circ]] の角を1つ持ちます。壁が水平な床と出会うような、2本の垂直な直線の間の角です。斜辺はその直角の向かい側にあり、常に最も長い辺です。残りの2つの角は残りの 90 度を分け合うので、どちらも鋭角です。2つの辺は直角で垂直に交わり、余接が表すのはこの2辺の関係です。"
          },
          {
            "kind": "h3",
            "text": "隣辺とは?"
          },
          {
            "kind": "p",
            "text": "隣辺 [[b]] は、斜辺ではなく、基準角 [[A]] に接する辺です。実用的な問題では、水平方向の走りとして登場することが多く見られます。はしごの脚元から地面までの距離、屋根の水平投影、力の水平成分などです。余接の公式では分子に入ります。どの辺が隣辺になるかは、選んだ基準角に依存します。そのため、角 [[A]] から角 [[B]] に切り替えると、隣辺と対辺の呼び名が入れ替わります。"
          },
          {
            "kind": "h3",
            "text": "対辺とは?"
          },
          {
            "kind": "p",
            "text": "対辺 [[a]] は角 [[A]] の真向かいにあり、その頂点に触れることは決してありません。実用的な問題では、垂直方向の上がりとして登場することが多く見られます。壁の高さ、標高差、測定値の垂直成分などです。余接の公式では分母に入ります。つまり、大きくすれば比は小さくなり、小さくすれば比は大きくなります。"
          },
          {
            "kind": "h3",
            "text": "斜辺とは?"
          },
          {
            "kind": "p",
            "text": "斜辺 [[c]] は直角の向かい側の辺です。どの図でも [[90^\\circ]] の角を示す小さな正方形の向かいにあり、どちらの辺よりも厳密に長いです。基本的な余接比には一切関与しないため、この計算機が斜辺を求めることはありません。正弦・余弦・正割・余割が登場するとき、あるいは2辺が本物の直角三角形を成すことをピタゴラスの定理で確かめるときに、斜辺は意味を持ちます。"
          }
        ],
        "steps": [],
        "closingParagraphs": [],
        "tables": [],
        "figures": [
          {
            "alt": "左下に角 A をもつ直角三角形、金色の隣辺 b、緑色の対辺 a、cot(A)=b/a",
            "caption": "角 A は左下にあります。余接は金色の隣辺 b と緑色の対辺 a を使い、斜辺 c は使いません。"
          }
        ]
      },
      "cot-whatis": {
        "h2": "余接比を理解する",
        "blocks": [
          {
            "kind": "p",
            "text": "余接は、基準角に接する長さと、基準角に向かい合う長さを比べます。"
          },
          {
            "kind": "p",
            "text": "[[[\\cot(A)=\\frac{b}{a}]]]"
          },
          {
            "kind": "p",
            "text": "ここで [[\\cot(A)]] は角 [[A]] の余接、[[b]] は隣辺、[[a]] は対辺です。つまり、対辺が隣辺の中に何回入るかを表します。"
          },
          {
            "kind": "h3",
            "text": "正接の逆数としての余接"
          },
          {
            "kind": "p",
            "text": "正接は対辺を隣辺で割り、[[\\tan(A)=a/b]] です。逆数を取るとこの分数が反転し、[[1/\\tan(A)=b/a]] となります。これがまさに余接の公式です。"
          },
          {
            "kind": "p",
            "text": "[[[\\boxed{\\cot(A)=\\frac{1}{\\tan(A)}=\\frac{b}{a}}]]]]"
          },
          {
            "kind": "p",
            "text": "[[\\tan(A)=3/4=0.75]] の場合、逆数は [[\\cot(A)=1/0.75=4/3\\approx1.3333]] です。同じ三角形を、反対方向から見た記述です。この区別は重要です。[[\\tan^{-1}]] は逆正接関数を表すのに対し、[[1/\\tan(A)]] は正接の逆数だからです。関連はしていますが、意味も答えも異なります。"
          },
          {
            "kind": "h3",
            "text": "水平距離 ÷ 垂直上昇としての余接"
          },
          {
            "kind": "p",
            "text": "角 [[A]] を水平から測る場合、隣辺は水平方向の走り、対辺は垂直方向の上がりを表せます。そのとき [[\\cot(A)=\\frac{\\text{Horizontal run}}{\\text{Vertical rise}}]] です。正接は同じ関係を反転させたもの、つまり上がり ÷ 走りです。この「走り÷上がり」の読み方により、余接は「どれだけの水平距離でどれだけの高さを稼ぐか」という問いに対する自然な比となり、選んだ基準角と状況の幾何学に依存します。"
          },
          {
            "kind": "h3",
            "text": "余接の値が意味するもの"
          },
          {
            "kind": "p",
            "text": "余接が 1 より大きいということは、隣辺が対辺より長く、基準角が [[45^\\circ]] 未満であることを意味します。余接が 1 に等しいということは、2辺が等しく、角 [[A]] がちょうど [[45^\\circ]] であることを意味します。余接が 0 と 1 の間ということは、対辺が隣辺より長く、基準角が [[45^\\circ]] から [[90^\\circ]] の間にあることを意味します。"
          },
          {
            "kind": "h3",
            "text": "余接が 1 より大きくなる理由"
          },
          {
            "kind": "p",
            "text": "正弦や余弦と違い、余接には 0 から 1 の上限がありません。割り算に斜辺が登場しないからです。[[\\cot(A)=8/2=4]] の場合、隣辺は単に対辺の4倍であり、基準角は比較的小さい鋭角です。正の有限値なら何でもあり得ます。"
          },
          {
            "kind": "h3",
            "text": "余接が 1 より小さくなる理由"
          },
          {
            "kind": "p",
            "text": "[[\\cot(A)=3/6=0.5]] の場合、隣辺は対辺の半分なので、基準角は比較的大きい鋭角です。比が 1 を下回っても何も問題ありません。背が高く細い三角形の特徴にすぎません。"
          },
          {
            "kind": "h3",
            "text": "余接が無次元の比である理由"
          },
          {
            "kind": "p",
            "text": "長さを長さで割ると単位が打ち消されます。[[4\\text{ m}/3\\text{ m}=4/3]] であり、[[400\\text{ cm}/300\\text{ cm}=4/3]] も同様です。この数は三角形の形を表すもので、物理単位つきの測定値ではありません。結果はただの数として書き、メートル、センチメートル、度をつけないでください。"
          }
        ],
        "steps": [],
        "closingParagraphs": [],
        "tables": [],
        "figures": [
          {
            "alt": "3段階: 3-4-5 三角形に名前付け、正接 tan(A)=3/4=0.75、余接 cot(A)=4/3=1.3333、逆数の関係",
            "caption": "3つの段階: 3-4-5 三角形に名前をつけ、正接 tan(A) = 3/4 を計算し、分数を反転させて cot(A) = 4/3 を得ます。"
          }
        ]
      },
      "cot-formula": {
        "h2": "余接の公式の仕組み",
        "blocks": [
          {
            "kind": "p",
            "text": "定義から始めます。余接は隣辺を対辺で割ったものです。このページの記法では次の通りです。"
          },
          {
            "kind": "p",
            "text": "[[[\\boxed{\\cot(A)=\\frac{b}{a}}]]]]"
          },
          {
            "kind": "p",
            "text": "隣辺が分子なのは、比べられる側の長さだからです。対辺が分母なのは、基準となる長さ、つまり「これがあれの中に何個入るか」の単位だからです。2つを入れ替えると、代わりに正接比になります。"
          },
          {
            "kind": "h3",
            "text": "完全な計算例: 3-4-5 の直角三角形"
          },
          {
            "kind": "p",
            "text": "[[b=4\\text{ cm}]]、[[a=3\\text{ cm}]]、[[c=5\\text{ cm}]] が与えられた場合:"
          },
          {
            "kind": "p",
            "text": "手順 1: 公式を書きます。[[\\cot(A)=b/a]]"
          },
          {
            "kind": "p",
            "text": "手順 2: 測定値を代入します。[[\\cot(A)=4/3]]"
          },
          {
            "kind": "p",
            "text": "手順 3: 割り算します。[[\\boxed{\\cot(A)\\approx1.3333}]]"
          },
          {
            "kind": "p",
            "text": "手順 4: 答えを解釈します。隣辺は対辺の約 1.3333 倍です。"
          },
          {
            "kind": "p",
            "text": "手順 5: 正接比で確かめます。[[\\tan(A)=3/4=0.75]] であり、[[1/0.75\\approx1.3333]] です。2つの経路はどちらも同じ数にたどり着きます。逆数比はまさにこのように振る舞います。"
          }
        ],
        "steps": [],
        "closingParagraphs": [],
        "tables": [],
        "figures": []
      },
      "cot-howto": {
        "h2": "余接比計算機の使い方",
        "blocks": [
          {
            "kind": "p",
            "text": "以下の手順は、このページの実際のインターフェースに対応しています。"
          }
        ],
        "steps": [
          "<strong>基準角 [[A]] を特定します。</strong>隣辺と対辺はこの角を基準に定義されるからです。",
          "<strong>隣辺 [[b]] を見つけます。</strong>角 [[A]] に接し、斜辺ではない辺です。",
          "<strong>対辺 [[a]] を見つけます。</strong>角 [[A]] の真向かいの辺で、その頂点に決して触れません。",
          "<strong>2つの辺の長さを測定または取得します。</strong>同じ単位でそろえます。",
          "<strong>隣辺の長さを入力します。</strong>最初の入力欄です。",
          "<strong>対辺の長さを入力します。</strong>2番目の入力欄です。",
          "<strong>単位選択で対応する単位を選びます。</strong>割り算で同等同士を比べられるようにします。",
          "<strong>両方の測定値が正であることを確認します。</strong>ゼロや負の長さでは本物の三角形はできません。",
          "<strong>「計算する cot(A)」をクリックします。</strong>隣辺を対辺で割ります。",
          "<strong>余接比を読み取ります。</strong>対辺の何倍かとして表された隣辺です。",
          "<strong>結果を解釈します。</strong>1より大きければ隣辺が長く、1に等しければ2辺が等しく、1より小さければ対辺が長いことを意味します。",
          "<strong>「Reset」を使います。</strong>入力を消去して最初からやり直します。"
        ],
        "closingParagraphs": [
          "この計算機は斜辺も度数法の角度も求めません。正の辺の長さ2つが入力のすべてであり、結果は常に正の無次元の数です。"
        ],
        "tables": [],
        "figures": []
      },
      "cot-examples": {
        "h2": "余接の計算を段階的に学ぶ例",
        "blocks": [
          {
            "kind": "p",
            "text": "各例は同じ流れに従います。公式を書き、代入し、割り、解釈します。"
          },
          {
            "kind": "h3",
            "text": "例 1: 3-4-5 の直角三角形"
          },
          {
            "kind": "p",
            "text": "[[b=4\\text{ cm}]]、[[a=3\\text{ cm}]]、[[c=5\\text{ cm}]] が与えられた場合:"
          },
          {
            "kind": "p",
            "text": "[[\\cot(A)=4/3]]"
          },
          {
            "kind": "p",
            "text": "[[\\boxed{\\cot(A)\\approx1.3333}]]"
          },
          {
            "kind": "p",
            "text": "隣辺は対辺の約 1.3333 倍です。斜辺は計算にまったく関与しません。"
          },
          {
            "kind": "h3",
            "text": "例 2: 5-12-13 の直角三角形"
          },
          {
            "kind": "p",
            "text": "[[b=12\\text{ m}]]、[[a=5\\text{ m}]]、[[c=13\\text{ m}]] が与えられた場合:"
          },
          {
            "kind": "p",
            "text": "[[\\cot(A)=12/5]]"
          },
          {
            "kind": "p",
            "text": "[[\\boxed{\\cot(A)=2.4}]]"
          },
          {
            "kind": "p",
            "text": "隣辺が長い方の辺なので比は 1 を上回ります。隣辺が対辺の 2.4 倍であることを示し、三角形の大きさを示すものではありません。"
          },
          {
            "kind": "h3",
            "text": "例 3: 二等辺直角三角形"
          },
          {
            "kind": "p",
            "text": "[[b=6\\text{ cm}]]、[[a=6\\text{ cm}]]、[[c=6\\sqrt{2}\\text{ cm}]] が与えられた場合:"
          },
          {
            "kind": "p",
            "text": "[[\\cot(A)=6/6]]"
          },
          {
            "kind": "p",
            "text": "[[\\boxed{\\cot(A)=1}]]"
          },
          {
            "kind": "p",
            "text": "2辺が等しければ比はちょうど 1 になります。これは基準角が [[45^\\circ]] であることの特徴です。"
          },
          {
            "kind": "h3",
            "text": "例 4: 隣辺が短い三角形"
          },
          {
            "kind": "p",
            "text": "[[b=6\\text{ m}]] と [[a=8\\text{ m}]] が与えられた場合:"
          },
          {
            "kind": "p",
            "text": "[[\\cot(A)=6/8]]"
          },
          {
            "kind": "p",
            "text": "[[\\boxed{\\cot(A)=0.75}]]"
          },
          {
            "kind": "p",
            "text": "対辺の方が長い辺なので結果は 1 を下回ります。したがって基準角は [[45^\\circ]] より大きいです。"
          }
        ],
        "steps": [],
        "closingParagraphs": [],
        "tables": [],
        "figures": []
      },
      "cot-applications": {
        "h2": "余接比の実生活での使用例",
        "blocks": [
          {
            "kind": "p",
            "text": "余接は数学的な比であり、単位をもつ物理量ではありません。その実用的な価値は、水平方向の走りと垂直方向の上がりを比べること、三角形の幾何学を確かめること、隣辺÷対辺を明示的に求める公式を使うことにあります。各例は単純化された直角三角形を仮定しており、これらの比だけで安全性・強度・法令適合の問題が解決するわけではありません。"
          },
          {
            "kind": "h3",
            "text": "例 5: はしごの走り÷上がり比を求める"
          },
          {
            "kind": "p",
            "text": "はしごが垂直な壁にもたれかかっています。脚元は壁から 3 m 離れ、壁を 4 m の高さまで届いています。水平距離が隣辺 [[b=3\\text{ m}]]、垂直の届きが対辺 [[a=4\\text{ m}]] です。[[\\cot(A)=3/4]] なので、[[\\boxed{\\cot(A)=0.75}]] となります。水平距離は垂直高さの 75 パーセントです。この比ははしごの幾何学を表すもので、はしごが安全に設置されているかどうかを判断するものではありません。"
          },
          {
            "kind": "h3",
            "text": "例 6: 屋根の走り÷上がり比を計算する"
          },
          {
            "kind": "p",
            "text": "屋根の一部は水平の走りが 4 m、垂直の上がりが 3 m です。ここでは [[b=4\\text{ m}]]、[[a=3\\text{ m}]] です。[[\\cot(A)=4/3]] なので、[[\\boxed{\\cot(A)\\approx1.3333}]] となります。水平の走りは垂直の上がりの約 1.3333 倍です。この比は完全な構造評価や屋根の法令評価ではありません。"
          },
          {
            "kind": "h3",
            "text": "例 7: スロープの余接比を評価する"
          },
          {
            "kind": "p",
            "text": "単純化されたスロープは、水平の走りが 9 m、垂直の上がりが 0.75 m です。[[b=9\\text{ m}]]、[[a=0.75\\text{ m}]] のとき、[[\\cot(A)=9/0.75]] なので、[[\\boxed{\\cot(A)=12}]] となります。水平の走りは垂直の上がりの 12 倍で、緩やかな勾配の特徴です。この比だけではアクセシビリティや建築基準法への適合は判断できません。"
          },
          {
            "kind": "h3",
            "text": "例 8: 測量の測定"
          },
          {
            "kind": "p",
            "text": "単純化された測量三角形は、水平距離が 40 m、垂直の標高差が 30 m です。[[b=40\\text{ m}]]、[[a=30\\text{ m}]] のとき、[[\\cot(A)=40/30]] なので、[[\\boxed{\\cot(A)\\approx1.3333}]] となります。この比は水平の隔たりと垂直の差を直接比べます。実際の測量では、追加の測定、補正、機器の手順が必要になることがあります。"
          },
          {
            "kind": "h3",
            "text": "例 9: 電柱を支える支線"
          },
          {
            "kind": "p",
            "text": "支線が電柱と地面のアンカーをつないでいます。アンカーは電柱から水平に 12 m 離れ、取付点は地面から 5 m の高さにあります。[[b=12\\text{ m}]]、[[a=5\\text{ m}]] のとき、[[\\cot(A)=12/5]] なので、[[\\boxed{\\cot(A)=2.4}]] となります。水平距離は垂直の隔たりの 2.4 倍です。この比ではワイヤーの張力、アンカーの強度、構造の安全性は確定しません。"
          },
          {
            "kind": "h3",
            "text": "例 10: 階段の走り÷上がり比を理解する"
          },
          {
            "kind": "p",
            "text": "単純化された階段は、水平の走りが 4 m、垂直の上がりが 3 m です。[[b=4\\text{ m}]]、[[a=3\\text{ m}]] のとき、[[\\cot(A)=4/3]] なので、[[\\boxed{\\cot(A)\\approx1.3333}]] となります。水平の走りは垂直の上がりの約 1.3333 倍です。この例は理想化された対角線を表すもので、階段の寸法や法令適合を検証するものではありません。"
          },
          {
            "kind": "h3",
            "text": "例 11: クレーンのブームの水平・垂直成分"
          },
          {
            "kind": "p",
            "text": "単純化されたクレーンのブームは、水平投影 6 m、垂直の上がり 8 m の直角三角形を成します。[[b=6\\text{ m}]]、[[a=8\\text{ m}]] のとき、[[\\cot(A)=6/8]] なので、[[\\boxed{\\cot(A)=0.75}]] となります。水平投影は垂直成分の 75 パーセントです。この比では吊り上げ能力や作業の安全性は確定しません。"
          },
          {
            "kind": "h3",
            "text": "例 12: 航空機の直線飛行区間"
          },
          {
            "kind": "p",
            "text": "単純化された飛行区間では、航空機は水平変位 4 km、垂直上昇 3 km の直線経路を進みます。[[b=4\\text{ km}]]、[[a=3\\text{ km}]] のとき、[[\\cot(A)=4/3]] なので、[[\\boxed{\\cot(A)\\approx1.3333}]] となります。水平変位は垂直上昇の約 1.3333 倍です。これは理想化された幾何学モデルであり、完全な飛行航法計算ではありません。"
          },
          {
            "kind": "h3",
            "text": "例 13: 斜めの機械ブレース"
          },
          {
            "kind": "p",
            "text": "斜めのブレースは、水平のずれが 1.2 m、垂直の上がりが 1.6 m です。[[b=1.2\\text{ m}]]、[[a=1.6\\text{ m}]] のとき、[[\\cot(A)=1.2/1.6]] なので、[[\\boxed{\\cot(A)=0.75}]] となります。水平のずれは垂直の上がりの 75 パーセントです。この比ではブレースの強度や適性は判断できません。"
          },
          {
            "kind": "h3",
            "text": "例 14: ハイキングコースの直線区間"
          },
          {
            "kind": "p",
            "text": "ハイキングコースの単純化された直線区間は、水平変位が 80 m、垂直上昇が 60 m です。[[b=80\\text{ m}]]、[[a=60\\text{ m}]] のとき、[[\\cot(A)=80/60]] なので、[[\\boxed{\\cot(A)\\approx1.3333}]] となります。水平変位は標高上昇の約 1.3333 倍です。実際の登山道にはカーブや変化する勾配があります。"
          },
          {
            "kind": "h3",
            "text": "例 15: ひさしの支え"
          },
          {
            "kind": "p",
            "text": "斜めのひさし支えは、水平投影が 2.4 m、垂直の上がりが 1.8 m です。[[b=2.4\\text{ m}]]、[[a=1.8\\text{ m}]] のとき、[[\\cot(A)=2.4/1.8]] なので、[[\\boxed{\\cot(A)\\approx1.3333}]] となります。この比は垂直の上がりに対する水平投影を表します。この計算では構造的な適性は確定しません。"
          },
          {
            "kind": "h3",
            "text": "例 16: 高さの異なる2点間のケーブル"
          },
          {
            "kind": "p",
            "text": "まっすぐなケーブルが、垂直差 7 m の2点間を水平に 24 m 架かっています。[[b=24\\text{ m}]]、[[a=7\\text{ m}]] のとき、[[\\cot(A)=24/7]] なので、[[\\boxed{\\cot(A)\\approx3.4286}]] となります。水平の隔たりは垂直差の約 3.4286 倍です。このモデルは両端点間が直線であることを仮定しています。"
          },
          {
            "kind": "h3",
            "text": "実例の比較"
          },
          {
            "kind": "p",
            "text": "このパターンは全体に当てはまります。隣辺が対辺を大きく上回ると比は大きくなり、対辺が優勢だと比は小さくなります。"
          }
        ],
        "steps": [],
        "closingParagraphs": [],
        "tables": [
          {
            "headers": ["状況", "隣辺 b", "対辺 a", "余接の公式", "計算された比", "解釈"],
            "rows": [
              ["はしご", "3 m", "4 m", "3/4", "0.75", "走りは垂直の届きの 75%"],
              ["屋根", "4 m", "3 m", "4/3", "1.3333", "走りは上がりの 1.3333 倍"],
              ["スロープ", "9 m", "0.75 m", "9/0.75", "12", "走りは上がりの 12 倍"],
              ["測量", "40 m", "30 m", "40/30", "1.3333", "距離は標高差の 1.3333 倍"],
              ["支線", "12 m", "5 m", "12/5", "2.4", "距離は高さの 2.4 倍"],
              ["階段", "4 m", "3 m", "4/3", "1.3333", "走りは上がりの 1.3333 倍"],
              ["クレーンブーム", "6 m", "8 m", "6/8", "0.75", "投影は上がりの 75%"],
              ["飛行区間", "4 km", "3 km", "4/3", "1.3333", "変位は上昇の 1.3333 倍"],
              ["ブレース", "1.2 m", "1.6 m", "1.2/1.6", "0.75", "ずれは上がりの 75%"],
              ["ハイキングコース", "80 m", "60 m", "80/60", "1.3333", "変位は上昇の 1.3333 倍"],
              ["ひさし支え", "2.4 m", "1.8 m", "2.4/1.8", "1.3333", "投影は上がりの 1.3333 倍"],
              ["ケーブル", "24 m", "7 m", "24/7", "3.4286", "隔たりは高低差の 3.4286 倍"]
            ]
          }
        ],
        "figures": [
          {
            "alt": "4つのパネル: はしごの比 0.75、屋根 1.3333、スロープ 12、測量 1.3333、それぞれ名前つきの直角三角形",
            "caption": "4つの実用計算: はしご、屋根、スロープ、測量。それぞれ三角形、公式、比を示しています。"
          }
        ]
      },
      "cot-angle": {
        "h2": "余接と角の大きさの関係を理解する",
        "blocks": [
          {
            "kind": "p",
            "text": "余接は鋭角が大きくなるにつれて小さくなります。小さい角では隣辺が対辺よりずっと長いままなので比は大きくなります。角 [[A]] が [[90^\\circ]] に向かって開くにつれ、対辺が主役となり、比は 0 に向かって下がります。下の検証済み基準値はこのパターンを示しています。"
          },
          {
            "kind": "p",
            "text": "表の測定値は例示です。角を決めるのは絶対的な長さではなく比です。角が [[0^\\circ]] に近づくと比は際限なく大きくなり、角が [[90^\\circ]] に近づくと比は 0 に近づき、あらゆる有効な三角形で正の有限値を保ちます。"
          }
        ],
        "steps": [],
        "closingParagraphs": [
          "この計算機は角度の入力を受け付けません。これらの基準値は、結果を検証する際の目安やチェック値として使います。"
        ],
        "tables": [
          {
            "headers": ["角 A", "隣辺 b", "対辺 a", "余接比"],
            "rows": [
              ["30 deg", "sqrt(3)", "1", "約 1.7321"],
              ["45 deg", "1", "1", "1"],
              ["60 deg", "1", "sqrt(3)", "約 0.5774"],
              ["75 deg", "1", "約 3.7321", "約 0.2679"]
            ]
          }
        ],
        "figures": [
          {
            "alt": "30度、45度、60度の3つの三角形、余接値は 1.7321、1、0.5774。角が大きくなると余接は下がる",
            "caption": "角 A が大きくなると、対辺が隣辺に占める割合が増えるため、cot(A) は下がります。"
          }
        ]
      },
      "cot-recover": {
        "h2": "余接が既知のときに角を求める方法",
        "blocks": [
          {
            "kind": "p",
            "text": "余接比そのものは角度ではありません。比が既知で角が必要な場合、逆三角関数が橋渡しをします。直角三角形における正の余接比については、逆数を取って正接比を復元し、次に逆正接を適用します。"
          },
          {
            "kind": "p",
            "text": "[[[\\boxed{A=\\tan^{-1}\\left(\\frac{1}{\\cot(A)}\\right)}]]]"
          },
          {
            "kind": "p",
            "text": "[[\\tan(A)=a/b]] なので、等価に次のようにも書けます。"
          },
          {
            "kind": "p",
            "text": "[[[\\boxed{A=\\tan^{-1}\\left(\\frac{a}{b}\\right)}]]]"
          },
          {
            "kind": "h3",
            "text": "計算例"
          },
          {
            "kind": "p",
            "text": "[[\\cot(A)=4/3]] が与えられた場合、逆数は [[\\tan(A)=3/4]] なので、[[A=\\tan^{-1}(3/4)]]、[[\\boxed{A\\approx36.87^\\circ}]] です。逆正接キーを押す前に、関数電卓を度数モードに設定してください。これは別の角度計算です。このページの余接比計算機は辺の長さを受け取って比を返し、角度を返すことはありません。"
          }
        ],
        "steps": [],
        "closingParagraphs": [],
        "tables": [],
        "figures": []
      },
      "cot-mistakes": {
        "h2": "余接の計算でよくある間違い",
        "blocks": [],
        "steps": [
          "<strong>公式を [[b/a]] ではなく [[a/b]] に反転させてしまう。</strong>これは正接の計算です。修正: 隣辺を上に置きます。",
          "<strong>余接と正接を混同する。</strong>3-4-5 三角形で 0.75 と答えてしまう。修正: 正接は対辺÷隣辺、余接は反転させた分数です。",
          "<strong>余接と余弦を混同する。</strong>[[b/c]] を使ってしまう。修正: 余弦には斜辺が必要ですが、余接は斜辺に触れません。",
          "<strong>2辺の代わりに斜辺を使ってしまう。</strong>[[b/c]] や [[c/a]] を計算してしまう。修正: 分母は対辺 [[a]] であり、[[c]] ではありません。",
          "<strong>隣辺と対辺を取り違える。</strong>間違った辺を選んでしまう。修正: 角 [[A]] からたどります。接している辺が隣辺、向かい合う辺が対辺です。",
          "<strong>辺の呼び名が基準角に依存することを忘れる。</strong>角 [[B]] 用に描いた呼び名を使ってしまう。修正: 基準角が変わるたびに呼び名を付け直します。",
          "<strong>余接は 0 と 1 の間でなければならないと思い込む。</strong>2.4 や 12 を誤りとみなしてしまう。修正: それらの値は正しく、正弦と余弦だけが 1 を上限とします。",
          "<strong>余接が 1 だと三角形が無効だと思い込む。</strong>修正: [[\\cot(A)=1]] は単に2辺が等しく角が [[45^\\circ]] であることを意味し、まったく有効な三角形です。",
          "<strong>比にメートルやセンチメートルをつけて報告する。</strong>1.3333 m と書いてしまう。修正: 単位はすでに打ち消されているので、ただの数として報告します。",
          "<strong>ゼロや負の辺の長さを入力する。</strong>ゼロ除算や意味のない負の比になります。修正: 正の長さだけを使います。",
          "<strong>測定単位を混ぜる。</strong>センチメートルで割ったメートルは比を 100 倍ゆがめます。修正: まず両辺を1つの単位にそろえます。",
          "<strong>早すぎる段階で丸める。</strong>検証の前に [[4/3]] を 1.33 に丸めると、避けられる誤差が加わります。修正: 最終段階まで余分な桁を保持します。",
          "<strong>余接が度数法の角度だと思い込む。</strong>1.3333 を 1.3333 度と読み取ってしまう。修正: これは比であり、角度には逆正接が必要です。",
          "<strong>正接の逆数と逆正接を混同する。</strong>[[\\tan^{-1}(a/b)]] が必要なのに [[1/\\tan(A)]] と書いたり、その逆をしたりしてしまう。修正: 逆数は分数を反転させ、逆関数は角を取り戻します。",
          "<strong>余接の値が三角形の大きさを決めると思う。</strong>まったく異なる2つの三角形が [[\\cot(A)=1.3333]] を共有できます。修正: 比が決めるのは形であり、大きさではありません。"
        ],
        "closingParagraphs": [
          "<strong>間違い vs 正解。</strong>[[b=4]] と [[a=3]] が与えられた場合:",
          "間違い: [[3/4=0.75]]。これは正接比であり、余接ではありません。",
          "正解: [[\\cot(A)=4/3\\approx1.3333]]。確認: [[\\tan(A)=3/4=0.75]] であり、[[1/0.75\\approx1.3333]]。逆数の関係が確認できます。"
        ],
        "tables": [],
        "figures": []
      },
      "cot-verify": {
        "h2": "余接の結果が正しいか確認する方法",
        "blocks": [
          {
            "kind": "p",
            "text": "有効な非退化の直角三角形では辺が正である必要があります。[[a \\gt 0]]、[[b \\gt 0]] のため、余接の結果は正の有限数でなければなりません。"
          },
          {
            "kind": "p",
            "text": "[[[\\boxed{\\cot(A)=\\frac{b}{a} \\gt 0}]]]"
          },
          {
            "kind": "p",
            "text": "両方の測定値は互換性のある単位でなければなりません。1より大きい、1に等しい、1より小さい結果はどれも有効であり得ます。正弦や余弦と違い、余接は 1 を上限としません。"
          },
          {
            "kind": "h3",
            "text": "方法 1: 正接の逆数で確認する"
          },
          {
            "kind": "p",
            "text": "[[\\tan(A)=a/b]] を確かめ、次に [[\\cot(A)=1/\\tan(A)]] を確認します。[[a=3]]、[[b=4]] の場合、[[\\tan(A)=3/4=0.75]] なので、[[\\cot(A)=1/0.75\\approx1.3333]] です。2つの経路の不一致は、分数の反転や辺の呼び間違いのサインです。"
          },
          {
            "kind": "h3",
            "text": "方法 2: ピタゴラスの定理で確認する"
          },
          {
            "kind": "p",
            "text": "斜辺が既知または必要な場合は、[[c=\\sqrt{a^2+b^2}]] を計算します。[[a=3]]、[[b=4]] の場合、[[c=\\sqrt{9+16}=5]] であり、[[3^2+4^2=5^2]] です。これにより辺の長さが本物の直角三角形を成すことが確認できます。ここでの斜辺は検証用の値であり、主要な余接公式の一部ではありません。"
          },
          {
            "kind": "h3",
            "text": "方法 3: 角との関係で確認する"
          },
          {
            "kind": "p",
            "text": "既知の余接比については、[[A=\\tan^{-1}(a/b)]] で角を取り戻します。[[a=3]]、[[b=4]] の場合、[[A\\approx36.87^\\circ]] です。隣辺が対辺より長いので、角は [[45^\\circ]] を下回るはずです。そうでなければ、辺の呼び名が入れ替わっている可能性が高いです。丸めによる小さな差は生じ得ます。"
          }
        ],
        "steps": [],
        "closingParagraphs": [],
        "tables": [],
        "figures": []
      },
      "cot-vs": {
        "h2": "余接 vs 正接・正弦・余弦",
        "blocks": [
          {
            "kind": "p",
            "text": "各比は、同じ基準角と辺の呼び名を使い、異なる辺のペアを比べます。"
          }
        ],
        "steps": [],
        "closingParagraphs": [
          "余接と正接は逆数のペアです。[[\\cot(A)=1/\\tan(A)]]。[[\\tan(A)=0.75]] なら [[\\cot(A)\\approx1.3333]] です。公式が隣辺÷対辺を求める場合、走り÷上がりの関係を扱う場合、2辺だけが既知の場合には余接を使います。上がり÷走りには正接、斜辺に対する対辺には正弦、斜辺に対する隣辺には余弦を使います。",
          "隣の比については、<a href=\"/sine-ratio-calculator/\" class=\"text-primary hover:underline\">正弦比計算機</a>、<a href=\"/cosine-ratio-calculator/\" class=\"text-primary hover:underline\">余弦比計算機</a>、<a href=\"/tangent-ratio-calculator/\" class=\"text-primary hover:underline\">正接比計算機</a>、<a href=\"/secant-ratio-calculator/\" class=\"text-primary hover:underline\">正割比計算機</a>、<a href=\"/cosecant-ratio-calculator/\" class=\"text-primary hover:underline\">余割比計算機</a>をご覧ください。"
        ],
        "tables": [
          {
            "headers": ["比", "公式", "何を比べるか"],
            "rows": [
              ["正弦", "sin(A) = a/c", "対辺と斜辺"],
              ["余弦", "cos(A) = b/c", "隣辺と斜辺"],
              ["正接", "tan(A) = a/b", "対辺と隣辺"],
              ["余接", "cot(A) = b/a", "隣辺と対辺"],
              ["正割", "sec(A) = c/b", "斜辺と隣辺"],
              ["余割", "csc(A) = c/a", "斜辺と対辺"]
            ]
          }
        ],
        "figures": []
      },
      "cot-related": {
        "h2": "関連する三角比計算機を見る",
        "blocks": [],
        "steps": [],
        "closingParagraphs": [],
        "related": [
          { "name": "正弦比計算機" },
          { "name": "余弦比計算機" },
          { "name": "正接比計算機" },
          { "name": "正割比計算機" },
          { "name": "余割比計算機" },
          { "name": "直角三角形の角計算機" }
        ],
        "tables": [],
        "figures": []
      }
    },
    "faqs": [
      {
        "question": "直角三角形の余接の公式は?",
        "answer": "cot(A) = b / a です。角 A の隣辺を角 A の対辺で割ります。隣辺 4 cm、対辺 3 cm の場合、結果は 4/3、約 1.3333 です。"
      },
      {
        "question": "余接と正接の関係は?",
        "answer": "余接は正接の逆数です。cot(A) = 1 / tan(A)。tan(A) = 3/4 = 0.75 の場合、cot(A) = 4/3、約 1.3333 です。2つの比は同じ三角形を反対の視点から表しており、逆数の確認は結果を検証する最も速い方法です。"
      },
      {
        "question": "余接と余弦の違いは?",
        "answer": "余接は隣辺を対辺で割り (b/a)、2つの辺だけを使います。余弦は隣辺を斜辺で割り (b/c) ます。余接は正接の逆数であり、余弦の逆数ではありません。この区別は初級三角法で最も出題される間違いの1つです。"
      },
      {
        "question": "余接は 1 より大きくなれますか?",
        "answer": "はい。割り算に斜辺が登場しないため、余接には 0 から 1 の上限がありません。隣辺が対辺より長いと結果は 1 を上回ります。30 度の角では cot(30 deg) は約 1.7321 です。2.4、12、どんな正の有限数でもあり得ます。"
      },
      {
        "question": "余接の値が 1 であることの意味は?",
        "answer": "隣辺と対辺の長さが等しく、三角形は基準角において二等辺であり、角 A は 45 度です。隣辺 6 cm、対辺 6 cm の場合、cot(A) = 6/6 = 1 です。"
      },
      {
        "question": "余接は 1 より小さくなれますか?",
        "answer": "はい、対辺が隣辺より長いときはいつでもです。隣辺 6 m、対辺 8 m の場合、cot(A) = 6/8 = 0.75 であり、基準角は 45 度より大きくなります。"
      },
      {
        "question": "余接に測定単位はありますか?",
        "answer": "いいえ。両方の入力は同じ単位で測った長さなので、単位は打ち消されます。4 m / 3 m = 4/3 であり、400 cm / 300 cm = 4/3 と同じです。余接はただの無次元の数として報告し、度、メートル、フィートをつけないでください。"
      },
      {
        "question": "辺の長さから余接を計算する方法は?",
        "answer": "隣辺 b と対辺 a を同じ単位で測り、両方が正であることを確認してから割ります。cot(A) = b / a です。このページでは、最初の欄に隣辺、2番目の欄に対辺を入力し、対応する単位を選んで「計算する cot(A)」をクリックします。"
      },
      {
        "question": "余接比から角を求める方法は?",
        "answer": "逆数を取って正接比を得てから、逆正接を適用します。A = tan^-1(a / b) です。cot(A) = 4/3 の場合、正接比は 3/4 なので、A = tan^-1(0.75)、約 36.87 度です。まず関数電卓を度数モードに設定してください。このページの計算機は比を返し、角度は返しません。"
      },
      {
        "question": "余接計算機に斜辺は必要ですか?",
        "answer": "いいえ。基本的な余接比は垂直に交わる2辺だけを使うので、斜辺が公式に登場することはありません。正弦・余弦・正割・余割を使った後続の作業や、ピタゴラスの定理で三角形を検証するときにのみ意味を持ちます。"
      },
      {
        "question": "走りと上がりで表した余接の意味は?",
        "answer": "角 A を水平から測る場合、cot(A) は水平方向の走りを垂直方向の上がりで割ったものです。余接 0.75 は、水平の走りが垂直の上がりの 75 パーセントであることを意味します。余接 12 は、走りが上がりの 12 倍であることを意味します。正接は同じ考えを反転させたもの、上がり÷走りです。"
      },
      {
        "question": "正接ではなく余接を使うべきときは?",
        "answer": "公式や手順が明示的に隣辺÷対辺を求める場合、水平の走りと垂直の上がりを比べる場合、既知の辺が2辺だけの場合に余接を使います。既知の関係が上がり÷走り、つまり対辺÷隣辺の場合は、正接が直接の選択肢です。"
      }
    ],
    "faqHeading": "よくある質問",
    "relatedHeading": "関連する三角比計算機を見る",
    "conclusion": {
      "h2": "自信をもって余接比を使いましょう",
      "paragraphs": [
        "余接は正接を反転させた形です。隣辺を対辺で割れば、三角形の走り÷上がりの形が表せます。公式 [[\\cot(A)=b/a]] には2つの測定値だけで十分で、答えは常に正の無次元の数です。長い方の辺がどちらかによって、1 を上回ることも、等しくなることも、下回ることもあります。角そのものが必要な場合は、[[A=\\tan^{-1}(a/b)]] で取り戻せます。はしご、屋根、スロープ、教科書の 3-4-5 のどれでも、方法は変わりません。隣辺を特定し、対辺を特定し、割り、正接の逆数で検証します。"
      ]
    }
  },
  "ko": {
    "tocHeading": "이 가이드의 내용",
    "tocItems": {
      "cot-intro": "코탄젠트 비율 계산기란?",
      "cot-triangle": "인접 변과 대변 이해하기",
      "cot-whatis": "코탄젠트 비율 이해하기",
      "cot-formula": "코탄젠트 공식의 원리",
      "cot-howto": "코탄젠트 비율 계산기 사용법",
      "cot-examples": "코탄젠트 계산 단계별 예제",
      "cot-applications": "코탄젠트 비율의 실생활 예제",
      "cot-angle": "코탄젠트와 각 크기의 관계 이해하기",
      "cot-recover": "코탄젠트를 알 때 각 구하기",
      "cot-mistakes": "코탄젠트 계산에서 흔한 실수",
      "cot-verify": "코탄젠트 결과가 맞는지 확인하는 방법",
      "cot-vs": "코탄젠트 vs 탄젠트, 사인, 코사인",
      "cot-related": "관련 삼각비 계산기 살펴보기",
      "cot-faq": "자주 묻는 질문"
    },
    "sections": {
      "cot-intro": {
        "h2": "코탄젠트 비율 계산기란?",
        "blocks": [
          {
            "kind": "p",
            "text": "코탄젠트 비율 계산기는 하나의 질문에 답합니다. 직각삼각형의 예각에 대해, 각에 닿은 변이 각과 마주한 변에 비해 어떤지 묻는 질문입니다. 두 변의 길이를 입력하면 이 도구는 인접 변을 대변으로 나누어 [[\\cot(A)=b/a]] 를 돌려줍니다. 인접 변이 4 cm, 대변이 3 cm이면 계산은 [[4/3\\approx1.3333]] 입니다. 인접 변은 대변 길이의 약 1.3333 배입니다. 이 소수가 답의 전부입니다. 나눗셈에서 센티미터가 소거되므로 단위가 없고, 도 단위의 각도도 아닙니다. 빗변은 이 계산에 절대 등장하지 않습니다. 서로 수직인 두 변이면 충분합니다. 코탄젠트는 탄젠트의 역수이기도 하며, 많은 교과서가 [[\\tan(A)]] 를 뒤집은 형태로 소개하는 이유가 여기에 있습니다."
          }
        ],
        "steps": [],
        "closingParagraphs": [],
        "tables": [],
        "figures": []
      },
      "cot-triangle": {
        "h2": "인접 변과 대변 이해하기",
        "blocks": [
          {
            "kind": "h3",
            "text": "직각삼각형이란?"
          },
          {
            "kind": "p",
            "text": "직각삼각형은 정확히 [[90^\\circ]] 인 각을 하나 가집니다. 벽이 수평한 바닥과 만나는 것처럼, 서로 수직인 두 직선 사이의 각입니다. 빗변은 그 직각의 맞은편에 있으며 항상 가장 긴 변입니다. 나머지 두 각은 남은 90도를 나누어 가지므로 둘 다 예각입니다. 두 변은 직각에서 서로 수직으로 만나며, 코탄젠트가 설명하는 것은 바로 이 두 변의 관계입니다."
          },
          {
            "kind": "h3",
            "text": "인접 변이란?"
          },
          {
            "kind": "p",
            "text": "인접 변 [[b]] 는 빗변이 아니면서 기준각 [[A]] 에 닿는 변입니다. 실제 문제에서는 수평 주행 거리 역할을 하는 경우가 많습니다. 사다리 밑동에서 지면까지의 거리, 지붕의 수평 투영, 힘의 수평 성분 등이 그 예입니다. 코탄젠트 공식에서는 분자에 들어갑니다. 어느 변이 인접 변이 되는지는 선택한 기준각에 따라 달라지므로, 각 [[A]] 에서 각 [[B]] 로 바꾸면 인접 변과 대변의 이름이 서로 바뀝니다."
          },
          {
            "kind": "h3",
            "text": "대변이란?"
          },
          {
            "kind": "p",
            "text": "대변 [[a]] 는 각 [[A]] 의 바로 맞은편에 있으며 그 꼭짓점에 절대 닿지 않습니다. 실제 문제에서는 수직 상승 역할을 하는 경우가 많습니다. 벽의 높이, 표고 차이, 측정값의 수직 성분 등이 그 예입니다. 코탄젠트 공식에서는 분모에 들어갑니다. 즉, 크게 만들면 비율이 작아지고, 작게 만들면 비율이 커집니다."
          },
          {
            "kind": "h3",
            "text": "빗변이란?"
          },
          {
            "kind": "p",
            "text": "빗변 [[c]] 는 직각의 맞은편 변입니다. 어떤 도면에서든 [[90^\\circ]] 모서리를 표시하는 작은 정사각형의 맞은편에 있으며, 어느 변보다도 엄격히 깁니다. 기본 코탄젠트 비율에는 아무 역할도 하지 않으므로 이 계산기가 빗변을 묻지 않습니다. 사인, 코사인, 시컨트, 코시컨트가 등장하거나, 두 변이 진짜 직각삼각형을 이루는지 피타고라스 정리로 확인할 때 빗변이 의미를 가집니다."
          }
        ],
        "steps": [],
        "closingParagraphs": [],
        "tables": [],
        "figures": [
          {
            "alt": "왼쪽 아래에 각 A가 있는 직각삼각형, 금색 인접 변 b, 녹색 대변 a, cot(A)=b/a",
            "caption": "각 A는 왼쪽 아래에 있습니다. 코탄젠트는 금색 인접 변 b와 녹색 대변 a를 사용하며, 빗변 c는 사용하지 않습니다."
          }
        ]
      },
      "cot-whatis": {
        "h2": "코탄젠트 비율 이해하기",
        "blocks": [
          {
            "kind": "p",
            "text": "코탄젠트는 기준각에 닿은 길이와 기준각과 마주한 길이를 비교합니다."
          },
          {
            "kind": "p",
            "text": "[[[\\cot(A)=\\frac{b}{a}]]]"
          },
          {
            "kind": "p",
            "text": "여기서 [[\\cot(A)]] 는 각 [[A]] 의 코탄젠트, [[b]] 는 인접 변, [[a]] 는 대변입니다. 즉, 대변이 인접 변 안에 몇 번 들어가는지를 나타냅니다."
          },
          {
            "kind": "h3",
            "text": "탄젠트의 역수로서의 코탄젠트"
          },
          {
            "kind": "p",
            "text": "탄젠트는 대변을 인접 변으로 나누며, [[\\tan(A)=a/b]] 입니다. 역수를 취하면 이 분수가 뒤집혀 [[1/\\tan(A)=b/a]] 가 되는데, 이것이 바로 코탄젠트 공식입니다."
          },
          {
            "kind": "p",
            "text": "[[[\\boxed{\\cot(A)=\\frac{1}{\\tan(A)}=\\frac{b}{a}}]]]]"
          },
          {
            "kind": "p",
            "text": "[[\\tan(A)=3/4=0.75]] 이면 역수는 [[\\cot(A)=1/0.75=4/3\\approx1.3333]] 입니다. 같은 삼각형을 반대 방향에서 본 설명입니다. 이 구분이 중요한 이유는 [[\\tan^{-1}]] 가 역탄젠트 함수를 나타내는 반면, [[1/\\tan(A)]] 는 탄젠트의 역수이기 때문입니다. 서로 관련은 있지만 의미도 답도 다릅니다."
          },
          {
            "kind": "h3",
            "text": "수평 거리 ÷ 수직 상승으로 이해하는 코탄젠트"
          },
          {
            "kind": "p",
            "text": "각 [[A]] 를 수평선에서 잴 때 인접 변은 수평 주행 거리, 대변은 수직 상승을 나타낼 수 있습니다. 그러면 [[\\cot(A)=\\frac{\\text{Horizontal run}}{\\text{Vertical rise}}]] 입니다. 탄젠트는 같은 관계를 뒤집은 것, 즉 상승 ÷ 주행 거리입니다. 이 주행 거리 대 상승의 읽기는 코탄젠트를 \"얼마나 많은 수평 거리로 얼마나 많은 높이를 얻는가\" 같은 질문에 대한 자연스러운 비율로 만들며, 선택한 기준각과 상황의 기하학에 따라 달라집니다."
          },
          {
            "kind": "h3",
            "text": "코탄젠트 값의 의미"
          },
          {
            "kind": "p",
            "text": "코탄젠트가 1보다 크다는 것은 인접 변이 대변보다 길고 기준각이 [[45^\\circ]] 보다 작다는 뜻입니다. 코탄젠트가 1과 같다는 것은 두 변이 같고 각 [[A]] 가 정확히 [[45^\\circ]] 라는 뜻입니다. 코탄젠트가 0과 1 사이라는 것은 대변이 인접 변보다 길고 기준각이 [[45^\\circ]] 와 [[90^\\circ]] 사이에 있다는 뜻입니다."
          },
          {
            "kind": "h3",
            "text": "코탄젠트가 1보다 클 수 있는 이유"
          },
          {
            "kind": "p",
            "text": "사인이나 코사인과 달리 코탄젠트에는 0부터 1까지의 상한이 없습니다. 나눗셈에 빗변이 절대 등장하지 않기 때문입니다. [[\\cot(A)=8/2=4]] 인 경우 인접 변은 단순히 대변의 네 배이며, 기준각은 비교적 작은 예각입니다. 양의 유한값이라면 무엇이든 가능합니다."
          },
          {
            "kind": "h3",
            "text": "코탄젠트가 1보다 작을 수 있는 이유"
          },
          {
            "kind": "p",
            "text": "[[\\cot(A)=3/6=0.5]] 인 경우 인접 변은 대변의 절반이므로 기준각은 비교적 큰 예각입니다. 비율이 1 아래로 떨어져도 아무 문제가 없습니다. 키가 크고 좁은 삼각형의 특징일 뿐입니다."
          },
          {
            "kind": "h3",
            "text": "코탄젠트가 무차원 비율인 이유"
          },
          {
            "kind": "p",
            "text": "길이를 길이로 나누면 단위가 소거됩니다. [[4\\text{ m}/3\\text{ m}=4/3]] 이며, [[400\\text{ cm}/300\\text{ cm}=4/3]] 도 마찬가지입니다. 이 수는 삼각형의 모양을 설명하는 것이지 물리 단위가 붙은 측정값이 아니므로, 결과는 그냥 숫자로 쓰고 미터, 센티미터, 도를 붙이지 마십시오."
          }
        ],
        "steps": [],
        "closingParagraphs": [],
        "tables": [],
        "figures": [
          {
            "alt": "세 단계: 3-4-5 삼각형에 이름 붙이기, 탄젠트 tan(A)=3/4=0.75, 코탄젠트 cot(A)=4/3=1.3333, 역수 관계",
            "caption": "세 단계: 3-4-5 삼각형에 이름을 붙이고, 탄젠트 tan(A) = 3/4 를 계산한 뒤, 분수를 뒤집어 cot(A) = 4/3 를 얻습니다."
          }
        ]
      },
      "cot-formula": {
        "h2": "코탄젠트 공식의 원리",
        "blocks": [
          {
            "kind": "p",
            "text": "정의에서 시작합니다. 코탄젠트는 인접 변을 대변으로 나눈 것입니다. 이 페이지의 표기법에서는 다음과 같습니다."
          },
          {
            "kind": "p",
            "text": "[[[\\boxed{\\cot(A)=\\frac{b}{a}}]]]]"
          },
          {
            "kind": "p",
            "text": "인접 변이 분자인 이유는 비교받는 쪽의 길이기 때문이고, 대변이 분모인 이유는 기준이 되는 길이, 즉 \"이것이 저것 안에 몇 개 들어가는가\"의 단위이기 때문입니다. 둘을 바꾸면 대신 탄젠트 비율이 됩니다."
          },
          {
            "kind": "h3",
            "text": "완전한 풀이 예제: 3-4-5 직각삼각형"
          },
          {
            "kind": "p",
            "text": "[[b=4\\text{ cm}]], [[a=3\\text{ cm}]], [[c=5\\text{ cm}]] 이 주어진 경우:"
          },
          {
            "kind": "p",
            "text": "1단계: 공식을 씁니다. [[\\cot(A)=b/a]]"
          },
          {
            "kind": "p",
            "text": "2단계: 측정값을 대입합니다. [[\\cot(A)=4/3]]"
          },
          {
            "kind": "p",
            "text": "3단계: 나눕니다. [[\\boxed{\\cot(A)\\approx1.3333}]]"
          },
          {
            "kind": "p",
            "text": "4단계: 답을 해석합니다. 인접 변은 대변의 약 1.3333 배입니다."
          },
          {
            "kind": "p",
            "text": "5단계: 탄젠트 비율로 확인합니다. [[\\tan(A)=3/4=0.75]] 이고, [[1/0.75\\approx1.3333]] 입니다. 두 경로 모두 같은 수에 도달합니다. 역수 비율은 바로 이렇게 동작합니다."
          }
        ],
        "steps": [],
        "closingParagraphs": [],
        "tables": [],
        "figures": []
      },
      "cot-howto": {
        "h2": "코탄젠트 비율 계산기 사용법",
        "blocks": [
          {
            "kind": "p",
            "text": "아래 단계는 이 페이지의 실제 인터페이스와 일치합니다."
          }
        ],
        "steps": [
          "<strong>기준각 [[A]] 를 확인합니다.</strong>인접 변과 대변은 이 각을 기준으로 정의되기 때문입니다.",
          "<strong>인접 변 [[b]] 를 찾습니다.</strong>각 [[A]] 에 닿고 빗변이 아닌 변입니다.",
          "<strong>대변 [[a]] 를 찾습니다.</strong>각 [[A]] 의 바로 맞은편에 있는 변으로, 그 꼭짓점에 절대 닿지 않습니다.",
          "<strong>두 변의 길이를 측정하거나 구합니다.</strong>같은 단위로 맞춥니다.",
          "<strong>인접 변의 길이를 입력합니다.</strong>첫 번째 입력 칸입니다.",
          "<strong>대변의 길이를 입력합니다.</strong>두 번째 입력 칸입니다.",
          "<strong>단위 선택기에서 맞는 단위를 고릅니다.</strong>나눗셈에서 동등한 것끼리 비교되도록 합니다.",
          "<strong>두 측정값이 모두 양수인지 확인합니다.</strong>0이나 음수 길이로는 실제 삼각형을 만들 수 없습니다.",
          "<strong>계산하기 cot(A)를 클릭합니다.</strong>인접 변을 대변으로 나눕니다.",
          "<strong>코탄젠트 비율을 읽습니다.</strong>대변의 몇 배인지로 나타낸 인접 변입니다.",
          "<strong>결과를 해석합니다.</strong>1보다 크면 인접 변이 길고, 1과 같으면 두 변이 같으며, 1보다 작으면 대변이 길다는 뜻입니다.",
          "<strong>Reset을 사용합니다.</strong>입력을 지우고 처음부터 다시 시작합니다."
        ],
        "closingParagraphs": [
          "이 계산기는 빗변도 도 단위의 각도도 묻지 않습니다. 양수인 변 길이 두 개가 입력의 전부이며, 결과는 항상 양의 무차원 수입니다."
        ],
        "tables": [],
        "figures": []
      },
      "cot-examples": {
        "h2": "코탄젠트 계산 단계별 예제",
        "blocks": [
          {
            "kind": "p",
            "text": "각 예제는 같은 흐름을 따릅니다. 공식을 쓰고, 대입하고, 나누고, 해석합니다."
          },
          {
            "kind": "h3",
            "text": "예제 1: 3-4-5 직각삼각형"
          },
          {
            "kind": "p",
            "text": "[[b=4\\text{ cm}]], [[a=3\\text{ cm}]], [[c=5\\text{ cm}]] 이 주어진 경우:"
          },
          {
            "kind": "p",
            "text": "[[\\cot(A)=4/3]]"
          },
          {
            "kind": "p",
            "text": "[[\\boxed{\\cot(A)\\approx1.3333}]]"
          },
          {
            "kind": "p",
            "text": "인접 변은 대변의 약 1.3333 배입니다. 빗변은 계산에 전혀 관여하지 않습니다."
          },
          {
            "kind": "h3",
            "text": "예제 2: 5-12-13 직각삼각형"
          },
          {
            "kind": "p",
            "text": "[[b=12\\text{ m}]], [[a=5\\text{ m}]], [[c=13\\text{ m}]] 이 주어진 경우:"
          },
          {
            "kind": "p",
            "text": "[[\\cot(A)=12/5]]"
          },
          {
            "kind": "p",
            "text": "[[\\boxed{\\cot(A)=2.4}]]"
          },
          {
            "kind": "p",
            "text": "인접 변이 긴 쪽의 변이므로 비율은 1을 넘습니다. 인접 변이 대변의 2.4 배임을 알려주며, 삼각형의 크기를 알려주는 것은 아닙니다."
          },
          {
            "kind": "h3",
            "text": "예제 3: 이등변 직각삼각형"
          },
          {
            "kind": "p",
            "text": "[[b=6\\text{ cm}]], [[a=6\\text{ cm}]], [[c=6\\sqrt{2}\\text{ cm}]] 이 주어진 경우:"
          },
          {
            "kind": "p",
            "text": "[[\\cot(A)=6/6]]"
          },
          {
            "kind": "p",
            "text": "[[\\boxed{\\cot(A)=1}]]"
          },
          {
            "kind": "p",
            "text": "두 변이 같으면 비율은 정확히 1이 됩니다. 이는 기준각이 [[45^\\circ]] 임을 보여주는 특징입니다."
          },
          {
            "kind": "h3",
            "text": "예제 4: 인접 변이 짧은 삼각형"
          },
          {
            "kind": "p",
            "text": "[[b=6\\text{ m}]] 와 [[a=8\\text{ m}]] 이 주어진 경우:"
          },
          {
            "kind": "p",
            "text": "[[\\cot(A)=6/8]]"
          },
          {
            "kind": "p",
            "text": "[[\\boxed{\\cot(A)=0.75}]]"
          },
          {
            "kind": "p",
            "text": "대변이 더 긴 변이므로 결과는 1보다 작습니다. 따라서 기준각은 [[45^\\circ]] 보다 큽니다."
          }
        ],
        "steps": [],
        "closingParagraphs": [],
        "tables": [],
        "figures": []
      },
      "cot-applications": {
        "h2": "코탄젠트 비율의 실생활 예제",
        "blocks": [
          {
            "kind": "p",
            "text": "코탄젠트는 수학적 비율이지 단위가 있는 물리량이 아닙니다. 그 실용적 가치는 수평 주행 거리와 수직 상승을 비교하고, 삼각형의 기하학을 확인하고, 인접 변 ÷ 대변을 명시적으로 요구하는 공식을 사용하는 데 있습니다. 각 예제는 단순화된 직각삼각형을 가정하며, 이 비율들만으로 안전성, 강도, 법규 준수 문제가 해결되는 것은 아닙니다."
          },
          {
            "kind": "h3",
            "text": "예제 5: 사다리의 주행 거리 대 상승 비율 구하기"
          },
          {
            "kind": "p",
            "text": "사다리가 수직 벽에 기대어 있습니다. 밑동은 벽에서 3 m 떨어져 있고, 벽을 따라 4 m 높이까지 닿습니다. 수평 거리가 인접 변 [[b=3\\text{ m}]], 수직 도달 높이가 대변 [[a=4\\text{ m}]] 입니다. [[\\cot(A)=3/4]] 이므로 [[\\boxed{\\cot(A)=0.75}]] 가 됩니다. 수평 거리는 수직 높이의 75 퍼센트입니다. 이 비율은 사다리의 기하학을 설명하는 것이지, 사다리가 안전하게 설치되었는지를 판단하는 것은 아닙니다."
          },
          {
            "kind": "h3",
            "text": "예제 6: 지붕의 주행 거리 대 상승 비율 계산하기"
          },
          {
            "kind": "p",
            "text": "지붕의 한 구간은 수평 주행 거리가 4 m, 수직 상승이 3 m입니다. 여기서는 [[b=4\\text{ m}]], [[a=3\\text{ m}]] 입니다. [[\\cot(A)=4/3]] 이므로 [[\\boxed{\\cot(A)\\approx1.3333}]] 가 됩니다. 수평 주행 거리는 수직 상승의 약 1.3333 배입니다. 이 비율은 완전한 구조 평가나 지붕 법규 평가가 아닙니다."
          },
          {
            "kind": "h3",
            "text": "예제 7: 경사로의 코탄젠트 비율 평가하기"
          },
          {
            "kind": "p",
            "text": "단순화된 경사로는 수평 주행 거리가 9 m, 수직 상승이 0.75 m입니다. [[b=9\\text{ m}]], [[a=0.75\\text{ m}]] 일 때 [[\\cot(A)=9/0.75]] 이므로 [[\\boxed{\\cot(A)=12}]] 가 됩니다. 수평 주행 거리는 수직 상승의 12 배로, 완만한 경사의 특징입니다. 이 비율만으로는 접근성이나 건축 법규 준수를 판단할 수 없습니다."
          },
          {
            "kind": "h3",
            "text": "예제 8: 측량 측정"
          },
          {
            "kind": "p",
            "text": "단순화된 측량 삼각형은 수평 거리가 40 m, 수직 표고 차이가 30 m입니다. [[b=40\\text{ m}]], [[a=30\\text{ m}]] 일 때 [[\\cot(A)=40/30]] 이므로 [[\\boxed{\\cot(A)\\approx1.3333}]] 가 됩니다. 이 비율은 수평 간격과 수직 차이를 직접 비교합니다. 실제 측량에서는 추가 측정, 보정, 기기 절차가 필요할 수 있습니다."
          },
          {
            "kind": "h3",
            "text": "예제 9: 전봇대를 지탱하는 지선"
          },
          {
            "kind": "p",
            "text": "지선이 전봇대와 지면 앵커를 연결합니다. 앵커는 전봇대에서 수평으로 12 m 떨어져 있고, 부착점은 지면에서 5 m 높이에 있습니다. [[b=12\\text{ m}]], [[a=5\\text{ m}]] 일 때 [[\\cot(A)=12/5]] 이므로 [[\\boxed{\\cot(A)=2.4}]] 가 됩니다. 수평 거리는 수직 간격의 2.4 배입니다. 이 비율로는 와이어의 장력, 앵커의 강도, 구조 안전성이 확정되지 않습니다."
          },
          {
            "kind": "h3",
            "text": "예제 10: 계단의 주행 거리 대 상승 비율 이해하기"
          },
          {
            "kind": "p",
            "text": "단순화된 계단은 수평 주행 거리가 4 m, 수직 상승이 3 m입니다. [[b=4\\text{ m}]], [[a=3\\text{ m}]] 일 때 [[\\cot(A)=4/3]] 이므로 [[\\boxed{\\cot(A)\\approx1.3333}]] 가 됩니다. 수평 주행 거리는 수직 상승의 약 1.3333 배입니다. 이 예제는 이상화된 대각선을 설명하는 것이며, 계단 치수나 법규 준수를 검증하는 것은 아닙니다."
          },
          {
            "kind": "h3",
            "text": "예제 11: 크레인 붐의 수평 및 수직 성분"
          },
          {
            "kind": "p",
            "text": "단순화된 크레인 붐은 수평 투영 6 m, 수직 상승 8 m의 직각삼각형을 이룹니다. [[b=6\\text{ m}]], [[a=8\\text{ m}]] 일 때 [[\\cot(A)=6/8]] 이므로 [[\\boxed{\\cot(A)=0.75}]] 가 됩니다. 수평 투영은 수직 성분의 75 퍼센트입니다. 이 비율로는 인양 능력이나 작업 안전성이 확정되지 않습니다."
          },
          {
            "kind": "h3",
            "text": "예제 12: 항공기의 직선 비행 구간"
          },
          {
            "kind": "p",
            "text": "단순화된 비행 구간에서 항공기는 수평 변위 4 km, 수직 상승 3 km의 직선 경로를 이동합니다. [[b=4\\text{ km}]], [[a=3\\text{ km}]] 일 때 [[\\cot(A)=4/3]] 이므로 [[\\boxed{\\cot(A)\\approx1.3333}]] 가 됩니다. 수평 변위는 수직 상승의 약 1.3333 배입니다. 이는 이상화된 기하학 모델이지 완전한 비행 항법 계산이 아닙니다."
          },
          {
            "kind": "h3",
            "text": "예제 13: 대각선 기계 브레이스"
          },
          {
            "kind": "p",
            "text": "대각선 브레이스는 수평 변위가 1.2 m, 수직 상승이 1.6 m입니다. [[b=1.2\\text{ m}]], [[a=1.6\\text{ m}]] 일 때 [[\\cot(A)=1.2/1.6]] 이므로 [[\\boxed{\\cot(A)=0.75}]] 가 됩니다. 수평 변위는 수직 상승의 75 퍼센트입니다. 이 비율로는 브레이스의 강도나 적합성을 판단할 수 없습니다."
          },
          {
            "kind": "h3",
            "text": "예제 14: 하이킹 코스의 직선 구간"
          },
          {
            "kind": "p",
            "text": "하이킹 코스의 단순화된 직선 구간은 수평 변위가 80 m, 수직 상승이 60 m입니다. [[b=80\\text{ m}]], [[a=60\\text{ m}]] 일 때 [[\\cot(A)=80/60]] 이므로 [[\\boxed{\\cot(A)\\approx1.3333}]] 가 됩니다. 수평 변위는 표고 상승의 약 1.3333 배입니다. 실제 등산로에는 커브와 변하는 경사가 있습니다."
          },
          {
            "kind": "h3",
            "text": "예제 15: 차양 지지대"
          },
          {
            "kind": "p",
            "text": "대각선 차양 지지대는 수평 투영이 2.4 m, 수직 상승이 1.8 m입니다. [[b=2.4\\text{ m}]], [[a=1.8\\text{ m}]] 일 때 [[\\cot(A)=2.4/1.8]] 이므로 [[\\boxed{\\cot(A)\\approx1.3333}]] 가 됩니다. 이 비율은 수직 상승에 대한 수평 투영을 설명합니다. 이 계산으로는 구조적 적합성이 확정되지 않습니다."
          },
          {
            "kind": "h3",
            "text": "예제 16: 높이가 다른 두 점 사이의 케이블"
          },
          {
            "kind": "p",
            "text": "곧은 케이블이 수직 차이 7 m인 두 점 사이를 수평으로 24 m 가로지릅니다. [[b=24\\text{ m}]], [[a=7\\text{ m}]] 일 때 [[\\cot(A)=24/7]] 이므로 [[\\boxed{\\cot(A)\\approx3.4286}]] 가 됩니다. 수평 간격은 수직 차이의 약 3.4286 배입니다. 이 모델은 양 끝점 사이가 직선임을 가정합니다."
          },
          {
            "kind": "h3",
            "text": "실제 예제 비교"
          },
          {
            "kind": "p",
            "text": "이 패턴은 전체에 적용됩니다. 인접 변이 대변을 크게 웃돌면 비율이 커지고, 대변이 우세하면 비율이 작아집니다."
          }
        ],
        "steps": [],
        "closingParagraphs": [],
        "tables": [
          {
            "headers": ["상황", "인접 변 b", "대변 a", "코탄젠트 공식", "계산된 비율", "해석"],
            "rows": [
              ["사다리", "3 m", "4 m", "3/4", "0.75", "주행 거리는 수직 도달 높이의 75%"],
              ["지붕", "4 m", "3 m", "4/3", "1.3333", "주행 거리는 상승의 1.3333 배"],
              ["경사로", "9 m", "0.75 m", "9/0.75", "12", "주행 거리는 상승의 12 배"],
              ["측량", "40 m", "30 m", "40/30", "1.3333", "거리는 표고 차이의 1.3333 배"],
              ["지선", "12 m", "5 m", "12/5", "2.4", "거리는 높이의 2.4 배"],
              ["계단", "4 m", "3 m", "4/3", "1.3333", "주행 거리는 상승의 1.3333 배"],
              ["크레인 붐", "6 m", "8 m", "6/8", "0.75", "투영은 상승의 75%"],
              ["비행 구간", "4 km", "3 km", "4/3", "1.3333", "변위는 상승의 1.3333 배"],
              ["브레이스", "1.2 m", "1.6 m", "1.2/1.6", "0.75", "변위는 상승의 75%"],
              ["하이킹 코스", "80 m", "60 m", "80/60", "1.3333", "변위는 상승의 1.3333 배"],
              ["차양 지지대", "2.4 m", "1.8 m", "2.4/1.8", "1.3333", "투영은 상승의 1.3333 배"],
              ["케이블", "24 m", "7 m", "24/7", "3.4286", "간격은 높이 차이의 3.4286 배"]
            ]
          }
        ],
        "figures": [
          {
            "alt": "네 패널: 사다리 비율 0.75, 지붕 1.3333, 경사로 12, 측량 1.3333, 각각 이름이 붙은 직각삼각형",
            "caption": "네 가지 실제 계산: 사다리, 지붕, 경사로, 측량. 각각 삼각형, 공식, 비율을 보여줍니다."
          }
        ]
      },
      "cot-angle": {
        "h2": "코탄젠트와 각 크기의 관계 이해하기",
        "blocks": [
          {
            "kind": "p",
            "text": "코탄젠트는 예각이 커질수록 작아집니다. 작은 각에서는 인접 변이 대변보다 훨씬 길게 유지되므로 비율이 큽니다. 각 [[A]] 가 [[90^\\circ]] 를 향해 벌어질수록 대변이 주도권을 잡고 비율은 0을 향해 떨어집니다. 아래의 검증된 기준값이 이 패턴을 보여줍니다."
          },
          {
            "kind": "p",
            "text": "표의 측정값은 예시입니다. 각을 결정하는 것은 절대 길이가 아니라 비율입니다. 각이 [[0^\\circ]] 에 가까워지면 비율은 한없이 커지고, 각이 [[90^\\circ]] 에 가까워지면 비율은 0에 가까워지며, 모든 유효한 삼각형에서 양의 유한값을 유지합니다."
          }
        ],
        "steps": [],
        "closingParagraphs": [
          "이 계산기는 각 입력을 받지 않습니다. 이 기준값들은 결과를 검증할 때 방향 잡기와 확인값으로 활용하십시오."
        ],
        "tables": [
          {
            "headers": ["각 A", "인접 변 b", "대변 a", "코탄젠트 비율"],
            "rows": [
              ["30 deg", "sqrt(3)", "1", "약 1.7321"],
              ["45 deg", "1", "1", "1"],
              ["60 deg", "1", "sqrt(3)", "약 0.5774"],
              ["75 deg", "1", "약 3.7321", "약 0.2679"]
            ]
          }
        ],
        "figures": [
          {
            "alt": "30도, 45도, 60도의 세 삼각형, 코탄젠트 값 1.7321, 1, 0.5774. 각이 커지면 코탄젠트는 작아진다",
            "caption": "각 A가 커지면 대변이 인접 변에서 차지하는 비중이 커지므로 cot(A)는 작아집니다."
          }
        ]
      },
      "cot-recover": {
        "h2": "코탄젠트를 알 때 각 구하기",
        "blocks": [
          {
            "kind": "p",
            "text": "코탄젠트 비율 자체는 각도가 아닙니다. 비율은 알고 각이 필요할 때 역삼각함수가 다리를 놓습니다. 직각삼각형에서 양의 코탄젠트 비율에 대해서는 역수를 취해 탄젠트 비율을 되찾은 뒤 역탄젠트를 적용합니다."
          },
          {
            "kind": "p",
            "text": "[[[\\boxed{A=\\tan^{-1}\\left(\\frac{1}{\\cot(A)}\\right)}]]]"
          },
          {
            "kind": "p",
            "text": "[[\\tan(A)=a/b]] 이므로 같은 뜻으로 이렇게도 쓸 수 있습니다."
          },
          {
            "kind": "p",
            "text": "[[[\\boxed{A=\\tan^{-1}\\left(\\frac{a}{b}\\right)}]]]"
          },
          {
            "kind": "h3",
            "text": "풀이 예제"
          },
          {
            "kind": "p",
            "text": "[[\\cot(A)=4/3]] 이 주어지면 역수는 [[\\tan(A)=3/4]] 이므로 [[A=\\tan^{-1}(3/4)]] 이고 [[\\boxed{A\\approx36.87^\\circ}]] 입니다. 역탄젠트 키를 누르기 전에 공학용 계산기를 도 모드로 설정하십시오. 이것은 별개의 각 계산입니다. 이 페이지의 코탄젠트 비율 계산기는 변 길이를 받아 비율을 돌려주며, 각을 절대 돌려주지 않습니다."
          }
        ],
        "steps": [],
        "closingParagraphs": [],
        "tables": [],
        "figures": []
      },
      "cot-mistakes": {
        "h2": "코탄젠트 계산에서 흔한 실수",
        "blocks": [],
        "steps": [
          "<strong>공식을 [[b/a]] 가 아닌 [[a/b]] 로 뒤집어 버리기.</strong>이것은 탄젠트 계산입니다. 수정: 인접 변을 위에 놓습니다.",
          "<strong>코탄젠트와 탄젠트 혼동하기.</strong>3-4-5 삼각형에서 0.75라고 답해 버리기. 수정: 탄젠트는 대변 ÷ 인접 변이고, 코탄젠트는 뒤집은 분수입니다.",
          "<strong>코탄젠트와 코사인 혼동하기.</strong>[[b/c]] 를 사용해 버리기. 수정: 코사인에는 빗변이 필요하지만 코탄젠트는 빗변에 닿지 않습니다.",
          "<strong>두 변 대신 빗변 사용하기.</strong>[[b/c]] 나 [[c/a]] 를 계산해 버리기. 수정: 분모는 대변 [[a]] 이지 [[c]] 가 아닙니다.",
          "<strong>인접 변과 대변 뒤바꾸기.</strong>잘못된 변 선택하기. 수정: 각 [[A]] 에서 따라가십시오. 닿는 변이 인접 변, 마주한 변이 대변입니다.",
          "<strong>변 이름이 기준각에 따라 달라진다는 것 잊기.</strong>각 [[B]] 용으로 그린 이름을 사용해 버리기. 수정: 기준각이 바뀔 때마다 이름을 다시 붙입니다.",
          "<strong>코탄젠트는 0과 1 사이여야 한다고 생각하기.</strong>2.4나 12를 오류로 여겨 버리기. 수정: 그 값들은 정상이며, 상한이 1인 것은 사인과 코사인뿐입니다.",
          "<strong>코탄젠트가 1이면 삼각형이 무효라고 생각하기.</strong>수정: [[\\cot(A)=1]] 은 단순히 두 변이 같고 각이 [[45^\\circ]] 라는 뜻이며, 완전히 유효한 삼각형입니다.",
          "<strong>비율에 미터나 센티미터를 붙여 보고하기.</strong>1.3333 m라고 써 버리기. 수정: 단위는 이미 소거되었으므로 그냥 숫자로 보고합니다.",
          "<strong>0이나 음수 변 길이 입력하기.</strong>0으로 나누거나 의미 없는 음수 비율이 됩니다. 수정: 양수 길이만 사용합니다.",
          "<strong>측정 단위 섞기.</strong>센티미터로 나눈 미터는 비율을 100배 왜곡합니다. 수정: 먼저 두 변을 하나의 단위로 맞춥니다.",
          "<strong>너무 일찍 반올림하기.</strong>확인 전에 [[4/3]] 을 1.33으로 반올림하면 피할 수 있는 오차가 더해집니다. 수정: 마지막 단계까지 여분의 자릿수를 유지합니다.",
          "<strong>코탄젠트가 도 단위의 각도라고 생각하기.</strong>1.3333을 1.3333도라고 읽어 버리기. 수정: 이것은 비율이며, 각에는 역탄젠트가 필요합니다.",
          "<strong>탄젠트의 역수와 역탄젠트 혼동하기.</strong>[[\\tan^{-1}(a/b)]] 가 필요한데 [[1/\\tan(A)]] 라고 쓰거나 그 반대로 써 버리기. 수정: 역수는 분수를 뒤집고, 역함수는 각을 되찾습니다.",
          "<strong>코탄젠트 값이 삼각형의 크기를 정한다고 생각하기.</strong>전혀 다른 두 삼각형이 [[\\cot(A)=1.3333]] 를 공유할 수 있습니다. 수정: 비율이 정하는 것은 모양이지 크기가 아닙니다."
        ],
        "closingParagraphs": [
          "<strong>틀림 vs 맞음.</strong>[[b=4]] 와 [[a=3]] 이 주어진 경우:",
          "틀림: [[3/4=0.75]]. 이것은 탄젠트 비율이지 코탄젠트가 아닙니다.",
          "맞음: [[\\cot(A)=4/3\\approx1.3333]]. 확인: [[\\tan(A)=3/4=0.75]] 이고 [[1/0.75\\approx1.3333]] 이므로 역수 관계가 확인됩니다."
        ],
        "tables": [],
        "figures": []
      },
      "cot-verify": {
        "h2": "코탄젠트 결과가 맞는지 확인하는 방법",
        "blocks": [
          {
            "kind": "p",
            "text": "유효한 비퇴화 직각삼각형은 양수인 변을 요구합니다. [[a \\gt 0]], [[b \\gt 0]] 이므로 코탄젠트 결과는 양의 유한수여야 합니다."
          },
          {
            "kind": "p",
            "text": "[[[\\boxed{\\cot(A)=\\frac{b}{a} \\gt 0}]]]"
          },
          {
            "kind": "p",
            "text": "두 측정값은 모두 호환되는 단위를 사용해야 합니다. 1보다 크거나, 1과 같거나, 1보다 작은 결과 모두 유효할 수 있습니다. 사인이나 코사인과 달리 코탄젠트는 1이 상한이 아닙니다."
          },
          {
            "kind": "h3",
            "text": "방법 1: 탄젠트의 역수로 확인하기"
          },
          {
            "kind": "p",
            "text": "[[\\tan(A)=a/b]] 를 확인한 뒤 [[\\cot(A)=1/\\tan(A)]] 를 확정합니다. [[a=3]], [[b=4]] 이면 [[\\tan(A)=3/4=0.75]] 이므로 [[\\cot(A)=1/0.75\\approx1.3333]] 입니다. 두 경로 사이의 불일치는 분수 뒤집기나 변 이름 착오의 신호입니다."
          },
          {
            "kind": "h3",
            "text": "방법 2: 피타고라스 정리로 확인하기"
          },
          {
            "kind": "p",
            "text": "빗변을 알거나 필요하면 [[c=\\sqrt{a^2+b^2}]] 를 계산합니다. [[a=3]], [[b=4]] 이면 [[c=\\sqrt{9+16}=5]] 이고 [[3^2+4^2=5^2]] 입니다. 이를 통해 변 길이들이 진짜 직각삼각형을 이룸이 확인됩니다. 여기서 빗변은 검증용 값이지 주요 코탄젠트 공식의 일부가 아닙니다."
          },
          {
            "kind": "h3",
            "text": "방법 3: 각 관계로 확인하기"
          },
          {
            "kind": "p",
            "text": "알고 있는 코탄젠트 비율에 대해서는 [[A=\\tan^{-1}(a/b)]] 로 각을 되찾습니다. [[a=3]], [[b=4]] 이면 [[A\\approx36.87^\\circ]] 입니다. 인접 변이 대변보다 길므로 각은 [[45^\\circ]] 아래에 와야 합니다. 그렇지 않으면 변 이름이 바뀌었을 가능성이 큽니다. 반올림으로 인한 작은 차이는 생길 수 있습니다."
          }
        ],
        "steps": [],
        "closingParagraphs": [],
        "tables": [],
        "figures": []
      },
      "cot-vs": {
        "h2": "코탄젠트 vs 탄젠트, 사인, 코사인",
        "blocks": [
          {
            "kind": "p",
            "text": "각 비율은 같은 기준각과 변 이름을 사용해 서로 다른 변 쌍을 비교합니다."
          }
        ],
        "steps": [],
        "closingParagraphs": [
          "코탄젠트와 탄젠트는 역수 쌍입니다. [[\\cot(A)=1/\\tan(A)]]. [[\\tan(A)=0.75]] 이면 [[\\cot(A)\\approx1.3333]] 입니다. 공식이 인접 변 ÷ 대변을 요구하거나, 주행 거리 대 상승 관계를 다루거나, 두 변만 알고 있을 때는 코탄젠트를 씁니다. 상승 ÷ 주행 거리에는 탄젠트, 빗변에 대한 대변에는 사인, 빗변에 대한 인접 변에는 코사인을 씁니다.",
          "이웃 비율에 대해서는 <a href=\"/sine-ratio-calculator/\" class=\"text-primary hover:underline\">사인 비율 계산기</a>, <a href=\"/cosine-ratio-calculator/\" class=\"text-primary hover:underline\">코사인 비율 계산기</a>, <a href=\"/tangent-ratio-calculator/\" class=\"text-primary hover:underline\">탄젠트 비율 계산기</a>, <a href=\"/secant-ratio-calculator/\" class=\"text-primary hover:underline\">시컨트 비율 계산기</a>, <a href=\"/cosecant-ratio-calculator/\" class=\"text-primary hover:underline\">코시컨트 비율 계산기</a>를 참고하십시오."
        ],
        "tables": [
          {
            "headers": ["비율", "공식", "비교 대상"],
            "rows": [
              ["사인", "sin(A) = a/c", "빗변에 대한 대변"],
              ["코사인", "cos(A) = b/c", "빗변에 대한 인접 변"],
              ["탄젠트", "tan(A) = a/b", "인접 변에 대한 대변"],
              ["코탄젠트", "cot(A) = b/a", "대변에 대한 인접 변"],
              ["시컨트", "sec(A) = c/b", "인접 변에 대한 빗변"],
              ["코시컨트", "csc(A) = c/a", "대변에 대한 빗변"]
            ]
          }
        ],
        "figures": []
      },
      "cot-related": {
        "h2": "관련 삼각비 계산기 살펴보기",
        "blocks": [],
        "steps": [],
        "closingParagraphs": [],
        "related": [
          { "name": "사인 비율 계산기" },
          { "name": "코사인 비율 계산기" },
          { "name": "탄젠트 비율 계산기" },
          { "name": "시컨트 비율 계산기" },
          { "name": "코시컨트 비율 계산기" },
          { "name": "직각삼각형 각 계산기" }
        ],
        "tables": [],
        "figures": []
      }
    },
    "faqs": [
      {
        "question": "직각삼각형의 코탄젠트 공식은?",
        "answer": "cot(A) = b / a 입니다. 각 A의 인접 변을 각 A의 대변으로 나눕니다. 인접 변 4 cm, 대변 3 cm이면 결과는 4/3, 약 1.3333 입니다."
      },
      {
        "question": "코탄젠트와 탄젠트의 관계는?",
        "answer": "코탄젠트는 탄젠트의 역수입니다. cot(A) = 1 / tan(A). tan(A) = 3/4 = 0.75 이면 cot(A) = 4/3, 약 1.3333 입니다. 두 비율은 같은 삼각형을 뒤집힌 관점에서 설명하며, 역수 확인은 결과를 검증하는 가장 빠른 방법입니다."
      },
      {
        "question": "코탄젠트와 코사인의 차이는?",
        "answer": "코탄젠트는 인접 변을 대변으로 나누고 (b/a), 두 변만 사용합니다. 코사인은 인접 변을 빗변으로 나눕니다 (b/c). 코탄젠트는 탄젠트의 역수이지 코사인의 역수가 아닙니다. 이 구분은 초급 삼각법에서 가장 많이 출제되는 실수 중 하나입니다."
      },
      {
        "question": "코탄젠트가 1보다 클 수 있나요?",
        "answer": "네. 나눗셈에 빗변이 등장하지 않으므로 코탄젠트에는 0부터 1까지의 상한이 없습니다. 인접 변이 대변보다 길면 결과는 1을 넘습니다. 30도 각에서는 cot(30 deg)이 약 1.7321 입니다. 2.4, 12, 어떤 양의 유한수든 모두 가능합니다."
      },
      {
        "question": "코탄젠트 값이 1이라는 것의 의미는?",
        "answer": "인접 변과 대변의 길이가 같으므로, 삼각형은 기준각에서 이등변이고 각 A는 45도입니다. 인접 변 6 cm, 대변 6 cm이면 cot(A) = 6/6 = 1 입니다."
      },
      {
        "question": "코탄젠트가 1보다 작을 수 있나요?",
        "answer": "네, 대변이 인접 변보다 길 때마다 그렇습니다. 인접 변 6 m, 대변 8 m이면 cot(A) = 6/8 = 0.75 이고, 기준각은 45도보다 큽니다."
      },
      {
        "question": "코탄젠트에 측정 단위가 있나요?",
        "answer": "아니요. 두 입력 모두 같은 단위로 잰 길이이므로 단위가 소거됩니다. 4 m / 3 m = 4/3 이며, 400 cm / 300 cm = 4/3 과 같습니다. 코탄젠트는 그냥 무차원 수로 보고하고, 도, 미터, 피트를 절대 붙이지 마십시오."
      },
      {
        "question": "변 길이에서 코탄젠트를 계산하는 방법은?",
        "answer": "인접 변 b와 대변 a를 같은 단위로 재고, 둘 다 양수인지 확인한 뒤 나눕니다. cot(A) = b / a 입니다. 이 페이지에서는 첫 번째 칸에 인접 변, 두 번째 칸에 대변을 입력하고, 맞는 단위를 고른 뒤 계산하기 cot(A)를 클릭합니다."
      },
      {
        "question": "코탄젠트 비율에서 각을 구하는 방법은?",
        "answer": "역수를 취해 탄젠트 비율을 얻은 뒤 역탄젠트를 적용합니다. A = tan^-1(a / b) 입니다. cot(A) = 4/3 이면 탄젠트 비율은 3/4 이므로 A = tan^-1(0.75), 약 36.87도입니다. 먼저 공학용 계산기를 도 모드로 설정하십시오. 이 페이지의 계산기는 비율을 돌려주지 각을 돌려주지 않습니다."
      },
      {
        "question": "코탄젠트 계산기에 빗변이 필요한가요?",
        "answer": "아니요. 기본 코탄젠트 비율은 서로 수직인 두 변만 사용하므로 빗변이 공식에 절대 등장하지 않습니다. 사인, 코사인, 시컨트, 코시컨트를 쓰는 후속 작업이나, 피타고라스 정리로 삼각형을 검증할 때만 의미를 가집니다."
      },
      {
        "question": "주행 거리와 상승으로 본 코탄젠트의 의미는?",
        "answer": "각 A를 수평선에서 잴 때 cot(A)는 수평 주행 거리를 수직 상승으로 나눈 것입니다. 코탄젠트 0.75는 수평 주행 거리가 수직 상승의 75 퍼센트임을 의미합니다. 코탄젠트 12는 주행 거리가 상승의 열두 배임을 의미합니다. 탄젠트는 같은 생각을 뒤집은 것, 상승 ÷ 주행 거리입니다."
      },
      {
        "question": "탄젠트 대신 코탄젠트를 써야 할 때는?",
        "answer": "공식이나 절차가 명시적으로 인접 변 ÷ 대변을 요구하거나, 수평 주행 거리와 수직 상승을 비교하거나, 알고 있는 변이 두 변뿐일 때 코탄젠트를 씁니다. 알고 있는 관계가 상승 ÷ 주행 거리, 즉 대변 ÷ 인접 변이면 탄젠트가 직접적인 선택입니다."
      }
    ],
    "faqHeading": "자주 묻는 질문",
    "relatedHeading": "관련 삼각비 계산기 살펴보기",
    "conclusion": {
      "h2": "자신 있게 코탄젠트 비율을 사용하세요",
      "paragraphs": [
        "코탄젠트는 탄젠트를 뒤집은 형태입니다. 인접 변을 대변으로 나누면 삼각형의 주행 거리 대 상승 모양이 설명됩니다. 공식 [[\\cot(A)=b/a]] 에는 두 개의 측정값만 필요하고, 답은 항상 양의 무차원 수이며, 어느 변이 긴지에 따라 1을 넘거나, 같거나, 작을 수 있습니다. 각 자체가 필요하면 [[A=\\tan^{-1}(a/b)]] 로 되찾습니다. 사다리, 지붕, 경사로, 교과서의 3-4-5 중 무엇이든 방법은 바뀌지 않습니다. 인접 변을 확인하고, 대변을 확인하고, 나누고, 탄젠트의 역수로 검증합니다."
      ]
    }
  },
  "ms": {
    "tocHeading": "Dalam panduan ini",
    "tocItems": {
      "cot-intro": "Apakah itu kalkulator nisbah kotangen?",
      "cot-triangle": "Memahami sisi bersebelahan dan sisi bertentangan",
      "cot-whatis": "Memahami nisbah kotangen",
      "cot-formula": "Bagaimana formula kotangen berfungsi",
      "cot-howto": "Cara menggunakan kalkulator nisbah kotangen",
      "cot-examples": "Contoh langkah demi langkah mengira kotangen",
      "cot-applications": "Contoh kehidupan sebenar menggunakan nisbah kotangen",
      "cot-angle": "Memahami hubungan antara kotangen dan saiz sudut",
      "cot-recover": "Cara mencari sudut apabila kotangen diketahui",
      "cot-mistakes": "Kesilapan biasa semasa mengira kotangen",
      "cot-verify": "Cara menyemak sama ada hasil kotangen anda sah",
      "cot-vs": "Kotangen lawan tangen, sinus dan kosinus",
      "cot-related": "Terokai kalkulator trigonometri berkaitan",
      "cot-faq": "Soalan lazim"
    },
    "sections": {
      "cot-intro": {
        "h2": "Apakah itu kalkulator nisbah kotangen?",
        "blocks": [
          {
            "kind": "p",
            "text": "Kalkulator nisbah kotangen menjawab satu soalan: bagi sudut tirus dalam segi tiga bersudut tepat, bagaimanakah sisi di sebelah sudut itu berbanding dengan sisi yang bertentangan dengannya? Masukkan dua panjang sisi, dan alat ini membahagikan sisi bersebelahan dengan sisi bertentangan, lalu mengembalikan [[\\cot(A)=b/a]]. Dengan sisi bersebelahan 4 cm dan sisi bertentangan 3 cm, pengiraannya ialah [[4/3\\approx1.3333]]: sisi bersebelahan kira-kira 1.3333 kali panjang sisi bertentangan. Perpuluhan itu ialah jawapan lengkap. Ia tidak membawa unit kerana sentimeter terhapus dalam pembahagian, dan ia bukan sudut dalam darjah. Hipotenus tidak pernah masuk dalam pengiraan ini; dua sisi tegak yang berserenjang sudah mencukupi. Kotangen juga merupakan salingan tangen, dan itulah sebabnya banyak buku teks memperkenalkannya sebagai bentuk terbalik bagi [[\\tan(A)]]."
          }
        ],
        "steps": [],
        "closingParagraphs": [],
        "tables": [],
        "figures": []
      },
      "cot-triangle": {
        "h2": "Memahami sisi bersebelahan dan sisi bertentangan",
        "blocks": [
          {
            "kind": "h3",
            "text": "Apakah segi tiga bersudut tepat?"
          },
          {
            "kind": "p",
            "text": "Segi tiga bersudut tepat mempunyai satu sudut tepat [[90^\\circ]], iaitu sudut antara dua garis yang berserenjang, seperti dinding bertemu lantai yang rata. Hipotenus terletak bertentangan dengan sudut tepat itu dan sentiasa merupakan sisi terpanjang. Dua sudut yang lain berkongsi baki 90 darjah, jadi kedua-duanya tirus. Dua sisi kaki bertemu pada sudut tepat, berserenjang antara satu sama lain, dan hubungan antara merekalah yang digambarkan oleh kotangen."
          },
          {
            "kind": "h3",
            "text": "Apakah sisi bersebelahan?"
          },
          {
            "kind": "p",
            "text": "Sisi bersebelahan [[b]] ialah kaki yang menyentuh sudut rujukan [[A]] tanpa menjadi hipotenus. Dalam masalah praktikal ia sering berperanan sebagai jarak mendatar: jarak tanah dari tapak tangga, unjuran mendatar bumbung, atau komponen mendatar suatu daya. Ia masuk ke dalam pengangka formula kotangen. Sisi kaki mana yang dikira bersebelahan bergantung pada sudut rujukan yang dipilih, jadi beralih dari sudut [[A]] ke sudut [[B]] menukar label bersebelahan dan bertentangan."
          },
          {
            "kind": "h3",
            "text": "Apakah sisi bertentangan?"
          },
          {
            "kind": "p",
            "text": "Sisi bertentangan [[a]] terletak betul-betul di hadapan sudut [[A]] dan tidak pernah menyentuh bucu sudut itu. Dalam masalah praktikal ia sering berperanan sebagai kenaikan menegak: ketinggian dinding, perbezaan ketinggian, atau komponen menegak suatu ukuran. Ia masuk ke dalam penyebut formula kotangen, yang bermaksud membesarkannya mengecilkan nisbah dan mengecilkannya membesarkan nisbah."
          },
          {
            "kind": "h3",
            "text": "Apakah hipotenus?"
          },
          {
            "kind": "p",
            "text": "Hipotenus [[c]] ialah sisi yang bertentangan dengan sudut tepat: dalam mana-mana gambar rajah ia menghadap segi empat kecil yang menandakan bucu [[90^\\circ]], dan ia sememangnya lebih panjang daripada mana-mana kaki. Ia tidak memainkan sebarang peranan dalam nisbah kotangen asas, dan itulah sebabnya kalkulator tidak pernah memintanya. Ia menjadi relevan apabila sinus, kosinus, sekan atau kosekan masuk dalam kerja, atau apabila teorem Pythagoras digunakan untuk mengesahkan bahawa dua kaki itu membentuk segi tiga bersudut tepat yang tulen."
          }
        ],
        "steps": [],
        "closingParagraphs": [],
        "tables": [],
        "figures": [
          {
            "alt": "Segi tiga bersudut tepat dengan sudut A di kiri bawah, sisi bersebelahan b keemasan, sisi bertentangan a hijau, cot(A)=b/a",
            "caption": "Sudut A terletak di kiri bawah; kotangen menggunakan sisi bersebelahan b keemasan dan sisi bertentangan a hijau, bukan hipotenus c."
          }
        ]
      },
      "cot-whatis": {
        "h2": "Memahami nisbah kotangen",
        "blocks": [
          {
            "kind": "p",
            "text": "Kotangen membandingkan panjang di sebelah sudut rujukan dengan panjang yang bertentangan dengannya:"
          },
          {
            "kind": "p",
            "text": "[[[\\cot(A)=\\frac{b}{a}]]]"
          },
          {
            "kind": "p",
            "text": "Di sini [[\\cot(A)]] ialah kotangen sudut [[A]], [[b]] ialah sisi bersebelahan, dan [[a]] ialah sisi bertentangan: berapa kali sisi bertentangan muat di dalam sisi bersebelahan."
          },
          {
            "kind": "h3",
            "text": "Kotangen sebagai salingan tangen"
          },
          {
            "kind": "p",
            "text": "Tangen membahagikan sisi bertentangan dengan sisi bersebelahan, [[\\tan(A)=a/b]]. Mengambil salingan menterbalikkan pecahan itu, [[1/\\tan(A)=b/a]], yang tepat merupakan formula kotangen:"
          },
          {
            "kind": "p",
            "text": "[[[\\boxed{\\cot(A)=\\frac{1}{\\tan(A)}=\\frac{b}{a}}]]]]"
          },
          {
            "kind": "p",
            "text": "Dengan [[\\tan(A)=3/4=0.75]], salingannya ialah [[\\cot(A)=1/0.75=4/3\\approx1.3333]]: segi tiga yang sama, digambarkan dari arah bertentangan. Perbezaan ini penting kerana [[\\tan^{-1}]] menandakan fungsi tangen songsang, manakala [[1/\\tan(A)]] ialah tangen salingan: idea berkaitan, makna berbeza, jawapan berbeza."
          },
          {
            "kind": "h3",
            "text": "Memahami kotangen sebagai jarak mendatar dibahagi kenaikan menegak"
          },
          {
            "kind": "p",
            "text": "Apabila sudut [[A]] diukur dari garis mendatar, sisi bersebelahan boleh mewakili jarak mendatar dan sisi bertentangan kenaikan menegak. Maka [[\\cot(A)=\\frac{\\text{Horizontal run}}{\\text{Vertical rise}}]]. Tangen memberikan hubungan yang sama secara terbalik, kenaikan dibahagi jarak mendatar. Bacaan jarak-mendatar-atas-kenaikan ini menjadikan kotangen nisbah semula jadi bagi soalan seperti \"berapa banyak jarak mendatar meliputi berapa banyak ketinggian?\", dan ia bergantung pada sudut rujukan yang dipilih serta geometri keadaannya."
          },
          {
            "kind": "h3",
            "text": "Apakah maksud nilai kotangen?"
          },
          {
            "kind": "p",
            "text": "Kotangen yang lebih besar daripada 1 bermaksud sisi bersebelahan lebih panjang daripada sisi bertentangan, dan sudut rujukan kurang daripada [[45^\\circ]]. Kotangen yang sama dengan 1 bermaksud dua kaki sama panjang dan sudut [[A]] tepat [[45^\\circ]]. Kotangen antara 0 dan 1 bermaksud sisi bertentangan lebih panjang daripada sisi bersebelahan, dan sudut rujukan terletak antara [[45^\\circ]] dan [[90^\\circ]]."
          },
          {
            "kind": "h3",
            "text": "Mengapa kotangen boleh lebih besar daripada 1"
          },
          {
            "kind": "p",
            "text": "Berbeza dengan sinus dan kosinus, kotangen tidak mempunyai siling 0-hingga-1 kerana hipotenus tidak pernah masuk dalam pembahagian. Bagi [[\\cot(A)=8/2=4]], sisi bersebelahan cuma empat kali sisi bertentangan, dan sudut rujukan ialah sudut tirus yang agak kecil. Sebarang nilai positif terhingga adalah mungkin."
          },
          {
            "kind": "h3",
            "text": "Mengapa kotangen boleh kurang daripada 1"
          },
          {
            "kind": "p",
            "text": "Bagi [[\\cot(A)=3/6=0.5]], sisi bersebelahan separuh daripada sisi bertentangan, jadi sudut rujukan ialah sudut tirus yang agak besar. Nisbah jatuh di bawah 1 tanpa ada yang tidak kena: ia cuma ciri segi tiga yang lebih tinggi dan sempit."
          },
          {
            "kind": "h3",
            "text": "Mengapa kotangen ialah nisbah tanpa dimensi"
          },
          {
            "kind": "p",
            "text": "Membahagikan satu panjang dengan panjang yang lain menghapuskan unit: [[4\\text{ m}/3\\text{ m}=4/3]], dan [[400\\text{ cm}/300\\text{ cm}=4/3]] juga. Nombor itu menggambarkan bentuk segi tiga, bukan ukuran dengan unit fizikal, jadi tulis hasilnya sebagai nombor biasa, jangan sekali-kali dilekatkan meter, sentimeter atau darjah."
          }
        ],
        "steps": [],
        "closingParagraphs": [],
        "tables": [],
        "figures": [
          {
            "alt": "Tiga peringkat: segi tiga 3-4-5 dilabel, tangen tan(A)=3/4=0.75, kotangen cot(A)=4/3=1.3333, hubungan salingan",
            "caption": "Tiga peringkat: labelkan segi tiga 3-4-5, kira tangen tan(A) = 3/4, kemudian terbalikkan pecahan untuk mendapatkan cot(A) = 4/3."
          }
        ]
      },
      "cot-formula": {
        "h2": "Bagaimana formula kotangen berfungsi",
        "blocks": [
          {
            "kind": "p",
            "text": "Mulakan dari takrifan: kotangen ialah sisi bersebelahan dibahagi sisi bertentangan. Dalam tatatanda halaman ini:"
          },
          {
            "kind": "p",
            "text": "[[[\\boxed{\\cot(A)=\\frac{b}{a}}]]]]"
          },
          {
            "kind": "p",
            "text": "Sisi bersebelahan ialah pengangka kerana ia panjang yang dibandingkan; sisi bertentangan ialah penyebut kerana ia panjang rujukan, unit \"berapa banyak ini muat dalam itu\". Menukarnya memberikan nisbah tangen pula."
          },
          {
            "kind": "h3",
            "text": "Contoh kerja penuh: segi tiga bersudut tepat 3-4-5"
          },
          {
            "kind": "p",
            "text": "Diberi [[b=4\\text{ cm}]], [[a=3\\text{ cm}]], [[c=5\\text{ cm}]]:"
          },
          {
            "kind": "p",
            "text": "Langkah 1: Tulis formula. [[\\cot(A)=b/a]]"
          },
          {
            "kind": "p",
            "text": "Langkah 2: Gantikan ukuran. [[\\cot(A)=4/3]]"
          },
          {
            "kind": "p",
            "text": "Langkah 3: Bahagi. [[\\boxed{\\cot(A)\\approx1.3333}]]"
          },
          {
            "kind": "p",
            "text": "Langkah 4: Tafsir jawapan. Sisi bersebelahan kira-kira 1.3333 kali sisi bertentangan."
          },
          {
            "kind": "p",
            "text": "Langkah 5: Sahkan dengan nisbah tangen. [[\\tan(A)=3/4=0.75]], dan [[1/0.75\\approx1.3333]]. Kedua-dua laluan mendarat pada nombor yang sama, dan begitulah tepatnya kelakuan nisbah salingan."
          }
        ],
        "steps": [],
        "closingParagraphs": [],
        "tables": [],
        "figures": []
      },
      "cot-howto": {
        "h2": "Cara menggunakan kalkulator nisbah kotangen",
        "blocks": [
          {
            "kind": "p",
            "text": "Panduan di bawah sepadan dengan antara muka sebenar pada halaman ini."
          }
        ],
        "steps": [
          "<strong>Kenal pasti sudut rujukan [[A]],</strong> kerana sisi bersebelahan dan bertentangan ditakrifkan berbanding dengannya.",
          "<strong>Cari sisi bersebelahan [[b]]:</strong> kaki yang menyentuh sudut [[A]] yang bukan hipotenus.",
          "<strong>Cari sisi bertentangan [[a]]:</strong> kaki yang betul-betul di hadapan sudut [[A]], yang tidak pernah menyentuh bucunya.",
          "<strong>Ukur atau dapatkan kedua-dua panjang sisi</strong> dalam unit yang sama.",
          "<strong>Masukkan panjang sisi bersebelahan</strong> dalam medan input pertama.",
          "<strong>Masukkan panjang sisi bertentangan</strong> dalam medan input kedua.",
          "<strong>Pilih unit yang sepadan dengan pemilih unit</strong> supaya pembahagian membandingkan yang setara dengan yang setara.",
          "<strong>Pastikan kedua-dua ukuran positif;</strong> panjang sifar atau negatif tidak boleh membentuk segi tiga sebenar.",
          "<strong>Klik Kira cot(A)</strong> untuk membahagikan sisi bersebelahan dengan sisi bertentangan.",
          "<strong>Baca nisbah kotangen:</strong> sisi bersebelahan dinyatakan sebagai gandaan sisi bertentangan.",
          "<strong>Tafsir hasilnya:</strong> lebih besar daripada 1 bermaksud sisi bersebelahan lebih panjang, sama dengan 1 bermaksud kaki sama panjang, kurang daripada 1 bermaksud sisi bertentangan lebih panjang.",
          "<strong>Gunakan Reset</strong> untuk mengosongkan input dan bermula semula."
        ],
        "closingParagraphs": [
          "Kalkulator tidak meminta hipotenus mahupun sudut dalam darjah: dua panjang sisi positif ialah input lengkap, dan hasilnya sentiasa nombor positif tanpa dimensi."
        ],
        "tables": [],
        "figures": []
      },
      "cot-examples": {
        "h2": "Contoh langkah demi langkah mengira kotangen",
        "blocks": [
          {
            "kind": "p",
            "text": "Setiap contoh mengikut pola yang sama: tulis formula, gantikan, bahagi, tafsir."
          },
          {
            "kind": "h3",
            "text": "Contoh 1: segi tiga bersudut tepat 3-4-5"
          },
          {
            "kind": "p",
            "text": "Diberi [[b=4\\text{ cm}]], [[a=3\\text{ cm}]], [[c=5\\text{ cm}]]:"
          },
          {
            "kind": "p",
            "text": "[[\\cot(A)=4/3]]"
          },
          {
            "kind": "p",
            "text": "[[\\boxed{\\cot(A)\\approx1.3333}]]"
          },
          {
            "kind": "p",
            "text": "Sisi bersebelahan kira-kira 1.3333 kali sisi bertentangan; hipotenus langsung tidak terlibat dalam pengiraan."
          },
          {
            "kind": "h3",
            "text": "Contoh 2: segi tiga bersudut tepat 5-12-13"
          },
          {
            "kind": "p",
            "text": "Diberi [[b=12\\text{ m}]], [[a=5\\text{ m}]], [[c=13\\text{ m}]]:"
          },
          {
            "kind": "p",
            "text": "[[\\cot(A)=12/5]]"
          },
          {
            "kind": "p",
            "text": "[[\\boxed{\\cot(A)=2.4}]]"
          },
          {
            "kind": "p",
            "text": "Nisbah lebih besar daripada 1 kerana sisi bersebelahan ialah kaki yang lebih panjang; ia memberitahu kita sisi bersebelahan ialah 2.4 kali sisi bertentangan, bukan sebesar mana segi tiga itu."
          },
          {
            "kind": "h3",
            "text": "Contoh 3: segi tiga bersudut tepat sama kaki"
          },
          {
            "kind": "p",
            "text": "Diberi [[b=6\\text{ cm}]], [[a=6\\text{ cm}]], [[c=6\\sqrt{2}\\text{ cm}]]:"
          },
          {
            "kind": "p",
            "text": "[[\\cot(A)=6/6]]"
          },
          {
            "kind": "p",
            "text": "[[\\boxed{\\cot(A)=1}]]"
          },
          {
            "kind": "p",
            "text": "Kaki yang sama panjang memberikan nisbah tepat 1, iaitu ciri sudut rujukan [[45^\\circ]]."
          },
          {
            "kind": "h3",
            "text": "Contoh 4: segi tiga dengan sisi bersebelahan lebih kecil"
          },
          {
            "kind": "p",
            "text": "Diberi [[b=6\\text{ m}]] dan [[a=8\\text{ m}]]:"
          },
          {
            "kind": "p",
            "text": "[[\\cot(A)=6/8]]"
          },
          {
            "kind": "p",
            "text": "[[\\boxed{\\cot(A)=0.75}]]"
          },
          {
            "kind": "p",
            "text": "Hasilnya kurang daripada 1 kerana sisi bertentangan ialah kaki yang lebih panjang, jadi sudut rujukan lebih besar daripada [[45^\\circ]]."
          }
        ],
        "steps": [],
        "closingParagraphs": [],
        "tables": [],
        "figures": []
      },
      "cot-applications": {
        "h2": "Contoh kehidupan sebenar menggunakan nisbah kotangen",
        "blocks": [
          {
            "kind": "p",
            "text": "Kotangen ialah nisbah matematik, bukan kuantiti fizikal berunit. Nilai praktikalnya terletak pada membandingkan jarak mendatar dengan kenaikan menegak, menyemak geometri segi tiga, dan menggunakan formula yang secara khusus memanggil sisi bersebelahan dibahagi sisi bertentangan. Setiap contoh mengandaikan segi tiga bersudut tepat yang dipermudahkan, dan tiada satu pun nisbah ini sahaja menyelesaikan soal keselamatan, kekuatan atau pematuhan kod."
          },
          {
            "kind": "h3",
            "text": "Contoh 5: mencari nisbah jarak-mendatar-kepada-kenaikan tangga"
          },
          {
            "kind": "p",
            "text": "Sebuah tangga bersandar pada dinding menegak. Tapaknya 3 m dari dinding, dan ia mencapai 4 m ke atas dinding. Jarak mendatar ialah sisi bersebelahan [[b=3\\text{ m}]], capaian menegak ialah sisi bertentangan [[a=4\\text{ m}]]. [[\\cot(A)=3/4]], jadi [[\\boxed{\\cot(A)=0.75}]]: jarak mendatar ialah 75 peratus daripada ketinggian menegak. Nisbah itu menggambarkan geometri tangga; ia tidak menentukan sama ada tangga diletakkan dengan selamat."
          },
          {
            "kind": "h3",
            "text": "Contoh 6: mengira nisbah jarak-mendatar-kepada-kenaikan bumbung"
          },
          {
            "kind": "p",
            "text": "Sebahagian bumbung mempunyai jarak mendatar 4 m dan kenaikan menegak 3 m. Di sini [[b=4\\text{ m}]] dan [[a=3\\text{ m}]]. [[\\cot(A)=4/3]], jadi [[\\boxed{\\cot(A)\\approx1.3333}]]: jarak mendatar kira-kira 1.3333 kali kenaikan menegak. Nisbah ini bukan penilaian struktur atau kod bumbung yang lengkap."
          },
          {
            "kind": "h3",
            "text": "Contoh 7: menilai nisbah kotangen tanjakan"
          },
          {
            "kind": "p",
            "text": "Tanjakan yang dipermudahkan mempunyai jarak mendatar 9 m dan kenaikan menegak 0.75 m. Dengan [[b=9\\text{ m}]] dan [[a=0.75\\text{ m}]]: [[\\cot(A)=9/0.75]], jadi [[\\boxed{\\cot(A)=12}]]. Jarak mendatar ialah 12 kali kenaikan menegak, ciri cerun yang landai. Nisbah sahaja tidak menentukan kebolehcapaian atau pematuhan kod bangunan."
          },
          {
            "kind": "h3",
            "text": "Contoh 8: ukuran ukur tanah"
          },
          {
            "kind": "p",
            "text": "Segi tiga ukur tanah yang dipermudahkan mempunyai jarak mendatar 40 m dan perbezaan ketinggian menegak 30 m. Dengan [[b=40\\text{ m}]] dan [[a=30\\text{ m}]]: [[\\cot(A)=40/30]], jadi [[\\boxed{\\cot(A)\\approx1.3333}]]. Nisbah membandingkan pemisahan mendatar dengan perbezaan menegak secara langsung. Ukur tanah sebenar mungkin memerlukan ukuran tambahan, pembetulan dan prosedur alat."
          },
          {
            "kind": "h3",
            "text": "Contoh 9: dawai guy menyokong tiang"
          },
          {
            "kind": "p",
            "text": "Dawai guy menyambungkan tiang ke sauh tanah. Sauh itu 12 m secara mendatar dari tiang, dan titik sambungan 5 m di atas tanah. Dengan [[b=12\\text{ m}]] dan [[a=5\\text{ m}]]: [[\\cot(A)=12/5]], jadi [[\\boxed{\\cot(A)=2.4}]]. Jarak mendatar ialah 2.4 kali pemisahan menegak. Nisbah ini tidak menetapkan tegangan dawai, kekuatan sauh atau keselamatan struktur."
          },
          {
            "kind": "h3",
            "text": "Contoh 10: memahami nisbah jarak-mendatar-kepada-kenaikan tangga bertingkat"
          },
          {
            "kind": "p",
            "text": "Tangga bertingkat yang dipermudahkan mempunyai jarak mendatar 4 m dan kenaikan menegak 3 m. Dengan [[b=4\\text{ m}]] dan [[a=3\\text{ m}]]: [[\\cot(A)=4/3]], jadi [[\\boxed{\\cot(A)\\approx1.3333}]]. Jarak mendatar kira-kira 1.3333 kali kenaikan menegak. Contoh ini menggambarkan pepenjuru yang diidealkan dan tidak mengesahkan dimensi tangga atau pematuhan kod."
          },
          {
            "kind": "h3",
            "text": "Contoh 11: komponen mendatar dan menegak ledakan kren"
          },
          {
            "kind": "p",
            "text": "Ledakan kren yang dipermudahkan membentuk segi tiga bersudut tepat dengan unjuran mendatar 6 m dan kenaikan menegak 8 m. Dengan [[b=6\\text{ m}]] dan [[a=8\\text{ m}]]: [[\\cot(A)=6/8]], jadi [[\\boxed{\\cot(A)=0.75}]]. Unjuran mendatar ialah 75 peratus daripada komponen menegak. Nisbah tidak menetapkan kapasiti angkat atau keselamatan operasi."
          },
          {
            "kind": "h3",
            "text": "Contoh 12: segmen penerbangan pesawat yang lurus"
          },
          {
            "kind": "p",
            "text": "Bagi segmen penerbangan yang dipermudahkan, pesawat bergerak sepanjang laluan lurus dengan anjakan mendatar 4 km dan kenaikan menegak 3 km. Dengan [[b=4\\text{ km}]] dan [[a=3\\text{ km}]]: [[\\cot(A)=4/3]], jadi [[\\boxed{\\cot(A)\\approx1.3333}]]. Anjakan mendatar kira-kira 1.3333 kali kenaikan menegak. Ini ialah model geometri yang diidealkan, bukan pengiraan navigasi penerbangan yang lengkap."
          },
          {
            "kind": "h3",
            "text": "Contoh 13: pendakap mekanikal pepenjuru"
          },
          {
            "kind": "p",
            "text": "Pendakap pepenjuru mempunyai ofset mendatar 1.2 m dan kenaikan menegak 1.6 m. Dengan [[b=1.2\\text{ m}]] dan [[a=1.6\\text{ m}]]: [[\\cot(A)=1.2/1.6]], jadi [[\\boxed{\\cot(A)=0.75}]]. Ofset mendatar ialah 75 peratus daripada kenaikan menegak. Nisbah tidak menentukan kekuatan atau kesesuaian pendakap."
          },
          {
            "kind": "h3",
            "text": "Contoh 14: bahagian lurus laluan mendaki"
          },
          {
            "kind": "p",
            "text": "Bahagian lurus yang dipermudahkan bagi laluan mendaki mempunyai anjakan mendatar 80 m dan kenaikan menegak 60 m. Dengan [[b=80\\text{ m}]] dan [[a=60\\text{ m}]]: [[\\cot(A)=80/60]], jadi [[\\boxed{\\cot(A)\\approx1.3333}]]. Anjakan mendatar kira-kira 1.3333 kali kenaikan ketinggian. Denai sebenar boleh mempunyai lengkung dan kecerunan yang berubah."
          },
          {
            "kind": "h3",
            "text": "Contoh 15: sokongan awning"
          },
          {
            "kind": "p",
            "text": "Sokongan awning pepenjuru mempunyai unjuran mendatar 2.4 m dan kenaikan menegak 1.8 m. Dengan [[b=2.4\\text{ m}]] dan [[a=1.8\\text{ m}]]: [[\\cot(A)=2.4/1.8]], jadi [[\\boxed{\\cot(A)\\approx1.3333}]]. Nisbah menggambarkan unjuran mendatar berbanding kenaikan menegak. Pengiraan ini tidak menetapkan kesesuaian struktur."
          },
          {
            "kind": "h3",
            "text": "Contoh 16: kabel merentangi dua ketinggian berbeza"
          },
          {
            "kind": "p",
            "text": "Kabel lurus merentangi 24 m secara mendatar antara dua titik dengan pemisahan menegak 7 m. Dengan [[b=24\\text{ m}]] dan [[a=7\\text{ m}]]: [[\\cot(A)=24/7]], jadi [[\\boxed{\\cot(A)\\approx3.4286}]]. Pemisahan mendatar kira-kira 3.4286 kali perbezaan menegak. Model mengandaikan garis lurus antara titik hujung."
          },
          {
            "kind": "h3",
            "text": "Contoh praktikal dibandingkan"
          },
          {
            "kind": "p",
            "text": "Polanya kekal sepanjang: nisbah besar apabila sisi bersebelahan mengatasi sisi bertentangan, dan kecil apabila sisi bertentangan mendominasi."
          }
        ],
        "steps": [],
        "closingParagraphs": [],
        "tables": [
          {
            "headers": ["Keadaan", "Sisi bersebelahan b", "Sisi bertentangan a", "Formula kotangen", "Nisbah dikira", "Tafsiran"],
            "rows": [
              ["Tangga", "3 m", "4 m", "3/4", "0.75", "Jarak ialah 75% daripada capaian menegak"],
              ["Bumbung", "4 m", "3 m", "4/3", "1.3333", "Jarak ialah 1.3333 kali kenaikan"],
              ["Tanjakan", "9 m", "0.75 m", "9/0.75", "12", "Jarak ialah 12 kali kenaikan"],
              ["Ukur tanah", "40 m", "30 m", "40/30", "1.3333", "Jarak ialah 1.3333 kali jurang ketinggian"],
              ["Dawai guy", "12 m", "5 m", "12/5", "2.4", "Jarak ialah 2.4 kali ketinggian"],
              ["Tangga bertingkat", "4 m", "3 m", "4/3", "1.3333", "Jarak ialah 1.3333 kali kenaikan"],
              ["Ledakan kren", "6 m", "8 m", "6/8", "0.75", "Unjuran ialah 75% daripada kenaikan"],
              ["Segmen penerbangan", "4 km", "3 km", "4/3", "1.3333", "Anjakan ialah 1.3333 kali kenaikan"],
              ["Pendakap", "1.2 m", "1.6 m", "1.2/1.6", "0.75", "Ofset ialah 75% daripada kenaikan"],
              ["Laluan mendaki", "80 m", "60 m", "80/60", "1.3333", "Anjakan ialah 1.3333 kali kenaikan"],
              ["Sokongan awning", "2.4 m", "1.8 m", "2.4/1.8", "1.3333", "Unjuran ialah 1.3333 kali kenaikan"],
              ["Kabel", "24 m", "7 m", "24/7", "3.4286", "Pemisahan ialah 3.4286 kali jurang ketinggian"]
            ]
          }
        ],
        "figures": [
          {
            "alt": "Empat panel: nisbah tangga 0.75, bumbung 1.3333, tanjakan 12, ukur tanah 1.3333, setiap satu segi tiga dilabel",
            "caption": "Empat pengiraan praktikal: tangga, bumbung, tanjakan dan ukur tanah, setiap satu dengan segi tiga, formula dan nisbahnya."
          }
        ]
      },
      "cot-angle": {
        "h2": "Memahami hubungan antara kotangen dan saiz sudut",
        "blocks": [
          {
            "kind": "p",
            "text": "Kotangen jatuh apabila sudut tirus membesar. Sudut kecil mengekalkan sisi bersebelahan jauh lebih panjang daripada sisi bertentangan, jadi nisbah besar; apabila sudut [[A]] terbuka ke arah [[90^\\circ]], sisi bertentangan mengambil alih dan nisbah jatuh ke arah 0. Nilai rujukan yang disahkan di bawah menunjukkan polanya:"
          },
          {
            "kind": "p",
            "text": "Ukuran jadual adalah ilustrasi: nisbah, bukan panjang mutlak, yang menentukan sudut. Nisbah membesar tanpa batas apabila sudut menghampiri [[0^\\circ]] dan menghampiri 0 apabila sudut menghampiri [[90^\\circ]], kekal positif dan terhingga bagi setiap segi tiga yang sah."
          }
        ],
        "steps": [],
        "closingParagraphs": [
          "Kalkulator tidak mengambil input sudut; nilai rujukan ini berfungsi sebagai panduan orientasi dan nilai semakan semasa mengesahkan hasil."
        ],
        "tables": [
          {
            "headers": ["Sudut A", "Sisi bersebelahan b", "Sisi bertentangan a", "Nisbah kotangen"],
            "rows": [
              ["30 deg", "sqrt(3)", "1", "Kira-kira 1.7321"],
              ["45 deg", "1", "1", "1"],
              ["60 deg", "1", "sqrt(3)", "Kira-kira 0.5774"],
              ["75 deg", "1", "Kira-kira 3.7321", "Kira-kira 0.2679"]
            ]
          }
        ],
        "figures": [
          {
            "alt": "Tiga segi tiga pada 30, 45, 60 darjah dengan nilai kotangen 1.7321, 1, 0.5774; kotangen jatuh apabila sudut membesar",
            "caption": "Apabila sudut A membesar, sisi bertentangan menjadi bahagian lebih besar daripada sisi bersebelahan, jadi cot(A) jatuh."
          }
        ]
      },
      "cot-recover": {
        "h2": "Cara mencari sudut apabila kotangen diketahui",
        "blocks": [
          {
            "kind": "p",
            "text": "Nisbah kotangen sendiri bukan sudut. Apabila nisbah diketahui dan sudut diperlukan, trigonometri songsang merapatkan jurang. Bagi nisbah kotangen positif dalam segi tiga bersudut tepat, ambil salingan untuk mendapatkan semula nisbah tangen, kemudian gunakan tangen songsang:"
          },
          {
            "kind": "p",
            "text": "[[[\\boxed{A=\\tan^{-1}\\left(\\frac{1}{\\cot(A)}\\right)}]]]"
          },
          {
            "kind": "p",
            "text": "Setara dengannya, kerana [[\\tan(A)=a/b]]:"
          },
          {
            "kind": "p",
            "text": "[[[\\boxed{A=\\tan^{-1}\\left(\\frac{a}{b}\\right)}]]]"
          },
          {
            "kind": "h3",
            "text": "Contoh kerja"
          },
          {
            "kind": "p",
            "text": "Diberi [[\\cot(A)=4/3]]: salingannya ialah [[\\tan(A)=3/4]], jadi [[A=\\tan^{-1}(3/4)]] dan [[\\boxed{A\\approx36.87^\\circ}]]. Tetapkan kalkulator saintifik kepada mod darjah sebelum menekan kekunci tangen songsang. Ini ialah pengiraan sudut yang berasingan; kalkulator nisbah kotangen pada halaman ini mengambil panjang sisi dan mengembalikan nisbah, bukan sudut."
          }
        ],
        "steps": [],
        "closingParagraphs": [],
        "tables": [],
        "figures": []
      },
      "cot-mistakes": {
        "h2": "Kesilapan biasa semasa mengira kotangen",
        "blocks": [],
        "steps": [
          "<strong>Menterbalikkan formula kepada [[a/b]] bukannya [[b/a]].</strong> Ini mengira tangen. Pembetulan: letakkan sisi bersebelahan di atas.",
          "<strong>Mengelirukan kotangen dengan tangen.</strong> Melaporkan 0.75 bagi segi tiga 3-4-5. Pembetulan: tangen ialah bertentangan atas bersebelahan; kotangen ialah pecahan terbalik.",
          "<strong>Mengelirukan kotangen dengan kosinus.</strong> Menggunakan [[b/c]]. Pembetulan: kosinus memerlukan hipotenus; kotangen tidak pernah menyentuhnya.",
          "<strong>Menggunakan hipotenus bukannya salah satu daripada dua kaki.</strong> Mengira [[b/c]] atau [[c/a]]. Pembetulan: penyebut ialah kaki bertentangan [[a]], bukan [[c]].",
          "<strong>Menukar sisi bersebelahan dan bertentangan.</strong> Memilih kaki yang salah. Pembetulan: jejaki dari sudut [[A]]: kaki yang menyentuhnya ialah bersebelahan, yang di hadapannya ialah bertentangan.",
          "<strong>Lupa bahawa label sisi bergantung pada sudut rujukan.</strong> Menggunakan label yang dilukis bagi sudut [[B]]. Pembetulan: label semula setiap kali sudut rujukan berubah.",
          "<strong>Menganggap kotangen mesti antara 0 dan 1.</strong> Menganggap 2.4 atau 12 sebagai ralat. Pembetulan: nilai itu baik-baik sahaja; hanya sinus dan kosinus dihadkan pada 1.",
          "<strong>Menganggap kotangen 1 bermaksud segi tiga tidak sah.</strong> Pembetulan: [[\\cot(A)=1]] cuma bermaksud kaki sama panjang dan sudut [[45^\\circ]], segi tiga yang sah sepenuhnya.",
          "<strong>Melaporkan nisbah dengan meter atau sentimeter.</strong> Menulis 1.3333 m. Pembetulan: unit sudah terhapus, jadi laporkan nombor biasa.",
          "<strong>Memasukkan panjang sisi sifar atau negatif.</strong> Pembahagian dengan sifar atau nisbah negatif yang tidak bermakna. Pembetulan: gunakan panjang positif sahaja.",
          "<strong>Mencampur unit ukuran.</strong> Meter dibahagi sentimeter memesongkan nisbah sebanyak 100. Pembetulan: tukar kedua-dua sisi kepada satu unit dahulu.",
          "<strong>Membundar terlalu awal.</strong> Membundarkan [[4/3]] kepada 1.33 sebelum mengesahkan menambah ralat yang boleh dielak. Pembetulan: simpan digit tambahan sehingga langkah akhir.",
          "<strong>Menganggap kotangen ialah sudut dalam darjah.</strong> Membaca 1.3333 sebagai 1.3333 darjah. Pembetulan: ia nisbah; sudut memerlukan tangen songsang.",
          "<strong>Mengelirukan tangen salingan dengan tangen songsang.</strong> Menulis [[1/\\tan(A)]] apabila [[\\tan^{-1}(a/b)]] diperlukan, atau sebaliknya. Pembetulan: salingan menterbalikkan pecahan; songsang mendapatkan semula sudut.",
          "<strong>Menganggap nilai kotangen menentukan saiz segi tiga.</strong> Dua segi tiga yang sangat berbeza boleh berkongsi [[\\cot(A)=1.3333]]. Pembetulan: nisbah menetapkan bentuk, bukan skala."
        ],
        "closingParagraphs": [
          "<strong>Salah lawan betul.</strong> Diberi [[b=4]] dan [[a=3]]:",
          "Salah: [[3/4=0.75]]. Ini nisbah tangen, bukan kotangen.",
          "Betul: [[\\cot(A)=4/3\\approx1.3333]]. Sahkan: [[\\tan(A)=3/4=0.75]] dan [[1/0.75\\approx1.3333]], yang mengesahkan hubungan salingan."
        ],
        "tables": [],
        "figures": []
      },
      "cot-verify": {
        "h2": "Cara menyemak sama ada hasil kotangen anda sah",
        "blocks": [
          {
            "kind": "p",
            "text": "Segi tiga bersudut tepat yang sah dan tidak merosot memerlukan kaki positif, [[a \\gt 0]] dan [[b \\gt 0]], jadi hasil kotangen mestilah nombor positif yang terhingga:"
          },
          {
            "kind": "p",
            "text": "[[[\\boxed{\\cot(A)=\\frac{b}{a} \\gt 0}]]]"
          },
          {
            "kind": "p",
            "text": "Kedua-dua ukuran mesti menggunakan unit yang serasi. Hasil yang lebih besar daripada 1, sama dengan 1, atau kurang daripada 1 semuanya boleh sah; berbeza dengan sinus dan kosinus, kotangen tidak dihadkan pada 1."
          },
          {
            "kind": "h3",
            "text": "Kaedah 1: semak salingan tangen"
          },
          {
            "kind": "p",
            "text": "Sahkan [[\\tan(A)=a/b]], kemudian pastikan [[\\cot(A)=1/\\tan(A)]]. Dengan [[a=3]] dan [[b=4]]: [[\\tan(A)=3/4=0.75]], jadi [[\\cot(A)=1/0.75\\approx1.3333]]. Ketidakpadanan antara dua laluan menandakan pecahan terbalik atau sisi tersalah label."
          },
          {
            "kind": "h3",
            "text": "Kaedah 2: semak teorem Pythagoras"
          },
          {
            "kind": "p",
            "text": "Jika hipotenus diketahui atau diperlukan, kira [[c=\\sqrt{a^2+b^2}]]. Bagi [[a=3]] dan [[b=4]]: [[c=\\sqrt{9+16}=5]], dan [[3^2+4^2=5^2]]. Ini mengesahkan panjang sisi membentuk segi tiga bersudut tepat yang tulen. Hipotenus ialah nilai pengesahan di sini, bukan sebahagian formula kotangen utama."
          },
          {
            "kind": "h3",
            "text": "Kaedah 3: semak hubungan sudut"
          },
          {
            "kind": "p",
            "text": "Bagi nisbah kotangen yang diketahui, dapatkan semula sudut dengan [[A=\\tan^{-1}(a/b)]]. Dengan [[a=3]] dan [[b=4]]: [[A\\approx36.87^\\circ]]. Kerana sisi bersebelahan lebih panjang daripada sisi bertentangan, sudut sepatutnya mendarat di bawah [[45^\\circ]]; jika tidak, label sisi mungkin tertukar. Perbezaan kecil mungkin timbul daripada pembundaran."
          }
        ],
        "steps": [],
        "closingParagraphs": [],
        "tables": [],
        "figures": []
      },
      "cot-vs": {
        "h2": "Kotangen lawan tangen, sinus dan kosinus",
        "blocks": [
          {
            "kind": "p",
            "text": "Setiap nisbah membandingkan pasangan sisi yang berbeza, menggunakan sudut rujukan dan label sisi yang sama:"
          }
        ],
        "steps": [],
        "closingParagraphs": [
          "Kotangen dan tangen ialah pasangan salingan: [[\\cot(A)=1/\\tan(A)]]. Jika [[\\tan(A)=0.75]], maka [[\\cot(A)\\approx1.3333]]. Gunakan kotangen apabila formula memanggil sisi bersebelahan dibahagi sisi bertentangan, apabila anda mengusahakan hubungan jarak-mendatar-kepada-kenaikan, atau apabila hanya dua kaki diketahui; gunakan tangen untuk kenaikan-kepada-jarak-mendatar, sinus untuk sisi bertentangan melawan hipotenus, dan kosinus untuk sisi bersebelahan melawan hipotenus.",
          "Bagi nisbah jiran, lihat <a href=\"/sine-ratio-calculator/\" class=\"text-primary hover:underline\">Kalkulator Nisbah Sinus</a>, <a href=\"/cosine-ratio-calculator/\" class=\"text-primary hover:underline\">Kalkulator Nisbah Kosinus</a>, <a href=\"/tangent-ratio-calculator/\" class=\"text-primary hover:underline\">Kalkulator Nisbah Tangen</a>, <a href=\"/secant-ratio-calculator/\" class=\"text-primary hover:underline\">Kalkulator Nisbah Sekan</a> dan <a href=\"/cosecant-ratio-calculator/\" class=\"text-primary hover:underline\">Kalkulator Nisbah Kosekan</a>."
        ],
        "tables": [
          {
            "headers": ["Nisbah", "Formula", "Apa yang dibandingkannya"],
            "rows": [
              ["Sinus", "sin(A) = a/c", "Sisi bertentangan dengan hipotenus"],
              ["Kosinus", "cos(A) = b/c", "Sisi bersebelahan dengan hipotenus"],
              ["Tangen", "tan(A) = a/b", "Sisi bertentangan dengan sisi bersebelahan"],
              ["Kotangen", "cot(A) = b/a", "Sisi bersebelahan dengan sisi bertentangan"],
              ["Sekan", "sec(A) = c/b", "Hipotenus dengan sisi bersebelahan"],
              ["Kosekan", "csc(A) = c/a", "Hipotenus dengan sisi bertentangan"]
            ]
          }
        ],
        "figures": []
      },
      "cot-related": {
        "h2": "Terokai kalkulator trigonometri berkaitan",
        "blocks": [],
        "steps": [],
        "closingParagraphs": [],
        "related": [
          { "name": "Kalkulator Nisbah Sinus" },
          { "name": "Kalkulator Nisbah Kosinus" },
          { "name": "Kalkulator Nisbah Tangen" },
          { "name": "Kalkulator Nisbah Sekan" },
          { "name": "Kalkulator Nisbah Kosekan" },
          { "name": "Kalkulator Sudut Segi Tiga Bersudut Tepat" }
        ],
        "tables": [],
        "figures": []
      }
    },
    "faqs": [
      {
        "question": "Apakah formula kotangen bagi segi tiga bersudut tepat?",
        "answer": "cot(A) = b / a: bahagikan sisi bersebelahan dengan sudut A dengan sisi bertentangan dengan sudut A. Dengan sisi bersebelahan 4 cm dan sisi bertentangan 3 cm, hasilnya ialah 4/3, kira-kira 1.3333."
      },
      {
        "question": "Bagaimanakah kotangen berkaitan dengan tangen?",
        "answer": "Kotangen ialah salingan tangen: cot(A) = 1 / tan(A). Jika tan(A) = 3/4 = 0.75, maka cot(A) = 4/3, kira-kira 1.3333. Dua nisbah itu menggambarkan segi tiga yang sama dari perspektif terbalik, dan semakan salingan ialah cara terpantas untuk mengesahkan hasil."
      },
      {
        "question": "Apakah perbezaan antara kotangen dan kosinus?",
        "answer": "Kotangen membahagikan sisi bersebelahan dengan sisi bertentangan (b/a), menggunakan dua kaki sahaja. Kosinus membahagikan sisi bersebelahan dengan hipotenus (b/c). Kotangen ialah salingan tangen, bukan salingan kosinus; perbezaan itu ialah salah satu kesilapan yang paling banyak diuji dalam trigonometri awal."
      },
      {
        "question": "Bolehkah kotangen lebih besar daripada 1?",
        "answer": "Ya. Kotangen tidak mempunyai siling 0-hingga-1 kerana tiada hipotenus terlibat. Apabila sisi bersebelahan lebih panjang daripada sisi bertentangan, hasilnya melebihi 1: bagi sudut 30 darjah, cot(30 deg) kira-kira 1.7321. Nilai 2.4, 12, atau sebarang nombor positif terhingga semuanya mungkin."
      },
      {
        "question": "Apakah maksud nilai kotangen 1?",
        "answer": "Sisi bersebelahan dan bertentangan sama panjang, jadi segi tiga itu sama kaki pada sudut rujukan dan sudut A ialah 45 darjah. Sisi bersebelahan 6 cm dan sisi bertentangan 6 cm memberikan cot(A) = 6/6 = 1."
      },
      {
        "question": "Bolehkah kotangen kurang daripada 1?",
        "answer": "Ya, apabila sisi bertentangan lebih panjang daripada sisi bersebelahan. Sisi bersebelahan 6 m dan sisi bertentangan 8 m memberikan cot(A) = 6/8 = 0.75, dan sudut rujukan kemudiannya lebih besar daripada 45 darjah."
      },
      {
        "question": "Adakah kotangen mempunyai unit ukuran?",
        "answer": "Tidak. Kedua-dua input ialah panjang yang diukur dalam unit yang sama, jadi unit terhapus: 4 m / 3 m = 4/3, tepat seperti 400 cm / 300 cm = 4/3. Laporkan kotangen sebagai nombor biasa tanpa dimensi, jangan sekali-kali dilekatkan darjah, meter atau kaki."
      },
      {
        "question": "Bagaimana mengira kotangen daripada panjang sisi?",
        "answer": "Ukur sisi bersebelahan b dan sisi bertentangan a dalam unit yang sama, pastikan kedua-duanya positif, kemudian bahagi: cot(A) = b / a. Pada halaman ini, masukkan sisi bersebelahan dalam medan pertama dan sisi bertentangan dalam medan kedua, pilih unit yang serasi, dan klik Kira cot(A)."
      },
      {
        "question": "Bagaimana saya boleh mencari sudut daripada nisbah kotangen?",
        "answer": "Ambil salingan untuk mendapatkan nisbah tangen, kemudian gunakan tangen songsang: A = tan^-1(a / b). Bagi cot(A) = 4/3, nisbah tangen ialah 3/4, jadi A = tan^-1(0.75), kira-kira 36.87 darjah. Tetapkan kalkulator saintifik anda kepada mod darjah dahulu. Kalkulator halaman ini mengembalikan nisbah, bukan sudut."
      },
      {
        "question": "Adakah kalkulator kotangen memerlukan hipotenus?",
        "answer": "Tidak. Nisbah kotangen asas hanya menggunakan dua sisi yang berserenjang, jadi hipotenus tidak pernah masuk dalam formula. Ia menjadi relevan hanya untuk kerja susulan dengan sinus, kosinus, sekan atau kosekan, atau apabila teorem Pythagoras digunakan untuk mengesahkan segi tiga."
      },
      {
        "question": "Apakah maksud kotangen dari segi jarak mendatar dan kenaikan?",
        "answer": "Apabila sudut A diukur dari garis mendatar, cot(A) ialah jarak mendatar dibahagi kenaikan menegak. Kotangen 0.75 bermaksud jarak mendatar ialah 75 peratus daripada kenaikan menegak; kotangen 12 bermaksud jarak ialah dua belas kali kenaikan. Tangen ialah idea yang sama secara terbalik: kenaikan dibahagi jarak mendatar."
      },
      {
        "question": "Bilakah saya harus menggunakan kotangen bukannya tangen?",
        "answer": "Gunakan kotangen apabila formula atau prosedur secara khusus memanggil sisi bersebelahan dibahagi sisi bertentangan, apabila anda membandingkan jarak mendatar dengan kenaikan menegak, atau apabila sisi yang diketahui ialah dua kaki. Jika hubungan yang diketahui ialah kenaikan atas jarak mendatar, atau bertentangan atas bersebelahan, tangen ialah pilihan langsung."
      }
    ],
    "faqHeading": "Soalan lazim",
    "relatedHeading": "Terokai kalkulator trigonometri berkaitan",
    "conclusion": {
      "h2": "Gunakan nisbah kotangen dengan yakin",
      "paragraphs": [
        "Kotangen ialah bentuk terbalik tangen: bahagikan sisi bersebelahan dengan sisi bertentangan dan anda telah menggambarkan bentuk jarak-mendatar-kepada-kenaikan segi tiga. Formula [[\\cot(A)=b/a]] hanya memerlukan dua ukuran, jawapannya sentiasa nombor positif tanpa dimensi, dan ia boleh berada di atas, pada, atau di bawah 1 bergantung pada kaki mana yang lebih panjang. Apabila sudut itu sendiri diperlukan, [[A=\\tan^{-1}(a/b)]] mendapatkannya semula. Tangga, bumbung, tanjakan, atau 3-4-5 buku teks, kaedahnya tidak pernah berubah: kenal pasti sisi bersebelahan, kenal pasti sisi bertentangan, bahagi, dan sahkan dengan salingan tangen."
      ]
    }
  },
  "pl": {
    "tocHeading": "W tym przewodniku",
    "tocItems": {
      "cot-intro": "Czym jest kalkulator stosunku cotangensa?",
      "cot-triangle": "Zrozumienie boku przyległego i boku przeciwległego",
      "cot-whatis": "Zrozumienie stosunku cotangensa",
      "cot-formula": "Jak działa wzór na cotangens",
      "cot-howto": "Jak korzystać z kalkulatora stosunku cotangensa",
      "cot-examples": "Przykłady obliczania cotangensa krok po kroku",
      "cot-applications": "Przykłady z życia codziennego użycia stosunku cotangensa",
      "cot-angle": "Zrozumienie związku między cotangensem a wielkością kąta",
      "cot-recover": "Jak znaleźć kąt, gdy znany jest cotangens",
      "cot-mistakes": "Typowe błędy przy obliczaniu cotangensa",
      "cot-verify": "Jak sprawdzić, czy wynik cotangensa jest poprawny",
      "cot-vs": "Cotangens a tangens, sinus i cosinus",
      "cot-related": "Odkryj powiązane kalkulatory trygonometryczne",
      "cot-faq": "Często zadawane pytania"
    },
    "sections": {
      "cot-intro": {
        "h2": "Czym jest kalkulator stosunku cotangensa?",
        "blocks": [
          {
            "kind": "p",
            "text": "Kalkulator stosunku cotangensa odpowiada na jedno pytanie: dla kąta ostrego w trójkącie prostokątnym, jak bok sąsiadujący z kątem ma się do boku leżącego naprzeciw niego? Wpisz dwie długości boków, a narzędzie podzieli bok przyległy przez bok przeciwległy, zwracając [[\\cot(A)=b/a]]. Przy boku przyległym 4 cm i boku przeciwległym 3 cm obliczenie to [[4/3\\approx1.3333]]: bok przyległy jest około 1.3333 raza dłuższy niż bok przeciwległy. Ten ułamek dziesiętny to cała odpowiedź. Nie niesie on jednostek, ponieważ centymetry skracają się w dzieleniu, i nie jest to kąt w stopniach. Przeciwprostokątna nigdy nie wchodzi do tego obliczenia; wystarczą dwie prostopadłe przyprostokątne. Cotangens jest też odwrotnością tangensa, dlatego wiele podręczników przedstawia go jako odwróconą postać [[\\tan(A)]]."
          }
        ],
        "steps": [],
        "closingParagraphs": [],
        "tables": [],
        "figures": []
      },
      "cot-triangle": {
        "h2": "Zrozumienie boku przyległego i boku przeciwległego",
        "blocks": [
          {
            "kind": "h3",
            "text": "Czym jest trójkąt prostokątny?"
          },
          {
            "kind": "p",
            "text": "Trójkąt prostokątny ma jeden kąt równy dokładnie [[90^\\circ]], czyli kąt między dwiema prostopadłymi liniami, jak ściana stykająca się z poziomą podłogą. Przeciwprostokątna leży naprzeciw tego kąta prostego i jest zawsze najdłuższym bokiem. Pozostałe dwa kąty dzielą między siebie resztę 90 stopni, więc oba są ostre. Dwie przyprostokątne spotykają się w kącie prostym, prostopadle do siebie, i to ich relację opisuje cotangens."
          },
          {
            "kind": "h3",
            "text": "Czym jest bok przyległy?"
          },
          {
            "kind": "p",
            "text": "Bok przyległy [[b]] to przyprostokątna, która styka się z kątem odniesienia [[A]], nie będąc przeciwprostokątną. W zadaniach praktycznych często pełni rolę poziomego zasięgu: odległości na ziemi od podstawy drabiny, poziomego rzutu dachu albo poziomej składowej siły. Wchodzi do licznika wzoru na cotangens. Która przyprostokątna liczy się jako przyległa, zależy od wybranego kąta odniesienia, więc przejście z kąta [[A]] na kąt [[B]] zamienia etykiety przyległy i przeciwległy."
          },
          {
            "kind": "h3",
            "text": "Czym jest bok przeciwległy?"
          },
          {
            "kind": "p",
            "text": "Bok przeciwległy [[a]] leży dokładnie naprzeciw kąta [[A]] i nigdy nie dotyka jego wierzchołka. W zadaniach praktycznych często pełni rolę pionowego wzniesienia: wysokości ściany, różnicy wzniesień albo pionowej składowej pomiaru. Wchodzi do mianownika wzoru na cotangens, co oznacza, że jego powiększenie zmniejsza stosunek, a pomniejszenie go zwiększa stosunek."
          },
          {
            "kind": "h3",
            "text": "Czym jest przeciwprostokątna?"
          },
          {
            "kind": "p",
            "text": "Przeciwprostokątna [[c]] to bok leżący naprzeciw kąta prostego: na każdym rysunku znajduje się naprzeciw małego kwadratu oznaczającego narożnik [[90^\\circ]] i jest ściśle dłuższa niż każda z przyprostokątnych. Nie odgrywa żadnej roli w podstawowym stosunku cotangensa, dlatego kalkulator nigdy jej nie żąda. Staje się istotna, gdy do pracy wkraczają sinus, cosinus, secans albo cosecans, albo gdy twierdzenie Pitagorasa służy do sprawdzenia, czy dwie przyprostokątne tworzą prawdziwy trójkąt prostokątny."
          }
        ],
        "steps": [],
        "closingParagraphs": [],
        "tables": [],
        "figures": [
          {
            "alt": "Trójkąt prostokątny z kątem A w lewym dolnym rogu, złoty bok przyległy b, zielony bok przeciwległy a, cot(A)=b/a",
            "caption": "Kąt A znajduje się w lewym dolnym rogu; cotangens wykorzystuje złoty bok przyległy b i zielony bok przeciwległy a, a nie przeciwprostokątną c."
          }
        ]
      },
      "cot-whatis": {
        "h2": "Zrozumienie stosunku cotangensa",
        "blocks": [
          {
            "kind": "p",
            "text": "Cotangens porównuje długość przy kącie odniesienia z długością leżącą naprzeciw niego:"
          },
          {
            "kind": "p",
            "text": "[[[\\cot(A)=\\frac{b}{a}]]]"
          },
          {
            "kind": "p",
            "text": "Tutaj [[\\cot(A)]] to cotangens kąta [[A]], [[b]] to bok przyległy, a [[a]] to bok przeciwległy: ile razy bok przeciwległy mieści się w boku przyległym."
          },
          {
            "kind": "h3",
            "text": "Cotangens jako odwrotność tangensa"
          },
          {
            "kind": "p",
            "text": "Tangens dzieli bok przeciwległy przez bok przyległy, [[\\tan(A)=a/b]]. Wzięcie odwrotności odwraca ten ułamek, [[1/\\tan(A)=b/a]], co jest dokładnie wzorem na cotangens:"
          },
          {
            "kind": "p",
            "text": "[[[\\boxed{\\cot(A)=\\frac{1}{\\tan(A)}=\\frac{b}{a}}]]]]"
          },
          {
            "kind": "p",
            "text": "Przy [[\\tan(A)=3/4=0.75]] odwrotnością jest [[\\cot(A)=1/0.75=4/3\\approx1.3333]]: ten sam trójkąt, opisany z przeciwnego kierunku. To rozróżnienie ma znaczenie, ponieważ [[\\tan^{-1}]] oznacza funkcję odwrotną do tangensa, natomiast [[1/\\tan(A)]] to odwrotność tangensa: powiązane pojęcia, różne znaczenia, różne odpowiedzi."
          },
          {
            "kind": "h3",
            "text": "Zrozumienie cotangensa jako zasięgu poziomego podzielonego przez wzniesienie"
          },
          {
            "kind": "p",
            "text": "Gdy kąt [[A]] mierzy się od poziomu, bok przyległy może reprezentować poziomy zasięg, a bok przeciwległy pionowe wzniesienie. Wtedy [[\\cot(A)=\\frac{\\text{Horizontal run}}{\\text{Vertical rise}}]]. Tangens daje tę samą relację odwróconą, wzniesienie podzielone przez zasięg. To odczytanie zasięgu nad wzniesieniem czyni cotangens naturalnym stosunkiem dla pytań typu „ile poziomego dystansu przypada na ile wysokości?” i zależy ono od wybranego kąta odniesienia oraz geometrii sytuacji."
          },
          {
            "kind": "h3",
            "text": "Co oznacza wartość cotangensa?"
          },
          {
            "kind": "p",
            "text": "Cotangens większy niż 1 oznacza, że bok przyległy jest dłuższy niż bok przeciwległy, a kąt odniesienia jest mniejszy niż [[45^\\circ]]. Cotangens równy 1 oznacza, że dwie przyprostokątne są równe, a kąt [[A]] to dokładnie [[45^\\circ]]. Cotangens między 0 a 1 oznacza, że bok przeciwległy jest dłuższy niż przyległy, a kąt odniesienia leży między [[45^\\circ]] a [[90^\\circ]]."
          },
          {
            "kind": "h3",
            "text": "Dlaczego cotangens może być większy niż 1"
          },
          {
            "kind": "p",
            "text": "W przeciwieństwie do sinusa i cosinusa cotangens nie ma pułapu 0 do 1, ponieważ przeciwprostokątna nigdy nie wchodzi do dzielenia. Dla [[\\cot(A)=8/2=4]] bok przyległy jest po prostu cztery razy dłuższy niż bok przeciwległy, a kąt odniesienia to stosunkowo mały kąt ostry. Możliwa jest każda dodatnia wartość skończona."
          },
          {
            "kind": "h3",
            "text": "Dlaczego cotangens może być mniejszy niż 1"
          },
          {
            "kind": "p",
            "text": "Dla [[\\cot(A)=3/6=0.5]] bok przyległy jest połową boku przeciwległego, więc kąt odniesienia to stosunkowo duży kąt ostry. Stosunek spada poniżej 1 i nic nie jest nie tak: to po prostu sygnatura wyższego, węższego trójkąta."
          },
          {
            "kind": "h3",
            "text": "Dlaczego cotangens jest stosunkiem bezwymiarowym"
          },
          {
            "kind": "p",
            "text": "Dzielenie jednej długości przez drugą skraca jednostki: [[4\\text{ m}/3\\text{ m}=4/3]], a także [[400\\text{ cm}/300\\text{ cm}=4/3]]. Liczba opisuje kształt trójkąta, a nie pomiar z jednostkami fizycznymi, więc zapisuj wynik jako zwykłą liczbę, nigdy z dołączonymi metrami, centymetrami ani stopniami."
          }
        ],
        "steps": [],
        "closingParagraphs": [],
        "tables": [],
        "figures": [
          {
            "alt": "Trzy etapy: oznaczony trójkąt 3-4-5, tangens tan(A)=3/4=0.75, cotangens cot(A)=4/3=1.3333, zależność odwrotna",
            "caption": "Trzy etapy: oznacz trójkąt 3-4-5, oblicz tangens tan(A) = 3/4, a potem odwróć ułamek, aby otrzymać cot(A) = 4/3."
          }
        ]
      },
      "cot-formula": {
        "h2": "Jak działa wzór na cotangens",
        "blocks": [
          {
            "kind": "p",
            "text": "Zacznij od definicji: cotangens to bok przyległy podzielony przez bok przeciwległy. W zapisie tej strony:"
          },
          {
            "kind": "p",
            "text": "[[[\\boxed{\\cot(A)=\\frac{b}{a}}]]]]"
          },
          {
            "kind": "p",
            "text": "Bok przyległy jest licznikiem, ponieważ to porównywana długość; bok przeciwległy jest mianownikiem, ponieważ to długość odniesienia, jednostka „ile tych mieści się w tamtym”. Zamiana ich daje zamiast tego stosunek tangensa."
          },
          {
            "kind": "h3",
            "text": "W pełni rozwiązany przykład: trójkąt prostokątny 3-4-5"
          },
          {
            "kind": "p",
            "text": "Dane: [[b=4\\text{ cm}]], [[a=3\\text{ cm}]], [[c=5\\text{ cm}]]:"
          },
          {
            "kind": "p",
            "text": "Krok 1: Zapisz wzór. [[\\cot(A)=b/a]]"
          },
          {
            "kind": "p",
            "text": "Krok 2: Podstaw pomiary. [[\\cot(A)=4/3]]"
          },
          {
            "kind": "p",
            "text": "Krok 3: Podziel. [[\\boxed{\\cot(A)\\approx1.3333}]]"
          },
          {
            "kind": "p",
            "text": "Krok 4: Zinterpretuj odpowiedź. Bok przyległy jest około 1.3333 raza dłuższy niż bok przeciwległy."
          },
          {
            "kind": "p",
            "text": "Krok 5: Zweryfikuj stosunkiem tangensa. [[\\tan(A)=3/4=0.75]], a [[1/0.75\\approx1.3333]]. Obie drogi prowadzą do tej samej liczby, a tak właśnie zachowują się stosunki odwrotne."
          }
        ],
        "steps": [],
        "closingParagraphs": [],
        "tables": [],
        "figures": []
      },
      "cot-howto": {
        "h2": "Jak korzystać z kalkulatora stosunku cotangensa",
        "blocks": [
          {
            "kind": "p",
            "text": "Poniższa instrukcja odpowiada rzeczywistemu interfejsowi tej strony."
          }
        ],
        "steps": [
          "<strong>Zidentyfikuj kąt odniesienia [[A]],</strong> ponieważ boki przyległy i przeciwległy są zdefiniowane względem niego.",
          "<strong>Zlokalizuj bok przyległy [[b]]:</strong> przyprostokątną stykającą się z kątem [[A]], która nie jest przeciwprostokątną.",
          "<strong>Zlokalizuj bok przeciwległy [[a]]:</strong> przyprostokątną dokładnie naprzeciw kąta [[A]], tę, która nigdy nie dotyka jego wierzchołka.",
          "<strong>Zmierz lub pozyskaj obie długości boków</strong> w tej samej jednostce.",
          "<strong>Wpisz długość boku przyległego</strong> w pierwszym polu wejściowym.",
          "<strong>Wpisz długość boku przeciwległego</strong> w drugim polu wejściowym.",
          "<strong>Wybierz pasujące jednostki w selektorach jednostek</strong>, aby dzielenie porównywało porównywalne z porównywalnym.",
          "<strong>Potwierdź, że oba pomiary są dodatnie;</strong> długości zerowe lub ujemne nie mogą utworzyć prawdziwego trójkąta.",
          "<strong>Kliknij Oblicz cot(A)</strong>, aby podzielić bok przyległy przez bok przeciwległy.",
          "<strong>Odczytaj stosunek cotangensa:</strong> bok przyległy wyrażony jako wielokrotność boku przeciwległego.",
          "<strong>Zinterpretuj wynik:</strong> większy niż 1 oznacza dłuższy bok przyległy, równy 1 oznacza równe przyprostokątne, mniejszy niż 1 oznacza dłuższy bok przeciwległy.",
          "<strong>Użyj Reset</strong>, aby wyczyścić dane wejściowe i zacząć od nowa."
        ],
        "closingParagraphs": [
          "Kalkulator nie pyta o przeciwprostokątną ani o kąt w stopniach: dwie dodatnie długości boków to kompletne dane wejściowe, a wynik jest zawsze dodatnią, bezwymiarową liczbą."
        ],
        "tables": [],
        "figures": []
      },
      "cot-examples": {
        "h2": "Przykłady obliczania cotangensa krok po kroku",
        "blocks": [
          {
            "kind": "p",
            "text": "Każdy przykład podąża za tym samym wzorcem: zapisz wzór, podstaw, podziel, zinterpretuj."
          },
          {
            "kind": "h3",
            "text": "Przykład 1: trójkąt prostokątny 3-4-5"
          },
          {
            "kind": "p",
            "text": "Dane: [[b=4\\text{ cm}]], [[a=3\\text{ cm}]], [[c=5\\text{ cm}]]:"
          },
          {
            "kind": "p",
            "text": "[[\\cot(A)=4/3]]"
          },
          {
            "kind": "p",
            "text": "[[\\boxed{\\cot(A)\\approx1.3333}]]"
          },
          {
            "kind": "p",
            "text": "Bok przyległy jest około 1.3333 raza dłuższy niż bok przeciwległy; przeciwprostokątna całkowicie wypada z obliczenia."
          },
          {
            "kind": "h3",
            "text": "Przykład 2: trójkąt prostokątny 5-12-13"
          },
          {
            "kind": "p",
            "text": "Dane: [[b=12\\text{ m}]], [[a=5\\text{ m}]], [[c=13\\text{ m}]]:"
          },
          {
            "kind": "p",
            "text": "[[\\cot(A)=12/5]]"
          },
          {
            "kind": "p",
            "text": "[[\\boxed{\\cot(A)=2.4}]]"
          },
          {
            "kind": "p",
            "text": "Stosunek jest większy niż 1, ponieważ bok przyległy jest dłuższą przyprostokątną; mówi nam, że bok przyległy jest 2.4 raza dłuższy niż bok przeciwległy, a nie jak duży jest trójkąt."
          },
          {
            "kind": "h3",
            "text": "Przykład 3: trójkąt prostokątny równoramienny"
          },
          {
            "kind": "p",
            "text": "Dane: [[b=6\\text{ cm}]], [[a=6\\text{ cm}]], [[c=6\\sqrt{2}\\text{ cm}]]:"
          },
          {
            "kind": "p",
            "text": "[[\\cot(A)=6/6]]"
          },
          {
            "kind": "p",
            "text": "[[\\boxed{\\cot(A)=1}]]"
          },
          {
            "kind": "p",
            "text": "Równe przyprostokątne dają stosunek równy dokładnie 1, co jest sygnaturą kąta odniesienia [[45^\\circ]]."
          },
          {
            "kind": "h3",
            "text": "Przykład 4: trójkąt z mniejszym bokiem przyległym"
          },
          {
            "kind": "p",
            "text": "Dane: [[b=6\\text{ m}]] i [[a=8\\text{ m}]]:"
          },
          {
            "kind": "p",
            "text": "[[\\cot(A)=6/8]]"
          },
          {
            "kind": "p",
            "text": "[[\\boxed{\\cot(A)=0.75}]]"
          },
          {
            "kind": "p",
            "text": "Wynik jest mniejszy niż 1, ponieważ bok przeciwległy jest dłuższą przyprostokątną, więc kąt odniesienia jest większy niż [[45^\\circ]]."
          }
        ],
        "steps": [],
        "closingParagraphs": [],
        "tables": [],
        "figures": []
      },
      "cot-applications": {
        "h2": "Przykłady z życia codziennego użycia stosunku cotangensa",
        "blocks": [
          {
            "kind": "p",
            "text": "Cotangens jest stosunkiem matematycznym, a nie wielkością fizyczną z jednostkami. Jego praktyczna wartość leży w porównywaniu poziomego zasięgu z pionowym wzniesieniem, sprawdzaniu geometrii trójkątów i używaniu wzorów, które wprost wymagają boku przyległego podzielonego przez przeciwległy. Każdy przykład zakłada uproszczony trójkąt prostokątny, a żaden z tych stosunków sam w sobie nie rozstrzyga kwestii bezpieczeństwa, wytrzymałości ani zgodności z przepisami."
          },
          {
            "kind": "h3",
            "text": "Przykład 5: wyznaczanie stosunku zasięgu do wzniesienia drabiny"
          },
          {
            "kind": "p",
            "text": "Drabina opiera się o pionową ścianę. Jej podstawa znajduje się 3 m od ściany, a sięga 4 m w górę ściany. Odległość pozioma to bok przyległy [[b=3\\text{ m}]], pionowy zasięg to bok przeciwległy [[a=4\\text{ m}]]. [[\\cot(A)=3/4]], więc [[\\boxed{\\cot(A)=0.75}]]: odległość pozioma to 75 procent wysokości pionowej. Stosunek opisuje geometrię drabiny; nie określa, czy drabina jest ustawiona bezpiecznie."
          },
          {
            "kind": "h3",
            "text": "Przykład 6: obliczanie stosunku zasięgu do wzniesienia dachu"
          },
          {
            "kind": "p",
            "text": "Fragment dachu ma poziomy zasięg 4 m i pionowe wzniesienie 3 m. Tutaj [[b=4\\text{ m}]] i [[a=3\\text{ m}]]. [[\\cot(A)=4/3]], więc [[\\boxed{\\cot(A)\\approx1.3333}]]: poziomy zasięg jest około 1.3333 raza większy niż pionowe wzniesienie. Ten stosunek nie jest pełną oceną konstrukcyjną ani oceną przepisów dachowych."
          },
          {
            "kind": "h3",
            "text": "Przykład 7: ocena stosunku cotangensa rampy"
          },
          {
            "kind": "p",
            "text": "Uproszczona rampa ma poziomy zasięg 9 m i pionowe wzniesienie 0.75 m. Przy [[b=9\\text{ m}]] i [[a=0.75\\text{ m}]]: [[\\cot(A)=9/0.75]], więc [[\\boxed{\\cot(A)=12}]]. Poziomy zasięg jest 12 razy większy niż pionowe wzniesienie, co jest sygnaturą łagodnego nachylenia. Sam stosunek nie określa dostępności ani zgodności z przepisami budowlanymi."
          },
          {
            "kind": "h3",
            "text": "Przykład 8: pomiar geodezyjny"
          },
          {
            "kind": "p",
            "text": "Uproszczony trójkąt geodezyjny ma odległość poziomą 40 m i pionową różnicę wzniesień 30 m. Przy [[b=40\\text{ m}]] i [[a=30\\text{ m}]]: [[\\cot(A)=40/30]], więc [[\\boxed{\\cot(A)\\approx1.3333}]]. Stosunek porównuje bezpośrednio poziomą odległość z pionową różnicą. Rzeczywiste pomiary geodezyjne mogą wymagać dodatkowych pomiarów, poprawek i procedur przyrządowych."
          },
          {
            "kind": "h3",
            "text": "Przykład 9: odciąg podtrzymujący słup"
          },
          {
            "kind": "p",
            "text": "Odciąg łączy słup z kotwą w ziemi. Kotwa znajduje się 12 m w poziomie od słupa, a punkt mocowania jest 5 m nad ziemią. Przy [[b=12\\text{ m}]] i [[a=5\\text{ m}]]: [[\\cot(A)=12/5]], więc [[\\boxed{\\cot(A)=2.4}]]. Odległość pozioma jest 2.4 raza większa niż pionowa odległość. Ten stosunek nie ustala naprężenia liny, wytrzymałości kotwy ani bezpieczeństwa konstrukcji."
          },
          {
            "kind": "h3",
            "text": "Przykład 10: zrozumienie stosunku zasięgu do wzniesienia schodów"
          },
          {
            "kind": "p",
            "text": "Uproszczone schody mają poziomy zasięg 4 m i pionowe wzniesienie 3 m. Przy [[b=4\\text{ m}]] i [[a=3\\text{ m}]]: [[\\cot(A)=4/3]], więc [[\\boxed{\\cot(A)\\approx1.3333}]]. Poziomy zasięg jest około 1.3333 raza większy niż pionowe wzniesienie. Przykład opisuje wyidealizowaną przekątną i nie weryfikuje wymiarów schodów ani zgodności z przepisami."
          },
          {
            "kind": "h3",
            "text": "Przykład 11: pozioma i pionowa składowa wysięgnika dźwigu"
          },
          {
            "kind": "p",
            "text": "Uproszczony wysięgnik dźwigu tworzy trójkąt prostokątny o poziomym rzucie 6 m i pionowym wzniesieniu 8 m. Przy [[b=6\\text{ m}]] i [[a=8\\text{ m}]]: [[\\cot(A)=6/8]], więc [[\\boxed{\\cot(A)=0.75}]]. Poziomy rzut to 75 procent składowej pionowej. Stosunek nie ustala udźwigu ani bezpieczeństwa pracy."
          },
          {
            "kind": "h3",
            "text": "Przykład 12: prosty odcinek lotu samolotu"
          },
          {
            "kind": "p",
            "text": "W uproszczonym odcinku lotu samolot porusza się po prostej drodze z poziomym przemieszczeniem 4 km i pionowym wznoszeniem 3 km. Przy [[b=4\\text{ km}]] i [[a=3\\text{ km}]]: [[\\cot(A)=4/3]], więc [[\\boxed{\\cot(A)\\approx1.3333}]]. Poziome przemieszczenie jest około 1.3333 raza większe niż pionowe wznoszenie. To wyidealizowany model geometryczny, a nie pełne obliczenie nawigacji lotniczej."
          },
          {
            "kind": "h3",
            "text": "Przykład 13: ukośne wzmocnienie mechaniczne"
          },
          {
            "kind": "p",
            "text": "Ukośne wzmocnienie ma poziome przesunięcie 1.2 m i pionowe wzniesienie 1.6 m. Przy [[b=1.2\\text{ m}]] i [[a=1.6\\text{ m}]]: [[\\cot(A)=1.2/1.6]], więc [[\\boxed{\\cot(A)=0.75}]]. Poziome przesunięcie to 75 procent pionowego wzniesienia. Stosunek nie określa wytrzymałości ani przydatności wzmocnienia."
          },
          {
            "kind": "h3",
            "text": "Przykład 14: prosty odcinek szlaku turystycznego"
          },
          {
            "kind": "p",
            "text": "Uproszczony prosty odcinek szlaku turystycznego ma poziome przemieszczenie 80 m i pionowe wzniesienie 60 m. Przy [[b=80\\text{ m}]] i [[a=60\\text{ m}]]: [[\\cot(A)=80/60]], więc [[\\boxed{\\cot(A)\\approx1.3333}]]. Poziome przemieszczenie jest około 1.3333 raza większe niż przyrost wysokości. Prawdziwe szlaki mogą mieć zakręty i zmienne nachylenia."
          },
          {
            "kind": "h3",
            "text": "Przykład 15: wspornik markizy"
          },
          {
            "kind": "p",
            "text": "Ukośny wspornik markizy ma poziomy rzut 2.4 m i pionowe wzniesienie 1.8 m. Przy [[b=2.4\\text{ m}]] i [[a=1.8\\text{ m}]]: [[\\cot(A)=2.4/1.8]], więc [[\\boxed{\\cot(A)\\approx1.3333}]]. Stosunek opisuje poziomy rzut względem pionowego wzniesienia. To obliczenie nie ustala przydatności konstrukcyjnej."
          },
          {
            "kind": "h3",
            "text": "Przykład 16: lina między dwiema różnymi wysokościami"
          },
          {
            "kind": "p",
            "text": "Prosta lina rozciąga się poziomo na 24 m między dwoma punktami o pionowej różnicy 7 m. Przy [[b=24\\text{ m}]] i [[a=7\\text{ m}]]: [[\\cot(A)=24/7]], więc [[\\boxed{\\cot(A)\\approx3.4286}]]. Pozioma odległość jest około 3.4286 raza większa niż pionowa różnica. Model zakłada linię prostą między punktami końcowymi."
          },
          {
            "kind": "h3",
            "text": "Porównanie przykładów praktycznych"
          },
          {
            "kind": "p",
            "text": "Wzorzec utrzymuje się wszędzie: stosunek jest duży, gdy bok przyległy znacznie przewyższa bok przeciwległy, i mały, gdy dominuje bok przeciwległy."
          }
        ],
        "steps": [],
        "closingParagraphs": [],
        "tables": [
          {
            "headers": ["Sytuacja", "Bok przyległy b", "Bok przeciwległy a", "Wzór na cotangens", "Obliczony stosunek", "Interpretacja"],
            "rows": [
              ["Drabina", "3 m", "4 m", "3/4", "0.75", "Zasięg to 75% pionowego zasięgu"],
              ["Dach", "4 m", "3 m", "4/3", "1.3333", "Zasięg to 1.3333 raza wzniesienie"],
              ["Rampa", "9 m", "0.75 m", "9/0.75", "12", "Zasięg to 12 razy wzniesienie"],
              ["Geodezja", "40 m", "30 m", "40/30", "1.3333", "Odległość to 1.3333 raza różnica wzniesień"],
              ["Odciąg", "12 m", "5 m", "12/5", "2.4", "Odległość to 2.4 raza wysokość"],
              ["Schody", "4 m", "3 m", "4/3", "1.3333", "Zasięg to 1.3333 raza wzniesienie"],
              ["Wysięgnik dźwigu", "6 m", "8 m", "6/8", "0.75", "Rzut to 75% wzniesienia"],
              ["Odcinek lotu", "4 km", "3 km", "4/3", "1.3333", "Przemieszczenie to 1.3333 raza wznoszenie"],
              ["Wzmocnienie", "1.2 m", "1.6 m", "1.2/1.6", "0.75", "Przesunięcie to 75% wzniesienia"],
              ["Szlak turystyczny", "80 m", "60 m", "80/60", "1.3333", "Przemieszczenie to 1.3333 raza wzniesienie"],
              ["Wspornik markizy", "2.4 m", "1.8 m", "2.4/1.8", "1.3333", "Rzut to 1.3333 raza wzniesienie"],
              ["Lina", "24 m", "7 m", "24/7", "3.4286", "Odległość to 3.4286 raza różnica wysokości"]
            ]
          }
        ],
        "figures": [
          {
            "alt": "Cztery panele: stosunek drabiny 0.75, dachu 1.3333, rampy 12, geodezji 1.3333, każdy z oznaczonym trójkątem",
            "caption": "Cztery praktyczne obliczenia: drabina, dach, rampa i geodezja, każde z trójkątem, wzorem i stosunkiem."
          }
        ]
      },
      "cot-angle": {
        "h2": "Zrozumienie związku między cotangensem a wielkością kąta",
        "blocks": [
          {
            "kind": "p",
            "text": "Cotangens maleje, gdy kąt ostry rośnie. Mały kąt utrzymuje bok przyległy znacznie dłuższy niż bok przeciwległy, więc stosunek jest duży; gdy kąt [[A]] otwiera się w stronę [[90^\\circ]], bok przeciwległy przejmuje prowadzenie i stosunek spada w stronę 0. Zweryfikowane wartości odniesienia poniżej pokazują ten wzorzec:"
          },
          {
            "kind": "p",
            "text": "Pomiary w tabeli są ilustracyjne: kąty wyznaczają stosunki, a nie bezwzględne długości. Stosunek rośnie bez ograniczeń, gdy kąt zbliża się do [[0^\\circ]], i zbliża się do 0, gdy kąt zbliża się do [[90^\\circ]], pozostając dodatni i skończony dla każdego poprawnego trójkąta."
          }
        ],
        "steps": [],
        "closingParagraphs": [
          "Kalkulator nie przyjmuje kąta jako danych wejściowych; te wartości odniesienia służą jako orientacja i wartości kontrolne przy weryfikacji wyniku."
        ],
        "tables": [
          {
            "headers": ["Kąt A", "Bok przyległy b", "Bok przeciwległy a", "Stosunek cotangensa"],
            "rows": [
              ["30 deg", "sqrt(3)", "1", "Około 1.7321"],
              ["45 deg", "1", "1", "1"],
              ["60 deg", "1", "sqrt(3)", "Około 0.5774"],
              ["75 deg", "1", "Około 3.7321", "Około 0.2679"]
            ]
          }
        ],
        "figures": [
          {
            "alt": "Trzy trójkąty przy 30, 45 i 60 stopniach o wartościach cotangensa 1.7321, 1, 0.5774; cotangens maleje ze wzrostem kąta",
            "caption": "Gdy kąt A rośnie, bok przeciwległy staje się większą częścią boku przyległego, więc cot(A) maleje."
          }
        ]
      },
      "cot-recover": {
        "h2": "Jak znaleźć kąt, gdy znany jest cotangens",
        "blocks": [
          {
            "kind": "p",
            "text": "Stosunek cotangensa sam w sobie nie jest kątem. Gdy stosunek jest znany, a potrzebny jest kąt, trygonometria odwrotna buduje most. Dla dodatniego stosunku cotangensa w trójkącie prostokątnym weź odwrotność, aby odzyskać stosunek tangensa, a następnie zastosuj tangens odwrotny:"
          },
          {
            "kind": "p",
            "text": "[[[\\boxed{A=\\tan^{-1}\\left(\\frac{1}{\\cot(A)}\\right)}]]]"
          },
          {
            "kind": "p",
            "text": "Równoważnie, ponieważ [[\\tan(A)=a/b]]:"
          },
          {
            "kind": "p",
            "text": "[[[\\boxed{A=\\tan^{-1}\\left(\\frac{a}{b}\\right)}]]]"
          },
          {
            "kind": "h3",
            "text": "Rozwiązany przykład"
          },
          {
            "kind": "p",
            "text": "Dane: [[\\cot(A)=4/3]]: odwrotnością jest [[\\tan(A)=3/4]], więc [[A=\\tan^{-1}(3/4)]] i [[\\boxed{A\\approx36.87^\\circ}]]. Ustaw kalkulator naukowy w tryb stopni przed naciśnięciem klawisza tangensa odwrotnego. To osobne obliczenie kąta; kalkulator stosunku cotangensa na tej stronie przyjmuje długości boków i zwraca stosunek, nigdy kąt."
          }
        ],
        "steps": [],
        "closingParagraphs": [],
        "tables": [],
        "figures": []
      },
      "cot-mistakes": {
        "h2": "Typowe błędy przy obliczaniu cotangensa",
        "blocks": [],
        "steps": [
          "<strong>Odwrócenie wzoru na [[a/b]] zamiast [[b/a]].</strong> To oblicza tangens. Poprawka: umieść bok przyległy na górze.",
          "<strong>Mylenie cotangensa z tangensem.</strong> Podawanie 0.75 dla trójkąta 3-4-5. Poprawka: tangens to przeciwległy nad przyległym; cotangens to odwrócony ułamek.",
          "<strong>Mylenie cotangensa z cosinusem.</strong> Używanie [[b/c]]. Poprawka: cosinus potrzebuje przeciwprostokątnej; cotangens jej nigdy nie dotyka.",
          "<strong>Używanie przeciwprostokątnej zamiast jednej z dwóch przyprostokątnych.</strong> Obliczanie [[b/c]] albo [[c/a]]. Poprawka: mianownikiem jest przyprostokątna przeciwległa [[a]], nie [[c]].",
          "<strong>Zamiana boku przyległego z przeciwległym.</strong> Wybór niewłaściwej przyprostokątnej. Poprawka: śledź od kąta [[A]]: przyprostokątna, która go dotyka, jest przyległa, a ta naprzeciw niego jest przeciwległa.",
          "<strong>Zapominanie, że etykiety boków zależą od kąta odniesienia.</strong> Używanie etykiet narysowanych dla kąta [[B]]. Poprawka: oznaczaj na nowo za każdym razem, gdy zmienia się kąt odniesienia.",
          "<strong>Zakładanie, że cotangens musi być między 0 a 1.</strong> Traktowanie 2.4 albo 12 jako błędów. Poprawka: te wartości są w porządku; tylko sinus i cosinus mają pułap 1.",
          "<strong>Zakładanie, że cotangens równy 1 oznacza nieważny trójkąt.</strong> Poprawka: [[\\cot(A)=1]] oznacza po prostu równe przyprostokątne i kąt [[45^\\circ]], całkowicie poprawny trójkąt.",
          "<strong>Podawanie stosunku z metrami albo centymetrami.</strong> Pisanie 1.3333 m. Poprawka: jednostki już się skróciły, więc podaj zwykłą liczbę.",
          "<strong>Wpisywanie zerowych lub ujemnych długości boków.</strong> Dzielenie przez zero albo bezsensowny ujemny stosunek. Poprawka: używaj tylko dodatnich długości.",
          "<strong>Mieszanie jednostek miary.</strong> Metry dzielone przez centymetry zniekształcają stosunek 100-krotnie. Poprawka: najpierw przelicz oba boki na jedną jednostkę.",
          "<strong>Zaokrąglanie zbyt wcześnie.</strong> Zaokrąglenie [[4/3]] do 1.33 przed weryfikacją dodaje możliwy do uniknięcia błąd. Poprawka: zachowaj dodatkowe cyfry do ostatniego kroku.",
          "<strong>Zakładanie, że cotangens jest kątem w stopniach.</strong> Odczytywanie 1.3333 jako 1.3333 stopnia. Poprawka: to stosunek; kąt wymaga tangensa odwrotnego.",
          "<strong>Mylenie odwrotności tangensa z tangensem odwrotnym.</strong> Pisanie [[1/\\tan(A)]], gdy potrzebne jest [[\\tan^{-1}(a/b)]], albo odwrotnie. Poprawka: odwrotność odwraca ułamek; funkcja odwrotna odzyskuje kąt.",
          "<strong>Zakładanie, że wartość cotangensa określa rozmiar trójkąta.</strong> Dwa bardzo różne trójkąty mogą dzielić [[\\cot(A)=1.3333]]. Poprawka: stosunek ustala kształt, nie skalę."
        ],
        "closingParagraphs": [
          "<strong>Źle a dobrze.</strong> Dane: [[b=4]] i [[a=3]]:",
          "Niepoprawnie: [[3/4=0.75]]. To stosunek tangensa, nie cotangensa.",
          "Poprawnie: [[\\cot(A)=4/3\\approx1.3333]]. Weryfikacja: [[\\tan(A)=3/4=0.75]] i [[1/0.75\\approx1.3333]], co potwierdza zależność odwrotną."
        ],
        "tables": [],
        "figures": []
      },
      "cot-verify": {
        "h2": "Jak sprawdzić, czy wynik cotangensa jest poprawny",
        "blocks": [
          {
            "kind": "p",
            "text": "Poprawny, niezdegenerowany trójkąt prostokątny wymaga dodatnich przyprostokątnych, [[a \\gt 0]] i [[b \\gt 0]], więc wynik cotangensa musi być dodatnią, skończoną liczbą:"
          },
          {
            "kind": "p",
            "text": "[[[\\boxed{\\cot(A)=\\frac{b}{a} \\gt 0}]]]"
          },
          {
            "kind": "p",
            "text": "Oba pomiary muszą używać zgodnych jednostek. Wynik większy niż 1, równy 1 albo mniejszy niż 1 może być poprawny; w przeciwieństwie do sinusa i cosinusa cotangens nie ma pułapu 1."
          },
          {
            "kind": "h3",
            "text": "Metoda 1: sprawdź odwrotność tangensa"
          },
          {
            "kind": "p",
            "text": "Zweryfikuj [[\\tan(A)=a/b]], a potem potwierdź [[\\cot(A)=1/\\tan(A)]]. Przy [[a=3]] i [[b=4]]: [[\\tan(A)=3/4=0.75]], więc [[\\cot(A)=1/0.75\\approx1.3333]]. Niezgodność między dwiema drogami sygnalizuje odwrócony ułamek albo błędnie oznaczony bok."
          },
          {
            "kind": "h3",
            "text": "Metoda 2: sprawdź twierdzenie Pitagorasa"
          },
          {
            "kind": "p",
            "text": "Jeśli przeciwprostokątna jest znana albo potrzebna, oblicz [[c=\\sqrt{a^2+b^2}]]. Dla [[a=3]] i [[b=4]]: [[c=\\sqrt{9+16}=5]] oraz [[3^2+4^2=5^2]]. Potwierdza to, że długości boków tworzą prawdziwy trójkąt prostokątny. Przeciwprostokątna jest tu wartością weryfikacyjną, a nie częścią głównego wzoru na cotangens."
          },
          {
            "kind": "h3",
            "text": "Metoda 3: sprawdź związek z kątem"
          },
          {
            "kind": "p",
            "text": "Dla znanego stosunku cotangensa odzyskaj kąt za pomocą [[A=\\tan^{-1}(a/b)]]. Przy [[a=3]] i [[b=4]]: [[A\\approx36.87^\\circ]]. Ponieważ bok przyległy jest dłuższy niż bok przeciwległy, kąt powinien wypaść poniżej [[45^\\circ]]; jeśli tak nie jest, etykiety boków są prawdopodobnie zamienione. Mogą wystąpić drobne różnice wynikające z zaokrągleń."
          }
        ],
        "steps": [],
        "closingParagraphs": [],
        "tables": [],
        "figures": []
      },
      "cot-vs": {
        "h2": "Cotangens a tangens, sinus i cosinus",
        "blocks": [
          {
            "kind": "p",
            "text": "Każdy stosunek porównuje inną parę boków, używając tego samego kąta odniesienia i tych samych etykiet boków:"
          }
        ],
        "steps": [],
        "closingParagraphs": [
          "Cotangens i tangens tworzą parę odwrotną: [[\\cot(A)=1/\\tan(A)]]. Jeśli [[\\tan(A)=0.75]], to [[\\cot(A)\\approx1.3333]]. Sięgaj po cotangens, gdy wzór wymaga boku przyległego podzielonego przez przeciwległy, gdy pracujesz nad relacjami zasięgu do wzniesienia albo gdy znane są tylko dwie przyprostokątne; sięgaj po tangens dla wzniesienia do zasięgu, po sinus dla boku przeciwległego względem przeciwprostokątnej, a po cosinus dla boku przyległego względem przeciwprostokątnej.",
          "Sąsiednie stosunki znajdziesz w: <a href=\"/sine-ratio-calculator/\" class=\"text-primary hover:underline\">kalkulatorze stosunku sinusa</a>, <a href=\"/cosine-ratio-calculator/\" class=\"text-primary hover:underline\">kalkulatorze stosunku cosinusa</a>, <a href=\"/tangent-ratio-calculator/\" class=\"text-primary hover:underline\">kalkulatorze stosunku tangensa</a>, <a href=\"/secant-ratio-calculator/\" class=\"text-primary hover:underline\">kalkulatorze stosunku secansa</a> i <a href=\"/cosecant-ratio-calculator/\" class=\"text-primary hover:underline\">kalkulatorze stosunku cosecansa</a>."
        ],
        "tables": [
          {
            "headers": ["Stosunek", "Wzór", "Co porównuje"],
            "rows": [
              ["Sinus", "sin(A) = a/c", "Bok przeciwległy z przeciwprostokątną"],
              ["Cosinus", "cos(A) = b/c", "Bok przyległy z przeciwprostokątną"],
              ["Tangens", "tan(A) = a/b", "Bok przeciwległy z bokiem przyległym"],
              ["Cotangens", "cot(A) = b/a", "Bok przyległy z bokiem przeciwległym"],
              ["Secans", "sec(A) = c/b", "Przeciwprostokątna z bokiem przyległym"],
              ["Cosecans", "csc(A) = c/a", "Przeciwprostokątna z bokiem przeciwległym"]
            ]
          }
        ],
        "figures": []
      },
      "cot-related": {
        "h2": "Odkryj powiązane kalkulatory trygonometryczne",
        "blocks": [],
        "steps": [],
        "closingParagraphs": [],
        "related": [
          { "name": "Kalkulator stosunku sinusa" },
          { "name": "Kalkulator stosunku cosinusa" },
          { "name": "Kalkulator stosunku tangensa" },
          { "name": "Kalkulator stosunku secansa" },
          { "name": "Kalkulator stosunku cosecansa" },
          { "name": "Kalkulator kąta trójkąta prostokątnego" }
        ],
        "tables": [],
        "figures": []
      }
    },
    "faqs": [
      {
        "question": "Jaki jest wzór na cotangens dla trójkąta prostokątnego?",
        "answer": "cot(A) = b / a: podziel bok przyległy do kąta A przez bok przeciwległy do kąta A. Przy boku przyległym 4 cm i boku przeciwległym 3 cm wynik to 4/3, około 1.3333."
      },
      {
        "question": "Jak cotangens wiąże się z tangensem?",
        "answer": "Cotangens jest odwrotnością tangensa: cot(A) = 1 / tan(A). Jeśli tan(A) = 3/4 = 0.75, to cot(A) = 4/3, około 1.3333. Oba stosunki opisują ten sam trójkąt z odwróconych perspektyw, a sprawdzenie odwrotności to najszybszy sposób weryfikacji wyniku."
      },
      {
        "question": "Jaka jest różnica między cotangensem a cosinusem?",
        "answer": "Cotangens dzieli bok przyległy przez bok przeciwległy (b/a), używając tylko dwóch przyprostokątnych. Cosinus dzieli bok przyległy przez przeciwprostokątną (b/c). Cotangens jest odwrotnością tangensa, a nie cosinusa; to rozróżnienie należy do najczęściej testowanych błędów we wczesnej trygonometrii."
      },
      {
        "question": "Czy cotangens może być większy niż 1?",
        "answer": "Tak. Cotangens nie ma pułapu 0 do 1, ponieważ w dzieleniu nie uczestniczy żadna przeciwprostokątna. Gdy bok przyległy jest dłuższy niż bok przeciwległy, wynik jest powyżej 1: dla kąta 30 stopni cot(30 deg) to około 1.7321. Wartości 2.4, 12 albo dowolna dodatnia liczba skończona są możliwe."
      },
      {
        "question": "Co oznacza wartość cotangensa równa 1?",
        "answer": "Boki przyległy i przeciwległy mają równą długość, więc trójkąt jest równoramienny przy kącie odniesienia, a kąt A ma 45 stopni. Bok przyległy 6 cm i bok przeciwległy 6 cm dają cot(A) = 6/6 = 1."
      },
      {
        "question": "Czy cotangens może być mniejszy niż 1?",
        "answer": "Tak, zawsze gdy bok przeciwległy jest dłuższy niż bok przyległy. Bok przyległy 6 m i bok przeciwległy 8 m dają cot(A) = 6/8 = 0.75, a kąt odniesienia jest wtedy większy niż 45 stopni."
      },
      {
        "question": "Czy cotangens ma jednostki miary?",
        "answer": "Nie. Oba dane wejściowe to długości mierzone w tej samej jednostce, więc jednostki się skracają: 4 m / 3 m = 4/3, dokładnie tak jak 400 cm / 300 cm = 4/3. Podawaj cotangens jako zwykłą liczbę bezwymiarową, nigdy z dołączonymi stopniami, metrami ani stopami."
      },
      {
        "question": "Jak obliczyć cotangens z długości boków?",
        "answer": "Zmierz bok przyległy b i bok przeciwległy a w tej samej jednostce, potwierdź, że oba są dodatnie, a potem podziel: cot(A) = b / a. Na tej stronie wpisz bok przyległy w pierwszym polu, a bok przeciwległy w drugim, wybierz zgodne jednostki i kliknij Oblicz cot(A)."
      },
      {
        "question": "Jak znaleźć kąt ze stosunku cotangensa?",
        "answer": "Weź odwrotność, aby otrzymać stosunek tangensa, a potem zastosuj tangens odwrotny: A = tan^-1(a / b). Dla cot(A) = 4/3 stosunek tangensa to 3/4, więc A = tan^-1(0.75), około 36.87 stopnia. Najpierw ustaw kalkulator naukowy w tryb stopni. Kalkulator na tej stronie zwraca stosunek, a nie kąt."
      },
      {
        "question": "Czy kalkulator cotangensa potrzebuje przeciwprostokątnej?",
        "answer": "Nie. Podstawowy stosunek cotangensa wykorzystuje tylko dwa prostopadłe boki, więc przeciwprostokątna nigdy nie wchodzi do wzoru. Staje się istotna dopiero w dalszej pracy z sinusem, cosinusem, secansem albo cosecansem, albo gdy twierdzenie Pitagorasa służy do weryfikacji trójkąta."
      },
      {
        "question": "Co cotangens oznacza w kategoriach zasięgu i wzniesienia?",
        "answer": "Gdy kąt A mierzy się od poziomu, cot(A) to poziomy zasięg podzielony przez pionowe wzniesienie. Cotangens 0.75 oznacza, że poziomy zasięg to 75 procent pionowego wzniesienia; cotangens 12 oznacza, że zasięg jest dwanaście razy większy niż wzniesienie. Tangens to ta sama idea odwrócona: wzniesienie podzielone przez zasięg."
      },
      {
        "question": "Kiedy używać cotangensa zamiast tangensa?",
        "answer": "Używaj cotangensa, gdy wzór albo procedura wprost wymaga boku przyległego podzielonego przez przeciwległy, gdy porównujesz poziomy zasięg z pionowym wzniesieniem albo gdy znane boki to dwie przyprostokątne. Jeśli znana relacja to wzniesienie nad zasięgiem albo przeciwległy nad przyległym, tangens jest bezpośrednim wyborem."
      }
    ],
    "faqHeading": "Często zadawane pytania",
    "relatedHeading": "Odkryj powiązane kalkulatory trygonometryczne",
    "conclusion": {
      "h2": "Używaj stosunku cotangensa z pewnością siebie",
      "paragraphs": [
        "Cotangens to odwrócona postać tangensa: podziel bok przyległy przez bok przeciwległy, a opiszesz kształt zasięgu do wzniesienia trójkąta. Wzór [[\\cot(A)=b/a]] wymaga tylko dwóch pomiarów, odpowiedź jest zawsze dodatnią liczbą bezwymiarową i może być powyżej, równa albo poniżej 1 w zależności od tego, która przyprostokątna jest dłuższa. Gdy potrzebny jest sam kąt, [[A=\\tan^{-1}(a/b)]] go odzyskuje. Drabina, dach, rampa czy podręcznikowy 3-4-5, metoda nigdy się nie zmienia: zidentyfikuj bok przyległy, zidentyfikuj bok przeciwległy, podziel i zweryfikuj odwrotnością tangensa."
      ]
    }
  }
};
