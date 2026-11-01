/**
 * Secant Ratio Guide - translation batch 2 (Page 12 of 45).
 * Locale objects for pt, bn, ja, ko, ms, pl. Assembled from child-translated JSON.
 * Consumed by theme/components/SecantRatioGuideLocalized.astro.
 */
export const SECANT_TRANSLATIONS_BATCH2 = {
  "pt": {
    "tocHeading": "Neste Guia",
    "tocItems": {
      "sec-intro": "O Que é uma Calculadora da Razão Secante?",
      "sec-triangle": "Compreender o Cateto Adjacente e a Hipotenusa",
      "sec-whatis": "Compreender a Razão Secante",
      "sec-formula": "Como Funciona a Fórmula da Secante",
      "sec-howto": "Como Usar a Calculadora da Razão Secante",
      "sec-examples": "Exemplos Passo a Passo de Cálculo da Secante",
      "sec-applications": "Exemplos da Vida Real de Uso da Razão Secante",
      "sec-angle": "Compreender a Relação Entre a Secante e o Tamanho do Ângulo",
      "sec-hypotenuse": "Como Encontrar a Hipotenusa Usando a Secante",
      "sec-recover": "Como Encontrar um Ângulo a Partir de uma Razão Secante",
      "sec-mistakes": "Erros Comuns ao Calcular a Secante",
      "sec-verify": "Como Verificar se o Seu Resultado de Secante é Válido",
      "sec-vs": "Secante vs. Cosseno, Seno e Cossecante",
      "sec-faq": "Perguntas Frequentes",
      "sec-related": "Explore as Calculadoras Trigonométricas Relacionadas"
    },
    "sections": {
      "sec-intro": {
        "h2": "O Que é uma Calculadora da Razão Secante?",
        "blocks": [
          {
            "kind": "p",
            "text": "Uma calculadora da razão secante responde a uma pergunta: para um ângulo agudo de um triângulo retângulo, como se compara o lado mais longo com o lado junto ao ângulo? Introduza a hipotenusa e o cateto adjacente, e a ferramenta divide a hipotenusa pelo cateto adjacente, devolvendo [[\\sec(A)=c/b]]. Com uma hipotenusa de 5 cm e um cateto adjacente de 4 cm, o cálculo é [[5/4=1.25]]: a hipotenusa é 1,25 vezes tão longa como o cateto adjacente, o que é outra forma de dizer que é 25% mais longa. Esse decimal é a resposta completa. É uma razão sem dimensões, uma vez que os centímetros se cancelam na divisão, e não é um ângulo em graus, por isso nunca leia 1,25 como [[1.25^\\circ]]. O cateto oposto nunca entra neste cálculo; a hipotenusa e o cateto adjacente são suficientes. A secante é também o recíproco do cosseno, razão pela qual muitos manuais a apresentam como a forma invertida de [[\\cos(A)]]."
          }
        ]
      },
      "sec-triangle": {
        "h2": "Compreender o Cateto Adjacente e a Hipotenusa",
        "blocks": [
          {
            "kind": "h3",
            "text": "O Que é um Triângulo Retângulo?"
          },
          {
            "kind": "p",
            "text": "Um triângulo retângulo tem um ângulo de exatamente [[90^\\circ]], o ângulo entre duas retas perpendiculares, como uma parede a encontrar um chão nivelado. A hipotenusa fica oposta a esse ângulo reto e é sempre o lado mais longo, porque tem de abranger toda a diagonal do canto. Os outros dois ângulos partilham os restantes 90 graus, pelo que ambos são agudos. Os dois catetos encontram-se no ângulo reto, perpendiculares entre si, e é a sua relação com a hipotenusa que torna possível a trigonometria do triângulo retângulo."
          },
          {
            "kind": "h3",
            "text": "O Que é o Cateto Adjacente?"
          },
          {
            "kind": "p",
            "text": "O cateto adjacente [[b]] é o cateto que toca o ângulo de referência [[A]] sem ser a hipotenusa. Nos problemas práticos, desempenha frequentemente o papel da projeção horizontal: a distância ao solo desde a base de uma escada até uma parede, a projeção horizontal de uma viga de telhado ou a separação horizontal entre dois pontos de levantamento. Vai no denominador da fórmula da secante. Qual dos catetos conta como adjacente depende do ângulo de referência escolhido, pelo que mudar do ângulo [[A]] para o ângulo [[B]] troca os rótulos de adjacente e oposto."
          },
          {
            "kind": "h3",
            "text": "O Que é a Hipotenusa?"
          },
          {
            "kind": "p",
            "text": "A hipotenusa [[c]] é o lado oposto ao ângulo reto: em qualquer diagrama, fica de frente para o pequeno quadrado que marca o canto de [[90^\\circ]], e é estritamente mais longa do que qualquer um dos catetos. Nos problemas práticos, desempenha frequentemente o papel de um comprimento inclinado: uma escada, uma superfície de rampa, uma viga, um cabo, um reforço diagonal ou um caminho em linha reta. Vai no numerador da fórmula da secante, razão pela qual todos os valores de secante são superiores a 1."
          },
          {
            "kind": "h3",
            "text": "O Que é o Cateto Oposto?"
          },
          {
            "kind": "p",
            "text": "O cateto oposto [[a]] fica diretamente em frente do ângulo [[A]] e nunca toca o seu vértice. Não desempenha qualquer papel no cálculo principal da secante, razão pela qual a calculadora nunca o pede. Torna-se relevante quando o teorema de Pitágoras é usado para verificar que os dois comprimentos conhecidos formam um triângulo retângulo genuíno, e assume o papel principal no seno, na tangente e na cossecante, onde o cateto oposto é um dos dois lados de trabalho."
          }
        ],
        "imgAlt": "Triângulo retângulo com o ângulo A no canto inferior esquerdo, hipotenusa c dourada, cateto adjacente b azul, sec(A)=c/b",
        "figcaption": "O ângulo A fica no canto inferior esquerdo; a secante usa a hipotenusa dourada c e o cateto adjacente azul b, não o cateto oposto a."
      },
      "sec-whatis": {
        "h2": "Compreender a Razão Secante",
        "blocks": [
          {
            "kind": "p",
            "text": "A secante compara todo o lado inclinado com o cateto junto ao ângulo de referência:"
          },
          {
            "kind": "p",
            "text": "[[[\\sec(A)=\\frac{c}{b}]]]"
          },
          {
            "kind": "p",
            "text": "Aqui, [[\\sec(A)]] é a secante do ângulo [[A]], [[c]] é a hipotenusa e [[b]] é o cateto adjacente: quantas vezes o cateto adjacente cabe na hipotenusa."
          },
          {
            "kind": "h3",
            "text": "A Secante como Recíproco do Cosseno"
          },
          {
            "kind": "p",
            "text": "O cosseno divide o cateto adjacente pela hipotenusa, [[\\cos(A)=b/c]]. Tomar o recíproco inverte essa fração, [[1/\\cos(A)=c/b]], que é exatamente a fórmula da secante:"
          },
          {
            "kind": "p",
            "text": "[[[\\boxed{\\sec(A)=\\frac{1}{\\cos(A)}=\\frac{c}{b}}]]]"
          },
          {
            "kind": "p",
            "text": "Com [[\\cos(A)=4/5=0.8]], o recíproco é [[\\sec(A)=1/0.8=1.25]]: o mesmo triângulo, descrito na direção oposta. Esta distinção é importante porque o cosseno inverso, escrito [[\\cos^{-1}]], é uma ideia diferente: recupera um ângulo a partir de um valor de cosseno, enquanto [[1/\\cos(A)]] é o cosseno recíproco, uma razão, não um ângulo."
          },
          {
            "kind": "h3",
            "text": "O Que Significa um Valor de Secante de 1,25?"
          },
          {
            "kind": "p",
            "text": "Uma secante de 1,25 significa que a hipotenusa é 1,25 vezes tão longa como o cateto adjacente. A diferença percentual é [[(1.25-1)\\times100=25]], pelo que a hipotenusa é 25% mais longa do que o cateto adjacente. Isto não significa que o ângulo seja [[1.25^\\circ]], nem que o triângulo meça 1,25 unidades de alguma coisa. A secante é uma comparação, não uma medida."
          },
          {
            "kind": "h3",
            "text": "Porque é que a Secante é Superior a 1"
          },
          {
            "kind": "p",
            "text": "Num triângulo retângulo válido e não degenerado, a hipotenusa é mais longa do que qualquer um dos catetos, pelo que [[c \\gt b \\gt 0]]. Dividir a hipotenusa pelo cateto adjacente produz, portanto, uma razão superior a 1:"
          },
          {
            "kind": "p",
            "text": "[[[\\boxed{\\frac{c}{b} \\gt 1}]]]"
          },
          {
            "kind": "p",
            "text": "Um resultado de exatamente 1 não é possível para um ângulo de referência agudo normal num triângulo retângulo não degenerado, porque isso exigiria que a hipotenusa fosse igual ao cateto adjacente, achatando o triângulo numa linha. O valor 1 é um valor limite, aproximado apenas à medida que o ângulo diminui em direção a [[0^\\circ]]."
          },
          {
            "kind": "h3",
            "text": "Porque é que a Secante é o Recíproco do Cosseno"
          },
          {
            "kind": "p",
            "text": "A relação decorre diretamente das duas fórmulas. O cosseno divide o adjacente pela hipotenusa, a secante divide a hipotenusa pelo adjacente:"
          },
          {
            "kind": "p",
            "text": "[[\\cos(A)=\\frac{b}{c}]]"
          },
          {
            "kind": "p",
            "text": "[[\\sec(A)=\\frac{c}{b}]]"
          },
          {
            "kind": "p",
            "text": "Multiplicá-las cancela tudo e produz 1:"
          },
          {
            "kind": "p",
            "text": "[[[\\cos(A)\\sec(A)=\\frac{b}{c}\\times\\frac{c}{b}=1]]]"
          },
          {
            "kind": "p",
            "text": "Esta identidade é uma ferramenta prática de verificação: calcule o cosseno a partir dos mesmos lados, tome o seu recíproco, e ele tem de corresponder exatamente ao resultado da secante. Uma discrepância aponta para uma fração invertida ou um lado mal identificado."
          },
          {
            "kind": "h3",
            "text": "Porque é que a Secante Não Tem Unidades"
          },
          {
            "kind": "p",
            "text": "A secante divide um comprimento por outro, pelo que as unidades se cancelam. Por exemplo:"
          },
          {
            "kind": "p",
            "text": "[[[\\frac{5\\,\\text{m}}{4\\,\\text{m}}=1.25]]]"
          },
          {
            "kind": "p",
            "text": "Os metros desaparecem, deixando um número puro. A mesma razão aparece com 500 cm e 400 cm, ou com qualquer par de unidades compatíveis, razão pela qual misturar unidades, como uma hipotenusa em metros com um cateto adjacente em centímetros, estraga o cálculo antes de ele começar."
          },
          {
            "kind": "h3",
            "text": "Secante Versus Cossecante"
          },
          {
            "kind": "p",
            "text": "A secante e a cossecante são ambas razões recíprocas que usam a hipotenusa no numerador, mas usam catetos diferentes no denominador:"
          },
          {
            "kind": "p",
            "text": "[[\\sec(A)=\\frac{c}{b}]]"
          },
          {
            "kind": "p",
            "text": "[[\\csc(A)=\\frac{c}{a}]]"
          },
          {
            "kind": "p",
            "text": "A secante emparelha a hipotenusa com o cateto adjacente; a cossecante emparelha a hipotenusa com o cateto oposto. Não são intermutáveis, e escolher a errada responde a uma pergunta diferente sobre o triângulo."
          }
        ],
        "imgAlt": "Três etapas: triângulo 3-4-5, cosseno cos(A)=4/5=0,8, secante sec(A)=5/4=1,25, a relação recíproca",
        "figcaption": "Três etapas: identifique o triângulo 3-4-5, calcule o cosseno cos(A) = 4/5 e depois inverta a fração para obter sec(A) = 5/4."
      },
      "sec-formula": {
        "h2": "Como Funciona a Fórmula da Secante",
        "blocks": [
          {
            "kind": "p",
            "text": "A definição começa por palavras e depois passa a símbolos. A secante é a hipotenusa dividida pelo cateto adjacente:"
          },
          {
            "kind": "p",
            "text": "[[[\\sec(A)=\\frac{\\text{Hypotenuse}}{\\text{Adjacent}}]]]"
          },
          {
            "kind": "p",
            "text": "Na notação padrão, isto torna-se:"
          },
          {
            "kind": "p",
            "text": "[[[\\boxed{\\sec(A)=\\frac{c}{b}}]]]"
          },
          {
            "kind": "p",
            "text": "A hipotenusa pertence ao numerador porque a secante pergunta «quão longo é o lado inclinado em relação à sua projeção horizontal?», e o cateto adjacente pertence ao denominador porque é o comprimento de referência contra o qual se compara."
          },
          {
            "kind": "h3",
            "text": "Exemplo Totalmente Resolvido: Um Triângulo Retângulo 3-4-5"
          },
          {
            "kind": "p",
            "text": "Dado um cateto adjacente de [[b=4\\,\\text{cm}]], um cateto oposto de [[a=3\\,\\text{cm}]] e uma hipotenusa de [[c=5\\,\\text{cm}]], percorra a fórmula passo a passo."
          },
          {
            "kind": "p",
            "text": "<strong>Passo 1: Escreva a fórmula.</strong> [[\\sec(A)=c/b]]."
          },
          {
            "kind": "p",
            "text": "<strong>Passo 2: Substitua os valores conhecidos.</strong> [[\\sec(A)=5/4]]."
          },
          {
            "kind": "p",
            "text": "<strong>Passo 3: Divida.</strong> [[\\boxed{\\sec(A)=1.25}]]."
          },
          {
            "kind": "p",
            "text": "<strong>Passo 4: Interprete o resultado.</strong> A hipotenusa é 1,25 vezes o cateto adjacente, o que a torna 25% mais longa. Uma escada de 5 cm a abranger uma distância horizontal de 4 m comporta-se assim; a geometria não se importa com a unidade, apenas com a proporção."
          },
          {
            "kind": "p",
            "text": "<strong>Passo 5: Verifique usando o cosseno.</strong> [[\\cos(A)=4/5=0.8]], e [[1/0.8=1.25]]. A verificação recíproca confirma o resultado da secante, porque o cosseno e a secante são inversos exatos um do outro."
          },
          {
            "kind": "p",
            "text": "<strong>Passo 6: Verifique o triângulo.</strong> [[3^2+4^2=5^2]], que é [[9+16=25]]. Os comprimentos dos lados satisfazem o teorema de Pitágoras, pelo que formam um triângulo retângulo genuíno e o valor da secante é fiável."
          }
        ]
      },
      "sec-howto": {
        "h2": "Como Usar a Calculadora da Razão Secante",
        "blocks": [
          {
            "kind": "p",
            "text": "A calculadora acima aceita duas entradas, a hipotenusa [[c]] e o cateto adjacente [[b]], e devolve [[\\sec(A)]]. Siga estes passos por ordem."
          }
        ],
        "steps": [
          "<strong>Identifique o ângulo de referência [[A]].</strong> Todos os rótulos de lados na razão são definidos em relação a este ângulo, por isso escolha-o antes de tocar nos comprimentos dos lados.",
          "<strong>Localize a hipotenusa [[c]].</strong> Ela fica oposta ao ângulo reto e é o lado mais longo do triângulo; nos diagramas, é o lado inclinado.",
          "<strong>Localize o cateto adjacente [[b]].</strong> Ele toca o ângulo [[A]] e não é a hipotenusa; é um dos dois catetos perpendiculares.",
          "<strong>Obtenha ou meça ambos os comprimentos dos lados.</strong> Meça com o mesmo instrumento e a mesma unidade, ou converta uma das medidas antes de continuar.",
          "<strong>Introduza a hipotenusa no primeiro campo de entrada.</strong> Este é o numerador da fração, pelo que um erro aqui desloca toda a resposta.",
          "<strong>Introduza o cateto adjacente no segundo campo de entrada.</strong> Este é o denominador; tem de ser o lado junto ao ângulo [[A]], não o lado oposto a ele.",
          "<strong>Selecione unidades de medida compatíveis usando os seletores de unidades disponíveis.</strong> Ambos os campos têm de usar a mesma unidade, ou um equivalente convertido, ou a razão sairá errada.",
          "<strong>Confirme que ambas as medidas são positivas.</strong> Um comprimento zero ou negativo não tem significado num triângulo e indica um erro de introdução de dados.",
          "<strong>Verifique se a hipotenusa é mais longa do que o cateto adjacente.</strong> Se não for, ou os lados estão mal identificados ou os números não conseguem formar um triângulo retângulo.",
          "<strong>Clique em Calculate sec(A).</strong> A ferramenta efetua a divisão [[c/b]] e apresenta a razão.",
          "<strong>Leia a razão secante resultante.</strong> É um decimal sem dimensões, normalmente com quatro casas decimais, pronto a usar em cálculos posteriores.",
          "<strong>Confirme que o resultado é superior a 1.</strong> Para um triângulo retângulo válido e não degenerado com um ângulo de referência agudo, [[\\sec(A) \\gt 1]]; um valor igual ou inferior a 1 significa que algo correu mal a montante.",
          "<strong>Use Reset quando quiser limpar as entradas e começar outro cálculo.</strong> Os campos e o resultado voltam ao estado inicial."
        ],
        "closingParagraphs": [
          "A calculadora não precisa do cateto oposto nem de uma entrada de ângulo, porque a razão secante básica é totalmente determinada por dois comprimentos. Também não recupera ângulos nem lados em falta; para isso, as fórmulas rearranjadas mais adiante neste guia mostram o caminho manual."
        ]
      },
      "sec-examples": {
        "h2": "Exemplos Passo a Passo de Cálculo da Secante",
        "blocks": [
          {
            "kind": "p",
            "text": "Estes quatro exemplos usam triângulos clássicos cujos valores de secante vale a pena memorizar, porque reaparecem constantemente na trigonometria."
          },
          {
            "kind": "h3",
            "text": "Exemplo 1: Um Triângulo Retângulo 3-4-5"
          },
          {
            "kind": "p",
            "text": "Dados [[b=4\\,\\text{cm}]], [[a=3\\,\\text{cm}]] e [[c=5\\,\\text{cm}]]:"
          },
          {
            "kind": "p",
            "text": "[[\\sec(A)=\\frac{5}{4}]]"
          },
          {
            "kind": "p",
            "text": "[[\\boxed{\\sec(A)=1.25}]]"
          },
          {
            "kind": "p",
            "text": "A hipotenusa é 25% mais longa do que o cateto adjacente. Este é o exemplo de secante mais comum nos manuais, e o resultado 1,25 é exato."
          },
          {
            "kind": "h3",
            "text": "Exemplo 2: Um Triângulo Retângulo 5-12-13"
          },
          {
            "kind": "p",
            "text": "Dado um cateto adjacente de [[b=12\\,\\text{m}]], um cateto oposto de [[a=5\\,\\text{m}]] e uma hipotenusa de [[c=13\\,\\text{m}]]:"
          },
          {
            "kind": "p",
            "text": "[[\\sec(A)=\\frac{13}{12}]]"
          },
          {
            "kind": "p",
            "text": "[[\\boxed{\\sec(A)\\approx1.0833}]]"
          },
          {
            "kind": "p",
            "text": "A hipotenusa é aproximadamente 8,33% mais longa do que o cateto adjacente. Este triângulo aparece em problemas de construção porque o 13 fica perto de uma inclinação de telhado suave."
          },
          {
            "kind": "h3",
            "text": "Exemplo 3: Um Triângulo 45-45-90"
          },
          {
            "kind": "p",
            "text": "Dado um cateto adjacente de [[b=1\\,\\text{cm}]], um cateto oposto de [[a=1\\,\\text{cm}]] e uma hipotenusa de [[c=\\sqrt{2}\\,\\text{cm}]]:"
          },
          {
            "kind": "p",
            "text": "[[\\sec(45^\\circ)=\\frac{\\sqrt{2}}{1}]]"
          },
          {
            "kind": "p",
            "text": "[[\\boxed{\\sec(45^\\circ)=\\sqrt{2}\\approx1.4142}]]"
          },
          {
            "kind": "p",
            "text": "A hipotenusa é aproximadamente 1,4142 vezes qualquer um dos catetos. Aos 45 graus, os dois catetos são iguais, pelo que a secante é igual à cossecante aqui, ambas [[\\sqrt{2}]]."
          },
          {
            "kind": "h3",
            "text": "Exemplo 4: Um Triângulo 30-60-90"
          },
          {
            "kind": "p",
            "text": "Para o ângulo de referência [[A=30^\\circ]], use um cateto adjacente de [[b=\\sqrt{3}\\,\\text{cm}]], um cateto oposto de [[a=1\\,\\text{cm}]] e uma hipotenusa de [[c=2\\,\\text{cm}]]:"
          },
          {
            "kind": "p",
            "text": "[[\\sec(30^\\circ)=\\frac{2}{\\sqrt{3}}]]"
          },
          {
            "kind": "p",
            "text": "[[\\boxed{\\sec(30^\\circ)\\approx1.1547}]]"
          },
          {
            "kind": "p",
            "text": "A hipotenusa é aproximadamente 15,47% mais longa do que o cateto adjacente. Note que a mesma razão de hipotenusa 2:1 aparece aos 60 graus com os lados trocados, onde a secante passa a ser 2."
          }
        ]
      },
      "sec-applications": {
        "h2": "Exemplos da Vida Real de Uso da Razão Secante",
        "blocks": [
          {
            "kind": "p",
            "text": "A secante faz jus ao seu valor onde quer que um comprimento inclinado tenha de ser comparado com a sua projeção horizontal. Em cada exemplo, o triângulo retângulo é um modelo geométrico simplificado da situação real, e as suposições indicadas mantêm a simplificação honesta."
          },
          {
            "kind": "h3",
            "text": "Exemplo 5: Cálculo da Razão Secante de uma Escada"
          },
          {
            "kind": "p",
            "text": "Uma escada tem 5 m de comprimento e a sua base está a 4 m de uma parede vertical. O ângulo [[A]] fica entre a escada e o solo nivelado. A hipotenusa é a própria escada, [[c=5\\,\\text{m}]], e o cateto adjacente é a distância horizontal ao solo, [[b=4\\,\\text{m}]]:"
          },
          {
            "kind": "p",
            "text": "[[\\sec(A)=\\frac{5}{4}]]"
          },
          {
            "kind": "p",
            "text": "[[\\boxed{\\sec(A)=1.25}]]"
          },
          {
            "kind": "p",
            "text": "A escada é 25% mais longa do que a sua projeção horizontal ao solo. Esta razão não estabelece se a escada está posicionada em segurança; a segurança da escada depende do ângulo de trabalho e do apoio, não apenas da secante."
          },
          {
            "kind": "h3",
            "text": "Exemplo 6: Cálculo da Razão Secante de uma Viga de Telhado"
          },
          {
            "kind": "p",
            "text": "Uma viga de telhado tem um comprimento inclinado de 6,5 m e uma projeção horizontal de 6 m. A viga é a hipotenusa, [[c=6.5\\,\\text{m}]], e a projeção horizontal é o cateto adjacente, [[b=6\\,\\text{m}]]:"
          },
          {
            "kind": "p",
            "text": "[[\\sec(A)=\\frac{6.5}{6}]]"
          },
          {
            "kind": "p",
            "text": "[[\\boxed{\\sec(A)\\approx1.0833}]]"
          },
          {
            "kind": "p",
            "text": "A viga é aproximadamente 8,33% mais longa do que a sua projeção horizontal. Os carpinteiros usam esta relação ao contrário o tempo todo: medem a projeção na planta, multiplicam pela secante e encomendam as vigas. A razão não é uma avaliação completa do projeto do telhado nem estrutural."
          },
          {
            "kind": "h3",
            "text": "Exemplo 7: Avaliação da Razão Secante de uma Rampa"
          },
          {
            "kind": "p",
            "text": "Uma rampa simplificada tem um comprimento inclinado de 9,5 m e uma projeção horizontal de 9 m. A superfície inclinada é a hipotenusa, [[c=9.5\\,\\text{m}]], e a projeção horizontal é o cateto adjacente, [[b=9\\,\\text{m}]]:"
          },
          {
            "kind": "p",
            "text": "[[\\sec(A)=\\frac{9.5}{9}]]"
          },
          {
            "kind": "p",
            "text": "[[\\boxed{\\sec(A)\\approx1.0556}]]"
          },
          {
            "kind": "p",
            "text": "O comprimento inclinado da rampa é aproximadamente 5,56% mais longo do que a sua projeção horizontal. A secante suave reflete uma inclinação suave, mas a razão por si só não estabelece acessibilidade nem conformidade com os códigos de construção."
          },
          {
            "kind": "h3",
            "text": "Exemplo 8: Uma Medição de Topografia"
          },
          {
            "kind": "p",
            "text": "Um triângulo de topografia simplificado tem uma distância em linha reta de 50 m e uma separação horizontal de 40 m. A distância em linha reta é a hipotenusa, [[c=50\\,\\text{m}]], e a separação horizontal é o cateto adjacente, [[b=40\\,\\text{m}]]:"
          },
          {
            "kind": "p",
            "text": "[[\\sec(A)=\\frac{50}{40}]]"
          },
          {
            "kind": "p",
            "text": "[[\\boxed{\\sec(A)=1.25}]]"
          },
          {
            "kind": "p",
            "text": "A distância em linha reta é 25% mais longa do que a separação horizontal. Os topógrafos aplicam este tipo de redução horizontal rotineiramente; o trabalho de campo real pode exigir correções adicionais e procedimentos de medição para além do modelo simples."
          },
          {
            "kind": "h3",
            "text": "Exemplo 9: Um Cabo de Amarração a Suportar um Poste"
          },
          {
            "kind": "p",
            "text": "Um cabo de amarração tem 13 m de comprimento e a sua âncora ao solo está a 12 m na horizontal do poste. O cabo é a hipotenusa, [[c=13\\,\\text{m}]], e a distância horizontal do poste até à âncora é o cateto adjacente, [[b=12\\,\\text{m}]]:"
          },
          {
            "kind": "p",
            "text": "[[\\sec(A)=\\frac{13}{12}]]"
          },
          {
            "kind": "p",
            "text": "[[\\boxed{\\sec(A)\\approx1.0833}]]"
          },
          {
            "kind": "p",
            "text": "O cabo é aproximadamente 8,33% mais longo do que a sua projeção horizontal. Isto diz-lhe quanto cabo cortar, não quanto peso ele suporta; a tensão do cabo, a resistência da âncora e a segurança estrutural precisam de análise separada."
          },
          {
            "kind": "h3",
            "text": "Exemplo 10: Cálculo da Razão Secante do Longarim de uma Escada"
          },
          {
            "kind": "p",
            "text": "Um longarim de escada simplificado tem 5 m de comprimento e abrange uma projeção horizontal de 4 m. O longarim é a hipotenusa, [[c=5\\,\\text{m}]], e a projeção horizontal é o cateto adjacente, [[b=4\\,\\text{m}]]:"
          },
          {
            "kind": "p",
            "text": "[[\\sec(A)=\\frac{5}{4}]]"
          },
          {
            "kind": "p",
            "text": "[[\\boxed{\\sec(A)=1.25}]]"
          },
          {
            "kind": "p",
            "text": "O longarim diagonal é 25% mais longo do que a projeção horizontal. Os carpinteiros usam o cálculo inverso para cortar longarins a partir das dimensões da planta. A razão não verifica as dimensões da escada nem a conformidade com os códigos de construção."
          },
          {
            "kind": "h3",
            "text": "Exemplo 11: Compreender a Projeção Horizontal da Lança de uma Grua"
          },
          {
            "kind": "p",
            "text": "Uma lança de grua simplificada tem um comprimento de 10 m e uma projeção horizontal de 6 m. A lança é a hipotenusa, [[c=10\\,\\text{m}]], e a projeção horizontal é o cateto adjacente, [[b=6\\,\\text{m}]]:"
          },
          {
            "kind": "p",
            "text": "[[\\sec(A)=\\frac{10}{6}]]"
          },
          {
            "kind": "p",
            "text": "[[\\boxed{\\sec(A)\\approx1.6667}]]"
          },
          {
            "kind": "p",
            "text": "A lança é aproximadamente 66,67% mais longa do que a sua projeção horizontal. A secante acentuada reflete um ângulo de trabalho elevado. A razão não estabelece a capacidade da grua nem a segurança de operação."
          },
          {
            "kind": "h3",
            "text": "Exemplo 12: Um Segmento de Voo Reto de Aeronave"
          },
          {
            "kind": "p",
            "text": "Para um segmento de voo reto simplificado, o comprimento do trajeto é 5 km e o deslocamento horizontal é 4 km. O trajeto de voo é a hipotenusa, [[c=5\\,\\text{km}]], e o deslocamento horizontal é o cateto adjacente, [[b=4\\,\\text{km}]]:"
          },
          {
            "kind": "p",
            "text": "[[\\sec(A)=\\frac{5}{4}]]"
          },
          {
            "kind": "p",
            "text": "[[\\boxed{\\sec(A)=1.25}]]"
          },
          {
            "kind": "p",
            "text": "O comprimento do trajeto é 25% mais longo do que o deslocamento horizontal. Este é um exemplo geométrico idealizado, não um cálculo completo de navegação de voo; o planeamento real de voos adiciona vento, mudanças de altitude e rotas do espaço aéreo."
          },
          {
            "kind": "h3",
            "text": "Exemplo 13: Um Reforço Mecânico Diagonal"
          },
          {
            "kind": "p",
            "text": "Um reforço diagonal tem um comprimento de 2 m e uma projeção horizontal de 1,2 m. O reforço é a hipotenusa, [[c=2\\,\\text{m}]], e a projeção horizontal é o cateto adjacente, [[b=1.2\\,\\text{m}]]:"
          },
          {
            "kind": "p",
            "text": "[[\\sec(A)=\\frac{2}{1.2}]]"
          },
          {
            "kind": "p",
            "text": "[[\\boxed{\\sec(A)\\approx1.6667}]]"
          },
          {
            "kind": "p",
            "text": "O reforço é aproximadamente 66,67% mais longo do que a sua projeção horizontal. A razão descreve a geometria da instalação; não determina a resistência nem a adequação do reforço."
          },
          {
            "kind": "h3",
            "text": "Exemplo 14: Cálculo da Razão Secante de uma Rota de Caminhada"
          },
          {
            "kind": "p",
            "text": "Uma secção de caminhada reta simplificada tem um comprimento de trajeto de 100 m e um deslocamento horizontal de 80 m. O trajeto é a hipotenusa, [[c=100\\,\\text{m}]], e o deslocamento horizontal é o cateto adjacente, [[b=80\\,\\text{m}]]:"
          },
          {
            "kind": "p",
            "text": "[[\\sec(A)=\\frac{100}{80}]]"
          },
          {
            "kind": "p",
            "text": "[[\\boxed{\\sec(A)=1.25}]]"
          },
          {
            "kind": "p",
            "text": "O trajeto reto é 25% mais longo do que o seu deslocamento horizontal. Os trilhos de caminhada reais contêm curvas e gradientes variáveis, pelo que deve tratar isto como um único segmento reto, não como toda a rota."
          },
          {
            "kind": "h3",
            "text": "Exemplo 15: Um Suporte de Toldo"
          },
          {
            "kind": "p",
            "text": "Um suporte de toldo tem um comprimento de 3 m e uma projeção horizontal de 2,4 m. O suporte é a hipotenusa, [[c=3\\,\\text{m}]], e a projeção horizontal é o cateto adjacente, [[b=2.4\\,\\text{m}]]:"
          },
          {
            "kind": "p",
            "text": "[[\\sec(A)=\\frac{3}{2.4}]]"
          },
          {
            "kind": "p",
            "text": "[[\\boxed{\\sec(A)=1.25}]]"
          },
          {
            "kind": "p",
            "text": "O suporte é 25% mais longo do que a sua projeção horizontal. O cálculo não estabelece a adequação estrutural; a resistência da fixação e a carga do vento precisam das suas próprias verificações."
          },
          {
            "kind": "h3",
            "text": "Exemplo 16: Um Cabo Entre Dois Pontos"
          },
          {
            "kind": "p",
            "text": "Um cabo reto abrange um comprimento total de 25 m entre dois pontos com uma separação horizontal de 24 m. O cabo é a hipotenusa, [[c=25\\,\\text{m}]], e a separação horizontal é o cateto adjacente, [[b=24\\,\\text{m}]]:"
          },
          {
            "kind": "p",
            "text": "[[\\sec(A)=\\frac{25}{24}]]"
          },
          {
            "kind": "p",
            "text": "[[\\boxed{\\sec(A)\\approx1.0417}]]"
          },
          {
            "kind": "p",
            "text": "O cabo é aproximadamente 4,17% mais longo do que a separação horizontal. O modelo simplificado assume um cabo reto e uma relação de triângulo retângulo; um cabo real cede, o que adiciona comprimento para além do modelo da secante."
          },
          {
            "kind": "p",
            "text": "A secante é uma razão matemática e não uma quantidade física com unidades. O seu valor prático vem de comparar um comprimento inclinado com a sua projeção horizontal, recuperar comprimentos quando o ângulo é conhecido, verificar a geometria do triângulo e usar fórmulas que requerem especificamente a secante. Nunca certifica por si só segurança estrutural, capacidade de carga, acessibilidade ou conformidade de engenharia."
          }
        ],
        "tables": [
          {
            "headers": [
              "Situação",
              "c",
              "b",
              "Fórmula",
              "Razão",
              "Mais longo por",
              "Significado"
            ],
            "rows": [
              [
                "Escada",
                "5 m",
                "4 m",
                "5/4",
                "1.25",
                "25%",
                "Escada um quarto mais longa do que a sua distância ao solo"
              ],
              [
                "Viga de telhado",
                "6.5 m",
                "6 m",
                "6.5/6",
                "1.0833",
                "8.33%",
                "Viga ligeiramente mais longa do que a projeção horizontal"
              ],
              [
                "Rampa",
                "9.5 m",
                "9 m",
                "9.5/9",
                "1.0556",
                "5.56%",
                "Inclinação suave, pouco mais longa do que a projeção"
              ],
              [
                "Topografia",
                "50 m",
                "40 m",
                "50/40",
                "1.25",
                "25%",
                "Distância em linha reta excede a horizontal"
              ],
              [
                "Cabo de amarração",
                "13 m",
                "12 m",
                "13/12",
                "1.0833",
                "8.33%",
                "Comprimento do cabo para cortar a partir da distância ao solo"
              ],
              [
                "Longarim de escada",
                "5 m",
                "4 m",
                "5/4",
                "1.25",
                "25%",
                "Longarim diagonal versus projeção horizontal"
              ],
              [
                "Lança de grua",
                "10 m",
                "6 m",
                "10/6",
                "1.6667",
                "66.67%",
                "Lança íngreme muito mais longa do que a sua projeção"
              ],
              [
                "Segmento de voo",
                "5 km",
                "4 km",
                "5/4",
                "1.25",
                "25%",
                "Trajeto idealizado versus deslocamento horizontal"
              ],
              [
                "Reforço diagonal",
                "2 m",
                "1.2 m",
                "2/1.2",
                "1.6667",
                "66.67%",
                "Comprimento do reforço contra a sua projeção horizontal"
              ],
              [
                "Rota de caminhada",
                "100 m",
                "80 m",
                "100/80",
                "1.25",
                "25%",
                "Segmento reto versus distância horizontal do mapa"
              ],
              [
                "Suporte de toldo",
                "3 m",
                "2.4 m",
                "3/2.4",
                "1.25",
                "25%",
                "Comprimento do suporte versus alcance horizontal"
              ],
              [
                "Vão de cabo",
                "25 m",
                "24 m",
                "25/24",
                "1.0417",
                "4.17%",
                "Cabo quase horizontal, quase sem comprimento extra"
              ]
            ]
          }
        ],
        "imgAlt": "Quatro painéis: escada 1,25, rampa 1,0556, topografia 1,25 e lança de grua 1,6667, cada um com o seu triângulo",
        "figcaption": "Quatro cálculos práticos: escada, rampa, topografia e lança de grua, cada um com o seu triângulo, fórmula e razão."
      },
      "sec-angle": {
        "h2": "Compreender a Relação Entre a Secante e o Tamanho do Ângulo",
        "blocks": [
          {
            "kind": "p",
            "text": "A secante cresce à medida que o ângulo de referência cresce. A geometria explica porquê: quando o ângulo [[A]] é pequeno, o cateto adjacente é quase tão longo como a hipotenusa, pelo que a razão fica um pouco acima de 1. À medida que o ângulo se alarga, o cateto adjacente torna-se uma parcela menor da hipotenusa, e a razão sobe. Aos [[45^\\circ]], a secante é [[\\sqrt{2}]], cerca de 1,4142; aos [[60^\\circ]], é exatamente 2, porque a hipotenusa é o dobro do cateto adjacente; e à medida que o ângulo se aproxima de [[90^\\circ]], o cateto adjacente encolhe em direção a zero e a secante cresce sem limite."
          }
        ],
        "tables": [
          {
            "headers": [
              "Ângulo [[A]]",
              "Cateto adjacente [[b]]",
              "Hipotenusa [[c]]",
              "Razão secante"
            ],
            "rows": [
              [
                "[[30^\\circ]]",
                "[[\\sqrt{3}]]",
                "2",
                "Aproximadamente 1.1547"
              ],
              [
                "[[45^\\circ]]",
                "1",
                "[[\\sqrt{2}]]",
                "Aproximadamente 1.4142"
              ],
              [
                "[[60^\\circ]]",
                "1",
                "2",
                "2"
              ],
              [
                "[[75^\\circ]]",
                "1",
                "Aproximadamente 3.8637",
                "Aproximadamente 3.8637"
              ]
            ]
          }
        ],
        "closingParagraphs": [
          "O padrão é monótono: cada aumento do ângulo eleva a secante, e a razão mantém-se acima de 1 para cada ângulo agudo. As medidas da tabela são ilustrativas; a razão, não o tamanho absoluto do triângulo, determina o ângulo. A secante descreve, portanto, a forma do triângulo, não a sua escala."
        ],
        "imgAlt": "Três triângulos aos 30, 45 e 60 graus com secantes 1,1547, 1,4142 e 2; a secante sobe com o ângulo",
        "figcaption": "À medida que o ângulo A cresce, o cateto adjacente torna-se uma parcela menor da hipotenusa, pelo que sec(A) aumenta."
      },
      "sec-hypotenuse": {
        "h2": "Como Encontrar a Hipotenusa Usando a Secante",
        "blocks": [
          {
            "kind": "p",
            "text": "A fórmula da secante pode ser rearranjada para encontrar a hipotenusa quando o cateto adjacente e o ângulo são conhecidos. Comece com [[\\sec(A)=c/b]] e multiplique ambos os lados por [[b]]:"
          },
          {
            "kind": "p",
            "text": "[[[\\boxed{c=b\\sec(A)}]]]"
          },
          {
            "kind": "p",
            "text": "A hipotenusa é igual ao cateto adjacente multiplicado pela secante do ângulo. Dado um cateto adjacente de [[b=4\\,\\text{m}]] e um ângulo de [[A=60^\\circ]], e sabendo que [[\\sec(60^\\circ)=2]]:"
          },
          {
            "kind": "p",
            "text": "[[c=4\\times2]]"
          },
          {
            "kind": "p",
            "text": "[[\\boxed{c=8\\,\\text{m}}]]"
          },
          {
            "kind": "p",
            "text": "A hipotenusa é o dobro do cateto adjacente neste ângulo, o que corresponde à geometria 30-60-90: o lado oposto aos 30 graus é metade da hipotenusa. O cateto adjacente pode ser encontrado da mesma forma, rearranjando novamente:"
          },
          {
            "kind": "p",
            "text": "[[[\\boxed{b=\\frac{c}{\\sec(A)}}]]]"
          },
          {
            "kind": "p",
            "text": "Com uma hipotenusa de [[c=10\\,\\text{m}]] e [[A=60^\\circ]]: [[b=10/2]], pelo que [[\\boxed{b=5\\,\\text{m}}]]. Estes são rearranjos matemáticos da mesma fórmula. A calculadora desta página devolve a razão secante a partir dos comprimentos dos lados; não calcula diretamente os lados em falta."
          }
        ]
      },
      "sec-recover": {
        "h2": "Como Encontrar um Ângulo a Partir de uma Razão Secante",
        "blocks": [
          {
            "kind": "p",
            "text": "A razão secante e o ângulo são quantidades diferentes: uma é uma comparação sem dimensões de lados, a outra é medida em graus. Se a razão secante for conhecida, recupere o cosseno com o recíproco:"
          },
          {
            "kind": "p",
            "text": "[[\\cos(A)=\\frac{1}{\\sec(A)}]]"
          },
          {
            "kind": "p",
            "text": "Depois, o cosseno inverso devolve o ângulo:"
          },
          {
            "kind": "p",
            "text": "[[[\\boxed{A=\\cos^{-1}\\left(\\frac{1}{\\sec(A)}\\right)}]]]"
          },
          {
            "kind": "p",
            "text": "Dada [[\\sec(A)=1.25]], calcule primeiro o cosseno: [[\\cos(A)=1/1.25=0.8]]. Depois [[A=\\cos^{-1}(0.8)]], obtendo [[\\boxed{A\\approx36.87^\\circ}]]. Este é um cálculo de ângulo separado, não algo que a calculadora da razão secante execute diretamente. Coloque a calculadora científica em graus se a resposta for esperada em graus; no modo radianos, a mesma entrada devolve cerca de 0,6435, o mesmo ângulo em unidades diferentes."
          }
        ]
      },
      "sec-mistakes": {
        "h2": "Erros Comuns ao Calcular a Secante",
        "blocks": [
          {
            "kind": "p",
            "text": "A maioria dos erros de secante vem de uma fração invertida, de um lado mal identificado ou de um deslize de unidades. Percorra esta lista antes de confiar num resultado."
          }
        ],
        "steps": [
          "<strong>Inverter a fórmula e calcular [[b/c]] em vez de [[c/b]].</strong> Este é o erro mais comum de todos, e devolve o cosseno em vez da secante. Com [[c=5]] e [[b=4]], a ordem errada dá 0,8; a ordem correta dá 1,25.",
          "<strong>Confundir a secante com o cosseno.</strong> O cosseno é o adjacente dividido pela hipotenusa; a secante é exatamente o inverso. Se a resposta sair abaixo de 1, é quase de certeza o cosseno, não a secante.",
          "<strong>Confundir a secante com a cossecante.</strong> Ambas usam a hipotenusa no numerador, pelo que parecem semelhantes. A secante divide pelo cateto adjacente [[b]]; a cossecante divide pelo cateto oposto [[a]]. Verifique qual dos catetos o problema realmente dá.",
          "<strong>Usar o cateto oposto em vez do cateto adjacente.</strong> Dividir [[c/a]] calcula a cossecante. Com [[c=5]] e [[a=3]], isso dá 1,6667, uma cossecante correta mas uma secante errada.",
          "<strong>Usar um lado que não é a hipotenusa no numerador.</strong> A secante tem sempre a hipotenusa em cima. Um cateto sobre um cateto é tangente ou cotangente; um cateto sobre a hipotenusa é seno ou cosseno.",
          "<strong>Trocar os catetos adjacente e oposto.</strong> Os rótulos trocam quando o ângulo de referência muda de [[A]] para [[B]]. Confirme sempre qual o ângulo que o problema indica antes de atribuir [[b]].",
          "<strong>Assumir que a secante é um ângulo medido em graus.</strong> Um resultado de 1,25 é uma razão, não [[1.25^\\circ]]. Tratá-la como graus alimenta disparates em qualquer cálculo posterior.",
          "<strong>Apresentar a razão com metros ou centímetros.</strong> As unidades cancelam-se na divisão, pelo que «1,25 m» está errado. Escreva o número simples e mantenha as unidades nas medidas de entrada, onde pertencem.",
          "<strong>Introduzir comprimentos de lados zero ou negativos.</strong> Um triângulo não pode ter um lado zero ou negativo, pelo que estas entradas indicam um erro de introdução de dados ou uma medida em falta, não um caso limite válido.",
          "<strong>Introduzir um cateto adjacente mais longo do que a hipotenusa.</strong> A hipotenusa é sempre o lado mais longo. Se [[b \\gt c]], as entradas estão trocadas ou o triângulo é impossível.",
          "<strong>Misturar unidades de medida.</strong> Uma hipotenusa de 5 m com um cateto adjacente de 40 cm dá 0,125, um número sem significado. Converta primeiro para uma única unidade: 5 m e 4 m dão o correto 1,25.",
          "<strong>Arredondar demasiado cedo.</strong> Arredondar uma divisão intermédia para duas casas decimais e depois continuar o cálculo agrava o erro. Mantenha a precisão total em cada passo e arredonde apenas a resposta final.",
          "<strong>Assumir que a secante tem de ser igual a 1 para um triângulo retângulo.</strong> Nenhum triângulo retângulo tem uma secante de exatamente 1. Espere um valor acima de 1 e trate o exatamente 1 como um sinal de que as entradas foram invertidas ou o triângulo é degenerado.",
          "<strong>Confundir o cosseno recíproco com o cosseno inverso.</strong> [[1/\\cos(A)]] é a secante, uma razão; [[\\cos^{-1}]] é o cosseno inverso, que devolve um ângulo. Os nomes semelhantes causam erros reais, por isso leia a notação com atenção.",
          "<strong>Assumir que a secante por si só determina as dimensões absolutas do triângulo.</strong> A secante descreve a forma, não o tamanho: infinitos triângulos partilham uma secante de 1,25, de uma hipotenusa de 5 cm a uma de 5 km. A razão fixa as proporções; os comprimentos reais precisam de pelo menos uma medida de lado."
        ],
        "closingParagraphs": [
          "<strong>Errado versus correto:</strong> Dada uma hipotenusa de [[c=5]] e um cateto adjacente de [[b=4]]:",
          "<strong>Incorreto:</strong> [[4/5=0.8]]. Isto é o cosseno, não a secante. O numerador e o denominador estão invertidos.",
          "<strong>Correto:</strong> [[\\sec(A)=5/4=1.25]].",
          "<strong>Verifique:</strong> [[\\cos(A)=0.8]], e [[1/0.8=1.25]]. A verificação recíproca confirma o resultado, e a resposta fica acima de 1, como toda a secante válida deve."
        ]
      },
      "sec-verify": {
        "h2": "Como Verificar se o Seu Resultado de Secante é Válido",
        "blocks": [
          {
            "kind": "p",
            "text": "Um triângulo retângulo válido e não degenerado requer lados positivos com a hipotenusa estritamente mais longa, [[0 \\lt b \\lt c]], pelo que o resultado da secante tem de ser superior a 1:"
          },
          {
            "kind": "p",
            "text": "[[[\\boxed{\\sec(A)=\\frac{c}{b} \\gt 1}]]]"
          },
          {
            "kind": "p",
            "text": "Ambas as medidas têm de usar unidades compatíveis. Um resultado igual ou inferior a 1 indica normalmente entradas invertidas, identificação incorreta dos lados, medidas incompatíveis ou dimensões de triângulo inválidas."
          },
          {
            "kind": "h3",
            "text": "Método 1: Verifique o Recíproco do Cosseno"
          },
          {
            "kind": "p",
            "text": "Verifique [[\\cos(A)=b/c]] e depois confirme [[\\sec(A)=1/\\cos(A)]]. Com [[b=4]] e [[c=5]]: [[\\cos(A)=4/5=0.8]], pelo que [[\\sec(A)=1/0.8=1.25]]. Uma discrepância entre os dois caminhos indica uma fração invertida ou um lado mal identificado."
          },
          {
            "kind": "h3",
            "text": "Método 2: Verifique o Teorema de Pitágoras"
          },
          {
            "kind": "p",
            "text": "Se o cateto oposto for conhecido ou necessário, calcule [[a=\\sqrt{c^2-b^2}]]. Para [[b=4]] e [[c=5]]: [[a=\\sqrt{25-16}=3]], e [[3^2+4^2=5^2]]. Isto confirma as dimensões do triângulo retângulo 3-4-5. O cateto oposto é aqui um valor de verificação, não parte da fórmula principal da secante."
          },
          {
            "kind": "h3",
            "text": "Método 3: Verifique Usando o Cosseno Inverso"
          },
          {
            "kind": "p",
            "text": "Para uma razão secante de 1,25: [[A=\\cos^{-1}(1/1.25)]], que é [[A=\\cos^{-1}(0.8)\\approx36.87^\\circ]]. Como a secante fica modestamente acima de 1, o ângulo deve ficar bem abaixo de [[45^\\circ]]; se não ficar, os rótulos dos lados estão provavelmente trocados. Podem surgir pequenas diferenças devido a arredondamentos."
          }
        ]
      },
      "sec-vs": {
        "h2": "Secante vs. Cosseno, Seno e Cossecante",
        "blocks": [
          {
            "kind": "p",
            "text": "Cada razão compara um par diferente de lados, usando o mesmo ângulo de referência e os mesmos rótulos de lados:"
          }
        ],
        "tables": [
          {
            "headers": [
              "Razão",
              "Fórmula",
              "O que compara"
            ],
            "rows": [
              [
                "Seno",
                "sin(A) = a/c",
                "Cateto oposto para a hipotenusa"
              ],
              [
                "Cosseno",
                "cos(A) = b/c",
                "Cateto adjacente para a hipotenusa"
              ],
              [
                "Tangente",
                "tan(A) = a/b",
                "Cateto oposto para o cateto adjacente"
              ],
              [
                "Secante",
                "sec(A) = c/b",
                "Hipotenusa para o cateto adjacente"
              ],
              [
                "Cossecante",
                "csc(A) = c/a",
                "Hipotenusa para o cateto oposto"
              ],
              [
                "Cotangente",
                "cot(A) = b/a",
                "Cateto adjacente para o cateto oposto"
              ]
            ]
          }
        ],
        "closingParagraphs": [
          "A secante e o cosseno são o par recíproco: [[\\sec(A)=1/\\cos(A)]]. Se [[\\cos(A)=0.8]], então [[\\sec(A)=1.25]]. Recorra à secante quando uma fórmula pedir a hipotenusa dividida pelo adjacente, quando estiver a comparar um comprimento inclinado com a sua projeção horizontal, ou quando a relação conhecida parte do lado mais longo; recorra ao cosseno para o adjacente sobre a hipotenusa, ao seno para o cateto oposto contra a hipotenusa, e à cossecante quando a hipotenusa é comparada com o cateto oposto.",
          "Para as razões vizinhas, consulte a <a href=\"/sine-ratio-calculator/\" class=\"text-primary hover:underline\">Calculadora da Razão Seno</a>, a <a href=\"/cosine-ratio-calculator/\" class=\"text-primary hover:underline\">Calculadora da Razão Cosseno</a>, a <a href=\"/tangent-ratio-calculator/\" class=\"text-primary hover:underline\">Calculadora da Razão Tangente</a>, a <a href=\"/cosecant-ratio-calculator/\" class=\"text-primary hover:underline\">Calculadora da Razão Cossecante</a> e a <a href=\"/cotangent-ratio-calculator/\" class=\"text-primary hover:underline\">Calculadora da Razão Cotangente</a>."
        ]
      },
      "sec-related": {
        "h2": "Explore as Calculadoras Trigonométricas Relacionadas",
        "related": [
          {
            "name": "Calculadora da Razão Seno"
          },
          {
            "name": "Calculadora da Razão Cosseno"
          },
          {
            "name": "Calculadora da Razão Tangente"
          },
          {
            "name": "Calculadora da Razão Cossecante"
          },
          {
            "name": "Calculadora da Razão Cotangente"
          },
          {
            "name": "Calculadora de Ângulos de Triângulo Retângulo"
          }
        ]
      },
      "sec-conclusion": {
        "h2": "Use a Razão Secante com Confiança",
        "blocks": [
          {
            "kind": "p",
            "text": "A secante é a forma invertida do cosseno: divida a hipotenusa pelo cateto adjacente e terá descrito quanto mais longo é o comprimento inclinado do que a sua projeção horizontal. A fórmula [[\\sec(A)=c/b]] precisa apenas de duas medidas, a resposta é sempre um número sem dimensões superior a 1, e cresce à medida que o ângulo de referência cresce. Quando for necessário um lado em falta, [[c=b\\sec(A)]] recupera a hipotenusa; quando for necessário o ângulo, [[A=\\cos^{-1}(1/\\sec(A))]] recupera-o. Escada, viga, rampa ou o clássico 3-4-5, o método nunca muda: identifique a hipotenusa, identifique o cateto adjacente, divida e verifique com o recíproco do cosseno."
          }
        ]
      }
    },
    "faqs": [
      {
        "question": "Qual é a fórmula da razão secante para um triângulo retângulo?",
        "answer": "sec(A) = c / b: divida a hipotenusa c pelo lado adjacente ao ângulo A. Com uma hipotenusa de 5 cm e um lado adjacente de 4 cm, o resultado é 5/4 = 1,25. Esse decimal é a resposta completa, uma razão sem dimensões, não um ângulo."
      },
      {
        "question": "Como é que a secante está relacionada com o cosseno?",
        "answer": "A secante é o recíproco do cosseno: sec(A) = 1 / cos(A). Se cos(A) = 4/5 = 0,8, então sec(A) = 1/0,8 = 1,25. As duas razões descrevem o mesmo ângulo a partir de perspetivas invertidas, e a verificação recíproca é a forma mais rápida de verificar um cálculo de secante."
      },
      {
        "question": "Porque é que a secante é superior a 1 num triângulo retângulo?",
        "answer": "Num triângulo retângulo válido e não degenerado, a hipotenusa é estritamente mais longa do que qualquer um dos catetos, pelo que c > b > 0. Dividir um comprimento maior por um menor dá sempre uma razão acima de 1: sec(A) = c/b > 1 para cada ângulo de referência agudo."
      },
      {
        "question": "A secante pode ser igual a 1?",
        "answer": "Não para um ângulo agudo normal num triângulo retângulo real. Uma secante de exatamente 1 exigiria que a hipotenusa fosse igual ao cateto adjacente, o que colapsaria o triângulo numa linha plana. O valor 1 é um valor limite aproximado à medida que o ângulo A diminui em direção aos 0 graus, nunca um valor que um triângulo genuíno produza."
      },
      {
        "question": "O que significa um valor de secante de 1,25?",
        "answer": "A hipotenusa é 1,25 vezes tão longa como o cateto adjacente, ou 25 por cento mais longa. Não significa que o ângulo seja de 1,25 graus, nem que o triângulo meça 1,25 unidades. A secante é uma comparação sem dimensões de dois comprimentos."
      },
      {
        "question": "A secante tem unidades de medida?",
        "answer": "Não. Ambas as entradas são comprimentos medidos na mesma unidade, pelo que as unidades se cancelam: 5 m / 4 m = 1,25, exatamente como 500 cm / 400 cm = 1,25. Apresente a secante como um número simples, nunca com graus, metros ou pés associados."
      },
      {
        "question": "Como se calcula a secante a partir dos comprimentos dos lados?",
        "answer": "Meça a hipotenusa c e o cateto adjacente b na mesma unidade, confirme que ambos são positivos e que c é mais longo do que b, e depois divida: sec(A) = c / b. Nesta página, introduza a hipotenusa no primeiro campo e o cateto adjacente no segundo, escolha unidades compatíveis e clique em Calculate sec(A)."
      },
      {
        "question": "Como posso encontrar a hipotenusa usando a secante?",
        "answer": "Rearranje a fórmula para c = b * sec(A). Se o cateto adjacente for 4 m e o ângulo A for 60 graus, sec(60 deg) = 2, pelo que c = 4 * 2 = 8 m. Este é um rearranjo manual; a calculadora desta página devolve a razão a partir dos comprimentos dos lados, não os lados em falta."
      },
      {
        "question": "Como posso encontrar um ângulo a partir de uma razão secante?",
        "answer": "Tome o recíproco para obter a razão do cosseno e depois aplique o cosseno inverso: A = cos^-1(1 / sec(A)). Para sec(A) = 1,25, a razão do cosseno é 0,8, pelo que A = cos^-1(0,8), cerca de 36,87 graus. Coloque a sua calculadora científica primeiro no modo de graus. A calculadora desta página devolve a razão, não o ângulo."
      },
      {
        "question": "Qual é a diferença entre a secante e a cossecante?",
        "answer": "A secante divide a hipotenusa pelo cateto adjacente (c/b); a cossecante divide a hipotenusa pelo cateto oposto (c/a). Ambas são razões recíprocas que envolvem a hipotenusa, mas usam catetos diferentes, pelo que respondem a perguntas diferentes e nunca são intermutáveis."
      },
      {
        "question": "Posso calcular a secante sem conhecer o cateto oposto?",
        "answer": "Sim. A fórmula principal da secante usa apenas a hipotenusa e o cateto adjacente, pelo que o cateto oposto nunca entra no cálculo. O cateto oposto torna-se útil apenas quando o teorema de Pitágoras é usado para verificar o triângulo ou quando o seno, a tangente ou a cossecante entram no trabalho."
      },
      {
        "question": "Como é que a secante é usada em medições práticas?",
        "answer": "A secante compara um comprimento inclinado com a sua projeção horizontal: uma escada contra a sua distância ao solo, uma viga de telhado contra a sua projeção horizontal, um cabo contra a separação horizontal das suas extremidades. A razão diz-lhe quanto mais longo é o caminho inclinado do que a sua projeção, o que é útil para estimar comprimentos de material a partir de plantas horizontais."
      }
    ],
    "faqHeading": "Perguntas Frequentes",
    "relatedHeading": "Explore as Calculadoras Trigonométricas Relacionadas"
  },
  "bn": {
    "tocHeading": "এই গাইডে",
    "tocItems": {
      "sec-intro": "সেক্যান্ট অনুপাত ক্যালকুলেটর কী?",
      "sec-triangle": "সংলগ্ন বাহু ও অতিভুজ বোঝা",
      "sec-whatis": "সেক্যান্ট অনুপাত বোঝা",
      "sec-formula": "সেক্যান্ট সূত্র যেভাবে কাজ করে",
      "sec-howto": "সেক্যান্ট অনুপাত ক্যালকুলেটর যেভাবে ব্যবহার করবেন",
      "sec-examples": "সেক্যান্ট নির্ণয়ের ধাপে ধাপে উদাহরণ",
      "sec-applications": "সেক্যান্ট অনুপাতের বাস্তব জীবনের উদাহরণ",
      "sec-angle": "সেক্যান্ট ও কোণের মাপের সম্পর্ক বোঝা",
      "sec-hypotenuse": "সেক্যান্ট ব্যবহার করে অতিভুজ নির্ণয়",
      "sec-recover": "সেক্যান্ট অনুপাত থেকে কোণ নির্ণয়",
      "sec-mistakes": "সেক্যান্ট নির্ণয়ে সাধারণ ভুল",
      "sec-verify": "সেক্যান্ট ফলাফল বৈধ কিনা যাচাই",
      "sec-vs": "সেক্যান্ট বনাম কোসাইন, সাইন ও কোসেক্যান্ট",
      "sec-faq": "প্রায়শই জিজ্ঞাসিত প্রশ্ন",
      "sec-related": "সম্পর্কিত ত্রিকোণমিতিক ক্যালকুলেটর দেখুন"
    },
    "sections": {
      "sec-intro": {
        "h2": "সেক্যান্ট অনুপাত ক্যালকুলেটর কী?",
        "blocks": [
          {
            "kind": "p",
            "text": "সেক্যান্ট অনুপাত ক্যালকুলেটর একটি প্রশ্নের উত্তর দেয়: সমকোণী ত্রিভুজের একটি সূক্ষ্মকোণের ক্ষেত্রে সবচেয়ে লম্বা বাহুটি কোণের পাশের বাহুর সঙ্গে কেমন তুলনা করে? অতিভুজ ও সংলগ্ন বাহু লিখুন, আর টুলটি অতিভুজকে সংলগ্ন বাহু দিয়ে ভাগ করে [[\\sec(A)=c/b]] ফেরত দেয়। 5 cm অতিভুজ ও 4 cm সংলগ্ন বাহু হলে গণনাটি হয় [[5/4=1.25]]: অতিভুজ সংলগ্ন বাহুর 1.25 গুণ লম্বা, অর্থাৎ এটি 25% বেশি লম্বা। এই দশমিক সংখ্যাই সম্পূর্ণ উত্তর। এটি একটি মাত্রাহীন অনুপাত, কারণ ভাগের সময় সেন্টিমিটার কেটে যায়, এবং এটি ডিগ্রিতে মাপা কোণ নয়, তাই 1.25 কে কখনো [[1.25^\\circ]] পড়বেন না। বিপরীত বাহু এই গণনায় কখনো আসে না; অতিভুজ ও সংলগ্ন বাহুই যথেষ্ট। সেক্যান্ট আবার কোসাইনের বিপরীত, সেজন্য অনেক পাঠ্যবই একে [[\\cos(A)]] এর উল্টো রূপ হিসেবে পরিচয় করিয়ে দেয়।"
          }
        ]
      },
      "sec-triangle": {
        "h2": "সংলগ্ন বাহু ও অতিভুজ বোঝা",
        "blocks": [
          {
            "kind": "h3",
            "text": "সমকোণী ত্রিভুজ কী?"
          },
          {
            "kind": "p",
            "text": "সমকোণী ত্রিভুজের একটি কোণ থাকে ঠিক [[90^\\circ]], অর্থাৎ দুটি লম্ব রেখার মধ্যবর্তী কোণ, যেমন সমতল মেঝের সঙ্গে দেয়ালের মিলন। অতিভুজ থাকে সেই সমকোণের বিপরীতে এবং সবসময় সবচেয়ে লম্বা বাহু, কারণ তাকে কোণা জুড়ে পুরো কর্ণ বরাবর বিস্তৃত হতে হয়। বাকি দুটি কোণ অবশিষ্ট 90 ডিগ্রি ভাগ করে নেয়, তাই দুটোই সূক্ষ্মকোণ। দুটি বাহু সমকোণে মিলিত হয়, পরস্পরের লম্ব, এবং অতিভুজের সঙ্গে তাদের সম্পর্কই সমকোণী ত্রিভুজের ত্রিকোণমিতিকে সম্ভব করে।"
          },
          {
            "kind": "h3",
            "text": "সংলগ্ন বাহু কী?"
          },
          {
            "kind": "p",
            "text": "সংলগ্ন বাহু [[b]] হলো সেই বাহু যা প্রসঙ্গ কোণ [[A]] কে স্পর্শ করে, কিন্তু অতিভুজ নয়। বাস্তব সমস্যায় এটি প্রায়ই অনুভূমিক প্রস্থের ভূমিকা পালন করে: মইয়ের গোড়া থেকে দেয়াল পর্যন্ত ভূমি দূরত্ব, ছাদের রাফটারের অনুভূমিক প্রক্ষেপ, বা দুটি জরিপ বিন্দুর মধ্যে অনুভূমিক ব্যবধান। এটি সেক্যান্ট সূত্রের হরে যায়। কোন বাহুটি সংলগ্ন হিসেবে গণ্য হবে তা নির্ভর করে নির্বাচিত প্রসঙ্গ কোণের ওপর, তাই কোণ [[A]] থেকে কোণ [[B]] তে গেলে সংলগ্ন ও বিপরীত নামদ্বয় অদলবদল হয়।"
          },
          {
            "kind": "h3",
            "text": "অতিভুজ কী?"
          },
          {
            "kind": "p",
            "text": "অতিভুজ [[c]] হলো সমকোণের বিপরীত বাহু: যেকোনো চিত্রে এটি [[90^\\circ]] কোণা চিহ্নিতকারী ছোট বর্গের মুখোমুখি থাকে, এবং এটি দুটি বাহুর যেকোনোটির চেয়ে কঠোরভাবে বেশি লম্বা। বাস্তব সমস্যায় এটি প্রায়ই ঢালু দৈর্ঘ্যের ভূমিকা পালন করে: একটি মই, র‌্যাম্পের পৃষ্ঠ, রাফটার, তার, তীর্যক বাঁধন, বা সরলরৈখিক পথ। এটি সেক্যান্ট সূত্রের লবে যায়, সেজন্যই প্রতিটি সেক্যান্ট মান 1 এর চেয়ে বড় আসে।"
          },
          {
            "kind": "h3",
            "text": "বিপরীত বাহু কী?"
          },
          {
            "kind": "p",
            "text": "বিপরীত বাহু [[a]] কোণ [[A]] এর ঠিক বিপরীতে থাকে এবং এর শীর্ষবিন্দু কখনো স্পর্শ করে না। মূল সেক্যান্ট গণনায় এর কোনো ভূমিকা নেই, সেজন্যই ক্যালকুলেটর এটি কখনো চায় না। দুটি জানা দৈর্ঘ্য প্রকৃত সমকোণী ত্রিভুজ গঠন করে কিনা তা যাচাই করতে পিথাগোরাসের উপপাদ্য ব্যবহার করা হলে এটি প্রাসঙ্গিক হয়, এবং সাইন, ট্যানজেন্ট ও কোসেক্যান্টের ক্ষেত্রে এটি মূল ভূমিকা নেয়, যেখানে বিপরীত বাহু দুটি কার্যকর বাহুর একটি।"
          }
        ],
        "imgAlt": "নিচে-বামে A কোণবিশিষ্ট সমকোণী ত্রিভুজ, সোনালি অতিভুজ c, নীল সংলগ্ন বাহু b, sec(A)=c/b",
        "figcaption": "কোণ A নিচে-বামে অবস্থিত; সেক্যান্টে ব্যবহৃত হয় সোনালি অতিভুজ c ও নীল সংলগ্ন বাহু b, বিপরীত বাহু a নয়।"
      },
      "sec-whatis": {
        "h2": "সেক্যান্ট অনুপাত বোঝা",
        "blocks": [
          {
            "kind": "p",
            "text": "সেক্যান্ট পূর্ণ ঢালু বাহুকে প্রসঙ্গ কোণের পাশের বাহুর সঙ্গে তুলনা করে:"
          },
          {
            "kind": "p",
            "text": "[[[\\sec(A)=\\frac{c}{b}]]]"
          },
          {
            "kind": "p",
            "text": "এখানে [[\\sec(A)]] হলো কোণ [[A]] এর সেক্যান্ট, [[c]] হলো অতিভুজ, এবং [[b]] হলো সংলগ্ন বাহু: অর্থাৎ সংলগ্ন বাহু অতিভুজের মধ্যে কতবার ফিট হয়।"
          },
          {
            "kind": "h3",
            "text": "কোসাইনের বিপরীত রূপে সেক্যান্ট"
          },
          {
            "kind": "p",
            "text": "কোসাইন সংলগ্ন বাহুকে অতিভুজ দিয়ে ভাগ করে, [[\\cos(A)=b/c]]। বিপরীত নিলে ভগ্নাংশটি উল্টে যায়, [[1/\\cos(A)=c/b]], যা ঠিক সেক্যান্ট সূত্র:"
          },
          {
            "kind": "p",
            "text": "[[[\\boxed{\\sec(A)=\\frac{1}{\\cos(A)}=\\frac{c}{b}}]]]"
          },
          {
            "kind": "p",
            "text": "[[\\cos(A)=4/5=0.8]] হলে বিপরীত মান হয় [[\\sec(A)=1/0.8=1.25]]: একই ত্রিভুজ, বিপরীত দিক থেকে বর্ণনা করা। এই পার্থক্য গুরুত্বপূর্ণ, কারণ বিপরীত কোসাইন, যা [[\\cos^{-1}]] লেখা হয়, একটি ভিন্ন ধারণা: এটি কোসাইন মান থেকে কোণ ফিরে পায়, অথচ [[1/\\cos(A)]] হলো কোসাইনের বিপরীত, একটি অনুপাত, কোণ নয়।"
          },
          {
            "kind": "h3",
            "text": "1.25 সেক্যান্ট মানের অর্থ কী?"
          },
          {
            "kind": "p",
            "text": "1.25 সেক্যান্ট মানে অতিভুজ সংলগ্ন বাহুর 1.25 গুণ লম্বা। শতাংশ পার্থক্য হলো [[(1.25-1)\\times100=25]], অর্থাৎ অতিভুজ সংলগ্ন বাহুর চেয়ে 25% বেশি লম্বা। এর অর্থ এই নয় যে কোণটি [[1.25^\\circ]], এবং এর অর্থ এইও নয় যে ত্রিভুজটি কোনো কিছুর 1.25 একক পরিমাপ করে। সেক্যান্ট একটি তুলনা, পরিমাপ নয়।"
          },
          {
            "kind": "h3",
            "text": "সেক্যান্ট কেন 1 এর চেয়ে বড়"
          },
          {
            "kind": "p",
            "text": "একটি বৈধ, অবনমিত নয় এমন সমকোণী ত্রিভুজে অতিভুজ দুটি বাহুর যেকোনোটির চেয়ে লম্বা, তাই [[c \\gt b \\gt 0]]। অতএব অতিভুজকে সংলগ্ন বাহু দিয়ে ভাগ করলে 1 এর চেয়ে বড় অনুপাত পাওয়া যায়:"
          },
          {
            "kind": "p",
            "text": "[[[\\boxed{\\frac{c}{b} \\gt 1}]]]"
          },
          {
            "kind": "p",
            "text": "অবনমিত নয় এমন সমকোণী ত্রিভুজে সাধারণ সূক্ষ্ম প্রসঙ্গ কোণের ক্ষেত্রে ঠিক 1 ফলাফল সম্ভব নয়, কারণ সেজন্য অতিভুজকে সংলগ্ন বাহুর সমান হতে হবে, যা ত্রিভুজটিকে চেপে একটি রেখায় পরিণত করে। 1 মানটি একটি সীমান্ত মান, যা কেবল কোণটি [[0^\\circ]] এর দিকে সংকুচিত হলেই পৌঁছানো যায়।"
          },
          {
            "kind": "h3",
            "text": "সেক্যান্ট কেন কোসাইনের বিপরীত"
          },
          {
            "kind": "p",
            "text": "সম্পর্কটি সরাসরি দুটি সূত্র থেকে আসে। কোসাইন সংলগ্নকে অতিভুজ দিয়ে ভাগ করে, সেক্যান্ট অতিভুজকে সংলগ্ন দিয়ে ভাগ করে:"
          },
          {
            "kind": "p",
            "text": "[[\\cos(A)=\\frac{b}{c}]]"
          },
          {
            "kind": "p",
            "text": "[[\\sec(A)=\\frac{c}{b}]]"
          },
          {
            "kind": "p",
            "text": "দুটোকে গুণ করলে সবকিছু কেটে যায় এবং 1 পাওয়া যায়:"
          },
          {
            "kind": "p",
            "text": "[[[\\cos(A)\\sec(A)=\\frac{b}{c}\\times\\frac{c}{b}=1]]]"
          },
          {
            "kind": "p",
            "text": "এই অভেদ একটি ব্যবহারিক যাচাই টুল: একই বাহুগুলো থেকে কোসাইন নির্ণয় করুন, এর বিপরীত নিন, এবং তা সেক্যান্ট ফলাফলের সঙ্গে হুবহু মিলতেই হবে। অমিল মানে ভগ্নাংশ উল্টে গেছে বা বাহুর নাম ভুল হয়েছে।"
          },
          {
            "kind": "h3",
            "text": "সেক্যান্টের একক কেন নেই"
          },
          {
            "kind": "p",
            "text": "সেক্যান্ট একটি দৈর্ঘ্যকে অন্য দৈর্ঘ্য দিয়ে ভাগ করে, তাই এককগুলো কেটে যায়। উদাহরণ:"
          },
          {
            "kind": "p",
            "text": "[[[\\frac{5\\,\\text{m}}{4\\,\\text{m}}=1.25]]]"
          },
          {
            "kind": "p",
            "text": "মিটার উধাও হয়ে যায়, থেকে যায় একটি খাঁটি সংখ্যা। 500 cm ও 400 cm দিয়েও একই অনুপাত আসে, বা যেকোনো মিলিত একক জোড়া দিয়ে, সেজন্যই একক মেশানো, যেমন মিটারে অতিভুজ আর সেন্টিমিটারে সংলগ্ন বাহু, শুরুতেই গণনাটি নষ্ট করে দেয়।"
          },
          {
            "kind": "h3",
            "text": "সেক্যান্ট বনাম কোসেক্যান্ট"
          },
          {
            "kind": "p",
            "text": "সেক্যান্ট ও কোসেক্যান্ট দুটোই বিপরীত অনুপাত যাদের লবে অতিভুজ থাকে, কিন্তু হরে ভিন্ন ভিন্ন বাহু ব্যবহৃত হয়:"
          },
          {
            "kind": "p",
            "text": "[[\\sec(A)=\\frac{c}{b}]]"
          },
          {
            "kind": "p",
            "text": "[[\\csc(A)=\\frac{c}{a}]]"
          },
          {
            "kind": "p",
            "text": "সেক্যান্ট অতিভুজকে সংলগ্ন বাহুর সঙ্গে জোড়া দেয়; কোসেক্যান্ট অতিভুজকে বিপরীত বাহুর সঙ্গে জোড়া দেয়। এগুলো পরস্পর বদলানো যায় না, এবং ভুলটি বেছে নিলে ত্রিভুজ সম্পর্কে ভিন্ন প্রশ্নের উত্তর পাওয়া যায়।"
          }
        ],
        "imgAlt": "তিন ধাপ: 3-4-5 ত্রিভুজ, কোসাইন cos(A)=4/5=0.8, সেক্যান্ট sec(A)=5/4=1.25, বিপরীত সম্পর্ক",
        "figcaption": "তিনটি ধাপ: 3-4-5 ত্রিভুজটি চিহ্নিত করুন, কোসাইন নির্ণয় করুন cos(A) = 4/5, তারপর ভগ্নাংশটি উল্টে sec(A) = 5/4 পান।"
      },
      "sec-formula": {
        "h2": "সেক্যান্ট সূত্র যেভাবে কাজ করে",
        "blocks": [
          {
            "kind": "p",
            "text": "সংজ্ঞা শুরু হয় কথায়, তারপর যায় প্রতীকে। সেক্যান্ট হলো অতিভুজ ভাগ সংলগ্ন বাহু:"
          },
          {
            "kind": "p",
            "text": "[[[\\sec(A)=\\frac{\\text{Hypotenuse}}{\\text{Adjacent}}]]]"
          },
          {
            "kind": "p",
            "text": "আদর্শ স্বরলিপিতে এটি হয়:"
          },
          {
            "kind": "p",
            "text": "[[[\\boxed{\\sec(A)=\\frac{c}{b}}]]]"
          },
          {
            "kind": "p",
            "text": "অতিভুজ লবে থাকে কারণ সেক্যান্ট জিজ্ঞেস করে ঢালু বাহুটি তার অনুভূমিক ভিত্তির তুলনায় কতটা লম্বা, আর সংলগ্ন বাহু হরে থাকে কারণ এটিই সেই প্রসঙ্গ দৈর্ঘ্য যার সঙ্গে তুলনা করা হয়।"
          },
          {
            "kind": "h3",
            "text": "সম্পূর্ণ সমাধানসহ উদাহরণ: একটি 3-4-5 সমকোণী ত্রিভুজ"
          },
          {
            "kind": "p",
            "text": "সংলগ্ন বাহু [[b=4\\,\\text{cm}]], বিপরীত বাহু [[a=3\\,\\text{cm}]] ও অতিভুজ [[c=5\\,\\text{cm}]] দেওয়া থাকলে ধাপে ধাপে সূত্রটি প্রয়োগ করুন।"
          },
          {
            "kind": "p",
            "text": "<strong>ধাপ ১: সূত্রটি লিখুন।</strong> [[\\sec(A)=c/b]]।"
          },
          {
            "kind": "p",
            "text": "<strong>ধাপ ২: জানা মানগুলো বসান।</strong> [[\\sec(A)=5/4]]।"
          },
          {
            "kind": "p",
            "text": "<strong>ধাপ ৩: ভাগ করুন।</strong> [[\\boxed{\\sec(A)=1.25}]]।"
          },
          {
            "kind": "p",
            "text": "<strong>ধাপ ৪: ফলাফলের ব্যাখ্যা দিন।</strong> অতিভুজ সংলগ্ন বাহুর 1.25 গুণ, অর্থাৎ এটি 25% বেশি লম্বা। 4 m অনুভূমিক দূরত্ব জুড়ে থাকা 5 cm মই এভাবেই আচরণ করে; জ্যামিতি এককের পরোয়া করে না, কেবল অনুপাতের।"
          },
          {
            "kind": "p",
            "text": "<strong>ধাপ ৫: কোসাইন দিয়ে যাচাই করুন।</strong> [[\\cos(A)=4/5=0.8]], এবং [[1/0.8=1.25]]। বিপরীত যাচাই সেক্যান্ট ফলাফল নিশ্চিত করে, কারণ কোসাইন ও সেক্যান্ট পরস্পরের ঠিক বিপরীত।"
          },
          {
            "kind": "p",
            "text": "<strong>ধাপ ৬: ত্রিভুজটি যাচাই করুন।</strong> [[3^2+4^2=5^2]], অর্থাৎ [[9+16=25]]। বাহুর দৈর্ঘ্যগুলো পিথাগোরাসের উপপাদ্য মেনে চলে, তাই এগুলো প্রকৃত সমকোণী ত্রিভুজ গঠন করে এবং সেক্যান্ট মানটি নির্ভরযোগ্য।"
          }
        ]
      },
      "sec-howto": {
        "h2": "সেক্যান্ট অনুপাত ক্যালকুলেটর যেভাবে ব্যবহার করবেন",
        "blocks": [
          {
            "kind": "p",
            "text": "উপরের ক্যালকুলেটর দুটি ইনপুট নেয়, অতিভুজ [[c]] ও সংলগ্ন বাহু [[b]], এবং [[\\sec(A)]] ফেরত দেয়। এই ধাপগুলো ক্রমানুসারে অনুসরণ করুন।"
          }
        ],
        "steps": [
          "<strong>প্রসঙ্গ কোণ [[A]] চিহ্নিত করুন।</strong> অনুপাতের প্রতিটি বাহুর নাম এই কোণের সাপেক্ষে সংজ্ঞায়িত, তাই বাহুর দৈর্ঘ্য ধরার আগে এটি বেছে নিন।",
          "<strong>অতিভুজ [[c]] খুঁজুন।</strong> এটি সমকোণের বিপরীতে এবং ত্রিভুজের সবচেয়ে লম্বা বাহু; চিত্রে এটি ঢালু বাহু।",
          "<strong>সংলগ্ন বাহু [[b]] খুঁজুন।</strong> এটি কোণ [[A]] কে স্পর্শ করে এবং অতিভুজ নয়; এটি দুটি লম্ব বাহুর একটি।",
          "<strong>দুটি বাহুর দৈর্ঘ্য সংগ্রহ বা পরিমাপ করুন।</strong> একই যন্ত্র ও একই এককে পরিমাপ করুন, অথবা এগোনোর আগে একটি পরিমাপ রূপান্তর করুন।",
          "<strong>প্রথম ইনপুট ঘরে অতিভুজ লিখুন।</strong> এটি ভগ্নাংশের লব, তাই এখানে ভুল হলে পুরো উত্তর সরে যায়।",
          "<strong>দ্বিতীয় ইনপুট ঘরে সংলগ্ন বাহু লিখুন।</strong> এটি হর; এটি কোণ [[A]] এর পাশের বাহু হতে হবে, বিপরীতের বাহু নয়।",
          "<strong>উপলব্ধ একক নির্বাচক দিয়ে সামঞ্জস্যপূর্ণ পরিমাপ একক বেছে নিন।</strong> দুটি ঘরেই একই একক, বা রূপান্তরিত সমতুল্য ব্যবহার করতে হবে, নইলে অনুপাত ভুল হবে।",
          "<strong>নিশ্চিত করুন দুটি পরিমাপই ধনাত্মক।</strong> শূন্য বা ঋণাত্মক দৈর্ঘ্যের ত্রিভুজে কোনো অর্থ নেই এবং এটি তথ্য এন্ট্রি ভুলের সংকেত।",
          "<strong>যাচাই করুন অতিভুজ সংলগ্ন বাহুর চেয়ে লম্বা।</strong> না হলে হয় বাহুর নাম ভুল, নয়তো সংখ্যাগুলো দিয়ে সমকোণী ত্রিভুজ গঠন সম্ভব নয়।",
          "<strong>Calculate sec(A) ক্লিক করুন।</strong> টুলটি [[c/b]] ভাগটি সম্পন্ন করে অনুপাত দেখায়।",
          "<strong>প্রাপ্ত সেক্যান্ট অনুপাত পড়ুন।</strong> এটি মাত্রাহীন দশমিক, সাধারণত চার দশমিক স্থানসহ, পরবর্তী গণনায় ব্যবহারের জন্য প্রস্তুত।",
          "<strong>নিশ্চিত করুন ফলাফল 1 এর চেয়ে বড়।</strong> সূক্ষ্ম প্রসঙ্গ কোণবিশিষ্ট বৈধ, অবনমিত নয় এমন সমকোণী ত্রিভুজের ক্ষেত্রে [[\\sec(A) \\gt 1]]; 1 বা তার কম মান মানে আগে কোথাও ভুল হয়েছে।",
          "<strong>ইনপুট মুছে নতুন গণনা শুরু করতে Reset ব্যবহার করুন।</strong> ঘরগুলো ও ফলাফল প্রাথমিক অবস্থায় ফিরে আসে।"
        ],
        "closingParagraphs": [
          "ক্যালকুলেটরের বিপরীত বাহু বা কোণ ইনপুট দরকার নেই, কারণ মৌলিক সেক্যান্ট অনুপাত দুটি দৈর্ঘ্য দিয়েই পুরোপুরি নির্ধারিত হয়। এটি কোণ বা হারানো বাহুও ফিরিয়ে দেয় না; সেগুলোর জন্য এই গাইডের পরের অংশে পুনর্বিন্যাসিত সূত্রগুলো হাতে করার পথ দেখায়।"
        ]
      },
      "sec-examples": {
        "h2": "সেক্যান্ট নির্ণয়ের ধাপে ধাপে উদাহরণ",
        "blocks": [
          {
            "kind": "p",
            "text": "এই চারটি উদাহরণে ধ্রুপদী ত্রিভুজ ব্যবহার করা হয়েছে, যাদের সেক্যান্ট মান মুখস্থ রাখা দরকার, কারণ ত্রিকোণমিতিতে এগুলো বারবার ফিরে আসে।"
          },
          {
            "kind": "h3",
            "text": "উদাহরণ ১: একটি 3-4-5 সমকোণী ত্রিভুজ"
          },
          {
            "kind": "p",
            "text": "দেওয়া আছে [[b=4\\,\\text{cm}]], [[a=3\\,\\text{cm}]] ও [[c=5\\,\\text{cm}]]:"
          },
          {
            "kind": "p",
            "text": "[[\\sec(A)=\\frac{5}{4}]]"
          },
          {
            "kind": "p",
            "text": "[[\\boxed{\\sec(A)=1.25}]]"
          },
          {
            "kind": "p",
            "text": "অতিভুজ সংলগ্ন বাহুর চেয়ে 25% বেশি লম্বা। পাঠ্যবইয়ে এটিই সবচেয়ে প্রচলিত সেক্যান্ট উদাহরণ, এবং 1.25 ফলাফলটি নির্ভুল।"
          },
          {
            "kind": "h3",
            "text": "উদাহরণ ২: একটি 5-12-13 সমকোণী ত্রিভুজ"
          },
          {
            "kind": "p",
            "text": "সংলগ্ন বাহু [[b=12\\,\\text{m}]], বিপরীত বাহু [[a=5\\,\\text{m}]] ও অতিভুজ [[c=13\\,\\text{m}]] দেওয়া আছে:"
          },
          {
            "kind": "p",
            "text": "[[\\sec(A)=\\frac{13}{12}]]"
          },
          {
            "kind": "p",
            "text": "[[\\boxed{\\sec(A)\\approx1.0833}]]"
          },
          {
            "kind": "p",
            "text": "অতিভুজ সংলগ্ন বাহুর চেয়ে প্রায় 8.33% বেশি লম্বা। নির্মাণ সমস্যায় এই ত্রিভুজ দেখা যায় কারণ 13 একটি মৃদু ছাদের ঢালের কাছাকাছি।"
          },
          {
            "kind": "h3",
            "text": "উদাহরণ ৩: একটি 45-45-90 ত্রিভুজ"
          },
          {
            "kind": "p",
            "text": "সংলগ্ন বাহু [[b=1\\,\\text{cm}]], বিপরীত বাহু [[a=1\\,\\text{cm}]] ও অতিভুজ [[c=\\sqrt{2}\\,\\text{cm}]] দেওয়া আছে:"
          },
          {
            "kind": "p",
            "text": "[[\\sec(45^\\circ)=\\frac{\\sqrt{2}}{1}]]"
          },
          {
            "kind": "p",
            "text": "[[\\boxed{\\sec(45^\\circ)=\\sqrt{2}\\approx1.4142}]]"
          },
          {
            "kind": "p",
            "text": "অতিভুজ যেকোনো বাহুর প্রায় 1.4142 গুণ। 45 ডিগ্রিতে দুটি বাহু সমান, তাই এখানে সেক্যান্ট কোসেক্যান্টের সমান, দুটোই [[\\sqrt{2}]]।"
          },
          {
            "kind": "h3",
            "text": "উদাহরণ ৪: একটি 30-60-90 ত্রিভুজ"
          },
          {
            "kind": "p",
            "text": "প্রসঙ্গ কোণ [[A=30^\\circ]] এর জন্য সংলগ্ন বাহু [[b=\\sqrt{3}\\,\\text{cm}]], বিপরীত বাহু [[a=1\\,\\text{cm}]] ও অতিভুজ [[c=2\\,\\text{cm}]] ব্যবহার করুন:"
          },
          {
            "kind": "p",
            "text": "[[\\sec(30^\\circ)=\\frac{2}{\\sqrt{3}}]]"
          },
          {
            "kind": "p",
            "text": "[[\\boxed{\\sec(30^\\circ)\\approx1.1547}]]"
          },
          {
            "kind": "p",
            "text": "অতিভুজ সংলগ্ন বাহুর চেয়ে প্রায় 15.47% বেশি লম্বা। লক্ষ্য করুন, বাহু অদলবদল করে 60 ডিগ্রিতেও একই 2:1 অতিভুজ অনুপাত দেখা যায়, যেখানে সেক্যান্ট হয় 2।"
          }
        ]
      },
      "sec-applications": {
        "h2": "সেক্যান্ট অনুপাতের বাস্তব জীবনের উদাহরণ",
        "blocks": [
          {
            "kind": "p",
            "text": "ঢালু দৈর্ঘ্যকে তার অনুভূমিক প্রক্ষেপের সঙ্গে তুলনা করতে হয় এমন প্রতিটি ক্ষেত্রে সেক্যান্ট তার যোগ্যতা প্রমাণ করে। প্রতিটি উদাহরণে সমকোণী ত্রিভুজটি বাস্তব পরিস্থিতির একটি সরলীকৃত জ্যামিতিক মডেল, এবং উল্লিখিত অনুমানগুলো এই সরলীকরণকে সৎ রাখে।"
          },
          {
            "kind": "h3",
            "text": "উদাহরণ ৫: মইয়ের সেক্যান্ট অনুপাত নির্ণয়"
          },
          {
            "kind": "p",
            "text": "একটি মই 5 m লম্বা, এবং এর গোড়া খাড়া দেয়াল থেকে 4 m দূরে। কোণ [[A]] মই ও সমতল ভূমির মাঝে অবস্থিত। অতিভুজ হলো মই নিজেই, [[c=5\\,\\text{m}]], এবং সংলগ্ন বাহু হলো অনুভূমিক ভূমি দূরত্ব, [[b=4\\,\\text{m}]]:"
          },
          {
            "kind": "p",
            "text": "[[\\sec(A)=\\frac{5}{4}]]"
          },
          {
            "kind": "p",
            "text": "[[\\boxed{\\sec(A)=1.25}]]"
          },
          {
            "kind": "p",
            "text": "মইটি তার অনুভূমিক ভূমি প্রক্ষেপের চেয়ে 25% বেশি লম্বা। এই অনুপাত প্রমাণ করে না মইটি নিরাপদে বসানো হয়েছে কিনা; মইয়ের নিরাপত্তা নির্ভর করে কার্যকর কোণ ও ভিত্তির ওপর, কেবল সেক্যান্টের ওপর নয়।"
          },
          {
            "kind": "h3",
            "text": "উদাহরণ ৬: ছাদের রাফটারের সেক্যান্ট অনুপাত নির্ণয়"
          },
          {
            "kind": "p",
            "text": "একটি ছাদের রাফটারের ঢালু দৈর্ঘ্য 6.5 m এবং অনুভূমিক প্রস্থ 6 m। রাফটারটি অতিভুজ, [[c=6.5\\,\\text{m}]], এবং অনুভূমিক প্রস্থ সংলগ্ন বাহু, [[b=6\\,\\text{m}]]:"
          },
          {
            "kind": "p",
            "text": "[[\\sec(A)=\\frac{6.5}{6}]]"
          },
          {
            "kind": "p",
            "text": "[[\\boxed{\\sec(A)\\approx1.0833}]]"
          },
          {
            "kind": "p",
            "text": "রাফটারটি তার অনুভূমিক প্রস্থের চেয়ে প্রায় 8.33% বেশি লম্বা। ছাদের মিস্ত্রিরা সবসময় এই সম্পর্ক উল্টোভাবে ব্যবহার করে: নকশায় প্রস্থ মাপুন, সেক্যান্ট দিয়ে গুণ করুন, রাফটারের মাল অর্ডার করুন। এই অনুপাত সম্পূর্ণ ছাদ নকশা বা কাঠামোগত মূল্যায়ন নয়।"
          },
          {
            "kind": "h3",
            "text": "উদাহরণ ৭: র‌্যাম্পের সেক্যান্ট অনুপাত মূল্যায়ন"
          },
          {
            "kind": "p",
            "text": "একটি সরলীকৃত র‌্যাম্পের ঢালু দৈর্ঘ্য 9.5 m এবং অনুভূমিক প্রস্থ 9 m। ঢালু পৃষ্ঠ অতিভুজ, [[c=9.5\\,\\text{m}]], এবং অনুভূমিক প্রস্থ সংলগ্ন বাহু, [[b=9\\,\\text{m}]]:"
          },
          {
            "kind": "p",
            "text": "[[\\sec(A)=\\frac{9.5}{9}]]"
          },
          {
            "kind": "p",
            "text": "[[\\boxed{\\sec(A)\\approx1.0556}]]"
          },
          {
            "kind": "p",
            "text": "র‌্যাম্পের ঢালু দৈর্ঘ্য তার অনুভূমিক প্রক্ষেপের চেয়ে প্রায় 5.56% বেশি লম্বা। ছোট সেক্যান্ট মৃদু ঢালের প্রতিফলন, কিন্তু এই অনুপাত একা প্রবেশযোগ্যতা বা ভবন বিধি মেনে চলা প্রমাণ করে না।"
          },
          {
            "kind": "h3",
            "text": "উদাহরণ ৮: একটি জরিপ পরিমাপ"
          },
          {
            "kind": "p",
            "text": "একটি সরলীকৃত জরিপ ত্রিভুজে সরলরৈখিক দূরত্ব 50 m এবং অনুভূমিক ব্যবধান 40 m। সরলরৈখিক দূরত্ব অতিভুজ, [[c=50\\,\\text{m}]], এবং অনুভূমিক ব্যবধান সংলগ্ন বাহু, [[b=40\\,\\text{m}]]:"
          },
          {
            "kind": "p",
            "text": "[[\\sec(A)=\\frac{50}{40}]]"
          },
          {
            "kind": "p",
            "text": "[[\\boxed{\\sec(A)=1.25}]]"
          },
          {
            "kind": "p",
            "text": "সরলরৈখিক দূরত্ব অনুভূমিক ব্যবধানের চেয়ে 25% বেশি লম্বা। জরিপকারীরা নিয়মিত এই ধরনের অনুভূমিক হ্রাস প্রয়োগ করে; প্রকৃত মাঠকাজে সরল মডেলের বাইরে অতিরিক্ত সংশোধন ও পরিমাপ পদ্ধতির প্রয়োজন হতে পারে।"
          },
          {
            "kind": "h3",
            "text": "উদাহরণ ৯: খুঁটিকে ধরে রাখা একটি গাই তার"
          },
          {
            "kind": "p",
            "text": "একটি গাই তার 13 m লম্বা, এবং এর ভূমি নোঙর খুঁটি থেকে অনুভূমিকভাবে 12 m দূরে। তারটি অতিভুজ, [[c=13\\,\\text{m}]], এবং খুঁটি থেকে নোঙর পর্যন্ত অনুভূমিক দূরত্ব সংলগ্ন বাহু, [[b=12\\,\\text{m}]]:"
          },
          {
            "kind": "p",
            "text": "[[\\sec(A)=\\frac{13}{12}]]"
          },
          {
            "kind": "p",
            "text": "[[\\boxed{\\sec(A)\\approx1.0833}]]"
          },
          {
            "kind": "p",
            "text": "তারটি তার অনুভূমিক প্রক্ষেপের চেয়ে প্রায় 8.33% বেশি লম্বা। এটি বলে দেয় কতটা তার কাটতে হবে, কতটা ভার বহন করবে তা নয়; তারের টান, নোঙরের শক্তি ও কাঠামোগত নিরাপত্তার জন্য আলাদা বিশ্লেষণ দরকার।"
          },
          {
            "kind": "h3",
            "text": "উদাহরণ ১০: সিঁড়ির স্ট্রিংগারের সেক্যান্ট অনুপাত নির্ণয়"
          },
          {
            "kind": "p",
            "text": "একটি সরলীকৃত সিঁড়ির স্ট্রিংগার 5 m লম্বা এবং 4 m অনুভূমিক প্রস্থ জুড়ে বিস্তৃত। স্ট্রিংগারটি অতিভুজ, [[c=5\\,\\text{m}]], এবং অনুভূমিক প্রস্থ সংলগ্ন বাহু, [[b=4\\,\\text{m}]]:"
          },
          {
            "kind": "p",
            "text": "[[\\sec(A)=\\frac{5}{4}]]"
          },
          {
            "kind": "p",
            "text": "[[\\boxed{\\sec(A)=1.25}]]"
          },
          {
            "kind": "p",
            "text": "তীর্যক স্ট্রিংগার অনুভূমিক প্রস্থের চেয়ে 25% বেশি লম্বা। কাঠমিস্ত্রিরা নকশার মাপ থেকে স্ট্রিংগার কাটতে উল্টো গণনা ব্যবহার করে। এই অনুপাত সিঁড়ির মাপ বা ভবন বিধি মেনে চলা যাচাই করে না।"
          },
          {
            "kind": "h3",
            "text": "উদাহরণ ১১: ক্রেনের বুমের অনুভূমিক প্রক্ষেপ বোঝা"
          },
          {
            "kind": "p",
            "text": "একটি সরলীকৃত ক্রেনের বুমের দৈর্ঘ্য 10 m এবং অনুভূমিক প্রক্ষেপ 6 m। বুমটি অতিভুজ, [[c=10\\,\\text{m}]], এবং অনুভূমিক প্রক্ষেপ সংলগ্ন বাহু, [[b=6\\,\\text{m}]]:"
          },
          {
            "kind": "p",
            "text": "[[\\sec(A)=\\frac{10}{6}]]"
          },
          {
            "kind": "p",
            "text": "[[\\boxed{\\sec(A)\\approx1.6667}]]"
          },
          {
            "kind": "p",
            "text": "বুমটি তার অনুভূমিক প্রক্ষেপের চেয়ে প্রায় 66.67% বেশি লম্বা। খাড়া সেক্যান্ট উচ্চ কার্যকর কোণের প্রতিফলন। এই অনুপাত ক্রেনের ধারণক্ষমতা বা পরিচালন নিরাপত্তা প্রমাণ করে না।"
          },
          {
            "kind": "h3",
            "text": "উদাহরণ ১২: বিমানের একটি সরল ফ্লাইট অংশ"
          },
          {
            "kind": "p",
            "text": "একটি সরলীকৃত সরল ফ্লাইট অংশের জন্য পথের দৈর্ঘ্য 5 km এবং অনুভূমিক সরণ 4 km। ফ্লাইট পথ অতিভুজ, [[c=5\\,\\text{km}]], এবং অনুভূমিক সরণ সংলগ্ন বাহু, [[b=4\\,\\text{km}]]:"
          },
          {
            "kind": "p",
            "text": "[[\\sec(A)=\\frac{5}{4}]]"
          },
          {
            "kind": "p",
            "text": "[[\\boxed{\\sec(A)=1.25}]]"
          },
          {
            "kind": "p",
            "text": "পথের দৈর্ঘ্য অনুভূমিক সরণের চেয়ে 25% বেশি লম্বা। এটি একটি আদর্শায়িত জ্যামিতিক উদাহরণ, সম্পূর্ণ ফ্লাইট নেভিগেশন গণনা নয়; প্রকৃত ফ্লাইট পরিকল্পনায় বাতাস, উচ্চতা পরিবর্তন ও আকাশপথ রাউটিং যোগ হয়।"
          },
          {
            "kind": "h3",
            "text": "উদাহরণ ১৩: একটি তীর্যক যান্ত্রিক বাঁধন"
          },
          {
            "kind": "p",
            "text": "একটি তীর্যক বাঁধনের দৈর্ঘ্য 2 m এবং অনুভূমিক প্রক্ষেপ 1.2 m। বাঁধনটি অতিভুজ, [[c=2\\,\\text{m}]], এবং অনুভূমিক প্রক্ষেপ সংলগ্ন বাহু, [[b=1.2\\,\\text{m}]]:"
          },
          {
            "kind": "p",
            "text": "[[\\sec(A)=\\frac{2}{1.2}]]"
          },
          {
            "kind": "p",
            "text": "[[\\boxed{\\sec(A)\\approx1.6667}]]"
          },
          {
            "kind": "p",
            "text": "বাঁধনটি তার অনুভূমিক প্রক্ষেপের চেয়ে প্রায় 66.67% বেশি লম্বা। এই অনুপাত স্থাপনের জ্যামিতি বর্ণনা করে; এটি বাঁধনের শক্তি বা উপযুক্ততা নির্ধারণ করে না।"
          },
          {
            "kind": "h3",
            "text": "উদাহরণ ১৪: হাইকিং রুটের সেক্যান্ট অনুপাত নির্ণয়"
          },
          {
            "kind": "p",
            "text": "একটি সরলীকৃত সরল হাইকিং অংশের পথের দৈর্ঘ্য 100 m এবং অনুভূমিক সরণ 80 m। পথটি অতিভুজ, [[c=100\\,\\text{m}]], এবং অনুভূমিক সরণ সংলগ্ন বাহু, [[b=80\\,\\text{m}]]:"
          },
          {
            "kind": "p",
            "text": "[[\\sec(A)=\\frac{100}{80}]]"
          },
          {
            "kind": "p",
            "text": "[[\\boxed{\\sec(A)=1.25}]]"
          },
          {
            "kind": "p",
            "text": "সরল পথটি তার অনুভূমিক সরণের চেয়ে 25% বেশি লম্বা। প্রকৃত হাইকিং পথে বাঁক ও পরিবর্তনশীল ঢাল থাকে, তাই একে একটি সরল অংশ হিসেবে ধরুন, পুরো রুট হিসেবে নয়।"
          },
          {
            "kind": "h3",
            "text": "উদাহরণ ১৫: একটি ছাউনির অবলম্বন"
          },
          {
            "kind": "p",
            "text": "একটি ছাউনির অবলম্বনের দৈর্ঘ্য 3 m এবং অনুভূমিক প্রক্ষেপ 2.4 m। অবলম্বনটি অতিভুজ, [[c=3\\,\\text{m}]], এবং অনুভূমিক প্রক্ষেপ সংলগ্ন বাহু, [[b=2.4\\,\\text{m}]]:"
          },
          {
            "kind": "p",
            "text": "[[\\sec(A)=\\frac{3}{2.4}]]"
          },
          {
            "kind": "p",
            "text": "[[\\boxed{\\sec(A)=1.25}]]"
          },
          {
            "kind": "p",
            "text": "অবলম্বনটি তার অনুভূমিক প্রক্ষেপের চেয়ে 25% বেশি লম্বা। এই গণনা কাঠামোগত উপযুক্ততা প্রমাণ করে না; আটকানোর শক্তি ও বাতাসের চাপের জন্য আলাদা যাচাই দরকার।"
          },
          {
            "kind": "h3",
            "text": "উদাহরণ ১৬: দুটি বিন্দুর মধ্যে একটি তার"
          },
          {
            "kind": "p",
            "text": "দুটি বিন্দুর মধ্যে একটি সরল তার মোট 25 m দৈর্ঘ্য জুড়ে বিস্তৃত, অনুভূমিক ব্যবধান 24 m। তারটি অতিভুজ, [[c=25\\,\\text{m}]], এবং অনুভূমিক ব্যবধান সংলগ্ন বাহু, [[b=24\\,\\text{m}]]:"
          },
          {
            "kind": "p",
            "text": "[[\\sec(A)=\\frac{25}{24}]]"
          },
          {
            "kind": "p",
            "text": "[[\\boxed{\\sec(A)\\approx1.0417}]]"
          },
          {
            "kind": "p",
            "text": "তারটি অনুভূমিক ব্যবধানের চেয়ে প্রায় 4.17% বেশি লম্বা। সরলীকৃত মডেলটি একটি সরল তার ও সমকোণী ত্রিভুজ সম্পর্ক ধরে নেয়; প্রকৃত তার ঝুলে থাকে, যা সেক্যান্ট মডেলের বাইরে দৈর্ঘ্য যোগ করে।"
          },
          {
            "kind": "p",
            "text": "সেক্যান্ট এককসহ ভৌত রাশি নয়, বরং একটি গাণিতিক অনুপাত। এর ব্যবহারিক মূল্য আসে ঢালু দৈর্ঘ্যকে তার অনুভূমিক প্রক্ষেপের সঙ্গে তুলনা করা, কোণ জানা থাকলে দৈর্ঘ্য ফিরে পাওয়া, ত্রিভুজের জ্যামিতি যাচাই করা, এবং বিশেষভাবে সেক্যান্ট প্রয়োজন এমন সূত্র ব্যবহার করা থেকে। এটি একা কখনো কাঠামোগত নিরাপত্তা, ভারবহন ক্ষমতা, প্রবেশযোগ্যতা বা প্রকৌশল বিধি মেনে চলা সনদ দেয় না।"
          }
        ],
        "tables": [
          {
            "headers": [
              "পরিস্থিতি",
              "c",
              "b",
              "সূত্র",
              "অনুপাত",
              "কতটা বেশি",
              "অর্থ"
            ],
            "rows": [
              [
                "মই",
                "5 m",
                "4 m",
                "5/4",
                "1.25",
                "25%",
                "মই তার ভূমি দূরত্বের চেয়ে এক চতুর্থাংশ বেশি লম্বা"
              ],
              [
                "ছাদের রাফটার",
                "6.5 m",
                "6 m",
                "6.5/6",
                "1.0833",
                "8.33%",
                "রাফটার অনুভূমিক প্রস্থের চেয়ে সামান্য বেশি লম্বা"
              ],
              [
                "র‌্যাম্প",
                "9.5 m",
                "9 m",
                "9.5/9",
                "1.0556",
                "5.56%",
                "মৃদু ঢাল, প্রস্থের চেয়ে সামান্যই বেশি লম্বা"
              ],
              [
                "জরিপ",
                "50 m",
                "40 m",
                "50/40",
                "1.25",
                "25%",
                "সরলরৈখিক দূরত্ব অনুভূমিক দূরত্বকে ছাড়িয়ে গেছে"
              ],
              [
                "গাই তার",
                "13 m",
                "12 m",
                "13/12",
                "1.0833",
                "8.33%",
                "ভূমি দূরত্ব থেকে তারের কাটার দৈর্ঘ্য"
              ],
              [
                "সিঁড়ির স্ট্রিংগার",
                "5 m",
                "4 m",
                "5/4",
                "1.25",
                "25%",
                "অনুভূমিক প্রস্থের বিপরীতে তীর্যক স্ট্রিংগার"
              ],
              [
                "ক্রেনের বুম",
                "10 m",
                "6 m",
                "10/6",
                "1.6667",
                "66.67%",
                "খাড়া বুম তার প্রক্ষেপের চেয়ে অনেক বেশি লম্বা"
              ],
              [
                "ফ্লাইট অংশ",
                "5 km",
                "4 km",
                "5/4",
                "1.25",
                "25%",
                "অনুভূমিক সরণের বিপরীতে আদর্শায়িত পথ"
              ],
              [
                "তীর্যক বাঁধন",
                "2 m",
                "1.2 m",
                "2/1.2",
                "1.6667",
                "66.67%",
                "অনুভূমিক প্রক্ষেপের তুলনায় বাঁধনের দৈর্ঘ্য"
              ],
              [
                "হাইকিং রুট",
                "100 m",
                "80 m",
                "100/80",
                "1.25",
                "25%",
                "অনুভূমিক মানচিত্র দূরত্বের বিপরীতে সরল অংশ"
              ],
              [
                "ছাউনির অবলম্বন",
                "3 m",
                "2.4 m",
                "3/2.4",
                "1.25",
                "25%",
                "অনুভূমিক বিস্তারের বিপরীতে অবলম্বনের দৈর্ঘ্য"
              ],
              [
                "তারের বিস্তার",
                "25 m",
                "24 m",
                "25/24",
                "1.0417",
                "4.17%",
                "প্রায় অনুভূমিক তার, অতিরিক্ত দৈর্ঘ্য প্রায় নেই"
              ]
            ]
          }
        ],
        "imgAlt": "চার প্যানেল: মইয়ের অনুপাত 1.25, র‌্যাম্প 1.0556, জরিপ 1.25, ক্রেন বুম 1.6667, প্রতিটিতে নামযুক্ত সমকোণী ত্রিভুজ",
        "figcaption": "চারটি ব্যবহারিক গণনা: মই, র‌্যাম্প, জরিপ ও ক্রেন বুম, প্রতিটিতে ত্রিভুজ, সূত্র ও অনুপাতসহ।"
      },
      "sec-angle": {
        "h2": "সেক্যান্ট ও কোণের মাপের সম্পর্ক বোঝা",
        "blocks": [
          {
            "kind": "p",
            "text": "প্রসঙ্গ কোণ বাড়ার সঙ্গে সঙ্গে সেক্যান্ট বাড়ে। জ্যামিতি ব্যাখ্যা করে কেন: কোণ [[A]] ছোট হলে সংলগ্ন বাহু প্রায় অতিভুজের সমান লম্বা হয়, তাই অনুপাতটি 1 এর ঠিক ওপরে থাকে। কোণ প্রশস্ত হওয়ার সঙ্গে সঙ্গে সংলগ্ন বাহু অতিভুজের ক্ষুদ্রতর অংশ হয়, এবং অনুপাতটি বাড়ে। [[45^\\circ]] তে সেক্যান্ট [[\\sqrt{2}]], প্রায় 1.4142; [[60^\\circ]] তে এটি ঠিক 2, কারণ অতিভুজ সংলগ্ন বাহুর দ্বিগুণ; এবং কোণটি [[90^\\circ]] এর দিকে গেলে সংলগ্ন বাহু শূন্যের দিকে সংকুচিত হয় এবং সেক্যান্ট সীমাহীনভাবে বাড়ে।"
          }
        ],
        "tables": [
          {
            "headers": [
              "কোণ [[A]]",
              "সংলগ্ন বাহু [[b]]",
              "অতিভুজ [[c]]",
              "সেক্যান্ট অনুপাত"
            ],
            "rows": [
              [
                "[[30^\\circ]]",
                "[[\\sqrt{3}]]",
                "2",
                "প্রায় 1.1547"
              ],
              [
                "[[45^\\circ]]",
                "1",
                "[[\\sqrt{2}]]",
                "প্রায় 1.4142"
              ],
              [
                "[[60^\\circ]]",
                "1",
                "2",
                "2"
              ],
              [
                "[[75^\\circ]]",
                "1",
                "প্রায় 3.8637",
                "প্রায় 3.8637"
              ]
            ]
          }
        ],
        "closingParagraphs": [
          "ধারাটি একঘেয়ে: কোণের প্রতিটি বৃদ্ধি সেক্যান্ট বাড়ায়, এবং প্রতিটি সূক্ষ্মকোণের জন্য অনুপাত 1 এর ওপরে থাকে। টেবিলের পরিমাপগুলো দৃষ্টান্তমূলক; ত্রিভুজের পরম মাপ নয়, অনুপাতই কোণ নির্ধারণ করে। তাই সেক্যান্ট ত্রিভুজের আকৃতি বর্ণনা করে, এর স্কেল নয়।"
        ],
        "imgAlt": "30, 45, 60 ডিগ্রিতে তিনটি ত্রিভুজ, সেক্যান্ট মান 1.1547, 1.4142, 2; কোণ বাড়লে সেক্যান্ট বাড়ে",
        "figcaption": "কোণ A বাড়ার সঙ্গে সঙ্গে সংলগ্ন বাহু অতিভুজের তুলনায় ক্ষুদ্রতর অংশ হয়, তাই sec(A) বাড়ে।"
      },
      "sec-hypotenuse": {
        "h2": "সেক্যান্ট ব্যবহার করে অতিভুজ নির্ণয়",
        "blocks": [
          {
            "kind": "p",
            "text": "সংলগ্ন বাহু ও কোণ জানা থাকলে অতিভুজ নির্ণয়ে সেক্যান্ট সূত্রটি পুনর্বিন্যাস করা যায়। [[\\sec(A)=c/b]] দিয়ে শুরু করুন এবং দুই পাশকে [[b]] দিয়ে গুণ করুন:"
          },
          {
            "kind": "p",
            "text": "[[[\\boxed{c=b\\sec(A)}]]]"
          },
          {
            "kind": "p",
            "text": "অতিভুজ সমান সংলগ্ন বাহু গুণ কোণের সেক্যান্ট। সংলগ্ন বাহু [[b=4\\,\\text{m}]] ও কোণ [[A=60^\\circ]] দেওয়া আছে, এবং জানা আছে [[\\sec(60^\\circ)=2]]:"
          },
          {
            "kind": "p",
            "text": "[[c=4\\times2]]"
          },
          {
            "kind": "p",
            "text": "[[\\boxed{c=8\\,\\text{m}}]]"
          },
          {
            "kind": "p",
            "text": "এই কোণে অতিভুজ সংলগ্ন বাহুর দ্বিগুণ, যা 30-60-90 জ্যামিতির সঙ্গে মেলে: 30 ডিগ্রির বিপরীত বাহু অতিভুজের অর্ধেক। আবার পুনর্বিন্যাস করে সংলগ্ন বাহুও একইভাবে নির্ণয় করা যায়:"
          },
          {
            "kind": "p",
            "text": "[[[\\boxed{b=\\frac{c}{\\sec(A)}}]]]"
          },
          {
            "kind": "p",
            "text": "অতিভুজ [[c=10\\,\\text{m}]] ও [[A=60^\\circ]] হলে: [[b=10/2]], অর্থাৎ [[\\boxed{b=5\\,\\text{m}}]]। এগুলো একই সূত্রের গাণিতিক পুনর্বিন্যাস। এই পৃষ্ঠার ক্যালকুলেটর বাহুর দৈর্ঘ্য থেকে সেক্যান্ট অনুপাত ফেরত দেয়; এটি সরাসরি হারানো বাহু গণনা করে না।"
          }
        ]
      },
      "sec-recover": {
        "h2": "সেক্যান্ট অনুপাত থেকে কোণ নির্ণয়",
        "blocks": [
          {
            "kind": "p",
            "text": "সেক্যান্ট অনুপাত ও কোণ ভিন্ন রাশি: একটি বাহুর মাত্রাহীন তুলনা, অন্যটি ডিগ্রিতে মাপা। সেক্যান্ট অনুপাত জানা থাকলে বিপরীত দিয়ে কোসাইন ফিরে পান:"
          },
          {
            "kind": "p",
            "text": "[[\\cos(A)=\\frac{1}{\\sec(A)}]]"
          },
          {
            "kind": "p",
            "text": "তারপর বিপরীত কোসাইন কোণটি ফেরত দেয়:"
          },
          {
            "kind": "p",
            "text": "[[[\\boxed{A=\\cos^{-1}\\left(\\frac{1}{\\sec(A)}\\right)}]]]"
          },
          {
            "kind": "p",
            "text": "[[\\sec(A)=1.25]] দেওয়া থাকলে প্রথমে কোসাইন নির্ণয় করুন: [[\\cos(A)=1/1.25=0.8]]। তারপর [[A=\\cos^{-1}(0.8)]], যা দেয় [[\\boxed{A\\approx36.87^\\circ}]]। এটি একটি আলাদা কোণ গণনা, সেক্যান্ট অনুপাত ক্যালকুলেটর সরাসরি এটি করে না। উত্তর ডিগ্রিতে প্রত্যাশিত হলে বৈজ্ঞানিক ক্যালকুলেটর ডিগ্রি মোডে সেট করুন; রেডিয়ান মোডে একই ইনপুট প্রায় 0.6435 ফেরত দেয়, ভিন্ন এককে একই কোণ।"
          }
        ]
      },
      "sec-mistakes": {
        "h2": "সেক্যান্ট নির্ণয়ে সাধারণ ভুল",
        "blocks": [
          {
            "kind": "p",
            "text": "বেশিরভাগ সেক্যান্ট ভুল আসে উল্টো ভগ্নাংশ, ভুল নামের বাহু, বা একক ভুল থেকে। ফলাফলে বিশ্বাস করার আগে এই তালিকাটি দেখে নিন।"
          }
        ],
        "steps": [
          "<strong>সূত্রটি উল্টে [[c/b]] এর বদলে [[b/c]] গণনা করা।</strong> এটিই সবচেয়ে প্রচলিত ভুল, এবং এটি সেক্যান্টের বদলে কোসাইন ফেরত দেয়। [[c=5]] ও [[b=4]] হলে ভুল ক্রমে 0.8 পাওয়া যায়; সঠিক ক্রমে 1.25 পাওয়া যায়।",
          "<strong>সেক্যান্টকে কোসাইনের সঙ্গে গুলিয়ে ফেলা।</strong> কোসাইন হলো সংলগ্ন ভাগ অতিভুজ; সেক্যান্ট ঠিক এর উল্টো। উত্তর 1 এর নিচে এলে তা প্রায় নিশ্চিতভাবে কোসাইন, সেক্যান্ট নয়।",
          "<strong>সেক্যান্টকে কোসেক্যান্টের সঙ্গে গুলিয়ে ফেলা।</strong> দুটোরই লবে অতিভুজ থাকে, তাই দেখতে একই রকম। সেক্যান্ট সংলগ্ন বাহু [[b]] দিয়ে ভাগ করে; কোসেক্যান্ট বিপরীত বাহু [[a]] দিয়ে ভাগ করে। সমস্যাটি আসলে কোন বাহু দিয়েছে তা যাচাই করুন।",
          "<strong>সংলগ্ন বাহুর বদলে বিপরীত বাহু ব্যবহার করা।</strong> [[c/a]] দিয়ে ভাগ করলে কোসেক্যান্ট নির্ণয় হয়। [[c=5]] ও [[a=3]] হলে তা দেয় 1.6667, সঠিক কোসেক্যান্ট কিন্তু ভুল সেক্যান্ট।",
          "<strong>লবে অতিভুজ নয় এমন বাহু ব্যবহার করা।</strong> সেক্যান্টের ওপরে সবসময় অতিভুজ থাকে। বাহু ভাগ বাহু হলো ট্যানজেন্ট বা কোট্যানজেন্ট; বাহু ভাগ অতিভুজ হলো সাইন বা কোসাইন।",
          "<strong>সংলগ্ন ও বিপরীত বাহু অদলবদল করা।</strong> প্রসঙ্গ কোণ [[A]] থেকে [[B]] তে বদলালে নামগুলো অদলবদল হয়। [[b]] নির্ধারণের আগে সমস্যাটি কোন কোণের নাম দিয়েছে তা সবসময় নিশ্চিত করুন।",
          "<strong>সেক্যান্টকে ডিগ্রিতে মাপা কোণ মনে করা।</strong> 1.25 ফলাফল একটি অনুপাত, [[1.25^\\circ]] নয়। একে ডিগ্রি মনে করলে পরবর্তী যেকোনো গণনায় অর্থহীন মান ঢুকে যায়।",
          "<strong>অনুপাতটি মিটার বা সেন্টিমিটারসহ রিপোর্ট করা।</strong> ভাগের সময় একক কেটে যায়, তাই \"1.25 m\" ভুল। খালি সংখ্যাটি লিখুন এবং এককগুলো ইনপুট পরিমাপে রাখুন যেখানে সেগুলোর স্থান।",
          "<strong>শূন্য বা ঋণাত্মক বাহুর দৈর্ঘ্য লেখা।</strong> ত্রিভুজের শূন্য বা ঋণাত্মক বাহু থাকতে পারে না, তাই এই ইনপুটগুলো তথ্য এন্ট্রি ভুল বা হারানো পরিমাপের সংকেত, কোনো বৈধ বিশেষ ক্ষেত্র নয়।",
          "<strong>অতিভুজের চেয়ে লম্বা সংলগ্ন বাহু লেখা।</strong> অতিভুজ সবসময় সবচেয়ে লম্বা বাহু। [[b \\gt c]] হলে ইনপুট অদলবদল হয়েছে বা ত্রিভুজটি অসম্ভব।",
          "<strong>পরিমাপের একক মেশানো।</strong> 5 m অতিভুজ আর 40 cm সংলগ্ন বাহু দিলে 0.125 পাওয়া যায়, অর্থহীন সংখ্যা। আগে একটিমাত্র এককে রূপান্তর করুন: 5 m ও 4 m দিলে সঠিক 1.25 পাওয়া যায়।",
          "<strong>আগেভাগে রাউন্ড করা।</strong> মধ্যবর্তী ভাগকে দুই দশমিকে রাউন্ড করে গণনা চালিয়ে গেলে ভুল জমে যায়। প্রতিটি ধাপে পূর্ণ নির্ভুলতা রাখুন এবং কেবল চূড়ান্ত উত্তর রাউন্ড করুন।",
          "<strong>মনে করা সমকোণী ত্রিভুজের সেক্যান্ট 1 হতেই হবে।</strong> কোনো সমকোণী ত্রিভুজের সেক্যান্ট ঠিক 1 হয় না। 1 এর ওপরের মান প্রত্যাশা করুন, এবং ঠিক 1 কে সংকেত হিসেবে ধরুন যে ইনপুট উল্টে গেছে বা ত্রিভুজটি অবনমিত।",
          "<strong>কোসাইনের বিপরীতকে বিপরীত কোসাইনের সঙ্গে গুলিয়ে ফেলা।</strong> [[1/\\cos(A)]] হলো সেক্যান্ট, একটি অনুপাত; [[\\cos^{-1}]] হলো বিপরীত কোসাইন, যা একটি কোণ ফেরত দেয়। একই রকম নাম বাস্তব ভুল ঘটায়, তাই স্বরলিপি মনোযোগ দিয়ে পড়ুন।",
          "<strong>মনে করা সেক্যান্ট একাই ত্রিভুজের পরম মাপ নির্ধারণ করে।</strong> সেক্যান্ট আকৃতি বর্ণনা করে, আকার নয়: 5 cm অতিভুজ থেকে 5 km অতিভুজ পর্যন্ত অসীম সংখ্যক ত্রিভুজের সেক্যান্ট 1.25 হতে পারে। অনুপাত অনুপাতিকতা ঠিক করে; প্রকৃত দৈর্ঘ্যের জন্য অন্তত একটি বাহুর পরিমাপ দরকার।"
        ],
        "closingParagraphs": [
          "<strong>ভুল বনাম সঠিক:</strong> অতিভুজ [[c=5]] ও সংলগ্ন বাহু [[b=4]] দেওয়া আছে:",
          "<strong>ভুল:</strong> [[4/5=0.8]]। এটি কোসাইন, সেক্যান্ট নয়। লব ও হর উল্টে গেছে।",
          "<strong>সঠিক:</strong> [[\\sec(A)=5/4=1.25]]।",
          "<strong>যাচাই:</strong> [[\\cos(A)=0.8]], এবং [[1/0.8=1.25]]। বিপরীত যাচাই ফলাফল নিশ্চিত করে, এবং উত্তরটি 1 এর ওপরে আছে, যেমন প্রতিটি বৈধ সেক্যান্টের থাকতেই হয়।"
        ]
      },
      "sec-verify": {
        "h2": "সেক্যান্ট ফলাফল বৈধ কিনা যাচাই",
        "blocks": [
          {
            "kind": "p",
            "text": "একটি বৈধ, অবনমিত নয় এমন সমকোণী ত্রিভুজের ধনাত্মক বাহু দরকার যেখানে অতিভুজ কঠোরভাবে সবচেয়ে লম্বা, [[0 \\lt b \\lt c]], তাই সেক্যান্ট ফলাফল 1 এর চেয়ে বড় হতেই হবে:"
          },
          {
            "kind": "p",
            "text": "[[[\\boxed{\\sec(A)=\\frac{c}{b} \\gt 1}]]]"
          },
          {
            "kind": "p",
            "text": "দুটি পরিমাপেই সামঞ্জস্যপূর্ণ একক ব্যবহার করতে হবে। 1 বা তার নিচের ফলাফল সাধারণত উল্টো ইনপুট, ভুল বাহু চিহ্নিতকরণ, অসামঞ্জস্যপূর্ণ পরিমাপ, বা অবৈধ ত্রিভুজ মাপের ইঙ্গিত দেয়।"
          },
          {
            "kind": "h3",
            "text": "পদ্ধতি ১: কোসাইনের বিপরীত মান যাচাই"
          },
          {
            "kind": "p",
            "text": "[[\\cos(A)=b/c]] যাচাই করুন, তারপর [[\\sec(A)=1/\\cos(A)]] নিশ্চিত করুন। [[b=4]] ও [[c=5]] হলে: [[\\cos(A)=4/5=0.8]], তাই [[\\sec(A)=1/0.8=1.25]]। দুটি পথের মধ্যে অমিল মানে ভগ্নাংশ উল্টে গেছে বা বাহুর নাম ভুল।"
          },
          {
            "kind": "h3",
            "text": "পদ্ধতি ২: পিথাগোরাসের উপপাদ্য যাচাই"
          },
          {
            "kind": "p",
            "text": "বিপরীত বাহু জানা থাকলে বা দরকার হলে [[a=\\sqrt{c^2-b^2}]] নির্ণয় করুন। [[b=4]] ও [[c=5]] এর ক্ষেত্রে: [[a=\\sqrt{25-16}=3]], এবং [[3^2+4^2=5^2]]। এটি 3-4-5 সমকোণী ত্রিভুজের মাপ নিশ্চিত করে। এখানে বিপরীত বাহু একটি যাচাই মান, মূল সেক্যান্ট সূত্রের অংশ নয়।"
          },
          {
            "kind": "h3",
            "text": "পদ্ধতি ৩: বিপরীত কোসাইন দিয়ে যাচাই"
          },
          {
            "kind": "p",
            "text": "1.25 সেক্যান্ট অনুপাতের জন্য: [[A=\\cos^{-1}(1/1.25)]], অর্থাৎ [[A=\\cos^{-1}(0.8)\\approx36.87^\\circ]]। সেক্যান্ট 1 এর সামান্য ওপরে থাকায় কোণটি [[45^\\circ]] এর অনেক নিচে আসা উচিত; না এলে বাহুর নামগুলো সম্ভবত অদলবদল হয়েছে। রাউন্ডিং থেকে ছোট পার্থক্য আসতে পারে।"
          }
        ]
      },
      "sec-vs": {
        "h2": "সেক্যান্ট বনাম কোসাইন, সাইন ও কোসেক্যান্ট",
        "blocks": [
          {
            "kind": "p",
            "text": "প্রতিটি অনুপাত বাহুর ভিন্ন জোড়া তুলনা করে, একই প্রসঙ্গ কোণ ও বাহুর নাম ব্যবহার করে:"
          }
        ],
        "tables": [
          {
            "headers": [
              "অনুপাত",
              "সূত্র",
              "যা তুলনা করে"
            ],
            "rows": [
              [
                "সাইন",
                "sin(A) = a/c",
                "বিপরীত বাহু বনাম অতিভুজ"
              ],
              [
                "কোসাইন",
                "cos(A) = b/c",
                "সংলগ্ন বাহু বনাম অতিভুজ"
              ],
              [
                "ট্যানজেন্ট",
                "tan(A) = a/b",
                "বিপরীত বাহু বনাম সংলগ্ন বাহু"
              ],
              [
                "সেক্যান্ট",
                "sec(A) = c/b",
                "অতিভুজ বনাম সংলগ্ন বাহু"
              ],
              [
                "কোসেক্যান্ট",
                "csc(A) = c/a",
                "অতিভুজ বনাম বিপরীত বাহু"
              ],
              [
                "কোট্যানজেন্ট",
                "cot(A) = b/a",
                "সংলগ্ন বাহু বনাম বিপরীত বাহু"
              ]
            ]
          }
        ],
        "closingParagraphs": [
          "সেক্যান্ট ও কোসাইন বিপরীত জোড়া: [[\\sec(A)=1/\\cos(A)]]। [[\\cos(A)=0.8]] হলে [[\\sec(A)=1.25]]। সূত্রে অতিভুজ ভাগ সংলগ্ন চাওয়া হলে, ঢালু দৈর্ঘ্যকে তার অনুভূমিক প্রক্ষেপের সঙ্গে তুলনা করলে, বা জানা সম্পর্ক সবচেয়ে লম্বা বাহু থেকে শুরু হলে সেক্যান্ট ধরুন; অতিভুজের ওপর সংলগ্নের জন্য কোসাইন, অতিভুজের বিপরীতে বিপরীত বাহুর জন্য সাইন, এবং অতিভুজকে বিপরীত বাহুর সঙ্গে তুলনা করলে কোসেক্যান্ট ধরুন।",
          "প্রতিবেশী অনুপাতগুলোর জন্য দেখুন <a href=\"/sine-ratio-calculator/\" class=\"text-primary hover:underline\">সাইন অনুপাত ক্যালকুলেটর</a>, <a href=\"/cosine-ratio-calculator/\" class=\"text-primary hover:underline\">কোসাইন অনুপাত ক্যালকুলেটর</a>, <a href=\"/tangent-ratio-calculator/\" class=\"text-primary hover:underline\">ট্যানজেন্ট অনুপাত ক্যালকুলেটর</a>, <a href=\"/cosecant-ratio-calculator/\" class=\"text-primary hover:underline\">কোসেক্যান্ট অনুপাত ক্যালকুলেটর</a> ও <a href=\"/cotangent-ratio-calculator/\" class=\"text-primary hover:underline\">কোট্যানজেন্ট অনুপাত ক্যালকুলেটর</a>।"
        ]
      },
      "sec-related": {
        "h2": "সম্পর্কিত ত্রিকোণমিতিক ক্যালকুলেটর দেখুন",
        "related": [
          {
            "name": "সাইন অনুপাত ক্যালকুলেটর"
          },
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
            "name": "কোট্যানজেন্ট অনুপাত ক্যালকুলেটর"
          },
          {
            "name": "সমকোণী ত্রিভুজের কোণ ক্যালকুলেটর"
          }
        ]
      },
      "sec-conclusion": {
        "h2": "আত্মবিশ্বাসের সঙ্গে সেক্যান্ট অনুপাত ব্যবহার করুন",
        "blocks": [
          {
            "kind": "p",
            "text": "সেক্যান্ট হলো কোসাইনের উল্টো রূপ: অতিভুজকে সংলগ্ন বাহু দিয়ে ভাগ করুন আর ঢালু দৈর্ঘ্য তার অনুভূমিক ভিত্তির চেয়ে কতটা বেশি লম্বা তা বর্ণনা হয়ে গেল। [[\\sec(A)=c/b]] সূত্রে কেবল দুটি পরিমাপ দরকার, উত্তর সবসময় 1 এর চেয়ে বড় একটি মাত্রাহীন সংখ্যা, এবং প্রসঙ্গ কোণ বাড়ার সঙ্গে সঙ্গে এটি বাড়ে। হারানো বাহু দরকার হলে [[c=b\\sec(A)]] অতিভুজ ফিরিয়ে দেয়; কোণ দরকার হলে [[A=\\cos^{-1}(1/\\sec(A))]] তা ফিরিয়ে দেয়। মই, রাফটার, র‌্যাম্প, বা পাঠ্যবইয়ের 3-4-5, পদ্ধতি কখনো বদলায় না: অতিভুজ চিহ্নিত করুন, সংলগ্ন বাহু চিহ্নিত করুন, ভাগ করুন, এবং কোসাইনের বিপরীত দিয়ে যাচাই করুন।"
          }
        ]
      }
    },
    "faqs": [
      {
        "question": "সমকোণী ত্রিভুজের সেক্যান্ট অনুপাতের সূত্র কী?",
        "answer": "sec(A) = c / b: অতিভুজ c কে কোণ A এর সংলগ্ন বাহু b দিয়ে ভাগ করুন। 5 cm অতিভুজ ও 4 cm সংলগ্ন বাহু হলে ফলাফল 5/4 = 1.25। এই দশমিকই সম্পূর্ণ উত্তর, একটি মাত্রাহীন অনুপাত, কোণ নয়।"
      },
      {
        "question": "সেক্যান্টের সঙ্গে কোসাইনের সম্পর্ক কী?",
        "answer": "সেক্যান্ট কোসাইনের বিপরীত: sec(A) = 1 / cos(A)। cos(A) = 4/5 = 0.8 হলে sec(A) = 1/0.8 = 1.25। দুটি অনুপাত একই কোণকে উল্টো দিক থেকে বর্ণনা করে, এবং বিপরীত যাচাই সেক্যান্ট গণনা যাচাইয়ের দ্রুততম উপায়।"
      },
      {
        "question": "সমকোণী ত্রিভুজে সেক্যান্ট কেন 1 এর চেয়ে বড়?",
        "answer": "বৈধ, অবনমিত নয় এমন সমকোণী ত্রিভুজে অতিভুজ দুটি বাহুর যেকোনোটির চেয়ে কঠোরভাবে বেশি লম্বা, তাই c > b > 0। বড় দৈর্ঘ্যকে ছোট দৈর্ঘ্য দিয়ে ভাগ করলে সবসময় 1 এর ওপরের অনুপাত পাওয়া যায়: প্রতিটি সূক্ষ্ম প্রসঙ্গ কোণের জন্য sec(A) = c/b > 1।"
      },
      {
        "question": "সেক্যান্ট কি 1 এর সমান হতে পারে?",
        "answer": "প্রকৃত সমকোণী ত্রিভুজে সাধারণ সূক্ষ্মকোণের ক্ষেত্রে নয়। ঠিক 1 সেক্যান্টের জন্য অতিভুজকে সংলগ্ন বাহুর সমান হতে হবে, যা ত্রিভুজটিকে সমতল রেখায় চেপে দেয়। 1 মানটি একটি সীমান্ত মান যা কোণ A 0 ডিগ্রির দিকে সংকুচিত হলে পৌঁছানো যায়, প্রকৃত ত্রিভুজ কখনো এটি উৎপন্ন করে না।"
      },
      {
        "question": "1.25 সেক্যান্ট মানের অর্থ কী?",
        "answer": "অতিভুজ সংলগ্ন বাহুর 1.25 গুণ লম্বা, বা 25 শতাংশ বেশি লম্বা। এর অর্থ এই নয় যে কোণটি 1.25 ডিগ্রি, এবং এর অর্থ এইও নয় যে ত্রিভুজটি 1.25 একক পরিমাপ করে। সেক্যান্ট দুটি দৈর্ঘ্যের মাত্রাহীন তুলনা।"
      },
      {
        "question": "সেক্যান্টের কি পরিমাপের একক আছে?",
        "answer": "না। দুটি ইনপুটই একই এককে মাপা দৈর্ঘ্য, তাই একক কেটে যায়: 5 m / 4 m = 1.25, ঠিক যেমন 500 cm / 400 cm = 1.25। সেক্যান্টকে খালি সংখ্যা হিসেবে রিপোর্ট করুন, কখনো ডিগ্রি, মিটার বা ফুট জুড়ে দেবেন না।"
      },
      {
        "question": "বাহুর দৈর্ঘ্য থেকে সেক্যান্ট কীভাবে নির্ণয় করবেন?",
        "answer": "একই এককে অতিভুজ c ও সংলগ্ন বাহু b পরিমাপ করুন, নিশ্চিত করুন দুটোই ধনাত্মক এবং c, b এর চেয়ে লম্বা, তারপর ভাগ করুন: sec(A) = c / b। এই পৃষ্ঠায় প্রথম ঘরে অতিভুজ ও দ্বিতীয় ঘরে সংলগ্ন বাহু লিখুন, সামঞ্জস্যপূর্ণ একক বেছে নিন, এবং Calculate sec(A) ক্লিক করুন।"
      },
      {
        "question": "সেক্যান্ট ব্যবহার করে অতিভুজ কীভাবে নির্ণয় করবেন?",
        "answer": "সূত্রটি পুনর্বিন্যাস করে c = b * sec(A) পান। সংলগ্ন বাহু 4 m ও কোণ A 60 ডিগ্রি হলে sec(60 deg) = 2, তাই c = 4 * 2 = 8 m। এটি একটি হাতে করা পুনর্বিন্যাস; এই পৃষ্ঠার ক্যালকুলেটর বাহুর দৈর্ঘ্য থেকে অনুপাত ফেরত দেয়, হারানো বাহু নয়।"
      },
      {
        "question": "সেক্যান্ট অনুপাত থেকে কোণ কীভাবে নির্ণয় করবেন?",
        "answer": "বিপরীত নিয়ে কোসাইন অনুপাত পান, তারপর বিপরীত কোসাইন প্রয়োগ করুন: A = cos^-1(1 / sec(A))। sec(A) = 1.25 হলে কোসাইন অনুপাত 0.8, তাই A = cos^-1(0.8), প্রায় 36.87 ডিগ্রি। প্রথমে আপনার বৈজ্ঞানিক ক্যালকুলেটর ডিগ্রি মোডে সেট করুন। এই পৃষ্ঠার ক্যালকুলেটর অনুপাত ফেরত দেয়, কোণ নয়।"
      },
      {
        "question": "সেক্যান্ট ও কোসেক্যান্টের মধ্যে পার্থক্য কী?",
        "answer": "সেক্যান্ট অতিভুজকে সংলগ্ন বাহু দিয়ে ভাগ করে (c/b); কোসেক্যান্ট অতিভুজকে বিপরীত বাহু দিয়ে ভাগ করে (c/a)। দুটোই অতিভুজযুক্ত বিপরীত অনুপাত, কিন্তু এগুলো ভিন্ন বাহু ব্যবহার করে, তাই ভিন্ন প্রশ্নের উত্তর দেয় এবং কখনো পরস্পর বদলানো যায় না।"
      },
      {
        "question": "বিপরীত বাহু না জেনে কি সেক্যান্ট নির্ণয় করা যায়?",
        "answer": "হ্যাঁ। মূল সেক্যান্ট সূত্রে কেবল অতিভুজ ও সংলগ্ন বাহু ব্যবহৃত হয়, তাই বিপরীত বাহু কখনো গণনায় আসে না। ত্রিভুজ যাচাই করতে পিথাগোরাসের উপপাদ্য ব্যবহার করা হলে বা সাইন, ট্যানজেন্ট বা কোসেক্যান্ট কাজে এলে তবেই বিপরীত বাহু কার্যকর হয়।"
      },
      {
        "question": "ব্যবহারিক পরিমাপে সেক্যান্ট কীভাবে ব্যবহৃত হয়?",
        "answer": "সেক্যান্ট ঢালু দৈর্ঘ্যকে তার অনুভূমিক প্রক্ষেপের সঙ্গে তুলনা করে: দেয়াল থেকে মইয়ের ভূমি দূরত্বের বিপরীতে মই, ছাদের কাঠের অনুভূমিক প্রস্থের বিপরীতে ছাদের রাফটার, তারের প্রান্তদ্বয়ের অনুভূমিক ব্যবধানের বিপরীতে তার। এই অনুপাত বলে দেয় ঢালু পথ তার প্রক্ষেপের চেয়ে কতটা বেশি লম্বা, যা অনুভূমিক নকশা থেকে উপকরণের দৈর্ঘ্য অনুমানে কাজে লাগে।"
      }
    ],
    "faqHeading": "প্রায়শই জিজ্ঞাসিত প্রশ্ন",
    "relatedHeading": "সম্পর্কিত ত্রিকোণমিতিক ক্যালকুলেটর দেখুন"
  },
  "ja": {
    "tocHeading": "このガイドでは",
    "tocItems": {
      "sec-intro": "セカント比計算機とは？",
      "sec-triangle": "隣辺と斜辺を理解する",
      "sec-whatis": "セカント比を理解する",
      "sec-formula": "セカントの公式の仕組み",
      "sec-howto": "セカント比計算機の使い方",
      "sec-examples": "セカント計算のステップバイステップ例",
      "sec-applications": "セカント比の実生活での例",
      "sec-angle": "セカントと角度の大きさの関係を理解する",
      "sec-hypotenuse": "セカントを使って斜辺を求める方法",
      "sec-recover": "セカント比から角度を求める方法",
      "sec-mistakes": "セカント計算でよくある間違い",
      "sec-verify": "セカントの計算結果が正しいか確認する方法",
      "sec-vs": "セカントとコサイン、サイン、コセカントの違い",
      "sec-related": "関連する三角比計算機を探す",
      "sec-faq": "よくある質問"
    },
    "sections": {
      "sec-intro": {
        "h2": "セカント比計算機とは？",
        "blocks": [
          {
            "kind": "p",
            "text": "セカント比計算機が答えるのは、1つの問いです。直角三角形の鋭角について、最長の辺はその角に隣り合う辺と比べてどれくらい長いのでしょうか。斜辺と隣辺を入力すると、このツールは斜辺を隣辺で割り、[[\\sec(A)=c/b]] を返します。斜辺が 5 cm、隣辺が 4 cm の場合、計算は [[5/4=1.25]] です。つまり斜辺は隣辺の 1.25 倍の長さであり、別の言い方をすれば 25% 長いということです。この小数そのものが答えのすべてです。割り算でセンチメートルの単位は打ち消し合うため、これは無次元の比であり、度の角度ではありません。1.25 を [[1.25^\\circ]] と読んではいけません。対辺はこの計算には一切登場しません。斜辺と隣辺があれば十分です。セカントはコサインの逆数でもあり、そのため多くの教科書では [[\\cos(A)]] をひっくり返した形として紹介されます。"
          }
        ]
      },
      "sec-triangle": {
        "h2": "隣辺と斜辺を理解する",
        "blocks": [
          {
            "kind": "h3",
            "text": "直角三角形とは？"
          },
          {
            "kind": "p",
            "text": "直角三角形には、ちょうど [[90^\\circ]] の角が1つあります。これは、壁と水平な床が出会うような、垂直に交わる2本の線が作る角です。斜辺はその直角の向かい側にあり、角の対角線全体をまたぐ必要があるため、常に最長の辺です。残りの2つの角は残りの90度を分け合うので、どちらも鋭角になります。2本の脚は直角で互いに垂直に交わります。そして、この2本の脚と斜辺の関係こそが、直角三角形の三角法を成り立たせています。"
          },
          {
            "kind": "h3",
            "text": "隣辺とは？"
          },
          {
            "kind": "p",
            "text": "隣辺 [[b]] は、斜辺ではなく基準角 [[A]] に接する脚です。実用的な問題では、はしごの足元から壁までの地上距離、屋根のたる木の水平投影、2つの測量点の間の水平距離など、水平方向の長さの役割を果たすことが多くあります。セカントの公式では分母に入ります。どちらの脚が隣辺になるかは、選んだ基準角によって決まります。そのため、角 [[A]] から角 [[B]] に切り替えると、隣辺と対辺の呼び名が入れ替わります。"
          },
          {
            "kind": "h3",
            "text": "斜辺とは？"
          },
          {
            "kind": "p",
            "text": "斜辺 [[c]] は、直角の向かい側にある辺です。どの図でも、[[90^\\circ]] の角を示す小さな四角に向き合っており、必ずどちらの脚よりも長くなります。実用的な問題では、はしご、スロープの面、たる木、ケーブル、斜めの支柱、直線の経路など、傾斜した長さの役割を果たすことが多くあります。セカントの公式では分子に入るため、セカントの値は必ず1より大きくなります。"
          },
          {
            "kind": "h3",
            "text": "対辺とは？"
          },
          {
            "kind": "p",
            "text": "対辺 [[a]] は角 [[A]] の真向かいにあり、その頂点には決して接しません。セカントの基本的な計算には登場しないため、計算機でも入力を求められません。分かっている2辺が本物の直角三角形を成すかどうかを三平方の定理で確かめるときに役立ちます。また、対辺を使うサイン、タンジェント、コセカントでは主役になります。"
          }
        ],
        "imgAlt": "左下に角A、黄金色の斜辺c、青い隣辺bを示す直角三角形。sec(A)=c/b",
        "figcaption": "角Aは左下にあります。セカントでは金色の斜辺cと青色の隣辺bを使い、対辺aは使いません。"
      },
      "sec-whatis": {
        "h2": "セカント比を理解する",
        "blocks": [
          {
            "kind": "p",
            "text": "セカントは、傾斜した辺の全体と基準角に隣り合う脚を比べる比です。"
          },
          {
            "kind": "p",
            "text": "[[[\\sec(A)=\\frac{c}{b}]]]"
          },
          {
            "kind": "p",
            "text": "ここで [[\\sec(A)]] は角 [[A]] のセカント、[[c]] は斜辺、[[b]] は隣辺です。つまり、隣辺が斜辺の中に何回収まるかを表します。"
          },
          {
            "kind": "h3",
            "text": "コサインの逆数としてのセカント"
          },
          {
            "kind": "p",
            "text": "コサインは隣辺を斜辺で割るもの、すなわち [[\\cos(A)=b/c]] です。逆数を取るとこの分数がひっくり返り、[[1/\\cos(A)=c/b]] となります。これがまさにセカントの公式です。"
          },
          {
            "kind": "p",
            "text": "[[[\\boxed{\\sec(A)=\\frac{1}{\\cos(A)}=\\frac{c}{b}}]]]"
          },
          {
            "kind": "p",
            "text": "[[\\cos(A)=4/5=0.8]] の場合、逆数は [[\\sec(A)=1/0.8=1.25]] です。同じ三角形を逆方向から表したものです。この区別は重要です。逆コサインは [[\\cos^{-1}]] と書き、コサインの値から角度を求める別の考え方です。一方、[[1/\\cos(A)]] はコサインの逆数であり、角度ではなく比です。"
          },
          {
            "kind": "h3",
            "text": "セカントの値1.25はどういう意味ですか"
          },
          {
            "kind": "p",
            "text": "セカントが1.25ということは、斜辺が隣辺の1.25倍の長さだということです。差の割合は [[(1.25-1)\\times100=25]] なので、斜辺は隣辺より25%長くなります。これは角度が [[1.25^\\circ]] だという意味ではありませんし、三角形が1.25単位の大きさだという意味でもありません。セカントは比較であり、測定ではありません。"
          },
          {
            "kind": "h3",
            "text": "セカントが1より大きくなる理由"
          },
          {
            "kind": "p",
            "text": "正しく退化していない直角三角形では、斜辺はどちらの脚よりも長いので、[[c \\gt b \\gt 0]] となります。したがって、斜辺を隣辺で割ると1より大きい比になります。"
          },
          {
            "kind": "p",
            "text": "[[[\\boxed{\\frac{c}{b} \\gt 1}]]]"
          },
          {
            "kind": "p",
            "text": "退化していない直角三角形の普通の鋭角では、結果がちょうど1になることはありません。1になるには斜辺と隣辺が等しくなければならず、そうなると三角形は1本の線になってしまいます。1は極限値であり、角度が [[0^\\circ]] に近づくときにだけ近づく値です。"
          },
          {
            "kind": "h3",
            "text": "セカントがコサインの逆数である理由"
          },
          {
            "kind": "p",
            "text": "この関係は2つの公式から直接導かれます。コサインは隣辺を斜辺で割り、セカントは斜辺を隣辺で割ります。"
          },
          {
            "kind": "p",
            "text": "[[\\cos(A)=\\frac{b}{c}]]"
          },
          {
            "kind": "p",
            "text": "[[\\sec(A)=\\frac{c}{b}]]"
          },
          {
            "kind": "p",
            "text": "両者を掛け合わせるとすべてが打ち消し合い、1になります。"
          },
          {
            "kind": "p",
            "text": "[[[\\cos(A)\\sec(A)=\\frac{b}{c}\\times\\frac{c}{b}=1]]]"
          },
          {
            "kind": "p",
            "text": "この恒等式は実用的な検算ツールです。同じ辺からコサインを計算し、その逆数を取れば、セカントの結果と正確に一致しなければなりません。一致しない場合は、分数がひっくり返っているか、辺の呼び名を間違えている証拠です。"
          },
          {
            "kind": "h3",
            "text": "セカントに単位がない理由"
          },
          {
            "kind": "p",
            "text": "セカントは長さを長さで割るので、単位は打ち消し合います。例えば次のようになります。"
          },
          {
            "kind": "p",
            "text": "[[[\\frac{5\\,\\text{m}}{4\\,\\text{m}}=1.25]]]"
          },
          {
            "kind": "p",
            "text": "メートルは消えて、純粋な数だけが残ります。500 cmと400 cmでも、単位さえそろっていれば同じ比になります。そのため、斜辺をメートル、隣辺をセンチメートルで測るといった具合に単位を混ぜると、計算は最初から壊れてしまいます。"
          },
          {
            "kind": "h3",
            "text": "セカントとコセカントの違い"
          },
          {
            "kind": "p",
            "text": "セカントとコセカントは、どちらも分子に斜辺を使う逆数の比ですが、分母に使う脚が異なります。"
          },
          {
            "kind": "p",
            "text": "[[\\sec(A)=\\frac{c}{b}]]"
          },
          {
            "kind": "p",
            "text": "[[\\csc(A)=\\frac{c}{a}]]"
          },
          {
            "kind": "p",
            "text": "セカントは斜辺と隣辺の組み合わせであり、コセカントは斜辺と対辺の組み合わせです。両者は置き換えがききません。間違った方を選ぶと、三角形についての別の問いに答えてしまいます。"
          }
        ],
        "imgAlt": "3つの段階: 3-4-5の三角形、コサインcos(A)=4/5=0.8、セカントsec(A)=5/4=1.25、逆数の関係",
        "figcaption": "3つの段階: 3-4-5の三角形に辺の名前を付け、コサインcos(A)=4/5を計算し、分数をひっくり返してsec(A)=5/4を求めます。"
      },
      "sec-formula": {
        "h2": "セカントの公式の仕組み",
        "blocks": [
          {
            "kind": "p",
            "text": "定義は言葉から始まり、次に記号に移ります。セカントとは、斜辺を隣辺で割ったものです。"
          },
          {
            "kind": "p",
            "text": "[[[\\sec(A)=\\frac{\\text{Hypotenuse}}{\\text{Adjacent}}]]]"
          },
          {
            "kind": "p",
            "text": "標準的な記法ではこうなります。"
          },
          {
            "kind": "p",
            "text": "[[[\\boxed{\\sec(A)=\\frac{c}{b}}]]]"
          },
          {
            "kind": "p",
            "text": "分子に斜辺が来るのは、セカントが「傾斜した辺は水平方向の足跡と比べてどれくらい長いか」を問うからです。分母に隣辺が来るのは、それが比較の基準となる長さだからです。"
          },
          {
            "kind": "h3",
            "text": "完全な計算例: 3-4-5の直角三角形"
          },
          {
            "kind": "p",
            "text": "隣辺 [[b=4\\,\\text{cm}]]、対辺 [[a=3\\,\\text{cm}]]、斜辺 [[c=5\\,\\text{cm}]] が与えられたとき、公式をステップごとに計算しましょう。"
          },
          {
            "kind": "p",
            "text": "<strong>ステップ1: 公式を書きます。</strong> [[\\sec(A)=c/b]]。"
          },
          {
            "kind": "p",
            "text": "<strong>ステップ2: 分かっている値を代入します。</strong> [[\\sec(A)=5/4]]。"
          },
          {
            "kind": "p",
            "text": "<strong>ステップ3: 割り算をします。</strong> [[\\boxed{\\sec(A)=1.25}]]。"
          },
          {
            "kind": "p",
            "text": "<strong>ステップ4: 結果を解釈します。</strong> 斜辺は隣辺の1.25倍の長さであり、25%長くなります。水平距離4 mにまたがる長さ5 cmのはしごもこのように振る舞います。幾何学では単位は関係なく、比率だけが重要です。"
          },
          {
            "kind": "p",
            "text": "<strong>ステップ5: コサインで検算します。</strong> [[\\cos(A)=4/5=0.8]] であり、[[1/0.8=1.25]] です。逆数の検算によりセカントの結果が確認できます。コサインとセカントは互いに正確な逆数だからです。"
          },
          {
            "kind": "p",
            "text": "<strong>ステップ6: 三角形を確認します。</strong> [[3^2+4^2=5^2]] であり、これは [[9+16=25]] です。辺の長さは三平方の定理を満たすので、これは本物の直角三角形であり、セカントの値は信頼できます。"
          }
        ]
      },
      "sec-howto": {
        "h2": "セカント比計算機の使い方",
        "blocks": [
          {
            "kind": "p",
            "text": "上の計算機は、斜辺 [[c]] と隣辺 [[b]] の2つの入力を受け取り、[[\\sec(A)]] を返します。次の手順を順番に進めてください。"
          }
        ],
        "steps": [
          "<strong>基準角 [[A]] を決めます。</strong> 比に使う辺の呼び名はすべてこの角を基準に定義されるので、辺の長さに触れる前に決めてください。",
          "<strong>斜辺 [[c]] を特定します。</strong> 直角の向かい側にあり、三角形で最も長い辺です。図では傾いた辺になります。",
          "<strong>隣辺 [[b]] を特定します。</strong> 角 [[A]] に接し、斜辺ではない辺です。垂直に交わる2本の脚のうちの1本です。",
          "<strong>両方の辺の長さを取得または測定します。</strong> 同じ道具と単位で測るか、続ける前に一方を単位換算してください。",
          "<strong>1つ目の入力欄に斜辺を入力します。</strong> これは分数の分子なので、ここで間違えると答え全体がずれます。",
          "<strong>2つ目の入力欄に隣辺を入力します。</strong> これは分母です。角 [[A]] の向かい側の辺ではなく、隣の辺でなければなりません。",
          "<strong>単位選択を使って互換性のある単位を選びます。</strong> 両方の欄が同じ単位（または換算後の等価な単位）でなければ、比は間違ってしまいます。",
          "<strong>両方の測定値が正の数であることを確認します。</strong> ゼロや負の長さは三角形では意味をなさず、入力ミスのサインです。",
          "<strong>斜辺が隣辺より長いことを確認します。</strong> そうでなければ、辺の呼び名を間違えているか、その数値では直角三角形にならないかのどちらかです。",
          "<strong>「Calculate sec(A)」をクリックします。</strong> ツールが [[c/b]] の割り算を行い、比を表示します。",
          "<strong>結果のセカント比を読み取ります。</strong> これは無次元の小数で、通常は小数第4位まで表示され、そのまま次の計算に使えます。",
          "<strong>結果が1より大きいことを確認します。</strong> 正しく退化していない直角三角形で基準角が鋭角なら、[[\\sec(A) \\gt 1]] です。1以下の値が出たら、上流のどこかで間違いが起きています。",
          "<strong>入力を消して別の計算を始めたいときは「Reset」を使います。</strong> 入力欄と結果が初期状態に戻ります。"
        ],
        "closingParagraphs": [
          "基本的なセカント比は2つの長さだけで完全に決まるため、この計算機では対辺も角度の入力も必要ありません。また、角度や不足している辺を求める機能もありません。その場合は、このガイドの後半で紹介する変形した公式を手計算で使ってください。"
        ]
      },
      "sec-examples": {
        "h2": "セカント計算のステップバイステップ例",
        "blocks": [
          {
            "kind": "p",
            "text": "ここでは、三角法で何度も登場する古典的な三角形を4つ取り上げます。これらのセカント値は覚えておく価値があります。"
          },
          {
            "kind": "h3",
            "text": "例1: 3-4-5の直角三角形"
          },
          {
            "kind": "p",
            "text": "[[b=4\\,\\text{cm}]]、[[a=3\\,\\text{cm}]]、[[c=5\\,\\text{cm}]] が与えられたとき。"
          },
          {
            "kind": "p",
            "text": "[[\\sec(A)=\\frac{5}{4}]]"
          },
          {
            "kind": "p",
            "text": "[[\\boxed{\\sec(A)=1.25}]]"
          },
          {
            "kind": "p",
            "text": "斜辺は隣辺より25%長いです。これは教科書で最もよく出るセカントの例であり、1.25という結果は正確な値です。"
          },
          {
            "kind": "h3",
            "text": "例2: 5-12-13の直角三角形"
          },
          {
            "kind": "p",
            "text": "隣辺 [[b=12\\,\\text{m}]]、対辺 [[a=5\\,\\text{m}]]、斜辺 [[c=13\\,\\text{m}]] が与えられたとき。"
          },
          {
            "kind": "p",
            "text": "[[\\sec(A)=\\frac{13}{12}]]"
          },
          {
            "kind": "p",
            "text": "[[\\boxed{\\sec(A)\\approx1.0833}]]"
          },
          {
            "kind": "p",
            "text": "斜辺は隣辺より約8.33%長いです。この三角形は建築の問題でよく登場します。13という比率が緩やかな屋根勾配に近いからです。"
          },
          {
            "kind": "h3",
            "text": "例3: 45-45-90の三角形"
          },
          {
            "kind": "p",
            "text": "隣辺 [[b=1\\,\\text{cm}]]、対辺 [[a=1\\,\\text{cm}]]、斜辺 [[c=\\sqrt{2}\\,\\text{cm}]] が与えられたとき。"
          },
          {
            "kind": "p",
            "text": "[[\\sec(45^\\circ)=\\frac{\\sqrt{2}}{1}]]"
          },
          {
            "kind": "p",
            "text": "[[\\boxed{\\sec(45^\\circ)=\\sqrt{2}\\approx1.4142}]]"
          },
          {
            "kind": "p",
            "text": "斜辺はどちらの脚の約1.4142倍です。45度では2本の脚が等しいため、セカントとコセカントが等しく、どちらも [[\\sqrt{2}]] です。"
          },
          {
            "kind": "h3",
            "text": "例4: 30-60-90の三角形"
          },
          {
            "kind": "p",
            "text": "基準角 [[A=30^\\circ]] に対し、隣辺 [[b=\\sqrt{3}\\,\\text{cm}]]、対辺 [[a=1\\,\\text{cm}]]、斜辺 [[c=2\\,\\text{cm}]] を使います。"
          },
          {
            "kind": "p",
            "text": "[[\\sec(30^\\circ)=\\frac{2}{\\sqrt{3}}]]"
          },
          {
            "kind": "p",
            "text": "[[\\boxed{\\sec(30^\\circ)\\approx1.1547}]]"
          },
          {
            "kind": "p",
            "text": "斜辺は隣辺より約15.47%長いです。なお、60度では辺が入れ替わり、斜辺と隣辺の比率が同じ2:1になってセカントは2になります。"
          }
        ]
      },
      "sec-applications": {
        "h2": "セカント比の実生活での例",
        "blocks": [
          {
            "kind": "p",
            "text": "セカントは、傾斜した長さをその水平投影と比べる必要があるあらゆる場面で活躍します。各例では直角三角形を実態の単純化した幾何モデルとして使っており、書かれている仮定によってその単純化の限界もはっきりさせています。"
          },
          {
            "kind": "h3",
            "text": "例5: はしごのセカント比を計算する"
          },
          {
            "kind": "p",
            "text": "はしごの長さは5 mで、その足元は垂直な壁から4 m離れています。角 [[A]] は、はしごと水平な地面の間にあります。斜辺ははしごそのもの、すなわち [[c=5\\,\\text{m}]] で、隣辺は水平な地上距離、すなわち [[b=4\\,\\text{m}]] です。"
          },
          {
            "kind": "p",
            "text": "[[\\sec(A)=\\frac{5}{4}]]"
          },
          {
            "kind": "p",
            "text": "[[\\boxed{\\sec(A)=1.25}]]"
          },
          {
            "kind": "p",
            "text": "はしごは水平な地上投影より25%長いです。この比だけでは、はしごが安全に設置されているかは分かりません。はしごの安全は作業角度と足場の安定性にかかっており、セカントだけでは判断できません。"
          },
          {
            "kind": "h3",
            "text": "例6: 屋根のたる木のセカント比を計算する"
          },
          {
            "kind": "p",
            "text": "屋根のたる木の傾斜長は6.5 m、水平の長さ（ラン）は6 mです。たる木が斜辺 [[c=6.5\\,\\text{m}]]、水平の長さが隣辺 [[b=6\\,\\text{m}]] です。"
          },
          {
            "kind": "p",
            "text": "[[\\sec(A)=\\frac{6.5}{6}]]"
          },
          {
            "kind": "p",
            "text": "[[\\boxed{\\sec(A)\\approx1.0833}]]"
          },
          {
            "kind": "p",
            "text": "たる木は水平の長さより約8.33%長いです。屋根職人はこの関係を逆向きに日常的に使います。図面でランを測り、セカントを掛けて、たる木の材料を発注します。この比だけでは屋根設計や構造の評価はできません。"
          },
          {
            "kind": "h3",
            "text": "例7: スロープのセカント比を評価する"
          },
          {
            "kind": "p",
            "text": "単純化したスロープの傾斜長は9.5 m、水平の長さは9 mです。傾斜面が斜辺 [[c=9.5\\,\\text{m}]]、水平の長さが隣辺 [[b=9\\,\\text{m}]] です。"
          },
          {
            "kind": "p",
            "text": "[[\\sec(A)=\\frac{9.5}{9}]]"
          },
          {
            "kind": "p",
            "text": "[[\\boxed{\\sec(A)\\approx1.0556}]]"
          },
          {
            "kind": "p",
            "text": "スロープの傾斜長は水平投影より約5.56%長いです。小さなセカント値は緩やかな傾斜を反映していますが、この比だけではバリアフリー性や建築基準への適合は判断できません。"
          },
          {
            "kind": "h3",
            "text": "例8: 測量の測定"
          },
          {
            "kind": "p",
            "text": "単純化した測量用三角形の直線距離は50 m、水平距離は40 mです。直線距離が斜辺 [[c=50\\,\\text{m}]]、水平距離が隣辺 [[b=40\\,\\text{m}]] です。"
          },
          {
            "kind": "p",
            "text": "[[\\sec(A)=\\frac{50}{40}]]"
          },
          {
            "kind": "p",
            "text": "[[\\boxed{\\sec(A)=1.25}]]"
          },
          {
            "kind": "p",
            "text": "直線距離は水平距離より25%長いです。測量士はこのような水平補正を日常的に行いますが、実際の現場作業ではこの単純なモデルを超えた追加の補正や測定手順が必要になることもあります。"
          },
          {
            "kind": "h3",
            "text": "例9: 電柱を支える支線"
          },
          {
            "kind": "p",
            "text": "支線の長さは13 mで、地上のアンカーは電柱から水平に12 m離れています。支線が斜辺 [[c=13\\,\\text{m}]]、電柱からアンカーまでの水平距離が隣辺 [[b=12\\,\\text{m}]] です。"
          },
          {
            "kind": "p",
            "text": "[[\\sec(A)=\\frac{13}{12}]]"
          },
          {
            "kind": "p",
            "text": "[[\\boxed{\\sec(A)\\approx1.0833}]]"
          },
          {
            "kind": "p",
            "text": "支線は水平投影より約8.33%長いです。これでケーブルを何メートル切るべきかは分かりますが、どれだけの荷重に耐えるかは分かりません。張力、アンカーの強度、構造の安全性は別途分析が必要です。"
          },
          {
            "kind": "h3",
            "text": "例10: 階段の側桁のセカント比を計算する"
          },
          {
            "kind": "p",
            "text": "単純化した階段の側桁の長さは5 m、水平の長さは4 mです。側桁が斜辺 [[c=5\\,\\text{m}]]、水平の長さが隣辺 [[b=4\\,\\text{m}]] です。"
          },
          {
            "kind": "p",
            "text": "[[\\sec(A)=\\frac{5}{4}]]"
          },
          {
            "kind": "p",
            "text": "[[\\boxed{\\sec(A)=1.25}]]"
          },
          {
            "kind": "p",
            "text": "斜めの側桁は水平方向の長さより25%長いです。大工はこの計算を逆向きに使って、図面の寸法から側桁を切り出します。この比だけでは階段の寸法や建築基準への適合は検証できません。"
          },
          {
            "kind": "h3",
            "text": "例11: クレーンのブームの水平投影を理解する"
          },
          {
            "kind": "p",
            "text": "単純化したクレーンのブームの長さは10 m、水平投影は6 mです。ブームが斜辺 [[c=10\\,\\text{m}]]、水平投影が隣辺 [[b=6\\,\\text{m}]] です。"
          },
          {
            "kind": "p",
            "text": "[[\\sec(A)=\\frac{10}{6}]]"
          },
          {
            "kind": "p",
            "text": "[[\\boxed{\\sec(A)\\approx1.6667}]]"
          },
          {
            "kind": "p",
            "text": "ブームは水平投影より約66.67%長いです。大きなセカント値は高い作業角度を反映しています。この比だけではクレーンの吊り上げ能力や作業の安全は判断できません。"
          },
          {
            "kind": "h3",
            "text": "例12: 直線飛行区間"
          },
          {
            "kind": "p",
            "text": "単純化した直線飛行区間では、飛行経路の長さは5 km、水平変位は4 kmです。飛行経路が斜辺 [[c=5\\,\\text{km}]]、水平変位が隣辺 [[b=4\\,\\text{km}]] です。"
          },
          {
            "kind": "p",
            "text": "[[\\sec(A)=\\frac{5}{4}]]"
          },
          {
            "kind": "p",
            "text": "[[\\boxed{\\sec(A)=1.25}]]"
          },
          {
            "kind": "p",
            "text": "経路長は水平変位より25%長いです。これは理想化した幾何学の例であり、完全な飛行航法の計算ではありません。実際の飛行計画では、風、高度変化、空域経路が加わります。"
          },
          {
            "kind": "h3",
            "text": "例13: 斜めの機械支柱"
          },
          {
            "kind": "p",
            "text": "斜めの支柱の長さは2 m、水平投影は1.2 mです。支柱が斜辺 [[c=2\\,\\text{m}]]、水平投影が隣辺 [[b=1.2\\,\\text{m}]] です。"
          },
          {
            "kind": "p",
            "text": "[[\\sec(A)=\\frac{2}{1.2}]]"
          },
          {
            "kind": "p",
            "text": "[[\\boxed{\\sec(A)\\approx1.6667}]]"
          },
          {
            "kind": "p",
            "text": "支柱は水平投影より約66.67%長いです。この比は設置の幾何形状を表すものであり、支柱の強度や適性は判断できません。"
          },
          {
            "kind": "h3",
            "text": "例14: ハイキングコースのセカント比を計算する"
          },
          {
            "kind": "p",
            "text": "単純化した直線のハイキング区間では、歩行経路の長さは100 m、水平変位は80 mです。歩行経路が斜辺 [[c=100\\,\\text{m}]]、水平変位が隣辺 [[b=80\\,\\text{m}]] です。"
          },
          {
            "kind": "p",
            "text": "[[\\sec(A)=\\frac{100}{80}]]"
          },
          {
            "kind": "p",
            "text": "[[\\boxed{\\sec(A)=1.25}]]"
          },
          {
            "kind": "p",
            "text": "直線経路は水平変位より25%長いです。実際のハイキングコースにはカーブや変化する勾配があるため、これは単一の直線区間として扱い、コース全体とは考えないでください。"
          },
          {
            "kind": "h3",
            "text": "例15: オーニングの支え"
          },
          {
            "kind": "p",
            "text": "オーニングの支えの長さは3 m、水平投影は2.4 mです。支えが斜辺 [[c=3\\,\\text{m}]]、水平投影が隣辺 [[b=2.4\\,\\text{m}]] です。"
          },
          {
            "kind": "p",
            "text": "[[\\sec(A)=\\frac{3}{2.4}]]"
          },
          {
            "kind": "p",
            "text": "[[\\boxed{\\sec(A)=1.25}]]"
          },
          {
            "kind": "p",
            "text": "支えは水平投影より25%長いです。この計算だけでは構造的な適性は判断できません。固定部の強度や風圧は個別に確認が必要です。"
          },
          {
            "kind": "h3",
            "text": "例16: 2点間のケーブル"
          },
          {
            "kind": "p",
            "text": "2点間をまっすぐ張るケーブルの全長は25 m、2点間の水平距離は24 mです。ケーブルが斜辺 [[c=25\\,\\text{m}]]、水平距離が隣辺 [[b=24\\,\\text{m}]] です。"
          },
          {
            "kind": "p",
            "text": "[[\\sec(A)=\\frac{25}{24}]]"
          },
          {
            "kind": "p",
            "text": "[[\\boxed{\\sec(A)\\approx1.0417}]]"
          },
          {
            "kind": "p",
            "text": "ケーブルは水平距離より約4.17%長いです。この単純なモデルでは、ケーブルがまっすぐで直角三角形の関係にあると仮定しています。実際のケーブルはたわむため、セカントのモデルよりも長くなります。"
          },
          {
            "kind": "p",
            "text": "セカントは単位を持つ物理量ではなく、数学的な比です。その実用的な価値は、傾斜した長さを水平投影と比べること、角度が分かっているときに長さを求めること、三角形の幾何を確認すること、そしてセカントを特に必要とする公式を使うことにあります。ただし、構造の安全性、荷重能力、バリアフリー性、工学的適合性をセカント単独で保証することは決してありません。"
          }
        ],
        "tables": [
          {
            "headers": [
              "状況",
              "c",
              "b",
              "式",
              "比率",
              "長さの増加率",
              "意味"
            ],
            "rows": [
              [
                "はしご",
                "5 m",
                "4 m",
                "5/4",
                "1.25",
                "25%",
                "はしごが地上距離より4分の1長い"
              ],
              [
                "屋根のたる木",
                "6.5 m",
                "6 m",
                "6.5/6",
                "1.0833",
                "8.33%",
                "たる木が水平の長さよりわずかに長い"
              ],
              [
                "スロープ",
                "9.5 m",
                "9 m",
                "9.5/9",
                "1.0556",
                "5.56%",
                "緩やかな傾斜で水平の長さとほぼ変わらない"
              ],
              [
                "測量",
                "50 m",
                "40 m",
                "50/40",
                "1.25",
                "25%",
                "直線距離が水平距離を上回る"
              ],
              [
                "支線",
                "13 m",
                "12 m",
                "13/12",
                "1.0833",
                "8.33%",
                "地上距離から切断する支線の長さ"
              ],
              [
                "階段の側桁",
                "5 m",
                "4 m",
                "5/4",
                "1.25",
                "25%",
                "斜めの側桁と水平方向の長さの対比"
              ],
              [
                "クレーンのブーム",
                "10 m",
                "6 m",
                "10/6",
                "1.6667",
                "66.67%",
                "急なブームが投影より大幅に長い"
              ],
              [
                "飛行区間",
                "5 km",
                "4 km",
                "5/4",
                "1.25",
                "25%",
                "理想化した経路と水平変位の対比"
              ],
              [
                "斜めの支柱",
                "2 m",
                "1.2 m",
                "2/1.2",
                "1.6667",
                "66.67%",
                "支柱の長さと水平投影の対比"
              ],
              [
                "ハイキングコース",
                "100 m",
                "80 m",
                "100/80",
                "1.25",
                "25%",
                "直線区間と地図上の水平距離の対比"
              ],
              [
                "オーニングの支え",
                "3 m",
                "2.4 m",
                "3/2.4",
                "1.25",
                "25%",
                "支えの長さと水平方向の到達距離の対比"
              ],
              [
                "ケーブル",
                "25 m",
                "24 m",
                "25/24",
                "1.0417",
                "4.17%",
                "ほぼ水平なケーブルで余分な長さはわずか"
              ]
            ]
          }
        ],
        "imgAlt": "4つのパネル: はしごの比率1.25、スロープ1.0556、測量1.25、クレーンのブーム1.6667。それぞれに辺の名前が付いた直角三角形",
        "figcaption": "4つの実用的な計算: はしご、スロープ、測量、クレーンのブーム。それぞれに三角形、公式、比率を示しています。"
      },
      "sec-angle": {
        "h2": "セカントと角度の大きさの関係を理解する",
        "blocks": [
          {
            "kind": "p",
            "text": "セカントは基準角が大きくなると大きくなります。幾何学がその理由を説明します。角 [[A]] が小さいとき、隣辺は斜辺とほぼ同じ長さなので、比は1をわずかに上回る程度です。角度が広がると、隣辺は斜辺に占める割合が小さくなり、比は上がります。[[45^\\circ]] ではセカントは [[\\sqrt{2}]]、約1.4142です。[[60^\\circ]] ではちょうど2になります。斜辺が隣辺の2倍だからです。そして角度が [[90^\\circ]] に近づくと、隣辺はゼロに向かって縮み、セカントは際限なく大きくなります。"
          }
        ],
        "tables": [
          {
            "headers": [
              "角 [[A]]",
              "隣辺 [[b]]",
              "斜辺 [[c]]",
              "セカント比"
            ],
            "rows": [
              [
                "[[30^\\circ]]",
                "[[\\sqrt{3}]]",
                "2",
                "約1.1547"
              ],
              [
                "[[45^\\circ]]",
                "1",
                "[[\\sqrt{2}]]",
                "約1.4142"
              ],
              [
                "[[60^\\circ]]",
                "1",
                "2",
                "2"
              ],
              [
                "[[75^\\circ]]",
                "1",
                "約3.8637",
                "約3.8637"
              ]
            ]
          }
        ],
        "closingParagraphs": [
          "このパターンは単調です。角度が増えるたびにセカントも上がり、すべての鋭角で比は1を上回ります。表の測定値は説明のためのものであり、角度を決めるのは三角形の絶対的な大きさではなく比です。つまり、セカントは三角形の大きさではなく形を表します。"
        ],
        "imgAlt": "30度、45度、60度の3つの三角形。セカント値は1.1547、1.4142、2。角度が大きくなるとセカントも上がる",
        "figcaption": "角Aが大きくなると、隣辺は斜辺に占める割合が小さくなるため、sec(A)は上がります。"
      },
      "sec-hypotenuse": {
        "h2": "セカントを使って斜辺を求める方法",
        "blocks": [
          {
            "kind": "p",
            "text": "隣辺と角度が分かっている場合、セカントの公式を変形して斜辺を求めることができます。[[\\sec(A)=c/b]] から始めて、両辺に [[b]] を掛けます。"
          },
          {
            "kind": "p",
            "text": "[[[\\boxed{c=b\\sec(A)}]]]"
          },
          {
            "kind": "p",
            "text": "斜辺は、隣辺にその角度のセカントを掛けたものに等しくなります。隣辺 [[b=4\\,\\text{m}]]、角度 [[A=60^\\circ]] が分かっていて、[[\\sec(60^\\circ)=2]] であることを使うと、次のようになります。"
          },
          {
            "kind": "p",
            "text": "[[c=4\\times2]]"
          },
          {
            "kind": "p",
            "text": "[[\\boxed{c=8\\,\\text{m}}]]"
          },
          {
            "kind": "p",
            "text": "この角度では斜辺は隣辺の2倍であり、30-60-90の幾何形状と一致します。30度の向かい側の辺が斜辺の半分だからです。隣辺も同様に、さらに変形すれば求められます。"
          },
          {
            "kind": "p",
            "text": "[[[\\boxed{b=\\frac{c}{\\sec(A)}}]]]"
          },
          {
            "kind": "p",
            "text": "斜辺 [[c=10\\,\\text{m}]]、[[A=60^\\circ]] の場合、[[b=10/2]] なので [[\\boxed{b=5\\,\\text{m}}]] です。これらはすべて同じ公式の数学的な変形です。このページの計算機は辺の長さからセカント比を返すものであり、不足している辺を直接計算するものではありません。"
          }
        ]
      },
      "sec-recover": {
        "h2": "セカント比から角度を求める方法",
        "blocks": [
          {
            "kind": "p",
            "text": "セカント比と角度は異なる量です。一方は辺の無次元の比較であり、もう一方は度で測ります。セカント比が分かっている場合は、逆数でコサインを求めます。"
          },
          {
            "kind": "p",
            "text": "[[\\cos(A)=\\frac{1}{\\sec(A)}]]"
          },
          {
            "kind": "p",
            "text": "次に逆コサインで角度を求めます。"
          },
          {
            "kind": "p",
            "text": "[[[\\boxed{A=\\cos^{-1}\\left(\\frac{1}{\\sec(A)}\\right)}]]]"
          },
          {
            "kind": "p",
            "text": "[[\\sec(A)=1.25]] が与えられた場合、まずコサインを計算します。[[\\cos(A)=1/1.25=0.8]] です。次に [[A=\\cos^{-1}(0.8)]] となり、[[\\boxed{A\\approx36.87^\\circ}]] が得られます。これは別の角度計算であり、セカント比計算機が直接行うものではありません。答えを度で求める場合は関数電卓を度モードに設定してください。ラジアンモードでは同じ入力で約0.6435が返ります。これは単位が違うだけで同じ角度です。"
          }
        ]
      },
      "sec-mistakes": {
        "h2": "セカント計算でよくある間違い",
        "blocks": [
          {
            "kind": "p",
            "text": "セカントの間違いのほとんどは、分数がひっくり返っている、辺の呼び名が間違っている、単位の取り違いのいずれかです。結果を信じる前にこのリストを確認してください。"
          }
        ],
        "steps": [
          "<strong>公式を逆にして [[c/b]] の代わりに [[b/c]] を計算する。</strong> これは最も多い間違いで、セカントではなくコサインが返ります。[[c=5]]、[[b=4]] の場合、間違った順序では0.8、正しい順序では1.25になります。",
          "<strong>セカントとコサインを混同する。</strong> コサインは隣辺割る斜辺であり、セカントはその正確な逆です。答えが1未満になったら、ほぼ確実にコサインを計算しています。",
          "<strong>セカントとコセカントを混同する。</strong> どちらも分子に斜辺を使うので似ています。セカントは隣辺 [[b]] で割り、コセカントは対辺 [[a]] で割ります。問題が実際に与えているのはどちらの脚か確認してください。",
          "<strong>隣辺の代わりに対辺を使う。</strong> [[c/a]] を割るとコセカントになります。[[c=5]]、[[a=3]] の場合、1.6667になります。これは正しいコセカントですが、間違ったセカントです。",
          "<strong>分子に斜辺以外の辺を使う。</strong> セカントの分子は常に斜辺です。脚割る脚はタンジェントまたはコタンジェント、脚割る斜辺はサインまたはコサインです。",
          "<strong>隣辺と対辺を取り違える。</strong> 基準角が [[A]] から [[B]] に変わると呼び名が入れ替わります。[[b]] を決める前に、問題がどの角を指しているか必ず確認してください。",
          "<strong>セカントが度で測られる角度だと思い込む。</strong> 1.25という結果は比であり、[[1.25^\\circ]] ではありません。これを度として扱うと、その後の計算に意味のない値が入り込みます。",
          "<strong>比にメートルやセンチメートルを付けて報告する。</strong> 割り算で単位は打ち消し合うので、「1.25 m」は間違いです。素の数値を書き、単位は入力の測定値に残してください。",
          "<strong>ゼロや負の辺の長さを入力する。</strong> 三角形にゼロや負の辺はあり得ないので、このような入力は入力ミスか測定値の不足を示し、正当な例外ではありません。",
          "<strong>斜辺より長い隣辺を入力する。</strong> 斜辺は常に最も長い辺です。[[b \\gt c]] なら、入力が入れ替わっているか、その三角形はあり得ません。",
          "<strong>単位を混ぜる。</strong> 斜辺5 mに対して隣辺40 cmでは0.125という無意味な数になります。先に単位をそろえてください。5 mと4 mなら正しい1.25になります。",
          "<strong>早すぎる丸め。</strong> 途中の割り算を小数第2位で丸めて計算を続けると、誤差が積み重なります。すべてのステップでは精度を保ち、最後の答えだけを丸めてください。",
          "<strong>直角三角形のセカントは1になるはずと思い込む。</strong> セカントがちょうど1になる直角三角形はありません。1より大きい値を期待し、ちょうど1になったら入力が逆か三角形が退化していると考えてください。",
          "<strong>コサインの逆数と逆コサインを混同する。</strong> [[1/\\cos(A)]] はセカントという比であり、[[\\cos^{-1}]] は角度を返す逆コサインです。名前が似ているため実際の間違いにつながるので、記法を注意深く読みましょう。",
          "<strong>セカントだけで三角形の絶対的な大きさが決まると思う。</strong> セカントが表すのは形であり大きさではありません。斜辺5 cmのものから5 kmのものまで、無数の三角形がセカント1.25を共有します。比が決めるのは比率だけであり、実際の長さには少なくとも1つの辺の測定値が必要です。"
        ],
        "closingParagraphs": [
          "<strong>誤りと正解:</strong> 斜辺 [[c=5]]、隣辺 [[b=4]] が与えられた場合。",
          "<strong>誤り:</strong> [[4/5=0.8]]。これはコサインであり、セカントではありません。分子と分母が逆になっています。",
          "<strong>正解:</strong> [[\\sec(A)=5/4=1.25]]。",
          "<strong>検証:</strong> [[\\cos(A)=0.8]] であり、[[1/0.8=1.25]] です。逆数の検算で結果が確認でき、答えは1より上になっています。正しいセカントはすべてそうでなければなりません。"
        ]
      },
      "sec-verify": {
        "h2": "セカントの計算結果が正しいか確認する方法",
        "blocks": [
          {
            "kind": "p",
            "text": "正しく退化していない直角三角形では、すべての辺が正で斜辺が最も長く、すなわち [[0 \\lt b \\lt c]] が必要なので、セカントの結果は1より大きくなければなりません。"
          },
          {
            "kind": "p",
            "text": "[[[\\boxed{\\sec(A)=\\frac{c}{b} \\gt 1}]]]"
          },
          {
            "kind": "p",
            "text": "両方の測定値は互換性のある単位でなければなりません。1以下の結果は通常、入力の逆転、辺の特定ミス、単位の不整合、または三角形の寸法自体がおかしいことを示します。"
          },
          {
            "kind": "h3",
            "text": "方法1: コサインの逆数で確認する"
          },
          {
            "kind": "p",
            "text": "[[\\cos(A)=b/c]] を確かめてから、[[\\sec(A)=1/\\cos(A)]] を確認します。[[b=4]]、[[c=5]] の場合、[[\\cos(A)=4/5=0.8]] なので [[\\sec(A)=1/0.8=1.25]] です。2つの経路が一致しなければ、分数が逆か辺の呼び名が間違っています。"
          },
          {
            "kind": "h3",
            "text": "方法2: 三平方の定理で確認する"
          },
          {
            "kind": "p",
            "text": "対辺が分かっている場合や必要な場合は、[[a=\\sqrt{c^2-b^2}]] を計算します。[[b=4]]、[[c=5]] の場合、[[a=\\sqrt{25-16}=3]] であり、[[3^2+4^2=5^2]] です。これで3-4-5の直角三角形の寸法が確認できます。ここでの対辺は検証用の値であり、セカントの基本公式の一部ではありません。"
          },
          {
            "kind": "h3",
            "text": "方法3: 逆コサインで確認する"
          },
          {
            "kind": "p",
            "text": "セカント比1.25の場合、[[A=\\cos^{-1}(1/1.25)]]、すなわち [[A=\\cos^{-1}(0.8)\\approx36.87^\\circ]] です。セカントが1をやや上回る程度なので、角度は [[45^\\circ]] を十分下回るはずです。そうでなければ、辺の呼び名が入れ替わっている可能性が高いです。わずかな差は丸めから生じることがあります。"
          }
        ]
      },
      "sec-vs": {
        "h2": "セカントとコサイン、サイン、コセカントの違い",
        "blocks": [
          {
            "kind": "p",
            "text": "各比は、同じ基準角と辺の呼び名を使って、異なる辺のペアを比べます。"
          }
        ],
        "tables": [
          {
            "headers": [
              "比",
              "公式",
              "比べるもの"
            ],
            "rows": [
              [
                "サイン",
                "sin(A) = a/c",
                "対辺と斜辺"
              ],
              [
                "コサイン",
                "cos(A) = b/c",
                "隣辺と斜辺"
              ],
              [
                "タンジェント",
                "tan(A) = a/b",
                "対辺と隣辺"
              ],
              [
                "セカント",
                "sec(A) = c/b",
                "斜辺と隣辺"
              ],
              [
                "コセカント",
                "csc(A) = c/a",
                "斜辺と対辺"
              ],
              [
                "コタンジェント",
                "cot(A) = b/a",
                "隣辺と対辺"
              ]
            ]
          }
        ],
        "closingParagraphs": [
          "セカントとコサインは逆数のペアです。[[\\sec(A)=1/\\cos(A)]] であり、[[\\cos(A)=0.8]] なら [[\\sec(A)=1.25]] です。公式が斜辺割る隣辺を求めるとき、傾斜した長さをその水平投影と比べるとき、または分かっている関係が最長の辺から始まるときはセカントを使いましょう。隣辺割る斜辺ならコサイン、斜辺に対する対辺ならサイン、斜辺を対辺と比べるならコセカントを使います。",
          "隣接する比については、<a href=\"/sine-ratio-calculator/\" class=\"text-primary hover:underline\">サイン比計算機</a>、<a href=\"/cosine-ratio-calculator/\" class=\"text-primary hover:underline\">コサイン比計算機</a>、<a href=\"/tangent-ratio-calculator/\" class=\"text-primary hover:underline\">タンジェント比計算機</a>、<a href=\"/cosecant-ratio-calculator/\" class=\"text-primary hover:underline\">コセカント比計算機</a>、<a href=\"/cotangent-ratio-calculator/\" class=\"text-primary hover:underline\">コタンジェント比計算機</a>を参照してください。"
        ]
      },
      "sec-related": {
        "h2": "関連する三角比計算機を探す",
        "related": [
          {
            "name": "サイン比計算機"
          },
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
            "name": "コタンジェント比計算機"
          },
          {
            "name": "直角三角形の角度計算機"
          }
        ]
      },
      "sec-conclusion": {
        "h2": "セカント比を自信を持って使う",
        "blocks": [
          {
            "kind": "p",
            "text": "セカントはコサインをひっくり返したものです。斜辺を隣辺で割れば、傾斜した長さがその水平方向の足跡よりどれだけ長いかが分かります。公式 [[\\sec(A)=c/b]] に必要な測定値は2つだけ、答えは常に1より大きい無次元の数であり、基準角が大きくなると答えも大きくなります。不足している辺が必要なときは [[c=b\\sec(A)]] で斜辺を求め、角度が必要なときは [[A=\\cos^{-1}(1/\\sec(A))]] で求めます。はしご、たる木、スロープ、教科書の3-4-5のいずれでも、方法は変わりません。斜辺を特定し、隣辺を特定し、割り算し、コサインの逆数で検算します。"
          }
        ]
      }
    },
    "faqs": [
      {
        "question": "直角三角形のセカント比の公式は？",
        "answer": "sec(A) = c / b です。斜辺cを角Aに隣接する辺で割ります。斜辺5 cm、隣辺4 cmの場合、結果は 5/4 = 1.25 です。この小数そのものが答えのすべてであり、角度ではなく無次元の比です。"
      },
      {
        "question": "セカントとコサインの関係は？",
        "answer": "セカントはコサインの逆数です。sec(A) = 1 / cos(A) です。cos(A) = 4/5 = 0.8 の場合、sec(A) = 1/0.8 = 1.25 になります。2つの比は同じ角度を逆方向から表したものであり、逆数の検算はセカント計算を確認する最も速い方法です。"
      },
      {
        "question": "直角三角形でセカントが1より大きくなるのはなぜですか",
        "answer": "正しく退化していない直角三角形では、斜辺はどちらの脚より必ず長く、c > b > 0 です。大きい長さを小さい長さで割れば、比は常に1より大きくなります。すべての鋭角の基準角で sec(A) = c/b > 1 です。"
      },
      {
        "question": "セカントが1になることはありますか",
        "answer": "実際の直角三角形の普通の鋭角では、ありません。セカントがちょうど1になるには斜辺と隣辺が等しくなければならず、そうなると三角形は平らな線になってしまいます。1は角Aが0度に近づくときに近づくだけの極限値であり、本物の三角形が生み出す値ではありません。"
      },
      {
        "question": "セカントの値1.25は何を意味しますか",
        "answer": "斜辺が隣辺の1.25倍の長さ、つまり25パーセント長いということです。角度が1.25度という意味ではありませんし、三角形が1.25単位の大きさという意味でもありません。セカントは2つの長さの無次元の比較です。"
      },
      {
        "question": "セカントに測定単位はありますか",
        "answer": "ありません。両方の入力は同じ単位で測った長さなので、単位は打ち消し合います。5 m / 4 m = 1.25 は、500 cm / 400 cm = 1.25 とまったく同じです。セカントは素の数値で報告し、度、メートル、フィートを付けないでください。"
      },
      {
        "question": "辺の長さからセカントを計算する方法は",
        "answer": "斜辺cと隣辺bを同じ単位で測り、両方が正でcがbより長いことを確認してから割ります。sec(A) = c / b です。このページでは、1つ目の欄に斜辺、2つ目の欄に隣辺を入力し、互換性のある単位を選んで「Calculate sec(A)」をクリックします。"
      },
      {
        "question": "セカントを使って斜辺を求める方法は",
        "answer": "公式を変形して c = b * sec(A) とします。隣辺が4 m、角Aが60度の場合、sec(60 deg) = 2 なので c = 4 * 2 = 8 m です。これは手計算による変形です。このページの計算機は辺の長さから比を返すものであり、不足している辺を返すものではありません。"
      },
      {
        "question": "セカント比から角度を求める方法は",
        "answer": "逆数を取ってコサイン比を求め、逆コサインを適用します。A = cos^-1(1 / sec(A)) です。sec(A) = 1.25 の場合、コサイン比は0.8なので A = cos^-1(0.8)、約36.87度です。関数電卓は先に度モードに設定してください。このページの計算機は角度ではなく比を返します。"
      },
      {
        "question": "セカントとコセカントの違いは",
        "answer": "セカントは斜辺を隣辺で割り (c/b)、コセカントは斜辺を対辺で割ります (c/a)。どちらも斜辺を使う逆数の比ですが、使う脚が違うため、答える問いも異なり、互いに置き換えることはできません。"
      },
      {
        "question": "対辺が分からなくてもセカントを計算できますか",
        "answer": "できます。セカントの基本公式では斜辺と隣辺だけを使うので、対辺は計算に登場しません。対辺が役立つのは、三平方の定理で三角形を検証するとき、またはサイン、タンジェント、コセカントを使うときだけです。"
      },
      {
        "question": "セカントは実際の測定でどう使われますか",
        "answer": "セカントは傾斜した長さをその水平投影と比べます。はしごと地上距離、屋根のたる木と水平の長さ、ケーブルと端点間の水平距離、といった具合です。この比で、傾斜した経路がその投影よりどれだけ長いかが分かり、水平方向の図面から材料の長さを見積もるのに役立ちます。"
      }
    ],
    "faqHeading": "よくある質問",
    "relatedHeading": "関連する三角比計算機を探す"
  },
  "ko": {
    "tocHeading": "이 가이드에서",
    "tocItems": {
      "sec-intro": "시컨트 비율 계산기란 무엇인가요?",
      "sec-triangle": "인접변과 빗변 이해하기",
      "sec-whatis": "시컨트 비율 이해하기",
      "sec-formula": "시컨트 공식의 원리",
      "sec-howto": "시컨트 비율 계산기 사용 방법",
      "sec-examples": "시컨트 계산 단계별 예제",
      "sec-applications": "시컨트 비율의 실생활 예제",
      "sec-angle": "시컨트와 각도 크기의 관계 이해하기",
      "sec-hypotenuse": "시컨트로 빗변 구하기",
      "sec-recover": "시컨트 비율로 각도 구하기",
      "sec-mistakes": "시컨트 계산 시 흔한 실수",
      "sec-verify": "시컨트 계산 결과가 맞는지 확인하기",
      "sec-vs": "시컨트와 코사인, 사인, 코시컨트 비교",
      "sec-faq": "자주 묻는 질문",
      "sec-related": "관련 삼각함수 계산기 살펴보기"
    },
    "sections": {
      "sec-intro": {
        "h2": "시컨트 비율 계산기란 무엇인가요?",
        "blocks": [
          {
            "kind": "p",
            "text": "시컨트 비율 계산기는 하나의 질문에 답합니다. 직각삼각형의 예각에서 가장 긴 변은 각도에 인접한 변과 어떻게 비교될까요? 빗변과 인접변을 입력하면 도구는 빗변을 인접변으로 나누어 [[\\sec(A)=c/b]]를 반환합니다. 빗변이 5cm이고 인접변이 4cm라면 계산식은 [[5/4=1.25]]입니다. 빗변이 인접변의 1.25배 길이이며, 다시 말해 25% 더 길다는 뜻입니다. 이 소수 값이 답의 전부입니다. 나눗셈 과정에서 cm가 소거되므로 무차원 비율이며, 도 단위의 각도가 아니므로 1.25를 [[1.25^\\circ]]로 읽어서는 안 됩니다. 대변은 이 계산에 전혀 들어가지 않으며, 빗변과 인접변만으로 충분합니다. 시컨트는 코사인의 역수이기도 하므로 많은 교과서에서 [[\\cos(A)]]를 뒤집은 형태로 소개합니다."
          }
        ]
      },
      "sec-triangle": {
        "h2": "인접변과 빗변 이해하기",
        "blocks": [
          {
            "kind": "h3",
            "text": "직각삼각형이란 무엇인가요?"
          },
          {
            "kind": "p",
            "text": "직각삼각형은 정확히 [[90^\\circ]]인 각을 하나 가집니다. 수직으로 만나는 두 직선이 이루는 각으로, 벽과 수평인 바닥이 만나는 모양과 같습니다. 빗변은 그 직각의 맞은편에 자리하며, 모서리를 가로지르는 전체 대각선을 커버해야 하므로 항상 가장 긴 변입니다. 나머지 두 각은 남은 90도를 나누어 가지므로 둘 다 예각입니다. 두 변은 직각에서 만나 서로 수직을 이루며, 빗변과의 이러한 관계 덕분에 직각삼각형 삼각함수가 가능합니다."
          },
          {
            "kind": "h3",
            "text": "인접변이란 무엇인가요?"
          },
          {
            "kind": "p",
            "text": "인접변 [[b]]는 빗변이 아닌 변 중에서 기준각 [[A]]에 닿는 변입니다. 실생활 문제에서는 수평 길이의 역할을 하는 경우가 많습니다. 사다리 밑단에서 벽까지의 지면 거리, 지붕 서까래의 수평 투영, 두 측량 지점 사이의 수평 거리 등이 그 예입니다. 시컨트 식의 분모에 들어갑니다. 어느 변이 인접변에 해당하는지는 선택한 기준각에 따라 달라지므로, 각도 [[A]]에서 각도 [[B]]로 바꾸면 인접변과 대변의 이름이 서로 바뀝니다."
          },
          {
            "kind": "h3",
            "text": "빗변이란 무엇인가요?"
          },
          {
            "kind": "p",
            "text": "빗변 [[c]]는 직각 맞은편에 있는 변입니다. 모든 도형에서는 [[90^\\circ]] 모서리를 표시하는 작은 정사각형과 마주보고 있으며, 어느 변보다도 반드시 깁니다. 실생활 문제에서는 기울어진 길이의 역할을 하는 경우가 많습니다. 사다리, 경사로 표면, 서까래, 케이블, 대각선 받침대, 직선 경로 등이 그 예입니다. 시컨트 식의 분자에 들어가며, 이것이 모든 시컨트 값이 1보다 크게 나오는 이유입니다."
          },
          {
            "kind": "h3",
            "text": "대변이란 무엇인가요?"
          },
          {
            "kind": "p",
            "text": "대변 [[a]]는 각도 [[A]]의 정점에 전혀 닿지 않고 정면 맞은편에 자리합니다. 기본 시컨트 계산에서는 아무 역할도 하지 않으므로 계산기가 이 값을 묻지 않습니다. 피타고라스 정리를 이용해 알려진 두 길이가 진짜 직각삼각형을 이루는지 검증할 때 관련되며, 대변은 사인, 탄젠트, 코시컨트에서는 두 개의 작업 변 중 하나가 되면서 중심 역할을 맡습니다."
          }
        ],
        "imgAlt": "각도 A가 왼쪽 아래에 있는 직각삼각형, 금색 빗변 c, 파란색 인접변 b, sec(A)=c/b",
        "figcaption": "각도 A는 왼쪽 아래에 있습니다. 시컨트는 금색 빗변 c와 파란색 인접변 b를 사용하며, 대변 a는 사용하지 않습니다."
      },
      "sec-whatis": {
        "h2": "시컨트 비율 이해하기",
        "blocks": [
          {
            "kind": "p",
            "text": "시컨트는 전체 기울어진 변을 기준각 옆의 변과 비교합니다."
          },
          {
            "kind": "p",
            "text": "[[[\\sec(A)=\\frac{c}{b}]]]"
          },
          {
            "kind": "p",
            "text": "여기서 [[\\sec(A)]]는 각도 [[A]]의 시컨트, [[c]]는 빗변, [[b]]는 인접변입니다. 즉 인접변이 빗변에 몇 번 들어가는지를 나타냅니다."
          },
          {
            "kind": "h3",
            "text": "코사인의 역수로서의 시컨트"
          },
          {
            "kind": "p",
            "text": "코사인은 인접변을 빗변으로 나눈 값 [[\\cos(A)=b/c]]입니다. 역수를 취하면 그 분수가 뒤집혀 [[1/\\cos(A)=c/b]]가 되며, 이는 정확히 시컨트 식입니다."
          },
          {
            "kind": "p",
            "text": "[[[\\boxed{\\sec(A)=\\frac{1}{\\cos(A)}=\\frac{c}{b}}]]]"
          },
          {
            "kind": "p",
            "text": "[[\\cos(A)=4/5=0.8]]인 경우 역수는 [[\\sec(A)=1/0.8=1.25]]입니다. 같은 삼각형을 반대 방향에서 본 것입니다. 이 구분이 중요한 이유는 역코사인, 즉 [[\\cos^{-1}]]이 전혀 다른 개념이기 때문입니다. 역코사인은 코사인 값으로부터 각도를 되찾는 함수인 반면, [[1/\\cos(A)]]은 역수 코사인, 즉 비율이지 각도가 아닙니다."
          },
          {
            "kind": "h3",
            "text": "시컨트 값 1.25는 무엇을 의미하나요?"
          },
          {
            "kind": "p",
            "text": "시컨트가 1.25라는 것은 빗변이 인접변의 1.25배 길이라는 뜻입니다. 백분율 차이는 [[(1.25-1)\\times100=25]]이므로, 빗변은 인접변보다 25% 깁니다. 이는 각도가 [[1.25^\\circ]]라는 뜻도 아니고, 삼각형이 1.25 단위를 잰다는 뜻도 아닙니다. 시컨트는 비교이지 측정이 아닙니다."
          },
          {
            "kind": "h3",
            "text": "시컨트가 1보다 큰 이유"
          },
          {
            "kind": "p",
            "text": "유효한 퇴화되지 않은 직각삼각형에서는 빗변이 어느 변보다도 길므로 [[c \\gt b \\gt 0]]입니다. 따라서 빗변을 인접변으로 나누면 1보다 큰 비율이 나옵니다."
          },
          {
            "kind": "p",
            "text": "[[[\\boxed{\\frac{c}{b} \\gt 1}]]]"
          },
          {
            "kind": "p",
            "text": "퇴화되지 않은 직각삼각형의 일반적인 예각 기준각에서는 결과가 정확히 1이 될 수 없습니다. 1이 되려면 빗변과 인접변이 같아야 하며, 그러면 삼각형이 납작하게 펴져 직선이 되기 때문입니다. 값 1은 극한값으로, 각도가 [[0^\\circ]]에 가까워질 때만 접근하는 값입니다."
          },
          {
            "kind": "h3",
            "text": "시컨트가 코사인의 역수인 이유"
          },
          {
            "kind": "p",
            "text": "이 관계는 두 식에서 직접 도출됩니다. 코사인은 인접변을 빗변으로 나누고, 시컨트는 빗변을 인접변으로 나눕니다."
          },
          {
            "kind": "p",
            "text": "[[\\cos(A)=\\frac{b}{c}]]"
          },
          {
            "kind": "p",
            "text": "[[\\sec(A)=\\frac{c}{b}]]"
          },
          {
            "kind": "p",
            "text": "두 값을 곱하면 모든 것이 소거되어 1이 됩니다."
          },
          {
            "kind": "p",
            "text": "[[[\\cos(A)\\sec(A)=\\frac{b}{c}\\times\\frac{c}{b}=1]]]"
          },
          {
            "kind": "p",
            "text": "이 항등식은 실용적인 검증 도구입니다. 같은 변들로 코사인을 구한 뒤 역수를 취하면 시컨트 결과와 정확히 일치해야 합니다. 불일치가 나오면 분수가 뒤집혔거나 변 이름이 잘못 붙은 것입니다."
          },
          {
            "kind": "h3",
            "text": "시컨트에 단위가 없는 이유"
          },
          {
            "kind": "p",
            "text": "시컨트는 길이 하나를 다른 길이로 나누므로 단위가 소거됩니다. 예를 들어 다음과 같습니다."
          },
          {
            "kind": "p",
            "text": "[[[\\frac{5\\,\\text{m}}{4\\,\\text{m}}=1.25]]]"
          },
          {
            "kind": "p",
            "text": "미터가 사라지고 순수한 숫자만 남습니다. 500cm와 400cm에서도 같은 비율이 나오며, 단위가 일치하는 어떤 쌍에서도 마찬가지입니다. 그래서 빗변은 미터로, 인접변은 센티미터로 재는 식의 단위 혼용은 계산이 시작되기도 전에 계산을 망가뜨립니다."
          },
          {
            "kind": "h3",
            "text": "시컨트와 코시컨트"
          },
          {
            "kind": "p",
            "text": "시컨트와 코시컨트는 모두 빗변을 분자에 두는 역수 비율이지만, 분모에 두는 변이 다릅니다."
          },
          {
            "kind": "p",
            "text": "[[\\sec(A)=\\frac{c}{b}]]"
          },
          {
            "kind": "p",
            "text": "[[\\csc(A)=\\frac{c}{a}]]"
          },
          {
            "kind": "p",
            "text": "시컨트는 빗변을 인접변과 짝짓고, 코시컨트는 빗변을 대변과 짝짓습니다. 둘은 서로 바꿔 쓸 수 없으며, 잘못 고르면 삼각형에 대한 다른 질문에 답하게 됩니다."
          }
        ],
        "imgAlt": "세 단계: 3-4-5 삼각형, 코사인 cos(A)=4/5=0.8, 시컨트 sec(A)=5/4=1.25, 역수 관계",
        "figcaption": "세 단계: 3-4-5 삼각형에 표시하고, 코사인 cos(A) = 4/5를 구한 뒤, 분수를 뒤집어 sec(A) = 5/4를 구합니다."
      },
      "sec-formula": {
        "h2": "시컨트 공식의 원리",
        "blocks": [
          {
            "kind": "p",
            "text": "정의는 말로 시작해 기호로 이어집니다. 시컨트는 빗변을 인접변으로 나눈 값입니다."
          },
          {
            "kind": "p",
            "text": "[[[\\sec(A)=\\frac{\\text{Hypotenuse}}{\\text{Adjacent}}]]]"
          },
          {
            "kind": "p",
            "text": "표준 표기법으로는 다음과 같습니다."
          },
          {
            "kind": "p",
            "text": "[[[\\boxed{\\sec(A)=\\frac{c}{b}}]]]"
          },
          {
            "kind": "p",
            "text": "빗변이 분자에 들어가는 이유는 시컨트가 묻는 질문이 기울어진 변이 수평 길이와 비교해 얼마나 긴지이기 때문이며, 인접변이 분모에 들어가는 이유는 비교의 기준이 되는 길이가 인접변이기 때문입니다."
          },
          {
            "kind": "h3",
            "text": "완전 풀이 예제: 3-4-5 직각삼각형"
          },
          {
            "kind": "p",
            "text": "인접변 [[b=4\\,\\text{cm}]], 대변 [[a=3\\,\\text{cm}]], 빗변 [[c=5\\,\\text{cm}]]이 주어졌을 때, 식을 단계별로 풀어 봅니다."
          },
          {
            "kind": "p",
            "text": "<strong>1단계: 식을 씁니다.</strong> [[\\sec(A)=c/b]]."
          },
          {
            "kind": "p",
            "text": "<strong>2단계: 알려진 값을 대입합니다.</strong> [[\\sec(A)=5/4]]."
          },
          {
            "kind": "p",
            "text": "<strong>3단계: 나눕니다.</strong> [[\\boxed{\\sec(A)=1.25}]]."
          },
          {
            "kind": "p",
            "text": "<strong>4단계: 결과를 해석합니다.</strong> 빗변은 인접변의 1.25배이며, 25% 더 깁니다. 5cm 사다리가 4m 수평 거리를 가로지를 때 이렇게 됩니다. 기하학은 단위에 관심이 없고 비율에만 관심이 있습니다."
          },
          {
            "kind": "p",
            "text": "<strong>5단계: 코사인으로 검증합니다.</strong> [[\\cos(A)=4/5=0.8]]이며, [[1/0.8=1.25]]입니다. 코사인과 시컨트는 서로 정확한 역수이므로 역수 검사가 시컨트 결과를 확인해 줍니다."
          },
          {
            "kind": "p",
            "text": "<strong>6단계: 삼각형을 검증합니다.</strong> [[3^2+4^2=5^2]]이며, 이는 [[9+16=25]]입니다. 변의 길이들이 피타고라스 정리를 만족하므로 진짜 직각삼각형을 이루며, 시컨트 값은 신뢰할 수 있습니다."
          }
        ]
      },
      "sec-howto": {
        "h2": "시컨트 비율 계산기 사용 방법",
        "blocks": [
          {
            "kind": "p",
            "text": "위의 계산기는 빗변 [[c]]와 인접변 [[b]] 두 입력을 받아 [[\\sec(A)]]를 반환합니다. 다음 단계를 순서대로 따르세요."
          }
        ],
        "steps": [
          "<strong>기준각 [[A]]를 정합니다.</strong> 비율의 모든 변 이름은 이 각도를 기준으로 정의되므로, 변 길이에 손대기 전에 먼저 정하세요.",
          "<strong>빗변 [[c]]를 찾습니다.</strong> 직각 맞은편에 있으며 삼각형에서 가장 긴 변입니다. 도형에서는 기울어진 변입니다.",
          "<strong>인접변 [[b]]를 찾습니다.</strong> 각도 [[A]]에 닿고 빗변이 아닌 변으로, 서로 수직인 두 변 중 하나입니다.",
          "<strong>두 변의 길이를 재거나 구합니다.</strong> 같은 측정 도구와 같은 단위로 재거나, 계속하기 전에 한쪽 측정을 변환하세요.",
          "<strong>첫 번째 입력 칸에 빗변을 입력합니다.</strong> 분수의 분자에 해당하므로 여기서 실수하면 답 전체가 틀어집니다.",
          "<strong>두 번째 입력 칸에 인접변을 입력합니다.</strong> 분모에 해당하며, 각도 [[A]] 맞은편의 변이 아니라 각도 옆의 변이어야 합니다.",
          "<strong>단위 선택기를 이용해 호환되는 측정 단위를 선택합니다.</strong> 두 칸 모두 같은 단위이거나 변환된 동등 단위이어야 하며, 그렇지 않으면 비율이 틀립니다.",
          "<strong>두 측정값이 모두 양수인지 확인합니다.</strong> 길이가 0이거나 음수인 것은 삼각형에서 의미가 없으며, 입력 오류 신호입니다.",
          "<strong>빗변이 인접변보다 긴지 확인합니다.</strong> 그렇지 않다면 변 이름이 잘못 붙었거나 해당 수치로는 직각삼각형을 만들 수 없습니다.",
          "<strong>Calculate sec(A)를 클릭합니다.</strong> 도구가 나눗셈 [[c/b]]를 수행하고 비율을 표시합니다.",
          "<strong>결과로 나온 시컨트 비율을 읽습니다.</strong> 단위가 없는 소수이며, 보통 소수점 넷째 자리까지 표시되어 추가 계산에 바로 쓸 수 있습니다.",
          "<strong>결과가 1보다 큰지 확인합니다.</strong> 유효한 퇴화되지 않은 직각삼각형에서 예각 기준각에 대해서는 [[\\sec(A) \\gt 1]]입니다. 1 이하의 값이 나오면 앞 단계에서 뭔가 잘못된 것입니다.",
          "<strong>입력을 지우고 새로 계산하고 싶으면 Reset을 사용합니다.</strong> 입력 칸과 결과가 초기 상태로 돌아갑니다."
        ],
        "closingParagraphs": [
          "계산기는 대변도 각도 입력도 필요로 하지 않습니다. 기본 시컨트 비율은 두 길이만으로 완전히 정해지기 때문입니다. 또한 각도나 빠진 변을 되찾아 주지도 않습니다. 그런 경우에는 이 가이드 뒤쪽의 변형된 식을 이용해 수동으로 구할 수 있습니다."
        ]
      },
      "sec-examples": {
        "h2": "시컨트 계산 단계별 예제",
        "blocks": [
          {
            "kind": "p",
            "text": "이 네 예제는 시컨트 값이 외워둘 만한 고전 삼각형을 사용합니다. 삼각함수에서 계속 다시 등장하기 때문입니다."
          },
          {
            "kind": "h3",
            "text": "예제 1: 3-4-5 직각삼각형"
          },
          {
            "kind": "p",
            "text": "[[b=4\\,\\text{cm}]], [[a=3\\,\\text{cm}]], [[c=5\\,\\text{cm}]]이 주어졌을 때:"
          },
          {
            "kind": "p",
            "text": "[[\\sec(A)=\\frac{5}{4}]]"
          },
          {
            "kind": "p",
            "text": "[[\\boxed{\\sec(A)=1.25}]]"
          },
          {
            "kind": "p",
            "text": "빗변은 인접변보다 25% 깁니다. 교과서에서 가장 흔한 시컨트 예제이며, 1.25라는 결과는 정확합니다."
          },
          {
            "kind": "h3",
            "text": "예제 2: 5-12-13 직각삼각형"
          },
          {
            "kind": "p",
            "text": "인접변 [[b=12\\,\\text{m}]], 대변 [[a=5\\,\\text{m}]], 빗변 [[c=13\\,\\text{m}]]이 주어졌을 때:"
          },
          {
            "kind": "p",
            "text": "[[\\sec(A)=\\frac{13}{12}]]"
          },
          {
            "kind": "p",
            "text": "[[\\boxed{\\sec(A)\\approx1.0833}]]"
          },
          {
            "kind": "p",
            "text": "빗변은 인접변보다 약 8.33% 깁니다. 이 삼각형은 13이 완만한 지붕 경사에 가깝기 때문에 건축 문제에 등장합니다."
          },
          {
            "kind": "h3",
            "text": "예제 3: 45-45-90 삼각형"
          },
          {
            "kind": "p",
            "text": "인접변 [[b=1\\,\\text{cm}]], 대변 [[a=1\\,\\text{cm}]], 빗변 [[c=\\sqrt{2}\\,\\text{cm}]]이 주어졌을 때:"
          },
          {
            "kind": "p",
            "text": "[[\\sec(45^\\circ)=\\frac{\\sqrt{2}}{1}]]"
          },
          {
            "kind": "p",
            "text": "[[\\boxed{\\sec(45^\\circ)=\\sqrt{2}\\approx1.4142}]]"
          },
          {
            "kind": "p",
            "text": "빗변은 어느 변의 약 1.4142배입니다. 45도에서는 두 변이 같으므로 시컨트와 코시컨트가 같아지며, 둘 다 [[\\sqrt{2}]]입니다."
          },
          {
            "kind": "h3",
            "text": "예제 4: 30-60-90 삼각형"
          },
          {
            "kind": "p",
            "text": "기준각 [[A=30^\\circ]]에 대해 인접변 [[b=\\sqrt{3}\\,\\text{cm}]], 대변 [[a=1\\,\\text{cm}]], 빗변 [[c=2\\,\\text{cm}]]을 사용합니다."
          },
          {
            "kind": "p",
            "text": "[[\\sec(30^\\circ)=\\frac{2}{\\sqrt{3}}]]"
          },
          {
            "kind": "p",
            "text": "[[\\boxed{\\sec(30^\\circ)\\approx1.1547}]]"
          },
          {
            "kind": "p",
            "text": "빗변은 인접변보다 약 15.47% 깁니다. 60도에서는 변이 바뀌면서 같은 2:1 빗변 비율이 나타나며, 이때 시컨트는 2가 됩니다."
          }
        ]
      },
      "sec-applications": {
        "h2": "시컨트 비율의 실생활 예제",
        "blocks": [
          {
            "kind": "p",
            "text": "시컨트는 기울어진 길이를 수평 투영과 비교해야 하는 곳에서 진가를 발휘합니다. 각 예제에서 직각삼각형은 실제 상황을 단순화한 기하 모형이며, 명시된 가정 덕분에 그 단순화가 정직하게 유지됩니다."
          },
          {
            "kind": "h3",
            "text": "예제 5: 사다리의 시컨트 비율 계산하기"
          },
          {
            "kind": "p",
            "text": "길이 5m 사다리가 있고, 밑단이 수직 벽에서 4m 떨어져 있습니다. 각도 [[A]]는 사다리와 수평 지면 사이에 자리합니다. 빗변은 사다리 자체 [[c=5\\,\\text{m}]]이며, 인접변은 수평 지면 거리 [[b=4\\,\\text{m}]]입니다."
          },
          {
            "kind": "p",
            "text": "[[\\sec(A)=\\frac{5}{4}]]"
          },
          {
            "kind": "p",
            "text": "[[\\boxed{\\sec(A)=1.25}]]"
          },
          {
            "kind": "p",
            "text": "사다리는 수평 지면 투영보다 25% 깁니다. 이 비율만으로 사다리가 안전하게 설치되었는지는 알 수 없습니다. 사다리 안전은 작업 각도와 받침 상태에 달려 있으며, 시컨트만으로는 판단할 수 없습니다."
          },
          {
            "kind": "h3",
            "text": "예제 6: 지붕 서까래의 시컨트 비율 계산하기"
          },
          {
            "kind": "p",
            "text": "지붕 서까래의 기울어진 길이는 6.5m, 수평 거리는 6m입니다. 서까래가 빗변 [[c=6.5\\,\\text{m}]]이며, 수평 거리가 인접변 [[b=6\\,\\text{m}]]입니다."
          },
          {
            "kind": "p",
            "text": "[[\\sec(A)=\\frac{6.5}{6}]]"
          },
          {
            "kind": "p",
            "text": "[[\\boxed{\\sec(A)\\approx1.0833}]]"
          },
          {
            "kind": "p",
            "text": "서까래는 수평 거리보다 약 8.33% 깁니다. 지붕공들은 이 관계를 늘 역으로 사용합니다. 도면에서 수평 거리를 재고 시컨트를 곱해 서까래 재료를 주문합니다. 이 비율은 완전한 지붕 설계나 구조 평가가 아닙니다."
          },
          {
            "kind": "h3",
            "text": "예제 7: 경사로의 시컨트 비율 평가하기"
          },
          {
            "kind": "p",
            "text": "단순화된 경사로의 기울어진 길이는 9.5m, 수평 거리는 9m입니다. 기울어진 표면이 빗변 [[c=9.5\\,\\text{m}]]이며, 수평 거리가 인접변 [[b=9\\,\\text{m}]]입니다."
          },
          {
            "kind": "p",
            "text": "[[\\sec(A)=\\frac{9.5}{9}]]"
          },
          {
            "kind": "p",
            "text": "[[\\boxed{\\sec(A)\\approx1.0556}]]"
          },
          {
            "kind": "p",
            "text": "경사로의 기울어진 길이는 수평 투영보다 약 5.56% 깁니다. 작은 시컨트는 완만한 경사를 반영하지만, 이 비율만으로 접근성이나 건축 규정 준수를 판단할 수는 없습니다."
          },
          {
            "kind": "h3",
            "text": "예제 8: 측량 측정"
          },
          {
            "kind": "p",
            "text": "단순화된 측량 삼각형에서 직선 거리는 50m, 수평 거리는 40m입니다. 직선 거리가 빗변 [[c=50\\,\\text{m}]]이며, 수평 거리가 인접변 [[b=40\\,\\text{m}]]입니다."
          },
          {
            "kind": "p",
            "text": "[[\\sec(A)=\\frac{50}{40}]]"
          },
          {
            "kind": "p",
            "text": "[[\\boxed{\\sec(A)=1.25}]]"
          },
          {
            "kind": "p",
            "text": "직선 거리는 수평 거리보다 25% 깁니다. 측량사들은 이런 수평 환산을 일상적으로 적용합니다. 실제 현장 작업에서는 단순 모형을 넘어서는 추가 보정과 측정 절차가 필요할 수 있습니다."
          },
          {
            "kind": "h3",
            "text": "예제 9: 폴을 지탱하는 지선"
          },
          {
            "kind": "p",
            "text": "지선 길이는 13m이며, 지면 고정점은 폴에서 수평으로 12m 떨어져 있습니다. 와이어가 빗변 [[c=13\\,\\text{m}]]이며, 폴에서 고정점까지의 수평 거리가 인접변 [[b=12\\,\\text{m}]]입니다."
          },
          {
            "kind": "p",
            "text": "[[\\sec(A)=\\frac{13}{12}]]"
          },
          {
            "kind": "p",
            "text": "[[\\boxed{\\sec(A)\\approx1.0833}]]"
          },
          {
            "kind": "p",
            "text": "와이어는 수평 투영보다 약 8.33% 깁니다. 이를 통해 케이블을 얼마나 잘라야 하는지는 알 수 있지만, 얼마나 하중을 견디는지는 알 수 없습니다. 와이어 장력, 고정점 강도, 구조 안전은 별도 분석이 필요합니다."
          },
          {
            "kind": "h3",
            "text": "예제 10: 계단 스트링거의 시컨트 비율 계산하기"
          },
          {
            "kind": "p",
            "text": "단순화된 계단 스트링거는 길이 5m이며 수평 거리 4m를 가로지릅니다. 스트링거가 빗변 [[c=5\\,\\text{m}]]이며, 수평 거리가 인접변 [[b=4\\,\\text{m}]]입니다."
          },
          {
            "kind": "p",
            "text": "[[\\sec(A)=\\frac{5}{4}]]"
          },
          {
            "kind": "p",
            "text": "[[\\boxed{\\sec(A)=1.25}]]"
          },
          {
            "kind": "p",
            "text": "대각선 스트링거는 수평 거리보다 25% 깁니다. 목수들은 도면 치수에서 스트링거를 재단할 때 이 계산을 역으로 사용합니다. 이 비율만으로 계단 치수나 건축 규정 준수를 검증할 수는 없습니다."
          },
          {
            "kind": "h3",
            "text": "예제 11: 크레인 붐의 수평 투영 이해하기"
          },
          {
            "kind": "p",
            "text": "단순화된 크레인 붐의 길이는 10m, 수평 투영은 6m입니다. 붐이 빗변 [[c=10\\,\\text{m}]]이며, 수평 투영이 인접변 [[b=6\\,\\text{m}]]입니다."
          },
          {
            "kind": "p",
            "text": "[[\\sec(A)=\\frac{10}{6}]]"
          },
          {
            "kind": "p",
            "text": "[[\\boxed{\\sec(A)\\approx1.6667}]]"
          },
          {
            "kind": "p",
            "text": "붐은 수평 투영보다 약 66.67% 깁니다. 가파른 시컨트는 높은 작업 각도를 반영합니다. 이 비율만으로 크레인 용량이나 작업 안전을 판단할 수는 없습니다."
          },
          {
            "kind": "h3",
            "text": "예제 12: 직선 항공 구간"
          },
          {
            "kind": "p",
            "text": "단순화된 직선 비행 구간에서 경로 길이는 5km, 수평 변위는 4km입니다. 비행 경로가 빗변 [[c=5\\,\\text{km}]]이며, 수평 변위가 인접변 [[b=4\\,\\text{km}]]입니다."
          },
          {
            "kind": "p",
            "text": "[[\\sec(A)=\\frac{5}{4}]]"
          },
          {
            "kind": "p",
            "text": "[[\\boxed{\\sec(A)=1.25}]]"
          },
          {
            "kind": "p",
            "text": "경로 길이는 수평 변위보다 25% 깁니다. 이는 이상화된 기하 예제이지 완전한 항법 계산이 아닙니다. 실제 비행 계획에는 바람, 고도 변화, 공역 경로가 추가됩니다."
          },
          {
            "kind": "h3",
            "text": "예제 13: 대각선 기계 받침대"
          },
          {
            "kind": "p",
            "text": "대각선 받침대의 길이는 2m, 수평 투영은 1.2m입니다. 받침대가 빗변 [[c=2\\,\\text{m}]]이며, 수평 투영이 인접변 [[b=1.2\\,\\text{m}]]입니다."
          },
          {
            "kind": "p",
            "text": "[[\\sec(A)=\\frac{2}{1.2}]]"
          },
          {
            "kind": "p",
            "text": "[[\\boxed{\\sec(A)\\approx1.6667}]]"
          },
          {
            "kind": "p",
            "text": "받침대는 수평 투영보다 약 66.67% 깁니다. 이 비율은 설치의 기하학적 모양을 설명할 뿐, 받침대의 강도나 적합성을 결정하지는 않습니다."
          },
          {
            "kind": "h3",
            "text": "예제 14: 등산 경로의 시컨트 비율 계산하기"
          },
          {
            "kind": "p",
            "text": "단순화된 직선 등산 구간의 경로 길이는 100m, 수평 변위는 80m입니다. 경로가 빗변 [[c=100\\,\\text{m}]]이며, 수평 변위가 인접변 [[b=80\\,\\text{m}]]입니다."
          },
          {
            "kind": "p",
            "text": "[[\\sec(A)=\\frac{100}{80}]]"
          },
          {
            "kind": "p",
            "text": "[[\\boxed{\\sec(A)=1.25}]]"
          },
          {
            "kind": "p",
            "text": "직선 경로는 수평 변위보다 25% 깁니다. 실제 등산로에는 굽이와 변하는 경사가 포함되므로, 이는 전체 경로가 아닌 하나의 직선 구간으로 보아야 합니다."
          },
          {
            "kind": "h3",
            "text": "예제 15: 어닝 지지대"
          },
          {
            "kind": "p",
            "text": "어닝 지지대의 길이는 3m, 수평 투영은 2.4m입니다. 지지대가 빗변 [[c=3\\,\\text{m}]]이며, 수평 투영이 인접변 [[b=2.4\\,\\text{m}]]입니다."
          },
          {
            "kind": "p",
            "text": "[[\\sec(A)=\\frac{3}{2.4}]]"
          },
          {
            "kind": "p",
            "text": "[[\\boxed{\\sec(A)=1.25}]]"
          },
          {
            "kind": "p",
            "text": "지지대는 수평 투영보다 25% 깁니다. 이 계산만으로 구조적 적합성을 판단할 수는 없습니다. 고정 강도와 풍하중은 별도 점검이 필요합니다."
          },
          {
            "kind": "h3",
            "text": "예제 16: 두 지점 사이의 케이블"
          },
          {
            "kind": "p",
            "text": "직선 케이블은 두 지점 사이를 총 25m 가로지르며, 수평 거리는 24m입니다. 케이블이 빗변 [[c=25\\,\\text{m}]]이며, 수평 거리가 인접변 [[b=24\\,\\text{m}]]입니다."
          },
          {
            "kind": "p",
            "text": "[[\\sec(A)=\\frac{25}{24}]]"
          },
          {
            "kind": "p",
            "text": "[[\\boxed{\\sec(A)\\approx1.0417}]]"
          },
          {
            "kind": "p",
            "text": "케이블은 수평 거리보다 약 4.17% 깁니다. 단순 모형은 케이블이 직선이고 직각삼각형 관계를 이룬다고 가정합니다. 실제 케이블은 처지므로 시컨트 모형을 넘어서는 길이가 추가됩니다."
          },
          {
            "kind": "p",
            "text": "시컨트는 단위가 있는 물리량이 아니라 수학적 비율입니다. 실용적인 가치는 기울어진 길이를 수평 투영과 비교하고, 각도를 알 때 길이를 되찾고, 삼각형 기하를 검증하고, 시컨트를 특별히 요구하는 식에 사용하는 데 있습니다. 구조 안전, 하중 용량, 접근성, 공학적 규정 준수를 시컨트만으로 인증할 수는 결코 없습니다."
          }
        ],
        "tables": [
          {
            "headers": [
              "상황",
              "c",
              "b",
              "식",
              "비율",
              "길어진 비율",
              "의미"
            ],
            "rows": [
              [
                "사다리",
                "5 m",
                "4 m",
                "5/4",
                "1.25",
                "25%",
                "지면 거리보다 4분의 1 더 긴 사다리"
              ],
              [
                "지붕 서까래",
                "6.5 m",
                "6 m",
                "6.5/6",
                "1.0833",
                "8.33%",
                "수평 거리보다 약간 더 긴 서까래"
              ],
              [
                "경사로",
                "9.5 m",
                "9 m",
                "9.5/9",
                "1.0556",
                "5.56%",
                "수평 거리보다 겨우 긴 완만한 경사"
              ],
              [
                "측량",
                "50 m",
                "40 m",
                "50/40",
                "1.25",
                "25%",
                "수평 거리를 초과하는 직선 거리"
              ],
              [
                "지선",
                "13 m",
                "12 m",
                "13/12",
                "1.0833",
                "8.33%",
                "지면 거리에서 재단하는 와이어 길이"
              ],
              [
                "계단 스트링거",
                "5 m",
                "4 m",
                "5/4",
                "1.25",
                "25%",
                "수평 거리 대비 대각선 스트링거"
              ],
              [
                "크레인 붐",
                "10 m",
                "6 m",
                "10/6",
                "1.6667",
                "66.67%",
                "투영보다 훨씬 긴 가파른 붐"
              ],
              [
                "비행 구간",
                "5 km",
                "4 km",
                "5/4",
                "1.25",
                "25%",
                "수평 변위 대비 이상화된 경로"
              ],
              [
                "대각선 받침대",
                "2 m",
                "1.2 m",
                "2/1.2",
                "1.6667",
                "66.67%",
                "수평 투영 대비 받침대 길이"
              ],
              [
                "등산 경로",
                "100 m",
                "80 m",
                "100/80",
                "1.25",
                "25%",
                "수평 지도 거리 대비 직선 구간"
              ],
              [
                "어닝 지지대",
                "3 m",
                "2.4 m",
                "3/2.4",
                "1.25",
                "25%",
                "수평 도달 거리 대비 지지대 길이"
              ],
              [
                "케이블 구간",
                "25 m",
                "24 m",
                "25/24",
                "1.0417",
                "4.17%",
                "거의 수평인 케이블, 추가 길이는 미미"
              ]
            ]
          }
        ],
        "imgAlt": "네 개의 패널: 사다리 1.25, 경사로 1.0556, 측량 1.25, 크레인 붐 1.6667, 각각 표시된 직각삼각형",
        "figcaption": "네 가지 실제 계산: 사다리, 경사로, 측량, 크레인 붐, 각각 삼각형, 식, 비율과 함께 표시합니다."
      },
      "sec-angle": {
        "h2": "시컨트와 각도 크기의 관계 이해하기",
        "blocks": [
          {
            "kind": "p",
            "text": "시컨트는 기준각이 커질수록 증가합니다. 기하학이 그 이유를 설명합니다. 각도 [[A]]가 작을 때는 인접변이 빗변과 거의 같은 길이이므로 비율은 1 바로 위에 자리합니다. 각도가 벌어질수록 인접변은 빗변에서 차지하는 비율이 작아지고, 비율은 올라갑니다. [[45^\\circ]]에서는 시컨트가 [[\\sqrt{2}]], 약 1.4142이며, [[60^\\circ]]에서는 빗변이 인접변의 정확히 두 배이므로 2이고, 각도가 [[90^\\circ]]에 가까워지면 인접변은 0으로 수렴하고 시컨트는 끝없이 커집니다."
          }
        ],
        "tables": [
          {
            "headers": [
              "각도 [[A]]",
              "인접변 [[b]]",
              "빗변 [[c]]",
              "시컨트 비율"
            ],
            "rows": [
              [
                "[[30^\\circ]]",
                "[[\\sqrt{3}]]",
                "2",
                "약 1.1547"
              ],
              [
                "[[45^\\circ]]",
                "1",
                "[[\\sqrt{2}]]",
                "약 1.4142"
              ],
              [
                "[[60^\\circ]]",
                "1",
                "2",
                "2"
              ],
              [
                "[[75^\\circ]]",
                "1",
                "약 3.8637",
                "약 3.8637"
              ]
            ]
          }
        ],
        "closingParagraphs": [
          "이 패턴은 단조적입니다. 각도가 증가할 때마다 시컨트도 증가하며, 모든 예각에 대해 비율은 1을 초과합니다. 표의 측정값은 예시용이며, 각도를 결정하는 것은 삼각형의 절대 크기가 아니라 비율입니다. 따라서 시컨트는 삼각형의 크기가 아니라 모양을 설명합니다."
        ],
        "imgAlt": "30도, 45도, 60도 삼각형 세 개와 시컨트 값 1.1547, 1.4142, 2, 각도가 커지면 시컨트 증가",
        "figcaption": "각도 A가 커질수록 인접변이 빗변에서 차지하는 비율이 작아지므로 sec(A)가 증가합니다."
      },
      "sec-hypotenuse": {
        "h2": "시컨트로 빗변 구하기",
        "blocks": [
          {
            "kind": "p",
            "text": "인접변과 각도를 알 때 시컨트 식을 변형하면 빗변을 구할 수 있습니다. [[\\sec(A)=c/b]]에서 시작해 양변에 [[b]]를 곱합니다."
          },
          {
            "kind": "p",
            "text": "[[[\\boxed{c=b\\sec(A)}]]]"
          },
          {
            "kind": "p",
            "text": "빗변은 인접변에 각도의 시컨트를 곱한 값과 같습니다. 인접변 [[b=4\\,\\text{m}]], 각도 [[A=60^\\circ]]가 주어지고 [[\\sec(60^\\circ)=2]]임을 알 때:"
          },
          {
            "kind": "p",
            "text": "[[c=4\\times2]]"
          },
          {
            "kind": "p",
            "text": "[[\\boxed{c=8\\,\\text{m}}]]"
          },
          {
            "kind": "p",
            "text": "이 각도에서는 빗변이 인접변의 두 배이며, 이는 30-60-90 기하학과 일치합니다. 30도 맞은편의 변은 빗변의 절반입니다. 다시 변형하면 인접변도 같은 방식으로 구할 수 있습니다."
          },
          {
            "kind": "p",
            "text": "[[[\\boxed{b=\\frac{c}{\\sec(A)}}]]]"
          },
          {
            "kind": "p",
            "text": "빗변 [[c=10\\,\\text{m}]], [[A=60^\\circ]]인 경우: [[b=10/2]]이므로 [[\\boxed{b=5\\,\\text{m}}]]입니다. 이들은 같은 식의 수학적 변형입니다. 이 페이지의 계산기는 변 길이에서 시컨트 비율을 반환하며, 빠진 변을 직접 계산하지는 않습니다."
          }
        ]
      },
      "sec-recover": {
        "h2": "시컨트 비율로 각도 구하기",
        "blocks": [
          {
            "kind": "p",
            "text": "시컨트 비율과 각도는 다른 양입니다. 하나는 변의 무차원 비교이고, 다른 하나는 도 단위로 잽니다. 시컨트 비율을 알면 역수로 코사인을 되찾습니다."
          },
          {
            "kind": "p",
            "text": "[[\\cos(A)=\\frac{1}{\\sec(A)}]]"
          },
          {
            "kind": "p",
            "text": "그런 다음 역코사인이 각도를 반환합니다."
          },
          {
            "kind": "p",
            "text": "[[[\\boxed{A=\\cos^{-1}\\left(\\frac{1}{\\sec(A)}\\right)}]]]"
          },
          {
            "kind": "p",
            "text": "[[\\sec(A)=1.25]]가 주어졌을 때, 먼저 코사인을 계산합니다. [[\\cos(A)=1/1.25=0.8]]. 그런 다음 [[A=\\cos^{-1}(0.8)]]이며, 결과는 [[\\boxed{A\\approx36.87^\\circ}]]입니다. 이는 시컨트 비율 계산기가 직접 수행하는 계산이 아니라 별도의 각도 계산입니다. 답을 도 단위로 구하려면 공학용 계산기를 도 모드로 설정하세요. 라디안 모드에서는 같은 입력이 약 0.6435를 반환하는데, 단위가 다를 뿐 같은 각도입니다."
          }
        ]
      },
      "sec-mistakes": {
        "h2": "시컨트 계산 시 흔한 실수",
        "blocks": [
          {
            "kind": "p",
            "text": "대부분의 시컨트 오류는 뒤집힌 분수, 잘못 붙인 변 이름, 단위 실수에서 나옵니다. 결과를 믿기 전에 이 목록을 확인하세요."
          }
        ],
        "steps": [
          "<strong>식을 뒤집어 [[c/b]] 대신 [[b/c]]를 계산합니다.</strong> 가장 흔한 오류이며, 시컨트 대신 코사인이 나옵니다. [[c=5]], [[b=4]]인 경우 잘못된 순서는 0.8, 올바른 순서는 1.25가 나옵니다.",
          "<strong>시컨트와 코사인을 혼동합니다.</strong> 코사인은 인접변을 빗변으로 나눈 값이고, 시컨트는 정확히 그 역입니다. 답이 1보다 작게 나오면 거의 확실히 코사인이지 시컨트가 아닙니다.",
          "<strong>시컨트와 코시컨트를 혼동합니다.</strong> 둘 다 분자에 빗변을 두므로 비슷해 보입니다. 시컨트는 인접변 [[b]]로 나누고, 코시컨트는 대변 [[a]]로 나눕니다. 문제가 실제로 주는 변이 어느 쪽인지 확인하세요.",
          "<strong>인접변 대신 대변을 사용합니다.</strong> [[c/a]]를 나누면 코시컨트가 나옵니다. [[c=5]], [[a=3]]인 경우 1.6667이 나오는데, 이는 올바른 코시컨트이지만 틀린 시컨트입니다.",
          "<strong>분자에 빗변이 아닌 변을 사용합니다.</strong> 시컨트는 항상 분자에 빗변이 옵니다. 변을 변으로 나누면 탄젠트나 코탄젠트이며, 변을 빗변으로 나누면 사인이나 코사인입니다.",
          "<strong>인접변과 대변을 바꿉니다.</strong> 기준각이 [[A]]에서 [[B]]로 바뀌면 이름이 바뀝니다. [[b]]를 배정하기 전에 문제가 어느 각도를 지정하는지 항상 확인하세요.",
          "<strong>시컨트를 도 단위로 잰 각도로 착각합니다.</strong> 결과 1.25는 비율이지 [[1.25^\\circ]]가 아닙니다. 도 단위로 취급하면 이후 계산 전체가 엉터리가 됩니다.",
          "<strong>비율에 미터나 센티미터를 붙여 보고합니다.</strong> 나눗셈에서 단위가 소거되므로 1.25m는 틀립니다. 숫자는 그대로 쓰고, 단위는 입력 측정값에 남겨 두세요.",
          "<strong>변 길이에 0이나 음수를 입력합니다.</strong> 삼각형의 변이 0이나 음수일 수는 없으므로, 이런 입력은 유효한 경계 사례가 아니라 입력 오류나 빠진 측정값의 신호입니다.",
          "<strong>빗변보다 긴 인접변을 입력합니다.</strong> 빗변은 항상 가장 긴 변입니다. [[b \\gt c]]라면 입력이 뒤바뀌었거나 해당 삼각형이 불가능합니다.",
          "<strong>측정 단위를 섞습니다.</strong> 빗변 5m에 인접변 40cm를 쓰면 0.125라는 무의미한 숫자가 나옵니다. 먼저 하나의 단위로 통일하세요. 5m와 4m를 쓰면 올바른 1.25가 나옵니다.",
          "<strong>너무 일찍 반올림합니다.</strong> 중간 나눗셈을 소수 둘째 자리에서 반올림한 뒤 계산을 계속하면 오차가 누적됩니다. 모든 단계에서는 완전한 정밀도를 유지하고 최종 답에서만 반올림하세요.",
          "<strong>직각삼각형의 시컨트는 1이어야 한다고 생각합니다.</strong> 시컨트가 정확히 1인 직각삼각형은 없습니다. 1보다 큰 값을 기대하고, 정확히 1이 나오면 입력이 뒤바뀌었거나 삼각형이 퇴화되었다는 신호로 보세요.",
          "<strong>역수 코사인과 역코사인을 혼동합니다.</strong> [[1/\\cos(A)]]은 시컨트, 즉 비율이며, [[\\cos^{-1}]]은 각도를 반환하는 역코사인입니다. 이름이 비슷해 실제 오류가 발생하므로 표기를 주의 깊게 읽으세요.",
          "<strong>시컨트만으로 삼각형의 절대 치수가 정해진다고 생각합니다.</strong> 시컨트는 크기가 아니라 모양을 설명합니다. 빗변 5cm인 삼각형부터 빗변 5km인 삼각형까지, 시컨트가 1.25인 삼각형은 무한히 많습니다. 비율은 비례만 정하며, 실제 길이를 알려면 최소 하나의 변 측정값이 필요합니다."
        ],
        "closingParagraphs": [
          "<strong>틀린 계산과 올바른 계산:</strong> 빗변 [[c=5]], 인접변 [[b=4]]가 주어졌을 때:",
          "<strong>틀린 예:</strong> [[4/5=0.8]]. 이는 시컨트가 아니라 코사인입니다. 분자와 분모가 뒤바뀌었습니다.",
          "<strong>올바른 예:</strong> [[\\sec(A)=5/4=1.25]].",
          "<strong>검증:</strong> [[\\cos(A)=0.8]]이며, [[1/0.8=1.25]]입니다. 역수 검사가 결과를 확인해 주며, 답은 유효한 모든 시컨트가 그래야 하듯 1보다 큽니다."
        ]
      },
      "sec-verify": {
        "h2": "시컨트 계산 결과가 맞는지 확인하기",
        "blocks": [
          {
            "kind": "p",
            "text": "유효한 퇴화되지 않은 직각삼각형은 양수인 변들에 빗변이 반드시 가장 길어야 하므로 [[0 \\lt b \\lt c]]이며, 따라서 시컨트 결과는 1보다 커야 합니다."
          },
          {
            "kind": "p",
            "text": "[[[\\boxed{\\sec(A)=\\frac{c}{b} \\gt 1}]]]"
          },
          {
            "kind": "p",
            "text": "두 측정값은 호환되는 단위를 사용해야 합니다. 1 이하의 결과는 보통 입력이 뒤바뀌었거나, 변이 잘못 식별되었거나, 측정이 호환되지 않거나, 삼각형 치수가 유효하지 않음을 나타냅니다."
          },
          {
            "kind": "h3",
            "text": "방법 1: 코사인의 역수 확인하기"
          },
          {
            "kind": "p",
            "text": "[[\\cos(A)=b/c]]를 검증한 뒤 [[\\sec(A)=1/\\cos(A)]]임을 확인합니다. [[b=4]], [[c=5]]인 경우 [[\\cos(A)=4/5=0.8]]이므로 [[\\sec(A)=1/0.8=1.25]]입니다. 두 경로가 불일치하면 분수가 뒤집혔거나 변 이름이 잘못 붙은 것입니다."
          },
          {
            "kind": "h3",
            "text": "방법 2: 피타고라스 정리 확인하기"
          },
          {
            "kind": "p",
            "text": "대변을 알거나 구해야 하는 경우 [[a=\\sqrt{c^2-b^2}]]를 계산합니다. [[b=4]], [[c=5]]인 경우 [[a=\\sqrt{25-16}=3]]이며, [[3^2+4^2=5^2]]입니다. 이는 3-4-5 직각삼각형의 치수를 확인해 줍니다. 대변은 여기서 검증용 값일 뿐, 기본 시컨트 식의 일부가 아닙니다."
          },
          {
            "kind": "h3",
            "text": "방법 3: 역코사인으로 확인하기"
          },
          {
            "kind": "p",
            "text": "시컨트 비율이 1.25인 경우 [[A=\\cos^{-1}(1/1.25)]]이며, 이는 [[A=\\cos^{-1}(0.8)\\approx36.87^\\circ]]입니다. 시컨트가 1을 약간 웃돌므로 각도는 [[45^\\circ]]보다 훨씬 아래에 있어야 합니다. 그렇지 않다면 변 이름이 바뀌었을 가능성이 큽니다. 반올림으로 인한 작은 차이는 생길 수 있습니다."
          }
        ]
      },
      "sec-vs": {
        "h2": "시컨트와 코사인, 사인, 코시컨트 비교",
        "blocks": [
          {
            "kind": "p",
            "text": "각 비율은 같은 기준각과 변 이름을 사용하면서 서로 다른 변의 쌍을 비교합니다."
          }
        ],
        "tables": [
          {
            "headers": [
              "비율",
              "식",
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
        "closingParagraphs": [
          "시컨트와 코사인은 역수 쌍입니다. [[\\sec(A)=1/\\cos(A)]]이며, [[\\cos(A)=0.8]]이면 [[\\sec(A)=1.25]]입니다. 빗변을 인접변으로 나누는 식이 필요할 때, 기울어진 길이를 수평 투영과 비교할 때, 또는 알려진 관계가 가장 긴 변에서 시작할 때는 시컨트를 사용하세요. 인접변을 빗변으로 나누는 경우에는 코사인, 빗변에 대한 대변은 사인, 빗변을 대변과 비교할 때는 코시컨트를 사용합니다.",
          "인접한 비율은 <a href=\"/sine-ratio-calculator/\" class=\"text-primary hover:underline\">사인 비율 계산기</a>, <a href=\"/cosine-ratio-calculator/\" class=\"text-primary hover:underline\">코사인 비율 계산기</a>, <a href=\"/tangent-ratio-calculator/\" class=\"text-primary hover:underline\">탄젠트 비율 계산기</a>, <a href=\"/cosecant-ratio-calculator/\" class=\"text-primary hover:underline\">코시컨트 비율 계산기</a>, <a href=\"/cotangent-ratio-calculator/\" class=\"text-primary hover:underline\">코탄젠트 비율 계산기</a>를 참고하세요."
        ]
      },
      "sec-related": {
        "h2": "관련 삼각함수 계산기 살펴보기",
        "related": [
          {
            "name": "사인 비율 계산기"
          },
          {
            "name": "코사인 비율 계산기"
          },
          {
            "name": "탄젠트 비율 계산기"
          },
          {
            "name": "코시컨트 비율 계산기"
          },
          {
            "name": "코탄젠트 비율 계산기"
          },
          {
            "name": "직각삼각형 각도 계산기"
          }
        ]
      },
      "sec-conclusion": {
        "h2": "자신 있게 시컨트 비율을 활용하세요",
        "blocks": [
          {
            "kind": "p",
            "text": "시컨트는 코사인을 뒤집은 형태입니다. 빗변을 인접변으로 나누면 기울어진 길이가 수평 길이보다 얼마나 긴지 알 수 있습니다. 식 [[\\sec(A)=c/b]]에는 두 측정값만 필요하고, 답은 항상 1보다 큰 무차원 수이며, 기준각이 커질수록 증가합니다. 빠진 변이 필요하면 [[c=b\\sec(A)]]로 빗변을 되찾고, 각도가 필요하면 [[A=\\cos^{-1}(1/\\sec(A))]]로 되찾습니다. 사다리든, 서까래든, 경사로든, 교과서의 3-4-5든, 방법은 변하지 않습니다. 빗변을 찾고, 인접변을 찾고, 나누고, 코사인의 역수로 검증하세요."
          }
        ]
      }
    },
    "faqs": [
      {
        "question": "직각삼각형의 시컨트 비율 공식은 무엇인가요?",
        "answer": "sec(A) = c / b입니다. 빗변 c를 각도 A에 인접한 변으로 나눕니다. 빗변이 5cm이고 인접변이 4cm이면 결과는 5/4 = 1.25입니다. 이 소수가 답의 전부이며, 단위가 없는 비율이지 각도가 아닙니다."
      },
      {
        "question": "시컨트와 코사인은 어떤 관계인가요?",
        "answer": "시컨트는 코사인의 역수입니다. sec(A) = 1 / cos(A)이며, cos(A) = 4/5 = 0.8이면 sec(A) = 1/0.8 = 1.25입니다. 두 비율은 같은 각도를 뒤집힌 관점에서 설명하며, 역수 검사는 시컨트 계산을 검증하는 가장 빠른 방법입니다."
      },
      {
        "question": "직각삼각형에서 시컨트가 1보다 큰 이유는 무엇인가요?",
        "answer": "유효한 퇴화되지 않은 직각삼각형에서는 빗변이 어느 변보다도 반드시 길므로 c > b > 0입니다. 더 긴 길이를 더 짧은 길이로 나누면 항상 1을 초과하므로, 모든 예각 기준각에서 sec(A) = c/b > 1입니다."
      },
      {
        "question": "시컨트가 1이 될 수 있나요?",
        "answer": "실제 직각삼각형의 일반적인 예각에서는 불가능합니다. 시컨트가 정확히 1이 되려면 빗변과 인접변이 같아야 하며, 그러면 삼각형이 납작한 직선으로 무너집니다. 값 1은 각도 A가 0도에 가까워질 때 접근하는 극한값일 뿐, 진짜 삼각형이 만들어내는 값이 아닙니다."
      },
      {
        "question": "시컨트 값 1.25는 무엇을 의미하나요?",
        "answer": "빗변이 인접변의 1.25배 길이이며, 25% 더 길다는 뜻입니다. 각도가 1.25도라는 뜻도 아니고, 삼각형이 1.25 단위를 잰다는 뜻도 아닙니다. 시컨트는 두 길이의 무차원 비교입니다."
      },
      {
        "question": "시컨트에 측정 단위가 있나요?",
        "answer": "없습니다. 두 입력 모두 같은 단위로 잰 길이이므로 단위가 소거됩니다. 5 m / 4 m = 1.25이며, 500 cm / 400 cm = 1.25와 같습니다. 시컨트는 도, 미터, 피트를 붙이지 말고 그냥 숫자로 보고하세요."
      },
      {
        "question": "변 길이로 시컨트를 어떻게 계산하나요?",
        "answer": "빗변 c와 인접변 b를 같은 단위로 재고, 둘 다 양수이며 c가 b보다 긴지 확인한 뒤 나눕니다. sec(A) = c / b입니다. 이 페이지에서는 첫 번째 칸에 빗변, 두 번째 칸에 인접변을 입력하고 호환되는 단위를 고른 뒤 Calculate sec(A)를 클릭하세요."
      },
      {
        "question": "시컨트로 빗변을 어떻게 구하나요?",
        "answer": "식을 변형해 c = b * sec(A)로 만듭니다. 인접변이 4m이고 각도 A가 60도이면 sec(60 deg) = 2이므로 c = 4 * 2 = 8 m입니다. 이는 수동 변형이며, 이 페이지의 계산기는 변 길이에서 비율을 반환할 뿐 빠진 변을 구하지는 않습니다."
      },
      {
        "question": "시컨트 비율로 각도를 어떻게 구하나요?",
        "answer": "역수를 취해 코사인 비율을 구한 뒤 역코사인을 적용합니다. A = cos^-1(1 / sec(A))이며, sec(A) = 1.25인 경우 코사인 비율은 0.8이므로 A = cos^-1(0.8), 약 36.87도입니다. 먼저 공학용 계산기를 도 모드로 설정하세요. 이 페이지의 계산기는 각도가 아니라 비율을 반환합니다."
      },
      {
        "question": "시컨트와 코시컨트의 차이는 무엇인가요?",
        "answer": "시컨트는 빗변을 인접변으로 나누고(c/b), 코시컨트는 빗변을 대변으로 나눕니다(c/a). 둘 다 빗변을 포함하는 역수 비율이지만 사용하는 변이 다르므로 서로 다른 질문에 답하며, 바꿔 쓸 수 없습니다."
      },
      {
        "question": "대변을 몰라도 시컨트를 계산할 수 있나요?",
        "answer": "네. 기본 시컨트 식은 빗변과 인접변만 사용하므로 대변이 계산에 전혀 들어가지 않습니다. 대변은 피타고라스 정리로 삼각형을 검증하거나 사인, 탄젠트, 코시컨트가 작업에 들어올 때만 유용해집니다."
      },
      {
        "question": "시컨트는 실제 측정에 어떻게 사용되나요?",
        "answer": "시컨트는 기울어진 길이를 수평 투영과 비교합니다. 지면 거리와 사다리, 수평 거리와 지붕 서까래, 양 끝점의 수평 간격과 케이블 등이 그 예입니다. 이 비율은 기울어진 경로가 투영보다 얼마나 긴지 알려주므로, 수평 도면에서 재료 길이를 추정하는 데 유용합니다."
      }
    ],
    "faqHeading": "자주 묻는 질문",
    "relatedHeading": "관련 삼각함수 계산기 살펴보기"
  },
  "ms": {
    "tocHeading": "Dalam Panduan Ini",
    "tocItems": {
      "sec-intro": "Apakah Kalkulator Nisbah Sekan?",
      "sec-triangle": "Memahami Sisi Bersebelahan dan Hipotenus",
      "sec-whatis": "Memahami Nisbah Sekan",
      "sec-formula": "Bagaimana Formula Sekan Berfungsi",
      "sec-howto": "Cara Menggunakan Kalkulator Nisbah Sekan",
      "sec-examples": "Contoh Pengiraan Sekan Langkah demi Langkah",
      "sec-applications": "Contoh Sebenar Penggunaan Nisbah Sekan",
      "sec-angle": "Memahami Hubungan antara Sekan dengan Saiz Sudut",
      "sec-hypotenuse": "Cara Mencari Hipotenus Menggunakan Sekan",
      "sec-recover": "Cara Mencari Sudut daripada Nisbah Sekan",
      "sec-mistakes": "Kesilapan Lazim dalam Mengira Sekan",
      "sec-verify": "Cara Menyemak Sama Ada Keputusan Sekan Anda Sah",
      "sec-vs": "Sekan Berbanding Kosinus, Sinus dan Kosekan",
      "sec-faq": "Soalan Lazim",
      "sec-related": "Terokai Kalkulator Trigonometri Berkaitan"
    },
    "sections": {
      "sec-intro": {
        "h2": "Apakah Kalkulator Nisbah Sekan?",
        "blocks": [
          {
            "kind": "p",
            "text": "Kalkulator nisbah sekan menjawab satu soalan: bagi sudut tirus dalam segi tiga tegak, bagaimana sisi yang paling panjang berbanding dengan sisi yang bersebelahan dengan sudut itu? Masukkan hipotenus dan sisi bersebelahan, dan alat ini akan membahagikan hipotenus dengan sisi bersebelahan, lalu mengembalikan [[\\sec(A)=c/b]]. Dengan hipotenus 5 cm dan sisi bersebelahan 4 cm, pengiraannya ialah [[5/4=1.25]]: hipotenus adalah 1.25 kali lebih panjang daripada sisi bersebelahan, yang juga bermaksud ia 25% lebih panjang. Nilai perpuluhan itu ialah jawapan lengkap. Ia ialah nisbah tanpa dimensi, kerana sentimeter saling membatalkan dalam pembahagian, dan ia bukan sudut dalam darjah, jadi jangan sekali-kali membaca 1.25 sebagai [[\\1.25^\\circ]]. Sisi bertentangan tidak pernah terlibat dalam pengiraan ini; hipotenus dan sisi bersebelahan sudah mencukupi. Sekan juga merupakan salingan kosinus, sebab itulah banyak buku teks memperkenalkannya sebagai bentuk terbalik bagi [[\\cos(A)]]."
          }
        ]
      },
      "sec-triangle": {
        "h2": "Memahami Sisi Bersebelahan dan Hipotenus",
        "blocks": [
          {
            "kind": "h3",
            "text": "Apakah Segi Tiga Tegak?"
          },
          {
            "kind": "p",
            "text": "Segi tiga tegak mempunyai satu sudut tepat [[\\90^\\circ]], iaitu sudut antara dua garis yang serenjang, seperti dinding yang bertemu lantai yang rata. Hipotenus terletak bertentangan dengan sudut tegak itu dan sentiasa merupakan sisi yang paling panjang, kerana ia mesti merentangi keseluruhan pepenjuru di seberang penjuru. Dua sudut lagi berkongsi baki 90 darjah, jadi kedua-duanya adalah sudut tirus. Dua kaki segi tiga itu bertemu pada sudut tegak, serenjang antara satu sama lain, dan hubungan keduanya dengan hipotenuslah yang menjadikan trigonometri segi tiga tegak mungkin."
          },
          {
            "kind": "h3",
            "text": "Apakah Sisi Bersebelahan?"
          },
          {
            "kind": "p",
            "text": "Sisi bersebelahan [[b]] ialah kaki yang menyentuh sudut rujukan [[A]] tanpa menjadi hipotenus. Dalam masalah praktikal ia sering berperanan sebagai jarak mendatar: jarak tanah dari tapak tangga ke dinding, unjuran mendatar kasau bumbung, atau pemisahan mendatar antara dua titik ukur. Ia menjadi penyebut dalam formula sekan. Kaki yang mana dianggap bersebelahan bergantung pada sudut rujukan yang dipilih, jadi menukar dari sudut [[A]] kepada sudut [[B]] akan menukar label bersebelahan dan bertentangan."
          },
          {
            "kind": "h3",
            "text": "Apakah Hipotenus?"
          },
          {
            "kind": "p",
            "text": "Hipotenus [[c]] ialah sisi yang bertentangan dengan sudut tegak: dalam mana-mana gambar rajah ia menghadap tanda segi empat kecil yang menandakan penjuru [[\\90^\\circ]], dan ia semestinya lebih panjang daripada mana-mana kaki. Dalam masalah praktikal ia sering berperanan sebagai panjang yang condong: tangga, permukaan tanjakan, kasau, kabel, pendakap pepenjuru, atau laluan garis lurus. Ia menjadi pembilang dalam formula sekan, sebab itulah setiap nilai sekan lebih besar daripada 1."
          },
          {
            "kind": "h3",
            "text": "Apakah Sisi Bertentangan?"
          },
          {
            "kind": "p",
            "text": "Sisi bertentangan [[a]] terletak tepat di seberang sudut [[A]] dan tidak pernah menyentuh bucunya. Ia tidak berperanan dalam pengiraan sekan utama, sebab itulah kalkulator tidak pernah memintanya. Ia menjadi relevan apabila teorem Pythagoras digunakan untuk menyemak bahawa dua panjang yang diketahui membentuk segi tiga tegak yang sebenar, dan ia menjadi tumpuan utama bagi sinus, tangen dan kosekan, di mana sisi bertentangan ialah salah satu daripada dua sisi yang digunakan."
          }
        ],
        "imgAlt": "Segi tiga tegak dengan sudut A di bawah kiri, hipotenus emas c, sisi bersebelahan biru b, sec(A)=c/b",
        "figcaption": "Sudut A terletak di bawah kiri; sekan menggunakan hipotenus emas c dan sisi bersebelahan biru b, bukan sisi bertentangan a."
      },
      "sec-whatis": {
        "h2": "Memahami Nisbah Sekan",
        "blocks": [
          {
            "kind": "p",
            "text": "Sekan membandingkan keseluruhan sisi yang condong dengan kaki yang bersebelahan dengan sudut rujukan:"
          },
          {
            "kind": "p",
            "text": "[[[\\sec(A)=\\frac{c}{b}]]]"
          },
          {
            "kind": "p",
            "text": "Di sini [[\\sec(A)]] ialah sekan bagi sudut [[A]], [[c]] ialah hipotenus, dan [[b]] ialah sisi bersebelahan: berapa kali sisi bersebelahan muat dalam hipotenus."
          },
          {
            "kind": "h3",
            "text": "Sekan sebagai Salingan Kosinus"
          },
          {
            "kind": "p",
            "text": "Kosinus membahagikan sisi bersebelahan dengan hipotenus, [[\\cos(A)=b/c]]. Mengambil salingannya menyongsangkan pecahan itu, [[1/\\cos(A)=c/b]], yang tepat sekali formula sekan:"
          },
          {
            "kind": "p",
            "text": "[[[\\boxed{\\sec(A)=\\frac{1}{\\cos(A)}=\\frac{c}{b}}]]]"
          },
          {
            "kind": "p",
            "text": "Dengan [[\\cos(A)=4/5=0.8]], salingannya ialah [[\\sec(A)=1/0.8=1.25]]: segi tiga yang sama, dihuraikan dari arah yang bertentangan. Perbezaan ini penting kerana kosinus songsang, yang ditulis [[\\cos^{-1}]], ialah idea yang berbeza: ia mendapatkan semula sudut daripada nilai kosinus, manakala [[1/\\cos(A)]] ialah salingan kosinus, iaitu nisbah, bukan sudut."
          },
          {
            "kind": "h3",
            "text": "Apakah Maksud Nilai Sekan 1.25?"
          },
          {
            "kind": "p",
            "text": "Sekan 1.25 bermakna hipotenus adalah 1.25 kali lebih panjang daripada sisi bersebelahan. Perbezaan peratusan ialah [[(1.25-1)\\times100=25]], jadi hipotenus adalah 25% lebih panjang daripada sisi bersebelahan. Ini tidak bermakna sudutnya [[\\1.25^\\circ]], dan tidak bermakna segi tiga itu berukuran 1.25 unit bagi apa-apa pun. Sekan ialah perbandingan, bukan ukuran."
          },
          {
            "kind": "h3",
            "text": "Mengapa Sekan Lebih Besar daripada 1"
          },
          {
            "kind": "p",
            "text": "Dalam segi tiga tegak yang sah dan tidak degenerat, hipotenus lebih panjang daripada mana-mana kaki, jadi [[c \\gt b \\gt 0]]. Membahagikan hipotenus dengan sisi bersebelahan oleh itu menghasilkan nisbah lebih besar daripada 1:"
          },
          {
            "kind": "p",
            "text": "[[[\\boxed{\\frac{c}{b} \\gt 1}]]]"
          },
          {
            "kind": "p",
            "text": "Hasil tepat 1 tidak mungkin bagi sudut rujukan tirus biasa dalam segi tiga tegak yang tidak degenerat, kerana itu memerlukan hipotenus sama dengan sisi bersebelahan, yang akan meratakan segi tiga menjadi garis lurus. Nilai 1 ialah nilai had, yang hanya didekati apabila sudut mengecil menghampiri [[\\0^\\circ]]."
          },
          {
            "kind": "h3",
            "text": "Mengapa Sekan Ialah Salingan Kosinus"
          },
          {
            "kind": "p",
            "text": "Hubungan ini terbit terus daripada dua formula. Kosinus membahagikan sisi bersebelahan dengan hipotenus, sekan membahagikan hipotenus dengan sisi bersebelahan:"
          },
          {
            "kind": "p",
            "text": "[[\\cos(A)=\\frac{b}{c}]]"
          },
          {
            "kind": "p",
            "text": "[[\\sec(A)=\\frac{c}{b}]]"
          },
          {
            "kind": "p",
            "text": "Mendarab kedua-duanya membatalkan semuanya dan menghasilkan 1:"
          },
          {
            "kind": "p",
            "text": "[[[\\cos(A)\\sec(A)=\\frac{b}{c}\\times\\frac{c}{b}=1]]]"
          },
          {
            "kind": "p",
            "text": "Identiti ini ialah alat pengesahan praktikal: hitung kosinus daripada sisi yang sama, ambil salingannya, dan ia mesti sepadan tepat dengan hasil sekan. Ketidaksepadanan menunjukkan pecahan yang terbalik atau sisi yang tersalah label."
          },
          {
            "kind": "h3",
            "text": "Mengapa Sekan Tiada Unit"
          },
          {
            "kind": "p",
            "text": "Sekan membahagikan satu panjang dengan panjang yang lain, jadi unitnya saling membatalkan. Contohnya:"
          },
          {
            "kind": "p",
            "text": "[[[\\frac{5\\,\\text{m}}{4\\,\\text{m}}=1.25]]]"
          },
          {
            "kind": "p",
            "text": "Meter hilang, meninggalkan nombor tulen. Nisbah yang sama muncul dengan 500 cm dan 400 cm, atau dengan mana-mana pasangan unit yang sepadan, sebab itulah mencampurkan unit, seperti hipotenus dalam meter dengan sisi bersebelahan dalam sentimeter, merosakkan pengiraan sebelum ia bermula."
          },
          {
            "kind": "h3",
            "text": "Sekan Berbanding Kosekan"
          },
          {
            "kind": "p",
            "text": "Sekan dan kosekan kedua-duanya nisbah salingan yang menggunakan hipotenus sebagai pembilang, tetapi menggunakan kaki yang berbeza sebagai penyebut:"
          },
          {
            "kind": "p",
            "text": "[[\\sec(A)=\\frac{c}{b}]]"
          },
          {
            "kind": "p",
            "text": "[[\\csc(A)=\\frac{c}{a}]]"
          },
          {
            "kind": "p",
            "text": "Sekan memasangkan hipotenus dengan sisi bersebelahan; kosekan memasangkan hipotenus dengan sisi bertentangan. Keduanya tidak boleh ditukar ganti, dan memilih yang salah akan menjawab soalan yang berbeza tentang segi tiga itu."
          }
        ],
        "imgAlt": "Tiga tahap: segi tiga 3-4-5, kosinus cos(A)=4/5=0.8, sekan sec(A)=5/4=1.25, hubungan salingan",
        "figcaption": "Tiga tahap: label segi tiga 3-4-5, hitung kosinus cos(A) = 4/5, kemudian songsangkan pecahan untuk mendapatkan sec(A) = 5/4."
      },
      "sec-formula": {
        "h2": "Bagaimana Formula Sekan Berfungsi",
        "blocks": [
          {
            "kind": "p",
            "text": "Takrifan bermula dengan kata-kata, kemudian berpindah kepada simbol. Sekan ialah hipotenus dibahagikan dengan sisi bersebelahan:"
          },
          {
            "kind": "p",
            "text": "[[[\\sec(A)=\\frac{\\text{Hypotenuse}}{\\text{Adjacent}}]]]"
          },
          {
            "kind": "p",
            "text": "Dalam tatatanda piawai ia menjadi:"
          },
          {
            "kind": "p",
            "text": "[[[\\boxed{\\sec(A)=\\frac{c}{b}}]]]"
          },
          {
            "kind": "p",
            "text": "Hipotenus berada di pembilang kerana sekan bertanya \"berapa panjangkah sisi yang condong berbanding jejak mendatarnya?\", dan sisi bersebelahan berada di penyebut kerana ia ialah panjang rujukan yang sedang dibandingkan."
          },
          {
            "kind": "h3",
            "text": "Contoh Kerja Penuh: Segi Tiga Tegak 3-4-5"
          },
          {
            "kind": "p",
            "text": "Diberi sisi bersebelahan [[b=4\\,\\text{cm}]], sisi bertentangan [[a=3\\,\\text{cm}]], dan hipotenus [[c=5\\,\\text{cm}]], jalankan formula langkah demi langkah."
          },
          {
            "kind": "p",
            "text": "<strong>Langkah 1: Tulis formula.</strong> [[\\sec(A)=c/b]]."
          },
          {
            "kind": "p",
            "text": "<strong>Langkah 2: Gantikan nilai yang diketahui.</strong> [[\\sec(A)=5/4]]."
          },
          {
            "kind": "p",
            "text": "<strong>Langkah 3: Bahagikan.</strong> [[\\boxed{\\sec(A)=1.25}]]."
          },
          {
            "kind": "p",
            "text": "<strong>Langkah 4: Tafsirkan hasilnya.</strong> Hipotenus adalah 1.25 kali sisi bersebelahan, menjadikannya 25% lebih panjang. Tangga 5 cm yang merentangi jarak mendatar 4 m berkelakuan seperti ini; geometri tidak peduli tentang unit, hanya perkadaran."
          },
          {
            "kind": "p",
            "text": "<strong>Langkah 5: Sahkan menggunakan kosinus.</strong> [[\\cos(A)=4/5=0.8]], dan [[1/0.8=1.25]]. Semakan salingan mengesahkan hasil sekan, kerana kosinus dan sekan adalah songsang tepat antara satu sama lain."
          },
          {
            "kind": "p",
            "text": "<strong>Langkah 6: Sahkan segi tiga.</strong> [[3^2+4^2=5^2]], iaitu [[9+16=25]]. Panjang sisi memenuhi teorem Pythagoras, jadi ia membentuk segi tiga tegak yang sebenar dan nilai sekan boleh dipercayai."
          }
        ]
      },
      "sec-howto": {
        "h2": "Cara Menggunakan Kalkulator Nisbah Sekan",
        "blocks": [
          {
            "kind": "p",
            "text": "Kalkulator di atas menerima dua input, hipotenus [[c]] dan sisi bersebelahan [[b]], dan mengembalikan [[\\sec(A)]]. Ikuti langkah-langkah ini mengikut tertib."
          }
        ],
        "steps": [
          "<strong>Kenal pasti sudut rujukan [[A]].</strong> Setiap label sisi dalam nisbah ditakrifkan berbanding sudut ini, jadi pilihnya sebelum menyentuh panjang sisi.",
          "<strong>Cari hipotenus [[c]].</strong> Ia bertentangan dengan sudut tegak dan merupakan sisi paling panjang dalam segi tiga; dalam gambar rajah ia ialah sisi yang condong.",
          "<strong>Cari sisi bersebelahan [[b]].</strong> Ia menyentuh sudut [[A]] dan bukan hipotenus; ia ialah salah satu daripada dua kaki yang serenjang.",
          "<strong>Dapatkan atau ukur kedua-dua panjang sisi.</strong> Ukur dengan alat yang sama dan unit yang sama, atau tukarkan satu ukuran sebelum meneruskan.",
          "<strong>Masukkan hipotenus dalam medan input pertama.</strong> Ini ialah pembilang pecahan, jadi kesilapan di sini akan mengherot seluruh jawapan.",
          "<strong>Masukkan sisi bersebelahan dalam medan input kedua.</strong> Ini ialah penyebut; ia mestilah sisi yang bersebelahan dengan sudut [[A]], bukan sisi yang bertentangannya.",
          "<strong>Pilih unit ukuran yang serasi menggunakan pemilih unit yang disediakan.</strong> Kedua-dua medan mesti menggunakan unit yang sama, atau setara yang ditukar, atau nisbahnya akan salah.",
          "<strong>Pastikan kedua-dua ukuran adalah positif.</strong> Panjang sifar atau negatif tidak bermakna dalam segi tiga dan menandakan ralat memasukkan data.",
          "<strong>Semak bahawa hipotenus lebih panjang daripada sisi bersebelahan.</strong> Jika tidak, sama ada sisinya tersalah label atau nombor-nombor itu tidak boleh membentuk segi tiga tegak.",
          "<strong>Klik Calculate sec(A).</strong> Alat ini melakukan pembahagian [[c/b]] dan memaparkan nisbah.",
          "<strong>Baca nisbah sekan yang terhasil.</strong> Ia ialah perpuluhan tanpa dimensi, biasanya dengan empat tempat perpuluhan, sedia untuk digunakan dalam pengiraan lanjut.",
          "<strong>Pastikan hasilnya lebih besar daripada 1.</strong> Bagi segi tiga tegak yang sah dan tidak degenerat dengan sudut rujukan tirus, [[\\sec(A) \\gt 1]]; nilai pada atau di bawah 1 bermakna sesuatu yang tidak kena di peringkat awal.",
          "<strong>Gunakan Reset apabila anda ingin mengosongkan input dan memulakan pengiraan baharu.</strong> Medan-medan dan hasil kembali ke keadaan asal."
        ],
        "closingParagraphs": [
          "Kalkulator tidak memerlukan sisi bertentangan atau input sudut, kerana nisbah sekan asas ditentukan sepenuhnya oleh dua panjang. Ia juga tidak mendapatkan semula sudut atau sisi yang tiada; bagi yang itu, formula yang disusun semula kemudian dalam panduan ini menunjukkan laluan manual."
        ]
      },
      "sec-examples": {
        "h2": "Contoh Pengiraan Sekan Langkah demi Langkah",
        "blocks": [
          {
            "kind": "p",
            "text": "Empat contoh ini menggunakan segi tiga klasik yang nilai sekannya wajar dihafal, kerana ia muncul berulang kali dalam trigonometri."
          },
          {
            "kind": "h3",
            "text": "Contoh 1: Segi Tiga Tegak 3-4-5"
          },
          {
            "kind": "p",
            "text": "Diberi [[b=4\\,\\text{cm}]], [[a=3\\,\\text{cm}]], dan [[c=5\\,\\text{cm}]]:"
          },
          {
            "kind": "p",
            "text": "[[\\sec(A)=\\frac{5}{4}]]"
          },
          {
            "kind": "p",
            "text": "[[\\boxed{\\sec(A)=1.25}]]"
          },
          {
            "kind": "p",
            "text": "Hipotenus adalah 25% lebih panjang daripada sisi bersebelahan. Ini ialah contoh sekan paling lazim dalam buku teks, dan hasil 1.25 adalah tepat."
          },
          {
            "kind": "h3",
            "text": "Contoh 2: Segi Tiga Tegak 5-12-13"
          },
          {
            "kind": "p",
            "text": "Diberi sisi bersebelahan [[b=12\\,\\text{m}]], sisi bertentangan [[a=5\\,\\text{m}]], dan hipotenus [[c=13\\,\\text{m}]]:"
          },
          {
            "kind": "p",
            "text": "[[\\sec(A)=\\frac{13}{12}]]"
          },
          {
            "kind": "p",
            "text": "[[\\boxed{\\sec(A)\\approx1.0833}]]"
          },
          {
            "kind": "p",
            "text": "Hipotenus adalah lebih kurang 8.33% lebih panjang daripada sisi bersebelahan. Segi tiga ini muncul dalam masalah pembinaan kerana 13 menghampiri kecerunan bumbung yang landai."
          },
          {
            "kind": "h3",
            "text": "Contoh 3: Segi Tiga 45-45-90"
          },
          {
            "kind": "p",
            "text": "Diberi sisi bersebelahan [[b=1\\,\\text{cm}]], sisi bertentangan [[a=1\\,\\text{cm}]], dan hipotenus [[c=\\sqrt{2}\\,\\text{cm}]]:"
          },
          {
            "kind": "p",
            "text": "[[\\sec(45^\\circ)=\\frac{\\sqrt{2}}{1}]]"
          },
          {
            "kind": "p",
            "text": "[[\\boxed{\\sec(45^\\circ)=\\sqrt{2}\\approx1.4142}]]"
          },
          {
            "kind": "p",
            "text": "Hipotenus adalah lebih kurang 1.4142 kali mana-mana kaki. Pada 45 darjah kedua-dua kaki adalah sama, jadi sekan sama dengan kosekan di sini, kedua-duanya [[\\sqrt{2}]]."
          },
          {
            "kind": "h3",
            "text": "Contoh 4: Segi Tiga 30-60-90"
          },
          {
            "kind": "p",
            "text": "Bagi sudut rujukan [[A=30^\\circ]], gunakan sisi bersebelahan [[b=\\sqrt{3}\\,\\text{cm}]], sisi bertentangan [[a=1\\,\\text{cm}]], dan hipotenus [[c=2\\,\\text{cm}]]:"
          },
          {
            "kind": "p",
            "text": "[[\\sec(30^\\circ)=\\frac{2}{\\sqrt{3}}]]"
          },
          {
            "kind": "p",
            "text": "[[\\boxed{\\sec(30^\\circ)\\approx1.1547}]]"
          },
          {
            "kind": "p",
            "text": "Hipotenus adalah lebih kurang 15.47% lebih panjang daripada sisi bersebelahan. Perhatikan bahawa nisbah hipotenus 2:1 yang sama muncul pada 60 darjah dengan sisi-sisinya ditukar, di mana sekannya menjadi 2."
          }
        ]
      },
      "sec-applications": {
        "h2": "Contoh Sebenar Penggunaan Nisbah Sekan",
        "blocks": [
          {
            "kind": "p",
            "text": "Sekan membuktikan nilainya di mana-mana sahaja panjang yang condong mesti dibandingkan dengan unjuran mendatarnya. Dalam setiap contoh, segi tiga tegak ialah model geometri yang dipermudahkan bagi situasi sebenar, dan andaian yang dinyatakan menjadikan pemudahan itu jujur."
          },
          {
            "kind": "h3",
            "text": "Contoh 5: Mengira Nisbah Sekan Tangga"
          },
          {
            "kind": "p",
            "text": "Sebuah tangga sepanjang 5 m, dan tapaknya 4 m dari dinding menegak. Sudut [[A]] terletak antara tangga dengan tanah yang rata. Hipotenus ialah tangga itu sendiri, [[c=5\\,\\text{m}]], dan sisi bersebelahan ialah jarak tanah mendatar, [[b=4\\,\\text{m}]]:"
          },
          {
            "kind": "p",
            "text": "[[\\sec(A)=\\frac{5}{4}]]"
          },
          {
            "kind": "p",
            "text": "[[\\boxed{\\sec(A)=1.25}]]"
          },
          {
            "kind": "p",
            "text": "Tangga itu 25% lebih panjang daripada unjuran tanah mendatarnya. Nisbah ini tidak menentukan sama ada tangga diletakkan dengan selamat; keselamatan tangga bergantung pada sudut kerja dan tapaknya, bukan pada sekan sahaja."
          },
          {
            "kind": "h3",
            "text": "Contoh 6: Mengira Nisbah Sekan Kasau Bumbung"
          },
          {
            "kind": "p",
            "text": "Kasau bumbung mempunyai panjang condong 6.5 m dan jarak mendatar 6 m. Kasau ialah hipotenus, [[c=6.5\\,\\text{m}]], dan jarak mendatar ialah sisi bersebelahan, [[b=6\\,\\text{m}]]:"
          },
          {
            "kind": "p",
            "text": "[[\\sec(A)=\\frac{6.5}{6}]]"
          },
          {
            "kind": "p",
            "text": "[[\\boxed{\\sec(A)\\approx1.0833}]]"
          },
          {
            "kind": "p",
            "text": "Kasau adalah lebih kurang 8.33% lebih panjang daripada jarak mendatarnya. Tukang bumbung menggunakan hubungan ini secara songsang sepanjang masa: ukur jarak pada pelan, darabkan dengan sekan, tempah stok kasau. Nisbah ini bukan penilaian reka bentuk bumbung atau struktur yang lengkap."
          },
          {
            "kind": "h3",
            "text": "Contoh 7: Menilai Nisbah Sekan Tanjakan"
          },
          {
            "kind": "p",
            "text": "Tanjakan yang dipermudahkan mempunyai panjang condong 9.5 m dan jarak mendatar 9 m. Permukaan condong ialah hipotenus, [[c=9.5\\,\\text{m}]], dan jarak mendatar ialah sisi bersebelahan, [[b=9\\,\\text{m}]]:"
          },
          {
            "kind": "p",
            "text": "[[\\sec(A)=\\frac{9.5}{9}]]"
          },
          {
            "kind": "p",
            "text": "[[\\boxed{\\sec(A)\\approx1.0556}]]"
          },
          {
            "kind": "p",
            "text": "Panjang condong tanjakan adalah lebih kurang 5.56% lebih panjang daripada unjuran mendatarnya. Sekan yang landai mencerminkan kecerunan yang lembut, tetapi nisbah sahaja tidak menentukan kebolehcapaian atau pematuhan kod binaan."
          },
          {
            "kind": "h3",
            "text": "Contoh 8: Ukuran Ukur Tanah"
          },
          {
            "kind": "p",
            "text": "Segi tiga ukur tanah yang dipermudahkan mempunyai jarak garis lurus 50 m dan pemisahan mendatar 40 m. Jarak garis lurus ialah hipotenus, [[c=50\\,\\text{m}]], dan pemisahan mendatar ialah sisi bersebelahan, [[b=40\\,\\text{m}]]:"
          },
          {
            "kind": "p",
            "text": "[[\\sec(A)=\\frac{50}{40}]]"
          },
          {
            "kind": "p",
            "text": "[[\\boxed{\\sec(A)=1.25}]]"
          },
          {
            "kind": "p",
            "text": "Jarak garis lurus adalah 25% lebih panjang daripada pemisahan mendatar. Juruukur menggunakan pengurangan mendatar seperti ini secara rutin; kerja lapangan sebenar mungkin memerlukan pembetulan dan prosedur ukuran tambahan di luar model mudah ini."
          },
          {
            "kind": "h3",
            "text": "Contoh 9: Kabel Penyangga yang Menongkat Tiang"
          },
          {
            "kind": "p",
            "text": "Kabel penyangga sepanjang 13 m, dan sauh tanahnya 12 m secara mendatar dari tiang. Kabel ialah hipotenus, [[c=13\\,\\text{m}]], dan jarak mendatar dari tiang ke sauh ialah sisi bersebelahan, [[b=12\\,\\text{m}]]:"
          },
          {
            "kind": "p",
            "text": "[[\\sec(A)=\\frac{13}{12}]]"
          },
          {
            "kind": "p",
            "text": "[[\\boxed{\\sec(A)\\approx1.0833}]]"
          },
          {
            "kind": "p",
            "text": "Kabel adalah lebih kurang 8.33% lebih panjang daripada unjuran mendatarnya. Ini memberitahu anda berapa panjang kabel untuk dipotong, bukan berapa beban yang ditanggungnya; ketegangan kabel, kekuatan sauh, dan keselamatan struktur memerlukan analisis berasingan."
          },
          {
            "kind": "h3",
            "text": "Contoh 10: Mengira Nisbah Sekan Stringer Tangga"
          },
          {
            "kind": "p",
            "text": "Stringer tangga yang dipermudahkan sepanjang 5 m dan merentangi jarak mendatar 4 m. Stringer ialah hipotenus, [[c=5\\,\\text{m}]], dan jarak mendatar ialah sisi bersebelahan, [[b=4\\,\\text{m}]]:"
          },
          {
            "kind": "p",
            "text": "[[\\sec(A)=\\frac{5}{4}]]"
          },
          {
            "kind": "p",
            "text": "[[\\boxed{\\sec(A)=1.25}]]"
          },
          {
            "kind": "p",
            "text": "Stringer pepenjuru adalah 25% lebih panjang daripada rentang mendatar. Tukang kayu menggunakan pengiraan songsang untuk memotong stringer daripada dimensi pelan. Nisbah tidak mengesahkan dimensi tangga atau pematuhan kod binaan."
          },
          {
            "kind": "h3",
            "text": "Contoh 11: Memahami Unjuran Mendatar Boom Kren"
          },
          {
            "kind": "p",
            "text": "Boom kren yang dipermudahkan mempunyai panjang 10 m dan unjuran mendatar 6 m. Boom ialah hipotenus, [[c=10\\,\\text{m}]], dan unjuran mendatar ialah sisi bersebelahan, [[b=6\\,\\text{m}]]:"
          },
          {
            "kind": "p",
            "text": "[[\\sec(A)=\\frac{10}{6}]]"
          },
          {
            "kind": "p",
            "text": "[[\\boxed{\\sec(A)\\approx1.6667}]]"
          },
          {
            "kind": "p",
            "text": "Boom adalah lebih kurang 66.67% lebih panjang daripada unjuran mendatarnya. Sekan yang curam mencerminkan sudut kerja yang tinggi. Nisbah tidak menentukan kapasiti kren atau keselamatan operasi."
          },
          {
            "kind": "h3",
            "text": "Contoh 12: Segmen Penerbangan Pesawat Lurus"
          },
          {
            "kind": "p",
            "text": "Bagi segmen penerbangan lurus yang dipermudahkan, panjang laluan ialah 5 km dan sesaran mendatar ialah 4 km. Laluan penerbangan ialah hipotenus, [[c=5\\,\\text{km}]], dan sesaran mendatar ialah sisi bersebelahan, [[b=4\\,\\text{km}]]:"
          },
          {
            "kind": "p",
            "text": "[[\\sec(A)=\\frac{5}{4}]]"
          },
          {
            "kind": "p",
            "text": "[[\\boxed{\\sec(A)=1.25}]]"
          },
          {
            "kind": "p",
            "text": "Panjang laluan adalah 25% lebih panjang daripada sesaran mendatar. Ini ialah contoh geometri yang diidealkan, bukan pengiraan navigasi penerbangan yang lengkap; perancangan penerbangan sebenar menambah angin, perubahan altitud, dan laluan ruang udara."
          },
          {
            "kind": "h3",
            "text": "Contoh 13: Pendakap Pepenjuru Mekanikal"
          },
          {
            "kind": "p",
            "text": "Pendakap pepenjuru mempunyai panjang 2 m dan unjuran mendatar 1.2 m. Pendakap ialah hipotenus, [[c=2\\,\\text{m}]], dan unjuran mendatar ialah sisi bersebelahan, [[b=1.2\\,\\text{m}]]:"
          },
          {
            "kind": "p",
            "text": "[[\\sec(A)=\\frac{2}{1.2}]]"
          },
          {
            "kind": "p",
            "text": "[[\\boxed{\\sec(A)\\approx1.6667}]]"
          },
          {
            "kind": "p",
            "text": "Pendakap adalah lebih kurang 66.67% lebih panjang daripada unjuran mendatarnya. Nisbah menghuraikan geometri pemasangan; ia tidak menentukan kekuatan atau kesesuaian pendakap."
          },
          {
            "kind": "h3",
            "text": "Contoh 14: Mengira Nisbah Sekan Laluan Pendakian"
          },
          {
            "kind": "p",
            "text": "Bahagian pendakian lurus yang dipermudahkan mempunyai panjang laluan 100 m dan sesaran mendatar 80 m. Laluan ialah hipotenus, [[c=100\\,\\text{m}]], dan sesaran mendatar ialah sisi bersebelahan, [[b=80\\,\\text{m}]]:"
          },
          {
            "kind": "p",
            "text": "[[\\sec(A)=\\frac{100}{80}]]"
          },
          {
            "kind": "p",
            "text": "[[\\boxed{\\sec(A)=1.25}]]"
          },
          {
            "kind": "p",
            "text": "Laluan lurus adalah 25% lebih panjang daripada sesaran mendatarnya. Denai pendakian sebenar mengandungi selekoh dan kecerunan yang berubah-ubah, jadi anggap ini sebagai satu segmen lurus, bukan keseluruhan laluan."
          },
          {
            "kind": "h3",
            "text": "Contoh 15: Penyangga Sengkuap"
          },
          {
            "kind": "p",
            "text": "Penyangga sengkuap mempunyai panjang 3 m dan unjuran mendatar 2.4 m. Penyangga ialah hipotenus, [[c=3\\,\\text{m}]], dan unjuran mendatar ialah sisi bersebelahan, [[b=2.4\\,\\text{m}]]:"
          },
          {
            "kind": "p",
            "text": "[[\\sec(A)=\\frac{3}{2.4}]]"
          },
          {
            "kind": "p",
            "text": "[[\\boxed{\\sec(A)=1.25}]]"
          },
          {
            "kind": "p",
            "text": "Penyangga adalah 25% lebih panjang daripada unjuran mendatarnya. Pengiraan tidak menentukan kesesuaian struktur; kekuatan pengikat dan beban angin memerlukan semakan tersendiri."
          },
          {
            "kind": "h3",
            "text": "Contoh 16: Kabel antara Dua Titik"
          },
          {
            "kind": "p",
            "text": "Kabel lurus merentangi jumlah panjang 25 m antara dua titik dengan pemisahan mendatar 24 m. Kabel ialah hipotenus, [[c=25\\,\\text{m}]], dan pemisahan mendatar ialah sisi bersebelahan, [[b=24\\,\\text{m}]]:"
          },
          {
            "kind": "p",
            "text": "[[\\sec(A)=\\frac{25}{24}]]"
          },
          {
            "kind": "p",
            "text": "[[\\boxed{\\sec(A)\\approx1.0417}]]"
          },
          {
            "kind": "p",
            "text": "Kabel adalah lebih kurang 4.17% lebih panjang daripada pemisahan mendatar. Model yang dipermudahkan mengandaikan kabel lurus dan hubungan segi tiga tegak; kabel sebenar melendut, yang menambah panjang di luar model sekan."
          },
          {
            "kind": "p",
            "text": "Sekan ialah nisbah matematik bukannya kuantiti fizikal yang berunit. Nilai praktikalnya datang daripada membandingkan panjang yang condong dengan unjuran mendatarnya, mendapatkan semula panjang apabila sudut diketahui, mengesahkan geometri segi tiga, dan menggunakan formula yang secara khusus memerlukan sekan. Ia tidak pernah mensahkan keselamatan struktur, kapasiti beban, kebolehcapaian, atau pematuhan kejuruteraan dengan sendirinya."
          }
        ],
        "tables": [
          {
            "headers": [
              "Situasi",
              "c",
              "b",
              "Formula",
              "Nisbah",
              "Lebih panjang",
              "Maksud"
            ],
            "rows": [
              [
                "Tangga",
                "5 m",
                "4 m",
                "5/4",
                "1.25",
                "25%",
                "Tangga suku lebih panjang daripada jarak tanahnya"
              ],
              [
                "Kasau bumbung",
                "6.5 m",
                "6 m",
                "6.5/6",
                "1.0833",
                "8.33%",
                "Kasau sedikit lebih panjang daripada jarak mendatar"
              ],
              [
                "Tanjakan",
                "9.5 m",
                "9 m",
                "9.5/9",
                "1.0556",
                "5.56%",
                "Kecerunan lembut hampir tidak lebih panjang daripada jarak"
              ],
              [
                "Ukur tanah",
                "50 m",
                "40 m",
                "50/40",
                "1.25",
                "25%",
                "Jarak garis lurus melebihi jarak mendatar"
              ],
              [
                "Kabel penyangga",
                "13 m",
                "12 m",
                "13/12",
                "1.0833",
                "8.33%",
                "Panjang kabel untuk dipotong daripada jarak tanah"
              ],
              [
                "Stringer tangga",
                "5 m",
                "4 m",
                "5/4",
                "1.25",
                "25%",
                "Stringer pepenjuru berbanding rentang mendatar"
              ],
              [
                "Boom kren",
                "10 m",
                "6 m",
                "10/6",
                "1.6667",
                "66.67%",
                "Boom curam jauh lebih panjang daripada unjurannya"
              ],
              [
                "Segmen penerbangan",
                "5 km",
                "4 km",
                "5/4",
                "1.25",
                "25%",
                "Laluan diidealkan berbanding sesaran mendatar"
              ],
              [
                "Pendakap pepenjuru",
                "2 m",
                "1.2 m",
                "2/1.2",
                "1.6667",
                "66.67%",
                "Panjang pendakap berbanding unjuran mendatarnya"
              ],
              [
                "Laluan pendakian",
                "100 m",
                "80 m",
                "100/80",
                "1.25",
                "25%",
                "Segmen lurus berbanding jarak mendatar pada peta"
              ],
              [
                "Penyangga sengkuap",
                "3 m",
                "2.4 m",
                "3/2.4",
                "1.25",
                "25%",
                "Panjang penyangga berbanding capaian mendatar"
              ],
              [
                "Rentang kabel",
                "25 m",
                "24 m",
                "25/24",
                "1.0417",
                "4.17%",
                "Kabel hampir mendatar, hampir tiada panjang tambahan"
              ]
            ]
          }
        ],
        "imgAlt": "Empat panel: nisbah tangga 1.25, tanjakan 1.0556, ukur 1.25, boom kren 1.6667, setiap satu dengan segi tiga tegak berlabel",
        "figcaption": "Empat pengiraan praktikal: tangga, tanjakan, ukur tanah, dan boom kren, setiap satu dengan segi tiga, formula, dan nisbahnya."
      },
      "sec-angle": {
        "h2": "Memahami Hubungan antara Sekan dengan Saiz Sudut",
        "blocks": [
          {
            "kind": "p",
            "text": "Sekan meningkat apabila sudut rujukan meningkat. Geometrinya menjelaskan mengapa: apabila sudut [[A]] kecil, sisi bersebelahan hampir sama panjang dengan hipotenus, jadi nisbahnya berada sedikit di atas 1. Apabila sudut melebar, sisi bersebelahan menjadi bahagian yang lebih kecil daripada hipotenus, dan nisbahnya meningkat. Pada [[\\45^\\circ]] sekan ialah [[\\sqrt{2}]], lebih kurang 1.4142; pada [[\\60^\\circ]] ia tepat 2, kerana hipotenus adalah dua kali sisi bersebelahan; dan apabila sudut menghampiri [[\\90^\\circ]], sisi bersebelahan mengecil menghampiri sifar dan sekan meningkat tanpa batas."
          }
        ],
        "tables": [
          {
            "headers": [
              "Sudut [[\\A]]",
              "Sisi bersebelahan [[\\b]]",
              "Hipotenus [[\\c]]",
              "Nisbah sekan"
            ],
            "rows": [
              [
                "[[\\30^\\circ]]",
                "[[\\sqrt{3}]]",
                "2",
                "Lebih kurang 1.1547"
              ],
              [
                "[[\\45^\\circ]]",
                "1",
                "[[\\sqrt{2}]]",
                "Lebih kurang 1.4142"
              ],
              [
                "[[\\60^\\circ]]",
                "1",
                "2",
                "2"
              ],
              [
                "[[\\75^\\circ]]",
                "1",
                "Lebih kurang 3.8637",
                "Lebih kurang 3.8637"
              ]
            ]
          }
        ],
        "closingParagraphs": [
          "Pola ini adalah monotonik: setiap peningkatan sudut menaikkan sekan, dan nisbah kekal di atas 1 bagi setiap sudut tirus. Ukuran dalam jadual adalah ilustratif; nisbah, bukan saiz mutlak segi tiga, yang menentukan sudut. Sekan oleh itu menghuraikan bentuk segi tiga, bukan skalanya."
        ],
        "imgAlt": "Tiga segi tiga pada 30, 45, 60 darjah dengan nilai sekan 1.1547, 1.4142, 2; sekan meningkat apabila sudut bertambah",
        "figcaption": "Apabila sudut A bertambah, sisi bersebelahan menjadi bahagian yang lebih kecil daripada hipotenus, maka sec(A) meningkat."
      },
      "sec-hypotenuse": {
        "h2": "Cara Mencari Hipotenus Menggunakan Sekan",
        "blocks": [
          {
            "kind": "p",
            "text": "Formula sekan boleh disusun semula untuk mencari hipotenus apabila sisi bersebelahan dan sudut diketahui. Mulakan dengan [[\\sec(A)=c/b]] dan darabkan kedua-dua belah dengan [[b]]:"
          },
          {
            "kind": "p",
            "text": "[[[\\boxed{c=b\\sec(A)}]]]"
          },
          {
            "kind": "p",
            "text": "Hipotenus sama dengan sisi bersebelahan didarabkan dengan sekan sudut. Diberi sisi bersebelahan [[b=4\\,\\text{m}]] dan sudut [[A=60^\\circ]], dan diketahui [[\\sec(60^\\circ)=2]]:"
          },
          {
            "kind": "p",
            "text": "[[c=4\\times2]]"
          },
          {
            "kind": "p",
            "text": "[[\\boxed{c=8\\,\\text{m}}]]"
          },
          {
            "kind": "p",
            "text": "Hipotenus adalah dua kali sisi bersebelahan pada sudut ini, yang sepadan dengan geometri 30-60-90: sisi yang bertentangan dengan sudut 30 darjah adalah separuh hipotenus. Sisi bersebelahan boleh dicari dengan cara yang sama dengan menyusun semula sekali lagi:"
          },
          {
            "kind": "p",
            "text": "[[[\\boxed{b=\\frac{c}{\\sec(A)}}]]]"
          },
          {
            "kind": "p",
            "text": "Dengan hipotenus [[c=10\\,\\text{m}]] dan [[A=60^\\circ]]: [[b=10/2]], jadi [[\\boxed{b=5\\,\\text{m}}]]. Ini ialah penyusunan semula matematik bagi formula yang sama. Kalkulator pada halaman ini mengembalikan nisbah sekan daripada panjang sisi; ia tidak mengira sisi yang tiada secara langsung."
          }
        ]
      },
      "sec-recover": {
        "h2": "Cara Mencari Sudut daripada Nisbah Sekan",
        "blocks": [
          {
            "kind": "p",
            "text": "Nisbah sekan dan sudut ialah kuantiti yang berbeza: satu ialah perbandingan sisi tanpa dimensi, satu lagi diukur dalam darjah. Jika nisbah sekan diketahui, dapatkan semula kosinus dengan salingan:"
          },
          {
            "kind": "p",
            "text": "[[\\cos(A)=\\frac{1}{\\sec(A)}]]"
          },
          {
            "kind": "p",
            "text": "Kemudian kosinus songsang mengembalikan sudut:"
          },
          {
            "kind": "p",
            "text": "[[[\\boxed{A=\\cos^{-1}\\left(\\frac{1}{\\sec(A)}\\right)}]]]"
          },
          {
            "kind": "p",
            "text": "Diberi [[\\sec(A)=1.25]], mula-mula hitung kosinus: [[\\cos(A)=1/1.25=0.8]]. Kemudian [[A=\\cos^{-1}(0.8)]], menghasilkan [[\\boxed{A\\approx36.87^\\circ}]]. Ini ialah pengiraan sudut yang berasingan, bukan sesuatu yang dilakukan kalkulator nisbah sekan secara langsung. Tetapkan kalkulator saintifik kepada mod darjah jika jawapan dijangka dalam darjah; dalam mod radian input yang sama mengembalikan lebih kurang 0.6435, iaitu sudut yang sama dalam unit yang berbeza."
          }
        ]
      },
      "sec-mistakes": {
        "h2": "Kesilapan Lazim dalam Mengira Sekan",
        "blocks": [
          {
            "kind": "p",
            "text": "Kebanyakan ralat sekan datang daripada pecahan yang terbalik, sisi yang tersalah label, atau kesilapan unit. Semak senarai ini sebelum mempercayai hasil."
          }
        ],
        "steps": [
          "<strong>Menyongsangkan formula dan mengira [[b/c]] bukannya [[c/b]].</strong> Ini ialah ralat paling lazim, dan ia mengembalikan kosinus bukannya sekan. Dengan [[c=5]] dan [[b=4]], susunan yang salah memberi 0.8; susunan yang betul memberi 1.25.",
          "<strong>Mengelirukan sekan dengan kosinus.</strong> Kosinus ialah sisi bersebelahan dibahagikan dengan hipotenus; sekan ialah songsang tepatnya. Jika jawapannya keluar di bawah 1, ia hampir pasti kosinus, bukan sekan.",
          "<strong>Mengelirukan sekan dengan kosekan.</strong> Kedua-duanya menggunakan hipotenus sebagai pembilang, jadi kelihatan serupa. Sekan membahagikan dengan sisi bersebelahan [[b]]; kosekan membahagikan dengan sisi bertentangan [[a]]. Semak kaki yang mana sebenarnya diberi oleh masalah.",
          "<strong>Menggunakan sisi bertentangan bukannya sisi bersebelahan.</strong> Membahagikan [[c/a]] mengira kosekan. Dengan [[c=5]] dan [[a=3]], itu memberi 1.6667, kosekan yang betul tetapi sekan yang salah.",
          "<strong>Menggunakan sisi yang bukan hipotenus sebagai pembilang.</strong> Sekan sentiasa mempunyai hipotenus di atas. Kaki atas kaki ialah tangen atau kotangen; kaki atas hipotenus ialah sinus atau kosinus.",
          "<strong>Tertukar antara sisi bersebelahan dan sisi bertentangan.</strong> Label bertukar apabila sudut rujukan berubah dari [[A]] kepada [[B]]. Sentiasa sahkan sudut yang mana dinamakan masalah sebelum menetapkan [[b]].",
          "<strong>Menganggap sekan ialah sudut yang diukur dalam darjah.</strong> Hasil 1.25 ialah nisbah, bukan [[\\1.25^\\circ]]. Menganggapnya sebagai darjah menyuapkan perkara yang tidak masuk akal ke dalam mana-mana pengiraan susulan.",
          "<strong>Melaporkan nisbah dengan meter atau sentimeter.</strong> Unit saling membatalkan dalam pembahagian, jadi \"1.25 m\" adalah salah. Tulis nombor tulen dan simpan unit dalam ukuran input di mana sepatutnya.",
          "<strong>Memasukkan panjang sisi sifar atau negatif.</strong> Segi tiga tidak boleh mempunyai sisi sifar atau negatif, jadi input ini menandakan ralat memasukkan data atau ukuran yang tiada, bukan kes tepi yang sah.",
          "<strong>Memasukkan sisi bersebelahan yang lebih panjang daripada hipotenus.</strong> Hipotenus sentiasa sisi yang paling panjang. Jika [[b \\gt c]], inputnya tertukar atau segi tiga itu mustahil.",
          "<strong>Mencampurkan unit ukuran.</strong> Hipotenus 5 m dengan sisi bersebelahan 40 cm memberi 0.125, nombor yang tidak bermakna. Tukar kepada satu unit dahulu: 5 m dan 4 m memberi 1.25 yang betul.",
          "<strong>Membundarkan terlalu awal.</strong> Membundarkan pembahagian perantaraan kepada dua perpuluhan kemudian meneruskan pengiraan akan menggandakan ralat. Kekalkan ketepatan penuh melalui setiap langkah dan bundarkan hanya jawapan akhir.",
          "<strong>Menganggap sekan mesti sama dengan 1 bagi segi tiga tegak.</strong> Tiada segi tiga tegak mempunyai sekan tepat 1. Jangkakan nilai di atas 1, dan anggap tepat 1 sebagai tanda input terbalik atau segi tiga degenerat.",
          "<strong>Mengelirukan salingan kosinus dengan kosinus songsang.</strong> [[1/\\cos(A)]] ialah sekan, iaitu nisbah; [[\\cos^{-1}]] ialah kosinus songsang, yang mengembalikan sudut. Nama yang serupa menyebabkan ralat sebenar, jadi baca tatatanda dengan teliti.",
          "<strong>Menganggap sekan sahaja menentukan dimensi mutlak segi tiga.</strong> Sekan menghuraikan bentuk, bukan saiz: banyak segi tiga berkongsi sekan 1.25, dari hipotenus 5 cm hingga 5 km. Nisbah menetapkan perkadaran; panjang sebenar memerlukan sekurang-kurangnya satu ukuran sisi."
        ],
        "closingParagraphs": [
          "<strong>Salah lawan betul:</strong> Diberi hipotenus [[\\c=5]] dan sisi bersebelahan [[\\b=4]]:",
          "<strong>Salah:</strong> [[4/5=0.8]]. Ini ialah kosinus, bukan sekan. Pembilang dan penyebut terbalik.",
          "<strong>Betul:</strong> [[\\sec(A)=5/4=1.25]].",
          "<strong>Semakan:</strong> [[\\cos(A)=0.8]], dan [[1/0.8=1.25]]. Semakan salingan mengesahkan hasilnya, dan jawapannya berada di atas 1, seperti yang mesti bagi setiap sekan yang sah."
        ]
      },
      "sec-verify": {
        "h2": "Cara Menyemak Sama Ada Keputusan Sekan Anda Sah",
        "blocks": [
          {
            "kind": "p",
            "text": "Segi tiga tegak yang sah dan tidak degenerat memerlukan sisi-sisi positif dengan hipotenus yang paling panjang, [[0 \\lt b \\lt c]], jadi hasil sekan mestilah lebih besar daripada 1:"
          },
          {
            "kind": "p",
            "text": "[[[\\boxed{\\sec(A)=\\frac{c}{b} \\gt 1}]]]"
          },
          {
            "kind": "p",
            "text": "Kedua-dua ukuran mesti menggunakan unit yang serasi. Hasil pada atau di bawah 1 biasanya menunjukkan input terbalik, pengecaman sisi yang salah, ukuran yang tidak serasi, atau dimensi segi tiga yang tidak sah."
          },
          {
            "kind": "h3",
            "text": "Kaedah 1: Semak Salingan Kosinus"
          },
          {
            "kind": "p",
            "text": "Sahkan [[\\cos(A)=b/c]], kemudian pastikan [[\\sec(A)=1/\\cos(A)]]. Dengan [[b=4]] dan [[c=5]]: [[\\cos(A)=4/5=0.8]], jadi [[\\sec(A)=1/0.8=1.25]]. Ketidaksepadanan antara dua laluan menandakan pecahan terbalik atau sisi tersalah label."
          },
          {
            "kind": "h3",
            "text": "Kaedah 2: Semak Teorem Pythagoras"
          },
          {
            "kind": "p",
            "text": "Jika sisi bertentangan diketahui atau diperlukan, hitung [[a=\\sqrt{c^2-b^2}]]. Bagi [[b=4]] dan [[c=5]]: [[a=\\sqrt{25-16}=3]], dan [[3^2+4^2=5^2]]. Ini mengesahkan dimensi segi tiga tegak 3-4-5. Sisi bertentangan ialah nilai pengesahan di sini, bukan sebahagian daripada formula sekan utama."
          },
          {
            "kind": "h3",
            "text": "Kaedah 3: Semak Menggunakan Kosinus Songsang"
          },
          {
            "kind": "p",
            "text": "Bagi nisbah sekan 1.25: [[A=\\cos^{-1}(1/1.25)]], iaitu [[A=\\cos^{-1}(0.8)\\approx36.87^\\circ]]. Kerana sekan berada sederhana di atas 1, sudutnya sepatutnya jauh di bawah [[\\45^\\circ]]; jika tidak, label sisi mungkin tertukar. Perbezaan kecil mungkin timbul daripada pembundaran."
          }
        ]
      },
      "sec-vs": {
        "h2": "Sekan Berbanding Kosinus, Sinus dan Kosekan",
        "blocks": [
          {
            "kind": "p",
            "text": "Setiap nisbah membandingkan pasangan sisi yang berbeza, menggunakan sudut rujukan dan label sisi yang sama:"
          }
        ],
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
                "Sisi bertentangan berbanding hipotenus"
              ],
              [
                "Kosinus",
                "cos(A) = b/c",
                "Sisi bersebelahan berbanding hipotenus"
              ],
              [
                "Tangen",
                "tan(A) = a/b",
                "Sisi bertentangan berbanding sisi bersebelahan"
              ],
              [
                "Sekan",
                "sec(A) = c/b",
                "Hipotenus berbanding sisi bersebelahan"
              ],
              [
                "Kosekan",
                "csc(A) = c/a",
                "Hipotenus berbanding sisi bertentangan"
              ],
              [
                "Kotangen",
                "cot(A) = b/a",
                "Sisi bersebelahan berbanding sisi bertentangan"
              ]
            ]
          }
        ],
        "closingParagraphs": [
          "Sekan dan kosinus ialah pasangan salingan: [[\\sec(A)=1/\\cos(A)]]. Jika [[\\cos(A)=0.8]], maka [[\\sec(A)=1.25]]. Gunakan sekan apabila formula memerlukan hipotenus dibahagikan dengan sisi bersebelahan, apabila anda membandingkan panjang yang condong dengan unjuran mendatarnya, atau apabila hubungan yang diketahui bermula dari sisi yang paling panjang; gunakan kosinus bagi sisi bersebelahan atas hipotenus, sinus bagi sisi bertentangan berbanding hipotenus, dan kosekan apabila hipotenus dibandingkan dengan sisi bertentangan.",
          "Bagi nisbah-nisbah yang berjiran, lihat <a href=\"/sine-ratio-calculator/\" class=\"text-primary hover:underline\">Kalkulator Nisbah Sinus</a>, <a href=\"/cosine-ratio-calculator/\" class=\"text-primary hover:underline\">Kalkulator Nisbah Kosinus</a>, <a href=\"/tangent-ratio-calculator/\" class=\"text-primary hover:underline\">Kalkulator Nisbah Tangen</a>, <a href=\"/cosecant-ratio-calculator/\" class=\"text-primary hover:underline\">Kalkulator Nisbah Kosekan</a>, dan <a href=\"/cotangent-ratio-calculator/\" class=\"text-primary hover:underline\">Kalkulator Nisbah Kotangen</a>."
        ]
      },
      "sec-related": {
        "h2": "Terokai Kalkulator Trigonometri Berkaitan",
        "related": [
          {
            "name": "Kalkulator Nisbah Sinus"
          },
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
            "name": "Kalkulator Nisbah Kotangen"
          },
          {
            "name": "Kalkulator Sudut Segi Tiga Tegak"
          }
        ]
      },
      "sec-conclusion": {
        "h2": "Gunakan Nisbah Sekan Dengan Yakin",
        "blocks": [
          {
            "kind": "p",
            "text": "Sekan ialah bentuk terbalik kosinus: bahagikan hipotenus dengan sisi bersebelahan dan anda telah menghuraikan berapa lebih panjang sisi yang condong berbanding jejak mendatarnya. Formula [[\\sec(A)=c/b]] hanya memerlukan dua ukuran, jawapannya sentiasa nombor tanpa dimensi yang lebih besar daripada 1, dan ia meningkat apabila sudut rujukan meningkat. Apabila sisi yang tiada diperlukan, [[c=b\\sec(A)]] mendapatkan semula hipotenus; apabila sudut diperlukan, [[A=\\cos^{-1}(1/\\sec(A))]] mendapatkannya semula. Tangga, kasau, tanjakan, atau 3-4-5 dalam buku teks, kaedahnya tidak pernah berubah: kenal pasti hipotenus, kenal pasti sisi bersebelahan, bahagikan, dan sahkan dengan salingan kosinus."
          }
        ]
      }
    },
    "faqs": [
      {
        "question": "Apakah formula nisbah sekan bagi segi tiga tegak?",
        "answer": "sec(A) = c / b: bahagikan hipotenus c dengan sisi yang bersebelahan dengan sudut A. Dengan hipotenus 5 cm dan sisi bersebelahan 4 cm, hasilnya ialah 5/4 = 1.25. Perpuluhan itu ialah jawapan lengkap, nisbah tanpa dimensi, bukan sudut."
      },
      {
        "question": "Bagaimana sekan berkaitan dengan kosinus?",
        "answer": "Sekan ialah salingan kosinus: sec(A) = 1 / cos(A). Jika cos(A) = 4/5 = 0.8, maka sec(A) = 1/0.8 = 1.25. Kedua-dua nisbah menghuraikan sudut yang sama dari perspektif yang terbalik, dan semakan salingan ialah cara terpantas untuk mengesahkan pengiraan sekan."
      },
      {
        "question": "Mengapa sekan lebih besar daripada 1 dalam segi tiga tegak?",
        "answer": "Dalam segi tiga tegak yang sah dan tidak degenerat, hipotenus semestinya lebih panjang daripada mana-mana kaki, jadi c > b > 0. Membahagikan panjang yang lebih besar dengan yang lebih kecil sentiasa memberi nisbah di atas 1: sec(A) = c/b > 1 bagi setiap sudut rujukan tirus."
      },
      {
        "question": "Bolehkah sekan sama dengan 1?",
        "answer": "Tidak bagi sudut tirus biasa dalam segi tiga tegak sebenar. Sekan tepat 1 memerlukan hipotenus sama dengan sisi bersebelahan, yang meruntuhkan segi tiga menjadi garis lurus. Nilai 1 ialah nilai had yang didekati apabila sudut A mengecil menghampiri 0 darjah, bukan nilai yang dihasilkan segi tiga sebenar."
      },
      {
        "question": "Apakah maksud nilai sekan 1.25?",
        "answer": "Hipotenus adalah 1.25 kali lebih panjang daripada sisi bersebelahan, atau 25 peratus lebih panjang. Ia tidak bermakna sudutnya 1.25 darjah, dan tidak bermakna segi tiga itu berukuran 1.25 unit. Sekan ialah perbandingan tanpa dimensi bagi dua panjang."
      },
      {
        "question": "Adakah sekan mempunyai unit ukuran?",
        "answer": "Tidak. Kedua-dua input ialah panjang yang diukur dalam unit yang sama, jadi unitnya saling membatalkan: 5 m / 4 m = 1.25, tepat seperti 500 cm / 400 cm = 1.25. Laporkan sekan sebagai nombor tulen, jangan sekali-kali dengan darjah, meter, atau kaki."
      },
      {
        "question": "Bagaimana cara mengira sekan daripada panjang sisi?",
        "answer": "Ukur hipotenus c dan sisi bersebelahan b dalam unit yang sama, pastikan kedua-duanya positif dan c lebih panjang daripada b, kemudian bahagikan: sec(A) = c / b. Pada halaman ini, masukkan hipotenus dalam medan pertama dan sisi bersebelahan dalam medan kedua, pilih unit yang serasi, dan klik Calculate sec(A)."
      },
      {
        "question": "Bagaimana saya boleh mencari hipotenus menggunakan sekan?",
        "answer": "Susun semula formula kepada c = b * sec(A). Jika sisi bersebelahan ialah 4 m dan sudut A ialah 60 darjah, sec(60 deg) = 2, jadi c = 4 * 2 = 8 m. Ini ialah penyusunan semula secara manual; kalkulator pada halaman ini mengembalikan nisbah daripada panjang sisi, bukan sisi yang tiada."
      },
      {
        "question": "Bagaimana saya boleh mencari sudut daripada nisbah sekan?",
        "answer": "Ambil salingan untuk mendapatkan nisbah kosinus, kemudian gunakan kosinus songsang: A = cos^-1(1 / sec(A)). Bagi sec(A) = 1.25, nisbah kosinus ialah 0.8, jadi A = cos^-1(0.8), lebih kurang 36.87 darjah. Tetapkan kalkulator saintifik kepada mod darjah dahulu. Kalkulator pada halaman ini mengembalikan nisbah, bukan sudut."
      },
      {
        "question": "Apakah perbezaan antara sekan dan kosekan?",
        "answer": "Sekan membahagikan hipotenus dengan sisi bersebelahan (c/b); kosekan membahagikan hipotenus dengan sisi bertentangan (c/a). Kedua-duanya ialah nisbah salingan yang melibatkan hipotenus, tetapi menggunakan kaki yang berbeza, jadi ia menjawab soalan yang berbeza dan tidak boleh ditukar ganti."
      },
      {
        "question": "Bolehkah saya mengira sekan tanpa mengetahui sisi bertentangan?",
        "answer": "Ya. Formula sekan utama hanya menggunakan hipotenus dan sisi bersebelahan, jadi sisi bertentangan tidak pernah terlibat dalam pengiraan. Sisi bertentangan menjadi berguna hanya apabila teorem Pythagoras digunakan untuk mengesahkan segi tiga atau apabila sinus, tangen, atau kosekan terlibat dalam kerja."
      },
      {
        "question": "Bagaimana sekan digunakan dalam ukuran praktikal?",
        "answer": "Sekan membandingkan panjang yang condong dengan unjuran mendatarnya: tangga berbanding jarak tanahnya, kasau bumbung berbanding jarak mendatarnya, kabel berbanding pemisahan mendatar hujung-hujungnya. Nisbah memberitahu anda berapa lebih panjang laluan yang condong berbanding unjurannya, yang berguna untuk menganggarkan panjang bahan daripada pelan mendatar."
      }
    ],
    "faqHeading": "Soalan Lazim",
    "relatedHeading": "Terokai Kalkulator Trigonometri Berkaitan"
  },
  "pl": {
    "tocHeading": "W tym przewodniku",
    "tocItems": {
      "sec-intro": "Czym jest kalkulator stosunku secansa?",
      "sec-triangle": "Przyprostokątna przyległa i przeciwprostokątna",
      "sec-whatis": "Czym jest stosunek secansa",
      "sec-formula": "Jak działa wzór na secans",
      "sec-howto": "Jak korzystać z kalkulatora stosunku secansa",
      "sec-examples": "Przykłady obliczania secansa krok po kroku",
      "sec-applications": "Praktyczne przykłady zastosowania stosunku secansa",
      "sec-angle": "Zależność między secansem a wielkością kąta",
      "sec-hypotenuse": "Jak wyznaczyć przeciwprostokątną za pomocą secansa",
      "sec-recover": "Jak wyznaczyć kąt na podstawie stosunku secansa",
      "sec-mistakes": "Typowe błędy przy obliczaniu secansa",
      "sec-verify": "Jak sprawdzić poprawność wyniku secansa",
      "sec-vs": "Secans a cosinus, sinus i cosecans",
      "sec-faq": "Często zadawane pytania",
      "sec-related": "Powiązane kalkulatory trygonometryczne"
    },
    "sections": {
      "sec-intro": {
        "h2": "Czym jest kalkulator stosunku secansa?",
        "blocks": [
          {
            "kind": "p",
            "text": "Kalkulator stosunku secansa odpowiada na jedno pytanie: dla kąta ostrego w trójkącie prostokątnym, jak najdłuższy bok ma się do boku przylegającego do tego kąta? Wystarczy wprowadzić przeciwprostokątną i przyprostokątną przyległą, a narzędzie podzieli przeciwprostokątną przez przyprostokątną przyległą, zwracając [[\\sec(A)=c/b]]. Dla przeciwprostokątnej 5 cm i przyprostokątnej przyległej 4 cm obliczenie wygląda tak: [[5/4=1.25]], czyli przeciwprostokątna jest 1.25 raza dłuższa od przyprostokątnej przyległej, co oznacza, że jest o 25% dłuższa. Ten ułamek dziesiętny to pełna odpowiedź. Jest to stosunek bezwymiarowy, ponieważ centymetry skracają się w dzieleniu, i nie jest to kąt w stopniach, więc nigdy nie należy odczytywać 1.25 jako [[1.25^\\circ]]. Przyprostokątna przeciwległa nie bierze udziału w tym obliczeniu; wystarczą przeciwprostokątna i przyprostokątna przyległa. Secans jest także odwrotnością cosinusa, dlatego wiele podręczników wprowadza go jako odwróconą postać [[\\cos(A)]]."
          }
        ]
      },
      "sec-triangle": {
        "h2": "Przyprostokątna przyległa i przeciwprostokątna",
        "blocks": [
          {
            "kind": "h3",
            "text": "Czym jest trójkąt prostokątny?"
          },
          {
            "kind": "p",
            "text": "Trójkąt prostokątny ma jeden kąt równy dokładnie [[90^\\circ]], czyli kąt między dwiema prostopadłymi liniami, jak ściana spotykająca się z poziomą podłogą. Przeciwprostokątna leży naprzeciw tego kąta prostego i jest zawsze najdłuższym bokiem, ponieważ musi przebiegać po przekątnej przez cały narożnik. Pozostałe dwa kąty dzielą między sobą pozostałe 90 stopni, więc oba są ostre. Dwie przyprostokątne spotykają się w kącie prostym, prostopadle do siebie, a to właśnie ich związek z przeciwprostokątną umożliwia trygonometrię trójkąta prostokątnego."
          },
          {
            "kind": "h3",
            "text": "Czym jest przyprostokątna przyległa?"
          },
          {
            "kind": "p",
            "text": "Przyprostokątna przyległa [[b]] to bok, który styka się z kątem odniesienia [[A]], nie będąc przeciwprostokątną. W zadaniach praktycznych często pełni rolę rzutu poziomego: odległości na ziemi od podstawy drabiny do ściany, rzutu poziomego krokwi dachowej albo poziomej odległości między dwoma punktami pomiarowymi. Trafia do mianownika wzoru na secans. To, która przyprostokątna jest przyległa, zależy od wybranego kąta odniesienia, więc przejście od kąta [[A]] do kąta [[B]] zamienia oznaczenia przyległej i przeciwległej."
          },
          {
            "kind": "h3",
            "text": "Czym jest przeciwprostokątna?"
          },
          {
            "kind": "p",
            "text": "Przeciwprostokątna [[c]] to bok leżący naprzeciw kąta prostego: na każdym rysunku znajduje się naprzeciw małego kwadracika oznaczającego narożnik [[90^\\circ]] i jest ściśle dłuższa od każdej z przyprostokątnych. W zadaniach praktycznych często pełni rolę długości ukośnej: drabiny, powierzchni rampy, krokwi, liny, zastrzału ukośnego albo prostoliniowej drogi. Trafia do licznika wzoru na secans, dlatego każda wartość secansa wychodzi większa od 1."
          },
          {
            "kind": "h3",
            "text": "Czym jest przyprostokątna przeciwległa?"
          },
          {
            "kind": "p",
            "text": "Przyprostokątna przeciwległa [[a]] leży dokładnie naprzeciw kąta [[A]] i nigdy nie dotyka jego wierzchołka. Nie odgrywa roli w podstawowym obliczeniu secansa, dlatego kalkulator nigdy o nią nie pyta. Staje się istotna, gdy twierdzenie Pitagorasa służy do sprawdzenia, czy dwie znane długości tworzą prawdziwy trójkąt prostokątny, oraz gra główną rolę przy sinusie, tangensie i cosecansie, gdzie przyprostokątna przeciwległa jest jednym z dwóch boków roboczych."
          }
        ],
        "imgAlt": "Trójkąt prostokątny, kąt A u dołu z lewej, złota przeciwprostokątna c, niebieska przyprostokątna b, sec(A)=c/b",
        "figcaption": "Kąt A znajduje się w lewym dolnym rogu; secans wykorzystuje złotą przeciwprostokątną c i niebieską przyprostokątną przyległą b, a nie bok przeciwległy a."
      },
      "sec-whatis": {
        "h2": "Czym jest stosunek secansa",
        "blocks": [
          {
            "kind": "p",
            "text": "Secans porównuje całą długość ukośną z bokiem przylegającym do kąta odniesienia:"
          },
          {
            "kind": "p",
            "text": "[[[\\sec(A)=\\frac{c}{b}]]]"
          },
          {
            "kind": "p",
            "text": "Tutaj [[\\sec(A)]] to secans kąta [[A]], [[c]] to przeciwprostokątna, a [[b]] to przyprostokątna przyległa: liczba mówiąca, ile razy przyprostokątna przyległa mieści się w przeciwprostokątnej."
          },
          {
            "kind": "h3",
            "text": "Secans jako odwrotność cosinusa"
          },
          {
            "kind": "p",
            "text": "Cosinus dzieli przyprostokątną przyległą przez przeciwprostokątną, [[\\cos(A)=b/c]]. Odwrócenie tego ułamka daje [[1/\\cos(A)=c/b]], czyli dokładnie wzór na secans:"
          },
          {
            "kind": "p",
            "text": "[[[\\boxed{\\sec(A)=\\frac{1}{\\cos(A)}=\\frac{c}{b}}]]]"
          },
          {
            "kind": "p",
            "text": "Dla [[\\cos(A)=4/5=0.8]] odwrotność wynosi [[\\sec(A)=1/0.8=1.25]]: ten sam trójkąt, opisany z przeciwnej strony. To rozróżnienie jest istotne, ponieważ arcus cosinus, zapisywany jako [[\\cos^{-1}]], to inne pojęcie: odtwarza kąt na podstawie wartości cosinusa, natomiast [[1/\\cos(A)]] to odwrotność cosinusa, czyli stosunek, a nie kąt."
          },
          {
            "kind": "h3",
            "text": "Co oznacza wartość secansa równa 1.25?"
          },
          {
            "kind": "p",
            "text": "Secans równy 1.25 oznacza, że przeciwprostokątna jest 1.25 raza dłuższa od przyprostokątnej przyległej. Różnica procentowa wynosi [[(1.25-1)\\times100=25]], więc przeciwprostokątna jest o 25% dłuższa od przyprostokątnej przyległej. Nie oznacza to, że kąt wynosi [[1.25^\\circ]], ani że trójkąt mierzy 1.25 jakiejkolwiek jednostki. Secans jest porównaniem, a nie pomiarem."
          },
          {
            "kind": "h3",
            "text": "Dlaczego secans jest większy od 1"
          },
          {
            "kind": "p",
            "text": "W poprawnym, niezdegenerowanym trójkącie prostokątnym przeciwprostokątna jest dłuższa od każdej z przyprostokątnych, więc [[c \\gt b \\gt 0]]. Dzielenie przeciwprostokątnej przez przyprostokątną przyległą daje więc stosunek większy od 1:"
          },
          {
            "kind": "p",
            "text": "[[[\\boxed{\\frac{c}{b} \\gt 1}]]]"
          },
          {
            "kind": "p",
            "text": "Wynik równy dokładnie 1 nie jest możliwy dla zwykłego ostrego kąta odniesienia w niezdegenerowanym trójkącie prostokątnym, ponieważ wymagałby, aby przeciwprostokątna była równa przyprostokątnej przyległej, co spłaszczyłoby trójkąt do linii. Wartość 1 jest wartością graniczną, do której dąży się jedynie, gdy kąt maleje w kierunku [[0^\\circ]]."
          },
          {
            "kind": "h3",
            "text": "Dlaczego secans jest odwrotnością cosinusa"
          },
          {
            "kind": "p",
            "text": "Zależność wynika bezpośrednio z obu wzorów. Cosinus dzieli bok przyległy przez przeciwprostokątną, secans dzieli przeciwprostokątną przez bok przyległy:"
          },
          {
            "kind": "p",
            "text": "[[\\cos(A)=\\frac{b}{c}]]"
          },
          {
            "kind": "p",
            "text": "[[\\sec(A)=\\frac{c}{b}]]"
          },
          {
            "kind": "p",
            "text": "Pomnożenie ich przez siebie skraca wszystko i daje 1:"
          },
          {
            "kind": "p",
            "text": "[[[\\cos(A)\\sec(A)=\\frac{b}{c}\\times\\frac{c}{b}=1]]]"
          },
          {
            "kind": "p",
            "text": "Ta tożsamość to praktyczne narzędzie weryfikacji: oblicz cosinus z tych samych boków, odwróć go, a wynik musi dokładnie zgadzać się z wynikiem secansa. Niezgodność wskazuje na odwrócony ułamek albo błędnie oznaczony bok."
          },
          {
            "kind": "h3",
            "text": "Dlaczego secans nie ma jednostek"
          },
          {
            "kind": "p",
            "text": "Secans dzieli jedną długość przez drugą, więc jednostki się skracają. Na przykład:"
          },
          {
            "kind": "p",
            "text": "[[[\\frac{5\\,\\text{m}}{4\\,\\text{m}}=1.25]]]"
          },
          {
            "kind": "p",
            "text": "Metry znikają, pozostawiając czystą liczbę. Ten sam stosunek pojawia się dla 500 cm i 400 cm albo dla dowolnej pary zgodnych jednostek, dlatego mieszanie jednostek, na przykład przeciwprostokątnej w metrach z przyprostokątną przyległą w centymetrach, psuje obliczenie już na starcie."
          },
          {
            "kind": "h3",
            "text": "Secans a cosecans"
          },
          {
            "kind": "p",
            "text": "Secans i cosecans to stosunki odwrotne, które w liczniku mają przeciwprostokątną, ale w mianowniku różne przyprostokątne:"
          },
          {
            "kind": "p",
            "text": "[[\\sec(A)=\\frac{c}{b}]]"
          },
          {
            "kind": "p",
            "text": "[[\\csc(A)=\\frac{c}{a}]]"
          },
          {
            "kind": "p",
            "text": "Secans łączy przeciwprostokątną z bokiem przyległym, cosecans łączy przeciwprostokątną z bokiem przeciwległym. Nie są wymienne, a wybór niewłaściwego odpowiada na inne pytanie o trójkąt."
          }
        ],
        "imgAlt": "Trzy etapy: trójkąt 3-4-5, cosinus cos(A)=4/5=0.8, secans sec(A)=5/4=1.25, zależność odwrotna",
        "figcaption": "Trzy etapy: oznacz trójkąt 3-4-5, oblicz cosinus cos(A) = 4/5, a następnie odwróć ułamek, aby otrzymać sec(A) = 5/4."
      },
      "sec-formula": {
        "h2": "Jak działa wzór na secans",
        "blocks": [
          {
            "kind": "p",
            "text": "Definicja zaczyna się od słów, a potem przechodzi do symboli. Secans to przeciwprostokątna podzielona przez przyprostokątną przyległą:"
          },
          {
            "kind": "p",
            "text": "[[[\\sec(A)=\\frac{\\text{Hypotenuse}}{\\text{Adjacent}}]]]"
          },
          {
            "kind": "p",
            "text": "W standardowym zapisie staje się to:"
          },
          {
            "kind": "p",
            "text": "[[[\\boxed{\\sec(A)=\\frac{c}{b}}]]]"
          },
          {
            "kind": "p",
            "text": "Przeciwprostokątna należy do licznika, ponieważ secans pyta, jak długa jest strona ukośna względem swojego rzutu poziomego, a przyprostokątna przyległa należy do mianownika, ponieważ jest długością odniesienia, z którą się porównuje."
          },
          {
            "kind": "h3",
            "text": "W pełni rozwiązany przykład: trójkąt prostokątny 3-4-5"
          },
          {
            "kind": "p",
            "text": "Mając przyprostokątną przyległą [[b=4\\,\\text{cm}]], przyprostokątną przeciwległą [[a=3\\,\\text{cm}]] i przeciwprostokątną [[c=5\\,\\text{cm}]], przejdź przez wzór krok po kroku."
          },
          {
            "kind": "p",
            "text": "<strong>Krok 1: Zapisz wzór.</strong> [[\\sec(A)=c/b]]."
          },
          {
            "kind": "p",
            "text": "<strong>Krok 2: Podstaw znane wartości.</strong> [[\\sec(A)=5/4]]."
          },
          {
            "kind": "p",
            "text": "<strong>Krok 3: Podziel.</strong> [[\\boxed{\\sec(A)=1.25}]]."
          },
          {
            "kind": "p",
            "text": "<strong>Krok 4: Zinterpretuj wynik.</strong> Przeciwprostokątna jest 1.25 raza dłuższa od przyprostokątnej przyległej, czyli o 25% dłuższa. Drabina o długości 5 cm rozpięta nad poziomą odległością 4 m zachowuje się w ten sposób; geometria nie dba o jednostkę, tylko o proporcję."
          },
          {
            "kind": "p",
            "text": "<strong>Krok 5: Zweryfikuj za pomocą cosinusa.</strong> [[\\cos(A)=4/5=0.8]] oraz [[1/0.8=1.25]]. Kontrola odwrotności potwierdza wynik secansa, ponieważ cosinus i secans są dokładnymi odwrotnościami siebie."
          },
          {
            "kind": "p",
            "text": "<strong>Krok 6: Zweryfikuj trójkąt.</strong> [[3^2+4^2=5^2]], czyli [[9+16=25]]. Długości boków spełniają twierdzenie Pitagorasa, więc tworzą prawdziwy trójkąt prostokątny, a wartość secansa jest wiarygodna."
          }
        ]
      },
      "sec-howto": {
        "h2": "Jak korzystać z kalkulatora stosunku secansa",
        "blocks": [
          {
            "kind": "p",
            "text": "Kalkulator powyżej przyjmuje dwa wejścia, przeciwprostokątną [[c]] i przyprostokątną przyległą [[b]], i zwraca [[\\sec(A)]]. Wykonaj poniższe kroki w kolejności."
          }
        ],
        "steps": [
          "<strong>Określ kąt odniesienia [[A]].</strong> Każde oznaczenie boku w stosunku jest zdefiniowane względem tego kąta, dlatego wybierz go, zanim zajmiesz się długościami boków.",
          "<strong>Znajdź przeciwprostokątną [[c]].</strong> Leży ona naprzeciw kąta prostego i jest najdłuższym bokiem trójkąta; na rysunkach jest to bok ukośny.",
          "<strong>Znajdź przyprostokątną przyległą [[b]].</strong> Styka się ona z kątem [[A]] i nie jest przeciwprostokątną; jest jedną z dwóch prostopadłych przyprostokątnych.",
          "<strong>Uzyskaj lub zmierz obie długości boków.</strong> Mierz tym samym przyrządem i w tej samej jednostce albo przelicz jeden z pomiarów przed kontynuowaniem.",
          "<strong>Wprowadź przeciwprostokątną w pierwszym polu wejściowym.</strong> To licznik ułamka, więc błąd w tym miejscu przesuwa całą odpowiedź.",
          "<strong>Wprowadź przyprostokątną przyległą w drugim polu wejściowym.</strong> To mianownik; musi to być bok przylegający do kąta [[A]], a nie bok leżący naprzeciw niego.",
          "<strong>Wybierz zgodne jednostki miary za pomocą dostępnych selektorów jednostek.</strong> Oba pola muszą używać tej samej jednostki albo jej przeliczonego odpowiednika, w przeciwnym razie stosunek będzie błędny.",
          "<strong>Upewnij się, że oba pomiary są dodatnie.</strong> Zerowa lub ujemna długość nie ma sensu w trójkącie i sygnalizuje błąd wprowadzania danych.",
          "<strong>Sprawdź, czy przeciwprostokątna jest dłuższa od przyprostokątnej przyległej.</strong> Jeśli nie jest, boki są błędnie oznaczone albo liczby nie mogą tworzyć trójkąta prostokątnego.",
          "<strong>Kliknij przycisk obliczania sec(A).</strong> Narzędzie wykonuje dzielenie [[c/b]] i wyświetla stosunek.",
          "<strong>Odczytaj wynikowy stosunek secansa.</strong> Jest to bezwymiarowy ułamek dziesiętny, zwykle z czterema miejscami po przecinku, gotowy do użycia w dalszych obliczeniach.",
          "<strong>Potwierdź, że wynik jest większy od 1.</strong> Dla poprawnego, niezdegenerowanego trójkąta prostokątnego o ostrym kącie odniesienia [[\\sec(A) \\gt 1]]; wartość równa lub mniejsza od 1 oznacza, że coś poszło nie tak wcześniej.",
          "<strong>Użyj przycisku resetowania, aby wyczyścić dane wejściowe i rozpocząć kolejne obliczenie.</strong> Pola i wynik wracają do stanu początkowego."
        ],
        "closingParagraphs": [
          "Kalkulator nie potrzebuje przyprostokątnej przeciwległej ani kąta wejściowego, ponieważ podstawowy stosunek secansa jest w pełni wyznaczony przez dwie długości. Nie odtwarza też kątów ani brakujących boków; w tym celu przekształcone wzory w dalszej części przewodnika pokazują drogę ręczną."
        ]
      },
      "sec-examples": {
        "h2": "Przykłady obliczania secansa krok po kroku",
        "blocks": [
          {
            "kind": "p",
            "text": "Te cztery przykłady wykorzystują klasyczne trójkąty, których wartości secansa warto zapamiętać, ponieważ nieustannie powracają w trygonometrii."
          },
          {
            "kind": "h3",
            "text": "Przykład 1: Trójkąt prostokątny 3-4-5"
          },
          {
            "kind": "p",
            "text": "Dane: [[b=4\\,\\text{cm}]], [[a=3\\,\\text{cm}]] i [[c=5\\,\\text{cm}]]:"
          },
          {
            "kind": "p",
            "text": "[[\\sec(A)=\\frac{5}{4}]]"
          },
          {
            "kind": "p",
            "text": "[[\\boxed{\\sec(A)=1.25}]]"
          },
          {
            "kind": "p",
            "text": "Przeciwprostokątna jest o 25% dłuższa od przyprostokątnej przyległej. To najczęstszy przykład secansa w podręcznikach, a wynik 1.25 jest dokładny."
          },
          {
            "kind": "h3",
            "text": "Przykład 2: Trójkąt prostokątny 5-12-13"
          },
          {
            "kind": "p",
            "text": "Mając przyprostokątną przyległą [[b=12\\,\\text{m}]], przyprostokątną przeciwległą [[a=5\\,\\text{m}]] i przeciwprostokątną [[c=13\\,\\text{m}]]:"
          },
          {
            "kind": "p",
            "text": "[[\\sec(A)=\\frac{13}{12}]]"
          },
          {
            "kind": "p",
            "text": "[[\\boxed{\\sec(A)\\approx1.0833}]]"
          },
          {
            "kind": "p",
            "text": "Przeciwprostokątna jest w przybliżeniu o 8.33% dłuższa od przyprostokątnej przyległej. Trójkąt ten pojawia się w zadaniach budowlanych, ponieważ 13 odpowiada łagodnemu nachyleniu dachu."
          },
          {
            "kind": "h3",
            "text": "Przykład 3: Trójkąt 45-45-90"
          },
          {
            "kind": "p",
            "text": "Mając przyprostokątną przyległą [[b=1\\,\\text{cm}]], przyprostokątną przeciwległą [[a=1\\,\\text{cm}]] i przeciwprostokątną [[c=\\sqrt{2}\\,\\text{cm}]]:"
          },
          {
            "kind": "p",
            "text": "[[\\sec(45^\\circ)=\\frac{\\sqrt{2}}{1}]]"
          },
          {
            "kind": "p",
            "text": "[[\\boxed{\\sec(45^\\circ)=\\sqrt{2}\\approx1.4142}]]"
          },
          {
            "kind": "p",
            "text": "Przeciwprostokątna jest w przybliżeniu 1.4142 raza dłuższa od każdej z przyprostokątnych. Przy 45 stopniach obie przyprostokątne są równe, więc secans jest tu równy cosecansowi i oba wynoszą [[\\sqrt{2}]]."
          },
          {
            "kind": "h3",
            "text": "Przykład 4: Trójkąt 30-60-90"
          },
          {
            "kind": "p",
            "text": "Dla kąta odniesienia [[A=30^\\circ]] przyjmij przyprostokątną przyległą [[b=\\sqrt{3}\\,\\text{cm}]], przyprostokątną przeciwległą [[a=1\\,\\text{cm}]] i przeciwprostokątną [[c=2\\,\\text{cm}]]:"
          },
          {
            "kind": "p",
            "text": "[[\\sec(30^\\circ)=\\frac{2}{\\sqrt{3}}]]"
          },
          {
            "kind": "p",
            "text": "[[\\boxed{\\sec(30^\\circ)\\approx1.1547}]]"
          },
          {
            "kind": "p",
            "text": "Przeciwprostokątna jest w przybliżeniu o 15.47% dłuższa od przyprostokątnej przyległej. Zwróć uwagę, że ten sam stosunek przeciwprostokątnej 2:1 pojawia się przy 60 stopniach z zamienionymi bokami, gdzie secans wynosi 2."
          }
        ]
      },
      "sec-applications": {
        "h2": "Praktyczne przykłady zastosowania stosunku secansa",
        "blocks": [
          {
            "kind": "p",
            "text": "Secans sprawdza się wszędzie tam, gdzie długość ukośną trzeba porównać z jej rzutem poziomym. W każdym przykładzie trójkąt prostokątny jest uproszczonym modelem geometrycznym rzeczywistej sytuacji, a podane założenia sprawiają, że to uproszczenie pozostaje uczciwe."
          },
          {
            "kind": "h3",
            "text": "Przykład 5: Obliczanie stosunku secansa drabiny"
          },
          {
            "kind": "p",
            "text": "Drabina ma 5 m długości, a jej podstawa znajduje się 4 m od pionowej ściany. Kąt [[A]] leży między drabiną a poziomym podłożem. Przeciwprostokątna to sama drabina, [[c=5\\,\\text{m}]], a przyprostokątna przyległa to pozioma odległość na ziemi, [[b=4\\,\\text{m}]]:"
          },
          {
            "kind": "p",
            "text": "[[\\sec(A)=\\frac{5}{4}]]"
          },
          {
            "kind": "p",
            "text": "[[\\boxed{\\sec(A)=1.25}]]"
          },
          {
            "kind": "p",
            "text": "Drabina jest o 25% dłuższa od swojego poziomego rzutu na ziemię. Ten stosunek nie rozstrzyga, czy drabina jest bezpiecznie ustawiona; bezpieczeństwo drabiny zależy od kąta pracy i oparcia, a nie od samego secansa."
          },
          {
            "kind": "h3",
            "text": "Przykład 6: Obliczanie stosunku secansa krokwi dachowej"
          },
          {
            "kind": "p",
            "text": "Krokiew dachowa ma długość ukośną 6.5 m i rzut poziomy 6 m. Krokiew jest przeciwprostokątną, [[c=6.5\\,\\text{m}]], a rzut poziomy jest przyprostokątną przyległą, [[b=6\\,\\text{m}]]:"
          },
          {
            "kind": "p",
            "text": "[[\\sec(A)=\\frac{6.5}{6}]]"
          },
          {
            "kind": "p",
            "text": "[[\\boxed{\\sec(A)\\approx1.0833}]]"
          },
          {
            "kind": "p",
            "text": "Krokiew jest w przybliżeniu o 8.33% dłuższa od swojego rzutu poziomego. Dekarze stale stosują tę zależność w odwrotną stronę: mierzą rzut na planie, mnożą przez secans i zamawiają materiał na krokwie. Stosunek nie stanowi pełnej oceny projektu dachu ani konstrukcji."
          },
          {
            "kind": "h3",
            "text": "Przykład 7: Obliczanie stosunku secansa rampy"
          },
          {
            "kind": "p",
            "text": "Uproszczona rampa ma długość ukośną 9.5 m i rzut poziomy 9 m. Powierzchnia ukośna jest przeciwprostokątną, [[c=9.5\\,\\text{m}]], a rzut poziomy jest przyprostokątną przyległą, [[b=9\\,\\text{m}]]:"
          },
          {
            "kind": "p",
            "text": "[[\\sec(A)=\\frac{9.5}{9}]]"
          },
          {
            "kind": "p",
            "text": "[[\\boxed{\\sec(A)\\approx1.0556}]]"
          },
          {
            "kind": "p",
            "text": "Długość ukośna rampy jest w przybliżeniu o 5.56% większa od jej rzutu poziomego. Niski secans odzwierciedla łagodne nachylenie, ale sam stosunek nie potwierdza dostępności ani zgodności z przepisami budowlanymi."
          },
          {
            "kind": "h3",
            "text": "Przykład 8: Pomiar geodezyjny"
          },
          {
            "kind": "p",
            "text": "Uproszczony trójkąt geodezyjny ma odległość w linii prostej 50 m i separację poziomą 40 m. Odległość w linii prostej jest przeciwprostokątną, [[c=50\\,\\text{m}]], a separacja pozioma jest przyprostokątną przyległą, [[b=40\\,\\text{m}]]:"
          },
          {
            "kind": "p",
            "text": "[[\\sec(A)=\\frac{50}{40}]]"
          },
          {
            "kind": "p",
            "text": "[[\\boxed{\\sec(A)=1.25}]]"
          },
          {
            "kind": "p",
            "text": "Odległość w linii prostej jest o 25% większa od separacji poziomej. Geodeci rutynowo stosują tego typu redukcję poziomą; rzeczywiste prace terenowe mogą wymagać dodatkowych poprawek i procedur pomiarowych wykraczających poza prosty model."
          },
          {
            "kind": "h3",
            "text": "Przykład 9: Odciąg podtrzymujący słup"
          },
          {
            "kind": "p",
            "text": "Odciąg ma 13 m długości, a jego kotwica gruntowa znajduje się 12 m w poziomie od słupa. Lina jest przeciwprostokątną, [[c=13\\,\\text{m}]], a pozioma odległość od słupa do kotwicy jest przyprostokątną przyległą, [[b=12\\,\\text{m}]]:"
          },
          {
            "kind": "p",
            "text": "[[\\sec(A)=\\frac{13}{12}]]"
          },
          {
            "kind": "p",
            "text": "[[\\boxed{\\sec(A)\\approx1.0833}]]"
          },
          {
            "kind": "p",
            "text": "Lina jest w przybliżeniu o 8.33% dłuższa od swojego rzutu poziomego. Mówi to, ile kabla należy uciąć, a nie jakie obciążenie przenosi; naciąg liny, wytrzymałość kotwicy i bezpieczeństwo konstrukcji wymagają osobnej analizy."
          },
          {
            "kind": "h3",
            "text": "Przykład 10: Obliczanie stosunku secansa belki schodowej"
          },
          {
            "kind": "p",
            "text": "Uproszczona belka schodowa ma 5 m długości i rozpiętość poziomą 4 m. Belka jest przeciwprostokątną, [[c=5\\,\\text{m}]], a rozpiętość pozioma jest przyprostokątną przyległą, [[b=4\\,\\text{m}]]:"
          },
          {
            "kind": "p",
            "text": "[[\\sec(A)=\\frac{5}{4}]]"
          },
          {
            "kind": "p",
            "text": "[[\\boxed{\\sec(A)=1.25}]]"
          },
          {
            "kind": "p",
            "text": "Ukośna belka jest o 25% dłuższa od rozpiętości poziomej. Stolarze stosują odwrotne obliczenie, aby wycinać belki na podstawie wymiarów z planu. Stosunek nie weryfikuje wymiarów schodów ani zgodności z przepisami budowlanymi."
          },
          {
            "kind": "h3",
            "text": "Przykład 11: Rzut poziomy wysięgnika dźwigu"
          },
          {
            "kind": "p",
            "text": "Uproszczony wysięgnik dźwigu ma długość 10 m i rzut poziomy 6 m. Wysięgnik jest przeciwprostokątną, [[c=10\\,\\text{m}]], a rzut poziomy jest przyprostokątną przyległą, [[b=6\\,\\text{m}]]:"
          },
          {
            "kind": "p",
            "text": "[[\\sec(A)=\\frac{10}{6}]]"
          },
          {
            "kind": "p",
            "text": "[[\\boxed{\\sec(A)\\approx1.6667}]]"
          },
          {
            "kind": "p",
            "text": "Wysięgnik jest w przybliżeniu o 66.67% dłuższy od swojego rzutu poziomego. Wysoki secans odzwierciedla duży kąt pracy. Stosunek nie określa udźwigu dźwigu ani bezpieczeństwa pracy."
          },
          {
            "kind": "h3",
            "text": "Przykład 12: Prosty odcinek lotu samolotu"
          },
          {
            "kind": "p",
            "text": "Dla uproszczonego prostego odcinka lotu długość trasy wynosi 5 km, a przemieszczenie poziome 4 km. Trasa lotu jest przeciwprostokątną, [[c=5\\,\\text{km}]], a przemieszczenie poziome jest przyprostokątną przyległą, [[b=4\\,\\text{km}]]:"
          },
          {
            "kind": "p",
            "text": "[[\\sec(A)=\\frac{5}{4}]]"
          },
          {
            "kind": "p",
            "text": "[[\\boxed{\\sec(A)=1.25}]]"
          },
          {
            "kind": "p",
            "text": "Długość trasy jest o 25% większa od przemieszczenia poziomego. To wyidealizowany przykład geometryczny, a nie pełne obliczenie nawigacyjne lotu; rzeczywiste planowanie lotu uwzględnia wiatr, zmiany wysokości i trasy przestrzeni powietrznej."
          },
          {
            "kind": "h3",
            "text": "Przykład 13: Ukośny zastrzał mechaniczny"
          },
          {
            "kind": "p",
            "text": "Ukośny zastrzał ma długość 2 m i rzut poziomy 1.2 m. Zastrzał jest przeciwprostokątną, [[c=2\\,\\text{m}]], a rzut poziomy jest przyprostokątną przyległą, [[b=1.2\\,\\text{m}]]:"
          },
          {
            "kind": "p",
            "text": "[[\\sec(A)=\\frac{2}{1.2}]]"
          },
          {
            "kind": "p",
            "text": "[[\\boxed{\\sec(A)\\approx1.6667}]]"
          },
          {
            "kind": "p",
            "text": "Zastrzał jest w przybliżeniu o 66.67% dłuższy od swojego rzutu poziomego. Stosunek opisuje geometrię montażu; nie określa wytrzymałości ani przydatności zastrzału."
          },
          {
            "kind": "h3",
            "text": "Przykład 14: Obliczanie stosunku secansa szlaku turystycznego"
          },
          {
            "kind": "p",
            "text": "Uproszczony prosty odcinek szlaku ma długość trasy 100 m i przemieszczenie poziome 80 m. Trasa jest przeciwprostokątną, [[c=100\\,\\text{m}]], a przemieszczenie poziome jest przyprostokątną przyległą, [[b=80\\,\\text{m}]]:"
          },
          {
            "kind": "p",
            "text": "[[\\sec(A)=\\frac{100}{80}]]"
          },
          {
            "kind": "p",
            "text": "[[\\boxed{\\sec(A)=1.25}]]"
          },
          {
            "kind": "p",
            "text": "Prosta trasa jest o 25% dłuższa od przemieszczenia poziomego. Rzeczywiste szlaki turystyczne zawierają zakręty i zmienne nachylenia, więc należy to traktować jako pojedynczy prosty odcinek, a nie całą trasę."
          },
          {
            "kind": "h3",
            "text": "Przykład 15: Wspornik markizy"
          },
          {
            "kind": "p",
            "text": "Wspornik markizy ma długość 3 m i rzut poziomy 2.4 m. Wspornik jest przeciwprostokątną, [[c=3\\,\\text{m}]], a rzut poziomy jest przyprostokątną przyległą, [[b=2.4\\,\\text{m}]]:"
          },
          {
            "kind": "p",
            "text": "[[\\sec(A)=\\frac{3}{2.4}]]"
          },
          {
            "kind": "p",
            "text": "[[\\boxed{\\sec(A)=1.25}]]"
          },
          {
            "kind": "p",
            "text": "Wspornik jest o 25% dłuższy od swojego rzutu poziomego. Obliczenie nie potwierdza przydatności konstrukcyjnej; wytrzymałość mocowania i obciążenie wiatrem wymagają osobnych sprawdzeń."
          },
          {
            "kind": "h3",
            "text": "Przykład 16: Kabel między dwoma punktami"
          },
          {
            "kind": "p",
            "text": "Prosty kabel rozciąga się na łączną długość 25 m między dwoma punktami oddalonymi w poziomie o 24 m. Kabel jest przeciwprostokątną, [[c=25\\,\\text{m}]], a separacja pozioma jest przyprostokątną przyległą, [[b=24\\,\\text{m}]]:"
          },
          {
            "kind": "p",
            "text": "[[\\sec(A)=\\frac{25}{24}]]"
          },
          {
            "kind": "p",
            "text": "[[\\boxed{\\sec(A)\\approx1.0417}]]"
          },
          {
            "kind": "p",
            "text": "Kabel jest w przybliżeniu o 4.17% dłuższy od separacji poziomej. Uproszczony model zakłada prosty kabel i zależność trójkąta prostokątnego; rzeczywisty kabel zwisa, co dodaje długości ponad model secansa."
          },
          {
            "kind": "p",
            "text": "Secans jest stosunkiem matematycznym, a nie wielkością fizyczną o określonych jednostkach. Jego praktyczna wartość wynika z porównywania długości ukośnej z jej rzutem poziomym, odtwarzania długości, gdy znany jest kąt, weryfikacji geometrii trójkąta oraz stosowania wzorów, które wprost wymagają secansa. Sam w sobie nigdy nie poświadcza bezpieczeństwa konstrukcji, nośności, dostępności ani zgodności inżynierskiej."
          }
        ],
        "tables": [
          {
            "headers": [
              "Sytuacja",
              "c",
              "b",
              "Wzór",
              "Stosunek",
              "Dłuższy o",
              "Znaczenie"
            ],
            "rows": [
              [
                "Drabina",
                "5 m",
                "4 m",
                "5/4",
                "1.25",
                "25%",
                "Drabina o ćwierć dłuższa od odległości na ziemi"
              ],
              [
                "Krokiew dachowa",
                "6.5 m",
                "6 m",
                "6.5/6",
                "1.0833",
                "8.33%",
                "Krokiew nieco dłuższa od rzutu poziomego"
              ],
              [
                "Rampa",
                "9.5 m",
                "9 m",
                "9.5/9",
                "1.0556",
                "5.56%",
                "Łagodne nachylenie ledwie dłuższe od rzutu"
              ],
              [
                "Geodezja",
                "50 m",
                "40 m",
                "50/40",
                "1.25",
                "25%",
                "Odległość w linii prostej większa od poziomej"
              ],
              [
                "Odciąg",
                "13 m",
                "12 m",
                "13/12",
                "1.0833",
                "8.33%",
                "Długość liny do ucięcia na podstawie odległości na ziemi"
              ],
              [
                "Belka schodowa",
                "5 m",
                "4 m",
                "5/4",
                "1.25",
                "25%",
                "Ukośna belka wobec rozpiętości poziomej"
              ],
              [
                "Wysięgnik dźwigu",
                "10 m",
                "6 m",
                "10/6",
                "1.6667",
                "66.67%",
                "Stromy wysięgnik znacznie dłuższy od swojego rzutu"
              ],
              [
                "Odcinek lotu",
                "5 km",
                "4 km",
                "5/4",
                "1.25",
                "25%",
                "Wyidealizowana trasa wobec przemieszczenia poziomego"
              ],
              [
                "Zastrzał ukośny",
                "2 m",
                "1.2 m",
                "2/1.2",
                "1.6667",
                "66.67%",
                "Długość zastrzału wobec jego rzutu poziomego"
              ],
              [
                "Szlak turystyczny",
                "100 m",
                "80 m",
                "100/80",
                "1.25",
                "25%",
                "Prosty odcinek wobec poziomej odległości na mapie"
              ],
              [
                "Wspornik markizy",
                "3 m",
                "2.4 m",
                "3/2.4",
                "1.25",
                "25%",
                "Długość wspornika wobec zasięgu poziomego"
              ],
              [
                "Rozpiętość kabla",
                "25 m",
                "24 m",
                "25/24",
                "1.0417",
                "4.17%",
                "Prawie poziomy kabel, ledwie dodatkowa długość"
              ]
            ]
          }
        ],
        "imgAlt": "Cztery panele: drabina 1.25, rampa 1.0556, geodezja 1.25, wysięgnik dźwigu 1.6667, każdy z oznaczonym trójkątem prostokątnym",
        "figcaption": "Cztery praktyczne obliczenia: drabina, rampa, geodezja i wysięgnik dźwigu, każde z trójkątem, wzorem i stosunkiem."
      },
      "sec-angle": {
        "h2": "Zależność między secansem a wielkością kąta",
        "blocks": [
          {
            "kind": "p",
            "text": "Secans rośnie wraz ze wzrostem kąta odniesienia. Geometria wyjaśnia dlaczego: gdy kąt [[A]] jest mały, przyprostokątna przyległa jest prawie tak długa jak przeciwprostokątna, więc stosunek jest ledwie powyżej 1. W miarę jak kąt się poszerza, przyprostokątna przyległa staje się coraz mniejszą częścią przeciwprostokątnej, a stosunek rośnie. Przy [[45^\\circ]] secans wynosi [[\\sqrt{2}]], około 1.4142; przy [[60^\\circ]] wynosi dokładnie 2, ponieważ przeciwprostokątna jest dwukrotnie dłuższa od przyprostokątnej przyległej; a gdy kąt zbliża się do [[90^\\circ]], przyprostokątna przyległa maleje do zera, a secans rośnie bez ograniczeń."
          }
        ],
        "tables": [
          {
            "headers": [
              "Kąt [[A]]",
              "Przyprostokątna przyległa [[b]]",
              "Przeciwprostokątna [[c]]",
              "Stosunek secansa"
            ],
            "rows": [
              [
                "[[30^\\circ]]",
                "[[\\sqrt{3}]]",
                "2",
                "Około 1.1547"
              ],
              [
                "[[45^\\circ]]",
                "1",
                "[[\\sqrt{2}]]",
                "Około 1.4142"
              ],
              [
                "[[60^\\circ]]",
                "1",
                "2",
                "2"
              ],
              [
                "[[75^\\circ]]",
                "1",
                "Około 3.8637",
                "Około 3.8637"
              ]
            ]
          }
        ],
        "closingParagraphs": [
          "Zależność jest monotoniczna: każdy wzrost kąta podnosi secans, a stosunek pozostaje powyżej 1 dla każdego kąta ostrego. Pomiary w tabeli mają charakter ilustracyjny; kąt wyznacza stosunek, a nie bezwzględny rozmiar trójkąta. Secans opisuje zatem kształt trójkąta, a nie jego skalę."
        ],
        "imgAlt": "Trzy trójkąty przy 30, 45 i 60 stopniach o wartościach secansa 1.1547, 1.4142, 2; secans rośnie wraz z kątem",
        "figcaption": "W miarę wzrostu kąta A przyprostokątna przyległa staje się coraz mniejszą częścią przeciwprostokątnej, więc sec(A) rośnie."
      },
      "sec-hypotenuse": {
        "h2": "Jak wyznaczyć przeciwprostokątną za pomocą secansa",
        "blocks": [
          {
            "kind": "p",
            "text": "Wzór na secans można przekształcić, aby wyznaczyć przeciwprostokątną, gdy znane są przyprostokątna przyległa i kąt. Zacznij od [[\\sec(A)=c/b]] i pomnóż obie strony przez [[b]]:"
          },
          {
            "kind": "p",
            "text": "[[[\\boxed{c=b\\sec(A)}]]]"
          },
          {
            "kind": "p",
            "text": "Przeciwprostokątna jest równa przyprostokątnej przyległej pomnożonej przez secans kąta. Mając przyprostokątną przyległą [[b=4\\,\\text{m}]] i kąt [[A=60^\\circ]] oraz wiedząc, że [[\\sec(60^\\circ)=2]]:"
          },
          {
            "kind": "p",
            "text": "[[c=4\\times2]]"
          },
          {
            "kind": "p",
            "text": "[[\\boxed{c=8\\,\\text{m}}]]"
          },
          {
            "kind": "p",
            "text": "Przy tym kącie przeciwprostokątna jest dwukrotnie dłuższa od przyprostokątnej przyległej, co zgadza się z geometrią trójkąta 30-60-90: bok naprzeciw kąta 30 stopni jest połową przeciwprostokątnej. Przyprostokątną przyległą można wyznaczyć w ten sam sposób, ponownie przekształcając wzór:"
          },
          {
            "kind": "p",
            "text": "[[[\\boxed{b=\\frac{c}{\\sec(A)}}]]]"
          },
          {
            "kind": "p",
            "text": "Dla przeciwprostokątnej [[c=10\\,\\text{m}]] i [[A=60^\\circ]]: [[b=10/2]], więc [[\\boxed{b=5\\,\\text{m}}]]. Są to matematyczne przekształcenia tego samego wzoru. Kalkulator na tej stronie zwraca stosunek secansa na podstawie długości boków; nie oblicza bezpośrednio brakujących boków."
          }
        ]
      },
      "sec-recover": {
        "h2": "Jak wyznaczyć kąt na podstawie stosunku secansa",
        "blocks": [
          {
            "kind": "p",
            "text": "Stosunek secansa i kąt to różne wielkości: jedna jest bezwymiarowym porównaniem boków, druga jest mierzona w stopniach. Jeśli znany jest stosunek secansa, odtwórz cosinus za pomocą odwrotności:"
          },
          {
            "kind": "p",
            "text": "[[\\cos(A)=\\frac{1}{\\sec(A)}]]"
          },
          {
            "kind": "p",
            "text": "Następnie arcus cosinus zwraca kąt:"
          },
          {
            "kind": "p",
            "text": "[[[\\boxed{A=\\cos^{-1}\\left(\\frac{1}{\\sec(A)}\\right)}]]]"
          },
          {
            "kind": "p",
            "text": "Dla [[\\sec(A)=1.25]] najpierw oblicz cosinus: [[\\cos(A)=1/1.25=0.8]]. Następnie [[A=\\cos^{-1}(0.8)]], co daje [[\\boxed{A\\approx36.87^\\circ}]]. To osobne obliczenie kąta, a nie coś, co kalkulator stosunku secansa wykonuje bezpośrednio. Ustaw kalkulator naukowy na stopnie, jeśli odpowiedź ma być w stopniach; w trybie radianów to samo wejście zwraca około 0.6435, czyli ten sam kąt w innych jednostkach."
          }
        ]
      },
      "sec-mistakes": {
        "h2": "Typowe błędy przy obliczaniu secansa",
        "blocks": [
          {
            "kind": "p",
            "text": "Większość błędów w secansie wynika z odwróconego ułamka, błędnie oznaczonego boku lub pomyłki jednostek. Przejdź przez tę listę, zanim zaufasz wynikowi."
          }
        ],
        "steps": [
          "<strong>Odwracanie wzoru i obliczanie [[b/c]] zamiast [[c/b]].</strong> To najczęstszy pojedynczy błąd, a zwraca cosinus zamiast secansa. Dla [[c=5]] i [[b=4]] błędna kolejność daje 0.8; poprawna kolejność daje 1.25.",
          "<strong>Mylenie secansa z cosinusem.</strong> Cosinus to przyprostokątna przyległa podzielona przez przeciwprostokątną; secans to dokładna odwrotność. Jeśli odpowiedź wychodzi poniżej 1, to prawie na pewno cosinus, a nie secans.",
          "<strong>Mylenie secansa z cosecansem.</strong> Oba mają przeciwprostokątną w liczniku, więc wyglądają podobnie. Secans dzieli przez przyprostokątną przyległą [[b]]; cosecans dzieli przez przyprostokątną przeciwległą [[a]]. Sprawdź, którą przyprostokątną faktycznie podaje zadanie.",
          "<strong>Używanie boku przeciwległego zamiast przyległego.</strong> Dzielenie [[c/a]] oblicza cosecans. Dla [[c=5]] i [[a=3]] daje to 1.6667, poprawny cosecans, ale błędny secans.",
          "<strong>Używanie w liczniku boku, który nie jest przeciwprostokątną.</strong> Secans zawsze ma przeciwprostokątną na górze. Przyprostokątna przez przyprostokątną to tangens albo cotangens; przyprostokątna przez przeciwprostokątną to sinus albo cosinus.",
          "<strong>Mieszanie boków przyległych i przeciwległych.</strong> Oznaczenia zamieniają się, gdy kąt odniesienia zmienia się z [[A]] na [[B]]. Zanim przypiszesz [[b]], zawsze potwierdź, który kąt wymienia zadanie.",
          "<strong>Zakładanie, że secans jest kątem mierzonym w stopniach.</strong> Wynik 1.25 to stosunek, a nie [[1.25^\\circ]]. Traktowanie go jako stopni wprowadza bezsens do każdego kolejnego obliczenia.",
          "<strong>Podawanie stosunku z metrami lub centymetrami.</strong> Jednostki skracają się w dzieleniu, więc zapis 1.25 m jest błędny. Zapisz samą liczbę, a jednostki zostaw przy pomiarach wejściowych, gdzie jest ich miejsce.",
          "<strong>Wprowadzanie zerowych lub ujemnych długości boków.</strong> Trójkąt nie może mieć zerowego ani ujemnego boku, więc takie dane sygnalizują błąd wprowadzania albo brakujący pomiar, a nie poprawny przypadek brzegowy.",
          "<strong>Wprowadzanie przyprostokątnej przyległej dłuższej od przeciwprostokątnej.</strong> Przeciwprostokątna jest zawsze najdłuższym bokiem. Jeśli [[b \\gt c]], dane wejściowe są zamienione albo trójkąt jest niemożliwy.",
          "<strong>Mieszanie jednostek miary.</strong> Przeciwprostokątna 5 m z przyprostokątną przyległą 40 cm daje 0.125, liczbę bez znaczenia. Najpierw przelicz na jedną jednostkę: 5 m i 4 m dają poprawne 1.25.",
          "<strong>Zbyt wczesne zaokrąglanie.</strong> Zaokrąglenie pośredniego dzielenia do dwóch miejsc po przecinku i kontynuowanie obliczeń potęguje błąd. Zachowaj pełną precyzję na każdym etapie i zaokrąglij tylko ostateczną odpowiedź.",
          "<strong>Zakładanie, że secans trójkąta prostokątnego musi wynosić 1.</strong> Żaden trójkąt prostokątny nie ma secansa równego dokładnie 1. Spodziewaj się wartości powyżej 1, a dokładnie 1 traktuj jako sygnał, że dane wejściowe zostały odwrócone albo trójkąt jest zdegenerowany.",
          "<strong>Mylenie odwrotności cosinusa z arcus cosinusem.</strong> [[1/\\cos(A)]] to secans, czyli stosunek; [[\\cos^{-1}]] to arcus cosinus, który zwraca kąt. Podobne nazwy powodują realne błędy, więc czytaj zapis uważnie.",
          "<strong>Zakładanie, że sam secans wyznacza bezwzględne wymiary trójkąta.</strong> Secans opisuje kształt, a nie rozmiar: nieskończenie wiele trójkątów ma secans 1.25, od przeciwprostokątnej 5 cm po 5 km. Stosunek ustala proporcje; rzeczywiste długości wymagają co najmniej jednego pomiaru boku."
        ],
        "closingParagraphs": [
          "<strong>Błąd a poprawny wynik:</strong> Mając przeciwprostokątną [[c=5]] i przyprostokątną przyległą [[b=4]]:",
          "<strong>Błędnie:</strong> [[4/5=0.8]]. To cosinus, a nie secans. Licznik i mianownik są odwrócone.",
          "<strong>Poprawnie:</strong> [[\\sec(A)=5/4=1.25]].",
          "<strong>Weryfikacja:</strong> [[\\cos(A)=0.8]], a [[1/0.8=1.25]]. Kontrola odwrotności potwierdza wynik, a odpowiedź jest powyżej 1, jak każdy poprawny secans."
        ]
      },
      "sec-verify": {
        "h2": "Jak sprawdzić poprawność wyniku secansa",
        "blocks": [
          {
            "kind": "p",
            "text": "Poprawny, niezdegenerowany trójkąt prostokątny wymaga dodatnich boków, przy czym przeciwprostokątna musi być ściśle najdłuższa, [[0 \\lt b \\lt c]], więc wynik secansa musi być większy od 1:"
          },
          {
            "kind": "p",
            "text": "[[[\\boxed{\\sec(A)=\\frac{c}{b} \\gt 1}]]]"
          },
          {
            "kind": "p",
            "text": "Oba pomiary muszą używać zgodnych jednostek. Wynik równy lub mniejszy od 1 zwykle wskazuje na odwrócone dane wejściowe, błędną identyfikację boków, niezgodne pomiary albo nieprawidłowe wymiary trójkąta."
          },
          {
            "kind": "h3",
            "text": "Metoda 1: Sprawdzenie odwrotności cosinusa"
          },
          {
            "kind": "p",
            "text": "Zweryfikuj [[\\cos(A)=b/c]], a następnie potwierdź [[\\sec(A)=1/\\cos(A)]]. Dla [[b=4]] i [[c=5]]: [[\\cos(A)=4/5=0.8]], więc [[\\sec(A)=1/0.8=1.25]]. Niezgodność między dwiema drogami sygnalizuje odwrócony ułamek albo błędnie oznaczony bok."
          },
          {
            "kind": "h3",
            "text": "Metoda 2: Sprawdzenie twierdzenia Pitagorasa"
          },
          {
            "kind": "p",
            "text": "Jeśli przyprostokątna przeciwległa jest znana lub potrzebna, oblicz [[a=\\sqrt{c^2-b^2}]]. Dla [[b=4]] i [[c=5]]: [[a=\\sqrt{25-16}=3]] oraz [[3^2+4^2=5^2]]. Potwierdza to wymiary trójkąta prostokątnego 3-4-5. Przyprostokątna przeciwległa jest tu wartością weryfikacyjną, a nie częścią podstawowego wzoru na secans."
          },
          {
            "kind": "h3",
            "text": "Metoda 3: Sprawdzenie za pomocą arcus cosinusa"
          },
          {
            "kind": "p",
            "text": "Dla stosunku secansa 1.25: [[A=\\cos^{-1}(1/1.25)]], czyli [[A=\\cos^{-1}(0.8)\\approx36.87^\\circ]]. Ponieważ secans jest tylko nieznacznie powyżej 1, kąt powinien wypaść znacznie poniżej [[45^\\circ]]; jeśli tak nie jest, oznaczenia boków są prawdopodobnie zamienione. Niewielkie różnice mogą wynikać z zaokrągleń."
          }
        ]
      },
      "sec-vs": {
        "h2": "Secans a cosinus, sinus i cosecans",
        "blocks": [
          {
            "kind": "p",
            "text": "Każdy stosunek porównuje inną parę boków, przy tym samym kącie odniesienia i tych samych oznaczeniach boków:"
          }
        ],
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
        "closingParagraphs": [
          "Secans i cosinus tworzą parę odwrotną: [[\\sec(A)=1/\\cos(A)]]. Jeśli [[\\cos(A)=0.8]], to [[\\sec(A)=1.25]]. Sięgaj po secans, gdy wzór wymaga przeciwprostokątnej podzielonej przez bok przyległy, gdy porównujesz długość ukośną z jej rzutem poziomym albo gdy znana zależność zaczyna się od najdłuższego boku; sięgaj po cosinus dla boku przyległego przez przeciwprostokątną, po sinus dla boku przeciwległego wobec przeciwprostokątnej, a po cosecans, gdy przeciwprostokątna jest porównywana z bokiem przeciwległym.",
          "Sąsiednie stosunki znajdziesz w kalkulatorach: <a href=\"/sine-ratio-calculator/\" class=\"text-primary hover:underline\">Kalkulator stosunku sinusa</a>, <a href=\"/cosine-ratio-calculator/\" class=\"text-primary hover:underline\">Kalkulator stosunku cosinusa</a>, <a href=\"/tangent-ratio-calculator/\" class=\"text-primary hover:underline\">Kalkulator stosunku tangensa</a>, <a href=\"/cosecant-ratio-calculator/\" class=\"text-primary hover:underline\">Kalkulator stosunku cosecansa</a> i <a href=\"/cotangent-ratio-calculator/\" class=\"text-primary hover:underline\">Kalkulator stosunku cotangensa</a>."
        ]
      },
      "sec-related": {
        "h2": "Powiązane kalkulatory trygonometryczne",
        "related": [
          {
            "name": "Kalkulator stosunku sinusa"
          },
          {
            "name": "Kalkulator stosunku cosinusa"
          },
          {
            "name": "Kalkulator stosunku tangensa"
          },
          {
            "name": "Kalkulator stosunku cosecansa"
          },
          {
            "name": "Kalkulator stosunku cotangensa"
          },
          {
            "name": "Kalkulator kątów trójkąta prostokątnego"
          }
        ]
      },
      "sec-conclusion": {
        "h2": "Stosuj stosunek secansa z pewnością",
        "blocks": [
          {
            "kind": "p",
            "text": "Secans to odwrócona postać cosinusa: podziel przeciwprostokątną przez przyprostokątną przyległą, a opiszesz, o ile dłuższa jest długość ukośna od swojego rzutu poziomego. Wzór [[\\sec(A)=c/b]] wymaga tylko dwóch pomiarów, odpowiedź jest zawsze bezwymiarową liczbą większą od 1 i rośnie wraz ze wzrostem kąta odniesienia. Gdy potrzebny jest brakujący bok, [[c=b\\sec(A)]] odtwarza przeciwprostokątną; gdy potrzebny jest kąt, [[A=\\cos^{-1}(1/\\sec(A))]] go odtwarza. Drabina, krokiew, rampa czy podręcznikowy trójkąt 3-4-5, metoda nigdy się nie zmienia: określ przeciwprostokątną, określ przyprostokątną przyległą, podziel i zweryfikuj odwrotnością cosinusa."
          }
        ]
      }
    },
    "faqs": [
      {
        "question": "Jaki jest wzór na stosunek secansa w trójkącie prostokątnym?",
        "answer": "sec(A) = c / b: podziel przeciwprostokątną c przez bok przyległy do kąta A. Dla przeciwprostokątnej 5 cm i boku przyległego 4 cm wynik to 5/4 = 1.25. Ten ułamek dziesiętny to pełna odpowiedź, bezwymiarowy stosunek, a nie kąt."
      },
      {
        "question": "Jak secans wiąże się z cosinusem?",
        "answer": "Secans jest odwrotnością cosinusa: sec(A) = 1 / cos(A). Jeśli cos(A) = 4/5 = 0.8, to sec(A) = 1/0.8 = 1.25. Oba stosunki opisują ten sam kąt z odwróconych perspektyw, a kontrola odwrotności to najszybszy sposób weryfikacji obliczenia secansa."
      },
      {
        "question": "Dlaczego secans w trójkącie prostokątnym jest większy od 1?",
        "answer": "W poprawnym, niezdegenerowanym trójkącie prostokątnym przeciwprostokątna jest ściśle dłuższa od każdej z przyprostokątnych, więc c > b > 0. Dzielenie większej długości przez mniejszą zawsze daje stosunek powyżej 1: sec(A) = c/b > 1 dla każdego ostrego kąta odniesienia."
      },
      {
        "question": "Czy secans może być równy 1?",
        "answer": "Nie dla zwykłego kąta ostrego w rzeczywistym trójkącie prostokątnym. Secans równy dokładnie 1 wymagałby, aby przeciwprostokątna była równa bokowi przyległemu, co spłaszcza trójkąt do płaskiej linii. Wartość 1 jest wartością graniczną, do której dąży się, gdy kąt A maleje w kierunku 0 stopni, nigdy wartością, którą wytwarza prawdziwy trójkąt."
      },
      {
        "question": "Co oznacza wartość secansa równa 1.25?",
        "answer": "Przeciwprostokątna jest 1.25 raza dłuższa od boku przyległego, czyli o 25 procent dłuższa. Nie oznacza to, że kąt wynosi 1.25 stopnia, ani że trójkąt mierzy 1.25 jednostki. Secans jest bezwymiarowym porównaniem dwóch długości."
      },
      {
        "question": "Czy secans ma jednostki miary?",
        "answer": "Nie. Oba wejścia są długościami mierzonymi w tej samej jednostce, więc jednostki się skracają: 5 m / 4 m = 1.25, dokładnie tak jak 500 cm / 400 cm = 1.25. Podawaj secans jako zwykłą liczbę, nigdy ze stopniami, metrami ani stopami."
      },
      {
        "question": "Jak obliczyć secans na podstawie długości boków?",
        "answer": "Zmierz przeciwprostokątną c i bok przyległy b w tej samej jednostce, potwierdź, że obie są dodatnie i że c jest dłuższe od b, a następnie podziel: sec(A) = c / b. Na tej stronie wprowadź przeciwprostokątną w pierwszym polu, a bok przyległy w drugim, wybierz zgodne jednostki i kliknij przycisk obliczania sec(A)."
      },
      {
        "question": "Jak wyznaczyć przeciwprostokątną za pomocą secansa?",
        "answer": "Przekształć wzór do postaci c = b * sec(A). Jeśli bok przyległy wynosi 4 m, a kąt A ma 60 stopni, to sec(60 deg) = 2, więc c = 4 * 2 = 8 m. To ręczne przekształcenie; kalkulator na tej stronie zwraca stosunek na podstawie długości boków, a nie brakujące boki."
      },
      {
        "question": "Jak wyznaczyć kąt na podstawie stosunku secansa?",
        "answer": "Weź odwrotność, aby uzyskać stosunek cosinusa, a następnie zastosuj arcus cosinus: A = cos^-1(1 / sec(A)). Dla sec(A) = 1.25 stosunek cosinusa wynosi 0.8, więc A = cos^-1(0.8), czyli około 36.87 stopnia. Najpierw ustaw kalkulator naukowy na tryb stopni. Kalkulator na tej stronie zwraca stosunek, a nie kąt."
      },
      {
        "question": "Jaka jest różnica między secansem a cosecansem?",
        "answer": "Secans dzieli przeciwprostokątną przez bok przyległy (c/b); cosecans dzieli przeciwprostokątną przez bok przeciwległy (c/a). Oba są stosunkami odwrotnymi z udziałem przeciwprostokątnej, ale używają różnych przyprostokątnych, więc odpowiadają na różne pytania i nigdy nie są wymienne."
      },
      {
        "question": "Czy mogę obliczyć secans, nie znając boku przeciwległego?",
        "answer": "Tak. Podstawowy wzór na secans wykorzystuje tylko przeciwprostokątną i bok przyległy, więc bok przeciwległy nigdy nie wchodzi do obliczenia. Bok przeciwległy przydaje się dopiero, gdy twierdzenie Pitagorasa służy do weryfikacji trójkąta albo gdy w grę wchodzą sinus, tangens lub cosecans."
      },
      {
        "question": "Jak secans wykorzystuje się w pomiarach praktycznych?",
        "answer": "Secans porównuje długość ukośną z jej rzutem poziomym: drabinę z odległością na ziemi, krokiew dachową z jej rzutem poziomym, kabel z poziomą separacją jego końców. Stosunek mówi, o ile dłuższa jest ukośna droga od swojego rzutu, co przydaje się do szacowania długości materiałów na podstawie planów poziomych."
      }
    ],
    "faqHeading": "Często zadawane pytania",
    "relatedHeading": "Powiązane kalkulatory trygonometryczne"
  }
};
