// Batch 3: Portuguese (pt), Bengali (bn), and Japanese (ja) translations for the
// Right Triangle Area From Hypotenuse and Altitude Guide (Page 19 of 45).
//
// Structure per language:
// - tocHeading, tocItems (18 entries keyed by section id)
// - sections (17 entries: sec-intro, sec-understand, sec-formula, sec-relationship,
//   sec-max, sec-howto, sec-examples, sec-applications, sec-geomean, sec-legs,
//   sec-valid, sec-units, sec-mistakes, sec-verify, sec-altitude-table, sec-conclusion)
//   Each section: h2, blocks (ordered {kind: 'p'|'h3', text}), optional steps,
//   table, imgAlt, figcaption, closingParagraphs (after steps or tables).
// - faqs (12 question/answer pairs)
// - relatedHeading, relatedItems (6 calculator names)
//
// Formulas, KaTeX markup ([[...]] and [[[..]]]), variable names, numbers, URLs, and
// HTML tags are preserved exactly as in the English source.
export const AREA_FROM_HYPOTENUSE_ALTITUDE_TRANSLATIONS_BATCH3 = {
  "pt": {
    "tocHeading": "Neste Guia",
    "tocItems": {
      "sec-intro": "Como Calcular a Área de um Triângulo Retângulo a Partir da Hipotenusa e da Altura",
      "sec-understand": "Entendendo a Hipotenusa, os Catetos e a Altura",
      "sec-formula": "Por Que a Fórmula da Área É Metade da Hipotenusa Vezes a Altura",
      "sec-relationship": "Como a Hipotenusa e a Altura se Relacionam com os Dois Catetos",
      "sec-max": "Por Que a Altura Não Pode Exceder Metade da Hipotenusa",
      "sec-howto": "Como Usar a Calculadora de Área pela Hipotenusa e Altura",
      "sec-examples": "Exemplos Resolvidos Passo a Passo",
      "sec-applications": "Aplicações na Vida Real",
      "sec-geomean": "A Relação da Média Geométrica",
      "sec-legs": "Recuperando os Dois Catetos a Partir da Hipotenusa e da Altura",
      "sec-valid": "Verificando se Suas Medidas São Válidas",
      "sec-units": "Unidades de Medida e Arredondamento",
      "sec-mistakes": "Erros Comuns",
      "sec-verify": "Como Verificar Sua Área",
      "sec-altitude-table": "Como a Altura Afeta a Área",
      "sec-related": "Explore Calculadoras Relacionadas de Triângulo Retângulo",
      "sec-faq": "Perguntas Frequentes",
      "sec-conclusion": "Conclusão"
    },
    "sections": {
      "sec-intro": {
        "h2": "Como Calcular a Área de um Triângulo Retângulo Usando Sua Hipotenusa e Altura",
        "blocks": [
          { "kind": "p", "text": "Um triângulo retângulo tem uma hipotenusa de [[10\\text{ m}]] e a altura traçada até essa hipotenusa mede [[4.8\\text{ m}]]. Aplique [[K=ch/2]]: [[K=(10\\times4.8)/2]], [[[\\boxed{K=24\\text{ m}^2}]]]. O triângulo ocupa 24 metros quadrados de área plana. Este é o método completo que a calculadora automatiza: um lado, sua altura perpendicular, uma multiplicação, uma divisão por dois." },
          { "kind": "p", "text": "A hipotenusa funciona como base porque qualquer lado de um triângulo pode ser a base quando a altura perpendicular correspondente é conhecida. A altura é o segmento perpendicular do vértice do ângulo reto até a hipotenusa, e deve encontrar a hipotenusa em ângulo reto; um segmento inclinado não é a altura que esta fórmula exige. Como a área depende apenas da base e de sua altura, os dois catetos não são necessários como entradas, e o resultado é sempre expresso nas unidades quadradas da unidade de comprimento usada." }
        ]
      },
      "sec-understand": {
        "h2": "Entendendo a Hipotenusa, os Catetos e a Altura",
        "blocks": [
          { "kind": "p", "text": "A notação usada em todo o texto é: [[A]], [[B]] e [[C]] são os vértices e ângulos com [[C=90^\\circ]]; [[a]] e [[b]] são os dois catetos; [[c]] é a hipotenusa oposta a [[C]]; [[h]] é a altura perpendicular do vértice [[C]] até a hipotenusa; [[D]] é onde a altura encontra a hipotenusa; [[x]] e [[y]] são os dois segmentos da hipotenusa; e [[K]] é a área, usada em todo lugar para nunca ser confundida com o ângulo [[A]]." },
          { "kind": "h3", "text": "O Que É um Triângulo Retângulo?" },
          { "kind": "p", "text": "Um triângulo retângulo contém exatamente um ângulo de 90 graus. Seus dois catetos se encontram nesse ângulo, e a hipotenusa fica oposta a ele como o lado mais longo. Os outros dois ângulos são agudos, e como os três ângulos somam 180 graus, [[A+B+C=180^\\circ]] com [[C=90^\\circ]] resulta em [[A+B=90^\\circ]]. O método da altura depende disso: a base é o lado mais longo, a altura desce do canto do ângulo reto." },
          { "kind": "h3", "text": "O Que É a Hipotenusa?" },
          { "kind": "p", "text": "A hipotenusa é o lado oposto ao ângulo reto, rotulado como [[c]] na calculadora. Para encontrá-la em qualquer rotação, localize o lado que não toca o marcador quadrado do ângulo reto; esse lado é a hipotenusa. Ela é mais longa que qualquer cateto e não precisa ser desenhada horizontalmente: uma base é um lado de referência escolhido, não uma direção na tela." },
          { "kind": "h3", "text": "O Que É uma Altura em Geometria?" },
          { "kind": "p", "text": "Uma altura é um segmento de reta perpendicular traçado de um vértice até a reta que contém o lado oposto. Deve formar um ângulo de 90 graus com esse lado, e é isso que a torna uma altura em vez de apenas uma linha. Uma altura não é necessariamente um dos lados originais do triângulo, e qual segmento conta como altura muda com a base escolhida." },
          { "kind": "h3", "text": "Entendendo a Altura Relativa à Hipotenusa" },
          { "kind": "p", "text": "No triângulo [[ABC]], [[C]] é o vértice do ângulo reto e [[AB]] é a hipotenusa. A altura [[h]] é o segmento [[CD]] traçado de [[C]] perpendicular a [[AB]], de modo que [[CD\\perp AB]], [[CD=h]] e [[AB=c]], com [[D]] como o pé, dividindo o triângulo em dois triângulos retângulos menores aninhados dentro dele." },
          { "kind": "h3", "text": "Como a Altura Divide a Hipotenusa" },
          { "kind": "p", "text": "Suponha que a altura corte a hipotenusa em [[AD=x]] e [[DB=y]]. Então [[[\\boxed{x+y=c}]]]. Cada triângulo menor contém um ângulo reto e compartilha um ângulo agudo com o original, de modo que os três triângulos são semelhantes. A semelhança dos dois triângulos menores dá [[x/h=h/y]], e a multiplicação cruzada resulta em [[[\\boxed{h^2=xy}]]], a relação da média geométrica: a altura é a média geométrica dos dois segmentos da hipotenusa, e o ponto de partida para a regra da altura máxima abaixo." }
        ],
        "imgAlt": "Triângulo ABC com ângulo reto em C, hipotenusa AB rotulada c, altura CD rotulada h, segmentos x e y",
        "figcaption": "Triângulo ABC com a altura CD até a hipotenusa: AD = x, DB = y, x + y = c, h&sup2; = xy e K = ch/2."
      },
      "sec-formula": {
        "h2": "Por Que a Fórmula da Área É Metade da Hipotenusa Vezes a Altura?",
        "blocks": [
          { "kind": "p", "text": "A área de todo triângulo parte de uma regra: [[K=\\frac12\\times\\text{base}\\times\\text{perpendicular height}]]. Qualquer lado pode ser a base se a altura usada for perpendicular a ele. Esta calculadora escolhe a hipotenusa como base, de modo que [[\\text{base}=c]] e a altura perpendicular correspondente é a altura, [[\\text{height}=h]]. A substituição resulta em [[K=\\frac12\\times c\\times h]], que é [[[\\boxed{K=\\frac{ch}{2}}]]]." },
          { "kind": "h3", "text": "Por Que a Hipotenusa Pode Ser Usada como Base?" },
          { "kind": "p", "text": "A hipotenusa é simplesmente a base selecionada para este cálculo. A altura deve ser medida a partir do vértice oposto, o vértice do ângulo reto [[C]], e deve ser perpendicular à hipotenusa. Escolher um lado diferente como base, com sua própria altura correspondente, dá a mesma área. A base é um papel que um lado desempenha, não um rótulo permanente." },
          { "kind": "h3", "text": "Por Que a Fórmula É Dividida por Dois?" },
          { "kind": "p", "text": "Um triângulo preenche exatamente metade do paralelogramo construído sobre a mesma base com a mesma altura perpendicular. Com base 10 e altura 4.8, a área do paralelogramo é [[10\\times4.8=48]]; o triângulo dentro dele ocupa a metade, de modo que [[K=48/2=24]]. Pular a divisão por dois responde a uma pergunta diferente: a área do paralelogramo, não a do triângulo." },
          { "kind": "h3", "text": "A Fórmula Funciona Apenas para Triângulos Retângulos?" },
          { "kind": "p", "text": "A equação [[K=ch/2]] é a fórmula geral da área do triângulo, válida para qualquer triângulo sempre que [[c]] for a base escolhida e [[h]] sua altura perpendicular. O que torna esta página específica para triângulos retângulos é a leitura: [[c]] é a hipotenusa, [[h]] desce do vértice do ângulo reto, e a altura obedece à restrição extra [[h\\leq c/2]], que não tem significado para triângulos gerais." },
          { "kind": "h3", "text": "Por Que Você Não Precisa de Ambos os Catetos" },
          { "kind": "p", "text": "A área precisa de um lado e de sua altura perpendicular correspondente, nada mais. Quando [[c]] e [[h]] já são conhecidos, os catetos não acrescentam nenhuma informação que mude a área. A fórmula dos catetos [[K=ab/2]] é uma rota de entrada diferente para a mesma quantidade, útil quando os dados medidos são os dois lados perpendiculares. Se os catetos são o que você tem, a <a href=\"/right-triangle-area-from-legs-calculator/\">Calculadora de Área de Triângulo Retângulo a Partir dos Catetos</a> os recebe diretamente." }
        ],
        "imgAlt": "Comparação da área K = ch/2 usando hipotenusa e altura versus K = ab/2 usando os dois catetos",
        "figcaption": "Duas rotas para a mesma área: a hipotenusa com sua altura, e os dois catetos. Ambas equivalem à região delimitada, de modo que ch/2 = ab/2."
      },
      "sec-relationship": {
        "h2": "Como a Hipotenusa e a Altura se Relacionam com os Dois Catetos",
        "blocks": [
          { "kind": "p", "text": "Duas fórmulas de área válidas descrevem o mesmo triângulo: [[K=ab/2]] e [[K=ch/2]]. Como calculam a mesma área, [[\\frac{ab}{2}=\\frac{ch}{2}]]. Multiplique ambos os lados por dois: [[ab=ch]]. Reorganizando para a altura, obtém-se [[[\\boxed{h=\\frac{ab}{c}}]]]. A altura relativa à hipotenusa é o produto dos dois catetos dividido pela hipotenusa, o que explica por que as duas fórmulas de área nunca podem discordar em um triângulo consistente." },
          { "kind": "h3", "text": "Por Que Esta Relação É Útil" },
          { "kind": "p", "text": "Ela conecta três maneiras de descrever a mesma geometria. Os catetos e a hipotenusa determinam a altura, de modo que um triângulo medido por seus lados já a contém. A altura e a hipotenusa determinam a área, de modo que a área nunca precisa que os catetos sejam recuperados primeiro. Calcular a área por qualquer uma das fórmulas e comparar é uma das verificações mais fortes, porque um erro em uma rota raramente se reproduz na outra." },
          { "kind": "h3", "text": "Conectando a Fórmula com o Teorema de Pitágoras" },
          { "kind": "p", "text": "O teorema de Pitágoras [[a^2+b^2=c^2]] verifica a ligação entre os catetos e a hipotenusa. Tome um triângulo 3-4-5: [[3^2+4^2=5^2]], [[9+16=25]]. A altura é [[h=\\frac{3\\times4}{5}]], [[[\\boxed{h=2.4}]]]. A área pela hipotenusa e altura é [[K=\\frac{5\\times2.4}{2}=6]], e pelos catetos é [[K=\\frac{3\\times4}{2}=6]]. Ambas as fórmulas medem a mesma região delimitada, e [[h=ab/c]] é o elo que garante isso." },
          { "kind": "h3", "text": "Como a Altura Cria Dois Triângulos Semelhantes" },
          { "kind": "p", "text": "A altura divide o triângulo original em dois triângulos retângulos menores, cada um compartilhando seus ângulos agudos com o original. Dois ângulos compartilhados tornam os três triângulos semelhantes, de modo que os lados correspondentes mantêm a proporção. Igualar a altura aos segmentos da hipotenusa dá [[x/h=h/y]], que pela multiplicação cruzada resulta em [[h^2=xy]]: a relação da média geométrica é a semelhança escrita como equação." }
        ]
      },
      "sec-max": {
        "h2": "Por Que a Altura Nunca Pode Ser Maior que Metade da Hipotenusa?",
        "blocks": [
          { "kind": "p", "text": "Todo triângulo retângulo válido obedece a [[[\\boxed{h\\leq\\frac{c}{2}}]]]. Este é um fato geométrico, e merece uma demonstração." },
          { "kind": "h3", "text": "Entendendo os Dois Segmentos da Hipotenusa" },
          { "kind": "p", "text": "Lembre-se de que [[x+y=c]] e [[h^2=xy]]. O produto [[xy]] é máximo quando os dois segmentos são iguais, uma consequência da desigualdade entre as médias aritmética e geométrica: [[xy\\leq\\left(\\frac{x+y}{2}\\right)^2]]. Como [[x+y=c]], o lado direito torna-se [[c^2/4]], de modo que [[h^2\\leq\\frac{c^2}{4}]] e, para comprimentos positivos, [[h\\leq c/2]]. Em termos simples: divisões desiguais encolhem o produto e a altura; a altura mais alta vem da divisão mais equilibrada." },
          { "kind": "h3", "text": "O Que Acontece na Altura Máxima?" },
          { "kind": "p", "text": "O máximo ocorre quando [[x=y=c/2]], e então [[h=c/2]]. Isso produz um triângulo retângulo isósceles: seus dois catetos são iguais, e seus ângulos agudos são [[45^\\circ]] e [[45^\\circ]]. A altura então também atua como a mediana até a hipotenusa, um triângulo válido, não degenerado." },
          { "kind": "h3", "text": "Exemplo de Altura Máxima" },
          { "kind": "p", "text": "Dado [[c=10]], a altura máxima é [[h_{\\max}=10/2=5]]. A área máxima é [[K=\\frac{10\\times5}{2}]], [[[\\boxed{K_{\\max}=25}]]]. Nenhum triângulo retângulo com hipotenusa 10 pode ter uma altura acima de 5 e, portanto, nenhum pode ter uma área acima de 25 unidades quadradas." },
          { "kind": "h3", "text": "O Que Acontece Quando a Altura É Maior que c/2?" },
          { "kind": "p", "text": "Dados [[c=10]] e [[h=5.5]], a altura máxima válida é 5, de modo que essas medidas não podem descrever um triângulo retângulo. A fórmula ainda produz [[K=\\frac{10\\times5.5}{2}=27.5]], mas esse número não representa nenhum triângulo retângulo válido com essas medidas. Trate-o como um sinal de que uma medida está errada, não como uma área. Este guia não afirma se a calculadora rejeita tais entradas automaticamente." },
          { "kind": "h3", "text": "O Que Acontece Quando a Altura É Muito Menor?" },
          { "kind": "p", "text": "Uma altura pequena em relação à hipotenusa descreve um triângulo retângulo estreito e alongado, com um cateto muito mais longo que o outro. Com a hipotenusa fixa, a área diminui à medida que a altura diminui, porque [[K=ch/2]] escala diretamente com [[h]]. Não há limite inferior positivo: a altura pode se aproximar de zero, e o triângulo se achata em direção a uma linha degenerada." }
        ],
        "imgAlt": "Altura máxima c/2 em um triângulo retângulo isósceles, uma altura menor válida e um caso inválido",
        "figcaption": "Esquerda: a altura máxima em c/2 dá a maior área. Meio: uma altura menor válida. Direita: uma altura acima de c/2 não pode pertencer a um triângulo retângulo."
      },
      "sec-howto": {
        "h2": "Como Usar a Calculadora de Área de Triângulo Retângulo pela Hipotenusa e Altura",
        "blocks": [
          { "kind": "p", "text": "A calculadora precisa de exatamente duas entradas. O passo a passo abaixo segue a ordem da tela, de um triângulo medido até um resultado verificado." }
        ],
        "steps": [
          "<strong>Meça ou identifique a hipotenusa.</strong> O lado mais longo, oposto ao ângulo de 90 graus.",
          "<strong>Identifique a altura perpendicular traçada até a hipotenusa.</strong> Ela começa no vértice do ângulo reto e encontra a hipotenusa a 90 graus.",
          "<strong>Confirme que a altura é perpendicular.</strong> Um segmento medido ao longo de um lado inclinado não é a altura que a fórmula exige.",
          "<strong>Digite a hipotenusa [[c]].</strong>",
          "<strong>Digite a altura [[h]].</strong>",
          "<strong>Selecione unidades de comprimento compatíveis.</strong> Ambas as medidas devem usar a mesma unidade.",
          "<strong>Verifique se ambas as medidas são positivas.</strong> Comprimentos zero ou negativos não descrevem nenhum triângulo.",
          "<strong>Confirme que [[h\\leq c/2]].</strong> Para [[c=10]], qualquer altura acima de 5 não pode pertencer a um triângulo retângulo com essa hipotenusa.",
          "<strong>Click Calculate Area.</strong>",
          "<strong>Revise o resultado.</strong> A área aparece nas unidades quadradas correspondentes às entradas.",
          "<strong>Verifique as unidades quadradas.</strong> Metros dão metros quadrados; centímetros dão centímetros quadrados.",
          "<strong>Revise os passos da solução.</strong> Eles mostram a substituição e a aritmética.",
          "<strong>Use Reset antes de inserir um novo triângulo.</strong> Ele limpa ambos os campos para que o próximo cálculo comece do zero."
        ],
        "closingParagraphs": [
          "A calculadora não pede os dois catetos nem um ângulo: um lado e sua altura perpendicular correspondente determinam a área por completo."
        ]
      },
      "sec-examples": {
        "h2": "Exemplos Passo a Passo da Área de Triângulo Retângulo Usando Hipotenusa e Altura",
        "blocks": [
          { "kind": "p", "text": "Quatro exemplos resolvidos constroem o método do familiar para o novo. Cada um aplica [[K=ch/2]] com cada substituição mostrada, e cada um verifica se a altura respeita o limite do triângulo retângulo." },
          { "kind": "h3", "text": "Exemplo 1: Usando o Exemplo da Calculadora Existente" },
          { "kind": "p", "text": "Dados [[c=10]] e [[h=4.8]]. Passo 1: escreva a fórmula, [[K=ch/2]]. Passo 2: substitua, [[K=\\frac{10\\times4.8}{2}]]. Passo 3: multiplique, [[K=\\frac{48}{2}]]. Resposta final: [[[\\boxed{K=24\\text{ square units}}]]]]. A altura é válida porque [[4.8<5]], abaixo do máximo de metade da hipotenusa." },
          { "kind": "h3", "text": "Exemplo 2: Um Triângulo 3-4-5" },
          { "kind": "p", "text": "Dados [[a=3]], [[b=4]], [[c=5]]. Primeiro encontre a altura: [[h=ab/c]], de modo que [[h=\\frac{3\\times4}{5}=2.4]]. Então [[K=\\frac{5\\times2.4}{2}]], [[[\\boxed{K=6}]]]. Verifique com os catetos: [[K=\\frac{3\\times4}{2}=6]]. Ambas as rotas concordam, como devem." },
          { "kind": "h3", "text": "Exemplo 3: Um Triângulo Retângulo Isósceles" },
          { "kind": "p", "text": "Dados [[c=10]] e [[h=5]]. Então [[K=\\frac{10\\times5}{2}]], [[[\\boxed{K=25}]]]. A altura é igual à metade da hipotenusa, de modo que os catetos são iguais e cada ângulo agudo é [[45^\\circ]]. Esta é a maior área possível para qualquer triângulo retângulo com hipotenusa 10." },
          { "kind": "h3", "text": "Exemplo 4: Uma Altura Triangular Menor" },
          { "kind": "p", "text": "Dados [[c=13]] e [[h=5]]. Então [[K=\\frac{13\\times5}{2}]], [[[\\boxed{K=32.5\\text{ square units}}]]]]. A altura satisfaz o limite porque [[5\\leq6.5]]: metade da hipotenusa é 6.5, e 5 está confortavelmente abaixo dela." }
        ]
      },
      "sec-applications": {
        "h2": "Aplicações na Vida Real da Área de Triângulo Retângulo a Partir da Hipotenusa e da Altura",
        "blocks": [
          { "kind": "p", "text": "Doze situações resolvidas mostram a fórmula em diferentes escalas e unidades. Cada uma nomeia o triângulo na cena, dá as duas medidas, substitui passo a passo e declara a suposição por trás dela. Cada exemplo é um painel, perfil, seção ou modelo simplificado triangular retângulo; a fórmula se aplica ao triângulo modelado, não a todo objeto curvo ou irregular de mesmo nome." },
          { "kind": "h3", "text": "Exemplo 1: Janela de Vidro Triangular" },
          { "kind": "p", "text": "Um painel de vidro triangular retângulo tem uma hipotenusa de [[2.5\\text{ m}]] e uma altura perpendicular de [[1.2\\text{ m}]]. Usando [[K=ch/2]]: [[K=\\frac{2.5\\times1.2}{2}]], [[[\\boxed{K=1.5\\text{ m}^2}]]]. Esta é a área plana do vidro antes da moldura, supondo bordas retas e um ângulo reto verdadeiro." },
          { "kind": "h3", "text": "Exemplo 2: Painel Lateral de Rampa Triangular" },
          { "kind": "p", "text": "Um painel lateral triangular retângulo de uma rampa tem uma hipotenusa de [[4\\text{ m}]] e uma altura perpendicular de [[1.5\\text{ m}]]. Então [[K=\\frac{4\\times1.5}{2}]], [[[\\boxed{K=3\\text{ m}^2}]]]. O resultado descreve o perfil lateral triangular, não a superfície de caminhada." },
          { "kind": "h3", "text": "Exemplo 3: Seção de Vela Triangular" },
          { "kind": "p", "text": "Uma seção de vela triangular retângulo tem uma hipotenusa de [[13\\text{ ft}]] e uma altura de [[5\\text{ ft}]]. Então [[K=\\frac{13\\times5}{2}]], [[[\\boxed{K=32.5\\text{ ft}^2}]]]. Esta é a área plana do tecido antes das costuras ou da curvatura; velas reais enfunam, de modo que a vela é modelada como plana." },
          { "kind": "h3", "text": "Exemplo 4: Levantamento de uma Seção de Terreno Triangular" },
          { "kind": "p", "text": "Um lote simplificado triangular retângulo tem uma hipotenusa de [[50\\text{ m}]] e uma altura de [[12\\text{ m}]]. Então [[K=\\frac{50\\times12}{2}]], [[[\\boxed{K=300\\text{ m}^2}]]]. Isto estima a área sob um modelo simplificado que trata os limites como linhas retas em terreno plano." },
          { "kind": "h3", "text": "Exemplo 5: Chapa de Aço de Reforço" },
          { "kind": "p", "text": "Uma chapa de suporte de aço triangular retângulo tem uma hipotenusa de [[3.4\\text{ m}]] e uma altura de [[1.6\\text{ m}]]. Então [[K=\\frac{3.4\\times1.6}{2}]], [[[\\boxed{K=2.72\\text{ m}^2}]]]. Esta é apenas a área plana da chapa; a capacidade de carga é uma questão separada." },
          { "kind": "h3", "text": "Exemplo 6: Perfil Lateral de Escada" },
          { "kind": "p", "text": "Um perfil lateral simplificado de escada triangular retângulo tem uma hipotenusa de [[5\\text{ m}]] e uma altura de [[2\\text{ m}]]. Então [[K=\\frac{5\\times2}{2}]], [[[\\boxed{K=5\\text{ m}^2}]]]. Isto descreve o perfil lateral triangular, não a soma dos degraus e espelhos individuais." },
          { "kind": "h3", "text": "Exemplo 7: Placa de Sinalização Triangular" },
          { "kind": "p", "text": "Um painel de sinalização triangular retângulo tem uma hipotenusa de [[1.8\\text{ m}]] e uma altura de [[0.8\\text{ m}]]. Então [[K=\\frac{1.8\\times0.8}{2}]], [[[\\boxed{K=0.72\\text{ m}^2}]]]. 0.72 metros quadrados de material da face da placa; ferragens de montagem excluídas." },
          { "kind": "h3", "text": "Exemplo 8: Painel de Suporte Solar" },
          { "kind": "p", "text": "Um painel de suporte de montagem triangular retângulo tem uma hipotenusa de [[3\\text{ m}]] e uma altura de [[1.2\\text{ m}]]. Então [[K=\\frac{3\\times1.2}{2}]], [[[\\boxed{K=1.8\\text{ m}^2}]]]. Apenas a área do painel; nada sobre a eletricidade produzida, já que se trata de um suporte de montagem." },
          { "kind": "h3", "text": "Exemplo 9: Gabarito de Corte de Compensado" },
          { "kind": "p", "text": "Um gabarito de compensado triangular retângulo tem uma hipotenusa de [[2.5\\text{ m}]] e uma altura de [[1\\text{ m}]]. Então [[K=\\frac{2.5\\times1}{2}]], [[[\\boxed{K=1.25\\text{ m}^2}]]]. Peça triangular utilizável; o desperdício de corte precisa de uma margem separada." },
          { "kind": "h3", "text": "Exemplo 10: Faixa de Tecido Triangular" },
          { "kind": "p", "text": "Uma faixa triangular retângulo tem uma hipotenusa de [[6\\text{ ft}]] e uma altura de [[2.4\\text{ ft}]]. Então [[K=\\frac{6\\times2.4}{2}]], [[[\\boxed{K=7.2\\text{ ft}^2}]]]. 7.2 pés quadrados de material plano; margens de bainha adicionadas pelo fabricante." },
          { "kind": "h3", "text": "Exemplo 11: Grande Lote de Levantamento Triangular" },
          { "kind": "p", "text": "Uma seção de terreno triangular retângulo tem uma hipotenusa de [[80\\text{ m}]] e uma altura de [[30\\text{ m}]]. Então [[K=\\frac{80\\times30}{2}]], [[[\\boxed{K=1,200\\text{ m}^2}]]]. Válido apenas onde o lote é genuinamente triangular retângulo em terreno plano." },
          { "kind": "h3", "text": "Exemplo 12: Painel de Suporte de Cobertura Triangular" },
          { "kind": "p", "text": "Um painel de suporte de cobertura triangular retângulo tem uma hipotenusa de [[8\\text{ m}]] e uma altura de [[3.6\\text{ m}]]. Então [[K=\\frac{8\\times3.6}{2}]], [[[\\boxed{K=14.4\\text{ m}^2}]]]. Área triangular plana; cargas de vento e fixações são questões separadas." },
          { "kind": "h3", "text": "Comparação dos Exemplos Práticos" }
        ],
        "table": {
          "headers": ["Aplicação", "Hipotenusa c", "Altura h", "Área", "Unidade"],
          "rows": [
            ["Janela de vidro", "2.5", "1.2", "1.5", "m²"],
            ["Painel lateral de rampa", "4", "1.5", "3", "m²"],
            ["Seção de vela", "13", "5", "32.5", "ft²"],
            ["Seção de terreno", "50", "12", "300", "m²"],
            ["Chapa de reforço", "3.4", "1.6", "2.72", "m²"],
            ["Perfil de escada", "5", "2", "5", "m²"],
            ["Placa de sinalização", "1.8", "0.8", "0.72", "m²"],
            ["Painel de suporte solar", "3", "1.2", "1.8", "m²"],
            ["Gabarito de compensado", "2.5", "1", "1.25", "m²"],
            ["Faixa de tecido", "6", "2.4", "7.2", "ft²"],
            ["Grande lote de levantamento", "80", "30", "1,200", "m²"],
            ["Painel de suporte de cobertura", "8", "3.6", "14.4", "m²"]
          ]
        },
        "imgAlt": "Quatro aplicações de K = ch/2: janela de vidro, painel de rampa, vela e seção de terreno levantada",
        "figcaption": "A mesma fórmula em quatro cenários: uma janela de vidro, um painel lateral de rampa, uma vela e uma seção de terreno levantada."
      },
      "sec-geomean": {
        "h2": "Por Que o Quadrado da Altura É Igual ao Produto dos Dois Segmentos da Hipotenusa?",
        "blocks": [
          { "kind": "p", "text": "A altura encontra a hipotenusa em [[D]], dividindo-a em [[AD=x]] e [[DB=y]]. A relação é [[[\\boxed{h^2=xy}]]]. Aqui [[x]] é o primeiro segmento, [[y]] é o segundo, e [[h]] é a altura perpendicular. Vale a pena ver de onde isso vem em vez de decorá-lo." },
          { "kind": "h3", "text": "Como Esta Relação Funciona?" },
          { "kind": "p", "text": "A altura cria dois triângulos retângulos menores, cada um semelhante ao original e, portanto, semelhantes entre si. Igualar o cateto menor de um ao cateto maior do outro dá [[\\frac{x}{h}=\\frac{h}{y}]], que pela multiplicação cruzada resulta em [[h^2=xy]]. Tirando as raízes quadradas, [[h=\\sqrt{xy}]]: a altura é a média geométrica dos dois segmentos da hipotenusa, o número cujo quadrado é igual ao produto deles." },
          { "kind": "h3", "text": "Um Exemplo Numérico" },
          { "kind": "p", "text": "Dados [[x=4]] e [[y=9]], então [[h^2=4\\times9=36]], [[[\\boxed{h=6}]]]. A hipotenusa completa é [[c=4+9=13]], e a área é [[K=\\frac{13\\times6}{2}]], [[[\\boxed{K=39}]]]. Quando os dois segmentos da hipotenusa são conhecidos, a altura segue sem nenhuma medida de cateto." },
          { "kind": "h3", "text": "Quando Esta Relação É Útil?" },
          { "kind": "p", "text": "Ela aparece em exercícios de geometria onde a altura está faltando mas os segmentos são dados, em problemas de semelhança, e sempre que uma medida de altura precisa de uma verificação independente. Ela também explica o limite da altura: o produto [[xy]] é limitado pela hipotenusa fixa, de modo que a altura também é limitada. A calculadora não precisa de [[x]] e [[y]] como entradas; este teorema é conhecimento de apoio, não um campo da calculadora." }
        ]
      },
      "sec-legs": {
        "h2": "Como Recuperar os Dois Catetos Quando a Hipotenusa e a Altura São Conhecidas",
        "blocks": [
          { "kind": "p", "text": "A calculadora precisa apenas de [[c]] e [[h]] para a área, mas essas duas medidas também contêm informação suficiente para determinar os comprimentos dos dois catetos, a menos da troca de posições. Parta de [[a^2+b^2=c^2]] e [[ab=ch]]. Como [[(a^2-b^2)^2=(a^2+b^2)^2-4a^2b^2]], a substituição dá [[(a^2-b^2)^2=c^4-4c^2h^2]] e, portanto, [[[\\boxed{a^2,b^2=\\frac{c^2\\pm c\\sqrt{c^2-4h^2}}{2}}]]]. Os dois sinais correspondem às duas atribuições de catetos: trocar os catetos não muda nada sobre o triângulo ou sua área." },
          { "kind": "p", "text": "Exemplo numérico: dados [[c=10]] e [[h=4.8]], então [[ab=ch=48]] e [[a^2+b^2=100]]. Os catetos são [[a=6]] e [[b=8]]. Verifique: [[6^2+8^2=10^2]], [[36+64=100]]. A área confere de ambos os modos: [[K=\\frac{6\\times8}{2}=24]] e [[K=\\frac{10\\times4.8}{2}=24]]. Esta é uma percepção matemática adicional, não uma função extra da calculadora existente, e não deve desviar do propósito da calculadora: área a partir da hipotenusa e da altura." }
        ]
      },
      "sec-valid": {
        "h2": "Como Verificar se Suas Medidas de Hipotenusa e Altura São Válidas",
        "blocks": [
          { "kind": "p", "text": "Para um triângulo retângulo não degenerado, as entradas devem satisfazer três condições: [[c>0]], [[h>0]] e [[h\\leq c/2]]. As duas primeiras excluem comprimentos zero e negativos; a terceira é o limite da altura deduzido anteriormente. Todas as três devem valer ao mesmo tempo." },
          { "kind": "h3", "text": "Exemplo de Entrada Válida" },
          { "kind": "p", "text": "Dados [[c=12]] e [[h=5]], a altura máxima é [[h_{\\max}=6]]. Como [[5<6]], as medidas são válidas, e [[K=\\frac{12\\times5}{2}=30]]." },
          { "kind": "h3", "text": "Exemplo de Entrada Inválida" },
          { "kind": "p", "text": "Dados [[c=12]] e [[h=7]], a altura máxima é [[h_{\\max}=6]]. Como [[7>6]], as medidas não podem descrever um triângulo retângulo: com a hipotenusa fixa em 12, nenhuma divisão em segmentos [[x]] e [[y]] pode fazer [[\\sqrt{xy}]] chegar a 7." },
          { "kind": "h3", "text": "Caso Limite" },
          { "kind": "p", "text": "Dados [[c=12]] e [[h=6]], a altura é igual ao valor máximo possível. Este é um triângulo retângulo isósceles com dois catetos iguais, exatamente sobre o limite. O limite é inclusivo: [[h\\leq c/2]] permite a igualdade." },
          { "kind": "h3", "text": "E Quanto a Valores Zero ou Negativos?" },
          { "kind": "p", "text": "Uma hipotenusa deve ser positiva, e uma altura deve ser positiva para um triângulo não degenerado. Uma altura zero produz área zero e uma forma degenerada, uma linha em vez de um triângulo, enquanto comprimentos negativos não têm significado geométrico. Este guia não afirma que a calculadora realiza todas as validações automaticamente." }
        ]
      },
      "sec-units": {
        "h2": "Entendendo as Unidades de Área nos Cálculos com Hipotenusa e Altura",
        "blocks": [
          { "kind": "p", "text": "A área é bidimensional, de modo que sua unidade é o quadrado da unidade de comprimento. Em símbolos, [[\\text{m}\\times\\text{m}=\\text{m}^2]]. Os seletores de unidade existem para que o resultado possa ser rotulado corretamente." },
          { "kind": "h3", "text": "Por Que as Unidades Devem Coincidir" },
          { "kind": "p", "text": "A hipotenusa e a altura devem ser expressas na mesma unidade antes de aplicar a fórmula. Se a hipotenusa é 200 cm e a altura é 1 m, converta primeiro para 200 cm e 100 cm. Então [[K=\\frac{200\\times100}{2}]], [[K=10,000\\text{ cm}^2]], ou equivalentemente [[K=1\\text{ m}^2]]. Multiplicar medidas em unidades diferentes produz um número sem unidade clara, então converta primeiro e calcule depois." },
          { "kind": "h3", "text": "Por Que o Arredondamento Importa" },
          { "kind": "p", "text": "O arredondamento das medidas altera ligeiramente a área final, porque a altura é multiplicada diretamente nela. Mantenha a precisão total nos passos intermediários e arredonde apenas a resposta final; arredondar a altura cedo acumula o erro." },
          { "kind": "h3", "text": "Valores Exatos Versus Valores Medidos" },
          { "kind": "p", "text": "Medidas exatas, como a altura 5 de um triângulo retângulo isósceles com hipotenusa 10, comportam-se de modo diferente de leituras de fita ou instrumento. A incerteza do instrumento flui para a área, então trate o último dígito como apenas tão confiável quanto as entradas." }
        ]
      },
      "sec-mistakes": {
        "h2": "Erros Comuns ao Calcular a Área de Triângulo Retângulo a Partir da Hipotenusa e da Altura",
        "blocks": [
          { "kind": "p", "text": "A maioria das respostas erradas vem de entradas mal rotuladas, não de aritmética ruim. Os quinze erros abaixo cobrem quase todos." },
          { "kind": "h3", "text": "1. Confundir a Hipotenusa com um Cateto Perpendicular" },
          { "kind": "p", "text": "Inserir um cateto como hipotenusa encolhe a base. Correção: escolha o lado que não toca o marcador do ângulo reto." },
          { "kind": "h3", "text": "2. Medir a Altura ao Longo de um Lado Inclinado" },
          { "kind": "p", "text": "Um segmento ao longo de um lado não é a altura. Correção: ele deve sair do vértice do ângulo reto e atingir a hipotenusa a 90 graus." },
          { "kind": "h3", "text": "3. Usar uma Distância que Não É Perpendicular à Hipotenusa" },
          { "kind": "p", "text": "Uma distância não perpendicular do vértice até a hipotenusa é maior que a altura verdadeira, inflando a área. Correção: confirme a perpendicularidade primeiro." },
          { "kind": "h3", "text": "4. Usar a Altura do Vértice Errado" },
          { "kind": "p", "text": "Apenas a altura do vértice do ângulo reto combina com a hipotenusa." },
          { "kind": "h3", "text": "5. Esquecer de Dividir por Dois" },
          { "kind": "p", "text": "[[c\\times h]] é a área do paralelogramo, não a do triângulo. Correção: divida todo produto base-altura por dois." },
          { "kind": "h3", "text": "6. Inserir a Medida Errada como c" },
          { "kind": "p", "text": "Um lado mais curto inserido como hipotenusa encolhe a base. Correção: a hipotenusa é sempre o lado mais longo." },
          { "kind": "h3", "text": "7. Inserir a Medida Errada como h" },
          { "kind": "p", "text": "Um cateto inserido como altura quebra o pareamento perpendicular. Correção: a altura deve encontrar a hipotenusa em ângulo reto." },
          { "kind": "h3", "text": "8. Misturar Unidades de Comprimento Diferentes" },
          { "kind": "p", "text": "Uma hipotenusa de 2 m com uma altura de 150 cm não dá nenhum número significativo. Correção: converta para uma unidade primeiro." },
          { "kind": "h3", "text": "9. Relatar a Área em Unidades Lineares" },
          { "kind": "p", "text": "Uma área de 24 m² não é 24 m. Correção: escreva a unidade quadrada junto ao número." },
          { "kind": "h3", "text": "10. Inserir uma Altura Negativa" },
          { "kind": "p", "text": "Comprimentos não podem ser negativos; uma altura negativa indica um erro de digitação. Correção: reinsira a distância positiva medida." },
          { "kind": "h3", "text": "11. Inserir uma Hipotenusa Zero" },
          { "kind": "p", "text": "Uma hipotenusa zero significa que não existe triângulo. Correção: verifique se todo comprimento é positivo." },
          { "kind": "h3", "text": "12. Usar uma Altura Maior que Metade da Hipotenusa" },
          { "kind": "p", "text": "Uma altura de 6 com [[c=10]] viola o limite. Correção: reavalie o segmento medido." },
          { "kind": "h3", "text": "13. Supor que Todo Triângulo com a Mesma Base e Altura É Necessariamente Retângulo" },
          { "kind": "p", "text": "[[K=ch/2]] funciona para qualquer triângulo com base e altura correspondentes. Correção: aplique o limite da altura apenas a triângulos retângulos." },
          { "kind": "h3", "text": "14. Confundir a Altura h com Qualquer Cateto a ou b" },
          { "kind": "p", "text": "Em um triângulo 6-8-10 a altura é 4.8, que não é igual a nenhum cateto. Correção: mantenha [[a]], [[b]] e [[h]] separados." },
          { "kind": "h3", "text": "15. Supor que a Fórmula Valida Automaticamente a Geometria do Triângulo" },
          { "kind": "p", "text": "A aritmética nunca recusa uma entrada. Correção: execute você mesmo as verificações de validade." },
          { "kind": "h3", "text": "Errado Versus Correto: Um Exemplo Concreto" },
          { "kind": "p", "text": "Dados [[c=10]] e [[h=4]], o cálculo correto é [[K=\\frac{10\\times4}{2}=20]]. Pular a divisão por dois dá [[K=10\\times4=40]], o dobro da área do triângulo. Da mesma forma, [[h=6]] com [[c=10]] falha no limite da altura, embora a aritmética produza um número." }
        ]
      },
      "sec-verify": {
        "h2": "Como Verificar se a Área do Seu Triângulo Retângulo Está Correta",
        "blocks": [
          { "kind": "p", "text": "Várias verificações detectam os erros comuns. O triângulo 6-8-10 demonstra a maioria delas." },
          { "kind": "h3", "text": "Método 1: Verifique a Fórmula da Área" },
          { "kind": "p", "text": "Recalcule [[K=ch/2]] com os valores inseridos. Para [[c=10]] e [[h=4.8]], [[K=(10\\times4.8)/2=24]]. Uma segunda passagem detecta erros de digitação." },
          { "kind": "h3", "text": "Método 2: Verifique Usando os Dois Catetos" },
          { "kind": "p", "text": "Quando os catetos são conhecidos ou recuperados, [[K=ab/2]] deve concordar. Aqui [[(6\\times8)/2=24]] coincide com [[(10\\times4.8)/2=24]]: dois métodos, um triângulo, uma resposta." },
          { "kind": "h3", "text": "Método 3: Verifique o Teorema de Pitágoras" },
          { "kind": "p", "text": "Confirme [[a^2+b^2=c^2]]: [[36+64=100]]. Se os lados não o satisfazem, a identificação do triângulo está errada." },
          { "kind": "h3", "text": "Método 4: Verifique a Relação da Altura" },
          { "kind": "p", "text": "Confirme [[h=ab/c]]: [[(6\\times8)/10=4.8]]. Uma divergência significa que a altura inserida não pertence a este triângulo." },
          { "kind": "h3", "text": "Método 5: Verifique os Dois Segmentos da Hipotenusa" },
          { "kind": "p", "text": "Confirme [[x+y=c]] e [[h^2=xy]]. Com os segmentos 6.4 e 3.6: [[6.4+3.6=10]] e [[4.8^2=6.4\\times3.6]], já que [[23.04=23.04]]." },
          { "kind": "h3", "text": "Método 6: Verifique a Altura Máxima" },
          { "kind": "p", "text": "Confirme [[h\\leq c/2]]. Aqui [[4.8\\leq5]]. Qualquer área alegada de triângulo retângulo acima de [[c^2/4]] para a hipotenusa dada é impossível." },
          { "kind": "h3", "text": "Método 7: Verifique as Unidades" },
          { "kind": "p", "text": "Certifique-se de que o resultado está em unidades quadradas: metros dão metros quadrados, centímetros dão centímetros quadrados. Uma área relatada em unidades lineares está incompleta mesmo quando o número está certo." }
        ]
      },
      "sec-altitude-table": {
        "h2": "Como a Altura Afeta a Área de um Triângulo Retângulo?",
        "blocks": [
          { "kind": "p", "text": "De [[K=ch/2]], quando a hipotenusa é fixa a área muda diretamente com a altura. Dobrar a altura dobra a área; aumentar a altura aumenta a área na mesma proporção. A tabela abaixo fixa [[c=10]] e varia a altura até seu máximo de 5." }
        ],
        "table": {
          "headers": ["Altura h", "Área K"],
          "rows": [
            ["1", "5"],
            ["2", "10"],
            ["3", "15"],
            ["4", "20"],
            ["5", "25"]
          ]
        },
        "closingParagraphs": [
          "Todas as cinco linhas descrevem triângulos retângulos válidos porque cada altura está no máximo de 5 ou abaixo dele. A altura não pode exceder [[c/2]], e a área máxima ocorre quando os dois catetos são iguais. Note que os catetos não permanecem fixos enquanto a altura muda; cada linha é um triângulo diferente compartilhando uma hipotenusa."
        ]
      },
      "sec-conclusion": {
        "h2": "A Hipotenusa e Sua Altura São Tudo de que Você Precisa",
        "blocks": [
          { "kind": "p", "text": "O método hipotenusa-altura é a regra comum base-altura aplicada ao lado mais longo. Uma vez identificada a hipotenusa e com a altura perpendicular em mãos, a área está a uma multiplicação e uma divisão por dois de distância, sem necessidade de recuperar os catetos primeiro." },
          { "kind": "p", "text": "Seu valor real é a disciplina: perpendicularidade, o limite da altura e as relações da média geométrica transformam esboços aproximados em números verificáveis. Verifique a altura e a resposta conquista sua confiança." }
        ]
      }
    },
    "faqs": [
      { "question": "Como calcular a área de um triângulo retângulo usando sua hipotenusa e altura?", "answer": "Multiplique a hipotenusa c pela altura perpendicular h e divida por dois: K = ch/2. Por exemplo, c = 10 e h = 4.8 dão K = 24 unidades quadradas. Confirme que a altura encontra a hipotenusa em ângulo reto e que h é no máximo metade de c." },
      { "question": "Qual é a fórmula da área usando hipotenusa e altura?", "answer": "A fórmula é K = ch/2, onde K é a área, c é a hipotenusa como base, e h é a altura perpendicular até essa base. É a regra padrão da área do triângulo com o lado mais longo como base, e o resultado usa unidades quadradas correspondentes." },
      { "question": "O que é a altura relativa à hipotenusa?", "answer": "É o segmento perpendicular do vértice do ângulo reto C até a hipotenusa AB, encontrando-a no ponto D: a distância mais curta desse vértice até a hipotenusa e a única altura que combina com ela. Não é um cateto." },
      { "question": "A altura é o mesmo que a hipotenusa?", "answer": "Não. A hipotenusa c é o lado mais longo, oposto ao ângulo reto, enquanto a altura h é a queda perpendicular do vértice do ângulo reto até esse lado: c é a base, h é a altura. Em um triângulo 6-8-10, c = 10 e h = 4.8." },
      { "question": "A altura pode ser maior que metade da hipotenusa?", "answer": "Não. Para um triângulo retângulo válido, 0 < h <= c/2. A altura é mais alta quando divide a hipotenusa em duas metades iguais, atingindo exatamente c/2. Um valor maior, como h = 6 com c = 10, não pode pertencer a tal triângulo." },
      { "question": "Por que a altura máxima é metade da hipotenusa?", "answer": "De h ao quadrado = xy com x + y = c, o produto xy é máximo quando x = y = c/2. Então h ao quadrado <= c ao quadrado / 4, logo h <= c/2: a divisão mais equilibrada dá a altura mais alta." },
      { "question": "O que acontece quando a altura é igual à metade da hipotenusa?", "answer": "O triângulo é um triângulo retângulo isósceles: catetos iguais, ângulos agudos de 45 graus, e a altura também atuando como mediana até a hipotenusa. Este caso limite válido dá a maior área possível, K = c ao quadrado / 4." },
      { "question": "Posso calcular a área sem conhecer os dois catetos?", "answer": "Sim. A base e sua altura perpendicular correspondente são suficientes; os catetos não acrescentam nada sobre a área. Insira a hipotenusa c e a altura h, e K = ch/2 dá a área diretamente." },
      { "question": "Como a fórmula baseada na hipotenusa se relaciona com a fórmula dos catetos?", "answer": "Ambas calculam a mesma área. Igualar ab/2 a ch/2 e multiplicar por dois dá ab = ch, de modo que h = ab/c, e é por isso que calcular ambas é uma verificação tão forte." },
      { "question": "Qual é a relação entre a altura e os dois segmentos da hipotenusa?", "answer": "A altura satisfaz h ao quadrado = xy, onde x e y são os segmentos que ela corta da hipotenusa, de modo que ela é sua média geométrica. Ela vem da semelhança dos dois triângulos menores, via x/h = h/y." },
      { "question": "A hipotenusa e a altura podem determinar os dois catetos?", "answer": "Sim, a menos da troca entre eles. De a ao quadrado + b ao quadrado = c ao quadrado e ab = ch, os catetos seguem de (c ao quadrado +/- c vezes raiz quadrada de (c ao quadrado - 4h ao quadrado)) / 2. Para c = 10 e h = 4.8 isso dá os catetos 6 e 8." },
      { "question": "A calculadora funciona com centímetros, metros e pés?", "answer": "Sim, desde que ambas as entradas usem a mesma unidade: metros dão metros quadrados, centímetros dão centímetros quadrados, pés dão pés quadrados. Converta unidades mistas primeiro." }
    ],
    "relatedHeading": "Explore Calculadoras Relacionadas de Triângulo Retângulo",
    "relatedItems": [
      "Calculadora de Área de Triângulo Retângulo",
      "Calculadora de Área de Triângulo Retângulo a Partir do Ângulo",
      "Calculadora de Área de Triângulo Retângulo a Partir da Altura",
      "Calculadora de Área de Triângulo Retângulo a Partir dos Catetos",
      "Calculadora de Altura de Triângulo Retângulo",
      "Calculadora de Área de Triângulo Retângulo a Partir do Inraio e do Semiperímetro"
    ]
  },
  "bn": {
    "tocHeading": "এই নির্দেশিকায়",
    "tocItems": {
      "sec-intro": "অতিভুজ ও উচ্চতা থেকে সমকোণী ত্রিভুজের ক্ষেত্রফল কীভাবে গণনা করবেন",
      "sec-understand": "অতিভুজ, বাহু ও উচ্চতা বোঝা",
      "sec-formula": "ক্ষেত্রফলের সূত্র কেন অতিভুজের অর্ধেক গুণ উচ্চতা",
      "sec-relationship": "অতিভুজ ও উচ্চতা কীভাবে দুটি বাহুর সঙ্গে সম্পর্কিত",
      "sec-max": "উচ্চতা কেন অতিভুজের অর্ধেকের বেশি হতে পারে না",
      "sec-howto": "অতিভুজ ও উচ্চতা থেকে ক্ষেত্রফল ক্যালকুলেটর কীভাবে ব্যবহার করবেন",
      "sec-examples": "ধাপে ধাপে সমাধানকৃত উদাহরণ",
      "sec-applications": "বাস্তব জীবনে প্রয়োগ",
      "sec-geomean": "গুণোত্তর মধ্যক সম্পর্ক",
      "sec-legs": "অতিভুজ ও উচ্চতা জানা থাকলে দুটি বাহু পুনরুদ্ধার",
      "sec-valid": "আপনার পরিমাপ বৈধ কিনা যাচাই",
      "sec-units": "পরিমাপের একক ও রাউন্ডিং",
      "sec-mistakes": "সাধারণ ভুল",
      "sec-verify": "আপনার ক্ষেত্রফল কীভাবে যাচাই করবেন",
      "sec-altitude-table": "উচ্চতা কীভাবে ক্ষেত্রফলকে প্রভাবিত করে",
      "sec-related": "সম্পর্কিত সমকোণী ত্রিভুজ ক্যালকুলেটর দেখুন",
      "sec-faq": "প্রায়শই জিজ্ঞাসিত প্রশ্ন",
      "sec-conclusion": "উপসংহার"
    },
    "sections": {
      "sec-intro": {
        "h2": "অতিভুজ ও উচ্চতা ব্যবহার করে সমকোণী ত্রিভুজের ক্ষেত্রফল কীভাবে গণনা করবেন",
        "blocks": [
          { "kind": "p", "text": "একটি সমকোণী ত্রিভুজের অতিভুজ [[10\\text{ m}]] এবং সেই অতিভুজের ওপর অঙ্কিত উচ্চতা [[4.8\\text{ m}]]। [[K=ch/2]] প্রয়োগ করুন: [[K=(10\\times4.8)/2]], [[[\\boxed{K=24\\text{ m}^2}]]]। ত্রিভুজটি 24 বর্গমিটার সমতল ক্ষেত্রফল ঘিরে আছে। ক্যালকুলেটর যে সম্পূর্ণ পদ্ধতিটি স্বয়ংক্রিয় করে, এটি তাই: একটি বাহু, তার লম্ব উচ্চতা, একটি গুণ, একটি অর্ধেক।" },
          { "kind": "p", "text": "অতিভুজ ভূমি হিসেবে কাজ করে, কারণ মিলিত লম্ব উচ্চতা জানা থাকলে ত্রিভুজের যেকোনো বাহুই ভূমি হতে পারে। উচ্চতা হলো সমকোণ শীর্ষবিন্দু থেকে অতিভুজ পর্যন্ত লম্ব খণ্ড, এবং এটি অতিভুজকে সমকোণে ছেদ করতেই হবে; ঢালু খণ্ড এই সূত্রের প্রয়োজনীয় উচ্চতা নয়। যেহেতু ক্ষেত্রফল শুধু ভূমি ও তার উচ্চতার ওপর নির্ভর করে, দুটি বাহু ইনপুট হিসেবে প্রয়োজন হয় না, এবং ফলাফল সর্বদা ব্যবহৃত দৈর্ঘ্য এককের বর্গ এককে প্রকাশ করা হয়।" }
        ]
      },
      "sec-understand": {
        "h2": "অতিভুজ, বাহু ও উচ্চতা বোঝা",
        "blocks": [
          { "kind": "p", "text": "পুরো লেখায় ব্যবহৃত সংকেত: [[A]], [[B]] ও [[C]] হলো শীর্ষবিন্দু ও কোণ, যেখানে [[C=90^\\circ]]; [[a]] ও [[b]] হলো দুটি বাহু; [[c]] হলো [[C]]-এর বিপরীত অতিভুজ; [[h]] হলো [[C]] শীর্ষবিন্দু থেকে অতিভুজ পর্যন্ত লম্ব উচ্চতা; [[D]] হলো যেখানে উচ্চতা অতিভুজকে ছেদ করে; [[x]] ও [[y]] হলো অতিভুজের দুটি খণ্ড; এবং [[K]] হলো ক্ষেত্রফল, যা সর্বত্র ব্যবহার করা হয় যাতে কোণ [[A]]-এর সঙ্গে কখনো গুলিয়ে না যায়।" },
          { "kind": "h3", "text": "সমকোণী ত্রিভুজ কী?" },
          { "kind": "p", "text": "সমকোণী ত্রিভুজে ঠিক একটি 90-ডিগ্রি কোণ থাকে। এর দুটি বাহু সেই কোণে মিলিত হয়, এবং অতিভুজ তার বিপরীতে সবচেয়ে দীর্ঘ বাহু হিসেবে থাকে। বাকি দুটি কোণ সূক্ষ্ম, এবং যেহেতু তিনটি কোণের যোগফল 180 ডিগ্রি, [[A+B+C=180^\\circ]] ও [[C=90^\\circ]] থেকে [[A+B=90^\\circ]] পাওয়া যায়। উচ্চতা পদ্ধতি এর ওপর নির্ভর করে: ভূমি হলো সবচেয়ে দীর্ঘ বাহু, উচ্চতা নামে সমকোণ কোণা থেকে।" },
          { "kind": "h3", "text": "অতিভুজ কী?" },
          { "kind": "p", "text": "অতিভুজ হলো সমকোণের বিপরীত বাহু, ক্যালকুলেটরে যাকে [[c]] দিয়ে চিহ্নিত করা হয়। যেকোনো ঘূর্ণনে এটি খুঁজতে, সেই বাহুটি খুঁজুন যা বর্গাকার সমকোণ চিহ্ন স্পর্শ করে না; সেই বাহুটিই অতিভুজ। এটি যেকোনো বাহুর চেয়ে দীর্ঘ এবং অনুভূমিকভাবে আঁকা জরুরি নয়: ভূমি হলো নির্বাচিত রেফারেন্স বাহু, পর্দার দিক নয়।" },
          { "kind": "h3", "text": "জ্যামিতিতে উচ্চতা কী?" },
          { "kind": "p", "text": "উচ্চতা হলো শীর্ষবিন্দু থেকে বিপরীত বাহু ধারণকারী রেখা পর্যন্ত অঙ্কিত লম্ব রেখাখণ্ড। এটি সেই বাহুর সঙ্গে 90-ডিগ্রি কোণ গঠন করতেই হবে, আর এটাই এটিকে শুধু একটি রেখা না রেখে উচ্চতা করে। উচ্চতা ত্রিভুজের মূল বাহুগুলোর একটি হওয়া জরুরি নয়, এবং নির্বাচিত ভূমির সঙ্গে কোন খণ্ড উচ্চতা হিসেবে গণ্য হবে তা বদলে যায়।" },
          { "kind": "h3", "text": "অতিভুজের ওপর উচ্চতা বোঝা" },
          { "kind": "p", "text": "[[ABC]] ত্রিভুজে, [[C]] হলো সমকোণ শীর্ষবিন্দু এবং [[AB]] হলো অতিভুজ। উচ্চতা [[h]] হলো [[C]] থেকে [[AB]]-এর ওপর লম্বভাবে অঙ্কিত খণ্ড [[CD]], অর্থাৎ [[CD\\perp AB]], [[CD=h]] ও [[AB=c]], যেখানে [[D]] হলো পাদবিন্দু, যা ত্রিভুজটিকে ভেতরে বসানো দুটি ছোট সমকোণী ত্রিভুজে ভাগ করে।" },
          { "kind": "h3", "text": "উচ্চতা কীভাবে অতিভুজকে ভাগ করে" },
          { "kind": "p", "text": "ধরা যাক উচ্চতা অতিভুজকে [[AD=x]] ও [[DB=y]]-তে কাটে। তাহলে [[[\\boxed{x+y=c}]]]। প্রতিটি ছোট ত্রিভুজে একটি সমকোণ আছে এবং মূল ত্রিভুজের সঙ্গে একটি সূক্ষ্মকোণ ভাগ করে, ফলে তিনটি ত্রিভুজই সদৃশ। দুটি ছোট ত্রিভুজের সদৃশতা থেকে [[x/h=h/y]] পাওয়া যায়, এবং বজ্রগুণনে [[[\\boxed{h^2=xy}]]] পাওয়া যায়, গুণোত্তর মধ্যক সম্পর্ক: উচ্চতা হলো অতিভুজের দুটি খণ্ডের গুণোত্তর মধ্যক, এবং নিচে সর্বোচ্চ-উচ্চতা নিয়মের সূচনা বিন্দু।" }
        ],
        "imgAlt": "ABC ত্রিভুজ, C-তে সমকোণ, AB অতিভুজ c দিয়ে চিহ্নিত, CD উচ্চতা h দিয়ে চিহ্নিত, x ও y খণ্ড",
        "figcaption": "অতিভুজের ওপর CD উচ্চতাসহ ABC ত্রিভুজ: AD = x, DB = y, x + y = c, h&sup2; = xy এবং K = ch/2।"
      },
      "sec-formula": {
        "h2": "ক্ষেত্রফলের সূত্র কেন অতিভুজের অর্ধেক গুণ উচ্চতা?",
        "blocks": [
          { "kind": "p", "text": "প্রতিটি ত্রিভুজের ক্ষেত্রফল একটি নিয়ম থেকে শুরু হয়: [[K=\\frac12\\times\\text{base}\\times\\text{perpendicular height}]]। ব্যবহৃত উচ্চতা লম্ব হলেই যেকোনো বাহু ভূমি হতে পারে। এই ক্যালকুলেটর অতিভুজকে ভূমি হিসেবে বেছে নেয়, ফলে [[\\text{base}=c]] এবং মিলিত লম্ব উচ্চতা হলো উচ্চতা, [[\\text{height}=h]]। প্রতিস্থাপনে [[K=\\frac12\\times c\\times h]] পাওয়া যায়, যা [[[\\boxed{K=\\frac{ch}{2}}]]]।" },
          { "kind": "h3", "text": "অতিভুজকে কেন ভূমি হিসেবে ব্যবহার করা যায়?" },
          { "kind": "p", "text": "অতিভুজ এই গণনার জন্য নির্বাচিত ভূমি মাত্র। উচ্চতা বিপরীত শীর্ষবিন্দু, অর্থাৎ সমকোণ শীর্ষবিন্দু [[C]] থেকে পরিমাপ করতে হবে, এবং এটি অতিভুজের ওপর লম্ব হতেই হবে। নিজস্ব মিলিত উচ্চতাসহ ভিন্ন বাহুকে ভূমি হিসেবে বেছে নিলে একই ক্ষেত্রফল পাওয়া যায়। ভূমি হলো একটি বাহুর পালন করা ভূমিকা, স্থায়ী নাম নয়।" },
          { "kind": "h3", "text": "সূত্রকে কেন দুই দিয়ে ভাগ করা হয়?" },
          { "kind": "p", "text": "একই ভূমি ও একই লম্ব উচ্চতার ওপর নির্মিত সামান্তরিকের ঠিক অর্ধেক জায়গা জুড়ে থাকে একটি ত্রিভুজ। ভূমি 10 ও উচ্চতা 4.8 হলে, সামান্তরিকের ক্ষেত্রফল [[10\\times4.8=48]]; এর ভেতরের ত্রিভুজ অর্ধেক দখল করে, ফলে [[K=48/2=24]]। অর্ধেক করা বাদ দিলে ভিন্ন প্রশ্নের উত্তর হয়: সামান্তরিকের ক্ষেত্রফল, ত্রিভুজের নয়।" },
          { "kind": "h3", "text": "সূত্রটি কি শুধু সমকোণী ত্রিভুজের জন্য কাজ করে?" },
          { "kind": "p", "text": "[[K=ch/2]] সমীকরণটি সাধারণ ত্রিভুজ ক্ষেত্রফল সূত্র, [[c]] নির্বাচিত ভূমি এবং [[h]] তার লম্ব উচ্চতা হলেই যেকোনো ত্রিভুজের জন্য বৈধ। এই পৃষ্ঠাকে সমকোণী ত্রিভুজের জন্য নির্দিষ্ট করে তোলে পাঠ: [[c]] হলো অতিভুজ, [[h]] সমকোণ শীর্ষবিন্দু থেকে নামে, এবং উচ্চতা অতিরিক্ত সীমাবদ্ধতা [[h\\leq c/2]] মেনে চলে, যার সাধারণ ত্রিভুজের ক্ষেত্রে কোনো অর্থ নেই।" },
          { "kind": "h3", "text": "কেন দুটি বাহুর প্রয়োজন হয় না" },
          { "kind": "p", "text": "ক্ষেত্রফলের জন্য একটি বাহু ও তার অনুরূপ লম্ব উচ্চতা দরকার, এর বেশি কিছু নয়। [[c]] ও [[h]] ইতিমধ্যে জানা থাকলে, বাহুগুলো ক্ষেত্রফল বদলায় এমন কোনো তথ্য যোগ করে না। বাহুর সূত্র [[K=ab/2]] একই রাশির ভিন্ন ইনপুট পথ, যা পরিমাপকৃত তথ্য দুটি লম্ব বাহু হলে ব্যবহারযোগ্য। বাহুগুলোই যদি আপনার কাছে থাকে, <a href=\"/right-triangle-area-from-legs-calculator/\">বাহু থেকে সমকোণী ত্রিভুজের ক্ষেত্রফল ক্যালকুলেটর</a> সরাসরি সেগুলো নেয়।" }
        ],
        "imgAlt": "অতিভুজ ও উচ্চতা ব্যবহার করে K = ch/2 বনাম দুটি বাহু ব্যবহার করে K = ab/2 ক্ষেত্রফলের তুলনা",
        "figcaption": "একই ক্ষেত্রফলের দুটি পথ: উচ্চতাসহ অতিভুজ, এবং দুটি বাহু। দুটোই ঘেরা অঞ্চলের সমান, ফলে ch/2 = ab/2।"
      },
      "sec-relationship": {
        "h2": "অতিভুজ ও উচ্চতা কীভাবে দুটি বাহুর সঙ্গে সম্পর্কিত",
        "blocks": [
          { "kind": "p", "text": "দুটি বৈধ ক্ষেত্রফল সূত্র একই ত্রিভুজকে বর্ণনা করে: [[K=ab/2]] ও [[K=ch/2]]। যেহেতু তারা একই ক্ষেত্রফল গণনা করে, [[\\frac{ab}{2}=\\frac{ch}{2}]]। দুই পক্ষকে দুই দিয়ে গুণ করুন: [[ab=ch]]। উচ্চতার জন্য সাজালে [[[\\boxed{h=\\frac{ab}{c}}]]] পাওয়া যায়। অতিভুজের ওপর উচ্চতা হলো দুটি বাহুর গুণফলকে অতিভুজ দিয়ে ভাগ, যা ব্যাখ্যা করে কেন দুটি ক্ষেত্রফল সূত্র সামঞ্জস্যপূর্ণ ত্রিভুজে কখনো অমিল হতে পারে না।" },
          { "kind": "h3", "text": "এই সম্পর্ক কেন দরকারি" },
          { "kind": "p", "text": "এটি একই জ্যামিতি বর্ণনার তিনটি উপায়কে যুক্ত করে। বাহু ও অতিভুজ উচ্চতা নির্ধারণ করে, ফলে বাহু দিয়ে পরিমাপকৃত ত্রিভুজে এটি ইতিমধ্যে আছে। উচ্চতা ও অতিভুজ ক্ষেত্রফল নির্ধারণ করে, ফলে ক্ষেত্রফলের জন্য বাহু আগে পুনরুদ্ধারের প্রয়োজন হয় না। যেকোনো সূত্রে ক্ষেত্রফল গণনা করে তুলনা করা সবচেয়ে শক্তিশালী যাচাইগুলোর একটি, কারণ এক পথের ভুল অন্য পথে কদাচিৎ পুনরাবৃত্তি হয়।" },
          { "kind": "h3", "text": "পিথাগোরাসের উপপাদ্যের সঙ্গে সূত্রের সংযোগ" },
          { "kind": "p", "text": "পিথাগোরাসের উপপাদ্য [[a^2+b^2=c^2]] বাহু ও অতিভুজের মধ্যে সংযোগ যাচাই করে। 3-4-5 ত্রিভুজ নিন: [[3^2+4^2=5^2]], [[9+16=25]]। উচ্চতা [[h=\\frac{3\\times4}{5}]], [[[\\boxed{h=2.4}]]]। অতিভুজ ও উচ্চতা থেকে ক্ষেত্রফল [[K=\\frac{5\\times2.4}{2}=6]], এবং বাহু থেকে [[K=\\frac{3\\times4}{2}=6]]। দুটি সূত্রই একই ঘেরা অঞ্চল পরিমাপ করে, এবং [[h=ab/c]] হলো সেই সংযোগ যা এটি নিশ্চিত করে।" },
          { "kind": "h3", "text": "উচ্চতা কীভাবে দুটি সদৃশ ত্রিভুজ তৈরি করে" },
          { "kind": "p", "text": "উচ্চতা মূল ত্রিভুজকে দুটি ছোট সমকোণী ত্রিভুজে ভাগ করে, প্রতিটি মূলের সঙ্গে তার সূক্ষ্মকোণ ভাগ করে। দুটি ভাগ করা কোণ তিনটি ত্রিভুজকে সদৃশ করে, ফলে অনুরূপ বাহু অনুপাতে থাকে। উচ্চতাকে অতিভুজের খণ্ডের সঙ্গে মিলিয়ে [[x/h=h/y]] পাওয়া যায়, যা বজ্রগুণনে [[h^2=xy]] দেয়: গুণোত্তর মধ্যক সম্পর্ক হলো সমীকরণ হিসেবে লেখা সদৃশতা।" }
        ]
      },
      "sec-max": {
        "h2": "উচ্চতা কেন অতিভুজের অর্ধেকের চেয়ে দীর্ঘ হতে পারে না?",
        "blocks": [
          { "kind": "p", "text": "প্রতিটি বৈধ সমকোণী ত্রিভুজ [[[\\boxed{h\\leq\\frac{c}{2}}]]] মেনে চলে। এটি একটি জ্যামিতিক সত্য, এবং এটি প্রমাণের দাবি রাখে।" },
          { "kind": "h3", "text": "অতিভুজের দুটি খণ্ড বোঝা" },
          { "kind": "p", "text": "মনে রাখুন [[x+y=c]] ও [[h^2=xy]]। দুটি খণ্ড সমান হলে গুণফল [[xy]] সর্বাধিক হয়, যা সমান্তর-গুণোত্তর মধ্যক অসমতার ফল: [[xy\\leq\\left(\\frac{x+y}{2}\\right)^2]]। যেহেতু [[x+y=c]], ডান পক্ষ [[c^2/4]] হয়, ফলে [[h^2\\leq\\frac{c^2}{4}]], এবং ধনাত্মক দৈর্ঘ্যের জন্য [[h\\leq c/2]]। সহজ ভাষায়: অসমান ভাগ গুণফল ও উচ্চতাকে সংকুচিত করে; সবচেয়ে লম্বা উচ্চতা আসে সবচেয়ে সমান ভাগ থেকে।" },
          { "kind": "h3", "text": "সর্বোচ্চ উচ্চতায় কী ঘটে?" },
          { "kind": "p", "text": "সর্বোচ্চ ঘটে যখন [[x=y=c/2]], এবং তখন [[h=c/2]]। এটি একটি সমদ্বিবাহু সমকোণী ত্রিভুজ তৈরি করে: এর দুটি বাহু সমান, এবং এর সূক্ষ্মকোণ [[45^\\circ]] ও [[45^\\circ]]। উচ্চতা তখন অতিভুজের মধ্যমা হিসেবেও কাজ করে, একটি বৈধ ত্রিভুজ, অবনত নয়।" },
          { "kind": "h3", "text": "সর্বোচ্চ উচ্চতার উদাহরণ" },
          { "kind": "p", "text": "[[c=10]] দেওয়া থাকলে, সর্বোচ্চ উচ্চতা [[h_{\\max}=10/2=5]]। সর্বোচ্চ ক্ষেত্রফল [[K=\\frac{10\\times5}{2}]], [[[\\boxed{K_{\\max}=25}]]]। অতিভুজ 10-এর কোনো সমকোণী ত্রিভুজের উচ্চতা 5-এর ওপরে হতে পারে না, ফলে কারো ক্ষেত্রফল 25 বর্গ এককের ওপরে হতে পারে না।" },
          { "kind": "h3", "text": "উচ্চতা c/2-এর চেয়ে বড় হলে কী ঘটে?" },
          { "kind": "p", "text": "[[c=10]] ও [[h=5.5]] দেওয়া থাকলে, সর্বোচ্চ বৈধ উচ্চতা 5, ফলে এই পরিমাপগুলো সমকোণী ত্রিভুজ বর্ণনা করতে পারে না। সূত্র তবু [[K=\\frac{10\\times5.5}{2}=27.5]] দেয়, কিন্তু সেই সংখ্যা এই পরিমাপসহ কোনো বৈধ সমকোণী ত্রিভুজের প্রতিনিধিত্ব করে না। এটিকে ক্ষেত্রফল নয়, পরিমাপ ভুলের সংকেত হিসেবে নিন। এই নির্দেশিকা ক্যালকুলেটর এমন ইনপুট স্বয়ংক্রিয়ভাবে প্রত্যাখ্যান করে কিনা সে দাবি করে না।" },
          { "kind": "h3", "text": "উচ্চতা অনেক ছোট হলে কী ঘটে?" },
          { "kind": "p", "text": "অতিভুজের তুলনায় ছোট উচ্চতা একটি সরু, লম্বাটে সমকোণী ত্রিভুজ বর্ণনা করে, যেখানে একটি বাহু অন্যটির চেয়ে অনেক দীর্ঘ। অতিভুজ স্থির থাকলে, উচ্চতা কমার সঙ্গে ক্ষেত্রফল কমে, কারণ [[K=ch/2]] সরাসরি [[h]]-এর সঙ্গে স্কেল করে। কোনো ধনাত্মক নিম্নসীমা নেই: উচ্চতা শূন্যের দিকে যেতে পারে, এবং ত্রিভুজটি অবনত রেখার দিকে চ্যাপ্টা হয়।" }
        ],
        "imgAlt": "সমদ্বিবাহু সমকোণী ত্রিভুজে সর্বোচ্চ উচ্চতা c/2, একটি বৈধ ছোট উচ্চতা, এবং একটি অবৈধ ক্ষেত্র",
        "figcaption": "বামে: c/2-এ সর্বোচ্চ উচ্চতা সবচেয়ে বড় ক্ষেত্রফল দেয়। মাঝে: একটি ছোট বৈধ উচ্চতা। ডানে: c/2-এর ওপরের উচ্চতা সমকোণী ত্রিভুজের হতে পারে না।"
      },
      "sec-howto": {
        "h2": "অতিভুজ ও উচ্চতা থেকে সমকোণী ত্রিভুজের ক্ষেত্রফল ক্যালকুলেটর কীভাবে ব্যবহার করবেন",
        "blocks": [
          { "kind": "p", "text": "ক্যালকুলেটরের ঠিক দুটি ইনপুট দরকার। নিচের ধাপগুলো পর্দার ক্রম অনুসরণ করে, পরিমাপকৃত ত্রিভুজ থেকে যাচাইকৃত ফলাফল পর্যন্ত।" }
        ],
        "steps": [
          "<strong>অতিভুজ পরিমাপ করুন বা চিহ্নিত করুন।</strong> সবচেয়ে দীর্ঘ বাহু, 90-ডিগ্রি কোণের বিপরীতে।",
          "<strong>অতিভুজের ওপর অঙ্কিত লম্ব উচ্চতা চিহ্নিত করুন।</strong> এটি সমকোণ শীর্ষবিন্দু থেকে শুরু হয় এবং অতিভুজকে 90 ডিগ্রিতে ছেদ করে।",
          "<strong>উচ্চতা লম্ব কিনা নিশ্চিত করুন।</strong> ঢালু বাহু বরাবর পরিমাপকৃত খণ্ড সূত্রের প্রয়োজনীয় উচ্চতা নয়।",
          "<strong>অতিভুজ [[c]] লিখুন।</strong>",
          "<strong>উচ্চতা [[h]] লিখুন।</strong>",
          "<strong>সামঞ্জস্যপূর্ণ দৈর্ঘ্য একক নির্বাচন করুন।</strong> দুটি পরিমাপেই একই একক ব্যবহার করতে হবে।",
          "<strong>দুটি পরিমাপই ধনাত্মক কিনা যাচাই করুন।</strong> শূন্য বা ঋণাত্মক দৈর্ঘ্য কোনো ত্রিভুজ বর্ণনা করে না।",
          "<strong>[[h\\leq c/2]] নিশ্চিত করুন।</strong> [[c=10]]-এর জন্য, 5-এর ওপরের যেকোনো উচ্চতা সেই অতিভুজের সমকোণী ত্রিভুজের হতে পারে না।",
          "<strong>Click Calculate Area.</strong>",
          "<strong>ফলাফল পর্যালোচনা করুন।</strong> ইনপুটের সঙ্গে মিলিত বর্গ এককে ক্ষেত্রফল দেখা যায়।",
          "<strong>বর্গ একক যাচাই করুন।</strong> মিটার দিলে বর্গমিটার; সেন্টিমিটার দিলে বর্গসেন্টিমিটার।",
          "<strong>সমাধান ধাপ পর্যালোচনা করুন।</strong> এগুলো প্রতিস্থাপন ও পাটিগণিত দেখায়।",
          "<strong>নতুন ত্রিভুজ লেখার আগে Reset ব্যবহার করুন।</strong> এটি দুটি ঘরই মুছে দেয় যাতে পরের গণনা পরিচ্ছন্নভাবে শুরু হয়।"
        ],
        "closingParagraphs": [
          "ক্যালকুলেটর দুটি বাহু বা একটি কোণ চায় না: একটি বাহু ও তার মিলিত লম্ব উচ্চতা ক্ষেত্রফল সম্পূর্ণ নির্ধারণ করে।"
        ]
      },
      "sec-examples": {
        "h2": "অতিভুজ ও উচ্চতা ব্যবহারে সমকোণী ত্রিভুজ ক্ষেত্রফলের ধাপে ধাপে উদাহরণ",
        "blocks": [
          { "kind": "p", "text": "চারটি সমাধানকৃত উদাহরণ পরিচিত থেকে পদ্ধতিটি গড়ে তোলে। প্রতিটি প্রতিটি প্রতিস্থাপন দেখিয়ে [[K=ch/2]] প্রয়োগ করে, এবং প্রতিটি যাচাই করে যে উচ্চতা সমকোণী ত্রিভুজের সীমা মেনে চলে।" },
          { "kind": "h3", "text": "উদাহরণ 1: বিদ্যমান ক্যালকুলেটরের উদাহরণ ব্যবহার" },
          { "kind": "p", "text": "[[c=10]] ও [[h=4.8]] দেওয়া আছে। ধাপ 1: সূত্র লিখুন, [[K=ch/2]]। ধাপ 2: প্রতিস্থাপন করুন, [[K=\\frac{10\\times4.8}{2}]]। ধাপ 3: গুণ করুন, [[K=\\frac{48}{2}]]। চূড়ান্ত উত্তর: [[[\\boxed{K=24\\text{ square units}}]]]। উচ্চতা বৈধ কারণ [[4.8<5]], অতিভুজের অর্ধেক সর্বোচ্চের নিচে।" },
          { "kind": "h3", "text": "উদাহরণ 2: একটি 3-4-5 ত্রিভুজ" },
          { "kind": "p", "text": "[[a=3]], [[b=4]], [[c=5]] দেওয়া আছে। প্রথমে উচ্চতা বের করুন: [[h=ab/c]], ফলে [[h=\\frac{3\\times4}{5}=2.4]]। তাহলে [[K=\\frac{5\\times2.4}{2}]], [[[\\boxed{K=6}]]]। বাহু দিয়ে যাচাই করুন: [[K=\\frac{3\\times4}{2}=6]]। দুটি পথই একমত, যেমন হতেই হবে।" },
          { "kind": "h3", "text": "উদাহরণ 3: একটি সমদ্বিবাহু সমকোণী ত্রিভুজ" },
          { "kind": "p", "text": "[[c=10]] ও [[h=5]] দেওয়া আছে। তাহলে [[K=\\frac{10\\times5}{2}]], [[[\\boxed{K=25}]]]। উচ্চতা অতিভুজের অর্ধেকের সমান, ফলে বাহুগুলো সমান এবং প্রতিটি সূক্ষ্মকোণ [[45^\\circ]]। অতিভুজ 10-এর যেকোনো সমকোণী ত্রিভুজের জন্য এটি সর্বোচ্চ সম্ভাব্য ক্ষেত্রফল।" },
          { "kind": "h3", "text": "উদাহরণ 4: একটি ছোট ত্রিভুজাকার উচ্চতা" },
          { "kind": "p", "text": "[[c=13]] ও [[h=5]] দেওয়া আছে। তাহলে [[K=\\frac{13\\times5}{2}]], [[[\\boxed{K=32.5\\text{ square units}}]]]। উচ্চতা সীমা মেনে চলে কারণ [[5\\leq6.5]]: অতিভুজের অর্ধেক 6.5, এবং 5 আরামে তার নিচে।" }
        ]
      },
      "sec-applications": {
        "h2": "অতিভুজ ও উচ্চতা থেকে সমকোণী ত্রিভুজ ক্ষেত্রফলের বাস্তব জীবনে প্রয়োগ",
        "blocks": [
          { "kind": "p", "text": "বারোটি সমাধানকৃত পরিস্থিতি বিভিন্ন স্কেল ও এককে সূত্রটি দেখায়। প্রতিটি দৃশ্যের ত্রিভুজের নাম দেয়, দুটি পরিমাপ দেয়, ধাপে ধাপে প্রতিস্থাপন করে এবং এর পেছনের অনুমান বলে। প্রতিটি উদাহরণ একটি সমকোণী ত্রিভুজাকার প্যানেল, প্রোফাইল, খণ্ড বা সরলীকৃত মডেল; সূত্রটি মডেলকৃত ত্রিভুজের ক্ষেত্রে প্রযোজ্য, একই নামের প্রতিটি বাঁকা বা অনিয়মিত বস্তুর ক্ষেত্রে নয়।" },
          { "kind": "h3", "text": "উদাহরণ 1: ত্রিভুজাকার কাচের জানালা" },
          { "kind": "p", "text": "একটি সমকোণী ত্রিভুজাকার কাচের প্যানেলের অতিভুজ [[2.5\\text{ m}]] এবং লম্ব উচ্চতা [[1.2\\text{ m}]]। [[K=ch/2]] ব্যবহার করে: [[K=\\frac{2.5\\times1.2}{2}]], [[[\\boxed{K=1.5\\text{ m}^2}]]]। ফ্রেমের আগে এটি সমতল কাচের ক্ষেত্রফল, সোজা প্রান্ত ও সত্য সমকোণ ধরে নিয়ে।" },
          { "kind": "h3", "text": "উদাহরণ 2: ত্রিভুজাকার র‍্যাম্পের পার্শ্ব প্যানেল" },
          { "kind": "p", "text": "র‍্যাম্পের একটি সমকোণী ত্রিভুজাকার পার্শ্ব প্যানেলের অতিভুজ [[4\\text{ m}]] এবং লম্ব উচ্চতা [[1.5\\text{ m}]]। তাহলে [[K=\\frac{4\\times1.5}{2}]], [[[\\boxed{K=3\\text{ m}^2}]]]। ফলাফল ত্রিভুজাকার পার্শ্ব প্রোফাইল বর্ণনা করে, হাঁটার পৃষ্ঠ নয়।" },
          { "kind": "h3", "text": "উদাহরণ 3: ত্রিভুজাকার পালের খণ্ড" },
          { "kind": "p", "text": "একটি সমকোণী ত্রিভুজাকার পালের খণ্ডের অতিভুজ [[13\\text{ ft}]] এবং উচ্চতা [[5\\text{ ft}]]। তাহলে [[K=\\frac{13\\times5}{2}]], [[[\\boxed{K=32.5\\text{ ft}^2}]]]। সেলাই বা বক্রতার আগে এটি সমতল কাপড়ের ক্ষেত্রফল; আসল পাল ফুলে ওঠে, ফলে পালটিকে সমতল হিসেবে মডেল করা হয়েছে।" },
          { "kind": "h3", "text": "উদাহরণ 4: ত্রিভুজাকার জমির খণ্ড জরিপ" },
          { "kind": "p", "text": "একটি সরলীকৃত সমকোণী ত্রিভুজাকার প্লটের অতিভুজ [[50\\text{ m}]] এবং উচ্চতা [[12\\text{ m}]]। তাহলে [[K=\\frac{50\\times12}{2}]], [[[\\boxed{K=300\\text{ m}^2}]]]। এটি সমতল ভূমিতে সীমানাকে সরলরেখা ধরা সরলীকৃত মডেলের অধীনে ক্ষেত্রফল অনুমান করে।" },
          { "kind": "h3", "text": "উদাহরণ 5: ইস্পাত গাসেট প্লেট" },
          { "kind": "p", "text": "একটি সমকোণী ত্রিভুজাকার ইস্পাত সাপোর্ট প্লেটের অতিভুজ [[3.4\\text{ m}]] এবং উচ্চতা [[1.6\\text{ m}]]। তাহলে [[K=\\frac{3.4\\times1.6}{2}]], [[[\\boxed{K=2.72\\text{ m}^2}]]]। এটি শুধু সমতল প্লেটের ক্ষেত্রফল; ভারবহন ক্ষমতা আলাদা প্রশ্ন।" },
          { "kind": "h3", "text": "উদাহরণ 6: সিঁড়ির পার্শ্ব প্রোফাইল" },
          { "kind": "p", "text": "একটি সরলীকৃত সমকোণী ত্রিভুজাকার সিঁড়ির পার্শ্ব প্রোফাইলের অতিভুজ [[5\\text{ m}]] এবং উচ্চতা [[2\\text{ m}]]। তাহলে [[K=\\frac{5\\times2}{2}]], [[[\\boxed{K=5\\text{ m}^2}]]]। এটি ত্রিভুজাকার পার্শ্ব প্রোফাইল বর্ণনা করে, পৃথক ধাপ ও রাইজারের যোগফল নয়।" },
          { "kind": "h3", "text": "উদাহরণ 7: ত্রিভুজাকার সড়ক চিহ্ন" },
          { "kind": "p", "text": "একটি সমকোণী ত্রিভুজাকার চিহ্ন প্যানেলের অতিভুজ [[1.8\\text{ m}]] এবং উচ্চতা [[0.8\\text{ m}]]। তাহলে [[K=\\frac{1.8\\times0.8}{2}]], [[[\\boxed{K=0.72\\text{ m}^2}]]]। 0.72 বর্গমিটার চিহ্ন-মুখের উপাদান; মাউন্টিং হার্ডওয়্যার বাদে।" },
          { "kind": "h3", "text": "উদাহরণ 8: সৌর সাপোর্ট প্যানেল" },
          { "kind": "p", "text": "একটি সমকোণী ত্রিভুজাকার মাউন্টিং সাপোর্ট প্যানেলের অতিভুজ [[3\\text{ m}]] এবং উচ্চতা [[1.2\\text{ m}]]। তাহলে [[K=\\frac{3\\times1.2}{2}]], [[[\\boxed{K=1.8\\text{ m}^2}]]]। শুধু প্যানেলের ক্ষেত্রফল; উৎপাদিত বিদ্যুৎ সম্পর্কে কিছু নয়, যেহেতু এটি একটি মাউন্টিং ব্র্যাকেট।" },
          { "kind": "h3", "text": "উদাহরণ 9: প্লাইউড কাটিং টেমপ্লেট" },
          { "kind": "p", "text": "একটি সমকোণী ত্রিভুজাকার প্লাইউড টেমপ্লেটের অতিভুজ [[2.5\\text{ m}]] এবং উচ্চতা [[1\\text{ m}]]। তাহলে [[K=\\frac{2.5\\times1}{2}]], [[[\\boxed{K=1.25\\text{ m}^2}]]]। ব্যবহারযোগ্য ত্রিভুজাকার টুকরো; কাটিং বর্জ্যের জন্য আলাদা মার্জিন দরকার।" },
          { "kind": "h3", "text": "উদাহরণ 10: ত্রিভুজাকার কাপড়ের ব্যানার" },
          { "kind": "p", "text": "একটি সমকোণী ত্রিভুজাকার ব্যানারের অতিভুজ [[6\\text{ ft}]] এবং উচ্চতা [[2.4\\text{ ft}]]। তাহলে [[K=\\frac{6\\times2.4}{2}]], [[[\\boxed{K=7.2\\text{ ft}^2}]]]। 7.2 বর্গফুট সমতল উপাদান; হেমিং ভাতা ফ্যাব্রিকেটর যোগ করে।" },
          { "kind": "h3", "text": "উদাহরণ 11: বড় ত্রিভুজাকার জরিপ প্লট" },
          { "kind": "p", "text": "একটি সমকোণী ত্রিভুজাকার জমির খণ্ডের অতিভুজ [[80\\text{ m}]] এবং উচ্চতা [[30\\text{ m}]]। তাহলে [[K=\\frac{80\\times30}{2}]], [[[\\boxed{K=1,200\\text{ m}^2}]]]। শুধু সেখানে বৈধ যেখানে প্লটটি সমতল ভূমিতে সত্যিই সমকোণী ত্রিভুজাকার।" },
          { "kind": "h3", "text": "উদাহরণ 12: ত্রিভুজাকার ছাউনি সাপোর্ট প্যানেল" },
          { "kind": "p", "text": "একটি সমকোণী ত্রিভুজাকার ছাউনি সাপোর্ট প্যানেলের অতিভুজ [[8\\text{ m}]] এবং উচ্চতা [[3.6\\text{ m}]]। তাহলে [[K=\\frac{8\\times3.6}{2}]], [[[\\boxed{K=14.4\\text{ m}^2}]]]। সমতল ত্রিভুজাকার ক্ষেত্রফল; বাতাসের চাপ ও ফিক্সিং আলাদা প্রশ্ন।" },
          { "kind": "h3", "text": "ব্যবহারিক উদাহরণের তুলনা" }
        ],
        "table": {
          "headers": ["প্রয়োগ", "অতিভুজ c", "উচ্চতা h", "ক্ষেত্রফল", "একক"],
          "rows": [
            ["কাচের জানালা", "2.5", "1.2", "1.5", "m²"],
            ["র‍্যাম্পের পার্শ্ব প্যানেল", "4", "1.5", "3", "m²"],
            ["পালের খণ্ড", "13", "5", "32.5", "ft²"],
            ["জমির খণ্ড", "50", "12", "300", "m²"],
            ["গাসেট প্লেট", "3.4", "1.6", "2.72", "m²"],
            ["সিঁড়ির প্রোফাইল", "5", "2", "5", "m²"],
            ["সড়ক চিহ্ন", "1.8", "0.8", "0.72", "m²"],
            ["সৌর সাপোর্ট প্যানেল", "3", "1.2", "1.8", "m²"],
            ["প্লাইউড টেমপ্লেট", "2.5", "1", "1.25", "m²"],
            ["কাপড়ের ব্যানার", "6", "2.4", "7.2", "ft²"],
            ["বড় জরিপ প্লট", "80", "30", "1,200", "m²"],
            ["ছাউনি সাপোর্ট প্যানেল", "8", "3.6", "14.4", "m²"]
          ]
        },
        "imgAlt": "K = ch/2-এর চারটি প্রয়োগ: কাচের জানালা, র‍্যাম্প প্যানেল, পাল ও জরিপকৃত জমির খণ্ড",
        "figcaption": "চারটি দৃশ্যে একই সূত্র: একটি কাচের জানালা, র‍্যাম্পের পার্শ্ব প্যানেল, একটি পাল ও জরিপকৃত জমির খণ্ড।"
      },
      "sec-geomean": {
        "h2": "উচ্চতার বর্গ কেন অতিভুজের দুটি খণ্ডের গুণফলের সমান?",
        "blocks": [
          { "kind": "p", "text": "উচ্চতা অতিভুজকে [[D]]-তে ছেদ করে, একে [[AD=x]] ও [[DB=y]]-তে ভাগ করে। সম্পর্কটি [[[\\boxed{h^2=xy}]]]। এখানে [[x]] প্রথম খণ্ড, [[y]] দ্বিতীয়, এবং [[h]] লম্ব উচ্চতা। এটি মুখস্থ করার চেয়ে কোথা থেকে আসে দেখা মূল্যবান।" },
          { "kind": "h3", "text": "এই সম্পর্ক কীভাবে কাজ করে?" },
          { "kind": "p", "text": "উচ্চতা দুটি ছোট সমকোণী ত্রিভুজ তৈরি করে, প্রতিটি মূলের সঙ্গে সদৃশ এবং ফলে পরস্পরের সঙ্গে সদৃশ। একটর ছোট বাহুকে অন্যটির বড় বাহুর সঙ্গে মিলিয়ে [[\\frac{x}{h}=\\frac{h}{y}]] পাওয়া যায়, যা বজ্রগুণনে [[h^2=xy]] দেয়। বর্গমূল নিলে, [[h=\\sqrt{xy}]]: উচ্চতা হলো অতিভুজের দুটি খণ্ডের গুণোত্তর মধ্যক, সেই সংখ্যা যার বর্গ তাদের গুণফলের সমান।" },
          { "kind": "h3", "text": "একটি সংখ্যাগত উদাহরণ" },
          { "kind": "p", "text": "[[x=4]] ও [[y=9]] দেওয়া থাকলে, [[h^2=4\\times9=36]], [[[\\boxed{h=6}]]]। সম্পূর্ণ অতিভুজ [[c=4+9=13]], এবং ক্ষেত্রফল [[K=\\frac{13\\times6}{2}]], [[[\\boxed{K=39}]]]। অতিভুজের দুটি খণ্ড জানা থাকলে, কোনো বাহু পরিমাপ ছাড়াই উচ্চতা পাওয়া যায়।" },
          { "kind": "h3", "text": "এই সম্পর্ক কখন দরকারি?" },
          { "kind": "p", "text": "এটি জ্যামিতি অনুশীলনে দেখা যায় যেখানে উচ্চতা অনুপস্থিত কিন্তু খণ্ড দেওয়া আছে, সদৃশতা সমস্যায়, এবং যখনই উচ্চতা পরিমাপের স্বাধীন যাচাই দরকার। এটি উচ্চতার সীমাও ব্যাখ্যা করে: গুণফল [[xy]] স্থির অতিভুজ দ্বারা সীমাবদ্ধ, ফলে উচ্চতাও সীমাবদ্ধ। ক্যালকুলেটরের ইনপুট হিসেবে [[x]] ও [[y]] দরকার নেই; এই উপপাদ্য সহায়ক জ্ঞান, ক্যালকুলেটরের ঘর নয়।" }
        ]
      },
      "sec-legs": {
        "h2": "অতিভুজ ও উচ্চতা জানা থাকলে দুটি বাহু কীভাবে পুনরুদ্ধার করবেন",
        "blocks": [
          { "kind": "p", "text": "ক্ষেত্রফলের জন্য ক্যালকুলেটরের শুধু [[c]] ও [[h]] দরকার, কিন্তু এই দুটি পরিমাপে দুটি বাহুর দৈর্ঘ্য নির্ধারণের যথেষ্ট তথ্যও আছে, অবস্থান অদলবদল পর্যন্ত। [[a^2+b^2=c^2]] ও [[ab=ch]] থেকে শুরু করুন। যেহেতু [[(a^2-b^2)^2=(a^2+b^2)^2-4a^2b^2]], প্রতিস্থাপনে [[(a^2-b^2)^2=c^4-4c^2h^2]] পাওয়া যায়, এবং ফলে [[[\\boxed{a^2,b^2=\\frac{c^2\\pm c\\sqrt{c^2-4h^2}}{2}}]]]। দুটি চিহ্ন দুটি বাহু বরাদ্দের সঙ্গে মিলে: বাহু অদলবদলে ত্রিভুজ বা তার ক্ষেত্রফল সম্পর্কে কিছু বদলায় না।" },
          { "kind": "p", "text": "সংখ্যাগত উদাহরণ: [[c=10]] ও [[h=4.8]] দেওয়া থাকলে, [[ab=ch=48]] ও [[a^2+b^2=100]]। বাহুগুলো [[a=6]] ও [[b=8]]। যাচাই করুন: [[6^2+8^2=10^2]], [[36+64=100]]। ক্ষেত্রফল দুইভাবেই মেলে: [[K=\\frac{6\\times8}{2}=24]] ও [[K=\\frac{10\\times4.8}{2}=24]]। এটি অতিরিক্ত গাণিতিক অন্তর্দৃষ্টি, বিদ্যমান ক্যালকুলেটরের অতিরিক্ত ফাংশন নয়, এবং এটি ক্যালকুলেটরের উদ্দেশ্য থেকে মনোযোগ সরানো উচিত নয়: অতিভুজ ও উচ্চতা থেকে ক্ষেত্রফল।" }
        ]
      },
      "sec-valid": {
        "h2": "আপনার অতিভুজ ও উচ্চতা পরিমাপ বৈধ কিনা কীভাবে যাচাই করবেন",
        "blocks": [
          { "kind": "p", "text": "অ-অবনত সমকোণী ত্রিভুজের জন্য, ইনপুটগুলোকে তিনটি শর্ত মানতে হবে: [[c>0]], [[h>0]] ও [[h\\leq c/2]]। প্রথম দুটি শূন্য ও ঋণাত্মক দৈর্ঘ্য বাদ দেয়; তৃতীয়টি আগে প্রমাণিত উচ্চতা সীমা। তিনটিই একসঙ্গে মানতে হবে।" },
          { "kind": "h3", "text": "বৈধ ইনপুটের উদাহরণ" },
          { "kind": "p", "text": "[[c=12]] ও [[h=5]] দেওয়া থাকলে, সর্বোচ্চ উচ্চতা [[h_{\\max}=6]]। যেহেতু [[5<6]], পরিমাপগুলো বৈধ, এবং [[K=\\frac{12\\times5}{2}=30]]।" },
          { "kind": "h3", "text": "অবৈধ ইনপুটের উদাহরণ" },
          { "kind": "p", "text": "[[c=12]] ও [[h=7]] দেওয়া থাকলে, সর্বোচ্চ উচ্চতা [[h_{\\max}=6]]। যেহেতু [[7>6]], পরিমাপগুলো সমকোণী ত্রিভুজ বর্ণনা করতে পারে না: অতিভুজ 12-এ স্থির থাকলে, [[x]] ও [[y]] খণ্ডে কোনো ভাগই [[\\sqrt{xy}]]-কে 7-এ পৌঁছাতে পারে না।" },
          { "kind": "h3", "text": "সীমানা ক্ষেত্র" },
          { "kind": "p", "text": "[[c=12]] ও [[h=6]] দেওয়া থাকলে, উচ্চতা সর্বোচ্চ সম্ভাব্য মানের সমান। এটি দুটি সমান বাহুসহ সমদ্বিবাহু সমকোণী ত্রিভুজ, ঠিক সীমানায় বসা। সীমা অন্তর্ভুক্তিমূলক: [[h\\leq c/2]] সমতা অনুমোদন করে।" },
          { "kind": "h3", "text": "শূন্য বা ঋণাত্মক মানের কী হবে?" },
          { "kind": "p", "text": "অতিভুজ ধনাত্মক হতেই হবে, এবং অ-অবনত ত্রিভুজের জন্য উচ্চতা ধনাত্মক হতেই হবে। শূন্য উচ্চতা শূন্য ক্ষেত্রফল ও অবনত আকৃতি দেয়, ত্রিভুজ নয় বরং রেখা, আর ঋণাত্মক দৈর্ঘ্যের কোনো জ্যামিতিক অর্থ নেই। এই নির্দেশিকা দাবি করে না যে ক্যালকুলেটর প্রতিটি যাচাই স্বয়ংক্রিয়ভাবে করে।" }
        ]
      },
      "sec-units": {
        "h2": "অতিভুজ ও উচ্চতা গণনায় ক্ষেত্রফলের একক বোঝা",
        "blocks": [
          { "kind": "p", "text": "ক্ষেত্রফল দ্বি-মাত্রিক, ফলে এর একক দৈর্ঘ্য এককের বর্গ। প্রতীকে, [[\\text{m}\\times\\text{m}=\\text{m}^2]]। ফলাফল সঠিকভাবে লেবেল করার জন্য একক নির্বাচক আছে।" },
          { "kind": "h3", "text": "একক কেন মিলতে হবে" },
          { "kind": "p", "text": "সূত্র প্রয়োগের আগে অতিভুজ ও উচ্চতা একই এককে প্রকাশ করতে হবে। অতিভুজ 200 cm ও উচ্চতা 1 m হলে, প্রথমে 200 cm ও 100 cm-এ রূপান্তর করুন। তাহলে [[K=\\frac{200\\times100}{2}]], [[K=10,000\\text{ cm}^2]], বা সমতুল্যভাবে [[K=1\\text{ m}^2]]। ভিন্ন এককের পরিমাপ গুণ করলে পরিষ্কার এককহীন সংখ্যা হয়, ফলে প্রথমে রূপান্তর করুন, তারপর গণনা করুন।" },
          { "kind": "h3", "text": "রাউন্ডিং কেন গুরুত্বপূর্ণ" },
          { "kind": "p", "text": "পরিমাপের রাউন্ডিং চূড়ান্ত ক্ষেত্রফল সামান্য বদলে দেয়, কারণ উচ্চতা সরাসরি এতে গুণ হয়। মধ্যবর্তী ধাপে পূর্ণ নির্ভুলতা রাখুন এবং শুধু চূড়ান্ত উত্তর রাউন্ড করুন; উচ্চতা আগে রাউন্ড করলে ত্রুটি জমে।" },
          { "kind": "h3", "text": "নির্ভুল মান বনাম পরিমাপকৃত মান" },
          { "kind": "p", "text": "নির্ভুল পরিমাপ, যেমন অতিভুজ 10-এর সমদ্বিবাহু সমকোণী ত্রিভুজের উচ্চতা 5, ফিতা বা যন্ত্র পাঠ থেকে ভিন্ন আচরণ করে। যন্ত্রের অনিশ্চয়তা ক্ষেত্রফলে প্রবাহিত হয়, ফলে শেষ অঙ্কটিকে ইনপুটের মতোই নির্ভরযোগ্য ধরুন।" }
        ]
      },
      "sec-mistakes": {
        "h2": "অতিভুজ ও উচ্চতা থেকে সমকোণী ত্রিভুজের ক্ষেত্রফল গণনায় সাধারণ ভুল",
        "blocks": [
          { "kind": "p", "text": "বেশিরভাগ ভুল উত্তর খারাপ পাটিগণিত থেকে নয়, ভুল লেবেলযুক্ত ইনপুট থেকে আসে। নিচের পনেরোটি ভুল প্রায় সবগুলোকে কভার করে।" },
          { "kind": "h3", "text": "1. অতিভুজকে লম্ব বাহুর সঙ্গে গুলিয়ে ফেলা" },
          { "kind": "p", "text": "বাহুকে অতিভুজ হিসেবে লিখলে ভূমি সংকুচিত হয়। সমাধান: সমকোণ চিহ্ন স্পর্শ করে না এমন বাহুটি বেছে নিন।" },
          { "kind": "h3", "text": "2. ঢালু বাহু বরাবর উচ্চতা পরিমাপ" },
          { "kind": "p", "text": "বাহু বরাবর চলা খণ্ড উচ্চতা নয়। সমাধান: এটি সমকোণ শীর্ষবিন্দু থেকে বেরিয়ে অতিভুজকে 90 ডিগ্রিতে আঘাত করতেই হবে।" },
          { "kind": "h3", "text": "3. অতিভুজের ওপর লম্ব নয় এমন দূরত্ব ব্যবহার" },
          { "kind": "p", "text": "শীর্ষবিন্দু থেকে অতিভুজ পর্যন্ত অ-লম্ব দূরত্ব সত্য উচ্চতার চেয়ে দীর্ঘ, ক্ষেত্রফল স্ফীত করে। সমাধান: প্রথমে লম্বতা নিশ্চিত করুন।" },
          { "kind": "h3", "text": "4. ভুল শীর্ষবিন্দুর উচ্চতা ব্যবহার" },
          { "kind": "p", "text": "শুধু সমকোণ শীর্ষবিন্দুর উচ্চতা অতিভুজের সঙ্গে জোড়া বাঁধে।" },
          { "kind": "h3", "text": "5. দুই দিয়ে ভাগ করতে ভুলে যাওয়া" },
          { "kind": "p", "text": "[[c\\times h]] সামান্তরিকের ক্ষেত্রফল, ত্রিভুজের নয়। সমাধান: প্রতিটি ভূমি-উচ্চতা গুণফল অর্ধেক করুন।" },
          { "kind": "h3", "text": "6. c হিসেবে ভুল পরিমাপ লেখা" },
          { "kind": "p", "text": "ছোট বাহুকে অতিভুজ হিসেবে লিখলে ভূমি সংকুচিত হয়। সমাধান: অতিভুজ সর্বদা সবচেয়ে দীর্ঘ বাহু।" },
          { "kind": "h3", "text": "7. h হিসেবে ভুল পরিমাপ লেখা" },
          { "kind": "p", "text": "বাহুকে উচ্চতা হিসেবে লিখলে লম্ব জোড়া ভেঙে যায়। সমাধান: উচ্চতাকে অতিভুজের সঙ্গে সমকোণে মিলতেই হবে।" },
          { "kind": "h3", "text": "8. ভিন্ন দৈর্ঘ্য একক মেশানো" },
          { "kind": "p", "text": "150 cm উচ্চতাসহ 2 m অতিভুজ কোনো অর্থপূর্ণ সংখ্যা দেয় না। সমাধান: প্রথমে এক এককে রূপান্তর করুন।" },
          { "kind": "h3", "text": "9. রৈখিক এককে ক্ষেত্রফল প্রতিবেদন" },
          { "kind": "p", "text": "24 m² ক্ষেত্রফল 24 m নয়। সমাধান: সংখ্যার সঙ্গে বর্গ একক লিখুন।" },
          { "kind": "h3", "text": "10. ঋণাত্মক উচ্চতা লেখা" },
          { "kind": "p", "text": "দৈর্ঘ্য ঋণাত্মক হতে পারে না; ঋণাত্মক উচ্চতা তথ্য-লেখার ভুলের সংকেত। সমাধান: পরিমাপকৃত ধনাত্মক দূরত্ব পুনরায় লিখুন।" },
          { "kind": "h3", "text": "11. শূন্য অতিভুজ লেখা" },
          { "kind": "p", "text": "শূন্য অতিভুজ মানে কোনো ত্রিভুজ নেই। সমাধান: প্রতিটি দৈর্ঘ্য ধনাত্মক কিনা যাচাই করুন।" },
          { "kind": "h3", "text": "12. অতিভুজের অর্ধেকের চেয়ে বড় উচ্চতা ব্যবহার" },
          { "kind": "p", "text": "[[c=10]]-সহ 6 উচ্চতা সীমা লঙ্ঘন করে। সমাধান: পরিমাপকৃত খণ্ড পুনরায় যাচাই করুন।" },
          { "kind": "h3", "text": "13. একই ভূমি ও উচ্চতার প্রতিটি ত্রিভুজ অগত্যা সমকোণী ধরে নেওয়া" },
          { "kind": "p", "text": "[[K=ch/2]] মিলিত ভূমি ও উচ্চতাসহ যেকোনো ত্রিভুজের জন্য কাজ করে। সমাধান: উচ্চতা সীমা শুধু সমকোণী ত্রিভুজে প্রয়োগ করুন।" },
          { "kind": "h3", "text": "14. উচ্চতা h-কে a বা b বাহুর যেকোনোটির সঙ্গে গুলিয়ে ফেলা" },
          { "kind": "p", "text": "6-8-10 ত্রিভুজে উচ্চতা 4.8, যা কোনো বাহুর সমান নয়। সমাধান: [[a]], [[b]] ও [[h]] আলাদা রাখুন।" },
          { "kind": "h3", "text": "15. সূত্র স্বয়ংক্রিয়ভাবে ত্রিভুজের জ্যামিতি যাচাই করে ধরে নেওয়া" },
          { "kind": "p", "text": "পাটিগণিত কখনো ইনপুট প্রত্যাখ্যান করে না। সমাধান: বৈধতা যাচাই নিজে চালান।" },
          { "kind": "h3", "text": "ভুল বনাম সঠিক: একটি সুনির্দিষ্ট উদাহরণ" },
          { "kind": "p", "text": "[[c=10]] ও [[h=4]] দেওয়া থাকলে, সঠিক গণনা [[K=\\frac{10\\times4}{2}=20]]। অর্ধেক করা বাদ দিলে [[K=10\\times4=40]] হয়, ত্রিভুজের ক্ষেত্রফলের দ্বিগুণ। একইভাবে, [[c=10]]-সহ [[h=6]] উচ্চতা সীমায় ব্যর্থ হয়, যদিও পাটিগণিত একটি সংখ্যা দেয়।" }
        ]
      },
      "sec-verify": {
        "h2": "আপনার সমকোণী ত্রিভুজের ক্ষেত্রফল সঠিক কিনা কীভাবে যাচাই করবেন",
        "blocks": [
          { "kind": "p", "text": "বেশ কিছু যাচাই সাধারণ ভুল ধরে। 6-8-10 ত্রিভুজ এগুলোর বেশিরভাগ দেখায়।" },
          { "kind": "h3", "text": "পদ্ধতি 1: ক্ষেত্রফল সূত্র যাচাই" },
          { "kind": "p", "text": "লেখা মান দিয়ে [[K=ch/2]] পুনরায় গণনা করুন। [[c=10]] ও [[h=4.8]]-এর জন্য, [[K=(10\\times4.8)/2=24]]। দ্বিতীয় পাস টাইপো ধরে।" },
          { "kind": "h3", "text": "পদ্ধতি 2: দুটি বাহু ব্যবহার করে যাচাই" },
          { "kind": "p", "text": "বাহু জানা বা পুনরুদ্ধার হলে, [[K=ab/2]] মিলতেই হবে। এখানে [[(6\\times8)/2=24]] মেলে [[(10\\times4.8)/2=24]]-এর সঙ্গে: দুটি পদ্ধতি, একটি ত্রিভুজ, একটি উত্তর।" },
          { "kind": "h3", "text": "পদ্ধতি 3: পিথাগোরাসের উপপাদ্য যাচাই" },
          { "kind": "p", "text": "[[a^2+b^2=c^2]] নিশ্চিত করুন: [[36+64=100]]। বাহুগুলো এটি না মানলে, ত্রিভুজ শনাক্তকরণ ভুল।" },
          { "kind": "h3", "text": "পদ্ধতি 4: উচ্চতা সম্পর্ক যাচাই" },
          { "kind": "p", "text": "[[h=ab/c]] নিশ্চিত করুন: [[(6\\times8)/10=4.8]]। অমিল মানে লেখা উচ্চতা এই ত্রিভুজের নয়।" },
          { "kind": "h3", "text": "পদ্ধতি 5: অতিভুজের দুটি খণ্ড যাচাই" },
          { "kind": "p", "text": "[[x+y=c]] ও [[h^2=xy]] নিশ্চিত করুন। 6.4 ও 3.6 খণ্ডসহ: [[6.4+3.6=10]] ও [[4.8^2=6.4\\times3.6]], যেহেতু [[23.04=23.04]]।" },
          { "kind": "h3", "text": "পদ্ধতি 6: সর্বোচ্চ উচ্চতা যাচাই" },
          { "kind": "p", "text": "[[h\\leq c/2]] নিশ্চিত করুন। এখানে [[4.8\\leq5]]। প্রদত্ত অতিভুজের জন্য [[c^2/4]]-এর ওপরে সমকোণী ত্রিভুজ ক্ষেত্রফলের যেকোনো দাবি অসম্ভব।" },
          { "kind": "h3", "text": "পদ্ধতি 7: একক যাচাই" },
          { "kind": "p", "text": "ফলাফল বর্গ এককে আছে নিশ্চিত করুন: মিটার দিলে বর্গমিটার, সেন্টিমিটার দিলে বর্গসেন্টিমিটার। সংখ্যা ঠিক হলেও রৈখিক এককে প্রতিবেদিত ক্ষেত্রফল অসম্পূর্ণ।" }
        ]
      },
      "sec-altitude-table": {
        "h2": "উচ্চতা কীভাবে সমকোণী ত্রিভুজের ক্ষেত্রফলকে প্রভাবিত করে?",
        "blocks": [
          { "kind": "p", "text": "[[K=ch/2]] থেকে, অতিভুজ স্থির থাকলে ক্ষেত্রফল উচ্চতার সঙ্গে সরাসরি বদলায়। উচ্চতা দ্বিগুণ করলে ক্ষেত্রফল দ্বিগুণ হয়; উচ্চতা বাড়ালে ক্ষেত্রফল একই অনুপাতে বাড়ে। নিচের টেবিল [[c=10]] স্থির রেখে উচ্চতা তার সর্বোচ্চ 5 পর্যন্ত বদলায়।" }
        ],
        "table": {
          "headers": ["উচ্চতা h", "ক্ষেত্রফল K"],
          "rows": [
            ["1", "5"],
            ["2", "10"],
            ["3", "15"],
            ["4", "20"],
            ["5", "25"]
          ]
        },
        "closingParagraphs": [
          "পাঁচটি সারিই বৈধ সমকোণী ত্রিভুজ বর্ণনা করে, কারণ প্রতিটি উচ্চতা সর্বোচ্চ 5-এর সমান বা নিচে। উচ্চতা [[c/2]] ছাড়াতে পারে না, এবং দুটি বাহু সমান হলে সর্বোচ্চ ক্ষেত্রফল ঘটে। লক্ষ্য করুন উচ্চতা বদলানোর সময় বাহু স্থির থাকে না; প্রতিটি সারি একটি অতিভুজ ভাগ করা ভিন্ন ত্রিভুজ।"
        ]
      },
      "sec-conclusion": {
        "h2": "অতিভুজ ও তার উচ্চতাই আপনার যা দরকার",
        "blocks": [
          { "kind": "p", "text": "অতিভুজ-উচ্চতা পদ্ধতি হলো সবচেয়ে দীর্ঘ বাহুর দিকে লক্ষ্য করা সাধারণ ভূমি-উচ্চতা নিয়ম। অতিভুজ চিহ্নিত হয়ে লম্ব উচ্চতা হাতে এলে, বাহু আগে পুনরুদ্ধারের প্রয়োজন ছাড়াই ক্ষেত্রফল একটি গুণ ও একটি অর্ধেক দূরে।" },
          { "kind": "p", "text": "এর আসল মূল্য শৃঙ্খলা: লম্বতা, উচ্চতা সীমা ও গুণোত্তর মধ্যক সম্পর্ক খসড়া স্কেচকে যাচাইযোগ্য সংখ্যায় রূপান্তর করে। উচ্চতা যাচাই করুন, উত্তর তার আস্থা অর্জন করে।" }
        ]
      }
    },
    "faqs": [
      { "question": "অতিভুজ ও উচ্চতা ব্যবহার করে সমকোণী ত্রিভুজের ক্ষেত্রফল কীভাবে গণনা করবেন?", "answer": "অতিভুজ c-কে লম্ব উচ্চতা h দিয়ে গুণ করে দুই দিয়ে ভাগ করুন: K = ch/2। উদাহরণস্বরূপ, c = 10 ও h = 4.8 দিলে K = 24 বর্গ একক। নিশ্চিত করুন উচ্চতা অতিভুজকে সমকোণে ছেদ করে এবং h সর্বাধিক c-এর অর্ধেক।" },
      { "question": "অতিভুজ ও উচ্চতা ব্যবহারে ক্ষেত্রফলের সূত্র কী?", "answer": "সূত্রটি K = ch/2, যেখানে K ক্ষেত্রফল, c ভূমি হিসেবে অতিভুজ, এবং h সেই ভূমির লম্ব উচ্চতা। এটি সবচেয়ে দীর্ঘ বাহুকে ভূমি ধরা আদর্শ ত্রিভুজ ক্ষেত্রফল নিয়ম, এবং ফলাফল মিলিত বর্গ একক ব্যবহার করে।" },
      { "question": "অতিভুজের ওপর উচ্চতা কী?", "answer": "এটি সমকোণ শীর্ষবিন্দু C থেকে অতিভুজ AB পর্যন্ত লম্ব খণ্ড, D বিন্দুতে ছেদ করে: সেই শীর্ষবিন্দু থেকে অতিভুজ পর্যন্ত সবচেয়ে কম দূরত্ব এবং একমাত্র উচ্চতা যা এর সঙ্গে জোড়া বাঁধে। এটি কোনো বাহু নয়।" },
      { "question": "উচ্চতা কি অতিভুজের সমান?", "answer": "না। অতিভুজ c সবচেয়ে দীর্ঘ বাহু, সমকোণের বিপরীতে, আর উচ্চতা h সমকোণ শীর্ষবিন্দু থেকে সেই বাহু পর্যন্ত লম্ব পতন: c ভূমি, h উচ্চতা। 6-8-10 ত্রিভুজে, c = 10 ও h = 4.8।" },
      { "question": "উচ্চতা কি অতিভুজের অর্ধেকের চেয়ে দীর্ঘ হতে পারে?", "answer": "না। বৈধ সমকোণী ত্রিভুজের জন্য, 0 < h <= c/2। অতিভুজকে দুটি সমান অর্ধেকে ভাগ করলে উচ্চতা সবচেয়ে লম্বা হয়, ঠিক c/2-এ পৌঁছায়। বড় মান, যেমন c = 10-সহ h = 6, এমন ত্রিভুজের হতে পারে না।" },
      { "question": "সর্বোচ্চ উচ্চতা অতিভুজের অর্ধেক কেন?", "answer": "x + y = c-সহ h বর্গ = xy থেকে, x = y = c/2 হলে গুণফল xy সর্বাধিক হয়। তাহলে h বর্গ <= c বর্গ / 4, ফলে h <= c/2: সবচেয়ে সমান ভাগ সবচেয়ে লম্বা উচ্চতা দেয়।" },
      { "question": "উচ্চতা অতিভুজের অর্ধেকের সমান হলে কী ঘটে?", "answer": "ত্রিভুজটি সমদ্বিবাহু সমকোণী ত্রিভুজ: সমান বাহু, 45-ডিগ্রি সূক্ষ্মকোণ, এবং উচ্চতা অতিভুজের মধ্যমা হিসেবেও কাজ করে। এই বৈধ সীমানা ক্ষেত্র সবচেয়ে বড় সম্ভাব্য ক্ষেত্রফল দেয়, K = c বর্গ / 4।" },
      { "question": "দুটি বাহু না জেনে কি ক্ষেত্রফল গণনা করা যায়?", "answer": "হ্যাঁ। ভূমি ও তার অনুরূপ লম্ব উচ্চতাই যথেষ্ট; বাহুগুলো ক্ষেত্রফল সম্পর্কে কিছু যোগ করে না। অতিভুজ c ও উচ্চতা h লিখুন, এবং K = ch/2 সরাসরি ক্ষেত্রফল দেয়।" },
      { "question": "অতিভুজ-ভিত্তিক সূত্র বাহুর সূত্রের সঙ্গে কীভাবে সম্পর্কিত?", "answer": "দুটোই একই ক্ষেত্রফল গণনা করে। ab/2-কে ch/2-এর সমান ধরে দুই দিয়ে গুণ করলে ab = ch পাওয়া যায়, ফলে h = ab/c, আর এজন্যই দুটো গণনা করা এত শক্তিশালী যাচাই।" },
      { "question": "উচ্চতা ও অতিভুজের দুটি খণ্ডের মধ্যে সম্পর্ক কী?", "answer": "উচ্চতা h বর্গ = xy মেনে চলে, যেখানে x ও y হলো অতিভুজ থেকে কাটা খণ্ড, ফলে এটি তাদের গুণোত্তর মধ্যক। এটি দুটি ছোট ত্রিভুজের সদৃশতা থেকে আসে, x/h = h/y-এর মাধ্যমে।" },
      { "question": "অতিভুজ ও উচ্চতা কি দুটি বাহু নির্ধারণ করতে পারে?", "answer": "হ্যাঁ, অদলবদল পর্যন্ত। a বর্গ + b বর্গ = c বর্গ ও ab = ch থেকে, বাহুগুলো (c বর্গ +/- c গুণ sqrt(c বর্গ - 4h বর্গ)) / 2 থেকে পাওয়া যায়। c = 10 ও h = 4.8-এর জন্য এটি বাহু 6 ও 8 দেয়।" },
      { "question": "ক্যালকুলেটর কি সেন্টিমিটার, মিটার ও ফুটে কাজ করে?", "answer": "হ্যাঁ, যতক্ষণ দুটি ইনপুট একই একক ব্যবহার করে: মিটার দিলে বর্গমিটার, সেন্টিমিটার দিলে বর্গসেন্টিমিটার, ফুট দিলে বর্গফুট। মিশ্র একক প্রথমে রূপান্তর করুন।" }
    ],
    "relatedHeading": "সম্পর্কিত সমকোণী ত্রিভুজ ক্যালকুলেটর দেখুন",
    "relatedItems": [
      "সমকোণী ত্রিভুজ ক্ষেত্রফল ক্যালকুলেটর",
      "কোণ থেকে সমকোণী ত্রিভুজ ক্ষেত্রফল ক্যালকুলেটর",
      "উচ্চতা থেকে সমকোণী ত্রিভুজ ক্ষেত্রফল ক্যালকুলেটর",
      "বাহু থেকে সমকোণী ত্রিভুজ ক্ষেত্রফল ক্যালকুলেটর",
      "সমকোণী ত্রিভুজ উচ্চতা ক্যালকুলেটর",
      "অন্তর্ব্যাসার্ধ ও অর্ধপরিসীমা থেকে সমকোণী ত্রিভুজ ক্ষেত্রফল ক্যালকুলেটর"
    ]
  },
  "ja": {
    "tocHeading": "このガイドの内容",
    "tocItems": {
      "sec-intro": "斜辺と高さから直角三角形の面積を求める方法",
      "sec-understand": "斜辺・2辺・高さを理解する",
      "sec-formula": "面積の公式が「斜辺×高さ÷2」である理由",
      "sec-relationship": "斜辺と高さが2辺とどう関係するか",
      "sec-max": "高さが斜辺の半分を超えられない理由",
      "sec-howto": "斜辺と高さによる面積計算機の使い方",
      "sec-examples": "ステップごとの例題",
      "sec-applications": "実生活での応用",
      "sec-geomean": "相乗平均の関係",
      "sec-legs": "斜辺と高さから2辺を求める",
      "sec-valid": "測定値が有効かどうかの確認",
      "sec-units": "測定単位と丸め",
      "sec-mistakes": "よくある間違い",
      "sec-verify": "面積の正しさの確認方法",
      "sec-altitude-table": "高さが面積に与える影響",
      "sec-related": "関連する直角三角形計算機を見る",
      "sec-faq": "よくある質問",
      "sec-conclusion": "まとめ"
    },
    "sections": {
      "sec-intro": {
        "h2": "斜辺と高さを使って直角三角形の面積を計算する方法",
        "blocks": [
          { "kind": "p", "text": "直角三角形の斜辺が [[10\\text{ m}]] で、その斜辺に引いた高さが [[4.8\\text{ m}]] だとします。[[K=ch/2]] を適用すると [[K=(10\\times4.8)/2]]、[[[\\boxed{K=24\\text{ m}^2}]]] となります。この三角形は 24 平方メートルの平面を囲んでいます。これが計算機が自動化する完全な手順です。1つの辺、その垂線の高さ、1回の掛け算、1回の半分にする計算です。" },
          { "kind": "p", "text": "斜辺が底辺として使えるのは、対応する垂線の高さが分かれば三角形のどの辺も底辺になれるからです。高さとは直角の頂点から斜辺に引いた垂線の線分であり、斜辺と直角に交わらなければなりません。斜めの線分はこの公式が必要とする高さではありません。面積は底辺とその高さだけに依存するため、2辺を入力する必要はなく、結果は常に使用した長さの単位の平方単位で表されます。" }
        ]
      },
      "sec-understand": {
        "h2": "斜辺・2辺・高さを理解する",
        "blocks": [
          { "kind": "p", "text": "全体を通して使う記号は次の通りです。[[A]]、[[B]]、[[C]] は頂点と角で [[C=90^\\circ]]、[[a]] と [[b]] は直角を挟む2辺、[[c]] は [[C]] に対向する斜辺、[[h]] は頂点 [[C]] から斜辺に下ろした垂線の高さ、[[D]] は高さが斜辺と交わる点、[[x]] と [[y]] は斜辺の2つの線分、[[K]] は面積であり、角の [[A]] と混同しないよう全体を通して使います。" },
          { "kind": "h3", "text": "直角三角形とは?" },
          { "kind": "p", "text": "直角三角形はちょうど1つの90度の角を持ちます。その2辺がその角で交わり、斜辺はその対向に最長の辺として位置します。残りの2つの角は鋭角で、3つの角の合計が180度なので、[[A+B+C=180^\\circ]] で [[C=90^\\circ]] のとき [[A+B=90^\\circ]] となります。高さの方法はこれに依存します。底辺は最長の辺、高さは直角の角から下ろします。" },
          { "kind": "h3", "text": "斜辺とは?" },
          { "kind": "p", "text": "斜辺は直角に対向する辺で、計算機では [[c]] と表記されます。どの向きでも見つけるには、直角を示す四角い印に触れていない辺を探してください。その辺が斜辺です。どちらの辺よりも長く、水平に描く必要はありません。底辺とは選ばれた基準の辺であり、画面の方向ではありません。" },
          { "kind": "h3", "text": "幾何学における高さとは?" },
          { "kind": "p", "text": "高さとは、頂点から対辺を含む直線に引いた垂線の線分です。その辺と90度の角をなさなければならず、それが高さをただの線ではなく高さたらしめています。高さは必ずしも三角形の元の辺である必要はなく、選んだ底辺によってどの線分が高さになるかが変わります。" },
          { "kind": "h3", "text": "斜辺に対する高さを理解する" },
          { "kind": "p", "text": "三角形 [[ABC]] において、[[C]] は直角の頂点、[[AB]] は斜辺です。高さ [[h]] は [[C]] から [[AB]] に垂直に引いた線分 [[CD]] であり、[[CD\\perp AB]]、[[CD=h]]、[[AB=c]] で、[[D]] を垂線の足として、三角形を内側に2つの小さな直角三角形に分けます。" },
          { "kind": "h3", "text": "高さが斜辺をどう分けるか" },
          { "kind": "p", "text": "高さが斜辺を [[AD=x]] と [[DB=y]] に切るとします。すると [[[\\boxed{x+y=c}]]] となります。各小三角形は直角を含み、元の三角形と1つの鋭角を共有するため、3つの三角形はすべて相似です。2つの小三角形の相似から [[x/h=h/y]] が得られ、交差乗算で [[[\\boxed{h^2=xy}]]]、つまり相乗平均の関係が得られます。高さは斜辺の2線分の相乗平均であり、後述の最大高さの規則の出発点です。" }
        ],
        "imgAlt": "三角形ABC: Cに直角、斜辺ABをc、高さCDをh、線分xとyで表示",
        "figcaption": "斜辺への高さCDを持つ三角形ABC: AD = x、DB = y、x + y = c、h&sup2; = xy、K = ch/2。"
      },
      "sec-formula": {
        "h2": "面積の公式が「斜辺×高さ÷2」である理由",
        "blocks": [
          { "kind": "p", "text": "すべての三角形の面積は1つの規則から始まります。[[K=\\frac12\\times\\text{base}\\times\\text{perpendicular height}]]。使う高さが垂直であれば、どの辺も底辺になれます。この計算機は斜辺を底辺に選ぶため、[[\\text{base}=c]]、対応する垂線の高さは高さ [[\\text{height}=h]] です。代入すると [[K=\\frac12\\times c\\times h]]、すなわち [[[\\boxed{K=\\frac{ch}{2}}]]] となります。" },
          { "kind": "h3", "text": "斜辺を底辺にできるのはなぜ?" },
          { "kind": "p", "text": "斜辺はこの計算のために選ばれた底辺にすぎません。高さは対向する頂点、つまり直角の頂点 [[C]] から測らなければならず、斜辺に垂直でなければなりません。対応する高さとともに別の辺を底辺に選んでも同じ面積が得られます。底辺とは辺が担う役割であり、固定的な呼び名ではありません。" },
          { "kind": "h3", "text": "公式を2で割るのはなぜ?" },
          { "kind": "p", "text": "三角形は、同じ底辺と同じ垂線の高さで作った平行四辺形のちょうど半分を占めます。底辺10、高さ4.8のとき、平行四辺形の面積は [[10\\times4.8=48]]。その中の三角形は半分を占めるため、[[K=48/2=24]] となります。半分にするのを省略すると別の問いへの答えになります。平行四辺形の面積であって、三角形の面積ではありません。" },
          { "kind": "h3", "text": "この公式は直角三角形にしか使えない?" },
          { "kind": "p", "text": "式 [[K=ch/2]] は一般の三角形の面積公式であり、[[c]] が選んだ底辺、[[h]] がその垂線の高さである限り、どの三角形にも有効です。このページが直角三角形専用なのは読み替えにあります。[[c]] は斜辺、[[h]] は直角の頂点から下ろし、高さは追加の制限 [[h\\leq c/2]] に従います。これは一般の三角形には意味を持ちません。" },
          { "kind": "h3", "text": "2辺が必要ないのはなぜ?" },
          { "kind": "p", "text": "面積に必要なのは1つの辺とその対応する垂線の高さだけで、それ以上は何も要りません。[[c]] と [[h]] が既知なら、辺は面積を変える情報を何も加えません。辺の公式 [[K=ab/2]] は同じ量への別の入力経路であり、測定データが2つの垂直な辺である場合に使う価値があります。手元にあるのが辺なら、<a href=\"/right-triangle-area-from-legs-calculator/\">2辺からの直角三角形の面積計算機</a> が直接受け付けます。" }
        ],
        "imgAlt": "斜辺と高さによる面積 K = ch/2 と2辺による K = ab/2 の比較",
        "figcaption": "同じ面積への2つの経路: 高さを伴う斜辺と、2辺。どちらも囲まれた領域に等しく、ch/2 = ab/2 となります。"
      },
      "sec-relationship": {
        "h2": "斜辺と高さが2辺とどう関係するか",
        "blocks": [
          { "kind": "p", "text": "有効な面積公式が2つあり、同じ三角形を表します。[[K=ab/2]] と [[K=ch/2]] です。同じ面積を計算するので、[[\\frac{ab}{2}=\\frac{ch}{2}]]。両辺を2倍すると [[ab=ch]]。高さについて整理すると [[[\\boxed{h=\\frac{ab}{c}}]]]。斜辺に対する高さは2辺の積を斜辺で割ったものであり、これが2つの面積公式が整合的な三角形で決して食い違わない理由です。" },
          { "kind": "h3", "text": "この関係が役立つ理由" },
          { "kind": "p", "text": "同じ幾何を表す3つの方法をつなぎます。辺と斜辺が高さを決めるため、辺で測った三角形は既にそれを含んでいます。高さと斜辺が面積を決めるため、面積は辺を先に求め直す必要がありません。どちらかの公式で面積を計算して比較することは最強の確認の1つです。片方の経路の間違いがもう片方で再現されることはめったにないからです。" },
          { "kind": "h3", "text": "ピタゴラスの定理とのつながり" },
          { "kind": "p", "text": "ピタゴラスの定理 [[a^2+b^2=c^2]] は辺と斜辺のつながりを検証します。3-4-5の三角形を例にとると、[[3^2+4^2=5^2]]、[[9+16=25]]。高さは [[h=\\frac{3\\times4}{5}]]、[[[\\boxed{h=2.4}]]]。斜辺と高さからの面積は [[K=\\frac{5\\times2.4}{2}=6]]、辺からは [[K=\\frac{3\\times4}{2}=6]]。どちらの公式も同じ囲まれた領域を測り、[[h=ab/c]] がそれを保証するつながりです。" },
          { "kind": "h3", "text": "高さが2つの相似な三角形を作る仕組み" },
          { "kind": "p", "text": "高さは元の三角形を2つの小さな直角三角形に分け、それぞれが元の三角形と鋭角を共有します。2つの共有角により3つの三角形はすべて相似となり、対応する辺は比例を保ちます。高さを斜辺の線分に対応させると [[x/h=h/y]] が得られ、交差乗算で [[h^2=xy]] となります。相乗平均の関係とは、相似を式で書いたものです。" }
        ]
      },
      "sec-max": {
        "h2": "高さが斜辺の半分を超えられないのはなぜ?",
        "blocks": [
          { "kind": "p", "text": "すべての有効な直角三角形は [[[\\boxed{h\\leq\\frac{c}{2}}]]] に従います。これは幾何学的な事実であり、導出に値します。" },
          { "kind": "h3", "text": "斜辺の2つの線分を理解する" },
          { "kind": "p", "text": "[[x+y=c]] と [[h^2=xy]] を思い出してください。積 [[xy]] は2つの線分が等しいときに最大となり、これは相加・相乗平均の不等式の帰結です。[[xy\\leq\\left(\\frac{x+y}{2}\\right)^2]]。[[x+y=c]] なので右辺は [[c^2/4]] となり、[[h^2\\leq\\frac{c^2}{4}]]、正の長さでは [[h\\leq c/2]] です。平たく言えば、不均等な分割は積と高さを縮め、最も均等な分割が最も高い高さを生みます。" },
          { "kind": "h3", "text": "最大高さでは何が起こる?" },
          { "kind": "p", "text": "最大は [[x=y=c/2]] のときに起こり、そのとき [[h=c/2]] です。これは二等辺直角三角形を生みます。2辺が等しく、鋭角は [[45^\\circ]] と [[45^\\circ]] です。高さはそのまま斜辺への中線も兼ね、有効な三角形であり退化したものではありません。" },
          { "kind": "h3", "text": "最大高さの例" },
          { "kind": "p", "text": "[[c=10]] のとき、最大高さは [[h_{\\max}=10/2=5]]。最大面積は [[K=\\frac{10\\times5}{2}]]、[[[\\boxed{K_{\\max}=25}]]]。斜辺10の直角三角形で高さが5を超えるものはなく、したがって面積が25平方単位を超えるものもありません。" },
          { "kind": "h3", "text": "高さがc/2より大きいとどうなる?" },
          { "kind": "p", "text": "[[c=10]]、[[h=5.5]] のとき、有効な最大高さは5なので、これらの測定値は直角三角形を表せません。公式はそれでも [[K=\\frac{10\\times5.5}{2}=27.5]] を出しますが、その数はその測定値を持つ有効な直角三角形を表しません。面積ではなく測定ミスの合図として扱ってください。このガイドは、計算機がそのような入力を自動的に拒否するかどうかについて主張しません。" },
          { "kind": "h3", "text": "高さがずっと小さいとどうなる?" },
          { "kind": "p", "text": "斜辺に対して小さい高さは、一方の辺がもう一方よりずっと長い、細長い直角三角形を表します。斜辺を固定すると、高さが減るにつれて面積も減ります。[[K=ch/2]] は [[h]] に直接比例するからです。正の下限はありません。高さは0に近づくことができ、三角形は退化した線に向かって平らになります。" }
        ],
        "imgAlt": "二等辺直角三角形における最大高さc/2、有効な小さめの高さ、無効なケース",
        "figcaption": "左: c/2での最大高さが最大面積を与える。中央: より小さい有効な高さ。右: c/2を超える高さは直角三角形に属せない。"
      },
      "sec-howto": {
        "h2": "斜辺と高さによる直角三角形の面積計算機の使い方",
        "blocks": [
          { "kind": "p", "text": "計算機に必要な入力はちょうど2つです。以下の手順は画面の順序に従い、測定した三角形から検証済みの結果まで案内します。" }
        ],
        "steps": [
          "<strong>斜辺を測定または特定する。</strong> 最長の辺で、90度の角の対向にある。",
          "<strong>斜辺に引いた垂線の高さを特定する。</strong> 直角の頂点から始まり、斜辺と90度で交わる。",
          "<strong>高さが垂直であることを確認する。</strong> 傾いた辺に沿って測った線分は、公式が必要とする高さではない。",
          "<strong>斜辺 [[c]] を入力する。</strong>",
          "<strong>高さ [[h]] を入力する。</strong>",
          "<strong>互換性のある長さの単位を選ぶ。</strong> 2つの測定値は同じ単位でなければならない。",
          "<strong>両方の測定値が正であることを確認する。</strong> 0や負の長さは三角形を表さない。",
          "<strong>[[h\\leq c/2]] を確認する。</strong> [[c=10]] の場合、高さが5を超えるとその斜辺を持つ直角三角形には属せない。",
          "<strong>Click Calculate Area.</strong>",
          "<strong>結果を確認する。</strong> 面積は入力に対応する平方単位で表示される。",
          "<strong>平方単位を確認する。</strong> メートルなら平方メートル、センチメートルなら平方センチメートルになる。",
          "<strong>解法の手順を確認する。</strong> 代入と計算が表示される。",
          "<strong>新しい三角形を入力する前にResetを使う。</strong> 両方の欄が消去され、次の計算をきれいに始められる。"
        ],
        "closingParagraphs": [
          "計算機は2辺も角も求めない。1つの辺とその対応する垂線の高さがあれば面積は完全に決まるからだ。"
        ]
      },
      "sec-examples": {
        "h2": "斜辺と高さを使った直角三角形の面積の例題(ステップごと)",
        "blocks": [
          { "kind": "p", "text": "4つの例題が、よく知られたものから方法を積み上げます。それぞれがすべての代入を示して [[K=ch/2]] を適用し、高さが直角三角形の制限を守っていることを確認します。" },
          { "kind": "h3", "text": "例題1: 既存の計算機の例を使う" },
          { "kind": "p", "text": "[[c=10]]、[[h=4.8]] とする。ステップ1: 公式を書く、[[K=ch/2]]。ステップ2: 代入する、[[K=\\frac{10\\times4.8}{2}]]。ステップ3: 掛ける、[[K=\\frac{48}{2}]]。最終答え: [[[\\boxed{K=24\\text{ square units}}]]]。高さは [[4.8<5]] で有効。斜辺の半分という最大値を下回っている。" },
          { "kind": "h3", "text": "例題2: 3-4-5の三角形" },
          { "kind": "p", "text": "[[a=3]]、[[b=4]]、[[c=5]] とする。まず高さを求める。[[h=ab/c]] より [[h=\\frac{3\\times4}{5}=2.4]]。すると [[K=\\frac{5\\times2.4}{2}]]、[[[\\boxed{K=6}]]]。辺で検証すると [[K=\\frac{3\\times4}{2}=6]]。両方の経路が一致する。当然である。" },
          { "kind": "h3", "text": "例題3: 二等辺直角三角形" },
          { "kind": "p", "text": "[[c=10]]、[[h=5]] とする。すると [[K=\\frac{10\\times5}{2}]]、[[[\\boxed{K=25}]]]。高さは斜辺の半分に等しいため、2辺は等しく、各鋭角は [[45^\\circ]]。これは斜辺10の直角三角形が取り得る最大の面積である。" },
          { "kind": "h3", "text": "例題4: より小さい三角形の高さ" },
          { "kind": "p", "text": "[[c=13]]、[[h=5]] とする。すると [[K=\\frac{13\\times5}{2}]]、[[[\\boxed{K=32.5\\text{ square units}}]]]。[[5\\leq6.5]] なので高さは制限を満たす。斜辺の半分は6.5で、5は十分に下回っている。" }
        ]
      },
      "sec-applications": {
        "h2": "斜辺と高さによる直角三角形の面積の実生活での応用",
        "blocks": [
          { "kind": "p", "text": "12の具体例が、異なる規模と単位でこの公式を示します。それぞれが場面の三角形を名指しし、2つの測定値を示し、段階的に代入し、その背後にある仮定を述べます。各例は直角三角形のパネル・側面・断面・簡略モデルであり、公式はモデル化された三角形に適用されます。同名の曲がった不規則な物体すべてに適用されるわけではありません。" },
          { "kind": "h3", "text": "例1: 三角形のガラス窓" },
          { "kind": "p", "text": "直角三角形のガラスパネルは斜辺 [[2.5\\text{ m}]]、垂線の高さ [[1.2\\text{ m}]] を持つ。[[K=ch/2]] を使うと [[K=\\frac{2.5\\times1.2}{2}]]、[[[\\boxed{K=1.5\\text{ m}^2}]]]。これは枠の前の平面ガラスの面積であり、まっすぐな辺と真の直角を仮定している。" },
          { "kind": "h3", "text": "例2: 三角形のスロープ側面パネル" },
          { "kind": "p", "text": "スロープの直角三角形の側面パネルは斜辺 [[4\\text{ m}]]、垂線の高さ [[1.5\\text{ m}]] を持つ。すると [[K=\\frac{4\\times1.5}{2}]]、[[[\\boxed{K=3\\text{ m}^2}]]]。結果は三角形の側面形状を表し、歩行面ではない。" },
          { "kind": "h3", "text": "例3: 三角形の帆の一部" },
          { "kind": "p", "text": "直角三角形の帆の一部は斜辺 [[13\\text{ ft}]]、高さ [[5\\text{ ft}]] を持つ。すると [[K=\\frac{13\\times5}{2}]]、[[[\\boxed{K=32.5\\text{ ft}^2}]]]。これは縫い目や膨らみの前の平面の布面積である。実際の帆は膨らむため、帆は平面としてモデル化されている。" },
          { "kind": "h3", "text": "例4: 三角形の土地の測量" },
          { "kind": "p", "text": "簡略化された直角三角形の区画は斜辺 [[50\\text{ m}]]、高さ [[12\\text{ m}]] を持つ。すると [[K=\\frac{50\\times12}{2}]]、[[[\\boxed{K=300\\text{ m}^2}]]]。これは境界を平地の直線として扱う簡略モデルでの面積の見積もりである。" },
          { "kind": "h3", "text": "例5: 鋼製ガセットプレート" },
          { "kind": "p", "text": "直角三角形の鋼製支持板は斜辺 [[3.4\\text{ m}]]、高さ [[1.6\\text{ m}]] を持つ。すると [[K=\\frac{3.4\\times1.6}{2}]]、[[[\\boxed{K=2.72\\text{ m}^2}]]]。これは平面の板面積のみであり、耐荷重は別の問題である。" },
          { "kind": "h3", "text": "例6: 階段の側面形状" },
          { "kind": "p", "text": "簡略化された直角三角形の階段側面は斜辺 [[5\\text{ m}]]、高さ [[2\\text{ m}]] を持つ。すると [[K=\\frac{5\\times2}{2}]]、[[[\\boxed{K=5\\text{ m}^2}]]]。これは三角形の側面形状を表し、個々の踏面と蹴上げの合計ではない。" },
          { "kind": "h3", "text": "例7: 三角形の道路標識" },
          { "kind": "p", "text": "直角三角形の標識パネルは斜辺 [[1.8\\text{ m}]]、高さ [[0.8\\text{ m}]] を持つ。すると [[K=\\frac{1.8\\times0.8}{2}]]、[[[\\boxed{K=0.72\\text{ m}^2}]]]。0.72平方メートルの標識面の材料であり、取付金具は除く。" },
          { "kind": "h3", "text": "例8: ソーラー支持パネル" },
          { "kind": "p", "text": "直角三角形の取付支持パネルは斜辺 [[3\\text{ m}]]、高さ [[1.2\\text{ m}]] を持つ。すると [[K=\\frac{3\\times1.2}{2}]]、[[[\\boxed{K=1.8\\text{ m}^2}]]]。パネル面積のみであり、これは取付ブラケットなので発電量とは無関係である。" },
          { "kind": "h3", "text": "例9: 合板の切断テンプレート" },
          { "kind": "p", "text": "直角三角形の合板テンプレートは斜辺 [[2.5\\text{ m}]]、高さ [[1\\text{ m}]] を持つ。すると [[K=\\frac{2.5\\times1}{2}]]、[[[\\boxed{K=1.25\\text{ m}^2}]]]。使える三角形の部品であり、切断の無駄には別途余白が必要である。" },
          { "kind": "h3", "text": "例10: 三角形の布バナー" },
          { "kind": "p", "text": "直角三角形のバナーは斜辺 [[6\\text{ ft}]]、高さ [[2.4\\text{ ft}]] を持つ。すると [[K=\\frac{6\\times2.4}{2}]]、[[[\\boxed{K=7.2\\text{ ft}^2}]]]。7.2平方フィートの平面材料であり、縁の余白は製作者が加える。" },
          { "kind": "h3", "text": "例11: 大きな三角形の測量区画" },
          { "kind": "p", "text": "直角三角形の土地は斜辺 [[80\\text{ m}]]、高さ [[30\\text{ m}]] を持つ。すると [[K=\\frac{80\\times30}{2}]]、[[[\\boxed{K=1,200\\text{ m}^2}]]]。区画が平地で真に直角三角形である場合にのみ有効である。" },
          { "kind": "h3", "text": "例12: 三角形の天幕支持パネル" },
          { "kind": "p", "text": "直角三角形の天幕支持パネルは斜辺 [[8\\text{ m}]]、高さ [[3.6\\text{ m}]] を持つ。すると [[K=\\frac{8\\times3.6}{2}]]、[[[\\boxed{K=14.4\\text{ m}^2}]]]。平面の三角形面積であり、風圧や固定具は別の問題である。" },
          { "kind": "h3", "text": "実例の比較" }
        ],
        "table": {
          "headers": ["用途", "斜辺 c", "高さ h", "面積", "単位"],
          "rows": [
            ["ガラス窓", "2.5", "1.2", "1.5", "m²"],
            ["スロープ側面パネル", "4", "1.5", "3", "m²"],
            ["帆の一部", "13", "5", "32.5", "ft²"],
            ["土地の区画", "50", "12", "300", "m²"],
            ["ガセットプレート", "3.4", "1.6", "2.72", "m²"],
            ["階段の側面", "5", "2", "5", "m²"],
            ["道路標識", "1.8", "0.8", "0.72", "m²"],
            ["ソーラー支持パネル", "3", "1.2", "1.8", "m²"],
            ["合板テンプレート", "2.5", "1", "1.25", "m²"],
            ["布バナー", "6", "2.4", "7.2", "ft²"],
            ["大きな測量区画", "80", "30", "1,200", "m²"],
            ["天幕支持パネル", "8", "3.6", "14.4", "m²"]
          ]
        },
        "imgAlt": "K = ch/2 の4つの応用: ガラス窓、スロープパネル、帆、測量された土地",
        "figcaption": "4つの場面での同じ公式: ガラス窓、スロープの側面パネル、帆、測量された土地。"
      },
      "sec-geomean": {
        "h2": "高さの2乗が斜辺の2線分の積に等しいのはなぜ?",
        "blocks": [
          { "kind": "p", "text": "高さは斜辺と [[D]] で交わり、[[AD=x]] と [[DB=y]] に分けます。関係は [[[\\boxed{h^2=xy}]]] です。[[x]] が第1の線分、[[y]] が第2の線分、[[h]] が垂線の高さです。暗記するより、どこから来るかを見る価値があります。" },
          { "kind": "h3", "text": "この関係の仕組み" },
          { "kind": "p", "text": "高さは2つの小さな直角三角形を作り、それぞれが元の三角形と相似であり、したがって互いに相似です。一方の短辺を他方の長辺に対応させると [[\\frac{x}{h}=\\frac{h}{y}]] が得られ、交差乗算で [[h^2=xy]] となります。平方根をとると [[h=\\sqrt{xy}]]。高さは斜辺の2線分の相乗平均、つまり2乗がその積に等しい数です。" },
          { "kind": "h3", "text": "数値例" },
          { "kind": "p", "text": "[[x=4]]、[[y=9]] のとき、[[h^2=4\\times9=36]]、[[[\\boxed{h=6}]]]。完全な斜辺は [[c=4+9=13]]、面積は [[K=\\frac{13\\times6}{2}]]、[[[\\boxed{K=39}]]]。斜辺の2線分が分かれば、辺の測定なしに高さが求まります。" },
          { "kind": "h3", "text": "この関係が役立つ場面" },
          { "kind": "p", "text": "高さが不明だが線分が与えられた幾何の問題、相似の問題、高さの測定に独立した確認が必要な場合に登場します。また高さの制限も説明します。積 [[xy]] は固定された斜辺で上限が決まるため、高さにも上限があります。計算機は [[x]] と [[y]] を入力として必要としません。この定理は支援知識であり、計算機の入力欄ではありません。" }
        ]
      },
      "sec-legs": {
        "h2": "斜辺と高さが分かっているときに2辺を求める方法",
        "blocks": [
          { "kind": "p", "text": "面積には計算機は [[c]] と [[h]] だけを必要としますが、この2つの測定値には2辺の長さを決める十分な情報も含まれています。入れ替えを除いてです。[[a^2+b^2=c^2]] と [[ab=ch]] から始めます。[[(a^2-b^2)^2=(a^2+b^2)^2-4a^2b^2]] なので、代入により [[(a^2-b^2)^2=c^4-4c^2h^2]]、したがって [[[\\boxed{a^2,b^2=\\frac{c^2\\pm c\\sqrt{c^2-4h^2}}{2}}]]]。2つの符号は2辺の割り当てに対応します。辺を入れ替えても三角形やその面積は何も変わりません。" },
          { "kind": "p", "text": "数値例: [[c=10]]、[[h=4.8]] のとき、[[ab=ch=48]]、[[a^2+b^2=100]]。2辺は [[a=6]] と [[b=8]] です。検証: [[6^2+8^2=10^2]]、[[36+64=100]]。面積は両方で一致します。[[K=\\frac{6\\times8}{2}=24]] と [[K=\\frac{10\\times4.8}{2}=24]]。これは追加の数学的洞察であり、既存の計算機の追加機能ではありません。計算機の目的、すなわち斜辺と高さからの面積から注意をそらすべきではありません。" }
        ]
      },
      "sec-valid": {
        "h2": "斜辺と高さの測定値が有効かどうかを確認する方法",
        "blocks": [
          { "kind": "p", "text": "退化しない直角三角形では、入力は3つの条件、[[c>0]]、[[h>0]]、[[h\\leq c/2]] を満たさなければなりません。最初の2つは0と負の長さを除外し、3つ目は前述の高さの制限です。3つすべてを同時に満たす必要があります。" },
          { "kind": "h3", "text": "有効な入力の例" },
          { "kind": "p", "text": "[[c=12]]、[[h=5]] のとき、最大高さは [[h_{\\max}=6]]。[[5<6]] なので測定値は有効であり、[[K=\\frac{12\\times5}{2}=30]]。" },
          { "kind": "h3", "text": "無効な入力の例" },
          { "kind": "p", "text": "[[c=12]]、[[h=7]] のとき、最大高さは [[h_{\\max}=6]]。[[7>6]] なので測定値は直角三角形を表せません。斜辺が12に固定されていると、[[x]] と [[y]] のどんな分割でも [[\\sqrt{xy}]] を7にできません。" },
          { "kind": "h3", "text": "境界のケース" },
          { "kind": "p", "text": "[[c=12]]、[[h=6]] のとき、高さは可能な最大値に等しくなります。これは2辺が等しい二等辺直角三角形であり、境界上にちょうど位置します。制限は等号を含みます。[[h\\leq c/2]] は等しい場合を許します。" },
          { "kind": "h3", "text": "0や負の値はどうなる?" },
          { "kind": "p", "text": "斜辺は正でなければならず、退化しない三角形では高さも正でなければなりません。0の高さは0の面積と退化した形状、つまり三角形ではなく線を生み、負の長さには幾何学的意味がありません。このガイドは、計算機がすべての検証を自動的に行うとは主張しません。" }
        ]
      },
      "sec-units": {
        "h2": "斜辺と高さの計算における面積単位の理解",
        "blocks": [
          { "kind": "p", "text": "面積は2次元なので、その単位は長さの単位の2乗です。記号では [[\\text{m}\\times\\text{m}=\\text{m}^2]]。結果を正しく表示するために単位選択があります。" },
          { "kind": "h3", "text": "単位をそろえる必要がある理由" },
          { "kind": "p", "text": "公式を適用する前に、斜辺と高さを同じ単位で表さなければなりません。斜辺が200 cm、高さが1 mなら、まず200 cmと100 cmに変換します。すると [[K=\\frac{200\\times100}{2}]]、[[K=10,000\\text{ cm}^2]]、同等に [[K=1\\text{ m}^2]]。異なる単位の測定値を掛けると単位のはっきりしない数になるため、先に変換してから計算します。" },
          { "kind": "h3", "text": "丸めが重要な理由" },
          { "kind": "p", "text": "測定の丸めは最終面積をわずかに変えます。高さが直接掛けられるからです。中間ステップでは完全な精度を保ち、最終答えだけを丸めます。高さを早めに丸めると誤差が蓄積します。" },
          { "kind": "h3", "text": "正確な値と測定値" },
          { "kind": "p", "text": "斜辺10の二等辺直角三角形の高さ5のような正確な測定値は、巻尺や計器の読みとは振る舞いが異なります。計器の不確かさは面積に流れ込むため、最後の桁は入力と同じ程度にしか信頼できないものとして扱います。" }
        ]
      },
      "sec-mistakes": {
        "h2": "斜辺と高さから直角三角形の面積を求めるときのよくある間違い",
        "blocks": [
          { "kind": "p", "text": "間違った答えのほとんどは、計算の悪さではなくラベルの誤りから来ます。以下の15の間違いがほぼすべてをカバーします。" },
          { "kind": "h3", "text": "1. 斜辺と垂直な辺の混同" },
          { "kind": "p", "text": "辺を斜辺として入力すると底辺が縮みます。対策: 直角の印に触れていない辺を選んでください。" },
          { "kind": "h3", "text": "2. 傾いた辺に沿った高さの測定" },
          { "kind": "p", "text": "辺に沿った線分は高さではありません。対策: 直角の頂点から出て斜辺に90度で当たらなければなりません。" },
          { "kind": "h3", "text": "3. 斜辺に垂直でない距離の使用" },
          { "kind": "p", "text": "頂点から斜辺への垂直でない距離は真の高さより長く、面積を膨らませます。対策: まず垂直を確認してください。" },
          { "kind": "h3", "text": "4. 間違った頂点からの高さの使用" },
          { "kind": "p", "text": "斜辺と組になるのは直角の頂点からの高さだけです。" },
          { "kind": "h3", "text": "5. 2で割るのを忘れる" },
          { "kind": "p", "text": "[[c\\times h]] は平行四辺形の面積であり、三角形のものではありません。対策: 底辺と高さの積はすべて半分にしてください。" },
          { "kind": "h3", "text": "6. cとして間違った測定値を入力" },
          { "kind": "p", "text": "短い辺を斜辺として入力すると底辺が縮みます。対策: 斜辺は常に最長の辺です。" },
          { "kind": "h3", "text": "7. hとして間違った測定値を入力" },
          { "kind": "p", "text": "辺を高さとして入力すると垂直の組み合わせが壊れます。対策: 高さは斜辺と直角に交わらなければなりません。" },
          { "kind": "h3", "text": "8. 異なる長さの単位の混在" },
          { "kind": "p", "text": "2 mの斜辺と150 cmの高さでは意味のある数になりません。対策: まず1つの単位に変換してください。" },
          { "kind": "h3", "text": "9. 面積を長さの単位で報告" },
          { "kind": "p", "text": "24 m²の面積は24 mではありません。対策: 数とともに平方単位を書いてください。" },
          { "kind": "h3", "text": "10. 負の高さの入力" },
          { "kind": "p", "text": "長さは負になれません。負の高さは入力ミスの合図です。対策: 測定した正の距離を入力し直してください。" },
          { "kind": "h3", "text": "11. 0の斜辺の入力" },
          { "kind": "p", "text": "0の斜辺は三角形が存在しないことを意味します。対策: すべての長さが正であることを確認してください。" },
          { "kind": "h3", "text": "12. 斜辺の半分より大きい高さの使用" },
          { "kind": "p", "text": "[[c=10]] での高さ6は制限に違反します。対策: 測定した線分を確認し直してください。" },
          { "kind": "h3", "text": "13. 同じ底辺と高さの三角形は必ず直角だと考える" },
          { "kind": "p", "text": "[[K=ch/2]] は対応する底辺と高さを持つどの三角形にも使えます。対策: 高さの制限は直角三角形にのみ適用してください。" },
          { "kind": "h3", "text": "14. 高さhと辺aやbの混同" },
          { "kind": "p", "text": "6-8-10の三角形では高さは4.8で、どの辺にも等しくありません。対策: [[a]]、[[b]]、[[h]] を分けておいてください。" },
          { "kind": "h3", "text": "15. 公式が三角形の幾何を自動検証すると思い込む" },
          { "kind": "p", "text": "計算は入力を拒みません。対策: 有効性の確認は自分で行ってください。" },
          { "kind": "h3", "text": "誤りと正解: 具体例" },
          { "kind": "p", "text": "[[c=10]]、[[h=4]] のとき、正しい計算は [[K=\\frac{10\\times4}{2}=20]]。半分にするのを省略すると [[K=10\\times4=40]] となり、三角形の面積の2倍です。同様に、[[c=10]] での [[h=6]] は計算が数値を出しても高さの制限を満たしません。" }
        ]
      },
      "sec-verify": {
        "h2": "直角三角形の面積が正しいかどうかの確認方法",
        "blocks": [
          { "kind": "p", "text": "いくつかの確認がよくある誤りを捉えます。6-8-10の三角形がそのほとんどを示します。" },
          { "kind": "h3", "text": "方法1: 面積の公式を確認" },
          { "kind": "p", "text": "入力した値で [[K=ch/2]] を再計算します。[[c=10]]、[[h=4.8]] のとき [[K=(10\\times4.8)/2=24]]。2回目の計算で入力ミスを捉えます。" },
          { "kind": "h3", "text": "方法2: 2辺を使って検証" },
          { "kind": "p", "text": "辺が既知または求め直された場合、[[K=ab/2]] が一致しなければなりません。ここでは [[(6\\times8)/2=24]] が [[(10\\times4.8)/2=24]] と一致します。2つの方法、1つの三角形、1つの答えです。" },
          { "kind": "h3", "text": "方法3: ピタゴラスの定理を確認" },
          { "kind": "p", "text": "[[a^2+b^2=c^2]] を確認します。[[36+64=100]]。辺がこれを満たさなければ、三角形の特定が間違っています。" },
          { "kind": "h3", "text": "方法4: 高さの関係を確認" },
          { "kind": "p", "text": "[[h=ab/c]] を確認します。[[(6\\times8)/10=4.8]]。食い違えば、入力した高さはこの三角形のものではありません。" },
          { "kind": "h3", "text": "方法5: 斜辺の2線分を確認" },
          { "kind": "p", "text": "[[x+y=c]] と [[h^2=xy]] を確認します。線分6.4と3.6では、[[6.4+3.6=10]]、[[4.8^2=6.4\\times3.6]]、[[23.04=23.04]] だからです。" },
          { "kind": "h3", "text": "方法6: 最大高さを確認" },
          { "kind": "p", "text": "[[h\\leq c/2]] を確認します。ここでは [[4.8\\leq5]]。与えられた斜辺に対して [[c^2/4]] を超える直角三角形の面積の主張は不可能です。" },
          { "kind": "h3", "text": "方法7: 単位を確認" },
          { "kind": "p", "text": "結果が平方単位であることを確認します。メートルなら平方メートル、センチメートルなら平方センチメートルです。数値が正しくても、長さの単位で報告された面積は不完全です。" }
        ]
      },
      "sec-altitude-table": {
        "h2": "高さは直角三角形の面積にどう影響するか?",
        "blocks": [
          { "kind": "p", "text": "[[K=ch/2]] から、斜辺を固定すると面積は高さに直接比例して変わります。高さを2倍にすると面積も2倍になります。高さを増やすと面積も同じ割合で増えます。下の表は [[c=10]] を固定し、高さを最大の5まで変えています。" }
        ],
        "table": {
          "headers": ["高さ h", "面積 K"],
          "rows": [
            ["1", "5"],
            ["2", "10"],
            ["3", "15"],
            ["4", "20"],
            ["5", "25"]
          ]
        },
        "closingParagraphs": [
          "5行すべてが有効な直角三角形を表します。すべての高さが最大の5以下だからです。高さは [[c/2]] を超えられず、最大面積は2辺が等しいときに起こります。高さを変えても辺は固定されないことに注意してください。各行は1つの斜辺を共有する異なる三角形です。"
        ]
      },
      "sec-conclusion": {
        "h2": "斜辺とその高さがあれば十分",
        "blocks": [
          { "kind": "p", "text": "斜辺・高さの方法とは、通常の底辺・高さの規則を最長の辺に向けたものです。斜辺を特定し、垂線の高さを手にすれば、辺を先に求め直す必要なく、面積は1回の掛け算と1回の半分にする計算の先にあります。" },
          { "kind": "p", "text": "その真価は規律にあります。垂直性、高さの制限、相乗平均の関係が、大まかなスケッチを検証可能な数に変えます。高さを検証すれば、答えは信頼を得ます。" }
        ]
      }
    },
    "faqs": [
      { "question": "斜辺と高さを使って直角三角形の面積を計算するには?", "answer": "斜辺cに垂線の高さhを掛けて2で割ります。K = ch/2 です。例えば c = 10、h = 4.8 なら K = 24 平方単位です。高さが斜辺と直角に交わり、hがcの半分以下であることを確認してください。" },
      { "question": "斜辺と高さによる面積の公式は?", "answer": "公式は K = ch/2 です。Kは面積、cは底辺としての斜辺、hはその底辺への垂線の高さです。最長の辺を底辺とする標準的な三角形の面積規則であり、結果は対応する平方単位を使います。" },
      { "question": "斜辺に対する高さとは?", "answer": "直角の頂点Cから斜辺ABに引いた垂線の線分で、点Dで交わるものです。その頂点から斜辺までの最短距離であり、斜辺と組になる唯一の高さです。辺ではありません。" },
      { "question": "高さは斜辺と同じ?", "answer": "いいえ。斜辺cは直角に対向する最長の辺であり、高さhは直角の頂点からその辺への垂線の落下です。cが底辺、hが高さです。6-8-10の三角形では c = 10、h = 4.8 です。" },
      { "question": "高さは斜辺の半分より長くなれる?", "answer": "なれません。有効な直角三角形では 0 < h <= c/2 です。高さは斜辺を2つの等しい半分に分けるときに最も高くなり、ちょうどc/2に達します。c = 10でのh = 6のような大きな値は、そのような三角形に属せません。" },
      { "question": "最大高さが斜辺の半分であるのはなぜ?", "answer": "x + y = cのもとでhの2乗 = xyであり、積xyはx = y = c/2のときに最大となります。するとhの2乗 <= cの2乗/4、よってh <= c/2。最も均等な分割が最も高い高さを生みます。" },
      { "question": "高さが斜辺の半分に等しいとどうなる?", "answer": "その三角形は二等辺直角三角形です。2辺が等しく、鋭角は45度で、高さは斜辺への中線も兼ねます。この有効な境界ケースが最大の面積 K = cの2乗/4 を与えます。" },
      { "question": "2辺を知らなくても面積を計算できる?", "answer": "はい。底辺とその対応する垂線の高さで十分です。辺は面積について何も加えません。斜辺cと高さhを入力すれば、K = ch/2 が直接面積を与えます。" },
      { "question": "斜辺に基づく公式と辺の公式はどう関係する?", "answer": "どちらも同じ面積を計算します。ab/2をch/2に等しくして2倍するとab = chとなり、h = ab/c です。両方を計算することが強力な確認になるのはそのためです。" },
      { "question": "高さと斜辺の2線分の関係は?", "answer": "高さはhの2乗 = xyを満たします。xとyは高さが斜辺から切り取った線分であり、高さはその相乗平均です。2つの小三角形の相似から、x/h = h/y を経て得られます。" },
      { "question": "斜辺と高さから2辺を求められる?", "answer": "はい、入れ替えを除いて求められます。aの2乗 + bの2乗 = cの2乗 と ab = ch から、辺は (cの2乗 +/- c × sqrt(cの2乗 - 4hの2乗)) / 2 で求まります。c = 10、h = 4.8 では辺6と8が得られます。" },
      { "question": "計算機はセンチメートル、メートル、フィートで使える?", "answer": "はい、両方の入力が同じ単位である限り使えます。メートルなら平方メートル、センチメートルなら平方センチメートル、フィートなら平方フィートです。混ざった単位は先に変換してください。" }
    ],
    "relatedHeading": "関連する直角三角形計算機を見る",
    "relatedItems": [
      "直角三角形の面積計算機",
      "角度からの直角三角形の面積計算機",
      "高さからの直角三角形の面積計算機",
      "2辺からの直角三角形の面積計算機",
      "直角三角形の高さ計算機",
      "内接円の半径と周長の半分からの直角三角形の面積計算機"
    ]
  }
};
