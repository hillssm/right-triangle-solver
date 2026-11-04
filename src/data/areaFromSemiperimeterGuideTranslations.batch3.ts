// areaFromSemiperimeterGuideTranslations.batch3.ts: Right Triangle Area From Semiperimeter Guide (Page 23 of 45) translations for Portuguese (pt), Bengali (bn), and Japanese (ja).
export const AREA_FROM_SEMIPERIMETER_TRANSLATIONS_BATCH3 = {
  "pt": {
    "faqs": [
      {
        "question": "Qual é a fórmula da área de um triângulo retângulo usando inraio e semiperímetro?",
        "answer": "K = r × s, onde r é o inraio (o raio do círculo inscrito) e s é o semiperímetro (metade do perímetro). Multiplique os dois e o produto é a área, sem nenhuma etapa de divisão. Para r = 1 e s = 6, K = 1 × 6 = 6 unidades quadradas. Ambas as entradas devem descrever o mesmo triângulo."
      },
      {
        "question": "O que é um inraio?",
        "answer": "O inraio é o raio do círculo inscrito, o círculo que cabe exatamente dentro de um triângulo e toca os três lados. Ele é igual à distância perpendicular do incentro, onde as três bissetrizes dos ângulos se encontram, a qualquer lado. Para um triângulo retângulo com catetos a e b e hipotenusa c, existe o atalho r = (a + b - c) / 2."
      },
      {
        "question": "Qual é a diferença entre inraio e circunraio?",
        "answer": "O inraio pertence ao círculo dentro do triângulo, que toca os três lados; o circunraio pertence ao círculo que passa pelos três vértices. São círculos diferentes, então os valores diferem. Para um triângulo retângulo, o circunraio é R = c/2, exatamente metade da hipotenusa, enquanto o inraio é (a + b - c)/2."
      },
      {
        "question": "Como calculo o semiperímetro de um triângulo retângulo?",
        "answer": "Some os três lados e divida por dois: s = (a + b + c) / 2. Para um triângulo 3-4-5, s = (3 + 4 + 5) / 2 = 6. O semiperímetro é metade do perímetro completo, por isso inserir o perímetro inteiro por engano dobra a área ao usar K = r × s."
      },
      {
        "question": "Como encontro o inraio usando os três comprimentos dos lados?",
        "answer": "Para um triângulo retângulo, use o atalho r = (a + b - c) / 2, onde a e b são os catetos e c é a hipotenusa. Com lados 5, 12, 13: r = (5 + 12 - 13) / 2 = 2. Esse atalho vale apenas para triângulos retângulos; outros triângulos precisam da relação geral r = K / s."
      },
      {
        "question": "Por que a área é igual ao inraio multiplicado pelo semiperímetro?",
        "answer": "Ligar o incentro aos três vértices divide o triângulo em três triângulos menores, cada um com base igual a um lado e altura igual a r. As áreas deles são ar/2, br/2 e cr/2. Somando, obtém-se r(a + b + c)/2, e como s = (a + b + c)/2, o total é r × s."
      },
      {
        "question": "A fórmula funciona para todos os triângulos?",
        "answer": "Sim. Todo triângulo não degenerado tem um círculo inscrito e um incentro, então a decomposição em três triângulos vale para triângulos retângulos, acutângulos e obtusângulos. O triângulo retângulo é simplesmente mais fácil porque seu inraio sai dos lados pelo atalho r = (a + b - c) / 2. O inraio geral continua vindo de r = K / s."
      },
      {
        "question": "O semiperímetro é o mesmo que o perímetro?",
        "answer": "Não. O semiperímetro é exatamente metade do perímetro: s = P/2. Para um triângulo 3-4-5, o perímetro é 12 e o semiperímetro é 6. Inserir o perímetro completo em K = r × s dá 1 × 12 = 12, o dobro da área correta de 6. Divida o perímetro por dois antes de multiplicar."
      },
      {
        "question": "Preciso dividir a resposta final por dois?",
        "answer": "Não. A fórmula K = r × s já leva em conta cada divisão: as metades dos três triângulos menores ficam absorvidas no semiperímetro. Dividir de novo depois de multiplicar é o erro mais comum. Com r = 1 e s = 6, a área correta é 6, enquanto (1 × 6) / 2 = 3 está errado."
      },
      {
        "question": "Qual é a relação entre a fórmula de Heron e a fórmula do inraio?",
        "answer": "Ambas calculam a mesma área, mas partem de entradas diferentes. A fórmula de Heron, K = sqrt(s(s - a)(s - b)(s - c)), precisa dos três lados; K = r × s precisa do inraio e do semiperímetro. Para um triângulo 3-4-5, ambas dão 6, o que faz de uma fórmula um bom teste para a outra."
      },
      {
        "question": "Posso usar valores decimais para o inraio e o semiperímetro?",
        "answer": "Sim. A fórmula trata decimais exatamente como números inteiros. Com r = 2.5 e s = 8.4, K = 2.5 × 8.4 = 21 unidades quadradas. Mantenha a precisão total durante a multiplicação e arredonde apenas a resposta final, conforme a exatidão das medidas."
      },
      {
        "question": "Como verifico se meu inraio e meu semiperímetro estão corretos?",
        "answer": "Confira que ambos são positivos e que s é claramente maior que r. Se os lados forem conhecidos, recalcule s = (a + b + c)/2 e r = (a + b - c)/2, depois confira a área com K = ab/2 e com a fórmula de Heron. A concordância entre os métodos é uma forte evidência. Valores de triângulos diferentes dão um número que não é a área real."
      }
    ],
    "relatedHeading": "Explore Calculadoras Relacionadas de Triângulo Retângulo",
    "relatedItems": [
      "Calculadora de Área do Triângulo Retângulo a Partir dos Catetos",
      "Calculadora de Semiperímetro do Triângulo Retângulo",
      "Calculadora de Área do Triângulo Retângulo a Partir da Altitude",
      "Calculadora de Área do Triângulo Retângulo a Partir de Ângulo",
      "Calculadora de Perímetro do Triângulo Retângulo",
      "Calculadora de Área do Triângulo Retângulo"
    ],
    "relatedIntro": "Medidas diferentes pedem calculadoras diferentes.",
    "faqHeading": "Perguntas Frequentes",
    "tocHeading": "Neste Guia",
    "tocItems": {
      "sec-intro": "Como calcular a área de um triângulo retângulo usando seu inraio e semiperímetro",
      "sec-right-triangle": "O que é um triângulo retângulo?",
      "sec-incircle": "Entendendo o círculo inscrito de um triângulo retângulo",
      "sec-semiperimeter": "Entendendo o semiperímetro de um triângulo",
      "sec-formula": "Por que a área de um triângulo é igual ao inraio vezes o semiperímetro?",
      "sec-inradius": "Como calcular o inraio de um triângulo retângulo",
      "sec-howto": "Como usar a calculadora de área do triângulo retângulo a partir do semiperímetro",
      "sec-examples": "Exemplos passo a passo da área do triângulo retângulo usando inraio e semiperímetro",
      "sec-practical": "Aplicações reais da área do triângulo retângulo a partir do inraio e do semiperímetro",
      "sec-legs-comparison": "Por que a fórmula do inraio dá a mesma área que a fórmula dos catetos?",
      "sec-heron": "Qual é a diferença entre a fórmula de Heron e área = inraio × semiperímetro?",
      "sec-consistency": "Como verificar se o inraio e o semiperímetro são válidos",
      "sec-units": "Como as unidades de medida afetam os cálculos de inraio e semiperímetro",
      "sec-mistakes": "Erros comuns ao calcular a área do triângulo retângulo a partir do semiperímetro",
      "sec-verify": "Como verificar se a área do seu triângulo retângulo está correta",
      "sec-applications": "Aplicações práticas da fórmula do inraio e do semiperímetro",
      "sec-related": "Explore calculadoras relacionadas de triângulo retângulo",
      "sec-faq": "Perguntas frequentes",
      "sec-conclusion": "Duas medidas, um produto"
    },
    "sections": {
      "sec-intro": {
        "h2": "Como calcular a área de um triângulo retângulo usando seu inraio e semiperímetro",
        "blocks": [
          { "kind": "p", "text": "Tome [[r=1]], [[s=6]]. Aplique [[K=r\\times s]]: [[K=1\\times6]], [[[\\boxed{K=6\\text{ square units}}]]] O resultado nomeia a área plana total delimitada pelos três lados do triângulo: seis unidades quadradas. É exatamente isso que a Calculadora de Área do Triângulo Retângulo a Partir do Semiperímetro devolve para essas duas entradas." },
          { "kind": "p", "text": "O inraio é o raio do círculo acomodado dentro do triângulo, tocando os três lados. O semiperímetro é metade do comprimento do contorno: o total dos três lados dividido por dois. Duas medidas bastam porque o inraio serve como altura perpendicular compartilhada para três triângulos menores construídos a partir do incentro, enquanto o semiperímetro reúne as bases deles em um único fator." },
          { "kind": "p", "text": "O raciocínio vale para todo triângulo, porque cada um possui um círculo inscrito. O triângulo retângulo traz um bônus: seu inraio sai dos três lados por uma fórmula curta, de modo que r e s costumam já ser conhecidos. Este método brilha em problemas onde o círculo inscrito ou o semiperímetro é dado, já que nenhum cateto ou ângulo precisa ser medido." }
        ]
      },
      "sec-right-triangle": {
        "h2": "O que é um triângulo retângulo?",
        "blocks": [
          { "kind": "p", "text": "Antes de o círculo inscrito entrar em cena, o próprio triângulo precisa ser rotulado sem erro. Os símbolos abaixo permanecem fixos ao longo de todo o guia, e a calculadora usa os mesmos nomes." },
          { "kind": "h3", "text": "Definição de triângulo retângulo" },
          { "kind": "p", "text": "Um triângulo retângulo é um polígono de três lados contendo exatamente um ângulo interno de 90 graus. Ele tem três vértices, três lados, dois ângulos agudos e um ângulo reto, geralmente marcado com um pequeno quadrado. Os dois lados que formam o ângulo reto são os catetos; o lado oposto é a hipotenusa. Como [[C=90^\\circ]], segue-se que [[[\\boxed{A+B=90^\\circ}]]]: os dois ângulos agudos são complementares, então conhecer um determina o outro." },
          { "kind": "h3", "text": "Entendendo os dois catetos" },
          { "kind": "p", "text": "O cateto [[a]] fica oposto ao ângulo [[A]]; o cateto [[b]] fica oposto ao ângulo [[B]]. Os dois catetos se encontram no vértice do ângulo reto e são perpendiculares entre si. Eles contribuem diretamente para a área, porque cada cateto pode servir de base enquanto o outro serve de altura perpendicular. Para esta página, eles também alimentam o inraio, já que o atalho [[r=\\frac{a+b-c}{2}]] é construído a partir dos dois catetos e da hipotenusa." },
          { "kind": "h3", "text": "Entendendo a hipotenusa" },
          { "kind": "p", "text": "A hipotenusa é o lado oposto ao ângulo de 90 graus, sempre o lado mais longo do triângulo. Ela nunca forma o ângulo reto; estende-se atravessando-o. Na fórmula da área pelos catetos, ela não tem papel, mas aqui importa: a hipotenusa entra tanto no semiperímetro [[s=\\frac{a+b+c}{2}]] quanto no atalho do inraio [[r=\\frac{a+b-c}{2}]]. Se os dois catetos forem conhecidos, o teorema de Pitágoras a recupera por [[[\\boxed{c=\\sqrt{a^2+b^2}}]]]" },
          { "kind": "h3", "text": "O que torna este triângulo diferente dos outros triângulos?" },
          { "kind": "p", "text": "O canto de 90 graus é toda a história. Ele torna os catetos perpendiculares sem nenhuma construção, o que simplifica a fórmula padrão da área, e torna os segmentos tangentes do círculo inscrito próximos ao ângulo reto iguais ao próprio inraio, o que simplifica a fórmula do inraio. Outros triângulos ainda satisfazem [[K=r\\times s]], mas encontrar o inraio deles geralmente exige primeiro a área. O triângulo retângulo é o único caso em que o inraio sai diretamente dos comprimentos dos lados." }
        ]
      },
      "sec-incircle": {
        "h2": "Entendendo o círculo inscrito de um triângulo retângulo",
        "blocks": [
          { "kind": "p", "text": "O inraio só faz sentido quando o círculo inscrito é imaginado com clareza. Esta seção constrói a ideia do próprio círculo até os pontos de tangência, onde o raio encontra cada lado." },
          { "kind": "h3", "text": "Definição de círculo inscrito" },
          { "kind": "p", "text": "Um círculo inscrito é um círculo posicionado dentro de um triângulo de modo que toque os três lados. Ele fica no interior, tangente a cada lado em exatamente um ponto, e não pode cruzar um lado porque a tangência o fixa no lugar. Todo triângulo não degenerado possui exatamente um círculo inscrito: encolha um círculo dentro das regiões dos cantos e haverá um único tamanho máximo que beija os três lados. Os três pontos de tangência, um por lado, são os lugares onde o inraio será medido mais adiante." },
          { "kind": "h3", "text": "O que é o incentro?" },
          { "kind": "p", "text": "O incentro, rotulado [[I]], é o ponto onde as três bissetrizes internas se encontram. Cada bissetriz divide um ângulo do canto em duas partes iguais, e qualquer ponto sobre uma bissetriz fica à mesma distância perpendicular dos dois lados que formam esse ângulo. A interseção das três bissetrizes, portanto, fica à mesma distância dos três lados, e é exatamente por isso que ela pode servir de centro de um círculo que toca cada lado. O incentro fica dentro de todo triângulo válido, nunca sobre uma aresta nem fora." },
          { "kind": "h3", "text": "O que é o inraio?" },
          { "kind": "p", "text": "O inraio é a distância perpendicular do incentro a qualquer lado do triângulo: [[[\\boxed{r=\\text{distance from the incenter to a side}}]]] Como o incentro é equidistante dos três lados, o valor é o mesmo qualquer que seja o lado escolhido. Esse único número é o raio do círculo inscrito, o comprimento de cada um dos três segmentos curtos traçados do centro aos pontos de tangência e a altura compartilhada que faz a prova da área funcionar em uma seção posterior." },
          { "kind": "h3", "text": "Entendendo a relação de tangência" },
          { "kind": "p", "text": "Um raio traçado até um ponto de tangência é perpendicular ao lado que ele toca. Aplicado aos três pontos de contato, isso dá [[r\\perp a]], [[r\\perp b]] e [[r\\perp c]]. Cada afirmação descreve um canto diferente do diagrama: o raio que termina no cateto a forma ângulo reto com o cateto a, e o mesmo vale para o cateto b e a hipotenusa. Essa perpendicularidade não é decorativa; é a propriedade que permite a cada raio atuar como altura de um dos três triângulos menores na prova da área." },
          { "kind": "h3", "text": "Diferença entre círculo inscrito e círculo circunscrito" },
          { "kind": "p", "text": "O círculo inscrito vive dentro do triângulo e toca os três lados; o círculo circunscrito passa pelos três vértices e envolve o triângulo. Os raios deles são medidas diferentes e nunca devem ser trocados. Para um triângulo retângulo, o circunraio tem sua própria regra simples, [[[\\boxed{R=\\frac{c}{2}}]]], porque a hipotenusa é um diâmetro do círculo circunscrito: o ponto médio da hipotenusa é o circuncentro. O inraio [[r]] é o menor dos dois e pertence ao círculo de dentro." }
        ],
        "imgAlt": "Triângulo retângulo ABC com círculo inscrito: incentro I, três pontos de tangência, raios perpendiculares de comprimento r",
        "figcaption": "Triângulo ABC com seu círculo inscrito: três raios perpendiculares, cada um de comprimento r."
      },
      "sec-semiperimeter": {
        "h2": "Entendendo o semiperímetro de um triângulo",
        "blocks": [
          { "kind": "p", "text": "O semiperímetro parece uma mera meia medida, mas carrega a maior parte do cálculo da área. Entender por que a geometria insiste em usar metade do perímetro prepara o terreno para a prova." },
          { "kind": "h3", "text": "Definição de semiperímetro" },
          { "kind": "p", "text": "O semiperímetro é exatamente metade do perímetro total: [[[\\boxed{s=\\frac{P}{2}}]]] Para um triângulo, isso vira [[[\\boxed{s=\\frac{a+b+c}{2}}]]] O perímetro [[P]] é o comprimento total do contorno, a soma dos três lados; o semiperímetro é essa soma pela metade. Os dois se relacionam por [[P=2s]], e confundi-los é o erro de entrada mais caro desta página." },
          { "kind": "h3", "text": "Como calcular o semiperímetro" },
          { "kind": "p", "text": "Tome [[a=3]], [[b=4]], [[c=5]]. Some os três lados primeiro, depois divida uma vez: [[s=\\frac{3+4+5}{2}]], [[[\\boxed{s=6}]]] A soma deve vir antes da divisão porque o semiperímetro divide pela metade todo o contorno, não cada lado separadamente. Somar depois de dividir ainda daria o mesmo número aqui, mas a fórmula [[s=\\frac{a+b+c}{2}]] indica a ordem correta: some o contorno, depois divida pela metade." },
          { "kind": "h3", "text": "Por que usar o semiperímetro em vez do perímetro completo?" },
          { "kind": "p", "text": "As fórmulas de área de triângulos continuam produzindo metades: cada triângulo pequeno na prova contribui com uma divisão por dois, e o semiperímetro absorve todas de uma vez. Ele é a variável natural da fórmula de Heron, da relação do inraio [[r=\\frac{K}{s}]] e da prova que segue. Inserir o perímetro completo dobraria o resultado, porque [[K=r\\times P=2rs]] é o dobro da área verdadeira. A calculadora pede [[s]], não [[P]], exatamente para que a multiplicação não precise de mais nenhum ajuste." },
          { "kind": "h3", "text": "O semiperímetro pode ser menor que o lado mais longo?" },
          { "kind": "p", "text": "Não. A desigualdade triangular exige [[a+b>c]]: os dois lados menores juntos devem exceder o lado mais longo, ou o triângulo não fecha. Somando [[c]] aos dois lados, obtém-se [[a+b+c>2c]], e dividindo pela metade, [[\\frac{a+b+c}{2}>c]], que é [[s>c]]. O semiperímetro sempre excede o lado mais longo em um triângulo válido. Se um semiperímetro informado for menor que a hipotenusa, as entradas não podem descrever um triângulo real." }
        ]
      },
      "sec-formula": {
        "h2": "Por que a área de um triângulo é igual ao inraio vezes o semiperímetro?",
        "blocks": [
          { "kind": "p", "text": "Comece com a regra geral [[K=\\frac{\\text{base}\\times\\text{height}}{2}]]. Una o incentro [[I]] aos três vértices. O triângulo se divide em três triângulos menores, cada um usando um lado original como base e o inraio como altura perpendicular. O restante desta seção calcula cada parte e as soma, para que [[K=r\\times s]] seja visto, não apenas memorizado." },
          { "kind": "h3", "text": "Área do primeiro triângulo menor" },
          { "kind": "p", "text": "O triângulo construído sobre o lado [[a]] tem base [[a]] e altura [[r]], porque o raio encontra o lado [[a]] perpendicularmente em seu ponto de tangência. Sua área é, portanto, [[K_1=\\frac{ar}{2}]]. Nada sobre o ângulo reto é usado ainda; este passo vale para o lado de qualquer triângulo." },
          { "kind": "h3", "text": "Área do segundo triângulo menor" },
          { "kind": "p", "text": "O triângulo construído sobre o lado [[b]] segue o mesmo padrão: base [[b]], altura perpendicular [[r]], área [[K_2=\\frac{br}{2}]]. A altura é de novo o mesmo número [[r]], porque o incentro é equidistante de todos os lados. Essa altura compartilhada é a chave de toda a prova." },
          { "kind": "h3", "text": "Área do terceiro triângulo menor" },
          { "kind": "p", "text": "O triângulo construído sobre o lado [[c]] completa o conjunto: [[K_3=\\frac{cr}{2}]]. Os três triângulos menores recobrem o triângulo original exatamente, sem sobreposição e sem lacuna: cada ponto do original está em um deles, já que os segmentos do incentro aos vértices particionam o interior." },
          { "kind": "h3", "text": "Somando as três áreas" },
          { "kind": "p", "text": "Some as partes: [[K=K_1+K_2+K_3]]. Substituindo, obtém-se [[K=\\frac{ar}{2}+\\frac{br}{2}+\\frac{cr}{2}]]. Fatore [[r]] para fora da soma: [[K=\\frac{r(a+b+c)}{2}]]. Lembre-se de que [[s=\\frac{a+b+c}{2}]], então a fração entre colchetes é exatamente o semiperímetro, e [[[\\boxed{K=r\\times s}]]] Cada divisão por dois dos três triângulos pequenos foi absorvida no semiperímetro, e é por isso que a multiplicação final não precisa de mais nenhuma divisão." },
          { "kind": "h3", "text": "Por que esta fórmula funciona para todo triângulo?" },
          { "kind": "p", "text": "Todo triângulo não degenerado tem um círculo inscrito e um incentro, e a distância perpendicular do incentro aos três lados é o mesmo número [[r]]. A decomposição em três triângulos não usa nada mais: nenhum ângulo reto, nenhum comprimento de lado em particular, nenhuma forma especial. Seja o triângulo retângulo, acutângulo ou obtusângulo, o incentro se une aos vértices e a mesma álgebra chega a [[K=r\\times s]]. A fórmula é uma propriedade dos triângulos em geral, e é por isso que os livros de geometria a provam uma vez e a usam em toda parte." },
          { "kind": "h3", "text": "Por que esta fórmula é particularmente útil para triângulos retângulos?" },
          { "kind": "p", "text": "A identidade continua a mesma, mas o inraio fica fácil. Em um triângulo geral, o inraio costuma ser encontrado a partir da própria área por [[r=\\frac{K}{s}]], o que é circular se a área for o objetivo. Um triângulo retângulo escapa do círculo: seu inraio sai diretamente dos lados por [[r=\\frac{a+b-c}{2}]], derivada na próxima seção. Isso faz de [[K=r\\times s]] um método de trabalho genuíno para triângulos retângulos, em vez de uma definição rearranjada." }
        ],
        "imgAlt": "Triângulo dividido do incentro I em três triângulos menores de altura r, provando que K = r vezes s",
        "figcaption": "Três triângulos menores compartilham a altura r; suas áreas somadas dão r vezes s."
      },
      "sec-inradius": {
        "h2": "Como calcular o inraio de um triângulo retângulo",
        "blocks": [
          { "kind": "p", "text": "Para um triângulo retângulo com catetos [[a]] e [[b]] e hipotenusa [[c]], o inraio é [[[\\boxed{r=\\frac{a+b-c}{2}}]]] Este atalho é específico para triângulos retângulos. A prova abaixo usa apenas a propriedade dos segmentos tangentes de círculos, e os exemplos resolvidos a mostram em ação." },
          { "kind": "h3", "text": "Por que a fórmula do inraio funciona?" },
          { "kind": "p", "text": "Segmentos tangentes traçados do mesmo ponto externo a um círculo têm comprimentos iguais. O círculo inscrito toca os dois catetos, e os dois raios até esses pontos de contato encontram os lados em ângulos retos. Junto com o ângulo reto no vértice, a região do canto forma um quadrado de lado [[r]], de modo que as distâncias do vértice do ângulo reto aos dois pontos de tangência nos catetos são cada uma [[r]]. Chame o segmento tangente restante no cateto a de [[x]] e o restante no cateto b de [[y]]. Os dois segmentos tangentes de cada vértice agudo são iguais, então a hipotenusa se divide nos mesmos [[x]] e [[y]]. Portanto [[a=r+x]], [[b=r+y]] e [[c=x+y]]. Some as duas primeiras equações: [[a+b=2r+x+y]]. Como [[x+y=c]], isso vira [[a+b=2r+c]], e rearranjando obtém-se [[[\\boxed{r=\\frac{a+b-c}{2}}]]]" },
          { "kind": "h3", "text": "Exemplo resolvido: triângulo 3-4-5" },
          { "kind": "p", "text": "Dados [[a=3]], [[b=4]], [[c=5]]: substitua no atalho, [[r=\\frac{3+4-5}{2}]], [[r=\\frac{2}{2}]], [[[\\boxed{r=1}]]] O círculo inscrito do triângulo 3-4-5 tem raio 1, o que combina com o exemplo da introdução, em que [[r=1]] e [[s=6]] deram [[K=6]]." },
          { "kind": "h3", "text": "Exemplo resolvido: triângulo 5-12-13" },
          { "kind": "p", "text": "Dados [[a=5]], [[b=12]], [[c=13]]: então [[r=\\frac{5+12-13}{2}]], [[r=\\frac{4}{2}]], [[[\\boxed{r=2}]]] Junto com [[s=\\frac{5+12+13}{2}=15]], a área segue como [[K=2\\times15=30]], confirmada pela fórmula dos catetos [[K=\\frac{5\\times12}{2}=30]]." },
          { "kind": "h3", "text": "Uma fórmula alternativa para o inraio" },
          { "kind": "p", "text": "O atalho também pode ser escrito como [[[\\boxed{r=\\frac{ab}{a+b+c}}]]] Esta não é uma segunda fórmula sem relação. Comece de [[K=rs]] e [[K=\\frac{ab}{2}]], de modo que [[rs=\\frac{ab}{2}]]. Como [[s=\\frac{a+b+c}{2}]], a substituição dá [[r\\frac{a+b+c}{2}=\\frac{ab}{2}]], e cancelando as metades resta [[r=\\frac{ab}{a+b+c}]]. Ela deve concordar com [[r=\\frac{a+b-c}{2}]]: confira com 3-4-5, [[\\frac{3\\times4}{3+4+5}=\\frac{12}{12}=1]], o mesmo raio. Algebricamente, [[(a+b-c)(a+b+c)=(a+b)^2-c^2=2ab]] para um triângulo retângulo, então as duas formas são idênticas." },
          { "kind": "h3", "text": "Este atalho do inraio funciona para todo triângulo?" },
          { "kind": "p", "text": "Não. A derivação se apoiou no ângulo reto: o quadrado de canto de lado [[r]] só existe porque os dois catetos se encontram a 90 graus. Para um triângulo geral, o inraio deve vir de [[[\\boxed{r=\\frac{K}{s}}]]] ou de uma fórmula combinada com as medidas conhecidas, como [[r=(s-a)\\tan\\frac{A}{2}]]. Aplicar [[r=\\frac{a+b-c}{2}]] a um triângulo não retângulo calcula um número sem significado geométrico." }
        ],
        "imgAlt": "Segmentos tangentes x e y derivam a fórmula do inraio r = (a + b - c) / 2",
        "figcaption": "Segmentos tangentes iguais dão a = r + x, b = r + y, c = x + y."
      },
      "sec-howto": {
        "h2": "Como usar a calculadora de área do triângulo retângulo a partir do semiperímetro",
        "blocks": [
          { "kind": "p", "text": "A calculadora precisa de exatamente duas entradas, inseridas em ordem. Os passos abaixo seguem o layout na tela, da identificação das medidas até um resultado verificado." },
          { "kind": "p", "text": "A calculadora tem exatamente duas entradas, o inraio [[r]] e o semiperímetro [[s]]. Ela não recebe os três lados, os catetos, a hipotenusa ou um ângulo. A multiplicação [[K=r\\times s]] está completa como mostrada; o resultado nunca deve ser dividido por dois de novo." }
        ],
        "steps": [
          "<strong>Determine o inraio do triângulo retângulo.</strong> Este é o raio do círculo inscrito no triângulo. Se os três lados forem conhecidos, calcule-o com [[r=\\frac{a+b-c}{2}]].",
          "<strong>Determine seu semiperímetro.</strong> Some os três lados e divida por dois: [[s=\\frac{a+b+c}{2}]]. Esta é metade do perímetro completo, não o próprio perímetro.",
          "<strong>Certifique-se de que ambos os valores pertencem ao mesmo triângulo.</strong> Um inraio de um triângulo e um semiperímetro de outro produzem um produto sem sentido.",
          "<strong>Converta as medidas para unidades compatíveis, se necessário.</strong> Ambos os comprimentos devem usar a mesma unidade: metros com metros, centímetros com centímetros, nunca misturados.",
          "<strong>Insira o inraio r no primeiro campo de entrada.</strong> Este é o menor dos dois valores em qualquer triângulo válido.",
          "<strong>Insira o semiperímetro s no segundo campo de entrada.</strong> Confira que o valor é metade do perímetro, não o perímetro inteiro.",
          "<strong>Clique em Calculate Area.</strong> A calculadora multiplica as duas entradas diretamente.",
          "<strong>Revise o resultado exibido.</strong> Leia a área e confirme que ela parece razoável para o tamanho do triângulo.",
          "<strong>Confira os passos da fórmula e da substituição.</strong> Eles mostram [[K=r\\times s]] com os valores inseridos preenchidos.",
          "<strong>Confirme que o resultado está expresso em unidades quadradas.</strong> Unidades de comprimento multiplicadas dão unidades quadradas: m², cm², ft², correspondendo às entradas.",
          "<strong>Use Reset antes de iniciar outro cálculo.</strong> Ele limpa os dois campos para um recomeço limpo."
        ]
      },
      "sec-examples": {
        "h2": "Exemplos passo a passo da área do triângulo retângulo usando inraio e semiperímetro",
        "blocks": [
          { "kind": "p", "text": "Quatro triângulos retângulos clássicos mostram a cadeia completa: lados para o semiperímetro, lados para o inraio e depois a multiplicação única. Nestes exemplos, r e s são derivados dos comprimentos dos lados; a própria calculadora aceita r e s diretamente." },
          { "kind": "h3", "text": "Exemplo 1: triângulo retângulo 3-4-5" },
          { "kind": "p", "text": "Dados [[a=3]], [[b=4]], [[c=5]]. Passo 1: calcule o semiperímetro, [[s=\\frac{3+4+5}{2}]], [[s=6]]. Passo 2: calcule o inraio, [[r=\\frac{3+4-5}{2}]], [[r=1]]. Passo 3: calcule a área, [[K=1\\times6]], [[[\\boxed{K=6\\text{ square units}}]]] Verifique com a fórmula dos catetos: [[K=\\frac{3\\times4}{2}=6]]." },
          { "kind": "h3", "text": "Exemplo 2: triângulo retângulo 5-12-13" },
          { "kind": "p", "text": "Dados [[a=5]], [[b=12]], [[c=13]]. Semiperímetro: [[s=\\frac{5+12+13}{2}=15]]. Inraio: [[r=\\frac{5+12-13}{2}=2]]. Área: [[K=2\\times15]], [[[\\boxed{K=30\\text{ square units}}]]] Verificação: [[K=\\frac{5\\times12}{2}=30]]." },
          { "kind": "h3", "text": "Exemplo 3: triângulo retângulo 8-15-17" },
          { "kind": "p", "text": "Dados [[a=8]], [[b=15]], [[c=17]]. Semiperímetro: [[s=\\frac{8+15+17}{2}=20]]. Inraio: [[r=\\frac{8+15-17}{2}=3]]. Área: [[K=3\\times20]], [[[\\boxed{K=60\\text{ square units}}]]] Verificação: [[K=\\frac{8\\times15}{2}=60]]." },
          { "kind": "h3", "text": "Exemplo 4: triângulo retângulo 7-24-25" },
          { "kind": "p", "text": "Dados [[a=7]], [[b=24]], [[c=25]]. Semiperímetro: [[s=\\frac{7+24+25}{2}=28]]. Inraio: [[r=\\frac{7+24-25}{2}=3]]. Área: [[K=3\\times28]], [[[\\boxed{K=84\\text{ square units}}]]] Verificação: [[K=\\frac{7\\times24}{2}=84]]." },
          { "kind": "h3", "text": "Comparação dos exemplos resolvidos" }
        ],
        "table": {
          "headers": ["<tr>\n          <th class=\"border-gray-600 px-4 py-2 text-left\">Triângulo", "Cateto a", "Cateto b", "Hipotenusa c", "Inraio r", "Semiperímetro s", "Área K"],
          "rows": [
            ["3-4-5", "3", "4", "5", "1", "6", "6"],
            ["5-12-13", "5", "12", "13", "2", "15", "30"],
            ["8-15-17", "8", "15", "17", "3", "20", "60"],
            ["7-24-25", "7", "24", "25", "3", "28", "84"]
          ]
        }
      },
      "sec-practical": {
        "h2": "Aplicações reais da área do triângulo retângulo a partir do inraio e do semiperímetro",
        "blocks": [
          { "kind": "p", "text": "Doze situações resolvidas levam a fórmula da página para a oficina, o canteiro e o estúdio. Cada uma nomeia um painel, seção, perfil ou modelo simplificado em forma de triângulo retângulo, trabalha o inraio e o semiperímetro pela fórmula e declara a suposição por trás dos números. Estes são modelos simplificados de triângulos retângulos: nem toda janela, telhado, jardim, rampa, vela ou terreno real forma um triângulo retângulo exato, e um objeto irregular deve ser dividido em formas mais simples antes de a fórmula se aplicar. A área descreve apenas a superfície geométrica plana; ela nunca estabelece por si só resistência estrutural, capacidade de carga ou segurança de construção." },
          { "kind": "h3", "text": "Exemplo 1: janela de vidro triangular" },
          { "kind": "p", "text": "Uma janela de vidro triangular tem lados [[a=3\\text{ m}]], [[b=4\\text{ m}]], [[c=5\\text{ m}]]. Semiperímetro: [[s=\\frac{3+4+5}{2}=6\\text{ m}]]. Inraio: [[r=\\frac{3+4-5}{2}=1\\text{ m}]]. Área: [[K=1\\times6]], [[[\\boxed{K=6\\text{ m}^2}]]] O resultado representa a superfície plana de vidro triangular antes da subtração das folgas do caixilho. Suposição: o painel é um verdadeiro triângulo retângulo; as dimensões do caixilho são tratadas separadamente." },
          { "kind": "h3", "text": "Exemplo 2: suporte de aço" },
          { "kind": "p", "text": "Uma chapa de suporte de aço triangular tem lados [[a=5\\text{ cm}]], [[b=12\\text{ cm}]], [[c=13\\text{ cm}]]. Semiperímetro: [[s=\\frac{5+12+13}{2}=15\\text{ cm}]]. Inraio: [[r=\\frac{5+12-13}{2}=2\\text{ cm}]]. Área: [[K=2\\times15]], [[[\\boxed{K=30\\text{ cm}^2}]]] Esta é a área da chapa plana e não determina sua resistência estrutural. Suposição: a peça do suporte é cortada como um triângulo retângulo; furos de parafuso e dobras estão excluídos." },
          { "kind": "h3", "text": "Exemplo 3: seção de suporte de telhado" },
          { "kind": "p", "text": "Uma seção de suporte de telhado em triângulo retângulo tem lados [[a=8\\text{ ft}]], [[b=15\\text{ ft}]], [[c=17\\text{ ft}]]. Semiperímetro: [[s=\\frac{8+15+17}{2}=20\\text{ ft}]]. Inraio: [[r=\\frac{8+15-17}{2}=3\\text{ ft}]]. Área: [[K=3\\times20]], [[[\\boxed{K=60\\text{ ft}^2}]]] A fórmula mede a seção triangular plana de suporte, útil para estimativas de material. Suposição: a seção é modelada como um triângulo retângulo; a geometria completa do telhado pode diferir." },
          { "kind": "h3", "text": "Exemplo 4: seção de jardim triangular" },
          { "kind": "p", "text": "Uma seção de jardim simplificada em triângulo retângulo tem lados [[a=7\\text{ m}]], [[b=24\\text{ m}]], [[c=25\\text{ m}]]. Semiperímetro: [[s=28\\text{ m}]]. Inraio: [[r=3\\text{ m}]]. Área: [[K=3\\times28]], [[[\\boxed{K=84\\text{ m}^2}]]] A área ajuda a estimar a seção triangular de paisagismo, por exemplo ao encomendar grama ou cobertura morta. Suposição: os limites do canteiro são retos e se encontram em ângulo reto." },
          { "kind": "h3", "text": "Exemplo 5: perfil triangular de rampa" },
          { "kind": "p", "text": "Um perfil lateral de rampa simplificado tem lados [[a=9\\text{ m}]], [[b=12\\text{ m}]], [[c=15\\text{ m}]]. Semiperímetro: [[s=\\frac{9+12+15}{2}=18\\text{ m}]]. Inraio: [[r=\\frac{9+12-15}{2}=3\\text{ m}]]. Área: [[K=3\\times18]], [[[\\boxed{K=54\\text{ m}^2}]]] Isto mede o perfil triangular lateral, não a superfície inclinada de passagem. Suposição: o perfil é modelado com um canto reto na base." },
          { "kind": "h3", "text": "Exemplo 6: gabarito de corte em compensado" },
          { "kind": "p", "text": "Um gabarito de compensado em triângulo retângulo tem lados [[a=12\\text{ cm}]], [[b=16\\text{ cm}]], [[c=20\\text{ cm}]]. Semiperímetro: [[s=24\\text{ cm}]]. Inraio: [[r=4\\text{ cm}]]. Área: [[K=4\\times24]], [[[\\boxed{K=96\\text{ cm}^2}]]] O cálculo estima a área plana de material antes do desperdício de corte. Suposição: o gabarito é um verdadeiro triângulo retângulo; a espessura do corte e as sobras são extras." },
          { "kind": "h3", "text": "Exemplo 7: painel de sinalização triangular" },
          { "kind": "p", "text": "Um painel de sinalização triangular tem lados [[a=20\\text{ cm}]], [[b=21\\text{ cm}]], [[c=29\\text{ cm}]]. Semiperímetro: [[s=\\frac{20+21+29}{2}=35\\text{ cm}]]. Inraio: [[r=\\frac{20+21-29}{2}=6\\text{ cm}]]. Área: [[K=6\\times35]], [[[\\boxed{K=210\\text{ cm}^2}]]] Isto representa a superfície plana imprimível do painel. Suposição: a face do painel é plana e em forma de triângulo retângulo; os suportes de montagem estão excluídos." },
          { "kind": "h3", "text": "Exemplo 8: seção de levantamento topográfico" },
          { "kind": "p", "text": "Uma seção de terreno simplificada em triângulo retângulo tem lados [[a=9\\text{ m}]], [[b=40\\text{ m}]], [[c=41\\text{ m}]]. Semiperímetro: [[s=45\\text{ m}]]. Inraio: [[r=4\\text{ m}]]. Área: [[K=4\\times45]], [[[\\boxed{K=180\\text{ m}^2}]]] A fórmula calcula a área da seção triangular medida. Suposição: a seção é modelada com um canto reto; um lote irregular precisa de subdivisão em formas mais simples." },
          { "kind": "h3", "text": "Exemplo 9: vela de tecido triangular" },
          { "kind": "p", "text": "Um painel de tecido em triângulo retângulo tem lados [[a=15\\text{ ft}]], [[b=20\\text{ ft}]], [[c=25\\text{ ft}]]. Semiperímetro: [[s=30\\text{ ft}]]. Inraio: [[r=5\\text{ ft}]]. Área: [[K=5\\times30]], [[[\\boxed{K=150\\text{ ft}^2}]]] O resultado exclui costuras, bainhas e folgas de material. Suposição: a vela é modelada plana; velas reais curvam sob carga." },
          { "kind": "h3", "text": "Exemplo 10: painel de suporte industrial" },
          { "kind": "p", "text": "Um painel industrial em triângulo retângulo tem lados [[a=11\\text{ m}]], [[b=60\\text{ m}]], [[c=61\\text{ m}]]. Semiperímetro: [[s=66\\text{ m}]]. Inraio: [[r=5\\text{ m}]]. Área: [[K=5\\times66]], [[[\\boxed{K=330\\text{ m}^2}]]] O resultado descreve o painel geométrico plano, não seu desempenho estrutural. Suposição: o painel é modelado como um triângulo retângulo; espessura e fixações são assuntos separados." },
          { "kind": "h3", "text": "Exemplo 11: seção de extremidade de telhado de armazém" },
          { "kind": "p", "text": "Uma seção de extremidade de telhado de armazém simplificada tem lados [[a=13\\text{ ft}]], [[b=84\\text{ ft}]], [[c=85\\text{ ft}]]. Semiperímetro: [[s=91\\text{ ft}]]. Inraio: [[r=6\\text{ ft}]]. Área: [[K=6\\times91]], [[[\\boxed{K=546\\text{ ft}^2}]]] O resultado estima a seção triangular da extremidade, por exemplo ao precificar revestimento. Suposição: a extremidade do frontão é modelada como um triângulo retângulo." },
          { "kind": "h3", "text": "Exemplo 12: painel de fabricação grande" },
          { "kind": "p", "text": "Um painel de fabricação em triângulo retângulo tem lados [[a=28\\text{ cm}]], [[b=45\\text{ cm}]], [[c=53\\text{ cm}]]. Semiperímetro: [[s=\\frac{28+45+53}{2}=63\\text{ cm}]]. Inraio: [[r=\\frac{28+45-53}{2}=10\\text{ cm}]]. Área: [[K=10\\times63]], [[[\\boxed{K=630\\text{ cm}^2}]]] Este método calcula a área triangular plana do painel diretamente a partir das medidas de seu círculo e de seu contorno. Suposição: as arestas do painel são retas e se encontram em ângulo reto." },
          { "kind": "h3", "text": "Comparação dos exemplos práticos" }
        ],
        "table": {
          "headers": ["<tr>\n          <th class=\"border-gray-600 px-4 py-2 text-left\">Aplicação prática", "Cateto a", "Cateto b", "Hipotenusa c", "Inraio r", "Semiperímetro s", "Área calculada", "Unidade de medida"],
          "rows": [
            ["Janela de vidro", "3", "4", "5", "1", "6", "6", "m²"],
            ["Suporte de aço", "5", "12", "13", "2", "15", "30", "cm²"],
            ["Suporte de telhado", "8", "15", "17", "3", "20", "60", "ft²"],
            ["Seção de jardim", "7", "24", "25", "3", "28", "84", "m²"],
            ["Perfil de rampa", "9", "12", "15", "3", "18", "54", "m²"],
            ["Gabarito de compensado", "12", "16", "20", "4", "24", "96", "cm²"],
            ["Painel de sinalização", "20", "21", "29", "6", "35", "210", "cm²"],
            ["Seção de levantamento", "9", "40", "41", "4", "45", "180", "m²"],
            ["Vela de tecido", "15", "20", "25", "5", "30", "150", "ft²"],
            ["Painel industrial", "11", "60", "61", "5", "66", "330", "m²"],
            ["Extremidade de telhado", "13", "84", "85", "6", "91", "546", "ft²"],
            ["Painel de fabricação", "28", "45", "53", "10", "63", "630", "cm²"]
          ]
        }
      },
      "sec-legs-comparison": {
        "h2": "Por que a fórmula do inraio dá a mesma área que a fórmula dos catetos?",
        "blocks": [
          { "kind": "p", "text": "Duas fórmulas diferentes, um triângulo, uma área. Comece com [[K=rs]] e a área padrão do triângulo retângulo [[K=\\frac{ab}{2}]], o que força [[[\\boxed{rs=\\frac{ab}{2}}]]] Os dois lados medem a mesma superfície delimitada usando informações geométricas diferentes: um lê o círculo inscrito e o contorno, o outro lê os dois catetos perpendiculares." },
          { "kind": "h3", "text": "Comparação numérica usando um triângulo 3-4-5" },
          { "kind": "p", "text": "Método do inraio: [[r=1]], [[s=6]], então [[K=1\\times6=6]]. Método dos catetos: [[K=\\frac{3\\times4}{2}=6]]. As respostas concordam porque o inraio e o semiperímetro codificam a mesma informação dos lados que os catetos: [[r=\\frac{a+b-c}{2}]] e [[s=\\frac{a+b+c}{2}]] são construídos a partir de [[a]], [[b]] e [[c]], então o produto deles deve reconstruir a área que os catetos descrevem. A concordância aqui não é coincidência; é álgebra." },
          { "kind": "h3", "text": "Quando o método do inraio é mais útil?" },
          { "kind": "p", "text": "O método do inraio vence quando r e s já estão em mãos. Problemas de geometria sobre círculos inscritos entregam o inraio diretamente. Uma prova que precisa da área expressa por medidas do círculo usa [[K=rs]] naturalmente. Problemas de competição costumam fornecer o semiperímetro como parte do enunciado. E como verificação cruzada, calcular a área de dois modos independentes pega deslizes aritméticos que um único método esconderia. Em cada caso, o ponto é a conveniência da entrada: comece pelas medidas que você tem." },
          { "kind": "h3", "text": "Quando a fórmula dos catetos é mais simples?" },
          { "kind": "p", "text": "Se os dois catetos perpendiculares já forem conhecidos, [[K=\\frac{ab}{2}]] costuma ser mais direto: uma multiplicação, uma divisão por dois, sem r ou s intermediários para calcular. Derivar o inraio e o semiperímetro primeiro e depois multiplicar acrescenta dois passos que nada mudam. O método do semiperímetro nem sempre é o caminho mais fácil; é o melhor caminho quando o círculo inscrito ou o contorno é o ponto de partida natural, e um desvio quando os catetos estão bem diante de você." }
        ]
      },
      "sec-heron": {
        "h2": "Qual é a diferença entre a fórmula de Heron e área = inraio × semiperímetro?",
        "blocks": [
          { "kind": "p", "text": "A fórmula de Heron calcula a área a partir dos três lados: [[[\\boxed{K=\\sqrt{s(s-a)(s-b)(s-c)}}]]] Ela exige o semiperímetro, mas não o inraio, e funciona para qualquer triângulo válido. A fórmula do inraio [[[\\boxed{K=rs}]]] precisa do inraio e do semiperímetro em vez dos três lados. A diferença é de entradas, não de geometria: ambas devolvem a mesma área delimitada, porque as duas fórmulas se ligam por [[r=\\frac{K}{s}]]. A fórmula de Heron é a escolha natural quando os três lados são conhecidos e não há dados de círculo; a fórmula do inraio é natural quando o círculo inscrito faz parte do quadro." },
          { "kind": "h3", "text": "Comparação resolvida" },
          { "kind": "p", "text": "Use um triângulo 3-4-5. Fórmula de Heron: [[s=6]], [[K=\\sqrt{6(6-3)(6-4)(6-5)}]], [[K=\\sqrt{6\\times3\\times2\\times1}]], [[[\\boxed{K=6}]]] Fórmula do inraio: [[K=1\\times6]], [[[\\boxed{K=6}]]] As respostas coincidem porque a expressão de Heron se simplifica, pela mesma decomposição em três triângulos, para [[r\\times s]]: a raiz quadrada de [[s(s-a)(s-b)(s-c)]] é igual a [[rs]] sempre que r e s vêm do mesmo triângulo. Não confunda as duas ferramentas, porém: a fórmula de Heron nunca pede o inraio, e o atalho do inraio [[r=\\frac{a+b-c}{2}]] pertence somente aos triângulos retângulos." }
        ]
      },
      "sec-consistency": {
        "h2": "Como verificar se o inraio e o semiperímetro são válidos",
        "blocks": [
          { "kind": "p", "text": "A calculadora aceita dois valores e os multiplica, mas o produto é a área de um triângulo retângulo apenas quando os dois valores descrevem o mesmo triângulo. As verificações abaixo separam entradas válidas de impostoras." },
          { "kind": "h3", "text": "Condições básicas de entrada" },
          { "kind": "p", "text": "Ambas as entradas devem ser positivas: [[r>0]] e [[s>0]]. Um comprimento não pode ser zero nem negativo, então uma entrada não positiva não tem significado geométrico. Zero colapsaria o triângulo a uma linha sem área; um valor negativo não descreve nada. Meça de novo ou derive de novo qualquer entrada que falhe neste teste." },
          { "kind": "h3", "text": "O semiperímetro deve ser maior que o inraio" },
          { "kind": "p", "text": "Em um triângulo válido, o semiperímetro supera de longe o inraio. De [[K=rs]] e [[K=\\frac{ab}{2}]] com catetos positivos, e da geometria do círculo inscrito cabendo dentro do triângulo, [[s]] é sempre claramente maior que [[r]]: para o triângulo 3-4-5, 6 contra 1; para 5-12-13, 15 contra 2. Os valores também devem corresponder a um conjunto válido de três lados, então esta comparação é um filtro rápido, não toda a validação. Um inraio maior que o semiperímetro não pode vir de nenhum triângulo." },
          { "kind": "h3", "text": "Verificação avançada de consistência para triângulos retângulos" },
          { "kind": "p", "text": "Para um teste mais rigoroso, um triângulo retângulo deve satisfazer [[[\\boxed{\\frac{r}{s}\\leq3-2\\sqrt{2}}]]], aproximadamente [[[\\boxed{\\frac{r}{s}\\leq0.1716}]]] A ideia é simples: a partir de um dado r e s, os dois catetos devem ser as soluções positivas de uma equação quadrática construída a partir de [[a+b=s+r]] e [[ab=2rs]], e essa quadrática só tem soluções reais quando seu discriminante permanece não negativo. A condição do discriminante se simplifica exatamente neste limite. Confira 3-4-5: [[\\frac{1}{6}\\approx0.1667\\leq0.1716]], válido. Este é um refinamento opcional para trabalho cuidadoso, não uma parte obrigatória do cálculo iniciante." },
          { "kind": "h3", "text": "O que acontece quando as entradas são inconsistentes?" },
          { "kind": "p", "text": "Multiplicar dois números positivos sempre produz um resultado numérico, mas isso não prova que eles representam o inraio e o semiperímetro do mesmo triângulo retângulo. Um r de um triângulo junto com um s de outro produz um produto sem significado geométrico, por mais arrumada que a aritmética pareça. A menos que a implementação da calculadora tenha sido testada quanto ao comportamento de validação, não presuma que ela verifica a relação: execute você mesmo as verificações acima, recalcule r e s a partir dos lados quando os lados forem conhecidos e confira a área com a fórmula dos catetos." }
        ]
      },
      "sec-units": {
        "h2": "Como as unidades de medida afetam os cálculos de inraio e semiperímetro",
        "blocks": [
          { "kind": "p", "text": "O inraio e o semiperímetro são ambos comprimentos, então seguem as mesmas regras de unidade de qualquer outra medida de comprimento. A unidade quadrada na resposta vem da multiplicação de duas unidades de comprimento, o que faz das unidades consistentes todo o jogo." },
          { "kind": "h3", "text": "Por que ambas as entradas devem usar unidades compatíveis?" },
          { "kind": "p", "text": "O produto [[K=r\\times s]] multiplica um comprimento por um comprimento. Se r estiver em centímetros e s em metros, o produto mistura as duas escalas e o número não tem significado limpo. Converta primeiro para que ambas as entradas compartilhem uma unidade: metros, centímetros, milímetros, pés, polegadas ou jardas, mas a mesma para as duas. A calculadora tem seletores de unidade por esse motivo: ajuste-os antes de digitar os números." },
          { "kind": "h3", "text": "Exemplo resolvido de conversão de unidades" },
          { "kind": "p", "text": "Dados [[r=10\\text{ cm}]] e [[s=1\\text{ m}]]. Converta o semiperímetro: [[1\\text{ m}=100\\text{ cm}]]. Então [[K=10\\times100]], [[[\\boxed{K=1000\\text{ cm}^2}]]] Alternativamente, converta o inraio: [[10\\text{ cm}=0.1\\text{ m}]], então [[K=0.1\\times1]], [[[\\boxed{K=0.1\\text{ m}^2}]]] As duas respostas descrevem a mesma área, já que [[0.1\\text{ m}^2=1000\\text{ cm}^2]]. Converta primeiro, multiplique depois, e qualquer caminho de unidade chega ao lugar certo." },
          { "kind": "h3", "text": "Por que o resultado é expresso em unidades quadradas?" },
          { "kind": "p", "text": "A área conta os quadrados unitários que cobrem a superfície: [[\\text{cm}\\times\\text{cm}=\\text{cm}^2]], [[\\text{m}\\times\\text{m}=\\text{m}^2]], [[\\text{ft}\\times\\text{ft}=\\text{ft}^2]]. A unidade é sempre a unidade de comprimento ao quadrado, porque o produto de dois comprimentos é uma contagem de quadrados. Informar uma área como um comprimento simples, como 1000 cm, é um erro de categoria: 1000 cm é um comprimento, enquanto 1000 cm² é uma superfície." },
          { "kind": "h3", "text": "Trabalhando com valores decimais" },
          { "kind": "p", "text": "A fórmula lida com decimais sem modificação. Dados [[r=2.5]] e [[s=8.4]]: [[K=2.5\\times8.4]], [[[\\boxed{K=21\\text{ square units}}]]] Números inteiros, decimais e medidas finas de oficina fluem pela mesma multiplicação. Mantenha a precisão total durante o cálculo e arredonde apenas a resposta final para a exatidão que as medidas justificam." }
        ]
      },
      "sec-mistakes": {
        "h2": "Erros comuns ao calcular a área do triângulo retângulo a partir do semiperímetro",
        "blocks": [
          { "kind": "p", "text": "Quase toda resposta errada neste tema se deve a um rótulo confuso, não a uma aritmética ruim. Os dezesseis erros abaixo são os que aparecem repetidamente, cada um com sua causa e sua correção." },
          { "kind": "h3", "text": "1. Confundir semiperímetro com perímetro completo" },
          { "kind": "p", "text": "Inserir [[P=12]] onde [[s=6]] deveria estar dobra a resposta: [[1\\times12=12]] em vez de 6. O erro acontece porque a linguagem do dia a dia diz perímetro enquanto a fórmula quer metade dele. Correção: sempre divida a soma do contorno pela metade antes de inserir, e confira que o s inserido é menor que o perímetro." },
          { "kind": "h3", "text": "2. Usar o circunraio em vez do inraio" },
          { "kind": "p", "text": "O circunraio do triângulo 3-4-5 é [[R=\\frac{5}{2}=2.5]]; usá-lo dá [[2.5\\times6=15]], quase o triplo da área verdadeira. O erro vem dos dois círculos compartilharem a palavra raio. Correção: confirme que o raio pertence ao círculo dentro do triângulo, tocando os três lados, não ao que passa pelos vértices." },
          { "kind": "h3", "text": "3. Esquecer de calcular o semiperímetro corretamente" },
          { "kind": "p", "text": "Somar apenas dois lados, ou dividir cada lado por dois antes de somar, produz um s errado. Para 3-4-5, somar 3 + 4 e dividir dá 3.5, e [[1\\times3.5=3.5]] não tem sentido. Correção: some os três lados primeiro, depois divida uma vez: [[s=\\frac{a+b+c}{2}]]." },
          { "kind": "h3", "text": "4. Dividir o resultado final por dois de novo" },
          { "kind": "p", "text": "Depois de [[K=1\\times6=6]], uma divisão extra por dois dá 3. O hábito vem da fórmula dos catetos, onde a divisão é explícita. Correção: lembre-se de que as metades já estão absorvidas no semiperímetro; [[K=r\\times s]] está completo." },
          { "kind": "h3", "text": "5. Usar a fórmula errada do inraio do triângulo retângulo" },
          { "kind": "p", "text": "Adivinhar [[r=\\frac{c-a-b}{2}]] ou [[r=\\frac{a+b}{2}]] produz um raio errado. Para 3-4-5, [[\\frac{5-3-4}{2}=-1]] nem sequer é um comprimento. Correção: use [[r=\\frac{a+b-c}{2}]] com a e b como os catetos e c como a hipotenusa, exatamente nessa disposição." },
          { "kind": "h3", "text": "6. Aplicar o atalho do inraio do triângulo retângulo a um triângulo comum" },
          { "kind": "p", "text": "O atalho se apoia no ângulo reto, então em um triângulo geral ele calcula um número sem significado geométrico. Correção: para triângulos não retângulos, encontre o inraio por [[r=\\frac{K}{s}]] ou por uma fórmula combinada com as medidas conhecidas, nunca por [[r=\\frac{a+b-c}{2}]]." },
          { "kind": "h3", "text": "7. Inserir o inraio e o semiperímetro de triângulos diferentes" },
          { "kind": "p", "text": "Tomar r = 1 de um triângulo 3-4-5 e s = 15 de um triângulo 5-12-13 dá 15, um produto que não descreve nenhum triângulo real. O erro acontece quando os valores são copiados de exemplos resolvidos diferentes ou de desenhos diferentes. Correção: derive ou meça ambas as entradas do mesmo triângulo antes de multiplicar." },
          { "kind": "h3", "text": "8. Misturar centímetros e metros" },
          { "kind": "p", "text": "Multiplicar r = 10 cm por s = 1 m sem converter dá 10 de nada limpo. Correção: converta para uma unidade primeiro: [[1\\text{ m}=100\\text{ cm}]], então [[K=10\\times100=1000\\text{ cm}^2]]." },
          { "kind": "h3", "text": "9. Informar o resultado em unidades lineares" },
          { "kind": "p", "text": "Uma área de 6 m² não é 6 m. O erro costuma vir de copiar a unidade de entrada sem elevá-la ao quadrado. Correção: escreva a unidade quadrada junto do número sempre: m², cm², ft²." },
          { "kind": "h3", "text": "10. Inserir medidas zero ou negativas" },
          { "kind": "p", "text": "Comprimentos são positivos. Zero colapsa o triângulo a uma linha sem área, e comprimentos negativos não têm significado geométrico aqui. Correção: meça de novo ou derive de novo a entrada; rejeite valores não positivos antes de calcular." },
          { "kind": "h3", "text": "11. Confundir o incentro com o circuncentro" },
          { "kind": "p", "text": "O incentro é o ponto de encontro das bissetrizes dos ângulos; o circuncentro é o ponto de encontro das mediatrizes dos lados. Para um triângulo retângulo, o circuncentro fica no ponto médio da hipotenusa, um ponto completamente diferente. Trocá-los leva a medir o raio errado. Correção: o incentro [[I]] fica dentro do triângulo, à mesma distância dos lados, não dos vértices." },
          { "kind": "h3", "text": "12. Supor que o círculo inscrito toca apenas dois lados" },
          { "kind": "p", "text": "Um círculo encaixado em um canto toca dois lados, mas esse não é o círculo inscrito. O círculo inscrito toca os três, e a prova da área precisa dos três pontos de tangência. Correção: verifique três pontos de contato, um por lado, antes de tratar um raio como o inraio." },
          { "kind": "h3", "text": "13. Esquecer que o raio encontra cada lado tangente perpendicularmente" },
          { "kind": "p", "text": "O argumento da altura compartilhada na prova depende de [[r\\perp a]], [[r\\perp b]], [[r\\perp c]]. Um segmento inclinado do incentro a um lado é mais longo que r e não pode servir de altura. Correção: meça o inraio ao longo da perpendicular ao lado, nunca ao longo de uma diagonal." },
          { "kind": "h3", "text": "14. Confundir o inraio com o diâmetro" },
          { "kind": "p", "text": "Inserir a largura total do círculo inscrito como r dobra o raio e dobra a área. Para o triângulo 3-4-5, inserir 2 em vez de 1 dá [[2\\times6=12]]. Correção: o inraio vai do centro a um lado, metade da largura total do círculo." },
          { "kind": "h3", "text": "15. Usar a fórmula de Heron incorretamente" },
          { "kind": "p", "text": "Deslizes comuns incluem esquecer a raiz quadrada, escrever [[s(s+a)(s+b)(s+c)]] com sinais de mais, ou alimentar a fórmula com o perímetro completo. Para 3-4-5, omitir a raiz dá 36 em vez de 6. Correção: [[K=\\sqrt{s(s-a)(s-b)(s-c)}]], com o semiperímetro, os sinais de menos e a raiz todos no lugar." },
          { "kind": "h3", "text": "16. Supor que um resultado numérico prova automaticamente que as entradas são geometricamente consistentes" },
          { "kind": "p", "text": "Quaisquer dois números positivos se multiplicam, então a calculadora sempre devolve alguma coisa. Essa alguma coisa só é a área de um triângulo retângulo quando r e s realmente pertencem a um só. Correção: execute as verificações de consistência, recalcule r e s a partir dos lados quando possível e confira com a fórmula dos catetos antes de confiar no número." },
          { "kind": "h3", "text": "Errado versus correto: um exemplo concreto" },
          { "kind": "p", "text": "Use [[r=1]], [[s=6]]. Correto: [[K=1\\times6=6]]. Incorreto ao dividir por dois de novo: [[K=\\frac{1\\times6}{2}=3]], errado porque a divisão por dois já está dentro do semiperímetro. Incorreto ao inserir o perímetro completo 12 em vez do semiperímetro 6: [[K=1\\times12=12]], o dobro da área verdadeira. A aritmética parece confiante nos três casos; só a geometria os distingue." }
        ]
      },
      "sec-verify": {
        "h2": "Como verificar se a área do seu triângulo retângulo está correta",
        "blocks": [
          { "kind": "p", "text": "Seis verificações independentes, todas demonstradas no triângulo 3-4-5 ([[a=3]], [[b=4]], [[c=5]], [[r=1]], [[s=6]], [[K=6]]). A concordância entre caminhos diferentes é a evidência mais forte de que uma resposta está certa, na lição de casa e na medição prática." },
          { "kind": "h3", "text": "Método 1: confira a fórmula principal" },
          { "kind": "p", "text": "Execute [[K=r\\times s]] de novo: [[K=1\\times6=6]]. Uma segunda passada com os números digitados outra vez pega erros de digitação e dígitos trocados." },
          { "kind": "h3", "text": "Método 2: calcule o semiperímetro a partir dos três lados" },
          { "kind": "p", "text": "Recalcule [[s=\\frac{a+b+c}{2}]] a partir dos lados: [[s=\\frac{3+4+5}{2}=6]]. Se o s recalculado diferir do inserido, a entrada estava errada e o produto deve ser refeito." },
          { "kind": "h3", "text": "Método 3: calcule o inraio a partir do triângulo retângulo" },
          { "kind": "p", "text": "Recalcule [[r=\\frac{a+b-c}{2}]]: [[r=\\frac{3+4-5}{2}=1]]. Uma divergência contra o r inserido significa que o raio veio de um triângulo diferente ou de uma fórmula mal aplicada." },
          { "kind": "h3", "text": "Método 4: verifique usando a fórmula padrão dos catetos" },
          { "kind": "p", "text": "Calcule [[K=\\frac{ab}{2}]]: [[K=\\frac{3\\times4}{2}=6]]. Este caminho usa entradas completamente diferentes, então a concordância com [[rs]] confirma tanto as entradas quanto a aritmética." },
          { "kind": "h3", "text": "Método 5: verifique usando a fórmula de Heron" },
          { "kind": "p", "text": "Calcule [[K=\\sqrt{s(s-a)(s-b)(s-c)}]]: [[K=\\sqrt{6\\times3\\times2\\times1}=6]]. A fórmula de Heron exercita os lados e o semiperímetro juntos, pegando erros de rotulagem dos lados que as outras verificações poderiam perder." },
          { "kind": "h3", "text": "Método 6: confira o teorema de Pitágoras" },
          { "kind": "p", "text": "Confirme [[a^2+b^2=c^2]]: [[3^2+4^2=9+16=25=5^2]]. Isto verifica a identificação dos lados por trás de todos os outros cálculos; uma hipotenusa errada significa que um lado foi rotulado errado e r, s e K precisam ser reconstruídos." }
        ]
      },
      "sec-applications": {
        "h2": "Aplicações práticas da fórmula do inraio e do semiperímetro",
        "blocks": [
          { "kind": "p", "text": "O mesmo padrão de duas entradas aparece onde quer que um painel ou seção triangular precise de medição e os dados do círculo inscrito sejam o ponto de partida conveniente. Um vidraceiro dimensiona uma janela a partir dos comprimentos das arestas; um fabricante lê os catetos de uma peça de suporte; um agrimensor reduz um canto de terreno a três lados retos. Desses lados vêm o inraio e o semiperímetro, e uma multiplicação nomeia a área. Os quatro painéis abaixo mostram o padrão em escalas diferentes: uma janela de vidro (6 m²), um suporte de telhado (60 ft²), uma seção de jardim (84 m²) e uma chapa de aço (30 cm²), cada um rotulado com seu inraio, seu semiperímetro e a área resultante." }
        ],
        "imgAlt": "Quatro painéis: janela de vidro 6 m², suporte de telhado 60 ft², seção de jardim 84 m², chapa de aço 30 cm²",
        "figcaption": "Quatro usos reais: uma janela de vidro, um suporte de telhado, uma seção de jardim e uma chapa de aço."
      },
      "sec-conclusion": {
        "h2": "Duas medidas, um produto",
        "blocks": [
          { "kind": "p", "text": "Um inraio e um semiperímetro bastam. Multiplique-os, e a superfície delimitada é nomeada. A prova dos três triângulos mostra por que nenhuma divisão segue a multiplicação, o argumento dos segmentos tangentes mostra por que o triângulo retângulo ganha seu atalho do inraio, e a fórmula dos catetos mais a fórmula de Heron estão prontas para conferir cada resposta." },
          { "kind": "p", "text": "O hábito de trabalho é simples: confirme que ambas as entradas descrevem o mesmo triângulo, combine as unidades, mantenha os decimais sem arredondar até o fim e verifique por um segundo método. Com esses hábitos, [[K=r\\times s]] é um dos cálculos de área mais confiáveis da geometria." }
        ]
      },
      "sec-related": {
        "h2": "Explore Calculadoras Relacionadas de Triângulo Retângulo",
        "blocks": [
          { "kind": "p", "text": "Medidas diferentes pedem calculadoras diferentes." }
        ]
      },
      "sec-faq": {
        "h2": "Perguntas Frequentes",
        "blocks": []
      }
    }
  },
  "bn": {
    "faqs": [
      {
        "question": "অন্তর্ব্যাসার্ধ ও অর্ধপরিসীমা ব্যবহার করে সমকোণী ত্রিভুজের ক্ষেত্রফলের সূত্র কী?",
        "answer": "K = r × s, যেখানে r হলো অন্তর্ব্যাসার্ধ (অন্তর্বৃত্তের ব্যাসার্ধ) এবং s হলো অর্ধপরিসীমা (পরিসীমার অর্ধেক)। দুটোকে গুণ করলেই ক্ষেত্রফল পাওয়া যায়, কোনো ভাগের ধাপ লাগে না। r = 1 ও s = 6 হলে, K = 1 × 6 = 6 বর্গ একক। দুটি ইনপুটই একই ত্রিভুজের হতে হবে।"
      },
      {
        "question": "অন্তর্ব্যাসার্ধ কী?",
        "answer": "অন্তর্ব্যাসার্ধ হলো অন্তর্বৃত্তের ব্যাসার্ধ, অর্থাৎ সেই বৃত্তের যা ত্রিভুজের ঠিক ভেতরে বসে তিনটি বাহুকেই স্পর্শ করে। এটি অন্তঃকেন্দ্র থেকে (যেখানে তিনটি কোণ-দ্বিখণ্ডক মিলিত হয়) যেকোনো বাহুর লম্ব দূরত্বের সমান। পাদ a ও b এবং অতিভুজ c বিশিষ্ট সমকোণী ত্রিভুজের ক্ষেত্রে এর সংক্ষিপ্ত সূত্র r = (a + b - c) / 2।"
      },
      {
        "question": "অন্তর্ব্যাসার্ধ ও পরিব্যাসার্ধের মধ্যে পার্থক্য কী?",
        "answer": "অন্তর্ব্যাসার্ধ ত্রিভুজের ভেতরের বৃত্তের, যা তিনটি বাহুকেই স্পর্শ করে; পরিব্যাসার্ধ সেই বৃত্তের যা তিনটি শীর্ষবিন্দুর মধ্য দিয়ে যায়। দুটি আলাদা বৃত্ত, তাই মানও আলাদা। সমকোণী ত্রিভুজের ক্ষেত্রে পরিব্যাসার্ধ R = c/2, অর্থাৎ অতিভুজের ঠিক অর্ধেক, আর অন্তর্ব্যাসার্ধ (a + b - c)/2।"
      },
      {
        "question": "সমকোণী ত্রিভুজের অর্ধপরিসীমা কীভাবে বের করব?",
        "answer": "তিনটি বাহু যোগ করে দুই দিয়ে ভাগ করুন: s = (a + b + c) / 2। 3-4-5 ত্রিভুজের জন্য s = (3 + 4 + 5) / 2 = 6। অর্ধপরিসীমা হলো পূর্ণ পরিসীমার অর্ধেক, তাই ভুল করে পূর্ণ পরিসীমা বসালে K = r × s ব্যবহারে ক্ষেত্রফল দ্বিগুণ হয়ে যায়।"
      },
      {
        "question": "তিনটি বাহুর দৈর্ঘ্য থেকে অন্তর্ব্যাসার্ধ কীভাবে পাব?",
        "answer": "সমকোণী ত্রিভুজের জন্য সংক্ষিপ্ত সূত্র r = (a + b - c) / 2 ব্যবহার করুন, যেখানে a ও b হলো পাদ, c হলো অতিভুজ। 5, 12, 13 বাহুর ক্ষেত্রে: r = (5 + 12 - 13) / 2 = 2। এই সংক্ষিপ্ত পদ্ধতি শুধু সমকোণী ত্রিভুজেই খাটে; অন্য ত্রিভুজে সাধারণ সম্পর্ক r = K / s লাগবে।"
      },
      {
        "question": "ক্ষেত্রফল কেন অন্তর্ব্যাসার্ধ গুণ অর্ধপরিসীমার সমান হয়?",
        "answer": "অন্তঃকেন্দ্রকে তিনটি শীর্ষবিন্দুর সঙ্গে যোগ করলে ত্রিভুজটি তিনটি ছোট ত্রিভুজে ভাগ হয়, প্রতিটির ভূমি একটি করে বাহু আর উচ্চতা r। এদের ক্ষেত্রফল ar/2, br/2 ও cr/2। যোগ করলে পাওয়া যায় r(a + b + c)/2, আর যেহেতু s = (a + b + c)/2, মোট ফল r × s।"
      },
      {
        "question": "সূত্রটি কি সব ত্রিভুজেই কাজ করে?",
        "answer": "হ্যাঁ। প্রতিটি অ-ক্ষীণ ত্রিভুজেরই অন্তর্বৃত্ত ও অন্তঃকেন্দ্র থাকে, তাই তিন-ত্রিভুজ বিশ্লেষণ সমকোণী, সূক্ষ্মকোণী ও স্থূলকোণী সব ক্ষেত্রেই খাটে। সমকোণী ত্রিভুজ কেবল সহজতর, কারণ এর অন্তর্ব্যাসার্ধ বাহু থেকে r = (a + b - c) / 2 দিয়ে পাওয়া যায়। সাধারণ অন্তর্ব্যাসার্ধ এখনো r = K / s থেকেই আসে।"
      },
      {
        "question": "অর্ধপরিসীমা কি পরিসীমার সমান?",
        "answer": "না। অর্ধপরিসীমা হলো পরিসীমার ঠিক অর্ধেক: s = P/2। 3-4-5 ত্রিভুজে পরিসীমা 12, অর্ধপরিসীমা 6। K = r × s-এ পূর্ণ পরিসীমা বসালে 1 × 12 = 12 হয়, যা সঠিক ক্ষেত্রফল 6-এর দ্বিগুণ। গুণের আগে পরিসীমাকে অর্ধেক করুন।"
      },
      {
        "question": "চূড়ান্ত উত্তরকে আবার দুই দিয়ে ভাগ করতে হবে?",
        "answer": "না। K = r × s সূত্রে প্রতিটি ভাগ আগেই হিসাব করা: তিনটি ছোট ত্রিভুজের অর্ধেকগুলো অর্ধপরিসীমার মধ্যে শোষিত। গুণের পর আবার ভাগ করা সবচেয়ে সাধারণ ভুল। r = 1 ও s = 6 হলে সঠিক ক্ষেত্রফল 6, আর (1 × 6) / 2 = 3 ভুল।"
      },
      {
        "question": "হেরনের সূত্র ও অন্তর্ব্যাসার্ধ সূত্রের মধ্যে সম্পর্ক কী?",
        "answer": "দুটোই একই ক্ষেত্রফল দেয়, কিন্তু ভিন্ন ইনপুট থেকে শুরু করে। হেরনের সূত্র, K = sqrt(s(s - a)(s - b)(s - c)), তিনটি বাহু চায়; K = r × s চায় অন্তর্ব্যাসার্ধ ও অর্ধপরিসীমা। 3-4-5 ত্রিভুজে দুটোই 6 দেয়, ফলে একটা সূত্র অন্যটার শক্তিশালী যাচাই হয়ে ওঠে।"
      },
      {
        "question": "অন্তর্ব্যাসার্ধ ও অর্ধপরিসীমায় দশমিক মান ব্যবহার করা যায়?",
        "answer": "হ্যাঁ। সূত্রটি দশমিককে পূর্ণ সংখ্যার মতোই সামলায়। r = 2.5 ও s = 8.4 হলে, K = 2.5 × 8.4 = 21 বর্গ একক। গুণের সময় পূর্ণ নির্ভুলতা রাখুন, শুধু চূড়ান্ত উত্তরটিই পরিমাপের যথার্থতা অনুযায়ী গোল করুন।"
      },
      {
        "question": "আমার অন্তর্ব্যাসার্ধ ও অর্ধপরিসীমা সঠিক কি না, কীভাবে যাচাই করব?",
        "answer": "দেখুন দুটোই ধনাত্মক কি না এবং s স্পষ্টতই r-এর চেয়ে বড় কি না। বাহু জানা থাকলে s = (a + b + c)/2 ও r = (a + b - c)/2 আবার হিসাব করুন, তারপর K = ab/2 ও হেরনের সূত্র দিয়ে ক্ষেত্রফল মিলিয়ে নিন। পদ্ধতিগুলোর একমত হওয়া শক্তিশালী প্রমাণ। ভিন্ন ত্রিভুজের মান জুড়ে দিলে আসল ক্ষেত্রফল নয় এমন সংখ্যা পাওয়া যায়।"
      }
    ],
    "relatedHeading": "সম্পর্কিত সমকোণী ত্রিভুজ ক্যালকুলেটর দেখুন",
    "relatedItems": [
      "পাদ থেকে সমকোণী ত্রিভুজ ক্ষেত্রফল ক্যালকুলেটর",
      "সমকোণী ত্রিভুজ অর্ধপরিসীমা ক্যালকুলেটর",
      "উচ্চতা থেকে সমকোণী ত্রিভুজ ক্ষেত্রফল ক্যালকুলেটর",
      "কোণ থেকে সমকোণী ত্রিভুজ ক্ষেত্রফল ক্যালকুলেটর",
      "সমকোণী ত্রিভুজ পরিসীমা ক্যালকুলেটর",
      "সমকোণী ত্রিভুজ ক্ষেত্রফল ক্যালকুলেটর"
    ],
    "relatedIntro": "ভিন্ন ভিন্ন মাপের জন্য ভিন্ন ভিন্ন ক্যালকুলেটর দরকার।",
    "faqHeading": "সচরাচর জিজ্ঞাসিত প্রশ্ন",
    "tocHeading": "এই নির্দেশিকায়",
    "tocItems": {
      "sec-intro": "অন্তর্ব্যাসার্ধ ও অর্ধপরিসীমা ব্যবহার করে সমকোণী ত্রিভুজের ক্ষেত্রফল কীভাবে বের করবেন",
      "sec-right-triangle": "সমকোণী ত্রিভুজ কী?",
      "sec-incircle": "সমকোণী ত্রিভুজের অন্তর্বৃত্ত বোঝা",
      "sec-semiperimeter": "ত্রিভুজের অর্ধপরিসীমা বোঝা",
      "sec-formula": "ত্রিভুজের ক্ষেত্রফল কেন অন্তর্ব্যাসার্ধ গুণ অর্ধপরিসীমার সমান?",
      "sec-inradius": "সমকোণী ত্রিভুজের অন্তর্ব্যাসার্ধ কীভাবে বের করবেন",
      "sec-howto": "অর্ধপরিসীমা থেকে সমকোণী ত্রিভুজ ক্ষেত্রফল ক্যালকুলেটর কীভাবে ব্যবহার করবেন",
      "sec-examples": "অন্তর্ব্যাসার্ধ ও অর্ধপরিসীমা ব্যবহারে সমকোণী ত্রিভুজ ক্ষেত্রফলের ধাপে ধাপে উদাহরণ",
      "sec-practical": "অন্তর্ব্যাসার্ধ ও অর্ধপরিসীমা থেকে সমকোণী ত্রিভুজ ক্ষেত্রফলের বাস্তব প্রয়োগ",
      "sec-legs-comparison": "অন্তর্ব্যাসার্ধের সূত্র কেন পাদের সূত্রের সমান ক্ষেত্রফল দেয়?",
      "sec-heron": "হেরনের সূত্র ও ক্ষেত্রফল = অন্তর্ব্যাসার্ধ × অর্ধপরিসীমার পার্থক্য কী?",
      "sec-consistency": "অন্তর্ব্যাসার্ধ ও অর্ধপরিসীমা বৈধ কি না, কীভাবে যাচাই করবেন",
      "sec-units": "পরিমাপের একক অন্তর্ব্যাসার্ধ ও অর্ধপরিসীমার হিসাবে কী প্রভাব ফেলে",
      "sec-mistakes": "অর্ধপরিসীমা থেকে সমকোণী ত্রিভুজ ক্ষেত্রফল বের করতে সাধারণ ভুল",
      "sec-verify": "আপনার সমকোণী ত্রিভুজের ক্ষেত্রফল সঠিক কি না, কীভাবে যাচাই করবেন",
      "sec-applications": "অন্তর্ব্যাসার্ধ ও অর্ধপরিসীমা সূত্রের ব্যবহারিক প্রয়োগ",
      "sec-related": "সম্পর্কিত সমকোণী ত্রিভুজ ক্যালকুলেটর দেখুন",
      "sec-faq": "সচরাচর জিজ্ঞাসিত প্রশ্ন",
      "sec-conclusion": "দুটো পরিমাপ, একটা গুণফল"
    },
    "sections": {
      "sec-intro": {
        "h2": "অন্তর্ব্যাসার্ধ ও অর্ধপরিসীমা ব্যবহার করে সমকোণী ত্রিভুজের ক্ষেত্রফল কীভাবে বের করবেন",
        "blocks": [
          { "kind": "p", "text": "ধরুন [[r=1]], [[s=6]]। প্রয়োগ করুন [[K=r\\times s]]: [[K=1\\times6]], [[[\\boxed{K=6\\text{ square units}}]]]। ফলাফল ত্রিভুজের তিনটি বাহু দিয়ে আবদ্ধ মোট সমতল পৃষ্ঠের নাম দেয়: ছয় বর্গ একক। এই দুটি ইনপুটের জন্য অর্ধপরিসীমা থেকে সমকোণী ত্রিভুজ ক্ষেত্রফল ক্যালকুলেটর ঠিক এটাই ফেরত দেয়।" },
          { "kind": "p", "text": "অন্তর্ব্যাসার্ধ হলো ত্রিভুজের ভেতরে আঁটসাঁট বসা বৃত্তের ব্যাসার্ধ, যা তিনটি বাহুকেই স্পর্শ করে। অর্ধপরিসীমা হলো সীমানার দৈর্ঘ্যের অর্ধেক: তিনটি বাহুর যোগফলকে দুই দিয়ে ভাগ। মাত্র দুটি মাপই যথেষ্ট, কারণ অন্তর্ব্যাসার্ধ অন্তঃকেন্দ্র থেকে তৈরি তিনটি ছোট ত্রিভুজের ভাগ করা লম্ব উচ্চতা হিসেবে কাজ করে, আর অর্ধপরিসীমা তাদের ভূমিগুলোকে একক গুণকে জড়ো করে।" },
          { "kind": "p", "text": "যুক্তিটি প্রতিটি ত্রিভুজের জন্যই খাটে, কারণ প্রত্যেকেরই অন্তর্বৃত্ত আছে। সমকোণী ত্রিভুজে একটা বাড়তি সুবিধা: এর অন্তর্ব্যাসার্ধ তিনটি বাহু থেকে সংক্ষিপ্ত সূত্রে পাওয়া যায়, তাই r ও s প্রায়ই আগে থেকেই জানা থাকে। এই পদ্ধতি সেইসব সমস্যায় জ্বলজ্বল করে যেখানে অন্তর্বৃত্ত বা অর্ধপরিসীমা দেওয়া থাকে, কারণ কোনো পাদ বা কোণ মাপার দরকার হয় না।" }
        ]
      },
      "sec-right-triangle": {
        "h2": "সমকোণী ত্রিভুজ কী?",
        "blocks": [
          { "kind": "p", "text": "অন্তর্বৃত্ত চিত্রে ঢোকার আগে ত্রিভুজটাকেই নির্ভুলভাবে লেবেল করতে হবে। নিচের প্রতীকগুলো পুরো নির্দেশিকায় অটল থাকে, আর ক্যালকুলেটরও একই নাম ব্যবহার করে।" },
          { "kind": "h3", "text": "সমকোণী ত্রিভুজের সংজ্ঞা" },
          { "kind": "p", "text": "সমকোণী ত্রিভুজ হলো তিন বাহুর বহুভুজ যাতে ঠিক একটি অন্তঃকোণ 90 ডিগ্রি। এর তিনটি শীর্ষবিন্দু, তিনটি বাহু, দুটি সূক্ষ্মকোণ ও একটি সমকোণ থাকে, সমকোণটি সাধারণত ছোট বর্গ দিয়ে চিহ্নিত হয়। সমকোণ গঠনকারী দুটি বাহু হলো পাদ; বিপরীত বাহুটি অতিভুজ। যেহেতু [[C=90^\\circ]], তাই [[[\\boxed{A+B=90^\\circ}]]]: দুটি সূক্ষ্মকোণ পূরক, অর্থাৎ একটি জানলে অন্যটি নির্ধারিত হয়।" },
          { "kind": "h3", "text": "দুটি পাদ বোঝা" },
          { "kind": "p", "text": "পাদ [[a]] কোণ [[A]]-এর বিপরীতে থাকে; পাদ [[b]] কোণ [[B]]-এর বিপরীতে থাকে। দুটি পাদ সমকোণের শীর্ষবিন্দুতে মিলিত হয় এবং পরস্পরের ওপর লম্ব। এরা সরাসরি ক্ষেত্রফলে অবদান রাখে, কারণ প্রতিটি পাদ ভূমি হিসেবে কাজ করতে পারে যখন অন্যটি লম্ব উচ্চতা হয়। এই পৃষ্ঠার জন্য এরা অন্তর্ব্যাসার্ধকেও পুষ্টি দেয়, কারণ সংক্ষিপ্ত সূত্র [[r=\\frac{a+b-c}{2}]] দুটি পাদ ও অতিভুজ থেকেই তৈরি।" },
          { "kind": "h3", "text": "অতিভুজ বোঝা" },
          { "kind": "p", "text": "অতিভুজ হলো 90 ডিগ্রি কোণের বিপরীত বাহু, সবসময় ত্রিভুজের দীর্ঘতম বাহু। এটি কখনো সমকোণ গঠন করে না; এটি তার বিপরীত দিকে প্রসারিত থাকে। পাদের ক্ষেত্রফল সূত্রে এর কোনো ভূমিকা নেই, কিন্তু এখানে আছে: অতিভুজ অর্ধপরিসীমা [[s=\\frac{a+b+c}{2}]] ও অন্তর্ব্যাসার্ধের সংক্ষিপ্ত সূত্র [[r=\\frac{a+b-c}{2}]] দুটোতেই ঢোকে। দুটি পাদ জানা থাকলে পিথাগোরাসের উপপাদ্য [[[\\boxed{c=\\sqrt{a^2+b^2}}]]] দিয়ে এটি উদ্ধার করা যায়।" },
          { "kind": "h3", "text": "এই ত্রিভুজকে অন্য ত্রিভুজ থেকে আলাদা করে কী?" },
          { "kind": "p", "text": "90 ডিগ্রির কোনাটাই পুরো গল্প। এটি কোনো নির্মাণ ছাড়াই পাদ দুটোকে লম্ব করে, যা মানক ক্ষেত্রফল সূত্রকে সরল করে, আর সমকোণের কাছে অন্তর্বৃত্তের স্পর্শক খণ্ডগুলোকে অন্তর্ব্যাসার্ধেরই সমান করে, যা অন্তর্ব্যাসার্ধের সূত্রকে সরল করে। অন্য ত্রিভুজগুলোও [[K=r\\times s]] মানে, কিন্তু তাদের অন্তর্ব্যাসার্ধ বের করতে সাধারণত আগে ক্ষেত্রফল দরকার হয়। সমকোণী ত্রিভুজই একমাত্র ক্ষেত্র যেখানে অন্তর্ব্যাসার্ধ বাহুর দৈর্ঘ্য থেকে সরাসরি বেরিয়ে আসে।" }
        ]
      },
      "sec-incircle": {
        "h2": "সমকোণী ত্রিভুজের অন্তর্বৃত্ত বোঝা",
        "blocks": [
          { "kind": "p", "text": "অন্তর্বৃত্তটিকে স্পষ্টভাবে কল্পনা না করা পর্যন্ত অন্তর্ব্যাসার্ধের অর্থ হয় না। এই অংশটি বৃত্ত থেকেই ধারণা গড়ে, স্পর্শবিন্দু পর্যন্ত যেখানে ব্যাসার্ধ প্রতিটি বাহুকে ছোঁয়।" },
          { "kind": "h3", "text": "অন্তর্বৃত্তের সংজ্ঞা" },
          { "kind": "p", "text": "অন্তর্বৃত্ত হলো ত্রিভুজের ভেতরে এমনভাবে বসানো বৃত্ত যাতে তিনটি বাহুকেই স্পর্শ করে। এটি অভ্যন্তরে থাকে, প্রতিটি বাহুকে ঠিক একটি বিন্দুতে স্পর্শ করে, আর কোনো বাহু অতিক্রম করতে পারে না কারণ স্পর্শই তাকে জায়গায় পিন করে রাখে। প্রতিটি অ-ক্ষীণ ত্রিভুজের ঠিক একটা অন্তর্বৃত্ত থাকে: কোণাঞ্চলগুলোর ভেতরে বৃত্ত সঙ্কুচিত করুন, আর একটিমাত্র সবচেয়ে বড় আকার আছে যা তিনটি বাহুকেই চুমু খায়। তিনটি স্পর্শবিন্দু, প্রতি বাহুতে একটি, হলো সেই জায়গাগুলো যেখানে পরে অন্তর্ব্যাসার্ধ মাপা হবে।" },
          { "kind": "h3", "text": "অন্তঃকেন্দ্র কী?" },
          { "kind": "p", "text": "অন্তঃকেন্দ্র, যাকে [[I]] দিয়ে চিহ্নিত করা হয়, হলো সেই বিন্দু যেখানে তিনটি অন্তঃকোণ-দ্বিখণ্ডক মিলিত হয়। প্রতিটি দ্বিখণ্ডক একটি কোনার কোণকে দুটি সমান অংশে ভাগ করে, আর দ্বিখণ্ডকের ওপর যেকোনো বিন্দু সেই কোণ গঠনকারী দুটি বাহু থেকে সমান লম্ব দূরত্বে থাকে। তাই তিনটি দ্বিখণ্ডকের ছেদবিন্দু তিনটি বাহু থেকেই সমান দূরত্বে থাকে, আর ঠিক এ কারণেই এটি প্রতিটি বাহুকে স্পর্শকারী বৃত্তের কেন্দ্র হিসেবে কাজ করতে পারে। অন্তঃকেন্দ্র প্রতিটি বৈধ ত্রিভুজের ভেতরে থাকে, কখনো প্রান্তে বা বাইরে নয়।" },
          { "kind": "h3", "text": "অন্তর্ব্যাসার্ধ কী?" },
          { "kind": "p", "text": "অন্তর্ব্যাসার্ধ হলো অন্তঃকেন্দ্র থেকে ত্রিভুজের যেকোনো বাহুর লম্ব দূরত্ব: [[[\\boxed{r=\\text{distance from the incenter to a side}}]]]। যেহেতু অন্তঃকেন্দ্র তিনটি বাহু থেকে সমদূরবর্তী, যে বাহুই বেছে নেওয়া হোক মান একই থাকে। এই একটিমাত্র সংখ্যাই অন্তর্বৃত্তের ব্যাসার্ধ, কেন্দ্র থেকে স্পর্শবিন্দু পর্যন্ত টানা তিনটি ছোট খণ্ডের প্রতিটির দৈর্ঘ্য, এবং সেই ভাগ করা উচ্চতা যা পরের অংশের ক্ষেত্রফল প্রমাণকে কাজ করায়।" },
          { "kind": "h3", "text": "স্পর্শ সম্পর্ক বোঝা" },
          { "kind": "p", "text": "স্পর্শবিন্দুতে টানা ব্যাসার্ধ যে বাহুকে ছোঁয় তার ওপর লম্ব হয়। তিনটি সংযোগবিন্দুতে প্রয়োগ করলে পাওয়া যায় [[r\\perp a]], [[r\\perp b]] ও [[r\\perp c]]। প্রতিটি বক্তব্য চিত্রের ভিন্ন কোনা বর্ণনা করে: পাদ a-তে শেষ হওয়া ব্যাসার্ধ পাদ a-র সঙ্গে সমকোণে দাঁড়ায়, আর পাদ b ও অতিভুজের ক্ষেত্রেও তাই। এই লম্বতা সাজসজ্জা নয়; এটাই সেই ধর্ম যা প্রতিটি ব্যাসার্ধকে ক্ষেত্রফল প্রমাণের তিনটি ছোট ত্রিভুজের একটার উচ্চতা হিসেবে কাজ করতে দেয়।" },
          { "kind": "h3", "text": "অন্তর্বৃত্ত ও পরিবৃত্তের পার্থক্য" },
          { "kind": "p", "text": "অন্তর্বৃত্ত ত্রিভুজের ভেতরে থাকে আর তিনটি বাহুকেই স্পর্শ করে; পরিবৃত্ত তিনটি শীর্ষবিন্দুর মধ্য দিয়ে যায় আর ত্রিভুজকে ঘিরে থাকে। এদের ব্যাসার্ধ ভিন্ন পরিমাপ, কখনো বদলে নেওয়া যাবে না। সমকোণী ত্রিভুজের জন্য পরিব্যাসার্ধের নিজস্ব সরল নিয়ম আছে, [[[\\boxed{R=\\frac{c}{2}}]]], কারণ অতিভুজ পরিবৃত্তের ব্যাস: অতিভুজের মধ্যবিন্দুই পরিকেন্দ্র। অন্তর্ব্যাসার্ধ [[r]] দুটোর ছোটটা আর ভেতরের বৃত্তের।" }
        ],
        "imgAlt": "অন্তর্বৃত্তসহ সমকোণী ত্রিভুজ ABC: অন্তঃকেন্দ্র I, তিনটি স্পর্শবিন্দু, দৈর্ঘ্য r-এর লম্ব ব্যাসার্ধ",
        "figcaption": "অন্তর্বৃত্তসহ ত্রিভুজ ABC: তিনটি লম্ব ব্যাসার্ধ, প্রতিটির দৈর্ঘ্য r।"
      },
      "sec-semiperimeter": {
        "h2": "ত্রিভুজের অর্ধপরিসীমা বোঝা",
        "blocks": [
          { "kind": "p", "text": "অর্ধপরিসীমাকে নিছক অর্ধেক মাপ মনে হলেও এটি ক্ষেত্রফল নির্ণয়ের বেশিরভাগ ভার বহন করে। জ্যামিতি কেন পূর্ণ পরিসীমার অর্ধেককেই বারবার ধরে, তা বুঝলে প্রমাণের মাঠ তৈরি হয়।" },
          { "kind": "h3", "text": "অর্ধপরিসীমার সংজ্ঞা" },
          { "kind": "p", "text": "অর্ধপরিসীমা হলো মোট পরিসীমার ঠিক অর্ধেক: [[[\\boxed{s=\\frac{P}{2}}]]]। ত্রিভুজের জন্য এটি দাঁড়ায় [[[\\boxed{s=\\frac{a+b+c}{2}}]]]। পরিসীমা [[P]] হলো পূর্ণ সীমানার দৈর্ঘ্য, তিনটি বাহুর যোগফল; অর্ধপরিসীমা সেই যোগফলের অর্ধেক। দুটো [[P=2s]] দিয়ে সম্পর্কিত, আর এদের গুলিয়ে ফেলা এই পৃষ্ঠার সবচেয়ে দামি ইনপুট ভুল।" },
          { "kind": "h3", "text": "অর্ধপরিসীমা কীভাবে নির্ণয় করবেন" },
          { "kind": "p", "text": "ধরুন [[a=3]], [[b=4]], [[c=5]]। প্রথমে তিনটি বাহু যোগ করুন, তারপর একবার ভাগ করুন: [[s=\\frac{3+4+5}{2}]], [[[\\boxed{s=6}]]]। যোগ ভাগের আগে আসতে হবে, কারণ অর্ধপরিসীমা পুরো সীমানাকে অর্ধেক করে, প্রতিটি বাহুকে আলাদা করে নয়। ভাগের পর যোগ করলেও এখানে একই সংখ্যা পাওয়া যেত, কিন্তু সূত্র [[s=\\frac{a+b+c}{2}]] সঠিক ক্রম বলে: সীমানা যোগ করুন, তারপর অর্ধেক করুন।" },
          { "kind": "h3", "text": "পূর্ণ পরিসীমার বদলে অর্ধপরিসীমা কেন ব্যবহার করা হয়?" },
          { "kind": "p", "text": "ত্রিভুজের ক্ষেত্রফল সূত্র বারবার অর্ধেক তৈরি করে: প্রমাণের প্রতিটি ছোট ত্রিভুজ দুই দিয়ে ভাগ অবদান রাখে, আর অর্ধপরিসীমা একবারে সবগুলো শোষণ করে। এটি হেরনের সূত্রের, অন্তর্ব্যাসার্ধ সম্পর্ক [[r=\\frac{K}{s}]]-এর এবং পরের প্রমাণের স্বাভাবিক চলক। পূর্ণ পরিসীমা বসালে ফলাফল দ্বিগুণ হতো, কারণ [[K=r\\times P=2rs]] সত্যিকারের ক্ষেত্রফলের দ্বিগুণ। ক্যালকুলেটর [[P]] নয়, [[s]] চায় ঠিক এ কারণেই, যাতে গুণে আর কোনো সমন্বয় না লাগে।" },
          { "kind": "h3", "text": "অর্ধপরিসীমা কি দীর্ঘতম বাহুর চেয়ে ছোট হতে পারে?" },
          { "kind": "p", "text": "না। ত্রিভুজ অসমতা দাবি করে [[a+b>c]]: দুটি ছোট বাহু মিলে দীর্ঘতম বাহুকে ছাড়িয়ে যেতে হবে, নয়তো ত্রিভুজ বন্ধ হবে না। দুই দিকে [[c]] যোগ করলে [[a+b+c>2c]] পাওয়া যায়, আর অর্ধেক করলে [[\\frac{a+b+c}{2}>c]], যা হলো [[s>c]]। বৈধ ত্রিভুজে অর্ধপরিসীমা সবসময় দীর্ঘতম বাহুকে ছাড়ায়। কোনো রিপোর্ট করা অর্ধপরিসীমা অতিভুজের চেয়ে ছোট হলে, ইনপুটগুলো বাস্তব ত্রিভুজ বর্ণনা করতে পারে না।" }
        ]
      },
      "sec-formula": {
        "h2": "ত্রিভুজের ক্ষেত্রফল কেন অন্তর্ব্যাসার্ধ গুণ অর্ধপরিসীমার সমান?",
        "blocks": [
          { "kind": "p", "text": "সাধারণ নিয়ম দিয়ে শুরু করুন [[K=\\frac{\\text{base}\\times\\text{height}}{2}]]। অন্তঃকেন্দ্র [[I]]-কে তিনটি শীর্ষবিন্দুর সঙ্গে যোগ করুন। ত্রিভুজটি তিনটি ছোট ত্রিভুজে ভাগ হয়, প্রতিটি একটি মূল বাহুকে ভূমি আর অন্তর্ব্যাসার্ধকে লম্ব উচ্চতা হিসেবে ব্যবহার করে। এই অংশের বাকিটা প্রতিটি খণ্ড হিসাব করে যোগ করে, যাতে [[K=r\\times s]] শুধু মুখস্থ না হয়, দেখাও হয়।" },
          { "kind": "h3", "text": "প্রথম ছোট ত্রিভুজের ক্ষেত্রফল" },
          { "kind": "p", "text": "বাহু [[a]]-এর ওপর তৈরি ত্রিভুজের ভূমি [[a]] ও উচ্চতা [[r]], কারণ ব্যাসার্ধ বাহু [[a]]-কে তার স্পর্শবিন্দুতে লম্বভাবে ছোঁয়। তাই এর ক্ষেত্রফল [[K_1=\\frac{ar}{2}]]। সমকোণ নিয়ে এখনো কিছু ব্যবহার করা হয়নি; এই ধাপ যেকোনো ত্রিভুজের বাহুর জন্যই খাটে।" },
          { "kind": "h3", "text": "দ্বিতীয় ছোট ত্রিভুজের ক্ষেত্রফল" },
          { "kind": "p", "text": "বাহু [[b]]-এর ওপর তৈরি ত্রিভুজ একই ধাঁচ মানে: ভূমি [[b]], লম্ব উচ্চতা [[r]], ক্ষেত্রফল [[K_2=\\frac{br}{2}]]। উচ্চতা আবার সেই একই সংখ্যা [[r]], কারণ অন্তঃকেন্দ্র প্রতিটি বাহু থেকে সমদূরবর্তী। এই ভাগ করা উচ্চতাই পুরো প্রমাণের চাবি।" },
          { "kind": "h3", "text": "তৃতীয় ছোট ত্রিভুজের ক্ষেত্রফল" },
          { "kind": "p", "text": "বাহু [[c]]-এর ওপর তৈরি ত্রিভুজ সেট পূর্ণ করে: [[K_3=\\frac{cr}{2}]]। তিনটি ছোট ত্রিভুজ মূল ত্রিভুজটিকে হুবহু টাইল করে, কোনো ওভারল্যাপ ছাড়া, কোনো ফাঁক ছাড়া: মূলের প্রতিটি বিন্দু একটাতে থাকে, কারণ অন্তঃকেন্দ্র থেকে শীর্ষবিন্দু পর্যন্ত খণ্ডগুলো অভ্যন্তরকে ভাগ করে।" },
          { "kind": "h3", "text": "তিনটি ক্ষেত্রফল যোগ করা" },
          { "kind": "p", "text": "খণ্ডগুলো যোগ করুন: [[K=K_1+K_2+K_3]]। বসালে পাওয়া যায় [[K=\\frac{ar}{2}+\\frac{br}{2}+\\frac{cr}{2}]]। যোগফল থেকে [[r]] বাইরে নিন: [[K=\\frac{r(a+b+c)}{2}]]। মনে রাখুন [[s=\\frac{a+b+c}{2}]], তাই বন্ধনীর ভগ্নাংশটাই ঠিক অর্ধপরিসীমা, আর [[[\\boxed{K=r\\times s}]]]। তিনটি ছোট ত্রিভুজের প্রতিটি অর্ধেক অর্ধপরিসীমার মধ্যে শোষিত হয়েছে, এ কারণেই চূড়ান্ত গুণে আর কোনো ভাগ লাগে না।" },
          { "kind": "h3", "text": "এই সূত্র প্রতিটি ত্রিভুজের জন্য কাজ করে কেন?" },
          { "kind": "p", "text": "প্রতিটি অ-ক্ষীণ ত্রিভুজের অন্তর্বৃত্ত ও অন্তঃকেন্দ্র থাকে, আর তিনটি বাহু পর্যন্ত অন্তঃকেন্দ্রের লম্ব দূরত্ব একই সংখ্যা [[r]]। তিন-ত্রিভুজ বিশ্লেষণ আর কিছুই ব্যবহার করে না: কোনো সমকোণ নয়, কোনো বিশেষ বাহুর দৈর্ঘ্য নয়, কোনো বিশেষ আকৃতি নয়। ত্রিভুজ সমকোণী, সূক্ষ্মকোণী বা স্থূলকোণী যাই হোক, অন্তঃকেন্দ্র শীর্ষবিন্দুগুলোর সঙ্গে যুক্ত হয় আর একই বীজগণিত [[K=r\\times s]]-এ পৌঁছায়। সূত্রটি সাধারণভাবে ত্রিভুজের ধর্ম, এ কারণেই জ্যামিতির বই একবার প্রমাণ করে সর্বত্র ব্যবহার করে।" },
          { "kind": "h3", "text": "এই সূত্র সমকোণী ত্রিভুজের জন্য বিশেষভাবে দরকারি কেন?" },
          { "kind": "p", "text": "অভেদ একই থাকে, কিন্তু অন্তর্ব্যাসার্ধ সহজ হয়ে যায়। সাধারণ ত্রিভুজে অন্তর্ব্যাসার্ধ সাধারণত ক্ষেত্রফল থেকেই বের করা হয় [[r=\\frac{K}{s}]] দিয়ে, যা ক্ষেত্রফলই লক্ষ্য হলে চক্রাকার। সমকোণী ত্রিভুজ এই চক্র থেকে বেরিয়ে আসে: এর অন্তর্ব্যাসার্ধ বাহু থেকে সরাসরি পাওয়া যায় [[r=\\frac{a+b-c}{2}]] দিয়ে, যা পরের অংশে উৎপন্ন। এ কারণে [[K=r\\times s]] সমকোণী ত্রিভুজের জন্য সত্যিকারের কর্মপদ্ধতি, পুনর্বিন্যস্ত সংজ্ঞা নয়।" }
        ],
        "imgAlt": "অন্তঃকেন্দ্র I থেকে উচ্চতা r-এর তিনটি ছোট ত্রিভুজে বিভক্ত ত্রিভুজ, প্রমাণ করে K = r গুণ s",
        "figcaption": "তিনটি ছোট ত্রিভুজ উচ্চতা r ভাগ করে নেয়; তাদের ক্ষেত্রফল যোগ হয়ে r গুণ s হয়।"
      },
      "sec-inradius": {
        "h2": "সমকোণী ত্রিভুজের অন্তর্ব্যাসার্ধ কীভাবে বের করবেন",
        "blocks": [
          { "kind": "p", "text": "পাদ [[a]] ও [[b]] এবং অতিভুজ [[c]] বিশিষ্ট সমকোণী ত্রিভুজের জন্য অন্তর্ব্যাসার্ধ [[[\\boxed{r=\\frac{a+b-c}{2}}]]]। এই সংক্ষিপ্ত পদ্ধতি সমকোণী ত্রিভুজের জন্য নির্দিষ্ট। নিচের প্রমাণ বৃত্তের স্পর্শক-খণ্ড ধর্ম ছাড়া আর কিছুই ব্যবহার করে না, আর সমাধান-করা উদাহরণগুলো তা কাজে দেখায়।" },
          { "kind": "h3", "text": "অন্তর্ব্যাসার্ধের সূত্র কাজ করে কেন?" },
          { "kind": "p", "text": "একই বাহ্যিক বিন্দু থেকে বৃত্তে টানা স্পর্শক খণ্ডগুলোর দৈর্ঘ্য সমান হয়। অন্তর্বৃত্ত দুটি পাদকেই স্পর্শ করে, আর সেই স্পর্শবিন্দু পর্যন্ত দুটি ব্যাসার্ধ বাহুগুলোকে সমকোণে ছোঁয়। শীর্ষবিন্দুর সমকোণের সঙ্গে মিলে কোনাঞ্চলটি বাহু [[r]]-এর বর্গ গঠন করে, তাই সমকোণের শীর্ষবিন্দু থেকে পাদ দুটির স্পর্শবিন্দু পর্যন্ত দূরত্ব প্রতিটি [[r]]। পাদ a-তে বাকি স্পর্শক খণ্ডকে [[x]] আর পাদ b-তে বাকিটাকে [[y]] বলুন। প্রতিটি সূক্ষ্ম শীর্ষবিন্দু থেকে দুটি স্পর্শক খণ্ড সমান, তাই অতিভুজ একই [[x]] ও [[y]]-তে ভাগ হয়। অতএব [[a=r+x]], [[b=r+y]] ও [[c=x+y]]। প্রথম দুটি সমীকরণ যোগ করুন: [[a+b=2r+x+y]]। যেহেতু [[x+y=c]], এটি দাঁড়ায় [[a+b=2r+c]], আর সাজিয়ে পাওয়া যায় [[[\\boxed{r=\\frac{a+b-c}{2}}]]]।" },
          { "kind": "h3", "text": "সমাধান-করা উদাহরণ: 3-4-5 ত্রিভুজ" },
          { "kind": "p", "text": "দেওয়া আছে [[a=3]], [[b=4]], [[c=5]]: সংক্ষিপ্ত সূত্রে বসান, [[r=\\frac{3+4-5}{2}]], [[r=\\frac{2}{2}]], [[[\\boxed{r=1}]]]। 3-4-5 ত্রিভুজের অন্তর্বৃত্তের ব্যাসার্ধ 1, যা ভূমিকার উদাহরণের সঙ্গে মেলে যেখানে [[r=1]] ও [[s=6]] দিয়ে [[K=6]] পাওয়া গিয়েছিল।" },
          { "kind": "h3", "text": "সমাধান-করা উদাহরণ: 5-12-13 ত্রিভুজ" },
          { "kind": "p", "text": "দেওয়া আছে [[a=5]], [[b=12]], [[c=13]]: তাহলে [[r=\\frac{5+12-13}{2}]], [[r=\\frac{4}{2}]], [[[\\boxed{r=2}]]]। [[s=\\frac{5+12+13}{2}=15]]-এর সঙ্গে জুড়ে ক্ষেত্রফল আসে [[K=2\\times15=30]] হিসেবে, যা পাদের সূত্র [[K=\\frac{5\\times12}{2}=30]] দিয়ে নিশ্চিত হয়।" },
          { "kind": "h3", "text": "অন্তর্ব্যাসার্ধের একটি বিকল্প সূত্র" },
          { "kind": "p", "text": "সংক্ষিপ্ত সূত্রটিকে [[[\\boxed{r=\\frac{ab}{a+b+c}}]]] হিসেবেও লেখা যায়। এটি দ্বিতীয়, সম্পর্কহীন সূত্র নয়। [[K=rs]] ও [[K=\\frac{ab}{2}]] থেকে শুরু করুন, তাই [[rs=\\frac{ab}{2}]]। যেহেতু [[s=\\frac{a+b+c}{2}]], বসালে পাওয়া যায় [[r\\frac{a+b+c}{2}=\\frac{ab}{2}]], আর অর্ধেকগুলো কেটে থাকে [[r=\\frac{ab}{a+b+c}]]। এটিকে [[r=\\frac{a+b-c}{2}]]-এর সঙ্গে মিলতে হবে: 3-4-5 দিয়ে যাচাই করুন, [[\\frac{3\\times4}{3+4+5}=\\frac{12}{12}=1]], একই ব্যাসার্ধ। বীজগণিতে, সমকোণী ত্রিভুজের জন্য [[(a+b-c)(a+b+c)=(a+b)^2-c^2=2ab]], তাই দুটি রূপ অভিন্ন।" },
          { "kind": "h3", "text": "এই অন্তর্ব্যাসার্ধের সংক্ষিপ্ত পদ্ধতি প্রতিটি ত্রিভুজে কাজ করে?" },
          { "kind": "p", "text": "না। উৎপত্তি সমকোণের ওপর নির্ভর করেছিল: বাহু [[r]]-এর কোনা-বর্গ তখনই থাকে যখন দুটি পাদ 90 ডিগ্রিতে মিলিত হয়। সাধারণ ত্রিভুজের জন্য অন্তর্ব্যাসার্ধ আসতে হবে [[[\\boxed{r=\\frac{K}{s}}]]] থেকে বা জানা মাপের সঙ্গে মানানসই সূত্র থেকে, যেমন [[r=(s-a)\\tan\\frac{A}{2}]]। সমকোণী নয় এমন ত্রিভুজে [[r=\\frac{a+b-c}{2}]] প্রয়োগ করলে এমন সংখ্যা হিসাব হয় যার কোনো জ্যামিতিক অর্থ নেই।" }
        ],
        "imgAlt": "স্পর্শক খণ্ড x ও y অন্তর্ব্যাসার্ধের সূত্র r = (a + b - c) / 2 উৎপন্ন করে",
        "figcaption": "সমান স্পর্শক খণ্ডগুলো দেয় a = r + x, b = r + y, c = x + y।"
      },
      "sec-howto": {
        "h2": "অর্ধপরিসীমা থেকে সমকোণী ত্রিভুজ ক্ষেত্রফল ক্যালকুলেটর কীভাবে ব্যবহার করবেন",
        "blocks": [
          { "kind": "p", "text": "ক্যালকুলেটরের ঠিক দুটি ইনপুট দরকার, ক্রমানুসারে দেওয়া। নিচের ধাপগুলো পর্দার লেআউট মেনে চলে, মাপ চিহ্নিত করা থেকে যাচাইকৃত ফলাফল পর্যন্ত।" },
          { "kind": "p", "text": "ক্যালকুলেটরের ঠিক দুটি ইনপুট আছে, অন্তর্ব্যাসার্ধ [[r]] ও অর্ধপরিসীমা [[s]]। এটি তিনটি বাহু, পাদ, অতিভুজ বা কোণ নেয় না। [[K=r\\times s]] গুণ যেমন দেখানো হয়েছে তেমনই সম্পূর্ণ; ফলাফলকে আর কখনো দুই দিয়ে ভাগ করা যাবে না।" }
        ],
        "steps": [
          "<strong>সমকোণী ত্রিভুজের অন্তর্ব্যাসার্ধ নির্ধারণ করুন।</strong> এটি ত্রিভুজের ভেতরে অঙ্কিত বৃত্তের ব্যাসার্ধ। তিনটি বাহু জানা থাকলে এটি [[r=\\frac{a+b-c}{2}]] দিয়ে হিসাব করুন।",
          "<strong>এর অর্ধপরিসীমা নির্ধারণ করুন।</strong> তিনটি বাহু যোগ করে দুই দিয়ে ভাগ করুন: [[s=\\frac{a+b+c}{2}]]। এটি পূর্ণ পরিসীমার অর্ধেক, পরিসীমা নিজে নয়।",
          "<strong>নিশ্চিত হোন দুটি মানই একই ত্রিভুজের।</strong> এক ত্রিভুজের অন্তর্ব্যাসার্ধ আর অন্য ত্রিভুজের অর্ধপরিসীমা অর্থহীন গুণফল দেয়।",
          "<strong>প্রয়োজনে মাপগুলো সামঞ্জস্যপূর্ণ এককে রূপান্তর করুন।</strong> দুটি দৈর্ঘ্য একই একক ব্যবহার করবে: মিটারের সঙ্গে মিটার, সেন্টিমিটারের সঙ্গে সেন্টিমিটার, কখনো মিশ্রণ নয়।",
          "<strong>প্রথম ইনপুট ঘরে অন্তর্ব্যাসার্ধ r দিন।</strong> যেকোনো বৈধ ত্রিভুজে এটি দুটি মানের ছোটটা।",
          "<strong>দ্বিতীয় ইনপুট ঘরে অর্ধপরিসীমা s দিন।</strong> দুবার যাচাই করুন মানটি পরিসীমার অর্ধেক, পূর্ণ পরিসীমা নয়।",
          "<strong>Calculate Area-এ ক্লিক করুন।</strong> ক্যালকুলেটর দুটি ইনপুট সরাসরি গুণ করে।",
          "<strong>প্রদর্শিত ফলাফল পর্যালোচনা করুন।</strong> ক্ষেত্রফল পড়ুন আর নিশ্চিত হোন ত্রিভুজের আকারের জন্য তা যুক্তিসঙ্গত লাগছে।",
          "<strong>সূত্র ও বসানোর ধাপগুলো যাচাই করুন।</strong> এগুলো দেওয়া মান বসিয়ে [[K=r\\times s]] দেখায়।",
          "<strong>নিশ্চিত হোন ফলাফল বর্গ এককে প্রকাশ করা।</strong> দৈর্ঘ্যের একক গুণ করলে বর্গ একক পাওয়া যায়: m², cm², ft², ইনপুটের সঙ্গে মিলিয়ে।",
          "<strong>আরেকটি হিসাবের আগে Reset ব্যবহার করুন।</strong> এটি দুটি ঘরই মুছে নতুন শুরুর জন্য প্রস্তুত করে।"
        ]
      },
      "sec-examples": {
        "h2": "অন্তর্ব্যাসার্ধ ও অর্ধপরিসীমা ব্যবহারে সমকোণী ত্রিভুজ ক্ষেত্রফলের ধাপে ধাপে উদাহরণ",
        "blocks": [
          { "kind": "p", "text": "চারটি ক্লাসিক সমকোণী ত্রিভুজ পূর্ণ শৃঙ্খল দেখায়: বাহু থেকে অর্ধপরিসীমা, বাহু থেকে অন্তর্ব্যাসার্ধ, তারপর একটিমাত্র গুণ। এই উদাহরণগুলোতে r ও s বাহুর দৈর্ঘ্য থেকে উৎপন্ন; ক্যালকুলেটর নিজে r ও s সরাসরি নেয়।" },
          { "kind": "h3", "text": "উদাহরণ 1: 3-4-5 সমকোণী ত্রিভুজ" },
          { "kind": "p", "text": "দেওয়া আছে [[a=3]], [[b=4]], [[c=5]]। ধাপ 1: অর্ধপরিসীমা হিসাব করুন, [[s=\\frac{3+4+5}{2}]], [[s=6]]। ধাপ 2: অন্তর্ব্যাসার্ধ হিসাব করুন, [[r=\\frac{3+4-5}{2}]], [[r=1]]। ধাপ 3: ক্ষেত্রফল হিসাব করুন, [[K=1\\times6]], [[[\\boxed{K=6\\text{ square units}}]]]। পাদের সূত্র দিয়ে যাচাই করুন: [[K=\\frac{3\\times4}{2}=6]]।" },
          { "kind": "h3", "text": "উদাহরণ 2: 5-12-13 সমকোণী ত্রিভুজ" },
          { "kind": "p", "text": "দেওয়া আছে [[a=5]], [[b=12]], [[c=13]]। অর্ধপরিসীমা: [[s=\\frac{5+12+13}{2}=15]]। অন্তর্ব্যাসার্ধ: [[r=\\frac{5+12-13}{2}=2]]। ক্ষেত্রফল: [[K=2\\times15]], [[[\\boxed{K=30\\text{ square units}}]]]। যাচাই: [[K=\\frac{5\\times12}{2}=30]]।" },
          { "kind": "h3", "text": "উদাহরণ 3: 8-15-17 সমকোণী ত্রিভুজ" },
          { "kind": "p", "text": "দেওয়া আছে [[a=8]], [[b=15]], [[c=17]]। অর্ধপরিসীমা: [[s=\\frac{8+15+17}{2}=20]]। অন্তর্ব্যাসার্ধ: [[r=\\frac{8+15-17}{2}=3]]। ক্ষেত্রফল: [[K=3\\times20]], [[[\\boxed{K=60\\text{ square units}}]]]। যাচাই: [[K=\\frac{8\\times15}{2}=60]]।" },
          { "kind": "h3", "text": "উদাহরণ 4: 7-24-25 সমকোণী ত্রিভুজ" },
          { "kind": "p", "text": "দেওয়া আছে [[a=7]], [[b=24]], [[c=25]]। অর্ধপরিসীমা: [[s=\\frac{7+24+25}{2}=28]]। অন্তর্ব্যাসার্ধ: [[r=\\frac{7+24-25}{2}=3]]। ক্ষেত্রফল: [[K=3\\times28]], [[[\\boxed{K=84\\text{ square units}}]]]। যাচাই: [[K=\\frac{7\\times24}{2}=84]]।" },
          { "kind": "h3", "text": "সমাধান-করা উদাহরণগুলোর তুলনা" }
        ],
        "table": {
          "headers": ["<tr>\n          <th class=\"border-gray-600 px-4 py-2 text-left\">ত্রিভুজ", "পাদ a", "পাদ b", "অতিভুজ c", "অন্তর্ব্যাসার্ধ r", "অর্ধপরিসীমা s", "ক্ষেত্রফল K"],
          "rows": [
            ["3-4-5", "3", "4", "5", "1", "6", "6"],
            ["5-12-13", "5", "12", "13", "2", "15", "30"],
            ["8-15-17", "8", "15", "17", "3", "20", "60"],
            ["7-24-25", "7", "24", "25", "3", "28", "84"]
          ]
        }
      },
      "sec-practical": {
        "h2": "অন্তর্ব্যাসার্ধ ও অর্ধপরিসীমা থেকে সমকোণী ত্রিভুজ ক্ষেত্রফলের বাস্তব প্রয়োগ",
        "blocks": [
          { "kind": "p", "text": "বারোটি সমাধান-করা পরিস্থিতি পৃষ্ঠার সূত্রটিকে কর্মশালা, সাইট ও স্টুডিওতে নিয়ে যায়। প্রতিটি সমকোণী ত্রিভুজাকার প্যানেল, অংশ, প্রোফাইল বা সরলীকৃত মডেলের নাম দেয়, অন্তর্ব্যাসার্ধ ও অর্ধপরিসীমা সূত্রের মধ্যে দিয়ে কাজ করে, আর সংখ্যার পেছনের ধারণা জানায়। এগুলো সরলীকৃত সমকোণী ত্রিভুজ মডেল: প্রতিটি বাস্তব জানালা, ছাদ, বাগান, র্যাম্প, পাল বা জমির খণ্ড খাঁটি সমকোণী ত্রিভুজ গঠন করে না, আর সূত্র প্রয়োগের আগে অনিয়মিত বস্তুকে সরল আকৃতিতে ভাগ করতে হবে। ক্ষেত্রফল শুধু সমতল জ্যামিতিক পৃষ্ঠ বর্ণনা করে; এটি নিজে কখনো কাঠামোগত শক্তি, ভারবহন ক্ষমতা বা নির্মাণ নিরাপত্তা প্রতিষ্ঠা করে না।" },
          { "kind": "h3", "text": "উদাহরণ 1: ত্রিভুজাকার কাচের জানালা" },
          { "kind": "p", "text": "একটি ত্রিভুজাকার কাচের জানালার বাহু [[a=3\\text{ m}]], [[b=4\\text{ m}]], [[c=5\\text{ m}]]। অর্ধপরিসীমা: [[s=\\frac{3+4+5}{2}=6\\text{ m}]]। অন্তর্ব্যাসার্ধ: [[r=\\frac{3+4-5}{2}=1\\text{ m}]]। ক্ষেত্রফল: [[K=1\\times6]], [[[\\boxed{K=6\\text{ m}^2}]]]। ফলাফল ফ্রেমের ছাড় বাদ দেওয়ার আগে সমতল ত্রিভুজাকার কাচের পৃষ্ঠ বোঝায়। ধারণা: প্যানেলটি সত্যিকারের সমকোণী ত্রিভুজ; ফ্রেমের মাত্রা আলাদাভাবে সামলানো হয়।" },
          { "kind": "h3", "text": "উদাহরণ 2: ইস্পাতের সাপোর্ট ব্র্যাকেট" },
          { "kind": "p", "text": "একটি ত্রিভুজাকার ইস্পাত সাপোর্ট প্লেটের বাহু [[a=5\\text{ cm}]], [[b=12\\text{ cm}]], [[c=13\\text{ cm}]]। অর্ধপরিসীমা: [[s=\\frac{5+12+13}{2}=15\\text{ cm}]]। অন্তর্ব্যাসার্ধ: [[r=\\frac{5+12-13}{2}=2\\text{ cm}]]। ক্ষেত্রফল: [[K=2\\times15]], [[[\\boxed{K=30\\text{ cm}^2}]]]। এটি সমতল প্লেটের ক্ষেত্রফল, এর কাঠামোগত শক্তি প্রতিষ্ঠা করে না। ধারণা: ব্র্যাকেট ব্ল্যাঙ্ক সমকোণী ত্রিভুজ হিসেবে কাটা; বোল্টের ছিদ্র ও বাঁক বাদ।" },
          { "kind": "h3", "text": "উদাহরণ 3: ছাদের সাপোর্ট অংশ" },
          { "kind": "p", "text": "একটি সমকোণী ত্রিভুজাকার ছাদের সাপোর্ট অংশের বাহু [[a=8\\text{ ft}]], [[b=15\\text{ ft}]], [[c=17\\text{ ft}]]। অর্ধপরিসীমা: [[s=\\frac{8+15+17}{2}=20\\text{ ft}]]। অন্তর্ব্যাসার্ধ: [[r=\\frac{8+15-17}{2}=3\\text{ ft}]]। ক্ষেত্রফল: [[K=3\\times20]], [[[\\boxed{K=60\\text{ ft}^2}]]]। সূত্রটি সমতল ত্রিভুজাকার সাপোর্ট অংশ মাপে, মালামালের অনুমানে কাজে লাগে। ধারণা: অংশটি সমকোণী ত্রিভুজ হিসেবে মডেল করা; পুরো ছাদের জ্যামিতি ভিন্ন হতে পারে।" },
          { "kind": "h3", "text": "উদাহরণ 4: ত্রিভুজাকার বাগানের অংশ" },
          { "kind": "p", "text": "একটি সরলীকৃত সমকোণী ত্রিভুজাকার বাগান অংশের বাহু [[a=7\\text{ m}]], [[b=24\\text{ m}]], [[c=25\\text{ m}]]। অর্ধপরিসীমা: [[s=28\\text{ m}]]। অন্তর্ব্যাসার্ধ: [[r=3\\text{ m}]]। ক্ষেত্রফল: [[K=3\\times28]], [[[\\boxed{K=84\\text{ m}^2}]]]। ক্ষেত্রফল ত্রিভুজাকার ল্যান্ডস্কেপিং অংশ অনুমানে সাহায্য করে, যেমন টার্ফ বা মালচ অর্ডার করার সময়। ধারণা: বেডের সীমানা সোজা আর সমকোণে মিলিত হয়।" },
          { "kind": "h3", "text": "উদাহরণ 5: ত্রিভুজাকার র্যাম্প প্রোফাইল" },
          { "kind": "p", "text": "একটি সরলীকৃত র্যাম্পের পার্শ্ব প্রোফাইলের বাহু [[a=9\\text{ m}]], [[b=12\\text{ m}]], [[c=15\\text{ m}]]। অর্ধপরিসীমা: [[s=\\frac{9+12+15}{2}=18\\text{ m}]]। অন্তর্ব্যাসার্ধ: [[r=\\frac{9+12-15}{2}=3\\text{ m}]]। ক্ষেত্রফল: [[K=3\\times18]], [[[\\boxed{K=54\\text{ m}^2}]]]। এটি ত্রিভুজাকার পার্শ্ব প্রোফাইল মাপে, ঢালু চলাচলের পৃষ্ঠ নয়। ধারণা: প্রোফাইলটি ভিত্তিতে বর্গ কোনা দিয়ে মডেল করা।" },
          { "kind": "h3", "text": "উদাহরণ 6: প্লাইউড কাটিং টেমপ্লেট" },
          { "kind": "p", "text": "একটি সমকোণী ত্রিভুজাকার প্লাইউড টেমপ্লেটের বাহু [[a=12\\text{ cm}]], [[b=16\\text{ cm}]], [[c=20\\text{ cm}]]। অর্ধপরিসীমা: [[s=24\\text{ cm}]]। অন্তর্ব্যাসার্ধ: [[r=4\\text{ cm}]]। ক্ষেত্রফল: [[K=4\\times24]], [[[\\boxed{K=96\\text{ cm}^2}]]]। হিসাব কাটিং অপচয়ের আগে সমতল মালামালের ক্ষেত্রফল অনুমান করে। ধারণা: টেমপ্লেটটি সত্যিকারের সমকোণী ত্রিভুজ; করাতের প্রস্থ ও অফকাট অতিরিক্ত।" },
          { "kind": "h3", "text": "উদাহরণ 7: ত্রিভুজাকার সাইন প্যানেল" },
          { "kind": "p", "text": "একটি ত্রিভুজাকার সাইন প্যানেলের বাহু [[a=20\\text{ cm}]], [[b=21\\text{ cm}]], [[c=29\\text{ cm}]]। অর্ধপরিসীমা: [[s=\\frac{20+21+29}{2}=35\\text{ cm}]]। অন্তর্ব্যাসার্ধ: [[r=\\frac{20+21-29}{2}=6\\text{ cm}]]। ক্ষেত্রফল: [[K=6\\times35]], [[[\\boxed{K=210\\text{ cm}^2}]]]। এটি প্যানেলের সমতল ছাপার পৃষ্ঠ বোঝায়। ধারণা: প্যানেলের মুখ সমতল ও সমকোণী ত্রিভুজাকার; মাউন্টিং হার্ডওয়্যার বাদ।" },
          { "kind": "h3", "text": "উদাহরণ 8: জরিপ অংশ" },
          { "kind": "p", "text": "একটি সরলীকৃত সমকোণী ত্রিভুজাকার জমির অংশের বাহু [[a=9\\text{ m}]], [[b=40\\text{ m}]], [[c=41\\text{ m}]]। অর্ধপরিসীমা: [[s=45\\text{ m}]]। অন্তর্ব্যাসার্ধ: [[r=4\\text{ m}]]। ক্ষেত্রফল: [[K=4\\times45]], [[[\\boxed{K=180\\text{ m}^2}]]]। সূত্রটি জরিপকৃত ত্রিভুজাকার অংশের ক্ষেত্রফল হিসাব করে। ধারণা: অংশটি বর্গ কোনা দিয়ে মডেল করা; অনিয়মিত প্লটকে সরল আকৃতিতে ভাগ করতে হবে।" },
          { "kind": "h3", "text": "উদাহরণ 9: ত্রিভুজাকার কাপড়ের পাল" },
          { "kind": "p", "text": "একটি সমকোণী ত্রিভুজাকার কাপড়ের প্যানেলের বাহু [[a=15\\text{ ft}]], [[b=20\\text{ ft}]], [[c=25\\text{ ft}]]। অর্ধপরিসীমা: [[s=30\\text{ ft}]]। অন্তর্ব্যাসার্ধ: [[r=5\\text{ ft}]]। ক্ষেত্রফল: [[K=5\\times30]], [[[\\boxed{K=150\\text{ ft}^2}]]]। ফলাফলে সেলাই, হেম ও মালামালের ছাড় বাদ। ধারণা: পালটি সমতল মডেল করা; বাস্তব পাল ভারের নিচে বাঁকে।" },
          { "kind": "h3", "text": "উদাহরণ 10: শিল্প সাপোর্ট প্যানেল" },
          { "kind": "p", "text": "একটি সমকোণী ত্রিভুজাকার শিল্প প্যানেলের বাহু [[a=11\\text{ m}]], [[b=60\\text{ m}]], [[c=61\\text{ m}]]। অর্ধপরিসীমা: [[s=66\\text{ m}]]। অন্তর্ব্যাসার্ধ: [[r=5\\text{ m}]]। ক্ষেত্রফল: [[K=5\\times66]], [[[\\boxed{K=330\\text{ m}^2}]]]। ফলাফল সমতল জ্যামিতিক প্যানেল বর্ণনা করে, এর কাঠামোগত কার্যকারিতা নয়। ধারণা: প্যানেলটি সমকোণী ত্রিভুজ হিসেবে মডেল করা; পুরুত্ব ও ফিক্সিং আলাদা বিষয়।" },
          { "kind": "h3", "text": "উদাহরণ 11: গুদামের ছাদ-প্রান্ত অংশ" },
          { "kind": "p", "text": "একটি সরলীকৃত গুদামের ছাদ-প্রান্ত অংশের বাহু [[a=13\\text{ ft}]], [[b=84\\text{ ft}]], [[c=85\\text{ ft}]]। অর্ধপরিসীমা: [[s=91\\text{ ft}]]। অন্তর্ব্যাসার্ধ: [[r=6\\text{ ft}]]। ক্ষেত্রফল: [[K=6\\times91]], [[[\\boxed{K=546\\text{ ft}^2}]]]। ফলাফল ত্রিভুজাকার প্রান্ত অংশ অনুমান করে, যেমন ক্ল্যাডিংয়ের দাম ধরার সময়। ধারণা: গেবল প্রান্তটি সমকোণী ত্রিভুজ হিসেবে মডেল করা।" },
          { "kind": "h3", "text": "উদাহরণ 12: বড় ফ্যাব্রিকেশন প্যানেল" },
          { "kind": "p", "text": "একটি সমকোণী ত্রিভুজাকার ফ্যাব্রিকেশন প্যানেলের বাহু [[a=28\\text{ cm}]], [[b=45\\text{ cm}]], [[c=53\\text{ cm}]]। অর্ধপরিসীমা: [[s=\\frac{28+45+53}{2}=63\\text{ cm}]]। অন্তর্ব্যাসার্ধ: [[r=\\frac{28+45-53}{2}=10\\text{ cm}]]। ক্ষেত্রফল: [[K=10\\times63]], [[[\\boxed{K=630\\text{ cm}^2}]]]। এই পদ্ধতি প্যানেলের সমতল ত্রিভুজাকার ক্ষেত্রফল সরাসরি এর বৃত্ত ও সীমানার মাপ থেকে হিসাব করে। ধারণা: প্যানেলের প্রান্ত সোজা আর সমকোণে মিলিত হয়।" },
          { "kind": "h3", "text": "ব্যবহারিক উদাহরণগুলোর তুলনা" }
        ],
        "table": {
          "headers": ["<tr>\n          <th class=\"border-gray-600 px-4 py-2 text-left\">ব্যবহারিক প্রয়োগ", "পাদ a", "পাদ b", "অতিভুজ c", "অন্তর্ব্যাসার্ধ r", "অর্ধপরিসীমা s", "নির্ণীত ক্ষেত্রফল", "পরিমাপের একক"],
          "rows": [
            ["কাচের জানালা", "3", "4", "5", "1", "6", "6", "m²"],
            ["ইস্পাত ব্র্যাকেট", "5", "12", "13", "2", "15", "30", "cm²"],
            ["ছাদের সাপোর্ট", "8", "15", "17", "3", "20", "60", "ft²"],
            ["বাগানের অংশ", "7", "24", "25", "3", "28", "84", "m²"],
            ["র্যাম্প প্রোফাইল", "9", "12", "15", "3", "18", "54", "m²"],
            ["প্লাইউড টেমপ্লেট", "12", "16", "20", "4", "24", "96", "cm²"],
            ["সাইন প্যানেল", "20", "21", "29", "6", "35", "210", "cm²"],
            ["জরিপ অংশ", "9", "40", "41", "4", "45", "180", "m²"],
            ["কাপড়ের পাল", "15", "20", "25", "5", "30", "150", "ft²"],
            ["শিল্প প্যানেল", "11", "60", "61", "5", "66", "330", "m²"],
            ["গুদামের ছাদপ্রান্ত", "13", "84", "85", "6", "91", "546", "ft²"],
            ["ফ্যাব্রিকেশন প্যানেল", "28", "45", "53", "10", "63", "630", "cm²"]
          ]
        }
      },
      "sec-legs-comparison": {
        "h2": "অন্তর্ব্যাসার্ধের সূত্র কেন পাদের সূত্রের সমান ক্ষেত্রফল দেয়?",
        "blocks": [
          { "kind": "p", "text": "দুটি ভিন্ন সূত্র, এক ত্রিভুজ, এক ক্ষেত্রফল। [[K=rs]] ও সমকোণী ত্রিভুজের মানক ক্ষেত্রফল [[K=\\frac{ab}{2}]] দিয়ে শুরু করুন, যা বাধ্য করে [[[\\boxed{rs=\\frac{ab}{2}}]]]। দুই দিকে ভিন্ন জ্যামিতিক তথ্য ব্যবহার করে একই আবদ্ধ পৃষ্ঠ মাপে: একটা অন্তর্বৃত্ত ও সীমানা পড়ে, অন্যটা দুটি লম্ব পাদ পড়ে।" },
          { "kind": "h3", "text": "3-4-5 ত্রিভুজ ব্যবহারে সংখ্যাগত তুলনা" },
          { "kind": "p", "text": "অন্তর্ব্যাসার্ধ পদ্ধতি: [[r=1]], [[s=6]], তাই [[K=1\\times6=6]]। পাদ পদ্ধতি: [[K=\\frac{3\\times4}{2}=6]]। উত্তর মিলে যায় কারণ অন্তর্ব্যাসার্ধ ও অর্ধপরিসীমা পাদের মতোই একই বাহুর তথ্য কোড করে: [[r=\\frac{a+b-c}{2}]] ও [[s=\\frac{a+b+c}{2}]] [[a]], [[b]] ও [[c]] থেকে তৈরি, তাই তাদের গুণফল পাদ যে ক্ষেত্রফল বর্ণনা করে তা পুনর্গঠন করতেই হবে। এখানকার মিল কাকতালীয় নয়; এটা বীজগণিত।" },
          { "kind": "h3", "text": "অন্তর্ব্যাসার্ধ পদ্ধতি কখন বেশি দরকারি?" },
          { "kind": "p", "text": "r ও s হাতে থাকলেই অন্তর্ব্যাসার্ধ পদ্ধতি জেতে। অন্তর্বৃত্ত নিয়ে জ্যামিতির সমস্যা সরাসরি অন্তর্ব্যাসার্ধ দিয়ে দেয়। যে প্রমাণে ক্ষেত্রফলকে বৃত্তের মাপে প্রকাশ করা দরকার তা স্বাভাবিকভাবেই [[K=rs]] ব্যবহার করে। প্রতিযোগিতার সমস্যা প্রায়ই সেটআপের অংশ হিসেবে অর্ধপরিসীমা দিয়ে দেয়। আর পারস্পরিক যাচাই হিসেবে, দুটি স্বতন্ত্র পদ্ধতিতে ক্ষেত্রফল হিসাব করলে এমন পাটিগণিতের ফসকানি ধরা পড়ে যা এক পদ্ধতি লুকিয়ে রাখত। প্রতিটি ক্ষেত্রে মূল বিষয় ইনপুটের সুবিধা: যে মাপ আছে তা দিয়ে শুরু করুন।" },
          { "kind": "h3", "text": "পাদের সূত্র কখন সরলতর?" },
          { "kind": "p", "text": "দুটি লম্ব পাদই আগে থেকে জানা থাকলে [[K=\\frac{ab}{2}]] সাধারণত সরাসরিতর: একটা গুণ, একটা অর্ধেক, মাঝে r বা s হিসাবের দরকার নেই। প্রথমে অন্তর্ব্যাসার্ধ ও অর্ধপরিসীমা উৎপন্ন করে তারপর গুণ করলে দুটি ধাপ বাড়ে যা কিছুই বদলায় না। অর্ধপরিসীমা পদ্ধতি সবসময় সহজতম পথ নয়; এটি সেরা পথ যখন অন্তর্বৃত্ত বা সীমানা স্বাভাবিক শুরু বিন্দু, আর ঘুরপথ যখন পাদ দুটো সামনেই বসে আছে।" }
        ]
      },
      "sec-heron": {
        "h2": "হেরনের সূত্র ও ক্ষেত্রফল = অন্তর্ব্যাসার্ধ × অর্ধপরিসীমার পার্থক্য কী?",
        "blocks": [
          { "kind": "p", "text": "হেরনের সূত্র তিনটি বাহুর দৈর্ঘ্য থেকে ক্ষেত্রফল হিসাব করে: [[[\\boxed{K=\\sqrt{s(s-a)(s-b)(s-c)}}]]]। এটির অর্ধপরিসীমা দরকার, অন্তর্ব্যাসার্ধ নয়, আর এটি যেকোনো বৈধ ত্রিভুজে কাজ করে। অন্তর্ব্যাসার্ধের সূত্র [[[\\boxed{K=rs}]]] তিনটি বাহুর বদলে অন্তর্ব্যাসার্ধ ও অর্ধপরিসীমা চায়। পার্থক্য ইনপুটের, জ্যামিতির নয়: দুটোই একই আবদ্ধ ক্ষেত্রফল ফেরত দেয়, কারণ দুটি সূত্র [[r=\\frac{K}{s}]] দিয়ে যুক্ত। তিনটি বাহু জানা থাকলে আর বৃত্তের তথ্য না থাকলে হেরনের সূত্র স্বাভাবিক পছন্দ; অন্তর্বৃত্ত চিত্রের অংশ হলে অন্তর্ব্যাসার্ধের সূত্র স্বাভাবিক।" },
          { "kind": "h3", "text": "সমাধান-করা তুলনা" },
          { "kind": "p", "text": "একটি 3-4-5 ত্রিভুজ নিন। হেরনের সূত্র: [[s=6]], [[K=\\sqrt{6(6-3)(6-4)(6-5)}]], [[K=\\sqrt{6\\times3\\times2\\times1}]], [[[\\boxed{K=6}]]]। অন্তর্ব্যাসার্ধের সূত্র: [[K=1\\times6]], [[[\\boxed{K=6}]]]। উত্তর মেলে কারণ হেরনের রাশি একই তিন-ত্রিভুজ বিশ্লেষণের মধ্য দিয়ে সরল হয়ে [[r\\times s]] হয়: [[s(s-a)(s-b)(s-c)]]-এর বর্গমূল [[rs]]-এর সমান যখনই r ও s একই ত্রিভুজ থেকে আসে। তবে দুটি যন্ত্র গুলিয়ে ফেলবেন না: হেরনের সূত্র কখনো অন্তর্ব্যাসার্ধ চায় না, আর অন্তর্ব্যাসার্ধের সংক্ষিপ্ত সূত্র [[r=\\frac{a+b-c}{2}]] শুধু সমকোণী ত্রিভুজের।" }
        ]
      },
      "sec-consistency": {
        "h2": "অন্তর্ব্যাসার্ধ ও অর্ধপরিসীমা বৈধ কি না, কীভাবে যাচাই করবেন",
        "blocks": [
          { "kind": "p", "text": "ক্যালকুলেটর দুটি মান নিয়ে গুণ করে, কিন্তু গুণফল সমকোণী ত্রিভুজের ক্ষেত্রফল হয় তখনই যখন দুটি মানই একই ত্রিভুজ বর্ণনা করে। নিচের যাচাইগুলো বৈধ ইনপুটকে নকল থেকে আলাদা করে।" },
          { "kind": "h3", "text": "মৌলিক ইনপুট শর্ত" },
          { "kind": "p", "text": "দুটি ইনপুটই ধনাত্মক হতে হবে: [[r>0]] ও [[s>0]]। দৈর্ঘ্য শূন্য বা ঋণাত্মক হতে পারে না, তাই অ-ধনাত্মক এন্ট্রির কোনো জ্যামিতিক অর্থ নেই। শূন্য ত্রিভুজকে ক্ষেত্রফলহীন রেখায় চাপাত; ঋণাত্মক মান কিছুই বর্ণনা করে না। এই পরীক্ষায় ব্যর্থ যেকোনো ইনপুট আবার মাপুন বা আবার উৎপন্ন করুন।" },
          { "kind": "h3", "text": "অর্ধপরিসীমা অন্তর্ব্যাসার্ধের চেয়ে বড় হতে হবে" },
          { "kind": "p", "text": "বৈধ ত্রিভুজে অর্ধপরিসীমা অন্তর্ব্যাসার্ধকে অনেক ছাড়িয়ে যায়। ধনাত্মক পাদসহ [[K=rs]] ও [[K=\\frac{ab}{2}]] থেকে, আর ত্রিভুজের ভেতরে অন্তর্বৃত্ত বসার জ্যামিতি থেকে, [[s]] সবসময় স্পষ্টতই [[r]]-এর চেয়ে বড়: 3-4-5 ত্রিভুজে 6 বনাম 1; 5-12-13-এ 15 বনাম 2। মানগুলোকে তিনটি বাহুর বৈধ সেটের সঙ্গেও মিলতে হবে, তাই এই তুলনা দ্রুত ছাঁকনি, পুরো বৈধতা নয়। অর্ধপরিসীমার চেয়ে বড় অন্তর্ব্যাসার্ধ কোনো ত্রিভুজ থেকে আসতে পারে না।" },
          { "kind": "h3", "text": "উন্নত সমকোণী-ত্রিভুজ সামঞ্জস্য যাচাই" },
          { "kind": "p", "text": "আরো কড়া পরীক্ষার জন্য, সমকোণী ত্রিভুজকে মানতে হবে [[[\\boxed{\\frac{r}{s}\\leq3-2\\sqrt{2}}]]], আনুমানিক [[[\\boxed{\\frac{r}{s}\\leq0.1716}]]]। ধারণা সরল: দেওয়া r ও s থেকে দুটি পাদকে হতে হবে [[a+b=s+r]] ও [[ab=2rs]] থেকে তৈরি দ্বিঘাতের ধনাত্মক সমাধান, আর সেই দ্বিঘাতের বাস্তব সমাধান তখনই যখন এর নিরূপক অ-ঋণাত্মক থাকে। নিরূপকের শর্ত সরল হয়ে ঠিক এই সীমায় আসে। 3-4-5 যাচাই করুন: [[\\frac{1}{6}\\approx0.1667\\leq0.1716]], বৈধ। এটি সতর্ক কাজের ঐচ্ছিক পরিমার্জন, শিক্ষানবিশ হিসাবের বাধ্যতামূলক অংশ নয়।" },
          { "kind": "h3", "text": "ইনপুট অসামঞ্জস্যপূর্ণ হলে কী হয়?" },
          { "kind": "p", "text": "দুটি ধনাত্মক সংখ্যা গুণ করলে সবসময় সংখ্যাগত ফল পাওয়া যায়, কিন্তু তা প্রমাণ করে না যে তারা একই সমকোণী ত্রিভুজের অন্তর্ব্যাসার্ধ ও অর্ধপরিসীমা। এক ত্রিভুজের r আর অন্য ত্রিভুজের s জুড়লে এমন গুণফল পাওয়া যায় যার কোনো জ্যামিতিক অর্থ নেই, পাটিগণিত যতই পরিপাটি দেখাক। ক্যালকুলেটরের বাস্তবায়ন বৈধতা আচরণের জন্য পরীক্ষিত না হওয়া পর্যন্ত ধরে নেবেন না এটি সম্পর্ক যাচাই করে: ওপরের যাচাইগুলো নিজে চালান, বাহু জানা থাকলে বাহু থেকে r ও s আবার হিসাব করুন, আর পাদের সূত্র দিয়ে ক্ষেত্রফল মিলিয়ে নিন।" }
        ]
      },
      "sec-units": {
        "h2": "পরিমাপের একক অন্তর্ব্যাসার্ধ ও অর্ধপরিসীমার হিসাবে কী প্রভাব ফেলে",
        "blocks": [
          { "kind": "p", "text": "অন্তর্ব্যাসার্ধ ও অর্ধপরিসীমা দুটোই দৈর্ঘ্য, তাই অন্য যেকোনো দৈর্ঘ্য পরিমাপের মতো একই একক নিয়ম মানে। উত্তরের বর্গ একক দুটি দৈর্ঘ্যের একক গুণ থেকে আসে, ফলে সামঞ্জস্যপূর্ণ এককই পুরো খেলা।" },
          { "kind": "h3", "text": "দুটি ইনপুটই সামঞ্জস্যপূর্ণ একক ব্যবহার করবে কেন?" },
          { "kind": "p", "text": "গুণফল [[K=r\\times s]] দৈর্ঘ্যকে দৈর্ঘ্য দিয়ে গুণ করে। r সেন্টিমিটারে আর s মিটারে হলে, গুণফল দুটি স্কেল মেশায় আর সংখ্যার কোনো পরিষ্কার অর্থ থাকে না। প্রথমে রূপান্তর করুন যাতে দুটি ইনপুট একই একক ভাগ করে: মিটার, সেন্টিমিটার, মিলিমিটার, ফুট, ইঞ্চি বা গজ, কিন্তু দুটোর জন্য একটাই। এ কারণেই ক্যালকুলেটরে একক নির্বাচক আছে: সংখ্যা দেওয়ার আগে সেগুলো সেট করুন।" },
          { "kind": "h3", "text": "একক রূপান্তরের সমাধান-করা উদাহরণ" },
          { "kind": "p", "text": "দেওয়া আছে [[r=10\\text{ cm}]] ও [[s=1\\text{ m}]]। অর্ধপরিসীমা রূপান্তর করুন: [[1\\text{ m}=100\\text{ cm}]]। তাহলে [[K=10\\times100]], [[[\\boxed{K=1000\\text{ cm}^2}]]]। বিকল্পে, অন্তর্ব্যাসার্ধ রূপান্তর করুন: [[10\\text{ cm}=0.1\\text{ m}]], তাহলে [[K=0.1\\times1]], [[[\\boxed{K=0.1\\text{ m}^2}]]]। দুটি উত্তরই একই ক্ষেত্রফল বর্ণনা করে, যেহেতু [[0.1\\text{ m}^2=1000\\text{ cm}^2]]। প্রথমে রূপান্তর করুন, তারপর গুণ করুন, আর যেকোনো একক-পথ সঠিক জায়গায় পৌঁছায়।" },
          { "kind": "h3", "text": "ফলাফল বর্গ এককে প্রকাশ করা হয় কেন?" },
          { "kind": "p", "text": "ক্ষেত্রফল পৃষ্ঠ ঢেকে রাখা একক বর্গ গণনা করে: [[\\text{cm}\\times\\text{cm}=\\text{cm}^2]], [[\\text{m}\\times\\text{m}=\\text{m}^2]], [[\\text{ft}\\times\\text{ft}=\\text{ft}^2]]। একক সবসময় দৈর্ঘ্যের এককের বর্গ, কারণ দুটি দৈর্ঘ্যের গুণ বর্গের গণনা। ক্ষেত্রফলকে সাধারণ দৈর্ঘ্য হিসেবে রিপোর্ট করা, যেমন 1000 cm, শ্রেণিভুল: 1000 cm হলো দৈর্ঘ্য, আর 1000 cm² হলো পৃষ্ঠ।" },
          { "kind": "h3", "text": "দশমিক মান নিয়ে কাজ" },
          { "kind": "p", "text": "সূত্রটি দশমিককে কোনো পরিবর্তন ছাড়াই সামলায়। দেওয়া আছে [[r=2.5]] ও [[s=8.4]]: [[K=2.5\\times8.4]], [[[\\boxed{K=21\\text{ square units}}]]]। পূর্ণ সংখ্যা, দশমিক ও সূক্ষ্ম কর্মশালার মাপ সব একই গুণের মধ্যে দিয়ে প্রবাহিত হয়। হিসাবের মধ্যে পূর্ণ নির্ভুলতা রাখুন আর শুধু চূড়ান্ত উত্তরটিই সেই যথার্থতায় গোল করুন যা মাপগুলো সমর্থন করে।" }
        ]
      },
      "sec-mistakes": {
        "h2": "অর্ধপরিসীমা থেকে সমকোণী ত্রিভুজ ক্ষেত্রফল বের করতে সাধারণ ভুল",
        "blocks": [
          { "kind": "p", "text": "এই বিষয়ের প্রায় প্রতিটি ভুল উত্তর খারাপ পাটিগণিতের নয়, গুলিয়ে ফেলা লেবেলের। নিচের ষোলটি ভুল বারবার দেখা দেয়, প্রতিটির কারণ ও সমাধানসহ।" },
          { "kind": "h3", "text": "1. অর্ধপরিসীমাকে পূর্ণ পরিসীমার সঙ্গে গুলিয়ে ফেলা" },
          { "kind": "p", "text": "যেখানে [[s=6]] থাকার কথা সেখানে [[P=12]] বসালে উত্তর দ্বিগুণ হয়: 6-এর বদলে [[1\\times12=12]]। ভুল হয় কারণ দৈনন্দিন ভাষা পরিসীমা বলে যখন সূত্র চায় তার অর্ধেক। সমাধান: বসানোর আগে সীমানার যোগফলকে সবসময় অর্ধেক করুন, আর যাচাই করুন দেওয়া s পরিসীমার চেয়ে ছোট।" },
          { "kind": "h3", "text": "2. অন্তর্ব্যাসার্ধের বদলে পরিব্যাসার্ধ ব্যবহার" },
          { "kind": "p", "text": "3-4-5 ত্রিভুজের পরিব্যাসার্ধ [[R=\\frac{5}{2}=2.5]]; এটি ব্যবহার করলে [[2.5\\times6=15]] পাওয়া যায়, সত্যিকারের ক্ষেত্রফলের প্রায় তিনগুণ। ভুল আসে দুটি বৃত্ত ব্যাসার্ধ শব্দটি ভাগ করে নেওয়ায়। সমাধান: নিশ্চিত হোন ব্যাসার্ধটি ত্রিভুজের ভেতরের বৃত্তের, তিনটি বাহুকেই স্পর্শকারী, শীর্ষবিন্দু দিয়ে যাওয়াটার নয়।" },
          { "kind": "h3", "text": "3. অর্ধপরিসীমা সঠিকভাবে নির্ণয় করতে ভুলে যাওয়া" },
          { "kind": "p", "text": "মাত্র দুটি বাহু যোগ করলে, বা যোগের আগে প্রতিটি বাহুকে দুই দিয়ে ভাগ করলে ভুল s তৈরি হয়। 3-4-5-এর জন্য, 3 + 4 যোগ করে ভাগ করলে 3.5 পাওয়া যায়, আর [[1\\times3.5=3.5]] অর্থহীন। সমাধান: প্রথমে তিনটি বাহু যোগ করুন, তারপর একবার ভাগ করুন: [[s=\\frac{a+b+c}{2}]]।" },
          { "kind": "h3", "text": "4. চূড়ান্ত ফলকে আবার দুই দিয়ে ভাগ করা" },
          { "kind": "p", "text": "[[K=1\\times6=6]]-এর পর আরেকটা অর্ধেক করলে 3 পাওয়া যায়। অভ্যাসটা আসে পাদের সূত্র থেকে, যেখানে ভাগ স্পষ্ট। সমাধান: মনে রাখুন অর্ধেকগুলো ইতিমধ্যে অর্ধপরিসীমার মধ্যে শোষিত; [[K=r\\times s]] সম্পূর্ণ।" },
          { "kind": "h3", "text": "5. সমকোণী ত্রিভুজের ভুল অন্তর্ব্যাসার্ধ সূত্র ব্যবহার" },
          { "kind": "p", "text": "[[r=\\frac{c-a-b}{2}]] বা [[r=\\frac{a+b}{2}]] আন্দাজ করলে ভুল ব্যাসার্ধ পাওয়া যায়। 3-4-5-এর জন্য [[\\frac{5-3-4}{2}=-1]] দৈর্ঘ্যই নয়। সমাধান: [[r=\\frac{a+b-c}{2}]] ব্যবহার করুন, a ও b পাদ আর c অতিভুজ হিসেবে, ঠিক এই বিন্যাসে।" },
          { "kind": "h3", "text": "6. সাধারণ ত্রিভুজে সমকোণী ত্রিভুজের অন্তর্ব্যাসার্ধের সংক্ষিপ্ত পদ্ধতি প্রয়োগ" },
          { "kind": "p", "text": "সংক্ষিপ্ত পদ্ধতি সমকোণের ওপর নির্ভর করে, তাই সাধারণ ত্রিভুজে এটি এমন সংখ্যা হিসাব করে যার কোনো জ্যামিতিক অর্থ নেই। সমাধান: সমকোণী নয় এমন ত্রিভুজে অন্তর্ব্যাসার্ধ বের করুন [[r=\\frac{K}{s}]] থেকে বা জানা মাপের সঙ্গে মানানসই সূত্র থেকে, কখনো [[r=\\frac{a+b-c}{2}]] থেকে নয়।" },
          { "kind": "h3", "text": "7. ভিন্ন ত্রিভুজ থেকে অন্তর্ব্যাসার্ধ ও অর্ধপরিসীমা বসানো" },
          { "kind": "p", "text": "3-4-5 ত্রিভুজ থেকে r = 1 আর 5-12-13 ত্রিভুজ থেকে s = 15 নিলে 15 পাওয়া যায়, এমন গুণফল যা কোনো বাস্তব ত্রিভুজ বর্ণনা করে না। ভুল হয় যখন মান ভিন্ন সমাধান-করা উদাহরণ বা ভিন্ন চিত্র থেকে নকল করা হয়। সমাধান: গুণের আগে দুটি ইনপুটই একই ত্রিভুজ থেকে উৎপন্ন বা পরিমাপ করুন।" },
          { "kind": "h3", "text": "8. সেন্টিমিটার ও মিটার মেশানো" },
          { "kind": "p", "text": "রূপান্তর ছাড়া r = 10 cm-কে s = 1 m দিয়ে গুণ করলে পরিষ্কার কিছুই পাওয়া যায় না। সমাধান: প্রথমে এক এককে রূপান্তর করুন: [[1\\text{ m}=100\\text{ cm}]], তারপর [[K=10\\times100=1000\\text{ cm}^2]]।" },
          { "kind": "h3", "text": "9. ফল রৈখিক এককে রিপোর্ট করা" },
          { "kind": "p", "text": "6 m² ক্ষেত্রফল 6 m নয়। ভুল সাধারণত আসে ইনপুট একককে বর্গ না করে নকল করা থেকে। সমাধান: সংখ্যার সঙ্গে বর্গ একক প্রতিবার লিখুন: m², cm², ft²।" },
          { "kind": "h3", "text": "10. শূন্য বা ঋণাত্মক মাপ বসানো" },
          { "kind": "p", "text": "দৈর্ঘ্য ধনাত্মক। শূন্য ত্রিভুজকে ক্ষেত্রফলহীন রেখায় চাপায়, আর ঋণাত্মক দৈর্ঘ্যের এখানে কোনো জ্যামিতিক অর্থ নেই। সমাধান: ইনপুট আবার মাপুন বা আবার উৎপন্ন করুন; হিসাবের আগে অ-ধনাত্মক মান প্রত্যাখ্যান করুন।" },
          { "kind": "h3", "text": "11. অন্তঃকেন্দ্রকে পরিকেন্দ্রের সঙ্গে গুলিয়ে ফেলা" },
          { "kind": "p", "text": "অন্তঃকেন্দ্র কোণ-দ্বিখণ্ডকের মিলনবিন্দু; পরিকেন্দ্র বাহুগুলোর লম্ব-দ্বিখণ্ডকের মিলনবিন্দু। সমকোণী ত্রিভুজে পরিকেন্দ্র অতিভুজের মধ্যবিন্দুতে বসে, সম্পূর্ণ ভিন্ন বিন্দু। এদের গুলিয়ে ফেললে ভুল ব্যাসার্ধ মাপা হয়। সমাধান: অন্তঃকেন্দ্র [[I]] ত্রিভুজের ভেতরে, বাহু থেকে সমান দূরত্বে, শীর্ষবিন্দু থেকে নয়।" },
          { "kind": "h3", "text": "12. ধরে নেওয়া অন্তর্বৃত্ত মাত্র দুটি বাহু স্পর্শ করে" },
          { "kind": "p", "text": "কোনায় ঠেসে বসানো বৃত্ত দুটি বাহু স্পর্শ করে, কিন্তু সেটি অন্তর্বৃত্ত নয়। অন্তর্বৃত্ত তিনটিই স্পর্শ করে, আর ক্ষেত্রফল প্রমাণের তিনটি স্পর্শবিন্দু দরকার। সমাধান: কোনো ব্যাসার্ধকে অন্তর্ব্যাসার্ধ ধরার আগে তিনটি সংযোগবিন্দু যাচাই করুন, প্রতি বাহুতে একটি।" },
          { "kind": "h3", "text": "13. ভুলে যাওয়া ব্যাসার্ধ প্রতিটি স্পর্শ বাহুকে লম্বভাবে ছোঁয়" },
          { "kind": "p", "text": "প্রমাণের ভাগ-করা-উচ্চতা যুক্তি [[r\\perp a]], [[r\\perp b]], [[r\\perp c]]-এর ওপর নির্ভর করে। অন্তঃকেন্দ্র থেকে বাহু পর্যন্ত তির্যক খণ্ড r-এর চেয়ে লম্বা আর উচ্চতা হিসেবে কাজ করতে পারে না। সমাধান: অন্তর্ব্যাসার্ধ বাহুর লম্ব বরাবর মাপুন, কখনো কর্ণ বরাবর নয়।" },
          { "kind": "h3", "text": "14. অন্তর্ব্যাসার্ধকে ব্যাসের সঙ্গে গুলিয়ে ফেলা" },
          { "kind": "p", "text": "অন্তর্বৃত্তের পূর্ণ প্রস্থকে r হিসেবে বসালে ব্যাসার্ধ দ্বিগুণ হয় আর ক্ষেত্রফল দ্বিগুণ হয়। 3-4-5 ত্রিভুজে 1-এর বদলে 2 বসালে [[2\\times6=12]] পাওয়া যায়। সমাধান: অন্তর্ব্যাসার্ধ কেন্দ্র থেকে এক বাহু পর্যন্ত যায়, বৃত্তের পূর্ণ প্রস্থের অর্ধেক।" },
          { "kind": "h3", "text": "15. হেরনের সূত্র ভুলভাবে ব্যবহার" },
          { "kind": "p", "text": "প্রচলিত ফসকানির মধ্যে আছে বর্গমূল ভুলে যাওয়া, যোগ চিহ্ন দিয়ে [[s(s+a)(s+b)(s+c)]] লেখা, বা সূত্রে পূর্ণ পরিসীমা ঢোকানো। 3-4-5-এর জন্য, মূল বাদ দিলে 6-এর বদলে 36 পাওয়া যায়। সমাধান: [[K=\\sqrt{s(s-a)(s-b)(s-c)}]], অর্ধপরিসীমা, বিয়োগ চিহ্ন ও মূল সব যথাস্থানে।" },
          { "kind": "h3", "text": "16. ধরে নেওয়া সংখ্যাগত ফল স্বয়ংক্রিয়ভাবে প্রমাণ করে ইনপুট জ্যামিতিকভাবে সামঞ্জস্যপূর্ণ" },
          { "kind": "p", "text": "যেকোনো দুটি ধনাত্মক সংখ্যা গুণ হয়, তাই ক্যালকুলেটর সবসময় কিছু ফেরত দেয়। সেই কিছুটা সমকোণী ত্রিভুজের ক্ষেত্রফল হয় তখনই যখন r ও s সত্যিই একটারই। সমাধান: সামঞ্জস্য যাচাই চালান, সম্ভব হলে বাহু থেকে r ও s আবার হিসাব করুন, আর সংখ্যায় ভরসা করার আগে পাদের সূত্র দিয়ে পারস্পরিক যাচাই করুন।" },
          { "kind": "h3", "text": "ভুল বনাম সঠিক: একটি সুনির্দিষ্ট উদাহরণ" },
          { "kind": "p", "text": "[[r=1]], [[s=6]] নিন। সঠিক: [[K=1\\times6=6]]। ভুল করে আবার দুই দিয়ে ভাগ করলে: [[K=\\frac{1\\times6}{2}=3]], ভুল কারণ অর্ধেক আগেই অর্ধপরিসীমার ভেতরে আছে। ভুল করে অর্ধপরিসীমা 6-এর বদলে পূর্ণ পরিসীমা 12 বসালে: [[K=1\\times12=12]], সত্যিকারের ক্ষেত্রফলের দ্বিগুণ। তিনটি ক্ষেত্রেই পাটিগণিত আত্মবিশ্বাসী দেখায়; শুধু জ্যামিতিই এদের আলাদা করে।" }
        ]
      },
      "sec-verify": {
        "h2": "আপনার সমকোণী ত্রিভুজের ক্ষেত্রফল সঠিক কি না, কীভাবে যাচাই করবেন",
        "blocks": [
          { "kind": "p", "text": "ছয়টি স্বতন্ত্র যাচাই, সবগুলো 3-4-5 ত্রিভুজে দেখানো ([[a=3]], [[b=4]], [[c=5]], [[r=1]], [[s=6]], [[K=6]])। ভিন্ন পথের মধ্যে একমত হওয়া উত্তরের সঠিকতার সবচেয়ে শক্ত প্রমাণ, বাড়ির কাজে ও ব্যবহারিক মাপে একইভাবে।" },
          { "kind": "h3", "text": "পদ্ধতি 1: মূল সূত্র যাচাই করুন" },
          { "kind": "p", "text": "[[K=r\\times s]] নতুন করে চালান: [[K=1\\times6=6]]। সংখ্যা আবার বসিয়ে দ্বিতীয়বার চালালে টাইপো ও ভুল কী-চাপা অঙ্ক ধরা পড়ে।" },
          { "kind": "h3", "text": "পদ্ধতি 2: তিনটি বাহু থেকে অর্ধপরিসীমা হিসাব করুন" },
          { "kind": "p", "text": "বাহু থেকে [[s=\\frac{a+b+c}{2}]] আবার হিসাব করুন: [[s=\\frac{3+4+5}{2}=6]]। আবার হিসাব করা s দেওয়া মান থেকে ভিন্ন হলে, ইনপুট ভুল ছিল আর গুণফল আবার করতে হবে।" },
          { "kind": "h3", "text": "পদ্ধতি 3: সমকোণী ত্রিভুজ থেকে অন্তর্ব্যাসার্ধ হিসাব করুন" },
          { "kind": "p", "text": "[[r=\\frac{a+b-c}{2}]] আবার হিসাব করুন: [[r=\\frac{3+4-5}{2}=1]]। দেওয়া r-এর সঙ্গে অমিল মানে ব্যাসার্ধটি ভিন্ন ত্রিভুজ থেকে এসেছে বা ভুল প্রয়োগ করা সূত্র থেকে।" },
          { "kind": "h3", "text": "পদ্ধতি 4: মানক পাদের সূত্র দিয়ে যাচাই করুন" },
          { "kind": "p", "text": "[[K=\\frac{ab}{2}]] হিসাব করুন: [[K=\\frac{3\\times4}{2}=6]]। এই পথ সম্পূর্ণ ভিন্ন ইনপুট ব্যবহার করে, তাই [[rs]]-এর সঙ্গে মিল ইনপুট ও পাটিগণিত দুটোই নিশ্চিত করে।" },
          { "kind": "h3", "text": "পদ্ধতি 5: হেরনের সূত্র দিয়ে যাচাই করুন" },
          { "kind": "p", "text": "[[K=\\sqrt{s(s-a)(s-b)(s-c)}]] হিসাব করুন: [[K=\\sqrt{6\\times3\\times2\\times1}=6]]। হেরনের সূত্র বাহু ও অর্ধপরিসীমাকে একসঙ্গে ব্যায়াম করে, অন্য যাচাই মিস করতে পারে এমন বাহুর লেবেল ভুল ধরে।" },
          { "kind": "h3", "text": "পদ্ধতি 6: পিথাগোরাসের উপপাদ্য যাচাই করুন" },
          { "kind": "p", "text": "[[a^2+b^2=c^2]] নিশ্চিত করুন: [[3^2+4^2=9+16=25=5^2]]। এটি অন্য সব হিসাবের পেছনের বাহু চিহ্নিতকরণ যাচাই করে; ভুল অতিভুজ মানে কোনো বাহু ভুল লেবেল হয়েছে আর r, s ও K সব আবার গড়তে হবে।" }
        ]
      },
      "sec-applications": {
        "h2": "অন্তর্ব্যাসার্ধ ও অর্ধপরিসীমা সূত্রের ব্যবহারিক প্রয়োগ",
        "blocks": [
          { "kind": "p", "text": "একই দুই-ইনপুট ধাঁচ সেখানেই দেখা যায় যেখানেই ত্রিভুজাকার প্যানেল বা অংশ মাপা দরকার আর অন্তর্বৃত্তের তথ্য সুবিধাজনক শুরুর বিন্দু। কাচমিস্ত্রি প্রান্তের দৈর্ঘ্য থেকে জানালা মাপে; ফ্যাব্রিকেটর ব্র্যাকেট ব্ল্যাঙ্কের পাদ পড়ে; জরিপকারী জমির কোনাকে তিনটি সোজা বাহুতে নামায়। সেই বাহু থেকে আসে অন্তর্ব্যাসার্ধ ও অর্ধপরিসীমা, আর একটা গুণ ক্ষেত্রফলের নাম দেয়। নিচের চারটি প্যানেল ভিন্ন স্কেলে ধাঁচ দেখায়: কাচের জানালা (6 m²), ছাদের সাপোর্ট (60 ft²), বাগানের অংশ (84 m²) ও ইস্পাত প্লেট (30 cm²), প্রতিটিতে তার অন্তর্ব্যাসার্ধ, অর্ধপরিসীমা ও ফলাফলের ক্ষেত্রফল লেবেল করা।" }
        ],
        "imgAlt": "চারটি প্যানেল: কাচের জানালা 6 m2, ছাদের সাপোর্ট 60 ft2, বাগানের অংশ 84 m2, ইস্পাত প্লেট 30 cm2",
        "figcaption": "চারটি বাস্তব ব্যবহার: কাচের জানালা, ছাদের সাপোর্ট, বাগানের অংশ ও ইস্পাত প্লেট।"
      },
      "sec-conclusion": {
        "h2": "দুটো পরিমাপ, একটা গুণফল",
        "blocks": [
          { "kind": "p", "text": "একটা অন্তর্ব্যাসার্ধ ও একটা অর্ধপরিসীমাই যথেষ্ট। গুণ করুন, আর আবদ্ধ পৃষ্ঠের নাম হয়ে যায়। তিন-ত্রিভুজ প্রমাণ দেখায় কেন গুণের পর কোনো ভাগ আসে না, স্পর্শক-খণ্ড যুক্তি দেখায় কেন সমকোণী ত্রিভুজ তার অন্তর্ব্যাসার্ধের সংক্ষিপ্ত পদ্ধতি পায়, আর পাদের সূত্র সাথে হেরনের সূত্র প্রতিটি উত্তর যাচাইয়ে প্রস্তুত।" },
          { "kind": "p", "text": "কাজের অভ্যাস সরল: নিশ্চিত হোন দুটি ইনপুটই একই ত্রিভুজ বর্ণনা করে, একক মিলান, দশমিক শেষ পর্যন্ত গোল না করে রাখুন, আর দ্বিতীয় পদ্ধতিতে যাচাই করুন। এই অভ্যাসগুলোর সঙ্গে [[K=r\\times s]] জ্যামিতির সবচেয়ে নির্ভরযোগ্য ক্ষেত্রফল নির্ণয়গুলোর একটি।" }
        ]
      },
      "sec-related": {
        "h2": "সম্পর্কিত সমকোণী ত্রিভুজ ক্যালকুলেটর দেখুন",
        "blocks": [
          { "kind": "p", "text": "ভিন্ন ভিন্ন মাপের জন্য ভিন্ন ভিন্ন ক্যালকুলেটর দরকার।" }
        ]
      },
      "sec-faq": {
        "h2": "সচরাচর জিজ্ঞাসিত প্রশ্ন",
        "blocks": []
      }
    }
  },
  "ja": {
    "faqs": [
      {
        "question": "内半径と半周を使って直角三角形の面積を求める公式は？",
        "answer": "K = r × s です。r は内半径（内接円の半径）、s は半周（周囲の半分）です。二つを掛けるだけで面積になり、割り算は不要です。r = 1、s = 6 のとき K = 1 × 6 = 6 平方単位です。両方の入力は同じ三角形のものでなければなりません。"
      },
      {
        "question": "内半径とは何ですか？",
        "answer": "内半径とは内接円の半径、つまり三角形の内部にぴったり収まり三辺すべてに接する円の半径です。内心（三角形の三つの角の二等分線の交点）から任意の辺までの垂線の距離に等しくなります。脚を a、b、斜辺を c とする直角三角形では、近道の公式 r = (a + b - c) / 2 が使えます。"
      },
      {
        "question": "内半径と外半径の違いは？",
        "answer": "内半径は三角形の内部の円（三辺すべてに接する円）の半径、外半径は三頂点を通る円の半径です。異なる円なので値も異なります。直角三角形では外半径は R = c/2、つまり斜辺のちょうど半分で、内半径は (a + b - c)/2 です。"
      },
      {
        "question": "直角三角形の半周はどう求めますか？",
        "answer": "三辺を足して二で割ります：s = (a + b + c) / 2。3-4-5 の三角形では s = (3 + 4 + 5) / 2 = 6 です。半周は全周の半分なので、K = r × s で使うときに全周を誤って入力すると面積が二倍になります。"
      },
      {
        "question": "三辺の長さから内半径を求めるには？",
        "answer": "直角三角形では近道の公式 r = (a + b - c) / 2 を使います。a と b は二つの脚、c は斜辺です。辺が 5、12、13 のとき：r = (5 + 12 - 13) / 2 = 2。この近道は直角三角形にだけ使え、他の三角形では一般関係式 r = K / s が必要です。"
      },
      {
        "question": "なぜ面積は内半径かける半周になるのですか？",
        "answer": "内心を三つの頂点と結ぶと、三角形は三つの小さな三角形に分かれます。それぞれの底辺は元の辺の一つ、高さは内半径 r です。面積は ar/2、br/2、cr/2 で、足すと r(a + b + c)/2 になります。s = (a + b + c)/2 なので、合計は r × s です。"
      },
      {
        "question": "この公式はすべての三角形で使えますか？",
        "answer": "はい。退化していない三角形はすべて内接円と内心を持つので、三つの三角形への分割は直角三角形・鋭角三角形・鈍角三角形のすべてに当てはまります。直角三角形が単に簡単なのは、r = (a + b - c) / 2 の近道で辺から内半径が求められるからです。一般の内半径は今も r = K / s から求めます。"
      },
      {
        "question": "半周は周囲と同じですか？",
        "answer": "いいえ。半周は周囲のちょうど半分です：s = P/2。3-4-5 の三角形では周囲が 12、半周が 6 です。K = r × s に全周を入力すると 1 × 12 = 12 となり、正しい面積 6 の二倍になります。掛ける前に周囲を半分にしてください。"
      },
      {
        "question": "最後の答えをもう一度二で割る必要がありますか？",
        "answer": "いいえ。公式 K = r × s ですでにすべての割り算が織り込まれています：三つの小さい三角形の半分は半周に吸収されています。掛けた後に再び割るのが最も多い間違いです。r = 1、s = 6 のとき正しい面積は 6 で、(1 × 6) / 2 = 3 は誤りです。"
      },
      {
        "question": "ヘロンの公式と内半径の公式の関係は？",
        "answer": "どちらも同じ面積を計算しますが、出発する入力が違います。ヘロンの公式 K = sqrt(s(s - a)(s - b)(s - c)) は三辺を必要とし、K = r × s は内半径と半周を必要とします。3-4-5 の三角形では両方とも 6 になり、片方の公式がもう片方の強力な検算になります。"
      },
      {
        "question": "内半径と半周に小数を使えますか？",
        "answer": "はい。公式は小数も整数とまったく同じように扱います。r = 2.5、s = 8.4 のとき K = 2.5 × 8.4 = 21 平方単位です。掛け算の途中は完全な精度を保ち、測定の正確さに合わせて最終答だけを丸めてください。"
      },
      {
        "question": "内半径と半周が正しいかどうやって確かめますか？",
        "answer": "両方が正の数で、s が r より明らかに大きいことを確認します。辺が分かっている場合は s = (a + b + c)/2 と r = (a + b - c)/2 を再計算し、K = ab/2 とヘロンの公式で面積を突き合わせます。複数の方法が一致すれば強い証拠です。別々の三角形の値を組み合わせると、本当の面積ではない数が得られます。"
      }
    ],
    "relatedHeading": "関連する直角三角形の計算機を見る",
    "relatedItems": [
      "脚から求める直角三角形の面積計算機",
      "直角三角形の半周計算機",
      "高さから求める直角三角形の面積計算機",
      "角度から求める直角三角形の面積計算機",
      "直角三角形の周囲計算機",
      "直角三角形の面積計算機"
    ],
    "relatedIntro": "測るものが違えば、使う計算機も違います。",
    "faqHeading": "よくある質問",
    "tocHeading": "このガイドの内容",
    "tocItems": {
      "sec-intro": "内半径と半周を使って直角三角形の面積を計算する方法",
      "sec-right-triangle": "直角三角形とは？",
      "sec-incircle": "直角三角形の内接円を理解する",
      "sec-semiperimeter": "三角形の半周を理解する",
      "sec-formula": "なぜ三角形の面積は内半径かける半周に等しいのか？",
      "sec-inradius": "直角三角形の内半径の求め方",
      "sec-howto": "半周から求める直角三角形の面積計算機の使い方",
      "sec-examples": "内半径と半周による直角三角形の面積の例題",
      "sec-practical": "内半径と半周から求める直角三角形の面積の実生活での使い方",
      "sec-legs-comparison": "なぜ内半径の公式は脚の公式と同じ面積を与えるのか？",
      "sec-heron": "ヘロンの公式と面積 = 内半径 × 半周の違いは？",
      "sec-consistency": "内半径と半周が妥当かどうか確かめる方法",
      "sec-units": "測定単位が内半径と半周の計算に与える影響",
      "sec-mistakes": "半周から直角三角形の面積を計算するときのよくある間違い",
      "sec-verify": "直角三角形の面積が正しいか確かめる方法",
      "sec-applications": "内半径と半周の公式の実用的な応用",
      "sec-related": "関連する直角三角形の計算機を見る",
      "sec-faq": "よくある質問",
      "sec-conclusion": "二つの測定、一つの積"
    },
    "sections": {
      "sec-intro": {
        "h2": "内半径と半周を使って直角三角形の面積を計算する方法",
        "blocks": [
          { "kind": "p", "text": "[[r=1]]、[[s=6]] とします。[[K=r\\times s]] を適用します：[[K=1\\times6]]、[[[\\boxed{K=6\\text{ square units}}]]]。この結果は三角形の三辺に囲まれた平らな面全体を表します。すなわち六平方単位です。この二つの入力に対して、半周から求める直角三角形の面積計算機が返すのはまさにこの値です。" },
          { "kind": "p", "text": "内半径とは、三角形の内部に収まった円の半径で、三辺すべてに接しています。半周とは境界の長さの半分、すなわち三辺の合計を二で割ったものです。二つの測定だけで足りるのは、内半径が内心から作られる三つの小さな三角形に共通の垂線の高さとなり、半周がそれらの底辺を一つの因数にまとめ上げるからです。" },
          { "kind": "p", "text": "この理屈はすべての三角形に当てはまります。どれも内接円を持つからです。直角三角形にはおまけがあります。その内半径は三辺から短い公式で求まるので、r と s はたいてい既知です。この方法は、内接円や半周が与えられている問題で威力を発揮します。脚も角度も測る必要がないからです。" }
        ]
      },
      "sec-right-triangle": {
        "h2": "直角三角形とは？",
        "blocks": [
          { "kind": "p", "text": "内接円が登場する前に、三角形自体に誤りなくラベルを付ける必要があります。以下の記号はこのガイド全体で固定され、計算機も同じ名前を使います。" },
          { "kind": "h3", "text": "直角三角形の定義" },
          { "kind": "p", "text": "直角三角形とは、内角の1つがちょうど90度の3辺の多角形です。3つの頂点、3つの辺、2つの鋭角と1つの直角を持ち、直角は通常小さな正方形で示されます。直角を作る二辺が脚、向かい側の辺が斜辺です。[[C=90^\\circ]] であるため、[[[\\boxed{A+B=90^\\circ}]]] が成り立ちます。すなわち二つの鋭角は余角の関係にあり、一方を知れば他方が決まります。" },
          { "kind": "h3", "text": "二本の脚を理解する" },
          { "kind": "p", "text": "脚 [[a]] は角 [[A]] の向かい側にあり、脚 [[b]] は角 [[B]] の向かい側にあります。二本の脚は直角の頂点で交わり、互いに垂直です。それぞれが底辺、他方が垂線の高さになれるので、面積に直接寄与します。このページでは内半径にもつながります。近道の公式 [[r=\\frac{a+b-c}{2}]] は二本の脚と斜辺から作られているからです。" },
          { "kind": "h3", "text": "斜辺を理解する" },
          { "kind": "p", "text": "斜辺とは90度の角の向かい側の辺であり、常に三角形の最長の辺です。自身が直角を作ることはありません。直角から向かい側に伸びています。脚の面積公式では出番がありませんが、ここでは重要です。斜辺は半周 [[s=\\frac{a+b+c}{2}]] にも内半径の近道 [[r=\\frac{a+b-c}{2}]] にも登場します。二本の脚が分かっていれば、三平方の定理で [[[\\boxed{c=\\sqrt{a^2+b^2}}]]] として復元できます。" },
          { "kind": "h3", "text": "この三角形が他の三角形と違う点は？" },
          { "kind": "p", "text": "90度という角こそがすべてです。それにより二本の脚は何の作図もなく垂直になり、標準の面積公式が単純になります。また直角の近くで内接円の接線分が内半径そのものに等しくなり、内半径の公式が単純になります。他の三角形も [[K=r\\times s]] を満たしますが、その内半径を求めるにはたいてい先に面積が必要です。内半径が辺の長さから直接出てくるのは、直角三角形だけです。" }
        ]
      },
      "sec-incircle": {
        "h2": "直角三角形の内接円を理解する",
        "blocks": [
          { "kind": "p", "text": "内半径は、内接円をくっきりと思い描けてはじめて意味を持ちます。この節では、円そのものから、半径が各辺に接する接点までを順に組み立てます。" },
          { "kind": "h3", "text": "内接円の定義" },
          { "kind": "p", "text": "内接円とは、三角形の内部に置かれ、三辺すべてに接する円のことです。内部に収まり、各辺にちょうど一点で接し、辺をまたぐことはありません。接していることで場所が固定されるからです。退化していない三角形はすべて内接円をちょうど一つだけ持ちます。角の領域の内側で円を縮めていくと、三辺すべてにぴったり付く最大の大きさが一つだけ存在します。各辺に一つの三つの接点は、後で内半径を測る場所です。" },
          { "kind": "h3", "text": "内心とは？" },
          { "kind": "p", "text": "内心は [[I]] と表され、三つの内角の二等分線が交わる点です。各二等分線は角の一角を二等分し、二等分線上の点はその角を作る二辺から等しい垂線の距離にあります。したがって三本の二等分線の交点は三辺すべてから等距離にあり、それが各辺に接する円の中心になれる理由です。内心は正しい三角形ならすべてその内部にあり、辺の上や外側にはありません。" },
          { "kind": "h3", "text": "内半径とは？" },
          { "kind": "p", "text": "内半径とは、内心から三角形の任意の辺までの垂線の距離です。[[[\\boxed{r=\\text{distance from the incenter to a side}}]]]。内心は三辺すべてから等距離にあるので、どの辺を選んでも値は同じです。この一つの数は内接円の半径であり、中心から接点まで引かれた三つの短い線分のそれぞれの長さであり、後の節の面積の証明を成立させる共通の高さです。" },
          { "kind": "h3", "text": "接する関係を理解する" },
          { "kind": "p", "text": "接点まで引いた半径は、接する辺と垂直になります。三つの接触点に適用すると、[[r\\perp a]]、[[r\\perp b]]、[[r\\perp c]] が得られます。各主張は図の異なる角を説明しています。脚 a で終わる半径は脚 a と直角をなし、脚 b と斜辺についても同様です。この垂直性は飾りではありません。面積の証明で各半径が三つの小さい三角形の一つずつの高さとして働けるのは、この性質のおかげです。" },
          { "kind": "h3", "text": "内接円と外接円の違い" },
          { "kind": "p", "text": "内接円は三角形の内部にあり三辺すべてに接します。外接円は三頂点を通り、三角形を包みます。両者の半径は異なる測定値であり、取り違えてはなりません。直角三角形では外半径にも独自の単純な規則があります。[[[\\boxed{R=\\frac{c}{2}}]]] です。斜辺が外接円の直径だからです。斜辺の中点が外心です。内半径 [[r]] は二つのうち小さい方で、内側の円に属します。" }
        ],
        "imgAlt": "内接円を持つ直角三角形ABC：内心I、三つの接点、長さrの垂直な半径",
        "figcaption": "内接円を持つ三角形ABC：三つの垂直な半径があり、それぞれの長さは r。"
      },
      "sec-semiperimeter": {
        "h2": "三角形の半周を理解する",
        "blocks": [
          { "kind": "p", "text": "半周は単なる半分の測定に見えますが、面積計算の大部分を担っています。幾何学がなぜ半周にこだわるのかを理解すれば、証明の土台ができます。" },
          { "kind": "h3", "text": "半周の定義" },
          { "kind": "p", "text": "半周とは全周のちょうど半分です。[[[\\boxed{s=\\frac{P}{2}}]]]。三角形では [[[\\boxed{s=\\frac{a+b+c}{2}}]]] となります。周囲 [[P]] は境界の全長、すなわち三辺の合計です。半周はその合計の半分です。二つは [[P=2s]] で関係し、取り違えることがこのページで最も高くつく入力ミスです。" },
          { "kind": "h3", "text": "半周の求め方" },
          { "kind": "p", "text": "[[a=3]]、[[b=4]]、[[c=5]] とします。まず三辺を足し、次に一度だけ割ります。[[s=\\frac{3+4+5}{2}]]、[[[\\boxed{s=6}]]]。足し算が割り算より先でなければなりません。半周は境界全体を半分にするのであって、各辺を別々に半分にするのではないからです。割ってから足してもここでは同じ数になりますが、公式 [[s=\\frac{a+b+c}{2}]] が正しい順序を示しています。境界を合計してから、半分にします。" },
          { "kind": "h3", "text": "なぜ全周ではなく半周を使うのか？" },
          { "kind": "p", "text": "三角形の面積公式は半分を繰り返し生み出します。証明の各小さい三角形が二での割り算を一つずつ寄与し、半周がそれらを一度に吸収します。半周はヘロンの公式、内半径の関係 [[r=\\frac{K}{s}]]、そして続く証明の自然な変数です。全周を入れると結果が二倍になります。[[K=r\\times P=2rs]] は真の面積の二倍だからです。計算機が [[P]] ではなく [[s]] を求めるのは、掛け算にそれ以上の調整を不要にするためです。" },
          { "kind": "h3", "text": "半周が最長の辺より小さくなることはあるか？" },
          { "kind": "p", "text": "ありません。三角不等式により [[a+b>c]] が必要です。二つの短い辺を合わせたものが最長の辺を上回らなければ、三角形は閉じません。両辺に [[c]] を足すと [[a+b+c>2c]] となり、半分にすると [[\\frac{a+b+c}{2}>c]]、すなわち [[s>c]] です。正しい三角形では半周は常に最長の辺を上回ります。報告された半周が斜辺より小さい場合、その入力は実際の三角形を表していません。" }
        ]
      },
      "sec-formula": {
        "h2": "なぜ三角形の面積は内半径かける半周に等しいのか？",
        "blocks": [
          { "kind": "p", "text": "一般則から始めます。[[K=\\frac{\\text{base}\\times\\text{height}}{2}]] です。内心 [[I]] を三つの頂点と結びます。三角形は三つの小さな三角形に分かれ、それぞれ元の辺の一つを底辺、内半径を垂線の高さとします。この節の残りでは各部分を計算して足し合わせ、[[K=r\\times s]] を暗記ではなく目で確かめます。" },
          { "kind": "h3", "text": "一つ目の小さい三角形の面積" },
          { "kind": "p", "text": "辺 [[a]] の上に作られる三角形は、底辺が [[a]]、高さが [[r]] です。半径は辺 [[a]] にその接点で垂直に接するからです。したがってその面積は [[K_1=\\frac{ar}{2}]] です。直角についてはまだ何も使っていません。この手順は任意の三角形の辺に当てはまります。" },
          { "kind": "h3", "text": "二つ目の小さい三角形の面積" },
          { "kind": "p", "text": "辺 [[b]] の上に作られる三角形も同じ形です。底辺 [[b]]、垂線の高さ [[r]]、面積 [[K_2=\\frac{br}{2}]]。高さは再び同じ数 [[r]] です。内心がすべての辺から等距離にあるからです。この共通の高さが証明全体の鍵です。" },
          { "kind": "h3", "text": "三つ目の小さい三角形の面積" },
          { "kind": "p", "text": "辺 [[c]] の上に作られる三角形が一組を完成させます。[[K_3=\\frac{cr}{2}]]。三つの小さい三角形は元の三角形をぴったりと敷き詰め、重なりも隙間もありません。元の各点はどれか一つに含まれます。内心から頂点への線分が内部を分割するからです。" },
          { "kind": "h3", "text": "三つの面積を足す" },
          { "kind": "p", "text": "部分を足します。[[K=K_1+K_2+K_3]]。代入すると [[K=\\frac{ar}{2}+\\frac{br}{2}+\\frac{cr}{2}]]。[[r]] を括り出します。[[K=\\frac{r(a+b+c)}{2}]]。[[s=\\frac{a+b+c}{2}]] を思い出すと、括弧内の分数はまさに半周であり、[[[\\boxed{K=r\\times s}]]]。三つの小さい三角形からの半分はすべて半周に吸収されたので、最後の掛け算にそれ以上の割り算は不要です。" },
          { "kind": "h3", "text": "なぜこの公式はすべての三角形で成り立つのか？" },
          { "kind": "p", "text": "退化していない三角形はすべて内接円と内心を持ち、内心から三辺への垂線の距離は同じ数 [[r]] です。三つの三角形への分割はそれ以外何も使いません。直角も、特定の辺の長さも、特別な形も不要です。三角形が直角・鋭角・鈍角のどれでも、内心を頂点と結べば同じ代数が [[K=r\\times s]] に到達します。この公式は一般に三角形の性質であり、幾何学の教科書が一度証明してどこでも使うのはそのためです。" },
          { "kind": "h3", "text": "なぜこの公式は直角三角形に特に役立つのか？" },
          { "kind": "p", "text": "恒等式は同じですが、内半径が簡単になります。一般の三角形では内半径はたいてい面積そのものから [[r=\\frac{K}{s}]] で求めますが、面積が目標なら循環します。直角三角形はこの循環を逃れます。その内半径は辺から直接 [[r=\\frac{a+b-c}{2}]] で求まり、次の節で導出します。だから [[K=r\\times s]] は直角三角形にとって、式を変形した定義ではなく、本当に使える方法になるのです。" }
        ],
        "imgAlt": "内心Iから高さrの三つの小さい三角形に分けた三角形。K = r かける s を証明する",
        "figcaption": "三つの小さい三角形は高さ r を共有します。その面積の合計は r かける s になります。"
      },
      "sec-inradius": {
        "h2": "直角三角形の内半径の求め方",
        "blocks": [
          { "kind": "p", "text": "脚を [[a]]、[[b]]、斜辺を [[c]] とする直角三角形では、内半径は [[[\\boxed{r=\\frac{a+b-c}{2}}]]] です。この近道は直角三角形専用です。以下の証明は円の接線分の性質だけを使い、例題がそれを実際に示します。" },
          { "kind": "h3", "text": "なぜ内半径の公式が成り立つのか？" },
          { "kind": "p", "text": "同じ外点から円に引いた接線分の長さは等しくなります。内接円は二本の脚に接し、それらの接点までの二本の半径は辺と直角に交わります。頂点の直角と合わせて、角の領域は一辺 [[r]] の正方形になります。したがって直角の頂点から二本の脚の接点までの距離はそれぞれ [[r]] です。脚 a 上の残りの接線分を [[x]]、脚 b 上の残りを [[y]] とします。各鋭角の頂点からの二つの接線分は等しいので、斜辺は同じ [[x]] と [[y]] に分かれます。よって [[a=r+x]]、[[b=r+y]]、[[c=x+y]]。初めの二つの式を足すと [[a+b=2r+x+y]]。[[x+y=c]] なので [[a+b=2r+c]] となり、整理して [[[\\boxed{r=\\frac{a+b-c}{2}}]]] が得られます。" },
          { "kind": "h3", "text": "例題：3-4-5 の三角形" },
          { "kind": "p", "text": "[[a=3]]、[[b=4]]、[[c=5]] が与えられます。近道に代入すると [[r=\\frac{3+4-5}{2}]]、[[r=\\frac{2}{2}]]、[[[\\boxed{r=1}]]]。3-4-5 の三角形の内接円の半径は 1 で、導入の例で [[r=1]] と [[s=6]] から [[K=6]] を得たことと一致します。" },
          { "kind": "h3", "text": "例題：5-12-13 の三角形" },
          { "kind": "p", "text": "[[a=5]]、[[b=12]]、[[c=13]] が与えられます。すると [[r=\\frac{5+12-13}{2}]]、[[r=\\frac{4}{2}]]、[[[\\boxed{r=2}]]]。[[s=\\frac{5+12+13}{2}=15]] と合わせて面積は [[K=2\\times15=30]] となり、脚の公式 [[K=\\frac{5\\times12}{2}=30]] で確認できます。" },
          { "kind": "h3", "text": "内半径の別の公式" },
          { "kind": "p", "text": "この近道は [[[\\boxed{r=\\frac{ab}{a+b+c}}]]] とも書けます。これは無関係の二つ目の公式ではありません。[[K=rs]] と [[K=\\frac{ab}{2}]] から始めるので [[rs=\\frac{ab}{2}]]。[[s=\\frac{a+b+c}{2}]] なので、代入すると [[r\\frac{a+b+c}{2}=\\frac{ab}{2}]] となり、半分を約分して [[r=\\frac{ab}{a+b+c}]] が残ります。[[r=\\frac{a+b-c}{2}]] と一致しなければなりません。3-4-5 で確かめると [[\\frac{3\\times4}{3+4+5}=\\frac{12}{12}=1]] で同じ半径です。代数的に、直角三角形では [[(a+b-c)(a+b+c)=(a+b)^2-c^2=2ab]] なので、二つの形は同一です。" },
          { "kind": "h3", "text": "この内半径の近道はすべての三角形で使えるか？" },
          { "kind": "p", "text": "いいえ。導出は直角に依存していました。一辺 [[r]] の角の正方形が存在するのは、二本の脚が90度で交わるからです。一般の三角形では内半径は [[[\\boxed{r=\\frac{K}{s}}]]] から求めるか、[[r=(s-a)\\tan\\frac{A}{2}]] のように既知の測定に合わせた公式から求めます。[[r=\\frac{a+b-c}{2}]] を直角でない三角形に適用すると、幾何学的な意味のない数が計算されます。" }
        ],
        "imgAlt": "接線分xとyが内半径の公式 r = (a + b - c) / 2 を導く",
        "figcaption": "等しい接線分から a = r + x、b = r + y、c = x + y が得られます。"
      },
      "sec-howto": {
        "h2": "半周から求める直角三角形の面積計算機の使い方",
        "blocks": [
          { "kind": "p", "text": "計算機に必要な入力はちょうど二つで、順序通りに入力します。以下の手順は画面のレイアウトに沿っています。測定の確認から検証済みの結果までです。" },
          { "kind": "p", "text": "計算機の入力はちょうど二つ、内半径 [[r]] と半周 [[s]] です。三辺も、脚も、斜辺も、角度も受け付けません。[[K=r\\times s]] の掛け算は示された通りで完結しています。結果を二度と二で割ってはなりません。" }
        ],
        "steps": [
          "<strong>直角三角形の内半径を求めます。</strong>これは三角形に内接する円の半径です。三辺が分かっている場合は [[r=\\frac{a+b-c}{2}]] で計算します。",
          "<strong>その半周を求めます。</strong>三辺を足して二で割ります：[[s=\\frac{a+b+c}{2}]]。これは全周の半分であり、周囲そのものではありません。",
          "<strong>両方の値が同じ三角形のものであることを確認します。</strong>一つの三角形の内半径と別の三角形の半周では、意味のない積が得られます。",
          "<strong>必要に応じて測定値を互換性のある単位に換算します。</strong>両方の長さは同じ単位でなければなりません。メートルにはメートル、センチメートルにはセンチメートル、混ぜてはいけません。",
          "<strong>最初の入力欄に内半径 r を入力します。</strong>正しい三角形なら、これは二つの値のうち小さい方です。",
          "<strong>二番目の入力欄に半周 s を入力します。</strong>その値が全周ではなく周囲の半分であることを再確認してください。",
          "<strong>Calculate Area をクリックします。</strong>計算機は二つの入力を直接掛けます。",
          "<strong>表示された結果を確認します。</strong>面積を読み、三角形の大きさに対して妥当に見えるか確かめます。",
          "<strong>公式と代入の手順を確認します。</strong>入力した値を埋めた [[K=r\\times s]] が示されます。",
          "<strong>結果が平方単位で表されていることを確認します。</strong>長さの単位同士の積は平方単位になります：m²、cm²、ft² で、入力と対応します。",
          "<strong>次の計算の前に Reset を使います。</strong>両方の欄を消去して、まっさらな状態にします。"
        ]
      },
      "sec-examples": {
        "h2": "内半径と半周による直角三角形の面積の例題",
        "blocks": [
          { "kind": "p", "text": "四つの古典的な直角三角形が完全な連鎖を示します。辺から半周へ、辺から内半径へ、そして一度だけの掛け算です。これらの例では r と s を辺の長さから導きます。計算機自体は r と s を直接受け付けます。" },
          { "kind": "h3", "text": "例 1：3-4-5 の直角三角形" },
          { "kind": "p", "text": "[[a=3]]、[[b=4]]、[[c=5]] が与えられます。手順 1：半周を計算します。[[s=\\frac{3+4+5}{2}]]、[[s=6]]。手順 2：内半径を計算します。[[r=\\frac{3+4-5}{2}]]、[[r=1]]。手順 3：面積を計算します。[[K=1\\times6]]、[[[\\boxed{K=6\\text{ square units}}]]]。脚の公式で検証します：[[K=\\frac{3\\times4}{2}=6]]。" },
          { "kind": "h3", "text": "例 2：5-12-13 の直角三角形" },
          { "kind": "p", "text": "[[a=5]]、[[b=12]]、[[c=13]] が与えられます。半周：[[s=\\frac{5+12+13}{2}=15]]。内半径：[[r=\\frac{5+12-13}{2}=2]]。面積：[[K=2\\times15]]、[[[\\boxed{K=30\\text{ square units}}]]]。検証：[[K=\\frac{5\\times12}{2}=30]]。" },
          { "kind": "h3", "text": "例 3：8-15-17 の直角三角形" },
          { "kind": "p", "text": "[[a=8]]、[[b=15]]、[[c=17]] が与えられます。半周：[[s=\\frac{8+15+17}{2}=20]]。内半径：[[r=\\frac{8+15-17}{2}=3]]。面積：[[K=3\\times20]]、[[[\\boxed{K=60\\text{ square units}}]]]。検証：[[K=\\frac{8\\times15}{2}=60]]。" },
          { "kind": "h3", "text": "例 4：7-24-25 の直角三角形" },
          { "kind": "p", "text": "[[a=7]]、[[b=24]]、[[c=25]] が与えられます。半周：[[s=\\frac{7+24+25}{2}=28]]。内半径：[[r=\\frac{7+24-25}{2}=3]]。面積：[[K=3\\times28]]、[[[\\boxed{K=84\\text{ square units}}]]]。検証：[[K=\\frac{7\\times24}{2}=84]]。" },
          { "kind": "h3", "text": "解いた例の比較" }
        ],
        "table": {
          "headers": ["<tr>\n          <th class=\"border-gray-600 px-4 py-2 text-left\">三角形", "脚 a", "脚 b", "斜辺 c", "内半径 r", "半周 s", "面積 K"],
          "rows": [
            ["3-4-5", "3", "4", "5", "1", "6", "6"],
            ["5-12-13", "5", "12", "13", "2", "15", "30"],
            ["8-15-17", "8", "15", "17", "3", "20", "60"],
            ["7-24-25", "7", "24", "25", "3", "28", "84"]
          ]
        }
      },
      "sec-practical": {
        "h2": "内半径と半周から求める直角三角形の面積の実生活での使い方",
        "blocks": [
          { "kind": "p", "text": "十二の例題が、このページの公式を作業場、現場、工房へ運びます。それぞれが直角三角形の板、部材、断面、単純化されたモデルに名前を付け、内半径と半周を公式に通し、数値の背後にある仮定を述べます。これらは単純化された直角三角形モデルです。実際の窓、屋根、庭、スロープ、帆、土地がすべて正確な直角三角形をなすわけではなく、不規則な物体は公式を適用する前に単純な形に分割しなければなりません。面積は平らな幾何学的表面だけを表します。構造強度、耐荷重、施工の安全性をそれ自体で保証することは決してありません。" },
          { "kind": "h3", "text": "例 1：三角形のガラス窓" },
          { "kind": "p", "text": "三角形のガラス窓の辺は [[a=3\\text{ m}]]、[[b=4\\text{ m}]]、[[c=5\\text{ m}]] です。半周：[[s=\\frac{3+4+5}{2}=6\\text{ m}]]。内半径：[[r=\\frac{3+4-5}{2}=1\\text{ m}]]。面積：[[K=1\\times6]]、[[[\\boxed{K=6\\text{ m}^2}]]]。この結果は、枠の余白を差し引く前の平らな三角形ガラス面を表します。仮定：窓は真の直角三角形です。枠の寸法は別に扱います。" },
          { "kind": "h3", "text": "例 2：鉄製サポートブラケット" },
          { "kind": "p", "text": "三角形の鉄製サポート板の辺は [[a=5\\text{ cm}]]、[[b=12\\text{ cm}]]、[[c=13\\text{ cm}]] です。半周：[[s=\\frac{5+12+13}{2}=15\\text{ cm}]]。内半径：[[r=\\frac{5+12-13}{2}=2\\text{ cm}]]。面積：[[K=2\\times15]]、[[[\\boxed{K=30\\text{ cm}^2}]]]。これは平らな板の面積であり、構造強度を保証するものではありません。仮定：ブラケットの素地は直角三角形に切り出されています。ボルト穴や曲げは除外します。" },
          { "kind": "h3", "text": "例 3：屋根の支え部材" },
          { "kind": "p", "text": "直角三角形の屋根の支え部材の辺は [[a=8\\text{ ft}]]、[[b=15\\text{ ft}]]、[[c=17\\text{ ft}]] です。半周：[[s=\\frac{8+15+17}{2}=20\\text{ ft}]]。内半径：[[r=\\frac{8+15-17}{2}=3\\text{ ft}]]。面積：[[K=3\\times20]]、[[[\\boxed{K=60\\text{ ft}^2}]]]。この公式は平らな三角形の支え部材を測り、材料の見積もりに役立ちます。仮定：部材は直角三角形としてモデル化されています。屋根全体の形状は異なる場合があります。" },
          { "kind": "h3", "text": "例 4：三角形の庭の一区画" },
          { "kind": "p", "text": "単純化された直角三角形の庭の一区画の辺は [[a=7\\text{ m}]]、[[b=24\\text{ m}]]、[[c=25\\text{ m}]] です。半周：[[s=28\\text{ m}]]。内半径：[[r=3\\text{ m}]]。面積：[[K=3\\times28]]、[[[\\boxed{K=84\\text{ m}^2}]]]。この面積は三角形の造園区画の見積もりに役立ちます。芝生やマルチを注文するときなどです。仮定：花壇の境界は直線で直角に交わります。" },
          { "kind": "h3", "text": "例 5：三角形のスロープ断面" },
          { "kind": "p", "text": "単純化されたスロープの側面断面の辺は [[a=9\\text{ m}]]、[[b=12\\text{ m}]]、[[c=15\\text{ m}]] です。半周：[[s=\\frac{9+12+15}{2}=18\\text{ m}]]。内半径：[[r=\\frac{9+12-15}{2}=3\\text{ m}]]。面積：[[K=3\\times18]]、[[[\\boxed{K=54\\text{ m}^2}]]]。これは三角形の側面断面を測るもので、傾斜した歩行面ではありません。仮定：断面は底部に直角の角を持つ形でモデル化されています。" },
          { "kind": "h3", "text": "例 6：合板の切り出し型板" },
          { "kind": "p", "text": "直角三角形の合板の型板の辺は [[a=12\\text{ cm}]]、[[b=16\\text{ cm}]]、[[c=20\\text{ cm}]] です。半周：[[s=24\\text{ cm}]]。内半径：[[r=4\\text{ cm}]]。面積：[[K=4\\times24]]、[[[\\boxed{K=96\\text{ cm}^2}]]]。この計算は切りくずが出る前の平らな材料面積を見積もります。仮定：型板は真の直角三角形です。のこ目の幅や端材は別です。" },
          { "kind": "h3", "text": "例 7：三角形の看板パネル" },
          { "kind": "p", "text": "三角形の看板パネルの辺は [[a=20\\text{ cm}]]、[[b=21\\text{ cm}]]、[[c=29\\text{ cm}]] です。半周：[[s=\\frac{20+21+29}{2}=35\\text{ cm}]]。内半径：[[r=\\frac{20+21-29}{2}=6\\text{ cm}]]。面積：[[K=6\\times35]]、[[[\\boxed{K=210\\text{ cm}^2}]]]。これはパネルの平らな印刷可能面を表します。仮定：パネルの面は平らな直角三角形です。取付金具は除外します。" },
          { "kind": "h3", "text": "例 8：測量区画" },
          { "kind": "p", "text": "単純化された直角三角形の土地の区画の辺は [[a=9\\text{ m}]]、[[b=40\\text{ m}]]、[[c=41\\text{ m}]] です。半周：[[s=45\\text{ m}]]。内半径：[[r=4\\text{ m}]]。面積：[[K=4\\times45]]、[[[\\boxed{K=180\\text{ m}^2}]]]。この公式は測量された三角形区画の面積を計算します。仮定：区画は直角の角を持つ形でモデル化されています。不規則な土地は単純な形に分割する必要があります。" },
          { "kind": "h3", "text": "例 9：三角形の布の帆" },
          { "kind": "p", "text": "直角三角形の布パネルの辺は [[a=15\\text{ ft}]]、[[b=20\\text{ ft}]]、[[c=25\\text{ ft}]] です。半周：[[s=30\\text{ ft}]]。内半径：[[r=5\\text{ ft}]]。面積：[[K=5\\times30]]、[[[\\boxed{K=150\\text{ ft}^2}]]]。結果には縫い目、折り返し、材料の余白は含まれません。仮定：帆は平らにモデル化されています。実際の帆は荷重で曲がります。" },
          { "kind": "h3", "text": "例 10：工業用サポートパネル" },
          { "kind": "p", "text": "直角三角形の工業用パネルの辺は [[a=11\\text{ m}]]、[[b=60\\text{ m}]]、[[c=61\\text{ m}]] です。半周：[[s=66\\text{ m}]]。内半径：[[r=5\\text{ m}]]。面積：[[K=5\\times66]]、[[[\\boxed{K=330\\text{ m}^2}]]]。この結果は平らな幾何学的パネルを表すもので、構造性能ではありません。仮定：パネルは直角三角形としてモデル化されています。厚みや固定具は別の問題です。" },
          { "kind": "h3", "text": "例 11：倉庫の屋根端部" },
          { "kind": "p", "text": "単純化された倉庫の屋根端部の辺は [[a=13\\text{ ft}]]、[[b=84\\text{ ft}]]、[[c=85\\text{ ft}]] です。半周：[[s=91\\text{ ft}]]。内半径：[[r=6\\text{ ft}]]。面積：[[K=6\\times91]]、[[[\\boxed{K=546\\text{ ft}^2}]]]。この結果は三角形の端部を見積もります。外装の価格を出すときなどです。仮定：切妻端部は直角三角形としてモデル化されています。" },
          { "kind": "h3", "text": "例 12：大型の製作パネル" },
          { "kind": "p", "text": "直角三角形の製作パネルの辺は [[a=28\\text{ cm}]]、[[b=45\\text{ cm}]]、[[c=53\\text{ cm}]] です。半周：[[s=\\frac{28+45+53}{2}=63\\text{ cm}]]。内半径：[[r=\\frac{28+45-53}{2}=10\\text{ cm}]]。面積：[[K=10\\times63]]、[[[\\boxed{K=630\\text{ cm}^2}]]]。この方法は、パネルの平らな三角形面積を、その円と境界の測定値から直接計算します。仮定：パネルの辺は直線で、直角に交わります。" },
          { "kind": "h3", "text": "実用例の比較" }
        ],
        "table": {
          "headers": ["<tr>\n          <th class=\"border-gray-600 px-4 py-2 text-left\">実用例", "脚 a", "脚 b", "斜辺 c", "内半径 r", "半周 s", "計算された面積", "測定単位"],
          "rows": [
            ["ガラス窓", "3", "4", "5", "1", "6", "6", "m²"],
            ["鉄製ブラケット", "5", "12", "13", "2", "15", "30", "cm²"],
            ["屋根の支え", "8", "15", "17", "3", "20", "60", "ft²"],
            ["庭の一区画", "7", "24", "25", "3", "28", "84", "m²"],
            ["スロープ断面", "9", "12", "15", "3", "18", "54", "m²"],
            ["合板の型板", "12", "16", "20", "4", "24", "96", "cm²"],
            ["看板パネル", "20", "21", "29", "6", "35", "210", "cm²"],
            ["測量区画", "9", "40", "41", "4", "45", "180", "m²"],
            ["布の帆", "15", "20", "25", "5", "30", "150", "ft²"],
            ["工業用パネル", "11", "60", "61", "5", "66", "330", "m²"],
            ["倉庫の屋根端", "13", "84", "85", "6", "91", "546", "ft²"],
            ["製作パネル", "28", "45", "53", "10", "63", "630", "cm²"]
          ]
        }
      },
      "sec-legs-comparison": {
        "h2": "なぜ内半径の公式は脚の公式と同じ面積を与えるのか？",
        "blocks": [
          { "kind": "p", "text": "異なる二つの公式、一つの三角形、一つの面積です。[[K=rs]] と直角三角形の標準面積 [[K=\\frac{ab}{2}]] から始めると、[[[\\boxed{rs=\\frac{ab}{2}}]]] が強制されます。両辺は異なる幾何学的情報を用いて同じ囲まれた面を測っています。一方は内接円と境界を読み、他方は二本の垂直な脚を読みます。" },
          { "kind": "h3", "text": "3-4-5 の三角形を使った数値比較" },
          { "kind": "p", "text": "内半径法：[[r=1]]、[[s=6]] なので [[K=1\\times6=6]]。脚の方法：[[K=\\frac{3\\times4}{2}=6]]。答えが一致するのは、内半径と半周が脚と同じ辺の情報を符号化しているからです。[[r=\\frac{a+b-c}{2}]] と [[s=\\frac{a+b+c}{2}]] は [[a]]、[[b]]、[[c]] から作られるので、その積は脚が記述する面積を再構成しなければなりません。ここでの一致は偶然ではなく代数です。" },
          { "kind": "h3", "text": "内半径法が役立つのはどんなとき？" },
          { "kind": "p", "text": "r と s が既に手元にあるときに内半径法が勝ちます。内接円についての幾何問題は内半径を直接与えます。円の測定で面積を表す必要がある証明では [[K=rs]] を自然に使います。競技問題では設定の一部として半周が与えられることがよくあります。また検算として、独立した二つの方法で面積を計算すれば、一つの方法では隠れてしまう計算ミスを捕まえられます。いずれも要点は入力の便宜です。手元にある測定から始めましょう。" },
          { "kind": "h3", "text": "脚の公式が単純なのはどんなとき？" },
          { "kind": "p", "text": "二本の垂直な脚が既に分かっている場合は、[[K=\\frac{ab}{2}]] がたいてい直接的です。一度の掛け算と一度の半分、r や s の中間計算は不要です。先に内半径と半周を導いてから掛けるのは、何も変わらないのに二手順を足すことになります。半周法が常にもっとも簡単な道とは限りません。内接円や境界が自然な出発点のときは最良の道、脚が目の前にあるときは回り道です。" }
        ]
      },
      "sec-heron": {
        "h2": "ヘロンの公式と面積 = 内半径 × 半周の違いは？",
        "blocks": [
          { "kind": "p", "text": "ヘロンの公式は三辺の長さから面積を計算します。[[[\\boxed{K=\\sqrt{s(s-a)(s-b)(s-c)}}]]]。半周は必要ですが内半径は不要で、任意の正しい三角形に使えます。内半径の公式 [[[\\boxed{K=rs}]]] は三辺の代わりに内半径と半周を必要とします。違いは入力であって幾何学ではありません。どちらも同じ囲まれた面積を返します。二つの公式は [[r=\\frac{K}{s}]] で結ばれているからです。三辺が分かっていて円のデータがないときはヘロンの公式が自然な選択、内接円が問題の一部なら内半径の公式が自然です。" },
          { "kind": "h3", "text": "解いた比較" },
          { "kind": "p", "text": "3-4-5 の三角形を使います。ヘロンの公式：[[s=6]]、[[K=\\sqrt{6(6-3)(6-4)(6-5)}]]、[[K=\\sqrt{6\\times3\\times2\\times1}]]、[[[\\boxed{K=6}]]]。内半径の公式：[[K=1\\times6]]、[[[\\boxed{K=6}]]]。答えが一致するのは、ヘロンの式が同じ三つの三角形への分割を通して [[r\\times s]] に簡略化されるからです。[[s(s-a)(s-b)(s-c)]] の平方根は、r と s が同じ三角形から来る限り [[rs]] に等しくなります。ただし二つの道具を取り違えないでください。ヘロンの公式は内半径を求めず、内半径の近道 [[r=\\frac{a+b-c}{2}]] は直角三角形専用です。" }
        ]
      },
      "sec-consistency": {
        "h2": "内半径と半周が妥当かどうか確かめる方法",
        "blocks": [
          { "kind": "p", "text": "計算機は二つの値を受け取って掛けますが、その積が直角三角形の面積になるのは、両方の値が同じ三角形を表すときに限ります。以下の検査で正しい入力と偽物を分けます。" },
          { "kind": "h3", "text": "基本の入力条件" },
          { "kind": "p", "text": "両方の入力が正でなければなりません。[[r>0]] と [[s>0]]。長さはゼロにも負にもなれないので、正でない入力に幾何学的な意味はありません。ゼロは三角形を面積のない線に押しつぶします。負の値は存在しません。この検査に落ちた入力は、測り直すか導き直します。" },
          { "kind": "h3", "text": "半周は内半径より大きくなければならない" },
          { "kind": "p", "text": "正しい三角形では、半周は内半径を大きく上回ります。正の脚での [[K=rs]] と [[K=\\frac{ab}{2}]]、そして内接円が三角形の内部に収まる幾何学から、[[s]] は常に [[r]] より明らかに大きいです。3-4-5 の三角形では 6 対 1、5-12-13 では 15 対 2 です。値は三辺の正しい組にも対応しなければならないので、この比較は簡易フィルターであり、検証の全部ではありません。半周より大きい内半径は、どの三角形からも来ません。" },
          { "kind": "h3", "text": "直角三角形の厳密な整合性検査" },
          { "kind": "p", "text": "より厳しい検査には、直角三角形は [[[\\boxed{\\frac{r}{s}\\leq3-2\\sqrt{2}}]]]、およそ [[[\\boxed{\\frac{r}{s}\\leq0.1716}]]] を満たさなければなりません。考え方は単純です。与えられた r と s から、二本の脚は [[a+b=s+r]] と [[ab=2rs]] から作られる二次方程式の正の解でなければならず、その二次方程式は判別式が非負のときにだけ実解を持ちます。判別式の条件は簡略化してちょうどこの上限になります。3-4-5 で確認すると [[\\frac{1}{6}\\approx0.1667\\leq0.1716]] で妥当です。これは慎重な作業のための任意の追加であり、初心者の計算に必須の部分ではありません。" },
          { "kind": "h3", "text": "入力が不整合なときは何が起きるか？" },
          { "kind": "p", "text": "二つの正の数を掛ければ常に数値の結果が出ますが、それらが同じ直角三角形の内半径と半周を表す証明にはなりません。一つの三角形の r と別の三角形の s を組み合わせると、計算がいかにきちんと見えても幾何学的な意味のない積が得られます。計算機の実装が検証動作についてテストされているのでなければ、関係を検査すると思い込んではいけません。上の検査は自分で実行し、辺が分かっている場合は辺から r と s を再計算し、脚の公式で面積を突き合わせます。" }
        ]
      },
      "sec-units": {
        "h2": "測定単位が内半径と半周の計算に与える影響",
        "blocks": [
          { "kind": "p", "text": "内半径も半周も長さなので、他の長さの測定と同じ単位規則に従います。答えの平方単位は二つの長さの単位の積から来るので、単位の一貫性がすべてです。" },
          { "kind": "h3", "text": "なぜ両方の入力が互換性のある単位でなければならないのか？" },
          { "kind": "p", "text": "積 [[K=r\\times s]] は長さに長さを掛けます。r がセンチメートルで s がメートルの場合、積は二つの尺度を混ぜ、数に明確な意味がありません。先に換算して両方の入力を一つの単位にそろえます。メートル、センチメートル、ミリメートル、フィート、インチ、ヤードのいずれかで、両方とも同じ単位です。計算機に単位選択があるのはこのためです。数値を入れる前に設定してください。" },
          { "kind": "h3", "text": "単位換算の例題" },
          { "kind": "p", "text": "[[r=10\\text{ cm}]] と [[s=1\\text{ m}]] が与えられます。半周を換算します。[[1\\text{ m}=100\\text{ cm}]]。すると [[K=10\\times100]]、[[[\\boxed{K=1000\\text{ cm}^2}]]]。あるいは内半径を換算します。[[10\\text{ cm}=0.1\\text{ m}]]、すると [[K=0.1\\times1]]、[[[\\boxed{K=0.1\\text{ m}^2}]]]。二つの答えは同じ面積を表します。[[0.1\\text{ m}^2=1000\\text{ cm}^2]] だからです。先に換算し、次に掛ける。どちらの単位の道を通っても正しい場所に着きます。" },
          { "kind": "h3", "text": "なぜ結果は平方単位で表されるのか？" },
          { "kind": "p", "text": "面積は表面を覆う単位正方形を数えます。[[\\text{cm}\\times\\text{cm}=\\text{cm}^2]]、[[\\text{m}\\times\\text{m}=\\text{m}^2]]、[[\\text{ft}\\times\\text{ft}=\\text{ft}^2]]。単位は常に長さの単位の二乗です。二つの長さの積は正方形の個数だからです。面積を 1000 cm のように単なる長さで報告するのは分類の誤りです。1000 cm は長さ、1000 cm² は表面です。" },
          { "kind": "h3", "text": "小数値の扱い" },
          { "kind": "p", "text": "公式は小数も変更なしに扱います。[[r=2.5]] と [[s=8.4]] が与えられます。[[K=2.5\\times8.4]]、[[[\\boxed{K=21\\text{ square units}}]]]。整数も、小数も、細かな作業場の測定も、すべて同じ掛け算を通ります。計算の途中は完全な精度を保ち、測定が正当化する正確さに合わせて最終答だけを丸めてください。" }
        ]
      },
      "sec-mistakes": {
        "h2": "半周から直角三角形の面積を計算するときのよくある間違い",
        "blocks": [
          { "kind": "p", "text": "この分野の誤答は、計算ミスではなくラベルの取り違えにほぼ毎回さかのぼります。以下に十六の間違いを挙げます。繰り返し現れるものばかりで、それぞれ原因と対策を付けました。" },
          { "kind": "h3", "text": "1. 半周と全周の取り違え" },
          { "kind": "p", "text": "[[s=6]] の場所に [[P=12]] を入れると答えが二倍になります。6 ではなく [[1\\times12=12]] です。日常言語が周囲と言うのに、公式がその半分を求めるために起きる間違いです。対策：入力する前に境界の合計を必ず半分にし、入力した s が周囲より小さいことを確認します。" },
          { "kind": "h3", "text": "2. 内半径の代わりに外半径を使う" },
          { "kind": "p", "text": "3-4-5 の三角形の外半径は [[R=\\frac{5}{2}=2.5]] です。これを使うと [[2.5\\times6=15]] となり、真の面積のほぼ三倍です。二つの円が半径という言葉を共有するために起きる間違いです。対策：半径が三角形の内部の円、三辺すべてに接する円に属することを確認します。頂点を通る円ではありません。" },
          { "kind": "h3", "text": "3. 半周を正しく計算し忘れる" },
          { "kind": "p", "text": "二辺だけを足す、あるいは足す前に各辺を二で割ると、誤った s が得られます。3-4-5 で 3 + 4 を足して割ると 3.5 になり、[[1\\times3.5=3.5]] は無意味です。対策：まず三辺を足し、次に一度だけ割ります。[[s=\\frac{a+b+c}{2}]]。" },
          { "kind": "h3", "text": "4. 最終結果をもう一度二で割る" },
          { "kind": "p", "text": "[[K=1\\times6=6]] の後、余分な半分で 3 になります。この習慣は脚の公式から来ます。そこでは割り算が明示的です。対策：半分はすでに半周に吸収されていることを思い出します。[[K=r\\times s]] は完結しています。" },
          { "kind": "h3", "text": "5. 直角三角形の誤った内半径公式を使う" },
          { "kind": "p", "text": "[[r=\\frac{c-a-b}{2}]] や [[r=\\frac{a+b}{2}]] を推測すると誤った半径が得られます。3-4-5 では [[\\frac{5-3-4}{2}=-1]] は長さですらありません。対策：a と b を脚、c を斜辺として、ちょうどその配置で [[r=\\frac{a+b-c}{2}]] を使います。" },
          { "kind": "h3", "text": "6. 直角三角形の内半径の近道を普通の三角形に適用する" },
          { "kind": "p", "text": "この近道は直角に依存しているので、一般の三角形に使うと幾何学的な意味のない数が計算されます。対策：直角でない三角形では、[[r=\\frac{K}{s}]] か、既知の測定に合わせた公式から内半径を求めます。[[r=\\frac{a+b-c}{2}]] からは決して求めません。" },
          { "kind": "h3", "text": "7. 別の三角形の内半径と半周を入力する" },
          { "kind": "p", "text": "3-4-5 の三角形から r = 1、5-12-13 の三角形から s = 15 を取ると 15 になりますが、これは実在する三角形を表さない積です。異なる例題や異なる図から値を写すときに起きる間違いです。対策：掛ける前に、両方の入力を同じ三角形から導出または測定します。" },
          { "kind": "h3", "text": "8. センチメートルとメートルの混用" },
          { "kind": "p", "text": "換算せずに r = 10 cm と s = 1 m を掛けても、明確な何物も得られません。対策：先に一つの単位に換算します。[[1\\text{ m}=100\\text{ cm}]]、すると [[K=10\\times100=1000\\text{ cm}^2]]。" },
          { "kind": "h3", "text": "9. 結果を線の単位で報告する" },
          { "kind": "p", "text": "6 m² の面積は 6 m ではありません。この間違いはたいてい、入力の単位を二乗せずに写すことから来ます。対策：数と一緒に平方単位を毎回書きます。m²、cm²、ft² です。" },
          { "kind": "h3", "text": "10. ゼロや負の測定値を入力する" },
          { "kind": "p", "text": "長さは正です。ゼロは三角形を面積のない線に押しつぶし、負の長さにここでの幾何学的な意味はありません。対策：入力を測り直すか導き直します。計算の前に正でない値を却下します。" },
          { "kind": "h3", "text": "11. 内心と外心の取り違え" },
          { "kind": "p", "text": "内心は角の二等分線の交点、外心は辺の垂直二等分線の交点です。直角三角形では外心は斜辺の中点にあり、まったく別の点です。取り違えると誤った半径を測ります。対策：内心 [[I]] は三角形の内部にあり、辺から等距離にあります。頂点からではありません。" },
          { "kind": "h3", "text": "12. 内接円が二辺だけに接すると思い込む" },
          { "kind": "p", "text": "角に押し込まれた円は二辺に接しますが、それは内接円ではありません。内接円は三辺すべてに接し、面積の証明には三つの接点が必要です。対策：半径を内半径として扱う前に、三つの接触点を確かめます。各辺に一つずつです。" },
          { "kind": "h3", "text": "13. 半径が各接辺と垂直に交わることを忘れる" },
          { "kind": "p", "text": "証明の共通高さの議論は [[r\\perp a]]、[[r\\perp b]]、[[r\\perp c]] に依存しています。内心から辺への傾いた線分は r より長く、高さにはなれません。対策：内半径は辺への垂線に沿って測ります。対角線に沿っては決して測りません。" },
          { "kind": "h3", "text": "14. 内半径と直径の取り違え" },
          { "kind": "p", "text": "内接円の全幅を r として入れると、半径が二倍になり面積も二倍になります。3-4-5 の三角形で 1 の代わりに 2 を入れると [[2\\times6=12]] です。対策：内半径は中心から一辺まで、円の全幅の半分です。" },
          { "kind": "h3", "text": "15. ヘロンの公式の誤用" },
          { "kind": "p", "text": "よくある失敗は、平方根の忘れ、加算記号で [[s(s+a)(s+b)(s+c)]] と書く、全周を公式に入れることです。3-4-5 で根を省くと 6 ではなく 36 になります。対策：[[K=\\sqrt{s(s-a)(s-b)(s-c)}]] で、半周、引く記号、根をすべて所定の位置に。" },
          { "kind": "h3", "text": "16. 数値の結果が入力の幾何学的整合性を自動的に証明すると思い込む" },
          { "kind": "p", "text": "二つの正の数は何でも掛かるので、計算機は常に何かを返します。その何かが直角三角形の面積になるのは、r と s が本当に一つであるときに限ります。対策：整合性検査を実行し、可能なら辺から r と s を再計算し、数値を信じる前に脚の公式で突き合わせます。" },
          { "kind": "h3", "text": "誤り対正解：具体的な例" },
          { "kind": "p", "text": "[[r=1]]、[[s=6]] を使います。正解：[[K=1\\times6=6]]。二でもう一度割る誤り：[[K=\\frac{1\\times6}{2}=3]] で、これは誤りです。半分はすでに半周の内側にあるからです。半周 6 の代わりに全周 12 を入れる誤り：[[K=1\\times12=12]] で、真の面積の二倍です。三つの場合とも計算は自信ありげに見えます。三つを見分けるのは幾何学だけです。" }
        ]
      },
      "sec-verify": {
        "h2": "直角三角形の面積が正しいか確かめる方法",
        "blocks": [
          { "kind": "p", "text": "六つの独立した検査を、すべて 3-4-5 の三角形で示します（[[a=3]]、[[b=4]]、[[c=5]]、[[r=1]]、[[s=6]]、[[K=6]]）。異なる経路同士の一致は、答えが正しいことの最も強い証拠です。宿題でも実測でも同じです。" },
          { "kind": "h3", "text": "方法 1：主公式を確認する" },
          { "kind": "p", "text": "[[K=r\\times s]] を新たに実行します。[[K=1\\times6=6]]。数値を入れ直して二度目の実行をすると、打ち間違いや誤った桁を捕まえます。" },
          { "kind": "h3", "text": "方法 2：三辺から半周を計算する" },
          { "kind": "p", "text": "辺から [[s=\\frac{a+b+c}{2}]] を再計算します。[[s=\\frac{3+4+5}{2}=6]]。再計算した s が入力と違えば、入力が誤っていて積をやり直さなければなりません。" },
          { "kind": "h3", "text": "方法 3：直角三角形から内半径を計算する" },
          { "kind": "p", "text": "[[r=\\frac{a+b-c}{2}]] を再計算します。[[r=\\frac{3+4-5}{2}=1]]。入力した r と食い違えば、その半径は別の三角形か、誤って適用された公式から来ています。" },
          { "kind": "h3", "text": "方法 4：標準の脚の公式で検証する" },
          { "kind": "p", "text": "[[K=\\frac{ab}{2}]] を計算します。[[K=\\frac{3\\times4}{2}=6]]。この経路はまったく異なる入力を使うので、[[rs]] との一致は入力と計算の両方を裏付けます。" },
          { "kind": "h3", "text": "方法 5：ヘロンの公式で検証する" },
          { "kind": "p", "text": "[[K=\\sqrt{s(s-a)(s-b)(s-c)}]] を計算します。[[K=\\sqrt{6\\times3\\times2\\times1}=6]]。ヘロンの公式は辺と半周を一緒に使うので、他の検査が見逃しそうな辺のラベルミスを捕まえます。" },
          { "kind": "h3", "text": "方法 6：三平方の定理を確認する" },
          { "kind": "p", "text": "[[a^2+b^2=c^2]] を確認します。[[3^2+4^2=9+16=25=5^2]]。これは他のすべての計算の背後にある辺の特定を確認します。誤った斜辺は、辺のラベルが誤っていて r、s、K すべてを作り直す必要があることを意味します。" }
        ]
      },
      "sec-applications": {
        "h2": "内半径と半周の公式の実用的な応用",
        "blocks": [
          { "kind": "p", "text": "同じ二入力の形は、三角形の板や部材を測る必要があり、内接円のデータが都合のよい出発点になる場所ならどこにでも現れます。ガラス職人は縁の長さから窓を測り、製作職人はブラケットの素地の脚を読み、測量士は土地の角を三つの直線にまとめます。それらの辺から内半径と半周が出て、一度の掛け算が面積に名前を付けます。以下の四つのパネルが、異なる尺度でその形を示します。ガラス窓（6 m²）、屋根の支え（60 ft²）、庭の一区画（84 m²）、鉄板（30 cm²）で、それぞれ内半径、半周、結果の面積がラベル付けされています。" }
        ],
        "imgAlt": "四つのパネル：ガラス窓6 m2、屋根の支え60 ft2、庭の一区画84 m2、鉄板30 cm2",
        "figcaption": "四つの実使用：ガラス窓、屋根の支え、庭の一区画、鉄板。"
      },
      "sec-conclusion": {
        "h2": "二つの測定、一つの積",
        "blocks": [
          { "kind": "p", "text": "内半径と半周があれば十分です。掛ければ、囲まれた表面に名前が付きます。三つの三角形の証明は、掛け算の後に割り算が来ない理由を示し、接線分の議論は直角三角形が内半径の近道を持つ理由を示し、脚の公式とヘロンの公式はすべての答えを検査するために待機しています。" },
          { "kind": "p", "text": "作業の習慣は単純です。両方の入力が同じ三角形を表すことを確認し、単位をそろえ、小数は最後まで丸めず、別の方法で検証します。この習慣とともに、[[K=r\\times s]] は幾何学で最も頼れる面積計算の一つです。" }
        ]
      },
      "sec-related": {
        "h2": "関連する直角三角形の計算機を見る",
        "blocks": [
          { "kind": "p", "text": "測るものが違えば、使う計算機も違います。" }
        ]
      },
      "sec-faq": {
        "h2": "よくある質問",
        "blocks": []
      }
    }
  }
};
