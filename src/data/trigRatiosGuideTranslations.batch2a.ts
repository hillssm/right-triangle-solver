/**
 * trigRatiosGuideTranslations.batch2a.ts
 * Locales pt (Portuguese), bn (Bengali) for the Right Triangle Trig Ratios guide
 * (TrigRatiosGuide.astro, Page 15 of 45).
 *
 * Structure per locale:
 * - tocHeading, tocItems (17 entries keyed by section id)
 * - sections (15 entries: sec-intro, sec-triangle, sec-ratios, sec-six, sec-choose,
 *   sec-howto, sec-foundations, sec-applications, sec-relate, sec-angles,
 *   sec-missing-side, sec-inverse, sec-mistakes, sec-verify, sec-conclusion)
 *   Each section: h2, blocks (ordered {kind: 'p'|'h3', text}), optional steps,
 *   closingParagraphs, table, imgAlt/figcaption
 * - faqs (12 question/answer pairs), faqHeading, relatedHeading, relatedItems (9)
 *
 * Formulas, KaTeX markup ([[...]] and [[[..]]]), variable names, numbers, and
 * degree values are preserved byte-identical to the English source.
 * KaTeX backslashes are doubled in the .ts source. URLs are never translated.
 * No em dashes. No decorative unicode. Calculator button labels use the
 * ground-truth localized labels from the translation schema.
 */

