/**
 * missingAngleGuideTranslations.batch2.ts
 * Translations of the Right Triangle Missing Angle Calculator guide (MissingAngleGuide.astro)
 * Batch 2: Portuguese (pt), Bengali (bn), Japanese (ja), Korean (ko), Malay (ms), Polish (pl).
 *
 * Structure per language:
 * - tocHeading, tocItems (14 entries keyed by section id)
 * - sections (missing-intro, missing-angles, missing-formula, missing-howto,
 *   missing-examples, missing-applications, missing-relationship, missing-reverse,
 *   missing-vs, missing-mistakes, missing-verify, missing-choose, missing-faq,
 *   missing-related, missing-conclusion)
 * - faqs (12 question/answer pairs)
 * - relatedHeading, relatedItems (6 calculator names)
 *
 * Formulas, KaTeX markup ([[...]]), variable names, numbers, URLs, and section IDs are
 * preserved exactly as in the English source. No em dashes anywhere.
 */

export const MISSINGANGLE_TRANSLATIONS_BATCH2 = {
  "pt": {
    "tocHeading": "Neste guia",
    "tocItems": {
      "missing-intro": "Como encontrar um ângulo ausente em um triângulo retângulo",
      "missing-angles": "Quais são os ângulos de um triângulo retângulo?",
      "missing-formula": "A fórmula para encontrar um ângulo ausente",
      "missing-howto": "Como usar a calculadora",
      "missing-examples": "Exemplos passo a passo",
      "missing-applications": "Aplicações na vida real",
      "missing-relationship": "Como os ângulos complementares mudam",
      "missing-reverse": "E se você conhecer o ângulo B?",
      "missing-vs": "Ângulos complementares x ângulos suplementares",
      "missing-mistakes": "Erros comuns",
      "missing-verify": "Conferindo sua resposta",
      "missing-choose": "Escolhendo a calculadora certa",
      "missing-faq": "Perguntas frequentes",
      "missing-related": "Calculadoras relacionadas"
    },
    "sections": {
      "missing-intro": {
        "h2": "Como encontrar um ângulo ausente em um triângulo retângulo",
        "blocks": [
          {
            "kind": "p",
            "text": "Se um ângulo agudo de um triângulo retângulo mede [[35^\\circ]], o ângulo ausente é [[90^\\circ-35^\\circ=55^\\circ]]. Essa única subtração é todo o cálculo. Um triângulo retângulo sempre contém um ângulo de 90 graus, então os dois ângulos restantes precisam dividir exatamente os 90 graus que sobram. Subtrair o ângulo conhecido de 90 graus revela o ângulo ausente, sem precisar de comprimentos de lados nem de funções trigonométricas."
          },
          {
            "kind": "p",
            "text": "A resposta, 55 graus neste caso, representa o outro ângulo agudo do mesmo triângulo retângulo. Os dois ângulos sempre funcionam em par: conhecer qualquer um deles determina o outro por completo. Esta calculadora existe exatamente para essa situação, quando um ângulo já é conhecido e só falta o seu complemento. Quando nenhum ângulo ainda é conhecido, uma <a href=\"/right-triangle-angle-from-tangent-calculator/\" class=\"text-primary hover:underline\">calculadora de ângulo a partir da tangente</a> ou uma de suas equivalentes para seno e cosseno obtém o primeiro ângulo a partir dos lados medidos."
          }
        ]
      },
      "missing-angles": {
        "h2": "Quais são os ângulos de um triângulo retângulo?",
        "blocks": [
          {
            "kind": "h3",
            "text": "O ângulo reto"
          },
          {
            "kind": "p",
            "text": "Um ângulo de 90 graus representa um canto perfeito, o ângulo entre uma parede vertical e um piso nivelado. Em todo triângulo retângulo, esse ângulo é fixo: ele nunca muda de tamanho, e os diagramas o marcam com um pequeno quadrado no vértice. Como um ângulo está permanentemente fixado em 90 graus, os outros dois ângulos têm apenas 90 graus para dividir entre si, o que os obriga a serem agudos."
          },
          {
            "kind": "h3",
            "text": "Os dois ângulos agudos"
          },
          {
            "kind": "p",
            "text": "Um ângulo agudo mede mais de [[0^\\circ]] e menos de [[90^\\circ]]. Os dois ângulos restantes de um triângulo retângulo ficam nessa faixa, e são chamados de complementares porque suas medidas sempre somam 90 graus. A combinação é rígida: um único ângulo agudo conhecido deixa exatamente um valor possível para o seu par, então o ângulo ausente nunca é questão de estimativa."
          },
          {
            "kind": "h3",
            "text": "O que são ângulos complementares?"
          },
          {
            "kind": "p",
            "text": "Dois ângulos são complementares quando suas medidas somam [[90^\\circ]]. Os pares [[30^\\circ+60^\\circ=90^\\circ]], [[35^\\circ+55^\\circ=90^\\circ]] e [[45^\\circ+45^\\circ=90^\\circ]] são todos complementares. Ângulos complementares não precisam ser iguais; a igualdade só acontece com 45 graus cada. Qualquer par de ângulos positivos que some 90 graus serve, estejam eles dentro do mesmo triângulo ou não."
          },
          {
            "kind": "h3",
            "text": "Por que os ângulos de um triângulo somam 180 graus"
          },
          {
            "kind": "p",
            "text": "Todo triângulo, qualquer que seja sua forma, contém exatamente 180 graus somando seus três ângulos internos. Em um triângulo retângulo, o ângulo reto fixo toma 90 desses graus de imediato, o que deixa precisamente 90 graus para os dois ângulos agudos combinados. O diagrama abaixo mostra a conta completa para um triângulo com ângulos de 35, 55 e 90 graus."
          }
        ],
        "imgAlt": "Triângulo retângulo rotulado com ângulos A de 35 graus, B de 55 graus e C de 90 graus",
        "figcaption": "Os ângulos A (35 graus) e B (55 graus) são complementares: A + B = 90 graus, e 35 + 55 + 90 = 180 graus."
      },
      "missing-formula": {
        "h2": "A fórmula para encontrar um ângulo ausente",
        "blocks": [
          {
            "kind": "p",
            "text": "A fórmula vem direto da regra da soma dos ângulos do triângulo. Comece com a afirmação geral:"
          },
          {
            "kind": "p",
            "text": "[[[A+B+C=180^\\circ]]]"
          },
          {
            "kind": "p",
            "text": "Como o triângulo é retângulo, o terceiro ângulo é fixo:"
          },
          {
            "kind": "p",
            "text": "[[[C=90^\\circ]]]"
          },
          {
            "kind": "p",
            "text": "Substitua esse valor na soma:"
          },
          {
            "kind": "p",
            "text": "[[[A+B+90^\\circ=180^\\circ]]]"
          },
          {
            "kind": "p",
            "text": "Subtraia 90 graus dos dois lados, e os dois ângulos agudos ficam sozinhos:"
          },
          {
            "kind": "p",
            "text": "[[[A+B=90^\\circ]]]"
          },
          {
            "kind": "p",
            "text": "Por fim, subtraia o ângulo conhecido [[A]] dos dois lados para isolar o ângulo ausente:"
          },
          {
            "kind": "p",
            "text": "[[[B=90^\\circ-A]]]"
          },
          {
            "kind": "p",
            "text": "Cada passo é álgebra comum aplicada a um fato geométrico. Nada é decorado às cegas: os 90 graus da fórmula são a parte da soma dos ângulos que resta depois que o ângulo reto toma sua metade."
          },
          {
            "kind": "p",
            "text": "A mesma relação funciona ao contrário. Se o ângulo [[B]] for o conhecido, resolver para [[A]] dá:"
          },
          {
            "kind": "p",
            "text": "[[[A=90^\\circ-B]]]"
          },
          {
            "kind": "p",
            "text": "Esta calculadora usa a primeira forma porque seu campo de entrada aceita o ângulo [[A]] e devolve o ângulo [[B]]. As duas fórmulas não são regras diferentes; são a mesma relação de ângulos complementares resolvida para incógnitas diferentes."
          },
          {
            "kind": "h3",
            "text": "Por que 90 graus, e não 180 graus"
          },
          {
            "kind": "p",
            "text": "Um erro frequente é subtrair o ângulo conhecido de 180 graus. Esse total cobre os três ângulos do triângulo, então usá-lo sozinho esquece que o ângulo reto já foi contabilizado. Com [[A=35^\\circ]], o cálculo errado dá [[180^\\circ-35^\\circ=145^\\circ]], que não pode ser um ângulo agudo de nenhum triângulo retângulo. O cálculo correto, [[90^\\circ-35^\\circ=55^\\circ]], respeita o ângulo reto e pode ser conferido de imediato: [[35^\\circ+55^\\circ+90^\\circ=180^\\circ]]."
          }
        ],
        "imgAlt": "Dois painéis contrastando a soma de 180 graus do triângulo com o par agudo de 90 graus",
        "figcaption": "A Parte A mostra a soma completa do triângulo; a Parte B isola os ângulos agudos complementares."
      },
      "missing-howto": {
        "h2": "Como usar a calculadora de ângulo ausente de triângulo retângulo",
        "blocks": [
          {
            "kind": "p",
            "text": "O passo a passo abaixo corresponde à interface real desta página."
          }
        ],
        "steps": [
          "<strong>Identifique o triângulo retângulo.</strong> Confirme que a figura tem um canto genuíno de 90 graus antes de fazer qualquer outra coisa; a fórmula só vale para triângulos retângulos.",
          "<strong>Localize o ângulo agudo que você já conhece.</strong> Este é o ângulo [[A]], o valor que você vai digitar na calculadora.",
          "<strong>Confirme que o ângulo conhecido é válido.</strong> Ele precisa ser maior que [[0^\\circ]] e menor que [[90^\\circ]]. Qualquer valor fora dessa faixa não pode ser um ângulo agudo de um triângulo retângulo.",
          "<strong>Digite o ângulo conhecido [[A]] em graus.</strong> O campo de entrada aceita valores decimais como 68.5, então mantenha a precisão da sua medida.",
          "<strong>Clique em Calcular ângulo B.</strong> A ferramenta aplica [[B=90^\\circ-A]] à sua entrada.",
          "<strong>Leia o ângulo complementar calculado.</strong> A saída é o ângulo [[B]] em graus.",
          "<strong>Some os dois ângulos agudos para conferir o resultado.</strong> A soma precisa dar 90 graus; se não der, confira a entrada.",
          "<strong>Use Redefinir quando quiser começar um novo cálculo.</strong> Isso limpa a entrada para que um novo ângulo possa ser digitado."
        ],
        "closingParagraphs": [
          "Perceba o que a calculadora nunca pede: nenhum comprimento do lado oposto, nenhum comprimento do lado adjacente, nenhuma hipotenusa e nenhum valor de seno, cosseno ou tangente. Um ângulo agudo conhecido é toda a entrada, porque a regra da soma dos ângulos faz o resto. A ferramenta também não aceita radianos nem a entrada direta do ângulo [[B]]; seu campo de entrada é especificamente o ângulo [[A]] em graus."
        ]
      },
      "missing-examples": {
        "h2": "Exemplos passo a passo para encontrar ângulos ausentes",
        "blocks": [
          {
            "kind": "p",
            "text": "Esses quatro exemplos desenvolvem a habilidade central antes das aplicações do mundo real. Cada um segue o mesmo padrão: escreva a fórmula, substitua, subtraia."
          },
          {
            "kind": "h3",
            "text": "Exemplo 1: um ângulo conhecido de 35 graus"
          },
          {
            "kind": "p",
            "text": "Dado [[A=35^\\circ]], encontre o ângulo [[B]]."
          },
          {
            "kind": "p",
            "text": "Passo 1: escreva a fórmula. [[B=90^\\circ-A]]"
          },
          {
            "kind": "p",
            "text": "Passo 2: substitua o ângulo conhecido. [[B=90^\\circ-35^\\circ]]"
          },
          {
            "kind": "p",
            "text": "Passo 3: subtraia. [[B=55^\\circ]]"
          },
          {
            "kind": "p",
            "text": "Conferência: [[35^\\circ+55^\\circ=90^\\circ]]. A resposta é válida porque os dois ângulos agudos totalizam exatamente 90 graus e cada um fica estritamente entre 0 e 90 graus."
          },
          {
            "kind": "h3",
            "text": "Exemplo 2: um ângulo conhecido de 20 graus"
          },
          {
            "kind": "p",
            "text": "Dado [[A=20^\\circ]]:"
          },
          {
            "kind": "p",
            "text": "[[B=90^\\circ-20^\\circ=70^\\circ]]"
          },
          {
            "kind": "p",
            "text": "Um ângulo agudo menor produz um ângulo complementar maior. Como o par precisa sempre totalizar 90 graus, cada grau retirado de um ângulo é somado ao outro. Aqui, o ângulo de 20 graus deixa generosos 70 graus para o seu par."
          },
          {
            "kind": "h3",
            "text": "Exemplo 3: um triângulo retângulo isósceles"
          },
          {
            "kind": "p",
            "text": "Dado [[A=45^\\circ]]:"
          },
          {
            "kind": "p",
            "text": "[[B=90^\\circ-45^\\circ=45^\\circ]]"
          },
          {
            "kind": "p",
            "text": "Os dois ângulos agudos são iguais, 45 graus cada. Este é o triângulo retângulo isósceles, o único triângulo retângulo cujos ângulos agudos coincidem. Seus dois catetos também são iguais em comprimento, e é por isso que o triângulo 45-45-90 aparece com tanta frequência em desenhos técnicos e em layouts de construção."
          },
          {
            "kind": "h3",
            "text": "Exemplo 4: um ângulo conhecido de 68.5 graus"
          },
          {
            "kind": "p",
            "text": "Dado [[A=68.5^\\circ]]:"
          },
          {
            "kind": "p",
            "text": "[[B=90^\\circ-68.5^\\circ=21.5^\\circ]]"
          },
          {
            "kind": "p",
            "text": "Um ângulo agudo relativamente grande tem um complemento relativamente pequeno. A entrada decimal funciona exatamente como a entrada de número inteiro: subtraia com cuidado, mantendo o .5 alinhado, e 90 menos 68.5 dá 21.5. A conferência continua válida: [[68.5^\\circ+21.5^\\circ=90^\\circ]]."
          }
        ]
      },
      "missing-applications": {
        "h2": "Aplicações reais dos ângulos ausentes",
        "blocks": [
          {
            "kind": "p",
            "text": "Um ponto precisa de cuidado antes de os exemplos começarem. A fórmula do ângulo ausente se aplica diretamente quando dois ângulos pertencem ao mesmo triângulo retângulo. Em situações práticas, uma superfície horizontal e uma superfície vertical costumam servir como linhas de referência perpendiculares, e um componente diagonal como uma escada ou uma tesoura forma a hipotenusa. Os exemplos abaixo declaram essa suposição onde quer que ela seja usada."
          },
          {
            "kind": "h3",
            "text": "Exemplo 5: encontrando o ângulo de uma tesoura de telhado com a vertical"
          },
          {
            "kind": "p",
            "text": "Uma tesoura de telhado forma um ângulo de [[35^\\circ]] com a horizontal. Encontre o ângulo entre a mesma tesoura e uma linha vertical de referência."
          },
          {
            "kind": "p",
            "text": "Dado [[A=35^\\circ]] medido a partir da horizontal."
          },
          {
            "kind": "p",
            "text": "[[B=90^\\circ-35^\\circ=55^\\circ]]"
          },
          {
            "kind": "p",
            "text": "As linhas de referência horizontal e vertical são perpendiculares, então os dois ângulos são complementares. O resultado de 55 graus é o ângulo em relação à vertical, não um cálculo completo de inclinação de telhado ou estrutural."
          },
          {
            "kind": "h3",
            "text": "Exemplo 6: encontrando o ângulo de uma escada com uma parede"
          },
          {
            "kind": "p",
            "text": "Uma escada apoiada em uma parede vertical forma um ângulo de [[68^\\circ]] com o chão nivelado. Encontre o ângulo entre a escada e a parede."
          },
          {
            "kind": "p",
            "text": "[[B=90^\\circ-68^\\circ=22^\\circ]]"
          },
          {
            "kind": "p",
            "text": "O chão e a parede formam um ângulo reto neste modelo idealizado, com a escada como hipotenusa. O ângulo de 22 graus descreve a orientação da escada em relação à parede. Só o cálculo não estabelece se a escada está posicionada com segurança."
          },
          {
            "kind": "h3",
            "text": "Exemplo 7: entendendo o ângulo de uma rampa com a vertical"
          },
          {
            "kind": "p",
            "text": "Uma rampa reta forma um ângulo de [[8^\\circ]] com a horizontal. Encontre o ângulo complementar entre a direção da rampa e uma linha vertical de referência."
          },
          {
            "kind": "p",
            "text": "[[B=90^\\circ-8^\\circ=82^\\circ]]"
          },
          {
            "kind": "p",
            "text": "O ângulo da rampa com a vertical é o complemento do seu ângulo com a horizontal. Uma inclinação rasa de 8 graus deixa um ângulo íngreme de 82 graus contra a vertical. Só esse ângulo não determina acessibilidade nem conformidade com normas."
          },
          {
            "kind": "h3",
            "text": "Exemplo 8: encontrando o ângulo complementar de uma viga de escada"
          },
          {
            "kind": "p",
            "text": "A viga inclinada de uma escada, a peça diagonal que sustenta os degraus, forma um ângulo de [[32^\\circ]] com o piso. Calcule seu ângulo em relação a uma linha vertical de referência."
          },
          {
            "kind": "p",
            "text": "[[B=90^\\circ-32^\\circ=58^\\circ]]"
          },
          {
            "kind": "p",
            "text": "O piso, a referência vertical e a viga diagonal formam o triângulo retângulo. O resultado de 58 graus descreve a orientação da viga contra a vertical. Ele não verifica as dimensões da escada nem a conformidade com o código de obras."
          },
          {
            "kind": "h3",
            "text": "Exemplo 9: calculando o ângulo de um contraventamento diagonal com um suporte vertical"
          },
          {
            "kind": "p",
            "text": "Um contraventamento diagonal forma um ângulo de [[40^\\circ]] com uma viga horizontal. Encontre o ângulo entre o contraventamento e um suporte vertical perpendicular."
          },
          {
            "kind": "p",
            "text": "[[B=90^\\circ-40^\\circ=50^\\circ]]"
          },
          {
            "kind": "p",
            "text": "As duas direções de referência precisam ser perpendiculares para que a regra do complemento se aplique. O ângulo de 50 graus é um resultado de geometria pura; ele não determina a resistência estrutural do contraventamento."
          },
          {
            "kind": "h3",
            "text": "Exemplo 10: encontrando o ângulo de um cabo estai com um poste vertical"
          },
          {
            "kind": "p",
            "text": "Um cabo estai forma um ângulo de [[30^\\circ]] com o chão nivelado. Encontre o ângulo entre o cabo e um poste vertical."
          },
          {
            "kind": "p",
            "text": "[[B=90^\\circ-30^\\circ=60^\\circ]]"
          },
          {
            "kind": "p",
            "text": "O chão horizontal e o poste vertical definem o ângulo reto, com o cabo como hipotenusa. O resultado de 60 graus reformula a mesma direção do cabo contra a referência vertical. Ele não estabelece a tensão do cabo nem a segurança da ancoragem."
          },
          {
            "kind": "h3",
            "text": "Exemplo 11: convertendo um ângulo de elevação para seu complemento"
          },
          {
            "kind": "p",
            "text": "Um diagrama topográfico registra uma linha de visada com um ângulo de elevação de [[24^\\circ]] acima da horizontal. Calcule seu ângulo complementar em relação à vertical."
          },
          {
            "kind": "p",
            "text": "[[B=90^\\circ-24^\\circ=66^\\circ]]"
          },
          {
            "kind": "p",
            "text": "Um ângulo medido a partir da horizontal e um ângulo medido a partir da vertical descrevem a mesma linha de visada a partir de pontos de vista perpendiculares. O exemplo supõe uma linha de visada reta com referências horizontal e vertical perpendiculares."
          },
          {
            "kind": "h3",
            "text": "Exemplo 12: encontrando o ângulo de uma inclinação de telhado com uma referência vertical"
          },
          {
            "kind": "p",
            "text": "A inclinação de um telhado é medida em [[27^\\circ]] em relação à horizontal. Encontre seu ângulo complementar com a vertical."
          },
          {
            "kind": "p",
            "text": "[[B=90^\\circ-27^\\circ=63^\\circ]]"
          },
          {
            "kind": "p",
            "text": "As duas medidas descrevem a mesma inclinação a partir de diferentes direções de referência perpendiculares. Nenhuma das medidas sozinha é uma avaliação estrutural."
          },
          {
            "kind": "h3",
            "text": "Exemplo 13: uma diagonal em um layout quadrado de desenho"
          },
          {
            "kind": "p",
            "text": "Uma linha diagonal em um layout quadrado de desenho forma um ângulo de [[45^\\circ]] com um lado. Encontre o ângulo que ela forma com o lado perpendicular adjacente."
          },
          {
            "kind": "p",
            "text": "[[B=90^\\circ-45^\\circ=45^\\circ]]"
          },
          {
            "kind": "p",
            "text": "A diagonal divide ao meio o ângulo reto do quadrado, então os dois ângulos resultantes são de 45 graus. Essa relação ajuda em verificações básicas de desenho e layout: se uma diagonal medida não divide o canto de modo uniforme, o layout não está quadrado."
          },
          {
            "kind": "h3",
            "text": "Exemplo 14: encontrando o ângulo complementar de um painel de máquina"
          },
          {
            "kind": "p",
            "text": "Um painel está inclinado [[15^\\circ]] para longe da horizontal. Calcule o ângulo entre a orientação do painel e a direção vertical de referência."
          },
          {
            "kind": "p",
            "text": "[[B=90^\\circ-15^\\circ=75^\\circ]]"
          },
          {
            "kind": "p",
            "text": "As referências horizontal e vertical são perpendiculares, então a inclinação do painel e seu complemento descrevem a mesma orientação. O resultado descreve apenas a orientação, não a segurança ou o desempenho da máquina."
          },
          {
            "kind": "h3",
            "text": "Exemplo 15: convertendo um ângulo de observação de uma árvore"
          },
          {
            "kind": "p",
            "text": "Uma pessoa olha para o topo de uma árvore com um ângulo de elevação de [[38^\\circ]] acima da horizontal. Encontre o ângulo complementar entre a linha de visada e uma direção vertical de referência."
          },
          {
            "kind": "p",
            "text": "[[B=90^\\circ-38^\\circ=52^\\circ]]"
          },
          {
            "kind": "p",
            "text": "O cálculo muda a direção de referência, não a linha de visada em si. O ângulo de 52 graus é simplesmente o mesmo olhar medido contra a vertical. Ele não calcula a altura da árvore."
          },
          {
            "kind": "h3",
            "text": "Exemplo 16: encontrando o ângulo de um corrimão com um suporte vertical"
          },
          {
            "kind": "p",
            "text": "Um corrimão diagonal forma um ângulo de [[55^\\circ]] com um patamar horizontal. Encontre seu ângulo complementar em relação a uma linha vertical de suporte."
          },
          {
            "kind": "p",
            "text": "[[B=90^\\circ-55^\\circ=35^\\circ]]"
          },
          {
            "kind": "p",
            "text": "O ângulo complementar descreve a mesma orientação diagonal a partir de uma referência diferente. Um ângulo íngreme de 55 graus contra a horizontal vira um ângulo raso de 35 graus contra a vertical. Só o ângulo não verifica acessibilidade nem requisitos construtivos."
          },
          {
            "kind": "h3",
            "text": "Comparação prática dos exemplos"
          }
        ],
        "table": {
          "headers": [
            "Situação",
            "Ângulo conhecido",
            "Direção de referência",
            "Ângulo ausente",
            "Cálculo",
            "Interpretação"
          ],
          "rows": [
            [
              "Tesoura de telhado",
              "35°",
              "Horizontal",
              "55°",
              "90 - 35",
              "Ângulo da tesoura com a vertical"
            ],
            [
              "Escada",
              "68°",
              "Chão",
              "22°",
              "90 - 68",
              "Ângulo da escada com a parede"
            ],
            [
              "Rampa",
              "8°",
              "Horizontal",
              "82°",
              "90 - 8",
              "Direção da rampa em relação à vertical"
            ],
            [
              "Viga de escada",
              "32°",
              "Piso",
              "58°",
              "90 - 32",
              "Ângulo da viga com a vertical"
            ],
            [
              "Contraventamento diagonal",
              "40°",
              "Viga horizontal",
              "50°",
              "90 - 40",
              "Ângulo do contraventamento com o suporte vertical"
            ],
            [
              "Cabo estai",
              "30°",
              "Chão",
              "60°",
              "90 - 30",
              "Ângulo do cabo com o poste"
            ],
            [
              "Linha de visada topográfica",
              "24°",
              "Horizontal",
              "66°",
              "90 - 24",
              "Linha de visada em relação à vertical"
            ],
            [
              "Inclinação de telhado",
              "27°",
              "Horizontal",
              "63°",
              "90 - 27",
              "Ângulo da inclinação com a vertical"
            ],
            [
              "Diagonal de desenho",
              "45°",
              "Um lado",
              "45°",
              "90 - 45",
              "Diagonal com o lado adjacente"
            ],
            [
              "Painel de máquina",
              "15°",
              "Horizontal",
              "75°",
              "90 - 15",
              "Orientação do painel em relação à vertical"
            ],
            [
              "Observação da árvore",
              "38°",
              "Horizontal",
              "52°",
              "90 - 38",
              "Linha de visada em relação à vertical"
            ],
            [
              "Corrimão",
              "55°",
              "Patamar",
              "35°",
              "90 - 55",
              "Corrimão com o suporte vertical"
            ]
          ]
        }
      },
      "missing-relationship": {
        "h2": "Entendendo a relação entre ângulos complementares",
        "blocks": [
          {
            "kind": "p",
            "text": "O padrão é perfeitamente previsível. Se o ângulo [[A]] aumenta, o ângulo [[B]] diminui exatamente na mesma medida, porque o total deles está travado em 90 graus. Se [[A]] diminui, [[B]] cresce para preencher a diferença. Em [[A=45^\\circ]], os dois se encontram no meio, e nenhum ângulo agudo pode chegar a [[0^\\circ]] ou a [[90^\\circ]] em um triângulo retângulo genuíno com três vértices distintos."
          }
        ],
        "table": {
          "headers": [
            "Ângulo conhecido A",
            "Fórmula",
            "Ângulo ausente B"
          ],
          "rows": [
            [
              "10°",
              "90 - 10",
              "80°"
            ],
            [
              "20°",
              "90 - 20",
              "70°"
            ],
            [
              "30°",
              "90 - 30",
              "60°"
            ],
            [
              "45°",
              "90 - 45",
              "45°"
            ],
            [
              "60°",
              "90 - 60",
              "30°"
            ],
            [
              "75°",
              "90 - 75",
              "15°"
            ],
            [
              "80°",
              "90 - 80",
              "10°"
            ]
          ]
        },
        "closingParagraphs": [
          "A tabela é simétrica em torno de 45 graus: os pares (10, 80), (20, 70) e (30, 60) se espelham porque trocar o ângulo conhecido pelo ângulo ausente é apenas ler a mesma relação complementar pelo outro lado. Os quatro painéis abaixo tornam essa troca visual."
        ],
        "imgAlt": "Quatro triângulos mostrando pares complementares 20-70, 30-60, 45-45, 70-20 graus",
        "figcaption": "À medida que o ângulo A cresce, o ângulo B encolhe na mesma medida; a soma deles continua 90 graus."
      },
      "missing-reverse": {
        "h2": "E se você conhecer o ângulo B?",
        "blocks": [
          {
            "kind": "p",
            "text": "A mesma regra dos ângulos complementares funciona ao contrário. Se o ângulo [[B]] for o conhecido, resolva a relação para [[A]]:"
          },
          {
            "kind": "p",
            "text": "[[[A=90^\\circ-B]]]"
          },
          {
            "kind": "p",
            "text": "Nenhuma fórmula nova é necessária; é a equação idêntica com os papéis trocados."
          },
          {
            "kind": "h3",
            "text": "Exemplo resolvido"
          },
          {
            "kind": "p",
            "text": "Dado [[B=62^\\circ]]:"
          },
          {
            "kind": "p",
            "text": "[[A=90^\\circ-62^\\circ=28^\\circ]]"
          },
          {
            "kind": "p",
            "text": "Mais três exemplos curtos na direção inversa seguem o mesmo passo:"
          }
        ],
        "list": [
          "[[B=15^\\circ]], então [[A=90^\\circ-15^\\circ=75^\\circ]].",
          "[[B=42^\\circ]], então [[A=90^\\circ-42^\\circ=48^\\circ]].",
          "[[B=70^\\circ]], então [[A=90^\\circ-70^\\circ=20^\\circ]]."
        ],
        "closingParagraphs": [
          "Uma observação prática: o campo de entrada desta calculadora aceita o ângulo [[A]] e devolve o ângulo [[B]]. Quem conhece apenas o ângulo [[B]] deve aplicar a fórmula inversa à mão, a menos que se verifique que a interface permite digitar [[B]] diretamente."
        ]
      },
      "missing-vs": {
        "h2": "Ângulos complementares x ângulos suplementares",
        "blocks": [
          {
            "kind": "p",
            "text": "Os dois termos soam parecidos e ambos descrevem pares de ângulos, mas respondem a perguntas diferentes."
          },
          {
            "kind": "h3",
            "text": "Ângulos complementares"
          },
          {
            "kind": "p",
            "text": "Dois ângulos são complementares quando sua soma é [[90^\\circ]]. Os dois ângulos agudos de um triângulo retângulo são o exemplo clássico: eles precisam ser complementares porque o ângulo reto já toma os outros 90 graus do total do triângulo."
          },
          {
            "kind": "h3",
            "text": "Ângulos suplementares"
          },
          {
            "kind": "p",
            "text": "Dois ângulos são suplementares quando sua soma é [[180^\\circ]]. Uma linha reta, por exemplo, pode ser dividida em dois ângulos suplementares. Pares suplementares nunca devem ser confundidos com os dois ângulos agudos de um triângulo retângulo, que somam 90, não 180."
          }
        ],
        "table": {
          "headers": [
            "Relação",
            "Total",
            "Exemplo"
          ],
          "rows": [
            [
              "Complementar",
              "90°",
              "35 + 55"
            ],
            [
              "Suplementar",
              "180°",
              "110 + 70"
            ],
            [
              "Ângulo reto",
              "90°",
              "O ângulo fixo em um triângulo retângulo"
            ]
          ]
        },
        "closingParagraphs": [
          "A soma completa dos ângulos do triângulo é de 180 graus, mas os dois ângulos agudos juntos somam 90 graus. Manter esses dois totais separados é a chave para evitar o erro mais comum desta página."
        ],
        "imgAlt": "Quatro painéis mostrando ângulos complementares em uma escada, uma tesoura de telhado, um contraventamento e a diagonal de um quadrado",
        "figcaption": "Pares complementares em situações reais: cada ângulo conhecido determina seu par."
      },
      "missing-mistakes": {
        "h2": "Erros comuns ao encontrar um ângulo ausente",
        "steps": [
          "<strong>Subtrair o ângulo conhecido de 180 graus em vez de 90.</strong> O total de 180 graus inclui o ângulo reto, que já está fixo. O que dá errado: com [[A=35^\\circ]], a conta errada dá 145 graus, um ângulo agudo impossível. Correção: subtraia de 90, obtendo [[55^\\circ]].",
          "<strong>Esquecer que um ângulo já é de 90 graus.</strong> O ângulo reto é fácil de ignorar porque não precisa de cálculo. O que dá errado: tratar o triângulo como se os três ângulos fossem desconhecidos. Correção: lembre-se de que o ângulo reto toma metade do total de 180 graus antes de você começar.",
          "<strong>Digitar 90 graus na calculadora.</strong> A ferramenta espera um ângulo agudo estritamente entre 0 e 90 graus. O que dá errado: uma entrada de 90 graus não deixa espaço para um segundo ângulo agudo. Correção: digite apenas o ângulo agudo conhecido.",
          "<strong>Digitar um ângulo maior que 90 graus.</strong> Nenhum ângulo agudo passa de 90 graus por definição. O que dá errado: a subtração resulta em um valor negativo, que não tem significado geométrico aqui. Correção: confira se a entrada está abaixo de 90 graus.",
          "<strong>Digitar 0 grau.</strong> Um ângulo zero achata o triângulo em um segmento de linha. O que dá errado: o resultado afirma um complemento de 90 graus para uma figura sem área. Correção: use apenas ângulos agudos positivos.",
          "<strong>Confundir ângulos complementares com ângulos suplementares.</strong> Pares complementares somam 90 graus; pares suplementares somam 180. O que dá errado: subtrair de 180 produz o erro do item 1. Correção: combine a palavra ao total, complementar com 90.",
          "<strong>Achar que os dois ângulos agudos precisam ser iguais.</strong> A igualdade só vale com 45 graus cada. O que dá errado: esperar simetria em um triângulo 20-70. Correção: deixe a subtração decidir; a maioria dos pares difere.",
          "<strong>Trocar os rótulos dos ângulos A e B.</strong> A calculadora recebe [[A]] e devolve [[B]]. O que dá errado: digitar o complemento já conhecido como se fosse a entrada. Correção: rotule o ângulo conhecido como A antes de digitar qualquer coisa.",
          "<strong>Achar que comprimentos de lados são necessários para este cálculo em particular.</strong> Lados importam para trigonometria, não para complementos. O que dá errado: travar em um problema que precisa só de subtração. Correção: se um ângulo agudo é conhecido, subtraia-o de 90 e pronto.",
          "<strong>Usar seno, cosseno ou tangente inversos quando a simples subtração basta.</strong> Funções inversas respondem a uma pergunta mais difícil. O que dá errado: trabalho extra e mais chances de erros de modo. Correção: quando um ângulo é conhecido, a <a href=\"/right-triangle-angle-from-sine-calculator/\" class=\"text-primary hover:underline\">calculadora de ângulo a partir do seno</a> e suas equivalentes são as ferramentas erradas; a subtração é exata e imediata.",
          "<strong>Achar que um ângulo físico medido forma automaticamente um triângulo retângulo sem conferir as direções de referência.</strong> Cantos reais raramente são perfeitos. O que dá errado: aplicar a regra do complemento onde o canto de 90 graus não existe de fato. Correção: verifique se as direções de referência são perpendiculares antes de subtrair.",
          "<strong>Arredondar uma medida de entrada sem necessidade antes de subtrair.</strong> Arredondar cedo joga fora precisão que a entrada de fato tinha. O que dá errado: 68.5 arredondado para 69 dá 21 em vez de 21.5. Correção: subtraia com o valor medido completo e só depois arredonde o resultado para acompanhar a precisão da entrada."
        ],
        "blocks": [
          {
            "kind": "h3",
            "text": "Errado x correto"
          },
          {
            "kind": "p",
            "text": "Dado [[A=35^\\circ]]:"
          },
          {
            "kind": "p",
            "text": "Incorreto: [[180^\\circ-35^\\circ=145^\\circ]]. Este não é o ângulo agudo ausente porque o ângulo reto não foi contabilizado; 145 graus não cabem dentro de um triângulo retângulo junto com um canto de 90 graus."
          },
          {
            "kind": "p",
            "text": "Correto: [[90^\\circ-35^\\circ=55^\\circ]]."
          },
          {
            "kind": "p",
            "text": "Verificação: [[35^\\circ+55^\\circ+90^\\circ=180^\\circ]]. A soma completa dos ângulos confirma a resposta."
          }
        ]
      },
      "missing-verify": {
        "h2": "Como conferir se seu ângulo ausente é válido",
        "blocks": [
          {
            "kind": "p",
            "text": "A faixa de entrada válida é:"
          },
          {
            "kind": "p",
            "text": "[[[0^\\circ \\lt A \\lt 90^\\circ]]]"
          },
          {
            "kind": "p",
            "text": "e o ângulo calculado precisa satisfazer a mesma faixa:"
          },
          {
            "kind": "p",
            "text": "[[[0^\\circ \\lt B \\lt 90^\\circ]]]"
          },
          {
            "kind": "p",
            "text": "Uma entrada de 0 ou 90 graus produziria um caso-limite degenerado em vez de um triângulo retângulo comum com três vértices distintos e lados positivos. A calculadora impõe a desigualdade estrita exatamente por isso."
          },
          {
            "kind": "h3",
            "text": "Método 1: some os ângulos agudos"
          },
          {
            "kind": "p",
            "text": "Confira [[A+B=90^\\circ]]. Exemplo: [[35^\\circ+55^\\circ=90^\\circ]]. Esta é a conferência mais rápida e pega o erro dos 180 graus de imediato."
          },
          {
            "kind": "h3",
            "text": "Método 2: confira o triângulo completo"
          },
          {
            "kind": "p",
            "text": "Confira [[A+B+90^\\circ=180^\\circ]]. Exemplo: [[35^\\circ+55^\\circ+90^\\circ=180^\\circ]]. Isso confirma a resposta contra a soma universal dos ângulos do triângulo."
          },
          {
            "kind": "h3",
            "text": "Método 3: confira o cálculo inverso"
          },
          {
            "kind": "p",
            "text": "Se [[B=90^\\circ-A]], então [[A=90^\\circ-B]] precisa recuperar a entrada original. Com [[A=35^\\circ]] dando [[B=55^\\circ]], a conferência inversa é [[90^\\circ-55^\\circ=35^\\circ]]. Essa conferência de consistência não precisa de nenhuma medida de lado."
          },
          {
            "kind": "p",
            "text": "Uma ressalva: se o ângulo de entrada vem de uma medição física, sua incerteza se transmite ao resultado. Um 35 graus medido de forma aproximada produz um 55 graus conhecido de forma aproximada; apresente a resposta com precisão que acompanhe a medição. Para conferências que envolvam comprimentos de lados, a <a href=\"/pythagorean-theorem-calculator/\" class=\"text-primary hover:underline\">calculadora do teorema de Pitágoras</a> pode confirmar a geometria do triângulo de modo independente."
          }
        ]
      },
      "missing-choose": {
        "h2": "Escolhendo a calculadora certa de triângulo retângulo",
        "blocks": [
          {
            "kind": "p",
            "text": "Cada ferramenta abaixo responde a uma pergunta diferente. Combine a ferramenta com o que você de fato sabe:"
          }
        ],
        "list": [
          "<strong>Calculadora de ângulo ausente de triângulo retângulo</strong> (esta página): encontra o ângulo complementar quando um ângulo agudo já é conhecido. Use-a sempre que a entrada for um ângulo, não um lado.",
          "<a href=\"/right-triangle-angle-from-sine-calculator/\" class=\"text-primary hover:underline\"><strong>Calculadora de ângulo de triângulo retângulo a partir do seno</strong></a>: encontra um ângulo agudo a partir do lado oposto e da hipotenusa. Use-a quando esses dois comprimentos foram medidos.",
          "<a href=\"/right-triangle-angle-from-cosine-calculator/\" class=\"text-primary hover:underline\"><strong>Calculadora de ângulo de triângulo retângulo a partir do cosseno</strong></a>: encontra um ângulo agudo a partir do lado adjacente e da hipotenusa.",
          "<a href=\"/right-triangle-angle-from-tangent-calculator/\" class=\"text-primary hover:underline\"><strong>Calculadora de ângulo de triângulo retângulo a partir da tangente</strong></a>: encontra um ângulo agudo a partir dos lados oposto e adjacente, os dois catetos.",
          "<a href=\"/right-triangle-side-from-sine-calculator/\" class=\"text-primary hover:underline\"><strong>Calculadora de lado de triângulo retângulo a partir do seno</strong></a>: encontra um comprimento de lado ausente quando um ângulo e um lado são conhecidos.",
          "<a href=\"/right-triangle-side-from-cosine-calculator/\" class=\"text-primary hover:underline\"><strong>Calculadora de lado de triângulo retângulo a partir do cosseno</strong></a>: encontra um comprimento de lado ausente a partir de um ângulo e da hipotenusa ou do lado adjacente.",
          "<a href=\"/right-triangle-side-from-tangent-calculator/\" class=\"text-primary hover:underline\"><strong>Calculadora de lado de triângulo retângulo a partir da tangente</strong></a>: encontra um cateto ausente a partir de um ângulo conhecido e do outro cateto."
        ],
        "closingParagraphs": [
          "A regra de decisão é simples. Você conhece um ângulo agudo: use a calculadora de ângulo ausente desta página. Você conhece dois comprimentos de lado adequados: use a calculadora trigonométrica inversa correspondente. Você precisa de um lado desconhecido: use uma calculadora de lados. E você precisa do segundo ângulo depois de um cálculo trigonométrico: subtraia o ângulo conhecido de 90 graus, que é exatamente o que esta página automatiza."
        ]
      },
      "missing-faq": {
        "h2": "Perguntas frequentes",
        "blocks": []
      },
      "missing-related": {
        "h2": "Explore calculadoras de triângulo relacionadas",
        "blocks": []
      },
      "missing-conclusion": {
        "h2": "Encontre qualquer ângulo ausente com confiança",
        "blocks": [
          {
            "kind": "p",
            "text": "O cálculo do ângulo ausente é a operação mais simples da geometria do triângulo retângulo: subtraia o ângulo agudo conhecido de 90 graus. Por trás dessa subtração está a regra da soma dos ângulos do triângulo, que reserva metade de todo total de triângulo para o ângulo reto e deixa a outra metade para o par complementar. Seja o ângulo conhecido vindo de uma tesoura de telhado, de uma escada, de uma viga de escada ou de um layout de desenho, o método nunca muda: confirme o ângulo reto, subtraia de 90 e confira se os dois ângulos agudos totalizam 90 graus. Guarde esta página nos favoritos para os momentos em que um ângulo já for conhecido e só faltar o seu par."
          }
        ]
      }
    },
    "faqs": [
      {
        "question": "Como encontrar um ângulo ausente em um triângulo retângulo?",
        "answer": "Subtraia o ângulo agudo conhecido de 90 graus. A fórmula é B = 90 - A, em que A é o ângulo que você conhece e B é o ausente. Por exemplo, se A é 35 graus, então B = 90 - 35 = 55 graus. Não são necessários comprimentos de lados nem funções trigonométricas."
      },
      {
        "question": "Por que os dois ângulos agudos somam 90 graus?",
        "answer": "Todo triângulo contém 180 graus no total. Um triângulo retângulo reserva 90 desses graus para o seu ângulo reto, o que deixa exatamente 90 graus para serem divididos entre os dois ângulos agudos restantes. É por isso que A + B sempre é igual a 90 graus em um triângulo retângulo."
      },
      {
        "question": "Qual é a fórmula para um ângulo ausente?",
        "answer": "A fórmula é B = 90 - A. Parta da soma dos ângulos do triângulo A + B + 90 = 180, subtraia 90 dos dois lados para obter A + B = 90 e depois subtraia A dos dois lados. A forma inversa, A = 90 - B, funciona do mesmo jeito quando B é o ângulo conhecido."
      },
      {
        "question": "O que são ângulos complementares?",
        "answer": "Dois ângulos são complementares quando suas medidas somam 90 graus. Os pares 30 e 60, 35 e 55, e 45 e 45 são todos complementares. Em todo triângulo retângulo, os dois ângulos agudos são complementares por definição, que é exatamente o que a fórmula do ângulo ausente expressa."
      },
      {
        "question": "Posso encontrar o ângulo ausente sem conhecer os comprimentos dos lados?",
        "answer": "Sim. Quando um ângulo agudo é conhecido, os comprimentos dos lados são irrelevantes para este cálculo. A relação dos ângulos complementares depende apenas da soma dos ângulos, então subtrair de 90 graus dá a resposta exata. Comprimentos de lados só importam quando nenhum ângulo ainda é conhecido."
      },
      {
        "question": "Qual é a diferença entre ângulos complementares e suplementares?",
        "answer": "Ângulos complementares somam 90 graus; ângulos suplementares somam 180 graus. Os dois ângulos agudos de um triângulo retângulo são complementares. Um erro comum é subtrair o ângulo conhecido de 180 em vez de 90, o que esquece que o ângulo reto já responde por metade do total do triângulo."
      },
      {
        "question": "Os dois ângulos agudos podem ser iguais?",
        "answer": "Sim, quando cada um mede 45 graus. Então 90 - 45 = 45, e o triângulo é um triângulo retângulo isósceles com dois catetos iguais. Este é o único caso em que os dois ângulos agudos coincidem; em todo outro triângulo retângulo eles diferem."
      },
      {
        "question": "O que acontece se o ângulo conhecido for de 35 graus?",
        "answer": "O ângulo ausente é 90 - 35 = 55 graus. Você pode conferi-lo de dois jeitos: 35 + 55 = 90 confirma o par complementar, e 35 + 55 + 90 = 180 confirma a soma completa dos ângulos do triângulo. As duas conferências devem sempre concordar."
      },
      {
        "question": "O que acontece se o ângulo conhecido for maior que 45 graus?",
        "answer": "O ângulo ausente sai menor que 45 graus, porque os dois ainda precisam totalizar 90. Por exemplo, se A é 68 graus, então B = 90 - 68 = 22 graus. À medida que o ângulo conhecido cresce em direção a 90, seu complemento encolhe em direção a 0."
      },
      {
        "question": "Um ângulo agudo ausente pode ser exatamente 0 ou 90 graus?",
        "answer": "Não em um triângulo retângulo comum. Uma entrada de 0 ou 90 graus descreve um caso-limite degenerado sem área triangular real, não um triângulo com três vértices distintos. A calculadora exige que o ângulo conhecido fique estritamente entre 0 e 90 graus, e o resultado sempre cai na mesma faixa."
      },
      {
        "question": "Como encontro o ângulo A quando o ângulo B é conhecido?",
        "answer": "Use a fórmula inversa A = 90 - B. É a mesma relação complementar resolvida para a outra variável. Por exemplo, se B é 62 graus, então A = 90 - 62 = 28 graus. Note que esta calculadora aceita o ângulo A como entrada, então aplique a fórmula inversa à mão quando só B for conhecido."
      },
      {
        "question": "Quando devo usar uma calculadora de seno, cosseno ou tangente?",
        "answer": "Use uma calculadora trigonométrica inversa quando nenhum ângulo ainda é conhecido, mas dois comprimentos de lado são. A calculadora de ângulo a partir do seno precisa do lado oposto e da hipotenusa, a calculadora de ângulo a partir do cosseno precisa do lado adjacente e da hipotenusa, e a calculadora de ângulo a partir da tangente precisa dos dois catetos. Quando qualquer ângulo agudo for conhecido, a calculadora de ângulo ausente termina o trabalho."
      }
    ],
    "relatedHeading": "Explore calculadoras de triângulo relacionadas",
    "relatedItems": [
      "Calculadora de ângulo de triângulo retângulo a partir do seno",
      "Calculadora de ângulo de triângulo retângulo a partir do cosseno",
      "Calculadora de ângulo de triângulo retângulo a partir da tangente",
      "Calculadora de lado de triângulo retângulo a partir do seno",
      "Calculadora de lado de triângulo retângulo a partir do cosseno",
      "Calculadora de lado de triângulo retângulo a partir da tangente"
    ]
  },
  "bn": {
    "tocHeading": "এই নির্দেশিকায়",
    "tocItems": {
      "missing-intro": "সমকোণী ত্রিভুজে অনুপস্থিত কোণ কীভাবে নির্ণয় করবেন",
      "missing-angles": "সমকোণী ত্রিভুজের কোণগুলো কী?",
      "missing-formula": "অনুপস্থিত কোণ নির্ণয়ের সূত্র",
      "missing-howto": "ক্যালকুলেটর কীভাবে ব্যবহার করবেন",
      "missing-examples": "ধাপে ধাপে উদাহরণ",
      "missing-applications": "বাস্তব জীবনে প্রয়োগ",
      "missing-relationship": "পূরক কোণগুলো কীভাবে বদলায়",
      "missing-reverse": "আপনি যদি কোণ B জানেন?",
      "missing-vs": "পূরক বনাম সম্পূরক কোণ",
      "missing-mistakes": "সাধারণ ভুল",
      "missing-verify": "আপনার উত্তর যাচাই",
      "missing-choose": "সঠিক ক্যালকুলেটর বেছে নেওয়া",
      "missing-faq": "প্রায়শই জিজ্ঞাসিত প্রশ্ন",
      "missing-related": "সম্পর্কিত ক্যালকুলেটর"
    },
    "sections": {
      "missing-intro": {
        "h2": "সমকোণী ত্রিভুজে অনুপস্থিত কোণ কীভাবে নির্ণয় করবেন",
        "blocks": [
          {
            "kind": "p",
            "text": "যদি সমকোণী ত্রিভুজের একটি সূক্ষ্মকোণ [[35^\\circ]] হয়, তবে অনুপস্থিত কোণটি [[90^\\circ-35^\\circ=55^\\circ]]। এই একটি বিয়োগই পুরো গণনা। সমকোণী ত্রিভুজে সবসময় একটি 90 ডিগ্রি কোণ থাকে, তাই বাকি দুটি কোণকে অবশ্যই বেঁচে থাকা ঠিক 90 ডিগ্রি ভাগ করে নিতে হয়। জানা কোণটিকে 90 ডিগ্রি থেকে বিয়োগ করলেই অনুপস্থিত কোণটি বেরিয়ে আসে, কোনো বাহুর দৈর্ঘ্য বা ত্রিকোণমিতিক ফাংশন ছাড়াই।"
          },
          {
            "kind": "p",
            "text": "উত্তর, এই ক্ষেত্রে 55 ডিগ্রি, একই সমকোণী ত্রিভুজের অন্য সূক্ষ্মকোণটিকে বোঝায়। দুটি কোণ সবসময় জোড়া হিসেবে কাজ করে: যেকোনো একটিকে জানলেই অন্যটি সম্পূর্ণ নির্ধারিত হয়ে যায়। এই ক্যালকুলেটর ঠিক সেই পরিস্থিতির জন্য, যখন একটি কোণ ইতিমধ্যে জানা এবং শুধু তার পূরক কোণটি অনুপস্থিত। যখন এখনো কোনো কোণ জানা নেই, তখন একটি <a href=\"/right-triangle-angle-from-tangent-calculator/\" class=\"text-primary hover:underline\">ট্যানজেন্ট থেকে কোণ ক্যালকুলেটর</a> বা এর সাইন ও কোসাইন প্রতিরূপগুলো পরিমাপ করা বাহু থেকে প্রথম কোণটি বের করে দেয়।"
          }
        ]
      },
      "missing-angles": {
        "h2": "সমকোণী ত্রিভুজের কোণগুলো কী?",
        "blocks": [
          {
            "kind": "h3",
            "text": "সমকোণ"
          },
          {
            "kind": "p",
            "text": "90 ডিগ্রি কোণ হলো নিখুঁত কোণা, খাড়া দেয়াল আর সমতল মেঝের মাঝের কোণ। প্রতিটি সমকোণী ত্রিভুজে এই কোণটি স্থির: এটি কখনো আকার বদলায় না, এবং চিত্রে শীর্ষবিন্দুতে একটি ছোট বর্গ দিয়ে এটি চিহ্নিত করা হয়। যেহেতু একটি কোণ স্থায়ীভাবে 90 ডিগ্রিতে সেট করা, অন্য দুটি কোণের ভাগ করে নেওয়ার জন্য থাকে মাত্র 90 ডিগ্রি, যা উভয়কেই সূক্ষ্মকোণ হতে বাধ্য করে।"
          },
          {
            "kind": "h3",
            "text": "দুটি সূক্ষ্মকোণ"
          },
          {
            "kind": "p",
            "text": "সূক্ষ্মকোণ [[0^\\circ]]-এর বেশি এবং [[90^\\circ]]-এর কম। সমকোণী ত্রিভুজের বাকি দুটি কোণই এই পরিসরে পড়ে, এবং এগুলোকে পূরক বলা হয় কারণ এদের পরিমাপ সবসময় যোগ করে 90 ডিগ্রি হয়। জোড়াটি কঠোর: একটি জানা সূক্ষ্মকোণ তার সঙ্গীর জন্য ঠিক একটি সম্ভাব্য মান রেখে দেয়, তাই অনুপস্থিত কোণটি কখনোই অনুমানের বিষয় নয়।"
          },
          {
            "kind": "h3",
            "text": "পূরক কোণ কী?"
          },
          {
            "kind": "p",
            "text": "দুটি কোণ পূরক হয় যখন তাদের পরিমাপ যোগ করে [[90^\\circ]] হয়। [[30^\\circ+60^\\circ=90^\\circ]], [[35^\\circ+55^\\circ=90^\\circ]] এবং [[45^\\circ+45^\\circ=90^\\circ]] সবই পূরক জোড়া। পূরক কোণগুলোকে সমান হতেই হবে এমন কোনো কথা নেই; সমতা ঘটে শুধু তখনই যখন প্রতিটি 45 ডিগ্রি হয়। যেকোনো দুটি ধনাত্মক কোণ যা মোট 90 ডিগ্রি হয় তা যোগ্য, সেগুলো একই ত্রিভুজের ভেতরে বসুক বা না বসুক।"
          },
          {
            "kind": "h3",
            "text": "ত্রিভুজের কোণগুলো কেন মিলে 180 ডিগ্রি হয়"
          },
          {
            "kind": "p",
            "text": "প্রতিটি ত্রিভুজ, আকার যাই হোক, এর তিনটি অন্তঃকোণে ঠিক 180 ডিগ্রি ধারণ করে। সমকোণী ত্রিভুজে স্থির সমকোণটি সেই 180-এর মধ্যে থেকে তৎক্ষণাৎ 90 ডিগ্রি দাবি করে, ফলে দুটি সূক্ষ্মকোণের জন্য একত্রে থাকে ঠিক 90 ডিগ্রি। নিচের চিত্রে 35, 55 ও 90 ডিগ্রি কোণের একটি ত্রিভুজের সম্পূর্ণ হিসাব দেখানো হয়েছে।"
          }
        ],
        "imgAlt": "কোণ A 35 ডিগ্রি, B 55 ডিগ্রি, C 90 ডিগ্রি চিহ্নিত সমকোণী ত্রিভুজ",
        "figcaption": "কোণ A (35 ডিগ্রি) ও B (55 ডিগ্রি) পূরক: A + B = 90 ডিগ্রি, এবং 35 + 55 + 90 = 180 ডিগ্রি।"
      },
      "missing-formula": {
        "h2": "অনুপস্থিত কোণ নির্ণয়ের সূত্র",
        "blocks": [
          {
            "kind": "p",
            "text": "সূত্রটি সরাসরি আসে ত্রিভুজের কোণ-সমষ্টি নিয়ম থেকে। সাধারণ বিবৃতি দিয়ে শুরু করুন:"
          },
          {
            "kind": "p",
            "text": "[[[A+B+C=180^\\circ]]]"
          },
          {
            "kind": "p",
            "text": "যেহেতু ত্রিভুজটি সমকোণী, তৃতীয় কোণটি স্থির:"
          },
          {
            "kind": "p",
            "text": "[[[C=90^\\circ]]]"
          },
          {
            "kind": "p",
            "text": "সমষ্টিতে সেই মান বসান:"
          },
          {
            "kind": "p",
            "text": "[[[A+B+90^\\circ=180^\\circ]]]"
          },
          {
            "kind": "p",
            "text": "উভয় পাশ থেকে 90 ডিগ্রি বিয়োগ করুন, এবং দুটি সূক্ষ্মকোণ আলাদা দাঁড়ায়:"
          },
          {
            "kind": "p",
            "text": "[[[A+B=90^\\circ]]]"
          },
          {
            "kind": "p",
            "text": "অবশেষে, অনুপস্থিত কোণটিকে আলাদা করতে জানা কোণ [[A]] উভয় পাশ থেকে বিয়োগ করুন:"
          },
          {
            "kind": "p",
            "text": "[[[B=90^\\circ-A]]]"
          },
          {
            "kind": "p",
            "text": "প্রতিটি ধাপ হলো একটি জ্যামিতিক সত্যের ওপর প্রয়োগ করা সাধারণ বীজগণিত। কিছুই অন্ধভাবে মুখস্থ করা নয়: সূত্রের 90 ডিগ্রি হলো কোণ-সমষ্টির সেই অংশ যা সমকোণ তার অর্ধেক নেওয়ার পর বেঁচে থাকে।"
          },
          {
            "kind": "p",
            "text": "একই সম্পর্ক উল্টো দিকেও কাজ করে। কোণ [[B]] যদি জানা কোণ হয়, [[A]]-এর জন্য সমাধান করলে পাওয়া যায়:"
          },
          {
            "kind": "p",
            "text": "[[[A=90^\\circ-B]]]"
          },
          {
            "kind": "p",
            "text": "এই ক্যালকুলেটর প্রথম রূপটি ব্যবহার করে কারণ এর ইনপুট ক্ষেত্রটি কোণ [[A]] নেয় এবং কোণ [[B]] ফেরত দেয়। দুটি সূত্র ভিন্ন নিয়ম নয়; এগুলো একই পূরক-কোণ সম্পর্ক, শুধু ভিন্ন অজ্ঞাত রাশির জন্য সমাধান করা।"
          },
          {
            "kind": "h3",
            "text": "180 ডিগ্রি নয়, কেন 90 ডিগ্রি"
          },
          {
            "kind": "p",
            "text": "একটি ঘনঘন ভুল হলো জানা কোণটিকে 180 ডিগ্রি থেকে বিয়োগ করা। সেই মোট তিনটি কোণকে কভার করে, তাই একে একা ব্যবহার করলে ভুলে যাওয়া হয় যে সমকোণ ইতিমধ্যে হিসাব করা হয়েছে। [[A=35^\\circ]] নিয়ে, ভুল গণনা দেয় [[180^\\circ-35^\\circ=145^\\circ]], যা কোনো সমকোণী ত্রিভুজের সূক্ষ্মকোণ হতে পারে না। সঠিক গণনা, [[90^\\circ-35^\\circ=55^\\circ]], সমকোণকে সম্মান করে এবং একবারে যাচাই করা যায়: [[35^\\circ+55^\\circ+90^\\circ=180^\\circ]]।"
          }
        ],
        "imgAlt": "180 ডিগ্রি ত্রিভুজ-সমষ্টির সাথে 90 ডিগ্রি সূক্ষ্মকোণ জোড়ার তুলনা করা দুটি প্যানেল",
        "figcaption": "অংশ A দেখায় সম্পূর্ণ ত্রিভুজ-সমষ্টি; অংশ B পূরক সূক্ষ্মকোণগুলোকে আলাদা করে।"
      },
      "missing-howto": {
        "h2": "সমকোণী ত্রিভুজের অনুপস্থিত কোণ ক্যালকুলেটর কীভাবে ব্যবহার করবেন",
        "blocks": [
          {
            "kind": "p",
            "text": "নিচের নির্দেশনা এই পৃষ্ঠার আসল ইন্টারফেসের সাথে মেলে।"
          }
        ],
        "steps": [
          "<strong>সমকোণী ত্রিভুজ চিহ্নিত করুন।</strong> অন্য কিছু করার আগে নিশ্চিত করুন আকৃতিটির সত্যিকারের 90 ডিগ্রি কোণা আছে; সূত্রটি কেবল সমকোণী ত্রিভুজের ক্ষেত্রে প্রযোজ্য।",
          "<strong>আপনার ইতিমধ্যে জানা সূক্ষ্মকোণটি খুঁজুন।</strong> এটিই কোণ [[A]], যার মান আপনি ক্যালকুলেটরে টাইপ করবেন।",
          "<strong>জানা কোণটি বৈধ কিনা নিশ্চিত করুন।</strong> এটি [[0^\\circ]]-এর বেশি এবং [[90^\\circ]]-এর কম হতে হবে। এই পরিসরের বাইরের যেকোনো কিছু সমকোণী ত্রিভুজের সূক্ষ্মকোণ হতে পারে না।",
          "<strong>ডিগ্রিতে জানা কোণ [[A]] লিখুন।</strong> ইনপুট ক্ষেত্রটি 68.5-এর মতো দশমিক মান গ্রহণ করে, তাই আপনার পরিমাপের নির্ভুলতা ধরে রাখুন।",
          "<strong>কোণ B গণনা করুন চাপুন।</strong> টুলটি আপনার ইনপুটে [[B=90^\\circ-A]] প্রয়োগ করে।",
          "<strong>গণনা করা পূরক কোণটি পড়ুন।</strong> আউটপুট হলো ডিগ্রিতে কোণ [[B]]।",
          "<strong>ফলাফল যাচাই করতে দুটি সূক্ষ্মকোণ যোগ করুন।</strong> যোগফল 90 ডিগ্রি হতে হবে; না হলে ইনপুটটি পুনরায় যাচাই করুন।",
          "<strong>নতুন গণনা শুরু করতে রিসেট ব্যবহার করুন।</strong> এটি ইনপুট মুছে দেয় যাতে নতুন কোণ লেখা যায়।"
        ],
        "closingParagraphs": [
          "লক্ষ্য করুন ক্যালকুলেটর কখনো যা চায় না: কোনো বিপরীত বাহুর দৈর্ঘ্য নয়, কোনো সন্নিহিত বাহুর দৈর্ঘ্য নয়, কোনো অতিভুজ নয়, এবং কোনো সাইন, কোসাইন বা ট্যানজেন্ট মান নয়। একটি জানা সূক্ষ্মকোণই সম্পূর্ণ ইনপুট, কারণ কোণ-সমষ্টি নিয়ম বাকিটা করে দেয়। টুলটি রেডিয়ান বা কোণ [[B]]-এর সরাসরি এন্ট্রিও গ্রহণ করে না; এর ইনপুট ক্ষেত্রটি বিশেষভাবে ডিগ্রিতে কোণ [[A]]।"
        ]
      },
      "missing-examples": {
        "h2": "অনুপস্থিত কোণ নির্ণয়ের ধাপে ধাপে উদাহরণ",
        "blocks": [
          {
            "kind": "p",
            "text": "বাস্তব প্রয়োগের আগে এই চারটি উদাহরণ মূল দক্ষতাটি গড়ে তোলে। প্রতিটি একই প্যাটার্ন অনুসরণ করে: সূত্র লিখুন, প্রতিস্থাপন করুন, বিয়োগ করুন।"
          },
          {
            "kind": "h3",
            "text": "উদাহরণ 1: 35 ডিগ্রির একটি জানা কোণ"
          },
          {
            "kind": "p",
            "text": "দেওয়া আছে [[A=35^\\circ]], কোণ [[B]] নির্ণয় করুন।"
          },
          {
            "kind": "p",
            "text": "ধাপ 1: সূত্র লিখুন। [[B=90^\\circ-A]]"
          },
          {
            "kind": "p",
            "text": "ধাপ 2: জানা কোণ প্রতিস্থাপন করুন। [[B=90^\\circ-35^\\circ]]"
          },
          {
            "kind": "p",
            "text": "ধাপ 3: বিয়োগ করুন। [[B=55^\\circ]]"
          },
          {
            "kind": "p",
            "text": "যাচাই: [[35^\\circ+55^\\circ=90^\\circ]]। উত্তরটি বৈধ কারণ দুটি সূক্ষ্মকোণ মিলে ঠিক 90 ডিগ্রি হয় এবং প্রতিটি 0 থেকে 90 ডিগ্রির মধ্যে অবস্থিত।"
          },
          {
            "kind": "h3",
            "text": "উদাহরণ 2: 20 ডিগ্রির একটি জানা কোণ"
          },
          {
            "kind": "p",
            "text": "দেওয়া আছে [[A=20^\\circ]]:"
          },
          {
            "kind": "p",
            "text": "[[B=90^\\circ-20^\\circ=70^\\circ]]"
          },
          {
            "kind": "p",
            "text": "ছোট সূক্ষ্মকোণ বড় পূরক কোণ তৈরি করে। যেহেতু জোড়াটিকে সবসময় মোট 90 ডিগ্রি হতে হয়, একটি কোণ থেকে প্রতি এক ডিগ্রি কমানো মানেই অন্য কোণে তা যোগ হওয়া। এখানে 20 ডিগ্রি কোণ তার সঙ্গীর জন্য উদার 70 ডিগ্রি রেখে দেয়।"
          },
          {
            "kind": "h3",
            "text": "উদাহরণ 3: সমদ্বিবাহু সমকোণী ত্রিভুজ"
          },
          {
            "kind": "p",
            "text": "দেওয়া আছে [[A=45^\\circ]]:"
          },
          {
            "kind": "p",
            "text": "[[B=90^\\circ-45^\\circ=45^\\circ]]"
          },
          {
            "kind": "p",
            "text": "উভয় সূক্ষ্মকোণ প্রতিটি 45 ডিগ্রিতে সমান। এটিই সমদ্বিবাহু সমকোণী ত্রিভুজ, একমাত্র সমকোণী ত্রিভুজ যার সূক্ষ্মকোণগুলো মিলে যায়। এর দুটি বাহুও দৈর্ঘ্যে সমান, এজন্যই 45-45-90 ত্রিভুজ অঙ্কন ও নির্মাণ বিন্যাসে এত ঘনঘন আসে।"
          },
          {
            "kind": "h3",
            "text": "উদাহরণ 4: 68.5 ডিগ্রির একটি জানা কোণ"
          },
          {
            "kind": "p",
            "text": "দেওয়া আছে [[A=68.5^\\circ]]:"
          },
          {
            "kind": "p",
            "text": "[[B=90^\\circ-68.5^\\circ=21.5^\\circ]]"
          },
          {
            "kind": "p",
            "text": "তুলনামূলকভাবে বড় সূক্ষ্মকোণের পূরক তুলনামূলকভাবে ছোট। দশমিক ইনপুট পূর্ণসংখ্যা ইনপুটের মতোই কাজ করে: সাবধানে বিয়োগ করুন, .5 সারিবদ্ধ রেখে, এবং 90 থেকে 68.5 বাদ দিলে 21.5 পাওয়া যায়। যাচাই এখনো খাটে: [[68.5^\\circ+21.5^\\circ=90^\\circ]]।"
          }
        ]
      },
      "missing-applications": {
        "h2": "অনুপস্থিত কোণের বাস্তব জীবনে প্রয়োগ",
        "blocks": [
          {
            "kind": "p",
            "text": "উদাহরণগুলো শুরু হওয়ার আগে একটি বিষয়ে সতর্কতা প্রয়োজন। অনুপস্থিত-কোণ সূত্র সরাসরি প্রযোজ্য হয় যখন দুটি কোণ একই সমকোণী ত্রিভুজের হয়। বাস্তব ক্ষেত্রে, অনুভূমিক পৃষ্ঠ ও উল্লম্ব পৃষ্ঠ প্রায়ই লম্ব রেফারেন্স রেখা হিসেবে কাজ করে, এবং মই বা ছাদের কাঠামোর মতো একটি কর্ণ উপাদান অতিভুজ গঠন করে। নিচের উদাহরণগুলোতে যেখানে এই ধারণা ব্যবহার করা হয়েছে সেখানে তা বলা হয়েছে।"
          },
          {
            "kind": "h3",
            "text": "উদাহরণ 5: উল্লম্বের সাপেক্ষে ছাদের কাঠামোর কোণ নির্ণয়"
          },
          {
            "kind": "p",
            "text": "একটি ছাদের কাঠামো অনুভূমিকের সাথে [[35^\\circ]] কোণ তৈরি করে। একই কাঠামো ও একটি উল্লম্ব রেফারেন্স রেখার মধ্যবর্তী কোণ নির্ণয় করুন।"
          },
          {
            "kind": "p",
            "text": "দেওয়া আছে [[A=35^\\circ]] অনুভূমিক থেকে পরিমাপ করা।"
          },
          {
            "kind": "p",
            "text": "[[B=90^\\circ-35^\\circ=55^\\circ]]"
          },
          {
            "kind": "p",
            "text": "অনুভূমিক ও উল্লম্ব রেফারেন্স রেখা পরস্পর লম্ব, তাই দুটি কোণ পূরক। 55 ডিগ্রি ফলাফল হলো উল্লম্বের সাপেক্ষে কোণ, সম্পূর্ণ ছাদ-ঢাল বা কাঠামোগত গণনা নয়।"
          },
          {
            "kind": "h3",
            "text": "উদাহরণ 6: দেয়ালের সাপেক্ষে মইয়ের কোণ নির্ণয়"
          },
          {
            "kind": "p",
            "text": "একটি মই খাড়া দেয়ালে হেলান দিয়ে আছে এবং সমতল মাটির সাথে [[68^\\circ]] কোণ তৈরি করে। মই ও দেয়ালের মধ্যবর্তী কোণ নির্ণয় করুন।"
          },
          {
            "kind": "p",
            "text": "[[B=90^\\circ-68^\\circ=22^\\circ]]"
          },
          {
            "kind": "p",
            "text": "এই আদর্শ মডেলে মাটি ও দেয়াল সমকোণ গঠন করে, মই অতিভুজ হিসেবে। 22 ডিগ্রি কোণটি দেয়ালের সাপেক্ষে মইয়ের অবস্থান বর্ণনা করে। এই গণনা একা মই নিরাপদে অবস্থিত কিনা তা প্রতিষ্ঠা করে না।"
          },
          {
            "kind": "h3",
            "text": "উদাহরণ 7: উল্লম্বের সাপেক্ষে র‍্যাম্পের কোণ বোঝা"
          },
          {
            "kind": "p",
            "text": "একটি সোজা র‍্যাম্প অনুভূমিকের সাথে [[8^\\circ]] কোণ তৈরি করে। র‍্যাম্পের দিক ও একটি উল্লম্ব রেফারেন্স রেখার মধ্যবর্তী পূরক কোণ নির্ণয় করুন।"
          },
          {
            "kind": "p",
            "text": "[[B=90^\\circ-8^\\circ=82^\\circ]]"
          },
          {
            "kind": "p",
            "text": "উল্লম্বের সাপেক্ষে র‍্যাম্পের কোণ হলো অনুভূমিকের সাপেক্ষে এর কোণের পূরক। অগভীর 8 ডিগ্রি ঢাল উল্লম্বের বিপরীতে খাড়া 82 ডিগ্রি কোণ রেখে দেয়। এই কোণ একা প্রবেশযোগ্যতা বা কোড সম্মতি নির্ধারণ করে না।"
          },
          {
            "kind": "h3",
            "text": "উদাহরণ 8: সিঁড়ির স্ট্রিংগারের পূরক কোণ নির্ণয়"
          },
          {
            "kind": "p",
            "text": "একটি সিঁড়ির স্ট্রিংগার মেঝের সাথে [[32^\\circ]] কোণ তৈরি করে। একটি উল্লম্ব রেফারেন্স রেখার সাপেক্ষে এর কোণ গণনা করুন।"
          },
          {
            "kind": "p",
            "text": "[[B=90^\\circ-32^\\circ=58^\\circ]]"
          },
          {
            "kind": "p",
            "text": "মেঝে, উল্লম্ব রেফারেন্স ও কর্ণ স্ট্রিংগার সমকোণী ত্রিভুজ গঠন করে। 58 ডিগ্রি ফলাফল উল্লম্বের বিপরীতে স্ট্রিংগারের অবস্থান বর্ণনা করে। এটি সিঁড়ির মাপ বা ভবন-কোড সম্মতি যাচাই করে না।"
          },
          {
            "kind": "h3",
            "text": "উদাহরণ 9: উল্লম্ব সাপোর্টের সাপেক্ষে কর্ণ ব্রেসের কোণ গণনা"
          },
          {
            "kind": "p",
            "text": "একটি কর্ণ ব্রেস একটি অনুভূমিক বিমের সাথে [[40^\\circ]] কোণ তৈরি করে। ব্রেস ও লম্ব উল্লম্ব সাপোর্টের মধ্যবর্তী কোণ নির্ণয় করুন।"
          },
          {
            "kind": "p",
            "text": "[[B=90^\\circ-40^\\circ=50^\\circ]]"
          },
          {
            "kind": "p",
            "text": "পূরক নিয়ম প্রযোজ্য হতে হলে দুটি রেফারেন্স দিক পরস্পর লম্ব হতে হবে। 50 ডিগ্রি কোণটি খাঁটি জ্যামিতিক ফলাফল; এটি ব্রেসের কাঠামোগত শক্তি নির্ধারণ করে না।"
          },
          {
            "kind": "h3",
            "text": "উদাহরণ 10: উল্লম্ব খুঁটির সাপেক্ষে গাই তারের কোণ নির্ণয়"
          },
          {
            "kind": "p",
            "text": "একটি গাই তার সমতল মাটির সাথে [[30^\\circ]] কোণ তৈরি করে। তার ও একটি উল্লম্ব খুঁটির মধ্যবর্তী কোণ নির্ণয় করুন।"
          },
          {
            "kind": "p",
            "text": "[[B=90^\\circ-30^\\circ=60^\\circ]]"
          },
          {
            "kind": "p",
            "text": "অনুভূমিক মাটি ও উল্লম্ব খুঁটি সমকোণ নির্ধারণ করে, তারটি অতিভুজ। 60 ডিগ্রি ফলাফল একই তারের দিককে উল্লম্ব রেফারেন্সের বিপরীতে পুনর্বিন্যাস করে। এটি তারের টান বা অ্যাঙ্কর নিরাপত্তা প্রতিষ্ঠা করে না।"
          },
          {
            "kind": "h3",
            "text": "উদাহরণ 11: উন্নতি কোণকে এর পূরকে রূপান্তর"
          },
          {
            "kind": "p",
            "text": "একটি জরিপ চিত্রে অনুভূমিকের ওপরে [[24^\\circ]] উন্নতি কোণে দৃষ্টিরেখা রেকর্ড করা হয়েছে। উল্লম্বের সাপেক্ষে এর পূরক কোণ গণনা করুন।"
          },
          {
            "kind": "p",
            "text": "[[B=90^\\circ-24^\\circ=66^\\circ]]"
          },
          {
            "kind": "p",
            "text": "অনুভূমিক থেকে পরিমাপ করা কোণ ও উল্লম্ব থেকে পরিমাপ করা কোণ লম্ব দৃষ্টিকোণ থেকে একই দৃষ্টিরেখা বর্ণনা করে। উদাহরণটি ধরে নেয় লম্ব অনুভূমিক ও উল্লম্ব রেফারেন্সসহ সোজা দৃষ্টিরেখা।"
          },
          {
            "kind": "h3",
            "text": "উদাহরণ 12: উল্লম্ব রেফারেন্সের সাপেক্ষে ছাদের ঢালের কোণ নির্ণয়"
          },
          {
            "kind": "p",
            "text": "একটি ছাদের ঢাল অনুভূমিকের সাপেক্ষে [[27^\\circ]] পরিমাপ করা হয়। উল্লম্বের সাপেক্ষে এর পূরক কোণ নির্ণয় করুন।"
          },
          {
            "kind": "p",
            "text": "[[B=90^\\circ-27^\\circ=63^\\circ]]"
          },
          {
            "kind": "p",
            "text": "দুটি পরিমাপ বিভিন্ন লম্ব রেফারেন্স দিক থেকে একই ঢাল বর্ণনা করে। কোনো পরিমাপই একা কাঠামোগত মূল্যায়ন নয়।"
          },
          {
            "kind": "h3",
            "text": "উদাহরণ 13: বর্গাকার অঙ্কন বিন্যাসে একটি কর্ণ"
          },
          {
            "kind": "p",
            "text": "একটি বর্গাকার অঙ্কন বিন্যাসে একটি কর্ণ রেখা একটি বাহুর সাথে [[45^\\circ]] কোণ তৈরি করে। সন্নিহিত লম্ব বাহুর সাথে এটি যে কোণ তৈরি করে তা নির্ণয় করুন।"
          },
          {
            "kind": "p",
            "text": "[[B=90^\\circ-45^\\circ=45^\\circ]]"
          },
          {
            "kind": "p",
            "text": "কর্ণটি বর্গের সমকোণকে দ্বিখণ্ডিত করে, তাই উভয় ফলাফল কোণই 45 ডিগ্রি। এই সম্পর্ক মৌলিক অঙ্কন ও বিন্যাস যাচাইয়ে সাহায্য করে: পরিমাপ করা কর্ণ যদি কোণাটি সমানভাবে ভাগ না করে, বিন্যাসটি বর্গাকার নয়।"
          },
          {
            "kind": "h3",
            "text": "উদাহরণ 14: মেশিন প্যানেলের পূরক কোণ নির্ণয়"
          },
          {
            "kind": "p",
            "text": "একটি প্যানেল অনুভূমিক থেকে [[15^\\circ]] কাত হয়ে আছে। প্যানেলের অবস্থান ও উল্লম্ব রেফারেন্স দিকের মধ্যবর্তী কোণ গণনা করুন।"
          },
          {
            "kind": "p",
            "text": "[[B=90^\\circ-15^\\circ=75^\\circ]]"
          },
          {
            "kind": "p",
            "text": "অনুভূমিক ও উল্লম্ব রেফারেন্স পরস্পর লম্ব, তাই প্যানেলের কাত ও এর পূরক একই অবস্থান বর্ণনা করে। ফলাফল শুধু অবস্থান বর্ণনা করে, মেশিনের নিরাপত্তা বা কর্মক্ষমতা নয়।"
          },
          {
            "kind": "h3",
            "text": "উদাহরণ 15: গাছ পর্যবেক্ষণ কোণ রূপান্তর"
          },
          {
            "kind": "p",
            "text": "একজন ব্যক্তি অনুভূমিকের ওপরে [[38^\\circ]] উন্নতি কোণে একটি গাছের শীর্ষের দিকে তাকান। দৃষ্টিরেখা ও একটি উল্লম্ব রেফারেন্স দিকের মধ্যবর্তী পূরক কোণ নির্ণয় করুন।"
          },
          {
            "kind": "p",
            "text": "[[B=90^\\circ-38^\\circ=52^\\circ]]"
          },
          {
            "kind": "p",
            "text": "গণনাটি রেফারেন্স দিক বদলায়, দৃষ্টিরেখাটি নিজে নয়। 52 ডিগ্রি কোণটি উল্লম্বের বিপরীতে পরিমাপ করা একই দৃষ্টি। এটি গাছের উচ্চতা গণনা করে না।"
          },
          {
            "kind": "h3",
            "text": "উদাহরণ 16: উল্লম্ব সাপোর্টের সাপেক্ষে হ্যান্ডরেলের কোণ নির্ণয়"
          },
          {
            "kind": "p",
            "text": "একটি কর্ণ হ্যান্ডরেল একটি অনুভূমিক ল্যান্ডিংয়ের সাথে [[55^\\circ]] কোণ তৈরি করে। একটি উল্লম্ব সাপোর্ট রেখার সাপেক্ষে এর পূরক কোণ নির্ণয় করুন।"
          },
          {
            "kind": "p",
            "text": "[[B=90^\\circ-55^\\circ=35^\\circ]]"
          },
          {
            "kind": "p",
            "text": "পূরক কোণটি ভিন্ন রেফারেন্স থেকে একই কর্ণ অবস্থান বর্ণনা করে। অনুভূমিকের বিপরীতে খাড়া 55 ডিগ্রি কোণ উল্লম্বের বিপরীতে অগভীর 35 ডিগ্রি কোণে পরিণত হয়। কোণটি একা প্রবেশযোগ্যতা বা নির্মাণ প্রয়োজনীয়তা যাচাই করে না।"
          },
          {
            "kind": "h3",
            "text": "বাস্তব উদাহরণগুলোর তুলনা"
          }
        ],
        "table": {
          "headers": [
            "পরিস্থিতি",
            "জানা কোণ",
            "রেফারেন্স দিক",
            "অনুপস্থিত কোণ",
            "গণনা",
            "ব্যাখ্যা"
          ],
          "rows": [
            [
              "ছাদের কাঠামো",
              "35°",
              "অনুভূমিক",
              "55°",
              "90 - 35",
              "উল্লম্বের সাপেক্ষে কাঠামোর কোণ"
            ],
            [
              "মই",
              "68°",
              "মাটি",
              "22°",
              "90 - 68",
              "দেয়ালের সাপেক্ষে মইয়ের কোণ"
            ],
            [
              "র‍্যাম্প",
              "8°",
              "অনুভূমিক",
              "82°",
              "90 - 8",
              "উল্লম্বের দিকে র‍্যাম্পের দিক"
            ],
            [
              "সিঁড়ির স্ট্রিংগার",
              "32°",
              "মেঝে",
              "58°",
              "90 - 32",
              "উল্লম্বের সাপেক্ষে স্ট্রিংগারের কোণ"
            ],
            [
              "কর্ণ ব্রেস",
              "40°",
              "অনুভূমিক বিম",
              "50°",
              "90 - 40",
              "উল্লম্ব সাপোর্টের সাপেক্ষে ব্রেসের কোণ"
            ],
            [
              "গাই তার",
              "30°",
              "মাটি",
              "60°",
              "90 - 30",
              "খুঁটির সাপেক্ষে তারের কোণ"
            ],
            [
              "জরিপ দৃষ্টিরেখা",
              "24°",
              "অনুভূমিক",
              "66°",
              "90 - 24",
              "উল্লম্বের সাপেক্ষে দৃষ্টিরেখা"
            ],
            [
              "ছাদের ঢাল",
              "27°",
              "অনুভূমিক",
              "63°",
              "90 - 27",
              "উল্লম্বের সাপেক্ষে ঢালের কোণ"
            ],
            [
              "অঙ্কন কর্ণ",
              "45°",
              "একটি বাহু",
              "45°",
              "90 - 45",
              "সন্নিহিত বাহুর সাপেক্ষে কর্ণ"
            ],
            [
              "মেশিন প্যানেল",
              "15°",
              "অনুভূমিক",
              "75°",
              "90 - 15",
              "উল্লম্বের সাপেক্ষে প্যানেলের অবস্থান"
            ],
            [
              "গাছ পর্যবেক্ষণ",
              "38°",
              "অনুভূমিক",
              "52°",
              "90 - 38",
              "উল্লম্বের সাপেক্ষে দৃষ্টিরেখা"
            ],
            [
              "হ্যান্ডরেল",
              "55°",
              "ল্যান্ডিং",
              "35°",
              "90 - 55",
              "উল্লম্ব সাপোর্টের সাপেক্ষে হ্যান্ডরেল"
            ]
          ]
        }
      },
      "missing-relationship": {
        "h2": "পূরক কোণগুলোর মধ্যকার সম্পর্ক বোঝা",
        "blocks": [
          {
            "kind": "p",
            "text": "প্যাটার্নটি পুরোপুরি অনুমানযোগ্য। কোণ [[A]] বাড়লে, কোণ [[B]] ঠিক একই পরিমাণে কমে, কারণ তাদের মোট 90 ডিগ্রিতে আটকে আছে। [[A]] কমলে, [[B]] ফাঁক পূরণে বাড়ে। [[A=45^\\circ]]-এ দুটি মাঝখানে মিলে, এবং তিনটি স্বতন্ত্র শীর্ষবিন্দুসহ প্রকৃত সমকোণী ত্রিভুজে কোনো সূক্ষ্মকোণ [[0^\\circ]] বা [[90^\\circ]]-এ পৌঁছাতে পারে না।"
          }
        ],
        "table": {
          "headers": [
            "জানা কোণ A",
            "সূত্র",
            "অনুপস্থিত কোণ B"
          ],
          "rows": [
            [
              "10°",
              "90 - 10",
              "80°"
            ],
            [
              "20°",
              "90 - 20",
              "70°"
            ],
            [
              "30°",
              "90 - 30",
              "60°"
            ],
            [
              "45°",
              "90 - 45",
              "45°"
            ],
            [
              "60°",
              "90 - 60",
              "30°"
            ],
            [
              "75°",
              "90 - 75",
              "15°"
            ],
            [
              "80°",
              "90 - 80",
              "10°"
            ]
          ]
        },
        "closingParagraphs": [
          "টেবিলটি 45 ডিগ্রির চারপাশে প্রতিসম: (10, 80), (20, 70) ও (30, 60) জোড়াগুলো পরস্পরের প্রতিচ্ছবি, কারণ জানা ও অনুপস্থিত কোণ অদলবদল করলে একই পূরক সম্পর্ক অন্য দিক থেকে পড়া হয়। নিচের চারটি প্যানেল এই আদানপ্রদানটি দৃশ্যমান করে।"
        ],
        "imgAlt": "পূরক জোড়া 20-70, 30-60, 45-45, 70-20 ডিগ্রি দেখানো চারটি ত্রিভুজ",
        "figcaption": "কোণ A বাড়লে কোণ B একই পরিমাণে কমে; তাদের যোগফল 90 ডিগ্রি থাকে।"
      },
      "missing-reverse": {
        "h2": "আপনি যদি কোণ B জানেন?",
        "blocks": [
          {
            "kind": "p",
            "text": "একই পূরক-কোণ নিয়ম উল্টো দিকেও কাজ করে। কোণ [[B]] যদি জানা কোণ হয়, [[A]]-এর জন্য সম্পর্কটি সমাধান করুন:"
          },
          {
            "kind": "p",
            "text": "[[[A=90^\\circ-B]]]"
          },
          {
            "kind": "p",
            "text": "কোনো নতুন সূত্রের প্রয়োজন নেই; এটি ভূমিকা বদলে দেওয়া অভিন্ন সমীকরণ।"
          },
          {
            "kind": "h3",
            "text": "কাজ করা উদাহরণ"
          },
          {
            "kind": "p",
            "text": "দেওয়া আছে [[B=62^\\circ]]:"
          },
          {
            "kind": "p",
            "text": "[[A=90^\\circ-62^\\circ=28^\\circ]]"
          },
          {
            "kind": "p",
            "text": "আরো তিনটি ছোট বিপরীত-দিকের উদাহরণ একই ধাপ অনুসরণ করে:"
          }
        ],
        "list": [
          "[[B=15^\\circ]], সুতরাং [[A=90^\\circ-15^\\circ=75^\\circ]]।",
          "[[B=42^\\circ]], সুতরাং [[A=90^\\circ-42^\\circ=48^\\circ]]।",
          "[[B=70^\\circ]], সুতরাং [[A=90^\\circ-70^\\circ=20^\\circ]]।"
        ],
        "closingParagraphs": [
          "একটি ব্যবহারিক নোট: এই ক্যালকুলেটরের ইনপুট ক্ষেত্রটি কোণ [[A]] গ্রহণ করে এবং কোণ [[B]] ফেরত দেয়। যে পাঠক কেবল কোণ [[B]] জানেন, তাকে বিপরীত সূত্রটি হাতে প্রয়োগ করতে হবে, যদি না ইন্টারফেসটি [[B]] সরাসরি লেখা সমর্থন করে বলে যাচাই করা হয়।"
        ]
      },
      "missing-vs": {
        "h2": "পূরক কোণ বনাম সম্পূরক কোণ",
        "blocks": [
          {
            "kind": "p",
            "text": "দুটি পদ শুনতে একইরকম এবং উভয়ই কোণ জোড়া বর্ণনা করে, কিন্তু তারা ভিন্ন প্রশ্নের উত্তর দেয়।"
          },
          {
            "kind": "h3",
            "text": "পূরক কোণ"
          },
          {
            "kind": "p",
            "text": "দুটি কোণ পূরক হয় যখন তাদের যোগফল [[90^\\circ]] হয়। সমকোণী ত্রিভুজের দুটি সূক্ষ্মকোণ পাঠ্যপুস্তকের উদাহরণ: এগুলো পূরক হতেই হবে কারণ সমকোণ ইতিমধ্যে ত্রিভুজের মোটের অন্য 90 ডিগ্রি দাবি করে।"
          },
          {
            "kind": "h3",
            "text": "সম্পূরক কোণ"
          },
          {
            "kind": "p",
            "text": "দুটি কোণ সম্পূরক হয় যখন তাদের যোগফল [[180^\\circ]] হয়। একটি সরলরেখা, উদাহরণস্বরূপ, দুটি সম্পূরক কোণে ভাগ করা যায়। সম্পূরক জোড়াকে কখনোই সমকোণী ত্রিভুজের দুটি সূক্ষ্মকোণের সাথে গুলিয়ে ফেলা উচিত নয়, যেগুলোর যোগফল 90, 180 নয়।"
          }
        ],
        "table": {
          "headers": [
            "সম্পর্ক",
            "মোট",
            "উদাহরণ"
          ],
          "rows": [
            [
              "পূরক",
              "90°",
              "35 + 55"
            ],
            [
              "সম্পূরক",
              "180°",
              "110 + 70"
            ],
            [
              "সমকোণ",
              "90°",
              "সমকোণী ত্রিভুজের স্থির কোণ"
            ]
          ]
        },
        "closingParagraphs": [
          "সম্পূর্ণ ত্রিভুজ-কোণ সমষ্টি 180 ডিগ্রি, কিন্তু দুটি সূক্ষ্মকোণ একত্রে 90 ডিগ্রি হয়। এই দুটি মোট আলাদা রাখাই এই পৃষ্ঠার সবচেয়ে সাধারণ ভুল এড়ানোর চাবি।"
        ],
        "imgAlt": "মই, কাঠামো, ব্রেস ও বর্গাকার কর্ণের জন্য পূরক কোণ দেখানো চারটি প্যানেল",
        "figcaption": "বাস্তব ক্ষেত্রে পূরক জোড়া: প্রতিটি জানা কোণ তার সঙ্গীকে নির্ধারণ করে।"
      },
      "missing-mistakes": {
        "h2": "অনুপস্থিত কোণ নির্ণয়ে সাধারণ ভুল",
        "steps": [
          "<strong>90-এর বদলে 180 ডিগ্রি থেকে জানা কোণ বিয়োগ করা।</strong> 180 ডিগ্রি মোটে সমকোণ অন্তর্ভুক্ত, যা ইতিমধ্যে স্থির। যা ভুল হয়: [[A=35^\\circ]] নিয়ে ভুল গণনা দেয় 145 ডিগ্রি, একটি অসম্ভব সূক্ষ্মকোণ। সমাধান: 90 থেকে বিয়োগ করুন, পাবেন [[55^\\circ]]।",
          "<strong>একটি কোণ ইতিমধ্যে 90 ডিগ্রি ভুলে যাওয়া।</strong> সমকোণের কোনো গণনার প্রয়োজন নেই বলে এটি সহজে এড়িয়ে যাওয়া হয়। যা ভুল হয়: ত্রিভুজটিকে এমনভাবে ধরা যেন তিনটি কোণই অজানা। সমাধান: মনে রাখুন আপনি শুরু করার আগেই সমকোণ 180 ডিগ্রি মোটের অর্ধেক দাবি করে।",
          "<strong>ক্যালকুলেটরে 90 ডিগ্রি লেখা।</strong> টুলটি 0 থেকে 90 ডিগ্রির মধ্যে একটি সূক্ষ্মকোণ আশা করে। যা ভুল হয়: 90 ডিগ্রি ইনপুটে দ্বিতীয় সূক্ষ্মকোণের কোনো জায়গা থাকে না। সমাধান: কেবল জানা সূক্ষ্মকোণটি লিখুন।",
          "<strong>90 ডিগ্রির বেশি কোণ লেখা।</strong> সংজ্ঞা অনুযায়ী কোনো সূক্ষ্মকোণ 90 ডিগ্রি ছাড়ায় না। যা ভুল হয়: বিয়োগে ঋণাত্মক ফলাফল আসে, যার এখানে কোনো জ্যামিতিক অর্থ নেই। সমাধান: ইনপুট 90 ডিগ্রির নিচে আছে কিনা যাচাই করুন।",
          "<strong>0 ডিগ্রি লেখা।</strong> শূন্য কোণ ত্রিভুজটিকে একটি রেখাখণ্ডে ভেঙে ফেলে। যা ভুল হয়: ফলাফল দাবি করে শূন্য ক্ষেত্রফলের আকৃতির জন্য 90 ডিগ্রি পূরক। সমাধান: কেবল ধনাত্মক সূক্ষ্মকোণ ব্যবহার করুন।",
          "<strong>পূরক কোণকে সম্পূরক কোণের সাথে গুলিয়ে ফেলা।</strong> পূরক জোড়ার যোগফল 90 ডিগ্রি; সম্পূরক জোড়ার যোগফল 180। যা ভুল হয়: 180 থেকে বিয়োগ করলে 1 নম্বর আইটেমের ভুল হয়। সমাধান: শব্দটিকে মোটের সাথে মেলান, পূরক 90-এর সাথে।",
          "<strong>ধরে নেওয়া দুটি সূক্ষ্মকোণ সমান হতে হবে।</strong> সমতা হয় কেবল প্রতিটি 45 ডিগ্রি হলে। যা ভুল হয়: 20-70 ত্রিভুজে প্রতিসাম্য আশা করা। সমাধান: বিয়োগকে সিদ্ধান্ত নিতে দিন; বেশিরভাগ জোড়া ভিন্ন।",
          "<strong>কোণ লেবেল A ও B গুলিয়ে ফেলা।</strong> ক্যালকুলেটর [[A]] নেয় এবং [[B]] ফেরত দেয়। যা ভুল হয়: ইতিমধ্যে জানা পূরকটিকে এমনভাবে লেখা যেন সেটিই ইনপুট। সমাধান: কিছু টাইপ করার আগে জানা কোণটিকে A লেবেল করুন।",
          "<strong>ভাবা এই বিশেষ গণনার জন্য বাহুর দৈর্ঘ্য প্রয়োজন।</strong> বাহু ত্রিকোণমিতির জন্য গুরুত্বপূর্ণ, পূরকের জন্য নয়। যা ভুল হয়: এমন একটি সমস্যায় আটকে যাওয়া যার কেবল বিয়োগ প্রয়োজন। সমাধান: সূক্ষ্মকোণ জানা থাকলে 90 থেকে বিয়োগ করুন এবং শেষ করুন।",
          "<strong>সাধারণ বিয়োগ যথেষ্ট হলে বিপরীত সাইন, কোসাইন বা ট্যানজেন্ট ব্যবহার করা।</strong> বিপরীত ফাংশনগুলো কঠিন প্রশ্নের উত্তর দেয়। যা ভুল হয়: অতিরিক্ত কাজ এবং মোড ভুলের অতিরিক্ত সুযোগ। সমাধান: কোণ জানা থাকলে <a href=\"/right-triangle-angle-from-sine-calculator/\" class=\"text-primary hover:underline\">সাইন থেকে কোণ ক্যালকুলেটর</a> ও এর সহযোগীগুলো ভুল টুল; বিয়োগ নির্ভুল ও তাৎক্ষণিক।",
          "<strong>রেফারেন্স দিকগুলো না যাচাই করে ধরে নেওয়া পরিমাপ করা ভৌত কোণ স্বয়ংক্রিয়ভাবে সমকোণী ত্রিভুজ গঠন করে।</strong> বাস্তব কোণা কদাচিৎ নিখুঁত। যা ভুল হয়: সেখানে পূরক নিয়ম প্রয়োগ করা যেখানে 90 ডিগ্রি কোণা আসলে নেই। সমাধান: বিয়োগ করার আগে রেফারেন্স দিকগুলো লম্ব কিনা যাচাই করুন।",
          "<strong>বিয়োগের আগে অপ্রয়োজনীয়ভাবে ইনপুট পরিমাপকে পূর্ণসংখ্যায় নেওয়া।</strong> আগে পূর্ণসংখ্যায় নিলে ইনপুটের প্রকৃত নির্ভুলতা নষ্ট হয়। যা ভুল হয়: 68.5-কে 69-এ পূর্ণসংখ্যা করলে 21.5-এর বদলে 21 পাওয়া যায়। সমাধান: সম্পূর্ণ পরিমাপিত মান দিয়ে বিয়োগ করুন, তারপর ফলাফলকে ইনপুটের নির্ভুলতার সাথে মেলাতে পূর্ণসংখ্যায় নিন।"
        ],
        "blocks": [
          {
            "kind": "h3",
            "text": "ভুল বনাম সঠিক"
          },
          {
            "kind": "p",
            "text": "দেওয়া আছে [[A=35^\\circ]]:"
          },
          {
            "kind": "p",
            "text": "ভুল: [[180^\\circ-35^\\circ=145^\\circ]]। এটি অনুপস্থিত সূক্ষ্মকোণ নয় কারণ সমকোণ হিসাব করা হয়নি; 90 ডিগ্রি কোণার পাশে সমকোণী ত্রিভুজের ভেতরে 145 ডিগ্রি বসতে পারে না।"
          },
          {
            "kind": "p",
            "text": "সঠিক: [[90^\\circ-35^\\circ=55^\\circ]]।"
          },
          {
            "kind": "p",
            "text": "যাচাই: [[35^\\circ+55^\\circ+90^\\circ=180^\\circ]]। সম্পূর্ণ কোণ-সমষ্টি উত্তরটি নিশ্চিত করে।"
          }
        ]
      },
      "missing-verify": {
        "h2": "আপনার অনুপস্থিত কোণ বৈধ কিনা যাচাই করবেন কীভাবে",
        "blocks": [
          {
            "kind": "p",
            "text": "বৈধ ইনপুট পরিসর:"
          },
          {
            "kind": "p",
            "text": "[[[0^\\circ \\lt A \\lt 90^\\circ]]]"
          },
          {
            "kind": "p",
            "text": "এবং গণনা করা কোণকেও একই পরিসর মানতে হবে:"
          },
          {
            "kind": "p",
            "text": "[[[0^\\circ \\lt B \\lt 90^\\circ]]]"
          },
          {
            "kind": "p",
            "text": "0 বা 90 ডিগ্রি ইনপুট তিনটি স্বতন্ত্র শীর্ষবিন্দু ও ধনাত্মক বাহুর দৈর্ঘ্যসহ সাধারণ সমকোণী ত্রিভুজের বদলে একটি পতনশীল সীমাবদ্ধ কেস তৈরি করত। ক্যালকুলেটর ঠিক এই কারণে কঠোর অসমতা প্রয়োগ করে।"
          },
          {
            "kind": "h3",
            "text": "পদ্ধতি 1: সূক্ষ্মকোণগুলো যোগ করুন"
          },
          {
            "kind": "p",
            "text": "যাচাই করুন [[A+B=90^\\circ]]। উদাহরণ: [[35^\\circ+55^\\circ=90^\\circ]]। এটিই দ্রুততম যাচাই এবং 180 ডিগ্রি ভুলটি সাথে সাথে ধরে ফেলে।"
          },
          {
            "kind": "h3",
            "text": "পদ্ধতি 2: সম্পূর্ণ ত্রিভুজ যাচাই করুন"
          },
          {
            "kind": "p",
            "text": "যাচাই করুন [[A+B+90^\\circ=180^\\circ]]। উদাহরণ: [[35^\\circ+55^\\circ+90^\\circ=180^\\circ]]। এটি সার্বজনীন ত্রিভুজ কোণ-সমষ্টির বিপরীতে উত্তরটি নিশ্চিত করে।"
          },
          {
            "kind": "h3",
            "text": "পদ্ধতি 3: বিপরীত গণনা যাচাই করুন"
          },
          {
            "kind": "p",
            "text": "যদি [[B=90^\\circ-A]] হয়, তবে [[A=90^\\circ-B]] মূল ইনপুটটি পুনরুদ্ধার করতেই হবে। [[A=35^\\circ]] দিলে [[B=55^\\circ]] হলে, বিপরীত যাচাই হলো [[90^\\circ-55^\\circ=35^\\circ]]। এই সামঞ্জস্য যাচাইয়ে কোনো বাহুর পরিমাপের দরকার নেই।"
          },
          {
            "kind": "p",
            "text": "একটি সতর্কতা: ইনপুট কোণটি ভৌত পরিমাপ থেকে এলে, এর অনিশ্চয়তা ফলাফলে চলে আসে। মোটামুটিভাবে পরিমাপ করা 35 ডিগ্রি থেকে মোটামুটিভাবে জানা 55 ডিগ্রি পাওয়া যায়; পরিমাপের সাথে মিলিয়ে নির্ভুলতায় উত্তরটি দিন। বাহুর দৈর্ঘ্য জড়িত যাচাইয়ের জন্য, <a href=\"/pythagorean-theorem-calculator/\" class=\"text-primary hover:underline\">পিথাগোরাসের উপপাদ্য ক্যালকুলেটর</a> স্বতন্ত্রভাবে ত্রিভুজের জ্যামিতি নিশ্চিত করতে পারে।"
          }
        ]
      },
      "missing-choose": {
        "h2": "সঠিক সমকোণী ত্রিভুজ ক্যালকুলেটর বেছে নেওয়া",
        "blocks": [
          {
            "kind": "p",
            "text": "নিচের প্রতিটি টুল ভিন্ন প্রশ্নের উত্তর দেয়। টুলটিকে আপনি আসলে যা জানেন তার সাথে মেলান:"
          }
        ],
        "list": [
          "<strong>সমকোণী ত্রিভুজের অনুপস্থিত কোণ ক্যালকুলেটর</strong> (এই পৃষ্ঠা): একটি সূক্ষ্মকোণ ইতিমধ্যে জানা থাকলে পূরক কোণ নির্ণয় করে। ইনপুট কোণ হলে, বাহু নয়, সবসময় এটি ব্যবহার করুন।",
          "<a href=\"/right-triangle-angle-from-sine-calculator/\" class=\"text-primary hover:underline\"><strong>সমকোণী ত্রিভুজের সাইন থেকে কোণ ক্যালকুলেটর</strong></a>: বিপরীত বাহু ও অতিভুজ থেকে একটি সূক্ষ্মকোণ নির্ণয় করে। এই দুটি দৈর্ঘ্য পরিমাপ করা থাকলে এটি ব্যবহার করুন।",
          "<a href=\"/right-triangle-angle-from-cosine-calculator/\" class=\"text-primary hover:underline\"><strong>সমকোণী ত্রিভুজের কোসাইন থেকে কোণ ক্যালকুলেটর</strong></a>: সন্নিহিত বাহু ও অতিভুজ থেকে একটি সূক্ষ্মকোণ নির্ণয় করে।",
          "<a href=\"/right-triangle-angle-from-tangent-calculator/\" class=\"text-primary hover:underline\"><strong>সমকোণী ত্রিভুজের ট্যানজেন্ট থেকে কোণ ক্যালকুলেটর</strong></a>: বিপরীত ও সন্নিহিত বাহু, দুটি বাহু থেকে একটি সূক্ষ্মকোণ নির্ণয় করে।",
          "<a href=\"/right-triangle-side-from-sine-calculator/\" class=\"text-primary hover:underline\"><strong>সমকোণী ত্রিভুজের সাইন থেকে বাহু ক্যালকুলেটর</strong></a>: একটি কোণ ও একটি বাহু জানা থাকলে অনুপস্থিত বাহুর দৈর্ঘ্য নির্ণয় করে।",
          "<a href=\"/right-triangle-side-from-cosine-calculator/\" class=\"text-primary hover:underline\"><strong>সমকোণী ত্রিভুজের কোসাইন থেকে বাহু ক্যালকুলেটর</strong></a>: একটি কোণ এবং অতিভুজ বা সন্নিহিত বাহু থেকে অনুপস্থিত বাহুর দৈর্ঘ্য নির্ণয় করে।",
          "<a href=\"/right-triangle-side-from-tangent-calculator/\" class=\"text-primary hover:underline\"><strong>সমকোণী ত্রিভুজের ট্যানজেন্ট থেকে বাহু ক্যালকুলেটর</strong></a>: জানা কোণ ও অন্য বাহু থেকে একটি অনুপস্থিত বাহু নির্ণয় করে।"
        ],
        "closingParagraphs": [
          "সিদ্ধান্তের নিয়মটি সহজ। আপনি একটি সূক্ষ্মকোণ জানেন: এই পৃষ্ঠার অনুপস্থিত-কোণ ক্যালকুলেটর ব্যবহার করুন। আপনি দুটি উপযুক্ত বাহুর দৈর্ঘ্য জানেন: মিলিয়ে বিপরীত-ত্রিকোণমিতিক ক্যালকুলেটর ব্যবহার করুন। আপনার একটি অজানা বাহু দরকার: একটি বাহু ক্যালকুলেটর ব্যবহার করুন। আর ত্রিকোণমিতিক গণনার পর দ্বিতীয় কোণ দরকার: জানা কোণটিকে 90 ডিগ্রি থেকে বিয়োগ করুন, যা ঠিক এই পৃষ্ঠা স্বয়ংক্রিয় করে।"
        ]
      },
      "missing-faq": {
        "h2": "প্রায়শই জিজ্ঞাসিত প্রশ্ন",
        "blocks": []
      },
      "missing-related": {
        "h2": "সম্পর্কিত ত্রিভুজ ক্যালকুলেটরগুলো দেখুন",
        "blocks": []
      },
      "missing-conclusion": {
        "h2": "আত্মবিশ্বাসের সাথে যেকোনো অনুপস্থিত কোণ নির্ণয় করুন",
        "blocks": [
          {
            "kind": "p",
            "text": "অনুপস্থিত-কোণ গণনা সমকোণী-ত্রিভুজ জ্যামিতির সবচেয়ে সহজ অপারেশন: জানা সূক্ষ্মকোণটিকে 90 ডিগ্রি থেকে বিয়োগ করুন। সেই বিয়োগের পেছনে আছে ত্রিভুজ কোণ-সমষ্টি নিয়ম, যা প্রতিটি ত্রিভুজের মোটের অর্ধেক সমকোণের জন্য সংরক্ষণ করে এবং বাকি অর্ধেক পূরক জোড়ার জন্য রেখে দেয়। জানা কোণটি ছাদের কাঠামো, মই, সিঁড়ির স্ট্রিংগার বা অঙ্কন বিন্যাস যেখান থেকেই আসুক, পদ্ধতি কখনো বদলায় না: সমকোণ নিশ্চিত করুন, 90 থেকে বিয়োগ করুন, এবং যাচাই করুন দুটি সূক্ষ্মকোণ মিলে 90 ডিগ্রি হয়। এই পৃষ্ঠাটি বুকমার্ক করে রাখুন সেই মুহূর্তগুলোর জন্য যখন একটি কোণ ইতিমধ্যে জানা এবং শুধু তার সঙ্গী অনুপস্থিত।"
          }
        ]
      }
    },
    "faqs": [
      {
        "question": "সমকোণী ত্রিভুজে অনুপস্থিত কোণ কীভাবে নির্ণয় করবেন?",
        "answer": "জানা সূক্ষ্মকোণটিকে 90 ডিগ্রি থেকে বিয়োগ করুন। সূত্র হলো B = 90 - A, যেখানে A আপনার জানা কোণ এবং B অনুপস্থিত কোণ। উদাহরণস্বরূপ, A 35 ডিগ্রি হলে, B = 90 - 35 = 55 ডিগ্রি। কোনো বাহুর দৈর্ঘ্য বা ত্রিকোণমিতিক ফাংশনের প্রয়োজন নেই।"
      },
      {
        "question": "দুটি সূক্ষ্মকোণ কেন মিলে 90 ডিগ্রি হয়?",
        "answer": "প্রতিটি ত্রিভুজে মোট 180 ডিগ্রি থাকে। সমকোণী ত্রিভুজ তার সমকোণের জন্য সেই 180-এর মধ্যে 90 ডিগ্রি সংরক্ষণ করে, ফলে বাকি দুটি সূক্ষ্মকোণের ভাগ করে নেওয়ার জন্য থাকে ঠিক 90 ডিগ্রি। এজন্যই সমকোণী ত্রিভুজে A + B সবসময় 90 ডিগ্রি হয়।"
      },
      {
        "question": "অনুপস্থিত কোণের সূত্র কী?",
        "answer": "সূত্র হলো B = 90 - A। ত্রিভুজ কোণ-সমষ্টি A + B + 90 = 180 থেকে শুরু করুন, উভয় পাশ থেকে 90 বিয়োগ করে A + B = 90 পান, তারপর উভয় পাশ থেকে A বিয়োগ করুন। বিপরীত রূপ, A = 90 - B, একইভাবে কাজ করে যখন B জানা কোণ।"
      },
      {
        "question": "পূরক কোণ কী?",
        "answer": "দুটি কোণ পূরক হয় যখন তাদের পরিমাপ যোগ করে 90 ডিগ্রি হয়। 30 ও 60, 35 ও 55, এবং 45 ও 45 জোড়াগুলো সবই পূরক। প্রতিটি সমকোণী ত্রিভুজে দুটি সূক্ষ্মকোণ সংজ্ঞা অনুযায়ী পূরক, যা ঠিক অনুপস্থিত-কোণ সূত্রটি প্রকাশ করে।"
      },
      {
        "question": "বাহুর দৈর্ঘ্য না জেনে কি অনুপস্থিত কোণ নির্ণয় করতে পারি?",
        "answer": "হ্যাঁ। একটি সূক্ষ্মকোণ জানা থাকলে, এই গণনায় বাহুর দৈর্ঘ্য অপ্রাসঙ্গিক। পূরক-কোণ সম্পর্ক শুধু কোণ-সমষ্টির ওপর নির্ভর করে, তাই 90 ডিগ্রি থেকে বিয়োগ করলেই নির্ভুল উত্তর পাওয়া যায়। কোনো কোণ এখনো জানা না থাকলেই বাহুর দৈর্ঘ্য গুরুত্বপূর্ণ হয়।"
      },
      {
        "question": "পূরক ও সম্পূরক কোণের মধ্যে পার্থক্য কী?",
        "answer": "পূরক কোণ যোগ করে 90 ডিগ্রি হয়; সম্পূরক কোণ যোগ করে 180 ডিগ্রি হয়। সমকোণী ত্রিভুজের দুটি সূক্ষ্মকোণ পূরক। একটি সাধারণ ভুল হলো জানা কোণটিকে 90-এর বদলে 180 থেকে বিয়োগ করা, যা ভুলে যায় সমকোণ ইতিমধ্যে ত্রিভুজের মোটের অর্ধেকের হিসাব করেছে।"
      },
      {
        "question": "দুটি সূক্ষ্মকোণ কি সমান হতে পারে?",
        "answer": "হ্যাঁ, যখন প্রতিটি 45 ডিগ্রি হয়। তখন 90 - 45 = 45, তাই ত্রিভুজটি দুটি সমান বাহুসহ সমদ্বিবাহু সমকোণী ত্রিভুজ। দুটি সূক্ষ্মকোণ মেলার একমাত্র কেস এটিই; অন্য সব সমকোণী ত্রিভুজে তারা ভিন্ন।"
      },
      {
        "question": "জানা কোণ 35 ডিগ্রি হলে কী হয়?",
        "answer": "অনুপস্থিত কোণ হলো 90 - 35 = 55 ডিগ্রি। দুভাবে যাচাই করতে পারেন: 35 + 55 = 90 পূরক জোড়া নিশ্চিত করে, এবং 35 + 55 + 90 = 180 সম্পূর্ণ ত্রিভুজ কোণ-সমষ্টি নিশ্চিত করে। দুটি যাচাই সবসময় একমত হওয়া উচিত।"
      },
      {
        "question": "জানা কোণ 45 ডিগ্রির বেশি হলে কী হয়?",
        "answer": "অনুপস্থিত কোণ 45 ডিগ্রির কম আসে, কারণ দুটিকে মিলে এখনো 90 হতে হবে। উদাহরণস্বরূপ, A 68 ডিগ্রি হলে, B = 90 - 68 = 22 ডিগ্রি। জানা কোণ 90-এর দিকে বাড়লে, এর পূরক 0-এর দিকে কমে।"
      },
      {
        "question": "অনুপস্থিত সূক্ষ্মকোণ কি ঠিক 0 বা 90 ডিগ্রি হতে পারে?",
        "answer": "সাধারণ সমকোণী ত্রিভুজে নয়। 0 বা 90 ডিগ্রি ইনপুট তিনটি স্বতন্ত্র শীর্ষবিন্দুসহ ত্রিভুজের বদলে বাস্তব ত্রিভুজীয় ক্ষেত্রফলহীন একটি পতনশীল সীমাবদ্ধ কেস বর্ণনা করে। ক্যালকুলেটর জানা কোণটিকে 0 থেকে 90 ডিগ্রির মধ্যে কঠোরভাবে চায়, এবং ফলাফল সবসময় একই পরিসরে পড়ে।"
      },
      {
        "question": "কোণ B জানা থাকলে কোণ A কীভাবে নির্ণয় করব?",
        "answer": "বিপরীত সূত্র A = 90 - B ব্যবহার করুন। এটি অন্য চলকের জন্য সমাধান করা একই পূরক সম্পর্ক। উদাহরণস্বরূপ, B 62 ডিগ্রি হলে, A = 90 - 62 = 28 ডিগ্রি। লক্ষ্য করুন এই ক্যালকুলেটর তার ইনপুট হিসেবে কোণ A গ্রহণ করে, তাই কেবল B জানা থাকলে বিপরীত সূত্রটি হাতে প্রয়োগ করুন।"
      },
      {
        "question": "সাইন, কোসাইন বা ট্যানজেন্ট ক্যালকুলেটর কখন ব্যবহার করব?",
        "answer": "কোনো কোণ এখনো জানা নেই কিন্তু দুটি বাহুর দৈর্ঘ্য আছে তখন বিপরীত ত্রিকোণমিতিক ক্যালকুলেটর ব্যবহার করুন। সাইন থেকে কোণ ক্যালকুলেটরের বিপরীত বাহু ও অতিভুজ দরকার, কোসাইন থেকে কোণ ক্যালকুলেটরের সন্নিহিত বাহু ও অতিভুজ দরকার, এবং ট্যানজেন্ট থেকে কোণ ক্যালকুলেটরের দুটি বাহু দরকার। যেকোনো সূক্ষ্মকোণ জানা হলেই, অনুপস্থিত-কোণ ক্যালকুলেটর কাজ শেষ করে।"
      }
    ],
    "relatedHeading": "সম্পর্কিত ত্রিভুজ ক্যালকুলেটরগুলো দেখুন",
    "relatedItems": [
      "সমকোণী ত্রিভুজের সাইন থেকে কোণ ক্যালকুলেটর",
      "সমকোণী ত্রিভুজের কোসাইন থেকে কোণ ক্যালকুলেটর",
      "সমকোণী ত্রিভুজের ট্যানজেন্ট থেকে কোণ ক্যালকুলেটর",
      "সমকোণী ত্রিভুজের সাইন থেকে বাহু ক্যালকুলেটর",
      "সমকোণী ত্রিভুজের কোসাইন থেকে বাহু ক্যালকুলেটর",
      "সমকোণী ত্রিভুজের ট্যানজেন্ট থেকে বাহু ক্যালকুলেটর"
    ]
  },
  "ja": {
    "tocHeading": "このガイドの内容",
    "tocItems": {
      "missing-intro": "直角三角形の不足している角を求める方法",
      "missing-angles": "直角三角形の角とは?",
      "missing-formula": "不足している角を求める公式",
      "missing-howto": "計算機の使い方",
      "missing-examples": "手順付きの例題",
      "missing-applications": "実生活での応用",
      "missing-relationship": "余角の変化",
      "missing-reverse": "角Bがわかっている場合は?",
      "missing-vs": "余角と補角",
      "missing-mistakes": "よくある間違い",
      "missing-verify": "答えの確認",
      "missing-choose": "適切な計算機の選び方",
      "missing-faq": "よくある質問",
      "missing-related": "関連する計算機"
    },
    "sections": {
      "missing-intro": {
        "h2": "直角三角形の不足している角を求める方法",
        "blocks": [
          {
            "kind": "p",
            "text": "直角三角形の1つの鋭角が[[35^\\circ]]なら、不足している角は[[90^\\circ-35^\\circ=55^\\circ]]です。この1回の引き算が計算のすべてです。直角三角形には必ず1つの90度の角があるため、残りの2つの角は、余った90度をちょうど分け合わなければなりません。既知の角を90度から引けば、辺の長さも三角関数も使わずに、不足している角がわかります。"
          },
          {
            "kind": "p",
            "text": "この場合の答え55度は、同じ直角三角形のもう一方の鋭角を表します。2つの角は常に対として働きます。一方がわかれば、もう一方は完全に決まるのです。この計算機は、まさにその状況、つまり1つの角がすでにわかっていて、余角だけが不足しているときのためのものです。まだ1つも角がわかっていない場合は、<a href=\"/right-triangle-angle-from-tangent-calculator/\" class=\"text-primary hover:underline\">タンジェントから角度を求める計算機</a>や、サイン・コサイン版の計算機が、測定した辺から最初の角を導きます。"
          }
        ]
      },
      "missing-angles": {
        "h2": "直角三角形の角とは?",
        "blocks": [
          {
            "kind": "h3",
            "text": "直角"
          },
          {
            "kind": "p",
            "text": "90度の角は完全な角(かど)を表します。垂直な壁と水平な床の間の角です。すべての直角三角形で、この角は固定されています。大きさが変わることはなく、図では頂点に小さな正方形で表されます。1つの角が永久に90度に固定されているため、残りの2つの角は、分け合える90度しか残されていません。そのため、どちらも鋭角にならざるをえないのです。"
          },
          {
            "kind": "h3",
            "text": "2つの鋭角"
          },
          {
            "kind": "p",
            "text": "鋭角は[[0^\\circ]]より大きく[[90^\\circ]]より小さい角です。直角三角形の残りの2つの角はこの範囲に入り、その合計が常に90度になるため余角と呼ばれます。この対は厳密です。1つの鋭角がわかれば、パートナーの値は1つに決まるので、不足している角は推測の問題にはなりません。"
          },
          {
            "kind": "h3",
            "text": "余角とは?"
          },
          {
            "kind": "p",
            "text": "2つの角の合計が[[90^\\circ]]になるとき、それらは余角です。[[30^\\circ+60^\\circ=90^\\circ]]、[[35^\\circ+55^\\circ=90^\\circ]]、[[45^\\circ+45^\\circ=90^\\circ]]の対は、すべて余角です。余角は等しい必要はありません。等しくなるのは、それぞれ45度のときだけです。合計が90度になる2つの正の角なら、同じ三角形の中になくても余角になります。"
          },
          {
            "kind": "h3",
            "text": "三角形の角の合計が180度になる理由"
          },
          {
            "kind": "p",
            "text": "どんな形の三角形でも、3つの内角の合計はちょうど180度です。直角三角形では、固定された直角がすぐにそのうち90度を占めるため、2つの鋭角の合計に残るのはちょうど90度です。下の図は、角が35度、55度、90度の三角形の完全な内訳を示しています。"
          }
        ],
        "imgAlt": "角A 35度、角B 55度、角C 90度とラベル付けされた直角三角形",
        "figcaption": "角A(35度)と角B(55度)は余角です。A + B = 90度、35 + 55 + 90 = 180度。"
      },
      "missing-formula": {
        "h2": "不足している角を求める公式",
        "blocks": [
          {
            "kind": "p",
            "text": "この公式は、三角形の角の合計の規則から直接導かれます。まず一般的な式から始めます:"
          },
          {
            "kind": "p",
            "text": "[[[A+B+C=180^\\circ]]]"
          },
          {
            "kind": "p",
            "text": "三角形が直角三角形なので、3つ目の角は固定されています:"
          },
          {
            "kind": "p",
            "text": "[[[C=90^\\circ]]]"
          },
          {
            "kind": "p",
            "text": "この値を合計に代入します:"
          },
          {
            "kind": "p",
            "text": "[[[A+B+90^\\circ=180^\\circ]]]"
          },
          {
            "kind": "p",
            "text": "両辺から90度を引くと、2つの鋭角だけが残ります:"
          },
          {
            "kind": "p",
            "text": "[[[A+B=90^\\circ]]]"
          },
          {
            "kind": "p",
            "text": "最後に、既知の角[[A]]を両辺から引いて、不足している角を分離します:"
          },
          {
            "kind": "p",
            "text": "[[[B=90^\\circ-A]]]"
          },
          {
            "kind": "p",
            "text": "各ステップは、幾何学的な事実に適用した普通の代数です。暗記するものは何もありません。公式の中の90度は、直角が半分を取った後に残った、角の合計の取り分なのです。"
          },
          {
            "kind": "p",
            "text": "同じ関係は逆向きにも働きます。既知なのが角[[B]]の場合、[[A]]について解くと次のようになります:"
          },
          {
            "kind": "p",
            "text": "[[[A=90^\\circ-B]]]"
          },
          {
            "kind": "p",
            "text": "この計算機が最初の式を使うのは、入力欄が角[[A]]を受け付けて角[[B]]を返すからです。2つの公式は別の規則ではなく、同じ余角の関係を、異なる未知数について解いたものです。"
          },
          {
            "kind": "h3",
            "text": "180度ではなく90度を使う理由"
          },
          {
            "kind": "p",
            "text": "よくある誤りは、既知の角を180度から引くことです。その合計は三角形の3つの角すべてをカバーするので、それだけを使うと、直角がすでに計算に入っていることを忘れてしまいます。[[A=35^\\circ]]の場合、誤った計算では[[180^\\circ-35^\\circ=145^\\circ]]となり、直角三角形の鋭角にはなりえません。正しい計算[[90^\\circ-35^\\circ=55^\\circ]]は直角を尊重し、すぐに確認できます。[[35^\\circ+55^\\circ+90^\\circ=180^\\circ]]です。"
          }
        ],
        "imgAlt": "180度の三角形の合計と90度の鋭角の対を対比する2つのパネル",
        "figcaption": "パートAは三角形の合計全体を示し、パートBは余角である鋭角だけを分離します。"
      },
      "missing-howto": {
        "h2": "直角三角形の不足している角の計算機の使い方",
        "blocks": [
          {
            "kind": "p",
            "text": "以下の手順は、このページの実際のインターフェースに対応しています。"
          }
        ],
        "steps": [
          "<strong>直角三角形であることを確認します。</strong> 他のことをする前に、図形に本物の90度の角があることを確かめます。この公式は直角三角形にのみ適用されます。",
          "<strong>すでにわかっている鋭角を見つけます。</strong> これが角[[A]]、計算機に入力する値です。",
          "<strong>既知の角が有効であることを確認します。</strong> [[0^\\circ]]より大きく[[90^\\circ]]より小さくなければなりません。この範囲を外れると、直角三角形の鋭角にはなりえません。",
          "<strong>既知の角[[A]]を度単位で入力します。</strong> 入力欄は68.5のような小数も受け付けるので、測定の精度をそのまま保ってください。",
          "<strong>角Bの計算をクリックします。</strong> ツールが入力値に[[B=90^\\circ-A]]を適用します。",
          "<strong>計算された余角を読み取ります。</strong> 出力は角[[B]]を度単位で表したものです。",
          "<strong>2つの鋭角を足して結果を確認します。</strong> 合計は90度でなければなりません。そうでなければ入力を見直してください。",
          "<strong>新しい計算を始めたいときはリセットを使います。</strong> 入力が消去され、新しい角を入力できます。"
        ],
        "closingParagraphs": [
          "この計算機が決して尋ねないものに注目してください。対辺の長さも、隣辺の長さも、斜辺も、サイン・コサイン・タンジェントの値も不要です。既知の鋭角が1つあれば、それが入力のすべてです。角の合計の規則が残りを処理するからです。またこのツールは、ラジアンや角[[B]]の直接入力も受け付けません。入力欄は角[[A]]を度単位で入力するための専用のものです。"
        ]
      },
      "missing-examples": {
        "h2": "不足している角を求める手順付きの例題",
        "blocks": [
          {
            "kind": "p",
            "text": "この4つの例題は、実生活の応用に入る前に基本技術を身につけます。いずれも同じパターンです。公式を書き、代入し、引き算します。"
          },
          {
            "kind": "h3",
            "text": "例題1: 既知の角が35度の場合"
          },
          {
            "kind": "p",
            "text": "[[A=35^\\circ]]が与えられたとき、角[[B]]を求めます。"
          },
          {
            "kind": "p",
            "text": "手順1: 公式を書きます。[[B=90^\\circ-A]]"
          },
          {
            "kind": "p",
            "text": "手順2: 既知の角を代入します。[[B=90^\\circ-35^\\circ]]"
          },
          {
            "kind": "p",
            "text": "手順3: 引き算します。[[B=55^\\circ]]"
          },
          {
            "kind": "p",
            "text": "確認: [[35^\\circ+55^\\circ=90^\\circ]]。2つの鋭角の合計がちょうど90度になり、それぞれが0度と90度の間に厳密に収まるため、この答えは有効です。"
          },
          {
            "kind": "h3",
            "text": "例題2: 既知の角が20度の場合"
          },
          {
            "kind": "p",
            "text": "[[A=20^\\circ]]が与えられたとき:"
          },
          {
            "kind": "p",
            "text": "[[B=90^\\circ-20^\\circ=70^\\circ]]"
          },
          {
            "kind": "p",
            "text": "鋭角が小さいほど、余角は大きくなります。対の合計は常に90度でなければならないため、一方の角から1度引くごとに、もう一方に1度加わるのです。ここでは、20度の角がパートナーに70度という余裕を残しています。"
          },
          {
            "kind": "h3",
            "text": "例題3: 二等辺直角三角形"
          },
          {
            "kind": "p",
            "text": "[[A=45^\\circ]]が与えられたとき:"
          },
          {
            "kind": "p",
            "text": "[[B=90^\\circ-45^\\circ=45^\\circ]]"
          },
          {
            "kind": "p",
            "text": "2つの鋭角はどちらも45度で等しくなります。これが二等辺直角三角形であり、鋭角が一致する唯一の直角三角形です。2つの脚の長さも等しいため、45-45-90三角形は製図や建築のレイアウトでよく登場します。"
          },
          {
            "kind": "h3",
            "text": "例題4: 既知の角が68.5度の場合"
          },
          {
            "kind": "p",
            "text": "[[A=68.5^\\circ]]が与えられたとき:"
          },
          {
            "kind": "p",
            "text": "[[B=90^\\circ-68.5^\\circ=21.5^\\circ]]"
          },
          {
            "kind": "p",
            "text": "比較的大きい鋭角には、比較的小さい余角が対応します。小数の入力も整数の入力とまったく同じように扱います。0.5の位置をそろえて丁寧に引き算すれば、90から68.5を引いて21.5が得られます。確認も成り立ちます。[[68.5^\\circ+21.5^\\circ=90^\\circ]]です。"
          }
        ]
      },
      "missing-applications": {
        "h2": "不足している角の実生活での応用",
        "blocks": [
          {
            "kind": "p",
            "text": "例題に入る前に、注意すべき点が1つあります。不足している角の公式が直接適用されるのは、2つの角が同じ直角三角形に属するときです。実用的な場面では、水平面と垂直面が垂直な基準線として使われることが多く、はしごや垂木のような斜めの部材が斜辺を成します。以下の例題では、その仮定を用いる箇所で明示します。"
          },
          {
            "kind": "h3",
            "text": "例題5: 垂木の鉛直方向に対する角度を求める"
          },
          {
            "kind": "p",
            "text": "屋根の垂木が水平方向と[[35^\\circ]]の角を成しています。同じ垂木と鉛直な基準線の間の角を求めます。"
          },
          {
            "kind": "p",
            "text": "水平方向から測った[[A=35^\\circ]]が与えられています。"
          },
          {
            "kind": "p",
            "text": "[[B=90^\\circ-35^\\circ=55^\\circ]]"
          },
          {
            "kind": "p",
            "text": "水平と鉛直の基準線は垂直なので、2つの角は余角です。55度という結果は、鉛直方向に対する角度であり、完全な屋根勾配や構造計算ではありません。"
          },
          {
            "kind": "h3",
            "text": "例題6: はしごの壁に対する角度を求める"
          },
          {
            "kind": "p",
            "text": "はしごが垂直な壁に立てかけられ、水平な地面と[[68^\\circ]]の角を成しています。はしごと壁の間の角を求めます。"
          },
          {
            "kind": "p",
            "text": "[[B=90^\\circ-68^\\circ=22^\\circ]]"
          },
          {
            "kind": "p",
            "text": "この理想化したモデルでは、地面と壁が直角を成し、はしごが斜辺になります。22度の角は、壁に対するはしごの向きを表します。この計算だけでは、はしごが安全に設置されているかは判断できません。"
          },
          {
            "kind": "h3",
            "text": "例題7: スロープの鉛直方向に対する角度を理解する"
          },
          {
            "kind": "p",
            "text": "まっすぐなスロープが水平方向と[[8^\\circ]]の角を成しています。スロープの方向と鉛直な基準線の間の余角を求めます。"
          },
          {
            "kind": "p",
            "text": "[[B=90^\\circ-8^\\circ=82^\\circ]]"
          },
          {
            "kind": "p",
            "text": "鉛直方向に対するスロープの角は、水平方向に対する角の余角です。緩やかな8度の傾斜は、鉛直に対しては急な82度の角を残します。この角だけでは、バリアフリー性や建築基準への適合は判断できません。"
          },
          {
            "kind": "h3",
            "text": "例題8: 階段のささら桁の余角を求める"
          },
          {
            "kind": "p",
            "text": "階段のささら桁が床と[[32^\\circ]]の角を成しています。鉛直な基準線に対する角度を計算します。"
          },
          {
            "kind": "p",
            "text": "[[B=90^\\circ-32^\\circ=58^\\circ]]"
          },
          {
            "kind": "p",
            "text": "床、鉛直な基準、斜めのささら桁が直角三角形を成します。58度という結果は、鉛直に対するささら桁の向きを表します。階段の寸法や建築基準への適合を検証するものではありません。"
          },
          {
            "kind": "h3",
            "text": "例題9: 斜めブレースの垂直支柱に対する角度を計算する"
          },
          {
            "kind": "p",
            "text": "斜めブレースが水平梁と[[40^\\circ]]の角を成しています。ブレースと垂直な支柱の間の角を求めます。"
          },
          {
            "kind": "p",
            "text": "[[B=90^\\circ-40^\\circ=50^\\circ]]"
          },
          {
            "kind": "p",
            "text": "余角の規則が適用されるには、2つの基準方向が垂直でなければなりません。50度の角は純粋な幾何学の結果であり、ブレースの構造強度を決定するものではありません。"
          },
          {
            "kind": "h3",
            "text": "例題10: 支線の垂直な柱に対する角度を求める"
          },
          {
            "kind": "p",
            "text": "支線が水平な地面と[[30^\\circ]]の角を成しています。支線と垂直な柱の間の角を求めます。"
          },
          {
            "kind": "p",
            "text": "[[B=90^\\circ-30^\\circ=60^\\circ]]"
          },
          {
            "kind": "p",
            "text": "水平な地面と垂直な柱が直角を定め、支線が斜辺になります。60度という結果は、同じ支線の方向を鉛直の基準に対して言い換えたものです。支線の張力やアンカーの安全性を定めるものではありません。"
          },
          {
            "kind": "h3",
            "text": "例題11: 仰角を余角に変換する"
          },
          {
            "kind": "p",
            "text": "測量図に、水平方向の上[[24^\\circ]]の仰角で引かれた視線が記録されています。鉛直方向に対する余角を計算します。"
          },
          {
            "kind": "p",
            "text": "[[B=90^\\circ-24^\\circ=66^\\circ]]"
          },
          {
            "kind": "p",
            "text": "水平方向から測った角と鉛直方向から測った角は、垂直な視点から同じ視線を表します。この例題では、水平と鉛直の基準が垂直で、視線がまっすぐであることを仮定しています。"
          },
          {
            "kind": "h3",
            "text": "例題12: 屋根勾配の鉛直基準に対する角度を求める"
          },
          {
            "kind": "p",
            "text": "屋根勾配が水平方向に対して[[27^\\circ]]と測定されました。鉛直方向に対する余角を求めます。"
          },
          {
            "kind": "p",
            "text": "[[B=90^\\circ-27^\\circ=63^\\circ]]"
          },
          {
            "kind": "p",
            "text": "2つの測定値は、垂直な基準方向から同じ勾配を表したものです。どちらの測定値も、それだけでは構造評価にはなりません。"
          },
          {
            "kind": "h3",
            "text": "例題13: 正方形の製図レイアウトにおける対角線"
          },
          {
            "kind": "p",
            "text": "正方形の製図レイアウトの対角線が、一方の辺と[[45^\\circ]]の角を成しています。隣接する垂直な辺との角を求めます。"
          },
          {
            "kind": "p",
            "text": "[[B=90^\\circ-45^\\circ=45^\\circ]]"
          },
          {
            "kind": "p",
            "text": "対角線は正方形の直角を二等分するので、結果の角はどちらも45度です。この関係は、基本的な作図やレイアウトの確認に役立ちます。測定した対角線が角を均等に分けていなければ、レイアウトは正方形ではありません。"
          },
          {
            "kind": "h3",
            "text": "例題14: 機械パネルの余角を求める"
          },
          {
            "kind": "p",
            "text": "パネルが水平方向から[[15^\\circ]]傾いています。パネルの向きと鉛直な基準方向の間の角を計算します。"
          },
          {
            "kind": "p",
            "text": "[[B=90^\\circ-15^\\circ=75^\\circ]]"
          },
          {
            "kind": "p",
            "text": "水平と鉛直の基準は垂直なので、パネルの傾きとその余角は同じ向きを表します。この結果は向きだけを表し、機械の安全性や性能を表すものではありません。"
          },
          {
            "kind": "h3",
            "text": "例題15: 木の観測角を変換する"
          },
          {
            "kind": "p",
            "text": "人が木の頂上を、水平方向の上[[38^\\circ]]の仰角で見ています。視線と鉛直な基準方向の間の余角を求めます。"
          },
          {
            "kind": "p",
            "text": "[[B=90^\\circ-38^\\circ=52^\\circ]]"
          },
          {
            "kind": "p",
            "text": "この計算は基準方向を変えるだけで、視線そのものは変わりません。52度の角は、同じ視線を鉛直に対して測ったものにすぎません。木の高さを計算するものではありません。"
          },
          {
            "kind": "h3",
            "text": "例題16: 手すりの垂直支柱に対する角度を求める"
          },
          {
            "kind": "p",
            "text": "斜めの手すりが水平な踊り場と[[55^\\circ]]の角を成しています。垂直な支柱の線に対する余角を求めます。"
          },
          {
            "kind": "p",
            "text": "[[B=90^\\circ-55^\\circ=35^\\circ]]"
          },
          {
            "kind": "p",
            "text": "余角は、同じ斜めの向きを異なる基準から表します。水平に対して急な55度の角は、鉛直に対しては緩やかな35度の角になります。この角だけでは、バリアフリーや建築要件を検証できません。"
          },
          {
            "kind": "h3",
            "text": "実例の比較"
          }
        ],
        "table": {
          "headers": [
            "状況",
            "既知の角",
            "基準方向",
            "不足している角",
            "計算",
            "解釈"
          ],
          "rows": [
            [
              "垂木",
              "35°",
              "水平",
              "55°",
              "90 - 35",
              "鉛直方向に対する垂木の角度"
            ],
            [
              "はしご",
              "68°",
              "地面",
              "22°",
              "90 - 68",
              "壁に対するはしごの角度"
            ],
            [
              "スロープ",
              "8°",
              "水平",
              "82°",
              "90 - 8",
              "鉛直方向に対するスロープの向き"
            ],
            [
              "階段のささら桁",
              "32°",
              "床",
              "58°",
              "90 - 32",
              "鉛直方向に対するささら桁の角度"
            ],
            [
              "斜めブレース",
              "40°",
              "水平梁",
              "50°",
              "90 - 40",
              "垂直支柱に対するブレースの角度"
            ],
            [
              "支線",
              "30°",
              "地面",
              "60°",
              "90 - 30",
              "柱に対する支線の角度"
            ],
            [
              "測量の視線",
              "24°",
              "水平",
              "66°",
              "90 - 24",
              "鉛直方向に対する視線"
            ],
            [
              "屋根勾配",
              "27°",
              "水平",
              "63°",
              "90 - 27",
              "鉛直方向に対する勾配の角度"
            ],
            [
              "製図の対角線",
              "45°",
              "一方の辺",
              "45°",
              "90 - 45",
              "隣接する辺に対する対角線"
            ],
            [
              "機械パネル",
              "15°",
              "水平",
              "75°",
              "90 - 15",
              "鉛直方向に対するパネルの向き"
            ],
            [
              "木の観測",
              "38°",
              "水平",
              "52°",
              "90 - 38",
              "鉛直方向に対する視線"
            ],
            [
              "手すり",
              "55°",
              "踊り場",
              "35°",
              "90 - 55",
              "垂直支柱に対する手すり"
            ]
          ]
        }
      },
      "missing-relationship": {
        "h2": "余角の関係を理解する",
        "blocks": [
          {
            "kind": "p",
            "text": "パターンは完全に予測可能です。角[[A]]が大きくなれば、合計が90度に固定されているため、角[[B]]はちょうど同じ量だけ小さくなります。[[A]]が小さくなれば、[[B]]はその差を埋めるように大きくなります。[[A=45^\\circ]]で2つは真ん中で出会い、3つの異なる頂点を持つ本物の直角三角形では、どちらの鋭角も[[0^\\circ]]や[[90^\\circ]]には到達できません。"
          }
        ],
        "table": {
          "headers": [
            "既知の角A",
            "式",
            "不足している角B"
          ],
          "rows": [
            [
              "10°",
              "90 - 10",
              "80°"
            ],
            [
              "20°",
              "90 - 20",
              "70°"
            ],
            [
              "30°",
              "90 - 30",
              "60°"
            ],
            [
              "45°",
              "90 - 45",
              "45°"
            ],
            [
              "60°",
              "90 - 60",
              "30°"
            ],
            [
              "75°",
              "90 - 75",
              "15°"
            ],
            [
              "80°",
              "90 - 80",
              "10°"
            ]
          ]
        },
        "closingParagraphs": [
          "この表は45度を中心に対称です。(10, 80)、(20, 70)、(30, 60)の対が互いに鏡映するのは、既知の角と不足している角を入れ替えると、同じ余角の関係を反対側から読むことになるからです。下の4つのパネルがこのトレードオフを視覚化しています。"
        ],
        "imgAlt": "余角の対20-70、30-60、45-45、70-20度を示す4つの三角形",
        "figcaption": "角Aが大きくなるほど、角Bは同じ量だけ小さくなります。合計は90度のままです。"
      },
      "missing-reverse": {
        "h2": "角Bがわかっている場合は?",
        "blocks": [
          {
            "kind": "p",
            "text": "同じ余角の規則は、逆向きにも働きます。既知なのが角[[B]]の場合は、その関係を[[A]]について解きます:"
          },
          {
            "kind": "p",
            "text": "[[[A=90^\\circ-B]]]"
          },
          {
            "kind": "p",
            "text": "新しい公式は必要ありません。役割を入れ替えただけの、まったく同じ方程式です。"
          },
          {
            "kind": "h3",
            "text": "計算例"
          },
          {
            "kind": "p",
            "text": "[[B=62^\\circ]]が与えられたとき:"
          },
          {
            "kind": "p",
            "text": "[[A=90^\\circ-62^\\circ=28^\\circ]]"
          },
          {
            "kind": "p",
            "text": "逆向きの短い例題があと3つ、同じ手順で続きます:"
          }
        ],
        "list": [
          "[[B=15^\\circ]]なら、[[A=90^\\circ-15^\\circ=75^\\circ]]です。",
          "[[B=42^\\circ]]なら、[[A=90^\\circ-42^\\circ=48^\\circ]]です。",
          "[[B=70^\\circ]]なら、[[A=90^\\circ-70^\\circ=20^\\circ]]です。"
        ],
        "closingParagraphs": [
          "実用上の注意が1つあります。この計算機の入力欄は角[[A]]を受け付けて角[[B]]を返します。角[[B]]だけを知っている読者は、インターフェースが[[B]]の直接入力に対応していることが確認できない限り、逆の公式を手計算で適用してください。"
        ]
      },
      "missing-vs": {
        "h2": "余角と補角",
        "blocks": [
          {
            "kind": "p",
            "text": "2つの用語は似ていて、どちらも角の対を表しますが、答える質問が異なります。"
          },
          {
            "kind": "h3",
            "text": "余角"
          },
          {
            "kind": "p",
            "text": "2つの角の合計が[[90^\\circ]]のとき、それらは余角です。直角三角形の2つの鋭角は、教科書的な例です。直角が三角形の合計のうち残りの90度をすでに占めているため、余角にならざるをえないのです。"
          },
          {
            "kind": "h3",
            "text": "補角"
          },
          {
            "kind": "p",
            "text": "2つの角の合計が[[180^\\circ]]のとき、それらは補角です。たとえば、直線は2つの補角に分けることができます。補角の対を、合計が180度ではなく90度になる直角三角形の2つの鋭角と混同してはなりません。"
          }
        ],
        "table": {
          "headers": [
            "関係",
            "合計",
            "例"
          ],
          "rows": [
            [
              "余角",
              "90°",
              "35 + 55"
            ],
            [
              "補角",
              "180°",
              "110 + 70"
            ],
            [
              "直角",
              "90°",
              "直角三角形の固定された角"
            ]
          ]
        },
        "closingParagraphs": [
          "三角形の角の合計全体は180度ですが、2つの鋭角の合計は90度です。この2つの合計を区別することが、このページで最も多い間違いを避ける鍵です。"
        ],
        "imgAlt": "はしご、垂木、ブレース、正方形の対角線の余角を示す4つのパネル",
        "figcaption": "実生活の場面の余角の対: 既知の角がパートナーを決定します。"
      },
      "missing-mistakes": {
        "h2": "不足している角を求めるときのよくある間違い",
        "steps": [
          "<strong>既知の角を90度ではなく180度から引く。</strong> 180度の合計には直角が含まれており、それはすでに固定されています。何が起きるか: [[A=35^\\circ]]の場合、誤った計算では145度となり、ありえない鋭角が出ます。修正: 90度から引き、[[55^\\circ]]を得ます。",
          "<strong>1つの角がすでに90度であることを忘れる。</strong> 直角は計算が不要なため、見落としがちです。何が起きるか: 3つの角すべてが未知であるかのように三角形を扱ってしまいます。修正: 始める前に、直角が180度の合計の半分を占めることを思い出してください。",
          "<strong>計算機に90度を入力する。</strong> このツールは、0度と90度の間の厳密な鋭角を期待します。何が起きるか: 90度の入力では、2つ目の鋭角が入る余地がありません。修正: 既知の鋭角だけを入力してください。",
          "<strong>90度より大きい角を入力する。</strong> 定義上、鋭角が90度を超えることはありません。何が起きるか: 引き算の結果が負になり、ここでは幾何学的な意味を持ちません。修正: 入力が90度未満であることを確認してください。",
          "<strong>0度を入力する。</strong> 0度の角は、三角形を線分に押しつぶします。何が起きるか: 面積のない図形に対して90度の余角を主張する結果が出ます。修正: 正の鋭角だけを使ってください。",
          "<strong>余角と補角を混同する。</strong> 余角の対の合計は90度、補角の対の合計は180度です。何が起きるか: 180度から引くと、項目1の間違いになります。修正: 言葉と合計を対応させます。余角は90度です。",
          "<strong>2つの鋭角が等しくなければならないと思い込む。</strong> 等しくなるのは、それぞれ45度のときだけです。何が起きるか: 20-70の三角形に対称性を期待してしまいます。修正: 引き算に決めさせます。ほとんどの対は異なります。",
          "<strong>角のラベルAとBを取り違える。</strong> この計算機は[[A]]を受け付けて[[B]]を返します。何が起きるか: すでにわかっている余角を、入力であるかのように入力してしまいます。修正: 入力する前に、既知の角にAとラベルを付けてください。",
          "<strong>この特定の計算には辺の長さが必要だと思う。</strong> 辺は三角関数に必要であり、余角には必要ありません。何が起きるか: 引き算だけで済む問題で立ち止まってしまいます。修正: 鋭角がわかっていれば、90度から引いて終わりです。",
          "<strong>単純な引き算で十分なのに、逆サイン・コサイン・タンジェントを使う。</strong> 逆関数は、より難しい質問に答えます。何が起きるか: 余分な作業と、モード設定の間違いの余地が増えます。修正: 角がわかっているときは、<a href=\"/right-triangle-angle-from-sine-calculator/\" class=\"text-primary hover:underline\">サインから角度を求める計算機</a>とその仲間は間違ったツールです。引き算は正確で即座にできます。",
          "<strong>測定した物理的な角が、基準方向を確認せずに自動的に直角三角形を成すと思い込む。</strong> 実際の角は、めったに完全ではありません。何が起きるか: 90度の角が実際には存在しないところに余角の規則を適用してしまいます。修正: 引き算の前に、基準方向が垂直であることを確認してください。",
          "<strong>引き算の前に、入力の測定値を不必要に丸める。</strong> 早い丸めは、入力が本来持っていた精度を捨てます。何が起きるか: 68.5を69に丸めると、21.5ではなく21が出ます。修正: 測定値そのままで引き算し、結果を入力の精度に合わせて丸めてください。"
        ],
        "blocks": [
          {
            "kind": "h3",
            "text": "誤りと正解"
          },
          {
            "kind": "p",
            "text": "[[A=35^\\circ]]が与えられたとき:"
          },
          {
            "kind": "p",
            "text": "誤り: [[180^\\circ-35^\\circ=145^\\circ]]。直角が計算に入っていないため、これは不足している鋭角ではありません。145度は、90度の角と並んで直角三角形の中には収まりません。"
          },
          {
            "kind": "p",
            "text": "正解: [[90^\\circ-35^\\circ=55^\\circ]]。"
          },
          {
            "kind": "p",
            "text": "検証: [[35^\\circ+55^\\circ+90^\\circ=180^\\circ]]。角の合計全体が答えを裏付けます。"
          }
        ]
      },
      "missing-verify": {
        "h2": "不足している角が有効かどうかを確認する方法",
        "blocks": [
          {
            "kind": "p",
            "text": "有効な入力範囲は次のとおりです:"
          },
          {
            "kind": "p",
            "text": "[[[0^\\circ \\lt A \\lt 90^\\circ]]]"
          },
          {
            "kind": "p",
            "text": "計算された角も、同じ範囲を満たさなければなりません:"
          },
          {
            "kind": "p",
            "text": "[[[0^\\circ \\lt B \\lt 90^\\circ]]]"
          },
          {
            "kind": "p",
            "text": "0度や90度の入力は、3つの異なる頂点と正の辺の長さを持つ通常の直角三角形ではなく、退化した極限の場合を生みます。この計算機が厳密な不等式を強制するのは、まさにこのためです。"
          },
          {
            "kind": "h3",
            "text": "方法1: 鋭角を足す"
          },
          {
            "kind": "p",
            "text": "[[A+B=90^\\circ]]を確認します。例: [[35^\\circ+55^\\circ=90^\\circ]]。これが最も速い確認であり、180度の間違いを即座に見つけます。"
          },
          {
            "kind": "h3",
            "text": "方法2: 三角形全体を確認する"
          },
          {
            "kind": "p",
            "text": "[[A+B+90^\\circ=180^\\circ]]を確認します。例: [[35^\\circ+55^\\circ+90^\\circ=180^\\circ]]。普遍的な三角形の角の合計に対して答えを確認します。"
          },
          {
            "kind": "h3",
            "text": "方法3: 逆の計算で確認する"
          },
          {
            "kind": "p",
            "text": "[[B=90^\\circ-A]]なら、[[A=90^\\circ-B]]で元の入力に戻らなければなりません。[[A=35^\\circ]]から[[B=55^\\circ]]が出た場合、逆の確認は[[90^\\circ-55^\\circ=35^\\circ]]です。この一貫性の確認には、辺の測定がまったく不要です。"
          },
          {
            "kind": "p",
            "text": "注意が1つあります。入力の角が物理的な測定によるものなら、その不確かさは結果にも引き継がれます。おおよそ測定した35度からは、おおよその55度しか得られません。測定に合った精度で答えを報告してください。辺の長さを含む確認には、<a href=\"/pythagorean-theorem-calculator/\" class=\"text-primary hover:underline\">三平方の定理の計算機</a>が三角形の幾何学を独立に確認できます。"
          }
        ]
      },
      "missing-choose": {
        "h2": "適切な直角三角形の計算機を選ぶ",
        "blocks": [
          {
            "kind": "p",
            "text": "以下の各ツールは、異なる質問に答えます。実際にわかっていることにツールを合わせてください:"
          }
        ],
        "list": [
          "<strong>直角三角形の不足している角の計算機</strong>(このページ): 1つの鋭角がすでにわかっているときに余角を求めます。入力が辺ではなく角であるときに使います。",
          "<a href=\"/right-triangle-angle-from-sine-calculator/\" class=\"text-primary hover:underline\"><strong>直角三角形のサインから角度を求める計算機</strong></a>: 対辺と斜辺から鋭角を求めます。その2つの長さを測定したときに使います。",
          "<a href=\"/right-triangle-angle-from-cosine-calculator/\" class=\"text-primary hover:underline\"><strong>直角三角形のコサインから角度を求める計算機</strong></a>: 隣辺と斜辺から鋭角を求めます。",
          "<a href=\"/right-triangle-angle-from-tangent-calculator/\" class=\"text-primary hover:underline\"><strong>直角三角形のタンジェントから角度を求める計算機</strong></a>: 対辺と隣辺、つまり2つの脚から鋭角を求めます。",
          "<a href=\"/right-triangle-side-from-sine-calculator/\" class=\"text-primary hover:underline\"><strong>直角三角形のサインから辺を求める計算機</strong></a>: 角と1つの辺がわかっているときに、不足している辺の長さを求めます。",
          "<a href=\"/right-triangle-side-from-cosine-calculator/\" class=\"text-primary hover:underline\"><strong>直角三角形のコサインから辺を求める計算機</strong></a>: 角と斜辺または隣辺から、不足している辺の長さを求めます。",
          "<a href=\"/right-triangle-side-from-tangent-calculator/\" class=\"text-primary hover:underline\"><strong>直角三角形のタンジェントから辺を求める計算機</strong></a>: 既知の角ともう一方の脚から、不足している脚を求めます。"
        ],
        "closingParagraphs": [
          "判断規則は単純です。1つの鋭角がわかっている: このページの不足している角の計算機を使います。適切な2つの辺の長さがわかっている: 対応する逆三角関数の計算機を使います。未知の辺が必要: 辺の計算機を使います。そして、三角関数の計算の後に2つ目の角が必要: 既知の角を90度から引きます。まさにこのページが自動化していることです。"
        ]
      },
      "missing-faq": {
        "h2": "よくある質問",
        "blocks": []
      },
      "missing-related": {
        "h2": "関連する三角形の計算機を見る",
        "blocks": []
      },
      "missing-conclusion": {
        "h2": "自信を持ってあらゆる不足角を求める",
        "blocks": [
          {
            "kind": "p",
            "text": "不足している角の計算は、直角三角形の幾何学で最も単純な操作です。既知の鋭角を90度から引くだけです。その引き算の背後には三角形の角の合計の規則があり、三角形の合計の半分を直角のために確保し、残りの半分を余角の対に残します。既知の角が屋根の垂木から来ても、はしごから来ても、階段のささら桁から来ても、製図のレイアウトから来ても、方法は変わりません。直角を確認し、90度から引き、2つの鋭角の合計が90度になることを検証します。角がすでにわかっていて、パートナーだけが不足しているときのために、このページをブックマークしておきましょう。"
          }
        ]
      }
    },
    "faqs": [
      {
        "question": "直角三角形の不足している角はどうやって求めますか?",
        "answer": "既知の鋭角を90度から引きます。公式はB = 90 - Aです。Aはわかっている角、Bは不足している角です。たとえば、Aが35度なら、B = 90 - 35 = 55度です。辺の長さも三角関数も必要ありません。"
      },
      {
        "question": "2つの鋭角の合計が90度になるのはなぜですか?",
        "answer": "すべての三角形は合計180度を含みます。直角三角形はそのうち90度を直角のために確保するので、残りの2つの鋭角が分け合うのはちょうど90度です。だから直角三角形では常にA + B = 90度になるのです。"
      },
      {
        "question": "不足している角の公式は何ですか?",
        "answer": "公式はB = 90 - Aです。三角形の角の合計A + B + 90 = 180から始め、両辺から90を引いてA + B = 90を得て、さらに両辺からAを引きます。Bが既知の角の場合は、逆の形A = 90 - Bが同じように働きます。"
      },
      {
        "question": "余角とは何ですか?",
        "answer": "2つの角の合計が90度になるとき、それらは余角です。30と60、35と55、45と45の対は、すべて余角です。すべての直角三角形で、2つの鋭角は定義上余角であり、それがまさに不足している角の公式が表すことです。"
      },
      {
        "question": "辺の長さがわからなくても不足している角を求められますか?",
        "answer": "はい。1つの鋭角がわかっていれば、辺の長さはこの計算には無関係です。余角の関係は角の合計だけに依存するので、90度から引けば正確な答えが出ます。辺の長さが必要になるのは、まだ1つも角がわかっていないときだけです。"
      },
      {
        "question": "余角と補角の違いは何ですか?",
        "answer": "余角は合計90度、補角は合計180度です。直角三角形の2つの鋭角は余角です。よくある間違いは、既知の角を90度ではなく180度から引くことです。これは、直角が三角形の合計の半分をすでに占めていることを忘れています。"
      },
      {
        "question": "2つの鋭角が等しくなることはありますか?",
        "answer": "はい、それぞれ45度のときです。その場合90 - 45 = 45となり、三角形は2つの脚が等しい二等辺直角三角形になります。2つの鋭角が一致するのはこの場合だけです。それ以外のすべての直角三角形では、2つは異なります。"
      },
      {
        "question": "既知の角が35度の場合、どうなりますか?",
        "answer": "不足している角は90 - 35 = 55度です。2通りの方法で検証できます。35 + 55 = 90は余角の対を確認し、35 + 55 + 90 = 180は三角形の角の合計全体を確認します。どちらの確認も常に一致すべきです。"
      },
      {
        "question": "既知の角が45度より大きい場合、どうなりますか?",
        "answer": "不足している角は45度より小さくなります。2つの合計は90度でなければならないからです。たとえば、Aが68度なら、B = 90 - 68 = 22度です。既知の角が90度に近づくにつれて、その余角は0に近づきます。"
      },
      {
        "question": "不足している鋭角がちょうど0度や90度になることはありますか?",
        "answer": "通常の直角三角形ではありません。0度や90度の入力は、3つの異なる頂点を持つ三角形ではなく、実際の三角形の面積を持たない退化した極限の場合を表します。この計算機は、既知の角が0度と90度の間に厳密に収まることを要求し、結果も常に同じ範囲に入ります。"
      },
      {
        "question": "角Bがわかっているときに角Aを求めるにはどうすればよいですか?",
        "answer": "逆の公式A = 90 - Bを使います。同じ余角の関係を、もう一方の変数について解いたものです。たとえば、Bが62度なら、A = 90 - 62 = 28度です。なお、この計算機は角Aを入力として受け付けるので、Bだけがわかっている場合は、逆の公式を手計算で適用してください。"
      },
      {
        "question": "サイン、コサイン、タンジェントの計算機は、いつ使うべきですか?",
        "answer": "まだ1つも角がわかっていないが、2つの辺の長さがわかっているときに、逆三角関数の計算機を使います。サインから角度を求める計算機には対辺と斜辺、コサインから角度を求める計算機には隣辺と斜辺、タンジェントから角度を求める計算機には2つの脚が必要です。1つの鋭角がわかれば、あとは不足している角の計算機が仕上げます。"
      }
    ],
    "relatedHeading": "関連する三角形の計算機を見る",
    "relatedItems": [
      "サインから角度を求める直角三角形の計算機",
      "コサインから角度を求める直角三角形の計算機",
      "タンジェントから角度を求める直角三角形の計算機",
      "サインから辺を求める直角三角形の計算機",
      "コサインから辺を求める直角三角形の計算機",
      "タンジェントから辺を求める直角三角形の計算機"
    ]
  },
  "ko": {
    "tocHeading": "이 가이드에서",
    "tocItems": {
      "missing-intro": "직각삼각형의 부족 각도 구하기",
      "missing-angles": "직각삼각형의 각도란?",
      "missing-formula": "부족 각도 구하는 공식",
      "missing-howto": "계산기 사용법",
      "missing-examples": "단계별 예제",
      "missing-applications": "실생활 활용 사례",
      "missing-relationship": "여각의 관계 변화",
      "missing-reverse": "각도 B를 알 때는?",
      "missing-vs": "여각과 보각",
      "missing-mistakes": "흔한 실수",
      "missing-verify": "답 검증하기",
      "missing-choose": "알맞은 계산기 고르기",
      "missing-faq": "자주 묻는 질문",
      "missing-related": "관련 계산기"
    },
    "sections": {
      "missing-intro": {
        "h2": "직각삼각형의 부족 각도 구하기",
        "blocks": [
          {
            "kind": "p",
            "text": "직각삼각형의 한 예각이 [[35^\\circ]]라면, 부족 각도는 [[90^\\circ-35^\\circ=55^\\circ]]입니다. 이 한 번의 뺄셈이 계산의 전부입니다. 직각삼각형에는 항상 90도 각도가 하나 들어 있으므로, 나머지 두 각은 남은 90도를 정확히 나눠 가져야 합니다. 알려진 각도를 90도에서 빼면 부족 각도가 드러나며, 변의 길이나 삼각함수는 전혀 필요하지 않습니다."
          },
          {
            "kind": "p",
            "text": "이 경우 답인 55도는 같은 직각삼각형의 다른 예각을 나타냅니다. 두 각은 항상 한 쌍으로 움직입니다. 어느 하나를 알면 다른 하나가 완전히 정해집니다. 이 계산기는 바로 그런 상황을 위한 도구입니다. 각도를 이미 알고 있고 여각만 모를 때 쓰는 계산기입니다. 아직 각도를 하나도 모른다면, <a href=\\\"/right-triangle-angle-from-tangent-calculator/\\\" class=\\\"text-primary hover:underline\\\">탄젠트로 각도 구하는 계산기</a>나 사인·코사인 계산기로 측정한 변에서 첫 각도를 먼저 구하세요."
          }
        ]
      },
      "missing-angles": {
        "h2": "직각삼각형의 각도란?",
        "blocks": [
          {
            "kind": "h3",
            "text": "직각"
          },
          {
            "kind": "p",
            "text": "90도 각도는 완벽한 모서리를 뜻합니다. 수직인 벽과 수평인 바닥이 이루는 각도입니다. 모든 직각삼각형에서 이 각도는 고정되어 있습니다. 크기가 절대 변하지 않으며, 도형에서는 꼭짓점에 작은 정사각형으로 표시합니다. 한 각도가 영구히 90도로 정해져 있으므로, 나머지 두 각은 90도를 나눠 갖는 수밖에 없어 둘 다 예각이 됩니다."
          },
          {
            "kind": "h3",
            "text": "두 예각"
          },
          {
            "kind": "p",
            "text": "예각은 [[0^\\circ]]보다 크고 [[90^\\circ]]보다 작은 각도입니다. 직각삼각형의 나머지 두 각은 모두 이 범위에 들고, 합이 항상 90도가 되므로 여각이라고 부릅니다. 대응 관계는 엄격합니다. 한 예각을 알면 짝 각도가 가질 수 있는 값은 정확히 하나로 정해지므로, 부족 각도는 어림짐작의 대상이 아닙니다."
          },
          {
            "kind": "h3",
            "text": "여각이란?"
          },
          {
            "kind": "p",
            "text": "두 각의 크기를 합했을 때 [[90^\\circ]]가 되면 여각입니다. [[30^\\circ+60^\\circ=90^\\circ]], [[35^\\circ+55^\\circ=90^\\circ]], [[45^\\circ+45^\\circ=90^\\circ]] 쌍은 모두 여각입니다. 여각이 서로 같을 필요는 없습니다. 같은 경우는 45도씩일 때뿐입니다. 합이 90도가 되는 양의 각도 두 개라면, 같은 삼각형 안에 있든 없든 여각이 됩니다."
          },
          {
            "kind": "h3",
            "text": "삼각형의 내각의 합이 180도인 이유"
          },
          {
            "kind": "p",
            "text": "어떤 모양의 삼각형이든 세 내각을 합하면 정확히 180도입니다. 직각삼각형에서는 고정된 직각이 그중 90도를 즉시 차지하므로, 두 예각이 합쳐서 가져갈 몫은 정확히 90도가 남습니다. 아래 도형은 35도, 55도, 90도인 삼각형의 전체 내역을 보여줍니다."
          }
        ],
        "imgAlt": "각도 A 35도, B 55도, C 90도로 표시된 직각삼각형",
        "figcaption": "각도 A(35도)와 B(55도)는 여각입니다. A + B = 90도이며, 35 + 55 + 90 = 180도입니다."
      },
      "missing-formula": {
        "h2": "부족 각도 구하는 공식",
        "blocks": [
          {
            "kind": "p",
            "text": "공식은 삼각형 내각의 합 규칙에서 바로 나옵니다. 일반적인 명제부터 시작합니다."
          },
          {
            "kind": "p",
            "text": "[[[A+B+C=180^\\circ]]]"
          },
          {
            "kind": "p",
            "text": "삼각형이 직각삼각형이므로 세 번째 각도는 고정되어 있습니다."
          },
          {
            "kind": "p",
            "text": "[[[C=90^\\circ]]]"
          },
          {
            "kind": "p",
            "text": "이 값을 내각의 합에 대입합니다."
          },
          {
            "kind": "p",
            "text": "[[[A+B+90^\\circ=180^\\circ]]]"
          },
          {
            "kind": "p",
            "text": "양변에서 90도를 빼면 두 예각만 남습니다."
          },
          {
            "kind": "p",
            "text": "[[[A+B=90^\\circ]]]"
          },
          {
            "kind": "p",
            "text": "마지막으로 알려진 각도 [[A]]를 양변에서 빼서 부족 각도를 따로 떼어냅니다."
          },
          {
            "kind": "p",
            "text": "[[[B=90^\\circ-A]]]"
          },
          {
            "kind": "p",
            "text": "각 단계는 기하학적 사실에 적용한 평범한 대수입니다. 무작정 외우는 것은 없습니다. 공식 속 90도는 직각이 전체의 절반을 가져간 뒤 남은 내각의 합의 몫입니다."
          },
          {
            "kind": "p",
            "text": "같은 관계는 거꾸로도 성립합니다. 각도 [[B]]가 알려진 각도라면 [[A]]에 대해 풀면 됩니다."
          },
          {
            "kind": "p",
            "text": "[[[A=90^\\circ-B]]]"
          },
          {
            "kind": "p",
            "text": "이 계산기는 첫 번째 형태를 사용합니다. 입력 칸이 각도 [[A]]를 받고 각도 [[B]]를 돌려주기 때문입니다. 두 공식은 서로 다른 규칙이 아니라, 같은 여각 관계를 다른 미지수를 향해 푼 것입니다."
          },
          {
            "kind": "h3",
            "text": "180도가 아니라 90도인 이유"
          },
          {
            "kind": "p",
            "text": "흔한 오류는 알려진 각도를 180도에서 빼는 것입니다. 그 합계는 삼각형의 세 각도 전체를 가리키므로, 그것만 쓰면 직각이 이미 계산에 반영되었다는 사실을 잊게 됩니다. [[A=35^\\circ]]일 때 잘못된 계산은 [[180^\\circ-35^\\circ=145^\\circ]]를 내놓는데, 이는 어떤 직각삼각형의 예각도 될 수 없습니다. 올바른 계산 [[90^\\circ-35^\\circ=55^\\circ]]는 직각을 존중하며, 바로 검증할 수 있습니다. [[35^\\circ+55^\\circ+90^\\circ=180^\\circ]]입니다."
          }
        ],
        "imgAlt": "180도 삼각형 내각의 합과 90도 예각 쌍을 대조하는 두 패널",
        "figcaption": "A 부분은 삼각형 내각의 합 전체를 보여주고, B 부분은 여각인 두 예각만 따로 떼어 보여줍니다."
      },
      "missing-howto": {
        "h2": "직각삼각형 부족 각도 계산기 사용법",
        "blocks": [
          {
            "kind": "p",
            "text": "아래 순서는 이 페이지의 실제 화면과 일치합니다."
          }
        ],
        "steps": [
          "<strong>직각삼각형인지 확인하세요.</strong> 다른 일을 하기 전에 도형에 진짜 90도 모서리가 있는지 확인하세요. 공식은 직각삼각형에만 적용됩니다.",
          "<strong>이미 알고 있는 예각을 찾으세요.</strong> 이것이 각도 [[A]]이며, 계산기에 입력할 값입니다.",
          "<strong>알려진 각도가 유효한지 확인하세요.</strong> [[0^\\circ]]보다 크고 [[90^\\circ]]보다 작아야 합니다. 이 범위를 벗어나면 직각삼각형의 예각이 될 수 없습니다.",
          "<strong>알려진 각도 [[A]]를 도 단위로 입력하세요.</strong> 입력 칸은 68.5 같은 소수도 받으므로, 측정의 정밀도를 그대로 유지하세요.",
          "<strong>각도 B 계산 버튼을 누르세요.</strong> 도구가 입력값에 [[B=90^\\circ-A]]를 적용합니다.",
          "<strong>계산된 여각을 읽으세요.</strong> 출력은 도 단위의 각도 [[B]]입니다.",
          "<strong>두 예각을 더해 결과를 점검하세요.</strong> 합이 90도가 되어야 합니다. 그렇지 않으면 입력을 다시 확인하세요.",
          "<strong>새 계산을 시작하려면 초기화를 사용하세요.</strong> 입력이 지워져 새 각도를 입력할 수 있습니다."
        ],
        "closingParagraphs": [
          "계산기가 절대 묻지 않는 것에 주목하세요. 대변의 길이도, 인접변의 길이도, 빗변도, 사인·코사인·탄젠트 값도 묻지 않습니다. 알려진 예각 하나가 전체 입력인 이유는 내각의 합 규칙이 나머지를 처리하기 때문입니다. 이 도구는 라디안 입력이나 각도 [[B]]의 직접 입력도 받지 않습니다. 입력 칸은 도 단위의 각도 [[A]] 전용입니다."
        ]
      },
      "missing-examples": {
        "h2": "부족 각도 구하기 단계별 예제",
        "blocks": [
          {
            "kind": "p",
            "text": "이 네 가지 예제로 실생활 응용에 들어가기 전에 핵심 기술을 다집니다. 모든 예제는 같은 순서로 진행됩니다. 공식 쓰기, 대입, 뺄셈."
          },
          {
            "kind": "h3",
            "text": "예제 1: 알려진 각도가 35도"
          },
          {
            "kind": "p",
            "text": "[[A=35^\\circ]]가 주어졌을 때 각도 [[B]]를 구하세요."
          },
          {
            "kind": "p",
            "text": "1단계: 공식을 씁니다. [[B=90^\\circ-A]]"
          },
          {
            "kind": "p",
            "text": "2단계: 알려진 각도를 대입합니다. [[B=90^\\circ-35^\\circ]]"
          },
          {
            "kind": "p",
            "text": "3단계: 뺍니다. [[B=55^\\circ]]"
          },
          {
            "kind": "p",
            "text": "검증: [[35^\\circ+55^\\circ=90^\\circ]]. 두 예각의 합이 정확히 90도이고, 각각이 0도와 90도 사이에 엄격히 들어 있으므로 답은 유효합니다."
          },
          {
            "kind": "h3",
            "text": "예제 2: 알려진 각도가 20도"
          },
          {
            "kind": "p",
            "text": "[[A=20^\\circ]]가 주어졌습니다."
          },
          {
            "kind": "p",
            "text": "[[B=90^\\circ-20^\\circ=70^\\circ]]"
          },
          {
            "kind": "p",
            "text": "예각이 작으면 여각은 커집니다. 한 쌍의 합이 항상 90도여야 하므로, 한 각도에서 빠진 1도는 다른 각도에 더해집니다. 여기서는 20도 각도가 짝 각도에 넉넉한 70도를 남깁니다."
          },
          {
            "kind": "h3",
            "text": "예제 3: 이등변 직각삼각형"
          },
          {
            "kind": "p",
            "text": "[[A=45^\\circ]]가 주어졌습니다."
          },
          {
            "kind": "p",
            "text": "[[B=90^\\circ-45^\\circ=45^\\circ]]"
          },
          {
            "kind": "p",
            "text": "두 예각이 모두 45도로 같습니다. 이것이 이등변 직각삼각형으로, 예각이 서로 같은 유일한 직각삼각형입니다. 두 직각변의 길이도 같기 때문에 45-45-90 삼각형은 제도와 건축 배치에서 자주 등장합니다."
          },
          {
            "kind": "h3",
            "text": "예제 4: 알려진 각도가 68.5도"
          },
          {
            "kind": "p",
            "text": "[[A=68.5^\\circ]]가 주어졌습니다."
          },
          {
            "kind": "p",
            "text": "[[B=90^\\circ-68.5^\\circ=21.5^\\circ]]"
          },
          {
            "kind": "p",
            "text": "비교적 큰 예각은 비교적 작은 여각을 갖습니다. 소수 입력도 정수 입력과 똑같이 계산합니다. .5의 자리를 맞춰 조심스럽게 빼면 90 빼기 68.5는 21.5가 됩니다. 검증도 성립합니다. [[68.5^\\circ+21.5^\\circ=90^\\circ]]."
          }
        ]
      },
      "missing-applications": {
        "h2": "부족 각도의 실생활 활용",
        "blocks": [
          {
            "kind": "p",
            "text": "예제에 들어가기 전에 한 가지를 짚고 넘어가야 합니다. 부족 각도 공식은 두 각도가 같은 직각삼각형에 속할 때 직접 적용됩니다. 실제 장면에서는 수평면과 수직면이 수직 기준선 역할을 하는 경우가 많고, 사다리나 서까래 같은 대각선 부재가 빗변이 됩니다. 아래 예제들은 그 가정을 쓰는 곳마다 명시합니다."
          },
          {
            "kind": "h3",
            "text": "예제 5: 지붕 서까래의 수직 기준선에 대한 각도 구하기"
          },
          {
            "kind": "p",
            "text": "지붕 서까래가 수평면과 [[35^\\circ]]를 이룹니다. 같은 서까래와 수직 기준선이 이루는 각도를 구하세요."
          },
          {
            "kind": "p",
            "text": "수평면에서 잰 [[A=35^\\circ]]가 주어졌습니다."
          },
          {
            "kind": "p",
            "text": "[[B=90^\\circ-35^\\circ=55^\\circ]]"
          },
          {
            "kind": "p",
            "text": "수평 기준선과 수직 기준선은 수직이므로 두 각도는 여각입니다. 55도라는 결과는 수직에 대한 각도이지, 지붕 물매나 구조 계산 전체가 아닙니다."
          },
          {
            "kind": "h3",
            "text": "예제 6: 사다리와 벽 사이의 각도 구하기"
          },
          {
            "kind": "p",
            "text": "사다리가 수직 벽에 기대어 수평인 지면과 [[68^\\circ]]를 이룹니다. 사다리와 벽 사이의 각도를 구하세요."
          },
          {
            "kind": "p",
            "text": "[[B=90^\\circ-68^\\circ=22^\\circ]]"
          },
          {
            "kind": "p",
            "text": "이 단순화된 모형에서는 지면과 벽이 직각을 이루고 사다리가 빗변이 됩니다. 22도 각도는 벽에 대한 사다리의 방향을 나타냅니다. 이 계산만으로는 사다리가 안전하게 놓였는지 판단할 수 없습니다."
          },
          {
            "kind": "h3",
            "text": "예제 7: 경사로의 수직 기준선에 대한 각도 이해하기"
          },
          {
            "kind": "p",
            "text": "곧은 경사로가 수평면과 [[8^\\circ]]를 이룹니다. 경사로 방향과 수직 기준선이 이루는 여각을 구하세요."
          },
          {
            "kind": "p",
            "text": "[[B=90^\\circ-8^\\circ=82^\\circ]]"
          },
          {
            "kind": "p",
            "text": "수직에 대한 경사로 각도는 수평에 대한 각도의 여각입니다. 완만한 8도 경사는 수직에 대해 가파른 82도 각도를 남깁니다. 이 각도만으로는 접근성이나 건축 기준 충족 여부를 판단할 수 없습니다."
          },
          {
            "kind": "h3",
            "text": "예제 8: 계단 스트링거의 여각 구하기"
          },
          {
            "kind": "p",
            "text": "계단 스트링거가 바닥과 [[32^\\circ]]를 이룹니다. 수직 기준선에 대한 각도를 계산하세요."
          },
          {
            "kind": "p",
            "text": "[[B=90^\\circ-32^\\circ=58^\\circ]]"
          },
          {
            "kind": "p",
            "text": "바닥, 수직 기준선, 대각선 스트링거가 직각삼각형을 이룹니다. 58도라는 결과는 수직에 대한 스트링거의 방향을 나타냅니다. 계단 치수나 건축 기준 충족 여부를 검증해주지는 않습니다."
          },
          {
            "kind": "h3",
            "text": "예제 9: 대각선 브레이스와 수직 지지대 사이의 각도 계산하기"
          },
          {
            "kind": "p",
            "text": "대각선 브레이스가 수평 보와 [[40^\\circ]]를 이룹니다. 브레이스와 수직인 수직 지지대 사이의 각도를 구하세요."
          },
          {
            "kind": "p",
            "text": "[[B=90^\\circ-40^\\circ=50^\\circ]]"
          },
          {
            "kind": "p",
            "text": "여각 규칙이 적용되려면 두 기준 방향이 수직이어야 합니다. 50도 각도는 순수한 기하 결과입니다. 브레이스의 구조 강도를 정해주지는 않습니다."
          },
          {
            "kind": "h3",
            "text": "예제 10: 지지 케이블과 수직 기둥 사이의 각도 구하기"
          },
          {
            "kind": "p",
            "text": "지지 케이블이 수평인 지면과 [[30^\\circ]]를 이룹니다. 케이블과 수직 기둥 사이의 각도를 구하세요."
          },
          {
            "kind": "p",
            "text": "[[B=90^\\circ-30^\\circ=60^\\circ]]"
          },
          {
            "kind": "p",
            "text": "수평인 지면과 수직 기둥이 직각을 정하고, 케이블이 빗변이 됩니다. 60도라는 결과는 같은 케이블 방향을 수직 기준에 대해 다시 나타낸 것입니다. 케이블 장력이나 앵커 안전성을 정해주지는 않습니다."
          },
          {
            "kind": "h3",
            "text": "예제 11: 고도각을 여각으로 바꾸기"
          },
          {
            "kind": "p",
            "text": "측량 도면에 시선이 수평선 위 [[24^\\circ]]의 고도각으로 기록되어 있습니다. 수직에 대한 여각을 계산하세요."
          },
          {
            "kind": "p",
            "text": "[[B=90^\\circ-24^\\circ=66^\\circ]]"
          },
          {
            "kind": "p",
            "text": "수평에서 잰 각도와 수직에서 잰 각도는 수직인 두 관점에서 같은 시선을 나타냅니다. 이 예제는 곧은 시선과 수직인 수평·수직 기준을 가정합니다."
          },
          {
            "kind": "h3",
            "text": "예제 12: 지붕 경사의 수직 기준에 대한 각도 구하기"
          },
          {
            "kind": "p",
            "text": "지붕 경사가 수평에 대해 [[27^\\circ]]로 측정되었습니다. 수직에 대한 여각을 구하세요."
          },
          {
            "kind": "p",
            "text": "[[B=90^\\circ-27^\\circ=63^\\circ]]"
          },
          {
            "kind": "p",
            "text": "두 측정은 수직인 서로 다른 기준 방향에서 같은 경사를 나타냅니다. 어느 측정 하나만으로는 구조 평가가 되지 않습니다."
          },
          {
            "kind": "h3",
            "text": "예제 13: 정사각형 제도 배치의 대각선"
          },
          {
            "kind": "p",
            "text": "정사각형 제도 배치의 대각선이 한 변과 [[45^\\circ]]를 이룹니다. 인접한 수직 변과 이루는 각도를 구하세요."
          },
          {
            "kind": "p",
            "text": "[[B=90^\\circ-45^\\circ=45^\\circ]]"
          },
          {
            "kind": "p",
            "text": "대각선은 정사각형의 직각을 이등분하므로 두 각도 모두 45도가 됩니다. 이 관계는 기본 제도와 배치 점검에 도움이 됩니다. 측정한 대각선이 모서리를 균등하게 나누지 않으면 배치가 정사각형이 아닙니다."
          },
          {
            "kind": "h3",
            "text": "예제 14: 기계 패널의 여각 구하기"
          },
          {
            "kind": "p",
            "text": "패널이 수평에서 [[15^\\circ]] 기울어져 있습니다. 패널 방향과 수직 기준 방향 사이의 각도를 계산하세요."
          },
          {
            "kind": "p",
            "text": "[[B=90^\\circ-15^\\circ=75^\\circ]]"
          },
          {
            "kind": "p",
            "text": "수평과 수직 기준이 수직이므로, 패널 기울기와 여각은 같은 방향을 나타냅니다. 결과는 방향만 나타낼 뿐, 기계 안전이나 성능을 나타내지 않습니다."
          },
          {
            "kind": "h3",
            "text": "예제 15: 나무 관측 각도 바꾸기"
          },
          {
            "kind": "p",
            "text": "사람이 나무 꼭대기를 수평선 위 [[38^\\circ]]의 고도각으로 바라봅니다. 시선과 수직 기준 방향 사이의 여각을 구하세요."
          },
          {
            "kind": "p",
            "text": "[[B=90^\\circ-38^\\circ=52^\\circ]]"
          },
          {
            "kind": "p",
            "text": "계산은 기준 방향만 바꿀 뿐 시선 자체는 그대로입니다. 52도 각도는 같은 시선을 수직에 대해 잰 것일 뿐입니다. 나무 높이를 계산해주지는 않습니다."
          },
          {
            "kind": "h3",
            "text": "예제 16: 난간과 수직 지지대의 각도 구하기"
          },
          {
            "kind": "p",
            "text": "대각선 난간이 수평 착지와 [[55^\\circ]]를 이룹니다. 수직 지지선에 대한 여각을 구하세요."
          },
          {
            "kind": "p",
            "text": "[[B=90^\\circ-55^\\circ=35^\\circ]]"
          },
          {
            "kind": "p",
            "text": "여각은 같은 대각선 방향을 다른 기준에서 나타냅니다. 수평에 대해 가파른 55도 각도는 수직에 대해 완만한 35도 각도가 됩니다. 각도만으로는 접근성이나 시공 요건 충족 여부를 검증할 수 없습니다."
          },
          {
            "kind": "h3",
            "text": "실용 예제 비교"
          }
        ],
        "table": {
          "headers": [
            "상황",
            "알려진 각도",
            "기준 방향",
            "부족 각도",
            "계산",
            "해석"
          ],
          "rows": [
            [
              "지붕 서까래",
              "35°",
              "수평",
              "55°",
              "90 - 35",
              "수직에 대한 서까래 각도"
            ],
            [
              "사다리",
              "68°",
              "지면",
              "22°",
              "90 - 68",
              "벽에 대한 사다리 각도"
            ],
            [
              "경사로",
              "8°",
              "수평",
              "82°",
              "90 - 8",
              "수직에 대한 경사로 방향"
            ],
            [
              "계단 스트링거",
              "32°",
              "바닥",
              "58°",
              "90 - 32",
              "수직에 대한 스트링거 각도"
            ],
            [
              "대각선 브레이스",
              "40°",
              "수평 보",
              "50°",
              "90 - 40",
              "수직 지지대에 대한 브레이스 각도"
            ],
            [
              "지지 케이블",
              "30°",
              "지면",
              "60°",
              "90 - 30",
              "기둥에 대한 케이블 각도"
            ],
            [
              "측량 시선",
              "24°",
              "수평",
              "66°",
              "90 - 24",
              "수직에 대한 시선"
            ],
            [
              "지붕 경사",
              "27°",
              "수평",
              "63°",
              "90 - 27",
              "수직에 대한 경사 각도"
            ],
            [
              "제도 대각선",
              "45°",
              "한 변",
              "45°",
              "90 - 45",
              "인접 변에 대한 대각선"
            ],
            [
              "기계 패널",
              "15°",
              "수평",
              "75°",
              "90 - 15",
              "수직에 대한 패널 방향"
            ],
            [
              "나무 관측",
              "38°",
              "수평",
              "52°",
              "90 - 38",
              "수직에 대한 시선"
            ],
            [
              "난간",
              "55°",
              "착지",
              "35°",
              "90 - 55",
              "수직 지지대에 대한 난간"
            ]
          ]
        }
      },
      "missing-relationship": {
        "h2": "여각의 관계 이해하기",
        "blocks": [
          {
            "kind": "p",
            "text": "패턴은 완전히 예측 가능합니다. 각도 [[A]]가 커지면 각도 [[B]]는 정확히 같은 만큼 작아집니다. 둘의 합이 90도로 고정되어 있기 때문입니다. [[A]]가 작아지면 [[B]]는 빈틈을 메우며 커집니다. [[A=45^\\circ]]에서 둘이 중간에서 만나며, 세 꼭짓점이 분명한 진짜 직각삼각형에서는 어떤 예각도 [[0^\\circ]]나 [[90^\\circ]]에 닿을 수 없습니다."
          }
        ],
        "table": {
          "headers": [
            "알려진 각도 A",
            "공식",
            "부족 각도 B"
          ],
          "rows": [
            [
              "10°",
              "90 - 10",
              "80°"
            ],
            [
              "20°",
              "90 - 20",
              "70°"
            ],
            [
              "30°",
              "90 - 30",
              "60°"
            ],
            [
              "45°",
              "90 - 45",
              "45°"
            ],
            [
              "60°",
              "90 - 60",
              "30°"
            ],
            [
              "75°",
              "90 - 75",
              "15°"
            ],
            [
              "80°",
              "90 - 80",
              "10°"
            ]
          ]
        },
        "closingParagraphs": [
          "표는 45도를 중심으로 대칭입니다. (10, 80), (20, 70), (30, 60) 쌍이 서로를 비추는 이유는, 알려진 각도와 부족 각도를 바꾸는 것이 같은 여각 관계를 반대쪽에서 읽는 것뿐이기 때문입니다. 아래 네 패널이 이 주고받음을 시각적으로 보여줍니다."
        ],
        "imgAlt": "20-70, 30-60, 45-45, 70-20도 여각 쌍을 보여주는 삼각형 네 개",
        "figcaption": "각도 A가 커지면 각도 B는 같은 만큼 작아집니다. 둘의 합은 항상 90도입니다."
      },
      "missing-reverse": {
        "h2": "각도 B를 알 때는?",
        "blocks": [
          {
            "kind": "p",
            "text": "같은 여각 규칙은 거꾸로도 됩니다. 각도 [[B]]가 알려진 각도라면, 관계를 [[A]]에 대해 풉니다."
          },
          {
            "kind": "p",
            "text": "[[[A=90^\\circ-B]]]"
          },
          {
            "kind": "p",
            "text": "새 공식은 필요 없습니다. 역할을 바꾼 똑같은 식입니다."
          },
          {
            "kind": "h3",
            "text": "풀이 예제"
          },
          {
            "kind": "p",
            "text": "[[B=62^\\circ]]가 주어졌습니다."
          },
          {
            "kind": "p",
            "text": "[[A=90^\\circ-62^\\circ=28^\\circ]]"
          },
          {
            "kind": "p",
            "text": "역방향 예제 세 개가 더 같은 단계로 이어집니다."
          }
        ],
        "list": [
          "[[B=15^\\circ]]이므로 [[A=90^\\circ-15^\\circ=75^\\circ]]입니다.",
          "[[B=42^\\circ]]이므로 [[A=90^\\circ-42^\\circ=48^\\circ]]입니다.",
          "[[B=70^\\circ]]이므로 [[A=90^\\circ-70^\\circ=20^\\circ]]입니다."
        ],
        "closingParagraphs": [
          "실무적인 참고 사항 하나. 이 계산기의 입력 칸은 각도 [[A]]를 받고 각도 [[B]]를 돌려줍니다. 각도 [[B]]만 아는 독자는, 화면에서 [[B]]를 직접 입력할 수 있다고 확인되지 않는 한 역공식을 손으로 적용하세요."
        ]
      },
      "missing-vs": {
        "h2": "여각과 보각",
        "blocks": [
          {
            "kind": "p",
            "text": "두 용어는 비슷하게 들리고 둘 다 각도 쌍을 나타내지만, 답하는 질문이 다릅니다."
          },
          {
            "kind": "h3",
            "text": "여각"
          },
          {
            "kind": "p",
            "text": "두 각의 합이 [[90^\\circ]]일 때 여각입니다. 직각삼각형의 두 예각이 교과서적인 예입니다. 직각이 이미 삼각형 합계의 나머지 90도를 차지하므로, 두 예각은 반드시 여각이어야 합니다."
          },
          {
            "kind": "h3",
            "text": "보각"
          },
          {
            "kind": "p",
            "text": "두 각의 합이 [[180^\\circ]]일 때 보각입니다. 예를 들어 직선을 둘로 나누면 보각 두 개가 됩니다. 보각 쌍은 직각삼각형의 두 예각과 절대 혼동하면 안 됩니다. 두 예각의 합은 180도가 아니라 90도입니다."
          }
        ],
        "table": {
          "headers": [
            "관계",
            "합",
            "예시"
          ],
          "rows": [
            [
              "여각",
              "90°",
              "35 + 55"
            ],
            [
              "보각",
              "180°",
              "110 + 70"
            ],
            [
              "직각",
              "90°",
              "직각삼각형의 고정된 각도"
            ]
          ]
        },
        "closingParagraphs": [
          "삼각형 내각의 합 전체는 180도지만, 두 예각의 합은 90도입니다. 이 두 합계를 분리해서 기억하는 것이 이 페이지에서 가장 흔한 실수를 피하는 열쇠입니다."
        ],
        "imgAlt": "사다리, 서까래, 브레이스, 정사각형 대각선의 여각을 보여주는 네 패널",
        "figcaption": "실제 장면 속 여각 쌍: 알려진 각도 하나가 짝 각도를 정합니다."
      },
      "missing-mistakes": {
        "h2": "부족 각도 구할 때 흔한 실수",
        "steps": [
          "<strong>알려진 각도를 90도가 아니라 180도에서 뺍니다.</strong> 180도 합계에는 직각이 포함되어 있는데, 직각은 이미 고정되어 있습니다. 무엇이 잘못되는가: [[A=35^\\circ]]일 때 잘못된 계산은 145도를 내놓으며, 이는 불가능한 예각입니다. 고치는 법: 90도에서 빼서 [[55^\\circ]]를 구하세요.",
          "<strong>한 각도가 이미 90도라는 사실을 잊습니다.</strong> 직각은 계산이 필요 없어서 놓치기 쉽습니다. 무엇이 잘못되는가: 세 각도를 모두 모르는 것처럼 삼각형을 다룹니다. 고치는 법: 시작하기 전에 직각이 180도 합계의 절반을 차지한다는 것을 기억하세요.",
          "<strong>계산기에 90도를 입력합니다.</strong> 도구는 0도와 90도 사이의 엄격한 예각을 기대합니다. 무엇이 잘못되는가: 90도를 입력하면 두 번째 예각이 들어갈 자리가 남지 않습니다. 고치는 법: 알려진 예각만 입력하세요.",
          "<strong>90도보다 큰 각도를 입력합니다.</strong> 예각은 정의상 90도를 넘지 않습니다. 무엇이 잘못되는가: 뺄셈 결과가 음수가 되며, 여기서는 기하학적 의미가 없습니다. 고치는 법: 입력이 90도 미만인지 확인하세요.",
          "<strong>0도를 입력합니다.</strong> 0도 각도는 삼각형을 선분으로 무너뜨립니다. 무엇이 잘못되는가: 면적이 없는 도형에 90도 여각이 있다고 주장하게 됩니다. 고치는 법: 양의 예각만 사용하세요.",
          "<strong>여각과 보각을 혼동합니다.</strong> 여각 쌍의 합은 90도, 보각 쌍의 합은 180도입니다. 무엇이 잘못되는가: 180도에서 빼면 첫 번째 항목의 실수가 됩니다. 고치는 법: 단어와 합계를 짝지으세요. 여각은 90도와 함께 기억합니다.",
          "<strong>두 예각이 같아야 한다고 가정합니다.</strong> 같은 경우는 45도씩일 때뿐입니다. 무엇이 잘못되는가: 20-70 삼각형에서 대칭을 기대합니다. 고치는 법: 뺄셈에 맡기세요. 대부분의 쌍은 다릅니다.",
          "<strong>각도 표시 A와 B를 바꿔 씁니다.</strong> 계산기는 [[A]]를 받고 [[B]]를 돌려줍니다. 무엇이 잘못되는가: 이미 알고 있는 여각을 입력값인 것처럼 입력합니다. 고치는 법: 입력하기 전에 알려진 각도에 A라고 표시하세요.",
          "<strong>이 특정 계산에 변의 길이가 필요하다고 생각합니다.</strong> 변은 삼각함수에 필요하지 여각에는 필요 없습니다. 무엇이 잘못되는가: 뺄셈만으로 끝나는 문제 앞에서 멈춥니다. 고치는 법: 예각을 알면 90도에서 빼고 끝내세요.",
          "<strong>단순한 뺄셈으로 충분한데 역사인, 역코사인, 역탄젠트를 씁니다.</strong> 역함수는 더 어려운 질문에 답합니다. 무엇이 잘못되는가: 불필요한 작업과 모드 오류의 여지가 늘어납니다. 고치는 법: 각도를 알 때는 <a href=\"/right-triangle-angle-from-sine-calculator/\" class=\"text-primary hover:underline\">사인으로 각도 구하는 계산기</a>와 그 형제 계산기가 잘못된 도구입니다. 뺄셈이 정확하고 즉시 끝납니다.",
          "<strong>측정한 실제 각도가 기준 방향을 확인하지 않고 자동으로 직각삼각형을 이룬다고 가정합니다.</strong> 실제 모서리는 좀처럼 완벽하지 않습니다. 무엇이 잘못되는가: 90도 모서리가 실제로 존재하지 않는 곳에 여각 규칙을 적용합니다. 고치는 법: 빼기 전에 기준 방향이 수직인지 검증하세요.",
          "<strong>빼기 전에 입력 측정값을 불필요하게 반올림합니다.</strong> 이른 반올림은 입력이 실제로 가진 정밀도를 버립니다. 무엇이 잘못되는가: 68.5를 69로 반올림하면 21.5 대신 21이 됩니다. 고치는 법: 측정한 값 그대로 빼고, 결과를 입력 정밀도에 맞춰 반올림하세요."
        ],
        "blocks": [
          {
            "kind": "h3",
            "text": "틀린 계산과 바른 계산"
          },
          {
            "kind": "p",
            "text": "[[A=35^\\circ]]가 주어졌습니다."
          },
          {
            "kind": "p",
            "text": "틀린 계산: [[180^\\circ-35^\\circ=145^\\circ]]. 직각이 계산에 반영되지 않았으므로 부족 예각이 아닙니다. 145도는 90도 모서리와 함께 직각삼각형 안에 들어갈 수 없습니다."
          },
          {
            "kind": "p",
            "text": "바른 계산: [[90^\\circ-35^\\circ=55^\\circ]]."
          },
          {
            "kind": "p",
            "text": "검증: [[35^\\circ+55^\\circ+90^\\circ=180^\\circ]]. 내각의 합 전체가 답을 확인해줍니다."
          }
        ]
      },
      "missing-verify": {
        "h2": "부족 각도가 맞는지 확인하는 방법",
        "blocks": [
          {
            "kind": "p",
            "text": "유효한 입력 범위는 다음과 같습니다."
          },
          {
            "kind": "p",
            "text": "[[[0^\\circ \\lt A \\lt 90^\\circ]]]"
          },
          {
            "kind": "p",
            "text": "계산된 각도도 같은 범위를 만족해야 합니다."
          },
          {
            "kind": "p",
            "text": "[[[0^\\circ \\lt B \\lt 90^\\circ]]]"
          },
          {
            "kind": "p",
            "text": "0도나 90도를 입력하면 세 꼭짓점이 분명하고 변의 길이가 양수인 보통의 직각삼각형이 아니라 퇴화한 극한 경우가 됩니다. 계산기가 강한 부등식을 적용하는 이유가 바로 이것입니다."
          },
          {
            "kind": "h3",
            "text": "방법 1: 예각끼리 더하기"
          },
          {
            "kind": "p",
            "text": "[[A+B=90^\\circ]]를 확인하세요. 예: [[35^\\circ+55^\\circ=90^\\circ]]. 가장 빠른 검사이며 180도 실수를 즉시 잡아냅니다."
          },
          {
            "kind": "h3",
            "text": "방법 2: 삼각형 전체 확인하기"
          },
          {
            "kind": "p",
            "text": "[[A+B+90^\\circ=180^\\circ]]를 확인하세요. 예: [[35^\\circ+55^\\circ+90^\\circ=180^\\circ]]. 보편적인 삼각형 내각의 합에 대해 답을 확인합니다."
          },
          {
            "kind": "h3",
            "text": "방법 3: 역계산 확인하기"
          },
          {
            "kind": "p",
            "text": "[[B=90^\\circ-A]]라면 [[A=90^\\circ-B]]는 원래 입력을 되돌려줘야 합니다. [[A=35^\\circ]]에서 [[B=55^\\circ]]를 얻었다면, 역검사는 [[90^\\circ-55^\\circ=35^\\circ]]입니다. 이 일관성 검사에는 변 측정이 전혀 필요 없습니다."
          },
          {
            "kind": "p",
            "text": "한 가지 주의할 점. 입력 각도가 실제 측정에서 왔다면, 그 불확실성이 결과에 그대로 전달됩니다. 대충 잰 35도는 대충 알려진 55도를 낳습니다. 측정의 정밀도에 맞는 자리수로 답을 쓰세요. 변의 길이를 포함한 검사가 필요하다면 <a href=\"/pythagorean-theorem-calculator/\" class=\"text-primary hover:underline\">피타고라스 정리 계산기</a>로 삼각형 기하를 독립적으로 확인할 수 있습니다."
          }
        ]
      },
      "missing-choose": {
        "h2": "알맞은 직각삼각형 계산기 고르기",
        "blocks": [
          {
            "kind": "p",
            "text": "아래 각 도구는 서로 다른 질문에 답합니다. 실제로 가진 값에 도구를 맞추세요."
          }
        ],
        "list": [
          "<strong>직각삼각형 부족 각도 계산기</strong>(이 페이지): 한 예각을 이미 알 때 여각을 구합니다. 입력이 변이 아니라 각도일 때마다 사용하세요.",
          "<a href=\"/right-triangle-angle-from-sine-calculator/\" class=\"text-primary hover:underline\"><strong>사인으로 각도 구하는 직각삼각형 계산기</strong></a>: 대변과 빗변에서 예각을 구합니다. 두 길이를 쟀을 때 사용하세요.",
          "<a href=\"/right-triangle-angle-from-cosine-calculator/\" class=\"text-primary hover:underline\"><strong>코사인으로 각도 구하는 직각삼각형 계산기</strong></a>: 인접변과 빗변에서 예각을 구합니다.",
          "<a href=\"/right-triangle-angle-from-tangent-calculator/\" class=\"text-primary hover:underline\"><strong>탄젠트로 각도 구하는 직각삼각형 계산기</strong></a>: 두 직각변, 즉 대변과 인접변에서 예각을 구합니다.",
          "<a href=\"/right-triangle-side-from-sine-calculator/\" class=\"text-primary hover:underline\"><strong>사인으로 변 구하는 직각삼각형 계산기</strong></a>: 각도와 한 변을 알 때 부족한 변의 길이를 구합니다.",
          "<a href=\"/right-triangle-side-from-cosine-calculator/\" class=\"text-primary hover:underline\"><strong>코사인으로 변 구하는 직각삼각형 계산기</strong></a>: 각도와 빗변 또는 인접변에서 부족한 변의 길이를 구합니다.",
          "<a href=\"/right-triangle-side-from-tangent-calculator/\" class=\"text-primary hover:underline\"><strong>탄젠트로 변 구하는 직각삼각형 계산기</strong></a>: 알려진 각도와 다른 한 직각변에서 부족한 직각변을 구합니다."
        ],
        "closingParagraphs": [
          "결정 규칙은 간단합니다. 한 예각을 압니다: 이 페이지의 부족 각도 계산기를 쓰세요. 알맞은 변 두 개를 압니다: 대응하는 역삼각함수 계산기를 쓰세요. 모르는 변이 필요합니다: 변 계산기를 쓰세요. 삼각함수 계산 뒤 두 번째 각도가 필요합니다: 알려진 각도를 90도에서 빼세요. 이 페이지가 자동화하는 일이 바로 그것입니다."
        ]
      },
      "missing-faq": {
        "h2": "자주 묻는 질문",
        "blocks": []
      },
      "missing-related": {
        "h2": "관련 삼각형 계산기 살펴보기",
        "blocks": []
      },
      "missing-conclusion": {
        "h2": "자신감 있게 어떤 부족 각도든 구하기",
        "blocks": [
          {
            "kind": "p",
            "text": "부족 각도 계산은 직각삼각형 기하에서 가장 단순한 연산입니다. 알려진 예각을 90도에서 빼면 됩니다. 그 뺄셈 뒤에는 삼각형 내각의 합 규칙이 있습니다. 삼각형 합계의 절반은 직각이 차지하고, 나머지 절반은 여각 쌍이 나눠 갖습니다. 알려진 각도가 지붕 서까래에서 왔든, 사다리에서 왔든, 계단 스트링거에서 왔든, 제도 배치에서 왔든 방법은 절대 변하지 않습니다. 직각을 확인하고, 90도에서 빼고, 두 예각의 합이 90도가 되는지 검증하세요. 각도를 이미 알고 있고 짝 각도만 모르는 순간을 위해 이 페이지를 즐겨찾기에 추가하세요."
          }
        ]
      }
    },
    "faqs": [
      {
        "question": "직각삼각형의 부족 각도는 어떻게 구하나요?",
        "answer": "알려진 예각을 90도에서 뺍니다. 공식은 B = 90 - A이며, A는 아는 각도, B는 모르는 각도입니다. 예를 들어 A가 35도라면 B = 90 - 35 = 55도입니다. 변의 길이나 삼각함수는 필요 없습니다."
      },
      {
        "question": "두 예각의 합이 90도인 이유는?",
        "answer": "모든 삼각형의 내각의 합은 180도입니다. 직각삼각형은 그중 90도를 직각이 차지하므로, 남은 두 예각이 나눠 가질 몫은 정확히 90도가 됩니다. 그래서 직각삼각형에서는 A + B가 항상 90도가 됩니다."
      },
      {
        "question": "부족 각도 공식은?",
        "answer": "공식은 B = 90 - A입니다. 삼각형 내각의 합 A + B + 90 = 180에서 시작해, 양변에서 90을 빼면 A + B = 90이 되고, 다시 양변에서 A를 빼면 됩니다. 역형태 A = 90 - B도 B가 알려진 각도일 때 같은 방식으로 됩니다."
      },
      {
        "question": "여각이란?",
        "answer": "두 각의 크기를 합했을 때 90도가 되면 여각입니다. 30과 60, 35와 55, 45와 45 쌍은 모두 여각입니다. 모든 직각삼각형의 두 예각은 정의상 여각이며, 부족 각도 공식이 나타내는 것이 바로 이 관계입니다."
      },
      {
        "question": "변의 길이를 몰라도 부족 각도를 구할 수 있나요?",
        "answer": "네. 한 예각을 알 때는 변의 길이가 이 계산과 무관합니다. 여각 관계는 내각의 합에만 의존하므로, 90도에서 빼면 정확한 답이 나옵니다. 변의 길이는 아직 각도를 하나도 모를 때만 중요합니다."
      },
      {
        "question": "여각과 보각의 차이는?",
        "answer": "여각은 합이 90도, 보각은 합이 180도입니다. 직각삼각형의 두 예각은 여각입니다. 흔한 실수는 직각이 이미 삼각형 합계의 절반을 차지한다는 사실을 잊고 알려진 각도를 180도에서 빼는 것입니다."
      },
      {
        "question": "두 예각이 같을 수 있나요?",
        "answer": "네, 각각 45도일 때입니다. 그러면 90 - 45 = 45이므로, 두 직각변의 길이가 같은 이등변 직각삼각형이 됩니다. 두 예각이 같은 경우는 이것이 유일하며, 다른 모든 직각삼각형에서는 두 예각이 다릅니다."
      },
      {
        "question": "알려진 각도가 35도이면 어떻게 되나요?",
        "answer": "부족 각도는 90 - 35 = 55도입니다. 두 가지로 검증할 수 있습니다. 35 + 55 = 90은 여각 쌍을 확인하고, 35 + 55 + 90 = 180은 삼각형 내각의 합 전체를 확인합니다. 두 검사는 항상 일치해야 합니다."
      },
      {
        "question": "알려진 각도가 45도보다 크면 어떻게 되나요?",
        "answer": "부족 각도는 45도보다 작게 나옵니다. 둘의 합이 여전히 90이어야 하기 때문입니다. 예를 들어 A가 68도라면 B = 90 - 68 = 22도입니다. 알려진 각도가 90에 가까워질수록 여각은 0에 가까워집니다."
      },
      {
        "question": "부족 예각이 정확히 0도나 90도가 될 수 있나요?",
        "answer": "보통의 직각삼각형에서는 안 됩니다. 0도나 90도 입력은 세 꼭짓점이 분명한 삼각형이 아니라 면적이 없는 퇴화한 극한 경우를 나타냅니다. 계산기는 알려진 각도가 0도와 90도 사이에 엄격히 들어오도록 요구하며, 결과도 항상 같은 범위에 듭니다."
      },
      {
        "question": "각도 B를 알 때 각도 A는 어떻게 구하나요?",
        "answer": "역공식 A = 90 - B를 쓰세요. 같은 여각 관계를 다른 변수에 대해 푼 것입니다. 예를 들어 B가 62도라면 A = 90 - 62 = 28도입니다. 이 계산기는 각도 A를 입력으로 받으므로, B만 알 때는 역공식을 손으로 적용하세요."
      },
      {
        "question": "사인, 코사인, 탄젠트 계산기는 언제 써야 하나요?",
        "answer": "아직 각도를 하나도 모르지만 변의 길이 두 개를 알 때 역삼각함수 계산기를 씁니다. 사인으로 각도 구하는 계산기는 대변과 빗변이 필요하고, 코사인으로 각도 구하는 계산기는 인접변과 빗변이 필요하며, 탄젠트로 각도 구하는 계산기는 두 직각변이 필요합니다. 예각 하나를 알면 부족 각도 계산기가 나머지를 끝냅니다."
      }
    ],
    "relatedHeading": "관련 삼각형 계산기 살펴보기",
    "relatedItems": [
      "사인으로 각도 구하는 직각삼각형 계산기",
      "코사인으로 각도 구하는 직각삼각형 계산기",
      "탄젠트로 각도 구하는 직각삼각형 계산기",
      "사인으로 변 구하는 직각삼각형 계산기",
      "코사인으로 변 구하는 직각삼각형 계산기",
      "탄젠트로 변 구하는 직각삼각형 계산기"
    ]
  },
  "ms": {
    "tocHeading": "Dalam Panduan Ini",
    "tocItems": {
      "missing-intro": "Cara Mencari Sudut Hilang dalam Segi Tiga Bersudut Tegak",
      "missing-angles": "Apakah Sudut-Sudut dalam Segi Tiga Bersudut Tegak?",
      "missing-formula": "Formula Mencari Sudut Hilang",
      "missing-howto": "Cara Menggunakan Kalkulator",
      "missing-examples": "Contoh Langkah demi Langkah",
      "missing-applications": "Aplikasi Kehidupan Sebenar",
      "missing-relationship": "Bagaimana Sudut Pelengkap Berubah",
      "missing-reverse": "Bagaimana Jika Anda Tahu Sudut B Sebaliknya?",
      "missing-vs": "Sudut Pelengkap vs. Sudut Penggenap",
      "missing-mistakes": "Kesilapan Lazim",
      "missing-verify": "Menyemak Jawapan Anda",
      "missing-choose": "Memilih Kalkulator yang Betul",
      "missing-faq": "Soalan Lazim",
      "missing-related": "Kalkulator Berkaitan"
    },
    "sections": {
      "missing-intro": {
        "h2": "Cara Mencari Sudut Hilang dalam Segi Tiga Bersudut Tegak",
        "blocks": [
          {
            "kind": "p",
            "text": "Jika satu sudut tirus segi tiga bersudut tegak berukuran [[35^\\circ]], sudut hilang ialah [[90^\\circ-35^\\circ=55^\\circ]]. Satu penolakan itu sahaja adalah keseluruhan pengiraan. Segi tiga bersudut tegak sentiasa mengandungi satu sudut 90 darjah, jadi dua sudut yang tinggal mesti berkongsi tepat 90 darjah yang masih ada. Menolak sudut yang diketahui daripada 90 darjah mendedahkan sudut yang hilang, tanpa memerlukan panjang sisi atau fungsi trigonometri."
          },
          {
            "kind": "p",
            "text": "Jawapannya, 55 darjah dalam kes ini, mewakili sudut tirus yang satu lagi dalam segi tiga bersudut tegak yang sama. Kedua-dua sudut sentiasa berfungsi sebagai pasangan: mengetahui salah satu menentukan yang satu lagi sepenuhnya. Kalkulator ini wujud tepat untuk situasi itu, apabila sudut sudah diketahui dan hanya pelengkapnya yang hilang. Apabila tiada sudut yang diketahui lagi, <a href=\"/right-triangle-angle-from-tangent-calculator/\" class=\"text-primary hover:underline\">kalkulator sudut dari tangen</a> atau salah satu rakan sejawat sinus dan kosinusnya menerbitkan sudut pertama daripada sisi yang diukur."
          }
        ]
      },
      "missing-angles": {
        "h2": "Apakah Sudut-Sudut dalam Segi Tiga Bersudut Tegak?",
        "blocks": [
          {
            "kind": "h3",
            "text": "Sudut Tegak"
          },
          {
            "kind": "p",
            "text": "Sudut 90 darjah mewakili penjuru yang sempurna, sudut antara dinding menegak dengan lantai yang rata. Dalam setiap segi tiga bersudut tegak sudut ini tetap: ia tidak pernah berubah saiz, dan rajah menandakannya dengan segi empat kecil di bucu. Oleh sebab satu sudut ditetapkan kekal pada 90 darjah, dua sudut yang lain hanya mempunyai 90 darjah untuk dikongsi antara keduanya, yang memaksa kedua-duanya menjadi sudut tirus."
          },
          {
            "kind": "h3",
            "text": "Dua Sudut Tirus"
          },
          {
            "kind": "p",
            "text": "Sudut tirus berukuran lebih daripada [[0^\\circ]] dan kurang daripada [[90^\\circ]]. Kedua-dua sudut selebih bagi segi tiga bersudut tegak berada dalam julat ini, dan ia dipanggil pelengkap kerana ukurannya sentiasa berjumlah 90 darjah. Gandingannya ketat: satu sudut tirus yang diketahui meninggalkan tepat satu nilai yang mungkin untuk pasangannya, jadi sudut hilang tidak pernah menjadi soal anggaran."
          },
          {
            "kind": "h3",
            "text": "Apakah Sudut Pelengkap?"
          },
          {
            "kind": "p",
            "text": "Dua sudut adalah pelengkap apabila ukurannya berjumlah [[90^\\circ]]. Pasangan [[30^\\circ+60^\\circ=90^\\circ]], [[35^\\circ+55^\\circ=90^\\circ]], dan [[45^\\circ+45^\\circ=90^\\circ]] semuanya pelengkap. Sudut pelengkap tidak perlu sama; kesamaan hanya berlaku pada 45 darjah setiap satu. Sebarang dua sudut positif yang berjumlah 90 darjah layak, sama ada ia berada dalam segi tiga yang sama atau tidak."
          },
          {
            "kind": "h3",
            "text": "Mengapa Sudut Segi Tiga Berjumlah 180 Darjah"
          },
          {
            "kind": "p",
            "text": "Setiap segi tiga, apa pun bentuknya, mengandungi tepat 180 darjah merentasi tiga sudut dalamannya. Dalam segi tiga bersudut tegak, sudut tegak yang tetap menuntut 90 daripada darjah-darjah itu dengan serta-merta, yang meninggalkan tepat 90 darjah untuk kedua-dua sudut tirus digabungkan. Rajah di bawah menunjukkan perakaunan penuh untuk segi tiga dengan sudut 35, 55, dan 90 darjah."
          }
        ],
        "imgAlt": "Segi tiga bersudut tegak berlabel dengan sudut A 35 darjah, B 55 darjah, C 90 darjah",
        "figcaption": "Sudut A (35 darjah) dan B (55 darjah) adalah pelengkap: A + B = 90 darjah, dan 35 + 55 + 90 = 180 darjah."
      },
      "missing-formula": {
        "h2": "Formula Mencari Sudut Hilang",
        "blocks": [
          {
            "kind": "p",
            "text": "Formula ini datang terus daripada peraturan hasil tambah sudut segi tiga. Mulakan dengan pernyataan umum:"
          },
          {
            "kind": "p",
            "text": "[[[A+B+C=180^\\circ]]]"
          },
          {
            "kind": "p",
            "text": "Oleh sebab segi tiga itu bersudut tegak, sudut ketiga ditetapkan:"
          },
          {
            "kind": "p",
            "text": "[[[C=90^\\circ]]]"
          },
          {
            "kind": "p",
            "text": "Gantikan nilai itu ke dalam hasil tambah:"
          },
          {
            "kind": "p",
            "text": "[[[A+B+90^\\circ=180^\\circ]]]"
          },
          {
            "kind": "p",
            "text": "Tolak 90 darjah daripada kedua-dua belah, dan dua sudut tirus berdiri sendiri:"
          },
          {
            "kind": "p",
            "text": "[[[A+B=90^\\circ]]]"
          },
          {
            "kind": "p",
            "text": "Akhirnya, tolak sudut yang diketahui [[A]] daripada kedua-dua belah untuk mengasingkan sudut yang hilang:"
          },
          {
            "kind": "p",
            "text": "[[[B=90^\\circ-A]]]"
          },
          {
            "kind": "p",
            "text": "Setiap langkah adalah algebra biasa yang dikenakan pada fakta geometri. Tiada apa yang dihafal secara membuta tuli: 90 darjah dalam formula ialah bahagian hasil tambah sudut yang tinggal selepas sudut tegak mengambil separuh bahagiannya."
          },
          {
            "kind": "p",
            "text": "Hubungan yang sama berfungsi secara songsang. Jika sudut [[B]] yang diketahui, menyelesaikan untuk [[A]] memberi:"
          },
          {
            "kind": "p",
            "text": "[[[A=90^\\circ-B]]]"
          },
          {
            "kind": "p",
            "text": "Kalkulator ini menggunakan bentuk pertama kerana medan inputnya menerima sudut [[A]] dan mengembalikan sudut [[B]]. Kedua-dua formula bukan peraturan berbeza; ia adalah hubungan sudut pelengkap yang sama yang diselesaikan untuk pemboleh ubah yang berbeza."
          },
          {
            "kind": "h3",
            "text": "Mengapa 90 Darjah, Bukan 180 Darjah"
          },
          {
            "kind": "p",
            "text": "Kesilapan kerap ialah menolak sudut yang diketahui daripada 180 darjah. Jumlah itu merangkumi ketiga-tiga sudut segi tiga, jadi menggunakannya sahaja melupakan bahawa sudut tegak telah pun diambil kira. Dengan [[A=35^\\circ]], pengiraan yang salah memberi [[180^\\circ-35^\\circ=145^\\circ]], yang tidak mungkin menjadi sudut tirus mana-mana segi tiga bersudut tegak. Pengiraan yang betul, [[90^\\circ-35^\\circ=55^\\circ]], menghormati sudut tegak dan boleh disemak serta-merta: [[35^\\circ+55^\\circ+90^\\circ=180^\\circ]]."
          }
        ],
        "imgAlt": "Dua panel membandingkan hasil tambah 180 darjah segi tiga dengan pasangan tirus 90 darjah",
        "figcaption": "Bahagian A menunjukkan hasil tambah penuh segi tiga; Bahagian B mengasingkan sudut tirus pelengkap."
      },
      "missing-howto": {
        "h2": "Cara Menggunakan Kalkulator Sudut Hilang Segi Tiga Bersudut Tegak",
        "blocks": [
          {
            "kind": "p",
            "text": "Panduan di bawah sepadan dengan antara muka sebenar pada halaman ini."
          }
        ],
        "steps": [
          "<strong>Kenal pasti segi tiga bersudut tegak.</strong> Sahkan bentuk itu mempunyai penjuru 90 darjah yang sebenar sebelum melakukan apa-apa lagi; formula ini hanya terpakai pada segi tiga bersudut tegak.",
          "<strong>Cari sudut tirus yang anda sudah tahu.</strong> Ini ialah sudut [[A]], nilai yang akan anda taip ke dalam kalkulator.",
          "<strong>Sahkan sudut yang diketahui adalah sah.</strong> Ia mesti lebih besar daripada [[0^\\circ]] dan kurang daripada [[90^\\circ]]. Apa-apa di luar julat itu tidak boleh menjadi sudut tirus segi tiga bersudut tegak.",
          "<strong>Masukkan sudut yang diketahui [[A]] dalam darjah.</strong> Medan input menerima nilai perpuluhan seperti 68.5, jadi kekalkan ketepatan ukuran anda.",
          "<strong>Klik Kira Sudut B.</strong> Alat ini mengenakan [[B=90^\\circ-A]] pada input anda.",
          "<strong>Baca sudut pelengkap yang dikira.</strong> Outputnya ialah sudut [[B]] dalam darjah.",
          "<strong>Campurkan kedua-dua sudut tirus untuk menyemak hasilnya.</strong> Jumlahnya mesti sama dengan 90 darjah; jika tidak, semak semula input.",
          "<strong>Gunakan Tetapkan Semula apabila anda ingin memulakan pengiraan baharu.</strong> Ini memadam input supaya sudut baharu boleh dimasukkan."
        ],
        "closingParagraphs": [
          "Perhatikan apa yang tidak pernah diminta kalkulator: tiada panjang sisi bertentangan, tiada panjang sisi bersebelahan, tiada hipotenus, dan tiada nilai sinus, kosinus, atau tangen. Satu sudut tirus yang diketahui adalah keseluruhan input kerana peraturan hasil tambah sudut melakukan selebihnya. Alat ini juga tidak menerima radian atau kemasukan terus sudut [[B]]; medan inputnya adalah khusus untuk sudut [[A]] dalam darjah."
        ]
      },
      "missing-examples": {
        "h2": "Contoh Langkah demi Langkah Mencari Sudut Hilang",
        "blocks": [
          {
            "kind": "p",
            "text": "Empat contoh ini membina kemahiran asas sebelum aplikasi dunia nyata. Setiap satu mengikut pola yang sama: tulis formula, ganti, tolak."
          },
          {
            "kind": "h3",
            "text": "Contoh 1: Sudut Diketahui 35 Darjah"
          },
          {
            "kind": "p",
            "text": "Diberi [[A=35^\\circ]], cari sudut [[B]]."
          },
          {
            "kind": "p",
            "text": "Langkah 1: Tulis formula. [[B=90^\\circ-A]]"
          },
          {
            "kind": "p",
            "text": "Langkah 2: Gantikan sudut yang diketahui. [[B=90^\\circ-35^\\circ]]"
          },
          {
            "kind": "p",
            "text": "Langkah 3: Tolak. [[B=55^\\circ]]"
          },
          {
            "kind": "p",
            "text": "Semak: [[35^\\circ+55^\\circ=90^\\circ]]. Jawapannya sah kerana dua sudut tirus berjumlah tepat 90 darjah dan setiap satunya berada dengan tegas antara 0 dan 90 darjah."
          },
          {
            "kind": "h3",
            "text": "Contoh 2: Sudut Diketahui 20 Darjah"
          },
          {
            "kind": "p",
            "text": "Diberi [[A=20^\\circ]]:"
          },
          {
            "kind": "p",
            "text": "[[B=90^\\circ-20^\\circ=70^\\circ]]"
          },
          {
            "kind": "p",
            "text": "Sudut tirus yang lebih kecil menghasilkan sudut pelengkap yang lebih besar. Oleh sebab pasangan itu sentiasa mesti berjumlah 90 darjah, setiap darjah yang dikeluarkan daripada satu sudut ditambah kepada sudut yang satu lagi. Di sini sudut 20 darjah meninggalkan 70 darjah yang besar untuk pasangannya."
          },
          {
            "kind": "h3",
            "text": "Contoh 3: Segi Tiga Bersudut Tegak Sama Kaki"
          },
          {
            "kind": "p",
            "text": "Diberi [[A=45^\\circ]]:"
          },
          {
            "kind": "p",
            "text": "[[B=90^\\circ-45^\\circ=45^\\circ]]"
          },
          {
            "kind": "p",
            "text": "Kedua-dua sudut tirus sama pada 45 darjah setiap satu. Ini ialah segi tiga bersudut tegak sama kaki, satu-satunya segi tiga bersudut tegak yang sudut tirusnya sepadan. Kedua-dua kakinya juga sama panjang, sebab itulah segi tiga 45-45-90 sering muncul dalam susun atur draf dan pembinaan."
          },
          {
            "kind": "h3",
            "text": "Contoh 4: Sudut Diketahui 68.5 Darjah"
          },
          {
            "kind": "p",
            "text": "Diberi [[A=68.5^\\circ]]:"
          },
          {
            "kind": "p",
            "text": "[[B=90^\\circ-68.5^\\circ=21.5^\\circ]]"
          },
          {
            "kind": "p",
            "text": "Sudut tirus yang agak besar mempunyai pelengkap yang agak kecil. Input perpuluhan berfungsi tepat seperti input nombor bulat: tolak dengan berhati-hati, kekalkan .5 sejajar, dan 90 tolak 68.5 memberi 21.5. Semakan masih sah: [[68.5^\\circ+21.5^\\circ=90^\\circ]]."
          }
        ]
      },
      "missing-applications": {
        "h2": "Aplikasi Kehidupan Sebenar Sudut Hilang",
        "blocks": [
          {
            "kind": "p",
            "text": "Satu perkara memerlukan perhatian sebelum contoh bermula. Formula sudut hilang terpakai terus apabila dua sudut tergolong dalam segi tiga bersudut tegak yang sama. Dalam tetapan praktikal, permukaan mendatar dan permukaan menegak sering berfungsi sebagai garisan rujukan berserenjang, dan komponen pepenjuru seperti tangga atau kasau bumbung membentuk hipotenus. Contoh di bawah menyatakan andaian itu di mana-mana ia digunakan."
          },
          {
            "kind": "h3",
            "text": "Contoh 5: Mencari Sudut Kasau Bumbung ke Garisan Menegak"
          },
          {
            "kind": "p",
            "text": "Sebuah kasau bumbung membuat sudut [[35^\\circ]] dengan garisan mendatar. Cari sudut antara kasau yang sama dengan garisan rujukan menegak."
          },
          {
            "kind": "p",
            "text": "Diberi [[A=35^\\circ]] diukur dari garisan mendatar."
          },
          {
            "kind": "p",
            "text": "[[B=90^\\circ-35^\\circ=55^\\circ]]"
          },
          {
            "kind": "p",
            "text": "Garisan rujukan mendatar dan menegak adalah berserenjang, jadi kedua-dua sudut adalah pelengkap. Hasil 55 darjah ialah sudut relatif kepada menegak, bukan pengiraan pic bumbung atau struktur yang lengkap."
          },
          {
            "kind": "h3",
            "text": "Contoh 6: Mencari Sudut Tangga ke Dinding"
          },
          {
            "kind": "p",
            "text": "Sebuah tangga bersandar pada dinding menegak dan membentuk sudut [[68^\\circ]] dengan tanah yang rata. Cari sudut antara tangga dengan dinding."
          },
          {
            "kind": "p",
            "text": "[[B=90^\\circ-68^\\circ=22^\\circ]]"
          },
          {
            "kind": "p",
            "text": "Tanah dan dinding membentuk sudut tegak dalam model ideal ini, dengan tangga sebagai hipotenus. Sudut 22 darjah menerangkan orientasi tangga relatif kepada dinding. Pengiraan sahaja tidak menentukan sama ada tangga itu diletakkan dengan selamat."
          },
          {
            "kind": "h3",
            "text": "Contoh 7: Memahami Sudut Landasan ke Garisan Menegak"
          },
          {
            "kind": "p",
            "text": "Sebuah landasan lurus membuat sudut [[8^\\circ]] dengan garisan mendatar. Cari sudut pelengkap antara arah landasan dengan garisan rujukan menegak."
          },
          {
            "kind": "p",
            "text": "[[B=90^\\circ-8^\\circ=82^\\circ]]"
          },
          {
            "kind": "p",
            "text": "Sudut landasan ke menegak adalah pelengkap sudutnya ke mendatar. Condongan 8 darjah yang landai meninggalkan sudut 82 darjah yang curam terhadap menegak. Sudut ini sahaja tidak menentukan kebolehcapaian atau pematuhan kod."
          },
          {
            "kind": "h3",
            "text": "Contoh 8: Mencari Sudut Pelengkap Tetulang Tangga"
          },
          {
            "kind": "p",
            "text": "Sebuah tetulang tangga membuat sudut [[32^\\circ]] dengan lantai. Kira sudutnya relatif kepada garisan rujukan menegak."
          },
          {
            "kind": "p",
            "text": "[[B=90^\\circ-32^\\circ=58^\\circ]]"
          },
          {
            "kind": "p",
            "text": "Lantai, rujukan menegak, dan tetulang pepenjuru membentuk segi tiga bersudut tegak. Hasil 58 darjah menerangkan orientasi tetulang terhadap menegak. Ia tidak mengesahkan dimensi tangga atau pematuhan kod bangunan."
          },
          {
            "kind": "h3",
            "text": "Contoh 9: Mengira Sudut Pendakap Pepenjuru ke Sokongan Menegak"
          },
          {
            "kind": "p",
            "text": "Sebuah pendakap pepenjuru membuat sudut [[40^\\circ]] dengan rasuk mendatar. Cari sudut antara pendakap dengan sokongan menegak yang berserenjang."
          },
          {
            "kind": "p",
            "text": "[[B=90^\\circ-40^\\circ=50^\\circ]]"
          },
          {
            "kind": "p",
            "text": "Kedua-dua arah rujukan mesti berserenjang untuk peraturan pelengkap terpakai. Sudut 50 darjah adalah hasil geometri tulen; ia tidak menentukan kekuatan struktur pendakap."
          },
          {
            "kind": "h3",
            "text": "Contoh 10: Mencari Sudut Wayar Penegang ke Tiang Menegak"
          },
          {
            "kind": "p",
            "text": "Sebuah wayar penegang membuat sudut [[30^\\circ]] dengan tanah yang rata. Cari sudut antara wayar dengan tiang menegak."
          },
          {
            "kind": "p",
            "text": "[[B=90^\\circ-30^\\circ=60^\\circ]]"
          },
          {
            "kind": "p",
            "text": "Tanah mendatar dan tiang menegak mentakrifkan sudut tegak, dengan wayar sebagai hipotenus. Hasil 60 darjah membingkai semula arah wayar yang sama terhadap rujukan menegak. Ia tidak menentukan ketegangan wayar atau keselamatan sauh."
          },
          {
            "kind": "h3",
            "text": "Contoh 11: Menukar Sudut Dongak kepada Pelengkapnya"
          },
          {
            "kind": "p",
            "text": "Sebuah gambar rajah ukur tanah merekodkan garis penglihatan pada sudut dongak [[24^\\circ]] di atas garisan mendatar. Kira sudut pelengkapnya relatif kepada menegak."
          },
          {
            "kind": "p",
            "text": "[[B=90^\\circ-24^\\circ=66^\\circ]]"
          },
          {
            "kind": "p",
            "text": "Sudut yang diukur dari garisan mendatar dan sudut yang diukur dari menegak menerangkan garis penglihatan yang sama dari sudut pandangan berserenjang. Contoh ini mengandaikan garis penglihatan lurus dengan rujukan mendatar dan menegak yang berserenjang."
          },
          {
            "kind": "h3",
            "text": "Contoh 12: Mencari Sudut Cerun Bumbung ke Rujukan Menegak"
          },
          {
            "kind": "p",
            "text": "Cerun bumbung diukur pada [[27^\\circ]] relatif kepada garisan mendatar. Cari sudut pelengkapnya ke menegak."
          },
          {
            "kind": "p",
            "text": "[[B=90^\\circ-27^\\circ=63^\\circ]]"
          },
          {
            "kind": "p",
            "text": "Kedua-dua ukuran menerangkan cerun yang sama dari arah rujukan berserenjang yang berbeza. Tiada satu ukuran pun adalah penilaian struktur."
          },
          {
            "kind": "h3",
            "text": "Contoh 13: Pepenjuru dalam Susun Atur Lukisan Persegi"
          },
          {
            "kind": "p",
            "text": "Sebuah garis pepenjuru dalam susun atur lukisan persegi membuat sudut [[45^\\circ]] dengan satu sisi. Cari sudut yang dibuatnya dengan sisi berserenjang yang bersebelahan."
          },
          {
            "kind": "p",
            "text": "[[B=90^\\circ-45^\\circ=45^\\circ]]"
          },
          {
            "kind": "p",
            "text": "Pepenjuru membelah dua sudut tegak persegi, jadi kedua-dua sudut hasilnya ialah 45 darjah. Hubungan ini membantu dengan semakan lukisan dan susun atur asas: jika pepenjuru yang diukur tidak membahagi penjuru dengan sekata, susun atur itu tidak persegi."
          },
          {
            "kind": "h3",
            "text": "Contoh 14: Mencari Sudut Pelengkap Panel Mesin"
          },
          {
            "kind": "p",
            "text": "Sebuah panel dicondongkan [[15^\\circ]] menjauhi garisan mendatar. Kira sudut antara orientasi panel dengan arah rujukan menegak."
          },
          {
            "kind": "p",
            "text": "[[B=90^\\circ-15^\\circ=75^\\circ]]"
          },
          {
            "kind": "p",
            "text": "Rujukan mendatar dan menegak adalah berserenjang, jadi kecondongan panel dan pelengkapnya menerangkan orientasi yang sama. Hasilnya menerangkan orientasi sahaja, bukan keselamatan atau prestasi mesin."
          },
          {
            "kind": "h3",
            "text": "Contoh 15: Menukar Sudut Pemerhatian Pokok"
          },
          {
            "kind": "p",
            "text": "Seseorang melihat ke arah puncak sebatang pokok pada sudut dongak [[38^\\circ]] di atas garisan mendatar. Cari sudut pelengkap antara garis penglihatan dengan arah rujukan menegak."
          },
          {
            "kind": "p",
            "text": "[[B=90^\\circ-38^\\circ=52^\\circ]]"
          },
          {
            "kind": "p",
            "text": "Pengiraan menukar arah rujukan, bukan garis penglihatan itu sendiri. Sudut 52 darjah hanyalah pandangan yang sama yang diukur terhadap menegak. Ia tidak mengira ketinggian pokok."
          },
          {
            "kind": "h3",
            "text": "Contoh 16: Mencari Sudut Susur Tangan ke Sokongan Menegak"
          },
          {
            "kind": "p",
            "text": "Sebuah susur tangan pepenjuru membuat sudut [[55^\\circ]] dengan dataran mendatar. Cari sudut pelengkapnya relatif kepada garis sokongan menegak."
          },
          {
            "kind": "p",
            "text": "[[B=90^\\circ-55^\\circ=35^\\circ]]"
          },
          {
            "kind": "p",
            "text": "Sudut pelengkap menerangkan orientasi pepenjuru yang sama dari rujukan berbeza. Sudut 55 darjah yang curam terhadap garisan mendatar menjadi sudut 35 darjah yang landai terhadap menegak. Sudut sahaja tidak mengesahkan kebolehcapaian atau keperluan pembinaan."
          },
          {
            "kind": "h3",
            "text": "Perbandingan Contoh Praktikal"
          }
        ],
        "table": {
          "headers": [
            "Situasi",
            "Sudut diketahui",
            "Arah rujukan",
            "Sudut hilang",
            "Pengiraan",
            "Tafsiran"
          ],
          "rows": [
            [
              "Kasau bumbung",
              "35°",
              "Mendatar",
              "55°",
              "90 - 35",
              "Sudut kasau ke menegak"
            ],
            [
              "Tangga",
              "68°",
              "Tanah",
              "22°",
              "90 - 68",
              "Sudut tangga ke dinding"
            ],
            [
              "Landasan",
              "8°",
              "Mendatar",
              "82°",
              "90 - 8",
              "Arah landasan ke menegak"
            ],
            [
              "Tetulang tangga",
              "32°",
              "Lantai",
              "58°",
              "90 - 32",
              "Sudut tetulang ke menegak"
            ],
            [
              "Pendakap pepenjuru",
              "40°",
              "Rasuk mendatar",
              "50°",
              "90 - 40",
              "Sudut pendakap ke sokongan menegak"
            ],
            [
              "Wayar penegang",
              "30°",
              "Tanah",
              "60°",
              "90 - 30",
              "Sudut wayar ke tiang"
            ],
            [
              "Garis penglihatan ukur tanah",
              "24°",
              "Mendatar",
              "66°",
              "90 - 24",
              "Garis penglihatan ke menegak"
            ],
            [
              "Cerun bumbung",
              "27°",
              "Mendatar",
              "63°",
              "90 - 27",
              "Sudut cerun ke menegak"
            ],
            [
              "Pepenjuru lukisan",
              "45°",
              "Satu sisi",
              "45°",
              "90 - 45",
              "Pepenjuru ke sisi bersebelahan"
            ],
            [
              "Panel mesin",
              "15°",
              "Mendatar",
              "75°",
              "90 - 15",
              "Orientasi panel ke menegak"
            ],
            [
              "Pemerhatian pokok",
              "38°",
              "Mendatar",
              "52°",
              "90 - 38",
              "Garis penglihatan ke menegak"
            ],
            [
              "Susur tangan",
              "55°",
              "Dataran",
              "35°",
              "90 - 55",
              "Susur tangan ke sokongan menegak"
            ]
          ]
        }
      },
      "missing-relationship": {
        "h2": "Memahami Hubungan Antara Sudut Pelengkap",
        "blocks": [
          {
            "kind": "p",
            "text": "Polanya amat boleh dijangka. Jika sudut [[A]] bertambah, sudut [[B]] berkurang tepat dengan jumlah yang sama, kerana jumlahnya dikunci pada 90 darjah. Jika [[A]] berkurang, [[B]] membesar untuk mengisi kekosongan. Pada [[A=45^\\circ]] keduanya bertemu di tengah, dan tiada sudut tirus yang boleh mencapai [[0^\\circ]] atau [[90^\\circ]] dalam segi tiga bersudut tegak yang tulen dengan tiga bucu yang berbeza."
          }
        ],
        "table": {
          "headers": [
            "Sudut A diketahui",
            "Formula",
            "Sudut B hilang"
          ],
          "rows": [
            [
              "10°",
              "90 - 10",
              "80°"
            ],
            [
              "20°",
              "90 - 20",
              "70°"
            ],
            [
              "30°",
              "90 - 30",
              "60°"
            ],
            [
              "45°",
              "90 - 45",
              "45°"
            ],
            [
              "60°",
              "90 - 60",
              "30°"
            ],
            [
              "75°",
              "90 - 75",
              "15°"
            ],
            [
              "80°",
              "90 - 80",
              "10°"
            ]
          ]
        },
        "closingParagraphs": [
          "Jadual ini simetri sekitar 45 darjah: pasangan (10, 80), (20, 70), dan (30, 60) saling mencerminkan kerana menukar sudut yang diketahui dengan sudut yang hilang hanya membaca hubungan pelengkap yang sama dari sisi yang bertentangan. Empat panel di bawah menjadikan pertukaran ini visual."
        ],
        "imgAlt": "Empat segi tiga menunjukkan pasangan pelengkap 20-70, 30-60, 45-45, 70-20 darjah",
        "figcaption": "Apabila sudut A bertambah, sudut B mengecil dengan jumlah yang sama; jumlahnya kekal 90 darjah."
      },
      "missing-reverse": {
        "h2": "Bagaimana Jika Anda Tahu Sudut B Sebaliknya?",
        "blocks": [
          {
            "kind": "p",
            "text": "Peraturan sudut pelengkap yang sama berfungsi secara songsang. Jika sudut [[B]] yang diketahui, selesaikan hubungan itu untuk [[A]]:"
          },
          {
            "kind": "p",
            "text": "[[[A=90^\\circ-B]]]"
          },
          {
            "kind": "p",
            "text": "Tiada formula baharu diperlukan; ia adalah persamaan yang serupa dengan peranan yang ditukar."
          },
          {
            "kind": "h3",
            "text": "Contoh Kerja"
          },
          {
            "kind": "p",
            "text": "Diberi [[B=62^\\circ]]:"
          },
          {
            "kind": "p",
            "text": "[[A=90^\\circ-62^\\circ=28^\\circ]]"
          },
          {
            "kind": "p",
            "text": "Tiga lagi contoh pendek arah songsang mengikut langkah yang sama:"
          }
        ],
        "list": [
          "[[B=15^\\circ]], jadi [[A=90^\\circ-15^\\circ=75^\\circ]].",
          "[[B=42^\\circ]], jadi [[A=90^\\circ-42^\\circ=48^\\circ]].",
          "[[B=70^\\circ]], jadi [[A=90^\\circ-70^\\circ=20^\\circ]]."
        ],
        "closingParagraphs": [
          "Satu nota praktikal: medan input kalkulator ini menerima sudut [[A]] dan mengembalikan sudut [[B]]. Pembaca yang hanya tahu sudut [[B]] hendaklah menggunakan formula songsang secara manual melainkan antara muka disahkan menyokong memasukkan [[B]] secara terus."
        ]
      },
      "missing-vs": {
        "h2": "Sudut Pelengkap vs. Sudut Penggenap",
        "blocks": [
          {
            "kind": "p",
            "text": "Kedua-dua istilah kedengaran serupa dan kedua-duanya menerangkan pasangan sudut, tetapi ia menjawab soalan yang berbeza."
          },
          {
            "kind": "h3",
            "text": "Sudut Pelengkap"
          },
          {
            "kind": "p",
            "text": "Dua sudut adalah pelengkap apabila hasil tambahnya ialah [[90^\\circ]]. Dua sudut tirus segi tiga bersudut tegak adalah contoh buku teks: ia mesti pelengkap kerana sudut tegak telah pun menuntut 90 darjah yang lain daripada jumlah segi tiga."
          },
          {
            "kind": "h3",
            "text": "Sudut Penggenap"
          },
          {
            "kind": "p",
            "text": "Dua sudut adalah penggenap apabila hasil tambahnya ialah [[180^\\circ]]. Garis lurus, misalnya, boleh dibahagi kepada dua sudut penggenap. Pasangan penggenap tidak boleh dikelirukan dengan dua sudut tirus segi tiga bersudut tegak, yang berjumlah 90, bukan 180."
          }
        ],
        "table": {
          "headers": [
            "Hubungan",
            "Jumlah",
            "Contoh"
          ],
          "rows": [
            [
              "Pelengkap",
              "90°",
              "35 + 55"
            ],
            [
              "Penggenap",
              "180°",
              "110 + 70"
            ],
            [
              "Sudut tegak",
              "90°",
              "Sudut tetap dalam segi tiga bersudut tegak"
            ]
          ]
        },
        "closingParagraphs": [
          "Hasil tambah sudut segi tiga penuh ialah 180 darjah, tetapi dua sudut tirus bersama-sama berjumlah 90 darjah. Memisahkan kedua-dua jumlah itu adalah kunci untuk mengelakkan kesilapan paling lazim pada halaman ini."
        ],
        "imgAlt": "Empat panel menunjukkan sudut pelengkap untuk tangga, kasau bumbung, pendakap, dan pepenjuru persegi",
        "figcaption": "Pasangan pelengkap dalam tetapan sebenar: setiap sudut yang diketahui menentukan pasangannya."
      },
      "missing-mistakes": {
        "h2": "Kesilapan Lazim Ketika Mencari Sudut Hilang",
        "steps": [
          "<strong>Menolak sudut yang diketahui daripada 180 darjah dan bukannya 90.</strong> Jumlah 180 darjah termasuk sudut tegak, yang sudah tetap. Apa yang salah: dengan [[A=35^\\circ]] pengiraan yang salah memberi 145 darjah, sudut tirus yang mustahil. Betulkan: tolak daripada 90, memberi [[55^\\circ]].",
          "<strong>Lupa bahawa satu sudut sudah 90 darjah.</strong> Sudut tegak mudah terlepas pandang kerana ia tidak memerlukan pengiraan. Apa yang salah: menganggap segi tiga seolah-olah ketiga-tiga sudut tidak diketahui. Betulkan: ingat sudut tegak menuntut separuh jumlah 180 darjah sebelum anda bermula.",
          "<strong>Memasukkan 90 darjah ke dalam kalkulator.</strong> Alat ini menjangkakan sudut tirus yang dengan tegas antara 0 dan 90 darjah. Apa yang salah: input 90 darjah tidak meninggalkan ruang untuk sudut tirus kedua. Betulkan: masukkan hanya sudut tirus yang diketahui.",
          "<strong>Memasukkan sudut lebih besar daripada 90 darjah.</strong> Tiada sudut tirus melebihi 90 darjah mengikut takrifan. Apa yang salah: penolakan menghasilkan hasil negatif, yang tiada makna geometri di sini. Betulkan: semak bahawa input di bawah 90 darjah.",
          "<strong>Memasukkan 0 darjah.</strong> Sudut sifar meruntuhkan segi tiga menjadi segmen garis. Apa yang salah: hasilnya mendakwa pelengkap 90 darjah untuk bentuk tanpa luas. Betulkan: gunakan hanya sudut tirus positif.",
          "<strong>Mengelirukan sudut pelengkap dengan sudut penggenap.</strong> Pasangan pelengkap berjumlah 90 darjah; pasangan penggenap berjumlah 180. Apa yang salah: menolak daripada 180 menghasilkan kesilapan dalam item 1. Betulkan: padankan perkataan dengan jumlahnya, pelengkap dengan 90.",
          "<strong>Menganggap kedua-dua sudut tirus mesti sama.</strong> Kesamaan hanya sah pada 45 darjah setiap satu. Apa yang salah: menjangkakan simetri dalam segi tiga 20-70. Betulkan: biarkan penolakan yang memutuskan; kebanyakan pasangan berbeza.",
          "<strong>Mencampurkan label sudut A dan B.</strong> Kalkulator mengambil [[A]] dan mengembalikan [[B]]. Apa yang salah: memasukkan pelengkap yang sudah diketahui seolah-olah ia input. Betulkan: labelkan sudut yang diketahui sebagai A sebelum menaip apa-apa.",
          "<strong>Menyangka panjang sisi diperlukan untuk pengiraan khusus ini.</strong> Sisi penting untuk trigonometri, bukan untuk pelengkap. Apa yang salah: terhenti pada masalah yang hanya memerlukan penolakan. Betulkan: jika sudut tirus diketahui, tolakkannya daripada 90 dan selesaikan.",
          "<strong>Menggunakan sinus, kosinus, atau tangen songsang apabila penolakan mudah sudah mencukupi.</strong> Fungsi songsang menjawab soalan yang lebih sukar. Apa yang salah: kerja tambahan dan peluang tambahan untuk kesilapan mod. Betulkan: apabila sudut diketahui, <a href=\"/right-triangle-angle-from-sine-calculator/\" class=\"text-primary hover:underline\">kalkulator sudut dari sinus</a> dan rakan sejenisnya adalah alat yang salah; penolakan adalah tepat dan serta-merta.",
          "<strong>Menganggap sudut fizikal yang diukur secara automatik membentuk segi tiga bersudut tegak tanpa menyemak arah rujukan.</strong> Penjuru sebenar jarang sempurna. Apa yang salah: menggunakan peraturan pelengkap di mana penjuru 90 darjah sebenarnya tidak wujud. Betulkan: sahkan arah rujukan berserenjang sebelum menolak.",
          "<strong>Membundarkan ukuran input secara tidak perlu sebelum menolak.</strong> Pembundaran awal membuang ketepatan yang sebenarnya dimiliki input. Apa yang salah: 68.5 dibundarkan kepada 69 memberi 21 dan bukannya 21.5. Betulkan: tolak dengan nilai penuh yang diukur, kemudian bundarkan hasilnya supaya sepadan dengan ketepatan input."
        ],
        "blocks": [
          {
            "kind": "h3",
            "text": "Salah vs. Betul"
          },
          {
            "kind": "p",
            "text": "Diberi [[A=35^\\circ]]:"
          },
          {
            "kind": "p",
            "text": "Salah: [[180^\\circ-35^\\circ=145^\\circ]]. Ini bukan sudut tirus yang hilang kerana sudut tegak belum diambil kira; 145 darjah tidak boleh berada dalam segi tiga bersudut tegak bersama penjuru 90 darjah."
          },
          {
            "kind": "p",
            "text": "Betul: [[90^\\circ-35^\\circ=55^\\circ]]."
          },
          {
            "kind": "p",
            "text": "Sahkan: [[35^\\circ+55^\\circ+90^\\circ=180^\\circ]]. Hasil tambah sudut penuh mengesahkan jawapannya."
          }
        ]
      },
      "missing-verify": {
        "h2": "Cara Menyemak Sama Ada Sudut Hilang Anda Sah",
        "blocks": [
          {
            "kind": "p",
            "text": "Julat input yang sah ialah:"
          },
          {
            "kind": "p",
            "text": "[[[0^\\circ \\lt A \\lt 90^\\circ]]]"
          },
          {
            "kind": "p",
            "text": "dan sudut yang dikira mesti memenuhi julat yang sama:"
          },
          {
            "kind": "p",
            "text": "[[[0^\\circ \\lt B \\lt 90^\\circ]]]"
          },
          {
            "kind": "p",
            "text": "Input 0 atau 90 darjah akan menghasilkan kes pengehadan merosot dan bukannya segi tiga bersudut tegak biasa dengan tiga bucu yang berbeza dan panjang sisi positif. Kalkulator menguatkuasakan ketaksamaan tegas tepat untuk sebab ini."
          },
          {
            "kind": "h3",
            "text": "Kaedah 1: Campurkan Sudut Tirus"
          },
          {
            "kind": "p",
            "text": "Sahkan [[A+B=90^\\circ]]. Contoh: [[35^\\circ+55^\\circ=90^\\circ]]. Ini adalah semakan terpantas dan menangkap kesilapan 180 darjah serta-merta."
          },
          {
            "kind": "h3",
            "text": "Kaedah 2: Semak Segi Tiga Lengkap"
          },
          {
            "kind": "p",
            "text": "Sahkan [[A+B+90^\\circ=180^\\circ]]. Contoh: [[35^\\circ+55^\\circ+90^\\circ=180^\\circ]]. Ini mengesahkan jawapan terhadap hasil tambah sudut segi tiga sejagat."
          },
          {
            "kind": "h3",
            "text": "Kaedah 3: Semak Pengiraan Songsang"
          },
          {
            "kind": "p",
            "text": "Jika [[B=90^\\circ-A]], maka [[A=90^\\circ-B]] mesti mendapatkan semula input asal. Dengan [[A=35^\\circ]] memberi [[B=55^\\circ]], semakan songsang ialah [[90^\\circ-55^\\circ=35^\\circ]]. Semakan konsistensi ini tidak memerlukan ukuran sisi langsung."
          },
          {
            "kind": "p",
            "text": "Satu peringatan: jika sudut input datang daripada ukuran fizikal, ketidakpastiannya terbawa ke dalam hasilnya. 35 darjah yang diukur secara kasar menghasilkan 55 darjah yang diketahui secara kasar; laporkan jawapan dengan ketepatan yang sepadan dengan ukuran. Untuk semakan yang melibatkan panjang sisi, <a href=\"/pythagorean-theorem-calculator/\" class=\"text-primary hover:underline\">kalkulator teorem Pythagoras</a> boleh mengesahkan geometri segi tiga secara bebas."
          }
        ]
      },
      "missing-choose": {
        "h2": "Memilih Kalkulator Segi Tiga Bersudut Tegak yang Betul",
        "blocks": [
          {
            "kind": "p",
            "text": "Setiap alat di bawah menjawab soalan yang berbeza. Padankan alat dengan apa yang anda sebenarnya tahu:"
          }
        ],
        "list": [
          "<strong>Kalkulator Sudut Hilang Segi Tiga Bersudut Tegak</strong> (halaman ini): mencari sudut pelengkap apabila satu sudut tirus sudah diketahui. Gunakannya apabila inputnya sudut, bukan sisi.",
          "<a href=\"/right-triangle-angle-from-sine-calculator/\" class=\"text-primary hover:underline\"><strong>Kalkulator Sudut Segi Tiga Bersudut Tegak dari Sinus</strong></a>: mencari sudut tirus daripada sisi bertentangan dan hipotenus. Gunakannya apabila kedua-dua panjang itu diukur.",
          "<a href=\"/right-triangle-angle-from-cosine-calculator/\" class=\"text-primary hover:underline\"><strong>Kalkulator Sudut Segi Tiga Bersudut Tegak dari Kosinus</strong></a>: mencari sudut tirus daripada sisi bersebelahan dan hipotenus.",
          "<a href=\"/right-triangle-angle-from-tangent-calculator/\" class=\"text-primary hover:underline\"><strong>Kalkulator Sudut Segi Tiga Bersudut Tegak dari Tangen</strong></a>: mencari sudut tirus daripada sisi bertentangan dan sisi bersebelahan, iaitu kedua-dua kaki.",
          "<a href=\"/right-triangle-side-from-sine-calculator/\" class=\"text-primary hover:underline\"><strong>Kalkulator Sisi Segi Tiga Bersudut Tegak dari Sinus</strong></a>: mencari panjang sisi yang hilang apabila sudut dan satu sisi diketahui.",
          "<a href=\"/right-triangle-side-from-cosine-calculator/\" class=\"text-primary hover:underline\"><strong>Kalkulator Sisi Segi Tiga Bersudut Tegak dari Kosinus</strong></a>: mencari panjang sisi yang hilang daripada sudut dan hipotenus atau sisi bersebelahan.",
          "<a href=\"/right-triangle-side-from-tangent-calculator/\" class=\"text-primary hover:underline\"><strong>Kalkulator Sisi Segi Tiga Bersudut Tegak dari Tangen</strong></a>: mencari kaki yang hilang daripada sudut yang diketahui dan kaki yang satu lagi."
        ],
        "closingParagraphs": [
          "Peraturan keputusannya mudah. Anda tahu satu sudut tirus: gunakan kalkulator sudut hilang pada halaman ini. Anda tahu dua panjang sisi yang sesuai: gunakan kalkulator trigonometri songsang yang sepadan. Anda perlukan sisi yang tidak diketahui: gunakan kalkulator sisi. Dan anda perlukan sudut kedua selepas pengiraan trigonometri: tolak sudut yang diketahui daripada 90 darjah, iaitu tepat apa yang diautomasikan halaman ini."
        ]
      },
      "missing-faq": {
        "h2": "Soalan Lazim",
        "blocks": []
      },
      "missing-related": {
        "h2": "Terokai Kalkulator Segi Tiga Berkaitan",
        "blocks": []
      },
      "missing-conclusion": {
        "h2": "Cari Sebarang Sudut Hilang dengan Yakin",
        "blocks": [
          {
            "kind": "p",
            "text": "Pengiraan sudut hilang adalah operasi paling mudah dalam geometri segi tiga bersudut tegak: tolak sudut tirus yang diketahui daripada 90 darjah. Di sebalik penolakan itu terletak peraturan hasil tambah sudut segi tiga, yang menempah separuh daripada setiap jumlah segi tiga untuk sudut tegak dan meninggalkan separuh yang satu lagi untuk pasangan pelengkap. Sama ada sudut yang diketahui datang daripada kasau bumbung, tangga, tetulang tangga, atau susun atur lukisan, kaedahnya tidak berubah: sahkan sudut tegak, tolak daripada 90, dan sahkan bahawa dua sudut tirus berjumlah 90 darjah. Tandakan halaman ini untuk saat-saat apabila sudut sudah diketahui dan hanya pasangannya yang hilang."
          }
        ]
      }
    },
    "faqs": [
      {
        "question": "Bagaimana mencari sudut hilang dalam segi tiga bersudut tegak?",
        "answer": "Tolak sudut tirus yang diketahui daripada 90 darjah. Formulanya ialah B = 90 - A, di mana A ialah sudut yang anda tahu dan B ialah sudut yang hilang. Contohnya, jika A ialah 35 darjah, maka B = 90 - 35 = 55 darjah. Tiada panjang sisi atau fungsi trigonometri diperlukan."
      },
      {
        "question": "Mengapa dua sudut tirus berjumlah 90 darjah?",
        "answer": "Setiap segi tiga mengandungi 180 darjah keseluruhannya. Segi tiga bersudut tegak menempah 90 daripada darjah itu untuk sudut tegaknya, yang meninggalkan tepat 90 darjah untuk dikongsi antara dua sudut tirus yang selebihnya. Itulah sebabnya A + B sentiasa sama dengan 90 darjah dalam segi tiga bersudut tegak."
      },
      {
        "question": "Apakah formula untuk sudut hilang?",
        "answer": "Formulanya ialah B = 90 - A. Mulakan daripada hasil tambah sudut segi tiga A + B + 90 = 180, tolak 90 daripada kedua-dua belah untuk mendapat A + B = 90, kemudian tolak A daripada kedua-dua belah. Bentuk songsang, A = 90 - B, berfungsi dengan cara yang sama apabila B ialah sudut yang diketahui."
      },
      {
        "question": "Apakah sudut pelengkap?",
        "answer": "Dua sudut adalah pelengkap apabila ukurannya berjumlah 90 darjah. Pasangan 30 dan 60, 35 dan 55, dan 45 dan 45 semuanya pelengkap. Dalam setiap segi tiga bersudut tegak, dua sudut tirus adalah pelengkap mengikut takrifan, iaitu tepat apa yang diungkapkan formula sudut hilang."
      },
      {
        "question": "Bolehkah saya mencari sudut hilang tanpa mengetahui panjang sisi?",
        "answer": "Ya. Apabila satu sudut tirus diketahui, panjang sisi tidak relevan dengan pengiraan ini. Hubungan sudut pelengkap hanya bergantung pada hasil tambah sudut, jadi menolak daripada 90 darjah memberi jawapan yang tepat. Panjang sisi hanya penting apabila tiada sudut yang diketahui lagi."
      },
      {
        "question": "Apakah perbezaan antara sudut pelengkap dan sudut penggenap?",
        "answer": "Sudut pelengkap berjumlah 90 darjah; sudut penggenap berjumlah 180 darjah. Dua sudut tirus segi tiga bersudut tegak adalah pelengkap. Kesilapan lazim ialah menolak sudut yang diketahui daripada 180 dan bukannya 90, yang melupakan bahawa sudut tegak telah pun mengambil kira separuh daripada jumlah segi tiga."
      },
      {
        "question": "Bolehkah kedua-dua sudut tirus sama?",
        "answer": "Ya, apabila setiap satunya berukuran 45 darjah. Maka 90 - 45 = 45, jadi segi tiga itu ialah segi tiga bersudut tegak sama kaki dengan dua kaki yang sama. Ini adalah satu-satunya kes di mana dua sudut tirus sepadan; dalam setiap segi tiga bersudut tegak yang lain ia berbeza."
      },
      {
        "question": "Apa yang berlaku jika sudut yang diketahui ialah 35 darjah?",
        "answer": "Sudut hilang ialah 90 - 35 = 55 darjah. Anda boleh mengesahkannya dengan dua cara: 35 + 55 = 90 mengesahkan pasangan pelengkap, dan 35 + 55 + 90 = 180 mengesahkan hasil tambah sudut segi tiga penuh. Kedua-dua semakan harus sentiasa bersetuju."
      },
      {
        "question": "Apa yang berlaku jika sudut yang diketahui lebih besar daripada 45 darjah?",
        "answer": "Sudut hilang menjadi lebih kecil daripada 45 darjah, kerana keduanya masih mesti berjumlah 90. Contohnya, jika A ialah 68 darjah, maka B = 90 - 68 = 22 darjah. Apabila sudut yang diketahui membesar ke arah 90, pelengkapnya mengecil ke arah 0."
      },
      {
        "question": "Bolehkah sudut tirus yang hilang tepat 0 atau 90 darjah?",
        "answer": "Tidak dalam segi tiga bersudut tegak biasa. Input 0 atau 90 darjah menerangkan kes pengehadan merosot tanpa luas segi tiga sebenar, bukan segi tiga dengan tiga bucu yang berbeza. Kalkulator memerlukan sudut yang diketahui berada dengan tegas antara 0 dan 90 darjah, dan hasilnya sentiasa jatuh dalam julat yang sama."
      },
      {
        "question": "Bagaimana mencari sudut A apabila sudut B diketahui?",
        "answer": "Gunakan formula songsang A = 90 - B. Ia adalah hubungan pelengkap yang sama yang diselesaikan untuk pemboleh ubah yang satu lagi. Contohnya, jika B ialah 62 darjah, maka A = 90 - 62 = 28 darjah. Perhatikan bahawa kalkulator ini menerima sudut A sebagai inputnya, jadi gunakan formula songsang secara manual apabila hanya B diketahui."
      },
      {
        "question": "Bilakah saya patut menggunakan kalkulator sinus, kosinus, atau tangen sebaliknya?",
        "answer": "Gunakan kalkulator trigonometri songsang apabila tiada sudut yang diketahui lagi tetapi dua panjang sisi diketahui. Kalkulator sudut dari sinus memerlukan sisi bertentangan dan hipotenus, kalkulator sudut dari kosinus memerlukan sisi bersebelahan dan hipotenus, dan kalkulator sudut dari tangen memerlukan kedua-dua kaki. Setelah sebarang sudut tirus diketahui, kalkulator sudut hilang menyelesaikan selebihnya."
      }
    ],
    "relatedHeading": "Terokai Kalkulator Segi Tiga Berkaitan",
    "relatedItems": [
      "Kalkulator Sudut Segi Tiga Bersudut Tegak dari Sinus",
      "Kalkulator Sudut Segi Tiga Bersudut Tegak dari Kosinus",
      "Kalkulator Sudut Segi Tiga Bersudut Tegak dari Tangen",
      "Kalkulator Sisi Segi Tiga Bersudut Tegak dari Sinus",
      "Kalkulator Sisi Segi Tiga Bersudut Tegak dari Kosinus",
      "Kalkulator Sisi Segi Tiga Bersudut Tegak dari Tangen"
    ]
  },
  "pl": {
    "tocHeading": "W tym przewodniku",
    "tocItems": {
      "missing-intro": "Jak znaleźć brakujący kąt w trójkącie prostokątnym",
      "missing-angles": "Jakie są kąty w trójkącie prostokątnym?",
      "missing-formula": "Wzór na znajdowanie brakującego kąta",
      "missing-howto": "Jak korzystać z kalkulatora",
      "missing-examples": "Przykłady krok po kroku",
      "missing-applications": "Zastosowania praktyczne",
      "missing-relationship": "Jak zmieniają się kąty dopełniające",
      "missing-reverse": "Co zrobić, gdy znasz kąt B?",
      "missing-vs": "Kąty dopełniające a kąty przyległe",
      "missing-mistakes": "Częste błędy",
      "missing-verify": "Sprawdzanie odpowiedzi",
      "missing-choose": "Wybór odpowiedniego kalkulatora",
      "missing-faq": "Częste pytania",
      "missing-related": "Powiązane kalkulatory"
    },
    "sections": {
      "missing-intro": {
        "h2": "Jak znaleźć brakujący kąt w trójkącie prostokątnym",
        "blocks": [
          {
            "kind": "p",
            "text": "Jeśli jeden kąt ostry trójkąta prostokątnego mierzy [[35^\\circ]], brakujący kąt wynosi [[90^\\circ-35^\\circ=55^\\circ]]. To jedno odejmowanie to całe obliczenie. Trójkąt prostokątny zawsze zawiera jeden kąt 90 stopni, więc dwa pozostałe kąty muszą podzielić między siebie dokładnie 90 stopni, które zostały. Odjęcie znanego kąta od 90 stopni ujawnia brakujący kąt, bez długości boków i bez funkcji trygonometrycznych."
          },
          {
            "kind": "p",
            "text": "Odpowiedź, w tym przypadku 55 stopni, oznacza drugi kąt ostry tego samego trójkąta prostokątnego. Oba kąty zawsze działają w parze: znajomość jednego z nich w pełni wyznacza drugi. Ten kalkulator istnieje dokładnie do takiej sytuacji, gdy kąt jest już znany, a brakuje tylko jego dopełnienia. Gdy żaden kąt nie jest jeszcze znany, <a href=\"/right-triangle-angle-from-tangent-calculator/\" class=\"text-primary hover:underline\">kalkulator kąta z tangensa</a> lub jeden z jego odpowiedników opartych na sinusie i cosinusie wyprowadza pierwszy kąt ze zmierzonych boków."
          }
        ]
      },
      "missing-angles": {
        "h2": "Jakie są kąty w trójkącie prostokątnym?",
        "blocks": [
          {
            "kind": "h3",
            "text": "Kąt prosty"
          },
          {
            "kind": "p",
            "text": "Kąt 90 stopni to idealny róg, kąt między pionową ścianą a poziomą podłogą. W każdym trójkącie prostokątnym ten kąt jest stały: nigdy nie zmienia rozmiaru, a na schematach oznacza się go małym kwadratem przy wierzchołku. Ponieważ jeden kąt jest na stałe równy 90 stopni, pozostałe dwa kąty mają do podziału między siebie tylko 90 stopni, co zmusza oba do bycia ostrymi."
          },
          {
            "kind": "h3",
            "text": "Dwa kąty ostre"
          },
          {
            "kind": "p",
            "text": "Kąt ostry mierzy więcej niż [[0^\\circ]] i mniej niż [[90^\\circ]]. Oba pozostałe kąty trójkąta prostokątnego mieszczą się w tym zakresie i nazywa się je dopełniającymi, ponieważ ich miary zawsze sumują się do 90 stopni. Powiązanie jest ścisłe: jeden znany kąt ostry pozostawia dokładnie jedną możliwą wartość dla swojego partnera, więc brakujący kąt nigdy nie jest kwestią szacowania."
          },
          {
            "kind": "h3",
            "text": "Czym są kąty dopełniające?"
          },
          {
            "kind": "p",
            "text": "Dwa kąty są dopełniające, gdy ich miary sumują się do [[90^\\circ]]. Pary [[30^\\circ+60^\\circ=90^\\circ]], [[35^\\circ+55^\\circ=90^\\circ]] i [[45^\\circ+45^\\circ=90^\\circ]] są dopełniające. Kąty dopełniające nie muszą być równe; równość zachodzi tylko przy 45 stopniach każdy. Kwalifikują się dowolne dwa dodatnie kąty, których suma wynosi 90 stopni, niezależnie od tego, czy leżą w tym samym trójkącie, czy nie."
          },
          {
            "kind": "h3",
            "text": "Dlaczego kąty trójkąta sumują się do 180 stopni"
          },
          {
            "kind": "p",
            "text": "Każdy trójkąt, niezależnie od kształtu, zawiera dokładnie 180 stopni we wszystkich trzech kątach wewnętrznych. W trójkącie prostokątnym stały kąt prosty od razu zajmuje 90 z tych stopni, co pozostawia dokładnie 90 stopni dla obu kątów ostrych łącznie. Poniższy schemat pokazuje pełne rozliczenie dla trójkąta o kątach 35, 55 i 90 stopni."
          }
        ],
        "imgAlt": "Trójkąt prostokątny z oznaczonymi kątami: A 35°, B 55°, C 90°",
        "figcaption": "Kąty A (35°) i B (55°) są dopełniające: A + B = 90°, a 35 + 55 + 90 = 180°."
      },
      "missing-formula": {
        "h2": "Wzór na znajdowanie brakującego kąta",
        "blocks": [
          {
            "kind": "p",
            "text": "Wzór wynika wprost z zasady sumy kątów trójkąta. Zacznij od ogólnego stwierdzenia:"
          },
          {
            "kind": "p",
            "text": "[[[A+B+C=180^\\circ]]]"
          },
          {
            "kind": "p",
            "text": "Ponieważ trójkąt jest prostokątny, trzeci kąt jest stały:"
          },
          {
            "kind": "p",
            "text": "[[[C=90^\\circ]]]"
          },
          {
            "kind": "p",
            "text": "Podstaw tę wartość do sumy:"
          },
          {
            "kind": "p",
            "text": "[[[A+B+90^\\circ=180^\\circ]]]"
          },
          {
            "kind": "p",
            "text": "Odejmij 90 stopni od obu stron, a dwa kąty ostre pozostaną same:"
          },
          {
            "kind": "p",
            "text": "[[[A+B=90^\\circ]]]"
          },
          {
            "kind": "p",
            "text": "Na koniec odejmij znany kąt [[A]] od obu stron, aby wyizolować brakujący kąt:"
          },
          {
            "kind": "p",
            "text": "[[[B=90^\\circ-A]]]"
          },
          {
            "kind": "p",
            "text": "Każdy krok to zwykła algebra zastosowana do faktu geometrycznego. Niczego nie zapamiętuje się na pamięć: 90 stopni we wzorze to część sumy kątów, która pozostaje po tym, jak kąt prosty zabierze swoją połowę."
          },
          {
            "kind": "p",
            "text": "Ta sama zależność działa w odwrotną stronę. Jeśli znanym kątem jest [[B]], rozwiązanie dla [[A]] daje:"
          },
          {
            "kind": "p",
            "text": "[[[A=90^\\circ-B]]]"
          },
          {
            "kind": "p",
            "text": "Ten kalkulator używa pierwszej postaci, ponieważ jego pole wejściowe przyjmuje kąt [[A]] i zwraca kąt [[B]]. Oba wzory to nie różne reguły, lecz ta sama zależność kątów dopełniających rozwiązana względem różnych niewiadomych."
          },
          {
            "kind": "h3",
            "text": "Dlaczego 90 stopni, a nie 180 stopni"
          },
          {
            "kind": "p",
            "text": "Częstym błędem jest odejmowanie znanego kąta od 180 stopni. Ta suma obejmuje wszystkie trzy kąty trójkąta, więc samo jej użycie zapomina, że kąt prosty został już uwzględniony. Przy [[A=35^\\circ]] błędne obliczenie daje [[180^\\circ-35^\\circ=145^\\circ]], co nie może być kątem ostrym żadnego trójkąta prostokątnego. Poprawne obliczenie, [[90^\\circ-35^\\circ=55^\\circ]], respektuje kąt prosty i można je od razu sprawdzić: [[35^\\circ+55^\\circ+90^\\circ=180^\\circ]]."
          }
        ],
        "imgAlt": "Dwa panele porównujące sumę kątów trójkąta 180° z parą kątów ostrych 90°",
        "figcaption": "Panel A pokazuje pełną sumę kątów trójkąta; panel B wyodrębnia dopełniające kąty ostre."
      },
      "missing-howto": {
        "h2": "Jak korzystać z kalkulatora brakującego kąta trójkąta prostokątnego",
        "blocks": [
          {
            "kind": "p",
            "text": "Poniższy opis odpowiada rzeczywistemu interfejsowi na tej stronie."
          }
        ],
        "steps": [
          "<strong>Zidentyfikuj trójkąt prostokątny.</strong> Zanim zrobisz cokolwiek innego, potwierdź, że figura ma prawdziwy róg 90 stopni; wzór stosuje się tylko do trójkątów prostokątnych.",
          "<strong>Znajdź kąt ostry, który już znasz.</strong> To jest kąt [[A]], wartość, którą wpiszesz do kalkulatora.",
          "<strong>Potwierdź, że znany kąt jest poprawny.</strong> Musi być większy niż [[0^\\circ]] i mniejszy niż [[90^\\circ]]. Wszystko poza tym zakresem nie może być kątem ostrym trójkąta prostokątnego.",
          "<strong>Wpisz znany kąt [[A]] w stopniach.</strong> Pole wejściowe przyjmuje wartości dziesiętne, takie jak 68.5, więc zachowaj precyzję swojego pomiaru.",
          "<strong>Kliknij Oblicz kąt B.</strong> Narzędzie stosuje [[B=90^\\circ-A]] do Twoich danych.",
          "<strong>Odczytaj obliczony kąt dopełniający.</strong> Wynikiem jest kąt [[B]] w stopniach.",
          "<strong>Dodaj oba kąty ostre, aby sprawdzić wynik.</strong> Suma musi wynosić 90 stopni; jeśli tak nie jest, sprawdź dane wejściowe.",
          "<strong>Użyj przycisku Reset, gdy chcesz rozpocząć nowe obliczenie.</strong> Czyści on dane wejściowe, aby można było wpisać nowy kąt."
        ],
        "closingParagraphs": [
          "Zwróć uwagę, o co kalkulator nigdy nie pyta: brak długości boku przeciwległego, brak długości boku przyległego, brak przeciwprostokątnej i brak wartości sinusa, cosinusa czy tangensa. Jeden znany kąt ostry to całe dane wejściowe, ponieważ reguła sumy kątów robi resztę. Narzędzie nie przyjmuje też radianów ani bezpośredniego wpisania kąta [[B]]; jego pole wejściowe jest przeznaczone konkretnie na kąt [[A]] w stopniach."
        ]
      },
      "missing-examples": {
        "h2": "Przykłady krok po kroku znajdowania brakujących kątów",
        "blocks": [
          {
            "kind": "p",
            "text": "Te cztery przykłady budują podstawową umiejętność przed zastosowaniami praktycznymi. Każdy opiera się na tym samym schemacie: zapisz wzór, podstaw, odejmij."
          },
          {
            "kind": "h3",
            "text": "Przykład 1: Znany kąt 35 stopni"
          },
          {
            "kind": "p",
            "text": "Dane: [[A=35^\\circ]], znajdź kąt [[B]]."
          },
          {
            "kind": "p",
            "text": "Krok 1: Zapisz wzór. [[B=90^\\circ-A]]"
          },
          {
            "kind": "p",
            "text": "Krok 2: Podstaw znany kąt. [[B=90^\\circ-35^\\circ]]"
          },
          {
            "kind": "p",
            "text": "Krok 3: Odejmij. [[B=55^\\circ]]"
          },
          {
            "kind": "p",
            "text": "Sprawdzenie: [[35^\\circ+55^\\circ=90^\\circ]]. Odpowiedź jest poprawna, ponieważ oba kąty ostre sumują się dokładnie do 90 stopni i każdy leży ściśle między 0 a 90 stopni."
          },
          {
            "kind": "h3",
            "text": "Przykład 2: Znany kąt 20 stopni"
          },
          {
            "kind": "p",
            "text": "Dane: [[A=20^\\circ]]:"
          },
          {
            "kind": "p",
            "text": "[[B=90^\\circ-20^\\circ=70^\\circ]]"
          },
          {
            "kind": "p",
            "text": "Mniejszy kąt ostry daje większy kąt dopełniający. Ponieważ para musi zawsze sumować się do 90 stopni, każdy stopień odjęty od jednego kąta jest dodawany do drugiego. Tutaj kąt 20 stopni pozostawia hojne 70 stopni dla swojego partnera."
          },
          {
            "kind": "h3",
            "text": "Przykład 3: Równoramienny trójkąt prostokątny"
          },
          {
            "kind": "p",
            "text": "Dane: [[A=45^\\circ]]:"
          },
          {
            "kind": "p",
            "text": "[[B=90^\\circ-45^\\circ=45^\\circ]]"
          },
          {
            "kind": "p",
            "text": "Oba kąty ostre są równe, po 45 stopni każdy. To jest równoramienny trójkąt prostokątny, jedyny trójkąt prostokątny, którego kąty ostre są zgodne. Jego dwie przyprostokątne są również równe długości, dlatego trójkąt 45-45-90 pojawia się tak często w układach kreślarskich i budowlanych."
          },
          {
            "kind": "h3",
            "text": "Przykład 4: Znany kąt 68.5 stopnia"
          },
          {
            "kind": "p",
            "text": "Dane: [[A=68.5^\\circ]]:"
          },
          {
            "kind": "p",
            "text": "[[B=90^\\circ-68.5^\\circ=21.5^\\circ]]"
          },
          {
            "kind": "p",
            "text": "Stosunkowo duży kąt ostry ma stosunkowo małe dopełnienie. Dane dziesiętne działają dokładnie jak liczby całkowite: odejmuj ostrożnie, utrzymując .5 w linii, a 90 minus 68.5 daje 21.5. Sprawdzenie nadal się zgadza: [[68.5^\\circ+21.5^\\circ=90^\\circ]]."
          }
        ]
      },
      "missing-applications": {
        "h2": "Praktyczne zastosowania brakujących kątów",
        "blocks": [
          {
            "kind": "p",
            "text": "Zanim zaczną się przykłady, jedna uwaga wymaga staranności. Wzór na brakujący kąt stosuje się bezpośrednio, gdy dwa kąty należą do tego samego trójkąta prostokątnego. W sytuacjach praktycznych pozioma i pionowa powierzchnia często służą jako prostopadłe linie odniesienia, a ukośny element, taki jak drabina lub krokiew, tworzy przeciwprostokątną. Poniższe przykłady podają to założenie wszędzie tam, gdzie jest używane."
          },
          {
            "kind": "h3",
            "text": "Przykład 5: Znajdowanie kąta krokwi dachowej względem pionu"
          },
          {
            "kind": "p",
            "text": "Krokiew dachowa tworzy kąt [[35^\\circ]] z poziomem. Znajdź kąt między tą samą krokwią a pionową linią odniesienia."
          },
          {
            "kind": "p",
            "text": "Dane: [[A=35^\\circ]] mierzone od poziomu."
          },
          {
            "kind": "p",
            "text": "[[B=90^\\circ-35^\\circ=55^\\circ]]"
          },
          {
            "kind": "p",
            "text": "Poziome i pionowe linie odniesienia są prostopadłe, więc oba kąty są dopełniające. Wynik 55 stopni to kąt względem pionu, a nie pełne nachylenie dachu ani obliczenie konstrukcyjne."
          },
          {
            "kind": "h3",
            "text": "Przykład 6: Znajdowanie kąta drabiny względem ściany"
          },
          {
            "kind": "p",
            "text": "Drabina oparta o pionową ścianę tworzy kąt [[68^\\circ]] z poziomym gruntem. Znajdź kąt między drabiną a ścianą."
          },
          {
            "kind": "p",
            "text": "[[B=90^\\circ-68^\\circ=22^\\circ]]"
          },
          {
            "kind": "p",
            "text": "Grunt i ściana tworzą w tym wyidealizowanym modelu kąt prosty, a drabina jest przeciwprostokątną. Kąt 22 stopni opisuje ustawienie drabiny względem ściany. Samo obliczenie nie ustala, czy drabina jest ustawiona bezpiecznie."
          },
          {
            "kind": "h3",
            "text": "Przykład 7: Zrozumienie kąta podjazdu względem pionu"
          },
          {
            "kind": "p",
            "text": "Prosty podjazd tworzy kąt [[8^\\circ]] z poziomem. Znajdź kąt dopełniający między kierunkiem podjazdu a pionową linią odniesienia."
          },
          {
            "kind": "p",
            "text": "[[B=90^\\circ-8^\\circ=82^\\circ]]"
          },
          {
            "kind": "p",
            "text": "Kąt podjazdu względem pionu jest dopełnieniem jego kąta względem poziomu. Łagodne nachylenie 8 stopni pozostawia stromy kąt 82 stopni względem pionu. Sam ten kąt nie rozstrzyga o dostępności ani zgodności z przepisami."
          },
          {
            "kind": "h3",
            "text": "Przykład 8: Znajdowanie dopełniającego kąta belki schodowej"
          },
          {
            "kind": "p",
            "text": "Belka schodowa tworzy kąt [[32^\\circ]] z podłogą. Oblicz jej kąt względem pionowej linii odniesienia."
          },
          {
            "kind": "p",
            "text": "[[B=90^\\circ-32^\\circ=58^\\circ]]"
          },
          {
            "kind": "p",
            "text": "Podłoga, pionowe odniesienie i ukośna belka tworzą trójkąt prostokątny. Wynik 58 stopni opisuje ustawienie belki względem pionu. Nie weryfikuje on wymiarów schodów ani zgodności z przepisami budowlanymi."
          },
          {
            "kind": "h3",
            "text": "Przykład 9: Obliczanie kąta zastrzału względem pionowej podpory"
          },
          {
            "kind": "p",
            "text": "Ukośny zastrzał tworzy kąt [[40^\\circ]] z poziomą belką. Znajdź kąt między zastrzałem a prostopadłą pionową podporą."
          },
          {
            "kind": "p",
            "text": "[[B=90^\\circ-40^\\circ=50^\\circ]]"
          },
          {
            "kind": "p",
            "text": "Oba kierunki odniesienia muszą być prostopadłe, aby reguła dopełnienia miała zastosowanie. Kąt 50 stopni to czysty wynik geometryczny; nie wyznacza on wytrzymałości konstrukcyjnej zastrzału."
          },
          {
            "kind": "h3",
            "text": "Przykład 10: Znajdowanie kąta odciągu względem pionowego słupa"
          },
          {
            "kind": "p",
            "text": "Odciąg tworzy kąt [[30^\\circ]] z poziomym gruntem. Znajdź kąt między liną a pionowym słupem."
          },
          {
            "kind": "p",
            "text": "[[B=90^\\circ-30^\\circ=60^\\circ]]"
          },
          {
            "kind": "p",
            "text": "Poziomy grunt i pionowy słup wyznaczają kąt prosty, a lina jest przeciwprostokątną. Wynik 60 stopni przedstawia ten sam kierunek liny względem pionowego odniesienia. Nie ustala on naciągu liny ani bezpieczeństwa kotwienia."
          },
          {
            "kind": "h3",
            "text": "Przykład 11: Zamiana kąta wzniesienia na jego dopełnienie"
          },
          {
            "kind": "p",
            "text": "Szkic geodezyjny rejestruje linię celowania pod kątem wzniesienia [[24^\\circ]] powyżej poziomu. Oblicz jej kąt dopełniający względem pionu."
          },
          {
            "kind": "p",
            "text": "[[B=90^\\circ-24^\\circ=66^\\circ]]"
          },
          {
            "kind": "p",
            "text": "Kąt mierzony od poziomu i kąt mierzony od pionu opisują tę samą linię celowania z prostopadłych punktów widzenia. Przykład zakłada prostą linię celowania z prostopadłymi odniesieniami poziomym i pionowym."
          },
          {
            "kind": "h3",
            "text": "Przykład 12: Znajdowanie kąta nachylenia dachu względem pionowego odniesienia"
          },
          {
            "kind": "p",
            "text": "Nachylenie dachu zmierzono jako [[27^\\circ]] względem poziomu. Znajdź jego kąt dopełniający względem pionu."
          },
          {
            "kind": "p",
            "text": "[[B=90^\\circ-27^\\circ=63^\\circ]]"
          },
          {
            "kind": "p",
            "text": "Oba pomiary opisują to samo nachylenie z różnych prostopadłych kierunków odniesienia. Żaden pomiar sam w sobie nie jest oceną konstrukcyjną."
          },
          {
            "kind": "h3",
            "text": "Przykład 13: Przekątna w kwadratowym układzie kreślarskim"
          },
          {
            "kind": "p",
            "text": "Linia przekątnej w kwadratowym układzie kreślarskim tworzy kąt [[45^\\circ]] z jednym bokiem. Znajdź kąt, jaki tworzy z sąsiednim prostopadłym bokiem."
          },
          {
            "kind": "p",
            "text": "[[B=90^\\circ-45^\\circ=45^\\circ]]"
          },
          {
            "kind": "p",
            "text": "Przekątna dzieli kąt prosty kwadratu na pół, więc oba powstałe kąty mają po 45 stopni. Ta zależność pomaga w podstawowych kontrolach rysunku i układu: jeśli zmierzona przekątna nie dzieli narożnika równo, układ nie jest kwadratowy."
          },
          {
            "kind": "h3",
            "text": "Przykład 14: Znajdowanie dopełniającego kąta panelu maszyny"
          },
          {
            "kind": "p",
            "text": "Panel jest odchylony o [[15^\\circ]] od poziomu. Oblicz kąt między orientacją panelu a pionowym kierunkiem odniesienia."
          },
          {
            "kind": "p",
            "text": "[[B=90^\\circ-15^\\circ=75^\\circ]]"
          },
          {
            "kind": "p",
            "text": "Odniesienia poziome i pionowe są prostopadłe, więc pochylenie panelu i jego dopełnienie opisują tę samą orientację. Wynik opisuje tylko orientację, a nie bezpieczeństwo czy wydajność maszyny."
          },
          {
            "kind": "h3",
            "text": "Przykład 15: Zamiana kąta obserwacji drzewa"
          },
          {
            "kind": "p",
            "text": "Osoba patrzy w stronę wierzchołka drzewa pod kątem wzniesienia [[38^\\circ]] powyżej poziomu. Znajdź kąt dopełniający między linią wzroku a pionowym kierunkiem odniesienia."
          },
          {
            "kind": "p",
            "text": "[[B=90^\\circ-38^\\circ=52^\\circ]]"
          },
          {
            "kind": "p",
            "text": "Obliczenie zmienia kierunek odniesienia, a nie samą linię wzroku. Kąt 52 stopni to po prostu to samo spojrzenie zmierzone względem pionu. Nie oblicza on wysokości drzewa."
          },
          {
            "kind": "h3",
            "text": "Przykład 16: Znajdowanie kąta poręczy względem pionowej podpory"
          },
          {
            "kind": "p",
            "text": "Ukośna poręcz tworzy kąt [[55^\\circ]] z poziomym spocznikiem. Znajdź jej kąt dopełniający względem pionowej linii podpory."
          },
          {
            "kind": "p",
            "text": "[[B=90^\\circ-55^\\circ=35^\\circ]]"
          },
          {
            "kind": "p",
            "text": "Kąt dopełniający opisuje tę samą ukośną orientację z innego odniesienia. Stromy kąt 55 stopni względem poziomu staje się łagodnym kątem 35 stopni względem pionu. Sam kąt nie weryfikuje dostępności ani wymagań budowlanych."
          },
          {
            "kind": "h3",
            "text": "Porównanie praktycznych przykładów"
          }
        ],
        "table": {
          "headers": [
            "Sytuacja",
            "Znany kąt",
            "Kierunek odniesienia",
            "Brakujący kąt",
            "Obliczenie",
            "Interpretacja"
          ],
          "rows": [
            [
              "Krokiew dachowa",
              "35°",
              "Poziom",
              "55°",
              "90 - 35",
              "Kąt krokwi względem pionu"
            ],
            [
              "Drabina",
              "68°",
              "Grunt",
              "22°",
              "90 - 68",
              "Kąt drabiny względem ściany"
            ],
            [
              "Podjazd",
              "8°",
              "Poziom",
              "82°",
              "90 - 8",
              "Kierunek podjazdu względem pionu"
            ],
            [
              "Belka schodowa",
              "32°",
              "Podłoga",
              "58°",
              "90 - 32",
              "Kąt belki względem pionu"
            ],
            [
              "Zastrzał",
              "40°",
              "Belka pozioma",
              "50°",
              "90 - 40",
              "Kąt zastrzału względem pionowej podpory"
            ],
            [
              "Odciąg",
              "30°",
              "Grunt",
              "60°",
              "90 - 30",
              "Kąt liny względem słupa"
            ],
            [
              "Linia celowania geodety",
              "24°",
              "Poziom",
              "66°",
              "90 - 24",
              "Linia celowania względem pionu"
            ],
            [
              "Nachylenie dachu",
              "27°",
              "Poziom",
              "63°",
              "90 - 27",
              "Kąt nachylenia względem pionu"
            ],
            [
              "Przekątna kreślarska",
              "45°",
              "Jeden bok",
              "45°",
              "90 - 45",
              "Przekątna względem sąsiedniego boku"
            ],
            [
              "Panel maszyny",
              "15°",
              "Poziom",
              "75°",
              "90 - 15",
              "Orientacja panelu względem pionu"
            ],
            [
              "Obserwacja drzewa",
              "38°",
              "Poziom",
              "52°",
              "90 - 38",
              "Linia wzroku względem pionu"
            ],
            [
              "Poręcz",
              "55°",
              "Spocznik",
              "35°",
              "90 - 55",
              "Poręcz względem pionowej podpory"
            ]
          ]
        }
      },
      "missing-relationship": {
        "h2": "Zrozumienie zależności między kątami dopełniającymi",
        "blocks": [
          {
            "kind": "p",
            "text": "Wzorzec jest w pełni przewidywalny. Jeśli kąt [[A]] rośnie, kąt [[B]] maleje dokładnie o tę samą wartość, ponieważ ich suma jest zablokowana na 90 stopniach. Jeśli [[A]] maleje, [[B]] rośnie, aby wypełnić lukę. Przy [[A=45^\\circ]] oba spotykają się w środku, a żaden kąt ostry nie może osiągnąć [[0^\\circ]] ani [[90^\\circ]] w prawdziwym trójkącie prostokątnym o trzech różnych wierzchołkach."
          }
        ],
        "table": {
          "headers": [
            "Znany kąt A",
            "Wzór",
            "Brakujący kąt B"
          ],
          "rows": [
            [
              "10°",
              "90 - 10",
              "80°"
            ],
            [
              "20°",
              "90 - 20",
              "70°"
            ],
            [
              "30°",
              "90 - 30",
              "60°"
            ],
            [
              "45°",
              "90 - 45",
              "45°"
            ],
            [
              "60°",
              "90 - 60",
              "30°"
            ],
            [
              "75°",
              "90 - 75",
              "15°"
            ],
            [
              "80°",
              "90 - 80",
              "10°"
            ]
          ]
        },
        "closingParagraphs": [
          "Tabela jest symetryczna wokół 45 stopni: pary (10, 80), (20, 70) i (30, 60) odbijają się wzajemnie, ponieważ zamiana znanego i brakującego kąta to po prostu odczytanie tej samej zależności dopełniającej z drugiej strony. Cztery panele poniżej pokazują ten kompromis wizualnie."
        ],
        "imgAlt": "Cztery trójkąty pokazujące pary dopełniające: 20 i 70, 30 i 60, 45 i 45, 70 i 20 stopni",
        "figcaption": "Gdy kąt A rośnie, kąt B maleje o tę samą wartość; ich suma pozostaje 90°."
      },
      "missing-reverse": {
        "h2": "Co zrobić, gdy znasz kąt B?",
        "blocks": [
          {
            "kind": "p",
            "text": "Ta sama reguła kątów dopełniających działa w odwrotną stronę. Jeśli znanym kątem jest [[B]], rozwiąż zależność dla [[A]]:"
          },
          {
            "kind": "p",
            "text": "[[[A=90^\\circ-B]]]"
          },
          {
            "kind": "p",
            "text": "Nie jest potrzebny żaden nowy wzór; to identyczne równanie z zamienionymi rolami."
          },
          {
            "kind": "h3",
            "text": "Rozwiązany przykład"
          },
          {
            "kind": "p",
            "text": "Dane: [[B=62^\\circ]]:"
          },
          {
            "kind": "p",
            "text": "[[A=90^\\circ-62^\\circ=28^\\circ]]"
          },
          {
            "kind": "p",
            "text": "Trzy kolejne krótkie przykłady w odwrotnym kierunku opierają się na tym samym kroku:"
          }
        ],
        "list": [
          "[[B=15^\\circ]], więc [[A=90^\\circ-15^\\circ=75^\\circ]].",
          "[[B=42^\\circ]], więc [[A=90^\\circ-42^\\circ=48^\\circ]].",
          "[[B=70^\\circ]], więc [[A=90^\\circ-70^\\circ=20^\\circ]]."
        ],
        "closingParagraphs": [
          "Jedna uwaga praktyczna: pole wejściowe tego kalkulatora przyjmuje kąt [[A]] i zwraca kąt [[B]]. Czytelnik, który zna tylko kąt [[B]], powinien zastosować wzór odwrotny ręcznie, chyba że zweryfikowano, iż interfejs obsługuje bezpośrednie wpisanie [[B]]."
        ]
      },
      "missing-vs": {
        "h2": "Kąty dopełniające a kąty przyległe",
        "blocks": [
          {
            "kind": "p",
            "text": "Oba terminy brzmią podobnie i oba opisują pary kątów, ale odpowiadają na różne pytania."
          },
          {
            "kind": "h3",
            "text": "Kąty dopełniające"
          },
          {
            "kind": "p",
            "text": "Dwa kąty są dopełniające, gdy ich suma wynosi [[90^\\circ]]. Dwa kąty ostre trójkąta prostokątnego to podręcznikowy przykład: muszą być dopełniające, ponieważ kąt prosty już zajmuje pozostałe 90 stopni sumy trójkąta."
          },
          {
            "kind": "h3",
            "text": "Kąty przyległe"
          },
          {
            "kind": "p",
            "text": "Dwa kąty są przyległe, gdy ich suma wynosi [[180^\\circ]]. Linię prostą można na przykład podzielić na dwa kąty przyległe. Par przyległych nigdy nie wolno mylić z dwoma kątami ostrymi trójkąta prostokątnego, które sumują się do 90, a nie 180."
          }
        ],
        "table": {
          "headers": [
            "Zależność",
            "Suma",
            "Przykład"
          ],
          "rows": [
            [
              "Dopełniające",
              "90°",
              "35 + 55"
            ],
            [
              "Przyległe",
              "180°",
              "110 + 70"
            ],
            [
              "Kąt prosty",
              "90°",
              "Stały kąt w trójkącie prostokątnym"
            ]
          ]
        },
        "closingParagraphs": [
          "Pełna suma kątów trójkąta wynosi 180 stopni, ale dwa kąty ostre łącznie sumują się do 90 stopni. Utrzymywanie tych dwóch sum oddzielnie to klucz do uniknięcia najczęstszego błędu na tej stronie."
        ],
        "imgAlt": "Cztery panele pokazujące kąty dopełniające dla drabiny, krokwi, zastrzału i przekątnej kwadratu",
        "figcaption": "Pary dopełniające w rzeczywistych sytuacjach: każdy znany kąt wyznacza swojego partnera."
      },
      "missing-mistakes": {
        "h2": "Częste błędy przy znajdowaniu brakującego kąta",
        "steps": [
          "<strong>Odejmowanie znanego kąta od 180 stopni zamiast od 90.</strong> Suma 180 stopni obejmuje kąt prosty, który jest już stały. Co idzie nie tak: przy [[A=35^\\circ]] błędne działanie daje 145 stopni, niemożliwy kąt ostry. Poprawka: odejmuj od 90, co daje [[55^\\circ]].",
          "<strong>Zapominanie, że jeden kąt ma już 90 stopni.</strong> Kąt prosty łatwo przeoczyć, ponieważ nie wymaga obliczeń. Co idzie nie tak: traktowanie trójkąta tak, jakby wszystkie trzy kąty były nieznane. Poprawka: pamiętaj, że kąt prosty zajmuje połowę sumy 180 stopni, zanim zaczniesz.",
          "<strong>Wpisywanie 90 stopni do kalkulatora.</strong> Narzędzie oczekuje kąta ostrego ściśle między 0 a 90 stopni. Co idzie nie tak: dane 90 stopni nie pozostawiają miejsca na drugi kąt ostry. Poprawka: wpisuj tylko znany kąt ostry.",
          "<strong>Wpisywanie kąta większego niż 90 stopni.</strong> Żaden kąt ostry z definicji nie przekracza 90 stopni. Co idzie nie tak: odejmowanie daje wynik ujemny, który nie ma tu sensu geometrycznego. Poprawka: sprawdź, czy dane są poniżej 90 stopni.",
          "<strong>Wpisywanie 0 stopni.</strong> Kąt zerowy zwija trójkąt w odcinek linii. Co idzie nie tak: wynik twierdzi, że dopełnienie 90 stopni należy do figury bez pola. Poprawka: używaj tylko dodatnich kątów ostrych.",
          "<strong>Mylenie kątów dopełniających z kątami przyległymi.</strong> Pary dopełniające sumują się do 90 stopni; pary przyległe sumują się do 180. Co idzie nie tak: odejmowanie od 180 daje błąd z punktu 1. Poprawka: dopasuj słowo do sumy, dopełniające z 90.",
          "<strong>Zakładanie, że oba kąty ostre muszą być równe.</strong> Równość zachodzi tylko przy 45 stopniach każdy. Co idzie nie tak: oczekiwanie symetrii w trójkącie 20-70. Poprawka: pozwól odejmowaniu zdecydować; większość par się różni.",
          "<strong>Mieszanie oznaczeń kątów A i B.</strong> Kalkulator przyjmuje [[A]] i zwraca [[B]]. Co idzie nie tak: wpisywanie już znanego dopełnienia tak, jakby było danymi wejściowymi. Poprawka: oznacz znany kąt jako A, zanim cokolwiek wpiszesz.",
          "<strong>Myślenie, że do tego konkretnego obliczenia potrzebne są długości boków.</strong> Boki mają znaczenie w trygonometrii, nie w dopełnieniach. Co idzie nie tak: utknięcie przy zadaniu, które wymaga tylko odejmowania. Poprawka: jeśli znany jest kąt ostry, odejmij go od 90 i zakończ.",
          "<strong>Używanie odwrotnego sinusa, cosinusa lub tangensa, gdy wystarczy zwykłe odejmowanie.</strong> Funkcje odwrotne odpowiadają na trudniejsze pytanie. Co idzie nie tak: dodatkowa praca i dodatkowe okazje do błędów trybu. Poprawka: gdy kąt jest znany, <a href=\"/right-triangle-angle-from-sine-calculator/\" class=\"text-primary hover:underline\">kalkulator kąta z sinusa</a> i jego odpowiedniki to złe narzędzia; odejmowanie jest dokładne i natychmiastowe.",
          "<strong>Zakładanie, że zmierzony kąt fizyczny automatycznie tworzy trójkąt prostokątny, bez sprawdzenia kierunków odniesienia.</strong> Prawdziwe narożniki rzadko są idealne. Co idzie nie tak: stosowanie reguły dopełnienia tam, gdzie róg 90 stopni faktycznie nie istnieje. Poprawka: zweryfikuj, że kierunki odniesienia są prostopadłe, zanim odejmiesz.",
          "<strong>Niepotrzebne zaokrąglanie danych pomiarowych przed odejmowaniem.</strong> Wczesne zaokrąglanie odrzuca precyzję, którą dane faktycznie miały. Co idzie nie tak: 68.5 zaokrąglone do 69 daje 21 zamiast 21.5. Poprawka: odejmuj z pełną zmierzoną wartością, a następnie zaokrąglij wynik do precyzji danych wejściowych."
        ],
        "blocks": [
          {
            "kind": "h3",
            "text": "Błędne a poprawne"
          },
          {
            "kind": "p",
            "text": "Dane: [[A=35^\\circ]]:"
          },
          {
            "kind": "p",
            "text": "Niepoprawnie: [[180^\\circ-35^\\circ=145^\\circ]]. To nie jest brakujący kąt ostry, ponieważ kąt prosty nie został uwzględniony; 145 stopni nie może znajdować się w trójkącie prostokątnym obok narożnika 90 stopni."
          },
          {
            "kind": "p",
            "text": "Poprawnie: [[90^\\circ-35^\\circ=55^\\circ]]."
          },
          {
            "kind": "p",
            "text": "Weryfikacja: [[35^\\circ+55^\\circ+90^\\circ=180^\\circ]]. Pełna suma kątów potwierdza odpowiedź."
          }
        ]
      },
      "missing-verify": {
        "h2": "Jak sprawdzić, czy brakujący kąt jest poprawny",
        "blocks": [
          {
            "kind": "p",
            "text": "Poprawny zakres danych wejściowych to:"
          },
          {
            "kind": "p",
            "text": "[[[0^\\circ \\lt A \\lt 90^\\circ]]]"
          },
          {
            "kind": "p",
            "text": "a obliczony kąt musi spełniać ten sam zakres:"
          },
          {
            "kind": "p",
            "text": "[[[0^\\circ \\lt B \\lt 90^\\circ]]]"
          },
          {
            "kind": "p",
            "text": "Dane 0 lub 90 stopni dałyby zdegenerowany przypadek graniczny zamiast zwykłego trójkąta prostokątnego o trzech różnych wierzchołkach i dodatnich długościach boków. Kalkulator egzekwuje ścisłą nierówność dokładnie z tego powodu."
          },
          {
            "kind": "h3",
            "text": "Metoda 1: Dodaj kąty ostre"
          },
          {
            "kind": "p",
            "text": "Zweryfikuj [[A+B=90^\\circ]]. Przykład: [[35^\\circ+55^\\circ=90^\\circ]]. To najszybsza kontrola i natychmiast wyłapuje błąd odejmowania od 180 stopni."
          },
          {
            "kind": "h3",
            "text": "Metoda 2: Sprawdź cały trójkąt"
          },
          {
            "kind": "p",
            "text": "Zweryfikuj [[A+B+90^\\circ=180^\\circ]]. Przykład: [[35^\\circ+55^\\circ+90^\\circ=180^\\circ]]. To potwierdza odpowiedź względem uniwersalnej sumy kątów trójkąta."
          },
          {
            "kind": "h3",
            "text": "Metoda 3: Sprawdź obliczenie odwrotne"
          },
          {
            "kind": "p",
            "text": "Jeśli [[B=90^\\circ-A]], to [[A=90^\\circ-B]] musi odzyskać pierwotne dane. Przy [[A=35^\\circ]] dającym [[B=55^\\circ]] kontrola odwrotna to [[90^\\circ-55^\\circ=35^\\circ]]. Ta kontrola spójności nie wymaga w ogóle pomiarów boków."
          },
          {
            "kind": "p",
            "text": "Jedno ostrzeżenie: jeśli kąt wejściowy pochodzi z pomiaru fizycznego, jego niepewność przenosi się na wynik. Z grubsza zmierzone 35 stopni daje z grubsza znane 55 stopni; podaj odpowiedź z precyzją odpowiadającą pomiarowi. Do kontroli obejmujących długości boków <a href=\"/pythagorean-theorem-calculator/\" class=\"text-primary hover:underline\">kalkulator twierdzenia Pitagorasa</a> może niezależnie potwierdzić geometrię trójkąta."
          }
        ]
      },
      "missing-choose": {
        "h2": "Wybór odpowiedniego kalkulatora trójkąta prostokątnego",
        "blocks": [
          {
            "kind": "p",
            "text": "Każde narzędzie poniżej odpowiada na inne pytanie. Dopasuj narzędzie do tego, co faktycznie wiesz:"
          }
        ],
        "list": [
          "<strong>Kalkulator brakującego kąta trójkąta prostokątnego</strong> (ta strona): znajduje kąt dopełniający, gdy jeden kąt ostry jest już znany. Używaj go zawsze, gdy danymi wejściowymi jest kąt, a nie bok.",
          "<a href=\"/right-triangle-angle-from-sine-calculator/\" class=\"text-primary hover:underline\"><strong>Kalkulator kąta trójkąta prostokątnego z sinusa</strong></a>: znajduje kąt ostry na podstawie boku przeciwległego i przeciwprostokątnej. Używaj go, gdy te dwie długości zmierzono.",
          "<a href=\"/right-triangle-angle-from-cosine-calculator/\" class=\"text-primary hover:underline\"><strong>Kalkulator kąta trójkąta prostokątnego z cosinusa</strong></a>: znajduje kąt ostry na podstawie boku przyległego i przeciwprostokątnej.",
          "<a href=\"/right-triangle-angle-from-tangent-calculator/\" class=\"text-primary hover:underline\"><strong>Kalkulator kąta trójkąta prostokątnego z tangensa</strong></a>: znajduje kąt ostry na podstawie boku przeciwległego i przyległego, czyli obu przyprostokątnych.",
          "<a href=\"/right-triangle-side-from-sine-calculator/\" class=\"text-primary hover:underline\"><strong>Kalkulator boku trójkąta prostokątnego z sinusa</strong></a>: znajduje brakującą długość boku, gdy znany jest kąt i jeden bok.",
          "<a href=\"/right-triangle-side-from-cosine-calculator/\" class=\"text-primary hover:underline\"><strong>Kalkulator boku trójkąta prostokątnego z cosinusa</strong></a>: znajduje brakującą długość boku na podstawie kąta oraz przeciwprostokątnej lub boku przyległego.",
          "<a href=\"/right-triangle-side-from-tangent-calculator/\" class=\"text-primary hover:underline\"><strong>Kalkulator boku trójkąta prostokątnego z tangensa</strong></a>: znajduje brakującą przyprostokątną na podstawie znanego kąta i drugiej przyprostokątnej."
        ],
        "closingParagraphs": [
          "Reguła decyzyjna jest prosta. Znasz jeden kąt ostry: użyj kalkulatora brakującego kąta na tej stronie. Znasz dwie odpowiednie długości boków: użyj pasującego kalkulatora odwrotno-trygonometrycznego. Potrzebujesz nieznanego boku: użyj kalkulatora boków. A potrzebujesz drugiego kąta po obliczeniu trygonometrycznym: odejmij znany kąt od 90 stopni, czyli dokładnie to, co automatyzuje ta strona."
        ]
      },
      "missing-faq": {
        "h2": "Częste pytania",
        "blocks": []
      },
      "missing-related": {
        "h2": "Odkryj powiązane kalkulatory trójkątów",
        "blocks": []
      },
      "missing-conclusion": {
        "h2": "Znajdź dowolny brakujący kąt z pewnością",
        "blocks": [
          {
            "kind": "p",
            "text": "Obliczenie brakującego kąta to najprostsza operacja w geometrii trójkąta prostokątnego: odejmij znany kąt ostry od 90 stopni. Za tym odejmowaniem stoi reguła sumy kątów trójkąta, która rezerwuje połowę każdej sumy trójkąta na kąt prosty, a drugą połowę pozostawia parze dopełniającej. Niezależnie od tego, czy znany kąt pochodzi z krokwi dachowej, drabiny, belki schodowej, czy układu kreślarskiego, metoda nigdy się nie zmienia: potwierdź kąt prosty, odejmij od 90 i zweryfikuj, że oba kąty ostre sumują się do 90 stopni. Zachowaj tę stronę w zakładkach na chwile, gdy kąt jest już znany, a brakuje tylko jego partnera."
          }
        ]
      }
    },
    "faqs": [
      {
        "question": "Jak znaleźć brakujący kąt w trójkącie prostokątnym?",
        "answer": "Odejmij znany kąt ostry od 90 stopni. Wzór to B = 90 - A, gdzie A to kąt, który znasz, a B to brakujący kąt. Na przykład, jeśli A wynosi 35 stopni, to B = 90 - 35 = 55 stopni. Nie są potrzebne długości boków ani funkcje trygonometryczne."
      },
      {
        "question": "Dlaczego dwa kąty ostre sumują się do 90 stopni?",
        "answer": "Każdy trójkąt zawiera łącznie 180 stopni. Trójkąt prostokątny rezerwuje 90 z tych stopni na swój kąt prosty, co pozostawia dokładnie 90 stopni do podziału między dwa pozostałe kąty ostre. Dlatego w trójkącie prostokątnym A + B zawsze równa się 90 stopni."
      },
      {
        "question": "Jaki jest wzór na brakujący kąt?",
        "answer": "Wzór to B = 90 - A. Zacznij od sumy kątów trójkąta A + B + 90 = 180, odejmij 90 od obu stron, aby otrzymać A + B = 90, a następnie odejmij A od obu stron. Odwrotna postać, A = 90 - B, działa tak samo, gdy znanym kątem jest B."
      },
      {
        "question": "Czym są kąty dopełniające?",
        "answer": "Dwa kąty są dopełniające, gdy ich miary sumują się do 90 stopni. Pary 30 i 60, 35 i 55 oraz 45 i 45 są dopełniające. W każdym trójkącie prostokątnym dwa kąty ostre są z definicji dopełniające, co dokładnie wyraża wzór na brakujący kąt."
      },
      {
        "question": "Czy mogę znaleźć brakujący kąt, nie znając długości boków?",
        "answer": "Tak. Gdy znany jest jeden kąt ostry, długości boków nie mają znaczenia dla tego obliczenia. Zależność kątów dopełniających opiera się wyłącznie na sumie kątów, więc odjęcie od 90 stopni daje dokładną odpowiedź. Długości boków mają znaczenie tylko wtedy, gdy żaden kąt nie jest jeszcze znany."
      },
      {
        "question": "Jaka jest różnica między kątami dopełniającymi a przyległymi?",
        "answer": "Kąty dopełniające sumują się do 90 stopni; kąty przyległe sumują się do 180 stopni. Dwa kąty ostre trójkąta prostokątnego są dopełniające. Częstym błędem jest odejmowanie znanego kąta od 180 zamiast od 90, co zapomina, że kąt prosty już odpowiada za połowę sumy trójkąta."
      },
      {
        "question": "Czy oba kąty ostre mogą być równe?",
        "answer": "Tak, gdy każdy mierzy 45 stopni. Wtedy 90 - 45 = 45, więc trójkąt jest równoramiennym trójkątem prostokątnym o dwóch równych przyprostokątnych. To jedyny przypadek, w którym oba kąty ostre są zgodne; w każdym innym trójkącie prostokątnym się różnią."
      },
      {
        "question": "Co się dzieje, gdy znany kąt wynosi 35 stopni?",
        "answer": "Brakujący kąt to 90 - 35 = 55 stopni. Możesz to zweryfikować na dwa sposoby: 35 + 55 = 90 potwierdza parę dopełniającą, a 35 + 55 + 90 = 180 potwierdza pełną sumę kątów trójkąta. Obie kontrole powinny zawsze się zgadzać."
      },
      {
        "question": "Co się dzieje, gdy znany kąt jest większy niż 45 stopni?",
        "answer": "Brakujący kąt wychodzi mniejszy niż 45 stopni, ponieważ oba muszą nadal sumować się do 90. Na przykład, jeśli A wynosi 68 stopni, to B = 90 - 68 = 22 stopnie. Gdy znany kąt rośnie w stronę 90, jego dopełnienie maleje w stronę 0."
      },
      {
        "question": "Czy brakujący kąt ostry może wynosić dokładnie 0 lub 90 stopni?",
        "answer": "Nie w zwykłym trójkącie prostokątnym. Dane 0 lub 90 stopni opisują zdegenerowany przypadek graniczny bez rzeczywistego pola trójkąta, a nie trójkąt o trzech różnych wierzchołkach. Kalkulator wymaga, aby znany kąt leżał ściśle między 0 a 90 stopni, a wynik zawsze mieści się w tym samym zakresie."
      },
      {
        "question": "Jak znaleźć kąt A, gdy znany jest kąt B?",
        "answer": "Użyj wzoru odwrotnego A = 90 - B. To ta sama zależność dopełniająca rozwiązana względem drugiej zmiennej. Na przykład, jeśli B wynosi 62 stopnie, to A = 90 - 62 = 28 stopni. Zwróć uwagę, że ten kalkulator przyjmuje kąt A jako dane wejściowe, więc wzór odwrotny zastosuj ręcznie, gdy znane jest tylko B."
      },
      {
        "question": "Kiedy zamiast tego użyć kalkulatora sinusa, cosinusa lub tangensa?",
        "answer": "Użyj kalkulatora odwrotno-trygonometrycznego, gdy żaden kąt nie jest jeszcze znany, ale znane są dwie długości boków. Kalkulator kąta z sinusa potrzebuje boku przeciwległego i przeciwprostokątnej, kalkulator kąta z cosinusa potrzebuje boku przyległego i przeciwprostokątnej, a kalkulator kąta z tangensa potrzebuje obu przyprostokątnych. Gdy znany jest już dowolny kąt ostry, kalkulator brakującego kąta dokończy zadanie."
      }
    ],
    "relatedHeading": "Odkryj powiązane kalkulatory trójkątów",
    "relatedItems": [
      "Kalkulator kąta trójkąta prostokątnego z sinusa",
      "Kalkulator kąta trójkąta prostokątnego z cosinusa",
      "Kalkulator kąta trójkąta prostokątnego z tangensa",
      "Kalkulator boku trójkąta prostokątnego z sinusa",
      "Kalkulator boku trójkąta prostokątnego z cosinusa",
      "Kalkulator boku trójkąta prostokątnego z tangensa"
    ]
  }
};
