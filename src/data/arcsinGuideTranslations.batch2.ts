/**
 * arcsinGuideTranslations.batch2.ts
 * Translations of the Right Triangle Angle From Sine Calculator guide (ArcsinGuide.astro)
 * Batch 2: Portuguese (pt), Bengali (bn), Japanese (ja), Korean (ko), Malay (ms), Polish (pl).
 *
 * Structure per language:
 * - tocHeading, tocItems (15 entries keyed by section id)
 * - sections (15 entries: arcsin-intro, arcsin-anatomy, arcsin-what, arcsin-formula,
 *   arcsin-howto, arcsin-examples, arcsin-applications, arcsin-ratio, arcsin-units,
 *   arcsin-mistakes, arcsin-verify, arcsin-choose, arcsin-faq, arcsin-related,
 *   arcsin-conclusion)
 *   Each section: h2, blocks (ordered {kind: 'h3'|'p', text}), optional steps (arcsin-howto),
 *   optional listItems (arcsin-mistakes), optional table ({headers, rows}),
 *   optional imgAlt/figcaption
 * - faqs (12 question/answer pairs)
 * - relatedHeading, relatedItems (8 calculator names)
 *
 * Formulas, KaTeX markup ([[...]]), variable names, numbers, URLs, and HTML IDs are
 * preserved exactly as in the English source. No em dashes anywhere.
 */

