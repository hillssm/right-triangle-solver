/**
 * sideFromAngleTranslations.batch2.ts
 * Translations of the Right Triangle Side From Angle Calculator guide (SideFromAngleGuide.astro)
 * Batch 2: Portuguese (pt), Bengali (bn), Japanese (ja), Korean (ko), Malay (ms), Polish (pl).
 *
 * Structure per language:
 * - tocHeading, tocItems (14 entries keyed by section id)
 * - sections (angle-intro, angle-anatomy, angle-trig, angle-modes, angle-examples,
 *   angle-effect, angle-degrees, angle-howto, angle-mistakes, angle-validation,
 *   angle-verify, angle-other, angle-conclusion; angle-faq and angle-related may
 *   appear as sections or as top-level faqs / related* keys)
 * - faqs (12 question/answer pairs)
 * - relatedHeading, relatedIntro, relatedItems (6 calculator names)
 *
 * Formulas, KaTeX markup, variable names, numbers, URLs, and HTML IDs are preserved
 * exactly as in the English source. Display-block KaTeX ([[[...]]]) worked examples
 * are rendered from source and not included here.
 */

export const SIDE_FROM_ANGLE_TRANSLATIONS_BATCH2 = {

  "pt":   {
    "tocHeading": "Neste Guia",
    "tocItems": {
      "angle-intro": "Como Encontrar um Lado Usando um Ângulo",
      "angle-anatomy": "Entendendo os Lados e os Ângulos",
      "angle-trig": "Seno, Cosseno e Tangente",
      "angle-modes": "Os Quatro Modos da Calculadora",
      "angle-examples": "Exemplos da Vida Real",
      "angle-effect": "Como os Ângulos Mudam os Comprimentos dos Lados",
      "angle-degrees": "Graus e Configurações da Calculadora",
      "angle-howto": "Usando a Calculadora",
      "angle-mistakes": "Erros Comuns",
      "angle-validation": "Validação dos Dados de Entrada",
      "angle-verify": "Verificando Sua Resposta",
      "angle-other": "Quando Usar Outra Calculadora",
      "angle-related": "Calculadoras Relacionadas",
      "angle-faq": "Perguntas Frequentes"
    },
    "sections": {
      "angle-intro": {
        "h2": "Como Encontrar um Lado de um Triângulo Retângulo Usando um Ângulo",
        "paragraphs": [
          "Imagine uma escada encostada em uma parede. Você sabe que a escada tem 5 m de comprimento e forma 65 graus com o chão, mas até que altura ela alcança? Uma calculadora de lado de triângulo retângulo a partir do ângulo responde exatamente a esse tipo de pergunta: ela encontra um lado desconhecido quando você conhece um ângulo agudo e um comprimento de lado. Um lado mais um ângulo é suficiente porque a trigonometria define a forma do triângulo por completo. As três razões, seno, cosseno e tangente, ligam o ângulo a um par diferente de lados cada uma. O seno liga o cateto oposto à hipotenusa, o cosseno liga o cateto adjacente à hipotenusa e a tangente liga os dois catetos diretamente. Esta página explica qual razão se encaixa na sua situação, por que ela funciona e como usar a calculadora acima. Ao contrário de uma calculadora do teorema de Pitágoras, que precisa de dois lados conhecidos, esta ferramenta funciona com um único lado e um único ângulo."
        ]
      },
      "angle-anatomy": {
        "h2": "Entendendo os Lados e os Ângulos de um Triângulo Retângulo",
        "h3s": [
          "O Que é um Triângulo Retângulo?",
          "O Que é a Hipotenusa?",
          "O Que São os Catetos Oposto e Adjacente?"
        ],
        "paragraphs": [
          "Um triângulo retângulo tem um ângulo de exatamente 90 graus, o mesmo canto que você vê em uma folha de papel. Os outros dois ângulos são agudos, cada um menor que 90 graus, e sempre somam 90 graus, porque os três ângulos de qualquer triângulo totalizam 180. A trigonometria deste guia vale apenas para triângulos retângulos: as razões seno, cosseno e tangente são definidas a partir do ângulo reto, então usá-las em um triângulo sem um canto de 90 graus produz respostas erradas.",
          "A hipotenusa fica oposta ao ângulo reto e é sempre o maior dos três lados. Ela recebe o nome [[c]] por convenção. Para identificá-la em um diagrama girado, procure o lado que não toca a marca do ângulo reto. Não importa como o triângulo esteja virado, a hipotenusa continua oposta ao canto quadrado.",
          "Escolha um ângulo agudo e chame-o de [[A]]. O cateto que fica em frente a [[A]] é o lado oposto, chamado de [[a]]. O cateto que forma [[A]] junto com a hipotenusa é o lado adjacente, chamado de [[b]]. Aqui está a parte que confunde os iniciantes: os nomes dependem do ângulo escolhido. O mesmo cateto que é oposto ao ângulo [[A]] passa a ser adjacente quando você muda a referência para o ângulo [[B]]. A hipotenusa nunca muda de papel. Em todo este guia, [[a]] é oposto a [[A]], [[b]] é adjacente a [[A]] e [[c]] é a hipotenusa."
        ],
        "imgAlt": "Triângulo retângulo com o ângulo A no canto inferior esquerdo, cateto a oposto e cateto b adjacente a A, hipotenusa c",
        "figcaption": "Anatomia em relação ao ângulo A: o lado a é oposto a A, o lado b é adjacente a A e c é a hipotenusa. A + B = 90°."
      },
      "angle-trig": {
        "h2": "Como Seno, Cosseno e Tangente Ajudam a Encontrar Lados Desconhecidos",
        "h3s": [
          "Entendendo o Seno",
          "Entendendo o Cosseno",
          "Entendendo a Tangente",
          "O Que Significa SOH-CAH-TOA?"
        ],
        "paragraphs": [
          "Uma razão trigonométrica é uma relação fixa entre dois lados de um triângulo retângulo para um determinado ângulo. Mude o ângulo e a razão muda; mantenha o ângulo e todo triângulo com esse ângulo compartilha as mesmas razões, qualquer que seja o tamanho. É por isso que um ângulo mais um lado determina todo o resto. Cada uma das três razões combina o ângulo com uma combinação diferente de lados, então o lado que você conhece decide qual razão usar.",
          "O seno compara o cateto oposto com a hipotenusa: [[\\sin(A) = \\frac{a}{c}]]. Para isolar o lado desconhecido, multiplique os dois lados por [[c]]. O [[c]] do lado direito se cancela, restando [[a = c\\sin(A)]]. Em palavras: o cateto oposto é igual à hipotenusa multiplicada pelo seno do ângulo. Um ângulo maior produz um valor maior de seno, então o lado oposto cresce à medida que o ângulo se abre.",
          "O cosseno compara o cateto adjacente com a hipotenusa: [[\\cos(A) = \\frac{b}{c}]]. Multiplique os dois lados por [[c]] e você obtém [[b = c\\cos(A)]]. O cateto adjacente é igual à hipotenusa multiplicada pelo cosseno do ângulo. À medida que o ângulo [[A]] cresce em direção a 90 graus, o lado adjacente encolhe em direção a zero, o que corresponde à geometria: o ângulo achata o cateto adjacente.",
          "A tangente compara os dois catetos diretamente: [[\\tan(A) = \\frac{a}{b}]]. Reorganizada das duas formas, ela produz [[a = b\\tan(A)]] e [[b = \\frac{a}{\\tan(A)}]]. Use a multiplicação quando o cateto conhecido for o adjacente e você quiser o oposto: multiplicar o lado adjacente pela tangente o estica até o lado oposto. Use a divisão quando o cateto conhecido for o oposto e você quiser o adjacente: você está perguntando quantas partes do tamanho da tangente cabem no cateto oposto. As duas formas são a mesma relação lida em direções opostas.",
          "SOH-CAH-TOA é um macete de memorização, não um substituto para identificar os lados corretamente. SOH: Seno = Oposto / Hipotenusa. CAH: Cosseno = Adjacente / Hipotenusa. TOA: Tangente = Oposto / Adjacente. Ele ajuda você a escolher a razão depois de ter nomeado oposto, adjacente e hipotenusa em relação ao seu ângulo. Sempre nomeie os lados primeiro; o macete só diz qual fração escrever depois disso."
        ],
        "imgAlt": "Três painéis mostrando as razões seno, cosseno e tangente no mesmo triângulo retângulo",
        "figcaption": "SOH-CAH-TOA em um triângulo: o seno usa o oposto e a hipotenusa, o cosseno usa o adjacente e a hipotenusa, a tangente usa os dois catetos."
      },
      "angle-modes": {
        "h2": "Como Escolher o Modo Correto da Calculadora",
        "paragraphs": [
          "O modo correto depende de dois fatos: qual comprimento de lado você já conhece e qual lado está faltando. Encontre sua situação na tabela e depois leia o exemplo resolvido correspondente abaixo."
        ],
        "h3s": [
          "Modo 1: Encontrar o Cateto a Usando o Seno",
          "Modo 2: Encontrar o Cateto b Usando o Cosseno",
          "Modo 3: Encontrar o Cateto a Usando a Tangente",
          "Modo 4: Encontrar o Cateto b Usando a Tangente"
        ],
        "modeParagraphs": [
          "Escolha este modo quando conhecer a hipotenusa e precisar do lado oposto ao ângulo. Confirme que o lado conhecido é o que fica em frente ao ângulo reto e que seu ângulo é o ângulo agudo que o lado oposto encara. O seno é a razão certa porque relaciona diretamente oposto e hipotenusa. Digite o comprimento da hipotenusa e o ângulo em graus. O resultado é o cateto oposto.",
          "Escolha este modo quando conhecer a hipotenusa e precisar do lado adjacente ao ângulo. O cosseno relaciona adjacente e hipotenusa, então converte o comprimento inclinado no cateto que corre ao lado do ângulo. O lado adjacente é sempre menor que a hipotenusa, pois o cosseno de um ângulo agudo é sempre menor que 1.",
          "Escolha este modo quando conhecer o cateto adjacente e precisar do cateto oposto. Esta é a clássica situação de “distância e ângulo de elevação”: você está a uma distância horizontal conhecida e quer a altura. A tangente amplia (ou reduz) o cateto adjacente até o cateto oposto. O ângulo controla a razão, então um ângulo mais inclinado significa um lado oposto mais alto para a mesma base.",
          "Escolha este modo quando conhecer o cateto oposto e precisar do cateto adjacente. Ele responde a perguntas como “a altura é fixa, até onde a base deve se estender?” A divisão pela tangente inverte a escala do Modo 3: em vez de esticar a base até a altura, você comprime a altura de volta até a base."
        ],
        "modeExamples": [
          "Exemplo resolvido: dados [[c = 10\\text{ m}]] e [[A = 30^\\circ]], encontre o cateto [[a]].",
          "Exemplo resolvido: dados [[c = 12\\text{ ft}]] e [[A = 60^\\circ]], encontre o cateto [[b]].",
          "Exemplo resolvido: dados [[b = 8\\text{ m}]] e [[A = 35^\\circ]], encontre o cateto [[a]].",
          "Exemplo resolvido: dados [[a = 4\\text{ m}]] e [[A = 40^\\circ]], encontre o cateto [[b]]."
        ],
        "modeNotes": [
          "A resposta faz sentido: a 30 graus, o lado oposto é exatamente metade da hipotenusa, uma verificação prática que você pode fazer de cabeça.",
          "A 60 graus, o lado adjacente é metade da hipotenusa, espelhando o caso do seno de 30 graus. Os dois ângulos agudos trocam de papel: o lado adjacente a 60° é oposto a 30°.",
          "Como 35° está abaixo de 45°, o lado oposto sai menor que o cateto adjacente, o que corresponde à geometria.",
          "A 40°, um pouco abaixo de 45°, o lado adjacente é um pouco maior que o lado oposto. Essa pequena diferença é exatamente o que a divisão captura."
        ],
        "table": {
          "headers": [
            "Lado Conhecido",
            "Ângulo Conhecido",
            "Lado Desconhecido",
            "Fórmula",
            "Modo da Calculadora",
            "Quando Usar"
          ],
          "rows": [
            [
              "Hipotenusa c",
              "A",
              "Cateto a",
              "a = c × sin(A)",
              "Cateto a pelo Seno",
              "Comprimento inclinado conhecido, precisa do lado em frente ao ângulo"
            ],
            [
              "Hipotenusa c",
              "A",
              "Cateto b",
              "b = c × cos(A)",
              "Cateto b pelo Cosseno",
              "Comprimento inclinado conhecido, precisa do lado ao lado do ângulo"
            ],
            [
              "Cateto b",
              "A",
              "Cateto a",
              "a = b × tan(A)",
              "Cateto a pela Tangente",
              "Distância horizontal conhecida, precisa da altura vertical"
            ],
            [
              "Cateto a",
              "A",
              "Cateto b",
              "b = a / tan(A)",
              "Cateto b pela Tangente",
              "Altura vertical conhecida, precisa da distância horizontal"
            ]
          ]
        },
        "imgAlt": "Quatro painéis comparando os modos de calculadora de seno, cosseno e as duas tangentes com valores resolvidos",
        "figcaption": "Os quatro modos lado a lado: seno e cosseno partem da hipotenusa, os modos de tangente convertem entre os dois catetos."
      },
      "angle-examples": {
        "h2": "Exemplos da Vida Real de Como Encontrar Lados de Triângulos Retângulos Usando Ângulos",
        "intro": "Cada exemplo abaixo segue o mesmo caminho: identifique o triângulo retângulo, nomeie o lado e o ângulo conhecidos, escolha a razão que os conecta ao lado desconhecido, substitua, calcule e leia a resposta de volta no contexto. Observe como a escolha entre seno, cosseno ou tangente decorre da geometria a cada vez.",
        "examples": [
          {
            "h3": "Exemplo 1: Descobrindo a Altura que uma Escada Alcança",
            "paragraphs": [
              "Uma escada de 5 m está encostada em uma parede vertical, formando um ângulo de 65 graus com o chão nivelado. A parede, o chão e a escada formam um triângulo retângulo com a escada como hipotenusa. Dados: [[c = 5\\text{ m}]], [[A = 65^\\circ]]. A altura desconhecida é oposta ao ângulo de 65°, então o seno se encaixa: a razão conecta oposto e hipotenusa.",
              "A escada alcança cerca de 4.53 m na parede. A distância horizontal até a parede vem do cosseno, já que esse cateto é adjacente ao ângulo:",
              "Uma hipotenusa e um ângulo deram os dois catetos. Observe que este é apenas um cálculo de geometria; ele não diz nada sobre se a escada está montada com segurança, então siga as orientações do fabricante no uso real."
            ]
          },
          {
            "h3": "Exemplo 2: Calculando a Subida de uma Rampa",
            "paragraphs": [
              "Uma rampa simplificada tem 12 m de extensão horizontal e sobe 5 graus acima da horizontal. A extensão e a subida são os catetos de um triângulo retângulo, com a extensão adjacente ao ângulo de 5°. Dados: [[b = 12\\text{ m}]], [[A = 5^\\circ]]. A subida desconhecida é o cateto oposto, e a tangente conecta oposto a adjacente.",
              "A rampa sobe cerca de 1.05 m ao longo de seus 12 m de extensão. Mantenha a extensão horizontal e a superfície inclinada separadas: a inclinação em si é um pouco maior que 12 m. Este resultado não certifica a rampa em relação às normas de acessibilidade ou de construção."
            ]
          },
          {
            "h3": "Exemplo 3: Descobrindo a Altura Vertical de um Telhado",
            "paragraphs": [
              "A seção transversal de um telhado tem uma extensão horizontal de 4.5 m com a superfície do telhado inclinada 30 graus acima da horizontal. A extensão é adjacente ao ângulo e a altura é oposta, então a tangente é a escolha natural.",
              "O telhado sobe cerca de 2.60 m. Uma inclinação maior aumentaria o valor da tangente e, com ele, a altura, e é por isso que o ângulo do telhado determina tão diretamente a altura do sótão. Este esboço simplificado ignora beirais, terças de cumeeira e folgas de estrutura que uma construção real exige."
            ]
          },
          {
            "h3": "Exemplo 4: Medindo o Alcance Vertical de um Cabo",
            "paragraphs": [
              "Um cabo de 20 m se estende do chão até o topo de um poste, formando um ângulo de 55 graus com a horizontal. O cabo é a hipotenusa. O seno dá o alcance vertical (oposto ao ângulo) e o cosseno dá o alcance horizontal (adjacente a ele), então uma única montagem produz os dois catetos.",
              "O cabo alcança cerca de 16.38 m na vertical e se estende por 11.47 m na horizontal. Combinar seno e cosseno assim é a forma padrão de dividir qualquer comprimento inclinado em partes vertical e horizontal."
            ]
          },
          {
            "h3": "Exemplo 5: Estimando a Altura a Partir de uma Linha de Visada",
            "paragraphs": [
              "Uma linha de visada simplificada de 150 m inclina-se 12 graus acima de uma referência horizontal. Tratando a linha de visada como a hipotenusa de um triângulo retângulo, o seno extrai a diferença vertical e o cosseno a distância horizontal.",
              "O ponto distante fica cerca de 31.19 m acima do nível de referência e 146.72 m de distância na horizontal. Um levantamento real aplicaria correções de terreno, altura do instrumento e efeitos atmosféricos; esta é a geometria bruta por trás disso."
            ]
          },
          {
            "h3": "Exemplo 6: Estimando a Altura de uma Árvore",
            "paragraphs": [
              "Você está a 25 m na horizontal do tronco de uma árvore em terreno plano, e o ângulo de elevação até o topo da árvore é de 38 graus. A distância horizontal é o cateto adjacente e a altura da árvore acima da sua referência visual é o cateto oposto, então a tangente liga os dois.",
              "O topo da árvore está cerca de 19.53 m acima do nível de observação. Se você mediu a partir da altura dos olhos em vez do nível do solo, some sua altura dos olhos para obter a altura total da árvore. O método pressupõe terreno plano entre você e o tronco."
            ]
          },
          {
            "h3": "Exemplo 7: Calculando o Deslocamento de um Suporte Mecânico",
            "paragraphs": [
              "Um projeto de suporte pede um braço horizontal de 600 mm encontrando a vertical a 25 graus da horizontal. O elemento horizontal é adjacente ao ângulo; o deslocamento vertical de que você precisa é oposto a ele.",
              "O deslocamento vertical é de cerca de 279.78 mm. O mesmo comprimento horizontal produz um deslocamento maior à medida que o ângulo cresce, e é por isso que pequenas mudanças de ângulo importam em encaixes mecânicos justos. Esta dimensão sozinha não prova que o suporte seja estruturalmente adequado."
            ]
          },
          {
            "h3": "Exemplo 8: Encontrando o Lado Oposto a Partir da Hipotenusa",
            "paragraphs": [
              "Um triângulo retângulo tem hipotenusa de 8 m e um ângulo agudo de 42 graus. O lado em frente ao ângulo é desconhecido. Como hipotenusa e cateto oposto são o par do seno, uma multiplicação resolve.",
              "O lado oposto é de cerca de 5.35 m. O seno sempre converte uma medida de hipotenusa no cateto que encara o ângulo, sem necessidade de reorganizar."
            ]
          },
          {
            "h3": "Exemplo 9: Encontrando uma Distância Horizontal a Partir de uma Medida Vertical",
            "paragraphs": [
              "Um triângulo retângulo tem um cateto oposto de 3.2 m e o ângulo é de 28 graus. O cateto adjacente é desconhecido. A tangente é igual ao oposto sobre o adjacente, então isolar o cateto adjacente significa dividir o cateto oposto conhecido pela tangente.",
              "A distância horizontal é de cerca de 6.02 m. Sempre que o lado conhecido está no numerador da razão, a divisão é o caminho para isolar o lado desconhecido."
            ]
          },
          {
            "h3": "Exemplo 10: Estimando o Deslocamento Vertical de um Prédio",
            "paragraphs": [
              "Uma linha de observação simplificada de 80 ft inclina-se 25 graus acima da horizontal. A linha é a hipotenusa e a componente vertical é oposta ao ângulo, pedindo o seno.",
              "A componente vertical é de cerca de 33.81 ft. Um ângulo maior empurraria mais dos 80 ft para a parte vertical e menos para a parte horizontal. Trate isto como uma estimativa geométrica aproximada, não como substituto de um levantamento adequado do prédio."
            ]
          },
          {
            "h3": "Exemplo 11: Calculando a Subida de uma Passarela Inclinada",
            "paragraphs": [
              "Uma passarela tem 6 m de extensão horizontal com uma inclinação de 8 graus. A extensão é adjacente ao ângulo e a subida é oposta, então a tangente se aplica diretamente.",
              "A passarela sobe cerca de 0.84 m. A subida cresce com a extensão e com a tangente do ângulo, então dobrar a extensão dobra a subida em um ângulo fixo. Verifique separadamente as normas locais quanto à conformidade da inclinação."
            ]
          },
          {
            "h3": "Exemplo 12: Encontrando um Deslocamento Horizontal a Partir de uma Subida Conhecida",
            "paragraphs": [
              "Uma estrutura tem um deslocamento vertical de 2 m, e sua diagonal forma um ângulo de 35 graus com a horizontal. O cateto vertical é oposto ao ângulo e o deslocamento horizontal é adjacente, então a tangente deve ser dividida.",
              "O deslocamento horizontal é de cerca de 2.86 m. Conhecer a subida e o ângulo determina a base por completo, e é assim que distâncias de recuo são derivadas de restrições de altura."
            ]
          }
        ],
        "table": {
          "headers": [
            "Cenário",
            "Lado Conhecido",
            "Ângulo Conhecido",
            "Razão",
            "Lado Calculado"
          ],
          "rows": [
            [
              "Altura da escada",
              "c = 5 m",
              "65°",
              "Seno",
              "a ≈ 4.53 m"
            ],
            [
              "Subida da rampa",
              "b = 12 m",
              "5°",
              "Tangente",
              "a ≈ 1.05 m"
            ],
            [
              "Altura do telhado",
              "b = 4.5 m",
              "30°",
              "Tangente",
              "a ≈ 2.60 m"
            ],
            [
              "Alcance do cabo",
              "c = 20 m",
              "55°",
              "Seno / Cosseno",
              "a ≈ 16.38 m, b ≈ 11.47 m"
            ],
            [
              "Linha de visada",
              "c = 150 m",
              "12°",
              "Seno / Cosseno",
              "a ≈ 31.19 m, b ≈ 146.72 m"
            ],
            [
              "Altura da árvore",
              "b = 25 m",
              "38°",
              "Tangente",
              "a ≈ 19.53 m"
            ],
            [
              "Deslocamento do suporte",
              "b = 600 mm",
              "25°",
              "Tangente",
              "a ≈ 279.78 mm"
            ],
            [
              "Oposto a partir da hipotenusa",
              "c = 8 m",
              "42°",
              "Seno",
              "a ≈ 5.35 m"
            ],
            [
              "Adjacente a partir do oposto",
              "a = 3.2 m",
              "28°",
              "Tangente",
              "b ≈ 6.02 m"
            ],
            [
              "Deslocamento do prédio",
              "c = 80 ft",
              "25°",
              "Seno",
              "a ≈ 33.81 ft"
            ],
            [
              "Subida da passarela",
              "b = 6 m",
              "8°",
              "Tangente",
              "a ≈ 0.84 m"
            ],
            [
              "Horizontal a partir da subida",
              "a = 2 m",
              "35°",
              "Tangente",
              "b ≈ 2.86 m"
            ]
          ]
        },
        "imgAlt": "Quatro painéis: altura da escada, subida da rampa, altura do telhado e altura da árvore resolvidos com trigonometria",
        "figcaption": "Trigonometria em ação: alturas da escada (4.53 m), da rampa (1.05 m), do telhado (2.60 m) e da árvore (19.53 m) a partir de um lado e um ângulo."
      },
      "angle-effect": {
        "h2": "Como o Ângulo Afeta o Lado Desconhecido",
        "paragraphs": [
          "Fixe a hipotenusa e deixe o ângulo crescer: o lado oposto se alonga enquanto o lado adjacente encolhe. O ângulo age como um botão que divide a hipotenusa entre os dois catetos. A 0 graus, o lado oposto desaparece e o cateto adjacente é igual a toda a hipotenusa; a 90 graus, acontece o inverso. A tangente se comporta de forma mais dramática porque não tem hipotenusa para ancorá-la: à medida que o ângulo se aproxima de 90 graus, o cateto oposto se eleva sobre um cateto adjacente que encolhe, e a tangente sobe sem limite.",
          "Dois triângulos podem compartilhar o mesmo ângulo agudo e ainda assim diferir completamente em tamanho. O ângulo fixa a forma, ou seja, todas as razões de lados correspondentes coincidem, enquanto a hipotenusa define a escala. Esses triângulos são semelhantes: uma escada de 5 m a 65° e uma escada de 10 m a 65° alcançam alturas em proporção exata de 1:2. A tabela abaixo mostra esse efeito do botão para uma hipotenusa de 10 unidades.",
          "A 45°, os catetos se equilibram exatamente e a tangente é igual a 1. Note a simetria: a linha de 30° espelha a linha de 60° com os catetos trocados, porque o lado oposto a 30° é adjacente a 60°."
        ],
        "table": {
          "headers": [
            "Ângulo A",
            "Opposite a = 10 × sin(A)",
            "Adjacent b = 10 × cos(A)",
            "tan(A) = a / b"
          ],
          "rows": [
            [
              "30°",
              "≈ 5.00",
              "≈ 8.66",
              "≈ 0.577"
            ],
            [
              "45°",
              "≈ 7.07",
              "≈ 7.07",
              "≈ 1.000"
            ],
            [
              "60°",
              "≈ 8.66",
              "≈ 5.00",
              "≈ 1.732"
            ]
          ]
        }
      },
      "angle-degrees": {
        "h2": "Por Que a Configuração Correta do Ângulo Importa",
        "paragraphs": [
          "Os ângulos podem ser medidos em graus ou radianos, e as duas escalas discordam completamente sobre o que um número significa. Uma volta completa é 360 graus, mas apenas cerca de 6.283 radianos. Esta calculadora espera graus: digitar 30 significa 30°, e [[\\sin(30^\\circ) = 0.5]]. Se esse mesmo 30 fosse lido como radianos, o seno seria cerca de −0.988, uma resposta muito diferente sem nenhum aviso.",
          "A armadilha funciona no sentido contrário também. Suponha que seu ângulo venha de um cálculo que produziu radianos, digamos 0.5 rad (cerca de 28.65°). Digitar 0.5 em uma calculadora no modo graus calcula sin(0.5°) ≈ 0.0087 em vez de sin(0.5 rad) ≈ 0.479. Sempre confirme em qual unidade seu ângulo está antes de digitá-lo. Arredondar o ângulo cedo também custa precisão: em ângulos inclinados, um décimo de grau move a tangente de forma perceptível, então mantenha a precisão total do ângulo até a etapa final."
        ]
      },
      "angle-howto": {
        "h2": "Guia Passo a Passo para Usar a Calculadora",
        "steps": [
          "Confirme o triângulo retângulo. Encontre o canto de 90 graus no seu desenho ou situação; sem ele, estas fórmulas não se aplicam.",
          "Identifique o ângulo A. Escolha o ângulo agudo ao qual suas medidas se referem. O outro ângulo agudo é 90° menos este.",
          "Nomeie os lados. Marque a hipotenusa c, depois chame de a o cateto oposto a A e de b o cateto adjacente a A.",
          "Anote qual lado você conhece. É a hipotenusa ou um dos catetos? Este único fato reduz a escolha a dois modos.",
          "Selecione o modo correspondente. Hipotenusa conhecida e cateto a faltando: Cateto a pelo Seno. Hipotenusa conhecida e cateto b faltando: Cateto b pelo Cosseno. Cateto b conhecido e cateto a faltando: Cateto a pela Tangente. Cateto a conhecido e cateto b faltando: Cateto b pela Tangente.",
          "Digite o comprimento do lado e sua unidade. Use a mesma família de unidades em que você vai apresentar a resposta.",
          "Digite o ângulo A em graus. Confira se ele é agudo, estritamente entre 0° e 90°.",
          "Calcule. O lado desconhecido aparece com as etapas da solução mostrando a substituição.",
          "Leia as etapas. Confirme que a calculadora usou a razão que você pretendia e que os números coincidem com suas entradas.",
          "Faça uma verificação de sanidade do resultado. Um cateto deve ser menor que a hipotenusa. Se você resolveu a partir da hipotenusa, os dois catetos do seno e do cosseno devem satisfazer a² + b² = c²."
        ],
        "paragraphs": [
          "Se a interface oferecer um controle de redefinição, use-o para limpar os campos antes de iniciar um novo cálculo, para que nenhum valor antigo vaze para o próximo resultado."
        ]
      },
      "angle-mistakes": {
        "h2": "Erros Comuns ao Encontrar Lados de Triângulos a Partir de Ângulos",
        "paragraphs": [
          "1. Confundir os lados oposto e adjacente. A nomeação é relativa ao ângulo A, e trocar os dois catetos troca o seno pelo cosseno. Correção: escreva “op” e “adj” no seu desenho antes de tocar na calculadora.",
          "2. Escolher o seno quando a tangente é necessária. Com um cateto conhecido e nenhuma hipotenusa à vista, o seno não tem onde se apoiar. Se seu lado conhecido é um cateto, a resposta envolve a tangente. Exemplo: b = 8 m, A = 35° precisa de a = 8·tan(35°), não de 8·sin(35°).",
          "3. Usar a fórmula errada da tangente. Encontrar o cateto oposto multiplica pela tangente; encontrar o cateto adjacente divide por ela. Memorize a direção: a = b·tan(A) expande a base até a altura, b = a/tan(A) reduz a altura de volta até a base.",
          "4. Digitar o ângulo na unidade errada. Um valor em radianos digitado como graus (ou vice-versa) produz lixo silenciosamente. Confirme os graus primeiro; esta calculadora trabalha em graus.",
          "5. Tratar a hipotenusa como um cateto comum. A hipotenusa só combina com seno e cosseno, nunca com a tangente. Se sua fórmula tem tan e uma hipotenusa, algo está nomeado errado.",
          "6. Usar o ângulo de referência errado. Os 65° do exemplo da escada são medidos a partir do chão. Medir a partir da parede, em vez disso, daria 25°, e cada razão mudaria. Sempre verifique de qual lado o ângulo se abre.",
          "7. Misturar metros, pés ou outras unidades. Uma hipotenusa em pés com resposta esperada em metros precisa de conversão antes ou depois, nunca pulada. Mantenha uma unidade em todo o cálculo.",
          "8. Arredondar valores intermediários cedo demais. Arredondar tan(35°) para 0.7 antes de multiplicar por 8 dá 5.6 por sorte aqui, mas um arredondamento mais grosseiro em outro lugar desvia a resposta. Mantenha a precisão total até o resultado final.",
          "9. Supor que o lado oposto a um ângulo é sempre o maior. O lado oposto só é o maior quando o ângulo passa de 45°. A 30°, o cateto oposto é o menor lado do triângulo.",
          "10. Usar trigonometria em um triângulo não retângulo. Sem um ângulo de 90°, seno, cosseno e tangente, como definidos aqui, não se aplicam. Triângulos obtusângulos e acutângulos precisam das Leis dos Senos e dos Cossenos.",
          "11. Digitar um ângulo fora do intervalo agudo. Ângulos de 0°, 90° ou mais colapsam o triângulo ou descrevem outra forma. A calculadora precisa de um ângulo estritamente entre 0° e 90°.",
          "12. Desconfiar de um resultado pequeno, mas correto. Uma rampa de 5° ao longo de 12 m sobe genuinamente apenas cerca de 1.05 m. Ângulos pequenos produzem lados opostos pequenos; isso é a geometria, não um erro."
        ]
      },
      "angle-validation": {
        "h2": "Verificando Se o Seu Resultado é Matematicamente Válido",
        "paragraphs": [
          "Os comprimentos dos lados devem ser números positivos; um comprimento zero ou negativo não descreve triângulo algum. Qualquer cateto que você calcular deve sair menor que a hipotenusa digitada. O ângulo de referência deve ser agudo, estritamente entre 0° e 90°, e todo comprimento do problema deve usar uma unidade.",
          "A tangente merece respeito extra perto das bordas do seu intervalo. À medida que o ângulo se aproxima de 90°, a tangente sobe de forma íngreme, então uma pequena oscilação no ângulo muda o resultado drasticamente. Perto de 0°, a tangente é minúscula, e dividi-la (o modo b = a/tan(A)) amplia qualquer ruído de medição da mesma forma. Quando seu ângulo está a poucos graus de um dos extremos, trate as entradas como aproximadas e a saída como sensível, não exata."
        ]
      },
      "angle-verify": {
        "h2": "Como Verificar Sua Resposta",
        "paragraphs": [
          "Método 1: Substitua de volta na razão. Divida sua resposta pelo lado conhecido e confirme que a razão coincide com o valor trigonométrico. Se você encontrou a = 5 a partir de c = 10 a 30°, verifique que 5/10 = 0.5 = sin(30°).",
          "Método 2: Use o teorema de Pitágoras. Quando você conhece dois lados após o cálculo, verifique que a² + b² = c². Isso cruza a trigonometria com a geometria pura.",
          "Método 3: Verifique os tamanhos relativos. Todo cateto deve ser menor que a hipotenusa. O cateto oposto ao maior ângulo agudo deve ser o cateto maior. A 30°, espere que o cateto oposto seja o menor.",
          "Verificação resolvida: a partir de c = 10 m e A = 30°, a calculadora dá a = 5 m. Encontre o outro cateto: b = 10·cos(30°) ≈ 8.66 m. Agora verifique Pitágoras com valores não arredondados:",
          "A igualdade se mantém, a hipotenusa é a maior, e 5 < 8.66 corresponde à geometria de 30°. Qualquer pequena diferença vem do arredondamento de 8.66, então verifique com valores não arredondados quando a precisão importar."
        ]
      },
      "angle-other": {
        "h2": "Escolhendo a Calculadora de Triângulo Retângulo Certa",
        "paragraphs": [
          "Dois lados conhecidos, sem ângulo: a Calculadora de Lados de Triângulo Retângulo aplica o teorema de Pitágoras diretamente.",
          "Ângulo desconhecido, lados conhecidos: a Calculadora de Ângulos de Triângulo Retângulo usa seno, cosseno ou tangente inversos.",
          "Área necessária: a Calculadora de Área de Triângulo Retângulo a calcula a partir dos catetos ou de outras entradas.",
          "Triângulos 30-60-90 ou 45-45-90: a Calculadora de Triângulos Retângulos Especiais explora suas razões exatas.",
          "Apenas os valores das razões: a Calculadora de Razões Trigonométricas avalia sen, cos e tan sem resolver lados.",
          "Tudo de uma vez: a Calculadora de Triângulo Retângulo resolve o triângulo completo, ângulos, área e propriedades derivadas a partir de quaisquer duas entradas válidas."
        ],
        "linkAnchors": [
          "Calculadora de Lados de Triângulo Retângulo",
          "Calculadora de Ângulos de Triângulo Retângulo",
          "Calculadora de Área de Triângulo Retângulo",
          "Calculadora de Triângulos Retângulos Especiais",
          "Calculadora de Razões Trigonométricas",
          "Calculadora de Triângulo Retângulo"
        ]
      },
      "angle-conclusion": {
        "h2": "Encontre o Lado Desconhecido Com a Fórmula Certa",
        "paragraphs": [
          "Comece nomeando: oposto, adjacente e hipotenusa em relação ao seu ângulo. Deixe o lado conhecido escolher a razão: hipotenusa em mãos significa seno ou cosseno, cateto em mãos significa tangente. Digite o ângulo em graus, mantenha a precisão total até o fim e verifique com Pitágoras ou uma rápida verificação de tamanho. Experimente a calculadora acima com seus próprios números."
        ]
      }
    },
    "faqs": [
      {
        "question": "Como encontrar um lado desconhecido usando um ângulo?",
        "answer": "Nomeie os lados em relação ao ângulo: oposto, adjacente, hipotenusa. Escolha a razão que contém o lado conhecido e o lado desconhecido. Com hipotenusa e ângulo, use a = c·sin(A) ou b = c·cos(A). Com um cateto e ângulo, use a = b·tan(A) ou b = a/tan(A). Substitua e calcule."
      },
      {
        "question": "Qual fórmula devo usar para o lado oposto?",
        "answer": "Depende do que você conhece. Com a hipotenusa, use a = c·sin(A). Com o cateto adjacente, use a = b·tan(A). Ambas dão o lado em frente ao ângulo A; o lado conhecido decide qual forma se aplica."
      },
      {
        "question": "Como encontrar o lado adjacente usando um ângulo?",
        "answer": "Com a hipotenusa conhecida, use b = c·cos(A). Com o cateto oposto conhecido, use b = a/tan(A). O cateto adjacente sempre corre ao lado do ângulo A, então confirme sua nomeação antes de escolher."
      },
      {
        "question": "Qual a diferença entre seno, cosseno e tangente?",
        "answer": "O seno relaciona oposto com hipotenusa, o cosseno relaciona adjacente com hipotenusa e a tangente relaciona oposto com adjacente. Seno e cosseno dividem um comprimento inclinado em partes; a tangente converte diretamente entre os dois catetos. As três descrevem o mesmo ângulo por lados diferentes."
      },
      {
        "question": "O que significa SOH-CAH-TOA?",
        "answer": "Um macete de memorização: Seno = Oposto/Hipotenusa, Cosseno = Adjacente/Hipotenusa, Tangente = Oposto/Adjacente. Ele lembra qual fração corresponde a cada razão depois que você nomeou os lados. Não substitui a etapa de nomeação."
      },
      {
        "question": "Posso encontrar um lado se conhecer a hipotenusa e um ângulo?",
        "answer": "Sim, este é o caso mais simples. Multiplique a hipotenusa por sin(A) para o cateto oposto ou por cos(A) para o cateto adjacente. Um ângulo mais a hipotenusa determina o triângulo inteiro."
      },
      {
        "question": "Posso encontrar um lado se conhecer um cateto e um ângulo?",
        "answer": "Sim, com a tangente. Se o cateto conhecido for adjacente, multiplique por tan(A) para obter o cateto oposto. Se o cateto conhecido for oposto, divida por tan(A) para obter o cateto adjacente. Não é preciso hipotenusa."
      },
      {
        "question": "Devo digitar os ângulos em graus ou radianos?",
        "answer": "Digite em graus. Esta calculadora interpreta as entradas de ângulo como graus, então 30 significa 30°. Um valor em radianos digitado como graus dá um resultado errado sem aviso. Converta radianos para graus primeiro multiplicando por 180/π."
      },
      {
        "question": "Por que a fórmula da tangente usa divisão em um modo?",
        "answer": "Porque a tangente é igual ao oposto dividido pelo adjacente. Resolver tan(A) = a/b para o cateto oposto dá multiplicação, a = b·tan(A). Resolver a mesma equação para o cateto adjacente dá divisão, b = a/tan(A). Uma relação, lida de dois jeitos."
      },
      {
        "question": "Dois triângulos diferentes podem ter o mesmo ângulo?",
        "answer": "Sim. O ângulo fixa a forma, mas não o tamanho, então um triângulo pequeno e um grande podem compartilhar todos os ângulos. Suas razões de lados coincidem exatamente; só a escala difere. Estes são triângulos semelhantes."
      },
      {
        "question": "Como verifico o lado calculado?",
        "answer": "Substitua de volta na razão, por exemplo verifique que a/c é igual a sin(A). Ou use Pitágoras: com dois lados conhecidos, confirme que a² + b² = c². Verifique também se cada cateto é menor que a hipotenusa e tem tamanho plausível para o ângulo."
      },
      {
        "question": "Por que resultados baseados em tangente podem ficar sensíveis perto de 90 graus?",
        "answer": "A tangente cresce sem limite à medida que o ângulo se aproxima de 90°, então uma mudança minúscula no ângulo produz uma grande mudança no resultado. Perto de 0°, o problema inverso aparece ao dividir por uma tangente minúscula. Mantenha precisão extra no ângulo para entradas perto de um dos extremos."
      }
    ],
    "relatedHeading": "Outras Calculadoras de Triângulo Retângulo que Podem Ser Úteis",
    "relatedIntro": "Depois de encontrar seu lado desconhecido, continue com estas calculadoras relacionadas para completar sua análise do triângulo.",
    "relatedItems": [
      "Calculadora de Triângulo Retângulo",
      "Calculadora de Lados de Triângulo Retângulo",
      "Calculadora de Ângulos de Triângulo Retângulo",
      "Calculadora de Razões Trigonométricas",
      "Calculadora de Área de Triângulo Retângulo",
      "Calculadora de Triângulos Retângulos Especiais"
    ]
  },

  "bn":   {
    "tocHeading": "এই নির্দেশিকায়",
    "tocItems": {
      "angle-intro": "কোণ ব্যবহার করে বাহু নির্ণয় পদ্ধতি",
      "angle-anatomy": "বাহু ও কোণ বোঝা",
      "angle-trig": "সাইন, কোসাইন ও ট্যানজেন্ট",
      "angle-modes": "ক্যালকুলেটরের চারটি মোড",
      "angle-examples": "বাস্তব জীবনের উদাহরণ",
      "angle-effect": "কোণ কীভাবে বাহুর দৈর্ঘ্য বদলায়",
      "angle-degrees": "ডিগ্রি ও ক্যালকুলেটর সেটিং",
      "angle-howto": "ক্যালকুলেটর ব্যবহার পদ্ধতি",
      "angle-mistakes": "সাধারণ ভুল",
      "angle-validation": "ইনপুট যাচাইকরণ",
      "angle-verify": "উত্তর যাচাই করা",
      "angle-other": "কখন অন্য ক্যালকুলেটর ব্যবহার করবেন",
      "angle-related": "সম্পর্কিত ক্যালকুলেটর",
      "angle-faq": "সচরাচর জিজ্ঞাসিত প্রশ্ন"
    },
    "sections": {
      "angle-intro": {
        "h2": "কোণ ব্যবহার করে সমকোণী ত্রিভুজের বাহু নির্ণয় পদ্ধতি",
        "paragraphs": [
          "একটি মই দেওয়ালের গায়ে হেলানো অবস্থায় কল্পনা করুন। আপনি জানেন মইটি 5 মিটার লম্বা এবং মাটির সঙ্গে এটি 65 ডিগ্রি কোণে আছে, কিন্তু এটি কত উঁচু পর্যন্ত পৌঁছায়? একটি সমকোণী ত্রিভুজ বাহু নির্ণয় ক্যালকুলেটর ঠিক এই ধরনের প্রশ্নের উত্তর দেয়: আপনি একটি সূক্ষ্মকোণ ও একটি বাহুর দৈর্ঘ্য জানলে এটি অনুপস্থিত বাহুটি বের করে দেয়। একটি বাহু ও একটি কোণই যথেষ্ট, কারণ ত্রিকোণমিতি ত্রিভুজের আকৃতি সম্পূর্ণভাবে নির্ধারণ করে দেয়। তিনটি অনুপাত, সাইন, কোসাইন ও ট্যানজেন্ট, প্রত্যেকে কোণটিকে ভিন্ন জোড়া বাহুর সঙ্গে যুক্ত করে। সাইন বিপরীত বাহুকে অতিভুজের সঙ্গে যুক্ত করে, কোসাইন সন্নিহিত বাহুকে অতিভুজের সঙ্গে যুক্ত করে, আর ট্যানজেন্ট দুটি বাহুকে সরাসরি যুক্ত করে। এই পাতায় ব্যাখ্যা করা হয়েছে আপনার পরিস্থিতিতে কোন অনুপাতটি মানানসই, কেন এটি কাজ করে, এবং উপরের ক্যালকুলেটরটি কীভাবে ব্যবহার করবেন। পিথাগোরাস উপপাদ্য ক্যালকুলেটরের বিপরীতে, যার জন্য দুটি পরিচিত বাহু দরকার, এই টুলটি একটি বাহু ও একটি কোণ থেকে কাজ করে।"
        ]
      },
      "angle-anatomy": {
        "h2": "সমকোণী ত্রিভুজের বাহু ও কোণ বোঝা",
        "h3s": [
          "সমকোণী ত্রিভুজ কী?",
          "অতিভুজ কী?",
          "বিপরীত ও সন্নিহিত বাহু কী?"
        ],
        "paragraphs": [
          "একটি সমকোণী ত্রিভুজে একটি কোণ থাকে ঠিক 90 ডিগ্রির, কাগজের পাতার কোণার মতো। বাকি দুটি কোণ সূক্ষ্মকোণ, প্রতিটি 90 ডিগ্রির চেয়ে ছোট, এবং তাদের যোগফল সবসময় 90 ডিগ্রি, কারণ যেকোনো ত্রিভুজের তিনটি কোণের মোট যোগফল 180। এই নির্দেশিকার ত্রিকোণমিতি শুধু সমকোণী ত্রিভুজে প্রযোজ্য: সাইন, কোসাইন ও ট্যানজেন্ট অনুপাত সমকোণের মাধ্যমে সংজ্ঞায়িত, তাই 90 ডিগ্রি কোণ নেই এমন ত্রিভুজে এগুলো ব্যবহার করলে ভুল উত্তর আসবে।",
          "অতিভুজ সমকোণের বিপরীতে অবস্থান করে এবং তিনটি বাহুর মধ্যে সবসময় সবচেয়ে লম্বা। প্রচলন অনুযায়ী এটি [[c]] নাম পায়। ঘোরানো চিত্রে এটি চিনতে, সমকোণ চিহ্ন স্পর্শ করে না এমন বাহুটি খুঁজুন। ত্রিভুজ যেভাবেই ঘোরানো হোক না কেন, অতিভুজ বর্গাকার কোণার বিপরীতেই থাকে।",
          "একটি সূক্ষ্মকোণ বেছে নিয়ে এর নাম দিন [[A]]। [[A]] এর বিপরীতে থাকা বাহুটি বিপরীত বাহু, এর নাম [[a]]। অতিভুজের সঙ্গে মিলে [[A]] গঠন করে যে বাহুটি, সেটি সন্নিহিত বাহু, এর নাম [[b]]। নতুনদের জন্য বিভ্রান্তিকর অংশটি এখানেই: এই নামগুলো নির্ভর করে আপনি কোন কোণটি বেছে নিয়েছেন। কোণ [[A]] এর ক্ষেত্রে যে বাহুটি বিপরীত, আপনি [[B]] কোণকে রেফারেন্স হিসেবে নিলে সেই একই বাহু সন্নিহিত হয়ে যায়। অতিভুজ কখনো তার ভূমিকা বদলায় না। এই নির্দেশিকা জুড়ে, [[a]] হলো [[A]] এর বিপরীতে, [[b]] হলো [[A]] এর সন্নিহিত, এবং [[c]] হলো অতিভুজ।"
        ],
        "imgAlt": "নিচের বামে A কোণসহ সমকোণী ত্রিভুজ, A এর বিপরীতে বাহু a, A এর সন্নিহিত বাহু b, অতিভুজ c",
        "figcaption": "A কোণের সাপেক্ষে গঠন: বাহু a হলো A এর বিপরীতে, বাহু b হলো A এর সন্নিহিত, এবং c হলো অতিভুজ। A + B = 90°।"
      },
      "angle-trig": {
        "h2": "সাইন, কোসাইন ও ট্যানজেন্ট কীভাবে অনুপস্থিত বাহু বের করতে সাহায্য করে",
        "h3s": [
          "সাইন বোঝা",
          "কোসাইন বোঝা",
          "ট্যানজেন্ট বোঝা",
          "SOH-CAH-TOA অর্থ কী?"
        ],
        "paragraphs": [
          "ত্রিকোণমিতিক অনুপাত হলো একটি নির্দিষ্ট কোণের জন্য সমকোণী ত্রিভুজের দুটি বাহুর মধ্যে একটি স্থির সম্পর্ক। কোণ বদলালে অনুপাত বদলায়; কোণ একই থাকলে সেই কোণবিশিষ্ট প্রতিটি ত্রিভুজের অনুপাত একই হয়, তার আকার যাই হোক। এজন্যই একটি কোণ ও একটি বাহু জানা থাকলে বাকি সবকিছু নির্ধারণ হয়ে যায়। তিনটি অনুপাতের প্রত্যেকে কোণটিকে বাহুর ভিন্ন সংমিশ্রণের সঙ্গে জোড়া লাগায়, তাই আপনি কোন বাহুটি জানেন তার ওপর নির্ভর করে কোন অনুপাতটি নেবেন।",
          "সাইন বিপরীত বাহুর সঙ্গে অতিভুজের তুলনা করে: [[\\sin(A) = \\frac{a}{c}]]। অনুপস্থিত বাহুটি বের করতে উভয় পক্ষকে [[c]] দিয়ে গুণ করুন। ডান পাশের [[c]] বাতিল হয়ে যায়, পড়ে থাকে [[a = c\\sin(A)]]। কথায়: বিপরীত বাহু সমান অতিভুজের গুণিতক, কোণের সাইন দিয়ে গুণ করা। বড় কোণে সাইনের মান বড় হয়, তাই কোণ খুলে গেলে বিপরীত বাহু বাড়ে।",
          "কোসাইন সন্নিহিত বাহুর সঙ্গে অতিভুজের তুলনা করে: [[\\cos(A) = \\frac{b}{c}]]। উভয় পক্ষকে [[c]] দিয়ে গুণ করলে পাবেন [[b = c\\cos(A)]]। সন্নিহিত বাহু সমান কোণের কোসাইন দিয়ে গুণ করা অতিভুজ। কোণ [[A]] 90 ডিগ্রির দিকে বাড়লে সন্নিহিত বাহু শূন্যের দিকে কমে, যা জ্যামিতির সঙ্গে মেলে: কোণ বাড়লে সন্নিহিত বাহুটি চাপা পড়ে।",
          "ট্যানজেন্ট দুটি বাহুর সরাসরি তুলনা করে: [[\\tan(A) = \\frac{a}{b}]]। উভয়ভাবে সাজালে পাওয়া যায় [[a = b\\tan(A)]] ও [[b = \\frac{a}{\\tan(A)}]]। পরিচিত বাহুটি সন্নিহিত হলে এবং বিপরীত বাহু চাইলে গুণ ব্যবহার করুন: সন্নিহিত বাহুকে ট্যানজেন্ট দিয়ে গুণ করে বিপরীত বাহুতে পরিণত করা হয়। পরিচিত বাহুটি বিপরীত হলে এবং সন্নিহিত বাহু চাইলে ভাগ ব্যবহার করুন: আপনি জিজ্ঞেস করছেন বিপরীত বাহুতে ট্যানজেন্ট আকারের কতগুলো টুকরা আটে। দুটি রূপ একই সম্পর্কের বিপরীতমুখী পাঠ।",
          "SOH-CAH-TOA একটি স্মৃতিসহায়ক, বাহু সঠিকভাবে চেনার বিকল্প নয়। SOH: Sine = Opposite / Hypotenuse। CAH: Cosine = Adjacent / Hypotenuse। TOA: Tangent = Opposite / Adjacent। বাহুগুলোকে বিপরীত, সন্নিহিত ও অতিভুজ হিসেবে নাম দেওয়ার পর এটি কোন অনুপাতটি নেবেন তা বেছে নিতে সাহায্য করে। সবসময় আগে বাহুগুলোর নাম দিন; এরপর কোন ভগ্নাংশটি লিখবেন তা এই স্মৃতিসূত্র বলে দেয়।"
        ],
        "imgAlt": "একই সমকোণী ত্রিভুজে সাইন, কোসাইন ও ট্যানজেন্ট অনুপাত দেখানো তিনটি প্যানেল",
        "figcaption": "একটি ত্রিভুজে SOH-CAH-TOA: সাইন বিপরীত বাহু ও অতিভুজ ব্যবহার করে, কোসাইন সন্নিহিত বাহু ও অতিভুজ ব্যবহার করে, ট্যানজেন্ট দুটি বাহু ব্যবহার করে।"
      },
      "angle-modes": {
        "h2": "সঠিক ক্যালকুলেটর মোড বেছে নেওয়ার পদ্ধতি",
        "paragraphs": [
          "সঠিক মোড নির্ভর করে দুটি তথ্যের ওপর: আপনি কোন বাহুর দৈর্ঘ্য ইতিমধ্যে জানেন, এবং কোন বাহুটি অনুপস্থিত। নিচের সারণিতে আপনার পরিস্থিতি খুঁজুন, তারপর নিচে মিলে যাওয়া সমাধানসহ উদাহরণটি পড়ুন।"
        ],
        "h3s": [
          "মোড 1: সাইন ব্যবহার করে বাহু a নির্ণয়",
          "মোড 2: কোসাইন ব্যবহার করে বাহু b নির্ণয়",
          "মোড 3: ট্যানজেন্ট ব্যবহার করে বাহু a নির্ণয়",
          "মোড 4: ট্যানজেন্ট ব্যবহার করে বাহু b নির্ণয়"
        ],
        "modeParagraphs": [
          "অতিভুজ জানা থাকলে এবং কোণের বিপরীত বাহুটি দরকার হলে এই মোডটি বেছে নিন। নিশ্চিত করুন পরিচিত বাহুটি সমকোণের বিপরীতে অবস্থিত, এবং আপনার কোণটি সেই সূক্ষ্মকোণ যার মুখোমুখি বিপরীত বাহুটি। সাইনই সঠিক অনুপাত, কারণ এটি সরাসরি বিপরীত বাহু ও অতিভুজকে যুক্ত করে। অতিভুজের দৈর্ঘ্য ও ডিগ্রিতে কোণটি লিখুন। ফলাফল হবে বিপরীত বাহু।",
          "অতিভুজ জানা থাকলে এবং কোণের সন্নিহিত বাহুটি দরকার হলে এই মোডটি বেছে নিন। কোসাইন সন্নিহিত বাহু ও অতিভুজকে যুক্ত করে, তাই এটি ঢালু দৈর্ঘ্যকে কোণের পাশাপাশি চলা বাহুতে রূপান্তর করে। সন্নিহিত বাহু সবসময় অতিভুজের চেয়ে ছোট, কারণ সূক্ষ্মকোণের কোসাইন সবসময় 1 এর চেয়ে কম।",
          "সন্নিহিত বাহু জানা থাকলে এবং বিপরীত বাহুটি দরকার হলে এই মোডটি বেছে নিন। এটি চিরায়ত দূরত্ব ও উন্নতি কোণ পরিস্থিতি: আপনি পরিচিত অনুভূমিক দূরত্বে দাঁড়িয়ে আছেন এবং উচ্চতা জানতে চান। ট্যানজেন্ট সন্নিহিত বাহুকে বড় বা ছোট করে বিপরীত বাহুতে পরিণত করে। কোণটি অনুপাত নিয়ন্ত্রণ করে, তাই একই ভূমির জন্য খাড়া কোণ মানে লম্বা বিপরীত বাহু।",
          "বিপরীত বাহু জানা থাকলে এবং সন্নিহিত বাহুটি দরকার হলে এই মোডটি বেছে নিন। এটি উত্থান নির্দিষ্ট, ভূমি কতদূর বাড়াতে হবে ধরনের প্রশ্নের উত্তর দেয়। ট্যানজেন্ট দিয়ে ভাগ করলে মোড 3 এর গুণন উল্টে যায়: ভূমিকে উচ্চতায় প্রসারিত করার বদলে উচ্চতাকে সংকুচিত করে ভূমিতে ফিরিয়ে আনা হয়।"
        ],
        "modeExamples": [
          "সমাধানসহ উদাহরণ: দেওয়া আছে [[c = 10\\text{ m}]] ও [[A = 30^\\circ]], বাহু [[a]] নির্ণয় করুন।",
          "সমাধানসহ উদাহরণ: দেওয়া আছে [[c = 12\\text{ ft}]] ও [[A = 60^\\circ]], বাহু [[b]] নির্ণয় করুন।",
          "সমাধানসহ উদাহরণ: দেওয়া আছে [[b = 8\\text{ m}]] ও [[A = 35^\\circ]], বাহু [[a]] নির্ণয় করুন।",
          "সমাধানসহ উদাহরণ: দেওয়া আছে [[a = 4\\text{ m}]] ও [[A = 40^\\circ]], বাহু [[b]] নির্ণয় করুন।"
        ],
        "modeNotes": [
          "উত্তরটি যুক্তিসংগত: 30 ডিগ্রিতে বিপরীত বাহু অতিভুজের ঠিক অর্ধেক, মানসিকভাবে যাচাই করার জন্য এটি একটি কাজের কৌশল।",
          "60 ডিগ্রিতে সন্নিহিত বাহু অতিভুজের অর্ধেক, 30 ডিগ্রির সাইন ক্ষেত্রের প্রতিবিম্ব। দুটি সূক্ষ্মকোণ ভূমিকা বদলায়: 60° এর সন্নিহিত বাহু 30° এর বিপরীত।",
          "35° যেহেতু 45° এর নিচে, বিপরীত বাহু সন্নিহিত বাহুর চেয়ে ছোট আসে, যা জ্যামিতির সঙ্গে মেলে।",
          "40° এ, 45° এর ঠিক নিচে, সন্নিহিত বাহু বিপরীত বাহুর চেয়ে সামান্য লম্বা। এই ছোট পার্থক্যটিই ভাগটি ধরে।"
        ],
        "table": {
          "headers": [
            "পরিচিত বাহু",
            "পরিচিত কোণ",
            "অনুপস্থিত বাহু",
            "সূত্র",
            "ক্যালকুলেটর মোড",
            "কখন ব্যবহার করবেন"
          ],
          "rows": [
            [
              "অতিভুজ c",
              "A",
              "বাহু a",
              "a = c × sin(A)",
              "সাইন দিয়ে বাহু a",
              "ঢালু দৈর্ঘ্য জানা, কোণের বিপরীত বাহুটি দরকার"
            ],
            [
              "অতিভুজ c",
              "A",
              "বাহু b",
              "b = c × cos(A)",
              "কোসাইন দিয়ে বাহু b",
              "ঢালু দৈর্ঘ্য জানা, কোণের পাশের বাহুটি দরকার"
            ],
            [
              "বাহু b",
              "A",
              "বাহু a",
              "a = b × tan(A)",
              "ট্যানজেন্ট দিয়ে বাহু a",
              "অনুভূমিক দূরত্ব জানা, উল্লম্ব উত্থান দরকার"
            ],
            [
              "বাহু a",
              "A",
              "বাহু b",
              "b = a / tan(A)",
              "ট্যানজেন্ট দিয়ে বাহু b",
              "উল্লম্ব উত্থান জানা, অনুভূমিক দূরত্ব দরকার"
            ]
          ]
        },
        "imgAlt": "সাইন, কোসাইন ও দুটি ট্যানজেন্ট ক্যালকুলেটর মোডের সমাধান মানসহ তুলনা দেখানো চারটি প্যানেল",
        "figcaption": "চারটি মোড পাশাপাশি: সাইন ও কোসাইন অতিভুজ থেকে শুরু করে, ট্যানজেন্ট মোড দুটি বাহুর মধ্যে রূপান্তর করে।"
      },
      "angle-examples": {
        "h2": "কোণ ব্যবহার করে সমকোণী ত্রিভুজের বাহু নির্ণয়ের বাস্তব জীবনের উদাহরণ",
        "intro": "নিচের প্রতিটি উদাহরণ একই পথ অনুসরণ করে: সমকোণী ত্রিভুজটি চিনুন, পরিচিত বাহু ও কোণের নাম দিন, অনুপস্থিত বাহুর সঙ্গে এগুলোকে যুক্ত করে এমন অনুপাতটি বেছে নিন, মান বসিয়ে হিসাব করুন, এবং প্রসঙ্গে উত্তরটি পড়ুন। লক্ষ্য করুন সাইন, কোসাইন বা ট্যানজেন্টের পছন্দ প্রতিবার জ্যামিতি থেকেই বেরিয়ে আসে।",
        "examples": [
          {
            "h3": "উদাহরণ 1: মই কত উঁচুতে পৌঁছায় তা নির্ণয়",
            "paragraphs": [
              "একটি 5 m মই উল্লম্ব দেওয়ালের গায়ে হেলানো, সমতল মাটির সঙ্গে 65 ডিগ্রি কোণ তৈরি করে। দেওয়াল, মাটি ও মই একটি সমকোণী ত্রিভুজ গঠন করে, যেখানে মইটি অতিভুজ। পরিচিত: [[c = 5\\text{ m}]], [[A = 65^\\circ]]। অনুপস্থিত উচ্চতা 65° কোণের বিপরীতে, তাই সাইন মানানসই: এই অনুপাত বিপরীত বাহু ও অতিভুজকে যুক্ত করে।",
              "মইটি দেওয়াল বেয়ে প্রায় 4.53 m উঁচুতে পৌঁছায়। দেওয়াল থেকে অনুভূমিক দূরত্ব কোসাইন থেকে আসে, কারণ সেই বাহুটি কোণের সন্নিহিত:",
              "একটি অতিভুজ ও একটি কোণ দুটি বাহুই দিয়েছে। মনে রাখবেন এটি শুধু জ্যামিতিক হিসাব; মইয়ের সেটআপ নিরাপদ কিনা তা এটি বলে না, তাই বাস্তব ব্যবহারে প্রস্তুতকারকের নির্দেশনা মেনে চলুন।"
            ]
          },
          {
            "h3": "উদাহরণ 2: র‌্যাম্পের উত্থান হিসাব",
            "paragraphs": [
              "একটি সরলীকৃত র‌্যাম্প অনুভূমিকভাবে 12 m চলে এবং অনুভূমিকের ওপরে 5 ডিগ্রিতে ওঠে। চলন ও উত্থান একটি সমকোণী ত্রিভুজের বাহু, যেখানে চলনটি 5° কোণের সন্নিহিত। পরিচিত: [[b = 12\\text{ m}]], [[A = 5^\\circ]]। অনুপস্থিত উত্থানটি বিপরীত বাহু, এবং ট্যানজেন্ট বিপরীতকে সন্নিহিতের সঙ্গে যুক্ত করে।",
              "র‌্যাম্পটি তার 12 m চলনে প্রায় 1.05 m ওঠে। অনুভূমিক চলন ও ঢালু পৃষ্ঠকে আলাদা রাখুন: ঢালটি 12 m এর চেয়ে সামান্য লম্বা। এই ফলাফল র‌্যাম্পটিকে প্রবেশযোগ্যতা বা নির্মাণ বিধির অনুমোদন দেয় না।"
            ]
          },
          {
            "h3": "উদাহরণ 3: ছাদের উল্লম্ব উত্থান নির্ণয়",
            "paragraphs": [
              "একটি ছাদের প্রস্থচ্ছেদে অনুভূমিক চলন 4.5 m, ছাদের পৃষ্ঠ অনুভূমিকের ওপরে 30 ডিগ্রি কোণে। চলনটি কোণের সন্নিহিত এবং উত্থানটি বিপরীত, তাই ট্যানজেন্ট স্বাভাবিক পছন্দ।",
              "ছাদটি প্রায় 2.60 m ওঠে। খাড়া ঢাল ট্যানজেন্টের মান বাড়ায় এবং তার সঙ্গে উত্থানও বাড়ে, এজন্যই ছাদের কোণ সরাসরি অ্যাটিকের উচ্চতা নির্ধারণ করে। এই সরলীকৃত স্কেচে ওভারহ্যাং, রিজ বোর্ড ও ফ্রেমিং ছাড় বাদ পড়েছে, যা বাস্তব নির্মাণে দরকার।"
            ]
          },
          {
            "h3": "উদাহরণ 4: তারের উল্লম্ব পৌঁছানো পরিমাপ",
            "paragraphs": [
              "একটি 20 m তার মাটি থেকে খুঁটির শীর্ষ পর্যন্ত টানা, অনুভূমিকের সঙ্গে 55 ডিগ্রি কোণ তৈরি করে। তারটি অতিভুজ। সাইন দেয় উল্লম্ব পৌঁছানো (কোণের বিপরীতে) এবং কোসাইন দেয় অনুভূমিক পৌঁছানো (কোণের সন্নিহিত), তাই একটি সেটআপেই দুটি বাহু পাওয়া যায়।",
              "তারটি উল্লম্বভাবে প্রায় 16.38 m পৌঁছায় এবং অনুভূমিকভাবে 11.47 m বিস্তৃত। সাইন ও কোসাইনকে এভাবে জোড়া লাগানো যেকোনো ঢালু দৈর্ঘ্যকে উল্লম্ব ও অনুভূমিক অংশে ভাগ করার প্রমিত পদ্ধতি।"
            ]
          },
          {
            "h3": "উদাহরণ 5: দৃষ্টিরেখা থেকে উচ্চতা অনুমান",
            "paragraphs": [
              "একটি সরলীকৃত দৃষ্টিরেখা 150 m, অনুভূমিক রেফারেন্সের ওপরে 12 ডিগ্রি হেলে। দৃষ্টিরেখাটিকে সমকোণী ত্রিভুজের অতিভুজ ধরলে সাইন উল্লম্ব পার্থক্য বের করে এবং কোসাইন অনুভূমিক দূরত্ব।",
              "দূরের বিন্দুটি রেফারেন্স স্তরের প্রায় 31.19 m ওপরে এবং অনুভূমিকভাবে 146.72 m দূরে। বাস্তব জরিপে ভূমি, যন্ত্রের উচ্চতা ও বায়ুমণ্ডলীয় প্রভাবের সংশোধন যোগ হতো; এটি নিচের কাঁচা জ্যামিতি।"
            ]
          },
          {
            "h3": "উদাহরণ 6: গাছের উচ্চতা অনুমান",
            "paragraphs": [
              "আপনি সমতল মাটিতে গাছের গুঁড়ি থেকে অনুভূমিকভাবে 25 m দূরে দাঁড়িয়ে আছেন, এবং গাছের শীর্ষের উন্নতি কোণ 38 ডিগ্রি। অনুভূমিক দূরত্ব সন্নিহিত বাহু এবং আপনার চোখের রেফারেন্সের ওপরে গাছের উচ্চতা বিপরীত বাহু, তাই ট্যানজেন্ট এদের সেতু করে।",
              "গাছের শীর্ষ পর্যবেক্ষণ স্তরের প্রায় 19.53 m ওপরে। চোখের উচ্চতা থেকে নয় বরং মাটি থেকে মেপে থাকলে পূর্ণ গাছের উচ্চতা পেতে আপনার চোখের উচ্চতা যোগ করুন। পদ্ধতিটি ধরে নেয় আপনার ও গুঁড়ির মধ্যে মাটি সমতল।"
            ]
          },
          {
            "h3": "উদাহরণ 7: যান্ত্রিক ব্রেসের অফসেট হিসাব",
            "paragraphs": [
              "একটি ব্রেস ডিজাইনে অনুভূমিক বাহু 600 mm, অনুভূমিক থেকে 25 ডিগ্রিতে উল্লম্বের সঙ্গে মিলিত হয়। অনুভূমিক অংশটি কোণের সন্নিহিত; আপনার দরকারি উল্লম্ব অফসেট এর বিপরীতে।",
              "উল্লম্ব অফসেট প্রায় 279.78 mm। একই অনুভূমিক দৈর্ঘ্য কোণ বাড়লে লম্বা অফসেট দেয়, এজন্যই আঁটসাঁট যান্ত্রিক ফিটে ছোট কোণ পরিবর্তন গুরুত্বপূর্ণ। এই মাত্রা একাই প্রমাণ করে না ব্রেসটি কাঠামোগতভাবে পর্যাপ্ত।"
            ]
          },
          {
            "h3": "উদাহরণ 8: অতিভুজ থেকে বিপরীত বাহু নির্ণয়",
            "paragraphs": [
              "একটি সমকোণী ত্রিভুজের অতিভুজ 8 m, সূক্ষ্মকোণ 42 ডিগ্রি। কোণের বিপরীত বাহুটি অজানা। যেহেতু অতিভুজ ও বিপরীত বাহু সাইন জোড়া, একটি গুণনেই শেষ।",
              "বিপরীত বাহু প্রায় 5.35 m। সাইন সবসময় অতিভুজের পরিমাপকে কোণের মুখোমুখি বাহুতে রূপান্তর করে, পুনর্বিন্যাস ছাড়াই।"
            ]
          },
          {
            "h3": "উদাহরণ 9: উল্লম্ব পরিমাপ থেকে অনুভূমিক দূরত্ব নির্ণয়",
            "paragraphs": [
              "একটি সমকোণী ত্রিভুজের বিপরীত বাহু 3.2 m এবং কোণ 28 ডিগ্রি। সন্নিহিত বাহু অজানা। ট্যানজেন্ট সমান বিপরীত ভাগ সন্নিহিত, তাই সন্নিহিত বাহু বের করতে পরিচিত বিপরীত বাহুকে ট্যানজেন্ট দিয়ে ভাগ করতে হবে।",
              "অনুভূমিক দূরত্ব প্রায় 6.02 m। পরিচিত বাহু যখনই অনুপাতের লবে থাকে, অজানা বাহুকে বিচ্ছিন্ন করতে ভাগই উপায়।"
            ]
          },
          {
            "h3": "উদাহরণ 10: ভবনের উল্লম্ব অফসেট অনুমান",
            "paragraphs": [
              "একটি সরলীকৃত পর্যবেক্ষণ রেখা 80 ft, অনুভূমিকের ওপরে 25 ডিগ্রি হেলে। রেখাটি অতিভুজ এবং উল্লম্ব উপাদানটি কোণের বিপরীতে, সাইন দরকার।",
              "উল্লম্ব উপাদান প্রায় 33.81 ft। বড় কোণ 80 ft এর বেশি অংশকে উল্লম্বে ঠেলে দিত এবং অনুভূমিকে কম রাখত। এটিকে মোটামুটি জ্যামিতিক অনুমান হিসেবে ধরুন, সঠিক ভবন জরিপের বিকল্প নয়।"
            ]
          },
          {
            "h3": "উদাহরণ 11: ঢালু পথের উত্থান হিসাব",
            "paragraphs": [
              "একটি পথ অনুভূমিকভাবে 6 m চলে 8 ডিগ্রি ঢালে। চলন কোণের সন্নিহিত এবং উত্থান বিপরীত, তাই ট্যানজেন্ট সরাসরি প্রযোজ্য।",
              "পথটি প্রায় 0.84 m ওঠে। উত্থান চলন ও কোণের ট্যানজেন্ট উভয়ের সঙ্গে বাড়ে, তাই নির্দিষ্ট কোণে চলন দ্বিগুণ করলে উত্থান দ্বিগুণ হয়। ঢালের সম্মতির জন্য স্থানীয় বিধি আলাদাভাবে দেখুন।"
            ]
          },
          {
            "h3": "উদাহরণ 12: পরিচিত উত্থান থেকে অনুভূমিক অফসেট নির্ণয়",
            "paragraphs": [
              "একটি কাঠামোর উল্লম্ব অফসেট 2 m, এবং এর কর্ণ অনুভূমিকের সঙ্গে 35 ডিগ্রি কোণ করে। উল্লম্ব বাহু কোণের বিপরীতে এবং অনুভূমিক অফসেট সন্নিহিত, তাই ট্যানজেন্টকে ভাগ করে বের করতে হবে।",
              "অনুভূমিক অফসেট প্রায় 2.86 m। উত্থান ও কোণ জানা থাকলে ভূমি সম্পূর্ণ নির্ধারিত হয়, উচ্চতা সীমা থেকে সেটব্যাক দূরত্ব এভাবেই বের করা হয়।"
            ]
          }
        ],
        "table": {
          "headers": [
            "পরিস্থিতি",
            "পরিচিত বাহু",
            "পরিচিত কোণ",
            "অনুপাত",
            "গণনাকৃত বাহু"
          ],
          "rows": [
            [
              "মইয়ের উচ্চতা",
              "c = 5 m",
              "65°",
              "সাইন",
              "a ≈ 4.53 m"
            ],
            [
              "র‌্যাম্পের উত্থান",
              "b = 12 m",
              "5°",
              "ট্যানজেন্ট",
              "a ≈ 1.05 m"
            ],
            [
              "ছাদের উত্থান",
              "b = 4.5 m",
              "30°",
              "ট্যানজেন্ট",
              "a ≈ 2.60 m"
            ],
            [
              "তারের পৌঁছানো",
              "c = 20 m",
              "55°",
              "সাইন / কোসাইন",
              "a ≈ 16.38 m, b ≈ 11.47 m"
            ],
            [
              "দৃষ্টিরেখা",
              "c = 150 m",
              "12°",
              "সাইন / কোসাইন",
              "a ≈ 31.19 m, b ≈ 146.72 m"
            ],
            [
              "গাছের উচ্চতা",
              "b = 25 m",
              "38°",
              "ট্যানজেন্ট",
              "a ≈ 19.53 m"
            ],
            [
              "ব্রেস অফসেট",
              "b = 600 mm",
              "25°",
              "ট্যানজেন্ট",
              "a ≈ 279.78 mm"
            ],
            [
              "অতিভুজ থেকে বিপরীত বাহু",
              "c = 8 m",
              "42°",
              "সাইন",
              "a ≈ 5.35 m"
            ],
            [
              "বিপরীত থেকে সন্নিহিত",
              "a = 3.2 m",
              "28°",
              "ট্যানজেন্ট",
              "b ≈ 6.02 m"
            ],
            [
              "ভবন অফসেট",
              "c = 80 ft",
              "25°",
              "সাইন",
              "a ≈ 33.81 ft"
            ],
            [
              "পথের উত্থান",
              "b = 6 m",
              "8°",
              "ট্যানজেন্ট",
              "a ≈ 0.84 m"
            ],
            [
              "উত্থান থেকে অনুভূমিক",
              "a = 2 m",
              "35°",
              "ট্যানজেন্ট",
              "b ≈ 2.86 m"
            ]
          ]
        },
        "imgAlt": "চারটি প্যানেল: ত্রিকোণমিতি দিয়ে সমাধান করা মইয়ের উচ্চতা, র‌্যাম্পের উত্থান, ছাদের উত্থান ও গাছের উচ্চতা",
        "figcaption": "কাজে ত্রিকোণমিতি: একটি বাহু ও একটি কোণ থেকে মই (4.53 m), র‌্যাম্প (1.05 m), ছাদ (2.60 m) ও গাছের (19.53 m) উচ্চতা।"
      },
      "angle-effect": {
        "h2": "কোণ কীভাবে অনুপস্থিত বাহুকে প্রভাবিত করে",
        "paragraphs": [
          "অতিভুজ স্থির রেখে কোণ বাড়ান: বিপরীত বাহু প্রসারিত হয় আর সন্নিহিত বাহু সংকুচিত হয়। কোণটি ডায়ালের মতো কাজ করে, অতিভুজকে দুটি বাহুর মধ্যে ভাগ করে। 0 ডিগ্রিতে বিপরীত বাহু বিলীন হয় এবং সন্নিহিত বাহু পুরো অতিভুজের সমান হয়; 90 ডিগ্রিতে উল্টো ঘটে। ট্যানজেন্ট আরও নাটকীয় আচরণ করে কারণ একে নোঙর করার অতিভুজ নেই: কোণ 90 ডিগ্রির কাছাকাছি গেলে বিপরীত বাহু সংকুচিত সন্নিহিত বাহুর ওপর মাথা তোলে এবং ট্যানজেন্ট সীমাহীন বাড়ে।",
          "দুটি ত্রিভুজ একই সূক্ষ্মকোণ ভাগ করতে পারে অথচ আকারে সম্পূর্ণ ভিন্ন। কোণটি আকৃতি নির্ধারণ করে, অর্থাৎ সব অনুরূপ বাহুর অনুপাত মেলে, আর অতিভুজ স্কেল নির্ধারণ করে। এমন ত্রিভুজ সদৃশ: 65° এ 5 m মই ও 65° এ 10 m মই ঠিক 1:2 অনুপাতে উচ্চতায় পৌঁছায়। নিচের সারণি 10 একক অতিভুজের জন্য এই ডায়াল প্রভাব দেখায়।",
          "45° এ বাহু দুটি ঠিক ভারসাম্য করে এবং ট্যানজেন্ট 1 এর সমান হয়। প্রতিসাম্যটি লক্ষ্য করুন: 30° এর সারি 60° এর সারিকে বাহু অদলবদল করে প্রতিফলিত করে, কারণ 30° এর বিপরীত বাহু 60° এর সন্নিহিত।"
        ],
        "table": {
          "headers": [
            "কোণ A",
            "বিপরীত বাহু a = 10 × sin(A)",
            "সন্নিহিত বাহু b = 10 × cos(A)",
            "tan(A) = a / b"
          ],
          "rows": [
            [
              "30°",
              "≈ 5.00",
              "≈ 8.66",
              "≈ 0.577"
            ],
            [
              "45°",
              "≈ 7.07",
              "≈ 7.07",
              "≈ 1.000"
            ],
            [
              "60°",
              "≈ 8.66",
              "≈ 5.00",
              "≈ 1.732"
            ]
          ]
        }
      },
      "angle-degrees": {
        "h2": "সঠিক কোণ সেটিং কেন গুরুত্বপূর্ণ",
        "paragraphs": [
          "কোণ ডিগ্রি বা রেডিয়ানে মাপা যায়, এবং দুটি স্কেল একটি সংখ্যার অর্থ নিয়ে সম্পূর্ণ দ্বিমত পোষণ করে। পূর্ণ বৃত্ত 360 ডিগ্রি কিন্তু মাত্র প্রায় 6.283 রেডিয়ান। এই ক্যালকুলেটর ডিগ্রি আশা করে: 30 লিখলে মানে 30°, এবং [[\\sin(30^\\circ) = 0.5]]। একই 30 কে রেডিয়ান হিসেবে পড়লে সাইন হতো প্রায় −0.988, কোনো সতর্কতা ছাড়াই চরম ভিন্ন উত্তর।",
          "ফাঁদটি উল্টোদিকেও কাজ করে। ধরুন আপনার কোণ এমন হিসাব থেকে এসেছে যা রেডিয়ান দিয়েছে, যেমন 0.5 rad (প্রায় 28.65°)। ডিগ্রি মোডের ক্যালকুলেটরে 0.5 টাইপ করলে sin(0.5°) ≈ 0.0087 হিসাব হয়, sin(0.5 rad) ≈ 0.479 এর বদলে। লেখার আগে সবসময় নিশ্চিত করুন আপনার কোণ কোন এককে। কোণ আগেভাগে গোল করলেও নির্ভুলতা নষ্ট হয়: খাড়া কোণে এক দশমাংশ ডিগ্রি ট্যানজেন্টকে লক্ষণীয়ভাবে নাড়ায়, তাই শেষ ধাপ পর্যন্ত কোণের পূর্ণ নির্ভুলতা রাখুন।"
        ]
      },
      "angle-howto": {
        "h2": "ক্যালকুলেটর ব্যবহারের ধাপে ধাপে নির্দেশিকা",
        "steps": [
          "সমকোণী ত্রিভুজটি নিশ্চিত করুন। আপনার স্কেচ বা পরিস্থিতিতে 90 ডিগ্রি কোণটি খুঁজুন; এটি ছাড়া এই সূত্রগুলো প্রযোজ্য নয়।",
          "কোণ A চিহ্নিত করুন। আপনার পরিমাপ যে সূক্ষ্মকোণটি নির্দেশ করে সেটি বেছে নিন। অন্য সূক্ষ্মকোণটি এইটির 90° বিয়োগ।",
          "বাহুগুলোর নাম দিন। অতিভুজ c চিহ্নিত করুন, তারপর A এর বিপরীত বাহুকে a এবং A এর সন্নিহিত বাহুকে b নাম দিন।",
          "কোন বাহুটি জানেন তা লক্ষ্য করুন। এটি কি অতিভুজ না দুটি বাহুর একটি? এই একটিমাত্র তথ্য পছন্দকে দুটি মোডে সংকীর্ণ করে।",
          "মিলে যাওয়া মোডটি নির্বাচন করুন। অতিভুজ জানা ও বাহু a অনুপস্থিত: সাইন দিয়ে বাহু a। অতিভুজ জানা ও বাহু b অনুপস্থিত: কোসাইন দিয়ে বাহু b। বাহু b জানা ও বাহু a অনুপস্থিত: ট্যানজেন্ট দিয়ে বাহু a। বাহু a জানা ও বাহু b অনুপস্থিত: ট্যানজেন্ট দিয়ে বাহু b।",
          "বাহুর দৈর্ঘ্য ও এর একক লিখুন। যে একক পরিবারে উত্তর দেবেন সেই একক ব্যবহার করুন।",
          "ডিগ্রিতে কোণ A লিখুন। দুবার যাচাই করুন এটি সূক্ষ্মকোণ, কঠোরভাবে 0° ও 90° এর মধ্যে।",
          "হিসাব করুন। প্রতিস্থাপন দেখানো সমাধান ধাপসহ অনুপস্থিত বাহুটি দেখা যাবে।",
          "ধাপগুলো পড়ুন। নিশ্চিত করুন ক্যালকুলেটরটি আপনার অভিপ্রেত অনুপাতটি ব্যবহার করেছে এবং সংখ্যাগুলো আপনার ইনপুটের সঙ্গে মেলে।",
          "ফলাফলের যুক্তি যাচাই করুন। একটি বাহু অতিভুজের চেয়ে ছোট হতেই হবে। অতিভুজ থেকে সমাধান করে থাকলে সাইন ও কোসাইন থেকে পাওয়া দুটি বাহুর a² + b² = c² মিলতে হবে।"
        ],
        "paragraphs": [
          "ইন্টারফেসে রিসেট নিয়ন্ত্রণ থাকলে নতুন হিসাব শুরুর আগে ক্ষেত্রগুলো মুছে ফেলতে এটি ব্যবহার করুন, যাতে পুরনো কোনো মান পরের ফলাফলে ঢুকে না পড়ে।"
        ]
      },
      "angle-mistakes": {
        "h2": "কোণ থেকে ত্রিভুজের বাহু নির্ণয়ে সাধারণ ভুল",
        "paragraphs": [
          "1. বিপরীত ও সন্নিহিত বাহু গুলিয়ে ফেলা। নামকরণ কোণ A এর সাপেক্ষে, এবং দুটি বাহু অদলবদল করলে সাইন কোসাইনের সঙ্গে অদলবদল হয়। সমাধান: ক্যালকুলেটর ছোঁয়ার আগে আপনার স্কেচে \"opp\" ও \"adj\" লিখে নিন।",
          "2. ট্যানজেন্ট দরকার হলে সাইন বেছে নেওয়া। পরিচিত বাহু একটি হলে এবং অতিভুজ দৃষ্টিগোচর না হলে সাইনের ধরার কিছু নেই। পরিচিত বাহু একটি হলে উত্তরে ট্যানজেন্ট জড়িত। উদাহরণ: b = 8 m, A = 35° এ দরকার a = 8·tan(35°), 8·sin(35°) নয়।",
          "3. ভুল ট্যানজেন্ট সূত্র ব্যবহার। বিপরীত বাহু বের করতে ট্যানজেন্ট দিয়ে গুণ; সন্নিহিত বাহু বের করতে ভাগ। দিকটি মুখস্থ রাখুন: a = b·tan(A) ভূমিকে উচ্চতায় বাড়ায়, b = a/tan(A) উচ্চতাকে সংকুচিত করে ভূমিতে ফিরিয়ে আনে।",
          "4. ভুল এককে কোণ লেখা। ডিগ্রি হিসেবে টাইপ করা রেডিয়ান মান বা উল্টোটি নীরবে আবর্জনা তৈরি করে। আগে ডিগ্রি নিশ্চিত করুন; এই ক্যালকুলেটর ডিগ্রিতে কাজ করে।",
          "5. অতিভুজকে সাধারণ বাহু ভাবা। অতিভুজ শুধু সাইন ও কোসাইনের সঙ্গে জোড়া লাগে, কখনো ট্যানজেন্টের সঙ্গে নয়। আপনার সূত্রে tan ও অতিভুজ থাকলে কোথাও নামকরণ ভুল হয়েছে।",
          "6. ভুল রেফারেন্স কোণ ব্যবহার। মইয়ের উদাহরণে 65° মাটি থেকে মাপা। দেওয়াল থেকে মাপলে এটি 25° হতো, এবং প্রতিটি অনুপাত বদলে যেত। কোণটি কোন পাশ থেকে খুলছে তা সবসময় যাচাই করুন।",
          "7. মিটার, ফুট বা অন্য একক মেশানো। মিটারে উত্তর চাইলে ফুটে অতিভুজের হিসাবের আগে বা পরে রূপান্তর দরকার, বাদ দেওয়া কখনো নয়। পুরো হিসাবে একটি একক রাখুন।",
          "8. মধ্যবর্তী মান আগেভাগে গোল করা। 8 দিয়ে গুণ করার আগে tan(35°) কে 0.7 এ গোল করলে এখানে ভাগ্যক্রমে 5.6 আসে, কিন্তু অন্যত্র মোটা গোল করলে উত্তর সরে যায়। চূড়ান্ত ফলাফল পর্যন্ত পূর্ণ নির্ভুলতা রাখুন।",
          "9. কোণের বিপরীত বাহু সবসময় সবচেয়ে লম্বা ভাবা। বিপরীত বাহু তখনই সবচেয়ে লম্বা যখন কোণ 45° ছাড়ায়। 30° এ বিপরীত বাহু ত্রিভুজের সবচেয়ে ছোট বাহু।",
          "10. সমকোণী নয় এমন ত্রিভুজে ত্রিকোণমিতি ব্যবহার। 90° কোণ ছাড়া এখানে সংজ্ঞায়িত সাইন, কোসাইন ও ট্যানজেন্ট প্রযোজ্য নয়। স্থূলকোণী ও সূক্ষ্মকোণী ত্রিভুজের বদলে সাইন ও কোসাইন সূত্র দরকার।",
          "11. সূক্ষ্মকোণ সীমার বাইরে কোণ লেখা। 0°, 90° বা তার বেশি কোণ ত্রিভুজকে ভেঙে দেয় বা ভিন্ন আকৃতি বর্ণনা করে। ক্যালকুলেটরের দরকার কঠোরভাবে 0° ও 90° এর মধ্যে কোণ।",
          "12. ছোট কিন্তু সঠিক আউটপুটে অবিশ্বাস। 12 m এ 5° র‌্যাম্প সত্যিই মাত্র প্রায় 1.05 m ওঠে। ছোট কোণ ছোট বিপরীত বাহু তৈরি করে; এটি জ্যামিতি, ভুল নয়।"
        ]
      },
      "angle-validation": {
        "h2": "আপনার ফলাফল গাণিতিকভাবে বৈধ কিনা যাচাই",
        "paragraphs": [
          "বাহুর দৈর্ঘ্য ধনাত্মক সংখ্যা হতেই হবে; শূন্য বা ঋণাত্মক দৈর্ঘ্য কোনো ত্রিভুজ বর্ণনা করে না। আপনার গণনা করা যেকোনো বাহু আপনার লেখা অতিভুজের চেয়ে ছোট আসতে হবে। রেফারেন্স কোণ সূক্ষ্মকোণ হতেই হবে, কঠোরভাবে 0° ও 90° এর মধ্যে, এবং সমস্যার প্রতিটি দৈর্ঘ্যের একক একই হতে হবে।",
          "ট্যানজেন্ট তার সীমার প্রান্তে অতিরিক্ত সম্মান দাবি করে। কোণ 90° এর দিকে গেলে ট্যানজেন্ট খাড়াভাবে ওঠে, তাই কোণে সামান্য নড়চড় ফলাফলে নাটকীয় পরিবর্তন আনে। 0° এর কাছে ট্যানজেন্ট ক্ষুদ্র, এবং এটি দিয়ে ভাগ করলে (b = a/tan(A) মোড) একইভাবে পরিমাপের শব্দ বহুগুণ হয়। কোণ যখন দুই প্রান্তের কয়েক ডিগ্রির মধ্যে থাকে, ইনপুটগুলোকে আনুমানিক এবং আউটপুটকে নির্ভুলের বদলে সংবেদনশীল ধরুন।"
        ]
      },
      "angle-verify": {
        "h2": "আপনার উত্তর যাচাই করার পদ্ধতি",
        "paragraphs": [
          "পদ্ধতি 1: অনুপাতে ফিরে বসান। আপনার উত্তরকে পরিচিত বাহু দিয়ে ভাগ করুন এবং নিশ্চিত করুন অনুপাতটি ত্রিকোণমিতিক মানের সঙ্গে মেলে। c = 10 এ 30° তে a = 5 পেলে যাচাই করুন 5/10 = 0.5 = sin(30°)।",
          "পদ্ধতি 2: পিথাগোরাস উপপাদ্য ব্যবহার করুন। হিসাবের পর দুটি বাহু জানা থাকলে যাচাই করুন a² + b² = c²। এটি বিশুদ্ধ জ্যামিতির বিপরীতে ত্রিকোণমিতিকে ক্রস-চেক করে।",
          "পদ্ধতি 3: আপেক্ষিক আকার যাচাই করুন। প্রতিটি বাহু অতিভুজের চেয়ে ছোট হতেই হবে। বড় সূক্ষ্মকোণের বিপরীত বাহু লম্বা বাহু হতেই হবে। 30° এ বিপরীত বাহু ছোটটি হবে বলে আশা করুন।",
          "সমাধানসহ যাচাই: c = 10 m ও A = 30° থেকে ক্যালকুলেটর দেয় a = 5 m। অন্য বাহুটি বের করুন: b = 10·cos(30°) ≈ 8.66 m। এখন গোল না করা মান দিয়ে পিথাগোরাস যাচাই করুন:",
          "সমতা ধরে, অতিভুজ সবচেয়ে লম্বা, এবং 5 < 8.66 30° জ্যামিতির সঙ্গে মেলে। যেকোনো ক্ষুদ্র অমিল 8.66 এর গোল করা থেকে আসে, তাই নির্ভুলতা গুরুত্বপূর্ণ হলে গোল না করা মান দিয়ে যাচাই করুন।"
        ]
      },
      "angle-other": {
        "h2": "সঠিক সমকোণী ত্রিভুজ ক্যালকুলেটর বেছে নেওয়া",
        "paragraphs": [
          "এই পাতা একটি পরিচিত বাহু ও একটি পরিচিত সূক্ষ্মকোণবিশিষ্ট সমস্যায় মানানসই। অন্য পরিস্থিতিতে ভিন্ন টুল দরকার।",
          "দুটি বাহু জানা, কোণ নেই:",
          "কোণ অনুপস্থিত, বাহু জানা:",
          "ক্ষেত্রফল দরকার:",
          "30-60-90 বা 45-45-90 ত্রিভুজ:",
          "শুধু অনুপাতের মান:",
          "সব একসাথে:"
        ],
        "linkAnchors": [
          "সমকোণী ত্রিভুজ বাহু ক্যালকুলেটর",
          "সমকোণী ত্রিভুজ কোণ ক্যালকুলেটর",
          "সমকোণী ত্রিভুজ ক্ষেত্রফল ক্যালকুলেটর",
          "বিশেষ সমকোণী ত্রিভুজ ক্যালকুলেটর",
          "ত্রিকোণমিতিক অনুপাত ক্যালকুলেটর",
          "সমকোণী ত্রিভুজ ক্যালকুলেটর"
        ]
      },
      "angle-related": {
        "h2": "আপনার কাজে লাগতে পারে এমন অন্যান্য সমকোণী ত্রিভুজ ক্যালকুলেটর",
        "intro": "অনুপস্থিত বাহুটি পাওয়ার পর ত্রিভুজ বিশ্লেষণ সম্পূর্ণ করতে এই সম্পর্কিত ক্যালকুলেটরগুলো নিয়ে এগিয়ে যান।"
      },
      "angle-faq": {
        "h2": "সচরাচর জিজ্ঞাসিত প্রশ্ন"
      },
      "angle-conclusion": {
        "h2": "সঠিক সূত্র দিয়ে অনুপস্থিত বাহু নির্ণয় করুন",
        "paragraphs": [
          "নাম দেওয়া দিয়ে শুরু করুন: আপনার কোণের সাপেক্ষে বিপরীত, সন্নিহিত ও অতিভুজ। পরিচিত বাহু অনুপাত বেছে দিক: হাতে অতিভুজ মানে সাইন বা কোসাইন, হাতে বাহু মানে ট্যানজেন্ট। ডিগ্রিতে কোণ লিখুন, শেষ পর্যন্ত পূর্ণ নির্ভুলতা রাখুন, এবং পিথাগোরাস বা দ্রুত আকার যাচাই দিয়ে যাচাই করুন। আপনার নিজের সংখ্যা দিয়ে উপরের ক্যালকুলেটরটি চেষ্টা করুন।"
        ]
      }
    },
    "faqs": [
      {
        "question": "কোণ ব্যবহার করে অনুপস্থিত বাহু কীভাবে নির্ণয় করবেন?",
        "answer": "কোণের সাপেক্ষে বাহুগুলোর নাম দিন: বিপরীত, সন্নিহিত, অতিভুজ। পরিচিত বাহু ও অনুপস্থিত বাহু ধারণ করে এমন অনুপাতটি বেছে নিন। অতিভুজ ও কোণ থাকলে ব্যবহার করুন a = c·sin(A) বা b = c·cos(A)। একটি বাহু ও কোণ থাকলে ব্যবহার করুন a = b·tan(A) বা b = a/tan(A)। মান বসিয়ে হিসাব করুন।"
      },
      {
        "question": "বিপরীত বাহুর জন্য কোন সূত্রটি ব্যবহার করব?",
        "answer": "এটি নির্ভর করে আপনি কী জানেন। অতিভুজ থাকলে ব্যবহার করুন a = c·sin(A)। সন্নিহিত বাহু থাকলে ব্যবহার করুন a = b·tan(A)। উভয়েই কোণ A এর বিপরীত বাহু দেয়; পরিচিত বাহু নির্ধারণ করে কোন রূপটি প্রযোজ্য।"
      },
      {
        "question": "কোণ ব্যবহার করে সন্নিহিত বাহু কীভাবে নির্ণয় করবেন?",
        "answer": "অতিভুজ জানা থাকলে ব্যবহার করুন b = c·cos(A)। বিপরীত বাহু জানা থাকলে ব্যবহার করুন b = a/tan(A)। সন্নিহিত বাহু সবসময় কোণ A এর পাশাপাশি চলে, তাই বেছে নেওয়ার আগে নামকরণ নিশ্চিত করুন।"
      },
      {
        "question": "সাইন, কোসাইন ও ট্যানজেন্টের মধ্যে পার্থক্য কী?",
        "answer": "সাইন বিপরীতকে অতিভুজের সঙ্গে, কোসাইন সন্নিহিতকে অতিভুজের সঙ্গে, এবং ট্যানজেন্ট বিপরীতকে সন্নিহিতের সঙ্গে যুক্ত করে। সাইন ও কোসাইন ঢালু দৈর্ঘ্যকে অংশে ভাগ করে; ট্যানজেন্ট সরাসরি দুটি বাহুর মধ্যে রূপান্তর করে। তিনটিই ভিন্ন দিক থেকে একই কোণ বর্ণনা করে।"
      },
      {
        "question": "SOH-CAH-TOA অর্থ কী?",
        "answer": "একটি স্মৃতিসহায়ক: Sine = Opposite/Hypotenuse, Cosine = Adjacent/Hypotenuse, Tangent = Opposite/Adjacent। বাহুগুলোর নাম দেওয়ার পর প্রতিটি অনুপাতের সঙ্গে কোন ভগ্নাংশ মেলে তা এটি মনে করিয়ে দেয়। এটি নামকরণ ধাপের বিকল্প নয়।"
      },
      {
        "question": "অতিভুজ ও একটি কোণ জানা থাকলে কি বাহু বের করতে পারি?",
        "answer": "হ্যাঁ, এটি সবচেয়ে সরল ক্ষেত্র। বিপরীত বাহুর জন্য অতিভুজকে sin(A) দিয়ে গুণ করুন বা সন্নিহিত বাহুর জন্য cos(A) দিয়ে গুণ করুন। একটি কোণ ও অতিভুজ পুরো ত্রিভুজ নির্ধারণ করে।"
      },
      {
        "question": "একটি বাহু ও একটি কোণ জানা থাকলে কি বাহু বের করতে পারি?",
        "answer": "হ্যাঁ, ট্যানজেন্ট দিয়ে। পরিচিত বাহু সন্নিহিত হলে বিপরীত বাহু পেতে tan(A) দিয়ে গুণ করুন। পরিচিত বাহু বিপরীত হলে সন্নিহিত বাহু পেতে tan(A) দিয়ে ভাগ করুন। অতিভুজ দরকার নেই।"
      },
      {
        "question": "কোণ ডিগ্রিতে না রেডিয়ানে লিখব?",
        "answer": "ডিগ্রিতে লিখুন। এই ক্যালকুলেটর কোণ ইনপুটকে ডিগ্রি হিসেবে ব্যাখ্যা করে, তাই 30 মানে 30°। ডিগ্রি হিসেবে লেখা রেডিয়ান মান কোনো সতর্কতা ছাড়াই ভুল ফলাফল দেয়। রেডিয়ানকে প্রথমে 180/π দিয়ে গুণ করে ডিগ্রিতে রূপান্তর করুন।"
      },
      {
        "question": "একটি মোডে ট্যানজেন্ট সূত্রে ভাগ কেন ব্যবহার হয়?",
        "answer": "কারণ ট্যানজেন্ট সমান বিপরীত ভাগ সন্নিহিত। বিপরীত বাহুর জন্য tan(A) = a/b সমাধান করলে গুণন পাওয়া যায়, a = b·tan(A)। একই সমীকরণ সন্নিহিত বাহুর জন্য সমাধান করলে ভাগ পাওয়া যায়, b = a/tan(A)। একটি সম্পর্ক, দুইভাবে পড়া।"
      },
      {
        "question": "দুটি ভিন্ন ত্রিভুজের কি একই কোণ থাকতে পারে?",
        "answer": "হ্যাঁ। কোণটি আকৃতি নির্ধারণ করে কিন্তু আকার নয়, তাই একটি ছোট ও একটি বড় ত্রিভুজ প্রতিটি কোণ ভাগ করতে পারে। এদের বাহুর অনুপাত ঠিক মেলে; শুধু স্কেল ভিন্ন। এগুলো সদৃশ ত্রিভুজ।"
      },
      {
        "question": "গণনাকৃত বাহু কীভাবে যাচাই করব?",
        "answer": "অনুপাতে ফিরে বসান, উদাহরণস্বরূপ যাচাই করুন a/c সমান sin(A)। বা পিথাগোরাস ব্যবহার করুন: দুটি বাহু জানা থাকলে নিশ্চিত করুন a² + b² = c²। এছাড়া যাচাই করুন প্রতিটি বাহু অতিভুজের চেয়ে ছোট এবং কোণের জন্য যুক্তিসংগত আকারের।"
      },
      {
        "question": "90 ডিগ্রির কাছে ট্যানজেন্ট-ভিত্তিক ফলাফল সংবেদনশীল হয় কেন?",
        "answer": "কোণ 90° এর দিকে গেলে ট্যানজেন্ট সীমাহীন বাড়ে, তাই কোণে ক্ষুদ্র পরিবর্তন ফলাফলে বড় পরিবর্তন আনে। 0° এর কাছে ক্ষুদ্র ট্যানজেন্ট দিয়ে ভাগ করলে উল্টো সমস্যা দেখা দেয়। দুই প্রান্তের কাছে ইনপুটের জন্য কোণে অতিরিক্ত নির্ভুলতা রাখুন।"
      }
    ],
    "relatedHeading": "আপনার কাজে লাগতে পারে এমন অন্যান্য সমকোণী ত্রিভুজ ক্যালকুলেটর",
    "relatedIntro": "অনুপস্থিত বাহুটি পাওয়ার পর ত্রিভুজ বিশ্লেষণ সম্পূর্ণ করতে এই সম্পর্কিত ক্যালকুলেটরগুলো নিয়ে এগিয়ে যান।",
    "relatedItems": [
      "সমকোণী ত্রিভুজ ক্যালকুলেটর",
      "সমকোণী ত্রিভুজ বাহু ক্যালকুলেটর",
      "সমকোণী ত্রিভুজ কোণ ক্যালকুলেটর",
      "ত্রিকোণমিতিক অনুপাত ক্যালকুলেটর",
      "সমকোণী ত্রিভুজ ক্ষেত্রফল ক্যালকুলেটর",
      "বিশেষ সমকোণী ত্রিভুজ ক্যালকুলেটর"
    ]
  },

  "ja":   {
    "tocHeading": "このガイドの内容",
    "tocItems": {
      "angle-intro": "角度を使って辺を求める方法",
      "angle-anatomy": "辺と角の理解",
      "angle-trig": "正弦・余弦・正接",
      "angle-modes": "4つの計算機モード",
      "angle-examples": "実生活の例",
      "angle-effect": "角度が辺の長さに与える影響",
      "angle-degrees": "度と計算機の設定",
      "angle-howto": "計算機の使い方",
      "angle-mistakes": "よくある間違い",
      "angle-validation": "入力の妥当性チェック",
      "angle-verify": "答えの検証",
      "angle-other": "他の計算機を使うべき場合",
      "angle-related": "関連する計算機",
      "angle-faq": "よくある質問"
    },
    "sections": {
      "angle-intro": {
        "h2": "角度を使って直角三角形の辺を求める方法",
        "paragraphs": [
          "壁にもたれたはしごを思い浮かべてください。はしごの長さは5メートル、地面との角は65度とわかっていますが、どこまで高く届くでしょうか。角度から辺を求める直角三角形計算機は、まさにこの種の問いに答えます。一つの鋭角と一つの辺の長さがわかっているときに、不足している辺を求めます。一つの辺と一つの角で十分なのは、三角法が三角形の形を完全に固定するからです。正弦・余弦・正接の三つの比は、それぞれ角と異なる辺の組み合わせを結びます。正弦は対辺と斜辺を結び、余弦は隣辺と斜辺を結び、正接は二つの脚を直接結びます。このページでは、どの比があなたの状況に合うか、なぜうまくいくか、上の計算機の使い方を説明します。二つの既知の辺を必要とする三平方の定理の計算機とは異なり、このツールは一つの辺と一つの角から動作します。"
        ]
      },
      "angle-anatomy": {
        "h2": "直角三角形の辺と角の理解",
        "h3s": [
          "直角三角形とは",
          "斜辺とは",
          "対辺と隣辺とは"
        ],
        "paragraphs": [
          "直角三角形はちょうど90度の角を一つ含みます。紙の角と同じです。残りの二つの角は鋭角で、それぞれ90度より小さく、常に合計90度になります。三角形の三つの角の合計が180度だからです。このガイドの三角法は直角三角形にのみ適用されます。正弦・余弦・正接の比は直角を通して定義されるので、90度の角がない三角形に使うと間違った答えになります。",
          "斜辺は直角の向かいにあり、常に三辺の中で最長です。慣習により [[c]] というラベルが付きます。回転した図で見つけるには、直角マークに触れていない辺を探してください。三角形がどう回転しても、斜辺は四角い角の向かいにあります。",
          "一つの鋭角を選び、[[A]] とします。[[A]] の向かいの脚が対辺で、[[a]] とラベル付けします。斜辺とともに [[A]] を作る脚が隣辺で、[[b]] とラベル付けします。ここが初心者をつまずかせる点です。ラベルは選ぶ角によって変わります。角 [[A]] の対辺だった脚は、基準を角 [[B]] に切り替えると隣辺になります。斜辺の役割は決して変わりません。このガイド全体で、[[a]] は [[A]] の対辺、[[b]] は [[A]] の隣辺、[[c]] は斜辺です。"
        ],
        "imgAlt": "左下に角Aをもつ直角三角形。脚aはAの対辺、脚bはAの隣辺、cは斜辺",
        "figcaption": "角Aを基準とした構成: 辺aはAの対辺、辺bはAの隣辺、cは斜辺です。A + B = 90°。"
      },
      "angle-trig": {
        "h2": "正弦・余弦・正接で不足する辺を求める仕組み",
        "h3s": [
          "正弦の理解",
          "余弦の理解",
          "正接の理解",
          "SOH-CAH-TOAとは"
        ],
        "paragraphs": [
          "三角比とは、与えられた角に対する直角三角形の二辺の固定された関係です。角を変えれば比も変わります。角を同じに保てば、その角をもつすべての三角形が大きさに関わらず同じ比を共有します。だからこそ、一つの角と一つの辺で他のすべてが決まります。三つの比はそれぞれ角と異なる辺の組み合わせを結ぶので、わかっている辺がどの比を使うかを決めます。",
          "正弦は対辺と斜辺を比べます。[[\\sin(A) = \\frac{a}{c}]] 不足する辺について解くには、両辺に [[c]] を掛けます。右辺の [[c]] が打ち消され、[[a = c\\sin(A)]] が残ります。言葉にすると、対辺の脚は斜辺に角の正弦を掛けたものに等しくなります。角が大きいほど正弦の値も大きくなるので、角が開くほど対辺は伸びます。",
          "余弦は隣辺と斜辺を比べます。[[\\cos(A) = \\frac{b}{c}]] 両辺に [[c]] を掛けると [[b = c\\cos(A)]] になります。隣辺の脚は斜辺に角の余弦を掛けたものに等しくなります。角 [[A]] が90度に近づくにつれて隣辺はゼロに縮みます。これは図形の通りです。角が隣辺の脚を平らに押しつぶすのです。",
          "正接は二つの脚を直接比べます。[[\\tan(A) = \\frac{a}{b}]] 両方向に変形すると [[a = b\\tan(A)]] と [[b = \\frac{a}{\\tan(A)}]] になります。既知の脚が隣辺で対辺を求めたいときは掛け算を使います。隣辺に正接を掛けて伸ばすと対辺になるからです。既知の脚が対辺で隣辺を求めたいときは割り算を使います。対辺の中に正接サイズの断片がいくつ入るかを問うているのです。二つの形は、同じ関係を逆方向から読んだものです。",
          "SOH-CAH-TOAは記憶の助けであり、辺を正しく特定する代わりにはなりません。SOH: 正弦 = 対辺/斜辺。CAH: 余弦 = 隣辺/斜辺。TOA: 正接 = 対辺/隣辺。角を基準に対辺・隣辺・斜辺にラベルを付けた後、どの比を選ぶかを助けます。必ず先に辺にラベルを付けます。この覚え方は、その後にどの分数を書くかを教えるだけです。"
        ],
        "imgAlt": "同じ直角三角形に正弦・余弦・正接の比を示した3枚のパネル",
        "figcaption": "一つの三角形でのSOH-CAH-TOA: 正弦は対辺と斜辺、余弦は隣辺と斜辺、正接は二つの脚を使います。"
      },
      "angle-modes": {
        "h2": "正しい計算機モードの選び方",
        "paragraphs": [
          "正しいモードは、二つの事実で決まります。すでにわかっている辺の長さがどれか、そして不足している辺がどれかです。表で自分の状況を探し、対応する計算例を下で読んでください。"
        ],
        "table": {
          "headers": [
            "既知の辺",
            "既知の角",
            "不足している辺",
            "公式",
            "計算機モード",
            "使う場面"
          ],
          "rows": [
            [
              "斜辺 c",
              "A",
              "脚 a",
              "a = c × sin(A)",
              "正弦から脚 a",
              "傾斜の長さがわかっていて、角の向かいの辺が必要な場合"
            ],
            [
              "斜辺 c",
              "A",
              "脚 b",
              "b = c × cos(A)",
              "余弦から脚 b",
              "傾斜の長さがわかっていて、角の横の辺が必要な場合"
            ],
            [
              "脚 b",
              "A",
              "脚 a",
              "a = b × tan(A)",
              "正接から脚 a",
              "水平距離がわかっていて、垂直方向の高さが必要な場合"
            ],
            [
              "脚 a",
              "A",
              "脚 b",
              "b = a / tan(A)",
              "正接から脚 b",
              "垂直方向の高さがわかっていて、水平距離が必要な場合"
            ]
          ]
        },
        "h3s": [
          "モード1: 正弦で脚 a を求める",
          "モード2: 余弦で脚 b を求める",
          "モード3: 正接で脚 a を求める",
          "モード4: 正接で脚 b を求める"
        ],
        "modeParagraphs": [
          "斜辺がわかっていて、角の対辺が必要な場合にこのモードを選びます。既知の辺が直角の向かいにあること、角がその対辺の向かう鋭角であることを確認してください。正弦が正しい比です。対辺と斜辺を直接結ぶからです。斜辺の長さと角を度で入力します。結果は対辺の脚です。",
          "斜辺がわかっていて、角に隣り合う辺が必要な場合にこのモードを選びます。余弦は隣辺と斜辺を結ぶので、傾斜の長さを角に沿った脚に変換します。鋭角の余弦は常に1より小さいため、隣辺は常に斜辺より短くなります。",
          "隣辺の脚がわかっていて、対辺の脚が必要な場合にこのモードを選びます。これは典型的な「距離と仰角」の状況です。既知の水平距離だけ離れて立ち、高さを求めます。正接は隣辺の脚を対辺の脚へと拡大(または縮小)します。角が比を決めるので、同じ土台でも角が急なほど対辺は高くなります。",
          "対辺の脚がわかっていて、隣辺の脚が必要な場合にこのモードを選びます。「高さは決まっている。土台はどこまで後ろに伸ばせばよいか」といった問いに答えます。正接での割り算はモード3の拡大を逆転させます。土台を高さに伸ばすのではなく、高さを土台に縮めます。"
        ],
        "modeExamples": [
          "<strong>計算例:</strong> [[c = 10\\text{ m}]] と [[A = 30^\\circ]] が与えられたとき、脚 [[a]] を求めます。",
          "<strong>計算例:</strong> [[c = 12\\text{ ft}]] と [[A = 60^\\circ]] が与えられたとき、脚 [[b]] を求めます。",
          "<strong>計算例:</strong> [[b = 8\\text{ m}]] と [[A = 35^\\circ]] が与えられたとき、脚 [[a]] を求めます。",
          "<strong>計算例:</strong> [[a = 4\\text{ m}]] と [[A = 40^\\circ]] が与えられたとき、脚 [[b]] を求めます。"
        ],
        "modeNotes": [
          "この答えは妥当です。30度では対辺はちょうど斜辺の半分になるので、暗算で確認できる便利な目安になります。",
          "60度では隣辺が斜辺の半分になり、30度の正弦の場合と対称的です。二つの鋭角は役割を入れ替えます。60°に隣り合う辺は、30°から見ると対辺になります。",
          "35°は45°より小さいため、対辺は隣辺より短くなります。図形の通りです。",
          "45°を少し下回る40°では、隣辺は対辺よりわずかに長くなります。この小さな差こそ、割り算が捉えるものです。"
        ],
        "imgAlt": "正弦・余弦と二つの正接モードを計算値付きで比較した4枚のパネル",
        "figcaption": "4つのモードの比較: 正弦と余弦は斜辺から出発し、正接モードは二つの脚の間で変換します。"
      },
      "angle-examples": {
        "h2": "角度を使って直角三角形の辺を求める実生活の例",
        "intro": "下の各例は同じ手順をたどります。直角三角形を見つけ、既知の辺と角を特定し、それらと不足する辺を結ぶ比を選び、代入して計算し、文脈に沿って答えを読み取ります。正弦・余弦・正接の選択が毎回図形から自然に決まる様子に注目してください。",
        "examples": [
          {
            "h3": "例1: はしごが届く高さを求める",
            "paragraphs": [
              "5 m のはしごが垂直な壁にもたれかかり、水平な地面と65度の角をなしています。壁、地面、はしごは、はしごを斜辺とする直角三角形を作ります。既知の値: [[c = 5\\text{ m}]]、[[A = 65^\\circ]]。求める高さは65°の角の対辺なので、正弦が当てはまります。この比は対辺と斜辺を結びます。",
              "はしごは壁に沿って約4.53 mの高さまで届きます。壁からの水平距離は余弦で求めます。その脚は角に隣り合っているからです。",
              "一つの斜辺と一つの角から、両方の脚が求まりました。なお、これは幾何学の計算にすぎません。はしごの設置が安全かどうかは何も示さないので、実際に使う際はメーカーの指示に従ってください。"
            ]
          },
          {
            "h3": "例2: スロープの立ち上がりを計算する",
            "paragraphs": [
              "簡略化したスロープは水平に12 m進み、水平から5度で上がります。水平距離と立ち上がりは直角三角形の脚で、水平距離は5°の角に隣り合います。既知の値: [[b = 12\\text{ m}]]、[[A = 5^\\circ]]。求める立ち上がりは対辺で、正接は対辺と隣辺を結びます。",
              "スロープは12 mの水平距離で約1.05 m上がります。水平距離と傾斜面は区別してください。傾斜面自体は12 mよりわずかに長くなります。この結果は、スロープがバリアフリー基準や建築規則に適合することを保証するものではありません。"
            ]
          },
          {
            "h3": "例3: 屋根の垂直方向の立ち上がりを求める",
            "paragraphs": [
              "屋根の断面は水平距離4.5 mで、屋根面が水平から30度傾いています。水平距離は角に隣り合い、立ち上がりは対辺なので、正接が自然な選択です。",
              "屋根は約2.60 m立ち上がります。勾配が急になると正接の値が大きくなり、立ち上がりも高くなります。そのため屋根の角度が屋根裏の高さを直接左右します。この簡略図では、実際の施工に必要な軒の出や棟木、骨組みの余裕は省いています。"
            ]
          },
          {
            "h3": "例4: ケーブルの垂直方向の到達距離を測る",
            "paragraphs": [
              "20 mのケーブルが地面から電柱の頂上まで伸び、水平と55度の角をなしています。ケーブルは斜辺です。正弦で垂直方向の到達距離(角の対辺)、余弦で水平方向の到達距離(角の隣辺)が求まるので、一つの設定で両方の脚が得られます。",
              "ケーブルは垂直方向に約16.38 m届き、水平方向に11.47 m広がっています。このように正弦と余弦を組み合わせるのは、傾斜した長さを垂直成分と水平成分に分ける標準的な方法です。"
            ]
          },
          {
            "h3": "例5: 視線から高さを見積もる",
            "paragraphs": [
              "簡略化した150 mの視線が、水平の基準線から12度傾いています。この視線を直角三角形の斜辺とみなすと、正弦で垂直方向の差、余弦で水平距離が求まります。",
              "遠方の点は基準レベルより約31.19 m高く、水平方向に146.72 m離れています。実際の測量では地形や器械の高さ、大気の影響の補正を加えますが、これはその土台となる幾何学そのものです。"
            ]
          },
          {
            "h3": "例6: 木の高さを見積もる",
            "paragraphs": [
              "平らな地面で木の幹から水平に25 m離れて立ち、木の頂上への仰角が38度です。水平距離は隣辺、目の高さを基準とした木の高さは対辺なので、正接が両者を結びます。",
              "木の頂上は観測レベルより約19.53 m高い位置にあります。地面ではなく目の高さから測った場合は、目の高さを加えて木全体の高さを求めます。この方法は、あなたと幹の間の地面が平らであることを前提としています。"
            ]
          },
          {
            "h3": "例7: 機械のブレースのオフセットを計算する",
            "paragraphs": [
              "ブレースの設計では、水平の脚が600 mmで、水平から25度の角で垂直材と接します。水平部材は角に隣り合い、必要な垂直方向のオフセットはその対辺です。",
              "垂直方向のオフセットは約279.78 mmです。同じ水平長さでも、角度が大きくなるとオフセットは高くなります。きつい機械のはめ合いで角度の小さな変化が重要なのはこのためです。この寸法だけでは、ブレースが構造的に十分であることは証明できません。"
            ]
          },
          {
            "h3": "例8: 斜辺から対辺を求める",
            "paragraphs": [
              "直角三角形の斜辺が8 mで、鋭角が42度です。角の向かいの辺が未知です。斜辺と対辺は正弦の組み合わせなので、一回の掛け算で求まります。",
              "対辺は約5.35 mです。正弦は常に、斜辺の測定値を角に向かい合う脚に変換します。式の変形は不要です。"
            ]
          },
          {
            "h3": "例9: 垂直方向の測定値から水平距離を求める",
            "paragraphs": [
              "直角三角形の対辺が3.2 mで、角が28度です。隣辺が未知です。正接は対辺を隣辺で割ったものなので、隣辺を求めるには既知の対辺を正接で割ります。",
              "水平距離は約6.02 mです。既知の辺が比の分子にあるときは、割り算で未知の辺を分離します。"
            ]
          },
          {
            "h3": "例10: 建物の垂直方向のオフセットを見積もる",
            "paragraphs": [
              "簡略化した80 ftの観測線が、水平から25度傾いています。この線は斜辺で、垂直成分は角の対辺なので、正弦を使います。",
              "垂直成分は約33.81 ftです。角度が大きくなると、80 ftのうち垂直部分が増え、水平部分が減ります。これは大まかな幾何学の見積もりであり、正式な建物測量の代わりにはなりません。"
            ]
          },
          {
            "h3": "例11: 傾斜した歩道の立ち上がりを計算する",
            "paragraphs": [
              "歩道が水平に6 m、8度の傾斜で続いています。水平距離は角に隣り合い、立ち上がりは対辺なので、正接を直接使えます。",
              "歩道は約0.84 m上がります。立ち上がりは水平距離と角の正接の両方に比例するので、角度が一定なら水平距離を2倍にすると立ち上がりも2倍になります。勾配の適合については地域の基準を別途確認してください。"
            ]
          },
          {
            "h3": "例12: 既知の立ち上がりから水平オフセットを求める",
            "paragraphs": [
              "構造物の垂直方向のオフセットが2 mで、対角線が水平と35度の角をなしています。垂直の脚は角の対辺、水平オフセットは隣辺なので、正接で割る必要があります。",
              "水平オフセットは約2.86 mです。立ち上がりと角がわかれば土台が完全に決まります。高さの制約から後退距離を導くのはこの仕組みです。"
            ]
          }
        ],
        "table": {
          "headers": [
            "状況",
            "既知の辺",
            "既知の角",
            "比",
            "計算された辺"
          ],
          "rows": [
            [
              "はしごの高さ",
              "c = 5 m",
              "65°",
              "正弦",
              "a ≈ 4.53 m"
            ],
            [
              "スロープの立ち上がり",
              "b = 12 m",
              "5°",
              "正接",
              "a ≈ 1.05 m"
            ],
            [
              "屋根の立ち上がり",
              "b = 4.5 m",
              "30°",
              "正接",
              "a ≈ 2.60 m"
            ],
            [
              "ケーブルの到達距離",
              "c = 20 m",
              "55°",
              "正弦 / 余弦",
              "a ≈ 16.38 m, b ≈ 11.47 m"
            ],
            [
              "視線",
              "c = 150 m",
              "12°",
              "正弦 / 余弦",
              "a ≈ 31.19 m, b ≈ 146.72 m"
            ],
            [
              "木の高さ",
              "b = 25 m",
              "38°",
              "正接",
              "a ≈ 19.53 m"
            ],
            [
              "ブレースのオフセット",
              "b = 600 mm",
              "25°",
              "正接",
              "a ≈ 279.78 mm"
            ],
            [
              "斜辺からの対辺",
              "c = 8 m",
              "42°",
              "正弦",
              "a ≈ 5.35 m"
            ],
            [
              "対辺からの隣辺",
              "a = 3.2 m",
              "28°",
              "正接",
              "b ≈ 6.02 m"
            ],
            [
              "建物のオフセット",
              "c = 80 ft",
              "25°",
              "正弦",
              "a ≈ 33.81 ft"
            ],
            [
              "歩道の立ち上がり",
              "b = 6 m",
              "8°",
              "正接",
              "a ≈ 0.84 m"
            ],
            [
              "立ち上がりからの水平距離",
              "a = 2 m",
              "35°",
              "正接",
              "b ≈ 2.86 m"
            ]
          ]
        },
        "imgAlt": "三角法で解いた、はしごの高さ・スロープの立ち上がり・屋根の立ち上がり・木の高さを示す4枚のパネル",
        "figcaption": "三角法の活用例: 一つの辺と一つの角から求めた、はしご(4.53 m)、スロープ(1.05 m)、屋根(2.60 m)、木(19.53 m)の高さ。"
      },
      "angle-effect": {
        "h2": "角が不足する辺に与える影響",
        "paragraphs": [
          "斜辺を固定して角を大きくしていくと、対辺は伸び、隣辺は縮みます。角は、斜辺を二つの脚に分けるダイヤルのように働きます。0度では対辺が消えて隣辺が斜辺全体と等しくなり、90度では逆になります。正接はさらに劇的に振る舞います。頼れる斜辺がないからです。角が90度に近づくと、対辺は縮む隣辺をはるかにしのいで高くなり、正接は限りなく大きくなります。",
          "二つの三角形は同じ鋭角をもちながら、大きさがまったく違うことがあります。角は形を固定するので、対応する辺の比はすべて一致します。一方、斜辺が大きさを決めます。このような三角形は相似です。65°の5 mのはしごと65°の10 mのはしごは、届く高さが正確に1:2の比になります。下の表は、斜辺が10単位の場合のこのダイヤル効果を示しています。",
          "45°では二つの脚がちょうどつり合い、正接は1になります。対称性に注目してください。30°の行は脚を入れ替えると60°の行と一致します。30°の対辺が60°の隣辺だからです。"
        ],
        "table": {
          "headers": [
            "角度 A",
            "対辺 a = 10 × sin(A)",
            "隣辺 b = 10 × cos(A)",
            "tan(A) = a / b"
          ],
          "rows": [
            [
              "30°",
              "≈ 5.00",
              "≈ 8.66",
              "≈ 0.577"
            ],
            [
              "45°",
              "≈ 7.07",
              "≈ 7.07",
              "≈ 1.000"
            ],
            [
              "60°",
              "≈ 8.66",
              "≈ 5.00",
              "≈ 1.732"
            ]
          ]
        }
      },
      "angle-degrees": {
        "h2": "正しい角度設定が重要な理由",
        "paragraphs": [
          "角は度またはラジアンで測れますが、二つの目盛りでは数の意味がまったく違います。一周は360度ですが、ラジアンでは約6.283にすぎません。この計算機は度を想定しています。30と入力すれば30°を意味し、[[\\sin(30^\\circ) = 0.5]] となります。同じ30をラジアンとして読むと、正弦は約−0.988になり、何の警告もなく大きく異なる答えが出ます。",
          "逆方向の落とし穴もあります。計算結果としてラジアンの角が出てきたとします。例えば0.5 rad(約28.65°)です。0.5を度モードの計算機に入力すると、sin(0.5 rad) ≈ 0.479 ではなく sin(0.5°) ≈ 0.0087 が計算されます。入力前に角の単位を必ず確認してください。角を早めに丸めると精度も落ちます。急な角度では0.1度の差で正接が目に見えて動くので、最終手順まで角の精度は保ってください。"
        ]
      },
      "angle-howto": {
        "h2": "計算機の使い方ステップガイド",
        "steps": [
          "直角三角形であることを確認します。スケッチや状況の中から90度の角を見つけます。これがなければ、この公式は使えません。",
          "角Aを特定します。測定値が基準とする鋭角を選びます。もう一方の鋭角は90°からこの角を引いたものになります。",
          "辺にラベルを付けます。斜辺cに印を付け、次にAの対辺をa、Aの隣辺をbとします。",
          "わかっている辺を確認します。斜辺ですか、それとも脚の一つですか。この一つの事実で、候補は二つのモードに絞られます。",
          "対応するモードを選択します。斜辺がわかっていて脚aが不足: 正弦から脚 a。斜辺がわかっていて脚bが不足: 余弦から脚 b。脚bがわかっていて脚aが不足: 正接から脚 a。脚aがわかっていて脚bが不足: 正接から脚 b。",
          "辺の長さと単位を入力します。答えを出すときに使うのと同じ単位系で入力します。",
          "角Aを度で入力します。鋭角であること、つまり0°より大きく90°より小さいことを再確認します。",
          "計算します。代入を示す計算手順とともに、不足していた辺が表示されます。",
          "手順を読みます。計算機が意図した比を使っていること、数値が入力と一致することを確認します。",
          "結果が妥当か確認します。脚は斜辺より短くなければなりません。斜辺から解いた場合は、正弦と余弦で求めた両方の脚がa² + b² = c²を満たすはずです。"
        ],
        "paragraphs": [
          "画面にリセット機能がある場合は、新しい計算を始める前にそれを使って入力欄を消去してください。古い値が次の結果に混ざるのを防げます。"
        ]
      },
      "angle-mistakes": {
        "h2": "角度から三角形の辺を求めるときのよくある間違い",
        "paragraphs": [
          "<strong>1. 対辺と隣辺を取り違える。</strong>ラベル付けは角Aを基準にする相対的なもので、二つの脚を入れ替えると正弦と余弦も入れ替わります。対策: 計算機に触る前に、スケッチに「対辺」と「隣辺」と書き込みます。",
          "<strong>2. 正接が必要な場面で正弦を選ぶ。</strong>既知の辺が脚で、斜辺がどこにもない場合、正弦には掴むものがありません。既知の辺が脚なら、答えには正接が関わります。例: b = 8 m、A = 35° の場合は a = 8·tan(35°) であり、8·sin(35°) ではありません。",
          "<strong>3. 間違った正接の公式を使う。</strong>対辺を求めるときは正接を掛け、隣辺を求めるときは正接で割ります。向きを覚えましょう。a = b·tan(A) は土台を高さに伸ばし、b = a/tan(A) は高さを土台に縮めます。",
          "<strong>4. 角を間違った単位で入力する。</strong>ラジアンの値を度として入力する(またはその逆)と、何の警告もなくめちゃくちゃな結果になります。まず度であることを確認してください。この計算機は度で動作します。",
          "<strong>5. 斜辺を普通の脚として扱う。</strong>斜辺は正弦と余弦とのみ組み合わせ、正接とは組み合わせません。式にtanと斜辺が同時に出てきたら、ラベル付けが間違っています。",
          "<strong>6. 間違った基準角を使う。</strong>はしごの例の65°は地面から測ったものです。壁から測ると25°になり、すべての比が変わります。角がどちらの辺から開いているかを必ず確認してください。",
          "<strong>7. メートル、フィート、その他の単位を混ぜる。</strong>斜辺がフィートで答えをメートルで出したい場合は、前か後で換算が必要で、省略はできません。計算全体を通して一つの単位を使います。",
          "<strong>8. 中間値を早めに丸める。</strong>tan(35°) を0.7に丸めてから8を掛けると、ここでは運よく5.6になりますが、粗い丸めは他では答えをずらします。最終結果まで完全な精度を保ってください。",
          "<strong>9. 角の対辺が常に最長だと思い込む。</strong>対辺が最長になるのは、角が45°を超える場合だけです。30°では対辺は三角形で最も短い辺です。",
          "<strong>10. 直角三角形でない三角形に三角法を使う。</strong>90°の角がなければ、ここで定義した正弦・余弦・正接は使えません。鈍角三角形や鋭角三角形には正弦定理と余弦定理が必要です。",
          "<strong>11. 鋭角の範囲外の角を入力する。</strong>0°や90°以上の角では、三角形がつぶれるか、別の図形を表します。計算機には0°より大きく90°より小さい角が必要です。",
          "<strong>12. 小さいながら正しい出力を疑う。</strong>12 mで5°のスロープの立ち上がりが約1.05 mしかないのは本当です。小さな角は小さな対辺を生みます。これは幾何学の通りであり、誤りではありません。"
        ]
      },
      "angle-validation": {
        "h2": "結果が数学的に妥当かどうかをチェックする",
        "paragraphs": [
          "辺の長さは正の数でなければなりません。ゼロや負の長さは三角形を表しません。計算で求めた脚は、入力した斜辺より短くならなければなりません。基準角は鋭角、つまり0°より大きく90°より小さく、問題中のすべての長さは一つの単位で統一します。",
          "正接は、定義域の端では特に注意が必要です。角が90°に近づくと正接は急上昇するので、角のわずかなぶれが結果を大きく振ります。0°付近では正接がごく小さく、それで割る(b = a/tan(A) モード)と測定のノイズが同じように増幅されます。角がどちらかの端から数度以内にある場合は、入力を近似値、出力は敏感な値として扱い、正確な値とは考えないでください。"
        ]
      },
      "angle-verify": {
        "h2": "答えをチェックする方法",
        "paragraphs": [
          "<strong>方法1: 比に代入し直します。</strong>答えを既知の辺で割り、比が三角関数の値と一致することを確認します。c = 10、30°で a = 5 と求めた場合は、5/10 = 0.5 = sin(30°) を確かめます。",
          "<strong>方法2: 三平方の定理を使います。</strong>計算後に二つの辺がわかれば、a² + b² = c² を検証します。これは三角法を純粋な幾何学で相互チェックするものです。",
          "<strong>方法3: 大きさの関係を確認します。</strong>すべての脚は斜辺より短くなければなりません。大きい方の鋭角の対辺が長い方の脚になります。30°では、対辺が短い方になると予想します。",
          "<strong>検証の計算例:</strong> c = 10 m、A = 30° から、計算機は a = 5 m を出します。もう一方の脚を求めます: b = 10·cos(30°) ≈ 8.66 m。丸めていない値で三平方の定理をチェックします。",
          "等式は成り立ち、斜辺が最長で、5 < 8.66 は30°の幾何学と一致します。わずかなずれは8.66の丸めによるものなので、精度が重要な場合は丸めていない値で検証してください。"
        ]
      },
      "angle-other": {
        "h2": "適切な直角三角形計算機の選び方",
        "paragraphs": [
          "<strong>二つの辺が既知で角が不明:</strong> 直角三角形の辺計算機は三平方の定理を直接適用します。",
          "<strong>角が不足し辺が既知:</strong> 直角三角形角度計算機は逆正弦・逆余弦・逆正接を使います。",
          "<strong>面積が必要:</strong> 直角三角形面積計算機は脚や他の入力から面積を計算します。",
          "<strong>30-60-90や45-45-90の三角形:</strong> 特殊直角三角形計算機はその正確な比を活用します。",
          "<strong>比の値だけが必要:</strong> 三角比計算機は辺を解かずにsin・cos・tanを計算します。",
          "<strong>すべてを一度に:</strong> 直角三角形計算機は有効な二つの入力から、三角形全体・角・面積・派生する性質を解きます。"
        ],
        "linkAnchors": [
          "直角三角形の辺計算機",
          "直角三角形角度計算機",
          "直角三角形面積計算機",
          "特殊直角三角形計算機",
          "三角比計算機",
          "直角三角形計算機"
        ]
      },
      "angle-related": {
        "h2": "役立つその他の直角三角形計算機",
        "paragraphs": [
          "不足していた辺が求まったら、これらの関連計算機で三角形の分析を続けましょう。"
        ]
      },
      "angle-faq": {
        "h2": "よくある質問"
      },
      "angle-conclusion": {
        "h2": "正しい公式で不足する辺を求めましょう",
        "paragraphs": [
          "まずラベル付けから始めます。角を基準に対辺・隣辺・斜辺を決めます。既知の辺に比を選ばせましょう。斜辺がわかっていれば正弦か余弦、脚がわかっていれば正接です。角は度で入力し、最後まで完全な精度を保ち、三平方の定理や簡単な大きさのチェックで検証します。上の計算機で自分の数値を試してみてください。"
        ]
      }
    },
    "faqs": [
      {
        "question": "角度を使って不足している辺はどのように求めますか。",
        "answer": "角を基準に辺にラベルを付けます。対辺・隣辺・斜辺です。既知の辺と不足している辺の両方を含む比を選びます。斜辺と角がわかっている場合は a = c·sin(A) または b = c·cos(A) を使います。一つの脚と角がわかっている場合は a = b·tan(A) または b = a/tan(A) を使います。代入して計算します。"
      },
      {
        "question": "対辺にはどの公式を使うべきですか。",
        "answer": "わかっているものによります。斜辺がわかっている場合は a = c·sin(A) を使います。隣辺の脚がわかっている場合は a = b·tan(A) を使います。どちらも角Aの向かいの辺を求めます。既知の辺がどちらの形を使うかを決めます。"
      },
      {
        "question": "角度を使って隣辺をどのように求めますか。",
        "answer": "斜辺がわかっている場合は b = c·cos(A) を使います。対辺の脚がわかっている場合は b = a/tan(A) を使います。隣辺は常に角Aに沿っているので、選ぶ前にラベル付けを確認してください。"
      },
      {
        "question": "正弦・余弦・正接の違いは何ですか。",
        "answer": "正弦は対辺と斜辺を結び、余弦は隣辺と斜辺を結び、正接は対辺と隣辺を結びます。正弦と余弦は傾斜した長さを成分に分け、正接は二つの脚の間で直接変換します。三つとも同じ角を異なる辺から表しています。"
      },
      {
        "question": "SOH-CAH-TOAとは何ですか。",
        "answer": "覚え方の語呂合わせです。正弦 = 対辺/斜辺、余弦 = 隣辺/斜辺、正接 = 対辺/隣辺。辺にラベルを付けた後、どの比がどの分数に対応するかを思い出させます。ラベル付けの手順の代わりにはなりません。"
      },
      {
        "question": "斜辺と一つの角がわかれば辺を求められますか。",
        "answer": "はい、これが最も単純な場合です。対辺には斜辺に sin(A) を掛け、隣辺には斜辺に cos(A) を掛けます。一つの角と斜辺があれば、三角形全体が決まります。"
      },
      {
        "question": "一つの脚と一つの角がわかれば辺を求められますか。",
        "answer": "はい、正接を使います。既知の脚が隣辺なら、tan(A) を掛けて対辺を求めます。既知の脚が対辺なら、tan(A) で割って隣辺を求めます。斜辺は必要ありません。"
      },
      {
        "question": "角は度とラジアンのどちらで入力すべきですか。",
        "answer": "度で入力してください。この計算機は角の入力を度として解釈するので、30は30°を意味します。ラジアンの値を度として入力すると、何の警告もなく間違った結果になります。ラジアンは先に度に換算してください。180/π を掛けます。"
      },
      {
        "question": "正接の公式が一方のモードで割り算になるのはなぜですか。",
        "answer": "正接は対辺を隣辺で割ったものだからです。tan(A) = a/b を対辺について解くと掛け算 a = b·tan(A) になり、隣辺について解くと割り算 b = a/tan(A) になります。一つの関係を二方向から読んだものです。"
      },
      {
        "question": "二つの異なる三角形が同じ角をもてますか。",
        "answer": "はい。角は形を固定しますが、大きさは固定しません。小さい三角形と大きい三角形がすべての角を共有できます。辺の比は正確に一致し、違うのは大きさだけです。これが相似な三角形です。"
      },
      {
        "question": "計算した辺はどのように検証しますか。",
        "answer": "比に代入し直します。例えば a/c が sin(A) と等しいことを確認します。または三平方の定理を使います。二つの辺がわかれば a² + b² = c² を確認します。各脚が斜辺より短く、角に対して妥当な大きさかも確認してください。"
      },
      {
        "question": "90度付近で正接ベースの結果が敏感になるのはなぜですか。",
        "answer": "角が90°に近づくと正接は限りなく大きくなるので、角のわずかな変化が結果の大きな変化を生みます。0°付近では逆の問題が起きます。ごく小さい正接で割るからです。どちらかの端に近い入力では、角の精度を余分に保ってください。"
      }
    ],
    "relatedHeading": "役立つその他の直角三角形計算機",
    "relatedIntro": "不足していた辺が求まったら、これらの関連計算機で三角形の分析を続けましょう。",
    "relatedItems": [
      "直角三角形計算機",
      "直角三角形の辺計算機",
      "直角三角形角度計算機",
      "三角比計算機",
      "直角三角形面積計算機",
      "特殊直角三角形計算機"
    ]
  },

  "ko":   {
    "tocHeading": "이 가이드에서 다루는 내용",
    "tocItems": {
      "angle-intro": "각을 이용해 변 구하기",
      "angle-anatomy": "변과 각의 이해",
      "angle-trig": "사인, 코사인, 탄젠트",
      "angle-modes": "계산기의 네 가지 모드",
      "angle-examples": "실생활 예제",
      "angle-effect": "각이 변의 길이에 미치는 영향",
      "angle-degrees": "도와 계산기 설정",
      "angle-howto": "계산기 사용 방법",
      "angle-mistakes": "흔한 실수",
      "angle-validation": "입력값 검증",
      "angle-verify": "답 검증하기",
      "angle-other": "다른 계산기를 사용할 때",
      "angle-related": "관련 계산기",
      "angle-faq": "자주 묻는 질문"
    },
    "sections": {
      "angle-intro": {
        "h2": "각을 이용해 직각삼각형의 변 구하기",
        "paragraphs": [
          "벽에 기대어 있는 사다리를 떠올려 보십시오. 사다리 길이가 5미터이고 지면과 65도의 각도를 이룰 때, 사다리가 벽에 닿는 높이는 얼마일까요? 직각삼각형 변 구하기 계산기는 바로 이런 질문에 답합니다. 한 개의 예각과 한 개의 변 길이를 알 때 나머지 변을 구해 줍니다. 한 변과 한 각만으로 충분한 이유는 삼각법이 삼각형의 모양을 완전히 결정하기 때문입니다. 세 가지 비율인 사인, 코사인, 탄젠트는 각각 각과 서로 다른 변의 쌍을 연결합니다. 사인은 대변과 빗변을, 코사인은 인접변과 빗변을, 탄젠트는 두 직각변을 직접 연결합니다. 이 페이지에서는 상황에 맞는 비율을 고르는 방법, 그 원리, 그리고 위 계산기의 사용법을 설명합니다. 두 변을 알아야 하는 피타고라스 정리 계산기와 달리, 이 도구는 한 변과 한 각만으로 계산합니다."
        ]
      },
      "angle-anatomy": {
        "h2": "직각삼각형의 변과 각 이해하기",
        "h3s": [
          "직각삼각형이란?",
          "빗변이란?",
          "대변과 인접변이란?"
        ],
        "paragraphs": [
          "직각삼각형은 정확히 90도인 각 하나를 포함합니다. 종이 한 장의 모서리와 같은 각입니다. 나머지 두 각은 예각으로, 각각 90도보다 작으며, 모든 삼각형의 세 각의 합이 180도이므로 두 예각의 합은 항상 90도가 됩니다. 이 가이드의 삼각법은 직각삼각형에만 적용됩니다. 사인, 코사인, 탄젠트 비율은 직각을 기준으로 정의되므로, 90도 각이 없는 삼각형에 사용하면 틀린 답이 나옵니다.",
          "빗변은 직각의 맞은편에 있으며 세 변 중 항상 가장 깁니다. 관례상 [[c]]라는 기호를 사용합니다. 회전된 도형에서 빗변을 찾으려면 직각 표시와 닿지 않는 변을 찾으면 됩니다. 삼각형을 어떻게 돌려도 빗변은 항상 직각 표시의 맞은편에 있습니다.",
          "한 예각을 골라 [[A]]라고 부르겠습니다. [[A]]의 맞은편에 있는 직각변은 대변으로, 기호는 [[a]]입니다. 빗변과 함께 [[A]]를 이루는 직각변은 인접변으로, 기호는 [[b]]입니다. 초보자가 헷갈리는 부분은 바로 이것입니다. 기호는 선택한 각에 따라 달라집니다. 각 [[A]]의 대변인 변이 기준을 각 [[B]]로 바꾸면 인접변이 됩니다. 빗변의 역할은 절대 바뀌지 않습니다. 이 가이드 전체에서 [[a]]는 [[A]]의 대변, [[b]]는 [[A]]의 인접변, [[c]]는 빗변입니다."
        ],
        "imgAlt": "왼쪽 아래에 각 A가 있고, 각 A의 대변이 a, 인접변이 b, 빗변이 c인 직각삼각형",
        "figcaption": "각 A를 기준으로 한 삼각형의 구조: 변 a는 A의 대변, 변 b는 A의 인접변, c는 빗변입니다. A + B = 90°입니다."
      },
      "angle-trig": {
        "h2": "사인, 코사인, 탄젠트로 변 구하기",
        "h3s": [
          "사인 이해하기",
          "코사인 이해하기",
          "탄젠트 이해하기",
          "SOH-CAH-TOA란?"
        ],
        "paragraphs": [
          "삼각비는 주어진 각에 대해 직각삼각형의 두 변 사이의 고정된 관계입니다. 각이 바뀌면 비율도 바뀌고, 각이 같으면 크기와 관계없이 그 각을 가진 모든 삼각형이 같은 비율을 공유합니다. 그래서 한 각과 한 변만으로 나머지 모든 것을 구할 수 있습니다. 세 비율은 각각 각과 서로 다른 변의 조합을 연결하므로, 알고 있는 변이 어떤 비율을 사용할지 결정합니다.",
          "사인은 대변과 빗변을 비교합니다. [[\\sin(A) = \\frac{a}{c}]] 양변에 [[c]]를 곱하면 구하려는 변을 풀 수 있습니다. 오른쪽의 [[c]]가 약분되어 [[a = c\\sin(A)]]가 남습니다. 말로 풀면 대변은 빗변에 각의 사인을 곱한 값과 같습니다. 각이 커질수록 사인값도 커지므로, 각이 벌어질수록 대변도 길어집니다.",
          "코사인은 인접변과 빗변을 비교합니다. [[\\cos(A) = \\frac{b}{c}]] 양변에 [[c]]를 곱하면 [[b = c\\cos(A)]]를 얻습니다. 인접변은 빗변에 각의 코사인을 곱한 값과 같습니다. 각 [[A]]가 90도에 가까워질수록 인접변은 0에 가까워지며, 이는 기하학적 직관과 일치합니다. 각이 인접변을 납작하게 누르기 때문입니다.",
          "탄젠트는 두 직각변을 직접 비교합니다. [[\\tan(A) = \\frac{a}{b}]] 양쪽으로 정리하면 [[a = b\\tan(A)]]와 [[b = \\frac{a}{\\tan(A)}]]를 얻습니다. 알려진 변이 인접변이고 대변을 구할 때는 곱셈을 사용합니다. 인접변에 탄젠트를 곱하면 대변으로 늘어납니다. 알려진 변이 대변이고 인접변을 구할 때는 나눗셈을 사용합니다. 대변 안에 탄젠트 크기의 조각이 몇 개 들어가는지 묻는 셈입니다. 두 식은 같은 관계를 반대 방향에서 읽은 것입니다.",
          "SOH-CAH-TOA는 변을 바르게 구분하는 것을 대신해 주지 않는 기억 보조 수단입니다. SOH: 사인 = 대변 / 빗변. CAH: 코사인 = 인접변 / 빗변. TOA: 탄젠트 = 대변 / 인접변. 각을 기준으로 대변, 인접변, 빗변을 표시한 뒤 어떤 비율을 쓸지 고르는 데 도움이 됩니다. 항상 먼저 변에 표시를 하고, 이 기억법은 그다음에 쓸 분수를 알려 줄 뿐입니다."
        ],
        "imgAlt": "같은 직각삼각형 위에 사인, 코사인, 탄젠트 비율을 보여 주는 세 개의 패널",
        "figcaption": "한 삼각형 위의 SOH-CAH-TOA: 사인은 대변과 빗변을, 코사인은 인접변과 빗변을, 탄젠트는 두 직각변을 사용합니다."
      },
      "angle-modes": {
        "h2": "올바른 계산기 모드 고르기",
        "paragraphs": [
          "올바른 모드는 두 가지 사실에 달려 있습니다. 이미 알고 있는 변이 무엇인지, 그리고 구해야 할 변이 무엇인지입니다. 표에서 자신의 상황을 찾은 뒤 아래의 해당 풀이 예제를 읽으십시오."
        ],
        "h3s": [
          "모드 1: 사인으로 변 a 구하기",
          "모드 2: 코사인으로 변 b 구하기",
          "모드 3: 탄젠트로 변 a 구하기",
          "모드 4: 탄젠트로 변 b 구하기"
        ],
        "modeParagraphs": [
          "빗변을 알고 있고 각의 대변을 구해야 할 때 이 모드를 선택합니다. 알고 있는 변이 직각 맞은편의 변인지, 각이 대변이 마주 보는 예각인지 확인하십시오. 사인이 대변과 빗변을 직접 연결하므로 적절한 비율입니다. 빗변의 길이와 각을 도 단위로 입력하십시오. 결과는 대변의 길이입니다.",
          "빗변을 알고 있고 각의 인접변을 구해야 할 때 이 모드를 선택합니다. 코사인은 인접변과 빗변을 연결하므로, 빗변의 길이를 각 옆으로 뻗은 변으로 바꿔 줍니다. 예각의 코사인은 항상 1보다 작으므로 인접변은 항상 빗변보다 짧습니다.",
          "인접변을 알고 있고 대변을 구해야 할 때 이 모드를 선택합니다. 전형적인 거리와 앙각 상황입니다. 알려진 수평 거리에서 서서 높이를 구합니다. 탄젠트는 인접변을 대변으로 늘리거나 줄여 바꿉니다. 각이 비율을 정하므로, 같은 밑변이라도 각이 가파를수록 대변이 더 높아집니다.",
          "대변을 알고 있고 인접변을 구해야 할 때 이 모드를 선택합니다. 높이는 정해져 있는데 밑변을 얼마나 뒤로 빼야 하는가 같은 질문에 답합니다. 탄젠트로 나누는 것은 모드 3의 확대를 뒤집는 연산입니다. 밑변을 높이로 늘리는 대신 높이를 밑변으로 되돌립니다."
        ],
        "modeExamples": [
          "풀이 예제: [[c = 10\\text{ m}]]이고 [[A = 30^\\circ]]일 때 변 [[a]]를 구합니다.",
          "풀이 예제: [[c = 12\\text{ ft}]]이고 [[A = 60^\\circ]]일 때 변 [[b]]를 구합니다.",
          "풀이 예제: [[b = 8\\text{ m}]]이고 [[A = 35^\\circ]]일 때 변 [[a]]를 구합니다.",
          "풀이 예제: [[a = 4\\text{ m}]]이고 [[A = 40^\\circ]]일 때 변 [[b]]를 구합니다."
        ],
        "modeNotes": [
          "답이 타당합니다. 30도에서는 대변이 빗변의 정확히 절반이며, 머릿속으로 확인할 수 있는 편리한 검증 방법입니다.",
          "60도에서는 인접변이 빗변의 절반으로, 30도 사인 경우와 대칭됩니다. 두 예각이 역할을 바꿉니다. 60°의 인접변은 30°의 대변입니다.",
          "35°는 45°보다 작으므로 대변이 인접변보다 짧게 나오며, 이는 기하학과 일치합니다.",
          "40°는 45°보다 살짝 작으므로 인접변이 대변보다 살짝 깁니다. 그 작은 차이가 바로 나눗셈이 포착하는 내용입니다."
        ],
        "table": {
          "headers": [
            "알고 있는 변",
            "알고 있는 각",
            "구할 변",
            "공식",
            "계산기 모드",
            "사용 상황"
          ],
          "rows": [
            [
              "빗변 c",
              "A",
              "변 a",
              "a = c × sin(A)",
              "사인으로 변 a 구하기",
              "빗변 길이를 알고 각의 맞은편 변이 필요할 때"
            ],
            [
              "빗변 c",
              "A",
              "변 b",
              "b = c × cos(A)",
              "코사인으로 변 b 구하기",
              "빗변 길이를 알고 각 옆의 변이 필요할 때"
            ],
            [
              "변 b",
              "A",
              "변 a",
              "a = b × tan(A)",
              "탄젠트로 변 a 구하기",
              "수평 거리를 알고 수직 높이가 필요할 때"
            ],
            [
              "변 a",
              "A",
              "변 b",
              "b = a / tan(A)",
              "탄젠트로 변 b 구하기",
              "수직 높이를 알고 수평 거리가 필요할 때"
            ]
          ]
        },
        "imgAlt": "사인, 코사인, 두 탄젠트 계산기 모드를 풀이값과 함께 비교하는 네 개의 패널",
        "figcaption": "네 모드를 나란히 비교: 사인과 코사인은 빗변에서 출발하고, 탄젠트 모드는 두 직각변 사이를 변환합니다."
      },
      "angle-examples": {
        "h2": "각을 이용해 직각삼각형의 변을 구하는 실생활 예제",
        "intro": "아래의 각 예제는 같은 경로를 따릅니다. 직각삼각형을 찾고, 알고 있는 변과 각에 이름을 붙이고, 둘을 구할 변과 연결하는 비율을 고르고, 대입하고, 계산한 뒤, 답을 상황에 맞게 읽습니다. 사인, 코사인, 탄젠트의 선택이 매번 기하학에서 자연스럽게 도출되는지 살펴보십시오.",
        "examples": [
          {
            "h3": "예제 1: 사다리가 닿는 높이 구하기",
            "paragraphs": [
              "5m 사다리가 수직 벽에 기대어 있으며 지면과 65도 각도를 이룹니다. 벽, 지면, 사다리는 사다리를 빗변으로 하는 직각삼각형을 이룹니다. 알려진 값: [[c = 5\\text{ m}]], [[A = 65^\\circ]]. 구할 높이는 65° 각의 대변이므로 사인이 맞습니다. 이 비율은 대변과 빗변을 연결합니다.",
              "사다리는 벽을 따라 약 4.53m 높이까지 닿습니다. 벽에서의 수평 거리는 코사인으로 구합니다. 그 변이 각의 인접변이며, 거리는 약 2.11m입니다.",
              "한 개의 빗변과 한 개의 각으로 두 변을 모두 구했습니다. 이는 기하학적 계산일 뿐이며, 사다리 설치가 안전한지는 말해 주지 않으므로 실제 사용 시에는 제조사의 안내를 따르십시오."
            ]
          },
          {
            "h3": "예제 2: 경사로의 높이 구하기",
            "paragraphs": [
              "간단한 경사로가 수평으로 12m 뻗어 있으며 수평선 위로 5도 기울어져 있습니다. 경사로의 길이와 높이는 직각삼각형의 두 변이며, 길이는 5° 각의 인접변입니다. 알려진 값: [[b = 12\\text{ m}]], [[A = 5^\\circ]]. 구할 높이는 대변으로, 탄젠트가 대변과 인접변을 연결합니다.",
              "경사로는 12m 구간에서 약 1.05m 올라갑니다. 수평 구간과 빗면을 구분하십시오. 빗면 자체는 12m보다 약간 깁니다. 이 결과는 경사로가 접근성 규정이나 건축 기준에 맞는다고 인증해 주지 않습니다."
            ]
          },
          {
            "h3": "예제 3: 지붕의 수직 높이 구하기",
            "paragraphs": [
              "지붕 단면의 수평 구간이 4.5m이고 지붕면이 수평선 위로 30도 기울어져 있습니다. 구간은 각의 인접변이고 높이는 대변이므로 탄젠트가 자연스러운 선택입니다.",
              "지붕은 약 2.60m 올라갑니다. 경사가 가파를수록 탄젠트값이 커지고 높이도 함께 커지므로, 지붕 각도가 다락방 높이를 직접 좌우합니다. 이 단순한 그림은 실제 시공에 필요한 처마 돌출, 용마루판, 골조 여유를 생략했습니다."
            ]
          },
          {
            "h3": "예제 4: 케이블의 수직 도달 거리 측정하기",
            "paragraphs": [
              "20m 케이블이 지면에서 기둥 꼭대기까지 뻗어 있으며 수평선과 55도 각도를 이룹니다. 케이블이 빗변입니다. 사인은 수직 도달 거리(각의 대변)를, 코사인은 수평 도달 거리(각의 인접변)를 주므로, 한 번의 설정으로 두 변을 모두 구합니다.",
              "케이블은 수직으로 약 16.38m에 닿고 수평으로는 11.47m 뻗어 있습니다. 사인과 코사인을 이렇게 짝지어 쓰는 것은 기울어진 길이를 수직과 수평 성분으로 나누는 표준 방법입니다."
            ]
          },
          {
            "h3": "예제 5: 시선으로 높이 추정하기",
            "paragraphs": [
              "단순화된 시선 150m가 수평 기준선 위로 12도 기울어져 있습니다. 시선을 직각삼각형의 빗변으로 보면 사인이 수직 차이를, 코사인이 수평 거리를 뽑아냅니다.",
              "먼 지점은 기준면보다 약 31.19m 위에 있고 수평으로는 146.72m 떨어져 있습니다. 실제 측량이라면 지형, 기기 높이, 대기 효과에 대한 보정을 더할 것입니다. 이것은 그 밑바탕이 되는 순수 기하학입니다."
            ]
          },
          {
            "h3": "예제 6: 나무 높이 추정하기",
            "paragraphs": [
              "평평한 땅에서 나무 줄기까지 수평으로 25m 떨어진 곳에 서서 나무 꼭대기를 올려다본 앙각이 38도입니다. 수평 거리는 인접변이고 눈높이 기준 위의 나무 높이는 대변이므로 탄젠트가 둘을 잇습니다.",
              "나무 꼭대기는 관측 높이보다 약 19.53m 위에 있습니다. 지면이 아니라 눈높이에서 쟀다면 눈높이를 더해야 전체 나무 높이가 됩니다. 이 방법은 당신과 줄기 사이의 땅이 평평하다고 가정합니다."
            ]
          },
          {
            "h3": "예제 7: 기계 받침대의 수직 오프셋 계산하기",
            "paragraphs": [
              "받침대 설계에서 수평 부재 600mm가 수평선에서 25도 각도로 수직 부재와 만납니다. 수평 부재는 각의 인접변이며, 필요한 수직 오프셋은 그 맞은편 변입니다.",
              "수직 오프셋은 약 279.78mm입니다. 같은 수평 길이라도 각이 커지면 오프셋이 더 높아지므로, 빡빡한 기계 맞춤에서는 작은 각 변화가 중요합니다. 이 치수 하나만으로 받침대가 구조적으로 충분하다고 증명되지는 않습니다."
            ]
          },
          {
            "h3": "예제 8: 빗변에서 대변 구하기",
            "paragraphs": [
              "직각삼각형의 빗변이 8m이고 예각이 42도입니다. 각 맞은편의 변을 모릅니다. 빗변과 대변은 사인의 짝이므로 한 번의 곱셈으로 끝납니다.",
              "대변은 약 5.35m입니다. 사인은 빗변 측정값을 각이 마주 보는 변으로 항상 바꿔 주며, 식을 다시 정리할 필요가 없습니다."
            ]
          },
          {
            "h3": "예제 9: 수직 측정값에서 수평 거리 구하기",
            "paragraphs": [
              "직각삼각형의 대변 길이가 3.2m이고 각이 28도입니다. 인접변을 모릅니다. 탄젠트는 대변 나누기 인접변과 같으므로, 인접변을 구하려면 알려진 대변을 탄젠트로 나눕니다.",
              "수평 거리는 약 6.02m입니다. 알려진 변이 비율의 분자에 있을 때는 나눗셈으로 미지수를 분리합니다."
            ]
          },
          {
            "h3": "예제 10: 건물의 수직 오프셋 추정하기",
            "paragraphs": [
              "단순화된 관측선 80ft가 수평선 위로 25도 기울어져 있습니다. 관측선은 빗변이고 수직 성분은 각의 대변이므로 사인을 씁니다.",
              "수직 성분은 약 33.81ft입니다. 각이 커지면 80ft 중 수직 부분으로 들어가는 몫이 늘고 수평 부분은 줄어듭니다. 이는 대략적인 기하학적 추정치로 취급하고, 제대로 된 건물 측량을 대신할 수 없습니다."
            ]
          },
          {
            "h3": "예제 11: 경사진 보행로의 높이 구하기",
            "paragraphs": [
              "보행로가 수평으로 6m 뻗어 있으며 8도 기울어져 있습니다. 구간은 각의 인접변이고 높이는 대변이므로 탄젠트를 직접 적용합니다.",
              "보행로는 약 0.84m 올라갑니다. 높이는 구간과 각의 탄젠트에 비례하므로, 각이 고정되면 구간을 두 배로 하면 높이도 두 배가 됩니다. 경사 기준 충족 여부는 현지 규정을 별도로 확인하십시오."
            ]
          },
          {
            "h3": "예제 12: 알려진 높이에서 수평 오프셋 구하기",
            "paragraphs": [
              "구조물의 수직 오프셋이 2m이고 대각선이 수평선과 35도 각도를 이룹니다. 수직 변은 각의 대변이고 수평 오프셋은 인접변이므로 탄젠트로 나누어야 합니다.",
              "수평 오프셋은 약 2.86m입니다. 높이와 각을 알면 밑변이 완전히 정해지며, 높이 제한에서 후퇴 거리를 도출하는 것도 같은 원리입니다."
            ]
          }
        ],
        "table": {
          "headers": [
            "상황",
            "알고 있는 변",
            "알고 있는 각",
            "비율",
            "구한 변"
          ],
          "rows": [
            [
              "사다리 높이",
              "c = 5 m",
              "65°",
              "사인",
              "a ≈ 4.53 m"
            ],
            [
              "경사로 높이",
              "b = 12 m",
              "5°",
              "탄젠트",
              "a ≈ 1.05 m"
            ],
            [
              "지붕 높이",
              "b = 4.5 m",
              "30°",
              "탄젠트",
              "a ≈ 2.60 m"
            ],
            [
              "케이블 도달 거리",
              "c = 20 m",
              "55°",
              "사인 / 코사인",
              "a ≈ 16.38 m, b ≈ 11.47 m"
            ],
            [
              "시선",
              "c = 150 m",
              "12°",
              "사인 / 코사인",
              "a ≈ 31.19 m, b ≈ 146.72 m"
            ],
            [
              "나무 높이",
              "b = 25 m",
              "38°",
              "탄젠트",
              "a ≈ 19.53 m"
            ],
            [
              "받침대 오프셋",
              "b = 600 mm",
              "25°",
              "탄젠트",
              "a ≈ 279.78 mm"
            ],
            [
              "빗변에서 대변",
              "c = 8 m",
              "42°",
              "사인",
              "a ≈ 5.35 m"
            ],
            [
              "대변에서 인접변",
              "a = 3.2 m",
              "28°",
              "탄젠트",
              "b ≈ 6.02 m"
            ],
            [
              "건물 오프셋",
              "c = 80 ft",
              "25°",
              "사인",
              "a ≈ 33.81 ft"
            ],
            [
              "보행로 높이",
              "b = 6 m",
              "8°",
              "탄젠트",
              "a ≈ 0.84 m"
            ],
            [
              "높이에서 수평 거리",
              "a = 2 m",
              "35°",
              "탄젠트",
              "b ≈ 2.86 m"
            ]
          ]
        },
        "imgAlt": "사다리 높이, 경사로 높이, 지붕 높이, 나무 높이를 삼각법으로 푼 네 개의 패널",
        "figcaption": "실전 삼각법: 한 변과 한 각으로 구한 사다리(4.53m), 경사로(1.05m), 지붕(2.60m), 나무(19.53m) 높이입니다."
      },
      "angle-effect": {
        "h2": "각이 구할 변에 미치는 영향",
        "paragraphs": [
          "빗변을 고정하고 각을 키우면 대변은 늘어나고 인접변은 줄어듭니다. 각은 빗변을 두 변에 나누는 다이얼처럼 작용합니다. 0도에서는 대변이 사라지고 인접변이 빗변 전체와 같아지며, 90도에서는 반대가 됩니다. 탄젠트는 더 극적으로 변하는데, 고정해 줄 빗변이 없기 때문입니다. 각이 90도에 가까워지면 대변이 줄어드는 인접변 위로 우뚝 솟고 탄젠트는 끝없이 치솟습니다.",
          "두 삼각형은 같은 예각을 공유하면서도 크기가 완전히 다를 수 있습니다. 각은 모양을 고정하므로 대응하는 변의 비율이 모두 일치하고, 빗변은 크기만 정합니다. 이런 삼각형은 서로 닮음입니다. 65°의 5m 사다리와 65°의 10m 사다리는 정확히 1:2 비율로 높이에 닿습니다. 아래 표는 10단위 빗변에 대한 이 다이얼 효과를 보여 줍니다.",
          "45°에서는 두 변이 정확히 균형을 이루고 탄젠트는 1이 됩니다. 대칭을 주목하십시오. 30° 행은 변이 바뀐 60° 행의 거울상인데, 30°의 대변은 60°의 인접변이기 때문입니다."
        ],
        "table": {
          "headers": [
            "각 A",
            "대변 a = 10 × sin(A)",
            "인접변 b = 10 × cos(A)",
            "tan(A) = a / b"
          ],
          "rows": [
            [
              "30°",
              "≈ 5.00",
              "≈ 8.66",
              "≈ 0.577"
            ],
            [
              "45°",
              "≈ 7.07",
              "≈ 7.07",
              "≈ 1.000"
            ],
            [
              "60°",
              "≈ 8.66",
              "≈ 5.00",
              "≈ 1.732"
            ]
          ]
        }
      },
      "angle-degrees": {
        "h2": "올바른 각 설정이 중요한 이유",
        "paragraphs": [
          "각은 도나 라디안으로 잴 수 있으며, 두 척도는 숫자의 의미를 완전히 다르게 해석합니다. 한 바퀴는 360도이지만 라디안으로는 약 6.283에 불과합니다. 이 계산기는 도를 사용합니다. 30을 입력하면 30°를 뜻하고, [[\\sin(30^\\circ) = 0.5]]입니다. 같은 30을 라디안으로 읽으면 사인이 약 −0.988이 되어 경고 없이 전혀 다른 답이 나옵니다.",
          "함정은 반대 방향으로도 작동합니다. 라디안으로 나온 각을 써야 한다고 가정해 보십시오. 예를 들어 0.5 rad(약 28.65°)입니다. 0.5를 도 모드 계산기에 입력하면 sin(0.5 rad) ≈ 0.479 대신 sin(0.5°) ≈ 0.0087이 계산됩니다. 입력 전에 각의 단위를 항상 확인하십시오. 각을 일찍 반올림하는 것도 정확도를 갉아먹습니다. 가파른 각에서는 0.1도의 차이가 탄젠트를 눈에 띄게 움직이므로, 마지막 단계까지 각의 정밀도를 온전히 유지하십시오."
        ]
      },
      "angle-howto": {
        "h2": "계산기 사용 단계별 안내",
        "steps": [
          "직각삼각형인지 확인합니다. 그림이나 상황에서 90도 모서리를 찾으십시오. 직각이 없으면 이 공식들을 적용할 수 없습니다.",
          "각 A를 정합니다. 측정값이 가리키는 예각을 고르십시오. 다른 예각은 90°에서 이 각을 뺀 값입니다.",
          "변에 표시를 합니다. 빗변 c를 표시한 뒤, A의 대변을 a, A의 인접변을 b로 표시하십시오.",
          "알고 있는 변을 적어 둡니다. 빗변입니까, 아니면 한 변입니까? 이 한 가지 사실로 선택지가 두 모드로 좁혀집니다.",
          "맞는 모드를 선택합니다. 빗변을 알고 변 a를 구할 때: 사인으로 변 a 구하기. 빗변을 알고 변 b를 구할 때: 코사인으로 변 b 구하기. 변 b를 알고 변 a를 구할 때: 탄젠트로 변 a 구하기. 변 a를 알고 변 b를 구할 때: 탄젠트로 변 b 구하기.",
          "변의 길이와 단위를 입력합니다. 답을 표시할 때 쓸 단위 계열과 같은 것을 사용하십시오.",
          "각 A를 도 단위로 입력합니다. 예각인지, 즉 0°와 90° 사이에 엄격히 들어가는지 다시 확인하십시오.",
          "계산합니다. 대입 과정을 보여 주는 풀이 단계와 함께 구할 변이 나타납니다.",
          "단계를 읽습니다. 계산기가 의도한 비율을 사용했는지, 숫자가 입력값과 일치하는지 확인하십시오.",
          "결과를 상식으로 점검합니다. 변은 빗변보다 짧아야 합니다. 빗변에서 출발해 풀었다면 사인과 코사인으로 구한 두 변은 a² + b² = c²를 만족해야 합니다."
        ],
        "paragraphs": [
          "인터페이스에 초기화 버튼이 있다면, 새 계산을 시작하기 전에 필드를 비워 이전 값이 다음 결과에 스며들지 않게 하십시오."
        ]
      },
      "angle-mistakes": {
        "h2": "각에서 삼각형의 변을 구할 때 흔한 실수",
        "paragraphs": [
          "1. 대변과 인접변을 혼동합니다. 표시법은 각 A를 기준으로 하며, 두 변을 바꾸면 사인과 코사인도 바뀝니다. 해결책: 계산기를 만지기 전에 그림에 대변과 인접변을 써 넣으십시오.",
          "2. 탄젠트가 필요한데 사인을 선택합니다. 알려진 변이 한 변이고 빗변이 보이지 않으면 사인이 붙잡을 것이 없습니다. 알려진 변이 한 변이라면 답에는 탄젠트가 들어갑니다. 예: b = 8m, A = 35°인 경우 a = 8·tan(35°)이며, 8·sin(35°)이 아닙니다.",
          "3. 잘못된 탄젠트 공식을 사용합니다. 대변을 구할 때는 탄젠트를 곱하고, 인접변을 구할 때는 탄젠트로 나눕니다. 방향을 외우십시오. a = b·tan(A)는 밑변을 높이로 키우고, b = a/tan(A)는 높이를 밑변으로 되돌립니다.",
          "4. 각을 잘못된 단위로 입력합니다. 라디안 값을 도처럼(또는 그 반대로) 입력하면 조용히 엉터리 답이 나옵니다. 먼저 도 단위인지 확인하십시오. 이 계산기는 도 단위로 동작합니다.",
          "5. 빗변을 평범한 변처럼 취급합니다. 빗변은 사인과 코사인과만 짝을 이루며, 탄젠트와는 절대 짝을 이루지 않습니다. 식에 tan과 빗변이 함께 있다면 표시가 잘못된 것입니다.",
          "6. 잘못된 기준각을 사용합니다. 사다리 예제의 65°는 지면에서 잰 각도입니다. 벽에서 잰다면 25°가 되고 모든 비율이 바뀝니다. 각이 어느 변에서 벌어지는지 항상 확인하십시오.",
          "7. 미터, 피트 등 단위를 섞어 씁니다. 빗변은 피트인데 답은 미터로 기대한다면 계산 전이나 후에 환산이 필요하며, 절대 생략하면 안 됩니다. 계산 전체에 하나의 단위를 유지하십시오.",
          "8. 중간값을 너무 일찍 반올림합니다. tan(35°)를 0.7로 반올림한 뒤 8을 곱하면 여기서는 운 좋게 5.6이 나오지만, 다른 곳에서 더 거칠게 반올림하면 답이 어긋납니다. 최종 결과까지 전체 정밀도를 유지하십시오.",
          "9. 각의 대변이 항상 가장 길다고 가정합니다. 대변이 가장 긴 것은 각이 45°를 넘을 때뿐입니다. 30°에서는 대변이 삼각형에서 가장 짧은 변입니다.",
          "10. 직각삼각형이 아닌 삼각형에 삼각법을 사용합니다. 90° 각이 없으면 여기서 정의한 사인, 코사인, 탄젠트는 적용되지 않습니다. 둔각삼각형과 예각삼각형에는 사인 법칙과 코사인 법칙을 써야 합니다.",
          "11. 예각 범위를 벗어난 각을 입력합니다. 0°, 90° 또는 그 이상은 삼각형을 무너뜨리거나 다른 도형을 나타냅니다. 계산기에는 0°와 90° 사이에 엄격히 들어가는 각이 필요합니다.",
          "12. 작지만 정확한 출력을 의심합니다. 12m 구간의 5° 경사로는 실제로 약 1.05m만 올라갑니다. 작은 각은 작은 대변을 만듭니다. 그것은 기하학이지 오류가 아닙니다."
        ]
      },
      "angle-validation": {
        "h2": "결과가 수학적으로 타당한지 확인하기",
        "paragraphs": [
          "변의 길이는 양수이어야 합니다. 0이나 음수의 길이는 어떤 삼각형도 나타내지 않습니다. 계산한 변은 입력한 빗변보다 짧게 나와야 합니다. 기준각은 예각이어야 하며, 0°와 90° 사이에 엄격히 들어가고, 문제의 모든 길이는 하나의 단위를 공유해야 합니다.",
          "탄젠트는 범위의 끝 근처에서 각별한 주의가 필요합니다. 각이 90°에 가까워지면 탄젠트가 가파르게 치솟으므로, 각이 아주 조금만 흔들려도 결과가 크게 출렁입니다. 0° 근처에서는 탄젠트가 아주 작아지며, 그것으로 나누는(b = a/tan(A) 모드) 연산이 같은 방식으로 측정 오차를 증폭시킵니다. 각이 어느 한쪽 극단에서 몇 도 안에 있을 때는 입력값을 근삿값으로, 출력값을 정확한 값보다는 민감한 값으로 다루십시오."
        ]
      },
      "angle-verify": {
        "h2": "답을 확인하는 방법",
        "paragraphs": [
          "방법 1: 비율에 다시 대입합니다. 답을 알려진 변으로 나누어 삼각함수값과 일치하는지 확인하십시오. c = 10, 30°에서 a = 5를 구했다면 5/10 = 0.5 = sin(30°)인지 확인합니다.",
          "방법 2: 피타고라스 정리를 사용합니다. 계산 뒤 두 변을 알게 되면 a² + b² = c²를 확인하십시오. 삼각법을 순수 기하학과 교차 검증하는 셈입니다.",
          "방법 3: 상대적 크기를 확인합니다. 모든 변은 빗변보다 짧아야 합니다. 더 큰 예각의 대변이 더 긴 변이어야 합니다. 30°에서는 대변이 짧은 쪽이 될 것으로 예상합니다.",
          "검증 풀이: c = 10m, A = 30°에서 계산기는 a = 5m를 줍니다. 다른 변을 구합니다. b = 10·cos(30°) ≈ 8.66m. 이제 반올림하지 않은 값으로 피타고라스를 확인합니다.",
          "등식이 성립하고, 빗변이 가장 길며, 5 < 8.66은 30° 기하학과 일치합니다. 아주 작은 불일치는 8.66의 반올림에서 오므로, 정밀도가 중요할 때는 반올림하지 않은 값으로 검증하십시오."
        ]
      },
      "angle-other": {
        "h2": "올바른 직각삼각형 계산기 고르기",
        "paragraphs": [
          "두 변을 알고 각을 모를 때: 직각삼각형 변 계산기는 피타고라스 정리를 직접 적용합니다.",
          "각을 모르고 변을 알 때: 직각삼각형 각 계산기는 역사인, 역코사인, 역탄젠트를 사용합니다.",
          "넓이가 필요할 때: 직각삼각형 넓이 계산기는 변 등의 입력에서 넓이를 계산합니다.",
          "30-60-90 또는 45-45-90 삼각형일 때: 특수 직각삼각형 계산기는 정확한 비율을 활용합니다.",
          "비율값만 필요할 때: 삼각비 계산기는 변을 풀지 않고 sin, cos, tan을 계산합니다.",
          "한 번에 모든 것을 구할 때: 직각삼각형 계산기는 유효한 두 입력에서 전체 삼각형, 각, 넓이, 파생 속성을 풉니다."
        ],
        "linkAnchors": [
          "직각삼각형 변 계산기",
          "직각삼각형 각 계산기",
          "직각삼각형 넓이 계산기",
          "특수 직각삼각형 계산기",
          "삼각비 계산기",
          "직각삼각형 계산기"
        ]
      },
      "angle-conclusion": {
        "h2": "올바른 공식으로 구할 변 찾기",
        "paragraphs": [
          "먼저 표시하십시오. 각을 기준으로 대변, 인접변, 빗변을 정합니다. 알려진 변이 비율을 고르게 합니다. 빗변이 있으면 사인이나 코사인, 한 변이 있으면 탄젠트입니다. 각은 도 단위로 입력하고, 끝까지 전체 정밀도를 유지한 뒤, 피타고라스 정리나 간단한 크기 점검으로 검증하십시오. 위 계산기에 직접 숫자를 넣어 시도해 보십시오."
        ]
      }
    },
    "faqs": [
      {
        "question": "각을 이용해 구할 변은 어떻게 찾습니까?",
        "answer": "각을 기준으로 변에 표시를 합니다. 대변, 인접변, 빗변입니다. 알려진 변과 구할 변을 모두 포함하는 비율을 고릅니다. 빗변과 각이 있으면 a = c·sin(A) 또는 b = c·cos(A)를 사용합니다. 한 변과 각이 있으면 a = b·tan(A) 또는 b = a/tan(A)를 사용합니다. 대입하고 계산하십시오."
      },
      {
        "question": "대변에는 어떤 공식을 써야 합니까?",
        "answer": "알고 있는 것에 따라 다릅니다. 빗변이 있으면 a = c·sin(A)를 사용합니다. 인접변이 있으면 a = b·tan(A)를 사용합니다. 둘 다 각 A의 맞은편 변을 주며, 알려진 변이 어떤 형태를 쓸지 결정합니다."
      },
      {
        "question": "각을 이용해 인접변은 어떻게 구합니까?",
        "answer": "빗변을 알면 b = c·cos(A)를 사용합니다. 대변을 알면 b = a/tan(A)를 사용합니다. 인접변은 항상 각 A 옆으로 뻗으므로, 고르기 전에 표시를 확인하십시오."
      },
      {
        "question": "사인, 코사인, 탄젠트의 차이는 무엇입니까?",
        "answer": "사인은 대변과 빗변을, 코사인은 인접변과 빗변을, 탄젠트는 대변과 인접변을 연결합니다. 사인과 코사인은 기울어진 길이를 부분으로 나누고, 탄젠트는 두 변 사이를 직접 변환합니다. 세 비율은 모두 같은 각을 서로 다른 변에서 기술합니다."
      },
      {
        "question": "SOH-CAH-TOA는 무슨 뜻입니까?",
        "answer": "기억 보조 수단입니다. 사인 = 대변/빗변, 코사인 = 인접변/빗변, 탄젠트 = 대변/인접변입니다. 변에 표시를 한 뒤 각 비율에 맞는 분수를 떠올리게 해 줍니다. 표시 단계를 대신해 주지는 않습니다."
      },
      {
        "question": "빗변과 한 각을 알면 변을 구할 수 있습니까?",
        "answer": "예, 가장 간단한 경우입니다. 대변은 빗변에 sin(A)를, 인접변은 빗변에 cos(A)를 곱합니다. 한 각과 빗변이면 삼각형 전체가 정해집니다."
      },
      {
        "question": "한 변과 한 각을 알면 변을 구할 수 있습니까?",
        "answer": "예, 탄젠트로 구합니다. 알려진 변이 인접변이면 tan(A)를 곱해 대변을 구합니다. 알려진 변이 대변이면 tan(A)로 나누어 인접변을 구합니다. 빗변은 필요 없습니다."
      },
      {
        "question": "각은 도 단위로 입력해야 합니까, 라디안 단위로 입력해야 합니까?",
        "answer": "도 단위로 입력하십시오. 이 계산기는 각 입력을 도 단위로 해석하므로 30은 30°를 뜻합니다. 라디안 값을 도처럼 입력하면 경고 없이 틀린 결과가 나옵니다. 먼저 라디안에 180/π를 곱해 도 단위로 바꾸십시오."
      },
      {
        "question": "탄젠트 공식이 한 모드에서는 왜 나눗셈을 씁니까?",
        "answer": "탄젠트는 대변 나누기 인접변과 같기 때문입니다. tan(A) = a/b를 대변에 대해 풀면 곱셈 a = b·tan(A)가 나오고, 같은 식을 인접변에 대해 풀면 나눗셈 b = a/tan(A)가 나옵니다. 하나의 관계를 두 방향에서 읽은 것입니다."
      },
      {
        "question": "각이 같은데 서로 다른 삼각형이 있을 수 있습니까?",
        "answer": "예. 각은 모양을 정하지만 크기는 정하지 않으므로, 작은 삼각형과 큰 삼각형이 모든 각을 공유할 수 있습니다. 변의 비율은 정확히 일치하고 크기만 다릅니다. 이것이 닮은 삼각형입니다."
      },
      {
        "question": "계산한 변은 어떻게 검증합니까?",
        "answer": "비율에 다시 대입하십시오. 예를 들어 a/c가 sin(A)와 같은지 확인합니다. 또는 피타고라스 정리를 사용합니다. 두 변을 알면 a² + b² = c²를 확인하십시오. 또한 각 변이 빗변보다 짧고 각에 어울리는 크기인지도 확인하십시오."
      },
      {
        "question": "90도 근처에서 탄젠트 기반 결과가 민감해지는 이유는 무엇입니까?",
        "answer": "각이 90°에 가까워지면 탄젠트가 끝없이 커지므로, 각이 아주 조금만 바뀌어도 결과가 크게 바뀝니다. 0° 근처에서는 아주 작은 탄젠트로 나누는 반대 문제가 나타납니다. 어느 한쪽 극단 근처의 입력에서는 각의 정밀도를 여유 있게 유지하십시오."
      }
    ],
    "relatedHeading": "도움이 될 만한 다른 직각삼각형 계산기",
    "relatedIntro": "구할 변을 찾은 뒤, 이 관련 계산기들로 삼각형 분석을 완성하십시오.",
    "relatedItems": [
      "직각삼각형 계산기",
      "직각삼각형 변 계산기",
      "직각삼각형 각 계산기",
      "삼각비 계산기",
      "직각삼각형 넓이 계산기",
      "특수 직각삼각형 계산기"
    ]
  },

  "ms":   {
    "tocHeading": "Dalam Panduan Ini",
    "tocItems": {
      "angle-intro": "Cara Mencari Sisi Menggunakan Sudut",
      "angle-anatomy": "Memahami Sisi dan Sudut",
      "angle-trig": "Sinus, Kosinus, dan Tangen",
      "angle-modes": "Empat Mod Kalkulator",
      "angle-examples": "Contoh Kehidupan Sebenar",
      "angle-effect": "Bagaimana Sudut Mengubah Panjang Sisi",
      "angle-degrees": "Darjah dan Tetapan Kalkulator",
      "angle-howto": "Menggunakan Kalkulator",
      "angle-mistakes": "Kesilapan Lazim",
      "angle-validation": "Pengesahan Input",
      "angle-verify": "Mengesahkan Jawapan Anda",
      "angle-other": "Bila Perlu Menggunakan Kalkulator Lain",
      "angle-related": "Kalkulator Berkaitan",
      "angle-faq": "Soalan Lazim"
    },
    "sections": {
      "angle-intro": {
        "h2": "Cara Mencari Sisi Segi Tiga Tepat Menggunakan Sudut",
        "paragraphs": [
          "Bayangkan sebuah tangga yang disandarkan pada dinding. Anda tahu tangga itu 5 meter panjang dan ia bertemu tanah pada 65 darjah, tetapi setinggi manakah ia mencapai? Kalkulator sisi segi tiga tepat daripada sudut menjawab soalan seperti ini: ia mencari sisi yang hilang apabila anda mengetahui satu sudut tirus dan satu panjang sisi. Satu sisi ditambah satu sudut sudah cukup kerana trigonometri menetapkan bentuk segi tiga itu sepenuhnya. Ketiga-tiga nisbah, sinus, kosinus, dan tangen, masing-masing menghubungkan sudut dengan pasangan sisi yang berbeza. Sinus menghubungkan sisi bertentangan dengan hipotenus, kosinus menghubungkan sisi bersebelahan dengan hipotenus, dan tangen menghubungkan kedua-dua sisi tegak secara langsung. Halaman ini menerangkan nisbah yang sesuai dengan situasi anda, mengapa ia berkesan, dan cara menggunakan kalkulator di atas. Berbeza dengan kalkulator teorem Pythagoras yang memerlukan dua sisi diketahui, alat ini berfungsi dengan satu sisi dan satu sudut sahaja."
        ]
      },
      "angle-anatomy": {
        "h2": "Memahami Sisi dan Sudut Segi Tiga Tepat",
        "h3s": [
          "Apakah Segi Tiga Tepat?",
          "Apakah Hipotenus?",
          "Apakah Sisi Bertentangan dan Sisi Bersebelahan?"
        ],
        "paragraphs": [
          "Segi tiga tepat mengandungi satu sudut tepat 90 darjah, iaitu penjuru yang sama seperti pada sehelai kertas. Dua sudut yang lain adalah tirus, masing-masing lebih kecil daripada 90 darjah, dan jumlahnya sentiasa 90 darjah kerana jumlah tiga sudut mana-mana segi tiga ialah 180. Trigonometri dalam panduan ini hanya terpakai kepada segi tiga tepat: nisbah sinus, kosinus, dan tangen ditakrifkan melalui sudut tepat, jadi menggunakannya pada segi tiga tanpa penjuru 90 darjah akan memberi jawapan yang salah.",
          "Hipotenus terletak bertentangan dengan sudut tepat dan sentiasa menjadi sisi terpanjang antara tiga sisi. Ia mendapat label [[c]] mengikut kebiasaan. Untuk mengesannya dalam rajah yang diputar, cari sisi yang tidak menyentuh penanda sudut tepat. Walau bagaimana segi tiga itu diputar, hipotenus tetap bertentangan dengan sudut tepat.",
          "Pilih satu sudut tirus dan namakannya [[A]]. Sisi tegak yang bertentangan dengan [[A]] ialah sisi bertentangan, dilabelkan [[a]]. Sisi tegak yang membentuk [[A]] bersama hipotenus ialah sisi bersebelahan, dilabelkan [[b]]. Inilah bahagian yang mengelirukan pemula: label bergantung pada sudut yang anda pilih. Sisi tegak yang sama yang bertentangan dengan sudut [[A]] menjadi bersebelahan apabila anda menukar rujukan kepada sudut [[B]]. Hipotenus tidak pernah berubah peranannya. Sepanjang panduan ini, [[a]] bertentangan dengan [[A]], [[b]] bersebelahan dengan [[A]], dan [[c]] ialah hipotenus."
        ],
        "imgAlt": "Segi tiga tepat dengan sudut A di kiri bawah, sisi a bertentangan dan sisi b bersebelahan dengan A, hipotenus c",
        "figcaption": "Anatomi relatif kepada sudut A: sisi a bertentangan dengan A, sisi b bersebelahan dengan A, dan c ialah hipotenus. A + B = 90°."
      },
      "angle-trig": {
        "h2": "Bagaimana Sinus, Kosinus, dan Tangen Membantu Mencari Sisi yang Hilang",
        "h3s": [
          "Memahami Sinus",
          "Memahami Kosinus",
          "Memahami Tangen",
          "Apakah Maksud SOH-CAH-TOA?"
        ],
        "paragraphs": [
          "Nisbah trigonometri ialah hubungan tetap antara dua sisi segi tiga tepat untuk sesuatu sudut yang diberi. Ubah sudut dan nisbah berubah; kekalkan sudut yang sama dan setiap segi tiga dengan sudut itu berkongsi nisbah yang sama, apa pun saiznya. Itulah sebabnya satu sudut ditambah satu sisi menentukan semua yang lain. Setiap satu daripada tiga nisbah ini memadankan sudut dengan gabungan sisi yang berbeza, jadi sisi yang anda ketahui menentukan nisbah yang perlu digunakan.",
          "Sinus membandingkan sisi bertentangan dengan hipotenus: [[\\sin(A) = \\frac{a}{c}]]. Untuk menyelesaikan sisi yang hilang, darabkan kedua-dua belah dengan [[c]]. [[c]] di sebelah kanan terbatal, meninggalkan [[a = c\\sin(A)]]. Dalam kata lain: sisi tegak yang bertentangan sama dengan hipotenus yang diskalakan oleh sinus sudut. Sudut yang lebih besar memberi nilai sinus yang lebih besar, jadi sisi bertentangan membesar apabila sudut terbuka.",
          "Kosinus membandingkan sisi bersebelahan dengan hipotenus: [[\\cos(A) = \\frac{b}{c}]]. Darabkan kedua-dua belah dengan [[c]] dan anda dapat [[b = c\\cos(A)]]. Sisi tegak yang bersebelahan sama dengan hipotenus yang diskalakan oleh kosinus sudut. Apabila sudut [[A]] membesar menghampiri 90 darjah, sisi bersebelahan mengecil menghampiri sifar, yang sepadan dengan geometri: sudut itu memampatkan sisi bersebelahan sehingga rata.",
          "Tangen membandingkan kedua-dua sisi tegak secara langsung: [[\\tan(A) = \\frac{a}{b}]]. Disusun semula kedua-dua arah, ia memberi [[a = b\\tan(A)]] dan [[b = \\frac{a}{\\tan(A)}]]. Gunakan pendaraban apabila sisi tegak yang diketahui bersebelahan dan anda mahukan sisi bertentangan: menskalakan sisi bersebelahan dengan tangen meregangkannya menjadi sisi bertentangan. Gunakan pembahagian apabila sisi tegak yang diketahui bertentangan dan anda mahukan sisi bersebelahan: anda bertanya berapa banyak bahagian bersaiz tangen yang muat dalam sisi bertentangan. Kedua-dua bentuk ini ialah hubungan yang sama dibaca dalam arah bertentangan.",
          "SOH-CAH-TOA ialah alat bantu ingatan, bukan pengganti untuk mengenal pasti sisi dengan betul. SOH: Sinus = Bertentangan / Hipotenus. CAH: Kosinus = Bersebelahan / Hipotenus. TOA: Tangen = Bertentangan / Bersebelahan. Ia membantu anda memilih nisbah selepas anda melabelkan sisi bertentangan, bersebelahan, dan hipotenus relatif kepada sudut anda. Sentiasa labelkan sisi dahulu; mnemonik ini hanya memberitahu pecahan mana yang perlu ditulis selepas itu."
        ],
        "imgAlt": "Tiga panel menunjukkan nisbah sinus, kosinus, dan tangen pada segi tiga tepat yang sama",
        "figcaption": "SOH-CAH-TOA pada satu segi tiga: sinus menggunakan sisi bertentangan dan hipotenus, kosinus menggunakan sisi bersebelahan dan hipotenus, tangen menggunakan kedua-dua sisi tegak."
      },
      "angle-modes": {
        "h2": "Cara Memilih Mod Kalkulator yang Betul",
        "paragraphs": [
          "Mod yang betul bergantung pada dua fakta: sisi mana yang sudah anda ketahui panjangnya, dan sisi mana yang hilang. Cari situasi anda dalam jadual, kemudian baca contoh kerja yang sepadan di bawah."
        ],
        "h3s": [
          "Mod 1: Cari Sisi a Menggunakan Sinus",
          "Mod 2: Cari Sisi b Menggunakan Kosinus",
          "Mod 3: Cari Sisi a Menggunakan Tangen",
          "Mod 4: Cari Sisi b Menggunakan Tangen"
        ],
        "modeParagraphs": [
          "Pilih mod ini apabila anda mengetahui hipotenus dan memerlukan sisi bertentangan dengan sudut. Pastikan sisi yang diketahui ialah sisi yang bertentangan dengan sudut tepat, dan sudut anda ialah sudut tirus yang dihadapi oleh sisi bertentangan. Sinus ialah nisbah yang tepat kerana ia menghubungkan sisi bertentangan dan hipotenus secara langsung. Masukkan panjang hipotenus dan sudut dalam darjah. Hasilnya ialah sisi tegak yang bertentangan.",
          "Pilih mod ini apabila anda mengetahui hipotenus dan memerlukan sisi bersebelahan dengan sudut. Kosinus menghubungkan sisi bersebelahan dan hipotenus, jadi ia menukarkan panjang condong kepada sisi tegak yang berjalan di sebelah sudut. Sisi bersebelahan sentiasa lebih pendek daripada hipotenus, kerana kosinus sudut tirus sentiasa kurang daripada 1.",
          "Pilih mod ini apabila anda mengetahui sisi tegak yang bersebelahan dan memerlukan sisi tegak yang bertentangan. Ini ialah situasi klasik jarak dan sudut dongakan: anda berdiri pada jarak mendatar yang diketahui dan mahukan ketinggian. Tangen menskalakan sisi bersebelahan ke atas (atau ke bawah) menjadi sisi bertentangan. Sudut mengawal nisbah, jadi sudut yang lebih curam bermakna sisi bertentangan yang lebih tinggi untuk tapak yang sama.",
          "Pilih mod ini apabila anda mengetahui sisi tegak yang bertentangan dan memerlukan sisi tegak yang bersebelahan. Ia menjawab soalan seperti: kenaikan sudah tetap, sejauh manakah tapak perlu dilanjutkan ke belakang? Pembahagian dengan tangen membalikkan penskalaan Mod 3: bukannya meregangkan tapak menjadi ketinggian, anda memampatkan ketinggian kembali menjadi tapak."
        ],
        "modeExamples": [
          "<strong>Contoh kerja:</strong> Diberi [[c = 10\\text{ m}]] dan [[A = 30^\\circ]], cari sisi [[a]].",
          "<strong>Contoh kerja:</strong> Diberi [[c = 12\\text{ ft}]] dan [[A = 60^\\circ]], cari sisi [[b]].",
          "<strong>Contoh kerja:</strong> Diberi [[b = 8\\text{ m}]] dan [[A = 35^\\circ]], cari sisi [[a]].",
          "<strong>Contoh kerja:</strong> Diberi [[a = 4\\text{ m}]] dan [[A = 40^\\circ]], cari sisi [[b]]."
        ],
        "modeNotes": [
          "Jawapannya munasabah: pada 30 darjah, sisi bertentangan adalah tepat separuh hipotenus, semakan mudah yang boleh anda lakukan secara mental.",
          "Pada 60 darjah, sisi bersebelahan adalah separuh hipotenus, mencerminkan kes sinus 30 darjah. Kedua-dua sudut tirus bertukar peranan: sisi yang bersebelahan dengan 60° adalah bertentangan dengan 30°.",
          "Kerana 35° berada di bawah 45°, sisi bertentangan keluar lebih pendek daripada sisi bersebelahan, yang sepadan dengan geometri.",
          "Pada 40°, sedikit di bawah 45°, sisi bersebelahan sedikit lebih panjang daripada sisi bertentangan. Perbezaan kecil itu tepat apa yang ditangkap oleh pembahagian."
        ],
        "table": {
          "headers": [
            "Sisi Diketahui",
            "Sudut Diketahui",
            "Sisi Hilang",
            "Formula",
            "Mod Kalkulator",
            "Bila Perlu Digunakan"
          ],
          "rows": [
            [
              "Hipotenus c",
              "A",
              "Sisi a",
              "a = c × sin(A)",
              "Sisi a Dari Sinus",
              "Panjang condong diketahui, perlu sisi bertentangan dengan sudut"
            ],
            [
              "Hipotenus c",
              "A",
              "Sisi b",
              "b = c × cos(A)",
              "Sisi b Dari Kosinus",
              "Panjang condong diketahui, perlu sisi di sebelah sudut"
            ],
            [
              "Sisi b",
              "A",
              "Sisi a",
              "a = b × tan(A)",
              "Sisi a Dari Tangen",
              "Jarak mendatar diketahui, perlu kenaikan menegak"
            ],
            [
              "Sisi a",
              "A",
              "Sisi b",
              "b = a / tan(A)",
              "Sisi b Dari Tangen",
              "Kenaikan menegak diketahui, perlu jarak mendatar"
            ]
          ]
        },
        "imgAlt": "Empat panel membandingkan mod kalkulator sinus, kosinus, dan dua tangen dengan nilai kerja",
        "figcaption": "Keempat-empat mod bersebelahan: sinus dan kosinus bermula dari hipotenus, mod tangen menukar antara kedua-dua sisi tegak."
      },
      "angle-examples": {
        "h2": "Contoh Kehidupan Sebenar Mencari Sisi Segi Tiga Tepat Menggunakan Sudut",
        "intro": "Setiap contoh di bawah mengikut laluan yang sama: kesan segi tiga tepat, namakan sisi dan sudut yang diketahui, pilih nisbah yang menghubungkannya dengan sisi yang hilang, gantikan, kira, dan baca jawapannya kembali dalam konteks. Perhatikan bagaimana pilihan sinus, kosinus, atau tangen terbit daripada geometri setiap kali.",
        "examples": [
          {
            "h3": "Contoh 1: Mencari Ketinggian yang Dicapai Tangga",
            "paragraphs": [
              "Sebuah tangga 5 m disandarkan pada dinding menegak, membentuk sudut 65 darjah dengan tanah yang rata. Dinding, tanah, dan tangga membentuk segi tiga tepat dengan tangga sebagai hipotenus. Diketahui: [[c = 5\\text{ m}]], [[A = 65^\\circ]]. Ketinggian yang hilang bertentangan dengan sudut 65°, jadi sinus sesuai: nisbah itu menghubungkan sisi bertentangan dan hipotenus.",
              "Tangga itu mencapai kira-kira 4.53 m ke atas dinding. Jarak mendatar dari dinding datang daripada kosinus, kerana sisi tegak itu bersebelahan dengan sudut:",
              "Satu hipotenus dan satu sudut memberi kedua-dua sisi tegak. Perhatikan ini hanyalah pengiraan geometri; ia tidak mengatakan apa-apa tentang sama ada susunan tangga itu selamat, jadi ikut panduan pengilang untuk kegunaan sebenar."
            ]
          },
          {
            "h3": "Contoh 2: Mengira Kenaikan Tanjakan",
            "paragraphs": [
              "Tanjakan ringkas sepanjang 12 m secara mendatar naik pada 5 darjah di atas garis mendatar. Larian dan kenaikan ialah sisi tegak segi tiga tepat, dengan larian bersebelahan dengan sudut 5°. Diketahui: [[b = 12\\text{ m}]], [[A = 5^\\circ]]. Kenaikan yang hilang ialah sisi bertentangan, dan tangen menghubungkan sisi bertentangan dengan sisi bersebelahan.",
              "Tanjakan naik kira-kira 1.05 m sepanjang larian 12 m. Bezakan larian mendatar dengan permukaan condong: cerun itu sendiri sedikit lebih panjang daripada 12 m. Hasil ini tidak memperakui tanjakan terhadap peraturan kebolehcapaian atau bangunan."
            ]
          },
          {
            "h3": "Contoh 3: Mencari Kenaikan Menegak Bumbung",
            "paragraphs": [
              "Keratan rentas bumbung mempunyai larian mendatar 4.5 m dengan permukaan bumbung bersudut 30 darjah di atas garis mendatar. Larian bersebelahan dengan sudut dan kenaikan bertentangan, jadi tangen ialah pilihan semula jadi.",
              "Bumbung naik kira-kira 2.60 m. Nada yang lebih curam akan menaikkan nilai tangen dan bersamanya kenaikan, itulah sebabnya sudut bumbung memacu ketinggian loteng secara langsung. Lakaran ringkas ini mengabaikan cucuran atap, papan rabung, dan elaun rangka yang diperlukan oleh pembinaan sebenar."
            ]
          },
          {
            "h3": "Contoh 4: Mengukur Capaian Menegak Kabel",
            "paragraphs": [
              "Kabel 20 m merentang dari tanah ke puncak tiang, membentuk sudut 55 darjah dengan garis mendatar. Kabel ialah hipotenus. Sinus memberi capaian menegak (bertentangan dengan sudut) dan kosinus memberi capaian mendatar (bersebelahan dengannya), jadi satu persediaan menghasilkan kedua-dua sisi tegak.",
              "Kabel mencapai kira-kira 16.38 m secara menegak sambil merentangi 11.47 m secara mendatar. Memadankan sinus dan kosinus seperti ini ialah cara piawai untuk membahagikan sebarang panjang condong kepada bahagian menegak dan mendatar."
            ]
          },
          {
            "h3": "Contoh 5: Menganggar Ketinggian daripada Garis Pandangan",
            "paragraphs": [
              "Garis pandangan ringkas 150 m condong 12 darjah di atas rujukan mendatar. Dengan menganggap garis pandangan sebagai hipotenus segi tiga tepat, sinus mengekstrak perbezaan menegak dan kosinus jarak mendatar.",
              "Titik jauh terletak kira-kira 31.19 m di atas aras rujukan dan 146.72 m jauhnya secara mendatar. Ukur sebenar akan melapisi pembetulan untuk bentuk muka bumi, ketinggian alat, dan kesan atmosfera; ini ialah geometri mentah di bawahnya."
            ]
          },
          {
            "h3": "Contoh 6: Menganggar Ketinggian Pokok",
            "paragraphs": [
              "Anda berdiri 25 m secara mendatar dari batang pokok di tanah rata, dan sudut dongakan ke puncak pokok ialah 38 darjah. Jarak mendatar ialah sisi bersebelahan dan ketinggian pokok di atas aras mata anda ialah sisi bertentangan, jadi tangen merapatkan keduanya.",
              "Puncak pokok kira-kira 19.53 m di atas aras pemerhatian. Jika anda mengukur dari ketinggian mata dan bukan aras tanah, tambahkan ketinggian mata anda untuk mendapatkan ketinggian penuh pokok. Kaedah ini menganggap tanah rata antara anda dan batang pokok."
            ]
          },
          {
            "h3": "Contoh 7: Mengira Ofset Pendakap Mekanikal",
            "paragraphs": [
              "Reka bentuk pendakap memerlukan sisi mendatar 600 mm yang bertemu sisi menegak pada 25 darjah dari garis mendatar. Anggota mendatar bersebelahan dengan sudut; ofset menegak yang anda perlukan bertentangan dengannya.",
              "Ofset menegak ialah kira-kira 279.78 mm. Panjang mendatar yang sama menghasilkan ofset yang lebih tinggi apabila sudut membesar, itulah sebabnya perubahan sudut yang kecil penting dalam padanan mekanikal yang ketat. Dimensi ini sahaja tidak membuktikan pendakap kukuh dari segi struktur."
            ]
          },
          {
            "h3": "Contoh 8: Mencari Sisi Bertentangan daripada Hipotenus",
            "paragraphs": [
              "Sebuah segi tiga tepat mempunyai hipotenus 8 m dengan sudut tirus 42 darjah. Sisi yang bertentangan dengan sudut tidak diketahui. Memandangkan hipotenus dan sisi bertentangan ialah pasangan sinus, satu pendaraban menyelesaikannya.",
              "Sisi bertentangan ialah kira-kira 5.35 m. Sinus sentiasa menukarkan ukuran hipotenus kepada sisi tegak yang menghadap sudut, tanpa perlu disusun semula."
            ]
          },
          {
            "h3": "Contoh 9: Mencari Jarak Mendatar daripada Ukuran Menegak",
            "paragraphs": [
              "Sebuah segi tiga tepat mempunyai sisi bertentangan 3.2 m dan sudutnya 28 darjah. Sisi bersebelahan tidak diketahui. Tangen sama dengan sisi bertentangan dibahagi sisi bersebelahan, jadi menyelesaikan sisi bersebelahan bermakna membahagikan sisi bertentangan yang diketahui dengan tangen.",
              "Jarak mendatar ialah kira-kira 6.02 m. Setiap kali sisi yang diketahui terletak dalam pengangka nisbah, pembahagian ialah cara untuk mengasingkan sisi yang tidak diketahui."
            ]
          },
          {
            "h3": "Contoh 10: Menganggar Ofset Menegak Bangunan",
            "paragraphs": [
              "Garis pemerhatian ringkas 80 ft condong 25 darjah di atas garis mendatar. Garis itu ialah hipotenus dan komponen menegak bertentangan dengan sudut, memerlukan sinus.",
              "Komponen menegak ialah kira-kira 33.81 ft. Sudut yang lebih besar akan menolak lebih banyak daripada 80 ft ke bahagian menegak dan kurang ke bahagian mendatar. Anggap ini sebagai anggaran geometri kasar, bukan pengganti untuk ukur bangunan yang betul."
            ]
          },
          {
            "h3": "Contoh 11: Mengira Kenaikan Laluan Pejalan Kaki yang Condong",
            "paragraphs": [
              "Laluan pejalan kaki sepanjang 6 m secara mendatar pada kecerunan 8 darjah. Larian bersebelahan dengan sudut dan kenaikan bertentangan, jadi tangen terpakai secara langsung.",
              "Laluan pejalan kaki naik kira-kira 0.84 m. Kenaikan berskala dengan kedua-dua larian dan tangen sudut, jadi menggandakan larian menggandakan kenaikan pada sudut tetap. Semak kod tempatan secara berasingan untuk pematuhan cerun."
            ]
          },
          {
            "h3": "Contoh 12: Mencari Ofset Mendatar daripada Kenaikan Diketahui",
            "paragraphs": [
              "Sebuah struktur mempunyai ofset menegak 2 m, dan pepenjurunya membentuk sudut 35 darjah dengan garis mendatar. Sisi menegak bertentangan dengan sudut dan ofset mendatar bersebelahan, jadi tangen mesti dibahagikan keluar.",
              "Ofset mendatar ialah kira-kira 2.86 m. Mengetahui kenaikan dan sudut menetapkan tapak sepenuhnya, iaitu cara jarak anjakan diperoleh daripada kekangan ketinggian."
            ]
          }
        ],
        "table": {
          "headers": [
            "Situasi",
            "Sisi Diketahui",
            "Sudut Diketahui",
            "Nisbah",
            "Sisi Dikira"
          ],
          "rows": [
            [
              "Ketinggian tangga",
              "c = 5 m",
              "65°",
              "Sinus",
              "a ≈ 4.53 m"
            ],
            [
              "Kenaikan tanjakan",
              "b = 12 m",
              "5°",
              "Tangen",
              "a ≈ 1.05 m"
            ],
            [
              "Kenaikan bumbung",
              "b = 4.5 m",
              "30°",
              "Tangen",
              "a ≈ 2.60 m"
            ],
            [
              "Capaian kabel",
              "c = 20 m",
              "55°",
              "Sinus / Kosinus",
              "a ≈ 16.38 m, b ≈ 11.47 m"
            ],
            [
              "Garis pandangan",
              "c = 150 m",
              "12°",
              "Sinus / Kosinus",
              "a ≈ 31.19 m, b ≈ 146.72 m"
            ],
            [
              "Ketinggian pokok",
              "b = 25 m",
              "38°",
              "Tangen",
              "a ≈ 19.53 m"
            ],
            [
              "Ofset pendakap",
              "b = 600 mm",
              "25°",
              "Tangen",
              "a ≈ 279.78 mm"
            ],
            [
              "Sisi bertentangan dari hipotenus",
              "c = 8 m",
              "42°",
              "Sinus",
              "a ≈ 5.35 m"
            ],
            [
              "Sisi bersebelahan dari sisi bertentangan",
              "a = 3.2 m",
              "28°",
              "Tangen",
              "b ≈ 6.02 m"
            ],
            [
              "Ofset bangunan",
              "c = 80 ft",
              "25°",
              "Sinus",
              "a ≈ 33.81 ft"
            ],
            [
              "Kenaikan laluan pejalan kaki",
              "b = 6 m",
              "8°",
              "Tangen",
              "a ≈ 0.84 m"
            ],
            [
              "Jarak mendatar dari kenaikan",
              "a = 2 m",
              "35°",
              "Tangen",
              "b ≈ 2.86 m"
            ]
          ]
        },
        "imgAlt": "Empat panel: ketinggian tangga, kenaikan tanjakan, kenaikan bumbung, dan ketinggian pokok diselesaikan dengan trigonometri",
        "figcaption": "Trigonometri sedang bekerja: ketinggian tangga (4.53 m), tanjakan (1.05 m), bumbung (2.60 m), dan pokok (19.53 m) daripada satu sisi dan satu sudut."
      },
      "angle-effect": {
        "h2": "Bagaimana Sudut Mempengaruhi Sisi yang Hilang",
        "paragraphs": [
          "Tetapkan hipotenus dan biarkan sudut membesar: sisi bertentangan meregang manakala sisi bersebelahan mengecut. Sudut bertindak seperti dail yang membahagikan hipotenus antara kedua-dua sisi tegak. Pada 0 darjah, sisi bertentangan hilang dan sisi bersebelahan sama dengan seluruh hipotenus; pada 90 darjah, sebaliknya berlaku. Tangen berkelakuan lebih dramatik kerana ia tiada hipotenus untuk berlabuh: apabila sudut menghampiri 90 darjah, sisi bertentangan menjulang melebihi sisi bersebelahan yang mengecut dan tangen memanjat tanpa batas.",
          "Dua segi tiga boleh berkongsi sudut tirus yang sama tetapi berbeza sepenuhnya dari segi saiz. Sudut menetapkan bentuk, bermakna semua nisbah sisi sepadan adalah sama, manakala hipotenus menetapkan skala. Segi tiga seperti itu adalah serupa: tangga 5 m pada 65° dan tangga 10 m pada 65° mencapai ketinggian dalam perkadaran tepat 1:2. Jadual di bawah menunjukkan kesan dail ini untuk hipotenus 10 unit.",
          "Pada 45° kedua-dua sisi tegak seimbang tepat dan tangen sama dengan 1. Perhatikan simetrinya: baris 30° mencerminkan baris 60° dengan sisi tegak bertukar, kerana sisi yang bertentangan dengan 30° bersebelahan dengan 60°."
        ],
        "table": {
          "headers": [
            "Sudut A",
            "Opposite a = 10 × sin(A)",
            "Adjacent b = 10 × cos(A)",
            "tan(A) = a / b"
          ],
          "rows": [
            [
              "30°",
              "≈ 5.00",
              "≈ 8.66",
              "≈ 0.577"
            ],
            [
              "45°",
              "≈ 7.07",
              "≈ 7.07",
              "≈ 1.000"
            ],
            [
              "60°",
              "≈ 8.66",
              "≈ 5.00",
              "≈ 1.732"
            ]
          ]
        }
      },
      "angle-degrees": {
        "h2": "Mengapa Tetapan Sudut yang Betul Penting",
        "paragraphs": [
          "Sudut boleh diukur dalam darjah atau radian, dan kedua-dua skala ini sama sekali tidak bersetuju tentang maksud sesuatu nombor. Satu bulatan penuh ialah 360 darjah tetapi hanya kira-kira 6.283 radian. Kalkulator ini menjangkakan darjah: memasukkan 30 bermakna 30°, dan [[\\sin(30^\\circ) = 0.5]]. Jika 30 yang sama dibaca sebagai radian, sinusnya ialah kira-kira −0.988, jawapan yang sangat berbeza tanpa sebarang amaran.",
          "Perangkap ini berfungsi sebaliknya juga. Katakan sudut anda datang daripada pengiraan yang menghasilkan radian, misalnya 0.5 rad (kira-kira 28.65°). Menaip 0.5 ke dalam kalkulator mod darjah mengira sin(0.5°) ≈ 0.0087 dan bukannya sin(0.5 rad) ≈ 0.479. Sentiasa pastikan unit sudut anda sebelum memasukkannya. Membundarkan sudut terlalu awal juga menjejaskan ketepatan: pada sudut curam, sepersepuluh darjah menggerakkan tangen dengan ketara, jadi kekalkan ketepatan sudut penuh sehingga langkah terakhir."
        ]
      },
      "angle-howto": {
        "h2": "Panduan Langkah demi Langkah Menggunakan Kalkulator",
        "steps": [
          "Pastikan segi tiga tepat. Cari penjuru 90 darjah dalam lakaran atau situasi anda; tanpanya, formula ini tidak terpakai.",
          "Kenal pasti sudut A. Pilih sudut tirus yang dirujuk oleh ukuran anda. Sudut tirus yang satu lagi ialah 90° tolak sudut ini.",
          "Labelkan sisi. Tandakan hipotenus c, kemudian labelkan a sebagai sisi tegak yang bertentangan dengan A dan b sebagai sisi tegak yang bersebelahan dengan A.",
          "Catat sisi mana yang anda ketahui. Adakah ia hipotenus atau salah satu sisi tegak? Fakta tunggal ini menyempitkan pilihan kepada dua mod.",
          "Pilih mod yang sepadan. Hipotenus diketahui dan sisi a hilang: Sisi a Dari Sinus. Hipotenus diketahui dan sisi b hilang: Sisi b Dari Kosinus. Sisi b diketahui dan sisi a hilang: Sisi a Dari Tangen. Sisi a diketahui dan sisi b hilang: Sisi b Dari Tangen.",
          "Masukkan panjang sisi dan unitnya. Gunakan keluarga unit yang sama yang akan anda laporkan jawapannya.",
          "Masukkan sudut A dalam darjah. Semak semula bahawa ia tirus, iaitu antara 0° dan 90°.",
          "Kira. Sisi yang hilang muncul dengan langkah penyelesaian yang menunjukkan penggantian.",
          "Baca langkahnya. Pastikan kalkulator menggunakan nisbah yang anda maksudkan dan nombornya sepadan dengan input anda.",
          "Semak kewarasan hasilnya. Sisi tegak mesti lebih pendek daripada hipotenus. Jika anda menyelesaikan daripada hipotenus, kedua-dua sisi tegak daripada sinus dan kosinus harus memenuhi a² + b² = c²."
        ],
        "paragraphs": [
          "Jika antara muka menawarkan kawalan set semula, gunakannya untuk mengosongkan medan sebelum memulakan pengiraan baharu supaya tiada nilai lama bocor ke dalam hasil seterusnya."
        ]
      },
      "angle-mistakes": {
        "h2": "Kesilapan Lazim Ketika Mencari Sisi Segi Tiga daripada Sudut",
        "paragraphs": [
          "<strong>1. Tertukar sisi bertentangan dan sisi bersebelahan.</strong> Penandaan adalah relatif kepada sudut A, dan menukar kedua-dua sisi tegak menukar sinus dengan kosinus. Betulkan: labelkan sisi pada lakaran anda sebelum menyentuh kalkulator.",
          "<strong>2. Memilih sinus apabila tangen diperlukan.</strong> Dengan sisi tegak yang diketahui dan tiada hipotenus kelihatan, sinus tiada apa untuk digenggam. Jika sisi yang anda ketahui ialah sisi tegak, jawapannya melibatkan tangen. Contoh: b = 8 m, A = 35° memerlukan a = 8·tan(35°), bukan 8·sin(35°).",
          "<strong>3. Menggunakan formula tangen yang salah.</strong> Mencari sisi bertentangan mendarab dengan tangen; mencari sisi bersebelahan membahagi dengannya. Hafal arahnya: a = b·tan(A) membesarkan tapak menjadi ketinggian, b = a/tan(A) mengecilkan ketinggian kembali menjadi tapak.",
          "<strong>4. Memasukkan sudut dalam unit yang salah.</strong> Nilai radian yang ditaip sebagai darjah (atau sebaliknya) secara senyap menghasilkan sampah. Pastikan darjah dahulu; kalkulator ini berfungsi dalam darjah.",
          "<strong>5. Menganggap hipotenus sebagai sisi tegak biasa.</strong> Hipotenus hanya berpasangan dengan sinus dan kosinus, tidak pernah dengan tangen. Jika formula anda ada tan dan hipotenus, sesuatu telah tersalah label.",
          "<strong>6. Menggunakan sudut rujukan yang salah.</strong> 65° dalam contoh tangga diukur dari tanah. Mengukur dari dinding sebaliknya akan menjadikannya 25°, dan setiap nisbah akan berubah. Sentiasa semak dari sisi mana sudut itu terbuka.",
          "<strong>7. Mencampuradukkan meter, kaki, atau unit lain.</strong> Hipotenus dalam kaki dengan jawapan yang dijangka dalam meter memerlukan penukaran sebelum atau selepas, tidak boleh dilangkau. Kekalkan satu unit sepanjang pengiraan.",
          "<strong>8. Membundarkan nilai perantaraan terlalu awal.</strong> Membundarkan tan(35°) kepada 0.7 sebelum mendarab dengan 8 memberi 5.6 secara kebetulan di sini, tetapi pembundaran yang lebih kasar di tempat lain menyesatkan jawapan. Kekalkan ketepatan penuh sehingga hasil akhir.",
          "<strong>9. Menganggap sisi bertentangan dengan sudut sentiasa yang terpanjang.</strong> Sisi bertentangan hanya terpanjang apabila sudut melebihi 45°. Pada 30°, sisi tegak yang bertentangan ialah sisi terpendek segi tiga.",
          "<strong>10. Menggunakan trigonometri pada segi tiga bukan tepat.</strong> Tanpa sudut 90°, sinus, kosinus, dan tangen seperti yang ditakrifkan di sini tidak terpakai. Segi tiga tumpul dan segi tiga tirus memerlukan Hukum Sinus dan Kosinus sebaliknya.",
          "<strong>11. Memasukkan sudut di luar julat tirus.</strong> Sudut 0°, 90°, atau lebih meruntuhkan segi tiga atau menggambarkan bentuk yang berbeza. Kalkulator memerlukan sudut antara 0° dan 90°.",
          "<strong>12. Tidak mempercayai output kecil tetapi betul.</strong> Tanjakan 5° sepanjang 12 m memang naik hanya kira-kira 1.05 m. Sudut kecil menghasilkan sisi bertentangan yang kecil; itulah geometrinya, bukan ralat."
        ]
      },
      "angle-validation": {
        "h2": "Memeriksa Sama Ada Keputusan Anda Sah dari Segi Matematik",
        "paragraphs": [
          "Panjang sisi mestilah nombor positif; panjang sifar atau negatif tidak menggambarkan sebarang segi tiga. Mana-mana sisi tegak yang anda kira mesti keluar lebih pendek daripada hipotenus yang anda masukkan. Sudut rujukan mestilah tirus, iaitu antara 0° dan 90°, dan setiap panjang dalam masalah mesti berkongsi satu unit.",
          "Tangen wajar mendapat perhatian lebih berhampiran hujung julatnya. Apabila sudut menghampiri 90°, tangen memanjat dengan curam, jadi sedikit goyangan pada sudut mengayunkan hasil dengan dramatik. Berhampiran 0°, tangen adalah kecil, dan membahagi dengannya (mod b = a/tan(A)) membesarkan sebarang hingar ukuran dengan cara yang sama. Apabila sudut anda terletak dalam beberapa darjah dari mana-mana hujung, anggap input sebagai anggaran dan output sebagai sensitif dan bukannya tepat."
        ]
      },
      "angle-verify": {
        "h2": "Cara Menyemak Jawapan Anda",
        "paragraphs": [
          "<strong>Kaedah 1: Gantikan kembali ke dalam nisbah.</strong> Bahagikan jawapan anda dengan sisi yang diketahui dan pastikan nisbah sepadan dengan nilai trigonometri. Jika anda menemui a = 5 daripada c = 10 pada 30°, semak bahawa 5/10 = 0.5 = sin(30°).",
          "<strong>Kaedah 2: Gunakan teorem Pythagoras.</strong> Apabila anda mengetahui dua sisi selepas pengiraan, pastikan bahawa a² + b² = c². Ini menyemak silang trigonometri dengan geometri tulen.",
          "<strong>Kaedah 3: Semak saiz relatif.</strong> Setiap sisi tegak mesti lebih pendek daripada hipotenus. Sisi tegak yang bertentangan dengan sudut tirus yang lebih besar mestilah sisi tegak yang lebih panjang. Pada 30°, jangkakan sisi tegak yang bertentangan menjadi yang lebih pendek.",
          "<strong>Pengesahan kerja:</strong> daripada c = 10 m dan A = 30°, kalkulator memberi a = 5 m. Cari sisi tegak yang satu lagi: b = 10·cos(30°) ≈ 8.66 m. Sekarang semak Pythagoras dengan nilai yang tidak dibundarkan:",
          "Kesamaan itu berlaku, hipotenus adalah yang terpanjang, dan 5 &lt; 8.66 sepadan dengan geometri 30°. Sebarang ketidakpadanan kecil datang daripada pembundaran 8.66, jadi sahkan dengan nilai yang tidak dibundarkan apabila ketepatan penting."
        ]
      },
      "angle-other": {
        "h2": "Memilih Kalkulator Segi Tiga Tepat yang Sesuai",
        "paragraphs": [
          "<strong>Dua sisi diketahui, tiada sudut:</strong> Kalkulator Sisi Segi Tiga Tepat menggunakan teorem Pythagoras secara langsung.",
          "<strong>Sudut hilang, sisi diketahui:</strong> Kalkulator Sudut Segi Tiga Tepat menggunakan sinus, kosinus, atau tangen songsang.",
          "<strong>Luas diperlukan:</strong> Kalkulator Luas Segi Tiga Tepat mengiranya daripada sisi tegak atau input lain.",
          "<strong>Segi tiga 30-60-90 atau 45-45-90:</strong> Kalkulator Segi Tiga Tepat Khas menggunakan nisbah tepatnya.",
          "<strong>Hanya nilai nisbah:</strong> Kalkulator Nisbah Trigonometri menilai sin, cos, dan tan tanpa menyelesaikan sisi.",
          "<strong>Semua sekali gus:</strong> Kalkulator Segi Tiga Tepat menyelesaikan segi tiga penuh, sudut, luas, dan sifat terbitan daripada mana-mana dua input yang sah."
        ],
        "linkAnchors": [
          "Kalkulator Sisi Segi Tiga Tepat",
          "Kalkulator Sudut Segi Tiga Tepat",
          "Kalkulator Luas Segi Tiga Tepat",
          "Kalkulator Segi Tiga Tepat Khas",
          "Kalkulator Nisbah Trigonometri",
          "Kalkulator Segi Tiga Tepat"
        ]
      },
      "angle-conclusion": {
        "h2": "Cari Sisi yang Hilang dengan Formula yang Betul",
        "paragraphs": [
          "Mulakan dengan melabel: sisi bertentangan, sisi bersebelahan, dan hipotenus relatif kepada sudut anda. Biarkan sisi yang diketahui memilih nisbah: hipotenus di tangan bermakna sinus atau kosinus, sisi tegak di tangan bermakna tangen. Masukkan sudut dalam darjah, kekalkan ketepatan penuh sehingga akhir, dan sahkan dengan Pythagoras atau semakan saiz pantas. Cuba kalkulator di atas dengan nombor anda sendiri."
        ]
      }
    },
    "faqs": [
      {
        "question": "Bagaimanakah cara mencari sisi yang hilang menggunakan sudut?",
        "answer": "Labelkan sisi relatif kepada sudut: bertentangan, bersebelahan, hipotenus. Pilih nisbah yang mengandungi sisi yang diketahui dan sisi yang hilang. Dengan hipotenus dan sudut, gunakan a = c·sin(A) atau b = c·cos(A). Dengan satu sisi tegak dan sudut, gunakan a = b·tan(A) atau b = a/tan(A). Gantikan dan kira."
      },
      {
        "question": "Formula manakah yang harus saya gunakan untuk sisi bertentangan?",
        "answer": "Bergantung pada apa yang anda ketahui. Dengan hipotenus, gunakan a = c·sin(A). Dengan sisi tegak yang bersebelahan, gunakan a = b·tan(A). Kedua-duanya memberi sisi yang bertentangan dengan sudut A; sisi yang diketahui menentukan bentuk mana yang terpakai."
      },
      {
        "question": "Bagaimanakah cara mencari sisi bersebelahan menggunakan sudut?",
        "answer": "Dengan hipotenus diketahui, gunakan b = c·cos(A). Dengan sisi tegak yang bertentangan diketahui, gunakan b = a/tan(A). Sisi bersebelahan sentiasa berjalan di sebelah sudut A, jadi pastikan penandaan anda sebelum memilih."
      },
      {
        "question": "Apakah perbezaan antara sinus, kosinus, dan tangen?",
        "answer": "Sinus menghubungkan sisi bertentangan dengan hipotenus, kosinus menghubungkan sisi bersebelahan dengan hipotenus, dan tangen menghubungkan sisi bertentangan dengan sisi bersebelahan. Sinus dan kosinus membahagikan panjang condong kepada bahagian; tangen menukar secara langsung antara kedua-dua sisi tegak. Ketiga-tiganya menggambarkan sudut yang sama dari sisi yang berbeza."
      },
      {
        "question": "Apakah maksud SOH-CAH-TOA?",
        "answer": "Alat bantu ingatan: Sinus = Bertentangan/Hipotenus, Kosinus = Bersebelahan/Hipotenus, Tangen = Bertentangan/Bersebelahan. Ia mengingatkan anda pecahan mana yang sepadan dengan setiap nisbah selepas anda melabelkan sisi. Ia tidak menggantikan langkah penandaan."
      },
      {
        "question": "Bolehkah saya mencari sisi jika saya mengetahui hipotenus dan satu sudut?",
        "answer": "Ya, ini ialah kes paling mudah. Darabkan hipotenus dengan sin(A) untuk sisi tegak yang bertentangan atau dengan cos(A) untuk sisi tegak yang bersebelahan. Satu sudut ditambah hipotenus menentukan seluruh segi tiga."
      },
      {
        "question": "Bolehkah saya mencari sisi jika saya mengetahui satu sisi tegak dan satu sudut?",
        "answer": "Ya, dengan tangen. Jika sisi tegak yang diketahui bersebelahan, darabkan dengan tan(A) untuk mendapatkan sisi tegak yang bertentangan. Jika sisi tegak yang diketahui bertentangan, bahagikan dengan tan(A) untuk mendapatkan sisi tegak yang bersebelahan. Tiada hipotenus diperlukan."
      },
      {
        "question": "Perlukah saya memasukkan sudut dalam darjah atau radian?",
        "answer": "Masukkan darjah. Kalkulator ini mentafsir input sudut sebagai darjah, jadi 30 bermakna 30°. Nilai radian yang dimasukkan sebagai darjah memberi hasil yang salah tanpa amaran. Tukarkan radian kepada darjah dahulu dengan mendarab 180/π."
      },
      {
        "question": "Mengapa formula tangen menggunakan pembahagian dalam satu mod?",
        "answer": "Kerana tangen sama dengan sisi bertentangan dibahagi sisi bersebelahan. Menyelesaikan tan(A) = a/b untuk sisi bertentangan memberi pendaraban, a = b·tan(A). Menyelesaikan persamaan yang sama untuk sisi bersebelahan memberi pembahagian, b = a/tan(A). Satu hubungan, dibaca dua cara."
      },
      {
        "question": "Bolehkah dua segi tiga berbeza mempunyai sudut yang sama?",
        "answer": "Ya. Sudut menetapkan bentuk tetapi bukan saiz, jadi segi tiga kecil dan besar boleh berkongsi setiap sudut. Nisbah sisinya sepadan tepat; hanya skalanya berbeza. Ini ialah segi tiga serupa."
      },
      {
        "question": "Bagaimanakah cara saya mengesahkan sisi yang dikira?",
        "answer": "Gantikan kembali ke dalam nisbah, contohnya semak bahawa a/c sama dengan sin(A). Atau gunakan Pythagoras: dengan dua sisi diketahui, pastikan a² + b² = c². Juga semak bahawa setiap sisi tegak lebih pendek daripada hipotenus dan bersaiz munasabah untuk sudut itu."
      },
      {
        "question": "Mengapa hasil berasaskan tangen menjadi sensitif berhampiran 90 darjah?",
        "answer": "Tangen membesar tanpa batas apabila sudut menghampiri 90°, jadi perubahan kecil pada sudut menghasilkan perubahan besar pada hasil. Berhampiran 0° masalah sebaliknya muncul apabila membahagi dengan tangen yang kecil. Kekalkan ketepatan tambahan pada sudut untuk input berhampiran mana-mana hujung."
      }
    ],
    "relatedHeading": "Kalkulator Segi Tiga Tepat Lain yang Mungkin Berguna untuk Anda",
    "relatedIntro": "Selepas mencari sisi yang hilang, teruskan dengan kalkulator berkaitan ini untuk melengkapkan analisis segi tiga anda.",
    "relatedItems": [
      "Kalkulator Segi Tiga Tepat",
      "Kalkulator Sisi Segi Tiga Tepat",
      "Kalkulator Sudut Segi Tiga Tepat",
      "Kalkulator Nisbah Trigonometri",
      "Kalkulator Luas Segi Tiga Tepat",
      "Kalkulator Segi Tiga Tepat Khas"
    ]
  },

  "pl":   {
    "faqs": [
      {
        "answer": "Oznacz boki względem kąta: naprzeciwległy, przyległy, przeciwprostokątna. Wybierz funkcję zawierającą znany bok i brakujący bok. Przy przeciwprostokątnej i kącie użyj a = c·sin(A) lub b = c·cos(A). Przy jednej przyprostokątnej i kącie użyj a = b·tan(A) lub b = a/tan(A). Podstaw i oblicz.",
        "question": "Jak znaleźć brakujący bok za pomocą kąta?"
      },
      {
        "answer": "Zależy, co znasz. Przy przeciwprostokątnej użyj a = c·sin(A). Przy przyległej przyprostokątnej użyj a = b·tan(A). Oba dają bok naprzeciw kąta A; to znany bok decyduje, która forma ma zastosowanie.",
        "question": "Którego wzoru użyć dla boku naprzeciwległego?"
      },
      {
        "answer": "Przy znanej przeciwprostokątnej użyj b = c·cos(A). Przy znanej przyprostokątnej naprzeciwległej użyj b = a/tan(A). Przyległa przyprostokątna zawsze biegnie wzdłuż kąta A, więc przed wyborem potwierdź oznaczenia.",
        "question": "Jak znaleźć bok przyległy za pomocą kąta?"
      },
      {
        "answer": "Sinus wiąże bok naprzeciwległy z przeciwprostokątną, cosinus bok przyległy z przeciwprostokątną, a tangens bok naprzeciwległy z przyległym. Sinus i cosinus rozkładają długość pochyloną na części; tangens zamienia bezpośrednio między przyprostokątnymi. Wszystkie trzy opisują ten sam kąt z różnych stron.",
        "question": "Czym różnią się sinus, cosinus i tangens?"
      },
      {
        "answer": "Pomoc w zapamiętaniu: sinus = bok naprzeciwległy / przeciwprostokątna, cosinus = bok przyległy / przeciwprostokątna, tangens = bok naprzeciwległy / bok przyległy. Przypomina, który ułamek pasuje do każdej funkcji po oznaczeniu boków. Nie zastępuje kroku oznaczania.",
        "question": "Co oznacza SOH-CAH-TOA?"
      },
      {
        "answer": "Tak, to najprostszy przypadek. Pomnóż przeciwprostokątną przez sin(A), aby uzyskać przyprostokątną naprzeciwległą, lub przez cos(A), aby uzyskać przyległą. Jeden kąt i przeciwprostokątna wyznaczają cały trójkąt.",
        "question": "Czy mogę znaleźć bok, znając przeciwprostokątną i jeden kąt?"
      },
      {
        "answer": "Tak, za pomocą tangensa. Jeśli znana przyprostokątna jest przyległa, pomnóż przez tan(A), aby uzyskać naprzeciwległą. Jeśli znana przyprostokątna jest naprzeciwległa, podziel przez tan(A), aby uzyskać przyległą. Przeciwprostokątna nie jest potrzebna.",
        "question": "Czy mogę znaleźć bok, znając jedną przyprostokątną i jeden kąt?"
      },
      {
        "answer": "Wpisuj stopnie. Ten kalkulator interpretuje dane kątowe jako stopnie, więc 30 oznacza 30°. Wartość w radianach wpisana jako stopnie daje błędny wynik bez ostrzeżenia. Najpierw przelicz radiany na stopnie, mnożąc przez 180/π.",
        "question": "Czy kąty wpisywać w stopniach czy radianach?"
      },
      {
        "answer": "Ponieważ tangens równa się bokowi naprzeciwległemu podzielonemu przez przyległy. Rozwiązanie tan(A) = a/b względem przyprostokątnej naprzeciwległej daje mnożenie, a = b·tan(A). Rozwiązanie tego samego równania względem przyległej daje dzielenie, b = a/tan(A). Jedna zależność odczytana na dwa sposoby.",
        "question": "Dlaczego wzór z tangensem w jednym trybie używa dzielenia?"
      },
      {
        "answer": "Tak. Kąt ustala kształt, ale nie rozmiar, więc mały i duży trójkąt mogą mieć wszystkie kąty wspólne. Ich proporcje boków zgadzają się dokładnie; różni się tylko skala. To trójkąty podobne.",
        "question": "Czy dwa różne trójkąty mogą mieć ten sam kąt?"
      },
      {
        "answer": "Podstaw z powrotem do funkcji, na przykład sprawdź, że a/c równa się sin(A). Albo użyj Pitagorasa: przy dwóch znanych bokach potwierdź a² + b² = c². Sprawdź też, że każda przyprostokątna jest krótsza od przeciwprostokątnej i ma sensowny rozmiar dla kąta.",
        "question": "Jak zweryfikować obliczony bok?"
      },
      {
        "answer": "Tangens rośnie bez ograniczeń, gdy kąt zbliża się do 90°, więc drobna zmiana kąta powoduje dużą zmianę wyniku. Blisko 0° pojawia się odwrotny problem przy dzieleniu przez malutki tangens. Zachowaj dodatkową precyzję kąta przy danych wejściowych blisko któregokolwiek krańca.",
        "question": "Dlaczego wyniki oparte na tangensie stają się wrażliwe blisko 90 stopni?"
      }
    ],
    "relatedHeading": "Inne kalkulatory trójkąta prostokątnego, które mogą się przydać",
    "relatedIntro": "Po znalezieniu brakującego boku kontynuuj z tymi powiązanymi kalkulatorami, aby dopełnić analizę trójkąta.",
    "relatedItems": [
      "Kalkulator trójkąta prostokątnego",
      "Kalkulator boku trójkąta prostokątnego",
      "Kalkulator kąta trójkąta prostokątnego",
      "Kalkulator funkcji trygonometrycznych",
      "Kalkulator pola trójkąta prostokątnego",
      "Kalkulator specjalnych trójkątów prostokątnych"
    ],
    "sections": {
      "angle-anatomy": {
        "figcaption": "Budowa względem kąta A: bok a leży naprzeciw A, bok b przylega do A, a c to przeciwprostokątna. A + B = 90°.",
        "h2": "Boki i kąty trójkąta prostokątnego",
        "h3s": [
          "Czym jest trójkąt prostokątny?",
          "Czym jest przeciwprostokątna?",
          "Czym są bok naprzeciwległy i bok przyległy?"
        ],
        "imgAlt": "Trójkąt prostokątny z kątem A w lewym dolnym rogu, przyprostokątne a (naprzeciw A) i b (przylegająca do A), przeciwprostokątna c",
        "paragraphs": [
          "Trójkąt prostokątny zawiera jeden kąt równy dokładnie 90 stopni, ten sam róg, który widzisz na kartce papieru. Pozostałe dwa kąty są ostre, każdy mniejszy niż 90 stopni, i zawsze sumują się do 90 stopni, ponieważ trzy kąty każdego trójkąta dają łącznie 180. Trygonometria w tym przewodniku dotyczy wyłącznie trójkątów prostokątnych: funkcje sinus, cosinus i tangens są zdefiniowane przez kąt prosty, więc stosowanie ich do trójkąta bez kąta 90 stopni daje błędne wyniki.",
          "Przeciwprostokątna leży naprzeciw kąta prostego i jest zawsze najdłuższym z trzech boków. Zgodnie z konwencją oznacza się ją jako [[c]]. Aby ją rozpoznać na obróconym rysunku, znajdź bok, który nie styka się z oznaczeniem kąta prostego. Niezależnie od tego, jak trójkąt jest obrócony, przeciwprostokątna pozostaje naprzeciw kwadratowego rogu.",
          "Wybierz jeden kąt ostry i nazwij go [[A]]. Przyprostokątna leżąca naprzeciw [[A]] to bok naprzeciwległy, oznaczany jako [[a]]. Przyprostokątna, która wraz z przeciwprostokątną tworzy [[A]], to bok przyległy, oznaczany jako [[b]]. Oto część, która sprawia trudność początkującym: oznaczenia zależą od wybranego kąta. Ta sama przyprostokątna, która jest naprzeciwległa do kąta [[A]], staje się przyległa, gdy punktem odniesienia stanie się kąt [[B]]. Przeciwprostokątna nigdy nie zmienia swojej roli. W całym tym przewodniku [[a]] leży naprzeciw [[A]], [[b]] przylega do [[A]], a [[c]] to przeciwprostokątna."
        ]
      },
      "angle-conclusion": {
        "h2": "Znajdź brakujący bok właściwym wzorem",
        "paragraphs": [
          "Zacznij od oznaczenia: bok naprzeciwległy, przyległy i przeciwprostokątna względem twojego kąta. Niech znany bok wybierze funkcję: przeciwprostokątna w ręku oznacza sinus lub cosinus, przyprostokątna w ręku oznacza tangens. Wpisz kąt w stopniach, zachowaj pełną precyzję do końca i zweryfikuj Pitagorasem lub szybką kontrolą rozmiaru. Wypróbuj powyższy kalkulator na własnych liczbach."
        ]
      },
      "angle-degrees": {
        "h2": "Dlaczego właściwe ustawienie kąta ma znaczenie",
        "paragraphs": [
          "Kąty można mierzyć w stopniach lub radianach, a te dwie skale całkowicie różnią się co do znaczenia liczby. Pełny okrąg to 360 stopni, ale tylko około 6.283 radiana. Ten kalkulator oczekuje stopni: wpisanie 30 oznacza 30°, a [[\\sin(30^\\circ) = 0.5]]. Gdyby to samo 30 odczytano jako radiany, sinus wyniósłby około −0.988, zupełnie inną odpowiedź bez żadnego ostrzeżenia.",
          "Pułapka działa też w drugą stronę. Załóżmy, że twój kąt pochodzi z obliczenia, które dało radiany, na przykład 0.5 rad (około 28.65°). Wpisanie 0.5 do kalkulatora w trybie stopni obliczy sin(0.5°) ≈ 0.0087 zamiast sin(0.5 rad) ≈ 0.479. Zawsze przed wpisaniem potwierdź, w jakiej jednostce jest twój kąt. Zbyt wczesne zaokrąglenie kąta kosztuje dokładność: przy stromych kątach dziesiąta część stopnia wyraźnie przesuwa tangens, więc zachowaj pełną precyzję kąta do ostatniego kroku."
        ]
      },
      "angle-effect": {
        "h2": "Jak kąt wpływa na brakujący bok",
        "paragraphs": [
          "Ustal przeciwprostokątną i pozwól kątowi rosnąć: bok naprzeciwległy rozciąga się, a przyległy kurczy. Kąt działa jak pokrętło dzielące przeciwprostokątną między obie przyprostokątne. Przy 0 stopniach bok naprzeciwległy znika, a przyległa przyprostokątna równa się całej przeciwprostokątnej; przy 90 stopniach jest odwrotnie. Tangens zachowuje się bardziej gwałtownie, ponieważ nie ma przeciwprostokątnej jako kotwicy: gdy kąt zbliża się do 90 stopni, bok naprzeciwległy góruje nad kurczącym się bokiem przyległym, a tangens rośnie bez ograniczeń.",
          "Dwa trójkąty mogą mieć ten sam kąt ostry, a mimo to całkowicie różnić się rozmiarem. Kąt ustala kształt, co oznacza, że wszystkie odpowiadające sobie proporcje boków się zgadzają, natomiast przeciwprostokątna ustala skalę. Takie trójkąty są podobne: drabina 5 m pod kątem 65° i drabina 10 m pod kątem 65° sięgają wysokości w dokładnej proporcji 1:2. Poniższa tabela pokazuje ten efekt pokrętła dla przeciwprostokątnej 10 jednostek.",
          "Przy 45° przyprostokątne równoważą się dokładnie, a tangens równa się 1. Zauważ symetrię: wiersz 30° odzwierciedla wiersz 60° z zamienionymi przyprostokątnymi, ponieważ bok naprzeciw 30° przylega do 60°."
        ],
        "table": {
          "headers": [
            "Kąt A",
            "Naprzeciwległy a = 10 × sin(A)",
            "Przyległy b = 10 × cos(A)",
            "tan(A) = a / b"
          ],
          "rows": [
            [
              "30°",
              "≈ 5.00",
              "≈ 8.66",
              "≈ 0.577"
            ],
            [
              "45°",
              "≈ 7.07",
              "≈ 7.07",
              "≈ 1.000"
            ],
            [
              "60°",
              "≈ 8.66",
              "≈ 5.00",
              "≈ 1.732"
            ]
          ]
        }
      },
      "angle-examples": {
        "examples": [
          {
            "h3": "Przykład 1: Znajdowanie wysokości, na jaką sięga drabina",
            "paragraphs": [
              "Drabina o długości 5 m opiera się o pionową ścianę, tworząc z poziomym podłożem kąt 65 stopni. Ściana, podłoże i drabina tworzą trójkąt prostokątny, w którym drabina jest przeciwprostokątną. Znane: [[c = 5\\text{ m}]], [[A = 65^\\circ]]. Brakująca wysokość leży naprzeciw kąta 65°, więc pasuje sinus: funkcja łączy bok naprzeciwległy z przeciwprostokątną.",
              "Drabina sięga około 4.53 m w górę ściany. Poziomą odległość od ściany daje cosinus, ponieważ ta przyprostokątna przylega do kąta:",
              "Jedna przeciwprostokątna i jeden kąt dały obie przyprostokątne. Pamiętaj, że to wyłącznie obliczenie geometryczne; nic nie mówi o tym, czy takie ustawienie drabiny jest bezpieczne, więc przy prawdziwym użyciu stosuj się do wskazówek producenta."
            ]
          },
          {
            "h3": "Przykład 2: Obliczanie wzrostu rampy",
            "paragraphs": [
              "Uproszczona rampa biegnie 12 m poziomo i wznosi się pod kątem 5 stopni powyżej poziomu. Podstawa i wzrost to przyprostokątne trójkąta prostokątnego, przy czym podstawa przylega do kąta 5°. Znane: [[b = 12\\text{ m}]], [[A = 5^\\circ]]. Brakujący wzrost to przyprostokątna naprzeciwległa, a tangens łączy bok naprzeciwległy z przyległym.",
              "Rampa wznosi się około 1.05 m na długości 12 m. Nie myl poziomej podstawy z powierzchnią pochyloną: sama pochylnia jest nieco dłuższa niż 12 m. Wynik nie potwierdza zgodności rampy z przepisami o dostępności ani budowlanymi."
            ]
          },
          {
            "h3": "Przykład 3: Znajdowanie pionowego wzrostu dachu",
            "paragraphs": [
              "Przekrój poprzeczny dachu ma poziomą podstawę 4.5 m, a powierzchnia dachu jest nachylona 30 stopni powyżej poziomu. Podstawa przylega do kąta, a wzrost leży naprzeciw, więc tangens jest naturalnym wyborem.",
              "Dach wznosi się około 2.60 m. Bardziej strome nachylenie zwiększyłoby wartość tangensa, a wraz z nim wzrost, dlatego kąt dachu tak bezpośrednio wpływa na wysokość poddasza. Ten uproszczony szkic pomija okapy, belki kalenicowe i zapasy ciesielskie, których wymaga prawdziwa konstrukcja."
            ]
          },
          {
            "h3": "Przykład 4: Mierzenie pionowego zasięgu kabla",
            "paragraphs": [
              "Kabel o długości 20 m rozciąga się od ziemi do wierzchołka słupa, tworząc z poziomem kąt 55 stopni. Kabel jest przeciwprostokątną. Sinus daje pionowy zasięg (naprzeciw kąta), a cosinus poziomy (przyległy do niego), więc jedno ustawienie daje obie przyprostokątne.",
              "Kabel sięga około 16.38 m w pionie, rozciągając się 11.47 m w poziomie. Takie łączenie sinusa z cosinusem to standardowy sposób rozkładania dowolnej długości pochylonej na składowe pionową i poziomą."
            ]
          },
          {
            "h3": "Przykład 5: Szacowanie wysokości z linii wzroku",
            "paragraphs": [
              "Uproszczona linia wzroku o długości 150 m nachyla się 12 stopni powyżej poziomu odniesienia. Traktując linię wzroku jako przeciwprostokątną trójkąta prostokątnego, sinus wyodrębnia różnicę pionową, a cosinus odległość poziomą.",
              "Odległy punkt znajduje się około 31.19 m powyżej poziomu odniesienia i 146.72 m w poziomie. Prawdziwe pomiary geodezyjne nakładałyby poprawki na teren, wysokość przyrządu i efekty atmosferyczne; to jest surowa geometria leżąca u ich podstaw."
            ]
          },
          {
            "h3": "Przykład 6: Szacowanie wysokości drzewa",
            "paragraphs": [
              "Stoisz 25 m poziomo od pnia drzewa na płaskim terenie, a kąt wzniesienia do wierzchołka drzewa wynosi 38 stopni. Odległość pozioma to przyprostokątna przyległa, a wysokość drzewa powyżej poziomu obserwacji to przyprostokątna naprzeciwległa, więc łączy je tangens.",
              "Wierzchołek drzewa znajduje się około 19.53 m powyżej poziomu obserwacji. Jeśli mierzyłeś od wysokości oczu, a nie od ziemi, dodaj wysokość oczu, aby uzyskać pełną wysokość drzewa. Metoda zakłada płaski teren między tobą a pniem."
            ]
          },
          {
            "h3": "Przykład 7: Obliczanie przesunięcia zastrzału mechanicznego",
            "paragraphs": [
              "Projekt zastrzału przewiduje poziomą przyprostokątną 600 mm, spotykającą pion pod kątem 25 stopni od poziomu. Poziomy element przylega do kąta; potrzebne przesunięcie pionowe leży naprzeciw niego.",
              "Przesunięcie pionowe wynosi około 279.78 mm. Ta sama długość pozioma daje wyższe przesunięcie wraz ze wzrostem kąta, dlatego małe zmiany kąta mają znaczenie w ciasnych pasowaniach mechanicznych. Sam ten wymiar nie dowodzi, że zastrzał jest konstrukcyjnie wystarczający."
            ]
          },
          {
            "h3": "Przykład 8: Znajdowanie boku naprzeciwległego z przeciwprostokątnej",
            "paragraphs": [
              "Trójkąt prostokątny ma przeciwprostokątną 8 m i kąt ostry 42 stopnie. Bok naprzeciw kąta jest nieznany. Ponieważ przeciwprostokątna i przyprostokątna naprzeciwległa to para sinusa, jedno mnożenie kończy sprawę.",
              "Bok naprzeciwległy wynosi około 5.35 m. Sinus zawsze zamienia pomiar przeciwprostokątnej na przyprostokątną leżącą naprzeciw kąta, bez przekształcania."
            ]
          },
          {
            "h3": "Przykład 9: Znajdowanie odległości poziomej z pomiaru pionowego",
            "paragraphs": [
              "Trójkąt prostokątny ma przyprostokątną naprzeciwległą 3.2 m, a kąt wynosi 28 stopni. Przyprostokątna przyległa jest nieznana. Tangens równa się bokowi naprzeciwległemu podzielonemu przez przyległy, więc aby wyizolować przyległą, należy podzielić znany bok naprzeciwległy przez tangens.",
              "Odległość pozioma wynosi około 6.02 m. Zawsze gdy znany bok znajduje się w liczniku funkcji, dzielenie jest sposobem na wyizolowanie nieznanego boku."
            ]
          },
          {
            "h3": "Przykład 10: Szacowanie pionowego przesunięcia budynku",
            "paragraphs": [
              "Uproszczona linia obserwacji o długości 80 ft nachyla się 25 stopni powyżej poziomu. Linia jest przeciwprostokątną, a składowa pionowa leży naprzeciw kąta, co wskazuje na sinus.",
              "Składowa pionowa wynosi około 33.81 ft. Większy kąt przeniósłby więcej z 80 ft do części pionowej, a mniej do poziomej. Traktuj to jako przybliżone oszacowanie geometryczne, a nie zamiennik właściwego pomiaru budowlanego."
            ]
          },
          {
            "h3": "Przykład 11: Obliczanie wzrostu pochylonego chodnika",
            "paragraphs": [
              "Chodnik biegnie 6 m poziomo przy nachyleniu 8 stopni. Podstawa przylega do kąta, a wzrost leży naprzeciw, więc tangens stosuje się bezpośrednio.",
              "Chodnik wznosi się około 0.84 m. Wzrost skaluje się zarówno z podstawą, jak i z tangensem kąta, więc podwojenie podstawy podwaja wzrost przy stałym kącie. Zgodność nachylenia z przepisami sprawdź osobno w lokalnych kodeksach."
            ]
          },
          {
            "h3": "Przykład 12: Znajdowanie przesunięcia poziomego ze znanego wzrostu",
            "paragraphs": [
              "Konstrukcja ma pionowe przesunięcie 2 m, a jej przekątna tworzy z poziomem kąt 35 stopni. Pionowa przyprostokątna leży naprzeciw kąta, a poziome przesunięcie przylega, więc tangens trzeba wydzielić.",
              "Przesunięcie poziome wynosi około 2.86 m. Znajomość wzrostu i kąta całkowicie wyznacza podstawę; tak wyprowadza się odległości zabudowy z ograniczeń wysokości."
            ]
          }
        ],
        "figcaption": "Trygonometria w działaniu: wysokości drabiny (4.53 m), rampy (1.05 m), dachu (2.60 m) i drzewa (19.53 m) z jednego boku i jednego kąta.",
        "h2": "Przykłady z życia: znajdowanie boków trójkąta prostokątnego za pomocą kątów",
        "imgAlt": "Cztery panele: wysokość drabiny, wzrost rampy, wzrost dachu i wysokość drzewa rozwiązane trygonometrią",
        "intro": "Każdy poniższy przykład podąża tą samą ścieżką: dostrzeż trójkąt prostokątny, nazwij znany bok i kąt, wybierz funkcję łączącą je z brakującym bokiem, podstaw, oblicz i odczytaj odpowiedź w kontekście. Zwróć uwagę, jak wybór sinusa, cosinusa czy tangensa za każdym razem wynika z geometrii.",
        "table": {
          "headers": [
            "Scenariusz",
            "Znany bok",
            "Znany kąt",
            "Funkcja",
            "Obliczony bok"
          ],
          "rows": [
            [
              "Wysokość drabiny",
              "c = 5 m",
              "65°",
              "Sinus",
              "a ≈ 4.53 m"
            ],
            [
              "Wzrost rampy",
              "b = 12 m",
              "5°",
              "Tangens",
              "a ≈ 1.05 m"
            ],
            [
              "Wzrost dachu",
              "b = 4.5 m",
              "30°",
              "Tangens",
              "a ≈ 2.60 m"
            ],
            [
              "Zasięg kabla",
              "c = 20 m",
              "55°",
              "Sinus / Cosinus",
              "a ≈ 16.38 m, b ≈ 11.47 m"
            ],
            [
              "Linia wzroku",
              "c = 150 m",
              "12°",
              "Sinus / Cosinus",
              "a ≈ 31.19 m, b ≈ 146.72 m"
            ],
            [
              "Wysokość drzewa",
              "b = 25 m",
              "38°",
              "Tangens",
              "a ≈ 19.53 m"
            ],
            [
              "Przesunięcie zastrzału",
              "b = 600 mm",
              "25°",
              "Tangens",
              "a ≈ 279.78 mm"
            ],
            [
              "Naprzeciwległy z przeciwprostokątnej",
              "c = 8 m",
              "42°",
              "Sinus",
              "a ≈ 5.35 m"
            ],
            [
              "Przyległy z naprzeciwległego",
              "a = 3.2 m",
              "28°",
              "Tangens",
              "b ≈ 6.02 m"
            ],
            [
              "Przesunięcie budynku",
              "c = 80 ft",
              "25°",
              "Sinus",
              "a ≈ 33.81 ft"
            ],
            [
              "Wzrost chodnika",
              "b = 6 m",
              "8°",
              "Tangens",
              "a ≈ 0.84 m"
            ],
            [
              "Poziomy ze wzrostu",
              "a = 2 m",
              "35°",
              "Tangens",
              "b ≈ 2.86 m"
            ]
          ]
        }
      },
      "angle-howto": {
        "h2": "Instrukcja korzystania z kalkulatora krok po kroku",
        "paragraphs": [
          "Jeśli interfejs oferuje kontrolkę resetowania, użyj jej, aby wyczyścić pola przed rozpoczęciem nowego obliczenia, tak aby żadna stara wartość nie przedostała się do kolejnego wyniku."
        ],
        "steps": [
          "Potwierdź trójkąt prostokątny. Znajdź w szkicu lub sytuacji róg 90 stopni; bez niego te wzory nie mają zastosowania.",
          "Zidentyfikuj kąt A. Wybierz kąt ostry, do którego odnoszą się twoje pomiary. Drugi kąt ostry to 90° minus ten kąt.",
          "Oznacz boki. Oznacz przeciwprostokątną c, następnie oznacz a jako przyprostokątną naprzeciw A, a b jako przyprostokątną przyległą do A.",
          "Zwróć uwagę, który bok znasz. Czy to przeciwprostokątna, czy jedna z przyprostokątnych? Ten jeden fakt zawęża wybór do dwóch trybów.",
          "Wybierz pasujący tryb. Znana przeciwprostokątna i brakująca przyprostokątna a: przyprostokątna a z sinusa. Znana przeciwprostokątna i brakująca przyprostokątna b: przyprostokątna b z cosinusa. Znana przyprostokątna b i brakująca przyprostokątna a: przyprostokątna a z tangensa. Znana przyprostokątna a i brakująca przyprostokątna b: przyprostokątna b z tangensa.",
          "Wpisz długość boku i jego jednostkę. Użyj tej samej rodziny jednostek, w której podasz odpowiedź.",
          "Wpisz kąt A w stopniach. Sprawdź dwukrotnie, czy jest ostry, ściśle między 0° a 90°.",
          "Oblicz. Brakujący bok pojawi się wraz z krokami rozwiązania pokazującymi podstawienie.",
          "Przeczytaj kroki. Potwierdź, że kalkulator użył zamierzonej funkcji, a liczby zgadzają się z twoimi danymi wejściowymi.",
          "Sprawdź wynik na zdrowy rozsądek. Przyprostokątna musi być krótsza od przeciwprostokątnej. Jeśli liczyłeś z przeciwprostokątnej, obie przyprostokątne z sinusa i cosinusa powinny spełniać a² + b² = c²."
        ]
      },
      "angle-intro": {
        "h2": "Jak znaleźć bok trójkąta prostokątnego za pomocą kąta",
        "paragraphs": [
          "Wyobraź sobie drabinę opartą o ścianę. Wiesz, że drabina ma 5 metrów długości i styka się z ziemią pod kątem 65 stopni, ale jak wysoko sięga? Kalkulator boku trójkąta prostokątnego z kąta odpowiada dokładnie na takie pytania: znajduje brakujący bok, gdy znasz jeden kąt ostry i jedną długość boku. Jeden bok i jeden kąt wystarczą, ponieważ trygonometria całkowicie ustala kształt trójkąta. Trzy funkcje, sinus, cosinus i tangens, łączą kąt z różnymi parami boków. Sinus łączy bok naprzeciwległy z przeciwprostokątną, cosinus łączy bok przyległy z przeciwprostokątną, a tangens łączy bezpośrednio obie przyprostokątne. Ta strona wyjaśnia, która funkcja pasuje do twojej sytuacji, dlaczego działa i jak korzystać z powyższego kalkulatora. W przeciwieństwie do kalkulatora twierdzenia Pitagorasa, który potrzebuje dwóch znanych boków, to narzędzie działa na podstawie jednego boku i jednego kąta."
        ]
      },
      "angle-mistakes": {
        "h2": "Częste błędy przy znajdowaniu boków trójkąta z kątów",
        "paragraphs": [
          "1. Mylenie boków naprzeciwległego i przyległego. Oznaczenie jest względne wobec kąta A, a zamiana przyprostokątnych zamienia sinus z cosinusem. Poprawka: zanim dotkniesz kalkulatora, napisz na szkicu „naprz” i „przyl”.",
          "2. Wybieranie sinusa, gdy potrzebny jest tangens. Przy znanej przyprostokątnej i braku przeciwprostokątnej sinus nie ma czego chwycić. Jeśli twój znany bok to przyprostokątna, odpowiedź wymaga tangensa. Przykład: b = 8 m, A = 35° wymaga a = 8·tan(35°), a nie 8·sin(35°).",
          "3. Używanie złego wzoru z tangensem. Znajdowanie przyprostokątnej naprzeciwległej mnoży przez tangens; znajdowanie przyległej dzieli przez niego. Zapamiętaj kierunek: a = b·tan(A) rozrasta podstawę w wysokość, b = a/tan(A) ściska wysokość z powrotem w podstawę.",
          "4. Wpisywanie kąta w złej jednostce. Wartość w radianach wpisana jako stopnie (lub odwrotnie) po cichu daje śmieci. Najpierw potwierdź stopnie; ten kalkulator pracuje w stopniach.",
          "5. Traktowanie przeciwprostokątnej jak zwykłej przyprostokątnej. Przeciwprostokątna łączy się tylko z sinusem i cosinusem, nigdy z tangensem. Jeśli twój wzór zawiera tan i przeciwprostokątną, coś jest źle oznaczone.",
          "6. Używanie złego kąta odniesienia. 65° w przykładzie z drabiną mierzy się od ziemi. Mierzenie od ściany dałoby 25°, a każda funkcja by się zmieniła. Zawsze sprawdzaj, od której strony kąt się otwiera.",
          "7. Mieszanie metrów, stóp i innych jednostek. Przeciwprostokątna w stopach przy odpowiedzi oczekiwanej w metrach wymaga przeliczenia przed lub po, nigdy pominiętego. Zachowaj jedną jednostkę przez całe obliczenie.",
          "8. Zbyt wczesne zaokrąglanie wartości pośrednich. Zaokrąglenie tan(35°) do 0.7 przed pomnożeniem przez 8 daje tutaj 5.6 przez przypadek, ale grubsze zaokrąglenia gdzie indziej dryfują odpowiedź. Zachowaj pełną precyzję do wyniku końcowego.",
          "9. Zakładanie, że bok naprzeciw kąta jest zawsze najdłuższy. Bok naprzeciwległy jest najdłuższy tylko wtedy, gdy kąt przekracza 45°. Przy 30° przyprostokątna naprzeciwległa jest najkrótszym bokiem trójkąta.",
          "10. Stosowanie trygonometrii do trójkąta nieprostokątnego. Bez kąta 90° sinus, cosinus i tangens zdefiniowane tutaj nie mają zastosowania. Trójkąty rozwartokątne i ostrokątne potrzebują zamiast tego twierdzeń sinusów i cosinusów.",
          "11. Wpisywanie kąta spoza zakresu ostrego. Kąty 0°, 90° lub większe zwijają trójkąt lub opisują inny kształt. Kalkulator potrzebuje kąta ściśle między 0° a 90°.",
          "12. Nieufność wobec małego, lecz poprawnego wyniku. Rampa 5° na 12 m naprawdę wznosi się tylko około 1.05 m. Małe kąty dają małe boki naprzeciwległe; to geometria, a nie błąd."
        ]
      },
      "angle-modes": {
        "figcaption": "Cztery tryby obok siebie: sinus i cosinus startują od przeciwprostokątnej, tryby tangensa zamieniają między sobą przyprostokątne.",
        "h2": "Jak wybrać właściwy tryb kalkulatora",
        "h3s": [
          "Tryb 1: Znajdowanie przyprostokątnej a za pomocą sinusa",
          "Tryb 2: Znajdowanie przyprostokątnej b za pomocą cosinusa",
          "Tryb 3: Znajdowanie przyprostokątnej a za pomocą tangensa",
          "Tryb 4: Znajdowanie przyprostokątnej b za pomocą tangensa"
        ],
        "imgAlt": "Cztery panele porównujące tryby sinusa, cosinusa i dwa tryby tangensa z przykładowymi wartościami",
        "modeExamples": [
          "Przykład obliczeniowy: dane [[c = 10\\text{ m}]] i [[A = 30^\\circ]], znajdź przyprostokątną [[a]].",
          "Przykład obliczeniowy: dane [[c = 12\\text{ ft}]] i [[A = 60^\\circ]], znajdź przyprostokątną [[b]].",
          "Przykład obliczeniowy: dane [[b = 8\\text{ m}]] i [[A = 35^\\circ]], znajdź przyprostokątną [[a]].",
          "Przykład obliczeniowy: dane [[a = 4\\text{ m}]] i [[A = 40^\\circ]], znajdź przyprostokątną [[b]]."
        ],
        "modeNotes": [
          "Odpowiedź jest sensowna: przy 30 stopniach bok naprzeciwległy to dokładnie połowa przeciwprostokątnej, przydatna kontrola, którą wykonasz w pamięci.",
          "Przy 60 stopniach bok przyległy to połowa przeciwprostokątnej, co odzwierciedla przypadek sinusa dla 30 stopni. Dwa kąty ostre zamieniają się rolami: bok przyległy do 60° leży naprzeciw 30°.",
          "Ponieważ 35° to mniej niż 45°, bok naprzeciwległy wychodzi krótszy niż przyprostokątna przyległa, co zgadza się z geometrią.",
          "Przy 40°, tuż poniżej 45°, bok przyległy jest nieco dłuższy od naprzeciwległego. Tę małą różnicę dokładnie oddaje dzielenie."
        ],
        "modeParagraphs": [
          "Wybierz ten tryb, gdy znasz przeciwprostokątną i potrzebujesz boku naprzeciw kąta. Potwierdź, że znany bok to ten naprzeciw kąta prostego, a twój kąt to kąt ostry, naprzeciw którego leży bok naprzeciwległy. Sinus jest właściwą funkcją, ponieważ bezpośrednio wiąże bok naprzeciwległy z przeciwprostokątną. Wpisz długość przeciwprostokątnej i kąt w stopniach. Wynikiem jest przyprostokątna naprzeciwległa.",
          "Wybierz ten tryb, gdy znasz przeciwprostokątną i potrzebujesz boku przyległego do kąta. Cosinus wiąże bok przyległy z przeciwprostokątną, więc zamienia długość pochyloną na przyprostokątną biegnącą wzdłuż kąta. Bok przyległy jest zawsze krótszy od przeciwprostokątnej, ponieważ cosinus kąta ostrego jest zawsze mniejszy niż 1.",
          "Wybierz ten tryb, gdy znasz przyległą przyprostokątną i potrzebujesz naprzeciwległej. To klasyczna sytuacja „odległość i kąt wzniesienia”: stoisz w znanej odległości poziomej i chcesz poznać wysokość. Tangens skaluje przyprostokątną przyległą w górę (lub w dół) do naprzeciwległej. Kąt steruje współczynnikiem, więc większy kąt oznacza wyższy bok naprzeciwległy przy tej samej podstawie.",
          "Wybierz ten tryb, gdy znasz przyprostokątną naprzeciwległą i potrzebujesz przyległej. Odpowiada na pytania typu „wzrost jest stały, jak daleko musi sięgać podstawa?”. Dzielenie przez tangens odwraca skalowanie z trybu 3: zamiast rozciągać podstawę w wysokość, ściskasz wysokość z powrotem w podstawę."
        ],
        "paragraphs": [
          "Właściwy tryb zależy od dwóch faktów: który bok znasz już teraz i który bok brakuje. Znajdź swoją sytuację w tabeli, a następnie przeczytaj pasujący przykład poniżej."
        ],
        "table": {
          "headers": [
            "Znany bok",
            "Znany kąt",
            "Brakujący bok",
            "Wzór",
            "Tryb kalkulatora",
            "Kiedy stosować"
          ],
          "rows": [
            [
              "Przeciwprostokątna c",
              "A",
              "Przyprostokątna a",
              "a = c × sin(A)",
              "Przyprostokątna a z sinusa",
              "Znana długość pochylona, potrzebny bok naprzeciw kąta"
            ],
            [
              "Przeciwprostokątna c",
              "A",
              "Przyprostokątna b",
              "b = c × cos(A)",
              "Przyprostokątna b z cosinusa",
              "Znana długość pochylona, potrzebny bok przy kącie"
            ],
            [
              "Przyprostokątna b",
              "A",
              "Przyprostokątna a",
              "a = b × tan(A)",
              "Przyprostokątna a z tangensa",
              "Znana odległość pozioma, potrzebny wzrost pionowy"
            ],
            [
              "Przyprostokątna a",
              "A",
              "Przyprostokątna b",
              "b = a / tan(A)",
              "Przyprostokątna b z tangensa",
              "Znany wzrost pionowy, potrzebna odległość pozioma"
            ]
          ]
        }
      },
      "angle-other": {
        "h2": "Wybieranie właściwego kalkulatora trójkąta prostokątnego",
        "linkAnchors": [
          "Kalkulator boku trójkąta prostokątnego",
          "Kalkulator kąta trójkąta prostokątnego",
          "Kalkulator pola trójkąta prostokątnego",
          "Kalkulator specjalnych trójkątów prostokątnych",
          "Kalkulator funkcji trygonometrycznych",
          "Kalkulator trójkąta prostokątnego"
        ],
        "paragraphs": [
          "Ta strona pasuje do zadań z jednym znanym bokiem i jednym znanym kątem ostrym. Inne sytuacje wymagają innych narzędzi.",
          "Znane dwa boki, brak kąta: Kalkulator boku trójkąta prostokątnego stosuje twierdzenie Pitagorasa bezpośrednio.",
          "Brakujący kąt, znane boki: Kalkulator kąta trójkąta prostokątnego używa odwrotnych sinusa, cosinusa lub tangensa.",
          "Potrzebne pole: Kalkulator pola trójkąta prostokątnego oblicza je z przyprostokątnych lub innych danych wejściowych.",
          "Trójkąty 30-60-90 lub 45-45-90: Kalkulator specjalnych trójkątów prostokątnych wykorzystuje ich dokładne proporcje.",
          "Tylko wartości funkcji: Kalkulator funkcji trygonometrycznych oblicza sin, cos i tan bez rozwiązywania boków.",
          "Wszystko naraz: Kalkulator trójkąta prostokątnego rozwiązuje cały trójkąt, kąty, pole i własności pochodne z dowolnych dwóch poprawnych danych wejściowych."
        ]
      },
      "angle-trig": {
        "figcaption": "SOH-CAH-TOA na jednym trójkącie: sinus wykorzystuje bok naprzeciwległy i przeciwprostokątną, cosinus bok przyległy i przeciwprostokątną, tangens obie przyprostokątne.",
        "h2": "Jak sinus, cosinus i tangens pomagają znaleźć brakujące boki",
        "h3s": [
          "Zrozumienie sinusa",
          "Zrozumienie cosinusa",
          "Zrozumienie tangensa",
          "Co oznacza SOH-CAH-TOA?"
        ],
        "imgAlt": "Trzy panele przedstawiające sinus, cosinus i tangens na tym samym trójkącie prostokątnym",
        "paragraphs": [
          "Funkcja trygonometryczna to stała zależność między dwoma bokami trójkąta prostokątnego dla danego kąta. Zmień kąt, a funkcja się zmieni; zachowaj ten sam kąt, a każdy trójkąt o tym kącie będzie miał te same funkcje, niezależnie od rozmiaru. Dlatego jeden kąt i jeden bok wyznaczają wszystko pozostałe. Każda z trzech funkcji łączy kąt z inną kombinacją boków, więc to znany bok decyduje, po którą funkcję sięgnąć.",
          "Sinus porównuje bok naprzeciwległy z przeciwprostokątną: [[\\sin(A) = \\frac{a}{c}]]. Aby rozwiązać dla brakującego boku, pomnóż obie strony przez [[c]]. [[c]] po prawej stronie skraca się, pozostawiając [[a = c\\sin(A)]]. Słownie: przyprostokątna naprzeciwległa równa się przeciwprostokątnej przeskalowanej przez sinus kąta. Większy kąt daje większą wartość sinusa, więc bok naprzeciwległy rośnie wraz z rozwieraniem kąta.",
          "Cosinus porównuje bok przyległy z przeciwprostokątną: [[\\cos(A) = \\frac{b}{c}]]. Pomnóż obie strony przez [[c]], a otrzymasz [[b = c\\cos(A)]]. Przyprostokątna przyległa równa się przeciwprostokątnej przeskalowanej przez cosinus kąta. Gdy kąt [[A]] rośnie ku 90 stopniom, bok przyległy kurczy się ku zeru, co zgadza się z geometrią: kąt spłaszcza przyległą przyprostokątną.",
          "Tangens porównuje bezpośrednio obie przyprostokątne: [[\\tan(A) = \\frac{a}{b}]]. Przekształcony w obie strony daje [[a = b\\tan(A)]] i [[b = \\frac{a}{\\tan(A)}]]. Użyj mnożenia, gdy znana przyprostokątna jest przyległa, a chcesz bok naprzeciwległy: przeskalowanie boku przyległego przez tangens rozciąga go w bok naprzeciwległy. Użyj dzielenia, gdy znana przyprostokątna jest naprzeciwległa, a chcesz przyległą: pytasz, ile kawałków wielkości tangensa mieści się w boku naprzeciwległym. Dwie formy to ta sama zależność odczytana w przeciwnych kierunkach.",
          "SOH-CAH-TOA to pomoc w zapamiętaniu, a nie zamiennik poprawnego oznaczenia boków. SOH: sinus = bok naprzeciwległy / przeciwprostokątna. CAH: cosinus = bok przyległy / przeciwprostokątna. TOA: tangens = bok naprzeciwległy / bok przyległy. Pomaga wybrać funkcję po oznaczeniu boków naprzeciwległego, przyległego i przeciwprostokątnej względem kąta. Zawsze najpierw oznacz boki; skrót mówi jedynie, jaki ułamek zapisać potem."
        ]
      },
      "angle-validation": {
        "h2": "Sprawdzanie, czy wynik jest matematycznie poprawny",
        "paragraphs": [
          "Długości boków muszą być dodatnimi liczbami; długość zerowa lub ujemna nie opisuje żadnego trójkąta. Każda obliczona przyprostokątna musi wyjść krótsza od wpisanej przeciwprostokątnej. Kąt odniesienia musi być ostry, ściśle między 0° a 90°, a wszystkie długości w zadaniu muszą mieć jedną jednostkę.",
          "Tangens zasługuje na szczególną uwagę na krańcach swojego zakresu. Gdy kąt zbliża się do 90°, tangens rośnie stromo, więc drobne wahnięcie kąta dramatycznie zmienia wynik. Blisko 0° tangens jest malutki, a dzielenie przez niego (tryb b = a/tan(A)) wzmacnia szum pomiarowy w ten sam sposób. Gdy twój kąt leży w odległości kilku stopni od któregokolwiek krańca, traktuj dane wejściowe jako przybliżone, a wynik jako wrażliwy, a nie dokładny."
        ]
      },
      "angle-verify": {
        "h2": "Jak sprawdzić swoją odpowiedź",
        "paragraphs": [
          "Metoda 1: Podstaw z powrotem do funkcji. Podziel swoją odpowiedź przez znany bok i potwierdź, że stosunek zgadza się z wartością trygonometryczną. Jeśli znalazłeś a = 5 z c = 10 przy 30°, sprawdź, że 5/10 = 0.5 = sin(30°).",
          "Metoda 2: Użyj twierdzenia Pitagorasa. Gdy po obliczeniu znasz dwa boki, sprawdź, że a² + b² = c². To krzyżowo weryfikuje trygonometrię czystą geometrią.",
          "Metoda 3: Sprawdź względne rozmiary. Każda przyprostokątna musi być krótsza od przeciwprostokątnej. Przyprostokątna naprzeciw większego kąta ostrego musi być dłuższą przyprostokątną. Przy 30° spodziewaj się, że przyprostokątna naprzeciwległa będzie krótsza.",
          "Przykład weryfikacji: z c = 10 m i A = 30° kalkulator daje a = 5 m. Znajdź drugą przyprostokątną: b = 10·cos(30°) ≈ 8.66 m. Teraz sprawdź Pitagorasa na niezaokrąglonych wartościach:",
          "Równość zachodzi, przeciwprostokątna jest najdłuższa, a 5 < 8.66 zgadza się z geometrią 30°. Każda drobna rozbieżność pochodzi z zaokrąglenia 8.66, więc gdy liczy się precyzja, weryfikuj na niezaokrąglonych wartościach."
        ]
      }
    },
    "tocHeading": "W tym przewodniku",
    "tocItems": {
      "angle-anatomy": "Boki i kąty trójkąta prostokątnego",
      "angle-degrees": "Stopnie i ustawienia kalkulatora",
      "angle-effect": "Jak kąt zmienia długość boków",
      "angle-examples": "Przykłady z życia",
      "angle-faq": "Często zadawane pytania",
      "angle-howto": "Jak korzystać z kalkulatora",
      "angle-intro": "Jak znaleźć bok trójkąta prostokątnego za pomocą kąta",
      "angle-mistakes": "Częste błędy",
      "angle-modes": "Cztery tryby kalkulatora",
      "angle-other": "Kiedy użyć innego kalkulatora",
      "angle-related": "Powiązane kalkulatory",
      "angle-trig": "Sinus, cosinus i tangens",
      "angle-validation": "Sprawdzanie poprawności danych",
      "angle-verify": "Sprawdzanie wyniku"
    }
  }

};
