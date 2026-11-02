/**
 * cosineGuideTranslations.batch2.ts
 * Translations of the Cosine Ratio Calculator guide (CosineRatioGuide.astro)
 * Batch 2: Portuguese (pt), Bengali (bn), Japanese (ja), Korean (ko), Malay (ms), Polish (pl).
 *
 * Built from the user's actual master prompt (Page 10 of 45). Follows the locked
 * translation prompt (TRANSLATION_PROMPT.md, 2026-10-30) and the cosecant batch2 structure.
 *
 * Structure per language:
 * - tocHeading, tocItems (14 entries keyed by section id)
 * - sections (14 entries: cos-intro, cos-triangle, cos-whatis, cos-formula,
 *   cos-howto, cos-examples, cos-applications, cos-angle, cos-recover,
 *   cos-mistakes, cos-verify, cos-vs, cos-faq, cos-related)
 *   Each section: h2, blocks (ordered {kind: 'p'|'h3', text}), steps,
 *   closingParagraphs, related, tables, figures (all present; empty arrays when unused).
 * - faqHeading, relatedHeading
 * - faqs (12 question/answer pairs)
 * - conclusion (h2, paragraphs)
 *
 * Formulas, KaTeX markup ([[...]] and [[[..]]]), variable names, numbers, and
 * degree values are preserved exactly as in the English source. URLs are never
 * translated. No em dashes. Formal address where the language requires it.
 */

