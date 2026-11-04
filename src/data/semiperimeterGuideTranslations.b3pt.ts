// semiperimeterGuideTranslations.b3pt.ts: Right Triangle Semiperimeter Guide (Page 26 of 45) translation for Portuguese (pt).
export const B3_PT = {
  "pt": {
    "tocHeading": "Navegação pelas Seções",
    "tocItems": {
      "sec-intro": "Como Calcular o Semiperímetro de um Triângulo Retângulo",
      "sec-geometry": "O Que É um Triângulo Retângulo?",
      "sec-meaning": "O Que É o Semiperímetro de um Triângulo Retângulo?",
      "sec-formula": "Fórmula do Semiperímetro do Triângulo Retângulo",
      "sec-calculator": "Como Usar a Calculadora de Semiperímetro do Triângulo Retângulo",
      "sec-examples": "Exemplos Passo a Passo do Semiperímetro do Triângulo Retângulo",
      "sec-practical": "Aplicações na Vida Real do Semiperímetro do Triângulo Retângulo",
      "sec-inradius": "Como o Semiperímetro Se Relaciona com o Inraio de um Triângulo Retângulo?",
      "sec-heron": "Como o Semiperímetro É Usado na Fórmula de Heron?",
      "sec-vs-perimeter": "Qual É a Diferença Entre Perímetro e Semiperímetro?",
      "sec-missing-side": "Como Calcular o Semiperímetro Quando Falta um Lado",
      "sec-properties": "Propriedades Importantes do Semiperímetro do Triângulo Retângulo",
      "sec-units": "Como Entender as Unidades de Medida nos Cálculos de Semiperímetro",
      "sec-mistakes": "Erros Comuns ao Calcular o Semiperímetro do Triângulo Retângulo",
      "sec-verify": "Como Verificar se Sua Resposta do Semiperímetro Está Correta",
      "sec-related": "Explore Calculadoras Relacionadas de Triângulo Retângulo",
      "sec-faq": "Perguntas Frequentes",
      "sec-conclusion": "Metade da Fronteira, Compreensão Total"
    },
    "sections": {
      "sec-intro": {
        "h2": "Como Calcular o Semiperímetro de um Triângulo Retângulo",
        "blocks": [
          { "kind": "p", "text": "Some os três lados de um triângulo retângulo e divida o total por dois." },
          { "kind": "p", "text": "Esse é todo o cálculo, e esta calculadora o executa para qualquer triângulo retângulo depois que você informa os dois catetos e a hipotenusa. São necessárias três medidas de lado porque o triângulo tem três arestas, e a hipotenusa precisa ser incluída: ela é uma dessas três arestas, mesmo sem tocar o ângulo reto. O total é dividido por dois porque o semiperímetro é definido como exatamente metade do perímetro total, uma quantidade que aparece o tempo todo na geometria do triângulo." },
          { "kind": "p", "text": "Um exemplo rápido mostra a ideia. Dados [[a=3]], [[b=4]] e [[c=5]]:" },
          { "kind": "p", "text": "[[[s=\\frac{3+4+5}{2}]]]" },
          { "kind": "p", "text": "[[[s=\\frac{12}{2}]]]" },
          { "kind": "p", "text": "[[[\\boxed{s=6\\text{ units}}]]]" },
          { "kind": "p", "text": "O perímetro total é 12 unidades, então seu semiperímetro é 6 unidades. Observe que o semiperímetro é uma medida linear, não uma medida de área: é um comprimento, informado em metros, pés ou unidades simples, nunca em unidades quadradas. Ele se torna útil sempre que uma fórmula pede metade do perímetro, o que acontece na fórmula de Heron para a área, na relação do inraio e em várias demonstrações geométricas em que o perímetro total só atrapalharia." }
        ]
      },
      "sec-geometry": {
        "h2": "O Que É um Triângulo Retângulo?",
        "blocks": [
          { "kind": "p", "text": "Antes de qualquer divisão por dois, os três lados precisam ser rotulados corretamente. Os símbolos abaixo permanecem fixos em todo o guia, e a calculadora usa os mesmos nomes." },
          { "kind": "h3", "text": "Definição de Triângulo Retângulo" },
          { "kind": "p", "text": "Um triângulo retângulo é um triângulo que contém um ângulo interno de exatamente 90 graus. Ele tem três vértices, três lados, dois ângulos agudos e um ângulo reto, geralmente marcado com um pequeno quadrado. Os dois lados que formam o ângulo reto são os catetos; o lado oposto ao ângulo reto é a hipotenusa. Como os ângulos de qualquer triângulo somam 180 graus, [[A+B+C=180^\\circ]], e com [[C=90^\\circ]] segue-se que [[[\\boxed{A+B=90^\\circ}]]]: os dois ângulos agudos são complementares, de modo que conhecer um determina o outro. Acertar essa figura é importante porque a fórmula do semiperímetro trata cada lado como uma aresta da fronteira, e um lado mal rotulado corrompe o total antes mesmo de começar a divisão." },
          { "kind": "h3", "text": "O Que São os Dois Catetos?" },
          { "kind": "p", "text": "O cateto [[a]] e o cateto [[b]] são os dois lados que se encontram no vértice do ângulo reto, perpendiculares entre si. Qualquer um deles pode ser desenhado na horizontal ou na vertical, dependendo da orientação do triângulo; o que os define é o canto de 90 graus que formam, não a direção deles na página. Eles diferem da hipotenusa em posição e em comprimento: cada cateto toca o ângulo reto, e cada cateto é menor que a hipotenusa. No trabalho com semiperímetro, o papel deles é simples: ambos são arestas da fronteira, então ambos entram na soma que será dividida pela metade." },
          { "kind": "h3", "text": "O Que É a Hipotenusa?" },
          { "kind": "p", "text": "A hipotenusa é o lado oposto ao ângulo reto, sempre o lado mais longo do triângulo. Ela nunca forma o ângulo reto; estende-se diante dele, unindo as extremidades distantes dos dois catetos. Difere dos catetos em posição e em comprimento: os catetos se encontram a 90 graus, enquanto a hipotenusa encontra cada cateto em um ângulo agudo. Ela completa a fronteira triangular, e é por isso que precisa ser incluída no cálculo do semiperímetro. Quando os dois catetos são conhecidos, o teorema de Pitágoras a recupera: [[[\\boxed{c=\\sqrt{a^2+b^2}}]]]." },
          { "kind": "h3", "text": "Como Identificar os Rótulos Corretos dos Lados" },
          { "kind": "p", "text": "[[a]] e [[b]] são os dois lados que se encontram a 90 graus, e [[c]] é o lado oposto ao ângulo reto. Em um triângulo retângulo não degenerado, [[c]] é o lado mais longo. A marca do ângulo reto indica qual lado é [[c]]: é aquele que não toca esse vértice. Uma verificação rápida de ordenação ajuda: ordene os três números, e o maior precisa desempenhar o papel de [[c]]. Se o maior lado não estiver diante do canto quadrado, os rótulos estão errados, e o semiperímetro construído sobre eles também estará errado." },
          { "kind": "h3", "text": "Por Que o Semiperímetro Depende dos Três Lados?" },
          { "kind": "p", "text": "O semiperímetro deriva do perímetro completo, e o perímetro completo conta cada aresta da fronteira. Mesmo que [[a]] e [[b]] sejam perpendiculares, a hipotenusa continua fazendo parte da fronteira externa do triângulo: é a aresta que fecha a forma. Excluir [[c]] não dá um semiperímetro menor; dá uma quantidade diferente e errada. Para [[a=3]], [[b=4]] e [[c=5]], deixar a hipotenusa de fora produz [[(3+4)/2=3.5]], enquanto o semiperímetro verdadeiro é [[(3+4+5)/2=6]]. As 2,5 unidades que faltam são a parte da hipotenusa, e nenhuma fórmula correta pode ignorá-la." }
        ],
        "imgAlt": "Triângulo retângulo ABC com catetos a e b, hipotenusa c, ângulo reto em C, mostrando P = a+b+c e s = (a+b+c)/2",
        "figcaption": "Triângulo ABC: os catetos a e b se encontram no ângulo reto C, a hipotenusa c fecha a fronteira, e s = (a + b + c) / 2 é metade do perímetro."
      },
      "sec-meaning": {
        "h2": "O Que É o Semiperímetro de um Triângulo Retângulo?",
        "blocks": [
          { "kind": "h3", "text": "Definição de Semiperímetro" },
          { "kind": "p", "text": "Semiperímetro é exatamente metade do perímetro total de um triângulo. Se [[P]] é a distância completa ao redor do triângulo, então o semiperímetro [[s]] é [[[\\boxed{s=\\frac{P}{2}}]]]. Para um triângulo retângulo, o perímetro total é [[P=a+b+c]], então a definição se torna [[[\\boxed{s=\\frac{a+b+c}{2}}]]]. Os três comprimentos de lado são somados antes da divisão: a soma reúne toda a fronteira, e a divisão por dois a reduz à metade. Nada fica de fora e nada é contado duas vezes." },
          { "kind": "h3", "text": "Por Que Se Chama Semiperímetro?" },
          { "kind": "p", "text": "O nome se explica sozinho quando é desmontado. <em>Semi</em> significa metade, e <em>perímetro</em> significa o comprimento total da fronteira. Juntos, semiperímetro significa metade do perímetro. A letra [[s]] é o símbolo matemático padrão, e ela aparece em muitas fórmulas de triângulos justamente porque metades de fronteiras aparecem com tanta frequência. Quando uma fórmula pede [[s]], ela está pedindo esse único número: metade de [[a+b+c]]." },
          { "kind": "h3", "text": "O Semiperímetro Representa um Caminho Físico de Meia Fronteira?" },
          { "kind": "p", "text": "Este é um ponto sutil que vale a pena acertar. O semiperímetro é metade do total numérico dos três comprimentos de lado, mas não descreve necessariamente uma rota física contínua que cubra metade da fronteira do triângulo. Percorrer 6 unidades ao longo das arestas de um triângulo 3-4-5, por exemplo, poderia significar percorrer os dois catetos (3 + 4 = 7 já é demais) ou um cateto mais parte da hipotenusa; não existe um único caminho natural até a metade. O semiperímetro é principalmente uma medida geométrica derivada, um valor intermediário conveniente que as fórmulas usam, e não uma distância que você mediria a passos no chão." },
          { "kind": "h3", "text": "O Semiperímetro É um Comprimento ou uma Área?" },
          { "kind": "p", "text": "O semiperímetro é uma medida unidimensional: um comprimento. Se os comprimentos dos lados estão em metros, [[s]] está em metros; em centímetros, está em centímetros; em pés, em pés; em polegadas, em polegadas. Ele nunca deve ser expresso em unidades quadradas. A divisão por dois muda o tamanho do número, não sua dimensão: dividir um comprimento pela metade continua resultando em um comprimento. Confundir [[s]] com uma área é um dos erros mais comuns de iniciantes, e manter as unidades em ordem é a maneira mais simples de evitá-lo." },
          { "kind": "h3", "text": "O Semiperímetro É Sempre Maior que o Lado Mais Longo?" },
          { "kind": "p", "text": "Sim, para todo triângulo válido e não degenerado, e a desigualdade triangular mostra o porquê. Todo triângulo satisfaz [[a+b>c]]: os dois lados menores juntos excedem o maior. Some [[c]] aos dois lados e [[a+b+c>2c]] segue-se; divida por dois e o resultado é [[[\\boxed{s>c}]]]. Para um triângulo retângulo, isso significa que o semiperímetro é sempre maior que a hipotenusa. Para o 3-4-5, [[s=6]] excede [[c=5]]. Isso rende uma verificação útil de sanidade: se o semiperímetro calculado for menor que a hipotenusa, os rótulos dos lados ou a aritmética estão errados." }
        ]
      },
      "sec-formula": {
        "h2": "Fórmula do Semiperímetro do Triângulo Retângulo",
        "blocks": [
          { "kind": "p", "text": "Duas formas da mesma fórmula são usadas, dependendo do que se conhece. A forma compacta parte do perímetro total:" },
          { "kind": "p", "text": "[[[\\boxed{s=\\frac{P}{2}}]]]" },
          { "kind": "p", "text": "A forma expandida parte dos três lados:" },
          { "kind": "p", "text": "[[[\\boxed{s=\\frac{a+b+c}{2}}]]]" },
          { "kind": "h3", "text": "Entendendo Cada Variável" },
          { "kind": "p", "text": "[[s]] é o semiperímetro, a resposta que está sendo calculada. [[P]] é o perímetro total, o comprimento completo da fronteira. [[a]] é o primeiro cateto e [[b]] o segundo cateto, os dois lados perpendiculares. [[c]] é a hipotenusa, o lado mais longo, oposto ao ângulo reto. Nunca troque [[P]] por [[s]]: um é a fronteira inteira, o outro é metade dela." },
          { "kind": "h3", "text": "Por Que Dividimos por Dois?" },
          { "kind": "p", "text": "A divisão é o que torna a quantidade um <em>semi</em>perímetro em vez de um perímetro. Tome [[a=3]], [[b=4]] e [[c=5]]. Primeiro calcule o perímetro completo: [[P=3+4+5]], então [[P=12]]. Depois divida por dois: [[s=12/2]], obtendo [[[\\boxed{s=6}]]]. Matematicamente, a divisão reescala o total da fronteira para o valor pela metade que fórmulas como a de Heron esperam. Pular essa etapa responde a uma pergunta diferente: o perímetro total, não o semiperímetro." },
          { "kind": "h3", "text": "Por Que Não Podemos Usar Apenas os Dois Catetos?" },
          { "kind": "p", "text": "Porque os catetos sozinhos não são toda a fronteira. A abordagem incorreta [[s=(3+4)/2]] dá 3,5, um número sem significado geométrico para este triângulo: ela ignora a hipotenusa, que é uma aresta real da forma. A abordagem correta soma os três lados primeiro: [[s=(3+4+5)/2]], obtendo [[[\\boxed{s=6}]]]. Um atalho tentador é dividir cada lado pela metade e depois somar, [[1.5+2+2.5=6]]: a aritmética funciona aqui porque a divisão se distribui sobre a adição, mas isso obscurece a estrutura da fórmula e convida a erros. Some primeiro, depois divida uma vez." },
          { "kind": "h3", "text": "Como Perímetro e Semiperímetro Se Relacionam?" },
          { "kind": "p", "text": "São a mesma medida em duas escalas. Dobrar o semiperímetro recupera o perímetro, e reduzir o perímetro à metade recupera o semiperímetro:" },
          { "kind": "p", "text": "[[[\\boxed{P=2s}]]]" },
          { "kind": "p", "text": "[[[\\boxed{s=\\frac{P}{2}}]]]" },
          { "kind": "p", "text": "Qualquer um dos valores pode ser recuperado quando o outro é conhecido. Se um problema diz que o perímetro é 30, o semiperímetro é imediatamente 15; se um cálculo resulta em [[s=20]], o perímetro total é 40. Essa relação de mão dupla também é uma ferramenta de verificação: depois de calcular [[s]] a partir dos lados, dobrá-lo precisa reproduzir a soma dos lados." }
        ]
      },
      "sec-calculator": {
        "h2": "Como Usar a Calculadora de Semiperímetro do Triângulo Retângulo",
        "blocks": [
          { "kind": "p", "text": "A calculadora desta página tem um único trabalho: recebe os três comprimentos de lado de um triângulo retângulo e devolve o semiperímetro, mostrando cada etapa do trabalho. As etapas abaixo correspondem exatamente à interface existente." },
          { "kind": "p", "text": "<strong>Passo 1: Localize a Calculadora de Semiperímetro.</strong> Ela fica perto do topo da página, abaixo do título H1, com três entradas rotuladas." },
          { "kind": "p", "text": "<strong>Passo 2: Identifique o cateto a.</strong> Escolha um dos dois lados que formam o ângulo reto. Qualquer um dos lados perpendiculares pode ser [[a]]." },
          { "kind": "p", "text": "<strong>Passo 3: Identifique o cateto b.</strong> O outro lado perpendicular passa a ser [[b]]." },
          { "kind": "p", "text": "<strong>Passo 4: Identifique a hipotenusa c.</strong> O lado mais longo, oposto ao ângulo reto, é [[c]]. Ordenar as três medidas e colocar a maior neste campo evita o erro de entrada mais comum." },
          { "kind": "p", "text": "<strong>Passo 5: Digite o primeiro cateto.</strong> Digite o valor de [[a]] no campo Cateto a." },
          { "kind": "p", "text": "<strong>Passo 6: Digite o segundo cateto.</strong> Digite o valor de [[b]] no campo Cateto b." },
          { "kind": "p", "text": "<strong>Passo 7: Digite a hipotenusa.</strong> Digite o valor de [[c]] no campo Hipotenusa c." },
          { "kind": "p", "text": "<strong>Passo 8: Selecione as unidades de medida apropriadas.</strong> Cada entrada tem seu próprio seletor de unidade. Os três lados precisam usar unidades compatíveis antes de serem somados; misturar metros com centímetros corrompe a soma." },
          { "kind": "p", "text": "<strong>Passo 9: Clique em Calcular Semiperímetro.</strong> A ferramenta soma os três lados e divide o total por dois." },
          { "kind": "p", "text": "<strong>Passo 10: Revise o semiperímetro exibido.</strong> O resultado aparece com sua unidade, por exemplo [[[\\boxed{s=6\\text{ units}}]]] para o triângulo 3-4-5." },
          { "kind": "p", "text": "<strong>Passo 11: Confira as etapas da solução.</strong> A calculadora mostra a substituição e a divisão, para que você acompanhe a aritmética linha por linha." },
          { "kind": "p", "text": "<strong>Passo 12: Verifique se a saída é metade do perímetro total.</strong> Dobre o resultado: para o 3-4-5, [[2\\times6=12]], que corresponde a [[3+4+5]]." },
          { "kind": "p", "text": "<strong>Passo 13: Use Redefinir ao começar um novo cálculo.</strong> O botão Redefinir limpa as três entradas para que o próximo triângulo comece do zero." },
          { "kind": "h3", "text": "O Que Cada Entrada Representa?" },
          { "kind": "p", "text": "As três entradas correspondem às três arestas da fronteira. Cateto a e Cateto b recebem os dois lados perpendiculares; Hipotenusa c recebe o lado mais longo. A calculadora soma exatamente o que você digita e divide o total pela metade, então o papel de cada campo é fixo: trocar um valor de cateto para o campo da hipotenusa muda a soma e produz um semiperímetro errado." },
          { "kind": "h3", "text": "Por Que as Unidades de Medida São Importantes?" },
          { "kind": "p", "text": "O semiperímetro é calculado somando três comprimentos, e a adição exige unidades compatíveis. Somar 3 metros a 40 centímetros sem conversão dá um total sem sentido. O seletor de unidade de cada entrada permite declarar a unidade que você digitou; escolha seletores que descrevam as medidas reais para que a adição combine grandezas iguais." },
          { "kind": "h3", "text": "Entendendo a Exibição do Resultado" },
          { "kind": "p", "text": "A exibição do resultado mostra o semiperímetro com sua unidade linear. Por trás dela, a calculadora executou exatamente duas operações: somou os três lados e dividiu o total por dois. Nenhum outro cálculo está envolvido, e a ferramenta não calcula área ou inraio por conta própria; essas fórmulas são explicações de apoio neste guia, não saídas extras da calculadora." },
          { "kind": "h3", "text": "Entendendo as Etapas da Solução" },
          { "kind": "p", "text": "O painel de etapas da solução repete o cálculo: os valores dos lados informados, o total deles, a divisão por dois e o resultado final. Esse trabalho visível é a maneira mais rápida de pegar um erro de digitação: se uma etapa mostra 4 onde você queria 40, o erro fica óbvio antes de a resposta ser usada em outro lugar." }
        ]
      },
      "sec-examples": {
        "h2": "Exemplos Passo a Passo do Semiperímetro do Triângulo Retângulo",
        "blocks": [
          { "kind": "p", "text": "Os quatro exemplos abaixo mantêm os casos resolvidos existentes e expandem suas explicações. Cada um substitui os três lados, soma-os, divide por dois e então verifica a resposta." },
          { "kind": "h3", "text": "Exemplo 1: Triângulo Retângulo 3-4-5" },
          { "kind": "p", "text": "Dados [[a=3,\\;b=4,\\;c=5]], a fórmula é [[s=\\frac{a+b+c}{2}]]. Substitua: [[s=\\frac{3+4+5}{2}]]. Some: [[s=\\frac{12}{2}]]. O resultado final é [[[\\boxed{s=6\\text{ units}}]]]. Verificação: [[P=2s=12]], que corresponde à soma direta [[3+4+5]]. O resultado está correto porque cada aresta da fronteira foi contada exatamente uma vez antes da divisão." },
          { "kind": "h3", "text": "Exemplo 2: Triângulo Retângulo 5-12-13" },
          { "kind": "p", "text": "Dados [[a=5,\\;b=12,\\;c=13]]: [[s=\\frac{5+12+13}{2}]], então [[s=\\frac{30}{2}]], obtendo [[[\\boxed{s=15\\text{ units}}]]]. O perímetro total é 30, e metade de 30 é 15. Como conferência, [[5^2+12^2=13^2]] confirma o ângulo reto, então os rótulos dos lados são confiáveis." },
          { "kind": "h3", "text": "Exemplo 3: Triângulo Retângulo 8-15-17" },
          { "kind": "p", "text": "Dados [[a=8,\\;b=15,\\;c=17]]: [[s=\\frac{8+15+17}{2}]], então [[s=\\frac{40}{2}]], obtendo [[[\\boxed{s=20\\text{ units}}]]]. Observe o padrão nos exemplos: à medida que o triângulo cresce, o semiperímetro cresce junto com os lados, sempre exatamente metade do perímetro." },
          { "kind": "h3", "text": "Exemplo 4: Medidas de Lado Decimais" },
          { "kind": "p", "text": "Dados [[a=2.5,\\;b=6,\\;c=6.5]]: [[s=\\frac{2.5+6+6.5}{2}]], então [[s=\\frac{15}{2}]], obtendo [[[\\boxed{s=7.5\\text{ units}}]]]. Valores decimais não mudam a fórmula: aplica-se a mesma sequência de somar e depois dividir. A conferência pitagórica [[2.5^2+6^2=6.5^2]] confirma que esses lados realmente formam um triângulo retângulo." }
        ],
        "table": {
          "headers": ["Triângulo", "Cateto a", "Cateto b", "Hipotenusa c", "Perímetro total P", "Semiperímetro s"],
          "rows": [
            ["3-4-5", "3", "4", "5", "12", "6"],
            ["5-12-13", "5", "12", "13", "30", "15"],
            ["8-15-17", "8", "15", "17", "40", "20"],
            ["2.5-6-6.5", "2.5", "6", "6.5", "15", "7.5"]
          ]
        },
        "closingParagraphs": ["A tabela mostra o padrão com clareza: quando as três dimensões aumentam, o semiperímetro aumenta proporcionalmente, sempre acompanhando exatamente metade do perímetro total. Comparar as linhas também revela que triângulos semelhantes escalam juntos; dobre cada lado e o semiperímetro também dobra."],
        "imgAlt": "Triângulo 3-4-5 com etapas do cálculo: some os lados para obter 12, divida por 2, semiperímetro s igual a 6",
        "figcaption": "Some os três lados para obter P = 12 e divida por 2: o semiperímetro s = 6."
      },
      "sec-practical": {
        "h2": "Aplicações na Vida Real do Semiperímetro do Triângulo Retângulo",
        "blocks": [
          { "kind": "p", "text": "Um aviso antes dos exemplos: o semiperímetro normalmente não é a quantidade usada para comprar metade do acabamento ou da cerca ao redor de um objeto triangular. Seu papel real é como medida intermediária geométrica, o degrau até o inraio, as conferências de área e os cálculos de projeto. Cada exemplo abaixo é um modelo geométrico simplificado de triângulo retângulo, e cada um calcula o semiperímetro ao lado do perímetro total, da área e do inraio para que as relações fiquem visíveis." },
          { "kind": "h3", "text": "Exemplo 1: Janela Triangular com Inserto Decorativo Circular" },
          { "kind": "p", "text": "Um modelo de janela triangular tem [[a=3\\text{ m},\\;b=4\\text{ m},\\;c=5\\text{ m}]]. Semiperímetro: [[s=\\frac{3+4+5}{2}=6\\text{ m}]]; perímetro total [[P=12\\text{ m}]]. Área [[K=\\frac{3\\times4}{2}=6\\text{ m}^2]] e inraio [[r=\\frac{K}{s}=\\frac{6}{6}=1\\text{ m}]]. O semiperímetro é o que torna o inraio calculável: ele converte três comprimentos de lado no único número que liga a área ao raio do círculo tangente aos três lados do modelo triangular idealizado." },
          { "kind": "h3", "text": "Exemplo 2: Suporte Metálico com Folga Circular" },
          { "kind": "p", "text": "Um suporte em triângulo retângulo tem [[a=5\\text{ cm},\\;b=12\\text{ cm},\\;c=13\\text{ cm}]]. Então [[s=\\frac{5+12+13}{2}=15\\text{ cm}]] e [[P=30\\text{ cm}]]. A área [[K=\\frac{5\\times12}{2}=30\\text{ cm}^2]] dá o inraio [[r=\\frac{30}{15}=2\\text{ cm}]]. Esse valor descreve o raio da circunferência inscrita no triângulo idealizado e pode orientar estudos geométricos de folga para um recorte circular. Ele, por si só, não determina a segurança estrutural." },
          { "kind": "h3", "text": "Exemplo 3: Oitão de Telhado com Projeto de Respiradouro Circular" },
          { "kind": "p", "text": "Um modelo simplificado de oitão em triângulo retângulo tem [[a=6\\text{ ft},\\;b=8\\text{ ft},\\;c=10\\text{ ft}]]. Semiperímetro [[s=\\frac{6+8+10}{2}=12\\text{ ft}]]; perímetro [[P=24\\text{ ft}]]. Área [[K=\\frac{6\\times8}{2}=24\\text{ ft}^2]] e inraio [[r=\\frac{24}{12}=2\\text{ ft}]]. O semiperímetro transforma os três comprimentos de aresta do oitão no raio da circunferência inscrita do modelo simplificado. A instalação real do respiradouro exige medidas separadas de construção e folga além dessa geometria." },
          { "kind": "h3", "text": "Exemplo 4: Projeto de Jardim Triangular" },
          { "kind": "p", "text": "Um modelo de jardim em triângulo retângulo tem [[a=7\\text{ m},\\;b=24\\text{ m},\\;c=25\\text{ m}]]. Então [[s=\\frac{7+24+25}{2}=28\\text{ m}]] e [[P=56\\text{ m}]]. A área [[K=\\frac{7\\times24}{2}=84\\text{ m}^2]] produz o inraio [[r=\\frac{84}{28}=3\\text{ m}]]. A circunferência inscrita é o maior círculo que cabe dentro do triângulo idealizado tocando os três lados, útil para posicionar um canteiro ou chafariz circular na fase de projeto." },
          { "kind": "h3", "text": "Exemplo 5: Painel Triangular de Fabricação CNC" },
          { "kind": "p", "text": "Um painel triangular tem [[a=8\\text{ cm},\\;b=15\\text{ cm},\\;c=17\\text{ cm}]]. Semiperímetro [[s=\\frac{8+15+17}{2}=20\\text{ cm}]]; perímetro [[P=40\\text{ cm}]]. Área [[K=\\frac{8\\times15}{2}=60\\text{ cm}^2]] e inraio [[r=\\frac{60}{20}=3\\text{ cm}]]. Semiperímetro e inraio servem aqui como valores geométricos de referência na modelagem CAD, por exemplo ao posicionar um elemento circular em relação às arestas do painel." },
          { "kind": "h3", "text": "Exemplo 6: Placa Triangular com Emblema Circular" },
          { "kind": "p", "text": "Um painel de placa tem [[a=9\\text{ in},\\;b=12\\text{ in},\\;c=15\\text{ in}]]. Então [[s=\\frac{9+12+15}{2}=18\\text{ in}]] e [[P=36\\text{ in}]]. A área [[K=\\frac{9\\times12}{2}=54\\text{ in}^2]] dá o inraio [[r=\\frac{54}{18}=3\\text{ in}]]. O inraio fornece uma referência matemática para o maior emblema circular inscrito, sujeita às margens reais e às restrições de montagem da placa." },
          { "kind": "h3", "text": "Exemplo 7: Chapa Triangular Industrial" },
          { "kind": "p", "text": "Uma chapa em triângulo retângulo tem [[a=9\\text{ cm},\\;b=40\\text{ cm},\\;c=41\\text{ cm}]]. Semiperímetro [[s=\\frac{9+40+41}{2}=45\\text{ cm}]]; perímetro [[P=90\\text{ cm}]]. Área [[K=\\frac{9\\times40}{2}=180\\text{ cm}^2]] e inraio [[r=\\frac{180}{45}=4\\text{ cm}]]. O semiperímetro apoia cálculos geométricos para um painel industrial idealizado, como dimensionar um ressalto circular que precisa ficar afastado das três arestas." },
          { "kind": "h3", "text": "Exemplo 8: Projeto de Vitral Triangular" },
          { "kind": "p", "text": "Uma seção de vidro em triângulo retângulo tem [[a=12\\text{ in},\\;b=16\\text{ in},\\;c=20\\text{ in}]]. Então [[s=\\frac{12+16+20}{2}=24\\text{ in}]] e [[P=48\\text{ in}]]. A área [[K=\\frac{12\\times16}{2}=96\\text{ in}^2]] produz o inraio [[r=\\frac{96}{24}=4\\text{ in}]]. A relação é direta: o semiperímetro reduz a fronteira à metade, e dividir a área por essa meia fronteira dá o raio do círculo inscrito para o leiaute do projeto." },
          { "kind": "h3", "text": "Exemplo 9: Lote Triangular Levantado por Topografia" },
          { "kind": "p", "text": "Um modelo simplificado de lote em triângulo retângulo tem [[a=20\\text{ m},\\;b=21\\text{ m},\\;c=29\\text{ m}]]. Semiperímetro [[s=\\frac{20+21+29}{2}=35\\text{ m}]]; perímetro [[P=70\\text{ m}]]. Área [[K=\\frac{20\\times21}{2}=210\\text{ m}^2]] e inraio [[r=\\frac{210}{35}=6\\text{ m}]]. Em um modelo simplificado de levantamento topográfico, o semiperímetro serve como entrada compacta para conferências de área e inraio, por exemplo ao verificar uma área de lote calculada com a fórmula de Heron." },
          { "kind": "h3", "text": "Exemplo 10: Estrutura Triangular Arquitetônica" },
          { "kind": "p", "text": "Uma estrutura arquitetônica em triângulo retângulo tem [[a=12\\text{ m},\\;b=35\\text{ m},\\;c=37\\text{ m}]]. Então [[s=\\frac{12+35+37}{2}=42\\text{ m}]] e [[P=84\\text{ m}]]. A área [[K=\\frac{12\\times35}{2}=210\\text{ m}^2]] dá o inraio [[r=\\frac{210}{42}=5\\text{ m}]]. Esse valor pode apoiar a modelagem matemática de um elemento circular dentro da estrutura triangular, como uma janela redonda centrada no incentro." },
          { "kind": "h3", "text": "Exemplo 11: Grande Projeto de Piso Triangular" },
          { "kind": "p", "text": "Uma seção de piso em triângulo retângulo tem [[a=28\\text{ m},\\;b=45\\text{ m},\\;c=53\\text{ m}]]. Semiperímetro [[s=\\frac{28+45+53}{2}=63\\text{ m}]]; perímetro [[P=126\\text{ m}]]. Área [[K=\\frac{28\\times45}{2}=630\\text{ m}^2]] e inraio [[r=\\frac{630}{63}=10\\text{ m}]]. Aqui o semiperímetro conecta as medidas dos lados com a geometria da circunferência inscrita do modelo: um número faz a ponte entre a fronteira e o maior círculo que cabe dentro." },
          { "kind": "h3", "text": "Exemplo 12: Chapa de Suporte Triangular Industrial" },
          { "kind": "p", "text": "Uma grande chapa em triângulo retângulo tem [[a=33\\text{ cm},\\;b=56\\text{ cm},\\;c=65\\text{ cm}]]. Então [[s=\\frac{33+56+65}{2}=77\\text{ cm}]] e [[P=154\\text{ cm}]]. A área [[K=\\frac{33\\times56}{2}=924\\text{ cm}^2]] produz o inraio [[r=\\frac{924}{77}=12\\text{ cm}]]. Essas medidas alimentam um modelo geométrico para um encaixe circular ou elemento interno de projeto, com o semiperímetro como o valor intermediário que libera o inraio." }
        ],
        "table": {
          "headers": ["Aplicação prática", "Cateto a", "Cateto b", "Hipotenusa c", "Perímetro P", "Semiperímetro s", "Área K", "Inraio r", "Unidade"],
          "rows": [
            ["Janela triangular", "3", "4", "5", "12", "6", "6", "1", "m"],
            ["Suporte metálico", "5", "12", "13", "30", "15", "30", "2", "cm"],
            ["Respiradouro do oitão", "6", "8", "10", "24", "12", "24", "2", "ft"],
            ["Projeto de jardim", "7", "24", "25", "56", "28", "84", "3", "m"],
            ["Painel CNC", "8", "15", "17", "40", "20", "60", "3", "cm"],
            ["Emblema da placa", "9", "12", "15", "36", "18", "54", "3", "in"],
            ["Chapa industrial", "9", "40", "41", "90", "45", "180", "4", "cm"],
            ["Vitral", "12", "16", "20", "48", "24", "96", "4", "in"],
            ["Lote levantado", "20", "21", "29", "70", "35", "210", "6", "m"],
            ["Estrutura arquitetônica", "12", "35", "37", "84", "42", "210", "5", "m"],
            ["Projeto de piso", "28", "45", "53", "126", "63", "630", "10", "m"],
            ["Chapa de suporte", "33", "56", "65", "154", "77", "924", "12", "cm"]
          ]
        },
        "closingParagraphs": ["Alguns lembretes valem para cada linha acima. Cada aplicação é um modelo geométrico simplificado, não uma especificação de construção: as dimensões reais precisam de verificação separada, a resistência estrutural não pode ser lida a partir do semiperímetro, e aberturas circulares reais podem exigir folgas adicionais de fabricação. O semiperímetro é um valor intermediário matemático, o inraio é o raio da circunferência inscrita, e a circunferência inscrita toca os três lados."]
      },
      "sec-inradius": {
        "h2": "Como o Semiperímetro Se Relaciona com o Inraio de um Triângulo Retângulo?",
        "blocks": [
          { "kind": "p", "text": "Esta é uma das seções mais importantes do artigo, porque o inraio é a principal razão de o semiperímetro existir como quantidade nomeada. A circunferência inscrita é o maior círculo que cabe dentro de um triângulo tocando os três lados, e seu raio é chamado de inraio, representado por [[r]]." },
          { "kind": "h3", "text": "Relação entre Área e Semiperímetro" },
          { "kind": "p", "text": "Para qualquer triângulo, a área, o inraio e o semiperímetro estão ligados por uma única fórmula compacta:" },
          { "kind": "p", "text": "[[[\\boxed{K=rs}]]]" },
          { "kind": "p", "text": "onde [[K]] é a área do triângulo, [[r]] é o inraio e [[s]] é o semiperímetro. Reorganizada, ela resolve o inraio:" },
          { "kind": "p", "text": "[[[\\boxed{r=\\frac{K}{s}}]]]" },
          { "kind": "p", "text": "Conhecer o semiperímetro e a área, portanto, permite calcular o inraio diretamente: divida a área pelo semiperímetro. Este é o benefício prático do semiperímetro. Ele comprime três comprimentos de lado em um número que, junto com a área, revela o círculo inscrito." },
          { "kind": "h3", "text": "Fórmula Especial do Inraio para Triângulos Retângulos" },
          { "kind": "p", "text": "Para um triângulo retângulo, a área é [[K=\\frac{ab}{2}]] e o semiperímetro é [[s=\\frac{a+b+c}{2}]]. Substituir ambos em [[r=\\frac{K}{s}]] dá:" },
          { "kind": "p", "text": "[[[r=\\frac{ab/2}{(a+b+c)/2}]]]" },
          { "kind": "p", "text": "Simplificando:" },
          { "kind": "p", "text": "[[[\\boxed{r=\\frac{ab}{a+b+c}}]]]" },
          { "kind": "p", "text": "Existe também uma fórmula equivalente para triângulos retângulos que evita a área por completo:" },
          { "kind": "p", "text": "[[[\\boxed{r=\\frac{a+b-c}{2}}]]]" },
          { "kind": "p", "text": "Essas duas expressões são equivalentes para um triângulo retângulo por causa da relação pitagórica: a álgebra se reduz quando [[a^2+b^2=c^2]] é aplicada. Qualquer uma das formas dá o mesmo inraio; a segunda costuma ser mais rápida à mão." },
          { "kind": "h3", "text": "Exemplo 3-4-5 Totalmente Resolvido" },
          { "kind": "p", "text": "Dados [[a=3,\\;b=4,\\;c=5]]: semiperímetro [[s=\\frac{3+4+5}{2}=6]], área [[K=\\frac{3\\times4}{2}=6]], inraio [[r=\\frac{6}{6}]], então [[[\\boxed{r=1}]]]. Verifique com o atalho: [[r=\\frac{3+4-5}{2}]], obtendo [[[\\boxed{r=1}]]]. Os dois métodos produzem a mesma resposta porque são a mesma matemática escrita de duas maneiras: um passa pela área, o outro a cancela algebricamente." },
          { "kind": "h3", "text": "Por Que o Semiperímetro É Importante para os Cálculos da Circunferência Inscrita?" },
          { "kind": "p", "text": "O semiperímetro é a ponte entre a fronteira do triângulo e sua circunferência inscrita. Projetistas o usam ao dimensionar folgas circulares dentro de peças triangulares, ao posicionar elementos circulares inscritos em projetos geométricos, ao cotar desenhos de engenharia e ao desenvolver demonstrações matemáticas que relacionam área e raio. O inraio também se conecta de volta à verificação da área: se [[K]], [[r]] e [[s]] não satisfazem [[K=rs]], algo na cadeia está errado. Esta calculadora não calcula o inraio automaticamente; ela fornece o semiperímetro, e as fórmulas acima continuam a partir daí." }
        ],
        "imgAlt": "Triângulo retângulo 3-4-5 com circunferência inscrita de raio 1; semiperímetro s = 6, área K = 6, r = K/s",
        "figcaption": "A circunferência inscrita toca os três lados; com s = 6 e K = 6, o inraio r = K / s = 1."
      },
      "sec-heron": {
        "h2": "Como o Semiperímetro É Usado na Fórmula de Heron?",
        "blocks": [
          { "kind": "p", "text": "A fórmula de Heron calcula a área de um triângulo a partir de seus três comprimentos de lado, sem exigir uma altura fornecida separadamente. O semiperímetro é seu ingrediente central: a fórmula é escrita em termos de [[s]] e das diferenças entre [[s]] e cada lado." },
          { "kind": "p", "text": "[[[\\boxed{K=\\sqrt{s(s-a)(s-b)(s-c)}}]]]" },
          { "kind": "p", "text": "Aqui [[K]] é a área do triângulo, [[s]] é o semiperímetro, e [[a]], [[b]] e [[c]] são os três comprimentos de lado." },
          { "kind": "h3", "text": "Por Que a Fórmula de Heron Usa o Semiperímetro?" },
          { "kind": "p", "text": "O semiperímetro é calculado primeiro porque ele centraliza a expressão: cada fator [[s-a]], [[s-b]] e [[s-c]] mede quanto a meia fronteira excede um lado. Multiplicar esses três excessos pelo próprio [[s]] e extrair a raiz quadrada converte informação de fronteira em área. A fórmula funciona para qualquer triângulo válido, não apenas triângulos retângulos, e é por isso que o semiperímetro conquista seu lugar como ferramenta geométrica geral, não como curiosidade do triângulo retângulo." },
          { "kind": "h3", "text": "Exemplo 3-4-5 Totalmente Resolvido" },
          { "kind": "p", "text": "Dados [[a=3,\\;b=4,\\;c=5]], primeiro calcule o semiperímetro: [[s=\\frac{3+4+5}{2}=6]]. Substitua na fórmula de Heron: [[K=\\sqrt{6(6-3)(6-4)(6-5)}]]. Simplifique: [[K=\\sqrt{6\\times3\\times2\\times1}]], então [[K=\\sqrt{36}]], obtendo [[[\\boxed{K=6\\text{ square units}}]]]." },
          { "kind": "h3", "text": "Verifique o Resultado Usando a Fórmula de Área do Triângulo Retângulo" },
          { "kind": "p", "text": "A fórmula direta de área do triângulo retângulo é [[K=\\frac{ab}{2}]]. Substituindo: [[K=\\frac{3\\times4}{2}]], obtendo [[[\\boxed{K=6\\text{ square units}}]]]. As duas fórmulas produzem a mesma área, e esse é exatamente o ponto: a fórmula de Heron, construída sobre o semiperímetro, confirma de forma independente o cálculo mais simples." },
          { "kind": "h3", "text": "Por Que Isso É Útil?" },
          { "kind": "p", "text": "Triângulos retângulos têm uma fórmula direta de área mais simples, então a fórmula de Heron raramente é o caminho mais rápido até a área. Seu valor está em conferir cálculos de área, em entender como só os comprimentos dos lados determinam a área, em resolver problemas baseados em comprimentos de lado em que nenhuma altura é dada, e em verificar soluções matemáticas por um caminho independente. Sempre que duas fórmulas não relacionadas concordam sobre a área, a confiança na resposta aumenta muito." }
        ],
        "imgAlt": "Fórmula de Heron aplicada a um triângulo 3-4-5: semiperímetro 6 dá área 6, verificada por K = ab/2",
        "figcaption": "Cinco etapas: lados, semiperímetro s = 6, substituição em Heron, área K = 6, conferência com K = ab / 2."
      },
      "sec-vs-perimeter": {
        "h2": "Qual É a Diferença Entre Perímetro e Semiperímetro?",
        "blocks": [
          { "kind": "p", "text": "As duas quantidades descrevem a mesma fronteira em escalas diferentes, e confundi-las é um dos erros mais frequentes no trabalho com triângulos. Esta seção traça a linha com clareza." },
          { "kind": "h3", "text": "O Perímetro Mede a Fronteira Total" },
          { "kind": "p", "text": "O perímetro é o comprimento total ao redor do triângulo:" },
          { "kind": "p", "text": "[[[\\boxed{P=a+b+c}]]]" },
          { "kind": "p", "text": "Ele representa a caminhada completa ao redor das três arestas. Para o triângulo 3-4-5, [[P=12]] unidades." },
          { "kind": "h3", "text": "O Semiperímetro É Metade do Total" },
          { "kind": "p", "text": "O semiperímetro é metade do perímetro numérico:" },
          { "kind": "p", "text": "[[[\\boxed{s=\\frac{a+b+c}{2}}]]]" },
          { "kind": "p", "text": "Para o mesmo triângulo 3-4-5, [[s=6]] unidades. Mesmo triângulo, mesma fronteira, mas o número é reduzido à metade porque as fórmulas que o consomem, a fórmula de Heron e a relação do inraio, são escritas para o valor pela metade." },
          { "kind": "h3", "text": "Comparação Numérica" },
          { "kind": "p", "text": "Use um triângulo retângulo 6-8-10. Perímetro: [[P=6+8+10]], então [[[\\boxed{P=24}]]]. Semiperímetro: [[s=\\frac{24}{2}]], então [[[\\boxed{s=12}]]]. O perímetro responde \u201cqual é o comprimento de toda a fronteira?\u201d; o semiperímetro responde \u201cqual é o valor de meia fronteira de que minha fórmula precisa?\u201d" },
          { "kind": "h3", "text": "Quando Você Deve Usar Cada Medida?" },
          { "kind": "p", "text": "Use o perímetro quando o trabalho diz respeito ao comprimento total da fronteira: emoldurar uma forma triangular, cercar um lote triangular, estimar materiais de borda ou medir acabamentos de aresta. Use o semiperímetro quando o trabalho é matemático: fórmula de Heron, cálculos de inraio, relações área-raio, demonstrações geométricas avançadas ou verificação independente de um resultado de área. A regra prática é simples: trabalho físico de fronteira usa [[P]]; trabalho de fórmula usa [[s]]." },
          { "kind": "h3", "text": "O Semiperímetro É Metade da Área?" },
          { "kind": "p", "text": "Não, e essa confusão precisa de uma correção firme. Semiperímetro é uma medida linear: para o 3-4-5, são 6 unidades. Área é uma medida bidimensional: para o 3-4-5, são 6 unidades quadradas. Os números coincidem aqui por acidente, mas as quantidades diferem em natureza. Dividir um comprimento pela metade nunca produz uma área, assim como dividir um perímetro pela metade nunca produz uma superfície." }
        ],
        "table": {
          "headers": ["Medida", "Símbolo", "Fórmula", "Significado", "Unidade", "Aplicação comum"],
          "rows": [
            ["Perímetro", "[[P]]", "[[P=a+b+c]]", "Comprimento total da fronteira", "Linear (m, ft, in)", "Cercas, molduras, acabamentos"],
            ["Semiperímetro", "[[s]]", "[[s=(a+b+c)/2]]", "Metade do comprimento da fronteira", "Linear (m, ft, in)", "Fórmula de Heron, inraio"],
            ["Área", "[[K]]", "[[K=ab/2]]", "Superfície delimitada", "Square (m², ft², in²)", "Cobertura de superfície, material"]
          ]
        }
      },
      "sec-missing-side": {
        "h2": "Como Calcular o Semiperímetro Quando Falta um Lado",
        "blocks": [
          { "kind": "p", "text": "A calculadora desta página exige os três comprimentos de lado: ela não pode dividir pela metade um total que não consegue somar. Se um lado é desconhecido, calcule-o primeiro com o teorema de Pitágoras e prossiga com o semiperímetro normalmente." },
          { "kind": "h3", "text": "Encontrando a Hipotenusa" },
          { "kind": "p", "text": "Quando os dois catetos são conhecidos, use [[[\\boxed{c=\\sqrt{a^2+b^2}}]]]. Exemplo: [[a=6]] e [[b=8]]. Então [[c=\\sqrt{6^2+8^2}]], [[c=\\sqrt{100}]], obtendo [[[\\boxed{c=10}]]]. Agora o semiperímetro segue: [[s=\\frac{6+8+10}{2}]], então [[[\\boxed{s=12}]]]." },
          { "kind": "h3", "text": "Encontrando um Cateto Desconhecido" },
          { "kind": "p", "text": "Quando a hipotenusa e um cateto são conhecidos, use [[[\\boxed{a=\\sqrt{c^2-b^2}}]]]. Exemplo: [[c=13]] e [[b=12]]. Então [[a=\\sqrt{169-144}]], obtendo [[[\\boxed{a=5}]]]. Depois [[s=\\frac{5+12+13}{2}]], então [[[\\boxed{s=15}]]]." },
          { "kind": "h3", "text": "Por Que o Lado Desconhecido Precisa Ser Encontrado Primeiro?" },
          { "kind": "p", "text": "O semiperímetro exige o total completo dos três lados, e um lado desconhecido não pode simplesmente ser ignorado ou tratado como zero. A forma da hipotenusa de Pitágoras soma quadrados; a forma do cateto os subtrai; aplicar a errada inventa um lado que não existe. Uma vez recuperado o lado desconhecido, a <a href=\"/right-triangle-side-calculator/\" class=\"text-primary hover:underline\">Calculadora de Lado do Triângulo Retângulo</a> pode conferir o valor, e o cálculo do semiperímetro prossegue em terreno firme. Essas etapas de lado desconhecido são métodos educativos de apoio, não entradas extras na calculadora existente." }
        ]
      },
      "sec-properties": {
        "h2": "Propriedades Importantes do Semiperímetro do Triângulo Retângulo",
        "blocks": [
          { "kind": "p", "text": "O semiperímetro se comporta de forma previsível. Essas propriedades servem tanto como verificações mentais rápidas quanto como ferramentas no raciocínio geométrico." },
          { "kind": "h3", "text": "O Semiperímetro É Maior que a Hipotenusa" },
          { "kind": "p", "text": "Para todo triângulo válido, [[a+b>c]]. Somar [[c]] aos dois lados dá [[a+b+c>2c]], e dividir por dois produz [[[\\boxed{s>c}]]]. O semiperímetro sempre excede o lado mais longo. Se um cálculo devolve [[s]] menor que [[c]], os rótulos ou a aritmética estão errados." },
          { "kind": "h3", "text": "O Semiperímetro É Menor que a Soma dos Catetos" },
          { "kind": "p", "text": "A desigualdade triangular também dá [[c<a+b]]. Somar [[a+b]] aos dois lados produz [[a+b+c<2(a+b)]], e reduzir à metade dá [[[\\boxed{s<a+b}]]]. Então o semiperímetro fica estritamente entre a hipotenusa e a soma dos catetos: [[c<s<a+b]]. Para o 3-4-5: [[5<6<7]]. Esse sanduíche é uma verificação rápida de plausibilidade para qualquer resposta." },
          { "kind": "h3", "text": "Dobrar Cada Lado Dobra o Semiperímetro" },
          { "kind": "p", "text": "Escale o triângulo 3-4-5 por dois: [[a_2=2a,\\;b_2=2b,\\;c_2=2c]] dá os lados 6, 8 e 10. Então [[s_2=\\frac{2a+2b+2c}{2}]], logo [[[\\boxed{s_2=2s}]]]. Numericamente, [[s_2=12=2\\times6]]. O semiperímetro é uma medida linear, então a escala uniforme o escala pelo mesmo fator." },
          { "kind": "h3", "text": "Triplicar Cada Lado Triplica o Semiperímetro" },
          { "kind": "p", "text": "A mesma linearidade vale para qualquer fator de escala. Triplique cada lado e a soma triplica; reduzir a soma triplicada à metade dá três vezes o semiperímetro original: [[[\\boxed{s_2=3s}]]]. Em geral, escalar todos os lados por [[k]] escala [[s]] por [[k]]. É por isso que triângulos semelhantes têm semiperímetros proporcionais." },
          { "kind": "h3", "text": "O Que Acontece Quando Apenas um Lado Muda?" },
          { "kind": "p", "text": "Mudar um lado mantendo os outros dois fixos muda o semiperímetro numérico pela metade da mudança no comprimento do lado, porque apenas um termo da soma se move. Mas há um porém: as medidas resultantes ainda precisam descrever um triângulo válido e, para esta página, um triângulo retângulo. Alongar a hipotenusa de um triângulo 3-4-5 para 6, por exemplo, quebra [[a^2+b^2=c^2]], então os novos números já não descrevem um triângulo retângulo. Ajuste um lado de um triângulo retângulo e os outros precisam se ajustar para preservar o ângulo reto." },
          { "kind": "h3", "text": "Semiperímetro de um Triângulo 45-45-90" },
          { "kind": "p", "text": "Faça os dois catetos iguais a [[k]]. A hipotenusa é [[c=k\\sqrt{2}]], então o semiperímetro é [[s=\\frac{k+k+k\\sqrt{2}}{2}]], que se simplifica para [[[\\boxed{s=\\frac{k(2+\\sqrt{2})}{2}}]]]. Os catetos iguais contribuem de forma simétrica, e a hipotenusa irracional deixa sua marca no resultado: para [[k=1]], [[s=1+\\frac{\\sqrt{2}}{2}\\approx1.7071]]." },
          { "kind": "h3", "text": "Semiperímetro de um Triângulo 30-60-90" },
          { "kind": "p", "text": "Se o cateto menor é [[k]], os lados são [[k]], [[k\\sqrt{3}]] e [[2k]]. Portanto [[s=\\frac{k+k\\sqrt{3}+2k}{2}]], obtendo [[[\\boxed{s=\\frac{k(3+\\sqrt{3})}{2}}]]]. Numericamente, com [[k=2]] os lados são 2, [[2\\sqrt{3}\\approx3.464]] e 4, então [[s\\approx4.732]]. A forma exata com radicais é preferível aqui: ela mantém precisão total para qualquer cálculo posterior de Heron ou inraio." }
        ]
      },
      "sec-units": {
        "h2": "Como Entender as Unidades de Medida nos Cálculos de Semiperímetro",
        "blocks": [
          { "kind": "p", "text": "O semiperímetro funciona em qualquer unidade de comprimento, metros, centímetros, milímetros, quilômetros, pés, polegadas, jardas ou milhas, porque é apenas uma soma de comprimentos dividida pela metade. A unidade da resposta sempre corresponde à unidade das entradas. A única regra estrita é a consistência: cada lado precisa ser expresso na mesma unidade antes da adição." },
          { "kind": "h3", "text": "Por Que as Três Medidas de Lado Precisam Usar Unidades Compatíveis?" },
          { "kind": "p", "text": "O semiperímetro é calculado somando três comprimentos, e comprimentos em unidades diferentes não se somam diretamente. Somar 3 metros a 40 centímetros como se ambos fossem números simples dá 43 de nada significativo. A soma só é válida quando cada termo compartilha uma unidade, então a conversão vem antes da adição, nunca depois." },
          { "kind": "h3", "text": "Exemplo Resolvido de Conversão de Unidades" },
          { "kind": "p", "text": "Dados [[a=3\\text{ ft}]], [[b=48\\text{ inches}]] e [[c=5\\text{ ft}]]. Converta polegadas para pés primeiro: [[48\\text{ inches}=4\\text{ ft}]]. Agora os três lados estão em pés: [[s=\\frac{3+4+5}{2}]], obtendo [[[\\boxed{s=6\\text{ ft}}]]]. As medidas precisam ser convertidas antes da adição porque a fórmula soma números brutos; ela não pode saber que 48 significava polegadas a menos que você converta." },
          { "kind": "h3", "text": "Como os Seletores de Unidade da Calculadora Ajudam?" },
          { "kind": "p", "text": "Cada entrada desta página tem seu próprio seletor de unidade de medida, que permite declarar a unidade do número que você digitou. Ajuste cada seletor para corresponder à unidade real de sua entrada para que a ferramenta combine os valores em uma base consistente. Não presuma recursos de conversão além do que a interface mostra: os seletores descrevem suas entradas, e o semiperímetro é calculado a partir dos valores como informados." },
          { "kind": "h3", "text": "Trabalhando com Medidas de Lado Decimais" },
          { "kind": "p", "text": "Decimais seguem a mesma fórmula. Com [[a=2.5,\\;b=6,\\;c=6.5]]: [[s=\\frac{2.5+6+6.5}{2}]], então [[s=\\frac{15}{2}]], obtendo [[[\\boxed{s=7.5\\text{ units}}]]]. Mantenha a precisão decimal total durante a adição e a divisão; arredonde apenas a resposta final exibida, e só se o problema pedir." },
          { "kind": "h3", "text": "Trabalhando com Comprimentos de Lado Irracionais" },
          { "kind": "p", "text": "Alguns triângulos retângulos têm lados irracionais, e a fórmula os trata da mesma maneira. Tome um triângulo 45-45-90 com [[a=1,\\;b=1,\\;c=\\sqrt{2}]]: [[s=\\frac{1+1+\\sqrt{2}}{2}]], obtendo a forma exata [[[\\boxed{s=1+\\frac{\\sqrt{2}}{2}}]]], aproximadamente [[s\\approx1.7071]]. A notação exata com radicais é valiosa na matemática porque preserva a precisão total: qualquer uso posterior de [[s]] na fórmula de Heron ou em um cálculo de inraio parte do valor verdadeiro, não de um arredondado." },
          { "kind": "h3", "text": "Por Que Evitar Arredondar Cedo Demais?" },
          { "kind": "p", "text": "O arredondamento prematuro injeta erro em cada cálculo posterior, e o semiperímetro costuma ser um valor intermediário, não a resposta final. Arredondar [[s]] para duas casas decimais antes de alimentá-lo na fórmula de Heron, onde ele aparece quatro vezes, agrava o erro de forma perceptível. Mantenha precisão suficiente durante as etapas intermediárias: carregue o decimal completo ou o radical exato, e arredonde uma vez, no final, para a precisão que o problema exige." }
        ]
      },
      "sec-mistakes": {
        "h2": "Erros Comuns ao Calcular o Semiperímetro do Triângulo Retângulo",
        "blocks": [
          { "kind": "p", "text": "Dezesseis erros respondem por quase todo semiperímetro errado. Cada um é explicado com o que dá errado, por que acontece e a abordagem correta." },
          { "kind": "p", "text": "<strong>1. Esquecer de dividir o total por dois.</strong> Somar 3 + 4 + 5 = 12 e parar dá o perímetro, não o semiperímetro. Sempre termine com a divisão: [[12/2=6]]." },
          { "kind": "p", "text": "<strong>2. Dividir cada lado antes de entender a fórmula.</strong> Reduzir os lados à metade individualmente e depois somar funciona aritmeticamente, mas esconde a estrutura da fórmula. Some primeiro, divida uma vez: [[s=(3+4+5)/2]]." },
          { "kind": "p", "text": "<strong>3. Esquecer de incluir a hipotenusa.</strong> A hipotenusa é uma aresta da fronteira. Omiti-la de um triângulo 3-4-5 dá [[(3+4)/2=3.5]] em vez de 6." },
          { "kind": "p", "text": "<strong>4. Usar apenas os dois catetos perpendiculares.</strong> O mesmo erro acima com outra roupagem. Os catetos sozinhos não são toda a fronteira; a hipotenusa fecha a forma e precisa ser contada." },
          { "kind": "p", "text": "<strong>5. Confundir semiperímetro com perímetro total.</strong> Informar 12 para um triângulo 3-4-5 responde \u201cquanto é P?\u201d quando a pergunta pedia s. Lembre-se: [[s=P/2]]." },
          { "kind": "p", "text": "<strong>6. Confundir semiperímetro com área.</strong> Para o 3-4-5, ambos valem 6 numericamente, o que convida à mistura. Eles diferem em natureza: 6 unidades de comprimento contra 6 unidades quadradas de superfície." },
          { "kind": "p", "text": "<strong>7. Informar o resultado em unidades quadradas.</strong> Um semiperímetro de 6 cm quadrados é um erro de categoria. Dividir um comprimento pela metade continua resultando em um comprimento: 6 cm, não 6 cm²." },
          { "kind": "p", "text": "<strong>8. Usar uma hipotenusa incorreta.</strong> Se o valor da hipotenusa estiver errado, a soma está errada e o semiperímetro também. Verifique [[c=\\sqrt{a^2+b^2}]] quando a hipotenusa foi calculada em vez de medida." },
          { "kind": "p", "text": "<strong>9. Informar medidas que não formam um triângulo retângulo.</strong> Teste [[a^2+b^2=c^2]] antes de confiar no rótulo \u201ctriângulo retângulo\u201d. A adição continua funcionando, mas o significado geométrico muda." },
          { "kind": "p", "text": "<strong>10. Misturar centímetros e metros.</strong> Somar 3 m a 40 cm não dá 43 de nada. Converta para uma unidade primeiro." },
          { "kind": "p", "text": "<strong>11. Misturar pés e polegadas.</strong> A armadilha imperial clássica. Converta polegadas para pés (divida por 12) antes de somar, ou ajuste os seletores de unidade para corresponder." },
          { "kind": "p", "text": "<strong>12. Arredondar cedo demais.</strong> Arredondar [[\\sqrt{2}]] para 1.4 antes de somar acumula erro. Arredonde apenas a resposta final." },
          { "kind": "p", "text": "<strong>13. Usar um lado desconhecido sem calculá-lo.</strong> Dois lados conhecidos não são um semiperímetro. Recupere o terceiro com o teorema de Pitágoras primeiro, depois some e divida pela metade." },
          { "kind": "p", "text": "<strong>14. Aplicar a fórmula de Heron incorretamente.</strong> Os fatores são [[s-a]], [[s-b]] e [[s-c]]: cada lado é subtraído do semiperímetro, não de outro lado. Trocar as subtrações quebra a área." },
          { "kind": "p", "text": "<strong>15. Confundir o inraio com o circunraio.</strong> O inraio [[r=K/s]] toca os três lados por dentro; o circunraio passa pelos vértices e vale [[c/2]] para um triângulo retângulo. Círculos diferentes, fórmulas diferentes." },
          { "kind": "p", "text": "<strong>16. Presumir que o semiperímetro descreve um caminho físico de meia fronteira.</strong> Ele é metade do total numérico, não uma rota marcada até a metade ao redor do triângulo. Trate-o como o valor intermediário derivado que ele é." },
          { "kind": "p", "text": "<strong>Errado contra correto, lado a lado.</strong> Dados [[a=3,\\;b=4,\\;c=5]]: incorreto é [[s=3+4+5=12]], que pula a divisão e informa o perímetro total. Também incorreto é [[s=(3+4)/2=3.5]], que omite a hipotenusa. Correto é [[s=\\frac{3+4+5}{2}]], obtendo [[[\\boxed{s=6}]]]." }
        ]
      },
      "sec-verify": {
        "h2": "Como Verificar se Sua Resposta do Semiperímetro Está Correta",
        "blocks": [
          { "kind": "p", "text": "Oito verificações independentes pegam quase todo erro. O triângulo 3-4-5 demonstra cada uma. Verificações independentes importam porque falham de maneiras diferentes: quando métodos não relacionados concordam, a resposta conquistou sua confiança." },
          { "kind": "p", "text": "<strong>Método 1: Dobre o semiperímetro.</strong> [[[\\boxed{P=2s}]]] precisa ser igual ao perímetro total: [[2\\times6=12=3+4+5]]. Se dobrar não reproduz a soma dos lados, a divisão ou a adição saiu errada." },
          { "kind": "p", "text": "<strong>Método 2: Recalcule a partir dos três lados.</strong> Recompute [[s=\\frac{a+b+c}{2}]] do zero: [[(3+4+5)/2=6]]. Uma segunda passada pega deslizes de digitação e aritmética." },
          { "kind": "p", "text": "<strong>Método 3: Verifique a relação pitagórica.</strong> Confira [[a^2+b^2=c^2]]: [[9+16=25]]. Isso confirma que os lados formam um triângulo retângulo, o que valida os rótulos dos lados dos quais o semiperímetro depende." },
          { "kind": "p", "text": "<strong>Método 4: Confira a hipotenusa.</strong> Confirme [[c>a]] e [[c>b]]: 5 é maior que 3 e maior que 4. Se a suposta hipotenusa não é o lado mais longo, os rótulos estão errados." },
          { "kind": "p", "text": "<strong>Método 5: Confira a desigualdade triangular.</strong> Confirme [[a+b>c]]: [[3+4=7>5]]. A soma dos catetos precisa exceder a hipotenusa, ou nenhum triângulo existe." },
          { "kind": "p", "text": "<strong>Método 6: Verifique o limite do semiperímetro.</strong> [[[\\boxed{s>c}]]] precisa valer: [[6>5]]. Essa única desigualdade pega um número surpreendente de erros de rotulagem." },
          { "kind": "p", "text": "<strong>Método 7: Confira as unidades.</strong> Confirme que os três comprimentos de lado usam unidades compatíveis e que a saída é uma medida linear. Unidades misturadas invalidam a soma mesmo quando a aritmética está perfeita." },
          { "kind": "p", "text": "<strong>Método 8: Compare com as etapas da solução da calculadora.</strong> O resultado exibido e as etapas do cálculo ajudam a identificar erros: se uma etapa mostra um lado digitado errado ou uma divisão pulada, o erro fica visível antes de a resposta ser usada." }
        ]
      },
      "sec-conclusion": {
        "h2": "Metade da Fronteira, Compreensão Total",
        "blocks": [
          { "kind": "p", "text": "O semiperímetro de um triângulo retângulo é uma ideia pequena com longo alcance. Uma adição e uma divisão produzem um número que libera o inraio, move a fórmula de Heron e afia a verificação de área. A fórmula pede três lados porque a fronteira tem três arestas, e a hipotenusa conquista seu lugar na soma como a aresta que fecha a forma. Todo o resto neste guia, os exemplos resolvidos, as doze aplicações, as propriedades, as conversões de unidade, os dezesseis erros e as oito verificações, existe para proteger esse total dividido pela metade dos pequenos erros de rotulagem e unidade que produzem respostas erradas com aparência plausível." },
          { "kind": "p", "text": "Use a calculadora desta página sempre que os três lados estiverem medidos, recupere um lado desconhecido pelo teorema de Pitágoras quando não estiverem, e confira o resultado contra os limites c < s < a + b antes de o número entrar em um desenho ou modelo. Quando a pergunta se voltar para a superfície dentro da fronteira, a fórmula de Heron e a calculadora de área estão esperando; quando se voltar para o círculo dentro do triângulo, o inraio está a uma divisão de distância." }
        ]
      }
    },
    "relatedHeading": "Explore Calculadoras Relacionadas de Triângulo Retângulo",
    "relatedIntro": "Cada uma dessas ferramentas estende o cálculo do semiperímetro em uma direção: a fronteira total, a superfície, o caminho da área a partir do semiperímetro, a circunferência inscrita ou os lados desconhecidos por trás de tudo.",
    "relatedItems": [
      "Calculadora de Perímetro do Triângulo Retângulo",
      "Calculadora de Área do Triângulo Retângulo",
      "Calculadora de Área a Partir do Semiperímetro do Triângulo Retângulo",
      "Calculadora de Inraio do Triângulo Retângulo",
      "Calculadora de Lado do Triângulo Retângulo"
    ],
    "faqHeading": "Perguntas Frequentes",
    "faqs": [
      {
        "question": "Qual é a fórmula do semiperímetro de um triângulo retângulo?",
        "answer": "A fórmula é s = (a + b + c) / 2, onde a e b são os dois catetos que formam o ângulo de 90 graus e c é a hipotenusa, o lado mais longo. Some os três comprimentos de lado e divida o total por dois. De forma equivalente, s = P / 2, onde P é o perímetro total."
      },
      {
        "question": "O que significa semiperímetro?",
        "answer": "Semiperímetro significa metade do perímetro. Semi significa metade e perímetro significa o comprimento total da fronteira, então o semiperímetro é exatamente metade da distância total ao redor do triângulo. É uma medida geométrica derivada usada como valor intermediário em muitas fórmulas de triângulos."
      },
      {
        "question": "Por que o semiperímetro é metade do perímetro?",
        "answer": "Essa é sua definição: o semiperímetro é construído tomando o perímetro total e dividindo por dois. O valor pela metade acaba sendo a quantidade para a qual fórmulas como a fórmula de Heron e a relação do inraio K = rs são escritas, e é por isso que ele ganhou nome próprio e símbolo, s."
      },
      {
        "question": "Preciso dos três lados para calcular o semiperímetro?",
        "answer": "Sim. O semiperímetro é metade da soma dos três comprimentos de lado, então cada lado precisa ser conhecido, incluindo a hipotenusa. Se um lado estiver faltando, recupere-o primeiro com o teorema de Pitágoras: c = √(a² + b²) para uma hipotenusa desconhecida, ou a = √(c² − b²) para um cateto desconhecido."
      },
      {
        "question": "Qual é a diferença entre perímetro e semiperímetro?",
        "answer": "O perímetro P = a + b + c é o comprimento total da fronteira, enquanto o semiperímetro s = (a + b + c) / 2 é metade dele. Use o perímetro para trabalho físico de fronteira, como cercas ou molduras, e o semiperímetro para trabalho de fórmula, como a fórmula de Heron, cálculos de inraio e demonstrações geométricas. Para um triângulo 3-4-5, P = 12 e s = 6."
      },
      {
        "question": "O semiperímetro é medido em unidades quadradas?",
        "answer": "Não. O semiperímetro é uma medida de comprimento unidimensional, então usa unidades lineares: metros, centímetros, pés ou polegadas, correspondendo aos comprimentos dos lados. Unidades quadradas pertencem à área. Informar um semiperímetro de 6 cm² é um erro de categoria; a unidade correta é 6 cm."
      },
      {
        "question": "Qual é o semiperímetro de um triângulo retângulo 3-4-5?",
        "answer": "Some os lados: 3 + 4 + 5 = 12 e divida por dois: s = 6 unidades. O perímetro total é 12 unidades. Os lados satisfazem 3² + 4² = 5², confirmando o ângulo reto, e o semiperímetro 6 excede a hipotenusa 5, como precisa acontecer em qualquer triângulo válido."
      },
      {
        "question": "Por que o semiperímetro é usado na fórmula de Heron?",
        "answer": "A fórmula de Heron, K = √(s(s − a)(s − b)(s − c)), calcula a área apenas a partir dos comprimentos dos lados, e é escrita em termos do semiperímetro s e das diferenças s − a, s − b, s − c. Calcular s primeiro centraliza a expressão e a mantém compacta. Para o 3-4-5, s = 6 dá K = √(6 × 3 × 2 × 1) = 6 unidades quadradas."
      },
      {
        "question": "Como o semiperímetro se relaciona com o inraio?",
        "answer": "Área, inraio e semiperímetro satisfazem K = rs, então r = K / s. Para um triângulo retângulo, isso se simplifica para r = (a + b − c) / 2. Para o 3-4-5: s = 6, K = 6, então r = 1. O semiperímetro é a ponte que converte três comprimentos de lado no raio do círculo inscrito."
      },
      {
        "question": "Posso calcular o semiperímetro se um lado estiver faltando?",
        "answer": "Sim, mas encontre o lado desconhecido primeiro. Com os catetos 6 e 8, a hipotenusa é √(36 + 64) = 10, então s = (6 + 8 + 10) / 2 = 12. Com a hipotenusa 13 e o cateto 12, o cateto desconhecido é √(169 − 144) = 5, então s = (5 + 12 + 13) / 2 = 15. A calculadora desta página precisa dos três lados informados."
      },
      {
        "question": "Como posso verificar minha resposta do semiperímetro?",
        "answer": "Dobre-a: 2s precisa ser igual ao perímetro total a + b + c. Confira se s excede a hipotenusa (s > c) e fica abaixo da soma dos catetos (s < a + b). Confirme a relação pitagórica a² + b² = c², verifique se os três lados compartilham uma unidade e compare com as etapas da solução da calculadora."
      },
      {
        "question": "O semiperímetro pode ser usado para calcular a área do triângulo?",
        "answer": "Sim, pela fórmula de Heron: K = √(s(s − a)(s − b)(s − c)). É uma conferência independente da fórmula direta do triângulo retângulo K = ab / 2. Para o 3-4-5, ambas dão 6 unidades quadradas. A fórmula de Heron é mais valiosa quando nenhuma altura é conhecida ou quando você quer um segundo cálculo não relacionado confirmando a área."
      }
    ]
  }
};