export const TRIG_RATIOS_TRANSLATIONS_BATCH2A = {
  "pt": {
    "tocHeading": "Neste Guia",
    "tocItems": {
      "sec-intro": "O Que é a Calculadora de Razões Trigonométricas do Triângulo Retângulo?",
      "sec-triangle": "Entendendo os Lados de um Triângulo Retângulo",
      "sec-ratios": "Entendendo as Razões Trigonométricas",
      "sec-six": "As Seis Razões Trigonométricas de um Triângulo Retângulo",
      "sec-choose": "Como Escolher a Razão Trigonométrica Correta",
      "sec-howto": "Como Usar a Calculadora de Razões Trigonométricas do Triângulo Retângulo",
      "sec-foundations": "Exemplos Passo a Passo de Razões Trigonométricas",
      "sec-applications": "Aplicações Reais das Razões Trigonométricas",
      "sec-relate": "Como as Seis Razões Trigonométricas se Relacionam Entre Si",
      "sec-angles": "Entendendo as Razões Trigonométricas em Ângulos Diferentes",
      "sec-missing-side": "Como Calcular um Lado Faltante de um Triângulo Retângulo",
      "sec-inverse": "Como Encontrar um Ângulo a Partir de uma Razão Trigonométrica",
      "sec-mistakes": "Erros Comuns ao Usar Razões Trigonométricas",
      "sec-verify": "Como Verificar se Seus Resultados Trigonométricos São Válidos",
      "sec-related": "Calculadoras Relacionadas",
      "sec-faq": "Perguntas Frequentes",
      "sec-conclusion": "Conclusão"
    },
    "sections": {
      "sec-intro": {
        "h2": "O Que é a Calculadora de Razões Trigonométricas do Triângulo Retângulo?",
        "blocks": [
          { "kind": "p", "text": "Uma calculadora de razões trigonométricas do triângulo retângulo calcula as seis razões trigonométricas, seno, cosseno, tangente, cotangente, secante e cossecante, a partir dos comprimentos dos lados de um triângulo retângulo. Cada razão compara um par específico de lados em relação a um ângulo agudo de referência escolhido. A calculadora desta página oferece seis modos, um por razão, para que você digite os dois lados que cada razão precisa e obtenha o valor instantaneamente." },
          { "kind": "p", "text": "Essas razões dependem de um ângulo de referência, não apenas do triângulo. Para o mesmo triângulo, mudar qual ângulo agudo é usado como referência troca os papéis dos dois catetos, de modo que os valores das razões também mudam. É por isso que os modos da calculadora são organizados por pares de lados conhecidos: cateto oposto e hipotenusa dão o seno, cateto adjacente e hipotenusa dão o cosseno, e os dois catetos dão a tangente. Os modos recíprocos dão a cossecante, a secante e a cotangente a partir dos mesmos pares." },
          { "kind": "p", "text": "Considere um triângulo 3-4-5 com cateto oposto 3, cateto adjacente 4 e hipotenusa 5. Um triângulo produz seis valores diferentes: [[\\sin(A)=3/5=0.6]], [[\\cos(A)=4/5=0.8]] e [[\\tan(A)=3/4=0.75]], com as razões recíprocas [[\\csc(A)\\approx1.6667]], [[\\sec(A)=1.25]] e [[\\cot(A)\\approx1.3333]]. Cada razão faz uma pergunta diferente sobre a mesma forma. Entender as fórmulas permite verificar qualquer resultado à mão, que é a maneira mais segura de detectar lados rotulados incorretamente." }
        ]
      },
      "sec-triangle": {
        "h2": "Entendendo os Lados de um Triângulo Retângulo",
        "blocks": [
          { "kind": "p", "text": "Toda razão trigonométrica é uma comparação de dois lados, por isso nomear os lados corretamente é a base de tudo que segue. Este guia usa uma convenção consistente em todo o texto: [[A]] é o ângulo agudo de referência no canto inferior esquerdo, [[B]] é o ângulo reto no canto inferior direito, [[C]] é o outro ângulo agudo no topo, o lado [[a]] é o cateto vertical, o lado [[b]] é a base horizontal e o lado [[c]] é a hipotenusa inclinada." },
          { "kind": "h3", "text": "O Que é um Triângulo Retângulo?" },
          { "kind": "p", "text": "Um triângulo retângulo tem um ângulo medindo exatamente 90 graus, com os outros dois ângulos agudos. Os dois catetos se encontram no ângulo reto, e a hipotenusa fica oposta ao ângulo reto. Como os três ângulos internos somam 180 graus, os dois ângulos agudos são complementares: [[A+C=90^\\circ]]. Os triângulos retângulos são ideais para cálculos trigonométricos porque fixar um ângulo agudo fixa completamente a forma do triângulo: todos os triângulos retângulos com o mesmo ângulo agudo são semelhantes, então suas razões de lados coincidem." },
          { "kind": "h3", "text": "O Que é o Cateto Oposto?" },
          { "kind": "p", "text": "O cateto oposto fica diretamente em frente ao ângulo de referência escolhido. Na nossa convenção, o lado [[a]] é oposto ao ângulo [[A]]. Em problemas práticos, o cateto oposto costuma representar altura vertical, uma diferença de elevação ou o componente vertical de uma inclinação. Seu papel não é fixo em um lado específico: se o ângulo de referência mudar, um lado diferente se torna oposto." },
          { "kind": "h3", "text": "O Que é o Cateto Adjacente?" },
          { "kind": "p", "text": "O cateto adjacente toca o ângulo de referência, mas não é a hipotenusa. Na nossa convenção, o lado [[b]] é adjacente ao ângulo [[A]]. Ele costuma representar o alcance horizontal, uma distância no solo ou uma projeção horizontal. Dos três lados, o cateto adjacente é o mais frequentemente confundido com o cateto oposto, e essa única troca é a fonte mais comum de valores de razão errados." },
          { "kind": "h3", "text": "O Que é a Hipotenusa?" },
          { "kind": "p", "text": "A hipotenusa é oposta ao ângulo reto e é sempre o lado mais longo do triângulo. Na nossa convenção, é o lado inclinado [[c]]. Em situações reais, pode representar uma escada, um cabo, um suporte inclinado de telhado ou uma distância de visada em linha reta. Ela aparece nas fórmulas do seno, do cosseno, da secante e da cossecante, mas não diretamente nas fórmulas da tangente e da cotangente, que comparam os dois catetos." },
          { "kind": "h3", "text": "Por Que o Ângulo de Referência Importa" },
          { "kind": "p", "text": "Oposto e adjacente são rótulos relativos, não nomes permanentes. Para o ângulo [[A]], o cateto oposto é [[a]] e o cateto adjacente é [[b]]. Para o ângulo [[C]], os rótulos se invertem: o cateto oposto é [[b]] e o cateto adjacente é [[a]]. A hipotenusa permanece [[c]] independentemente de qual ângulo agudo é a referência. Sempre decida contra qual ângulo você está medindo antes de rotular qualquer lado." }
        ],
        "imgAlt": "Triângulo retângulo com ângulo A destacado, cateto oposto a dourado, cateto adjacente b azul, hipotenusa c cinza, ângulo reto em B",
        "figcaption": "Anatomia de um triângulo retângulo: A é o ângulo de referência, B é o ângulo de 90 graus, e oposto e adjacente são definidos em relação a A."
      },
      "sec-ratios": {
        "h2": "Entendendo as Razões Trigonométricas",
        "blocks": [
          { "kind": "p", "text": "Uma razão trigonométrica compara dois comprimentos de lados de um triângulo retângulo em relação a um ângulo agudo selecionado. Ela descreve a forma do triângulo, não seu tamanho: dobre todos os lados e as seis razões permanecem exatamente iguais, porque numerador e denominador são multiplicados pelo mesmo fator. Um triângulo 3-4-5 e um triângulo 6-8-10 ampliado têm valores idênticos de seno, cosseno, tangente e recíprocas. Essa independência de tamanho é o que torna as razões úteis: elas capturam ângulos como números puros." },
          { "kind": "h3", "text": "Entendendo SOH-CAH-TOA" },
          { "kind": "p", "text": "SOH-CAH-TOA é o auxílio de memória padrão para as três razões primárias. SOH: Seno = Oposto / Hipotenusa. CAH: Cosseno = Adjacente / Hipotenusa. TOA: Tangente = Oposto / Adjacente. Leia cada uma como uma frase: o seno de um ângulo é o comprimento do lado oposto a esse ângulo dividido pela hipotenusa. O auxílio cobre seno, cosseno e tangente; as razões recíprocas vêm de uma segunda regra: inverta a fração. A cossecante inverte o seno, a secante inverte o cosseno e a cotangente inverte a tangente." },
          { "kind": "h3", "text": "Por Que as Razões Trigonométricas São Adimensionais" },
          { "kind": "p", "text": "Uma razão divide um comprimento por outro comprimento, então as unidades se cancelam: [[3\\text{ m}/5\\text{ m}=0.6]]. Em centímetros, o mesmo triângulo dá [[300\\text{ cm}/500\\text{ cm}=0.6]], o número idêntico. Mudar unidades de medida compatíveis nunca altera uma razão trigonométrica. A consequência prática é que suas entradas devem compartilhar uma unidade antes de você dividir, mas o resultado em si não carrega unidade, e é por isso que a calculadora trata todas as entradas como comprimentos simples." },
          { "kind": "h3", "text": "Por Que um Triângulo Produz Seis Razões" },
          { "kind": "p", "text": "Cada razão compara um par diferente de lados. O seno compara o oposto com a hipotenusa, o cosseno compara o adjacente com a hipotenusa e a tangente compara o oposto com o adjacente. Cossecante, secante e cotangente invertem o numerador e o denominador correspondentes. Seis razões, três pares de lados, duas direções por par. Elas não se contradizem; respondem a perguntas geométricas diferentes sobre o mesmo triângulo, e é por isso que uma calculadora oferece os seis modos." }
        ]
      },
      "sec-six": {
        "h2": "As Seis Razões Trigonométricas de um Triângulo Retângulo",
        "blocks": [
          { "kind": "p", "text": "Esta seção explica cada razão no mesmo formato: o que significa, sua fórmula, quais lados ela usa, por que a fração está ordenada dessa maneira, um exemplo resolvido no triângulo 3-4-5, o que o número significa, quando a razão é útil, como ela se relaciona com outra razão e um erro a evitar." },
          { "kind": "h3", "text": "1. Seno: Cateto Oposto Dividido pela Hipotenusa" },
          { "kind": "p", "text": "O seno compara o cateto oposto com a hipotenusa: [[[\\boxed{\\sin(A)=\\frac{a}{c}}]]] A hipotenusa é o denominador porque é o lado mais longo, e é isso que mantém o seno entre 0 e 1 para ângulos agudos. Com [[a=3]] e [[c=5]]: [[\\sin(A)=3/5]], então [[[\\boxed{\\sin(A)=0.6}]]] O resultado significa que o cateto oposto é 60 por cento da hipotenusa. O seno é útil sempre que o cateto oposto e a hipotenusa são o par conhecido, como ao encontrar o ângulo de uma escada a partir de sua altura e comprimento. Ele se relaciona com o cosseno como parceiro complementar: o seno de um ângulo agudo é igual ao cosseno do outro. O erro a evitar: 0.6 é uma razão, não um ângulo de 0.6 graus." },
          { "kind": "h3", "text": "2. Cosseno: Cateto Adjacente Dividido pela Hipotenusa" },
          { "kind": "p", "text": "O cosseno compara o cateto adjacente com a hipotenusa: [[[\\boxed{\\cos(A)=\\frac{b}{c}}]]] Tanto o seno quanto o cosseno dividem pela hipotenusa, então ambos ficam entre 0 e 1; eles diferem apenas no numerador, e é por isso que seno e cosseno descrevem aspectos diferentes do mesmo ângulo. Com [[b=4]] e [[c=5]]: [[\\cos(A)=4/5]], então [[[\\boxed{\\cos(A)=0.8}]]] O cateto adjacente é 80 por cento da hipotenusa. O cosseno é útil quando o cateto adjacente e a hipotenusa são conhecidos, como o alcance horizontal de um telhado e o comprimento da viga. Ele se relaciona com o seno pela identidade [[\\sin^2(A)+\\cos^2(A)=1]]. O erro a evitar: trocar os numeradores, usando 3/5 para o cosseno em vez de 4/5." },
          { "kind": "h3", "text": "3. Tangente: Cateto Oposto Dividido pelo Cateto Adjacente" },
          { "kind": "p", "text": "A tangente compara o cateto oposto com o cateto adjacente: [[[\\boxed{\\tan(A)=\\frac{a}{b}}]]] Ela ignora completamente a hipotenusa, o que a torna a razão natural para problemas de inclinação em que os dois catetos são as quantidades medidas. Com [[a=3]] e [[b=4]]: [[\\tan(A)=3/4]], então [[[\\boxed{\\tan(A)=0.75}]]] O cateto oposto tem 75 por cento do comprimento do cateto adjacente. A tangente é a forma matemática de elevação sobre alcance, por isso aparece em inclinação de telhados, rampas e declives. Ao contrário do seno e do cosseno, a tangente pode exceder 1 sempre que o cateto oposto for maior que o cateto adjacente. O erro a evitar: confundir uma tangente de 0.75 com 75 por cento de um ângulo reto." },
          { "kind": "h3", "text": "4. Cotangente: Cateto Adjacente Dividido pelo Cateto Oposto" },
          { "kind": "p", "text": "A cotangente é a recíproca da tangente: [[[\\boxed{\\cot(A)=\\frac{b}{a}}]]] Ela inverte a comparação de lados que a tangente faz, então onde a tangente pergunta o quão íngreme é uma inclinação, a cotangente pergunta o quão suave ela é. Com [[b=4]] e [[a=3]]: [[\\cot(A)=4/3]], então [[[\\boxed{\\cot(A)\\approx1.3333}]]] Equivalentemente, [[\\cot(A)=1/\\tan(A)=1/0.75\\approx1.3333]]. A cotangente é útil quando um problema naturalmente dá adjacente sobre oposto, ou quando uma fórmula é escrita na forma recíproca. O erro a evitar: escrever a cotangente como a/b, que é a tangente." },
          { "kind": "h3", "text": "5. Secante: Hipotenusa Dividida pelo Cateto Adjacente" },
          { "kind": "p", "text": "A secante é a recíproca do cosseno: [[[\\boxed{\\sec(A)=\\frac{c}{b}}]]] Inverter a fração do cosseno coloca a hipotenusa, o lado mais longo, em cima, e é por isso que a secante é sempre maior que 1 para um ângulo agudo em um triângulo retângulo válido. Com [[c=5]] e [[b=4]]: [[\\sec(A)=5/4]], então [[[\\boxed{\\sec(A)=1.25}]]] Equivalentemente, [[\\sec(A)=1/\\cos(A)=1/0.8=1.25]]. A secante é útil em fórmulas de física e engenharia enunciadas com a hipotenusa no numerador. O erro a evitar: confundir secante com cosseno, ou com a função cosseno inversa." },
          { "kind": "h3", "text": "6. Cossecante: Hipotenusa Dividida pelo Cateto Oposto" },
          { "kind": "p", "text": "A cossecante é a recíproca do seno: [[[\\boxed{\\csc(A)=\\frac{c}{a}}]]] Como a secante, ela coloca a hipotenusa em cima, então é sempre maior que 1 para ângulos agudos. Com [[c=5]] e [[a=3]]: [[\\csc(A)=5/3]], então [[[\\boxed{\\csc(A)\\approx1.6667}]]] Equivalentemente, [[\\csc(A)=1/\\sin(A)=1/0.6\\approx1.6667]]. A cossecante aparece na matemática de ondas e oscilações, onde a recíproca do seno é a forma conveniente. O erro a evitar: confundir cossecante com seno inverso; [[1/\\sin(A)]] é cossecante, enquanto [[\\sin^{-1}(r)]] recupera um ângulo." },
          { "kind": "h3", "text": "Todas as Seis Razões em uma Tabela" },
          { "kind": "p", "text": "Todos os seis cálculos referem-se ao mesmo ângulo de referência [[A]]." }
        ],
        "table": {
          "headers": ["Razão", "Fórmula", "Relação entre lados", "Exemplo 3-4-5"],
          "rows": [
            ["Seno", "[[a/c]]", "Oposto / Hipotenusa", "[[3/5=0.6]]"],
            ["Cosseno", "[[b/c]]", "Adjacente / Hipotenusa", "[[4/5=0.8]]"],
            ["Tangente", "[[a/b]]", "Oposto / Adjacente", "[[3/4=0.75]]"],
            ["Cotangente", "[[b/a]]", "Adjacente / Oposto", "[[4/3\\approx1.3333]]"],
            ["Secante", "[[c/b]]", "Hipotenusa / Adjacente", "[[5/4=1.25]]"],
            ["Cossecante", "[[c/a]]", "Hipotenusa / Oposto", "[[5/3\\approx1.6667]]"]
          ]
        },
        "imgAlt": "Triângulo 3-4-5 com seis painéis mostrando sen 0.6, cos 0.8, tan 0.75, cot 1.3333, sec 1.25, csc 1.6667",
        "figcaption": "Um triângulo 3-4-5 produz as seis razões: três razões primárias e suas três recíprocas."
      }
      ,
      "sec-choose": {
        "h2": "Como Escolher a Razão Trigonométrica Correta",
        "blocks": [
          { "kind": "p", "text": "A melhor razão depende dos dois comprimentos de lados disponíveis em um problema. Cada par de lados permite dois cálculos recíprocos, e os seis modos da calculadora correspondem exatamente a esses pares:" },
          { "kind": "h3", "text": "Como Usar o Modo Seno" },
          { "kind": "p", "text": "Selecione o modo seno quando o cateto oposto e a hipotenusa forem conhecidos. Digite o cateto oposto no campo \"Opposite a\" e a hipotenusa no campo \"Hypotenuse c\", depois clique em \"Calcular sin(A)\". Nenhum modo exige os três comprimentos de lados; cada modo pede exatamente o par que sua razão usa." },
          { "kind": "h3", "text": "Como Usar o Modo Cosseno" },
          { "kind": "p", "text": "Selecione o modo cosseno quando o cateto adjacente e a hipotenusa forem conhecidos. Digite o cateto adjacente no campo \"Adjacent b\" e a hipotenusa no campo \"Hypotenuse c\", depois clique em \"Calcular cos(A)\"." },
          { "kind": "h3", "text": "Como Usar o Modo Tangente" },
          { "kind": "p", "text": "Selecione o modo tangente quando os dois catetos forem conhecidos. Digite o cateto oposto no campo \"Opposite a\" e o cateto adjacente no campo \"Adjacent b\", depois clique em \"Calcular tan(A)\"." },
          { "kind": "h3", "text": "Como Usar o Modo Cotangente" },
          { "kind": "p", "text": "Selecione o modo cotangente quando os catetos forem conhecidos e o problema estiver enunciado como adjacente sobre oposto. Digite o cateto adjacente primeiro no campo \"Adjacent b\" e o cateto oposto no campo \"Opposite a\", depois clique em \"Calcular cot(A)\"." },
          { "kind": "h3", "text": "Como Usar o Modo Secante" },
          { "kind": "p", "text": "Selecione o modo secante quando a hipotenusa e o cateto adjacente forem conhecidos. Digite a hipotenusa no campo \"Hypotenuse c\" e o cateto adjacente no campo \"Adjacent b\", depois clique em \"Calcular sec(A)\"." },
          { "kind": "h3", "text": "Como Usar o Modo Cossecante" },
          { "kind": "p", "text": "Selecione o modo cossecante quando a hipotenusa e o cateto oposto forem conhecidos. Digite a hipotenusa no campo \"Hypotenuse c\" e o cateto oposto no campo \"Opposite a\", depois clique em \"Calcular csc(A)\"." }
        ],
        "closingParagraphs": [
          "Se o cateto oposto e a hipotenusa são conhecidos, você pode calcular [[\\sin(A)=a/c]] e também [[\\csc(A)=c/a]]. Se o cateto adjacente e a hipotenusa são conhecidos, você pode calcular [[\\cos(A)=b/c]] e [[\\sec(A)=c/b]]. Se os dois catetos são conhecidos, você pode calcular [[\\tan(A)=a/b]] e [[\\cot(A)=b/a]]."
        ],
        "table": {
          "headers": ["Lados conhecidos", "Razão direta", "Razão recíproca"],
          "rows": [
            ["Cateto oposto e hipotenusa", "Seno", "Cossecante"],
            ["Cateto adjacente e hipotenusa", "Cosseno", "Secante"],
            ["Cateto oposto e adjacente", "Tangente", "Cotangente"]
          ]
        }
      },
      "sec-howto": {
        "h2": "Como Usar a Calculadora de Razões Trigonométricas do Triângulo Retângulo",
        "blocks": [
          { "kind": "p", "text": "Siga estas etapas para qualquer um dos seis modos:" },
          { "kind": "p", "text": "A identificação correta dos lados importa mais do que memorizar fórmulas. A maioria das respostas erradas nesta página vem de um cateto oposto e adjacente trocados, não da aritmética." }
        ],
        "steps": [
          "<strong>Identifique o ângulo de referência.</strong> Decida sobre qual ângulo agudo o problema trata. Todos os rótulos dos lados decorrem dessa escolha.",
          "<strong>Rotule oposto, adjacente e hipotenusa.</strong> O lado em frente ao ângulo de referência é o oposto, o cateto que o toca é o adjacente e o lado em frente ao ângulo reto é a hipotenusa.",
          "<strong>Determine quais dois comprimentos de lados são conhecidos.</strong> Cada modo precisa de exatamente um par.",
          "<strong>Escolha o modo correspondente a esses dois lados.</strong> Use a tabela da seção anterior para escolher seno, cosseno, tangente, cotangente, secante ou cossecante.",
          "<strong>Digite o primeiro comprimento de lado necessário.</strong> Os campos são rotulados, por exemplo \"Opposite a\" e \"Hypotenuse c\".",
          "<strong>Digite o segundo comprimento de lado necessário.</strong> Mantenha a ordem que os rótulos mostram: alguns modos listam a hipotenusa primeiro.",
          "<strong>Selecione unidades compatíveis.</strong> Use os seletores de unidade ao lado de cada entrada para que ambas as medidas compartilhem um sistema de unidades.",
          "<strong>Verifique se as entradas são positivas e válidas.</strong> Ambos os catetos devem ser positivos e a hipotenusa deve ser maior que qualquer um dos catetos.",
          "<strong>Clique no botão Calcular.</strong> Por exemplo, \"Calcular sin(A)\" no modo seno.",
          "<strong>Revise o resultado e as etapas da solução.</strong> A calculadora mostra a fórmula, a substituição e o valor final.",
          "<strong>Confira a visualização ao vivo.</strong> Confirme se os rótulos do diagrama do triângulo correspondem ao ângulo de referência pretendido.",
          "<strong>Use Redefinir para um novo cálculo.</strong> O botão Redefinir limpa todos os campos para que o próximo cálculo comece do zero."
        ],
        "closingParagraphs": [
          "Dado o cateto oposto 3, o cateto adjacente 4 e a hipotenusa 5, todos na mesma unidade, aqui está o que cada modo precisa e retorna:",
          "1. Modo seno: Digite \"Opposite a\" = 3 e \"Hypotenuse c\" = 5, clique em \"Calcular sin(A)\". Resultado: 0.6.",
          "2. Modo cosseno: Digite \"Adjacent b\" = 4 e \"Hypotenuse c\" = 5, clique em \"Calcular cos(A)\". Resultado: 0.8.",
          "3. Modo tangente: Digite \"Opposite a\" = 3 e \"Adjacent b\" = 4, clique em \"Calcular tan(A)\". Resultado: 0.75.",
          "4. Modo cotangente: Digite \"Adjacent b\" = 4 e \"Opposite a\" = 3, clique em \"Calcular cot(A)\". Resultado: aproximadamente 1.3333.",
          "5. Modo secante: Digite \"Hypotenuse c\" = 5 e \"Adjacent b\" = 4, clique em \"Calcular sec(A)\". Resultado: 1.25.",
          "6. Modo cossecante: Digite \"Hypotenuse c\" = 5 e \"Opposite a\" = 3, clique em \"Calcular csc(A)\". Resultado: aproximadamente 1.6667.",
          "As razões são adimensionais, então as medidas de entrada só precisam de unidades compatíveis, não de uma unidade específica. A calculadora não recupera lados ou ângulos faltantes a partir desses modos; ela calcula a razão solicitada a partir dos dois lados que você fornece."
        ]
      },
      "sec-foundations": {
        "h2": "Exemplos Passo a Passo de Razões Trigonométricas",
        "blocks": [
          { "kind": "p", "text": "Estes quatro exemplos constroem a compreensão gradualmente, de um triângulo básico de números inteiros às razões exatas de triângulos especiais." },
          { "kind": "h3", "text": "Exemplo 1: Um Triângulo Retângulo 3-4-5" },
          { "kind": "p", "text": "Dado [[a=3\\text{ cm}]], [[b=4\\text{ cm}]], [[c=5\\text{ cm}]], calcule as seis razões. Seno: [[3/5=0.6]]. Cosseno: [[4/5=0.8]]. Tangente: [[3/4=0.75]]. Cotangente: [[4/3\\approx1.3333]]. Secante: [[5/4=1.25]]. Cossecante: [[5/3\\approx1.6667]]. As razões diferem porque cada uma compara um par de lados diferente; todas descrevem o mesmo ângulo [[A]]." },
          { "kind": "h3", "text": "Exemplo 2: Um Triângulo Retângulo 5-12-13" },
          { "kind": "p", "text": "Dado [[a=5\\text{ m}]], [[b=12\\text{ m}]], [[c=13\\text{ m}]]. Seno: [[5/13\\approx0.3846]]. Cosseno: [[12/13\\approx0.9231]]. Tangente: [[5/12\\approx0.4167]]. As recíprocas: cossecante [[13/5=2.6]], secante [[13/12\\approx1.0833]], cotangente [[12/5=2.4]]. Em comparação com o triângulo 3-4-5, o cateto adjacente mais longo torna o cosseno maior e a tangente menor, que é como um ângulo mais raso se parece na forma de razão." },
          { "kind": "h3", "text": "Exemplo 3: Um Triângulo 45-45-90" },
          { "kind": "p", "text": "Dado [[a=1]], [[b=1]], [[c=\\sqrt{2}]]. Seno e cosseno são iguais: [[\\sin(45^\\circ)=\\cos(45^\\circ)=\\sqrt{2}/2\\approx0.7071]]. Tangente e cotangente valem 1: [[\\tan(45^\\circ)=\\cot(45^\\circ)=1]]. Secante e cossecante são iguais: [[\\sec(45^\\circ)=\\csc(45^\\circ)=\\sqrt{2}\\approx1.4142]]. Catetos iguais tornam o seno igual ao cosseno e a tangente igual a 1; a simetria entre os dois ângulos agudos explica as três igualdades." },
          { "kind": "h3", "text": "Exemplo 4: Um Triângulo 30-60-90" },
          { "kind": "p", "text": "Para o ângulo [[A=30^\\circ]], use [[a=1]], [[b=\\sqrt{3}]], [[c=2]]. Seno: [[1/2=0.5]]. Cosseno: [[\\sqrt{3}/2\\approx0.8660]]. Tangente: [[1/\\sqrt{3}\\approx0.5774]]. Cotangente: [[\\sqrt{3}\\approx1.7321]]. Secante: [[2/\\sqrt{3}\\approx1.1547]]. Cossecante: [[2]]. As razões para 30 e 60 graus estão ligadas: [[\\sin(30^\\circ)=\\cos(60^\\circ)]], [[\\cos(30^\\circ)=\\sin(60^\\circ)]] e [[\\tan(30^\\circ)=\\cot(60^\\circ)]], porque os ângulos complementares trocam oposto e adjacente." }
        ]
      },
      "sec-applications": {
        "h2": "Aplicações Reais das Razões Trigonométricas",
        "blocks": [
          { "kind": "p", "text": "Cada exemplo usa a razão que se ajusta à situação, não as seis. Cada exemplo identifica o modelo do triângulo, os lados conhecidos, o ângulo de referência e o significado do resultado, com as suposições declaradas onde importam." },
          { "kind": "h3", "text": "Exemplo 5: Calculando a Inclinação de um Telhado" },
          { "kind": "p", "text": "Um telhado sobe 3 m em um alcance horizontal de 4 m. O triângulo simplificado usa a elevação como cateto oposto (a = 3 m) e o alcance como cateto adjacente (b = 4 m), com a superfície do telhado como hipotenusa. A tangente se ajusta porque ambos os catetos são conhecidos: [[\\tan(A)=3/4=0.75]]. A inclinação percentual é [[0.75\\times100\\%=75\\%]], e o ângulo é [[A=\\tan^{-1}(0.75)\\approx36.87^\\circ]]. A razão de inclinação, a inclinação percentual e o ângulo são três maneiras de dizer a mesma coisa: o telhado sobe 0.75 m para cada 1 m de alcance. Este é um exemplo de geometria, não uma avaliação completa de projeto de telhado." },
          { "kind": "h3", "text": "Exemplo 6: Entendendo uma Escada Encostada na Parede" },
          { "kind": "p", "text": "Uma escada alcança 4 m de altura em uma parede com sua base a 3 m da parede. A altura da parede é o cateto oposto (a = 4 m), a distância no solo é o cateto adjacente (b = 3 m) e a escada é a hipotenusa: [[c=\\sqrt{4^2+3^2}=5\\text{ m}]]. Para o ângulo entre a escada e o solo: [[\\sin(A)=4/5=0.8]], [[\\cos(A)=3/5=0.6]], [[\\tan(A)=4/3\\approx1.3333]]. O ângulo é [[A\\approx53.13^\\circ]]. Um triângulo, um ângulo, três razões diferentes, cada uma enfatizando um par de lados diferente. O cálculo não estabelece a segurança da escada." },
          { "kind": "h3", "text": "Exemplo 7: Avaliando o Declive de uma Rampa" },
          { "kind": "p", "text": "Uma rampa sobe 0.6 m em um alcance horizontal de 8 m. A tangente se ajusta aos dois catetos: [[\\tan(A)=0.6/8=0.075]]. A inclinação percentual é [[0.075\\times100\\%=7.5\\%]], e o ângulo é [[A=\\tan^{-1}(0.075)\\approx4.29^\\circ]]. Um declive de 7.5% não é um ângulo de 7.5 graus: porcentagem é a razão vezes 100, enquanto graus medem o próprio ângulo, e eles divergem rapidamente após valores pequenos. A conformidade com acessibilidade e códigos de construção precisa de verificações adicionais além dessa geometria." },
          { "kind": "h3", "text": "Exemplo 8: Medindo a Elevação de um Edifício" },
          { "kind": "p", "text": "Um observador está a 24 m na horizontal de um edifício, e o topo está 18 m acima do nível dos olhos. O cateto adjacente é 24 m e o cateto oposto é 18 m, então [[\\tan(A)=18/24=0.75]] e [[A\\approx36.87^\\circ]], o ângulo de elevação. A distância de visada em linha reta é [[c=\\sqrt{18^2+24^2}=30\\text{ m}]], dando [[\\sin(A)=18/30=0.6]] e [[\\cos(A)=24/30=0.8]] para a mesma geometria. O resultado é relativo ao nível dos olhos, não necessariamente à altura total do edifício." },
          { "kind": "h3", "text": "Exemplo 9: Levantamento Topográfico de uma Diferença de Elevação" },
          { "kind": "p", "text": "Um topógrafo modela uma diferença vertical de elevação de 15 m em uma distância horizontal de 20 m. Tangente: [[\\tan(A)=15/20=0.75]]. A distância em linha reta é [[c=\\sqrt{15^2+20^2}=25\\text{ m}]], então [[\\sin(A)=15/25=0.6]] e [[\\cos(A)=20/25=0.8]] descrevem o mesmo triângulo levantado por meio de pares de lados diferentes. O levantamento real pode precisar de ajustes de altura do instrumento e correções além deste modelo plano." },
          { "kind": "h3", "text": "Exemplo 10: Estimando a Altura de uma Árvore pela Sombra" },
          { "kind": "p", "text": "Uma árvore vertical projeta uma sombra de 9 m, e a altura acima do solo é 12 m. Com oposto 12 m e adjacente 9 m: [[\\tan(A)=12/9\\approx1.3333]]. A hipotenusa da linha de visada do triângulo simplificado é [[c=\\sqrt{12^2+9^2}=15\\text{ m}]], dando [[\\sin(A)=12/15=0.8]] e [[\\cos(A)=9/15=0.6]]. Isso pressupõe solo nivelado, árvore vertical e sombra medida até o ponto diretamente abaixo da copa." },
          { "kind": "h3", "text": "Exemplo 11: Entendendo um Cabo de Estaiamento" },
          { "kind": "p", "text": "Um cabo de estaiamento conecta-se a um poste 12 m acima do solo, com a âncora a 5 m na horizontal do poste. O comprimento do cabo é [[c=\\sqrt{12^2+5^2}=13\\text{ m}]]. Seno: [[12/13\\approx0.9231]]. Cosseno: [[5/13\\approx0.3846]]. Tangente: [[12/5=2.4]]. A tangente excede 1 aqui porque o componente vertical é mais longo que o alcance horizontal; isso é normal, não um erro. Essas razões não dizem nada sobre a resistência da âncora ou a tensão do cabo." },
          { "kind": "h3", "text": "Exemplo 12: Entendendo a Geometria de uma Escadaria" },
          { "kind": "p", "text": "Uma escadaria simplificada tem uma elevação total de 2.4 m e um alcance horizontal de 3.2 m, com comprimento diagonal [[c=\\sqrt{2.4^2+3.2^2}=4\\text{ m}]]. Seno: [[2.4/4=0.6]]. Cosseno: [[3.2/4=0.8]]. Tangente: [[2.4/3.2=0.75]]. As razões descrevem a geometria geral da escadaria, mas não estabelecem conformidade com regulamentos de escadas, que também restringem as dimensões individuais dos degraus." },
          { "kind": "h3", "text": "Exemplo 13: Entendendo a Direção da Lança de um Guindaste" },
          { "kind": "p", "text": "Uma lança de guindaste simplificada tem um componente vertical de 8 m e uma projeção horizontal de 6 m, com [[c=\\sqrt{8^2+6^2}=10\\text{ m}]]. O seno [[8/10=0.8]] descreve a parcela vertical da lança, o cosseno [[6/10=0.6]] sua parcela horizontal, e a tangente [[8/6\\approx1.3333]] sua inclinação. As razões trigonométricas sozinhas não determinam a capacidade do guindaste nem a operação segura." },
          { "kind": "h3", "text": "Exemplo 14: Estimando o Declive de uma Trilha" },
          { "kind": "p", "text": "Um trecho reto de trilha ganha 120 m de elevação em 800 m na horizontal. Tangente: [[\\tan(A)=120/800=0.15]]. O declive é [[15\\%]] e o ângulo é [[A=\\tan^{-1}(0.15)\\approx8.53^\\circ]]. Este modelo de declive constante não descreve uma trilha sinuosa, mas dá uma inclinação média útil para planejar o esforço." },
          { "kind": "h3", "text": "Exemplo 15: Verificando um Tirante Mecânico" },
          { "kind": "p", "text": "Um tirante diagonal tem um componente vertical de 1.5 m e um componente horizontal de 2 m, com [[c=\\sqrt{1.5^2+2^2}=2.5\\text{ m}]]. Seno: [[1.5/2.5=0.6]]. Cosseno: [[2/2.5=0.8]]. Tangente: [[1.5/2=0.75]]. Estas são as razões 3-4-5 em meia escala, mostrando que o escalonamento proporcional deixa cada razão inalterada. Isso não diz nada sobre a resistência do tirante ou sua capacidade de carga." },
          { "kind": "h3", "text": "Exemplo 16: Entendendo a Subida Reta de uma Aeronave" },
          { "kind": "p", "text": "Um segmento de voo reto simplificado ganha 1.5 km verticalmente em 5 km na horizontal. Tangente: [[\\tan(A)=1.5/5=0.3]], então [[A=\\tan^{-1}(0.3)\\approx16.70^\\circ]]. A distância em linha reta é [[c=\\sqrt{1.5^2+5^2}\\approx5.22\\text{ km}]], dando [[\\sin(A)\\approx1.5/5.22\\approx0.287]]. A tangente usa a distância no solo, o seno usa a distância da trajetória de voo; mesma subida, diferentes comprimentos de referência. Este é um exemplo de geometria, não um cálculo de navegação de voo." },
          { "kind": "h3", "text": "Comparação Prática de Exemplos" }
        ],
        "table": {
          "headers": ["Situação", "Medidas conhecidas", "Razão principal", "Valor", "Interpretação"],
          "rows": [
            ["Inclinação de telhado", "Elevação 3 m, alcance 4 m", "Tangente", "0.75", "Declive de 75%, 36.87°"],
            ["Escada", "Altura 4 m, base 3 m", "Seno", "0.8", "Ângulo com o solo 53.13°"],
            ["Rampa", "Elevação 0.6 m, alcance 8 m", "Tangente", "0.075", "Declive de 7.5%, 4.29°"],
            ["Elevação de edifício", "Altura 18 m, distância 24 m", "Tangente", "0.75", "Ângulo de elevação 36.87°"],
            ["Levantamento topográfico", "Elevação 15 m, alcance 20 m", "Tangente", "0.75", "Mesma forma da inclinação de telhado"],
            ["Sombra de árvore", "Altura 12 m, sombra 9 m", "Tangente", "1.3333", "Mais íngreme que 45°"],
            ["Cabo de estaiamento", "Altura 12 m, âncora 5 m", "Tangente", "2.4", "Cabo muito mais íngreme que o alcance"],
            ["Escadaria", "Elevação 2.4 m, alcance 3.2 m", "Tangente", "0.75", "Mesmas razões do 3-4-5"],
            ["Lança de guindaste", "Vertical 8 m, horizontal 6 m", "Seno", "0.8", "Alcance majoritariamente vertical"],
            ["Trilha", "Ganho 120 m, alcance 800 m", "Tangente", "0.15", "Declive médio de 15%"],
            ["Tirante mecânico", "Vertical 1.5 m, horizontal 2 m", "Seno", "0.6", "Geometria 3-4-5 em escala"],
            ["Subida de aeronave", "Ganho 1.5 km, distância 5 km", "Tangente", "0.3", "Ângulo de subida 16.70°"]
          ]
        },
        "imgAlt": "Quatro painéis: inclinação de telhado 0.75, escada sen 0.8, levantamento sen 0.6, rampa tan 0.075 com triângulos rotulados",
        "figcaption": "Quatro problemas do mundo real: inclinação de telhado, escada, levantamento topográfico e rampa, cada um com seu triângulo e razão principal."
      }
      ,
      "sec-relate": {
        "h2": "Como as Seis Razões Trigonométricas se Relacionam Entre Si",
        "blocks": [
          { "kind": "p", "text": "As seis razões não são seis fatos independentes. Elas formam três pares recíprocos, duas relações de quociente e três identidades pitagóricas. Conhecer essas conexões transforma seis fórmulas em um sistema, e dá a você métodos de verificação para cada cálculo." },
          { "kind": "h3", "text": "Pares Recíprocos" },
          { "kind": "p", "text": "Cada par recíproco multiplica para 1 porque as frações se cancelam: [[\\sin(A)\\csc(A)=1]], [[\\cos(A)\\sec(A)=1]], [[\\tan(A)\\cot(A)=1]]. No triângulo 3-4-5: [[0.6\\times1.6667\\approx1]], [[0.8\\times1.25=1]], [[0.75\\times1.3333\\approx1]]. Pequenas discrepâncias vêm de decimais arredondados, não da matemática." },
          { "kind": "h3", "text": "Tangente como Seno Dividido por Cosseno" },
          { "kind": "p", "text": "A relação de quociente [[[\\boxed{\\tan(A)=\\frac{\\sin(A)}{\\cos(A)}}]]] decorre do cancelamento da hipotenusa compartilhada: [[(a/c)/(b/c)=a/b]]. Confira com os valores 3-4-5: [[0.6/0.8=0.75]], que corresponde a [[\\tan(A)]]. Esta é uma verificação útil: se sua tangente não for igual ao seno dividido pelo cosseno, um lado está rotulado incorretamente." },
          { "kind": "h3", "text": "Cotangente como Cosseno Dividido por Seno" },
          { "kind": "p", "text": "Da mesma forma, [[[\\boxed{\\cot(A)=\\frac{\\cos(A)}{\\sin(A)}}]]] Com os valores 3-4-5: [[0.8/0.6\\approx1.3333]], correspondendo a [[\\cot(A)]]. A cotangente herda tudo que a tangente sabe, invertido." },
          { "kind": "h3", "text": "A Identidade Trigonométrica Pitagórica" },
          { "kind": "p", "text": "A identidade [[[\\boxed{\\sin^2(A)+\\cos^2(A)=1}]]] decorre diretamente do teorema de Pitágoras: [[(a/c)^2+(b/c)^2=(a^2+b^2)/c^2=c^2/c^2=1]]. Para o triângulo 3-4-5: [[0.6^2+0.8^2=0.36+0.64=1]]. Mais duas identidades estendem o padrão: [[1+\\tan^2(A)=\\sec^2(A)]] e [[1+\\cot^2(A)=\\csc^2(A)]], obtidas dividindo a primeira identidade pelo cosseno ao quadrado e pelo seno ao quadrado. Elas são úteis quando um problema dá uma razão e precisa de outra sem comprimentos de lados." },
          { "kind": "h3", "text": "Como os Ângulos Complementares Afetam as Razões" },
          { "kind": "p", "text": "Como [[A+C=90^\\circ]], mudar o ângulo de referência de [[A]] para [[C]] troca oposto e adjacente: [[\\sin(A)=\\cos(C)]], [[\\cos(A)=\\sin(C)]], [[\\tan(A)=\\cot(C)]], [[\\cot(A)=\\tan(C)]], [[\\sec(A)=\\csc(C)]] e [[\\csc(A)=\\sec(C)]]. No triângulo 3-4-5, [[\\sin(A)=3/5=0.6]] enquanto [[\\cos(C)=3/5=0.6]], porque o lado oposto a [[A]] é adjacente a [[C]]. Cada razão em um ângulo agudo reaparece como sua cofunção no outro." }
        ]
      },
      "sec-angles": {
        "h2": "Entendendo as Razões Trigonométricas em Ângulos Diferentes",
        "blocks": [
          { "kind": "p", "text": "À medida que um ângulo agudo de referência cresce, as razões mudam de maneiras previsíveis. O seno aumenta de quase 0 em direção a 1, enquanto o cosseno diminui de quase 1 em direção a 0. A tangente aumenta de quase 0 sem limite superior, enquanto a cotangente diminui de valores grandes em direção a 0. A secante aumenta de quase 1 sem limite, enquanto a cossecante diminui de valores grandes em direção a 1. Estes são comportamentos limites próximos a 0 e 90 graus, não valores que um ângulo agudo em um triângulo retângulo válido não degenerado realmente atinge nos extremos." }
        ],
        "table": {
          "headers": ["Ângulo", "Seno", "Cosseno", "Tangente"],
          "rows": [
            ["[[30^\\circ]]", "0.5", "Aproximadamente 0.8660", "Aproximadamente 0.5774"],
            ["[[45^\\circ]]", "Aproximadamente 0.7071", "Aproximadamente 0.7071", "1"],
            ["[[60^\\circ]]", "Aproximadamente 0.8660", "0.5", "Aproximadamente 1.7321"]
          ]
        },
        "closingParagraphs": [
          "O padrão é simétrico: o seno a 30 graus é igual ao cosseno a 60 graus, refletindo a relação complementar. Cotangente, secante e cossecante vêm das relações recíprocas: por exemplo, a 30 graus, [[\\cot(30^\\circ)=1/0.5774\\approx1.7321]] e [[\\csc(30^\\circ)=1/0.5=2]]."
        ],
        "imgAlt": "Fluxograma: escolha seno ou cossecante para oposto e hipotenusa, cosseno ou secante para adjacente e hipotenusa, tangente ou cotangente para os dois catetos",
        "figcaption": "Escolha o modo da calculadora pelo par de lados que você conhece: cada par dá uma razão direta e sua recíproca."
      },
      "sec-missing-side": {
        "h2": "Como Calcular um Lado Faltante de um Triângulo Retângulo",
        "blocks": [
          { "kind": "p", "text": "A calculadora de seis razões encontra razões a partir de lados conhecidos. Encontrar um lado desconhecido a partir de um ângulo e um lado conhecidos é uma tarefa relacionada, mas diferente, resolvida reorganizando as fórmulas das razões. Estes são cálculos companheiros, não recursos da própria calculadora de razões." },
          { "kind": "h3", "text": "Encontrando o Cateto Oposto com o Seno" },
          { "kind": "p", "text": "Comece de [[\\sin(A)=a/c]] e reorganize: [[[\\boxed{a=c\\sin(A)}]]] Com hipotenusa 10 m e ângulo [[A=30^\\circ]]: [[a=10\\sin(30^\\circ)=5\\text{ m}]]." },
          { "kind": "h3", "text": "Encontrando o Cateto Adjacente com o Cosseno" },
          { "kind": "p", "text": "Comece de [[\\cos(A)=b/c]] e reorganize: [[[\\boxed{b=c\\cos(A)}]]] Com hipotenusa 10 m e ângulo [[A=60^\\circ]]: [[b=10\\cos(60^\\circ)=5\\text{ m}]]." },
          { "kind": "h3", "text": "Encontrando o Cateto Oposto com a Tangente" },
          { "kind": "p", "text": "Comece de [[\\tan(A)=a/b]] e reorganize: [[[\\boxed{a=b\\tan(A)}]]] Com cateto adjacente 8 m e ângulo [[A=30^\\circ]]: [[a=8\\tan(30^\\circ)\\approx4.62\\text{ m}]]. A tangente é especialmente útil aqui porque conecta os dois catetos diretamente, sem hipotenusa envolvida." }
        ]
      },
      "sec-inverse": {
        "h2": "Como Encontrar um Ângulo a Partir de uma Razão Trigonométrica",
        "blocks": [
          { "kind": "p", "text": "Uma razão trigonométrica não é um ângulo. Quando a razão é conhecida e o ângulo é desconhecido, as funções trigonométricas inversas recuperam o ângulo agudo de referência: [[A=\\sin^{-1}(r)]], [[A=\\cos^{-1}(r)]] e [[A=\\tan^{-1}(r)]]. Elas são chamadas de seno inverso, cosseno inverso e tangente inversa, também conhecidas como arcoseno, arcocosseno e arcotangente." },
          { "kind": "h3", "text": "Exemplo Resolvido Usando Seno" },
          { "kind": "p", "text": "Dado [[\\sin(A)=0.6]], o ângulo é [[A=\\sin^{-1}(0.6)\\approx36.87^\\circ]]." },
          { "kind": "h3", "text": "Exemplo Resolvido Usando Cosseno" },
          { "kind": "p", "text": "Dado [[\\cos(A)=0.8]], o ângulo é [[A=\\cos^{-1}(0.8)\\approx36.87^\\circ]]." },
          { "kind": "h3", "text": "Exemplo Resolvido Usando Tangente" },
          { "kind": "p", "text": "Dado [[\\tan(A)=0.75]], o ângulo é [[A=\\tan^{-1}(0.75)\\approx36.87^\\circ]]." },
          { "kind": "p", "text": "Os três recuperam o mesmo ângulo porque as três razões descrevem o mesmo triângulo 3-4-5. A diferença entre uma função inversa e uma recíproca importa aqui: [[1/\\sin(A)=\\csc(A)]] é uma recíproca, uma razão diferente, enquanto [[\\sin^{-1}(r)]] é uma função inversa, que retorna um ângulo. Ao calcular ângulos à mão, verifique se sua ferramenta está no modo de graus ou radianos; a calculadora desta página trabalha apenas com razões, então a recuperação do ângulo é uma etapa separada." }
        ]
      },
      "sec-mistakes": {
        "h2": "Erros Comuns ao Usar Razões Trigonométricas",
        "blocks": [
          { "kind": "h3", "text": "Confundir o Cateto Oposto com o Cateto Adjacente" },
          { "kind": "p", "text": "Os rótulos dependem do ângulo de referência. Em um triângulo 3-4-5, calcular [[4/5=0.8]] para o seno na verdade dá o cosseno. Correção: marque primeiro o ângulo de referência, depois rotule como oposto o lado em frente a ele." },
          { "kind": "h3", "text": "Identificar os Lados em Relação ao Ângulo de Referência Errado" },
          { "kind": "p", "text": "Rotular para o ângulo C enquanto o problema pergunta sobre o ângulo A troca cada razão. Correção: anote qual ângulo é a referência antes de tocar na calculadora." },
          { "kind": "h3", "text": "Usar Seno em Vez de Cosseno" },
          { "kind": "p", "text": "O seno precisa do cateto oposto; o cosseno precisa do cateto adjacente. Se você conhece o cateto adjacente e a hipotenusa, mas calcula [[a/c]] mesmo assim, trocou os catetos. Correção: associe a razão ao par conhecido usando a tabela da seção de escolha." },
          { "kind": "h3", "text": "Usar Tangente Quando os Lados Conhecidos São Oposto e Hipotenusa" },
          { "kind": "p", "text": "A tangente precisa dos dois catetos. Com oposto e hipotenusa conhecidos, a razão direta correta é o seno. Correção: verifique qual par você realmente tem antes de escolher o modo." },
          { "kind": "h3", "text": "Inverter o Numerador e o Denominador" },
          { "kind": "p", "text": "Calcular [[c/a]] quando você queria o seno dá a cossecante, um valor acima de 1 em vez de abaixo de 1. Correção: o denominador é a hipotenusa para seno e cosseno, o cateto adjacente para a tangente." },
          { "kind": "h3", "text": "Confundir Tangente com Cotangente" },
          { "kind": "p", "text": "A tangente é [[a/b]]; a cotangente é [[b/a]]. Elas são recíprocas, então um erro inverte a resposta. Correção: leia o rótulo do modo antes de digitar os valores." },
          { "kind": "h3", "text": "Confundir Cosseno com Secante" },
          { "kind": "p", "text": "O cosseno é [[b/c]], sempre abaixo de 1; a secante é [[c/b]], sempre acima de 1. Se sua secante sair abaixo de 1, você calculou o cosseno. Correção: as razões recíprocas colocam a hipotenusa em cima." },
          { "kind": "h3", "text": "Confundir Seno com Cossecante" },
          { "kind": "p", "text": "A mesma inversão: o seno é [[a/c]], a cossecante é [[c/a]]. Correção: verifique se seu resultado está na faixa esperada para o modo escolhido." },
          { "kind": "h3", "text": "Supor que Toda Razão Deve Ser Menor que 1" },
          { "kind": "p", "text": "Seno e cosseno ficam abaixo de 1, mas tangente, cotangente, secante e cossecante podem exceder 1. Uma tangente de 2.4 é perfeitamente válida para uma inclinação íngreme. Correção: aprenda a faixa válida de cada razão." },
          { "kind": "h3", "text": "Supor que uma Razão como 0.6 Representa um Ângulo de 0.6 Graus" },
          { "kind": "p", "text": "Uma razão é um número puro, não uma medida em graus. O ângulo por trás de [[\\sin(A)=0.6]] é cerca de 36.87 graus, encontrado com o seno inverso. Correção: as razões respondem \"como os lados se comparam\"; as funções inversas respondem \"qual é o ângulo\"." },
          { "kind": "h3", "text": "Esquecer que as Razões São Adimensionais" },
          { "kind": "p", "text": "Digitar o oposto em polegadas e a hipotenusa em pés corrompe a razão, porque as unidades não se cancelam mais. Correção: converta ambas as entradas para uma unidade primeiro." },
          { "kind": "h3", "text": "Misturar Unidades de Medida Incompatíveis" },
          { "kind": "p", "text": "Mesma causa raiz, vale repetir: uma razão de 3 polegadas para 5 centímetros não é 0.6. Correção: use os seletores de unidade em ambas as entradas antes de calcular." },
          { "kind": "h3", "text": "Digitar Comprimentos de Lados Zero ou Negativos" },
          { "kind": "p", "text": "O lado de um triângulo deve ser positivo. Entradas zero ou negativas não descrevem triângulo algum, e a calculadora não pode produzir uma razão significativa. Correção: meça novamente ou releia o problema." },
          { "kind": "h3", "text": "Usar Comprimentos de Lados que Não Formam um Triângulo Retângulo Válido" },
          { "kind": "p", "text": "Se os lados falham na verificação pitagórica, por exemplo 2, 3 e 10, nenhum triângulo retângulo existe com esses comprimentos. Correção: verifique [[a^2+b^2=c^2]] antes de calcular as razões." },
          { "kind": "h3", "text": "Arredondar Cedo Demais" },
          { "kind": "p", "text": "Arredondar uma razão intermediária para uma casa decimal e depois multiplicar amplia o erro. Correção: mantenha precisão total em cada etapa e arredonde apenas a resposta final." },
          { "kind": "h3", "text": "Confundir Razões Recíprocas com Funções Trigonométricas Inversas" },
          { "kind": "p", "text": "[[\\csc(A)=1/\\sin(A)]] é uma razão; [[\\sin^{-1}(0.6)]] é um ângulo. A notação semelhante causa confusão real. Correção: recíprocas invertem frações, funções inversas recuperam ângulos." },
          { "kind": "h3", "text": "Tratar a Hipotenusa como um dos Catetos" },
          { "kind": "p", "text": "A hipotenusa é sempre o lado mais longo e sempre oposta ao ângulo reto. Atribuí-la como cateto quebra cada razão. Correção: encontre primeiro o lado mais longo e rotule-o como c." },
          { "kind": "h3", "text": "Supor que as Seis Razões Têm o Mesmo Valor" },
          { "kind": "p", "text": "Em um triângulo 3-4-5, os seis valores vão de 0.6 a 1.6667. Apenas triângulos especiais como o 45-45-90 tornam algumas razões iguais. Correção: espere seis números diferentes de um triângulo." },
          { "kind": "h3", "text": "Supor que o Mesmo Lado é Sempre Oposto" },
          { "kind": "p", "text": "O lado oposto ao ângulo A é adjacente ao ângulo C. Toda resposta resolvida deve declarar seu ângulo de referência. Correção: rotule novamente os lados sempre que o ângulo de referência mudar." },
          { "kind": "h3", "text": "Tratar um Resultado Simplificado como Prova de Engenharia" },
          { "kind": "p", "text": "Uma verificação de razão em um tirante ou cabo de estaiamento descreve geometria, não resistência, tensão ou conformidade com códigos. Correção: use as razões para a etapa de geometria, e análise de engenharia qualificada para decisões de segurança." },
          { "kind": "h3", "text": "Errado Versus Correto: Um Exemplo Concreto" },
          { "kind": "p", "text": "Dado [[a=3]], [[b=4]], [[c=5]], um cálculo de seno incorreto usa o par de lados errado: [[3/4=0.75]]. Essa é a razão tangente, não o seno. O cálculo correto é [[\\sin(A)=3/5=0.6]]. Verifique com a relação de quociente: [[\\tan(A)=\\sin(A)/\\cos(A)=0.6/0.8=0.75]]. Identificar os lados corretos é essencial, porque a aritmética é trivial quando os lados estão certos." }
        ]
      },
      "sec-verify": {
        "h2": "Como Verificar se Seus Resultados Trigonométricos São Válidos",
        "blocks": [
          { "kind": "p", "text": "Um triângulo retângulo válido e não degenerado exige catetos positivos, uma hipotenusa maior que qualquer cateto, lados que satisfaçam o teorema de Pitágoras, unidades compatíveis, o par de lados correto para a razão escolhida e pares recíprocos que concordem. Quatro métodos rápidos cobrem tudo isso." },
          { "kind": "h3", "text": "Método de Verificação 1: Confira os Comprimentos dos Lados" },
          { "kind": "p", "text": "Para o triângulo 3-4-5: [[3^2+4^2=5^2]], ou [[9+16=25]]. Passar na verificação pitagórica confirma que os lados descrevem um triângulo retângulo real antes de você confiar em qualquer razão derivada deles." },
          { "kind": "h3", "text": "Método de Verificação 2: Confira os Pares Recíprocos" },
          { "kind": "p", "text": "Cada par direto-recíproco deve multiplicar para 1: [[\\sin(A)\\csc(A)=0.6\\times1.6667\\approx1]], [[\\cos(A)\\sec(A)=0.8\\times1.25=1]], [[\\tan(A)\\cot(A)=0.75\\times1.3333\\approx1]]. Pequenas diferenças vêm de decimais arredondados." },
          { "kind": "h3", "text": "Método de Verificação 3: Confira a Tangente Usando Seno e Cosseno" },
          { "kind": "p", "text": "A relação de quociente dá uma verificação independente: [[\\tan(A)=\\sin(A)/\\cos(A)=0.6/0.8=0.75]]. Se o modo tangente da calculadora e este cálculo discordarem, um lado foi rotulado incorretamente." },
          { "kind": "h3", "text": "Método de Verificação 4: Confira o Ângulo Inverso" },
          { "kind": "p", "text": "Recupere o ângulo e veja se ele é sensato: [[A=\\tan^{-1}(0.75)\\approx36.87^\\circ]]. Um resultado agudo entre 0 e 90 graus que corresponde à forma do triângulo confirma as razões." }
        ]
      },
      "sec-conclusion": {
        "h2": "Domine as Seis Razões com um Triângulo",
        "blocks": [
          { "kind": "p", "text": "Toda razão desta página vem dos mesmos três lados e de um ângulo de referência. Rotule o triângulo, associe o par de lados ao modo e deixe a calculadora fazer a aritmética. Seno, cosseno e tangente respondem às comparações diretas; cossecante, secante e cotangente as invertem. SOH-CAH-TOA lembra as três primeiras, a regra recíproca lembra o resto, e a identidade seno ao quadrado mais cosseno ao quadrado igual a 1 liga seno e cosseno. Verifique com a checagem pitagórica e os produtos recíprocos, depois volte à calculadora no topo desta página para rodar seus números." }
        ]
      }
    },
    "faqs": [
      { "question": "Quais são as seis razões trigonométricas de um triângulo retângulo?", "answer": "As seis razões são seno (oposto sobre hipotenusa), cosseno (adjacente sobre hipotenusa), tangente (oposto sobre adjacente), cotangente (adjacente sobre oposto), secante (hipotenusa sobre adjacente) e cossecante (hipotenusa sobre oposto). As três primeiras são as razões primárias; as três últimas são suas recíprocas." },
      { "question": "Como calcular seno, cosseno e tangente?", "answer": "Identifique o ângulo de referência e divida o par de lados correto. Seno é oposto dividido pela hipotenusa, cosseno é adjacente dividido pela hipotenusa e tangente é oposto dividido pelo adjacente. Para um triângulo 3-4-5, isso dá 3/5 = 0.6, 4/5 = 0.8 e 3/4 = 0.75." },
      { "question": "Qual é a diferença entre razões trigonométricas diretas e recíprocas?", "answer": "As razões diretas (seno, cosseno, tangente) colocam a comparação do lado menor primeiro, enquanto as razões recíprocas (cossecante, secante, cotangente) invertem a fração. Cossecante é 1/seno, secante é 1/cosseno e cotangente é 1/tangente. Cada par multiplica para 1." },
      { "question": "Por que as razões trigonométricas são adimensionais?", "answer": "Uma razão divide um comprimento por outro, então as unidades se cancelam. 3 metros divididos por 5 metros é 0.6, e 300 centímetros divididos por 500 centímetros também é 0.6. O resultado não carrega unidade, e é por isso que ambas as entradas só precisam compartilhar um sistema de unidades." },
      { "question": "Como escolho o modo correto da calculadora?", "answer": "Associe o modo ao seu par de lados conhecidos. Oposto e hipotenusa: modo seno ou cossecante. Adjacente e hipotenusa: modo cosseno ou secante. Os dois catetos: modo tangente ou cotangente. A razão direta e sua recíproca usam as mesmas duas entradas em ordem oposta." },
      { "question": "Uma razão de tangente ou cotangente pode ser maior que 1?", "answer": "Sim. A tangente compara os dois catetos, então excede 1 sempre que o cateto oposto for maior que o cateto adjacente, como em uma inclinação íngreme. A cotangente excede 1 quando o cateto adjacente é maior. Apenas seno e cosseno têm limite em 1, porque seu denominador é o lado mais longo." },
      { "question": "Por que secante e cossecante são maiores que 1 para ângulos agudos?", "answer": "Ambas colocam a hipotenusa, o lado mais longo do triângulo, no numerador. Dividir o lado mais longo por qualquer lado mais curto sempre dá um valor acima de 1. Para um triângulo 3-4-5, a secante é 5/4 = 1.25 e a cossecante é 5/3, cerca de 1.6667." },
      { "question": "Como encontro um ângulo a partir de uma razão trigonométrica?", "answer": "Use uma função trigonométrica inversa: arcoseno para uma razão de seno, arcocosseno para cosseno, arcotangente para tangente. Por exemplo, se o seno é 0.6, o ângulo é arcoseno(0.6), cerca de 36.87 graus. Note que isso é diferente da recíproca: 1/seno é cossecante, não arcoseno." },
      { "question": "Como calculo um lado faltante usando trigonometria?", "answer": "Reorganize a fórmula da razão. Com um ângulo conhecido e a hipotenusa, o cateto oposto é a hipotenusa vezes o seno do ângulo, e o cateto adjacente é a hipotenusa vezes o cosseno. Com o cateto adjacente conhecido, o cateto oposto é o cateto adjacente vezes a tangente do ângulo." },
      { "question": "Qual é a diferença entre seno inverso e cossecante?", "answer": "O seno inverso (arcoseno) recebe uma razão e retorna um ângulo: arcoseno(0.6) é cerca de 36.87 graus. A cossecante recebe a mesma razão e retorna sua recíproca: 1/0.6 é cerca de 1.6667, ainda uma razão. Uma desfaz a função seno; a outra inverte a fração." },
      { "question": "Como posso verificar meus cálculos trigonométricos?", "answer": "Quatro verificações: confirme que os lados satisfazem o teorema de Pitágoras, confirme que cada par recíproco multiplica para 1, confirme que a tangente é igual ao seno dividido pelo cosseno, e recupere o ângulo com uma função inversa para ver se ele é agudo e sensato. A concordância entre as verificações significa que os rótulos dos lados estão corretos." },
      { "question": "Como as razões trigonométricas são usadas na vida real?", "answer": "Elas convertem lados medidos em ângulos e inclinações: inclinação de telhado a partir de elevação e alcance, ângulos de escada a partir de altura e distância da base, declives de rampas, ângulos de elevação de edifícios, linhas de visada em levantamento topográfico, direção da lança de guindaste e declives de trilhas. A razão dá a geometria; verificações separadas de engenharia cuidam da segurança." }
    ],
    "faqHeading": "Perguntas Frequentes",
    "relatedHeading": "Explore Calculadoras Relacionadas de Triângulo Retângulo",
    "relatedItems": [
      "Calculadora da Razão Seno",
      "Calculadora da Razão Cosseno",
      "Calculadora da Razão Tangente",
      "Calculadora de Razão Cotangente",
      "Calculadora da Razão Secante",
      "Calculadora da relação cossecante",
      "Calculadora de Ângulo do Triângulo Retângulo",
      "Calculadora de Lado do Triângulo Retângulo Usando Ângulo",
      "Calculadora de Triângulo Retângulo Especial"
    ]
  }
  ,
  "bn": {
    "tocHeading": "এই নির্দেশিকায়",
    "tocItems": {
      "sec-intro": "সমকোণী ত্রিভুজের ত্রিকোণমিতিক অনুপাত ক্যালকুলেটর কী?",
      "sec-triangle": "সমকোণী ত্রিভুজের বাহুগুলো বোঝা",
      "sec-ratios": "ত্রিকোণমিতিক অনুপাত বোঝা",
      "sec-six": "সমকোণী ত্রিভুজের ছয়টি ত্রিকোণমিতিক অনুপাত",
      "sec-choose": "সঠিক ত্রিকোণমিতিক অনুপাত কীভাবে বেছে নেবেন",
      "sec-howto": "সমকোণী ত্রিভুজের ত্রিকোণমিতিক অনুপাত ক্যালকুলেটর কীভাবে ব্যবহার করবেন",
      "sec-foundations": "ত্রিকোণমিতিক অনুপাতের ধাপে ধাপে উদাহরণ",
      "sec-applications": "ত্রিকোণমিতিক অনুপাতের বাস্তব জীবনের প্রয়োগ",
      "sec-relate": "ছয়টি ত্রিকোণমিতিক অনুপাত পরস্পরের সঙ্গে কীভাবে সম্পর্কিত",
      "sec-angles": "বিভিন্ন কোণে ত্রিকোণমিতিক অনুপাত বোঝা",
      "sec-missing-side": "সমকোণী ত্রিভুজের অনুপস্থিত বাহু কীভাবে গণনা করবেন",
      "sec-inverse": "ত্রিকোণমিতিক অনুপাত থেকে কোণ কীভাবে বের করবেন",
      "sec-mistakes": "ত্রিকোণমিতিক অনুপাত ব্যবহারে সাধারণ ভুল",
      "sec-verify": "আপনার ত্রিকোণমিতিক ফলাফল সঠিক কিনা তা কীভাবে যাচাই করবেন",
      "sec-related": "সম্পর্কিত ক্যালকুলেটর",
      "sec-faq": "সাধারণ প্রশ্ন",
      "sec-conclusion": "উপসংহার"
    },
    "sections": {
      "sec-intro": {
        "h2": "সমকোণী ত্রিভুজের ত্রিকোণমিতিক অনুপাত ক্যালকুলেটর কী?",
        "blocks": [
          { "kind": "p", "text": "সমকোণী ত্রিভুজের ত্রিকোণমিতিক অনুপাত ক্যালকুলেটর সমকোণী ত্রিভুজের বাহুর দৈর্ঘ্য থেকে ছয়টি ত্রিকোণমিতিক অনুপাত, সাইন, কোসাইন, ট্যানজেন্ট, কোট্যানজেন্ট, সেক্যান্ট এবং কোসেক্যান্ট গণনা করে। প্রতিটি অনুপাত একটি নির্বাচিত সূক্ষ্মকোণ রেফারেন্স কোণের সাপেক্ষে নির্দিষ্ট এক জোড়া বাহুর তুলনা করে। এই পৃষ্ঠার ক্যালকুলেটরে ছয়টি মোড রয়েছে, প্রতিটি অনুপাতের জন্য একটি করে, তাই আপনি প্রতিটি অনুপাতের প্রয়োজনীয় দুটি বাহু প্রবেশ করান এবং সঙ্গে সঙ্গে মান পান।" },
          { "kind": "p", "text": "এই অনুপাতগুলো শুধু ত্রিভুজের ওপর নয়, একটি রেফারেন্স কোণের ওপর নির্ভর করে। একই ত্রিভুজের জন্য কোন সূক্ষ্মকোণকে রেফারেন্স হিসেবে নেওয়া হচ্ছে তা বদলে দিলে দুটি বাহুর ভূমিকা বদলে যায়, ফলে অনুপাতের মানও বদলে যায়। এজন্যই ক্যালকুলেটরের মোডগুলো পরিচিত বাহুর জোড়া অনুযায়ী সাজানো: বিপরীত বাহু ও অতিভুজ দিলে সাইন, সংলগ্ন বাহু ও অতিভুজ দিলে কোসাইন, এবং দুটি বাহু দিলে ট্যানজেন্ট। বিপরীত মোডগুলো একই জোড়া থেকে কোসেক্যান্ট, সেক্যান্ট ও কোট্যানজেন্ট দেয়।" },
          { "kind": "p", "text": "বিপরীত বাহু 3, সংলগ্ন বাহু 4 এবং অতিভুজ 5 সহ একটি 3-4-5 ত্রিভুজ বিবেচনা করুন। একটি ত্রিভুজ ছয়টি ভিন্ন মান তৈরি করে: [[\\sin(A)=3/5=0.6]], [[\\cos(A)=4/5=0.8]] এবং [[\\tan(A)=3/4=0.75]], বিপরীত অনুপাত [[\\csc(A)\\approx1.6667]], [[\\sec(A)=1.25]] এবং [[\\cot(A)\\approx1.3333]] সহ। প্রতিটি অনুপাত একই আকৃতি সম্পর্কে ভিন্ন প্রশ্ন করে। সূত্রগুলো বুঝলে যেকোনো ফলাফল হাতে যাচাই করতে পারবেন, যা ভুল লেবেলযুক্ত বাহু ধরার সবচেয়ে নির্ভরযোগ্য উপায়।" }
        ]
      },
      "sec-triangle": {
        "h2": "সমকোণী ত্রিভুজের বাহুগুলো বোঝা",
        "blocks": [
          { "kind": "p", "text": "প্রতিটি ত্রিকোণমিতিক অনুপাত দুটি বাহুর তুলনা, তাই বাহুগুলোর সঠিক নামকরণ পরের সবকিছুর ভিত্তি। এই নির্দেশিকায় পুরোটা জুড়ে একটিই নিয়ম ব্যবহার করা হয়েছে: [[A]] হলো নিচে-বামে সূক্ষ্মকোণ রেফারেন্স কোণ, [[B]] হলো নিচে-ডানে সমকোণ, [[C]] হলো শীর্ষে অন্য সূক্ষ্মকোণ, বাহু [[a]] হলো উল্লম্ব বাহু, বাহু [[b]] হলো অনুভূমিক ভিত্তি এবং বাহু [[c]] হলো ঢালু অতিভুজ।" },
          { "kind": "h3", "text": "সমকোণী ত্রিভুজ কী?" },
          { "kind": "p", "text": "সমকোণী ত্রিভুজের একটি কোণ ঠিক 90 ডিগ্রি, অন্য দুটি কোণ সূক্ষ্মকোণ। দুটি বাহু সমকোণে মিলিত হয় এবং অতিভুজ সমকোণের বিপরীতে থাকে। তিনটি অভ্যন্তরীণ কোণের সমষ্টি 180 ডিগ্রি বলে দুটি সূক্ষ্মকোণ পরিপূরক: [[A+C=90^\\circ]]। সমকোণী ত্রিভুজ ত্রিকোণমিতিক গণনার জন্য উপযুক্ত, কারণ একটি সূক্ষ্মকোণ নির্ধারণ করলেই ত্রিভুজের আকৃতি সম্পূর্ণ নির্ধারিত হয়ে যায়: একই সূক্ষ্মকোণবিশিষ্ট সব সমকোণী ত্রিভুজ সদৃশ, তাই তাদের বাহুর অনুপাত মিলে যায়।" },
          { "kind": "h3", "text": "বিপরীত বাহু কী?" },
          { "kind": "p", "text": "বিপরীত বাহু নির্বাচিত রেফারেন্স কোণের ঠিক বিপরীতে থাকে। আমাদের নিয়মে বাহু [[a]] কোণ [[A]]-এর বিপরীতে। ব্যবহারিক সমস্যায় বিপরীত বাহু প্রায়ই উল্লম্ব উচ্চতা, উচ্চতার পার্থক্য বা ঢালের উল্লম্ব উপাংশ নির্দেশ করে। এর ভূমিকা কোনো নির্দিষ্ট বাহুতে স্থির নয়: রেফারেন্স কোণ বদলালে ভিন্ন বাহু বিপরীত হয়।" },
          { "kind": "h3", "text": "সংলগ্ন বাহু কী?" },
          { "kind": "p", "text": "সংলগ্ন বাহু রেফারেন্স কোণকে স্পর্শ করে, কিন্তু অতিভুজ নয়। আমাদের নিয়মে বাহু [[b]] কোণ [[A]]-এর সংলগ্ন। এটি প্রায়ই অনুভূমিক দূরত্ব, ভূমির দূরত্ব বা অনুভূমিক প্রক্ষেপণ নির্দেশ করে। তিনটি বাহুর মধ্যে সংলগ্ন বাহুকেই সবচেয়ে বেশি বিপরীত বাহুর সঙ্গে গুলিয়ে ফেলা হয়, এবং এই একটিমাত্র অদলবদলই ভুল অনুপাত মানের সবচেয়ে সাধারণ উৎস।" },
          { "kind": "h3", "text": "অতিভুজ কী?" },
          { "kind": "p", "text": "অতিভুজ সমকোণের বিপরীতে থাকে এবং ত্রিভুজের সবচেয়ে দীর্ঘ বাহু। আমাদের নিয়মে এটি ঢালু বাহু [[c]]। বাস্তব পরিস্থিতিতে এটি মই, তার, ঢালু ছাদের ঠেস বা সরলরেখা দৃষ্টিদূরত্ব নির্দেশ করতে পারে। এটি সাইন, কোসাইন, সেক্যান্ট ও কোসেক্যান্ট সূত্রে আসে, কিন্তু ট্যানজেন্ট ও কোট্যানজেন্ট সূত্রে সরাসরি আসে না, যেগুলো দুটি বাহুর তুলনা করে।" },
          { "kind": "h3", "text": "রেফারেন্স কোণ কেন গুরুত্বপূর্ণ" },
          { "kind": "p", "text": "বিপরীত ও সংলগ্ন আপেক্ষিক লেবেল, স্থায়ী নাম নয়। কোণ [[A]]-এর জন্য বিপরীত বাহু [[a]] এবং সংলগ্ন বাহু [[b]]। কোণ [[C]]-এর জন্য লেবেল বদলে যায়: বিপরীত বাহু [[b]] এবং সংলগ্ন বাহু [[a]]। কোন সূক্ষ্মকোণ রেফারেন্স তা যাই হোক, অতিভুজ [[c]]-ই থাকে। কোনো বাহুতে লেবেল লাগানোর আগে ঠিক করুন আপনি কোন কোণের সাপেক্ষে পরিমাপ করছেন।" }
        ],
        "imgAlt": "সমকোণী ত্রিভুজ, নিচে-বামে A কোণ চিহ্নিত, সোনালি বিপরীত বাহু a, নীল সংলগ্ন বাহু b, ধূসর অতিভুজ c, B-তে সমকোণ",
        "figcaption": "সমকোণী ত্রিভুজের গঠন: A হলো রেফারেন্স কোণ, B হলো 90 ডিগ্রি কোণ, এবং বিপরীত ও সংলগ্ন A-এর সাপেক্ষে সংজ্ঞায়িত।"
      },
      "sec-ratios": {
        "h2": "ত্রিকোণমিতিক অনুপাত বোঝা",
        "blocks": [
          { "kind": "p", "text": "ত্রিকোণমিতিক অনুপাত নির্বাচিত একটি সূক্ষ্মকোণের সাপেক্ষে সমকোণী ত্রিভুজের দুটি বাহুর দৈর্ঘ্যের তুলনা করে। এটি ত্রিভুজের আকার বর্ণনা করে, আয়তন নয়: প্রতিটি বাহু দ্বিগুণ করলেও ছয়টি অনুপাত ঠিক একই থাকে, কারণ লব ও হর একই গুণকে গুণ হয়। একটি 3-4-5 ত্রিভুজ ও বর্ধিত 6-8-10 ত্রিভুজের সাইন, কোসাইন, ট্যানজেন্ট ও বিপরীত মান অভিন্ন। এই আকার-নিরপেক্ষতাই অনুপাতগুলোকে কার্যকর করে: এরা কোণকে বিশুদ্ধ সংখ্যা হিসেবে ধারণ করে।" },
          { "kind": "h3", "text": "SOH-CAH-TOA বোঝা" },
          { "kind": "p", "text": "SOH-CAH-TOA হলো তিনটি প্রাথমিক অনুপাতের প্রমিত স্মরণ-সহায়ক। SOH: সাইন = বিপরীত / অতিভুজ। CAH: কোসাইন = সংলগ্ন / অতিভুজ। TOA: ট্যানজেন্ট = বিপরীত / সংলগ্ন। প্রতিটিকে একটি বাক্য হিসেবে পড়ুন: একটি কোণের সাইন হলো সেই কোণের বিপরীত বাহুর দৈর্ঘ্যকে অতিভুজ দিয়ে ভাগ করা। এই সহায়ক সাইন, কোসাইন ও ট্যানজেন্ট কভার করে; বিপরীত অনুপাত আসে দ্বিতীয় নিয়ম থেকে: ভগ্নাংশ উল্টে দিন। কোসেক্যান্ট সাইনকে উল্টায়, সেক্যান্ট কোসাইনকে উল্টায় এবং কোট্যানজেন্ট ট্যানজেন্টকে উল্টায়।" },
          { "kind": "h3", "text": "ত্রিকোণমিতিক অনুপাত কেন মাত্রাহীন" },
          { "kind": "p", "text": "একটি অনুপাত এক দৈর্ঘ্যকে আরেক দৈর্ঘ্য দিয়ে ভাগ করে, তাই একক বাতিল হয়ে যায়: [[3\\text{ m}/5\\text{ m}=0.6]]। সেন্টিমিটারে একই ত্রিভুজ দেয় [[300\\text{ cm}/500\\text{ cm}=0.6]], অভিন্ন সংখ্যা। সামঞ্জস্যপূর্ণ পরিমাপ একক বদলালে ত্রিকোণমিতিক অনুপাত কখনো বদলায় না। ব্যবহারিক ফল হলো ভাগ করার আগে আপনার ইনপুটগুলোর একটি একক অভিন্ন হতে হবে, কিন্তু ফলাফলের নিজের কোনো একক নেই, এজন্যই ক্যালকুলেটর সব ইনপুটকে সাধারণ দৈর্ঘ্য হিসেবে ধরে।" },
          { "kind": "h3", "text": "একটি ত্রিভুজ কেন ছয়টি অনুপাত তৈরি করে" },
          { "kind": "p", "text": "প্রতিটি অনুপাত বাহুর ভিন্ন জোড়ার তুলনা করে। সাইন বিপরীতকে অতিভুজের সঙ্গে, কোসাইন সংলগ্নকে অতিভুজের সঙ্গে এবং ট্যানজেন্ট বিপরীতকে সংলগ্নের সঙ্গে তুলনা করে। কোসেক্যান্ট, সেক্যান্ট ও কোট্যানজেন্ট সংশ্লিষ্ট লব ও হর উল্টে দেয়। ছয়টি অনুপাত, তিনটি বাহুর জোড়া, প্রতি জোড়ায় দুটি দিক। এরা পরস্পরবিরোধী নয়; এরা একই ত্রিভুজ সম্পর্কে ভিন্ন জ্যামিতিক প্রশ্নের উত্তর দেয়, এজন্যই একটি ক্যালকুলেটর ছয়টি মোডই দেয়।" }
        ]
      },
      "sec-six": {
        "h2": "সমকোণী ত্রিভুজের ছয়টি ত্রিকোণমিতিক অনুপাত",
        "blocks": [
          { "kind": "p", "text": "এই অংশে প্রতিটি অনুপাত একই ধরনে ব্যাখ্যা করা হয়েছে: এর অর্থ কী, এর সূত্র, এটি কোন বাহু ব্যবহার করে, ভগ্নাংশ এভাবে সাজানো কেন, 3-4-5 ত্রিভুজে একটি সমাধানসহ উদাহরণ, সংখ্যাটির অর্থ কী, অনুপাতটি কখন কাজে লাগে, এটি অন্য অনুপাতের সঙ্গে কীভাবে সম্পর্কিত এবং এড়ানোর মতো একটি ভুল।" },
          { "kind": "h3", "text": "1. সাইন: বিপরীত বাহুকে অতিভুজ দিয়ে ভাগ" },
          { "kind": "p", "text": "সাইন বিপরীত বাহুকে অতিভুজের সঙ্গে তুলনা করে: [[[\\boxed{\\sin(A)=\\frac{a}{c}}]]]। অতিভুজ হর, কারণ এটি সবচেয়ে দীর্ঘ বাহু, আর এজন্যই সূক্ষ্মকোণের জন্য সাইন 0 ও 1-এর মধ্যে থাকে। [[a=3]] এবং [[c=5]] নিয়ে: [[\\sin(A)=3/5]], তাই [[[\\boxed{\\sin(A)=0.6}]]]। ফলের অর্থ বিপরীত বাহু অতিভুজের 60 শতাংশ। বিপরীত বাহু ও অতিভুজ পরিচিত জোড়া হলেই সাইন কাজে লাগে, যেমন উচ্চতা ও দৈর্ঘ্য থেকে মইয়ের কোণ বের করা। এটি কোসাইনের সঙ্গে পরিপূরক অংশীদার হিসেবে সম্পর্কিত: এক সূক্ষ্মকোণের সাইন অন্য সূক্ষ্মকোণের কোসাইনের সমান। এড়ানোর ভুল: 0.6 একটি অনুপাত, 0.6 ডিগ্রি কোণ নয়।" },
          { "kind": "h3", "text": "2. কোসাইন: সংলগ্ন বাহুকে অতিভুজ দিয়ে ভাগ" },
          { "kind": "p", "text": "কোসাইন সংলগ্ন বাহুকে অতিভুজের সঙ্গে তুলনা করে: [[[\\boxed{\\cos(A)=\\frac{b}{c}}]]]। সাইন ও কোসাইন দুটোই অতিভুজ দিয়ে ভাগ করে, তাই দুটোই 0 ও 1-এর মধ্যে থাকে; এদের পার্থক্য শুধু লবে, এজন্যই সাইন ও কোসাইন একই কোণের ভিন্ন দিক বর্ণনা করে। [[b=4]] এবং [[c=5]] নিয়ে: [[\\cos(A)=4/5]], তাই [[[\\boxed{\\cos(A)=0.8}]]]। সংলগ্ন বাহু অতিভুজের 80 শতাংশ। সংলগ্ন বাহু ও অতিভুজ জানা থাকলে কোসাইন কাজে লাগে, যেমন ছাদের অনুভূমিক দূরত্ব ও রাফটারের দৈর্ঘ্য। এটি সাইনের সঙ্গে [[\\sin^2(A)+\\cos^2(A)=1]] অভেদের মাধ্যমে সম্পর্কিত। এড়ানোর ভুল: লব অদলবদল করা, কোসাইনের জন্য 4/5-এর বদলে 3/5 ব্যবহার করা।" },
          { "kind": "h3", "text": "3. ট্যানজেন্ট: বিপরীত বাহুকে সংলগ্ন বাহু দিয়ে ভাগ" },
          { "kind": "p", "text": "ট্যানজেন্ট বিপরীত বাহুকে সংলগ্ন বাহুর সঙ্গে তুলনা করে: [[[\\boxed{\\tan(A)=\\frac{a}{b}}]]]। এটি অতিভুজকে পুরোপুরি এড়িয়ে যায়, ফলে ঢালের সমস্যায় এটি স্বাভাবিক অনুপাত, যেখানে দুটি বাহুই পরিমাপিত রাশি। [[a=3]] এবং [[b=4]] নিয়ে: [[\\tan(A)=3/4]], তাই [[[\\boxed{\\tan(A)=0.75}]]]। বিপরীত বাহু সংলগ্ন বাহুর 75 শতাংশ দীর্ঘ। ট্যানজেন্ট উত্থান বনাম অনুভূমিক দূরত্বের গাণিতিক রূপ, তাই এটি ছাদের ঢাল, র‍্যাম্প ও গ্রেডে আসে। সাইন ও কোসাইনের বিপরীতে, বিপরীত বাহু সংলগ্ন বাহুর চেয়ে দীর্ঘ হলেই ট্যানজেন্ট 1 ছাড়িয়ে যেতে পারে। এড়ানোর ভুল: 0.75 ট্যানজেন্টকে সমকোণের 75 শতাংশ ভাবা।" },
          { "kind": "h3", "text": "4. কোট্যানজেন্ট: সংলগ্ন বাহুকে বিপরীত বাহু দিয়ে ভাগ" },
          { "kind": "p", "text": "কোট্যানজেন্ট ট্যানজেন্টের বিপরীত: [[[\\boxed{\\cot(A)=\\frac{b}{a}}]]]। এটি ট্যানজেন্টের বাহু-তুলনাকে উল্টে দেয়, তাই ট্যানজেন্ট যেখানে জিজ্ঞাসা করে ঢাল কতটা খাড়া, কোট্যানজেন্ট জিজ্ঞাসা করে কতটা মৃদু। [[b=4]] এবং [[a=3]] নিয়ে: [[\\cot(A)=4/3]], তাই [[[\\boxed{\\cot(A)\\approx1.3333}]]]। সমতুল্যভাবে, [[\\cot(A)=1/\\tan(A)=1/0.75\\approx1.3333]]। সমস্যা স্বাভাবিকভাবে সংলগ্ন বনাম বিপরীত দিলে, বা সূত্র বিপরীত আকারে লেখা থাকলে কোট্যানজেন্ট কাজে লাগে। এড়ানোর ভুল: কোট্যানজেন্টকে a/b লেখা, যা ট্যানজেন্ট।" },
          { "kind": "h3", "text": "5. সেক্যান্ট: অতিভুজকে সংলগ্ন বাহু দিয়ে ভাগ" },
          { "kind": "p", "text": "সেক্যান্ট কোসাইনের বিপরীত: [[[\\boxed{\\sec(A)=\\frac{c}{b}}]]]। কোসাইনের ভগ্নাংশ উল্টালে অতিভুজ, সবচেয়ে দীর্ঘ বাহু, ওপরে ওঠে, এজন্যই বৈধ সমকোণী ত্রিভুজে সূক্ষ্মকোণের জন্য সেক্যান্ট সবসময় 1-এর বেশি। [[c=5]] এবং [[b=4]] নিয়ে: [[\\sec(A)=5/4]], তাই [[[\\boxed{\\sec(A)=1.25}]]]। সমতুল্যভাবে, [[\\sec(A)=1/\\cos(A)=1/0.8=1.25]]। লবে অতিভুজ রেখে লেখা পদার্থবিজ্ঞান ও প্রকৌশল সূত্রে সেক্যান্ট কাজে লাগে। এড়ানোর ভুল: সেক্যান্টকে কোসাইন বা বিপরীত কোসাইন ফাংশনের সঙ্গে গুলিয়ে ফেলা।" },
          { "kind": "h3", "text": "6. কোসেক্যান্ট: অতিভুজকে বিপরীত বাহু দিয়ে ভাগ" },
          { "kind": "p", "text": "কোসেক্যান্ট সাইনের বিপরীত: [[[\\boxed{\\csc(A)=\\frac{c}{a}}]]]। সেক্যান্টের মতো এটি অতিভুজকে ওপরে রাখে, তাই সূক্ষ্মকোণের জন্য এটি সবসময় 1-এর বেশি। [[c=5]] এবং [[a=3]] নিয়ে: [[\\csc(A)=5/3]], তাই [[[\\boxed{\\csc(A)\\approx1.6667}]]]। সমতুল্যভাবে, [[\\csc(A)=1/\\sin(A)=1/0.6\\approx1.6667]]। কোসেক্যান্ট তরঙ্গ ও দোলন গণিতে আসে, যেখানে সাইনের বিপরীত সুবিধাজনক রূপ। এড়ানোর ভুল: কোসেক্যান্টকে বিপরীত সাইনের সঙ্গে গুলিয়ে ফেলা; [[1/\\sin(A)]] হলো কোসেক্যান্ট, আর [[\\sin^{-1}(r)]] একটি কোণ ফিরিয়ে দেয়।" },
          { "kind": "h3", "text": "এক টেবিলে ছয়টি অনুপাত" },
          { "kind": "p", "text": "ছয়টি গণনাই একই রেফারেন্স কোণ [[A]]-কে নির্দেশ করে।" }
        ],
        "table": {
          "headers": ["অনুপাত", "সূত্র", "বাহুর সম্পর্ক", "3-4-5 উদাহরণ"],
          "rows": [
            ["সাইন", "[[a/c]]", "বিপরীত / অতিভুজ", "[[3/5=0.6]]"],
            ["কোসাইন", "[[b/c]]", "সংলগ্ন / অতিভুজ", "[[4/5=0.8]]"],
            ["ট্যানজেন্ট", "[[a/b]]", "বিপরীত / সংলগ্ন", "[[3/4=0.75]]"],
            ["কোট্যানজেন্ট", "[[b/a]]", "সংলগ্ন / বিপরীত", "[[4/3\\approx1.3333]]"],
            ["সেক্যান্ট", "[[c/b]]", "অতিভুজ / সংলগ্ন", "[[5/4=1.25]]"],
            ["কোসেক্যান্ট", "[[c/a]]", "অতিভুজ / বিপরীত", "[[5/3\\approx1.6667]]"]
          ]
        },
        "imgAlt": "3-4-5 ত্রিভুজ, ছয়টি প্যানেলে sin 0.6, cos 0.8, tan 0.75, cot 1.3333, sec 1.25, csc 1.6667 দেখানো",
        "figcaption": "একটি 3-4-5 ত্রিভুজ ছয়টি অনুপাতই তৈরি করে: তিনটি প্রাথমিক অনুপাত ও তাদের তিনটি বিপরীত।"
      }
      ,
      "sec-choose": {
        "h2": "সঠিক ত্রিকোণমিতিক অনুপাত কীভাবে বেছে নেবেন",
        "blocks": [
          { "kind": "p", "text": "সেরা অনুপাত নির্ভর করে সমস্যায় উপলব্ধ দুটি বাহুর দৈর্ঘ্যের ওপর। প্রতিটি বাহুর জোড়া দুটি বিপরীত গণনা অনুমোদন করে, এবং ক্যালকুলেটরের ছয়টি মোড এই জোড়াগুলোর সঙ্গে ঠিক মিলে যায়:" },
          { "kind": "h3", "text": "সাইন অনুপাত মোড কীভাবে ব্যবহার করবেন" },
          { "kind": "p", "text": "বিপরীত বাহু ও অতিভুজ জানা থাকলে সাইন মোড নির্বাচন করুন। \"Opposite a\" ক্ষেত্রে বিপরীত বাহু এবং \"Hypotenuse c\" ক্ষেত্রে অতিভুজ প্রবেশ করান, তারপর \"হিসাব করুন sin(A)\"-এ ক্লিক করুন। কোনো মোডেই তিনটি বাহুর দৈর্ঘ্য লাগে না; প্রতিটি মোড তার অনুপাতের ঠিক প্রয়োজনীয় জোড়াটি চায়।" },
          { "kind": "h3", "text": "কোসাইন অনুপাত মোড কীভাবে ব্যবহার করবেন" },
          { "kind": "p", "text": "সংলগ্ন বাহু ও অতিভুজ জানা থাকলে কোসাইন মোড নির্বাচন করুন। \"Adjacent b\" ক্ষেত্রে সংলগ্ন বাহু এবং \"Hypotenuse c\" ক্ষেত্রে অতিভুজ প্রবেশ করান, তারপর \"হিসাব করুন cos(A)\"-এ ক্লিক করুন।" },
          { "kind": "h3", "text": "ট্যানজেন্ট অনুপাত মোড কীভাবে ব্যবহার করবেন" },
          { "kind": "p", "text": "দুটি বাহু জানা থাকলে ট্যানজেন্ট মোড নির্বাচন করুন। \"Opposite a\" ক্ষেত্রে বিপরীত বাহু এবং \"Adjacent b\" ক্ষেত্রে সংলগ্ন বাহু প্রবেশ করান, তারপর \"হিসাব করুন tan(A)\"-এ ক্লিক করুন।" },
          { "kind": "h3", "text": "কোট্যানজেন্ট অনুপাত মোড কীভাবে ব্যবহার করবেন" },
          { "kind": "p", "text": "বাহুগুলো জানা থাকলে এবং সমস্যা সংলগ্ন বনাম বিপরীত হিসেবে দেওয়া থাকলে কোট্যানজেন্ট মোড নির্বাচন করুন। প্রথমে \"Adjacent b\" ক্ষেত্রে সংলগ্ন বাহু এবং \"Opposite a\" ক্ষেত্রে বিপরীত বাহু প্রবেশ করান, তারপর \"হিসাব করুন cot(A)\"-এ ক্লিক করুন।" },
          { "kind": "h3", "text": "সেক্যান্ট অনুপাত মোড কীভাবে ব্যবহার করবেন" },
          { "kind": "p", "text": "অতিভুজ ও সংলগ্ন বাহু জানা থাকলে সেক্যান্ট মোড নির্বাচন করুন। \"Hypotenuse c\" ক্ষেত্রে অতিভুজ এবং \"Adjacent b\" ক্ষেত্রে সংলগ্ন বাহু প্রবেশ করান, তারপর \"হিসাব করুন sec(A)\"-এ ক্লিক করুন।" },
          { "kind": "h3", "text": "কোসেক্যান্ট অনুপাত মোড কীভাবে ব্যবহার করবেন" },
          { "kind": "p", "text": "অতিভুজ ও বিপরীত বাহু জানা থাকলে কোসেক্যান্ট মোড নির্বাচন করুন। \"Hypotenuse c\" ক্ষেত্রে অতিভুজ এবং \"Opposite a\" ক্ষেত্রে বিপরীত বাহু প্রবেশ করান, তারপর \"হিসাব করুন csc(A)\"-এ ক্লিক করুন।" }
        ],
        "closingParagraphs": [
          "বিপরীত বাহু ও অতিভুজ জানা থাকলে আপনি [[\\sin(A)=a/c]] এবং [[\\csc(A)=c/a]]-ও গণনা করতে পারেন। সংলগ্ন বাহু ও অতিভুজ জানা থাকলে আপনি [[\\cos(A)=b/c]] এবং [[\\sec(A)=c/b]] গণনা করতে পারেন। দুটি বাহু জানা থাকলে আপনি [[\\tan(A)=a/b]] এবং [[\\cot(A)=b/a]] গণনা করতে পারেন।"
        ],
        "table": {
          "headers": ["পরিচিত বাহু", "সরাসরি অনুপাত", "বিপরীত অনুপাত"],
          "rows": [
            ["বিপরীত বাহু ও অতিভুজ", "সাইন", "কোসেক্যান্ট"],
            ["সংলগ্ন বাহু ও অতিভুজ", "কোসাইন", "সেক্যান্ট"],
            ["বিপরীত ও সংলগ্ন বাহু", "ট্যানজেন্ট", "কোট্যানজেন্ট"]
          ]
        }
      },
      "sec-howto": {
        "h2": "সমকোণী ত্রিভুজের ত্রিকোণমিতিক অনুপাত ক্যালকুলেটর কীভাবে ব্যবহার করবেন",
        "blocks": [
          { "kind": "p", "text": "ছয়টি মোডের যেকোনোটির জন্য এই ধাপগুলো অনুসরণ করুন:" },
          { "kind": "p", "text": "সূত্র মুখস্থ করার চেয়ে বাহু সঠিকভাবে চেনা বেশি গুরুত্বপূর্ণ। এই পৃষ্ঠায় বেশিরভাগ ভুল উত্তর পাটিগণিতের জন্য নয়, বিপরীত ও সংলগ্ন বাহু অদলবদলের জন্য হয়।" }
        ],
        "steps": [
          "<strong>রেফারেন্স কোণ চিহ্নিত করুন।</strong> সমস্যাটি কোন সূক্ষ্মকোণ নিয়ে তা ঠিক করুন। এই পছন্দ থেকেই সব বাহুর লেবেল আসে।",
          "<strong>বিপরীত, সংলগ্ন ও অতিভুজ লেবেল করুন।</strong> রেফারেন্স কোণের বিপরীত বাহু বিপরীত, তাকে স্পর্শ করা বাহু সংলগ্ন এবং সমকোণের বিপরীত বাহু অতিভুজ।",
          "<strong>কোন দুটি বাহুর দৈর্ঘ্য জানা আছে তা নির্ধারণ করুন।</strong> প্রতিটি মোডে ঠিক একটি জোড়া লাগে।",
          "<strong>ওই দুটি বাহুর সঙ্গে মিলিয়ে মোড বেছে নিন।</strong> সাইন, কোসাইন, ট্যানজেন্ট, কোট্যানজেন্ট, সেক্যান্ট বা কোসেক্যান্ট বাছতে আগের অংশের টেবিল ব্যবহার করুন।",
          "<strong>প্রথম প্রয়োজনীয় বাহুর দৈর্ঘ্য প্রবেশ করান।</strong> ক্ষেত্রগুলোতে লেবেল আছে, যেমন \"Opposite a\" ও \"Hypotenuse c\"।",
          "<strong>দ্বিতীয় প্রয়োজনীয় বাহুর দৈর্ঘ্য প্রবেশ করান।</strong> লেবেল যে ক্রম দেখায় তা রাখুন: কিছু মোডে অতিভুজ আগে তালিকাভুক্ত।",
          "<strong>সামঞ্জস্যপূর্ণ একক নির্বাচন করুন।</strong> প্রতিটি ইনপুটের পাশের একক নির্বাচক ব্যবহার করুন যাতে দুটি পরিমাপ এক একক পদ্ধতি ভাগ করে।",
          "<strong>ইনপুটগুলো ধনাত্মক ও বৈধ কিনা যাচাই করুন।</strong> দুটি বাহুই ধনাত্মক হতে হবে এবং অতিভুজ যেকোনো বাহুর চেয়ে দীর্ঘ হতে হবে।",
          "<strong>হিসাব করুন বোতামে ক্লিক করুন।</strong> যেমন সাইন মোডে \"হিসাব করুন sin(A)\"।",
          "<strong>ফলাফল ও সমাধান ধাপ পর্যালোচনা করুন।</strong> ক্যালকুলেটর সূত্র, প্রতিস্থাপন ও চূড়ান্ত মান দেখায়।",
          "<strong>লাইভ চিত্র যাচাই করুন।</strong> ত্রিভুজ চিত্রের লেবেল আপনার কাঙ্ক্ষিত রেফারেন্স কোণের সঙ্গে মিলছে কিনা নিশ্চিত করুন।",
          "<strong>নতুন গণনার জন্য রিসেট করুন ব্যবহার করুন।</strong> রিসেট করুন বোতাম সব ক্ষেত্র পরিষ্কার করে দেয় যাতে পরের গণনা নতুন করে শুরু হয়।"
        ],
        "closingParagraphs": [
          "বিপরীত বাহু 3, সংলগ্ন বাহু 4 ও অতিভুজ 5, সব একই এককে ধরে, প্রতিটি মোড কী চায় ও কী দেয় তা এখানে:",
          "1. সাইন মোড: \"Opposite a\" = 3 ও \"Hypotenuse c\" = 5 প্রবেশ করান, \"হিসাব করুন sin(A)\"-এ ক্লিক করুন। ফলাফল: 0.6।",
          "2. কোসাইন মোড: \"Adjacent b\" = 4 ও \"Hypotenuse c\" = 5 প্রবেশ করান, \"হিসাব করুন cos(A)\"-এ ক্লিক করুন। ফলাফল: 0.8।",
          "3. ট্যানজেন্ট মোড: \"Opposite a\" = 3 ও \"Adjacent b\" = 4 প্রবেশ করান, \"হিসাব করুন tan(A)\"-এ ক্লিক করুন। ফলাফল: 0.75।",
          "4. কোট্যানজেন্ট মোড: \"Adjacent b\" = 4 ও \"Opposite a\" = 3 প্রবেশ করান, \"হিসাব করুন cot(A)\"-এ ক্লিক করুন। ফলাফল: প্রায় 1.3333।",
          "5. সেক্যান্ট মোড: \"Hypotenuse c\" = 5 ও \"Adjacent b\" = 4 প্রবেশ করান, \"হিসাব করুন sec(A)\"-এ ক্লিক করুন। ফলাফল: 1.25।",
          "6. কোসেক্যান্ট মোড: \"Hypotenuse c\" = 5 ও \"Opposite a\" = 3 প্রবেশ করান, \"হিসাব করুন csc(A)\"-এ ক্লিক করুন। ফলাফল: প্রায় 1.6667।",
          "অনুপাতগুলো মাত্রাহীন, তাই ইনপুট পরিমাপে কোনো নির্দিষ্ট একক নয়, শুধু সামঞ্জস্যপূর্ণ একক প্রয়োজন। এই মোডগুলো থেকে ক্যালকুলেটর অনুপস্থিত বাহু বা কোণ উদ্ধার করে না; আপনি যে দুটি বাহু দেন তা থেকে এটি অনুরোধ করা অনুপাত গণনা করে।"
        ]
      },
      "sec-foundations": {
        "h2": "ত্রিকোণমিতিক অনুপাতের ধাপে ধাপে উদাহরণ",
        "blocks": [
          { "kind": "p", "text": "এই চারটি উদাহরণ ধীরে ধীরে বোঝাপড়া গড়ে তোলে, মৌলিক পূর্ণসংখ্যা ত্রিভুজ থেকে বিশেষ ত্রিভুজের সঠিক অনুপাত পর্যন্ত।" },
          { "kind": "h3", "text": "উদাহরণ 1: একটি 3-4-5 সমকোণী ত্রিভুজ" },
          { "kind": "p", "text": "[[a=3\\text{ cm}]], [[b=4\\text{ cm}]], [[c=5\\text{ cm}]] ধরে ছয়টি অনুপাত গণনা করুন। সাইন: [[3/5=0.6]]। কোসাইন: [[4/5=0.8]]। ট্যানজেন্ট: [[3/4=0.75]]। কোট্যানজেন্ট: [[4/3\\approx1.3333]]। সেক্যান্ট: [[5/4=1.25]]। কোসেক্যান্ট: [[5/3\\approx1.6667]]। অনুপাতগুলো ভিন্ন কারণ প্রতিটি ভিন্ন বাহুর জোড়ার তুলনা করে; সবাই একই কোণ [[A]] বর্ণনা করে।" },
          { "kind": "h3", "text": "উদাহরণ 2: একটি 5-12-13 সমকোণী ত্রিভুজ" },
          { "kind": "p", "text": "[[a=5\\text{ m}]], [[b=12\\text{ m}]], [[c=13\\text{ m}]] ধরা হলো। সাইন: [[5/13\\approx0.3846]]। কোসাইন: [[12/13\\approx0.9231]]। ট্যানজেন্ট: [[5/12\\approx0.4167]]। বিপরীতগুলো: কোসেক্যান্ট [[13/5=2.6]], সেক্যান্ট [[13/12\\approx1.0833]], কোট্যানজেন্ট [[12/5=2.4]]। 3-4-5 ত্রিভুজের তুলনায় দীর্ঘ সংলগ্ন বাহু কোসাইনকে বড় ও ট্যানজেন্টকে ছোট করে, অনুপাত আকারে অগভীর কোণ দেখতে এমনই লাগে।" },
          { "kind": "h3", "text": "উদাহরণ 3: একটি 45-45-90 ত্রিভুজ" },
          { "kind": "p", "text": "[[a=1]], [[b=1]], [[c=\\sqrt{2}]] ধরা হলো। সাইন ও কোসাইন সমান: [[\\sin(45^\\circ)=\\cos(45^\\circ)=\\sqrt{2}/2\\approx0.7071]]। ট্যানজেন্ট ও কোট্যানজেন্ট দুটোই 1: [[\\tan(45^\\circ)=\\cot(45^\\circ)=1]]। সেক্যান্ট ও কোসেক্যান্ট সমান: [[\\sec(45^\\circ)=\\csc(45^\\circ)=\\sqrt{2}\\approx1.4142]]। সমান বাহু সাইনকে কোসাইনের সমান ও ট্যানজেন্টকে 1 করে; দুটি সূক্ষ্মকোণের মধ্যে প্রতিসাম্য তিনটি সমতাকেই ব্যাখ্যা করে।" },
          { "kind": "h3", "text": "উদাহরণ 4: একটি 30-60-90 ত্রিভুজ" },
          { "kind": "p", "text": "কোণ [[A=30^\\circ]]-এর জন্য [[a=1]], [[b=\\sqrt{3}]], [[c=2]] ব্যবহার করুন। সাইন: [[1/2=0.5]]। কোসাইন: [[\\sqrt{3}/2\\approx0.8660]]। ট্যানজেন্ট: [[1/\\sqrt{3}\\approx0.5774]]। কোট্যানজেন্ট: [[\\sqrt{3}\\approx1.7321]]। সেক্যান্ট: [[2/\\sqrt{3}\\approx1.1547]]। কোসেক্যান্ট: [[2]]। 30 ও 60 ডিগ্রির অনুপাত যুক্ত: [[\\sin(30^\\circ)=\\cos(60^\\circ)]], [[\\cos(30^\\circ)=\\sin(60^\\circ)]] এবং [[\\tan(30^\\circ)=\\cot(60^\\circ)]], কারণ পরিপূরক কোণগুলো বিপরীত ও সংলগ্ন অদলবদল করে।" }
        ]
      },
      "sec-applications": {
        "h2": "ত্রিকোণমিতিক অনুপাতের বাস্তব জীবনের প্রয়োগ",
        "blocks": [
          { "kind": "p", "text": "প্রতিটি উদাহরণ পরিস্থিতির সঙ্গে মানানসই অনুপাত ব্যবহার করে, ছয়টিই নয়। প্রতিটি উদাহরণ ত্রিভুজ মডেল, পরিচিত বাহু, রেফারেন্স কোণ ও ফলের অর্থ চিহ্নিত করে, যেখানে গুরুত্বপূর্ণ সেখানে অনুমান উল্লেখ করে।" },
          { "kind": "h3", "text": "উদাহরণ 5: ছাদের ঢাল গণনা" },
          { "kind": "p", "text": "একটি ছাদ অনুভূমিক 4 মিটার দূরত্বে 3 মিটার ওপরে ওঠে। সরলীকৃত ত্রিভুজে উত্থান বিপরীত বাহু (a = 3 মি) ও দূরত্ব সংলগ্ন বাহু (b = 4 মি), ছাদের পৃষ্ঠ অতিভুজ। ট্যানজেন্ট মানায় কারণ দুটি বাহুই জানা: [[\\tan(A)=3/4=0.75]]। শতকরা গ্রেড [[0.75\\times100\\%=75\\%]], এবং কোণ [[A=\\tan^{-1}(0.75)\\approx36.87^\\circ]]। ঢাল অনুপাত, শতকরা গ্রেড ও কোণ একই কথার তিনটি রূপ: ছাদ প্রতি 1 মিটার দূরত্বে 0.75 মিটার ওপরে ওঠে। এটি একটি জ্যামিতি উদাহরণ, সম্পূর্ণ ছাদ-নকশা মূল্যায়ন নয়।" },
          { "kind": "h3", "text": "উদাহরণ 6: দেয়ালে হেলানো মই বোঝা" },
          { "kind": "p", "text": "একটি মই দেয়ালে 4 মিটার উঁচুতে পৌঁছেছে, ভিত্তি দেয়াল থেকে 3 মিটার দূরে। দেয়ালের উচ্চতা বিপরীত বাহু (a = 4 মি), মাটির দূরত্ব সংলগ্ন বাহু (b = 3 মি) এবং মই অতিভুজ: [[c=\\sqrt{4^2+3^2}=5\\text{ m}]]। মই ও মাটির মধ্যকার কোণের জন্য: [[\\sin(A)=4/5=0.8]], [[\\cos(A)=3/5=0.6]], [[\\tan(A)=4/3\\approx1.3333]]। কোণটি [[A\\approx53.13^\\circ]]। একটি ত্রিভুজ, একটি কোণ, তিনটি ভিন্ন অনুপাত, প্রতিটি ভিন্ন বাহুর জোড়াকে জোর দেয়। গণনাটি মইয়ের নিরাপত্তা প্রতিষ্ঠা করে না।" },
          { "kind": "h3", "text": "উদাহরণ 7: র‍্যাম্পের ঢাল মূল্যায়ন" },
          { "kind": "p", "text": "একটি র‍্যাম্প অনুভূমিক 8 মিটারে 0.6 মিটার ওপরে ওঠে। দুটি বাহুতে ট্যানজেন্ট মানায়: [[\\tan(A)=0.6/8=0.075]]। শতকরা গ্রেড [[0.075\\times100\\%=7.5\\%]], এবং কোণ [[A=\\tan^{-1}(0.075)\\approx4.29^\\circ]]। 7.5% গ্রেড 7.5 ডিগ্রি কোণ নয়: শতাংশ হলো অনুপাত গুণ 100, আর ডিগ্রি কোণকেই পরিমাপ করে, এবং ছোট মানের পরে এরা দ্রুত বিচ্ছিন্ন হয়। এই জ্যামিতির বাইরে প্রবেশযোগ্যতা ও ভবন-বিধি মেনে চলার জন্য অতিরিক্ত যাচাই দরকার।" },
          { "kind": "h3", "text": "উদাহরণ 8: ভবনের উচ্চতা পরিমাপ" },
          { "kind": "p", "text": "একজন পর্যবেক্ষক ভবন থেকে অনুভূমিকভাবে 24 মিটার দূরে দাঁড়িয়ে, এবং শীর্ষ চোখের স্তর থেকে 18 মিটার উঁচুতে। সংলগ্ন বাহু 24 মিটার ও বিপরীত বাহু 18 মিটার, তাই [[\\tan(A)=18/24=0.75]] এবং [[A\\approx36.87^\\circ]], উচ্চতা কোণ। সরলরেখা দৃষ্টিদূরত্ব [[c=\\sqrt{18^2+24^2}=30\\text{ m}]], একই জ্যামিতির জন্য [[\\sin(A)=18/30=0.6]] ও [[\\cos(A)=24/30=0.8]] দেয়। ফলাফল চোখের স্তরের সাপেক্ষে, মোট ভবনের উচ্চতার সাপেক্ষে অপরিহার্য নয়।" },
          { "kind": "h3", "text": "উদাহরণ 9: উচ্চতার পার্থক্য জরিপ" },
          { "kind": "p", "text": "একজন জরিপকারী অনুভূমিক 20 মিটার দূরত্বে 15 মিটার উল্লম্ব উচ্চতার পার্থক্য মডেল করেন। ট্যানজেন্ট: [[\\tan(A)=15/20=0.75]]। সরলরেখা দূরত্ব [[c=\\sqrt{15^2+20^2}=25\\text{ m}]], তাই [[\\sin(A)=15/25=0.6]] ও [[\\cos(A)=20/25=0.8]] ভিন্ন বাহুর জোড়ার মাধ্যমে একই জরিপকৃত ত্রিভুজ বর্ণনা করে। বাস্তব জরিপে এই সমতল মডেলের বাইরে যন্ত্র-উচ্চতা সমন্বয় ও সংশোধন লাগতে পারে।" },
          { "kind": "h3", "text": "উদাহরণ 10: ছায়া থেকে গাছের উচ্চতা অনুমান" },
          { "kind": "p", "text": "একটি উল্লম্ব গাছ 9 মিটার ছায়া ফেলে, এবং মাটির ওপর উচ্চতা 12 মিটার। বিপরীত 12 মিটার ও সংলগ্ন 9 মিটার নিয়ে: [[\\tan(A)=12/9\\approx1.3333]]। সরলীকৃত ত্রিভুজের দৃষ্টিরেখা অতিভুজ [[c=\\sqrt{12^2+9^2}=15\\text{ m}]], [[\\sin(A)=12/15=0.8]] ও [[\\cos(A)=9/15=0.6]] দেয়। এটি সমতল মাটি, উল্লম্ব গাছ এবং মুকুটের ঠিক নিচের বিন্দু পর্যন্ত পরিমাপ করা ছায়া ধরে নেয়।" },
          { "kind": "h3", "text": "উদাহরণ 11: গাই তার বোঝা" },
          { "kind": "p", "text": "একটি গাই তার খুঁটির 12 মিটার উঁচুতে সংযুক্ত, নোঙর খুঁটি থেকে অনুভূমিকভাবে 5 মিটার দূরে। তারের দৈর্ঘ্য [[c=\\sqrt{12^2+5^2}=13\\text{ m}]]। সাইন: [[12/13\\approx0.9231]]। কোসাইন: [[5/13\\approx0.3846]]। ট্যানজেন্ট: [[12/5=2.4]]। এখানে ট্যানজেন্ট 1 ছাড়ায় কারণ উল্লম্ব উপাংশ অনুভূমিক দূরত্বের চেয়ে দীর্ঘ; এটি স্বাভাবিক, ভুল নয়। এই অনুপাতগুলো নোঙরের শক্তি বা তারের টান সম্পর্কে কিছু বলে না।" },
          { "kind": "h3", "text": "উদাহরণ 12: সিঁড়ির জ্যামিতি বোঝা" },
          { "kind": "p", "text": "সরলীকৃত একটি সিঁড়ির মোট উত্থান 2.4 মিটার ও অনুভূমিক দূরত্ব 3.2 মিটার, কর্ণ দৈর্ঘ্য [[c=\\sqrt{2.4^2+3.2^2}=4\\text{ m}]]। সাইন: [[2.4/4=0.6]]। কোসাইন: [[3.2/4=0.8]]। ট্যানজেন্ট: [[2.4/3.2=0.75]]। অনুপাতগুলো সিঁড়ির সামগ্রিক জ্যামিতি বর্ণনা করে, কিন্তু সিঁড়ি বিধিমালার সঙ্গে সঙ্গতি প্রতিষ্ঠা করে না, যা পৃথক ধাপের মাত্রাও সীমাবদ্ধ করে।" },
          { "kind": "h3", "text": "উদাহরণ 13: ক্রেন বুমের দিক বোঝা" },
          { "kind": "p", "text": "সরলীকৃত একটি ক্রেন বুমের উল্লম্ব উপাংশ 8 মিটার ও অনুভূমিক প্রক্ষেপণ 6 মিটার, [[c=\\sqrt{8^2+6^2}=10\\text{ m}]] সহ। সাইন [[8/10=0.8]] বুমের উল্লম্ব অংশ, কোসাইন [[6/10=0.6]] অনুভূমিক অংশ এবং ট্যানজেন্ট [[8/6\\approx1.3333]] খাড়াপনা বর্ণনা করে। ত্রিকোণমিতিক অনুপাত একা ক্রেনের ধারণক্ষমতা বা নিরাপদ পরিচালনা নির্ধারণ করে না।" },
          { "kind": "h3", "text": "উদাহরণ 14: হাইকিং পথের ঢাল অনুমান" },
          { "kind": "p", "text": "পথের একটি সরল অংশ অনুভূমিক 800 মিটারে 120 মিটার উচ্চতা লাভ করে। ট্যানজেন্ট: [[\\tan(A)=120/800=0.15]]। গ্রেড [[15\\%]] এবং কোণ [[A=\\tan^{-1}(0.15)\\approx8.53^\\circ]]। এই ধ্রুব-ঢাল মডেল আঁকাবাঁকা পথ বর্ণনা করে না, কিন্তু পরিশ্রম পরিকল্পনার জন্য একটি কার্যকর গড় খাড়াপনা দেয়।" },
          { "kind": "h3", "text": "উদাহরণ 15: যান্ত্রিক ব্রেস যাচাই" },
          { "kind": "p", "text": "একটি কর্ণ ব্রেসের উল্লম্ব উপাংশ 1.5 মিটার ও অনুভূমিক উপাংশ 2 মিটার, [[c=\\sqrt{1.5^2+2^2}=2.5\\text{ m}]] সহ। সাইন: [[1.5/2.5=0.6]]। কোসাইন: [[2/2.5=0.8]]। ট্যানজেন্ট: [[1.5/2=0.75]]। এগুলো অর্ধেক স্কেলে 3-4-5 অনুপাত, দেখায় যে আনুপাতিক স্কেলিং প্রতিটি অনুপাত অপরিবর্তিত রাখে। এটি ব্রেসের শক্তি বা ভারবহন ক্ষমতা সম্পর্কে কিছু বলে না।" },
          { "kind": "h3", "text": "উদাহরণ 16: সরল বিমান আরোহণ বোঝা" },
          { "kind": "p", "text": "সরলীকৃত একটি সরল উড্ডয়ন অংশ অনুভূমিক 5 কিমিতে উল্লম্বভাবে 1.5 কিমি লাভ করে। ট্যানজেন্ট: [[\\tan(A)=1.5/5=0.3]], তাই [[A=\\tan^{-1}(0.3)\\approx16.70^\\circ]]। সরলরেখা দূরত্ব [[c=\\sqrt{1.5^2+5^2}\\approx5.22\\text{ km}]], [[\\sin(A)\\approx1.5/5.22\\approx0.287]] দেয়। ট্যানজেন্ট ভূমি দূরত্ব ব্যবহার করে, সাইন উড্ডয়ন-পথ দূরত্ব ব্যবহার করে; একই আরোহণ, ভিন্ন রেফারেন্স দৈর্ঘ্য। এটি একটি জ্যামিতি উদাহরণ, উড্ডয়ন-নেভিগেশন গণনা নয়।" },
          { "kind": "h3", "text": "ব্যবহারিক উদাহরণ তুলনা" }
        ],
        "table": {
          "headers": ["পরিস্থিতি", "পরিচিত পরিমাপ", "প্রাথমিক অনুপাত", "মান", "ব্যাখ্যা"],
          "rows": [
            ["ছাদের ঢাল", "উত্থান 3 মি, দূরত্ব 4 মি", "ট্যানজেন্ট", "0.75", "75% গ্রেড, 36.87°"],
            ["মই", "উচ্চতা 4 মি, ভিত্তি 3 মি", "সাইন", "0.8", "মাটির সঙ্গে কোণ 53.13°"],
            ["র‍্যাম্প", "উত্থান 0.6 মি, দূরত্ব 8 মি", "ট্যানজেন্ট", "0.075", "7.5% গ্রেড, 4.29°"],
            ["ভবনের উচ্চতা", "উচ্চতা 18 মি, দূরত্ব 24 মি", "ট্যানজেন্ট", "0.75", "উচ্চতা কোণ 36.87°"],
            ["জরিপ", "উত্থান 15 মি, দূরত্ব 20 মি", "ট্যানজেন্ট", "0.75", "ছাদের ঢালের মতোই আকৃতি"],
            ["গাছের ছায়া", "উচ্চতা 12 মি, ছায়া 9 মি", "ট্যানজেন্ট", "1.3333", "45°-এর চেয়ে খাড়া"],
            ["গাই তার", "উচ্চতা 12 মি, নোঙর 5 মি", "ট্যানজেন্ট", "2.4", "দূরত্বের চেয়ে তার অনেক খাড়া"],
            ["সিঁড়ি", "উত্থান 2.4 মি, দূরত্ব 3.2 মি", "ট্যানজেন্ট", "0.75", "3-4-5-এর মতোই অনুপাত"],
            ["ক্রেন বুম", "উল্লম্ব 8 মি, অনুভূমিক 6 মি", "সাইন", "0.8", "বেশিরভাগ উল্লম্ব নাগাল"],
            ["হাইকিং পথ", "লাভ 120 মি, দূরত্ব 800 মি", "ট্যানজেন্ট", "0.15", "গড় 15% গ্রেড"],
            ["যান্ত্রিক ব্রেস", "উল্লম্ব 1.5 মি, অনুভূমিক 2 মি", "সাইন", "0.6", "স্কেলকৃত 3-4-5 জ্যামিতি"],
            ["বিমান আরোহণ", "লাভ 1.5 কিমি, দূরত্ব 5 কিমি", "ট্যানজেন্ট", "0.3", "16.70° আরোহণ কোণ"]
          ]
        },
        "imgAlt": "চারটি প্যানেল: ছাদের ঢাল 0.75, মই sin 0.8, জরিপ sin 0.6, র‍্যাম্প tan 0.075, লেবেলযুক্ত ত্রিভুজ সহ",
        "figcaption": "চারটি বাস্তব সমস্যা: ছাদের ঢাল, মই, জরিপ ও র‍্যাম্প, প্রতিটির নিজের ত্রিভুজ ও মূল অনুপাত সহ।"
      }
      ,
      "sec-relate": {
        "h2": "ছয়টি ত্রিকোণমিতিক অনুপাত পরস্পরের সঙ্গে কীভাবে সম্পর্কিত",
        "blocks": [
          { "kind": "p", "text": "ছয়টি অনুপাত ছয়টি স্বতন্ত্র তথ্য নয়। এরা তিনটি বিপরীত জোড়া, দুটি ভাগফল সম্পর্ক ও তিনটি পিথাগোরীয় অভেদ গঠন করে। এই সংযোগ জানলে ছয়টি সূত্র একটি ব্যবস্থায় পরিণত হয়, এবং এটি প্রতিটি গণনার যাচাই পদ্ধতি দেয়।" },
          { "kind": "h3", "text": "বিপরীত জোড়া" },
          { "kind": "p", "text": "প্রতিটি বিপরীত জোড়া গুণ করে 1 দেয় কারণ ভগ্নাংশ বাতিল হয়: [[\\sin(A)\\csc(A)=1]], [[\\cos(A)\\sec(A)=1]], [[\\tan(A)\\cot(A)=1]]। 3-4-5 ত্রিভুজে: [[0.6\\times1.6667\\approx1]], [[0.8\\times1.25=1]], [[0.75\\times1.3333\\approx1]]। ছোট অমিল গোলকৃত দশমিক থেকে আসে, গণিত থেকে নয়।" },
          { "kind": "h3", "text": "সাইনকে কোসাইন দিয়ে ভাগ হিসেবে ট্যানজেন্ট" },
          { "kind": "p", "text": "ভাগফল সম্পর্ক [[[\\boxed{\\tan(A)=\\frac{\\sin(A)}{\\cos(A)}}]]] অভিন্ন অতিভুজ বাতিল থেকে আসে: [[(a/c)/(b/c)=a/b]]। 3-4-5 মান দিয়ে যাচাই করুন: [[0.6/0.8=0.75]], যা [[\\tan(A)]]-এর সঙ্গে মেলে। এটি একটি কার্যকর যাচাই: আপনার ট্যানজেন্ট সাইনকে কোসাইন দিয়ে ভাগের সমান না হলে একটি বাহু ভুল লেবেলযুক্ত।" },
          { "kind": "h3", "text": "কোসাইনকে সাইন দিয়ে ভাগ হিসেবে কোট্যানজেন্ট" },
          { "kind": "p", "text": "একইভাবে, [[[\\boxed{\\cot(A)=\\frac{\\cos(A)}{\\sin(A)}}]]]। 3-4-5 মান নিয়ে: [[0.8/0.6\\approx1.3333]], [[\\cot(A)]]-এর সঙ্গে মেলে। কোট্যানজেন্ট ট্যানজেন্টের সবকিছু উত্তরাধিকার পায়, উল্টো করে।" },
          { "kind": "h3", "text": "পিথাগোরীয় ত্রিকোণমিতিক অভেদ" },
          { "kind": "p", "text": "অভেদ [[[\\boxed{\\sin^2(A)+\\cos^2(A)=1}]]] সরাসরি পিথাগোরাস উপপাদ্য থেকে আসে: [[(a/c)^2+(b/c)^2=(a^2+b^2)/c^2=c^2/c^2=1]]। 3-4-5 ত্রিভুজের জন্য: [[0.6^2+0.8^2=0.36+0.64=1]]। আরও দুটি অভেদ ধারা বাড়ায়: [[1+\\tan^2(A)=\\sec^2(A)]] ও [[1+\\cot^2(A)=\\csc^2(A)]], প্রথম অভেদকে কোসাইন বর্গ ও সাইন বর্গ দিয়ে ভাগ করে পাওয়া। বাহুর দৈর্ঘ্য ছাড়াই একটি অনুপাত থেকে আরেকটি দরকার হলে এরা কাজে লাগে।" },
          { "kind": "h3", "text": "পরিপূরক কোণ অনুপাতকে কীভাবে প্রভাবিত করে" },
          { "kind": "p", "text": "[[A+C=90^\\circ]] বলে [[A]] থেকে [[C]]-তে রেফারেন্স কোণ বদলালে বিপরীত ও সংলগ্ন অদলবদল হয়: [[\\sin(A)=\\cos(C)]], [[\\cos(A)=\\sin(C)]], [[\\tan(A)=\\cot(C)]], [[\\cot(A)=\\tan(C)]], [[\\sec(A)=\\csc(C)]] এবং [[\\csc(A)=\\sec(C)]]। 3-4-5 ত্রিভুজে [[\\sin(A)=3/5=0.6]] অথচ [[\\cos(C)=3/5=0.6]], কারণ [[A]]-এর বিপরীত বাহু [[C]]-এর সংলগ্ন। এক সূক্ষ্মকোণের প্রতিটি অনুপাত অন্য কোণে তার সহ-ফাংশন হিসেবে ফিরে আসে।" }
        ]
      },
      "sec-angles": {
        "h2": "বিভিন্ন কোণে ত্রিকোণমিতিক অনুপাত বোঝা",
        "blocks": [
          { "kind": "p", "text": "সূক্ষ্মকোণ রেফারেন্স কোণ বাড়লে অনুপাতগুলো অনুমানযোগ্যভাবে বদলায়। সাইন প্রায় 0 থেকে 1-এর দিকে বাড়ে, আর কোসাইন প্রায় 1 থেকে 0-এর দিকে কমে। ট্যানজেন্ট প্রায় 0 থেকে ঊর্ধ্বসীমা ছাড়াই বাড়ে, আর কোট্যানজেন্ট বড় মান থেকে 0-এর দিকে কমে। সেক্যান্ট প্রায় 1 থেকে সীমা ছাড়াই বাড়ে, আর কোসেক্যান্ট বড় মান থেকে 1-এর দিকে কমে। এগুলো 0 ও 90 ডিগ্রির কাছাকাছি সীমাবদ্ধ আচরণ, বৈধ অ-অপভ্রষ্ট সমকোণী ত্রিভুজে সূক্ষ্মকোণ প্রান্তবিন্দুতে প্রকৃতপক্ষে যে মান পায় তা নয়।" }
        ],
        "table": {
          "headers": ["কোণ", "সাইন", "কোসাইন", "ট্যানজেন্ট"],
          "rows": [
            ["[[30^\\circ]]", "0.5", "প্রায় 0.8660", "প্রায় 0.5774"],
            ["[[45^\\circ]]", "প্রায় 0.7071", "প্রায় 0.7071", "1"],
            ["[[60^\\circ]]", "প্রায় 0.8660", "0.5", "প্রায় 1.7321"]
          ]
        },
        "closingParagraphs": [
          "ধারাটি প্রতিসম: 30 ডিগ্রিতে সাইন 60 ডিগ্রিতে কোসাইনের সমান, পরিপূরক সম্পর্ক প্রতিফলিত করে। কোট্যানজেন্ট, সেক্যান্ট ও কোসেক্যান্ট বিপরীত সম্পর্ক থেকে আসে: যেমন 30 ডিগ্রিতে [[\\cot(30^\\circ)=1/0.5774\\approx1.7321]] ও [[\\csc(30^\\circ)=1/0.5=2]]।"
        ],
        "imgAlt": "ফ্লোচার্ট: বিপরীত ও অতিভুজের জন্য সাইন বা কোসেক্যান্ট, সংলগ্ন ও অতিভুজের জন্য কোসাইন বা সেক্যান্ট, দুটি বাহুর জন্য ট্যানজেন্ট বা কোট্যানজেন্ট বেছে নিন",
        "figcaption": "আপনার পরিচিত বাহুর জোড়া থেকে ক্যালকুলেটর মোড বেছে নিন: প্রতিটি জোড়া একটি সরাসরি অনুপাত ও তার বিপরীত দেয়।"
      },
      "sec-missing-side": {
        "h2": "সমকোণী ত্রিভুজের অনুপস্থিত বাহু কীভাবে গণনা করবেন",
        "blocks": [
          { "kind": "p", "text": "ছয়-অনুপাত ক্যালকুলেটর পরিচিত বাহু থেকে অনুপাত বের করে। পরিচিত কোণ ও বাহু থেকে অজানা বাহু বের করা সম্পর্কিত কিন্তু ভিন্ন কাজ, অনুপাত সূত্র পুনর্বিন্যাস করে সমাধান করা হয়। এগুলো সহযোগী গণনা, অনুপাত ক্যালকুলেটরের নিজের বৈশিষ্ট্য নয়।" },
          { "kind": "h3", "text": "সাইন দিয়ে বিপরীত বাহু বের করা" },
          { "kind": "p", "text": "[[\\sin(A)=a/c]] থেকে শুরু করে পুনর্বিন্যাস করুন: [[[\\boxed{a=c\\sin(A)}]]]। অতিভুজ 10 মিটার ও কোণ [[A=30^\\circ]] নিয়ে: [[a=10\\sin(30^\\circ)=5\\text{ m}]]।" },
          { "kind": "h3", "text": "কোসাইন দিয়ে সংলগ্ন বাহু বের করা" },
          { "kind": "p", "text": "[[\\cos(A)=b/c]] থেকে শুরু করে পুনর্বিন্যাস করুন: [[[\\boxed{b=c\\cos(A)}]]]। অতিভুজ 10 মিটার ও কোণ [[A=60^\\circ]] নিয়ে: [[b=10\\cos(60^\\circ)=5\\text{ m}]]।" },
          { "kind": "h3", "text": "ট্যানজেন্ট দিয়ে বিপরীত বাহু বের করা" },
          { "kind": "p", "text": "[[\\tan(A)=a/b]] থেকে শুরু করে পুনর্বিন্যাস করুন: [[[\\boxed{a=b\\tan(A)}]]]। সংলগ্ন বাহু 8 মিটার ও কোণ [[A=30^\\circ]] নিয়ে: [[a=8\\tan(30^\\circ)\\approx4.62\\text{ m}]]। ট্যানজেন্ট এখানে বিশেষভাবে কাজে লাগে কারণ এটি দুটি বাহুকে সরাসরি যুক্ত করে, অতিভুজ ছাড়াই।" }
        ]
      },
      "sec-inverse": {
        "h2": "ত্রিকোণমিতিক অনুপাত থেকে কোণ কীভাবে বের করবেন",
        "blocks": [
          { "kind": "p", "text": "ত্রিকোণমিতিক অনুপাত কোণ নয়। অনুপাত জানা ও কোণ অজানা থাকলে বিপরীত ত্রিকোণমিতিক ফাংশন সূক্ষ্মকোণ রেফারেন্স কোণ উদ্ধার করে: [[A=\\sin^{-1}(r)]], [[A=\\cos^{-1}(r)]] ও [[A=\\tan^{-1}(r)]]। এদের বিপরীত সাইন, বিপরীত কোসাইন ও বিপরীত ট্যানজেন্ট বলা হয়, আর্কসাইন, আর্ককোসাইন ও আর্কট্যানজেন্ট নামেও পরিচিত।" },
          { "kind": "h3", "text": "সাইন ব্যবহারে সমাধানসহ উদাহরণ" },
          { "kind": "p", "text": "[[\\sin(A)=0.6]] ধরে কোণ [[A=\\sin^{-1}(0.6)\\approx36.87^\\circ]]।" },
          { "kind": "h3", "text": "কোসাইন ব্যবহারে সমাধানসহ উদাহরণ" },
          { "kind": "p", "text": "[[\\cos(A)=0.8]] ধরে কোণ [[A=\\cos^{-1}(0.8)\\approx36.87^\\circ]]।" },
          { "kind": "h3", "text": "ট্যানজেন্ট ব্যবহারে সমাধানসহ উদাহরণ" },
          { "kind": "p", "text": "[[\\tan(A)=0.75]] ধরে কোণ [[A=\\tan^{-1}(0.75)\\approx36.87^\\circ]]।" },
          { "kind": "p", "text": "তিনটিই একই কোণ উদ্ধার করে কারণ তিনটি অনুপাত একই 3-4-5 ত্রিভুজ বর্ণনা করে। এখানে বিপরীত ফাংশন ও বিপরীত অনুপাতের পার্থক্য গুরুত্বপূর্ণ: [[1/\\sin(A)=\\csc(A)]] একটি বিপরীত, একটি ভিন্ন অনুপাত, আর [[\\sin^{-1}(r)]] একটি বিপরীত ফাংশন, যা একটি কোণ ফিরিয়ে দেয়। হাতে কোণ গণনায় আপনার টুল ডিগ্রি না রেডিয়ান মোডে আছে তা যাচাই করুন; এই পৃষ্ঠার ক্যালকুলেটর শুধু অনুপাতে কাজ করে, তাই কোণ উদ্ধার একটি পৃথক ধাপ।" }
        ]
      },
      "sec-mistakes": {
        "h2": "ত্রিকোণমিতিক অনুপাত ব্যবহারে সাধারণ ভুল",
        "blocks": [
          { "kind": "h3", "text": "বিপরীত বাহুকে সংলগ্ন বাহুর সঙ্গে গুলিয়ে ফেলা" },
          { "kind": "p", "text": "লেবেল রেফারেন্স কোণের ওপর নির্ভর করে। 3-4-5 ত্রিভুজে সাইনের জন্য [[4/5=0.8]] গণনা আসলে কোসাইন দেয়। সংশোধন: প্রথমে রেফারেন্স কোণ চিহ্নিত করুন, তারপর তার বিপরীত বাহুকে বিপরীত হিসেবে লেবেল করুন।" },
          { "kind": "h3", "text": "ভুল রেফারেন্স কোণের সাপেক্ষে বাহু চেনা" },
          { "kind": "p", "text": "সমস্যা কোণ A নিয়ে হলেও কোণ C-এর জন্য লেবেল করলে প্রতিটি অনুপাত অদলবদল হয়। সংশোধন: ক্যালকুলেটর স্পর্শ করার আগে লিখে রাখুন কোন কোণ রেফারেন্স।" },
          { "kind": "h3", "text": "কোসাইনের বদলে সাইন ব্যবহার" },
          { "kind": "p", "text": "সাইনে বিপরীত বাহু লাগে; কোসাইনে সংলগ্ন বাহু লাগে। সংলগ্ন বাহু ও অতিভুজ জানা সত্ত্বেও [[a/c]] গণনা করলে আপনি বাহু অদলবদল করেছেন। সংশোধন: বেছে নেওয়ার অংশের টেবিল ব্যবহার করে অনুপাতকে পরিচিত জোড়ার সঙ্গে মেলান।" },
          { "kind": "h3", "text": "বিপরীত ও অতিভুজ জানা থাকলে ট্যানজেন্ট ব্যবহার" },
          { "kind": "p", "text": "ট্যানজেন্টে দুটি বাহু লাগে। বিপরীত ও অতিভুজ জানা থাকলে সঠিক সরাসরি অনুপাত সাইন। সংশোধন: মোড বাছার আগে আসলে কোন জোড়া আছে তা যাচাই করুন।" },
          { "kind": "h3", "text": "লব ও হর উল্টে ফেলা" },
          { "kind": "p", "text": "সাইন চেয়ে [[c/a]] গণনা করলে কোসেক্যান্ট পাওয়া যায়, 1-এর নিচের বদলে 1-এর ওপরের মান। সংশোধন: সাইন ও কোসাইনে হর অতিভুজ, ট্যানজেন্টে হর সংলগ্ন বাহু।" },
          { "kind": "h3", "text": "ট্যানজেন্টকে কোট্যানজেন্টের সঙ্গে গুলিয়ে ফেলা" },
          { "kind": "p", "text": "ট্যানজেন্ট [[a/b]]; কোট্যানজেন্ট [[b/a]]। এরা বিপরীত, তাই একটি ভুল উত্তরকে উল্টে দেয়। সংশোধন: মান প্রবেশের আগে মোড লেবেল পড়ুন।" },
          { "kind": "h3", "text": "কোসাইনকে সেক্যান্টের সঙ্গে গুলিয়ে ফেলা" },
          { "kind": "p", "text": "কোসাইন [[b/c]], সবসময় 1-এর নিচে; সেক্যান্ট [[c/b]], সবসময় 1-এর ওপরে। আপনার সেক্যান্ট 1-এর নিচে এলে আপনি কোসাইন গণনা করেছেন। সংশোধন: বিপরীত অনুপাত অতিভুজকে ওপরে রাখে।" },
          { "kind": "h3", "text": "সাইনকে কোসেক্যান্টের সঙ্গে গুলিয়ে ফেলা" },
          { "kind": "p", "text": "একই উল্টানো: সাইন [[a/c]], কোসেক্যান্ট [[c/a]]। সংশোধন: আপনার ফলাফল নির্বাচিত মোডের প্রত্যাশিত সীমায় আছে কিনা যাচাই করুন।" },
          { "kind": "h3", "text": "ধরে নেওয়া প্রতিটি অনুপাত 1-এর কম হতে হবে" },
          { "kind": "p", "text": "সাইন ও কোসাইন 1-এর নিচে, কিন্তু ট্যানজেন্ট, কোট্যানজেন্ট, সেক্যান্ট ও কোসেক্যান্ট সবাই 1 ছাড়াতে পারে। খাড়া ঢালের জন্য 2.4 ট্যানজেন্ট পুরোপুরি বৈধ। সংশোধন: প্রতিটি অনুপাতের বৈধ সীমা শিখুন।" },
          { "kind": "h3", "text": "ধরে নেওয়া 0.6-এর মতো অনুপাত 0.6 ডিগ্রি কোণ নির্দেশ করে" },
          { "kind": "p", "text": "অনুপাত একটি বিশুদ্ধ সংখ্যা, ডিগ্রি পরিমাপ নয়। [[\\sin(A)=0.6]]-এর পেছনের কোণ প্রায় 36.87 ডিগ্রি, বিপরীত সাইন দিয়ে পাওয়া। সংশোধন: অনুপাত \"বাহুগুলো কীভাবে তুলনা হয়\"-এর উত্তর দেয়; বিপরীত ফাংশন \"কোণ কত\"-এর উত্তর দেয়।" },
          { "kind": "h3", "text": "ভুলে যাওয়া অনুপাত মাত্রাহীন" },
          { "kind": "p", "text": "বিপরীত ইঞ্চিতে ও অতিভুজ ফুটে প্রবেশ করালে অনুপাত নষ্ট হয়, কারণ একক আর বাতিল হয় না। সংশোধন: প্রথমে দুটি ইনপুটই এক এককে রূপান্তর করুন।" },
          { "kind": "h3", "text": "অসামঞ্জস্যপূর্ণ পরিমাপ একক মেশানো" },
          { "kind": "p", "text": "একই মূল কারণ, পুনরাবৃত্তির যোগ্য: 3 ইঞ্চি বনাম 5 সেন্টিমিটারের অনুপাত 0.6 নয়। সংশোধন: গণনার আগে দুটি ইনপুটেই একক নির্বাচক ব্যবহার করুন।" },
          { "kind": "h3", "text": "শূন্য বা ঋণাত্মক বাহুর দৈর্ঘ্য প্রবেশ করানো" },
          { "kind": "p", "text": "ত্রিভুজের বাহু ধনাত্মক হতে হবে। শূন্য বা ঋণাত্মক ইনপুট কোনো ত্রিভুজ বর্ণনা করে না, এবং ক্যালকুলেটর অর্থপূর্ণ অনুপাত তৈরি করতে পারে না। সংশোধন: আবার পরিমাপ করুন বা সমস্যা পুনরায় পড়ুন।" },
          { "kind": "h3", "text": "বৈধ সমকোণী ত্রিভুজ গঠন না করা বাহুর দৈর্ঘ্য ব্যবহার" },
          { "kind": "p", "text": "বাহুগুলো পিথাগোরীয় যাচাইয়ে ব্যর্থ হলে, যেমন 2, 3 ও 10, ওই দৈর্ঘ্যে কোনো সমকোণী ত্রিভুজ নেই। সংশোধন: অনুপাত গণনার আগে [[a^2+b^2=c^2]] যাচাই করুন।" },
          { "kind": "h3", "text": "আগে গোল করা" },
          { "kind": "p", "text": "মধ্যবর্তী অনুপাত এক দশমিকে গোল করে গুণ করলে ত্রুটি বাড়ে। সংশোধন: প্রতিটি ধাপে পূর্ণ নির্ভুলতা রাখুন এবং শুধু চূড়ান্ত উত্তর গোল করুন।" },
          { "kind": "h3", "text": "বিপরীত অনুপাতকে বিপরীত ত্রিকোণমিতিক ফাংশনের সঙ্গে গুলিয়ে ফেলা" },
          { "kind": "p", "text": "[[\\csc(A)=1/\\sin(A)]] একটি অনুপাত; [[\\sin^{-1}(0.6)]] একটি কোণ। একই রকম স্বরলিপি প্রকৃত বিভ্রান্তি সৃষ্টি করে। সংশোধন: বিপরীতগুলো ভগ্নাংশ উল্টায়, বিপরীত ফাংশন কোণ উদ্ধার করে।" },
          { "kind": "h3", "text": "অতিভুজকে বাহুগুলোর একটি ধরা" },
          { "kind": "p", "text": "অতিভুজ সবসময় সবচেয়ে দীর্ঘ বাহু এবং সবসময় সমকোণের বিপরীতে। একে বাহু হিসেবে নির্ধারণ প্রতিটি অনুপাত ভেঙে দেয়। সংশোধন: প্রথমে সবচেয়ে দীর্ঘ বাহু খুঁজুন এবং c হিসেবে লেবেল করুন।" },
          { "kind": "h3", "text": "ধরে নেওয়া ছয়টি অনুপাতের মান একই" },
          { "kind": "p", "text": "3-4-5 ত্রিভুজে ছয়টি মান 0.6 থেকে 1.6667 পর্যন্ত চলে। শুধু 45-45-90-এর মতো বিশেষ ত্রিভুজ কিছু অনুপাত সমান করে। সংশোধন: একটি ত্রিভুজ থেকে ছয়টি ভিন্ন সংখ্যা আশা করুন।" },
          { "kind": "h3", "text": "ধরে নেওয়া একই বাহু সবসময় বিপরীত" },
          { "kind": "p", "text": "কোণ A-এর বিপরীত বাহু কোণ C-এর সংলগ্ন। প্রতিটি সমাধানকৃত উত্তরে রেফারেন্স কোণ উল্লেখ করতে হবে। সংশোধন: রেফারেন্স কোণ বদলালেই বাহু পুনরায় লেবেল করুন।" },
          { "kind": "h3", "text": "সরলীকৃত ফলাফলকে প্রকৌশল প্রমাণ ধরা" },
          { "kind": "p", "text": "ব্রেস বা গাই তারে অনুপাত যাচাই জ্যামিতি বর্ণনা করে, শক্তি, টান বা বিধি-সঙ্গতি নয়। সংশোধন: জ্যামিতি ধাপে অনুপাত ব্যবহার করুন, এবং নিরাপত্তা সিদ্ধান্তে যোগ্য প্রকৌশল বিশ্লেষণ।" },
          { "kind": "h3", "text": "ভুল বনাম সঠিক: একটি নির্দিষ্ট উদাহরণ" },
          { "kind": "p", "text": "[[a=3]], [[b=4]], [[c=5]] ধরে ভুল সাইন গণনা ভুল বাহুর জোড়া ব্যবহার করে: [[3/4=0.75]]। এটি ট্যানজেন্ট অনুপাত, সাইন নয়। সঠিক গণনা [[\\sin(A)=3/5=0.6]]। ভাগফল সম্পর্ক দিয়ে যাচাই করুন: [[\\tan(A)=\\sin(A)/\\cos(A)=0.6/0.8=0.75]]। সঠিক বাহু চেনা অপরিহার্য, কারণ বাহু ঠিক থাকলে পাটিগণিত তুচ্ছ।" }
        ]
      },
      "sec-verify": {
        "h2": "আপনার ত্রিকোণমিতিক ফলাফল সঠিক কিনা তা কীভাবে যাচাই করবেন",
        "blocks": [
          { "kind": "p", "text": "বৈধ, অ-অপভ্রষ্ট সমকোণী ত্রিভুজে ধনাত্মক বাহু, যেকোনো বাহুর চেয়ে দীর্ঘ অতিভুজ, পিথাগোরাস উপপাদ্য মেনে চলা বাহু, সামঞ্জস্যপূর্ণ একক, নির্বাচিত অনুপাতের জন্য সঠিক বাহুর জোড়া এবং সম্মত বিপরীত জোড়া দরকার। চারটি দ্রুত পদ্ধতি সবকিছু কভার করে।" },
          { "kind": "h3", "text": "যাচাই পদ্ধতি 1: বাহুর দৈর্ঘ্য যাচাই করুন" },
          { "kind": "p", "text": "3-4-5 ত্রিভুজের জন্য: [[3^2+4^2=5^2]], বা [[9+16=25]]। পিথাগোরীয় যাচাইয়ে উত্তীর্ণ হলে নিশ্চিত হয় বাহুগুলো বাস্তব সমকোণী ত্রিভুজ বর্ণনা করে, তারপর এদের থেকে প্রাপ্ত যেকোনো অনুপাতে আস্থা রাখুন।" },
          { "kind": "h3", "text": "যাচাই পদ্ধতি 2: বিপরীত জোড়া যাচাই করুন" },
          { "kind": "p", "text": "প্রতিটি সরাসরি-বিপরীত জোড়া গুণ করে 1 দিতে হবে: [[\\sin(A)\\csc(A)=0.6\\times1.6667\\approx1]], [[\\cos(A)\\sec(A)=0.8\\times1.25=1]], [[\\tan(A)\\cot(A)=0.75\\times1.3333\\approx1]]। ছোট পার্থক্য গোলকৃত দশমিক থেকে আসে।" },
          { "kind": "h3", "text": "যাচাই পদ্ধতি 3: সাইন ও কোসাইন দিয়ে ট্যানজেন্ট যাচাই করুন" },
          { "kind": "p", "text": "ভাগফল সম্পর্ক একটি স্বতন্ত্র যাচাই দেয়: [[\\tan(A)=\\sin(A)/\\cos(A)=0.6/0.8=0.75]]। ক্যালকুলেটরের ট্যানজেন্ট মোড ও এই গণনা অমিল হলে একটি বাহু ভুল লেবেলযুক্ত।" },
          { "kind": "h3", "text": "যাচাই পদ্ধতি 4: বিপরীত কোণ যাচাই করুন" },
          { "kind": "p", "text": "কোণ উদ্ধার করে দেখুন তা যুক্তিসংগত কিনা: [[A=\\tan^{-1}(0.75)\\approx36.87^\\circ]]। 0 ও 90 ডিগ্রির মধ্যে সূক্ষ্ম ফলাফল যা ত্রিভুজের আকৃতির সঙ্গে মেলে, অনুপাত নিশ্চিত করে।" }
        ]
      },
      "sec-conclusion": {
        "h2": "একটি ত্রিভুজ দিয়ে ছয়টি অনুপাত আয়ত্ত করুন",
        "blocks": [
          { "kind": "p", "text": "এই পৃষ্ঠার প্রতিটি অনুপাত একই তিনটি বাহু ও একটি রেফারেন্স কোণ থেকে আসে। ত্রিভুজ লেবেল করুন, বাহুর জোড়াকে মোডের সঙ্গে মেলান, এবং পাটিগণিত ক্যালকুলেটরকে করতে দিন। সাইন, কোসাইন ও ট্যানজেন্ট সরাসরি তুলনার উত্তর দেয়; কোসেক্যান্ট, সেক্যান্ট ও কোট্যানজেন্ট এদের উল্টে দেয়। SOH-CAH-TOA প্রথম তিনটি মনে করায়, বিপরীত নিয়ম বাকিগুলো মনে করায়, এবং সাইন বর্গ যোগ কোসাইন বর্গ সমান 1 অভেদ সাইন ও কোসাইনকে যুক্ত করে। পিথাগোরীয় যাচাই ও বিপরীত গুণফল দিয়ে যাচাই করুন, তারপর আপনার সংখ্যা চালাতে এই পৃষ্ঠার শীর্ষের ক্যালকুলেটরে ফিরুন।" }
        ]
      }
    },
    "faqs": [
      { "question": "সমকোণী ত্রিভুজের ছয়টি ত্রিকোণমিতিক অনুপাত কী কী?", "answer": "ছয়টি অনুপাত হলো সাইন (বিপরীত বনাম অতিভুজ), কোসাইন (সংলগ্ন বনাম অতিভুজ), ট্যানজেন্ট (বিপরীত বনাম সংলগ্ন), কোট্যানজেন্ট (সংলগ্ন বনাম বিপরীত), সেক্যান্ট (অতিভুজ বনাম সংলগ্ন) ও কোসেক্যান্ট (অতিভুজ বনাম বিপরীত)। প্রথম তিনটি প্রাথমিক অনুপাত; শেষ তিনটি এদের বিপরীত।" },
      { "question": "সাইন, কোসাইন ও ট্যানজেন্ট কীভাবে গণনা করবেন?", "answer": "রেফারেন্স কোণ চিহ্নিত করুন, তারপর সঠিক বাহুর জোড়া ভাগ করুন। সাইন হলো বিপরীতকে অতিভুজ দিয়ে ভাগ, কোসাইন হলো সংলগ্নকে অতিভুজ দিয়ে ভাগ এবং ট্যানজেন্ট হলো বিপরীতকে সংলগ্ন দিয়ে ভাগ। 3-4-5 ত্রিভুজে এটি দেয় 3/5 = 0.6, 4/5 = 0.8 ও 3/4 = 0.75।" },
      { "question": "সরাসরি ও বিপরীত ত্রিকোণমিতিক অনুপাতের পার্থক্য কী?", "answer": "সরাসরি অনুপাত (সাইন, কোসাইন, ট্যানজেন্ট) ছোট বাহুর তুলনাকে আগে রাখে, আর বিপরীত অনুপাত (কোসেক্যান্ট, সেক্যান্ট, কোট্যানজেন্ট) ভগ্নাংশ উল্টে দেয়। কোসেক্যান্ট হলো 1/সাইন, সেক্যান্ট হলো 1/কোসাইন এবং কোট্যানজেন্ট হলো 1/ট্যানজেন্ট। প্রতিটি জোড়া গুণ করে 1 দেয়।" },
      { "question": "ত্রিকোণমিতিক অনুপাত মাত্রাহীন কেন?", "answer": "অনুপাত এক দৈর্ঘ্যকে আরেক দৈর্ঘ্য দিয়ে ভাগ করে, তাই একক বাতিল হয়। 3 মিটারকে 5 মিটার দিয়ে ভাগ 0.6, এবং 300 সেন্টিমিটারকে 500 সেন্টিমিটার দিয়ে ভাগও 0.6। ফলের কোনো একক নেই, এজন্যই দুটি ইনপুটের শুধু এক একক পদ্ধতি ভাগ করা দরকার।" },
      { "question": "সঠিক ক্যালকুলেটর মোড কীভাবে বেছে নেব?", "answer": "মোডকে আপনার পরিচিত বাহুর জোড়ার সঙ্গে মেলান। বিপরীত ও অতিভুজ: সাইন বা কোসেক্যান্ট মোড। সংলগ্ন ও অতিভুজ: কোসাইন বা সেক্যান্ট মোড। দুটি বাহু: ট্যানজেন্ট বা কোট্যানজেন্ট মোড। সরাসরি অনুপাত ও তার বিপরীত একই দুটি ইনপুট বিপরীত ক্রমে ব্যবহার করে।" },
      { "question": "ট্যানজেন্ট বা কোট্যানজেন্ট অনুপাত কি 1-এর বেশি হতে পারে?", "answer": "হ্যাঁ। ট্যানজেন্ট দুটি বাহুর তুলনা করে, তাই বিপরীত বাহু সংলগ্ন বাহুর চেয়ে দীর্ঘ হলেই এটি 1 ছাড়ায়, যেমন খাড়া ঢালে। সংলগ্ন বাহু দীর্ঘ হলে কোট্যানজেন্ট 1 ছাড়ায়। শুধু সাইন ও কোসাইন 1-এ সীমাবদ্ধ, কারণ এদের হর সবচেয়ে দীর্ঘ বাহু।" },
      { "question": "সূক্ষ্মকোণের জন্য সেক্যান্ট ও কোসেক্যান্ট 1-এর বেশি কেন?", "answer": "দুটোই ত্রিভুজের সবচেয়ে দীর্ঘ বাহু অতিভুজকে লবে রাখে। সবচেয়ে দীর্ঘ বাহুকে যেকোনো ছোট বাহু দিয়ে ভাগ করলে সবসময় 1-এর ওপরের মান আসে। 3-4-5 ত্রিভুজে সেক্যান্ট 5/4 = 1.25 এবং কোসেক্যান্ট 5/3, প্রায় 1.6667।" },
      { "question": "ত্রিকোণমিতিক অনুপাত থেকে কোণ কীভাবে বের করব?", "answer": "বিপরীত ত্রিকোণমিতিক ফাংশন ব্যবহার করুন: সাইন অনুপাতে আর্কসাইন, কোসাইনে আর্ককোসাইন, ট্যানজেন্টে আর্কট্যানজেন্ট। যেমন সাইন 0.6 হলে কোণ আর্কসাইন(0.6), প্রায় 36.87 ডিগ্রি। মনে রাখবেন এটি বিপরীত থেকে ভিন্ন: 1/সাইন হলো কোসেক্যান্ট, আর্কসাইন নয়।" },
      { "question": "ত্রিকোণমিতি ব্যবহার করে অনুপস্থিত বাহু কীভাবে গণনা করব?", "answer": "অনুপাত সূত্র পুনর্বিন্যাস করুন। পরিচিত কোণ ও অতিভুজ নিয়ে বিপরীত বাহু হলো অতিভুজ গুণ কোণের সাইন, এবং সংলগ্ন বাহু হলো অতিভুজ গুণ কোসাইন। সংলগ্ন বাহু জানা থাকলে বিপরীত বাহু হলো সংলগ্ন বাহু গুণ কোণের ট্যানজেন্ট।" },
      { "question": "বিপরীত সাইন ও কোসেক্যান্টের পার্থক্য কী?", "answer": "বিপরীত সাইন (আর্কসাইন) একটি অনুপাত নিয়ে একটি কোণ ফিরিয়ে দেয়: আর্কসাইন(0.6) প্রায় 36.87 ডিগ্রি। কোসেক্যান্ট একই অনুপাত নিয়ে তার বিপরীত ফিরিয়ে দেয়: 1/0.6 প্রায় 1.6667, তখনও একটি অনুপাত। একটি সাইন ফাংশনকে বাতিল করে; অন্যটি ভগ্নাংশ উল্টায়।" },
      { "question": "আমার ত্রিকোণমিতিক গণনা কীভাবে যাচাই করব?", "answer": "চারটি যাচাই: বাহুগুলো পিথাগোরাস উপপাদ্য মেনে চলে কিনা নিশ্চিত করুন, প্রতিটি বিপরীত জোড়া গুণ করে 1 দেয় কিনা নিশ্চিত করুন, ট্যানজেন্ট সাইনকে কোসাইন দিয়ে ভাগের সমান কিনা নিশ্চিত করুন, এবং বিপরীত ফাংশন দিয়ে কোণ উদ্ধার করে দেখুন তা সূক্ষ্ম ও যুক্তিসংগত কিনা। সব যাচাইয়ে সম্মতি মানে বাহুর লেবেল সঠিক।" },
      { "question": "বাস্তব জীবনে ত্রিকোণমিতিক অনুপাত কীভাবে ব্যবহৃত হয়?", "answer": "এরা পরিমাপিত বাহুকে কোণ ও ঢালে রূপান্তর করে: উত্থান ও দূরত্ব থেকে ছাদের ঢাল, উচ্চতা ও ভিত্তি দূরত্ব থেকে মইয়ের কোণ, র‍্যাম্পের গ্রেড, ভবনের উচ্চতা কোণ, জরিপ দৃষ্টিরেখা, ক্রেন বুমের দিক ও পথের ঢাল। অনুপাত জ্যামিতি দেয়; পৃথক প্রকৌশল যাচাই নিরাপত্তা দেখে।" }
    ],
    "faqHeading": "সাধারণ প্রশ্ন",
    "relatedHeading": "সম্পর্কিত সমকোণী ত্রিভুজ ক্যালকুলেটর দেখুন",
    "relatedItems": [
      "সাইন রেশিও ক্যালকুলেটর",
      "কোসাইন অনুপাত ক্যালকুলেটর",
      "স্পর্শক অনুপাত ক্যালকুলেটর",
      "কোট্যাঞ্জেন্ট রেশিও ক্যালকুলেটর",
      "সেক্যান্ট রেশিও ক্যালকুলেটর",
      "কোসেক্যান্ট অনুপাত ক্যালকুলেটর",
      "সমকোণী ত্রিভুজ কোণ ক্যালকুলেটর",
      "কোণ ব্যবহারে সমকোণী ত্রিভুজ বাহু ক্যালকুলেটর",
      "বিশেষ সমকোণী ত্রিভুজ ক্যালকুলেটর"
    ]
  }
};
