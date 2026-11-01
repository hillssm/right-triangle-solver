/**
 * tangentGuideTranslations.batch2.ts
 * Translations of the Tangent Ratio Calculator guide (TangentRatioGuide.astro)
 * Batch 2: Portuguese (pt), Bengali (bn), Japanese (ja), Korean (ko), Malay (ms), Polish (pl).
 *
 * Structure per language:
 * - tocHeading, tocItems (15 entries keyed by section id)
 * - sections (14 entries: 13 content sections + sec-related)
 *   Each section: h2, blocks (ordered {kind: 'p'|'h3', text}), steps,
 *   closingParagraphs, tables (plural, [{headers, rows}]), figures (plural,
 *   [{alt, caption}]), related ([{name, desc}]) on sec-related
 * - faqHeading, relatedHeading
 * - faqs (12 question/answer pairs)
 * - conclusion (h2, paragraphs)
 *
 * Formulas, KaTeX markup ([[...]] and [[[..]]]), variable names, numbers, and
 * degree values are preserved exactly as in the English source. URLs are never
 * translated. No em dashes. Alt texts stay under 125 characters.
 */

export const TANGENT_TRANSLATIONS_BATCH2 = {
  "pt": {
    "tocHeading": "Neste guia",
    "tocItems": {
      "sec-intro": "O que é uma calculadora de razão tangente?",
      "sec-triangle": "Entendendo o lado oposto e o lado adjacente",
      "sec-whatis": "Entendendo a razão tangente",
      "sec-formula": "Como funciona a fórmula da tangente",
      "sec-howto": "Como usar a calculadora de razão tangente",
      "sec-examples": "Exemplos passo a passo de cálculo da tangente",
      "sec-applications": "Exemplos reais do uso da razão tangente",
      "sec-angle": "Entendendo a relação entre tangente e tamanho do ângulo",
      "sec-side": "Como encontrar o lado oposto usando a tangente",
      "sec-recover": "Como encontrar um ângulo a partir de uma razão tangente",
      "sec-mistakes": "Erros comuns ao calcular a tangente",
      "sec-verify": "Como verificar se o resultado da tangente é válido",
      "sec-vs": "Tangente vs. seno, cosseno e cotangente",
      "sec-faq": "Perguntas frequentes",
      "sec-related": "Explore calculadoras trigonométricas relacionadas"
    },
    "sections": {
      "sec-intro": {
        "h2": "O que é uma calculadora de razão tangente?",
        "blocks": [
          {
            "kind": "p",
            "text": "Uma calculadora de razão tangente responde a uma pergunta: para um ângulo agudo em um triângulo retângulo, como o lado oposto ao ângulo se compara com o lado adjacente a ele? Digite o lado oposto e o lado adjacente, e a ferramenta divide o lado oposto pelo lado adjacente, retornando [[\\tan(A)=a/b]]. Um triângulo retângulo tem um lado oposto de 3 cm e um lado adjacente de 4 cm, de modo que [[\\tan(A)=3/4=0.75]]. Esse 0,75 é a razão tangente: ele diz que o lado oposto tem 75 por cento do comprimento do lado adjacente. Não é um ângulo, portanto nunca o leia como [[0.75^\\circ]]. A hipotenusa nunca entra neste cálculo; o lado oposto e o lado adjacente bastam por si só. A tangente é uma das razões trigonométricas fundamentais, e sua força particular é comparar a elevação vertical com o percurso horizontal, razão pela qual aparece em inclinações de telhado, declives de estrada e rampas. O resultado é um número adimensional: uma comparação pura de dois comprimentos, não uma medida em centímetros ou graus. Se o ângulo em graus é o que você precisa, a tangente inversa converte a razão em graus."
          }
        ],
        "steps": [],
        "closingParagraphs": [],
        "tables": [],
        "figures": []
      },
      "sec-triangle": {
        "h2": "Entendendo o lado oposto e o lado adjacente",
        "blocks": [
          { "kind": "h3", "text": "O que é um triângulo retângulo?" },
          {
            "kind": "p",
            "text": "Um triângulo retângulo tem um ângulo de exatamente [[90^\\circ]], o ângulo entre duas retas perpendiculares, como uma parede encontrando um piso nivelado. A hipotenusa fica oposta a esse ângulo reto e é sempre o lado mais longo, porque precisa atravessar a diagonal completa do canto. Os outros dois ângulos dividem os 90 graus restantes, de modo que ambos são agudos. Os dois catetos se encontram no ângulo reto, perpendiculares entre si, e é a relação deles com a hipotenusa que torna possível a trigonometria do triângulo retângulo."
          },
          { "kind": "h3", "text": "O que é o lado oposto?" },
          {
            "kind": "p",
            "text": "O lado oposto [[a]] é o lado diretamente em frente ao ângulo de referência [[A]], o único lado que nunca toca seu vértice. Em problemas práticos, ele costuma representar uma elevação vertical, uma diferença de altitude ou uma altura: a altura que uma escada alcança na parede, a elevação de um telhado ou a componente vertical da lança de um guindaste. Qual lado conta como oposto depende do ângulo de referência escolhido, de modo que mudar do ângulo [[A]] para o ângulo [[C]] troca os rótulos de oposto e adjacente. Ele aparece no numerador da fórmula da tangente porque a tangente mede o tamanho desse lado em frente ao ângulo em relação ao lado junto ao ângulo."
          },
          { "kind": "h3", "text": "O que é o lado adjacente?" },
          {
            "kind": "p",
            "text": "O lado adjacente [[b]] é o cateto que toca o ângulo de referência [[A]] sem ser a hipotenusa. Em problemas práticos, ele costuma representar um percurso horizontal ou uma distância no solo: a base de uma escada até a parede, o percurso horizontal de um telhado ou o comprimento da sombra em um problema de ângulo solar. Ele nunca é a hipotenusa, um ponto que vale a pena verificar sempre, porque a hipotenusa é o lado em frente ao ângulo reto. Ele aparece no denominador da fórmula da tangente, razão pela qual a tangente compara o lado oposto com esse cateto em vez de com o lado mais longo."
          },
          { "kind": "h3", "text": "O que é a hipotenusa?" },
          {
            "kind": "p",
            "text": "A hipotenusa [[c]] é o lado oposto ao ângulo reto: em qualquer diagrama, ela fica em frente ao pequeno quadrado que marca o canto de [[90^\\circ]], e é estritamente mais longa que qualquer cateto. Em problemas práticos, ela costuma representar um comprimento inclinado: uma escada, um caibro de telhado, um estai ou um tirante diagonal. Ela não é necessária para o cálculo principal da tangente, porque a fórmula da tangente compara os dois catetos diretamente. Se for necessária para outro problema, o teorema de Pitágoras a calcula a partir dos dois catetos: [[c=\\sqrt{a^2+b^2}]]."
          }
        ],
        "steps": [],
        "closingParagraphs": [
          "A tangente usa os dois catetos e não exige a hipotenusa. Mantenha esta convenção de rótulos consistente: [[a]] oposto ao ângulo [[A]], [[b]] adjacente ao ângulo [[A]] e [[c]] a hipotenusa oposta ao ângulo reto em [[B]]."
        ],
        "tables": [],
        "figures": [
          {
            "alt": "Triângulo retângulo com ângulo A no canto inferior esquerdo, lado oposto a dourado, lado adjacente b azul, tan(A)=a/b",
            "caption": "O ângulo A fica no canto inferior esquerdo; a tangente usa o lado oposto a dourado e o lado adjacente b azul, não a hipotenusa c."
          }
        ]
      },
      "sec-whatis": {
        "h2": "Entendendo a razão tangente",
        "blocks": [
          { "kind": "p", "text": "A tangente de um ângulo agudo [[A]] é o lado oposto dividido pelo lado adjacente:" },
          { "kind": "p", "text": "[[[\\boxed{\\tan(A)=\\frac{a}{b}}]]]" },
          {
            "kind": "p",
            "text": "Aqui [[\\tan(A)]] significa a tangente do ângulo [[A]], [[a]] é o lado oposto e [[b]] é o lado adjacente. Quando o triângulo está posicionado com sua base na direção horizontal, a tangente compara o cateto vertical com o cateto horizontal: elevação sobre percurso em sua forma mais pura."
          },
          { "kind": "h3", "text": "Entendendo SOH-CAH-TOA" },
          { "kind": "p", "text": "Os estudantes memorizam as três razões principais com um único recurso mnemônico:" },
          { "kind": "p", "text": "SOH: Seno = Oposto / Hipotenusa; CAH: Cosseno = Adjacente / Hipotenusa; TOA: Tangente = Oposto / Adjacente." },
          {
            "kind": "p",
            "text": "TOA corresponde à fórmula da tangente [[\\tan(A)=a/b]]: o T significa tangente, o O coloca o lado oposto em cima e o A coloca o lado adjacente embaixo. O recurso ajuda a escolher o numerador e o denominador corretos antes de qualquer número entrar no cálculo. Esta seção mantém o foco na tangente; as outras duas razões têm suas próprias páginas."
          },
          { "kind": "h3", "text": "Por que a tangente não usa a hipotenusa" },
          { "kind": "p", "text": "A tangente compara os dois catetos perpendiculares diretamente, de modo que a hipotenusa é desnecessária. Com [[a=3]] e [[b=4]]:" },
          { "kind": "p", "text": "[[\\tan(A)=\\frac{3}{4}=0.75]]" },
          {
            "kind": "p",
            "text": "A razão já captura tudo sobre como o lado oposto se compara com o lado adjacente; trazer a hipotenusa mudaria a pergunta que está sendo feita. Se a hipotenusa for necessária para um problema diferente, o teorema de Pitágoras a calcula a partir dos catetos. A tangente em si nunca a pede."
          },
          { "kind": "h3", "text": "Por que a tangente é uma razão adimensional" },
          { "kind": "p", "text": "Dividir um comprimento por outro cancela as unidades físicas. Com unidades compatíveis:" },
          { "kind": "p", "text": "[[\\frac{3\\,\\text{m}}{4\\,\\text{m}}=0.75]]" },
          {
            "kind": "p",
            "text": "Os metros se cancelam, restando um número simples. A mesma razão vem de 300 cm e 400 cm, porque a mudança de unidade afeta os dois lados igualmente. O único requisito é que as duas medidas usem unidades compatíveis: misturar metros com centímetros produz um número sem sentido, enquanto converter primeiro mantém a razão honesta."
          },
          { "kind": "h3", "text": "O que significa um valor de tangente de 0,75?" },
          {
            "kind": "p",
            "text": "[[\\tan(A)=0.75]] significa que o lado oposto é 0,75 vezes o lado adjacente, ou 75 unidades de elevação vertical para cada 100 unidades de percurso horizontal na mesma geometria retilínea. Imagine um telhado que sobe 75 cm para cada 100 cm de percurso horizontal: é exatamente isso que 0,75 descreve. Não significa que o ângulo seja [[0.75^\\circ]]; a razão e o ângulo são quantidades diferentes, e confundi-las é um dos erros mais comuns na trigonometria."
          },
          { "kind": "h3", "text": "O que significa um valor de tangente de 1?" },
          {
            "kind": "p",
            "text": "[[\\tan(A)=1]] significa [[a=b]]: os lados oposto e adjacente são iguais. Um triângulo retângulo isósceles tem dois catetos iguais e, como os dois ângulos agudos precisam dividir 90 graus igualmente, cada um é [[45^\\circ]]:"
          },
          { "kind": "p", "text": "[[A=45^\\circ]]" },
          {
            "kind": "p",
            "text": "Catetos iguais, ângulos agudos iguais, tangente exatamente 1. Este é o ponto de equilíbrio da escala da tangente: abaixo de 1 o triângulo é mais largo do que alto, acima de 1 é mais alto do que largo."
          },
          { "kind": "h3", "text": "Por que a tangente pode ser maior que 1" },
          {
            "kind": "p",
            "text": "Ao contrário do seno e do cosseno, a tangente não tem limite superior para ângulos agudos. Se o lado oposto superar o lado adjacente, a razão passa de 1 sem problema. Com [[a=6]] e [[b=3]]:"
          },
          { "kind": "p", "text": "[[\\tan(A)=\\frac{6}{3}=2]]" },
          {
            "kind": "p",
            "text": "O lado oposto tem o dobro do comprimento do lado adjacente. Um valor de tangente maior que 1 é matematicamente válido e não indica erro de calculadora; ele simplesmente descreve um triângulo íngreme, como uma escada alta encostada perto de uma parede."
          },
          { "kind": "h3", "text": "Como a tangente se relaciona com o seno e o cosseno" },
          { "kind": "p", "text": "Comece com as outras duas razões:" },
          { "kind": "p", "text": "[[\\sin(A)=\\frac{a}{c}]]" },
          { "kind": "p", "text": "[[\\cos(A)=\\frac{b}{c}]]" },
          { "kind": "p", "text": "Divida o seno pelo cosseno e a hipotenusa se cancela:" },
          { "kind": "p", "text": "[[[\\frac{\\sin(A)}{\\cos(A)}=\\frac{a/c}{b/c}=\\frac{a}{b}]]]" },
          { "kind": "p", "text": "Portanto:" },
          { "kind": "p", "text": "[[[\\boxed{\\tan(A)=\\frac{\\sin(A)}{\\cos(A)}}]]]" },
          {
            "kind": "p",
            "text": "Esta identidade concorda com a definição de oposto sobre adjacente e oferece uma verificação cruzada útil: qualquer resultado de tangente deve ser igual ao seno dividido pelo cosseno para o mesmo ângulo."
          }
        ],
        "steps": [],
        "closingParagraphs": [],
        "tables": [],
        "figures": [
          {
            "alt": "Três etapas: triângulo 3-4-5, fórmula da tangente tan(A)=a/b, resultado 0,75, o oposto é 75 por cento do adjacente",
            "caption": "Três etapas: rotule o triângulo 3-4-5, escreva tan(A) = a/b e divida 3 por 4 para obter 0,75."
          }
        ]
      },
      "sec-formula": {
        "h2": "Como funciona a fórmula da tangente",
        "blocks": [
          { "kind": "p", "text": "Comece com a definição:" },
          { "kind": "p", "text": "[[\\tan(A)=\\frac{\\text{Opposite}}{\\text{Adjacent}}]]" },
          { "kind": "p", "text": "Em seguida, use a notação desta página:" },
          { "kind": "p", "text": "[[[\\boxed{\\tan(A)=\\frac{a}{b}}]]]" },
          {
            "kind": "p",
            "text": "O lado oposto pertence ao numerador porque a tangente mede o tamanho do lado em frente ao ângulo; o lado adjacente pertence ao denominador porque é o lado contra o qual se compara. Inverta-os e você obtém a cotangente, uma razão totalmente diferente."
          },
          { "kind": "h3", "text": "Exemplo totalmente resolvido: um triângulo retângulo 3-4-5" },
          { "kind": "p", "text": "Dados um lado oposto de [[a=3\\,\\text{cm}]], um lado adjacente de [[b=4\\,\\text{cm}]] e uma hipotenusa de [[c=5\\,\\text{cm}]]:" },
          { "kind": "p", "text": "Passo 1: escreva a fórmula. [[\\tan(A)=a/b]]" },
          { "kind": "p", "text": "Passo 2: substitua os valores conhecidos. [[\\tan(A)=3/4]]" },
          { "kind": "p", "text": "Passo 3: divida. [[\\boxed{\\tan(A)=0.75}]]" },
          { "kind": "p", "text": "Passo 4: interprete o resultado. O lado oposto tem 75 por cento do comprimento do lado adjacente." },
          { "kind": "p", "text": "Passo 5: verifique o triângulo. [[3^2+4^2=5^2]], que é [[9+16=25]]. Os comprimentos dos lados são consistentes com um triângulo retângulo genuíno." },
          { "kind": "h3", "text": "Encontre o ângulo a partir da razão" },
          { "kind": "p", "text": "Se o próprio ângulo for necessário, aplique a tangente inversa à razão:" },
          { "kind": "p", "text": "[[A=\\tan^{-1}(0.75)]]" },
          { "kind": "p", "text": "[[\\boxed{A\\approx36.87^\\circ}]]" },
          {
            "kind": "p",
            "text": "A tangente inversa também é chamada de arco tangente. Calcular a razão tangente e calcular o ângulo são operações separadas: a razão descreve a forma do triângulo, enquanto a tangente inversa converte essa forma em graus. A calculadora de razão tangente desta página retorna a razão; recuperar o ângulo é uma etapa seguinte em uma calculadora científica."
          }
        ],
        "steps": [],
        "closingParagraphs": [],
        "tables": [],
        "figures": []
      },
      "sec-howto": {
        "h2": "Como usar a calculadora de razão tangente",
        "blocks": [
          {
            "kind": "p",
            "text": "O passo a passo abaixo corresponde à interface ativa nesta página. Cada etapa importa, porque um resultado de tangente só é tão confiável quanto as duas medidas por trás dele."
          }
        ],
        "steps": [
          "Identifique o ângulo de referência [[A]]. A tangente sempre trabalha a partir de um ângulo agudo; nomeá-lo primeiro fixa qual lado é oposto e qual é adjacente.",
          "Localize o lado oposto [[a]], diretamente em frente ao ângulo [[A]]. Este é o lado que nunca toca o vértice do ângulo.",
          "Localize o lado adjacente [[b]], que toca o ângulo [[A]] e não é a hipotenusa. Verifique novamente se você não pegou o lado inclinado por engano.",
          "Obtenha ou meça os dois comprimentos de lado. Uma trena, um desenho em escala ou uma especificação conhecida servem, desde que os números descrevam o mesmo triângulo.",
          "Digite o comprimento do lado oposto no primeiro campo de entrada. Este é o numerador da fração.",
          "Digite o comprimento do lado adjacente no segundo campo de entrada. Este é o denominador.",
          "Selecione unidades de medida compatíveis usando os seletores de unidade disponíveis. Ambas as entradas devem estar na mesma unidade, ou ser convertidas para uma antes de dividir.",
          "Confirme que ambas as medidas são positivas. Um lado zero ou negativo não pode pertencer a um triângulo real.",
          "Clique em Calcular tan(A). A ferramenta divide o lado oposto pelo lado adjacente.",
          "Leia a razão tangente resultante. A resposta é um número simples, sem graus e sem unidades de comprimento.",
          "Verifique se o resultado é menor, igual ou maior que 1. Abaixo de 1 significa que o triângulo é mais largo do que alto; exatamente 1 significa catetos iguais; acima de 1 significa que o lado oposto é mais longo.",
          "Use Redefinir quando quiser limpar as entradas e começar outro cálculo. Entradas novas merecem um começo novo, não números restantes do problema anterior."
        ],
        "closingParagraphs": [
          "A calculadora não exige a hipotenusa nem uma entrada de ângulo. Ela executa uma operação, a divisão [[a/b]], e a executa exatamente nos dois catetos que você identificar."
        ],
        "tables": [],
        "figures": []
      },
      "sec-examples": {
        "h2": "Exemplos passo a passo de cálculo da tangente",
        "blocks": [
          {
            "kind": "p",
            "text": "Quatro exemplos resolvidos desenvolvem a habilidade central antes das aplicações práticas. Cada um segue o mesmo ritmo: escreva a fórmula, substitua, divida, interprete."
          },
          { "kind": "h3", "text": "Exemplo 1: um triângulo retângulo 3-4-5" },
          { "kind": "p", "text": "Dados [[a=3\\,\\text{cm}]], [[b=4\\,\\text{cm}]] e [[c=5\\,\\text{cm}]]:" },
          { "kind": "p", "text": "[[\\tan(A)=\\frac{3}{4}]]" },
          { "kind": "p", "text": "[[\\boxed{\\tan(A)=0.75}]]" },
          {
            "kind": "p",
            "text": "O lado oposto tem 75 por cento do comprimento do lado adjacente. Como o lado oposto é o cateto mais curto aqui, a razão fica abaixo de 1, descrevendo um triângulo mais largo do que alto."
          },
          { "kind": "h3", "text": "Exemplo 2: um triângulo retângulo 5-12-13" },
          { "kind": "p", "text": "Dados um lado oposto de [[a=5\\,\\text{m}]], um lado adjacente de [[b=12\\,\\text{m}]] e uma hipotenusa de [[c=13\\,\\text{m}]]:" },
          { "kind": "p", "text": "[[\\tan(A)=\\frac{5}{12}]]" },
          { "kind": "p", "text": "[[\\boxed{\\tan(A)\\approx0.4167}]]" },
          {
            "kind": "p",
            "text": "O lado oposto tem aproximadamente 41,67 por cento do comprimento do lado adjacente. A terna 5-12-13 é outra terna pitagórica, de modo que [[5^2+12^2=13^2]] confirma um triângulo retângulo genuíno."
          },
          { "kind": "h3", "text": "Exemplo 3: um triângulo 45-45-90" },
          { "kind": "p", "text": "Dados um lado oposto de [[a=1\\,\\text{cm}]], um lado adjacente de [[b=1\\,\\text{cm}]] e uma hipotenusa de [[c=\\sqrt{2}\\,\\text{cm}]]:" },
          { "kind": "p", "text": "[[\\tan(45^\\circ)=\\frac{1}{1}]]" },
          { "kind": "p", "text": "[[\\boxed{\\tan(45^\\circ)=1}]]" },
          {
            "kind": "p",
            "text": "Catetos iguais produzem uma razão tangente de 1. Este é o ponto médio natural da escala da tangente e um valor que vale a pena memorizar: sempre que os dois catetos coincidem, os ângulos agudos são de 45 graus cada."
          },
          { "kind": "h3", "text": "Exemplo 4: um triângulo 30-60-90" },
          { "kind": "p", "text": "Para o ângulo de referência [[A=60^\\circ]], use um lado oposto de [[a=\\sqrt{3}\\,\\text{cm}]], um lado adjacente de [[b=1\\,\\text{cm}]] e uma hipotenusa de [[c=2\\,\\text{cm}]]:" },
          { "kind": "p", "text": "[[\\tan(60^\\circ)=\\frac{\\sqrt{3}}{1}]]" },
          { "kind": "p", "text": "[[\\boxed{\\tan(60^\\circ)\\approx1.7321}]]" },
          {
            "kind": "p",
            "text": "O lado oposto é mais longo que o lado adjacente, de modo que a razão excede 1, como deve ser para um ângulo de 60 graus. Compare com o ângulo complementar:"
          },
          { "kind": "p", "text": "[[\\tan(30^\\circ)=\\frac{1}{\\sqrt{3}}\\approx0.5774]]" },
          {
            "kind": "p",
            "text": "Ângulos agudos complementares têm valores de tangente recíprocos, porque trocar o ângulo de referência troca os rótulos de oposto e adjacente. [[0.5774 \\times 1.7321 \\approx 1]], o que confirma a relação recíproca."
          }
        ],
        "steps": [],
        "closingParagraphs": [],
        "tables": [],
        "figures": []
      },
      "sec-applications": {
        "h2": "Exemplos reais do uso da razão tangente",
        "blocks": [
          {
            "kind": "p",
            "text": "A tangente conquista seu lugar no mundo do trabalho porque muitos problemas reais são, na verdade, problemas disfarçados de elevação sobre percurso. Doze exemplos resolvidos mostram o padrão se repetindo em rampas, telhados, escadas e linhas de topografia."
          },
          { "kind": "h3", "text": "Exemplo 5: calculando a inclinação de uma rampa" },
          { "kind": "p", "text": "Uma rampa simplificada sobe 0,6 m em um percurso horizontal de 8 m. A elevação vertical é o lado oposto, [[a=0.6\\,\\text{m}]], e o percurso horizontal é o lado adjacente, [[b=8\\,\\text{m}]]:" },
          { "kind": "p", "text": "[[\\tan(A)=\\frac{0.6}{8}]]" },
          { "kind": "p", "text": "[[\\boxed{\\tan(A)=0.075}]]" },
          {
            "kind": "p",
            "text": "A declividade percentual é [[0.075 \\times 100\\%=7.5\\%]] e o ângulo é [[A=\\tan^{-1}(0.075)\\approx4.29^\\circ]]. A rampa sobe 7,5 unidades verticalmente para cada 100 unidades horizontalmente. O cálculo não estabelece acessibilidade nem conformidade com o código de construção."
          },
          { "kind": "h3", "text": "Exemplo 6: calculando a inclinação de um telhado" },
          { "kind": "p", "text": "Um telhado sobe 3 m em um percurso horizontal de 4 m. A elevação vertical é o lado oposto, [[a=3\\,\\text{m}]], e o percurso horizontal é o lado adjacente, [[b=4\\,\\text{m}]]:" },
          { "kind": "p", "text": "[[\\tan(A)=\\frac{3}{4}]]" },
          { "kind": "p", "text": "[[\\boxed{\\tan(A)=0.75}]]" },
          {
            "kind": "p",
            "text": "O telhado sobe 0,75 unidades para cada unidade horizontal, uma inclinação de 75 por cento, e o ângulo de inclinação é [[A=\\tan^{-1}(0.75)\\approx36.87^\\circ]]. A inclinação do telhado também é expressa como elevação sobre percurso em unidades tradicionais, como polegadas de elevação por 12 polegadas de percurso, que é a mesma razão com outra roupagem. Esta razão não constitui uma avaliação completa do projeto do telhado."
          },
          { "kind": "h3", "text": "Exemplo 7: encontrando o ângulo de uma escada" },
          { "kind": "p", "text": "Uma escada alcança 4 m de altura em uma parede, e sua base está a 3 m horizontalmente da parede. O ângulo [[A]] fica entre a escada e o solo. A altura vertical é o lado oposto, [[a=4\\,\\text{m}]], e a distância no solo é o lado adjacente, [[b=3\\,\\text{m}]]:" },
          { "kind": "p", "text": "[[\\tan(A)=\\frac{4}{3}]]" },
          { "kind": "p", "text": "[[\\boxed{\\tan(A)\\approx1.3333}]]" },
          {
            "kind": "p",
            "text": "O ângulo é [[A=\\tan^{-1}(4/3)\\approx53.13^\\circ]]. A altura vertical é maior que a distância horizontal, razão pela qual a razão excede 1. O exemplo explica a geometria e não estabelece se a escada está posicionada com segurança."
          },
          { "kind": "h3", "text": "Exemplo 8: estimando o ângulo de elevação até uma árvore" },
          { "kind": "p", "text": "Uma árvore tem 12 m de altura e sua sombra tem 9 m de comprimento em solo plano. Suponha que os raios do sol criem um modelo simplificado de triângulo retângulo. A altura da árvore é o lado oposto, [[a=12\\,\\text{m}]], e o comprimento da sombra é o lado adjacente, [[b=9\\,\\text{m}]]:" },
          { "kind": "p", "text": "[[\\tan(A)=\\frac{12}{9}]]" },
          { "kind": "p", "text": "[[\\boxed{\\tan(A)\\approx1.3333}]]" },
          {
            "kind": "p",
            "text": "A altura é aproximadamente 1,3333 vezes o comprimento da sombra, e o ângulo geométrico correspondente é de cerca de [[53.13^\\circ]]. O exemplo assume solo plano, árvore vertical e um modelo de sombra em linha reta."
          },
          { "kind": "h3", "text": "Exemplo 9: topografia de uma diferença de elevação" },
          { "kind": "p", "text": "Uma medição topográfica mostra uma diferença vertical de elevação de 15 m em uma distância horizontal de 20 m. A diferença de elevação é o lado oposto, [[a=15\\,\\text{m}]], e a distância horizontal é o lado adjacente, [[b=20\\,\\text{m}]]:" },
          { "kind": "p", "text": "[[\\tan(A)=\\frac{15}{20}]]" },
          { "kind": "p", "text": "[[\\boxed{\\tan(A)=0.75}]]" },
          {
            "kind": "p",
            "text": "A diferença de elevação é 0,75 vezes a separação horizontal, e o ângulo correspondente é de cerca de [[36.87^\\circ]]. A topografia real pode exigir ajustes de altura do instrumento, correções e medições adicionais além deste modelo simplificado."
          },
          { "kind": "h3", "text": "Exemplo 10: calculando a declividade percentual de uma estrada" },
          { "kind": "p", "text": "Um trecho simplificado de estrada sobe 1,2 m em uma distância horizontal de 24 m. A elevação vertical é o lado oposto, [[a=1.2\\,\\text{m}]], e o percurso horizontal é o lado adjacente, [[b=24\\,\\text{m}]]:" },
          { "kind": "p", "text": "[[\\tan(A)=\\frac{1.2}{24}]]" },
          { "kind": "p", "text": "[[\\boxed{\\tan(A)=0.05}]]" },
          {
            "kind": "p",
            "text": "A declividade percentual é [[0.05 \\times 100\\%=5\\%]] e o ângulo é [[A=\\tan^{-1}(0.05)\\approx2.86^\\circ]]. Uma declividade de 5 por cento não significa um ângulo de 5 graus; esta distinção é uma fonte comum de confusão, e os dois números nunca devem ser usados de forma intercambiável."
          },
          { "kind": "h3", "text": "Exemplo 11: calculando a inclinação de uma escadaria" },
          { "kind": "p", "text": "Uma escadaria simplificada tem uma elevação vertical total de 2,4 m e um percurso horizontal de 3,2 m. A elevação vertical é o lado oposto, [[a=2.4\\,\\text{m}]], e o percurso horizontal é o lado adjacente, [[b=3.2\\,\\text{m}]]:" },
          { "kind": "p", "text": "[[\\tan(A)=\\frac{2.4}{3.2}]]" },
          { "kind": "p", "text": "[[\\boxed{\\tan(A)=0.75}]]" },
          {
            "kind": "p",
            "text": "A elevação vertical é 75 por cento do percurso horizontal, e o ângulo é de cerca de [[36.87^\\circ]]. O cálculo não verifica as dimensões da escada, o conforto nem a conformidade com o código de construção."
          },
          { "kind": "h3", "text": "Exemplo 12: entendendo o ângulo de um estai" },
          { "kind": "p", "text": "Um estai se prende a um poste 12 m acima do solo, enquanto sua âncora no solo está a 5 m horizontalmente do poste. A altura de fixação é o lado oposto, [[a=12\\,\\text{m}]], e a distância no solo é o lado adjacente, [[b=5\\,\\text{m}]]:" },
          { "kind": "p", "text": "[[\\tan(A)=\\frac{12}{5}]]" },
          { "kind": "p", "text": "[[\\boxed{\\tan(A)=2.4}]]" },
          {
            "kind": "p",
            "text": "O ângulo é [[A=\\tan^{-1}(2.4)\\approx67.38^\\circ]]. A altura vertical é 2,4 vezes a distância horizontal da âncora, um estai íngreme por qualquer medida. A razão tangente não determina a tensão do estai, a resistência da âncora nem a segurança estrutural."
          },
          { "kind": "h3", "text": "Exemplo 13: calculando a direção da lança de um guindaste" },
          { "kind": "p", "text": "Uma lança simplificada de guindaste tem uma componente vertical de 8 m e uma projeção horizontal de 6 m. A componente vertical é o lado oposto, [[a=8\\,\\text{m}]], e a projeção horizontal é o lado adjacente, [[b=6\\,\\text{m}]]:" },
          { "kind": "p", "text": "[[\\tan(A)=\\frac{8}{6}]]" },
          { "kind": "p", "text": "[[\\boxed{\\tan(A)\\approx1.3333}]]" },
          {
            "kind": "p",
            "text": "O ângulo correspondente é de cerca de [[53.13^\\circ]]. A componente vertical é aproximadamente 1,3333 vezes a projeção horizontal. Este é um exemplo geométrico simplificado e não estabelece a capacidade do guindaste nem a segurança operacional."
          },
          { "kind": "h3", "text": "Exemplo 14: estimando o gradiente de uma trilha" },
          { "kind": "p", "text": "Um trecho retilíneo simplificado de trilha tem um ganho vertical de elevação de 120 m e uma distância horizontal de 800 m. O ganho de elevação é o lado oposto, [[a=120\\,\\text{m}]], e a distância horizontal é o lado adjacente, [[b=800\\,\\text{m}]]:" },
          { "kind": "p", "text": "[[\\tan(A)=\\frac{120}{800}]]" },
          { "kind": "p", "text": "[[\\boxed{\\tan(A)=0.15}]]" },
          {
            "kind": "p",
            "text": "A declividade percentual é de 15 por cento, e o ângulo correspondente é de cerca de [[8.53^\\circ]]. Este modelo simplificado representa um gradiente constante em linha reta, não uma trilha sinuosa inteira."
          },
          { "kind": "h3", "text": "Exemplo 15: avaliando um tirante mecânico" },
          { "kind": "p", "text": "Um tirante mecânico diagonal tem uma componente vertical de 1,5 m e uma componente horizontal de 2 m. A componente vertical é o lado oposto, [[a=1.5\\,\\text{m}]], e a componente horizontal é o lado adjacente, [[b=2\\,\\text{m}]]:" },
          { "kind": "p", "text": "[[\\tan(A)=\\frac{1.5}{2}]]" },
          { "kind": "p", "text": "[[\\boxed{\\tan(A)=0.75}]]" },
          {
            "kind": "p",
            "text": "A componente vertical é 75 por cento da componente horizontal. A razão não determina a resistência do tirante, a capacidade de carga nem a adequação."
          },
          { "kind": "h3", "text": "Exemplo 16: encontrando o ângulo de elevação até um edifício" },
          { "kind": "p", "text": "Um observador está a 24 m horizontalmente de um edifício. O topo do edifício está 18 m acima do nível dos olhos do observador. A diferença vertical é o lado oposto, [[a=18\\,\\text{m}]], e a distância horizontal é o lado adjacente, [[b=24\\,\\text{m}]]:" },
          { "kind": "p", "text": "[[\\tan(A)=\\frac{18}{24}]]" },
          { "kind": "p", "text": "[[\\boxed{\\tan(A)=0.75}]]" },
          {
            "kind": "p",
            "text": "O ângulo de elevação é de cerca de [[36.87^\\circ]] sob a geometria simplificada. Este é o ângulo até o topo em relação ao nível horizontal dos olhos do observador, não necessariamente a altura total do edifício."
          }
        ],
        "steps": [],
        "closingParagraphs": [
          "A tangente é uma razão adimensional, mas seu valor prático vem de comparar a elevação vertical com o percurso horizontal, descrever a inclinação de uma rampa reta, calcular ângulos de elevação e resolver lados ausentes quando o ângulo é conhecido. Três quantidades relacionadas são fáceis de confundir, então mantenha-as claras: a razão tangente é a elevação vertical dividida pelo percurso horizontal; a declividade percentual é a razão tangente multiplicada por 100 por cento; o ângulo é o resultado de aplicar a tangente inversa à razão. A tangente sozinha nunca determina segurança estrutural, capacidade de carga, acessibilidade ou conformidade de engenharia."
        ],
        "tables": [
          {
            "headers": ["Situação", "Oposto [[a]]", "Adjacente [[b]]", "Fórmula", "Razão", "Declive", "Significado"],
            "rows": [
              ["Rampa", "0.6 m", "8 m", "0.6/8", "0.075", "7.5%", "Inclinação suave, sobe 7,5 por 100 de percurso"],
              ["Inclinação de telhado", "3 m", "4 m", "3/4", "0.75", "75%", "A elevação é 75% do percurso"],
              ["Escada", "4 m", "3 m", "4/3", "1.3333", "n/a", "A altura excede a distância da base, ângulo 53,13 graus"],
              ["Elevação da árvore", "12 m", "9 m", "12/9", "1.3333", "n/a", "A altura é 1,3333 vezes o comprimento da sombra"],
              ["Topografia", "15 m", "20 m", "15/20", "0.75", "75%", "A elevação é 75% da distância horizontal"],
              ["Declive de estrada", "1.2 m", "24 m", "1.2/24", "0.05", "5%", "Declive de 5%, não um ângulo de 5 graus"],
              ["Escadaria", "2.4 m", "3.2 m", "2.4/3.2", "0.75", "75%", "A elevação é 75% do percurso"],
              ["Estai", "12 m", "5 m", "12/5", "2.4", "n/a", "Estai íngreme, ângulo 67,38 graus"],
              ["Lança de guindaste", "8 m", "6 m", "8/6", "1.3333", "n/a", "A vertical é 1,3333 vezes a horizontal"],
              ["Trilha", "120 m", "800 m", "120/800", "0.15", "15%", "Gradiente constante de 15%"],
              ["Tirante mecânico", "1.5 m", "2 m", "1.5/2", "0.75", "n/a", "A vertical é 75% da horizontal"],
              ["Elevação do edifício", "18 m", "24 m", "18/24", "0.75", "n/a", "Ângulo de elevação 36,87 graus"]
            ]
          }
        ],
        "figures": [
          {
            "alt": "Quatro painéis: rampa 0,075, telhado 0,75, escada 1,3333, topografia 0,75, cada um com triângulo rotulado",
            "caption": "Quatro cálculos práticos: rampa, inclinação de telhado, escada e topografia, cada um com seu triângulo, fórmula e razão."
          }
        ]
      },
      "sec-angle": {
        "h2": "Entendendo a relação entre tangente e tamanho do ângulo",
        "blocks": [
          {
            "kind": "p",
            "text": "A tangente aumenta à medida que o ângulo de referência aumenta, e a geometria explica o porquê. Quando o ângulo [[A]] é pequeno, o lado oposto é curto em relação ao lado adjacente, de modo que a razão fica perto de 0. À medida que o ângulo se abre, o lado oposto passa a representar uma parcela maior do lado adjacente, e a razão sobe: passa de 1 em [[45^\\circ]] e então cresce sem limite à medida que o ângulo se aproxima de [[90^\\circ]]. A tabela abaixo usa comprimentos de lado ilustrativos; a razão, não o tamanho absoluto do triângulo, determina o ângulo."
          }
        ],
        "steps": [],
        "closingParagraphs": [
          "O padrão é simples: a tangente é pequena quando o lado oposto é curto em relação ao lado adjacente, é igual a 1 em [[45^\\circ]], excede 1 para ângulos agudos maiores, aproxima-se de zero à medida que o ângulo se aproxima de [[0^\\circ]] e cresce sem limite à medida que o ângulo se aproxima de [[90^\\circ]]. Triângulos com o mesmo ângulo têm a mesma razão tangente mesmo quando seus comprimentos de lado diferem, porque a razão captura a forma, não o tamanho."
        ],
        "tables": [
          {
            "headers": ["Ângulo [[A]]", "Lado oposto [[a]]", "Lado adjacente [[b]]", "Razão tangente"],
            "rows": [
              ["[[30^\\circ]]", "1", "[[\\sqrt{3}]]", "Aproximadamente 0,5774"],
              ["[[45^\\circ]]", "1", "1", "1"],
              ["[[60^\\circ]]", "[[\\sqrt{3}]]", "1", "Aproximadamente 1,7321"],
              ["[[75^\\circ]]", "Aproximadamente 3,7321", "1", "Aproximadamente 3,7321"]
            ]
          }
        ],
        "figures": [
          {
            "alt": "Três triângulos em 30, 45 e 60 graus com valores de tangente 0,5774, 1 e 1,7321; a tangente cresce com o ângulo",
            "caption": "À medida que o ângulo A cresce, o lado oposto passa a representar uma parcela maior do lado adjacente, de modo que tan(A) aumenta."
          }
        ]
      },
      "sec-side": {
        "h2": "Como encontrar o lado oposto usando a tangente",
        "blocks": [
          { "kind": "p", "text": "A fórmula da tangente pode ser rearranjada para encontrar o lado oposto quando o lado adjacente e o ângulo são conhecidos. Comece com [[\\tan(A)=a/b]] e multiplique os dois lados por [[b]]:" },
          { "kind": "p", "text": "[[[\\boxed{a=b\\tan(A)}]]]" },
          { "kind": "p", "text": "O lado oposto é igual ao lado adjacente multiplicado pela tangente do ângulo. Dados um lado adjacente de [[b=10\\,\\text{m}]] e um ângulo de [[A=30^\\circ]], e sabendo que [[\\tan(30^\\circ)=1/\\sqrt{3}\\approx0.5774]]:" },
          { "kind": "p", "text": "[[a=10\\times0.5774]]" },
          { "kind": "p", "text": "[[\\boxed{a\\approx5.774\\,\\text{m}}]]" },
          { "kind": "p", "text": "A elevação vertical é de aproximadamente 5,774 m para um percurso horizontal de 10 m neste ângulo." },
          { "kind": "p", "text": "O lado adjacente pode ser encontrado da mesma forma rearranjando novamente:" },
          { "kind": "p", "text": "[[[\\boxed{b=\\frac{a}{\\tan(A)}}]]]" },
          { "kind": "p", "text": "Com um lado oposto de [[a=6\\,\\text{m}]] e [[A=45^\\circ]]: como [[\\tan(45^\\circ)=1]], [[b=6/1]], então [[\\boxed{b=6\\,\\text{m}}]]. Estes são rearranjos matemáticos da mesma fórmula. A calculadora desta página retorna a razão tangente a partir dos comprimentos dos lados; ela não calcula diretamente lados ausentes." }
        ],
        "steps": [],
        "closingParagraphs": [],
        "tables": [],
        "figures": []
      },
      "sec-recover": {
        "h2": "Como encontrar um ângulo a partir de uma razão tangente",
        "blocks": [
          { "kind": "p", "text": "A razão tangente e o ângulo são quantidades diferentes: uma é uma comparação adimensional de lados, a outra é medida em graus. Quando a razão é conhecida e o ângulo é necessário, a tangente inversa pode ser usada:" },
          { "kind": "p", "text": "[[[\\boxed{A=\\tan^{-1}\\left(\\frac{a}{b}\\right)}]]]" },
          { "kind": "p", "text": "A tangente inversa também é chamada de arco tangente. Dado [[\\tan(A)=0.75]]:" },
          { "kind": "p", "text": "[[A=\\tan^{-1}(0.75)]]" },
          { "kind": "p", "text": "[[\\boxed{A\\approx36.87^\\circ}]]" },
          { "kind": "p", "text": "O ângulo é de aproximadamente [[36.87^\\circ]] quando a calculadora está configurada para graus." },
          { "kind": "h3", "text": "Por que o modo de ângulo da calculadora importa" },
          { "kind": "p", "text": "Os ângulos podem ser medidos em graus ou radianos, e uma calculadora científica precisa estar configurada para o modo pretendido antes de aplicar a tangente inversa. Um círculo completo tem 360 graus ou [[2\\pi]] radianos, de modo que [[45^\\circ=\\pi/4]] radianos. A razão tangente em si não tem unidades de grau nem de radiano; essas unidades se aplicam ao ângulo recuperado a partir dela. A calculadora de razão tangente desta página retorna a razão diretamente e não retorna um ângulo." }
        ],
        "steps": [],
        "closingParagraphs": [],
        "tables": [],
        "figures": []
      },
      "sec-mistakes": {
        "h2": "Erros comuns ao calcular a tangente",
        "blocks": [
          {
            "kind": "p",
            "text": "A maioria dos erros de tangente vem de uma fração invertida, um lado mal rotulado ou da confusão entre a razão e o ângulo. Percorra esta lista antes de confiar em um resultado."
          }
        ],
        "steps": [
          "Inverter a fórmula e calcular [[b/a]] em vez de [[a/b]]. Isso retorna a cotangente, não a tangente. Com [[a=3]] e [[b=4]], a fração invertida dá 1,3333; a correta dá 0,75.",
          "Confundir tangente com seno. A tangente divide o lado oposto pelo lado adjacente; o seno divide o lado oposto pela hipotenusa. Se a hipotenusa estiver no denominador, a resposta é seno, não tangente.",
          "Confundir tangente com cosseno. O cosseno divide o lado adjacente pela hipotenusa. A tangente nunca usa a hipotenusa, de modo que uma hipotenusa em qualquer posição indica a razão errada.",
          "Confundir tangente com cotangente. A cotangente é o recíproco, adjacente sobre oposto. Os nomes semelhantes causam erros reais, mas a ordem da fração é exatamente invertida.",
          "Incluir a hipotenusa na fórmula principal da tangente. A hipotenusa não tem papel em [[a/b]]. Se ela aparecer no cálculo, a fórmula errada foi usada.",
          "Trocar os lados oposto e adjacente. Ambos são catetos, então os rótulos são fáceis de inverter. Trace sempre a partir do ângulo de referência: em frente a ele é oposto, tocando-o é adjacente.",
          "Identificar os lados em relação ao ângulo de referência errado. Mudar do ângulo [[A]] para o ângulo [[C]] troca os rótulos de oposto e adjacente, o que inverte a razão para seu recíproco.",
          "Supor que a tangente deva ser menor que 1. Essa regra pertence ao seno e ao cosseno. A tangente não tem limite superior para ângulos agudos, e um resultado acima de 1 é perfeitamente válido.",
          "Relatar a razão tangente como um ângulo em graus. Um resultado de 0,75 é uma razão, não [[0.75^\\circ]]. Tratá-lo como graus alimenta absurdos em qualquer cálculo seguinte.",
          "Relatar a razão tangente com unidades de medida. As unidades se cancelam na divisão, então \"0,75 m\" está errado. Escreva o número simples e mantenha as unidades nas medidas de entrada, onde pertencem.",
          "Inserir comprimentos de lado zero ou negativos. Um triângulo não pode ter um lado zero ou negativo, de modo que essas entradas sinalizam um erro de digitação ou uma medida ausente, não um caso limite válido.",
          "Misturar unidades de medida incompatíveis. Um lado oposto de 3 m com um lado adjacente de 40 cm dá 7,5, um número sem sentido. Converta para uma única unidade primeiro: 3 m e 4 m dão o 0,75 correto.",
          "Arredondar cedo demais. Arredondar uma divisão intermediária para duas casas decimais e continuar o cálculo agrava o erro. Mantenha a precisão total em cada etapa e arredonde apenas a resposta final.",
          "Confundir declividade percentual com ângulo em graus. Uma declividade de 5 por cento vem de uma tangente de 0,05, mas o ângulo é [[\\tan^{-1}(0.05)\\approx2.86^\\circ]], não 5 graus. Declive e ângulo são quantidades diferentes.",
          "Supor que a razão tangente determina o tamanho absoluto de um triângulo. A tangente descreve a forma, não o tamanho: infinitos triângulos compartilham uma tangente de 0,75, de um lado oposto de 3 cm a um de 3 km. A razão fixa as proporções; os comprimentos reais exigem pelo menos uma medida de lado."
        ],
        "closingParagraphs": [
          "Errado versus correto: uma comparação resolvida. Dado um lado oposto de [[a=3]] e um lado adjacente de [[b=4]]:",
          "Incorreto: [[4/3\\approx1.3333]]. Esta é a razão cotangente para o ângulo [[A]], não a razão tangente. O numerador e o denominador estão invertidos.",
          "Correto: [[\\tan(A)=3/4=0.75]].",
          "Verifique usando seno e cosseno: com [[c=5]], [[\\sin(A)=3/5=0.6]] e [[\\cos(A)=4/5=0.8]]. Portanto [[\\sin(A)/\\cos(A)=0.6/0.8=0.75]], o que confirma o cálculo da tangente."
        ],
        "tables": [],
        "figures": []
      },
      "sec-verify": {
        "h2": "Como verificar se o resultado da tangente é válido",
        "blocks": [
          { "kind": "p", "text": "Um triângulo retângulo válido e não degenerado exige dois catetos positivos, [[a \\gt 0]] e [[b \\gt 0]], medidos em unidades compatíveis, de modo que o resultado da tangente deve ser positivo:" },
          { "kind": "p", "text": "[[[\\boxed{\\tan(A)=\\frac{a}{b} \\gt 0}]]]" },
          { "kind": "p", "text": "Não há exigência de que o lado oposto seja mais curto que o lado adjacente, de modo que o resultado pode ficar abaixo, em ou acima de 1. Um resultado zero ou negativo geralmente indica entradas inválidas ou rótulos invertidos." },
          { "kind": "h3", "text": "Método 1: verifique a razão" },
          { "kind": "p", "text": "Verifique novamente [[\\tan(A)=a/b]] diretamente. Com [[a=3]] e [[b=4]]: [[\\tan(A)=3/4=0.75]]. Como o lado oposto é mais curto que o lado adjacente, a razão deve ficar abaixo de 1; se um segundo cálculo manual discordar, um lado foi mal rotulado ou uma unidade foi misturada." },
          { "kind": "h3", "text": "Método 2: verifique o teorema de Pitágoras" },
          { "kind": "p", "text": "Calcule a hipotenusa quando necessário: [[c=\\sqrt{a^2+b^2}]]. Para [[a=3]] e [[b=4]]: [[c=\\sqrt{9+16}=5]], e [[3^2+4^2=5^2]]. Isso confirma as dimensões do triângulo retângulo 3-4-5. A hipotenusa é um valor de verificação aqui, não parte da fórmula principal da tangente." },
          { "kind": "h3", "text": "Método 3: verifique usando a tangente inversa" },
          { "kind": "p", "text": "Para uma razão tangente de 0,75: [[A=\\tan^{-1}(0.75)\\approx36.87^\\circ]]. Como a razão fica abaixo de 1, o ângulo deve ficar abaixo de [[45^\\circ]]; se não ficar, os rótulos dos lados provavelmente estão trocados. Pequenas diferenças podem surgir do arredondamento." }
        ],
        "steps": [],
        "closingParagraphs": [],
        "tables": [],
        "figures": []
      },
      "sec-vs": {
        "h2": "Tangente vs. seno, cosseno e cotangente",
        "blocks": [
          {
            "kind": "p",
            "text": "Cada razão compara um par diferente de lados, usando o mesmo ângulo de referência e os mesmos rótulos de lado:"
          }
        ],
        "steps": [],
        "closingParagraphs": [
          "A tangente e a cotangente são o par recíproco: [[\\cot(A)=1/\\tan(A)]]. Se [[\\tan(A)=0.75]], então [[\\cot(A)\\approx1.3333]]. Use a tangente quando os dois catetos forem conhecidos ou quando um problema envolver elevação sobre percurso; use o seno ou o cosseno quando a hipotenusa entrar no trabalho, e a cotangente quando a comparação correr no sentido oposto. Mantenha a tangente no centro: as razões vizinhas têm suas próprias páginas com tratamentos completos.",
          "Para as razões vizinhas, veja a <a href=\"/sine-ratio-calculator/\" class=\"text-primary hover:underline\">Calculadora de Razão Seno</a>, a <a href=\"/cosine-ratio-calculator/\" class=\"text-primary hover:underline\">Calculadora de Razão Cosseno</a>, a <a href=\"/cotangent-ratio-calculator/\" class=\"text-primary hover:underline\">Calculadora de Razão Cotangente</a>, a <a href=\"/secant-ratio-calculator/\" class=\"text-primary hover:underline\">Calculadora de Razão Secante</a> e a <a href=\"/cosecant-ratio-calculator/\" class=\"text-primary hover:underline\">Calculadora de Razão Cossecante</a>."
        ],
        "tables": [
          {
            "headers": ["Razão", "Fórmula", "O que ela compara"],
            "rows": [
              ["Seno", "sin(A) = a/c", "Lado oposto com a hipotenusa"],
              ["Cosseno", "cos(A) = b/c", "Lado adjacente com a hipotenusa"],
              ["Tangente", "tan(A) = a/b", "Lado oposto com o lado adjacente"],
              ["Cossecante", "csc(A) = c/a", "Hipotenusa com o lado oposto"],
              ["Secante", "sec(A) = c/b", "Hipotenusa com o lado adjacente"],
              ["Cotangente", "cot(A) = b/a", "Lado adjacente com o lado oposto"]
            ]
          }
        ],
        "figures": []
      },
      "sec-related": {
        "h2": "Explore calculadoras trigonométricas relacionadas",
        "blocks": [],
        "steps": [],
        "closingParagraphs": [],
        "related": [
          { "name": "Calculadora de Razão Seno", "desc": "Calcule o seno de um ângulo a partir dos lados oposto e hipotenusa." },
          { "name": "Calculadora de Razão Cosseno", "desc": "Calcule o cosseno de um ângulo a partir dos lados adjacente e hipotenusa." },
          { "name": "Calculadora de Razão Cotangente", "desc": "Calcule a cotangente, o recíproco da tangente, a partir dos dois catetos." },
          { "name": "Calculadora de Razão Secante", "desc": "Calcule a secante de um ângulo a partir da hipotenusa e do lado adjacente." },
          { "name": "Calculadora de Razão Cossecante", "desc": "Calcule a cossecante de um ângulo a partir da hipotenusa e do lado oposto." },
          { "name": "Calculadora de Ângulo de Triângulo Retângulo", "desc": "Encontre um ângulo desconhecido de um triângulo retângulo a partir dos lados conhecidos." },
          { "name": "Calculadora de Lado de Triângulo Retângulo", "desc": "Encontre um lado desconhecido de um triângulo retângulo a partir do ângulo e de um lado conhecido." }
        ],
        "tables": [],
        "figures": []
      }
    },
    "faqs": [
      {
        "question": "Qual é a fórmula da razão tangente para um triângulo retângulo?",
        "answer": "tan(A) = a / b: divida o lado oposto a pelo lado adjacente b. Com um lado oposto de 3 cm e um lado adjacente de 4 cm, o resultado é 3/4 = 0,75. Esse decimal é a resposta completa, uma razão adimensional, não um ângulo."
      },
      {
        "question": "Como calcular a tangente a partir de dois comprimentos de lado?",
        "answer": "Identifique o ângulo de referência A, meça o lado oposto a e o lado adjacente b na mesma unidade, confirme que ambos são positivos e depois divida: tan(A) = a / b. Nesta página, digite o lado oposto no primeiro campo e o lado adjacente no segundo, e clique em Calcular tan(A)."
      },
      {
        "question": "Por que a tangente não usa a hipotenusa?",
        "answer": "A tangente compara os dois catetos perpendiculares diretamente: vertical contra horizontal. A hipotenusa não acrescenta nenhuma informação nova a essa comparação, de modo que a fórmula principal precisa apenas dos lados oposto e adjacente. O teorema de Pitágoras pode recuperar a hipotenusa depois, se outro cálculo precisar dela."
      },
      {
        "question": "A tangente pode ser maior que 1?",
        "answer": "Sim. A tangente não tem limite superior para ângulos agudos. Quando o lado oposto é mais longo que o lado adjacente, a razão excede 1: com a = 6 e b = 3, tan(A) = 6/3 = 2. Um resultado acima de 1 é matematicamente válido e não indica erro de calculadora."
      },
      {
        "question": "O que significa um valor de tangente de 0,75?",
        "answer": "O lado oposto é 75 por cento do lado adjacente. Em um triângulo 3-4-5, o lado em frente ao ângulo A tem 3 unidades enquanto o lado junto ao ângulo A tem 4 unidades, de modo que tan(A) = 3/4 = 0,75. Ele descreve a forma do triângulo e não é um ângulo de 0,75 graus."
      },
      {
        "question": "Qual é a diferença entre tangente e cotangente?",
        "answer": "Elas são recíprocas. A tangente divide o lado oposto pelo lado adjacente (a/b); a cotangente divide o lado adjacente pelo lado oposto (b/a). Se tan(A) = 0,75, então cot(A) = 1/0,75, cerca de 1,3333. A ordem da fração é exatamente invertida."
      },
      {
        "question": "Como posso calcular um ângulo a partir de uma razão tangente?",
        "answer": "Aplique a tangente inversa à razão: A = tan^-1(a/b). Para tan(A) = 0,75, A = tan^-1(0,75), cerca de 36,87 graus. Configure sua calculadora científica para o modo de graus primeiro. A calculadora desta página retorna a razão, não o ângulo."
      },
      {
        "question": "Como posso encontrar o lado oposto usando a tangente?",
        "answer": "Rearranje a fórmula para a = b * tan(A). Se o lado adjacente for 10 m e o ângulo A for 30 graus, tan(30°) é cerca de 0,5774, então a = 10 * 0,5774, cerca de 5,774 m. Este é um rearranjo manual; a calculadora desta página retorna a razão a partir dos comprimentos dos lados, não lados ausentes."
      },
      {
        "question": "Como posso encontrar o lado adjacente usando a tangente?",
        "answer": "Rearranje a fórmula para b = a / tan(A). Se o lado oposto for 6 m e o ângulo A for 45 graus, tan(45°) = 1, então b = 6/1 = 6 m. Este é um rearranjo matemático da mesma fórmula, não um modo separado da calculadora desta página."
      },
      {
        "question": "A tangente é o mesmo que inclinação?",
        "answer": "Elas estão intimamente relacionadas. A inclinação como elevação sobre percurso é a mesma comparação que a tangente faz: mudança vertical dividida pela mudança horizontal. Um engenheiro rodoviário que escreve inclinação 0,05 e um estudante de trigonometria que escreve tan(A) = 0,05 estão descrevendo a mesma razão. Os termos diferem pelo contexto, não pela matemática."
      },
      {
        "question": "Qual é a diferença entre declividade percentual e ângulo em graus?",
        "answer": "A declividade percentual é 100 vezes a razão tangente: uma tangente de 0,05 dá uma declividade de 5%. O ângulo é a tangente inversa da razão: tan^-1(0,05) é cerca de 2,86 graus. Uma declividade de 5% portanto não é um ângulo de 5 graus. Confundir os dois é um dos erros mais comuns com a tangente."
      },
      {
        "question": "Como a tangente é usada na construção e na topografia?",
        "answer": "A tangente compara a elevação vertical com o percurso horizontal, que é exatamente o que a inclinação de telhados, o declive de rampas, o grau de estradas e a inclinação de escadas descrevem. Os topógrafos a usam para transformar uma diferença de elevação e uma distância horizontal em um ângulo de elevação. Em todos os casos, a razão sozinha nunca certifica segurança estrutural nem conformidade com códigos."
      }
    ],
    "faqHeading": "Perguntas frequentes",
    "relatedHeading": "Explore calculadoras trigonométricas relacionadas",
    "conclusion": {
      "h2": "Use a razão tangente com confiança",
      "paragraphs": [
        "A tangente é a razão dos dois catetos: divida o lado oposto pelo lado adjacente e você terá descrito quantas unidades de elevação vertical vêm com cada unidade de percurso horizontal. A fórmula [[\\tan(A)=a/b]] precisa de apenas duas medidas, a resposta é sempre um número adimensional que pode ficar abaixo, em ou acima de 1, e ela cresce à medida que o ângulo de referência cresce. Quando um lado ausente for necessário, [[a=b\\tan(A)]] recupera o lado oposto; quando o ângulo for necessário, [[A=\\tan^{-1}(a/b)]] o recupera. Rampa, telhado, escada ou o clássico 3-4-5, o método nunca muda: identifique o lado oposto, identifique o lado adjacente, divida e verifique com a checagem da razão positiva."
      ]
    }
  }
,
  "bn": {
    "tocHeading": "এই গাইডে",
    "tocItems": {
      "sec-intro": "ট্যানজেন্ট অনুপাত ক্যালকুলেটর কী?",
      "sec-triangle": "বিপরীত বাহু ও সন্নিহিত বাহু বোঝা",
      "sec-whatis": "ট্যানজেন্ট অনুপাত বোঝা",
      "sec-formula": "ট্যানজেন্ট সূত্র কীভাবে কাজ করে",
      "sec-howto": "ট্যানজেন্ট অনুপাত ক্যালকুলেটর কীভাবে ব্যবহার করবেন",
      "sec-examples": "ট্যানজেন্ট গণনার ধাপে ধাপে উদাহরণ",
      "sec-applications": "ট্যানজেন্ট অনুপাতের বাস্তব জীবনের উদাহরণ",
      "sec-angle": "ট্যানজেন্ট ও কোণের আকারের সম্পর্ক বোঝা",
      "sec-side": "ট্যানজেন্ট ব্যবহার করে বিপরীত বাহু কীভাবে নির্ণয় করবেন",
      "sec-recover": "ট্যানজেন্ট অনুপাত থেকে কোণ কীভাবে নির্ণয় করবেন",
      "sec-mistakes": "ট্যানজেন্ট গণনায় সাধারণ ভুল",
      "sec-verify": "আপনার ট্যানজেন্ট ফলাফল সঠিক কিনা তা কীভাবে যাচাই করবেন",
      "sec-vs": "ট্যানজেন্ট বনাম সাইন, কোসাইন ও কোট্যানজেন্ট",
      "sec-faq": "প্রায়শই জিজ্ঞাসিত প্রশ্ন",
      "sec-related": "সম্পর্কিত ত্রিকোণমিতিক ক্যালকুলেটরগুলো দেখুন"
    },
    "sections": {
      "sec-intro": {
        "h2": "ট্যানজেন্ট অনুপাত ক্যালকুলেটর কী?",
        "blocks": [
          {
            "kind": "p",
            "text": "ট্যানজেন্ট অনুপাত ক্যালকুলেটর একটি প্রশ্নের উত্তর দেয়: একটি সমকোণী ত্রিভুজের সূক্ষ্ম কোণের জন্য, কোণের বিপরীত দিকের বাহুটি কোণের পাশের বাহুর তুলনায় কেমন? বিপরীত বাহু ও সন্নিহিত বাহু লিখুন, আর টুলটি বিপরীত বাহুকে সন্নিহিত বাহু দিয়ে ভাগ করে [[\\tan(A)=a/b]] ফেরত দেয়। একটি সমকোণী ত্রিভুজের বিপরীত বাহু ৩ সেমি ও সন্নিহিত বাহু ৪ সেমি, তাই [[\\tan(A)=3/4=0.75]]। এই ০.৭৫-ই ট্যানজেন্ট অনুপাত: এটি বলে বিপরীত বাহু সন্নিহিত বাহুর ৭৫ শতাংশ দীর্ঘ। এটি কোনো কোণ নয়, তাই কখনো একে [[0.75^\\circ]] হিসেবে পড়বেন না। অতিভুজ এই গণনায় কখনো আসে না; বিপরীত বাহু ও সন্নিহিত বাহু নিজেরাই যথেষ্ট। ট্যানজেন্ট মৌলিক ত্রিকোণমিতিক অনুপাতগুলোর একটি, এবং এর বিশেষ শক্তি হলো উল্লম্ব উচ্চতা আর অনুভূমিক দূরত্বের তুলনা, যার কারণে এটি ছাদের ঢাল, রাস্তার গ্রেড ও র‌্যাম্পের ঢালে দেখা যায়। ফলাফল একটি মাত্রাহীন সংখ্যা: দুটি দৈর্ঘ্যের বিশুদ্ধ তুলনা, সেন্টিমিটার বা ডিগ্রিতে পরিমাপ নয়। ডিগ্রিতে কোণই যদি আপনার দরকার হয়, বিপরীত ট্যানজেন্ট অনুপাতটিকে ডিগ্রিতে রূপান্তর করে।"
          }
        ],
        "steps": [],
        "closingParagraphs": [],
        "tables": [],
        "figures": []
      },
      "sec-triangle": {
        "h2": "বিপরীত বাহু ও সন্নিহিত বাহু বোঝা",
        "blocks": [
          { "kind": "h3", "text": "সমকোণী ত্রিভুজ কী?" },
          {
            "kind": "p",
            "text": "সমকোণী ত্রিভুজের একটি কোণ ঠিক [[90^\\circ]], দুটি লম্ব রেখার মধ্যকার কোণ, যেমন সমতল মেঝের সঙ্গে দেয়ালের মিলন। অতিভুজ সেই সমকোণের বিপরীতে থাকে এবং সবসময় সবচেয়ে দীর্ঘ বাহু, কারণ এটিকে কোণার পুরো কর্ণ বরাবর বিস্তৃত হতে হয়। বাকি দুটি কোণ অবশিষ্ট ৯০ ডিগ্রি ভাগ করে নেয়, তাই দুটোই সূক্ষ্ম। দুটি লেগ সমকোণে মিলিত হয়, পরস্পরের লম্ব, এবং অতিভুজের সঙ্গে তাদের সম্পর্কই সমকোণী ত্রিভুজের ত্রিকোণমিতিকে সম্ভব করে।"
          },
          { "kind": "h3", "text": "বিপরীত বাহু কী?" },
          {
            "kind": "p",
            "text": "বিপরীত বাহু [[a]] হলো প্রসঙ্গ কোণ [[A]]-এর ঠিক বিপরীত দিকের বাহু, একমাত্র বাহু যা কখনো এর শীর্ষবিন্দু স্পর্শ করে না। বাস্তব সমস্যায় এটি প্রায়ই উল্লম্ব উচ্চতা, উচ্চতার পার্থক্য বা উচ্চতার ভূমিকা পালন করে: দেয়ালে মই কত উঁচুতে পৌঁছায়, ছাদের উত্থান, বা ক্রেনের বুমের উল্লম্ব উপাংশ। কোন বাহু বিপরীত হিসেবে গণ্য হবে তা নির্ভর করে নির্বাচিত প্রসঙ্গ কোণের ওপর, তাই কোণ [[A]] থেকে কোণ [[C]]-এ বদলালে বিপরীত ও সন্নিহিতের নাম বদলে যায়। এটি ট্যানজেন্ট সূত্রের লবে থাকে, কারণ ট্যানজেন্ট মাপে কোণের পাশের বাহুর তুলনায় কোণের বিপরীত দিকের বাহুটি কত বড়।"
          },
          { "kind": "h3", "text": "সন্নিহিত বাহু কী?" },
          {
            "kind": "p",
            "text": "সন্নিহিত বাহু [[b]] হলো সেই লেগ যা প্রসঙ্গ কোণ [[A]]-কে স্পর্শ করে কিন্তু অতিভুজ নয়। বাস্তব সমস্যায় এটি প্রায়ই অনুভূমিক দূরত্ব বা ভূমির দূরত্বের ভূমিকা পালন করে: দেয়াল থেকে মইয়ের গোড়া, ছাদের অনুভূমিক দূরত্ব, বা সূর্যের কোণের সমস্যায় ছায়ার দৈর্ঘ্য। এটি কখনো অতিভুজ নয়, প্রতিবার যাচাই করার মতো বিষয়, কারণ অতিভুজ হলো সমকোণের মুখোমুখি বাহু। এটি ট্যানজেন্ট সূত্রের হরে থাকে, যার কারণে ট্যানজেন্ট সবচেয়ে দীর্ঘ বাহুর বদলে এই লেগের সঙ্গে বিপরীত বাহুর তুলনা করে।"
          },
          { "kind": "h3", "text": "অতিভুজ কী?" },
          {
            "kind": "p",
            "text": "অতিভুজ [[c]] হলো সমকোণের বিপরীত দিকের বাহু: যেকোনো চিত্রে এটি [[90^\\circ]] কোণা চিহ্নিত করা ছোট বর্গের মুখোমুখি থাকে, এবং এটি যেকোনো লেগের চেয়ে কঠোরভাবে দীর্ঘ। বাস্তব সমস্যায় এটি প্রায়ই ঢালু দৈর্ঘ্যের ভূমিকা পালন করে: মই, ছাদের রাফটার, গাই তার, বা কর্ণ ব্রেস। প্রাথমিক ট্যানজেন্ট গণনার জন্য এটি দরকার নেই, কারণ ট্যানজেন্ট সূত্র দুটি লেগের সরাসরি তুলনা করে। অন্য কোনো সমস্যার জন্য দরকার হলে, পিথাগোরাসের উপপাদ্য দুটি লেগ থেকে এটি গণনা করে: [[c=\\sqrt{a^2+b^2}]]।"
          }
        ],
        "steps": [],
        "closingParagraphs": [
          "ট্যানজেন্ট দুটি লেগ ব্যবহার করে এবং অতিভুজের প্রয়োজন হয় না। এই বাহুর নামকরণের রীতি ধারাবাহিক রাখুন: [[a]] কোণ [[A]]-এর বিপরীত, [[b]] কোণ [[A]]-এর সন্নিহিত, এবং [[c]] কোণ [[B]]-তে সমকোণের বিপরীত অতিভুজ।"
        ],
        "tables": [],
        "figures": [
          {
            "alt": "সমকোণী ত্রিভুজ, নিচে-বামে কোণ A, সোনালি বিপরীত বাহু a, নীল সন্নিহিত বাহু b, tan(A)=a/b",
            "caption": "কোণ A নিচে-বাম কোণায়; ট্যানজেন্ট সোনালি বিপরীত বাহু a ও নীল সন্নিহিত বাহু b ব্যবহার করে, অতিভুজ c নয়।"
          }
        ]
      },
      "sec-whatis": {
        "h2": "ট্যানজেন্ট অনুপাত বোঝা",
        "blocks": [
          { "kind": "p", "text": "সূক্ষ্ম কোণ [[A]]-এর ট্যানজেন্ট হলো বিপরীত বাহু ভাগ সন্নিহিত বাহু:" },
          { "kind": "p", "text": "[[[\\boxed{\\tan(A)=\\frac{a}{b}}]]]" },
          {
            "kind": "p",
            "text": "এখানে [[\\tan(A)]] মানে কোণ [[A]]-এর ট্যানজেন্ট, [[a]] হলো বিপরীত বাহু, এবং [[b]] হলো সন্নিহিত বাহু। ত্রিভুজটিকে অনুভূমিক দিকে ভূমি রেখে সাজালে, ট্যানজেন্ট উল্লম্ব লেগের সঙ্গে অনুভূমিক লেগের তুলনা করে: বিশুদ্ধতম রূপে উচ্চতা বনাম দূরত্ব।"
          },
          { "kind": "h3", "text": "SOH-CAH-TOA বোঝা" },
          { "kind": "p", "text": "শিক্ষার্থীরা তিনটি প্রাথমিক অনুপাত একটি স্মরণকৌশল দিয়ে মনে রাখে:" },
          { "kind": "p", "text": "SOH: সাইন = বিপরীত / অতিভুজ; CAH: কোসাইন = সন্নিহিত / অতিভুজ; TOA: ট্যানজেন্ট = বিপরীত / সন্নিহিত।" },
          {
            "kind": "p",
            "text": "TOA ট্যানজেন্ট সূত্র [[\\tan(A)=a/b]]-এর সঙ্গে মিলে: T মানে ট্যানজেন্ট, O বিপরীত বাহুকে ওপরে বসায়, আর A সন্নিহিত বাহুকে নিচে বসায়। কোনো সংখ্যা গণনায় ঢোকার আগেই এই কৌশল সঠিক লব ও হর বেছে নিতে সাহায্য করে। এই অংশ ট্যানজেন্টেই মনোযোগী থাকে; বাকি দুটি অনুপাতের নিজস্ব পৃষ্ঠা আছে।"
          },
          { "kind": "h3", "text": "ট্যানজেন্ট কেন অতিভুজ ব্যবহার করে না" },
          { "kind": "p", "text": "ট্যানজেন্ট দুটি লম্ব লেগের সরাসরি তুলনা করে, তাই অতিভুজ অপ্রয়োজনীয়। [[a=3]] ও [[b=4]] হলে:" },
          { "kind": "p", "text": "[[\\tan(A)=\\frac{3}{4}=0.75]]" },
          {
            "kind": "p",
            "text": "অনুপাতটি ইতিমধ্যে ধারণ করে সন্নিহিত বাহুর তুলনায় বিপরীত বাহু কেমন; অতিভুজ আনলে জিজ্ঞাসা করা প্রশ্নই বদলে যেত। ভিন্ন কোনো সমস্যায় অতিভুজ দরকার হলে, পিথাগোরাসের উপপাদ্য লেগগুলো থেকে তা গণনা করে। ট্যানজেন্ট নিজে কখনো তা চায় না।"
          },
          { "kind": "h3", "text": "ট্যানজেন্ট কেন মাত্রাহীন অনুপাত" },
          { "kind": "p", "text": "একটি দৈর্ঘ্যকে আরেকটি দৈর্ঘ্য দিয়ে ভাগ করলে ভৌত একক বাতিল হয়ে যায়। সামঞ্জস্যপূর্ণ এককে:" },
          { "kind": "p", "text": "[[\\frac{3\\,\\text{m}}{4\\,\\text{m}}=0.75]]" },
          {
            "kind": "p",
            "text": "মিটার বাতিল হয়ে একটি সরল সংখ্যা থাকে। ৩০০ সেমি ও ৪০০ সেমি থেকেও একই অনুপাত আসে, কারণ একক পরিবর্তন দুটি বাহুকেই সমানভাবে প্রভাবিত করে। একমাত্র শর্ত হলো দুটি পরিমাপেই সামঞ্জস্যপূর্ণ একক ব্যবহার করা: মিটারের সঙ্গে সেন্টিমিটার মেশালে অর্থহীন সংখ্যা তৈরি হয়, আর আগে রূপান্তর করলে অনুপাত সৎ থাকে।"
          },
          { "kind": "h3", "text": "০.৭৫ ট্যানজেন্ট মানের অর্থ কী?" },
          {
            "kind": "p",
            "text": "[[\\tan(A)=0.75]] মানে বিপরীত বাহু সন্নিহিত বাহুর ০.৭৫ গুণ, বা একই সরলরেখা জ্যামিতিতে প্রতি ১০০ একক অনুভূমিক দূরত্বে ৭৫ একক উল্লম্ব উচ্চতা। এমন একটি ছাদ কল্পনা করুন যা প্রতি ১০০ সেমি অনুভূমিক দূরত্বে ৭৫ সেমি ওপরে ওঠে: ০.৭৫ ঠিক এটাই বর্ণনা করে। এর মানে এই নয় যে কোণটি [[0.75^\\circ]]; অনুপাত ও কোণ আলাদা রাশি, এবং এদের গুলিয়ে ফেলা ত্রিকোণমিতির সবচেয়ে সাধারণ ভুলগুলোর একটি।"
          },
          { "kind": "h3", "text": "১ ট্যানজেন্ট মানের অর্থ কী?" },
          {
            "kind": "p",
            "text": "[[\\tan(A)=1]] মানে [[a=b]]: বিপরীত ও সন্নিহিত বাহু সমান। সমদ্বিবাহু সমকোণী ত্রিভুজের দুটি লেগ সমান, এবং যেহেতু দুটি সূক্ষ্ম কোণকে ৯০ ডিগ্রি সমানভাবে ভাগ করতে হয়, প্রতিটি [[45^\\circ]]:"
          },
          { "kind": "p", "text": "[[A=45^\\circ]]" },
          {
            "kind": "p",
            "text": "সমান লেগ, সমান সূক্ষ্ম কোণ, ট্যানজেন্ট ঠিক ১। এটি ট্যানজেন্ট স্কেলের ভারসাম্য বিন্দু: ১-এর নিচে ত্রিভুজটি উচ্চতার চেয়ে প্রশস্ত, ১-এর ওপরে প্রশস্ততার চেয়ে উঁচু।"
          },
          { "kind": "h3", "text": "ট্যানজেন্ট কেন ১-এর বেশি হতে পারে" },
          {
            "kind": "p",
            "text": "সাইন ও কোসাইনের বিপরীতে, সূক্ষ্ম কোণের জন্য ট্যানজেন্টের কোনো ঊর্ধ্বসীমা নেই। বিপরীত বাহু সন্নিহিত বাহুকে ছাড়িয়ে গেলে, অনুপাতটি বিনা সমস্যায় ১ পেরিয়ে যায়। [[a=6]] ও [[b=3]] হলে:"
          },
          { "kind": "p", "text": "[[\\tan(A)=\\frac{6}{3}=2]]" },
          {
            "kind": "p",
            "text": "বিপরীত বাহু সন্নিহিত বাহুর দ্বিগুণ দীর্ঘ। ১-এর বেশি ট্যানজেন্ট মান গাণিতিকভাবে বৈধ এবং ক্যালকুলেটরের ত্রুটি নির্দেশ করে না; এটি কেবল একটি খাড়া ত্রিভুজ বর্ণনা করে, যেমন দেয়ালের কাছে দাঁড়ানো লম্বা মই।"
          },
          { "kind": "h3", "text": "ট্যানজেন্ট কীভাবে সাইন ও কোসাইনের সঙ্গে সম্পর্কিত" },
          { "kind": "p", "text": "বাকি দুটি অনুপাত দিয়ে শুরু করুন:" },
          { "kind": "p", "text": "[[\\sin(A)=\\frac{a}{c}]]" },
          { "kind": "p", "text": "[[\\cos(A)=\\frac{b}{c}]]" },
          { "kind": "p", "text": "সাইনকে কোসাইন দিয়ে ভাগ করুন, অতিভুজ বাতিল হয়ে যায়:" },
          { "kind": "p", "text": "[[[\\frac{\\sin(A)}{\\cos(A)}=\\frac{a/c}{b/c}=\\frac{a}{b}]]]" },
          { "kind": "p", "text": "অতএব:" },
          { "kind": "p", "text": "[[[\\boxed{\\tan(A)=\\frac{\\sin(A)}{\\cos(A)}}]]]" },
          {
            "kind": "p",
            "text": "এই অভেদ বিপরীত-বনাম-সন্নিহিত সংজ্ঞার সঙ্গে একমত, এবং এটি একটি দরকারি পরস্পর-যাচাই দেয়: একই কোণের জন্য যেকোনো ট্যানজেন্ট ফলাফল সাইন ভাগ কোসাইনের সমান হওয়া উচিত।"
          }
        ],
        "steps": [],
        "closingParagraphs": [],
        "tables": [],
        "figures": [
          {
            "alt": "তিনটি ধাপ: 3-4-5 ত্রিভুজে নাম দেওয়া, ট্যানজেন্ট সূত্র tan(A)=a/b, ফলাফল 0.75, বিপরীত সন্নিহিতের 75 শতাংশ",
            "caption": "তিনটি ধাপ: 3-4-5 ত্রিভুজে নাম দিন, tan(A) = a/b লিখুন, তারপর ৩ কে ৪ দিয়ে ভাগ করে ০.৭৫ পান।"
          }
        ]
      },
      "sec-formula": {
        "h2": "ট্যানজেন্ট সূত্র কীভাবে কাজ করে",
        "blocks": [
          { "kind": "p", "text": "সংজ্ঞা দিয়ে শুরু করুন:" },
          { "kind": "p", "text": "[[\\tan(A)=\\frac{\\text{Opposite}}{\\text{Adjacent}}]]" },
          { "kind": "p", "text": "তারপর এই পৃষ্ঠার প্রতীক ব্যবহার করুন:" },
          { "kind": "p", "text": "[[[\\boxed{\\tan(A)=\\frac{a}{b}}]]]" },
          {
            "kind": "p",
            "text": "বিপরীত বাহু লবে থাকে, কারণ ট্যানজেন্ট মাপে কোণের বিপরীত দিকের বাহুটি কত বড়; সন্নিহিত বাহু হরে থাকে, কারণ এটি সেই বাহু যার সঙ্গে তুলনা করা হয়। এদের অদলবদল করলে আপনি পাবেন কোট্যানজেন্ট, সম্পূর্ণ ভিন্ন অনুপাত।"
          },
          { "kind": "h3", "text": "সম্পূর্ণ সমাধানসহ উদাহরণ: 3-4-5 সমকোণী ত্রিভুজ" },
          { "kind": "p", "text": "বিপরীত বাহু [[a=3\\,\\text{cm}]], সন্নিহিত বাহু [[b=4\\,\\text{cm}]], ও অতিভুজ [[c=5\\,\\text{cm}]] দেওয়া আছে:" },
          { "kind": "p", "text": "ধাপ ১: সূত্রটি লিখুন। [[\\tan(A)=a/b]]" },
          { "kind": "p", "text": "ধাপ ২: জানা মানগুলো বসান। [[\\tan(A)=3/4]]" },
          { "kind": "p", "text": "ধাপ ৩: ভাগ করুন। [[\\boxed{\\tan(A)=0.75}]]" },
          { "kind": "p", "text": "ধাপ ৪: ফলাফলের ব্যাখ্যা করুন। বিপরীত বাহু সন্নিহিত বাহুর ৭৫ শতাংশ দীর্ঘ।" },
          { "kind": "p", "text": "ধাপ ৫: ত্রিভুজটি যাচাই করুন। [[3^2+4^2=5^2]], যা [[9+16=25]]। বাহুর দৈর্ঘ্যগুলো একটি প্রকৃত সমকোণী ত্রিভুজের সঙ্গে সামঞ্জস্যপূর্ণ।" },
          { "kind": "h3", "text": "অনুপাত থেকে কোণ নির্ণয় করুন" },
          { "kind": "p", "text": "কোণটিই যদি প্রয়োজন হয়, অনুপাতটিতে বিপরীত ট্যানজেন্ট প্রয়োগ করুন:" },
          { "kind": "p", "text": "[[A=\\tan^{-1}(0.75)]]" },
          { "kind": "p", "text": "[[\\boxed{A\\approx36.87^\\circ}]]" },
          {
            "kind": "p",
            "text": "বিপরীত ট্যানজেন্টকে আর্কট্যানজেন্টও বলা হয়। ট্যানজেন্ট অনুপাত গণনা করা ও কোণ গণনা করা আলাদা ক্রিয়া: অনুপাতটি ত্রিভুজের আকৃতি বর্ণনা করে, আর বিপরীত ট্যানজেন্ট সেই আকৃতিকে ডিগ্রিতে রূপান্তর করে। এই পৃষ্ঠার ট্যানজেন্ট অনুপাত ক্যালকুলেটর অনুপাতটি ফেরত দেয়; কোণ পুনরুদ্ধার করা বৈজ্ঞানিক ক্যালকুলেটরে পরবর্তী ধাপ।"
          }
        ],
        "steps": [],
        "closingParagraphs": [],
        "tables": [],
        "figures": []
      },
      "sec-howto": {
        "h2": "ট্যানজেন্ট অনুপাত ক্যালকুলেটর কীভাবে ব্যবহার করবেন",
        "blocks": [
          {
            "kind": "p",
            "text": "নিচের ধাপে ধাপে নির্দেশনা এই পৃষ্ঠার সক্রিয় ইন্টারফেসের সঙ্গে মিলে। প্রতিটি ধাপ গুরুত্বপূর্ণ, কারণ ট্যানজেন্ট ফলাফল ততটাই বিশ্বস্ত যতটা এর পেছনের দুটি পরিমাপ।"
          }
        ],
        "steps": [
          "প্রসঙ্গ কোণ [[A]] চিহ্নিত করুন। ট্যানজেন্ট সবসময় একটি সূক্ষ্ম কোণ থেকে কাজ করে; আগে এর নাম দিলে কোন বাহু বিপরীত আর কোনটি সন্নিহিত তা স্থির হয়ে যায়।",
          "বিপরীত বাহু [[a]] খুঁজুন, কোণ [[A]]-এর ঠিক বিপরীতে। এটি সেই বাহু যা কখনো কোণের শীর্ষবিন্দু স্পর্শ করে না।",
          "সন্নিহিত বাহু [[b]] খুঁজুন, যা কোণ [[A]]-কে স্পর্শ করে এবং অতিভুজ নয়। ভুলে ঢালু বাহুটি ধরে ফেলেননি তো, আবার যাচাই করুন।",
          "দুটি বাহুর দৈর্ঘ্য সংগ্রহ করুন বা মাপুন। ফিতা, স্কেল অঙ্কন, বা জানা স্পেসিফিকেশন সবই চলে, যতক্ষণ সংখ্যাগুলো একই ত্রিভুজ বর্ণনা করে।",
          "প্রথম ইনপুট ঘরে বিপরীত বাহুর দৈর্ঘ্য লিখুন। এটি ভগ্নাংশের লব।",
          "দ্বিতীয় ইনপুট ঘরে সন্নিহিত বাহুর দৈর্ঘ্য লিখুন। এটি হর।",
          "উপলব্ধ একক নির্বাচক দিয়ে সামঞ্জস্যপূর্ণ পরিমাপের একক বেছে নিন। ভাগ করার আগে দুটি ইনপুট একই এককে থাকতে হবে, বা একটিতে রূপান্তর করতে হবে।",
          "নিশ্চিত করুন দুটি পরিমাপই ধনাত্মক। শূন্য বা ঋণাত্মক বাহু প্রকৃত ত্রিভুজের হতে পারে না।",
          "Calculate tan(A) চাপুন। টুলটি বিপরীত বাহুকে সন্নিহিত বাহু দিয়ে ভাগ করে।",
          "ফলাফলের ট্যানজেন্ট অনুপাত পড়ুন। উত্তরটি একটি সরল সংখ্যা, ডিগ্রি বা দৈর্ঘ্যের একক ছাড়া।",
          "ফলাফল ১-এর কম, সমান, না বেশি তা দেখুন। ১-এর নিচে মানে ত্রিভুজটি উচ্চতার চেয়ে প্রশস্ত; ঠিক ১ মানে সমান লেগ; ১-এর ওপরে মানে বিপরীত বাহু দীর্ঘ।",
          "ইনপুট মুছে নতুন গণনা শুরু করতে চাইলে Reset ব্যবহার করুন। নতুন ইনপুটের নতুন শুরু প্রাপ্য, আগের সমস্যার বাসি সংখ্যা নয়।"
        ],
        "closingParagraphs": [
          "ক্যালকুলেটরের অতিভুজ বা কোণের ইনপুট দরকার নেই। এটি একটি ক্রিয়া করে, ভাগ [[a/b]], এবং ঠিক আপনার চিহ্নিত দুটি লেগের ওপরই করে।"
        ],
        "tables": [],
        "figures": []
      },
      "sec-examples": {
        "h2": "ট্যানজেন্ট গণনার ধাপে ধাপে উদাহরণ",
        "blocks": [
          {
            "kind": "p",
            "text": "বাস্তব প্রয়োগের আগে চারটি সমাধানসহ উদাহরণ মূল দক্ষতা গড়ে তোলে। প্রতিটি একই ছন্দ অনুসরণ করে: সূত্র লিখুন, মান বসান, ভাগ করুন, ব্যাখ্যা করুন।"
          },
          { "kind": "h3", "text": "উদাহরণ ১: 3-4-5 সমকোণী ত্রিভুজ" },
          { "kind": "p", "text": "[[a=3\\,\\text{cm}]], [[b=4\\,\\text{cm}]] ও [[c=5\\,\\text{cm}]] দেওয়া আছে:" },
          { "kind": "p", "text": "[[\\tan(A)=\\frac{3}{4}]]" },
          { "kind": "p", "text": "[[\\boxed{\\tan(A)=0.75}]]" },
          {
            "kind": "p",
            "text": "বিপরীত বাহু সন্নিহিত বাহুর ৭৫ শতাংশ দীর্ঘ। এখানে বিপরীত বাহু ছোট লেগ, তাই অনুপাতটি ১-এর নিচে, এমন ত্রিভুজ বর্ণনা করে যা উচ্চতার চেয়ে প্রশস্ত।"
          },
          { "kind": "h3", "text": "উদাহরণ ২: 5-12-13 সমকোণী ত্রিভুজ" },
          { "kind": "p", "text": "বিপরীত বাহু [[a=5\\,\\text{m}]], সন্নিহিত বাহু [[b=12\\,\\text{m}]] ও অতিভুজ [[c=13\\,\\text{m}]] দেওয়া আছে:" },
          { "kind": "p", "text": "[[\\tan(A)=\\frac{5}{12}]]" },
          { "kind": "p", "text": "[[\\boxed{\\tan(A)\\approx0.4167}]]" },
          {
            "kind": "p",
            "text": "বিপরীত বাহু সন্নিহিত বাহুর প্রায় ৪১.৬৭ শতাংশ দীর্ঘ। 5-12-13 ত্রয়ী আরেকটি পিথাগোরীয় ত্রয়ী, তাই [[5^2+12^2=13^2]] একটি প্রকৃত সমকোণী ত্রিভুজ নিশ্চিত করে।"
          },
          { "kind": "h3", "text": "উদাহরণ ৩: 45-45-90 ত্রিভুজ" },
          { "kind": "p", "text": "বিপরীত বাহু [[a=1\\,\\text{cm}]], সন্নিহিত বাহু [[b=1\\,\\text{cm}]] ও অতিভুজ [[c=\\sqrt{2}\\,\\text{cm}]] দেওয়া আছে:" },
          { "kind": "p", "text": "[[\\tan(45^\\circ)=\\frac{1}{1}]]" },
          { "kind": "p", "text": "[[\\boxed{\\tan(45^\\circ)=1}]]" },
          {
            "kind": "p",
            "text": "সমান লেগ ট্যানজেন্ট অনুপাত ১ দেয়। এটি ট্যানজেন্ট স্কেলের স্বাভাবিক মধ্যবিন্দু এবং মুখস্থ করার মতো মান: দুটি লেগ মিলে গেলেই সূক্ষ্ম কোণ দুটি ৪৫ ডিগ্রি করে।"
          },
          { "kind": "h3", "text": "উদাহরণ ৪: 30-60-90 ত্রিভুজ" },
          { "kind": "p", "text": "প্রসঙ্গ কোণ [[A=60^\\circ]]-এর জন্য বিপরীত বাহু [[a=\\sqrt{3}\\,\\text{cm}]], সন্নিহিত বাহু [[b=1\\,\\text{cm}]] ও অতিভুজ [[c=2\\,\\text{cm}]] ব্যবহার করুন:" },
          { "kind": "p", "text": "[[\\tan(60^\\circ)=\\frac{\\sqrt{3}}{1}]]" },
          { "kind": "p", "text": "[[\\boxed{\\tan(60^\\circ)\\approx1.7321}]]" },
          {
            "kind": "p",
            "text": "বিপরীত বাহু সন্নিহিত বাহুর চেয়ে দীর্ঘ, তাই ৬০ ডিগ্রি কোণের জন্য যেমন হওয়া উচিত, অনুপাতটি ১ ছাড়িয়ে যায়। পরিপূরক কোণের সঙ্গে তুলনা করুন:"
          },
          { "kind": "p", "text": "[[\\tan(30^\\circ)=\\frac{1}{\\sqrt{3}}\\approx0.5774]]" },
          {
            "kind": "p",
            "text": "পরিপূরক সূক্ষ্ম কোণগুলোর ট্যানজেন্ট মান ব্যুৎক্রম, কারণ প্রসঙ্গ কোণ বদলালে বিপরীত ও সন্নিহিতের নাম বদলে যায়। [[0.5774 \\times 1.7321 \\approx 1]], যা ব্যুৎক্রম সম্পর্ক নিশ্চিত করে।"
          }
        ],
        "steps": [],
        "closingParagraphs": [],
        "tables": [],
        "figures": []
      },
      "sec-applications": {
        "h2": "ট্যানজেন্ট অনুপাতের বাস্তব জীবনের উদাহরণ",
        "blocks": [
          {
            "kind": "p",
            "text": "কর্মজগতে ট্যানজেন্ট তার জায়গা পেয়েছে, কারণ বহু বাস্তব সমস্যা আসলে ছদ্মবেশী উচ্চতা-বনাম-দূরত্ব সমস্যা। বারোটি সমাধানসহ উদাহরণ দেখায় র‌্যাম্প, ছাদ, মই ও জরিপ রেখায় একই ধাঁচের পুনরাবৃত্তি।"
          },
          { "kind": "h3", "text": "উদাহরণ ৫: র‌্যাম্পের ঢাল গণনা" },
          { "kind": "p", "text": "একটি সরলীকৃত র‌্যাম্প ৮ মিটার অনুভূমিক দূরত্বে ০.৬ মিটার ওপরে ওঠে। উল্লম্ব উচ্চতা বিপরীত বাহু, [[a=0.6\\,\\text{m}]], আর অনুভূমিক দূরত্ব সন্নিহিত বাহু, [[b=8\\,\\text{m}]]:" },
          { "kind": "p", "text": "[[\\tan(A)=\\frac{0.6}{8}]]" },
          { "kind": "p", "text": "[[\\boxed{\\tan(A)=0.075}]]" },
          {
            "kind": "p",
            "text": "শতাংশ গ্রেড [[0.075 \\times 100\\%=7.5\\%]], আর কোণ [[A=\\tan^{-1}(0.075)\\approx4.29^\\circ]]। র‌্যাম্পটি প্রতি ১০০ একক অনুভূমিক দূরত্বে ৭.৫ একক উল্লম্বভাবে ওঠে। গণনাটি প্রবেশযোগ্যতা বা ভবন-বিধি সম্মতি প্রতিষ্ঠা করে না।"
          },
          { "kind": "h3", "text": "উদাহরণ ৬: ছাদের ঢাল গণনা" },
          { "kind": "p", "text": "একটি ছাদ ৪ মিটার অনুভূমিক দূরত্বে ৩ মিটার ওপরে ওঠে। উল্লম্ব উচ্চতা বিপরীত বাহু, [[a=3\\,\\text{m}]], আর অনুভূমিক দূরত্ব সন্নিহিত বাহু, [[b=4\\,\\text{m}]]:" },
          { "kind": "p", "text": "[[\\tan(A)=\\frac{3}{4}]]" },
          { "kind": "p", "text": "[[\\boxed{\\tan(A)=0.75}]]" },
          {
            "kind": "p",
            "text": "ছাদটি প্রতি অনুভূমিক এককে ০.৭৫ একক ওঠে, ৭৫ শতাংশ ঢাল, এবং ঢাল কোণ [[A=\\tan^{-1}(0.75)\\approx36.87^\\circ]]। ছাদের ঢাল ঐতিহ্যবাহী এককেও উচ্চতা বনাম দূরত্ব হিসেবে প্রকাশ করা হয়, যেমন প্রতি ১২ ইঞ্চি দূরত্বে ইঞ্চি উচ্চতা, যা ভিন্ন পোশাকে একই অনুপাত। এই অনুপাত সম্পূর্ণ ছাদ-নকশা মূল্যায়ন গঠন করে না।"
          },
          { "kind": "h3", "text": "উদাহরণ ৭: মইয়ের কোণ নির্ণয়" },
          { "kind": "p", "text": "একটি মই দেয়ালে ৪ মিটার উঁচুতে পৌঁছায়, আর এর গোড়া দেয়াল থেকে অনুভূমিকভাবে ৩ মিটার দূরে। কোণ [[A]] মই ও মাটির মাঝে। উল্লম্ব উচ্চতা বিপরীত বাহু, [[a=4\\,\\text{m}]], আর ভূমির দূরত্ব সন্নিহিত বাহু, [[b=3\\,\\text{m}]]:" },
          { "kind": "p", "text": "[[\\tan(A)=\\frac{4}{3}]]" },
          { "kind": "p", "text": "[[\\boxed{\\tan(A)\\approx1.3333}]]" },
          {
            "kind": "p",
            "text": "কোণটি [[A=\\tan^{-1}(4/3)\\approx53.13^\\circ]]। উল্লম্ব উচ্চতা অনুভূমিক দূরত্বের চেয়ে বেশি, যার কারণে অনুপাতটি ১ ছাড়িয়ে যায়। উদাহরণটি জ্যামিতি ব্যাখ্যা করে, মইটি নিরাপদে বসানো আছে কিনা তা প্রতিষ্ঠা করে না।"
          },
          { "kind": "h3", "text": "উদাহরণ ৮: গাছের দিকে উন্নতি কোণ অনুমান" },
          { "kind": "p", "text": "একটি গাছ ১২ মিটার উঁচু, আর সমতল মাটিতে এর ছায়া ৯ মিটার লম্বা। ধরে নিন সূর্যের রশ্মি সরলীকৃত সমকোণী-ত্রিভুজ মডেল তৈরি করে। গাছের উচ্চতা বিপরীত বাহু, [[a=12\\,\\text{m}]], আর ছায়ার দৈর্ঘ্য সন্নিহিত বাহু, [[b=9\\,\\text{m}]]:" },
          { "kind": "p", "text": "[[\\tan(A)=\\frac{12}{9}]]" },
          { "kind": "p", "text": "[[\\boxed{\\tan(A)\\approx1.3333}]]" },
          {
            "kind": "p",
            "text": "উচ্চতা ছায়ার দৈর্ঘ্যের প্রায় ১.৩৩৩৩ গুণ, আর সংশ্লিষ্ট জ্যামিতিক কোণ প্রায় [[53.13^\\circ]]। উদাহরণটি সমতল মাটি, উল্লম্ব গাছ ও সরলরেখা ছায়া মডেল ধরে নেয়।"
          },
          { "kind": "h3", "text": "উদাহরণ ৯: উচ্চতার পার্থক্য জরিপ" },
          { "kind": "p", "text": "একটি জরিপ পরিমাপে ২০ মিটার অনুভূমিক দূরত্বে ১৫ মিটার উল্লম্ব উচ্চতার পার্থক্য দেখা যায়। উচ্চতার পার্থক্য বিপরীত বাহু, [[a=15\\,\\text{m}]], আর অনুভূমিক দূরত্ব সন্নিহিত বাহু, [[b=20\\,\\text{m}]]:" },
          { "kind": "p", "text": "[[\\tan(A)=\\frac{15}{20}]]" },
          { "kind": "p", "text": "[[\\boxed{\\tan(A)=0.75}]]" },
          {
            "kind": "p",
            "text": "উচ্চতার পার্থক্য অনুভূমিক দূরত্বের ০.৭৫ গুণ, আর সংশ্লিষ্ট কোণ প্রায় [[36.87^\\circ]]। প্রকৃত জরিপে এই সরলীকৃত মডেলের বাইরে যন্ত্র-উচ্চতা সমন্বয়, সংশোধন ও অতিরিক্ত পরিমাপের প্রয়োজন হতে পারে।"
          },
          { "kind": "h3", "text": "উদাহরণ ১০: রাস্তার শতাংশ গ্রেড গণনা" },
          { "kind": "p", "text": "একটি সরলীকৃত রাস্তার অংশ ২৪ মিটার অনুভূমিক দূরত্বে ১.২ মিটার ওপরে ওঠে। উল্লম্ব উচ্চতা বিপরীত বাহু, [[a=1.2\\,\\text{m}]], আর অনুভূমিক দূরত্ব সন্নিহিত বাহু, [[b=24\\,\\text{m}]]:" },
          { "kind": "p", "text": "[[\\tan(A)=\\frac{1.2}{24}]]" },
          { "kind": "p", "text": "[[\\boxed{\\tan(A)=0.05}]]" },
          {
            "kind": "p",
            "text": "শতাংশ গ্রেড [[0.05 \\times 100\\%=5\\%]], আর কোণ [[A=\\tan^{-1}(0.05)\\approx2.86^\\circ]]। ৫ শতাংশ গ্রেড মানে ৫ ডিগ্রি কোণ নয়; এই পার্থক্য বিভ্রান্তির সাধারণ উৎস, এবং দুটি সংখ্যা কখনো পরস্পরের বদলে ব্যবহার করা উচিত নয়।"
          },
          { "kind": "h3", "text": "উদাহরণ ১১: সিঁড়ির খাড়াত্ব গণনা" },
          { "kind": "p", "text": "একটি সরলীকৃত সিঁড়ির মোট উল্লম্ব উচ্চতা ২.৪ মিটার ও অনুভূমিক দূরত্ব ৩.২ মিটার। উল্লম্ব উচ্চতা বিপরীত বাহু, [[a=2.4\\,\\text{m}]], আর অনুভূমিক দূরত্ব সন্নিহিত বাহু, [[b=3.2\\,\\text{m}]]:" },
          { "kind": "p", "text": "[[\\tan(A)=\\frac{2.4}{3.2}]]" },
          { "kind": "p", "text": "[[\\boxed{\\tan(A)=0.75}]]" },
          {
            "kind": "p",
            "text": "উল্লম্ব উচ্চতা অনুভূমিক দূরত্বের ৭৫ শতাংশ, আর কোণ প্রায় [[36.87^\\circ]]। গণনাটি সিঁড়ির মাপ, আরাম, বা ভবন-বিধি সম্মতি যাচাই করে না।"
          },
          { "kind": "h3", "text": "উদাহরণ ১২: গাই তারের কোণ বোঝা" },
          { "kind": "p", "text": "একটি গাই তার মাটি থেকে ১২ মিটার ওপরে খুঁটির সঙ্গে যুক্ত, আর এর ভূমি-অ্যাঙ্কর খুঁটি থেকে অনুভূমিকভাবে ৫ মিটার দূরে। সংযোগের উচ্চতা বিপরীত বাহু, [[a=12\\,\\text{m}]], আর ভূমির দূরত্ব সন্নিহিত বাহু, [[b=5\\,\\text{m}]]:" },
          { "kind": "p", "text": "[[\\tan(A)=\\frac{12}{5}]]" },
          { "kind": "p", "text": "[[\\boxed{\\tan(A)=2.4}]]" },
          {
            "kind": "p",
            "text": "কোণটি [[A=\\tan^{-1}(2.4)\\approx67.38^\\circ]]। উল্লম্ব উচ্চতা অনুভূমিক অ্যাঙ্কর দূরত্বের ২.৪ গুণ, যেকোনো মাপে খাড়া তার। ট্যানজেন্ট অনুপাত তারের টান, অ্যাঙ্করের শক্তি, বা কাঠামোগত নিরাপত্তা নির্ধারণ করে না।"
          },
          { "kind": "h3", "text": "উদাহরণ ১৩: ক্রেন বুমের দিক গণনা" },
          { "kind": "p", "text": "একটি সরলীকৃত ক্রেন বুমের উল্লম্ব উপাংশ ৮ মিটার ও অনুভূমিক অভিক্ষেপ ৬ মিটার। উল্লম্ব উপাংশ বিপরীত বাহু, [[a=8\\,\\text{m}]], আর অনুভূমিক অভিক্ষেপ সন্নিহিত বাহু, [[b=6\\,\\text{m}]]:" },
          { "kind": "p", "text": "[[\\tan(A)=\\frac{8}{6}]]" },
          { "kind": "p", "text": "[[\\boxed{\\tan(A)\\approx1.3333}]]" },
          {
            "kind": "p",
            "text": "সংশ্লিষ্ট কোণ প্রায় [[53.13^\\circ]]। উল্লম্ব উপাংশ অনুভূমিক অভিক্ষেপের প্রায় ১.৩৩৩৩ গুণ। এটি সরলীকৃত জ্যামিতিক উদাহরণ এবং ক্রেনের ক্ষমতা বা পরিচালন নিরাপত্তা প্রতিষ্ঠা করে না।"
          },
          { "kind": "h3", "text": "উদাহরণ ১৪: হাইকিং ট্রেইলের গ্রেডিয়েন্ট অনুমান" },
          { "kind": "p", "text": "একটি সরলীকৃত সোজা হাইকিং অংশে ১২০ মিটার উল্লম্ব উচ্চতা বৃদ্ধি ও ৮০০ মিটার অনুভূমিক দূরত্ব আছে। উচ্চতা বৃদ্ধি বিপরীত বাহু, [[a=120\\,\\text{m}]], আর অনুভূমিক দূরত্ব সন্নিহিত বাহু, [[b=800\\,\\text{m}]]:" },
          { "kind": "p", "text": "[[\\tan(A)=\\frac{120}{800}]]" },
          { "kind": "p", "text": "[[\\boxed{\\tan(A)=0.15}]]" },
          {
            "kind": "p",
            "text": "শতাংশ গ্রেড ১৫ শতাংশ, আর সংশ্লিষ্ট কোণ প্রায় [[8.53^\\circ]]। এই সরলীকৃত মডেল ধ্রুব সরলরেখা গ্রেডিয়েন্ট প্রতিনিধিত্ব করে, পুরো বাঁকানো হাইকিং ট্রেইল নয়।"
          },
          { "kind": "h3", "text": "উদাহরণ ১৫: যান্ত্রিক ব্রেস মূল্যায়ন" },
          { "kind": "p", "text": "একটি কর্ণ যান্ত্রিক ব্রেসের উল্লম্ব উপাংশ ১.৫ মিটার ও অনুভূমিক উপাংশ ২ মিটার। উল্লম্ব উপাংশ বিপরীত বাহু, [[a=1.5\\,\\text{m}]], আর অনুভূমিক উপাংশ সন্নিহিত বাহু, [[b=2\\,\\text{m}]]:" },
          { "kind": "p", "text": "[[\\tan(A)=\\frac{1.5}{2}]]" },
          { "kind": "p", "text": "[[\\boxed{\\tan(A)=0.75}]]" },
          {
            "kind": "p",
            "text": "উল্লম্ব উপাংশ অনুভূমিক উপাংশের ৭৫ শতাংশ। অনুপাতটি ব্রেসের শক্তি, ভার ক্ষমতা, বা উপযুক্ততা নির্ধারণ করে না।"
          },
          { "kind": "h3", "text": "উদাহরণ ১৬: ভবনের দিকে উন্নতি কোণ নির্ণয়" },
          { "kind": "p", "text": "একজন পর্যবেক্ষক ভবন থেকে অনুভূমিকভাবে ২৪ মিটার দূরে দাঁড়িয়ে। ভবনের শীর্ষ পর্যবেক্ষকের চোখের স্তর থেকে ১৮ মিটার ওপরে। উল্লম্ব পার্থক্য বিপরীত বাহু, [[a=18\\,\\text{m}]], আর অনুভূমিক দূরত্ব সন্নিহিত বাহু, [[b=24\\,\\text{m}]]:" },
          { "kind": "p", "text": "[[\\tan(A)=\\frac{18}{24}]]" },
          { "kind": "p", "text": "[[\\boxed{\\tan(A)=0.75}]]" },
          {
            "kind": "p",
            "text": "সরলীকৃত জ্যামিতিতে উন্নতি কোণ প্রায় [[36.87^\\circ]]। এটি পর্যবেক্ষকের অনুভূমিক চোখের স্তরের সাপেক্ষে শীর্ষের দিকে কোণ, অগত্যা ভবনের মোট উচ্চতা নয়।"
          }
        ],
        "steps": [],
        "closingParagraphs": [
          "ট্যানজেন্ট একটি মাত্রাহীন অনুপাত, কিন্তু এর বাস্তব মূল্য আসে উল্লম্ব উচ্চতার সঙ্গে অনুভূমিক দূরত্বের তুলনা থেকে, সোজা ঢালের খাড়াত্ব বর্ণনা, উন্নতি কোণ গণনা, এবং কোণ জানা থাকলে অনুপস্থিত বাহু সমাধান থেকে। তিনটি সম্পর্কিত রাশি গুলিয়ে ফেলা সহজ, তাই এদের পরিষ্কার রাখুন: ট্যানজেন্ট অনুপাত হলো উল্লম্ব উচ্চতা ভাগ অনুভূমিক দূরত্ব; শতাংশ গ্রেড হলো ট্যানজেন্ট অনুপাত গুণ ১০০ শতাংশ; কোণ হলো অনুপাতটিতে বিপরীত ট্যানজেন্ট প্রয়োগের ফল। ট্যানজেন্ট একা কখনো কাঠামোগত নিরাপত্তা, ভার ক্ষমতা, প্রবেশযোগ্যতা বা প্রকৌশল সম্মতি নির্ধারণ করে না।"
        ],
        "tables": [
          {
            "headers": ["পরিস্থিতি", "বিপরীত [[a]]", "সন্নিহিত [[b]]", "সূত্র", "অনুপাত", "গ্রেড", "অর্থ"],
            "rows": [
              ["র‌্যাম্প", "0.6 m", "8 m", "0.6/8", "0.075", "7.5%", "মৃদু ঢাল, প্রতি ১০০ দূরত্বে ৭.৫ ওঠে"],
              ["ছাদের ঢাল", "3 m", "4 m", "3/4", "0.75", "75%", "উচ্চতা দূরত্বের ৭৫%"],
              ["মই", "4 m", "3 m", "4/3", "1.3333", "n/a", "উচ্চতা গোড়ার দূরত্ব ছাড়িয়ে, কোণ ৫৩.১৩ ডিগ্রি"],
              ["গাছের উচ্চতা", "12 m", "9 m", "12/9", "1.3333", "n/a", "উচ্চতা ছায়ার দৈর্ঘ্যের ১.৩৩৩৩ গুণ"],
              ["জরিপ", "15 m", "20 m", "15/20", "0.75", "75%", "উচ্চতা অনুভূমিক দূরত্বের ৭৫%"],
              ["রাস্তার গ্রেড", "1.2 m", "24 m", "1.2/24", "0.05", "5%", "৫% গ্রেড, ৫ ডিগ্রি কোণ নয়"],
              ["সিঁড়ি", "2.4 m", "3.2 m", "2.4/3.2", "0.75", "75%", "উচ্চতা দূরত্বের ৭৫%"],
              ["গাই তার", "12 m", "5 m", "12/5", "2.4", "n/a", "খাড়া তার, কোণ ৬৭.৩৮ ডিগ্রি"],
              ["ক্রেন বুম", "8 m", "6 m", "8/6", "1.3333", "n/a", "উল্লম্ব অনুভূমিকের ১.৩৩৩৩ গুণ"],
              ["হাইকিং ট্রেইল", "120 m", "800 m", "120/800", "0.15", "15%", "স্থির ১৫% গ্রেডিয়েন্ট"],
              ["যান্ত্রিক ব্রেস", "1.5 m", "2 m", "1.5/2", "0.75", "n/a", "উল্লম্ব অনুভূমিকের ৭৫%"],
              ["ভবনের উচ্চতা", "18 m", "24 m", "18/24", "0.75", "n/a", "উন্নতি কোণ ৩৬.৮৭ ডিগ্রি"]
            ]
          }
        ],
        "figures": [
          {
            "alt": "চারটি প্যানেল: র‌্যাম্প 0.075, ছাদের ঢাল 0.75, মই 1.3333, জরিপ 0.75, প্রতিটিতে নাম দেওয়া ত্রিভুজ",
            "caption": "চারটি বাস্তব গণনা: র‌্যাম্প, ছাদের ঢাল, মই ও জরিপ, প্রতিটিতে ত্রিভুজ, সূত্র ও অনুপাতসহ।"
          }
        ]
      },
      "sec-angle": {
        "h2": "ট্যানজেন্ট ও কোণের আকারের সম্পর্ক বোঝা",
        "blocks": [
          {
            "kind": "p",
            "text": "প্রসঙ্গ কোণ বাড়লে ট্যানজেন্ট বাড়ে, আর জ্যামিতি ব্যাখ্যা করে কেন। কোণ [[A]] ছোট হলে, বিপরীত বাহু সন্নিহিত বাহুর তুলনায় খাটো, তাই অনুপাতটি ০-এর কাছাকাছি থাকে। কোণ প্রশস্ত হলে, বিপরীত বাহু সন্নিহিত বাহুর দীর্ঘতর অংশ হয়ে ওঠে, আর অনুপাতটি চড়ে: [[45^\\circ]]-এ ১ পেরিয়ে, তারপর কোণ [[90^\\circ]]-এর দিকে এগোলে সীমাহীনভাবে বাড়ে। নিচের টেবিলে উদাহরণমূলক বাহুর দৈর্ঘ্য ব্যবহার করা হয়েছে; অনুপাত, ত্রিভুজের পরম আকার নয়, কোণ নির্ধারণ করে।"
          }
        ],
        "steps": [],
        "closingParagraphs": [
          "ধাঁচটি সরল: বিপরীত বাহু সন্নিহিত বাহুর তুলনায় খাটো হলে ট্যানজেন্ট ছোট, [[45^\\circ]]-এ ১-এর সমান, বড় সূক্ষ্ম কোণের জন্য ১ ছাড়িয়ে, কোণ [[0^\\circ]]-এর দিকে এগোলে শূন্যের দিকে, আর কোণ [[90^\\circ]]-এর দিকে এগোলে সীমাহীনভাবে বাড়ে। বাহুর দৈর্ঘ্য ভিন্ন হলেও একই কোণের ত্রিভুজগুলোর ট্যানজেন্ট অনুপাত একই, কারণ অনুপাত আকার ধারণ করে, মাপ নয়।"
        ],
        "tables": [
          {
            "headers": ["কোণ [[A]]", "বিপরীত বাহু [[a]]", "সন্নিহিত বাহু [[b]]", "ট্যানজেন্ট অনুপাত"],
            "rows": [
              ["[[30^\\circ]]", "1", "[[\\sqrt{3}]]", "প্রায় ০.৫৭৭৪"],
              ["[[45^\\circ]]", "1", "1", "1"],
              ["[[60^\\circ]]", "[[\\sqrt{3}]]", "1", "প্রায় ১.৭৩২১"],
              ["[[75^\\circ]]", "প্রায় ৩.৭৩২১", "1", "প্রায় ৩.৭৩২১"]
            ]
          }
        ],
        "figures": [
          {
            "alt": "৩০, ৪৫ ও ৬০ ডিগ্রিতে তিনটি ত্রিভুজ, ট্যানজেন্ট মান 0.5774, 1 ও 1.7321; কোণের সঙ্গে ট্যানজেন্ট বাড়ে",
            "caption": "কোণ A বাড়লে, বিপরীত বাহু সন্নিহিত বাহুর দীর্ঘতর অংশ হয়, তাই tan(A) বাড়ে।"
          }
        ]
      },
      "sec-side": {
        "h2": "ট্যানজেন্ট ব্যবহার করে বিপরীত বাহু কীভাবে নির্ণয় করবেন",
        "blocks": [
          { "kind": "p", "text": "সন্নিহিত বাহু ও কোণ জানা থাকলে বিপরীত বাহু নির্ণয়ে ট্যানজেন্ট সূত্র পুনর্বিন্যাস করা যায়। [[\\tan(A)=a/b]] দিয়ে শুরু করে দুই পাশে [[b]] গুণ করুন:" },
          { "kind": "p", "text": "[[[\\boxed{a=b\\tan(A)}]]]" },
          { "kind": "p", "text": "বিপরীত বাহু সমান সন্নিহিত বাহু গুণ কোণের ট্যানজেন্ট। সন্নিহিত বাহু [[b=10\\,\\text{m}]] ও কোণ [[A=30^\\circ]] দেওয়া, এবং জেনে যে [[\\tan(30^\\circ)=1/\\sqrt{3}\\approx0.5774]]:" },
          { "kind": "p", "text": "[[a=10\\times0.5774]]" },
          { "kind": "p", "text": "[[\\boxed{a\\approx5.774\\,\\text{m}}]]" },
          { "kind": "p", "text": "এই কোণে ১০ মিটার অনুভূমিক দূরত্বে উল্লম্ব উচ্চতা প্রায় ৫.৭৭৪ মিটার।" },
          { "kind": "p", "text": "আবার পুনর্বিন্যাস করে সন্নিহিত বাহুও একইভাবে পাওয়া যায়:" },
          { "kind": "p", "text": "[[[\\boxed{b=\\frac{a}{\\tan(A)}}]]]" },
          { "kind": "p", "text": "বিপরীত বাহু [[a=6\\,\\text{m}]] ও [[A=45^\\circ]] হলে: যেহেতু [[\\tan(45^\\circ)=1]], [[b=6/1]], তাই [[\\boxed{b=6\\,\\text{m}}]]। এগুলো একই সূত্রের গাণিতিক পুনর্বিন্যাস। এই পৃষ্ঠার ক্যালকুলেটর বাহুর দৈর্ঘ্য থেকে ট্যানজেন্ট অনুপাত ফেরত দেয়; এটি সরাসরি অনুপস্থিত বাহু গণনা করে না।" }
        ],
        "steps": [],
        "closingParagraphs": [],
        "tables": [],
        "figures": []
      },
      "sec-recover": {
        "h2": "ট্যানজেন্ট অনুপাত থেকে কোণ কীভাবে নির্ণয় করবেন",
        "blocks": [
          { "kind": "p", "text": "ট্যানজেন্ট অনুপাত ও কোণ ভিন্ন রাশি: একটি বাহুর মাত্রাহীন তুলনা, অন্যটি ডিগ্রিতে মাপা। অনুপাত জানা থাকলে আর কোণ দরকার হলে, বিপরীত ট্যানজেন্ট ব্যবহার করা যায়:" },
          { "kind": "p", "text": "[[[\\boxed{A=\\tan^{-1}\\left(\\frac{a}{b}\\right)}]]]" },
          { "kind": "p", "text": "বিপরীত ট্যানজেন্টকে আর্কট্যানজেন্টও বলা হয়। [[\\tan(A)=0.75]] দেওয়া:" },
          { "kind": "p", "text": "[[A=\\tan^{-1}(0.75)]]" },
          { "kind": "p", "text": "[[\\boxed{A\\approx36.87^\\circ}]]" },
          { "kind": "p", "text": "ক্যালকুলেটর ডিগ্রিতে সেট থাকলে কোণটি প্রায় [[36.87^\\circ]]।" },
          { "kind": "h3", "text": "ক্যালকুলেটরের কোণ মোড কেন গুরুত্বপূর্ণ" },
          { "kind": "p", "text": "কোণ ডিগ্রি বা রেডিয়ানে মাপা যায়, এবং বিপরীত ট্যানজেন্ট প্রয়োগের আগে বৈজ্ঞানিক ক্যালকুলেটরকে উদ্দিষ্ট মোডে সেট করতে হয়। পূর্ণ বৃত্ত ৩৬০ ডিগ্রি বা [[2\\pi]] রেডিয়ান, তাই [[45^\\circ=\\pi/4]] রেডিয়ান। ট্যানজেন্ট অনুপাতের নিজের ডিগ্রি বা রেডিয়ান একক নেই; সেই একক প্রযোজ্য তা থেকে পুনরুদ্ধার করা কোণের ক্ষেত্রে। এই পৃষ্ঠার ট্যানজেন্ট অনুপাত ক্যালকুলেটর সরাসরি অনুপাত ফেরত দেয়, কোণ ফেরত দেয় না।" }
        ],
        "steps": [],
        "closingParagraphs": [],
        "tables": [],
        "figures": []
      },
      "sec-mistakes": {
        "h2": "ট্যানজেন্ট গণনায় সাধারণ ভুল",
        "blocks": [
          {
            "kind": "p",
            "text": "বেশিরভাগ ট্যানজেন্ট ভুল আসে উল্টো ভগ্নাংশ, ভুল নাম দেওয়া বাহু, বা অনুপাতকে কোণের সঙ্গে গুলিয়ে ফেলা থেকে। ফলাফলে আস্থা রাখার আগে এই তালিকা পার করুন।"
          }
        ],
        "steps": [
          "সূত্র উল্টে [[a/b]]-এর বদলে [[b/a]] গণনা। এটি কোট্যানজেন্ট ফেরত দেয়, ট্যানজেন্ট নয়। [[a=3]] ও [[b=4]] হলে, উল্টো ভগ্নাংশ দেয় ১.৩৩৩৩; সঠিকটি দেয় ০.৭৫।",
          "ট্যানজেন্টকে সাইনের সঙ্গে গুলিয়ে ফেলা। ট্যানজেন্ট বিপরীত বাহুকে সন্নিহিত বাহু দিয়ে ভাগ করে; সাইন বিপরীত বাহুকে অতিভুজ দিয়ে ভাগ করে। হরে অতিভুজ থাকলে উত্তরটি সাইন, ট্যানজেন্ট নয়।",
          "ট্যানজেন্টকে কোসাইনের সঙ্গে গুলিয়ে ফেলা। কোসাইন সন্নিহিত বাহুকে অতিভুজ দিয়ে ভাগ করে। ট্যানজেন্ট কখনো অতিভুজ ব্যবহার করে না, তাই যেকোনো অবস্থানে অতিভুজ ভুল অনুপাতের সংকেত।",
          "ট্যানজেন্টকে কোট্যানজেন্টের সঙ্গে গুলিয়ে ফেলা। কোট্যানজেন্ট ব্যুৎক্রম, সন্নিহিত বনাম বিপরীত। মিলে যাওয়া নামে আসল ভুল হয়, কিন্তু ভগ্নাংশের ক্রম ঠিক উল্টো।",
          "প্রাথমিক ট্যানজেন্ট সূত্রে অতিভুজ অন্তর্ভুক্ত করা। [[a/b]]-এ অতিভুজের কোনো ভূমিকা নেই। গণনায় এটি এলে ভুল সূত্র ব্যবহার হয়েছে।",
          "বিপরীত ও সন্নিহিত বাহু অদলবদল করা। দুটোই লেগ, তাই নাম গুলিয়ে ফেলা সহজ। সবসময় প্রসঙ্গ কোণ থেকে খুঁজুন: এর বিপরীতে বিপরীত, এটিকে স্পর্শ করে সন্নিহিত।",
          "ভুল প্রসঙ্গ কোণের সাপেক্ষে বাহু চিহ্নিত করা। কোণ [[A]] থেকে কোণ [[C]]-এ বদলালে বিপরীত ও সন্নিহিতের নাম বদলে যায়, যা অনুপাতটিকে এর ব্যুৎক্রমে উল্টে দেয়।",
          "ধরে নেওয়া ট্যানজেন্ট ১-এর কম হতেই হবে। এই নিয়ম সাইন ও কোসাইনের। সূক্ষ্ম কোণের জন্য ট্যানজেন্টের কোনো ঊর্ধ্বসীমা নেই, এবং ১-এর ওপরের ফলাফল পুরোপুরি বৈধ।",
          "ট্যানজেন্ট অনুপাতকে ডিগ্রিতে কোণ হিসেবে প্রতিবেদন করা। ০.৭৫ ফলাফল একটি অনুপাত, [[0.75^\\circ]] নয়। একে ডিগ্রি হিসেবে নিলে পরবর্তী যেকোনো গণনায় অর্থহীনতা ঢোকে।",
          "ট্যানজেন্ট অনুপাত পরিমাপের এককসহ প্রতিবেদন করা। ভাগে একক বাতিল হয়, তাই \"০.৭৫ মি\" ভুল। সরল সংখ্যা লিখুন এবং একক ইনপুট পরিমাপে রাখুন, যেখানে তা থাকে।",
          "শূন্য বা ঋণাত্মক বাহুর দৈর্ঘ্য লেখা। ত্রিভুজের শূন্য বা ঋণাত্মক বাহু থাকতে পারে না, তাই এই ইনপুট ডেটা এন্ট্রি ত্রুটি বা অনুপস্থিত পরিমাপের সংকেত, বৈধ প্রান্তিক ঘটনা নয়।",
          "অসামঞ্জস্যপূর্ণ পরিমাপের একক মেশানো। ৩ মিটার বিপরীত বাহু ও ৪০ সেমি সন্নিহিত বাহু দিলে ৭.৫ আসে, অর্থহীন সংখ্যা। আগে এক এককে রূপান্তর করুন: ৩ মিটার ও ৪ মিটার সঠিক ০.৭৫ দেয়।",
          "খুব আগে পূর্ণসংখ্যায় রূপান্তর (রাউন্ডিং)। মধ্যবর্তী ভাগ দুই দশমিকে পূর্ণ করে গণনা চালালে ত্রুটি যৌগিক হয়। প্রতিটি ধাপে পূর্ণ নির্ভুলতা রাখুন এবং শুধু চূড়ান্ত উত্তর পূর্ণ করুন।",
          "শতাংশ গ্রেডকে ডিগ্রিতে কোণের সঙ্গে গুলিয়ে ফেলা। ৫ শতাংশ গ্রেড ০.০৫ ট্যানজেন্ট থেকে আসে, কিন্তু কোণ [[\\tan^{-1}(0.05)\\approx2.86^\\circ]], ৫ ডিগ্রি নয়। গ্রেড ও কোণ ভিন্ন রাশি।",
          "ধরে নেওয়া ট্যানজেন্ট অনুপাত ত্রিভুজের পরম আকার নির্ধারণ করে। ট্যানজেন্ট আকৃতি বর্ণনা করে, আকার নয়: ৩ সেমি বিপরীত বাহু থেকে ৩ কিমি পর্যন্ত অসংখ্য ত্রিভুজের ট্যানজেন্ট ০.৭৫। অনুপাত অনুপাত ঠিক করে; প্রকৃত দৈর্ঘ্যের জন্য অন্তত একটি বাহুর পরিমাপ দরকার।"
        ],
        "closingParagraphs": [
          "ভুল বনাম সঠিক: সমাধানসহ তুলনা। বিপরীত বাহু [[a=3]] ও সন্নিহিত বাহু [[b=4]] দেওয়া:",
          "ভুল: [[4/3\\approx1.3333]]। এটি কোণ [[A]]-এর কোট্যানজেন্ট অনুপাত, ট্যানজেন্ট অনুপাত নয়। লব ও হর উল্টো।",
          "সঠিক: [[\\tan(A)=3/4=0.75]]।",
          "সাইন ও কোসাইন দিয়ে যাচাই করুন: [[c=5]] হলে, [[\\sin(A)=3/5=0.6]] ও [[\\cos(A)=4/5=0.8]]। অতএব [[\\sin(A)/\\cos(A)=0.6/0.8=0.75]], যা ট্যানজেন্ট গণনা নিশ্চিত করে।"
        ],
        "tables": [],
        "figures": []
      },
      "sec-verify": {
        "h2": "আপনার ট্যানজেন্ট ফলাফল সঠিক কিনা তা কীভাবে যাচাই করবেন",
        "blocks": [
          { "kind": "p", "text": "বৈধ, অ-অধঃপতিত সমকোণী ত্রিভুজে দুটি ধনাত্মক লেগ দরকার, [[a \\gt 0]] ও [[b \\gt 0]], সামঞ্জস্যপূর্ণ এককে মাপা, তাই ট্যানজেন্ট ফলাফল ধনাত্মক হতেই হবে:" },
          { "kind": "p", "text": "[[[\\boxed{\\tan(A)=\\frac{a}{b} \\gt 0}]]]" },
          { "kind": "p", "text": "বিপরীত বাহু সন্নিহিত বাহুর চেয়ে খাটো হতেই হবে এমন কোনো শর্ত নেই, তাই ফলাফল ১-এর নিচে, সমান, বা ওপরে থাকতে পারে। শূন্য বা ঋণাত্মক ফলাফল সাধারণত অবৈধ ইনপুট বা উল্টো নামের সংকেত।" },
          { "kind": "h3", "text": "পদ্ধতি ১: অনুপাত যাচাই করুন" },
          { "kind": "p", "text": "সরাসরি [[\\tan(A)=a/b]] আবার যাচাই করুন। [[a=3]] ও [[b=4]] হলে: [[\\tan(A)=3/4=0.75]]। বিপরীত বাহু সন্নিহিত বাহুর চেয়ে খাটো বলে অনুপাতটি ১-এর নিচে আসা উচিত; দ্বিতীয় হাতে-গণনা দ্বিমত হলে, কোনো বাহুর ভুল নাম দেওয়া হয়েছে বা একক মেশানো হয়েছে।" },
          { "kind": "h3", "text": "পদ্ধতি ২: পিথাগোরাসের উপপাদ্য যাচাই করুন" },
          { "kind": "p", "text": "প্রয়োজনে অতিভুজ গণনা করুন: [[c=\\sqrt{a^2+b^2}]]। [[a=3]] ও [[b=4]] হলে: [[c=\\sqrt{9+16}=5]], এবং [[3^2+4^2=5^2]]। এটি 3-4-5 সমকোণী ত্রিভুজের মাত্রা নিশ্চিত করে। অতিভুজ এখানে যাচাই মান, প্রাথমিক ট্যানজেন্ট সূত্রের অংশ নয়।" },
          { "kind": "h3", "text": "পদ্ধতি ৩: বিপরীত ট্যানজেন্ট দিয়ে যাচাই করুন" },
          { "kind": "p", "text": "০.৭৫ ট্যানজেন্ট অনুপাতের জন্য: [[A=\\tan^{-1}(0.75)\\approx36.87^\\circ]]। অনুপাতটি ১-এর নিচে বলে কোণটি [[45^\\circ]]-এর নিচে আসা উচিত; না এলে বাহুর নাম সম্ভবত অদলবদল হয়েছে। পূর্ণসংখ্যায় রূপান্তর থেকে ছোট পার্থক্য আসতে পারে।" }
        ],
        "steps": [],
        "closingParagraphs": [],
        "tables": [],
        "figures": []
      },
      "sec-vs": {
        "h2": "ট্যানজেন্ট বনাম সাইন, কোসাইন ও কোট্যানজেন্ট",
        "blocks": [
          {
            "kind": "p",
            "text": "প্রতিটি অনুপাত বাহুর ভিন্ন জোড়ার তুলনা করে, একই প্রসঙ্গ কোণ ও বাহুর নাম ব্যবহার করে:"
          }
        ],
        "steps": [],
        "closingParagraphs": [
          "ট্যানজেন্ট ও কোট্যানজেন্ট ব্যুৎক্রম জোড়া: [[\\cot(A)=1/\\tan(A)]]। [[\\tan(A)=0.75]] হলে, [[\\cot(A)\\approx1.3333]]। দুটি লেগ জানা থাকলে বা সমস্যায় উচ্চতা বনাম দূরত্ব থাকলে ট্যানজেন্ট নিন; কাজে অতিভুজ এলে সাইন বা কোসাইন নিন, আর তুলনা উল্টো দিকে চললে কোট্যানজেন্ট। ট্যানজেন্টকে কেন্দ্রে রাখুন: প্রতিবেশী অনুপাতগুলোর পূর্ণ আলোচনাসহ নিজস্ব পৃষ্ঠা আছে।",
          "প্রতিবেশী অনুপাতগুলোর জন্য দেখুন <a href=\"/sine-ratio-calculator/\" class=\"text-primary hover:underline\">সাইন অনুপাত ক্যালকুলেটর</a>, <a href=\"/cosine-ratio-calculator/\" class=\"text-primary hover:underline\">কোসাইন অনুপাত ক্যালকুলেটর</a>, <a href=\"/cotangent-ratio-calculator/\" class=\"text-primary hover:underline\">কোট্যানজেন্ট অনুপাত ক্যালকুলেটর</a>, <a href=\"/secant-ratio-calculator/\" class=\"text-primary hover:underline\">সেক্যান্ট অনুপাত ক্যালকুলেটর</a> ও <a href=\"/cosecant-ratio-calculator/\" class=\"text-primary hover:underline\">কোসেক্যান্ট অনুপাত ক্যালকুলেটর</a>।"
        ],
        "tables": [
          {
            "headers": ["অনুপাত", "সূত্র", "এটি কী তুলনা করে"],
            "rows": [
              ["সাইন", "sin(A) = a/c", "বিপরীত বাহুর সঙ্গে অতিভুজ"],
              ["কোসাইন", "cos(A) = b/c", "সন্নিহিত বাহুর সঙ্গে অতিভুজ"],
              ["ট্যানজেন্ট", "tan(A) = a/b", "বিপরীত বাহুর সঙ্গে সন্নিহিত বাহু"],
              ["কোসেক্যান্ট", "csc(A) = c/a", "বিপরীত বাহুর সঙ্গে অতিভুজ"],
              ["সেক্যান্ট", "sec(A) = c/b", "সন্নিহিত বাহুর সঙ্গে অতিভুজ"],
              ["কোট্যানজেন্ট", "cot(A) = b/a", "সন্নিহিত বাহুর সঙ্গে বিপরীত বাহু"]
            ]
          }
        ],
        "figures": []
      },
      "sec-related": {
        "h2": "সম্পর্কিত ত্রিকোণমিতিক ক্যালকুলেটরগুলো দেখুন",
        "blocks": [],
        "steps": [],
        "closingParagraphs": [],
        "related": [
          { "name": "সাইন অনুপাত ক্যালকুলেটর", "desc": "বিপরীত বাহু ও অতিভুজ থেকে কোণের সাইন গণনা করুন।" },
          { "name": "কোসাইন অনুপাত ক্যালকুলেটর", "desc": "সন্নিহিত বাহু ও অতিভুজ থেকে কোণের কোসাইন গণনা করুন।" },
          { "name": "কোট্যানজেন্ট অনুপাত ক্যালকুলেটর", "desc": "দুটি লেগ থেকে ট্যানজেন্টের ব্যুৎক্রম কোট্যানজেন্ট গণনা করুন।" },
          { "name": "সেক্যান্ট অনুপাত ক্যালকুলেটর", "desc": "অতিভুজ ও সন্নিহিত বাহু থেকে কোণের সেক্যান্ট গণনা করুন।" },
          { "name": "কোসেক্যান্ট অনুপাত ক্যালকুলেটর", "desc": "অতিভুজ ও বিপরীত বাহু থেকে কোণের কোসেক্যান্ট গণনা করুন।" },
          { "name": "সমকোণী ত্রিভুজের কোণ ক্যালকুলেটর", "desc": "জানা বাহুগুলো থেকে সমকোণী ত্রিভুজের অজানা কোণ নির্ণয় করুন।" },
          { "name": "সমকোণী ত্রিভুজের বাহু ক্যালকুলেটর", "desc": "কোণ ও জানা বাহু থেকে সমকোণী ত্রিভুজের অজানা বাহু নির্ণয় করুন।" }
        ],
        "tables": [],
        "figures": []
      }
    },
    "faqs": [
      {
        "question": "সমকোণী ত্রিভুজের ট্যানজেন্ট অনুপাতের সূত্র কী?",
        "answer": "tan(A) = a / b: বিপরীত বাহু a-কে সন্নিহিত বাহু b দিয়ে ভাগ করুন। ৩ সেমি বিপরীত বাহু ও ৪ সেমি সন্নিহিত বাহু হলে, ফলাফল 3/4 = ০.৭৫। এই দশমিকই সম্পূর্ণ উত্তর, মাত্রাহীন অনুপাত, কোণ নয়।"
      },
      {
        "question": "দুটি বাহুর দৈর্ঘ্য থেকে ট্যানজেন্ট কীভাবে গণনা করবেন?",
        "answer": "প্রসঙ্গ কোণ A চিহ্নিত করুন, বিপরীত বাহু a ও সন্নিহিত বাহু b একই এককে মাপুন, দুটোই ধনাত্মক কিনা নিশ্চিত করুন, তারপর ভাগ করুন: tan(A) = a / b। এই পৃষ্ঠায়, প্রথম ঘরে বিপরীত বাহু ও দ্বিতীয় ঘরে সন্নিহিত বাহু লিখুন, তারপর Calculate tan(A) চাপুন।"
      },
      {
        "question": "ট্যানজেন্ট কেন অতিভুজ ব্যবহার করে না?",
        "answer": "ট্যানজেন্ট দুটি লম্ব লেগের সরাসরি তুলনা করে: উল্লম্ব বনাম অনুভূমিক। অতিভুজ এই তুলনায় নতুন কোনো তথ্য যোগ করে না, তাই প্রাথমিক সূত্রে শুধু বিপরীত ও সন্নিহিত বাহু দরকার। অন্য গণনায় দরকার হলে পিথাগোরাসের উপপাদ্য পরে অতিভুজ পুনরুদ্ধার করতে পারে।"
      },
      {
        "question": "ট্যানজেন্ট কি ১-এর বেশি হতে পারে?",
        "answer": "হ্যাঁ। সূক্ষ্ম কোণের জন্য ট্যানজেন্টের কোনো ঊর্ধ্বসীমা নেই। বিপরীত বাহু সন্নিহিত বাহুর চেয়ে দীর্ঘ হলে, অনুপাত ১ ছাড়িয়ে যায়: a = 6 ও b = 3 হলে, tan(A) = 6/3 = 2। ১-এর ওপরের ফলাফল গাণিতিকভাবে বৈধ এবং ক্যালকুলেটরের ত্রুটি নির্দেশ করে না।"
      },
      {
        "question": "০.৭৫ ট্যানজেন্ট মানের অর্থ কী?",
        "answer": "বিপরীত বাহু সন্নিহিত বাহুর ৭৫ শতাংশ। 3-4-5 ত্রিভুজে, কোণ A-এর বিপরীত দিকের বাহু ৩ একক আর কোণ A-এর পাশের বাহু ৪ একক, তাই tan(A) = 3/4 = ০.৭৫। এটি ত্রিভুজের আকৃতি বর্ণনা করে, ০.৭৫ ডিগ্রি কোণ নয়।"
      },
      {
        "question": "ট্যানজেন্ট ও কোট্যানজেন্টের পার্থক্য কী?",
        "answer": "এরা ব্যুৎক্রম। ট্যানজেন্ট বিপরীত বাহুকে সন্নিহিত বাহু দিয়ে ভাগ করে (a/b); কোট্যানজেন্ট সন্নিহিত বাহুকে বিপরীত বাহু দিয়ে ভাগ করে (b/a)। tan(A) = ০.৭৫ হলে, cot(A) = 1/০.৭৫, প্রায় ১.৩৩৩৩। ভগ্নাংশের ক্রম ঠিক উল্টো।"
      },
      {
        "question": "ট্যানজেন্ট অনুপাত থেকে কোণ কীভাবে গণনা করব?",
        "answer": "অনুপাতটিতে বিপরীত ট্যানজেন্ট প্রয়োগ করুন: A = tan^-1(a/b)। tan(A) = ০.৭৫ হলে, A = tan^-1(০.৭৫), প্রায় ৩৬.৮৭ ডিগ্রি। আগে বৈজ্ঞানিক ক্যালকুলেটর ডিগ্রি মোডে সেট করুন। এই পৃষ্ঠার ক্যালকুলেটর অনুপাত ফেরত দেয়, কোণ নয়।"
      },
      {
        "question": "ট্যানজেন্ট ব্যবহার করে বিপরীত বাহু কীভাবে নির্ণয় করব?",
        "answer": "সূত্র পুনর্বিন্যাস করে a = b * tan(A) করুন। সন্নিহিত বাহু ১০ মিটার ও কোণ A ৩০ ডিগ্রি হলে, tan(30°) প্রায় ০.৫৭৭৪, তাই a = 10 * ০.৫৭৭৪, প্রায় ৫.৭৭৪ মিটার। এটি হাতে পুনর্বিন্যাস; এই পৃষ্ঠার ক্যালকুলেটর বাহুর দৈর্ঘ্য থেকে অনুপাত ফেরত দেয়, অনুপস্থিত বাহু নয়।"
      },
      {
        "question": "ট্যানজেন্ট ব্যবহার করে সন্নিহিত বাহু কীভাবে নির্ণয় করব?",
        "answer": "সূত্র পুনর্বিন্যাস করে b = a / tan(A) করুন। বিপরীত বাহু ৬ মিটার ও কোণ A ৪৫ ডিগ্রি হলে, tan(45°) = 1, তাই b = 6/1 = ৬ মিটার। এটি একই সূত্রের গাণিতিক পুনর্বিন্যাস, এই পৃষ্ঠার ক্যালকুলেটরের আলাদা মোড নয়।"
      },
      {
        "question": "ট্যানজেন্ট কি ঢালের (slope) মতোই?",
        "answer": "এরা ঘনিষ্ঠভাবে সম্পর্কিত। উচ্চতা বনাম দূরত্ব হিসেবে ঢাল ট্যানজেন্টের মতোই তুলনা করে: উল্লম্ব পরিবর্তন ভাগ অনুভূমিক পরিবর্তন। যে সড়ক প্রকৌশলী ঢাল ০.০৫ লেখেন আর যে ত্রিকোণমিতির ছাত্র tan(A) = ০.০৫ লেখে, দুজনেই একই অনুপাত বর্ণনা করছেন। পদগুলো প্রসঙ্গে ভিন্ন, গণিতে নয়।"
      },
      {
        "question": "শতাংশ গ্রেড ও ডিগ্রিতে কোণের পার্থক্য কী?",
        "answer": "শতাংশ গ্রেড ট্যানজেন্ট অনুপাতের ১০০ গুণ: ০.০৫ ট্যানজেন্টে ৫% গ্রেড। কোণ হলো অনুপাতের বিপরীত ট্যানজেন্ট: tan^-1(০.০৫) প্রায় ২.৮৬ ডিগ্রি। তাই ৫% গ্রেড ৫ ডিগ্রি কোণ নয়। দুটোকে গুলিয়ে ফেলা সবচেয়ে সাধারণ ট্যানজেন্ট ভুলগুলোর একটি।"
      },
      {
        "question": "নির্মাণ ও জরিপে ট্যানজেন্ট কীভাবে ব্যবহৃত হয়?",
        "answer": "ট্যানজেন্ট উল্লম্ব উচ্চতার সঙ্গে অনুভূমিক দূরত্বের তুলনা করে, যা ছাদের ঢাল, র‌্যাম্পের ঢাল, রাস্তার গ্রেড ও সিঁড়ির খাড়াত্ব ঠিক বর্ণনা করে। জরিপকারীরা উচ্চতার পার্থক্য ও অনুভূমিক দূরত্বকে উন্নতি কোণে রূপান্তর করতে এটি ব্যবহার করেন। প্রতিটি ক্ষেত্রে অনুপাত একা কখনো কাঠামোগত নিরাপত্তা বা বিধি সম্মতি প্রত্যয়ন করে না।"
      }
    ],
    "faqHeading": "প্রায়শই জিজ্ঞাসিত প্রশ্ন",
    "relatedHeading": "সম্পর্কিত ত্রিকোণমিতিক ক্যালকুলেটরগুলো দেখুন",
    "conclusion": {
      "h2": "আত্মবিশ্বাসের সঙ্গে ট্যানজেন্ট অনুপাত ব্যবহার করুন",
      "paragraphs": [
        "ট্যানজেন্ট দুটি লেগের অনুপাত: বিপরীত বাহুকে সন্নিহিত বাহু দিয়ে ভাগ করুন, আর আপনি বর্ণনা করে ফেললেন প্রতি একক অনুভূমিক দূরত্বে কত একক উল্লম্ব উচ্চতা আসে। সূত্র [[\\tan(A)=a/b]]-এ শুধু দুটি পরিমাপ দরকার, উত্তর সবসময় মাত্রাহীন সংখ্যা যা ১-এর নিচে, সমান, বা ওপরে থাকতে পারে, আর প্রসঙ্গ কোণ বাড়লে এটি বাড়ে। অনুপস্থিত বাহু দরকার হলে, [[a=b\\tan(A)]] বিপরীত বাহু পুনরুদ্ধার করে; কোণ দরকার হলে, [[A=\\tan^{-1}(a/b)]] তা পুনরুদ্ধার করে। র‌্যাম্প, ছাদ, মই, বা পাঠ্যবইয়ের 3-4-5, পদ্ধতি কখনো বদলায় না: বিপরীত বাহু চিহ্নিত করুন, সন্নিহিত বাহু চিহ্নিত করুন, ভাগ করুন, এবং ধনাত্মক-অনুপাত যাচাই দিয়ে যাচাই করুন।"
      ]
    }
  }
,
  "ja": {
    "tocHeading": "このガイドの内容",
    "tocItems": {
      "sec-intro": "タンジェント比計算機とは?",
      "sec-triangle": "対辺と隣辺を理解する",
      "sec-whatis": "タンジェント比を理解する",
      "sec-formula": "タンジェントの公式の仕組み",
      "sec-howto": "タンジェント比計算機の使い方",
      "sec-examples": "タンジェント計算の手順付き例",
      "sec-applications": "タンジェント比の実生活での例",
      "sec-angle": "タンジェントと角度の大きさの関係を理解する",
      "sec-side": "タンジェントを使って対辺を求める方法",
      "sec-recover": "タンジェント比から角度を求める方法",
      "sec-mistakes": "タンジェント計算でありがちな間違い",
      "sec-verify": "タンジェントの結果が正しいか確認する方法",
      "sec-vs": "タンジェント vs. サイン、コサイン、コタンジェント",
      "sec-faq": "よくある質問",
      "sec-related": "関連する三角関数計算機を探す"
    },
    "sections": {
      "sec-intro": {
        "h2": "タンジェント比計算機とは?",
        "blocks": [
          {
            "kind": "p",
            "text": "タンジェント比計算機は一つの問いに答えます。直角三角形の鋭角について、角の向かい側の辺は角に隣り合う辺と比べてどうなっているか、という問いです。対辺と隣辺を入力すると、ツールは対辺を隣辺で割り、[[\\tan(A)=a/b]] を返します。直角三角形の対辺が 3 cm、隣辺が 4 cm のとき、[[\\tan(A)=3/4=0.75]] となります。この 0.75 がタンジェント比です。対辺が隣辺の 75 パーセントの長さであることを表します。角度ではないので、[[0.75^\\circ]] と読んではいけません。斜辺はこの計算には一切登場しません。対辺と隣辺だけで十分です。タンジェントは基本的な三角比の一つで、その強みは垂直方向の上昇と水平方向の移動を比較することにあります。そのため屋根の勾配、道路の傾斜、スロープなどに登場します。結果は無次元の数です。センチメートルや度数での測定値ではなく、二つの長さの純粋な比較です。必要なのが度数での角度であれば、逆タンジェントが比を度数に変換します。"
          }
        ],
        "steps": [],
        "closingParagraphs": [],
        "tables": [],
        "figures": []
      },
      "sec-triangle": {
        "h2": "対辺と隣辺を理解する",
        "blocks": [
          { "kind": "h3", "text": "直角三角形とは?" },
          {
            "kind": "p",
            "text": "直角三角形は一つの角がちょうど [[90^\\circ]] です。二つの垂直な直線の間の角で、水平な床と壁が出会うような角です。斜辺はその直角の向かいにあり、角の対角線全体をまたがなければならないため、常に最も長い辺です。残りの二つの角は残りの 90 度を分け合うので、どちらも鋭角です。二つの脚は直角で出会い、互いに垂直です。その斜辺との関係があるからこそ、直角三角形の三角法が成り立つのです。"
          },
          { "kind": "h3", "text": "対辺とは?" },
          {
            "kind": "p",
            "text": "対辺 [[a]] は基準角 [[A]] の真向かいにある辺で、その頂点に決して触れない唯一の辺です。実際の問題では、垂直方向の上昇、標高差、あるいは高さの役割を果たすことが多いです。はしごが壁に届く高さ、屋根の上昇、クレーンのブームの垂直成分などです。どの辺が対辺になるかは選んだ基準角によって決まるので、角 [[A]] から角 [[C]] に切り替えると、対辺と隣辺のラベルが入れ替わります。タンジェントの公式の分子に現れるのは、タンジェントが角の向かいの辺の、角に隣り合う辺に対する大きさを測るからです。"
          },
          { "kind": "h3", "text": "隣辺とは?" },
          {
            "kind": "p",
            "text": "隣辺 [[b]] は、基準角 [[A]] に触れていて斜辺ではない方の脚です。実際の問題では、水平方向の移動や地面の距離の役割を果たすことが多いです。壁からのはしごの足元の距離、屋根の水平方向の移動、日射角の問題における影の長さなどです。斜辺が直角の向かいの辺であるため、隣辺が斜辺になることは決してありません。これは毎回確認する価値のある点です。タンジェントの公式の分母に現れるため、タンジェントは最も長い辺ではなくこの脚に対して対辺を比較します。"
          },
          { "kind": "h3", "text": "斜辺とは?" },
          {
            "kind": "p",
            "text": "斜辺 [[c]] は直角の向かいの辺です。どの図でも [[90^\\circ]] の角を示す小さな正方形の向かいにあり、どちらの脚よりも厳密に長いです。実際の問題では、傾いた長さの役割を果たすことが多いです。はしご、屋根の垂木、支線、斜めの筋交いなどです。タンジェントの基本計算には不要です。タンジェントの公式は二つの脚を直接比較するからです。別の問題で必要になったら、ピタゴラスの定理が二つの脚からそれを計算します。[[c=\\sqrt{a^2+b^2}]] です。"
          }
        ],
        "steps": [],
        "closingParagraphs": [
          "タンジェントは二つの脚を使い、斜辺を必要としません。この辺のラベル付けの慣習を一貫して守りましょう。[[a]] は角 [[A]] の対辺、[[b]] は角 [[A]] の隣辺、[[c]] は [[B]] における直角の向かいの斜辺です。"
        ],
        "tables": [],
        "figures": [
          {
            "alt": "左下に角Aがある直角三角形、金色の対辺a、青色の隣辺b、tan(A)=a/b",
            "caption": "角 A は左下にあります。タンジェントは金色の対辺 a と青色の隣辺 b を使い、斜辺 c は使いません。"
          }
        ]
      },
      "sec-whatis": {
        "h2": "タンジェント比を理解する",
        "blocks": [
          { "kind": "p", "text": "鋭角 [[A]] のタンジェントは、対辺を隣辺で割ったものです。" },
          { "kind": "p", "text": "[[[\\boxed{\\tan(A)=\\frac{a}{b}}]]]" },
          {
            "kind": "p",
            "text": "ここで [[\\tan(A)]] は角 [[A]] のタンジェント、[[a]] は対辺、[[b]] は隣辺を表します。三角形を底辺が水平方向に沿うように置くと、タンジェントは垂直の脚と水平の脚を比較します。最も純粋な形の「上昇 ÷ 移動」です。"
          },
          { "kind": "h3", "text": "SOH-CAH-TOA を理解する" },
          { "kind": "p", "text": "生徒は三つの基本的な比を一つの覚え方で記憶します。" },
          { "kind": "p", "text": "SOH: サイン = 対辺 / 斜辺。CAH: コサイン = 隣辺 / 斜辺。TOA: タンジェント = 対辺 / 隣辺。" },
          {
            "kind": "p",
            "text": "TOA はタンジェントの公式 [[\\tan(A)=a/b]] に対応します。T はタンジェント、O は対辺を上に、A は隣辺を下に置きます。この覚え方のおかげで、数値が計算に入る前に正しい分子と分母を選べます。この節はタンジェントに集中します。残りの二つの比にはそれぞれのページがあります。"
          },
          { "kind": "h3", "text": "なぜタンジェントは斜辺を使わないのか" },
          { "kind": "p", "text": "タンジェントは二つの垂直な脚を直接比較するので、斜辺は不要です。[[a=3]]、[[b=4]] のとき。" },
          { "kind": "p", "text": "[[\\tan(A)=\\frac{3}{4}=0.75]]" },
          {
            "kind": "p",
            "text": "この比は、対辺が隣辺と比べてどうかという情報をすでにすべて捉えています。斜辺を持ち込むと、問われている質問自体が変わってしまいます。別の問題で斜辺が必要になったら、ピタゴラスの定理が脚からそれを計算します。タンジェント自体は決してそれを求めません。"
          },
          { "kind": "h3", "text": "なぜタンジェントは無次元の比なのか" },
          { "kind": "p", "text": "長さを長さで割ると物理単位が打ち消されます。単位がそろっている場合。" },
          { "kind": "p", "text": "[[\\frac{3\\,\\text{m}}{4\\,\\text{m}}=0.75]]" },
          {
            "kind": "p",
            "text": "メートルが打ち消され、素朴な数だけが残ります。300 cm と 400 cm からも同じ比が得られます。単位の変更が両方の辺に等しく影響するからです。唯一の条件は、両方の測定で単位をそろえることです。メートルとセンチメートルを混ぜると意味のない数になりますが、先に変換しておけば比は正直なままです。"
          },
          { "kind": "h3", "text": "タンジェント値 0.75 の意味" },
          {
            "kind": "p",
            "text": "[[\\tan(A)=0.75]] は、対辺が隣辺の 0.75 倍、つまり同じ直線幾何学で水平 100 単位ごとに垂直 75 単位の上昇であることを意味します。水平 100 cm ごとに 75 cm 上昇する屋根を思い浮かべてください。0.75 が表すのはまさにそれです。角が [[0.75^\\circ]] であるという意味ではありません。比と角は別の量であり、これを混同することは三角法で最も多い間違いの一つです。"
          },
          { "kind": "h3", "text": "タンジェント値 1 の意味" },
          {
            "kind": "p",
            "text": "[[\\tan(A)=1]] は [[a=b]] を意味します。対辺と隣辺が等しいのです。二等辺直角三角形は二つの脚が等しく、二つの鋭角は 90 度を等しく分け合わなければならないので、それぞれ [[45^\\circ]] です。"
          },
          { "kind": "p", "text": "[[A=45^\\circ]]" },
          {
            "kind": "p",
            "text": "脚が等しく、鋭角が等しく、タンジェントはちょうど 1 です。これがタンジェントスケールの釣り合いの点です。1 未満では三角形は高さより幅が広く、1 を超えると幅より高くなります。"
          },
          { "kind": "h3", "text": "なぜタンジェントは 1 を超えられるのか" },
          {
            "kind": "p",
            "text": "サインやコサインとは異なり、タンジェントには鋭角に対する上限がありません。対辺が隣辺より長くなれば、比は問題なく 1 を超えます。[[a=6]]、[[b=3]] のとき。"
          },
          { "kind": "p", "text": "[[\\tan(A)=\\frac{6}{3}=2]]" },
          {
            "kind": "p",
            "text": "対辺は隣辺の 2 倍の長さです。1 を超えるタンジェント値は数学的に有効で、計算機のエラーを示しません。壁の近くに立てかけられた背の高いはしごのような、急な三角形を表しているだけです。"
          },
          { "kind": "h3", "text": "タンジェントとサイン・コサインの関係" },
          { "kind": "p", "text": "残りの二つの比から始めます。" },
          { "kind": "p", "text": "[[\\sin(A)=\\frac{a}{c}]]" },
          { "kind": "p", "text": "[[\\cos(A)=\\frac{b}{c}]]" },
          { "kind": "p", "text": "サインをコサインで割ると斜辺が打ち消されます。" },
          { "kind": "p", "text": "[[[\\frac{\\sin(A)}{\\cos(A)}=\\frac{a/c}{b/c}=\\frac{a}{b}]]]" },
          { "kind": "p", "text": "したがって。" },
          { "kind": "p", "text": "[[[\\boxed{\\tan(A)=\\frac{\\sin(A)}{\\cos(A)}}]]]" },
          {
            "kind": "p",
            "text": "この恒等式は対辺÷隣辺の定義と一致し、便利な相互チェックになります。同じ角に対するタンジェントの結果は、サインをコサインで割ったものと等しくなければなりません。"
          }
        ],
        "steps": [],
        "closingParagraphs": [],
        "tables": [],
        "figures": [
          {
            "alt": "三つの段階: 3-4-5 の三角形、タンジェントの公式 tan(A)=a/b、結果 0.75、対辺は隣辺の 75 パーセント",
            "caption": "三つの段階: 3-4-5 の三角形にラベルを付け、tan(A) = a/b と書き、3 を 4 で割って 0.75 を得ます。"
          }
        ]
      },
      "sec-formula": {
        "h2": "タンジェントの公式の仕組み",
        "blocks": [
          { "kind": "p", "text": "定義から始めます。" },
          { "kind": "p", "text": "[[\\tan(A)=\\frac{\\text{Opposite}}{\\text{Adjacent}}]]" },
          { "kind": "p", "text": "次にこのページの記法を使います。" },
          { "kind": "p", "text": "[[[\\boxed{\\tan(A)=\\frac{a}{b}}]]]" },
          {
            "kind": "p",
            "text": "対辺が分子に入るのは、タンジェントが角の向かいの辺の大きさを測るからです。隣辺が分母に入るのは、比較の対象となる辺だからです。これを入れ替えるとコタンジェントという全く別の比になります。"
          },
          { "kind": "h3", "text": "完全な計算例: 3-4-5 の直角三角形" },
          { "kind": "p", "text": "対辺 [[a=3\\,\\text{cm}]]、隣辺 [[b=4\\,\\text{cm}]]、斜辺 [[c=5\\,\\text{cm}]] が与えられています。" },
          { "kind": "p", "text": "手順 1: 公式を書きます。[[\\tan(A)=a/b]]" },
          { "kind": "p", "text": "手順 2: 既知の値を代入します。[[\\tan(A)=3/4]]" },
          { "kind": "p", "text": "手順 3: 割ります。[[\\boxed{\\tan(A)=0.75}]]" },
          { "kind": "p", "text": "手順 4: 結果を解釈します。対辺は隣辺の 75 パーセントの長さです。" },
          { "kind": "p", "text": "手順 5: 三角形を検証します。[[3^2+4^2=5^2]]、つまり [[9+16=25]] です。辺の長さは本物の直角三角形と一致しています。" },
          { "kind": "h3", "text": "比から角度を求める" },
          { "kind": "p", "text": "角度そのものが必要な場合は、比に逆タンジェントを適用します。" },
          { "kind": "p", "text": "[[A=\\tan^{-1}(0.75)]]" },
          { "kind": "p", "text": "[[\\boxed{A\\approx36.87^\\circ}]]" },
          {
            "kind": "p",
            "text": "逆タンジェントはアークタンジェントとも呼ばれます。タンジェント比の計算と角度の計算は別の操作です。比は三角形の形を表し、逆タンジェントはその形を度数に変換します。このページのタンジェント比計算機は比を返します。角度の回復は関数電卓での次の手順です。"
          }
        ],
        "steps": [],
        "closingParagraphs": [],
        "tables": [],
        "figures": []
      },
      "sec-howto": {
        "h2": "タンジェント比計算機の使い方",
        "blocks": [
          {
            "kind": "p",
            "text": "以下の手順はこのページの実際のインターフェースに対応しています。一つ一つの手順が重要です。タンジェントの結果は、その背後にある二つの測定値と同じだけしか信頼できないからです。"
          }
        ],
        "steps": [
          "基準角 [[A]] を特定します。タンジェントは常に一つの鋭角から働きます。先に名前を付けておくと、どの辺が対辺でどの辺が隣辺かが確定します。",
          "対辺 [[a]] を見つけます。角 [[A]] の真向かいです。この辺は角の頂点に決して触れません。",
          "隣辺 [[b]] を見つけます。角 [[A]] に触れていて、斜辺ではない辺です。間違えて斜めの辺をつかんでいないか、もう一度確認してください。",
          "二つの辺の長さを取得または測定します。巻き尺、縮尺図、既知の仕様のいずれでも構いません。数値が同じ三角形を表していればよいのです。",
          "最初の入力欄に対辺の長さを入力します。これが分数の分子です。",
          "二番目の入力欄に隣辺の長さを入力します。これが分母です。",
          "利用可能な単位セレクターで互換性のある測定単位を選択します。両方の入力が同じ単位であるか、割る前に一方に変換されている必要があります。",
          "両方の測定値が正であることを確認します。ゼロや負の辺は本物の三角形には属しません。",
          "「tan(A) を計算」をクリックします。ツールは対辺を隣辺で割ります。",
          "得られたタンジェント比を読み取ります。答えは素朴な数で、度数も長さの単位も付きません。",
          "結果が 1 より小さいか、等しいか、大きいかを確認します。1 未満は三角形が高さより幅が広いこと、ちょうど 1 は脚が等しいこと、1 超えは対辺が長いことを意味します。",
          "入力をクリアして別の計算を始めたいときは「リセット」を使います。新しい入力には新しいスタートがふさわしく、前の問題の残り物ではありません。"
        ],
        "closingParagraphs": [
          "この計算機は斜辺も角度の入力も必要としません。一つの操作、除算 [[a/b]] を実行し、それをあなたが特定した二つの脚に正確に適用します。"
        ],
        "tables": [],
        "figures": []
      },
      "sec-examples": {
        "h2": "タンジェント計算の手順付き例",
        "blocks": [
          {
            "kind": "p",
            "text": "実用的な応用の前に、4 つの計算例で基本スキルを身に付けます。それぞれ同じリズムに従います。公式を書く、代入する、割る、解釈する、です。"
          },
          { "kind": "h3", "text": "例 1: 3-4-5 の直角三角形" },
          { "kind": "p", "text": "[[a=3\\,\\text{cm}]]、[[b=4\\,\\text{cm}]]、[[c=5\\,\\text{cm}]] が与えられています。" },
          { "kind": "p", "text": "[[\\tan(A)=\\frac{3}{4}]]" },
          { "kind": "p", "text": "[[\\boxed{\\tan(A)=0.75}]]" },
          {
            "kind": "p",
            "text": "対辺は隣辺の 75 パーセントの長さです。ここでは対辺が短い方の脚なので、比は 1 未満となり、高さより幅の広い三角形を表します。"
          },
          { "kind": "h3", "text": "例 2: 5-12-13 の直角三角形" },
          { "kind": "p", "text": "対辺 [[a=5\\,\\text{m}]]、隣辺 [[b=12\\,\\text{m}]]、斜辺 [[c=13\\,\\text{m}]] が与えられています。" },
          { "kind": "p", "text": "[[\\tan(A)=\\frac{5}{12}]]" },
          { "kind": "p", "text": "[[\\boxed{\\tan(A)\\approx0.4167}]]" },
          {
            "kind": "p",
            "text": "対辺は隣辺の約 41.67 パーセントの長さです。5-12-13 の組はもう一つのピタゴラス数なので、[[5^2+12^2=13^2]] が本物の直角三角形であることを確認します。"
          },
          { "kind": "h3", "text": "例 3: 45-45-90 の三角形" },
          { "kind": "p", "text": "対辺 [[a=1\\,\\text{cm}]]、隣辺 [[b=1\\,\\text{cm}]]、斜辺 [[c=\\sqrt{2}\\,\\text{cm}]] が与えられています。" },
          { "kind": "p", "text": "[[\\tan(45^\\circ)=\\frac{1}{1}]]" },
          { "kind": "p", "text": "[[\\boxed{\\tan(45^\\circ)=1}]]" },
          {
            "kind": "p",
            "text": "等しい脚はタンジェント比 1 を生みます。これはタンジェントスケールの自然な中点であり、覚えておく価値のある値です。二つの脚が一致するときはいつでも、鋭角はそれぞれ 45 度です。"
          },
          { "kind": "h3", "text": "例 4: 30-60-90 の三角形" },
          { "kind": "p", "text": "基準角 [[A=60^\\circ]] について、対辺 [[a=\\sqrt{3}\\,\\text{cm}]]、隣辺 [[b=1\\,\\text{cm}]]、斜辺 [[c=2\\,\\text{cm}]] を使います。" },
          { "kind": "p", "text": "[[\\tan(60^\\circ)=\\frac{\\sqrt{3}}{1}]]" },
          { "kind": "p", "text": "[[\\boxed{\\tan(60^\\circ)\\approx1.7321}]]" },
          {
            "kind": "p",
            "text": "対辺が隣辺より長いので、60 度の角に対してあるべき通り、比は 1 を超えます。余角と比較してみましょう。"
          },
          { "kind": "p", "text": "[[\\tan(30^\\circ)=\\frac{1}{\\sqrt{3}}\\approx0.5774]]" },
          {
            "kind": "p",
            "text": "互いに余角の関係にある鋭角のタンジェント値は逆数になります。基準角を切り替えると対辺と隣辺のラベルが入れ替わるからです。[[0.5774 \\times 1.7321 \\approx 1]] がこの逆数の関係を確認します。"
          }
        ],
        "steps": [],
        "closingParagraphs": [],
        "tables": [],
        "figures": []
      },
      "sec-applications": {
        "h2": "タンジェント比の実生活での例",
        "blocks": [
          {
            "kind": "p",
            "text": "タンジェントが実務の世界で確固たる地位を築いているのは、多くの現実の問題が実は「上昇÷移動」の問題に変装しているからです。12 の計算例が、スロープ、屋根、はしご、測量線にわたってこのパターンの繰り返しを示します。"
          },
          { "kind": "h3", "text": "例 5: スロープの勾配を計算する" },
          { "kind": "p", "text": "単純化されたスロープは、水平 8 m に対して 0.6 m 上昇します。垂直の上昇が対辺 [[a=0.6\\,\\text{m}]]、水平の移動が隣辺 [[b=8\\,\\text{m}]] です。" },
          { "kind": "p", "text": "[[\\tan(A)=\\frac{0.6}{8}]]" },
          { "kind": "p", "text": "[[\\boxed{\\tan(A)=0.075}]]" },
          {
            "kind": "p",
            "text": "百分率勾配は [[0.075 \\times 100\\%=7.5\\%]]、角度は [[A=\\tan^{-1}(0.075)\\approx4.29^\\circ]] です。スロープは水平 100 単位ごとに垂直 7.5 単位上昇します。この計算はバリアフリー性や建築基準への適合を保証しません。"
          },
          { "kind": "h3", "text": "例 6: 屋根の勾配を計算する" },
          { "kind": "p", "text": "屋根は水平 4 m に対して 3 m 上昇します。垂直の上昇が対辺 [[a=3\\,\\text{m}]]、水平の移動が隣辺 [[b=4\\,\\text{m}]] です。" },
          { "kind": "p", "text": "[[\\tan(A)=\\frac{3}{4}]]" },
          { "kind": "p", "text": "[[\\boxed{\\tan(A)=0.75}]]" },
          {
            "kind": "p",
            "text": "屋根は水平 1 単位ごとに 0.75 単位上昇します。75 パーセントの勾配で、勾配角は [[A=\\tan^{-1}(0.75)\\approx36.87^\\circ]] です。屋根の勾配は、水平 12 インチごとの上昇インチ数のような伝統的な単位での上昇÷移動としても表されます。装いは違っても同じ比です。この比は完全な屋根設計評価にはなりません。"
          },
          { "kind": "h3", "text": "例 7: はしごの角度を求める" },
          { "kind": "p", "text": "はしごが壁を 4 m の高さまで届き、その足元は壁から水平に 3 m 離れています。角 [[A]] ははしごと地面の間にあります。垂直の高さが対辺 [[a=4\\,\\text{m}]]、地面の距離が隣辺 [[b=3\\,\\text{m}]] です。" },
          { "kind": "p", "text": "[[\\tan(A)=\\frac{4}{3}]]" },
          { "kind": "p", "text": "[[\\boxed{\\tan(A)\\approx1.3333}]]" },
          {
            "kind": "p",
            "text": "角度は [[A=\\tan^{-1}(4/3)\\approx53.13^\\circ]] です。垂直の高さが水平距離より大きいため、比は 1 を超えます。この例は幾何学を説明するもので、はしごが安全に設置されているかを保証しません。"
          },
          { "kind": "h3", "text": "例 8: 木への仰角を推定する" },
          { "kind": "p", "text": "木の高さは 12 m で、平らな地面での影の長さは 9 m です。太陽光線が単純化された直角三角形モデルを作ると仮定します。木の高さが対辺 [[a=12\\,\\text{m}]]、影の長さが隣辺 [[b=9\\,\\text{m}]] です。" },
          { "kind": "p", "text": "[[\\tan(A)=\\frac{12}{9}]]" },
          { "kind": "p", "text": "[[\\boxed{\\tan(A)\\approx1.3333}]]" },
          {
            "kind": "p",
            "text": "高さは影の長さの約 1.3333 倍で、対応する幾何学的な角度は約 [[53.13^\\circ]] です。この例は、平らな地面、垂直な木、直線の影モデルを仮定しています。"
          },
          { "kind": "h3", "text": "例 9: 標高差を測量する" },
          { "kind": "p", "text": "測量で、水平 20 m に対して垂直 15 m の標高差が測定されました。標高差が対辺 [[a=15\\,\\text{m}]]、水平距離が隣辺 [[b=20\\,\\text{m}]] です。" },
          { "kind": "p", "text": "[[\\tan(A)=\\frac{15}{20}]]" },
          { "kind": "p", "text": "[[\\boxed{\\tan(A)=0.75}]]" },
          {
            "kind": "p",
            "text": "標高差は水平距離の 0.75 倍で、対応する角度は約 [[36.87^\\circ]] です。実際の測量では、この単純化されたモデルを超えて、器械高の調整、補正、追加の測定が必要になる場合があります。"
          },
          { "kind": "h3", "text": "例 10: 道路の百分率勾配を計算する" },
          { "kind": "p", "text": "単純化された道路区間は、水平 24 m に対して 1.2 m 上昇します。垂直の上昇が対辺 [[a=1.2\\,\\text{m}]]、水平の移動が隣辺 [[b=24\\,\\text{m}]] です。" },
          { "kind": "p", "text": "[[\\tan(A)=\\frac{1.2}{24}]]" },
          { "kind": "p", "text": "[[\\boxed{\\tan(A)=0.05}]]" },
          {
            "kind": "p",
            "text": "百分率勾配は [[0.05 \\times 100\\%=5\\%]]、角度は [[A=\\tan^{-1}(0.05)\\approx2.86^\\circ]] です。5 パーセント勾配は 5 度の角度を意味しません。この区別はよくある混乱の源であり、二つの数値を互換的に使ってはいけません。"
          },
          { "kind": "h3", "text": "例 11: 階段の急さを計算する" },
          { "kind": "p", "text": "単純化された階段は、垂直の総上昇が 2.4 m、水平の移動が 3.2 m です。垂直の上昇が対辺 [[a=2.4\\,\\text{m}]]、水平の移動が隣辺 [[b=3.2\\,\\text{m}]] です。" },
          { "kind": "p", "text": "[[\\tan(A)=\\frac{2.4}{3.2}]]" },
          { "kind": "p", "text": "[[\\boxed{\\tan(A)=0.75}]]" },
          {
            "kind": "p",
            "text": "垂直の上昇は水平の移動の 75 パーセントで、角度は約 [[36.87^\\circ]] です。この計算は階段の寸法、快適性、建築基準への適合を検証しません。"
          },
          { "kind": "h3", "text": "例 12: 支線の角度を理解する" },
          { "kind": "p", "text": "支線は地面から 12 m の高さで電柱に取り付けられ、その地面のアンカーは電柱から水平に 5 m 離れています。取り付け高さが対辺 [[a=12\\,\\text{m}]]、地面の距離が隣辺 [[b=5\\,\\text{m}]] です。" },
          { "kind": "p", "text": "[[\\tan(A)=\\frac{12}{5}]]" },
          { "kind": "p", "text": "[[\\boxed{\\tan(A)=2.4}]]" },
          {
            "kind": "p",
            "text": "角度は [[A=\\tan^{-1}(2.4)\\approx67.38^\\circ]] です。垂直の高さは水平のアンカー距離の 2.4 倍で、どんな尺度でも急な支線です。タンジェント比は支線の張力、アンカーの強度、構造の安全性を決定しません。"
          },
          { "kind": "h3", "text": "例 13: クレーンのブームの向きを計算する" },
          { "kind": "p", "text": "単純化されたクレーンのブームは、垂直成分 8 m、水平投影 6 m です。垂直成分が対辺 [[a=8\\,\\text{m}]]、水平投影が隣辺 [[b=6\\,\\text{m}]] です。" },
          { "kind": "p", "text": "[[\\tan(A)=\\frac{8}{6}]]" },
          { "kind": "p", "text": "[[\\boxed{\\tan(A)\\approx1.3333}]]" },
          {
            "kind": "p",
            "text": "対応する角度は約 [[53.13^\\circ]] です。垂直成分は水平投影の約 1.3333 倍です。これは単純化された幾何学の例であり、クレーンの能力や作業の安全性を保証しません。"
          },
          { "kind": "h3", "text": "例 14: ハイキングコースの勾配を推定する" },
          { "kind": "p", "text": "単純化された直線のハイキング区間は、垂直の標高差 120 m、水平距離 800 m です。標高差が対辺 [[a=120\\,\\text{m}]]、水平距離が隣辺 [[b=800\\,\\text{m}]] です。" },
          { "kind": "p", "text": "[[\\tan(A)=\\frac{120}{800}]]" },
          { "kind": "p", "text": "[[\\boxed{\\tan(A)=0.15}]]" },
          {
            "kind": "p",
            "text": "百分率勾配は 15 パーセントで、対応する角度は約 [[8.53^\\circ]] です。この単純化されたモデルは一定の直線勾配を表し、曲がりくねったハイキングコース全体ではありません。"
          },
          { "kind": "h3", "text": "例 15: 機械式ブレースを評価する" },
          { "kind": "p", "text": "斜めの機械式ブレースは、垂直成分 1.5 m、水平成分 2 m です。垂直成分が対辺 [[a=1.5\\,\\text{m}]]、水平成分が隣辺 [[b=2\\,\\text{m}]] です。" },
          { "kind": "p", "text": "[[\\tan(A)=\\frac{1.5}{2}]]" },
          { "kind": "p", "text": "[[\\boxed{\\tan(A)=0.75}]]" },
          {
            "kind": "p",
            "text": "垂直成分は水平成分の 75 パーセントです。この比はブレースの強度、荷重能力、適合性を決定しません。"
          },
          { "kind": "h3", "text": "例 16: 建物への仰角を求める" },
          { "kind": "p", "text": "観察者は建物から水平に 24 m 離れた場所に立っています。建物の頂上は観察者の目の高さから 18 m 上にあります。垂直の差が対辺 [[a=18\\,\\text{m}]]、水平距離が隣辺 [[b=24\\,\\text{m}]] です。" },
          { "kind": "p", "text": "[[\\tan(A)=\\frac{18}{24}]]" },
          { "kind": "p", "text": "[[\\boxed{\\tan(A)=0.75}]]" },
          {
            "kind": "p",
            "text": "単純化された幾何学では仰角は約 [[36.87^\\circ]] です。これは観察者の水平な目の高さに対する頂上への角度であり、必ずしも建物の全高ではありません。"
          }
        ],
        "steps": [],
        "closingParagraphs": [
          "タンジェントは無次元の比ですが、その実用的な価値は、垂直の上昇と水平の移動を比較し、まっすぐな傾斜の急さを表し、仰角を計算し、角度が既知のときに欠けた辺を解くことから来ます。混同しやすい三つの関連量があるので、はっきりさせておきましょう。タンジェント比は垂直の上昇を水平の移動で割ったもの、百分率勾配はタンジェント比に 100 パーセントを掛けたもの、角度は比に逆タンジェントを適用した結果です。タンジェントだけでは、構造の安全性、荷重能力、バリアフリー性、工学的な適合は決して決まりません。"
        ],
        "tables": [
          {
            "headers": ["状況", "対辺 [[a]]", "隣辺 [[b]]", "公式", "比", "勾配", "意味"],
            "rows": [
              ["スロープ", "0.6 m", "8 m", "0.6/8", "0.075", "7.5%", "緩やかな勾配、移動 100 ごとに 7.5 上昇"],
              ["屋根の勾配", "3 m", "4 m", "3/4", "0.75", "75%", "上昇は移動の 75%"],
              ["はしご", "4 m", "3 m", "4/3", "1.3333", "n/a", "高さが足元の距離を上回り、角度は 53.13 度"],
              ["木の仰角", "12 m", "9 m", "12/9", "1.3333", "n/a", "高さは影の長さの 1.3333 倍"],
              ["測量", "15 m", "20 m", "15/20", "0.75", "75%", "標高差は水平距離の 75%"],
              ["道路の勾配", "1.2 m", "24 m", "1.2/24", "0.05", "5%", "5% 勾配であり、5 度の角度ではない"],
              ["階段", "2.4 m", "3.2 m", "2.4/3.2", "0.75", "75%", "上昇は移動の 75%"],
              ["支線", "12 m", "5 m", "12/5", "2.4", "n/a", "急な支線、角度は 67.38 度"],
              ["クレーンのブーム", "8 m", "6 m", "8/6", "1.3333", "n/a", "垂直は水平の 1.3333 倍"],
              ["ハイキングコース", "120 m", "800 m", "120/800", "0.15", "15%", "一定の 15% 勾配"],
              ["機械式ブレース", "1.5 m", "2 m", "1.5/2", "0.75", "n/a", "垂直は水平の 75%"],
              ["建物の仰角", "18 m", "24 m", "18/24", "0.75", "n/a", "仰角は 36.87 度"]
            ]
          }
        ],
        "figures": [
          {
            "alt": "四つのパネル: スロープ 0.075、屋根の勾配 0.75、はしご 1.3333、測量 0.75、それぞれラベル付き三角形",
            "caption": "四つの実用的な計算: スロープ、屋根の勾配、はしご、測量。それぞれ三角形、公式、比付きです。"
          }
        ]
      },
      "sec-angle": {
        "h2": "タンジェントと角度の大きさの関係を理解する",
        "blocks": [
          {
            "kind": "p",
            "text": "タンジェントは基準角が大きくなると増加し、その理由は幾何学が説明します。角 [[A]] が小さいとき、対辺は隣辺に対して短いので、比は 0 の近くに留まります。角が広がると、対辺は隣辺のより長い割合を占めるようになり、比は上昇します。[[45^\\circ]] で 1 を超え、角が [[90^\\circ]] に近づくにつれて際限なく増えます。以下の表は説明用の辺の長さを使っています。角度を決めるのは三角形の絶対的な大きさではなく、比です。"
          }
        ],
        "steps": [],
        "closingParagraphs": [
          "パターンは単純です。対辺が隣辺に対して短いときタンジェントは小さく、[[45^\\circ]] で 1 に等しく、より大きな鋭角では 1 を超え、角が [[0^\\circ]] に近づくとゼロに近づき、角が [[90^\\circ]] に近づくと際限なく増えます。辺の長さが異なっても、同じ角の三角形は同じタンジェント比を持ちます。比が捉えるのは大きさではなく形だからです。"
        ],
        "tables": [
          {
            "headers": ["角 [[A]]", "対辺 [[a]]", "隣辺 [[b]]", "タンジェント比"],
            "rows": [
              ["[[30^\\circ]]", "1", "[[\\sqrt{3}]]", "約 0.5774"],
              ["[[45^\\circ]]", "1", "1", "1"],
              ["[[60^\\circ]]", "[[\\sqrt{3}]]", "1", "約 1.7321"],
              ["[[75^\\circ]]", "約 3.7321", "1", "約 3.7321"]
            ]
          }
        ],
        "figures": [
          {
            "alt": "30 度、45 度、60 度の三つの三角形、タンジェント値は 0.5774、1、1.7321。角度とともにタンジェントは上昇",
            "caption": "角 A が大きくなると、対辺は隣辺のより長い割合を占めるようになるため、tan(A) は上昇します。"
          }
        ]
      },
      "sec-side": {
        "h2": "タンジェントを使って対辺を求める方法",
        "blocks": [
          { "kind": "p", "text": "隣辺と角が既知のとき、タンジェントの公式を変形して対辺を求められます。[[\\tan(A)=a/b]] から始めて、両辺に [[b]] を掛けます。" },
          { "kind": "p", "text": "[[[\\boxed{a=b\\tan(A)}]]]" },
          { "kind": "p", "text": "対辺は隣辺に角のタンジェントを掛けたものに等しくなります。隣辺 [[b=10\\,\\text{m}]]、角 [[A=30^\\circ]] が与えられ、[[\\tan(30^\\circ)=1/\\sqrt{3}\\approx0.5774]] であることが分かっている場合。" },
          { "kind": "p", "text": "[[a=10\\times0.5774]]" },
          { "kind": "p", "text": "[[\\boxed{a\\approx5.774\\,\\text{m}}]]" },
          { "kind": "p", "text": "この角度では、水平 10 m の移動に対して垂直の上昇は約 5.774 m です。" },
          { "kind": "p", "text": "隣辺も、もう一度変形すれば同じように求められます。" },
          { "kind": "p", "text": "[[[\\boxed{b=\\frac{a}{\\tan(A)}}]]]" },
          { "kind": "p", "text": "対辺 [[a=6\\,\\text{m}]]、[[A=45^\\circ]] の場合。[[\\tan(45^\\circ)=1]] なので、[[b=6/1]]、よって [[\\boxed{b=6\\,\\text{m}}]] です。これらは同じ公式の数学的な変形です。このページの計算機は辺の長さからタンジェント比を返します。欠けた辺を直接計算するものではありません。" }
        ],
        "steps": [],
        "closingParagraphs": [],
        "tables": [],
        "figures": []
      },
      "sec-recover": {
        "h2": "タンジェント比から角度を求める方法",
        "blocks": [
          { "kind": "p", "text": "タンジェント比と角度は別の量です。一方は辺の無次元の比較、もう一方は度数で測られます。比が既知で角度が必要なときは、逆タンジェントを使えます。" },
          { "kind": "p", "text": "[[[\\boxed{A=\\tan^{-1}\\left(\\frac{a}{b}\\right)}]]]" },
          { "kind": "p", "text": "逆タンジェントはアークタンジェントとも呼ばれます。[[\\tan(A)=0.75]] が与えられた場合。" },
          { "kind": "p", "text": "[[A=\\tan^{-1}(0.75)]]" },
          { "kind": "p", "text": "[[\\boxed{A\\approx36.87^\\circ}]]" },
          { "kind": "p", "text": "計算機が度数モードに設定されているとき、角度は約 [[36.87^\\circ]] です。" },
          { "kind": "h3", "text": "計算機の角度モードが重要な理由" },
          { "kind": "p", "text": "角度は度数でもラジアンでも測れます。逆タンジェントを適用する前に、関数電卓を意図したモードに設定しておく必要があります。1 周は 360 度または [[2\\pi]] ラジアンなので、[[45^\\circ=\\pi/4]] ラジアンです。タンジェント比自体には度数もラジアンの単位もありません。それらの単位は、そこから回復される角度に適用されます。このページのタンジェント比計算機は比を直接返し、角度は返しません。" }
        ],
        "steps": [],
        "closingParagraphs": [],
        "tables": [],
        "figures": []
      },
      "sec-mistakes": {
        "h2": "タンジェント計算でありがちな間違い",
        "blocks": [
          {
            "kind": "p",
            "text": "タンジェントの間違いの多くは、分数の逆転、辺のラベルの取り違え、比と角度の混同から来ます。結果を信じる前にこのリストを確認してください。"
          }
        ],
        "steps": [
          "公式を逆にして [[a/b]] の代わりに [[b/a]] を計算する。これはタンジェントではなくコタンジェントを返します。[[a=3]]、[[b=4]] のとき、逆にした分数は 1.3333、正しい方は 0.75 を与えます。",
          "タンジェントをサインと混同する。タンジェントは対辺を隣辺で割り、サインは対辺を斜辺で割ります。分母に斜辺があれば、答えはタンジェントではなくサインです。",
          "タンジェントをコサインと混同する。コサインは隣辺を斜辺で割ります。タンジェントは斜辺を一切使わないので、どちらの位置に斜辺があっても比の取り違えの合図です。",
          "タンジェントをコタンジェントと混同する。コタンジェントは逆数で、隣辺÷対辺です。名前が似ているため実際に間違いが起きますが、分数の順序は正確に逆です。",
          "基本のタンジェント公式に斜辺を含める。[[a/b]] に斜辺の役割はありません。計算にそれが現れたら、間違った公式を使っています。",
          "対辺と隣辺を取り違える。どちらも脚なのでラベルを入れ替えがちです。基準角から常になぞりましょう。向かいが対辺、触れているのが隣辺です。",
          "基準角を間違えて辺を特定する。角 [[A]] から角 [[C]] に切り替えると対辺と隣辺のラベルが入れ替わり、比は逆数にひっくり返ります。",
          "タンジェントは 1 未満でなければならないと思い込む。その規則はサインとコサインのものです。鋭角に対するタンジェントに上限はなく、1 を超える結果はまったく有効です。",
          "タンジェント比を度数での角度として報告する。0.75 という結果は比であり、[[0.75^\\circ]] ではありません。これを度数として扱うと、その後の計算すべてに無意味な値が入り込みます。",
          "タンジェント比に測定単位を付けて報告する。割り算で単位は打ち消されるので「0.75 m」は間違いです。素朴な数を書き、単位はあるべき入力測定値に残してください。",
          "ゼロや負の辺の長さを入力する。三角形にゼロや負の辺はあり得ないので、これらの入力は有効な境界ケースではなく、入力ミスか測定の欠落の合図です。",
          "互換性のない測定単位を混ぜる。対辺 3 m と隣辺 40 cm では 7.5 という意味のない数になります。先に一つの単位に変換してください。3 m と 4 m で正しい 0.75 が得られます。",
          "早すぎる丸め。四捨五入した中間結果で計算を続けると誤差が複合します。すべての手順で完全な精度を保ち、最終回答だけを丸めてください。",
          "百分率勾配を度数での角度と混同する。5 パーセント勾配は 0.05 のタンジェントから来ますが、角度は [[\\tan^{-1}(0.05)\\approx2.86^\\circ]] であり、5 度ではありません。勾配と角度は別の量です。",
          "タンジェント比が三角形の絶対的な大きさを決定すると思い込む。タンジェントは形を表し、大きさではありません。対辺 3 cm から 3 km まで、無数の三角形が 0.75 のタンジェントを共有します。比は比率を固定します。実際の長さには少なくとも一つの辺の測定が必要です。"
        ],
        "closingParagraphs": [
          "間違い vs. 正解: 計算付き比較。対辺 [[a=3]]、隣辺 [[b=4]] が与えられています。",
          "間違い: [[4/3\\approx1.3333]]。これは角 [[A]] のコタンジェント比であり、タンジェント比ではありません。分子と分母が逆です。",
          "正解: [[\\tan(A)=3/4=0.75]]。",
          "サインとコサインで検証します。[[c=5]] のとき、[[\\sin(A)=3/5=0.6]]、[[\\cos(A)=4/5=0.8]] です。したがって [[\\sin(A)/\\cos(A)=0.6/0.8=0.75]] となり、タンジェントの計算が確認できます。"
        ],
        "tables": [],
        "figures": []
      },
      "sec-verify": {
        "h2": "タンジェントの結果が正しいか確認する方法",
        "blocks": [
          { "kind": "p", "text": "有効で退化していない直角三角形には二つの正の脚、[[a \\gt 0]] と [[b \\gt 0]] が必要で、単位もそろっている必要があります。したがってタンジェントの結果は正でなければなりません。" },
          { "kind": "p", "text": "[[[\\boxed{\\tan(A)=\\frac{a}{b} \\gt 0}]]]" },
          { "kind": "p", "text": "対辺が隣辺より短いという条件はないので、結果は 1 未満、1、1 超えのいずれにもなり得ます。ゼロや負の結果は通常、無効な入力かラベルの逆転を示します。" },
          { "kind": "h3", "text": "方法 1: 比を確認する" },
          { "kind": "p", "text": "[[\\tan(A)=a/b]] を直接もう一度確認します。[[a=3]]、[[b=4]] のとき、[[\\tan(A)=3/4=0.75]] です。対辺が隣辺より短いので、比は 1 未満になるはずです。手計算が食い違ったら、辺のラベルを間違えたか単位を混ぜています。" },
          { "kind": "h3", "text": "方法 2: ピタゴラスの定理を確認する" },
          { "kind": "p", "text": "必要に応じて斜辺を計算します。[[c=\\sqrt{a^2+b^2}]]。[[a=3]]、[[b=4]] のとき、[[c=\\sqrt{9+16}=5]]、そして [[3^2+4^2=5^2]] です。これで 3-4-5 の直角三角形の寸法が確認できます。斜辺はここでは検証用の値であり、基本のタンジェント公式の一部ではありません。" },
          { "kind": "h3", "text": "方法 3: 逆タンジェントで確認する" },
          { "kind": "p", "text": "タンジェント比 0.75 の場合、[[A=\\tan^{-1}(0.75)\\approx36.87^\\circ]] です。比が 1 未満なので、角度は [[45^\\circ]] 未満になるはずです。そうでなければ辺のラベルが入れ替わっている可能性が高いです。小さな差は丸めから生じることがあります。" }
        ],
        "steps": [],
        "closingParagraphs": [],
        "tables": [],
        "figures": []
      },
      "sec-vs": {
        "h2": "タンジェント vs. サイン、コサイン、コタンジェント",
        "blocks": [
          {
            "kind": "p",
            "text": "各比は異なる辺のペアを比較しますが、基準角と辺のラベルは同じです。"
          }
        ],
        "steps": [],
        "closingParagraphs": [
          "タンジェントとコタンジェントは逆数のペアです。[[\\cot(A)=1/\\tan(A)]]。[[\\tan(A)=0.75]] なら、[[\\cot(A)\\approx1.3333]] です。両方の脚が既知のときや、上昇÷移動の問題ではタンジェントを使いましょう。斜辺が関わるときはサインやコサイン、比較が逆方向に走るときはコタンジェントを使います。タンジェントを中心に据えましょう。隣の比にはそれぞれ完全な解説のページがあります。",
          "隣の比については、<a href=\"/sine-ratio-calculator/\" class=\"text-primary hover:underline\">サイン比計算機</a>、<a href=\"/cosine-ratio-calculator/\" class=\"text-primary hover:underline\">コサイン比計算機</a>、<a href=\"/cotangent-ratio-calculator/\" class=\"text-primary hover:underline\">コタンジェント比計算機</a>、<a href=\"/secant-ratio-calculator/\" class=\"text-primary hover:underline\">セカント比計算機</a>、<a href=\"/cosecant-ratio-calculator/\" class=\"text-primary hover:underline\">コセカント比計算機</a>をご覧ください。"
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
        ],
        "figures": []
      },
      "sec-related": {
        "h2": "関連する三角関数計算機を探す",
        "blocks": [],
        "steps": [],
        "closingParagraphs": [],
        "related": [
          { "name": "サイン比計算機", "desc": "対辺と斜辺から角のサインを計算します。" },
          { "name": "コサイン比計算機", "desc": "隣辺と斜辺から角のコサインを計算します。" },
          { "name": "コタンジェント比計算機", "desc": "二つの脚からタンジェントの逆数であるコタンジェントを計算します。" },
          { "name": "セカント比計算機", "desc": "斜辺と隣辺から角のセカントを計算します。" },
          { "name": "コセカント比計算機", "desc": "斜辺と対辺から角のコセカントを計算します。" },
          { "name": "直角三角形の角度計算機", "desc": "既知の辺から直角三角形の未知の角を求めます。" },
          { "name": "直角三角形の辺の計算機", "desc": "角と既知の辺から直角三角形の未知の辺を求めます。" }
        ],
        "tables": [],
        "figures": []
      }
    },
    "faqs": [
      {
        "question": "直角三角形のタンジェント比の公式は何ですか?",
        "answer": "tan(A) = a / b です。対辺 a を隣辺 b で割ります。対辺 3 cm、隣辺 4 cm の場合、結果は 3/4 = 0.75 です。この小数自体が完全な答えであり、無次元の比であって角度ではありません。"
      },
      {
        "question": "二つの辺の長さからタンジェントを計算する方法は?",
        "answer": "基準角 A を特定し、対辺 a と隣辺 b を同じ単位で測り、両方が正であることを確認してから割ります。tan(A) = a / b です。このページでは、最初の欄に対辺、二番目の欄に隣辺を入力し、「tan(A) を計算」をクリックします。"
      },
      {
        "question": "なぜタンジェントは斜辺を使わないのですか?",
        "answer": "タンジェントは二つの垂直な脚を直接比較します。垂直と水平です。斜辺はこの比較に新しい情報を加えないので、基本の公式には対辺と隣辺だけで十分です。別の計算で必要になれば、ピタゴラスの定理が後から斜辺を回復できます。"
      },
      {
        "question": "タンジェントは 1 を超えることがありますか?",
        "answer": "はい。鋭角に対するタンジェントに上限はありません。対辺が隣辺より長いとき、比は 1 を超えます。a = 6、b = 3 のとき、tan(A) = 6/3 = 2 です。1 を超える結果は数学的に有効であり、計算機のエラーを示しません。"
      },
      {
        "question": "タンジェント値 0.75 の意味は何ですか?",
        "answer": "対辺が隣辺の 75 パーセントであることです。3-4-5 の三角形では、角 A の向かいの辺が 3 単位、角 A に隣り合う辺が 4 単位なので、tan(A) = 3/4 = 0.75 です。これは三角形の形を表し、0.75 度の角ではありません。"
      },
      {
        "question": "タンジェントとコタンジェントの違いは何ですか?",
        "answer": "互いに逆数です。タンジェントは対辺を隣辺で割り (a/b)、コタンジェントは隣辺を対辺で割ります (b/a)。tan(A) = 0.75 なら、cot(A) = 1/0.75、約 1.3333 です。分数の順序が正確に逆になっています。"
      },
      {
        "question": "タンジェント比から角度を計算する方法は?",
        "answer": "比に逆タンジェントを適用します。A = tan^-1(a/b) です。tan(A) = 0.75 の場合、A = tan^-1(0.75)、約 36.87 度です。先に関数電卓を度数モードに設定してください。このページの計算機は比を返し、角度は返しません。"
      },
      {
        "question": "タンジェントを使って対辺を求める方法は?",
        "answer": "公式を a = b * tan(A) に変形します。隣辺が 10 m、角 A が 30 度の場合、tan(30°) は約 0.5774 なので、a = 10 * 0.5774、約 5.774 m です。これは手作業の変形です。このページの計算機は辺の長さから比を返し、欠けた辺は返しません。"
      },
      {
        "question": "タンジェントを使って隣辺を求める方法は?",
        "answer": "公式を b = a / tan(A) に変形します。対辺が 6 m、角 A が 45 度の場合、tan(45°) = 1 なので、b = 6/1 = 6 m です。これは同じ公式の数学的な変形であり、このページの計算機の別モードではありません。"
      },
      {
        "question": "タンジェントは傾き (slope) と同じですか?",
        "answer": "密接に関係しています。上昇÷移動としての傾きは、タンジェントが行うのと同じ比較です。垂直の変化を水平の変化で割ったものです。傾き 0.05 と書く道路技術者と、tan(A) = 0.05 と書く三角法の生徒は、同じ比を表しています。用語は文脈によって異なりますが、数学は同じです。"
      },
      {
        "question": "百分率勾配と度数での角度の違いは何ですか?",
        "answer": "百分率勾配はタンジェント比の 100 倍です。0.05 のタンジェントは 5% 勾配を与えます。角度は比の逆タンジェントです。tan^-1(0.05) は約 2.86 度です。したがって 5% 勾配は 5 度の角度ではありません。この二つを混同することは、最も多いタンジェントの間違いの一つです。"
      },
      {
        "question": "建設や測量でタンジェントはどう使われますか?",
        "answer": "タンジェントは垂直の上昇と水平の移動を比較します。これは屋根の勾配、スロープの傾斜、道路の勾配、階段の急さがまさに表すものです。測量士はこれを使って、標高差と水平距離を仰角に変換します。いずれの場合も、比だけでは構造の安全性や基準への適合を保証しません。"
      }
    ],
    "faqHeading": "よくある質問",
    "relatedHeading": "関連する三角関数計算機を探す",
    "conclusion": {
      "h2": "自信を持ってタンジェント比を使いましょう",
      "paragraphs": [
        "タンジェントは二つの脚の比です。対辺を隣辺で割れば、水平の移動 1 単位ごとに何単位の垂直の上昇が伴うかを表したことになります。公式 [[\\tan(A)=a/b]] には二つの測定値だけで十分で、答えは常に無次元の数であり、1 未満、1、1 超えのいずれにもなり得て、基準角が大きくなると増加します。欠けた辺が必要なときは [[a=b\\tan(A)]] が対辺を回復し、角度が必要なときは [[A=\\tan^{-1}(a/b)]] がそれを回復します。スロープ、屋根、はしご、教科書の 3-4-5 のいずれでも、方法は変わりません。対辺を特定し、隣辺を特定し、割り、正の比のチェックで検証します。"
      ]
    }
  }
,
  "ko": {
    "tocHeading": "이 가이드의 내용",
    "tocItems": {
      "sec-intro": "탄젠트 비율 계산기란?",
      "sec-triangle": "대변과 인접변 이해하기",
      "sec-whatis": "탄젠트 비율 이해하기",
      "sec-formula": "탄젠트 공식의 원리",
      "sec-howto": "탄젠트 비율 계산기 사용법",
      "sec-examples": "탄젠트 계산 단계별 예제",
      "sec-applications": "탄젠트 비율의 실생활 예제",
      "sec-angle": "탄젠트와 각도 크기의 관계 이해하기",
      "sec-side": "탄젠트를 이용해 대변 구하는 방법",
      "sec-recover": "탄젠트 비율에서 각도 구하는 방법",
      "sec-mistakes": "탄젠트 계산 시 흔한 실수",
      "sec-verify": "탄젠트 결과가 유효한지 확인하는 방법",
      "sec-vs": "탄젠트 vs. 사인, 코사인, 코탄젠트",
      "sec-faq": "자주 묻는 질문",
      "sec-related": "관련 삼각함수 계산기 살펴보기"
    },
    "sections": {
      "sec-intro": {
        "h2": "탄젠트 비율 계산기란?",
        "blocks": [
          {
            "kind": "p",
            "text": "탄젠트 비율 계산기는 하나의 질문에 답합니다. 직각삼각형의 예각에 대해, 각의 맞은편 변이 각에 인접한 변과 비교해 어떠한지를 묻는 질문입니다. 대변과 인접변을 입력하면 도구가 대변을 인접변으로 나누어 [[\\tan(A)=a/b]] 를 반환합니다. 직각삼각형의 대변이 3 cm, 인접변이 4 cm이면 [[\\tan(A)=3/4=0.75]] 입니다. 이 0.75가 탄젠트 비율입니다. 대변이 인접변 길이의 75 퍼센트임을 알려줍니다. 각도가 아니므로 [[0.75^\\circ]] 로 읽어서는 안 됩니다. 빗변은 이 계산에 전혀 등장하지 않습니다. 대변과 인접변만으로 충분합니다. 탄젠트는 기본 삼각비 중 하나이며, 그 특별한 강점은 수직 상승과 수평 이동을 비교하는 데 있습니다. 그래서 지붕 경사, 도로 경사도, 경사로 등에 등장합니다. 결과는 무차원 수입니다. 센티미터나 도 단위의 측정값이 아니라 두 길이의 순수한 비교입니다. 필요한 것이 도 단위의 각도라면 역탄젠트가 비율을 도수로 바꿔줍니다."
          }
        ],
        "steps": [],
        "closingParagraphs": [],
        "tables": [],
        "figures": []
      },
      "sec-triangle": {
        "h2": "대변과 인접변 이해하기",
        "blocks": [
          { "kind": "h3", "text": "직각삼각형이란?" },
          {
            "kind": "p",
            "text": "직각삼각형은 한 각이 정확히 [[90^\\circ]] 입니다. 수평 바닥과 만나는 벽처럼 두 수직선 사이의 각입니다. 빗변은 그 직각의 맞은편에 있고, 모서리의 대각선 전체를 가로질러야 하므로 항상 가장 긴 변입니다. 나머지 두 각은 남은 90 도를 나누어 가지므로 둘 다 예각입니다. 두 다리는 직각에서 만나 서로 수직이며, 빗변과의 관계 덕분에 직각삼각형 삼각법이 가능합니다."
          },
          { "kind": "h3", "text": "대변이란?" },
          {
            "kind": "p",
            "text": "대변 [[a]] 는 기준각 [[A]] 의 정반대편에 있는 변으로, 그 꼭짓점에 절대 닿지 않는 유일한 변입니다. 실제 문제에서는 수직 상승, 표고 차이, 높이 역할을 하는 경우가 많습니다. 사다리가 벽에 닿는 높이, 지붕의 상승, 크레인 붐의 수직 성분 등입니다. 어느 변이 대변인지는 선택한 기준각에 따라 달라지므로, 각 [[A]] 에서 각 [[C]] 로 바꾸면 대변과 인접변 이름이 바뀝니다. 탄젠트 공식의 분자에 나타나는 이유는, 탄젠트가 각 맞은편 변이 각 옆 변에 비해 얼마나 큰지를 재기 때문입니다."
          },
          { "kind": "h3", "text": "인접변이란?" },
          {
            "kind": "p",
            "text": "인접변 [[b]] 는 기준각 [[A]] 에 닿으면서 빗변이 아닌 다리입니다. 실제 문제에서는 수평 이동이나 지면 거리 역할을 하는 경우가 많습니다. 벽에서 사다리 밑동까지의 거리, 지붕의 수평 이동, 태양 각도 문제의 그림자 길이 등입니다. 빗변이 직각 맞은편 변이므로 인접변은 절대 빗변이 아니며, 매번 확인할 가치가 있는 점입니다. 탄젠트 공식의 분모에 나타나므로, 탄젠트는 가장 긴 변이 아니라 이 다리에 대해 대변을 비교합니다."
          },
          { "kind": "h3", "text": "빗변이란?" },
          {
            "kind": "p",
            "text": "빗변 [[c]] 는 직각 맞은편 변입니다. 어떤 도면에서든 [[90^\\circ]] 모서리를 표시하는 작은 정사각형 맞은편에 있으며, 어느 다리보다 엄격히 깁니다. 실제 문제에서는 경사진 길이 역할을 하는 경우가 많습니다. 사다리, 지붕 서까래, 지주선, 대각 버팀목 등입니다. 기본 탄젠트 계산에는 필요 없습니다. 탄젠트 공식이 두 다리를 직접 비교하기 때문입니다. 다른 문제에 필요하다면 피타고라스 정리가 두 다리에서 이를 계산합니다. [[c=\\sqrt{a^2+b^2}]] 입니다."
          }
        ],
        "steps": [],
        "closingParagraphs": [
          "탄젠트는 두 다리를 사용하며 빗변을 필요로 하지 않습니다. 이 변 이름 규칙을 일관되게 지키세요. [[a]] 는 각 [[A]] 의 대변, [[b]] 는 각 [[A]] 의 인접변, [[c]] 는 [[B]] 에서 직각 맞은편의 빗변입니다."
        ],
        "tables": [],
        "figures": [
          {
            "alt": "좌하단에 각 A가 있는 직각삼각형, 금색 대변 a, 파란색 인접변 b, tan(A)=a/b",
            "caption": "각 A는 좌하단에 있습니다. 탄젠트는 금색 대변 a와 파란색 인접변 b를 사용하며, 빗변 c는 사용하지 않습니다."
          }
        ]
      },
      "sec-whatis": {
        "h2": "탄젠트 비율 이해하기",
        "blocks": [
          { "kind": "p", "text": "예각 [[A]] 의 탄젠트는 대변을 인접변으로 나눈 값입니다." },
          { "kind": "p", "text": "[[[\\boxed{\\tan(A)=\\frac{a}{b}}]]]" },
          {
            "kind": "p",
            "text": "여기서 [[\\tan(A)]] 는 각 [[A]] 의 탄젠트, [[a]] 는 대변, [[b]] 는 인접변을 의미합니다. 삼각형을 밑변이 수평 방향을 따르도록 놓으면 탄젠트는 수직 다리와 수평 다리를 비교합니다. 가장 순수한 형태의 상승 대 이동입니다."
          },
          { "kind": "h3", "text": "SOH-CAH-TOA 이해하기" },
          { "kind": "p", "text": "학생들은 세 가지 기본 비율을 하나의 기억법으로 외웁니다." },
          { "kind": "p", "text": "SOH: 사인 = 대변 / 빗변. CAH: 코사인 = 인접변 / 빗변. TOA: 탄젠트 = 대변 / 인접변." },
          {
            "kind": "p",
            "text": "TOA는 탄젠트 공식 [[\\tan(A)=a/b]] 에 해당합니다. T는 탄젠트, O는 대변을 위에, A는 인접변을 아래에 놓습니다. 이 기억법 덕분에 숫자가 계산에 들어가기 전에 올바른 분자와 분모를 고를 수 있습니다. 이 절은 탄젠트에 집중합니다. 나머지 두 비율은 각자의 페이지가 있습니다."
          },
          { "kind": "h3", "text": "탄젠트가 빗변을 사용하지 않는 이유" },
          { "kind": "p", "text": "탄젠트는 두 수직 다리를 직접 비교하므로 빗변은 불필요합니다. [[a=3]], [[b=4]] 일 때." },
          { "kind": "p", "text": "[[\\tan(A)=\\frac{3}{4}=0.75]]" },
          {
            "kind": "p",
            "text": "이 비율은 이미 대변이 인접변과 어떻게 비교되는지에 대한 모든 것을 담고 있습니다. 빗변을 끌어들이면 묻는 질문 자체가 바뀝니다. 다른 문제에 빗변이 필요하다면 피타고라스 정리가 다리에서 이를 계산합니다. 탄젠트 자체는 절대 묻지 않습니다."
          },
          { "kind": "h3", "text": "탄젠트가 무차원 비율인 이유" },
          { "kind": "p", "text": "길이를 길이로 나누면 물리 단위가 상쇄됩니다. 단위가 호환될 때." },
          { "kind": "p", "text": "[[\\frac{3\\,\\text{m}}{4\\,\\text{m}}=0.75]]" },
          {
            "kind": "p",
            "text": "미터가 상쇄되고 순수한 숫자만 남습니다. 300 cm와 400 cm에서도 같은 비율이 나옵니다. 단위 변경이 양쪽 변에 똑같이 영향을 주기 때문입니다. 유일한 조건은 두 측정에 호환되는 단위를 쓰는 것입니다. 미터와 센티미터를 섞으면 무의미한 숫자가 되지만, 먼저 변환하면 비율은 정직하게 유지됩니다."
          },
          { "kind": "h3", "text": "탄젠트 값 0.75의 의미" },
          {
            "kind": "p",
            "text": "[[\\tan(A)=0.75]] 는 대변이 인접변의 0.75배, 즉 같은 직선 기하학에서 수평 100 단위마다 수직 75 단위의 상승임을 의미합니다. 수평 100 cm마다 75 cm씩 오르는 지붕을 상상해 보세요. 0.75가 나타내는 것이 바로 그것입니다. 각이 [[0.75^\\circ]] 라는 뜻이 아닙니다. 비율과 각도는 다른 양이며, 이를 혼동하는 것은 삼각법에서 가장 흔한 실수 중 하나입니다."
          },
          { "kind": "h3", "text": "탄젠트 값 1의 의미" },
          {
            "kind": "p",
            "text": "[[\\tan(A)=1]] 은 [[a=b]] 를 의미합니다. 대변과 인접변이 같습니다. 이등변 직각삼각형은 두 다리가 같고, 두 예각이 90 도를 똑같이 나누어 가져야 하므로 각각 [[45^\\circ]] 입니다."
          },
          { "kind": "p", "text": "[[A=45^\\circ]]" },
          {
            "kind": "p",
            "text": "다리가 같고, 예각이 같고, 탄젠트는 정확히 1입니다. 이것이 탄젠트 눈금의 균형점입니다. 1 미만에서는 삼각형이 높이보다 너비가 넓고, 1을 넘으면 너비보다 높습니다."
          },
          { "kind": "h3", "text": "탄젠트가 1보다 클 수 있는 이유" },
          {
            "kind": "p",
            "text": "사인이나 코사인과 달리 탄젠트는 예각에 대한 상한이 없습니다. 대변이 인접변을 앞지르면 비율은 문제없이 1을 넘습니다. [[a=6]], [[b=3]] 일 때."
          },
          { "kind": "p", "text": "[[\\tan(A)=\\frac{6}{3}=2]]" },
          {
            "kind": "p",
            "text": "대변은 인접변의 두 배 길이입니다. 1을 넘는 탄젠트 값은 수학적으로 유효하며 계산기 오류를 나타내지 않습니다. 벽 가까이에 세운 키 큰 사다리 같은 가파른 삼각형을 나타낼 뿐입니다."
          },
          { "kind": "h3", "text": "탄젠트와 사인, 코사인의 관계" },
          { "kind": "p", "text": "나머지 두 비율부터 시작합니다." },
          { "kind": "p", "text": "[[\\sin(A)=\\frac{a}{c}]]" },
          { "kind": "p", "text": "[[\\cos(A)=\\frac{b}{c}]]" },
          { "kind": "p", "text": "사인을 코사인으로 나누면 빗변이 상쇄됩니다." },
          { "kind": "p", "text": "[[[\\frac{\\sin(A)}{\\cos(A)}=\\frac{a/c}{b/c}=\\frac{a}{b}]]]" },
          { "kind": "p", "text": "따라서." },
          { "kind": "p", "text": "[[[\\boxed{\\tan(A)=\\frac{\\sin(A)}{\\cos(A)}}]]]" },
          {
            "kind": "p",
            "text": "이 항등식은 대변 대 인접변 정의와 일치하며 유용한 상호 검증이 됩니다. 같은 각에 대한 탄젠트 결과는 사인을 코사인으로 나눈 값과 같아야 합니다."
          }
        ],
        "steps": [],
        "closingParagraphs": [],
        "tables": [],
        "figures": [
          {
            "alt": "세 단계: 3-4-5 삼각형, 탄젠트 공식 tan(A)=a/b, 결과 0.75, 대변은 인접변의 75퍼센트",
            "caption": "세 단계: 3-4-5 삼각형에 이름을 붙이고, tan(A) = a/b를 쓴 뒤, 3을 4로 나누어 0.75를 구합니다."
          }
        ]
      },
      "sec-formula": {
        "h2": "탄젠트 공식의 원리",
        "blocks": [
          { "kind": "p", "text": "정의부터 시작합니다." },
          { "kind": "p", "text": "[[\\tan(A)=\\frac{\\text{Opposite}}{\\text{Adjacent}}]]" },
          { "kind": "p", "text": "다음으로 이 페이지의 기호를 사용합니다." },
          { "kind": "p", "text": "[[[\\boxed{\\tan(A)=\\frac{a}{b}}]]]" },
          {
            "kind": "p",
            "text": "대변이 분자에 들어가는 이유는 탄젠트가 각 맞은편 변의 크기를 재기 때문이고, 인접변이 분모에 들어가는 이유는 비교 대상이 되는 변이기 때문입니다. 둘을 바꾸면 코탄젠트라는 완전히 다른 비율이 됩니다."
          },
          { "kind": "h3", "text": "완전 풀이 예제: 3-4-5 직각삼각형" },
          { "kind": "p", "text": "대변 [[a=3\\,\\text{cm}]], 인접변 [[b=4\\,\\text{cm}]], 빗변 [[c=5\\,\\text{cm}]] 이 주어졌습니다." },
          { "kind": "p", "text": "1단계: 공식을 씁니다. [[\\tan(A)=a/b]]" },
          { "kind": "p", "text": "2단계: 알려진 값을 대입합니다. [[\\tan(A)=3/4]]" },
          { "kind": "p", "text": "3단계: 나눕니다. [[\\boxed{\\tan(A)=0.75}]]" },
          { "kind": "p", "text": "4단계: 결과를 해석합니다. 대변은 인접변 길이의 75 퍼센트입니다." },
          { "kind": "p", "text": "5단계: 삼각형을 검증합니다. [[3^2+4^2=5^2]], 즉 [[9+16=25]] 입니다. 변의 길이는 진짜 직각삼각형과 일치합니다." },
          { "kind": "h3", "text": "비율에서 각도 구하기" },
          { "kind": "p", "text": "각도 자체가 필요하다면 비율에 역탄젠트를 적용합니다." },
          { "kind": "p", "text": "[[A=\\tan^{-1}(0.75)]]" },
          { "kind": "p", "text": "[[\\boxed{A\\approx36.87^\\circ}]]" },
          {
            "kind": "p",
            "text": "역탄젠트는 아크탄젠트라고도 합니다. 탄젠트 비율 계산과 각도 계산은 별개의 연산입니다. 비율은 삼각형의 모양을 나타내고, 역탄젠트는 그 모양을 도수로 바꿉니다. 이 페이지의 탄젠트 비율 계산기는 비율을 반환합니다. 각도를 구하는 것은 공학용 계산기에서의 다음 단계입니다."
          }
        ],
        "steps": [],
        "closingParagraphs": [],
        "tables": [],
        "figures": []
      },
      "sec-howto": {
        "h2": "탄젠트 비율 계산기 사용법",
        "blocks": [
          {
            "kind": "p",
            "text": "아래 단계는 이 페이지의 실제 인터페이스에 대응합니다. 각 단계가 중요합니다. 탄젠트 결과는 그 뒤에 있는 두 측정값만큼만 신뢰할 수 있기 때문입니다."
          }
        ],
        "steps": [
          "기준각 [[A]] 를 정합니다. 탄젠트는 항상 하나의 예각에서 출발합니다. 먼저 이름을 붙여두면 어느 변이 대변인지 인접변인지 확정됩니다.",
          "대변 [[a]] 를 찾습니다. 각 [[A]] 의 정반대편입니다. 이 변은 각의 꼭짓점에 절대 닿지 않습니다.",
          "인접변 [[b]] 를 찾습니다. 각 [[A]] 에 닿으면서 빗변이 아닌 변입니다. 실수로 빗면 변을 잡지 않았는지 다시 확인하세요.",
          "두 변의 길이를 구하거나 측정합니다. 줄자, 축척 도면, 알려진 사양 중 어느 것이든 괜찮습니다. 숫자가 같은 삼각형을 나타내기만 하면 됩니다.",
          "첫 번째 입력 칸에 대변 길이를 입력합니다. 이것이 분수의 분자입니다.",
          "두 번째 입력 칸에 인접변 길이를 입력합니다. 이것이 분모입니다.",
          "사용 가능한 단위 선택기로 호환되는 측정 단위를 선택합니다. 두 입력 모두 같은 단위여야 하며, 나누기 전에 하나로 변환되어야 합니다.",
          "두 측정값이 모두 양수인지 확인합니다. 0이나 음수인 변은 실제 삼각형에 속할 수 없습니다.",
          "tan(A) 계산을 클릭합니다. 도구가 대변을 인접변으로 나눕니다.",
          "결과 탄젠트 비율을 읽습니다. 답은 도도 길이 단위도 붙지 않은 순수한 숫자입니다.",
          "결과가 1보다 작은지, 같은지, 큰지 확인합니다. 1 미만은 삼각형이 높이보다 너비가 넓다는 뜻, 정확히 1은 다리가 같다는 뜻, 1 초과는 대변이 더 길다는 뜻입니다.",
          "입력을 지우고 새 계산을 시작하려면 재설정을 사용하세요. 새 입력에는 새 시작이 어울리며, 이전 문제의 잔여 숫자가 아닙니다."
        ],
        "closingParagraphs": [
          "이 계산기는 빗변도 각도 입력도 필요로 하지 않습니다. 하나의 연산, 나눗셈 [[a/b]] 을 수행하며, 여러분이 지정한 두 다리에 정확히 적용합니다."
        ],
        "tables": [],
        "figures": []
      },
      "sec-examples": {
        "h2": "탄젠트 계산 단계별 예제",
        "blocks": [
          {
            "kind": "p",
            "text": "실용적 응용에 앞서 네 가지 풀이 예제로 핵심 기술을 익힙니다. 각각 같은 리듬을 따릅니다. 공식을 쓰고, 대입하고, 나누고, 해석합니다."
          },
          { "kind": "h3", "text": "예제 1: 3-4-5 직각삼각형" },
          { "kind": "p", "text": "[[a=3\\,\\text{cm}]], [[b=4\\,\\text{cm}]], [[c=5\\,\\text{cm}]] 이 주어졌습니다." },
          { "kind": "p", "text": "[[\\tan(A)=\\frac{3}{4}]]" },
          { "kind": "p", "text": "[[\\boxed{\\tan(A)=0.75}]]" },
          {
            "kind": "p",
            "text": "대변은 인접변 길이의 75 퍼센트입니다. 여기서는 대변이 짧은 쪽 다리이므로 비율은 1 미만이 되어 높이보다 너비가 넓은 삼각형을 나타냅니다."
          },
          { "kind": "h3", "text": "예제 2: 5-12-13 직각삼각형" },
          { "kind": "p", "text": "대변 [[a=5\\,\\text{m}]], 인접변 [[b=12\\,\\text{m}]], 빗변 [[c=13\\,\\text{m}]] 이 주어졌습니다." },
          { "kind": "p", "text": "[[\\tan(A)=\\frac{5}{12}]]" },
          { "kind": "p", "text": "[[\\boxed{\\tan(A)\\approx0.4167}]]" },
          {
            "kind": "p",
            "text": "대변은 인접변 길이의 약 41.67 퍼센트입니다. 5-12-13 삼중항은 또 다른 피타고라스 삼중항이므로 [[5^2+12^2=13^2]] 가 진짜 직각삼각형임을 확인합니다."
          },
          { "kind": "h3", "text": "예제 3: 45-45-90 삼각형" },
          { "kind": "p", "text": "대변 [[a=1\\,\\text{cm}]], 인접변 [[b=1\\,\\text{cm}]], 빗변 [[c=\\sqrt{2}\\,\\text{cm}]] 이 주어졌습니다." },
          { "kind": "p", "text": "[[\\tan(45^\\circ)=\\frac{1}{1}]]" },
          { "kind": "p", "text": "[[\\boxed{\\tan(45^\\circ)=1}]]" },
          {
            "kind": "p",
            "text": "같은 다리는 탄젠트 비율 1을 만듭니다. 이것은 탄젠트 눈금의 자연스러운 중간점이며 외워둘 가치가 있는 값입니다. 두 다리가 일치할 때는 언제나 예각이 각각 45 도입니다."
          },
          { "kind": "h3", "text": "예제 4: 30-60-90 삼각형" },
          { "kind": "p", "text": "기준각 [[A=60^\\circ]] 에 대해 대변 [[a=\\sqrt{3}\\,\\text{cm}]], 인접변 [[b=1\\,\\text{cm}]], 빗변 [[c=2\\,\\text{cm}]] 을 사용합니다." },
          { "kind": "p", "text": "[[\\tan(60^\\circ)=\\frac{\\sqrt{3}}{1}]]" },
          { "kind": "p", "text": "[[\\boxed{\\tan(60^\\circ)\\approx1.7321}]]" },
          {
            "kind": "p",
            "text": "대변이 인접변보다 길므로 60 도 각에 마땅하듯 비율은 1을 넘습니다. 여각과 비교해 보세요."
          },
          { "kind": "p", "text": "[[\\tan(30^\\circ)=\\frac{1}{\\sqrt{3}}\\approx0.5774]]" },
          {
            "kind": "p",
            "text": "여각 관계의 예각들의 탄젠트 값은 역수입니다. 기준각을 바꾸면 대변과 인접변 이름이 바뀌기 때문입니다. [[0.5774 \\times 1.7321 \\approx 1]] 이 역수 관계를 확인합니다."
          }
        ],
        "steps": [],
        "closingParagraphs": [],
        "tables": [],
        "figures": []
      },
      "sec-applications": {
        "h2": "탄젠트 비율의 실생활 예제",
        "blocks": [
          {
            "kind": "p",
            "text": "탄젠트가 실무 세계에서 확고한 자리를 차지한 이유는, 많은 현실 문제가 실은 상승 대 이동 문제로 변장하고 있기 때문입니다. 열두 가지 풀이 예제가 경사로, 지붕, 사다리, 측량선에 걸쳐 이 패턴의 반복을 보여줍니다."
          },
          { "kind": "h3", "text": "예제 5: 경사로 기울기 계산" },
          { "kind": "p", "text": "단순화된 경사로는 수평 8 m에 대해 0.6 m 상승합니다. 수직 상승이 대변 [[a=0.6\\,\\text{m}]], 수평 이동이 인접변 [[b=8\\,\\text{m}]] 입니다." },
          { "kind": "p", "text": "[[\\tan(A)=\\frac{0.6}{8}]]" },
          { "kind": "p", "text": "[[\\boxed{\\tan(A)=0.075}]]" },
          {
            "kind": "p",
            "text": "퍼센트 경사는 [[0.075 \\times 100\\%=7.5\\%]], 각도는 [[A=\\tan^{-1}(0.075)\\approx4.29^\\circ]] 입니다. 경사로는 수평 100 단위마다 수직 7.5 단위 상승합니다. 이 계산은 접근성이나 건축 기준 적합을 보장하지 않습니다."
          },
          { "kind": "h3", "text": "예제 6: 지붕 경사 계산" },
          { "kind": "p", "text": "지붕은 수평 4 m에 대해 3 m 상승합니다. 수직 상승이 대변 [[a=3\\,\\text{m}]], 수평 이동이 인접변 [[b=4\\,\\text{m}]] 입니다." },
          { "kind": "p", "text": "[[\\tan(A)=\\frac{3}{4}]]" },
          { "kind": "p", "text": "[[\\boxed{\\tan(A)=0.75}]]" },
          {
            "kind": "p",
            "text": "지붕은 수평 1 단위마다 0.75 단위 상승합니다. 75 퍼센트 경사이며, 경사각은 [[A=\\tan^{-1}(0.75)\\approx36.87^\\circ]] 입니다. 지붕 경사는 수평 12 인치당 상승 인치 같은 전통 단위의 상승 대 이동으로도 표현됩니다. 겉모습은 달라도 같은 비율입니다. 이 비율은 완전한 지붕 설계 평가가 되지 않습니다."
          },
          { "kind": "h3", "text": "예제 7: 사다리 각도 구하기" },
          { "kind": "p", "text": "사다리가 벽을 4 m 높이까지 닿고, 밑동은 벽에서 수평으로 3 m 떨어져 있습니다. 각 [[A]] 는 사다리와 지면 사이에 있습니다. 수직 높이가 대변 [[a=4\\,\\text{m}]], 지면 거리가 인접변 [[b=3\\,\\text{m}]] 입니다." },
          { "kind": "p", "text": "[[\\tan(A)=\\frac{4}{3}]]" },
          { "kind": "p", "text": "[[\\boxed{\\tan(A)\\approx1.3333}]]" },
          {
            "kind": "p",
            "text": "각도는 [[A=\\tan^{-1}(4/3)\\approx53.13^\\circ]] 입니다. 수직 높이가 수평 거리보다 크므로 비율은 1을 넘습니다. 이 예제는 기하학을 설명하는 것으로, 사다리가 안전하게 설치되었는지를 보장하지 않습니다."
          },
          { "kind": "h3", "text": "예제 8: 나무까지의 앙각 추정" },
          { "kind": "p", "text": "나무 높이는 12 m이고 평평한 지면의 그림자 길이는 9 m입니다. 햇빛이 단순화된 직각삼각형 모델을 만든다고 가정합니다. 나무 높이가 대변 [[a=12\\,\\text{m}]], 그림자 길이가 인접변 [[b=9\\,\\text{m}]] 입니다." },
          { "kind": "p", "text": "[[\\tan(A)=\\frac{12}{9}]]" },
          { "kind": "p", "text": "[[\\boxed{\\tan(A)\\approx1.3333}]]" },
          {
            "kind": "p",
            "text": "높이는 그림자 길이의 약 1.3333배이며, 대응하는 기하학적 각도는 약 [[53.13^\\circ]] 입니다. 이 예제는 평평한 지면, 수직인 나무, 직선 그림자 모델을 가정합니다."
          },
          { "kind": "h3", "text": "예제 9: 표고 차이 측량" },
          { "kind": "p", "text": "측량 결과 수평 20 m에 대해 수직 15 m의 표고 차이가 측정되었습니다. 표고 차이가 대변 [[a=15\\,\\text{m}]], 수평 거리가 인접변 [[b=20\\,\\text{m}]] 입니다." },
          { "kind": "p", "text": "[[\\tan(A)=\\frac{15}{20}]]" },
          { "kind": "p", "text": "[[\\boxed{\\tan(A)=0.75}]]" },
          {
            "kind": "p",
            "text": "표고 차이는 수평 거리의 0.75배이며, 대응하는 각도는 약 [[36.87^\\circ]] 입니다. 실제 측량에서는 이 단순 모델을 넘어 측기 높이 조정, 보정, 추가 측정이 필요할 수 있습니다."
          },
          { "kind": "h3", "text": "예제 10: 도로 퍼센트 경사 계산" },
          { "kind": "p", "text": "단순화된 도로 구간은 수평 24 m에 대해 1.2 m 상승합니다. 수직 상승이 대변 [[a=1.2\\,\\text{m}]], 수평 이동이 인접변 [[b=24\\,\\text{m}]] 입니다." },
          { "kind": "p", "text": "[[\\tan(A)=\\frac{1.2}{24}]]" },
          { "kind": "p", "text": "[[\\boxed{\\tan(A)=0.05}]]" },
          {
            "kind": "p",
            "text": "퍼센트 경사는 [[0.05 \\times 100\\%=5\\%]], 각도는 [[A=\\tan^{-1}(0.05)\\approx2.86^\\circ]] 입니다. 5 퍼센트 경사는 5 도 각을 의미하지 않습니다. 이 구분은 흔한 혼동의 원천이며 두 숫자를 서로 바꾸어 써서는 안 됩니다."
          },
          { "kind": "h3", "text": "예제 11: 계단 경사 계산" },
          { "kind": "p", "text": "단순화된 계단은 수직 총상승 2.4 m, 수평 이동 3.2 m입니다. 수직 상승이 대변 [[a=2.4\\,\\text{m}]], 수평 이동이 인접변 [[b=3.2\\,\\text{m}]] 입니다." },
          { "kind": "p", "text": "[[\\tan(A)=\\frac{2.4}{3.2}]]" },
          { "kind": "p", "text": "[[\\boxed{\\tan(A)=0.75}]]" },
          {
            "kind": "p",
            "text": "수직 상승은 수평 이동의 75 퍼센트이며, 각도는 약 [[36.87^\\circ]] 입니다. 이 계산은 계단 치수, 편안함, 건축 기준 적합을 검증하지 않습니다."
          },
          { "kind": "h3", "text": "예제 12: 지주선 각도 이해" },
          { "kind": "p", "text": "지주선은 지면에서 12 m 높이에 기둥에 고정되고, 지면 앵커는 기둥에서 수평으로 5 m 떨어져 있습니다. 고정 높이가 대변 [[a=12\\,\\text{m}]], 지면 거리가 인접변 [[b=5\\,\\text{m}]] 입니다." },
          { "kind": "p", "text": "[[\\tan(A)=\\frac{12}{5}]]" },
          { "kind": "p", "text": "[[\\boxed{\\tan(A)=2.4}]]" },
          {
            "kind": "p",
            "text": "각도는 [[A=\\tan^{-1}(2.4)\\approx67.38^\\circ]] 입니다. 수직 높이는 수평 앵커 거리의 2.4배로, 어떤 기준으로도 가파른 지주선입니다. 탄젠트 비율은 지주선 장력, 앵커 강도, 구조 안전을 결정하지 않습니다."
          },
          { "kind": "h3", "text": "예제 13: 크레인 붐 방향 계산" },
          { "kind": "p", "text": "단순화된 크레인 붐은 수직 성분 8 m, 수평 투영 6 m입니다. 수직 성분이 대변 [[a=8\\,\\text{m}]], 수평 투영이 인접변 [[b=6\\,\\text{m}]] 입니다." },
          { "kind": "p", "text": "[[\\tan(A)=\\frac{8}{6}]]" },
          { "kind": "p", "text": "[[\\boxed{\\tan(A)\\approx1.3333}]]" },
          {
            "kind": "p",
            "text": "대응하는 각도는 약 [[53.13^\\circ]] 입니다. 수직 성분은 수평 투영의 약 1.3333배입니다. 이것은 단순화된 기하학 예제이며 크레인 성능이나 작업 안전을 보장하지 않습니다."
          },
          { "kind": "h3", "text": "예제 14: 등산로 경사 추정" },
          { "kind": "p", "text": "단순화된 직선 등산로 구간은 수직 표고 상승 120 m, 수평 거리 800 m입니다. 표고 상승이 대변 [[a=120\\,\\text{m}]], 수평 거리가 인접변 [[b=800\\,\\text{m}]] 입니다." },
          { "kind": "p", "text": "[[\\tan(A)=\\frac{120}{800}]]" },
          { "kind": "p", "text": "[[\\boxed{\\tan(A)=0.15}]]" },
          {
            "kind": "p",
            "text": "퍼센트 경사는 15 퍼센트이며, 대응하는 각도는 약 [[8.53^\\circ]] 입니다. 이 단순 모델은 일정한 직선 경사를 나타내며, 굽이진 등산로 전체가 아닙니다."
          },
          { "kind": "h3", "text": "예제 15: 기계식 브레이스 평가" },
          { "kind": "p", "text": "대각 기계식 브레이스는 수직 성분 1.5 m, 수평 성분 2 m입니다. 수직 성분이 대변 [[a=1.5\\,\\text{m}]], 수평 성분이 인접변 [[b=2\\,\\text{m}]] 입니다." },
          { "kind": "p", "text": "[[\\tan(A)=\\frac{1.5}{2}]]" },
          { "kind": "p", "text": "[[\\boxed{\\tan(A)=0.75}]]" },
          {
            "kind": "p",
            "text": "수직 성분은 수평 성분의 75 퍼센트입니다. 이 비율은 브레이스의 강도, 하중 능력, 적합성을 결정하지 않습니다."
          },
          { "kind": "h3", "text": "예제 16: 건물까지의 앙각 구하기" },
          { "kind": "p", "text": "관찰자가 건물에서 수평으로 24 m 떨어진 곳에 서 있습니다. 건물 꼭대기는 관찰자의 눈높이에서 18 m 위에 있습니다. 수직 차이가 대변 [[a=18\\,\\text{m}]], 수평 거리가 인접변 [[b=24\\,\\text{m}]] 입니다." },
          { "kind": "p", "text": "[[\\tan(A)=\\frac{18}{24}]]" },
          { "kind": "p", "text": "[[\\boxed{\\tan(A)=0.75}]]" },
          {
            "kind": "p",
            "text": "단순화된 기하학에서 앙각은 약 [[36.87^\\circ]] 입니다. 이것은 관찰자의 수평 눈높이에 대한 꼭대기까지의 각도이며, 반드시 건물 전체 높이는 아닙니다."
          }
        ],
        "steps": [],
        "closingParagraphs": [
          "탄젠트는 무차원 비율이지만, 그 실용적 가치는 수직 상승과 수평 이동을 비교하고, 곧은 경사의 가파름을 나타내고, 앙각을 계산하고, 각도를 알 때 빠진 변을 푸는 데서 옵니다. 혼동하기 쉬운 세 가지 관련 양이 있으니 명확히 해둡시다. 탄젠트 비율은 수직 상승을 수평 이동으로 나눈 것, 퍼센트 경사는 탄젠트 비율에 100 퍼센트를 곱한 것, 각도는 비율에 역탄젠트를 적용한 결과입니다. 탄젠트만으로는 구조 안전, 하중 능력, 접근성, 공학적 적합이 절대 결정되지 않습니다."
        ],
        "tables": [
          {
            "headers": ["상황", "대변 [[a]]", "인접변 [[b]]", "공식", "비율", "경사", "의미"],
            "rows": [
              ["경사로", "0.6 m", "8 m", "0.6/8", "0.075", "7.5%", "완만한 경사, 이동 100마다 7.5 상승"],
              ["지붕 경사", "3 m", "4 m", "3/4", "0.75", "75%", "상승은 이동의 75%"],
              ["사다리", "4 m", "3 m", "4/3", "1.3333", "n/a", "높이가 밑동 거리를 초과, 각도 53.13 도"],
              ["나무 앙각", "12 m", "9 m", "12/9", "1.3333", "n/a", "높이는 그림자 길이의 1.3333배"],
              ["측량", "15 m", "20 m", "15/20", "0.75", "75%", "표고는 수평 거리의 75%"],
              ["도로 경사", "1.2 m", "24 m", "1.2/24", "0.05", "5%", "5% 경사지, 5 도 각이 아님"],
              ["계단", "2.4 m", "3.2 m", "2.4/3.2", "0.75", "75%", "상승은 이동의 75%"],
              ["지주선", "12 m", "5 m", "12/5", "2.4", "n/a", "가파른 지주선, 각도 67.38 도"],
              ["크레인 붐", "8 m", "6 m", "8/6", "1.3333", "n/a", "수직은 수평의 1.3333배"],
              ["등산로", "120 m", "800 m", "120/800", "0.15", "15%", "일정한 15% 경사"],
              ["기계식 브레이스", "1.5 m", "2 m", "1.5/2", "0.75", "n/a", "수직은 수평의 75%"],
              ["건물 앙각", "18 m", "24 m", "18/24", "0.75", "n/a", "앙각 36.87 도"]
            ]
          }
        ],
        "figures": [
          {
            "alt": "네 패널: 경사로 0.075, 지붕 경사 0.75, 사다리 1.3333, 측량 0.75, 각각 이름 붙은 삼각형",
            "caption": "네 가지 실용 계산: 경사로, 지붕 경사, 사다리, 측량. 각각 삼각형, 공식, 비율 포함."
          }
        ]
      },
      "sec-angle": {
        "h2": "탄젠트와 각도 크기의 관계 이해하기",
        "blocks": [
          {
            "kind": "p",
            "text": "탄젠트는 기준각이 커질수록 증가하며, 그 이유는 기하학이 설명합니다. 각 [[A]] 가 작을 때 대변은 인접변에 비해 짧으므로 비율은 0 근처에 머뭅니다. 각이 벌어지면 대변은 인접변의 더 긴 몫을 차지하게 되고 비율은 오릅니다. [[45^\\circ]] 에서 1을 넘고, 각이 [[90^\\circ]] 에 가까워질수록 끝없이 증가합니다. 아래 표는 설명용 변 길이를 사용합니다. 각도를 결정하는 것은 삼각형의 절대 크기가 아니라 비율입니다."
          }
        ],
        "steps": [],
        "closingParagraphs": [
          "패턴은 단순합니다. 대변이 인접변에 비해 짧을 때 탄젠트는 작고, [[45^\\circ]] 에서 1과 같고, 더 큰 예각에서는 1을 넘고, 각이 [[0^\\circ]] 에 가까워지면 0에 가까워지고, 각이 [[90^\\circ]] 에 가까워지면 끝없이 증가합니다. 변 길이가 달라도 같은 각의 삼각형은 같은 탄젠트 비율을 갖습니다. 비율이 포착하는 것은 크기가 아니라 모양이기 때문입니다."
        ],
        "tables": [
          {
            "headers": ["각 [[A]]", "대변 [[a]]", "인접변 [[b]]", "탄젠트 비율"],
            "rows": [
              ["[[30^\\circ]]", "1", "[[\\sqrt{3}]]", "약 0.5774"],
              ["[[45^\\circ]]", "1", "1", "1"],
              ["[[60^\\circ]]", "[[\\sqrt{3}]]", "1", "약 1.7321"],
              ["[[75^\\circ]]", "약 3.7321", "1", "약 3.7321"]
            ]
          }
        ],
        "figures": [
          {
            "alt": "30도, 45도, 60도의 세 삼각형, 탄젠트 값 0.5774, 1, 1.7321. 각도와 함께 탄젠트 상승",
            "caption": "각 A가 커지면 대변이 인접변의 더 긴 몫을 차지하므로 tan(A)가 상승합니다."
          }
        ]
      },
      "sec-side": {
        "h2": "탄젠트를 이용해 대변 구하는 방법",
        "blocks": [
          { "kind": "p", "text": "인접변과 각도를 알 때 탄젠트 공식을 변형해 대변을 구할 수 있습니다. [[\\tan(A)=a/b]] 에서 시작해 양변에 [[b]] 를 곱합니다." },
          { "kind": "p", "text": "[[[\\boxed{a=b\\tan(A)}]]]" },
          { "kind": "p", "text": "대변은 인접변에 각의 탄젠트를 곱한 값과 같습니다. 인접변 [[b=10\\,\\text{m}]], 각 [[A=30^\\circ]] 이 주어지고 [[\\tan(30^\\circ)=1/\\sqrt{3}\\approx0.5774]] 임을 알 때." },
          { "kind": "p", "text": "[[a=10\\times0.5774]]" },
          { "kind": "p", "text": "[[\\boxed{a\\approx5.774\\,\\text{m}}]]" },
          { "kind": "p", "text": "이 각도에서 수평 10 m 이동에 대한 수직 상승은 약 5.774 m입니다." },
          { "kind": "p", "text": "인접변도 다시 변형하면 같은 방식으로 구할 수 있습니다." },
          { "kind": "p", "text": "[[[\\boxed{b=\\frac{a}{\\tan(A)}}]]]" },
          { "kind": "p", "text": "대변 [[a=6\\,\\text{m}]], [[A=45^\\circ]] 일 때. [[\\tan(45^\\circ)=1]] 이므로 [[b=6/1]], 따라서 [[\\boxed{b=6\\,\\text{m}}]] 입니다. 이는 같은 공식의 수학적 변형입니다. 이 페이지의 계산기는 변 길이에서 탄젠트 비율을 반환합니다. 빠진 변을 직접 계산하지는 않습니다." }
        ],
        "steps": [],
        "closingParagraphs": [],
        "tables": [],
        "figures": []
      },
      "sec-recover": {
        "h2": "탄젠트 비율에서 각도 구하는 방법",
        "blocks": [
          { "kind": "p", "text": "탄젠트 비율과 각도는 다른 양입니다. 하나는 변의 무차원 비교이고 다른 하나는 도수로 잰 값입니다. 비율을 알고 각도가 필요할 때는 역탄젠트를 사용할 수 있습니다." },
          { "kind": "p", "text": "[[[\\boxed{A=\\tan^{-1}\\left(\\frac{a}{b}\\right)}]]]" },
          { "kind": "p", "text": "역탄젠트는 아크탄젠트라고도 합니다. [[\\tan(A)=0.75]] 가 주어졌을 때." },
          { "kind": "p", "text": "[[A=\\tan^{-1}(0.75)]]" },
          { "kind": "p", "text": "[[\\boxed{A\\approx36.87^\\circ}]]" },
          { "kind": "p", "text": "계산기가 도 모드로 설정되어 있을 때 각도는 약 [[36.87^\\circ]] 입니다." },
          { "kind": "h3", "text": "계산기의 각도 모드가 중요한 이유" },
          { "kind": "p", "text": "각도는 도나 라디안으로 잴 수 있으며, 역탄젠트를 적용하기 전에 공학용 계산기를 의도한 모드로 설정해야 합니다. 한 바퀴는 360 도 또는 [[2\\pi]] 라디안이므로 [[45^\\circ=\\pi/4]] 라디안입니다. 탄젠트 비율 자체에는 도나 라디안 단위가 없습니다. 그 단위는 그것에서 구한 각도에 적용됩니다. 이 페이지의 탄젠트 비율 계산기는 비율을 직접 반환하며 각도를 반환하지 않습니다." }
        ],
        "steps": [],
        "closingParagraphs": [],
        "tables": [],
        "figures": []
      },
      "sec-mistakes": {
        "h2": "탄젠트 계산 시 흔한 실수",
        "blocks": [
          {
            "kind": "p",
            "text": "대부분의 탄젠트 오류는 뒤집힌 분수, 잘못 붙인 변 이름, 비율과 각도의 혼동에서 옵니다. 결과를 믿기 전에 이 목록을 확인하세요."
          }
        ],
        "steps": [
          "공식을 뒤집어 [[a/b]] 대신 [[b/a]] 를 계산합니다. 이는 탄젠트가 아니라 코탄젠트를 반환합니다. [[a=3]], [[b=4]] 일 때 뒤집힌 분수는 1.3333을, 올바른 것은 0.75를 줍니다.",
          "탄젠트를 사인과 혼동합니다. 탄젠트는 대변을 인접변으로 나누고, 사인은 대변을 빗변으로 나눕니다. 분모에 빗변이 있으면 답은 탄젠트가 아니라 사인입니다.",
          "탄젠트를 코사인과 혼동합니다. 코사인은 인접변을 빗변으로 나눕니다. 탄젠트는 빗변을 절대 사용하지 않으므로, 어느 위치에든 빗변이 있으면 잘못된 비율의 신호입니다.",
          "탄젠트를 코탄젠트와 혼동합니다. 코탄젠트는 역수로 인접변 대 대변입니다. 이름이 비슷해 실제 실수가 생기지만, 분수 순서는 정확히 반대입니다.",
          "기본 탄젠트 공식에 빗변을 포함합니다. [[a/b]] 에 빗변의 역할은 없습니다. 계산에 나타나면 잘못된 공식을 쓴 것입니다.",
          "대변과 인접변을 바꿉니다. 둘 다 다리이므로 이름을 뒤집기 쉽습니다. 항상 기준각에서부터 따라가세요. 맞은편이 대변이고, 닿는 쪽이 인접변입니다.",
          "잘못된 기준각에 대해 변을 정합니다. 각 [[A]] 에서 각 [[C]] 로 바꾸면 대변과 인접변 이름이 바뀌어 비율이 역수로 뒤집힙니다.",
          "탄젠트가 1보다 작아야 한다고 가정합니다. 그 규칙은 사인과 코사인의 것입니다. 예각에 대한 탄젠트에는 상한이 없으며, 1을 넘는 결과는 완전히 유효합니다.",
          "탄젠트 비율을 도 단위 각도로 보고합니다. 0.75라는 결과는 비율이지 [[0.75^\\circ]] 가 아닙니다. 이를 도수로 취급하면 이후 모든 계산에 무의미한 값이 들어갑니다.",
          "탄젠트 비율에 측정 단위를 붙여 보고합니다. 나눗셈에서 단위가 상쇄되므로 0.75 m는 틀렸습니다. 순수한 숫자를 쓰고, 단위는 제자리인 입력 측정값에 남겨두세요.",
          "0이나 음수인 변 길이를 입력합니다. 삼각형에 0이나 음수인 변은 있을 수 없으므로, 이런 입력은 유효한 경계 경우가 아니라 데이터 입력 오류나 빠진 측정의 신호입니다.",
          "호환되지 않는 측정 단위를 섞습니다. 대변 3 m와 인접변 40 cm는 7.5라는 무의미한 숫자를 줍니다. 먼저 하나의 단위로 변환하세요. 3 m와 4 m는 올바른 0.75를 줍니다.",
          "너무 일찍 반올림합니다. 반올림한 중간 나눗셈으로 계산을 이어가면 오차가 복합됩니다. 모든 단계에서 완전한 정밀도를 유지하고 최종 답만 반올림하세요.",
          "퍼센트 경사를 도 단위 각도와 혼동합니다. 5 퍼센트 경사는 0.05 탄젠트에서 나오지만, 각도는 [[\\tan^{-1}(0.05)\\approx2.86^\\circ]] 이지 5 도가 아닙니다. 경사와 각도는 다른 양입니다.",
          "탄젠트 비율이 삼각형의 절대 크기를 결정한다고 가정합니다. 탄젠트는 모양을 나타내지 크기를 나타내지 않습니다. 대변 3 cm부터 3 km까지 무수한 삼각형이 0.75 탄젠트를 공유합니다. 비율은 비례를 고정합니다. 실제 길이에는 최소 하나의 변 측정이 필요합니다."
        ],
        "closingParagraphs": [
          "틀림 대 맞음: 풀이가 있는 비교. 대변 [[a=3]], 인접변 [[b=4]] 가 주어졌습니다.",
          "틀림: [[4/3\\approx1.3333]]. 이것은 각 [[A]] 의 코탄젠트 비율이지 탄젠트 비율이 아닙니다. 분자와 분모가 뒤바뀌었습니다.",
          "맞음: [[\\tan(A)=3/4=0.75]].",
          "사인과 코사인으로 검증합니다. [[c=5]] 일 때 [[\\sin(A)=3/5=0.6]], [[\\cos(A)=4/5=0.8]] 입니다. 따라서 [[\\sin(A)/\\cos(A)=0.6/0.8=0.75]] 로 탄젠트 계산이 확인됩니다."
        ],
        "tables": [],
        "figures": []
      },
      "sec-verify": {
        "h2": "탄젠트 결과가 유효한지 확인하는 방법",
        "blocks": [
          { "kind": "p", "text": "유효하고 퇴화하지 않은 직각삼각형에는 두 양의 다리, [[a \\gt 0]] 와 [[b \\gt 0]] 가 필요하며 호환되는 단위로 잰 값이어야 하므로, 탄젠트 결과는 양수여야 합니다." },
          { "kind": "p", "text": "[[[\\boxed{\\tan(A)=\\frac{a}{b} \\gt 0}]]]" },
          { "kind": "p", "text": "대변이 인접변보다 짧아야 한다는 조건은 없으므로 결과는 1 미만, 1, 1 초과 중 어느 것이든 될 수 있습니다. 0이나 음수인 결과는 보통 유효하지 않은 입력이나 뒤바뀐 이름의 신호입니다." },
          { "kind": "h3", "text": "방법 1: 비율 확인" },
          { "kind": "p", "text": "[[\\tan(A)=a/b]] 를 직접 다시 확인합니다. [[a=3]], [[b=4]] 일 때 [[\\tan(A)=3/4=0.75]] 입니다. 대변이 인접변보다 짧으므로 비율은 1 미만이어야 합니다. 두 번째 손 계산이 다르면 변 이름을 잘못 붙였거나 단위를 섞은 것입니다." },
          { "kind": "h3", "text": "방법 2: 피타고라스 정리 확인" },
          { "kind": "p", "text": "필요할 때 빗변을 계산합니다. [[c=\\sqrt{a^2+b^2}]]. [[a=3]], [[b=4]] 일 때 [[c=\\sqrt{9+16}=5]], 그리고 [[3^2+4^2=5^2]] 입니다. 이것은 3-4-5 직각삼각형의 치수를 확인합니다. 빗변은 여기서 검증 값이지 기본 탄젠트 공식의 일부가 아닙니다." },
          { "kind": "h3", "text": "방법 3: 역탄젠트로 확인" },
          { "kind": "p", "text": "0.75 탄젠트 비율의 경우 [[A=\\tan^{-1}(0.75)\\approx36.87^\\circ]] 입니다. 비율이 1 미만이므로 각도는 [[45^\\circ]] 미만이어야 합니다. 그렇지 않다면 변 이름이 뒤바뀌었을 가능성이 큽니다. 작은 차이는 반올림에서 생길 수 있습니다." }
        ],
        "steps": [],
        "closingParagraphs": [],
        "tables": [],
        "figures": []
      },
      "sec-vs": {
        "h2": "탄젠트 vs. 사인, 코사인, 코탄젠트",
        "blocks": [
          {
            "kind": "p",
            "text": "각 비율은 서로 다른 변 쌍을 비교하지만, 기준각과 변 이름은 같습니다."
          }
        ],
        "steps": [],
        "closingParagraphs": [
          "탄젠트와 코탄젠트는 역수 쌍입니다. [[\\cot(A)=1/\\tan(A)]]. [[\\tan(A)=0.75]] 이면 [[\\cot(A)\\approx1.3333]] 입니다. 두 다리를 모두 알 때나 상승 대 이동 문제에서는 탄젠트를 사용하고, 빗변이 작업에 들어갈 때는 사인이나 코사인을, 비교가 반대 방향으로 흐를 때는 코탄젠트를 사용하세요. 탄젠트를 중심에 두세요. 이웃 비율들은 각자 완전한 설명의 페이지가 있습니다.",
          "이웃 비율은 <a href=\"/sine-ratio-calculator/\" class=\"text-primary hover:underline\">사인 비율 계산기</a>, <a href=\"/cosine-ratio-calculator/\" class=\"text-primary hover:underline\">코사인 비율 계산기</a>, <a href=\"/cotangent-ratio-calculator/\" class=\"text-primary hover:underline\">코탄젠트 비율 계산기</a>, <a href=\"/secant-ratio-calculator/\" class=\"text-primary hover:underline\">시컨트 비율 계산기</a>, <a href=\"/cosecant-ratio-calculator/\" class=\"text-primary hover:underline\">코시컨트 비율 계산기</a>를 참고하세요."
        ],
        "tables": [
          {
            "headers": ["비율", "공식", "비교하는 것"],
            "rows": [
              ["사인", "sin(A) = a/c", "대변과 빗변"],
              ["코사인", "cos(A) = b/c", "인접변과 빗변"],
              ["탄젠트", "tan(A) = a/b", "대변과 인접변"],
              ["코시컨트", "csc(A) = c/a", "빗변과 대변"],
              ["시컨트", "sec(A) = c/b", "빗변과 인접변"],
              ["코탄젠트", "cot(A) = b/a", "인접변과 대변"]
            ]
          }
        ],
        "figures": []
      },
      "sec-related": {
        "h2": "관련 삼각함수 계산기 살펴보기",
        "blocks": [],
        "steps": [],
        "closingParagraphs": [],
        "related": [
          { "name": "사인 비율 계산기", "desc": "대변과 빗변에서 각의 사인을 계산합니다." },
          { "name": "코사인 비율 계산기", "desc": "인접변과 빗변에서 각의 코사인을 계산합니다." },
          { "name": "코탄젠트 비율 계산기", "desc": "두 다리에서 탄젠트의 역수인 코탄젠트를 계산합니다." },
          { "name": "시컨트 비율 계산기", "desc": "빗변과 인접변에서 각의 시컨트를 계산합니다." },
          { "name": "코시컨트 비율 계산기", "desc": "빗변과 대변에서 각의 코시컨트를 계산합니다." },
          { "name": "직각삼각형 각도 계산기", "desc": "알려진 변에서 직각삼각형의 모르는 각도를 구합니다." },
          { "name": "직각삼각형 변 계산기", "desc": "각도와 알려진 변에서 직각삼각형의 모르는 변을 구합니다." }
        ],
        "tables": [],
        "figures": []
      }
    },
    "faqs": [
      {
        "question": "직각삼각형의 탄젠트 비율 공식은 무엇입니까?",
        "answer": "tan(A) = a / b 입니다. 대변 a를 인접변 b로 나눕니다. 대변 3 cm, 인접변 4 cm이면 결과는 3/4 = 0.75 입니다. 이 소수 자체가 완전한 답이며, 무차원 비율이지 각도가 아닙니다."
      },
      {
        "question": "두 변 길이에서 탄젠트를 계산하는 방법은?",
        "answer": "기준각 A를 정하고, 대변 a와 인접변 b를 같은 단위로 재고, 둘 다 양수인지 확인한 뒤 나눕니다. tan(A) = a / b 입니다. 이 페이지에서는 첫 번째 칸에 대변, 두 번째 칸에 인접변을 입력하고 tan(A) 계산을 클릭합니다."
      },
      {
        "question": "탄젠트가 빗변을 사용하지 않는 이유는?",
        "answer": "탄젠트는 두 수직 다리를 직접 비교합니다. 수직 대 수평입니다. 빗변은 이 비교에 새로운 정보를 더하지 않으므로 기본 공식에는 대변과 인접변만 필요합니다. 다른 계산에 필요하다면 피타고라스 정리가 나중에 빗변을 구해줍니다."
      },
      {
        "question": "탄젠트가 1보다 클 수 있습니까?",
        "answer": "네. 예각에 대한 탄젠트에는 상한이 없습니다. 대변이 인접변보다 길 때 비율은 1을 넘습니다. a = 6, b = 3이면 tan(A) = 6/3 = 2 입니다. 1을 넘는 결과는 수학적으로 유효하며 계산기 오류를 나타내지 않습니다."
      },
      {
        "question": "탄젠트 값 0.75의 의미는 무엇입니까?",
        "answer": "대변이 인접변의 75 퍼센트라는 뜻입니다. 3-4-5 삼각형에서 각 A 맞은편 변은 3 단위, 각 A 옆 변은 4 단위이므로 tan(A) = 3/4 = 0.75 입니다. 이는 삼각형의 모양을 나타내며 0.75 도의 각이 아닙니다."
      },
      {
        "question": "탄젠트와 코탄젠트의 차이는 무엇입니까?",
        "answer": "서로 역수입니다. 탄젠트는 대변을 인접변으로 나누고 (a/b), 코탄젠트는 인접변을 대변으로 나눕니다 (b/a). tan(A) = 0.75이면 cot(A) = 1/0.75, 약 1.3333 입니다. 분수 순서가 정확히 반대입니다."
      },
      {
        "question": "탄젠트 비율에서 각도를 계산하는 방법은?",
        "answer": "비율에 역탄젠트를 적용합니다. A = tan^-1(a/b) 입니다. tan(A) = 0.75이면 A = tan^-1(0.75), 약 36.87 도입니다. 먼저 공학용 계산기를 도 모드로 설정하세요. 이 페이지의 계산기는 비율을 반환하며 각도를 반환하지 않습니다."
      },
      {
        "question": "탄젠트로 대변을 구하는 방법은?",
        "answer": "공식을 a = b * tan(A) 로 변형합니다. 인접변이 10 m, 각 A가 30 도이면 tan(30°)는 약 0.5774이므로 a = 10 * 0.5774, 약 5.774 m입니다. 이것은 손으로 하는 변형입니다. 이 페이지의 계산기는 변 길이에서 비율을 반환하며 빠진 변은 반환하지 않습니다."
      },
      {
        "question": "탄젠트로 인접변을 구하는 방법은?",
        "answer": "공식을 b = a / tan(A) 로 변형합니다. 대변이 6 m, 각 A가 45 도이면 tan(45°) = 1이므로 b = 6/1 = 6 m입니다. 이것은 같은 공식의 수학적 변형이며 이 페이지 계산기의 별도 모드가 아닙니다."
      },
      {
        "question": "탄젠트는 기울기(slope)와 같은 것입니까?",
        "answer": "밀접하게 관련되어 있습니다. 상승 대 이동으로서의 기울기는 탄젠트가 하는 것과 같은 비교입니다. 수직 변화를 수평 변화로 나눈 것입니다. 기울기 0.05를 쓰는 도로 기술자와 tan(A) = 0.05를 쓰는 삼각법 학생은 같은 비율을 나타내고 있습니다. 용어는 맥락에 따라 다를 뿐 수학은 같습니다."
      },
      {
        "question": "퍼센트 경사와 도 단위 각도의 차이는 무엇입니까?",
        "answer": "퍼센트 경사는 탄젠트 비율의 100배입니다. 0.05 탄젠트는 5% 경사를 줍니다. 각도는 비율의 역탄젠트입니다. tan^-1(0.05)는 약 2.86 도입니다. 따라서 5% 경사는 5 도 각이 아닙니다. 둘을 혼동하는 것은 가장 흔한 탄젠트 실수 중 하나입니다."
      },
      {
        "question": "건설과 측량에서 탄젠트는 어떻게 사용됩니까?",
        "answer": "탄젠트는 수직 상승과 수평 이동을 비교하며, 이것이 바로 지붕 경사, 경사로 기울기, 도로 경사, 계단 가파름이 나타내는 것입니다. 측량사는 이를 이용해 표고 차이와 수평 거리를 앙각으로 바꿉니다. 모든 경우에 비율만으로는 구조 안전이나 기준 적합을 인증하지 않습니다."
      }
    ],
    "faqHeading": "자주 묻는 질문",
    "relatedHeading": "관련 삼각함수 계산기 살펴보기",
    "conclusion": {
      "h2": "자신 있게 탄젠트 비율을 사용하세요",
      "paragraphs": [
        "탄젠트는 두 다리의 비율입니다. 대변을 인접변으로 나누면 수평 이동 1 단위마다 몇 단위의 수직 상승이 따르는지를 나타낸 것입니다. 공식 [[\\tan(A)=a/b]] 에는 두 측정값만 필요하며, 답은 항상 무차원 수로 1 미만, 1, 1 초과 중 어느 것이든 될 수 있고, 기준각이 커질수록 증가합니다. 빠진 변이 필요할 때는 [[a=b\\tan(A)]] 가 대변을 구해주고, 각도가 필요할 때는 [[A=\\tan^{-1}(a/b)]] 가 구해줍니다. 경사로, 지붕, 사다리, 교과서의 3-4-5 중 어느 것이든 방법은 변하지 않습니다. 대변을 정하고, 인접변을 정하고, 나누고, 양수 비율 검사로 검증합니다."
      ]
    }
  }
,
  "ms": {
    "tocHeading": "Dalam panduan ini",
    "tocItems": {
      "sec-intro": "Apakah kalkulator nisbah tangen?",
      "sec-triangle": "Memahami sisi bertentangan dan sisi bersebelahan",
      "sec-whatis": "Memahami nisbah tangen",
      "sec-formula": "Bagaimana formula tangen berfungsi",
      "sec-howto": "Cara menggunakan kalkulator nisbah tangen",
      "sec-examples": "Contoh langkah demi langkah pengiraan tangen",
      "sec-applications": "Contoh sebenar penggunaan nisbah tangen",
      "sec-angle": "Memahami hubungan antara tangen dan saiz sudut",
      "sec-side": "Cara mencari sisi bertentangan menggunakan tangen",
      "sec-recover": "Cara mencari sudut daripada nisbah tangen",
      "sec-mistakes": "Kesilapan biasa semasa mengira tangen",
      "sec-verify": "Cara memeriksa sama ada hasil tangen anda sah",
      "sec-vs": "Tangen lwn. sinus, kosinus dan kotangen",
      "sec-faq": "Soalan lazim",
      "sec-related": "Terokai kalkulator trigonometri berkaitan"
    },
    "sections": {
      "sec-intro": {
        "h2": "Apakah kalkulator nisbah tangen?",
        "blocks": [
          {
            "kind": "p",
            "text": "Kalkulator nisbah tangen menjawab satu soalan: bagi sudut tirus dalam segi tiga bersudut tepat, bagaimanakah sisi bertentangan dengan sudut itu berbanding dengan sisi bersebelahan dengannya? Masukkan sisi bertentangan dan sisi bersebelahan, dan alat itu membahagikan sisi bertentangan dengan sisi bersebelahan, lalu memulangkan [[\\tan(A)=a/b]]. Sebuah segi tiga bersudut tepat mempunyai sisi bertentangan 3 cm dan sisi bersebelahan 4 cm, jadi [[\\tan(A)=3/4=0.75]]. Angka 0.75 itu ialah nisbah tangen: ia memberitahu anda bahawa sisi bertentangan adalah 75 peratus panjang sisi bersebelahan. Ia bukan sudut, jadi jangan sesekali membacanya sebagai [[0.75^\\circ]]. Hipotenus tidak pernah terlibat dalam pengiraan ini; sisi bertentangan dan sisi bersebelahan sudah cukup dengan sendirinya. Tangen ialah salah satu nisbah trigonometri asas, dan kekuatannya yang khusus ialah membandingkan kenaikan menegak dengan larian mendatar, sebab itulah ia muncul dalam kecondongan bumbung, gred jalan dan cerun landai. Hasilnya ialah nombor tanpa dimensi: perbandingan tulen dua panjang, bukan ukuran dalam sentimeter atau darjah. Jika sudut dalam darjah yang anda perlukan, tangen songsang menukar nisbah itu kepada darjah."
          }
        ],
        "steps": [],
        "closingParagraphs": [],
        "tables": [],
        "figures": []
      },
      "sec-triangle": {
        "h2": "Memahami sisi bertentangan dan sisi bersebelahan",
        "blocks": [
          { "kind": "h3", "text": "Apakah segi tiga bersudut tepat?" },
          {
            "kind": "p",
            "text": "Segi tiga bersudut tepat mempunyai satu sudut tepat [[90^\\circ]], iaitu sudut antara dua garis serenjang, seperti dinding bertemu lantai yang rata. Hipotenus terletak bertentangan dengan sudut tepat itu dan sentiasa merupakan sisi terpanjang, kerana ia mesti merentasi pepenjuru penuh penjuru itu. Dua sudut yang lain berkongsi baki 90 darjah, jadi kedua-duanya tirus. Kedua-dua kaki bertemu pada sudut tepat, berserenjang antara satu sama lain, dan hubungan mereka dengan hipotenus itulah yang memungkinkan trigonometri segi tiga bersudut tepat."
          },
          { "kind": "h3", "text": "Apakah sisi bertentangan?" },
          {
            "kind": "p",
            "text": "Sisi bertentangan [[a]] ialah sisi yang betul-betul bertentangan dengan sudut rujukan [[A]], satu-satunya sisi yang tidak pernah menyentuh puncaknya. Dalam masalah praktikal, ia sering berperanan sebagai kenaikan menegak, perbezaan ketinggian atau tinggi: ketinggian yang dicapai tangga pada dinding, kenaikan bumbung, atau komponen menegak boom kren. Sisi mana yang dikira bertentangan bergantung pada sudut rujukan yang dipilih, jadi bertukar daripada sudut [[A]] kepada sudut [[C]] menukar label bertentangan dan bersebelahan. Ia muncul dalam pengangka formula tangen kerana tangen mengukur betapa besar sisi bertentangan dengan sudut itu berbanding sisi bersebelahan dengan sudut itu."
          },
          { "kind": "h3", "text": "Apakah sisi bersebelahan?" },
          {
            "kind": "p",
            "text": "Sisi bersebelahan [[b]] ialah kaki yang menyentuh sudut rujukan [[A]] tanpa menjadi hipotenus. Dalam masalah praktikal, ia sering berperanan sebagai larian mendatar atau jarak tanah: tapak tangga dari dinding, larian mendatar bumbung, atau panjang bayang-bayang dalam masalah sudut matahari. Ia tidak pernah hipotenus, perkara yang patut disemak setiap kali, kerana hipotenus ialah sisi yang menghadap sudut tepat. Ia muncul dalam penyebut formula tangen, sebab itulah tangen membandingkan sisi bertentangan dengan kaki ini dan bukannya dengan sisi terpanjang."
          },
          { "kind": "h3", "text": "Apakah hipotenus?" },
          {
            "kind": "p",
            "text": "Hipotenus [[c]] ialah sisi bertentangan dengan sudut tepat: dalam mana-mana rajah ia menghadap segi empat kecil yang menandakan penjuru [[90^\\circ]], dan ia lebih panjang daripada mana-mana kaki. Dalam masalah praktikal, ia sering berperanan sebagai panjang condong: tangga, kasau bumbung, wayar guy, atau pendakap pepenjuru. Ia tidak diperlukan untuk pengiraan tangen utama, kerana formula tangen membandingkan kedua-dua kaki secara langsung. Jika ia diperlukan untuk masalah lain, teorem Pythagoras mengiranya daripada kedua-dua kaki: [[c=\\sqrt{a^2+b^2}]]."
          }
        ],
        "steps": [],
        "closingParagraphs": [
          "Tangen menggunakan kedua-dua kaki dan tidak memerlukan hipotenus. Kekalkan konvensyen label sisi ini secara konsisten: [[a]] bertentangan dengan sudut [[A]], [[b]] bersebelahan dengan sudut [[A]], dan [[c]] hipotenus bertentangan dengan sudut tepat di [[B]]."
        ],
        "tables": [],
        "figures": [
          {
            "alt": "Segi tiga bersudut tepat dengan sudut A di kiri bawah, sisi bertentangan a emas, sisi bersebelahan b biru, tan(A)=a/b",
            "caption": "Sudut A terletak di kiri bawah; tangen menggunakan sisi bertentangan a emas dan sisi bersebelahan b biru, bukan hipotenus c."
          }
        ]
      },
      "sec-whatis": {
        "h2": "Memahami nisbah tangen",
        "blocks": [
          { "kind": "p", "text": "Tangen bagi sudut tirus [[A]] ialah sisi bertentangan dibahagi sisi bersebelahan:" },
          { "kind": "p", "text": "[[[\\boxed{\\tan(A)=\\frac{a}{b}}]]]" },
          {
            "kind": "p",
            "text": "Di sini [[\\tan(A)]] bermaksud tangen bagi sudut [[A]], [[a]] ialah sisi bertentangan, dan [[b]] ialah sisi bersebelahan. Apabila segi tiga itu diposisikan dengan tapaknya sepanjang arah mendatar, tangen membandingkan kaki menegak dengan kaki mendatar: kenaikan bahagi larian dalam bentuk paling tulen."
          },
          { "kind": "h3", "text": "Memahami SOH-CAH-TOA" },
          { "kind": "p", "text": "Pelajar mengingati tiga nisbah utama dengan satu alat ingatan:" },
          { "kind": "p", "text": "SOH: Sinus = Bertentangan / Hipotenus; CAH: Kosinus = Bersebelahan / Hipotenus; TOA: Tangen = Bertentangan / Bersebelahan." },
          {
            "kind": "p",
            "text": "TOA sepadan dengan formula tangen [[\\tan(A)=a/b]]: T bermaksud tangen, O meletakkan sisi bertentangan di atas, dan A meletakkan sisi bersebelahan di bawah. Alat itu membantu anda memilih pengangka dan penyebut yang betul sebelum sebarang nombor memasuki pengiraan. Bahagian ini kekal fokus pada tangen; dua nisbah lain mempunyai halaman mereka sendiri."
          },
          { "kind": "h3", "text": "Mengapa tangen tidak menggunakan hipotenus" },
          { "kind": "p", "text": "Tangen membandingkan kedua-dua kaki serenjang secara langsung, jadi hipotenus tidak diperlukan. Dengan [[a=3]] dan [[b=4]]:" },
          { "kind": "p", "text": "[[\\tan(A)=\\frac{3}{4}=0.75]]" },
          {
            "kind": "p",
            "text": "Nisbah itu sudah menangkap segala-galanya tentang bagaimana sisi bertentangan berbanding dengan sisi bersebelahan; membawa masuk hipotenus akan menukar soalan yang ditanya. Jika hipotenus diperlukan untuk masalah berbeza, teorem Pythagoras mengiranya daripada kaki-kaki itu. Tangen sendiri tidak pernah memintanya."
          },
          { "kind": "h3", "text": "Mengapa tangen ialah nisbah tanpa dimensi" },
          { "kind": "p", "text": "Membahagikan satu panjang dengan panjang lain membatalkan unit fizikal. Dengan unit yang serasi:" },
          { "kind": "p", "text": "[[\\frac{3\\,\\text{m}}{4\\,\\text{m}}=0.75]]" },
          {
            "kind": "p",
            "text": "Meter dibatalkan, meninggalkan nombor biasa. Nisbah yang sama datang daripada 300 cm dan 400 cm, kerana perubahan unit mempengaruhi kedua-dua sisi secara sama. Satu-satunya keperluan ialah kedua-dua ukuran menggunakan unit yang serasi: mencampurkan meter dengan sentimeter menghasilkan nombor yang tidak bermakna, manakala menukar dahulu mengekalkan kejujuran nisbah."
          },
          { "kind": "h3", "text": "Apakah maksud nilai tangen 0.75?" },
          {
            "kind": "p",
            "text": "[[\\tan(A)=0.75]] bermaksud sisi bertentangan adalah 0.75 kali sisi bersebelahan, atau 75 unit kenaikan menegak bagi setiap 100 unit larian mendatar dalam geometri garis lurus yang sama. Bayangkan bumbung yang naik 75 cm bagi setiap 100 cm larian mendatar: itulah tepat yang digambarkan 0.75. Ia tidak bermaksud sudutnya [[0.75^\\circ]]; nisbah dan sudut ialah kuantiti berbeza, dan mengelirukannya ialah antara kesilapan paling biasa dalam trigonometri."
          },
          { "kind": "h3", "text": "Apakah maksud nilai tangen 1?" },
          {
            "kind": "p",
            "text": "[[\\tan(A)=1]] bermaksud [[a=b]]: sisi bertentangan dan sisi bersebelahan adalah sama. Segi tiga bersudut tepat sama kaki mempunyai dua kaki yang sama, dan kerana dua sudut tirus mesti berkongsi 90 darjah secara sama, setiap satunya [[45^\\circ]]:"
          },
          { "kind": "p", "text": "[[A=45^\\circ]]" },
          {
            "kind": "p",
            "text": "Kaki yang sama, sudut tirus yang sama, tangen tepat 1. Ini ialah titik imbangan skala tangen: di bawah 1 segi tiga itu lebih lebar daripada tinggi, di atas 1 ia lebih tinggi daripada lebar."
          },
          { "kind": "h3", "text": "Mengapa tangen boleh melebihi 1" },
          {
            "kind": "p",
            "text": "Tidak seperti sinus dan kosinus, tangen tidak mempunyai had atas bagi sudut tirus. Jika sisi bertentangan mengatasi sisi bersebelahan, nisbah itu melepasi 1 tanpa sebarang masalah. Dengan [[a=6]] dan [[b=3]]:"
          },
          { "kind": "p", "text": "[[\\tan(A)=\\frac{6}{3}=2]]" },
          {
            "kind": "p",
            "text": "Sisi bertentangan dua kali panjang sisi bersebelahan. Nilai tangen yang melebihi 1 adalah sah dari segi matematik dan tidak menunjukkan ralat kalkulator; ia sekadar menggambarkan segi tiga yang curam, seperti tangga tinggi yang berdiri dekat dengan dinding."
          },
          { "kind": "h3", "text": "Bagaimana tangen berkait dengan sinus dan kosinus" },
          { "kind": "p", "text": "Mulakan dengan dua nisbah yang lain:" },
          { "kind": "p", "text": "[[\\sin(A)=\\frac{a}{c}]]" },
          { "kind": "p", "text": "[[\\cos(A)=\\frac{b}{c}]]" },
          { "kind": "p", "text": "Bahagikan sinus dengan kosinus dan hipotenus terbatal:" },
          { "kind": "p", "text": "[[[\\frac{\\sin(A)}{\\cos(A)}=\\frac{a/c}{b/c}=\\frac{a}{b}]]]" },
          { "kind": "p", "text": "Oleh itu:" },
          { "kind": "p", "text": "[[[\\boxed{\\tan(A)=\\frac{\\sin(A)}{\\cos(A)}}]]]" },
          {
            "kind": "p",
            "text": "Identiti ini selaras dengan takrifan bertentangan bahagi bersebelahan, dan ia memberi semakan silang yang berguna: sebarang hasil tangen harus sama dengan sinus dibahagi kosinus bagi sudut yang sama."
          }
        ],
        "steps": [],
        "closingParagraphs": [],
        "tables": [],
        "figures": [
          {
            "alt": "Tiga peringkat: segi tiga 3-4-5, formula tangen tan(A)=a/b, hasil 0.75, bertentangan ialah 75 peratus bersebelahan",
            "caption": "Tiga peringkat: labelkan segi tiga 3-4-5, tulis tan(A) = a/b, kemudian bahagikan 3 dengan 4 untuk mendapat 0.75."
          }
        ]
      },
      "sec-formula": {
        "h2": "Bagaimana formula tangen berfungsi",
        "blocks": [
          { "kind": "p", "text": "Mulakan dengan takrifan:" },
          { "kind": "p", "text": "[[\\tan(A)=\\frac{\\text{Opposite}}{\\text{Adjacent}}]]" },
          { "kind": "p", "text": "Kemudian gunakan tatatanda halaman ini:" },
          { "kind": "p", "text": "[[[\\boxed{\\tan(A)=\\frac{a}{b}}]]]" },
          {
            "kind": "p",
            "text": "Sisi bertentangan tergolong dalam pengangka kerana tangen mengukur betapa besar sisi bertentangan dengan sudut itu; sisi bersebelahan tergolong dalam penyebut kerana ia sisi yang dibandingkan. Tukar kedudukannya dan anda mendapat kotangen, nisbah yang sama sekali berbeza."
          },
          { "kind": "h3", "text": "Contoh kerja penuh: segi tiga bersudut tepat 3-4-5" },
          { "kind": "p", "text": "Diberi sisi bertentangan [[a=3\\,\\text{cm}]], sisi bersebelahan [[b=4\\,\\text{cm}]], dan hipotenus [[c=5\\,\\text{cm}]]:" },
          { "kind": "p", "text": "Langkah 1: tulis formula. [[\\tan(A)=a/b]]" },
          { "kind": "p", "text": "Langkah 2: gantikan nilai yang diketahui. [[\\tan(A)=3/4]]" },
          { "kind": "p", "text": "Langkah 3: bahagi. [[\\boxed{\\tan(A)=0.75}]]" },
          { "kind": "p", "text": "Langkah 4: tafsirkan hasil. Sisi bertentangan adalah 75 peratus panjang sisi bersebelahan." },
          { "kind": "p", "text": "Langkah 5: sahkan segi tiga. [[3^2+4^2=5^2]], iaitu [[9+16=25]]. Panjang sisi adalah konsisten dengan segi tiga bersudut tepat yang tulen." },
          { "kind": "h3", "text": "Cari sudut daripada nisbah" },
          { "kind": "p", "text": "Jika sudut itu sendiri yang diperlukan, gunakan tangen songsang pada nisbah:" },
          { "kind": "p", "text": "[[A=\\tan^{-1}(0.75)]]" },
          { "kind": "p", "text": "[[\\boxed{A\\approx36.87^\\circ}]]" },
          {
            "kind": "p",
            "text": "Tangen songsang juga dipanggil arktangen. Mengira nisbah tangen dan mengira sudut ialah operasi berasingan: nisbah itu menggambarkan bentuk segi tiga, manakala tangen songsang menukar bentuk itu kepada darjah. Kalkulator nisbah tangen di halaman ini memulangkan nisbah; mendapatkan semula sudut ialah langkah susulan pada kalkulator saintifik."
          }
        ],
        "steps": [],
        "closingParagraphs": [],
        "tables": [],
        "figures": []
      },
      "sec-howto": {
        "h2": "Cara menggunakan kalkulator nisbah tangen",
        "blocks": [
          {
            "kind": "p",
            "text": "Panduan di bawah sepadan dengan antara muka aktif di halaman ini. Setiap langkah penting, kerana hasil tangen hanya setara dipercayainya dengan dua ukuran di belakangnya."
          }
        ],
        "steps": [
          "Kenal pasti sudut rujukan [[A]]. Tangen sentiasa berfungsi daripada satu sudut tirus; menamakannya dahulu menetapkan sisi mana bertentangan dan sisi mana bersebelahan.",
          "Cari sisi bertentangan [[a]], betul-betul bertentangan dengan sudut [[A]]. Ini ialah sisi yang tidak pernah menyentuh puncak sudut itu.",
          "Cari sisi bersebelahan [[b]], yang menyentuh sudut [[A]] dan bukan hipotenus. Semak semula sama ada anda tersalah mengambil sisi condong.",
          "Dapatkan atau ukur kedua-dua panjang sisi. Pita ukur, lukisan berskala, atau spesifikasi yang diketahui semuanya boleh, asalkan nombor-nombor itu menggambarkan segi tiga yang sama.",
          "Masukkan panjang sisi bertentangan dalam medan input pertama. Ini ialah pengangka pecahan.",
          "Masukkan panjang sisi bersebelahan dalam medan input kedua. Ini ialah penyebut.",
          "Pilih unit ukuran yang serasi menggunakan pemilih unit yang tersedia. Kedua-dua input mesti dalam unit yang sama, atau ditukar kepada satu sebelum dibahagi.",
          "Pastikan kedua-dua ukuran adalah positif. Sisi sifar atau negatif tidak boleh tergolong dalam segi tiga sebenar.",
          "Klik Kira tan(A). Alat itu membahagikan sisi bertentangan dengan sisi bersebelahan.",
          "Baca nisbah tangen yang terhasil. Jawapannya ialah nombor biasa, tanpa darjah dan tanpa unit panjang.",
          "Semak sama ada hasilnya kurang, sama atau lebih daripada 1. Di bawah 1 bermaksud segi tiga itu lebih lebar daripada tinggi; tepat 1 bermaksud kaki yang sama; di atas 1 bermaksud sisi bertentangan lebih panjang.",
          "Gunakan Set Semula apabila anda mahu mengosongkan input dan memulakan pengiraan lain. Input baharu berhak mendapat permulaan baharu, bukan nombor sisa daripada masalah sebelumnya."
        ],
        "closingParagraphs": [
          "Kalkulator tidak memerlukan hipotenus atau input sudut. Ia melakukan satu operasi, pembahagian [[a/b]], dan ia melakukannya tepat pada dua kaki yang anda kenal pasti."
        ],
        "tables": [],
        "figures": []
      },
      "sec-examples": {
        "h2": "Contoh langkah demi langkah pengiraan tangen",
        "blocks": [
          {
            "kind": "p",
            "text": "Empat contoh kerja membina kemahiran teras sebelum aplikasi praktikal. Setiap satu mengikut rentak yang sama: tulis formula, gantikan, bahagi, tafsirkan."
          },
          { "kind": "h3", "text": "Contoh 1: segi tiga bersudut tepat 3-4-5" },
          { "kind": "p", "text": "Diberi [[a=3\\,\\text{cm}]], [[b=4\\,\\text{cm}]], dan [[c=5\\,\\text{cm}]]:" },
          { "kind": "p", "text": "[[\\tan(A)=\\frac{3}{4}]]" },
          { "kind": "p", "text": "[[\\boxed{\\tan(A)=0.75}]]" },
          {
            "kind": "p",
            "text": "Sisi bertentangan adalah 75 peratus panjang sisi bersebelahan. Kerana sisi bertentangan ialah kaki yang lebih pendek di sini, nisbahnya berada di bawah 1, menggambarkan segi tiga yang lebih lebar daripada tinggi."
          },
          { "kind": "h3", "text": "Contoh 2: segi tiga bersudut tepat 5-12-13" },
          { "kind": "p", "text": "Diberi sisi bertentangan [[a=5\\,\\text{m}]], sisi bersebelahan [[b=12\\,\\text{m}]], dan hipotenus [[c=13\\,\\text{m}]]:" },
          { "kind": "p", "text": "[[\\tan(A)=\\frac{5}{12}]]" },
          { "kind": "p", "text": "[[\\boxed{\\tan(A)\\approx0.4167}]]" },
          {
            "kind": "p",
            "text": "Sisi bertentangan adalah kira-kira 41.67 peratus panjang sisi bersebelahan. Rangkap tiga 5-12-13 ialah rangkap tiga Pythagoras yang lain, jadi [[5^2+12^2=13^2]] mengesahkan segi tiga bersudut tepat yang tulen."
          },
          { "kind": "h3", "text": "Contoh 3: segi tiga 45-45-90" },
          { "kind": "p", "text": "Diberi sisi bertentangan [[a=1\\,\\text{cm}]], sisi bersebelahan [[b=1\\,\\text{cm}]], dan hipotenus [[c=\\sqrt{2}\\,\\text{cm}]]:" },
          { "kind": "p", "text": "[[\\tan(45^\\circ)=\\frac{1}{1}]]" },
          { "kind": "p", "text": "[[\\boxed{\\tan(45^\\circ)=1}]]" },
          {
            "kind": "p",
            "text": "Kaki yang sama menghasilkan nisbah tangen 1. Ini ialah titik tengah semula jadi skala tangen dan nilai yang patut dihafal: setiap kali dua kaki sepadan, sudut-sudut tirus ialah 45 darjah setiap satu."
          },
          { "kind": "h3", "text": "Contoh 4: segi tiga 30-60-90" },
          { "kind": "p", "text": "Bagi sudut rujukan [[A=60^\\circ]], gunakan sisi bertentangan [[a=\\sqrt{3}\\,\\text{cm}]], sisi bersebelahan [[b=1\\,\\text{cm}]], dan hipotenus [[c=2\\,\\text{cm}]]:" },
          { "kind": "p", "text": "[[\\tan(60^\\circ)=\\frac{\\sqrt{3}}{1}]]" },
          { "kind": "p", "text": "[[\\boxed{\\tan(60^\\circ)\\approx1.7321}]]" },
          {
            "kind": "p",
            "text": "Sisi bertentangan lebih panjang daripada sisi bersebelahan, jadi nisbahnya melebihi 1, seperti sepatutnya bagi sudut 60 darjah. Bandingkan dengan sudut pelengkap:"
          },
          { "kind": "p", "text": "[[\\tan(30^\\circ)=\\frac{1}{\\sqrt{3}}\\approx0.5774]]" },
          {
            "kind": "p",
            "text": "Sudut-sudut tirus pelengkap mempunyai nilai tangen yang salingan, kerana menukar sudut rujukan menukar label bertentangan dan bersebelahan. [[0.5774 \\times 1.7321 \\approx 1]], yang mengesahkan hubungan salingan itu."
          }
        ],
        "steps": [],
        "closingParagraphs": [],
        "tables": [],
        "figures": []
      },
      "sec-applications": {
        "h2": "Contoh sebenar penggunaan nisbah tangen",
        "blocks": [
          {
            "kind": "p",
            "text": "Tangen mendapat tempatnya dalam dunia kerja kerana begitu banyak masalah sebenar sebenarnya ialah masalah kenaikan bahagi larian yang menyamar. Dua belas contoh kerja menunjukkan corak itu berulang merentas landai, bumbung, tangga dan garisan ukur."
          },
          { "kind": "h3", "text": "Contoh 5: mengira kecerunan landai" },
          { "kind": "p", "text": "Sebuah landai yang dipermudah naik 0.6 m sepanjang larian mendatar 8 m. Kenaikan menegak ialah sisi bertentangan, [[a=0.6\\,\\text{m}]], dan larian mendatar ialah sisi bersebelahan, [[b=8\\,\\text{m}]]:" },
          { "kind": "p", "text": "[[\\tan(A)=\\frac{0.6}{8}]]" },
          { "kind": "p", "text": "[[\\boxed{\\tan(A)=0.075}]]" },
          {
            "kind": "p",
            "text": "Gred peratus ialah [[0.075 \\times 100\\%=7.5\\%]], dan sudutnya [[A=\\tan^{-1}(0.075)\\approx4.29^\\circ]]. Landai itu naik 7.5 unit secara menegak bagi setiap 100 unit secara mendatar. Pengiraan tidak menetapkan kebolehaksesan atau pematuhan kod bangunan."
          },
          { "kind": "h3", "text": "Contoh 6: mengira kecondongan bumbung" },
          { "kind": "p", "text": "Sebuah bumbung naik 3 m sepanjang larian mendatar 4 m. Kenaikan menegak ialah sisi bertentangan, [[a=3\\,\\text{m}]], dan larian mendatar ialah sisi bersebelahan, [[b=4\\,\\text{m}]]:" },
          { "kind": "p", "text": "[[\\tan(A)=\\frac{3}{4}]]" },
          { "kind": "p", "text": "[[\\boxed{\\tan(A)=0.75}]]" },
          {
            "kind": "p",
            "text": "Bumbung itu naik 0.75 unit bagi setiap unit mendatar, kecondongan 75 peratus, dan sudut kecondongannya [[A=\\tan^{-1}(0.75)\\approx36.87^\\circ]]. Kecondongan bumbung juga dinyatakan sebagai kenaikan bahagi larian dalam unit tradisional, seperti inci kenaikan bagi setiap 12 inci larian, iaitu nisbah yang sama dalam pakaian berbeza. Nisbah ini bukan penilaian reka bentuk bumbung yang lengkap."
          },
          { "kind": "h3", "text": "Contoh 7: mencari sudut tangga" },
          { "kind": "p", "text": "Sebuah tangga mencapai 4 m ke atas dinding, dan tapaknya 3 m secara mendatar dari dinding. Sudut [[A]] berada antara tangga dan tanah. Tinggi menegak ialah sisi bertentangan, [[a=4\\,\\text{m}]], dan jarak tanah ialah sisi bersebelahan, [[b=3\\,\\text{m}]]:" },
          { "kind": "p", "text": "[[\\tan(A)=\\frac{4}{3}]]" },
          { "kind": "p", "text": "[[\\boxed{\\tan(A)\\approx1.3333}]]" },
          {
            "kind": "p",
            "text": "Sudutnya ialah [[A=\\tan^{-1}(4/3)\\approx53.13^\\circ]]. Tinggi menegak lebih besar daripada jarak mendatar, sebab itulah nisbahnya melebihi 1. Contoh ini menjelaskan geometri dan tidak menetapkan sama ada tangga itu diposisikan dengan selamat."
          },
          { "kind": "h3", "text": "Contoh 8: menganggar sudut dongak ke sebatang pokok" },
          { "kind": "p", "text": "Sebatang pokok tingginya 12 m, dan bayang-bayangnya 9 m panjang di tanah yang rata. Andaikan sinar matahari mencipta model segi tiga bersudut tepat yang dipermudah. Tinggi pokok ialah sisi bertentangan, [[a=12\\,\\text{m}]], dan panjang bayang-bayang ialah sisi bersebelahan, [[b=9\\,\\text{m}]]:" },
          { "kind": "p", "text": "[[\\tan(A)=\\frac{12}{9}]]" },
          { "kind": "p", "text": "[[\\boxed{\\tan(A)\\approx1.3333}]]" },
          {
            "kind": "p",
            "text": "Tingginya kira-kira 1.3333 kali panjang bayang-bayang, dan sudut geometri yang sepadan ialah kira-kira [[53.13^\\circ]]. Contoh ini mengandaikan tanah yang rata, pokok yang menegak, dan model bayang-bayang garis lurus."
          },
          { "kind": "h3", "text": "Contoh 9: mengukur perbezaan ketinggian" },
          { "kind": "p", "text": "Satu ukuran ukur tanah menunjukkan perbezaan ketinggian menegak 15 m sepanjang jarak mendatar 20 m. Perbezaan ketinggian ialah sisi bertentangan, [[a=15\\,\\text{m}]], dan jarak mendatar ialah sisi bersebelahan, [[b=20\\,\\text{m}]]:" },
          { "kind": "p", "text": "[[\\tan(A)=\\frac{15}{20}]]" },
          { "kind": "p", "text": "[[\\boxed{\\tan(A)=0.75}]]" },
          {
            "kind": "p",
            "text": "Perbezaan ketinggian ialah 0.75 kali pemisahan mendatar, dan sudut yang sepadan ialah kira-kira [[36.87^\\circ]]. Ukur tanah sebenar mungkin memerlukan pelarasan tinggi alat, pembetulan, dan ukuran tambahan di luar model yang dipermudah ini."
          },
          { "kind": "h3", "text": "Contoh 10: mengira gred peratus jalan" },
          { "kind": "p", "text": "Sebahagian jalan yang dipermudah naik 1.2 m sepanjang jarak mendatar 24 m. Kenaikan menegak ialah sisi bertentangan, [[a=1.2\\,\\text{m}]], dan larian mendatar ialah sisi bersebelahan, [[b=24\\,\\text{m}]]:" },
          { "kind": "p", "text": "[[\\tan(A)=\\frac{1.2}{24}]]" },
          { "kind": "p", "text": "[[\\boxed{\\tan(A)=0.05}]]" },
          {
            "kind": "p",
            "text": "Gred peratus ialah [[0.05 \\times 100\\%=5\\%]], dan sudutnya [[A=\\tan^{-1}(0.05)\\approx2.86^\\circ]]. Gred 5 peratus tidak bermaksud sudut 5 darjah; perbezaan ini ialah punca kekeliruan yang biasa, dan kedua-dua nombor tidak boleh digunakan secara bergantian."
          },
          { "kind": "h3", "text": "Contoh 11: mengira kecuraman tangga batu" },
          { "kind": "p", "text": "Sebuah tangga batu yang dipermudah mempunyai jumlah kenaikan menegak 2.4 m dan larian mendatar 3.2 m. Kenaikan menegak ialah sisi bertentangan, [[a=2.4\\,\\text{m}]], dan larian mendatar ialah sisi bersebelahan, [[b=3.2\\,\\text{m}]]:" },
          { "kind": "p", "text": "[[\\tan(A)=\\frac{2.4}{3.2}]]" },
          { "kind": "p", "text": "[[\\boxed{\\tan(A)=0.75}]]" },
          {
            "kind": "p",
            "text": "Kenaikan menegak ialah 75 peratus daripada larian mendatar, dan sudutnya kira-kira [[36.87^\\circ]]. Pengiraan tidak mengesahkan dimensi tangga, keselesaan, atau pematuhan kod bangunan."
          },
          { "kind": "h3", "text": "Contoh 12: memahami sudut wayar guy" },
          { "kind": "p", "text": "Sebuah wayar guy dipasang pada tiang 12 m di atas tanah, manakala sauh tanahnya 5 m secara mendatar dari tiang. Tinggi pemasangan ialah sisi bertentangan, [[a=12\\,\\text{m}]], dan jarak tanah ialah sisi bersebelahan, [[b=5\\,\\text{m}]]:" },
          { "kind": "p", "text": "[[\\tan(A)=\\frac{12}{5}]]" },
          { "kind": "p", "text": "[[\\boxed{\\tan(A)=2.4}]]" },
          {
            "kind": "p",
            "text": "Sudutnya ialah [[A=\\tan^{-1}(2.4)\\approx67.38^\\circ]]. Tinggi menegak ialah 2.4 kali jarak sauh mendatar, wayar yang curam mengikut sebarang ukuran. Nisbah tangen tidak menentukan ketegangan wayar, kekuatan sauh, atau keselamatan struktur."
          },
          { "kind": "h3", "text": "Contoh 13: mengira arah boom kren" },
          { "kind": "p", "text": "Sebuah boom kren yang dipermudah mempunyai komponen menegak 8 m dan unjuran mendatar 6 m. Komponen menegak ialah sisi bertentangan, [[a=8\\,\\text{m}]], dan unjuran mendatar ialah sisi bersebelahan, [[b=6\\,\\text{m}]]:" },
          { "kind": "p", "text": "[[\\tan(A)=\\frac{8}{6}]]" },
          { "kind": "p", "text": "[[\\boxed{\\tan(A)\\approx1.3333}]]" },
          {
            "kind": "p",
            "text": "Sudut yang sepadan ialah kira-kira [[53.13^\\circ]]. Komponen menegak ialah kira-kira 1.3333 kali unjuran mendatar. Ini ialah contoh geometri yang dipermudah dan tidak menetapkan kapasiti kren atau keselamatan operasi."
          },
          { "kind": "h3", "text": "Contoh 14: menganggar kecerunan denai mendaki" },
          { "kind": "p", "text": "Sebahagian denai lurus yang dipermudah mempunyai kenaikan ketinggian menegak 120 m dan jarak mendatar 800 m. Kenaikan ketinggian ialah sisi bertentangan, [[a=120\\,\\text{m}]], dan jarak mendatar ialah sisi bersebelahan, [[b=800\\,\\text{m}]]:" },
          { "kind": "p", "text": "[[\\tan(A)=\\frac{120}{800}]]" },
          { "kind": "p", "text": "[[\\boxed{\\tan(A)=0.15}]]" },
          {
            "kind": "p",
            "text": "Gred peratus ialah 15 peratus, dan sudut yang sepadan ialah kira-kira [[8.53^\\circ]]. Model yang dipermudah ini mewakili kecerunan garis lurus yang malar, bukan keseluruhan denai mendaki yang berliku."
          },
          { "kind": "h3", "text": "Contoh 15: menilai pendakap mekanikal" },
          { "kind": "p", "text": "Sebuah pendakap mekanikal pepenjuru mempunyai komponen menegak 1.5 m dan komponen mendatar 2 m. Komponen menegak ialah sisi bertentangan, [[a=1.5\\,\\text{m}]], dan komponen mendatar ialah sisi bersebelahan, [[b=2\\,\\text{m}]]:" },
          { "kind": "p", "text": "[[\\tan(A)=\\frac{1.5}{2}]]" },
          { "kind": "p", "text": "[[\\boxed{\\tan(A)=0.75}]]" },
          {
            "kind": "p",
            "text": "Komponen menegak ialah 75 peratus daripada komponen mendatar. Nisbah tidak menentukan kekuatan pendakap, kapasiti beban, atau kesesuaian."
          },
          { "kind": "h3", "text": "Contoh 16: mencari sudut dongak ke sebuah bangunan" },
          { "kind": "p", "text": "Seorang pemerhati berdiri 24 m secara mendatar dari sebuah bangunan. Bahagian atas bangunan itu 18 m di atas paras mata pemerhati. Perbezaan menegak ialah sisi bertentangan, [[a=18\\,\\text{m}]], dan jarak mendatar ialah sisi bersebelahan, [[b=24\\,\\text{m}]]:" },
          { "kind": "p", "text": "[[\\tan(A)=\\frac{18}{24}]]" },
          { "kind": "p", "text": "[[\\boxed{\\tan(A)=0.75}]]" },
          {
            "kind": "p",
            "text": "Sudut dongak ialah kira-kira [[36.87^\\circ]] di bawah geometri yang dipermudah. Ini ialah sudut ke bahagian atas relatif kepada paras mata mendatar pemerhati, bukan semestinya tinggi keseluruhan bangunan."
          }
        ],
        "steps": [],
        "closingParagraphs": [
          "Tangen ialah nisbah tanpa dimensi, tetapi nilai praktikalnya datang daripada membandingkan kenaikan menegak dengan larian mendatar, menggambarkan kecuraman cerun lurus, mengira sudut dongak, dan menyelesaikan sisi yang hilang apabila sudut diketahui. Tiga kuantiti berkaitan mudah dikelirukan, jadi pastikan jelas: nisbah tangen ialah kenaikan menegak dibahagi larian mendatar; gred peratus ialah nisbah tangen didarab 100 peratus; sudut ialah hasil menggunakan tangen songsang pada nisbah. Tangen sahaja tidak pernah menentukan keselamatan struktur, kapasiti beban, kebolehaksesan atau pematuhan kejuruteraan."
        ],
        "tables": [
          {
            "headers": ["Situasi", "Bertentangan [[a]]", "Bersebelahan [[b]]", "Formula", "Nisbah", "Gred", "Maksud"],
            "rows": [
              ["Landai", "0.6 m", "8 m", "0.6/8", "0.075", "7.5%", "Cerun landai, naik 7.5 bagi setiap 100 larian"],
              ["Kecondongan bumbung", "3 m", "4 m", "3/4", "0.75", "75%", "Kenaikan ialah 75% daripada larian"],
              ["Tangga", "4 m", "3 m", "4/3", "1.3333", "n/a", "Tinggi melebihi jarak tapak, sudut 53.13 darjah"],
              ["Dongakan pokok", "12 m", "9 m", "12/9", "1.3333", "n/a", "Tinggi ialah 1.3333 kali panjang bayang"],
              ["Ukur tanah", "15 m", "20 m", "15/20", "0.75", "75%", "Ketinggian ialah 75% daripada jarak mendatar"],
              ["Gred jalan", "1.2 m", "24 m", "1.2/24", "0.05", "5%", "Gred 5%, bukan sudut 5 darjah"],
              ["Tangga batu", "2.4 m", "3.2 m", "2.4/3.2", "0.75", "75%", "Kenaikan ialah 75% daripada larian"],
              ["Wayar guy", "12 m", "5 m", "12/5", "2.4", "n/a", "Wayar curam, sudut 67.38 darjah"],
              ["Boom kren", "8 m", "6 m", "8/6", "1.3333", "n/a", "Menegak ialah 1.3333 kali mendatar"],
              ["Denai mendaki", "120 m", "800 m", "120/800", "0.15", "15%", "Kecerunan 15% yang malar"],
              ["Pendakap mekanikal", "1.5 m", "2 m", "1.5/2", "0.75", "n/a", "Menegak ialah 75% daripada mendatar"],
              ["Dongakan bangunan", "18 m", "24 m", "18/24", "0.75", "n/a", "Sudut dongak 36.87 darjah"]
            ]
          }
        ],
        "figures": [
          {
            "alt": "Empat panel: landai 0.075, kecondongan bumbung 0.75, tangga 1.3333, ukur tanah 0.75, setiap satu dengan segi tiga berlabel",
            "caption": "Empat pengiraan praktikal: landai, kecondongan bumbung, tangga dan ukur tanah, setiap satu dengan segi tiga, formula dan nisbahnya."
          }
        ]
      },
      "sec-angle": {
        "h2": "Memahami hubungan antara tangen dan saiz sudut",
        "blocks": [
          {
            "kind": "p",
            "text": "Tangen meningkat apabila sudut rujukan meningkat, dan geometri menjelaskan sebabnya. Apabila sudut [[A]] kecil, sisi bertentangan adalah pendek berbanding sisi bersebelahan, jadi nisbahnya berada berhampiran 0. Apabila sudut melebar, sisi bertentangan menjadi bahagian yang lebih panjang daripada sisi bersebelahan, dan nisbahnya menaik: melepasi 1 pada [[45^\\circ]], kemudian tanpa batas apabila sudut menghampiri [[90^\\circ]]. Jadual di bawah menggunakan panjang sisi ilustrasi; nisbah, bukan saiz mutlak segi tiga, menentukan sudut."
          }
        ],
        "steps": [],
        "closingParagraphs": [
          "Coraknya mudah: tangen kecil apabila sisi bertentangan pendek berbanding sisi bersebelahan, sama dengan 1 pada [[45^\\circ]], melebihi 1 bagi sudut tirus yang lebih besar, menghampiri sifar apabila sudut menghampiri [[0^\\circ]], dan bertambah tanpa batas apabila sudut menghampiri [[90^\\circ]]. Segi tiga dengan sudut yang sama mempunyai nisbah tangen yang sama walaupun panjang sisinya berbeza, kerana nisbah menangkap bentuk, bukan saiz."
        ],
        "tables": [
          {
            "headers": ["Sudut [[A]]", "Sisi bertentangan [[a]]", "Sisi bersebelahan [[b]]", "Nisbah tangen"],
            "rows": [
              ["[[30^\\circ]]", "1", "[[\\sqrt{3}]]", "Kira-kira 0.5774"],
              ["[[45^\\circ]]", "1", "1", "1"],
              ["[[60^\\circ]]", "[[\\sqrt{3}]]", "1", "Kira-kira 1.7321"],
              ["[[75^\\circ]]", "Kira-kira 3.7321", "1", "Kira-kira 3.7321"]
            ]
          }
        ],
        "figures": [
          {
            "alt": "Tiga segi tiga pada 30, 45 dan 60 darjah dengan nilai tangen 0.5774, 1, 1.7321; tangen naik dengan sudut",
            "caption": "Apabila sudut A bertambah, sisi bertentangan menjadi bahagian yang lebih panjang daripada sisi bersebelahan, jadi tan(A) naik."
          }
        ]
      },
      "sec-side": {
        "h2": "Cara mencari sisi bertentangan menggunakan tangen",
        "blocks": [
          { "kind": "p", "text": "Formula tangen boleh disusun semula untuk mencari sisi bertentangan apabila sisi bersebelahan dan sudut diketahui. Mulakan dengan [[\\tan(A)=a/b]] dan darabkan kedua-dua belah dengan [[b]]:" },
          { "kind": "p", "text": "[[[\\boxed{a=b\\tan(A)}]]]" },
          { "kind": "p", "text": "Sisi bertentangan sama dengan sisi bersebelahan didarab tangen sudut itu. Diberi sisi bersebelahan [[b=10\\,\\text{m}]] dan sudut [[A=30^\\circ]], dan mengetahui [[\\tan(30^\\circ)=1/\\sqrt{3}\\approx0.5774]]:" },
          { "kind": "p", "text": "[[a=10\\times0.5774]]" },
          { "kind": "p", "text": "[[\\boxed{a\\approx5.774\\,\\text{m}}]]" },
          { "kind": "p", "text": "Kenaikan menegak ialah kira-kira 5.774 m bagi larian mendatar 10 m pada sudut ini." },
          { "kind": "p", "text": "Sisi bersebelahan boleh dicari dengan cara yang sama dengan menyusun semula sekali lagi:" },
          { "kind": "p", "text": "[[[\\boxed{b=\\frac{a}{\\tan(A)}}]]]" },
          { "kind": "p", "text": "Dengan sisi bertentangan [[a=6\\,\\text{m}]] dan [[A=45^\\circ]]: kerana [[\\tan(45^\\circ)=1]], [[b=6/1]], jadi [[\\boxed{b=6\\,\\text{m}}]]. Ini ialah susunan semula matematik bagi formula yang sama. Kalkulator di halaman ini memulangkan nisbah tangen daripada panjang sisi; ia tidak mengira sisi yang hilang secara langsung." }
        ],
        "steps": [],
        "closingParagraphs": [],
        "tables": [],
        "figures": []
      },
      "sec-recover": {
        "h2": "Cara mencari sudut daripada nisbah tangen",
        "blocks": [
          { "kind": "p", "text": "Nisbah tangen dan sudut ialah kuantiti berbeza: satu ialah perbandingan sisi tanpa dimensi, satu lagi diukur dalam darjah. Apabila nisbah diketahui dan sudut diperlukan, tangen songsang boleh digunakan:" },
          { "kind": "p", "text": "[[[\\boxed{A=\\tan^{-1}\\left(\\frac{a}{b}\\right)}]]]" },
          { "kind": "p", "text": "Tangen songsang juga dipanggil arktangen. Diberi [[\\tan(A)=0.75]]:" },
          { "kind": "p", "text": "[[A=\\tan^{-1}(0.75)]]" },
          { "kind": "p", "text": "[[\\boxed{A\\approx36.87^\\circ}]]" },
          { "kind": "p", "text": "Sudutnya kira-kira [[36.87^\\circ]] apabila kalkulator ditetapkan kepada darjah." },
          { "kind": "h3", "text": "Mengapa mod sudut kalkulator penting" },
          { "kind": "p", "text": "Sudut boleh diukur dalam darjah atau radian, dan kalkulator saintifik mesti ditetapkan kepada mod yang dimaksudkan sebelum tangen songsang digunakan. Satu bulatan penuh ialah 360 darjah atau [[2\\pi]] radian, jadi [[45^\\circ=\\pi/4]] radian. Nisbah tangen itu sendiri tidak mempunyai unit darjah mahupun radian; unit-unit itu terpakai pada sudut yang diperoleh daripadanya. Kalkulator nisbah tangen di halaman ini memulangkan nisbah secara langsung dan tidak memulangkan sudut." }
        ],
        "steps": [],
        "closingParagraphs": [],
        "tables": [],
        "figures": []
      },
      "sec-mistakes": {
        "h2": "Kesilapan biasa semasa mengira tangen",
        "blocks": [
          {
            "kind": "p",
            "text": "Kebanyakan ralat tangen datang daripada pecahan yang terbalik, sisi yang tersalah label, atau mengelirukan nisbah dengan sudut. Lalui senarai ini sebelum mempercayai sesuatu hasil."
          }
        ],
        "steps": [
          "Menterbalikkan formula dan mengira [[b/a]] bukannya [[a/b]]. Ini memulangkan kotangen, bukan tangen. Dengan [[a=3]] dan [[b=4]], pecahan yang terbalik memberi 1.3333; yang betul memberi 0.75.",
          "Mengelirukan tangen dengan sinus. Tangen membahagikan sisi bertentangan dengan sisi bersebelahan; sinus membahagikan sisi bertentangan dengan hipotenus. Jika hipotenus berada dalam penyebut, jawapannya ialah sinus, bukan tangen.",
          "Mengelirukan tangen dengan kosinus. Kosinus membahagikan sisi bersebelahan dengan hipotenus. Tangen tidak pernah menggunakan hipotenus sama sekali, jadi hipotenus di mana-mana kedudukan menandakan nisbah yang salah.",
          "Mengelirukan tangen dengan kotangen. Kotangen ialah salingan, bersebelahan bahagi bertentangan. Nama yang serupa menyebabkan kesilapan sebenar, tetapi susunan pecahan adalah tepat terbalik.",
          "Memasukkan hipotenus dalam formula tangen utama. Hipotenus tidak memainkan peranan dalam [[a/b]]. Jika ia muncul dalam pengiraan, formula yang salah telah digunakan.",
          "Menukar sisi bertentangan dan sisi bersebelahan. Kedua-duanya kaki, jadi label mudah tertukar. Sentiasa jejak dari sudut rujukan: bertentangan dengannya ialah bertentangan, menyentuhnya ialah bersebelahan.",
          "Mengenal pasti sisi relatif kepada sudut rujukan yang salah. Bertukar daripada sudut [[A]] kepada sudut [[C]] menukar label bertentangan dan bersebelahan, yang membalikkan nisbah kepada salingannya.",
          "Menganggap tangen mesti kurang daripada 1. Peraturan itu tergolong untuk sinus dan kosinus. Tangen tidak mempunyai had atas bagi sudut tirus, dan hasil melebihi 1 adalah sah sepenuhnya.",
          "Melaporkan nisbah tangen sebagai sudut dalam darjah. Hasil 0.75 ialah nisbah, bukan [[0.75^\\circ]]. Menganggapnya sebagai darjah memasukkan perkara yang tidak masuk akal ke dalam sebarang pengiraan susulan.",
          "Melaporkan nisbah tangen dengan unit ukuran. Unit-unit terbatal dalam pembahagian, jadi \"0.75 m\" adalah salah. Tulis nombor biasa dan kekalkan unit dalam ukuran input di mana ia sepatutnya.",
          "Memasukkan panjang sisi sifar atau negatif. Segi tiga tidak boleh mempunyai sisi sifar atau negatif, jadi input-input ini menandakan ralat kemasukan data atau ukuran yang hilang, bukan kes tepi yang sah.",
          "Mencampurkan unit ukuran yang tidak serasi. Sisi bertentangan 3 m dengan sisi bersebelahan 40 cm memberi 7.5, nombor yang tidak bermakna. Tukar kepada satu unit dahulu: 3 m dan 4 m memberi 0.75 yang betul.",
          "Membundar terlalu awal. Membundarkan pembahagian perantaraan kepada dua perpuluhan dan kemudian meneruskan pengiraan menggandakan ralat. Kekalkan ketepatan penuh melalui setiap langkah dan bundarkan hanya jawapan akhir.",
          "Mengelirukan gred peratus dengan sudut dalam darjah. Gred 5 peratus datang daripada tangen 0.05, tetapi sudutnya [[\\tan^{-1}(0.05)\\approx2.86^\\circ]], bukan 5 darjah. Gred dan sudut ialah kuantiti berbeza.",
          "Menganggap nisbah tangen menentukan saiz mutlak segi tiga. Tangen menggambarkan bentuk, bukan saiz: tidak terhingga banyak segi tiga berkongsi tangen 0.75, daripada sisi bertentangan 3 cm kepada 3 km. Nisbah menetapkan perkadaran; panjang sebenar memerlukan sekurang-kurangnya satu ukuran sisi."
        ],
        "closingParagraphs": [
          "Salah lawan betul: perbandingan kerja. Diberi sisi bertentangan [[a=3]] dan sisi bersebelahan [[b=4]]:",
          "Salah: [[4/3\\approx1.3333]]. Ini ialah nisbah kotangen bagi sudut [[A]], bukan nisbah tangen. Pengangka dan penyebut terbalik.",
          "Betul: [[\\tan(A)=3/4=0.75]].",
          "Sahkan menggunakan sinus dan kosinus: dengan [[c=5]], [[\\sin(A)=3/5=0.6]] dan [[\\cos(A)=4/5=0.8]]. Oleh itu [[\\sin(A)/\\cos(A)=0.6/0.8=0.75]], yang mengesahkan pengiraan tangen."
        ],
        "tables": [],
        "figures": []
      },
      "sec-verify": {
        "h2": "Cara memeriksa sama ada hasil tangen anda sah",
        "blocks": [
          { "kind": "p", "text": "Segi tiga bersudut tepat yang sah dan tidak merosot memerlukan dua kaki positif, [[a \\gt 0]] dan [[b \\gt 0]], diukur dalam unit yang serasi, jadi hasil tangen mestilah positif:" },
          { "kind": "p", "text": "[[[\\boxed{\\tan(A)=\\frac{a}{b} \\gt 0}]]]" },
          { "kind": "p", "text": "Tiada keperluan untuk sisi bertentangan lebih pendek daripada sisi bersebelahan, jadi hasilnya boleh berada di bawah, pada, atau di atas 1. Hasil sifar atau negatif biasanya menunjukkan input tidak sah atau label yang terbalik." },
          { "kind": "h3", "text": "Kaedah 1: semak nisbah" },
          { "kind": "p", "text": "Sahkan semula [[\\tan(A)=a/b]] secara langsung. Dengan [[a=3]] dan [[b=4]]: [[\\tan(A)=3/4=0.75]]. Kerana sisi bertentangan lebih pendek daripada sisi bersebelahan, nisbahnya harus berada di bawah 1; jika pengiraan tangan kedua tidak bersetuju, sisi tersalah label atau unit tercampur." },
          { "kind": "h3", "text": "Kaedah 2: semak teorem Pythagoras" },
          { "kind": "p", "text": "Kira hipotenus apabila diperlukan: [[c=\\sqrt{a^2+b^2}]]. Bagi [[a=3]] dan [[b=4]]: [[c=\\sqrt{9+16}=5]], dan [[3^2+4^2=5^2]]. Ini mengesahkan dimensi segi tiga bersudut tepat 3-4-5. Hipotenus ialah nilai pengesahan di sini, bukan sebahagian formula tangen utama." },
          { "kind": "h3", "text": "Kaedah 3: semak menggunakan tangen songsang" },
          { "kind": "p", "text": "Bagi nisbah tangen 0.75: [[A=\\tan^{-1}(0.75)\\approx36.87^\\circ]]. Kerana nisbahnya berada di bawah 1, sudutnya harus berada di bawah [[45^\\circ]]; jika tidak, label sisi mungkin tertukar. Perbezaan kecil mungkin timbul daripada pembundaran." }
        ],
        "steps": [],
        "closingParagraphs": [],
        "tables": [],
        "figures": []
      },
      "sec-vs": {
        "h2": "Tangen lwn. sinus, kosinus dan kotangen",
        "blocks": [
          {
            "kind": "p",
            "text": "Setiap nisbah membandingkan pasangan sisi yang berbeza, menggunakan sudut rujukan dan label sisi yang sama:"
          }
        ],
        "steps": [],
        "closingParagraphs": [
          "Tangen dan kotangen ialah pasangan salingan: [[\\cot(A)=1/\\tan(A)]]. Jika [[\\tan(A)=0.75]], maka [[\\cot(A)\\approx1.3333]]. Gunakan tangen apabila kedua-dua kaki diketahui atau apabila masalah melibatkan kenaikan bahagi larian; gunakan sinus atau kosinus apabila hipotenus memasuki kerja, dan kotangen apabila perbandingan berjalan ke arah sebaliknya. Kekalkan tangen sebagai pusat: nisbah-nisbah jiran mempunyai halaman mereka sendiri dengan huraian penuh.",
          "Bagi nisbah-nisbah jiran, lihat <a href=\"/sine-ratio-calculator/\" class=\"text-primary hover:underline\">Kalkulator Nisbah Sinus</a>, <a href=\"/cosine-ratio-calculator/\" class=\"text-primary hover:underline\">Kalkulator Nisbah Kosinus</a>, <a href=\"/cotangent-ratio-calculator/\" class=\"text-primary hover:underline\">Kalkulator Nisbah Kotangen</a>, <a href=\"/secant-ratio-calculator/\" class=\"text-primary hover:underline\">Kalkulator Nisbah Sekan</a>, dan <a href=\"/cosecant-ratio-calculator/\" class=\"text-primary hover:underline\">Kalkulator Nisbah Kosekan</a>."
        ],
        "tables": [
          {
            "headers": ["Nisbah", "Formula", "Apa yang dibandingkannya"],
            "rows": [
              ["Sinus", "sin(A) = a/c", "Sisi bertentangan dengan hipotenus"],
              ["Kosinus", "cos(A) = b/c", "Sisi bersebelahan dengan hipotenus"],
              ["Tangen", "tan(A) = a/b", "Sisi bertentangan dengan sisi bersebelahan"],
              ["Kosekan", "csc(A) = c/a", "Hipotenus dengan sisi bertentangan"],
              ["Sekan", "sec(A) = c/b", "Hipotenus dengan sisi bersebelahan"],
              ["Kotangen", "cot(A) = b/a", "Sisi bersebelahan dengan sisi bertentangan"]
            ]
          }
        ],
        "figures": []
      },
      "sec-related": {
        "h2": "Terokai kalkulator trigonometri berkaitan",
        "blocks": [],
        "steps": [],
        "closingParagraphs": [],
        "related": [
          { "name": "Kalkulator Nisbah Sinus", "desc": "Kira sinus sudut daripada sisi bertentangan dan hipotenus." },
          { "name": "Kalkulator Nisbah Kosinus", "desc": "Kira kosinus sudut daripada sisi bersebelahan dan hipotenus." },
          { "name": "Kalkulator Nisbah Kotangen", "desc": "Kira kotangen, salingan tangen, daripada kedua-dua kaki." },
          { "name": "Kalkulator Nisbah Sekan", "desc": "Kira sekan sudut daripada hipotenus dan sisi bersebelahan." },
          { "name": "Kalkulator Nisbah Kosekan", "desc": "Kira kosekan sudut daripada hipotenus dan sisi bertentangan." },
          { "name": "Kalkulator Sudut Segi Tiga Bersudut Tepat", "desc": "Cari sudut segi tiga bersudut tepat yang tidak diketahui daripada sisi yang diketahui." },
          { "name": "Kalkulator Sisi Segi Tiga Bersudut Tepat", "desc": "Cari sisi segi tiga bersudut tepat yang tidak diketahui daripada sudut dan sisi yang diketahui." }
        ],
        "tables": [],
        "figures": []
      }
    },
    "faqs": [
      {
        "question": "Apakah formula nisbah tangen bagi segi tiga bersudut tepat?",
        "answer": "tan(A) = a / b: bahagikan sisi bertentangan a dengan sisi bersebelahan b. Dengan sisi bertentangan 3 cm dan sisi bersebelahan 4 cm, hasilnya ialah 3/4 = 0.75. Perpuluhan itu ialah jawapan lengkap, nisbah tanpa dimensi, bukan sudut."
      },
      {
        "question": "Bagaimana mengira tangen daripada dua panjang sisi?",
        "answer": "Kenal pasti sudut rujukan A, ukur sisi bertentangan a dan sisi bersebelahan b dalam unit yang sama, pastikan kedua-duanya positif, kemudian bahagi: tan(A) = a / b. Di halaman ini, masukkan sisi bertentangan dalam medan pertama dan sisi bersebelahan dalam medan kedua, kemudian klik Kira tan(A)."
      },
      {
        "question": "Mengapa tangen tidak menggunakan hipotenus?",
        "answer": "Tangen membandingkan kedua-dua kaki serenjang secara langsung: menegak lawan mendatar. Hipotenus tidak menambah sebarang maklumat baharu kepada perbandingan itu, jadi formula utama hanya memerlukan sisi bertentangan dan sisi bersebelahan. Teorem Pythagoras boleh mendapatkan semula hipotenus kemudian jika pengiraan lain memerlukannya."
      },
      {
        "question": "Bolehkah tangen melebihi 1?",
        "answer": "Ya. Tangen tidak mempunyai had atas bagi sudut tirus. Apabila sisi bertentangan lebih panjang daripada sisi bersebelahan, nisbahnya melebihi 1: dengan a = 6 dan b = 3, tan(A) = 6/3 = 2. Hasil melebihi 1 adalah sah dari segi matematik dan tidak menunjukkan ralat kalkulator."
      },
      {
        "question": "Apakah maksud nilai tangen 0.75?",
        "answer": "Sisi bertentangan ialah 75 peratus daripada sisi bersebelahan. Dalam segi tiga 3-4-5, sisi bertentangan dengan sudut A ialah 3 unit manakala sisi bersebelahan dengan sudut A ialah 4 unit, jadi tan(A) = 3/4 = 0.75. Ia menggambarkan bentuk segi tiga dan bukan sudut 0.75 darjah."
      },
      {
        "question": "Apakah perbezaan antara tangen dan kotangen?",
        "answer": "Mereka ialah salingan. Tangen membahagikan sisi bertentangan dengan sisi bersebelahan (a/b); kotangen membahagikan sisi bersebelahan dengan sisi bertentangan (b/a). Jika tan(A) = 0.75, maka cot(A) = 1/0.75, kira-kira 1.3333. Susunan pecahan adalah tepat terbalik."
      },
      {
        "question": "Bagaimana saya boleh mengira sudut daripada nisbah tangen?",
        "answer": "Gunakan tangen songsang pada nisbah: A = tan^-1(a/b). Bagi tan(A) = 0.75, A = tan^-1(0.75), kira-kira 36.87 darjah. Tetapkan kalkulator saintifik anda kepada mod darjah dahulu. Kalkulator di halaman ini memulangkan nisbah, bukan sudut."
      },
      {
        "question": "Bagaimana saya boleh mencari sisi bertentangan menggunakan tangen?",
        "answer": "Susun semula formula kepada a = b * tan(A). Jika sisi bersebelahan ialah 10 m dan sudut A ialah 30 darjah, tan(30°) ialah kira-kira 0.5774, jadi a = 10 * 0.5774, kira-kira 5.774 m. Ini ialah susunan semula manual; kalkulator di halaman ini memulangkan nisbah daripada panjang sisi, bukan sisi yang hilang."
      },
      {
        "question": "Bagaimana saya boleh mencari sisi bersebelahan menggunakan tangen?",
        "answer": "Susun semula formula kepada b = a / tan(A). Jika sisi bertentangan ialah 6 m dan sudut A ialah 45 darjah, tan(45°) = 1, jadi b = 6/1 = 6 m. Ini ialah susunan semula matematik bagi formula yang sama, bukan mod berasingan kalkulator di halaman ini."
      },
      {
        "question": "Adakah tangen sama dengan kecerunan (slope)?",
        "answer": "Mereka berkait rapat. Kecerunan sebagai kenaikan bahagi larian ialah perbandingan yang sama yang dibuat tangen: perubahan menegak dibahagi perubahan mendatar. Seorang jurutera jalan yang menulis kecerunan 0.05 dan seorang pelajar trigonometri yang menulis tan(A) = 0.05 sedang menggambarkan nisbah yang sama. Istilahnya berbeza mengikut konteks, bukan mengikut matematik."
      },
      {
        "question": "Apakah perbezaan antara gred peratus dan sudut dalam darjah?",
        "answer": "Gred peratus ialah 100 kali nisbah tangen: tangen 0.05 memberi gred 5%. Sudut ialah tangen songsang bagi nisbah: tan^-1(0.05) ialah kira-kira 2.86 darjah. Gred 5% oleh itu bukan sudut 5 darjah. Mengelirukan kedua-duanya ialah antara kesilapan tangen yang paling biasa."
      },
      {
        "question": "Bagaimana tangen digunakan dalam pembinaan dan ukur tanah?",
        "answer": "Tangen membandingkan kenaikan menegak dengan larian mendatar, yang tepat digambarkan oleh kecondongan bumbung, cerun landai, gred jalan dan kecuraman tangga. Juruukur menggunakannya untuk menukar perbezaan ketinggian dan jarak mendatar kepada sudut dongak. Dalam setiap kes, nisbah sahaja tidak pernah memperakui keselamatan struktur atau pematuhan kod."
      }
    ],
    "faqHeading": "Soalan lazim",
    "relatedHeading": "Terokai kalkulator trigonometri berkaitan",
    "conclusion": {
      "h2": "Gunakan nisbah tangen dengan yakin",
      "paragraphs": [
        "Tangen ialah nisbah dua kaki: bahagikan sisi bertentangan dengan sisi bersebelahan dan anda telah menggambarkan berapa unit kenaikan menegak datang dengan setiap unit larian mendatar. Formula [[\\tan(A)=a/b]] hanya memerlukan dua ukuran, jawapannya sentiasa nombor tanpa dimensi yang boleh berada di bawah, pada, atau di atas 1, dan ia bertambah apabila sudut rujukan bertambah. Apabila sisi yang hilang diperlukan, [[a=b\\tan(A)]] mendapatkan semula sisi bertentangan; apabila sudut diperlukan, [[A=\\tan^{-1}(a/b)]] mendapatkannya semula. Landai, bumbung, tangga, atau 3-4-5 dalam buku teks, kaedahnya tidak pernah berubah: kenal pasti sisi bertentangan, kenal pasti sisi bersebelahan, bahagi, dan sahkan dengan semakan nisbah positif."
      ]
    }
  }
,
  "pl": {
    "tocHeading": "W tym przewodniku",
    "tocItems": {
      "sec-intro": "Czym jest kalkulator stosunku tangensa?",
      "sec-triangle": "Zrozumienie przyprostokątnej przeciwległej i przyległej",
      "sec-whatis": "Zrozumienie stosunku tangensa",
      "sec-formula": "Jak działa wzór na tangens",
      "sec-howto": "Jak korzystać z kalkulatora stosunku tangensa",
      "sec-examples": "Przykłady obliczania tangensa krok po kroku",
      "sec-applications": "Praktyczne przykłady użycia stosunku tangensa",
      "sec-angle": "Zrozumienie związku między tangensem a wielkością kąta",
      "sec-side": "Jak znaleźć przyprostokątną przeciwległą za pomocą tangensa",
      "sec-recover": "Jak znaleźć kąt ze stosunku tangensa",
      "sec-mistakes": "Typowe błędy przy obliczaniu tangensa",
      "sec-verify": "Jak sprawdzić, czy wynik tangensa jest poprawny",
      "sec-vs": "Tangens kontra sinus, cosinus i cotangens",
      "sec-faq": "Często zadawane pytania",
      "sec-related": "Poznaj powiązane kalkulatory trygonometryczne"
    },
    "sections": {
      "sec-intro": {
        "h2": "Czym jest kalkulator stosunku tangensa?",
        "blocks": [
          {
            "kind": "p",
            "text": "Kalkulator stosunku tangensa odpowiada na jedno pytanie: dla kąta ostrego w trójkącie prostokątnym, jak bok leżący naprzeciw kąta ma się do boku przylegającego do niego? Wpisz przyprostokątną przeciwległą i przyprostokątną przyległą, a narzędzie podzieli przyprostokątną przeciwległą przez przyległą, zwracając [[\\tan(A)=a/b]]. Trójkąt prostokątny ma przyprostokątną przeciwległą 3 cm i przyprostokątną przyległą 4 cm, więc [[\\tan(A)=3/4=0.75]]. To 0,75 to stosunek tangensa: mówi, że przyprostokątna przeciwległa ma 75 procent długości przyprostokątnej przyległej. To nie jest kąt, więc nigdy nie czytaj tego jako [[0.75^\\circ]]. Przeciwprostokątna nigdy nie wchodzi do tego obliczenia; przyprostokątna przeciwległa i przyległa wystarczą same w sobie. Tangens to jeden z podstawowych stosunków trygonometrycznych, a jego szczególną siłą jest porównywanie wzniesienia pionowego z odległością poziomą, dlatego pojawia się w nachyleniu dachów, spadkach dróg i pochylniach. Wynik to liczba bezwymiarowa: czyste porównanie dwóch długości, a nie pomiar w centymetrach czy stopniach. Jeśli potrzebujesz kąta w stopniach, arcus tangens zamieni stosunek na stopnie."
          }
        ],
        "steps": [],
        "closingParagraphs": [],
        "tables": [],
        "figures": []
      },
      "sec-triangle": {
        "h2": "Zrozumienie przyprostokątnej przeciwległej i przyległej",
        "blocks": [
          { "kind": "h3", "text": "Czym jest trójkąt prostokątny?" },
          {
            "kind": "p",
            "text": "Trójkąt prostokątny ma jeden kąt równy dokładnie [[90^\\circ]], czyli kąt między dwiema prostymi prostopadłymi, jak ściana spotykająca poziomą podłogę. Przeciwprostokątna leży naprzeciw tego kąta prostego i jest zawsze najdłuższym bokiem, ponieważ musi spinać pełną przekątną narożnika. Pozostałe dwa kąty dzielą między sobą pozostałe 90 stopni, więc oba są ostre. Dwie przyprostokątne spotykają się w kącie prostym, prostopadle do siebie, i to ich relacja z przeciwprostokątną umożliwia trygonometrię trójkąta prostokątnego."
          },
          { "kind": "h3", "text": "Czym jest przyprostokątna przeciwległa?" },
          {
            "kind": "p",
            "text": "Przyprostokątna przeciwległa [[a]] to bok leżący bezpośrednio naprzeciw kąta odniesienia [[A]], jedyny bok, który nigdy nie dotyka jego wierzchołka. W zadaniach praktycznych często pełni rolę wzniesienia pionowego, różnicy wysokości albo wysokości: wysokości, na jaką drabina sięga ściany, wzniesienia dachu albo pionowej składowej wysięgnika dźwigu. Który bok liczy się jako przeciwległy, zależy od wybranego kąta odniesienia, więc przejście z kąta [[A]] na kąt [[C]] zamienia etykiety przeciwległej i przyległej. Występuje w liczniku wzoru na tangens, ponieważ tangens mierzy, jak duży jest bok naprzeciw kąta względem boku przylegającego do kąta."
          },
          { "kind": "h3", "text": "Czym jest przyprostokątna przyległa?" },
          {
            "kind": "p",
            "text": "Przyprostokątna przyległa [[b]] to przyprostokątna, która dotyka kąta odniesienia [[A]], nie będąc przeciwprostokątną. W zadaniach praktycznych często pełni rolę odległości poziomej albo odległości przy ziemi: podstawy drabiny od ściany, poziomej odległości dachu albo długości cienia w zadaniu o kącie padania słońca. Nigdy nie jest przeciwprostokątną, punkt wart sprawdzenia za każdym razem, ponieważ przeciwprostokątna to bok naprzeciw kąta prostego. Występuje w mianowniku wzoru na tangens, dlatego tangens porównuje przyprostokątną przeciwległą z tą przyprostokątną, a nie z najdłuższym bokiem."
          },
          { "kind": "h3", "text": "Czym jest przeciwprostokątna?" },
          {
            "kind": "p",
            "text": "Przeciwprostokątna [[c]] to bok naprzeciw kąta prostego: na każdym rysunku leży naprzeciw małego kwadracika oznaczającego narożnik [[90^\\circ]] i jest ściśle dłuższa niż każda przyprostokątna. W zadaniach praktycznych często pełni rolę długości pochyłej: drabiny, krokwi dachu, odciągu albo ukośnego zastrzału. Nie jest potrzebna do podstawowego obliczenia tangensa, ponieważ wzór na tangens porównuje dwie przyprostokątne bezpośrednio. Jeśli jest potrzebna do innego zadania, twierdzenie Pitagorasa obliczy ją z dwóch przyprostokątnych: [[c=\\sqrt{a^2+b^2}]]."
          }
        ],
        "steps": [],
        "closingParagraphs": [
          "Tangens używa dwóch przyprostokątnych i nie wymaga przeciwprostokątnej. Zachowaj konsekwentnie tę konwencję oznaczania boków: [[a]] naprzeciw kąta [[A]], [[b]] przylegająca do kąta [[A]] i [[c]] jako przeciwprostokątna naprzeciw kąta prostego przy [[B]]."
        ],
        "tables": [],
        "figures": [
          {
            "alt": "Trójkąt prostokątny z kątem A w lewym dolnym rogu, złota przyprostokątna przeciwległa a, niebieska przyległa b, tan(A)=a/b",
            "caption": "Kąt A znajduje się w lewym dolnym rogu; tangens używa złotej przyprostokątnej przeciwległej a i niebieskiej przyległej b, a nie przeciwprostokątnej c."
          }
        ]
      },
      "sec-whatis": {
        "h2": "Zrozumienie stosunku tangensa",
        "blocks": [
          { "kind": "p", "text": "Tangens kąta ostrego [[A]] to przyprostokątna przeciwległa podzielona przez przyprostokątną przyległą:" },
          { "kind": "p", "text": "[[[\\boxed{\\tan(A)=\\frac{a}{b}}]]]" },
          {
            "kind": "p",
            "text": "Tutaj [[\\tan(A)]] oznacza tangens kąta [[A]], [[a]] to przyprostokątna przeciwległa, a [[b]] to przyprostokątna przyległa. Gdy trójkąt jest ustawiony podstawą wzdłuż kierunku poziomego, tangens porównuje przyprostokątną pionową z poziomą: wzniesienie przez odległość w najczystszej postaci."
          },
          { "kind": "h3", "text": "Zrozumienie SOH-CAH-TOA" },
          { "kind": "p", "text": "Uczniowie zapamiętują trzy podstawowe stosunki jedną pomocą mnemotechniczną:" },
          { "kind": "p", "text": "SOH: Sinus = Przeciwległa / Przeciwprostokątna; CAH: Cosinus = Przyległa / Przeciwprostokątna; TOA: Tangens = Przeciwległa / Przyległa." },
          {
            "kind": "p",
            "text": "TOA odpowiada wzorowi na tangens [[\\tan(A)=a/b]]: T oznacza tangens, O stawia przyprostokątną przeciwległą na górze, a A stawia przyprostokątną przyległą na dole. Pomocnik pomaga wybrać poprawny licznik i mianownik, zanim jakiekolwiek liczby wejdą do obliczeń. Ta sekcja pozostaje skupiona na tangensie; pozostałe dwa stosunki mają własne strony."
          },
          { "kind": "h3", "text": "Dlaczego tangens nie używa przeciwprostokątnej" },
          { "kind": "p", "text": "Tangens porównuje dwie prostopadłe przyprostokątne bezpośrednio, więc przeciwprostokątna jest zbędna. Przy [[a=3]] i [[b=4]]:" },
          { "kind": "p", "text": "[[\\tan(A)=\\frac{3}{4}=0.75]]" },
          {
            "kind": "p",
            "text": "Stosunek już zawiera wszystko o tym, jak przyprostokątna przeciwległa ma się do przyległej; wprowadzenie przeciwprostokątnej zmieniłoby zadawane pytanie. Jeśli przeciwprostokątna jest potrzebna do innego zadania, twierdzenie Pitagorasa obliczy ją z przyprostokątnych. Sam tangens nigdy o nią nie prosi."
          },
          { "kind": "h3", "text": "Dlaczego tangens jest stosunkiem bezwymiarowym" },
          { "kind": "p", "text": "Dzielenie jednej długości przez drugą skraca jednostki fizyczne. Przy zgodnych jednostkach:" },
          { "kind": "p", "text": "[[\\frac{3\\,\\text{m}}{4\\,\\text{m}}=0.75]]" },
          {
            "kind": "p",
            "text": "Metry się skracają, zostawiając zwykłą liczbę. Ten sam stosunek wynika z 300 cm i 400 cm, ponieważ zmiana jednostki dotyka obu boków jednakowo. Jedyny wymóg to zgodne jednostki obu pomiarów: mieszanie metrów z centymetrami daje liczbę bez sensu, a wcześniejsza konwersja zachowuje uczciwość stosunku."
          },
          { "kind": "h3", "text": "Co oznacza wartość tangensa 0,75?" },
          {
            "kind": "p",
            "text": "[[\\tan(A)=0.75]] oznacza, że przyprostokątna przeciwległa to 0,75 przyprostokątnej przyległej, czyli 75 jednostek wzniesienia pionowego na każde 100 jednostek odległości poziomej w tej samej geometrii prostoliniowej. Wyobraź sobie dach, który wznosi się o 75 cm na każde 100 cm odległości poziomej: dokładnie to opisuje 0,75. Nie oznacza to, że kąt wynosi [[0.75^\\circ]]; stosunek i kąt to różne wielkości, a ich mylenie to jeden z najczęstszych błędów w trygonometrii."
          },
          { "kind": "h3", "text": "Co oznacza wartość tangensa 1?" },
          {
            "kind": "p",
            "text": "[[\\tan(A)=1]] oznacza [[a=b]]: przyprostokątne przeciwległa i przyległa są równe. Równoramienny trójkąt prostokątny ma dwie równe przyprostokątne, a ponieważ dwa kąty ostre muszą równo podzielić 90 stopni, każdy wynosi [[45^\\circ]]:"
          },
          { "kind": "p", "text": "[[A=45^\\circ]]" },
          {
            "kind": "p",
            "text": "Równe przyprostokątne, równe kąty ostre, tangens dokładnie 1. To punkt równowagi skali tangensa: poniżej 1 trójkąt jest szerszy niż wysoki, powyżej 1 jest wyższy niż szeroki."
          },
          { "kind": "h3", "text": "Dlaczego tangens może być większy niż 1" },
          {
            "kind": "p",
            "text": "W przeciwieństwie do sinusa i cosinusa, tangens nie ma górnej granicy dla kątów ostrych. Jeśli przyprostokątna przeciwległa przerośnie przyległą, stosunek przekroczy 1 bez żadnego problemu. Przy [[a=6]] i [[b=3]]:"
          },
          { "kind": "p", "text": "[[\\tan(A)=\\frac{6}{3}=2]]" },
          {
            "kind": "p",
            "text": "Przyprostokątna przeciwległa jest dwa razy dłuższa niż przyległa. Wartość tangensa większa niż 1 jest matematycznie poprawna i nie wskazuje błędu kalkulatora; po prostu opisuje stromy trójkąt, jak wysoka drabina stojąca blisko ściany."
          },
          { "kind": "h3", "text": "Jak tangens wiąże się z sinusem i cosinusem" },
          { "kind": "p", "text": "Zacznij od pozostałych dwóch stosunków:" },
          { "kind": "p", "text": "[[\\sin(A)=\\frac{a}{c}]]" },
          { "kind": "p", "text": "[[\\cos(A)=\\frac{b}{c}]]" },
          { "kind": "p", "text": "Podziel sinus przez cosinus, a przeciwprostokątna się skróci:" },
          { "kind": "p", "text": "[[[\\frac{\\sin(A)}{\\cos(A)}=\\frac{a/c}{b/c}=\\frac{a}{b}]]]" },
          { "kind": "p", "text": "Zatem:" },
          { "kind": "p", "text": "[[[\\boxed{\\tan(A)=\\frac{\\sin(A)}{\\cos(A)}}]]]" },
          {
            "kind": "p",
            "text": "Ta tożsamość zgadza się z definicją przeciwległa przez przyległą i daje przydatną kontrolę krzyżową: każdy wynik tangensa powinien równać się sinusowi podzielonemu przez cosinus dla tego samego kąta."
          }
        ],
        "steps": [],
        "closingParagraphs": [],
        "tables": [],
        "figures": [
          {
            "alt": "Trzy etapy: trójkąt 3-4-5, wzór na tangens tan(A)=a/b, wynik 0,75, przeciwległa to 75 procent przyległej",
            "caption": "Trzy etapy: oznacz trójkąt 3-4-5, napisz tan(A) = a/b, a następnie podziel 3 przez 4, aby otrzymać 0,75."
          }
        ]
      },
      "sec-formula": {
        "h2": "Jak działa wzór na tangens",
        "blocks": [
          { "kind": "p", "text": "Zacznij od definicji:" },
          { "kind": "p", "text": "[[\\tan(A)=\\frac{\\text{Opposite}}{\\text{Adjacent}}]]" },
          { "kind": "p", "text": "Następnie użyj oznaczeń tej strony:" },
          { "kind": "p", "text": "[[[\\boxed{\\tan(A)=\\frac{a}{b}}]]]" },
          {
            "kind": "p",
            "text": "Przyprostokątna przeciwległa należy do licznika, ponieważ tangens mierzy, jak duży jest bok naprzeciw kąta; przyprostokątna przyległa należy do mianownika, ponieważ to bok, do którego się porównuje. Zamień je miejscami, a otrzymasz cotangens, zupełnie inny stosunek."
          },
          { "kind": "h3", "text": "W pełni rozwiązany przykład: trójkąt prostokątny 3-4-5" },
          { "kind": "p", "text": "Dana przyprostokątna przeciwległa [[a=3\\,\\text{cm}]], przyprostokątna przyległa [[b=4\\,\\text{cm}]] i przeciwprostokątna [[c=5\\,\\text{cm}]]:" },
          { "kind": "p", "text": "Krok 1: napisz wzór. [[\\tan(A)=a/b]]" },
          { "kind": "p", "text": "Krok 2: podstaw znane wartości. [[\\tan(A)=3/4]]" },
          { "kind": "p", "text": "Krok 3: podziel. [[\\boxed{\\tan(A)=0.75}]]" },
          { "kind": "p", "text": "Krok 4: zinterpretuj wynik. Przyprostokątna przeciwległa ma 75 procent długości przyprostokątnej przyległej." },
          { "kind": "p", "text": "Krok 5: zweryfikuj trójkąt. [[3^2+4^2=5^2]], czyli [[9+16=25]]. Długości boków są zgodne z prawdziwym trójkątem prostokątnym." },
          { "kind": "h3", "text": "Znajdź kąt ze stosunku" },
          { "kind": "p", "text": "Jeśli potrzebny jest sam kąt, zastosuj arcus tangens do stosunku:" },
          { "kind": "p", "text": "[[A=\\tan^{-1}(0.75)]]" },
          { "kind": "p", "text": "[[\\boxed{A\\approx36.87^\\circ}]]" },
          {
            "kind": "p",
            "text": "Arcus tangens nazywany jest też arctangensem. Obliczenie stosunku tangensa i obliczenie kąta to oddzielne operacje: stosunek opisuje kształt trójkąta, a arcus tangens zamienia ten kształt na stopnie. Kalkulator stosunku tangensa na tej stronie zwraca stosunek; odtworzenie kąta to kolejny krok na kalkulatorze naukowym."
          }
        ],
        "steps": [],
        "closingParagraphs": [],
        "tables": [],
        "figures": []
      },
      "sec-howto": {
        "h2": "Jak korzystać z kalkulatora stosunku tangensa",
        "blocks": [
          {
            "kind": "p",
            "text": "Poniższa instrukcja odpowiada aktywnemu interfejsowi na tej stronie. Każdy krok ma znaczenie, ponieważ wynik tangensa jest tylko tak wiarygodny, jak dwa pomiary za nim stojące."
          }
        ],
        "steps": [
          "Zidentyfikuj kąt odniesienia [[A]]. Tangens zawsze pracuje z jednego kąta ostrego; nazwanie go na początku ustala, który bok jest przeciwległy, a który przyległy.",
          "Zlokalizuj przyprostokątną przeciwległą [[a]], bezpośrednio naprzeciw kąta [[A]]. To bok, który nigdy nie dotyka wierzchołka kąta.",
          "Zlokalizuj przyprostokątną przyległą [[b]], która dotyka kąta [[A]] i nie jest przeciwprostokątną. Sprawdź jeszcze raz, czy przez pomyłkę nie chwyciłeś pochyłego boku.",
          "Zdobądź lub zmierz obie długości boków. Miarka, rysunek w skali albo znana specyfikacja, wszystko działa, o ile liczby opisują ten sam trójkąt.",
          "Wpisz długość przyprostokątnej przeciwległej w pierwszym polu wejściowym. To licznik ułamka.",
          "Wpisz długość przyprostokątnej przyległej w drugim polu wejściowym. To mianownik.",
          "Wybierz zgodne jednostki miary za pomocą dostępnych selektorów jednostek. Oba wejścia muszą być w tej samej jednostce albo zostać do niej przeliczone przed dzieleniem.",
          "Upewnij się, że oba pomiary są dodatnie. Bok zerowy lub ujemny nie może należeć do prawdziwego trójkąta.",
          "Kliknij Oblicz tan(A). Narzędzie dzieli przyprostokątną przeciwległą przez przyległą.",
          "Odczytaj wynikowy stosunek tangensa. Odpowiedź to zwykła liczba, bez stopni i bez jednostek długości.",
          "Sprawdź, czy wynik jest mniejszy, równy czy większy niż 1. Poniżej 1 oznacza, że trójkąt jest szerszy niż wysoki; dokładnie 1 oznacza równe przyprostokątne; powyżej 1 oznacza, że przyprostokątna przeciwległa jest dłuższa.",
          "Użyj Resetuj, gdy chcesz wyczyścić wejścia i zacząć kolejne obliczenie. Świeże wejścia zasługują na świeży start, a nie na pozostałości liczb z poprzedniego zadania."
        ],
        "closingParagraphs": [
          "Kalkulator nie wymaga przeciwprostokątnej ani wejścia kąta. Wykonuje jedną operację, dzielenie [[a/b]], i wykonuje je dokładnie na dwóch przyprostokątnych, które wskażesz."
        ],
        "tables": [],
        "figures": []
      },
      "sec-examples": {
        "h2": "Przykłady obliczania tangensa krok po kroku",
        "blocks": [
          {
            "kind": "p",
            "text": "Cztery rozwiązane przykłady budują podstawową umiejętność przed zastosowaniami praktycznymi. Każdy podąża tym samym rytmem: napisz wzór, podstaw, podziel, zinterpretuj."
          },
          { "kind": "h3", "text": "Przykład 1: trójkąt prostokątny 3-4-5" },
          { "kind": "p", "text": "Dane [[a=3\\,\\text{cm}]], [[b=4\\,\\text{cm}]] i [[c=5\\,\\text{cm}]]:" },
          { "kind": "p", "text": "[[\\tan(A)=\\frac{3}{4}]]" },
          { "kind": "p", "text": "[[\\boxed{\\tan(A)=0.75}]]" },
          {
            "kind": "p",
            "text": "Przyprostokątna przeciwległa ma 75 procent długości przyprostokątnej przyległej. Ponieważ przyprostokątna przeciwległa jest tu krótszą przyprostokątną, stosunek znajduje się poniżej 1, opisując trójkąt szerszy niż wysoki."
          },
          { "kind": "h3", "text": "Przykład 2: trójkąt prostokątny 5-12-13" },
          { "kind": "p", "text": "Dana przyprostokątna przeciwległa [[a=5\\,\\text{m}]], przyprostokątna przyległa [[b=12\\,\\text{m}]] i przeciwprostokątna [[c=13\\,\\text{m}]]:" },
          { "kind": "p", "text": "[[\\tan(A)=\\frac{5}{12}]]" },
          { "kind": "p", "text": "[[\\boxed{\\tan(A)\\approx0.4167}]]" },
          {
            "kind": "p",
            "text": "Przyprostokątna przeciwległa ma około 41,67 procent długości przyprostokątnej przyległej. Trójka 5-12-13 to kolejna trójka pitagorejska, więc [[5^2+12^2=13^2]] potwierdza prawdziwy trójkąt prostokątny."
          },
          { "kind": "h3", "text": "Przykład 3: trójkąt 45-45-90" },
          { "kind": "p", "text": "Dana przyprostokątna przeciwległa [[a=1\\,\\text{cm}]], przyprostokątna przyległa [[b=1\\,\\text{cm}]] i przeciwprostokątna [[c=\\sqrt{2}\\,\\text{cm}]]:" },
          { "kind": "p", "text": "[[\\tan(45^\\circ)=\\frac{1}{1}]]" },
          { "kind": "p", "text": "[[\\boxed{\\tan(45^\\circ)=1}]]" },
          {
            "kind": "p",
            "text": "Równe przyprostokątne dają stosunek tangensa 1. To naturalny środek skali tangensa i wartość warta zapamiętania: ilekroć dwie przyprostokątne są zgodne, kąty ostre wynoszą po 45 stopni."
          },
          { "kind": "h3", "text": "Przykład 4: trójkąt 30-60-90" },
          { "kind": "p", "text": "Dla kąta odniesienia [[A=60^\\circ]] użyj przyprostokątnej przeciwległej [[a=\\sqrt{3}\\,\\text{cm}]], przyprostokątnej przyległej [[b=1\\,\\text{cm}]] i przeciwprostokątnej [[c=2\\,\\text{cm}]]:" },
          { "kind": "p", "text": "[[\\tan(60^\\circ)=\\frac{\\sqrt{3}}{1}]]" },
          { "kind": "p", "text": "[[\\boxed{\\tan(60^\\circ)\\approx1.7321}]]" },
          {
            "kind": "p",
            "text": "Przyprostokątna przeciwległa jest dłuższa niż przyległa, więc stosunek przekracza 1, jak powinien dla kąta 60 stopni. Porównaj z kątem dopełniającym:"
          },
          { "kind": "p", "text": "[[\\tan(30^\\circ)=\\frac{1}{\\sqrt{3}}\\approx0.5774]]" },
          {
            "kind": "p",
            "text": "Dopełniające się kąty ostre mają odwrotne wartości tangensa, ponieważ zamiana kąta odniesienia zamienia etykiety przeciwległej i przyległej. [[0.5774 \\times 1.7321 \\approx 1]], co potwierdza związek odwrotności."
          }
        ],
        "steps": [],
        "closingParagraphs": [],
        "tables": [],
        "figures": []
      },
      "sec-applications": {
        "h2": "Praktyczne przykłady użycia stosunku tangensa",
        "blocks": [
          {
            "kind": "p",
            "text": "Tangens zasłużył na swoje miejsce w świecie pracy, ponieważ tak wiele rzeczywistych problemów to w gruncie rzeczy przebrane problemy wzniesienie przez odległość. Dwanaście rozwiązanych przykładów pokazuje powtarzający się wzorzec na pochylniach, dachach, drabinach i liniach pomiarowych."
          },
          { "kind": "h3", "text": "Przykład 5: obliczanie nachylenia pochylni" },
          { "kind": "p", "text": "Uproszczona pochylnia wznosi się o 0,6 m na odległości poziomej 8 m. Wzniesienie pionowe to przyprostokątna przeciwległa, [[a=0.6\\,\\text{m}]], a odległość pozioma to przyprostokątna przyległa, [[b=8\\,\\text{m}]]:" },
          { "kind": "p", "text": "[[\\tan(A)=\\frac{0.6}{8}]]" },
          { "kind": "p", "text": "[[\\boxed{\\tan(A)=0.075}]]" },
          {
            "kind": "p",
            "text": "Spadek procentowy wynosi [[0.075 \\times 100\\%=7.5\\%]], a kąt to [[A=\\tan^{-1}(0.075)\\approx4.29^\\circ]]. Pochylnia wznosi się o 7,5 jednostki pionowo na każde 100 jednostek poziomo. Obliczenie nie ustala dostępności ani zgodności z przepisami budowlanymi."
          },
          { "kind": "h3", "text": "Przykład 6: obliczanie nachylenia dachu" },
          { "kind": "p", "text": "Dach wznosi się o 3 m na odległości poziomej 4 m. Wzniesienie pionowe to przyprostokątna przeciwległa, [[a=3\\,\\text{m}]], a odległość pozioma to przyprostokątna przyległa, [[b=4\\,\\text{m}]]:" },
          { "kind": "p", "text": "[[\\tan(A)=\\frac{3}{4}]]" },
          { "kind": "p", "text": "[[\\boxed{\\tan(A)=0.75}]]" },
          {
            "kind": "p",
            "text": "Dach wznosi się o 0,75 jednostki na każdą jednostkę poziomą, nachylenie 75 procent, a kąt nachylenia wynosi [[A=\\tan^{-1}(0.75)\\approx36.87^\\circ]]. Nachylenie dachu wyraża się też jako wzniesienie przez odległość w jednostkach tradycyjnych, na przykład cale wzniesienia na 12 cali odległości, co jest tym samym stosunkiem w innym przebraniu. Ten stosunek nie stanowi pełnej oceny projektu dachu."
          },
          { "kind": "h3", "text": "Przykład 7: znajdowanie kąta drabiny" },
          { "kind": "p", "text": "Drabina sięga 4 m w górę ściany, a jej podstawa jest 3 m poziomo od ściany. Kąt [[A]] znajduje się między drabiną a ziemią. Wysokość pionowa to przyprostokątna przeciwległa, [[a=4\\,\\text{m}]], a odległość przy ziemi to przyprostokątna przyległa, [[b=3\\,\\text{m}]]:" },
          { "kind": "p", "text": "[[\\tan(A)=\\frac{4}{3}]]" },
          { "kind": "p", "text": "[[\\boxed{\\tan(A)\\approx1.3333}]]" },
          {
            "kind": "p",
            "text": "Kąt wynosi [[A=\\tan^{-1}(4/3)\\approx53.13^\\circ]]. Wysokość pionowa jest większa niż odległość pozioma, dlatego stosunek przekracza 1. Przykład wyjaśnia geometrię i nie ustala, czy drabina jest ustawiona bezpiecznie."
          },
          { "kind": "h3", "text": "Przykład 8: szacowanie kąta wzniesienia do drzewa" },
          { "kind": "p", "text": "Drzewo ma 12 m wysokości, a jego cień ma 9 m długości na równym terenie. Załóż, że promienie słoneczne tworzą uproszczony model trójkąta prostokątnego. Wysokość drzewa to przyprostokątna przeciwległa, [[a=12\\,\\text{m}]], a długość cienia to przyprostokątna przyległa, [[b=9\\,\\text{m}]]:" },
          { "kind": "p", "text": "[[\\tan(A)=\\frac{12}{9}]]" },
          { "kind": "p", "text": "[[\\boxed{\\tan(A)\\approx1.3333}]]" },
          {
            "kind": "p",
            "text": "Wysokość jest około 1,3333 raza długości cienia, a odpowiadający kąt geometryczny wynosi około [[53.13^\\circ]]. Przykład zakłada równy teren, pionowe drzewo i prostoliniowy model cienia."
          },
          { "kind": "h3", "text": "Przykład 9: pomiar różnicy wysokości" },
          { "kind": "p", "text": "Pomiar geodezyjny wykazuje pionową różnicę wysokości 15 m na odległości poziomej 20 m. Różnica wysokości to przyprostokątna przeciwległa, [[a=15\\,\\text{m}]], a odległość pozioma to przyprostokątna przyległa, [[b=20\\,\\text{m}]]:" },
          { "kind": "p", "text": "[[\\tan(A)=\\frac{15}{20}]]" },
          { "kind": "p", "text": "[[\\boxed{\\tan(A)=0.75}]]" },
          {
            "kind": "p",
            "text": "Różnica wysokości to 0,75 odległości poziomej, a odpowiadający kąt wynosi około [[36.87^\\circ]]. Rzeczywista geodezja może wymagać korekt wysokości instrumentu, poprawek i dodatkowych pomiarów wykraczających poza ten uproszczony model."
          },
          { "kind": "h3", "text": "Przykład 10: obliczanie procentowego spadku drogi" },
          { "kind": "p", "text": "Uproszczony odcinek drogi wznosi się o 1,2 m na odległości poziomej 24 m. Wzniesienie pionowe to przyprostokątna przeciwległa, [[a=1.2\\,\\text{m}]], a odległość pozioma to przyprostokątna przyległa, [[b=24\\,\\text{m}]]:" },
          { "kind": "p", "text": "[[\\tan(A)=\\frac{1.2}{24}]]" },
          { "kind": "p", "text": "[[\\boxed{\\tan(A)=0.05}]]" },
          {
            "kind": "p",
            "text": "Spadek procentowy wynosi [[0.05 \\times 100\\%=5\\%]], a kąt to [[A=\\tan^{-1}(0.05)\\approx2.86^\\circ]]. Spadek 5 procent nie oznacza kąta 5 stopni; to rozróżnienie jest częstym źródłem zamieszania i obu liczb nigdy nie należy używać zamiennie."
          },
          { "kind": "h3", "text": "Przykład 11: obliczanie stromości schodów" },
          { "kind": "p", "text": "Uproszczone schody mają całkowite wzniesienie pionowe 2,4 m i odległość poziomą 3,2 m. Wzniesienie pionowe to przyprostokątna przeciwległa, [[a=2.4\\,\\text{m}]], a odległość pozioma to przyprostokątna przyległa, [[b=3.2\\,\\text{m}]]:" },
          { "kind": "p", "text": "[[\\tan(A)=\\frac{2.4}{3.2}]]" },
          { "kind": "p", "text": "[[\\boxed{\\tan(A)=0.75}]]" },
          {
            "kind": "p",
            "text": "Wzniesienie pionowe to 75 procent odległości poziomej, a kąt wynosi około [[36.87^\\circ]]. Obliczenie nie weryfikuje wymiarów schodów, wygody ani zgodności z przepisami budowlanymi."
          },
          { "kind": "h3", "text": "Przykład 12: zrozumienie kąta odciągu" },
          { "kind": "p", "text": "Odciąg mocuje się do słupa 12 m nad ziemią, a jego kotwa gruntowa jest 5 m poziomo od słupa. Wysokość mocowania to przyprostokątna przeciwległa, [[a=12\\,\\text{m}]], a odległość przy ziemi to przyprostokątna przyległa, [[b=5\\,\\text{m}]]:" },
          { "kind": "p", "text": "[[\\tan(A)=\\frac{12}{5}]]" },
          { "kind": "p", "text": "[[\\boxed{\\tan(A)=2.4}]]" },
          {
            "kind": "p",
            "text": "Kąt wynosi [[A=\\tan^{-1}(2.4)\\approx67.38^\\circ]]. Wysokość pionowa to 2,4 odległości poziomej kotwy, stromy odciąg pod każdym względem. Stosunek tangensa nie określa naciągu liny, wytrzymałości kotwy ani bezpieczeństwa konstrukcji."
          },
          { "kind": "h3", "text": "Przykład 13: obliczanie kierunku wysięgnika dźwigu" },
          { "kind": "p", "text": "Uproszczony wysięgnik dźwigu ma składową pionową 8 m i rzut poziomy 6 m. Składowa pionowa to przyprostokątna przeciwległa, [[a=8\\,\\text{m}]], a rzut poziomy to przyprostokątna przyległa, [[b=6\\,\\text{m}]]:" },
          { "kind": "p", "text": "[[\\tan(A)=\\frac{8}{6}]]" },
          { "kind": "p", "text": "[[\\boxed{\\tan(A)\\approx1.3333}]]" },
          {
            "kind": "p",
            "text": "Odpowiadający kąt wynosi około [[53.13^\\circ]]. Składowa pionowa to około 1,3333 rzutu poziomego. To uproszczony przykład geometryczny i nie ustala udźwigu dźwigu ani bezpieczeństwa pracy."
          },
          { "kind": "h3", "text": "Przykład 14: szacowanie nachylenia szlaku turystycznego" },
          { "kind": "p", "text": "Uproszczony prosty odcinek szlaku ma pionowe przewyższenie 120 m i odległość poziomą 800 m. Przewyższenie to przyprostokątna przeciwległa, [[a=120\\,\\text{m}]], a odległość pozioma to przyprostokątna przyległa, [[b=800\\,\\text{m}]]:" },
          { "kind": "p", "text": "[[\\tan(A)=\\frac{120}{800}]]" },
          { "kind": "p", "text": "[[\\boxed{\\tan(A)=0.15}]]" },
          {
            "kind": "p",
            "text": "Spadek procentowy wynosi 15 procent, a odpowiadający kąt około [[8.53^\\circ]]. Ten uproszczony model reprezentuje stałe prostoliniowe nachylenie, a nie cały kręty szlak turystyczny."
          },
          { "kind": "h3", "text": "Przykład 15: ocena zastrzału mechanicznego" },
          { "kind": "p", "text": "Ukośny zastrzał mechaniczny ma składową pionową 1,5 m i składową poziomą 2 m. Składowa pionowa to przyprostokątna przeciwległa, [[a=1.5\\,\\text{m}]], a składowa pozioma to przyprostokątna przyległa, [[b=2\\,\\text{m}]]:" },
          { "kind": "p", "text": "[[\\tan(A)=\\frac{1.5}{2}]]" },
          { "kind": "p", "text": "[[\\boxed{\\tan(A)=0.75}]]" },
          {
            "kind": "p",
            "text": "Składowa pionowa to 75 procent składowej poziomej. Stosunek nie określa wytrzymałości zastrzału, nośności ani przydatności."
          },
          { "kind": "h3", "text": "Przykład 16: znajdowanie kąta wzniesienia do budynku" },
          { "kind": "p", "text": "Obserwator stoi 24 m poziomo od budynku. Szczyt budynku jest 18 m powyżej poziomu oczu obserwatora. Różnica pionowa to przyprostokątna przeciwległa, [[a=18\\,\\text{m}]], a odległość pozioma to przyprostokątna przyległa, [[b=24\\,\\text{m}]]:" },
          { "kind": "p", "text": "[[\\tan(A)=\\frac{18}{24}]]" },
          { "kind": "p", "text": "[[\\boxed{\\tan(A)=0.75}]]" },
          {
            "kind": "p",
            "text": "Kąt wzniesienia wynosi około [[36.87^\\circ]] w uproszczonej geometrii. To kąt do szczytu względem poziomego poziomu oczu obserwatora, niekoniecznie całkowita wysokość budynku."
          }
        ],
        "steps": [],
        "closingParagraphs": [
          "Tangens to stosunek bezwymiarowy, ale jego praktyczna wartość wynika z porównywania wzniesienia pionowego z odległością poziomą, opisywania stromości prostego zbocza, obliczania kątów wzniesienia i rozwiązywania brakujących boków, gdy kąt jest znany. Trzy powiązane wielkości łatwo pomylić, więc trzymaj je w porządku: stosunek tangensa to wzniesienie pionowe podzielone przez odległość poziomą; spadek procentowy to stosunek tangensa pomnożony przez 100 procent; kąt to wynik zastosowania arcus tangensa do stosunku. Sam tangens nigdy nie określa bezpieczeństwa konstrukcji, nośności, dostępności ani zgodności inżynierskiej."
        ],
        "tables": [
          {
            "headers": ["Sytuacja", "Przeciwległa [[a]]", "Przyległa [[b]]", "Wzór", "Stosunek", "Spadek", "Znaczenie"],
            "rows": [
              ["Pochylnia", "0.6 m", "8 m", "0.6/8", "0.075", "7.5%", "Łagodny spadek, wznosi 7,5 na 100 odległości"],
              ["Nachylenie dachu", "3 m", "4 m", "3/4", "0.75", "75%", "Wzniesienie to 75% odległości"],
              ["Drabina", "4 m", "3 m", "4/3", "1.3333", "n/a", "Wysokość przewyższa odległość podstawy, kąt 53,13 stopnia"],
              ["Wzniesienie drzewa", "12 m", "9 m", "12/9", "1.3333", "n/a", "Wysokość to 1,3333 długości cienia"],
              ["Pomiar", "15 m", "20 m", "15/20", "0.75", "75%", "Wysokość to 75% odległości poziomej"],
              ["Spadek drogi", "1.2 m", "24 m", "1.2/24", "0.05", "5%", "Spadek 5%, a nie kąt 5 stopni"],
              ["Schody", "2.4 m", "3.2 m", "2.4/3.2", "0.75", "75%", "Wzniesienie to 75% odległości"],
              ["Odciąg", "12 m", "5 m", "12/5", "2.4", "n/a", "Stromy odciąg, kąt 67,38 stopnia"],
              ["Wysięgnik dźwigu", "8 m", "6 m", "8/6", "1.3333", "n/a", "Pionowa to 1,3333 poziomej"],
              ["Szlak turystyczny", "120 m", "800 m", "120/800", "0.15", "15%", "Stałe nachylenie 15%"],
              ["Zastrzał mechaniczny", "1.5 m", "2 m", "1.5/2", "0.75", "n/a", "Pionowa to 75% poziomej"],
              ["Wzniesienie budynku", "18 m", "24 m", "18/24", "0.75", "n/a", "Kąt wzniesienia 36,87 stopnia"]
            ]
          }
        ],
        "figures": [
          {
            "alt": "Cztery panele: pochylnia 0,075, nachylenie dachu 0,75, drabina 1,3333, pomiar 0,75, każdy z oznaczonym trójkątem",
            "caption": "Cztery praktyczne obliczenia: pochylnia, nachylenie dachu, drabina i pomiar, każde z trójkątem, wzorem i stosunkiem."
          }
        ]
      },
      "sec-angle": {
        "h2": "Zrozumienie związku między tangensem a wielkością kąta",
        "blocks": [
          {
            "kind": "p",
            "text": "Tangens rośnie wraz ze wzrostem kąta odniesienia, a geometria wyjaśnia dlaczego. Gdy kąt [[A]] jest mały, przyprostokątna przeciwległa jest krótka względem przyległej, więc stosunek znajduje się blisko 0. W miarę rozszerzania kąta przyprostokątna przeciwległa staje się dłuższym udziałem przyprostokątnej przyległej, a stosunek wspina się: przekracza 1 przy [[45^\\circ]], a potem rośnie bez ograniczeń, gdy kąt zbliża się do [[90^\\circ]]. Poniższa tabela używa ilustracyjnych długości boków; kąt określa stosunek, a nie bezwzględny rozmiar trójkąta."
          }
        ],
        "steps": [],
        "closingParagraphs": [
          "Wzorzec jest prosty: tangens jest mały, gdy przyprostokątna przeciwległa jest krótka względem przyległej, równa się 1 przy [[45^\\circ]], przekracza 1 dla większych kątów ostrych, zbliża się do zera, gdy kąt zbliża się do [[0^\\circ]], i rośnie bez ograniczeń, gdy kąt zbliża się do [[90^\\circ]]. Trójkąty o tym samym kącie mają ten sam stosunek tangensa, nawet gdy ich długości boków się różnią, ponieważ stosunek oddaje kształt, a nie rozmiar."
        ],
        "tables": [
          {
            "headers": ["Kąt [[A]]", "Przyprostokątna przeciwległa [[a]]", "Przyprostokątna przyległa [[b]]", "Stosunek tangensa"],
            "rows": [
              ["[[30^\\circ]]", "1", "[[\\sqrt{3}]]", "Około 0,5774"],
              ["[[45^\\circ]]", "1", "1", "1"],
              ["[[60^\\circ]]", "[[\\sqrt{3}]]", "1", "Około 1,7321"],
              ["[[75^\\circ]]", "Około 3,7321", "1", "Około 3,7321"]
            ]
          }
        ],
        "figures": [
          {
            "alt": "Trzy trójkąty przy 30, 45 i 60 stopniach z wartościami tangensa 0,5774, 1, 1,7321; tangens rośnie z kątem",
            "caption": "W miarę wzrostu kąta A przyprostokątna przeciwległa staje się dłuższym udziałem przyprostokątnej przyległej, więc tan(A) rośnie."
          }
        ]
      },
      "sec-side": {
        "h2": "Jak znaleźć przyprostokątną przeciwległą za pomocą tangensa",
        "blocks": [
          { "kind": "p", "text": "Wzór na tangens można przekształcić, aby znaleźć przyprostokątną przeciwległą, gdy znane są przyprostokątna przyległa i kąt. Zacznij od [[\\tan(A)=a/b]] i pomnóż obie strony przez [[b]]:" },
          { "kind": "p", "text": "[[[\\boxed{a=b\\tan(A)}]]]" },
          { "kind": "p", "text": "Przyprostokątna przeciwległa równa się przyprostokątnej przyległej pomnożonej przez tangens kąta. Dana przyprostokątna przyległa [[b=10\\,\\text{m}]] i kąt [[A=30^\\circ]], oraz wiedząc, że [[\\tan(30^\\circ)=1/\\sqrt{3}\\approx0.5774]]:" },
          { "kind": "p", "text": "[[a=10\\times0.5774]]" },
          { "kind": "p", "text": "[[\\boxed{a\\approx5.774\\,\\text{m}}]]" },
          { "kind": "p", "text": "Wzniesienie pionowe wynosi około 5,774 m przy odległości poziomej 10 m dla tego kąta." },
          { "kind": "p", "text": "Przyprostokątną przyległą można znaleźć tak samo, przekształcając ponownie:" },
          { "kind": "p", "text": "[[[\\boxed{b=\\frac{a}{\\tan(A)}}]]]" },
          { "kind": "p", "text": "Przy przyprostokątnej przeciwległej [[a=6\\,\\text{m}]] i [[A=45^\\circ]]: ponieważ [[\\tan(45^\\circ)=1]], [[b=6/1]], więc [[\\boxed{b=6\\,\\text{m}}]]. To matematyczne przekształcenia tego samego wzoru. Kalkulator na tej stronie zwraca stosunek tangensa z długości boków; nie oblicza bezpośrednio brakujących boków." }
        ],
        "steps": [],
        "closingParagraphs": [],
        "tables": [],
        "figures": []
      },
      "sec-recover": {
        "h2": "Jak znaleźć kąt ze stosunku tangensa",
        "blocks": [
          { "kind": "p", "text": "Stosunek tangensa i kąt to różne wielkości: jedna to bezwymiarowe porównanie boków, druga jest mierzona w stopniach. Gdy stosunek jest znany, a potrzebny jest kąt, można użyć arcus tangensa:" },
          { "kind": "p", "text": "[[[\\boxed{A=\\tan^{-1}\\left(\\frac{a}{b}\\right)}]]]" },
          { "kind": "p", "text": "Arcus tangens nazywany jest też arctangensem. Dany [[\\tan(A)=0.75]]:" },
          { "kind": "p", "text": "[[A=\\tan^{-1}(0.75)]]" },
          { "kind": "p", "text": "[[\\boxed{A\\approx36.87^\\circ}]]" },
          { "kind": "p", "text": "Kąt wynosi około [[36.87^\\circ]], gdy kalkulator jest ustawiony na stopnie." },
          { "kind": "h3", "text": "Dlaczego tryb kąta kalkulatora ma znaczenie" },
          { "kind": "p", "text": "Kąty można mierzyć w stopniach lub radianach, a kalkulator naukowy musi być ustawiony na zamierzony tryb przed zastosowaniem arcus tangensa. Pełne koło to 360 stopni lub [[2\\pi]] radianów, więc [[45^\\circ=\\pi/4]] radiana. Sam stosunek tangensa nie ma jednostek stopni ani radianów; te jednostki dotyczą kąta odtworzonego z niego. Kalkulator stosunku tangensa na tej stronie zwraca stosunek bezpośrednio i nie zwraca kąta." }
        ],
        "steps": [],
        "closingParagraphs": [],
        "tables": [],
        "figures": []
      },
      "sec-mistakes": {
        "h2": "Typowe błędy przy obliczaniu tangensa",
        "blocks": [
          {
            "kind": "p",
            "text": "Większość błędów tangensa pochodzi z odwróconego ułamka, błędnie oznaczonego boku albo mylenia stosunku z kątem. Przejdź przez tę listę, zanim zaufasz wynikowi."
          }
        ],
        "steps": [
          "Odwrócenie wzoru i obliczanie [[b/a]] zamiast [[a/b]]. Zwraca to cotangens, nie tangens. Przy [[a=3]] i [[b=4]] odwrócony ułamek daje 1,3333; poprawny daje 0,75.",
          "Mylenie tangensa z sinusem. Tangens dzieli przyprostokątną przeciwległą przez przyległą; sinus dzieli przyprostokątną przeciwległą przez przeciwprostokątną. Jeśli przeciwprostokątna jest w mianowniku, odpowiedź to sinus, nie tangens.",
          "Mylenie tangensa z cosinusem. Cosinus dzieli przyprostokątną przyległą przez przeciwprostokątną. Tangens nigdy nie używa przeciwprostokątnej, więc przeciwprostokątna w dowolnym miejscu sygnalizuje zły stosunek.",
          "Mylenie tangensa z cotangensem. Cotangens to odwrotność, przyległa przez przeciwległą. Podobne nazwy powodują prawdziwe błędy, ale kolejność ułamka jest dokładnie odwrotna.",
          "Włączanie przeciwprostokątnej do podstawowego wzoru na tangens. Przeciwprostokątna nie odgrywa roli w [[a/b]]. Jeśli pojawi się w obliczeniach, użyto złego wzoru.",
          "Mylenie przyprostokątnych przeciwległej i przyległej. Obie są przyprostokątnymi, więc etykiety łatwo zamienić. Zawsze prowadź od kąta odniesienia: naprzeciw niego jest przeciwległa, dotykająca go jest przyległa.",
          "Identyfikowanie boków względem niewłaściwego kąta odniesienia. Przejście z kąta [[A]] na kąt [[C]] zamienia etykiety przeciwległej i przyległej, co odwraca stosunek do jego odwrotności.",
          "Zakładanie, że tangens musi być mniejszy niż 1. Ta reguła należy do sinusa i cosinusa. Tangens nie ma górnej granicy dla kątów ostrych, a wynik powyżej 1 jest w pełni poprawny.",
          "Podawanie stosunku tangensa jako kąta w stopniach. Wynik 0,75 to stosunek, nie [[0.75^\\circ]]. Traktowanie go jako stopni wprowadza nonsens do każdego dalszego obliczenia.",
          "Podawanie stosunku tangensa z jednostkami miary. Jednostki skracają się w dzieleniu, więc \"0,75 m\" jest błędne. Napisz zwykłą liczbę, a jednostki zostaw w pomiarach wejściowych, gdzie ich miejsce.",
          "Wpisywanie zerowych lub ujemnych długości boków. Trójkąt nie może mieć boku zerowego ani ujemnego, więc te wejścia sygnalizują błąd wprowadzania danych albo brakujący pomiar, a nie poprawny przypadek brzegowy.",
          "Mieszanie niezgodnych jednostek miary. Przyprostokątna przeciwległa 3 m z przyprostokątną przyległą 40 cm daje 7,5, liczbę bez sensu. Najpierw przelicz na jedną jednostkę: 3 m i 4 m dają poprawne 0,75.",
          "Zaokrąglanie zbyt wcześnie. Zaokrąglenie pośredniego dzielenia do dwóch miejsc po przecinku i kontynuowanie obliczeń potęguje błąd. Zachowaj pełną precyzję na każdym kroku i zaokrąglij tylko ostateczną odpowiedź.",
          "Mylenie spadku procentowego z kątem w stopniach. Spadek 5 procent pochodzi z tangensa 0,05, ale kąt to [[\\tan^{-1}(0.05)\\approx2.86^\\circ]], a nie 5 stopni. Spadek i kąt to różne wielkości.",
          "Zakładanie, że stosunek tangensa określa bezwzględny rozmiar trójkąta. Tangens opisuje kształt, nie rozmiar: nieskończenie wiele trójkątów dzieli tangens 0,75, od przyprostokątnej przeciwległej 3 cm po 3 km. Stosunek ustala proporcje; rzeczywiste długości wymagają co najmniej jednego pomiaru boku."
        ],
        "closingParagraphs": [
          "Źle kontra dobrze: porównanie z obliczeniem. Dana przyprostokątna przeciwległa [[a=3]] i przyprostokątna przyległa [[b=4]]:",
          "Niepoprawnie: [[4/3\\approx1.3333]]. To stosunek cotangensa dla kąta [[A]], nie stosunek tangensa. Licznik i mianownik są odwrócone.",
          "Poprawnie: [[\\tan(A)=3/4=0.75]].",
          "Zweryfikuj za pomocą sinusa i cosinusa: przy [[c=5]], [[\\sin(A)=3/5=0.6]] i [[\\cos(A)=4/5=0.8]]. Zatem [[\\sin(A)/\\cos(A)=0.6/0.8=0.75]], co potwierdza obliczenie tangensa."
        ],
        "tables": [],
        "figures": []
      },
      "sec-verify": {
        "h2": "Jak sprawdzić, czy wynik tangensa jest poprawny",
        "blocks": [
          { "kind": "p", "text": "Poprawny, niezdegenerowany trójkąt prostokątny wymaga dwóch dodatnich przyprostokątnych, [[a \\gt 0]] i [[b \\gt 0]], zmierzonych w zgodnych jednostkach, więc wynik tangensa musi być dodatni:" },
          { "kind": "p", "text": "[[[\\boxed{\\tan(A)=\\frac{a}{b} \\gt 0}]]]" },
          { "kind": "p", "text": "Nie ma wymogu, by przyprostokątna przeciwległa była krótsza niż przyległa, więc wynik może znajdować się poniżej, na poziomie lub powyżej 1. Wynik zerowy lub ujemny zwykle wskazuje nieprawidłowe wejścia albo odwrócone etykiety." },
          { "kind": "h3", "text": "Metoda 1: sprawdź stosunek" },
          { "kind": "p", "text": "Zweryfikuj ponownie [[\\tan(A)=a/b]] bezpośrednio. Przy [[a=3]] i [[b=4]]: [[\\tan(A)=3/4=0.75]]. Ponieważ przyprostokątna przeciwległa jest krótsza niż przyległa, stosunek powinien wylądować poniżej 1; jeśli drugie ręczne obliczenie się nie zgadza, bok został błędnie oznaczony albo jednostka została pomieszana." },
          { "kind": "h3", "text": "Metoda 2: sprawdź twierdzenie Pitagorasa" },
          { "kind": "p", "text": "Oblicz przeciwprostokątną, gdy jest potrzebna: [[c=\\sqrt{a^2+b^2}]]. Dla [[a=3]] i [[b=4]]: [[c=\\sqrt{9+16}=5]], i [[3^2+4^2=5^2]]. To potwierdza wymiary trójkąta prostokątnego 3-4-5. Przeciwprostokątna jest tu wartością weryfikacyjną, a nie częścią podstawowego wzoru na tangens." },
          { "kind": "h3", "text": "Metoda 3: sprawdź za pomocą arcus tangensa" },
          { "kind": "p", "text": "Dla stosunku tangensa 0,75: [[A=\\tan^{-1}(0.75)\\approx36.87^\\circ]]. Ponieważ stosunek znajduje się poniżej 1, kąt powinien wylądować poniżej [[45^\\circ]]; jeśli tak nie jest, etykiety boków są prawdopodobnie zamienione. Małe różnice mogą wynikać z zaokrągleń." }
        ],
        "steps": [],
        "closingParagraphs": [],
        "tables": [],
        "figures": []
      },
      "sec-vs": {
        "h2": "Tangens kontra sinus, cosinus i cotangens",
        "blocks": [
          {
            "kind": "p",
            "text": "Każdy stosunek porównuje inną parę boków, używając tego samego kąta odniesienia i tych samych etykiet boków:"
          }
        ],
        "steps": [],
        "closingParagraphs": [
          "Tangens i cotangens to para odwrotności: [[\\cot(A)=1/\\tan(A)]]. Jeśli [[\\tan(A)=0.75]], to [[\\cot(A)\\approx1.3333]]. Sięgaj po tangens, gdy znane są obie przyprostokątne albo gdy zadanie dotyczy wzniesienia przez odległość; sięgaj po sinus lub cosinus, gdy do pracy wchodzi przeciwprostokątna, a po cotangens, gdy porównanie biegnie w drugą stronę. Trzymaj tangens w centrum: sąsiednie stosunki mają własne strony z pełnymi omówieniami.",
          "Sąsiednie stosunki znajdziesz w <a href=\"/sine-ratio-calculator/\" class=\"text-primary hover:underline\">kalkulatorze stosunku sinusa</a>, <a href=\"/cosine-ratio-calculator/\" class=\"text-primary hover:underline\">kalkulatorze stosunku cosinusa</a>, <a href=\"/cotangent-ratio-calculator/\" class=\"text-primary hover:underline\">kalkulatorze stosunku cotangensa</a>, <a href=\"/secant-ratio-calculator/\" class=\"text-primary hover:underline\">kalkulatorze stosunku secansa</a> i <a href=\"/cosecant-ratio-calculator/\" class=\"text-primary hover:underline\">kalkulatorze stosunku cosecansa</a>."
        ],
        "tables": [
          {
            "headers": ["Stosunek", "Wzór", "Co porównuje"],
            "rows": [
              ["Sinus", "sin(A) = a/c", "Przyprostokątną przeciwległą z przeciwprostokątną"],
              ["Cosinus", "cos(A) = b/c", "Przyprostokątną przyległą z przeciwprostokątną"],
              ["Tangens", "tan(A) = a/b", "Przyprostokątną przeciwległą z przyległą"],
              ["Cosecans", "csc(A) = c/a", "Przeciwprostokątną z przyprostokątną przeciwległą"],
              ["Secans", "sec(A) = c/b", "Przeciwprostokątną z przyprostokątną przyległą"],
              ["Cotangens", "cot(A) = b/a", "Przyprostokątną przyległą z przeciwległą"]
            ]
          }
        ],
        "figures": []
      },
      "sec-related": {
        "h2": "Poznaj powiązane kalkulatory trygonometryczne",
        "blocks": [],
        "steps": [],
        "closingParagraphs": [],
        "related": [
          { "name": "Kalkulator stosunku sinusa", "desc": "Oblicz sinus kąta z przyprostokątnej przeciwległej i przeciwprostokątnej." },
          { "name": "Kalkulator stosunku cosinusa", "desc": "Oblicz cosinus kąta z przyprostokątnej przyległej i przeciwprostokątnej." },
          { "name": "Kalkulator stosunku cotangensa", "desc": "Oblicz cotangens, odwrotność tangensa, z dwóch przyprostokątnych." },
          { "name": "Kalkulator stosunku secansa", "desc": "Oblicz secans kąta z przeciwprostokątnej i przyprostokątnej przyległej." },
          { "name": "Kalkulator stosunku cosecansa", "desc": "Oblicz cosecans kąta z przeciwprostokątnej i przyprostokątnej przeciwległej." },
          { "name": "Kalkulator kąta trójkąta prostokątnego", "desc": "Znajdź nieznany kąt trójkąta prostokątnego ze znanych boków." },
          { "name": "Kalkulator boku trójkąta prostokątnego", "desc": "Znajdź nieznany bok trójkąta prostokątnego z kąta i znanego boku." }
        ],
        "tables": [],
        "figures": []
      }
    },
    "faqs": [
      {
        "question": "Jaki jest wzór na stosunek tangensa dla trójkąta prostokątnego?",
        "answer": "tan(A) = a / b: podziel przyprostokątną przeciwległą a przez przyprostokątną przyległą b. Przy przyprostokątnej przeciwległej 3 cm i przyległej 4 cm wynik to 3/4 = 0,75. Ten ułamek dziesiętny to pełna odpowiedź, stosunek bezwymiarowy, nie kąt."
      },
      {
        "question": "Jak obliczyć tangens z dwóch długości boków?",
        "answer": "Zidentyfikuj kąt odniesienia A, zmierz przyprostokątną przeciwległą a i przyległą b w tej samej jednostce, upewnij się, że obie są dodatnie, a następnie podziel: tan(A) = a / b. Na tej stronie wpisz przyprostokątną przeciwległą w pierwszym polu, a przyległą w drugim, a następnie kliknij Oblicz tan(A)."
      },
      {
        "question": "Dlaczego tangens nie używa przeciwprostokątnej?",
        "answer": "Tangens porównuje dwie prostopadłe przyprostokątne bezpośrednio: pionową z poziomą. Przeciwprostokątna nie dodaje żadnych nowych informacji do tego porównania, więc podstawowy wzór potrzebuje tylko przyprostokątnych przeciwległej i przyległej. Twierdzenie Pitagorasa może później odtworzyć przeciwprostokątną, jeśli inne obliczenie jej potrzebuje."
      },
      {
        "question": "Czy tangens może być większy niż 1?",
        "answer": "Tak. Tangens nie ma górnej granicy dla kątów ostrych. Gdy przyprostokątna przeciwległa jest dłuższa niż przyległa, stosunek przekracza 1: przy a = 6 i b = 3, tan(A) = 6/3 = 2. Wynik powyżej 1 jest matematycznie poprawny i nie wskazuje błędu kalkulatora."
      },
      {
        "question": "Co oznacza wartość tangensa 0,75?",
        "answer": "Przyprostokątna przeciwległa to 75 procent przyprostokątnej przyległej. W trójkącie 3-4-5 bok naprzeciw kąta A ma 3 jednostki, a bok przylegający do kąta A ma 4 jednostki, więc tan(A) = 3/4 = 0,75. Opisuje kształt trójkąta i nie jest kątem 0,75 stopnia."
      },
      {
        "question": "Jaka jest różnica między tangensem a cotangensem?",
        "answer": "Są odwrotnościami. Tangens dzieli przyprostokątną przeciwległą przez przyległą (a/b); cotangens dzieli przyległą przez przeciwległą (b/a). Jeśli tan(A) = 0,75, to cot(A) = 1/0,75, około 1,3333. Kolejność ułamka jest dokładnie odwrócona."
      },
      {
        "question": "Jak obliczyć kąt ze stosunku tangensa?",
        "answer": "Zastosuj arcus tangens do stosunku: A = tan^-1(a/b). Dla tan(A) = 0,75, A = tan^-1(0,75), około 36,87 stopnia. Najpierw ustaw kalkulator naukowy na tryb stopni. Kalkulator na tej stronie zwraca stosunek, nie kąt."
      },
      {
        "question": "Jak znaleźć przyprostokątną przeciwległą za pomocą tangensa?",
        "answer": "Przekształć wzór do a = b * tan(A). Jeśli przyprostokątna przyległa ma 10 m, a kąt A wynosi 30 stopni, tan(30°) to około 0,5774, więc a = 10 * 0,5774, około 5,774 m. To ręczne przekształcenie; kalkulator na tej stronie zwraca stosunek z długości boków, a nie brakujące boki."
      },
      {
        "question": "Jak znaleźć przyprostokątną przyległą za pomocą tangensa?",
        "answer": "Przekształć wzór do b = a / tan(A). Jeśli przyprostokątna przeciwległa ma 6 m, a kąt A wynosi 45 stopni, tan(45°) = 1, więc b = 6/1 = 6 m. To matematyczne przekształcenie tego samego wzoru, a nie osobny tryb kalkulatora na tej stronie."
      },
      {
        "question": "Czy tangens to to samo co nachylenie (slope)?",
        "answer": "Są ściśle powiązane. Nachylenie jako wzniesienie przez odległość to to samo porównanie, które wykonuje tangens: zmiana pionowa podzielona przez zmianę poziomą. Inżynier drogowy, który pisze nachylenie 0,05, i uczeń trygonometrii, który pisze tan(A) = 0,05, opisują ten sam stosunek. Terminy różnią się kontekstem, a nie matematyką."
      },
      {
        "question": "Jaka jest różnica między spadkiem procentowym a kątem w stopniach?",
        "answer": "Spadek procentowy to 100 razy stosunek tangensa: tangens 0,05 daje spadek 5%. Kąt to arcus tangens stosunku: tan^-1(0,05) to około 2,86 stopnia. Spadek 5% nie jest więc kątem 5 stopni. Mylenie tych dwóch to jeden z najczęstszych błędów tangensa."
      },
      {
        "question": "Jak tangens jest używany w budownictwie i geodezji?",
        "answer": "Tangens porównuje wzniesienie pionowe z odległością poziomą, co dokładnie opisują nachylenie dachów, spadek pochylni, spadek dróg i stromość schodów. Geodeci używają go, by zamienić różnicę wysokości i odległość poziomą na kąt wzniesienia. W każdym przypadku sam stosunek nigdy nie poświadcza bezpieczeństwa konstrukcji ani zgodności z przepisami."
      }
    ],
    "faqHeading": "Często zadawane pytania",
    "relatedHeading": "Poznaj powiązane kalkulatory trygonometryczne",
    "conclusion": {
      "h2": "Używaj stosunku tangensa z pewnością",
      "paragraphs": [
        "Tangens to stosunek dwóch przyprostokątnych: podziel przyprostokątną przeciwległą przez przyległą, a opiszesz, ile jednostek wzniesienia pionowego przypada na każdą jednostkę odległości poziomej. Wzór [[\\tan(A)=a/b]] potrzebuje tylko dwóch pomiarów, odpowiedź jest zawsze liczbą bezwymiarową, która może znajdować się poniżej, na poziomie lub powyżej 1, i rośnie wraz ze wzrostem kąta odniesienia. Gdy potrzebny jest brakujący bok, [[a=b\\tan(A)]] odtwarza przyprostokątną przeciwległą; gdy potrzebny jest kąt, [[A=\\tan^{-1}(a/b)]] go odtwarza. Pochylnia, dach, drabina czy podręcznikowe 3-4-5, metoda nigdy się nie zmienia: zidentyfikuj przyprostokątną przeciwległą, zidentyfikuj przyprostokątną przyległą, podziel i zweryfikuj kontrolą dodatniego stosunku."
      ]
    }
  }
};
