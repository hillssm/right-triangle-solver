/**
 * cosecantGuideTranslations.batch2.ts
 * Translations of the Cosecant Ratio Calculator guide (CosecantRatioGuide.astro)
 * Batch 2: Portuguese (pt), Bengali (bn), Japanese (ja), Korean (ko), Malay (ms), Polish (pl).
 *
 * Built from the user's actual master prompt (Page 9 of 45). Follows the locked
 * translation prompt (TRANSLATION_PROMPT.md, 2026-10-30) and the batch1 structure.
 *
 * Structure per language:
 * - tocHeading, tocItems (14 entries keyed by section id)
 * - sections (14 entries: csc-intro, csc-triangle, csc-whatis, csc-formula,
 *   csc-howto, csc-examples, csc-applications, csc-angle, csc-recover,
 *   csc-mistakes, csc-verify, csc-vs, csc-faq, csc-related)
 *   Each section: h2, blocks (ordered {kind: 'p'|'h3', text}), steps, listItems,
 *   related, tables, figures (all present; empty arrays when unused).
 * - faqHeading, relatedHeading
 * - faqs (12 question/answer pairs)
 * - conclusion (h2, paragraphs)
 *
 * Formulas, KaTeX markup ([[...]] and [[[..]]]), variable names, numbers, and
 * degree values are preserved exactly as in the English source. URLs are never
 * translated. No em dashes. Formal address where the language requires it.
 */

export const COSECANT_TRANSLATIONS_BATCH2 = {
  "pt": {
    "tocHeading": "Neste Guia",
    "tocItems": {
      "csc-intro": "O que é uma calculadora de razão cossecante?",
      "csc-triangle": "Entendendo a hipotenusa e o cateto oposto",
      "csc-whatis": "Entendendo a cossecante na trigonometria",
      "csc-formula": "A fórmula da cossecante explicada passo a passo",
      "csc-howto": "Como usar a calculadora",
      "csc-examples": "Exemplos passo a passo",
      "csc-applications": "Exemplos da vida real",
      "csc-angle": "Cossecante e o tamanho do ângulo",
      "csc-recover": "Encontrando a hipotenusa com a cossecante",
      "csc-mistakes": "Erros comuns",
      "csc-verify": "Verificando seu resultado",
      "csc-vs": "Cossecante vs. outras razões",
      "csc-faq": "Perguntas frequentes",
      "csc-related": "Calculadoras relacionadas"
    },
    "sections": {
      "csc-intro": {
        "h2": "O que é uma calculadora de razão cossecante?",
        "blocks": [
          {
            "kind": "p",
            "text": "Uma calculadora de razão cossecante encontra a cossecante de um ângulo agudo de um triângulo retângulo a partir de dois comprimentos de lados: a hipotenusa [[c]] e o cateto oposto [[a]]. Ela divide o primeiro pelo segundo, obtendo [[\\csc(A)=c/a]]. A cossecante é o recíproco do seno: onde o seno dá cateto oposto sobre hipotenusa, a cossecante dá hipotenusa sobre cateto oposto, de modo que os dois valores sempre se multiplicam para dar 1."
          },
          {
            "kind": "p",
            "text": "A calculadora não precisa de nenhum ângulo de entrada nem do cateto adjacente, porque a razão [[c/a]] é totalmente determinada por esses dois comprimentos. A resposta é um número puro, sem unidades, já que centímetros divididos por centímetros se cancelam, e descreve a hipotenusa como um múltiplo do cateto oposto. Para uma hipotenusa de 5 cm e um cateto oposto de 3 cm, [[\\csc(A)=5/3\\approx1.6667]], o que significa que a hipotenusa é cerca de 1.67 vezes o cateto oposto."
          }
        ],
        "steps": [],
        "listItems": [],
        "related": [],
        "tables": [],
        "figures": []
      },
      "csc-triangle": {
        "h2": "Entendendo a hipotenusa e o cateto oposto",
        "blocks": [
          {
            "kind": "h3",
            "text": "O que é um triângulo retângulo?"
          },
          {
            "kind": "p",
            "text": "Um triângulo retângulo tem um ângulo de exatamente [[90^\\circ]], o ângulo entre duas retas perpendiculares, como uma parede encontrando um piso nivelado. A hipotenusa fica oposta a esse ângulo reto e é sempre o lado mais longo. Como os três ângulos devem somar [[180^\\circ]], os outros dois ângulos dividem exatamente 90 graus e, portanto, são ambos agudos. A cossecante pertence a essa geometria porque sua fórmula compara dois desses lados, a hipotenusa e o cateto oposto, em uma relação fixa."
          },
          {
            "kind": "h3",
            "text": "O que é o cateto oposto?"
          },
          {
            "kind": "p",
            "text": "O cateto oposto é o lado diretamente em frente ao ângulo de referência [[A]]: é o único lado do triângulo que não toca o vértice de [[A]]. Qual lado conta como oposto depende do ângulo de referência, de modo que mudar do ângulo [[A]] para o ângulo [[B]] troca os rótulos dos dois catetos. Em problemas práticos, o cateto oposto costuma representar uma altura vertical, uma diferença de elevação ou o cateto perpendicular de uma estrutura. Acertar o ângulo de referência é importante, porque o ângulo errado troca silenciosamente os catetos oposto e adjacente."
          },
          {
            "kind": "h3",
            "text": "O que é a hipotenusa?"
          },
          {
            "kind": "p",
            "text": "A hipotenusa é o lado oposto ao ângulo reto, e dois fatos a identificam em qualquer diagrama, por mais que o triângulo esteja girado: ela fica em frente ao pequeno quadrado que marca o canto de [[90^\\circ]] e é o lado mais longo. Em um triângulo válido e não degenerado, ela é estritamente mais longa que qualquer um dos catetos. Em situações reais, ela pode representar uma escada encostada em uma parede, uma distância inclinada, uma linha de visão, uma viga de telhado ou um suporte diagonal."
          },
          {
            "kind": "h3",
            "text": "O que é o cateto adjacente?"
          },
          {
            "kind": "p",
            "text": "O cateto adjacente [[b]] é o cateto que toca o ângulo [[A]] sem ser a hipotenusa. Ele não tem papel na fórmula da cossecante, por isso a calculadora nunca o pede. O lado [[b]] torna-se relevante para o cosseno, a tangente, a secante e a cotangente, então tenha-o em mente quando uma razão diferente for o objetivo."
          }
        ],
        "steps": [],
        "listItems": [],
        "related": [],
        "tables": [],
        "figures": [
          {
            "alt": "Triângulo retângulo com o ângulo A no canto inferior esquerdo, cateto oposto a em dourado, adjacente b em azul, hipotenusa c em rosa, fórmula csc(A)=c/a",
            "caption": "O ângulo A fica no canto inferior esquerdo; a cossecante usa a hipotenusa c e o cateto oposto a, não o cateto adjacente b."
          }
        ]
      },
      "csc-whatis": {
        "h2": "Entendendo a cossecante na trigonometria",
        "blocks": [
          {
            "kind": "p",
            "text": "A cossecante compara o lado inclinado completo de um triângulo retângulo com o lado oposto ao ângulo de referência:"
          },
          {
            "kind": "p",
            "text": "[[[\\csc(A)=\\frac{c}{a}]]]"
          },
          {
            "kind": "p",
            "text": "Aqui [[\\csc(A)]] é a cossecante do ângulo [[A]], [[c]] é a hipotenusa e [[a]] é o cateto oposto. A razão responde a uma pergunta: quantos comprimentos do cateto oposto cabem na hipotenusa?"
          },
          {
            "kind": "h3",
            "text": "A cossecante como recíproco do seno"
          },
          {
            "kind": "p",
            "text": "Comece com a fórmula do seno:"
          },
          {
            "kind": "p",
            "text": "[[[\\sin(A)=\\frac{a}{c}]]]"
          },
          {
            "kind": "p",
            "text": "Tomar o recíproco inverte a fração, levando a hipotenusa para o numerador e o cateto oposto para o denominador:"
          },
          {
            "kind": "p",
            "text": "[[[\\frac{1}{\\sin(A)}=\\frac{c}{a}]]]"
          },
          {
            "kind": "p",
            "text": "Como a cossecante é definida como o recíproco do seno:"
          },
          {
            "kind": "p",
            "text": "[[[\\boxed{\\csc(A)=\\frac{1}{\\sin(A)}=\\frac{c}{a}}]]]"
          },
          {
            "kind": "p",
            "text": "Uma verificação concreta torna a inversão visível. Com [[\\sin(A)=3/5=0.6]], o recíproco é [[1/0.6=5/3\\approx1.6667]], que é exatamente a cossecante. Ambos os números descrevem o mesmo triângulo a partir de pontos de vista recíprocos, e multiplicá-los sempre retorna 1."
          },
          {
            "kind": "h3",
            "text": "Por que a cossecante é maior que 1"
          },
          {
            "kind": "p",
            "text": "A hipotenusa é mais longa que o cateto oposto, logo [[c \\gt a]] e, portanto, [[c/a \\gt 1]]. Uma verificação numérica rápida: com [[c=10]] e [[a=8]], a razão é [[10/8=1.25]], acima de 1 como exigido. Para um ângulo agudo grande, o cateto oposto é quase tão longo quanto a hipotenusa, de modo que a razão fica logo acima de 1, mas nunca pode ser igual a 1 em um triângulo retângulo válido e não degenerado."
          },
          {
            "kind": "h3",
            "text": "O que significa um valor de cossecante?"
          },
          {
            "kind": "p",
            "text": "Uma cossecante de 2 significa que a hipotenusa é exatamente o dobro do cateto oposto; 1.6667 significa cerca de 1.6667 vezes. Leia o número como um multiplicador, não como um ângulo: ele não carrega graus nem metros ou pés, porque as duas unidades de lado se cancelam na divisão."
          },
          {
            "kind": "h3",
            "text": "Por que a cossecante é diferente do cosseno?"
          },
          {
            "kind": "p",
            "text": "Os nomes parecem semelhantes, mas as relações diferem:"
          },
          {
            "kind": "p",
            "text": "[[[\\cos(A)=\\frac{b}{c}]]]"
          },
          {
            "kind": "p",
            "text": "[[[\\csc(A)=\\frac{c}{a}]]]"
          },
          {
            "kind": "p",
            "text": "O cosseno compara o cateto adjacente com a hipotenusa, enquanto a cossecante compara a hipotenusa com o cateto oposto. O par a lembrar: a cossecante é o recíproco do seno, enquanto a secante é o recíproco do cosseno. Confundir as duas co-funções é um dos erros mais comuns na trigonometria."
          }
        ],
        "steps": [],
        "listItems": [],
        "related": [],
        "tables": [],
        "figures": [
          {
            "alt": "Três etapas: triângulo 3-4-5, seno 3/5=0.6, cossecante 5/3=1.6667, identidade csc(A)=1/sin(A)",
            "caption": "Seno e cossecante são recíprocos: inverter 3/5 dá 5/3, e csc(A) = 1/sin(A)."
          }
        ]
      },
      "csc-formula": {
        "h2": "A fórmula da cossecante explicada passo a passo",
        "blocks": [
          {
            "kind": "p",
            "text": "A fórmula não é arbitrária; ela decorre diretamente da definição de seno. Comece com a razão do seno:"
          },
          {
            "kind": "p",
            "text": "[[[\\sin(A)=\\frac{a}{c}]]]"
          },
          {
            "kind": "p",
            "text": "Tome o recíproco de ambos os lados. O numerador e o denominador trocam de lugar:"
          },
          {
            "kind": "p",
            "text": "[[[\\frac{1}{\\sin(A)}=\\frac{c}{a}]]]"
          },
          {
            "kind": "p",
            "text": "Como a cossecante é o recíproco do seno por definição:"
          },
          {
            "kind": "p",
            "text": "[[[\\boxed{\\csc(A)=\\frac{c}{a}}]]]"
          },
          {
            "kind": "p",
            "text": "A hipotenusa aparece no numerador porque era o denominador do seno; o cateto oposto cai para o denominador porque era o numerador do seno. Essa é toda a dedução."
          },
          {
            "kind": "h3",
            "text": "Exemplo totalmente resolvido: um triângulo 3-4-5"
          },
          {
            "kind": "p",
            "text": "Dados [[a=3\\text{ cm}]], [[b=4\\text{ cm}]], [[c=5\\text{ cm}]]:"
          },
          {
            "kind": "p",
            "text": "Passo 1: Escreva a fórmula. [[\\csc(A)=c/a]]"
          },
          {
            "kind": "p",
            "text": "Passo 2: Substitua as medidas. [[\\csc(A)=5/3]]"
          },
          {
            "kind": "p",
            "text": "Passo 3: Divida. [[\\boxed{\\csc(A)\\approx1.6667}]]"
          },
          {
            "kind": "p",
            "text": "Passo 4: Verifique usando o seno. [[\\sin(A)=3/5=0.6]], e [[1/0.6\\approx1.6667]]. Ambos os caminhos chegam ao mesmo valor porque são visões recíprocas de um mesmo triângulo. Note que 1.6667 é o decimal arredondado; [[5/3]] é a razão exata para esses comprimentos de lados."
          }
        ],
        "steps": [],
        "listItems": [],
        "related": [],
        "tables": [],
        "figures": []
      },
      "csc-howto": {
        "h2": "Como usar a calculadora de razão cossecante",
        "blocks": [
          {
            "kind": "p",
            "text": "O passo a passo abaixo corresponde à interface real desta página."
          }
        ],
        "steps": [
          "<strong>Identifique o ângulo de referência [[A]].</strong> Decida qual ângulo agudo a razão descreve, já que o cateto oposto é definido em relação a ele.",
          "<strong>Localize a hipotenusa [[c]].</strong> É o lado oposto ao ângulo reto e o lado mais longo do triângulo.",
          "<strong>Localize o cateto oposto [[a]].</strong> É o lado diretamente em frente ao ângulo [[A]].",
          "<strong>Meça ou obtenha os dois comprimentos de lados.</strong> Use uma fita métrica, um desenho ou dados fornecidos, mantendo a mesma unidade para ambos.",
          "<strong>Digite a hipotenusa no primeiro campo de entrada.</strong> Este é o maior dos dois valores.",
          "<strong>Digite o cateto oposto no segundo campo de entrada.</strong> Este é o menor dos dois valores.",
          "<strong>Selecione unidades compatíveis com os seletores de unidade.</strong> Ambos os campos devem usar a mesma unidade para que a divisão faça sentido.",
          "<strong>Confirme que ambos os valores são positivos.</strong> Comprimentos zero ou negativos não podem formar um triângulo.",
          "<strong>Verifique se a hipotenusa é mais longa que o cateto oposto.</strong> Se não for, as entradas estão trocadas ou rotuladas incorretamente.",
          "<strong>Clique em Calcular csc(A).</strong> A ferramenta divide a hipotenusa pelo cateto oposto.",
          "<strong>Leia a razão cossecante resultante.</strong> É um número adimensional que descreve a hipotenusa como um múltiplo do cateto oposto.",
          "<strong>Verifique se a resposta é maior que 1.</strong> Qualquer valor igual ou abaixo de 1 indica um erro de entrada.",
          "<strong>Use Redefinir para limpar as entradas</strong> e iniciar outro cálculo."
        ],
        "listItems": [],
        "related": [],
        "tables": [],
        "figures": []
      },
      "csc-examples": {
        "h2": "Exemplos passo a passo de cálculo da cossecante",
        "blocks": [
          {
            "kind": "p",
            "text": "Estes quatro exemplos desenvolvem a habilidade essencial antes das aplicações do mundo real. Cada um segue o mesmo padrão: escreva a fórmula, substitua, divida."
          },
          {
            "kind": "h3",
            "text": "Exemplo 1: Um triângulo retângulo 3-4-5"
          },
          {
            "kind": "p",
            "text": "Dados [[a=3\\text{ cm}]], [[b=4\\text{ cm}]], [[c=5\\text{ cm}]]:"
          },
          {
            "kind": "p",
            "text": "[[\\csc(A)=5/3]]"
          },
          {
            "kind": "p",
            "text": "[[\\boxed{\\csc(A)\\approx1.6667}]]"
          },
          {
            "kind": "p",
            "text": "A hipotenusa é aproximadamente 1.6667 vezes o cateto oposto. O cateto adjacente aparece nos dados fornecidos apenas para completar o triângulo; a fórmula o ignora."
          },
          {
            "kind": "h3",
            "text": "Exemplo 2: Um triângulo retângulo 5-12-13"
          },
          {
            "kind": "p",
            "text": "Dados [[a=5\\text{ m}]], [[b=12\\text{ m}]], [[c=13\\text{ m}]]:"
          },
          {
            "kind": "p",
            "text": "[[\\csc(A)=13/5]]"
          },
          {
            "kind": "p",
            "text": "[[\\boxed{\\csc(A)=2.6}]]"
          },
          {
            "kind": "p",
            "text": "O resultado excede 1 porque a hipotenusa é mais longa que o cateto oposto. O cateto adjacente de 12 m não é necessário para este cálculo."
          },
          {
            "kind": "h3",
            "text": "Exemplo 3: Um triângulo 30-60-90"
          },
          {
            "kind": "p",
            "text": "Para o ângulo [[A=30^\\circ]], o cateto oposto é metade da hipotenusa. Com [[a=5\\text{ cm}]] e [[c=10\\text{ cm}]]:"
          },
          {
            "kind": "p",
            "text": "[[\\csc(30^\\circ)=10/5]]"
          },
          {
            "kind": "p",
            "text": "[[\\boxed{\\csc(30^\\circ)=2}]]"
          },
          {
            "kind": "p",
            "text": "Verifique: [[\\sin(30^\\circ)=0.5]], e [[1/0.5=2]]. Este valor exato vale a pena memorizar porque o triângulo 30-60-90 aparece constantemente em problemas de geometria."
          },
          {
            "kind": "h3",
            "text": "Exemplo 4: Um triângulo com cateto oposto de 8 e hipotenusa de 10"
          },
          {
            "kind": "p",
            "text": "Dados [[a=8\\text{ m}]] e [[c=10\\text{ m}]]:"
          },
          {
            "kind": "p",
            "text": "[[\\csc(A)=10/8]]"
          },
          {
            "kind": "p",
            "text": "[[\\boxed{\\csc(A)=1.25}]]"
          },
          {
            "kind": "p",
            "text": "Esta razão fica mais próxima de 1 que o resultado 3-4-5 porque o cateto oposto é uma proporção maior da hipotenusa: 8/10 versus 3/5."
          }
        ],
        "steps": [],
        "listItems": [],
        "related": [],
        "tables": [],
        "figures": []
      },
      "csc-applications": {
        "h2": "Exemplos da vida real do uso da razão cossecante",
        "blocks": [
          {
            "kind": "p",
            "text": "A cossecante é uma razão matemática, não um número relatado por si só em um local de trabalho. Seu valor está em descrever a relação entre hipotenusa e cateto oposto, verificar cálculos e alimentar fórmulas que pedem a cossecante. Cada exemplo abaixo assume um triângulo retângulo simplificado."
          },
          {
            "kind": "h3",
            "text": "Exemplo 5: Entendendo o comprimento de uma escada em relação à sua altura"
          },
          {
            "kind": "p",
            "text": "Uma escada de 5.5 m alcança 4.5 m em uma parede vertical. A escada é a hipotenusa [[c=5.5\\text{ m}]]; o alcance é o cateto oposto [[a=4.5\\text{ m}]]."
          },
          {
            "kind": "p",
            "text": "[[\\csc(A)=5.5/4.5]], logo [[\\boxed{\\csc(A)\\approx1.2222}]]."
          },
          {
            "kind": "p",
            "text": "A escada é cerca de 1.2222 vezes a altura vertical, e [[c=a\\times\\csc(A)]] recupera o comprimento da escada a partir da altura. Esta razão descreve apenas a geometria, não a segurança da escada."
          },
          {
            "kind": "h3",
            "text": "Exemplo 6: Calculando a razão cossecante de uma viga de telhado"
          },
          {
            "kind": "p",
            "text": "Uma viga de telhado de 6.5 m tem uma elevação vertical de 4 m: a viga é a hipotenusa inclinada [[c=6.5\\text{ m}]]; a elevação é o cateto oposto [[a=4\\text{ m}]]."
          },
          {
            "kind": "p",
            "text": "[[\\csc(A)=6.5/4]], logo [[\\boxed{\\csc(A)=1.625}]]."
          },
          {
            "kind": "p",
            "text": "A viga é 1.625 vezes a elevação vertical. Este cálculo não verifica a adequação estrutural nem a conformidade do projeto do telhado."
          },
          {
            "kind": "h3",
            "text": "Exemplo 7: Avaliando a razão cossecante de uma rampa"
          },
          {
            "kind": "p",
            "text": "Uma rampa tem um comprimento inclinado de 9.5 m e uma elevação vertical de 0.75 m: [[c=9.5\\text{ m}]] e [[a=0.75\\text{ m}]]."
          },
          {
            "kind": "p",
            "text": "[[\\csc(A)=9.5/0.75]], logo [[\\boxed{\\csc(A)\\approx12.6667}]]."
          },
          {
            "kind": "p",
            "text": "A razão é grande porque o comprimento inclinado é muito maior que a elevação vertical, como deve ser em uma rampa suave. A razão por si só não determina a acessibilidade nem a conformidade com o código de construção."
          },
          {
            "kind": "h3",
            "text": "Exemplo 8: Uma linha de levantamento topográfico com diferença de elevação conhecida"
          },
          {
            "kind": "p",
            "text": "Uma medição topográfica simplificada registra uma distância em linha reta de 50 m e uma diferença vertical de 30 m: a linha reta é a hipotenusa [[c=50\\text{ m}]]; com a diferença vertical como cateto oposto [[a=30\\text{ m}]]."
          },
          {
            "kind": "p",
            "text": "[[\\csc(A)=50/30]], logo [[\\boxed{\\csc(A)\\approx1.6667}]]."
          },
          {
            "kind": "p",
            "text": "A distância inclinada é cerca de 1.6667 vezes a componente vertical. A topografia real pode exigir correções adicionais além deste modelo simplificado."
          },
          {
            "kind": "h3",
            "text": "Exemplo 9: Calculando a razão de um cabo de sustentação"
          },
          {
            "kind": "p",
            "text": "Um cabo de sustentação de 18 m tem uma separação vertical de 10 m entre suas extremidades: o cabo é a hipotenusa [[c=18\\text{ m}]]; a separação é o cateto oposto [[a=10\\text{ m}]]."
          },
          {
            "kind": "p",
            "text": "[[\\csc(A)=18/10]], logo [[\\boxed{\\csc(A)=1.8}]]."
          },
          {
            "kind": "p",
            "text": "O cabo é 1.8 vezes a separação vertical. A razão não determina a tensão do cabo, a resistência da âncora nem a segurança estrutural."
          },
          {
            "kind": "h3",
            "text": "Exemplo 10: Avaliando a razão da longarina de uma escada"
          },
          {
            "kind": "p",
            "text": "Uma longarina de escada simplificada de 5 m tem uma elevação vertical de 2.8 m: a longarina é a hipotenusa [[c=5\\text{ m}]]; a elevação é o cateto oposto [[a=2.8\\text{ m}]]."
          },
          {
            "kind": "p",
            "text": "[[\\csc(A)=5/2.8]], logo [[\\boxed{\\csc(A)\\approx1.7857}]]."
          },
          {
            "kind": "p",
            "text": "A diagonal é cerca de 1.7857 vezes a elevação vertical: um cálculo geométrico simplificado, não uma avaliação completa do projeto da escada."
          },
          {
            "kind": "h3",
            "text": "Exemplo 11: Um segmento de voo reto de uma aeronave"
          },
          {
            "kind": "p",
            "text": "Uma aeronave percorre 5 km em um trajeto reto enquanto ganha 1.5 km de altitude: o trajeto é a hipotenusa [[c=5\\text{ km}]]; o ganho de altitude é o cateto oposto [[a=1.5\\text{ km}]]."
          },
          {
            "kind": "p",
            "text": "[[\\csc(A)=5/1.5]], logo [[\\boxed{\\csc(A)\\approx3.3333}]]."
          },
          {
            "kind": "p",
            "text": "A distância de voo excede em muito o ganho vertical, daí a razão grande. Este é um exemplo idealizado, não uma análise completa de um trajeto de voo em mudança."
          },
          {
            "kind": "h3",
            "text": "Exemplo 12: Um suporte mecânico"
          },
          {
            "kind": "p",
            "text": "Um suporte diagonal tem 1.700 mm de comprimento com uma componente vertical de 800 mm: o suporte é a hipotenusa [[c=1700\\text{ mm}]]; a componente vertical é o cateto oposto [[a=800\\text{ mm}]]."
          },
          {
            "kind": "p",
            "text": "[[\\csc(A)=1700/800]], logo [[\\boxed{\\csc(A)=2.125}]]."
          },
          {
            "kind": "p",
            "text": "Milímetros funcionam tão bem quanto metros quando ambos os lados compartilham a unidade. A razão não estabelece a resistência do suporte."
          },
          {
            "kind": "h3",
            "text": "Exemplo 13: Uma lança de guindaste"
          },
          {
            "kind": "p",
            "text": "Uma lança de guindaste simplificada de 10 m tem uma componente vertical de 8 m: a lança é a hipotenusa [[c=10\\text{ m}]]; a componente vertical é o cateto oposto [[a=8\\text{ m}]]."
          },
          {
            "kind": "p",
            "text": "[[\\csc(A)=10/8]], logo [[\\boxed{\\csc(A)=1.25}]]."
          },
          {
            "kind": "p",
            "text": "O comprimento da lança é apenas 1.25 vezes sua componente vertical. A razão não estabelece a capacidade de elevação nem a segurança operacional."
          },
          {
            "kind": "h3",
            "text": "Exemplo 14: Uma linha de visão até o topo de uma árvore"
          },
          {
            "kind": "p",
            "text": "Uma linha de visão de 20 m até o topo de uma árvore tem uma diferença vertical de 12 m a partir do nível dos olhos do observador: a linha de visão é a hipotenusa [[c=20\\text{ m}]]; a diferença vertical é o cateto oposto [[a=12\\text{ m}]]."
          },
          {
            "kind": "p",
            "text": "[[\\csc(A)=20/12]], logo [[\\boxed{\\csc(A)\\approx1.6667}]]."
          },
          {
            "kind": "p",
            "text": "A distância de visão é cerca de 1.6667 vezes a diferença vertical. O resultado não fornece a altura total da árvore acima do solo."
          },
          {
            "kind": "h3",
            "text": "Exemplo 15: A inclinação reta de uma trilha"
          },
          {
            "kind": "p",
            "text": "Um trecho reto de trilha inclina-se por 100 m com um ganho de elevação de 80 m: a inclinação é a hipotenusa [[c=100\\text{ m}]]; o ganho é o cateto oposto [[a=80\\text{ m}]]."
          },
          {
            "kind": "p",
            "text": "[[\\csc(A)=100/80]], logo [[\\boxed{\\csc(A)=1.25}]]."
          },
          {
            "kind": "p",
            "text": "A razão fica próxima de 1 porque a componente vertical é uma grande parcela da inclinação. Trilhas reais podem ter gradientes variados."
          },
          {
            "kind": "h3",
            "text": "Exemplo 16: Um suporte de toldo"
          },
          {
            "kind": "p",
            "text": "Um suporte de toldo de 3.5 m tem uma componente vertical de 1.2 m: o suporte é a hipotenusa [[c=3.5\\text{ m}]]; a componente vertical é o cateto oposto [[a=1.2\\text{ m}]]."
          },
          {
            "kind": "p",
            "text": "[[\\csc(A)=3.5/1.2]], logo [[\\boxed{\\csc(A)\\approx2.9167}]]."
          },
          {
            "kind": "p",
            "text": "O suporte é cerca de 2.9167 vezes sua componente vertical. O resultado não estabelece a adequação estrutural."
          },
          {
            "kind": "h3",
            "text": "Exemplos práticos comparados"
          },
          {
            "kind": "p",
            "text": "O padrão é consistente: a razão é grande quando o cateto oposto é uma pequena fração da hipotenusa, e próxima de 1 quando os dois são quase iguais. Ler a cossecante como um multiplicador mantém cada resultado significativo."
          }
        ],
        "steps": [],
        "listItems": [],
        "related": [],
        "tables": [
          {
            "headers": [
              "Situação",
              "Hipotenusa c",
              "Cateto oposto a",
              "Fórmula da cossecante",
              "Razão calculada",
              "Interpretação"
            ],
            "rows": [
              ["Escada", "5.5 m", "4.5 m", "5.5/4.5", "1.2222", "A escada é 1.2222 vezes a altura"],
              ["Viga de telhado", "6.5 m", "4 m", "6.5/4", "1.625", "A viga é 1.625 vezes a elevação"],
              ["Rampa", "9.5 m", "0.75 m", "9.5/0.75", "12.6667", "A inclinação é 12.6667 vezes a elevação"],
              ["Topografia", "50 m", "30 m", "50/30", "1.6667", "A distância é 1.6667 vezes o desnível"],
              ["Cabo de sustentação", "18 m", "10 m", "18/10", "1.8", "O cabo é 1.8 vezes a separação"],
              ["Longarina de escada", "5 m", "2.8 m", "5/2.8", "1.7857", "A longarina é 1.7857 vezes a elevação"],
              ["Trecho de voo", "5 km", "1.5 km", "5/1.5", "3.3333", "O trajeto é 3.3333 vezes o ganho"],
              ["Suporte mecânico", "1700 mm", "800 mm", "1700/800", "2.125", "O suporte é 2.125 vezes a componente"],
              ["Lança de guindaste", "10 m", "8 m", "10/8", "1.25", "A lança é 1.25 vezes a componente"],
              ["Linha de visão da árvore", "20 m", "12 m", "20/12", "1.6667", "A linha de visão é 1.6667 vezes a diferença"],
              ["Inclinação da trilha", "100 m", "80 m", "100/80", "1.25", "A inclinação é 1.25 vezes o ganho"],
              ["Suporte de toldo", "3.5 m", "1.2 m", "3.5/1.2", "2.9167", "O suporte é 2.9167 vezes a componente"]
            ]
          }
        ],
        "figures": [
          {
            "alt": "Quatro painéis: escada 1.2222, viga 1.625, rampa 12.6667, topografia 1.6667, razões cossecantes com triângulos retângulos",
            "caption": "Quatro cálculos práticos: cada painel mostra o triângulo, a fórmula e a razão."
          }
        ]
      },
      "csc-angle": {
        "h2": "Entendendo a relação entre a cossecante e o tamanho do ângulo",
        "blocks": [
          {
            "kind": "p",
            "text": "A cossecante se move na direção oposta à do ângulo. Quando o ângulo agudo é pequeno, o cateto oposto é curto em relação à hipotenusa, de modo que [[c/a]] é grande. À medida que o ângulo cresce, o cateto oposto se alonga em direção à hipotenusa e a razão diminui. Os valores de referência verificados abaixo mostram o padrão:"
          },
          {
            "kind": "p",
            "text": "À medida que o ângulo se aproxima de [[90^\\circ]], o cateto oposto se aproxima da hipotenusa e a razão se aproxima de 1, permanecendo acima de 1 para todo triângulo retângulo válido e não degenerado. A linha de 90 graus é apenas uma referência limite, já que o ângulo [[A]] deve ser agudo. À medida que o ângulo se aproxima de [[0^\\circ]], o cateto oposto encolhe em direção a zero e a razão cresce sem limite. Uma razão próxima de 1 indica um ângulo agudo relativamente grande; uma razão grande indica um ângulo relativamente pequeno."
          },
          {
            "kind": "p",
            "text": "A calculadora não aceita um ângulo como entrada; ela calcula a razão a partir dos dois comprimentos de lados. Esses valores de referência servem como orientação e como valores de verificação ao conferir um resultado."
          }
        ],
        "steps": [],
        "listItems": [],
        "related": [],
        "tables": [
          {
            "headers": [
              "Ângulo A",
              "Seno sin(A)",
              "Cossecante csc(A)"
            ],
            "rows": [
              ["30 graus", "0.5", "2"],
              ["45 graus", "0.7071", "1.4142"],
              ["60 graus", "0.8660", "1.1547"],
              ["90 graus", "1", "1, como valor limite"]
            ]
          }
        ],
        "figures": [
          {
            "alt": "Três triângulos a 30, 45 e 60 graus com valores de cossecante 2, 1.4142 e 1.1547; a razão cai à medida que o ângulo cresce",
            "caption": "À medida que o cateto oposto se torna uma parcela maior da hipotenusa, csc(A) se aproxima de 1."
          }
        ]
      },
      "csc-recover": {
        "h2": "Usando a cossecante para encontrar a hipotenusa",
        "blocks": [
          {
            "kind": "p",
            "text": "A fórmula se rearranja de forma simples. Comece com:"
          },
          {
            "kind": "p",
            "text": "[[[\\csc(A)=\\frac{c}{a}]]]"
          },
          {
            "kind": "p",
            "text": "Multiplique ambos os lados por [[a]]:"
          },
          {
            "kind": "p",
            "text": "[[[\\boxed{c=a\\times\\csc(A)}]]]"
          },
          {
            "kind": "p",
            "text": "A hipotenusa é o cateto oposto multiplicado pela razão cossecante. Com [[a=6\\text{ m}]] e [[\\csc(A)=2.5]]:"
          },
          {
            "kind": "p",
            "text": "[[c=6\\times2.5]]"
          },
          {
            "kind": "p",
            "text": "[[\\boxed{c=15\\text{ m}}]]"
          },
          {
            "kind": "p",
            "text": "O resultado é mais longo que o cateto oposto, como toda hipotenusa deve ser."
          },
          {
            "kind": "h3",
            "text": "Como recuperar o cateto oposto"
          },
          {
            "kind": "p",
            "text": "Isolando [[a]] em vez disso, obtém-se:"
          },
          {
            "kind": "p",
            "text": "[[[\\boxed{a=\\frac{c}{\\csc(A)}}]]]"
          },
          {
            "kind": "p",
            "text": "Com [[c=12\\text{ m}]] e [[\\csc(A)=2]]:"
          },
          {
            "kind": "p",
            "text": "[[a=12/2]]"
          },
          {
            "kind": "p",
            "text": "[[\\boxed{a=6\\text{ m}}]]"
          },
          {
            "kind": "p",
            "text": "Estes são rearranjos matemáticos da mesma razão. A calculadora desta página calcula a própria razão; ela não oferece modos separados de encontrar a hipotenusa ou o cateto oposto."
          }
        ],
        "steps": [],
        "listItems": [],
        "related": [],
        "tables": [],
        "figures": []
      },
      "csc-mistakes": {
        "h2": "Erros comuns ao calcular a cossecante",
        "blocks": [
          {
            "kind": "h3",
            "text": "Errado versus correto"
          },
          {
            "kind": "p",
            "text": "Dados [[c=5]] e [[a=3]]:"
          },
          {
            "kind": "p",
            "text": "Incorreto: [[3/5=0.6]]. Esta é a razão do seno, não a razão da cossecante."
          },
          {
            "kind": "p",
            "text": "Correto: [[\\csc(A)=5/3\\approx1.6667]]."
          },
          {
            "kind": "p",
            "text": "Verifique: [[\\csc(A)=1/\\sin(A)]], e [[1/0.6\\approx1.6667]]."
          }
        ],
        "steps": [],
        "listItems": [
          "<strong>Confundir a cossecante com o seno.</strong> O seno é [[a/c]]; a cossecante é [[c/a]]. O que dá errado: relatar 0.6 para um triângulo 3-4-5. Correção: coloque a hipotenusa em cima.",
          "<strong>Inverter a fórmula para [[a/c]] em vez de [[c/a]].</strong> O que dá errado: a resposta é o seno, sempre abaixo de 1. Correção: verifique se o lado mais longo está no numerador.",
          "<strong>Confundir a cossecante com a secante.</strong> A secante é [[c/b]], o recíproco do cosseno. O que dá errado: usar o cateto adjacente. Correção: a cossecante combina com o seno e o cateto oposto.",
          "<strong>Usar o cateto adjacente em vez do cateto oposto.</strong> O que dá errado: calcular [[c/b]] por engano. Correção: confirme o lado em frente ao ângulo [[A]] antes de dividir.",
          "<strong>Supor que a cossecante é medida em graus.</strong> O que dá errado: escrever 1.6667 graus. Correção: a razão é um número puro, não um ângulo.",
          "<strong>Relatar uma razão cossecante com metros ou centímetros.</strong> O que dá errado: as unidades já foram canceladas. Correção: retire a unidade da resposta.",
          "<strong>Aceitar um resultado menor que 1 para um triângulo válido.</strong> O que dá errado: confiar em um cálculo com entradas trocadas. Correção: um resultado válido sempre excede 1.",
          "<strong>Digitar uma hipotenusa mais curta que o cateto oposto.</strong> O que dá errado: as entradas descrevem um triângulo impossível. Correção: o campo da hipotenusa deve conter a medida mais longa.",
          "<strong>Digitar comprimentos de lados zero ou negativos.</strong> O que dá errado: divisão por zero ou uma razão negativa sem sentido. Correção: use apenas comprimentos positivos.",
          "<strong>Misturar unidades de medida.</strong> O que dá errado: centímetros divididos por metros distorcem a razão por um fator de 100. Correção: converta ambos os lados para uma unidade antes.",
          "<strong>Arredondar cedo demais.</strong> O que dá errado: arredondar [[5/3]] para 1.67 antes de multiplicar de volta adiciona erro evitável. Correção: mantenha a fração ou dígitos extras até a etapa final.",
          "<strong>Confundir o ângulo de referência com o outro ângulo agudo.</strong> O que dá errado: os rótulos de oposto e adjacente se trocam. Correção: marque o ângulo [[A]] no diagrama primeiro.",
          "<strong>Supor que uma razão cossecante grande é um ângulo.</strong> O que dá errado: ler 12.6667 como graus. Correção: é um multiplicador, de modo que a hipotenusa é 12.6667 vezes o cateto oposto.",
          "<strong>Supor que a cossecante sozinha determina a hipotenusa.</strong> O que dá errado: esperar que um número produza um comprimento. Correção: a razão precisa do cateto oposto também, via [[c=a\\times\\csc(A)]].",
          "<strong>Confundir o recíproco do seno com o recíproco do cosseno.</strong> O que dá errado: usar a secante onde a cossecante deveria estar. Correção: o seno combina com a cossecante; o cosseno combina com a secante."
        ],
        "related": [],
        "tables": [],
        "figures": []
      },
      "csc-verify": {
        "h2": "Como verificar se seu resultado da cossecante é válido",
        "blocks": [
          {
            "kind": "p",
            "text": "Um triângulo retângulo válido e não degenerado exige:"
          },
          {
            "kind": "p",
            "text": "[[[c \\gt a \\gt 0]]]"
          },
          {
            "kind": "p",
            "text": "Portanto [[c/a \\gt 1]]. Ambas as medidas devem usar unidades compatíveis, e a razão calculada deve exceder 1. Um resultado de exatamente 1 é apenas um valor limite à medida que o ângulo agudo se aproxima de 90 graus, não um resultado para um triângulo genuíno. Uma razão abaixo de 1 geralmente indica entradas invertidas, um rótulo de lado incorreto ou medidas incompatíveis."
          },
          {
            "kind": "h3",
            "text": "Método 1: Verifique o recíproco do seno"
          },
          {
            "kind": "p",
            "text": "Calcule [[\\sin(A)=a/c]], depois [[\\csc(A)=1/\\sin(A)]]. Para o triângulo 3-4-5, [[\\sin(A)=3/5=0.6]] e [[1/0.6\\approx1.6667]], correspondendo à divisão direta."
          },
          {
            "kind": "h3",
            "text": "Método 2: Verifique o teorema de Pitágoras"
          },
          {
            "kind": "p",
            "text": "Se o cateto adjacente for conhecido ou necessário, verifique [[b=\\sqrt{c^2-a^2}]]. Para [[c=5]] e [[a=3]]: [[b=\\sqrt{25-9}=4]], e [[3^2+4^2=5^2]]. Isso confirma que os comprimentos dos lados formam um triângulo retângulo."
          },
          {
            "kind": "h3",
            "text": "Método 3: Verifique a razão por multiplicação"
          },
          {
            "kind": "p",
            "text": "Verifique [[a\\times\\csc(A)\\approx c]]. Para [[a=3]] e [[\\csc(A)=5/3]]: [[3\\times\\frac{5}{3}=5]]. Pequenas discrepâncias podem aparecer quando um decimal exibido foi arredondado; a fração exata as elimina."
          }
        ],
        "steps": [],
        "listItems": [],
        "related": [],
        "tables": [],
        "figures": []
      },
      "csc-vs": {
        "h2": "Cossecante vs. seno, secante e outras razões trigonométricas",
        "blocks": [
          {
            "kind": "p",
            "text": "Cada razão compara um par diferente de lados:"
          },
          {
            "kind": "p",
            "text": "Os pares recíprocos são o seno com a cossecante e o cosseno com a secante: [[\\csc(A)=1/\\sin(A)]], enquanto [[\\sec(A)=1/\\cos(A)]]. A cossecante e a secante não são intercambiáveis. O seno serve para problemas de medição direta com um cateto oposto e uma hipotenusa conhecidos; a cossecante serve para fórmulas construídas em torno do recíproco e para recuperar a hipotenusa a partir de um valor de cossecante conhecido."
          },
          {
            "kind": "p",
            "text": "Para as razões vizinhas, veja a <a href=\"/sine-ratio-calculator/\" class=\"text-primary hover:underline\">Calculadora de Razão Seno</a>, a <a href=\"/secant-ratio-calculator/\" class=\"text-primary hover:underline\">Calculadora de Razão Secante</a>, a <a href=\"/cotangent-ratio-calculator/\" class=\"text-primary hover:underline\">Calculadora de Razão Cotangente</a> e a <a href=\"/right-triangle-trig-ratios-calculator/\" class=\"text-primary hover:underline\">Calculadora de Razões Trigonométricas do Triângulo Retângulo</a>. A <a href=\"/right-triangle-side-calculator/\" class=\"text-primary hover:underline\">Calculadora de Lados do Triângulo Retângulo</a> ajuda quando o próprio comprimento de um lado é a incógnita."
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
              ["Seno", "sin(A) = a/c", "Cateto oposto com hipotenusa"],
              ["Cossecante", "csc(A) = c/a", "Hipotenusa com cateto oposto"],
              ["Cosseno", "cos(A) = b/c", "Cateto adjacente com hipotenusa"],
              ["Secante", "sec(A) = c/b", "Hipotenusa com cateto adjacente"],
              ["Tangente", "tan(A) = a/b", "Cateto oposto com cateto adjacente"],
              ["Cotangente", "cot(A) = b/a", "Cateto adjacente com cateto oposto"]
            ]
          }
        ],
        "figures": []
      },
      "csc-faq": {
        "h2": "Perguntas frequentes",
        "blocks": [],
        "steps": [],
        "listItems": [],
        "related": [],
        "tables": [],
        "figures": []
      },
      "csc-related": {
        "h2": "Explore calculadoras trigonométricas relacionadas",
        "blocks": [],
        "steps": [],
        "listItems": [],
        "related": [
          {
            "name": "Calculadora de Razões Trigonométricas do Triângulo Retângulo",
            "desc": "Calcule as seis razões trigonométricas de uma vez em um só lugar."
          },
          {
            "name": "Calculadora de Razão Seno",
            "desc": "Encontre a razão seno a partir do cateto oposto e da hipotenusa."
          },
          {
            "name": "Calculadora de Razão Secante",
            "desc": "Encontre a razão secante a partir da hipotenusa e do cateto adjacente."
          },
          {
            "name": "Calculadora de Razão Cotangente",
            "desc": "Encontre a razão cotangente a partir dos catetos adjacente e oposto."
          },
          {
            "name": "Calculadora de Lados do Triângulo Retângulo",
            "desc": "Encontre um comprimento de lado desconhecido a partir de ângulos ou do teorema de Pitágoras."
          },
          {
            "name": "Calculadora de Ângulos do Triângulo Retângulo",
            "desc": "Encontre o ângulo agudo a partir de comprimentos de lados conhecidos."
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
        "question": "Qual é a fórmula da cossecante em um triângulo retângulo?",
        "answer": "A fórmula é csc(A) = c / a: divida a hipotenusa pelo lado oposto ao ângulo A. Para uma hipotenusa de 5 e um cateto oposto de 3, o resultado é 5/3, cerca de 1.6667. O mesmo valor vem da identidade recíproca csc(A) = 1 / sin(A)."
      },
      {
        "question": "Como a cossecante se relaciona com o seno?",
        "answer": "A cossecante é o recíproco do seno: csc(A) = 1 / sin(A). O seno divide o cateto oposto pela hipotenusa; a cossecante inverte essa fração. Ambos descrevem o mesmo triângulo, e o produto deles é sempre 1. Se sin(A) = 0.6, então csc(A) = 1 / 0.6, cerca de 1.6667."
      },
      {
        "question": "Por que a cossecante é maior que 1 em um triângulo retângulo válido?",
        "answer": "Em um triângulo retângulo válido e não degenerado, a hipotenusa é o lado mais longo, de modo que c excede a, e um número maior dividido por um menor positivo é sempre acima de 1. Uma razão de 1 ou menos indica entradas invertidas, um rótulo de lado errado ou medidas impossíveis."
      },
      {
        "question": "Qual é a diferença entre cossecante e secante?",
        "answer": "A cossecante divide a hipotenusa pelo cateto oposto (c/a), enquanto a secante divide a hipotenusa pelo cateto adjacente (c/b). A cossecante é o recíproco do seno; a secante é o recíproco do cosseno. Elas respondem a perguntas diferentes, de modo que trocá-las dá uma resposta errada sempre que os catetos oposto e adjacente diferem."
      },
      {
        "question": "Qual é a cossecante de um ângulo de 30 graus?",
        "answer": "A cossecante de 30 graus é exatamente 2, porque o lado oposto a 30 graus é metade da hipotenusa: c/a = 2/1 = 2. Confira: sin(30 graus) = 0.5, e 1 / 0.5 = 2. É um dos poucos valores de cossecante que vale a pena memorizar."
      },
      {
        "question": "A razão cossecante tem unidades?",
        "answer": "Não. Tanto a hipotenusa quanto o cateto oposto são medidos na mesma unidade, de modo que as unidades se cancelam durante a divisão. Sejam os lados em centímetros, metros ou milímetros, a razão cossecante é um número puro adimensional. Nunca a relate com graus, metros ou pés."
      },
      {
        "question": "A cossecante pode ser menor que 1?",
        "answer": "Não para um triângulo retângulo válido e não degenerado. Como a hipotenusa é mais longa que o cateto oposto, c/a deve exceder 1. Um resultado de 1 ou menos quase sempre significa que as duas entradas foram trocadas, de modo que a ferramenta calculou a/c (que é o seno) em vez de c/a. Verifique novamente qual medida é a hipotenusa."
      },
      {
        "question": "Como calcular a cossecante a partir dos comprimentos dos lados?",
        "answer": "Identifique a hipotenusa c e o cateto oposto a, confirme que ambos usam a mesma unidade e que c é mais longa que a, depois calcule csc(A) = c / a. Com c = 13 m e a = 5 m, a resposta é 13/5 = 2.6."
      },
      {
        "question": "Como encontrar a hipotenusa usando a cossecante?",
        "answer": "Rearranje a fórmula para c = a x csc(A). Multiplique o cateto oposto conhecido pela razão cossecante. Se a = 6 m e csc(A) = 2.5, então c = 6 x 2.5 = 15 m. O resultado é sempre mais longo que o cateto oposto, o que é uma verificação rápida da aritmética."
      },
      {
        "question": "A calculadora de cossecante precisa de um ângulo como entrada?",
        "answer": "Não. A calculadora precisa apenas de dois comprimentos de lados: a hipotenusa e o cateto oposto. A razão c/a é totalmente determinada por essas medidas, de modo que o ângulo A nunca entra no cálculo."
      },
      {
        "question": "Como a cossecante muda quando o ângulo aumenta?",
        "answer": "A cossecante diminui à medida que o ângulo agudo cresce. Um ângulo pequeno tem um cateto oposto curto em relação à hipotenusa, de modo que a razão é grande; um ângulo grande tem um cateto oposto quase tão longo quanto a hipotenusa, de modo que a razão fica logo acima de 1. Por exemplo, csc(30 graus) = 2, csc(45 graus) é cerca de 1.4142 e csc(60 graus) cerca de 1.1547."
      },
      {
        "question": "Quando devo usar a cossecante em vez do seno?",
        "answer": "Use a cossecante quando precisar de hipotenusa sobre cateto oposto: em fórmulas construídas em torno da cossecante, em trabalho com identidades recíprocas ou quando um problema fornece um valor de cossecante e pede um lado. Para problemas de medição direta, o seno costuma ser a escolha mais natural."
      }
    ],
    "conclusion": {
      "h2": "Domine a razão cossecante com confiança",
      "paragraphs": [
        "A cossecante é o seno visto do outro lado: divida a hipotenusa pelo cateto oposto, e o resultado diz quantos comprimentos do cateto oposto cabem na hipotenusa. A fórmula [[\\csc(A)=c/a]] precisa de apenas duas medidas, a resposta é sempre um número adimensional acima de 1, e a identidade recíproca [[\\csc(A)=1/\\sin(A)]] oferece uma maneira embutida de verificar cada cálculo. Seja o triângulo uma escada, uma viga ou um 3-4-5 de livro didático, o método nunca muda: identifique a hipotenusa, identifique o cateto oposto, divida e verifique. Mantenha a <a href=\"/pythagorean-theorem-calculator/\" class=\"text-primary hover:underline\">calculadora do teorema de Pitágoras</a> à mão para confirmar a geometria do triângulo, e esta página nos favoritos para cada cálculo de cossecante."
      ]
    }
  },
  "bn": {
    "tocHeading": "এই নির্দেশিকায়",
    "tocItems": {
      "csc-intro": "কোসেক্যান্ট অনুপাত ক্যালকুলেটর কী?",
      "csc-triangle": "অতিভুজ ও বিপরীত বাহু বোঝা",
      "csc-whatis": "ত্রিকোণমিতিতে কোসেক্যান্ট বোঝা",
      "csc-formula": "ধাপে ধাপে কোসেক্যান্ট সূত্র",
      "csc-howto": "ক্যালকুলেটর কীভাবে ব্যবহার করবেন",
      "csc-examples": "ধাপে ধাপে উদাহরণ",
      "csc-applications": "বাস্তব জীবনের উদাহরণ",
      "csc-angle": "কোসেক্যান্ট ও কোণের আকার",
      "csc-recover": "কোসেক্যান্ট দিয়ে অতিভুজ নির্ণয়",
      "csc-mistakes": "সাধারণ ভুল",
      "csc-verify": "আপনার ফলাফল যাচাই করুন",
      "csc-vs": "কোসেক্যান্ট বনাম অন্যান্য অনুপাত",
      "csc-faq": "সচরাচর জিজ্ঞাসিত প্রশ্ন",
      "csc-related": "সম্পর্কিত ক্যালকুলেটর"
    },
    "sections": {
      "csc-intro": {
        "h2": "কোসেক্যান্ট অনুপাত ক্যালকুলেটর কী?",
        "blocks": [
          {
            "kind": "p",
            "text": "কোসেক্যান্ট অনুপাত ক্যালকুলেটর দুটি বাহুর দৈর্ঘ্য থেকে সমকোণী ত্রিভুজের সূক্ষ্মকোণের কোসেক্যান্ট নির্ণয় করে: অতিভুজ [[c]] এবং বিপরীত বাহু [[a]]। এটি প্রথমটিকে দ্বিতীয়টি দিয়ে ভাগ করে, ফলে পাওয়া যায় [[\\csc(A)=c/a]]। কোসেক্যান্ট হলো সাইনের অন্যোন্যক: যেখানে সাইন দেয় বিপরীত বাহু ভাগ অতিভুজ, সেখানে কোসেক্যান্ট দেয় অতিভুজ ভাগ বিপরীত বাহু, তাই দুটি মানকে গুণ করলে সবসময় 1 পাওয়া যায়।"
          },
          {
            "kind": "p",
            "text": "ক্যালকুলেটরের কোনো কোণ ইনপুট বা সন্নিহিত বাহুর প্রয়োজন হয় না, কারণ অনুপাত [[c/a]] ওই দুটি দৈর্ঘ্য দিয়েই সম্পূর্ণ নির্ধারিত। উত্তরটি এককবিহীন একটি বিশুদ্ধ সংখ্যা, যেহেতু সেন্টিমিটারকে সেন্টিমিটার দিয়ে ভাগ করলে একক বাতিল হয়ে যায়, এবং এটি বিপরীত বাহুর গুণিতক হিসেবে অতিভুজকে বর্ণনা করে। 5 সেমি অতিভুজ ও 3 সেমি বিপরীত বাহুর ক্ষেত্রে, [[\\csc(A)=5/3\\approx1.6667]], অর্থাৎ অতিভুজটি বিপরীত বাহুর প্রায় 1.67 গুণ।"
          }
        ],
        "steps": [],
        "listItems": [],
        "related": [],
        "tables": [],
        "figures": []
      },
      "csc-triangle": {
        "h2": "অতিভুজ ও বিপরীত বাহু বোঝা",
        "blocks": [
          {
            "kind": "h3",
            "text": "সমকোণী ত্রিভুজ কী?"
          },
          {
            "kind": "p",
            "text": "সমকোণী ত্রিভুজের একটি কোণ ঠিক [[90^\\circ]], অর্থাৎ দুটি লম্ব রেখার মধ্যবর্তী কোণ, যেমন খাড়া দেয়াল ও সমতল মেঝের মিলন। অতিভুজটি ওই সমকোণের বিপরীতে থাকে এবং সবসময় দীর্ঘতম বাহু। তিনটি কোণের যোগফল [[180^\\circ]] হতেই হবে বলে বাকি দুটি কোণ মিলে ঠিক 90 ডিগ্রি ভাগ করে নেয়, ফলে দুটোই সূক্ষ্মকোণ। কোসেক্যান্ট এই জ্যামিতিরই অংশ, কারণ এর সূত্রে ওই বাহুগুলোর দুটিকে, অতিভুজ ও বিপরীত বাহুকে, একটি নির্দিষ্ট সম্পর্কে তুলনা করা হয়।"
          },
          {
            "kind": "h3",
            "text": "বিপরীত বাহু কী?"
          },
          {
            "kind": "p",
            "text": "বিপরীত বাহু হলো প্রসঙ্গ কোণ [[A]]-এর ঠিক বিপরীতের বাহু: এটি ত্রিভুজের একমাত্র বাহু যা [[A]]-এর শীর্ষবিন্দু স্পর্শ করে না। কোন বাহুটি বিপরীত হিসেবে গণ্য হবে তা প্রসঙ্গ কোণের ওপর নির্ভর করে, তাই কোণ [[A]] থেকে কোণ [[B]]-তে গেলে দুটি বাহুর লেবেল অদলবদল হয়ে যায়। বাস্তব সমস্যায় বিপরীত বাহু প্রায়ই খাড়া উচ্চতা, উচ্চতার পার্থক্য বা কোনো কাঠামোর লম্ব বাহু বোঝায়। প্রসঙ্গ কোণ ঠিক রাখা জরুরি, কারণ ভুল কোণ নীরবে বিপরীত ও সন্নিহিত বাহুর লেবেল বদলে দেয়।"
          },
          {
            "kind": "h3",
            "text": "অতিভুজ কী?"
          },
          {
            "kind": "p",
            "text": "অতিভুজ হলো সমকোণের বিপরীত বাহু, এবং ত্রিভুজ যেভাবেই ঘোরানো থাকুক না কেন, যেকোনো চিত্রে দুটি তথ্য একে চিনিয়ে দেয়: এটি [[90^\\circ]] কোণ চিহ্নিত করা ছোট বর্গক্ষেত্রের মুখোমুখি থাকে এবং এটি দীর্ঘতম বাহু। বৈধ, অ-অপভ্রষ্ট ত্রিভুজে এটি যেকোনো বাহুর চেয়ে কঠোরভাবে দীর্ঘ। বাস্তব পরিস্থিতিতে এটি দেয়ালে হেলানো মই, ঢালু দূরত্ব, দৃষ্টিরেখা, ছাদের র‍্যাফটার বা কর্ণাকার সাপোর্ট বোঝাতে পারে।"
          },
          {
            "kind": "h3",
            "text": "সন্নিহিত বাহু কী?"
          },
          {
            "kind": "p",
            "text": "সন্নিহিত বাহু [[b]] হলো সেই বাহু যা অতিভুজ না হয়েও কোণ [[A]]-কে স্পর্শ করে। কোসেক্যান্ট সূত্রে এর কোনো ভূমিকা নেই, তাই ক্যালকুলেটর কখনো এটি চায় না। বাহু [[b]] কোসাইন, ট্যানজেন্ট, সেক্যান্ট ও কোট্যানজেন্টের জন্য প্রাসঙ্গিক হয়, তাই ভিন্ন অনুপাত লক্ষ্য হলে এটি মনে রাখুন।"
          }
        ],
        "steps": [],
        "listItems": [],
        "related": [],
        "tables": [],
        "figures": [
          {
            "alt": "সমকোণী ত্রিভুজ, নিচে বামে কোণ A, সোনালি বিপরীত বাহু a, নীল সন্নিহিত b, গোলাপি অতিভুজ c, সূত্র csc(A)=c/a",
            "caption": "কোণ A নিচে বামে অবস্থিত; কোসেক্যান্টে অতিভুজ c ও বিপরীত বাহু a ব্যবহৃত হয়, সন্নিহিত বাহু b নয়।"
          }
        ]
      },
      "csc-whatis": {
        "h2": "ত্রিকোণমিতিতে কোসেক্যান্ট বোঝা",
        "blocks": [
          {
            "kind": "p",
            "text": "কোসেক্যান্ট একটি সমকোণী ত্রিভুজের সম্পূর্ণ ঢালু বাহুকে প্রসঙ্গ কোণের বিপরীত বাহুর সঙ্গে তুলনা করে:"
          },
          {
            "kind": "p",
            "text": "[[[\\csc(A)=\\frac{c}{a}]]]"
          },
          {
            "kind": "p",
            "text": "এখানে [[\\csc(A)]] হলো কোণ [[A]]-এর কোসেক্যান্ট, [[c]] হলো অতিভুজ এবং [[a]] হলো বিপরীত বাহু। অনুপাতটি একটি প্রশ্নের উত্তর দেয়: অতিভুজের মধ্যে কতগুলো বিপরীত বাহুর দৈর্ঘ্য ধরে?"
          },
          {
            "kind": "h3",
            "text": "সাইনের অন্যোন্যক হিসেবে কোসেক্যান্ট"
          },
          {
            "kind": "p",
            "text": "সাইনের সূত্র দিয়ে শুরু করুন:"
          },
          {
            "kind": "p",
            "text": "[[[\\sin(A)=\\frac{a}{c}]]]"
          },
          {
            "kind": "p",
            "text": "অন্যোন্যক নিলে ভগ্নাংশটি উল্টে যায়, অতিভুজ লবে ও বিপরীত বাহু হরে চলে আসে:"
          },
          {
            "kind": "p",
            "text": "[[[\\frac{1}{\\sin(A)}=\\frac{c}{a}]]]"
          },
          {
            "kind": "p",
            "text": "যেহেতু কোসেক্যান্ট সংজ্ঞা অনুযায়ী সাইনের অন্যোন্যক:"
          },
          {
            "kind": "p",
            "text": "[[[\\boxed{\\csc(A)=\\frac{1}{\\sin(A)}=\\frac{c}{a}}]]]"
          },
          {
            "kind": "p",
            "text": "একটি বাস্তব যাচাই উল্টে যাওয়াটা স্পষ্ট করে। [[\\sin(A)=3/5=0.6]] হলে অন্যোন্যকটি [[1/0.6=5/3\\approx1.6667]], যা ঠিক কোসেক্যান্ট। দুটি সংখ্যাই অন্যোন্যক দৃষ্টিকোণ থেকে একই ত্রিভুজকে বর্ণনা করে, এবং এদের গুণ করলে সবসময় 1 ফেরত আসে।"
          },
          {
            "kind": "h3",
            "text": "কোসেক্যান্ট কেন 1-এর বেশি"
          },
          {
            "kind": "p",
            "text": "অতিভুজ বিপরীত বাহুর চেয়ে দীর্ঘ, তাই [[c \\gt a]] এবং সুতরাং [[c/a \\gt 1]]। একটি দ্রুত সংখ্যাগত যাচাই: [[c=10]] ও [[a=8]] হলে অনুপাতটি [[10/8=1.25]], প্রয়োজন অনুযায়ী 1-এর ওপরে। বড় সূক্ষ্মকোণের ক্ষেত্রে বিপরীত বাহু প্রায় অতিভুজের সমান দীর্ঘ হয়, তাই অনুপাতটি 1-এর ঠিক ওপরে থাকে, তবে বৈধ, অ-অপভ্রষ্ট সমকোণী ত্রিভুজে এটি কখনোই 1-এর সমান হতে পারে না।"
          },
          {
            "kind": "h3",
            "text": "কোসেক্যান্ট মানের অর্থ কী?"
          },
          {
            "kind": "p",
            "text": "2 কোসেক্যান্টের অর্থ অতিভুজটি বিপরীত বাহুর ঠিক দ্বিগুণ; 1.6667 অর্থ প্রায় 1.6667 গুণ। সংখ্যাটিকে কোণ হিসেবে নয়, গুণক হিসেবে পড়ুন: এতে কোনো ডিগ্রি বা মিটার-ফুট থাকে না, কারণ ভাগের সময় দুটি বাহুর একক বাতিল হয়ে যায়।"
          },
          {
            "kind": "h3",
            "text": "কোসেক্যান্ট কোসাইন থেকে কেন আলাদা?"
          },
          {
            "kind": "p",
            "text": "নাম দুটি একই রকম শোনালেও সম্পর্ক আলাদা:"
          },
          {
            "kind": "p",
            "text": "[[[\\cos(A)=\\frac{b}{c}]]]"
          },
          {
            "kind": "p",
            "text": "[[[\\csc(A)=\\frac{c}{a}]]]"
          },
          {
            "kind": "p",
            "text": "কোসাইন সন্নিহিত বাহুকে অতিভুজের সঙ্গে তুলনা করে, আর কোসেক্যান্ট অতিভুজকে বিপরীত বাহুর সঙ্গে তুলনা করে। মনে রাখার জোড়া: কোসেক্যান্ট হলো সাইনের অন্যোন্যক, আর সেক্যান্ট হলো কোসাইনের অন্যোন্যক। এই দুটি সহ-ফাংশন গুলিয়ে ফেলা ত্রিকোণমিতির সবচেয়ে সাধারণ ভুলগুলোর একটি।"
          }
        ],
        "steps": [],
        "listItems": [],
        "related": [],
        "tables": [],
        "figures": [
          {
            "alt": "তিনটি ধাপ: 3-4-5 ত্রিভুজ, সাইন 3/5=0.6, কোসেক্যান্ট 5/3=1.6667, অভেদ csc(A)=1/sin(A)",
            "caption": "সাইন ও কোসেক্যান্ট অন্যোন্যক: 3/5-কে উল্টালে 5/3 পাওয়া যায়, এবং csc(A) = 1/sin(A)।"
          }
        ]
      },
      "csc-formula": {
        "h2": "ধাপে ধাপে কোসেক্যান্ট সূত্র",
        "blocks": [
          {
            "kind": "p",
            "text": "সূত্রটি খামখেয়ালি নয়; এটি সরাসরি সাইনের সংজ্ঞা থেকে আসে। সাইনের অনুপাত দিয়ে শুরু করুন:"
          },
          {
            "kind": "p",
            "text": "[[[\\sin(A)=\\frac{a}{c}]]]"
          },
          {
            "kind": "p",
            "text": "উভয় পক্ষের অন্যোন্যক নিন। লব ও হর জায়গা বদল করে:"
          },
          {
            "kind": "p",
            "text": "[[[\\frac{1}{\\sin(A)}=\\frac{c}{a}]]]"
          },
          {
            "kind": "p",
            "text": "যেহেতু সংজ্ঞা অনুযায়ী কোসেক্যান্ট সাইনের অন্যোন্যক:"
          },
          {
            "kind": "p",
            "text": "[[[\\boxed{\\csc(A)=\\frac{c}{a}}]]]"
          },
          {
            "kind": "p",
            "text": "অতিভুজ লবে আসে কারণ এটি সাইনের হর ছিল; বিপরীত বাহু হরে নেমে আসে কারণ এটি সাইনের লব ছিল। এই হলো পুরো উৎপাদন।"
          },
          {
            "kind": "h3",
            "text": "সম্পূর্ণ সমাধানকৃত উদাহরণ: একটি 3-4-5 ত্রিভুজ"
          },
          {
            "kind": "p",
            "text": "প্রদত্ত [[a=3\\text{ cm}]], [[b=4\\text{ cm}]], [[c=5\\text{ cm}]]:"
          },
          {
            "kind": "p",
            "text": "ধাপ 1: সূত্রটি লিখুন। [[\\csc(A)=c/a]]"
          },
          {
            "kind": "p",
            "text": "ধাপ 2: পরিমাপগুলো বসান। [[\\csc(A)=5/3]]"
          },
          {
            "kind": "p",
            "text": "ধাপ 3: ভাগ করুন। [[\\boxed{\\csc(A)\\approx1.6667}]]"
          },
          {
            "kind": "p",
            "text": "ধাপ 4: সাইন দিয়ে যাচাই করুন। [[\\sin(A)=3/5=0.6]], এবং [[1/0.6\\approx1.6667]]। দুটি পথই একই মানে পৌঁছায় কারণ এরা একটি ত্রিভুজের অন্যোন্যক দৃষ্টিভঙ্গি। মনে রাখবেন 1.6667 হলো আসন্ন দশমিক; [[5/3]] হলো এই বাহুর দৈর্ঘ্যগুলোর জন্য নির্ভুল অনুপাত।"
          }
        ],
        "steps": [],
        "listItems": [],
        "related": [],
        "tables": [],
        "figures": []
      },
      "csc-howto": {
        "h2": "কোসেক্যান্ট অনুপাত ক্যালকুলেটর কীভাবে ব্যবহার করবেন",
        "blocks": [
          {
            "kind": "p",
            "text": "নিচের ধাপগুলো এই পৃষ্ঠার প্রকৃত ইন্টারফেসের সঙ্গে মিলে যায়।"
          }
        ],
        "steps": [
          "<strong>প্রসঙ্গ কোণ [[A]] চিহ্নিত করুন।</strong> অনুপাতটি কোন সূক্ষ্মকোণকে বর্ণনা করে তা ঠিক করুন, কারণ বিপরীত বাহু এর সাপেক্ষেই সংজ্ঞায়িত।",
          "<strong>অতিভুজ [[c]] খুঁজুন।</strong> এটি সমকোণের বিপরীত বাহু এবং ত্রিভুজের দীর্ঘতম বাহু।",
          "<strong>বিপরীত বাহু [[a]] খুঁজুন।</strong> এটি কোণ [[A]]-এর ঠিক বিপরীতের বাহু।",
          "<strong>উভয় বাহুর দৈর্ঘ্য মাপুন বা সংগ্রহ করুন।</strong> ফিতা, অঙ্কন বা প্রদত্ত তথ্য ব্যবহার করুন, দুটির জন্য একই একক রেখে।",
          "<strong>প্রথম ইনপুট ঘরে অতিভুজ লিখুন।</strong> এটি দুটি মানের মধ্যে বড়টি।",
          "<strong>দ্বিতীয় ইনপুট ঘরে বিপরীত বাহু লিখুন।</strong> এটি দুটি মানের মধ্যে ছোটটি।",
          "<strong>একক নির্বাচক দিয়ে সামঞ্জস্যপূর্ণ একক বেছে নিন।</strong> ভাগটি অর্থবহ হতে উভয় ঘরে একই একক থাকতে হবে।",
          "<strong>নিশ্চিত করুন উভয় মান ধনাত্মক।</strong> শূন্য বা ঋণাত্মক দৈর্ঘ্য দিয়ে ত্রিভুজ গঠন সম্ভব নয়।",
          "<strong>যাচাই করুন অতিভুজ বিপরীত বাহুর চেয়ে দীর্ঘ।</strong> না হলে ইনপুটগুলো অদলবদল হয়েছে বা ভুল লেবেল দেওয়া হয়েছে।",
          "<strong>Calculate csc(A)-তে ক্লিক করুন।</strong> টুলটি অতিভুজকে বিপরীত বাহু দিয়ে ভাগ করে।",
          "<strong>ফলাফলের কোসেক্যান্ট অনুপাতটি পড়ুন।</strong> এটি এককবিহীন সংখ্যা যা বিপরীত বাহুর গুণিতক হিসেবে অতিভুজকে বর্ণনা করে।",
          "<strong>যাচাই করুন উত্তরটি 1-এর বেশি।</strong> 1 বা তার নিচে যেকোনো মান ইনপুট ত্রুটির সংকেত।",
          "<strong>ইনপুট মুছতে Reset ব্যবহার করুন</strong> এবং আরেকটি গণনা শুরু করুন।"
        ],
        "listItems": [],
        "related": [],
        "tables": [],
        "figures": []
      },
      "csc-examples": {
        "h2": "কোসেক্যান্ট গণনার ধাপে ধাপে উদাহরণ",
        "blocks": [
          {
            "kind": "p",
            "text": "বাস্তব প্রয়োগের আগে এই চারটি উদাহরণ মূল দক্ষতা গড়ে তোলে। প্রতিটি একই ধারা অনুসরণ করে: সূত্র লিখুন, মান বসান, ভাগ করুন।"
          },
          {
            "kind": "h3",
            "text": "উদাহরণ 1: একটি 3-4-5 সমকোণী ত্রিভুজ"
          },
          {
            "kind": "p",
            "text": "প্রদত্ত [[a=3\\text{ cm}]], [[b=4\\text{ cm}]], [[c=5\\text{ cm}]]:"
          },
          {
            "kind": "p",
            "text": "[[\\csc(A)=5/3]]"
          },
          {
            "kind": "p",
            "text": "[[\\boxed{\\csc(A)\\approx1.6667}]]"
          },
          {
            "kind": "p",
            "text": "অতিভুজটি বিপরীত বাহুর প্রায় 1.6667 গুণ। সন্নিহিত বাহু প্রদত্ত তথ্যে শুধু ত্রিভুজটি সম্পূর্ণ করতে এসেছে; সূত্র একে উপেক্ষা করে।"
          },
          {
            "kind": "h3",
            "text": "উদাহরণ 2: একটি 5-12-13 সমকোণী ত্রিভুজ"
          },
          {
            "kind": "p",
            "text": "প্রদত্ত [[a=5\\text{ m}]], [[b=12\\text{ m}]], [[c=13\\text{ m}]]:"
          },
          {
            "kind": "p",
            "text": "[[\\csc(A)=13/5]]"
          },
          {
            "kind": "p",
            "text": "[[\\boxed{\\csc(A)=2.6}]]"
          },
          {
            "kind": "p",
            "text": "ফলাফল 1 ছাড়িয়ে যায় কারণ অতিভুজ বিপরীত বাহুর চেয়ে দীর্ঘ। এই গণনায় 12 মিটার সন্নিহিত বাহুর প্রয়োজন নেই।"
          },
          {
            "kind": "h3",
            "text": "উদাহরণ 3: একটি 30-60-90 ত্রিভুজ"
          },
          {
            "kind": "p",
            "text": "কোণ [[A=30^\\circ]]-এর ক্ষেত্রে বিপরীত বাহু অতিভুজের অর্ধেক। [[a=5\\text{ cm}]] ও [[c=10\\text{ cm}]] নিয়ে:"
          },
          {
            "kind": "p",
            "text": "[[\\csc(30^\\circ)=10/5]]"
          },
          {
            "kind": "p",
            "text": "[[\\boxed{\\csc(30^\\circ)=2}]]"
          },
          {
            "kind": "p",
            "text": "যাচাই: [[\\sin(30^\\circ)=0.5]], এবং [[1/0.5=2]]। এই নির্ভুল মানটি মুখস্থ রাখার মতো, কারণ জ্যামিতি সমস্যায় 30-60-90 ত্রিভুজ বারবার আসে।"
          },
          {
            "kind": "h3",
            "text": "উদাহরণ 4: বিপরীত বাহু 8 ও অতিভুজ 10-এর ত্রিভুজ"
          },
          {
            "kind": "p",
            "text": "প্রদত্ত [[a=8\\text{ m}]] ও [[c=10\\text{ m}]]:"
          },
          {
            "kind": "p",
            "text": "[[\\csc(A)=10/8]]"
          },
          {
            "kind": "p",
            "text": "[[\\boxed{\\csc(A)=1.25}]]"
          },
          {
            "kind": "p",
            "text": "এই অনুপাতটি 3-4-5 ফলাফলের চেয়ে 1-এর কাছাকাছি, কারণ বিপরীত বাহু অতিভুজের একটি বড় অংশ: 3/5-এর বিপরীতে 8/10।"
          }
        ],
        "steps": [],
        "listItems": [],
        "related": [],
        "tables": [],
        "figures": []
      },
      "csc-applications": {
        "h2": "কোসেক্যান্ট অনুপাত ব্যবহারের বাস্তব উদাহরণ",
        "blocks": [
          {
            "kind": "p",
            "text": "কোসেক্যান্ট একটি গাণিতিক অনুপাত, কর্মক্ষেত্রে এককভাবে প্রতিবেদন করার মতো সংখ্যা নয়। এর মূল্য অতিভুজ-বিপরীত বাহু সম্পর্ক বর্ণনায়, গণনা যাচাইয়ে এবং কোসেক্যান্ট চাওয়া সূত্রে প্রয়োগে। নিচের প্রতিটি উদাহরণে একটি সরলীকৃত সমকোণী ত্রিভুজ ধরা হয়েছে।"
          },
          {
            "kind": "h3",
            "text": "উদাহরণ 5: মইয়ের দৈর্ঘ্য ও উচ্চতার সম্পর্ক বোঝা"
          },
          {
            "kind": "p",
            "text": "5.5 মিটার মই খাড়া দেয়ালে 4.5 মিটার পর্যন্ত পৌঁছায়। মইটি অতিভুজ [[c=5.5\\text{ m}]]; পৌঁছানোর উচ্চতা বিপরীত বাহু [[a=4.5\\text{ m}]]।"
          },
          {
            "kind": "p",
            "text": "[[\\csc(A)=5.5/4.5]], তাই [[\\boxed{\\csc(A)\\approx1.2222}]]।"
          },
          {
            "kind": "p",
            "text": "মইটি খাড়া উচ্চতার প্রায় 1.2222 গুণ, এবং [[c=a\\times\\csc(A)]] উচ্চতা থেকে মইয়ের দৈর্ঘ্য ফিরে পায়। এই অনুপাত শুধু জ্যামিতি বর্ণনা করে, মইয়ের নিরাপত্তা নয়।"
          },
          {
            "kind": "h3",
            "text": "উদাহরণ 6: ছাদের র‍্যাফটারের কোসেক্যান্ট অনুপাত গণনা"
          },
          {
            "kind": "p",
            "text": "6.5 মিটার ছাদের র‍্যাফটারের খাড়া উত্থান 4 মিটার: র‍্যাফটারটি ঢালু অতিভুজ [[c=6.5\\text{ m}]]; উত্থানটি বিপরীত বাহু [[a=4\\text{ m}]]।"
          },
          {
            "kind": "p",
            "text": "[[\\csc(A)=6.5/4]], তাই [[\\boxed{\\csc(A)=1.625}]]।"
          },
          {
            "kind": "p",
            "text": "র‍্যাফটারটি খাড়া উত্থানের 1.625 গুণ। এই গণনা কাঠামোগত উপযুক্ততা বা ছাদের নকশার মানদণ্ড যাচাই করে না।"
          },
          {
            "kind": "h3",
            "text": "উদাহরণ 7: র‍্যাম্পের কোসেক্যান্ট অনুপাত মূল্যায়ন"
          },
          {
            "kind": "p",
            "text": "একটি র‍্যাম্পের ঢালু দৈর্ঘ্য 9.5 মিটার ও খাড়া উত্থান 0.75 মিটার: [[c=9.5\\text{ m}]] এবং [[a=0.75\\text{ m}]]।"
          },
          {
            "kind": "p",
            "text": "[[\\csc(A)=9.5/0.75]], তাই [[\\boxed{\\csc(A)\\approx12.6667}]]।"
          },
          {
            "kind": "p",
            "text": "অনুপাতটি বড় কারণ ঢালু দৈর্ঘ্য খাড়া উত্থানের তুলনায় অনেক বড়, মৃদু র‍্যাম্পের যেমন হওয়া উচিত। শুধু অনুপাত দিয়ে প্রবেশযোগ্যতা বা ভবন বিধির মানদণ্ড নির্ধারিত হয় না।"
          },
          {
            "kind": "h3",
            "text": "উদাহরণ 8: জানা উচ্চতা পার্থক্যসহ জরিপ রেখা"
          },
          {
            "kind": "p",
            "text": "একটি সরলীকৃত জরিপ পরিমাপে 50 মিটার সরলরৈখিক দূরত্ব ও 30 মিটার খাড়া পার্থক্য রেকর্ড করা হয়: সরলরেখাটি অতিভুজ [[c=50\\text{ m}]]; খাড়া পার্থক্যটি বিপরীত বাহু [[a=30\\text{ m}]]।"
          },
          {
            "kind": "p",
            "text": "[[\\csc(A)=50/30]], তাই [[\\boxed{\\csc(A)\\approx1.6667}]]।"
          },
          {
            "kind": "p",
            "text": "ঢালু দূরত্বটি খাড়া উপাদানের প্রায় 1.6667 গুণ। বাস্তব জরিপে এই সরলীকৃত মডেলের বাইরে অতিরিক্ত সংশোধন লাগতে পারে।"
          },
          {
            "kind": "h3",
            "text": "উদাহরণ 9: গাই তারের অনুপাত গণনা"
          },
          {
            "kind": "p",
            "text": "18 মিটার গাই তারের প্রান্তদ্বয়ের মধ্যে খাড়া ব্যবধান 10 মিটার: তারটি অতিভুজ [[c=18\\text{ m}]]; ব্যবধানটি বিপরীত বাহু [[a=10\\text{ m}]]।"
          },
          {
            "kind": "p",
            "text": "[[\\csc(A)=18/10]], তাই [[\\boxed{\\csc(A)=1.8}]]।"
          },
          {
            "kind": "p",
            "text": "তারটি খাড়া ব্যবধানের 1.8 গুণ। অনুপাতটি তারের টান, নোঙরের শক্তি বা কাঠামোগত নিরাপত্তা নির্ধারণ করে না।"
          },
          {
            "kind": "h3",
            "text": "উদাহরণ 10: সিঁড়ির স্ট্রিংগারের অনুপাত মূল্যায়ন"
          },
          {
            "kind": "p",
            "text": "একটি সরলীকৃত 5 মিটার সিঁড়ির স্ট্রিংগারের খাড়া উত্থান 2.8 মিটার: স্ট্রিংগারটি অতিভুজ [[c=5\\text{ m}]]; উত্থানটি বিপরীত বাহু [[a=2.8\\text{ m}]]।"
          },
          {
            "kind": "p",
            "text": "[[\\csc(A)=5/2.8]], তাই [[\\boxed{\\csc(A)\\approx1.7857}]]।"
          },
          {
            "kind": "p",
            "text": "কর্ণটি খাড়া উত্থানের প্রায় 1.7857 গুণ: একটি সরলীকৃত জ্যামিতিক গণনা, সিঁড়ির নকশার সম্পূর্ণ মূল্যায়ন নয়।"
          },
          {
            "kind": "h3",
            "text": "উদাহরণ 11: বিমানের সরল উড্ডয়ন অংশ"
          },
          {
            "kind": "p",
            "text": "একটি বিমান 1.5 কিমি উচ্চতা বাড়িয়ে সরল পথে 5 কিমি যায়: পথটি অতিভুজ [[c=5\\text{ km}]]; উচ্চতা বৃদ্ধি বিপরীত বাহু [[a=1.5\\text{ km}]]।"
          },
          {
            "kind": "p",
            "text": "[[\\csc(A)=5/1.5]], তাই [[\\boxed{\\csc(A)\\approx3.3333}]]।"
          },
          {
            "kind": "p",
            "text": "উড্ডয়ন দূরত্ব খাড়া বৃদ্ধির চেয়ে অনেক বেশি, তাই অনুপাতটি বড়। এটি একটি আদর্শ উদাহরণ, পরিবর্তনশীল উড্ডয়ন পথের সম্পূর্ণ বিশ্লেষণ নয়।"
          },
          {
            "kind": "h3",
            "text": "উদাহরণ 12: একটি যান্ত্রিক ব্রেস"
          },
          {
            "kind": "p",
            "text": "একটি কর্ণাকার ব্রেস 1,700 মিমি লম্বা ও এর খাড়া উপাদান 800 মিমি: ব্রেসটি অতিভুজ [[c=1700\\text{ mm}]]; খাড়া উপাদানটি বিপরীত বাহু [[a=800\\text{ mm}]]।"
          },
          {
            "kind": "p",
            "text": "[[\\csc(A)=1700/800]], তাই [[\\boxed{\\csc(A)=2.125}]]।"
          },
          {
            "kind": "p",
            "text": "উভয় বাহু একই একক ব্যবহার করলে মিলিমিটার মিটারের মতোই কাজ করে। অনুপাতটি ব্রেসের শক্তি প্রতিষ্ঠা করে না।"
          },
          {
            "kind": "h3",
            "text": "উদাহরণ 13: একটি ক্রেন বুম"
          },
          {
            "kind": "p",
            "text": "একটি সরলীকৃত 10 মিটার ক্রেন বুমের খাড়া উপাদান 8 মিটার: বুমটি অতিভুজ [[c=10\\text{ m}]]; খাড়া উপাদানটি বিপরীত বাহু [[a=8\\text{ m}]]।"
          },
          {
            "kind": "p",
            "text": "[[\\csc(A)=10/8]], তাই [[\\boxed{\\csc(A)=1.25}]]।"
          },
          {
            "kind": "p",
            "text": "বুমের দৈর্ঘ্য এর খাড়া উপাদানের মাত্র 1.25 গুণ। অনুপাতটি উত্তোলন ক্ষমতা বা পরিচালন নিরাপত্তা প্রতিষ্ঠা করে না।"
          },
          {
            "kind": "h3",
            "text": "উদাহরণ 14: গাছের চূড়ার দিকে দৃষ্টিরেখা"
          },
          {
            "kind": "p",
            "text": "গাছের চূড়ার দিকে 20 মিটার দৃষ্টিরেখার পর্যবেক্ষকের চোখের স্তর থেকে খাড়া পার্থক্য 12 মিটার: দৃষ্টিরেখাটি অতিভুজ [[c=20\\text{ m}]]; খাড়া পার্থক্যটি বিপরীত বাহু [[a=12\\text{ m}]]।"
          },
          {
            "kind": "p",
            "text": "[[\\csc(A)=20/12]], তাই [[\\boxed{\\csc(A)\\approx1.6667}]]।"
          },
          {
            "kind": "p",
            "text": "দৃষ্টির দূরত্ব খাড়া পার্থক্যের প্রায় 1.6667 গুণ। ফলাফলটি মাটি থেকে গাছের মোট উচ্চতা দেয় না।"
          },
          {
            "kind": "h3",
            "text": "উদাহরণ 15: হাইকিং পথের সরল ঢাল"
          },
          {
            "kind": "p",
            "text": "একটি সরল হাইকিং অংশ 80 মিটার উচ্চতা বৃদ্ধি নিয়ে 100 মিটার ঢালু: ঢালটি অতিভুজ [[c=100\\text{ m}]]; বৃদ্ধিটি বিপরীত বাহু [[a=80\\text{ m}]]।"
          },
          {
            "kind": "p",
            "text": "[[\\csc(A)=100/80]], তাই [[\\boxed{\\csc(A)=1.25}]]।"
          },
          {
            "kind": "p",
            "text": "অনুপাতটি 1-এর কাছাকাছি কারণ খাড়া উপাদান ঢালের একটি বড় অংশ। প্রকৃত হাইকিং পথে ঢালের তারতম্য থাকতে পারে।"
          },
          {
            "kind": "h3",
            "text": "উদাহরণ 16: একটি শামিয়ানার সাপোর্ট"
          },
          {
            "kind": "p",
            "text": "3.5 মিটার শামিয়ানা সাপোর্টের খাড়া উপাদান 1.2 মিটার: সাপোর্টটি অতিভুজ [[c=3.5\\text{ m}]]; খাড়া উপাদানটি বিপরীত বাহু [[a=1.2\\text{ m}]]।"
          },
          {
            "kind": "p",
            "text": "[[\\csc(A)=3.5/1.2]], তাই [[\\boxed{\\csc(A)\\approx2.9167}]]।"
          },
          {
            "kind": "p",
            "text": "সাপোর্টটি এর খাড়া উপাদানের প্রায় 2.9167 গুণ। ফলাফলটি কাঠামোগত উপযুক্ততা প্রতিষ্ঠা করে না।"
          },
          {
            "kind": "h3",
            "text": "বাস্তব উদাহরণগুলোর তুলনা"
          },
          {
            "kind": "p",
            "text": "ধারাটি সামঞ্জস্যপূর্ণ: বিপরীত বাহু অতিভুজের ক্ষুদ্র ভগ্নাংশ হলে অনুপাত বড় হয়, আর দুটি প্রায় সমান হলে 1-এর কাছাকাছি থাকে। কোসেক্যান্টকে গুণক হিসেবে পড়লে প্রতিটি ফলাফল অর্থবহ থাকে।"
          }
        ],
        "steps": [],
        "listItems": [],
        "related": [],
        "tables": [
          {
            "headers": [
              "পরিস্থিতি",
              "অতিভুজ c",
              "বিপরীত বাহু a",
              "কোসেক্যান্ট সূত্র",
              "গণনাকৃত অনুপাত",
              "ব্যাখ্যা"
            ],
            "rows": [
              ["মই", "5.5 m", "4.5 m", "5.5/4.5", "1.2222", "মইটি উচ্চতার 1.2222 গুণ"],
              ["ছাদের র‍্যাফটার", "6.5 m", "4 m", "6.5/4", "1.625", "র‍্যাফটারটি উত্থানের 1.625 গুণ"],
              ["র‍্যাম্প", "9.5 m", "0.75 m", "9.5/0.75", "12.6667", "ঢালটি উত্থানের 12.6667 গুণ"],
              ["জরিপ", "50 m", "30 m", "50/30", "1.6667", "দূরত্বটি পতনের 1.6667 গুণ"],
              ["গাই তার", "18 m", "10 m", "18/10", "1.8", "তারটি ব্যবধানের 1.8 গুণ"],
              ["সিঁড়ির স্ট্রিংগার", "5 m", "2.8 m", "5/2.8", "1.7857", "স্ট্রিংগারটি উত্থানের 1.7857 গুণ"],
              ["উড্ডয়ন অংশ", "5 km", "1.5 km", "5/1.5", "3.3333", "পথটি বৃদ্ধির 3.3333 গুণ"],
              ["যান্ত্রিক ব্রেস", "1700 mm", "800 mm", "1700/800", "2.125", "ব্রেসটি উপাদানের 2.125 গুণ"],
              ["ক্রেন বুম", "10 m", "8 m", "10/8", "1.25", "বুমটি উপাদানের 1.25 গুণ"],
              ["গাছের দৃষ্টিরেখা", "20 m", "12 m", "20/12", "1.6667", "দৃষ্টিরেখাটি পার্থক্যের 1.6667 গুণ"],
              ["হাইকিং ঢাল", "100 m", "80 m", "100/80", "1.25", "ঢালটি বৃদ্ধির 1.25 গুণ"],
              ["শামিয়ানা সাপোর্ট", "3.5 m", "1.2 m", "3.5/1.2", "2.9167", "সাপোর্টটি উপাদানের 2.9167 গুণ"]
            ]
          }
        ],
        "figures": [
          {
            "alt": "চারটি প্যানেল: মই 1.2222, র‍্যাফটার 1.625, র‍্যাম্প 12.6667, জরিপ 1.6667 কোসেক্যান্ট অনুপাতসহ সমকোণী ত্রিভুজ",
            "caption": "চারটি বাস্তব গণনা: প্রতিটি প্যানেলে ত্রিভুজ, সূত্র ও অনুপাত দেখানো হয়েছে।"
          }
        ]
      },
      "csc-angle": {
        "h2": "কোসেক্যান্ট ও কোণের আকারের সম্পর্ক বোঝা",
        "blocks": [
          {
            "kind": "p",
            "text": "কোসেক্যান্ট কোণের বিপরীত দিকে চলে। সূক্ষ্মকোণ ছোট হলে অতিভুজের তুলনায় বিপরীত বাহু খাটো হয়, তাই [[c/a]] বড় হয়। কোণ বাড়ার সঙ্গে সঙ্গে বিপরীত বাহু অতিভুজের দিকে লম্বা হয়, আর অনুপাতটি সংকুচিত হয়। নিচের যাচাইকৃত প্রসঙ্গ মানগুলো ধারাটি দেখায়:"
          },
          {
            "kind": "p",
            "text": "কোণ [[90^\\circ]]-এর দিকে এগোলে বিপরীত বাহু অতিভুজের কাছাকাছি আসে এবং অনুপাতটি 1-এর দিকে যায়, প্রতিটি বৈধ, অ-অপভ্রষ্ট সমকোণী ত্রিভুজের জন্য 1-এর ওপরে থেকেই। 90-ডিগ্রির সারিটি শুধু একটি সীমান্ত প্রসঙ্গ, কারণ কোণ [[A]]-কে সূক্ষ্মকোণ হতেই হবে। কোণ [[0^\\circ]]-এর দিকে এগোলে বিপরীত বাহু শূন্যের দিকে সংকুচিত হয় এবং অনুপাতটি সীমাহীনভাবে বাড়ে। 1-এর কাছাকাছি অনুপাত অপেক্ষাকৃত বড় সূক্ষ্মকোণের সংকেত দেয়; বড় অনুপাত অপেক্ষাকৃত ছোট কোণের সংকেত দেয়।"
          },
          {
            "kind": "p",
            "text": "ক্যালকুলেটর কোণ ইনপুট নেয় না; এটি দুটি বাহুর দৈর্ঘ্য থেকে অনুপাত গণনা করে। এই প্রসঙ্গ মানগুলো দিকনির্দেশনা হিসেবে এবং ফলাফল যাচাইয়ের সময় পরীক্ষা মান হিসেবে কাজ করে।"
          }
        ],
        "steps": [],
        "listItems": [],
        "related": [],
        "tables": [
          {
            "headers": [
              "কোণ A",
              "সাইন sin(A)",
              "কোসেক্যান্ট csc(A)"
            ],
            "rows": [
              ["30 ডিগ্রি", "0.5", "2"],
              ["45 ডিগ্রি", "0.7071", "1.4142"],
              ["60 ডিগ্রি", "0.8660", "1.1547"],
              ["90 ডিগ্রি", "1", "1, সীমান্ত মান হিসেবে"]
            ]
          }
        ],
        "figures": [
          {
            "alt": "30, 45, 60 ডিগ্রিতে তিনটি ত্রিভুজ, কোসেক্যান্ট মান 2, 1.4142, 1.1547; কোণ বাড়লে অনুপাত কমে",
            "caption": "বিপরীত বাহু অতিভুজের বড় অংশ হলে csc(A) 1-এর কাছাকাছি চলে আসে।"
          }
        ]
      },
      "csc-recover": {
        "h2": "কোসেক্যান্ট ব্যবহার করে অতিভুজ নির্ণয়",
        "blocks": [
          {
            "kind": "p",
            "text": "সূত্রটি পরিষ্কারভাবে পুনর্বিন্যাস করা যায়। শুরু করুন:"
          },
          {
            "kind": "p",
            "text": "[[[\\csc(A)=\\frac{c}{a}]]]"
          },
          {
            "kind": "p",
            "text": "উভয় পক্ষকে [[a]] দিয়ে গুণ করুন:"
          },
          {
            "kind": "p",
            "text": "[[[\\boxed{c=a\\times\\csc(A)}]]]"
          },
          {
            "kind": "p",
            "text": "অতিভুজ হলো বিপরীত বাহু গুণ কোসেক্যান্ট অনুপাত। [[a=6\\text{ m}]] ও [[\\csc(A)=2.5]] নিয়ে:"
          },
          {
            "kind": "p",
            "text": "[[c=6\\times2.5]]"
          },
          {
            "kind": "p",
            "text": "[[\\boxed{c=15\\text{ m}}]]"
          },
          {
            "kind": "p",
            "text": "ফলাফলটি বিপরীত বাহুর চেয়ে দীর্ঘ, যেমন প্রতিটি অতিভুজের হতেই হয়।"
          },
          {
            "kind": "h3",
            "text": "বিপরীত বাহু কীভাবে ফিরে পাবেন"
          },
          {
            "kind": "p",
            "text": "এর বদলে [[a]]-এর জন্য সমাধান করলে পাওয়া যায়:"
          },
          {
            "kind": "p",
            "text": "[[[\\boxed{a=\\frac{c}{\\csc(A)}}]]]"
          },
          {
            "kind": "p",
            "text": "[[c=12\\text{ m}]] ও [[\\csc(A)=2]] নিয়ে:"
          },
          {
            "kind": "p",
            "text": "[[a=12/2]]"
          },
          {
            "kind": "p",
            "text": "[[\\boxed{a=6\\text{ m}}]]"
          },
          {
            "kind": "p",
            "text": "এগুলো একই অনুপাতের গাণিতিক পুনর্বিন্যাস। এই পৃষ্ঠার ক্যালকুলেটর অনুপাতটিই গণনা করে; এতে অতিভুজ-সন্ধানী বা বিপরীত বাহু-সন্ধানী আলাদা মোড নেই।"
          }
        ],
        "steps": [],
        "listItems": [],
        "related": [],
        "tables": [],
        "figures": []
      },
      "csc-mistakes": {
        "h2": "কোসেক্যান্ট গণনায় সাধারণ ভুল",
        "blocks": [
          {
            "kind": "h3",
            "text": "ভুল বনাম সঠিক"
          },
          {
            "kind": "p",
            "text": "প্রদত্ত [[c=5]] ও [[a=3]]:"
          },
          {
            "kind": "p",
            "text": "ভুল: [[3/5=0.6]]। এটি সাইনের অনুপাত, কোসেক্যান্টের নয়।"
          },
          {
            "kind": "p",
            "text": "সঠিক: [[\\csc(A)=5/3\\approx1.6667]]।"
          },
          {
            "kind": "p",
            "text": "যাচাই: [[\\csc(A)=1/\\sin(A)]], এবং [[1/0.6\\approx1.6667]]।"
          }
        ],
        "steps": [],
        "listItems": [
          "<strong>কোসেক্যান্টকে সাইনের সঙ্গে গুলিয়ে ফেলা।</strong> সাইন হলো [[a/c]]; কোসেক্যান্ট হলো [[c/a]]। যা ভুল হয়: 3-4-5 ত্রিভুজের জন্য 0.6 প্রতিবেদন করা। সমাধান: অতিভুজকে ওপরে রাখুন।",
          "<strong>সূত্রটি [[c/a]]-এর বদলে [[a/c]] করে উল্টে ফেলা।</strong> যা ভুল হয়: উত্তরটি সাইন হয়ে যায়, সবসময় 1-এর নিচে। সমাধান: যাচাই করুন দীর্ঘতর বাহুটি লবে আছে।",
          "<strong>কোসেক্যান্টকে সেক্যান্টের সঙ্গে গুলিয়ে ফেলা।</strong> সেক্যান্ট হলো [[c/b]], কোসাইনের অন্যোন্যক। যা ভুল হয়: সন্নিহিত বাহু ব্যবহার করা। সমাধান: কোসেক্যান্ট সাইন ও বিপরীত বাহুর সঙ্গে জোড় বাঁধে।",
          "<strong>বিপরীত বাহুর বদলে সন্নিহিত বাহু ব্যবহার করা।</strong> যা ভুল হয়: ভুল করে [[c/b]] গণনা করা। সমাধান: ভাগ করার আগে কোণ [[A]]-এর বিপরীত বাহুটি নিশ্চিত করুন।",
          "<strong>ধরে নেওয়া কোসেক্যান্ট ডিগ্রিতে মাপা হয়।</strong> যা ভুল হয়: 1.6667 ডিগ্রি লেখা। সমাধান: অনুপাতটি বিশুদ্ধ সংখ্যা, কোণ নয়।",
          "<strong>কোসেক্যান্ট অনুপাত মিটার বা সেন্টিমিটারে প্রতিবেদন করা।</strong> যা ভুল হয়: এককগুলো আগেই বাতিল হয়ে গেছে। সমাধান: উত্তর থেকে একক বাদ দিন।",
          "<strong>বৈধ ত্রিভুজের জন্য 1-এর কম ফলাফল মেনে নেওয়া।</strong> যা ভুল হয়: অদলবদল করা ইনপুটের গণনায় আস্থা রাখা। সমাধান: বৈধ ফলাফল সবসময় 1 ছাড়ায়।",
          "<strong>বিপরীত বাহুর চেয়ে খাটো অতিভুজ লেখা।</strong> যা ভুল হয়: ইনপুটগুলো অসম্ভব ত্রিভুজ বর্ণনা করে। সমাধান: অতিভুজের ঘরে দীর্ঘতর পরিমাপটি থাকতে হবে।",
          "<strong>শূন্য বা ঋণাত্মক বাহুর দৈর্ঘ্য লেখা।</strong> যা ভুল হয়: শূন্য দিয়ে ভাগ বা অর্থহীন ঋণাত্মক অনুপাত। সমাধান: শুধু ধনাত্মক দৈর্ঘ্য ব্যবহার করুন।",
          "<strong>পরিমাপের একক মেশানো।</strong> যা ভুল হয়: সেন্টিমিটারকে মিটার দিয়ে ভাগ করলে অনুপাত 100 গুণ বেঁকে যায়। সমাধান: আগে উভয় বাহুকে এক এককে রূপান্তর করুন।",
          "<strong>আগে ভাগে আসন্ন করা।</strong> যা ভুল হয়: ফিরে গুণ করার আগে [[5/3]]-কে 1.67-এ আসন্ন করলে এড়ানো যায় এমন ত্রুটি যোগ হয়। সমাধান: শেষ ধাপ পর্যন্ত ভগ্নাংশ বা অতিরিক্ত অঙ্ক রাখুন।",
          "<strong>প্রসঙ্গ কোণকে অন্য সূক্ষ্মকোণের সঙ্গে গুলিয়ে ফেলা।</strong> যা ভুল হয়: বিপরীত ও সন্নিহিত লেবেল অদলবদল হয়ে যায়। সমাধান: আগে চিত্রে কোণ [[A]] চিহ্নিত করুন।",
          "<strong>ধরে নেওয়া বড় কোসেক্যান্ট অনুপাত একটি কোণ।</strong> যা ভুল হয়: 12.6667-কে ডিগ্রি হিসেবে পড়া। সমাধান: এটি একটি গুণক, তাই অতিভুজ বিপরীত বাহুর 12.6667 গুণ।",
          "<strong>ধরে নেওয়া কোসেক্যান্ট একাই অতিভুজ নির্ধারণ করে।</strong> যা ভুল হয়: একটি সংখ্যা থেকে দৈর্ঘ্য পাওয়ার আশা করা। সমাধান: অনুপাতের [[c=a\\times\\csc(A)]] মাধ্যমে বিপরীত বাহুটিও দরকার।",
          "<strong>সাইনের অন্যোন্যককে কোসাইনের অন্যোন্যকের সঙ্গে গুলিয়ে ফেলা।</strong> যা ভুল হয়: কোসেক্যান্টের জায়গায় সেক্যান্ট ব্যবহার করা। সমাধান: সাইন কোসেক্যান্টের সঙ্গে জোড় বাঁধে; কোসাইন সেক্যান্টের সঙ্গে।"
        ],
        "related": [],
        "tables": [],
        "figures": []
      },
      "csc-verify": {
        "h2": "আপনার কোসেক্যান্ট ফলাফল বৈধ কিনা যাচাই করবেন",
        "blocks": [
          {
            "kind": "p",
            "text": "বৈধ, অ-অপভ্রষ্ট সমকোণী ত্রিভুজের জন্য প্রয়োজন:"
          },
          {
            "kind": "p",
            "text": "[[[c \\gt a \\gt 0]]]"
          },
          {
            "kind": "p",
            "text": "সুতরাং [[c/a \\gt 1]]। উভয় পরিমাপে সামঞ্জস্যপূর্ণ একক ব্যবহার করতে হবে, এবং গণনাকৃত অনুপাত 1 ছাড়াতে হবে। ঠিক 1 ফলাফল শুধু সূক্ষ্মকোণ 90 ডিগ্রির দিকে এগোলে একটি সীমান্ত মান, প্রকৃত ত্রিভুজের ফলাফল নয়। 1-এর নিচে অনুপাত সাধারণত উল্টানো ইনপুট, ভুল বাহুর লেবেল বা অসামঞ্জস্যপূর্ণ পরিমাপ নির্দেশ করে।"
          },
          {
            "kind": "h3",
            "text": "পদ্ধতি 1: সাইনের অন্যোন্যক যাচাই করুন"
          },
          {
            "kind": "p",
            "text": "[[\\sin(A)=a/c]] গণনা করুন, তারপর [[\\csc(A)=1/\\sin(A)]]। 3-4-5 ত্রিভুজের জন্য [[\\sin(A)=3/5=0.6]] ও [[1/0.6\\approx1.6667]], সরাসরি ভাগের সঙ্গে মিলে যায়।"
          },
          {
            "kind": "h3",
            "text": "পদ্ধতি 2: পিথাগোরাসের উপপাদ্য যাচাই করুন"
          },
          {
            "kind": "p",
            "text": "সন্নিহিত বাহু জানা থাকলে বা দরকার হলে [[b=\\sqrt{c^2-a^2}]] যাচাই করুন। [[c=5]] ও [[a=3]]-এর জন্য: [[b=\\sqrt{25-9}=4]], এবং [[3^2+4^2=5^2]]। এটি নিশ্চিত করে বাহুর দৈর্ঘ্যগুলো একটি সমকোণী ত্রিভুজ গঠন করে।"
          },
          {
            "kind": "h3",
            "text": "পদ্ধতি 3: গুণ করে অনুপাত যাচাই করুন"
          },
          {
            "kind": "p",
            "text": "[[a\\times\\csc(A)\\approx c]] যাচাই করুন। [[a=3]] ও [[\\csc(A)=5/3]]-এর জন্য: [[3\\times\\frac{5}{3}=5]]। প্রদর্শিত দশমিক আসন্ন করা হলে ছোট অমিল দেখা দিতে পারে; নির্ভুল ভগ্নাংশ সেগুলো দূর করে।"
          }
        ],
        "steps": [],
        "listItems": [],
        "related": [],
        "tables": [],
        "figures": []
      },
      "csc-vs": {
        "h2": "কোসেক্যান্ট বনাম সাইন, সেক্যান্ট ও অন্যান্য ত্রিকোণমিতিক অনুপাত",
        "blocks": [
          {
            "kind": "p",
            "text": "প্রতিটি অনুপাত বাহুর একটি ভিন্ন জোড়া তুলনা করে:"
          },
          {
            "kind": "p",
            "text": "অন্যোন্যক জোড়াগুলো হলো সাইনের সঙ্গে কোসেক্যান্ট এবং কোসাইনের সঙ্গে সেক্যান্ট: [[\\csc(A)=1/\\sin(A)]], যেখানে [[\\sec(A)=1/\\cos(A)]]। কোসেক্যান্ট ও সেক্যান্ট পরস্পর বদলানো যায় না। জানা বিপরীত বাহু ও অতিভুজ নিয়ে সরাসরি পরিমাপ সমস্যায় সাইন উপযুক্ত; অন্যোন্যককে ঘিরে গড়া সূত্রে এবং জানা কোসেক্যান্ট মান থেকে অতিভুজ ফিরে পেতে কোসেক্যান্ট উপযুক্ত।"
          },
          {
            "kind": "p",
            "text": "প্রতিবেশী অনুপাতগুলোর জন্য দেখুন <a href=\"/sine-ratio-calculator/\" class=\"text-primary hover:underline\">সাইন অনুপাত ক্যালকুলেটর</a>, <a href=\"/secant-ratio-calculator/\" class=\"text-primary hover:underline\">সেক্যান্ট অনুপাত ক্যালকুলেটর</a>, <a href=\"/cotangent-ratio-calculator/\" class=\"text-primary hover:underline\">কোট্যানজেন্ট অনুপাত ক্যালকুলেটর</a> এবং <a href=\"/right-triangle-trig-ratios-calculator/\" class=\"text-primary hover:underline\">সমকোণী ত্রিভুজ ত্রিকোণমিতিক অনুপাত ক্যালকুলেটর</a>। বাহুর দৈর্ঘ্যই অজানা থাকলে <a href=\"/right-triangle-side-calculator/\" class=\"text-primary hover:underline\">সমকোণী ত্রিভুজ বাহু ক্যালকুলেটর</a> সাহায্য করে।"
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
              "এটি কী তুলনা করে"
            ],
            "rows": [
              ["সাইন", "sin(A) = a/c", "বিপরীত বাহু বনাম অতিভুজ"],
              ["কোসেক্যান্ট", "csc(A) = c/a", "অতিভুজ বনাম বিপরীত বাহু"],
              ["কোসাইন", "cos(A) = b/c", "সন্নিহিত বাহু বনাম অতিভুজ"],
              ["সেক্যান্ট", "sec(A) = c/b", "অতিভুজ বনাম সন্নিহিত বাহু"],
              ["ট্যানজেন্ট", "tan(A) = a/b", "বিপরীত বাহু বনাম সন্নিহিত বাহু"],
              ["কোট্যানজেন্ট", "cot(A) = b/a", "সন্নিহিত বাহু বনাম বিপরীত বাহু"]
            ]
          }
        ],
        "figures": []
      },
      "csc-faq": {
        "h2": "সচরাচর জিজ্ঞাসিত প্রশ্ন",
        "blocks": [],
        "steps": [],
        "listItems": [],
        "related": [],
        "tables": [],
        "figures": []
      },
      "csc-related": {
        "h2": "সম্পর্কিত ত্রিকোণমিতিক ক্যালকুলেটর দেখুন",
        "blocks": [],
        "steps": [],
        "listItems": [],
        "related": [
          {
            "name": "সমকোণী ত্রিভুজ ত্রিকোণমিতিক অনুপাত ক্যালকুলেটর",
            "desc": "এক জায়গায় একসঙ্গে ছয়টি ত্রিকোণমিতিক অনুপাত গণনা করুন।"
          },
          {
            "name": "সাইন অনুপাত ক্যালকুলেটর",
            "desc": "বিপরীত বাহু ও অতিভুজ থেকে সাইন অনুপাত নির্ণয় করুন।"
          },
          {
            "name": "সেক্যান্ট অনুপাত ক্যালকুলেটর",
            "desc": "অতিভুজ ও সন্নিহিত বাহু থেকে সেক্যান্ট অনুপাত নির্ণয় করুন।"
          },
          {
            "name": "কোট্যানজেন্ট অনুপাত ক্যালকুলেটর",
            "desc": "সন্নিহিত ও বিপরীত বাহু থেকে কোট্যানজেন্ট অনুপাত নির্ণয় করুন।"
          },
          {
            "name": "সমকোণী ত্রিভুজ বাহু ক্যালকুলেটর",
            "desc": "কোণ বা পিথাগোরাসের উপপাদ্য থেকে অজানা বাহুর দৈর্ঘ্য নির্ণয় করুন।"
          },
          {
            "name": "সমকোণী ত্রিভুজ কোণ ক্যালকুলেটর",
            "desc": "জানা বাহুর দৈর্ঘ্য থেকে সূক্ষ্মকোণ নির্ণয় করুন।"
          }
        ],
        "tables": [],
        "figures": []
      }
    },
    "faqHeading": "সচরাচর জিজ্ঞাসিত প্রশ্ন",
    "relatedHeading": "সম্পর্কিত ত্রিকোণমিতিক ক্যালকুলেটর দেখুন",
    "faqs": [
      {
        "question": "সমকোণী ত্রিভুজে কোসেক্যান্টের সূত্র কী?",
        "answer": "সূত্রটি csc(A) = c / a: অতিভুজকে কোণ A-এর বিপরীত বাহু দিয়ে ভাগ করুন। অতিভুজ 5 ও বিপরীত বাহু 3 হলে ফলাফল 5/3, প্রায় 1.6667। একই মান আসে অন্যোন্যক অভেদ csc(A) = 1 / sin(A) থেকে।"
      },
      {
        "question": "কোসেক্যান্ট সাইনের সঙ্গে কীভাবে সম্পর্কিত?",
        "answer": "কোসেক্যান্ট সাইনের অন্যোন্যক: csc(A) = 1 / sin(A)। সাইন বিপরীত বাহুকে অতিভুজ দিয়ে ভাগ করে; কোসেক্যান্ট ওই ভগ্নাংশটি উল্টে দেয়। দুটোই একই ত্রিভুজ বর্ণনা করে, এবং এদের গুণফল সবসময় 1। sin(A) = 0.6 হলে csc(A) = 1 / 0.6, প্রায় 1.6667।"
      },
      {
        "question": "বৈধ সমকোণী ত্রিভুজে কোসেক্যান্ট কেন 1-এর বেশি?",
        "answer": "বৈধ, অ-অপভ্রষ্ট সমকোণী ত্রিভুজে অতিভুজ দীর্ঘতম বাহু, তাই c, a-কে ছাড়িয়ে যায়, এবং বড় ধনাত্মক সংখ্যাকে ছোট ধনাত্মক সংখ্যা দিয়ে ভাগ করলে সবসময় 1-এর ওপরে হয়। 1 বা তার কম অনুপাত উল্টানো ইনপুট, ভুল বাহুর লেবেল বা অসম্ভব পরিমাপের সংকেত দেয়।"
      },
      {
        "question": "কোসেক্যান্ট ও সেক্যান্টের মধ্যে পার্থক্য কী?",
        "answer": "কোসেক্যান্ট অতিভুজকে বিপরীত বাহু দিয়ে ভাগ করে (c/a), আর সেক্যান্ট অতিভুজকে সন্নিহিত বাহু দিয়ে ভাগ করে (c/b)। কোসেক্যান্ট সাইনের অন্যোন্যক; সেক্যান্ট কোসাইনের অন্যোন্যক। এরা ভিন্ন প্রশ্নের উত্তর দেয়, তাই বিপরীত ও সন্নিহিত বাহু ভিন্ন হলে এদের অদলবদলে ভুল উত্তর আসে।"
      },
      {
        "question": "30 ডিগ্রি কোণের কোসেক্যান্ট কত?",
        "answer": "30 ডিগ্রির কোসেক্যান্ট ঠিক 2, কারণ 30 ডিগ্রির বিপরীত বাহু অতিভুজের অর্ধেক: c/a = 2/1 = 2। যাচাই: sin(30 ডিগ্রি) = 0.5, এবং 1 / 0.5 = 2। মুখস্থ রাখার মতো অল্প কয়েকটি কোসেক্যান্ট মানের এটি একটি।"
      },
      {
        "question": "কোসেক্যান্ট অনুপাতের কি একক আছে?",
        "answer": "না। অতিভুজ ও বিপরীত বাহু দুটোই একই এককে মাপা হয়, তাই ভাগের সময় একক বাতিল হয়ে যায়। বাহুগুলো সেন্টিমিটার, মিটার বা মিলিমিটারে যাই হোক, কোসেক্যান্ট অনুপাত একটি বিশুদ্ধ এককবিহীন সংখ্যা। একে কখনো ডিগ্রি, মিটার বা ফুটসহ প্রতিবেদন করবেন না।"
      },
      {
        "question": "কোসেক্যান্ট কি 1-এর কম হতে পারে?",
        "answer": "বৈধ, অ-অপভ্রষ্ট সমকোণী ত্রিভুজের জন্য নয়। যেহেতু অতিভুজ বিপরীত বাহুর চেয়ে দীর্ঘ, c/a-কে 1 ছাড়াতেই হবে। 1 বা তার কম ফলাফলের প্রায় সবসময় অর্থ দুটি ইনপুট অদলবদল হয়েছে, ফলে টুলটি c/a-এর বদলে a/c (যা সাইন) গণনা করেছে। কোন পরিমাপটি অতিভুজ তা আবার যাচাই করুন।"
      },
      {
        "question": "বাহুর দৈর্ঘ্য থেকে কোসেক্যান্ট কীভাবে গণনা করবেন?",
        "answer": "অতিভুজ c ও বিপরীত বাহু a চিহ্নিত করুন, নিশ্চিত করুন দুটো একই একক ব্যবহার করে এবং c, a-এর চেয়ে দীর্ঘ, তারপর csc(A) = c / a গণনা করুন। c = 13 মি ও a = 5 মি হলে উত্তর 13/5 = 2.6।"
      },
      {
        "question": "কোসেক্যান্ট ব্যবহার করে অতিভুজ কীভাবে নির্ণয় করবেন?",
        "answer": "সূত্রটি c = a x csc(A) আকারে সাজান। জানা বিপরীত বাহুকে কোসেক্যান্ট অনুপাত দিয়ে গুণ করুন। a = 6 মি ও csc(A) = 2.5 হলে c = 6 x 2.5 = 15 মি। ফলাফল সবসময় বিপরীত বাহুর চেয়ে দীর্ঘ, যা পাটিগণিতের একটি দ্রুত যাচাই।"
      },
      {
        "question": "কোসেক্যান্ট ক্যালকুলেটরের কি কোণ ইনপুট দরকার?",
        "answer": "না। ক্যালকুলেটরের শুধু দুটি বাহুর দৈর্ঘ্য দরকার: অতিভুজ ও বিপরীত বাহু। অনুপাত c/a ওই পরিমাপগুলো দিয়েই সম্পূর্ণ নির্ধারিত, তাই কোণ A কখনো গণনায় আসে না।"
      },
      {
        "question": "কোণ বাড়লে কোসেক্যান্ট কীভাবে বদলায়?",
        "answer": "সূক্ষ্মকোণ বাড়ার সঙ্গে কোসেক্যান্ট কমে। ছোট কোণের অতিভুজের তুলনায় বিপরীত বাহু খাটো হয়, তাই অনুপাত বড়; বড় কোণের বিপরীত বাহু প্রায় অতিভুজের সমান দীর্ঘ হয়, তাই অনুপাত 1-এর ঠিক ওপরে থাকে। উদাহরণস্বরূপ, csc(30 ডিগ্রি) = 2, csc(45 ডিগ্রি) প্রায় 1.4142, এবং csc(60 ডিগ্রি) প্রায় 1.1547।"
      },
      {
        "question": "সাইনের বদলে কখন কোসেক্যান্ট ব্যবহার করবেন?",
        "answer": "কোসেক্যান্ট ব্যবহার করুন যখন অতিভুজ-ভাগ-বিপরীত বাহু দরকার: কোসেক্যান্টকে ঘিরে গড়া সূত্রে, অন্যোন্যক অভেদের কাজে, বা যখন কোনো সমস্যা কোসেক্যান্ট মান দিয়ে বাহু চায়। সরাসরি পরিমাপ সমস্যায় সাইন সাধারণত স্বাভাবিক পছন্দ।"
      }
    ],
    "conclusion": {
      "h2": "আত্মবিশ্বাসের সঙ্গে কোসেক্যান্ট অনুপাত আয়ত্ত করুন",
      "paragraphs": [
        "কোসেক্যান্ট হলো অন্য দিক থেকে দেখা সাইন: অতিভুজকে বিপরীত বাহু দিয়ে ভাগ করুন, ফলাফল জানিয়ে দেবে অতিভুজে কতগুলো বিপরীত বাহুর দৈর্ঘ্য ধরে। সূত্র [[\\csc(A)=c/a]]-এর শুধু দুটি পরিমাপ দরকার, উত্তর সবসময় 1-এর ওপরে এককবিহীন সংখ্যা, এবং অন্যোন্যক অভেদ [[\\csc(A)=1/\\sin(A)]] প্রতিটি গণনা যাচাইয়ের একটি অন্তর্নির্মিত উপায় দেয়। ত্রিভুজটি মই, র‍্যাফটার বা পাঠ্যবইয়ের 3-4-5 যাই হোক, পদ্ধতি কখনো বদলায় না: অতিভুজ চিহ্নিত করুন, বিপরীত বাহু চিহ্নিত করুন, ভাগ করুন ও যাচাই করুন। ত্রিভুজের জ্যামিতি নিশ্চিত করতে <a href=\"/pythagorean-theorem-calculator/\" class=\"text-primary hover:underline\">পিথাগোরাসের উপপাদ্য ক্যালকুলেটর</a> হাতের কাছে রাখুন, এবং প্রতিটি কোসেক্যান্ট গণনার জন্য এই পৃষ্ঠা বুকমার্ক করে রাখুন।"
      ]
    }
  },
  "ja": {
    "tocHeading": "このガイドの内容",
    "tocItems": {
      "csc-intro": "コセカント比計算機とは?",
      "csc-triangle": "斜辺と対辺を理解する",
      "csc-whatis": "三角法におけるコセカントを理解する",
      "csc-formula": "コセカントの公式をステップごとに解説",
      "csc-howto": "計算機の使い方",
      "csc-examples": "ステップごとの例",
      "csc-applications": "実生活の例",
      "csc-angle": "コセカントと角の大きさ",
      "csc-recover": "コセカントで斜辺を求める",
      "csc-mistakes": "よくある間違い",
      "csc-verify": "結果を確認する",
      "csc-vs": "コセカントと他の比の比較",
      "csc-faq": "よくある質問",
      "csc-related": "関連する計算機"
    },
    "sections": {
      "csc-intro": {
        "h2": "コセカント比計算機とは?",
        "blocks": [
          {
            "kind": "p",
            "text": "コセカント比計算機は、2つの辺の長さ、すなわち斜辺 [[c]] と対辺 [[a]] から、直角三角形の鋭角のコセカントを求めます。前者を後者で割り、[[\\csc(A)=c/a]] を得ます。コセカントはサインの逆数です。サインが対辺÷斜辺を与えるのに対し、コセカントは斜辺÷対辺を与えるため、2つの値を掛け合わせると常に1になります。"
          },
          {
            "kind": "p",
            "text": "この計算機には角度の入力も隣辺も必要ありません。比 [[c/a]] はその2つの長さだけで完全に決まるからです。答えは単位のない純粋な数です。センチメートルをセンチメートルで割れば単位は打ち消され、斜辺を対辺の何倍かとして表します。斜辺5cm、対辺3cmの場合、[[\\csc(A)=5/3\\approx1.6667]] となり、斜辺が対辺の約1.67倍であることを意味します。"
          }
        ],
        "steps": [],
        "listItems": [],
        "related": [],
        "tables": [],
        "figures": []
      },
      "csc-triangle": {
        "h2": "斜辺と対辺を理解する",
        "blocks": [
          {
            "kind": "h3",
            "text": "直角三角形とは?"
          },
          {
            "kind": "p",
            "text": "直角三角形はちょうど [[90^\\circ]] の角を1つ持ちます。これは壁と水平な床が出会うような、2本の垂直な直線の間の角です。斜辺はその直角の向かいにあり、常に最も長い辺です。3つの角の合計は [[180^\\circ]] でなければならないため、残りの2つの角はちょうど90度を分け合い、どちらも鋭角になります。コセカントの公式はそのうち2辺、斜辺と対辺を一定の関係で比べるため、この幾何学に属します。"
          },
          {
            "kind": "h3",
            "text": "対辺とは?"
          },
          {
            "kind": "p",
            "text": "対辺は基準角 [[A]] の真向かいの辺です。[[A]] の頂点に接しない、三角形の中で唯一の辺です。どの辺が対辺になるかは基準角によって決まるため、角 [[A]] から角 [[B]] に切り替えると2つの辺のラベルが入れ替わります。実用的な問題では、対辺は垂直な高さ、高低差、構造物の垂直な脚を表すことがよくあります。基準角を正しく取ることが重要です。間違った角を使うと、対辺と隣辺が静かに入れ替わってしまうからです。"
          },
          {
            "kind": "h3",
            "text": "斜辺とは?"
          },
          {
            "kind": "p",
            "text": "斜辺は直角の向かいの辺であり、三角形がどのように回転していても、図の中で2つの事実がそれを特定します。[[90^\\circ]] の角を示す小さな四角形の正面にあり、最も長い辺であることです。有効で退化していない三角形では、どちらの脚よりも厳密に長くなります。実際の場面では、壁に立てかけたはしご、傾斜した距離、視線、屋根のたる木、斜めの支えなどを表すことがあります。"
          },
          {
            "kind": "h3",
            "text": "隣辺とは?"
          },
          {
            "kind": "p",
            "text": "隣辺 [[b]] は、斜辺ではなく角 [[A]] に接する脚です。コセカントの公式には登場しないため、計算機がこれを求めることはありません。辺 [[b]] はコサイン、タンジェント、セカント、コタンジェントで重要になるので、別の比が目的の場合は覚えておきましょう。"
          }
        ],
        "steps": [],
        "listItems": [],
        "related": [],
        "tables": [],
        "figures": [
          {
            "alt": "左下に角Aがある直角三角形。金色の対辺a、青色の隣辺b、ピンクの斜辺c。公式csc(A)=c/a",
            "caption": "角Aは左下にあります。コセカントは斜辺cと対辺aを使い、隣辺bは使いません。"
          }
        ]
      },
      "csc-whatis": {
        "h2": "三角法におけるコセカントを理解する",
        "blocks": [
          {
            "kind": "p",
            "text": "コセカントは、直角三角形の傾いた辺全体と、基準角の対辺とを比べます。"
          },
          {
            "kind": "p",
            "text": "[[[\\csc(A)=\\frac{c}{a}]]]"
          },
          {
            "kind": "p",
            "text": "ここで [[\\csc(A)]] は角 [[A]] のコセカント、[[c]] は斜辺、[[a]] は対辺です。この比は1つの問いに答えます。斜辺の中に対辺の長さが何個分入るか、という問いです。"
          },
          {
            "kind": "h3",
            "text": "サインの逆数としてのコセカント"
          },
          {
            "kind": "p",
            "text": "サインの公式から始めましょう。"
          },
          {
            "kind": "p",
            "text": "[[[\\sin(A)=\\frac{a}{c}]]]"
          },
          {
            "kind": "p",
            "text": "逆数を取ると分数が反転し、斜辺が分子に、対辺が分母に移動します。"
          },
          {
            "kind": "p",
            "text": "[[[\\frac{1}{\\sin(A)}=\\frac{c}{a}]]]"
          },
          {
            "kind": "p",
            "text": "コセカントは定義上サインの逆数なので、"
          },
          {
            "kind": "p",
            "text": "[[[\\boxed{\\csc(A)=\\frac{1}{\\sin(A)}=\\frac{c}{a}}]]]"
          },
          {
            "kind": "p",
            "text": "具体的な確認で反転が見えてきます。[[\\sin(A)=3/5=0.6]] のとき、逆数は [[1/0.6=5/3\\approx1.6667]] で、これがまさにコセカントです。どちらの数も、逆数の視点から同じ三角形を表しており、掛け合わせれば常に1に戻ります。"
          },
          {
            "kind": "h3",
            "text": "コセカントが1より大きくなる理由"
          },
          {
            "kind": "p",
            "text": "斜辺は対辺より長いので [[c \\gt a]]、したがって [[c/a \\gt 1]] です。数値で素早く確認しましょう。[[c=10]]、[[a=8]] のとき比は [[10/8=1.25]] で、要求通り1を上回ります。鋭角が大きい場合、対辺は斜辺とほぼ同じ長さになるため、比は1のすぐ上にとどまります。ただし、有効で退化していない直角三角形では、1に等しくなることは決してありません。"
          },
          {
            "kind": "h3",
            "text": "コセカントの値は何を意味する?"
          },
          {
            "kind": "p",
            "text": "コセカントが2なら斜辺は対辺のちょうど2倍、1.6667なら約1.6667倍です。この数は角ではなく倍率として読みましょう。2つの辺の単位が割り算で打ち消されるため、度もメートルもフィートも付きません。"
          },
          {
            "kind": "h3",
            "text": "コセカントがコサインと違う理由"
          },
          {
            "kind": "p",
            "text": "名前は似ていますが、関係は異なります。"
          },
          {
            "kind": "p",
            "text": "[[[\\cos(A)=\\frac{b}{c}]]]"
          },
          {
            "kind": "p",
            "text": "[[[\\csc(A)=\\frac{c}{a}]]]"
          },
          {
            "kind": "p",
            "text": "コサインは隣辺と斜辺を比べ、コセカントは斜辺と対辺を比べます。覚えるべき組み合わせは、コセカントはサインの逆数、セカントはコサインの逆数です。この2つの余関数を混同することは、三角法で最もよくある間違いの1つです。"
          }
        ],
        "steps": [],
        "listItems": [],
        "related": [],
        "tables": [],
        "figures": [
          {
            "alt": "3つの段階:3-4-5の三角形、サイン3/5=0.6、コセカント5/3=1.6667、恒等式csc(A)=1/sin(A)",
            "caption": "サインとコセカントは逆数です。3/5を反転させると5/3になり、csc(A) = 1/sin(A) です。"
          }
        ]
      },
      "csc-formula": {
        "h2": "コセカントの公式をステップごとに解説",
        "blocks": [
          {
            "kind": "p",
            "text": "この公式は恣意的なものではなく、サインの定義から直接導かれます。サインの比から始めましょう。"
          },
          {
            "kind": "p",
            "text": "[[[\\sin(A)=\\frac{a}{c}]]]"
          },
          {
            "kind": "p",
            "text": "両辺の逆数を取ります。分子と分母が入れ替わります。"
          },
          {
            "kind": "p",
            "text": "[[[\\frac{1}{\\sin(A)}=\\frac{c}{a}]]]"
          },
          {
            "kind": "p",
            "text": "コセカントは定義上サインの逆数なので、"
          },
          {
            "kind": "p",
            "text": "[[[\\boxed{\\csc(A)=\\frac{c}{a}}]]]"
          },
          {
            "kind": "p",
            "text": "斜辺が分子に現れるのは、サインでは分母だったからです。対辺が分母に落ちるのは、サインでは分子だったからです。これが導出のすべてです。"
          },
          {
            "kind": "h3",
            "text": "完全な解答例:3-4-5の三角形"
          },
          {
            "kind": "p",
            "text": "[[a=3\\text{ cm}]]、[[b=4\\text{ cm}]]、[[c=5\\text{ cm}]] とします。"
          },
          {
            "kind": "p",
            "text": "ステップ1:公式を書きます。[[\\csc(A)=c/a]]"
          },
          {
            "kind": "p",
            "text": "ステップ2:測定値を代入します。[[\\csc(A)=5/3]]"
          },
          {
            "kind": "p",
            "text": "ステップ3:割り算をします。[[\\boxed{\\csc(A)\\approx1.6667}]]"
          },
          {
            "kind": "p",
            "text": "ステップ4:サインで検証します。[[\\sin(A)=3/5=0.6]] であり、[[1/0.6\\approx1.6667]] です。どちらも1つの三角形を逆数の視点から見たものなので、同じ値にたどり着きます。1.6667は丸めた小数であり、[[5/3]] がこの辺の長さに対する正確な比であることに注意してください。"
          }
        ],
        "steps": [],
        "listItems": [],
        "related": [],
        "tables": [],
        "figures": []
      },
      "csc-howto": {
        "h2": "コセカント比計算機の使い方",
        "blocks": [
          {
            "kind": "p",
            "text": "以下の手順は、このページの実際のインターフェースに対応しています。"
          }
        ],
        "steps": [
          "<strong>基準角 [[A]] を特定します。</strong>対辺はそれを基準に定義されるため、比がどの鋭角を表すかを決めます。",
          "<strong>斜辺 [[c]] を見つけます。</strong>直角の向かいの辺であり、三角形で最も長い辺です。",
          "<strong>対辺 [[a]] を見つけます。</strong>角 [[A]] の真向かいの辺です。",
          "<strong>2つの辺の長さを測るか入手します。</strong>メジャー、図面、または与えられたデータを使い、両方とも同じ単位にします。",
          "<strong>最初の入力欄に斜辺を入力します。</strong>2つの値のうち大きい方です。",
          "<strong>2番目の入力欄に対辺を入力します。</strong>2つの値のうち小さい方です。",
          "<strong>単位セレクターで互換性のある単位を選びます。</strong>割り算が意味を持つよう、両方の欄で同じ単位を使う必要があります。",
          "<strong>両方の値が正であることを確認します。</strong>0や負の長さでは三角形は作れません。",
          "<strong>斜辺が対辺より長いことを確認します。</strong>そうでなければ、入力が入れ替わっているかラベルが間違っています。",
          "<strong>「Calculate csc(A)」をクリックします。</strong>ツールが斜辺を対辺で割ります。",
          "<strong>得られたコセカント比を読みます。</strong>斜辺を対辺の倍数として表す、単位のない数です。",
          "<strong>答えが1より大きいことを確認します。</strong>1以下なら入力ミスの合図です。",
          "<strong>「Reset」で入力をクリアし</strong>、次の計算を始めます。"
        ],
        "listItems": [],
        "related": [],
        "tables": [],
        "figures": []
      },
      "csc-examples": {
        "h2": "コセカント計算のステップごとの例",
        "blocks": [
          {
            "kind": "p",
            "text": "この4つの例で、実世界の応用に入る前に基本スキルを身につけます。いずれも同じパターンです。公式を書き、代入し、割ります。"
          },
          {
            "kind": "h3",
            "text": "例1:3-4-5の直角三角形"
          },
          {
            "kind": "p",
            "text": "[[a=3\\text{ cm}]]、[[b=4\\text{ cm}]]、[[c=5\\text{ cm}]] とします。"
          },
          {
            "kind": "p",
            "text": "[[\\csc(A)=5/3]]"
          },
          {
            "kind": "p",
            "text": "[[\\boxed{\\csc(A)\\approx1.6667}]]"
          },
          {
            "kind": "p",
            "text": "斜辺は対辺の約1.6667倍です。隣辺は三角形を完成させるために与えられたデータに現れるだけで、公式はこれを無視します。"
          },
          {
            "kind": "h3",
            "text": "例2:5-12-13の直角三角形"
          },
          {
            "kind": "p",
            "text": "[[a=5\\text{ m}]]、[[b=12\\text{ m}]]、[[c=13\\text{ m}]] とします。"
          },
          {
            "kind": "p",
            "text": "[[\\csc(A)=13/5]]"
          },
          {
            "kind": "p",
            "text": "[[\\boxed{\\csc(A)=2.6}]]"
          },
          {
            "kind": "p",
            "text": "斜辺が対辺より長いため、結果は1を超えます。この計算に12mの隣辺は必要ありません。"
          },
          {
            "kind": "h3",
            "text": "例3:30-60-90の三角形"
          },
          {
            "kind": "p",
            "text": "角 [[A=30^\\circ]] では、対辺は斜辺の半分です。[[a=5\\text{ cm}]]、[[c=10\\text{ cm}]] とすると、"
          },
          {
            "kind": "p",
            "text": "[[\\csc(30^\\circ)=10/5]]"
          },
          {
            "kind": "p",
            "text": "[[\\boxed{\\csc(30^\\circ)=2}]]"
          },
          {
            "kind": "p",
            "text": "検証:[[\\sin(30^\\circ)=0.5]] であり、[[1/0.5=2]] です。30-60-90の三角形は幾何の問題に頻繁に登場するため、この正確な値は覚えておく価値があります。"
          },
          {
            "kind": "h3",
            "text": "例4:対辺8、斜辺10の三角形"
          },
          {
            "kind": "p",
            "text": "[[a=8\\text{ m}]]、[[c=10\\text{ m}]] とします。"
          },
          {
            "kind": "p",
            "text": "[[\\csc(A)=10/8]]"
          },
          {
            "kind": "p",
            "text": "[[\\boxed{\\csc(A)=1.25}]]"
          },
          {
            "kind": "p",
            "text": "この比は3-4-5の結果より1に近くなります。対辺が斜辺に占める割合が大きいからです。3/5に対して8/10です。"
          }
        ],
        "steps": [],
        "listItems": [],
        "related": [],
        "tables": [],
        "figures": []
      },
      "csc-applications": {
        "h2": "コセカント比を使った実生活の例",
        "blocks": [
          {
            "kind": "p",
            "text": "コセカントは数学的な比であり、作業現場で単独で報告される数ではありません。その価値は、斜辺と対辺の関係を記述し、計算を検証し、コセカントを必要とする公式に供給することにあります。以下の各例は、簡略化された直角三角形を前提としています。"
          },
          {
            "kind": "h3",
            "text": "例5:はしごの長さと高さの関係を理解する"
          },
          {
            "kind": "p",
            "text": "5.5mのはしごが垂直な壁に4.5mの高さまで届きます。はしごが斜辺 [[c=5.5\\text{ m}]]、届く高さが対辺 [[a=4.5\\text{ m}]] です。"
          },
          {
            "kind": "p",
            "text": "[[\\csc(A)=5.5/4.5]]、よって [[\\boxed{\\csc(A)\\approx1.2222}]] です。"
          },
          {
            "kind": "p",
            "text": "はしごは垂直な高さの約1.2222倍であり、[[c=a\\times\\csc(A)]] で高さからはしごの長さを取り戻せます。この比は幾何学のみを表し、はしごの安全性ではありません。"
          },
          {
            "kind": "h3",
            "text": "例6:屋根のたる木のコセカント比を計算する"
          },
          {
            "kind": "p",
            "text": "6.5mの屋根のたる木の垂直な高さが4mあります。たる木が傾いた斜辺 [[c=6.5\\text{ m}]]、高さが対辺 [[a=4\\text{ m}]] です。"
          },
          {
            "kind": "p",
            "text": "[[\\csc(A)=6.5/4]]、よって [[\\boxed{\\csc(A)=1.625}]] です。"
          },
          {
            "kind": "p",
            "text": "たる木は垂直な高さの1.625倍です。この計算は構造的な適合性や屋根設計の基準適合を検証するものではありません。"
          },
          {
            "kind": "h3",
            "text": "例7:スロープのコセカント比を評価する"
          },
          {
            "kind": "p",
            "text": "スロープの傾斜長が9.5m、垂直な高さが0.75mあります。[[c=9.5\\text{ m}]]、[[a=0.75\\text{ m}]] です。"
          },
          {
            "kind": "p",
            "text": "[[\\csc(A)=9.5/0.75]]、よって [[\\boxed{\\csc(A)\\approx12.6667}]] です。"
          },
          {
            "kind": "p",
            "text": "傾斜長が垂直な高さをはるかに上回るため比は大きくなります。緩やかなスロープとして当然です。比だけではアクセシビリティや建築基準への適合は判断できません。"
          },
          {
            "kind": "h3",
            "text": "例8:高低差がわかっている測量線"
          },
          {
            "kind": "p",
            "text": "簡略化された測量で、直線距離50m、垂直差30mが記録されました。直線が斜辺 [[c=50\\text{ m}]]、垂直差を対辺 [[a=30\\text{ m}]] とします。"
          },
          {
            "kind": "p",
            "text": "[[\\csc(A)=50/30]]、よって [[\\boxed{\\csc(A)\\approx1.6667}]] です。"
          },
          {
            "kind": "p",
            "text": "傾斜距離は垂直成分の約1.6667倍です。実際の測量では、この簡略モデルを超える追加の補正が必要になることがあります。"
          },
          {
            "kind": "h3",
            "text": "例9:支線の比を計算する"
          },
          {
            "kind": "p",
            "text": "18mの支線の両端の垂直間隔が10mあります。支線が斜辺 [[c=18\\text{ m}]]、間隔が対辺 [[a=10\\text{ m}]] です。"
          },
          {
            "kind": "p",
            "text": "[[\\csc(A)=18/10]]、よって [[\\boxed{\\csc(A)=1.8}]] です。"
          },
          {
            "kind": "p",
            "text": "支線は垂直間隔の1.8倍です。この比では支線の張力、アンカーの強度、構造の安全性は判断できません。"
          },
          {
            "kind": "h3",
            "text": "例10:階段のささら桁の比を評価する"
          },
          {
            "kind": "p",
            "text": "簡略化された5mの階段のささら桁の垂直な高さが2.8mあります。ささら桁が斜辺 [[c=5\\text{ m}]]、高さが対辺 [[a=2.8\\text{ m}]] です。"
          },
          {
            "kind": "p",
            "text": "[[\\csc(A)=5/2.8]]、よって [[\\boxed{\\csc(A)\\approx1.7857}]] です。"
          },
          {
            "kind": "p",
            "text": "対角線は垂直な高さの約1.7857倍です。これは簡略化された幾何計算であり、階段設計の完全な評価ではありません。"
          },
          {
            "kind": "h3",
            "text": "例11:航空機の直線飛行区間"
          },
          {
            "kind": "p",
            "text": "航空機が高度を1.5km上げながら直線経路を5km進みます。経路が斜辺 [[c=5\\text{ km}]]、高度上昇が対辺 [[a=1.5\\text{ km}]] です。"
          },
          {
            "kind": "p",
            "text": "[[\\csc(A)=5/1.5]]、よって [[\\boxed{\\csc(A)\\approx3.3333}]] です。"
          },
          {
            "kind": "p",
            "text": "飛行距離は垂直上昇をはるかに上回るため、比は大きくなります。これは理想化された例であり、変化する飛行経路の完全な分析ではありません。"
          },
          {
            "kind": "h3",
            "text": "例12:機械のブレース"
          },
          {
            "kind": "p",
            "text": "斜めのブレースの長さが1,700mm、垂直成分が800mmあります。ブレースが斜辺 [[c=1700\\text{ mm}]]、垂直成分が対辺 [[a=800\\text{ mm}]] です。"
          },
          {
            "kind": "p",
            "text": "[[\\csc(A)=1700/800]]、よって [[\\boxed{\\csc(A)=2.125}]] です。"
          },
          {
            "kind": "p",
            "text": "両辺が同じ単位なら、ミリメートルもメートルと同様に使えます。この比ではブレースの強度は判断できません。"
          },
          {
            "kind": "h3",
            "text": "例13:クレーンのブーム"
          },
          {
            "kind": "p",
            "text": "簡略化された10mのクレーンのブームの垂直成分が8mあります。ブームが斜辺 [[c=10\\text{ m}]]、垂直成分が対辺 [[a=8\\text{ m}]] です。"
          },
          {
            "kind": "p",
            "text": "[[\\csc(A)=10/8]]、よって [[\\boxed{\\csc(A)=1.25}]] です。"
          },
          {
            "kind": "p",
            "text": "ブームの長さは垂直成分のわずか1.25倍です。この比では吊り上げ能力や作業の安全性は判断できません。"
          },
          {
            "kind": "h3",
            "text": "例14:木の頂上への視線"
          },
          {
            "kind": "p",
            "text": "木の頂上への20mの視線について、観測者の目の高さからの垂直差が12mあります。視線が斜辺 [[c=20\\text{ m}]]、垂直差が対辺 [[a=12\\text{ m}]] です。"
          },
          {
            "kind": "p",
            "text": "[[\\csc(A)=20/12]]、よって [[\\boxed{\\csc(A)\\approx1.6667}]] です。"
          },
          {
            "kind": "p",
            "text": "視線距離は垂直差の約1.6667倍です。この結果から地面からの木の全高はわかりません。"
          },
          {
            "kind": "h3",
            "text": "例15:ハイキングコースの直線的な登り"
          },
          {
            "kind": "p",
            "text": "まっすぐなハイキング区間が80mの標高差で100m傾斜しています。傾斜が斜辺 [[c=100\\text{ m}]]、標高差が対辺 [[a=80\\text{ m}]] です。"
          },
          {
            "kind": "p",
            "text": "[[\\csc(A)=100/80]]、よって [[\\boxed{\\csc(A)=1.25}]] です。"
          },
          {
            "kind": "p",
            "text": "垂直成分が傾斜の大きな割合を占めるため、比は1に近くなります。実際のハイキングコースでは勾配が変化することがあります。"
          },
          {
            "kind": "h3",
            "text": "例16:オーニングの支柱"
          },
          {
            "kind": "p",
            "text": "3.5mのオーニング支柱の垂直成分が1.2mあります。支柱が斜辺 [[c=3.5\\text{ m}]]、垂直成分が対辺 [[a=1.2\\text{ m}]] です。"
          },
          {
            "kind": "p",
            "text": "[[\\csc(A)=3.5/1.2]]、よって [[\\boxed{\\csc(A)\\approx2.9167}]] です。"
          },
          {
            "kind": "p",
            "text": "支柱は垂直成分の約2.9167倍です。この結果では構造的な適合性は判断できません。"
          },
          {
            "kind": "h3",
            "text": "実例の比較"
          },
          {
            "kind": "p",
            "text": "パターンは一貫しています。対辺が斜辺のごく一部なら比は大きくなり、両者がほぼ等しければ1に近くなります。コセカントを倍率として読めば、どの結果も意味を持ちます。"
          }
        ],
        "steps": [],
        "listItems": [],
        "related": [],
        "tables": [
          {
            "headers": [
              "状況",
              "斜辺 c",
              "対辺 a",
              "コセカントの式",
              "計算された比",
              "解釈"
            ],
            "rows": [
              ["はしご", "5.5 m", "4.5 m", "5.5/4.5", "1.2222", "はしごは高さの1.2222倍"],
              ["屋根のたる木", "6.5 m", "4 m", "6.5/4", "1.625", "たる木は高さの1.625倍"],
              ["スロープ", "9.5 m", "0.75 m", "9.5/0.75", "12.6667", "傾斜は高さの12.6667倍"],
              ["測量", "50 m", "30 m", "50/30", "1.6667", "距離は落差の1.6667倍"],
              ["支線", "18 m", "10 m", "18/10", "1.8", "支線は間隔の1.8倍"],
              ["階段のささら桁", "5 m", "2.8 m", "5/2.8", "1.7857", "ささら桁は高さの1.7857倍"],
              ["飛行区間", "5 km", "1.5 km", "5/1.5", "3.3333", "経路は上昇の3.3333倍"],
              ["機械のブレース", "1700 mm", "800 mm", "1700/800", "2.125", "ブレースは成分の2.125倍"],
              ["クレーンのブーム", "10 m", "8 m", "10/8", "1.25", "ブームは成分の1.25倍"],
              ["木への視線", "20 m", "12 m", "20/12", "1.6667", "視線は差の1.6667倍"],
              ["ハイキングの登り", "100 m", "80 m", "100/80", "1.25", "傾斜は上昇の1.25倍"],
              ["オーニングの支柱", "3.5 m", "1.2 m", "3.5/1.2", "2.9167", "支柱は成分の2.9167倍"]
            ]
          }
        ],
        "figures": [
          {
            "alt": "4つのパネル:はしご1.2222、たる木1.625、スロープ12.6667、測量1.6667。直角三角形付きのコセカント比",
            "caption": "4つの実用的な計算:各パネルに三角形、公式、比を示します。"
          }
        ]
      },
      "csc-angle": {
        "h2": "コセカントと角の大きさの関係を理解する",
        "blocks": [
          {
            "kind": "p",
            "text": "コセカントは角とは逆方向に動きます。鋭角が小さいと、斜辺に対する対辺が短くなるため [[c/a]] は大きくなります。角が大きくなるにつれて対辺は斜辺に向かって長くなり、比は縮みます。以下の検証済み基準値がそのパターンを示しています。"
          },
          {
            "kind": "p",
            "text": "角が [[90^\\circ]] に近づくと、対辺は斜辺に近づき、比は1に近づきます。ただし、有効で退化していない直角三角形では、常に1を上回ったままです。90度の行は限界の参考値にすぎません。角 [[A]] は鋭角でなければならないからです。角が [[0^\\circ]] に近づくと、対辺は0に向かって縮み、比は際限なく大きくなります。1に近い比は比較的大きな鋭角の合図、大きな比は比較的小さな角の合図です。"
          },
          {
            "kind": "p",
            "text": "この計算機は角度の入力を受け付けません。2つの辺の長さから比を計算します。これらの基準値は目安として、また結果を検証する際のチェック値として役立ちます。"
          }
        ],
        "steps": [],
        "listItems": [],
        "related": [],
        "tables": [
          {
            "headers": [
              "角 A",
              "サイン sin(A)",
              "コセカント csc(A)"
            ],
            "rows": [
              ["30度", "0.5", "2"],
              ["45度", "0.7071", "1.4142"],
              ["60度", "0.8660", "1.1547"],
              ["90度", "1", "1(限界値として)"]
            ]
          }
        ],
        "figures": [
          {
            "alt": "30度、45度、60度の3つの三角形。コセカント値は2、1.4142、1.1547。角が大きくなると比は下がる",
            "caption": "対辺が斜辺に占める割合が大きくなると、csc(A) は1に近づきます。"
          }
        ]
      },
      "csc-recover": {
        "h2": "コセカントを使って斜辺を求める",
        "blocks": [
          {
            "kind": "p",
            "text": "公式はきれいに変形できます。まず、"
          },
          {
            "kind": "p",
            "text": "[[[\\csc(A)=\\frac{c}{a}]]]"
          },
          {
            "kind": "p",
            "text": "両辺に [[a]] を掛けます。"
          },
          {
            "kind": "p",
            "text": "[[[\\boxed{c=a\\times\\csc(A)}]]]"
          },
          {
            "kind": "p",
            "text": "斜辺は、対辺にコセカント比を掛けたものになります。[[a=6\\text{ m}]]、[[\\csc(A)=2.5]] とすると、"
          },
          {
            "kind": "p",
            "text": "[[c=6\\times2.5]]"
          },
          {
            "kind": "p",
            "text": "[[\\boxed{c=15\\text{ m}}]]"
          },
          {
            "kind": "p",
            "text": "結果は対辺より長くなります。すべての斜辺がそうでなければなりません。"
          },
          {
            "kind": "h3",
            "text": "対辺を取り戻す方法"
          },
          {
            "kind": "p",
            "text": "代わりに [[a]] について解くと、"
          },
          {
            "kind": "p",
            "text": "[[[\\boxed{a=\\frac{c}{\\csc(A)}}]]]"
          },
          {
            "kind": "p",
            "text": "[[c=12\\text{ m}]]、[[\\csc(A)=2]] とすると、"
          },
          {
            "kind": "p",
            "text": "[[a=12/2]]"
          },
          {
            "kind": "p",
            "text": "[[\\boxed{a=6\\text{ m}}]]"
          },
          {
            "kind": "p",
            "text": "これらは同じ比の数学的な変形です。このページの計算機は比そのものを計算します。斜辺を求めるモードや対辺を求めるモードは別にありません。"
          }
        ],
        "steps": [],
        "listItems": [],
        "related": [],
        "tables": [],
        "figures": []
      },
      "csc-mistakes": {
        "h2": "コセカント計算でよくある間違い",
        "blocks": [
          {
            "kind": "h3",
            "text": "間違いと正解"
          },
          {
            "kind": "p",
            "text": "[[c=5]]、[[a=3]] とします。"
          },
          {
            "kind": "p",
            "text": "間違い:[[3/5=0.6]]。これはサインの比であり、コセカントの比ではありません。"
          },
          {
            "kind": "p",
            "text": "正解:[[\\csc(A)=5/3\\approx1.6667]]。"
          },
          {
            "kind": "p",
            "text": "検証:[[\\csc(A)=1/\\sin(A)]] であり、[[1/0.6\\approx1.6667]] です。"
          }
        ],
        "steps": [],
        "listItems": [
          "<strong>コセカントをサインと混同する。</strong>サインは [[a/c]]、コセカントは [[c/a]] です。起きる問題:3-4-5の三角形で0.6と報告してしまう。対策:斜辺を上に置きます。",
          "<strong>公式を [[c/a]] ではなく [[a/c]] に反転させる。</strong>起きる問題:答えがサインになり、常に1を下回ります。対策:長い方の辺が分子にあるか確認します。",
          "<strong>コセカントをセカントと混同する。</strong>セカントは [[c/b]] で、コサインの逆数です。起きる問題:隣辺を使ってしまう。対策:コセカントはサインと対辺の組み合わせです。",
          "<strong>対辺の代わりに隣辺を使う。</strong>起きる問題:誤って [[c/b]] を計算してしまう。対策:割る前に、角 [[A]] の向かいの辺であることを確認します。",
          "<strong>コセカントが度で測られると思い込む。</strong>起きる問題:1.6667度と書いてしまう。対策:比は純粋な数であり、角ではありません。",
          "<strong>コセカント比にメートルやセンチメートルを付けて報告する。</strong>起きる問題:単位はすでに打ち消されています。対策:答えから単位を外します。",
          "<strong>有効な三角形で1未満の結果を受け入れる。</strong>起きる問題:入れ替わった入力の計算を信じてしまう。対策:有効な結果は常に1を超えます。",
          "<strong>対辺より短い斜辺を入力する。</strong>起きる問題:入力が不可能な三角形を表してしまいます。対策:斜辺の欄には長い方の測定値を入れます。",
          "<strong>0や負の辺の長さを入力する。</strong>起きる問題:0での割り算や意味のない負の比になります。対策:正の長さだけを使います。",
          "<strong>測定単位を混ぜる。</strong>起きる問題:センチメートルをメートルで割ると、比が100倍ずれます。対策:先に両辺を1つの単位にそろえます。",
          "<strong>早すぎる丸め。</strong>起きる問題:掛け戻す前に [[5/3]] を1.67に丸めると、避けられる誤差が加わります。対策:最終ステップまで分数か余分な桁を保ちます。",
          "<strong>基準角をもう一方の鋭角と混同する。</strong>起きる問題:対辺と隣辺のラベルが入れ替わります。対策:先に図に角 [[A]] を記入します。",
          "<strong>大きなコセカント比が角だと思い込む。</strong>起きる問題:12.6667を度として読んでしまう。対策:これは倍率であり、斜辺が対辺の12.6667倍という意味です。",
          "<strong>コセカントだけで斜辺が決まると思う。</strong>起きる問題:1つの数から長さが出ると期待してしまう。対策:比には [[c=a\\times\\csc(A)]] を通じて対辺も必要です。",
          "<strong>サインの逆数とコサインの逆数を混同する。</strong>起きる問題:コセカントの場面でセカントを使ってしまう。対策:サインはコセカントと、コサインはセカントと組みになります。"
        ],
        "related": [],
        "tables": [],
        "figures": []
      },
      "csc-verify": {
        "h2": "コセカントの結果が有効か確認する方法",
        "blocks": [
          {
            "kind": "p",
            "text": "有効で退化していない直角三角形には以下が必要です。"
          },
          {
            "kind": "p",
            "text": "[[[c \\gt a \\gt 0]]]"
          },
          {
            "kind": "p",
            "text": "したがって [[c/a \\gt 1]] です。両方の測定で互換性のある単位を使い、計算された比は1を超えなければなりません。ちょうど1という結果は、鋭角が90度に近づくときの限界値にすぎず、本物の三角形の結果ではありません。1を下回る比は、通常、入れ替わった入力、間違った辺のラベル、互換性のない測定を示します。"
          },
          {
            "kind": "h3",
            "text": "方法1:サインの逆数で確認する"
          },
          {
            "kind": "p",
            "text": "[[\\sin(A)=a/c]] を計算し、次に [[\\csc(A)=1/\\sin(A)]] を計算します。3-4-5の三角形では [[\\sin(A)=3/5=0.6]]、[[1/0.6\\approx1.6667]] となり、直接の割り算と一致します。"
          },
          {
            "kind": "h3",
            "text": "方法2:ピタゴラスの定理で確認する"
          },
          {
            "kind": "p",
            "text": "隣辺がわかっている場合や必要な場合は [[b=\\sqrt{c^2-a^2}]] を検証します。[[c=5]]、[[a=3]] では [[b=\\sqrt{25-9}=4]]、[[3^2+4^2=5^2]] です。これで辺の長さが直角三角形を成すことが確認できます。"
          },
          {
            "kind": "h3",
            "text": "方法3:掛け算で比を確認する"
          },
          {
            "kind": "p",
            "text": "[[a\\times\\csc(A)\\approx c]] を検証します。[[a=3]]、[[\\csc(A)=5/3]] では [[3\\times\\frac{5}{3}=5]] です。表示された小数が丸められていると小さなずれが出ることがあります。正確な分数ならずれは消えます。"
          }
        ],
        "steps": [],
        "listItems": [],
        "related": [],
        "tables": [],
        "figures": []
      },
      "csc-vs": {
        "h2": "コセカントとサイン、セカント、その他の三角比の比較",
        "blocks": [
          {
            "kind": "p",
            "text": "各比は異なる辺の組み合わせを比べます。"
          },
          {
            "kind": "p",
            "text": "逆数のペアは、サインとコセカント、コサインとセカントです。[[\\csc(A)=1/\\sin(A)]] であるのに対し、[[\\sec(A)=1/\\cos(A)]] です。コセカントとセカントは互換性がありません。対辺と斜辺がわかっている直接測定の問題にはサインが適し、逆数を中心に組み立てられた公式や、既知のコセカント値から斜辺を取り戻す場合にはコセカントが適します。"
          },
          {
            "kind": "p",
            "text": "隣接する比については、<a href=\"/sine-ratio-calculator/\" class=\"text-primary hover:underline\">サイン比計算機</a>、<a href=\"/secant-ratio-calculator/\" class=\"text-primary hover:underline\">セカント比計算機</a>、<a href=\"/cotangent-ratio-calculator/\" class=\"text-primary hover:underline\">コタンジェント比計算機</a>、<a href=\"/right-triangle-trig-ratios-calculator/\" class=\"text-primary hover:underline\">直角三角形の三角比計算機</a>をご覧ください。辺の長さ自体が未知の場合は<a href=\"/right-triangle-side-calculator/\" class=\"text-primary hover:underline\">直角三角形の辺計算機</a>が役立ちます。"
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
              "比べるもの"
            ],
            "rows": [
              ["サイン", "sin(A) = a/c", "対辺と斜辺"],
              ["コセカント", "csc(A) = c/a", "斜辺と対辺"],
              ["コサイン", "cos(A) = b/c", "隣辺と斜辺"],
              ["セカント", "sec(A) = c/b", "斜辺と隣辺"],
              ["タンジェント", "tan(A) = a/b", "対辺と隣辺"],
              ["コタンジェント", "cot(A) = b/a", "隣辺と対辺"]
            ]
          }
        ],
        "figures": []
      },
      "csc-faq": {
        "h2": "よくある質問",
        "blocks": [],
        "steps": [],
        "listItems": [],
        "related": [],
        "tables": [],
        "figures": []
      },
      "csc-related": {
        "h2": "関連する三角法の計算機を探す",
        "blocks": [],
        "steps": [],
        "listItems": [],
        "related": [
          {
            "name": "直角三角形の三角比計算機",
            "desc": "6つの三角比を1か所でまとめて計算します。"
          },
          {
            "name": "サイン比計算機",
            "desc": "対辺と斜辺からサイン比を求めます。"
          },
          {
            "name": "セカント比計算機",
            "desc": "斜辺と隣辺からセカント比を求めます。"
          },
          {
            "name": "コタンジェント比計算機",
            "desc": "隣辺と対辺からコタンジェント比を求めます。"
          },
          {
            "name": "直角三角形の辺計算機",
            "desc": "角度やピタゴラスの定理から未知の辺の長さを求めます。"
          },
          {
            "name": "直角三角形の角計算機",
            "desc": "既知の辺の長さから鋭角を求めます。"
          }
        ],
        "tables": [],
        "figures": []
      }
    },
    "faqHeading": "よくある質問",
    "relatedHeading": "関連する三角法の計算機を探す",
    "faqs": [
      {
        "question": "直角三角形におけるコセカントの公式は?",
        "answer": "公式は csc(A) = c / a です。斜辺を角Aの対辺で割ります。斜辺5、対辺3なら結果は5/3、約1.6667です。同じ値は逆数の恒等式 csc(A) = 1 / sin(A) からも得られます。"
      },
      {
        "question": "コセカントはサインとどう関係しますか?",
        "answer": "コセカントはサインの逆数です。csc(A) = 1 / sin(A)。サインは対辺を斜辺で割り、コセカントはその分数を反転させます。どちらも同じ三角形を表し、積は常に1です。sin(A) = 0.6 なら、csc(A) = 1 / 0.6、約1.6667です。"
      },
      {
        "question": "有効な直角三角形でコセカントが1より大きいのはなぜですか?",
        "answer": "有効で退化していない直角三角形では斜辺が最も長い辺なので、cはaを上回り、大きい正の数を小さい正の数で割れば常に1を超えます。1以下の比は、入れ替わった入力、間違った辺のラベル、または不可能な測定の合図です。"
      },
      {
        "question": "コセカントとセカントの違いは?",
        "answer": "コセカントは斜辺を対辺で割り(c/a)、セカントは斜辺を隣辺で割ります(c/b)。コセカントはサインの逆数、セカントはコサインの逆数です。答える問いが違うため、対辺と隣辺が異なる場合は入れ替えると間違った答えになります。"
      },
      {
        "question": "30度の角のコセカントは?",
        "answer": "30度のコセカントはちょうど2です。30度の対辺は斜辺の半分だからです。c/a = 2/1 = 2。確認:sin(30度) = 0.5 で、1 / 0.5 = 2 です。覚えておく価値のある数少ないコセカント値の1つです。"
      },
      {
        "question": "コセカント比に単位はありますか?",
        "answer": "ありません。斜辺も対辺も同じ単位で測られるため、割り算の際に単位は打ち消されます。辺がセンチメートルでもメートルでもミリメートルでも、コセカント比は純粋な無次元の数です。度、メートル、フィートを付けて報告してはいけません。"
      },
      {
        "question": "コセカントが1未満になることはありますか?",
        "answer": "有効で退化していない直角三角形ではありません。斜辺は対辺より長いため、c/aは1を超えなければなりません。1以下の結果はほぼ確実に2つの入力が入れ替わり、ツールがc/aの代わりにa/c(サイン)を計算したことを意味します。どちらの測定が斜辺か再確認してください。"
      },
      {
        "question": "辺の長さからコセカントを計算する方法は?",
        "answer": "斜辺cと対辺aを特定し、両方が同じ単位で、cがaより長いことを確認してから、csc(A) = c / a を計算します。c = 13m、a = 5mなら答えは13/5 = 2.6です。"
      },
      {
        "question": "コセカントを使って斜辺を求める方法は?",
        "answer": "公式を c = a × csc(A) に変形します。既知の対辺にコセカント比を掛けます。a = 6m、csc(A) = 2.5 なら、c = 6 × 2.5 = 15mです。結果は常に対辺より長くなり、計算の素早い検算になります。"
      },
      {
        "question": "コセカント計算機に角度の入力は必要ですか?",
        "answer": "いいえ。計算機に必要なのは2つの辺の長さ、斜辺と対辺だけです。比c/aはその測定値だけで完全に決まるため、角Aが計算に入ることは決してありません。"
      },
      {
        "question": "角が大きくなるとコセカントはどう変わりますか?",
        "answer": "鋭角が大きくなるにつれてコセカントは減少します。小さな角では斜辺に対する対辺が短いため比は大きく、大きな角では対辺が斜辺とほぼ同じ長さになるため比は1のすぐ上にとどまります。たとえば、csc(30度) = 2、csc(45度)は約1.4142、csc(60度)は約1.1547です。"
      },
      {
        "question": "サインの代わりにコセカントを使うべきなのはどんなとき?",
        "answer": "斜辺÷対辺が必要なときに使います。コセカントを中心に組み立てられた公式、逆数の恒等式の作業、またはコセカント値が与えられて辺を求める問題などです。直接測定の問題では通常サインの方が自然な選択です。"
      }
    ],
    "conclusion": {
      "h2": "自信を持ってコセカント比をマスターする",
      "paragraphs": [
        "コセカントは反対側から見たサインです。斜辺を対辺で割れば、結果は斜辺の中に対辺の長さが何個分入るかを教えてくれます。公式 [[\\csc(A)=c/a]] に必要なのは2つの測定値だけ、答えは常に1を上回る無次元の数であり、逆数の恒等式 [[\\csc(A)=1/\\sin(A)]] があらゆる計算の組み込みチェック手段になります。三角形がはしごでもたる木でも教科書の3-4-5でも、方法は変わりません。斜辺を特定し、対辺を特定し、割り、検証するだけです。三角形の幾何を確認するために<a href=\"/pythagorean-theorem-calculator/\" class=\"text-primary hover:underline\">ピタゴラスの定理計算機</a>を手元に置き、このページをあらゆるコセカント計算のためにブックマークしておきましょう。"
      ]
    }
  },
  "ko": {
    "tocHeading": "이 가이드의 내용",
    "tocItems": {
      "csc-intro": "코시컨트 비 계산기란?",
      "csc-triangle": "빗변과 대변 이해하기",
      "csc-whatis": "삼각법에서 코시컨트 이해하기",
      "csc-formula": "코시컨트 공식 단계별 설명",
      "csc-howto": "계산기 사용 방법",
      "csc-examples": "단계별 예제",
      "csc-applications": "실생활 예제",
      "csc-angle": "코시컨트와 각의 크기",
      "csc-recover": "코시컨트로 빗변 구하기",
      "csc-mistakes": "흔한 실수",
      "csc-verify": "결과 확인하기",
      "csc-vs": "코시컨트와 다른 비 비교",
      "csc-faq": "자주 묻는 질문",
      "csc-related": "관련 계산기"
    },
    "sections": {
      "csc-intro": {
        "h2": "코시컨트 비 계산기란?",
        "blocks": [
          {
            "kind": "p",
            "text": "코시컨트 비 계산기는 두 변의 길이, 즉 빗변 [[c]]와 대변 [[a]]로부터 직각삼각형의 예각의 코시컨트를 구합니다. 앞자를 뒷자로 나누어 [[\\csc(A)=c/a]]를 얻습니다. 코시컨트는 사인의 역수입니다. 사인이 대변 나누기 빗변을 주는 곳에서 코시컨트는 빗변 나누기 대변을 주므로, 두 값을 곱하면 항상 1이 됩니다."
          },
          {
            "kind": "p",
            "text": "계산기에는 각도 입력도 인접변도 필요 없습니다. 비 [[c/a]]가 그 두 길이만으로 완전히 정해지기 때문입니다. 답은 단위가 없는 순수한 수입니다. 센티미터를 센티미터로 나누면 단위가 소거되고, 빗변을 대변의 몇 배인지로 나타냅니다. 빗변 5cm, 대변 3cm인 경우 [[\\csc(A)=5/3\\approx1.6667]]이며, 빗변이 대변의 약 1.67배라는 뜻입니다."
          }
        ],
        "steps": [],
        "listItems": [],
        "related": [],
        "tables": [],
        "figures": []
      },
      "csc-triangle": {
        "h2": "빗변과 대변 이해하기",
        "blocks": [
          {
            "kind": "h3",
            "text": "직각삼각형이란?"
          },
          {
            "kind": "p",
            "text": "직각삼각형은 정확히 [[90^\\circ]]인 각을 하나 가집니다. 벽이 수평 바닥과 만나는 것처럼 두 수직선 사이의 각입니다. 빗변은 그 직각의 맞은편에 있으며 항상 가장 긴 변입니다. 세 각의 합이 [[180^\\circ]]가 되어야 하므로 나머지 두 각은 정확히 90도를 나누어 가지며 둘 다 예각이 됩니다. 코시컨트 공식은 그 변들 중 두 개, 빗변과 대변을 일정한 관계로 비교하므로 이 기하학에 속합니다."
          },
          {
            "kind": "h3",
            "text": "대변이란?"
          },
          {
            "kind": "p",
            "text": "대변은 기준각 [[A]]의 정반대편에 있는 변입니다. [[A]]의 꼭짓점에 닿지 않는 삼각형의 유일한 변입니다. 어느 변이 대변으로 취급되는지는 기준각에 따라 달라지므로, 각 [[A]]에서 각 [[B]]로 바꾸면 두 다리의 라벨이 서로 바뀝니다. 실제 문제에서 대변은 흔히 수직 높이, 고도 차이, 구조물의 수직 다리를 나타냅니다. 기준각을 올바르게 잡는 것이 중요합니다. 잘못된 각을 사용하면 대변과 인접변이 조용히 뒤바뀌기 때문입니다."
          },
          {
            "kind": "h3",
            "text": "빗변이란?"
          },
          {
            "kind": "p",
            "text": "빗변은 직각의 맞은편 변이며, 삼각형이 어떻게 회전해 있든 도면에서 두 가지 사실로 식별됩니다. [[90^\\circ]] 모서리를 표시하는 작은 정사각형과 마주 보고 있으며 가장 긴 변이라는 점입니다. 유효하고 퇴화되지 않은 삼각형에서는 어느 다리보다도 엄격히 깁니다. 실제 상황에서는 벽에 기대어 세운 사다리, 경사진 거리, 시선, 지붕 서까래, 대각선 버팀대 등을 나타낼 수 있습니다."
          },
          {
            "kind": "h3",
            "text": "인접변이란?"
          },
          {
            "kind": "p",
            "text": "인접변 [[b]]는 빗변이 아니면서 각 [[A]]에 닿는 다리입니다. 코시컨트 공식에서는 역할이 없으므로 계산기가 이를 묻지 않습니다. 변 [[b]]는 코사인, 탄젠트, 시컨트, 코탄젠트에서 중요해지므로 다른 비가 목표일 때 기억해 두세요."
          }
        ],
        "steps": [],
        "listItems": [],
        "related": [],
        "tables": [],
        "figures": [
          {
            "alt": "왼쪽 아래에 각 A가 있는 직각삼각형. 금색 대변 a, 파란색 인접변 b, 분홍색 빗변 c. 공식 csc(A)=c/a",
            "caption": "각 A는 왼쪽 아래에 있습니다. 코시컨트는 빗변 c와 대변 a를 사용하며 인접변 b는 사용하지 않습니다."
          }
        ]
      },
      "csc-whatis": {
        "h2": "삼각법에서 코시컨트 이해하기",
        "blocks": [
          {
            "kind": "p",
            "text": "코시컨트는 직각삼각형의 기울어진 변 전체와 기준각의 대변을 비교합니다."
          },
          {
            "kind": "p",
            "text": "[[[\\csc(A)=\\frac{c}{a}]]]"
          },
          {
            "kind": "p",
            "text": "여기서 [[\\csc(A)]]는 각 [[A]]의 코시컨트, [[c]]는 빗변, [[a]]는 대변입니다. 이 비는 하나의 질문에 답합니다. 빗변 안에 대변의 길이가 몇 개 들어가는가 하는 질문입니다."
          },
          {
            "kind": "h3",
            "text": "사인의 역수로서의 코시컨트"
          },
          {
            "kind": "p",
            "text": "사인 공식부터 시작합니다."
          },
          {
            "kind": "p",
            "text": "[[[\\sin(A)=\\frac{a}{c}]]]"
          },
          {
            "kind": "p",
            "text": "역수를 취하면 분수가 뒤집혀 빗변이 분자로, 대변이 분모로 이동합니다."
          },
          {
            "kind": "p",
            "text": "[[[\\frac{1}{\\sin(A)}=\\frac{c}{a}]]]"
          },
          {
            "kind": "p",
            "text": "코시컨트는 정의상 사인의 역수이므로,"
          },
          {
            "kind": "p",
            "text": "[[[\\boxed{\\csc(A)=\\frac{1}{\\sin(A)}=\\frac{c}{a}}]]]"
          },
          {
            "kind": "p",
            "text": "구체적인 확인으로 뒤집힘이 보입니다. [[\\sin(A)=3/5=0.6]]일 때 역수는 [[1/0.6=5/3\\approx1.6667]]이며, 이것이 바로 코시컨트입니다. 두 수 모두 역수의 관점에서 같은 삼각형을 나타내며, 곱하면 항상 1이 됩니다."
          },
          {
            "kind": "h3",
            "text": "코시컨트가 1보다 큰 이유"
          },
          {
            "kind": "p",
            "text": "빗변은 대변보다 길므로 [[c \\gt a]]이고, 따라서 [[c/a \\gt 1]]입니다. 수치로 빠르게 확인해 봅시다. [[c=10]], [[a=8]]일 때 비는 [[10/8=1.25]]로 요구대로 1을 넘습니다. 예각이 큰 경우 대변이 빗변과 거의 같은 길이가 되므로 비는 1 바로 위에 머뭅니다. 다만 유효하고 퇴화되지 않은 직각삼각형에서는 1과 같아질 수 없습니다."
          },
          {
            "kind": "h3",
            "text": "코시컨트 값은 무엇을 의미하는가?"
          },
          {
            "kind": "p",
            "text": "코시컨트가 2라는 것은 빗변이 대변의 정확히 2배라는 뜻이고, 1.6667은 약 1.6667배라는 뜻입니다. 이 수는 각이 아니라 배율로 읽으세요. 두 변의 단위가 나눗셈에서 소거되므로 도도 미터도 피트도 붙지 않습니다."
          },
          {
            "kind": "h3",
            "text": "코시컨트가 코사인과 다른 이유"
          },
          {
            "kind": "p",
            "text": "이름은 비슷해 보이지만 관계가 다릅니다."
          },
          {
            "kind": "p",
            "text": "[[[\\cos(A)=\\frac{b}{c}]]]"
          },
          {
            "kind": "p",
            "text": "[[[\\csc(A)=\\frac{c}{a}]]]"
          },
          {
            "kind": "p",
            "text": "코사인은 인접변과 빗변을 비교하고, 코시컨트는 빗변과 대변을 비교합니다. 기억할 짝은 코시컨트는 사인의 역수, 시컨트는 코사인의 역수라는 점입니다. 이 두 여함수를 혼동하는 것은 삼각법에서 가장 흔한 오류 중 하나입니다."
          }
        ],
        "steps": [],
        "listItems": [],
        "related": [],
        "tables": [],
        "figures": [
          {
            "alt": "세 단계: 3-4-5 삼각형, 사인 3/5=0.6, 코시컨트 5/3=1.6667, 항등식 csc(A)=1/sin(A)",
            "caption": "사인과 코시컨트는 역수입니다. 3/5를 뒤집으면 5/3이 되며, csc(A) = 1/sin(A)입니다."
          }
        ]
      },
      "csc-formula": {
        "h2": "코시컨트 공식 단계별 설명",
        "blocks": [
          {
            "kind": "p",
            "text": "이 공식은 자의적인 것이 아니라 사인의 정의에서 직접 나옵니다. 사인 비부터 시작합니다."
          },
          {
            "kind": "p",
            "text": "[[[\\sin(A)=\\frac{a}{c}]]]"
          },
          {
            "kind": "p",
            "text": "양변의 역수를 취합니다. 분자와 분모가 자리를 바꿉니다."
          },
          {
            "kind": "p",
            "text": "[[[\\frac{1}{\\sin(A)}=\\frac{c}{a}]]]"
          },
          {
            "kind": "p",
            "text": "코시컨트는 정의상 사인의 역수이므로,"
          },
          {
            "kind": "p",
            "text": "[[[\\boxed{\\csc(A)=\\frac{c}{a}}]]]"
          },
          {
            "kind": "p",
            "text": "빗변이 분자에 나타나는 이유는 사인에서 분모였기 때문이고, 대변이 분모로 내려가는 이유는 사인에서 분자였기 때문입니다. 이것이 유도의 전부입니다."
          },
          {
            "kind": "h3",
            "text": "완전 풀이 예제: 3-4-5 삼각형"
          },
          {
            "kind": "p",
            "text": "[[a=3\\text{ cm}]], [[b=4\\text{ cm}]], [[c=5\\text{ cm}]]이 주어졌습니다."
          },
          {
            "kind": "p",
            "text": "1단계: 공식을 씁니다. [[\\csc(A)=c/a]]"
          },
          {
            "kind": "p",
            "text": "2단계: 측정값을 대입합니다. [[\\csc(A)=5/3]]"
          },
          {
            "kind": "p",
            "text": "3단계: 나눕니다. [[\\boxed{\\csc(A)\\approx1.6667}]]"
          },
          {
            "kind": "p",
            "text": "4단계: 사인으로 검증합니다. [[\\sin(A)=3/5=0.6]]이고 [[1/0.6\\approx1.6667]]입니다. 둘 다 하나의 삼각형을 역수의 관점에서 본 것이므로 같은 값에 도달합니다. 1.6667은 반올림된 소수이며, [[5/3]]이 이 변 길이들에 대한 정확한 비라는 점에 유의하세요."
          }
        ],
        "steps": [],
        "listItems": [],
        "related": [],
        "tables": [],
        "figures": []
      },
      "csc-howto": {
        "h2": "코시컨트 비 계산기 사용 방법",
        "blocks": [
          {
            "kind": "p",
            "text": "아래 순서는 이 페이지의 실제 인터페이스와 일치합니다."
          }
        ],
        "steps": [
          "<strong>기준각 [[A]]를 확인합니다.</strong>대변은 그것을 기준으로 정의되므로 비가 나타내는 예각이 무엇인지 정합니다.",
          "<strong>빗변 [[c]]를 찾습니다.</strong>직각의 맞은편 변이며 삼각형에서 가장 긴 변입니다.",
          "<strong>대변 [[a]]를 찾습니다.</strong>각 [[A]]의 정반대편에 있는 변입니다.",
          "<strong>두 변의 길이를 측정하거나 구합니다.</strong>줄자, 도면 또는 주어진 자료를 사용하고 두 값 모두 같은 단위를 유지합니다.",
          "<strong>첫 번째 입력란에 빗변을 입력합니다.</strong>두 값 중 더 큰 값입니다.",
          "<strong>두 번째 입력란에 대변을 입력합니다.</strong>두 값 중 더 작은 값입니다.",
          "<strong>단위 선택기로 호환되는 단위를 선택합니다.</strong>나눗셈이 의미를 가지려면 두 입력란 모두 같은 단위를 사용해야 합니다.",
          "<strong>두 값이 모두 양수인지 확인합니다.</strong>0이나 음수 길이로는 삼각형을 만들 수 없습니다.",
          "<strong>빗변이 대변보다 긴지 확인합니다.</strong>그렇지 않다면 입력이 바뀌었거나 라벨이 잘못된 것입니다.",
          "<strong>Calculate csc(A)를 클릭합니다.</strong>도구가 빗변을 대변으로 나눕니다.",
          "<strong>결과 코시컨트 비를 읽습니다.</strong>빗변을 대변의 배수로 나타내는 단위 없는 수입니다.",
          "<strong>답이 1보다 큰지 확인합니다.</strong>1 이하의 값은 입력 오류의 신호입니다.",
          "<strong>Reset으로 입력을 지우고</strong>다음 계산을 시작합니다."
        ],
        "listItems": [],
        "related": [],
        "tables": [],
        "figures": []
      },
      "csc-examples": {
        "h2": "코시컨트 계산 단계별 예제",
        "blocks": [
          {
            "kind": "p",
            "text": "이 네 가지 예제로 실생활 응용에 들어가기 전에 핵심 기술을 익힙니다. 모두 같은 패턴을 따릅니다. 공식을 쓰고, 대입하고, 나눕니다."
          },
          {
            "kind": "h3",
            "text": "예제 1: 3-4-5 직각삼각형"
          },
          {
            "kind": "p",
            "text": "[[a=3\\text{ cm}]], [[b=4\\text{ cm}]], [[c=5\\text{ cm}]]이 주어졌습니다."
          },
          {
            "kind": "p",
            "text": "[[\\csc(A)=5/3]]"
          },
          {
            "kind": "p",
            "text": "[[\\boxed{\\csc(A)\\approx1.6667}]]"
          },
          {
            "kind": "p",
            "text": "빗변은 대변의 약 1.6667배입니다. 인접변은 삼각형을 완성하기 위해 주어진 자료에만 나타날 뿐 공식은 이를 무시합니다."
          },
          {
            "kind": "h3",
            "text": "예제 2: 5-12-13 직각삼각형"
          },
          {
            "kind": "p",
            "text": "[[a=5\\text{ m}]], [[b=12\\text{ m}]], [[c=13\\text{ m}]]이 주어졌습니다."
          },
          {
            "kind": "p",
            "text": "[[\\csc(A)=13/5]]"
          },
          {
            "kind": "p",
            "text": "[[\\boxed{\\csc(A)=2.6}]]"
          },
          {
            "kind": "p",
            "text": "빗변이 대변보다 길므로 결과는 1을 넘습니다. 이 계산에는 12m 인접변이 필요 없습니다."
          },
          {
            "kind": "h3",
            "text": "예제 3: 30-60-90 삼각형"
          },
          {
            "kind": "p",
            "text": "각 [[A=30^\\circ]]에서는 대변이 빗변의 절반입니다. [[a=5\\text{ cm}]], [[c=10\\text{ cm}]]인 경우,"
          },
          {
            "kind": "p",
            "text": "[[\\csc(30^\\circ)=10/5]]"
          },
          {
            "kind": "p",
            "text": "[[\\boxed{\\csc(30^\\circ)=2}]]"
          },
          {
            "kind": "p",
            "text": "검증: [[\\sin(30^\\circ)=0.5]]이고 [[1/0.5=2]]입니다. 30-60-90 삼각형은 기하 문제에 자주 등장하므로 이 정확한 값은 외워 둘 가치가 있습니다."
          },
          {
            "kind": "h3",
            "text": "예제 4: 대변 8, 빗변 10인 삼각형"
          },
          {
            "kind": "p",
            "text": "[[a=8\\text{ m}]], [[c=10\\text{ m}]]이 주어졌습니다."
          },
          {
            "kind": "p",
            "text": "[[\\csc(A)=10/8]]"
          },
          {
            "kind": "p",
            "text": "[[\\boxed{\\csc(A)=1.25}]]"
          },
          {
            "kind": "p",
            "text": "이 비는 3-4-5 결과보다 1에 가깝습니다. 대변이 빗변에서 차지하는 비율이 크기 때문입니다. 3/5에 비해 8/10입니다."
          }
        ],
        "steps": [],
        "listItems": [],
        "related": [],
        "tables": [],
        "figures": []
      },
      "csc-applications": {
        "h2": "코시컨트 비 활용 실생활 예제",
        "blocks": [
          {
            "kind": "p",
            "text": "코시컨트는 수학적인 비이지 작업 현장에서 단독으로 보고되는 수가 아닙니다. 그 가치는 빗변-대변 관계를 설명하고, 계산을 검증하며, 코시컨트를 필요로 하는 공식에 투입되는 데 있습니다. 아래 각 예제는 단순화된 직각삼각형을 전제로 합니다."
          },
          {
            "kind": "h3",
            "text": "예제 5: 사다리 길이와 높이의 관계 이해하기"
          },
          {
            "kind": "p",
            "text": "5.5m 사다리가 수직 벽에 4.5m 높이까지 닿습니다. 사다리가 빗변 [[c=5.5\\text{ m}]], 닿는 높이가 대변 [[a=4.5\\text{ m}]]입니다."
          },
          {
            "kind": "p",
            "text": "[[\\csc(A)=5.5/4.5]], 따라서 [[\\boxed{\\csc(A)\\approx1.2222}]]입니다."
          },
          {
            "kind": "p",
            "text": "사다리는 수직 높이의 약 1.2222배이며, [[c=a\\times\\csc(A)]]로 높이에서 사다리 길이를 되찾을 수 있습니다. 이 비는 기하학만을 나타내며 사다리의 안전성이 아닙니다."
          },
          {
            "kind": "h3",
            "text": "예제 6: 지붕 서까래의 코시컨트 비 계산하기"
          },
          {
            "kind": "p",
            "text": "6.5m 지붕 서까래의 수직 높이가 4m입니다. 서까래가 기울어진 빗변 [[c=6.5\\text{ m}]], 높이가 대변 [[a=4\\text{ m}]]입니다."
          },
          {
            "kind": "p",
            "text": "[[\\csc(A)=6.5/4]], 따라서 [[\\boxed{\\csc(A)=1.625}]]입니다."
          },
          {
            "kind": "p",
            "text": "서까래는 수직 높이의 1.625배입니다. 이 계산은 구조적 적합성이나 지붕 설계 기준 준수를 검증하지 않습니다."
          },
          {
            "kind": "h3",
            "text": "예제 7: 경사로의 코시컨트 비 평가하기"
          },
          {
            "kind": "p",
            "text": "경사로의 경사 길이가 9.5m, 수직 높이가 0.75m입니다. [[c=9.5\\text{ m}]], [[a=0.75\\text{ m}]]입니다."
          },
          {
            "kind": "p",
            "text": "[[\\csc(A)=9.5/0.75]], 따라서 [[\\boxed{\\csc(A)\\approx12.6667}]]입니다."
          },
          {
            "kind": "p",
            "text": "경사 길이가 수직 높이를 훨씬 웃돌므로 비가 큽니다. 완만한 경사로답습니다. 비만으로는 접근성이나 건축 기준 준수를 판단할 수 없습니다."
          },
          {
            "kind": "h3",
            "text": "예제 8: 고도 차이를 아는 측량선"
          },
          {
            "kind": "p",
            "text": "단순화된 측량에서 직선 거리 50m, 수직 차이 30m가 기록되었습니다. 직선이 빗변 [[c=50\\text{ m}]], 수직 차이를 대변 [[a=30\\text{ m}]]으로 둡니다."
          },
          {
            "kind": "p",
            "text": "[[\\csc(A)=50/30]], 따라서 [[\\boxed{\\csc(A)\\approx1.6667}]]입니다."
          },
          {
            "kind": "p",
            "text": "경사 거리는 수직 성분의 약 1.6667배입니다. 실제 측량에서는 이 단순 모델을 넘는 추가 보정이 필요할 수 있습니다."
          },
          {
            "kind": "h3",
            "text": "예제 9: 지선(가이 와이어)의 비 계산하기"
          },
          {
            "kind": "p",
            "text": "18m 지선의 양 끝 수직 간격이 10m입니다. 지선이 빗변 [[c=18\\text{ m}]], 간격이 대변 [[a=10\\text{ m}]]입니다."
          },
          {
            "kind": "p",
            "text": "[[\\csc(A)=18/10]], 따라서 [[\\boxed{\\csc(A)=1.8}]]입니다."
          },
          {
            "kind": "p",
            "text": "지선은 수직 간격의 1.8배입니다. 이 비로는 지선의 장력, 앵커 강도, 구조 안전성을 판단할 수 없습니다."
          },
          {
            "kind": "h3",
            "text": "예제 10: 계단 멜빵(스트링거)의 비 평가하기"
          },
          {
            "kind": "p",
            "text": "단순화된 5m 계단 스트링거의 수직 높이가 2.8m입니다. 스트링거가 빗변 [[c=5\\text{ m}]], 높이가 대변 [[a=2.8\\text{ m}]]입니다."
          },
          {
            "kind": "p",
            "text": "[[\\csc(A)=5/2.8]], 따라서 [[\\boxed{\\csc(A)\\approx1.7857}]]입니다."
          },
          {
            "kind": "p",
            "text": "대각선은 수직 높이의 약 1.7857배입니다. 이는 단순화된 기하 계산이며 계단 설계의 완전한 평가가 아닙니다."
          },
          {
            "kind": "h3",
            "text": "예제 11: 항공기의 직선 비행 구간"
          },
          {
            "kind": "p",
            "text": "항공기가 고도를 1.5km 올리면서 직선 경로로 5km 이동합니다. 경로가 빗변 [[c=5\\text{ km}]], 고도 상승이 대변 [[a=1.5\\text{ km}]]입니다."
          },
          {
            "kind": "p",
            "text": "[[\\csc(A)=5/1.5]], 따라서 [[\\boxed{\\csc(A)\\approx3.3333}]]입니다."
          },
          {
            "kind": "p",
            "text": "비행 거리가 수직 상승을 훨씬 웃돌므로 비가 큽니다. 이는 이상화된 예제이며 변화하는 비행 경로의 완전한 분석이 아닙니다."
          },
          {
            "kind": "h3",
            "text": "예제 12: 기계 브레이스"
          },
          {
            "kind": "p",
            "text": "대각선 브레이스의 길이가 1,700mm, 수직 성분이 800mm입니다. 브레이스가 빗변 [[c=1700\\text{ mm}]], 수직 성분이 대변 [[a=800\\text{ mm}]]입니다."
          },
          {
            "kind": "p",
            "text": "[[\\csc(A)=1700/800]], 따라서 [[\\boxed{\\csc(A)=2.125}]]입니다."
          },
          {
            "kind": "p",
            "text": "두 변이 같은 단위를 사용하면 밀리미터도 미터와 마찬가지로 쓸 수 있습니다. 이 비로는 브레이스의 강도를 판단할 수 없습니다."
          },
          {
            "kind": "h3",
            "text": "예제 13: 크레인 붐"
          },
          {
            "kind": "p",
            "text": "단순화된 10m 크레인 붐의 수직 성분이 8m입니다. 붐이 빗변 [[c=10\\text{ m}]], 수직 성분이 대변 [[a=8\\text{ m}]]입니다."
          },
          {
            "kind": "p",
            "text": "[[\\csc(A)=10/8]], 따라서 [[\\boxed{\\csc(A)=1.25}]]입니다."
          },
          {
            "kind": "p",
            "text": "붐의 길이는 수직 성분의 겨우 1.25배입니다. 이 비로는 들어 올리는 능력이나 작업 안전성을 판단할 수 없습니다."
          },
          {
            "kind": "h3",
            "text": "예제 14: 나무 꼭대기를 향한 시선"
          },
          {
            "kind": "p",
            "text": "나무 꼭대기를 향한 20m 시선에 대해 관찰자 눈높이에서의 수직 차이가 12m입니다. 시선이 빗변 [[c=20\\text{ m}]], 수직 차이가 대변 [[a=12\\text{ m}]]입니다."
          },
          {
            "kind": "p",
            "text": "[[\\csc(A)=20/12]], 따라서 [[\\boxed{\\csc(A)\\approx1.6667}]]입니다."
          },
          {
            "kind": "p",
            "text": "시선 거리는 수직 차이의 약 1.6667배입니다. 이 결과로 지면에서 나무의 전체 높이를 알 수는 없습니다."
          },
          {
            "kind": "h3",
            "text": "예제 15: 하이킹 코스의 직선 오르막"
          },
          {
            "kind": "p",
            "text": "곧은 하이킹 구간이 80m 고도 상승으로 100m 기울어져 있습니다. 경사가 빗변 [[c=100\\text{ m}]], 상승이 대변 [[a=80\\text{ m}]]입니다."
          },
          {
            "kind": "p",
            "text": "[[\\csc(A)=100/80]], 따라서 [[\\boxed{\\csc(A)=1.25}]]입니다."
          },
          {
            "kind": "p",
            "text": "수직 성분이 경사의 큰 부분을 차지하므로 비가 1에 가깝습니다. 실제 하이킹 코스에서는 기울기가 달라질 수 있습니다."
          },
          {
            "kind": "h3",
            "text": "예제 16: 어닝 지지대"
          },
          {
            "kind": "p",
            "text": "3.5m 어닝 지지대의 수직 성분이 1.2m입니다. 지지대가 빗변 [[c=3.5\\text{ m}]], 수직 성분이 대변 [[a=1.2\\text{ m}]]입니다."
          },
          {
            "kind": "p",
            "text": "[[\\csc(A)=3.5/1.2]], 따라서 [[\\boxed{\\csc(A)\\approx2.9167}]]입니다."
          },
          {
            "kind": "p",
            "text": "지지대는 수직 성분의 약 2.9167배입니다. 이 결과로는 구조적 적합성을 판단할 수 없습니다."
          },
          {
            "kind": "h3",
            "text": "실제 예제 비교"
          },
          {
            "kind": "p",
            "text": "패턴은 일관됩니다. 대변이 빗변의 작은 일부이면 비가 크고, 둘이 거의 같으면 1에 가까워집니다. 코시컨트를 배율로 읽으면 모든 결과가 의미를 가집니다."
          }
        ],
        "steps": [],
        "listItems": [],
        "related": [],
        "tables": [
          {
            "headers": [
              "상황",
              "빗변 c",
              "대변 a",
              "코시컨트 공식",
              "계산된 비",
              "해석"
            ],
            "rows": [
              ["사다리", "5.5 m", "4.5 m", "5.5/4.5", "1.2222", "사다리는 높이의 1.2222배"],
              ["지붕 서까래", "6.5 m", "4 m", "6.5/4", "1.625", "서까래는 높이의 1.625배"],
              ["경사로", "9.5 m", "0.75 m", "9.5/0.75", "12.6667", "경사는 높이의 12.6667배"],
              ["측량", "50 m", "30 m", "50/30", "1.6667", "거리는 낙차의 1.6667배"],
              ["지선", "18 m", "10 m", "18/10", "1.8", "지선은 간격의 1.8배"],
              ["계단 스트링거", "5 m", "2.8 m", "5/2.8", "1.7857", "스트링거는 높이의 1.7857배"],
              ["비행 구간", "5 km", "1.5 km", "5/1.5", "3.3333", "경로는 상승의 3.3333배"],
              ["기계 브레이스", "1700 mm", "800 mm", "1700/800", "2.125", "브레이스는 성분의 2.125배"],
              ["크레인 붐", "10 m", "8 m", "10/8", "1.25", "붐은 성분의 1.25배"],
              ["나무 시선", "20 m", "12 m", "20/12", "1.6667", "시선은 차이의 1.6667배"],
              ["하이킹 오르막", "100 m", "80 m", "100/80", "1.25", "경사는 상승의 1.25배"],
              ["어닝 지지대", "3.5 m", "1.2 m", "3.5/1.2", "2.9167", "지지대는 성분의 2.9167배"]
            ]
          }
        ],
        "figures": [
          {
            "alt": "네 패널: 사다리 1.2222, 서까래 1.625, 경사로 12.6667, 측량 1.6667. 직각삼각형과 함께 표시된 코시컨트 비",
            "caption": "네 가지 실제 계산: 각 패널에 삼각형, 공식, 비가 표시됩니다."
          }
        ]
      },
      "csc-angle": {
        "h2": "코시컨트와 각의 크기 관계 이해하기",
        "blocks": [
          {
            "kind": "p",
            "text": "코시컨트는 각과 반대 방향으로 움직입니다. 예각이 작으면 빗변에 대한 대변이 짧아지므로 [[c/a]]가 커집니다. 각이 커질수록 대변은 빗변 쪽으로 길어지고 비는 작아집니다. 아래 검증된 기준값들이 그 패턴을 보여줍니다."
          },
          {
            "kind": "p",
            "text": "각이 [[90^\\circ]]에 가까워지면 대변은 빗변에 가까워지고 비는 1에 가까워집니다. 다만 유효하고 퇴화되지 않은 직각삼각형에서는 항상 1을 웃돈 채로 유지됩니다. 90도 행은 한계 참고값일 뿐입니다. 각 [[A]]는 예각이어야 하기 때문입니다. 각이 [[0^\\circ]]에 가까워지면 대변은 0 쪽으로 줄어들고 비는 한없이 커집니다. 1에 가까운 비는 비교적 큰 예각의 신호이고, 큰 비는 비교적 작은 각의 신호입니다."
          },
          {
            "kind": "p",
            "text": "계산기는 각도 입력을 받지 않습니다. 두 변의 길이에서 비를 계산합니다. 이 기준값들은 방향을 잡는 데와 결과를 검증할 때 확인값으로 쓰입니다."
          }
        ],
        "steps": [],
        "listItems": [],
        "related": [],
        "tables": [
          {
            "headers": [
              "각 A",
              "사인 sin(A)",
              "코시컨트 csc(A)"
            ],
            "rows": [
              ["30도", "0.5", "2"],
              ["45도", "0.7071", "1.4142"],
              ["60도", "0.8660", "1.1547"],
              ["90도", "1", "1(한계값으로)"]
            ]
          }
        ],
        "figures": [
          {
            "alt": "30도, 45도, 60도의 세 삼각형. 코시컨트 값 2, 1.4142, 1.1547. 각이 커지면 비는 작아짐",
            "caption": "대변이 빗변에서 차지하는 비율이 커지면 csc(A)는 1에 가까워집니다."
          }
        ]
      },
      "csc-recover": {
        "h2": "코시컨트로 빗변 구하기",
        "blocks": [
          {
            "kind": "p",
            "text": "공식은 깔끔하게 변형됩니다. 먼저,"
          },
          {
            "kind": "p",
            "text": "[[[\\csc(A)=\\frac{c}{a}]]]"
          },
          {
            "kind": "p",
            "text": "양변에 [[a]]를 곱합니다."
          },
          {
            "kind": "p",
            "text": "[[[\\boxed{c=a\\times\\csc(A)}]]]"
          },
          {
            "kind": "p",
            "text": "빗변은 대변에 코시컨트 비를 곱한 값입니다. [[a=6\\text{ m}]], [[\\csc(A)=2.5]]인 경우,"
          },
          {
            "kind": "p",
            "text": "[[c=6\\times2.5]]"
          },
          {
            "kind": "p",
            "text": "[[\\boxed{c=15\\text{ m}}]]"
          },
          {
            "kind": "p",
            "text": "결과는 대변보다 깁니다. 모든 빗변은 그래야 합니다."
          },
          {
            "kind": "h3",
            "text": "대변 되찾는 방법"
          },
          {
            "kind": "p",
            "text": "대신 [[a]]에 대해 풀면,"
          },
          {
            "kind": "p",
            "text": "[[[\\boxed{a=\\frac{c}{\\csc(A)}}]]]"
          },
          {
            "kind": "p",
            "text": "[[c=12\\text{ m}]], [[\\csc(A)=2]]인 경우,"
          },
          {
            "kind": "p",
            "text": "[[a=12/2]]"
          },
          {
            "kind": "p",
            "text": "[[\\boxed{a=6\\text{ m}}]]"
          },
          {
            "kind": "p",
            "text": "이들은 같은 비의 수학적 변형입니다. 이 페이지의 계산기는 비 자체를 계산합니다. 빗변 구하기 모드나 대변 구하기 모드가 따로 있지 않습니다."
          }
        ],
        "steps": [],
        "listItems": [],
        "related": [],
        "tables": [],
        "figures": []
      },
      "csc-mistakes": {
        "h2": "코시컨트 계산 시 흔한 실수",
        "blocks": [
          {
            "kind": "h3",
            "text": "틀린 풀이와 올바른 풀이"
          },
          {
            "kind": "p",
            "text": "[[c=5]], [[a=3]]이 주어졌습니다."
          },
          {
            "kind": "p",
            "text": "틀림: [[3/5=0.6]]. 이는 사인 비이지 코시컨트 비가 아닙니다."
          },
          {
            "kind": "p",
            "text": "올바름: [[\\csc(A)=5/3\\approx1.6667]]."
          },
          {
            "kind": "p",
            "text": "검증: [[\\csc(A)=1/\\sin(A)]]이며 [[1/0.6\\approx1.6667]]입니다."
          }
        ],
        "steps": [],
        "listItems": [
          "<strong>코시컨트를 사인과 혼동하기.</strong>사인은 [[a/c]], 코시컨트는 [[c/a]]입니다. 문제점: 3-4-5 삼각형에서 0.6이라고 보고합니다. 해결: 빗변을 위에 둡니다.",
          "<strong>공식을 [[c/a]]가 아니라 [[a/c]]로 뒤집기.</strong>문제점: 답이 사인이 되어 항상 1 미만입니다. 해결: 긴 변이 분자에 있는지 확인합니다.",
          "<strong>코시컨트를 시컨트와 혼동하기.</strong>시컨트는 [[c/b]]로 코사인의 역수입니다. 문제점: 인접변을 사용합니다. 해결: 코시컨트는 사인 및 대변과 짝을 이룹니다.",
          "<strong>대변 대신 인접변 사용하기.</strong>문제점: 실수로 [[c/b]]를 계산합니다. 해결: 나누기 전에 각 [[A]] 맞은편 변인지 확인합니다.",
          "<strong>코시컨트가 도로 측정된다고 생각하기.</strong>문제점: 1.6667도라고 씁니다. 해결: 비는 순수한 수이지 각이 아닙니다.",
          "<strong>코시컨트 비를 미터나 센티미터와 함께 보고하기.</strong>문제점: 단위는 이미 소거되었습니다. 해결: 답에서 단위를 뺍니다.",
          "<strong>유효한 삼각형에서 1 미만의 결과를 받아들이기.</strong>문제점: 바뀐 입력의 계산을 믿습니다. 해결: 유효한 결과는 항상 1을 넘습니다.",
          "<strong>대변보다 짧은 빗변 입력하기.</strong>문제점: 입력이 불가능한 삼각형을 나타냅니다. 해결: 빗변 입력란에 더 긴 측정값을 넣습니다.",
          "<strong>0이나 음수 변 길이 입력하기.</strong>문제점: 0으로 나누거나 무의미한 음수 비가 됩니다. 해결: 양수 길이만 사용합니다.",
          "<strong>측정 단위 섞기.</strong>문제점: 센티미터를 미터로 나누면 비가 100배 어긋납니다. 해결: 먼저 두 변을 하나의 단위로 맞춥니다.",
          "<strong>너무 일찍 반올림하기.</strong>문제점: 되곱하기 전에 [[5/3]]을 1.67로 반올림하면 피할 수 있는 오차가 더해집니다. 해결: 마지막 단계까지 분수나 여분 자릿수를 유지합니다.",
          "<strong>기준각을 다른 예각과 혼동하기.</strong>문제점: 대변과 인접변 라벨이 뒤바뀝니다. 해결: 먼저 도면에 각 [[A]]를 표시합니다.",
          "<strong>큰 코시컨트 비가 각이라고 생각하기.</strong>문제점: 12.6667을 도로 읽습니다. 해결: 이는 배율이므로 빗변이 대변의 12.6667배라는 뜻입니다.",
          "<strong>코시컨트만으로 빗변이 정해진다고 생각하기.</strong>문제점: 하나의 수에서 길이가 나오기를 기대합니다. 해결: 비에는 [[c=a\\times\\csc(A)]]를 통한 대변도 필요합니다.",
          "<strong>사인의 역수와 코사인의 역수 혼동하기.</strong>문제점: 코시컨트 자리에 시컨트를 사용합니다. 해결: 사인은 코시컨트와, 코사인은 시컨트와 짝을 이룹니다."
        ],
        "related": [],
        "tables": [],
        "figures": []
      },
      "csc-verify": {
        "h2": "코시컨트 결과가 유효한지 확인하는 방법",
        "blocks": [
          {
            "kind": "p",
            "text": "유효하고 퇴화되지 않은 직각삼각형에는 다음이 필요합니다."
          },
          {
            "kind": "p",
            "text": "[[[c \\gt a \\gt 0]]]"
          },
          {
            "kind": "p",
            "text": "따라서 [[c/a \\gt 1]]입니다. 두 측정 모두 호환되는 단위를 사용해야 하고, 계산된 비는 1을 넘어야 합니다. 정확히 1이라는 결과는 예각이 90도에 가까워질 때의 한계값일 뿐 진짜 삼각형의 결과가 아닙니다. 1 미만의 비는 보통 뒤바뀐 입력, 잘못된 변 라벨, 호환되지 않는 측정을 나타냅니다."
          },
          {
            "kind": "h3",
            "text": "방법 1: 사인 역수로 확인하기"
          },
          {
            "kind": "p",
            "text": "[[\\sin(A)=a/c]]를 계산한 뒤 [[\\csc(A)=1/\\sin(A)]]를 계산합니다. 3-4-5 삼각형에서는 [[\\sin(A)=3/5=0.6]]이고 [[1/0.6\\approx1.6667]]로 직접 나눗셈과 일치합니다."
          },
          {
            "kind": "h3",
            "text": "방법 2: 피타고라스 정리로 확인하기"
          },
          {
            "kind": "p",
            "text": "인접변을 알거나 필요하면 [[b=\\sqrt{c^2-a^2}]]를 검증합니다. [[c=5]], [[a=3]]인 경우 [[b=\\sqrt{25-9}=4]]이고 [[3^2+4^2=5^2]]입니다. 이로써 변 길이들이 직각삼각형을 이룸을 확인합니다."
          },
          {
            "kind": "h3",
            "text": "방법 3: 곱셈으로 비 확인하기"
          },
          {
            "kind": "p",
            "text": "[[a\\times\\csc(A)\\approx c]]를 검증합니다. [[a=3]], [[\\csc(A)=5/3]]인 경우 [[3\\times\\frac{5}{3}=5]]입니다. 표시된 소수가 반올림되었으면 작은 차이가 생길 수 있습니다. 정확한 분수로는 차이가 사라집니다."
          }
        ],
        "steps": [],
        "listItems": [],
        "related": [],
        "tables": [],
        "figures": []
      },
      "csc-vs": {
        "h2": "코시컨트와 사인, 시컨트 및 다른 삼각비 비교",
        "blocks": [
          {
            "kind": "p",
            "text": "각 비는 서로 다른 변의 쌍을 비교합니다."
          },
          {
            "kind": "p",
            "text": "역수 짝은 사인과 코시컨트, 코사인과 시컨트입니다. [[\\csc(A)=1/\\sin(A)]]인 반면 [[\\sec(A)=1/\\cos(A)]]입니다. 코시컨트와 시컨트는 서로 바꿀 수 없습니다. 대변과 빗변을 아는 직접 측정 문제에는 사인이 적합하고, 역수를 중심으로 구성된 공식이나 알려진 코시컨트 값에서 빗변을 되찾을 때는 코시컨트가 적합합니다."
          },
          {
            "kind": "p",
            "text": "이웃한 비에 대해서는 <a href=\"/sine-ratio-calculator/\" class=\"text-primary hover:underline\">사인 비 계산기</a>, <a href=\"/secant-ratio-calculator/\" class=\"text-primary hover:underline\">시컨트 비 계산기</a>, <a href=\"/cotangent-ratio-calculator/\" class=\"text-primary hover:underline\">코탄젠트 비 계산기</a>, <a href=\"/right-triangle-trig-ratios-calculator/\" class=\"text-primary hover:underline\">직각삼각형 삼각비 계산기</a>를 참조하세요. 변 길이 자체가 미지수일 때는 <a href=\"/right-triangle-side-calculator/\" class=\"text-primary hover:underline\">직각삼각형 변 계산기</a>가 도움이 됩니다."
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
              ["사인", "sin(A) = a/c", "대변과 빗변"],
              ["코시컨트", "csc(A) = c/a", "빗변과 대변"],
              ["코사인", "cos(A) = b/c", "인접변과 빗변"],
              ["시컨트", "sec(A) = c/b", "빗변과 인접변"],
              ["탄젠트", "tan(A) = a/b", "대변과 인접변"],
              ["코탄젠트", "cot(A) = b/a", "인접변과 대변"]
            ]
          }
        ],
        "figures": []
      },
      "csc-faq": {
        "h2": "자주 묻는 질문",
        "blocks": [],
        "steps": [],
        "listItems": [],
        "related": [],
        "tables": [],
        "figures": []
      },
      "csc-related": {
        "h2": "관련 삼각법 계산기 더 보기",
        "blocks": [],
        "steps": [],
        "listItems": [],
        "related": [
          {
            "name": "직각삼각형 삼각비 계산기",
            "desc": "여섯 가지 삼각비를 한곳에서 한 번에 계산합니다."
          },
          {
            "name": "사인 비 계산기",
            "desc": "대변과 빗변에서 사인 비를 구합니다."
          },
          {
            "name": "시컨트 비 계산기",
            "desc": "빗변과 인접변에서 시컨트 비를 구합니다."
          },
          {
            "name": "코탄젠트 비 계산기",
            "desc": "인접변과 대변에서 코탄젠트 비를 구합니다."
          },
          {
            "name": "직각삼각형 변 계산기",
            "desc": "각이나 피타고라스 정리에서 미지의 변 길이를 구합니다."
          },
          {
            "name": "직각삼각형 각 계산기",
            "desc": "알려진 변 길이에서 예각을 구합니다."
          }
        ],
        "tables": [],
        "figures": []
      }
    },
    "faqHeading": "자주 묻는 질문",
    "relatedHeading": "관련 삼각법 계산기 더 보기",
    "faqs": [
      {
        "question": "직각삼각형에서 코시컨트 공식은?",
        "answer": "공식은 csc(A) = c / a입니다. 빗변을 각 A의 대변으로 나눕니다. 빗변 5, 대변 3이면 결과는 5/3, 약 1.6667입니다. 같은 값은 역수 항등식 csc(A) = 1 / sin(A)에서도 나옵니다."
      },
      {
        "question": "코시컨트는 사인과 어떤 관계인가요?",
        "answer": "코시컨트는 사인의 역수입니다. csc(A) = 1 / sin(A). 사인은 대변을 빗변으로 나누고, 코시컨트는 그 분수를 뒤집습니다. 둘 다 같은 삼각형을 나타내며 곱은 항상 1입니다. sin(A) = 0.6이면 csc(A) = 1 / 0.6, 약 1.6667입니다."
      },
      {
        "question": "유효한 직각삼각형에서 코시컨트가 1보다 큰 이유는?",
        "answer": "유효하고 퇴화되지 않은 직각삼각형에서는 빗변이 가장 긴 변이므로 c가 a를 초과하고, 큰 양수를 작은 양수로 나누면 항상 1을 넘습니다. 1 이하의 비는 뒤바뀐 입력, 잘못된 변 라벨 또는 불가능한 측정의 신호입니다."
      },
      {
        "question": "코시컨트와 시컨트의 차이는?",
        "answer": "코시컨트는 빗변을 대변으로 나누고(c/a), 시컨트는 빗변을 인접변으로 나눕니다(c/b). 코시컨트는 사인의 역수, 시컨트는 코사인의 역수입니다. 답하는 질문이 다르므로 대변과 인접변이 다를 때 서로 바꾸면 틀린 답이 나옵니다."
      },
      {
        "question": "30도 각의 코시컨트는?",
        "answer": "30도의 코시컨트는 정확히 2입니다. 30도의 대변은 빗변의 절반이기 때문입니다. c/a = 2/1 = 2. 확인: sin(30도) = 0.5이고 1 / 0.5 = 2입니다. 외워 둘 가치 있는 몇 안 되는 코시컨트 값 중 하나입니다."
      },
      {
        "question": "코시컨트 비에 단위가 있나요?",
        "answer": "없습니다. 빗변과 대변 모두 같은 단위로 측정되므로 나눗셈 중 단위가 소거됩니다. 변이 센티미터든 미터든 밀리미터든 코시컨트 비는 순수한 무차원 수입니다. 도, 미터, 피트를 붙여 보고하지 마세요."
      },
      {
        "question": "코시컨트가 1보다 작을 수 있나요?",
        "answer": "유효하고 퇴화되지 않은 직각삼각형에서는 아닙니다. 빗변이 대변보다 길므로 c/a는 1을 넘어야 합니다. 1 이하의 결과는 거의 확실히 두 입력이 바뀌어 도구가 c/a 대신 a/c(사인)를 계산했음을 의미합니다. 어느 측정값이 빗변인지 다시 확인하세요."
      },
      {
        "question": "변 길이에서 코시컨트를 계산하는 방법은?",
        "answer": "빗변 c와 대변 a를 확인하고, 둘이 같은 단위를 사용하며 c가 a보다 긴지 확인한 뒤 csc(A) = c / a를 계산합니다. c = 13m, a = 5m이면 답은 13/5 = 2.6입니다."
      },
      {
        "question": "코시컨트로 빗변을 구하는 방법은?",
        "answer": "공식을 c = a x csc(A)로 변형합니다. 알려진 대변에 코시컨트 비를 곱합니다. a = 6m, csc(A) = 2.5이면 c = 6 x 2.5 = 15m입니다. 결과는 항상 대변보다 길며, 이는 계산의 빠른 검산이 됩니다."
      },
      {
        "question": "코시컨트 계산기에 각도 입력이 필요한가요?",
        "answer": "아닙니다. 계산기에는 두 변의 길이, 즉 빗변과 대변만 필요합니다. 비 c/a는 그 측정값들로 완전히 정해지므로 각 A는 계산에 절대 들어가지 않습니다."
      },
      {
        "question": "각이 커지면 코시컨트는 어떻게 변하나요?",
        "answer": "예각이 커질수록 코시컨트는 감소합니다. 작은 각에서는 빗변에 대한 대변이 짧아 비가 크고, 큰 각에서는 대변이 빗변과 거의 같은 길이가 되어 비는 1 바로 위에 머뭅니다. 예를 들어 csc(30도) = 2, csc(45도)는 약 1.4142, csc(60도)는 약 1.1547입니다."
      },
      {
        "question": "사인 대신 코시컨트를 써야 할 때는?",
        "answer": "빗변 나누기 대변이 필요할 때 사용합니다. 코시컨트를 중심으로 구성된 공식, 역수 항등식 작업, 또는 코시컨트 값이 주어지고 변을 구하는 문제 등입니다. 직접 측정 문제에서는 보통 사인이 더 자연스러운 선택입니다."
      }
    ],
    "conclusion": {
      "h2": "자신 있게 코시컨트 비 마스터하기",
      "paragraphs": [
        "코시컨트는 반대편에서 본 사인입니다. 빗변을 대변으로 나누면 결과는 빗변 안에 대변의 길이가 몇 개 들어가는지 알려줍니다. 공식 [[\\csc(A)=c/a]]에는 두 개의 측정값만 필요하고, 답은 항상 1을 넘는 무차원 수이며, 역수 항등식 [[\\csc(A)=1/\\sin(A)]]은 모든 계산을 확인하는 내장 수단을 제공합니다. 삼각형이 사다리든 서까래든 교과서의 3-4-5든 방법은 변하지 않습니다. 빗변을 확인하고, 대변을 확인하고, 나누고, 검증하면 됩니다. 삼각형 기하를 확인할 수 있도록 <a href=\"/pythagorean-theorem-calculator/\" class=\"text-primary hover:underline\">피타고라스 정리 계산기</a>를 곁에 두고, 모든 코시컨트 계산을 위해 이 페이지를 북마크해 두세요."
      ]
    }
  },
  "ms": {
    "tocHeading": "Dalam Panduan Ini",
    "tocItems": {
      "csc-intro": "Apakah kalkulator nisbah kosekan?",
      "csc-triangle": "Memahami hipotenus dan sisi bertentangan",
      "csc-whatis": "Memahami kosekan dalam trigonometri",
      "csc-formula": "Formula kosekan dijelaskan langkah demi langkah",
      "csc-howto": "Cara menggunakan kalkulator",
      "csc-examples": "Contoh langkah demi langkah",
      "csc-applications": "Contoh kehidupan sebenar",
      "csc-angle": "Kosekan dan saiz sudut",
      "csc-recover": "Mencari hipotenus dengan kosekan",
      "csc-mistakes": "Kesilapan biasa",
      "csc-verify": "Menyemak keputusan anda",
      "csc-vs": "Kosekan vs. nisbah lain",
      "csc-faq": "Soalan lazim",
      "csc-related": "Kalkulator berkaitan"
    },
    "sections": {
      "csc-intro": {
        "h2": "Apakah kalkulator nisbah kosekan?",
        "blocks": [
          {
            "kind": "p",
            "text": "Kalkulator nisbah kosekan mencari kosekan sudut tirus segi tiga tepat daripada dua panjang sisi: hipotenus [[c]] dan sisi bertentangan [[a]]. Ia membahagikan yang pertama dengan yang kedua, memberikan [[\\csc(A)=c/a]]. Kosekan ialah salingan sinus: di mana sinus memberikan sisi bertentangan per hipotenus, kosekan memberikan hipotenus per sisi bertentangan, jadi kedua-dua nilai sentiasa berganda menjadi 1."
          },
          {
            "kind": "p",
            "text": "Kalkulator tidak memerlukan sebarang input sudut mahupun sisi bersebelahan, kerana nisbah [[c/a]] ditentukan sepenuhnya oleh kedua-dua panjang itu. Jawapannya ialah nombor tulen tanpa unit, memandangkan sentimeter dibahagi sentimeter akan terhapus, dan ia memerikan hipotenus sebagai gandaan sisi bertentangan. Untuk hipotenus 5 cm dan sisi bertentangan 3 cm, [[\\csc(A)=5/3\\approx1.6667]], bermakna hipotenus adalah kira-kira 1.67 kali sisi bertentangan."
          }
        ],
        "steps": [],
        "listItems": [],
        "related": [],
        "tables": [],
        "figures": []
      },
      "csc-triangle": {
        "h2": "Memahami hipotenus dan sisi bertentangan",
        "blocks": [
          {
            "kind": "h3",
            "text": "Apakah segi tiga tepat?"
          },
          {
            "kind": "p",
            "text": "Segi tiga tepat mempunyai satu sudut tepat [[90^\\circ]], iaitu sudut antara dua garis serenjang, seperti dinding bertemu lantai yang rata. Hipotenus terletak bertentangan dengan sudut tepat itu dan sentiasa merupakan sisi terpanjang. Memandangkan ketiga-tiga sudut mesti berjumlah [[180^\\circ]], dua sudut yang tinggal berkongsi tepat 90 darjah dan oleh itu kedua-duanya tirus. Kosekan tergolong dalam geometri ini kerana formulanya membandingkan dua sisi tersebut, hipotenus dan sisi bertentangan, dalam hubungan yang tetap."
          },
          {
            "kind": "h3",
            "text": "Apakah sisi bertentangan?"
          },
          {
            "kind": "p",
            "text": "Sisi bertentangan ialah sisi yang betul-betul berhadapan dengan sudut rujukan [[A]]: iaitu satu-satunya sisi segi tiga yang tidak menyentuh bucu [[A]]. Sisi yang dikira sebagai bertentangan bergantung pada sudut rujukan, jadi bertukar daripada sudut [[A]] kepada sudut [[B]] akan menukar label kedua-dua kaki. Dalam masalah praktikal, sisi bertentangan sering mewakili ketinggian menegak, perbezaan ketinggian, atau kaki serenjang sesuatu struktur. Mendapatkan sudut rujukan yang betul adalah penting, kerana sudut yang salah akan menukar sisi bertentangan dan bersebelahan secara senyap."
          },
          {
            "kind": "h3",
            "text": "Apakah hipotenus?"
          },
          {
            "kind": "p",
            "text": "Hipotenus ialah sisi yang bertentangan dengan sudut tepat, dan dua fakta mengenalinya dalam sebarang rajah, walau bagaimana segi tiga itu diputar: ia menghadap petak kecil yang menandakan sudut [[90^\\circ]], dan ia adalah sisi terpanjang. Dalam segi tiga yang sah dan tidak merosot, ia adalah lebih panjang dengan ketatnya berbanding mana-mana kaki. Dalam situasi sebenar ia boleh mewakili tangga yang bersandar pada dinding, jarak yang condong, garis penglihatan, kasau bumbung, atau sokongan pepenjuru."
          },
          {
            "kind": "h3",
            "text": "Apakah sisi bersebelahan?"
          },
          {
            "kind": "p",
            "text": "Sisi bersebelahan [[b]] ialah kaki yang menyentuh sudut [[A]] tanpa menjadi hipotenus. Ia tidak memainkan peranan dalam formula kosekan, sebab itulah kalkulator tidak pernah memintanya. Sisi [[b]] menjadi relevan untuk kosinus, tangen, sekan dan kotangen, jadi ingatlah ia apabila nisbah yang berbeza menjadi matlamat."
          }
        ],
        "steps": [],
        "listItems": [],
        "related": [],
        "tables": [],
        "figures": [
          {
            "alt": "Segi tiga tepat dengan sudut A di kiri bawah, sisi bertentangan a keemasan, bersebelahan b biru, hipotenus c merah jambu, formula csc(A)=c/a",
            "caption": "Sudut A terletak di kiri bawah; kosekan menggunakan hipotenus c dan sisi bertentangan a, bukan sisi bersebelahan b."
          }
        ]
      },
      "csc-whatis": {
        "h2": "Memahami kosekan dalam trigonometri",
        "blocks": [
          {
            "kind": "p",
            "text": "Kosekan membandingkan sisi condong yang lengkap bagi segi tiga tepat dengan sisi yang bertentangan dengan sudut rujukan:"
          },
          {
            "kind": "p",
            "text": "[[[\\csc(A)=\\frac{c}{a}]]]"
          },
          {
            "kind": "p",
            "text": "Di sini [[\\csc(A)]] ialah kosekan sudut [[A]], [[c]] ialah hipotenus, dan [[a]] ialah sisi bertentangan. Nisbah ini menjawab satu soalan: berapa banyak panjang sisi bertentangan yang muat dalam hipotenus?"
          },
          {
            "kind": "h3",
            "text": "Kosekan sebagai salingan sinus"
          },
          {
            "kind": "p",
            "text": "Mulakan dengan formula sinus:"
          },
          {
            "kind": "p",
            "text": "[[[\\sin(A)=\\frac{a}{c}]]]"
          },
          {
            "kind": "p",
            "text": "Mengambil salingan akan menterbalikkan pecahan, memindahkan hipotenus ke pengangka dan sisi bertentangan ke penyebut:"
          },
          {
            "kind": "p",
            "text": "[[[\\frac{1}{\\sin(A)}=\\frac{c}{a}]]]"
          },
          {
            "kind": "p",
            "text": "Memandangkan kosekan ditakrifkan sebagai salingan sinus:"
          },
          {
            "kind": "p",
            "text": "[[[\\boxed{\\csc(A)=\\frac{1}{\\sin(A)}=\\frac{c}{a}}]]]"
          },
          {
            "kind": "p",
            "text": "Semakan konkrit menjadikan pembalikan itu jelas. Dengan [[\\sin(A)=3/5=0.6]], salingannya ialah [[1/0.6=5/3\\approx1.6667]], iaitu tepat kosekan. Kedua-dua nombor memerikan segi tiga yang sama dari sudut pandangan salingan, dan mendarabkannya sentiasa mengembalikan 1."
          },
          {
            "kind": "h3",
            "text": "Mengapa kosekan lebih besar daripada 1"
          },
          {
            "kind": "p",
            "text": "Hipotenus lebih panjang daripada sisi bertentangan, jadi [[c \\gt a]] dan oleh itu [[c/a \\gt 1]]. Semakan berangka yang pantas: dengan [[c=10]] dan [[a=8]], nisbahnya ialah [[10/8=1.25]], melebihi 1 seperti yang diperlukan. Untuk sudut tirus yang besar, sisi bertentangan hampir sama panjang dengan hipotenus, jadi nisbahnya kekal sedikit melebihi 1, tetapi ia tidak boleh sama dengan 1 dalam segi tiga tepat yang sah dan tidak merosot."
          },
          {
            "kind": "h3",
            "text": "Apakah maksud nilai kosekan?"
          },
          {
            "kind": "p",
            "text": "Kosekan 2 bermakna hipotenus adalah tepat dua kali sisi bertentangan; 1.6667 bermakna kira-kira 1.6667 kali. Baca nombor itu sebagai pengganda, bukan sudut: ia tidak membawa darjah mahupun meter atau kaki, kerana kedua-dua unit sisi terhapus dalam pembahagian."
          },
          {
            "kind": "h3",
            "text": "Mengapa kosekan berbeza daripada kosinus?"
          },
          {
            "kind": "p",
            "text": "Namanya kelihatan serupa, tetapi hubungannya berbeza:"
          },
          {
            "kind": "p",
            "text": "[[[\\cos(A)=\\frac{b}{c}]]]"
          },
          {
            "kind": "p",
            "text": "[[[\\csc(A)=\\frac{c}{a}]]]"
          },
          {
            "kind": "p",
            "text": "Kosinus membandingkan sisi bersebelahan dengan hipotenus, manakala kosekan membandingkan hipotenus dengan sisi bertentangan. Pasangan yang perlu diingat: kosekan ialah salingan sinus, manakala sekan ialah salingan kosinus. Mencampuradukkan kedua-dua kofungsi ini adalah antara kesilapan paling biasa dalam trigonometri."
          }
        ],
        "steps": [],
        "listItems": [],
        "related": [],
        "tables": [],
        "figures": [
          {
            "alt": "Tiga peringkat: segi tiga 3-4-5, sinus 3/5=0.6, kosekan 5/3=1.6667, identiti csc(A)=1/sin(A)",
            "caption": "Sinus dan kosekan adalah salingan: menterbalikkan 3/5 memberikan 5/3, dan csc(A) = 1/sin(A)."
          }
        ]
      },
      "csc-formula": {
        "h2": "Formula kosekan dijelaskan langkah demi langkah",
        "blocks": [
          {
            "kind": "p",
            "text": "Formula ini bukan sewenang-wenangnya; ia terbit secara langsung daripada takrif sinus. Mulakan dengan nisbah sinus:"
          },
          {
            "kind": "p",
            "text": "[[[\\sin(A)=\\frac{a}{c}]]]"
          },
          {
            "kind": "p",
            "text": "Ambil salingan kedua-dua belah. Pengangka dan penyebut bertukar tempat:"
          },
          {
            "kind": "p",
            "text": "[[[\\frac{1}{\\sin(A)}=\\frac{c}{a}]]]"
          },
          {
            "kind": "p",
            "text": "Kerana kosekan ialah salingan sinus mengikut takrif:"
          },
          {
            "kind": "p",
            "text": "[[[\\boxed{\\csc(A)=\\frac{c}{a}}]]]"
          },
          {
            "kind": "p",
            "text": "Hipotenus muncul dalam pengangka kerana ia adalah penyebut sinus; sisi bertentangan turun ke penyebut kerana ia adalah pengangka sinus. Itulah keseluruhan penerbitan."
          },
          {
            "kind": "h3",
            "text": "Contoh yang diselesaikan sepenuhnya: segi tiga 3-4-5"
          },
          {
            "kind": "p",
            "text": "Diberi [[a=3\\text{ cm}]], [[b=4\\text{ cm}]], [[c=5\\text{ cm}]]:"
          },
          {
            "kind": "p",
            "text": "Langkah 1: Tulis formula. [[\\csc(A)=c/a]]"
          },
          {
            "kind": "p",
            "text": "Langkah 2: Gantikan ukuran. [[\\csc(A)=5/3]]"
          },
          {
            "kind": "p",
            "text": "Langkah 3: Bahagi. [[\\boxed{\\csc(A)\\approx1.6667}]]"
          },
          {
            "kind": "p",
            "text": "Langkah 4: Sahkan menggunakan sinus. [[\\sin(A)=3/5=0.6]], dan [[1/0.6\\approx1.6667]]. Kedua-dua laluan sampai pada nilai yang sama kerana ia adalah pandangan salingan bagi satu segi tiga. Perhatikan bahawa 1.6667 ialah perpuluhan yang dibundarkan; [[5/3]] ialah nisbah tepat untuk panjang sisi ini."
          }
        ],
        "steps": [],
        "listItems": [],
        "related": [],
        "tables": [],
        "figures": []
      },
      "csc-howto": {
        "h2": "Cara menggunakan kalkulator nisbah kosekan",
        "blocks": [
          {
            "kind": "p",
            "text": "Panduan di bawah sepadan dengan antara muka sebenar di halaman ini."
          }
        ],
        "steps": [
          "<strong>Kenal pasti sudut rujukan [[A]].</strong>Tentukan sudut tirus yang dihuraikan oleh nisbah, memandangkan sisi bertentangan ditakrifkan relatif terhadapnya.",
          "<strong>Cari hipotenus [[c]].</strong>Ia ialah sisi yang bertentangan dengan sudut tepat dan sisi terpanjang segi tiga.",
          "<strong>Cari sisi bertentangan [[a]].</strong>Ia ialah sisi yang betul-betul berhadapan dengan sudut [[A]].",
          "<strong>Ukur atau peroleh kedua-dua panjang sisi.</strong>Gunakan pita pengukur, lukisan, atau data yang diberikan, dengan mengekalkan unit yang sama untuk kedua-duanya.",
          "<strong>Masukkan hipotenus dalam medan input pertama.</strong>Ini ialah nilai yang lebih besar daripada kedua-duanya.",
          "<strong>Masukkan sisi bertentangan dalam medan input kedua.</strong>Ini ialah nilai yang lebih kecil daripada kedua-duanya.",
          "<strong>Pilih unit yang serasi dengan pemilih unit.</strong>Kedua-dua medan mesti menggunakan unit yang sama agar pembahagian bermakna.",
          "<strong>Pastikan kedua-dua nilai adalah positif.</strong>Panjang sifar atau negatif tidak boleh membentuk segi tiga.",
          "<strong>Semak bahawa hipotenus lebih panjang daripada sisi bertentangan.</strong>Jika tidak, input telah tertukar atau dilabel dengan salah.",
          "<strong>Klik Calculate csc(A).</strong>Alat membahagikan hipotenus dengan sisi bertentangan.",
          "<strong>Baca nisbah kosekan yang terhasil.</strong>Ia ialah nombor tanpa dimensi yang memerikan hipotenus sebagai gandaan sisi bertentangan.",
          "<strong>Sahkan bahawa jawapannya lebih besar daripada 1.</strong>Apa-apa sahaja pada atau di bawah 1 menandakan ralat input.",
          "<strong>Gunakan Reset untuk mengosongkan input</strong> dan mulakan pengiraan lain."
        ],
        "listItems": [],
        "related": [],
        "tables": [],
        "figures": []
      },
      "csc-examples": {
        "h2": "Contoh langkah demi langkah mengira kosekan",
        "blocks": [
          {
            "kind": "p",
            "text": "Keempat-empat contoh ini membina kemahiran teras sebelum aplikasi dunia sebenar. Setiap satu mengikut corak yang sama: tulis formula, gantikan, bahagi."
          },
          {
            "kind": "h3",
            "text": "Contoh 1: segi tiga tepat 3-4-5"
          },
          {
            "kind": "p",
            "text": "Diberi [[a=3\\text{ cm}]], [[b=4\\text{ cm}]], [[c=5\\text{ cm}]]:"
          },
          {
            "kind": "p",
            "text": "[[\\csc(A)=5/3]]"
          },
          {
            "kind": "p",
            "text": "[[\\boxed{\\csc(A)\\approx1.6667}]]"
          },
          {
            "kind": "p",
            "text": "Hipotenus adalah kira-kira 1.6667 kali sisi bertentangan. Sisi bersebelahan muncul dalam data yang diberikan hanya untuk melengkapkan segi tiga; formula mengabaikannya."
          },
          {
            "kind": "h3",
            "text": "Contoh 2: segi tiga tepat 5-12-13"
          },
          {
            "kind": "p",
            "text": "Diberi [[a=5\\text{ m}]], [[b=12\\text{ m}]], [[c=13\\text{ m}]]:"
          },
          {
            "kind": "p",
            "text": "[[\\csc(A)=13/5]]"
          },
          {
            "kind": "p",
            "text": "[[\\boxed{\\csc(A)=2.6}]]"
          },
          {
            "kind": "p",
            "text": "Keputusan melebihi 1 kerana hipotenus lebih panjang daripada sisi bertentangan. Sisi bersebelahan 12 m tidak diperlukan untuk pengiraan ini."
          },
          {
            "kind": "h3",
            "text": "Contoh 3: segi tiga 30-60-90"
          },
          {
            "kind": "p",
            "text": "Untuk sudut [[A=30^\\circ]], sisi bertentangan adalah separuh hipotenus. Dengan [[a=5\\text{ cm}]] dan [[c=10\\text{ cm}]]:"
          },
          {
            "kind": "p",
            "text": "[[\\csc(30^\\circ)=10/5]]"
          },
          {
            "kind": "p",
            "text": "[[\\boxed{\\csc(30^\\circ)=2}]]"
          },
          {
            "kind": "p",
            "text": "Sahkan: [[\\sin(30^\\circ)=0.5]], dan [[1/0.5=2]]. Nilai tepat ini wajar dihafal kerana segi tiga 30-60-90 sentiasa muncul dalam masalah geometri."
          },
          {
            "kind": "h3",
            "text": "Contoh 4: segi tiga dengan sisi bertentangan 8 dan hipotenus 10"
          },
          {
            "kind": "p",
            "text": "Diberi [[a=8\\text{ m}]] dan [[c=10\\text{ m}]]:"
          },
          {
            "kind": "p",
            "text": "[[\\csc(A)=10/8]]"
          },
          {
            "kind": "p",
            "text": "[[\\boxed{\\csc(A)=1.25}]]"
          },
          {
            "kind": "p",
            "text": "Nisbah ini lebih dekat kepada 1 berbanding keputusan 3-4-5 kerana sisi bertentangan merupakan perkadaran hipotenus yang lebih besar: 8/10 berbanding 3/5."
          }
        ],
        "steps": [],
        "listItems": [],
        "related": [],
        "tables": [],
        "figures": []
      },
      "csc-applications": {
        "h2": "Contoh kehidupan sebenar menggunakan nisbah kosekan",
        "blocks": [
          {
            "kind": "p",
            "text": "Kosekan ialah nisbah matematik dan bukannya nombor yang dilaporkan sendiri di tapak kerja. Nilainya terletak pada memerikan hubungan hipotenus dengan sisi bertentangan, mengesahkan pengiraan, dan membekalkan formula yang memerlukan kosekan. Setiap contoh di bawah mengandaikan segi tiga tepat yang dipermudahkan."
          },
          {
            "kind": "h3",
            "text": "Contoh 5: memahami panjang tangga berbanding ketinggiannya"
          },
          {
            "kind": "p",
            "text": "Tangga 5.5 m mencapai 4.5 m ke atas dinding menegak. Tangga ialah hipotenus [[c=5.5\\text{ m}]]; capaian itu ialah sisi bertentangan [[a=4.5\\text{ m}]]."
          },
          {
            "kind": "p",
            "text": "[[\\csc(A)=5.5/4.5]], jadi [[\\boxed{\\csc(A)\\approx1.2222}]]."
          },
          {
            "kind": "p",
            "text": "Tangga adalah kira-kira 1.2222 kali ketinggian menegak, dan [[c=a\\times\\csc(A)]] mendapatkan semula panjang tangga daripada ketinggian. Nisbah ini memerikan geometri sahaja, bukan keselamatan tangga."
          },
          {
            "kind": "h3",
            "text": "Contoh 6: mengira nisbah kosekan kasau bumbung"
          },
          {
            "kind": "p",
            "text": "Kasau bumbung 6.5 m mempunyai kenaikan menegak 4 m: kasau ialah hipotenus yang condong [[c=6.5\\text{ m}]]; kenaikan ialah sisi bertentangan [[a=4\\text{ m}]]."
          },
          {
            "kind": "p",
            "text": "[[\\csc(A)=6.5/4]], jadi [[\\boxed{\\csc(A)=1.625}]]."
          },
          {
            "kind": "p",
            "text": "Kasau adalah 1.625 kali kenaikan menegak. Pengiraan ini tidak mengesahkan kesesuaian struktur atau pematuhan reka bentuk bumbung."
          },
          {
            "kind": "h3",
            "text": "Contoh 7: menilai nisbah kosekan tanjakan"
          },
          {
            "kind": "p",
            "text": "Tanjakan mempunyai panjang condong 9.5 m dan kenaikan menegak 0.75 m: [[c=9.5\\text{ m}]] dan [[a=0.75\\text{ m}]]."
          },
          {
            "kind": "p",
            "text": "[[\\csc(A)=9.5/0.75]], jadi [[\\boxed{\\csc(A)\\approx12.6667}]]."
          },
          {
            "kind": "p",
            "text": "Nisbahnya besar kerana panjang condong jauh melebihi kenaikan menegak, seperti yang sepatutnya bagi tanjakan yang landai. Nisbah sahaja tidak menentukan kebolehcapaian atau pematuhan kod bangunan."
          },
          {
            "kind": "h3",
            "text": "Contoh 8: garis ukur dengan perbezaan ketinggian yang diketahui"
          },
          {
            "kind": "p",
            "text": "Ukuran ukur yang dipermudahkan merekodkan jarak garis lurus 50 m dan perbezaan menegak 30 m: garis lurus ialah hipotenus [[c=50\\text{ m}]]; dengan perbezaan menegak sebagai sisi bertentangan [[a=30\\text{ m}]]."
          },
          {
            "kind": "p",
            "text": "[[\\csc(A)=50/30]], jadi [[\\boxed{\\csc(A)\\approx1.6667}]]."
          },
          {
            "kind": "p",
            "text": "Jarak condong adalah kira-kira 1.6667 kali komponen menegak. Ukur sebenar mungkin memerlukan pembetulan tambahan di luar model yang dipermudahkan ini."
          },
          {
            "kind": "h3",
            "text": "Contoh 9: mengira nisbah wayar penambat"
          },
          {
            "kind": "p",
            "text": "Wayar penambat 18 m mempunyai pemisahan menegak 10 m antara hujungnya: wayar ialah hipotenus [[c=18\\text{ m}]]; pemisahan ialah sisi bertentangan [[a=10\\text{ m}]]."
          },
          {
            "kind": "p",
            "text": "[[\\csc(A)=18/10]], jadi [[\\boxed{\\csc(A)=1.8}]]."
          },
          {
            "kind": "p",
            "text": "Wayar adalah 1.8 kali pemisahan menegak. Nisbah tidak menentukan ketegangan wayar, kekuatan sauh, atau keselamatan struktur."
          },
          {
            "kind": "h3",
            "text": "Contoh 10: menilai nisbah gelegar tangga"
          },
          {
            "kind": "p",
            "text": "Gelegar tangga 5 m yang dipermudahkan mempunyai kenaikan menegak 2.8 m: gelegar ialah hipotenus [[c=5\\text{ m}]]; kenaikan ialah sisi bertentangan [[a=2.8\\text{ m}]]."
          },
          {
            "kind": "p",
            "text": "[[\\csc(A)=5/2.8]], jadi [[\\boxed{\\csc(A)\\approx1.7857}]]."
          },
          {
            "kind": "p",
            "text": "Pepinjur adalah kira-kira 1.7857 kali kenaikan menegak: pengiraan geometri yang dipermudahkan, bukan penilaian reka bentuk tangga yang lengkap."
          },
          {
            "kind": "h3",
            "text": "Contoh 11: segmen penerbangan lurus pesawat"
          },
          {
            "kind": "p",
            "text": "Pesawat bergerak 5 km sepanjang laluan lurus sambil menambah 1.5 km ketinggian: laluan ialah hipotenus [[c=5\\text{ km}]]; penambahan ketinggian ialah sisi bertentangan [[a=1.5\\text{ km}]]."
          },
          {
            "kind": "p",
            "text": "[[\\csc(A)=5/1.5]], jadi [[\\boxed{\\csc(A)\\approx3.3333}]]."
          },
          {
            "kind": "p",
            "text": "Jarak penerbangan jauh melebihi penambahan menegak, justeru nisbahnya besar. Ini ialah contoh yang diidealkan, bukan analisis lengkap bagi laluan penerbangan yang berubah."
          },
          {
            "kind": "h3",
            "text": "Contoh 12: pendakap mekanikal"
          },
          {
            "kind": "p",
            "text": "Pendakap pepenjuru sepanjang 1,700 mm dengan komponen menegak 800 mm: pendakap ialah hipotenus [[c=1700\\text{ mm}]]; komponen menegak ialah sisi bertentangan [[a=800\\text{ mm}]]."
          },
          {
            "kind": "p",
            "text": "[[\\csc(A)=1700/800]], jadi [[\\boxed{\\csc(A)=2.125}]]."
          },
          {
            "kind": "p",
            "text": "Milimeter berfungsi sama baiknya dengan meter apabila kedua-dua sisi berkongsi unit. Nisbah tidak menetapkan kekuatan pendakap."
          },
          {
            "kind": "h3",
            "text": "Contoh 13: boom kren"
          },
          {
            "kind": "p",
            "text": "Boom kren 10 m yang dipermudahkan mempunyai komponen menegak 8 m: boom ialah hipotenus [[c=10\\text{ m}]]; komponen menegak ialah sisi bertentangan [[a=8\\text{ m}]]."
          },
          {
            "kind": "p",
            "text": "[[\\csc(A)=10/8]], jadi [[\\boxed{\\csc(A)=1.25}]]."
          },
          {
            "kind": "p",
            "text": "Panjang boom hanyalah 1.25 kali komponen menegaknya. Nisbah tidak menetapkan kapasiti angkatan atau keselamatan operasi."
          },
          {
            "kind": "h3",
            "text": "Contoh 14: garis penglihatan ke puncak pokok"
          },
          {
            "kind": "p",
            "text": "Garis penglihatan 20 m ke puncak pokok mempunyai perbezaan menegak 12 m dari paras mata pemerhati: garis penglihatan ialah hipotenus [[c=20\\text{ m}]]; perbezaan menegak ialah sisi bertentangan [[a=12\\text{ m}]]."
          },
          {
            "kind": "p",
            "text": "[[\\csc(A)=20/12]], jadi [[\\boxed{\\csc(A)\\approx1.6667}]]."
          },
          {
            "kind": "p",
            "text": "Jarak penglihatan adalah kira-kira 1.6667 kali perbezaan menegak. Keputusan tidak memberikan jumlah ketinggian pokok di atas tanah."
          },
          {
            "kind": "h3",
            "text": "Contoh 15: cerun lurus laluan mendaki"
          },
          {
            "kind": "p",
            "text": "Segmen mendaki yang lurus mencerun 100 m dengan penambahan ketinggian 80 m: cerun ialah hipotenus [[c=100\\text{ m}]]; penambahan ialah sisi bertentangan [[a=80\\text{ m}]]."
          },
          {
            "kind": "p",
            "text": "[[\\csc(A)=100/80]], jadi [[\\boxed{\\csc(A)=1.25}]]."
          },
          {
            "kind": "p",
            "text": "Nisbah kekal dekat dengan 1 kerana komponen menegak merupakan bahagian cerun yang besar. Laluan mendaki sebenar boleh mempunyai kecerunan yang berbeza-beza."
          },
          {
            "kind": "h3",
            "text": "Contoh 16: sokongan awning"
          },
          {
            "kind": "p",
            "text": "Sokongan awning 3.5 m mempunyai komponen menegak 1.2 m: sokongan ialah hipotenus [[c=3.5\\text{ m}]]; komponen menegak ialah sisi bertentangan [[a=1.2\\text{ m}]]."
          },
          {
            "kind": "p",
            "text": "[[\\csc(A)=3.5/1.2]], jadi [[\\boxed{\\csc(A)\\approx2.9167}]]."
          },
          {
            "kind": "p",
            "text": "Sokongan adalah kira-kira 2.9167 kali komponen menegaknya. Keputusan tidak menetapkan kesesuaian struktur."
          },
          {
            "kind": "h3",
            "text": "Contoh praktikal dibandingkan"
          },
          {
            "kind": "p",
            "text": "Coraknya konsisten: nisbah adalah besar apabila sisi bertentangan merupakan pecahan kecil hipotenus, dan hampir 1 apabila kedua-duanya hampir sama. Membaca kosekan sebagai pengganda memastikan setiap keputusan bermakna."
          }
        ],
        "steps": [],
        "listItems": [],
        "related": [],
        "tables": [
          {
            "headers": [
              "Situasi",
              "Hipotenus c",
              "Sisi bertentangan a",
              "Formula kosekan",
              "Nisbah yang dikira",
              "Tafsiran"
            ],
            "rows": [
              ["Tangga", "5.5 m", "4.5 m", "5.5/4.5", "1.2222", "Tangga adalah 1.2222 kali ketinggian"],
              ["Kasau bumbung", "6.5 m", "4 m", "6.5/4", "1.625", "Kasau adalah 1.625 kali kenaikan"],
              ["Tanjakan", "9.5 m", "0.75 m", "9.5/0.75", "12.6667", "Cerun adalah 12.6667 kali kenaikan"],
              ["Ukur", "50 m", "30 m", "50/30", "1.6667", "Jarak adalah 1.6667 kali turunan"],
              ["Wayar penambat", "18 m", "10 m", "18/10", "1.8", "Wayar adalah 1.8 kali pemisahan"],
              ["Gelegar tangga", "5 m", "2.8 m", "5/2.8", "1.7857", "Gelegar adalah 1.7857 kali kenaikan"],
              ["Segmen penerbangan", "5 km", "1.5 km", "5/1.5", "3.3333", "Laluan adalah 3.3333 kali penambahan"],
              ["Pendakap mekanikal", "1700 mm", "800 mm", "1700/800", "2.125", "Pendakap adalah 2.125 kali komponen"],
              ["Boom kren", "10 m", "8 m", "10/8", "1.25", "Boom adalah 1.25 kali komponen"],
              ["Garis penglihatan pokok", "20 m", "12 m", "20/12", "1.6667", "Garis penglihatan adalah 1.6667 kali perbezaan"],
              ["Cerun mendaki", "100 m", "80 m", "100/80", "1.25", "Cerun adalah 1.25 kali penambahan"],
              ["Sokongan awning", "3.5 m", "1.2 m", "3.5/1.2", "2.9167", "Sokongan adalah 2.9167 kali komponen"]
            ]
          }
        ],
        "figures": [
          {
            "alt": "Empat panel: tangga 1.2222, kasau 1.625, tanjakan 12.6667, ukur 1.6667 nisbah kosekan dengan segi tiga tepat",
            "caption": "Empat pengiraan praktikal: setiap panel menunjukkan segi tiga, formula, dan nisbah."
          }
        ]
      },
      "csc-angle": {
        "h2": "Memahami hubungan antara kosekan dan saiz sudut",
        "blocks": [
          {
            "kind": "p",
            "text": "Kosekan bergerak dalam arah yang bertentangan dengan sudut. Apabila sudut tirus kecil, sisi bertentangan adalah pendek berbanding hipotenus, jadi [[c/a]] adalah besar. Apabila sudut membesar, sisi bertentangan memanjang ke arah hipotenus, dan nisbah mengecut. Nilai rujukan yang disahkan di bawah menunjukkan coraknya:"
          },
          {
            "kind": "p",
            "text": "Apabila sudut menghampiri [[90^\\circ]], sisi bertentangan menghampiri hipotenus dan nisbah menghampiri 1, sambil kekal melebihi 1 untuk setiap segi tiga tepat yang sah dan tidak merosot. Baris 90 darjah hanyalah rujukan had, memandangkan sudut [[A]] mestilah tirus. Apabila sudut menghampiri [[0^\\circ]], sisi bertentangan mengecut ke arah sifar dan nisbah membesar tanpa batas. Nisbah hampir 1 menandakan sudut tirus yang agak besar; nisbah yang besar menandakan sudut yang agak kecil."
          },
          {
            "kind": "p",
            "text": "Kalkulator tidak menerima input sudut; ia mengira nisbah daripada dua panjang sisi. Nilai rujukan ini berfungsi sebagai orientasi dan sebagai nilai semak apabila mengesahkan keputusan."
          }
        ],
        "steps": [],
        "listItems": [],
        "related": [],
        "tables": [
          {
            "headers": [
              "Sudut A",
              "Sinus sin(A)",
              "Kosekan csc(A)"
            ],
            "rows": [
              ["30 darjah", "0.5", "2"],
              ["45 darjah", "0.7071", "1.4142"],
              ["60 darjah", "0.8660", "1.1547"],
              ["90 darjah", "1", "1, sebagai nilai had"]
            ]
          }
        ],
        "figures": [
          {
            "alt": "Tiga segi tiga pada 30, 45, 60 darjah dengan nilai kosekan 2, 1.4142, 1.1547; nisbah jatuh apabila sudut membesar",
            "caption": "Apabila sisi bertentangan menjadi bahagian hipotenus yang lebih besar, csc(A) semakin hampir kepada 1."
          }
        ]
      },
      "csc-recover": {
        "h2": "Menggunakan kosekan untuk mencari hipotenus",
        "blocks": [
          {
            "kind": "p",
            "text": "Formula disusun semula dengan kemas. Mulakan dengan:"
          },
          {
            "kind": "p",
            "text": "[[[\\csc(A)=\\frac{c}{a}]]]"
          },
          {
            "kind": "p",
            "text": "Darab kedua-dua belah dengan [[a]]:"
          },
          {
            "kind": "p",
            "text": "[[[\\boxed{c=a\\times\\csc(A)}]]]"
          },
          {
            "kind": "p",
            "text": "Hipotenus ialah sisi bertentangan didarab dengan nisbah kosekan. Dengan [[a=6\\text{ m}]] dan [[\\csc(A)=2.5]]:"
          },
          {
            "kind": "p",
            "text": "[[c=6\\times2.5]]"
          },
          {
            "kind": "p",
            "text": "[[\\boxed{c=15\\text{ m}}]]"
          },
          {
            "kind": "p",
            "text": "Keputusan lebih panjang daripada sisi bertentangan, seperti yang mesti bagi setiap hipotenus."
          },
          {
            "kind": "h3",
            "text": "Cara mendapatkan semula sisi bertentangan"
          },
          {
            "kind": "p",
            "text": "Menyelesaikan untuk [[a]] pula memberikan:"
          },
          {
            "kind": "p",
            "text": "[[[\\boxed{a=\\frac{c}{\\csc(A)}}]]]"
          },
          {
            "kind": "p",
            "text": "Dengan [[c=12\\text{ m}]] dan [[\\csc(A)=2]]:"
          },
          {
            "kind": "p",
            "text": "[[a=12/2]]"
          },
          {
            "kind": "p",
            "text": "[[\\boxed{a=6\\text{ m}}]]"
          },
          {
            "kind": "p",
            "text": "Ini ialah susunan semula matematik bagi nisbah yang sama. Kalkulator di halaman ini mengira nisbah itu sendiri; ia tidak menyediakan mod mencari hipotenus atau mod mencari sisi bertentangan yang berasingan."
          }
        ],
        "steps": [],
        "listItems": [],
        "related": [],
        "tables": [],
        "figures": []
      },
      "csc-mistakes": {
        "h2": "Kesilapan biasa ketika mengira kosekan",
        "blocks": [
          {
            "kind": "h3",
            "text": "Salah lawan betul"
          },
          {
            "kind": "p",
            "text": "Diberi [[c=5]] dan [[a=3]]:"
          },
          {
            "kind": "p",
            "text": "Salah: [[3/5=0.6]]. Ini ialah nisbah sinus, bukan nisbah kosekan."
          },
          {
            "kind": "p",
            "text": "Betul: [[\\csc(A)=5/3\\approx1.6667]]."
          },
          {
            "kind": "p",
            "text": "Sahkan: [[\\csc(A)=1/\\sin(A)]], dan [[1/0.6\\approx1.6667]]."
          }
        ],
        "steps": [],
        "listItems": [
          "<strong>Mengelirukan kosekan dengan sinus.</strong>Sinus ialah [[a/c]]; kosekan ialah [[c/a]]. Apa yang silap: melaporkan 0.6 untuk segi tiga 3-4-5. Betulkan: letakkan hipotenus di atas.",
          "<strong>Menterbalikkan formula kepada [[a/c]] dan bukan [[c/a]].</strong>Apa yang silap: jawapannya ialah sinus, sentiasa di bawah 1. Betulkan: semak bahawa sisi yang lebih panjang ialah pengangka.",
          "<strong>Mengelirukan kosekan dengan sekan.</strong>Sekan ialah [[c/b]], salingan kosinus. Apa yang silap: menggunakan sisi bersebelahan. Betulkan: kosekan berpasangan dengan sinus dan sisi bertentangan.",
          "<strong>Menggunakan sisi bersebelahan dan bukan sisi bertentangan.</strong>Apa yang silap: mengira [[c/b]] secara tersilap. Betulkan: sahkan sisi yang berhadapan dengan sudut [[A]] sebelum membahagi.",
          "<strong>Menganggap kosekan diukur dalam darjah.</strong>Apa yang silap: menulis 1.6667 darjah. Betulkan: nisbah ialah nombor tulen, bukan sudut.",
          "<strong>Melaporkan nisbah kosekan dengan meter atau sentimeter.</strong>Apa yang silap: unit telah pun terhapus. Betulkan: buang unit daripada jawapan.",
          "<strong>Menerima keputusan kurang daripada 1 untuk segi tiga yang sah.</strong>Apa yang silap: mempercayai pengiraan input yang tertukar. Betulkan: keputusan yang sah sentiasa melebihi 1.",
          "<strong>Memasukkan hipotenus yang lebih pendek daripada sisi bertentangan.</strong>Apa yang silap: input memerikan segi tiga yang mustahil. Betulkan: medan hipotenus mesti memegang ukuran yang lebih panjang.",
          "<strong>Memasukkan panjang sisi sifar atau negatif.</strong>Apa yang silap: pembahagian dengan sifar atau nisbah negatif yang tidak bermakna. Betulkan: gunakan panjang positif sahaja.",
          "<strong>Mencampurkan unit ukuran.</strong>Apa yang silap: sentimeter dibahagi meter memesongkan nisbah sebanyak faktor 100. Betulkan: tukarkan kedua-dua sisi kepada satu unit dahulu.",
          "<strong>Membundar terlalu awal.</strong>Apa yang silap: membundarkan [[5/3]] kepada 1.67 sebelum mendarab semula menambah ralat yang boleh dielakkan. Betulkan: kekalkan pecahan atau digit tambahan sehingga langkah akhir.",
          "<strong>Mengelirukan sudut rujukan dengan sudut tirus yang satu lagi.</strong>Apa yang silap: label bertentangan dan bersebelahan tertukar. Betulkan: tandakan sudut [[A]] pada rajah dahulu.",
          "<strong>Menganggap nisbah kosekan yang besar ialah sudut.</strong>Apa yang silap: membaca 12.6667 sebagai darjah. Betulkan: ia ialah pengganda, jadi hipotenus adalah 12.6667 kali sisi bertentangan.",
          "<strong>Menganggap kosekan sahaja menentukan hipotenus.</strong>Apa yang silap: menjangkakan satu nombor menghasilkan panjang. Betulkan: nisbah memerlukan sisi bertentangan juga, melalui [[c=a\\times\\csc(A)]].",
          "<strong>Mengelirukan salingan sinus dengan salingan kosinus.</strong>Apa yang silap: menggunakan sekan di tempat kosekan. Betulkan: sinus berpasangan dengan kosekan; kosinus berpasangan dengan sekan."
        ],
        "related": [],
        "tables": [],
        "figures": []
      },
      "csc-verify": {
        "h2": "Cara menyemak sama ada keputusan kosekan anda sah",
        "blocks": [
          {
            "kind": "p",
            "text": "Segi tiga tepat yang sah dan tidak merosot memerlukan:"
          },
          {
            "kind": "p",
            "text": "[[[c \\gt a \\gt 0]]]"
          },
          {
            "kind": "p",
            "text": "Oleh itu [[c/a \\gt 1]]. Kedua-dua ukuran mesti menggunakan unit yang serasi, dan nisbah yang dikira mesti melebihi 1. Keputusan tepat 1 hanyalah nilai had apabila sudut tirus menghampiri 90 darjah, bukan keputusan untuk segi tiga yang sebenar. Nisbah di bawah 1 biasanya menunjukkan input yang terbalik, label sisi yang salah, atau ukuran yang tidak serasi."
          },
          {
            "kind": "h3",
            "text": "Kaedah 1: semak salingan sinus"
          },
          {
            "kind": "p",
            "text": "Kira [[\\sin(A)=a/c]], kemudian [[\\csc(A)=1/\\sin(A)]]. Untuk segi tiga 3-4-5, [[\\sin(A)=3/5=0.6]] dan [[1/0.6\\approx1.6667]], sepadan dengan pembahagian langsung."
          },
          {
            "kind": "h3",
            "text": "Kaedah 2: semak teorem Pythagoras"
          },
          {
            "kind": "p",
            "text": "Jika sisi bersebelahan diketahui atau diperlukan, sahkan [[b=\\sqrt{c^2-a^2}]]. Untuk [[c=5]] dan [[a=3]]: [[b=\\sqrt{25-9}=4]], dan [[3^2+4^2=5^2]]. Ini mengesahkan panjang sisi membentuk segi tiga tepat."
          },
          {
            "kind": "h3",
            "text": "Kaedah 3: semak nisbah dengan pendaraban"
          },
          {
            "kind": "p",
            "text": "Sahkan [[a\\times\\csc(A)\\approx c]]. Untuk [[a=3]] dan [[\\csc(A)=5/3]]: [[3\\times\\frac{5}{3}=5]]. Percanggahan kecil mungkin muncul apabila perpuluhan yang dipaparkan telah dibundarkan; pecahan tepat menghapuskannya."
          }
        ],
        "steps": [],
        "listItems": [],
        "related": [],
        "tables": [],
        "figures": []
      },
      "csc-vs": {
        "h2": "Kosekan vs. sinus, sekan dan nisbah trigonometri lain",
        "blocks": [
          {
            "kind": "p",
            "text": "Setiap nisbah membandingkan pasangan sisi yang berbeza:"
          },
          {
            "kind": "p",
            "text": "Pasangan salingan ialah sinus dengan kosekan dan kosinus dengan sekan: [[\\csc(A)=1/\\sin(A)]], manakala [[\\sec(A)=1/\\cos(A)]]. Kosekan dan sekan tidak boleh ditukar ganti. Sinus sesuai untuk masalah ukuran langsung dengan sisi bertentangan dan hipotenus yang diketahui; kosekan sesuai untuk formula yang dibina sekitar salingan dan untuk mendapatkan semula hipotenus daripada nilai kosekan yang diketahui."
          },
          {
            "kind": "p",
            "text": "Untuk nisbah yang berjiran, lihat <a href=\"/sine-ratio-calculator/\" class=\"text-primary hover:underline\">Kalkulator Nisbah Sinus</a>, <a href=\"/secant-ratio-calculator/\" class=\"text-primary hover:underline\">Kalkulator Nisbah Sekan</a>, <a href=\"/cotangent-ratio-calculator/\" class=\"text-primary hover:underline\">Kalkulator Nisbah Kotangen</a>, dan <a href=\"/right-triangle-trig-ratios-calculator/\" class=\"text-primary hover:underline\">Kalkulator Nisbah Trigonometri Segi Tiga Tepat</a>. <a href=\"/right-triangle-side-calculator/\" class=\"text-primary hover:underline\">Kalkulator Sisi Segi Tiga Tepat</a> membantu apabila panjang sisi itu sendiri tidak diketahui."
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
              ["Sinus", "sin(A) = a/c", "Sisi bertentangan dengan hipotenus"],
              ["Kosekan", "csc(A) = c/a", "Hipotenus dengan sisi bertentangan"],
              ["Kosinus", "cos(A) = b/c", "Sisi bersebelahan dengan hipotenus"],
              ["Sekan", "sec(A) = c/b", "Hipotenus dengan sisi bersebelahan"],
              ["Tangen", "tan(A) = a/b", "Sisi bertentangan dengan sisi bersebelahan"],
              ["Kotangen", "cot(A) = b/a", "Sisi bersebelahan dengan sisi bertentangan"]
            ]
          }
        ],
        "figures": []
      },
      "csc-faq": {
        "h2": "Soalan lazim",
        "blocks": [],
        "steps": [],
        "listItems": [],
        "related": [],
        "tables": [],
        "figures": []
      },
      "csc-related": {
        "h2": "Terokai kalkulator trigonometri berkaitan",
        "blocks": [],
        "steps": [],
        "listItems": [],
        "related": [
          {
            "name": "Kalkulator Nisbah Trigonometri Segi Tiga Tepat",
            "desc": "Kira keenam-enam nisbah trigonometri sekaligus di satu tempat."
          },
          {
            "name": "Kalkulator Nisbah Sinus",
            "desc": "Cari nisbah sinus daripada sisi bertentangan dan hipotenus."
          },
          {
            "name": "Kalkulator Nisbah Sekan",
            "desc": "Cari nisbah sekan daripada hipotenus dan sisi bersebelahan."
          },
          {
            "name": "Kalkulator Nisbah Kotangen",
            "desc": "Cari nisbah kotangen daripada sisi bersebelahan dan sisi bertentangan."
          },
          {
            "name": "Kalkulator Sisi Segi Tiga Tepat",
            "desc": "Cari panjang sisi yang tidak diketahui daripada sudut atau teorem Pythagoras."
          },
          {
            "name": "Kalkulator Sudut Segi Tiga Tepat",
            "desc": "Cari sudut tirus daripada panjang sisi yang diketahui."
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
        "question": "Apakah formula kosekan dalam segi tiga tepat?",
        "answer": "Formulanya ialah csc(A) = c / a: bahagikan hipotenus dengan sisi yang bertentangan dengan sudut A. Untuk hipotenus 5 dan sisi bertentangan 3, keputusannya ialah 5/3, kira-kira 1.6667. Nilai yang sama diperoleh daripada identiti salingan csc(A) = 1 / sin(A)."
      },
      {
        "question": "Bagaimanakah kosekan berkait dengan sinus?",
        "answer": "Kosekan ialah salingan sinus: csc(A) = 1 / sin(A). Sinus membahagikan sisi bertentangan dengan hipotenus; kosekan menterbalikkan pecahan itu. Kedua-duanya memerikan segi tiga yang sama, dan hasil darabnya sentiasa 1. Jika sin(A) = 0.6, maka csc(A) = 1 / 0.6, kira-kira 1.6667."
      },
      {
        "question": "Mengapakah kosekan lebih besar daripada 1 dalam segi tiga tepat yang sah?",
        "answer": "Dalam segi tiga tepat yang sah dan tidak merosot, hipotenus ialah sisi terpanjang, jadi c melebihi a, dan nombor yang lebih besar dibahagi dengan nombor positif yang lebih kecil sentiasa melebihi 1. Nisbah 1 atau kurang menandakan input yang terbalik, label sisi yang salah, atau ukuran yang mustahil."
      },
      {
        "question": "Apakah perbezaan antara kosekan dan sekan?",
        "answer": "Kosekan membahagikan hipotenus dengan sisi bertentangan (c/a), manakala sekan membahagikan hipotenus dengan sisi bersebelahan (c/b). Kosekan ialah salingan sinus; sekan ialah salingan kosinus. Ia menjawab soalan yang berbeza, jadi menukarkannya memberikan jawapan yang salah apabila sisi bertentangan dan bersebelahan berbeza."
      },
      {
        "question": "Berapakah kosekan sudut 30 darjah?",
        "answer": "Kosekan 30 darjah ialah tepat 2, kerana sisi yang bertentangan dengan 30 darjah adalah separuh hipotenus: c/a = 2/1 = 2. Semak: sin(30 darjah) = 0.5, dan 1 / 0.5 = 2. Ia adalah antara sedikit nilai kosekan yang wajar dihafal."
      },
      {
        "question": "Adakah nisbah kosekan mempunyai unit?",
        "answer": "Tidak. Kedua-dua hipotenus dan sisi bertentangan diukur dalam unit yang sama, jadi unit terhapus semasa pembahagian. Sama ada sisi dalam sentimeter, meter, atau milimeter, nisbah kosekan ialah nombor tulen tanpa dimensi. Jangan sekali-kali melaporkannya dengan darjah, meter, atau kaki."
      },
      {
        "question": "Bolehkah kosekan kurang daripada 1?",
        "answer": "Tidak untuk segi tiga tepat yang sah dan tidak merosot. Memandangkan hipotenus lebih panjang daripada sisi bertentangan, c/a mesti melebihi 1. Keputusan 1 atau kurang hampir sentiasa bermakna kedua-dua input telah tertukar, jadi alat mengira a/c (iaitu sinus) dan bukannya c/a. Semak semula ukuran yang manakah hipotenus."
      },
      {
        "question": "Bagaimana mengira kosekan daripada panjang sisi?",
        "answer": "Kenal pasti hipotenus c dan sisi bertentangan a, sahkan kedua-duanya menggunakan unit yang sama dan c lebih panjang daripada a, kemudian kira csc(A) = c / a. Dengan c = 13 m dan a = 5 m, jawapannya ialah 13/5 = 2.6."
      },
      {
        "question": "Bagaimana mencari hipotenus menggunakan kosekan?",
        "answer": "Susun semula formula kepada c = a x csc(A). Darabkan sisi bertentangan yang diketahui dengan nisbah kosekan. Jika a = 6 m dan csc(A) = 2.5, maka c = 6 x 2.5 = 15 m. Keputusan sentiasa lebih panjang daripada sisi bertentangan, iaitu semakan pantas ke atas aritmetik."
      },
      {
        "question": "Adakah kalkulator kosekan memerlukan input sudut?",
        "answer": "Tidak. Kalkulator hanya memerlukan dua panjang sisi: hipotenus dan sisi bertentangan. Nisbah c/a ditentukan sepenuhnya oleh ukuran itu, jadi sudut A tidak pernah memasuki pengiraan."
      },
      {
        "question": "Bagaimanakah kosekan berubah apabila sudut bertambah?",
        "answer": "Kosekan berkurang apabila sudut tirus bertambah. Sudut kecil mempunyai sisi bertentangan yang pendek berbanding hipotenus, jadi nisbahnya besar; sudut besar mempunyai sisi bertentangan yang hampir sama panjang dengan hipotenus, jadi nisbahnya kekal sedikit melebihi 1. Contohnya, csc(30 darjah) = 2, csc(45 darjah) kira-kira 1.4142, dan csc(60 darjah) kira-kira 1.1547."
      },
      {
        "question": "Bilakah saya harus menggunakan kosekan dan bukannya sinus?",
        "answer": "Gunakan kosekan apabila anda memerlukan hipotenus per sisi bertentangan: dalam formula yang dibina sekitar kosekan, dalam kerja identiti salingan, atau apabila masalah memberikan nilai kosekan dan meminta sisi. Untuk masalah ukuran langsung, sinus biasanya pilihan yang lebih semula jadi."
      }
    ],
    "conclusion": {
      "h2": "Kuasai nisbah kosekan dengan yakin",
      "paragraphs": [
        "Kosekan ialah sinus yang dilihat dari sisi lain: bahagikan hipotenus dengan sisi bertentangan, dan keputusan memberitahu anda berapa banyak panjang sisi bertentangan yang muat dalam hipotenus. Formula [[\\csc(A)=c/a]] hanya memerlukan dua ukuran, jawapannya sentiasa nombor tanpa dimensi melebihi 1, dan identiti salingan [[\\csc(A)=1/\\sin(A)]] memberi anda cara terbina dalam untuk menyemak setiap pengiraan. Sama ada segi tiga itu tangga, kasau, atau 3-4-5 dalam buku teks, kaedahnya tidak pernah berubah: kenal pasti hipotenus, kenal pasti sisi bertentangan, bahagi, dan sahkan. Simpan <a href=\"/pythagorean-theorem-calculator/\" class=\"text-primary hover:underline\">kalkulator teorem Pythagoras</a> berdekatan untuk mengesahkan geometri segi tiga, dan tandai buku halaman ini untuk setiap pengiraan kosekan."
      ]
    }
  },
  "pl": {
    "tocHeading": "W tym przewodniku",
    "tocItems": {
      "csc-intro": "Czym jest kalkulator stosunku cosecans?",
      "csc-triangle": "Przeciwprostokątna i przyprostokątna przeciwległa",
      "csc-whatis": "Cosecans w trygonometrii",
      "csc-formula": "Wzór na cosecans krok po kroku",
      "csc-howto": "Jak korzystać z kalkulatora",
      "csc-examples": "Przykłady krok po kroku",
      "csc-applications": "Przykłady z życia",
      "csc-angle": "Cosecans a wielkość kąta",
      "csc-recover": "Wyznaczanie przeciwprostokątnej za pomocą cosecansa",
      "csc-mistakes": "Typowe błędy",
      "csc-verify": "Sprawdzanie wyniku",
      "csc-vs": "Cosecans a inne stosunki",
      "csc-faq": "Częste pytania",
      "csc-related": "Powiązane kalkulatory"
    },
    "sections": {
      "csc-intro": {
        "h2": "Czym jest kalkulator stosunku cosecans?",
        "blocks": [
          {
            "kind": "p",
            "text": "Kalkulator stosunku cosecans wyznacza cosecans kąta ostrego trójkąta prostokątnego na podstawie dwóch długości boków: przeciwprostokątnej [[c]] i przyprostokątnej przeciwległej [[a]]. Dzieli pierwszą przez drugą, dając [[\\csc(A)=c/a]]. Cosecans to odwrotność sinusa: tam, gdzie sinus daje przyprostokątną przeciwległą przez przeciwprostokątną, cosecans daje przeciwprostokątną przez przyprostokątną przeciwległą, więc obie wartości zawsze mnożą się do 1."
          },
          {
            "kind": "p",
            "text": "Kalkulator nie potrzebuje ani kąta wejściowego, ani przyprostokątnej przyległej, ponieważ stosunek [[c/a]] jest w pełni wyznaczony przez te dwie długości. Odpowiedź to czysta liczba bez jednostek, gdyż centymetry podzielone przez centymetry się skracają, i opisuje ona przeciwprostokątną jako wielokrotność przyprostokątnej przeciwległej. Dla przeciwprostokątnej 5 cm i przyprostokątnej przeciwległej 3 cm, [[\\csc(A)=5/3\\approx1.6667]], co oznacza, że przeciwprostokątna jest około 1.67 razy dłuższa od przyprostokątnej przeciwległej."
          }
        ],
        "steps": [],
        "listItems": [],
        "related": [],
        "tables": [],
        "figures": []
      },
      "csc-triangle": {
        "h2": "Przeciwprostokątna i przyprostokątna przeciwległa",
        "blocks": [
          {
            "kind": "h3",
            "text": "Czym jest trójkąt prostokątny?"
          },
          {
            "kind": "p",
            "text": "Trójkąt prostokątny ma jeden kąt równy dokładnie [[90^\\circ]], czyli kąt między dwiema prostymi prostopadłymi, jak ściana stykająca się z poziomą podłogą. Przeciwprostokątna leży naprzeciw tego kąta prostego i jest zawsze najdłuższym bokiem. Ponieważ trzy kąty muszą sumować się do [[180^\\circ]], pozostałe dwa kąty dzielą dokładnie 90 stopni i dlatego oba są ostre. Cosecans należy do tej geometrii, ponieważ jego wzór porównuje dwa z tych boków, przeciwprostokątną i przyprostokątną przeciwległą, w stałej relacji."
          },
          {
            "kind": "h3",
            "text": "Czym jest przyprostokątna przeciwległa?"
          },
          {
            "kind": "p",
            "text": "Przyprostokątna przeciwległa to bok leżący dokładnie naprzeciw kąta odniesienia [[A]]: jest to jedyny bok trójkąta, który nie dotyka wierzchołka [[A]]. To, który bok liczy się jako przeciwległy, zależy od kąta odniesienia, więc przejście z kąta [[A]] na kąt [[B]] zamienia oznaczenia obu przyprostokątnych. W zadaniach praktycznych przyprostokątna przeciwległa często oznacza wysokość pionową, różnicę wzniesień albo prostopadłą przyprostokątną konstrukcji. Prawidłowe ustalenie kąta odniesienia ma znaczenie, ponieważ błędny kąt po cichu zamienia przyprostokątną przeciwległą z przyległą."
          },
          {
            "kind": "h3",
            "text": "Czym jest przeciwprostokątna?"
          },
          {
            "kind": "p",
            "text": "Przeciwprostokątna to bok leżący naprzeciw kąta prostego, a dwa fakty identyfikują ją na każdym rysunku, niezależnie od obrotu trójkąta: znajduje się naprzeciw małego kwadratu oznaczającego narożnik [[90^\\circ]] i jest najdłuższym bokiem. W prawidłowym, niezdegenerowanym trójkącie jest ściśle dłuższa od każdej z przyprostokątnych. W rzeczywistych sytuacjach może oznaczać drabinę opartą o ścianę, nachyloną odległość, linię wzroku, krokiew dachową albo ukośne podparcie."
          },
          {
            "kind": "h3",
            "text": "Czym jest przyprostokątna przyległa?"
          },
          {
            "kind": "p",
            "text": "Przyprostokątna przyległa [[b]] to przyprostokątna, która dotyka kąta [[A]], nie będąc przeciwprostokątną. Nie odgrywa żadnej roli we wzorze na cosecans, dlatego kalkulator nigdy o nią nie pyta. Bok [[b]] staje się istotny dla cosinusa, tangensa, secansa i cotangensa, więc pamiętaj o nim, gdy celem jest inny stosunek."
          }
        ],
        "steps": [],
        "listItems": [],
        "related": [],
        "tables": [],
        "figures": [
          {
            "alt": "Trójkąt prostokątny z kątem A w lewym dolnym rogu, złota przyprostokątna przeciwległa a, niebieska przyległa b, różowa przeciwprostokątna c, wzór csc(A)=c/a",
            "caption": "Kąt A znajduje się w lewym dolnym rogu; cosecans wykorzystuje przeciwprostokątną c i przyprostokątną przeciwległą a, a nie przyprostokątną przyległą b."
          }
        ]
      },
      "csc-whatis": {
        "h2": "Cosecans w trygonometrii",
        "blocks": [
          {
            "kind": "p",
            "text": "Cosecans porównuje całą nachyloną długość trójkąta prostokątnego z bokiem leżącym naprzeciw kąta odniesienia:"
          },
          {
            "kind": "p",
            "text": "[[[\\csc(A)=\\frac{c}{a}]]]"
          },
          {
            "kind": "p",
            "text": "Tutaj [[\\csc(A)]] to cosecans kąta [[A]], [[c]] to przeciwprostokątna, a [[a]] to przyprostokątna przeciwległa. Stosunek odpowiada na jedno pytanie: ile długości przyprostokątnej przeciwległej mieści się w przeciwprostokątnej?"
          },
          {
            "kind": "h3",
            "text": "Cosecans jako odwrotność sinusa"
          },
          {
            "kind": "p",
            "text": "Zacznij od wzoru na sinus:"
          },
          {
            "kind": "p",
            "text": "[[[\\sin(A)=\\frac{a}{c}]]]"
          },
          {
            "kind": "p",
            "text": "Wzięcie odwrotności odwraca ułamek, przenosząc przeciwprostokątną do licznika, a przyprostokątną przeciwległą do mianownika:"
          },
          {
            "kind": "p",
            "text": "[[[\\frac{1}{\\sin(A)}=\\frac{c}{a}]]]"
          },
          {
            "kind": "p",
            "text": "Ponieważ cosecans jest z definicji odwrotnością sinusa:"
          },
          {
            "kind": "p",
            "text": "[[[\\boxed{\\csc(A)=\\frac{1}{\\sin(A)}=\\frac{c}{a}}]]]"
          },
          {
            "kind": "p",
            "text": "Konkretne sprawdzenie uwidacznia odwrócenie. Przy [[\\sin(A)=3/5=0.6]] odwrotność wynosi [[1/0.6=5/3\\approx1.6667]], czyli dokładnie cosecans. Obie liczby opisują ten sam trójkąt z odwrotnych punktów widzenia, a ich pomnożenie zawsze zwraca 1."
          },
          {
            "kind": "h3",
            "text": "Dlaczego cosecans jest większy od 1"
          },
          {
            "kind": "p",
            "text": "Przeciwprostokątna jest dłuższa od przyprostokątnej przeciwległej, więc [[c \\gt a]], a zatem [[c/a \\gt 1]]. Szybkie sprawdzenie liczbowe: przy [[c=10]] i [[a=8]] stosunek wynosi [[10/8=1.25]], powyżej 1, jak wymagano. Dla dużego kąta ostrego przyprostokątna przeciwległa jest prawie tak długa jak przeciwprostokątna, więc stosunek utrzymuje się tuż powyżej 1, ale nigdy nie może równać się 1 w prawidłowym, niezdegenerowanym trójkącie prostokątnym."
          },
          {
            "kind": "h3",
            "text": "Co oznacza wartość cosecansa?"
          },
          {
            "kind": "p",
            "text": "Cosecans równy 2 oznacza, że przeciwprostokątna jest dokładnie dwa razy dłuższa od przyprostokątnej przeciwległej; 1.6667 oznacza około 1.6667 raza. Czytaj liczbę jako mnożnik, nie jako kąt: nie niesie ona stopni ani metrów czy stóp, ponieważ obie jednostki boków skracają się w dzieleniu."
          },
          {
            "kind": "h3",
            "text": "Czym cosecans różni się od cosinusa?"
          },
          {
            "kind": "p",
            "text": "Nazwy wyglądają podobnie, ale relacje są różne:"
          },
          {
            "kind": "p",
            "text": "[[[\\cos(A)=\\frac{b}{c}]]]"
          },
          {
            "kind": "p",
            "text": "[[[\\csc(A)=\\frac{c}{a}]]]"
          },
          {
            "kind": "p",
            "text": "Cosinus porównuje przyprostokątną przyległą z przeciwprostokątną, natomiast cosecans porównuje przeciwprostokątną z przyprostokątną przeciwległą. Para do zapamiętania: cosecans jest odwrotnością sinusa, natomiast secans jest odwrotnością cosinusa. Mylenie tych dwóch kofunkcji to jeden z najczęstszych błędów w trygonometrii."
          }
        ],
        "steps": [],
        "listItems": [],
        "related": [],
        "tables": [],
        "figures": [
          {
            "alt": "Trzy etapy: trójkąt 3-4-5, sinus 3/5=0.6, cosecans 5/3=1.6667, tożsamość csc(A)=1/sin(A)",
            "caption": "Sinus i cosecans są odwrotnościami: odwrócenie 3/5 daje 5/3, a csc(A) = 1/sin(A)."
          }
        ]
      },
      "csc-formula": {
        "h2": "Wzór na cosecans krok po kroku",
        "blocks": [
          {
            "kind": "p",
            "text": "Wzór nie jest dowolny; wynika bezpośrednio z definicji sinusa. Zacznij od stosunku sinusa:"
          },
          {
            "kind": "p",
            "text": "[[[\\sin(A)=\\frac{a}{c}]]]"
          },
          {
            "kind": "p",
            "text": "Weź odwrotność obu stron. Licznik i mianownik zamieniają się miejscami:"
          },
          {
            "kind": "p",
            "text": "[[[\\frac{1}{\\sin(A)}=\\frac{c}{a}]]]"
          },
          {
            "kind": "p",
            "text": "Ponieważ cosecans jest z definicji odwrotnością sinusa:"
          },
          {
            "kind": "p",
            "text": "[[[\\boxed{\\csc(A)=\\frac{c}{a}}]]]"
          },
          {
            "kind": "p",
            "text": "Przeciwprostokątna pojawia się w liczniku, ponieważ była mianownikiem sinusa; przyprostokątna przeciwległa spada do mianownika, ponieważ była licznikiem sinusa. To całe wyprowadzenie."
          },
          {
            "kind": "h3",
            "text": "W pełni rozwiązany przykład: trójkąt 3-4-5"
          },
          {
            "kind": "p",
            "text": "Dane: [[a=3\\text{ cm}]], [[b=4\\text{ cm}]], [[c=5\\text{ cm}]]:"
          },
          {
            "kind": "p",
            "text": "Krok 1: Zapisz wzór. [[\\csc(A)=c/a]]"
          },
          {
            "kind": "p",
            "text": "Krok 2: Podstaw pomiary. [[\\csc(A)=5/3]]"
          },
          {
            "kind": "p",
            "text": "Krok 3: Podziel. [[\\boxed{\\csc(A)\\approx1.6667}]]"
          },
          {
            "kind": "p",
            "text": "Krok 4: Zweryfikuj za pomocą sinusa. [[\\sin(A)=3/5=0.6]], oraz [[1/0.6\\approx1.6667]]. Obie drogi prowadzą do tej samej wartości, ponieważ są odwrotnymi ujęciami jednego trójkąta. Zwróć uwagę, że 1.6667 to zaokrąglony ułamek dziesiętny; [[5/3]] to dokładny stosunek dla tych długości boków."
          }
        ],
        "steps": [],
        "listItems": [],
        "related": [],
        "tables": [],
        "figures": []
      },
      "csc-howto": {
        "h2": "Jak korzystać z kalkulatora stosunku cosecans",
        "blocks": [
          {
            "kind": "p",
            "text": "Poniższa instrukcja odpowiada rzeczywistemu interfejsowi na tej stronie."
          }
        ],
        "steps": [
          "<strong>Zidentyfikuj kąt odniesienia [[A]].</strong>Zdecyduj, który kąt ostry opisuje stosunek, ponieważ przyprostokątna przeciwległa jest zdefiniowana względem niego.",
          "<strong>Zlokalizuj przeciwprostokątną [[c]].</strong>To bok leżący naprzeciw kąta prostego i najdłuższy bok trójkąta.",
          "<strong>Zlokalizuj przyprostokątną przeciwległą [[a]].</strong>To bok leżący dokładnie naprzeciw kąta [[A]].",
          "<strong>Zmierz lub pozyskaj obie długości boków.</strong>Użyj taśmy mierniczej, rysunku albo podanych danych, zachowując tę samą jednostkę dla obu.",
          "<strong>Wpisz przeciwprostokątną w pierwszym polu wejściowym.</strong>To większa z dwóch wartości.",
          "<strong>Wpisz przyprostokątną przeciwległą w drugim polu wejściowym.</strong>To mniejsza z dwóch wartości.",
          "<strong>Wybierz zgodne jednostki w selektorach jednostek.</strong>Oba pola muszą używać tej samej jednostki, aby dzielenie miało sens.",
          "<strong>Potwierdź, że obie wartości są dodatnie.</strong>Długości zerowe lub ujemne nie mogą utworzyć trójkąta.",
          "<strong>Sprawdź, czy przeciwprostokątna jest dłuższa od przyprostokątnej przeciwległej.</strong>Jeśli nie, dane wejściowe są zamienione albo błędnie oznaczone.",
          "<strong>Kliknij Calculate csc(A).</strong>Narzędzie dzieli przeciwprostokątną przez przyprostokątną przeciwległą.",
          "<strong>Odczytaj wynikowy stosunek cosecansa.</strong>To bezwymiarowa liczba opisująca przeciwprostokątną jako wielokrotność przyprostokątnej przeciwległej.",
          "<strong>Sprawdź, czy odpowiedź jest większa od 1.</strong>Wszystko na poziomie 1 lub poniżej sygnalizuje błąd danych wejściowych.",
          "<strong>Użyj Reset, aby wyczyścić dane wejściowe</strong> i rozpocząć kolejne obliczenie."
        ],
        "listItems": [],
        "related": [],
        "tables": [],
        "figures": []
      },
      "csc-examples": {
        "h2": "Przykłady obliczania cosecansa krok po kroku",
        "blocks": [
          {
            "kind": "p",
            "text": "Te cztery przykłady budują podstawową umiejętność przed zastosowaniami praktycznymi. Każdy podąża tym samym schematem: zapisz wzór, podstaw, podziel."
          },
          {
            "kind": "h3",
            "text": "Przykład 1: trójkąt prostokątny 3-4-5"
          },
          {
            "kind": "p",
            "text": "Dane: [[a=3\\text{ cm}]], [[b=4\\text{ cm}]], [[c=5\\text{ cm}]]:"
          },
          {
            "kind": "p",
            "text": "[[\\csc(A)=5/3]]"
          },
          {
            "kind": "p",
            "text": "[[\\boxed{\\csc(A)\\approx1.6667}]]"
          },
          {
            "kind": "p",
            "text": "Przeciwprostokątna jest około 1.6667 razy dłuższa od przyprostokątnej przeciwległej. Przyprostokątna przyległa pojawia się w podanych danych tylko po to, by dopełnić trójkąt; wzór ją ignoruje."
          },
          {
            "kind": "h3",
            "text": "Przykład 2: trójkąt prostokątny 5-12-13"
          },
          {
            "kind": "p",
            "text": "Dane: [[a=5\\text{ m}]], [[b=12\\text{ m}]], [[c=13\\text{ m}]]:"
          },
          {
            "kind": "p",
            "text": "[[\\csc(A)=13/5]]"
          },
          {
            "kind": "p",
            "text": "[[\\boxed{\\csc(A)=2.6}]]"
          },
          {
            "kind": "p",
            "text": "Wynik przekracza 1, ponieważ przeciwprostokątna jest dłuższa od przyprostokątnej przeciwległej. Przyprostokątna przyległa 12 m nie jest potrzebna do tego obliczenia."
          },
          {
            "kind": "h3",
            "text": "Przykład 3: trójkąt 30-60-90"
          },
          {
            "kind": "p",
            "text": "Dla kąta [[A=30^\\circ]] przyprostokątna przeciwległa jest połową przeciwprostokątnej. Przy [[a=5\\text{ cm}]] i [[c=10\\text{ cm}]]:"
          },
          {
            "kind": "p",
            "text": "[[\\csc(30^\\circ)=10/5]]"
          },
          {
            "kind": "p",
            "text": "[[\\boxed{\\csc(30^\\circ)=2}]]"
          },
          {
            "kind": "p",
            "text": "Weryfikacja: [[\\sin(30^\\circ)=0.5]], oraz [[1/0.5=2]]. Tę dokładną wartość warto zapamiętać, ponieważ trójkąt 30-60-90 nieustannie pojawia się w zadaniach geometrycznych."
          },
          {
            "kind": "h3",
            "text": "Przykład 4: trójkąt o przyprostokątnej przeciwległej 8 i przeciwprostokątnej 10"
          },
          {
            "kind": "p",
            "text": "Dane: [[a=8\\text{ m}]] i [[c=10\\text{ m}]]:"
          },
          {
            "kind": "p",
            "text": "[[\\csc(A)=10/8]]"
          },
          {
            "kind": "p",
            "text": "[[\\boxed{\\csc(A)=1.25}]]"
          },
          {
            "kind": "p",
            "text": "Ten stosunek leży bliżej 1 niż wynik 3-4-5, ponieważ przyprostokątna przeciwległa stanowi większą część przeciwprostokątnej: 8/10 wobec 3/5."
          }
        ],
        "steps": [],
        "listItems": [],
        "related": [],
        "tables": [],
        "figures": []
      },
      "csc-applications": {
        "h2": "Przykłady z życia codziennego",
        "blocks": [
          {
            "kind": "p",
            "text": "Cosecans to stosunek matematyczny, a nie liczba raportowana samodzielnie na placu budowy. Jego wartość leży w opisywaniu relacji przeciwprostokątnej do przyprostokątnej przeciwległej, weryfikowaniu obliczeń oraz zasilaniu wzorów, które wymagają cosecansa. Każdy poniższy przykład zakłada uproszczony trójkąt prostokątny."
          },
          {
            "kind": "h3",
            "text": "Przykład 5: długość drabiny względem jej wysokości"
          },
          {
            "kind": "p",
            "text": "Drabina 5.5 m sięga 4.5 m w górę pionowej ściany. Drabina to przeciwprostokątna [[c=5.5\\text{ m}]]; zasięg to przyprostokątna przeciwległa [[a=4.5\\text{ m}]]."
          },
          {
            "kind": "p",
            "text": "[[\\csc(A)=5.5/4.5]], więc [[\\boxed{\\csc(A)\\approx1.2222}]]."
          },
          {
            "kind": "p",
            "text": "Drabina jest około 1.2222 razy dłuższa od wysokości pionowej, a [[c=a\\times\\csc(A)]] odtwarza długość drabiny z wysokości. Stosunek opisuje wyłącznie geometrię, nie bezpieczeństwo drabiny."
          },
          {
            "kind": "h3",
            "text": "Przykład 6: stosunek cosecansa krokwi dachowej"
          },
          {
            "kind": "p",
            "text": "Krokiew dachowa 6.5 m ma pionowy wznios 4 m: krokiew to nachylona przeciwprostokątna [[c=6.5\\text{ m}]]; wznios to przyprostokątna przeciwległa [[a=4\\text{ m}]]."
          },
          {
            "kind": "p",
            "text": "[[\\csc(A)=6.5/4]], więc [[\\boxed{\\csc(A)=1.625}]]."
          },
          {
            "kind": "p",
            "text": "Krokiew jest 1.625 razy dłuższa od pionowego wzniosu. To obliczenie nie weryfikuje przydatności konstrukcyjnej ani zgodności projektu dachu."
          },
          {
            "kind": "h3",
            "text": "Przykład 7: stosunek cosecansa pochylni"
          },
          {
            "kind": "p",
            "text": "Pochylnia ma długość nachyloną 9.5 m i pionowy wznios 0.75 m: [[c=9.5\\text{ m}]] i [[a=0.75\\text{ m}]]."
          },
          {
            "kind": "p",
            "text": "[[\\csc(A)=9.5/0.75]], więc [[\\boxed{\\csc(A)\\approx12.6667}]]."
          },
          {
            "kind": "p",
            "text": "Stosunek jest duży, ponieważ długość nachylona znacznie przewyższa pionowy wznios, jak przystało na łagodną pochylnię. Sam stosunek nie rozstrzyga o dostępności ani o zgodności z przepisami budowlanymi."
          },
          {
            "kind": "h3",
            "text": "Przykład 8: linia pomiarowa o znanej różnicy wysokości"
          },
          {
            "kind": "p",
            "text": "Uproszczony pomiar geodezyjny rejestruje odległość w linii prostej 50 m i różnicę pionową 30 m: linia prosta to przeciwprostokątna [[c=50\\text{ m}]]; przy różnicy pionowej jako przyprostokątnej przeciwległej [[a=30\\text{ m}]]."
          },
          {
            "kind": "p",
            "text": "[[\\csc(A)=50/30]], więc [[\\boxed{\\csc(A)\\approx1.6667}]]."
          },
          {
            "kind": "p",
            "text": "Odległość nachylona jest około 1.6667 razy większa od składowej pionowej. Rzeczywiste pomiary geodezyjne mogą wymagać dodatkowych poprawek wykraczających poza ten uproszczony model."
          },
          {
            "kind": "h3",
            "text": "Przykład 9: stosunek liny odciągowej"
          },
          {
            "kind": "p",
            "text": "Lina odciągowa 18 m ma pionowy rozstaw końców 10 m: lina to przeciwprostokątna [[c=18\\text{ m}]]; rozstaw to przyprostokątna przeciwległa [[a=10\\text{ m}]]."
          },
          {
            "kind": "p",
            "text": "[[\\csc(A)=18/10]], więc [[\\boxed{\\csc(A)=1.8}]]."
          },
          {
            "kind": "p",
            "text": "Lina jest 1.8 razy dłuższa od pionowego rozstawu. Stosunek nie określa naciągu liny, wytrzymałości kotwy ani bezpieczeństwa konstrukcji."
          },
          {
            "kind": "h3",
            "text": "Przykład 10: stosunek belki policzkowej schodów"
          },
          {
            "kind": "p",
            "text": "Uproszczona belka policzkowa schodów 5 m ma pionowy wznios 2.8 m: belka to przeciwprostokątna [[c=5\\text{ m}]]; wznios to przyprostokątna przeciwległa [[a=2.8\\text{ m}]]."
          },
          {
            "kind": "p",
            "text": "[[\\csc(A)=5/2.8]], więc [[\\boxed{\\csc(A)\\approx1.7857}]]."
          },
          {
            "kind": "p",
            "text": "Przekątna jest około 1.7857 razy dłuższa od pionowego wzniosu: uproszczone obliczenie geometryczne, nie pełna ocena projektu schodów."
          },
          {
            "kind": "h3",
            "text": "Przykład 11: prosty odcinek lotu samolotu"
          },
          {
            "kind": "p",
            "text": "Samolot pokonuje 5 km po prostej trasie, zyskując 1.5 km wysokości: trasa to przeciwprostokątna [[c=5\\text{ km}]]; przyrost wysokości to przyprostokątna przeciwległa [[a=1.5\\text{ km}]]."
          },
          {
            "kind": "p",
            "text": "[[\\csc(A)=5/1.5]], więc [[\\boxed{\\csc(A)\\approx3.3333}]]."
          },
          {
            "kind": "p",
            "text": "Odległość lotu znacznie przewyższa przyrost pionowy, stąd duży stosunek. To przykład wyidealizowany, nie pełna analiza zmiennej trasy lotu."
          },
          {
            "kind": "h3",
            "text": "Przykład 12: zastrzał mechaniczny"
          },
          {
            "kind": "p",
            "text": "Ukośny zastrzał ma długość 1 700 mm przy składowej pionowej 800 mm: zastrzał to przeciwprostokątna [[c=1700\\text{ mm}]]; składowa pionowa to przyprostokątna przeciwległa [[a=800\\text{ mm}]]."
          },
          {
            "kind": "p",
            "text": "[[\\csc(A)=1700/800]], więc [[\\boxed{\\csc(A)=2.125}]]."
          },
          {
            "kind": "p",
            "text": "Milimetry sprawdzają się tak samo jak metry, gdy oba boki mają tę samą jednostkę. Stosunek nie ustala wytrzymałości zastrzału."
          },
          {
            "kind": "h3",
            "text": "Przykład 13: wysięgnik dźwigu"
          },
          {
            "kind": "p",
            "text": "Uproszczony wysięgnik dźwigu 10 m ma składową pionową 8 m: wysięgnik to przeciwprostokątna [[c=10\\text{ m}]]; składowa pionowa to przyprostokątna przeciwległa [[a=8\\text{ m}]]."
          },
          {
            "kind": "p",
            "text": "[[\\csc(A)=10/8]], więc [[\\boxed{\\csc(A)=1.25}]]."
          },
          {
            "kind": "p",
            "text": "Długość wysięgnika to zaledwie 1.25 jego składowej pionowej. Stosunek nie ustala udźwigu ani bezpieczeństwa pracy."
          },
          {
            "kind": "h3",
            "text": "Przykład 14: linia wzroku na wierzchołek drzewa"
          },
          {
            "kind": "p",
            "text": "Linia wzroku 20 m na wierzchołek drzewa ma różnicę pionową 12 m względem poziomu oczu obserwatora: linia wzroku to przeciwprostokątna [[c=20\\text{ m}]]; różnica pionowa to przyprostokątna przeciwległa [[a=12\\text{ m}]]."
          },
          {
            "kind": "p",
            "text": "[[\\csc(A)=20/12]], więc [[\\boxed{\\csc(A)\\approx1.6667}]]."
          },
          {
            "kind": "p",
            "text": "Odległość wzroku jest około 1.6667 razy większa od różnicy pionowej. Wynik nie podaje całkowitej wysokości drzewa nad ziemią."
          },
          {
            "kind": "h3",
            "text": "Przykład 15: proste podejście szlaku turystycznego"
          },
          {
            "kind": "p",
            "text": "Prosty odcinek szlaku wznosi się na 100 m przy przyroście wysokości 80 m: nachylenie to przeciwprostokątna [[c=100\\text{ m}]]; przyrost to przyprostokątna przeciwległa [[a=80\\text{ m}]]."
          },
          {
            "kind": "p",
            "text": "[[\\csc(A)=100/80]], więc [[\\boxed{\\csc(A)=1.25}]]."
          },
          {
            "kind": "p",
            "text": "Stosunek utrzymuje się blisko 1, ponieważ składowa pionowa stanowi dużą część nachylenia. Rzeczywiste szlaki mogą mieć zmienne spadki."
          },
          {
            "kind": "h3",
            "text": "Przykład 16: wspornik markizy"
          },
          {
            "kind": "p",
            "text": "Wspornik markizy 3.5 m ma składową pionową 1.2 m: wspornik to przeciwprostokątna [[c=3.5\\text{ m}]]; składowa pionowa to przyprostokątna przeciwległa [[a=1.2\\text{ m}]]."
          },
          {
            "kind": "p",
            "text": "[[\\csc(A)=3.5/1.2]], więc [[\\boxed{\\csc(A)\\approx2.9167}]]."
          },
          {
            "kind": "p",
            "text": "Wspornik jest około 2.9167 razy dłuższy od swojej składowej pionowej. Wynik nie ustala przydatności konstrukcyjnej."
          },
          {
            "kind": "h3",
            "text": "Porównanie przykładów praktycznych"
          },
          {
            "kind": "p",
            "text": "Wzorzec jest spójny: stosunek jest duży, gdy przyprostokątna przeciwległa stanowi mały ułamek przeciwprostokątnej, i bliski 1, gdy obie są prawie równe. Odczytywanie cosecansa jako mnożnika nadaje sens każdemu wynikowi."
          }
        ],
        "steps": [],
        "listItems": [],
        "related": [],
        "tables": [
          {
            "headers": [
              "Sytuacja",
              "Przeciwprostokątna c",
              "Przyprostokątna przeciwległa a",
              "Wzór na cosecans",
              "Obliczony stosunek",
              "Interpretacja"
            ],
            "rows": [
              ["Drabina", "5.5 m", "4.5 m", "5.5/4.5", "1.2222", "Drabina jest 1.2222 razy dłuższa od wysokości"],
              ["Krokiew dachowa", "6.5 m", "4 m", "6.5/4", "1.625", "Krokiew jest 1.625 razy dłuższa od wzniosu"],
              ["Pochylnia", "9.5 m", "0.75 m", "9.5/0.75", "12.6667", "Nachylenie jest 12.6667 razy dłuższe od wzniosu"],
              ["Pomiar geodezyjny", "50 m", "30 m", "50/30", "1.6667", "Odległość jest 1.6667 razy większa od spadku"],
              ["Lina odciągowa", "18 m", "10 m", "18/10", "1.8", "Lina jest 1.8 razy dłuższa od rozstawu"],
              ["Belka policzkowa schodów", "5 m", "2.8 m", "5/2.8", "1.7857", "Belka jest 1.7857 razy dłuższa od wzniosu"],
              ["Odcinek lotu", "5 km", "1.5 km", "5/1.5", "3.3333", "Trasa jest 3.3333 razy dłuższa od przyrostu"],
              ["Zastrzał mechaniczny", "1700 mm", "800 mm", "1700/800", "2.125", "Zastrzał jest 2.125 razy dłuższy od składowej"],
              ["Wysięgnik dźwigu", "10 m", "8 m", "10/8", "1.25", "Wysięgnik jest 1.25 razy dłuższy od składowej"],
              ["Linia wzroku na drzewo", "20 m", "12 m", "20/12", "1.6667", "Linia wzroku jest 1.6667 razy dłuższa od różnicy"],
              ["Podejście szlaku", "100 m", "80 m", "100/80", "1.25", "Nachylenie jest 1.25 razy dłuższe od przyrostu"],
              ["Wspornik markizy", "3.5 m", "1.2 m", "3.5/1.2", "2.9167", "Wspornik jest 2.9167 razy dłuższy od składowej"]
            ]
          }
        ],
        "figures": [
          {
            "alt": "Cztery panele: drabina 1.2222, krokiew 1.625, pochylnia 12.6667, pomiar geodezyjny 1.6667, stosunki cosecansa z trójkątami prostokątnymi",
            "caption": "Cztery obliczenia praktyczne: każdy panel pokazuje trójkąt, wzór i stosunek."
          }
        ]
      },
      "csc-angle": {
        "h2": "Zależność między cosecansem a wielkością kąta",
        "blocks": [
          {
            "kind": "p",
            "text": "Cosecans porusza się w przeciwnym kierunku niż kąt. Gdy kąt ostry jest mały, przyprostokątna przeciwległa jest krótka względem przeciwprostokątnej, więc [[c/a]] jest duże. Wraz ze wzrostem kąta przyprostokątna przeciwległa wydłuża się ku przeciwprostokątnej, a stosunek maleje. Zweryfikowane wartości odniesienia poniżej pokazują ten wzorzec:"
          },
          {
            "kind": "p",
            "text": "Gdy kąt zbliża się do [[90^\\circ]], przyprostokątna przeciwległa zbliża się do przeciwprostokątnej, a stosunek zbliża się do 1, pozostając powyżej 1 dla każdego prawidłowego, niezdegenerowanego trójkąta prostokątnego. Wiersz 90 stopni to wyłącznie graniczna wartość odniesienia, ponieważ kąt [[A]] musi być ostry. Gdy kąt zbliża się do [[0^\\circ]], przyprostokątna przeciwległa kurczy się ku zeru, a stosunek rośnie bez ograniczeń. Stosunek bliski 1 sygnalizuje stosunkowo duży kąt ostry; duży stosunek sygnalizuje stosunkowo mały kąt."
          },
          {
            "kind": "p",
            "text": "Kalkulator nie przyjmuje kąta jako danych wejściowych; oblicza stosunek z dwóch długości boków. Te wartości odniesienia służą jako orientacja i jako wartości kontrolne przy weryfikacji wyniku."
          }
        ],
        "steps": [],
        "listItems": [],
        "related": [],
        "tables": [
          {
            "headers": [
              "Kąt A",
              "Sinus sin(A)",
              "Cosecans csc(A)"
            ],
            "rows": [
              ["30 stopni", "0.5", "2"],
              ["45 stopni", "0.7071", "1.4142"],
              ["60 stopni", "0.8660", "1.1547"],
              ["90 stopni", "1", "1, jako wartość graniczna"]
            ]
          }
        ],
        "figures": [
          {
            "alt": "Trzy trójkąty o kątach 30, 45 i 60 stopni z wartościami cosecansa 2, 1.4142, 1.1547; stosunek maleje wraz ze wzrostem kąta",
            "caption": "Gdy przyprostokątna przeciwległa stanowi coraz większą część przeciwprostokątnej, csc(A) zbliża się do 1."
          }
        ]
      },
      "csc-recover": {
        "h2": "Wyznaczanie przeciwprostokątnej za pomocą cosecansa",
        "blocks": [
          {
            "kind": "p",
            "text": "Wzór przekształca się prosto. Zacznij od:"
          },
          {
            "kind": "p",
            "text": "[[[\\csc(A)=\\frac{c}{a}]]]"
          },
          {
            "kind": "p",
            "text": "Pomnóż obie strony przez [[a]]:"
          },
          {
            "kind": "p",
            "text": "[[[\\boxed{c=a\\times\\csc(A)}]]]"
          },
          {
            "kind": "p",
            "text": "Przeciwprostokątna to przyprostokątna przeciwległa pomnożona przez stosunek cosecansa. Przy [[a=6\\text{ m}]] i [[\\csc(A)=2.5]]:"
          },
          {
            "kind": "p",
            "text": "[[c=6\\times2.5]]"
          },
          {
            "kind": "p",
            "text": "[[\\boxed{c=15\\text{ m}}]]"
          },
          {
            "kind": "p",
            "text": "Wynik jest dłuższy od przyprostokątnej przeciwległej, jak musi być każda przeciwprostokątna."
          },
          {
            "kind": "h3",
            "text": "Jak odzyskać przyprostokątną przeciwległą"
          },
          {
            "kind": "p",
            "text": "Rozwiązanie względem [[a]] daje natomiast:"
          },
          {
            "kind": "p",
            "text": "[[[\\boxed{a=\\frac{c}{\\csc(A)}}]]]"
          },
          {
            "kind": "p",
            "text": "Przy [[c=12\\text{ m}]] i [[\\csc(A)=2]]:"
          },
          {
            "kind": "p",
            "text": "[[a=12/2]]"
          },
          {
            "kind": "p",
            "text": "[[\\boxed{a=6\\text{ m}}]]"
          },
          {
            "kind": "p",
            "text": "To matematyczne przekształcenia tego samego stosunku. Kalkulator na tej stronie oblicza sam stosunek; nie udostępnia osobnych trybów wyznaczania przeciwprostokątnej ani przyprostokątnej przeciwległej."
          }
        ],
        "steps": [],
        "listItems": [],
        "related": [],
        "tables": [],
        "figures": []
      },
      "csc-mistakes": {
        "h2": "Typowe błędy przy obliczaniu cosecansa",
        "blocks": [
          {
            "kind": "h3",
            "text": "Błędnie a poprawnie"
          },
          {
            "kind": "p",
            "text": "Dane: [[c=5]] i [[a=3]]:"
          },
          {
            "kind": "p",
            "text": "Błędnie: [[3/5=0.6]]. To stosunek sinusa, nie stosunek cosecansa."
          },
          {
            "kind": "p",
            "text": "Poprawnie: [[\\csc(A)=5/3\\approx1.6667]]."
          },
          {
            "kind": "p",
            "text": "Weryfikacja: [[\\csc(A)=1/\\sin(A)]], oraz [[1/0.6\\approx1.6667]]."
          }
        ],
        "steps": [],
        "listItems": [
          "<strong>Mylenie cosecansa z sinusem.</strong>Sinus to [[a/c]]; cosecans to [[c/a]]. Co się psuje: raportowanie 0.6 dla trójkąta 3-4-5. Poprawka: umieść przeciwprostokątną na górze.",
          "<strong>Odwracanie wzoru do [[a/c]] zamiast [[c/a]].</strong>Co się psuje: odpowiedź to sinus, zawsze poniżej 1. Poprawka: sprawdź, czy dłuższy bok jest licznikiem.",
          "<strong>Mylenie cosecansa z secansem.</strong>Secans to [[c/b]], odwrotność cosinusa. Co się psuje: użycie przyprostokątnej przyległej. Poprawka: cosecans łączy się z sinusem i przyprostokątną przeciwległą.",
          "<strong>Używanie przyprostokątnej przyległej zamiast przeciwległej.</strong>Co się psuje: omyłkowe obliczenie [[c/b]]. Poprawka: potwierdź bok naprzeciw kąta [[A]] przed dzieleniem.",
          "<strong>Zakładanie, że cosecans mierzy się w stopniach.</strong>Co się psuje: zapisanie 1.6667 stopnia. Poprawka: stosunek to czysta liczba, nie kąt.",
          "<strong>Raportowanie stosunku cosecansa w metrach lub centymetrach.</strong>Co się psuje: jednostki już się skróciły. Poprawka: usuń jednostkę z odpowiedzi.",
          "<strong>Akceptowanie wyniku mniejszego od 1 dla prawidłowego trójkąta.</strong>Co się psuje: zaufanie obliczeniu z zamienionymi danymi. Poprawka: prawidłowy wynik zawsze przekracza 1.",
          "<strong>Wpisywanie przeciwprostokątnej krótszej od przyprostokątnej przeciwległej.</strong>Co się psuje: dane opisują niemożliwy trójkąt. Poprawka: pole przeciwprostokątnej musi zawierać dłuższy pomiar.",
          "<strong>Wpisywanie zerowych lub ujemnych długości boków.</strong>Co się psuje: dzielenie przez zero albo bezsensowny ujemny stosunek. Poprawka: używaj tylko dodatnich długości.",
          "<strong>Mieszanie jednostek miary.</strong>Co się psuje: centymetry podzielone przez metry zniekształcają stosunek 100-krotnie. Poprawka: najpierw sprowadź oba boki do jednej jednostki.",
          "<strong>Zbyt wczesne zaokrąglanie.</strong>Co się psuje: zaokrąglenie [[5/3]] do 1.67 przed przemnożeniem z powrotem dodaje możliwy do uniknięcia błąd. Poprawka: zachowaj ułamek lub dodatkowe cyfry do ostatniego kroku.",
          "<strong>Mylenie kąta odniesienia z drugim kątem ostrym.</strong>Co się psuje: oznaczenia przeciwległy i przyległy się zamieniają. Poprawka: najpierw zaznacz kąt [[A]] na rysunku.",
          "<strong>Zakładanie, że duży stosunek cosecansa to kąt.</strong>Co się psuje: odczytanie 12.6667 jako stopni. Poprawka: to mnożnik, więc przeciwprostokątna jest 12.6667 razy dłuższa od przyprostokątnej przeciwległej.",
          "<strong>Zakładanie, że sam cosecans wyznacza przeciwprostokątną.</strong>Co się psuje: oczekiwanie, że jedna liczba da długość. Poprawka: stosunek potrzebuje też przyprostokątnej przeciwległej, poprzez [[c=a\\times\\csc(A)]].",
          "<strong>Mylenie odwrotności sinusa z odwrotnością cosinusa.</strong>Co się psuje: użycie secansa tam, gdzie należy cosecans. Poprawka: sinus łączy się z cosecansem; cosinus łączy się z secansem."
        ],
        "related": [],
        "tables": [],
        "figures": []
      },
      "csc-verify": {
        "h2": "Jak sprawdzić, czy wynik cosecansa jest prawidłowy",
        "blocks": [
          {
            "kind": "p",
            "text": "Prawidłowy, niezdegenerowany trójkąt prostokątny wymaga:"
          },
          {
            "kind": "p",
            "text": "[[[c \\gt a \\gt 0]]]"
          },
          {
            "kind": "p",
            "text": "Dlatego [[c/a \\gt 1]]. Oba pomiary muszą używać zgodnych jednostek, a obliczony stosunek musi przekraczać 1. Wynik równy dokładnie 1 to jedynie wartość graniczna, gdy kąt ostry zbliża się do 90 stopni, a nie wynik dla prawdziwego trójkąta. Stosunek poniżej 1 zwykle wskazuje odwrócone dane wejściowe, błędne oznaczenie boku albo niezgodne pomiary."
          },
          {
            "kind": "h3",
            "text": "Metoda 1: sprawdź odwrotność sinusa"
          },
          {
            "kind": "p",
            "text": "Oblicz [[\\sin(A)=a/c]], a następnie [[\\csc(A)=1/\\sin(A)]]. Dla trójkąta 3-4-5, [[\\sin(A)=3/5=0.6]] i [[1/0.6\\approx1.6667]], co zgadza się z bezpośrednim dzieleniem."
          },
          {
            "kind": "h3",
            "text": "Metoda 2: sprawdź twierdzenie Pitagorasa"
          },
          {
            "kind": "p",
            "text": "Jeśli przyprostokątna przyległa jest znana lub potrzebna, zweryfikuj [[b=\\sqrt{c^2-a^2}]]. Dla [[c=5]] i [[a=3]]: [[b=\\sqrt{25-9}=4]], oraz [[3^2+4^2=5^2]]. To potwierdza, że długości boków tworzą trójkąt prostokątny."
          },
          {
            "kind": "h3",
            "text": "Metoda 3: sprawdź stosunek przez mnożenie"
          },
          {
            "kind": "p",
            "text": "Zweryfikuj [[a\\times\\csc(A)\\approx c]]. Dla [[a=3]] i [[\\csc(A)=5/3]]: [[3\\times\\frac{5}{3}=5]]. Drobne rozbieżności mogą się pojawić, gdy wyświetlony ułamek dziesiętny został zaokrąglony; dokładny ułamek je usuwa."
          }
        ],
        "steps": [],
        "listItems": [],
        "related": [],
        "tables": [],
        "figures": []
      },
      "csc-vs": {
        "h2": "Cosecans a sinus, secans i inne stosunki trygonometryczne",
        "blocks": [
          {
            "kind": "p",
            "text": "Każdy stosunek porównuje inną parę boków:"
          },
          {
            "kind": "p",
            "text": "Pary odwrotne to sinus z cosecansem oraz cosinus z secansem: [[\\csc(A)=1/\\sin(A)]], natomiast [[\\sec(A)=1/\\cos(A)]]. Cosecans i secans nie są wymienne. Sinus nadaje się do bezpośrednich zadań pomiarowych o znanej przyprostokątnej przeciwległej i przeciwprostokątnej; cosecans nadaje się do wzorów zbudowanych wokół odwrotności oraz do odtwarzania przeciwprostokątnej ze znanej wartości cosecansa."
          },
          {
            "kind": "p",
            "text": "Sąsiednie stosunki znajdziesz w <a href=\"/sine-ratio-calculator/\" class=\"text-primary hover:underline\">kalkulatorze stosunku sinusa</a>, <a href=\"/secant-ratio-calculator/\" class=\"text-primary hover:underline\">kalkulatorze stosunku secansa</a>, <a href=\"/cotangent-ratio-calculator/\" class=\"text-primary hover:underline\">kalkulatorze stosunku cotangensa</a> oraz <a href=\"/right-triangle-trig-ratios-calculator/\" class=\"text-primary hover:underline\">kalkulatorze stosunków trygonometrycznych trójkąta prostokątnego</a>. <a href=\"/right-triangle-side-calculator/\" class=\"text-primary hover:underline\">Kalkulator boków trójkąta prostokątnego</a> pomaga, gdy niewiadomą jest sama długość boku."
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
              ["Sinus", "sin(A) = a/c", "Przyprostokątna przeciwległa z przeciwprostokątną"],
              ["Cosecans", "csc(A) = c/a", "Przeciwprostokątna z przyprostokątną przeciwległą"],
              ["Cosinus", "cos(A) = b/c", "Przyprostokątna przyległa z przeciwprostokątną"],
              ["Secans", "sec(A) = c/b", "Przeciwprostokątna z przyprostokątną przyległą"],
              ["Tangens", "tan(A) = a/b", "Przyprostokątna przeciwległa z przyległą"],
              ["Cotangens", "cot(A) = b/a", "Przyprostokątna przyległa z przeciwległą"]
            ]
          }
        ],
        "figures": []
      },
      "csc-faq": {
        "h2": "Częste pytania",
        "blocks": [],
        "steps": [],
        "listItems": [],
        "related": [],
        "tables": [],
        "figures": []
      },
      "csc-related": {
        "h2": "Poznaj powiązane kalkulatory trygonometryczne",
        "blocks": [],
        "steps": [],
        "listItems": [],
        "related": [
          {
            "name": "Kalkulator stosunków trygonometrycznych trójkąta prostokątnego",
            "desc": "Oblicz wszystkie sześć stosunków trygonometrycznych naraz w jednym miejscu."
          },
          {
            "name": "Kalkulator stosunku sinusa",
            "desc": "Wyznacz stosunek sinusa z przyprostokątnej przeciwległej i przeciwprostokątnej."
          },
          {
            "name": "Kalkulator stosunku secansa",
            "desc": "Wyznacz stosunek secansa z przeciwprostokątnej i przyprostokątnej przyległej."
          },
          {
            "name": "Kalkulator stosunku cotangensa",
            "desc": "Wyznacz stosunek cotangensa z przyprostokątnych przyległej i przeciwległej."
          },
          {
            "name": "Kalkulator boków trójkąta prostokątnego",
            "desc": "Wyznacz nieznaną długość boku z kątów lub z twierdzenia Pitagorasa."
          },
          {
            "name": "Kalkulator kątów trójkąta prostokątnego",
            "desc": "Wyznacz kąt ostry ze znanych długości boków."
          }
        ],
        "tables": [],
        "figures": []
      }
    },
    "faqHeading": "Częste pytania",
    "relatedHeading": "Poznaj powiązane kalkulatory trygonometryczne",
    "faqs": [
      {
        "question": "Jaki jest wzór na cosecans w trójkącie prostokątnym?",
        "answer": "Wzór to csc(A) = c / a: podziel przeciwprostokątną przez bok leżący naprzeciw kąta A. Dla przeciwprostokątnej 5 i przyprostokątnej przeciwległej 3 wynik to 5/3, około 1.6667. Tę samą wartość daje tożsamość odwrotności csc(A) = 1 / sin(A)."
      },
      {
        "question": "Jak cosecans wiąże się z sinusem?",
        "answer": "Cosecans to odwrotność sinusa: csc(A) = 1 / sin(A). Sinus dzieli przyprostokątną przeciwległą przez przeciwprostokątną; cosecans odwraca ten ułamek. Oba opisują ten sam trójkąt, a ich iloczyn zawsze wynosi 1. Jeśli sin(A) = 0.6, to csc(A) = 1 / 0.6, około 1.6667."
      },
      {
        "question": "Dlaczego cosecans jest większy od 1 w prawidłowym trójkącie prostokątnym?",
        "answer": "W prawidłowym, niezdegenerowanym trójkącie prostokątnym przeciwprostokątna jest najdłuższym bokiem, więc c przewyższa a, a większa liczba podzielona przez mniejszą dodatnią jest zawsze powyżej 1. Stosunek 1 lub mniejszy sygnalizuje odwrócone dane wejściowe, błędne oznaczenie boku albo niemożliwe pomiary."
      },
      {
        "question": "Czym różni się cosecans od secansa?",
        "answer": "Cosecans dzieli przeciwprostokątną przez przyprostokątną przeciwległą (c/a), natomiast secans dzieli przeciwprostokątną przez przyprostokątną przyległą (c/b). Cosecans to odwrotność sinusa; secans to odwrotność cosinusa. Odpowiadają na różne pytania, więc ich zamiana daje błędną odpowiedź, gdy przyprostokątne przeciwległa i przyległa się różnią."
      },
      {
        "question": "Ile wynosi cosecans kąta 30 stopni?",
        "answer": "Cosecans 30 stopni wynosi dokładnie 2, ponieważ bok naprzeciw 30 stopni jest połową przeciwprostokątnej: c/a = 2/1 = 2. Sprawdzenie: sin(30 stopni) = 0.5, a 1 / 0.5 = 2. To jedna z nielicznych wartości cosecansa wartych zapamiętania."
      },
      {
        "question": "Czy stosunek cosecansa ma jednostki?",
        "answer": "Nie. Zarówno przeciwprostokątna, jak i przyprostokątna przeciwległa są mierzone w tej samej jednostce, więc jednostki skracają się podczas dzielenia. Niezależnie od tego, czy boki są w centymetrach, metrach czy milimetrach, stosunek cosecansa jest czystą liczbą bezwymiarową. Nigdy nie podawaj go ze stopniami, metrami ani stopami."
      },
      {
        "question": "Czy cosecans może być mniejszy od 1?",
        "answer": "Nie dla prawidłowego, niezdegenerowanego trójkąta prostokątnego. Ponieważ przeciwprostokątna jest dłuższa od przyprostokątnej przeciwległej, c/a musi przekraczać 1. Wynik 1 lub mniejszy niemal zawsze oznacza, że oba wejścia zostały zamienione, więc narzędzie obliczyło a/c (czyli sinus) zamiast c/a. Sprawdź ponownie, który pomiar jest przeciwprostokątną."
      },
      {
        "question": "Jak obliczyć cosecans z długości boków?",
        "answer": "Zidentyfikuj przeciwprostokątną c i przyprostokątną przeciwległą a, potwierdź, że obie używają tej samej jednostki i że c jest dłuższe od a, a następnie oblicz csc(A) = c / a. Przy c = 13 m i a = 5 m odpowiedź to 13/5 = 2.6."
      },
      {
        "question": "Jak wyznaczyć przeciwprostokątną za pomocą cosecansa?",
        "answer": "Przekształć wzór do c = a x csc(A). Pomnóż znaną przyprostokątną przeciwległą przez stosunek cosecansa. Jeśli a = 6 m i csc(A) = 2.5, to c = 6 x 2.5 = 15 m. Wynik jest zawsze dłuższy od przyprostokątnej przeciwległej, co stanowi szybką kontrolę arytmetyki."
      },
      {
        "question": "Czy kalkulator cosecansa potrzebuje kąta jako danych wejściowych?",
        "answer": "Nie. Kalkulator potrzebuje tylko dwóch długości boków: przeciwprostokątnej i przyprostokątnej przeciwległej. Stosunek c/a jest w pełni wyznaczony przez te pomiary, więc kąt A nigdy nie wchodzi do obliczeń."
      },
      {
        "question": "Jak cosecans zmienia się, gdy kąt rośnie?",
        "answer": "Cosecans maleje wraz ze wzrostem kąta ostrego. Mały kąt ma krótką przyprostokątną przeciwległą względem przeciwprostokątnej, więc stosunek jest duży; duży kąt ma przyprostokątną przeciwległą prawie tak długą jak przeciwprostokątna, więc stosunek utrzymuje się tuż powyżej 1. Na przykład csc(30 stopni) = 2, csc(45 stopni) to około 1.4142, a csc(60 stopni) około 1.1547."
      },
      {
        "question": "Kiedy używać cosecansa zamiast sinusa?",
        "answer": "Używaj cosecansa, gdy potrzebujesz przeciwprostokątnej przez przyprostokątną przeciwległą: we wzorach zbudowanych wokół cosecansa, w pracy z tożsamościami odwrotności albo gdy zadanie podaje wartość cosecansa i pyta o bok. W bezpośrednich zadaniach pomiarowych sinus jest zwykle bardziej naturalnym wyborem."
      }
    ],
    "conclusion": {
      "h2": "Opanuj stosunek cosecansa z pewnością siebie",
      "paragraphs": [
        "Cosecans to sinus widziany z drugiej strony: podziel przeciwprostokątną przez przyprostokątną przeciwległą, a wynik powie ci, ile długości przyprostokątnej przeciwległej mieści się w przeciwprostokątnej. Wzór [[\\csc(A)=c/a]] potrzebuje tylko dwóch pomiarów, odpowiedź jest zawsze bezwymiarową liczbą powyżej 1, a tożsamość odwrotności [[\\csc(A)=1/\\sin(A)]] daje wbudowany sposób sprawdzania każdego obliczenia. Niezależnie od tego, czy trójkąt to drabina, krokiew czy podręcznikowe 3-4-5, metoda nigdy się nie zmienia: zidentyfikuj przeciwprostokątną, zidentyfikuj przyprostokątną przeciwległą, podziel i zweryfikuj. Miej pod ręką <a href=\"/pythagorean-theorem-calculator/\" class=\"text-primary hover:underline\">kalkulator twierdzenia Pitagorasa</a> do potwierdzania geometrii trójkąta i dodaj tę stronę do zakładek na każde obliczenie cosecansa."
      ]
    }
  }
};
