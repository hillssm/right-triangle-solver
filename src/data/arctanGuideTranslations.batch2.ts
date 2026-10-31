/**
 * arctanGuideTranslations.batch2.ts
 * Translations of the Right Triangle Angle From Tangent Calculator guide (ArctanGuide.astro)
 * Batch 2: Portuguese (pt), Bengali (bn), Japanese (ja), Korean (ko), Malay (ms), Polish (pl).
 *
 * Structure per language:
 * - tocHeading, tocItems (14 entries keyed by section id)
 * - sections (arctan-intro, arctan-sides, arctan-what, arctan-formula, arctan-howto,
 *   arctan-examples, arctan-applications, arctan-ratio, arctan-units, arctan-mistakes,
 *   arctan-verify, arctan-choose, arctan-faq, arctan-related, arctan-conclusion)
 * - faqs (12 question/answer pairs)
 * - relatedHeading, relatedItems (8 calculator names)
 *
 * Formulas, KaTeX markup ([[...]]), variable names, numbers, URLs, and section IDs are
 * preserved exactly as in the English source. No em dashes anywhere.
 */

export const ARCTAN_TRANSLATIONS_BATCH2 = {
  "pt": {
  "tocHeading": "Neste guia",
  "tocItems": {
    "arctan-intro": "Como encontrar um ângulo usando a tangente",
    "arctan-sides": "Entendendo os catetos oposto e adjacente",
    "arctan-what": "O que é tangente em um triângulo retângulo?",
    "arctan-formula": "Como funciona a fórmula da tangente inversa",
    "arctan-howto": "Como usar a calculadora",
    "arctan-examples": "Exemplos passo a passo",
    "arctan-applications": "Exemplos da vida real",
    "arctan-ratio": "Como a razão afeta o ângulo",
    "arctan-units": "Unidades de ângulo e precisão",
    "arctan-mistakes": "Erros comuns",
    "arctan-verify": "Verificando sua resposta",
    "arctan-choose": "Escolhendo a calculadora certa",
    "arctan-faq": "Perguntas frequentes",
    "arctan-related": "Calculadoras relacionadas"
  },
  "sections": {
    "arctan-intro": {
      "h2": "Como encontrar um ângulo usando a tangente",
      "blocks": [
        {
          "kind": "p",
          "text": "Uma calculadora de ângulo de triângulo retângulo a partir da tangente encontra um ângulo agudo quando você conhece os dois catetos do triângulo: o lado oposto e o lado adjacente. Ela divide o lado oposto pelo lado adjacente e depois aplica a tangente inversa a essa razão. O resultado é o ângulo em graus."
        },
        {
          "kind": "p",
          "text": "Imagine uma rampa para cadeira de rodas. Você consegue medir a altura que ela sobe e a distância horizontal que ela percorre, mas a superfície inclinada em si pode ser difícil de medir. Essas duas medidas, a elevação vertical e a extensão horizontal, são os lados oposto e adjacente. A razão entre elas é tudo de que você precisa. A tangente inversa converte essa razão diretamente no ângulo de inclinação, sem precisar medir o comprimento da rampa."
        },
        {
          "kind": "p",
          "text": "Aqui [[A]] é o ângulo que você quer, [[a]] é o lado oposto e [[b]] é o lado adjacente. A tangente os relaciona como [[\\tan(A) = a/b]], e a tangente inversa reverte a relação: [[A = \\arctan(a/b)]]. Como a hipotenusa nunca entra na fórmula, este é o método natural sempre que os dois catetos forem as medidas que você tem em mãos."
        }
      ]
    },
    "arctan-sides": {
      "h2": "Entendendo os catetos oposto e adjacente",
      "blocks": [
        {
          "kind": "h3",
          "text": "O que é um triângulo retângulo?"
        },
        {
          "kind": "p",
          "text": "Um triângulo retângulo tem um ângulo de exatamente 90 graus. Os outros dois ângulos são agudos, ou seja, cada um tem menos de 90 graus, e juntos sempre somam 90 graus. A condição de 90 graus é o que faz as razões trigonométricas funcionarem: seno, cosseno e tangente são definidos pelas relações fixas entre os lados de um triângulo retângulo. Sem o ângulo reto, a razão [[a/b]] não corresponderia a um único ângulo consistente."
        },
        {
          "kind": "h3",
          "text": "O que é o lado oposto?"
        },
        {
          "kind": "p",
          "text": "O lado oposto é o cateto que fica diretamente em frente ao ângulo [[A]]. Ele nunca toca o próprio ângulo. Em termos práticos, ele costuma representar uma elevação vertical: a altura que uma escada alcança na parede, a altura que um telhado ganha ou a componente vertical da lança de um guindaste. O rótulo \"oposto\" depende de qual ângulo você escolheu como referência. Se você trocar a referência de [[A]] para [[B]], o lado que era oposto passa a ser adjacente."
        },
        {
          "kind": "h3",
          "text": "O que é o lado adjacente?"
        },
        {
          "kind": "p",
          "text": "O lado adjacente é o cateto que toca o ângulo [[A]], mas não é a hipotenusa. Ele forma uma das bordas do ângulo. Em medições de campo, ele costuma representar uma extensão horizontal: a distância no chão entre a parede e a base de uma escada, a extensão horizontal de um telhado ou a extensão de uma rampa. Ele é um dos dois catetos perpendiculares e não deve ser confundido com a hipotenusa, que é o lado oposto ao ângulo reto."
        },
        {
          "kind": "h3",
          "text": "O que é a hipotenusa?"
        },
        {
          "kind": "p",
          "text": "A hipotenusa, identificada por [[c]], é o lado oposto ao ângulo de 90 graus e sempre o lado mais longo do triângulo. A calculadora de tangente não precisa do seu comprimento. Se você precisar dela algum dia, o teorema de Pitágoras a calcula a partir dos dois catetos: [[c = \\sqrt{a^2 + b^2}]]. Mas para encontrar o ângulo em si, a hipotenusa é uma informação extra que você pode simplesmente pular."
        },
        {
          "kind": "h3",
          "text": "Por que o ângulo de referência importa"
        },
        {
          "kind": "p",
          "text": "Oposto e adjacente são definidos em relação ao ângulo escolhido. No mesmo triângulo, trocar a referência de [[A]] para [[B]] inverte os papéis dos dois catetos: o lado que era oposto vira adjacente e vice-versa. Inverter a razão de [[a/b]] para [[b/a]], portanto, calcula o ângulo complementar [[B = 90^\\circ - A]] em vez de [[A]]. Manter o ângulo de referência fixo durante todo o cálculo evita essa confusão."
        }
      ],
      "imgAlt": "Anatomia do triângulo retângulo mostrando o lado oposto a, o lado adjacente b e a hipotenusa c para a fórmula do arctan",
      "figcaption": "Anatomia para o arctan: a é o lado oposto em frente ao ângulo A, b é o lado adjacente que toca o ângulo A, c é a hipotenusa."
    },
    "arctan-what": {
      "h2": "O que é tangente em um triângulo retângulo?",
      "blocks": [
        {
          "kind": "p",
          "text": "A tangente compara os dois catetos de um triângulo retângulo. Para o ângulo [[A]], ela é o lado oposto dividido pelo lado adjacente:"
        },
        {
          "kind": "p",
          "text": "[[[\\tan(A) = \\frac{a}{b}]]]"
        },
        {
          "kind": "p",
          "text": "Aqui [[\\tan(A)]] é a tangente do ângulo [[A]], [[a]] é o lado oposto e [[b]] é o lado adjacente. A tangente descreve o quanto o triângulo é íngreme: é a razão entre o cateto vertical e o cateto horizontal quando o triângulo está apoiado com o lado adjacente como base."
        },
        {
          "kind": "p",
          "text": "Por exemplo, quando [[a = 3]] e [[b = 4]]:"
        },
        {
          "kind": "p",
          "text": "[[[\\tan(A) = \\frac{3}{4} = 0.75]]]"
        },
        {
          "kind": "p",
          "text": "A razão não tem unidade física. Metros divididos por metros se cancelam, então não importa se você mediu em metros, pés ou centímetros: a razão 0.75 é o mesmo número puro."
        },
        {
          "kind": "h3",
          "text": "O que é tangente inversa?"
        },
        {
          "kind": "p",
          "text": "A tangente comum parte de um ângulo e produz uma razão. A tangente inversa parte de uma razão e retorna o ângulo. Se [[\\tan(A) = 0.75]], então [[A = \\arctan(0.75) \\approx 36.87^\\circ]]. A tangente inversa reverte a relação da tangente, recuperando o ângulo original a partir da razão entre os lados."
        },
        {
          "kind": "h3",
          "text": "Arco tangente é o mesmo que tangente inversa?"
        },
        {
          "kind": "p",
          "text": "Sim. [[\\arctan(x)]] e [[\\tan^{-1}(x)]] são duas notações para a mesma função. O sobrescrito [[-1]] não significa o recíproco [[1/\\tan(x)]]. O recíproco da tangente é a cotangente, uma função separada."
        },
        {
          "kind": "h3",
          "text": "Entendendo o SOH-CAH-TOA"
        },
        {
          "kind": "p",
          "text": "SOH-CAH-TOA é o macete de memorização padrão: Seno = Oposto / Hipotenusa, Cosseno = Adjacente / Hipotenusa, Tangente = Oposto / Adjacente. A parte TOA identifica a razão correta para esta calculadora, já que as medidas conhecidas são os lados oposto e adjacente."
        },
        {
          "kind": "h3",
          "text": "Por que a tangente não precisa da hipotenusa"
        },
        {
          "kind": "p",
          "text": "A tangente usa os dois catetos perpendiculares diretamente, então o comprimento da diagonal é irrelevante para o cálculo. Conhecer a elevação e a extensão horizontal basta para fixar o ângulo de inclinação. Multiplicar os dois catetos pelo mesmo fator positivo mantém a razão, e portanto o ângulo, inalterados: um triângulo 3-4 e um triângulo 6-8 têm o mesmo ângulo de 36.87 graus."
        }
      ],
      "imgAlt": "Diagrama mostrando as etapas da tangente inversa: divida a por b e aplique arctan para obter o ângulo A",
      "figcaption": "Como o arctan funciona: divida o lado oposto pelo lado adjacente e aplique a tangente inversa para recuperar o ângulo."
    },
    "arctan-formula": {
      "h2": "Como funciona a fórmula da tangente inversa",
      "blocks": [
        {
          "kind": "p",
          "text": "Comece com a definição de tangente:"
        },
        {
          "kind": "p",
          "text": "[[[\\tan(A) = \\frac{a}{b}]]]"
        },
        {
          "kind": "p",
          "text": "Os comprimentos conhecidos dos lados permitem calcular a razão à direita. Para recuperar o ângulo, aplique a tangente inversa aos dois lados:"
        },
        {
          "kind": "p",
          "text": "[[[A = \\arctan\\left(\\frac{a}{b}\\right)]]]"
        },
        {
          "kind": "p",
          "text": "A tangente inversa é aplicada à razão inteira porque a razão como um todo é a tangente do ângulo. Você não pode separá-la entre numerador e denominador."
        },
        {
          "kind": "h3",
          "text": "Exemplo resolvido: lado oposto 3 e lado adjacente 4"
        },
        {
          "kind": "p",
          "text": "Dados [[a = 3]] cm e [[b = 4]] cm:"
        },
        {
          "kind": "p",
          "text": "Etapa 1: escreva a fórmula. [[A = \\arctan(a/b)]]"
        },
        {
          "kind": "p",
          "text": "Etapa 2: substitua os valores. [[A = \\arctan(3/4)]]"
        },
        {
          "kind": "p",
          "text": "Etapa 3: calcule a razão. [[3/4 = 0.75]]"
        },
        {
          "kind": "p",
          "text": "Etapa 4: aplique a tangente inversa. [[A = \\arctan(0.75)]]"
        },
        {
          "kind": "p",
          "text": "Resposta final: [[A \\approx 36.87^\\circ]]"
        },
        {
          "kind": "p",
          "text": "O ângulo é aproximadamente 36.87 graus. As duas casas decimais refletem o arredondamento comum de um resultado irracional, não uma forma exata fechada."
        }
      ]
    },
    "arctan-howto": {
      "h2": "Como usar a calculadora de ângulo de triângulo retângulo a partir da tangente",
      "blocks": [
        {
          "kind": "p",
          "text": "Siga estas etapas para acompanhar a interface ao vivo:"
        }
      ],
      "list": [
        "<strong>Identifique o ângulo reto.</strong> Confirme que o triângulo tem um canto de 90 graus antes de usar qualquer razão trigonométrica.",
        "<strong>Identifique o ângulo de referência A</strong> que você quer calcular.",
        "<strong>Localize o lado oposto a</strong>, o cateto diretamente em frente ao ângulo A.",
        "<strong>Localize o lado adjacente b</strong>, o cateto que toca o ângulo A e não é a hipotenusa.",
        "<strong>Meça ou obtenha os dois comprimentos de lado</strong> usando a mesma unidade.",
        "<strong>Digite o comprimento do lado oposto</strong> no campo correspondente.",
        "<strong>Digite o comprimento do lado adjacente</strong> no campo dele.",
        "<strong>Selecione unidades compatíveis</strong> com os seletores de unidade oferecidos pela calculadora.",
        "<strong>Verifique se os dois comprimentos de lado são positivos</strong> e maiores que zero.",
        "<strong>Pressione Calcular o ângulo A</strong> para executar o cálculo.",
        "<strong>Leia o ângulo calculado</strong> em graus.",
        "<strong>Verifique se o resultado faz sentido</strong> para o triângulo: uma razão próxima de 1 deve dar um ângulo próximo de 45 graus.",
        "<strong>Use Redefinir</strong> para limpar as entradas e começar um novo cálculo."
      ],
      "closingParagraphs": [
        "Cada etapa importa porque um lado mal rotulado é a fonte mais comum de resposta errada. Reservar um momento para confirmar qual cateto é oposto e qual é adjacente evita o erro mais frequente."
      ]
    },
    "arctan-examples": {
      "h2": "Exemplos passo a passo de como encontrar um ângulo usando a tangente",
      "blocks": [
        {
          "kind": "p",
          "text": "Estes quatro exemplos desenvolvem a habilidade essencial antes das aplicações do mundo real. Cada um segue o mesmo padrão: escreva a fórmula, substitua, divida, aplique o arctan."
        },
        {
          "kind": "h3",
          "text": "Exemplo 1: um triângulo retângulo 3-4-5"
        },
        {
          "kind": "p",
          "text": "Dado o lado oposto [[a = 3]] cm e o lado adjacente [[b = 4]] cm, encontre o ângulo [[A]]."
        },
        {
          "kind": "p",
          "text": "Etapa 1: escreva a fórmula. [[A = \\arctan(a/b)]]"
        },
        {
          "kind": "p",
          "text": "Etapa 2: substitua. [[A = \\arctan(3/4)]]"
        },
        {
          "kind": "p",
          "text": "Etapa 3: calcule. [[A = \\arctan(0.75)]]"
        },
        {
          "kind": "p",
          "text": "Resposta final: [[A \\approx 36.87^\\circ]]"
        },
        {
          "kind": "p",
          "text": "A hipotenusa não é necessária mesmo sendo um triângulo 3-4-5. Os dois catetos sozinhos determinam o ângulo, por isso o arctan é a escolha eficiente aqui."
        },
        {
          "kind": "h3",
          "text": "Exemplo 2: lados oposto e adjacente iguais"
        },
        {
          "kind": "p",
          "text": "Dados [[a = 5]] m e [[b = 5]] m:"
        },
        {
          "kind": "p",
          "text": "[[[A = \\arctan\\left(\\frac{5}{5}\\right) = \\arctan(1) = 45^\\circ]]]"
        },
        {
          "kind": "p",
          "text": "Catetos iguais produzem um triângulo retângulo isósceles, então os dois ângulos agudos são ambos exatamente 45 graus."
        },
        {
          "kind": "h3",
          "text": "Exemplo 3: um ângulo abaixo de 45 graus"
        },
        {
          "kind": "p",
          "text": "Dados [[a = 3]] m e [[b = 6]] m:"
        },
        {
          "kind": "p",
          "text": "[[[A = \\arctan\\left(\\frac{3}{6}\\right) \\approx 26.57^\\circ]]]"
        },
        {
          "kind": "p",
          "text": "O ângulo é menor que 45 graus porque o lado oposto é mais curto que o lado adjacente. Uma elevação curta sobre uma extensão longa forma um ângulo raso."
        },
        {
          "kind": "h3",
          "text": "Exemplo 4: um ângulo acima de 45 graus"
        },
        {
          "kind": "p",
          "text": "Dados [[a = 8]] pés e [[b = 4]] pés:"
        },
        {
          "kind": "p",
          "text": "[[[A = \\arctan\\left(\\frac{8}{4}\\right) \\approx 63.43^\\circ]]]"
        },
        {
          "kind": "p",
          "text": "O ângulo passa de 45 graus porque o lado oposto é mais longo que o lado adjacente. Uma elevação alta sobre uma extensão curta forma um ângulo íngreme."
        }
      ]
    },
    "arctan-applications": {
      "h2": "Exemplos da vida real de como calcular ângulos usando a tangente",
      "blocks": [
        {
          "kind": "p",
          "text": "Doze exemplos práticos totalmente resolvidos. Para cada um, a situação é descrita, o triângulo identificado, as medidas informadas, os lados corretos nomeados, a fórmula escrita e calculada, e o resultado interpretado com seus limites práticos."
        },
        {
          "kind": "h3",
          "text": "Exemplo 5: calculando o ângulo de inclinação de um telhado"
        },
        {
          "kind": "p",
          "text": "Um telhado sobe 4 pés na vertical sobre uma extensão horizontal de 12 pés. Encontre o ângulo entre a inclinação do telhado e a horizontal."
        },
        {
          "kind": "p",
          "text": "Conhecido: elevação oposta [[a = 4]] pés, extensão adjacente [[b = 12]] pés. A tangente inversa é apropriada porque as duas medidas perpendiculares são conhecidas e o comprimento da inclinação não é necessário."
        },
        {
          "kind": "p",
          "text": "[[[A = \\arctan\\left(\\frac{4}{12}\\right) \\approx 18.43^\\circ]]]"
        },
        {
          "kind": "p",
          "text": "O telhado sobe cerca de 18.43 graus acima da horizontal. Observe que uma inclinação de telhado expressa como 4:12 é uma razão, não um ângulo de 4 graus. Este resultado geométrico não é uma avaliação estrutural."
        },
        {
          "kind": "h3",
          "text": "Exemplo 6: encontrando o ângulo de uma escada de encosto"
        },
        {
          "kind": "p",
          "text": "Uma escada alcança 4.5 m de altura na parede, e sua base está a 2 m da parede. Encontre o ângulo entre a escada e o chão."
        },
        {
          "kind": "p",
          "text": "Conhecido: altura oposta [[a = 4.5]] m, distância adjacente no chão [[b = 2]] m."
        },
        {
          "kind": "p",
          "text": "[[[A = \\arctan\\left(\\frac{4.5}{2}\\right) \\approx 66.04^\\circ]]]"
        },
        {
          "kind": "p",
          "text": "A altura da parede é oposta ao ângulo no chão e a distância no chão é adjacente. O ângulo calculado sozinho não estabelece se a escada está posicionada com segurança."
        },
        {
          "kind": "h3",
          "text": "Exemplo 7: calculando o ângulo de inclinação de uma rampa"
        },
        {
          "kind": "p",
          "text": "Uma rampa sobe 0.75 m sobre uma extensão horizontal de 9 m. Encontre o ângulo de inclinação."
        },
        {
          "kind": "p",
          "text": "[[[A = \\arctan\\left(\\frac{0.75}{9}\\right) \\approx 4.76^\\circ]]]"
        },
        {
          "kind": "p",
          "text": "A elevação vertical e a extensão horizontal são as entradas corretas da tangente. Este ângulo por si só não confirma acessibilidade nem conformidade com normas de construção."
        },
        {
          "kind": "h3",
          "text": "Exemplo 8: estimando o ângulo de elevação até uma árvore"
        },
        {
          "kind": "p",
          "text": "Uma pessoa está a 20 m de uma árvore. O topo da árvore está 12 m acima do nível de observação. Calcule o ângulo de elevação."
        },
        {
          "kind": "p",
          "text": "[[[A = \\arctan\\left(\\frac{12}{20}\\right) \\approx 30.96^\\circ]]]"
        },
        {
          "kind": "p",
          "text": "A diferença vertical de altura é o lado oposto e a distância horizontal é o lado adjacente. O resultado é o ângulo acima da horizontal a partir do ponto de observação, não a altura total da árvore."
        },
        {
          "kind": "h3",
          "text": "Exemplo 9: uma medição topográfica de elevação"
        },
        {
          "kind": "p",
          "text": "Um esboço topográfico simplificado registra uma diferença vertical de 7 m e uma distância horizontal de 12 m. Calcule o ângulo de elevação."
        },
        {
          "kind": "p",
          "text": "[[[A = \\arctan\\left(\\frac{7}{12}\\right) \\approx 30.26^\\circ]]]"
        },
        {
          "kind": "p",
          "text": "A diferença de elevação e a distância horizontal formam os lados oposto e adjacente. A topografia real pode exigir correções de altura do instrumento e ajustes de terreno além deste modelo simplificado."
        },
        {
          "kind": "h3",
          "text": "Exemplo 10: encontrando o ângulo de um suporte mecânico"
        },
        {
          "kind": "p",
          "text": "Um suporte mecânico tem uma elevação vertical de 1.2 m e uma extensão horizontal de 3.5 m. Calcule o ângulo em relação à horizontal."
        },
        {
          "kind": "p",
          "text": "[[[A = \\arctan\\left(\\frac{1.2}{3.5}\\right) \\approx 18.92^\\circ]]]"
        },
        {
          "kind": "p",
          "text": "A tangente inversa converte as duas medidas perpendiculares em um ângulo sem precisar do comprimento da diagonal. O cálculo não estabelece a resistência nem a adequação do suporte."
        },
        {
          "kind": "h3",
          "text": "Exemplo 11: calculando a inclinação de uma escada"
        },
        {
          "kind": "p",
          "text": "Uma escada simplificada sobe 2.8 m sobre uma extensão horizontal de 4 m. Calcule o ângulo geral de inclinação."
        },
        {
          "kind": "p",
          "text": "[[[A = \\arctan\\left(\\frac{2.8}{4}\\right) \\approx 34.99^\\circ]]]"
        },
        {
          "kind": "p",
          "text": "A elevação vertical total e a extensão horizontal determinam o ângulo geral. Este cálculo simplificado não verifica a conformidade com normas de construção nem as dimensões individuais dos degraus."
        },
        {
          "kind": "h3",
          "text": "Exemplo 12: encontrando o ângulo de um cabo de sustentação"
        },
        {
          "kind": "p",
          "text": "Um cabo de sustentação conecta dois pontos com uma separação vertical de 10 m e uma separação horizontal de 15 m. Encontre o ângulo entre o cabo e a horizontal."
        },
        {
          "kind": "p",
          "text": "[[[A = \\arctan\\left(\\frac{10}{15}\\right) \\approx 33.69^\\circ]]]"
        },
        {
          "kind": "p",
          "text": "A separação vertical é oposta ao ângulo e a projeção horizontal é adjacente. O cálculo do ângulo não determina a tensão do cabo, a resistência da âncora nem a segurança estrutural."
        },
        {
          "kind": "h3",
          "text": "Exemplo 13: calculando o ângulo de inclinação de uma via"
        },
        {
          "kind": "p",
          "text": "Uma via sobe 5 m sobre uma distância horizontal de 100 m. Encontre o ângulo de inclinação da via."
        },
        {
          "kind": "p",
          "text": "[[[A = \\arctan\\left(\\frac{5}{100}\\right) \\approx 2.86^\\circ]]]"
        },
        {
          "kind": "p",
          "text": "A inclinação percentual é [[(5/100) \\times 100 = 5\\%]]. Uma inclinação de 5 por cento não é um ângulo de 5 graus; o ângulo é o arctan da razão, cerca de 2.86 graus."
        },
        {
          "kind": "h3",
          "text": "Exemplo 14: encontrando o ângulo da lança de um guindaste"
        },
        {
          "kind": "p",
          "text": "Uma lança simplificada tem uma elevação vertical de 8 m e uma projeção horizontal de 6 m. Encontre o ângulo em relação à horizontal."
        },
        {
          "kind": "p",
          "text": "[[[A = \\arctan\\left(\\frac{8}{6}\\right) \\approx 53.13^\\circ]]]"
        },
        {
          "kind": "p",
          "text": "A projeção vertical é oposta e a projeção horizontal é adjacente. Isso não determina a capacidade do guindaste nem a segurança operacional."
        },
        {
          "kind": "h3",
          "text": "Exemplo 15: calculando a inclinação de uma trilha de caminhada"
        },
        {
          "kind": "p",
          "text": "Um trecho reto de uma trilha de caminhada sobe 80 m sobre uma extensão horizontal de 150 m. Encontre o ângulo de inclinação."
        },
        {
          "kind": "p",
          "text": "[[[A = \\arctan\\left(\\frac{80}{150}\\right) \\approx 28.07^\\circ]]]"
        },
        {
          "kind": "p",
          "text": "O cálculo usa o ganho vertical de elevação como lado oposto e a distância horizontal como lado adjacente. Trilhas reais variam de gradiente em vez de formar uma única inclinação reta."
        },
        {
          "kind": "h3",
          "text": "Exemplo 16: encontrando o ângulo de um suporte de toldo"
        },
        {
          "kind": "p",
          "text": "Um suporte de toldo tem uma elevação vertical de 1.2 m e uma extensão horizontal de 2.4 m. Calcule o ângulo em relação à horizontal."
        },
        {
          "kind": "p",
          "text": "[[[A = \\arctan\\left(\\frac{1.2}{2.4}\\right) \\approx 26.57^\\circ]]]"
        },
        {
          "kind": "p",
          "text": "A razão determina o ângulo sem precisar do comprimento diagonal do suporte. O resultado não estabelece a adequação estrutural do suporte."
        },
        {
          "kind": "h3",
          "text": "Exemplos práticos comparados"
        }
      ],
      "table": {
        "headers": ["Situação", "Oposto", "Adjacente", "Fórmula", "Ângulo", "Interpretação"],
        "rows": [
          ["Inclinação do telhado", "4 pés", "12 pés", "arctan(4/12)", "18.43°", "Inclinação moderada do telhado"],
          ["Escada de encosto", "4.5 m", "2 m", "arctan(4.5/2)", "66.04°", "Posicionamento íngreme da escada"],
          ["Rampa", "0.75 m", "9 m", "arctan(0.75/9)", "4.76°", "Inclinação suave"],
          ["Elevação da árvore", "12 m", "20 m", "arctan(12/20)", "30.96°", "Ângulo de visão até o topo da árvore"],
          ["Topografia", "7 m", "12 m", "arctan(7/12)", "30.26°", "Ângulo de elevação"],
          ["Suporte mecânico", "1.2 m", "3.5 m", "arctan(1.2/3.5)", "18.92°", "Ângulo raso do suporte"],
          ["Escada", "2.8 m", "4 m", "arctan(2.8/4)", "34.99°", "Inclinação típica de escada"],
          ["Cabo de sustentação", "10 m", "15 m", "arctan(10/15)", "33.69°", "Ângulo do cabo com a horizontal"],
          ["Inclinação da via", "5 m", "100 m", "arctan(5/100)", "2.86°", "Via com 5% de inclinação"],
          ["Lança do guindaste", "8 m", "6 m", "arctan(8/6)", "53.13°", "Posição elevada da lança"],
          ["Trilha de caminhada", "80 m", "150 m", "arctan(80/150)", "28.07°", "Trecho íngreme da trilha"],
          ["Suporte de toldo", "1.2 m", "2.4 m", "arctan(1.2/2.4)", "26.57°", "Ângulo diagonal do suporte"]
        ]
      },
      "imgAlt": "Quatro exemplos práticos de arctan: inclinação do telhado, escada, rampa e ângulos de elevação de árvore",
      "figcaption": "Quatro cálculos práticos: telhado 18.43°, escada 66.04°, rampa 4.76°, elevação da árvore 30.96°."
    },
    "arctan-ratio": {
      "h2": "Como a razão entre o lado oposto e o adjacente afeta o ângulo",
      "blocks": [
        {
          "kind": "p",
          "text": "A razão [[a/b]] determina o ângulo [[A]]. Uma razão pequena produz um ângulo agudo pequeno, lados iguais produzem exatamente 45 graus, e um lado oposto mais longo que o adjacente produz um ângulo maior que 45 graus. Uma razão maior que 1 é completamente válida para a tangente, o que a diferencia do seno e do cosseno. Triângulos proporcionais compartilham os mesmos ângulos, e multiplicar os dois catetos pelo mesmo fator positivo mantém o ângulo inalterado. À medida que a razão cresce enormemente, o ângulo se aproxima de 90 graus sem alcançá-lo para comprimentos de lado positivos finitos."
        }
      ],
      "closingParagraphs": [
        "O padrão é claro: a razão entre os lados determina a forma do triângulo, não seu tamanho geral. Dobre os dois catetos e o ângulo permanece exatamente o mesmo."
      ],
      "table": {
        "headers": ["Oposto a", "Adjacente b", "Razão a/b", "Ângulo A"],
        "rows": [
          ["1", "4", "0.25", "Aproximadamente 14.04°"],
          ["1", "2", "0.5", "Aproximadamente 26.57°"],
          ["1", "1", "1", "45°"],
          ["2", "1", "2", "Aproximadamente 63.43°"],
          ["4", "1", "4", "Aproximadamente 75.96°"]
        ]
      },
      "imgAlt": "Cinco triângulos mostrando como a razão da tangente muda o ângulo de 14 a 76 graus",
      "figcaption": "Razão 0.25 dá 14.04°, 0.5 dá 26.57°, 1 dá 45°, 2 dá 63.43°, 4 dá 75.96°."
    },
    "arctan-units": {
      "h2": "Entendendo as unidades de ângulo e a precisão de medição",
      "blocks": [
        {
          "kind": "p",
          "text": "A calculadora retorna graus. Um grau é 1/360 de uma rotação completa. O radiano é a unidade angular alternativa, definida de modo que uma rotação completa equivale a [[2\\pi]] radianos. A tangente inversa pode retornar qualquer uma das unidades dependendo da calculadora, mas esta ferramenta informa graus."
        },
        {
          "kind": "p",
          "text": "A razão [[a/b]] em si não tem unidade, e os dois lados devem usar unidades compatíveis. Converter as duas medidas de metros para centímetros multiplica numerador e denominador por 100, mantendo a razão inalterada."
        },
        {
          "kind": "p",
          "text": "Para converter radianos em graus: [[\\text{Degrees} = \\text{Radians} \\times 180^\\circ / \\pi]]"
        },
        {
          "kind": "h3",
          "text": "Exemplo: a unidade de medida muda o ângulo?"
        },
        {
          "kind": "p",
          "text": "Tome [[a = 3]] m e [[b = 4]] m. O equivalente em centímetros é [[a = 300]] cm e [[b = 400]] cm. Ambos dão a razão 0.75 e o mesmo ângulo de 36.87 graus. Mantenha precisão suficiente nas etapas intermediárias e arredonde o ângulo final para corresponder à exatidão das medidas originais."
        }
      ]
    },
    "arctan-mistakes": {
      "h2": "Erros comuns ao calcular um ângulo usando a tangente",
      "blocks": [],
      "list": [
        "<strong>Usar a hipotenusa em vez do lado adjacente.</strong> A fórmula precisa do cateto que toca o ângulo A, não do lado mais longo. Verifique: seu denominador é um dos dois catetos?",
        "<strong>Trocar os lados oposto e adjacente.</strong> Isso calcula o ângulo complementar. Se você esperava cerca de 37 graus e obteve cerca de 53, os catetos estão trocados.",
        "<strong>Inverter a razão para b/a.</strong> [[\\arctan(b/a)]] dá [[B]], não [[A]]. Para um triângulo 3-4, arctan(4/3) é 53.13 graus, o outro ângulo agudo.",
        "<strong>Usar a tangente comum em vez da tangente inversa.</strong> Digitar tan(0.75) em vez de arctan(0.75) responde a uma pergunta completamente diferente.",
        "<strong>Confundir tangente inversa com tangente recíproca.</strong> [[\\tan^{-1}(x)]] não é [[1/\\tan(x)]]. O recíproco é a cotangente.",
        "<strong>Achar que a razão da tangente deve ficar entre 0 e 1.</strong> Ela pode passar de 1 livremente. Uma razão de 2 com ângulo de 63.43 graus é perfeitamente válida.",
        "<strong>Informar comprimentos de lado zero ou negativos.</strong> Os comprimentos dos lados devem ser positivos. Entradas zero ou negativas não têm significado geométrico aqui.",
        "<strong>Misturar unidades de medida incompatíveis.</strong> Metros para um cateto e pés para o outro corrompem a razão. Converta primeiro.",
        "<strong>Arredondar a razão cedo demais.</strong> Arredondar 0.6667 para 0.67 antes de aplicar o arctan desloca a resposta. Mantenha a precisão total até a etapa final.",
        "<strong>Informar radianos quando se esperam graus.</strong> Arctan(1) é 45 graus, mas 0.785 radianos. Verifique o modo da sua calculadora.",
        "<strong>Confundir o ângulo A com seu complementar B.</strong> Lembre-se de que [[A + B = 90^\\circ]]. Se a resposta parece ser o \"outro\" ângulo, a razão foi invertida.",
        "<strong>Tratar uma inclinação percentual como um ângulo em graus.</strong> Uma inclinação de 5% é arctan(0.05), cerca de 2.86 graus, não 5 graus.",
        "<strong>Confundir elevação vertical com distância inclinada.</strong> O lado oposto é a componente puramente vertical, não o comprimento ao longo da inclinação.",
        "<strong>Achar que o ângulo calculado prova que uma estrutura é segura.</strong> A geometria descreve apenas a forma. A segurança de escadas, as cargas de telhados e a conformidade de rampas exigem verificações de engenharia separadas."
      ]
    },
    "arctan-verify": {
      "h2": "Como verificar se o ângulo calculado é válido",
      "blocks": [
        {
          "kind": "p",
          "text": "Entradas válidas para um triângulo retângulo não degenerado: o lado oposto deve ser positivo, o lado adjacente deve ser positivo, nenhum pode ser zero, ambos devem usar unidades compatíveis, e o ângulo resultante deve ficar estritamente entre 0 e 90 graus. Diferentemente do seno e do cosseno, a razão da tangente não se restringe a valores abaixo de 1, então um lado oposto mais longo que o adjacente está ok."
        },
        {
          "kind": "h3",
          "text": "Método 1: verifique a razão da tangente"
        },
        {
          "kind": "p",
          "text": "Verifique [[\\tan(A) \\approx a/b]] usando o ângulo não arredondado quando possível. Se a tangente da sua resposta reproduz a razão de entrada, a resposta é consistente."
        },
        {
          "kind": "h3",
          "text": "Método 2: verifique o ângulo complementar"
        },
        {
          "kind": "p",
          "text": "Calcule [[B = 90^\\circ - A]]. Os dois ângulos agudos de um triângulo retângulo devem somar 90 graus, então esta é uma verificação rápida de sanidade para cada resultado."
        },
        {
          "kind": "h3",
          "text": "Método 3: use o teorema de Pitágoras"
        },
        {
          "kind": "p",
          "text": "Calcule a hipotenusa [[c = \\sqrt{a^2 + b^2}]] e confirme [[a^2 + b^2 = c^2]]."
        },
        {
          "kind": "p",
          "text": "Verificação completa com [[a = 3]] e [[b = 4]]: [[c = \\sqrt{9 + 16} = 5]]. O ângulo [[A = \\arctan(3/4) \\approx 36.87^\\circ]] e seu complemento [[B \\approx 53.13^\\circ]] somam 90 graus. Pequenas diferenças vêm do arredondamento do ângulo exibido."
        }
      ]
    },
    "arctan-choose": {
      "h2": "Escolhendo a calculadora de triângulo retângulo certa",
      "blocks": [
        {
          "kind": "p",
          "text": "Combine a ferramenta com as medidas que você realmente tem:"
        }
      ],
      "list": [
        "<strong>Calculadora de ângulo a partir da tangente</strong> (esta página): lado oposto [[a]] e lado adjacente [[b]] conhecidos, encontra o ângulo [[A]]. Melhor quando os dois catetos foram medidos diretamente.",
        "<a href=\"/right-triangle-angle-from-sine-calculator/\"><strong>Calculadora de ângulo a partir do seno</strong></a>: lado oposto e hipotenusa conhecidos. Melhor para problemas de altura em que o comprimento inclinado foi medido.",
        "<a href=\"/right-triangle-angle-from-cosine-calculator/\"><strong>Calculadora de ângulo a partir do cosseno</strong></a>: lado adjacente e hipotenusa conhecidos. Melhor quando a hipotenusa foi medida diretamente ao longo de uma inclinação.",
        "<a href=\"/right-triangle-angle-calculator/\"><strong>Calculadora de ângulos</strong></a>: ajuda a escolher o método certo quando você não tem certeza de quais lados tem.",
        "<a href=\"/right-triangle-missing-angle-calculator/\"><strong>Calculadora de ângulo ausente</strong></a>: encontra o ângulo complementar quando um ângulo agudo já é conhecido.",
        "<a href=\"/right-triangle-side-calculator/\"><strong>Calculadora de lados</strong></a>: encontra comprimentos de lado ausentes em vez de ângulos."
      ],
      "closingParagraphs": [
        "As três funções inversas concordam no mesmo triângulo: para um triângulo 3-4-5, arctan(3/4), arcsin(3/5) e arccos(4/5) dão todos 36.87 graus. Se dois métodos discordarem, um lado está mal rotulado."
      ]
    },
    "arctan-faq": {
      "h2": "Perguntas frequentes",
      "blocks": []
    },
    "arctan-related": {
      "h2": "Explore calculadoras relacionadas de triângulo retângulo",
      "blocks": [
        {
          "kind": "p",
          "text": "Estas ferramentas cobrem os cálculos vizinhos:"
        },
        {
          "kind": "h3",
          "text": "Encontre qualquer ângulo a partir da tangente com confiança"
        },
        {
          "kind": "p",
          "text": "A fórmula da tangente inversa transforma duas simples medidas de catetos em um ângulo preciso. Meça o lado oposto e o lado adjacente, divida, aplique o arctan e verifique com o ângulo complementar ou o teorema de Pitágoras. Seja a tarefa uma inclinação de telhado, uma inclinação de rampa ou o posicionamento de uma escada, o método é o mesmo: associe a razão ao ângulo e deixe a geometria fazer o resto."
        }
      ]
    }
  },
  "faqs": [
    {
      "q": "O que a fórmula A = arctan(a / b) calcula?",
      "a": "Ela calcula o ângulo agudo A de um triângulo retângulo a partir dos comprimentos dos dois catetos. Você divide o lado oposto a pelo lado adjacente b e depois aplica a tangente inversa a essa razão. O resultado é o ângulo em graus cuja tangente é igual a a / b."
    },
    {
      "q": "Como encontrar um ângulo usando a tangente inversa?",
      "a": "Meça o lado oposto e o lado adjacente em relação ao seu ângulo-alvo, divida o oposto pelo adjacente para obter a razão da tangente e aplique o arctan. Por exemplo, arctan(3 / 4) é aproximadamente 36.87 graus."
    },
    {
      "q": "Por que preciso dos lados oposto e adjacente?",
      "a": "A tangente é definida como oposto sobre adjacente, então esses dois lados são exatamente o que a fórmula precisa. Eles são os dois catetos do triângulo retângulo, e juntos determinam por completo a forma e, portanto, o ângulo."
    },
    {
      "q": "Posso calcular o ângulo sem conhecer a hipotenusa?",
      "a": "Sim. Essa é a principal vantagem deste método. A hipotenusa nunca aparece na fórmula da tangente, então você pode pular por completo a medição do lado mais longo e ainda obter o ângulo exato."
    },
    {
      "q": "Qual é a diferença entre tangente e tangente inversa?",
      "a": "A tangente recebe um ângulo e retorna uma razão, por exemplo tan(45 graus) = 1. A tangente inversa faz o caminho contrário: recebe uma razão e retorna o ângulo, por exemplo arctan(1) = 45 graus. As duas funções se anulam mutuamente."
    },
    {
      "q": "Arco tangente é o mesmo que tangente inversa?",
      "a": "Sim. Arctan(x) e tangente inversa de x são dois nomes para a mesma função. Nenhum dos dois significa o recíproco 1 / tan(x); o recíproco da tangente é a cotangente, uma função diferente."
    },
    {
      "q": "A razão da tangente pode ser maior que 1?",
      "a": "Sim, e isso é normal. Quando o lado oposto é mais longo que o lado adjacente, a razão passa de 1 e o ângulo é maior que 45 graus. Diferentemente das razões de seno e cosseno, a tangente não tem limite superior."
    },
    {
      "q": "O que acontece quando os lados oposto e adjacente são iguais?",
      "a": "A razão é 1, e arctan(1) é exatamente 45 graus. Catetos iguais formam um triângulo retângulo isósceles, então os dois ângulos agudos são ambos 45 graus."
    },
    {
      "q": "Como a razão entre os lados afeta o ângulo?",
      "a": "Uma razão maior entre oposto e adjacente significa um ângulo maior. Uma razão de 0.25 dá cerca de 14.04 graus, uma razão de 1 dá 45 graus e uma razão de 4 dá cerca de 75.96 graus. O ângulo cresce à medida que o lado oposto cresce em relação ao adjacente."
    },
    {
      "q": "Como posso verificar meu ângulo calculado?",
      "a": "Três verificações funcionam bem. Calcule tan(A) e confirme que é igual a a / b. Confirme que o ângulo complementar B = 90 menos A faz sentido. Ou calcule a hipotenusa com o teorema de Pitágoras e confirme que a ao quadrado mais b ao quadrado é igual a c ao quadrado."
    },
    {
      "q": "Posso usar esta calculadora para inclinação de telhado, inclinação de rampa ou ângulos de escada?",
      "a": "Sim, estes são casos de uso clássicos. A elevação de um telhado sobre sua extensão horizontal, a elevação de uma rampa sobre sua extensão, ou a altura de uma escada sobre sua distância da base dão diretamente os lados oposto e adjacente, que é exatamente o que esta calculadora precisa."
    },
    {
      "q": "Qual é a diferença entre inclinação percentual e um ângulo em graus?",
      "a": "Uma inclinação percentual é 100 vezes a razão entre elevação e extensão, enquanto o ângulo é o arctan dessa razão. Uma inclinação de 5 por cento significa uma razão de 0.05, que é um ângulo de cerca de 2.86 graus, não 5 graus."
    }
  ],
  "relatedHeading": "Explore calculadoras relacionadas de triângulo retângulo",
  "relatedItems": [
    "Calculadora de ângulos de triângulo retângulo",
    "Calculadora de ângulo de triângulo retângulo a partir do seno",
    "Calculadora de ângulo de triângulo retângulo a partir do cosseno",
    "Calculadora de ângulo ausente de triângulo retângulo",
    "Calculadora de razão de tangente",
    "Calculadora de lado de triângulo retângulo a partir da tangente",
    "Calculadora de lados de triângulo retângulo",
    "Calculadora de triângulos retângulos especiais"
  ]
},
  "bn": {
  "tocHeading": "এই নির্দেশিকায়",
  "tocItems": {
    "arctan-applications": "বাস্তব জীবনের উদাহরণ",
    "arctan-choose": "সঠিক ক্যালকুলেটর বেছে নেওয়া",
    "arctan-examples": "ধাপে ধাপে উদাহরণ",
    "arctan-faq": "প্রায়শই জিজ্ঞাসিত প্রশ্ন",
    "arctan-formula": "বিপরীত ট্যানজেন্ট সূত্র কীভাবে কাজ করে",
    "arctan-howto": "ক্যালকুলেটর কীভাবে ব্যবহার করবেন",
    "arctan-intro": "ট্যানজেন্ট দিয়ে কোণ কীভাবে নির্ণয় করবেন",
    "arctan-mistakes": "সাধারণ ভুল",
    "arctan-ratio": "অনুপাত কীভাবে কোণকে প্রভাবিত করে",
    "arctan-related": "সম্পর্কিত ক্যালকুলেটর",
    "arctan-sides": "বিপরীত ও সন্নিহিত বাহু বোঝা",
    "arctan-units": "কোণের একক ও নির্ভুলতা",
    "arctan-verify": "আপনার উত্তর যাচাই",
    "arctan-what": "সমকোণী ত্রিভুজে ট্যানজেন্ট কী?"
  },
  "sections": {
    "arctan-intro": {
      "h2": "ট্যানজেন্ট দিয়ে কোণ কীভাবে নির্ণয় করবেন",
      "blocks": [
        {
          "kind": "p",
          "text": "সমকোণী ত্রিভুজের ট্যানজেন্ট থেকে কোণ নির্ণয় ক্যালকুলেটর একটি সূক্ষ্মকোণ বের করে, যখন আপনি ত্রিভুজের দুটি বাহু জানেন: বিপরীত বাহু ও সন্নিহিত বাহু। এটি বিপরীত বাহুকে সন্নিহিত বাহু দিয়ে ভাগ করে, তারপর সেই অনুপাতে বিপরীত ট্যানজেন্ট প্রয়োগ করে। ফলাফল হলো ডিগ্রিতে কোণ।"
        },
        {
          "kind": "p",
          "text": "একটি হুইলচেয়ার র‍্যাম্পের কথা ভাবুন। আপনি মাপতে পারেন এটি কত উঁচুতে ওঠে এবং অনুভূমিকভাবে কত দূর যায়, কিন্তু ঢালু পৃষ্ঠটি নিজে মাপা হয়তো ঝামেলার। এই দুটি পরিমাপ, উল্লম্ব উচ্চতা ও অনুভূমিক দূরত্ব, হলো বিপরীত ও সন্নিহিত বাহু। তাদের অনুপাতই আপনার যা প্রয়োজন। বিপরীত ট্যানজেন্ট সেই অনুপাতকে সরাসরি ঢালের কোণে রূপান্তর করে, ঢালের দৈর্ঘ্য মাপার কোনো প্রয়োজন ছাড়াই।"
        },
        {
          "kind": "p",
          "text": "এখানে [[A]] হলো আপনার কাঙ্ক্ষিত কোণ, [[a]] হলো বিপরীত বাহু, এবং [[b]] হলো সন্নিহিত বাহু। ট্যানজেন্ট তাদের সম্পর্কিত করে এভাবে [[\\tan(A) = a/b]], এবং বিপরীত ট্যানজেন্ট সম্পর্কটি উল্টে দেয়: [[A = \\arctan(a/b)]]। যেহেতু সূত্রে অতিভুজ কখনো আসে না, দুটি বাহুই আপনার হাতে থাকা পরিমাপ হলে এটিই স্বাভাবিক পদ্ধতি।"
        }
      ]
    },
    "arctan-sides": {
      "h2": "বিপরীত ও সন্নিহিত বাহু বোঝা",
      "blocks": [
        {
          "kind": "h3",
          "text": "সমকোণী ত্রিভুজ কী?"
        },
        {
          "kind": "p",
          "text": "সমকোণী ত্রিভুজের একটি কোণ ঠিক 90 ডিগ্রি। অন্য দুটি কোণ সূক্ষ্মকোণ, অর্থাৎ প্রতিটি 90 ডিগ্রির কম, এবং একসাথে তারা সবসময় যোগফল 90 ডিগ্রি দেয়। 90 ডিগ্রি শর্তটিই ত্রিকোণমিতিক অনুপাতগুলোকে কার্যকর করে: সাইন, কোসাইন ও ট্যানজেন্ট সমকোণী ত্রিভুজের বাহুগুলোর মধ্যে স্থির সম্পর্ক দিয়ে সংজ্ঞায়িত। সমকোণ ছাড়া, [[a/b]] অনুপাতটি একটি একক সামঞ্জস্যপূর্ণ কোণের সাথে মিলত না।"
        },
        {
          "kind": "h3",
          "text": "বিপরীত বাহু কী?"
        },
        {
          "kind": "p",
          "text": "বিপরীত বাহু হলো সেই বাহু যা কোণ [[A]]-এর ঠিক বিপরীতে থাকে। এটি কখনো কোণটিকে স্পর্শ করে না। ব্যবহারিক অর্থে এটি প্রায়ই উল্লম্ব উচ্চতা বোঝায়: একটি মই দেয়াল বেয়ে কত উঁচুতে পৌঁছায়, একটি ছাদ কত উচ্চতা পায়, বা একটি ক্রেন বুমের উল্লম্ব উপাদান। কোন বাহুটি বিপরীত তা নির্ভর করে আপনি কোন কোণটিকে রেফারেন্স হিসেবে বেছে নিয়েছেন তার ওপর। রেফারেন্স [[A]] থেকে [[B]]-তে বদলালে, যে বাহুটি বিপরীত ছিল তা সন্নিহিত হয়ে যায়।"
        },
        {
          "kind": "h3",
          "text": "সন্নিহিত বাহু কী?"
        },
        {
          "kind": "p",
          "text": "সন্নিহিত বাহু হলো সেই বাহু যা কোণ [[A]]-কে স্পর্শ করে কিন্তু অতিভুজ নয়। এটি কোণের একটি প্রান্ত গঠন করে। মাঠের পরিমাপে এটি প্রায়ই অনুভূমিক দূরত্ব বোঝায়: দেয়াল থেকে মইয়ের গোড়ার মাটির দূরত্ব, ছাদের অনুভূমিক বিস্তার, বা র‍্যাম্পের চলন। এটি দুটি লম্ব বাহুর একটি, এবং একে অতিভুজের সাথে গুলিয়ে ফেলা যাবে না, যা সমকোণের বিপরীত বাহু।"
        },
        {
          "kind": "h3",
          "text": "অতিভুজ কী?"
        },
        {
          "kind": "p",
          "text": "অতিভুজ, যাকে [[c]] দিয়ে চিহ্নিত করা হয়, হলো 90 ডিগ্রি কোণের বিপরীত বাহু এবং সবসময় ত্রিভুজের দীর্ঘতম বাহু। ট্যানজেন্ট ক্যালকুলেটরের এর দৈর্ঘ্য প্রয়োজন হয় না। কখনো প্রয়োজন হলে, পিথাগোরাসের উপপাদ্য দুটি বাহু থেকে এটি দেয়: [[c = \\sqrt{a^2 + b^2}]]। কিন্তু কোণ নির্ণয়ের জন্য, অতিভুজ অতিরিক্ত তথ্য যা আপনি সহজেই এড়িয়ে যেতে পারেন।"
        },
        {
          "kind": "h3",
          "text": "রেফারেন্স কোণ কেন গুরুত্বপূর্ণ"
        },
        {
          "kind": "p",
          "text": "বিপরীত ও সন্নিহিত বাহু বেছে নেওয়া কোণের সাপেক্ষে সংজ্ঞায়িত। একই ত্রিভুজে, রেফারেন্স [[A]] থেকে [[B]]-তে বদলালে দুটি বাহুর ভূমিকা বদলে যায়: যে বাহুটি বিপরীত ছিল তা সন্নিহিত হয় এবং উল্টোটাও। তাই অনুপাত [[a/b]] থেকে [[b/a]]-তে উল্টে দিলে [[A]]-এর বদলে পূরক কোণ [[B = 90^\\circ - A]] গণনা হয়। পুরো গণনায় রেফারেন্স কোণ স্থির রাখলে এই ভুল এড়ানো যায়।"
        }
      ],
      "imgAlt": "সমকোণী ত্রিভুজের গঠন: arctan সূত্রের জন্য বিপরীত বাহু a, সন্নিহিত বাহু b ও অতিভুজ c",
      "figcaption": "arctan-এর জন্য গঠন: a হলো কোণ A-এর বিপরীত বাহু, b হলো কোণ A-কে স্পর্শ করা সন্নিহিত বাহু, c হলো অতিভুজ।"
    },
    "arctan-what": {
      "h2": "সমকোণী ত্রিভুজে ট্যানজেন্ট কী?",
      "blocks": [
        {
          "kind": "p",
          "text": "ট্যানজেন্ট সমকোণী ত্রিভুজের দুটি বাহুর তুলনা করে। কোণ [[A]]-এর জন্য, এটি বিপরীত বাহু ভাগ সন্নিহিত বাহু:"
        },
        {
          "kind": "p",
          "text": "[[[\\tan(A) = \\frac{a}{b}]]]"
        },
        {
          "kind": "p",
          "text": "এখানে [[\\tan(A)]] হলো কোণ [[A]]-এর ট্যানজেন্ট, [[a]] হলো বিপরীত বাহু, এবং [[b]] হলো সন্নিহিত বাহু। ট্যানজেন্ট বর্ণনা করে ত্রিভুজটি কত খাড়া: ত্রিভুজটি সন্নিহিত বাহুকে ভিত্তি ধরে বসালে এটি উল্লম্ব বাহু বাই অনুভূমিক বাহুর অনুপাত।"
        },
        {
          "kind": "p",
          "text": "উদাহরণস্বরূপ, যখন [[a = 3]] ও [[b = 4]]:"
        },
        {
          "kind": "p",
          "text": "[[[\\tan(A) = \\frac{3}{4} = 0.75]]]"
        },
        {
          "kind": "p",
          "text": "এই অনুপাতের কোনো ভৌত একক নেই। মিটার ভাগ মিটার বাতিল হয়ে যায়, তাই আপনি মিটার, ফুট বা সেন্টিমিটারে মাপুন না কেন, 0.75 অনুপাতটি একই বিশুদ্ধ সংখ্যা।"
        },
        {
          "kind": "h3",
          "text": "বিপরীত ট্যানজেন্ট কী?"
        },
        {
          "kind": "p",
          "text": "সাধারণ ট্যানজেন্ট একটি কোণ দিয়ে শুরু করে একটি অনুপাত দেয়। বিপরীত ট্যানজেন্ট একটি অনুপাত দিয়ে শুরু করে কোণটি ফিরিয়ে দেয়। যদি [[\\tan(A) = 0.75]] হয়, তবে [[A = \\arctan(0.75) \\approx 36.87^\\circ]]। বিপরীত ট্যানজেন্ট ট্যানজেন্ট সম্পর্কটি উল্টে দেয়, বাহুর অনুপাত থেকে মূল কোণটি পুনরুদ্ধার করে।"
        },
        {
          "kind": "h3",
          "text": "আর্কট্যানজেন্ট কি বিপরীত ট্যানজেন্টের সমান?"
        },
        {
          "kind": "p",
          "text": "হ্যাঁ। [[\\arctan(x)]] ও [[\\tan^{-1}(x)]] একই ফাংশনের দুটি স্বরলিপি। [[-1]] সূচকটি বিপরীত [[1/\\tan(x)]] বোঝায় না। ট্যানজেন্টের বিপরীত হলো কোট্যানজেন্ট, একটি আলাদা ফাংশন।"
        },
        {
          "kind": "h3",
          "text": "SOH-CAH-TOA বোঝা"
        },
        {
          "kind": "p",
          "text": "SOH-CAH-TOA হলো প্রমিত স্মরণসূত্র: সাইন = বিপরীত / অতিভুজ, কোসাইন = সন্নিহিত / অতিভুজ, ট্যানজেন্ট = বিপরীত / সন্নিহিত। TOA অংশটি এই ক্যালকুলেটরের জন্য সঠিক অনুপাত চিহ্নিত করে, যেহেতু জানা পরিমাপগুলো বিপরীত ও সন্নিহিত বাহু।"
        },
        {
          "kind": "h3",
          "text": "ট্যানজেন্টের অতিভুজ প্রয়োজন হয় না কেন"
        },
        {
          "kind": "p",
          "text": "ট্যানজেন্ট সরাসরি দুটি লম্ব বাহু ব্যবহার করে, তাই কর্ণের দৈর্ঘ্য গণনায় অপ্রাসঙ্গিক। উচ্চতা ও চলন জানা থাকলেই ঢালের কোণ নির্ধারিত হয়ে যায়। দুটি বাহুকেই একই ধনাত্মক গুণকে স্কেল করলে অনুপাত, এবং ফলে কোণ, অপরিবর্তিত থাকে: 3-4 ত্রিভুজ ও 6-8 ত্রিভুজের কোণ একই 36.87 ডিগ্রি।"
        }
      ],
      "imgAlt": "বিপরীত ট্যানজেন্টের ধাপ দেখানো চিত্র: a-কে b দিয়ে ভাগ করুন, তারপর কোণ A পেতে arctan প্রয়োগ করুন",
      "figcaption": "arctan কীভাবে কাজ করে: বিপরীত বাহুকে সন্নিহিত বাহু দিয়ে ভাগ করুন, তারপর কোণটি পুনরুদ্ধার করতে বিপরীত ট্যানজেন্ট প্রয়োগ করুন।"
    },
    "arctan-formula": {
      "h2": "বিপরীত ট্যানজেন্ট সূত্র কীভাবে কাজ করে",
      "blocks": [
        {
          "kind": "p",
          "text": "ট্যানজেন্টের সংজ্ঞা দিয়ে শুরু করুন:"
        },
        {
          "kind": "p",
          "text": "[[[\\tan(A) = \\frac{a}{b}]]]"
        },
        {
          "kind": "p",
          "text": "জানা বাহুর দৈর্ঘ্য দিয়ে আপনি ডানদিকের অনুপাত গণনা করতে পারেন। কোণটি পুনরুদ্ধার করতে, উভয় পক্ষে বিপরীত ট্যানজেন্ট প্রয়োগ করুন:"
        },
        {
          "kind": "p",
          "text": "[[[A = \\arctan\\left(\\frac{a}{b}\\right)]]]"
        },
        {
          "kind": "p",
          "text": "বিপরীত ট্যানজেন্ট পুরো অনুপাতে প্রয়োগ করা হয় কারণ অনুপাতটিই সামগ্রিকভাবে কোণের ট্যানজেন্ট। এটিকে লব ও হরে ভাগ করে দেওয়া যায় না।"
        },
        {
          "kind": "h3",
          "text": "কাজ করা উদাহরণ: বিপরীত বাহু 3 ও সন্নিহিত বাহু 4"
        },
        {
          "kind": "p",
          "text": "দেওয়া আছে [[a = 3]] সে.মি. ও [[b = 4]] সে.মি.:"
        },
        {
          "kind": "p",
          "text": "ধাপ 1: সূত্রটি লিখুন। [[A = \\arctan(a/b)]]"
        },
        {
          "kind": "p",
          "text": "ধাপ 2: মান বসান। [[A = \\arctan(3/4)]]"
        },
        {
          "kind": "p",
          "text": "ধাপ 3: অনুপাত গণনা করুন। [[3/4 = 0.75]]"
        },
        {
          "kind": "p",
          "text": "ধাপ 4: বিপরীত ট্যানজেন্ট প্রয়োগ করুন। [[A = \\arctan(0.75)]]"
        },
        {
          "kind": "p",
          "text": "চূড়ান্ত উত্তর: [[A \\approx 36.87^\\circ]]"
        },
        {
          "kind": "p",
          "text": "কোণটি প্রায় 36.87 ডিগ্রি। দুটি দশমিক স্থান একটি অমূলদ ফলাফলের সাধারণ রাউন্ডিং প্রতিফলিত করে, কোনো সঠিক বদ্ধ রূপ নয়।"
        }
      ]
    },
    "arctan-howto": {
      "h2": "সমকোণী ত্রিভুজের ট্যানজেন্ট থেকে কোণ ক্যালকুলেটর কীভাবে ব্যবহার করবেন",
      "blocks": [
        {
          "kind": "p",
          "text": "লাইভ ইন্টারফেসের সাথে মিলিয়ে এই ধাপগুলো অনুসরণ করুন:"
        },
        {
          "kind": "p",
          "text": "প্রতিটি ধাপ গুরুত্বপূর্ণ কারণ ভুল লেবেলের বাহুই ভুল উত্তরের সবচেয়ে সাধারণ উৎস। কোন বাহুটি বিপরীত এবং কোনটি সন্নিহিত তা নিশ্চিত করতে এক মুহূর্ত সময় নিলে সবচেয়ে ঘন ঘন হওয়া ভুলটি এড়ানো যায়।"
        }
      ],
      "list": [
        "<strong>সমকোণ চিহ্নিত করুন।</strong> যেকোনো ত্রিকোণমিতিক অনুপাত ব্যবহারের আগে নিশ্চিত করুন ত্রিভুজটির একটি 90 ডিগ্রি কোণা আছে।",
        "<strong>রেফারেন্স কোণ A চিহ্নিত করুন</strong> যা আপনি গণনা করতে চান।",
        "<strong>বিপরীত বাহু a খুঁজুন</strong>, কোণ A-এর ঠিক বিপরীতের বাহু।",
        "<strong>সন্নিহিত বাহু b খুঁজুন</strong>, কোণ A-কে স্পর্শ করা বাহু যা অতিভুজ নয়।",
        "<strong>উভয় বাহুর দৈর্ঘ্য মাপুন বা সংগ্রহ করুন</strong> একই একক ব্যবহার করে।",
        "<strong>বিপরীত বাহুর দৈর্ঘ্য লিখুন</strong> সংশ্লিষ্ট ক্ষেত্রে।",
        "<strong>সন্নিহিত বাহুর দৈর্ঘ্য লিখুন</strong> এর ক্ষেত্রে।",
        "<strong>সামঞ্জস্যপূর্ণ একক বেছে নিন</strong> ক্যালকুলেটরের দেওয়া একক নির্বাচক দিয়ে।",
        "<strong>পরীক্ষা করুন উভয় বাহুর দৈর্ঘ্য ধনাত্মক</strong> এবং শূন্যের বেশি।",
        "<strong>কোণ A গণনা করুন চাপুন</strong> গণনা চালাতে।",
        "<strong>গণনা করা কোণটি পড়ুন</strong> ডিগ্রিতে।",
        "<strong>পরীক্ষা করুন ফলাফল যুক্তিসঙ্গত কিনা</strong> ত্রিভুজের জন্য: 1-এর কাছাকাছি অনুপাতে 45 ডিগ্রির কাছাকাছি কোণ পাওয়া উচিত।",
        "<strong>রিসেট ব্যবহার করুন</strong> ইনপুট মুছে নতুন গণনা শুরু করতে।"
      ]
    },
    "arctan-examples": {
      "h2": "ট্যানজেন্ট দিয়ে কোণ নির্ণয়ের ধাপে ধাপে উদাহরণ",
      "blocks": [
        {
          "kind": "p",
          "text": "এই চারটি উদাহরণ বাস্তব প্রয়োগের আগে মূল দক্ষতা গড়ে তোলে। প্রতিটি একই ধরন অনুসরণ করে: সূত্র লিখুন, মান বসান, ভাগ করুন, arctan প্রয়োগ করুন।"
        },
        {
          "kind": "h3",
          "text": "উদাহরণ 1: একটি 3-4-5 সমকোণী ত্রিভুজ"
        },
        {
          "kind": "p",
          "text": "বিপরীত বাহু [[a = 3]] সে.মি. ও সন্নিহিত বাহু [[b = 4]] সে.মি. দেওয়া আছে, কোণ [[A]] নির্ণয় করুন।"
        },
        {
          "kind": "p",
          "text": "ধাপ 1: সূত্রটি লিখুন। [[A = \\arctan(a/b)]]"
        },
        {
          "kind": "p",
          "text": "ধাপ 2: মান বসান। [[A = \\arctan(3/4)]]"
        },
        {
          "kind": "p",
          "text": "ধাপ 3: গণনা করুন। [[A = \\arctan(0.75)]]"
        },
        {
          "kind": "p",
          "text": "চূড়ান্ত উত্তর: [[A \\approx 36.87^\\circ]]"
        },
        {
          "kind": "p",
          "text": "এটি 3-4-5 ত্রিভুজ হলেও অতিভুজের প্রয়োজন নেই। দুটি বাহুই একা কোণটি নির্ধারণ করে, তাই এখানে arctan-ই দক্ষ পছন্দ।"
        },
        {
          "kind": "h3",
          "text": "উদাহরণ 2: সমান বিপরীত ও সন্নিহিত বাহু"
        },
        {
          "kind": "p",
          "text": "দেওয়া আছে [[a = 5]] মি ও [[b = 5]] মি:"
        },
        {
          "kind": "p",
          "text": "[[[A = \\arctan\\left(\\frac{5}{5}\\right) = \\arctan(1) = 45^\\circ]]]"
        },
        {
          "kind": "p",
          "text": "সমান বাহু একটি সমদ্বিবাহু সমকোণী ত্রিভুজ তৈরি করে, তাই দুটি সূক্ষ্মকোণই ঠিক 45 ডিগ্রি।"
        },
        {
          "kind": "h3",
          "text": "উদাহরণ 3: 45 ডিগ্রির নিচে একটি কোণ"
        },
        {
          "kind": "p",
          "text": "দেওয়া আছে [[a = 3]] মি ও [[b = 6]] মি:"
        },
        {
          "kind": "p",
          "text": "[[[A = \\arctan\\left(\\frac{3}{6}\\right) \\approx 26.57^\\circ]]]"
        },
        {
          "kind": "p",
          "text": "কোণটি 45 ডিগ্রির কম কারণ বিপরীত বাহু সন্নিহিত বাহুর চেয়ে ছোট। লম্বা চলনের ওপর ছোট উচ্চতা অগভীর কোণ তৈরি করে।"
        },
        {
          "kind": "h3",
          "text": "উদাহরণ 4: 45 ডিগ্রির ওপরে একটি কোণ"
        },
        {
          "kind": "p",
          "text": "দেওয়া আছে [[a = 8]] ফুট ও [[b = 4]] ফুট:"
        },
        {
          "kind": "p",
          "text": "[[[A = \\arctan\\left(\\frac{8}{4}\\right) \\approx 63.43^\\circ]]]"
        },
        {
          "kind": "p",
          "text": "কোণটি 45 ডিগ্রি ছাড়িয়ে যায় কারণ বিপরীত বাহু সন্নিহিত বাহুর চেয়ে লম্বা। ছোট চলনের ওপর লম্বা উচ্চতা খাড়া কোণ তৈরি করে।"
        }
      ]
    },
    "arctan-applications": {
      "h2": "ট্যানজেন্ট দিয়ে কোণ গণনার বাস্তব জীবনের উদাহরণ",
      "blocks": [
        {
          "kind": "p",
          "text": "বারোটি সম্পূর্ণ কাজ করা ব্যবহারিক উদাহরণ। প্রতিটির জন্য, পরিস্থিতি বর্ণনা করা হয়েছে, ত্রিভুজ চিহ্নিত করা হয়েছে, পরিমাপগুলো বলা হয়েছে, সঠিক বাহুগুলোর নাম দেওয়া হয়েছে, সূত্র লেখা ও মূল্যায়ন করা হয়েছে, এবং ফলাফলের ব্যবহারিক সীমাসহ ব্যাখ্যা করা হয়েছে।"
        },
        {
          "kind": "h3",
          "text": "উদাহরণ 5: ছাদের পিচ কোণ গণনা"
        },
        {
          "kind": "p",
          "text": "একটি ছাদ 12 ফুট অনুভূমিক চলনের ওপর 4 ফুট উল্লম্বভাবে ওঠে। ছাদের ঢাল ও অনুভূমিকের মধ্যবর্তী কোণ নির্ণয় করুন।"
        },
        {
          "kind": "p",
          "text": "জানা: বিপরীত উচ্চতা [[a = 4]] ফুট, সন্নিহিত চলন [[b = 12]] ফুট। বিপরীত ট্যানজেন্ট উপযুক্ত কারণ দুটি লম্ব পরিমাপ জানা আছে এবং ঢালের দৈর্ঘ্যের প্রয়োজন নেই।"
        },
        {
          "kind": "p",
          "text": "[[[A = \\arctan\\left(\\frac{4}{12}\\right) \\approx 18.43^\\circ]]]"
        },
        {
          "kind": "p",
          "text": "ছাদটি অনুভূমিকের ওপরে প্রায় 18.43 ডিগ্রিতে ওঠে। মনে রাখবেন 4:12 হিসেবে প্রকাশ করা ছাদের পিচ একটি অনুপাত, 4 ডিগ্রির কোণ নয়। এই জ্যামিতিক ফলাফল কোনো কাঠামোগত মূল্যায়ন নয়।"
        },
        {
          "kind": "h3",
          "text": "উদাহরণ 6: মইয়ের কোণ নির্ণয়"
        },
        {
          "kind": "p",
          "text": "একটি মই দেয়াল বেয়ে 4.5 মি ওঠে, এবং এর গোড়া দেয়াল থেকে 2 মি দূরে। মই ও মাটির মধ্যবর্তী কোণ নির্ণয় করুন।"
        },
        {
          "kind": "p",
          "text": "জানা: বিপরীত উচ্চতা [[a = 4.5]] মি, সন্নিহিত মাটির দূরত্ব [[b = 2]] মি।"
        },
        {
          "kind": "p",
          "text": "[[[A = \\arctan\\left(\\frac{4.5}{2}\\right) \\approx 66.04^\\circ]]]"
        },
        {
          "kind": "p",
          "text": "দেয়ালের উচ্চতা মাটির কোণের বিপরীত এবং মাটির দূরত্ব সন্নিহিত। শুধু গণনা করা কোণ দিয়ে মইটি নিরাপদে বসানো আছে কিনা তা প্রতিষ্ঠিত হয় না।"
        },
        {
          "kind": "h3",
          "text": "উদাহরণ 7: র‍্যাম্পের ঢালের কোণ গণনা"
        },
        {
          "kind": "p",
          "text": "একটি র‍্যাম্প 9 মি অনুভূমিক চলনের ওপর 0.75 মি ওঠে। ঢালের কোণ নির্ণয় করুন।"
        },
        {
          "kind": "p",
          "text": "[[[A = \\arctan\\left(\\frac{0.75}{9}\\right) \\approx 4.76^\\circ]]]"
        },
        {
          "kind": "p",
          "text": "উল্লম্ব উচ্চতা ও অনুভূমিক চলন ট্যানজেন্টের সঠিক ইনপুট। এই কোণটি নিজে থেকে প্রবেশগম্যতা বা ভবন-কোড সম্মতি নিশ্চিত করে না।"
        },
        {
          "kind": "h3",
          "text": "উদাহরণ 8: গাছের শীর্ষের উন্নতি কোণ অনুমান"
        },
        {
          "kind": "p",
          "text": "একজন ব্যক্তি গাছ থেকে 20 মি দূরে দাঁড়িয়ে আছেন। গাছের শীর্ষ পর্যবেক্ষণ স্তর থেকে 12 মি ওপরে। উন্নতি কোণ গণনা করুন।"
        },
        {
          "kind": "p",
          "text": "[[[A = \\arctan\\left(\\frac{12}{20}\\right) \\approx 30.96^\\circ]]]"
        },
        {
          "kind": "p",
          "text": "উল্লম্ব উচ্চতার পার্থক্য বিপরীত বাহু এবং অনুভূমিক দূরত্ব সন্নিহিত বাহু। ফলাফল হলো পর্যবেক্ষণ বিন্দু থেকে অনুভূমিকের ওপরের কোণ, গাছের মোট উচ্চতা নয়।"
        },
        {
          "kind": "h3",
          "text": "উদাহরণ 9: একটি জরিপের উচ্চতা পরিমাপ"
        },
        {
          "kind": "p",
          "text": "একটি সরলীকৃত জরিপ স্কেচে 7 মি উল্লম্ব পার্থক্য ও 12 মি অনুভূমিক দূরত্ব লেখা আছে। উন্নতি কোণ গণনা করুন।"
        },
        {
          "kind": "p",
          "text": "[[[A = \\arctan\\left(\\frac{7}{12}\\right) \\approx 30.26^\\circ]]]"
        },
        {
          "kind": "p",
          "text": "উচ্চতার পার্থক্য ও অনুভূমিক দূরত্ব বিপরীত ও সন্নিহিত বাহু গঠন করে। বাস্তব জরিপে এই সরলীকৃত মডেলের বাইরে যন্ত্রের উচ্চতার সংশোধন ও ভূখণ্ডের সমন্বয়ের প্রয়োজন হতে পারে।"
        },
        {
          "kind": "h3",
          "text": "উদাহরণ 10: যান্ত্রিক সাপোর্টের কোণ নির্ণয়"
        },
        {
          "kind": "p",
          "text": "একটি যান্ত্রিক সাপোর্টের উল্লম্ব উচ্চতা 1.2 মি ও অনুভূমিক চলন 3.5 মি। অনুভূমিকের সাপেক্ষে কোণ গণনা করুন।"
        },
        {
          "kind": "p",
          "text": "[[[A = \\arctan\\left(\\frac{1.2}{3.5}\\right) \\approx 18.92^\\circ]]]"
        },
        {
          "kind": "p",
          "text": "বিপরীত ট্যানজেন্ট কর্ণের দৈর্ঘ্যের প্রয়োজন ছাড়াই দুটি লম্ব পরিমাপকে কোণে রূপান্তর করে। গণনাটি সাপোর্টের শক্তি বা উপযুক্ততা প্রতিষ্ঠা করে না।"
        },
        {
          "kind": "h3",
          "text": "উদাহরণ 11: সিঁড়ির ঢাল গণনা"
        },
        {
          "kind": "p",
          "text": "একটি সরলীকৃত সিঁড়ি 4 মি অনুভূমিক চলনের ওপর 2.8 মি ওঠে। সামগ্রিক ঢালের কোণ গণনা করুন।"
        },
        {
          "kind": "p",
          "text": "[[[A = \\arctan\\left(\\frac{2.8}{4}\\right) \\approx 34.99^\\circ]]]"
        },
        {
          "kind": "p",
          "text": "মোট উল্লম্ব উচ্চতা ও অনুভূমিক চলন সামগ্রিক কোণ নির্ধারণ করে। এই সরলীকৃত গণনা ভবন-কোড সম্মতি বা পৃথক সিঁড়ির মাত্রা যাচাই করে না।"
        },
        {
          "kind": "h3",
          "text": "উদাহরণ 12: গাই তারের কোণ নির্ণয়"
        },
        {
          "kind": "p",
          "text": "একটি গাই তার দুটি বিন্দুকে যুক্ত করে যাদের উল্লম্ব ব্যবধান 10 মি ও অনুভূমিক ব্যবধান 15 মি। তার ও অনুভূমিকের মধ্যবর্তী কোণ নির্ণয় করুন।"
        },
        {
          "kind": "p",
          "text": "[[[A = \\arctan\\left(\\frac{10}{15}\\right) \\approx 33.69^\\circ]]]"
        },
        {
          "kind": "p",
          "text": "উল্লম্ব ব্যবধান কোণের বিপরীত এবং অনুভূমিক অভিক্ষেপ সন্নিহিত। কোণের গণনা তারের টান, অ্যাঙ্করের শক্তি বা কাঠামোগত নিরাপত্তা নির্ধারণ করে না।"
        },
        {
          "kind": "h3",
          "text": "উদাহরণ 13: রাস্তার গ্রেডের কোণ গণনা"
        },
        {
          "kind": "p",
          "text": "একটি রাস্তা 100 মি অনুভূমিক দূরত্বে 5 মি ওঠে। রাস্তার ঢালের কোণ নির্ণয় করুন।"
        },
        {
          "kind": "p",
          "text": "[[[A = \\arctan\\left(\\frac{5}{100}\\right) \\approx 2.86^\\circ]]]"
        },
        {
          "kind": "p",
          "text": "শতকরা গ্রেড হলো [[(5/100) \\times 100 = 5\\%]]। 5 শতাংশ গ্রেড 5 ডিগ্রির কোণ নয়; কোণটি অনুপাতের arctan, প্রায় 2.86 ডিগ্রি।"
        },
        {
          "kind": "h3",
          "text": "উদাহরণ 14: ক্রেন বুমের কোণ নির্ণয়"
        },
        {
          "kind": "p",
          "text": "একটি সরলীকৃত বুমের উল্লম্ব উচ্চতা 8 মি ও অনুভূমিক অভিক্ষেপ 6 মি। অনুভূমিকের সাপেক্ষে কোণ নির্ণয় করুন।"
        },
        {
          "kind": "p",
          "text": "[[[A = \\arctan\\left(\\frac{8}{6}\\right) \\approx 53.13^\\circ]]]"
        },
        {
          "kind": "p",
          "text": "উল্লম্ব অভিক্ষেপ বিপরীত এবং অনুভূমিক অভিক্ষেপ সন্নিহিত। এটি ক্রেনের ধারণক্ষমতা বা পরিচালন নিরাপত্তা নির্ধারণ করে না।"
        },
        {
          "kind": "h3",
          "text": "উদাহরণ 15: হাইকিং ট্রেইলের ঢাল গণনা"
        },
        {
          "kind": "p",
          "text": "হাইকিং ট্রেইলের একটি সোজা অংশ 150 মি অনুভূমিক চলনের ওপর 80 মি ওঠে। ঢালের কোণ নির্ণয় করুন।"
        },
        {
          "kind": "p",
          "text": "[[[A = \\arctan\\left(\\frac{80}{150}\\right) \\approx 28.07^\\circ]]]"
        },
        {
          "kind": "p",
          "text": "গণনায় উল্লম্ব উচ্চতা বৃদ্ধিকে বিপরীত বাহু এবং অনুভূমিক দূরত্বকে সন্নিহিত বাহু হিসেবে ব্যবহার করা হয়েছে। বাস্তব ট্রেইল একটি সোজা ঢাল না হয়ে গ্রেডিয়েন্টে ভিন্ন হয়।"
        },
        {
          "kind": "h3",
          "text": "উদাহরণ 16: শামিয়ানার সাপোর্টের কোণ নির্ণয়"
        },
        {
          "kind": "p",
          "text": "একটি শামিয়ানার সাপোর্টের উল্লম্ব উচ্চতা 1.2 মি ও অনুভূমিক চলন 2.4 মি। অনুভূমিকের সাপেক্ষে কোণ গণনা করুন।"
        },
        {
          "kind": "p",
          "text": "[[[A = \\arctan\\left(\\frac{1.2}{2.4}\\right) \\approx 26.57^\\circ]]]"
        },
        {
          "kind": "p",
          "text": "অনুপাতটি কর্ণের সাপোর্ট দৈর্ঘ্যের প্রয়োজন ছাড়াই কোণ নির্ধারণ করে। ফলাফলটি সাপোর্টের কাঠামোগত উপযুক্ততা প্রতিষ্ঠা করে না।"
        },
        {
          "kind": "h3",
          "text": "ব্যবহারিক উদাহরণগুলোর তুলনা"
        }
      ],
      "table": {
        "headers": [
          "পরিস্থিতি",
          "বিপরীত",
          "সন্নিহিত",
          "সূত্র",
          "কোণ",
          "ব্যাখ্যা"
        ],
        "rows": [
          [
            "ছাদের পিচ",
            "4 ফুট",
            "12 ফুট",
            "arctan(4/12)",
            "18.43°",
            "মাঝারি ছাদের ঢাল"
          ],
          [
            "মই",
            "4.5 মি",
            "2 মি",
            "arctan(4.5/2)",
            "66.04°",
            "খাড়া মই বসানো"
          ],
          [
            "র‍্যাম্প",
            "0.75 মি",
            "9 মি",
            "arctan(0.75/9)",
            "4.76°",
            "মৃদু ঢাল"
          ],
          [
            "গাছের উচ্চতা",
            "12 মি",
            "20 মি",
            "arctan(12/20)",
            "30.96°",
            "গাছের শীর্ষে দেখার কোণ"
          ],
          [
            "জরিপ",
            "7 মি",
            "12 মি",
            "arctan(7/12)",
            "30.26°",
            "উন্নতি কোণ"
          ],
          [
            "সাপোর্ট ব্রেস",
            "1.2 মি",
            "3.5 মি",
            "arctan(1.2/3.5)",
            "18.92°",
            "অগভীর ব্রেস কোণ"
          ],
          [
            "সিঁড়ি",
            "2.8 মি",
            "4 মি",
            "arctan(2.8/4)",
            "34.99°",
            "সাধারণ সিঁড়ির ঢাল"
          ],
          [
            "গাই তার",
            "10 মি",
            "15 মি",
            "arctan(10/15)",
            "33.69°",
            "অনুভূমিকের সাথে তারের কোণ"
          ],
          [
            "রাস্তার গ্রেড",
            "5 মি",
            "100 মি",
            "arctan(5/100)",
            "2.86°",
            "5% গ্রেডের রাস্তা"
          ],
          [
            "ক্রেন বুম",
            "8 মি",
            "6 মি",
            "arctan(8/6)",
            "53.13°",
            "তোলা বুমের অবস্থান"
          ],
          [
            "হাইকিং ট্রেইল",
            "80 মি",
            "150 মি",
            "arctan(80/150)",
            "28.07°",
            "খাড়া ট্রেইল অংশ"
          ],
          [
            "শামিয়ানার সাপোর্ট",
            "1.2 মি",
            "2.4 মি",
            "arctan(1.2/2.4)",
            "26.57°",
            "সাপোর্টের কর্ণের কোণ"
          ]
        ]
      },
      "imgAlt": "চারটি ব্যবহারিক arctan উদাহরণ: ছাদের পিচ, মই, র‍্যাম্প ও গাছের উচ্চতার কোণ",
      "figcaption": "চারটি ব্যবহারিক গণনা: ছাদ 18.43°, মই 66.04°, র‍্যাম্প 4.76°, গাছের উচ্চতা 30.96°।"
    },
    "arctan-ratio": {
      "h2": "বিপরীত-বাই-সন্নিহিত অনুপাত কীভাবে কোণকে প্রভাবিত করে",
      "blocks": [
        {
          "kind": "p",
          "text": "অনুপাত [[a/b]] কোণ [[A]] নির্ধারণ করে। ছোট অনুপাত ছোট সূক্ষ্মকোণ দেয়, সমান বাহু ঠিক 45 ডিগ্রি দেয়, এবং সন্নিহিত বাহুর চেয়ে লম্বা বিপরীত বাহু 45 ডিগ্রির বেশি কোণ দেয়। 1-এর বেশি অনুপাত ট্যানজেন্টের জন্য সম্পূর্ণ বৈধ, যা একে সাইন ও কোসাইন থেকে আলাদা করে। সমানুপাতিক ত্রিভুজ একই কোণ ভাগ করে, এবং উভয় বাহুকে একই ধনাত্মক গুণকে স্কেল করলে কোণ অপরিবর্তিত থাকে। অনুপাত অত্যন্ত বড় হওয়ার সাথে সাথে, সসীম ধনাত্মক বাহুর দৈর্ঘ্যের জন্য কোণটি 90 ডিগ্রিতে না পৌঁছে তার কাছাকাছি যায়।"
        },
        {
          "kind": "p",
          "text": "ধরনটি স্পষ্ট: বাহুর অনুপাত ত্রিভুজের আকৃতি নির্ধারণ করে, এর সামগ্রিক আকার নয়। উভয় বাহু দ্বিগুণ করুন এবং কোণ ঠিক একই থাকে।"
        }
      ],
      "table": {
        "headers": [
          "বিপরীত a",
          "সন্নিহিত b",
          "অনুপাত a/b",
          "কোণ A"
        ],
        "rows": [
          [
            "1",
            "4",
            "0.25",
            "প্রায় 14.04°"
          ],
          [
            "1",
            "2",
            "0.5",
            "প্রায় 26.57°"
          ],
          [
            "1",
            "1",
            "1",
            "45°"
          ],
          [
            "2",
            "1",
            "2",
            "প্রায় 63.43°"
          ],
          [
            "4",
            "1",
            "4",
            "প্রায় 75.96°"
          ]
        ]
      },
      "imgAlt": "ট্যানজেন্ট অনুপাত কীভাবে কোণকে 14 থেকে 76 ডিগ্রিতে বদলায় তা দেখানো পাঁচটি ত্রিভুজ",
      "figcaption": "অনুপাত 0.25 দেয় 14.04°, 0.5 দেয় 26.57°, 1 দেয় 45°, 2 দেয় 63.43°, 4 দেয় 75.96°।"
    },
    "arctan-units": {
      "h2": "কোণের একক ও পরিমাপের নির্ভুলতা বোঝা",
      "blocks": [
        {
          "kind": "p",
          "text": "ক্যালকুলেটরটি ডিগ্রি দেয়। ডিগ্রি হলো পূর্ণ ঘূর্ণনের 1/360। রেডিয়ান হলো বিকল্প কৌণিক একক, এমনভাবে সংজ্ঞায়িত যে পূর্ণ ঘূর্ণন [[2\\pi]] রেডিয়ানের সমান। বিপরীত ট্যানজেন্ট ক্যালকুলেটরভেদে যেকোনো একক দিতে পারে, কিন্তু এই টুলটি ডিগ্রি রিপোর্ট করে।"
        },
        {
          "kind": "p",
          "text": "অনুপাত [[a/b]]-এর নিজের কোনো একক নেই, এবং দুটি বাহুকে সামঞ্জস্যপূর্ণ একক ব্যবহার করতে হবে। উভয় পরিমাপ মিটার থেকে সেন্টিমিটারে রূপান্তর করলে লব ও হরকে 100 দিয়ে গুণ করে, অনুপাত অপরিবর্তিত রেখে।"
        },
        {
          "kind": "p",
          "text": "রেডিয়ানকে ডিগ্রিতে রূপান্তর করতে: [[\\text{Degrees} = \\text{Radians} \\times 180^\\circ / \\pi]]"
        },
        {
          "kind": "h3",
          "text": "উদাহরণ: পরিমাপের একক কি কোণ বদলায়?"
        },
        {
          "kind": "p",
          "text": "নিন [[a = 3]] মি ও [[b = 4]] মি। সেন্টিমিটারে সমতুল্য হলো [[a = 300]] সে.মি. ও [[b = 400]] সে.মি.। উভয়েই অনুপাত 0.75 ও একই 36.87 ডিগ্রি কোণ দেয়। মধ্যবর্তী ধাপে যথেষ্ট নির্ভুলতা রাখুন এবং মূল পরিমাপের সঠিকতার সাথে মিলিয়ে চূড়ান্ত কোণ রাউন্ড করুন।"
        }
      ]
    },
    "arctan-mistakes": {
      "h2": "ট্যানজেন্ট দিয়ে কোণ গণনায় সাধারণ ভুল",
      "blocks": [],
      "list": [
        "<strong>সন্নিহিত বাহুর বদলে অতিভুজ ব্যবহার।</strong> সূত্রটির প্রয়োজন কোণ A-কে স্পর্শ করা বাহু, দীর্ঘতম বাহু নয়। পরীক্ষা করুন: আপনার হর কি দুটি বাহুর একটি?",
        "<strong>বিপরীত ও সন্নিহিত বাহু অদলবদল।</strong> এটি পূরক কোণ গণনা করে। প্রায় 37 ডিগ্রি আশা করে প্রায় 53 পেলে, বাহুগুলো অদলবদল হয়েছে।",
        "<strong>অনুপাত b/a-তে উল্টে দেওয়া।</strong> [[\\arctan(b/a)]] দেয় [[B]], [[A]] নয়। 3-4 ত্রিভুজের জন্য, arctan(4/3) হলো 53.13 ডিগ্রি, অন্য সূক্ষ্মকোণ।",
        "<strong>বিপরীত ট্যানজেন্টের বদলে সাধারণ ট্যানজেন্ট ব্যবহার।</strong> arctan(0.75)-এর বদলে tan(0.75) টাইপ করলে সম্পূর্ণ ভিন্ন প্রশ্নের উত্তর হয়।",
        "<strong>বিপরীত ট্যানজেন্টকে ট্যানজেন্টের ব্যস্ত মানের সাথে গুলিয়ে ফেলা।</strong> [[\\tan^{-1}(x)]] [[1/\\tan(x)]] নয়। ব্যস্ত মানটি হলো কোট্যানজেন্ট।",
        "<strong>ধরে নেওয়া ট্যানজেন্ট অনুপাত 0 ও 1-এর মধ্যে হতেই হবে।</strong> এটি অবাধে 1 ছাড়িয়ে যেতে পারে। 63.43 ডিগ্রি কোণসহ 2 অনুপাত সম্পূর্ণ বৈধ।",
        "<strong>শূন্য বা ঋণাত্মক বাহুর দৈর্ঘ্য লেখা।</strong> বাহুর দৈর্ঘ্য ধনাত্মক হতেই হবে। শূন্য বা ঋণাত্মক ইনপুটের এখানে কোনো জ্যামিতিক অর্থ নেই।",
        "<strong>অসামঞ্জস্যপূর্ণ পরিমাপের একক মেশানো।</strong> একটি বাহু মিটারে ও অন্যটি ফুটে অনুপাত নষ্ট করে। আগে রূপান্তর করুন।",
        "<strong>অনুপাত খুব তাড়াতাড়ি রাউন্ড করা।</strong> arctan প্রয়োগের আগে 0.6667-কে 0.67-এ রাউন্ড করলে উত্তর সরে যায়। চূড়ান্ত ধাপ পর্যন্ত পূর্ণ নির্ভুলতা রাখুন।",
        "<strong>ডিগ্রি আশা করা হলে রেডিয়ান রিপোর্ট করা।</strong> Arctan(1) হলো 45 ডিগ্রি কিন্তু 0.785 রেডিয়ান। আপনার ক্যালকুলেটরের মোড পরীক্ষা করুন।",
        "<strong>কোণ A-কে এর পূরক কোণ B-এর সাথে গুলিয়ে ফেলা।</strong> মনে রাখুন [[A + B = 90^\\circ]]। উত্তরটি অন্য কোণটির মতো দেখালে, অনুপাত উল্টে গিয়েছিল।",
        "<strong>শতকরা গ্রেডকে ডিগ্রিতে কোণ ধরা।</strong> 5% গ্রেড হলো arctan(0.05), প্রায় 2.86 ডিগ্রি, 5 ডিগ্রি নয়।",
        "<strong>উল্লম্ব উচ্চতাকে ঢালু দূরত্বের সাথে গুলিয়ে ফেলা।</strong> বিপরীত বাহু হলো বিশুদ্ধ উল্লম্ব উপাদান, ঢাল বরাবর দৈর্ঘ্য নয়।",
        "<strong>ধরে নেওয়া গণনা করা কোণ প্রমাণ করে কাঠামো নিরাপদ।</strong> জ্যামিতি শুধু আকৃতি বর্ণনা করে। মইয়ের নিরাপত্তা, ছাদের ভার ও র‍্যাম্পের সম্মতির জন্য আলাদা প্রকৌশল পরীক্ষা প্রয়োজন।"
      ]
    },
    "arctan-verify": {
      "h2": "আপনার গণনা করা কোণ বৈধ কিনা তা কীভাবে পরীক্ষা করবেন",
      "blocks": [
        {
          "kind": "p",
          "text": "একটি সত্যিকারের সমকোণী ত্রিভুজের জন্য বৈধ ইনপুট: বিপরীত বাহু ধনাত্মক হতেই হবে, সন্নিহিত বাহু ধনাত্মক হতেই হবে, কোনোটিই শূন্য হতে পারে না, উভয়কে সামঞ্জস্যপূর্ণ একক ব্যবহার করতে হবে, এবং ফলে কোণটি 0 ও 90 ডিগ্রির মধ্যে কঠোরভাবে পড়তেই হবে। সাইন ও কোসাইনের বিপরীতে, ট্যানজেন্ট অনুপাত 1-এর নিচের মানে সীমাবদ্ধ নয়, তাই সন্নিহিত বাহুর চেয়ে লম্বা বিপরীত বাহু ঠিক আছে।"
        },
        {
          "kind": "h3",
          "text": "পদ্ধতি 1: ট্যানজেন্ট অনুপাত পরীক্ষা করুন"
        },
        {
          "kind": "p",
          "text": "সম্ভব হলে অরাউন্ড করা কোণ ব্যবহার করে [[\\tan(A) \\approx a/b]] যাচাই করুন। আপনার উত্তরের tan ইনপুট অনুপাত পুনরুৎপাদন করলে, উত্তরটি সামঞ্জস্যপূর্ণ।"
        },
        {
          "kind": "h3",
          "text": "পদ্ধতি 2: পূরক কোণ পরীক্ষা করুন"
        },
        {
          "kind": "p",
          "text": "[[B = 90^\\circ - A]] গণনা করুন। সমকোণী ত্রিভুজের দুটি সূক্ষ্মকোণের যোগফল 90 ডিগ্রি হতেই হবে, তাই এটি প্রতিটি ফলাফলের দ্রুত যুক্তি-পরীক্ষা।"
        },
        {
          "kind": "h3",
          "text": "পদ্ধতি 3: পিথাগোরাসের উপপাদ্য ব্যবহার করুন"
        },
        {
          "kind": "p",
          "text": "অতিভুজ [[c = \\sqrt{a^2 + b^2}]] গণনা করুন, তারপর [[a^2 + b^2 = c^2]] নিশ্চিত করুন।"
        },
        {
          "kind": "p",
          "text": "[[a = 3]] ও [[b = 4]] দিয়ে পূর্ণ পরীক্ষা: [[c = \\sqrt{9 + 16} = 5]]। কোণ [[A = \\arctan(3/4) \\approx 36.87^\\circ]] এবং এর পূরক [[B \\approx 53.13^\\circ]] যোগফল 90 ডিগ্রি দেয়। ছোট পার্থক্যগুলো প্রদর্শিত কোণ রাউন্ড করা থেকে আসে।"
        }
      ]
    },
    "arctan-choose": {
      "h2": "সঠিক সমকোণী ত্রিভুজ ক্যালকুলেটর বেছে নেওয়া",
      "blocks": [
        {
          "kind": "p",
          "text": "আপনার আসলে যে পরিমাপগুলো আছে তার সাথে টুলটি মেলান:"
        },
        {
          "kind": "p",
          "text": "তিনটি বিপরীত ফাংশনই একই ত্রিভুজে একমত হয়: 3-4-5 ত্রিভুজের জন্য, arctan(3/4), arcsin(3/5) ও arccos(4/5) সবই 36.87 ডিগ্রি দেয়। দুটি পদ্ধতি অমিল হলে, একটি বাহু ভুল লেবেল করা হয়েছে।"
        }
      ],
      "list": [
        "<strong>ট্যানজেন্ট থেকে কোণ ক্যালকুলেটর</strong> (এই পৃষ্ঠা): বিপরীত বাহু [[a]] ও সন্নিহিত বাহু [[b]] জানা, কোণ [[A]] নির্ণয় করে। দুটি বাহু সরাসরি মাপা হলে সেরা।",
        "<a href=\"/right-triangle-angle-from-sine-calculator/\" class=\"text-primary hover:underline\"><strong>সাইন থেকে কোণ ক্যালকুলেটর</strong></a>: বিপরীত বাহু ও অতিভুজ জানা। ঢালু দৈর্ঘ্য মাপা উচ্চতার সমস্যার জন্য সেরা।",
        "<a href=\"/right-triangle-angle-from-cosine-calculator/\" class=\"text-primary hover:underline\"><strong>কোসাইন থেকে কোণ ক্যালকুলেটর</strong></a>: সন্নিহিত বাহু ও অতিভুজ জানা। ঢাল বরাবর সরাসরি অতিভুজ মাপা হলে সেরা।",
        "<a href=\"/right-triangle-angle-calculator/\" class=\"text-primary hover:underline\"><strong>কোণ ক্যালকুলেটর</strong></a>: আপনার কোন বাহুগুলো আছে তা নিশ্চিত না হলে সঠিক পদ্ধতি বেছে নিতে সাহায্য করে।",
        "<a href=\"/right-triangle-missing-angle-calculator/\" class=\"text-primary hover:underline\"><strong>অনুপস্থিত কোণ ক্যালকুলেটর</strong></a>: একটি সূক্ষ্মকোণ ইতিমধ্যে জানা থাকলে পূরক কোণ নির্ণয় করে।",
        "<a href=\"/right-triangle-side-calculator/\" class=\"text-primary hover:underline\"><strong>বাহু ক্যালকুলেটর</strong></a>: কোণের বদলে অনুপস্থিত বাহুর দৈর্ঘ্য নির্ণয় করে।"
      ]
    },
    "arctan-conclusion": {
      "h2": "আত্মবিশ্বাসের সাথে ট্যানজেন্ট থেকে যেকোনো কোণ নির্ণয় করুন",
      "blocks": [
        {
          "kind": "p",
          "text": "বিপরীত ট্যানজেন্ট সূত্র দুটি সরল বাহুর পরিমাপকে নিখুঁত কোণে পরিণত করে। বিপরীত বাহু ও সন্নিহিত বাহু মাপুন, ভাগ করুন, arctan প্রয়োগ করুন, এবং পূরক কোণ বা পিথাগোরাসের উপপাদ্য দিয়ে যাচাই করুন। কাজটি ছাদের পিচ, র‍্যাম্পের ঢাল বা মই বসানো যাই হোক, পদ্ধতি একই: অনুপাতকে কোণের সাথে মেলান, এবং জ্যামিতিকে বাকিটা করতে দিন।"
        }
      ]
    }
  },
  "faqs": [
    {
      "question": "A = arctan(a / b) সূত্রটি কী গণনা করে?",
      "answer": "এটি দুটি বাহুর দৈর্ঘ্য থেকে সমকোণী ত্রিভুজের সূক্ষ্মকোণ A গণনা করে। আপনি বিপরীত বাহু a-কে সন্নিহিত বাহু b দিয়ে ভাগ করেন, তারপর সেই অনুপাতে বিপরীত ট্যানজেন্ট প্রয়োগ করেন। ফলাফল হলো ডিগ্রিতে সেই কোণ যার ট্যানজেন্ট a / b-এর সমান।"
    },
    {
      "question": "বিপরীত ট্যানজেন্ট দিয়ে কোণ কীভাবে নির্ণয় করবেন?",
      "answer": "আপনার লক্ষ্য কোণের সাপেক্ষে বিপরীত বাহু ও সন্নিহিত বাহু মাপুন, ট্যানজেন্ট অনুপাত পেতে বিপরীতকে সন্নিহিত দিয়ে ভাগ করুন, তারপর arctan প্রয়োগ করুন। উদাহরণস্বরূপ, arctan(3 / 4) প্রায় 36.87 ডিগ্রি।"
    },
    {
      "question": "বিপরীত ও সন্নিহিত বাহু আমার কেন প্রয়োজন?",
      "answer": "ট্যানজেন্টকে বিপরীত বাই সন্নিহিত হিসেবে সংজ্ঞায়িত করা হয়, তাই এই দুটি বাহুই সূত্রটির ঠিক যা প্রয়োজন। এগুলো সমকোণী ত্রিভুজের দুটি বাহু, এবং একসাথে তারা আকৃতি সম্পূর্ণ নির্ধারণ করে, এবং ফলে কোণও।"
    },
    {
      "question": "অতিভুজ না জেনে কি কোণ গণনা করা যায়?",
      "answer": "হ্যাঁ। এটিই এই পদ্ধতির প্রধান সুবিধা। ট্যানজেন্ট সূত্রে অতিভুজ কখনো আসে না, তাই দীর্ঘতম বাহু মাপা সম্পূর্ণ এড়িয়ে গিয়েও আপনি সঠিক কোণ পেতে পারেন।"
    },
    {
      "question": "ট্যানজেন্ট ও বিপরীত ট্যানজেন্টের মধ্যে পার্থক্য কী?",
      "answer": "ট্যানজেন্ট একটি কোণ নিয়ে একটি অনুপাত দেয়, উদাহরণস্বরূপ tan(45 ডিগ্রি) = 1। বিপরীত ট্যানজেন্ট এর উল্টোটি করে: এটি একটি অনুপাত নিয়ে কোণ দেয়, উদাহরণস্বরূপ arctan(1) = 45 ডিগ্রি। দুটি ফাংশন একে অপরকে বাতিল করে।"
    },
    {
      "question": "আর্কট্যানজেন্ট কি tan বিপরীতের সমান?",
      "answer": "হ্যাঁ। Arctan(x) ও tan বিপরীত(x) একই ফাংশনের দুটি নাম। কোনোটিই বিপরীত 1 / tan(x) বোঝায় না; ট্যানজেন্টের বিপরীত হলো কোট্যানজেন্ট, একটি ভিন্ন ফাংশন।"
    },
    {
      "question": "ট্যানজেন্ট অনুপাত কি 1-এর বেশি হতে পারে?",
      "answer": "হ্যাঁ, এবং এটি স্বাভাবিক। বিপরীত বাহু সন্নিহিত বাহুর চেয়ে লম্বা হলে, অনুপাত 1 ছাড়িয়ে যায় এবং কোণ 45 ডিগ্রির বেশি হয়। সাইন ও কোসাইন অনুপাতের বিপরীতে, ট্যানজেন্টের কোনো ঊর্ধ্বসীমা নেই।"
    },
    {
      "question": "বিপরীত ও সন্নিহিত বাহু সমান হলে কী হয়?",
      "answer": "অনুপাত হয় 1, এবং arctan(1) ঠিক 45 ডিগ্রি। সমান বাহু একটি সমদ্বিবাহু সমকোণী ত্রিভুজ গঠন করে, তাই দুটি সূক্ষ্মকোণই 45 ডিগ্রি।"
    },
    {
      "question": "বাহুর অনুপাত কীভাবে কোণকে প্রভাবিত করে?",
      "answer": "বড় বিপরীত-বাই-সন্নিহিত অনুপাত মানে বড় কোণ। 0.25 অনুপাত দেয় প্রায় 14.04 ডিগ্রি, 1 অনুপাত দেয় 45 ডিগ্রি, এবং 4 অনুপাত দেয় প্রায় 75.96 ডিগ্রি। সন্নিহিত বাহুর সাপেক্ষে বিপরীত বাহু বাড়ার সাথে সাথে কোণ বাড়ে।"
    },
    {
      "question": "আমার গণনা করা কোণ কীভাবে যাচাই করব?",
      "answer": "তিনটি পরীক্ষা ভালো কাজ করে। tan(A) গণনা করুন এবং নিশ্চিত করুন এটি a / b-এর সমান। পূরক কোণ B = 90 বিয়োগ A যুক্তিসঙ্গত কিনা নিশ্চিত করুন। অথবা পিথাগোরাসের উপপাদ্য দিয়ে অতিভুজ গণনা করুন এবং নিশ্চিত করুন a বর্গ যোগ b বর্গ c বর্গের সমান।"
    },
    {
      "question": "ছাদের পিচ, র‍্যাম্পের ঢাল বা মইয়ের কোণের জন্য কি এই ক্যালকুলেটর ব্যবহার করতে পারি?",
      "answer": "হ্যাঁ, এগুলো চিরায়ত ব্যবহারের ক্ষেত্র। ছাদের উচ্চতা বাই এর অনুভূমিক চলন, র‍্যাম্পের উচ্চতা বাই এর চলন, বা মইয়ের উচ্চতা বাই এর গোড়ার দূরত্ব সবই আপনাকে সরাসরি বিপরীত ও সন্নিহিত বাহু দেয়, যা এই ক্যালকুলেটরের ঠিক যা প্রয়োজন।"
    },
    {
      "question": "শতকরা গ্রেড ও ডিগ্রিতে কোণের মধ্যে পার্থক্য কী?",
      "answer": "শতকরা গ্রেড হলো উচ্চতা-বাই-চলন অনুপাতের 100 গুণ, আর কোণ হলো সেই অনুপাতের arctan। 5 শতাংশ গ্রেড মানে 0.05 অনুপাত, যা প্রায় 2.86 ডিগ্রির কোণ, 5 ডিগ্রি নয়।"
    }
  ],
  "relatedHeading": "সম্পর্কিত ত্রিভুজ ক্যালকুলেটরগুলো দেখুন",
  "relatedItems": [
    "সমকোণী ত্রিভুজের কোণ ক্যালকুলেটর",
    "সমকোণী ত্রিভুজের সাইন থেকে কোণ ক্যালকুলেটর",
    "সমকোণী ত্রিভুজের কোসাইন থেকে কোণ ক্যালকুলেটর",
    "সমকোণী ত্রিভুজের অনুপস্থিত কোণ ক্যালকুলেটর",
    "ট্যানজেন্ট অনুপাত ক্যালকুলেটর",
    "ট্যানজেন্ট থেকে সমকোণী ত্রিভুজের বাহু ক্যালকুলেটর",
    "সমকোণী ত্রিভুজের বাহু ক্যালকুলেটর",
    "বিশেষ সমকোণী ত্রিভুজ ক্যালকুলেটর"
  ]
},
  "ja": {
  "tocHeading": "このガイドの内容",
  "tocItems": {
    "arctan-intro": "タンジェントで角を求める方法",
    "arctan-sides": "対辺と隣辺を理解する",
    "arctan-what": "直角三角形のタンジェントとは?",
    "arctan-formula": "アークタンジェント公式の仕組み",
    "arctan-howto": "計算機の使い方",
    "arctan-examples": "手順付きの例題",
    "arctan-applications": "実生活での例題",
    "arctan-ratio": "比が角に与える影響",
    "arctan-units": "角度の単位と精度",
    "arctan-mistakes": "よくある間違い",
    "arctan-verify": "答えの確認",
    "arctan-choose": "適切な計算機の選び方",
    "arctan-faq": "よくある質問",
    "arctan-related": "関連する計算機"
  },
  "sections": {
    "arctan-intro": {
      "h2": "タンジェントで角を求める方法",
      "blocks": [
        {
          "kind": "p",
          "text": "直角三角形の角度計算機(タンジェント)は、三角形の2つの脚、つまり対辺と隣辺がわかっているときに鋭角を求めます。対辺を隣辺で割り、その比にアークタンジェントを適用します。結果は度単位の角度です。"
        },
        {
          "kind": "p",
          "text": "車いす用スロープを思い浮かべてください。立ち上がりの高さと水平方向の距離は測れますが、斜めの面自体は測りにくいかもしれません。この2つの測定値、つまり垂直の立ち上がりと水平距離が、対辺と隣辺です。その比だけで十分です。アークタンジェントはその比を直接傾斜角に変換するので、斜面の長さを測る必要はまったくありません。"
        },
        {
          "kind": "p",
          "text": "[[A]]は求めたい角、[[a]]は対辺、[[b]]は隣辺です。タンジェントはそれらを [[\\tan(A) = a/b]] という関係で結び、アークタンジェントはこの関係を逆にします: [[A = \\arctan(a/b)]]。斜辺は公式に登場しないため、2つの脚が実際に手元にある測定値である場合、この方法が自然な選択です。"
        }
      ]
    },
    "arctan-sides": {
      "h2": "対辺と隣辺を理解する",
      "blocks": [
        {
          "kind": "h3",
          "text": "直角三角形とは?"
        },
        {
          "kind": "p",
          "text": "直角三角形にはちょうど90度の角が1つあります。残りの2つの角は鋭角で、それぞれ90度未満であり、合計は常に90度になります。この90度という条件が三角比を機能させます。サイン、コサイン、タンジェントは、直角三角形の辺の間の固定された関係によって定義されるからです。直角がなければ、比 [[a/b]] は1つの一貫した角に対応しません。"
        },
        {
          "kind": "h3",
          "text": "対辺とは?"
        },
        {
          "kind": "p",
          "text": "対辺とは、角 [[A]] の真向かいにある脚です。角自体には決して接しません。実用的には、垂直の立ち上がりを表すことが多いです。はしごが壁に沿って届く高さ、屋根が得る高さ、クレーンのブームの垂直成分などです。「対辺」というラベルは、どの角を基準に選ぶかによって決まります。基準を [[A]] から [[B]] に切り替えると、対辺だった辺が隣辺になります。"
        },
        {
          "kind": "h3",
          "text": "隣辺とは?"
        },
        {
          "kind": "p",
          "text": "隣辺とは、角 [[A]] に接しているが斜辺ではない脚です。角の1辺を成します。現場の測定では、水平距離を表すことが多いです。壁からのはしごの足元の地面距離、屋根の水平スパン、スロープの水平距離などです。2つの垂直な脚のうちの1つであり、直角の対辺である斜辺と混同してはなりません。"
        },
        {
          "kind": "h3",
          "text": "斜辺とは?"
        },
        {
          "kind": "p",
          "text": "斜辺(記号 [[c]])は、90度の角の対辺であり、三角形の中で常に最も長い辺です。タンジェントの計算機では、その長さは必要ありません。必要になった場合は、三平方の定理で2つの脚から求められます: [[c = \\sqrt{a^2 + b^2}]]。しかし、角度そのものを求めるには、斜辺は単に省略できる余分な情報です。"
        },
        {
          "kind": "h3",
          "text": "なぜ基準角が重要なのか?"
        },
        {
          "kind": "p",
          "text": "対辺と隣辺は、選んだ角を基準に定義されます。同じ三角形でも、基準を [[A]] から [[B]] に切り替えると、2つの脚の役割が入れ替わります。対辺だった辺が隣辺になり、その逆も同様です。比を [[a/b]] から [[b/a]] に反転させると、[[A]] ではなく余角 [[B = 90^\\circ - A]] が求まります。計算中は基準角を固定しておくことで、この混同を避けられます。"
        }
      ],
      "imgAlt": "アークタンジェント公式のための直角三角形の構造。対辺a、隣辺b、斜辺cを示す",
      "figcaption": "アークタンジェントの構造: aは角Aの対辺、bは角Aに接する隣辺、cは斜辺です。"
    },
    "arctan-what": {
      "h2": "直角三角形のタンジェントとは?",
      "blocks": [
        {
          "kind": "p",
          "text": "タンジェントは、直角三角形の2つの脚を比較します。角 [[A]] に対しては、対辺を隣辺で割ったものになります:"
        },
        {
          "kind": "p",
          "text": "[[[\\tan(A) = \\frac{a}{b}]]]"
        },
        {
          "kind": "p",
          "text": "ここで [[\\tan(A)]] は角 [[A]] のタンジェント、[[a]] は対辺、[[b]] は隣辺です。タンジェントは三角形の急さを表します。三角形が隣辺を底辺として置かれたとき、垂直の脚と水平の脚の比です。"
        },
        {
          "kind": "p",
          "text": "たとえば [[a = 3]]、[[b = 4]] の場合:"
        },
        {
          "kind": "p",
          "text": "[[[\\tan(A) = \\frac{3}{4} = 0.75]]]"
        },
        {
          "kind": "p",
          "text": "この比に物理的な単位はありません。メートル÷メートルは打ち消されるので、測定がメートルでもフィートでもセンチメートルでも、比0.75は同じ純粋な数になります。"
        },
        {
          "kind": "h3",
          "text": "アークタンジェントとは?"
        },
        {
          "kind": "p",
          "text": "通常のタンジェントは角度から始めて比を出します。アークタンジェントは比から始めて角度を返します。[[\\tan(A) = 0.75]] なら、[[A = \\arctan(0.75) \\approx 36.87^\\circ]] です。アークタンジェントはタンジェントの関係を逆にし、辺の比から元の角を取り戻します。"
        },
        {
          "kind": "h3",
          "text": "アークタンジェントは逆タンジェントと同じですか?"
        },
        {
          "kind": "p",
          "text": "はい。[[\\arctan(x)]] と [[\\tan^{-1}(x)]] は、同じ関数の2つの表記です。上付きの [[-1]] は逆数 [[1/\\tan(x)]] を意味しません。タンジェントの逆数はコタンジェントという別の関数です。"
        },
        {
          "kind": "h3",
          "text": "SOH-CAH-TOAを理解する"
        },
        {
          "kind": "p",
          "text": "SOH-CAH-TOAは標準的な覚え方です。サイン=対辺/斜辺、コサイン=隣辺/斜辺、タンジェント=対辺/隣辺。既知の測定値が対辺と隣辺であるため、TOAの部分がこの計算機に適した比を示します。"
        },
        {
          "kind": "h3",
          "text": "なぜタンジェントに斜辺が不要なのか?"
        },
        {
          "kind": "p",
          "text": "タンジェントは2つの垂直な脚を直接使うので、対角線の長さは計算に関係ありません。立ち上がりと水平距離がわかれば、傾斜角は確定します。両方の脚に同じ正の数を掛けても、比は変わらず、したがって角度も変わりません。3-4三角形も6-8三角形も、同じ36.87度の角を持ちます。"
        }
      ],
      "imgAlt": "アークタンジェントの手順を示す図: aをbで割り、アークタンジェントを適用して角Aを求める",
      "figcaption": "アークタンジェントの仕組み: 対辺を隣辺で割り、アークタンジェントを適用して角を取り戻します。"
    },
    "arctan-formula": {
      "h2": "アークタンジェント公式の仕組み",
      "blocks": [
        {
          "kind": "p",
          "text": "タンジェントの定義から始めます:"
        },
        {
          "kind": "p",
          "text": "[[[\\tan(A) = \\frac{a}{b}]]]"
        },
        {
          "kind": "p",
          "text": "既知の辺の長さから、右辺の比を計算できます。角を取り戻すには、両辺にアークタンジェントを適用します:"
        },
        {
          "kind": "p",
          "text": "[[[A = \\arctan\\left(\\frac{a}{b}\\right)]]]"
        },
        {
          "kind": "p",
          "text": "アークタンジェントは比全体に適用されます。比全体が、その角のタンジェントだからです。分子と分母に分けて適用することはできません。"
        },
        {
          "kind": "h3",
          "text": "計算例: 対辺3、隣辺4"
        },
        {
          "kind": "p",
          "text": "[[a = 3]] センチメートル、[[b = 4]] センチメートルが与えられたとき:"
        },
        {
          "kind": "p",
          "text": "ステップ1: 公式を書きます。[[A = \\arctan(a/b)]]"
        },
        {
          "kind": "p",
          "text": "ステップ2: 値を代入します。[[A = \\arctan(3/4)]]"
        },
        {
          "kind": "p",
          "text": "ステップ3: 比を計算します。[[3/4 = 0.75]]"
        },
        {
          "kind": "p",
          "text": "ステップ4: アークタンジェントを適用します。[[A = \\arctan(0.75)]]"
        },
        {
          "kind": "p",
          "text": "答え: [[A \\approx 36.87^\\circ]]"
        },
        {
          "kind": "p",
          "text": "この角は約36.87度です。小数点以下2桁は、正確な閉形ではなく、無理数の結果を通常どおり丸めたものです。"
        }
      ]
    },
    "arctan-howto": {
      "h2": "タンジェントから角を求める直角三角形の計算機の使い方",
      "blocks": [
        {
          "kind": "p",
          "text": "実際の画面に合わせて、次の手順に従ってください:"
        },
        {
          "kind": "p",
          "text": "各ステップが重要なのは、辺のラベルの付け間違いが間違った答えの最も一般的な原因だからです。どの脚が対辺でどれが隣辺かを確認するひと手間が、最も頻繁なミスを防ぎます。"
        }
      ],
      "list": [
        "<strong>直角を特定します。</strong>三角比を使う前に、三角形に90度の角があることを確認してください。",
        "<strong>基準角Aを特定します。</strong>求めたい角を決めます。",
        "<strong>対辺aを見つけます。</strong>角Aの真向かいにある脚です。",
        "<strong>隣辺bを見つけます。</strong>角Aに接し、斜辺ではない脚です。",
        "<strong>両方の辺の長さを測るか求めます。</strong>同じ単位を使ってください。",
        "<strong>対辺の長さを入力します。</strong>対応する入力欄に入れてください。",
        "<strong>隣辺の長さを入力します。</strong>対応する入力欄に入れてください。",
        "<strong>単位を合わせます。</strong>計算機の単位選択で、両方の入力に適合する単位を選んでください。",
        "<strong>両方の辺の長さが正であることを確認します。</strong>ゼロより大きくなければなりません。",
        "<strong>「角度Aを計算」ボタンを押します。</strong>計算が実行されます。",
        "<strong>計算された角度を度単位で読み取ります。</strong>",
        "<strong>結果が三角形として妥当か確認します。</strong>比が1に近ければ、角は45度付近になるはずです。",
        "<strong>「リセット」ボタンを使います。</strong>入力を消去して新しい計算を始めます。"
      ]
    },
    "arctan-examples": {
      "h2": "タンジェントで角を求める手順付きの例題",
      "blocks": [
        {
          "kind": "p",
          "text": "この4つの例題は、実世界の応用に入る前に基本スキルを固めます。いずれも同じパターンです。公式を書き、代入し、割り算し、アークタンジェントを適用します。"
        },
        {
          "kind": "h3",
          "text": "例題1: 3-4-5直角三角形"
        },
        {
          "kind": "p",
          "text": "対辺 [[a = 3]] センチメートル、隣辺 [[b = 4]] センチメートルが与えられたとき、角 [[A]] を求めます。"
        },
        {
          "kind": "p",
          "text": "ステップ1: 公式を書きます。[[A = \\arctan(a/b)]]"
        },
        {
          "kind": "p",
          "text": "ステップ2: 代入します。[[A = \\arctan(3/4)]]"
        },
        {
          "kind": "p",
          "text": "ステップ3: 計算します。[[A = \\arctan(0.75)]]"
        },
        {
          "kind": "p",
          "text": "答え: [[A \\approx 36.87^\\circ]]"
        },
        {
          "kind": "p",
          "text": "これは3-4-5三角形ですが、斜辺は必要ありません。2つの脚だけで角は決まります。ここでアークタンジェントが効率的な選択である理由です。"
        },
        {
          "kind": "h3",
          "text": "例題2: 対辺と隣辺が等しい場合"
        },
        {
          "kind": "p",
          "text": "[[a = 5]] メートル、[[b = 5]] メートルが与えられたとき:"
        },
        {
          "kind": "p",
          "text": "[[[A = \\arctan\\left(\\frac{5}{5}\\right) = \\arctan(1) = 45^\\circ]]]"
        },
        {
          "kind": "p",
          "text": "等しい脚は二等辺直角三角形を作るので、2つの鋭角はどちらもちょうど45度になります。"
        },
        {
          "kind": "h3",
          "text": "例題3: 45度未満の角"
        },
        {
          "kind": "p",
          "text": "[[a = 3]] メートル、[[b = 6]] メートルが与えられたとき:"
        },
        {
          "kind": "p",
          "text": "[[[A = \\arctan\\left(\\frac{3}{6}\\right) \\approx 26.57^\\circ]]]"
        },
        {
          "kind": "p",
          "text": "対辺が隣辺より短いため、この角は45度未満です。長い水平距離に対する短い立ち上がりは、浅い角を作ります。"
        },
        {
          "kind": "h3",
          "text": "例題4: 45度を超える角"
        },
        {
          "kind": "p",
          "text": "[[a = 8]] フィート、[[b = 4]] フィートが与えられたとき:"
        },
        {
          "kind": "p",
          "text": "[[[A = \\arctan\\left(\\frac{8}{4}\\right) \\approx 63.43^\\circ]]]"
        },
        {
          "kind": "p",
          "text": "対辺が隣辺より長いため、この角は45度を超えます。短い水平距離に対する高い立ち上がりは、急な角を作ります。"
        }
      ]
    },
    "arctan-applications": {
      "h2": "タンジェントで角を計算する実生活の例題",
      "blocks": [
        {
          "kind": "p",
          "text": "完全に解いた実用的な例題を12題示します。各例題では、状況を説明し、三角形を特定し、測定値を述べ、正しい辺の名前を付け、公式を書いて評価し、結果を実用上の限界とともに解釈します。"
        },
        {
          "kind": "h3",
          "text": "例題5: 屋根勾配の角度を計算する"
        },
        {
          "kind": "p",
          "text": "屋根が水平距離12フィートに対して4フィート垂直に立ち上がっています。屋根の斜面と水平面の間の角を求めます。"
        },
        {
          "kind": "p",
          "text": "既知: 対辺(立ち上がり) [[a = 4]] フィート、隣辺(水平距離) [[b = 12]] フィート。2つの垂直な測定値が既知で、斜面の長さが不要なため、アークタンジェントが適しています。"
        },
        {
          "kind": "p",
          "text": "[[[A = \\arctan\\left(\\frac{4}{12}\\right) \\approx 18.43^\\circ]]]"
        },
        {
          "kind": "p",
          "text": "屋根は水平面に対して約18.43度で立ち上がっています。4:12という屋根勾配の表記は比であり、4度の角ではないことに注意してください。この幾何学的な結果は、構造の評価ではありません。"
        },
        {
          "kind": "h3",
          "text": "例題6: はしごの角度を求める"
        },
        {
          "kind": "p",
          "text": "はしごが壁に沿って4.5メートルまで届き、その足元は壁から2メートル離れています。はしごと地面の間の角を求めます。"
        },
        {
          "kind": "p",
          "text": "既知: 対辺(高さ) [[a = 4.5]] メートル、隣辺(地面距離) [[b = 2]] メートル。"
        },
        {
          "kind": "p",
          "text": "[[[A = \\arctan\\left(\\frac{4.5}{2}\\right) \\approx 66.04^\\circ]]]"
        },
        {
          "kind": "p",
          "text": "壁の高さは地面の角に対する対辺であり、地面距離は隣辺です。この計算された角度だけでは、はしごが安全に設置されているかは判断できません。"
        },
        {
          "kind": "h3",
          "text": "例題7: スロープの傾斜角を計算する"
        },
        {
          "kind": "p",
          "text": "スロープが9メートルの水平距離に対して0.75メートル上昇しています。傾斜角を求めます。"
        },
        {
          "kind": "p",
          "text": "[[[A = \\arctan\\left(\\frac{0.75}{9}\\right) \\approx 4.76^\\circ]]]"
        },
        {
          "kind": "p",
          "text": "垂直の立ち上がりと水平距離が、タンジェントの正しい入力です。この角度だけでは、バリアフリー基準や建築基準への適合は確認できません。"
        },
        {
          "kind": "h3",
          "text": "例題8: 木への仰角を見積もる"
        },
        {
          "kind": "p",
          "text": "人が木から20メートル離れて立っています。木の頂上は観測レベルから12メートル上にあります。仰角を計算します。"
        },
        {
          "kind": "p",
          "text": "[[[A = \\arctan\\left(\\frac{12}{20}\\right) \\approx 30.96^\\circ]]]"
        },
        {
          "kind": "p",
          "text": "垂直の高さの差が対辺、水平距離が隣辺です。結果は、観測点から水平面より上の角度であり、木の全高ではありません。"
        },
        {
          "kind": "h3",
          "text": "例題9: 測量の標高測定"
        },
        {
          "kind": "p",
          "text": "簡略化した測量スケッチでは、垂直の差が7メートル、水平距離が12メートルと記録されています。仰角を計算します。"
        },
        {
          "kind": "p",
          "text": "[[[A = \\arctan\\left(\\frac{7}{12}\\right) \\approx 30.26^\\circ]]]"
        },
        {
          "kind": "p",
          "text": "標高差と水平距離が対辺と隣辺を成します。実際の測量では、この簡略モデルを超えて、器械高の補正や地形の調整が必要になる場合があります。"
        },
        {
          "kind": "h3",
          "text": "例題10: 機械の支持具の角度を求める"
        },
        {
          "kind": "p",
          "text": "機械の支持具の垂直の立ち上がりが1.2メートル、水平距離が3.5メートルです。水平面に対する角度を計算します。"
        },
        {
          "kind": "p",
          "text": "[[[A = \\arctan\\left(\\frac{1.2}{3.5}\\right) \\approx 18.92^\\circ]]]"
        },
        {
          "kind": "p",
          "text": "アークタンジェントは、2つの垂直な測定値を、対角線の長さを必要とせずに角度に変換します。この計算では、支持具の強度や適合性は判断できません。"
        },
        {
          "kind": "h3",
          "text": "例題11: 階段の勾配を計算する"
        },
        {
          "kind": "p",
          "text": "簡略化した階段が4メートルの水平距離に対して2.8メートル上昇しています。全体の傾斜角を計算します。"
        },
        {
          "kind": "p",
          "text": "[[[A = \\arctan\\left(\\frac{2.8}{4}\\right) \\approx 34.99^\\circ]]]"
        },
        {
          "kind": "p",
          "text": "全体の垂直の立ち上がりと水平距離が、全体の角度を決めます。この簡略計算では、建築基準への適合や個々の段の寸法は検証できません。"
        },
        {
          "kind": "h3",
          "text": "例題12: 支線の角度を求める"
        },
        {
          "kind": "p",
          "text": "支線が垂直方向に10メートル、水平方向に15メートル離れた2点をつないでいます。支線と水平面の間の角を求めます。"
        },
        {
          "kind": "p",
          "text": "[[[A = \\arctan\\left(\\frac{10}{15}\\right) \\approx 33.69^\\circ]]]"
        },
        {
          "kind": "p",
          "text": "垂直方向の隔たりは角に対する対辺、水平方向の投影は隣辺です。角度の計算では、支線の張力、アンカーの強度、構造の安全性は判断できません。"
        },
        {
          "kind": "h3",
          "text": "例題13: 道路勾配の角度を計算する"
        },
        {
          "kind": "p",
          "text": "道路が100メートルの水平距離に対して5メートル上昇しています。道路の傾斜角を求めます。"
        },
        {
          "kind": "p",
          "text": "[[[A = \\arctan\\left(\\frac{5}{100}\\right) \\approx 2.86^\\circ]]]"
        },
        {
          "kind": "p",
          "text": "パーセント勾配は [[(5/100) \\times 100 = 5\\%]] です。5%の勾配は5度の角ではありません。角はその比のアークタンジェントで、約2.86度です。"
        },
        {
          "kind": "h3",
          "text": "例題14: クレーンのブームの角度を求める"
        },
        {
          "kind": "p",
          "text": "簡略化したブームの垂直の立ち上がりが8メートル、水平投影が6メートルです。水平面に対する角度を求めます。"
        },
        {
          "kind": "p",
          "text": "[[[A = \\arctan\\left(\\frac{8}{6}\\right) \\approx 53.13^\\circ]]]"
        },
        {
          "kind": "p",
          "text": "垂直投影は対辺、水平投影は隣辺です。これではクレーンの能力や作業の安全性は判断できません。"
        },
        {
          "kind": "h3",
          "text": "例題15: ハイキングコースの傾斜を計算する"
        },
        {
          "kind": "p",
          "text": "ハイキングコースのまっすぐな区間が、150メートルの水平距離に対して80メートル上昇しています。傾斜角を求めます。"
        },
        {
          "kind": "p",
          "text": "[[[A = \\arctan\\left(\\frac{80}{150}\\right) \\approx 28.07^\\circ]]]"
        },
        {
          "kind": "p",
          "text": "計算では、垂直の標高差を対辺、水平距離を隣辺として使います。実際の登山道は1つのまっすぐな傾斜ではなく、勾配が変化します。"
        },
        {
          "kind": "h3",
          "text": "例題16: 日よけの支持具の角度を求める"
        },
        {
          "kind": "p",
          "text": "日よけの支持具の垂直の立ち上がりが1.2メートル、水平距離が2.4メートルです。水平面に対する角度を計算します。"
        },
        {
          "kind": "p",
          "text": "[[[A = \\arctan\\left(\\frac{1.2}{2.4}\\right) \\approx 26.57^\\circ]]]"
        },
        {
          "kind": "p",
          "text": "比が、斜めの支持具の長さを必要とせずに角度を決めます。結果から、支持具の構造上の適合性は判断できません。"
        },
        {
          "kind": "h3",
          "text": "実用例の比較"
        }
      ],
      "table": {
        "headers": [
          "状況",
          "対辺",
          "隣辺",
          "公式",
          "角度",
          "解釈"
        ],
        "rows": [
          ["屋根勾配", "4 フィート", "12 フィート", "arctan(4/12)", "18.43°", "中程度の屋根の傾斜"],
          ["はしご", "4.5 メートル", "2 メートル", "arctan(4.5/2)", "66.04°", "急なはしごの設置"],
          ["スロープ", "0.75 メートル", "9 メートル", "arctan(0.75/9)", "4.76°", "緩やかな傾斜"],
          ["木の仰角", "12 メートル", "20 メートル", "arctan(12/20)", "30.96°", "樹頂への視線の角度"],
          ["測量", "7 メートル", "12 メートル", "arctan(7/12)", "30.26°", "仰角"],
          ["支持具", "1.2 メートル", "3.5 メートル", "arctan(1.2/3.5)", "18.92°", "浅い支持具の角度"],
          ["階段", "2.8 メートル", "4 メートル", "arctan(2.8/4)", "34.99°", "典型的な階段の傾斜"],
          ["支線", "10 メートル", "15 メートル", "arctan(10/15)", "33.69°", "水平面に対する支線の角度"],
          ["道路勾配", "5 メートル", "100 メートル", "arctan(5/100)", "2.86°", "5%勾配の道路"],
          ["クレーンのブーム", "8 メートル", "6 メートル", "arctan(8/6)", "53.13°", "上げたブームの位置"],
          ["ハイキングコース", "80 メートル", "150 メートル", "arctan(80/150)", "28.07°", "急な登山道の区間"],
          ["日よけの支持具", "1.2 メートル", "2.4 メートル", "arctan(1.2/2.4)", "26.57°", "支持具の対角線の角度"]
        ]
      },
      "imgAlt": "屋根勾配、はしごの角度、スロープの傾斜角、木の仰角という4つの実用的なアークタンジェントの例",
      "figcaption": "4つの実用的な計算: 屋根18.43°、はしご66.04°、スロープ4.76°、木の仰角30.96°。"
    },
    "arctan-ratio": {
      "h2": "対辺と隣辺の比が角に与える影響",
      "blocks": [
        {
          "kind": "p",
          "text": "比 [[a/b]] が角 [[A]] を決めます。小さい比は小さい鋭角を生み、等しい辺はちょうど45度を生み、対辺が隣辺より長い場合は45度を超える角が生まれます。1を超える比はタンジェントではまったく有効であり、これがサインやコサインとの違いです。相似な三角形は同じ角を共有し、両方の脚に同じ正の数を掛けても角度は変わりません。比が極端に大きくなると、角は90度に近づきますが、有限の正の辺の長さでは90度には達しません。"
        },
        {
          "kind": "p",
          "text": "パターンは明確です。三角形の形を決めるのは辺の比であり、全体の大きさではありません。両方の脚を2倍にしても、角度はまったく同じままです。"
        }
      ],
      "table": {
        "headers": [
          "対辺a",
          "隣辺b",
          "比a/b",
          "角A"
        ],
        "rows": [
          ["1", "4", "0.25", "約14.04°"],
          ["1", "2", "0.5", "約26.57°"],
          ["1", "1", "1", "45°"],
          ["2", "1", "2", "約63.43°"],
          ["4", "1", "4", "約75.96°"]
        ]
      },
      "imgAlt": "タンジェントの比が14度から76度まで角を変化させる様子を示す5つの三角形",
      "figcaption": "比0.25は14.04°、0.5は26.57°、1は45°、2は63.43°、4は75.96°になります。"
    },
    "arctan-units": {
      "h2": "角度の単位と測定精度を理解する",
      "blocks": [
        {
          "kind": "p",
          "text": "この計算機は度を返します。度は1回転の1/360です。ラジアンは別の角度の単位で、1回転が [[2\\pi]] ラジアンになるように定義されています。アークタンジェントは計算機によって度とラジアンのどちらも返せますが、このツールは度で報告します。"
        },
        {
          "kind": "p",
          "text": "比 [[a/b]] 自体に単位はなく、2つの辺は互換性のある単位でなければなりません。両方の測定値をメートルからセンチメートルに変換すると、分子と分母に100が掛かり、比は変わりません。"
        },
        {
          "kind": "p",
          "text": "ラジアンを度に変換するには: [[\\text{Degrees} = \\text{Radians} \\times 180^\\circ / \\pi]]"
        },
        {
          "kind": "h3",
          "text": "例: 測定単位は角度を変えるか?"
        },
        {
          "kind": "p",
          "text": "[[a = 3]] メートル、[[b = 4]] メートルとします。センチメートルに直すと [[a = 300]] センチメートル、[[b = 400]] センチメートルになります。どちらも比は0.75で、同じ36.87度の角になります。途中の計算では十分な精度を保ち、元の測定値の正確さに合わせて最終的な角度を丸めてください。"
        }
      ]
    },
    "arctan-mistakes": {
      "h2": "タンジェントで角を計算するときのよくある間違い",
      "blocks": [],
      "list": [
        "<strong>隣辺の代わりに斜辺を使う。</strong>公式に必要なのは角Aに接する脚であり、最も長い辺ではありません。確認: 分母は2つの脚のうちの1つになっていますか?",
        "<strong>対辺と隣辺を取り違える。</strong>これは余角を求めることになります。約37度を期待して約53度が出た場合、脚が入れ替わっています。",
        "<strong>比をb/aに反転させる。</strong>[[\\arctan(b/a)]] は [[A]] ではなく [[B]] を与えます。3-4三角形では、arctan(4/3)は53.13度で、もう一方の鋭角です。",
        "<strong>アークタンジェントの代わりに通常のタンジェントを使う。</strong>arctan(0.75)の代わりにtan(0.75)と打つと、まったく別の問いに答えることになります。",
        "<strong>アークタンジェントをタンジェントの逆数と混同する。</strong>[[\\tan^{-1}(x)]] は [[1/\\tan(x)]] ではありません。逆数はコタンジェントです。",
        "<strong>タンジェントの比は0から1の間でなければならないと思い込む。</strong>1を超えてもかまいません。63.43度の角に対する比2はまったく有効です。",
        "<strong>ゼロや負の辺の長さを入力する。</strong>辺の長さは正でなければなりません。ゼロや負の入力には、ここでは幾何学的な意味がありません。",
        "<strong>互換性のない測定単位を混ぜる。</strong>一方の脚をメートル、もう一方をフィートで測ると比が壊れます。先に変換してください。",
        "<strong>比を早すぎる段階で丸める。</strong>アークタンジェントを適用する前に0.6667を0.67に丸めると、答えがずれます。最終ステップまで完全な精度を保ってください。",
        "<strong>度が期待されるところでラジアンを報告する。</strong>Arctan(1)は度では45度ですが、ラジアンでは0.785です。計算機のモードを確認してください。",
        "<strong>角Aを余角Bと混同する。</strong>[[A + B = 90^\\circ]] を忘れないでください。答えが「もう一方の」角に見える場合、比が反転しています。",
        "<strong>パーセント勾配を度単位の角として扱う。</strong>5%の勾配はarctan(0.05)で約2.86度であり、5度ではありません。",
        "<strong>垂直の立ち上がりを斜面距離と混同する。</strong>対辺は純粋な垂直成分であり、斜面に沿った長さではありません。",
        "<strong>計算された角が構造物の安全を証明すると思い込む。</strong>幾何学は形だけを表します。はしごの安全、屋根の荷重、スロープの適合には、別途工学的な確認が必要です。"
      ]
    },
    "arctan-verify": {
      "h2": "計算された角度が正しいか確認する方法",
      "blocks": [
        {
          "kind": "p",
          "text": "つぶれていない直角三角形に対する有効な入力: 対辺は正でなければならず、隣辺は正でなければならず、どちらもゼロにはできず、両方とも互換性のある単位でなければならず、結果の角は0度から90度の間に厳密に入らなければなりません。サインやコサインとは異なり、タンジェントの比は1未満に制限されないので、対辺が隣辺より長くてもかまいません。"
        },
        {
          "kind": "h3",
          "text": "方法1: タンジェントの比を確認する"
        },
        {
          "kind": "p",
          "text": "可能であれば丸めていない角度を使って [[\\tan(A) \\approx a/b]] を検証します。答えのtanが入力の比を再現すれば、答えは一貫しています。"
        },
        {
          "kind": "h3",
          "text": "方法2: 余角を確認する"
        },
        {
          "kind": "p",
          "text": "[[B = 90^\\circ - A]] を計算します。直角三角形の2つの鋭角の合計は90度にならなければならないので、これはすべての結果に対する素早い妥当性チェックです。"
        },
        {
          "kind": "h3",
          "text": "方法3: 三平方の定理を使う"
        },
        {
          "kind": "p",
          "text": "斜辺 [[c = \\sqrt{a^2 + b^2}]] を計算し、[[a^2 + b^2 = c^2]] を確認します。"
        },
        {
          "kind": "p",
          "text": "[[a = 3]]、[[b = 4]] での完全な確認: [[c = \\sqrt{9 + 16} = 5]]。角 [[A = \\arctan(3/4) \\approx 36.87^\\circ]] とその余角 [[B \\approx 53.13^\\circ]] の合計は90度です。小さな差は、表示された角度を丸めたことによるものです。"
        }
      ]
    },
    "arctan-choose": {
      "h2": "適切な直角三角形の計算機を選ぶ",
      "blocks": [
        {
          "kind": "p",
          "text": "実際に手元にある測定値にツールを合わせてください:"
        },
        {
          "kind": "p",
          "text": "3つの逆関数はすべて、同じ三角形に対して一致します。3-4-5三角形では、arctan(3/4)、arcsin(3/5)、arccos(4/5)はすべて36.87度を与えます。2つの方法が一致しなければ、辺のラベル付けが間違っています。"
        }
      ],
      "list": [
        "<strong>タンジェントから角度を求める計算機</strong>(このページ): 対辺 [[a]] と隣辺 [[b]] が既知で、角 [[A]] を求めます。両方の脚を直接測定した場合に最適です。",
        "<a href=\"/right-triangle-angle-from-sine-calculator/\" class=\"text-primary hover:underline\"><strong>サインから角度を求める計算機</strong></a>: 対辺と斜辺が既知。斜面距離を測定した高さの問題に最適です。",
        "<a href=\"/right-triangle-angle-from-cosine-calculator/\" class=\"text-primary hover:underline\"><strong>コサインから角度を求める計算機</strong></a>: 隣辺と斜辺が既知。斜辺を斜面に沿って直接測定した場合に最適です。",
        "<a href=\"/right-triangle-angle-calculator/\" class=\"text-primary hover:underline\"><strong>角度の計算機</strong></a>: どの辺がわかっているか迷ったときに、適切な方法を選ぶ手助けをします。",
        "<a href=\"/right-triangle-missing-angle-calculator/\" class=\"text-primary hover:underline\"><strong>不足している角の計算機</strong></a>: 1つの鋭角がすでにわかっているときに余角を求めます。",
        "<a href=\"/right-triangle-side-calculator/\" class=\"text-primary hover:underline\"><strong>辺の計算機</strong></a>: 角度ではなく、不足している辺の長さを求めます。"
      ]
    },
    "arctan-related": {
      "h2": "関連する三角形の計算機を見る",
      "blocks": [
        {
          "kind": "p",
          "text": "隣接する計算をカバーするツールです:"
        }
      ]
    },
    "arctan-conclusion": {
      "h2": "自信を持ってタンジェントからあらゆる角を求める",
      "blocks": [
        {
          "kind": "p",
          "text": "アークタンジェントの公式は、2つの単純な脚の測定値を精密な角度に変えます。対辺と隣辺を測り、割り算し、アークタンジェントを適用し、余角または三平方の定理で検証します。課題が屋根勾配でも、スロープの傾斜でも、はしごの設置でも、方法は同じです。比を角に対応させ、あとは幾何学に任せましょう。"
        }
      ]
    }
  },
  "faqs": [
    {
      "question": "公式 A = arctan(a / b) は何を計算しますか?",
      "answer": "直角三角形の2つの脚の長さから鋭角Aを計算します。対辺aを隣辺bで割り、その比にアークタンジェントを適用します。結果は、タンジェントがa / bに等しくなる角度を度単位で表したものです。"
    },
    {
      "question": "アークタンジェントで角を求めるにはどうすればよいですか?",
      "answer": "求めたい角に対する対辺と隣辺を測り、対辺を隣辺で割ってタンジェントの比を求め、アークタンジェントを適用します。たとえば、arctan(3 / 4)は約36.87度です。"
    },
    {
      "question": "なぜ対辺と隣辺が必要なのですか?",
      "answer": "タンジェントは対辺÷隣辺と定義されるため、この2つの辺がまさに公式に必要なものです。これらは直角三角形の2つの脚であり、一緒に形を完全に決定するので、角度も決まります。"
    },
    {
      "question": "斜辺がわからなくても角を計算できますか?",
      "answer": "はい。それがこの方法の主な利点です。斜辺はタンジェントの公式に登場しないので、最も長い辺の測定を完全に省略しても、正確な角が得られます。"
    },
    {
      "question": "タンジェントとアークタンジェントの違いは何ですか?",
      "answer": "タンジェントは角度を受け取って比を返します。たとえばtan(45度) = 1です。アークタンジェントはこれを逆にします。比を受け取って角度を返すので、たとえばarctan(1) = 45度です。2つの関数は互いを打ち消し合います。"
    },
    {
      "question": "アークタンジェントはtanの逆関数と同じですか?",
      "answer": "はい。Arctan(x)とtanの逆関数は、同じ関数の2つの名前です。どちらも逆数1 / tan(x)を意味しません。タンジェントの逆数はコタンジェントという別の関数です。"
    },
    {
      "question": "タンジェントの比が1より大きくなることはありますか?",
      "answer": "はい、これは正常です。対辺が隣辺より長いと、比は1を超え、角は45度より大きくなります。サインやコサインの比とは異なり、タンジェントに上限はありません。"
    },
    {
      "question": "対辺と隣辺が等しい場合はどうなりますか?",
      "answer": "比は1になり、arctan(1)はちょうど45度です。等しい脚は二等辺直角三角形を成すので、2つの鋭角はどちらも45度になります。"
    },
    {
      "question": "辺の比は角にどのように影響しますか?",
      "answer": "対辺÷隣辺の比が大きいほど、角も大きくなります。比0.25では約14.04度、比1では45度、比4では約75.96度です。対辺が隣辺に対して大きくなるにつれて、角は大きくなります。"
    },
    {
      "question": "計算した角度をどうやって検証できますか?",
      "answer": "3つの確認が有効です。tan(A)を計算してa / bに等しいことを確認します。余角B = 90からAを引いたものが妥当か確認します。または三平方の定理で斜辺を計算し、aの2乗とbの2乗の合計がcの2乗に等しいことを確認します。"
    },
    {
      "question": "この計算機は屋根勾配、スロープの傾斜、はしごの角度に使えますか?",
      "answer": "はい、これらは典型的な用途です。屋根の立ち上がり÷水平距離、スロープの立ち上がり÷水平距離、はしごの高さ÷足元の距離は、いずれも対辺と隣辺を直接与えるので、まさにこの計算機が必要とするものです。"
    },
    {
      "question": "パーセント勾配と度単位の角の違いは何ですか?",
      "answer": "パーセント勾配は立ち上がり÷水平距離の比の100倍であり、角はその比のアークタンジェントです。5%の勾配は比0.05を意味し、角度は約2.86度であり、5度ではありません。"
    }
  ],
  "relatedHeading": "関連する三角形の計算機を見る",
  "relatedItems": [
    "直角三角形の角度計算機",
    "サインから角度を求める直角三角形の計算機",
    "コサインから角度を求める直角三角形の計算機",
    "不足している角を求める直角三角形の計算機",
    "タンジェント比の計算機",
    "タンジェントから辺を求める直角三角形の計算機",
    "直角三角形の辺の計算機",
    "特別な直角三角形の計算機"
  ]
},
  "ko": {
  "tocHeading": "이 가이드에서",
  "tocItems": {
    "arctan-intro": "탄젠트로 각도 구하기",
    "arctan-sides": "대변과 인접변 이해하기",
    "arctan-what": "직각삼각형의 탄젠트란?",
    "arctan-formula": "역탄젠트 공식의 원리",
    "arctan-howto": "계산기 사용법",
    "arctan-examples": "단계별 예제",
    "arctan-applications": "실생활 예제",
    "arctan-ratio": "비가 각도에 미치는 영향",
    "arctan-units": "각도 단위와 정밀도",
    "arctan-mistakes": "흔한 실수",
    "arctan-verify": "답 검증하기",
    "arctan-choose": "알맞은 계산기 고르기",
    "arctan-faq": "자주 묻는 질문",
    "arctan-related": "관련 계산기"
  },
  "sections": {
    "arctan-intro": {
      "h2": "탄젠트로 각도 구하기",
      "blocks": [
        {
          "kind": "p",
          "text": "직각삼각형 탄젠트 각도 계산기는 삼각형의 두 직각변, 즉 대변과 인접변의 길이를 알 때 예각을 구해주는 도구입니다. 대변을 인접변으로 나눈 뒤 그 비에 역탄젠트를 적용하면 됩니다. 결과는 도(°) 단위의 각도입니다."
        },
        {
          "kind": "p",
          "text": "휠체어 경사로를 떠올려 보세요. 얼마나 높이 올라가는지와 수평으로 얼마나 뻗어 있는지는 잴 수 있지만, 실제 경사면의 길이를 재기는 번거로울 수 있습니다. 이 두 측정값, 즉 수직 상승량과 수평 주행 거리가 바로 대변과 인접변입니다. 이 비 하나만 있으면 충분합니다. 역탄젠트는 이 비를 바로 경사각으로 바꿔주어, 경사면 길이를 잴 필요가 없습니다."
        },
        {
          "kind": "p",
          "text": "여기서 [[A]]는 구하려는 각도, [[a]]는 대변, [[b]]는 인접변입니다. 탄젠트는 둘을 [[\\tan(A) = a/b]]로 연결하고, 역탄젠트는 이 관계를 거꾸로 돌립니다. [[A = \\arctan(a/b)]]. 빗변은 공식에 전혀 등장하지 않으므로, 두 직각변이 실제로 가진 측정값일 때 이 방법이 가장 자연스럽습니다."
        }
      ]
    },
    "arctan-sides": {
      "h2": "대변과 인접변 이해하기",
      "blocks": [
        {
          "kind": "h3",
          "text": "직각삼각형이란?"
        },
        {
          "kind": "p",
          "text": "직각삼각형은 각도 하나가 정확히 90도인 삼각형입니다. 나머지 두 각은 예각으로, 각각 90도보다 작으며, 둘을 합하면 항상 90도가 됩니다. 삼각비(사인, 코사인, 탄젠트)가 성립하는 것은 바로 이 90도 조건 덕분입니다. 삼각비는 직각삼각형의 변들 사이에 고정된 관계를 정의합니다. 직각이 없으면 비 [[a/b]]는 하나의 일정한 각도에 대응하지 않습니다."
        },
        {
          "kind": "h3",
          "text": "대변(맞은편 변)이란?"
        },
        {
          "kind": "p",
          "text": "대변은 각도 [[A]] 맞은편에 바로 놓인 직각변으로, 그 각도에 절대 닿지 않습니다. 실제로는 수직 상승량을 나타내는 경우가 많습니다. 벽에 기댄 사다리가 올라간 높이, 지붕이 올라간 높이, 크레인 붐의 수직 성분 같은 것들입니다. \"대변\"이라는 명칭은 어떤 각도를 기준으로 삼느냐에 따라 달라집니다. 기준을 [[A]]에서 [[B]]로 바꾸면, 대변이던 변이 인접변이 됩니다."
        },
        {
          "kind": "h3",
          "text": "인접변(접한 변)이란?"
        },
        {
          "kind": "p",
          "text": "인접변은 각도 [[A]]에 닿아 있지만 빗변이 아닌 직각변입니다. 각도의 한 변을 이룹니다. 현장 측정에서는 수평 주행 거리를 나타내는 경우가 많습니다. 벽에서 사다리 밑단까지의 지면 거리, 지붕의 수평 폭, 경사로의 주행 거리 같은 것들입니다. 이는 서로 수직인 두 직각변 중 하나이며, 직각 맞은편의 변인 빗변과 혼동하면 안 됩니다."
        },
        {
          "kind": "h3",
          "text": "빗변이란?"
        },
        {
          "kind": "p",
          "text": "빗변은 [[c]]로 표기되며, 90도 각 맞은편에 있어 항상 삼각형에서 가장 긴 변입니다. 탄젠트 계산기는 이 길이를 필요로 하지 않습니다. 필요할 경우 피타고라스 정리로 두 직각변에서 구할 수 있습니다. [[c = \\sqrt{a^2 + b^2}]]. 하지만 각도 자체를 구하는 데 빗변은 그냥 건너뛸 수 있는 여분의 정보입니다."
        },
        {
          "kind": "h3",
          "text": "기준각이 중요한 이유"
        },
        {
          "kind": "p",
          "text": "대변과 인접변은 선택한 각도를 기준으로 정의됩니다. 같은 삼각형에서 기준을 [[A]]에서 [[B]]로 바꾸면 두 직각변의 역할이 바뀝니다. 대변이던 변이 인접변이 되고, 그 반대도 마찬가지입니다. 따라서 비를 [[a/b]]에서 [[b/a]]로 뒤집으면 [[A]]가 아니라 여각 [[B = 90^\\circ - A]]가 계산됩니다. 계산 내내 기준각을 고정하면 이런 혼동을 피할 수 있습니다."
        }
      ],
      "imgAlt": "아크탄젠트 공식에 대한 직각삼각형 해부도: 대변 a, 인접변 b, 빗변 c",
      "figcaption": "아크탄젠트용 해부도: a는 각도 A 맞은편에 있는 대변, b는 각도 A에 접한 인접변, c는 빗변입니다."
    },
    "arctan-what": {
      "h2": "직각삼각형에서 탄젠트란?",
      "blocks": [
        {
          "kind": "p",
          "text": "탄젠트는 직각삼각형의 두 직각변을 비교합니다. 각도 [[A]]에 대해 탄젠트는 대변을 인접변으로 나눈 값입니다."
        },
        {
          "kind": "p",
          "text": "[[[\\tan(A) = \\frac{a}{b}]]]"
        },
        {
          "kind": "p",
          "text": "여기서 [[\\tan(A)]]는 각도 [[A]]의 탄젠트, [[a]]는 대변, [[b]]는 인접변입니다. 탄젠트는 삼각형의 가파름을 나타냅니다. 인접변을 밑변으로 두고 삼각형을 놓았을 때 수직 변과 수평 변의 비입니다."
        },
        {
          "kind": "p",
          "text": "예를 들어 [[a = 3]]이고 [[b = 4]]일 때:"
        },
        {
          "kind": "p",
          "text": "[[[\\tan(A) = \\frac{3}{4} = 0.75]]]"
        },
        {
          "kind": "p",
          "text": "이 비에는 물리 단위가 없습니다. 미터를 미터로 나누면 단위가 소거되므로, 미터로 쟀든 피트로 쟀든 센티미터로 쟀든 비 0.75는 같은 순수한 수입니다."
        },
        {
          "kind": "h3",
          "text": "역탄젠트란?"
        },
        {
          "kind": "p",
          "text": "일반 탄젠트는 각도에서 시작해 비를 만듭니다. 역탄젠트는 비에서 시작해 각도를 돌려줍니다. [[\\tan(A) = 0.75]]라면, [[A = \\arctan(0.75) \\approx 36.87^\\circ]]입니다. 역탄젠트는 탄젠트 관계를 거꾸로 돌려, 변의 비에서 원래 각도를 복원합니다."
        },
        {
          "kind": "h3",
          "text": "아크탄젠트와 역탄젠트는 같은 말인가?"
        },
        {
          "kind": "p",
          "text": "네, 같습니다. [[\\arctan(x)]]와 [[\\tan^{-1}(x)]]는 같은 함수를 가리키는 두 가지 표기입니다. 윗첨자 [[-1]]은 역수 [[1/\\tan(x)]]를 뜻하지 않습니다. 탄젠트의 역수는 코탄젠트라는 별개의 함수입니다."
        },
        {
          "kind": "h3",
          "text": "SOH-CAH-TOA 이해하기"
        },
        {
          "kind": "p",
          "text": "SOH-CAH-TOA는 표준 암기법입니다. 사인 = 대변 / 빗변(Sine = Opposite / Hypotenuse), 코사인 = 인접변 / 빗변(Cosine = Adjacent / Hypotenuse), 탄젠트 = 대변 / 인접변(Tangent = Opposite / Adjacent). 여기서 TOA가 바로 이 계산기의 비를 가리킵니다. 알려진 측정값이 대변과 인접변이기 때문입니다."
        },
        {
          "kind": "h3",
          "text": "탄젠트에 빗변이 필요 없는 이유"
        },
        {
          "kind": "p",
          "text": "탄젠트는 서로 수직인 두 직각변을 직접 사용하므로 대각선 길이는 계산과 무관합니다. 상승량과 주행 거리만 알면 경사각이 확정됩니다. 두 직각변을 같은 양수로 확대해도 비, 따라서 각도는 변하지 않습니다. 3-4 삼각형과 6-8 삼각형의 각도는 모두 36.87도로 같습니다."
        }
      ],
      "imgAlt": "아크탄젠트 단계 다이어그램: a를 b로 나누고 아크탄젠트를 적용해 각도 A 구하기",
      "figcaption": "아크탄젠트의 동작 원리: 대변을 인접변으로 나눈 뒤 역탄젠트를 적용해 각도를 복원합니다."
    },
    "arctan-formula": {
      "h2": "역탄젠트 공식의 원리",
      "blocks": [
        {
          "kind": "p",
          "text": "탄젠트 정의에서 출발합니다."
        },
        {
          "kind": "p",
          "text": "[[[\\tan(A) = \\frac{a}{b}]]]"
        },
        {
          "kind": "p",
          "text": "오른쪽의 비는 알려진 변 길이로 계산할 수 있습니다. 각도를 복원하려면 양변에 역탄젠트를 적용합니다."
        },
        {
          "kind": "p",
          "text": "[[[A = \\arctan\\left(\\frac{a}{b}\\right)]]]"
        },
        {
          "kind": "p",
          "text": "역탄젠트는 각도의 탄젠트인 비 전체에 적용됩니다. 분자와 분모로 쪼개서 적용할 수는 없습니다."
        },
        {
          "kind": "h3",
          "text": "계산 예제: 대변 3, 인접변 4"
        },
        {
          "kind": "p",
          "text": "[[a = 3]] cm, [[b = 4]] cm가 주어졌습니다."
        },
        {
          "kind": "p",
          "text": "1단계: 공식을 씁니다. [[A = \\arctan(a/b)]]"
        },
        {
          "kind": "p",
          "text": "2단계: 값을 대입합니다. [[A = \\arctan(3/4)]]"
        },
        {
          "kind": "p",
          "text": "3단계: 비를 계산합니다. [[3/4 = 0.75]]"
        },
        {
          "kind": "p",
          "text": "4단계: 역탄젠트를 적용합니다. [[A = \\arctan(0.75)]]"
        },
        {
          "kind": "p",
          "text": "최종 답: [[A \\approx 36.87^\\circ]]"
        },
        {
          "kind": "p",
          "text": "각도는 약 36.87도입니다. 소수점 둘째 자리까지 나타낸 것은 무리수 결과를 평범하게 반올림한 것이며, 정확한 닫힌 형태가 아닙니다."
        }
      ]
    },
    "arctan-howto": {
      "h2": "직각삼각형 탄젠트 각도 계산기 사용법",
      "blocks": [
        {
          "kind": "p",
          "text": "실제 화면에 맞게 다음 단계를 따르세요."
        }
      ],
      "steps": [
        "<strong>직각을 확인하세요.</strong> 삼각형에 90도 모서리가 있는지 확인한 뒤 삼각비를 사용하세요.",
        "<strong>구하려는 기준각 A를 정하세요.</strong>",
        "<strong>대변 a를 찾으세요.</strong> 각도 A 맞은편에 바로 있는 직각변입니다.",
        "<strong>인접변 b를 찾으세요.</strong> 각도 A에 닿아 있고 빗변이 아닌 직각변입니다.",
        "<strong>두 변의 길이를 같은 단위로 측정하거나 구하세요.</strong>",
        "<strong>대변 길이를 해당 입력 칸에 입력하세요.</strong>",
        "<strong>인접변 길이를 해당 입력 칸에 입력하세요.</strong>",
        "<strong>계산기가 제공하는 단위 선택기로 호환되는 단위를 선택하세요.</strong>",
        "<strong>두 변의 길이가 모두 양수인지, 0보다 큰지 확인하세요.</strong>",
        "<strong>각도 A 계산을 눌러</strong> 계산을 실행하세요.",
        "<strong>계산된 각도를</strong> 도 단위로 읽으세요.",
        "<strong>결과가 삼각형에 맞는지 확인하세요.</strong> 비가 1에 가까우면 각도도 45도에 가까워야 합니다.",
        "<strong>초기화를 눌러</strong> 입력을 지우고 새 계산을 시작하세요."
      ],
      "closingParagraphs": [
        {
          "kind": "p",
          "text": "각 단계가 중요한 이유는 변을 잘못 표시하는 것이 오답의 가장 흔한 원인이기 때문입니다. 어느 변이 대변인지, 어느 변이 인접변인지 잠깐 확인하는 것만으로 가장 잦은 실수를 막을 수 있습니다."
        }
      ]
    },
    "arctan-examples": {
      "h2": "탄젠트로 각도 구하기 단계별 예제",
      "blocks": [
        {
          "kind": "p",
          "text": "이 네 가지 예제로 실생활 응용에 들어가기 전에 핵심 기술을 다집니다. 모든 예제는 같은 순서로 진행됩니다. 공식 쓰기, 대입, 나누기, 아크탄젠트 적용."
        },
        {
          "kind": "h3",
          "text": "예제 1: 3-4-5 직각삼각형"
        },
        {
          "kind": "p",
          "text": "대변 [[a = 3]] cm, 인접변 [[b = 4]] cm가 주어졌을 때 각도 [[A]]를 구하세요."
        },
        {
          "kind": "p",
          "text": "1단계: 공식을 씁니다. [[A = \\arctan(a/b)]]"
        },
        {
          "kind": "p",
          "text": "2단계: 대입합니다. [[A = \\arctan(3/4)]]"
        },
        {
          "kind": "p",
          "text": "3단계: 계산합니다. [[A = \\arctan(0.75)]]"
        },
        {
          "kind": "p",
          "text": "최종 답: [[A \\approx 36.87^\\circ]]"
        },
        {
          "kind": "p",
          "text": "3-4-5 삼각형임에도 빗변은 필요 없습니다. 두 직각변만으로 각도가 정해지므로, 여기서는 아크탄젠트가 가장 효율적인 선택입니다."
        },
        {
          "kind": "h3",
          "text": "예제 2: 대변과 인접변이 같은 경우"
        },
        {
          "kind": "p",
          "text": "[[a = 5]] m, [[b = 5]] m가 주어졌습니다."
        },
        {
          "kind": "p",
          "text": "[[[A = \\arctan\\left(\\frac{5}{5}\\right) = \\arctan(1) = 45^\\circ]]]"
        },
        {
          "kind": "p",
          "text": "두 직각변이 같으면 이등변 직각삼각형이 되므로, 두 예각이 모두 정확히 45도가 됩니다."
        },
        {
          "kind": "h3",
          "text": "예제 3: 45도보다 작은 각도"
        },
        {
          "kind": "p",
          "text": "[[a = 3]] m, [[b = 6]] m가 주어졌습니다."
        },
        {
          "kind": "p",
          "text": "[[[A = \\arctan\\left(\\frac{3}{6}\\right) \\approx 26.57^\\circ]]]"
        },
        {
          "kind": "p",
          "text": "대변이 인접변보다 짧으므로 각도가 45도보다 작습니다. 짧은 상승을 긴 주행으로 나누면 완만한 각도가 나옵니다."
        },
        {
          "kind": "h3",
          "text": "예제 4: 45도보다 큰 각도"
        },
        {
          "kind": "p",
          "text": "[[a = 8]] ft, [[b = 4]] ft가 주어졌습니다."
        },
        {
          "kind": "p",
          "text": "[[[A = \\arctan\\left(\\frac{8}{4}\\right) \\approx 63.43^\\circ]]]"
        },
        {
          "kind": "p",
          "text": "대변이 인접변보다 길므로 각도가 45도를 넘습니다. 높은 상승을 짧은 주행으로 나누면 가파른 각도가 나옵니다."
        }
      ]
    },
    "arctan-applications": {
      "h2": "탄젠트로 각도 계산하는 실생활 예제",
      "blocks": [
        {
          "kind": "p",
          "text": "완전히 풀이된 실용 예제 12종입니다. 각 예제마다 상황을 설명하고, 삼각형을 확인하고, 측정값을 밝히고, 올바른 변 이름을 정한 뒤, 공식을 쓰고 계산하고, 실제 한계와 함께 결과를 해석합니다."
        },
        {
          "kind": "h3",
          "text": "예제 5: 지붕 경사각 계산하기"
        },
        {
          "kind": "p",
          "text": "지붕이 수평 주행 12 ft에 대해 수직으로 4 ft 상승합니다. 지붕 경사면과 수평선이 이루는 각도를 구하세요."
        },
        {
          "kind": "p",
          "text": "알려진 값: 대변 상승 [[a = 4]] ft, 인접변 주행 [[b = 12]] ft. 수직과 수평이라는 두 직교 측정값을 알고 경사면 길이는 필요 없으므로 역탄젠트가 적절합니다."
        },
        {
          "kind": "p",
          "text": "[[[A = \\arctan\\left(\\frac{4}{12}\\right) \\approx 18.43^\\circ]]]"
        },
        {
          "kind": "p",
          "text": "지붕은 수평선 위로 약 18.43도 상승합니다. 4:12로 표시되는 지붕 경사는 비이지 4도짜리 각도가 아닙니다. 이 기하학적 결과는 구조적 평가가 아닙니다."
        },
        {
          "kind": "h3",
          "text": "예제 6: 사다리 각도 구하기"
        },
        {
          "kind": "p",
          "text": "사다리가 벽을 따라 4.5 m 올라가고, 밑단은 벽에서 2 m 떨어져 있습니다. 사다리와 지면 사이의 각도를 구하세요."
        },
        {
          "kind": "p",
          "text": "알려진 값: 대변 높이 [[a = 4.5]] m, 인접변 지면 거리 [[b = 2]] m."
        },
        {
          "kind": "p",
          "text": "[[[A = \\arctan\\left(\\frac{4.5}{2}\\right) \\approx 66.04^\\circ]]]"
        },
        {
          "kind": "p",
          "text": "벽 높이는 지면각의 대변이고, 지면 거리는 인접변입니다. 계산된 각도만으로는 사다리가 안전하게 놓였는지 알 수 없습니다."
        },
        {
          "kind": "h3",
          "text": "예제 7: 경사로 경사각 계산하기"
        },
        {
          "kind": "p",
          "text": "경사로가 수평 주행 9 m에 대해 0.75 m 상승합니다. 경사각을 구하세요."
        },
        {
          "kind": "p",
          "text": "[[[A = \\arctan\\left(\\frac{0.75}{9}\\right) \\approx 4.76^\\circ]]]"
        },
        {
          "kind": "p",
          "text": "수직 상승과 수평 주행이 바로 탄젠트의 입력값입니다. 이 각도만으로 접근성이나 건축 기준 준수 여부를 확인할 수는 없습니다."
        },
        {
          "kind": "h3",
          "text": "예제 8: 나무까지의 고도각 추정하기"
        },
        {
          "kind": "p",
          "text": "사람이 나무에서 20 m 떨어져 서 있습니다. 나무 꼭대기는 관측 높이보다 12 m 위에 있습니다. 고도각을 계산하세요."
        },
        {
          "kind": "p",
          "text": "[[[A = \\arctan\\left(\\frac{12}{20}\\right) \\approx 30.96^\\circ]]]"
        },
        {
          "kind": "p",
          "text": "수직 높이 차이가 대변이고 수평 거리가 인접변입니다. 결과는 관측 지점에서 수평선 위로 잰 각도이며, 나무 전체 높이가 아닙니다."
        },
        {
          "kind": "h3",
          "text": "예제 9: 측량 고도 측정"
        },
        {
          "kind": "p",
          "text": "간소화한 측량 스케치에 수직 차이 7 m, 수평 거리 12 m가 기록되어 있습니다. 고도각을 계산하세요."
        },
        {
          "kind": "p",
          "text": "[[[A = \\arctan\\left(\\frac{7}{12}\\right) \\approx 30.26^\\circ]]]"
        },
        {
          "kind": "p",
          "text": "고도 차이와 수평 거리가 대변과 인접변을 이룹니다. 실제 측량에서는 이 간소 모델을 넘어 기기 높이 보정과 지형 조정이 필요할 수 있습니다."
        },
        {
          "kind": "h3",
          "text": "예제 10: 기계 지지대 각도 구하기"
        },
        {
          "kind": "p",
          "text": "기계 지지대의 수직 상승이 1.2 m, 수평 주행이 3.5 m입니다. 수평선 기준 각도를 계산하세요."
        },
        {
          "kind": "p",
          "text": "[[[A = \\arctan\\left(\\frac{1.2}{3.5}\\right) \\approx 18.92^\\circ]]]"
        },
        {
          "kind": "p",
          "text": "역탄젠트는 두 직교 측정값을 대각선 길이 없이 각도로 바꿔줍니다. 이 계산으로 지지대의 강도나 적합성을 판단할 수는 없습니다."
        },
        {
          "kind": "h3",
          "text": "예제 11: 계단 경사 계산하기"
        },
        {
          "kind": "p",
          "text": "간소화한 계단이 수평 주행 4 m에 대해 2.8 m 상승합니다. 전체 경사각을 계산하세요."
        },
        {
          "kind": "p",
          "text": "[[[A = \\arctan\\left(\\frac{2.8}{4}\\right) \\approx 34.99^\\circ]]]"
        },
        {
          "kind": "p",
          "text": "전체 수직 상승과 수평 주행으로 전체 각도가 정해집니다. 이 간소 계산으로 건축 기준 준수나 개별 계단 치수를 검증할 수는 없습니다."
        },
        {
          "kind": "h3",
          "text": "예제 12: 지지 케이블 각도 구하기"
        },
        {
          "kind": "p",
          "text": "지지 케이블이 수직 분리 10 m, 수평 분리 15 m인 두 지점을 연결합니다. 케이블과 수평선이 이루는 각도를 구하세요."
        },
        {
          "kind": "p",
          "text": "[[[A = \\arctan\\left(\\frac{10}{15}\\right) \\approx 33.69^\\circ]]]"
        },
        {
          "kind": "p",
          "text": "수직 분리가 각도의 대변이고 수평 투영이 인접변입니다. 각도 계산으로 케이블 장력, 앵커 강도, 구조 안전성을 판단할 수는 없습니다."
        },
        {
          "kind": "h3",
          "text": "예제 13: 도로 경사각 계산하기"
        },
        {
          "kind": "p",
          "text": "도로가 수평 거리 100 m에 대해 5 m 상승합니다. 도로 경사각을 구하세요."
        },
        {
          "kind": "p",
          "text": "[[[A = \\arctan\\left(\\frac{5}{100}\\right) \\approx 2.86^\\circ]]]"
        },
        {
          "kind": "p",
          "text": "퍼센트 경사도는 [[(5/100) \\times 100 = 5\\%]]입니다. 5% 경사는 5도짜리 각도가 아닙니다. 각도는 비의 아크탄젠트로, 약 2.86도입니다."
        },
        {
          "kind": "h3",
          "text": "예제 14: 크레인 붐 각도 구하기"
        },
        {
          "kind": "p",
          "text": "간소화한 붐의 수직 상승이 8 m, 수평 투영이 6 m입니다. 수평선 기준 각도를 구하세요."
        },
        {
          "kind": "p",
          "text": "[[[A = \\arctan\\left(\\frac{8}{6}\\right) \\approx 53.13^\\circ]]]"
        },
        {
          "kind": "p",
          "text": "수직 투영이 대변이고 수평 투영이 인접변입니다. 이 계산으로 크레인 용량이나 작업 안전성을 판단할 수는 없습니다."
        },
        {
          "kind": "h3",
          "text": "예제 15: 등산로 경사 계산하기"
        },
        {
          "kind": "p",
          "text": "등산로의 곧은 구간이 수평 주행 150 m에 대해 80 m 상승합니다. 경사각을 구하세요."
        },
        {
          "kind": "p",
          "text": "[[[A = \\arctan\\left(\\frac{80}{150}\\right) \\approx 28.07^\\circ]]]"
        },
        {
          "kind": "p",
          "text": "수직 고도 상승을 대변, 수평 거리를 인접변으로 계산합니다. 실제 등산로는 하나의 곧은 경사가 아니라 구간마다 기울기가 다릅니다."
        },
        {
          "kind": "h3",
          "text": "예제 16: 어닝 지지대 각도 구하기"
        },
        {
          "kind": "p",
          "text": "어닝 지지대의 수직 상승이 1.2 m, 수평 주행이 2.4 m입니다. 수평선 기준 각도를 계산하세요."
        },
        {
          "kind": "p",
          "text": "[[[A = \\arctan\\left(\\frac{1.2}{2.4}\\right) \\approx 26.57^\\circ]]]"
        },
        {
          "kind": "p",
          "text": "비만으로 대각선 지지대 길이 없이 각도가 정해집니다. 결과로 지지대의 구조적 적합성을 판단할 수는 없습니다."
        },
        {
          "kind": "h3",
          "text": "실용 예제 비교"
        }
      ],
      "table": {
        "headers": [
          "상황",
          "대변",
          "인접변",
          "공식",
          "각도",
          "해석"
        ],
        "rows": [
          ["지붕 경사", "4 ft", "12 ft", "arctan(4/12)", "18.43°", "보통 수준의 지붕 경사"],
          ["사다리", "4.5 m", "2 m", "arctan(4.5/2)", "66.04°", "가파르게 세운 사다리"],
          ["경사로", "0.75 m", "9 m", "arctan(0.75/9)", "4.76°", "완만한 경사"],
          ["나무 고도각", "12 m", "20 m", "arctan(12/20)", "30.96°", "나무 꼭대기를 보는 각도"],
          ["측량", "7 m", "12 m", "arctan(7/12)", "30.26°", "고도각"],
          ["지지 브레이스", "1.2 m", "3.5 m", "arctan(1.2/3.5)", "18.92°", "완만한 브레이스 각도"],
          ["계단", "2.8 m", "4 m", "arctan(2.8/4)", "34.99°", "일반적인 계단 경사"],
          ["지지 케이블", "10 m", "15 m", "arctan(10/15)", "33.69°", "수평선 기준 케이블 각도"],
          ["도로 경사", "5 m", "100 m", "arctan(5/100)", "2.86°", "5% 경사 도로"],
          ["크레인 붐", "8 m", "6 m", "arctan(8/6)", "53.13°", "들어올린 붐 위치"],
          ["등산로", "80 m", "150 m", "arctan(80/150)", "28.07°", "가파른 등산로 구간"],
          ["어닝 지지대", "1.2 m", "2.4 m", "arctan(1.2/2.4)", "26.57°", "지지대 대각선 각도"]
        ]
      },
      "imgAlt": "아크탄젠트 실생활 예제 4종: 지붕 경사, 사다리, 경사로, 나무 고도각",
      "figcaption": "실용 계산 4종: 지붕 18.43°, 사다리 66.04°, 경사로 4.76°, 나무 고도각 30.96°."
    },
    "arctan-ratio": {
      "h2": "대변-인접변 비가 각도에 미치는 영향",
      "blocks": [
        {
          "kind": "p",
          "text": "비 [[a/b]]가 각도 [[A]]를 결정합니다. 작은 비는 작은 예각을 만들고, 두 변이 같으면 정확히 45도가 되며, 대변이 인접변보다 길면 각도가 45도를 넘습니다. 1보다 큰 비도 탄젠트에서는 완전히 유효하며, 이는 사인·코사인과 다른 점입니다. 비례하는 삼각형은 같은 각도를 공유하므로, 두 직각변을 같은 양수로 확대해도 각도는 변하지 않습니다. 비가 매우 커지면, 유한한 양의 변 길이에서는 도달하지 못하지만 각도는 90도에 가까워집니다."
        },
        {
          "kind": "p",
          "text": "패턴은 분명합니다. 변의 비가 삼각형의 모양을 정하고 전체 크기는 정하지 않습니다. 두 직각변을 모두 두 배로 해도 각도는 정확히 같습니다."
        }
      ],
      "table": {
        "headers": [
          "대변 a",
          "인접변 b",
          "비 a/b",
          "각도 A"
        ],
        "rows": [
          ["1", "4", "0.25", "약 14.04°"],
          ["1", "2", "0.5", "약 26.57°"],
          ["1", "1", "1", "45°"],
          ["2", "1", "2", "약 63.43°"],
          ["4", "1", "4", "약 75.96°"]
        ]
      },
      "imgAlt": "탄젠트 비에 따라 각도가 14도에서 76도까지 변하는 다섯 삼각형",
      "figcaption": "비 0.25는 14.04°, 0.5는 26.57°, 1은 45°, 2는 63.43°, 4는 75.96°."
    },
    "arctan-units": {
      "h2": "각도 단위와 측정 정밀도 이해하기",
      "blocks": [
        {
          "kind": "p",
          "text": "계산기는 도 단위로 결과를 냅니다. 도는 한 바퀴 회전의 1/360입니다. 라디안은 또 다른 각도 단위로, 한 바퀴가 [[2\\pi]] 라디안이 되도록 정의됩니다. 역탄젠트는 계산기에 따라 어느 단위로든 답을 낼 수 있지만, 이 도구는 도 단위로 보고합니다."
        },
        {
          "kind": "p",
          "text": "비 [[a/b]] 자체에는 단위가 없으며, 두 변은 호환되는 단위를 써야 합니다. 두 측정값을 미터에서 센티미터로 바꾸면 분자와 분모에 모두 100이 곱해지므로 비는 그대로입니다."
        },
        {
          "kind": "p",
          "text": "라디안을 도로 바꾸는 식: [[\\text{Degrees} = \\text{Radians} \\times 180^\\circ / \\pi]]"
        },
        {
          "kind": "h3",
          "text": "예제: 측정 단위가 각도를 바꾸는가?"
        },
        {
          "kind": "p",
          "text": "[[a = 3]] m, [[b = 4]] m를 예로 듭니다. 센티미터로는 [[a = 300]] cm, [[b = 400]] cm가 됩니다. 둘 다 비 0.75와 각도 36.87도를 똑같이 냅니다. 중간 단계에서는 충분한 정밀도를 유지하고, 최종 각도는 원래 측정값의 정확도에 맞춰 반올림하세요."
        }
      ]
    },
    "arctan-mistakes": {
      "h2": "탄젠트로 각도를 구할 때 흔한 실수",
      "blocks": [
        {
          "kind": "p",
          "text": "탄젠트 계산에서 가장 자주 나오는 열네 가지 실수입니다."
        }
      ],
      "steps": [
        "<strong>인접변 대신 빗변을 사용하기.</strong> 공식에 필요한 것은 각도 A에 닿은 직각변이지 가장 긴 변이 아닙니다. 확인하세요. 분모가 두 직각변 중 하나인가요?",
        "<strong>대변과 인접변을 뒤바꾸기.</strong> 이렇게 하면 여각이 계산됩니다. 약 37도를 예상했는데 약 53도가 나왔다면 두 변이 바뀐 것입니다.",
        "<strong>비를 b/a로 뒤집기.</strong> [[\\arctan(b/a)]]는 [[A]]가 아니라 [[B]]를 줍니다. 3-4 삼각형에서 arctan(4/3)은 53.13도, 즉 다른 예각입니다.",
        "<strong>역탄젠트 대신 일반 탄젠트 사용하기.</strong> arctan(0.75) 대신 tan(0.75)을 입력하면 완전히 다른 질문에 답하는 셈입니다.",
        "<strong>역탄젠트와 탄젠트의 역수 혼동하기.</strong> [[\\tan^{-1}(x)]]는 [[1/\\tan(x)]]가 아닙니다. 역수는 코탄젠트입니다.",
        "<strong>탄젠트 비가 0과 1 사이라고 가정하기.</strong> 1을 자유롭게 넘을 수 있습니다. 비 2에 각도 63.43도는 완전히 유효합니다.",
        "<strong>0이나 음수인 변 길이 입력하기.</strong> 변의 길이는 양수여야 합니다. 0이나 음수 입력은 여기서 기하학적 의미가 없습니다.",
        "<strong>호환되지 않는 측정 단위 섞기.</strong> 한 변은 미터, 다른 변은 피트로 쓰면 비가 망가집니다. 먼저 단위를 통일하세요.",
        "<strong>비를 너무 일찍 반올림하기.</strong> 아크탄젠트를 적용하기 전에 0.6667을 0.67로 반올림하면 답이 틀어집니다. 마지막 단계까지는 전체 정밀도를 유지하세요.",
        "<strong>도를 기대하면서 라디안으로 답하기.</strong> arctan(1)은 45도지만 0.785라디안입니다. 계산기 모드를 확인하세요.",
        "<strong>각도 A와 여각 B 혼동하기.</strong> [[A + B = 90^\\circ]]임을 기억하세요. 답이 \"다른 쪽\" 각도처럼 보이면 비가 뒤집힌 것입니다.",
        "<strong>퍼센트 경사를 도 단위 각도로 취급하기.</strong> 5% 경사는 arctan(0.05), 즉 약 2.86도이지 5도가 아닙니다.",
        "<strong>수직 상승과 경사 거리 혼동하기.</strong> 대변은 순수한 수직 성분이지 경사를 따라 잰 길이가 아닙니다.",
        "<strong>계산된 각도가 구조물의 안전을 증명한다고 가정하기.</strong> 기하학은 모양만 설명합니다. 사다리 안전, 지붕 하중, 경사로 기준 준수는 별도의 공학적 검토가 필요합니다."
      ]
    },
    "arctan-verify": {
      "h2": "계산한 각도가 유효한지 확인하는 방법",
      "blocks": [
        {
          "kind": "p",
          "text": "퇴화되지 않은 직각삼각형의 유효 입력 조건: 대변은 양수여야 하고, 인접변도 양수여야 하며, 어느 쪽도 0이 될 수 없고, 둘 다 호환되는 단위를 써야 하며, 결과 각도는 0도와 90도 사이에 엄격히 들어가야 합니다. 사인·코사인과 달리 탄젠트 비는 1 미만으로 제한되지 않으므로, 대변이 인접변보다 길어도 괜찮습니다."
        },
        {
          "kind": "h3",
          "text": "방법 1: 탄젠트 비 확인"
        },
        {
          "kind": "p",
          "text": "가능하면 반올림하지 않은 각도로 [[\\tan(A) \\approx a/b]]를 검증하세요. 답의 탄젠트가 입력 비를 재현하면 답이 일관됩니다."
        },
        {
          "kind": "h3",
          "text": "방법 2: 여각 확인"
        },
        {
          "kind": "p",
          "text": "[[B = 90^\\circ - A]]를 계산하세요. 직각삼각형의 두 예각은 합이 90도가 되어야 하므로, 이는 모든 결과에 대한 빠른 상식 검사입니다."
        },
        {
          "kind": "h3",
          "text": "방법 3: 피타고라스 정리 이용"
        },
        {
          "kind": "p",
          "text": "빗변 [[c = \\sqrt{a^2 + b^2}]]를 구한 뒤 [[a^2 + b^2 = c^2]]를 확인하세요."
        },
        {
          "kind": "p",
          "text": "[[a = 3]], [[b = 4]]로 전체 검증을 하면 [[c = \\sqrt{9 + 16} = 5]]입니다. 각도 [[A = \\arctan(3/4) \\approx 36.87^\\circ]]와 여각 [[B \\approx 53.13^\\circ]]의 합은 90도입니다. 작은 차이는 표시된 각도를 반올림했기 때문입니다."
        }
      ]
    },
    "arctan-choose": {
      "h2": "알맞은 직각삼각형 계산기 고르기",
      "blocks": [
        {
          "kind": "p",
          "text": "실제로 가진 측정값에 도구를 맞추세요."
        }
      ],
      "steps": [
        "<strong>탄젠트 각도 계산기</strong>(이 페이지): 대변 [[a]]와 인접변 [[b]]를 알 때 각도 [[A]]를 구합니다. 두 직각변을 직접 쟀을 때 가장 좋습니다.",
        "<a href=\"/right-triangle-angle-from-sine-calculator/\"><strong>사인 각도 계산기</strong></a>: 대변과 빗변을 알 때. 경사 길이를 재는 높이 문제에 가장 좋습니다.",
        "<a href=\"/right-triangle-angle-from-cosine-calculator/\"><strong>코사인 각도 계산기</strong></a>: 인접변과 빗변을 알 때. 경사를 따라 빗변을 직접 쟀을 때 가장 좋습니다.",
        "<a href=\"/right-triangle-angle-calculator/\"><strong>각도 계산기</strong></a>: 어떤 변을 가졌는지 확신이 없을 때 알맞은 방법을 고르는 데 도움을 줍니다.",
        "<a href=\"/right-triangle-missing-angle-calculator/\"><strong>부족 각도 계산기</strong></a>: 한 예각을 이미 알 때 여각을 구합니다.",
        "<a href=\"/right-triangle-side-calculator/\"><strong>변 계산기</strong></a>: 각도가 아니라 부족한 변의 길이를 구합니다."
      ],
      "closingParagraphs": [
        {
          "kind": "p",
          "text": "세 역함수는 같은 삼각형에서 일치합니다. 3-4-5 삼각형에서는 arctan(3/4), arcsin(3/5), arccos(4/5)가 모두 36.87도를 줍니다. 두 방법이 엇갈리면 변 이름이 잘못 붙은 것입니다."
        }
      ]
    },
    "arctan-conclusion": {
      "h2": "자신감 있게 탄젠트로 어떤 각도든 구하기",
      "blocks": [
        {
          "kind": "p",
          "text": "역탄젠트 공식은 두 직각변의 간단한 측정값을 정확한 각도로 바꿔줍니다. 대변과 인접변을 재고, 나누고, 아크탄젠트를 적용한 뒤, 여각이나 피타고라스 정리로 검증하세요. 지붕 경사든, 경사로 경사든, 사다리 배치든 방법은 같습니다. 비를 각도에 맞추고, 나머지는 기하학에 맡기세요."
        }
      ]
    }
  },
  "faqs": [
    {
      "question": "공식 A = arctan(a / b)는 무엇을 계산하나요?",
      "answer": "직각삼각형의 두 직각변 길이에서 예각 A를 계산합니다. 대변 a를 인접변 b로 나눈 뒤 그 비에 역탄젠트를 적용하면 됩니다. 결과는 탄젠트가 a / b인 각도의 도 값입니다."
    },
    {
      "question": "역탄젠트로 각도를 구하는 방법은?",
      "answer": "목표 각도 기준의 대변과 인접변을 재고, 대변을 인접변으로 나눠 탄젠트 비를 구한 뒤 아크탄젠트를 적용합니다. 예를 들어 arctan(3 / 4)은 약 36.87도입니다."
    },
    {
      "question": "왜 대변과 인접변이 필요한가요?",
      "answer": "탄젠트는 대변 나누기 인접변으로 정의되므로, 이 두 변이 공식에 필요한 정확한 값입니다. 두 변은 직각삼각형의 두 직각변이며, 함께 모양을 완전히 결정하고, 따라서 각도도 결정합니다."
    },
    {
      "question": "빗변을 몰라도 각도를 계산할 수 있나요?",
      "answer": "네. 이 방법이 가진 가장 큰 장점입니다. 빗변은 탄젠트 공식에 등장하지 않으므로, 가장 긴 변의 측정을 건너뛰고도 정확한 각도를 얻을 수 있습니다."
    },
    {
      "question": "탄젠트와 역탄젠트의 차이는?",
      "answer": "탄젠트는 각도를 받아 비를 돌려줍니다. 예를 들어 tan(45도) = 1입니다. 역탄젠트는 이를 거꾸로 돌립니다. 비를 받아 각도를 돌려주므로, arctan(1) = 45도입니다. 두 함수는 서로를 되돌립니다."
    },
    {
      "question": "아크탄젠트와 탄젠트 역함수는 같은가요?",
      "answer": "네. arctan(x)와 탄젠트 역함수는 같은 함수를 가리키는 두 이름입니다. 둘 다 역수 1 / tan(x)를 뜻하지 않습니다. 탄젠트의 역수는 코탄젠트라는 다른 함수입니다."
    },
    {
      "question": "탄젠트 비가 1보다 클 수 있나요?",
      "answer": "네, 지극히 정상입니다. 대변이 인접변보다 길면 비가 1을 넘고 각도가 45도를 넘습니다. 사인·코사인 비와 달리 탄젠트에는 상한이 없습니다."
    },
    {
      "question": "대변과 인접변이 같으면 어떻게 되나요?",
      "answer": "비는 1이 되고 arctan(1)은 정확히 45도입니다. 두 직각변이 같으면 이등변 직각삼각형이 되므로, 두 예각이 모두 45도가 됩니다."
    },
    {
      "question": "변의 비가 각도에 어떤 영향을 주나요?",
      "answer": "대변 대 인접변 비가 클수록 각도도 큽니다. 비 0.25는 약 14.04도, 비 1은 45도, 비 4는 약 75.96도를 줍니다. 인접변에 대한 대변의 상대 크기가 커질수록 각도도 커집니다."
    },
    {
      "question": "계산한 각도를 어떻게 검증하나요?",
      "answer": "세 가지 검사가 효과적입니다. tan(A)를 계산해 a / b와 같은지 확인하세요. 여각 B = 90 - A가 말이 되는지 확인하세요. 또는 피타고라스 정리로 빗변을 구해 a 제곱 더하기 b 제곱이 c 제곱과 같은지 확인하세요."
    },
    {
      "question": "이 계산기를 지붕 경사, 경사로 경사, 사다리 각도에 쓸 수 있나요?",
      "answer": "네, 대표적인 활용 사례입니다. 지붕 상승량을 수평 주행으로 나눈 값, 경사로 상승량을 주행으로 나눈 값, 사다리 높이를 밑단 거리로 나눈 값은 모두 대변과 인접변을 바로 주며, 이는 이 계산기가 필요로 하는 값 그대로입니다."
    },
    {
      "question": "퍼센트 경사와 도 단위 각도의 차이는?",
      "answer": "퍼센트 경사는 상승 나누기 주행 비의 100배이고, 각도는 그 비의 아크탄젠트입니다. 5% 경사는 비 0.05를 뜻하며, 이는 약 2.86도의 각도이지 5도가 아닙니다."
    }
  ],
  "relatedHeading": "관련 삼각형 계산기 살펴보기",
  "relatedItems": [
    "직각삼각형 각도 계산기",
    "직각삼각형 사인 각도 계산기",
    "직각삼각형 코사인 각도 계산기",
    "직각삼각형 부족 각도 계산기",
    "탄젠트 비 계산기",
    "탄젠트 기준 직각삼각형 변 계산기",
    "직각삼각형 변 계산기",
    "특수 직각삼각형 계산기"
  ]
},
  "ms": {
  tocHeading: "Dalam Panduan Ini",
  tocItems: {
    "arctan-intro": "Cara Mencari Sudut Menggunakan Tangen",
    "arctan-sides": "Memahami Sisi Bertentangan dan Sisi Bersebelahan",
    "arctan-what": "Apakah Tangen dalam Segi Tiga Bersudut Tegak?",
    "arctan-formula": "Cara Formula Tangen Songsang Berfungsi",
    "arctan-howto": "Cara Menggunakan Kalkulator",
    "arctan-examples": "Contoh Langkah demi Langkah",
    "arctan-applications": "Contoh Kehidupan Sebenar",
    "arctan-ratio": "Bagaimana Nisbah Mempengaruhi Sudut",
    "arctan-units": "Unit Sudut dan Ketepatan",
    "arctan-mistakes": "Kesilapan Lazim",
    "arctan-verify": "Menyemak Jawapan Anda",
    "arctan-choose": "Memilih Kalkulator yang Betul",
    "arctan-faq": "Soalan Lazim",
    "arctan-related": "Kalkulator Berkaitan",
  },
  sections: {
    "arctan-intro": {
      h2: "Cara Mencari Sudut Menggunakan Tangen",
      blocks: [
        {
          kind: "p",
          text: "Kalkulator sudut segi tiga bersudut tegak dari tangen mencari sudut tirus apabila anda mengetahui kedua-dua kaki segi tiga itu: sisi bertentangan dan sisi bersebelahan. Ia membahagikan sisi bertentangan dengan sisi bersebelahan, kemudian mengenakan tangen songsang pada nisbah tersebut. Hasilnya ialah sudut dalam darjah.",
        },
        {
          kind: "p",
          text: "Bayangkan sebuah landasan kerusi roda. Anda boleh mengukur berapa tinggi ia naik dan berapa jauh ia merentang secara mendatar, tetapi permukaan condongnya mungkin sukar diukur. Kedua-dua ukuran itu, iaitu kenaikan menegak dan rentangan mendatar, adalah sisi bertentangan dan sisi bersebelahan. Nisbahnya adalah semua yang anda perlukan. Tangen songsang menukarkan nisbah itu terus kepada sudut condongan, tanpa perlu mengukur panjang cerun langsung.",
        },
        {
          kind: "p",
          text: "Di sini [[A]] ialah sudut yang anda mahu, [[a]] ialah sisi bertentangan, dan [[b]] ialah sisi bersebelahan. Tangen mengaitkan semuanya sebagai [[\\tan(A) = a/b]], dan tangen songsang menterbalikkan hubungan itu: [[A = \\arctan(a/b)]]. Oleh sebab hipotenus tidak pernah masuk ke dalam formula, ini adalah kaedah semula jadi apabila kedua-dua kaki adalah ukuran yang sebenarnya anda ada.",
        },
      ],
    },
    "arctan-sides": {
      h2: "Memahami Sisi Bertentangan dan Sisi Bersebelahan",
      blocks: [
        { kind: "h3", text: "Apakah Segi Tiga Bersudut Tegak?" },
        {
          kind: "p",
          text: "Segi tiga bersudut tegak mempunyai satu sudut tepat 90 darjah. Dua sudut yang lain adalah sudut tirus, bermaksud setiap satunya kurang daripada 90 darjah, dan apabila dicampur sentiasa berjumlah 90 darjah. Syarat 90 darjah inilah yang membuatkan nisbah trigonometri berfungsi: sinus, kosinus, dan tangen ditakrifkan oleh hubungan tetap antara sisi-sisi segi tiga bersudut tegak. Tanpa sudut tegak, nisbah [[a/b]] tidak akan sepadan dengan satu sudut yang konsisten.",
        },
        { kind: "h3", text: "Apakah Sisi Bertentangan?" },
        {
          kind: "p",
          text: "Sisi bertentangan ialah kaki yang terletak betul-betul bertentangan dengan sudut [[A]]. Ia tidak pernah menyentuh sudut itu sendiri. Dalam istilah praktikal, ia sering mewakili kenaikan menegak: ketinggian yang dicapai tangga pada dinding, ketinggian yang diperoleh bumbung, atau komponen menegak boom kren. Label \"bertentangan\" bergantung pada sudut yang anda pilih sebagai rujukan. Jika anda menukar rujukan daripada [[A]] kepada [[B]], sisi yang bertentangan tadi menjadi sisi bersebelahan.",
        },
        { kind: "h3", text: "Apakah Sisi Bersebelahan?" },
        {
          kind: "p",
          text: "Sisi bersebelahan ialah kaki yang menyentuh sudut [[A]] tetapi bukan hipotenus. Ia membentuk satu sisi sudut itu. Dalam ukuran lapangan, ia sering mewakili rentangan mendatar: jarak tanah dari dinding ke tapak tangga, rentangan mendatar bumbung, atau rentangan landasan. Ia adalah salah satu daripada dua kaki yang berserenjang, dan jangan dikelirukan dengan hipotenus, iaitu sisi yang bertentangan dengan sudut tegak.",
        },
        { kind: "h3", text: "Apakah Hipotenus?" },
        {
          kind: "p",
          text: "Hipotenus, dilabelkan [[c]], ialah sisi yang bertentangan dengan sudut 90 darjah dan sentiasa merupakan sisi terpanjang dalam segi tiga itu. Kalkulator tangen tidak memerlukan panjangnya. Jika anda memerlukannya, teorem Pythagoras memberikannya daripada kedua-dua kaki: [[c = \\sqrt{a^2 + b^2}]]. Tetapi untuk mencari sudut itu sendiri, hipotenus ialah maklumat tambahan yang boleh anda abaikan.",
        },
        { kind: "h3", text: "Mengapa Sudut Rujukan Penting" },
        {
          kind: "p",
          text: "Bertentangan dan bersebelahan ditakrifkan relatif kepada sudut yang dipilih. Dalam segi tiga yang sama, menukar rujukan daripada [[A]] kepada [[B]] menukar peranan kedua-dua kaki: sisi yang bertentangan menjadi bersebelahan dan sebaliknya. Menterbalikkan nisbah daripada [[a/b]] kepada [[b/a]] oleh itu mengira sudut pelengkap [[B = 90^\\circ - A]] dan bukannya [[A]]. Mengekalkan sudut rujukan yang sama sepanjang pengiraan mengelakkan kekeliruan ini.",
        },
        {
          kind: "caption",
          text: "Anatomi untuk arktangen: a ialah sisi bertentangan merentasi sudut A, b ialah sisi bersebelahan yang menyentuh sudut A, c ialah hipotenus.",
        },
      ],
    },
    "arctan-what": {
      h2: "Apakah Tangen dalam Segi Tiga Bersudut Tegak?",
      blocks: [
        {
          kind: "p",
          text: "Tangen membandingkan kedua-dua kaki segi tiga bersudut tegak. Bagi sudut [[A]], ia adalah sisi bertentangan dibahagi sisi bersebelahan:",
        },
        { kind: "p", text: "[[[\\tan(A) = \\frac{a}{b}]]]" },
        {
          kind: "p",
          text: "Di sini [[\\tan(A)]] ialah tangen sudut [[A]], [[a]] ialah sisi bertentangan, dan [[b]] ialah sisi bersebelahan. Tangen menerangkan betapa curam segi tiga itu: ia adalah nisbah kaki menegak kepada kaki mendatar apabila segi tiga itu duduk dengan sisi bersebelahan sebagai tapaknya.",
        },
        { kind: "p", text: "Contohnya, apabila [[a = 3]] dan [[b = 4]]:" },
        { kind: "p", text: "[[[\\tan(A) = \\frac{3}{4} = 0.75]]]" },
        {
          kind: "p",
          text: "Nisbah ini tidak mempunyai unit fizikal. Meter dibahagi meter terhapus, jadi sama ada anda mengukur dalam meter, kaki, atau sentimeter, nisbah 0.75 adalah nombor tulen yang sama.",
        },
        { kind: "h3", text: "Apakah Tangen Songsang?" },
        {
          kind: "p",
          text: "Tangen biasa bermula dengan sudut dan menghasilkan nisbah. Tangen songsang bermula dengan nisbah dan mengembalikan sudut. Jika [[\\tan(A) = 0.75]], maka [[A = \\arctan(0.75) \\approx 36.87^\\circ]]. Tangen songsang menterbalikkan hubungan tangen, mendapatkan semula sudut asal daripada nisbah sisi.",
        },
        { kind: "h3", text: "Adakah Arktangen Sama dengan Tangen Songsang?" },
        {
          kind: "p",
          text: "Ya. [[\\arctan(x)]] dan [[\\tan^{-1}(x)]] adalah dua tatatanda untuk fungsi yang sama. Superskrip [[-1]] tidak bermaksud saligan [[1/\\tan(x)]]. Saligan tangen ialah kotangen, fungsi yang berasingan.",
        },
        { kind: "h3", text: "Memahami SOH-CAH-TOA" },
        {
          kind: "p",
          text: "SOH-CAH-TOA ialah alat ingatan piawai: Sinus = Bertentangan / Hipotenus, Kosinus = Bersebelahan / Hipotenus, Tangen = Bertentangan / Bersebelahan. Bahagian TOA mengenal pasti nisbah yang betul untuk kalkulator ini, kerana ukuran yang diketahui adalah sisi bertentangan dan sisi bersebelahan.",
        },
        { kind: "h3", text: "Mengapa Tangen Tidak Memerlukan Hipotenus" },
        {
          kind: "p",
          text: "Tangen menggunakan dua kaki yang berserenjang secara langsung, jadi panjang pepenjuru tidak relevan untuk pengiraan. Mengetahui kenaikan dan rentangan sudah cukup untuk menentukan sudut condongan. Mendarab kedua-dua kaki dengan faktor positif yang sama tidak mengubah nisbah, dan oleh itu sudutnya: segi tiga 3-4 dan segi tiga 6-8 mempunyai sudut 36.87 darjah yang sama.",
        },
        {
          kind: "caption",
          text: "Cara arktangen berfungsi: bahagikan sisi bertentangan dengan sisi bersebelahan, kemudian gunakan tangen songsang untuk mendapatkan semula sudut.",
        },
      ],
    },
    "arctan-formula": {
      h2: "Cara Formula Tangen Songsang Berfungsi",
      blocks: [
        { kind: "p", text: "Mulakan dengan takrifan tangen:" },
        { kind: "p", text: "[[[\\tan(A) = \\frac{a}{b}]]]" },
        {
          kind: "p",
          text: "Panjang sisi yang diketahui membolehkan anda mengira nisbah di sebelah kanan. Untuk mendapatkan semula sudut, gunakan tangen songsang pada kedua-dua belah:",
        },
        { kind: "p", text: "[[[A = \\arctan\\left(\\frac{a}{b}\\right)]]]" },
        {
          kind: "p",
          text: "Tangen songsang dikenakan pada keseluruhan nisbah kerana nisbah itu secara keseluruhannya ialah tangen sudut tersebut. Anda tidak boleh memisahkannya merentasi pengangka dan penyebut.",
        },
        { kind: "h3", text: "Contoh Kerja: Sisi Bertentangan 3 dan Sisi Bersebelahan 4" },
        { kind: "p", text: "Diberi [[a = 3]] cm dan [[b = 4]] cm:" },
        { kind: "p", text: "Langkah 1: Tulis formula. [[A = \\arctan(a/b)]]" },
        { kind: "p", text: "Langkah 2: Gantikan nilai. [[A = \\arctan(3/4)]]" },
        { kind: "p", text: "Langkah 3: Kira nisbah. [[3/4 = 0.75]]" },
        { kind: "p", text: "Langkah 4: Gunakan tangen songsang. [[A = \\arctan(0.75)]]" },
        { kind: "p", text: "Jawapan akhir: [[A \\approx 36.87^\\circ]]" },
        {
          kind: "p",
          text: "Sudutnya kira-kira 36.87 darjah. Dua tempat perpuluhan mencerminkan pembundaran biasa hasil tidak nisbah, bukan bentuk tertutup tepat.",
        },
      ],
    },
    "arctan-howto": {
      h2: "Cara Menggunakan Kalkulator Sudut Segi Tiga Bersudut Tegak dari Tangen",
      blocks: [
        { kind: "p", text: "Ikut langkah-langkah ini untuk sepadan dengan antara muka langsung:" },
        {
          kind: "ol",
          text: "1. Kenal pasti sudut tegak. Sahkan segi tiga itu mempunyai sudut 90 darjah sebelum menggunakan sebarang nisbah trigonometri.\n2. Kenal pasti sudut rujukan A yang ingin anda kira.\n3. Cari sisi bertentangan a, kaki yang terletak betul-betul bertentangan dengan sudut A.\n4. Cari sisi bersebelahan b, kaki yang menyentuh sudut A dan bukan hipotenus.\n5. Ukur atau dapatkan kedua-dua panjang sisi menggunakan unit yang sama.\n6. Masukkan panjang sisi bertentangan ke dalam medan yang sepadan.\n7. Masukkan panjang sisi bersebelahan ke dalam medannya.\n8. Pilih unit yang serasi dengan pemilih unit yang disediakan kalkulator.\n9. Pastikan kedua-dua panjang sisi positif dan lebih besar daripada sifar.\n10. Tekan Kira Sudut A untuk menjalankan pengiraan.\n11. Baca sudut yang dikira dalam darjah.\n12. Semak sama ada hasilnya masuk akal untuk segi tiga: nisbah hampir 1 sepatutnya memberi sudut hampir 45 darjah.\n13. Gunakan Tetapkan Semula untuk memadam input dan memulakan pengiraan baharu.",
        },
        {
          kind: "p",
          text: "Setiap langkah penting kerana sisi yang tersalah label adalah punca paling lazim jawapan yang salah. Mengambil sedikit masa untuk memastikan kaki mana yang bertentangan dan mana yang bersebelahan menghalang kesilapan yang paling kerap.",
        },
      ],
    },
    "arctan-examples": {
      h2: "Contoh Langkah demi Langkah Mencari Sudut Menggunakan Tangen",
      blocks: [
        {
          kind: "p",
          text: "Empat contoh ini membina kemahiran asas sebelum aplikasi dunia nyata. Setiap satu mengikut pola yang sama: tulis formula, ganti, bahagi, gunakan arktangen.",
        },
        { kind: "h3", text: "Contoh 1: Segi Tiga Bersudut Tegak 3-4-5" },
        {
          kind: "p",
          text: "Diberi sisi bertentangan [[a = 3]] cm dan sisi bersebelahan [[b = 4]] cm, cari sudut [[A]].",
        },
        { kind: "p", text: "Langkah 1: Tulis formula. [[A = \\arctan(a/b)]]" },
        { kind: "p", text: "Langkah 2: Gantikan. [[A = \\arctan(3/4)]]" },
        { kind: "p", text: "Langkah 3: Kira. [[A = \\arctan(0.75)]]" },
        { kind: "p", text: "Jawapan akhir: [[A \\approx 36.87^\\circ]]" },
        {
          kind: "p",
          text: "Hipotenus tidak diperlukan walaupun ini segi tiga 3-4-5. Kedua-dua kaki sahaja menentukan sudut, itulah sebabnya arktangen adalah pilihan yang cekap di sini.",
        },
        { kind: "h3", text: "Contoh 2: Sisi Bertentangan dan Sisi Bersebelahan yang Sama" },
        { kind: "p", text: "Diberi [[a = 5]] m dan [[b = 5]] m:" },
        { kind: "p", text: "[[[A = \\arctan\\left(\\frac{5}{5}\\right) = \\arctan(1) = 45^\\circ]]]" },
        {
          kind: "p",
          text: "Kaki yang sama menghasilkan segi tiga bersudut tegak sama kaki, jadi kedua-dua sudut tirusnya tepat 45 darjah.",
        },
        { kind: "h3", text: "Contoh 3: Sudut Di Bawah 45 Darjah" },
        { kind: "p", text: "Diberi [[a = 3]] m dan [[b = 6]] m:" },
        { kind: "p", text: "[[[A = \\arctan\\left(\\frac{3}{6}\\right) \\approx 26.57^\\circ]]]" },
        {
          kind: "p",
          text: "Sudutnya kurang daripada 45 darjah kerana sisi bertentangan lebih pendek daripada sisi bersebelahan. Kenaikan pendek merentasi rentangan panjang menghasilkan sudut landai.",
        },
        { kind: "h3", text: "Contoh 4: Sudut Di Atas 45 Darjah" },
        { kind: "p", text: "Diberi [[a = 8]] ft dan [[b = 4]] ft:" },
        { kind: "p", text: "[[[A = \\arctan\\left(\\frac{8}{4}\\right) \\approx 63.43^\\circ]]]" },
        {
          kind: "p",
          text: "Sudutnya melebihi 45 darjah kerana sisi bertentangan lebih panjang daripada sisi bersebelahan. Kenaikan tinggi merentasi rentangan pendek menghasilkan sudut curam.",
        },
      ],
    },
    "arctan-applications": {
      h2: "Contoh Kehidupan Sebenar Mengira Sudut Menggunakan Tangen",
      blocks: [
        {
          kind: "p",
          text: "Dua belas contoh praktikal yang diselesaikan sepenuhnya. Bagi setiap satu, situasi diterangkan, segi tiga dikenal pasti, ukuran dinyatakan, sisi yang betul dinamakan, formula ditulis dan dinilai, dan hasilnya ditafsirkan dengan had praktikalnya.",
        },
        { kind: "h3", text: "Contoh 5: Mengira Sudut Kecerunan Bumbung" },
        {
          kind: "p",
          text: "Sebuah bumbung naik 4 ft secara menegak merentasi rentangan mendatar 12 ft. Cari sudut antara cerun bumbung dengan garisan mendatar.",
        },
        {
          kind: "p",
          text: "Diketahui: kenaikan bertentangan [[a = 4]] ft, rentangan bersebelahan [[b = 12]] ft. Tangen songsang sesuai kerana kedua-dua ukuran berserenjang diketahui dan panjang cerun tidak diperlukan.",
        },
        { kind: "p", text: "[[[A = \\arctan\\left(\\frac{4}{12}\\right) \\approx 18.43^\\circ]]]" },
        {
          kind: "p",
          text: "Bumbung itu naik kira-kira 18.43 darjah di atas garisan mendatar. Perhatikan bahawa kecerunan bumbung yang dinyatakan sebagai 4:12 adalah nisbah, bukan sudut 4 darjah. Hasil geometri ini bukan penilaian struktur.",
        },
        { kind: "h3", text: "Contoh 6: Mencari Sudut Tangga" },
        {
          kind: "p",
          text: "Sebuah tangga mencapai 4.5 m ke atas dinding, dan tapaknya 2 m dari dinding. Cari sudut antara tangga dengan tanah.",
        },
        {
          kind: "p",
          text: "Diketahui: ketinggian bertentangan [[a = 4.5]] m, jarak tanah bersebelahan [[b = 2]] m.",
        },
        { kind: "p", text: "[[[A = \\arctan\\left(\\frac{4.5}{2}\\right) \\approx 66.04^\\circ]]]" },
        {
          kind: "p",
          text: "Ketinggian dinding bertentangan dengan sudut tanah dan jarak tanah bersebelahan. Sudut yang dikira sahaja tidak menentukan sama ada tangga itu diletakkan dengan selamat.",
        },
        { kind: "h3", text: "Contoh 7: Mengira Sudut Condongan Landasan" },
        {
          kind: "p",
          text: "Sebuah landasan naik 0.75 m merentasi rentangan mendatar 9 m. Cari sudut condongan.",
        },
        { kind: "p", text: "[[[A = \\arctan\\left(\\frac{0.75}{9}\\right) \\approx 4.76^\\circ]]]" },
        {
          kind: "p",
          text: "Kenaikan menegak dan rentangan mendatar adalah input tangen yang betul. Sudut ini sahaja tidak mengesahkan kebolehcapaian atau pematuhan kod bangunan.",
        },
        { kind: "h3", text: "Contoh 8: Menganggarkan Sudut Dongak ke Pokok" },
        {
          kind: "p",
          text: "Seseorang berdiri 20 m dari sebatang pokok. Puncak pokok itu 12 m di atas aras pemerhatian. Kira sudut dongak.",
        },
        { kind: "p", text: "[[[A = \\arctan\\left(\\frac{12}{20}\\right) \\approx 30.96^\\circ]]]" },
        {
          kind: "p",
          text: "Perbezaan ketinggian menegak ialah sisi bertentangan dan jarak mendatar ialah sisi bersebelahan. Hasilnya ialah sudut di atas garisan mendatar dari titik pemerhatian, bukan jumlah ketinggian pokok.",
        },
        { kind: "h3", text: "Contoh 9: Pengukuran Ketinggian Ukur Tanah" },
        {
          kind: "p",
          text: "Sebuah lakaran ukur tanah yang dipermudahkan merekodkan perbezaan menegak 7 m dan jarak mendatar 12 m. Kira sudut dongak.",
        },
        { kind: "p", text: "[[[A = \\arctan\\left(\\frac{7}{12}\\right) \\approx 30.26^\\circ]]]" },
        {
          kind: "p",
          text: "Perbezaan ketinggian dan jarak mendatar membentuk sisi bertentangan dan sisi bersebelahan. Ukur tanah sebenar mungkin memerlukan pembetulan ketinggian alat dan pelarasan rupa bumi di luar model yang dipermudahkan ini.",
        },
        { kind: "h3", text: "Contoh 10: Mencari Sudut Sokongan Mekanikal" },
        {
          kind: "p",
          text: "Sebuah sokongan mekanikal mempunyai kenaikan menegak 1.2 m dan rentangan mendatar 3.5 m. Kira sudut relatif kepada garisan mendatar.",
        },
        { kind: "p", text: "[[[A = \\arctan\\left(\\frac{1.2}{3.5}\\right) \\approx 18.92^\\circ]]]" },
        {
          kind: "p",
          text: "Tangen songsang menukarkan dua ukuran berserenjang kepada sudut tanpa memerlukan panjang pepenjuru. Pengiraan ini tidak menentukan kekuatan atau kesesuaian sokongan.",
        },
        { kind: "h3", text: "Contoh 11: Mengira Kecondongan Tangga Bangunan" },
        {
          kind: "p",
          text: "Sebuah tangga yang dipermudahkan naik 2.8 m merentasi rentangan mendatar 4 m. Kira sudut condongan keseluruhannya.",
        },
        { kind: "p", text: "[[[A = \\arctan\\left(\\frac{2.8}{4}\\right) \\approx 34.99^\\circ]]]" },
        {
          kind: "p",
          text: "Jumlah kenaikan menegak dan rentangan mendatar menentukan sudut keseluruhan. Pengiraan yang dipermudahkan ini tidak mengesahkan pematuhan kod bangunan atau dimensi anak tangga individu.",
        },
        { kind: "h3", text: "Contoh 12: Mencari Sudut Wayar Penegang" },
        {
          kind: "p",
          text: "Sebuah wayar penegang menghubungkan dua titik dengan pemisahan menegak 10 m dan pemisahan mendatar 15 m. Cari sudut antara wayar dengan garisan mendatar.",
        },
        { kind: "p", text: "[[[A = \\arctan\\left(\\frac{10}{15}\\right) \\approx 33.69^\\circ]]]" },
        {
          kind: "p",
          text: "Pemisahan menegak bertentangan dengan sudut dan unjuran mendatar bersebelahan. Pengiraan sudut tidak menentukan ketegangan wayar, kekuatan sauh, atau keselamatan struktur.",
        },
        { kind: "h3", text: "Contoh 13: Mengira Sudut Gred Jalan" },
        {
          kind: "p",
          text: "Sebuah jalan naik 5 m merentasi jarak mendatar 100 m. Cari sudut condongan jalan.",
        },
        { kind: "p", text: "[[[A = \\arctan\\left(\\frac{5}{100}\\right) \\approx 2.86^\\circ]]]" },
        {
          kind: "p",
          text: "Gred peratusan ialah [[(5/100) \\times 100 = 5\\%]]. Gred 5 peratus bukan sudut 5 darjah; sudutnya ialah arktangen nisbah itu, kira-kira 2.86 darjah.",
        },
        { kind: "h3", text: "Contoh 14: Mencari Sudut Boom Kren" },
        {
          kind: "p",
          text: "Sebuah boom kren yang dipermudahkan mempunyai kenaikan menegak 8 m dan unjuran mendatar 6 m. Cari sudut relatif kepada garisan mendatar.",
        },
        { kind: "p", text: "[[[A = \\arctan\\left(\\frac{8}{6}\\right) \\approx 53.13^\\circ]]]" },
        {
          kind: "p",
          text: "Unjuran menegak bertentangan dan unjuran mendatar bersebelahan. Ini tidak menentukan kapasiti kren atau keselamatan operasi.",
        },
        { kind: "h3", text: "Contoh 15: Mengira Kecondongan Denai Mendaki" },
        {
          kind: "p",
          text: "Sebuah bahagian lurus denai mendaki naik 80 m merentasi rentangan mendatar 150 m. Cari sudut condongan.",
        },
        { kind: "p", text: "[[[A = \\arctan\\left(\\frac{80}{150}\\right) \\approx 28.07^\\circ]]]" },
        {
          kind: "p",
          text: "Pengiraan menggunakan kenaikan ketinggian menegak sebagai sisi bertentangan dan jarak mendatar sebagai sisi bersebelahan. Denai sebenar berbeza kecerunannya dan tidak membentuk satu condongan lurus.",
        },
        { kind: "h3", text: "Contoh 16: Mencari Sudut Sokongan Awning" },
        {
          kind: "p",
          text: "Sebuah sokongan awning mempunyai kenaikan menegak 1.2 m dan rentangan mendatar 2.4 m. Kira sudut relatif kepada garisan mendatar.",
        },
        { kind: "p", text: "[[[A = \\arctan\\left(\\frac{1.2}{2.4}\\right) \\approx 26.57^\\circ]]]" },
        {
          kind: "p",
          text: "Nisbah menentukan sudut tanpa memerlukan panjang pepenjuru sokongan. Hasilnya tidak menentukan kesesuaian struktur sokongan.",
        },
        { kind: "h3", text: "Perbandingan Contoh Praktikal" },
        {
          kind: "table",
          text: "Situasi | Sisi bertentangan | Sisi bersebelahan | Formula | Sudut | Tafsiran\nKecerunan bumbung | 4 ft | 12 ft | arctan(4/12) | 18.43° | Cerun bumbung sederhana\nTangga | 4.5 m | 2 m | arctan(4.5/2) | 66.04° | Kedudukan tangga curam\nLandasan | 0.75 m | 9 m | arctan(0.75/9) | 4.76° | Condongan landai\nDongak pokok | 12 m | 20 m | arctan(12/20) | 30.96° | Sudut pandangan ke puncak pokok\nUkur tanah | 7 m | 12 m | arctan(7/12) | 30.26° | Sudut dongak\nPendakap sokongan | 1.2 m | 3.5 m | arctan(1.2/3.5) | 18.92° | Sudut pendakap landai\nTangga bangunan | 2.8 m | 4 m | arctan(2.8/4) | 34.99° | Kecondongan tangga biasa\nWayar penegang | 10 m | 15 m | arctan(10/15) | 33.69° | Sudut wayar ke garisan mendatar\nGred jalan | 5 m | 100 m | arctan(5/100) | 2.86° | Jalan gred 5%\nBoom kren | 8 m | 6 m | arctan(8/6) | 53.13° | Kedudukan boom terangkat\nDenai mendaki | 80 m | 150 m | arctan(80/150) | 28.07° | Bahagian denai curam\nSokongan awning | 1.2 m | 2.4 m | arctan(1.2/2.4) | 26.57° | Sudut pepenjuru sokongan",
        },
        {
          kind: "caption",
          text: "Empat pengiraan praktikal: bumbung 18.43°, tangga 66.04°, landasan 4.76°, dongak pokok 30.96°.",
        },
      ],
    },
    "arctan-ratio": {
      h2: "Bagaimana Nisbah Bertentangan kepada Bersebelahan Mempengaruhi Sudut",
      blocks: [
        {
          kind: "p",
          text: "Nisbah [[a/b]] menentukan sudut [[A]]. Nisbah kecil menghasilkan sudut tirus yang kecil, sisi yang sama menghasilkan tepat 45 darjah, dan sisi bertentangan yang lebih panjang daripada sisi bersebelahan menghasilkan sudut lebih besar daripada 45 darjah. Nisbah lebih besar daripada 1 adalah sah sepenuhnya untuk tangen, yang membezakannya daripada sinus dan kosinus. Segi tiga berkadar mempunyai sudut yang sama, dan mendarab kedua-dua kaki dengan faktor positif yang sama tidak mengubah sudutnya. Apabila nisbah membesar dengan sangat besar, sudut menghampiri 90 darjah tanpa mencapainya untuk panjang sisi positif yang terhingga.",
        },
        {
          kind: "table",
          text: "Bertentangan a | Bersebelahan b | Nisbah a/b | Sudut A\n1 | 4 | 0.25 | Kira-kira 14.04°\n1 | 2 | 0.5 | Kira-kira 26.57°\n1 | 1 | 1 | 45°\n2 | 1 | 2 | Kira-kira 63.43°\n4 | 1 | 4 | Kira-kira 75.96°",
        },
        {
          kind: "p",
          text: "Polanya jelas: nisbah sisi menentukan bentuk segi tiga, bukan saiz keseluruhannya. Gandakan kedua-dua kaki dan sudutnya kekal tepat sama.",
        },
        {
          kind: "caption",
          text: "Nisbah 0.25 memberi 14.04°, 0.5 memberi 26.57°, 1 memberi 45°, 2 memberi 63.43°, 4 memberi 75.96°.",
        },
      ],
    },
    "arctan-units": {
      h2: "Memahami Unit Sudut dan Ketepatan Pengukuran",
      blocks: [
        {
          kind: "p",
          text: "Kalkulator mengembalikan darjah. Darjah ialah 1/360 daripada putaran penuh. Radian ialah unit sudut alternatif, ditakrifkan supaya putaran penuh bersamaan [[2\\pi]] radian. Tangen songsang boleh mengembalikan sama ada unit bergantung pada kalkulator, tetapi alat ini melaporkan darjah.",
        },
        {
          kind: "p",
          text: "Nisbah [[a/b]] itu sendiri tidak mempunyai unit, dan kedua-dua sisi mesti menggunakan unit yang serasi. Menukar kedua-dua ukuran dari meter ke sentimeter mendarab pengangka dan penyebut dengan 100, meninggalkan nisbah tidak berubah.",
        },
        {
          kind: "p",
          text: "Untuk menukar radian kepada darjah: [[\\text{Degrees} = \\text{Radians} \\times 180^\\circ / \\pi]]",
        },
        { kind: "h3", text: "Contoh: Adakah Unit Ukuran Mengubah Sudut?" },
        {
          kind: "p",
          text: "Ambil [[a = 3]] m dan [[b = 4]] m. Nilai setara dalam sentimeter ialah [[a = 300]] cm dan [[b = 400]] cm. Kedua-duanya memberi nisbah 0.75 dan sudut 36.87 darjah yang sama. Kekalkan ketepatan yang cukup dalam langkah perantaraan dan bundarkan sudut akhir supaya sepadan dengan ketepatan ukuran asal.",
        },
      ],
    },
    "arctan-mistakes": {
      h2: "Kesilapan Lazim Ketika Mengira Sudut Menggunakan Tangen",
      blocks: [
        {
          kind: "ol",
          text: "1. Menggunakan hipotenus dan bukannya sisi bersebelahan. Formula memerlukan kaki yang menyentuh sudut A, bukan sisi terpanjang. Semak: adakah penyebut anda salah satu daripada dua kaki?\n2. Menukar sisi bertentangan dan sisi bersebelahan. Ini mengira sudut pelengkap sebaliknya. Jika anda menjangkakan kira-kira 37 darjah tetapi mendapat kira-kira 53, kakinya tertukar.\n3. Menterbalikkan nisbah menjadi b/a. [[\\arctan(b/a)]] memberi [[B]], bukan [[A]]. Untuk segi tiga 3-4, arctan(4/3) ialah 53.13 darjah, sudut tirus yang satu lagi.\n4. Menggunakan tangen biasa dan bukannya tangen songsang. Menaip tan(0.75) dan bukannya arctan(0.75) menjawab soalan yang berbeza sama sekali.\n5. Mengelirukan tangen songsang dengan saligan tangen. [[\\tan^{-1}(x)]] bukan [[1/\\tan(x)]]. Saligannya ialah kotangen.\n6. Menganggap nisbah tangen mesti antara 0 dan 1. Ia boleh melebihi 1 dengan bebas. Nisbah 2 dengan sudut 63.43 darjah adalah sah sepenuhnya.\n7. Memasukkan panjang sisi sifar atau negatif. Panjang sisi mesti positif. Input sifar atau negatif tidak mempunyai makna geometri di sini.\n8. Mencampurkan unit ukuran yang tidak serasi. Meter untuk satu kaki dan kaki untuk kaki yang lain merosakkan nisbah. Tukar dahulu.\n9. Membundarkan nisbah terlalu awal. Membundarkan 0.6667 kepada 0.67 sebelum menggunakan arktangen mengubah jawapan. Kekalkan ketepatan penuh sehingga langkah akhir.\n10. Melaporkan radian apabila darjah dijangkakan. Arctan(1) ialah 45 darjah tetapi 0.785 radian. Semak mod kalkulator anda.\n11. Mengelirukan sudut A dengan sudut pelengkap B. Ingat [[A + B = 90^\\circ]]. Jika jawapannya kelihatan seperti sudut satu lagi itu, nisbahnya terbalik.\n12. Menganggap gred peratusan sebagai sudut dalam darjah. Gred 5% ialah arctan(0.05), kira-kira 2.86 darjah, bukan 5 darjah.\n13. Mengelirukan kenaikan menegak dengan jarak condong. Sisi bertentangan ialah komponen menegak tulen, bukan panjang sepanjang cerun.\n14. Menganggap sudut yang dikira membuktikan struktur selamat. Geometri menerangkan bentuk sahaja. Keselamatan tangga, beban bumbung, dan pematuhan landasan memerlukan semakan kejuruteraan yang berasingan.",
        },
      ],
    },
    "arctan-verify": {
      h2: "Cara Menyemak Sama Ada Sudut yang Dikira Adalah Sah",
      blocks: [
        {
          kind: "p",
          text: "Input yang sah untuk segi tiga bersudut tegak yang tidak terdegradasi: sisi bertentangan mesti positif, sisi bersebelahan mesti positif, tiada satu pun boleh sifar, kedua-duanya mesti menggunakan unit yang serasi, dan sudut hasilnya mesti berada di antara 0 dan 90 darjah dengan tegas. Tidak seperti sinus dan kosinus, nisbah tangen tidak terhad kepada nilai di bawah 1, jadi sisi bertentangan yang lebih panjang daripada sisi bersebelahan tidak mengapa.",
        },
        { kind: "h3", text: "Kaedah 1: Semak Nisbah Tangen" },
        {
          kind: "p",
          text: "Sahkan [[\\tan(A) \\approx a/b]] menggunakan sudut yang tidak dibundarkan jika boleh. Jika tangen jawapan anda menghasilkan semula nisbah input, jawapannya konsisten.",
        },
        { kind: "h3", text: "Kaedah 2: Semak Sudut Pelengkap" },
        {
          kind: "p",
          text: "Kira [[B = 90^\\circ - A]]. Dua sudut tirus segi tiga bersudut tegak mesti berjumlah 90 darjah, jadi ini semakan kewarasan yang pantas untuk setiap hasil.",
        },
        { kind: "h3", text: "Kaedah 3: Gunakan Teorem Pythagoras" },
        {
          kind: "p",
          text: "Kira hipotenus [[c = \\sqrt{a^2 + b^2}]], kemudian sahkan [[a^2 + b^2 = c^2]].",
        },
        {
          kind: "p",
          text: "Semakan penuh dengan [[a = 3]] dan [[b = 4]]: [[c = \\sqrt{9 + 16} = 5]]. Sudut [[A = \\arctan(3/4) \\approx 36.87^\\circ]] dan pelengkapnya [[B \\approx 53.13^\\circ]] berjumlah 90 darjah. Perbezaan kecil datang daripada pembundaran sudut yang dipaparkan.",
        },
      ],
    },
    "arctan-choose": {
      h2: "Memilih Kalkulator Segi Tiga Bersudut Tegak yang Betul",
      blocks: [
        { kind: "p", text: "Padankan alat dengan ukuran yang sebenarnya anda ada:" },
        {
          kind: "ul",
          text: "- Kalkulator Sudut dari Tangen (halaman ini): sisi bertentangan [[a]] dan sisi bersebelahan [[b]] diketahui, mencari sudut [[A]]. Terbaik apabila kedua-dua kaki diukur secara langsung.\n- Kalkulator Sudut dari Sinus: sisi bertentangan dan hipotenus diketahui. Terbaik untuk masalah ketinggian di mana panjang cerun diukur.\n- Kalkulator Sudut dari Kosinus: sisi bersebelahan dan hipotenus diketahui. Terbaik apabila hipotenus diukur secara langsung sepanjang cerun.\n- Kalkulator Sudut: membantu anda memilih kaedah yang betul apabila anda tidak pasti sisi mana yang anda ada.\n- Kalkulator Sudut Hilang: mencari sudut pelengkap apabila satu sudut tirus sudah diketahui.\n- Kalkulator Sisi: mencari panjang sisi yang hilang bukannya sudut.",
        },
        {
          kind: "p",
          text: "Ketiga-tiga fungsi songsang bersetuju pada segi tiga yang sama: untuk segi tiga 3-4-5, arctan(3/4), arcsin(3/5), dan arccos(4/5) semuanya memberi 36.87 darjah. Jika dua kaedah tidak bersetuju, sesisi tersalah label.",
        },
      ],
    },
    "arctan-faq": {
      h2: "Soalan Lazim",
      blocks: [],
    },
    "arctan-related": {
      h2: "Terokai Kalkulator Segi Tiga Berkaitan",
      blocks: [
        { kind: "p", text: "Alat-alat ini merangkumi pengiraan berkaitan:" },
      ],
    },
  },
  faqs: [
    {
      q: "Apakah yang dikira oleh formula A = arctan(a / b)?",
      a: "Formula ini mengira sudut tirus A segi tiga bersudut tegak daripada panjang kedua-dua kakinya. Anda bahagikan sisi bertentangan a dengan sisi bersebelahan b, kemudian gunakan tangen songsang pada nisbah itu. Hasilnya ialah sudut dalam darjah yang tangennya sama dengan a / b.",
    },
    {
      q: "Bagaimana mencari sudut menggunakan tangen songsang?",
      a: "Ukur sisi bertentangan dan sisi bersebelahan relatif kepada sudut sasaran anda, bahagikan sisi bertentangan dengan sisi bersebelahan untuk mendapatkan nisbah tangen, kemudian gunakan arktangen. Contohnya, arctan(3 / 4) adalah kira-kira 36.87 darjah.",
    },
    {
      q: "Mengapa saya memerlukan sisi bertentangan dan sisi bersebelahan?",
      a: "Tangen ditakrifkan sebagai bertentangan dibahagi bersebelahan, jadi kedua-dua sisi ini adalah tepat yang diperlukan formula. Ia adalah kedua-dua kaki segi tiga bersudut tegak, dan bersama-sama ia menentukan sepenuhnya bentuknya, dan oleh itu sudutnya.",
    },
    {
      q: "Bolehkah saya mengira sudut tanpa mengetahui hipotenus?",
      a: "Ya. Itulah kelebihan utama kaedah ini. Hipotenus tidak pernah muncul dalam formula tangen, jadi anda boleh melangkau mengukur sisi terpanjang sepenuhnya dan masih mendapat sudut yang tepat.",
    },
    {
      q: "Apakah perbezaan antara tangen dan tangen songsang?",
      a: "Tangen mengambil sudut dan mengembalikan nisbah, contohnya tan(45 darjah) = 1. Tangen songsang menterbalikkannya: ia mengambil nisbah dan mengembalikan sudut, contohnya arctan(1) = 45 darjah. Kedua-dua fungsi saling membatalkan.",
    },
    {
      q: "Adakah arktangen sama dengan tangen songsang?",
      a: "Ya. Arctan(x) dan tangen songsang(x) adalah dua nama untuk fungsi yang sama. Tiada satu pun bermaksud saligan 1 / tan(x); saligan tangen ialah kotangen, fungsi yang berbeza.",
    },
    {
      q: "Bolehkah nisbah tangen melebihi 1?",
      a: "Ya, dan ini normal. Apabila sisi bertentangan lebih panjang daripada sisi bersebelahan, nisbahnya melebihi 1 dan sudutnya lebih besar daripada 45 darjah. Tidak seperti nisbah sinus dan kosinus, tangen tidak mempunyai had atas.",
    },
    {
      q: "Apa yang berlaku apabila sisi bertentangan dan sisi bersebelahan sama?",
      a: "Nisbahnya ialah 1, dan arctan(1) adalah tepat 45 darjah. Kaki yang sama membentuk segi tiga bersudut tegak sama kaki, jadi kedua-dua sudut tirusnya adalah 45 darjah.",
    },
    {
      q: "Bagaimana nisbah sisi mempengaruhi sudut?",
      a: "Nisbah bertentangan kepada bersebelahan yang lebih besar bermaksud sudut yang lebih besar. Nisbah 0.25 memberi kira-kira 14.04 darjah, nisbah 1 memberi 45 darjah, dan nisbah 4 memberi kira-kira 75.96 darjah. Sudut bertambah apabila sisi bertentangan bertambah relatif kepada sisi bersebelahan.",
    },
    {
      q: "Bagaimana saya boleh mengesahkan sudut yang dikira?",
      a: "Tiga semakan berfungsi dengan baik. Kira tan(A) dan pastikan ia sama dengan a / b. Pastikan sudut pelengkap B = 90 tolak A masuk akal. Atau kira hipotenus dengan teorem Pythagoras dan pastikan a kuasa dua tambah b kuasa dua sama dengan c kuasa dua.",
    },
    {
      q: "Bolehkah saya menggunakan kalkulator ini untuk kecerunan bumbung, condongan landasan, atau sudut tangga?",
      a: "Ya, ini adalah kes penggunaan klasik. Kenaikan bumbung berbanding rentangan mendatarnya, kenaikan landasan berbanding rentangannya, atau ketinggian tangga berbanding jarak tapaknya semuanya memberi anda sisi bertentangan dan sisi bersebelahan secara langsung, iaitu tepat yang diperlukan kalkulator ini.",
    },
    {
      q: "Apakah perbezaan antara gred peratusan dan sudut dalam darjah?",
      a: "Gred peratusan ialah 100 kali nisbah kenaikan berbanding jarak mendatar, manakala sudut ialah arktangen nisbah itu. Gred 5 peratus bermaksud nisbah 0.05, iaitu sudut kira-kira 2.86 darjah, bukan 5 darjah.",
    },
  ],
  relatedHeading: "Terokai Kalkulator Segi Tiga Berkaitan",
  relatedItems: [
    "Kalkulator Sudut Segi Tiga Bersudut Tegak",
    "Kalkulator Sudut Segi Tiga Bersudut Tegak dari Sinus",
    "Kalkulator Sudut Segi Tiga Bersudut Tegak dari Kosinus",
    "Kalkulator Sudut Hilang Segi Tiga Bersudut Tegak",
    "Kalkulator Nisbah Tangen",
    "Kalkulator Sisi Segi Tiga Bersudut Tegak dari Tangen",
    "Kalkulator Sisi Segi Tiga Bersudut Tegak",
    "Kalkulator Segi Tiga Bersudut Tegak Khas",
  ],
  conclusion: {
    h2: "Cari Sebarang Sudut dari Tangen dengan Yakin",
    paragraphs: [
      "Formula tangen songsang menukarkan dua ukuran kaki yang mudah kepada sudut yang tepat. Ukur sisi bertentangan dan sisi bersebelahan, bahagi, gunakan arktangen, dan sahkan dengan sudut pelengkap atau teorem Pythagoras. Sama ada tugasnya kecerunan bumbung, condongan landasan, atau kedudukan tangga, kaedahnya sama: padankan nisbah dengan sudut, dan biarkan geometri melakukan selebihnya.",
    ],
  },
},
  "pl": {
  "tocHeading": "W tym przewodniku",
  "tocItems": {
    "arctan-intro": "Jak znaleźć kąt za pomocą tangensa",
    "arctan-sides": "Zrozumienie boku przeciwległego i przyległego",
    "arctan-what": "Czym jest tangens w trójkącie prostokątnym?",
    "arctan-formula": "Jak działa wzór na odwrotny tangens",
    "arctan-howto": "Jak korzystać z kalkulatora",
    "arctan-examples": "Przykłady krok po kroku",
    "arctan-applications": "Przykłady z życia",
    "arctan-ratio": "Jak stosunek boków wpływa na kąt",
    "arctan-units": "Jednostki kąta i precyzja",
    "arctan-mistakes": "Częste błędy",
    "arctan-verify": "Sprawdzanie wyniku",
    "arctan-choose": "Wybór odpowiedniego kalkulatora",
    "arctan-faq": "Częste pytania",
    "arctan-related": "Powiązane kalkulatory"
  },
  "sections": {
    "arctan-intro": {
      "h2": "Jak znaleźć kąt za pomocą tangensa",
      "blocks": [
        { "type": "p", "text": "Kalkulator kąta trójkąta prostokątnego z tangensa znajduje kąt ostry, gdy znasz obie przyprostokątne trójkąta: bok przeciwległy i bok przyległy. Dzieli bok przeciwległy przez bok przyległy, a następnie stosuje odwrotny tangens do tego stosunku. Wynikiem jest kąt wyrażony w stopniach." },
        { "type": "p", "text": "Wyobraź sobie podjazd dla wózków. Możesz zmierzyć, jak wysoko się wznosi i jak daleko sięga poziomo, ale sama pochyła powierzchnia może być trudna do zmierzenia. Te dwa pomiary, wzniesienie pionowe i odcinek poziomy, to bok przeciwległy i bok przyległy. Ich stosunek to wszystko, czego potrzebujesz. Odwrotny tangens zamienia ten stosunek bezpośrednio na kąt nachylenia, bez konieczności mierzenia długości zbocza." },
        { "type": "p", "text": "Tutaj [[A]] to kąt, który chcesz znaleźć, [[a]] to bok przeciwległy, a [[b]] to bok przyległy. Tangens łączy je wzorem [[\\tan(A) = a/b]], a odwrotny tangens odwraca tę zależność: [[A = \\arctan(a/b)]]. Ponieważ przeciwprostokątna nigdy nie występuje we wzorze, jest to naturalna metoda zawsze wtedy, gdy dysponujesz pomiarami obu przyprostokątnych." }
      ]
    },
    "arctan-sides": {
      "h2": "Zrozumienie boku przeciwległego i przyległego",
      "blocks": [
        { "type": "h3", "text": "Czym jest trójkąt prostokątny?" },
        { "type": "p", "text": "Trójkąt prostokątny ma jeden kąt dokładnie 90 stopni. Pozostałe dwa kąty są ostre, co oznacza, że każdy ma mniej niż 90 stopni, a razem zawsze sumują się do 90 stopni. Warunek kąta prostego sprawia, że funkcje trygonometryczne działają: sinus, cosinus i tangens są określone przez stałe zależności między bokami trójkąta prostokątnego. Bez kąta prostego stosunek [[a/b]] nie odpowiadałby jednemu stałemu kątowi." },
        { "type": "h3", "text": "Czym jest bok przeciwległy?" },
        { "type": "p", "text": "Bok przeciwległy to przyprostokątna leżąca dokładnie naprzeciw kąta [[A]]. Nigdy nie dotyka samego kąta. W praktyce często oznacza wzniesienie pionowe: wysokość, na jaką drabina sięga po ścianie, wysokość, jaką zyskuje dach, lub pionową składową wysięgnika dźwigu. Określenie „przeciwległy” zależy od tego, który kąt wybierzesz jako odniesienie. Jeśli zmienisz odniesienie z [[A]] na [[B]], bok, który był przeciwległy, staje się przyległy." },
        { "type": "h3", "text": "Czym jest bok przyległy?" },
        { "type": "p", "text": "Bok przyległy to przyprostokątna, która dotyka kąta [[A]], ale nie jest przeciwprostokątną. Tworzy jeden bok kąta. W pomiarach terenowych często oznacza odcinek poziomy: odległość na ziemi od ściany do podstawy drabiny, poziomy zasięg dachu lub bieg podjazdu. Jest jedną z dwóch prostopadłych przyprostokątnych i nie wolno jej mylić z przeciwprostokątną, czyli bokiem leżącym naprzeciw kąta prostego." },
        { "type": "h3", "text": "Czym jest przeciwprostokątna?" },
        { "type": "p", "text": "Przeciwprostokątna, oznaczona [[c]], to bok leżący naprzeciw kąta 90 stopni i zawsze najdłuższy bok trójkąta. Kalkulator tangensa nie wymaga jej długości. Jeśli kiedykolwiek będzie potrzebna, twierdzenie Pitagorasa wyznacza ją z obu przyprostokątnych: [[c = \\sqrt{a^2 + b^2}]]. Do samego wyznaczenia kąta przeciwprostokątna jest jednak zbędną informacją, którą możesz po prostu pominąć." },
        { "type": "h3", "text": "Dlaczego kąt odniesienia ma znaczenie" },
        { "type": "p", "text": "Bok przeciwległy i przyległy są określone względem wybranego kąta. W tym samym trójkącie zamiana odniesienia z [[A]] na [[B]] zamienia role obu przyprostokątnych: bok, który był przeciwległy, staje się przyległy i na odwrót. Odwrócenie stosunku z [[a/b]] na [[b/a]] oblicza więc kąt dopełniający [[B = 90^\\circ - A]], a nie [[A]]. Utrzymywanie stałego kąta odniesienia przez całe obliczenie pozwala uniknąć tej pomyłki." },
        { "type": "figure", "src": "arctan-anatomy.svg", "alt": "Anatomia trójkąta prostokątnego pokazująca bok przeciwległy a, bok przyległy b oraz przeciwprostokątną c we wzorze na arcus tangens", "caption": "Anatomia dla arcus tangensa: a to bok przeciwległy naprzeciw kąta A, b to bok przyległy dotykający kąta A, c to przeciwprostokątna." }
      ]
    },
    "arctan-what": {
      "h2": "Czym jest tangens w trójkącie prostokątnym?",
      "blocks": [
        { "type": "p", "text": "Tangens porównuje dwie przyprostokątne trójkąta prostokątnego. Dla kąta [[A]] jest to bok przeciwległy podzielony przez bok przyległy:" },
        { "type": "p", "text": "[[[\\tan(A) = \\frac{a}{b}]]]" },
        { "type": "p", "text": "Tutaj [[\\tan(A)]] to tangens kąta [[A]], [[a]] to bok przeciwległy, a [[b]] to bok przyległy. Tangens opisuje, jak stromy jest trójkąt: jest to stosunek pionowej przyprostokątnej do poziomej przyprostokątnej, gdy trójkąt stoi na boku przyległym jako podstawie." },
        { "type": "p", "text": "Na przykład, gdy [[a = 3]] i [[b = 4]]:" },
        { "type": "p", "text": "[[[\\tan(A) = \\frac{3}{4} = 0.75]]]" },
        { "type": "p", "text": "Stosunek nie ma jednostki fizycznej. Metry dzielone przez metry się skracają, więc niezależnie od tego, czy mierzyłeś w metrach, stopach czy centymetrach, stosunek 0.75 pozostaje tą samą czystą liczbą." },
        { "type": "h3", "text": "Czym jest odwrotny tangens?" },
        { "type": "p", "text": "Zwykły tangens zaczyna od kąta i daje stosunek. Odwrotny tangens zaczyna od stosunku i zwraca kąt. Jeśli [[\\tan(A) = 0.75]], to [[A = \\arctan(0.75) \\approx 36.87^\\circ]]. Odwrotny tangens odwraca zależność tangensa, odzyskując pierwotny kąt ze stosunku boków." },
        { "type": "h3", "text": "Czy arcus tangens to to samo co odwrotny tangens?" },
        { "type": "p", "text": "Tak. [[\\arctan(x)]] i [[\\tan^{-1}(x)]] to dwa zapisy tej samej funkcji. Wykładnik [[-1]] nie oznacza odwrotności [[1/\\tan(x)]]. Odwrotnością tangensa jest cotangens, czyli odrębna funkcja." },
        { "type": "h3", "text": "Zrozumienie SOH-CAH-TOA" },
        { "type": "p", "text": "SOH-CAH-TOA to standardowa pomoc pamięciowa: Sinus = bok przeciwległy / przeciwprostokątna, Cosinus = bok przyległy / przeciwprostokątna, Tangens = bok przeciwległy / bok przyległy. Część TOA wskazuje właściwy stosunek dla tego kalkulatora, ponieważ znanymi pomiarami są bok przeciwległy i bok przyległy." },
        { "type": "h3", "text": "Dlaczego tangens nie wymaga przeciwprostokątnej" },
        { "type": "p", "text": "Tangens korzysta bezpośrednio z dwóch prostopadłych przyprostokątnych, więc długość przekątnej nie ma znaczenia dla obliczenia. Znajomość wzniesienia i biegu wystarcza, by jednoznacznie wyznaczyć kąt nachylenia. Przeskalowanie obu przyprostokątnych o ten sam dodatni czynnik pozostawia stosunek, a zatem i kąt, bez zmian: trójkąt 3-4 i trójkąt 6-8 mają ten sam kąt 36.87 stopnia." },
        { "type": "figure", "src": "arctan-ratio.svg", "alt": "Schemat pokazujący kroki odwrotnego tangensa: podziel a przez b, a następnie zastosuj arcus tangens, aby otrzymać kąt A", "caption": "Jak działa arcus tangens: podziel bok przeciwległy przez bok przyległy, a następnie zastosuj odwrotny tangens, aby odzyskać kąt." }
      ]
    },
    "arctan-formula": {
      "h2": "Jak działa wzór na odwrotny tangens",
      "blocks": [
        { "type": "p", "text": "Zacznij od definicji tangensa:" },
        { "type": "p", "text": "[[[\\tan(A) = \\frac{a}{b}]]]" },
        { "type": "p", "text": "Znane długości boków pozwalają obliczyć stosunek po prawej stronie. Aby odzyskać kąt, zastosuj odwrotny tangens do obu stron:" },
        { "type": "p", "text": "[[[A = \\arctan\\left(\\frac{a}{b}\\right)]]]" },
        { "type": "p", "text": "Odwrotny tangens stosuje się do całego stosunku, ponieważ stosunek jako całość jest tangensem kąta. Nie można go rozdzielić na licznik i mianownik." },
        { "type": "h3", "text": "Rozwiązany przykład: bok przeciwległy 3 i bok przyległy 4" },
        { "type": "p", "text": "Dane: [[a = 3]] cm i [[b = 4]] cm:" },
        { "type": "p", "text": "Krok 1: Zapisz wzór. [[A = \\arctan(a/b)]]" },
        { "type": "p", "text": "Krok 2: Podstaw wartości. [[A = \\arctan(3/4)]]" },
        { "type": "p", "text": "Krok 3: Oblicz stosunek. [[3/4 = 0.75]]" },
        { "type": "p", "text": "Krok 4: Zastosuj odwrotny tangens. [[A = \\arctan(0.75)]]" },
        { "type": "p", "text": "Ostateczna odpowiedź: [[A \\approx 36.87^\\circ]]" },
        { "type": "p", "text": "Kąt wynosi w przybliżeniu 36.87 stopnia. Dwa miejsca po przecinku odzwierciedlają zwykłe zaokrąglenie wyniku niewymiernego, a nie dokładną postać zamkniętą." }
      ]
    },
    "arctan-howto": {
      "h2": "Jak korzystać z kalkulatora kąta trójkąta prostokątnego z tangensa",
      "blocks": [
        { "type": "p", "text": "Wykonaj poniższe kroki, aby przejść przez interfejs na żywo:" },
        {
          "type": "ol",
          "items": [
            "<strong>Zidentyfikuj kąt prosty.</strong> Zanim użyjesz jakiegokolwiek stosunku trygonometrycznego, upewnij się, że trójkąt ma róg 90 stopni.",
            "<strong>Wybierz kąt odniesienia A</strong>, który chcesz obliczyć.",
            "<strong>Znajdź bok przeciwległy a</strong>, czyli przyprostokątną leżącą dokładnie naprzeciw kąta A.",
            "<strong>Znajdź bok przyległy b</strong>, czyli przyprostokątną dotykającą kąta A, która nie jest przeciwprostokątną.",
            "<strong>Zmierz lub uzyskaj długości obu boków</strong>, używając tej samej jednostki.",
            "<strong>Wpisz długość boku przeciwległego</strong> w odpowiednie pole.",
            "<strong>Wpisz długość boku przyległego</strong> w jego pole.",
            "<strong>Wybierz zgodne jednostki</strong> za pomocą selektorów jednostek udostępnianych przez kalkulator.",
            "<strong>Sprawdź, czy długości obu boków są dodatnie</strong> i większe od zera.",
            "<strong>Naciśnij przycisk Oblicz kąt A</strong>, aby uruchomić obliczenie.",
            "<strong>Odczytaj obliczony kąt</strong> w stopniach.",
            "<strong>Sprawdź, czy wynik ma sens</strong> dla trójkąta: stosunek bliski 1 powinien dać kąt bliski 45 stopni.",
            "<strong>Użyj przycisku Reset</strong>, aby wyczyścić dane wejściowe i rozpocząć nowe obliczenie."
          ]
        },
        { "type": "p", "text": "Każdy krok ma znaczenie, ponieważ błędnie oznaczony bok jest najczęstszym źródłem złej odpowiedzi. Chwila na potwierdzenie, która przyprostokątna jest przeciwległa, a która przyległa, zapobiega najczęstszemu błędowi." }
      ]
    },
    "arctan-examples": {
      "h2": "Przykłady krok po kroku znajdowania kąta za pomocą tangensa",
      "blocks": [
        { "type": "p", "text": "Te cztery przykłady budują podstawową umiejętność przed zastosowaniami praktycznymi. Każdy opiera się na tym samym schemacie: zapisz wzór, podstaw, podziel, zastosuj arcus tangens." },
        { "type": "h3", "text": "Przykład 1: Trójkąt prostokątny 3-4-5" },
        { "type": "p", "text": "Dane: bok przeciwległy [[a = 3]] cm i bok przyległy [[b = 4]] cm, znajdź kąt [[A]]." },
        { "type": "p", "text": "Krok 1: Zapisz wzór. [[A = \\arctan(a/b)]]" },
        { "type": "p", "text": "Krok 2: Podstaw. [[A = \\arctan(3/4)]]" },
        { "type": "p", "text": "Krok 3: Oblicz. [[A = \\arctan(0.75)]]" },
        { "type": "p", "text": "Ostateczna odpowiedź: [[A \\approx 36.87^\\circ]]" },
        { "type": "p", "text": "Przeciwprostokątna nie jest potrzebna, mimo że jest to trójkąt 3-4-5. Same dwie przyprostokątne wyznaczają kąt, dlatego arcus tangens jest tu efektywnym wyborem." },
        { "type": "h3", "text": "Przykład 2: Równe boki przeciwległy i przyległy" },
        { "type": "p", "text": "Dane: [[a = 5]] m i [[b = 5]] m:" },
        { "type": "p", "text": "[[[A = \\arctan\\left(\\frac{5}{5}\\right) = \\arctan(1) = 45^\\circ]]]" },
        { "type": "p", "text": "Równe przyprostokątne tworzą równoramienny trójkąt prostokątny, więc oba kąty ostre mają dokładnie 45 stopni." },
        { "type": "h3", "text": "Przykład 3: Kąt poniżej 45 stopni" },
        { "type": "p", "text": "Dane: [[a = 3]] m i [[b = 6]] m:" },
        { "type": "p", "text": "[[[A = \\arctan\\left(\\frac{3}{6}\\right) \\approx 26.57^\\circ]]]" },
        { "type": "p", "text": "Kąt jest mniejszy niż 45 stopni, ponieważ bok przeciwległy jest krótszy od boku przyległego. Krótkie wzniesienie na długim biegu daje łagodny kąt." },
        { "type": "h3", "text": "Przykład 4: Kąt powyżej 45 stopni" },
        { "type": "p", "text": "Dane: [[a = 8]] ft i [[b = 4]] ft:" },
        { "type": "p", "text": "[[[A = \\arctan\\left(\\frac{8}{4}\\right) \\approx 63.43^\\circ]]]" },
        { "type": "p", "text": "Kąt przekracza 45 stopni, ponieważ bok przeciwległy jest dłuższy od boku przyległego. Wysokie wzniesienie na krótkim biegu daje stromy kąt." }
      ]
    },
    "arctan-applications": {
      "h2": "Przykłady z życia obliczania kątów za pomocą tangensa",
      "blocks": [
        { "type": "p", "text": "Dwanaście w pełni rozwiązanych przykładów praktycznych. W każdym opisano sytuację, zidentyfikowano trójkąt, podano pomiary, nazwano właściwe boki, zapisano i obliczono wzór oraz zinterpretowano wynik wraz z jego praktycznymi ograniczeniami." },
        { "type": "h3", "text": "Przykład 5: Obliczanie kąta nachylenia dachu" },
        { "type": "p", "text": "Dach wznosi się 4 ft pionowo na poziomym biegu 12 ft. Znajdź kąt między połacią dachu a poziomem." },
        { "type": "p", "text": "Dane: wzniesienie przeciwległe [[a = 4]] ft, bieg przyległy [[b = 12]] ft. Odwrotny tangens jest właściwy, ponieważ znane są dwa prostopadłe pomiary, a długość zbocza nie jest potrzebna." },
        { "type": "p", "text": "[[[A = \\arctan\\left(\\frac{4}{12}\\right) \\approx 18.43^\\circ]]]" },
        { "type": "p", "text": "Dach wznosi się pod kątem około 18.43 stopnia powyżej poziomu. Zwróć uwagę, że nachylenie dachu wyrażone jako 4:12 to stosunek, a nie kąt 4 stopni. Ten wynik geometryczny nie jest oceną konstrukcyjną." },
        { "type": "h3", "text": "Przykład 6: Wyznaczanie kąta ustawienia drabiny" },
        { "type": "p", "text": "Drabina sięga 4.5 m w górę ściany, a jej podstawa stoi 2 m od ściany. Znajdź kąt między drabiną a ziemią." },
        { "type": "p", "text": "Dane: wysokość przeciwległa [[a = 4.5]] m, odległość przyległa na ziemi [[b = 2]] m." },
        { "type": "p", "text": "[[[A = \\arctan\\left(\\frac{4.5}{2}\\right) \\approx 66.04^\\circ]]]" },
        { "type": "p", "text": "Wysokość ściany jest przeciwległa do kąta przy ziemi, a odległość na ziemi jest przyległa. Sam obliczony kąt nie potwierdza, czy drabina jest ustawiona bezpiecznie." },
        { "type": "h3", "text": "Przykład 7: Obliczanie kąta nachylenia podjazdu" },
        { "type": "p", "text": "Podjazd wznosi się 0.75 m na poziomym biegu 9 m. Znajdź kąt nachylenia." },
        { "type": "p", "text": "[[[A = \\arctan\\left(\\frac{0.75}{9}\\right) \\approx 4.76^\\circ]]]" },
        { "type": "p", "text": "Wzniesienie pionowe i bieg poziomy to właściwe dane wejściowe tangensa. Sam kąt nie potwierdza dostępności ani zgodności z przepisami budowlanymi." },
        { "type": "h3", "text": "Przykład 8: Szacowanie kąta wzniesienia do wierzchołka drzewa" },
        { "type": "p", "text": "Osoba stoi 20 m od drzewa. Wierzchołek drzewa znajduje się 12 m powyżej poziomu obserwacji. Oblicz kąt wzniesienia." },
        { "type": "p", "text": "[[[A = \\arctan\\left(\\frac{12}{20}\\right) \\approx 30.96^\\circ]]]" },
        { "type": "p", "text": "Różnica wysokości w pionie to bok przeciwległy, a odległość pozioma to bok przyległy. Wynikiem jest kąt powyżej poziomu z punktu obserwacji, a nie całkowita wysokość drzewa." },
        { "type": "h3", "text": "Przykład 9: Geodezyjny pomiar kąta wzniesienia" },
        { "type": "p", "text": "Uproszczony szkic geodezyjny rejestruje różnicę pionową 7 m i odległość poziomą 12 m. Oblicz kąt wzniesienia." },
        { "type": "p", "text": "[[[A = \\arctan\\left(\\frac{7}{12}\\right) \\approx 30.26^\\circ]]]" },
        { "type": "p", "text": "Różnica wzniesienia i odległość pozioma tworzą boki przeciwległy i przyległy. Prawdziwe pomiary geodezyjne mogą wymagać korekt wysokości instrumentu i ukształtowania terenu wykraczających poza ten uproszczony model." },
        { "type": "h3", "text": "Przykład 10: Wyznaczanie kąta podpory mechanicznej" },
        { "type": "p", "text": "Podpora mechaniczna ma wzniesienie pionowe 1.2 m i bieg poziomy 3.5 m. Oblicz kąt względem poziomu." },
        { "type": "p", "text": "[[[A = \\arctan\\left(\\frac{1.2}{3.5}\\right) \\approx 18.92^\\circ]]]" },
        { "type": "p", "text": "Odwrotny tangens zamienia dwa prostopadłe pomiary na kąt bez potrzeby znajomości długości przekątnej. Obliczenie nie potwierdza wytrzymałości ani przydatności podpory." },
        { "type": "h3", "text": "Przykład 11: Obliczanie nachylenia schodów" },
        { "type": "p", "text": "Uproszczone schody wznoszą się 2.8 m na poziomym biegu 4 m. Oblicz ogólny kąt nachylenia." },
        { "type": "p", "text": "[[[A = \\arctan\\left(\\frac{2.8}{4}\\right) \\approx 34.99^\\circ]]]" },
        { "type": "p", "text": "Całkowite wzniesienie pionowe i bieg poziomy wyznaczają ogólny kąt. To uproszczone obliczenie nie weryfikuje zgodności z przepisami budowlanymi ani wymiarów poszczególnych stopni." },
        { "type": "h3", "text": "Przykład 12: Wyznaczanie kąta odciągu" },
        { "type": "p", "text": "Odciąg łączy dwa punkty o separacji pionowej 10 m i separacji poziomej 15 m. Znajdź kąt między odciągiem a poziomem." },
        { "type": "p", "text": "[[[A = \\arctan\\left(\\frac{10}{15}\\right) \\approx 33.69^\\circ]]]" },
        { "type": "p", "text": "Separacja pionowa jest przeciwległa do kąta, a rzut poziomy jest przyległy. Obliczenie kąta nie wyznacza naciągu liny, wytrzymałości kotwy ani bezpieczeństwa konstrukcji." },
        { "type": "h3", "text": "Przykład 13: Obliczanie kąta nachylenia drogi" },
        { "type": "p", "text": "Droga wznosi się 5 m na poziomej odległości 100 m. Znajdź kąt nachylenia drogi." },
        { "type": "p", "text": "[[[A = \\arctan\\left(\\frac{5}{100}\\right) \\approx 2.86^\\circ]]]" },
        { "type": "p", "text": "Nachylenie procentowe wynosi [[(5/100) \\times 100 = 5\\%]]. Nachylenie 5 procent to nie kąt 5 stopni; kąt to arcus tangens stosunku, czyli około 2.86 stopnia." },
        { "type": "h3", "text": "Przykład 14: Wyznaczanie kąta wysięgnika dźwigu" },
        { "type": "p", "text": "Uproszczony wysięgnik ma wzniesienie pionowe 8 m i rzut poziomy 6 m. Znajdź kąt względem poziomu." },
        { "type": "p", "text": "[[[A = \\arctan\\left(\\frac{8}{6}\\right) \\approx 53.13^\\circ]]]" },
        { "type": "p", "text": "Rzut pionowy jest przeciwległy, a rzut poziomy jest przyległy. Nie wyznacza to udźwigu dźwigu ani bezpieczeństwa pracy." },
        { "type": "h3", "text": "Przykład 15: Obliczanie nachylenia szlaku turystycznego" },
        { "type": "p", "text": "Prosty odcinek szlaku turystycznego wznosi się 80 m na poziomym biegu 150 m. Znajdź kąt nachylenia." },
        { "type": "p", "text": "[[[A = \\arctan\\left(\\frac{80}{150}\\right) \\approx 28.07^\\circ]]]" },
        { "type": "p", "text": "W obliczeniu użyto pionowego przyrostu wysokości jako boku przeciwległego i odległości poziomej jako boku przyległego. Prawdziwe szlaki zmieniają nachylenie, zamiast tworzyć jedno proste wzniesienie." },
        { "type": "h3", "text": "Przykład 16: Wyznaczanie kąta wspornika markizy" },
        { "type": "p", "text": "Wspornik markizy ma wzniesienie pionowe 1.2 m i bieg poziomy 2.4 m. Oblicz kąt względem poziomu." },
        { "type": "p", "text": "[[[A = \\arctan\\left(\\frac{1.2}{2.4}\\right) \\approx 26.57^\\circ]]]" },
        { "type": "p", "text": "Stosunek wyznacza kąt bez potrzeby znajomości długości przekątnej wspornika. Wynik nie potwierdza przydatności konstrukcyjnej wspornika." },
        { "type": "h3", "text": "Praktyczne przykłady w porównaniu" },
        {
          "type": "table",
          "headers": ["Sytuacja", "Bok przeciwległy", "Bok przyległy", "Wzór", "Kąt", "Interpretacja"],
          "rows": [
            ["Nachylenie dachu", "4 ft", "12 ft", "arctan(4/12)", "18.43°", "Umiarkowane nachylenie dachu"],
            ["Drabina", "4.5 m", "2 m", "arctan(4.5/2)", "66.04°", "Strome ustawienie drabiny"],
            ["Podjazd", "0.75 m", "9 m", "arctan(0.75/9)", "4.76°", "Łagodne nachylenie"],
            ["Wzniesienie do drzewa", "12 m", "20 m", "arctan(12/20)", "30.96°", "Kąt patrzenia na wierzchołek drzewa"],
            ["Pomiar geodezyjny", "7 m", "12 m", "arctan(7/12)", "30.26°", "Kąt wzniesienia"],
            ["Zastrzał podpory", "1.2 m", "3.5 m", "arctan(1.2/3.5)", "18.92°", "Płytki kąt podpory"],
            ["Schody", "2.8 m", "4 m", "arctan(2.8/4)", "34.99°", "Typowe nachylenie schodów"],
            ["Odciąg", "10 m", "15 m", "arctan(10/15)", "33.69°", "Kąt odciągu względem poziomu"],
            ["Nachylenie drogi", "5 m", "100 m", "arctan(5/100)", "2.86°", "Droga o nachyleniu 5%"],
            ["Wysięgnik dźwigu", "8 m", "6 m", "arctan(8/6)", "53.13°", "Uniesiona pozycja wysięgnika"],
            ["Szlak turystyczny", "80 m", "150 m", "arctan(80/150)", "28.07°", "Stromy odcinek szlaku"],
            ["Wspornik markizy", "1.2 m", "2.4 m", "arctan(1.2/2.4)", "26.57°", "Kąt przekątnej wspornika"]
          ]
        },
        { "type": "figure", "src": "arctan-applications.svg", "alt": "Cztery praktyczne przykłady z arcus tangensem: kąty nachylenia dachu, drabiny, podjazdu i wzniesienia do drzewa", "caption": "Cztery praktyczne obliczenia: dach 18.43°, drabina 66.04°, podjazd 4.76°, wzniesienie do drzewa 30.96°." }
      ]
    },
    "arctan-ratio": {
      "h2": "Jak stosunek boku przeciwległego do przyległego wpływa na kąt",
      "blocks": [
        { "type": "p", "text": "Stosunek [[a/b]] wyznacza kąt [[A]]. Mały stosunek daje mały kąt ostry, równe boki dają dokładnie 45 stopni, a bok przeciwległy dłuższy od przyległego daje kąt większy niż 45 stopni. Stosunek większy od 1 jest w pełni poprawny dla tangensa, co odróżnia go od sinusa i cosinusa. Trójkąty proporcjonalne mają te same kąty, a przeskalowanie obu przyprostokątnych o ten sam dodatni czynnik pozostawia kąt bez zmian. Gdy stosunek rośnie niezwykle mocno, kąt zbliża się do 90 stopni, nie osiągając ich przy skończonych dodatnich długościach boków." },
        {
          "type": "table",
          "headers": ["Bok przeciwległy a", "Bok przyległy b", "Stosunek a/b", "Kąt A"],
          "rows": [
            ["1", "4", "0.25", "Około 14.04°"],
            ["1", "2", "0.5", "Około 26.57°"],
            ["1", "1", "1", "45°"],
            ["2", "1", "2", "Około 63.43°"],
            ["4", "1", "4", "Około 75.96°"]
          ]
        },
        { "type": "p", "text": "Wzorzec jest jasny: stosunek boków wyznacza kształt trójkąta, a nie jego ogólny rozmiar. Podwój obie przyprostokątne, a kąt pozostanie dokładnie taki sam." },
        { "type": "figure", "src": "arctan-ratio-panels.svg", "alt": "Pięć trójkątów pokazujących, jak stosunek tangensa zmienia kąt od 14 do 76 stopni", "caption": "Stosunek 0.25 daje 14.04°, 0.5 daje 26.57°, 1 daje 45°, 2 daje 63.43°, 4 daje 75.96°." }
      ]
    },
    "arctan-units": {
      "h2": "Zrozumienie jednostek kąta i precyzji pomiaru",
      "blocks": [
        { "type": "p", "text": "Kalkulator zwraca stopnie. Stopień to 1/360 pełnego obrotu. Radian to alternatywna jednostka kąta, zdefiniowana tak, że pełny obrót wynosi [[2\\pi]] radianów. Odwrotny tangens może zwracać dowolną jednostkę w zależności od kalkulatora, ale to narzędzie podaje stopnie." },
        { "type": "p", "text": "Sam stosunek [[a/b]] nie ma jednostki, a oba boki muszą używać zgodnych jednostek. Przeliczenie obu pomiarów z metrów na centymetry mnoży licznik i mianownik przez 100, pozostawiając stosunek bez zmian." },
        { "type": "p", "text": "Aby przeliczyć radiany na stopnie: [[\\text{Stopnie} = \\text{Radiany} \\times 180^\\circ / \\pi]]" },
        { "type": "h3", "text": "Przykład: czy jednostka pomiaru zmienia kąt?" },
        { "type": "p", "text": "Weź [[a = 3]] m i [[b = 4]] m. Odpowiednik w centymetrach to [[a = 300]] cm i [[b = 400]] cm. Oba dają stosunek 0.75 i ten sam kąt 36.87 stopnia. W krokach pośrednich zachowaj wystarczającą precyzję, a końcowy kąt zaokrąglij zgodnie z dokładnością pierwotnych pomiarów." }
      ]
    },
    "arctan-mistakes": {
      "h2": "Częste błędy przy obliczaniu kąta za pomocą tangensa",
      "blocks": [
        {
          "type": "ol",
          "items": [
            "<strong>Używanie przeciwprostokątnej zamiast boku przyległego.</strong> Wzór potrzebuje przyprostokątnej dotykającej kąta A, a nie najdłuższego boku. Sprawdź: czy w mianowniku masz jedną z dwóch przyprostokątnych?",
            "<strong>Zamiana boku przeciwległego z przyległym.</strong> To oblicza kąt dopełniający. Jeśli spodziewałeś się około 37 stopni, a otrzymałeś około 53, przyprostokątne są zamienione.",
            "<strong>Odwrócenie stosunku na b/a.</strong> [[\\arctan(b/a)]] daje [[B]], a nie [[A]]. Dla trójkąta 3-4 arctan(4/3) to 53.13 stopnia, czyli drugi kąt ostry.",
            "<strong>Używanie zwykłego tangensa zamiast odwrotnego.</strong> Wpisanie tan(0.75) zamiast arctan(0.75) odpowiada na zupełnie inne pytanie.",
            "<strong>Mylenie odwrotnego tangensa z odwrotnością tangensa.</strong> [[\\tan^{-1}(x)]] to nie [[1/\\tan(x)]]. Odwrotnością jest cotangens.",
            "<strong>Założenie, że stosunek tangensa musi zawierać się między 0 a 1.</strong> Może swobodnie przekraczać 1. Stosunek 2 przy kącie 63.43 stopnia jest w pełni poprawny.",
            "<strong>Wpisywanie zerowych lub ujemnych długości boków.</strong> Długości boków muszą być dodatnie. Zera lub wartości ujemne nie mają tu sensu geometrycznego.",
            "<strong>Mieszanie niezgodnych jednostek miary.</strong> Metry dla jednej przyprostokątnej i stopy dla drugiej psują stosunek. Najpierw przelicz.",
            "<strong>Zbyt wczesne zaokrąglanie stosunku.</strong> Zaokrąglenie 0.6667 do 0.67 przed zastosowaniem arcus tangensa przesuwa odpowiedź. Zachowaj pełną precyzję do ostatniego kroku.",
            "<strong>Podawanie radianów, gdy oczekiwane są stopnie.</strong> Arctan(1) to 45 stopni, ale 0.785 radiana. Sprawdź tryb kalkulatora.",
            "<strong>Mylenie kąta A z jego kątem dopełniającym B.</strong> Pamiętaj: [[A + B = 90^\\circ]]. Jeśli odpowiedź wygląda jak „ten drugi” kąt, stosunek został odwrócony.",
            "<strong>Traktowanie nachylenia procentowego jak kąta w stopniach.</strong> Nachylenie 5% to arctan(0.05), czyli około 2.86 stopnia, a nie 5 stopni.",
            "<strong>Mylenie wzniesienia pionowego z odległością wzdłuż zbocza.</strong> Bok przeciwległy to czysta składowa pionowa, a nie długość wzdłuż zbocza.",
            "<strong>Założenie, że obliczony kąt dowodzi bezpieczeństwa konstrukcji.</strong> Geometria opisuje tylko kształt. Bezpieczeństwo drabiny, obciążenia dachu i zgodność podjazdu wymagają odrębnych kontroli inżynierskich."
          ]
        }
      ]
    },
    "arctan-verify": {
      "h2": "Jak sprawdzić, czy obliczony kąt jest poprawny",
      "blocks": [
        { "type": "p", "text": "Poprawne dane wejściowe dla niezdegenerowanego trójkąta prostokątnego: bok przeciwległy musi być dodatni, bok przyległy musi być dodatni, żaden nie może być zerem, oba muszą używać zgodnych jednostek, a wynikowy kąt musi leżeć ściśle między 0 a 90 stopni. W przeciwieństwie do sinusa i cosinusa stosunek tangensa nie jest ograniczony do wartości poniżej 1, więc bok przeciwległy dłuższy od przyległego jest w porządku." },
        { "type": "h3", "text": "Metoda 1: Sprawdź stosunek tangensa" },
        { "type": "p", "text": "Sprawdź, czy [[\\tan(A) \\approx a/b]], używając w miarę możliwości niezaokrąglonego kąta. Jeśli tangens Twojej odpowiedzi odtwarza stosunek wejściowy, odpowiedź jest spójna." },
        { "type": "h3", "text": "Metoda 2: Sprawdź kąt dopełniający" },
        { "type": "p", "text": "Oblicz [[B = 90^\\circ - A]]. Oba kąty ostre trójkąta prostokątnego muszą sumować się do 90 stopni, więc jest to szybka kontrola poprawności każdego wyniku." },
        { "type": "h3", "text": "Metoda 3: Użyj twierdzenia Pitagorasa" },
        { "type": "p", "text": "Oblicz przeciwprostokątną [[c = \\sqrt{a^2 + b^2}]], a następnie potwierdź, że [[a^2 + b^2 = c^2]]." },
        { "type": "p", "text": "Pełna kontrola dla [[a = 3]] i [[b = 4]]: [[c = \\sqrt{9 + 16} = 5]]. Kąt [[A = \\arctan(3/4) \\approx 36.87^\\circ]] i jego dopełnienie [[B \\approx 53.13^\\circ]] sumują się do 90 stopni. Niewielkie różnice wynikają z zaokrąglenia wyświetlanego kąta." }
      ]
    },
    "arctan-choose": {
      "h2": "Wybór odpowiedniego kalkulatora trójkąta prostokątnego",
      "blocks": [
        { "type": "p", "text": "Dopasuj narzędzie do pomiarów, które faktycznie posiadasz:" },
        {
          "type": "ul",
          "items": [
            "<strong>Kalkulator kąta z tangensa</strong> (ta strona): znane bok przeciwległy [[a]] i bok przyległy [[b]], znajduje kąt [[A]]. Najlepszy, gdy obie przyprostokątne zmierzono bezpośrednio.",
            "<a href=\"/right-triangle-angle-from-sine-calculator/\" class=\"text-primary hover:underline\"><strong>Kalkulator kąta z sinusa</strong></a>: znane bok przeciwległy i przeciwprostokątna. Najlepszy do zadań z wysokością, gdy zmierzono długość zbocza.",
            "<a href=\"/right-triangle-angle-from-cosine-calculator/\" class=\"text-primary hover:underline\"><strong>Kalkulator kąta z cosinusa</strong></a>: znane bok przyległy i przeciwprostokątna. Najlepszy, gdy przeciwprostokątną zmierzono bezpośrednio wzdłuż zbocza.",
            "<a href=\"/right-triangle-angle-calculator/\" class=\"text-primary hover:underline\"><strong>Kalkulator kątów</strong></a>: pomaga wybrać właściwą metodę, gdy nie wiesz, które boki posiadasz.",
            "<a href=\"/right-triangle-missing-angle-calculator/\" class=\"text-primary hover:underline\"><strong>Kalkulator brakującego kąta</strong></a>: znajduje kąt dopełniający, gdy jeden kąt ostry jest już znany.",
            "<a href=\"/right-triangle-side-calculator/\" class=\"text-primary hover:underline\"><strong>Kalkulator boków</strong></a>: znajduje brakujące długości boków zamiast kątów."
          ]
        },
        { "type": "p", "text": "Wszystkie trzy funkcje odwrotne zgadzają się na tym samym trójkącie: dla trójkąta 3-4-5 arctan(3/4), arcsin(3/5) i arccos(4/5) dają 36.87 stopnia. Jeśli dwie metody się nie zgadzają, bok został błędnie oznaczony." }
      ]
    },
    "arctan-faq": {
      "h2": "Częste pytania",
      "blocks": []
    },
    "arctan-related": {
      "h2": "Odkryj powiązane kalkulatory trójkątów",
      "blocks": [
        { "type": "p", "text": "Te narzędzia obejmują sąsiednie obliczenia:" },
        {
          "type": "ol",
          "items": [
            "<a href=\"/right-triangle-angle-calculator/\" class=\"text-primary hover:underline\">Kalkulator kątów trójkąta prostokątnego</a>: wybierz właściwą metodę dla dowolnej kombinacji znanych boków.",
            "<a href=\"/right-triangle-angle-from-sine-calculator/\" class=\"text-primary hover:underline\">Kalkulator kąta trójkąta prostokątnego z sinusa</a>: znajduje kąt na podstawie boku przeciwległego i przeciwprostokątnej.",
            "<a href=\"/right-triangle-angle-from-cosine-calculator/\" class=\"text-primary hover:underline\">Kalkulator kąta trójkąta prostokątnego z cosinusa</a>: znajduje kąt na podstawie boku przyległego i przeciwprostokątnej.",
            "<a href=\"/right-triangle-missing-angle-calculator/\" class=\"text-primary hover:underline\">Kalkulator brakującego kąta trójkąta prostokątnego</a>: znajduje dopełniający kąt ostry.",
            "<a href=\"/tangent-ratio-calculator/\" class=\"text-primary hover:underline\">Kalkulator stosunku tangensa</a>: oblicza tan(A) = a/b z obu przyprostokątnych.",
            "<a href=\"/right-triangle-side-from-tangent-calculator/\" class=\"text-primary hover:underline\">Kalkulator boku trójkąta prostokątnego z tangensa</a>: znajduje brakującą przyprostokątną na podstawie znanego kąta.",
            "<a href=\"/right-triangle-side-calculator/\" class=\"text-primary hover:underline\">Kalkulator boków trójkąta prostokątnego</a>: rozwiązuje dowolną brakującą długość boku.",
            "<a href=\"/special-right-triangle-calculator/\" class=\"text-primary hover:underline\">Kalkulator specjalnych trójkątów prostokątnych</a>: dokładne wartości dla trójkątów 30-60-90 i 45-45-90."
          ]
        }
      ]
    },
    "arctan-conclusion": {
      "h2": "Znajdź dowolny kąt z tangensa z pewnością",
      "blocks": [
        { "type": "p", "text": "Wzór na odwrotny tangens zamienia dwa proste pomiary przyprostokątnych w precyzyjny kąt. Zmierz bok przeciwległy i bok przyległy, podziel, zastosuj arcus tangens i zweryfikuj wynik kątem dopełniającym lub twierdzeniem Pitagorasa. Niezależnie od tego, czy zadaniem jest nachylenie dachu, podjazd, czy ustawienie drabiny, metoda jest ta sama: dopasuj stosunek do kąta i pozwól geometrii wykonać resztę." }
      ]
    }
  },
  "faqs": [
    {
      "q": "Co oblicza wzór A = arctan(a / b)?",
      "a": "Oblicza kąt ostry A trójkąta prostokątnego na podstawie długości obu przyprostokątnych. Dzielisz bok przeciwległy a przez bok przyległy b, a następnie stosujesz odwrotny tangens do tego stosunku. Wynikiem jest kąt w stopniach, którego tangens wynosi a / b."
    },
    {
      "q": "Jak znaleźć kąt za pomocą odwrotnego tangensa?",
      "a": "Zmierz bok przeciwległy i bok przyległy względem docelowego kąta, podziel bok przeciwległy przez przyległy, aby otrzymać stosunek tangensa, a następnie zastosuj arcus tangens. Na przykład arctan(3 / 4) to w przybliżeniu 36.87 stopnia."
    },
    {
      "q": "Dlaczego potrzebuję boków przeciwległego i przyległego?",
      "a": "Tangens jest zdefiniowany jako bok przeciwległy podzielony przez przyległy, więc te dwa boki to dokładnie to, czego potrzebuje wzór. Są to dwie przyprostokątne trójkąta prostokątnego i razem w pełni wyznaczają jego kształt, a zatem i kąt."
    },
    {
      "q": "Czy mogę obliczyć kąt, nie znając przeciwprostokątnej?",
      "a": "Tak. To główna zaleta tej metody. Przeciwprostokątna nigdy nie występuje we wzorze na tangens, więc możesz całkowicie pominąć pomiar najdłuższego boku i wciąż otrzymać dokładny kąt."
    },
    {
      "q": "Jaka jest różnica między tangensem a odwrotnym tangensem?",
      "a": "Tangens bierze kąt i zwraca stosunek, na przykład tan(45 stopni) = 1. Odwrotny tangens działa odwrotnie: bierze stosunek i zwraca kąt, na przykład arctan(1) = 45 stopni. Obie funkcje znoszą się nawzajem."
    },
    {
      "q": "Czy arcus tangens to to samo co tangens odwrotny?",
      "a": "Tak. Arctan(x) i tangens odwrotny to dwie nazwy tej samej funkcji. Żadna z nich nie oznacza odwrotności 1 / tan(x); odwrotnością tangensa jest cotangens, odrębna funkcja."
    },
    {
      "q": "Czy stosunek tangensa może być większy od 1?",
      "a": "Tak, i jest to normalne. Gdy bok przeciwległy jest dłuższy od przyległego, stosunek przekracza 1, a kąt jest większy niż 45 stopni. W przeciwieństwie do stosunków sinusa i cosinusa tangens nie ma górnej granicy."
    },
    {
      "q": "Co się dzieje, gdy bok przeciwległy i przyległy są równe?",
      "a": "Stosunek wynosi 1, a arctan(1) to dokładnie 45 stopni. Równe przyprostokątne tworzą równoramienny trójkąt prostokątny, więc oba kąty ostre mają po 45 stopni."
    },
    {
      "q": "Jak stosunek boków wpływa na kąt?",
      "a": "Większy stosunek boku przeciwległego do przyległego oznacza większy kąt. Stosunek 0.25 daje około 14.04 stopnia, stosunek 1 daje 45 stopni, a stosunek 4 daje około 75.96 stopnia. Kąt rośnie wraz ze wzrostem boku przeciwległego względem przyległego."
    },
    {
      "q": "Jak mogę zweryfikować obliczony kąt?",
      "a": "Dobrze sprawdzają się trzy kontrole. Oblicz tan(A) i potwierdź, że wynosi a / b. Sprawdź, czy kąt dopełniający B = 90 minus A ma sens. Albo oblicz przeciwprostokątną z twierdzenia Pitagorasa i potwierdź, że a do kwadratu plus b do kwadratu równa się c do kwadratu."
    },
    {
      "q": "Czy mogę używać tego kalkulatora do nachylenia dachu, podjazdu lub kątów drabiny?",
      "a": "Tak, to klasyczne zastosowania. Wzniesienie dachu względem jego poziomego biegu, wzniesienie podjazdu względem biegu lub wysokość drabiny względem odległości podstawy dają bezpośrednio boki przeciwległy i przyległy, czyli dokładnie to, czego potrzebuje ten kalkulator."
    },
    {
      "q": "Jaka jest różnica między nachyleniem procentowym a kątem w stopniach?",
      "a": "Nachylenie procentowe to 100 razy stosunek wzniesienia do biegu, natomiast kąt to arcus tangens tego stosunku. Nachylenie 5 procent oznacza stosunek 0.05, co odpowiada kątowi około 2.86 stopnia, a nie 5 stopni."
    }
  ],
  "relatedHeading": "Odkryj powiązane kalkulatory trójkątów",
  "relatedItems": [
    "Kalkulator kątów trójkąta prostokątnego",
    "Kalkulator kąta trójkąta prostokątnego z sinusa",
    "Kalkulator kąta trójkąta prostokątnego z cosinusa",
    "Kalkulator brakującego kąta trójkąta prostokątnego",
    "Kalkulator stosunku tangensa",
    "Kalkulator boku trójkąta prostokątnego z tangensa",
    "Kalkulator boków trójkąta prostokątnego",
    "Kalkulator specjalnych trójkątów prostokątnych"
  ]
},
};