export const COSINE_TRANSLATIONS_BATCH2 = {
  "pt": {
    "tocHeading": "Neste Guia",
    "tocItems": {
      "cos-intro": "O que é uma calculadora de razão do cosseno?",
      "cos-triangle": "Entendendo o cateto adjacente e a hipotenusa",
      "cos-whatis": "Entendendo a razão do cosseno",
      "cos-formula": "Como funciona a fórmula do cosseno",
      "cos-howto": "Como usar a calculadora de razão do cosseno",
      "cos-examples": "Exemplos passo a passo do cálculo do cosseno",
      "cos-applications": "Exemplos da vida real do uso da razão do cosseno",
      "cos-angle": "Cosseno e o tamanho do ângulo",
      "cos-recover": "Encontrando lados e ângulos com o cosseno",
      "cos-mistakes": "Erros comuns ao calcular o cosseno",
      "cos-verify": "Como verificar se o resultado do cosseno é válido",
      "cos-vs": "Cosseno vs. seno, tangente e secante",
      "cos-related": "Explore calculadoras trigonométricas relacionadas",
      "cos-faq": "Perguntas frequentes"
    },
    "sections": {
      "cos-intro": {
        "h2": "O que é uma calculadora de razão do cosseno?",
        "blocks": [
          {
            "kind": "p",
            "text": "Uma calculadora de razão do cosseno responde a uma pergunta: para um ângulo agudo de um triângulo retângulo, qual é o comprimento do cateto adjacente em comparação com a hipotenusa? Digite os dois comprimentos de lados, e a ferramenta divide o cateto adjacente pela hipotenusa, retornando [[\\cos(A)=b/c]]. Com um cateto adjacente de 4 cm e uma hipotenusa de 5 cm, o cálculo é [[4/5=0.8]]: o cateto adjacente é 80 por cento da hipotenusa. Esse decimal é a resposta completa. Ele não tem unidades, já que os centímetros se cancelam na divisão, e não é um ângulo em graus. O cateto oposto nunca entra nesse cálculo. A partir dessa única razão, você pode comparar formas, verificar medições, encontrar projeções horizontais ou recuperar o ângulo com o cosseno inverso."
          }
        ],
        "steps": [],
        "listItems": [],
        "related": [],
        "tables": [],
        "figures": []
      },
      "cos-triangle": {
        "h2": "Entendendo o cateto adjacente e a hipotenusa",
        "blocks": [
          {
            "kind": "h3",
            "text": "O que é um triângulo retângulo?"
          },
          {
            "kind": "p",
            "text": "Um triângulo retângulo tem um ângulo de exatamente [[90^\\circ]], o ângulo entre duas retas perpendiculares, como uma parede encontrando um piso nivelado. A hipotenusa fica oposta a esse ângulo reto e é sempre o lado mais longo. Os outros dois ângulos dividem os 90 graus restantes, de modo que ambos são agudos. O cosseno compara dois desses lados em uma relação fixa."
          },
          {
            "kind": "h3",
            "text": "O que é o cateto adjacente?"
          },
          {
            "kind": "p",
            "text": "O cateto adjacente [[b]] é o cateto que toca o ângulo de referência [[A]] sem ser a hipotenusa. Ele costuma representar uma projeção horizontal: a distância no solo a partir de uma escada, a projeção horizontal de um caibro ou a projeção de uma força. Qual cateto conta como adjacente depende do ângulo de referência, de modo que mudar do ângulo [[A]] para o ângulo [[B]] troca os rótulos de adjacente e oposto."
          },
          {
            "kind": "h3",
            "text": "O que é a hipotenusa?"
          },
          {
            "kind": "p",
            "text": "A hipotenusa [[c]] é o lado oposto ao ângulo reto: em qualquer diagrama, ela fica em frente ao pequeno quadrado que marca o canto de [[90^\\circ]], e é o lado mais longo. Em situações reais, ela pode ser uma escada, um caibro, uma rampa, um cabo ou um caminho em linha reta, e é sempre estritamente mais longa que o cateto adjacente."
          },
          {
            "kind": "h3",
            "text": "O que é o cateto oposto?"
          },
          {
            "kind": "p",
            "text": "O cateto oposto [[a]] fica diretamente em frente ao ângulo [[A]] e nunca toca seu vértice. Ele não tem papel na fórmula do cosseno, por isso a calculadora nunca o pede. Tenha o ângulo de referência claro: escolha o ângulo errado e os rótulos de oposto e adjacente se trocam silenciosamente."
          }
        ],
        "steps": [],
        "listItems": [],
        "related": [],
        "tables": [],
        "figures": [
          {
            "alt": "Triângulo retângulo: ângulo A embaixo à esquerda, cateto adjacente b em dourado, hipotenusa c em azul, cos(A)=b/c",
            "caption": "O ângulo A fica no canto inferior esquerdo; o cosseno usa o cateto adjacente b e a hipotenusa c, não o cateto oposto a."
          }
        ]
      },
      "cos-whatis": {
        "h2": "Entendendo a razão do cosseno",
        "blocks": [
          {
            "kind": "p",
            "text": "O cosseno compara o cateto próximo ao ângulo [[A]] com o lado inclinado completo:"
          },
          {
            "kind": "p",
            "text": "[[[\\cos(A)=\\frac{b}{c}]]]"
          },
          {
            "kind": "p",
            "text": "Aqui [[\\cos(A)]] é o cosseno do ângulo [[A]], [[b]] é o cateto adjacente e [[c]] é a hipotenusa: a parcela da hipotenusa coberta pelo cateto adjacente."
          },
          {
            "kind": "h3",
            "text": "Entendendo o SOH-CAH-TOA"
          },
          {
            "kind": "p",
            "text": "SOH: seno = oposto / hipotenusa. CAH: cosseno = adjacente / hipotenusa. TOA: tangente = oposto / adjacente. As letras CAH descrevem a fórmula do cosseno: a primeira letra nomeia a função, a segunda o numerador e a terceira o denominador."
          },
          {
            "kind": "h3",
            "text": "Por que o cosseno é uma razão"
          },
          {
            "kind": "p",
            "text": "Dividir dois comprimentos cancela as unidades: [[4\\text{ m}/5\\text{ m}=0.8]], e [[400\\text{ cm}/500\\text{ cm}=0.8]] também. Os mesmos lados físicos sempre produzem o mesmo número, qualquer que seja a unidade em que foram medidos, desde que ambos a compartilhem."
          },
          {
            "kind": "h3",
            "text": "O que significa um valor de cosseno de 0.8?"
          },
          {
            "kind": "p",
            "text": "Significa que o cateto adjacente é 80 por cento da hipotenusa: um cateto longo próximo ao ângulo, uma hipotenusa apenas um pouco mais longa. Ele não fornece o ângulo diretamente; isso exige o cosseno inverso."
          },
          {
            "kind": "h3",
            "text": "Por que o cosseno é menor que 1"
          },
          {
            "kind": "p",
            "text": "A hipotenusa é mais longa que qualquer um dos catetos, de modo que [[b \\lt c]] e [[b/c \\lt 1]], e ambos os lados são positivos, de modo que a razão fica acima de 0. Para um triângulo retângulo válido e não degenerado, o cosseno sempre fica estritamente entre 0 e 1; os valores-limite 0 e 1 são limites, não valores alcançáveis."
          },
          {
            "kind": "h3",
            "text": "Cosseno versus seno"
          },
          {
            "kind": "p",
            "text": "[[\\cos(A)=b/c]] e [[\\sin(A)=a/c]] compartilham a hipotenusa, mas usam catetos diferentes. Escolha o cosseno quando o cateto adjacente for conhecido ou necessário; escolha o seno quando o cateto oposto for. Confundir os dois é o erro mais comum no início."
          }
        ],
        "steps": [],
        "listItems": [],
        "related": [],
        "tables": [],
        "figures": [
          {
            "alt": "Três etapas: triângulo 3-4-5 rotulado, fórmula cos(A)=b/c, resultado 4/5=0.8, adjacente é 80 por cento",
            "caption": "Três etapas: identifique os lados, aplique cos(A) = b/c e divida. O cateto adjacente é 80 por cento da hipotenusa."
          }
        ]
      },
      "cos-formula": {
        "h2": "Como funciona a fórmula do cosseno",
        "blocks": [
          {
            "kind": "p",
            "text": "Comece pela definição: cosseno é o cateto adjacente dividido pela hipotenusa. Na notação desta página:"
          },
          {
            "kind": "p",
            "text": "[[[\\boxed{\\cos(A)=\\frac{b}{c}}]]]"
          },
          {
            "kind": "p",
            "text": "O cateto adjacente é o numerador porque é o cateto que está sendo comparado; a hipotenusa é o denominador porque é o comprimento de referência."
          },
          {
            "kind": "h3",
            "text": "Exemplo totalmente resolvido: um triângulo 3-4-5"
          },
          {
            "kind": "p",
            "text": "Dados [[b=4\\text{ cm}]], [[a=3\\text{ cm}]], [[c=5\\text{ cm}]]:"
          },
          {
            "kind": "p",
            "text": "Passo 1: escreva a fórmula. [[\\cos(A)=b/c]]"
          },
          {
            "kind": "p",
            "text": "Passo 2: substitua as medidas. [[\\cos(A)=4/5]]"
          },
          {
            "kind": "p",
            "text": "Passo 3: divida. [[\\boxed{\\cos(A)=0.8}]]"
          },
          {
            "kind": "p",
            "text": "Passo 4: interprete a resposta. O cateto adjacente é 80 por cento da hipotenusa."
          },
          {
            "kind": "p",
            "text": "Passo 5: verifique o triângulo. [[3^2+4^2=5^2]], ou seja, [[9+16=25]]. Os comprimentos dos lados são matematicamente consistentes."
          },
          {
            "kind": "p",
            "text": "Se você quiser o ângulo em vez da razão, o cosseno inverso é o próximo passo: [[A=\\cos^{-1}(0.8)\\approx36.87^\\circ]]. Isso é um cálculo separado; a ferramenta desta página retorna apenas a razão."
          }
        ],
        "steps": [],
        "listItems": [],
        "related": [],
        "tables": [],
        "figures": []
      },
      "cos-howto": {
        "h2": "Como usar a calculadora de razão do cosseno",
        "blocks": [
          {
            "kind": "p",
            "text": "O passo a passo abaixo corresponde à interface real desta página."
          }
        ],
        "steps": [
          "<strong>Identifique o ângulo de referência [[A]],</strong> já que o cateto adjacente é definido em relação a ele.",
          "<strong>Localize o cateto adjacente [[b]]:</strong> o cateto que toca o ângulo [[A]] e não é a hipotenusa.",
          "<strong>Localize a hipotenusa [[c]]:</strong> o lado oposto ao ângulo reto, o lado mais longo.",
          "<strong>Meça ou obtenha os dois comprimentos de lados</strong> na mesma unidade.",
          "<strong>Digite o comprimento do cateto adjacente</strong> (o menor valor) no primeiro campo.",
          "<strong>Digite a hipotenusa</strong> (o maior valor) no segundo campo.",
          "<strong>Selecione unidades correspondentes nos seletores de unidade</strong> para que a divisão faça sentido.",
          "<strong>Confirme que ambos os valores são positivos;</strong> comprimentos zero ou negativos não podem formar um triângulo.",
          "<strong>Verifique se a hipotenusa é mais longa que o cateto adjacente;</strong> se não for, as entradas estão trocadas ou rotuladas errado.",
          "<strong>Clique em Calcular cos(A)</strong> para dividir o cateto adjacente pela hipotenusa.",
          "<strong>Leia a razão do cosseno:</strong> o cateto adjacente como parcela da hipotenusa.",
          "<strong>Verifique se a resposta está entre 0 e 1;</strong> qualquer valor fora desse intervalo indica um erro de entrada.",
          "<strong>Use Redefinir</strong> para limpar as entradas e começar de novo."
        ],
        "listItems": [],
        "related": [],
        "tables": [],
        "figures": [],
        "closingParagraphs": [
          "A calculadora nunca pede um ângulo em graus, o cateto oposto nem um valor para inverter: dois comprimentos de lados são a entrada completa."
        ]
      },
      "cos-examples": {
        "h2": "Exemplos passo a passo do cálculo do cosseno",
        "blocks": [
          {
            "kind": "p",
            "text": "Cada exemplo segue o mesmo padrão: escreva a fórmula, substitua, divida."
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
            "text": "[[\\cos(A)=4/5]]"
          },
          {
            "kind": "p",
            "text": "[[\\boxed{\\cos(A)=0.8}]]"
          },
          {
            "kind": "p",
            "text": "O cateto adjacente é 80 por cento da hipotenusa; o cateto oposto completa o triângulo, mas a fórmula o ignora."
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
            "text": "[[\\cos(A)=12/13]]"
          },
          {
            "kind": "p",
            "text": "[[\\boxed{\\cos(A)\\approx0.9231}]]"
          },
          {
            "kind": "p",
            "text": "O cateto adjacente é cerca de 92,31 por cento da hipotenusa; o cateto oposto de 5 m não é necessário."
          },
          {
            "kind": "h3",
            "text": "Exemplo 3: um triângulo 30-60-90"
          },
          {
            "kind": "p",
            "text": "Para o ângulo [[A=30^\\circ]], o cateto adjacente é [[\\sqrt{3}/2]] vezes a hipotenusa. Com [[b=\\sqrt{3}\\text{ cm}]] e [[c=2\\text{ cm}]]:"
          },
          {
            "kind": "p",
            "text": "[[\\cos(30^\\circ)=\\frac{\\sqrt{3}}{2}]]"
          },
          {
            "kind": "p",
            "text": "[[\\boxed{\\cos(30^\\circ)\\approx0.8660}]]"
          },
          {
            "kind": "p",
            "text": "Este valor de ângulo especial vale a pena memorizar; o triângulo 30-60-90 aparece constantemente em problemas de geometria."
          },
          {
            "kind": "h3",
            "text": "Exemplo 4: um triângulo com cateto adjacente de 8 e hipotenusa de 10"
          },
          {
            "kind": "p",
            "text": "Dados [[b=8\\text{ m}]] e [[c=10\\text{ m}]]:"
          },
          {
            "kind": "p",
            "text": "[[\\cos(A)=8/10]]"
          },
          {
            "kind": "p",
            "text": "[[\\boxed{\\cos(A)=0.8}]]"
          },
          {
            "kind": "p",
            "text": "A razão coincide com a do triângulo 3-4-5 porque multiplicar todos os lados pelo mesmo fator deixa os ângulos e as razões inalterados."
          }
        ],
        "steps": [],
        "listItems": [],
        "related": [],
        "tables": [],
        "figures": []
      },
      "cos-applications": {
        "h2": "Exemplos da vida real do uso da razão do cosseno",
        "blocks": [
          {
            "kind": "p",
            "text": "O cosseno é uma razão matemática, não uma grandeza física com unidades. Seu valor prático está em comparar o cateto adjacente com a hipotenusa, calcular projeções horizontais e verificar medições. Cada exemplo assume um triângulo retângulo simplificado."
          },
          {
            "kind": "h3",
            "text": "Exemplo 5: calculando a razão do cosseno de uma escada"
          },
          {
            "kind": "p",
            "text": "Uma escada de 5 m está com a base a 3 m da parede; o ângulo [[A]] fica entre a escada e o solo nivelado. A distância no solo é o cateto adjacente [[b=3\\text{ m}]], a escada é a hipotenusa [[c=5\\text{ m}]]. [[\\cos(A)=3/5]], ou seja, [[\\boxed{\\cos(A)=0.6}]]: a distância no solo é 60 por cento do comprimento da escada. A razão sozinha não comprova a segurança da escada."
          },
          {
            "kind": "h3",
            "text": "Exemplo 6: calculando a razão do cosseno de um caibro de telhado"
          },
          {
            "kind": "p",
            "text": "Um caibro de telhado inclina-se por 5 m com uma projeção horizontal de 4 m: a projeção é o cateto adjacente [[b=4\\text{ m}]], o caibro é a hipotenusa [[c=5\\text{ m}]]. [[\\cos(A)=4/5]], ou seja, [[\\boxed{\\cos(A)=0.8}]]: a projeção é 80 por cento do comprimento inclinado. Uma razão geométrica, não uma avaliação estrutural."
          },
          {
            "kind": "h3",
            "text": "Exemplo 7: avaliando a razão do cosseno de uma rampa"
          },
          {
            "kind": "p",
            "text": "Uma rampa inclina-se por 9,5 m com uma projeção horizontal de 9 m: [[b=9\\text{ m}]], [[c=9.5\\text{ m}]]. [[\\cos(A)=9/9.5]], ou seja, [[\\boxed{\\cos(A)\\approx0.9474}]]: a projeção é cerca de 94,74 por cento do comprimento inclinado, como esperado para uma inclinação suave. Isso não comprova conformidade de acessibilidade."
          },
          {
            "kind": "h3",
            "text": "Exemplo 8: uma medição de topografia"
          },
          {
            "kind": "p",
            "text": "Um triângulo de topografia simplificado registra uma distância em linha reta de 50 m e uma separação horizontal de 40 m: [[b=40\\text{ m}]], [[c=50\\text{ m}]]. [[\\cos(A)=40/50]], ou seja, [[\\boxed{\\cos(A)=0.8}]]: a distância horizontal é 80 por cento da distância em linha reta. A topografia real pode exigir correções da altura do instrumento."
          },
          {
            "kind": "h3",
            "text": "Exemplo 9: encontrando a razão do cosseno de um cabo de ancoragem"
          },
          {
            "kind": "p",
            "text": "Um cabo de ancoragem de 13 m ancora-se a 12 m horizontalmente do poste: [[b=12\\text{ m}]], [[c=13\\text{ m}]]. [[\\cos(A)=12/13]], ou seja, [[\\boxed{\\cos(A)\\approx0.9231}]]: a separação é cerca de 92,31 por cento do comprimento do cabo. Isso nada diz sobre a tensão do cabo ou a resistência da ancoragem."
          },
          {
            "kind": "h3",
            "text": "Exemplo 10: calculando a razão do cosseno da longarina de uma escada"
          },
          {
            "kind": "p",
            "text": "Uma longarina de escada simplificada tem 5 m de comprimento com uma projeção horizontal de 4 m: [[b=4\\text{ m}]], [[c=5\\text{ m}]]. [[\\cos(A)=4/5]], ou seja, [[\\boxed{\\cos(A)=0.8}]]: a projeção é 80 por cento da longarina diagonal. Isso não verifica a conformidade com normas de construção."
          },
          {
            "kind": "h3",
            "text": "Exemplo 11: entendendo a projeção horizontal da lança de um guindaste"
          },
          {
            "kind": "p",
            "text": "Uma lança de guindaste simplificada tem 10 m de comprimento com uma projeção horizontal de 6 m: [[b=6\\text{ m}]], [[c=10\\text{ m}]]. [[\\cos(A)=6/10]], ou seja, [[\\boxed{\\cos(A)=0.6}]]: a projeção é 60 por cento do comprimento da lança. Isso não comprova a capacidade de elevação."
          },
          {
            "kind": "h3",
            "text": "Exemplo 12: um segmento de voo reto de uma aeronave"
          },
          {
            "kind": "p",
            "text": "Uma aeronave percorre 5 km ao longo de um trajeto reto, cobrindo 4 km horizontalmente: [[b=4\\text{ km}]], [[c=5\\text{ km}]]. [[\\cos(A)=4/5]], ou seja, [[\\boxed{\\cos(A)=0.8}]]: o deslocamento horizontal é 80 por cento do comprimento do trajeto. Um modelo idealizado, não navegação aérea."
          },
          {
            "kind": "h3",
            "text": "Exemplo 13: calculando a razão do cosseno de uma escora diagonal"
          },
          {
            "kind": "p",
            "text": "Uma escora diagonal tem 2 m de comprimento com uma projeção horizontal de 1,2 m: [[b=1.2\\text{ m}]], [[c=2\\text{ m}]]. [[\\cos(A)=1.2/2]], ou seja, [[\\boxed{\\cos(A)=0.6}]]: a projeção é 60 por cento do comprimento da escora. Isso não determina a resistência da escora."
          },
          {
            "kind": "h3",
            "text": "Exemplo 14: calculando a razão do cosseno de uma trilha de caminhada"
          },
          {
            "kind": "p",
            "text": "Um trecho reto de trilha tem 100 m de comprimento com um deslocamento horizontal de 80 m: [[b=80\\text{ m}]], [[c=100\\text{ m}]]. [[\\cos(A)=80/100]], ou seja, [[\\boxed{\\cos(A)=0.8}]]: o deslocamento é 80 por cento do comprimento do caminho. Trilhas reais fazem curvas e mudam de inclinação."
          },
          {
            "kind": "h3",
            "text": "Exemplo 15: um suporte de toldo"
          },
          {
            "kind": "p",
            "text": "Um suporte de toldo tem 3 m de comprimento com uma projeção horizontal de 2,4 m: [[b=2.4\\text{ m}]], [[c=3\\text{ m}]]. [[\\cos(A)=2.4/3]], ou seja, [[\\boxed{\\cos(A)=0.8}]]: a projeção é 80 por cento do comprimento do suporte. Isso não comprova a adequação estrutural."
          },
          {
            "kind": "h3",
            "text": "Exemplo 16: um cabo entre dois pontos"
          },
          {
            "kind": "p",
            "text": "Um cabo reto se estende por 25 m entre pontos separados por 24 m horizontalmente: [[b=24\\text{ m}]], [[c=25\\text{ m}]]. [[\\cos(A)=24/25]], ou seja, [[\\boxed{\\cos(A)=0.96}]]: a separação é 96 por cento do comprimento do cabo. O modelo assume um cabo reto em um triângulo retângulo."
          },
          {
            "kind": "h3",
            "text": "Exemplos práticos comparados"
          }
        ],
        "steps": [],
        "listItems": [],
        "related": [],
        "tables": [
          {
            "headers": [
              "Situação",
              "Cateto adjacente b",
              "Hipotenusa c",
              "Fórmula do cosseno",
              "Razão calculada",
              "Interpretação"
            ],
            "rows": [
              [
                "Escada",
                "3 m",
                "5 m",
                "3/5",
                "0.6",
                "A distância no solo é 60% da escada"
              ],
              [
                "Caibro de telhado",
                "4 m",
                "5 m",
                "4/5",
                "0.8",
                "A projeção é 80% do caibro"
              ],
              [
                "Rampa",
                "9 m",
                "9.5 m",
                "9/9.5",
                "0.9474",
                "A projeção é 94,74% da inclinação"
              ],
              [
                "Topografia",
                "40 m",
                "50 m",
                "40/50",
                "0.8",
                "A distância horizontal é 80% da linha reta"
              ],
              [
                "Cabo de ancoragem",
                "12 m",
                "13 m",
                "12/13",
                "0.9231",
                "A separação é 92,31% do cabo"
              ],
              [
                "Longarina de escada",
                "4 m",
                "5 m",
                "4/5",
                "0.8",
                "A projeção é 80% da longarina"
              ],
              [
                "Lança de guindaste",
                "6 m",
                "10 m",
                "6/10",
                "0.6",
                "A projeção é 60% da lança"
              ],
              [
                "Segmento de voo",
                "4 km",
                "5 km",
                "4/5",
                "0.8",
                "O deslocamento é 80% do trajeto"
              ],
              [
                "Escora diagonal",
                "1.2 m",
                "2 m",
                "1.2/2",
                "0.6",
                "A projeção é 60% da escora"
              ],
              [
                "Trilha de caminhada",
                "80 m",
                "100 m",
                "80/100",
                "0.8",
                "O deslocamento é 80% do caminho"
              ],
              [
                "Suporte de toldo",
                "2.4 m",
                "3 m",
                "2.4/3",
                "0.8",
                "A projeção é 80% do suporte"
              ],
              [
                "Cabo",
                "24 m",
                "25 m",
                "24/25",
                "0.96",
                "A separação é 96% do cabo"
              ]
            ]
          }
        ],
        "figures": [
          {
            "alt": "Quatro painéis: escada 0.6, caibro 0.8, topografia 0.8, lança 0.6, cada um com triângulo retângulo rotulado",
            "caption": "Quatro cálculos práticos: escada, caibro de telhado, topografia e lança de guindaste, cada um com seu triângulo, fórmula e razão."
          }
        ],
        "closingParagraphs": [
          "O padrão se mantém: a razão é grande quando o cateto adjacente é uma grande parcela da hipotenusa, e pequena quando o ângulo se abre."
        ]
      },
      "cos-angle": {
        "h2": "Entendendo a relação entre o cosseno e o tamanho do ângulo",
        "blocks": [
          {
            "kind": "p",
            "text": "O cosseno diminui à medida que o ângulo agudo cresce. Um ângulo pequeno mantém o cateto adjacente quase tão longo quanto a hipotenusa, de modo que a razão fica próxima de 1; à medida que o ângulo [[A]] se abre em direção a [[90^\\circ]], o cateto adjacente torna-se uma parcela menor e a razão cai. Os valores de referência verificados abaixo mostram o padrão:"
          }
        ],
        "steps": [],
        "listItems": [],
        "related": [],
        "tables": [
          {
            "headers": [
              "Ângulo A",
              "Cateto adjacente b",
              "Hipotenusa c",
              "Razão do cosseno"
            ],
            "rows": [
              [
                "30 deg",
                "sqrt(3)",
                "2",
                "Aproximadamente 0.8660"
              ],
              [
                "45 deg",
                "1",
                "sqrt(2)",
                "Aproximadamente 0.7071"
              ],
              [
                "60 deg",
                "1",
                "2",
                "0.5"
              ],
              [
                "80 deg",
                "1",
                "Aproximadamente 5.7588",
                "Aproximadamente 0.1736"
              ]
            ]
          }
        ],
        "figures": [
          {
            "alt": "Três triângulos de 30, 45 e 60 graus com cossenos 0.8660, 0.7071 e 0.5; o cosseno cai com o ângulo",
            "caption": "À medida que o ângulo A cresce, o cateto adjacente torna-se uma parcela menor da hipotenusa, de modo que cos(A) cai."
          }
        ],
        "closingParagraphs": [
          "As medidas da tabela são ilustrativas: as razões, não os comprimentos absolutos, determinam os ângulos. A razão aproxima-se de 0 à medida que o ângulo se aproxima de [[90^\\circ]] e aproxima-se de 1 à medida que o ângulo se aproxima de [[0^\\circ]], permanecendo estritamente entre eles para todo triângulo válido.",
          "A calculadora não recebe nenhum ângulo de entrada; esses valores de referência servem como orientação e valores de verificação ao conferir um resultado."
        ]
      },
      "cos-recover": {
        "h2": "Encontrando lados e ângulos com o cosseno",
        "blocks": [
          {
            "kind": "p",
            "text": "A fórmula do cosseno se reorganiza de forma limpa para recuperar qualquer uma de suas três grandezas quando as outras duas são conhecidas."
          },
          {
            "kind": "h3",
            "text": "Como encontrar o cateto adjacente"
          },
          {
            "kind": "p",
            "text": "Comece com [[\\cos(A)=b/c]] e multiplique ambos os lados por [[c]]:"
          },
          {
            "kind": "p",
            "text": "[[[\\boxed{b=c\\cos(A)}]]]"
          },
          {
            "kind": "p",
            "text": "Com [[c=10\\text{ m}]] e [[A=60^\\circ]]: [[b=10\\cos(60^\\circ)]], e como [[\\cos(60^\\circ)=0.5]], [[\\boxed{b=5\\text{ m}}]]: metade da hipotenusa para este ângulo."
          },
          {
            "kind": "h3",
            "text": "Como encontrar a hipotenusa"
          },
          {
            "kind": "p",
            "text": "Resolvendo para [[c]] em vez disso, obtém-se:"
          },
          {
            "kind": "p",
            "text": "[[[\\boxed{c=\\frac{b}{\\cos(A)}}]]]"
          },
          {
            "kind": "p",
            "text": "Com [[b=4\\text{ m}]] e [[A=60^\\circ]]: [[c=4/0.5]], ou seja, [[\\boxed{c=8\\text{ m}}]]."
          },
          {
            "kind": "h3",
            "text": "Como encontrar um ângulo a partir de uma razão do cosseno"
          },
          {
            "kind": "p",
            "text": "A razão do cosseno e o ângulo são grandezas diferentes. Se a razão for conhecida, o cosseno inverso, também chamado de arco cosseno, recupera o ângulo:"
          },
          {
            "kind": "p",
            "text": "[[[\\boxed{A=\\cos^{-1}\\left(\\frac{b}{c}\\right)}]]]"
          },
          {
            "kind": "p",
            "text": "Com [[\\cos(A)=0.8]]: [[A=\\cos^{-1}(0.8)]], ou seja, [[\\boxed{A\\approx36.87^\\circ}]]; ajuste a calculadora científica para o modo de graus primeiro. Estas são reorganizações matemáticas: a ferramenta desta página retorna a própria razão."
          }
        ],
        "steps": [],
        "listItems": [],
        "related": [],
        "tables": [],
        "figures": []
      },
      "cos-mistakes": {
        "h2": "Erros comuns ao calcular o cosseno",
        "blocks": [
          {
            "kind": "h3",
            "text": "Errado versus correto"
          },
          {
            "kind": "p",
            "text": "Dados [[b=4]] e [[c=5]]:"
          },
          {
            "kind": "p",
            "text": "Incorreto: [[5/4=1.25]]. Este é o recíproco do cosseno, chamado secante, e não é a razão do cosseno."
          },
          {
            "kind": "p",
            "text": "Correto: [[\\cos(A)=4/5=0.8]]."
          },
          {
            "kind": "p",
            "text": "Um cosseno válido de um ângulo agudo fica sempre entre 0 e 1."
          }
        ],
        "steps": [
          "<strong>Usar o cateto oposto em vez do cateto adjacente.</strong> Isso calcula [[a/c]], que é o seno. Correção: escolha o cateto que toca o ângulo [[A]].",
          "<strong>Inverter a fração para [[c/b]].</strong> A resposta excede 1. Correção: o lado mais longo deve ser o denominador.",
          "<strong>Confundir o cosseno com o seno.</strong> Informar 0,6 para um triângulo 3-4-5. Correção: o seno usa o cateto oposto; o cosseno usa o cateto adjacente.",
          "<strong>Confundir o cosseno com a secante.</strong> Calcular [[c/b]]. Correção: a secante é o recíproco do cosseno, sempre acima de 1.",
          "<strong>Digitar um cateto adjacente mais longo que a hipotenusa.</strong> As entradas descrevem um triângulo impossível. Correção: o campo da hipotenusa deve conter a maior medida.",
          "<strong>Digitar comprimentos de lados zero ou negativos.</strong> Divisão por zero ou uma razão negativa sem sentido. Correção: use apenas comprimentos positivos.",
          "<strong>Misturar unidades de medida.</strong> Centímetros divididos por metros distorcem a razão por 100. Correção: converta ambos os lados para uma unidade primeiro.",
          "<strong>Informar o cosseno como um ângulo em graus.</strong> Escrever 0,8 graus. Correção: a razão é um número puro, não um ângulo.",
          "<strong>Supor que a razão do cosseno tem unidades.</strong> As unidades já se cancelaram na divisão. Correção: retire a unidade da resposta.",
          "<strong>Confundir o ângulo de referência com o outro ângulo agudo.</strong> Os rótulos de adjacente e oposto se trocam. Correção: marque o ângulo [[A]] no diagrama primeiro.",
          "<strong>Arredondar cedo demais.</strong> Arredondar [[12/13]] para 0,92 antes de multiplicar de volta adiciona um erro evitável. Correção: mantenha dígitos extras até a etapa final.",
          "<strong>Supor que o cosseno é o mesmo para todo triângulo.</strong> Aplicar um valor a uma forma diferente. Correção: o cosseno depende das proporções do triângulo.",
          "<strong>Achar que a razão dá diretamente o ângulo em graus.</strong> Ler 0,8 como um ângulo. Correção: use o cosseno inverso para recuperar os graus.",
          "<strong>Ler um cosseno de 0,8 como 0,8 graus.</strong> Confundir uma razão com um ângulo. Correção: 0,8 é a razão; o ângulo é cerca de 36,87 graus.",
          "<strong>Nomear um cateto antes de identificar o ângulo de referência.</strong> Adjacente e oposto se misturam. Correção: fixe o ângulo [[A]] antes de nomear qualquer cateto."
        ],
        "listItems": [],
        "related": [],
        "tables": [],
        "figures": []
      },
      "cos-verify": {
        "h2": "Como verificar se o resultado do cosseno é válido",
        "blocks": [
          {
            "kind": "p",
            "text": "Um triângulo retângulo válido e não degenerado exige [[0 \\lt b \\lt c]] e, portanto, [[0 \\lt b/c \\lt 1]]. Ambas as medidas devem usar unidades compatíveis, e o resultado do cosseno deve ser maior que 0 e menor que 1. Um resultado de 1 ou mais geralmente indica entradas invertidas, identificação incorreta dos lados ou medições incompatíveis."
          },
          {
            "kind": "h3",
            "text": "Método 1: verifique a razão"
          },
          {
            "kind": "p",
            "text": "Verifique [[\\cos(A)=b/c]] diretamente. Com [[b=4]] e [[c=5]]: [[4/5=0.8]]."
          },
          {
            "kind": "h3",
            "text": "Método 2: verifique o teorema de Pitágoras"
          },
          {
            "kind": "p",
            "text": "Se o cateto oposto for conhecido ou necessário, calcule [[a=\\sqrt{c^2-b^2}]]. Para [[b=4]] e [[c=5]]: [[a=\\sqrt{25-16}=3]], e [[3^2+4^2=5^2]]. Isso confirma as dimensões do triângulo retângulo 3-4-5."
          },
          {
            "kind": "h3",
            "text": "Método 3: verifique usando o cosseno inverso"
          },
          {
            "kind": "p",
            "text": "Se a razão for 0,8: [[A=\\cos^{-1}(0.8)\\approx36.87^\\circ]]. Em seguida, verifique se o ângulo e a razão dos lados são consistentes. Pequenas diferenças podem ocorrer devido ao arredondamento."
          }
        ],
        "steps": [],
        "listItems": [],
        "related": [],
        "tables": [],
        "figures": []
      },
      "cos-vs": {
        "h2": "Cosseno vs. seno, tangente e secante",
        "blocks": [
          {
            "kind": "p",
            "text": "Cada razão compara um par diferente de lados, usando o mesmo ângulo de referência e os mesmos rótulos de lados:"
          }
        ],
        "steps": [],
        "listItems": [],
        "related": [],
        "tables": [
          {
            "headers": [
              "Razão",
              "Fórmula",
              "O que ela compara"
            ],
            "rows": [
              [
                "Seno",
                "sin(A) = a/c",
                "Cateto oposto em relação à hipotenusa"
              ],
              [
                "Cosseno",
                "cos(A) = b/c",
                "Cateto adjacente em relação à hipotenusa"
              ],
              [
                "Tangente",
                "tan(A) = a/b",
                "Cateto oposto em relação ao cateto adjacente"
              ],
              [
                "Secante",
                "sec(A) = c/b",
                "Hipotenusa em relação ao cateto adjacente"
              ],
              [
                "Cossecante",
                "csc(A) = c/a",
                "Hipotenusa em relação ao cateto oposto"
              ],
              [
                "Cotangente",
                "cot(A) = b/a",
                "Cateto adjacente em relação ao cateto oposto"
              ]
            ]
          }
        ],
        "figures": [],
        "closingParagraphs": [
          "A secante é o recíproco do cosseno: [[\\sec(A)=1/\\cos(A)]]. Se [[\\cos(A)=0.8]], então [[\\sec(A)=1/0.8=1.25]]. Use o cosseno para o cateto adjacente ou uma projeção horizontal, o seno para componentes verticais, a tangente quando nenhuma hipotenusa está envolvida e a secante quando uma fórmula pede o recíproco.",
          "Para as razões vizinhas, veja a <a href=\"/sine-ratio-calculator/\">Calculadora de Razão do Seno</a>, a <a href=\"/tangent-ratio-calculator/\">Calculadora de Razão da Tangente</a>, a <a href=\"/secant-ratio-calculator/\">Calculadora de Razão da Secante</a> e a <a href=\"/cosecant-ratio-calculator/\">Calculadora de Razão da Cossecante</a>."
        ]
      },
      "cos-faq": {
        "h2": "Perguntas frequentes",
        "blocks": [],
        "steps": [],
        "listItems": [],
        "related": [],
        "tables": [],
        "figures": []
      },
      "cos-related": {
        "h2": "Explore calculadoras trigonométricas relacionadas",
        "blocks": [],
        "steps": [],
        "listItems": [],
        "related": [
          {
            "name": "Calculadora de Razão do Seno",
            "desc": "Calcule o seno de um ângulo agudo a partir do cateto oposto e da hipotenusa."
          },
          {
            "name": "Calculadora de Razão da Tangente",
            "desc": "Calcule a tangente a partir do cateto oposto e do cateto adjacente."
          },
          {
            "name": "Calculadora de Razão da Secante",
            "desc": "Calcule a secante, o recíproco do cosseno, a partir da hipotenusa e do cateto adjacente."
          },
          {
            "name": "Calculadora de Razão da Cossecante",
            "desc": "Calcule a cossecante, o recíproco do seno, a partir da hipotenusa e do cateto oposto."
          },
          {
            "name": "Calculadora de Ângulo do Triângulo Retângulo",
            "desc": "Recupere um ângulo agudo a partir de dois lados conhecidos."
          },
          {
            "name": "Calculadora de Lado do Triângulo Retângulo",
            "desc": "Encontre um lado desconhecido a partir de um ângulo e um lado conhecidos."
          }
        ],
        "tables": [],
        "figures": []
      }
    },
    "faqHeading": "Perguntas frequentes",
    "relatedHeading": "Explore calculadoras trigonométricas relacionadas",
    "faqs": [
      {
        "question": "Qual é a fórmula da razão do cosseno para um triângulo retângulo?",
        "answer": "cos(A) = b / c: divida o cateto adjacente ao ângulo A pela hipotenusa. Para um cateto adjacente de 4 cm e uma hipotenusa de 5 cm, o resultado é 4/5 = 0.8."
      },
      {
        "question": "Como calcular o cosseno a partir de dois comprimentos de lados?",
        "answer": "Meça o cateto adjacente b e a hipotenusa c na mesma unidade, confirme que c é maior que b e calcule cos(A) = b / c. Com b = 12 m e c = 13 m, a resposta é 12/13, cerca de 0.9231."
      },
      {
        "question": "Qual é a diferença entre cosseno e seno?",
        "answer": "O cosseno divide o cateto adjacente pela hipotenusa (b/c); o seno divide o cateto oposto pela hipotenusa (a/c). Em um triângulo 3-4-5, cos(A) = 0.8 e sin(A) = 0.6."
      },
      {
        "question": "Por que o cosseno é menor que 1 para um ângulo agudo de um triângulo retângulo?",
        "answer": "A hipotenusa é o lado mais longo, de modo que b é sempre menor que c. Dividir um número positivo menor por um maior dá um resultado abaixo de 1; ambos os lados são positivos, de modo que ele fica acima de 0."
      },
      {
        "question": "O cosseno pode ser maior que 1 em um triângulo retângulo válido?",
        "answer": "Não. Um cosseno acima de 1 exigiria o cateto adjacente mais longo que a hipotenusa, impossível em um triângulo retângulo genuíno. Se a ferramenta mostrar 1 ou mais, as entradas estão invertidas, o cateto errado foi usado ou as medições são incompatíveis."
      },
      {
        "question": "O que significa um valor de cosseno de 0.8?",
        "answer": "O cateto adjacente é 80 por cento do comprimento da hipotenusa: 4 m / 5 m = 0.8. O número descreve a forma do triângulo, não um ângulo; o ângulo correspondente é cerca de 36.87 graus, encontrado com o cosseno inverso."
      },
      {
        "question": "A razão do cosseno tem unidades?",
        "answer": "Não. Ambos os lados são medidos na mesma unidade, de modo que as unidades se cancelam: 4 m / 5 m = 0.8, e 400 cm / 500 cm = 0.8. Informe o cosseno como um número puro sem dimensão, nunca com graus, metros ou pés anexados."
      },
      {
        "question": "Como posso encontrar um ângulo a partir de uma razão do cosseno?",
        "answer": "Use o cosseno inverso (arco cosseno): A = cos^-1(razão). Para 0.8, A = cos^-1(0.8), cerca de 36.87 graus. A calculadora desta página retorna a razão, não o ângulo, portanto ajuste sua calculadora para o modo de graus primeiro."
      },
      {
        "question": "Como posso encontrar o cateto adjacente usando o cosseno?",
        "answer": "Reorganize a fórmula para b = c x cos(A). Multiplique a hipotenusa pelo cosseno do ângulo. Com c = 10 m e o ângulo A = 60 graus, cos(60 deg) = 0.5, de modo que b = 10 x 0.5 = 5 m."
      },
      {
        "question": "Qual é a diferença entre cosseno e secante?",
        "answer": "A secante é o recíproco do cosseno: sec(A) = c / b, ou 1 / cos(A). O cosseno dá um valor abaixo de 1; a secante inverte a fração, dando um valor acima de 1. Se cos(A) = 0.8, sec(A) = 1.25."
      },
      {
        "question": "Posso calcular o cosseno sem conhecer o cateto oposto?",
        "answer": "Sim. O cosseno precisa apenas do cateto adjacente e da hipotenusa; o cateto oposto não tem papel em cos(A) = b/c, por isso esta calculadora nunca o pede."
      },
      {
        "question": "Como o cosseno pode ser usado em medições práticas?",
        "answer": "O cosseno é a ferramenta para projeções horizontais: a distância no solo a partir do comprimento de uma escada, a projeção horizontal a partir do comprimento de um caibro ou o componente horizontal de uma força. Multiplique a hipotenusa por cos(A) para obter o cateto adjacente, ou use a razão para verificar se as medições se encaixam em um triângulo retângulo."
      }
    ],
    "conclusion": {
      "h2": "Domine a razão do cosseno com confiança",
      "paragraphs": [
        "O cosseno é a parcela da hipotenusa coberta pelo cateto adjacente: divida [[b]] por [[c]] para descrever a forma do triângulo. A fórmula [[\\cos(A)=b/c]] precisa de apenas duas medidas, a resposta é sempre um número sem dimensão entre 0 e 1, e as formas reorganizadas [[b=c\\cos(A)]] e [[A=\\cos^{-1}(b/c)]] recuperam um lado ausente ou o ângulo. Escada, caibro ou o clássico triângulo 3-4-5, o método nunca muda: identifique o cateto adjacente, identifique a hipotenusa, divida e verifique."
      ]
    }
  },
  "bn": {
    "tocHeading": "এই নির্দেশিকায়",
    "tocItems": {
      "cos-intro": "কোসাইন অনুপাত ক্যালকুলেটর কী?",
      "cos-triangle": "সন্নিহিত বাহু ও অতিভুজ বোঝা",
      "cos-whatis": "কোসাইন অনুপাত বোঝা",
      "cos-formula": "কোসাইন সূত্র কীভাবে কাজ করে",
      "cos-howto": "কোসাইন অনুপাত ক্যালকুলেটর কীভাবে ব্যবহার করবেন",
      "cos-examples": "কোসাইন নির্ণয়ের ধাপে ধাপে উদাহরণ",
      "cos-applications": "কোসাইন অনুপাতের বাস্তব উদাহরণ",
      "cos-angle": "কোসাইন ও কোণের মান",
      "cos-recover": "কোসাইন দিয়ে বাহু ও কোণ নির্ণয়",
      "cos-mistakes": "কোসাইন গণনায় সাধারণ ভুল",
      "cos-verify": "আপনার কোসাইন ফলাফল বৈধ কিনা যাচাই",
      "cos-vs": "কোসাইন বনাম সাইন, ট্যানজেন্ট ও সেক্যান্ট",
      "cos-related": "সম্পর্কিত ত্রিকোণমিতিক ক্যালকুলেটর দেখুন",
      "cos-faq": "সচরাচর জিজ্ঞাসিত প্রশ্ন"
    },
    "sections": {
      "cos-intro": {
        "h2": "কোসাইন অনুপাত ক্যালকুলেটর কী?",
        "blocks": [
          {
            "kind": "p",
            "text": "একটি কোসাইন অনুপাত ক্যালকুলেটর একটি প্রশ্নের উত্তর দেয়: সমকোণী ত্রিভুজের একটি সূক্ষ্মকোণের জন্য সন্নিহিত বাহু অতিভুজের তুলনায় কত লম্বা? দুটি বাহুর দৈর্ঘ্য প্রবেশ করান, আর টুলটি সন্নিহিত বাহুকে অতিভুজ দিয়ে ভাগ করে [[\\cos(A)=b/c]] ফেরত দেয়। সন্নিহিত বাহু 4 সেমি ও অতিভুজ 5 সেমি হলে গণনাটি [[4/5=0.8]]: সন্নিহিত বাহু অতিভুজের ৮০ শতাংশ। সেই দশমিক সংখ্যাই সম্পূর্ণ উত্তর। এর কোনো একক নেই, কারণ ভাগের সময় সেন্টিমিটার কেটে যায়, এবং এটি ডিগ্রিতে কোনো কোণ নয়। বিপরীত বাহু এই গণনায় কখনো প্রবেশ করে না। সেই একক অনুপাত থেকে আপনি আকৃতি তুলনা করতে পারেন, পরিমাপ যাচাই করতে পারেন, অনুভূমিক অভিক্ষেপ বের করতে পারেন, অথবা বিপরীত কোসাইন দিয়ে কোণটি পুনরুদ্ধার করতে পারেন।"
          }
        ],
        "steps": [],
        "listItems": [],
        "related": [],
        "tables": [],
        "figures": [],
        "closingParagraphs": []
      },
      "cos-triangle": {
        "h2": "সন্নিহিত বাহু ও অতিভুজ বোঝা",
        "blocks": [
          {
            "kind": "h3",
            "text": "সমকোণী ত্রিভুজ কী?"
          },
          {
            "kind": "p",
            "text": "সমকোণী ত্রিভুজের একটি কোণ ঠিক [[90^\\circ]], অর্থাৎ দুটি লম্ব রেখার মধ্যকার কোণ, যেমন সমতল মেঝেতে দেয়ালের মিলন। অতিভুজ সেই সমকোণের বিপরীতে বসে এবং সবসময় সবচেয়ে লম্বা বাহু। বাকি দুটি কোণ অবশিষ্ট 90 ডিগ্রি ভাগ করে নেয়, তাই দুটোই সূক্ষ্মকোণ। কোসাইন সেই বাহুগুলোর মধ্যে দুটিকে একটি স্থির সম্পর্কে তুলনা করে।"
          },
          {
            "kind": "h3",
            "text": "সন্নিহিত বাহু কী?"
          },
          {
            "kind": "p",
            "text": "সন্নিহিত বাহু [[b]] হলো সেই পাদ যা রেফারেন্স কোণ [[A]]-কে স্পর্শ করে কিন্তু অতিভুজ নয়। এটি প্রায়শই একটি অনুভূমিক রান নির্দেশ করে: মই থেকে মাটির দূরত্ব, ছাদের কড়ির অনুভূমিক প্রসার, অথবা কোনো বলের অভিক্ষেপ। কোন পাদ সন্নিহিত গণ্য হবে তা রেফারেন্স কোণের ওপর নির্ভর করে, তাই কোণ [[A]] থেকে কোণ [[B]]-এ সরে গেলে সন্নিহিত ও বিপরীত লেবেল অদলবদল হয়ে যায়।"
          },
          {
            "kind": "h3",
            "text": "অতিভুজ কী?"
          },
          {
            "kind": "p",
            "text": "অতিভুজ [[c]] হলো সমকোণের বিপরীত বাহু: যেকোনো চিত্রে এটি [[90^\\circ]] কোণ চিহ্নিত ছোট বর্গের মুখোমুখি থাকে, এবং এটি সবচেয়ে লম্বা বাহু। বাস্তব পরিস্থিতিতে এটি মই, কড়ি, র‌্যাম্প, তার, অথবা সরলরেখা পথ হতে পারে, এবং এটি সবসময় সন্নিহিত বাহুর চেয়ে কঠোরভাবে লম্বা।"
          },
          {
            "kind": "h3",
            "text": "বিপরীত বাহু কী?"
          },
          {
            "kind": "p",
            "text": "বিপরীত বাহু [[a]] কোণ [[A]]-এর ঠিক বিপরীতে বসে এবং এর শীর্ষবিন্দু কখনো স্পর্শ করে না। কোসাইন সূত্রে এর কোনো ভূমিকা নেই, এজন্যই ক্যালকুলেটরটি কখনো এটি জানতে চায় না। রেফারেন্স কোণ ঠিক রাখুন: ভুল কোণ বেছে নিলে বিপরীত ও সন্নিহিত লেবেল নীরবে অদলবদল হয়ে যায়।"
          }
        ],
        "steps": [],
        "listItems": [],
        "related": [],
        "tables": [],
        "figures": [
          {
            "alt": "নিচে-বামে কোণ A সহ সমকোণী ত্রিভুজ; সোনালি সন্নিহিত বাহু b, নীল অতিভুজ c, বিপরীত বাহু a; cos(A)=b/c",
            "caption": "কোণ A বসে আছে নিচে-বামে; কোসাইন ব্যবহার করে সন্নিহিত বাহু b ও অতিভুজ c, বিপরীত বাহু a নয়।"
          }
        ],
        "closingParagraphs": []
      },
      "cos-whatis": {
        "h2": "কোসাইন অনুপাত বোঝা",
        "blocks": [
          {
            "kind": "p",
            "text": "কোসাইন কোণ [[A]]-এর পাশের পাদকে সম্পূর্ণ ঢালু বাহুর সঙ্গে তুলনা করে:"
          },
          {
            "kind": "p",
            "text": "[[[\\cos(A)=\\frac{b}{c}]]]"
          },
          {
            "kind": "p",
            "text": "এখানে [[\\cos(A)]] হলো কোণ [[A]]-এর কোসাইন, [[b]] হলো সন্নিহিত বাহু, এবং [[c]] হলো অতিভুজ: সন্নিহিত বাহু অতিভুজের কত অংশ ঢেকে রেখেছে।"
          },
          {
            "kind": "h3",
            "text": "SOH-CAH-TOA বোঝা"
          },
          {
            "kind": "p",
            "text": "SOH: সাইন = বিপরীত / অতিভুজ। CAH: কোসাইন = সন্নিহিত / অতিভুজ। TOA: ট্যানজেন্ট = বিপরীত / সন্নিহিত। CAH অক্ষরগুলো কোসাইন সূত্রটি বানান করে দেয়: প্রথম অক্ষর ফাংশনের নাম, দ্বিতীয়টি লব, এবং তৃতীয়টি হর।"
          },
          {
            "kind": "h3",
            "text": "কোসাইন কেন একটি অনুপাত"
          },
          {
            "kind": "p",
            "text": "দুটি দৈর্ঘ্য ভাগ করলে একক কেটে যায়: [[4\\text{ m}/5\\text{ m}=0.8]], এবং [[400\\text{ cm}/500\\text{ cm}=0.8]]-ও। একই ভৌত বাহু সবসময় একই সংখ্যা দেয়, আপনি যে এককেই মাপুন না কেন, যতক্ষণ দুটোর একক একই থাকে।"
          },
          {
            "kind": "h3",
            "text": "কোসাইনের মান 0.8 বলতে কী বোঝায়?"
          },
          {
            "kind": "p",
            "text": "এর অর্থ সন্নিহিত বাহু অতিভুজের ৮০ শতাংশ: কোণের পাশে একটি লম্বা পাদ, আর অতিভুজ সামান্য লম্বা। এটি সরাসরি কোণটি দেয় না; সেজন্য বিপরীত কোসাইন প্রয়োজন।"
          },
          {
            "kind": "h3",
            "text": "কোসাইন কেন 1-এর চেয়ে ছোট"
          },
          {
            "kind": "p",
            "text": "অতিভুজ যেকোনো পাদের চেয়ে লম্বা, তাই [[b \\lt c]] এবং [[b/c \\lt 1]], এবং দুটি বাহুই ধনাত্মক, তাই অনুপাত 0-এর ওপরে থাকে। একটি বৈধ, অধঃপতনহীন সমকোণী ত্রিভুজের জন্য কোসাইন সবসময় কঠোরভাবে 0 ও 1-এর মধ্যে পড়ে; সীমানা মান 0 ও 1 সীমা, পৌঁছানো যায় এমন মান নয়।"
          },
          {
            "kind": "h3",
            "text": "কোসাইন বনাম সাইন"
          },
          {
            "kind": "p",
            "text": "[[\\cos(A)=b/c]] এবং [[\\sin(A)=a/c]] একই অতিভুজ ভাগ করে নেয় কিন্তু ভিন্ন পাদ ব্যবহার করে। সন্নিহিত বাহু জানা বা প্রয়োজন হলে কোসাইন বেছে নিন; বিপরীত বাহু হলে সাইন। দুটো গুলিয়ে ফেলা সবচেয়ে সাধারণ প্রাথমিক ভুল।"
          }
        ],
        "steps": [],
        "listItems": [],
        "related": [],
        "tables": [],
        "figures": [
          {
            "alt": "তিনটি ধাপ: চিহ্নিত 3-4-5 ত্রিভুজ, কোসাইন সূত্র cos(A)=b/c, ফলাফল 4/5=0.8, সন্নিহিত বাহু ৮০ শতাংশ",
            "caption": "তিনটি ধাপ: বাহুগুলো চিহ্নিত করুন, cos(A) = b/c প্রয়োগ করুন, এবং ভাগ করুন। সন্নিহিত বাহু অতিভুজের ৮০ শতাংশ।"
          }
        ],
        "closingParagraphs": []
      },
      "cos-formula": {
        "h2": "কোসাইন সূত্র কীভাবে কাজ করে",
        "blocks": [
          {
            "kind": "p",
            "text": "সংজ্ঞা থেকে শুরু করুন: কোসাইন হলো সন্নিহিত বাহু ভাগ অতিভুজ। এই পৃষ্ঠার চিহ্নপদ্ধতিতে:"
          },
          {
            "kind": "p",
            "text": "[[[\\boxed{\\cos(A)=\\frac{b}{c}}]]]"
          },
          {
            "kind": "p",
            "text": "সন্নিহিত বাহু লব কারণ তুলনা করা হচ্ছে সেই পাদটিকে; অতিভুজ হর কারণ এটি রেফারেন্স দৈর্ঘ্য।"
          },
          {
            "kind": "h3",
            "text": "সম্পূর্ণ সমাধানসহ উদাহরণ: একটি ৩-৪-৫ ত্রিভুজ"
          },
          {
            "kind": "p",
            "text": "প্রদত্ত [[b=4\\text{ cm}]], [[a=3\\text{ cm}]], [[c=5\\text{ cm}]]:"
          },
          {
            "kind": "p",
            "text": "ধাপ ১: সূত্রটি লিখুন। [[\\cos(A)=b/c]]"
          },
          {
            "kind": "p",
            "text": "ধাপ ২: পরিমাপগুলো বসান। [[\\cos(A)=4/5]]"
          },
          {
            "kind": "p",
            "text": "ধাপ ৩: ভাগ করুন। [[\\boxed{\\cos(A)=0.8}]]"
          },
          {
            "kind": "p",
            "text": "ধাপ ৪: উত্তরের ব্যাখ্যা দিন। সন্নিহিত বাহু অতিভুজের ৮০ শতাংশ।"
          },
          {
            "kind": "p",
            "text": "ধাপ ৫: ত্রিভুজটি যাচাই করুন। [[3^2+4^2=5^2]], অর্থাৎ [[9+16=25]]। বাহুর দৈর্ঘ্যগুলো গাণিতিকভাবে সামঞ্জস্যপূর্ণ।"
          },
          {
            "kind": "p",
            "text": "অনুপাতের বদলে কোণ চাইলে বিপরীত কোসাইন পরবর্তী ধাপ: [[A=\\cos^{-1}(0.8)\\approx36.87^\\circ]]। এটি আলাদা গণনা; এই পৃষ্ঠার টুল শুধু অনুপাতই ফেরত দেয়।"
          }
        ],
        "steps": [],
        "listItems": [],
        "related": [],
        "tables": [],
        "figures": [],
        "closingParagraphs": []
      },
      "cos-howto": {
        "h2": "কোসাইন অনুপাত ক্যালকুলেটর কীভাবে ব্যবহার করবেন",
        "blocks": [
          {
            "kind": "p",
            "text": "নিচের ধাপগুলো এই পৃষ্ঠার প্রকৃত ইন্টারফেসের সঙ্গে মিলে যায়।"
          }
        ],
        "steps": [
          "<strong>রেফারেন্স কোণ [[A]] চিহ্নিত করুন,</strong> কারণ সন্নিহিত বাহু এর সাপেক্ষে সংজ্ঞায়িত।",
          "<strong>সন্নিহিত বাহু [[b]] খুঁজুন:</strong> কোণ [[A]]-কে স্পর্শ করা সেই পাদ যা অতিভুজ নয়।",
          "<strong>অতিভুজ [[c]] খুঁজুন:</strong> সমকোণের বিপরীত বাহু, সবচেয়ে লম্বা বাহু।",
          "<strong>দুটি বাহুর দৈর্ঘ্য পরিমাপ করুন বা সংগ্রহ করুন</strong> একই এককে।",
          "<strong>সন্নিহিত বাহুর দৈর্ঘ্য প্রবেশ করান</strong> (ছোট মানটি) প্রথম ঘরে।",
          "<strong>অতিভুজ প্রবেশ করান</strong> (বড় মানটি) দ্বিতীয় ঘরে।",
          "<strong>একক নির্বাচকের সাহায্যে মিলিয়ে নেওয়া একক বেছে নিন</strong> যাতে ভাগটি অর্থবহ হয়।",
          "<strong>নিশ্চিত করুন দুটি মানই ধনাত্মক;</strong> শূন্য বা ঋণাত্মক দৈর্ঘ্য ত্রিভুজ গঠন করতে পারে না।",
          "<strong>যাচাই করুন অতিভুজ সন্নিহিত বাহুর চেয়ে লম্বা;</strong> না হলে ইনপুট অদলবদল হয়েছে বা ভুল লেবেল দেওয়া হয়েছে।",
          "<strong>'হিসাব করুন cos(A)' বোতামে ক্লিক করুন</strong> সন্নিহিত বাহুকে অতিভুজ দিয়ে ভাগ করতে।",
          "<strong>কোসাইন অনুপাত পড়ুন:</strong> অতিভুজের অংশ হিসেবে সন্নিহিত বাহু।",
          "<strong>যাচাই করুন উত্তর 0 ও 1-এর মধ্যে;</strong> এর বাইরে যেকোনো মান ইনপুট ত্রুটির সংকেত।",
          "<strong>'Reset' ব্যবহার করুন</strong> ইনপুট মুছে নতুন করে শুরু করতে।"
        ],
        "listItems": [],
        "related": [],
        "tables": [],
        "figures": [],
        "closingParagraphs": [
          "ক্যালকুলেটরটি কখনো ডিগ্রিতে কোনো কোণ, বিপরীত বাহু, অথবা উল্টানোর মতো মান চায় না: দুটি বাহুর দৈর্ঘ্যই সম্পূর্ণ ইনপুট।"
        ]
      },
      "cos-examples": {
        "h2": "কোসাইন নির্ণয়ের ধাপে ধাপে উদাহরণ",
        "blocks": [
          {
            "kind": "p",
            "text": "প্রতিটি উদাহরণ একই ধাঁচ অনুসরণ করে: সূত্র লিখুন, মান বসান, ভাগ করুন।"
          },
          {
            "kind": "h3",
            "text": "উদাহরণ ১: একটি ৩-৪-৫ সমকোণী ত্রিভুজ"
          },
          {
            "kind": "p",
            "text": "প্রদত্ত [[b=4\\text{ cm}]], [[a=3\\text{ cm}]], [[c=5\\text{ cm}]]:"
          },
          {
            "kind": "p",
            "text": "[[\\cos(A)=4/5]]"
          },
          {
            "kind": "p",
            "text": "[[\\boxed{\\cos(A)=0.8}]]"
          },
          {
            "kind": "p",
            "text": "সন্নিহিত বাহু অতিভুজের ৮০ শতাংশ; বিপরীত বাহু ত্রিভুজটি পূর্ণ করে কিন্তু সূত্রটি একে উপেক্ষা করে।"
          },
          {
            "kind": "h3",
            "text": "উদাহরণ ২: একটি ৫-১২-১৩ সমকোণী ত্রিভুজ"
          },
          {
            "kind": "p",
            "text": "প্রদত্ত [[b=12\\text{ m}]], [[a=5\\text{ m}]], [[c=13\\text{ m}]]:"
          },
          {
            "kind": "p",
            "text": "[[\\cos(A)=12/13]]"
          },
          {
            "kind": "p",
            "text": "[[\\boxed{\\cos(A)\\approx0.9231}]]"
          },
          {
            "kind": "p",
            "text": "সন্নিহিত বাহু অতিভুজের প্রায় ৯২.৩১ শতাংশ; 5 মিটার বিপরীত বাহুর প্রয়োজন নেই।"
          },
          {
            "kind": "h3",
            "text": "উদাহরণ ৩: একটি ৩০-৬০-৯০ ত্রিভুজ"
          },
          {
            "kind": "p",
            "text": "কোণ [[A=30^\\circ]]-এর জন্য সন্নিহিত বাহু অতিভুজের [[\\sqrt{3}/2]] গুণ। [[b=\\sqrt{3}\\text{ cm}]] এবং [[c=2\\text{ cm}]] হলে:"
          },
          {
            "kind": "p",
            "text": "[[\\cos(30^\\circ)=\\frac{\\sqrt{3}}{2}]]"
          },
          {
            "kind": "p",
            "text": "[[\\boxed{\\cos(30^\\circ)\\approx0.8660}]]"
          },
          {
            "kind": "p",
            "text": "এই বিশেষ-কোণের মানটি মুখস্থ করার মতো; ৩০-৬০-৯০ ত্রিভুজ জ্যামিতি সমস্যায় বারবার আসে।"
          },
          {
            "kind": "h3",
            "text": "উদাহরণ ৪: সন্নিহিত বাহু ৮ ও অতিভুজ ১০-এর একটি ত্রিভুজ"
          },
          {
            "kind": "p",
            "text": "প্রদত্ত [[b=8\\text{ m}]] এবং [[c=10\\text{ m}]]:"
          },
          {
            "kind": "p",
            "text": "[[\\cos(A)=8/10]]"
          },
          {
            "kind": "p",
            "text": "[[\\boxed{\\cos(A)=0.8}]]"
          },
          {
            "kind": "p",
            "text": "অনুপাতটি ৩-৪-৫ ত্রিভুজের সঙ্গে মিলে যায় কারণ সব বাহু একই গুণকে বড় করলে কোণ ও অনুপাত অপরিবর্তিত থাকে।"
          }
        ],
        "steps": [],
        "listItems": [],
        "related": [],
        "tables": [],
        "figures": [],
        "closingParagraphs": []
      },
      "cos-applications": {
        "h2": "কোসাইন অনুপাতের বাস্তব উদাহরণ",
        "blocks": [
          {
            "kind": "p",
            "text": "কোসাইন একটি গাণিতিক অনুপাত, এককযুক্ত কোনো ভৌত রাশি নয়। এর ব্যবহারিক মূল্য সন্নিহিত বাহুকে অতিভুজের সঙ্গে তুলনা করা, অনুভূমিক অভিক্ষেপ গণনা করা, এবং পরিমাপ যাচাই করায়। প্রতিটি উদাহরণ একটি সরলীকৃত সমকোণী ত্রিভুজ ধরে নিয়েছে।"
          },
          {
            "kind": "h3",
            "text": "উদাহরণ ৫: একটি মইয়ের কোসাইন অনুপাত গণনা"
          },
          {
            "kind": "p",
            "text": "একটি ৫ মি মই দেয়াল থেকে ৩ মি দূরে তার গোড়া রেখে দাঁড়িয়ে আছে; কোণ [[A]] মই ও সমতল মাটির মধ্যে অবস্থিত। মাটির দূরত্ব সন্নিহিত বাহু [[b=3\\text{ m}]], মই অতিভুজ [[c=5\\text{ m}]]। [[\\cos(A)=3/5]], অর্থাৎ [[\\boxed{\\cos(A)=0.6}]]: মাটির দূরত্ব মইয়ের দৈর্ঘ্যের ৬০ শতাংশ। শুধু অনুপাত দিয়ে মইয়ের নিরাপত্তা প্রতিষ্ঠা হয় না।"
          },
          {
            "kind": "h3",
            "text": "উদাহরণ ৬: ছাদের কড়ির কোসাইন অনুপাত গণনা"
          },
          {
            "kind": "p",
            "text": "একটি ছাদের কড়ি ৫ মি ঢালু দৈর্ঘ্যে ৪ মি অনুভূমিক রান নিয়ে বসে: রানটি সন্নিহিত বাহু [[b=4\\text{ m}]], কড়ি অতিভুজ [[c=5\\text{ m}]]। [[\\cos(A)=4/5]], অর্থাৎ [[\\boxed{\\cos(A)=0.8}]]: রানটি ঢালু দৈর্ঘ্যের ৮০ শতাংশ। একটি জ্যামিতিক অনুপাত, কাঠামোগত মূল্যায়ন নয়।"
          },
          {
            "kind": "h3",
            "text": "উদাহরণ ৭: একটি র‌্যাম্পের কোসাইন অনুপাত মূল্যায়ন"
          },
          {
            "kind": "p",
            "text": "একটি র‌্যাম্প ৯.৫ মি ঢালে ৯ মি অনুভূমিক রান নেয়: [[b=9\\text{ m}]], [[c=9.5\\text{ m}]]। [[\\cos(A)=9/9.5]], অর্থাৎ [[\\boxed{\\cos(A)\\approx0.9474}]]: রানটি ঢালু দৈর্ঘ্যের প্রায় ৯৪.৭৪ শতাংশ, মৃদু ঢালের জন্য প্রত্যাশিত। এটি প্রবেশগম্যতা-সংক্রান্ত মানদণ্ড প্রতিষ্ঠা করে না।"
          },
          {
            "kind": "h3",
            "text": "উদাহরণ ৮: একটি জরিপ পরিমাপ"
          },
          {
            "kind": "p",
            "text": "একটি সরলীকৃত জরিপ ত্রিভুজে ৫০ মি সরলরেখা দূরত্ব ও ৪০ মি অনুভূমিক পৃথক্করণ রেকর্ড করা হয়েছে: [[b=40\\text{ m}]], [[c=50\\text{ m}]]। [[\\cos(A)=40/50]], অর্থাৎ [[\\boxed{\\cos(A)=0.8}]]: অনুভূমিক দূরত্ব সরলরেখা দূরত্বের ৮০ শতাংশ। বাস্তব জরিপে যন্ত্রের উচ্চতা সংশোধনের প্রয়োজন হতে পারে।"
          },
          {
            "kind": "h3",
            "text": "উদাহরণ ৯: একটি গাই তারের কোসাইন অনুপাত নির্ণয়"
          },
          {
            "kind": "p",
            "text": "একটি ১৩ মি গাই তার খুঁটি থেকে অনুভূমিকভাবে ১২ মি দূরে নোঙর করা: [[b=12\\text{ m}]], [[c=13\\text{ m}]]। [[\\cos(A)=12/13]], অর্থাৎ [[\\boxed{\\cos(A)\\approx0.9231}]]: পৃথক্করণ তারের দৈর্ঘ্যের প্রায় ৯২.৩১ শতাংশ। এটি তারের টান বা নোঙরের শক্তি সম্পর্কে কিছু বলে না।"
          },
          {
            "kind": "h3",
            "text": "উদাহরণ ১০: সিঁড়ির স্ট্রিংগারের কোসাইন অনুপাত গণনা"
          },
          {
            "kind": "p",
            "text": "একটি সরলীকৃত সিঁড়ির স্ট্রিংগার ৫ মি লম্বা ও ৪ মি অনুভূমিক রানসহ: [[b=4\\text{ m}]], [[c=5\\text{ m}]]। [[\\cos(A)=4/5]], অর্থাৎ [[\\boxed{\\cos(A)=0.8}]]: রানটি তির্যক স্ট্রিংগারের ৮০ শতাংশ। এটি নির্মাণ-বিধি সম্মতি যাচাই করে না।"
          },
          {
            "kind": "h3",
            "text": "উদাহরণ ১১: ক্রেন বুমের অনুভূমিক অভিক্ষেপ বোঝা"
          },
          {
            "kind": "p",
            "text": "একটি সরলীকৃত ক্রেন বুম ১০ মি লম্বা ও ৬ মি অনুভূমিক অভিক্ষেপসহ: [[b=6\\text{ m}]], [[c=10\\text{ m}]]। [[\\cos(A)=6/10]], অর্থাৎ [[\\boxed{\\cos(A)=0.6}]]: অভিক্ষেপ বুমের দৈর্ঘ্যের ৬০ শতাংশ। এটি উত্তোলন ক্ষমতা প্রতিষ্ঠা করে না।"
          },
          {
            "kind": "h3",
            "text": "উদাহরণ ১২: একটি সরল বিমান উড়ান অংশ"
          },
          {
            "kind": "p",
            "text": "একটি বিমান ৫ কিমি সরল পথে যাত্রা করে, অনুভূমিকভাবে ৪ কিমি অতিক্রম করে: [[b=4\\text{ km}]], [[c=5\\text{ km}]]। [[\\cos(A)=4/5]], অর্থাৎ [[\\boxed{\\cos(A)=0.8}]]: অনুভূমিক সরণ পথের দৈর্ঘ্যের ৮০ শতাংশ। একটি আদর্শীকৃত মডেল, উড্ডয়ন-নেভিগেশন নয়।"
          },
          {
            "kind": "h3",
            "text": "উদাহরণ ১৩: একটি তির্যক ব্রেসের কোসাইন অনুপাত গণনা"
          },
          {
            "kind": "p",
            "text": "একটি তির্যক ব্রেস ২ মি লম্বা ও ১.২ মি অনুভূমিক অভিক্ষেপসহ: [[b=1.2\\text{ m}]], [[c=2\\text{ m}]]। [[\\cos(A)=1.2/2]], অর্থাৎ [[\\boxed{\\cos(A)=0.6}]]: অভিক্ষেপ ব্রেসের দৈর্ঘ্যের ৬০ শতাংশ। এটি ব্রেসের শক্তি নির্ধারণ করে না।"
          },
          {
            "kind": "h3",
            "text": "উদাহরণ ১৪: একটি হাইকিং ট্রেইলের কোসাইন অনুপাত গণনা"
          },
          {
            "kind": "p",
            "text": "একটি সরল হাইকিং অংশ ১০০ মি লম্বা ও ৮০ মি অনুভূমিক সরণসহ: [[b=80\\text{ m}]], [[c=100\\text{ m}]]। [[\\cos(A)=80/100]], অর্থাৎ [[\\boxed{\\cos(A)=0.8}]]: সরণ পথের দৈর্ঘ্যের ৮০ শতাংশ। বাস্তব ট্রেইল বাঁকে ও ঢাল বদলায়।"
          },
          {
            "kind": "h3",
            "text": "উদাহরণ ১৫: একটি শামিয়ানার খুঁটি"
          },
          {
            "kind": "p",
            "text": "একটি শামিয়ানার খুঁটি ৩ মি লম্বা ও ২.৪ মি অনুভূমিক অভিক্ষেপসহ: [[b=2.4\\text{ m}]], [[c=3\\text{ m}]]। [[\\cos(A)=2.4/3]], অর্থাৎ [[\\boxed{\\cos(A)=0.8}]]: অভিক্ষেপ খুঁটির দৈর্ঘ্যের ৮০ শতাংশ। এটি কাঠামোগত উপযুক্ততা প্রতিষ্ঠা করে না।"
          },
          {
            "kind": "h3",
            "text": "উদাহরণ ১৬: দুটি বিন্দুর মধ্যে একটি তার"
          },
          {
            "kind": "p",
            "text": "একটি সরল তার অনুভূমিকভাবে ২৪ মি দূরে থাকা বিন্দুদ্বয়ের মধ্যে ২৫ মি প্রসারিত: [[b=24\\text{ m}]], [[c=25\\text{ m}]]। [[\\cos(A)=24/25]], অর্থাৎ [[\\boxed{\\cos(A)=0.96}]]: পৃথক্করণ তারের দৈর্ঘ্যের ৯৬ শতাংশ। মডেলটি সমকোণী ত্রিভুজে সরল তার ধরে নিয়েছে।"
          },
          {
            "kind": "h3",
            "text": "ব্যবহারিক উদাহরণ তুলনা"
          }
        ],
        "steps": [],
        "listItems": [],
        "related": [],
        "tables": [
          {
            "headers": [
              "পরিস্থিতি",
              "সন্নিহিত বাহু b",
              "অতিভুজ c",
              "কোসাইন সূত্র",
              "গণনাকৃত অনুপাত",
              "ব্যাখ্যা"
            ],
            "rows": [
              [
                "মই",
                "3 m",
                "5 m",
                "3/5",
                "0.6",
                "ভূমির দূরত্ব মইয়ের দৈর্ঘ্যের 60%"
              ],
              [
                "ছাদের কড়ি",
                "4 m",
                "5 m",
                "4/5",
                "0.8",
                "রান কড়ির দৈর্ঘ্যের 80%"
              ],
              [
                "র‌্যাম্প",
                "9 m",
                "9.5 m",
                "9/9.5",
                "0.9474",
                "রান ঢালের দৈর্ঘ্যের 94.74%"
              ],
              [
                "জরিপ",
                "40 m",
                "50 m",
                "40/50",
                "0.8",
                "অনুভূমিক ফাঁক রেখার 80%"
              ],
              [
                "গাই তার",
                "12 m",
                "13 m",
                "12/13",
                "0.9231",
                "পৃথক্করণ তারের 92.31%"
              ],
              [
                "সিঁড়ির স্ট্রিংগার",
                "4 m",
                "5 m",
                "4/5",
                "0.8",
                "রান স্ট্রিংগারের দৈর্ঘ্যের 80%"
              ],
              [
                "ক্রেন বুম",
                "6 m",
                "10 m",
                "6/10",
                "0.6",
                "অভিক্ষেপ বুমের 60%"
              ],
              [
                "উড়ান অংশ",
                "4 km",
                "5 km",
                "4/5",
                "0.8",
                "সরণ পথের 80%"
              ],
              [
                "তির্যক ব্রেস",
                "1.2 m",
                "2 m",
                "1.2/2",
                "0.6",
                "অভিক্ষেপ ব্রেসের 60%"
              ],
              [
                "হাইকিং ট্রেইল",
                "80 m",
                "100 m",
                "80/100",
                "0.8",
                "সরণ পথের 80%"
              ],
              [
                "শামিয়ানার খুঁটি",
                "2.4 m",
                "3 m",
                "2.4/3",
                "0.8",
                "অভিক্ষেপ খুঁটির 80%"
              ],
              [
                "তার",
                "24 m",
                "25 m",
                "24/25",
                "0.96",
                "পৃথক্করণ তারের 96%"
              ]
            ]
          }
        ],
        "figures": [
          {
            "alt": "চারটি প্যানেল: মই অনুপাত 0.6, কড়ি 0.8, জরিপ 0.8, ক্রেন বুম 0.6, প্রতিটিতে চিহ্নিত সমকোণী ত্রিভুজ",
            "caption": "চারটি ব্যবহারিক গণনা: মই, ছাদের কড়ি, জরিপ, ও ক্রেন বুম, প্রতিটির ত্রিভুজ, সূত্র ও অনুপাতসহ।"
          }
        ],
        "closingParagraphs": [
          "ধাঁচটি সর্বত্র বহাল: সন্নিহিত বাহু অতিভুজের বড় অংশ হলে অনুপাত বড় হয়, আর কোণ খুলে গেলে ছোট হয়।"
        ]
      },
      "cos-angle": {
        "h2": "কোসাইন ও কোণের মানের মধ্যে সম্পর্ক",
        "blocks": [
          {
            "kind": "p",
            "text": "সূক্ষ্মকোণ বড় হলে কোসাইন সঙ্কুচিত হয়। ছোট কোণে সন্নিহিত বাহু অতিভুজের প্রায় সমান থাকে, তাই অনুপাত 1-এর কাছাকাছি; কোণ [[A]] [[90^\\circ]]-এর দিকে খুলতে থাকলে সন্নিহিত বাহু ছোট অংশ হয় এবং অনুপাত পড়ে যায়। নিচের যাচাইকৃত রেফারেন্স মানগুলো ধাঁচটি দেখায়:"
          }
        ],
        "steps": [],
        "listItems": [],
        "related": [],
        "tables": [
          {
            "headers": [
              "কোণ A",
              "সন্নিহিত বাহু b",
              "অতিভুজ c",
              "কোসাইন অনুপাত"
            ],
            "rows": [
              [
                "30 deg",
                "sqrt(3)",
                "2",
                "প্রায় 0.8660"
              ],
              [
                "45 deg",
                "1",
                "sqrt(2)",
                "প্রায় 0.7071"
              ],
              [
                "60 deg",
                "1",
                "2",
                "0.5"
              ],
              [
                "80 deg",
                "1",
                "প্রায় 5.7588",
                "প্রায় 0.1736"
              ]
            ]
          }
        ],
        "figures": [
          {
            "alt": "30, 45, 60 ডিগ্রিতে তিনটি ত্রিভুজ, কোসাইন মান 0.8660, 0.7071, 0.5; কোণ বাড়লে কোসাইন কমে",
            "caption": "কোণ A বাড়লে সন্নিহিত বাহু অতিভুজের ছোট অংশ হয়, তাই cos(A) কমে যায়।"
          }
        ],
        "closingParagraphs": [
          "সারণির পরিমাপগুলো চিত্রাত্মক: অনুপাত, নয় পরম দৈর্ঘ্য, কোণ নির্ধারণ করে। কোণ [[90^\\circ]]-এর দিকে গেলে অনুপাত 0-এর দিকে যায় এবং কোণ [[0^\\circ]]-এর দিকে গেলে 1-এর দিকে, প্রতিটি বৈধ ত্রিভুজের জন্য কঠোরভাবে মাঝে থাকে।",
          "ক্যালকুলেটরটি কোনো কোণ ইনপুট নেয় না; ফলাফল যাচাই করার সময় এই রেফারেন্স মানগুলো অভিমুখ ও যাচাই মান হিসেবে কাজ করে।"
        ]
      },
      "cos-recover": {
        "h2": "কোসাইন দিয়ে বাহু ও কোণ নির্ণয়",
        "blocks": [
          {
            "kind": "p",
            "text": "কোসাইন সূত্র পরিষ্কারভাবে পুনর্বিন্যাস করা যায়, বাকি দুটি জানা থাকলে তিনটি রাশির যেকোনো একটিকে পুনরুদ্ধার করতে।"
          },
          {
            "kind": "h3",
            "text": "সন্নিহিত বাহু কীভাবে বের করবেন"
          },
          {
            "kind": "p",
            "text": "[[\\cos(A)=b/c]] থেকে শুরু করে দুই পাশে [[c]] গুণ করুন:"
          },
          {
            "kind": "p",
            "text": "[[[\\boxed{b=c\\cos(A)}]]]"
          },
          {
            "kind": "p",
            "text": "[[c=10\\text{ m}]] এবং [[A=60^\\circ]] হলে: [[b=10\\cos(60^\\circ)]], এবং যেহেতু [[\\cos(60^\\circ)=0.5]], তাই [[\\boxed{b=5\\text{ m}}]]: এই কোণের জন্য অতিভুজের অর্ধেক।"
          },
          {
            "kind": "h3",
            "text": "অতিভুজ কীভাবে বের করবেন"
          },
          {
            "kind": "p",
            "text": "বরং [[c]]-এর জন্য সমাধান করলে পাওয়া যায়:"
          },
          {
            "kind": "p",
            "text": "[[[\\boxed{c=\\frac{b}{\\cos(A)}}]]]"
          },
          {
            "kind": "p",
            "text": "[[b=4\\text{ m}]] এবং [[A=60^\\circ]] হলে: [[c=4/0.5]], অর্থাৎ [[\\boxed{c=8\\text{ m}}]]।"
          },
          {
            "kind": "h3",
            "text": "কোসাইন অনুপাত থেকে কোণ কীভাবে বের করবেন"
          },
          {
            "kind": "p",
            "text": "কোসাইন অনুপাত ও কোণ ভিন্ন রাশি। অনুপাত জানা থাকলে বিপরীত কোসাইন, যাকে আর্ককোসাইনও বলে, কোণটি পুনরুদ্ধার করে:"
          },
          {
            "kind": "p",
            "text": "[[[\\boxed{A=\\cos^{-1}\\left(\\frac{b}{c}\\right)}]]]"
          },
          {
            "kind": "p",
            "text": "[[\\cos(A)=0.8]] হলে: [[A=\\cos^{-1}(0.8)]], অর্থাৎ [[\\boxed{A\\approx36.87^\\circ}]]; আগে বৈজ্ঞানিক ক্যালকুলেটর ডিগ্রি মোডে সেট করুন। এগুলো গাণিতিক পুনর্বিন্যাস: এই পৃষ্ঠার টুল অনুপাতটিই ফেরত দেয়।"
          }
        ],
        "steps": [],
        "listItems": [],
        "related": [],
        "tables": [],
        "figures": [],
        "closingParagraphs": []
      },
      "cos-mistakes": {
        "h2": "কোসাইন গণনায় সাধারণ ভুল",
        "blocks": [
          {
            "kind": "h3",
            "text": "ভুল বনাম সঠিক"
          },
          {
            "kind": "p",
            "text": "প্রদত্ত [[b=4]] এবং [[c=5]]:"
          },
          {
            "kind": "p",
            "text": "ভুল: [[5/4=1.25]]। এটি কোসাইনের বিপরীত, যাকে সেক্যান্ট বলে, এবং এটি কোসাইন অনুপাত নয়।"
          },
          {
            "kind": "p",
            "text": "সঠিক: [[\\cos(A)=4/5=0.8]]।"
          },
          {
            "kind": "p",
            "text": "সূক্ষ্মকোণের বৈধ কোসাইন সবসময় 0 ও 1-এর মধ্যে থাকে।"
          }
        ],
        "steps": [
          "<strong>সন্নিহিত বাহুর বদলে বিপরীত বাহু ব্যবহার করা।</strong> এটি গণনা করে [[a/c]], যা সাইন। সমাধান: কোণ [[A]]-কে স্পর্শ করা পাদটি বেছে নিন।",
          "<strong>ভগ্নাংশটিকে [[c/b]] হিসেবে উল্টে দেওয়া।</strong> উত্তর 1 ছাড়িয়ে যায়। সমাধান: লম্বা বাহুটিকে হরে রাখতে হবে।",
          "<strong>কোসাইনকে সাইনের সঙ্গে গুলিয়ে ফেলা।</strong> ৩-৪-৫ ত্রিভুজে 0.6 রিপোর্ট করা। সমাধান: সাইন বিপরীত বাহু ব্যবহার করে; কোসাইন সন্নিহিত বাহু ব্যবহার করে।",
          "<strong>কোসাইনকে সেক্যান্টের সঙ্গে গুলিয়ে ফেলা।</strong> [[c/b]] গণনা করা। সমাধান: সেক্যান্ট কোসাইনের বিপরীত, সবসময় 1-এর ওপরে।",
          "<strong>অতিভুজের চেয়ে লম্বা সন্নিহিত বাহু প্রবেশ করানো।</strong> ইনপুটগুলো অসম্ভব ত্রিভুজ বর্ণনা করে। সমাধান: অতিভুজের ঘরে লম্বা পরিমাপ রাখতে হবে।",
          "<strong>শূন্য বা ঋণাত্মক বাহুর দৈর্ঘ্য প্রবেশ করানো।</strong> শূন্য দিয়ে ভাগ অথবা অর্থহীন ঋণাত্মক অনুপাত। সমাধান: শুধু ধনাত্মক দৈর্ঘ্য ব্যবহার করুন।",
          "<strong>পরিমাপের একক মেশানো।</strong> মিটার দিয়ে সেন্টিমিটার ভাগ করলে অনুপাত 100 গুণ বিকৃত হয়। সমাধান: আগে দুটি বাহুকে একই এককে রূপান্তর করুন।",
          "<strong>কোসাইনকে ডিগ্রিতে কোণ হিসেবে রিপোর্ট করা।</strong> 0.8 ডিগ্রি লেখা। সমাধান: অনুপাত একটি খাঁটি সংখ্যা, কোণ নয়।",
          "<strong>ধরে নেওয়া কোসাইন অনুপাতের একক আছে।</strong> ভাগের সময় একক ইতিমধ্যে কেটে গেছে। সমাধান: উত্তর থেকে একক বাদ দিন।",
          "<strong>রেফারেন্স কোণকে অন্য সূক্ষ্মকোণের সঙ্গে গুলিয়ে ফেলা।</strong> সন্নিহিত ও বিপরীত লেবেল অদলবদল হয়। সমাধান: আগে চিত্রে কোণ [[A]] চিহ্নিত করুন।",
          "<strong>অত তাড়াতাড়ি রাউন্ড করা।</strong> ফিরে গুণ করার আগে [[12/13]]-কে 0.92-এ রাউন্ড করলে এড়ানো যায় এমন ত্রুটি যোগ হয়। সমাধান: শেষ ধাপ পর্যন্ত অতিরিক্ত অঙ্ক রাখুন।",
          "<strong>ধরে নেওয়া কোসাইন প্রতিটি ত্রিভুজের জন্য একই।</strong> একটি মান ভিন্ন আকৃতিতে প্রয়োগ করা। সমাধান: কোসাইন ত্রিভুজের অনুপাতের ওপর নির্ভর করে।",
          "<strong>মনে করা অনুপাত সরাসরি ডিগ্রিতে কোণ দেয়।</strong> 0.8-কে কোণ হিসেবে পড়া। সমাধান: ডিগ্রি পুনরুদ্ধারে বিপরীত কোসাইন ব্যবহার করুন।",
          "<strong>0.8 কোসাইনকে 0.8 ডিগ্রি হিসেবে পড়া।</strong> অনুপাতকে কোণের সঙ্গে গুলিয়ে ফেলা। সমাধান: 0.8 হলো অনুপাত; কোণটি প্রায় 36.87 ডিগ্রি।",
          "<strong>রেফারেন্স কোণ চিহ্নিত করার আগে পাদের নাম দেওয়া।</strong> সন্নিহিত ও বিপরীত গুলিয়ে যায়। সমাধান: যেকোনো পাদের নাম দেওয়ার আগে কোণ [[A]] স্থির করুন।"
        ],
        "listItems": [],
        "related": [],
        "tables": [],
        "figures": [],
        "closingParagraphs": []
      },
      "cos-verify": {
        "h2": "আপনার কোসাইন ফলাফল বৈধ কিনা যাচাই",
        "blocks": [
          {
            "kind": "p",
            "text": "বৈধ, অধঃপতনহীন সমকোণী ত্রিভুজের প্রয়োজন [[0 \\lt b \\lt c]], এবং সুতরাং [[0 \\lt b/c \\lt 1]]। দুটি পরিমাপেই সামঞ্জস্যপূর্ণ একক ব্যবহার করতে হবে, এবং কোসাইন ফলাফল 0-এর বেশি ও 1-এর কম হতে হবে। 1 বা তার বেশি ফলাফল সাধারণত উল্টানো ইনপুট, ভুল বাহু চিহ্নিতকরণ, অথবা অসামঞ্জস্যপূর্ণ পরিমাপের ইঙ্গিত দেয়।"
          },
          {
            "kind": "h3",
            "text": "পদ্ধতি ১: অনুপাত যাচাই করুন"
          },
          {
            "kind": "p",
            "text": "[[\\cos(A)=b/c]] সরাসরি যাচাই করুন। [[b=4]] এবং [[c=5]] হলে: [[4/5=0.8]]।"
          },
          {
            "kind": "h3",
            "text": "পদ্ধতি ২: পিথাগোরাসের উপপাদ্য দিয়ে যাচাই করুন"
          },
          {
            "kind": "p",
            "text": "বিপরীত বাহু জানা থাকলে বা প্রয়োজন হলে গণনা করুন [[a=\\sqrt{c^2-b^2}]]। [[b=4]] এবং [[c=5]]-এর জন্য: [[a=\\sqrt{25-16}=3]], এবং [[3^2+4^2=5^2]]। এটি ৩-৪-৫ সমকোণী ত্রিভুজের মাত্রা নিশ্চিত করে।"
          },
          {
            "kind": "h3",
            "text": "পদ্ধতি ৩: বিপরীত কোসাইন দিয়ে যাচাই করুন"
          },
          {
            "kind": "p",
            "text": "অনুপাত 0.8 হলে: [[A=\\cos^{-1}(0.8)\\approx36.87^\\circ]]। তারপর যাচাই করুন কোণ ও বাহুর অনুপাত সামঞ্জস্যপূর্ণ কিনা। রাউন্ডিংয়ের কারণে সামান্য পার্থক্য হতে পারে।"
          }
        ],
        "steps": [],
        "listItems": [],
        "related": [],
        "tables": [],
        "figures": [],
        "closingParagraphs": []
      },
      "cos-vs": {
        "h2": "কোসাইন বনাম সাইন, ট্যানজেন্ট ও সেক্যান্ট",
        "blocks": [
          {
            "kind": "p",
            "text": "প্রতিটি অনুপাত বাহুর ভিন্ন জোড়া তুলনা করে, একই রেফারেন্স কোণ ও বাহুর লেবেল ব্যবহার করে:"
          }
        ],
        "steps": [],
        "listItems": [],
        "related": [],
        "tables": [
          {
            "headers": [
              "অনুপাত",
              "সূত্র",
              "কী তুলনা করে"
            ],
            "rows": [
              [
                "সাইন",
                "sin(A) = a/c",
                "বিপরীত বাহু ও অতিভুজ"
              ],
              [
                "কোসাইন",
                "cos(A) = b/c",
                "সন্নিহিত বাহু ও অতিভুজ"
              ],
              [
                "ট্যানজেন্ট",
                "tan(A) = a/b",
                "বিপরীত বাহু ও সন্নিহিত বাহু"
              ],
              [
                "সেক্যান্ট",
                "sec(A) = c/b",
                "অতিভুজ ও সন্নিহিত বাহু"
              ],
              [
                "কোসেক্যান্ট",
                "csc(A) = c/a",
                "অতিভুজ ও বিপরীত বাহু"
              ],
              [
                "কোট্যানজেন্ট",
                "cot(A) = b/a",
                "সন্নিহিত বাহু ও বিপরীত বাহু"
              ]
            ]
          }
        ],
        "figures": [],
        "closingParagraphs": [
          "সেক্যান্ট কোসাইনের বিপরীত: [[\\sec(A)=1/\\cos(A)]]। [[\\cos(A)=0.8]] হলে [[\\sec(A)=1/0.8=1.25]]। সন্নিহিত বাহু বা অনুভূমিক অভিক্ষেপের জন্য কোসাইন, উল্লম্ব উপাংশের জন্য সাইন, অতিভুজ জড়িত না থাকলে ট্যানজেন্ট, এবং সূত্রে বিপরীত প্রয়োজন হলে সেক্যান্ট ব্যবহার করুন।",
          "প্রতিবেশী অনুপাতগুলোর জন্য দেখুন <a href=\"/sine-ratio-calculator/\" class=\"text-primary hover:underline\">সাইন অনুপাত ক্যালকুলেটর</a>, <a href=\"/tangent-ratio-calculator/\" class=\"text-primary hover:underline\">ট্যানজেন্ট অনুপাত ক্যালকুলেটর</a>, <a href=\"/secant-ratio-calculator/\" class=\"text-primary hover:underline\">সেক্যান্ট অনুপাত ক্যালকুলেটর</a>, এবং <a href=\"/cosecant-ratio-calculator/\" class=\"text-primary hover:underline\">কোসেক্যান্ট অনুপাত ক্যালকুলেটর</a>।"
        ]
      },
      "cos-faq": {
        "h2": "সচরাচর জিজ্ঞাসিত প্রশ্ন",
        "blocks": [],
        "steps": [],
        "listItems": [],
        "related": [],
        "tables": [],
        "figures": [],
        "closingParagraphs": []
      },
      "cos-related": {
        "h2": "সম্পর্কিত ত্রিকোণমিতিক ক্যালকুলেটর দেখুন",
        "blocks": [],
        "steps": [],
        "listItems": [],
        "related": [
          {
            "name": "সাইন অনুপাত ক্যালকুলেটর",
            "desc": "বিপরীত বাহু ও অতিভুজ থেকে sin(A) গণনা করুন।"
          },
          {
            "name": "ট্যানজেন্ট অনুপাত ক্যালকুলেটর",
            "desc": "বিপরীত ও সন্নিহিত বাহু থেকে tan(A) গণনা করুন।"
          },
          {
            "name": "সেক্যান্ট অনুপাত ক্যালকুলেটর",
            "desc": "sec(A) = c / b হিসেবে কোসাইনের বিপরীত নির্ণয় করুন।"
          },
          {
            "name": "কোসেক্যান্ট অনুপাত ক্যালকুলেটর",
            "desc": "csc(A) = c / a হিসেবে সাইনের বিপরীত নির্ণয় করুন।"
          },
          {
            "name": "সমকোণী ত্রিভুজ কোণ ক্যালকুলেটর",
            "desc": "বাহুর দৈর্ঘ্য থেকে সূক্ষ্মকোণ বের করুন।"
          },
          {
            "name": "সমকোণী ত্রিভুজ বাহু ক্যালকুলেটর",
            "desc": "কোণ ও একটি বাহু থেকে অজানা বাহু বের করুন।"
          }
        ],
        "tables": [],
        "figures": [],
        "closingParagraphs": []
      }
    },
    "faqHeading": "সচরাচর জিজ্ঞাসিত প্রশ্ন",
    "relatedHeading": "সম্পর্কিত ত্রিকোণমিতিক ক্যালকুলেটর দেখুন",
    "faqs": [
      {
        "question": "সমকোণী ত্রিভুজের কোসাইন অনুপাতের সূত্র কী?",
        "answer": "cos(A) = b / c: কোণ A-এর সন্নিহিত বাহুকে অতিভুজ দিয়ে ভাগ করুন। সন্নিহিত বাহু 4 সেমি ও অতিভুজ 5 সেমি হলে ফলাফল 4/5 = 0.8।"
      },
      {
        "question": "দুটি বাহুর দৈর্ঘ্য থেকে কোসাইন কীভাবে গণনা করবেন?",
        "answer": "সন্নিহিত বাহু b ও অতিভুজ c একই এককে মাপুন, নিশ্চিত করুন c, b-এর চেয়ে বড়, তারপর cos(A) = b / c গণনা করুন। b = 12 মি ও c = 13 মি হলে উত্তর 12/13, প্রায় 0.9231।"
      },
      {
        "question": "কোসাইন ও সাইনের পার্থক্য কী?",
        "answer": "কোসাইন সন্নিহিত বাহুকে অতিভুজ দিয়ে ভাগ করে (b/c); সাইন বিপরীত বাহুকে অতিভুজ দিয়ে ভাগ করে (a/c)। ৩-৪-৫ ত্রিভুজে cos(A) = 0.8 এবং sin(A) = 0.6।"
      },
      {
        "question": "সমকোণী ত্রিভুজে সূক্ষ্মকোণের কোসাইন কেন 1-এর কম হয়?",
        "answer": "অতিভুজ সবচেয়ে লম্বা বাহু, তাই b সবসময় c-এর চেয়ে ছোট। ছোট ধনাত্মক সংখ্যাকে বড় সংখ্যা দিয়ে ভাগ করলে 1-এর নিচে ফলাফল আসে; দুটি বাহুই ধনাত্মক, তাই এটি 0-এর ওপরে থাকে।"
      },
      {
        "question": "বৈধ সমকোণী ত্রিভুজে কোসাইন কি 1-এর বেশি হতে পারে?",
        "answer": "না। 1-এর বেশি কোসাইনের জন্য সন্নিহিত বাহুকে অতিভুজের চেয়ে লম্বা হতে হবে, যা প্রকৃত সমকোণী ত্রিভুজে অসম্ভব। টুল 1 বা তার বেশি দেখালে ইনপুট উল্টো, ভুল পাদ ব্যবহৃত, অথবা পরিমাপ অসামঞ্জস্যপূর্ণ।"
      },
      {
        "question": "0.8 কোসাইন মানের অর্থ কী?",
        "answer": "সন্নিহিত বাহু অতিভুজের ৮০ শতাংশ লম্বা: 4 মি / 5 মি = 0.8। সংখ্যাটি ত্রিভুজের আকৃতি বর্ণনা করে, কোণ নয়; মিলে যাওয়া কোণ প্রায় 36.87 ডিগ্রি, যা বিপরীত কোসাইন দিয়ে পাওয়া যায়।"
      },
      {
        "question": "কোসাইন অনুপাতের কি একক আছে?",
        "answer": "না। দুটি বাহুই একই এককে মাপা হয়, তাই একক কেটে যায়: 4 মি / 5 মি = 0.8, এবং 400 সেমি / 500 সেমি = 0.8। কোসাইনকে সরল মাত্রাহীন সংখ্যা হিসেবে রিপোর্ট করুন, কখনো ডিগ্রি, মিটার বা ফুট সংযুক্ত করে নয়।"
      },
      {
        "question": "কোসাইন অনুপাত থেকে কোণ কীভাবে বের করব?",
        "answer": "বিপরীত কোসাইন (আর্ককোসাইন) ব্যবহার করুন: A = cos^-1(অনুপাত)। 0.8-এর জন্য A = cos^-1(0.8), প্রায় 36.87 ডিগ্রি। এই পৃষ্ঠার ক্যালকুলেটর অনুপাত ফেরত দেয়, কোণ নয়, তাই আগে ক্যালকুলেটর ডিগ্রি মোডে সেট করুন।"
      },
      {
        "question": "কোসাইন ব্যবহার করে সন্নিহিত বাহু কীভাবে বের করব?",
        "answer": "সূত্রটি পুনর্বিন্যাস করে b = c x cos(A) করুন। অতিভুজকে কোণের কোসাইন দিয়ে গুণ করুন। c = 10 মি ও কোণ A = 60 ডিগ্রি হলে cos(60 ডিগ্রি) = 0.5, তাই b = 10 x 0.5 = 5 মি।"
      },
      {
        "question": "কোসাইন ও সেক্যান্টের পার্থক্য কী?",
        "answer": "সেক্যান্ট কোসাইনের বিপরীত: sec(A) = c / b, অথবা 1 / cos(A)। কোসাইন 1-এর নিচে মান দেয়; সেক্যান্ট ভগ্নাংশ উল্টে দেয়, 1-এর ওপরে মান দেয়। cos(A) = 0.8 হলে sec(A) = 1.25।"
      },
      {
        "question": "বিপরীত বাহু না জেনে কি কোসাইন গণনা করা যায়?",
        "answer": "হ্যাঁ। কোসাইনের জন্য শুধু সন্নিহিত বাহু ও অতিভুজ প্রয়োজন; cos(A) = b/c-এ বিপরীত বাহুর কোনো ভূমিকা নেই, এজন্যই এই ক্যালকুলেটরটি কখনো এটি চায় না।"
      },
      {
        "question": "ব্যবহারিক পরিমাপে কোসাইন কীভাবে ব্যবহার করা যায়?",
        "answer": "কোসাইন অনুভূমিক অভিক্ষেপের টুল: মইয়ের দৈর্ঘ্য থেকে ভূমির দূরত্ব, কড়ির দৈর্ঘ্য থেকে অনুভূমিক রান, অথবা কোনো বলের অনুভূমিক উপাংশ। অতিভুজকে cos(A) দিয়ে গুণ করে সন্নিহিত বাহু পান, অথবা পরিমাপ সমকোণী ত্রিভুজে খাপ খায় কিনা যাচাই করতে অনুপাত ব্যবহার করুন।"
      }
    ],
    "conclusion": {
      "h2": "আত্মবিশ্বাসের সঙ্গে কোসাইন অনুপাত আয়ত্ত করুন",
      "paragraphs": [
        "কোসাইন হলো সন্নিহিত বাহু অতিভুজের কত অংশ ঢেকে রেখেছে: ত্রিভুজের আকৃতি বর্ণনা করতে [[b]]-কে [[c]] দিয়ে ভাগ করুন। সূত্র [[\\cos(A)=b/c]]-এর জন্য শুধু দুটি পরিমাপ প্রয়োজন, উত্তর সবসময় 0 ও 1-এর মধ্যে একটি মাত্রাহীন সংখ্যা, এবং পুনর্বিন্যস্ত রূপ [[b=c\\cos(A)]] ও [[A=\\cos^{-1}(b/c)]] অজানা বাহু বা কোণ পুনরুদ্ধার করে। মই, কড়ি, অথবা পাঠ্যবইয়ের ৩-৪-৫, পদ্ধতি কখনো বদলায় না: সন্নিহিত বাহু চিহ্নিত করুন, অতিভুজ চিহ্নিত করুন, ভাগ করুন, এবং যাচাই করুন।"
      ]
    }
  },
  "ja": {
    "tocHeading": "このガイドの内容",
    "tocItems": {
      "cos-intro": "余弦比計算機とは？",
      "cos-triangle": "隣辺と斜辺を理解する",
      "cos-whatis": "余弦比を理解する",
      "cos-formula": "余弦の公式の仕組み",
      "cos-howto": "余弦比計算機の使い方",
      "cos-examples": "余弦の計算のステップバイステップ例",
      "cos-applications": "余弦比の実生活での例",
      "cos-angle": "余弦と角の大きさ",
      "cos-recover": "余弦を使って辺と角を求める",
      "cos-mistakes": "余弦の計算でよくある間違い",
      "cos-verify": "余弦の結果が正しいか確認する方法",
      "cos-vs": "余弦と正弦・正接・正割の比較",
      "cos-related": "関連する三角関数の計算機を探す",
      "cos-faq": "よくある質問"
    },
    "sections": {
      "cos-intro": {
        "h2": "余弦比計算機とは？",
        "blocks": [
          {
            "kind": "p",
            "text": "余弦比計算機が答える問いは一つだけです。直角三角形の鋭角について、隣辺は斜辺と比べてどれくらいの長さか、という問いです。2つの辺の長さを入力すると、ツールは隣辺を斜辺で割り、[[\\cos(A)=b/c]] を返します。隣辺が4 cm、斜辺が5 cmの場合、計算は [[4/5=0.8]] となります。つまり隣辺は斜辺の80パーセントです。この小数が答えのすべてです。割り算の過程でセンチメートルが打ち消されるため単位はなく、度で表した角でもありません。対辺はこの計算には一切登場しません。この一つの比から、形の比較、測定値のチェック、水平方向の投影の算出、逆余弦による角の復元ができます。"
          }
        ],
        "steps": [],
        "listItems": [],
        "related": [],
        "tables": [],
        "figures": []
      },
      "cos-triangle": {
        "h2": "隣辺と斜辺を理解する",
        "blocks": [
          {
            "kind": "h3",
            "text": "直角三角形とは？"
          },
          {
            "kind": "p",
            "text": "直角三角形はちょうど [[90^\\circ]] の角を一つ持ちます。これは壁が水平な床と出会うような、2本の垂直な直線の間の角です。斜辺はその直角の反対側にあり、常に最も長い辺です。残りの2つの角は残りの90度を分け合うため、どちらも鋭角です。余弦はそのうち2つの辺を一定の関係で比較します。"
          },
          {
            "kind": "h3",
            "text": "隣辺とは？"
          },
          {
            "kind": "p",
            "text": "隣辺 [[b]] は、基準角 [[A]] に接する辺のうち斜辺ではない方の脚です。水平方向の長さを表すことが多く、はしごから地面までの距離、垂木の水平スパン、力の投影などが例です。どちらの脚が隣辺になるかは基準角によって決まるため、角 [[A]] から角 [[B]] に切り替えると、隣辺と対辺のラベルが入れ替わります。"
          },
          {
            "kind": "h3",
            "text": "斜辺とは？"
          },
          {
            "kind": "p",
            "text": "斜辺 [[c]] は直角の反対側にある辺です。図では [[90^\\circ]] の角を示す小さな正方形のマークに向き合っており、最も長い辺です。実際の場面では、はしご、垂木、スロープ、ケーブル、直線の経路などが斜辺にあたります。隣辺よりも常に厳密に長い辺です。"
          },
          {
            "kind": "h3",
            "text": "対辺とは？"
          },
          {
            "kind": "p",
            "text": "対辺 [[a]] は角 [[A]] の真向かいにあり、その頂点には接しません。余弦の公式には登場しないため、計算機がこの辺を尋ねることもありません。基準角をはっきりさせましょう。間違った角を選ぶと、対辺と隣辺のラベルが静かに入れ替わってしまいます。"
          }
        ],
        "steps": [],
        "listItems": [],
        "related": [],
        "tables": [],
        "figures": [
          {
            "alt": "左下に角A、隣辺bは金色、斜辺cは青色、対辺aは無彩色の直角三角形。cos(A)=b/c",
            "caption": "角Aは左下にあります。余弦は隣辺bと斜辺cを使い、対辺aは使いません。"
          }
        ]
      },
      "cos-whatis": {
        "h2": "余弦比を理解する",
        "blocks": [
          {
            "kind": "p",
            "text": "余弦は、角 [[A]] の隣の脚と、傾いた辺全体を比較します。"
          },
          {
            "kind": "p",
            "text": "[[[\\cos(A)=\\frac{b}{c}]]]"
          },
          {
            "kind": "p",
            "text": "ここで [[\\cos(A)]] は角 [[A]] の余弦、[[b]] は隣辺、[[c]] は斜辺です。つまり、斜辺のうち隣辺が占める割合を表します。"
          },
          {
            "kind": "h3",
            "text": "SOH-CAH-TOA を理解する"
          },
          {
            "kind": "p",
            "text": "SOH: 正弦 = 対辺 / 斜辺。CAH: 余弦 = 隣辺 / 斜辺。TOA: 正接 = 対辺 / 隣辺。CAH という文字は余弦の公式をそのまま綴っています。最初の文字が関数名、2番目の文字が分子、3番目の文字が分母です。"
          },
          {
            "kind": "h3",
            "text": "なぜ余弦は「比」なのか"
          },
          {
            "kind": "p",
            "text": "2つの長さを割り算すると単位が打ち消されます。[[4\\text{ m}/5\\text{ m}=0.8]] であり、[[400\\text{ cm}/500\\text{ cm}=0.8]] でもあります。両辺が同じ単位で測られている限り、どの単位で測っても同じ物理的な辺から同じ数が得られます。"
          },
          {
            "kind": "h3",
            "text": "余弦の値 0.8 は何を意味するか"
          },
          {
            "kind": "p",
            "text": "隣辺が斜辺の80パーセントであることを意味します。角に隣接する長い脚があり、斜辺はそれより少しだけ長い、ということです。角そのものを直接与えるものではありません。角を求めるには逆余弦が必要です。"
          },
          {
            "kind": "h3",
            "text": "なぜ余弦は 1 より小さいのか"
          },
          {
            "kind": "p",
            "text": "斜辺はどちらの脚よりも長いため、[[b \\lt c]] であり [[b/c \\lt 1]] となります。また両辺とも正なので、比は0を上回り続けます。退化していない有効な直角三角形では、余弦は常に0と1の間に厳密に収まります。境界値の0と1は極限であり、到達可能な値ではありません。"
          },
          {
            "kind": "h3",
            "text": "余弦と正弦の比較"
          },
          {
            "kind": "p",
            "text": "[[\\cos(A)=b/c]] と [[\\sin(A)=a/c]] は斜辺を共有しますが、使う脚が異なります。隣辺が既知の場合や必要な場合は余弦を、対辺の場合は正弦を選びます。この2つを混同するのは、学習初期に最も多い誤りです。"
          }
        ],
        "steps": [],
        "listItems": [],
        "related": [],
        "tables": [],
        "figures": [
          {
            "alt": "3-4-5三角形のラベル付け、余弦の公式cos(A)=b/c、結果4/5=0.8の3段階。隣辺は斜辺の80パーセント",
            "caption": "3つの段階、辺の特定、cos(A) = b/c の適用、割り算です。隣辺は斜辺の80パーセントです。"
          }
        ]
      },
      "cos-formula": {
        "h2": "余弦の公式の仕組み",
        "blocks": [
          {
            "kind": "p",
            "text": "定義から始めます。余弦とは、隣辺を斜辺で割ったものです。このページの記法では次のようになります。"
          },
          {
            "kind": "p",
            "text": "[[[\\boxed{\\cos(A)=\\frac{b}{c}}]]]"
          },
          {
            "kind": "p",
            "text": "隣辺が分子になるのは、比較される側の脚だからです。斜辺が分母になるのは、基準となる長さだからです。"
          },
          {
            "kind": "h3",
            "text": "完全な計算例: 3-4-5三角形"
          },
          {
            "kind": "p",
            "text": "[[b=4\\text{ cm}]]、[[a=3\\text{ cm}]]、[[c=5\\text{ cm}]] が与えられた場合、"
          },
          {
            "kind": "p",
            "text": "ステップ1: 公式を書きます。[[\\cos(A)=b/c]]"
          },
          {
            "kind": "p",
            "text": "ステップ2: 測定値を代入します。[[\\cos(A)=4/5]]"
          },
          {
            "kind": "p",
            "text": "ステップ3: 割り算をします。[[\\boxed{\\cos(A)=0.8}]]"
          },
          {
            "kind": "p",
            "text": "ステップ4: 答えを解釈します。隣辺は斜辺の80パーセントです。"
          },
          {
            "kind": "p",
            "text": "ステップ5: 三角形を検証します。[[3^2+4^2=5^2]]、つまり [[9+16=25]] です。辺の長さは数学的に整合しています。"
          },
          {
            "kind": "p",
            "text": "比ではなく角が欲しい場合は、次のステップとして逆余弦を使います。[[A=\\cos^{-1}(0.8)\\approx36.87^\\circ]]。これは別の計算です。このページのツールが返すのは比だけです。"
          }
        ],
        "steps": [],
        "listItems": [],
        "related": [],
        "tables": [],
        "figures": []
      },
      "cos-howto": {
        "h2": "余弦比計算機の使い方",
        "blocks": [
          {
            "kind": "p",
            "text": "以下の手順は、このページの実際のインターフェースに沿っています。"
          }
        ],
        "steps": [
          "<strong>基準角 [[A]] を確認します。</strong>隣辺はこの角を基準に定義されるからです。",
          "<strong>隣辺 [[b]] を特定します。</strong>角 [[A]] に接する脚のうち、斜辺ではない方です。",
          "<strong>斜辺 [[c]] を特定します。</strong>直角の反対側にある、最も長い辺です。",
          "<strong>両辺の長さを測るか取得します。</strong>同じ単位で測ってください。",
          "<strong>隣辺の長さ</strong>（小さい方の値）を最初の欄に入力します。",
          "<strong>斜辺</strong>（大きい方の値）を2番目の欄に入力します。",
          "<strong>単位選択で単位をそろえます。</strong>そうすることで割り算が意味を持ちます。",
          "<strong>両方の値が正であることを確認します。</strong>ゼロや負の長さでは三角形は作れません。",
          "<strong>斜辺が隣辺より長いことを確認します。</strong>そうでない場合、入力が逆か、辺のラベルが間違っています。",
          "<strong>「計算する cos(A)」をクリックします。</strong>隣辺を斜辺で割ります。",
          "<strong>余弦比を読み取ります。</strong>斜辺に対する隣辺の割合です。",
          "<strong>答えが0と1の間にあることを確認します。</strong>この範囲を外れる場合は入力ミスのサインです。",
          "<strong>「Reset」を使います。</strong>入力を消去して最初からやり直せます。"
        ],
        "listItems": [],
        "related": [],
        "tables": [],
        "figures": [],
        "closingParagraphs": [
          "計算機が尋ねるのは、度で表した角でも対辺でも、反転させる値でもありません。2つの辺の長さが完全な入力です。"
        ]
      },
      "cos-examples": {
        "h2": "余弦の計算のステップバイステップ例",
        "blocks": [
          {
            "kind": "p",
            "text": "各例は同じパターンに従います。公式を書く、代入する、割り算する、の順です。"
          },
          {
            "kind": "h3",
            "text": "例1: 3-4-5直角三角形"
          },
          {
            "kind": "p",
            "text": "[[b=4\\text{ cm}]]、[[a=3\\text{ cm}]]、[[c=5\\text{ cm}]] が与えられた場合、"
          },
          {
            "kind": "p",
            "text": "[[\\cos(A)=4/5]]"
          },
          {
            "kind": "p",
            "text": "[[\\boxed{\\cos(A)=0.8}]]"
          },
          {
            "kind": "p",
            "text": "隣辺は斜辺の80パーセントです。対辺は三角形を完成させますが、公式はそれを無視します。"
          },
          {
            "kind": "h3",
            "text": "例2: 5-12-13直角三角形"
          },
          {
            "kind": "p",
            "text": "[[b=12\\text{ m}]]、[[a=5\\text{ m}]]、[[c=13\\text{ m}]] が与えられた場合、"
          },
          {
            "kind": "p",
            "text": "[[\\cos(A)=12/13]]"
          },
          {
            "kind": "p",
            "text": "[[\\boxed{\\cos(A)\\approx0.9231}]]"
          },
          {
            "kind": "p",
            "text": "隣辺は斜辺の約92.31パーセントです。5 mの対辺は必要ありません。"
          },
          {
            "kind": "h3",
            "text": "例3: 30-60-90三角形"
          },
          {
            "kind": "p",
            "text": "角 [[A=30^\\circ]] の場合、隣辺は斜辺の [[\\sqrt{3}/2]] 倍です。[[b=\\sqrt{3}\\text{ cm}]]、[[c=2\\text{ cm}]] として、"
          },
          {
            "kind": "p",
            "text": "[[\\cos(30^\\circ)=\\frac{\\sqrt{3}}{2}]]"
          },
          {
            "kind": "p",
            "text": "[[\\boxed{\\cos(30^\\circ)\\approx0.8660}]]"
          },
          {
            "kind": "p",
            "text": "この特殊角の値は覚える価値があります。30-60-90三角形は幾何の問題に頻繁に登場します。"
          },
          {
            "kind": "h3",
            "text": "例4: 隣辺8、斜辺10の三角形"
          },
          {
            "kind": "p",
            "text": "[[b=8\\text{ m}]]、[[c=10\\text{ m}]] が与えられた場合、"
          },
          {
            "kind": "p",
            "text": "[[\\cos(A)=8/10]]"
          },
          {
            "kind": "p",
            "text": "[[\\boxed{\\cos(A)=0.8}]]"
          },
          {
            "kind": "p",
            "text": "この比が3-4-5三角形と一致するのは、すべての辺を同じ倍率で拡大縮小しても角と比は変わらないからです。"
          }
        ],
        "steps": [],
        "listItems": [],
        "related": [],
        "tables": [],
        "figures": []
      },
      "cos-applications": {
        "h2": "余弦比の実生活での例",
        "blocks": [
          {
            "kind": "p",
            "text": "余弦は単位を持つ物理量ではなく、数学的な比です。その実用的な価値は、隣辺と斜辺の比較、水平方向の投影の計算、測定値の検証にあります。各例は単純化された直角三角形を前提としています。"
          },
          {
            "kind": "h3",
            "text": "例5: はしごの余弦比の計算"
          },
          {
            "kind": "p",
            "text": "5 mのはしごが壁から3 mの位置に立てられています。角 [[A]] ははしごと水平な地面の間にあります。地面までの距離が隣辺 [[b=3\\text{ m}]]、はしごが斜辺 [[c=5\\text{ m}]] です。[[\\cos(A)=3/5]] より、[[\\boxed{\\cos(A)=0.6}]]。つまり地面までの距離ははしごの長さの60パーセントです。この比だけでは、はしごの安全性は確立できません。"
          },
          {
            "kind": "h3",
            "text": "例6: 屋根の垂木の余弦比の計算"
          },
          {
            "kind": "p",
            "text": "屋根の垂木が5 mの傾斜で、水平の長さが4 mあります。水平部分が隣辺 [[b=4\\text{ m}]]、垂木が斜辺 [[c=5\\text{ m}]] です。[[\\cos(A)=4/5]] より、[[\\boxed{\\cos(A)=0.8}]]。つまり水平部分は傾斜の長さの80パーセントです。これは幾何学的な比であり、構造の評価ではありません。"
          },
          {
            "kind": "h3",
            "text": "例7: スロープの余弦比の評価"
          },
          {
            "kind": "p",
            "text": "スロープが9.5 mの傾斜で、水平の長さが9 mあります。[[b=9\\text{ m}]]、[[c=9.5\\text{ m}]] です。[[\\cos(A)=9/9.5]] より、[[\\boxed{\\cos(A)\\approx0.9474}]]。つまり水平部分は傾斜の長さの約94.74パーセントで、緩やかな傾斜として妥当です。バリアフリー基準への適合は確立できません。"
          },
          {
            "kind": "h3",
            "text": "例8: 測量の測定"
          },
          {
            "kind": "p",
            "text": "単純化された測量三角形で、直線距離50 m、水平距離40 mが記録されました。[[b=40\\text{ m}]]、[[c=50\\text{ m}]] です。[[\\cos(A)=40/50]] より、[[\\boxed{\\cos(A)=0.8}]]。つまり水平距離は直線距離の80パーセントです。実際の測量では器械高の補正が必要になる場合があります。"
          },
          {
            "kind": "h3",
            "text": "例9: 支線の余弦比の算出"
          },
          {
            "kind": "p",
            "text": "13 mの支線が、柱から水平に12 m離れた位置に固定されています。[[b=12\\text{ m}]]、[[c=13\\text{ m}]] です。[[\\cos(A)=12/13]] より、[[\\boxed{\\cos(A)\\approx0.9231}]]。つまり離隔距離は支線の長さの約92.31パーセントです。支線の張力や固定部の強度については何も語りません。"
          },
          {
            "kind": "h3",
            "text": "例10: 階段のささら桁の余弦比の計算"
          },
          {
            "kind": "p",
            "text": "単純化された階段のささら桁は長さ5 m、水平の長さ4 mです。[[b=4\\text{ m}]]、[[c=5\\text{ m}]] です。[[\\cos(A)=4/5]] より、[[\\boxed{\\cos(A)=0.8}]]。つまり水平部分は斜めのささら桁の80パーセントです。建築基準への適合は検証できません。"
          },
          {
            "kind": "h3",
            "text": "例11: クレーンのブームの水平投影を理解する"
          },
          {
            "kind": "p",
            "text": "単純化されたクレーンのブームは長さ10 m、水平投影6 mです。[[b=6\\text{ m}]]、[[c=10\\text{ m}]] です。[[\\cos(A)=6/10]] より、[[\\boxed{\\cos(A)=0.6}]]。つまり投影はブームの長さの60パーセントです。吊り上げ能力は確立できません。"
          },
          {
            "kind": "h3",
            "text": "例12: 航空機の直線飛行区間"
          },
          {
            "kind": "p",
            "text": "航空機が直線経路に沿って5 km飛行し、水平に4 km移動しました。[[b=4\\text{ km}]]、[[c=5\\text{ km}]] です。[[\\cos(A)=4/5]] より、[[\\boxed{\\cos(A)=0.8}]]。つまり水平変位は経路長の80パーセントです。理想化されたモデルであり、実際の飛行ナビゲーションではありません。"
          },
          {
            "kind": "h3",
            "text": "例13: 斜めブレースの余弦比の計算"
          },
          {
            "kind": "p",
            "text": "斜めブレースは長さ2 m、水平投影1.2 mです。[[b=1.2\\text{ m}]]、[[c=2\\text{ m}]] です。[[\\cos(A)=1.2/2]] より、[[\\boxed{\\cos(A)=0.6}]]。つまり投影はブレースの長さの60パーセントです。ブレースの強度は判定できません。"
          },
          {
            "kind": "h3",
            "text": "例14: ハイキングコースの余弦比の計算"
          },
          {
            "kind": "p",
            "text": "まっすぐなハイキング区間は長さ100 m、水平変位80 mです。[[b=80\\text{ m}]]、[[c=100\\text{ m}]] です。[[\\cos(A)=80/100]] より、[[\\boxed{\\cos(A)=0.8}]]。つまり変位は経路長の80パーセントです。実際の登山道は曲がり、勾配も変わります。"
          },
          {
            "kind": "h3",
            "text": "例15: ひさしの支柱"
          },
          {
            "kind": "p",
            "text": "ひさしの支柱は長さ3 m、水平投影2.4 mです。[[b=2.4\\text{ m}]]、[[c=3\\text{ m}]] です。[[\\cos(A)=2.4/3]] より、[[\\boxed{\\cos(A)=0.8}]]。つまり投影は支柱の長さの80パーセントです。構造的な適合性は確立できません。"
          },
          {
            "kind": "h3",
            "text": "例16: 2点間のケーブル"
          },
          {
            "kind": "p",
            "text": "まっすぐなケーブルが、水平に24 m離れた2点の間に25 m張られています。[[b=24\\text{ m}]]、[[c=25\\text{ m}]] です。[[\\cos(A)=24/25]] より、[[\\boxed{\\cos(A)=0.96}]]。つまり離隔距離はケーブル長の96パーセントです。このモデルは、ケーブルが直線で直角三角形をなすことを前提としています。"
          },
          {
            "kind": "h3",
            "text": "実例の比較"
          }
        ],
        "steps": [],
        "listItems": [],
        "related": [],
        "tables": [
          {
            "headers": [
              "状況",
              "隣辺 b",
              "斜辺 c",
              "余弦の公式",
              "計算された比",
              "解釈"
            ],
            "rows": [
              [
                "はしご",
                "3 m",
                "5 m",
                "3/5",
                "0.6",
                "地面までの距離ははしごの長さの60%"
              ],
              [
                "屋根の垂木",
                "4 m",
                "5 m",
                "4/5",
                "0.8",
                "水平部分は垂木の長さの80%"
              ],
              [
                "スロープ",
                "9 m",
                "9.5 m",
                "9/9.5",
                "0.9474",
                "水平部分は傾斜の長さの94.74%"
              ],
              [
                "測量",
                "40 m",
                "50 m",
                "40/50",
                "0.8",
                "水平距離は直線距離の80%"
              ],
              [
                "支線",
                "12 m",
                "13 m",
                "12/13",
                "0.9231",
                "離隔距離は支線の長さの92.31%"
              ],
              [
                "階段のささら桁",
                "4 m",
                "5 m",
                "4/5",
                "0.8",
                "水平部分はささら桁の長さの80%"
              ],
              [
                "クレーンのブーム",
                "6 m",
                "10 m",
                "6/10",
                "0.6",
                "投影はブームの長さの60%"
              ],
              [
                "飛行区間",
                "4 km",
                "5 km",
                "4/5",
                "0.8",
                "変位は経路長の80%"
              ],
              [
                "斜めブレース",
                "1.2 m",
                "2 m",
                "1.2/2",
                "0.6",
                "投影はブレースの長さの60%"
              ],
              [
                "ハイキングコース",
                "80 m",
                "100 m",
                "80/100",
                "0.8",
                "変位は経路長の80%"
              ],
              [
                "ひさしの支柱",
                "2.4 m",
                "3 m",
                "2.4/3",
                "0.8",
                "投影は支柱の長さの80%"
              ],
              [
                "ケーブル",
                "24 m",
                "25 m",
                "24/25",
                "0.96",
                "離隔距離はケーブルの長さの96%"
              ]
            ]
          }
        ],
        "figures": [
          {
            "alt": "はしご0.6、垂木0.8、測量0.8、クレーンのブーム0.6の4パネル。それぞれラベル付きの直角三角形",
            "caption": "4つの実用的な計算、はしご、屋根の垂木、測量、クレーンのブーム。それぞれ三角形、公式、比を示しています。"
          }
        ],
        "closingParagraphs": [
          "パターンは一貫しています。隣辺が斜辺に占める割合が大きいほど比は大きく、角が開くほど比は小さくなります。"
        ]
      },
      "cos-angle": {
        "h2": "余弦と角の大きさの関係を理解する",
        "blocks": [
          {
            "kind": "p",
            "text": "余弦は、鋭角が大きくなるにつれて小さくなります。小さな角では隣辺がほぼ斜辺と同じ長さに保たれるため、比は1に近づきます。角 [[A]] が [[90^\\circ]] に向かって開いていくと、隣辺が占める割合は小さくなり、比は下がります。以下の検証済みの基準値がそのパターンを示しています。"
          }
        ],
        "steps": [],
        "listItems": [],
        "related": [],
        "tables": [
          {
            "headers": [
              "角 A",
              "隣辺 b",
              "斜辺 c",
              "余弦比"
            ],
            "rows": [
              [
                "30 deg",
                "sqrt(3)",
                "2",
                "約0.8660"
              ],
              [
                "45 deg",
                "1",
                "sqrt(2)",
                "約0.7071"
              ],
              [
                "60 deg",
                "1",
                "2",
                "0.5"
              ],
              [
                "80 deg",
                "1",
                "約5.7588",
                "約0.1736"
              ]
            ]
          }
        ],
        "figures": [
          {
            "alt": "30度、45度、60度の3つの三角形。余弦の値は0.8660、0.7071、0.5。角が大きくなると余弦は下がる",
            "caption": "角Aが大きくなると、隣辺が斜辺に占める割合は小さくなり、cos(A)は下がります。"
          }
        ],
        "closingParagraphs": [
          "表の測定値は例示です。角を決めるのは絶対的な長さではなく、比です。比は、角が [[90^\\circ]] に近づくにつれて0に近づき、角が [[0^\\circ]] に近づくにつれて1に近づき、すべての有効な三角形で厳密にその間に収まります。",
          "計算機は角の入力を受け付けません。これらの基準値は、結果を検証する際の目安と確認値として役立ちます。"
        ]
      },
      "cos-recover": {
        "h2": "余弦を使って辺と角を求める",
        "blocks": [
          {
            "kind": "p",
            "text": "余弦の公式はきれいに変形でき、残り2つが既知なら3つの量のいずれも復元できます。"
          },
          {
            "kind": "h3",
            "text": "隣辺の求め方"
          },
          {
            "kind": "p",
            "text": "[[\\cos(A)=b/c]] から始め、両辺に [[c]] を掛けます。"
          },
          {
            "kind": "p",
            "text": "[[[\\boxed{b=c\\cos(A)}]]]"
          },
          {
            "kind": "p",
            "text": "[[c=10\\text{ m}]]、[[A=60^\\circ]] の場合、[[b=10\\cos(60^\\circ)]] となります。[[\\cos(60^\\circ)=0.5]] なので、[[\\boxed{b=5\\text{ m}}]] です。この角では斜辺の半分になります。"
          },
          {
            "kind": "h3",
            "text": "斜辺の求め方"
          },
          {
            "kind": "p",
            "text": "代わりに [[c]] について解くと次のようになります。"
          },
          {
            "kind": "p",
            "text": "[[[\\boxed{c=\\frac{b}{\\cos(A)}}]]]"
          },
          {
            "kind": "p",
            "text": "[[b=4\\text{ m}]]、[[A=60^\\circ]] の場合、[[c=4/0.5]] となり、[[\\boxed{c=8\\text{ m}}]] です。"
          },
          {
            "kind": "h3",
            "text": "余弦比から角を求める方法"
          },
          {
            "kind": "p",
            "text": "余弦比と角は異なる量です。比が既知の場合、アークコサインとも呼ばれる逆余弦が角を復元します。"
          },
          {
            "kind": "p",
            "text": "[[[\\boxed{A=\\cos^{-1}\\left(\\frac{b}{c}\\right)}]]]"
          },
          {
            "kind": "p",
            "text": "[[\\cos(A)=0.8]] の場合、[[A=\\cos^{-1}(0.8)]] となり、[[\\boxed{A\\approx36.87^\\circ}]] です。まず関数電卓を度モードに設定してください。これらは数学的な変形です。このページのツールが返すのは比そのものです。"
          }
        ],
        "steps": [],
        "listItems": [],
        "related": [],
        "tables": [],
        "figures": []
      },
      "cos-mistakes": {
        "h2": "余弦の計算でよくある間違い",
        "blocks": [
          {
            "kind": "h3",
            "text": "誤りと正解"
          },
          {
            "kind": "p",
            "text": "[[b=4]]、[[c=5]] が与えられた場合、"
          },
          {
            "kind": "p",
            "text": "誤り: [[5/4=1.25]]。これは余弦の逆数であり、正割と呼ばれます。余弦比ではありません。"
          },
          {
            "kind": "p",
            "text": "正解: [[\\cos(A)=4/5=0.8]]。"
          },
          {
            "kind": "p",
            "text": "鋭角の有効な余弦は、常に0と1の間に収まります。"
          }
        ],
        "steps": [
          "<strong>隣辺の代わりに対辺を使う。</strong>[[a/c]] を計算してしまい、これは正弦です。対策: 角 [[A]] に接する脚を選んでください。",
          "<strong>分数を [[c/b]] と逆にしてしまう。</strong>答えが1を超えます。対策: 長い方の辺が分母でなければなりません。",
          "<strong>余弦と正弦を混同する。</strong>3-4-5三角形で0.6と答えてしまう。対策: 正弦は対辺を使い、余弦は隣辺を使います。",
          "<strong>余弦と正割を混同する。</strong>[[c/b]] を計算してしまう。対策: 正割は余弦の逆数であり、常に1を上回ります。",
          "<strong>斜辺より長い隣辺を入力する。</strong>その入力は不可能な三角形を表します。対策: 斜辺の欄には長い方の測定値を入れてください。",
          "<strong>ゼロや負の辺の長さを入力する。</strong>ゼロでの割り算、または意味のない負の比になります。対策: 正の長さだけを使ってください。",
          "<strong>測定単位を混ぜる。</strong>メートルをセンチメートルで割ると、比が100倍ずれます。対策: まず両辺を一つの単位にそろえてください。",
          "<strong>余弦を度の角として報告する。</strong>0.8度と書いてしまう。対策: 比は純粋な数であり、角ではありません。",
          "<strong>余弦比に単位があると思い込む。</strong>単位は割り算の過程で既に打ち消されています。対策: 答えから単位を外してください。",
          "<strong>基準角をもう一方の鋭角と混同する。</strong>隣辺と対辺のラベルが入れ替わります。対策: まず図に角 [[A]] を書き込んでください。",
          "<strong>早すぎる段階で四捨五入する。</strong>[[12/13]] を0.92に丸めてから逆算すると、避けられる誤差が加わります。対策: 最後のステップまで余分な桁を保持してください。",
          "<strong>余弦がどの三角形でも同じだと思い込む。</strong>一つの値を別の形に当てはめてしまう。対策: 余弦は三角形の比率によって決まります。",
          "<strong>比が直接度の角を与えると思う。</strong>0.8を角として読み取ってしまう。対策: 度を復元するには逆余弦を使ってください。",
          "<strong>余弦0.8を0.8度として読む。</strong>比と角を混同しています。対策: 0.8は比であり、角は約36.87度です。",
          "<strong>基準角を特定する前に脚に名前を付ける。</strong>隣辺と対辺が混ざってしまいます。対策: どの脚にも名前を付ける前に、角 [[A]] を固定してください。"
        ],
        "listItems": [],
        "related": [],
        "tables": [],
        "figures": []
      },
      "cos-verify": {
        "h2": "余弦の結果が正しいか確認する方法",
        "blocks": [
          {
            "kind": "p",
            "text": "有効で退化していない直角三角形では [[0 \\lt b \\lt c]] が必要であり、したがって [[0 \\lt b/c \\lt 1]] となります。両方の測定値は互換性のある単位でなければならず、余弦の結果は0より大きく1より小さくなければなりません。結果が1以上になるのは、通常、入力の逆転、辺の特定ミス、互換性のない測定値が原因です。"
          },
          {
            "kind": "h3",
            "text": "方法1: 比を確認する"
          },
          {
            "kind": "p",
            "text": "[[\\cos(A)=b/c]] を直接検証します。[[b=4]]、[[c=5]] の場合、[[4/5=0.8]] です。"
          },
          {
            "kind": "h3",
            "text": "方法2: ピタゴラスの定理を確認する"
          },
          {
            "kind": "p",
            "text": "対辺が既知の場合や必要な場合は、[[a=\\sqrt{c^2-b^2}]] を計算します。[[b=4]]、[[c=5]] の場合、[[a=\\sqrt{25-16}=3]] であり、[[3^2+4^2=5^2]] です。これにより3-4-5直角三角形の寸法が確認できます。"
          },
          {
            "kind": "h3",
            "text": "方法3: 逆余弦を使って確認する"
          },
          {
            "kind": "p",
            "text": "比が0.8の場合、[[A=\\cos^{-1}(0.8)\\approx36.87^\\circ]] です。次に、角と辺の比が整合していることを確認します。丸めによりわずかな差が生じる場合があります。"
          }
        ],
        "steps": [],
        "listItems": [],
        "related": [],
        "tables": [],
        "figures": []
      },
      "cos-vs": {
        "h2": "余弦と正弦・正接・正割",
        "blocks": [
          {
            "kind": "p",
            "text": "各比は異なる辺のペアを比較しますが、基準角と辺のラベルは共通です。"
          }
        ],
        "steps": [],
        "listItems": [],
        "related": [],
        "tables": [
          {
            "headers": [
              "比",
              "公式",
              "比較するもの"
            ],
            "rows": [
              [
                "正弦",
                "sin(A) = a/c",
                "対辺と斜辺"
              ],
              [
                "余弦",
                "cos(A) = b/c",
                "隣辺と斜辺"
              ],
              [
                "正接",
                "tan(A) = a/b",
                "対辺と隣辺"
              ],
              [
                "正割",
                "sec(A) = c/b",
                "斜辺と隣辺"
              ],
              [
                "余割",
                "csc(A) = c/a",
                "斜辺と対辺"
              ],
              [
                "余接",
                "cot(A) = b/a",
                "隣辺と対辺"
              ]
            ]
          }
        ],
        "figures": [],
        "closingParagraphs": [
          "正割は余弦の逆数です。[[\\sec(A)=1/\\cos(A)]]。[[\\cos(A)=0.8]] なら、[[\\sec(A)=1/0.8=1.25]] です。隣辺や水平投影には余弦を、垂直成分には正弦を、斜辺が関与しない場合には正接を、逆数が必要な式には正割を使ってください。",
          "<a href=\"/sine-ratio-calculator/\" class=\"text-primary hover:underline\">正弦比計算機</a>、<a href=\"/tangent-ratio-calculator/\" class=\"text-primary hover:underline\">正接比計算機</a>、<a href=\"/secant-ratio-calculator/\" class=\"text-primary hover:underline\">正割比計算機</a>、<a href=\"/cosecant-ratio-calculator/\" class=\"text-primary hover:underline\">余割比計算機</a>については、各ページをご覧ください。"
        ]
      },
      "cos-faq": {
        "h2": "よくある質問",
        "blocks": [],
        "steps": [],
        "listItems": [],
        "related": [],
        "tables": [],
        "figures": []
      },
      "cos-related": {
        "h2": "関連する三角関数の計算機を探す",
        "blocks": [],
        "steps": [],
        "listItems": [],
        "related": [
          {
            "name": "正弦比計算機",
            "desc": "角の対辺と斜辺の比を計算します。"
          },
          {
            "name": "正接比計算機",
            "desc": "対辺と隣辺の比を計算します。"
          },
          {
            "name": "正割比計算機",
            "desc": "余弦の逆数である正割を計算します。"
          },
          {
            "name": "余割比計算機",
            "desc": "正弦の逆数である余割を計算します。"
          },
          {
            "name": "直角三角形の角計算機",
            "desc": "辺の長さから角を求めます。"
          },
          {
            "name": "直角三角形の辺計算機",
            "desc": "角と既知の辺から残りの辺を求めます。"
          }
        ],
        "tables": [],
        "figures": []
      }
    },
    "faqHeading": "よくある質問",
    "relatedHeading": "関連する三角関数の計算機を探す",
    "faqs": [
      {
        "question": "直角三角形の余弦比の公式は何ですか？",
        "answer": "cos(A) = b / c です。角Aに隣接する辺を斜辺で割ります。隣辺4 cm、斜辺5 cmの場合、結果は 4/5 = 0.8 です。"
      },
      {
        "question": "2つの辺の長さから余弦を計算するにはどうすればよいですか？",
        "answer": "隣辺bと斜辺cを同じ単位で測り、cがbより長いことを確認してから、cos(A) = b / c を計算します。b = 12 m、c = 13 mの場合、答えは 12/13、約0.9231です。"
      },
      {
        "question": "余弦と正弦の違いは何ですか？",
        "answer": "余弦は隣辺を斜辺で割ります(b/c)。正弦は対辺を斜辺で割ります(a/c)。3-4-5三角形では、cos(A) = 0.8、sin(A) = 0.6です。"
      },
      {
        "question": "直角三角形の鋭角で余弦が1より小さいのはなぜですか？",
        "answer": "斜辺が最も長い辺であるため、bは常にcより小さくなります。小さい正の数を大きい数で割ると1を下回る結果になり、両辺とも正なので0を上回り続けます。"
      },
      {
        "question": "有効な直角三角形で余弦が1を超えることはありますか？",
        "answer": "ありません。余弦が1を超えるには、隣辺が斜辺より長くなければならず、真の直角三角形では不可能です。ツールが1以上を示した場合、入力が逆か、間違った脚を使ったか、測定値が互換性を持ちません。"
      },
      {
        "question": "余弦の値0.8は何を意味しますか？",
        "answer": "隣辺が斜辺の80パーセントの長さであることを意味します。4 m / 5 m = 0.8 です。この数は三角形の形を表し、角ではありません。対応する角は約36.87度で、逆余弦で求めます。"
      },
      {
        "question": "余弦比に単位はありますか？",
        "answer": "ありません。両辺とも同じ単位で測られるため、単位は打ち消されます。4 m / 5 m = 0.8 であり、400 cm / 500 cm = 0.8 です。余弦は無次元の純粋な数として報告し、度、メートル、フィートなどを付けないでください。"
      },
      {
        "question": "余弦比から角を求めるにはどうすればよいですか？",
        "answer": "逆余弦（アークコサイン）を使います。A = cos^-1(比) です。0.8の場合、A = cos^-1(0.8)、約36.87度です。このページの計算機が返すのは比であり角ではないため、まず電卓を度モードに設定してください。"
      },
      {
        "question": "余弦を使って隣辺を求めるにはどうすればよいですか？",
        "answer": "公式を変形して b = c x cos(A) とします。斜辺に角の余弦を掛けます。c = 10 m、角A = 60度の場合、cos(60度) = 0.5 なので、b = 10 x 0.5 = 5 m です。"
      },
      {
        "question": "余弦と正割の違いは何ですか？",
        "answer": "正割は余弦の逆数です。sec(A) = c / b、つまり 1 / cos(A) です。余弦は1を下回る値を与え、正割は分数を反転させて1を上回る値を与えます。cos(A) = 0.8 の場合、sec(A) = 1.25 です。"
      },
      {
        "question": "対辺がわからなくても余弦を計算できますか？",
        "answer": "はい。余弦に必要なのは隣辺と斜辺だけです。cos(A) = b/c において対辺は役割を持たないため、この計算機が対辺を尋ねることはありません。"
      },
      {
        "question": "余弦は実際の測定にどう使えますか？",
        "answer": "余弦は水平方向の投影を求める道具です。はしごの長さから地面までの距離、垂木の長さから水平部分、力の水平成分などを求められます。斜辺にcos(A)を掛けて隣辺を得るか、この比を使って測定値が直角三角形に適合するか検証してください。"
      }
    ],
    "conclusion": {
      "h2": "自信を持って余弦比をマスターする",
      "paragraphs": [
        "余弦とは、隣辺が斜辺をどれだけ覆っているかの割合です。三角形の形を表すには [[b]] を [[c]] で割ります。公式 [[\\cos(A)=b/c]] に必要な測定値は2つだけで、答えは常に0と1の間の無次元の数です。変形した形 [[b=c\\cos(A)]] と [[A=\\cos^{-1}(b/c)]] を使えば、不足している辺や角を復元できます。はしご、垂木、教科書の3-4-5三角形のいずれでも、方法は変わりません。隣辺を特定し、斜辺を特定し、割り算し、検証します。"
      ]
    }
  },
  "ko": {
    "tocHeading": "이 가이드의 내용",
    "tocItems": {
      "cos-intro": "코사인 비 계산기란 무엇인가?",
      "cos-triangle": "인접변과 빗변 이해하기",
      "cos-whatis": "코사인 비 이해하기",
      "cos-formula": "코사인 공식의 원리",
      "cos-howto": "코사인 비 계산기 사용 방법",
      "cos-examples": "코사인 계산 단계별 예제",
      "cos-applications": "코사인 비의 실생활 예제",
      "cos-angle": "코사인과 각 크기의 관계 이해하기",
      "cos-recover": "코사인으로 변과 각도 구하기",
      "cos-mistakes": "코사인 계산 시 흔한 실수",
      "cos-verify": "코사인 결과가 유효한지 확인하는 방법",
      "cos-vs": "코사인 vs 사인, 탄젠트, 시컨트",
      "cos-related": "관련 삼각함수 계산기 살펴보기",
      "cos-faq": "자주 묻는 질문"
    },
    "sections": {
      "cos-intro": {
        "h2": "코사인 비 계산기란 무엇인가?",
        "blocks": [
          {
            "kind": "p",
            "text": "코사인 비 계산기는 하나의 질문에 답합니다. 직각삼각형의 예각에 대해, 인접변은 빗변에 비해 얼마나 긴가? 두 변의 길이를 입력하면 이 도구는 인접변을 빗변으로 나누어 [[\\cos(A)=b/c]] 를 반환합니다. 인접변이 4 cm이고 빗변이 5 cm인 경우 계산은 [[4/5=0.8]] 입니다. 인접변이 빗변의 80퍼센트라는 뜻입니다. 이 소수가 완전한 답입니다. 나누는 과정에서 센티미터가 약분되므로 단위가 없으며, 도 단위의 각도도 아닙니다. 대변은 이 계산에 전혀 들어가지 않습니다. 이 하나의 비에서 도형들을 비교하고, 측정값을 점검하고, 수평 투영을 구하고, 역코사인으로 각도를 복원할 수 있습니다."
          }
        ],
        "steps": [],
        "listItems": [],
        "related": [],
        "tables": [],
        "figures": []
      },
      "cos-triangle": {
        "h2": "인접변과 빗변 이해하기",
        "blocks": [
          {
            "kind": "h3",
            "text": "직각삼각형이란 무엇인가?"
          },
          {
            "kind": "p",
            "text": "직각삼각형은 정확히 [[90^\\circ]] 인 각 하나를 가집니다. 벽이 수평 바닥과 만나는 것처럼 두 수직선이 이루는 각입니다. 빗변은 그 직각의 맞은편에 있으며 항상 가장 긴 변입니다. 나머지 두 각이 남은 90도를 나누어 가지므로 둘 다 예각입니다. 코사인은 그 변들 중 두 변을 고정된 관계로 비교합니다."
          },
          {
            "kind": "h3",
            "text": "인접변이란 무엇인가?"
          },
          {
            "kind": "p",
            "text": "인접변 [[b]] 는 빗변이 아닌 변 중에서 기준각 [[A]] 에 닿는 다리입니다. 흔히 수평 거리를 나타냅니다. 사다리에서 지면까지의 거리, 서까래의 수평 길이, 힘의 투영이 그 예입니다. 어느 다리가 인접변이 되는지는 기준각에 따라 달라지므로, 각 [[A]] 에서 각 [[B]] 로 바꾸면 인접과 대변의 이름이 서로 바뀝니다."
          },
          {
            "kind": "h3",
            "text": "빗변이란 무엇인가?"
          },
          {
            "kind": "p",
            "text": "빗변 [[c]] 는 직각의 맞은편 변입니다. 어떤 그림에서든 [[90^\\circ]] 모서리를 표시하는 작은 정사각형과 마주 보고 있으며, 가장 긴 변입니다. 실제 상황에서는 사다리, 서까래, 경사로, 케이블, 직선 경로일 수 있으며, 항상 인접변보다 엄격히 깁니다."
          },
          {
            "kind": "h3",
            "text": "대변이란 무엇인가?"
          },
          {
            "kind": "p",
            "text": "대변 [[a]] 는 각 [[A]] 의 정반대편에 있으며 그 꼭짓점에 닿지 않습니다. 코사인 공식에서는 아무 역할도 하지 않으므로, 이 계산기는 대변을 묻지 않습니다. 기준각을 정확히 잡으십시오. 잘못된 각을 고르면 대변과 인접변의 이름이 조용히 뒤바뀝니다."
          }
        ],
        "steps": [],
        "listItems": [],
        "related": [],
        "tables": [],
        "figures": [
          {
            "alt": "각 A가 왼쪽 아래에 있는 직각삼각형, 금색 인접변 b, 파란색 빗변 c, 중립색 대변 a, cos(A)=b/c",
            "caption": "각 A는 왼쪽 아래에 있습니다. 코사인은 대변 a가 아니라 인접변 b와 빗변 c를 사용합니다."
          }
        ]
      },
      "cos-whatis": {
        "h2": "코사인 비 이해하기",
        "blocks": [
          {
            "kind": "p",
            "text": "코사인은 각 [[A]] 옆의 다리와 전체 빗변을 비교합니다."
          },
          {
            "kind": "p",
            "text": "[[[\\cos(A)=\\frac{b}{c}]]]"
          },
          {
            "kind": "p",
            "text": "여기서 [[\\cos(A)]] 는 각 [[A]] 의 코사인, [[b]] 는 인접변, [[c]] 는 빗변입니다. 즉 인접변이 빗변의 몇 퍼센트를 차지하는지를 나타냅니다."
          },
          {
            "kind": "h3",
            "text": "SOH-CAH-TOA 이해하기"
          },
          {
            "kind": "p",
            "text": "SOH: 사인 = 대변 / 빗변. CAH: 코사인 = 인접변 / 빗변. TOA: 탄젠트 = 대변 / 인접변. CAH라는 글자는 코사인 공식을 그대로 풀어낸 것입니다. 첫 글자는 함수 이름, 두 번째 글자는 분자, 세 번째 글자는 분모를 나타냅니다."
          },
          {
            "kind": "h3",
            "text": "코사인이 비인 이유"
          },
          {
            "kind": "p",
            "text": "두 길이를 나누면 단위가 약분됩니다. [[4\\text{ m}/5\\text{ m}=0.8]] 이고, [[400\\text{ cm}/500\\text{ cm}=0.8]] 도 마찬가지입니다. 같은 실제 변은 어떤 단위로 재든 항상 같은 수가 나오며, 다만 두 변이 같은 단위를 공유해야 합니다."
          },
          {
            "kind": "h3",
            "text": "코사인 값 0.8의 의미"
          },
          {
            "kind": "p",
            "text": "인접변이 빗변의 80퍼센트라는 뜻입니다. 각 옆의 다리가 길고 빗변은 그보다 약간만 깁니다. 각도를 직접 알려주지는 않습니다. 각도를 알려면 역코사인이 필요합니다."
          },
          {
            "kind": "h3",
            "text": "코사인이 1보다 작은 이유"
          },
          {
            "kind": "p",
            "text": "빗변은 어느 다리보다 길므로 [[b \\lt c]] 이고 [[b/c \\lt 1]] 이며, 두 변이 모두 양수이므로 비는 0보다 크게 유지됩니다. 유효하고 퇴화하지 않은 직각삼각형에서 코사인은 항상 엄격히 0과 1 사이에 들어갑니다. 경계값 0과 1은 도달 가능한 값이 아니라 극한입니다."
          },
          {
            "kind": "h3",
            "text": "코사인 vs 사인"
          },
          {
            "kind": "p",
            "text": "[[\\cos(A)=b/c]] 와 [[\\sin(A)=a/c]] 는 빗변을 공유하지만 서로 다른 다리를 사용합니다. 인접변을 알거나 구해야 할 때는 코사인을, 대변일 때는 사인을 선택하십시오. 둘을 혼동하는 것이 가장 흔한 초기 실수입니다."
          }
        ],
        "steps": [],
        "listItems": [],
        "related": [],
        "tables": [],
        "figures": [
          {
            "alt": "세 단계: 표시된 3-4-5 삼각형, 코사인 공식 cos(A)=b/c, 결과 4/5=0.8, 인접변은 80퍼센트",
            "caption": "세 단계: 변을 확인하고, cos(A) = b/c를 적용하고, 나눕니다. 인접변은 빗변의 80퍼센트입니다."
          }
        ]
      },
      "cos-formula": {
        "h2": "코사인 공식의 원리",
        "blocks": [
          {
            "kind": "p",
            "text": "정의에서 출발합니다. 코사인은 인접변을 빗변으로 나눈 값입니다. 이 페이지의 기호로는 다음과 같습니다."
          },
          {
            "kind": "p",
            "text": "[[[\\boxed{\\cos(A)=\\frac{b}{c}}]]]"
          },
          {
            "kind": "p",
            "text": "인접변이 분자인 이유는 비교 대상인 다리이기 때문이고, 빗변이 분모인 이유는 기준이 되는 길이기 때문입니다."
          },
          {
            "kind": "h3",
            "text": "완전 풀이 예제: 3-4-5 삼각형"
          },
          {
            "kind": "p",
            "text": "[[b=4\\text{ cm}]] , [[a=3\\text{ cm}]] , [[c=5\\text{ cm}]] 이 주어졌습니다."
          },
          {
            "kind": "p",
            "text": "1단계: 공식을 씁니다. [[\\cos(A)=b/c]]"
          },
          {
            "kind": "p",
            "text": "2단계: 측정값을 대입합니다. [[\\cos(A)=4/5]]"
          },
          {
            "kind": "p",
            "text": "3단계: 나눕니다. [[\\boxed{\\cos(A)=0.8}]]"
          },
          {
            "kind": "p",
            "text": "4단계: 답을 해석합니다. 인접변은 빗변의 80퍼센트입니다."
          },
          {
            "kind": "p",
            "text": "5단계: 삼각형을 검증합니다. [[3^2+4^2=5^2]] 이므로 [[9+16=25]] 입니다. 변의 길이가 수학적으로 일관됩니다."
          },
          {
            "kind": "p",
            "text": "비 대신 각도가 필요하다면 역코사인이 다음 단계입니다. [[A=\\cos^{-1}(0.8)\\approx36.87^\\circ]] . 이는 별개의 계산이며, 이 페이지의 도구는 비만 반환합니다."
          }
        ],
        "steps": [],
        "listItems": [],
        "related": [],
        "tables": [],
        "figures": []
      },
      "cos-howto": {
        "h2": "코사인 비 계산기 사용 방법",
        "blocks": [
          {
            "kind": "p",
            "text": "아래 안내는 이 페이지의 실제 화면과 일치합니다."
          }
        ],
        "steps": [
          "<strong>기준각 [[A]] 를 확인합니다.</strong> 인접변은 기준각에 상대적으로 정의되기 때문입니다.",
          "<strong>인접변 [[b]] 를 찾습니다.</strong> 빗변이 아닌 변 중 각 [[A]] 에 닿는 다리입니다.",
          "<strong>빗변 [[c]] 를 찾습니다.</strong> 직각의 맞은편 변으로, 가장 긴 변입니다.",
          "<strong>두 변의 길이를 측정하거나 구합니다.</strong> 같은 단위를 사용하십시오.",
          "<strong>인접변의 길이</strong>(작은 값)를 첫 번째 입력란에 입력합니다.",
          "<strong>빗변</strong>(큰 값)을 두 번째 입력란에 입력합니다.",
          "<strong>단위 선택기로 단위를 맞춥니다.</strong> 그래야 나눗셈이 의미를 가집니다.",
          "<strong>두 값이 모두 양수인지 확인합니다.</strong> 0이나 음수 길이는 삼각형을 이룰 수 없습니다.",
          "<strong>빗변이 인접변보다 긴지 확인합니다.</strong> 그렇지 않다면 입력이 뒤바뀌었거나 변 이름이 잘못된 것입니다.",
          "<strong>계산하기 cos(A) 버튼을 누릅니다.</strong> 인접변을 빗변으로 나눕니다.",
          "<strong>코사인 비를 읽습니다.</strong> 빗변에서 인접변이 차지하는 비율입니다.",
          "<strong>답이 0과 1 사이인지 확인합니다.</strong> 그 범위를 벗어나면 입력 오류의 신호입니다.",
          "<strong>Reset을 사용합니다.</strong> 입력을 지우고 처음부터 다시 시작합니다."
        ],
        "listItems": [],
        "related": [],
        "tables": [],
        "figures": [],
        "closingParagraphs": [
          "이 계산기는 각도(도), 대변, 역수를 묻지 않습니다. 두 변의 길이가 완전한 입력입니다."
        ]
      },
      "cos-examples": {
        "h2": "코사인 계산 단계별 예제",
        "blocks": [
          {
            "kind": "p",
            "text": "모든 예제는 같은 패턴을 따릅니다. 공식을 쓰고, 대입하고, 나눕니다."
          },
          {
            "kind": "h3",
            "text": "예제 1: 3-4-5 직각삼각형"
          },
          {
            "kind": "p",
            "text": "[[b=4\\text{ cm}]] , [[a=3\\text{ cm}]] , [[c=5\\text{ cm}]] 이 주어졌습니다."
          },
          {
            "kind": "p",
            "text": "[[\\cos(A)=4/5]]"
          },
          {
            "kind": "p",
            "text": "[[\\boxed{\\cos(A)=0.8}]]"
          },
          {
            "kind": "p",
            "text": "인접변은 빗변의 80퍼센트입니다. 대변은 삼각형을 완성하지만 공식은 이를 무시합니다."
          },
          {
            "kind": "h3",
            "text": "예제 2: 5-12-13 직각삼각형"
          },
          {
            "kind": "p",
            "text": "[[b=12\\text{ m}]] , [[a=5\\text{ m}]] , [[c=13\\text{ m}]] 이 주어졌습니다."
          },
          {
            "kind": "p",
            "text": "[[\\cos(A)=12/13]]"
          },
          {
            "kind": "p",
            "text": "[[\\boxed{\\cos(A)\\approx0.9231}]]"
          },
          {
            "kind": "p",
            "text": "인접변은 빗변의 약 92.31퍼센트입니다. 5 m 대변은 필요 없습니다."
          },
          {
            "kind": "h3",
            "text": "예제 3: 30-60-90 삼각형"
          },
          {
            "kind": "p",
            "text": "각 [[A=30^\\circ]] 에서 인접변은 빗변의 [[\\sqrt{3}/2]] 배입니다. [[b=\\sqrt{3}\\text{ cm}]] , [[c=2\\text{ cm}]] 인 경우:"
          },
          {
            "kind": "p",
            "text": "[[\\cos(30^\\circ)=\\frac{\\sqrt{3}}{2}]]"
          },
          {
            "kind": "p",
            "text": "[[\\boxed{\\cos(30^\\circ)\\approx0.8660}]]"
          },
          {
            "kind": "p",
            "text": "이 특수각 값은 외워둘 만합니다. 30-60-90 삼각형은 기하 문제에 끊임없이 등장합니다."
          },
          {
            "kind": "h3",
            "text": "예제 4: 인접변이 8이고 빗변이 10인 삼각형"
          },
          {
            "kind": "p",
            "text": "[[b=8\\text{ m}]] , [[c=10\\text{ m}]] 이 주어졌습니다."
          },
          {
            "kind": "p",
            "text": "[[\\cos(A)=8/10]]"
          },
          {
            "kind": "p",
            "text": "[[\\boxed{\\cos(A)=0.8}]]"
          },
          {
            "kind": "p",
            "text": "모든 변을 같은 비율로 확대해도 각도와 비는 변하지 않으므로, 이 비는 3-4-5 삼각형과 일치합니다."
          }
        ],
        "steps": [],
        "listItems": [],
        "related": [],
        "tables": [],
        "figures": []
      },
      "cos-applications": {
        "h2": "코사인 비의 실생활 예제",
        "blocks": [
          {
            "kind": "p",
            "text": "코사인은 단위가 있는 물리량이 아니라 수학적인 비입니다. 실용적 가치는 인접변과 빗변을 비교하고, 수평 투영을 계산하고, 측정값을 검증하는 데 있습니다. 각 예제는 단순화된 직각삼각형을 가정합니다."
          },
          {
            "kind": "h3",
            "text": "예제 5: 사다리의 코사인 비 계산"
          },
          {
            "kind": "p",
            "text": "5 m 사다리가 벽에서 3 m 떨어진 지점에 서 있고, 각 [[A]] 는 사다리와 수평 지면 사이에 있습니다. 지면 거리가 인접변 [[b=3\\text{ m}]] , 사다리가 빗변 [[c=5\\text{ m}]] 입니다. [[\\cos(A)=3/5]] 이므로 [[\\boxed{\\cos(A)=0.6}]] 입니다. 지면 거리는 사다리 길이의 60퍼센트입니다. 비만으로는 사다리 안전을 판단할 수 없습니다."
          },
          {
            "kind": "h3",
            "text": "예제 6: 지붕 서까래의 코사인 비 계산"
          },
          {
            "kind": "p",
            "text": "지붕 서까래가 5 m 경사지고 수평 길이가 4 m입니다. 수평 길이가 인접변 [[b=4\\text{ m}]] , 서까래가 빗변 [[c=5\\text{ m}]] 입니다. [[\\cos(A)=4/5]] 이므로 [[\\boxed{\\cos(A)=0.8}]] 입니다. 수평 길이는 경사 길이의 80퍼센트입니다. 기하학적 비이지 구조 평가가 아닙니다."
          },
          {
            "kind": "h3",
            "text": "예제 7: 경사로의 코사인 비 평가"
          },
          {
            "kind": "p",
            "text": "경사로가 9.5 m 경사지고 수평 길이가 9 m입니다. [[b=9\\text{ m}]] , [[c=9.5\\text{ m}]] . [[\\cos(A)=9/9.5]] 이므로 [[\\boxed{\\cos(A)\\approx0.9474}]] 입니다. 수평 길이는 경사 길이의 약 94.74퍼센트로, 완만한 경사에 걸맞습니다. 접근성 기준 충족 여부를 판단하지 않습니다."
          },
          {
            "kind": "h3",
            "text": "예제 8: 측량 측정"
          },
          {
            "kind": "p",
            "text": "단순화된 측량 삼각형에서 직선 거리 50 m, 수평 거리 40 m을 기록했습니다. [[b=40\\text{ m}]] , [[c=50\\text{ m}]] . [[\\cos(A)=40/50]] 이므로 [[\\boxed{\\cos(A)=0.8}]] 입니다. 수평 거리는 직선 거리의 80퍼센트입니다. 실제 측량에서는 기기 높이 보정이 필요할 수 있습니다."
          },
          {
            "kind": "h3",
            "text": "예제 9: 지지선의 코사인 비 구하기"
          },
          {
            "kind": "p",
            "text": "13 m 지지선이 기둥에서 수평으로 12 m 떨어진 지점에 고정되었습니다. [[b=12\\text{ m}]] , [[c=13\\text{ m}]] . [[\\cos(A)=12/13]] 이므로 [[\\boxed{\\cos(A)\\approx0.9231}]] 입니다. 이격 거리는 선 길이의 약 92.31퍼센트입니다. 선의 장력이나 앵커 강도에 대해서는 말해주지 않습니다."
          },
          {
            "kind": "h3",
            "text": "예제 10: 계단 디딤판의 코사인 비 계산"
          },
          {
            "kind": "p",
            "text": "단순화된 계단 디딤판이 5 m 길이이고 수평 길이가 4 m입니다. [[b=4\\text{ m}]] , [[c=5\\text{ m}]] . [[\\cos(A)=4/5]] 이므로 [[\\boxed{\\cos(A)=0.8}]] 입니다. 수평 길이는 대각선 디딤판의 80퍼센트입니다. 건축 기준 충족 여부를 검증하지 않습니다."
          },
          {
            "kind": "h3",
            "text": "예제 11: 크레인 붐의 수평 투영 이해"
          },
          {
            "kind": "p",
            "text": "단순화된 크레인 붐이 10 m 길이이고 수평 투영이 6 m입니다. [[b=6\\text{ m}]] , [[c=10\\text{ m}]] . [[\\cos(A)=6/10]] 이므로 [[\\boxed{\\cos(A)=0.6}]] 입니다. 투영은 붐 길이의 60퍼센트입니다. 들어올리는 능력을 판단하지 않습니다."
          },
          {
            "kind": "h3",
            "text": "예제 12: 직선 항공기 비행 구간"
          },
          {
            "kind": "p",
            "text": "항공기가 직선 경로로 5 km를 이동하며 수평으로 4 km를 이동했습니다. [[b=4\\text{ km}]] , [[c=5\\text{ km}]] . [[\\cos(A)=4/5]] 이므로 [[\\boxed{\\cos(A)=0.8}]] 입니다. 수평 변위는 경로 길이의 80퍼센트입니다. 이상화된 모형이지 실제 항법이 아닙니다."
          },
          {
            "kind": "h3",
            "text": "예제 13: 대각선 가새의 코사인 비 계산"
          },
          {
            "kind": "p",
            "text": "대각선 가새가 2 m 길이이고 수평 투영이 1.2 m입니다. [[b=1.2\\text{ m}]] , [[c=2\\text{ m}]] . [[\\cos(A)=1.2/2]] 이므로 [[\\boxed{\\cos(A)=0.6}]] 입니다. 투영은 가새 길이의 60퍼센트입니다. 가새 강도를 결정하지 않습니다."
          },
          {
            "kind": "h3",
            "text": "예제 14: 등산로의 코사인 비 계산"
          },
          {
            "kind": "p",
            "text": "직선 등산 구간이 100 m 길이이고 수평 변위가 80 m입니다. [[b=80\\text{ m}]] , [[c=100\\text{ m}]] . [[\\cos(A)=80/100]] 이므로 [[\\boxed{\\cos(A)=0.8}]] 입니다. 변위는 경로 길이의 80퍼센트입니다. 실제 등산로는 굽이지고 경사가 바뀝니다."
          },
          {
            "kind": "h3",
            "text": "예제 15: 어닝 지지대"
          },
          {
            "kind": "p",
            "text": "어닝 지지대가 3 m 길이이고 수평 투영이 2.4 m입니다. [[b=2.4\\text{ m}]] , [[c=3\\text{ m}]] . [[\\cos(A)=2.4/3]] 이므로 [[\\boxed{\\cos(A)=0.8}]] 입니다. 투영은 지지대 길이의 80퍼센트입니다. 구조적 적합성을 판단하지 않습니다."
          },
          {
            "kind": "h3",
            "text": "예제 16: 두 지점 사이의 케이블"
          },
          {
            "kind": "p",
            "text": "직선 케이블이 수평으로 24 m 떨어진 두 지점 사이를 25 m로 연결합니다. [[b=24\\text{ m}]] , [[c=25\\text{ m}]] . [[\\cos(A)=24/25]] 이므로 [[\\boxed{\\cos(A)=0.96}]] 입니다. 이격 거리는 케이블 길이의 96퍼센트입니다. 이 모형은 케이블이 직선이고 직각삼각형을 이룬다고 가정합니다."
          },
          {
            "kind": "h3",
            "text": "실용 예제 비교"
          }
        ],
        "steps": [],
        "listItems": [],
        "related": [],
        "tables": [
          {
            "headers": [
              "상황",
              "인접변 b",
              "빗변 c",
              "코사인 공식",
              "계산된 비",
              "해석"
            ],
            "rows": [
              [
                "사다리",
                "3 m",
                "5 m",
                "3/5",
                "0.6",
                "지면 거리는 사다리 길이의 60%"
              ],
              [
                "지붕 서까래",
                "4 m",
                "5 m",
                "4/5",
                "0.8",
                "수평 길이는 서까래 길이의 80%"
              ],
              [
                "경사로",
                "9 m",
                "9.5 m",
                "9/9.5",
                "0.9474",
                "수평 길이는 경사 길이의 94.74%"
              ],
              [
                "측량",
                "40 m",
                "50 m",
                "40/50",
                "0.8",
                "수평 거리는 직선 거리의 80%"
              ],
              [
                "지지선",
                "12 m",
                "13 m",
                "12/13",
                "0.9231",
                "이격 거리는 선 길이의 92.31%"
              ],
              [
                "계단 디딤판",
                "4 m",
                "5 m",
                "4/5",
                "0.8",
                "수평 길이는 디딤판 길이의 80%"
              ],
              [
                "크레인 붐",
                "6 m",
                "10 m",
                "6/10",
                "0.6",
                "투영은 붐 길이의 60%"
              ],
              [
                "비행 구간",
                "4 km",
                "5 km",
                "4/5",
                "0.8",
                "변위는 경로 길이의 80%"
              ],
              [
                "대각선 가새",
                "1.2 m",
                "2 m",
                "1.2/2",
                "0.6",
                "투영은 가새 길이의 60%"
              ],
              [
                "등산로",
                "80 m",
                "100 m",
                "80/100",
                "0.8",
                "변위는 경로 길이의 80%"
              ],
              [
                "어닝 지지대",
                "2.4 m",
                "3 m",
                "2.4/3",
                "0.8",
                "투영은 지지대 길이의 80%"
              ],
              [
                "케이블",
                "24 m",
                "25 m",
                "24/25",
                "0.96",
                "이격 거리는 케이블 길이의 96%"
              ]
            ]
          }
        ],
        "figures": [
          {
            "alt": "네 패널: 사다리 비 0.6, 서까래 0.8, 측량 0.8, 크레인 붐 0.6, 각각 표시된 직각삼각형",
            "caption": "네 가지 실용 계산: 사다리, 지붕 서까래, 측량, 크레인 붐으로, 각각 삼각형, 공식, 비가 표시됩니다."
          }
        ],
        "closingParagraphs": [
          "패턴은 일관됩니다. 인접변이 빗변에서 차지하는 비중이 크면 비가 크고, 각이 벌어지면 비가 작아집니다."
        ]
      },
      "cos-angle": {
        "h2": "코사인과 각 크기의 관계 이해하기",
        "blocks": [
          {
            "kind": "p",
            "text": "코사인은 예각이 커질수록 작아집니다. 각이 작으면 인접변이 빗변과 거의 같은 길이를 유지하므로 비가 1에 가깝습니다. 각 [[A]] 가 [[90^\\circ]] 쪽으로 벌어질수록 인접변은 빗변에서 차지하는 비중이 줄고 비는 떨어집니다. 아래 검증된 기준값이 그 패턴을 보여줍니다."
          }
        ],
        "steps": [],
        "listItems": [],
        "related": [],
        "tables": [
          {
            "headers": [
              "각 A",
              "인접변 b",
              "빗변 c",
              "코사인 비"
            ],
            "rows": [
              [
                "30 deg",
                "sqrt(3)",
                "2",
                "약 0.8660"
              ],
              [
                "45 deg",
                "1",
                "sqrt(2)",
                "약 0.7071"
              ],
              [
                "60 deg",
                "1",
                "2",
                "0.5"
              ],
              [
                "80 deg",
                "1",
                "약 5.7588",
                "약 0.1736"
              ]
            ]
          }
        ],
        "figures": [
          {
            "alt": "30도, 45도, 60도에서의 세 삼각형, 코사인 값 0.8660, 0.7071, 0.5. 각이 커질수록 코사인은 감소",
            "caption": "각 A가 커질수록 인접변은 빗변에서 차지하는 비중이 줄어들므로 cos(A)가 감소합니다."
          }
        ],
        "closingParagraphs": [
          "표의 측정값은 예시입니다. 각도를 결정하는 것은 절대 길이가 아니라 비입니다. 비는 각이 [[90^\\circ]] 에 가까워질수록 0에 접근하고, [[0^\\circ]] 에 가까워질수록 1에 접근하며, 모든 유효한 삼각형에서는 엄격히 그 사이에 머뭅니다.",
          "이 계산기는 각도 입력을 받지 않습니다. 이 기준값들은 결과를 검증할 때의 방향과 대조값으로 사용하십시오."
        ]
      },
      "cos-recover": {
        "h2": "코사인으로 변과 각도 구하기",
        "blocks": [
          {
            "kind": "p",
            "text": "코사인 공식은 나머지 두 값을 알 때 세 값 중 어느 하나든 깔끔하게 복원하도록 변형됩니다."
          },
          {
            "kind": "h3",
            "text": "인접변 구하는 방법"
          },
          {
            "kind": "p",
            "text": "[[\\cos(A)=b/c]] 에서 양변에 [[c]] 를 곱합니다."
          },
          {
            "kind": "p",
            "text": "[[[\\boxed{b=c\\cos(A)}]]]"
          },
          {
            "kind": "p",
            "text": "[[c=10\\text{ m}]] , [[A=60^\\circ]] 인 경우: [[b=10\\cos(60^\\circ)]] 이고, [[\\cos(60^\\circ)=0.5]] 이므로 [[\\boxed{b=5\\text{ m}}]] 입니다. 이 각에서는 빗변의 절반입니다."
          },
          {
            "kind": "h3",
            "text": "빗변 구하는 방법"
          },
          {
            "kind": "p",
            "text": "[[c]] 에 대해 풀면 다음과 같습니다."
          },
          {
            "kind": "p",
            "text": "[[[\\boxed{c=\\frac{b}{\\cos(A)}}]]]"
          },
          {
            "kind": "p",
            "text": "[[b=4\\text{ m}]] , [[A=60^\\circ]] 인 경우: [[c=4/0.5]] 이므로 [[\\boxed{c=8\\text{ m}}]] 입니다."
          },
          {
            "kind": "h3",
            "text": "코사인 비에서 각도 구하는 방법"
          },
          {
            "kind": "p",
            "text": "코사인 비와 각도는 서로 다른 양입니다. 비를 알면 역코사인(아크코사인이라고도 함)으로 각도를 복원합니다."
          },
          {
            "kind": "p",
            "text": "[[[\\boxed{A=\\cos^{-1}\\left(\\frac{b}{c}\\right)}]]]"
          },
          {
            "kind": "p",
            "text": "[[\\cos(A)=0.8]] 인 경우: [[A=\\cos^{-1}(0.8)]] 이므로 [[\\boxed{A\\approx36.87^\\circ}]] 입니다. 공학용 계산기를 먼저 도(degree) 모드로 맞추십시오. 이는 수학적 변형입니다. 이 페이지의 도구는 비 자체를 반환합니다."
          }
        ],
        "steps": [],
        "listItems": [],
        "related": [],
        "tables": [],
        "figures": []
      },
      "cos-mistakes": {
        "h2": "코사인 계산 시 흔한 실수",
        "blocks": [
          {
            "kind": "h3",
            "text": "틀린 것 vs 올바른 것"
          },
          {
            "kind": "p",
            "text": "[[b=4]] , [[c=5]] 가 주어졌다고 하겠습니다."
          },
          {
            "kind": "p",
            "text": "틀림: [[5/4=1.25]] . 이는 코사인의 역수로 시컨트라고 하며, 코사인 비가 아닙니다."
          },
          {
            "kind": "p",
            "text": "옳음: [[\\cos(A)=4/5=0.8]] ."
          },
          {
            "kind": "p",
            "text": "예각의 유효한 코사인은 항상 0과 1 사이에 있습니다."
          }
        ],
        "steps": [
          "<strong>인접변 대신 대변을 사용합니다.</strong> 이렇게 하면 [[a/c]] , 즉 사인이 계산됩니다. 고치기: 각 [[A]] 에 닿는 다리를 고르십시오.",
          "<strong>분수를 [[c/b]] 로 뒤집습니다.</strong> 답이 1을 넘습니다. 고치기: 긴 변이 분모가 되어야 합니다.",
          "<strong>코사인과 사인을 혼동합니다.</strong> 3-4-5 삼각형에서 0.6을 답으로 적습니다. 고치기: 사인은 대변을, 코사인은 인접변을 사용합니다.",
          "<strong>코사인과 시컨트를 혼동합니다.</strong> [[c/b]] 를 계산합니다. 고치기: 시컨트는 코사인의 역수로 항상 1보다 큽니다.",
          "<strong>빗변보다 긴 인접변을 입력합니다.</strong> 입력값이 불가능한 삼각형을 기술합니다. 고치기: 빗변 입력란에 더 긴 측정값을 넣으십시오.",
          "<strong>0이나 음수인 변 길이를 입력합니다.</strong> 0으로 나누거나 의미 없는 음수 비가 됩니다. 고치기: 양수 길이만 사용하십시오.",
          "<strong>측정 단위를 섞습니다.</strong> 센티미터를 미터로 나누면 비가 100배 어긋납니다. 고치기: 두 변을 먼저 하나의 단위로 통일하십시오.",
          "<strong>코사인을 도 단위 각도로 답합니다.</strong> 0.8도라고 씁니다. 고치기: 비는 순수한 수이지 각도가 아닙니다.",
          "<strong>코사인 비에 단위가 있다고 가정합니다.</strong> 단위는 나누는 과정에서 이미 약분되었습니다. 고치기: 답에서 단위를 떼십시오.",
          "<strong>기준각을 다른 예각과 혼동합니다.</strong> 인접과 대변의 이름이 바뀝니다. 고치기: 먼저 그림에 각 [[A]] 를 표시하십시오.",
          "<strong>너무 일찍 반올림합니다.</strong> [[12/13]] 을 0.92로 반올림한 뒤 다시 곱하면 피할 수 있는 오차가 생깁니다. 고치기: 마지막 단계까지 여유 자릿수를 유지하십시오.",
          "<strong>모든 삼각형의 코사인이 같다고 가정합니다.</strong> 하나의 값을 다른 도형에 적용합니다. 고치기: 코사인은 삼각형의 비례에 따라 달라집니다.",
          "<strong>비가 곧바로 도 단위 각도를 준다고 생각합니다.</strong> 0.8을 각도로 읽습니다. 고치기: 도를 복원하려면 역코사인을 사용하십시오.",
          "<strong>코사인 0.8을 0.8도로 읽습니다.</strong> 비와 각도를 혼동합니다. 고치기: 0.8은 비이고, 각도는 약 36.87도입니다.",
          "<strong>기준각을 정하기 전에 다리 이름을 붙입니다.</strong> 인접과 대변이 뒤섞입니다. 고치기: 어느 다리에든 이름을 붙이기 전에 각 [[A]] 를 고정하십시오."
        ],
        "listItems": [],
        "related": [],
        "tables": [],
        "figures": []
      },
      "cos-verify": {
        "h2": "코사인 결과가 유효한지 확인하는 방법",
        "blocks": [
          {
            "kind": "p",
            "text": "유효하고 퇴화하지 않은 직각삼각형은 [[0 \\lt b \\lt c]] 를 만족하므로, [[0 \\lt b/c \\lt 1]] 입니다. 두 측정값은 호환되는 단위를 사용해야 하며, 코사인 결과는 0보다 크고 1보다 작아야 합니다. 1 이상인 결과는 대개 입력이 뒤바뀌었거나, 변을 잘못 골랐거나, 측정값이 맞지 않음을 나타냅니다."
          },
          {
            "kind": "h3",
            "text": "방법 1: 비 확인"
          },
          {
            "kind": "p",
            "text": "[[\\cos(A)=b/c]] 를 직접 검증합니다. [[b=4]] , [[c=5]] 인 경우: [[4/5=0.8]] ."
          },
          {
            "kind": "h3",
            "text": "방법 2: 피타고라스 정리 확인"
          },
          {
            "kind": "p",
            "text": "대변을 알거나 구해야 한다면 [[a=\\sqrt{c^2-b^2}]] 를 계산합니다. [[b=4]] , [[c=5]] 인 경우: [[a=\\sqrt{25-16}=3]] 이고 [[3^2+4^2=5^2]] 입니다. 3-4-5 직각삼각형의 치수가 확인됩니다."
          },
          {
            "kind": "h3",
            "text": "방법 3: 역코사인으로 확인"
          },
          {
            "kind": "p",
            "text": "비가 0.8이라면: [[A=\\cos^{-1}(0.8)\\approx36.87^\\circ]] . 그런 뒤 각도와 변의 비가 일관되는지 검증합니다. 반올림 때문에 작은 차이가 생길 수 있습니다."
          }
        ],
        "steps": [],
        "listItems": [],
        "related": [],
        "tables": [],
        "figures": []
      },
      "cos-vs": {
        "h2": "코사인 vs 사인, 탄젠트, 시컨트",
        "blocks": [
          {
            "kind": "p",
            "text": "각 비는 같은 기준각과 변 이름을 사용하되 서로 다른 변 쌍을 비교합니다."
          }
        ],
        "steps": [],
        "listItems": [],
        "related": [],
        "tables": [
          {
            "headers": [
              "비",
              "공식",
              "비교 대상"
            ],
            "rows": [
              [
                "사인",
                "sin(A) = a/c",
                "대변과 빗변"
              ],
              [
                "코사인",
                "cos(A) = b/c",
                "인접변과 빗변"
              ],
              [
                "탄젠트",
                "tan(A) = a/b",
                "대변과 인접변"
              ],
              [
                "시컨트",
                "sec(A) = c/b",
                "빗변과 인접변"
              ],
              [
                "코시컨트",
                "csc(A) = c/a",
                "빗변과 대변"
              ],
              [
                "코탄젠트",
                "cot(A) = b/a",
                "인접변과 대변"
              ]
            ]
          }
        ],
        "figures": [],
        "closingParagraphs": [
          "시컨트는 코사인의 역수입니다. [[\\sec(A)=1/\\cos(A)]] . [[\\cos(A)=0.8]] 이라면 [[\\sec(A)=1/0.8=1.25]] 입니다. 인접변이나 수평 투영에는 코사인을, 수직 성분에는 사인을, 빗변이 없을 때는 탄젠트를, 역수가 필요한 공식에는 시컨트를 사용하십시오.",
          "이웃한 비에 대해서는 <a href=\"/sine-ratio-calculator/\" class=\"text-primary hover:underline\">사인 비 계산기</a>, <a href=\"/tangent-ratio-calculator/\" class=\"text-primary hover:underline\">탄젠트 비 계산기</a>, <a href=\"/secant-ratio-calculator/\" class=\"text-primary hover:underline\">시컨트 비 계산기</a>, <a href=\"/cosecant-ratio-calculator/\" class=\"text-primary hover:underline\">코시컨트 비 계산기</a>를 참고하십시오."
        ]
      },
      "cos-faq": {
        "h2": "자주 묻는 질문",
        "blocks": [],
        "steps": [],
        "listItems": [],
        "related": [],
        "tables": [],
        "figures": []
      },
      "cos-related": {
        "h2": "관련 삼각함수 계산기 살펴보기",
        "blocks": [],
        "steps": [],
        "listItems": [],
        "related": [
          {
            "name": "사인 비 계산기",
            "desc": "대변을 빗변으로 나누어 사인 비를 구합니다."
          },
          {
            "name": "탄젠트 비 계산기",
            "desc": "대변을 인접변으로 나누어 탄젠트 비를 구합니다."
          },
          {
            "name": "시컨트 비 계산기",
            "desc": "빗변을 인접변으로 나누어 시컨트 비를 구합니다."
          },
          {
            "name": "코시컨트 비 계산기",
            "desc": "빗변을 대변으로 나누어 코시컨트 비를 구합니다."
          },
          {
            "name": "직각삼각형 각도 계산기",
            "desc": "변의 길이에서 직각삼각형의 각도를 구합니다."
          },
          {
            "name": "직각삼각형 변 계산기",
            "desc": "각도와 한 변의 길이에서 직각삼각형의 나머지 변을 구합니다."
          }
        ],
        "tables": [],
        "figures": []
      }
    },
    "faqHeading": "자주 묻는 질문",
    "relatedHeading": "관련 삼각함수 계산기 살펴보기",
    "faqs": [
      {
        "question": "직각삼각형의 코사인 비 공식은 무엇인가?",
        "answer": "cos(A) = b / c입니다. 각 A에 인접한 변을 빗변으로 나눕니다. 인접변이 4 cm이고 빗변이 5 cm이면 결과는 4/5 = 0.8입니다."
      },
      {
        "question": "두 변의 길이에서 코사인을 어떻게 계산하는가?",
        "answer": "인접변 b와 빗변 c를 같은 단위로 재고, c가 b보다 긴지 확인한 뒤 cos(A) = b / c를 계산합니다. b = 12 m, c = 13 m이면 답은 12/13, 약 0.9231입니다."
      },
      {
        "question": "코사인과 사인의 차이는 무엇인가?",
        "answer": "코사인은 인접변을 빗변으로 나누고(b/c), 사인은 대변을 빗변으로 나눕니다(a/c). 3-4-5 삼각형에서 cos(A) = 0.8이고 sin(A) = 0.6입니다."
      },
      {
        "question": "직각삼각형에서 예각의 코사인이 1보다 작은 이유는 무엇인가?",
        "answer": "빗변이 가장 긴 변이므로 b는 항상 c보다 작습니다. 작은 양수를 큰 수로 나누면 1보다 작은 결과가 나오며, 두 변이 모두 양수이므로 0보다 크게 유지됩니다."
      },
      {
        "question": "유효한 직각삼각형에서 코사인이 1보다 클 수 있는가?",
        "answer": "없습니다. 1보다 큰 코사인은 인접변이 빗변보다 길어야 하는데, 진짜 직각삼각형에서는 불가능합니다. 도구에 1 이상이 표시되면 입력이 뒤바뀌었거나, 잘못된 다리를 사용했거나, 측정값이 맞지 않는 것입니다."
      },
      {
        "question": "코사인 값 0.8은 무슨 의미인가?",
        "answer": "인접변이 빗변 길이의 80퍼센트라는 뜻입니다. 4 m / 5 m = 0.8. 이 수는 삼각형의 모양을 기술할 뿐 각도가 아닙니다. 대응하는 각도는 약 36.87도이며 역코사인으로 구합니다."
      },
      {
        "question": "코사인 비에 단위가 있는가?",
        "answer": "없습니다. 두 변을 같은 단위로 재므로 단위가 약분됩니다. 4 m / 5 m = 0.8이고, 400 cm / 500 cm = 0.8입니다. 코사인은 차원이 없는 순수한 수로 답하며, 도, 미터, 피트를 붙이지 마십시오."
      },
      {
        "question": "코사인 비에서 각도를 어떻게 구하는가?",
        "answer": "역코사인(아크코사인)을 사용합니다. A = cos^-1(비). 0.8의 경우 A = cos^-1(0.8), 약 36.87도입니다. 이 페이지의 계산기는 각도가 아니라 비를 반환하므로, 계산기를 먼저 도 모드로 맞추십시오."
      },
      {
        "question": "코사인을 이용해 인접변을 어떻게 구하는가?",
        "answer": "공식을 b = c x cos(A)로 변형합니다. 빗변에 각의 코사인을 곱하십시오. c = 10 m이고 각 A = 60도인 경우, cos(60 deg) = 0.5이므로 b = 10 x 0.5 = 5 m입니다."
      },
      {
        "question": "코사인과 시컨트의 차이는 무엇인가?",
        "answer": "시컨트는 코사인의 역수입니다. sec(A) = c / b, 또는 1 / cos(A). 코사인은 1보다 작은 값을 주고, 시컨트는 분수를 뒤집어 1보다 큰 값을 줍니다. cos(A) = 0.8이면 sec(A) = 1.25입니다."
      },
      {
        "question": "대변을 몰라도 코사인을 계산할 수 있는가?",
        "answer": "가능합니다. 코사인에는 인접변과 빗변만 필요하며, cos(A) = b/c에서 대변은 아무 역할도 하지 않습니다. 그래서 이 계산기는 대변을 묻지 않습니다."
      },
      {
        "question": "코사인을 실제 측정에 어떻게 활용할 수 있는가?",
        "answer": "코사인은 수평 투영을 구하는 도구입니다. 사다리 길이에서 지면 거리, 서까래 길이에서 수평 길이, 힘의 수평 성분을 구할 때 사용합니다. 빗변에 cos(A)를 곱하면 인접변이 나오며, 비를 이용해 측정값이 직각삼각형에 맞는지 검증할 수 있습니다."
      }
    ],
    "conclusion": {
      "h2": "코사인 비를 자신 있게 마스터하기",
      "paragraphs": [
        "코사인은 인접변이 빗변의 몇 퍼센트를 차지하는지를 나타냅니다. [[b]] 를 [[c]] 로 나누어 삼각형의 모양을 기술합니다. 공식 [[\\cos(A)=b/c]] 는 두 측정값만 필요하며, 답은 항상 0과 1 사이의 차원이 없는 수이고, 변형된 형태 [[b=c\\cos(A)]] 와 [[A=\\cos^{-1}(b/c)]] 는 빠진 변이나 각도를 복원합니다. 사다리든, 서까래든, 교과서의 3-4-5 삼각형이든 방법은 변하지 않습니다. 인접변을 확인하고, 빗변을 확인하고, 나누고, 검증하십시오."
      ]
    }
  },
  "ms": {
    "tocHeading": "Dalam Panduan Ini",
    "tocItems": {
      "cos-intro": "Apakah kalkulator nisbah kosinus?",
      "cos-triangle": "Memahami sisi bersebelahan dan hipotenus",
      "cos-whatis": "Memahami nisbah kosinus",
      "cos-formula": "Formula kosinus dijelaskan langkah demi langkah",
      "cos-howto": "Cara menggunakan kalkulator",
      "cos-examples": "Contoh langkah demi langkah",
      "cos-applications": "Contoh kehidupan sebenar",
      "cos-angle": "Kosinus dan saiz sudut",
      "cos-recover": "Mencari sisi dan sudut dengan kosinus",
      "cos-mistakes": "Kesilapan biasa",
      "cos-verify": "Menyemak keputusan anda",
      "cos-vs": "Kosinus vs. sinus, tangen dan sekan",
      "cos-faq": "Soalan lazim",
      "cos-related": "Kalkulator berkaitan"
    },
    "sections": {
      "cos-intro": {
        "h2": "Apakah kalkulator nisbah kosinus?",
        "blocks": [
          {
            "kind": "p",
            "text": "Kalkulator nisbah kosinus menjawab satu soalan: bagi sudut tirus dalam segi tiga tepat, berapakah panjang sisi bersebelahan berbanding hipotenus? Masukkan kedua-dua panjang sisi, dan alat akan membahagikan sisi bersebelahan dengan hipotenus, memberikan [[\\cos(A)=b/c]]. Dengan sisi bersebelahan 4 cm dan hipotenus 5 cm, pengiraannya ialah [[4/5=0.8]]: sisi bersebelahan adalah 80 peratus daripada hipotenus. Perpuluhan itu ialah jawapan yang lengkap. Ia tidak mempunyai unit, kerana sentimeter terhapus semasa pembahagian, dan ia bukan sudut dalam darjah. Sisi bertentangan tidak pernah terlibat dalam pengiraan ini. Daripada satu nisbah itu anda boleh membandingkan bentuk, menyemak ukuran, mencari unjuran mengufuk, atau mendapatkan semula sudut dengan kosinus songsang."
          }
        ],
        "steps": [],
        "listItems": [],
        "related": [],
        "tables": [],
        "figures": []
      },
      "cos-triangle": {
        "h2": "Memahami sisi bersebelahan dan hipotenus",
        "blocks": [
          {
            "kind": "h3",
            "text": "Apakah segi tiga tepat?"
          },
          {
            "kind": "p",
            "text": "Segi tiga tepat mempunyai satu sudut tepat [[90^\\circ]], iaitu sudut antara dua garis serenjang, seperti dinding bertemu lantai yang rata. Hipotenus terletak bertentangan dengan sudut tepat itu dan sentiasa merupakan sisi terpanjang. Kedua-dua sudut yang lain berkongsi baki 90 darjah, jadi kedua-duanya tirus. Kosinus membandingkan dua daripada sisi-sisi itu dalam hubungan yang tetap."
          },
          {
            "kind": "h3",
            "text": "Apakah sisi bersebelahan?"
          },
          {
            "kind": "p",
            "text": "Sisi bersebelahan [[b]] ialah kaki yang menyentuh sudut rujukan [[A]] tanpa menjadi hipotenus. Ia sering mewakili larian mengufuk: jarak tanah dari sebuah tangga, rentang mengufuk kasau, atau unjuran sesuatu daya. Kaki mana yang dikira sebagai bersebelahan bergantung pada sudut rujukan, jadi bertukar daripada sudut [[A]] kepada sudut [[B]] akan menukar label sisi bersebelahan dan sisi bertentangan."
          },
          {
            "kind": "h3",
            "text": "Apakah hipotenus?"
          },
          {
            "kind": "p",
            "text": "Hipotenus [[c]] ialah sisi yang bertentangan dengan sudut tepat: dalam sebarang rajah ia menghadap petak kecil yang menandakan bucu [[90^\\circ]], dan ia ialah sisi terpanjang. Dalam situasi sebenar ia boleh jadi tangga, kasau, tanjakan, kabel, atau laluan garis lurus, dan ia sentiasa lebih panjang dengan ketatnya berbanding sisi bersebelahan."
          },
          {
            "kind": "h3",
            "text": "Apakah sisi bertentangan?"
          },
          {
            "kind": "p",
            "text": "Sisi bertentangan [[a]] terletak betul-betul berhadapan dengan sudut [[A]] dan tidak pernah menyentuh bucunya. Ia tidak memainkan sebarang peranan dalam formula kosinus, justeru kalkulator tidak pernah memintanya. Pegang sudut rujukan dengan betul: pilih sudut yang salah dan label sisi bertentangan dan sisi bersebelahan akan bertukar secara senyap."
          }
        ],
        "steps": [],
        "listItems": [],
        "related": [],
        "tables": [],
        "figures": [
          {
            "alt": "Segi tiga tepat dengan sudut A di bawah kiri, sisi bersebelahan b emas, hipotenus c biru, sisi bertentangan a, cos(A)=b/c",
            "caption": "Sudut A terletak di bawah kiri; kosinus menggunakan sisi bersebelahan b dan hipotenus c, bukan sisi bertentangan a."
          }
        ]
      },
      "cos-whatis": {
        "h2": "Memahami nisbah kosinus",
        "blocks": [
          {
            "kind": "p",
            "text": "Kosinus membandingkan kaki yang bersebelahan dengan sudut [[A]] dengan keseluruhan sisi condong:"
          },
          {
            "kind": "p",
            "text": "[[[\\cos(A)=\\frac{b}{c}]]]"
          },
          {
            "kind": "p",
            "text": "Di sini [[\\cos(A)]] ialah kosinus sudut [[A]], [[b]] ialah sisi bersebelahan, dan [[c]] ialah hipotenus: perkadaran hipotenus yang diliputi oleh sisi bersebelahan."
          },
          {
            "kind": "h3",
            "text": "Memahami SOH-CAH-TOA"
          },
          {
            "kind": "p",
            "text": "SOH: Sinus = Sisi Bertentangan / Hipotenus. CAH: Kosinus = Sisi Bersebelahan / Hipotenus. TOA: Tangen = Sisi Bertentangan / Sisi Bersebelahan. Huruf CAH mengeja formula kosinus: huruf pertama menamakan fungsi, huruf kedua pengangka, dan huruf ketiga penyebut."
          },
          {
            "kind": "h3",
            "text": "Mengapakah kosinus ialah nisbah"
          },
          {
            "kind": "p",
            "text": "Membahagikan dua panjang akan menghapuskan unit: [[4\\text{ m}/5\\text{ m}=0.8]], dan [[400\\text{ cm}/500\\text{ cm}=0.8]] juga. Sisi fizikal yang sama sentiasa menghasilkan nombor yang sama, apa jua unit yang anda gunakan untuk mengukurnya, selagi kedua-duanya berkongsi unit yang sama."
          },
          {
            "kind": "h3",
            "text": "Apakah maksud nilai kosinus 0.8?"
          },
          {
            "kind": "p",
            "text": "Ia bermakna sisi bersebelahan ialah 80 peratus daripada hipotenus: kaki yang panjang di sisi sudut, dan hipotenus yang hanya sedikit lebih panjang. Ia tidak memberikan sudut secara langsung; itu memerlukan kosinus songsang."
          },
          {
            "kind": "h3",
            "text": "Mengapakah kosinus kurang daripada 1"
          },
          {
            "kind": "p",
            "text": "Hipotenus lebih panjang daripada mana-mana kaki, jadi [[b \\lt c]] dan [[b/c \\lt 1]], dan kedua-dua sisi adalah positif, jadi nisbah kekal melebihi 0. Bagi segi tiga tepat yang sah dan tidak merosot, kosinus sentiasa jatuh dengan ketatnya antara 0 dan 1; nilai sempadan 0 dan 1 ialah had, bukan nilai yang boleh dicapai."
          },
          {
            "kind": "h3",
            "text": "Kosinus lawan sinus"
          },
          {
            "kind": "p",
            "text": "[[\\cos(A)=b/c]] dan [[\\sin(A)=a/c]] berkongsi hipotenus tetapi menggunakan kaki yang berbeza. Pilih kosinus apabila sisi bersebelahan diketahui atau diperlukan; pilih sinus apabila sisi bertentangan yang diperlukan. Mengelirukan kedua-duanya ialah kesilapan awal yang paling biasa."
          }
        ],
        "steps": [],
        "listItems": [],
        "related": [],
        "tables": [],
        "figures": [
          {
            "alt": "Tiga peringkat: segi tiga 3-4-5 berlabel, formula kosinus cos(A)=b/c, hasil 4/5=0.8, sisi bersebelahan ialah 80 peratus",
            "caption": "Tiga peringkat: kenal pasti sisi, gunakan cos(A) = b/c, dan bahagikan. Sisi bersebelahan ialah 80 peratus daripada hipotenus."
          }
        ]
      },
      "cos-formula": {
        "h2": "Cara formula kosinus berfungsi",
        "blocks": [
          {
            "kind": "p",
            "text": "Mulakan daripada takrifan: kosinus ialah sisi bersebelahan dibahagikan dengan hipotenus. Dalam tatatanda halaman ini:"
          },
          {
            "kind": "p",
            "text": "[[[\\boxed{\\cos(A)=\\frac{b}{c}}]]]"
          },
          {
            "kind": "p",
            "text": "Sisi bersebelahan ialah pengangka kerana ia ialah kaki yang sedang dibandingkan; hipotenus ialah penyebut kerana ia ialah panjang rujukan."
          },
          {
            "kind": "h3",
            "text": "Contoh yang dikerjakan sepenuhnya: segi tiga 3-4-5"
          },
          {
            "kind": "p",
            "text": "Diberi [[b=4\\text{ cm}]], [[a=3\\text{ cm}]], [[c=5\\text{ cm}]]:"
          },
          {
            "kind": "p",
            "text": "Langkah 1: Tulis formula. [[\\cos(A)=b/c]]"
          },
          {
            "kind": "p",
            "text": "Langkah 2: Gantikan ukuran. [[\\cos(A)=4/5]]"
          },
          {
            "kind": "p",
            "text": "Langkah 3: Bahagikan. [[\\boxed{\\cos(A)=0.8}]]"
          },
          {
            "kind": "p",
            "text": "Langkah 4: Tafsirkan jawapan. Sisi bersebelahan ialah 80 peratus daripada hipotenus."
          },
          {
            "kind": "p",
            "text": "Langkah 5: Sahkan segi tiga. [[3^2+4^2=5^2]], jadi [[9+16=25]]. Panjang sisi adalah konsisten dari segi matematik."
          },
          {
            "kind": "p",
            "text": "Jika anda mahu sudut bukannya nisbah, kosinus songsang ialah langkah seterusnya: [[A=\\cos^{-1}(0.8)\\approx36.87^\\circ]]. Itu pengiraan yang berasingan; alat di halaman ini hanya mengembalikan nisbah."
          }
        ],
        "steps": [],
        "listItems": [],
        "related": [],
        "tables": [],
        "figures": []
      },
      "cos-howto": {
        "h2": "Cara menggunakan kalkulator nisbah kosinus",
        "blocks": [
          {
            "kind": "p",
            "text": "Panduan di bawah sepadan dengan antara muka sebenar di halaman ini."
          }
        ],
        "steps": [
          "<strong>Kenal pasti sudut rujukan [[A]],</strong> memandangkan sisi bersebelahan ditakrifkan relatif terhadapnya.",
          "<strong>Cari sisi bersebelahan [[b]]:</strong> kaki yang menyentuh sudut [[A]] tetapi bukan hipotenus.",
          "<strong>Cari hipotenus [[c]]:</strong> sisi yang bertentangan dengan sudut tepat, iaitu sisi terpanjang.",
          "<strong>Ukur atau peroleh kedua-dua panjang sisi</strong> dalam unit yang sama.",
          "<strong>Masukkan panjang sisi bersebelahan</strong> (nilai yang lebih kecil) dalam medan pertama.",
          "<strong>Masukkan hipotenus</strong> (nilai yang lebih besar) dalam medan kedua.",
          "<strong>Pilih unit yang sepadan dengan pemilih unit</strong> agar pembahagian bermakna.",
          "<strong>Pastikan kedua-dua nilai adalah positif;</strong> panjang sifar atau negatif tidak boleh membentuk segi tiga.",
          "<strong>Semak bahawa hipotenus lebih panjang daripada sisi bersebelahan;</strong> jika tidak, input telah tertukar atau dilabel dengan salah.",
          "<strong>Klik Kira cos(A)</strong> untuk membahagikan sisi bersebelahan dengan hipotenus.",
          "<strong>Baca nisbah kosinus:</strong> sisi bersebelahan sebagai perkadaran hipotenus.",
          "<strong>Sahkan jawapan berada antara 0 dan 1;</strong> apa-apa sahaja di luar julat itu menandakan ralat input.",
          "<strong>Gunakan Reset</strong> untuk mengosongkan input dan mulakan semula."
        ],
        "listItems": [],
        "related": [],
        "tables": [],
        "figures": [],
        "closingParagraphs": [
          "Kalkulator tidak pernah meminta sudut dalam darjah, sisi bertentangan, atau nilai untuk diterbalikkan: dua panjang sisi ialah input yang lengkap."
        ]
      },
      "cos-examples": {
        "h2": "Contoh langkah demi langkah mengira kosinus",
        "blocks": [
          {
            "kind": "p",
            "text": "Setiap contoh mengikut corak yang sama: tulis formula, gantikan, bahagikan."
          },
          {
            "kind": "h3",
            "text": "Contoh 1: segi tiga tepat 3-4-5"
          },
          {
            "kind": "p",
            "text": "Diberi [[b=4\\text{ cm}]], [[a=3\\text{ cm}]], [[c=5\\text{ cm}]]:"
          },
          {
            "kind": "p",
            "text": "[[\\cos(A)=4/5]]"
          },
          {
            "kind": "p",
            "text": "[[\\boxed{\\cos(A)=0.8}]]"
          },
          {
            "kind": "p",
            "text": "Sisi bersebelahan ialah 80 peratus daripada hipotenus; sisi bertentangan melengkapkan segi tiga tetapi formula mengabaikannya."
          },
          {
            "kind": "h3",
            "text": "Contoh 2: segi tiga tepat 5-12-13"
          },
          {
            "kind": "p",
            "text": "Diberi [[b=12\\text{ m}]], [[a=5\\text{ m}]], [[c=13\\text{ m}]]:"
          },
          {
            "kind": "p",
            "text": "[[\\cos(A)=12/13]]"
          },
          {
            "kind": "p",
            "text": "[[\\boxed{\\cos(A)\\approx0.9231}]]"
          },
          {
            "kind": "p",
            "text": "Sisi bersebelahan ialah kira-kira 92.31 peratus daripada hipotenus; sisi bertentangan 5 m tidak diperlukan."
          },
          {
            "kind": "h3",
            "text": "Contoh 3: segi tiga 30-60-90"
          },
          {
            "kind": "p",
            "text": "Untuk sudut [[A=30^\\circ]], sisi bersebelahan ialah [[\\sqrt{3}/2]] kali hipotenus. Dengan [[b=\\sqrt{3}\\text{ cm}]] dan [[c=2\\text{ cm}]]:"
          },
          {
            "kind": "p",
            "text": "[[\\cos(30^\\circ)=\\frac{\\sqrt{3}}{2}]]"
          },
          {
            "kind": "p",
            "text": "[[\\boxed{\\cos(30^\\circ)\\approx0.8660}]]"
          },
          {
            "kind": "p",
            "text": "Nilai sudut khas ini wajar dihafal; segi tiga 30-60-90 sentiasa muncul dalam masalah geometri."
          },
          {
            "kind": "h3",
            "text": "Contoh 4: segi tiga dengan sisi bersebelahan 8 dan hipotenus 10"
          },
          {
            "kind": "p",
            "text": "Diberi [[b=8\\text{ m}]] dan [[c=10\\text{ m}]]:"
          },
          {
            "kind": "p",
            "text": "[[\\cos(A)=8/10]]"
          },
          {
            "kind": "p",
            "text": "[[\\boxed{\\cos(A)=0.8}]]"
          },
          {
            "kind": "p",
            "text": "Nisbah sepadan dengan segi tiga 3-4-5 kerana menskalakan semua sisi dengan faktor yang sama tidak mengubah sudut dan nisbah."
          }
        ],
        "steps": [],
        "listItems": [],
        "related": [],
        "tables": [],
        "figures": []
      },
      "cos-applications": {
        "h2": "Contoh kehidupan sebenar menggunakan nisbah kosinus",
        "blocks": [
          {
            "kind": "p",
            "text": "Kosinus ialah nisbah matematik, bukan kuantiti fizikal yang berunit. Nilai praktikalnya terletak pada membandingkan sisi bersebelahan dengan hipotenus, mengira unjuran mengufuk, dan mengesahkan ukuran. Setiap contoh mengandaikan segi tiga tepat yang dipermudahkan."
          },
          {
            "kind": "h3",
            "text": "Contoh 5: nisbah kosinus sebuah tangga"
          },
          {
            "kind": "p",
            "text": "Tangga 5 m berdiri dengan pangkalnya 3 m dari dinding; sudut [[A]] terletak antara tangga dengan tanah yang rata. Jarak tanah ialah sisi bersebelahan [[b=3\\text{ m}]], tangga ialah hipotenus [[c=5\\text{ m}]]. [[\\cos(A)=3/5]], jadi [[\\boxed{\\cos(A)=0.6}]]: jarak tanah ialah 60 peratus daripada panjang tangga. Nisbah itu sahaja tidak menentukan keselamatan tangga."
          },
          {
            "kind": "h3",
            "text": "Contoh 6: nisbah kosinus kasau bumbung"
          },
          {
            "kind": "p",
            "text": "Kasau bumbung condong 5 m dengan larian mengufuk 4 m: larian ialah sisi bersebelahan [[b=4\\text{ m}]], kasau ialah hipotenus [[c=5\\text{ m}]]. [[\\cos(A)=4/5]], jadi [[\\boxed{\\cos(A)=0.8}]]: larian ialah 80 peratus daripada panjang condong. Ini nisbah geometri, bukan penilaian struktur."
          },
          {
            "kind": "h3",
            "text": "Contoh 7: menilai nisbah kosinus sebuah tanjakan"
          },
          {
            "kind": "p",
            "text": "Tanjakan condong 9.5 m dengan larian mengufuk 9 m: [[b=9\\text{ m}]], [[c=9.5\\text{ m}]]. [[\\cos(A)=9/9.5]], jadi [[\\boxed{\\cos(A)\\approx0.9474}]]: larian ialah kira-kira 94.74 peratus daripada panjang condong, seperti yang dijangka bagi cerun yang landai. Ia tidak menentukan pematuhan kebolehcapaian."
          },
          {
            "kind": "h3",
            "text": "Contoh 8: pengukuran ukur tanah"
          },
          {
            "kind": "p",
            "text": "Segi tiga ukur tanah yang dipermudahkan mencatatkan jarak garis lurus 50 m dan jarak mengufuk 40 m: [[b=40\\text{ m}]], [[c=50\\text{ m}]]. [[\\cos(A)=40/50]], jadi [[\\boxed{\\cos(A)=0.8}]]: jarak mengufuk ialah 80 peratus daripada jarak garis lurus. Ukur tanah sebenar mungkin memerlukan pembetulan ketinggian alat."
          },
          {
            "kind": "h3",
            "text": "Contoh 9: nisbah kosinus dawai penambat"
          },
          {
            "kind": "p",
            "text": "Dawai penambat 13 m berlabuh 12 m secara mengufuk dari tiang: [[b=12\\text{ m}]], [[c=13\\text{ m}]]. [[\\cos(A)=12/13]], jadi [[\\boxed{\\cos(A)\\approx0.9231}]]: jarak ialah kira-kira 92.31 peratus daripada panjang dawai. Ia tidak menyatakan apa-apa tentang ketegangan dawai atau kekuatan sauh."
          },
          {
            "kind": "h3",
            "text": "Contoh 10: nisbah kosinus alang tangga"
          },
          {
            "kind": "p",
            "text": "Alang tangga yang dipermudahkan berukuran 5 m panjang dengan larian mengufuk 4 m: [[b=4\\text{ m}]], [[c=5\\text{ m}]]. [[\\cos(A)=4/5]], jadi [[\\boxed{\\cos(A)=0.8}]]: larian ialah 80 peratus daripada alang pepenjuru. Ia tidak mengesahkan pematuhan kod."
          },
          {
            "kind": "h3",
            "text": "Contoh 11: unjuran mengufuk boom kren"
          },
          {
            "kind": "p",
            "text": "Boom kren yang dipermudahkan berukuran 10 m panjang dengan unjuran mengufuk 6 m: [[b=6\\text{ m}]], [[c=10\\text{ m}]]. [[\\cos(A)=6/10]], jadi [[\\boxed{\\cos(A)=0.6}]]: unjuran ialah 60 peratus daripada panjang boom. Ia tidak menentukan kapasiti angkatan."
          },
          {
            "kind": "h3",
            "text": "Contoh 12: segmen penerbangan pesawat lurus"
          },
          {
            "kind": "p",
            "text": "Pesawat bergerak 5 km di sepanjang laluan lurus, merentasi 4 km secara mengufuk: [[b=4\\text{ km}]], [[c=5\\text{ km}]]. [[\\cos(A)=4/5]], jadi [[\\boxed{\\cos(A)=0.8}]]: sesaran mengufuk ialah 80 peratus daripada panjang laluan. Ini model yang diidealkan, bukan panduan penerbangan."
          },
          {
            "kind": "h3",
            "text": "Contoh 13: nisbah kosinus pendakap pepenjuru"
          },
          {
            "kind": "p",
            "text": "Pendakap pepenjuru berukuran 2 m panjang dengan unjuran mengufuk 1.2 m: [[b=1.2\\text{ m}]], [[c=2\\text{ m}]]. [[\\cos(A)=1.2/2]], jadi [[\\boxed{\\cos(A)=0.6}]]: unjuran ialah 60 peratus daripada panjang pendakap. Ia tidak menentukan kekuatan pendakap."
          },
          {
            "kind": "h3",
            "text": "Contoh 14: nisbah kosinus laluan mendaki"
          },
          {
            "kind": "p",
            "text": "Seksyen laluan mendaki yang lurus berukuran 100 m panjang dengan sesaran mengufuk 80 m: [[b=80\\text{ m}]], [[c=100\\text{ m}]]. [[\\cos(A)=80/100]], jadi [[\\boxed{\\cos(A)=0.8}]]: sesaran ialah 80 peratus daripada panjang laluan. Laluan sebenar melengkung dan berubah kecerunan."
          },
          {
            "kind": "h3",
            "text": "Contoh 15: penyokong awning"
          },
          {
            "kind": "p",
            "text": "Penyokong awning berukuran 3 m panjang dengan unjuran mengufuk 2.4 m: [[b=2.4\\text{ m}]], [[c=3\\text{ m}]]. [[\\cos(A)=2.4/3]], jadi [[\\boxed{\\cos(A)=0.8}]]: unjuran ialah 80 peratus daripada panjang penyokong. Ia tidak menentukan kesesuaian struktur."
          },
          {
            "kind": "h3",
            "text": "Contoh 16: kabel antara dua titik"
          },
          {
            "kind": "p",
            "text": "Kabel lurus merentasi 25 m antara titik yang terpisah 24 m secara mengufuk: [[b=24\\text{ m}]], [[c=25\\text{ m}]]. [[\\cos(A)=24/25]], jadi [[\\boxed{\\cos(A)=0.96}]]: jarak ialah 96 peratus daripada panjang kabel. Model ini mengandaikan kabel yang lurus dalam segi tiga tepat."
          },
          {
            "kind": "h3",
            "text": "Perbandingan contoh praktikal"
          }
        ],
        "steps": [],
        "listItems": [],
        "related": [],
        "tables": [
          {
            "headers": [
              "Situasi",
              "Sisi bersebelahan b",
              "Hipotenus c",
              "Formula kosinus",
              "Nisbah yang dikira",
              "Tafsiran"
            ],
            "rows": [
              [
                "Tangga",
                "3 m",
                "5 m",
                "3/5",
                "0.6",
                "Jarak tanah ialah 60% daripada panjang tangga"
              ],
              [
                "Kasau bumbung",
                "4 m",
                "5 m",
                "4/5",
                "0.8",
                "Larian ialah 80% daripada panjang kasau"
              ],
              [
                "Tanjakan",
                "9 m",
                "9.5 m",
                "9/9.5",
                "0.9474",
                "Larian ialah 94.74% daripada panjang cerun"
              ],
              [
                "Ukur tanah",
                "40 m",
                "50 m",
                "40/50",
                "0.8",
                "Jarak mengufuk ialah 80% daripada garis lurus"
              ],
              [
                "Dawai penambat",
                "12 m",
                "13 m",
                "12/13",
                "0.9231",
                "Jarak ialah 92.31% daripada dawai"
              ],
              [
                "Alang tangga",
                "4 m",
                "5 m",
                "4/5",
                "0.8",
                "Larian ialah 80% daripada panjang alang"
              ],
              [
                "Boom kren",
                "6 m",
                "10 m",
                "6/10",
                "0.6",
                "Unjuran ialah 60% daripada boom"
              ],
              [
                "Segmen penerbangan",
                "4 km",
                "5 km",
                "4/5",
                "0.8",
                "Sesaran ialah 80% daripada laluan"
              ],
              [
                "Pendakap pepenjuru",
                "1.2 m",
                "2 m",
                "1.2/2",
                "0.6",
                "Unjuran ialah 60% daripada pendakap"
              ],
              [
                "Laluan mendaki",
                "80 m",
                "100 m",
                "80/100",
                "0.8",
                "Sesaran ialah 80% daripada laluan"
              ],
              [
                "Penyokong awning",
                "2.4 m",
                "3 m",
                "2.4/3",
                "0.8",
                "Unjuran ialah 80% daripada penyokong"
              ],
              [
                "Kabel",
                "24 m",
                "25 m",
                "24/25",
                "0.96",
                "Jarak ialah 96% daripada kabel"
              ]
            ]
          }
        ],
        "figures": [
          {
            "alt": "Empat panel: nisbah tangga 0.6, kasau 0.8, ukur tanah 0.8, boom kren 0.6, setiap satu dengan segi tiga tepat berlabel",
            "caption": "Empat pengiraan praktikal: tangga, kasau bumbung, ukur tanah, dan boom kren, setiap satu dengan segi tiga, formula, dan nisbahnya."
          }
        ],
        "closingParagraphs": [
          "Corak itu kekal sepanjang: nisbah adalah besar apabila sisi bersebelahan merupakan perkadaran hipotenus yang besar, dan kecil apabila sudut membuka."
        ]
      },
      "cos-angle": {
        "h2": "Memahami hubungan antara kosinus dan saiz sudut",
        "blocks": [
          {
            "kind": "p",
            "text": "Kosinus mengecut apabila sudut tirus bertambah. Sudut kecil mengekalkan sisi bersebelahan hampir sepanjang hipotenus, jadi nisbah berada hampir dengan 1; apabila sudut [[A]] membuka ke arah [[90^\\circ]], sisi bersebelahan menjadi perkadaran yang lebih kecil dan nisbah jatuh. Nilai rujukan yang disahkan di bawah menunjukkan corak ini:"
          }
        ],
        "steps": [],
        "listItems": [],
        "related": [],
        "tables": [
          {
            "headers": [
              "Sudut A",
              "Sisi bersebelahan b",
              "Hipotenus c",
              "Nisbah kosinus"
            ],
            "rows": [
              [
                "30 deg",
                "sqrt(3)",
                "2",
                "Kira-kira 0.8660"
              ],
              [
                "45 deg",
                "1",
                "sqrt(2)",
                "Kira-kira 0.7071"
              ],
              [
                "60 deg",
                "1",
                "2",
                "0.5"
              ],
              [
                "80 deg",
                "1",
                "Kira-kira 5.7588",
                "Kira-kira 0.1736"
              ]
            ]
          }
        ],
        "figures": [
          {
            "alt": "Tiga segi tiga pada 30, 45, 60 darjah dengan nilai kosinus 0.8660, 0.7071, 0.5; kosinus menurun apabila sudut bertambah",
            "caption": "Apabila sudut A bertambah, sisi bersebelahan menjadi perkadaran hipotenus yang lebih kecil, jadi cos(A) menurun."
          }
        ],
        "closingParagraphs": [
          "Ukuran dalam jadual adalah ilustrasi: nisbah, bukan panjang mutlak, yang menentukan sudut. Nisbah menghampiri 0 apabila sudut menghampiri [[90^\\circ]] dan menghampiri 1 apabila sudut menghampiri [[0^\\circ]], kekal dengan ketatnya di antara kedua-duanya bagi setiap segi tiga yang sah.",
          "Kalkulator tidak menerima sebarang input sudut; nilai rujukan ini berfungsi sebagai panduan dan nilai semakan apabila mengesahkan keputusan."
        ]
      },
      "cos-recover": {
        "h2": "Mencari sisi dan sudut dengan kosinus",
        "blocks": [
          {
            "kind": "p",
            "text": "Formula kosinus disusun semula dengan kemas untuk mendapatkan semula mana-mana satu daripada tiga kuantitinya apabila dua yang lain diketahui."
          },
          {
            "kind": "h3",
            "text": "Cara mencari sisi bersebelahan"
          },
          {
            "kind": "p",
            "text": "Mulakan dengan [[\\cos(A)=b/c]] dan darabkan kedua-dua belah dengan [[c]]:"
          },
          {
            "kind": "p",
            "text": "[[[\\boxed{b=c\\cos(A)}]]]"
          },
          {
            "kind": "p",
            "text": "Dengan [[c=10\\text{ m}]] dan [[A=60^\\circ]]: [[b=10\\cos(60^\\circ)]], dan memandangkan [[\\cos(60^\\circ)=0.5]], [[\\boxed{b=5\\text{ m}}]]: separuh hipotenus bagi sudut ini."
          },
          {
            "kind": "h3",
            "text": "Cara mencari hipotenus"
          },
          {
            "kind": "p",
            "text": "Menyelesaikan untuk [[c]] pula memberikan:"
          },
          {
            "kind": "p",
            "text": "[[[\\boxed{c=\\frac{b}{\\cos(A)}}]]]"
          },
          {
            "kind": "p",
            "text": "Dengan [[b=4\\text{ m}]] dan [[A=60^\\circ]]: [[c=4/0.5]], jadi [[\\boxed{c=8\\text{ m}}]]."
          },
          {
            "kind": "h3",
            "text": "Cara mencari sudut daripada nisbah kosinus"
          },
          {
            "kind": "p",
            "text": "Nisbah kosinus dan sudut ialah kuantiti yang berbeza. Jika nisbah diketahui, kosinus songsang, juga dipanggil arkkosinus, mendapatkan semula sudut:"
          },
          {
            "kind": "p",
            "text": "[[[\\boxed{A=\\cos^{-1}\\left(\\frac{b}{c}\\right)}]]]"
          },
          {
            "kind": "p",
            "text": "Dengan [[\\cos(A)=0.8]]: [[A=\\cos^{-1}(0.8)]], jadi [[\\boxed{A\\approx36.87^\\circ}]]; tetapkan kalkulator saintifik kepada mod darjah terlebih dahulu. Ini susunan semula matematik: alat di halaman ini mengembalikan nisbah itu sendiri."
          }
        ],
        "steps": [],
        "listItems": [],
        "related": [],
        "tables": [],
        "figures": []
      },
      "cos-mistakes": {
        "h2": "Kesilapan biasa semasa mengira kosinus",
        "blocks": [
          {
            "kind": "h3",
            "text": "Salah lawan betul"
          },
          {
            "kind": "p",
            "text": "Diberi [[b=4]] dan [[c=5]]:"
          },
          {
            "kind": "p",
            "text": "Salah: [[5/4=1.25]]. Ini ialah salingan kosinus, dipanggil sekan, dan ia bukan nisbah kosinus."
          },
          {
            "kind": "p",
            "text": "Betul: [[\\cos(A)=4/5=0.8]]."
          },
          {
            "kind": "p",
            "text": "Kosinus sudut tirus yang sah sentiasa berada antara 0 dan 1."
          }
        ],
        "steps": [
          "<strong>Menggunakan sisi bertentangan bukannya sisi bersebelahan.</strong> Ini mengira [[a/c]], iaitu sinus. Baiki: pilih kaki yang menyentuh sudut [[A]].",
          "<strong>Menterbalikkan pecahan kepada [[c/b]].</strong> Jawapan melebihi 1. Baiki: sisi yang lebih panjang mestilah penyebut.",
          "<strong>Mengelirukan kosinus dengan sinus.</strong> Melaporkan 0.6 bagi segi tiga 3-4-5. Baiki: sinus menggunakan sisi bertentangan; kosinus menggunakan sisi bersebelahan.",
          "<strong>Mengelirukan kosinus dengan sekan.</strong> Mengira [[c/b]]. Baiki: sekan ialah salingan kosinus, sentiasa melebihi 1.",
          "<strong>Memasukkan sisi bersebelahan yang lebih panjang daripada hipotenus.</strong> Input itu memerikan segi tiga yang mustahil. Baiki: medan hipotenus mesti memegang ukuran yang lebih panjang.",
          "<strong>Memasukkan panjang sisi sifar atau negatif.</strong> Pembahagian dengan sifar atau nisbah negatif yang tidak bermakna. Baiki: gunakan panjang positif sahaja.",
          "<strong>Mencampurkan unit ukuran.</strong> Sentimeter dibahagi meter memesongkan nisbah sebanyak 100. Baiki: tukarkan kedua-dua sisi kepada satu unit terlebih dahulu.",
          "<strong>Melaporkan kosinus sebagai sudut dalam darjah.</strong> Menulis 0.8 darjah. Baiki: nisbah ialah nombor tulen, bukan sudut.",
          "<strong>Menganggap nisbah kosinus berunit.</strong> Unit telah pun terhapus dalam pembahagian. Baiki: gugurkan unit daripada jawapan.",
          "<strong>Mengelirukan sudut rujukan dengan sudut tirus yang lain.</strong> Label sisi bersebelahan dan sisi bertentangan bertukar. Baiki: tandakan sudut [[A]] pada rajah terlebih dahulu.",
          "<strong>Membundarkan terlalu awal.</strong> Membundarkan [[12/13]] kepada 0.92 sebelum mendarab kembali menambah ralat yang boleh dielakkan. Baiki: simpan digit tambahan sehingga langkah akhir.",
          "<strong>Menganggap kosinus sama bagi setiap segi tiga.</strong> Menggunakan satu nilai untuk bentuk yang berbeza. Baiki: kosinus bergantung pada kadaran segi tiga.",
          "<strong>Menyangka nisbah secara langsung memberikan sudut dalam darjah.</strong> Membaca 0.8 sebagai sudut. Baiki: gunakan kosinus songsang untuk mendapatkan semula darjah.",
          "<strong>Membaca kosinus 0.8 sebagai 0.8 darjah.</strong> Mengelirukan nisbah dengan sudut. Baiki: 0.8 ialah nisbah; sudutnya kira-kira 36.87 darjah.",
          "<strong>Menamakan kaki sebelum mengenal pasti sudut rujukan.</strong> Sisi bersebelahan dan sisi bertentangan tercampur. Baiki: tetapkan sudut [[A]] sebelum menamakan sebarang kaki."
        ],
        "listItems": [],
        "related": [],
        "tables": [],
        "figures": []
      },
      "cos-verify": {
        "h2": "Cara menyemak sama ada keputusan kosinus anda sah",
        "blocks": [
          {
            "kind": "p",
            "text": "Segi tiga tepat yang sah dan tidak merosot memerlukan [[0 \\lt b \\lt c]], dan oleh itu [[0 \\lt b/c \\lt 1]]. Kedua-dua ukuran mesti menggunakan unit yang serasi, dan keputusan kosinus mestilah lebih besar daripada 0 dan kurang daripada 1. Keputusan 1 atau lebih biasanya menunjukkan input yang tertukar, pengecaman sisi yang salah, atau ukuran yang tidak serasi."
          },
          {
            "kind": "h3",
            "text": "Kaedah 1: semak nisbah"
          },
          {
            "kind": "p",
            "text": "Sahkan [[\\cos(A)=b/c]] secara langsung. Dengan [[b=4]] dan [[c=5]]: [[4/5=0.8]]."
          },
          {
            "kind": "h3",
            "text": "Kaedah 2: semak teorem Pythagoras"
          },
          {
            "kind": "p",
            "text": "Jika sisi bertentangan diketahui atau diperlukan, kira [[a=\\sqrt{c^2-b^2}]]. Untuk [[b=4]] dan [[c=5]]: [[a=\\sqrt{25-16}=3]], dan [[3^2+4^2=5^2]]. Ini mengesahkan dimensi segi tiga tepat 3-4-5."
          },
          {
            "kind": "h3",
            "text": "Kaedah 3: semak menggunakan kosinus songsang"
          },
          {
            "kind": "p",
            "text": "Jika nisbahnya 0.8: [[A=\\cos^{-1}(0.8)\\approx36.87^\\circ]]. Kemudian sahkan bahawa sudut dan nisbah sisi adalah konsisten. Perbezaan kecil boleh berlaku disebabkan pembundaran."
          }
        ],
        "steps": [],
        "listItems": [],
        "related": [],
        "tables": [],
        "figures": []
      },
      "cos-vs": {
        "h2": "Kosinus vs. sinus, tangen, dan sekan",
        "blocks": [
          {
            "kind": "p",
            "text": "Setiap nisbah membandingkan pasangan sisi yang berbeza, menggunakan sudut rujukan dan label sisi yang sama:"
          }
        ],
        "steps": [],
        "listItems": [],
        "related": [],
        "tables": [
          {
            "headers": [
              "Nisbah",
              "Formula",
              "Apa yang dibandingkan"
            ],
            "rows": [
              [
                "Sinus",
                "sin(A) = a/c",
                "Sisi bertentangan dengan hipotenus"
              ],
              [
                "Kosinus",
                "cos(A) = b/c",
                "Sisi bersebelahan dengan hipotenus"
              ],
              [
                "Tangen",
                "tan(A) = a/b",
                "Sisi bertentangan dengan sisi bersebelahan"
              ],
              [
                "Sekan",
                "sec(A) = c/b",
                "Hipotenus dengan sisi bersebelahan"
              ],
              [
                "Kosekan",
                "csc(A) = c/a",
                "Hipotenus dengan sisi bertentangan"
              ],
              [
                "Kotangen",
                "cot(A) = b/a",
                "Sisi bersebelahan dengan sisi bertentangan"
              ]
            ]
          }
        ],
        "figures": [],
        "closingParagraphs": [
          "Sekan ialah salingan kosinus: [[\\sec(A)=1/\\cos(A)]]. Jika [[\\cos(A)=0.8]], maka [[\\sec(A)=1/0.8=1.25]]. Gunakan kosinus untuk sisi bersebelahan atau unjuran mengufuk, sinus untuk komponen menegak, tangen apabila tiada hipotenus terlibat, dan sekan apabila formula memerlukan salingan.",
          "Untuk nisbah yang berjiran, lihat <a href=\"/sine-ratio-calculator/\" class=\"text-primary hover:underline\">Kalkulator Nisbah Sinus</a>, <a href=\"/tangent-ratio-calculator/\" class=\"text-primary hover:underline\">Kalkulator Nisbah Tangen</a>, <a href=\"/secant-ratio-calculator/\" class=\"text-primary hover:underline\">Kalkulator Nisbah Sekan</a>, dan <a href=\"/cosecant-ratio-calculator/\" class=\"text-primary hover:underline\">Kalkulator Nisbah Kosekan</a>."
        ]
      },
      "cos-faq": {
        "h2": "Soalan lazim",
        "blocks": [],
        "steps": [],
        "listItems": [],
        "related": [],
        "tables": [],
        "figures": []
      },
      "cos-related": {
        "h2": "Terokai kalkulator trigonometri berkaitan",
        "blocks": [],
        "steps": [],
        "listItems": [],
        "related": [
          {
            "name": "Kalkulator Nisbah Sinus",
            "desc": "Cari nisbah sinus sudut tirus daripada sisi bertentangan dan hipotenus."
          },
          {
            "name": "Kalkulator Nisbah Tangen",
            "desc": "Cari nisbah tangen daripada sisi bertentangan dan sisi bersebelahan."
          },
          {
            "name": "Kalkulator Nisbah Sekan",
            "desc": "Cari nisbah sekan sebagai salingan kosinus."
          },
          {
            "name": "Kalkulator Nisbah Kosekan",
            "desc": "Cari nisbah kosekan sebagai salingan sinus."
          },
          {
            "name": "Kalkulator Sudut Segi Tiga Tepat",
            "desc": "Cari sudut tirus yang tidak diketahui daripada panjang sisi."
          },
          {
            "name": "Kalkulator Sisi Segi Tiga Tepat",
            "desc": "Cari panjang sisi yang tidak diketahui dengan trigonometri atau teorem Pythagoras."
          }
        ],
        "tables": [],
        "figures": []
      }
    },
    "faqHeading": "Soalan lazim",
    "relatedHeading": "Terokai kalkulator trigonometri berkaitan",
    "faqs": [
      {
        "question": "Apakah formula nisbah kosinus bagi segi tiga tepat?",
        "answer": "cos(A) = b / c: bahagikan sisi yang bersebelahan dengan sudut A dengan hipotenus. Untuk sisi bersebelahan 4 cm dan hipotenus 5 cm, keputusannya ialah 4/5 = 0.8."
      },
      {
        "question": "Bagaimanakah cara mengira kosinus daripada dua panjang sisi?",
        "answer": "Ukur sisi bersebelahan b dan hipotenus c dalam unit yang sama, pastikan c lebih panjang daripada b, kemudian kira cos(A) = b / c. Dengan b = 12 m dan c = 13 m, jawapannya ialah 12/13, kira-kira 0.9231."
      },
      {
        "question": "Apakah perbezaan antara kosinus dengan sinus?",
        "answer": "Kosinus membahagikan sisi bersebelahan dengan hipotenus (b/c); sinus membahagikan sisi bertentangan dengan hipotenus (a/c). Dalam segi tiga 3-4-5, cos(A) = 0.8 dan sin(A) = 0.6."
      },
      {
        "question": "Mengapakah kosinus kurang daripada 1 bagi sudut tirus dalam segi tiga tepat?",
        "answer": "Hipotenus ialah sisi terpanjang, jadi b sentiasa lebih kecil daripada c. Membahagikan nombor positif yang lebih kecil dengan nombor yang lebih besar memberikan keputusan di bawah 1; kedua-dua sisi adalah positif, jadi ia kekal melebihi 0."
      },
      {
        "question": "Bolehkah kosinus melebihi 1 dalam segi tiga tepat yang sah?",
        "answer": "Tidak. Kosinus melebihi 1 memerlukan sisi bersebelahan lebih panjang daripada hipotenus, mustahil dalam segi tiga tepat yang tulen. Jika alat menunjukkan 1 atau lebih, input telah tertukar, kaki yang salah digunakan, atau ukuran tidak serasi."
      },
      {
        "question": "Apakah maksud nilai kosinus 0.8?",
        "answer": "Sisi bersebelahan adalah 80 peratus sepanjang hipotenus: 4 m / 5 m = 0.8. Nombor itu memerikan bentuk segi tiga, bukan sudut; sudut yang sepadan ialah kira-kira 36.87 darjah, diperoleh dengan kosinus songsang."
      },
      {
        "question": "Adakah nisbah kosinus mempunyai unit?",
        "answer": "Tidak. Kedua-dua sisi diukur dalam unit yang sama, jadi unit terhapus: 4 m / 5 m = 0.8, dan 400 cm / 500 cm = 0.8. Laporkan kosinus sebagai nombor tulen tanpa dimensi, tidak pernah dengan darjah, meter, atau kaki."
      },
      {
        "question": "Bagaimanakah cara mencari sudut daripada nisbah kosinus?",
        "answer": "Gunakan kosinus songsang (arkkosinus): A = cos^-1(nisbah). Untuk 0.8, A = cos^-1(0.8), kira-kira 36.87 darjah. Kalkulator di halaman ini mengembalikan nisbah, bukan sudut, jadi tetapkan kalkulator anda kepada mod darjah terlebih dahulu."
      },
      {
        "question": "Bagaimanakah cara mencari sisi bersebelahan menggunakan kosinus?",
        "answer": "Susun semula formula kepada b = c x cos(A). Darabkan hipotenus dengan kosinus sudut. Dengan c = 10 m dan sudut A = 60 darjah, cos(60 deg) = 0.5, jadi b = 10 x 0.5 = 5 m."
      },
      {
        "question": "Apakah perbezaan antara kosinus dengan sekan?",
        "answer": "Sekan ialah salingan kosinus: sec(A) = c / b, atau 1 / cos(A). Kosinus memberikan nilai di bawah 1; sekan menterbalikkan pecahan, memberikan nilai melebihi 1. Jika cos(A) = 0.8, sec(A) = 1.25."
      },
      {
        "question": "Bolehkah saya mengira kosinus tanpa mengetahui sisi bertentangan?",
        "answer": "Ya. Kosinus hanya memerlukan sisi bersebelahan dan hipotenus; sisi bertentangan tidak memainkan sebarang peranan dalam cos(A) = b/c, justeru kalkulator ini tidak pernah memintanya."
      },
      {
        "question": "Bagaimanakah kosinus boleh digunakan dalam ukuran praktikal?",
        "answer": "Kosinus ialah alat untuk unjuran mengufuk: jarak tanah daripada panjang tangga, larian mengufuk daripada panjang kasau, atau komponen mengufuk sesuatu daya. Darabkan hipotenus dengan cos(A) untuk mendapatkan sisi bersebelahan, atau gunakan nisbah untuk mengesahkan ukuran muat dalam segi tiga tepat."
      }
    ],
    "conclusion": {
      "h2": "Kuasai nisbah kosinus dengan yakin",
      "paragraphs": [
        "Kosinus ialah perkadaran hipotenus yang diliputi oleh sisi bersebelahan: bahagikan [[b]] dengan [[c]] untuk memerikan bentuk segi tiga. Formula [[\\cos(A)=b/c]] hanya memerlukan dua ukuran, jawapannya sentiasa nombor tanpa dimensi antara 0 dan 1, dan bentuk yang disusun semula [[b=c\\cos(A)]] dan [[A=\\cos^{-1}(b/c)]] mendapatkan semula sisi yang hilang atau sudut. Sama ada tangga, kasau, atau 3-4-5 dalam buku teks, kaedahnya tidak pernah berubah: kenal pasti sisi bersebelahan, kenal pasti hipotenus, bahagikan, dan sahkan."
      ]
    }
  },
  "pl": {
    "tocHeading": "W tym przewodniku",
    "tocItems": {
      "cos-intro": "Czym jest kalkulator stosunku cosinusa?",
      "cos-triangle": "Bok przyległy i przeciwprostokątna",
      "cos-whatis": "Czym jest stosunek cosinusa",
      "cos-formula": "Jak działa wzór cosinusa",
      "cos-howto": "Jak korzystać z kalkulatora stosunku cosinusa",
      "cos-examples": "Przykłady obliczania cosinusa krok po kroku",
      "cos-applications": "Przykłady stosowania stosunku cosinusa w praktyce",
      "cos-angle": "Cosinus a wielkość kąta",
      "cos-recover": "Znajdowanie boków i kątów za pomocą cosinusa",
      "cos-mistakes": "Częste błędy przy obliczaniu cosinusa",
      "cos-verify": "Jak sprawdzić poprawność wyniku cosinusa",
      "cos-vs": "Cosinus a sinus, tangens i secans",
      "cos-related": "Powiązane kalkulatory trygonometryczne",
      "cos-faq": "Często zadawane pytania"
    },
    "sections": {
      "cos-intro": {
        "h2": "Czym jest kalkulator stosunku cosinusa?",
        "blocks": [
          {
            "kind": "p",
            "text": "Kalkulator stosunku cosinusa odpowiada na jedno pytanie: dla kąta ostrego w trójkącie prostokątnym, jaka jest długość boku przyległego w porównaniu z przeciwprostokątną? Po wprowadzeniu dwóch długości boków narzędzie dzieli bok przyległy przez przeciwprostokątną i zwraca [[\\cos(A)=b/c]]. Przy boku przyległym 4 cm i przeciwprostokątnej 5 cm obliczenie wygląda tak: [[4/5=0.8]]: bok przyległy stanowi 80 procent przeciwprostokątnej. Ten ułamek dziesiętny to pełna odpowiedź. Nie ma jednostek, ponieważ centymetry skracają się podczas dzielenia, i nie jest kątem w stopniach. Bok przeciwległy nigdy nie występuje w tym obliczeniu. Na podstawie tego jednego stosunku można porównywać kształty, sprawdzać pomiary, wyznaczać rzuty poziome albo odtwarzać kąt za pomocą arcus cosinusa."
          }
        ],
        "steps": [],
        "listItems": [],
        "related": [],
        "tables": [],
        "figures": []
      },
      "cos-triangle": {
        "h2": "Bok przyległy i przeciwprostokątna",
        "blocks": [
          {
            "kind": "h3",
            "text": "Czym jest trójkąt prostokątny?"
          },
          {
            "kind": "p",
            "text": "Trójkąt prostokątny ma jeden kąt równy dokładnie [[90^\\circ]], czyli kąt między dwiema prostopadłymi liniami, jak ściana spotykająca się z poziomą podłogą. Przeciwprostokątna leży naprzeciw tego kąta prostego i jest zawsze najdłuższym bokiem. Pozostałe dwa kąty dzielą między sobą pozostałe 90 stopni, więc oba są ostre. Cosinus porównuje dwa z tych boków w stałej relacji."
          },
          {
            "kind": "h3",
            "text": "Czym jest bok przyległy?"
          },
          {
            "kind": "p",
            "text": "Bok przyległy [[b]] to przyprostokątna stykająca się z kątem odniesienia [[A]], niebędąca przeciwprostokątną. Często oznacza rozpiętość poziomą: odległość drabiny od podłoża, poziomą rozpiętość krokwi albo rzut siły. To, która przyprostokątna jest przyległa, zależy od kąta odniesienia, więc przejście od kąta [[A]] do kąta [[B]] zamienia oznaczenia boków przyległego i przeciwległego."
          },
          {
            "kind": "h3",
            "text": "Czym jest przeciwprostokątna?"
          },
          {
            "kind": "p",
            "text": "Przeciwprostokątna [[c]] to bok leżący naprzeciw kąta prostego: na każdym rysunku znajduje się naprzeciw małego kwadracika oznaczającego kąt [[90^\\circ]] i jest najdłuższym bokiem. W rzeczywistych sytuacjach może to być drabina, krokiew, rampa, lina albo droga w linii prostej; zawsze jest ściśle dłuższa niż bok przyległy."
          },
          {
            "kind": "h3",
            "text": "Czym jest bok przeciwległy?"
          },
          {
            "kind": "p",
            "text": "Bok przeciwległy [[a]] leży dokładnie naprzeciw kąta [[A]] i nigdy nie dotyka jego wierzchołka. Nie odgrywa żadnej roli we wzorze cosinusa, dlatego kalkulator nigdy o niego nie prosi. Kąt odniesienia należy określić jednoznacznie: wybranie niewłaściwego kąta po cichu zamienia oznaczenia boków przeciwległego i przyległego."
          }
        ],
        "steps": [],
        "listItems": [],
        "related": [],
        "tables": [],
        "figures": [
          {
            "alt": "Trójkąt prostokątny z kątem A u dołu po lewej: złoty bok b, niebieska przeciwprostokątna c, bok przeciwległy a, cos(A)=b/c",
            "caption": "Kąt A znajduje się w lewym dolnym rogu; cosinus korzysta z boku przyległego b i przeciwprostokątnej c, nie z boku przeciwległego a."
          }
        ]
      },
      "cos-whatis": {
        "h2": "Czym jest stosunek cosinusa",
        "blocks": [
          {
            "kind": "p",
            "text": "Cosinus porównuje przyprostokątną leżącą przy kącie [[A]] z całą przeciwprostokątną:"
          },
          {
            "kind": "p",
            "text": "[[[\\cos(A)=\\frac{b}{c}]]]"
          },
          {
            "kind": "p",
            "text": "W tym wzorze [[\\cos(A)]] to cosinus kąta [[A]], [[b]] to bok przyległy, a [[c]] to przeciwprostokątna: jest to udział przeciwprostokątnej pokrywany przez bok przyległy."
          },
          {
            "kind": "h3",
            "text": "Zrozumienie zasady SOH-CAH-TOA"
          },
          {
            "kind": "p",
            "text": "SOH: sinus = bok przeciwległy / przeciwprostokątna. CAH: cosinus = bok przyległy / przeciwprostokątna. TOA: tangens = bok przeciwległy / bok przyległy. Litery CAH odczytują wzór cosinusa: pierwsza litera nazywa funkcję, druga licznik, a trzecia mianownik."
          },
          {
            "kind": "h3",
            "text": "Dlaczego cosinus jest stosunkiem"
          },
          {
            "kind": "p",
            "text": "Dzielenie dwóch długości skraca jednostki: [[4\\text{ m}/5\\text{ m}=0.8]], a także [[400\\text{ cm}/500\\text{ cm}=0.8]]. Te same fizyczne boki zawsze dają tę samą liczbę, niezależnie od jednostki pomiaru, o ile obie strony dzielą tę samą jednostkę."
          },
          {
            "kind": "h3",
            "text": "Co oznacza wartość cosinusa 0.8?"
          },
          {
            "kind": "p",
            "text": "Oznacza ona, że bok przyległy stanowi 80 procent przeciwprostokątnej: długa przyprostokątna przy kącie i przeciwprostokątna tylko nieznacznie dłuższa. Nie podaje bezpośrednio kąta; do tego potrzebny jest arcus cosinus."
          },
          {
            "kind": "h3",
            "text": "Dlaczego cosinus jest mniejszy od 1"
          },
          {
            "kind": "p",
            "text": "Przeciwprostokątna jest dłuższa niż każda z przyprostokątnych, więc [[b \\lt c]] i [[b/c \\lt 1]], a oba boki są dodatnie, więc stosunek pozostaje powyżej 0. Dla poprawnego, niezdegenerowanego trójkąta prostokątnego cosinus zawsze mieści się ściśle między 0 a 1; wartości graniczne 0 i 1 są kresami, nie wartościami osiągalnymi."
          },
          {
            "kind": "h3",
            "text": "Cosinus a sinus"
          },
          {
            "kind": "p",
            "text": "[[\\cos(A)=b/c]] i [[\\sin(A)=a/c]] mają wspólną przeciwprostokątną, ale korzystają z różnych przyprostokątnych. Cosinus należy wybrać, gdy bok przyległy jest znany albo potrzebny; sinus, gdy znany jest bok przeciwległy. Mylenie tych dwóch funkcji to najczęstszy początkowy błąd."
          }
        ],
        "steps": [],
        "listItems": [],
        "related": [],
        "tables": [],
        "figures": [
          {
            "alt": "Trzy etapy: oznaczony trójkąt 3-4-5, wzór cos(A)=b/c, wynik 4/5=0.8, bok przyległy to 80 procent",
            "caption": "Trzy etapy: oznaczenie boków, zastosowanie wzoru cos(A) = b/c i dzielenie. Bok przyległy stanowi 80 procent przeciwprostokątnej."
          }
        ]
      },
      "cos-formula": {
        "h2": "Jak działa wzór cosinusa",
        "blocks": [
          {
            "kind": "p",
            "text": "Punktem wyjścia jest definicja: cosinus to bok przyległy podzielony przez przeciwprostokątną. W notacji tej strony:"
          },
          {
            "kind": "p",
            "text": "[[[\\boxed{\\cos(A)=\\frac{b}{c}}]]]"
          },
          {
            "kind": "p",
            "text": "Bok przyległy jest licznikiem, ponieważ to porównywana przyprostokątna; przeciwprostokątna jest mianownikiem, ponieważ to długość odniesienia."
          },
          {
            "kind": "h3",
            "text": "W pełni rozwiązany przykład: trójkąt 3-4-5"
          },
          {
            "kind": "p",
            "text": "Dane: [[b=4\\text{ cm}]], [[a=3\\text{ cm}]], [[c=5\\text{ cm}]]:"
          },
          {
            "kind": "p",
            "text": "Krok 1: zapisanie wzoru. [[\\cos(A)=b/c]]"
          },
          {
            "kind": "p",
            "text": "Krok 2: podstawienie pomiarów. [[\\cos(A)=4/5]]"
          },
          {
            "kind": "p",
            "text": "Krok 3: dzielenie. [[\\boxed{\\cos(A)=0.8}]]"
          },
          {
            "kind": "p",
            "text": "Krok 4: interpretacja odpowiedzi. Bok przyległy stanowi 80 procent przeciwprostokątnej."
          },
          {
            "kind": "p",
            "text": "Krok 5: weryfikacja trójkąta. [[3^2+4^2=5^2]], czyli [[9+16=25]]. Długości boków są matematycznie spójne."
          },
          {
            "kind": "p",
            "text": "Jeśli potrzebny jest kąt, a nie stosunek, kolejnym krokiem jest arcus cosinus: [[A=\\cos^{-1}(0.8)\\approx36.87^\\circ]]. To odrębne obliczenie; narzędzie na tej stronie zwraca tylko stosunek."
          }
        ],
        "steps": [],
        "listItems": [],
        "related": [],
        "tables": [],
        "figures": []
      },
      "cos-howto": {
        "h2": "Jak korzystać z kalkulatora stosunku cosinusa",
        "blocks": [
          {
            "kind": "p",
            "text": "Poniższa instrukcja odpowiada rzeczywistemu interfejsowi na tej stronie."
          }
        ],
        "steps": [
          "<strong>Identyfikacja kąta odniesienia [[A]].</strong> Bok przyległy definiowany jest względem tego kąta.",
          "<strong>Zlokalizowanie boku przyległego [[b]]:</strong> przyprostokątnej stykającej się z kątem [[A]], niebędącej przeciwprostokątną.",
          "<strong>Zlokalizowanie przeciwprostokątnej [[c]]:</strong> boku leżącego naprzeciw kąta prostego, najdłuższego boku.",
          "<strong>Zmierzenie lub uzyskanie obu długości boków</strong> w tej samej jednostce.",
          "<strong>Wprowadzenie długości boku przyległego</strong> (mniejszej wartości) w pierwszym polu.",
          "<strong>Wprowadzenie przeciwprostokątnej</strong> (większej wartości) w drugim polu.",
          "<strong>Wybór zgodnych jednostek w selektorach jednostek</strong>, aby dzielenie było sensowne.",
          "<strong>Sprawdzenie, czy obie wartości są dodatnie;</strong> zerowe lub ujemne długości nie tworzą trójkąta.",
          "<strong>Sprawdzenie, czy przeciwprostokątna jest dłuższa niż bok przyległy;</strong> w przeciwnym razie dane wejściowe są zamienione lub błędnie oznaczone.",
          "<strong>Kliknięcie przycisku obliczania cos(A)</strong>, aby podzielić bok przyległy przez przeciwprostokątną.",
          "<strong>Odczytanie stosunku cosinusa:</strong> udziału boku przyległego w przeciwprostokątnej.",
          "<strong>Sprawdzenie, czy odpowiedź mieści się między 0 a 1;</strong> wartość spoza tego przedziału sygnalizuje błąd danych wejściowych.",
          "<strong>Użycie przycisku Reset</strong> w celu wyczyszczenia danych i rozpoczęcia od nowa."
        ],
        "listItems": [],
        "related": [],
        "tables": [],
        "figures": [],
        "closingParagraphs": [
          "Kalkulator nigdy nie prosi o kąt w stopniach, bok przeciwległy ani wartość do odwrócenia: pełnym wejściem są dwie długości boków."
        ]
      },
      "cos-examples": {
        "h2": "Przykłady obliczania cosinusa krok po kroku",
        "blocks": [
          {
            "kind": "p",
            "text": "Każdy przykład przebiega według tego samego schematu: zapisanie wzoru, podstawienie, dzielenie."
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
            "text": "[[\\cos(A)=4/5]]"
          },
          {
            "kind": "p",
            "text": "[[\\boxed{\\cos(A)=0.8}]]"
          },
          {
            "kind": "p",
            "text": "Bok przyległy stanowi 80 procent przeciwprostokątnej; bok przeciwległy dopełnia trójkąt, ale wzór go pomija."
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
            "text": "[[\\cos(A)=12/13]]"
          },
          {
            "kind": "p",
            "text": "[[\\boxed{\\cos(A)\\approx0.9231}]]"
          },
          {
            "kind": "p",
            "text": "Bok przyległy stanowi około 92.31 procent przeciwprostokątnej; przeciwległy bok 5 m nie jest potrzebny."
          },
          {
            "kind": "h3",
            "text": "Przykład 3: trójkąt 30-60-90"
          },
          {
            "kind": "p",
            "text": "Dla kąta [[A=30^\\circ]] bok przyległy wynosi [[\\sqrt{3}/2]] długości przeciwprostokątnej. Przy [[b=\\sqrt{3}\\text{ cm}]] i [[c=2\\text{ cm}]]:"
          },
          {
            "kind": "p",
            "text": "[[\\cos(30^\\circ)=\\frac{\\sqrt{3}}{2}]]"
          },
          {
            "kind": "p",
            "text": "[[\\boxed{\\cos(30^\\circ)\\approx0.8660}]]"
          },
          {
            "kind": "p",
            "text": "Tę wartość kąta szczególnego warto zapamiętać; trójkąt 30-60-90 pojawia się stale w zadaniach geometrycznych."
          },
          {
            "kind": "h3",
            "text": "Przykład 4: trójkąt o boku przyległym 8 i przeciwprostokątnej 10"
          },
          {
            "kind": "p",
            "text": "Dane: [[b=8\\text{ m}]] i [[c=10\\text{ m}]]:"
          },
          {
            "kind": "p",
            "text": "[[\\cos(A)=8/10]]"
          },
          {
            "kind": "p",
            "text": "[[\\boxed{\\cos(A)=0.8}]]"
          },
          {
            "kind": "p",
            "text": "Stosunek jest zgodny z trójkątem 3-4-5, ponieważ skalowanie wszystkich boków tym samym czynnikiem pozostawia kąty i stosunki bez zmian."
          }
        ],
        "steps": [],
        "listItems": [],
        "related": [],
        "tables": [],
        "figures": []
      },
      "cos-applications": {
        "h2": "Przykłady stosowania stosunku cosinusa w praktyce",
        "blocks": [
          {
            "kind": "p",
            "text": "Cosinus to stosunek matematyczny, a nie wielkość fizyczna o jednostkach. Jego praktyczna wartość leży w porównywaniu boku przyległego z przeciwprostokątną, obliczaniu rzutów poziomych i weryfikowaniu pomiarów. Każdy przykład zakłada uproszczony trójkąt prostokątny."
          },
          {
            "kind": "h3",
            "text": "Przykład 5: obliczanie stosunku cosinusa drabiny"
          },
          {
            "kind": "p",
            "text": "Drabina o długości 5 m stoi w odległości 3 m od ściany; kąt [[A]] leży między drabiną a poziomym podłożem. Odległość przy ziemi to bok przyległy [[b=3\\text{ m}]], drabina to przeciwprostokątna [[c=5\\text{ m}]]. [[\\cos(A)=3/5]], więc [[\\boxed{\\cos(A)=0.6}]]: odległość przy ziemi stanowi 60 procent długości drabiny. Sam stosunek nie potwierdza bezpieczeństwa drabiny."
          },
          {
            "kind": "h3",
            "text": "Przykład 6: obliczanie stosunku cosinusa krokwi dachowej"
          },
          {
            "kind": "p",
            "text": "Krokiew dachowa ma długość 5 m przy poziomej rozpiętości 4 m: rozpiętość to bok przyległy [[b=4\\text{ m}]], krokiew to przeciwprostokątna [[c=5\\text{ m}]]. [[\\cos(A)=4/5]], więc [[\\boxed{\\cos(A)=0.8}]]: rozpiętość stanowi 80 procent długości pochyłej. To stosunek geometryczny, nie ocena konstrukcyjna."
          },
          {
            "kind": "h3",
            "text": "Przykład 7: ocena stosunku cosinusa rampy"
          },
          {
            "kind": "p",
            "text": "Rampa ma długość 9.5 m przy poziomej rozpiętości 9 m: [[b=9\\text{ m}]], [[c=9.5\\text{ m}]]. [[\\cos(A)=9/9.5]], więc [[\\boxed{\\cos(A)\\approx0.9474}]]: rozpiętość stanowi około 94.74 procent długości pochylni, zgodnie z oczekiwaniami dla łagodnego spadku. Nie potwierdza to zgodności z przepisami o dostępności."
          },
          {
            "kind": "h3",
            "text": "Przykład 8: pomiar geodezyjny"
          },
          {
            "kind": "p",
            "text": "Uproszczony trójkąt geodezyjny rejestruje odległość w linii prostej 50 m i poziome rozdzielenie 40 m: [[b=40\\text{ m}]], [[c=50\\text{ m}]]. [[\\cos(A)=40/50]], więc [[\\boxed{\\cos(A)=0.8}]]: odległość pozioma stanowi 80 procent odległości w linii prostej. Rzeczywiste pomiary geodezyjne mogą wymagać poprawek na wysokość instrumentu."
          },
          {
            "kind": "h3",
            "text": "Przykład 9: wyznaczanie stosunku cosinusa odciągu"
          },
          {
            "kind": "p",
            "text": "Odciąg o długości 13 m kotwiczony jest 12 m poziomo od słupa: [[b=12\\text{ m}]], [[c=13\\text{ m}]]. [[\\cos(A)=12/13]], więc [[\\boxed{\\cos(A)\\approx0.9231}]]: odstęp stanowi około 92.31 procent długości odciągu. Nic nie mówi to o naciągu liny ani wytrzymałości kotwienia."
          },
          {
            "kind": "h3",
            "text": "Przykład 10: obliczanie stosunku cosinusa policzka schodowego"
          },
          {
            "kind": "p",
            "text": "Uproszczony policzek schodowy ma długość 5 m przy poziomej rozpiętości 4 m: [[b=4\\text{ m}]], [[c=5\\text{ m}]]. [[\\cos(A)=4/5]], więc [[\\boxed{\\cos(A)=0.8}]]: rozpiętość stanowi 80 procent długości przekątnej policzka. Nie weryfikuje to zgodności z przepisami budowlanymi."
          },
          {
            "kind": "h3",
            "text": "Przykład 11: rzut poziomy wysięgnika dźwigu"
          },
          {
            "kind": "p",
            "text": "Uproszczony wysięgnik dźwigu ma długość 10 m przy rzucie poziomym 6 m: [[b=6\\text{ m}]], [[c=10\\text{ m}]]. [[\\cos(A)=6/10]], więc [[\\boxed{\\cos(A)=0.6}]]: rzut stanowi 60 procent długości wysięgnika. Nie określa to udźwigu."
          },
          {
            "kind": "h3",
            "text": "Przykład 12: prosty odcinek lotu samolotu"
          },
          {
            "kind": "p",
            "text": "Samolot pokonuje 5 km po prostej trasie, przemieszczając się 4 km w poziomie: [[b=4\\text{ km}]], [[c=5\\text{ km}]]. [[\\cos(A)=4/5]], więc [[\\boxed{\\cos(A)=0.8}]]: przemieszczenie poziome stanowi 80 procent długości trasy. To wyidealizowany model, nie nawigacja lotnicza."
          },
          {
            "kind": "h3",
            "text": "Przykład 13: obliczanie stosunku cosinusa zastrzału przekątnego"
          },
          {
            "kind": "p",
            "text": "Zastrzał przekątny ma długość 2 m przy rzucie poziomym 1.2 m: [[b=1.2\\text{ m}]], [[c=2\\text{ m}]]. [[\\cos(A)=1.2/2]], więc [[\\boxed{\\cos(A)=0.6}]]: rzut stanowi 60 procent długości zastrzału. Nie określa to wytrzymałości zastrzału."
          },
          {
            "kind": "h3",
            "text": "Przykład 14: obliczanie stosunku cosinusa szlaku turystycznego"
          },
          {
            "kind": "p",
            "text": "Prosty odcinek szlaku ma długość 100 m przy przemieszczeniu poziomym 80 m: [[b=80\\text{ m}]], [[c=100\\text{ m}]]. [[\\cos(A)=80/100]], więc [[\\boxed{\\cos(A)=0.8}]]: przemieszczenie stanowi 80 procent długości trasy. Prawdziwe szlaki wiją się i zmieniają nachylenie."
          },
          {
            "kind": "h3",
            "text": "Przykład 15: wspornik markizy"
          },
          {
            "kind": "p",
            "text": "Wspornik markizy ma długość 3 m przy rzucie poziomym 2.4 m: [[b=2.4\\text{ m}]], [[c=3\\text{ m}]]. [[\\cos(A)=2.4/3]], więc [[\\boxed{\\cos(A)=0.8}]]: rzut stanowi 80 procent długości wspornika. Nie potwierdza to przydatności konstrukcyjnej."
          },
          {
            "kind": "h3",
            "text": "Przykład 16: lina między dwoma punktami"
          },
          {
            "kind": "p",
            "text": "Prosta lina rozciąga się na 25 m między punktami oddalonymi o 24 m w poziomie: [[b=24\\text{ m}]], [[c=25\\text{ m}]]. [[\\cos(A)=24/25]], więc [[\\boxed{\\cos(A)=0.96}]]: odstęp stanowi 96 procent długości liny. Model zakłada prostą linę w trójkącie prostokątnym."
          },
          {
            "kind": "h3",
            "text": "Porównanie przykładów praktycznych"
          }
        ],
        "steps": [],
        "listItems": [],
        "related": [],
        "tables": [
          {
            "headers": [
              "Sytuacja",
              "Bok przyległy b",
              "Przeciwprostokątna c",
              "Wzór cosinusa",
              "Obliczony stosunek",
              "Interpretacja"
            ],
            "rows": [
              [
                "Drabina",
                "3 m",
                "5 m",
                "3/5",
                "0.6",
                "Odległość przy ziemi to 60% długości drabiny"
              ],
              [
                "Krokiew dachowa",
                "4 m",
                "5 m",
                "4/5",
                "0.8",
                "Rozpiętość to 80% długości krokwi"
              ],
              [
                "Rampa",
                "9 m",
                "9.5 m",
                "9/9.5",
                "0.9474",
                "Rozpiętość to 94.74% długości pochylni"
              ],
              [
                "Pomiar geodezyjny",
                "40 m",
                "50 m",
                "40/50",
                "0.8",
                "Odległość pozioma to 80% długości linii"
              ],
              [
                "Odciąg",
                "12 m",
                "13 m",
                "12/13",
                "0.9231",
                "Odstęp to 92.31% długości odciągu"
              ],
              [
                "Policzek schodowy",
                "4 m",
                "5 m",
                "4/5",
                "0.8",
                "Rozpiętość to 80% długości policzka"
              ],
              [
                "Wysięgnik dźwigu",
                "6 m",
                "10 m",
                "6/10",
                "0.6",
                "Rzut to 60% długości wysięgnika"
              ],
              [
                "Odcinek lotu",
                "4 km",
                "5 km",
                "4/5",
                "0.8",
                "Przemieszczenie to 80% długości trasy"
              ],
              [
                "Zastrzał przekątny",
                "1.2 m",
                "2 m",
                "1.2/2",
                "0.6",
                "Rzut to 60% długości zastrzału"
              ],
              [
                "Szlak turystyczny",
                "80 m",
                "100 m",
                "80/100",
                "0.8",
                "Przemieszczenie to 80% długości trasy"
              ],
              [
                "Wspornik markizy",
                "2.4 m",
                "3 m",
                "2.4/3",
                "0.8",
                "Rzut to 80% długości wspornika"
              ],
              [
                "Lina",
                "24 m",
                "25 m",
                "24/25",
                "0.96",
                "Odstęp to 96% długości liny"
              ]
            ]
          }
        ],
        "figures": [
          {
            "alt": "Cztery panele: drabina 0.6, krokiew 0.8, pomiar 0.8, wysięgnik 0.6, każdy z oznaczonym trójkątem prostokątnym",
            "caption": "Cztery praktyczne obliczenia: drabina, krokiew dachowa, pomiar geodezyjny i wysięgnik dźwigu, każde z własnym trójkątem, wzorem i stosunkiem."
          }
        ],
        "closingParagraphs": [
          "Schemat pozostaje ten sam: stosunek jest duży, gdy bok przyległy stanowi znaczną część przeciwprostokątnej, a mały, gdy kąt się otwiera."
        ]
      },
      "cos-angle": {
        "h2": "Związek cosinusa z wielkością kąta",
        "blocks": [
          {
            "kind": "p",
            "text": "Cosinus maleje wraz ze wzrostem kąta ostrego. Mały kąt utrzymuje bok przyległy niemal tak długi jak przeciwprostokątna, więc stosunek znajduje się blisko 1; gdy kąt [[A]] otwiera się w stronę [[90^\\circ]], bok przyległy staje się mniejszym udziałem, a stosunek spada. Zweryfikowane wartości odniesienia poniżej pokazują ten wzorzec:"
          }
        ],
        "steps": [],
        "listItems": [],
        "related": [],
        "tables": [
          {
            "headers": [
              "Kąt A",
              "Bok przyległy b",
              "Przeciwprostokątna c",
              "Stosunek cosinusa"
            ],
            "rows": [
              [
                "30 deg",
                "sqrt(3)",
                "2",
                "Około 0.8660"
              ],
              [
                "45 deg",
                "1",
                "sqrt(2)",
                "Około 0.7071"
              ],
              [
                "60 deg",
                "1",
                "2",
                "0.5"
              ],
              [
                "80 deg",
                "1",
                "Około 5.7588",
                "Około 0.1736"
              ]
            ]
          }
        ],
        "figures": [
          {
            "alt": "Trzy trójkąty dla 30, 45 i 60 stopni o wartościach cosinusa 0.8660, 0.7071 i 0.5; cosinus maleje ze wzrostem kąta",
            "caption": "Wraz ze wzrostem kąta A bok przyległy staje się mniejszą częścią przeciwprostokątnej, więc cos(A) maleje."
          }
        ],
        "closingParagraphs": [
          "Pomiary w tabeli mają charakter poglądowy: to stosunki, nie długości bezwzględne, wyznaczają kąty. Stosunek zbliża się do 0, gdy kąt zbliża się do [[90^\\circ]], i do 1, gdy kąt zbliża się do [[0^\\circ]], pozostając ściśle pomiędzy dla każdego poprawnego trójkąta.",
          "Kalkulator nie przyjmuje kąta jako danych wejściowych; te wartości odniesienia służą jako orientacja i wartości kontrolne przy weryfikacji wyniku."
        ]
      },
      "cos-recover": {
        "h2": "Znajdowanie boków i kątów za pomocą cosinusa",
        "blocks": [
          {
            "kind": "p",
            "text": "Wzór cosinusa przekształca się wygodnie, aby odzyskać dowolną z trzech wielkości, gdy znane są pozostałe dwie."
          },
          {
            "kind": "h3",
            "text": "Jak znaleźć bok przyległy"
          },
          {
            "kind": "p",
            "text": "Punktem wyjścia jest [[\\cos(A)=b/c]]; mnożenie obu stron przez [[c]] daje:"
          },
          {
            "kind": "p",
            "text": "[[[\\boxed{b=c\\cos(A)}]]]"
          },
          {
            "kind": "p",
            "text": "Przy [[c=10\\text{ m}]] i [[A=60^\\circ]]: [[b=10\\cos(60^\\circ)]], a ponieważ [[\\cos(60^\\circ)=0.5]], [[\\boxed{b=5\\text{ m}}]]: połowa przeciwprostokątnej dla tego kąta."
          },
          {
            "kind": "h3",
            "text": "Jak znaleźć przeciwprostokątną"
          },
          {
            "kind": "p",
            "text": "Rozwiązanie względem [[c]] daje:"
          },
          {
            "kind": "p",
            "text": "[[[\\boxed{c=\\frac{b}{\\cos(A)}}]]]"
          },
          {
            "kind": "p",
            "text": "Przy [[b=4\\text{ m}]] i [[A=60^\\circ]]: [[c=4/0.5]], więc [[\\boxed{c=8\\text{ m}}]]."
          },
          {
            "kind": "h3",
            "text": "Jak znaleźć kąt na podstawie stosunku cosinusa"
          },
          {
            "kind": "p",
            "text": "Stosunek cosinusa i kąt to różne wielkości. Gdy stosunek jest znany, arcus cosinus, zwany też cosinusem odwrotnym, odtwarza kąt:"
          },
          {
            "kind": "p",
            "text": "[[[\\boxed{A=\\cos^{-1}\\left(\\frac{b}{c}\\right)}]]]"
          },
          {
            "kind": "p",
            "text": "Przy [[\\cos(A)=0.8]]: [[A=\\cos^{-1}(0.8)]], więc [[\\boxed{A\\approx36.87^\\circ}]]; kalkulator naukowy należy najpierw przełączyć w tryb stopni. To matematyczne przekształcenia: narzędzie na tej stronie zwraca sam stosunek."
          }
        ],
        "steps": [],
        "listItems": [],
        "related": [],
        "tables": [],
        "figures": []
      },
      "cos-mistakes": {
        "h2": "Częste błędy przy obliczaniu cosinusa",
        "blocks": [
          {
            "kind": "h3",
            "text": "Błędnie a poprawnie"
          },
          {
            "kind": "p",
            "text": "Dane: [[b=4]] i [[c=5]]:"
          },
          {
            "kind": "p",
            "text": "Niepoprawnie: [[5/4=1.25]]. To odwrotność cosinusa, zwana secansem, a nie stosunek cosinusa."
          },
          {
            "kind": "p",
            "text": "Poprawnie: [[\\cos(A)=4/5=0.8]]."
          },
          {
            "kind": "p",
            "text": "Poprawny cosinus kąta ostrego zawsze mieści się między 0 a 1."
          }
        ],
        "steps": [
          "<strong>Użycie boku przeciwległego zamiast przyległego.</strong> Oblicza to [[a/c]], czyli sinus. Poprawka: wybór przyprostokątnej stykającej się z kątem [[A]].",
          "<strong>Odwrócenie ułamka do [[c/b]].</strong> Odpowiedź przekracza 1. Poprawka: dłuższy bok musi być mianownikiem.",
          "<strong>Mylenie cosinusa z sinusem.</strong> Podawanie 0.6 dla trójkąta 3-4-5. Poprawka: sinus korzysta z boku przeciwległego; cosinus z boku przyległego.",
          "<strong>Mylenie cosinusa z secansem.</strong> Obliczanie [[c/b]]. Poprawka: secans to odwrotność cosinusa, zawsze powyżej 1.",
          "<strong>Wprowadzenie boku przyległego dłuższego niż przeciwprostokątna.</strong> Dane opisują niemożliwy trójkąt. Poprawka: pole przeciwprostokątnej musi zawierać dłuższą długość.",
          "<strong>Wprowadzanie zerowych lub ujemnych długości boków.</strong> Dzielenie przez zero albo bezsensowny ujemny stosunek. Poprawka: używanie wyłącznie dodatnich długości.",
          "<strong>Mieszanie jednostek pomiaru.</strong> Centymetry dzielone przez metry zniekształcają stosunek 100-krotnie. Poprawka: najpierw przeliczenie obu boków na jedną jednostkę.",
          "<strong>Podawanie cosinusa jako kąta w stopniach.</strong> Zapisywanie 0.8 stopnia. Poprawka: stosunek to czysta liczba, nie kąt.",
          "<strong>Zakładanie, że stosunek cosinusa ma jednostki.</strong> Jednostki już się skróciły podczas dzielenia. Poprawka: usunięcie jednostki z odpowiedzi.",
          "<strong>Mylenie kąta odniesienia z drugim kątem ostrym.</strong> Oznaczenia boków przyległego i przeciwległego się zamieniają. Poprawka: najpierw oznaczenie kąta [[A]] na rysunku.",
          "<strong>Za wczesne zaokrąglanie.</strong> Zaokrąglenie [[12/13]] do 0.92 przed ponownym mnożeniem dodaje możliwy do uniknięcia błąd. Poprawka: zachowanie dodatkowych cyfr do ostatniego kroku.",
          "<strong>Zakładanie, że cosinus jest taki sam dla każdego trójkąta.</strong> Stosowanie jednej wartości do innego kształtu. Poprawka: cosinus zależy od proporcji trójkąta.",
          "<strong>Przekonanie, że stosunek bezpośrednio podaje kąt w stopniach.</strong> Odczytywanie 0.8 jako kąta. Poprawka: do odtworzenia stopni służy arcus cosinus.",
          "<strong>Odczytywanie cosinusa 0.8 jako 0.8 stopnia.</strong> Mylenie stosunku z kątem. Poprawka: 0.8 to stosunek; kąt wynosi około 36.87 stopnia.",
          "<strong>Nazywanie przyprostokątnej przed identyfikacją kąta odniesienia.</strong> Bok przyległy i przeciwległy się mieszają. Poprawka: ustalenie kąta [[A]] przed nazwaniem jakiejkolwiek przyprostokątnej."
        ],
        "listItems": [],
        "related": [],
        "tables": [],
        "figures": []
      },
      "cos-verify": {
        "h2": "Jak sprawdzić, czy wynik cosinusa jest poprawny",
        "blocks": [
          {
            "kind": "p",
            "text": "Poprawny, niezdegenerowany trójkąt prostokątny wymaga [[0 \\lt b \\lt c]], a zatem [[0 \\lt b/c \\lt 1]]. Oba pomiary muszą używać zgodnych jednostek, a wynik cosinusa musi być większy od 0 i mniejszy od 1. Wynik 1 lub większy zwykle wskazuje odwrócone dane wejściowe, błędną identyfikację boków albo niezgodne pomiary."
          },
          {
            "kind": "h3",
            "text": "Metoda 1: sprawdzenie stosunku"
          },
          {
            "kind": "p",
            "text": "Weryfikacja [[\\cos(A)=b/c]] bezpośrednio. Przy [[b=4]] i [[c=5]]: [[4/5=0.8]]."
          },
          {
            "kind": "h3",
            "text": "Metoda 2: sprawdzenie twierdzenia Pitagorasa"
          },
          {
            "kind": "p",
            "text": "Jeśli bok przeciwległy jest znany lub potrzebny, obliczenie [[a=\\sqrt{c^2-b^2}]]. Dla [[b=4]] i [[c=5]]: [[a=\\sqrt{25-16}=3]], a [[3^2+4^2=5^2]]. Potwierdza to wymiary trójkąta prostokątnego 3-4-5."
          },
          {
            "kind": "h3",
            "text": "Metoda 3: sprawdzenie za pomocą arcus cosinusa"
          },
          {
            "kind": "p",
            "text": "Jeśli stosunek wynosi 0.8: [[A=\\cos^{-1}(0.8)\\approx36.87^\\circ]]. Następnie weryfikacja zgodności kąta i stosunku boków. Drobne różnice mogą wynikać z zaokrągleń."
          }
        ],
        "steps": [],
        "listItems": [],
        "related": [],
        "tables": [],
        "figures": []
      },
      "cos-vs": {
        "h2": "Cosinus a sinus, tangens i secans",
        "blocks": [
          {
            "kind": "p",
            "text": "Każdy stosunek porównuje inną parę boków, przy tym samym kącie odniesienia i tych samych oznaczeniach boków:"
          }
        ],
        "steps": [],
        "listItems": [],
        "related": [],
        "tables": [
          {
            "headers": [
              "Stosunek",
              "Wzór",
              "Co porównuje"
            ],
            "rows": [
              [
                "Sinus",
                "sin(A) = a/c",
                "Bok przeciwległy do przeciwprostokątnej"
              ],
              [
                "Cosinus",
                "cos(A) = b/c",
                "Bok przyległy do przeciwprostokątnej"
              ],
              [
                "Tangens",
                "tan(A) = a/b",
                "Bok przeciwległy do boku przyległego"
              ],
              [
                "Secans",
                "sec(A) = c/b",
                "Przeciwprostokątna do boku przyległego"
              ],
              [
                "Cosecans",
                "csc(A) = c/a",
                "Przeciwprostokątna do boku przeciwległego"
              ],
              [
                "Cotangens",
                "cot(A) = b/a",
                "Bok przyległy do boku przeciwległego"
              ]
            ]
          }
        ],
        "figures": [],
        "closingParagraphs": [
          "Secans to odwrotność cosinusa: [[\\sec(A)=1/\\cos(A)]]. Jeśli [[\\cos(A)=0.8]], to [[\\sec(A)=1/0.8=1.25]]. Cosinus służy do wyznaczania boku przyległego lub rzutu poziomego, sinus do składowych pionowych, tangens, gdy nie występuje przeciwprostokątna, a secans, gdy wzór wymaga odwrotności.",
          "Sąsiednie stosunki: <a href=\"/sine-ratio-calculator/\" class=\"text-primary hover:underline\">Kalkulator stosunku sinusa</a>, <a href=\"/tangent-ratio-calculator/\" class=\"text-primary hover:underline\">Kalkulator stosunku tangensa</a>, <a href=\"/secant-ratio-calculator/\" class=\"text-primary hover:underline\">Kalkulator stosunku secansa</a> i <a href=\"/cosecant-ratio-calculator/\" class=\"text-primary hover:underline\">Kalkulator stosunku cosecansa</a>."
        ]
      },
      "cos-faq": {
        "h2": "Często zadawane pytania",
        "blocks": [],
        "steps": [],
        "listItems": [],
        "related": [],
        "tables": [],
        "figures": []
      },
      "cos-related": {
        "h2": "Powiązane kalkulatory trygonometryczne",
        "blocks": [],
        "steps": [],
        "listItems": [],
        "related": [
          {
            "name": "Kalkulator stosunku sinusa",
            "desc": "Dzieli bok przeciwległy przez przeciwprostokątną i zwraca stosunek sinusa kąta A."
          },
          {
            "name": "Kalkulator stosunku tangensa",
            "desc": "Dzieli bok przeciwległy przez bok przyległy i zwraca stosunek tangensa."
          },
          {
            "name": "Kalkulator stosunku secansa",
            "desc": "Dzieli przeciwprostokątną przez bok przyległy i zwraca odwrotność cosinusa."
          },
          {
            "name": "Kalkulator stosunku cosecansa",
            "desc": "Dzieli przeciwprostokątną przez bok przeciwległy i zwraca odwrotność sinusa."
          },
          {
            "name": "Kalkulator kąta trójkąta prostokątnego",
            "desc": "Wyznacza kąt ostry na podstawie boków lub znanego stosunku trygonometrycznego."
          },
          {
            "name": "Kalkulator boku trójkąta prostokątnego",
            "desc": "Oblicza brakujący bok na podstawie kąta i znanego boku trójkąta prostokątnego."
          }
        ],
        "tables": [],
        "figures": []
      }
    },
    "faqHeading": "Często zadawane pytania",
    "relatedHeading": "Powiązane kalkulatory trygonometryczne",
    "faqs": [
      {
        "question": "Jaki jest wzór na stosunek cosinusa w trójkącie prostokątnym?",
        "answer": "cos(A) = b / c: dzielenie boku przyległego do kąta A przez przeciwprostokątną. Dla boku przyległego o długości 4 cm i przeciwprostokątnej o długości 5 cm wynik to 4/5 = 0.8."
      },
      {
        "question": "Jak obliczyć cosinus z dwóch długości boków?",
        "answer": "Zmierzenie boku przyległego b i przeciwprostokątnej c w tej samej jednostce, sprawdzenie, czy c jest dłuższe od b, a następnie obliczenie cos(A) = b / c. Dla b = 12 m i c = 13 m odpowiedź to 12/13, czyli około 0.9231."
      },
      {
        "question": "Czym różni się cosinus od sinusa?",
        "answer": "Cosinus dzieli bok przyległy przez przeciwprostokątną (b/c); sinus dzieli bok przeciwległy przez przeciwprostokątną (a/c). W trójkącie 3-4-5 cos(A) = 0.8, a sin(A) = 0.6."
      },
      {
        "question": "Dlaczego cosinus kąta ostrego w trójkącie prostokątnym jest mniejszy od 1?",
        "answer": "Przeciwprostokątna to najdłuższy bok, więc b jest zawsze mniejsze od c. Dzielenie mniejszej liczby dodatniej przez większą daje wynik poniżej 1; oba boki są dodatnie, więc wynik pozostaje powyżej 0."
      },
      {
        "question": "Czy cosinus może być większy od 1 w poprawnym trójkącie prostokątnym?",
        "answer": "Nie. Cosinus powyżej 1 wymagałby boku przyległego dłuższego niż przeciwprostokątna, co jest niemożliwe w prawdziwym trójkącie prostokątnym. Jeśli narzędzie pokazuje 1 lub więcej, dane wejściowe są odwrócone, użyto niewłaściwej przyprostokątnej albo pomiary są ze sobą sprzeczne."
      },
      {
        "question": "Co oznacza wartość cosinusa 0.8?",
        "answer": "Bok przyległy stanowi 80 procent długości przeciwprostokątnej: 4 m / 5 m = 0.8. Liczba opisuje kształt trójkąta, nie kąt; odpowiadający kąt wynosi około 36.87 stopnia i znajduje się go za pomocą arcus cosinusa."
      },
      {
        "question": "Czy stosunek cosinusa ma jednostki?",
        "answer": "Nie. Oba boki mierzone są w tej samej jednostce, więc jednostki się skracają: 4 m / 5 m = 0.8 oraz 400 cm / 500 cm = 0.8. Cosinus należy podawać jako zwykłą liczbę bezwymiarową, nigdy z dołączonymi stopniami, metrami ani stopami."
      },
      {
        "question": "Jak znaleźć kąt na podstawie stosunku cosinusa?",
        "answer": "Za pomocą arcus cosinusa: A = cos^-1(stosunek). Dla 0.8: A = cos^-1(0.8), czyli około 36.87 stopnia. Kalkulator na tej stronie zwraca stosunek, nie kąt, dlatego kalkulator naukowy należy najpierw przełączyć w tryb stopni."
      },
      {
        "question": "Jak znaleźć bok przyległy za pomocą cosinusa?",
        "answer": "Przekształcenie wzoru do postaci b = c x cos(A). Pomnożenie przeciwprostokątnej przez cosinus kąta. Dla c = 10 m i kąta A = 60 stopni: cos(60 deg) = 0.5, więc b = 10 x 0.5 = 5 m."
      },
      {
        "question": "Czym różni się cosinus od secansa?",
        "answer": "Secans to odwrotność cosinusa: sec(A) = c / b, czyli 1 / cos(A). Cosinus daje wartość poniżej 1; secans odwraca ułamek, dając wartość powyżej 1. Jeśli cos(A) = 0.8, to sec(A) = 1.25."
      },
      {
        "question": "Czy cosinus można obliczyć bez znajomości boku przeciwległego?",
        "answer": "Tak. Cosinus wymaga tylko boku przyległego i przeciwprostokątnej; bok przeciwległy nie odgrywa roli w cos(A) = b/c, dlatego kalkulator nigdy o niego nie prosi."
      },
      {
        "question": "Jak stosować cosinus w pomiarach praktycznych?",
        "answer": "Cosinus służy do wyznaczania rzutów poziomych: odległości przy ziemi na podstawie długości drabiny, rozpiętości poziomej na podstawie długości krokwi albo poziomej składowej siły. Pomnożenie przeciwprostokątnej przez cos(A) daje bok przyległy, a sam stosunek pozwala sprawdzić, czy pomiary tworzą trójkąt prostokątny."
      }
    ],
    "conclusion": {
      "h2": "Pewne opanowanie stosunku cosinusa",
      "paragraphs": [
        "Cosinus to udział przeciwprostokątnej pokrywany przez bok przyległy: dzielenie [[b]] przez [[c]] opisuje kształt trójkąta. Wzór [[\\cos(A)=b/c]] wymaga tylko dwóch pomiarów, odpowiedź jest zawsze liczbą bezwymiarową między 0 a 1, a przekształcone formy [[b=c\\cos(A)]] i [[A=\\cos^{-1}(b/c)]] odtwarzają brakujący bok lub kąt. Drabina, krokiew czy podręcznikowy trójkąt 3-4-5, metoda nigdy się nie zmienia: identyfikacja boku przyległego, identyfikacja przeciwprostokątnej, dzielenie i weryfikacja."
      ]
    }
  }
};