export const ARCSIN_TRANSLATIONS_BATCH2 = {
  "pt": {
    "tocHeading": "Neste Guia",
    "tocItems": {
      "arcsin-intro": "Como encontrar um ângulo usando o seno",
      "arcsin-anatomy": "Entendendo o cateto oposto e a hipotenusa",
      "arcsin-what": "O que é seno em um triângulo retângulo?",
      "arcsin-formula": "Como funciona a fórmula do seno inverso",
      "arcsin-howto": "Como usar a calculadora",
      "arcsin-examples": "Exemplos passo a passo",
      "arcsin-applications": "Exemplos da vida real",
      "arcsin-ratio": "Como a razão muda o ângulo",
      "arcsin-units": "Unidades de ângulo e precisão de medição",
      "arcsin-mistakes": "Erros comuns",
      "arcsin-verify": "Verificando o ângulo calculado",
      "arcsin-choose": "Escolhendo a calculadora certa",
      "arcsin-faq": "Perguntas frequentes",
      "arcsin-related": "Explore calculadoras de triângulo relacionadas",
      "arcsin-conclusion": "Encontre qualquer ângulo a partir do seno com confiança"
    },
    "sections": {
      "arcsin-intro": {
        "h2": "Como encontrar um ângulo usando o seno",
        "blocks": [
          {
            "kind": "p",
            "text": "Imagine uma rampa para cadeira de rodas: você sabe que sua superfície inclinada mede 9.5 metros e que ela sobe 0.75 metros a partir do chão. Qual é o ângulo de inclinação da rampa? A calculadora de ângulo de triângulo retângulo a partir do seno responde exatamente a esse tipo de pergunta. Ela recebe o cateto oposto e a hipotenusa de um triângulo retângulo e devolve o ângulo agudo entre eles."
          },
          {
            "kind": "p",
            "text": "Essas duas medidas são suficientes porque o seno é definido como a razão entre o cateto oposto e a hipotenusa. Uma vez conhecida essa razão, o seno inverso a converte de volta no ângulo. O cateto adjacente nunca entra no cálculo, o que torna esta a ferramenta certa sempre que o cateto oposto e a hipotenusa são as grandezas que você realmente mediu."
          },
          {
            "kind": "p",
            "text": "Neste guia, A é o ângulo agudo de referência que está sendo calculado, a é o lado oposto ao ângulo A, e c é a hipotenusa. O ângulo calculado é a inclinação onde a hipotenusa encontra o cateto adjacente, medida em graus."
          }
        ]
      },
      "arcsin-anatomy": {
        "h2": "Entendendo o cateto oposto e a hipotenusa",
        "blocks": [
          {
            "kind": "h3",
            "text": "O que é um triângulo retângulo?"
          },
          {
            "kind": "p",
            "text": "Um triângulo retângulo tem um ângulo de exatamente 90 graus. Os outros dois ângulos são agudos, ou seja, cada um é estritamente menor que 90 graus, e juntos sempre somam 90 graus. Essa relação de complementaridade é o motivo pelo qual encontrar um ângulo agudo revela imediatamente o outro por subtração."
          },
          {
            "kind": "p",
            "text": "A condição de ângulo reto é importante porque seno, cosseno e tangente são definidos a partir das razões fixas de lados dos triângulos retângulos. Sem o canto de 90 graus, a razão a/c não tem relação fixa com nenhum ângulo, e o seno inverso não consegue recuperar um."
          },
          {
            "kind": "h3",
            "text": "O que é o cateto oposto?"
          },
          {
            "kind": "p",
            "text": "O cateto oposto é o lado diretamente oposto ao ângulo A. Ele nunca toca o vértice do ângulo A. Em problemas de altura, esse lado costuma representar a elevação vertical: a altura que uma escada alcança na parede, a subida de uma rampa ou o componente vertical de uma lança de guindaste."
          },
          {
            "kind": "p",
            "text": "O rótulo é relativo. Se você trocar o ângulo de referência de A para B, o lado que era oposto passa a ser adjacente e vice-versa. Sempre confirme qual ângulo você está calculando antes de rotular os lados."
          },
          {
            "kind": "h3",
            "text": "O que é a hipotenusa?"
          },
          {
            "kind": "p",
            "text": "A hipotenusa é o lado oposto ao ângulo reto, representado por c. É sempre o lado mais longo do triângulo. Ela nunca toca o vértice do ângulo reto. Na prática, a hipotenusa costuma ser o próprio comprimento inclinado: a escada, o caibro, a superfície da rampa ou a distância reta de visada."
          },
          {
            "kind": "p",
            "text": "Quando um triângulo é desenhado girado, identifique primeiro a hipotenusa encontrando o lado oposto ao marcador quadrado do ângulo reto. Todo o resto decorre dessa identificação."
          },
          {
            "kind": "h3",
            "text": "O que é o cateto adjacente?"
          },
          {
            "kind": "p",
            "text": "O lado b é o cateto que toca o ângulo A sem ser a hipotenusa. Esta calculadora não precisa dele. Se você precisar depois do cateto adjacente, o Teorema de Pitágoras o fornece como b = sqrt(c^2 - a^2)."
          }
        ],
        "figcaption": "Anatomia para o arco seno: o lado a fica oposto ao ângulo A, e o lado c é a hipotenusa oposta ao ângulo reto.",
        "imgAlt": "Triângulo retângulo com o cateto oposto a e a hipotenusa c destacados para o arco seno"
      },
      "arcsin-what": {
        "h2": "O que é seno em um triângulo retângulo?",
        "blocks": [
          {
            "kind": "p",
            "text": "O seno mede qual proporção da hipotenusa é representada pelo cateto oposto. A definição é: sin(A) = a/c"
          },
          {
            "kind": "p",
            "text": "Aqui sin(A) é o seno do ângulo A, a é o cateto oposto, e c é a hipotenusa. Se o cateto oposto mede 3 unidades e a hipotenusa mede 5 unidades, então sin(A) = 3/5 = 0.6. A razão é adimensional: metros divididos por metros se cancelam, de modo que o mesmo 0.6 resulta quer você meça em metros, pés ou centímetros."
          },
          {
            "kind": "h3",
            "text": "O que é seno inverso?"
          },
          {
            "kind": "p",
            "text": "O seno comum parte de um ângulo e produz uma razão. O seno inverso parte de uma razão válida e devolve o ângulo correspondente. Se sin(A) = 0.6, então A = arcsin(0.6) approx 36.87 graus. O seno inverso inverte a relação do seno para recuperar o ângulo de partida."
          },
          {
            "kind": "h3",
            "text": "Arco seno é o mesmo que seno inverso?"
          },
          {
            "kind": "p",
            "text": "Sim. As notações arcsin(x) e sin^-1(x) referem-se à mesma função. O sobrescrito -1 não significa recíproco. O recíproco do seno é outra função: a cossecante, escrita csc(x)."
          },
          {
            "kind": "h3",
            "text": "Por que a fórmula usa o cateto oposto?"
          },
          {
            "kind": "p",
            "text": "O seno é a razão que emparelha o cateto oposto com a hipotenusa, que é exatamente o par que esta calculadora aceita. O recurso de memorização SOH-CAH-TOA resume os três emparelhamentos: SOH significa Seno é Oposto sobre Hipotenusa, CAH significa Cosseno é Adjacente sobre Hipotenusa, e TOA significa Tangente é Oposto sobre Adjacente. Quando os lados conhecidos são oposto e hipotenusa, aplica-se SOH, então o arco seno é a função inversa correta."
          }
        ],
        "figcaption": "Como o arco seno funciona: divida o cateto oposto pela hipotenusa e aplique o seno inverso para recuperar o ângulo.",
        "imgAlt": "Diagrama mostrando a divisão de a por c e depois a aplicação do arco seno para obter o ângulo"
      },
      "arcsin-formula": {
        "h2": "Como funciona a fórmula do seno inverso",
        "blocks": [
          {
            "kind": "p",
            "text": "Comece com a definição de seno: sin(A) = a/c"
          },
          {
            "kind": "p",
            "text": "Os comprimentos conhecidos dos lados permitem calcular a razão à direita. Em seguida, aplique o seno inverso aos dois lados para isolar o ângulo: A = arcsin(a/c)"
          },
          {
            "kind": "p",
            "text": "O seno inverso é aplicado à razão inteira porque a razão como um todo é o valor do seno. Veja um exemplo numérico. Dados a = 3 cm e c = 5 cm:"
          },
          {
            "kind": "p",
            "text": "Passo 1: Divida o cateto oposto pela hipotenusa: 3/5 = 0.6."
          },
          {
            "kind": "p",
            "text": "Passo 2: Aplique o seno inverso: A = arcsin(0.6)."
          },
          {
            "kind": "p",
            "text": "Passo 3: Calcule o ângulo: A approx 36.87 graus."
          },
          {
            "kind": "p",
            "text": "O resultado é uma aproximação arredondada para duas casas decimais. Em linguagem simples: o ângulo cujo seno é 0.6 mede cerca de 36.87 graus."
          }
        ]
      },
      "arcsin-howto": {
        "h2": "Como usar a calculadora de ângulo de triângulo retângulo a partir do seno",
        "steps": [
          "Identifique o ângulo reto. A calculadora só funciona para triângulos retângulos, então localize primeiro o canto de 90 graus.",
          "Localize o cateto oposto a. Ele fica diretamente oposto ao ângulo A e nunca toca seu vértice.",
          "Identifique a hipotenusa c. Ela fica oposta ao ângulo de 90 graus e é o lado mais longo.",
          "Meça ou obtenha os comprimentos dos dois lados. Use uma fita métrica, um desenho de projeto ou os dados fornecidos pelo problema.",
          "Digite o comprimento do cateto oposto no campo de entrada correspondente.",
          "Digite o comprimento da hipotenusa em seu campo de entrada.",
          "Selecione unidades compatíveis com os seletores de unidade para que os dois lados usem a mesma unidade.",
          "Verifique se a hipotenusa é maior que o cateto oposto. Se não for, os lados estão rotulados errado.",
          "Pressione Calcular Ângulo A. A ferramenta divide, aplica o arco seno e devolve o ângulo.",
          "Leia o ângulo calculado em graus e observe se ele parece razoável para o triângulo.",
          "Verifique o resultado com uma das conferências na seção de verificação abaixo.",
          "Use Redefinir para limpar as entradas e iniciar outro cálculo."
        ]
      },
      "arcsin-examples": {
        "h2": "Exemplos passo a passo de como encontrar um ângulo usando o seno",
        "blocks": [
          {
            "kind": "h3",
            "text": "Exemplo 1: Um triângulo retângulo básico 3-4-5"
          },
          {
            "kind": "p",
            "text": "Dados o cateto oposto a = 3 cm e a hipotenusa c = 5 cm, encontre o ângulo A."
          },
          {
            "kind": "p",
            "text": "Passo 1: Escreva a fórmula: A = arcsin(a/c)."
          },
          {
            "kind": "p",
            "text": "Passo 2: Substitua os valores: A = arcsin(3/5)."
          },
          {
            "kind": "p",
            "text": "Passo 3: Calcule a razão: 3/5 = 0.6."
          },
          {
            "kind": "p",
            "text": "Passo 4: Aplique o seno inverso: A = arcsin(0.6) approx 36.87 graus."
          },
          {
            "kind": "p",
            "text": "Esse ângulo é a inclinação entre a hipotenusa e o cateto adjacente, com o lado de 3 cm oposto a ele."
          },
          {
            "kind": "h3",
            "text": "Exemplo 2: Quando o cateto oposto é metade da hipotenusa"
          },
          {
            "kind": "p",
            "text": "Dados a = 5 m e c = 10 m: A = arcsin(5/10) = arcsin(0.5) = 30 graus exatamente. Este é o conhecido triângulo especial 30-60-90, em que o lado oposto ao ângulo de 30 graus é metade da hipotenusa."
          },
          {
            "kind": "h3",
            "text": "Exemplo 3: Um triângulo com razão oposto/hipotenusa de 0.8"
          },
          {
            "kind": "p",
            "text": "Dados a = 8 m e c = 10 m: A = arcsin(8/10) = arcsin(0.8) approx 53.13 graus. O ângulo é maior que 30 graus porque o cateto oposto representa uma proporção maior da hipotenusa."
          },
          {
            "kind": "h3",
            "text": "Exemplo 4: Um cateto oposto pequeno"
          },
          {
            "kind": "p",
            "text": "Dados a = 2 ft e c = 10 ft: A = arcsin(2/10) = arcsin(0.2) approx 11.54 graus. Um cateto oposto relativamente curto produz um ângulo pequeno, pois o triângulo é longo e raso."
          }
        ]
      },
      "arcsin-applications": {
        "h2": "Exemplos da vida real de cálculo de ângulos usando o seno",
        "blocks": [
          {
            "kind": "h3",
            "text": "Exemplo 5: Encontrando o ângulo de inclinação de um telhado"
          },
          {
            "kind": "p",
            "text": "Um caibro de telhado tem 6.5 m de comprimento e sobe 4 m verticalmente acima do nível de seu ponto de partida. Encontre o ângulo entre o caibro e a horizontal. O caibro e a elevação vertical formam um triângulo retângulo: a elevação é oposta ao ângulo de inclinação, e o caibro é a hipotenusa. O seno inverso é apropriado porque o par conhecido é oposto e hipotenusa."
          },
          {
            "kind": "p",
            "text": "A = arcsin(4/6.5) = arcsin(0.61538) approx 37.98 graus. O telhado sobe a cerca de 38 graus da horizontal. Observe que este cálculo geométrico não é uma avaliação completa de projeto de telhado; fatores estruturais são uma questão à parte."
          },
          {
            "kind": "h3",
            "text": "Exemplo 6: Encontrando o ângulo de uma escada"
          },
          {
            "kind": "p",
            "text": "Uma escada tem 5.5 m de comprimento e alcança 4.5 m na parede. Calcule o ângulo entre a escada e o chão nivelado. A altura da parede é oposta ao ângulo do chão, e a própria escada é a hipotenusa, então aplica-se o arco seno."
          },
          {
            "kind": "p",
            "text": "A = arcsin(4.5/5.5) approx 54.90 graus. A escada inclina-se a cerca de 54.9 graus. Este cálculo sozinho não estabelece se a escada está posicionada com segurança."
          },
          {
            "kind": "h3",
            "text": "Exemplo 7: Calculando a inclinação de uma rampa"
          },
          {
            "kind": "p",
            "text": "Uma rampa tem comprimento inclinado de 9.5 m e elevação vertical de 0.75 m. Encontre seu ângulo em relação à horizontal. A superfície inclinada é a hipotenusa e a elevação vertical é oposta ao ângulo de inclinação."
          },
          {
            "kind": "p",
            "text": "A = arcsin(0.75/9.5) approx 4.53 graus. A rampa sobe suavemente a 4.53 graus. Não afirme que a rampa calculada atende aos requisitos de acessibilidade ou do código de obras."
          },
          {
            "kind": "h3",
            "text": "Exemplo 8: Encontrando um ângulo em topografia"
          },
          {
            "kind": "p",
            "text": "Uma medição topográfica simplificada registra uma diferença vertical de 30 m e uma distância inclinada em linha reta de 50 m. Calcule o ângulo entre a linha inclinada e a horizontal. A diferença vertical é oposta ao ângulo; a distância inclinada é a hipotenusa."
          },
          {
            "kind": "p",
            "text": "A = arcsin(30/50) = arcsin(0.6) approx 36.87 graus. A topografia real pode exigir correções de altura do instrumento e ajustes de terreno além deste modelo simplificado."
          },
          {
            "kind": "h3",
            "text": "Exemplo 9: Calculando o ângulo de um cabo de sustentação"
          },
          {
            "kind": "p",
            "text": "Um cabo de sustentação tem 18 m de comprimento, com uma separação vertical de 10 m entre suas extremidades. Encontre o ângulo entre o cabo e a horizontal. A separação vertical é o cateto oposto e o cabo é a hipotenusa."
          },
          {
            "kind": "p",
            "text": "A = arcsin(10/18) approx 33.75 graus. O resultado descreve apenas a geometria; não determina a tensão do cabo, a resistência da ancoragem ou a segurança estrutural."
          },
          {
            "kind": "h3",
            "text": "Exemplo 10: Encontrando a inclinação de uma escada"
          },
          {
            "kind": "p",
            "text": "Uma escada simplificada tem elevação vertical de 2.8 m e comprimento inclinado da longarina de 5 m. Calcule o ângulo entre a longarina e a horizontal. A elevação e a longarina são o cateto oposto e a hipotenusa, respectivamente."
          },
          {
            "kind": "p",
            "text": "A = arcsin(2.8/5) = arcsin(0.56) approx 34.06 graus. Este cálculo não estabelece conformidade com o código de obras."
          },
          {
            "kind": "h3",
            "text": "Exemplo 11: Calculando o ângulo de subida de uma aeronave"
          },
          {
            "kind": "p",
            "text": "Em um trecho de voo simplificado, uma aeronave ganha 1,500 m de altitude percorrendo 5,000 m ao longo de uma trajetória reta. Estime o ângulo de subida em relação à horizontal. O ganho de altitude é oposto ao ângulo de subida; a trajetória de voo é a hipotenusa."
          },
          {
            "kind": "p",
            "text": "A = arcsin(1500/5000) = arcsin(0.3) approx 17.46 graus. Este é um modelo de trecho reto, não uma análise completa de uma trajetória em mudança."
          },
          {
            "kind": "h3",
            "text": "Exemplo 12: Encontrando o ângulo de um suporte mecânico"
          },
          {
            "kind": "p",
            "text": "Um suporte mecânico tem comprimento de 1,700 mm e elevação vertical de 800 mm. Calcule seu ângulo em relação à horizontal. A fórmula funciona igualmente em milímetros: a elevação é oposta, o comprimento do suporte é a hipotenusa."
          },
          {
            "kind": "p",
            "text": "A = arcsin(800/1700) approx 28.07 graus. O resultado descreve a geometria, não a resistência estrutural."
          },
          {
            "kind": "h3",
            "text": "Exemplo 13: Calculando a inclinação da lança de um guindaste"
          },
          {
            "kind": "p",
            "text": "Uma lança de guindaste simplificada tem comprimento de 10 m e componente vertical de 8 m. Encontre o ângulo entre a lança e a horizontal. O comprimento da lança é a hipotenusa e o componente vertical é oposto ao ângulo."
          },
          {
            "kind": "p",
            "text": "A = arcsin(8/10) = arcsin(0.8) approx 53.13 graus. Não trate o resultado como prova de capacidade do guindaste ou de segurança operacional."
          },
          {
            "kind": "h3",
            "text": "Exemplo 14: Estimando o ângulo de elevação de uma árvore"
          },
          {
            "kind": "p",
            "text": "Uma pessoa observa o topo de uma árvore a partir de um ponto em que a diferença vertical até o topo é de 12 m e a distância reta de visada é de 20 m. Encontre o ângulo de elevação. A diferença vertical é oposta ao ângulo; a linha de visada é a hipotenusa."
          },
          {
            "kind": "p",
            "text": "A = arcsin(12/20) = arcsin(0.6) approx 36.87 graus. Isso fornece o ângulo a partir do nível de observação; não fornece automaticamente a altura total da árvore acima do solo."
          },
          {
            "kind": "h3",
            "text": "Exemplo 15: Calculando a inclinação de uma trilha"
          },
          {
            "kind": "p",
            "text": "Um trecho reto simplificado de trilha tem comprimento inclinado de 100 m e elevação vertical de 80 m. Encontre o ângulo de inclinação. A elevação e a distância inclinada são o cateto oposto e a hipotenusa."
          },
          {
            "kind": "p",
            "text": "A = arcsin(80/100) = arcsin(0.8) approx 53.13 graus. Esta é uma ladeira íngreme ilustrativa; trilhas reais variam de inclinação ao longo do percurso."
          },
          {
            "kind": "h3",
            "text": "Exemplo 16: Encontrando o ângulo de um suporte de toldo"
          },
          {
            "kind": "p",
            "text": "Um suporte diagonal de toldo tem 3.5 m de comprimento e sobe 1.2 m verticalmente. Calcule o ângulo entre o suporte e a horizontal. A elevação vertical é oposta ao ângulo e o suporte é a hipotenusa."
          },
          {
            "kind": "p",
            "text": "A = arcsin(1.2/3.5) approx 20.05 graus. O resultado não verifica a adequação estrutural do suporte."
          }
        ],
        "table": {
          "headers": ["Situação", "Oposto", "Hipotenusa", "Fórmula", "Ângulo", "Significado"],
          "rows": [
            ["Caibro do telhado", "4 m", "6.5 m", "arcsin(4/6.5)", "37.98°", "Inclinação do telhado a partir da horizontal"],
            ["Escada", "4.5 m", "5.5 m", "arcsin(4.5/5.5)", "54.90°", "Ângulo de inclinação a partir do chão"],
            ["Rampa", "0.75 m", "9.5 m", "arcsin(0.75/9.5)", "4.53°", "Inclinação suave no estilo de acessibilidade"],
            ["Topografia", "30 m", "50 m", "arcsin(30/50)", "36.87°", "Ângulo de inclinação da linha medida"],
            ["Cabo de sustentação", "10 m", "18 m", "arcsin(10/18)", "33.75°", "Ângulo do cabo com a horizontal"],
            ["Escada", "2.8 m", "5 m", "arcsin(2.8/5)", "34.06°", "Inclinação da longarina"],
            ["Subida de aeronave", "1500 m", "5000 m", "arcsin(1500/5000)", "17.46°", "Estimativa do ângulo de subida"],
            ["Suporte", "800 mm", "1700 mm", "arcsin(800/1700)", "28.07°", "Ângulo do suporte com a horizontal"],
            ["Lança do guindaste", "8 m", "10 m", "arcsin(8/10)", "53.13°", "Elevação da lança"],
            ["Observação de árvore", "12 m", "20 m", "arcsin(12/20)", "36.87°", "Ângulo de elevação"],
            ["Trilha", "80 m", "100 m", "arcsin(80/100)", "53.13°", "Inclinação íngreme da trilha"],
            ["Suporte de toldo", "1.2 m", "3.5 m", "arcsin(1.2/3.5)", "20.05°", "Ângulo do suporte com a horizontal"]
          ]
        },
        "figcaption": "Quatro exemplos práticos de arco seno: telhado, escada, rampa e topografia, cada um com seus lados medidos e o ângulo resultante.",
        "imgAlt": "Quatro painéis: caibro do telhado, escada, rampa e exemplos de topografia com arco seno"
      },
      "arcsin-ratio": {
        "h2": "Como a razão oposto/hipotenusa muda o ângulo",
        "blocks": [
          {
            "kind": "p",
            "text": "A razão a/c determina o ângulo A. Um cateto oposto maior em relação à hipotenusa produz um ângulo agudo maior, porque uma parte maior do comprimento da hipotenusa se ergue verticalmente. Uma razão pequena produz um ângulo pequeno: o triângulo é longo e raso."
          },
          {
            "kind": "p",
            "text": "Quando o cateto oposto é exatamente metade da hipotenusa, o ângulo é de 30 graus. Triângulos proporcionais compartilham os ângulos independentemente do tamanho: escalar todos os lados pelo mesmo fator deixa todas as razões inalteradas, então os ângulos permanecem fixos. Trocar as unidades de metros para centímetros não muda nada pelo mesmo motivo."
          },
          {
            "kind": "p",
            "text": "A razão deve permanecer entre 0 e 1 para um triângulo retângulo comum. Uma razão de 0 significaria nenhum cateto oposto, e uma razão de 1 significaria o cateto oposto igual à hipotenusa; ambos são casos-limite degenerados, não triângulos reais com três lados positivos."
          }
        ],
        "table": {
          "headers": ["Cateto oposto a", "Hipotenusa c", "Razão a/c", "Ângulo A"],
          "rows": [
            ["2", "10", "0.2", "Aproximadamente 11.54°"],
            ["5", "10", "0.5", "30°"],
            ["8", "10", "0.8", "Aproximadamente 53.13°"]
          ]
        },
        "figcaption": "Com a hipotenusa fixa em 10 unidades, um cateto oposto maior produz um ângulo agudo maior: 11.54, 30 e depois 53.13 graus.",
        "imgAlt": "Três painéis mostrando como um cateto oposto maior gera um ângulo maior com hipotenusa fixa"
      },
      "arcsin-units": {
        "h2": "Entendendo as unidades de ângulo e a precisão de medição",
        "blocks": [
          {
            "kind": "p",
            "text": "Esta calculadora devolve ângulos em graus, a unidade padrão para construção, topografia e geometria escolar. Um grau divide um círculo completo em 360 partes. Os radianos são a alternativa: um círculo completo tem 2pi radianos. O seno inverso em uma calculadora de bolso pode devolver graus ou radianos, dependendo da configuração de modo."
          },
          {
            "kind": "p",
            "text": "Converta entre eles com: Graus = Radianos x 180/pi. A razão de lados de entrada em si não tem unidade, e os dois lados devem usar unidades compatíveis: metros com metros, ou milímetros com milímetros."
          },
          {
            "kind": "h3",
            "text": "Exemplo: a unidade de medida muda o ângulo?"
          },
          {
            "kind": "p",
            "text": "Tome a = 3 m e c = 5 m. A razão é 0.6 e o ângulo é 36.87 graus. Em centímetros, a = 300 cm e c = 500 cm dão a mesma razão 0.6 e o mesmo ângulo. Escalar as duas medidas pelo mesmo fator se cancela."
          },
          {
            "kind": "p",
            "text": "Guarde dígitos extras nas etapas intermediárias e arredonde apenas o ângulo final. A precisão justificada depende das medidas de entrada: medições de campo grosseiras sustentam uma casa decimal, enquanto medições precisas de oficina podem sustentar duas."
          }
        ]
      },
      "arcsin-mistakes": {
        "h2": "Erros comuns ao calcular um ângulo usando o seno",
        "listItems": [
          "Usar o cateto adjacente em vez do oposto. Verifique em qual vértice seu ângulo está e tome o lado oposto a ele. Se você usou o cateto que toca o vértice, calculou o arco cosseno, não o arco seno.",
          "Usar a hipotenusa como numerador. A fórmula é a/c, oposto sobre hipotenusa. Invertê-la dá uma razão acima de 1 e um erro de domínio.",
          "Inverter a razão. arcsin(c/a) não é o mesmo ângulo. Para o 3-4-5, arcsin(3/5) = 36.87 graus, mas arcsin(5/3) é indefinido.",
          "Usar o seno comum em vez do seno inverso. O seno precisa de um ângulo de entrada. Se você já conhece os lados e precisa do ângulo, precisa da função inversa.",
          "Confundir seno inverso com recíproco do seno. sin^-1(x) é o arco seno; 1/sin(x) é a cossecante. Não têm relação.",
          "Digitar um cateto oposto maior que a hipotenusa. Geometricamente impossível em um triângulo retângulo. Rotule novamente os lados: a maior medida é a hipotenusa.",
          "Digitar comprimentos de lado zero ou negativos. Comprimentos devem ser positivos. Um cateto oposto zero descreve uma linha plana, não um triângulo.",
          "Misturar unidades de medida. Digitar o cateto oposto em metros e a hipotenusa em centímetros corrompe a razão. Converta primeiro.",
          "Arredondar a razão cedo demais. Arredondar 0.61538 para 0.62 antes de aplicar o arco seno desloca o exemplo do telhado de 37.98 para 38.32 graus. Guarde a precisão total até o fim.",
          "Relatar radianos quando se espera graus. Uma resposta de 0.64 geralmente significa que a calculadora estava em modo radiano; multiplique por 180/pi para obter 36.87 graus.",
          "Calcular o ângulo B quando a ferramenta encontra o ângulo A. A calculadora devolve o ângulo oposto ao lado a. O outro ângulo agudo é 90 graus - A.",
          "Supor que o ângulo comprova a segurança estrutural. O ângulo é geometria pura. Estabilidade de escada, resistência de telhado e conformidade de rampa exigem conferências de engenharia separadas.",
          "Confundir elevação vertical com distância inclinada. No exemplo da rampa, 9.5 m é a superfície inclinada (hipotenusa), não o comprimento horizontal. Trocá-los muda completamente o triângulo.",
          "Tratar uma razão impossível como válida. Se seu a/c calculado passa de 1, pare: nenhum triângulo retângulo tem esses lados. Encontre o erro de rotulagem em vez de forçar um cálculo."
        ]
      },
      "arcsin-verify": {
        "h2": "Como verificar se seu ângulo calculado é válido",
        "blocks": [
          {
            "kind": "p",
            "text": "Um triângulo retângulo válido, não degenerado, exige: o cateto oposto positivo, a hipotenusa positiva, a hipotenusa estritamente maior que o cateto oposto, a razão a/c estritamente entre 0 e 1, e o ângulo resultante estritamente entre 0 e 90 graus."
          },
          {
            "kind": "p",
            "text": "Se a = c, o arco seno devolve 90 graus, um caso-limite degenerado em vez de um triângulo real. Se a > c, o triângulo é geometricamente impossível."
          },
          {
            "kind": "h3",
            "text": "Método 1: Confira a razão do seno"
          },
          {
            "kind": "p",
            "text": "Verifique sin(A) approx a/c usando o ângulo sem arredondar. Para o exemplo 3-4-5, sin(36.87 graus) approx 0.6 = 3/5."
          },
          {
            "kind": "h3",
            "text": "Método 2: Confira o ângulo complementar"
          },
          {
            "kind": "p",
            "text": "Calcule B = 90 graus - A. Os dois ângulos agudos devem somar exatamente 90 graus. Depois confirme que o triângulo faz sentido com o ângulo B como referência."
          },
          {
            "kind": "h3",
            "text": "Método 3: Use o Teorema de Pitágoras"
          },
          {
            "kind": "p",
            "text": "Calcule o cateto adjacente b = sqrt(c^2 - a^2) e verifique a^2 + b^2 approx c^2. Para a = 3 e c = 5: b = sqrt(25 - 9) = 4, e 9 + 16 = 25. Pequenas diferenças vêm do arredondamento do ângulo exibido, não da calculadora."
          }
        ]
      },
      "arcsin-choose": {
        "h2": "Escolhendo a calculadora de triângulo retângulo certa",
        "blocks": [
          {
            "kind": "p",
            "text": "Calculadora de Ângulo de Triângulo Retângulo a partir do Seno: use quando você conhece o cateto oposto e a hipotenusa e precisa do ângulo A. Esta é a página em que você está."
          },
          {
            "kind": "p",
            "text": "Calculadora de Ângulo de Triângulo Retângulo a partir do Cosseno: use quando você conhece o cateto adjacente e a hipotenusa. Mesmo ângulo, par conhecido diferente."
          },
          {
            "kind": "p",
            "text": "Calculadora de Ângulo de Triângulo Retângulo a partir da Tangente: use quando você conhece os dois catetos, mas não a hipotenusa. Comum em medições de campo de elevação sobre extensão."
          },
          {
            "kind": "p",
            "text": "Calculadora de Ângulo de Triângulo Retângulo: ajuda a escolher o método certo quando você não sabe ao certo quais lados tem."
          },
          {
            "kind": "p",
            "text": "Calculadora de Lado de Triângulo Retângulo a partir do Seno: inverte a direção: dado um ângulo e a hipotenusa, ela encontra o cateto oposto."
          },
          {
            "kind": "p",
            "text": "Calculadora de Lado de Triângulo Retângulo: encontra comprimentos de lados faltantes a partir de medidas conhecidas do triângulo."
          },
          {
            "kind": "p",
            "text": "Combine a ferramenta com suas medidas. Se o cateto oposto é desconhecido e difícil de medir, não o calcule só para usar o arco seno; escolha a função inversa que se ajusta aos lados que você já tem."
          }
        ]
      },
      "arcsin-faq": {
        "h2": "Perguntas frequentes",
        "blocks": []
      },
      "arcsin-related": {
        "h2": "Explore calculadoras de triângulo relacionadas",
        "blocks": []
      },
      "arcsin-conclusion": {
        "h2": "Encontre qualquer ângulo a partir do seno com confiança",
        "blocks": [
          {
            "kind": "p",
            "text": "Comece identificando o cateto oposto: o lado oposto ao seu ângulo alvo. Confirme que a hipotenusa é o lado mais longo. Divida, aplique o arco seno e leia o ângulo em graus. Obtenha o segundo ângulo a partir de 90 menos o primeiro. Verifique com a conferência de ida e volta do seno, um cálculo de método cruzado e o Teorema de Pitágoras. Com essas etapas, qualquer problema de oposto e hipotenusa se reduz a uma rotina confiável. Volte à calculadora no topo desta página para calcular seus números."
          }
        ]
      }
    },
    "faqs": [
      {
        "question": "O que a fórmula A = arcsin(a/c) calcula?",
        "answer": "Ela encontra o ângulo agudo cujo seno é igual à razão entre o cateto oposto e a hipotenusa. Divida o comprimento do cateto oposto pelo comprimento da hipotenusa e aplique o seno inverso para converter esse decimal no ângulo em graus."
      },
      {
        "question": "Como encontrar um ângulo usando o seno inverso?",
        "answer": "Identifique o cateto oposto e a hipotenusa, divida o primeiro pelo segundo para obter uma razão entre 0 e 1 e aplique o arco seno. Por exemplo, oposto 3 e hipotenusa 5 dão arcsin(0.6), que é aproximadamente 36.87 graus."
      },
      {
        "question": "Por que preciso do cateto oposto e da hipotenusa?",
        "answer": "Porque o seno é definido como oposto sobre hipotenusa. Esses dois lados determinam totalmente a razão, e a razão determina totalmente o ângulo. Nenhuma outra medida é necessária, e o cateto adjacente nunca entra na fórmula."
      },
      {
        "question": "Posso calcular o ângulo sem conhecer o cateto adjacente?",
        "answer": "Sim. Esse é o ponto desta calculadora. O arco seno usa apenas o cateto oposto e a hipotenusa, de modo que o cateto adjacente pode permanecer desconhecido o tempo todo."
      },
      {
        "question": "Qual é a diferença entre seno e seno inverso?",
        "answer": "O seno recebe um ângulo e devolve uma razão: sin(30 graus) = 0.5. O seno inverso inverte isso: recebe uma razão e devolve o ângulo, então arcsin(0.5) = 30 graus. Use o seno quando você conhece o ângulo; use o arco seno quando conhece os lados."
      },
      {
        "question": "Arco seno é o mesmo que sin^-1?",
        "answer": "Sim. Arcsin(x) e sin^-1(x) são duas notações para a mesma função de seno inverso. O sobrescrito -1 não significa recíproco; o recíproco do seno é a cossecante, escrita csc(x)."
      },
      {
        "question": "Por que a hipotenusa deve ser maior que o cateto oposto?",
        "answer": "A hipotenusa é sempre o lado mais longo de um triângulo retângulo. Se sua entrada de cateto oposto for maior, os lados estão rotulados errado: a maior das suas três medidas é a hipotenusa por definição."
      },
      {
        "question": "O que acontece se o cateto oposto for igual à hipotenusa?",
        "answer": "A razão vira 1 e arcsin(1) = 90 graus. Mas um ângulo agudo de 90 graus é impossível em um triângulo retângulo não degenerado; lados iguais descrevem um caso-limite colapsado, não um triângulo real."
      },
      {
        "question": "Como a razão oposto/hipotenusa afeta o ângulo?",
        "answer": "Uma razão maior significa um ângulo maior. Uma razão de 0.2 dá cerca de 11.54 graus, 0.5 dá exatamente 30 graus e 0.8 dá cerca de 53.13 graus. À medida que o cateto oposto se aproxima do comprimento da hipotenusa, o ângulo se aproxima de 90 graus."
      },
      {
        "question": "Como posso verificar meu ângulo calculado?",
        "answer": "Três conferências independentes: calcule sin(A) e confirme que é igual a a/c; calcule o complemento B = 90 - A e confirme que o triângulo ainda faz sentido; derive o cateto adjacente com o Teorema de Pitágoras e confirme a^2 + b^2 = c^2."
      },
      {
        "question": "Posso usar esta calculadora para estimar o ângulo de um telhado, rampa ou escada?",
        "answer": "Sim, para a geometria. Digite a elevação vertical como o cateto oposto e o comprimento inclinado como a hipotenusa. Lembre-se de que o resultado é apenas um ângulo geométrico; não certifica segurança estrutural nem conformidade com códigos."
      },
      {
        "question": "Por que minha resposta calculada pode diferir um pouco da resposta de um livro didático?",
        "answer": "Geralmente é arredondamento: os livros podem arredondar a razão antes de aplicar o arco seno, ou arredondar o ângulo final de forma diferente. Guarde a precisão total durante o cálculo e arredonde apenas no fim, e as respostas concordarão até os dígitos exibidos."
      }
    ],
    "relatedHeading": "Explore calculadoras de triângulo relacionadas",
    "relatedItems": [
      "Calculadora de Ângulo de Triângulo Retângulo",
      "Calculadora de Ângulo de Triângulo Retângulo a partir do Cosseno",
      "Calculadora de Ângulo de Triângulo Retângulo a partir da Tangente",
      "Calculadora de Lado de Triângulo Retângulo a partir do Seno",
      "Calculadora de Lado de Triângulo Retângulo",
      "Calculadora de Ângulo Faltante de Triângulo Retângulo",
      "Calculadora de Razões Trigonométricas de Triângulo Retângulo",
      "Calculadora de Razão Seno"
    ]
  },
  "bn": {
    "tocHeading": "এই নির্দেশিকায়",
    "tocItems": {
      "arcsin-intro": "সাইন দিয়ে কোণ কীভাবে নির্ণয় করবেন",
      "arcsin-anatomy": "বিপরীত বাহু ও অতিভুজ বোঝা",
      "arcsin-what": "সমকোণী ত্রিভুজে সাইন কী?",
      "arcsin-formula": "বিপরীত সাইন সূত্র কীভাবে কাজ করে",
      "arcsin-howto": "ক্যালকুলেটর কীভাবে ব্যবহার করবেন",
      "arcsin-examples": "ধাপে ধাপে উদাহরণ",
      "arcsin-applications": "বাস্তব জীবনের উদাহরণ",
      "arcsin-ratio": "অনুপাত কীভাবে কোণ বদলায়",
      "arcsin-units": "কোণের একক ও পরিমাপের নির্ভুলতা",
      "arcsin-mistakes": "সাধারণ ভুল",
      "arcsin-verify": "গণনা করা কোণ যাচাই",
      "arcsin-choose": "সঠিক ক্যালকুলেটর বেছে নেওয়া",
      "arcsin-faq": "প্রায়শই জিজ্ঞাসিত প্রশ্ন",
      "arcsin-related": "সম্পর্কিত ত্রিভুজ ক্যালকুলেটর দেখুন",
      "arcsin-conclusion": "আত্মবিশ্বাসের সাথে সাইন থেকে যেকোনো কোণ নির্ণয় করুন"
    },
    "sections": {
      "arcsin-intro": {
        "h2": "সাইন দিয়ে কোণ কীভাবে নির্ণয় করবেন",
        "blocks": [
          {
            "kind": "p",
            "text": "একটি হুইলচেয়ার র‍্যাম্পের কথা ভাবুন: আপনি জানেন এর ঢালু পৃষ্ঠের দৈর্ঘ্য 9.5 মিটার এবং এটি মাটি থেকে 0.75 মিটার ওপরে উঠেছে। র‍্যাম্পের ঢালের কোণ কত? সাইন থেকে সমকোণী ত্রিভুজের কোণ নির্ণয় ক্যালকুলেটর ঠিক এই ধরনের প্রশ্নের উত্তর দেয়। এটি একটি সমকোণী ত্রিভুজের বিপরীত বাহু ও অতিভুজ নেয় এবং তাদের মধ্যবর্তী সূক্ষ্মকোণটি ফেরত দেয়।"
          },
          {
            "kind": "p",
            "text": "এই দুটি পরিমাপই যথেষ্ট, কারণ সাইনকে সংজ্ঞায়িত করা হয় বিপরীত বাহু ও অতিভুজের অনুপাত হিসেবে। সেই অনুপাত জানা হয়ে গেলে, বিপরীত সাইন এটিকে আবার কোণে রূপান্তর করে। সন্নিহিত বাহু গণনায় কখনো আসে না, তাই যখন বিপরীত বাহু ও অতিভুজই আপনার প্রকৃত পরিমাপ হয়, তখন এটিই সঠিক সরঞ্জাম।"
          },
          {
            "kind": "p",
            "text": "এই নির্দেশিকায়, A হলো গণনা করা কাঙ্ক্ষিত সূক্ষ্মকোণ, a হলো A কোণের বিপরীত বাহু, এবং c হলো অতিভুজ। গণনা করা কোণটি হলো সেই ঢাল, যেখানে অতিভুজ সন্নিহিত বাহুর সাথে মিলেছে, ডিগ্রিতে পরিমাপ করা।"
          }
        ]
      },
      "arcsin-anatomy": {
        "h2": "বিপরীত বাহু ও অতিভুজ বোঝা",
        "blocks": [
          {
            "kind": "h3",
            "text": "সমকোণী ত্রিভুজ কী?"
          },
          {
            "kind": "p",
            "text": "সমকোণী ত্রিভুজের একটি কোণ ঠিক 90 ডিগ্রি। অন্য দুটি কোণ সূক্ষ্ম, অর্থাৎ প্রতিটি 90 ডিগ্রির চেয়ে কঠোরভাবে ছোট, এবং একসাথে সবসময় 90 ডিগ্রি হয়। এই পূরক সম্পর্কের কারণে একটি সূক্ষ্মকোণ বের করলেই বিয়োগ করে অন্যটি সাথে সাথে পাওয়া যায়।"
          },
          {
            "kind": "p",
            "text": "সমকোণ শর্তটি গুরুত্বপূর্ণ, কারণ সাইন, কোসাইন ও ট্যানজেন্ট সংজ্ঞায়িত হয় সমকোণী ত্রিভুজের স্থির বাহু-অনুপাতের মাধ্যমে। 90-ডিগ্রির কোণ না থাকলে, a/c অনুপাতের কোনো নির্দিষ্ট কোণের সাথে কোনো স্থির সম্পর্ক থাকে না, এবং বিপরীত সাইন একটি কোণ পুনরুদ্ধার করতে পারে না।"
          },
          {
            "kind": "h3",
            "text": "বিপরীত বাহু কী?"
          },
          {
            "kind": "p",
            "text": "বিপরীত বাহু হলো A কোণের ঠিক বিপরীতে থাকা বাহু। এটি কখনো A কোণের শীর্ষবিন্দু স্পর্শ করে না। উচ্চতা-সংক্রান্ত সমস্যায় এই বাহু সাধারণত উল্লম্ব উচ্চতা নির্দেশ করে: মই দেয়াল বরাবর কত উঁচুতে পৌঁছেছে, র‍্যাম্পের উত্থান, বা ক্রেনের বুমের উল্লম্ব উপাদান।"
          },
          {
            "kind": "p",
            "text": "নামকরণটি আপেক্ষিক। আপনার নির্দেশকোণ A থেকে B-তে বদলে দিলে, যে বাহু বিপরীত ছিল তা সন্নিহিত হয়ে যায় এবং বিপরীতটিও। বাহুর নাম দেওয়ার আগে সবসময় নিশ্চিত হোন আপনি কোন কোণের সমাধান করছেন।"
          },
          {
            "kind": "h3",
            "text": "অতিভুজ কী?"
          },
          {
            "kind": "p",
            "text": "অতিভুজ হলো সমকোণের বিপরীত বাহু, যা c দিয়ে প্রকাশ করা হয়। এটি সবসময় ত্রিভুজের দীর্ঘতম বাহু। এটি কখনো সমকোণের শীর্ষবিন্দু স্পর্শ করে না। ব্যবহারিক ক্ষেত্রে অতিভুজ প্রায়ই ঢালু দৈর্ঘ্য নিজেই: মই, ছাদের কড়ি, র‍্যাম্পের পৃষ্ঠ, বা সরলরেখা দৃষ্টিদূরত্ব।"
          },
          {
            "kind": "p",
            "text": "ত্রিভুজটি ঘোরানো অবস্থায় আঁকা থাকলে, প্রথমে বর্গাকার সমকোণ-চিহ্নের বিপরীত বাহুটি খুঁজে অতিভুজ শনাক্ত করুন। সেই শনাক্তকরণ থেকেই বাকি সব ঠিক হয়।"
          },
          {
            "kind": "h3",
            "text": "সন্নিহিত বাহু কী?"
          },
          {
            "kind": "p",
            "text": "b বাহু হলো সেই পা, যা অতিভুজ না হয়েও A কোণকে স্পর্শ করে। এই ক্যালকুলেটরের এটি প্রয়োজন নেই। পরে সন্নিহিত বাহু প্রয়োজন হলে, পিথাগোরাসের উপপাদ্য দেয়: b = sqrt(c^2 - a^2)。"
          }
        ],
        "figcaption": "আর্কসাইনের জন্য গঠন: a বাহু A কোণের বিপরীতে থাকে, এবং c বাহু সমকোণের বিপরীতে থাকা অতিভুজ।",
        "imgAlt": "আর্কসাইনের জন্য বিপরীত বাহু a ও অতিভুজ c হাইলাইট করা সমকোণী ত্রিভুজ"
      },
      "arcsin-what": {
        "h2": "সমকোণী ত্রিভুজে সাইন কী?",
        "blocks": [
          {
            "kind": "p",
            "text": "সাইন পরিমাপ করে অতিভুজের কত অনুপাত বিপরীত বাহু দিয়ে প্রকাশিত হয়। সংজ্ঞা হলো: sin(A) = a/c"
          },
          {
            "kind": "p",
            "text": "এখানে sin(A) হলো A কোণের সাইন, a হলো বিপরীত বাহু, এবং c হলো অতিভুজ। বিপরীত বাহু 3 একক ও অতিভুজ 5 একক হলে, sin(A) = 3/5 = 0.6। অনুপাতটি মাত্রাহীন: মিটার দিয়ে মিটার ভাগ করলে বাতিল হয়ে যায়, তাই মিটার, ফুট বা সেন্টিমিটারে মাপলেও একই 0.6 পাওয়া যায়।"
          },
          {
            "kind": "h3",
            "text": "বিপরীত সাইন কী?"
          },
          {
            "kind": "p",
            "text": "সাধারণ সাইন কোণ দিয়ে শুরু করে একটি অনুপাত দেয়। বিপরীত সাইন একটি বৈধ অনুপাত দিয়ে শুরু করে সংশ্লিষ্ট কোণটি ফেরত দেয়। sin(A) = 0.6 হলে, A = arcsin(0.6) approx 36.87 ডিগ্রি। বিপরীত সাইন সাইনের সম্পর্ককে উল্টে দিয়ে আপনার শুরুর কোণটি পুনরুদ্ধার করে।"
          },
          {
            "kind": "h3",
            "text": "আর্কসাইন কি বিপরীত সাইনের মতোই?"
          },
          {
            "kind": "p",
            "text": "হ্যাঁ। arcsin(x) ও sin^-1(x) চিহ্নদ্বয় একই ফাংশনকে বোঝায়। -1 উর্ধ্বসূচকটি বিপরীত (reciprocal) মানে নয়। সাইনের বিপরীত সম্পূর্ণ ভিন্ন ফাংশন: কোসেক্যান্ট, যা csc(x) লেখা হয়।"
          },
          {
            "kind": "h3",
            "text": "সূত্রে বিপরীত বাহু কেন ব্যবহার করা হয়?"
          },
          {
            "kind": "p",
            "text": "সাইন হলো সেই অনুপাত, যা বিপরীত বাহুকে অতিভুজের সাথে জোড়ায়, আর ঠিক এই জোড়াটিই এই ক্যালকুলেটর গ্রহণ করে। SOH-CAH-TOA স্মরণ-সহায়ক তিনটি জোড়াকে সংক্ষেপে বলে: SOH মানে সাইন সমান বিপরীত ভাগ অতিভুজ, CAH মানে কোসাইন সমান সন্নিহিত ভাগ অতিভুজ, এবং TOA মানে ট্যানজেন্ট সমান বিপরীত ভাগ সন্নিহিত। আপনার জানা বাহু বিপরীত ও অতিভুজ হলে SOH প্রযোজ্য, তাই আর্কসাইনই সঠিক বিপরীত ফাংশন।"
          }
        ],
        "figcaption": "আর্কসাইন কীভাবে কাজ করে: বিপরীত বাহুকে অতিভুজ দিয়ে ভাগ করুন, তারপর কোণটি পুনরুদ্ধারে বিপরীত সাইন প্রয়োগ করুন।",
        "imgAlt": "a কে c দিয়ে ভাগ করে তারপর আর্কসাইন প্রয়োগ করে কোণ পাওয়ার চিত্র"
      },
      "arcsin-formula": {
        "h2": "বিপরীত সাইন সূত্র কীভাবে কাজ করে",
        "blocks": [
          {
            "kind": "p",
            "text": "সাইনের সংজ্ঞা দিয়ে শুরু করুন: sin(A) = a/c"
          },
          {
            "kind": "p",
            "text": "জানা বাহুর দৈর্ঘ্য দিয়ে ডানদিকের অনুপাতটি গণনা করা যায়। তারপর কোণটি বিচ্ছিন্ন করতে উভয় পক্ষে বিপরীত সাইন প্রয়োগ করুন: A = arcsin(a/c)"
          },
          {
            "kind": "p",
            "text": "বিপরীত সাইন পুরো অনুপাতের ওপর প্রয়োগ করা হয়, কারণ অনুপাতটি সামগ্রিকভাবেই সাইনের মান। একটি সংখ্যাসূচক উদাহরণ দেখুন। ধরা যাক a = 3 cm ও c = 5 cm:"
          },
          {
            "kind": "p",
            "text": "ধাপ 1: বিপরীত বাহুকে অতিভুজ দিয়ে ভাগ করুন: 3/5 = 0.6।"
          },
          {
            "kind": "p",
            "text": "ধাপ 2: বিপরীত সাইন প্রয়োগ করুন: A = arcsin(0.6)।"
          },
          {
            "kind": "p",
            "text": "ধাপ 3: কোণটি গণনা করুন: A approx 36.87 ডিগ্রি।"
          },
          {
            "kind": "p",
            "text": "ফলাফলটি দুই দশমিক স্থানে বৃত্তায়িত একটি আসন্ন মান। সহজ ভাষায়: যে কোণের সাইন 0.6, তার পরিমাপ প্রায় 36.87 ডিগ্রি।"
          }
        ]
      },
      "arcsin-howto": {
        "h2": "সাইন থেকে সমকোণী ত্রিভুজের কোণ ক্যালকুলেটর কীভাবে ব্যবহার করবেন",
        "steps": [
          "সমকোণ শনাক্ত করুন। ক্যালকুলেটর শুধু সমকোণী ত্রিভুজের জন্য কাজ করে, তাই প্রথমে 90-ডিগ্রির কোণটি খুঁজুন।",
          "বিপরীত বাহু a খুঁজুন। এটি A কোণের ঠিক বিপরীতে থাকে এবং কখনো এর শীর্ষবিন্দু স্পর্শ করে না।",
          "অতিভুজ c শনাক্ত করুন। এটি 90-ডিগ্রি কোণের বিপরীতে থাকে এবং দীর্ঘতম বাহু।",
          "উভয় বাহুর দৈর্ঘ্য পরিমাপ করুন বা সংগ্রহ করুন। টেপ, নকশার চিত্র, বা সমস্যার দেওয়া তথ্য ব্যবহার করুন।",
          "বিপরীত বাহুর দৈর্ঘ্য সংশ্লিষ্ট ইনপুট ক্ষেত্রে লিখুন।",
          "অতিভুজের দৈর্ঘ্য তার ইনপুট ক্ষেত্রে লিখুন।",
          "একক নির্বাচক দিয়ে সামঞ্জস্যপূর্ণ একক বাছুন, যাতে উভয় বাহু একই একক ব্যবহার করে।",
          "পরীক্ষা করুন অতিভুজ বিপরীত বাহুর চেয়ে দীর্ঘ কিনা। তা না হলে, বাহুগুলোর নাম ভুল দেওয়া হয়েছে।",
          "কোণ A গণনা করুন চাপুন। সরঞ্জামটি ভাগ করে, আর্কসাইন প্রয়োগ করে এবং কোণটি ফেরত দেয়।",
          "গণনা করা কোণটি ডিগ্রিতে পড়ুন এবং ত্রিভুজের জন্য তা যুক্তিসঙ্গত মনে হচ্ছে কিনা লক্ষ করুন।",
          "নিচের যাচাই বিভাগের পরীক্ষাগুলোর একটি দিয়ে ফলাফল যাচাই করুন।",
          "রিসেট ব্যবহার করে ইনপুট মুছে আরেকটি গণনা শুরু করুন।"
        ]
      },
      "arcsin-examples": {
        "h2": "সাইন দিয়ে কোণ নির্ণয়ের ধাপে ধাপে উদাহরণ",
        "blocks": [
          {
            "kind": "h3",
            "text": "উদাহরণ 1: একটি মৌলিক 3-4-5 সমকোণী ত্রিভুজ"
          },
          {
            "kind": "p",
            "text": "বিপরীত বাহু a = 3 cm ও অতিভুজ c = 5 cm দেওয়া থাকলে, A কোণ নির্ণয় করুন।"
          },
          {
            "kind": "p",
            "text": "ধাপ 1: সূত্রটি লিখুন: A = arcsin(a/c)।"
          },
          {
            "kind": "p",
            "text": "ধাপ 2: মান বসান: A = arcsin(3/5)।"
          },
          {
            "kind": "p",
            "text": "ধাপ 3: অনুপাত গণনা করুন: 3/5 = 0.6।"
          },
          {
            "kind": "p",
            "text": "ধাপ 4: বিপরীত সাইন প্রয়োগ করুন: A = arcsin(0.6) approx 36.87 ডিগ্রি।"
          },
          {
            "kind": "p",
            "text": "এই কোণটি অতিভুজ ও সন্নিহিত বাহুর মধ্যবর্তী ঢাল, যার বিপরীতে 3 cm বাহু দাঁড়িয়ে আছে।"
          },
          {
            "kind": "h3",
            "text": "উদাহরণ 2: যখন বিপরীত বাহু অতিভুজের অর্ধেক"
          },
          {
            "kind": "p",
            "text": "a = 5 m ও c = 10 m দেওয়া থাকলে: A = arcsin(5/10) = arcsin(0.5) = 30 ডিগ্রি ঠিক। এটি পরিচিত 30-60-90 বিশেষ ত্রিভুজ, যেখানে 30-ডিগ্রি কোণের বিপরীত বাহু অতিভুজের অর্ধেক।"
          },
          {
            "kind": "h3",
            "text": "উদাহরণ 3: বিপরীত-থেকে-অতিভুজ অনুপাত 0.8 এমন একটি ত্রিভুজ"
          },
          {
            "kind": "p",
            "text": "a = 8 m ও c = 10 m দেওয়া থাকলে: A = arcsin(8/10) = arcsin(0.8) approx 53.13 ডিগ্রি। 30 ডিগ্রির চেয়ে কোণটি বড়, কারণ বিপরীত বাহু অতিভুজের একটি বড় অংশ প্রতিনিধিত্ব করে।"
          },
          {
            "kind": "h3",
            "text": "উদাহরণ 4: একটি ছোট বিপরীত বাহু"
          },
          {
            "kind": "p",
            "text": "a = 2 ft ও c = 10 ft দেওয়া থাকলে: A = arcsin(2/10) = arcsin(0.2) approx 11.54 ডিগ্রি। তুলনামূলকভাবে খাটো বিপরীত বাহু ছোট কোণ দেয়, কারণ ত্রিভুজটি লম্বা ও চাপা।"
          }
        ]
      },
      "arcsin-applications": {
        "h2": "সাইন দিয়ে কোণ গণনার বাস্তব জীবনের উদাহরণ",
        "blocks": [
          {
            "kind": "h3",
            "text": "উদাহরণ 5: ছাদের ঢালের কোণ নির্ণয়"
          },
          {
            "kind": "p",
            "text": "একটি ছাদের কড়ি 6.5 m লম্বা এবং শুরুর বিন্দুর স্তর থেকে 4 m উল্লম্বভাবে ওপরে ওঠে। কড়ি ও অনুভূমিক রেখার মধ্যবর্তী কোণ নির্ণয় করুন। কড়ি ও উল্লম্ব উত্থান একটি সমকোণী ত্রিভুজ গঠন করে: উত্থানটি ঢাল-কোণের বিপরীতে, এবং কড়িটি অতিভুজ। বিপরীত সাইন যথাযথ, কারণ জানা জোড়াটি বিপরীত ও অতিভুজ।"
          },
          {
            "kind": "p",
            "text": "A = arcsin(4/6.5) = arcsin(0.61538) approx 37.98 ডিগ্রি। ছাদটি অনুভূমিক থেকে প্রায় 38 ডিগ্রিতে ওঠে। মনে রাখবেন এই জ্যামিতিক গণনা সম্পূর্ণ ছাদ-নকশা মূল্যায়ন নয়; কাঠামোগত বিষয়গুলো আলাদা।"
          },
          {
            "kind": "h3",
            "text": "উদাহরণ 6: মইয়ের কোণ নির্ণয়"
          },
          {
            "kind": "p",
            "text": "একটি মই 5.5 m লম্বা এবং দেয়াল বরাবর 4.5 m ওপরে পৌঁছেছে। মই ও সমতল মাটির মধ্যবর্তী কোণ গণনা করুন। দেয়ালের উচ্চতা ভূমি-কোণের বিপরীতে, এবং মই নিজেই অতিভুজ, তাই আর্কসাইন প্রযোজ্য।"
          },
          {
            "kind": "p",
            "text": "A = arcsin(4.5/5.5) approx 54.90 ডিগ্রি। মইটি প্রায় 54.9 ডিগ্রিতে হেলানো। এই গণনা একা মইটি নিরাপদে বসানো আছে কিনা তা নির্ধারণ করে না।"
          },
          {
            "kind": "h3",
            "text": "উদাহরণ 7: র‍্যাম্পের ঢাল গণনা"
          },
          {
            "kind": "p",
            "text": "একটি র‍্যাম্পের ঢালু দৈর্ঘ্য 9.5 m এবং উল্লম্ব উত্থান 0.75 m। অনুভূমিকের সাপেক্ষে এর কোণ নির্ণয় করুন। ঢালু পৃষ্ঠটি অতিভুজ এবং উল্লম্ব উত্থান ঢাল-কোণের বিপরীতে।"
          },
          {
            "kind": "p",
            "text": "A = arcsin(0.75/9.5) approx 4.53 ডিগ্রি। র‍্যাম্পটি মৃদু 4.53 ডিগ্রিতে ওঠে। দাবি করবেন না যে গণনা করা র‍্যাম্পটি প্রবেশযোগ্যতা বা ভবন-বিধির শর্ত পূরণ করে।"
          },
          {
            "kind": "h3",
            "text": "উদাহরণ 8: জরিপে কোণ নির্ণয়"
          },
          {
            "kind": "p",
            "text": "একটি সরলীকৃত জরিপ পরিমাপে উল্লম্ব পার্থক্য 30 m এবং সরলরেখা ঢালু দূরত্ব 50 m রেকর্ড করা হয়েছে। ঢালু রেখা ও অনুভূমিকের মধ্যবর্তী কোণ গণনা করুন। উল্লম্ব পার্থক্য কোণের বিপরীতে; ঢালু দূরত্ব অতিভুজ।"
          },
          {
            "kind": "p",
            "text": "A = arcsin(30/50) = arcsin(0.6) approx 36.87 ডিগ্রি। বাস্তব জরিপে এই সরলীকৃত মডেলের বাইরে যন্ত্র-উচ্চতা সংশোধন ও ভূমি-সামঞ্জস্য প্রয়োজন হতে পারে।"
          },
          {
            "kind": "h3",
            "text": "উদাহরণ 9: টানা তারের কোণ গণনা"
          },
          {
            "kind": "p",
            "text": "একটি টানা তার 18 m লম্বা, এর প্রান্তদ্বয়ের মধ্যে উল্লম্ব ব্যবধান 10 m। তার ও অনুভূমিকের মধ্যবর্তী কোণ নির্ণয় করুন। উল্লম্ব ব্যবধান বিপরীত বাহু এবং তারটি অতিভুজ।"
          },
          {
            "kind": "p",
            "text": "A = arcsin(10/18) approx 33.75 ডিগ্রি। ফলাফলটি শুধু জ্যামিতি বর্ণনা করে; এটি তারের টান, নোঙরের শক্তি, বা কাঠামোগত নিরাপত্তা নির্ধারণ করে না।"
          },
          {
            "kind": "h3",
            "text": "উদাহরণ 10: সিঁড়ির ঢাল নির্ণয়"
          },
          {
            "kind": "p",
            "text": "একটি সরলীকৃত সিঁড়ির উল্লম্ব উত্থান 2.8 m এবং ঢালু স্ট্রিঞ্জারের দৈর্ঘ্য 5 m। স্ট্রিঞ্জার ও অনুভূমিকের মধ্যবর্তী কোণ গণনা করুন। উত্থান ও স্ট্রিঞ্জার যথাক্রমে বিপরীত বাহু ও অতিভুজ।"
          },
          {
            "kind": "p",
            "text": "A = arcsin(2.8/5) = arcsin(0.56) approx 34.06 ডিগ্রি। এই গণনা ভবন-বিধি সম্মতি প্রতিষ্ঠা করে না।"
          },
          {
            "kind": "h3",
            "text": "উদাহরণ 11: বিমানের উড্ডয়ন কোণ গণনা"
          },
          {
            "kind": "p",
            "text": "একটি সরলীকৃত উড্ডয়ন খণ্ডে, একটি বিমান সরল পথে 5,000 m চলার সময় 1,500 m উচ্চতা অর্জন করে। অনুভূমিকের সাপেক্ষে উড্ডয়ন কোণ অনুমান করুন। উচ্চতা-অর্জন উড্ডয়ন কোণের বিপরীতে; উড্ডয়ন পথ অতিভুজ।"
          },
          {
            "kind": "p",
            "text": "A = arcsin(1500/5000) = arcsin(0.3) approx 17.46 ডিগ্রি। এটি একটি সরল-খণ্ড মডেল, পরিবর্তনশীল উড্ডয়ন পথের পূর্ণ বিশ্লেষণ নয়।"
          },
          {
            "kind": "h3",
            "text": "উদাহরণ 12: যান্ত্রিক ব্রেসের কোণ নির্ণয়"
          },
          {
            "kind": "p",
            "text": "একটি যান্ত্রিক ব্রেসের দৈর্ঘ্য 1,700 mm এবং উল্লম্ব উত্থান 800 mm। অনুভূমিকের সাপেক্ষে এর কোণ গণনা করুন। সূত্রটি মিলিমিটারেও একইভাবে কাজ করে: উত্থান বিপরীতে, ব্রেসের দৈর্ঘ্য অতিভুজ।"
          },
          {
            "kind": "p",
            "text": "A = arcsin(800/1700) approx 28.07 ডিগ্রি। ফলাফলটি জ্যামিতি বর্ণনা করে, কাঠামোগত শক্তি নয়।"
          },
          {
            "kind": "h3",
            "text": "উদাহরণ 13: ক্রেনের বুমের ঢাল গণনা"
          },
          {
            "kind": "p",
            "text": "একটি সরলীকৃত ক্রেনের বুমের দৈর্ঘ্য 10 m এবং উল্লম্ব উপাদান 8 m। বুম ও অনুভূমিকের মধ্যবর্তী কোণ নির্ণয় করুন। বুমের দৈর্ঘ্য অতিভুজ এবং উল্লম্ব উপাদান কোণের বিপরীতে।"
          },
          {
            "kind": "p",
            "text": "A = arcsin(8/10) = arcsin(0.8) approx 53.13 ডিগ্রি। ফলাফলটিকে ক্রেনের ধারণক্ষমতা বা পরিচালন নিরাপত্তা প্রতিষ্ঠাকারী হিসেবে বিবেচনা করবেন না।"
          },
          {
            "kind": "h3",
            "text": "উদাহরণ 14: গাছের উন্নতি কোণ অনুমান"
          },
          {
            "kind": "p",
            "text": "একজন ব্যক্তি এমন একটি বিন্দু থেকে গাছের চূড়া পর্যবেক্ষণ করছেন, যেখানে গাছের চূড়া পর্যন্ত উল্লম্ব পার্থক্য 12 m এবং সরলরেখা দৃষ্টিদূরত্ব 20 m। উন্নতি কোণ নির্ণয় করুন। উল্লম্ব পার্থক্য কোণের বিপরীতে; দৃষ্টিরেখা অতিভুজ।"
          },
          {
            "kind": "p",
            "text": "A = arcsin(12/20) = arcsin(0.6) approx 36.87 ডিগ্রি। এটি পর্যবেক্ষণ স্তর থেকে কোণ দেয়; এটি স্বয়ংক্রিয়ভাবে মাটি থেকে গাছের মোট উচ্চতা দেয় না।"
          },
          {
            "kind": "h3",
            "text": "উদাহরণ 15: হাইকিং পথের ঢাল গণনা"
          },
          {
            "kind": "p",
            "text": "একটি সরলীকৃত সরল হাইকিং খণ্ডের ঢালু দৈর্ঘ্য 100 m এবং উল্লম্ব উত্থান 80 m। ঢালের কোণ নির্ণয় করুন। উত্থান ও ঢালু দূরত্ব বিপরীত বাহু ও অতিভুজ।"
          },
          {
            "kind": "p",
            "text": "A = arcsin(80/100) = arcsin(0.8) approx 53.13 ডিগ্রি। এটি একটি খাড়া দৃষ্টান্তমূলক ঢাল; বাস্তব হাইকিং পথগুলো দৈর্ঘ্য বরাবর ঢাল বদলায়।"
          },
          {
            "kind": "h3",
            "text": "উদাহরণ 16: ছাউনির সাপোর্টের কোণ নির্ণয়"
          },
          {
            "kind": "p",
            "text": "একটি তির্যক ছাউনি সাপোর্ট 3.5 m লম্বা এবং উল্লম্বভাবে 1.2 m ওঠে। সাপোর্ট ও অনুভূমিকের মধ্যবর্তী কোণ গণনা করুন। উল্লম্ব উত্থান কোণের বিপরীতে এবং সাপোর্টটি অতিভুজ।"
          },
          {
            "kind": "p",
            "text": "A = arcsin(1.2/3.5) approx 20.05 ডিগ্রি। ফলাফলটি সাপোর্টের কাঠামোগত উপযুক্ততা যাচাই করে না।"
          }
        ],
        "table": {
          "headers": ["পরিস্থিতি", "বিপরীত", "অতিভুজ", "সূত্র", "কোণ", "অর্থ"],
          "rows": [
            ["ছাদের কড়ি", "4 m", "6.5 m", "arcsin(4/6.5)", "37.98°", "অনুভূমিক থেকে ছাদের ঢাল"],
            ["মই", "4.5 m", "5.5 m", "arcsin(4.5/5.5)", "54.90°", "মাটি থেকে হেলানোর কোণ"],
            ["র‍্যাম্প", "0.75 m", "9.5 m", "arcsin(0.75/9.5)", "4.53°", "মৃদু প্রবেশযোগ্যতা-ধরনের ঢাল"],
            ["জরিপ", "30 m", "50 m", "arcsin(30/50)", "36.87°", "পরিমাপিত রেখার ঢালের কোণ"],
            ["টানা তার", "10 m", "18 m", "arcsin(10/18)", "33.75°", "অনুভূমিক থেকে তারের কোণ"],
            ["সিঁড়ি", "2.8 m", "5 m", "arcsin(2.8/5)", "34.06°", "স্ট্রিঞ্জারের ঢাল"],
            ["বিমানের উড্ডয়ন", "1500 m", "5000 m", "arcsin(1500/5000)", "17.46°", "উড্ডয়ন কোণের অনুমান"],
            ["ব্রেস", "800 mm", "1700 mm", "arcsin(800/1700)", "28.07°", "অনুভূমিক থেকে ব্রেসের কোণ"],
            ["ক্রেনের বুম", "8 m", "10 m", "arcsin(8/10)", "53.13°", "বুমের উচ্চতা"],
            ["গাছ পর্যবেক্ষণ", "12 m", "20 m", "arcsin(12/20)", "36.87°", "উন্নতি কোণ"],
            ["হাইকিং পথ", "80 m", "100 m", "arcsin(80/100)", "53.13°", "খাড়া পথের ঢাল"],
            ["ছাউনির সাপোর্ট", "1.2 m", "3.5 m", "arcsin(1.2/3.5)", "20.05°", "অনুভূমিক থেকে সাপোর্টের কোণ"]
          ]
        },
        "figcaption": "চারটি ব্যবহারিক আর্কসাইন উদাহরণ: ছাদ, মই, র‍্যাম্প ও জরিপ, প্রতিটির পরিমাপিত বাহু ও প্রাপ্ত কোণসহ।",
        "imgAlt": "চারটি প্যানেল: ছাদের কড়ি, মই, র‍্যাম্প ও জরিপের আর্কসাইন উদাহরণ"
      },
      "arcsin-ratio": {
        "h2": "বিপরীত-থেকে-অতিভুজ অনুপাত কীভাবে কোণ বদলায়",
        "blocks": [
          {
            "kind": "p",
            "text": "a/c অনুপাত A কোণ নির্ধারণ করে। অতিভুজের তুলনায় বড় বিপরীত বাহু বড় সূক্ষ্মকোণ দেয়, কারণ অতিভুজের দৈর্ঘ্যের বেশি অংশ উল্লম্বভাবে দাঁড়ায়। ছোট অনুপাত ছোট কোণ দেয়: ত্রিভুজটি লম্বা ও চাপা হয়।"
          },
          {
            "kind": "p",
            "text": "বিপরীত বাহু অতিভুজের ঠিক অর্ধেক হলে কোণটি 30 ডিগ্রি। সমানুপাতিক ত্রিভুজ আকার নির্বিশেষে কোণ ভাগ করে: প্রতিটি বাহুকে একই গুণনীয়কে স্কেল করলে প্রতিটি অনুপাত অপরিবর্তিত থাকে, তাই কোণগুলো স্থির থাকে। একই কারণে একক মিটার থেকে সেন্টিমিটারে বদলালেও কিছুই বদলায় না।"
          },
          {
            "kind": "p",
            "text": "সাধারণ সমকোণী ত্রিভুজের জন্য অনুপাত 0 ও 1-এর মধ্যে থাকতে হবে। 0 অনুপাত মানে কোনো বিপরীত বাহুই নেই, এবং 1 অনুপাত মানে বিপরীত বাহু অতিভুজের সমান; দুটোই অধঃপতিত সীমানা ক্ষেত্র, তিনটি ধনাত্মক বাহুর বাস্তব ত্রিভুজ নয়।"
          }
        ],
        "table": {
          "headers": ["বিপরীত বাহু a", "অতিভুজ c", "অনুপাত a/c", "কোণ A"],
          "rows": [
            ["2", "10", "0.2", "প্রায় 11.54°"],
            ["5", "10", "0.5", "30°"],
            ["8", "10", "0.8", "প্রায় 53.13°"]
          ]
        },
        "figcaption": "অতিভুজ 10 এককে স্থির রেখে, বড় বিপরীত বাহু বড় সূক্ষ্মকোণ দেয়: 11.54, 30, তারপর 53.13 ডিগ্রি।",
        "imgAlt": "তিনটি প্যানেল দেখায় স্থির অতিভুজে বড় বিপরীত বাহু বড় কোণ দেয়"
      },
      "arcsin-units": {
        "h2": "কোণের একক ও পরিমাপের নির্ভুলতা বোঝা",
        "blocks": [
          {
            "kind": "p",
            "text": "এই ক্যালকুলেটর ডিগ্রিতে কোণ ফেরত দেয়, যা নির্মাণ, জরিপ ও শ্রেণীকক্ষের জ্যামিতির মান একক। এক ডিগ্রি একটি পূর্ণ বৃত্তকে 360 ভাগে ভাগ করে। রেডিয়ান হলো বিকল্প: একটি পূর্ণ বৃত্ত 2pi রেডিয়ান। হাতের ক্যালকুলেটরে বিপরীত সাইন মোড সেটিং অনুযায়ী যেকোনোটি ফেরত দিতে পারে।"
          },
          {
            "kind": "p",
            "text": "এভাবে রূপান্তর করুন: ডিগ্রি = রেডিয়ান x 180/pi। ইনপুট বাহুর অনুপাতের নিজের কোনো একক নেই, এবং দুটি বাহুকে সামঞ্জস্যপূর্ণ একক ব্যবহার করতে হবে: মিটারের সাথে মিটার, বা মিলিমিটারের সাথে মিলিমিটার।"
          },
          {
            "kind": "h3",
            "text": "উদাহরণ: পরিমাপের একক কি কোণ বদলায়?"
          },
          {
            "kind": "p",
            "text": "ধরুন a = 3 m ও c = 5 m। অনুপাত 0.6 এবং কোণ 36.87 ডিগ্রি। সেন্টিমিটারে, a = 300 cm ও c = 500 cm একই অনুপাত 0.6 ও একই কোণ দেয়। উভয় পরিমাপকে একই গুণনীয়কে স্কেল করলে বাতিল হয়ে যায়।"
          },
          {
            "kind": "p",
            "text": "মধ্যবর্তী ধাপগুলোতে অতিরিক্ত অঙ্ক রাখুন এবং শুধু চূড়ান্ত কোণটি বৃত্তায়িত করুন। যৌক্তিক নির্ভুলতা ইনপুট পরিমাপের ওপর নির্ভর করে: মোটামুটি মাঠ-পরিমাপ এক দশমিক স্থান সমর্থন করে, আর নিখুঁত কর্মশালা-পরিমাপ দুটি সমর্থন করতে পারে।"
          }
        ]
      },
      "arcsin-mistakes": {
        "h2": "সাইন দিয়ে কোণ গণনায় সাধারণ ভুল",
        "listItems": [
          "বিপরীত বাহুর বদলে সন্নিহিত বাহু ব্যবহার করা। আপনার কোণ কোন শীর্ষবিন্দুতে আছে তা পরীক্ষা করুন, তারপর তার বিপরীত বাহু নিন। স্পর্শকারী পা ব্যবহার করে থাকলে আপনি আর্কসাইন নয়, আর্ককোসাইন গণনা করেছেন।",
          "অতিভুজকে লব হিসেবে ব্যবহার করা। সূত্রটি a/c, অতিভুজের ওপর বিপরীত। উল্টে দিলে 1-এর বেশি অনুপাত ও ডোমেন ত্রুটি পাবেন।",
          "অনুপাত উল্টে দেওয়া। arcsin(c/a) একই কোণ নয়। 3-4-5-এর ক্ষেত্রে, arcsin(3/5) = 36.87 ডিগ্রি, কিন্তু arcsin(5/3) অনির্ধারিত।",
          "বিপরীত সাইনের বদলে সাধারণ সাইন ব্যবহার করা। সাইনের ইনপুট হিসেবে কোণ প্রয়োজন। বাহু জানা থাকলে এবং কোণ প্রয়োজন হলে, বিপরীত ফাংশন দরকার।",
          "বিপরীত সাইনকে সাইনের বিপরীতের সাথে গুলিয়ে ফেলা। sin^-1(x) হলো আর্কসাইন; 1/sin(x) হলো কোসেক্যান্ট। এদের কোনো সম্পর্ক নেই।",
          "অতিভুজের চেয়ে দীর্ঘ বিপরীত বাহু লেখা। সমকোণী ত্রিভুজে জ্যামিতিকভাবে অসম্ভব। বাহুগুলোর পুনরায় নাম দিন: দীর্ঘতম পরিমাপই অতিভুজ।",
          "শূন্য বা ঋণাত্মক বাহুর দৈর্ঘ্য লেখা। দৈর্ঘ্য ধনাত্মক হতে হবে। শূন্য বিপরীত বাহু একটি সমতল রেখা বর্ণনা করে, ত্রিভুজ নয়।",
          "পরিমাপের একক মেশানো। বিপরীত বাহু মিটারে ও অতিভুজ সেন্টিমিটারে লিখলে অনুপাত নষ্ট হয়। আগে রূপান্তর করুন।",
          "অনুপাত খুব তাড়াতাড়ি বৃত্তায়িত করা। আর্কসাইন প্রয়োগের আগে 0.61538 কে 0.62 করা ছাদের উদাহরণকে 37.98 থেকে 38.32 ডিগ্রিতে সরিয়ে দেয়। শেষ পর্যন্ত পূর্ণ নির্ভুলতা রাখুন।",
          "ডিগ্রি প্রত্যাশিত থাকলে রেডিয়ান রিপোর্ট করা। 0.64 উত্তর সাধারণত মানে ক্যালকুলেটর রেডিয়ান মোডে ছিল; 36.87 ডিগ্রি পেতে 180/pi দিয়ে গুণ করুন।",
          "সরঞ্জাম A কোণ বের করলেও B কোণ গণনা করা। ক্যালকুলেটর a বাহুর বিপরীত কোণটি ফেরত দেয়। অন্য সূক্ষ্মকোণটি 90 ডিগ্রি - A।",
          "কোণটি কাঠামোগত নিরাপত্তা যাচাই করে ভাবা। কোণটি খাঁটি জ্যামিতি। মইয়ের স্থিতিশীলতা, ছাদের শক্তি ও র‍্যাম্পের সম্মতির জন্য আলাদা প্রকৌশল পরীক্ষা প্রয়োজন।",
          "উল্লম্ব উত্থানকে ঢালু দূরত্বের সাথে গুলিয়ে ফেলা। র‍্যাম্পের উদাহরণে, 9.5 m হলো ঢালু পৃষ্ঠ (অতিভুজ), অনুভূমিক প্রসার নয়। অদলবদল করলে ত্রিভুজটি সম্পূর্ণ বদলে যায়।",
          "অসম্ভব অনুপাতকে বৈধ ধরা। আপনার গণনা করা a/c 1 ছাড়িয়ে গেলে থামুন: এমন বাহুর কোনো সমকোণী ত্রিভুজ নেই। গণনা জোর করে না চালিয়ে নামকরণের ভুল খুঁজুন।"
        ]
      },
      "arcsin-verify": {
        "h2": "গণনা করা কোণটি বৈধ কিনা তা কীভাবে পরীক্ষা করবেন",
        "blocks": [
          {
            "kind": "p",
            "text": "বৈধ, অ-অধঃপতিত সমকোণী ত্রিভুজের প্রয়োজন: বিপরীত বাহু ধনাত্মক, অতিভুজ ধনাত্মক, অতিভুজ বিপরীত বাহুর চেয়ে কঠোরভাবে দীর্ঘ, অনুপাত a/c কঠোরভাবে 0 ও 1-এর মধ্যে, এবং প্রাপ্ত কোণ কঠোরভাবে 0 ও 90 ডিগ্রির মধ্যে।"
          },
          {
            "kind": "p",
            "text": "a = c হলে, আর্কসাইন 90 ডিগ্রি ফেরত দেয়, যা বাস্তব ত্রিভুজের বদলে একটি অধঃপতিত সীমা ক্ষেত্র। a > c হলে, ত্রিভুজটি জ্যামিতিকভাবে অসম্ভব।"
          },
          {
            "kind": "h3",
            "text": "পদ্ধতি 1: সাইনের অনুপাত পরীক্ষা করুন"
          },
          {
            "kind": "p",
            "text": "অবৃত্তায়িত কোণ ব্যবহার করে sin(A) approx a/c যাচাই করুন। 3-4-5 উদাহরণে, sin(36.87 ডিগ্রি) approx 0.6 = 3/5।"
          },
          {
            "kind": "h3",
            "text": "পদ্ধতি 2: পূরক কোণ পরীক্ষা করুন"
          },
          {
            "kind": "p",
            "text": "B = 90 ডিগ্রি - A গণনা করুন। দুটি সূক্ষ্মকোণের যোগফল ঠিক 90 ডিগ্রি হতে হবে। তারপর B কোণকে নির্দেশক ধরে ত্রিভুজটি অর্থপূর্ণ কিনা নিশ্চিত করুন।"
          },
          {
            "kind": "h3",
            "text": "পদ্ধতি 3: পিথাগোরাসের উপপাদ্য ব্যবহার করুন"
          },
          {
            "kind": "p",
            "text": "সন্নিহিত বাহু b = sqrt(c^2 - a^2) গণনা করুন, তারপর a^2 + b^2 approx c^2 যাচাই করুন। a = 3 ও c = 5-এর ক্ষেত্রে: b = sqrt(25 - 9) = 4, এবং 9 + 16 = 25। ছোট পার্থক্য প্রদর্শিত কোণের বৃত্তায়ন থেকে আসে, ক্যালকুলেটর থেকে নয়।"
          }
        ]
      },
      "arcsin-choose": {
        "h2": "সঠিক সমকোণী ত্রিভুজ ক্যালকুলেটর বেছে নেওয়া",
        "blocks": [
          {
            "kind": "p",
            "text": "সাইন থেকে সমকোণী ত্রিভুজের কোণ ক্যালকুলেটর: যখন আপনি বিপরীত বাহু ও অতিভুজ জানেন এবং A কোণ প্রয়োজন তখন ব্যবহার করুন। আপনি এই পৃষ্ঠায় আছেন।"
          },
          {
            "kind": "p",
            "text": "কোসাইন থেকে সমকোণী ত্রিভুজের কোণ ক্যালকুলেটর: যখন আপনি সন্নিহিত বাহু ও অতিভুজ জানেন তখন ব্যবহার করুন। একই কোণ, ভিন্ন জানা জোড়া।"
          },
          {
            "kind": "p",
            "text": "ট্যানজেন্ট থেকে সমকোণী ত্রিভুজের কোণ ক্যালকুলেটর: যখন আপনি উভয় পা জানেন কিন্তু অতিভুজ জানেন না তখন ব্যবহার করুন। উত্থান-বনাম-প্রসারের মাঠ পরিমাপে সাধারণ।"
          },
          {
            "kind": "p",
            "text": "সমকোণী ত্রিভুজের কোণ ক্যালকুলেটর: কোন বাহুগুলো আপনার কাছে আছে তা নিশ্চিত না হলে সঠিক পদ্ধতি বাছতে সাহায্য করে।"
          },
          {
            "kind": "p",
            "text": "সাইন থেকে সমকোণী ত্রিভুজের বাহু ক্যালকুলেটর: দিক উল্টে দেয়: একটি কোণ ও অতিভুজ দেওয়া থাকলে, এটি বিপরীত বাহু বের করে।"
          },
          {
            "kind": "p",
            "text": "সমকোণী ত্রিভুজের বাহু ক্যালকুলেটর: ত্রিভুজের জানা পরিমাপ থেকে অনুপস্থিত বাহুর দৈর্ঘ্য বের করে।"
          },
          {
            "kind": "p",
            "text": "সরঞ্জামটি আপনার পরিমাপের সাথে মেলান। বিপরীত বাহু অজানা ও মাপা কঠিন হলে, শুধু আর্কসাইন ব্যবহারের জন্য এটি গণনা করবেন না; আপনার কাছে ইতিমধ্যে থাকা বাহুর সাথে মানানসই বিপরীত ফাংশনটি বেছে নিন।"
          }
        ]
      },
      "arcsin-faq": {
        "h2": "প্রায়শই জিজ্ঞাসিত প্রশ্ন",
        "blocks": []
      },
      "arcsin-related": {
        "h2": "সম্পর্কিত ত্রিভুজ ক্যালকুলেটর দেখুন",
        "blocks": []
      },
      "arcsin-conclusion": {
        "h2": "আত্মবিশ্বাসের সাথে সাইন থেকে যেকোনো কোণ নির্ণয় করুন",
        "blocks": [
          {
            "kind": "p",
            "text": "বিপরীত বাহু শনাক্ত করে শুরু করুন: আপনার লক্ষ্য কোণের বিপরীত বাহু। নিশ্চিত করুন অতিভুজ দীর্ঘতম বাহু। ভাগ করুন, আর্কসাইন প্রয়োগ করুন, এবং ডিগ্রিতে কোণটি পড়ুন। 90 থেকে প্রথমটি বিয়োগ করে দ্বিতীয় কোণ পান। সাইনের গোল-পথ পরীক্ষা, একটি ক্রস-পদ্ধতি গণনা, এবং পিথাগোরাসের উপপাদ্য দিয়ে যাচাই করুন। এই ধাপগুলো থাকলে, যেকোনো বিপরীত-ও-অতিভুজ সমস্যা একটি নির্ভরযোগ্য রুটিনে নেমে আসে। আপনার সংখ্যা চালাতে এই পৃষ্ঠার শীর্ষের ক্যালকুলেটরে ফিরে যান।"
          }
        ]
      }
    },
    "faqs": [
      {
        "question": "A = arcsin(a/c) সূত্রটি কী গণনা করে?",
        "answer": "এটি সেই সূক্ষ্মকোণটি বের করে, যার সাইন বিপরীত বাহু ও অতিভুজের অনুপাতের সমান। বিপরীত বাহুর দৈর্ঘ্যকে অতিভুজের দৈর্ঘ্য দিয়ে ভাগ করুন, তারপর সেই দশমিককে ডিগ্রিতে কোণে রূপান্তরে বিপরীত সাইন প্রয়োগ করুন।"
      },
      {
        "question": "বিপরীত সাইন দিয়ে কোণ কীভাবে নির্ণয় করবেন?",
        "answer": "বিপরীত বাহু ও অতিভুজ শনাক্ত করুন, প্রথমটিকে দ্বিতীয়টি দিয়ে ভাগ করে 0 ও 1-এর মধ্যে একটি অনুপাত পান, তারপর আর্কসাইন প্রয়োগ করুন। উদাহরণস্বরূপ, বিপরীত 3 ও অতিভুজ 5 দিলে arcsin(0.6) পাওয়া যায়, যা প্রায় 36.87 ডিগ্রি।"
      },
      {
        "question": "বিপরীত বাহু ও অতিভুজ কেন প্রয়োজন?",
        "answer": "কারণ সাইনকে সংজ্ঞায়িত করা হয় বিপরীত ভাগ অতিভুজ হিসেবে। এই দুটি বাহু অনুপাতকে সম্পূর্ণ নির্ধারণ করে, এবং অনুপাত কোণকে সম্পূর্ণ নির্ধারণ করে। আর কোনো পরিমাপের প্রয়োজন নেই, এবং সন্নিহিত বাহু কখনো সূত্রে আসে না।"
      },
      {
        "question": "সন্নিহিত বাহু না জেনে কি কোণ গণনা করতে পারি?",
        "answer": "হ্যাঁ। এটিই এই ক্যালকুলেটরের উদ্দেশ্য। আর্কসাইন শুধু বিপরীত বাহু ও অতিভুজ ব্যবহার করে, তাই সন্নিহিত বাহু পুরো সময় অজানা থাকতে পারে।"
      },
      {
        "question": "সাইন ও বিপরীত সাইনের পার্থক্য কী?",
        "answer": "সাইন একটি কোণ নেয় এবং অনুপাত ফেরত দেয়: sin(30 ডিগ্রি) = 0.5। বিপরীত সাইন এটি উল্টে দেয়: এটি একটি অনুপাত নেয় এবং কোণ ফেরত দেয়, তাই arcsin(0.5) = 30 ডিগ্রি। কোণ জানা থাকলে সাইন ব্যবহার করুন; বাহু জানা থাকলে আর্কসাইন ব্যবহার করুন।"
      },
      {
        "question": "আর্কসাইন কি sin^-1-এর মতোই?",
        "answer": "হ্যাঁ। Arcsin(x) ও sin^-1(x) একই বিপরীত সাইন ফাংশনের দুটি চিহ্ন। -1 উর্ধ্বসূচকটি বিপরীত (reciprocal) মানে নয়; সাইনের বিপরীত হলো কোসেক্যান্ট, যা csc(x) লেখা হয়।"
      },
      {
        "question": "অতিভুজ কেন বিপরীত বাহুর চেয়ে দীর্ঘ হতে হবে?",
        "answer": "অতিভুজ সবসময় সমকোণী ত্রিভুজের দীর্ঘতম বাহু। আপনার বিপরীত বাহুর এন্ট্রি দীর্ঘ হলে, বাহুগুলোর নাম ভুল দেওয়া হয়েছে: সংজ্ঞা অনুযায়ী আপনার তিনটি পরিমাপের দীর্ঘতমটিই অতিভুজ।"
      },
      {
        "question": "বিপরীত বাহু অতিভুজের সমান হলে কী হয়?",
        "answer": "অনুপাত 1 হয়ে যায় এবং arcsin(1) = 90 ডিগ্রি। কিন্তু অ-অধঃপতিত সমকোণী ত্রিভুজে 90-ডিগ্রি সূক্ষ্মকোণ অসম্ভব; সমান বাহু একটি ভেঙে পড়া সীমা ক্ষেত্র বর্ণনা করে, বাস্তব ত্রিভুজ নয়।"
      },
      {
        "question": "বিপরীত-থেকে-অতিভুজ অনুপাত কোণকে কীভাবে প্রভাবিত করে?",
        "answer": "বড় অনুপাত মানে বড় কোণ। 0.2 অনুপাত দিলে প্রায় 11.54 ডিগ্রি, 0.5 দিলে ঠিক 30 ডিগ্রি, এবং 0.8 দিলে প্রায় 53.13 ডিগ্রি। বিপরীত বাহু দৈর্ঘ্যে অতিভুজের কাছাকাছি আসলে, কোণ 90 ডিগ্রির কাছাকাছি আসে।"
      },
      {
        "question": "গণনা করা কোণটি কীভাবে যাচাই করতে পারি?",
        "answer": "তিনটি স্বাধীন পরীক্ষা: sin(A) গণনা করে নিশ্চিত হোন এটি a/c-এর সমান; পূরক B = 90 - A গণনা করে নিশ্চিত হোন ত্রিভুজটি এখনো অর্থপূর্ণ; পিথাগোরাসের উপপাদ্য দিয়ে সন্নিহিত বাহু নির্ণয় করে নিশ্চিত হোন a^2 + b^2 = c^2।"
      },
      {
        "question": "ছাদ, র‍্যাম্প বা মইয়ের কোণ অনুমান করতে কি এই ক্যালকুলেটর ব্যবহার করতে পারি?",
        "answer": "হ্যাঁ, জ্যামিতির জন্য। উল্লম্ব উত্থান বিপরীত বাহু হিসেবে এবং ঢালু দৈর্ঘ্য অতিভুজ হিসেবে লিখুন। মনে রাখবেন ফলাফলটি শুধু একটি জ্যামিতিক কোণ; এটি কাঠামোগত নিরাপত্তা বা বিধি সম্মতির প্রত্যয়ন দেয় না।"
      },
      {
        "question": "আমার গণনা করা উত্তর পাঠ্যবইয়ের উত্তরের চেয়ে সামান্য ভিন্ন হতে পারে কেন?",
        "answer": "সাধারণত বৃত্তায়ন: পাঠ্যবই আর্কসাইন প্রয়োগের আগে অনুপাত বৃত্তায়িত করতে পারে, বা চূড়ান্ত কোণ ভিন্নভাবে বৃত্তায়িত করতে পারে। গণনা জুড়ে পূর্ণ নির্ভুলতা রাখুন এবং শুধু শেষে বৃত্তায়িত করুন, তাহলে উত্তরগুলো প্রদর্শিত অঙ্ক পর্যন্ত মিলবে।"
      }
    ],
    "relatedHeading": "সম্পর্কিত ত্রিভুজ ক্যালকুলেটর দেখুন",
    "relatedItems": [
      "সমকোণী ত্রিভুজের কোণ ক্যালকুলেটর",
      "কোসাইন থেকে সমকোণী ত্রিভুজের কোণ ক্যালকুলেটর",
      "ট্যানজেন্ট থেকে সমকোণী ত্রিভুজের কোণ ক্যালকুলেটর",
      "সাইন থেকে সমকোণী ত্রিভুজের বাহু ক্যালকুলেটর",
      "সমকোণী ত্রিভুজের বাহু ক্যালকুলেটর",
      "সমকোণী ত্রিভুজের অনুপস্থিত কোণ ক্যালকুলেটর",
      "সমকোণী ত্রিভুজের ত্রিকোণমিতিক অনুপাত ক্যালকুলেটর",
      "সাইন অনুপাত ক্যালকুলেটর"
    ]
  },
  "ja": {
    "tocHeading": "このガイドの内容",
    "tocItems": {
      "arcsin-intro": "サインで角を求める方法",
      "arcsin-anatomy": "対辺と斜辺を理解する",
      "arcsin-what": "直角三角形のサインとは?",
      "arcsin-formula": "逆正弦の公式の仕組み",
      "arcsin-howto": "計算機の使い方",
      "arcsin-examples": "手順付きの例題",
      "arcsin-applications": "実生活での例題",
      "arcsin-ratio": "比が角をどう変えるか",
      "arcsin-units": "角度の単位と測定精度",
      "arcsin-mistakes": "よくある間違い",
      "arcsin-verify": "計算した角の確認",
      "arcsin-choose": "適切な計算機の選び方",
      "arcsin-faq": "よくある質問",
      "arcsin-related": "関連する三角形の計算機を探す",
      "arcsin-conclusion": "自信を持ってサインから角を求める"
    },
    "sections": {
      "arcsin-intro": {
        "h2": "サインで角を求める方法",
        "blocks": [
          {
            "kind": "p",
            "text": "車いす用スロープを思い浮かべてください。斜めの面の長さが9.5メートル、高さが地面から0.75メートル上がっていることがわかっています。スロープの傾斜角は何度でしょうか。サインから角を求める直角三角形の計算機は、まさにこのような問いに答えます。直角三角形の対辺と斜辺を入力すると、その間の鋭角を返します。"
          },
          {
            "kind": "p",
            "text": "この2つの測定値だけで十分です。なぜならサインは対辺と斜辺の比として定義されているからです。その比がわかれば、逆正弦はそれを角に戻してくれます。隣辺は計算に一切登場しないため、実際に測定した量が対辺と斜辺である場合、このツールが最適です。"
          },
          {
            "kind": "p",
            "text": "このガイドでは、A は求める鋭角、a は角Aの対辺、c は斜辺です。計算された角は、斜辺と隣辺が出会う場所の傾きで、度単位で測られます。"
          }
        ]
      },
      "arcsin-anatomy": {
        "h2": "対辺と斜辺を理解する",
        "blocks": [
          {
            "kind": "h3",
            "text": "直角三角形とは?"
          },
          {
            "kind": "p",
            "text": "直角三角形は、1つの角がちょうど90度です。残りの2つの角は鋭角、つまりどちらも90度より厳密に小さく、合計はいつも90度になります。この余角の関係があるため、1つの鋭角がわかれば引き算でもう一方がすぐに求まります。"
          },
          {
            "kind": "p",
            "text": "直角の条件が重要なのは、サイン、コサイン、タンジェントが直角三角形の固定された辺の比から定義されているからです。90度の角がなければ、比 a/c はどの角とも固定された関係を持たず、逆正弦では角を復元できません。"
          },
          {
            "kind": "h3",
            "text": "対辺とは?"
          },
          {
            "kind": "p",
            "text": "対辺は角Aの真向かいにある辺です。角Aの頂点には決して触れません。高さの問題では、この辺はたいてい垂直方向の立ち上がりを表します。壁にかけたはしごの届く高さ、スロープの立ち上がり、クレーンのブームの垂直成分などです。"
          },
          {
            "kind": "p",
            "text": "このラベルは相対的です。基準角をAからBに切り替えると、対辺だった辺が隣辺になり、その逆も起こります。辺に名前を付ける前に、どの角を求めているのかを必ず確認してください。"
          },
          {
            "kind": "h3",
            "text": "斜辺とは?"
          },
          {
            "kind": "p",
            "text": "斜辺は直角の向かいにある辺で、c で表されます。三角形の中で常に最長の辺です。直角の頂点には決して触れません。実際の場面では、斜辺はたいてい傾いた長さそのものです。はしご、屋根の垂木、スロープの面、直線の視線距離などです。"
          },
          {
            "kind": "p",
            "text": "三角形が回転して描かれている場合は、直角を示す四角いマークの向かいにある辺を見つけて、まず斜辺を特定してください。その特定からすべてが決まります。"
          },
          {
            "kind": "h3",
            "text": "隣辺とは?"
          },
          {
            "kind": "p",
            "text": "辺 b は角Aに触れる脚のうち、斜辺でない方です。この計算機には必要ありません。後で隣辺が必要になった場合は、ピタゴラスの定理から b = sqrt(c^2 - a^2) で求められます。"
          }
        ],
        "figcaption": "アークサインの構造: 辺 a は角Aの対辺、辺 c は直角の向かいの斜辺。",
        "imgAlt": "アークサイン用に対辺 a と斜辺 c を強調した直角三角形"
      },
      "arcsin-what": {
        "h2": "直角三角形のサインとは?",
        "blocks": [
          {
            "kind": "p",
            "text": "サインは、斜辺のうち対辺がどれだけの割合を占めるかを測ります。定義は次のとおりです: sin(A) = a/c"
          },
          {
            "kind": "p",
            "text": "ここで sin(A) は角Aのサイン、a は対辺、c は斜辺です。対辺が3単位、斜辺が5単位なら、sin(A) = 3/5 = 0.6 です。比は無次元です。メートルをメートルで割れば打ち消し合うため、メートルでもフィートでもセンチメートルでも、同じ0.6が得られます。"
          },
          {
            "kind": "h3",
            "text": "逆正弦とは?"
          },
          {
            "kind": "p",
            "text": "通常のサインは角から始めて比を出します。逆正弦は有効な比から始めて、対応する角を返します。sin(A) = 0.6 なら、A = arcsin(0.6) approx 36.87 度です。逆正弦はサインの関係を逆向きにして、元の角を復元します。"
          },
          {
            "kind": "h3",
            "text": "アークサインは逆正弦と同じですか?"
          },
          {
            "kind": "p",
            "text": "はい。arcsin(x) と sin^-1(x) の記法は同じ関数を指します。右上の -1 は逆数を意味しません。サインの逆数はまったく別の関数で、余割と呼ばれ csc(x) と書きます。"
          },
          {
            "kind": "h3",
            "text": "なぜ公式は対辺を使うのですか?"
          },
          {
            "kind": "p",
            "text": "サインは対辺と斜辺を組み合わせた比であり、まさにこの計算機が受け入れるペアです。覚え方の SOH-CAH-TOA は3つの組み合わせをまとめています。SOH はサインが対辺/斜辺、CAH はコサインが隣辺/斜辺、TOA はタンジェントが対辺/隣辺を意味します。既知の辺が対辺と斜辺の場合、SOH が適用されるため、アークサインが正しい逆関数です。"
          }
        ],
        "figcaption": "アークサインの仕組み: 対辺を斜辺で割り、逆正弦を適用して角を復元します。",
        "imgAlt": "a を c で割り、アークサインを適用して角を求める図"
      },
      "arcsin-formula": {
        "h2": "逆正弦の公式の仕組み",
        "blocks": [
          {
            "kind": "p",
            "text": "サインの定義から始めます: sin(A) = a/c"
          },
          {
            "kind": "p",
            "text": "既知の辺の長さで右辺の比を計算できます。次に、角を分離するために両辺に逆正弦を適用します: A = arcsin(a/c)"
          },
          {
            "kind": "p",
            "text": "逆正弦は比全体に適用します。比全体がサインの値だからです。数値例で見ていきましょう。a = 3 cm、c = 5 cm とします:"
          },
          {
            "kind": "p",
            "text": "手順1: 対辺を斜辺で割ります: 3/5 = 0.6。"
          },
          {
            "kind": "p",
            "text": "手順2: 逆正弦を適用します: A = arcsin(0.6)。"
          },
          {
            "kind": "p",
            "text": "手順3: 角を計算します: A approx 36.87 度。"
          },
          {
            "kind": "p",
            "text": "結果は小数第2位に丸めた近似値です。平易に言えば、サインが0.6である角は約36.87度です。"
          }
        ]
      },
      "arcsin-howto": {
        "h2": "サインから角を求める直角三角形の計算機の使い方",
        "steps": [
          "直角を特定します。この計算機は直角三角形専用なので、まず90度の角を見つけます。",
          "対辺 a を見つけます。角Aの真向かいにあり、その頂点には決して触れません。",
          "斜辺 c を特定します。90度の角の向かいにあり、最も長い辺です。",
          "両辺の長さを測定または入手します。巻尺、図面、問題のデータを使います。",
          "対辺の長さを対応する入力欄に入力します。",
          "斜辺の長さをその入力欄に入力します。",
          "単位選択で互換性のある単位を選び、両辺が同じ単位になるようにします。",
          "斜辺が対辺より長いことを確認します。そうでなければ、辺のラベルが間違っています。",
          "「角Aを計算」を押します。ツールは割り算をし、アークサインを適用して角を返します。",
          "計算された角を度単位で読み取り、三角形として妥当かどうかを確認します。",
          "下の確認セクションにある方法のいずれかで結果を検証します。",
          "「リセット」を使って入力を消去し、次の計算を始めます。"
        ]
      },
      "arcsin-examples": {
        "h2": "サインで角を求める手順付きの例題",
        "blocks": [
          {
            "kind": "h3",
            "text": "例題1: 基本的な3-4-5の直角三角形"
          },
          {
            "kind": "p",
            "text": "対辺 a = 3 cm、斜辺 c = 5 cm のとき、角Aを求めます。"
          },
          {
            "kind": "p",
            "text": "手順1: 公式を書きます: A = arcsin(a/c)。"
          },
          {
            "kind": "p",
            "text": "手順2: 値を代入します: A = arcsin(3/5)。"
          },
          {
            "kind": "p",
            "text": "手順3: 比を計算します: 3/5 = 0.6。"
          },
          {
            "kind": "p",
            "text": "手順4: 逆正弦を適用します: A = arcsin(0.6) approx 36.87 度。"
          },
          {
            "kind": "p",
            "text": "この角は、斜辺と隣辺の間の傾きで、3 cm の辺がその向かいに立っています。"
          },
          {
            "kind": "h3",
            "text": "例題2: 対辺が斜辺の半分のとき"
          },
          {
            "kind": "p",
            "text": "a = 5 m、c = 10 m のとき: A = arcsin(5/10) = arcsin(0.5) = ちょうど30 度です。これはおなじみの30-60-90の特殊三角形で、30度の角の対辺は斜辺の半分です。"
          },
          {
            "kind": "h3",
            "text": "例題3: 対辺と斜辺の比が0.8の三角形"
          },
          {
            "kind": "p",
            "text": "a = 8 m、c = 10 m のとき: A = arcsin(8/10) = arcsin(0.8) approx 53.13 度です。対辺が斜辺に占める割合が大きいため、角は30度より大きくなります。"
          },
          {
            "kind": "h3",
            "text": "例題4: 対辺が短い三角形"
          },
          {
            "kind": "p",
            "text": "a = 2 ft、c = 10 ft のとき: A = arcsin(2/10) = arcsin(0.2) approx 11.54 度です。対辺が比較的短いと小さな角になり、三角形は長く浅くなります。"
          }
        ]
      },
      "arcsin-applications": {
        "h2": "サインで角を計算する実生活の例題",
        "blocks": [
          {
            "kind": "h3",
            "text": "例題5: 屋根の傾斜角を求める"
          },
          {
            "kind": "p",
            "text": "屋根の垂木は長さ6.5 mで、起点のレベルから垂直に4 m立ち上がっています。垂木と水平面の間の角を求めます。垂木と垂直の立ち上がりは直角三角形を作ります。立ち上がりは傾斜角の対辺、垂木は斜辺です。既知のペアが対辺と斜辺なので、逆正弦が適切です。"
          },
          {
            "kind": "p",
            "text": "A = arcsin(4/6.5) = arcsin(0.61538) approx 37.98 度です。屋根は水平から約38度で上がっています。この幾何学的計算は屋根設計の完全な評価ではないことに注意してください。構造的な要因は別問題です。"
          },
          {
            "kind": "h3",
            "text": "例題6: はしごの角度を求める"
          },
          {
            "kind": "p",
            "text": "はしごは長さ5.5 mで、壁を4.5 m上まで届きます。はしごと水平な地面の間の角を計算します。壁の高さは地面側の角の対辺、はしご自体が斜辺なので、アークサインが適用できます。"
          },
          {
            "kind": "p",
            "text": "A = arcsin(4.5/5.5) approx 54.90 度です。はしごは約54.9度で傾いています。この計算だけでは、はしごが安全に設置されているかは判断できません。"
          },
          {
            "kind": "h3",
            "text": "例題7: スロープの傾斜を計算する"
          },
          {
            "kind": "p",
            "text": "スロープの斜面の長さは9.5 m、垂直の立ち上がりは0.75 mです。水平面に対する角を求めます。傾いた面が斜辺、垂直の立ち上がりが傾斜角の対辺です。"
          },
          {
            "kind": "p",
            "text": "A = arcsin(0.75/9.5) approx 4.53 度です。スロープは緩やかに4.53度で上がっています。計算されたスロープがバリアフリーや建築基準の要件を満たすと主張しないでください。"
          },
          {
            "kind": "h3",
            "text": "例題8: 測量で角を求める"
          },
          {
            "kind": "p",
            "text": "簡略化した測量では、垂直方向の差30 mと、直線の斜め距離50 mが記録されました。斜めの線と水平面の間の角を計算します。垂直方向の差が角の対辺、斜め距離が斜辺です。"
          },
          {
            "kind": "p",
            "text": "A = arcsin(30/50) = arcsin(0.6) approx 36.87 度です。実際の測量では、この簡略モデルの範囲を超えて器械高の補正や地形の調整が必要になる場合があります。"
          },
          {
            "kind": "h3",
            "text": "例題9: 支線の角度を計算する"
          },
          {
            "kind": "p",
            "text": "支線は長さ18 mで、両端の垂直方向の隔たりは10 mです。支線と水平面の間の角を求めます。垂直方向の隔たりが対辺、支線が斜辺です。"
          },
          {
            "kind": "p",
            "text": "A = arcsin(10/18) approx 33.75 度です。結果は幾何学を表すだけで、支線の張力、支柱の強度、構造の安全性は判断できません。"
          },
          {
            "kind": "h3",
            "text": "例題10: 階段の傾斜を求める"
          },
          {
            "kind": "p",
            "text": "簡略化した階段の垂直の立ち上がりは2.8 m、斜めの桁の長さは5 mです。桁と水平面の間の角を計算します。立ち上がりと桁はそれぞれ対辺と斜辺です。"
          },
          {
            "kind": "p",
            "text": "A = arcsin(2.8/5) = arcsin(0.56) approx 34.06 度です。この計算では建築基準への適合は判断できません。"
          },
          {
            "kind": "h3",
            "text": "例題11: 航空機の上昇角を計算する"
          },
          {
            "kind": "p",
            "text": "簡略化した飛行区間では、航空機が直線の飛行経路を5,000 m進む間に1,500 m上昇します。水平面に対する上昇角を見積もります。高度の増加が上昇角の対辺、飛行経路が斜辺です。"
          },
          {
            "kind": "p",
            "text": "A = arcsin(1500/5000) = arcsin(0.3) approx 17.46 度です。これは直線区間のモデルであり、変化する飛行経路の完全な分析ではありません。"
          },
          {
            "kind": "h3",
            "text": "例題12: 機械式支柱の角度を求める"
          },
          {
            "kind": "p",
            "text": "機械式支柱の長さは1,700 mm、垂直の立ち上がりは800 mmです。水平面に対する角を計算します。公式はミリメートルでも同じように機能します。立ち上がりが対辺、支柱の長さが斜辺です。"
          },
          {
            "kind": "p",
            "text": "A = arcsin(800/1700) approx 28.07 度です。結果は幾何学を表すもので、構造の強さではありません。"
          },
          {
            "kind": "h3",
            "text": "例題13: クレーンのブームの傾きを計算する"
          },
          {
            "kind": "p",
            "text": "簡略化したクレーンのブームの長さは10 m、垂直成分は8 mです。ブームと水平面の間の角を求めます。ブームの長さが斜辺、垂直成分が角の対辺です。"
          },
          {
            "kind": "p",
            "text": "A = arcsin(8/10) = arcsin(0.8) approx 53.13 度です。結果をクレーンの吊り上げ能力や運転の安全性の証明として扱わないでください。"
          },
          {
            "kind": "h3",
            "text": "例題14: 木の仰角を見積もる"
          },
          {
            "kind": "p",
            "text": "人が、木の頂上までの垂直方向の差が12 m、直線の視線距離が20 mである地点から木の頂上を観察しています。仰角を求めます。垂直方向の差が角の対辺、視線が斜辺です。"
          },
          {
            "kind": "p",
            "text": "A = arcsin(12/20) = arcsin(0.6) approx 36.87 度です。これは観察レベルからの角を与えるもので、地面からの木の全高を自動的に与えるものではありません。"
          },
          {
            "kind": "h3",
            "text": "例題15: ハイキングコースの傾斜を計算する"
          },
          {
            "kind": "p",
            "text": "簡略化した直線のハイキング区間の斜面の長さは100 m、垂直の立ち上がりは80 mです。傾斜角を求めます。立ち上がりと斜面の距離が対辺と斜辺です。"
          },
          {
            "kind": "p",
            "text": "A = arcsin(80/100) = arcsin(0.8) approx 53.13 度です。これは例示のための急な斜面です。実際のハイキングコースは区間ごとに勾配が変わります。"
          },
          {
            "kind": "h3",
            "text": "例題16: ひさし支柱の角度を求める"
          },
          {
            "kind": "p",
            "text": "斜めのひさし支柱は長さ3.5 mで、垂直に1.2 m上がっています。支柱と水平面の間の角を計算します。垂直の立ち上がりが角の対辺、支柱が斜辺です。"
          },
          {
            "kind": "p",
            "text": "A = arcsin(1.2/3.5) approx 20.05 度です。結果は支柱の構造的な適合性を検証するものではありません。"
          }
        ],
        "table": {
          "headers": ["状況", "対辺", "斜辺", "公式", "角度", "意味"],
          "rows": [
            ["屋根の垂木", "4 m", "6.5 m", "arcsin(4/6.5)", "37.98°", "水平からの屋根の傾斜"],
            ["はしご", "4.5 m", "5.5 m", "arcsin(4.5/5.5)", "54.90°", "地面からの傾き角"],
            ["スロープ", "0.75 m", "9.5 m", "arcsin(0.75/9.5)", "4.53°", "緩やかなバリアフリー様式の傾斜"],
            ["測量", "30 m", "50 m", "arcsin(30/50)", "36.87°", "測定した線の傾斜角"],
            ["支線", "10 m", "18 m", "arcsin(10/18)", "33.75°", "水平からの支線の角度"],
            ["階段", "2.8 m", "5 m", "arcsin(2.8/5)", "34.06°", "桁の傾斜"],
            ["航空機の上昇", "1500 m", "5000 m", "arcsin(1500/5000)", "17.46°", "上昇角の見積もり"],
            ["支柱", "800 mm", "1700 mm", "arcsin(800/1700)", "28.07°", "水平からの支柱の角度"],
            ["クレーンのブーム", "8 m", "10 m", "arcsin(8/10)", "53.13°", "ブームの仰角"],
            ["木の観察", "12 m", "20 m", "arcsin(12/20)", "36.87°", "仰角"],
            ["ハイキングコース", "80 m", "100 m", "arcsin(80/100)", "53.13°", "急な登山道の傾斜"],
            ["ひさし支柱", "1.2 m", "3.5 m", "arcsin(1.2/3.5)", "20.05°", "水平からの支柱の角度"]
          ]
        },
        "figcaption": "4つの実用的なアークサインの例: 屋根、はしご、スロープ、測量。それぞれ測定した辺と求めた角付き。",
        "imgAlt": "4つのパネル: 屋根の垂木、はしご、スロープ、測量のアークサイン例"
      },
      "arcsin-ratio": {
        "h2": "対辺と斜辺の比が角をどう変えるか",
        "blocks": [
          {
            "kind": "p",
            "text": "比 a/c が角Aを決めます。斜辺に対する対辺が大きいほど鋭角は大きくなります。斜辺の長さのうち垂直に立つ部分が多くなるからです。小さな比では小さな角になり、三角形は長く浅くなります。"
          },
          {
            "kind": "p",
            "text": "対辺が斜辺のちょうど半分のとき、角は30度です。相似な三角形は大きさにかかわらず角を共有します。すべての辺を同じ倍率で拡大しても比はすべて変わらないため、角は固定されたままです。同じ理由で、単位をメートルからセンチメートルに変えても何も変わりません。"
          },
          {
            "kind": "p",
            "text": "通常の直角三角形では、比は0から1の間でなければなりません。比が0なら対辺がないことになり、比が1なら対辺が斜辺と等しいことになります。どちらも退化した境界ケースであり、3つの正の辺を持つ実在の三角形ではありません。"
          }
        ],
        "table": {
          "headers": ["対辺 a", "斜辺 c", "比 a/c", "角A"],
          "rows": [
            ["2", "10", "0.2", "約11.54°"],
            ["5", "10", "0.5", "30°"],
            ["8", "10", "0.8", "約53.13°"]
          ]
        },
        "figcaption": "斜辺を10単位に固定すると、対辺が大きいほど鋭角は大きくなります: 11.54、30、そして53.13度。",
        "imgAlt": "斜辺を固定したまま対辺が大きいほど角が大きくなる3つのパネル"
      },
      "arcsin-units": {
        "h2": "角度の単位と測定精度を理解する",
        "blocks": [
          {
            "kind": "p",
            "text": "この計算機は角を度で返します。度は建設、測量、学校の幾何学の標準単位です。1度は円周を360等分したものです。ラジアンは別の選択肢です。完全な円は2piラジアンです。電卓の逆正弦は、モード設定に応じてどちらかを返す場合があります。"
          },
          {
            "kind": "p",
            "text": "次の式で変換します: 度 = ラジアン x 180/pi。入力の辺の比自体に単位はなく、2つの辺は互換性のある単位を使う必要があります。メートルにはメートル、ミリメートルにはミリメートルです。"
          },
          {
            "kind": "h3",
            "text": "例: 測定単位は角を変えますか?"
          },
          {
            "kind": "p",
            "text": "a = 3 m、c = 5 m とします。比は0.6、角は36.87度です。センチメートルでは、a = 300 cm、c = 500 cm で同じ比0.6と同じ角が得られます。両方の測定を同じ倍率で拡大すれば打ち消し合います。"
          },
          {
            "kind": "p",
            "text": "中間手順では余分な桁を残し、最後の角だけを丸めます。正当化できる精度は入力の測定次第です。粗い現場測定なら小数第1位、精密な作業場の測定なら小数第2位まで支えられます。"
          }
        ]
      },
      "arcsin-mistakes": {
        "h2": "サインで角を計算するときのよくある間違い",
        "listItems": [
          "対辺の代わりに隣辺を使う。角がどの頂点にあるかを確認し、その向かいの辺を取ります。触れている脚を使っていたら、求めたのはアークサインではなくアークコサインです。",
          "斜辺を分子にする。公式は a/c、つまり対辺/斜辺です。逆にすると比が1を超え、定義域エラーになります。",
          "比を逆にする。arcsin(c/a) は同じ角ではありません。3-4-5の場合、arcsin(3/5) = 36.87 度ですが、arcsin(5/3) は定義されません。",
          "逆正弦の代わりに通常のサインを使う。サインには角の入力が必要です。辺がわかっていて角が必要なら、逆関数が必要です。",
          "逆正弦をサインの逆数と混同する。sin^-1(x) はアークサイン、1/sin(x) は余割です。両者は無関係です。",
          "斜辺より長い対辺を入力する。直角三角形では幾何学的に不可能です。辺のラベルを付け直してください。最長の測定値が斜辺です。",
          "ゼロまたは負の辺の長さを入力する。長さは正でなければなりません。対辺がゼロとは平らな線のことであり、三角形ではありません。",
          "測定単位を混ぜる。対辺をメートル、斜辺をセンチメートルで入力すると比が壊れます。先に変換してください。",
          "比を早すぎる段階で丸める。アークサインを適用する前に0.61538を0.62に丸めると、屋根の例が37.98から38.32度にずれます。最後まで完全な精度を保ってください。",
          "度が期待される場面でラジアンを報告する。0.64という答えは通常、電卓がラジアンモードだったことを意味します。180/piを掛けて36.87度にしてください。",
          "ツールが角Aを求めるのに角Bを計算する。計算機は辺aの対角を返します。もう一つの鋭角は90度 - Aです。",
          "角が構造の安全性を検証すると考える。角は純粋な幾何学です。はしごの安定性、屋根の強度、スロープの適合性には別の工学的確認が必要です。",
          "垂直の立ち上がりを斜面の距離と混同する。スロープの例では、9.5 mは斜面(斜辺)であり、水平距離ではありません。入れ替えると三角形がまったく変わってしまいます。",
          "不可能な比を有効として扱う。計算したa/cが1を超えたら止まってください。そのような辺を持つ直角三角形は存在しません。無理に計算せず、ラベルの誤りを見つけてください。"
        ]
      },
      "arcsin-verify": {
        "h2": "計算した角が有効かどうかの確認",
        "blocks": [
          {
            "kind": "p",
            "text": "有効な退化していない直角三角形には次が必要です。対辺が正、斜辺が正、斜辺が対辺より厳密に長い、比a/cが厳密に0と1の間、求めた角が厳密に0と90度の間。"
          },
          {
            "kind": "p",
            "text": "a = c の場合、アークサインは90度を返しますが、これは実在の三角形ではなく退化した極限ケースです。a > c の場合、三角形は幾何学的に不可能です。"
          },
          {
            "kind": "h3",
            "text": "方法1: サインの比を確認する"
          },
          {
            "kind": "p",
            "text": "丸めていない角で sin(A) approx a/c を検証します。3-4-5の例では、sin(36.87 度) approx 0.6 = 3/5 です。"
          },
          {
            "kind": "h3",
            "text": "方法2: 余角を確認する"
          },
          {
            "kind": "p",
            "text": "B = 90 度 - A を計算します。2つの鋭角の合計はちょうど90度でなければなりません。その後、角Bを基準として三角形が妥当か確認します。"
          },
          {
            "kind": "h3",
            "text": "方法3: ピタゴラスの定理を使う"
          },
          {
            "kind": "p",
            "text": "隣辺 b = sqrt(c^2 - a^2) を計算し、a^2 + b^2 approx c^2 を検証します。a = 3、c = 5 の場合: b = sqrt(25 - 9) = 4、そして 9 + 16 = 25 です。小さな食い違いは表示された角の丸めによるもので、計算機のせいではありません。"
          }
        ]
      },
      "arcsin-choose": {
        "h2": "適切な直角三角形の計算機の選び方",
        "blocks": [
          {
            "kind": "p",
            "text": "サインからの直角三角形の角計算機: 対辺と斜辺がわかっていて角Aが必要なときに使います。このページです。"
          },
          {
            "kind": "p",
            "text": "コサインからの直角三角形の角計算機: 隣辺と斜辺がわかっているときに使います。同じ角ですが、既知のペアが異なります。"
          },
          {
            "kind": "p",
            "text": "タンジェントからの直角三角形の角計算機: 両方の脚がわかっていて斜辺が不明なときに使います。垂直と水平の現場測定でよく使われます。"
          },
          {
            "kind": "p",
            "text": "直角三角形の角計算機: どの辺を持っているかはっきりしないときに、適切な方法の選択を助けます。"
          },
          {
            "kind": "p",
            "text": "サインからの直角三角形の辺計算機: 方向が逆です。角と斜辺が与えられたとき、対辺を求めます。"
          },
          {
            "kind": "p",
            "text": "直角三角形の辺計算機: 既知の三角形の測定値から、欠けた辺の長さを求めます。"
          },
          {
            "kind": "p",
            "text": "ツールは測定値に合わせます。対辺が不明で測定が難しい場合、アークサインのためだけにそれを計算しないでください。すでに持っている辺に合う逆関数を選んでください。"
          }
        ]
      },
      "arcsin-faq": {
        "h2": "よくある質問",
        "blocks": []
      },
      "arcsin-related": {
        "h2": "関連する三角形の計算機を探す",
        "blocks": []
      },
      "arcsin-conclusion": {
        "h2": "自信を持ってサインから角を求める",
        "blocks": [
          {
            "kind": "p",
            "text": "まず対辺を特定します。求める角の向かいの辺です。斜辺が最長の辺であることを確認します。割り算をし、アークサインを適用して、角を度で読み取ります。90から最初の角を引いて2つ目の角を得ます。サインの往復確認、別の方法による計算、ピタゴラスの定理で検証します。これらの手順があれば、対辺と斜辺のどんな問題も信頼できる手順に落とし込めます。このページ上部の計算機に戻って、自分の数値を計算してください。"
          }
        ]
      }
    },
    "faqs": [
      {
        "question": "公式 A = arcsin(a/c) は何を計算しますか?",
        "answer": "対辺と斜辺の比に等しいサインを持つ鋭角を見つけます。対辺の長さを斜辺の長さで割り、その小数に逆正弦を適用して度の角に変換します。"
      },
      {
        "question": "逆正弦で角を求めるにはどうしますか?",
        "answer": "対辺と斜辺を特定し、前者を後者で割って0から1の間の比を得て、アークサインを適用します。たとえば、対辺3、斜辺5なら arcsin(0.6) で約36.87度です。"
      },
      {
        "question": "なぜ対辺と斜辺が必要なのですか?",
        "answer": "サインが対辺/斜辺として定義されているからです。この2つの辺が比を完全に決定し、比が角を完全に決定します。他の測定は不要で、隣辺は公式に一切登場しません。"
      },
      {
        "question": "隣辺を知らなくても角を計算できますか?",
        "answer": "はい。それがこの計算機の目的です。アークサインは対辺と斜辺だけを使うので、隣辺は最後まで不明のままでかまいません。"
      },
      {
        "question": "サインと逆正弦の違いは何ですか?",
        "answer": "サインは角を受け取って比を返します: sin(30 度) = 0.5。逆正弦は逆で、比を受け取って角を返します。arcsin(0.5) = 30 度です。角がわかっているときはサイン、辺がわかっているときはアークサインを使います。"
      },
      {
        "question": "アークサインは sin^-1 と同じですか?",
        "answer": "はい。Arcsin(x) と sin^-1(x) は同じ逆正弦関数の2つの記法です。右上の-1は逆数を意味しません。サインの逆数は余割で、csc(x) と書きます。"
      },
      {
        "question": "なぜ斜辺は対辺より長くなければなりませんか?",
        "answer": "斜辺は常に直角三角形の最長の辺だからです。対辺の入力の方が長い場合、辺のラベルが間違っています。定義上、3つの測定値の最長が斜辺です。"
      },
      {
        "question": "対辺が斜辺と等しい場合はどうなりますか?",
        "answer": "比が1になり、arcsin(1) = 90 度です。しかし、退化していない直角三角形で90度の鋭角は不可能です。等しい辺はつぶれた極限ケースを表し、実在の三角形ではありません。"
      },
      {
        "question": "対辺と斜辺の比は角にどう影響しますか?",
        "answer": "比が大きいほど角も大きくなります。比0.2では約11.54度、0.5ではちょうど30度、0.8では約53.13度です。対辺が長さで斜辺に近づくと、角は90度に近づきます。"
      },
      {
        "question": "計算した角はどうやって検証できますか?",
        "answer": "3つの独立した確認があります。sin(A) を計算して a/c と等しいことを確認する、余角 B = 90 - A を計算して三角形が妥当か確認する、ピタゴラスの定理で隣辺を導いて a^2 + b^2 = c^2 を確認する、の3つです。"
      },
      {
        "question": "この計算機で屋根、スロープ、はしごの角を見積もれますか?",
        "answer": "はい、幾何学としては可能です。垂直の立ち上がりを対辺、傾いた長さを斜辺として入力します。結果は幾何学的な角だけであり、構造の安全性や基準への適合を証明するものではないことを覚えておいてください。"
      },
      {
        "question": "計算した答えが教科書の答えと少し違うのはなぜですか?",
        "answer": "たいていは丸めです。教科書はアークサインの適用前に比を丸めているか、最後の角を異なる形で丸めている場合があります。計算全体で完全な精度を保ち、最後だけ丸めれば、表示された桁まで答えは一致します。"
      }
    ],
    "relatedHeading": "関連する三角形の計算機を探す",
    "relatedItems": [
      "直角三角形の角計算機",
      "コサインからの直角三角形の角計算機",
      "タンジェントからの直角三角形の角計算機",
      "サインからの直角三角形の辺計算機",
      "直角三角形の辺計算機",
      "直角三角形の欠けた角の計算機",
      "直角三角形の三角比計算機",
      "サイン比計算機"
    ]
  },
  "ko": {
    "tocHeading": "이 가이드의 내용",
    "tocItems": {
      "arcsin-intro": "사인을 이용해 각도 구하기",
      "arcsin-anatomy": "대변과 빗변 이해하기",
      "arcsin-what": "직각삼각형에서 사인이란?",
      "arcsin-formula": "역사인 공식의 원리",
      "arcsin-howto": "계산기 사용 방법",
      "arcsin-examples": "단계별 예제",
      "arcsin-applications": "실생활 예제",
      "arcsin-ratio": "비율이 각도에 미치는 영향",
      "arcsin-units": "각도 단위와 측정 정밀도",
      "arcsin-mistakes": "자주 하는 실수",
      "arcsin-verify": "계산한 각도 확인하기",
      "arcsin-choose": "알맞은 계산기 고르기",
      "arcsin-faq": "자주 묻는 질문",
      "arcsin-related": "관련 삼각형 계산기 더 보기",
      "arcsin-conclusion": "자신 있게 사인으로 어떤 각도든 구하기"
    },
    "sections": {
      "arcsin-intro": {
        "h2": "사인을 이용해 각도 구하기",
        "blocks": [
          { "kind": "p", "text": "휠체어 경사로를 떠올려 보세요. 경사면 길이가 9.5미터이고 지면에서 0.75미터 올라갑니다. 경사로의 경사각은 얼마일까요? 사인을 이용한 직각삼각형 각도 계산기는 바로 이런 질문에 답해 줍니다. 직각삼각형의 대변과 빗변을 입력하면 그 사이의 예각을 계산해 줍니다." },
          { "kind": "p", "text": "두 측정값이면 충분한 이유는 사인이 대변과 빗변의 비율로 정의되기 때문입니다. 이 비율을 알면 역사인으로 각도로 되돌릴 수 있습니다. 인접변은 계산에 전혀 들어가지 않으므로, 대변과 빗변을 실제로 측정한 경우에 가장 적합한 도구입니다." },
          { "kind": "p", "text": "이 가이드에서는 A가 구하려는 예각, a가 각 A의 대변, c가 빗변입니다. 계산된 각도는 빗변과 인접변이 만나는 곳의 기울기이며, 단위는 도(degree)입니다." }
        ]
      },
      "arcsin-anatomy": {
        "h2": "대변과 빗변 이해하기",
        "blocks": [
          { "kind": "h3", "text": "직각삼각형이란?" },
          { "kind": "p", "text": "직각삼각형은 한 각이 정확히 90도인 삼각형입니다. 나머지 두 각은 예각으로, 각각 90도보다 작으며 항상 합이 90도가 됩니다. 이 여각 관계 덕분에 한 예각을 구하면 뺄셈으로 다른 예각을 바로 알 수 있습니다." },
          { "kind": "p", "text": "직각 조건이 중요한 이유는 사인, 코사인, 탄젠트가 직각삼각형의 고정된 변의 비율로 정의되기 때문입니다. 90도 모서리가 없으면 비율 a/c는 어떤 각도와도 고정된 관계를 갖지 못하므로, 역사인으로 각도를 복원할 수 없습니다." },
          { "kind": "h3", "text": "대변이란?" },
          { "kind": "p", "text": "대변은 각 A의 정반대편에 있는 변입니다. 각 A의 꼭짓점에 전혀 닿지 않습니다. 높이 문제에서는 대변이 보통 수직 높이를 나타냅니다. 벽에 기대어 있는 사다리가 닿는 높이, 경사로의 수직 상승 높이, 크레인 붐의 수직 성분이 그 예입니다." },
          { "kind": "p", "text": "변의 명칭은 상대적입니다. 기준각을 A에서 B로 바꾸면 대변이었던 변이 인접변이 되고 그 반대도 성립합니다. 변에 이름을 붙이기 전에 구하려는 각도가 어느 것인지 반드시 확인하세요." },
          { "kind": "h3", "text": "빗변이란?" },
          { "kind": "p", "text": "빗변은 직각의 맞은편에 있는 변으로, c로 표시합니다. 항상 삼각형에서 가장 긴 변입니다. 직각 꼭짓점에는 닿지 않습니다. 실제 상황에서는 빗변이 경사 길이 그 자체인 경우가 많습니다. 사다리, 지붕 서까래, 경사로 표면, 직선 시선 거리가 그 예입니다." },
          { "kind": "p", "text": "삼각형이 회전되어 그려진 경우, 직각을 나타내는 정사각형 표시의 맞은편에 있는 변을 찾아 빗변부터 확인하세요. 나머지는 그 식별에서 자연스럽게 따라옵니다." },
          { "kind": "h3", "text": "인접변이란?" },
          { "kind": "p", "text": "변 b는 각 A에 닿지만 빗변이 아닌 다리입니다. 이 계산기에서는 필요하지 않습니다. 나중에 인접변이 필요하면 피타고라스 정리로 구할 수 있습니다. b = sqrt(c^2 - a^2)" },
          { "kind": "figcaption", "text": "역사인용 해부도: 변 a는 각 A의 대변에 있고, 변 c는 직각 맞은편의 빗변입니다." },
          { "kind": "imgalt", "text": "역사인용으로 대변 a와 빗변 c가 강조된 직각삼각형" }
        ]
      },
      "arcsin-what": {
        "h2": "직각삼각형에서 사인이란?",
        "blocks": [
          { "kind": "p", "text": "사인은 빗변 중 대변이 차지하는 비율을 나타냅니다. 정의는 다음과 같습니다: sin(A) = a/c" },
          { "kind": "p", "text": "여기서 sin(A)는 각 A의 사인, a는 대변, c는 빗변입니다. 대변이 3단위, 빗변이 5단위이면 sin(A) = 3/5 = 0.6입니다. 이 비율은 차원이 없습니다. 미터 나누기 미터는 약분되므로, 미터든 피트든 센티미터든 결과는 0.6으로 같습니다." },
          { "kind": "h3", "text": "역사인이란?" },
          { "kind": "p", "text": "일반 사인은 각도에서 시작해 비율을 만들어 냅니다. 역사인은 유효한 비율에서 시작해 대응하는 각도를 되돌려 줍니다. sin(A) = 0.6이면 A = arcsin(0.6) 약 36.87도입니다. 역사인은 사인 관계를 역으로 되돌려 처음의 각도를 복원합니다." },
          { "kind": "h3", "text": "아크사인과 역사인은 같은 건가요?" },
          { "kind": "p", "text": "네. 표기 arcsin(x)와 sin^-1(x)는 같은 함수를 가리킵니다. 위첨자 -1은 역수를 뜻하지 않습니다. 사인의 역수는 전혀 다른 함수로, 코시컨트라고 하며 csc(x)로 씁니다." },
          { "kind": "h3", "text": "공식에 대변을 사용하는 이유는?" },
          { "kind": "p", "text": "사인은 대변과 빗변을 짝짓는 비율이며, 이 계산기가 바로 이 두 변을 입력받습니다. 암기법 SOH-CAH-TOA는 세 가지 짝을 요약합니다. SOH는 사인 = 대변/빗변, CAH는 코사인 = 인접변/빗변, TOA는 탄젠트 = 대변/인접변을 뜻합니다. 알고 있는 변이 대변과 빗변일 때는 SOH가 적용되므로 역사인이 올바른 역함수입니다." },
          { "kind": "figcaption", "text": "역사인의 원리: 대변을 빗변으로 나눈 뒤 역사인을 적용해 각도를 복원합니다." },
          { "kind": "imgalt", "text": "a를 c로 나눈 뒤 arcsin을 적용해 각도를 구하는 과정을 보여주는 도표" }
        ]
      },
      "arcsin-formula": {
        "h2": "역사인 공식의 작동 원리",
        "blocks": [
          { "kind": "p", "text": "사인 정의에서 시작합니다: sin(A) = a/c" },
          { "kind": "p", "text": "알려진 변의 길이로 오른쪽 비율을 계산할 수 있습니다. 그 다음 양변에 역사인을 적용해 각도를 분리합니다: A = arcsin(a/c)" },
          { "kind": "p", "text": "역사인은 비율 전체에 적용하는데, 비율 전체가 곧 사인 값이기 때문입니다. 수치를 대입해 보겠습니다. a = 3 cm, c = 5 cm인 경우:" },
          { "kind": "p", "text": "1단계: 대변을 빗변으로 나눕니다: 3/5 = 0.6." },
          { "kind": "p", "text": "2단계: 역사인을 적용합니다: A = arcsin(0.6)." },
          { "kind": "p", "text": "3단계: 각도를 계산합니다: A 약 36.87도." },
          { "kind": "p", "text": "결과는 소수 둘째 자리까지 반올림한 근사값입니다. 말로 풀면, 사인이 0.6인 각도는 약 36.87도라는 뜻입니다." }
        ]
      },
      "arcsin-howto": {
        "h2": "사인 이용 직각삼각형 각도 계산기 사용 방법",
        "blocks": [
          { "kind": "steps", "items": [
            "직각을 확인합니다. 이 계산기는 직각삼각형에만 쓸 수 있으므로 90도 모서리부터 찾습니다.",
            "대변 a를 찾습니다. 각 A의 정반대편에 있으며 각 A의 꼭짓점에 닿지 않습니다.",
            "빗변 c를 확인합니다. 90도 각의 맞은편에 있으며 가장 긴 변입니다.",
            "두 변의 길이를 측정하거나 구합니다. 줄자, 설계 도면, 또는 문제에 주어진 데이터를 이용합니다.",
            "대변의 길이를 해당 입력 칸에 입력합니다.",
            "빗변의 길이를 해당 입력 칸에 입력합니다.",
            "단위 선택기로 호환되는 단위를 선택해 두 변이 같은 단위를 사용하도록 합니다.",
            "빗변이 대변보다 긴지 확인합니다. 그렇지 않으면 변의 명칭이 잘못된 것입니다.",
            "계산 버튼을 눌러 각도 A를 구합니다. 도구가 나눗셈을 하고 역사인을 적용해 각도를 반환합니다.",
            "계산된 각도를 도 단위로 읽고 삼각형에 비추어 타당한지 살펴봅니다.",
            "아래 확인 방법 중 하나로 결과를 검증합니다.",
            "초기화 버튼으로 입력을 지우고 다음 계산을 시작합니다."
          ] }
        ]
      },
      "arcsin-examples": {
        "h2": "사인으로 각도를 구하는 단계별 예제",
        "blocks": [
          { "kind": "h3", "text": "예제 1: 기본 3-4-5 직각삼각형" },
          { "kind": "p", "text": "대변 a = 3 cm, 빗변 c = 5 cm일 때 각 A를 구합니다." },
          { "kind": "p", "text": "1단계: 공식을 씁니다: A = arcsin(a/c)." },
          { "kind": "p", "text": "2단계: 값을 대입합니다: A = arcsin(3/5)." },
          { "kind": "p", "text": "3단계: 비율을 계산합니다: 3/5 = 0.6." },
          { "kind": "p", "text": "4단계: 역사인을 적용합니다: A = arcsin(0.6) 약 36.87도." },
          { "kind": "p", "text": "이 각도는 빗변과 인접변이 이루는 기울기이며, 3 cm 변이 그 맞은편에 서 있습니다." },
          { "kind": "h3", "text": "예제 2: 대변이 빗변의 절반인 경우" },
          { "kind": "p", "text": "a = 5 m, c = 10 m인 경우: A = arcsin(5/10) = arcsin(0.5) = 30도 정확히. 이는 익숙한 30-60-90 특수 삼각형으로, 30도 각의 대변은 빗변의 절반입니다." },
          { "kind": "h3", "text": "예제 3: 대변 대 빗변 비율이 0.8인 삼각형" },
          { "kind": "p", "text": "a = 8 m, c = 10 m인 경우: A = arcsin(8/10) = arcsin(0.8) 약 53.13도. 대변이 빗변에서 차지하는 비중이 크므로 각도도 30도보다 큽니다." },
          { "kind": "h3", "text": "예제 4: 대변이 짧은 경우" },
          { "kind": "p", "text": "a = 2 ft, c = 10 ft인 경우: A = arcsin(2/10) = arcsin(0.2) 약 11.54도. 대변이 상대적으로 짧으면 각도도 작아지며, 삼각형은 길고 납작한 형태가 됩니다." }
        ]
      },
      "arcsin-applications": {
        "h2": "사인으로 각도를 구하는 실생활 예제",
        "blocks": [
          { "kind": "h3", "text": "예제 5: 지붕의 경사각 구하기" },
          { "kind": "p", "text": "지붕 서까래가 길이 6.5 m이고 시작점 수평면 위로 4 m 수직 상승합니다. 서까래와 수평선이 이루는 각도를 구합니다. 서까래와 수직 상승 높이는 직각삼각형을 이룹니다. 상승 높이는 경사각의 대변, 서까래는 빗변입니다. 알려진 쌍이 대변과 빗변이므로 역사인이 적절합니다." },
          { "kind": "p", "text": "A = arcsin(4/6.5) = arcsin(0.61538) 약 37.98도. 지붕은 수평에서 약 38도 기울어져 있습니다. 이 기하 계산만으로는 완전한 지붕 설계 평가가 되지 않습니다. 구조 요소는 별개입니다." },
          { "kind": "h3", "text": "예제 6: 사다리의 각도 구하기" },
          { "kind": "p", "text": "사다리 길이가 5.5 m이고 벽 위로 4.5 m까지 닿습니다. 사다리와 수평 지면 사이의 각도를 구합니다. 벽의 높이는 지면 각도의 대변, 사다리 자체는 빗변이므로 arcsin이 적용됩니다." },
          { "kind": "p", "text": "A = arcsin(4.5/5.5) 약 54.90도. 사다리는 약 54.9도 기울어져 있습니다. 이 계산만으로 사다리가 안전하게 설치되었는지는 알 수 없습니다." },
          { "kind": "h3", "text": "예제 7: 경사로의 기울기 계산하기" },
          { "kind": "p", "text": "경사로의 경사면 길이가 9.5 m이고 수직 상승 높이가 0.75 m입니다. 수평에 대한 각도를 구합니다. 경사면은 빗변, 수직 상승 높이는 경사각의 대변입니다." },
          { "kind": "p", "text": "A = arcsin(0.75/9.5) 약 4.53도. 경사로는 완만한 4.53도로 올라갑니다. 계산된 경사로가 접근성이나 건축 기준을 만족한다고 주장하지 마세요." },
          { "kind": "h3", "text": "예제 8: 측량에서 각도 구하기" },
          { "kind": "p", "text": "간단한 측량 측정에서 수직 차이가 30 m, 직선 경사 거리가 50 m로 기록되었습니다. 경사선과 수평선이 이루는 각도를 구합니다. 수직 차이는 각도의 대변, 경사 거리는 빗변입니다." },
          { "kind": "p", "text": "A = arcsin(30/50) = arcsin(0.6) 약 36.87도. 실제 측량에서는 이 단순 모델을 넘어 기기 높이 보정과 지형 조정이 필요할 수 있습니다." },
          { "kind": "h3", "text": "예제 9: 지주 와이어의 각도 계산하기" },
          { "kind": "p", "text": "지주 와이어의 길이가 18 m이고 양 끝점 사이의 수직 간격이 10 m입니다. 와이어와 수평선이 이루는 각도를 구합니다. 수직 간격이 대변, 와이어가 빗변입니다." },
          { "kind": "p", "text": "A = arcsin(10/18) 약 33.75도. 결과는 기하만 설명합니다. 와이어 장력, 앵커 강도, 구조 안전성은 알 수 없습니다." },
          { "kind": "h3", "text": "예제 10: 계단의 기울기 구하기" },
          { "kind": "p", "text": "간단한 계단의 수직 상승 높이가 2.8 m이고 경사 스트링거 길이가 5 m입니다. 스트링거와 수평선이 이루는 각도를 구합니다. 상승 높이와 스트링거는 각각 대변과 빗변입니다." },
          { "kind": "p", "text": "A = arcsin(2.8/5) = arcsin(0.56) 약 34.06도. 이 계산으로는 건축 기준 준수 여부를 알 수 없습니다." },
          { "kind": "h3", "text": "예제 11: 항공기 상승각 계산하기" },
          { "kind": "p", "text": "간단한 비행 구간에서 항공기가 직선 비행 경로로 5,000 m 이동하며 고도를 1,500 m 얻습니다. 수평에 대한 상승각을 추정합니다. 고도 상승은 상승각의 대변, 비행 경로는 빗변입니다." },
          { "kind": "p", "text": "A = arcsin(1500/5000) = arcsin(0.3) 약 17.46도. 이는 직선 구간 모델로, 변화하는 비행 경로의 전체 분석이 아닙니다." },
          { "kind": "h3", "text": "예제 12: 기계 브레이스의 각도 구하기" },
          { "kind": "p", "text": "기계 브레이스의 길이가 1,700 mm이고 수직 상승 높이가 800 mm입니다. 수평에 대한 각도를 구합니다. 공식은 밀리미터에서도 똑같이 적용됩니다. 상승 높이는 대변, 브레이스 길이는 빗변입니다." },
          { "kind": "p", "text": "A = arcsin(800/1700) 약 28.07도. 결과는 기하를 설명할 뿐 구조 강도를 설명하지 않습니다." },
          { "kind": "h3", "text": "예제 13: 크레인 붐의 기울기 계산하기" },
          { "kind": "p", "text": "간단한 크레인 붐의 길이가 10 m이고 수직 성분이 8 m입니다. 붐과 수평선이 이루는 각도를 구합니다. 붐 길이는 빗변, 수직 성분은 각도의 대변입니다." },
          { "kind": "p", "text": "A = arcsin(8/10) = arcsin(0.8) 약 53.13도. 결과를 크레인 용량이나 작업 안전성 판단으로 삼지 마세요." },
          { "kind": "h3", "text": "예제 14: 나무의 앙각 추정하기" },
          { "kind": "p", "text": "한 사람이 나무 꼭대기까지의 수직 차이가 12 m이고 직선 시선 거리가 20 m인 지점에서 나무 꼭대기를 봅니다. 앙각을 구합니다. 수직 차이는 각도의 대변, 시선은 빗변입니다." },
          { "kind": "p", "text": "A = arcsin(12/20) = arcsin(0.6) 약 36.87도. 이는 관측 높이 기준의 각도로, 지면 위 나무 전체 높이를 자동으로 알려 주지는 않습니다." },
          { "kind": "h3", "text": "예제 15: 등산로 경사 계산하기" },
          { "kind": "p", "text": "간단한 직선 등산 구간의 경사 길이가 100 m이고 수직 상승 높이가 80 m입니다. 경사각을 구합니다. 상승 높이와 경사 거리는 대변과 빗변입니다." },
          { "kind": "p", "text": "A = arcsin(80/100) = arcsin(0.8) 약 53.13도. 이는 예시로 든 가파른 경사이며, 실제 등산로는 구간마다 기울기가 다릅니다." },
          { "kind": "h3", "text": "예제 16: 어닝 지지대의 각도 구하기" },
          { "kind": "p", "text": "대각선 어닝 지지대의 길이가 3.5 m이고 수직으로 1.2 m 올라갑니다. 지지대와 수평선이 이루는 각도를 구합니다. 수직 상승 높이는 각도의 대변, 지지대는 빗변입니다." },
          { "kind": "p", "text": "A = arcsin(1.2/3.5) 약 20.05도. 결과는 지지대의 구조 적합성을 검증하지 않습니다." },
          { "kind": "table", "headers": ["상황", "대변", "빗변", "공식", "각도", "의미"], "rows": [
            ["지붕 서까래", "4 m", "6.5 m", "arcsin(4/6.5)", "37.98 deg", "수평 기준 지붕 기울기"],
            ["사다리", "4.5 m", "5.5 m", "arcsin(4.5/5.5)", "54.90 deg", "지면 기준 기울기 각도"],
            ["경사로", "0.75 m", "9.5 m", "arcsin(0.75/9.5)", "4.53 deg", "완만한 접근성형 경사"],
            ["측량", "30 m", "50 m", "arcsin(30/50)", "36.87 deg", "측정선의 경사각"],
            ["지주 와이어", "10 m", "18 m", "arcsin(10/18)", "33.75 deg", "수평 기준 와이어 각도"],
            ["계단", "2.8 m", "5 m", "arcsin(2.8/5)", "34.06 deg", "스트링거 기울기"],
            ["항공기 상승", "1500 m", "5000 m", "arcsin(1500/5000)", "17.46 deg", "상승각 추정치"],
            ["브레이스", "800 mm", "1700 mm", "arcsin(800/1700)", "28.07 deg", "수평 기준 브레이스 각도"],
            ["크레인 붐", "8 m", "10 m", "arcsin(8/10)", "53.13 deg", "붐 고도각"],
            ["나무 관측", "12 m", "20 m", "arcsin(12/20)", "36.87 deg", "앙각"],
            ["등산로", "80 m", "100 m", "arcsin(80/100)", "53.13 deg", "가파른 등산로 경사"],
            ["어닝 지지대", "1.2 m", "3.5 m", "arcsin(1.2/3.5)", "20.05 deg", "수평 기준 지지대 각도"]
          ] },
          { "kind": "figcaption", "text": "실용적인 역사인 예제 네 가지: 지붕, 사다리, 경사로, 측량, 각각의 측정 변과 결과 각도." },
          { "kind": "imgalt", "text": "지붕 서까래, 사다리, 경사로, 측량 역사인 예제 4개 패널" }
        ]
      },
      "arcsin-ratio": {
        "h2": "대변 대 빗변 비율이 각도를 바꾸는 방식",
        "blocks": [
          { "kind": "p", "text": "비율 a/c가 각도 A를 결정합니다. 빗변에 비해 대변이 클수록 예각이 커지는데, 이는 빗변 길이 중 수직으로 서 있는 부분이 더 많기 때문입니다. 비율이 작으면 각도도 작아집니다. 삼각형은 길고 납작해집니다." },
          { "kind": "p", "text": "대변이 빗변의 정확히 절반이면 각도는 30도입니다. 비례 삼각형은 크기와 관계없이 각도를 공유합니다. 모든 변을 같은 비율로 확대해도 모든 비율은 변하지 않으므로 각도도 그대로입니다. 단위를 미터에서 센티미터로 바꿔도 같은 이유로 달라지지 않습니다." },
          { "kind": "p", "text": "일반 직각삼각형에서는 비율이 0과 1 사이에 있어야 합니다. 비율이 0이면 대변이 전혀 없는 것이고, 1이면 대변과 빗변이 같은 것입니다. 둘 다 변이 세 개인 실제 삼각형이 아닌 퇴화 경계 경우입니다." },
          { "kind": "table", "headers": ["대변 a", "빗변 c", "비율 a/c", "각도 A"], "rows": [
            ["2", "10", "0.2", "약 11.54 deg"],
            ["5", "10", "0.5", "30 deg"],
            ["8", "10", "0.8", "약 53.13 deg"]
          ] },
          { "kind": "figcaption", "text": "빗변이 10단위로 고정된 경우, 대변이 클수록 예각이 커집니다: 11.54, 30, 53.13도." },
          { "kind": "imgalt", "text": "빗변이 고정된 상태에서 대변이 클수록 각도가 커지는 모습을 보여주는 세 패널" }
        ]
      },
      "arcsin-units": {
        "h2": "각도 단위와 측정 정밀도 이해하기",
        "blocks": [
          { "kind": "p", "text": "이 계산기는 각도를 도 단위로 반환합니다. 도는 건축, 측량, 교실 기하에서 표준 단위입니다. 1도는 완전한 원을 360등분한 것입니다. 대안은 라디안입니다. 완전한 원은 2pi 라디안입니다. 휴대용 계산기의 역사인은 모드 설정에 따라 도나 라디안 중 어느 것으로도 반환할 수 있습니다." },
          { "kind": "p", "text": "다음 식으로 변환합니다: 도 = 라디안 x 180/pi. 입력 변 비율 자체에는 단위가 없으며, 두 변은 호환되는 단위를 써야 합니다. 미터에는 미터, 밀리미터에는 밀리미터를 사용합니다." },
          { "kind": "h3", "text": "예제: 측정 단위가 각도를 바꾸나요?" },
          { "kind": "p", "text": "a = 3 m, c = 5 m인 경우를 봅니다. 비율은 0.6, 각도는 36.87도입니다. 센티미터로 a = 300 cm, c = 500 cm으로 써도 비율 0.6과 각도는 같습니다. 양쪽 측정값을 같은 비율로 확대하면 약분됩니다." },
          { "kind": "p", "text": "중간 계산 단계에서는 자릿수를 넉넉히 유지하고 최종 각도에서만 반올림합니다. 정당한 정밀도는 입력 측정값에 따라 달라집니다. 대략적인 현장 측정은 소수 첫째 자리까지, 정밀한 작업장 측정은 소수 둘째 자리까지 쓸 수 있습니다." }
        ]
      },
      "arcsin-mistakes": {
        "h2": "사인으로 각도를 구할 때 자주 하는 실수",
        "blocks": [
          { "kind": "listItems", "items": [
            "대변 대신 인접변을 사용하기. 각도가 어느 꼭짓점에 있는지 확인한 뒤 그 맞은편 변을 취합니다. 닿는 다리를 사용했다면 역사인이 아니라 역코사인을 계산한 것입니다.",
            "분자에 빗변을 넣기. 공식은 a/c, 즉 대변 나누기 빗변입니다. 뒤집으면 비율이 1을 넘어 정의역 오류가 납니다.",
            "비율을 뒤집기. arcsin(c/a)는 같은 각도가 아닙니다. 3-4-5에서 arcsin(3/5) = 36.87도이지만 arcsin(5/3)은 정의되지 않습니다.",
            "역사인 대신 일반 사인 사용하기. 사인에는 각도 입력이 필요합니다. 이미 변을 알고 각도가 필요하다면 역함수를 써야 합니다.",
            "역사인과 사인의 역수 혼동하기. sin^-1(x)는 역사인이고, 1/sin(x)는 코시컨트입니다. 둘은 무관합니다.",
            "빗변보다 긴 대변 입력하기. 직각삼각형에서는 기하학적으로 불가능합니다. 변의 명칭을 다시 정합니다. 가장 긴 측정값이 빗변입니다.",
            "0이나 음수 변 길이 입력하기. 길이는 양수여야 합니다. 대변이 0이면 삼각형이 아니라 평평한 선입니다.",
            "측정 단위 섞어 쓰기. 대변을 미터로, 빗변을 센티미터로 입력하면 비율이 망가집니다. 먼저 변환하세요.",
            "비율을 너무 일찍 반올림하기. 역사인을 적용하기 전에 0.61538을 0.62로 반올림하면 지붕 예제가 37.98도에서 38.32도로 바뀝니다. 끝까지 전체 정밀도를 유지합니다.",
            "도 단위가 필요한데 라디안으로 답하기. 답이 0.64로 나오면 보통 계산기가 라디안 모드였던 것입니다. 180/pi를 곱하면 36.87도가 됩니다.",
            "도구가 각 A를 구하는데 각 B를 계산하기. 이 계산기는 변 a의 맞은편 각도를 반환합니다. 다른 예각은 90도 - A입니다.",
            "각도가 구조 안전을 검증한다고 가정하기. 각도는 순수 기하입니다. 사다리 안정성, 지붕 강도, 경사로 기준 준수는 별도의 공학 검토가 필요합니다.",
            "수직 상승 높이와 경사 거리 혼동하기. 경사로 예제에서 9.5 m는 수평 주행 거리가 아니라 경사면(빗변)입니다. 서로 바꾸면 삼각형이 완전히 달라집니다.",
            "불가능한 비율을 유효한 것으로 다루기. 계산된 a/c가 1을 넘으면 멈춥니다. 그런 변을 가진 직각삼각형은 없습니다. 억지로 계산하지 말고 명칭 오류를 찾으세요."
          ] }
        ]
      },
      "arcsin-verify": {
        "h2": "계산한 각도가 유효한지 확인하는 방법",
        "blocks": [
          { "kind": "p", "text": "유효하고 퇴화되지 않은 직각삼각형의 조건은 다음과 같습니다. 대변은 양수, 빗변은 양수, 빗변은 대변보다 반드시 길고, 비율 a/c는 0과 1 사이, 결과 각도는 0도와 90도 사이입니다." },
          { "kind": "p", "text": "a = c이면 역사인은 90도를 반환하는데, 이는 실제 삼각형이 아니라 퇴화한 경계 경우입니다. a > c이면 기하학적으로 불가능한 삼각형입니다." },
          { "kind": "h3", "text": "방법 1: 사인 비율 확인하기" },
          { "kind": "p", "text": "반올림하지 않은 각도로 sin(A) 약 a/c를 검증합니다. 3-4-5 예제에서는 sin(36.87도) 약 0.6 = 3/5입니다." },
          { "kind": "h3", "text": "방법 2: 여각 확인하기" },
          { "kind": "p", "text": "B = 90도 - A를 계산합니다. 두 예각의 합은 정확히 90도여야 합니다. 그 다음 각 B를 기준으로 삼각형이 타당한지 확인합니다." },
          { "kind": "h3", "text": "방법 3: 피타고라스 정리 이용하기" },
          { "kind": "p", "text": "인접변 b = sqrt(c^2 - a^2)를 계산한 뒤 a^2 + b^2 약 c^2를 확인합니다. a = 3, c = 5인 경우: b = sqrt(25 - 9) = 4, 그리고 9 + 16 = 25입니다. 작은 차이는 계산기 오류가 아니라 표시된 각도의 반올림에서 옵니다." }
        ]
      },
      "arcsin-choose": {
        "h2": "알맞은 직각삼각형 계산기 고르기",
        "blocks": [
          { "kind": "p", "text": "사인 이용 직각삼각형 각도 계산기: 대변과 빗변을 알고 각 A가 필요할 때 사용합니다. 지금 보고 계신 페이지입니다." },
          { "kind": "p", "text": "코사인 이용 직각삼각형 각도 계산기: 인접변과 빗변을 알 때 사용합니다. 같은 각도, 다른 알려진 변 쌍입니다." },
          { "kind": "p", "text": "탄젠트 이용 직각삼각형 각도 계산기: 빗변을 모르고 두 다리를 알 때 사용합니다. 상승/주행 현장 측정에 흔합니다." },
          { "kind": "p", "text": "직각삼각형 각도 계산기: 가진 변이 무엇인지 확신이 없을 때 올바른 방법을 고르도록 도와줍니다." },
          { "kind": "p", "text": "사인 이용 직각삼각형 변 계산기: 방향을 뒤집습니다. 각도와 빗변을 알면 대변을 구합니다." },
          { "kind": "p", "text": "직각삼각형 변 계산기: 알려진 삼각형 측정값에서 빠진 변의 길이를 구합니다." },
          { "kind": "p", "text": "측정값에 도구를 맞추세요. 대변이 알려지지 않았고 측정하기 어렵다면, 역사인을 쓰기 위해 억지로 구하지 말고 이미 가진 변에 맞는 역함수를 고릅니다." }
        ]
      },
      "arcsin-faq": {
        "h2": "자주 묻는 질문",
        "blocks": []
      },
      "arcsin-related": {
        "h2": "관련 삼각형 계산기 더 보기",
        "blocks": []
      },
      "arcsin-conclusion": {
        "h2": "자신 있게 사인으로 어떤 각도든 구하기",
        "blocks": [
          { "kind": "p", "text": "먼저 대변을 확인합니다. 목표 각도의 맞은편에 있는 변입니다. 빗변이 가장 긴 변인지 확인합니다. 나눗셈을 하고 역사인을 적용한 뒤 도 단위로 각도를 읽습니다. 90에서 첫 번째 각도를 빼 두 번째 각도를 구합니다. 왕복 사인 검사, 교차 방법 계산, 피타고라스 정리로 검증합니다. 이 단계를 따르면 대변과 빗변 문제는 모두 신뢰할 수 있는 순서로 줄어듭니다. 이 페이지 상단의 계산기로 돌아가 수치를 입력해 보세요." }
        ]
      }
    },
    "faqs": [
      { "question": "공식 A = arcsin(a/c)은 무엇을 계산하나요?", "answer": "대변 대 빗변 비율의 사인이 되는 예각을 구합니다. 대변 길이를 빗변 길이로 나눈 뒤 역사인을 적용해 소수를 도 단위 각도로 바꿉니다." },
      { "question": "역사인으로 각도를 구하는 방법은?", "answer": "대변과 빗변을 확인하고, 전자를 후자로 나눠 0과 1 사이의 비율을 구한 뒤 arcsin을 적용합니다. 예를 들어 대변 3, 빗변 5이면 arcsin(0.6)으로 약 36.87도가 됩니다." },
      { "question": "대변과 빗변이 필요한 이유는?", "answer": "사인이 대변 나누기 빗변으로 정의되기 때문입니다. 이 두 변으로 비율이 완전히 정해지고, 비율로 각도가 완전히 정해집니다. 다른 측정은 필요 없으며 인접변은 공식에 전혀 들어가지 않습니다." },
      { "question": "인접변을 모르고 각도를 계산할 수 있나요?", "answer": "네. 그게 이 계산기의 존재 이유입니다. 역사인은 대변과 빗변만 사용하므로 인접변은 끝까지 몰라도 됩니다." },
      { "question": "사인과 역사인의 차이는?", "answer": "사인은 각도를 받아 비율을 반환합니다. sin(30도) = 0.5입니다. 역사인은 그 반대입니다. 비율을 받아 각도를 반환하므로 arcsin(0.5) = 30도입니다. 각도를 알면 사인, 변을 알면 역사인을 씁니다." },
      { "question": "아크사인과 sin^-1은 같은 건가요?", "answer": "네. Arcsin(x)와 sin^-1(x)는 같은 역사인 함수의 두 가지 표기입니다. -1 위첨자는 역수를 뜻하지 않습니다. 사인의 역수는 코시컨트로, csc(x)로 씁니다." },
      { "question": "빗변이 대변보다 길어야 하는 이유는?", "answer": "빗변은 항상 직각삼각형에서 가장 긴 변입니다. 대변 입력값이 더 길다면 변의 명칭이 잘못된 것입니다. 세 측정값 중 가장 긴 것이 정의상 빗변입니다." },
      { "question": "대변과 빗변이 같아지면 어떻게 되나요?", "answer": "비율이 1이 되고 arcsin(1) = 90도입니다. 하지만 퇴화되지 않은 직각삼각형에서 90도 예각은 불가능합니다. 변이 같은 경우는 실제 삼각형이 아니라 무너진 경계 경우입니다." },
      { "question": "대변 대 빗변 비율이 각도에 어떤 영향을 주나요?", "answer": "비율이 클수록 각도도 큽니다. 비율 0.2는 약 11.54도, 0.5는 정확히 30도, 0.8은 약 53.13도입니다. 대변이 빗변 길이에 가까워질수록 각도는 90도에 가까워집니다." },
      { "question": "계산한 각도를 어떻게 검증하나요?", "answer": "독립적인 확인 세 가지: sin(A)를 계산해 a/c와 같은지 확인하고, 여각 B = 90 - A를 구해 삼각형이 여전히 타당한지 확인한 뒤, 피타고라스 정리로 인접변을 도출해 a^2 + b^2 = c^2인지 확인합니다." },
      { "question": "이 계산기로 지붕, 경사로, 사다리 각도를 추정할 수 있나요?", "answer": "기하 계산으로는 네. 수직 상승 높이를 대변, 경사 길이를 빗변으로 입력합니다. 결과는 기하 각도일 뿐이며 구조 안전이나 기준 준수를 증명하지 않는다는 점을 기억합니다." },
      { "question": "계산 답이 교과서 답과 약간 다른 이유는?", "answer": "대개 반올림 때문입니다. 교과서는 역사인을 적용하기 전에 비율을 반올림하거나 최종 각도를 다르게 반올림할 수 있습니다. 계산 내내 전체 정밀도를 유지하고 마지막에만 반올림하면 표시된 자릿수까지 일치합니다." }
    ],
    "relatedHeading": "관련 삼각형 계산기 더 보기",
    "relatedItems": [
      "직각삼각형 각도 계산기",
      "코사인 이용 직각삼각형 각도 계산기",
      "탄젠트 이용 직각삼각형 각도 계산기",
      "사인 이용 직각삼각형 변 계산기",
      "직각삼각형 변 계산기",
      "직각삼각형 빠진 각도 계산기",
      "직각삼각형 삼각비 계산기",
      "사인 비율 계산기"
    ]
  },
  "ms": {
    "tocHeading": "Dalam Panduan Ini",
    "tocItems": {
      "arcsin-intro": "Cara Mencari Sudut Menggunakan Sinus",
      "arcsin-anatomy": "Memahami Sisi Bertentangan dan Hipotenus",
      "arcsin-what": "Apakah Sinus dalam Segi Tiga Tepat?",
      "arcsin-formula": "Cara Formula Sinus Songsang Berfungsi",
      "arcsin-howto": "Cara Menggunakan Kalkulator",
      "arcsin-examples": "Contoh Langkah demi Langkah",
      "arcsin-applications": "Contoh Kehidupan Sebenar",
      "arcsin-ratio": "Bagaimana Nisbah Mengubah Sudut",
      "arcsin-units": "Unit Sudut dan Ketepatan Pengukuran",
      "arcsin-mistakes": "Kesilapan Lazim",
      "arcsin-verify": "Menyemak Sudut yang Dikira",
      "arcsin-choose": "Memilih Kalkulator yang Tepat",
      "arcsin-faq": "Soalan Lazim",
      "arcsin-related": "Terokai Kalkulator Segi Tiga Berkaitan",
      "arcsin-conclusion": "Cari Mana-mana Sudut daripada Sinus dengan Yakin"
    },
    "sections": {
      "arcsin-intro": {
        "h2": "Cara Mencari Sudut Menggunakan Sinus",
        "blocks": [
          { "kind": "p", "text": "Bayangkan tanjakan kerusi roda: anda tahu permukaan cerunnya berukuran 9.5 meter dan ia menanjak 0.75 meter dari tanah. Apakah sudut condong tanjakan itu? Kalkulator sudut segi tiga tepat daripada sinus menjawab soalan seperti ini. Ia mengambil sisi bertentangan dan hipotenus segi tiga tepat lalu mengembalikan sudut tirus di antaranya." },
          { "kind": "p", "text": "Dua ukuran ini mencukupi kerana sinus ditakrifkan sebagai nisbah sisi bertentangan kepada hipotenus. Setelah nisbah itu diketahui, sinus songsang menukarkannya kembali kepada sudut. Sisi bersebelahan tidak pernah masuk dalam pengiraan, menjadikan ini alat yang tepat apabila sisi bertentangan dan hipotenus ialah kuantiti yang sebenarnya anda ukur." },
          { "kind": "p", "text": "Dalam panduan ini, A ialah sudut tirus rujukan yang sedang dikira, a ialah sisi bertentangan sudut A, dan c ialah hipotenus. Sudut yang dikira ialah kecondongan atau kecerunan di mana hipotenus bertemu sisi bersebelahan, diukur dalam darjah." }
        ]
      },
      "arcsin-anatomy": {
        "h2": "Memahami Sisi Bertentangan dan Hipotenus",
        "blocks": [
          { "kind": "h3", "text": "Apakah Segi Tiga Tepat?" },
          { "kind": "p", "text": "Segi tiga tepat mempunyai satu sudut tepat 90 darjah. Dua sudut yang lain ialah sudut tirus, bermakna setiap satunya kurang daripada 90 darjah, dan kedua-duanya sentiasa berjumlah 90 darjah. Hubungan pelengkap ini menjadikan penemuan satu sudut tirus memberi anda sudut yang satu lagi dengan penolakan." },
          { "kind": "p", "text": "Syarat sudut tepat penting kerana sinus, kosinus dan tangen ditakrifkan melalui nisbah sisi tetap segi tiga tepat. Tanpa bucu 90 darjah, nisbah a/c tiada hubungan tetap dengan mana-mana sudut, dan sinus songsang tidak dapat memulihkan satu sudut." },
          { "kind": "h3", "text": "Apakah Sisi Bertentangan?" },
          { "kind": "p", "text": "Sisi bertentangan ialah sisi yang terletak tepat di seberang sudut A. Ia tidak pernah menyentuh bucu sudut A. Dalam masalah ketinggian, sisi ini biasanya mewakili kenaikan menegak: ketinggian yang dicapai tangga pada dinding, kenaikan tanjakan, atau komponen menegak boom kren." },
          { "kind": "p", "text": "Label ini relatif. Jika anda menukar sudut rujukan dari A kepada B, sisi yang bertentangan menjadi sisi bersebelahan dan sebaliknya. Sentiasa sahkan sudut yang anda selesaikan sebelum melabelkan sisi." },
          { "kind": "h3", "text": "Apakah Hipotenus?" },
          { "kind": "p", "text": "Hipotenus ialah sisi yang bertentangan dengan sudut tepat, diwakili oleh c. Ia sentiasa sisi terpanjang segi tiga. Ia tidak pernah menyentuh bucu sudut tepat. Dalam situasi praktikal, hipotenus sering merupakan panjang cerun itu sendiri: tangga, kasau, permukaan tanjakan, atau jarak garis pandangan lurus." },
          { "kind": "p", "text": "Apabila segi tiga dilukis berpusing, kenal pasti hipotenus dahulu dengan mencari sisi di seberang penanda sudut tepat segi empat sama. Semua yang lain mengikut daripada pengenalpastian itu." },
          { "kind": "h3", "text": "Apakah Sisi Bersebelahan?" },
          { "kind": "p", "text": "Sisi b ialah kaki yang menyentuh sudut A tanpa menjadi hipotenus. Kalkulator ini tidak memerlukannya. Jika anda memerlukan sisi bersebelahan kemudian, teorem Pythagoras memberikannya sebagai b = sqrt(c^2 - a^2)." },
          { "kind": "figcaption", "text": "Anatomi untuk arcsin: sisi a terletak bertentangan sudut A, dan sisi c ialah hipotenus di seberang sudut tepat." },
          { "kind": "imgalt", "text": "Segi tiga tepat dengan sisi bertentangan a dan hipotenus c diserlahkan untuk arcsin" }
        ]
      },
      "arcsin-what": {
        "h2": "Apakah Sinus dalam Segi Tiga Tepat?",
        "blocks": [
          { "kind": "p", "text": "Sinus mengukur bahagian hipotenus yang diwakili oleh sisi bertentangan. Takrifannya ialah: sin(A) = a/c" },
          { "kind": "p", "text": "Di sini sin(A) ialah sinus sudut A, a ialah sisi bertentangan, dan c ialah hipotenus. Jika sisi bertentangan ialah 3 unit dan hipotenus ialah 5 unit, maka sin(A) = 3/5 = 0.6. Nisbah ini tidak berdimensi: meter dibahagi meter terhapus, jadi 0.6 yang sama terhasil sama ada anda mengukur dalam meter, kaki atau sentimeter." },
          { "kind": "h3", "text": "Apakah Sinus Songsang?" },
          { "kind": "p", "text": "Sinus biasa bermula dengan sudut dan menghasilkan nisbah. Sinus songsang bermula dengan nisbah yang sah dan mengembalikan sudut yang sepadan. Jika sin(A) = 0.6, maka A = arcsin(0.6) lebih kurang 36.87 darjah. Sinus songsang membalikkan hubungan sinus untuk memulihkan sudut yang anda mulakan." },
          { "kind": "h3", "text": "Adakah Arcsinus Sama dengan Sinus Songsang?" },
          { "kind": "p", "text": "Ya. Notasi arcsin(x) dan sin^-1(x) merujuk kepada fungsi yang sama. Superskrip -1 tidak bermaksud songsangan. Songsangan sinus ialah fungsi yang berbeza sepenuhnya: kosekan, ditulis csc(x)." },
          { "kind": "h3", "text": "Mengapa Formula Menggunakan Sisi Bertentangan?" },
          { "kind": "p", "text": "Sinus ialah nisbah yang memasangkan sisi bertentangan dengan hipotenus, iaitu pasangan yang diterima kalkulator ini. Alat ingatan SOH-CAH-TOA merumuskan tiga pasangan: SOH bermaksud Sinus bersamaan Bertentangan bahagi Hipotenus, CAH bermaksud Kosinus bersamaan Bersebelahan bahagi Hipotenus, dan TOA bermaksud Tangen bersamaan Bertentangan bahagi Bersebelahan. Apabila sisi yang diketahui ialah bertentangan dan hipotenus, SOH terpakai, jadi arcsin ialah fungsi songsang yang betul." },
          { "kind": "figcaption", "text": "Cara arcsin berfungsi: bahagikan sisi bertentangan dengan hipotenus, kemudian gunakan sinus songsang untuk memulihkan sudut." },
          { "kind": "imgalt", "text": "Rajah menunjukkan bahagi a dengan c kemudian gunakan arcsin untuk mendapatkan sudut" }
        ]
      },
      "arcsin-formula": {
        "h2": "Cara Formula Sinus Songsang Berfungsi",
        "blocks": [
          { "kind": "p", "text": "Mulakan dengan takrifan sinus: sin(A) = a/c" },
          { "kind": "p", "text": "Panjang sisi yang diketahui membolehkan anda mengira nisbah di sebelah kanan. Kemudian gunakan sinus songsang pada kedua-dua belah untuk mengasingkan sudut: A = arcsin(a/c)" },
          { "kind": "p", "text": "Sinus songsang dikenakan pada keseluruhan nisbah kerana nisbah secara keseluruhannya ialah nilai sinus. Jalankan contoh berangka. Diberi a = 3 cm dan c = 5 cm:" },
          { "kind": "p", "text": "Langkah 1: Bahagikan sisi bertentangan dengan hipotenus: 3/5 = 0.6." },
          { "kind": "p", "text": "Langkah 2: Gunakan sinus songsang: A = arcsin(0.6)." },
          { "kind": "p", "text": "Langkah 3: Kira sudut: A lebih kurang 36.87 darjah." },
          { "kind": "p", "text": "Hasilnya ialah anggaran dibundarkan kepada dua tempat perpuluhan. Dalam bahasa biasa: sudut yang sinusnya 0.6 berukuran kira-kira 36.87 darjah." }
        ]
      },
      "arcsin-howto": {
        "h2": "Cara Menggunakan Kalkulator Sudut Segi Tiga Tepat daripada Sinus",
        "blocks": [
          { "kind": "steps", "items": [
            "Kenal pasti sudut tepat. Kalkulator hanya berfungsi untuk segi tiga tepat, jadi cari bucu 90 darjah dahulu.",
            "Cari sisi bertentangan a. Ia terletak tepat di seberang sudut A dan tidak pernah menyentuh bucunya.",
            "Kenal pasti hipotenus c. Ia terletak bertentangan sudut 90 darjah dan ialah sisi terpanjang.",
            "Ukur atau dapatkan kedua-dua panjang sisi. Gunakan pita ukur, lukisan pelan, atau data masalah yang diberi.",
            "Masukkan panjang sisi bertentangan ke dalam medan input yang sepadan.",
            "Masukkan panjang hipotenus ke dalam medan inputnya.",
            "Pilih unit yang serasi dengan pemilih unit supaya kedua-dua sisi menggunakan unit yang sama.",
            "Semak bahawa hipotenus lebih panjang daripada sisi bertentangan. Jika tidak, sisi telah tersalah label.",
            "Tekan butang kiraan untuk mencari sudut A. Alat membahagi, menggunakan arcsin, dan mengembalikan sudut.",
            "Baca sudut yang dikira dalam darjah dan perhatikan sama ada ia kelihatan munasabah untuk segi tiga itu.",
            "Sahkan hasil dengan salah satu semakan dalam bahagian pengesahan di bawah.",
            "Gunakan Tetapan Semula untuk memadam input dan memulakan pengiraan baharu."
          ] }
        ]
      },
      "arcsin-examples": {
        "h2": "Contoh Langkah demi Langkah Mencari Sudut Menggunakan Sinus",
        "blocks": [
          { "kind": "h3", "text": "Contoh 1: Segi Tiga Tepat Asas 3-4-5" },
          { "kind": "p", "text": "Diberi sisi bertentangan a = 3 cm dan hipotenus c = 5 cm, cari sudut A." },
          { "kind": "p", "text": "Langkah 1: Tulis formula: A = arcsin(a/c)." },
          { "kind": "p", "text": "Langkah 2: Gantikan nilai: A = arcsin(3/5)." },
          { "kind": "p", "text": "Langkah 3: Kira nisbah: 3/5 = 0.6." },
          { "kind": "p", "text": "Langkah 4: Gunakan sinus songsang: A = arcsin(0.6) lebih kurang 36.87 darjah." },
          { "kind": "p", "text": "Sudut ini ialah kecondongan antara hipotenus dan sisi bersebelahan, dengan sisi 3 cm berdiri bertentangannya." },
          { "kind": "h3", "text": "Contoh 2: Apabila Sisi Bertentangan Separuh Hipotenus" },
          { "kind": "p", "text": "Diberi a = 5 m dan c = 10 m: A = arcsin(5/10) = arcsin(0.5) = 30 darjah tepat. Ini ialah segi tiga khas 30-60-90 yang biasa, di mana sisi bertentangan sudut 30 darjah ialah separuh hipotenus." },
          { "kind": "h3", "text": "Contoh 3: Segi Tiga dengan Nisbah Bertentangan-kepada-Hipotenus 0.8" },
          { "kind": "p", "text": "Diberi a = 8 m dan c = 10 m: A = arcsin(8/10) = arcsin(0.8) lebih kurang 53.13 darjah. Sudutnya lebih besar daripada 30 darjah kerana sisi bertentangan mewakili bahagian hipotenus yang lebih besar." },
          { "kind": "h3", "text": "Contoh 4: Sisi Bertentangan yang Kecil" },
          { "kind": "p", "text": "Diberi a = 2 ft dan c = 10 ft: A = arcsin(2/10) = arcsin(0.2) lebih kurang 11.54 darjah. Sisi bertentangan yang agak pendek menghasilkan sudut kecil, kerana segi tiga itu panjang dan landai." }
        ]
      },
      "arcsin-applications": {
        "h2": "Contoh Kehidupan Sebenar Mengira Sudut Menggunakan Sinus",
        "blocks": [
          { "kind": "h3", "text": "Contoh 5: Mencari Sudut Condong Bumbung" },
          { "kind": "p", "text": "Kasau bumbung panjangnya 6.5 m dan naik 4 m secara menegak di atas paras titik permulaannya. Cari sudut antara kasau dengan garisan mengufuk. Kasau dan kenaikan menegak membentuk segi tiga tepat: kenaikan bertentangan sudut condong, dan kasau ialah hipotenus. Sinus songsang sesuai kerana pasangan yang diketahui ialah bertentangan dan hipotenus." },
          { "kind": "p", "text": "A = arcsin(4/6.5) = arcsin(0.61538) lebih kurang 37.98 darjah. Bumbung menanjak kira-kira 38 darjah dari mengufuk. Perhatikan pengiraan geometri ini bukan penilaian reka bentuk bumbung yang lengkap; faktor struktur adalah berasingan." },
          { "kind": "h3", "text": "Contoh 6: Mencari Sudut Tangga" },
          { "kind": "p", "text": "Tangga panjangnya 5.5 m dan mencapai 4.5 m ke atas dinding. Kira sudut antara tangga dengan tanah yang rata. Ketinggian dinding bertentangan sudut tanah, dan tangga itu sendiri ialah hipotenus, jadi arcsin terpakai." },
          { "kind": "p", "text": "A = arcsin(4.5/5.5) lebih kurang 54.90 darjah. Tangga bersandar pada kira-kira 54.9 darjah. Pengiraan ini sahaja tidak menentukan sama ada tangga diletakkan dengan selamat." },
          { "kind": "h3", "text": "Contoh 7: Mengira Kecerunan Tanjakan" },
          { "kind": "p", "text": "Tanjakan mempunyai panjang cerun 9.5 m dan kenaikan menegak 0.75 m. Cari sudutnya relatif kepada mengufuk. Permukaan cerun ialah hipotenus dan kenaikan menegak bertentangan sudut condong." },
          { "kind": "p", "text": "A = arcsin(0.75/9.5) lebih kurang 4.53 darjah. Tanjakan naik pada 4.53 darjah yang landai. Jangan dakwa tanjakan yang dikira memenuhi keperluan kebolehcapaian atau kod bangunan." },
          { "kind": "h3", "text": "Contoh 8: Mencari Sudut dalam Ukur Tanah" },
          { "kind": "p", "text": "Pengukuran ukur tanah yang dipermudah merekodkan perbezaan menegak 30 m dan jarak cerun garis lurus 50 m. Kira sudut antara garis cerun dengan mengufuk. Perbezaan menegak bertentangan sudut; jarak cerun ialah hipotenus." },
          { "kind": "p", "text": "A = arcsin(30/50) = arcsin(0.6) lebih kurang 36.87 darjah. Ukur tanah sebenar mungkin memerlukan pembetulan ketinggian instrumen dan pelarasan rupa bumi melebihi model ringkas ini." },
          { "kind": "h3", "text": "Contoh 9: Mengira Sudut Wayar Penahan" },
          { "kind": "p", "text": "Wayar penahan panjangnya 18 m, dengan pemisahan menegak 10 m antara titik hujungnya. Cari sudut antara wayar dengan mengufuk. Pemisahan menegak ialah sisi bertentangan dan wayar ialah hipotenus." },
          { "kind": "p", "text": "A = arcsin(10/18) lebih kurang 33.75 darjah. Hasilnya menerangkan geometri sahaja; ia tidak menentukan ketegangan wayar, kekuatan sauh, atau keselamatan struktur." },
          { "kind": "h3", "text": "Contoh 10: Mencari Kecerunan Tangga" },
          { "kind": "p", "text": "Tangga yang dipermudah mempunyai kenaikan menegak 2.8 m dan panjang stringer cerun 5 m. Kira sudut antara stringer dengan mengufuk. Kenaikan dan stringer masing-masing ialah sisi bertentangan dan hipotenus." },
          { "kind": "p", "text": "A = arcsin(2.8/5) = arcsin(0.56) lebih kurang 34.06 darjah. Pengiraan ini tidak menentukan pematuhan kod bangunan." },
          { "kind": "h3", "text": "Contoh 11: Mengira Sudut Mendaki Pesawat" },
          { "kind": "p", "text": "Bagi segmen penerbangan yang dipermudah, pesawat naik 1,500 m pada altitud sambil bergerak 5,000 m sepanjang laluan penerbangan lurus. Anggarkan sudut mendaki relatif kepada mengufuk. Kenaikan altitud bertentangan sudut mendaki; laluan penerbangan ialah hipotenus." },
          { "kind": "p", "text": "A = arcsin(1500/5000) = arcsin(0.3) lebih kurang 17.46 darjah. Ini ialah model segmen lurus, bukan analisis penuh laluan penerbangan yang berubah." },
          { "kind": "h3", "text": "Contoh 12: Mencari Sudut Pendakap Mekanikal" },
          { "kind": "p", "text": "Pendakap mekanikal panjangnya 1,700 mm dan kenaikan menegaknya 800 mm. Kira sudutnya relatif kepada mengufuk. Formula berfungsi sama dalam milimeter: kenaikan bertentangan, panjang pendakap ialah hipotenus." },
          { "kind": "p", "text": "A = arcsin(800/1700) lebih kurang 28.07 darjah. Hasilnya menerangkan geometri, bukan kekuatan struktur." },
          { "kind": "h3", "text": "Contoh 13: Mengira Kecerunan Boom Kren" },
          { "kind": "p", "text": "Boom kren yang dipermudah panjangnya 10 m dan komponen menegaknya 8 m. Cari sudut antara boom dengan mengufuk. Panjang boom ialah hipotenus dan komponen menegak bertentangan sudut." },
          { "kind": "p", "text": "A = arcsin(8/10) = arcsin(0.8) lebih kurang 53.13 darjah. Jangan anggap hasil ini menentukan kapasiti kren atau keselamatan operasi." },
          { "kind": "h3", "text": "Contoh 14: Menganggarkan Sudut Dongak Pokok" },
          { "kind": "p", "text": "Seseorang memerhati puncak pokok dari titik di mana perbezaan menegak ke puncak ialah 12 m dan jarak garis pandangan lurus ialah 20 m. Cari sudut dongak. Perbezaan menegak bertentangan sudut; garis pandangan ialah hipotenus." },
          { "kind": "p", "text": "A = arcsin(12/20) = arcsin(0.6) lebih kurang 36.87 darjah. Ini memberi sudut dari aras pemerhatian; ia tidak secara automatik memberi jumlah ketinggian pokok di atas tanah." },
          { "kind": "h3", "text": "Contoh 15: Mengira Kecerunan Laluan Mendaki" },
          { "kind": "p", "text": "Seksyen mendaki lurus yang dipermudah mempunyai panjang cerun 100 m dan kenaikan menegak 80 m. Cari sudut kecerunan. Kenaikan dan jarak cerun ialah sisi bertentangan dan hipotenus." },
          { "kind": "p", "text": "A = arcsin(80/100) = arcsin(0.8) lebih kurang 53.13 darjah. Ini ialah cerun curam sebagai ilustrasi; laluan mendaki sebenar berbeza kecerunannya sepanjang laluan." },
          { "kind": "h3", "text": "Contoh 16: Mencari Sudut Penyokong Awning" },
          { "kind": "p", "text": "Penyokong awning pepenjuru panjangnya 3.5 m dan naik 1.2 m secara menegak. Kira sudut antara penyokong dengan mengufuk. Kenaikan menegak bertentangan sudut dan penyokong ialah hipotenus." },
          { "kind": "p", "text": "A = arcsin(1.2/3.5) lebih kurang 20.05 darjah. Hasilnya tidak mengesahkan kesesuaian struktur penyokong." },
          { "kind": "table", "headers": ["Situasi", "Bertentangan", "Hipotenus", "Formula", "Sudut", "Maksud"], "rows": [
            ["Kasau bumbung", "4 m", "6.5 m", "arcsin(4/6.5)", "37.98 deg", "Condong bumbung dari mengufuk"],
            ["Tangga", "4.5 m", "5.5 m", "arcsin(4.5/5.5)", "54.90 deg", "Sudut sandar dari tanah"],
            ["Tanjakan", "0.75 m", "9.5 m", "arcsin(0.75/9.5)", "4.53 deg", "Kecerunan landai gaya kebolehcapaian"],
            ["Ukur tanah", "30 m", "50 m", "arcsin(30/50)", "36.87 deg", "Sudut cerun garis yang diukur"],
            ["Wayar penahan", "10 m", "18 m", "arcsin(10/18)", "33.75 deg", "Sudut wayar dari mengufuk"],
            ["Tangga", "2.8 m", "5 m", "arcsin(2.8/5)", "34.06 deg", "Kecerunan stringer"],
            ["Mendaki pesawat", "1500 m", "5000 m", "arcsin(1500/5000)", "17.46 deg", "Anggaran sudut mendaki"],
            ["Pendakap", "800 mm", "1700 mm", "arcsin(800/1700)", "28.07 deg", "Sudut pendakap dari mengufuk"],
            ["Boom kren", "8 m", "10 m", "arcsin(8/10)", "53.13 deg", "Ketinggian boom"],
            ["Pemerhatian pokok", "12 m", "20 m", "arcsin(12/20)", "36.87 deg", "Sudut dongak"],
            ["Laluan mendaki", "80 m", "100 m", "arcsin(80/100)", "53.13 deg", "Kecerunan denai curam"],
            ["Penyokong awning", "1.2 m", "3.5 m", "arcsin(1.2/3.5)", "20.05 deg", "Sudut penyokong dari mengufuk"]
          ] },
          { "kind": "figcaption", "text": "Empat contoh arcsin praktikal: bumbung, tangga, tanjakan, dan ukur tanah, setiap satunya dengan sisi yang diukur dan sudut hasilnya." },
          { "kind": "imgalt", "text": "Empat panel: contoh arcsin kasau bumbung, tangga, tanjakan, dan ukur tanah" }
        ]
      },
      "arcsin-ratio": {
        "h2": "Bagaimana Nisbah Bertentangan-kepada-Hipotenus Mengubah Sudut",
        "blocks": [
          { "kind": "p", "text": "Nisbah a/c menentukan sudut A. Sisi bertentangan yang lebih besar berbanding hipotenus menghasilkan sudut tirus yang lebih besar, kerana lebih banyak panjang hipotenus berdiri menegak. Nisbah kecil menghasilkan sudut kecil: segi tiga itu panjang dan landai." },
          { "kind": "p", "text": "Apabila sisi bertentangan tepat separuh hipotenus, sudutnya ialah 30 darjah. Segi tiga berkadaran berkongsi sudut tanpa mengira saiz: menskalakan setiap sisi dengan faktor yang sama meninggalkan setiap nisbah tidak berubah, jadi sudut kekal tetap. Menukar unit dari meter kepada sentimeter tidak mengubah apa-apa atas sebab yang sama." },
          { "kind": "p", "text": "Nisbah mesti kekal antara 0 dan 1 untuk segi tiga tepat biasa. Nisbah 0 bermaksud tiada sisi bertentangan langsung, dan nisbah 1 bermaksud sisi bertentangan sama dengan hipotenus; kedua-duanya ialah kes sempadan merosot, bukan segi tiga sebenar dengan tiga sisi positif." },
          { "kind": "table", "headers": ["Sisi bertentangan a", "Hipotenus c", "Nisbah a/c", "Sudut A"], "rows": [
            ["2", "10", "0.2", "Lebih kurang 11.54 deg"],
            ["5", "10", "0.5", "30 deg"],
            ["8", "10", "0.8", "Lebih kurang 53.13 deg"]
          ] },
          { "kind": "figcaption", "text": "Dengan hipotenus tetap pada 10 unit, sisi bertentangan yang lebih besar menghasilkan sudut tirus yang lebih besar: 11.54, 30, kemudian 53.13 darjah." },
          { "kind": "imgalt", "text": "Tiga panel menunjukkan sisi bertentangan yang lebih besar memberi sudut yang lebih besar pada hipotenus tetap" }
        ]
      },
      "arcsin-units": {
        "h2": "Memahami Unit Sudut dan Ketepatan Pengukuran",
        "blocks": [
          { "kind": "p", "text": "Kalkulator ini mengembalikan sudut dalam darjah, unit piawai untuk pembinaan, ukur tanah, dan geometri bilik darjah. Satu darjah membahagikan bulatan penuh kepada 360 bahagian. Radian ialah alternatif: bulatan penuh ialah 2pi radian. Sinus songsang pada kalkulator pegang boleh mengembalikan sama ada satu, bergantung pada tetapan modnya." },
          { "kind": "p", "text": "Tukar antara keduanya dengan: Darjah = Radian x 180/pi. Nisbah sisi input itu sendiri tidak berunit, dan kedua-dua sisi mesti menggunakan unit yang serasi: meter dengan meter, atau milimeter dengan milimeter." },
          { "kind": "h3", "text": "Contoh: Adakah Unit Pengukuran Mengubah Sudut?" },
          { "kind": "p", "text": "Ambil a = 3 m dan c = 5 m. Nisbahnya ialah 0.6 dan sudutnya ialah 36.87 darjah. Dalam sentimeter, a = 300 cm dan c = 500 cm memberi nisbah 0.6 dan sudut yang sama. Menskalakan kedua-dua ukuran dengan faktor yang sama terhapus." },
          { "kind": "p", "text": "Kekalkan digit tambahan semasa langkah perantara dan bundarkan hanya sudut akhir. Ketepatan yang wajar bergantung pada ukuran input: ukuran lapangan yang kasar menyokong satu tempat perpuluhan, manakala ukuran bengkel yang tepat mungkin menyokong dua." }
        ]
      },
      "arcsin-mistakes": {
        "h2": "Kesilapan Lazim Apabila Mengira Sudut Menggunakan Sinus",
        "blocks": [
          { "kind": "listItems", "items": [
            "Menggunakan sisi bersebelahan dan bukannya sisi bertentangan. Semak bucu mana sudut anda terletak, kemudian ambil sisi di seberangnya. Jika anda menggunakan kaki yang menyentuh, anda mengira arkkosinus, bukan arksinus.",
            "Menggunakan hipotenus sebagai pengangka. Formulanya ialah a/c, bertentangan bahagi hipotenus. Menterbalikkannya memberi nisbah melebihi 1 dan ralat domain.",
            "Menterbalikkan nisbah. arcsin(c/a) bukan sudut yang sama. Untuk 3-4-5, arcsin(3/5) = 36.87 darjah tetapi arcsin(5/3) tidak tertakrif.",
            "Menggunakan sinus biasa dan bukannya sinus songsang. Sinus memerlukan input sudut. Jika anda sudah tahu sisi dan memerlukan sudut, anda memerlukan fungsi songsang.",
            "Mengelirukan sinus songsang dengan songsangan sinus. sin^-1(x) ialah arcsin; 1/sin(x) ialah kosekan. Kedua-duanya tidak berkaitan.",
            "Memasukkan sisi bertentangan lebih panjang daripada hipotenus. Mustahil secara geometri dalam segi tiga tepat. Label semula sisi anda: ukuran terpanjang ialah hipotenus.",
            "Memasukkan panjang sisi sifar atau negatif. Panjang mesti positif. Sisi bertentangan sifar menerangkan garis rata, bukan segi tiga.",
            "Mencampurkan unit pengukuran. Memasukkan sisi bertentangan dalam meter dan hipotenus dalam sentimeter merosakkan nisbah. Tukar dahulu.",
            "Membundarkan nisbah terlalu awal. Membundarkan 0.61538 kepada 0.62 sebelum menggunakan arcsin mengalihkan contoh bumbung dari 37.98 kepada 38.32 darjah. Kekalkan ketepatan penuh sehingga akhir.",
            "Melaporkan radian apabila darjah dijangkakan. Jawapan 0.64 biasanya bermaksud kalkulator dalam mod radian; darab dengan 180/pi untuk mendapat 36.87 darjah.",
            "Mengira sudut B apabila alat mencari sudut A. Kalkulator mengembalikan sudut bertentangan sisi a. Sudut tirus yang satu lagi ialah 90 darjah - A.",
            "Menganggap sudut mengesahkan keselamatan struktur. Sudut ialah geometri tulen. Kestabilan tangga, kekuatan bumbung, dan pematuhan tanjakan memerlukan semakan kejuruteraan berasingan.",
            "Mengelirukan kenaikan menegak dengan jarak cerun. Dalam contoh tanjakan, 9.5 m ialah permukaan cerun (hipotenus), bukan larian mengufuk. Menukarkannya mengubah segi tiga sepenuhnya.",
            "Menganggap nisbah mustahil sebagai sah. Jika a/c yang anda kira melebihi 1, berhenti: tiada segi tiga tepat mempunyai sisi sedemikian. Cari ralat pelabelan dan bukannya memaksa pengiraan."
          ] }
        ]
      },
      "arcsin-verify": {
        "h2": "Cara Menyemak Sama Ada Sudut yang Dikira Sah",
        "blocks": [
          { "kind": "p", "text": "Segi tiga tepat yang sah dan tidak merosot memerlukan: sisi bertentangan positif, hipotenus positif, hipotenus lebih panjang daripada sisi bertentangan, nisbah a/c antara 0 dan 1, dan sudut hasil antara 0 dan 90 darjah." },
          { "kind": "p", "text": "Jika a = c, arcsin mengembalikan 90 darjah, kes pengehad merosot dan bukannya segi tiga sebenar. Jika a > c, segi tiga itu mustahil secara geometri." },
          { "kind": "h3", "text": "Kaedah 1: Semak nisbah sinus" },
          { "kind": "p", "text": "Sahkan sin(A) lebih kurang a/c menggunakan sudut yang tidak dibundarkan. Untuk contoh 3-4-5, sin(36.87 darjah) lebih kurang 0.6 = 3/5." },
          { "kind": "h3", "text": "Kaedah 2: Semak sudut pelengkap" },
          { "kind": "p", "text": "Kira B = 90 darjah - A. Kedua-dua sudut tirus mesti berjumlah tepat 90 darjah. Kemudian sahkan segi tiga masuk akal dengan sudut B sebagai rujukan." },
          { "kind": "h3", "text": "Kaedah 3: Gunakan teorem Pythagoras" },
          { "kind": "p", "text": "Kira sisi bersebelahan b = sqrt(c^2 - a^2), kemudian sahkan a^2 + b^2 lebih kurang c^2. Untuk a = 3 dan c = 5: b = sqrt(25 - 9) = 4, dan 9 + 16 = 25. Perbezaan kecil berpunca daripada pembundaran sudut yang dipaparkan, bukan daripada kalkulator." }
        ]
      },
      "arcsin-choose": {
        "h2": "Memilih Kalkulator Segi Tiga Tepat yang Tepat",
        "blocks": [
          { "kind": "p", "text": "Kalkulator Sudut Segi Tiga Tepat daripada Sinus: gunakan apabila anda tahu sisi bertentangan dan hipotenus dan memerlukan sudut A. Ini ialah halaman yang anda sedang baca." },
          { "kind": "p", "text": "Kalkulator Sudut Segi Tiga Tepat daripada Kosinus: gunakan apabila anda tahu sisi bersebelahan dan hipotenus. Sudut yang sama, pasangan diketahui yang berbeza." },
          { "kind": "p", "text": "Kalkulator Sudut Segi Tiga Tepat daripada Tangen: gunakan apabila anda tahu kedua-dua kaki tetapi bukan hipotenus. Lazim untuk ukuran lapangan naik-atas-larian." },
          { "kind": "p", "text": "Kalkulator Sudut Segi Tiga Tepat: membantu anda memilih kaedah yang tepat apabila anda tidak pasti sisi yang anda ada." },
          { "kind": "p", "text": "Kalkulator Sisi Segi Tiga Tepat daripada Sinus: membalikkan arah: diberi sudut dan hipotenus, ia mencari sisi bertentangan." },
          { "kind": "p", "text": "Kalkulator Sisi Segi Tiga Tepat: mencari panjang sisi yang hilang daripada ukuran segi tiga yang diketahui." },
          { "kind": "p", "text": "Padankan alat dengan ukuran anda. Jika sisi bertentangan tidak diketahui dan sukar diukur, jangan kiranya semata-mata untuk menggunakan arcsin; pilih fungsi songsang yang sepadan dengan sisi yang sudah anda ada." }
        ]
      },
      "arcsin-faq": {
        "h2": "Soalan Lazim",
        "blocks": []
      },
      "arcsin-related": {
        "h2": "Terokai Kalkulator Segi Tiga Berkaitan",
        "blocks": []
      },
      "arcsin-conclusion": {
        "h2": "Cari Mana-mana Sudut daripada Sinus dengan Yakin",
        "blocks": [
          { "kind": "p", "text": "Mulakan dengan mengenal pasti sisi bertentangan: sisi di seberang sudut sasaran anda. Sahkan hipotenus ialah sisi terpanjang. Bahagikan, gunakan arcsin, dan baca sudut dalam darjah. Dapatkan sudut kedua daripada 90 tolak yang pertama. Sahkan dengan semakan sinus pergi-balik, pengiraan kaedah silang, dan teorem Pythagoras. Dengan langkah ini, sebarang masalah bertentangan-dan-hipotenus menjadi rutin yang boleh dipercayai. Kembali ke kalkulator di bahagian atas halaman ini untuk menjalankan nombor anda." }
        ]
      }
    },
    "faqs": [
      { "question": "Apakah yang dikira oleh formula A = arcsin(a/c)?", "answer": "Ia mencari sudut tirus yang sinusnya bersamaan nisbah sisi bertentangan kepada hipotenus. Bahagikan panjang sisi bertentangan dengan panjang hipotenus, kemudian gunakan sinus songsang untuk menukar perpuluhan itu kepada sudut dalam darjah." },
      { "question": "Bagaimana mencari sudut menggunakan sinus songsang?", "answer": "Kenal pasti sisi bertentangan dan hipotenus, bahagikan yang pertama dengan yang kedua untuk mendapat nisbah antara 0 dan 1, kemudian gunakan arcsin. Contohnya, bertentangan 3 dan hipotenus 5 memberi arcsin(0.6), iaitu lebih kurang 36.87 darjah." },
      { "question": "Mengapa saya memerlukan sisi bertentangan dan hipotenus?", "answer": "Kerana sinus ditakrifkan sebagai bertentangan bahagi hipotenus. Kedua-dua sisi itu menentukan nisbah sepenuhnya, dan nisbah menentukan sudut sepenuhnya. Tiada ukuran lain diperlukan, dan sisi bersebelahan tidak pernah masuk ke dalam formula." },
      { "question": "Bolehkah saya mengira sudut tanpa mengetahui sisi bersebelahan?", "answer": "Ya. Itulah tujuan kalkulator ini. Arcsin hanya menggunakan sisi bertentangan dan hipotenus, jadi sisi bersebelahan boleh kekal tidak diketahui sepanjang masa." },
      { "question": "Apakah perbezaan antara sinus dan sinus songsang?", "answer": "Sinus mengambil sudut dan mengembalikan nisbah: sin(30 darjah) = 0.5. Sinus songsang membalikkan ini: ia mengambil nisbah dan mengembalikan sudut, jadi arcsin(0.5) = 30 darjah. Gunakan sinus apabila anda tahu sudut; gunakan arcsin apabila anda tahu sisi." },
      { "question": "Adakah arksinus sama dengan sin^-1?", "answer": "Ya. Arcsin(x) dan sin^-1(x) ialah dua notasi bagi fungsi sinus songsang yang sama. Superskrip -1 tidak bermaksud songsangan; songsangan sinus ialah kosekan, ditulis csc(x)." },
      { "question": "Mengapa hipotenus mesti lebih panjang daripada sisi bertentangan?", "answer": "Hipotenus sentiasa sisi terpanjang segi tiga tepat. Jika entri sisi bertentangan anda lebih panjang, sisinya tersalah label: ukuran terpanjang daripada tiga ukuran anda ialah hipotenus mengikut takrifan." },
      { "question": "Apa yang berlaku jika sisi bertentangan sama dengan hipotenus?", "answer": "Nisbah menjadi 1 dan arcsin(1) = 90 darjah. Tetapi sudut tirus 90 darjah adalah mustahil dalam segi tiga tepat yang tidak merosot; sisi yang sama menerangkan kes pengehad yang runtuh, bukan segi tiga sebenar." },
      { "question": "Bagaimana nisbah bertentangan-kepada-hipotenus mempengaruhi sudut?", "answer": "Nisbah yang lebih besar bermaksud sudut yang lebih besar. Nisbah 0.2 memberi kira-kira 11.54 darjah, 0.5 memberi tepat 30 darjah, dan 0.8 memberi kira-kira 53.13 darjah. Apabila sisi bertentangan menghampiri panjang hipotenus, sudut menghampiri 90 darjah." },
      { "question": "Bagaimana saya boleh mengesahkan sudut yang dikira?", "answer": "Tiga semakan bebas: kira sin(A) dan sahkan ia bersamaan a/c; kira pelengkap B = 90 - A dan sahkan segi tiga masih masuk akal; terbitkan sisi bersebelahan dengan teorem Pythagoras dan sahkan a^2 + b^2 = c^2." },
      { "question": "Bolehkah saya menggunakan kalkulator ini untuk menganggarkan sudut bumbung, tanjakan, atau tangga?", "answer": "Ya, untuk geometrinya. Masukkan kenaikan menegak sebagai sisi bertentangan dan panjang cerun sebagai hipotenus. Ingat hasilnya ialah sudut geometri sahaja; ia tidak memperakui keselamatan struktur atau pematuhan kod." },
      { "question": "Mengapa jawapan yang dikira mungkin sedikit berbeza daripada jawapan buku teks?", "answer": "Biasanya pembundaran: buku teks mungkin membundarkan nisbah sebelum menggunakan arcsin, atau membundarkan sudut akhir secara berbeza. Kekalkan ketepatan penuh melalui pengiraan dan bundarkan hanya pada akhir, dan jawapannya akan sepadan hingga digit yang dipaparkan." }
    ],
    "relatedHeading": "Terokai Kalkulator Segi Tiga Berkaitan",
    "relatedItems": [
      "Kalkulator Sudut Segi Tiga Tepat",
      "Kalkulator Sudut Segi Tiga Tepat daripada Kosinus",
      "Kalkulator Sudut Segi Tiga Tepat daripada Tangen",
      "Kalkulator Sisi Segi Tiga Tepat daripada Sinus",
      "Kalkulator Sisi Segi Tiga Tepat",
      "Kalkulator Sudut Hilang Segi Tiga Tepat",
      "Kalkulator Nisbah Trigonometri Segi Tiga Tepat",
      "Kalkulator Nisbah Sinus"
    ]
  },
  "pl": {
    "tocHeading": "W tym przewodniku",
    "tocItems": {
      "arcsin-intro": "Jak znaleźć kąt przy użyciu sinusa",
      "arcsin-anatomy": "Przyprostokątna przeciwległa i przeciwprostokątna",
      "arcsin-what": "Czym jest sinus w trójkącie prostokątnym?",
      "arcsin-formula": "Jak działa wzór na arcus sinus",
      "arcsin-howto": "Jak korzystać z kalkulatora",
      "arcsin-examples": "Przykłady krok po kroku",
      "arcsin-applications": "Przykłady z życia",
      "arcsin-ratio": "Jak stosunek zmienia kąt",
      "arcsin-units": "Jednostki kąta i dokładność pomiaru",
      "arcsin-mistakes": "Typowe błędy",
      "arcsin-verify": "Sprawdzanie obliczonego kąta",
      "arcsin-choose": "Wybór właściwego kalkulatora",
      "arcsin-faq": "Częste pytania",
      "arcsin-related": "Poznaj powiązane kalkulatory trójkątów",
      "arcsin-conclusion": "Znajduj dowolny kąt z sinusa z pewnością"
    },
    "sections": {
      "arcsin-intro": {
        "h2": "Jak znaleźć kąt przy użyciu sinusa",
        "blocks": [
          { "kind": "p", "text": "Wyobraź sobie pochylnię dla wózków: wiesz, że jej pochylona powierzchnia ma 9.5 metra, a wznosi się o 0.75 metra nad ziemię. Jaki jest kąt nachylenia pochylni? Kalkulator kąta trójkąta prostokątnego z sinusa odpowiada dokładnie na takie pytania. Pobiera przyprostokątną przeciwległą i przeciwprostokątną trójkąta prostokątnego i zwraca kąt ostry między nimi." },
          { "kind": "p", "text": "Te dwa pomiary wystarczą, ponieważ sinus jest zdefiniowany jako stosunek przyprostokątnej przeciwległej do przeciwprostokątnej. Gdy stosunek jest znany, arcus sinus przelicza go z powrotem na kąt. Przyprostokątna przyległa nigdy nie wchodzi do obliczeń, co czyni to narzędzie właściwym wyborem, gdy zmierzone wielkości to właśnie przyprostokątna przeciwległa i przeciwprostokątna." },
          { "kind": "p", "text": "W tym przewodniku A to obliczany ostry kąt odniesienia, a to bok przeciwległy kątowi A, a c to przeciwprostokątna. Obliczony kąt to pochylenie, w którym przeciwprostokątna spotyka przyprostokątną przyległą, mierzone w stopniach." }
        ]
      },
      "arcsin-anatomy": {
        "h2": "Przyprostokątna przeciwległa i przeciwprostokątna",
        "blocks": [
          { "kind": "h3", "text": "Czym jest trójkąt prostokątny?" },
          { "kind": "p", "text": "Trójkąt prostokątny ma jeden kąt równy dokładnie 90 stopni. Pozostałe dwa kąty są ostre, czyli każdy jest ściśle mniejszy od 90 stopni, a razem zawsze sumują się do 90 stopni. Ta zależność dopełnienia sprawia, że znalezienie jednego kąta ostrego natychmiast daje drugi przez odjęcie." },
          { "kind": "p", "text": "Warunek kąta prostego ma znaczenie, ponieważ sinus, cosinus i tangens są zdefiniowane poprzez stałe stosunki boków trójkątów prostokątnych. Bez rogu 90 stopni stosunek a/c nie ma stałej zależności z żadnym kątem i arcus sinus nie może go odzyskać." },
          { "kind": "h3", "text": "Czym jest przyprostokątna przeciwległa?" },
          { "kind": "p", "text": "Przyprostokątna przeciwległa to bok leżący dokładnie naprzeciw kąta A. Nigdy nie dotyka wierzchołka kąta A. W zadaniach o wysokości ten bok zwykle oznacza wzniesienie pionowe: wysokość, na jaką drabina sięga po ścianie, wzniesienie pochylni albo pionową składową wysięgnika dźwigu." },
          { "kind": "p", "text": "Nazwa jest względna. Jeśli zmienisz kąt odniesienia z A na B, bok, który był przeciwległy, staje się przyległy i odwrotnie. Zawsze upewnij się, który kąt rozwiązujesz, zanim nazwiesz boki." },
          { "kind": "h3", "text": "Czym jest przeciwprostokątna?" },
          { "kind": "p", "text": "Przeciwprostokątna to bok naprzeciw kąta prostego, oznaczany przez c. Jest zawsze najdłuższym bokiem trójkąta. Nigdy nie dotyka wierzchołka kąta prostego. W praktyce przeciwprostokątna jest często samą długością pochylenia: drabiną, krokwią, powierzchnią pochylni albo prostą odległością widzenia." },
          { "kind": "p", "text": "Gdy trójkąt jest narysowany obrócony, najpierw zidentyfikuj przeciwprostokątną, znajdując bok naprzeciw kwadratowego znacznika kąta prostego. Reszta wynika z tej identyfikacji." },
          { "kind": "h3", "text": "Czym jest przyprostokątna przyległa?" },
          { "kind": "p", "text": "Bok b to przyprostokątna dotykająca kąta A, niebędąca przeciwprostokątną. Ten kalkulator jej nie potrzebuje. Jeśli później będziesz potrzebować przyprostokątnej przyległej, twierdzenie Pitagorasa daje ją jako b = sqrt(c^2 - a^2)." },
          { "kind": "figcaption", "text": "Anatomia dla arcus sinusa: bok a leży naprzeciw kąta A, a bok c to przeciwprostokątna naprzeciw kąta prostego." },
          { "kind": "imgalt", "text": "Trójkąt prostokątny z wyróżnioną przyprostokątną przeciwległą a i przeciwprostokątną c dla arcus sinusa" }
        ]
      },
      "arcsin-what": {
        "h2": "Czym jest sinus w trójkącie prostokątnym?",
        "blocks": [
          { "kind": "p", "text": "Sinus mierzy, jaką część przeciwprostokątnej stanowi przyprostokątna przeciwległa. Definicja brzmi: sin(A) = a/c" },
          { "kind": "p", "text": "Tutaj sin(A) to sinus kąta A, a to przyprostokątna przeciwległa, a c to przeciwprostokątna. Jeśli przyprostokątna przeciwległa ma 3 jednostki, a przeciwprostokątna 5 jednostek, to sin(A) = 3/5 = 0.6. Stosunek jest bezwymiarowy: metry podzielone przez metry się skracają, więc wynik 0.6 jest ten sam, czy mierzysz w metrach, stopach czy centymetrach." },
          { "kind": "h3", "text": "Czym jest arcus sinus?" },
          { "kind": "p", "text": "Zwykły sinus zaczyna od kąta i daje stosunek. Arcus sinus zaczyna od prawidłowego stosunku i zwraca odpowiadający mu kąt. Jeśli sin(A) = 0.6, to A = arcsin(0.6) w przybliżeniu 36.87 stopnia. Arcus sinus odwraca zależność sinusa, aby odzyskać kąt, od którego zacząłeś." },
          { "kind": "h3", "text": "Czy arcus sinus to to samo co sinus odwrotny?" },
          { "kind": "p", "text": "Tak. Zapisy arcsin(x) i sin^-1(x) odnoszą się do tej samej funkcji. Górny indeks -1 nie oznacza odwrotności. Odwrotność sinusa to zupełnie inna funkcja: cosecans, zapisywany csc(x)." },
          { "kind": "h3", "text": "Dlaczego wzór używa przyprostokątnej przeciwległej?" },
          { "kind": "p", "text": "Sinus to stosunek łączący przyprostokątną przeciwległą z przeciwprostokątną, czyli dokładnie tę parę, którą przyjmuje ten kalkulator. Pomoc pamięciowa SOH-CAH-TOA podsumowuje trzy pary: SOH oznacza Sinus równa się Przeciwległa przez Przeciwprostokątną, CAH oznacza Cosinus równa się Przyległa przez Przeciwprostokątną, a TOA oznacza Tangens równa się Przeciwległa przez Przyległą. Gdy znane boki to przeciwległa i przeciwprostokątna, stosuje się SOH, więc arcsin jest właściwą funkcją odwrotną." },
          { "kind": "figcaption", "text": "Jak działa arcus sinus: podziel przyprostokątną przeciwległą przez przeciwprostokątną, a następnie zastosuj arcus sinus, aby odzyskać kąt." },
          { "kind": "imgalt", "text": "Schemat pokazujący dzielenie a przez c, a następnie zastosowanie arcsin, aby uzyskać kąt" }
        ]
      },
      "arcsin-formula": {
        "h2": "Jak działa wzór na arcus sinus",
        "blocks": [
          { "kind": "p", "text": "Zacznij od definicji sinusa: sin(A) = a/c" },
          { "kind": "p", "text": "Znane długości boków pozwalają obliczyć stosunek po prawej stronie. Następnie zastosuj arcus sinus do obu stron, aby wyodrębnić kąt: A = arcsin(a/c)" },
          { "kind": "p", "text": "Arcus sinus stosuje się do całego stosunku, ponieważ stosunek jako całość jest wartością sinusa. Prześledź przykład liczbowy. Dano a = 3 cm i c = 5 cm:" },
          { "kind": "p", "text": "Krok 1: Podziel przyprostokątną przeciwległą przez przeciwprostokątną: 3/5 = 0.6." },
          { "kind": "p", "text": "Krok 2: Zastosuj arcus sinus: A = arcsin(0.6)." },
          { "kind": "p", "text": "Krok 3: Oblicz kąt: A w przybliżeniu 36.87 stopnia." },
          { "kind": "p", "text": "Wynik jest przybliżeniem zaokrąglonym do dwóch miejsc po przecinku. Zwykłym językiem: kąt, którego sinus wynosi 0.6, mierzy około 36.87 stopnia." }
        ]
      },
      "arcsin-howto": {
        "h2": "Jak korzystać z kalkulatora kąta trójkąta prostokątnego z sinusa",
        "blocks": [
          { "kind": "steps", "items": [
            "Zidentyfikuj kąt prosty. Kalkulator działa tylko dla trójkątów prostokątnych, więc najpierw zlokalizuj róg 90 stopni.",
            "Znajdź przyprostokątną przeciwległą a. Leży dokładnie naprzeciw kąta A i nigdy nie dotyka jego wierzchołka.",
            "Zidentyfikuj przeciwprostokątną c. Znajduje się naprzeciw kąta 90 stopni i jest najdłuższym bokiem.",
            "Zmierz lub uzyskaj obie długości boków. Użyj taśmy, rysunku planu albo danych podanych w zadaniu.",
            "Wpisz długość przyprostokątnej przeciwległej w odpowiednie pole wejściowe.",
            "Wpisz długość przeciwprostokątnej w jej pole wejściowe.",
            "Wybierz zgodne jednostki selektorami jednostek, tak aby oba boki używały tej samej jednostki.",
            "Sprawdź, czy przeciwprostokątna jest dłuższa od przyprostokątnej przeciwległej. Jeśli nie, boki są błędnie nazwane.",
            "Naciśnij przycisk obliczania kąta A. Narzędzie dzieli, stosuje arcsin i zwraca kąt.",
            "Odczytaj obliczony kąt w stopniach i oceń, czy wygląda rozsądnie dla tego trójkąta.",
            "Zweryfikuj wynik jedną z metod kontroli w sekcji weryfikacji poniżej.",
            "Użyj przycisku resetowania, aby wyczyścić pola i rozpocząć kolejne obliczenie."
          ] }
        ]
      },
      "arcsin-examples": {
        "h2": "Przykłady krok po kroku znajdowania kąta przy użyciu sinusa",
        "blocks": [
          { "kind": "h3", "text": "Przykład 1: Podstawowy trójkąt prostokątny 3-4-5" },
          { "kind": "p", "text": "Dano przyprostokątną przeciwległą a = 3 cm i przeciwprostokątną c = 5 cm, znajdź kąt A." },
          { "kind": "p", "text": "Krok 1: Zapisz wzór: A = arcsin(a/c)." },
          { "kind": "p", "text": "Krok 2: Podstaw wartości: A = arcsin(3/5)." },
          { "kind": "p", "text": "Krok 3: Oblicz stosunek: 3/5 = 0.6." },
          { "kind": "p", "text": "Krok 4: Zastosuj arcus sinus: A = arcsin(0.6) w przybliżeniu 36.87 stopnia." },
          { "kind": "p", "text": "Ten kąt to pochylenie między przeciwprostokątną a przyprostokątną przyległą, przy czym bok 3 cm stoi naprzeciw niego." },
          { "kind": "h3", "text": "Przykład 2: Gdy przyprostokątna przeciwległa to połowa przeciwprostokątnej" },
          { "kind": "p", "text": "Dano a = 5 m i c = 10 m: A = arcsin(5/10) = arcsin(0.5) = 30 stopni dokładnie. To znany trójkąt specjalny 30-60-90, w którym bok naprzeciw kąta 30 stopni to połowa przeciwprostokątnej." },
          { "kind": "h3", "text": "Przykład 3: Trójkąt o stosunku przyprostokątnej przeciwległej do przeciwprostokątnej 0.8" },
          { "kind": "p", "text": "Dano a = 8 m i c = 10 m: A = arcsin(8/10) = arcsin(0.8) w przybliżeniu 53.13 stopnia. Kąt jest większy niż 30 stopni, ponieważ przyprostokątna przeciwległa stanowi większą część przeciwprostokątnej." },
          { "kind": "h3", "text": "Przykład 4: Krótka przyprostokątna przeciwległa" },
          { "kind": "p", "text": "Dano a = 2 ft i c = 10 ft: A = arcsin(2/10) = arcsin(0.2) w przybliżeniu 11.54 stopnia. Stosunkowo krótka przyprostokątna przeciwległa daje mały kąt, ponieważ trójkąt jest długi i płaski." }
        ]
      },
      "arcsin-applications": {
        "h2": "Przykłady z życia obliczania kątów przy użyciu sinusa",
        "blocks": [
          { "kind": "h3", "text": "Przykład 5: Znajdowanie kąta nachylenia dachu" },
          { "kind": "p", "text": "Krokiew dachowa ma 6.5 m długości i wznosi się o 4 m w pionie powyżej poziomu punktu startowego. Znajdź kąt między krokwią a poziomem. Krokiew i wzniesienie pionowe tworzą trójkąt prostokątny: wzniesienie leży naprzeciw kąta nachylenia, a krokiew jest przeciwprostokątną. Arcus sinus jest właściwy, ponieważ znana para to bok przeciwległy i przeciwprostokątna." },
          { "kind": "p", "text": "A = arcsin(4/6.5) = arcsin(0.61538) w przybliżeniu 37.98 stopnia. Dach wznosi się pod kątem około 38 stopni od poziomu. Zauważ, że to obliczenie geometryczne nie jest pełną oceną projektu dachu; czynniki konstrukcyjne są osobną kwestią." },
          { "kind": "h3", "text": "Przykład 6: Znajdowanie kąta drabiny" },
          { "kind": "p", "text": "Drabina ma 5.5 m długości i sięga 4.5 m w górę ściany. Oblicz kąt między drabiną a poziomym gruntem. Wysokość ściany leży naprzeciw kąta przy gruncie, a sama drabina jest przeciwprostokątną, więc stosuje się arcsin." },
          { "kind": "p", "text": "A = arcsin(4.5/5.5) w przybliżeniu 54.90 stopnia. Drabina opiera się pod kątem około 54.9 stopnia. Samo to obliczenie nie ustala, czy drabina jest bezpiecznie ustawiona." },
          { "kind": "h3", "text": "Przykład 7: Obliczanie nachylenia pochylni" },
          { "kind": "p", "text": "Pochylnia ma długość pochylenia 9.5 m i wzniesienie pionowe 0.75 m. Znajdź jej kąt względem poziomu. Pochylona powierzchnia jest przeciwprostokątną, a wzniesienie pionowe leży naprzeciw kąta nachylenia." },
          { "kind": "p", "text": "A = arcsin(0.75/9.5) w przybliżeniu 4.53 stopnia. Pochylnia wznosi się łagodnie pod kątem 4.53 stopnia. Nie twierdź, że obliczona pochylnia spełnia wymogi dostępności ani przepisy budowlane." },
          { "kind": "h3", "text": "Przykład 8: Znajdowanie kąta w geodezji" },
          { "kind": "p", "text": "Uproszczony pomiar geodezyjny rejestruje różnicę pionową 30 m i prostą odległość pochyloną 50 m. Oblicz kąt między linią pochyloną a poziomem. Różnica pionowa leży naprzeciw kąta; odległość pochylona jest przeciwprostokątną." },
          { "kind": "p", "text": "A = arcsin(30/50) = arcsin(0.6) w przybliżeniu 36.87 stopnia. Prawdziwa geodezja może wymagać korekt wysokości instrumentu i dostosowań terenu wykraczających poza ten uproszczony model." },
          { "kind": "h3", "text": "Przykład 9: Obliczanie kąta odciągu" },
          { "kind": "p", "text": "Odciąg ma 18 m długości, a rozstaw pionowy między jego końcami wynosi 10 m. Znajdź kąt między odciągiem a poziomem. Rozstaw pionowy to bok przeciwległy, a odciąg to przeciwprostokątna." },
          { "kind": "p", "text": "A = arcsin(10/18) w przybliżeniu 33.75 stopnia. Wynik opisuje tylko geometrię; nie określa naciągu odciągu, wytrzymałości kotwienia ani bezpieczeństwa konstrukcji." },
          { "kind": "h3", "text": "Przykład 10: Znajdowanie nachylenia schodów" },
          { "kind": "p", "text": "Uproszczone schody mają wzniesienie pionowe 2.8 m i długość pochylonego policzka 5 m. Oblicz kąt między policzkiem a poziomem. Wzniesienie i policzek to odpowiednio bok przeciwległy i przeciwprostokątna." },
          { "kind": "p", "text": "A = arcsin(2.8/5) = arcsin(0.56) w przybliżeniu 34.06 stopnia. To obliczenie nie ustala zgodności z przepisami budowlanymi." },
          { "kind": "h3", "text": "Przykład 11: Obliczanie kąta wznoszenia samolotu" },
          { "kind": "p", "text": "Dla uproszczonego odcinka lotu samolot zyskuje 1,500 m wysokości, pokonując 5,000 m wzdłuż prostej ścieżki lotu. Oszacuj kąt wznoszenia względem poziomu. Przyrost wysokości leży naprzeciw kąta wznoszenia; ścieżka lotu jest przeciwprostokątną." },
          { "kind": "p", "text": "A = arcsin(1500/5000) = arcsin(0.3) w przybliżeniu 17.46 stopnia. To model prostego odcinka, a nie pełna analiza zmieniającej się ścieżki lotu." },
          { "kind": "h3", "text": "Przykład 12: Znajdowanie kąta zastrzału mechanicznego" },
          { "kind": "p", "text": "Zastrzał mechaniczny ma długość 1,700 mm i wzniesienie pionowe 800 mm. Oblicz jego kąt względem poziomu. Wzór działa identycznie w milimetrach: wzniesienie jest przeciwległe, długość zastrzału to przeciwprostokątna." },
          { "kind": "p", "text": "A = arcsin(800/1700) w przybliżeniu 28.07 stopnia. Wynik opisuje geometrię, a nie wytrzymałość konstrukcji." },
          { "kind": "h3", "text": "Przykład 13: Obliczanie nachylenia wysięgnika dźwigu" },
          { "kind": "p", "text": "Uproszczony wysięgnik dźwigu ma długość 10 m i składową pionową 8 m. Znajdź kąt między wysięgnikiem a poziomem. Długość wysięgnika to przeciwprostokątna, a składowa pionowa leży naprzeciw kąta." },
          { "kind": "p", "text": "A = arcsin(8/10) = arcsin(0.8) w przybliżeniu 53.13 stopnia. Nie traktuj wyniku jako potwierdzenia udźwigu dźwigu ani bezpieczeństwa eksploatacji." },
          { "kind": "h3", "text": "Przykład 14: Szacowanie kąta elewacji drzewa" },
          { "kind": "p", "text": "Osoba obserwuje wierzchołek drzewa z punktu, w którym różnica pionowa do wierzchołka wynosi 12 m, a prosta odległość widzenia to 20 m. Znajdź kąt elewacji. Różnica pionowa leży naprzeciw kąta; linia widzenia jest przeciwprostokątną." },
          { "kind": "p", "text": "A = arcsin(12/20) = arcsin(0.6) w przybliżeniu 36.87 stopnia. Daje to kąt od poziomu obserwacji; nie podaje automatycznie całkowitej wysokości drzewa nad ziemią." },
          { "kind": "h3", "text": "Przykład 15: Obliczanie nachylenia szlaku turystycznego" },
          { "kind": "p", "text": "Uproszczony prosty odcinek szlaku ma długość pochylenia 100 m i wzniesienie pionowe 80 m. Znajdź kąt nachylenia. Wzniesienie i odległość pochylona to bok przeciwległy i przeciwprostokątna." },
          { "kind": "p", "text": "A = arcsin(80/100) = arcsin(0.8) w przybliżeniu 53.13 stopnia. To strome, ilustracyjne nachylenie; rzeczywiste szlaki różnią się gradientem na swojej długości." },
          { "kind": "h3", "text": "Przykład 16: Znajdowanie kąta wspornika markizy" },
          { "kind": "p", "text": "Przekątny wspornik markizy ma 3.5 m długości i wznosi się o 1.2 m w pionie. Oblicz kąt między wspornikiem a poziomem. Wzniesienie pionowe leży naprzeciw kąta, a wspornik jest przeciwprostokątną." },
          { "kind": "p", "text": "A = arcsin(1.2/3.5) w przybliżeniu 20.05 stopnia. Wynik nie potwierdza przydatności konstrukcyjnej wspornika." },
          { "kind": "table", "headers": ["Sytuacja", "Przeciwległa", "Przeciwprostokątna", "Wzór", "Kąt", "Znaczenie"], "rows": [
            ["Krokiew dachowa", "4 m", "6.5 m", "arcsin(4/6.5)", "37.98 deg", "Nachylenie dachu od poziomu"],
            ["Drabina", "4.5 m", "5.5 m", "arcsin(4.5/5.5)", "54.90 deg", "Kąt oparcia od gruntu"],
            ["Pochylnia", "0.75 m", "9.5 m", "arcsin(0.75/9.5)", "4.53 deg", "Łagodne nachylenie w stylu dostępności"],
            ["Geodezja", "30 m", "50 m", "arcsin(30/50)", "36.87 deg", "Kąt nachylenia mierzonej linii"],
            ["Odciąg", "10 m", "18 m", "arcsin(10/18)", "33.75 deg", "Kąt odciągu od poziomu"],
            ["Schody", "2.8 m", "5 m", "arcsin(2.8/5)", "34.06 deg", "Nachylenie policzka"],
            ["Wznoszenie samolotu", "1500 m", "5000 m", "arcsin(1500/5000)", "17.46 deg", "Szacowany kąt wznoszenia"],
            ["Zastrzał", "800 mm", "1700 mm", "arcsin(800/1700)", "28.07 deg", "Kąt zastrzału od poziomu"],
            ["Wysięgnik dźwigu", "8 m", "10 m", "arcsin(8/10)", "53.13 deg", "Elewacja wysięgnika"],
            ["Obserwacja drzewa", "12 m", "20 m", "arcsin(12/20)", "36.87 deg", "Kąt elewacji"],
            ["Szlak turystyczny", "80 m", "100 m", "arcsin(80/100)", "53.13 deg", "Strome nachylenie szlaku"],
            ["Wspornik markizy", "1.2 m", "3.5 m", "arcsin(1.2/3.5)", "20.05 deg", "Kąt wspornika od poziomu"]
          ] },
          { "kind": "figcaption", "text": "Cztery praktyczne przykłady arcus sinusa: dach, drabina, pochylnia i geodezja, każdy ze zmierzonymi bokami i wynikowym kątem." },
          { "kind": "imgalt", "text": "Cztery panele: przykłady arcus sinusa dla krokwi dachowej, drabiny, pochylni i geodezji" }
        ]
      },
      "arcsin-ratio": {
        "h2": "Jak stosunek przyprostokątnej przeciwległej do przeciwprostokątnej zmienia kąt",
        "blocks": [
          { "kind": "p", "text": "Stosunek a/c wyznacza kąt A. Większa przyprostokątna przeciwległa względem przeciwprostokątnej daje większy kąt ostry, ponieważ większa część długości przeciwprostokątnej stoi pionowo. Mały stosunek daje mały kąt: trójkąt jest długi i płaski." },
          { "kind": "p", "text": "Gdy przyprostokątna przeciwległa jest dokładnie połową przeciwprostokątnej, kąt wynosi 30 stopni. Trójkąty proporcjonalne mają te same kąty niezależnie od rozmiaru: przeskalowanie każdego boku o ten sam czynnik pozostawia każdy stosunek bez zmian, więc kąty pozostają stałe. Zmiana jednostek z metrów na centymetry z tego samego powodu nic nie zmienia." },
          { "kind": "p", "text": "Stosunek musi pozostawać między 0 a 1 dla zwykłego trójkąta prostokątnego. Stosunek 0 oznaczałby brak przyprostokątnej przeciwległej, a stosunek 1 oznaczałby, że przyprostokątna przeciwległa równa się przeciwprostokątnej; oba to zdegenerowane przypadki brzegowe, a nie prawdziwe trójkąty o trzech dodatnich bokach." },
          { "kind": "table", "headers": ["Przyprostokątna przeciwległa a", "Przeciwprostokątna c", "Stosunek a/c", "Kąt A"], "rows": [
            ["2", "10", "0.2", "W przybliżeniu 11.54 deg"],
            ["5", "10", "0.5", "30 deg"],
            ["8", "10", "0.8", "W przybliżeniu 53.13 deg"]
          ] },
          { "kind": "figcaption", "text": "Przy przeciwprostokątnej ustalonej na 10 jednostek większa przyprostokątna przeciwległa daje większy kąt ostry: 11.54, 30, a następnie 53.13 stopnia." },
          { "kind": "imgalt", "text": "Trzy panele pokazujące, jak większa przyprostokątna przeciwległa daje większy kąt przy stałej przeciwprostokątnej" }
        ]
      },
      "arcsin-units": {
        "h2": "Jednostki kąta i dokładność pomiaru",
        "blocks": [
          { "kind": "p", "text": "Ten kalkulator zwraca kąty w stopniach, standardowej jednostce w budownictwie, geodezji i geometrii szkolnej. Stopień dzieli pełny okrąg na 360 części. Alternatywą są radiany: pełny okrąg to 2pi radianów. Arcus sinus w kalkulatorze ręcznym może zwracać oba, zależnie od ustawienia trybu." },
          { "kind": "p", "text": "Przeliczaj między nimi wzorem: Stopnie = Radiany x 180/pi. Sam stosunek boków wejściowych nie ma jednostki, a oba boki muszą używać zgodnych jednostek: metrów z metrami albo milimetrów z milimetrami." },
          { "kind": "h3", "text": "Przykład: Czy jednostka pomiaru zmienia kąt?" },
          { "kind": "p", "text": "Weź a = 3 m i c = 5 m. Stosunek wynosi 0.6, a kąt 36.87 stopnia. W centymetrach a = 300 cm i c = 500 cm dają ten sam stosunek 0.6 i ten sam kąt. Przeskalowanie obu pomiarów o ten sam czynnik się skraca." },
          { "kind": "p", "text": "Zachowaj dodatkowe cyfry w krokach pośrednich i zaokrąglaj tylko końcowy kąt. Uzasadniona dokładność zależy od pomiarów wejściowych: przybliżone pomiary terenowe uzasadniają jedno miejsce po przecinku, a precyzyjne pomiary warsztatowe mogą uzasadniać dwa." }
        ]
      },
      "arcsin-mistakes": {
        "h2": "Typowe błędy przy obliczaniu kąta przy użyciu sinusa",
        "blocks": [
          { "kind": "listItems", "items": [
            "Użycie przyprostokątnej przyległej zamiast przeciwległej. Sprawdź, przy którym wierzchołku leży twój kąt, a następnie weź bok naprzeciw niego. Jeśli użyłeś dotykającej przyprostokątnej, obliczyłeś arcus cosinus, a nie arcus sinus.",
            "Użycie przeciwprostokątnej jako licznika. Wzór to a/c, przeciwległa przez przeciwprostokątną. Odwrócenie daje stosunek powyżej 1 i błąd dziedziny.",
            "Odwrócenie stosunku. arcsin(c/a) to nie ten sam kąt. Dla 3-4-5, arcsin(3/5) = 36.87 stopnia, ale arcsin(5/3) jest nieokreślony.",
            "Użycie zwykłego sinusa zamiast arcus sinusa. Sinus wymaga kąta na wejściu. Jeśli znasz już boki i potrzebujesz kąta, potrzebujesz funkcji odwrotnej.",
            "Mylenie arcus sinusa z odwrotnością sinusa. sin^-1(x) to arcsin; 1/sin(x) to cosecans. To nie ma ze sobą nic wspólnego.",
            "Wpisanie przyprostokątnej przeciwległej dłuższej niż przeciwprostokątna. Geometrycznie niemożliwe w trójkącie prostokątnym. Nazwij boki na nowo: najdłuższy pomiar to przeciwprostokątna.",
            "Wpisywanie zerowych lub ujemnych długości boków. Długości muszą być dodatnie. Zerowa przyprostokątna przeciwległa opisuje płaską linię, a nie trójkąt.",
            "Mieszanie jednostek pomiaru. Wpisanie przyprostokątnej przeciwległej w metrach, a przeciwprostokątnej w centymetrach psuje stosunek. Najpierw przelicz.",
            "Zbyt wczesne zaokrąglanie stosunku. Zaokrąglenie 0.61538 do 0.62 przed zastosowaniem arcsin przesuwa przykład dachu z 37.98 na 38.32 stopnia. Zachowaj pełną dokładność do końca.",
            "Podawanie radianów, gdy oczekiwane są stopnie. Odpowiedź 0.64 zwykle oznacza, że kalkulator był w trybie radianów; pomnóż przez 180/pi, aby uzyskać 36.87 stopnia.",
            "Obliczanie kąta B, gdy narzędzie znajduje kąt A. Kalkulator zwraca kąt naprzeciw boku a. Drugi kąt ostry to 90 stopni - A.",
            "Zakładanie, że kąt potwierdza bezpieczeństwo konstrukcji. Kąt to czysta geometria. Stabilność drabiny, wytrzymałość dachu i zgodność pochylni wymagają osobnych kontroli inżynierskich.",
            "Mylenie wzniesienia pionowego z odległością pochyloną. W przykładzie pochylni 9.5 m to pochylona powierzchnia (przeciwprostokątna), a nie poziomy przebieg. Zamiana ich zmienia trójkąt całkowicie.",
            "Traktowanie niemożliwego stosunku jako poprawnego. Jeśli obliczone a/c przekracza 1, zatrzymaj się: żaden trójkąt prostokątny nie ma takich boków. Znajdź błąd nazewnictwa zamiast wymuszać obliczenie."
          ] }
        ]
      },
      "arcsin-verify": {
        "h2": "Jak sprawdzić, czy obliczony kąt jest poprawny",
        "blocks": [
          { "kind": "p", "text": "Prawidłowy, niezdegenerowany trójkąt prostokątny wymaga: dodatniej przyprostokątnej przeciwległej, dodatniej przeciwprostokątnej, przeciwprostokątnej ściśle dłuższej od przyprostokątnej przeciwległej, stosunku a/c ściśle między 0 a 1 oraz wynikowego kąta ściśle między 0 a 90 stopni." },
          { "kind": "p", "text": "Jeśli a = c, arcsin zwraca 90 stopni, co jest zdegenerowanym przypadkiem granicznym, a nie prawdziwym trójkątem. Jeśli a > c, trójkąt jest geometrycznie niemożliwy." },
          { "kind": "h3", "text": "Metoda 1: Sprawdź stosunek sinusa" },
          { "kind": "p", "text": "Zweryfikuj sin(A) w przybliżeniu równy a/c, używając niezaokrąglonego kąta. Dla przykładu 3-4-5, sin(36.87 stopnia) w przybliżeniu 0.6 = 3/5." },
          { "kind": "h3", "text": "Metoda 2: Sprawdź kąt dopełniający" },
          { "kind": "p", "text": "Oblicz B = 90 stopni - A. Oba kąty ostre muszą sumować się do dokładnie 90 stopni. Następnie potwierdź, że trójkąt ma sens przy kącie B jako odniesieniu." },
          { "kind": "h3", "text": "Metoda 3: Użyj twierdzenia Pitagorasa" },
          { "kind": "p", "text": "Oblicz przyprostokątną przyległą b = sqrt(c^2 - a^2), a następnie zweryfikuj a^2 + b^2 w przybliżeniu c^2. Dla a = 3 i c = 5: b = sqrt(25 - 9) = 4, oraz 9 + 16 = 25. Drobne rozbieżności wynikają z zaokrąglenia wyświetlanego kąta, a nie z kalkulatora." }
        ]
      },
      "arcsin-choose": {
        "h2": "Wybór właściwego kalkulatora trójkąta prostokątnego",
        "blocks": [
          { "kind": "p", "text": "Kalkulator kąta trójkąta prostokątnego z sinusa: użyj, gdy znasz przyprostokątną przeciwległą i przeciwprostokątną i potrzebujesz kąta A. To strona, na której jesteś." },
          { "kind": "p", "text": "Kalkulator kąta trójkąta prostokątnego z cosinusa: użyj, gdy znasz przyprostokątną przyległą i przeciwprostokątną. Ten sam kąt, inna znana para." },
          { "kind": "p", "text": "Kalkulator kąta trójkąta prostokątnego z tangensa: użyj, gdy znasz obie przyprostokątne, ale nie przeciwprostokątną. Typowe dla pomiarów terenowych wzniesienie na przebieg." },
          { "kind": "p", "text": "Kalkulator kąta trójkąta prostokątnego: pomaga wybrać właściwą metodę, gdy nie masz pewności, które boki posiadasz." },
          { "kind": "p", "text": "Kalkulator boku trójkąta prostokątnego z sinusa: odwraca kierunek: mając kąt i przeciwprostokątną, znajduje przyprostokątną przeciwległą." },
          { "kind": "p", "text": "Kalkulator boku trójkąta prostokątnego: znajduje brakujące długości boków ze znanych pomiarów trójkąta." },
          { "kind": "p", "text": "Dopasuj narzędzie do swoich pomiarów. Jeśli przyprostokątna przeciwległa jest nieznana i trudna do zmierzenia, nie obliczaj jej tylko po to, by użyć arcsin; wybierz funkcję odwrotną pasującą do boków, które już masz." }
        ]
      },
      "arcsin-faq": {
        "h2": "Częste pytania",
        "blocks": []
      },
      "arcsin-related": {
        "h2": "Poznaj powiązane kalkulatory trójkątów",
        "blocks": []
      },
      "arcsin-conclusion": {
        "h2": "Znajduj dowolny kąt z sinusa z pewnością",
        "blocks": [
          { "kind": "p", "text": "Zacznij od zidentyfikowania przyprostokątnej przeciwległej: boku naprzeciw docelowego kąta. Potwierdź, że przeciwprostokątna jest najdłuższym bokiem. Podziel, zastosuj arcsin i odczytaj kąt w stopniach. Drugi kąt uzyskaj z 90 minus pierwszy. Zweryfikuj kontrolą sinusa w obie strony, obliczeniem metodą krzyżową i twierdzeniem Pitagorasa. Dzięki tym krokom każde zadanie przeciwległa-i-przeciwprostokątna sprowadza się do niezawodnej rutyny. Wróć do kalkulatora na górze tej strony, aby przeliczyć swoje liczby." }
        ]
      }
    },
    "faqs": [
      { "question": "Co oblicza wzór A = arcsin(a/c)?", "answer": "Znajduje kąt ostry, którego sinus równa się stosunkowi przyprostokątnej przeciwległej do przeciwprostokątnej. Podziel długość przyprostokątnej przeciwległej przez długość przeciwprostokątnej, a następnie zastosuj arcus sinus, aby przeliczyć ten ułamek dziesiętny na kąt w stopniach." },
      { "question": "Jak znaleźć kąt przy użyciu arcus sinusa?", "answer": "Zidentyfikuj przyprostokątną przeciwległą i przeciwprostokątną, podziel pierwszą przez drugą, aby uzyskać stosunek między 0 a 1, a następnie zastosuj arcsin. Na przykład przeciwległa 3 i przeciwprostokątna 5 dają arcsin(0.6), czyli w przybliżeniu 36.87 stopnia." },
      { "question": "Dlaczego potrzebuję przyprostokątnej przeciwległej i przeciwprostokątnej?", "answer": "Ponieważ sinus jest zdefiniowany jako przeciwległa przez przeciwprostokątną. Te dwa boki w pełni wyznaczają stosunek, a stosunek w pełni wyznacza kąt. Żaden inny pomiar nie jest potrzebny, a przyprostokątna przyległa nigdy nie wchodzi do wzoru." },
      { "question": "Czy mogę obliczyć kąt, nie znając przyprostokątnej przyległej?", "answer": "Tak. W tym właśnie celu istnieje ten kalkulator. Arcsin używa tylko przyprostokątnej przeciwległej i przeciwprostokątnej, więc przyprostokątna przyległa może pozostać nieznana przez cały czas." },
      { "question": "Jaka jest różnica między sinusem a arcus sinusem?", "answer": "Sinus bierze kąt i zwraca stosunek: sin(30 stopni) = 0.5. Arcus sinus odwraca to: bierze stosunek i zwraca kąt, więc arcsin(0.5) = 30 stopni. Używaj sinusa, gdy znasz kąt; używaj arcsin, gdy znasz boki." },
      { "question": "Czy arcus sinus to to samo co sin^-1?", "answer": "Tak. Arcsin(x) i sin^-1(x) to dwa zapisy tej samej funkcji arcus sinus. Górny indeks -1 nie oznacza odwrotności; odwrotność sinusa to cosecans, zapisywany csc(x)." },
      { "question": "Dlaczego przeciwprostokątna musi być dłuższa od przyprostokątnej przeciwległej?", "answer": "Przeciwprostokątna jest zawsze najdłuższym bokiem trójkąta prostokątnego. Jeśli twój wpis przyprostokątnej przeciwległej jest dłuższy, boki są błędnie nazwane: najdłuższy z trzech pomiarów jest z definicji przeciwprostokątną." },
      { "question": "Co się dzieje, gdy przyprostokątna przeciwległa równa się przeciwprostokątnej?", "answer": "Stosunek staje się 1, a arcsin(1) = 90 stopni. Ale kąt ostry 90 stopni jest niemożliwy w niezdegenerowanym trójkącie prostokątnym; równe boki opisują zapadnięty przypadek graniczny, a nie prawdziwy trójkąt." },
      { "question": "Jak stosunek przyprostokątnej przeciwległej do przeciwprostokątnej wpływa na kąt?", "answer": "Większy stosunek oznacza większy kąt. Stosunek 0.2 daje około 11.54 stopnia, 0.5 daje dokładnie 30 stopni, a 0.8 daje około 53.13 stopnia. Gdy przyprostokątna przeciwległa zbliża się długością do przeciwprostokątnej, kąt zbliża się do 90 stopni." },
      { "question": "Jak mogę zweryfikować obliczony kąt?", "answer": "Trzy niezależne kontrole: oblicz sin(A) i potwierdź, że równa się a/c; oblicz dopełnienie B = 90 - A i potwierdź, że trójkąt nadal ma sens; wyprowadź przyprostokątną przyległą z twierdzenia Pitagorasa i potwierdź a^2 + b^2 = c^2." },
      { "question": "Czy mogę użyć tego kalkulatora do oszacowania kąta dachu, pochylni albo drabiny?", "answer": "Tak, dla geometrii. Wpisz wzniesienie pionowe jako przyprostokątną przeciwległą, a długość pochylenia jako przeciwprostokątną. Pamiętaj, że wynik to tylko kąt geometryczny; nie poświadcza bezpieczeństwa konstrukcji ani zgodności z przepisami." },
      { "question": "Dlaczego moja obliczona odpowiedź może nieznacznie różnić się od odpowiedzi w podręczniku?", "answer": "Zwykle to kwestia zaokrągleń: podręczniki mogą zaokrąglać stosunek przed zastosowaniem arcsin albo inaczej zaokrąglać końcowy kąt. Zachowaj pełną dokładność przez całe obliczenie i zaokrąglaj tylko na końcu, a odpowiedzi będą zgodne do wyświetlanych cyfr." }
    ],
    "relatedHeading": "Poznaj powiązane kalkulatory trójkątów",
    "relatedItems": [
      "Kalkulator kąta trójkąta prostokątnego",
      "Kalkulator kąta trójkąta prostokątnego z cosinusa",
      "Kalkulator kąta trójkąta prostokątnego z tangensa",
      "Kalkulator boku trójkąta prostokątnego z sinusa",
      "Kalkulator boku trójkąta prostokątnego",
      "Kalkulator brakującego kąta trójkąta prostokątnego",
      "Kalkulator stosunków trygonometrycznych trójkąta prostokątnego",
      "Kalkulator stosunku sinusa"
    ]
  }
};
