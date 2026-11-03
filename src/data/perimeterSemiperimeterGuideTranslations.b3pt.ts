export const B3_PT = {
  "pt": {
    "tocHeading": "Neste guia",
    "tocItems": {
      "sec-intro": "Como calcular o perímetro e o semiperímetro de um triângulo retângulo",
      "sec-right-triangle": "O que é um triângulo retângulo?",
      "sec-perimeter": "O que é o perímetro de um triângulo retângulo?",
      "sec-semiperimeter": "O que é o semiperímetro de um triângulo retângulo?",
      "sec-difference": "Perímetro x semiperímetro: qual é a diferença?",
      "sec-modes": "Entendendo os dois modos da calculadora",
      "sec-howto": "Como usar a calculadora de perímetro e semiperímetro de triângulo retângulo",
      "sec-examples": "Exemplos passo a passo de perímetro e semiperímetro de triângulo retângulo",
      "sec-practical": "Aplicações reais do perímetro e do semiperímetro de triângulo retângulo",
      "sec-missing-side": "Como calcular o perímetro quando um lado está faltando",
      "sec-pythagoras": "Qual é a relação entre o teorema de Pitágoras e o perímetro de um triângulo retângulo?",
      "sec-advanced": "Como o semiperímetro é usado em outras fórmulas de triângulos?",
      "sec-perimeter-area": "Qual é a diferença entre perímetro e área?",
      "sec-units": "Entendendo as unidades de medida nos cálculos de perímetro e semiperímetro",
      "sec-scaling": "Como mudanças nos comprimentos dos lados afetam o perímetro e o semiperímetro?",
      "sec-applications": "Aplicações práticas do perímetro de triângulo retângulo",
      "sec-mistakes": "Erros comuns ao calcular perímetro e semiperímetro de triângulo retângulo",
      "sec-verify": "Como verificar se o perímetro do seu triângulo retângulo está correto",
      "sec-related": "Explore calculadoras relacionadas de triângulo retângulo",
      "sec-faq": "Perguntas frequentes",
      "sec-conclusion": "Uma fronteira, duas medidas úteis"
    },
    "sections": {
      "sec-intro": {
        "h2": "Como calcular o perímetro e o semiperímetro de um triângulo retângulo",
        "blocks": [
          { "kind": "p", "text": "Considere [[a=3]], [[b=4]], [[c=5]]. O perímetro é [[P=3+4+5]], [[[\\boxed{P=12\\text{ units}}]]]. O semiperímetro é [[s=\\frac{3+4+5}{2}]], [[[\\boxed{s=6\\text{ units}}]]]. É exatamente isso que a calculadora de perímetro e semiperímetro de triângulo retângulo devolve para essas três entradas." },
          { "kind": "p", "text": "O perímetro descreve a fronteira completa do triângulo: o comprimento total que você percorreria se caminhasse pelos três lados e voltasse ao ponto inicial. O semiperímetro é metade desse total numérico. Ambos são comprimentos, medidos em unidades como metros, centímetros, pés ou polegadas. Nenhum dos dois é uma área, e nenhum deles é expresso em unidades quadradas." },
          { "kind": "p", "text": "São necessárias três medidas de lados porque a fronteira tem três arestas, e a hipotenusa deve ser incluída: ela é uma das três arestas, mesmo que nunca toque o ângulo reto. O semiperímetro é metade do perímetro porque várias fórmulas avançadas, incluindo a fórmula de Herão e a relação do raio inscrito, são construídas sobre metade da fronteira em vez do todo. Esses dois cálculos são úteis sempre que um contorno triangular precisa ser medido: cercar um jardim, moldurar um quadro ou inserir um comprimento na próxima fórmula de um problema maior." }
        ]
      },
      "sec-right-triangle": {
        "h2": "O que é um triângulo retângulo?",
        "blocks": [
          { "kind": "p", "text": "Antes de começar qualquer soma, os três lados precisam ser rotulados sem erro. Os símbolos abaixo permanecem fixos em todo o guia, e a calculadora usa os mesmos nomes." },
          { "kind": "h3", "text": "Definição de triângulo retângulo" },
          { "kind": "p", "text": "Um triângulo retângulo é um polígono de três lados contendo exatamente um ângulo interno de 90 graus. Ele tem três vértices, três lados, dois ângulos agudos e um ângulo reto, geralmente marcado com um pequeno quadrado. Os dois lados que formam o ângulo reto são os catetos; o lado oposto é a hipotenusa. Como os ângulos de qualquer triângulo somam 180 graus, [[A+B+C=180^\\circ]], e com [[C=90^\\circ]] segue-se que [[[\\boxed{A+B=90^\\circ}]]]: os dois ângulos agudos são complementares, de modo que conhecer um determina o outro." },
          { "kind": "h3", "text": "O que são os dois catetos?" },
          { "kind": "p", "text": "O cateto [[a]] fica oposto ao ângulo [[A]]; o cateto [[b]] fica oposto ao ângulo [[B]]. Os dois catetos se encontram no vértice do ângulo reto e são perpendiculares entre si: cada um faz 90 graus com o outro. Eles formam o canto quadrado do triângulo, o tipo de aresta que você mediria ao longo do canto de uma parede ou da borda de uma mesa. No trabalho com perímetros, o papel deles é simples: ambos são arestas da fronteira, então ambos entram na soma." },
          { "kind": "h3", "text": "O que é a hipotenusa?" },
          { "kind": "p", "text": "A hipotenusa é o lado oposto ao ângulo reto, sempre o lado mais longo do triângulo. Ela nunca forma o ângulo reto; estende-se atravessando-o, ligando as extremidades distantes dos dois catetos. Ela difere dos catetos em posição e em comprimento: os catetos se encontram a 90 graus, enquanto a hipotenusa encontra cada cateto em um ângulo agudo. Ela deve ser incluída no cálculo do perímetro completo, porque a fronteira não está completa até que as três arestas sejam contadas. Se ambos os catetos são conhecidos, o teorema de Pitágoras a recupera por meio de [[[\\boxed{c=\\sqrt{a^2+b^2}}]]]." },
          { "kind": "h3", "text": "Por que o ângulo reto é importante?" },
          { "kind": "p", "text": "O ângulo reto é o que torna o triângulo um triângulo retângulo, e tudo o mais decorre dele. Ele identifica a forma em um desenho ou no local da obra: encontre o canto quadrado e a rotulagem dos lados se encaixa. É a condição de que o teorema de Pitágoras precisa antes de poder ser aplicado. Em medições de construção e desenhos de engenharia, o ângulo reto é a referência contra a qual tudo é esquadrejado: paredes, molduras e suportes são verificados com ele. Para verificação, o ângulo reto é a promessa que os três comprimentos de lado devem cumprir por meio de [[a^2+b^2=c^2]]." },
          { "kind": "h3", "text": "Como identificar os rótulos corretos dos lados?" },
          { "kind": "p", "text": "[[a]] e [[b]] são os catetos, [[c]] é a hipotenusa, e em um triângulo retângulo não degenerado [[c]] é o lado mais longo. O ângulo reto fica oposto a [[c]], então o vértice que carrega o marcador quadrado indica qual lado é [[c]]: é o que não toca esse vértice. Uma verificação rápida de ordenação ajuda: ordene os três números, e o maior deve desempenhar o papel de [[c]]. Se o maior lado não for oposto ao canto quadrado, os rótulos estão errados, e todo cálculo construído sobre eles também estará errado." }
        ],
        "imgAlt": "Triângulo retângulo ABC com catetos a e b, hipotenusa c, marcador de ângulo reto e fórmulas P = a+b+c, s = (a+b+c)/2",
        "figcaption": "Triângulo ABC com catetos a e b, hipotenusa c e as duas fórmulas de fronteira."
      },
      "sec-perimeter": {
        "h2": "O que é o perímetro de um triângulo retângulo?",
        "blocks": [
          { "kind": "p", "text": "O perímetro é a distância total ao redor da fronteira externa de uma forma bidimensional. Para um triângulo, é a soma dos comprimentos dos seus três lados, [[[\\boxed{P=a+b+c}]]], e todos os lados devem ser incluídos porque todo lado faz parte da fronteira. Deixar um de fora e o resultado não é um perímetro; é um passeio parcial." },
          { "kind": "h3", "text": "Por que a hipotenusa conta no perímetro?" },
          { "kind": "p", "text": "O perímetro mede a fronteira externa completa, não apenas os dois lados perpendiculares. Mesmo que a hipotenusa fique oposta ao ângulo reto, ela continua sendo uma das três arestas da fronteira: percorra o triângulo e você percorrerá a hipotenusa também. Deixá-la de fora mede dois lados de um caminho quebrado, não o contorno de um triângulo fechado. A fórmula tem três termos porque a forma tem três arestas; nenhuma aresta é opcional, seja qual for a orientação do triângulo na página ou no terreno." },
          { "kind": "h3", "text": "Como calcular o perímetro passo a passo" },
          { "kind": "p", "text": "Use [[a=3]], [[b=4]], [[c=5]]. Substitua na fórmula: [[P=3+4+5]]. Some os dois primeiros comprimentos: [[P=7+5]]. Resultado final: [[[\\boxed{P=12\\text{ units}}]]]. Fisicamente, 12 unidades é o comprimento de uma fita estendida ao longo das três arestas de ponta a ponta: o contorno completo do triângulo expresso como um comprimento contínuo." },
          { "kind": "h3", "text": "O que o perímetro informa no trabalho prático?" },
          { "kind": "p", "text": "Ele responde a uma pergunta em muitos ofícios: quanto material o contorno consome? Isso inclui materiais de borda, guarnições de janela, bordas de cerca, faixas protetoras, molduras decorativas, rotas de cabos, bordas de tecido e perfis metálicos de aresta. Em cada caso, o perímetro é o número levado ao fornecedor. Ele descreve o comprimento do contorno completo do triângulo, não a quantidade de superfície dentro dele: 12 metros de guarnição nada dizem sobre a área que a janela cobre, e nunca foi essa a intenção." }
        ]
      },
      "sec-semiperimeter": {
        "h2": "O que é o semiperímetro de um triângulo retângulo?",
        "blocks": [
          { "kind": "p", "text": "O semiperímetro é exatamente metade do perímetro total do triângulo: [[[\\boxed{s=\\frac{P}{2}}]]]. Como [[P=a+b+c]], segue-se que [[[\\boxed{s=\\frac{a+b+c}{2}}]]]. A adição vem antes da divisão porque o semiperímetro divide ao meio toda a fronteira, não cada lado separadamente. Dividir cada lado primeiro e depois somar daria o mesmo número aqui, mas a fórmula afirma a ordem correta das ideias: some a fronteira, depois divida-a ao meio." },
          { "kind": "h3", "text": "Como calcular o semiperímetro passo a passo" },
          { "kind": "p", "text": "Use [[a=3]], [[b=4]], [[c=5]]. Some os três lados: [[s=\\frac{3+4+5}{2}]]. Simplifique o total: [[s=\\frac{12}{2}]]. Resultado final: [[[\\boxed{s=6\\text{ units}}]]]. O semiperímetro é uma medida geométrica derivada usada em várias fórmulas importantes de triângulos; ele raramente descreve algo que você mediria diretamente com uma fita, e é por isso que a calculadora o calcula para você." },
          { "kind": "h3", "text": "Por que o semiperímetro é usado na geometria?" },
          { "kind": "p", "text": "Ele é a variável natural da fórmula de Herão, da relação do raio inscrito [[K=rs]] e da geometria do círculo inscrito em geral. As fórmulas de área de triângulos continuam produzindo metades, e o semiperímetro absorve todas elas de uma vez, razão pela qual provas e fórmulas avançadas o preferem ao perímetro total. Quando uma fórmula pede [[s]], inserir [[P]] em vez disso dobra ou distorce o resultado de outra forma, então vale a pena manter a distinção nítida desde o início." },
          { "kind": "h3", "text": "O semiperímetro é metade da fronteira fisicamente?" },
          { "kind": "p", "text": "Não necessariamente. O semiperímetro é metade do perímetro numérico: 6 unidades quando o perímetro é 12. Ele não descreve necessariamente um caminho físico contínuo cobrindo metade da fronteira do triângulo. Não existe um único passeio ao longo das arestas que seja o semiperímetro da mesma forma que o perímetro é o passeio completo: a metade é um número, não uma rota. Tratar [[s]] como um meio caminho físico leva a confusão; trate-o como metade do total, o valor de que as fórmulas precisam." },
          { "kind": "h3", "text": "O semiperímetro pode ser menor que o lado mais longo?" },
          { "kind": "p", "text": "Não. A desigualdade triangular exige [[a+b>c]]: os dois lados mais curtos juntos devem exceder o lado mais longo, ou o triângulo não consegue fechar. Somando [[c]] aos dois lados obtém-se [[a+b+c>2c]], e dividindo ao meio obtém-se [[[\\boxed{s>c}]]]. Para um triângulo válido não degenerado, o semiperímetro é maior que o lado mais longo. Esta é uma verificação matemática útil: se um semiperímetro informado for menor que a hipotenusa, as medidas não podem formar um triângulo real." }
        ]
      },
      "sec-difference": {
        "h2": "Perímetro x semiperímetro: qual é a diferença?",
        "blocks": [
          { "kind": "p", "text": "Perímetro: o comprimento total ao redor do triângulo, [[P=a+b+c]]. Semiperímetro: metade do perímetro total, [[s=\\frac{a+b+c}{2}]]. Mesmos três lados, quantidades geométricas diferentes: um é o todo, o outro é a metade. Eles se relacionam por [[s=\\frac{P}{2}]] e [[P=2s]], e a calculadora nunca usa os dois símbolos de forma intercambiável." },
          { "kind": "h3", "text": "Comparação numérica" },
          { "kind": "p", "text": "Use um triângulo retângulo 6-8-10. Perímetro: [[P=6+8+10]], [[[\\boxed{P=24}]]]. Semiperímetro: [[s=\\frac{24}{2}]], [[[\\boxed{s=12}]]]. Os dois números diferem por um fator de dois, sempre: [[s=\\frac{P}{2}]] e [[P=2s]]. A diferença não é uma forma diferente nem um triângulo diferente; é a mesma fronteira contada uma vez contra contada como metade." },
          { "kind": "h3", "text": "Qual medida você deve usar?" },
          { "kind": "p", "text": "Use o perímetro para cercar, moldurar, arrematar, proteger com cerca e estimativas de material ao redor de um objeto: qualquer trabalho em que a pergunta seja quanto material o contorno consome. Use o semiperímetro para a fórmula de Herão, relações de raio inscrito, cálculos de círculo inscrito e problemas de geometria envolvendo comprimentos de lados de triângulos: qualquer trabalho em que uma fórmula peça metade da fronteira como entrada. A escolha é determinada pela tarefa, não pela preferência: uma estimativa de guarnição quer [[P]], uma prova de área quer [[s]]." },
          { "kind": "h3", "text": "O semiperímetro mede metade da área do triângulo?" },
          { "kind": "p", "text": "Não. Tanto o perímetro quanto o semiperímetro são medidas lineares: comprimentos, expressos em metros ou pés, nunca em metros quadrados. A área mede a superfície bidimensional delimitada pelo triângulo e usa unidades quadradas. Dividir um comprimento ao meio ainda resulta em um comprimento. O aviso merece repetição porque os nomes parecem relacionados: o semiperímetro é metade do perímetro, não metade da área, e nenhuma divisão de uma fronteira pode produzir uma superfície." }
        ],
        "imgAlt": "Triângulo 6-8-10: barra de perímetro de 24 unidades dividida ao meio em uma barra de semiperímetro de 12 unidades",
        "figcaption": "P = 24 dividido ao meio em s = 12: a fronteira completa, depois metade dela."
      },
      "sec-modes": {
        "h2": "Entendendo os dois modos da calculadora",
        "blocks": [
          { "kind": "p", "text": "A calculadora mantém os dois cálculos em dois modos separados porque eles respondem a perguntas diferentes a partir das mesmas três entradas. Escolher o modo é escolher qual pergunta está sendo feita." },
          { "kind": "h3", "text": "Modo calculadora de perímetro" },
          { "kind": "p", "text": "Este modo calcula o comprimento total da fronteira. Entradas: cateto [[a]], cateto [[b]], hipotenusa [[c]]. Fórmula: [[P=a+b+c]]. Saída: perímetro [[P]]. O resultado é útil para estimar o comprimento total de material necessário ao redor de um contorno triangular: o número que você leva ao fornecedor quando o trabalho é arremate, guarnição ou moldura." },
          { "kind": "h3", "text": "Modo calculadora de semiperímetro" },
          { "kind": "p", "text": "Este modo calcula metade do perímetro total. Entradas: cateto [[a]], cateto [[b]], hipotenusa [[c]]. Fórmula: [[s=\\frac{a+b+c}{2}]]. Saída: semiperímetro [[s]]. O resultado é útil como valor intermediário em cálculos avançados de triângulos: o número que você insere na fórmula de Herão ou na relação do raio inscrito quando o problema continua além da fronteira." },
          { "kind": "h3", "text": "Por que existem dois modos separados?" },
          { "kind": "p", "text": "Ambos os cálculos usam as mesmas três medidas de lados, mas retornam quantidades geométricas diferentes, e confundi-los é um dos erros mais comuns neste tópico. Dois modos rotulados mantêm a intenção explícita: o botão diz Calculate Perimeter ou Calculate Semiperimeter, e o resultado é rotulado [[P]] ou [[s]]. Os dois modos poupam os usuários de cálculos manuais mantendo as duas respostas impossíveis de confundir. Não descreva o modo de semiperímetro como uma calculadora de área: sua saída é um comprimento, e continua sendo um comprimento." }
        ]
      },
      "sec-howto": {
        "h2": "Como usar a calculadora de perímetro e semiperímetro de triângulo retângulo",
        "blocks": [
          { "kind": "p", "text": "Os passos abaixo seguem o layout na tela para cada modo, da identificação das medidas até um resultado verificado. Os dois modos compartilham as mesmas três entradas e diferem apenas no cálculo final." },
          { "kind": "h3", "text": "Modo perímetro" },
          { "kind": "steps", "steps": [
            "<strong>Selecione o modo Perimeter.</strong> Isso informa à calculadora que o objetivo é o comprimento total da fronteira.",
            "<strong>Identifique o cateto a.</strong> Este é um dos dois lados que formam o ângulo reto.",
            "<strong>Identifique o cateto b.</strong> Este é o outro lado que forma o ângulo reto.",
            "<strong>Identifique a hipotenusa c.</strong> Este é o lado mais longo, oposto ao ângulo reto.",
            "<strong>Digite o cateto a.</strong> Digite o comprimento medido no primeiro campo.",
            "<strong>Digite o cateto b.</strong> Digite o comprimento medido no segundo campo.",
            "<strong>Digite a hipotenusa c.</strong> Digite o comprimento medido no terceiro campo.",
            "<strong>Selecione as unidades apropriadas.</strong> Os três lados devem compartilhar uma unidade antes que a soma faça sentido.",
            "<strong>Clique em Calculate Perimeter.</strong> A calculadora soma os três lados.",
            "<strong>Revise o resultado.</strong> Confirme que o perímetro excede o lado mais longo.",
            "<strong>Verifique as etapas da solução exibidas.</strong> Elas mostram [[P=a+b+c]] com os valores inseridos preenchidos.",
            "<strong>Verifique se a saída usa uma unidade de medida linear.</strong> Metros, centímetros, pés ou polegadas: nunca uma unidade quadrada."
          ] },
          { "kind": "h3", "text": "Modo semiperímetro" },
          { "kind": "steps", "steps": [
            "<strong>Selecione o modo Semiperimeter.</strong> Isso informa à calculadora que o objetivo é metade da fronteira.",
            "<strong>Digite o cateto a.</strong> Mesma identificação do modo de perímetro.",
            "<strong>Digite o cateto b.</strong> O segundo lado que forma o ângulo reto.",
            "<strong>Digite a hipotenusa c.</strong> O lado mais longo, oposto ao ângulo reto.",
            "<strong>Selecione unidades de medida compatíveis.</strong> Uma unidade para os três lados.",
            "<strong>Clique em Calculate Semiperimeter.</strong> A calculadora soma os três lados e divide o total ao meio.",
            "<strong>Revise o resultado.</strong> Ele deve ser claramente menor que o perímetro.",
            "<strong>Verifique se o resultado é exatamente metade do perímetro.</strong> Confira [[s=\\frac{P}{2}]] contra a saída do modo de perímetro.",
            "<strong>Verifique as etapas da solução e a visualização ao vivo.</strong> As etapas mostram a soma e a divisão ao meio; o desenho mostra o triângulo de onde esses números vieram.",
            "<strong>Use Reset ao iniciar um novo cálculo.</strong> Ele limpa os três campos para um começo limpo."
          ] },
          { "kind": "p", "text": "A visualização ao vivo desenha o triângulo a partir dos lados inseridos, o que ajuda a pegar uma hipotenusa rotulada errado antes que os números sejam confiados. O diagrama da fórmula mostra onde cada lado fica em [[P=a+b+c]] ou [[s=\\frac{a+b+c}{2}]]. Nenhum dos modos aceita dois lados: a calculadora precisa dos três comprimentos de fronteira, então um lado faltante deve ser encontrado primeiro, como explica a seção de lado faltante." }
        ]
      },
      "sec-examples": {
        "h2": "Exemplos passo a passo de perímetro e semiperímetro de triângulo retângulo",
        "blocks": [
          { "kind": "p", "text": "Quatro ternos pitagóricos conhecidos mostram o cálculo completo para ambas as medidas. Cada um soma os três lados para o perímetro, depois divide o total ao meio para o semiperímetro. A aritmética é mostrada deliberadamente por completo para que o padrão seja inconfundível." },
          { "kind": "h3", "text": "Exemplo 1: Triângulo retângulo 3-4-5" },
          { "kind": "p", "text": "Dados [[a=3]], [[b=4]], [[c=5]]. Calcule o perímetro: [[P=3+4+5]], [[[\\boxed{P=12\\text{ units}}]]]. Calcule o semiperímetro: [[s=\\frac{3+4+5}{2}]], [[[\\boxed{s=6\\text{ units}}]]]. Ambos os resultados estão corretos porque o perímetro conta cada aresta da fronteira uma vez, e o semiperímetro é exatamente metade dessa contagem." },
          { "kind": "h3", "text": "Exemplo 2: Triângulo retângulo 6-8-10" },
          { "kind": "p", "text": "Dados [[a=6]], [[b=8]], [[c=10]]. Perímetro: [[P=6+8+10]], [[[\\boxed{P=24\\text{ units}}]]]. Semiperímetro: [[s=\\frac{24}{2}]], [[[\\boxed{s=12\\text{ units}}]]]. Dobrar os três lados dobra ambas as medidas: 24 é o dobro de 12, e 12 é o dobro de 6. Escalar o triângulo escala suas medidas de fronteira pelo mesmo fator." },
          { "kind": "h3", "text": "Exemplo 3: Triângulo retângulo 5-12-13" },
          { "kind": "p", "text": "Dados [[a=5]], [[b=12]], [[c=13]]. Perímetro: [[P=5+12+13]], [[[\\boxed{P=30\\text{ units}}]]]. Semiperímetro: [[s=\\frac{30}{2}]], [[[\\boxed{s=15\\text{ units}}]]]. Note que 15 excede a hipotenusa 13, como exige a verificação da desigualdade triangular." },
          { "kind": "h3", "text": "Exemplo 4: Triângulo retângulo 8-15-17" },
          { "kind": "p", "text": "Dados [[a=8]], [[b=15]], [[c=17]]. Perímetro: [[P=8+15+17]], [[[\\boxed{P=40\\text{ units}}]]]. Semiperímetro: [[s=\\frac{40}{2}]], [[[\\boxed{s=20\\text{ units}}]]]. Novamente o semiperímetro supera o lado mais longo: 20 contra 17." },
          { "kind": "h3", "text": "Comparação dos exemplos fundamentais" },
          { "kind": "p", "text": "À medida que as dimensões do triângulo aumentam, tanto [[P]] quanto [[s]] crescem junto com os lados. A tabela mostra dois padrões de uma vez: o perímetro de cada linha é a soma simples dos seus três lados, e o perímetro de cada linha é exatamente o dobro do seu semiperímetro. As linhas 3-4-5 e 6-8-10 também mostram a escala diretamente: cada lado dobrado, ambas as medidas de fronteira dobradas." }
        ],
        "table": {
          "headers": ["Triângulo", "Cateto a", "Cateto b", "Hipotenusa c", "Perímetro P", "Semiperímetro s"],
          "rows": [
            ["3-4-5", "3", "4", "5", "12", "6"],
            ["6-8-10", "6", "8", "10", "24", "12"],
            ["5-12-13", "5", "12", "13", "30", "15"],
            ["8-15-17", "8", "15", "17", "40", "20"]
          ]
        }
      },
      "sec-practical": {
        "h2": "Aplicações reais do perímetro e do semiperímetro de triângulo retângulo",
        "blocks": [
          { "kind": "p", "text": "Doze situações resolvidas levam as duas fórmulas da página para a oficina e o local da obra. Cada uma nomeia um objeto ou modelo triangular retângulo simplificado, resolve o perímetro e o semiperímetro pelas fórmulas e declara a leitura prática do resultado. Estes são modelos simplificados: nem toda janela, telhado, jardim, toldo, painel ou estrutura de suporte real forma um triângulo retângulo exato, e um objeto irregular deve ser dividido em formas mais simples antes que as fórmulas se apliquem. Pode ser necessária margem de material, o desperdício de corte não está incluído, fronteiras curvas exigem cálculos diferentes, a resistência estrutural não pode ser determinada apenas pelo perímetro, e as medidas reais de construção devem ser verificadas antes de comprar materiais." },
          { "kind": "h3", "text": "Exemplo 1: Moldura de janela de vidro triangular" },
          { "kind": "p", "text": "Uma janela triangular retângula tem [[a=3\\text{ m}]], [[b=4\\text{ m}]], [[c=5\\text{ m}]]. Perímetro: [[P=3+4+5]], [[[\\boxed{P=12\\text{ m}}]]]. Semiperímetro: [[s=\\frac{12}{2}]], [[[\\boxed{s=6\\text{ m}}]]]. Doze metros é o comprimento total ao redor do contorno triangular da janela: o estoque de moldura a encomendar antes das margens de esquadria e desperdício." },
          { "kind": "h3", "text": "Exemplo 2: Arremate de borda de telhado" },
          { "kind": "p", "text": "Uma seção triangular de extremidade de telhado tem [[a=6\\text{ ft}]], [[b=8\\text{ ft}]], [[c=10\\text{ ft}]]. Perímetro: [[P=6+8+10]], [[[\\boxed{P=24\\text{ ft}}]]]. Semiperímetro: [[s=\\frac{24}{2}]], [[[\\boxed{s=12\\text{ ft}}]]]. O perímetro estima o comprimento do arremate ao redor do contorno triangular da extremidade do telhado." },
          { "kind": "h3", "text": "Exemplo 3: Borda de jardim" },
          { "kind": "p", "text": "Uma seção triangular retângula de jardim tem [[a=5\\text{ m}]], [[b=12\\text{ m}]], [[c=13\\text{ m}]]. Perímetro: [[P=5+12+13]], [[[\\boxed{P=30\\text{ m}}]]]. Semiperímetro: [[s=15\\text{ m}]]. O perímetro estima o comprimento total da borda do jardim ao redor da seção." },
          { "kind": "h3", "text": "Exemplo 4: Suporte metálico de aço" },
          { "kind": "p", "text": "Um suporte metálico triangular tem [[a=8\\text{ cm}]], [[b=15\\text{ cm}]], [[c=17\\text{ cm}]]. Perímetro: [[P=8+15+17]], [[[\\boxed{P=40\\text{ cm}}]]]. Semiperímetro: [[[\\boxed{s=20\\text{ cm}}]]]. O perímetro descreve a borda externa do suporte, útil ao especificar o acabamento da borda." },
          { "kind": "h3", "text": "Exemplo 5: Painel de tecido triangular" },
          { "kind": "p", "text": "Um painel de tecido triangular retângulo tem [[a=9\\text{ ft}]], [[b=12\\text{ ft}]], [[c=15\\text{ ft}]]. Perímetro: [[P=9+12+15]], [[[\\boxed{P=36\\text{ ft}}]]]. Semiperímetro: [[[\\boxed{s=18\\text{ ft}}]]]. O perímetro estima o comprimento da borda antes que as margens de costura sejam adicionadas." },
          { "kind": "h3", "text": "Exemplo 6: Moldura de placa triangular" },
          { "kind": "p", "text": "Uma placa tem forma triangular retângula com [[a=12\\text{ cm}]], [[b=16\\text{ cm}]], [[c=20\\text{ cm}]]. Perímetro: [[P=12+16+20]], [[[\\boxed{P=48\\text{ cm}}]]]. Semiperímetro: [[[\\boxed{s=24\\text{ cm}}]]]. O perímetro total estima o material de moldura para a placa." },
          { "kind": "h3", "text": "Exemplo 7: Contorno de paisagismo" },
          { "kind": "p", "text": "Uma seção triangular retângula de paisagismo tem [[a=7\\text{ m}]], [[b=24\\text{ m}]], [[c=25\\text{ m}]]. Perímetro: [[P=7+24+25]], [[[\\boxed{P=56\\text{ m}}]]]. Semiperímetro: [[[\\boxed{s=28\\text{ m}}]]]. O perímetro estima o material de borda ao redor da seção." },
          { "kind": "h3", "text": "Exemplo 8: Suporte triangular de painel solar" },
          { "kind": "p", "text": "Uma estrutura triangular simplificada de suporte tem [[a=9\\text{ m}]], [[b=40\\text{ m}]], [[c=41\\text{ m}]]. Perímetro: [[P=9+40+41]], [[[\\boxed{P=90\\text{ m}}]]]. Semiperímetro: [[[\\boxed{s=45\\text{ m}}]]]. Estes são os comprimentos dos três lados da estrutura triangular modelada, o ponto de partida para o dimensionamento dos membros." },
          { "kind": "h3", "text": "Exemplo 9: Borda de toldo triangular" },
          { "kind": "p", "text": "Uma seção triangular retângula de toldo tem [[a=15\\text{ ft}]], [[b=20\\text{ ft}]], [[c=25\\text{ ft}]]. Perímetro: [[P=15+20+25]], [[[\\boxed{P=60\\text{ ft}}]]]. Semiperímetro: [[[\\boxed{s=30\\text{ ft}}]]]. O perímetro estima o material de borda para a borda do toldo." },
          { "kind": "h3", "text": "Exemplo 10: Estrutura de extremidade de telhado de armazém" },
          { "kind": "p", "text": "Uma estrutura simplificada triangular retângula de extremidade de telhado tem [[a=11\\text{ m}]], [[b=60\\text{ m}]], [[c=61\\text{ m}]]. Perímetro: [[P=11+60+61]], [[[\\boxed{P=132\\text{ m}}]]]. Semiperímetro: [[[\\boxed{s=66\\text{ m}}]]]. O resultado representa o contorno completo da seção triangular." },
          { "kind": "h3", "text": "Exemplo 11: Painel triangular de fabricação" },
          { "kind": "p", "text": "Um painel industrial triangular retângulo tem [[a=13\\text{ cm}]], [[b=84\\text{ cm}]], [[c=85\\text{ cm}]]. Perímetro: [[P=13+84+85]], [[[\\boxed{P=182\\text{ cm}}]]]. Semiperímetro: [[[\\boxed{s=91\\text{ cm}}]]]. O perímetro estima os perfis de proteção de borda para o painel." },
          { "kind": "h3", "text": "Exemplo 12: Grande estrutura triangular de suporte" },
          { "kind": "p", "text": "Uma estrutura triangular retângula de suporte tem [[a=28\\text{ m}]], [[b=45\\text{ m}]], [[c=53\\text{ m}]]. Perímetro: [[P=28+45+53]], [[[\\boxed{P=126\\text{ m}}]]]. Semiperímetro: [[[\\boxed{s=63\\text{ m}}]]]. Essas medidas servem como entradas geométricas para cálculos posteriores de engenharia." },
          { "kind": "h3", "text": "Comparação dos exemplos práticos" }
        ],
        "table": {
          "headers": ["Aplicação prática", "Cateto a", "Cateto b", "Hipotenusa c", "Perímetro P", "Semiperímetro s", "Unidade de medida"],
          "rows": [
            ["Moldura de janela de vidro", "3", "4", "5", "12", "6", "m"],
            ["Arremate de borda de telhado", "6", "8", "10", "24", "12", "ft"],
            ["Borda de jardim", "5", "12", "13", "30", "15", "m"],
            ["Suporte de aço", "8", "15", "17", "40", "20", "cm"],
            ["Painel de tecido", "9", "12", "15", "36", "18", "ft"],
            ["Moldura de placa", "12", "16", "20", "48", "24", "cm"],
            ["Contorno de paisagismo", "7", "24", "25", "56", "28", "m"],
            ["Suporte de painel solar", "9", "40", "41", "90", "45", "m"],
            ["Borda de toldo", "15", "20", "25", "60", "30", "ft"],
            ["Extremidade de telhado de armazém", "11", "60", "61", "132", "66", "m"],
            ["Painel de fabricação", "13", "84", "85", "182", "91", "cm"],
            ["Estrutura de suporte", "28", "45", "53", "126", "63", "m"]
          ]
        }
      },
      "sec-missing-side": {
        "h2": "Como calcular o perímetro quando um lado está faltando",
        "blocks": [
          { "kind": "p", "text": "A calculadora desta página exige os três comprimentos de lado. Se um lado for desconhecido, calcule-o primeiro com o teorema de Pitágoras. O perímetro não pode ser completado a partir de dois lados: dois comprimentos descrevem um canto aberto, não uma fronteira fechada." },
          { "kind": "h3", "text": "Encontrando a hipotenusa quando ambos os catetos são conhecidos" },
          { "kind": "p", "text": "Use o teorema de Pitágoras em sua forma de hipotenusa: [[[\\boxed{c=\\sqrt{a^2+b^2}}]]]. Exemplo: [[a=6]], [[b=8]]. Então [[c=\\sqrt{6^2+8^2}]], [[c=\\sqrt{36+64}]], [[c=\\sqrt{100}]], [[[\\boxed{c=10}]]]. Agora o perímetro pode ser calculado: [[P=6+8+10]], [[[\\boxed{P=24}]]], com [[s=12]] decorrendo da divisão ao meio." },
          { "kind": "h3", "text": "Encontrando um cateto faltante quando a hipotenusa é conhecida" },
          { "kind": "p", "text": "Reorganize [[a^2+b^2=c^2]] para isolar o cateto desconhecido: [[[\\boxed{a=\\sqrt{c^2-b^2}}]]]. Exemplo: [[c=13]], [[b=12]]. Então [[a=\\sqrt{13^2-12^2}]], [[a=\\sqrt{169-144}]], [[a=\\sqrt{25}]], [[[\\boxed{a=5}]]]. O perímetro segue: [[P=5+12+13=30]], [[s=15]]. A subtração dentro da raiz é a assinatura de um cateto faltante; uma hipotenusa faltante sempre soma." },
          { "kind": "h3", "text": "Por que o lado faltante deve ser calculado primeiro?" },
          { "kind": "p", "text": "O perímetro exige os três comprimentos de fronteira. Um lado faltante não pode simplesmente ser ignorado ou estimado sem justificativa: dois lados não delimitam um triângulo, e um terceiro lado adivinhado torna o total ficção. Se apenas dois lados são conhecidos, a <a href=\"/missing-leg-from-c-and-a-calculator/\" class=\"text-primary underline\">calculadora de lado de triângulo retângulo</a> encontra o terceiro antes que a calculadora desta página assuma. Observe que este é um método educacional, não um modo de entrada adicional na calculadora existente: os modos de perímetro e semiperímetro continuam recebendo três lados cada." }
        ],
        "imgAlt": "Triângulo retângulo com catetos 6 e 8, hipotenusa desconhecida resolvida como 10, dando perímetro 24",
        "figcaption": "Catetos 6 e 8 dão c = 10, então P = 24 e s = 12."
      },
      "sec-pythagoras": {
        "h2": "Qual é a relação entre o teorema de Pitágoras e o perímetro de um triângulo retângulo?",
        "blocks": [
          { "kind": "p", "text": "O teorema afirma [[[\\boxed{a^2+b^2=c^2}]]]. Ele estabelece a relação entre os dois catetos e a hipotenusa: o canto quadrado força os três comprimentos a esse equilíbrio exato. No trabalho com perímetros, o teorema é a ponte entre um conjunto incompleto de medidas e a fronteira completa." },
          { "kind": "h3", "text": "Por que ele importa para o perímetro?" },
          { "kind": "p", "text": "Se os dois catetos são conhecidos, a hipotenusa pode ser calculada antes de encontrar o perímetro completo. Sem o teorema, um lado faltante bloquearia inteiramente o cálculo; com ele, dois lados conhecidos bastam para recuperar o terceiro e concluir a soma. O teorema também funciona na outra direção: uma hipotenusa conhecida e um cateto conhecido recuperam o outro cateto. De qualquer forma, ele transforma um problema de dois lados em um perímetro de três lados." },
          { "kind": "h3", "text": "Exemplo resolvido" },
          { "kind": "p", "text": "Dados [[a=5]], [[b=12]]. Encontre [[c]]: [[c=\\sqrt{5^2+12^2}]], [[c=\\sqrt{25+144}]], [[c=\\sqrt{169}]], [[[\\boxed{c=13}]]]. Calcule o perímetro: [[P=5+12+13]], [[[\\boxed{P=30}]]]. Calcule o semiperímetro: [[s=\\frac{30}{2}]], [[[\\boxed{s=15}]]]. Um teorema, uma adição, uma divisão ao meio: a cadeia completa de dois catetos até ambas as medidas de fronteira." },
          { "kind": "h3", "text": "Como verificar um triângulo retângulo?" },
          { "kind": "p", "text": "As três medidas devem satisfazer [[a^2+b^2=c^2]], com a hipotenusa como o lado mais longo. Verifique também a desigualdade triangular: para qualquer triângulo válido, [[a+b>c]], [[a+c>b]] e [[b+c>a]]. Essas condições importam ao conferir medidas: uma verificação pitagórica falha significa que o triângulo não é retângulo, ou um lado foi rotulado errado; uma desigualdade triangular falha significa que os três comprimentos não podem formar triângulo algum. Execute ambas as verificações antes de confiar em um perímetro construído a partir de medidas de campo." }
        ]
      },
      "sec-advanced": {
        "h2": "Como o semiperímetro é usado em outras fórmulas de triângulos?",
        "blocks": [
          { "kind": "p", "text": "Esta seção dá ao semiperímetro sua profundidade matemática sem transformar a página no tutorial de outra calculadora. O semiperímetro é mais que metade de um perímetro: é a quantidade que conecta comprimentos de lados à área e à geometria do círculo, e as fórmulas abaixo são onde ele mostra seu valor." },
          { "kind": "h3", "text": "Relação entre semiperímetro e raio inscrito" },
          { "kind": "p", "text": "A área de qualquer triângulo não degenerado é igual ao seu raio inscrito vezes seu semiperímetro: [[[\\boxed{K=rs}]]], onde [[K]] é a área, [[r]] o raio inscrito e [[s]] o semiperímetro. Essa relação funciona para todos os triângulos não degenerados, não apenas os retângulos. Para um triângulo retângulo, o raio inscrito também pode ser calculado a partir dos lados usando [[[\\boxed{r=\\frac{a+b-c}{2}}]]]. Tome o triângulo 3-4-5: [[s=6]], [[r=\\frac{3+4-5}{2}=1]], então [[K=1\\times6]], [[[\\boxed{K=6}]]]. O semiperímetro é uma medida intermediária importante neste cálculo: ele carrega a informação da fronteira enquanto o raio inscrito carrega a informação do círculo." },
          { "kind": "h3", "text": "Relação com a fórmula de Herão" },
          { "kind": "p", "text": "A fórmula de Herão calcula a área a partir dos três lados e do semiperímetro: [[[\\boxed{K=\\sqrt{s(s-a)(s-b)(s-c)}}]]]. Ela usa os três comprimentos de lado, usa o semiperímetro, calcula a área do triângulo e funciona para qualquer triângulo válido. Use o triângulo 3-4-5 com [[s=6]]: [[K=\\sqrt{6(6-3)(6-4)(6-5)}]], [[K=\\sqrt{6\\times3\\times2\\times1}]], [[K=\\sqrt{36}]], [[[\\boxed{K=6}]]]. O semiperímetro aparece quatro vezes dentro da raiz, o que mostra como ele é central: a fórmula de Herão nem sequer pode ser escrita sem ele." },
          { "kind": "h3", "text": "Por que o semiperímetro é uma medida fundamental?" },
          { "kind": "p", "text": "Ele é mais que metade de um perímetro. É uma quantidade matemática útil que conecta comprimentos de lados à área e à geometria do círculo: a relação do raio inscrito o trata como o parceiro natural de [[r]], e a fórmula de Herão constrói toda a área sobre ele. Sempre que uma fórmula precisa da fronteira destilada em um único número conveniente, [[s]] é esse número. Esta página não se transforma em um tutorial completo de fórmula de Herão ou raio inscrito; ela registra a conexão para que a saída do modo de semiperímetro tenha para onde ir em seguida." }
        ]
      },
      "sec-perimeter-area": {
        "h2": "Qual é a diferença entre perímetro e área?",
        "blocks": [
          { "kind": "p", "text": "Uma das confusões mais persistentes na geometria é misturar o contorno com a superfície. Perímetro e área compartilham o mesmo triângulo, mas medem coisas diferentes, em unidades diferentes, respondendo a perguntas diferentes." },
          { "kind": "h3", "text": "O perímetro mede a fronteira" },
          { "kind": "p", "text": "[[P=a+b+c]]. Ele mede o comprimento total ao redor do triângulo: o arremate, a guarnição, a linha da cerca. As unidades são lineares: metros, centímetros, pés, polegadas. É unidimensional, um comprimento e nada mais." },
          { "kind": "h3", "text": "A área mede a superfície delimitada" },
          { "kind": "p", "text": "[[[\\boxed{K=\\frac{ab}{2}}]]]. Ela mede a região plana bidimensional dentro do triângulo retângulo: o vidro na janela, a grama na seção do jardim. As unidades são quadradas: metros quadrados, centímetros quadrados, pés quadrados, polegadas quadradas. É bidimensional, uma contagem de superfície e nada mais." },
          { "kind": "h3", "text": "Dois triângulos podem ter o mesmo perímetro mas áreas diferentes?" },
          { "kind": "p", "text": "Sim. Triângulo 1: [[a=5]], [[b=12]], [[c=13]]. Então [[P=5+12+13=30]] e [[K=\\frac{5\\times12}{2}=30]]. Triângulo 2: [[a=7.5]], [[b=10]], [[c=12.5]]. Verifique o ângulo reto: [[7.5^2+10^2=56.25+100=156.25=12.5^2]], então é um triângulo retângulo genuíno. Seu perímetro é [[P=7.5+10+12.5=30]], os mesmos 30, mas sua área é [[K=\\frac{7.5\\times10}{2}=37.5]], claramente diferente. Perímetro igual não significa automaticamente área igual: o comprimento do contorno fixa o arremate total, mas a forma do triângulo decide quanta superfície esse arremate delimita." },
          { "kind": "h3", "text": "Por que você nunca deve expressar o perímetro em unidades quadradas?" },
          { "kind": "p", "text": "Um perímetro é um comprimento unidimensional; unidades quadradas descrevem uma superfície bidimensional. Informar 12 m² para um perímetro afirma uma superfície onde apenas um contorno foi medido, e quem ler o número imaginará a coisa errada. Mantenha as unidades honestas: comprimentos em m, cm, ft, in; áreas em m², cm², ft², in². A unidade faz parte da resposta, e a unidade errada transforma uma resposta certa em errada." }
        ]
      },
      "sec-units": {
        "h2": "Entendendo as unidades de medida nos cálculos de perímetro e semiperímetro",
        "blocks": [
          { "kind": "p", "text": "Metros, centímetros, milímetros, quilômetros, pés, polegadas, jardas, milhas: unidades de comprimento vêm em muitos tamanhos, e a fórmula do perímetro aceita qualquer uma delas. A única regra é a concordância: os três lados devem falar a mesma unidade antes de serem somados." },
          { "kind": "h3", "text": "Por que os três comprimentos de lado devem usar unidades compatíveis?" },
          { "kind": "p", "text": "O perímetro é uma soma de comprimentos. Somar 3 pés a 48 polegadas sem converter mistura duas escalas, e o total não tem significado limpo: 56 de quê? Antes de somar medidas, converta-as para uma unidade comum. Os seletores de unidade da calculadora existem exatamente para esta etapa, e o exemplo resolvido abaixo mostra a conversão fazendo seu trabalho silencioso e essencial." },
          { "kind": "h3", "text": "Exemplo resolvido de conversão de unidades" },
          { "kind": "p", "text": "Dados [[a=3\\text{ ft}]], [[b=48\\text{ inches}]], [[c=5\\text{ ft}]]. Converta o lado do meio: [[48\\text{ inches}=4\\text{ ft}]]. Então [[P=3+4+5]], [[[\\boxed{P=12\\text{ ft}}]]]. Semiperímetro: [[[\\boxed{s=6\\text{ ft}}]]]. Observe que o terno convertido é o familiar 3-4-5, o que confirma a conversão de forma independente: se as polegadas tivessem sido somadas cruas, o perímetro teria sido 56 de nada coerente." },
          { "kind": "h3", "text": "Calculando com medidas decimais de lados" },
          { "kind": "p", "text": "Use [[a=2.5]], [[b=6]], [[c=6.5]]. Primeiro confirme o ângulo reto: [[2.5^2+6^2=6.25+36=42.25=6.5^2]]. Calcule o perímetro: [[P=2.5+6+6.5]], [[[\\boxed{P=15\\text{ units}}]]]. Depois o semiperímetro: [[s=\\frac{15}{2}]], [[[\\boxed{s=7.5\\text{ units}}]]]. Os decimais fluem pela mesma adição e divisão ao meio que os números inteiros; as fórmulas nunca exigem inteiros, e medidas de oficina raramente são." },
          { "kind": "h3", "text": "Por que você deve evitar arredondar cedo demais?" },
          { "kind": "p", "text": "Cálculos de medida podem conter valores decimais, e cada arredondamento intermediário injeta erro que as etapas posteriores não conseguem remover. Mantenha precisão suficiente nas etapas intermediárias e arredonde apenas a resposta final conforme a exatidão de medida exigida. Arredondar 2.5 para 3 no meio do cálculo corromperia tanto [[P]] quanto [[s]]; a calculadora mantém precisão total até o fim, e os cálculos à mão devem fazer o mesmo." }
        ]
      },
      "sec-scaling": {
        "h2": "Como mudanças nos comprimentos dos lados afetam o perímetro e o semiperímetro?",
        "blocks": [
          { "kind": "p", "text": "O perímetro é uma medida linear, então ele escala linearmente com o triângulo: estique cada lado por algum fator e a fronteira se estica exatamente por esse fator. O semiperímetro acompanha, já que é sempre metade do perímetro." },
          { "kind": "h3", "text": "O que acontece quando cada lado dobra?" },
          { "kind": "p", "text": "Comece de [[P=a+b+c]]. Se cada lado dobra, o novo perímetro é [[P_2=2a+2b+2c]], que se fatora em [[P_2=2(a+b+c)]]. Portanto [[[\\boxed{P_2=2P}]]]. O semiperímetro também dobra, já que dividir ao meio um total dobrado ainda dobra a metade. O par 3-4-5 para 6-8-10 mostra isso em números: 12 vira 24, e 6 vira 12." },
          { "kind": "h3", "text": "O que acontece quando cada lado é triplicado?" },
          { "kind": "p", "text": "A mesma álgebra com fator três dá [[[\\boxed{P_2=3P}]]] e [[[\\boxed{s_2=3s}]]]. A relação de escala linear vale para qualquer fator de escala [[k]]: multiplique cada lado por [[k]] e ambas as medidas de fronteira se multiplicam por [[k]]. É por isso que desenhos em escala se comportam tão bem: meça o desenho, multiplique pelo fator de escala, e o perímetro real está pronto." },
          { "kind": "h3", "text": "O que acontece quando apenas um lado muda?" },
          { "kind": "p", "text": "Aumentar um lado mantendo os outros dois fixos muda o perímetro na mesma quantidade: some 2 unidades a um lado e [[P]] cresce exatamente 2, porque o perímetro é uma soma simples. Mas em um triângulo retângulo os comprimentos dos lados estão ligados pelo teorema de Pitágoras, então mudanças arbitrárias de lado podem não preservar a condição do ângulo reto. Alongar um cateto sem ajustar a hipotenusa quebra [[a^2+b^2=c^2]], e a forma deixa de ser retângula: a fórmula do perímetro ainda soma três números, mas eles não descrevem mais um triângulo retângulo." },
          { "kind": "h3", "text": "Comparando dois triângulos retângulos" },
          { "kind": "p", "text": "Coloque 3-4-5 ao lado de 6-8-10. Comprimentos de lados: cada lado dobrado, fator de escala 2. Perímetro: 12 contra 24. Semiperímetro: 6 contra 12. Dobrar todos os comprimentos de lados dobra ambas as medidas de fronteira, exatamente como a álgebra prevê. A comparação também corre na outra direção: se os perímetros de dois triângulos estão em razão 2:1 e ambos são retângulos, seus lados estão nessa razão também." }
        ]
      },
      "sec-applications": {
        "h2": "Aplicações práticas do perímetro de triângulo retângulo",
        "blocks": [
          { "kind": "p", "text": "O mesmo padrão de duas etapas, somar e depois dividir ao meio, aparece onde quer que um contorno triangular precise ser medido e uma fórmula precise de sua metade. Um vidraceiro totaliza uma moldura de janela a partir de seus comprimentos de borda; um telhadista totaliza o arremate ao redor de uma empena; um paisagista totaliza a borda ao redor de um canteiro; um fabricante totaliza o perfil de aresta ao redor de um painel. Dos três lados vêm o perímetro para o pedido de material e o semiperímetro para qualquer geometria posterior. Os quatro painéis abaixo mostram o padrão em escalas diferentes: uma moldura de janela (12 m), arremate de borda de telhado (24 ft), uma borda de jardim (56 m) e uma estrutura de aço de suporte (40 cm), cada um rotulado com seu perímetro e seu semiperímetro." }
        ],
        "imgAlt": "Quatro painéis: moldura de janela 12 m, arremate de telhado 24 ft, borda de jardim 56 m, estrutura de aço 40 cm de perímetros",
        "figcaption": "Quatro usos reais: uma moldura de janela, arremate de borda de telhado, uma borda de jardim e uma estrutura de aço."
      },
      "sec-mistakes": {
        "h2": "Erros comuns ao calcular perímetro e semiperímetro de triângulo retângulo",
        "blocks": [
          { "kind": "p", "text": "Quase toda resposta errada neste tópico decorre de um lado pulado ou um rótulo confuso, e não de aritmética ruim. Os dezesseis erros abaixo são os que aparecem repetidamente, cada um com sua causa e sua correção." },
          { "kind": "h3", "text": "1. Esquecer de incluir a hipotenusa" },
          { "kind": "p", "text": "Usar [[P=a+b]] no triângulo 3-4-5 dá 7, não 12. O erro acontece porque a hipotenusa nunca toca o ângulo reto, então parece separada do triângulo propriamente dito. Correção: a fronteira tem três arestas; conte as três, [[P=a+b+c]]." },
          { "kind": "h3", "text": "2. Confundir o perímetro com o semiperímetro" },
          { "kind": "p", "text": "Inserir 6 onde 12 pertence, ou o inverso, divide ao meio ou dobra a estimativa de material. O erro vem de os dois valores compartilharem os mesmos três lados. Correção: rotule todo resultado [[P]] ou [[s]], e confira [[s=\\frac{P}{2}]] antes de seguir adiante." },
          { "kind": "h3", "text": "3. Dividir o perímetro por dois ao calcular o perímetro" },
          { "kind": "p", "text": "Calcular [[\\frac{3+4+5}{2}=6]] e chamá-lo de perímetro subestima a fronteira pela metade. O erro é executar a fórmula do semiperímetro por hábito. Correção: [[P=a+b+c]] não tem divisão; a divisão ao meio pertence apenas a [[s]]." },
          { "kind": "h3", "text": "4. Esquecer de dividir por dois ao calcular o semiperímetro" },
          { "kind": "p", "text": "Informar [[s=12]] para o triângulo 3-4-5 alimenta a fórmula de Herão com um [[s]] dobrado e corrompe a área. Correção: [[s=\\frac{a+b+c}{2}]] sempre termina com a divisão ao meio; sem ela, o número é o perímetro." },
          { "kind": "h3", "text": "5. Usar o lado errado como hipotenusa" },
          { "kind": "p", "text": "Tratar um cateto como [[c]], por exemplo inserindo a=5, b=4, c=3, embaralha toda fórmula posterior. O erro geralmente vem de ler os lados na ordem errada. Correção: [[c]] é o lado mais longo, oposto ao ângulo reto; ordene os três números e atribua [[c]] ao maior." },
          { "kind": "h3", "text": "6. Inserir medidas que não formam um triângulo retângulo" },
          { "kind": "p", "text": "Os lados 2, 3, 4 dão [[P=9]] aritmeticamente, mas [[2^2+3^2=13\\neq16]], então não existe ângulo reto e as fórmulas da página repousam sobre uma premissa falsa. Correção: verifique [[a^2+b^2=c^2]] antes de calcular." },
          { "kind": "h3", "text": "7. Misturar centímetros e metros" },
          { "kind": "p", "text": "Somar 3 m, 40 cm e 5 m como [[3+40+5=48]] produz 48 de nada. Correção: converta para uma unidade primeiro: [[40\\text{ cm}=0.4\\text{ m}]], depois [[P=8.4\\text{ m}]]." },
          { "kind": "h3", "text": "8. Misturar pés e polegadas" },
          { "kind": "p", "text": "Somar 3 ft, 48 in e 5 ft como 56 repete o mesmo erro de escala em unidades imperiais. Correção: [[48\\text{ in}=4\\text{ ft}]], depois [[P=12\\text{ ft}]]." },
          { "kind": "h3", "text": "9. Informar o perímetro em unidades quadradas" },
          { "kind": "p", "text": "Escrever [[P=12\\text{ m}^2]]. O erro geralmente vem de copiar uma unidade de área por hábito após resolver problemas de área. Correção: perímetros são comprimentos, então [[P=12\\text{ m}]]." },
          { "kind": "h3", "text": "10. Informar o semiperímetro como uma área" },
          { "kind": "p", "text": "Tratar [[s=6]] como 6 unidades quadradas. O semiperímetro é um comprimento, metade de uma fronteira, não uma superfície. Correção: [[s=6]] unidades de comprimento, ponto final." },
          { "kind": "h3", "text": "11. Arredondar cedo demais" },
          { "kind": "p", "text": "Arredondar 2.5 para 3 antes de somar dá [[3+6+6.5=15.5]] em vez dos verdadeiros 15. O erro parece inofensivo porque o arredondamento parece pequeno. Correção: mantenha precisão total durante o cálculo e arredonde apenas a resposta final." },
          { "kind": "h3", "text": "12. Usar apenas dois lados na calculadora existente" },
          { "kind": "p", "text": "Inserir [[a=3]], [[b=4]] e nenhum [[c]] deixa a fronteira aberta. A calculadora precisa dos três comprimentos porque um perímetro é um total fechado. Correção: encontre primeiro o lado faltante com o teorema de Pitágoras, depois calcule." },
          { "kind": "h3", "text": "13. Ignorar a desigualdade triangular" },
          { "kind": "p", "text": "Os lados 2, 3, 10 dão [[P=15]] aritmeticamente, mas [[2+3<10]], então nenhum triângulo existe. Correção: confira [[a+b>c]] antes de confiar em qualquer resultado construído a partir dos três números." },
          { "kind": "h3", "text": "14. Assumir que o semiperímetro é um caminho físico de meia fronteira" },
          { "kind": "p", "text": "Procurar a caminhada de 6 unidades ao longo das arestas 3-4-5. Nenhum meio caminho contínuo único equivale a [[s]] em geral; [[s]] é metade do total numérico. Correção: trate [[s]] como um número para fórmulas, não uma rota a percorrer." },
          { "kind": "h3", "text": "15. Confundir o perímetro com a soma apenas dos catetos perpendiculares" },
          { "kind": "p", "text": "Calcular [[a+b=7]] e parar, como se a hipotenusa fosse decoração interna. Correção: a hipotenusa é uma aresta de fronteira; [[P=a+b+c]], os três termos, toda vez." },
          { "kind": "h3", "text": "16. Assumir que o perímetro sozinho determina a área do triângulo" },
          { "kind": "p", "text": "Acreditar que [[P=30]] fixa [[K]]. O triângulo 5-12-13 ([[K=30]]) e o triângulo 7.5-10-12.5 ([[K=37.5]]) compartilham [[P=30]] com áreas diferentes. Correção: a área precisa de mais que o total da fronteira; use os catetos ou a fórmula de Herão." },
          { "kind": "h3", "text": "Errado x certo: um exemplo concreto" },
          { "kind": "p", "text": "Dados [[a=3]], [[b=4]], [[c=5]]. Perímetro correto: [[P=3+4+5=12]]. Omitindo incorretamente a hipotenusa: [[3+4=7]]. Sete não é o perímetro completo porque a terceira aresta da fronteira nunca foi contada. Semiperímetro correto: [[s=\\frac{12}{2}=6]]. Seis não é o comprimento total da fronteira: é metade dele, o valor de que fórmulas como a de Herão precisam. A aritmética parece confiante nos três casos; apenas a geometria os distingue." }
        ]
      },
      "sec-verify": {
        "h2": "Como verificar se o perímetro do seu triângulo retângulo está correto",
        "blocks": [
          { "kind": "p", "text": "Sete verificações independentes, todas demonstradas no triângulo 3-4-5 ([[a=3]], [[b=4]], [[c=5]], [[P=12]], [[s=6]]). A concordância entre rotas diferentes é a evidência mais forte de que uma resposta está certa, tanto no dever de casa quanto na medição prática." },
          { "kind": "h3", "text": "Método 1: Some os três lados novamente" },
          { "kind": "p", "text": "Execute [[P=a+b+c]] do zero: [[P=3+4+5=12]]. Uma segunda passada com os números redigitados pega erros de digitação e dígitos trocados que uma única passada esconde." },
          { "kind": "h3", "text": "Método 2: Divida o perímetro por dois" },
          { "kind": "p", "text": "Calcule [[s=\\frac{P}{2}]]: [[s=\\frac{12}{2}=6]]. Se a divisão ao meio não corresponder à saída do modo de semiperímetro, um dos dois cálculos saiu errado e ambos merecem uma segunda olhada." },
          { "kind": "h3", "text": "Método 3: Dobre o semiperímetro" },
          { "kind": "p", "text": "Confira [[[\\boxed{P=2s}]]]: [[P=2\\times6=12]]. Este é o inverso do Método 2 e pega a mesma classe de erro pela outra direção: um [[s]] errado falha aqui mesmo quando a adição original parecia boa." },
          { "kind": "h3", "text": "Método 4: Verifique a relação pitagórica" },
          { "kind": "p", "text": "Confirme [[a^2+b^2=c^2]]: [[3^2+4^2=9+16=25=5^2]]. Isso verifica a identificação dos lados por trás de todo outro cálculo; uma hipotenusa errada significa que um lado foi rotulado errado, e [[P]] e [[s]] precisam ser reconstruídos." },
          { "kind": "h3", "text": "Método 5: Verifique a desigualdade triangular" },
          { "kind": "p", "text": "Confirme [[a+b>c]]: [[3+4=7>5]]. Os três comprimentos precisam ser capazes de formar um triângulo antes que a verificação do ângulo reto signifique alguma coisa. Uma falha aqui o manda de volta às medidas, não à aritmética." },
          { "kind": "h3", "text": "Método 6: Verifique as unidades de medida" },
          { "kind": "p", "text": "Confirme que os três lados usam unidades compatíveis. Unidades mistas são o erro mais silencioso deste tópico: a aritmética parece limpa enquanto a escala está errada. Releia o seletor de unidade de cada entrada antes de confiar no total." },
          { "kind": "h3", "text": "Método 7: Compare com a visualização ao vivo" },
          { "kind": "p", "text": "A calculadora desenha o triângulo a partir dos lados inseridos. Se o desenho não se parece em nada com o objeto medido, um lado foi atribuído errado: o lado inserido mais longo deve ficar oposto ao canto quadrado. A figura é uma testemunha independente, e vale uma olhada antes que os números entrem em um pedido ou relatório." }
        ]
      },
      "sec-related": {
        "h2": "Explore calculadoras relacionadas de triângulo retângulo",
        "blocks": [
          { "kind": "p", "text": "Medidas diferentes pedem calculadoras diferentes." }
        ]
      },
      "sec-faq": {
        "h2": "Perguntas frequentes",
        "blocks": []
      },
      "sec-conclusion": {
        "h2": "Uma fronteira, duas medidas úteis",
        "blocks": [
          { "kind": "p", "text": "O perímetro totaliza a fronteira; o semiperímetro divide esse total ao meio para as fórmulas que precisam dele. O triângulo 3-4-5 carrega a história toda em miniatura: [[P=12]] unidades de contorno para o pedido de material, [[s=6]] unidades prontas para a fórmula de Herão ou a relação do raio inscrito. Uma adição e uma divisão ao meio cobrem os dois trabalhos." },
          { "kind": "p", "text": "O hábito de trabalho é simples: rotule a hipotenusa corretamente, inclua os três lados, iguale as unidades, mantenha os decimais sem arredondar até o fim e verifique por um segundo método. Com esses hábitos, [[P=a+b+c]] e [[s=\\frac{a+b+c}{2}]] são duas das medidas mais confiáveis da geometria." }
        ]
      }
    },
    "relatedHeading": "Explore calculadoras relacionadas de triângulo retângulo",
    "relatedIntro": "Medidas diferentes pedem calculadoras diferentes.",
    "relatedItems": [
      { "href": "/right-triangle-perimeter-calculator/", "label": "Calculadora de perímetro de triângulo retângulo" },
      { "href": "/right-triangle-semiperimeter-calculator/", "label": "Calculadora de semiperímetro de triângulo retângulo" },
      { "href": "/right-triangle-area-from-semiperimeter-calculator/", "label": "Calculadora de área de triângulo retângulo a partir do semiperímetro" },
      { "href": "/right-triangle-area-from-legs-calculator/", "label": "Calculadora de área de triângulo retângulo a partir dos catetos" },
      { "href": "/pythagorean-theorem-calculator/", "label": "Calculadora do teorema de Pitágoras" },
      { "href": "/missing-leg-from-c-and-a-calculator/", "label": "Calculadora de cateto faltante de triângulo retângulo" }
    ],
    "faqHeading": "Perguntas frequentes",
    "faqs": [
      {
        "question": "Qual é a fórmula do perímetro de um triângulo retângulo?",
        "answer": "P = a + b + c, onde a e b são os dois catetos e c é a hipotenusa. Some os três comprimentos de lado; o total é o comprimento completo da fronteira em unidades lineares. Para um triângulo 3-4-5, P = 3 + 4 + 5 = 12 unidades. Todo lado deve ser incluído, incluindo a hipotenusa, porque ela é uma das três arestas da fronteira."
      },
      {
        "question": "Qual é a fórmula do semiperímetro de um triângulo retângulo?",
        "answer": "s = (a + b + c) / 2, exatamente metade do perímetro, equivalentemente s = P / 2. Some os três lados primeiro, depois divida uma vez. Para um triângulo 3-4-5, s = (3 + 4 + 5) / 2 = 6 unidades. É um comprimento, não uma área, e é a entrada que fórmulas como a de Herão esperam."
      },
      {
        "question": "Qual é a diferença entre perímetro e semiperímetro?",
        "answer": "O perímetro é a fronteira inteira, P = a + b + c; o semiperímetro é metade dela, s = P / 2. Para um triângulo 6-8-10, P = 24 e s = 12. Use P para estimativas de material ao redor de um contorno e s como entrada de fórmulas avançadas de geometria. Os dois diferem exatamente por um fator de dois, sempre."
      },
      {
        "question": "Por que a hipotenusa é incluída no perímetro?",
        "answer": "Porque o perímetro mede a fronteira externa completa, e a hipotenusa é uma de suas três arestas. Percorrer o triângulo significa percorrer a hipotenusa também. Omiti-la mede um caminho aberto, não um contorno fechado. Para 3-4-5, deixar o 5 de fora dá 7, que não é o perímetro de nenhum triângulo com esses lados."
      },
      {
        "question": "Posso calcular o perímetro se um lado estiver faltando?",
        "answer": "Não diretamente: a fórmula precisa dos três comprimentos de fronteira. Encontre primeiro o lado faltante com o teorema de Pitágoras: c = sqrt(a^2 + b^2) para uma hipotenusa faltante, ou a = sqrt(c^2 - b^2) para um cateto faltante. Com a = 6 e b = 8, c = 10, então P = 6 + 8 + 10 = 24. A calculadora desta página exige os três lados."
      },
      {
        "question": "Como encontro a hipotenusa antes de calcular o perímetro?",
        "answer": "Use c = sqrt(a^2 + b^2) com os dois catetos conhecidos. Para a = 5 e b = 12: c = sqrt(25 + 144) = sqrt(169) = 13. Depois some os três lados: P = 5 + 12 + 13 = 30. Confirme que o resultado é o lado mais longo; se não for, os catetos foram rotulados errado."
      },
      {
        "question": "Por que o semiperímetro é útil na geometria?",
        "answer": "Ele é a variável natural da fórmula de Herão, K = sqrt(s(s - a)(s - b)(s - c)), e da relação do raio inscrito K = r x s. As fórmulas de área continuam produzindo metades, e o semiperímetro as absorve em um número conveniente. Para 3-4-5, s = 6 alimenta ambas as fórmulas e ambas retornam K = 6. Ele conecta comprimentos de lados à área e à geometria do círculo."
      },
      {
        "question": "O semiperímetro é metade da área do triângulo?",
        "answer": "Não. O semiperímetro é metade do perímetro, um comprimento medido em unidades como metros ou pés. A área é uma superfície bidimensional medida em unidades quadradas. Para o triângulo 3-4-5, s = 6 unidades enquanto a área é 6 unidades quadradas; os números coincidentes são uma coincidência deste triângulo em particular, não uma regra."
      },
      {
        "question": "Quais unidades devo usar para o perímetro?",
        "answer": "Qualquer unidade linear, desde que os três lados a compartilhem: metros, centímetros, milímetros, quilômetros, pés, polegadas, jardas ou milhas. Converta antes de somar: 3 ft, 48 in, 5 ft viram 3 ft, 4 ft, 5 ft, dando P = 12 ft. Nunca informe um perímetro em unidades quadradas; é um comprimento, não uma superfície."
      },
      {
        "question": "Posso calcular o perímetro usando medidas decimais?",
        "answer": "Sim. As fórmulas tratam decimais exatamente como números inteiros. Com a = 2.5, b = 6, c = 6.5: P = 2.5 + 6 + 6.5 = 15 unidades e s = 15 / 2 = 7.5 unidades. Mantenha precisão total durante a soma e arredonde apenas a resposta final para a exatidão que as medidas justificam."
      },
      {
        "question": "Como verifico se três lados formam um triângulo retângulo válido?",
        "answer": "Confirme a relação pitagórica a^2 + b^2 = c^2 com c como o lado mais longo, e confirme a desigualdade triangular a + b > c. Para 3, 4, 5: 9 + 16 = 25 e 3 + 4 > 5, então o triângulo é válido e retângulo. Falhar em qualquer teste significa que as medidas precisam ser reconferidas antes que qualquer perímetro seja confiado."
      },
      {
        "question": "Qual é a relação entre semiperímetro, raio inscrito e fórmula de Herão?",
        "answer": "O semiperímetro alimenta ambas: K = r x s o liga ao raio inscrito, e K = sqrt(s(s - a)(s - b)(s - c)) é a fórmula de Herão construída sobre ele. Para um triângulo retângulo, o raio inscrito também decorre dos lados como r = (a + b - c) / 2. Com 3-4-5, s = 6 e r = 1, então K = 1 x 6 = 6, igualando o resultado de Herão."
      }
    ]
  }
};
