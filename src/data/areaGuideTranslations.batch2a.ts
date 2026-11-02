// areaGuideTranslations.batch2a.ts: Area guide (Page 16) translations for pt + bn.
// Built from AREA_TRANSLATION_SCHEMA.md; follows TRANSLATION_PROMPT.md (locked 2026-10-30).
// Formulas, KaTeX markers, variable symbols and degree values are byte-identical to EN.

export const AREA_TRANSLATIONS_BATCH2A = {
  "pt": {
    "tocHeading": "Neste Guia",
    "tocItems": {
      "sec-intro": "O que é uma calculadora de área de triângulo retângulo?",
      "sec-triangle": "Qual é a área de um triângulo retângulo?",
      "sec-legs": "Área de um triângulo retângulo usando seus dois catetos",
      "sec-angle-a": "Encontrar a área de um triângulo retângulo usando o lado b, a hipotenusa c e o ângulo A",
      "sec-angle-b": "Encontrar a área de um triângulo retângulo usando o lado a, a hipotenusa c e o ângulo B",
      "sec-inradius": "Encontrar a área de um triângulo retângulo usando o inraio e o semiperímetro",
      "sec-altitude": "Encontrar a área de um triângulo retângulo usando a hipotenusa e a altura",
      "sec-choose": "Qual fórmula de área do triângulo retângulo você deve usar?",
      "sec-howto": "Como usar a calculadora de área de triângulo retângulo",
      "sec-applications": "Aplicações da vida real dos cálculos de área de triângulo retângulo",
      "sec-verify": "Como verificar a área de um triângulo retângulo",
      "sec-mistakes": "Erros comuns ao calcular a área de um triângulo retângulo",
      "sec-validate": "Como verificar se o resultado da sua área é válido",
      "sec-related": "Explore calculadoras de triângulo retângulo relacionadas",
      "sec-faq": "Perguntas frequentes",
      "sec-conclusion": "Conclusão"
    },
    "sections": {
      "sec-intro": {
        "h2": "O que é uma calculadora de área de triângulo retângulo?",
        "blocks": [
          { "kind": "p", "text": "Uma calculadora de área de triângulo retângulo encontra a área bidimensional delimitada pelos três lados de um triângulo retângulo. Por exemplo, um triângulo retângulo com catetos [[a=3\\text{ m}]] e [[b=4\\text{ m}]] tem área [[K=\\frac{3\\times4}{2}=6\\text{ m}^2]]: o triângulo ocupa seis metros quadrados de superfície. A área é medida em unidades quadradas porque conta espaço plano, não comprimento." },
          { "kind": "p", "text": "Os catetos perpendiculares simplificam enormemente o cálculo. Como os dois catetos se encontram a 90 graus, um cateto pode servir de base e o outro de altura, de modo que a área é apenas metade do produto deles. Essa simplicidade é um dos motivos pelos quais a fórmula dos catetos é o primeiro método que a maioria dos estudantes aprende." },
          { "kind": "p", "text": "Existem vários métodos para a mesma área porque problemas reais oferecem medidas diferentes. Um carpinteiro mede os dois catetos de um painel; um agrimensor mede uma hipotenusa e um ângulo; um geômetra que trabalha com um círculo inscrito conhece o inraio e o semiperímetro. Cada método transforma seu próprio conjunto de valores conhecidos na mesma área. A calculadora desta página oferece cinco modos correspondentes a essas situações: Área a partir dos catetos, Variação de área (Ângulo A), Variação de área (Ângulo B), Área a partir do semiperímetro e Variação de área (Altura). O melhor método geralmente é aquele que usa as medidas que você já tem, sem forçar conversões extras primeiro." }
        ]
      },
      "sec-triangle": {
        "h2": "Qual é a área de um triângulo retângulo?",
        "blocks": [
          { "kind": "p", "text": "Este guia usa uma notação consistente em todo o texto: [[A]] e [[B]] são os dois ângulos agudos, [[C=90^\\circ]] é o ângulo reto, o lado [[a]] está oposto ao ângulo [[A]], o lado [[b]] está oposto ao ângulo [[B]], o lado [[c]] é a hipotenusa oposta ao ângulo [[C]], [[h]] é a altura perpendicular do vértice [[C]] até a hipotenusa, [[r]] é o inraio, [[s]] é o semiperímetro e [[K]] é a área." },
          { "kind": "h3", "text": "O que é um triângulo retângulo?" },
          { "kind": "p", "text": "Um triângulo retângulo tem um ângulo de exatamente 90 graus. Seus dois catetos se encontram no ângulo reto, e a hipotenusa está oposta a esse ângulo. A hipotenusa é sempre o lado mais longo, e os outros dois ângulos são agudos: como os três ângulos somam 180 graus, [[A+B=90^\\circ]]. Os dois catetos são perpendiculares, que é a propriedade que torna a fórmula da área tão direta." },
          { "kind": "h3", "text": "O que significa área?" },
          { "kind": "p", "text": "Área mede o espaço bidimensional delimitado pelos três lados do triângulo. Difere do perímetro, que mede o comprimento total do contorno, do comprimento de um lado, que mede uma dimensão, e do volume, que mede o espaço tridimensional. Um pedaço triangular de papel tem área igual à quantidade de papel que cobre; uma seção triangular de jardim tem área igual ao terreno que ocupa. Ambas são expressas em unidades quadradas, como metros quadrados, porque a área conta os quadrados unitários que cabem dentro da forma." },
          { "kind": "h3", "text": "Por que a área é dividida por dois?" },
          { "kind": "p", "text": "Dois triângulos retângulos idênticos podem ser combinados ao longo de suas hipotenusas para formar um retângulo. Se cada triângulo tem catetos perpendiculares [[a]] e [[b]], o retângulo tem área [[ab]]. Um triângulo ocupa exatamente metade desse retângulo, então [[[\\boxed{K=\\frac{ab}{2}}]]]. A divisão por dois não é um fator de ajuste: é a consequência geométrica de um triângulo ser metade de um retângulo, e ela aparece em cada método de área desta página de uma forma ou outra." },
          { "kind": "h3", "text": "Por que o mesmo triângulo pode ter cinco fórmulas de área?" },
          { "kind": "p", "text": "A área do triângulo não muda quando um método de medição diferente é usado. Os métodos simplesmente partem de valores conhecidos diferentes. Dois catetos dão a fórmula mais simples. Um cateto, a hipotenusa e o ângulo agudo incluído permitem uma fórmula baseada em seno. Inraio e semiperímetro fornecem uma relação geométrica alternativa. Hipotenusa e altura perpendicular usam a regra geral de base e altura. Todos os cinco métodos devem produzir a mesma área quando as entradas descrevem o mesmo triângulo válido, e essa concordância é a verificação mais forte disponível: dois métodos, um triângulo, uma resposta." }
        ],
        "imgAlt": "Anatomia de um triângulo retângulo: catetos a e b, hipotenusa c, ângulo reto C, altura h até a hipotenusa, fórmula K = ab/2",
        "figcaption": "Anatomia de um triângulo retângulo: C é o ângulo reto, a e b são os catetos, c é a hipotenusa e h é a altura até a hipotenusa."
      },
      "sec-legs": {
        "h2": "Área de um triângulo retângulo usando seus dois catetos",
        "blocks": [
          { "kind": "p", "text": "A fórmula dos catetos é o ponto de partida para a área de um triângulo retângulo: [[[\\boxed{K=\\frac{ab}{2}}]]]. Ela precisa apenas dos dois lados perpendiculares, e tudo o mais nesta página pode ser visto como uma variação que recupera essa mesma quantidade a partir de entradas diferentes." },
          { "kind": "h3", "text": "Quando você deve usar a fórmula dos catetos?" },
          { "kind": "p", "text": "Use este método sempre que os dois lados perpendiculares forem conhecidos. Nenhum cálculo de ângulo, hipotenusa, inraio ou altura é necessário primeiro. A medição direta dos dois catetos é comum em carpintaria, azulejamento e problemas de sala de aula, por isso o modo Área a partir dos catetos é a escolha padrão para a maioria dos cálculos do dia a dia." },
          { "kind": "h3", "text": "Como a fórmula funciona" },
          { "kind": "p", "text": "Os dois catetos formam a base e a altura perpendicular do triângulo. A fórmula geral da área de um triângulo é [[K=\\frac{\\text{base}\\times\\text{height}}{2}]]; como os catetos são perpendiculares, base e altura podem ser tomados diretamente como [[a]] e [[b]], resultando em [[K=ab/2]]. Nenhuma trigonometria está envolvida, e nenhum lado extra precisa ser encontrado primeiro." },
          { "kind": "h3", "text": "Exemplo totalmente resolvido: um triângulo 3-4-5" },
          { "kind": "p", "text": "Dados [[a=3\\text{ m}]] e [[b=4\\text{ m}]]. Passo 1: escreva a fórmula [[K=ab/2]]. Passo 2: substitua os valores, [[K=(3\\times4)/2]]. Passo 3: multiplique, [[K=12/2]]. Passo 4: divida por dois, [[[\\boxed{K=6\\text{ m}^2}]]]. A resposta é seis metros quadrados, não seis metros: a unidade carrega o significado da quantidade." },
          { "kind": "h3", "text": "Os dois catetos podem ser trocados?" },
          { "kind": "p", "text": "Sim. A multiplicação é comutativa, então [[ab=ba]] e, portanto, [[ab/2=ba/2]]. A área não muda se os dois catetos forem inseridos na ordem oposta, desde que os campos da calculadora correspondam aos comprimentos corretos dos catetos. Essa simetria vale apenas para os catetos: trocar um cateto pela hipotenusa quebraria a fórmula." },
          { "kind": "h3", "text": "E se os catetos tiverem valores decimais?" },
          { "kind": "p", "text": "Medidas decimais funcionam na mesma fórmula. Com [[a=3.5\\text{ cm}]] e [[b=9.2\\text{ cm}]]: [[K=(3.5\\times9.2)/2]], [[K=32.2/2]], [[[\\boxed{K=16.1\\text{ cm}^2}]]]. A aritmética é idêntica; apenas a precisão das entradas muda, então mantenha dígitos suficientes e arredonde no final." },
          { "kind": "h3", "text": "E se um cateto for desconhecido?" },
          { "kind": "p", "text": "Um cateto ausente às vezes pode ser encontrado primeiro usando o teorema de Pitágoras ou um ângulo conhecido, e a fórmula dos catetos aplicada depois. Observe que o próprio modo dos catetos precisa de ambos os catetos: ele não recupera um lado ausente automaticamente. Se apenas um cateto e a hipotenusa forem conhecidos, o cálculo do cateto ausente é uma etapa separada antes que este modo possa ser usado." }
        ]
      },
      "sec-angle-a": {
        "h2": "Encontrar a área de um triângulo retângulo usando o lado b, a hipotenusa c e o ângulo A",
        "blocks": [
          { "kind": "p", "text": "Este método é útil quando o lado [[b]], a hipotenusa [[c]] e o ângulo agudo [[A]] são conhecidos: [[[\\boxed{K=\\frac{bc\\sin(A)}{2}}]]]. É o modo Variação de área (Ângulo A) da calculadora." },
          { "kind": "h3", "text": "Por que esta fórmula usa seno?" },
          { "kind": "p", "text": "A fórmula geral da área para dois lados e o ângulo incluído entre eles é [[K=\\frac12 xy\\sin(\\theta)]]. O ângulo [[A]] está entre os lados [[b]] e [[c]], então substituir [[x=b]], [[y=c]], [[\\theta=A]] dá [[K=\\frac12 bc\\sin(A)]]. O seno responde pela componente perpendicular de um lado: apenas a parte do lado [[c]] que fica perpendicular ao lado [[b]] contribui com a altura, e essa parte perpendicular é [[c\\sin(A)]]." },
          { "kind": "h3", "text": "Exemplo totalmente resolvido: um triângulo 3-4-5" },
          { "kind": "p", "text": "Dados [[b=4\\text{ m}]], [[c=5\\text{ m}]] e [[A\\approx36.87^\\circ]]. Como [[\\sin(36.87^\\circ)\\approx0.6]], substitua: [[K=(4\\times5\\times0.6)/2]], [[K=12/2]], [[[\\boxed{K=6\\text{ m}^2}]]]. Isso concorda com a fórmula dos catetos porque 0,6 é exatamente a razão [[a/c=3/5]]: a forma com seno é a forma dos catetos disfarçada, com [[c\\sin(A)]] desempenhando o papel do outro cateto." },
          { "kind": "h3", "text": "O que acontece se o ângulo mudar?" },
          { "kind": "p", "text": "O fator seno muda a área quando os dois comprimentos de lado e o ângulo incluído variam dentro de um triângulo válido. Não imagine um ângulo mudando enquanto cada comprimento de lado permanece fixo: em um triângulo real, os lados e os ângulos estão ligados, então mudar o ângulo remodela o triângulo e move a área com ele. O ângulo incluído é essencial para esta fórmula justamente porque codifica o quanto o triângulo está aberto ou fechado." },
          { "kind": "h3", "text": "Erros comuns no modo Ângulo A" },
          { "kind": "p", "text": "Cinco erros se repetem neste modo. Emparelhar o ângulo [[A]] com o lado errado é o mais frequente: esta fórmula precisa do lado [[b]], não do lado [[a]], porque [[b]] e [[c]] são os lados que delimitam o ângulo [[A]]. Inserir o ângulo na unidade errada quebra o valor do seno: esta calculadora espera graus, então 36.87 graus não deve ser inserido como 0.6435 radianos. Esquecer de dividir por dois dobra a resposta. E inserir um ângulo reto ou um ângulo não agudo no campo de ângulo agudo não descreve nenhuma entrada válida para este modo; o ângulo deve ficar estritamente entre 0 e 90 graus." }
        ]
      },
      "sec-angle-b": {
        "h2": "Encontrar a área de um triângulo retângulo usando o lado a, a hipotenusa c e o ângulo B",
        "blocks": [
          { "kind": "p", "text": "Este modo usa o outro ângulo agudo e seus dois lados adjacentes: [[[\\boxed{K=\\frac{ac\\sin(B)}{2}}]]]. É o modo Variação de área (Ângulo B) da calculadora." },
          { "kind": "h3", "text": "Por que esta fórmula funciona?" },
          { "kind": "p", "text": "Os lados [[a]] e [[c]] delimitam o ângulo [[B]]. Partindo da fórmula geral [[K=\\frac12 xy\\sin(\\theta)]] e substituindo [[x=a]], [[y=c]], [[\\theta=B]] obtém-se [[K=\\frac12 ac\\sin(B)]]. A estrutura é idêntica à fórmula do Ângulo A; apenas os rótulos se movem, porque a geometria dos dois ângulos agudos se espelha." },
          { "kind": "h3", "text": "Exemplo totalmente resolvido: o mesmo triângulo 3-4-5" },
          { "kind": "p", "text": "Dados [[a=3\\text{ m}]], [[c=5\\text{ m}]] e [[B\\approx53.13^\\circ]]. Como [[\\sin(53.13^\\circ)\\approx0.8]], calcule: [[K=(3\\times5\\times0.8)/2]], [[K=12/2]], [[[\\boxed{K=6\\text{ m}^2}]]]. O resultado coincide com o método dos catetos e o método do Ângulo A, como deve ser: os três descrevem o mesmo triângulo." },
          { "kind": "h3", "text": "Como os ângulos A e B estão relacionados?" },
          { "kind": "p", "text": "Os dois ângulos agudos são complementares: [[[\\boxed{A+B=90^\\circ}]]]. Isso dá as identidades [[\\sin(A)=\\cos(B)]] e [[\\sin(B)=\\cos(A)]]. No triângulo 3-4-5, [[\\sin(A)=0.6=\\cos(B)]] e [[\\sin(B)=0.8=\\cos(A)]]. Essas relações explicam por que ambos os modos baseados em ângulo calculam a mesma área quando suas entradas são consistentes: o seno de um modo é o cosseno do outro modo, e a geometria do triângulo não muda qualquer que seja o ângulo agudo de partida." },
          { "kind": "h3", "text": "Erros comuns no modo Ângulo B" },
          { "kind": "p", "text": "Os erros espelhados aparecem aqui: usar o lado [[b]] em vez do lado [[a]], emparelhar o ângulo [[B]] com o lado errado e confundir os dois ângulos agudos entre si. Esquecer a função seno ou esquecer de dividir por dois são os mesmos deslizes aritméticos do modo Ângulo A. Por fim, um ângulo que não corresponde ao triângulo medido, por exemplo inserir 36.87 graus onde pertencem 53.13 graus, produz silenciosamente uma área errada, mas de aparência plausível, então sempre verifique se o ângulo corresponde ao par de lados." }
        ]
      },
      "sec-inradius": {
        "h2": "Encontrar a área de um triângulo retângulo usando o inraio e o semiperímetro",
        "blocks": [
          { "kind": "p", "text": "Este método precisa de apenas dois números, o inraio [[r]] e o semiperímetro [[s]]: [[[\\boxed{K=rs}]]]. O inraio é o raio do círculo inscrito dentro do triângulo, o círculo que toca os três lados. O semiperímetro é metade do perímetro do triângulo: [[[\\boxed{s=\\frac{a+b+c}{2}}]]]. É o modo Área a partir do semiperímetro da calculadora." },
          { "kind": "h3", "text": "Por que a área é igual ao inraio vezes o semiperímetro?" },
          { "kind": "p", "text": "Ligue o incentro, o centro do círculo inscrito, aos três vértices. Isso divide o triângulo em três triângulos menores. Cada triângulo menor tem a mesma altura perpendicular [[r]], porque o inraio é a distância perpendicular do incentro a cada lado. Somar suas áreas dá [[K=\\frac12 ar+\\frac12 br+\\frac12 cr]]. Fatorando [[r/2]]: [[K=\\frac12 r(a+b+c)]]. Como [[s=(a+b+c)/2]], segue que [[[\\boxed{K=rs}]]]. Essa relação vale para qualquer triângulo válido, não apenas um triângulo retângulo, desde que o inraio e o semiperímetro corretos sejam conhecidos." },
          { "kind": "h3", "text": "Encontrando o inraio de um triângulo retângulo" },
          { "kind": "p", "text": "Para um triângulo retângulo existe um atalho conveniente: [[[\\boxed{r=\\frac{a+b-c}{2}}]]]. Trate-o como um atalho de triângulo retângulo, não como a fórmula geral do inraio: para um triângulo geral, o inraio vem de [[r=K/s]], que é circular se você está tentando encontrar a área. O atalho funciona porque os dois comprimentos de tangente do vértice do ângulo reto são iguais e a álgebra se simplifica bem para o caso de 90 graus." },
          { "kind": "h3", "text": "Exemplo totalmente resolvido: um triângulo 3-4-5" },
          { "kind": "p", "text": "Dados [[a=3]], [[b=4]], [[c=5]]. Primeiro o semiperímetro: [[s=(3+4+5)/2]], [[[\\boxed{s=6}]]]. Depois o inraio: [[r=(3+4-5)/2]], [[[\\boxed{r=1}]]]. A área é [[K=rs]], [[K=1\\times6]], [[[\\boxed{K=6\\text{ square units}}]]]. A resposta coincide com a fórmula dos catetos, confirmando que a visão do círculo inscrito e a visão dos catetos descrevem o mesmo triângulo." },
          { "kind": "h3", "text": "Exemplo totalmente resolvido: um triângulo 5-12-13" },
          { "kind": "p", "text": "Dados [[a=5]], [[b=12]], [[c=13]]. Semiperímetro: [[s=(5+12+13)/2=15]]. Inraio: [[r=(5+12-13)/2=2]]. Área: [[K=2\\times15]], [[[\\boxed{K=30\\text{ square units}}]]]. Verifique com a fórmula dos catetos: [[K=(5\\times12)/2=30]]. Ambos os métodos concordam, que é o resultado esperado sempre que as medidas dos lados são consistentes." },
          { "kind": "h3", "text": "Erros comuns" },
          { "kind": "p", "text": "Confundir o inraio com o circunraio é o erro característico: o inraio toca os lados por dentro, enquanto o circunraio alcança os vértices por fora, e são números diferentes. Usar o perímetro total em vez do semiperímetro dobra a resposta. Aplicar o atalho de inraio de triângulo retângulo [[r=(a+b-c)/2]] a um triângulo não retângulo produz um valor sem sentido. Esquecer que o produto [[rs]] tem unidades quadradas, e alimentar medidas de lado inconsistentes nos cálculos de [[r]] e [[s]], completam as falhas comuns." }
        ]
      },
      "sec-altitude": {
        "h2": "Encontrar a área de um triângulo retângulo usando a hipotenusa e a altura",
        "blocks": [
          { "kind": "p", "text": "Este método usa a hipotenusa [[c]] como base e a altura perpendicular [[h]] como a altura: [[[\\boxed{K=\\frac{ch}{2}}]]]. É o modo Variação de área (Altura) da calculadora." },
          { "kind": "h3", "text": "O que é a altura?" },
          { "kind": "p", "text": "Uma altura é uma linha perpendicular traçada de um vértice até o lado oposto. Neste modo, a altura começa no vértice do ângulo reto [[C]] e encontra a hipotenusa a 90 graus. Ela não é igual a nenhum dos catetos [[a]] ou [[b]]: os catetos estão ao longo das arestas do triângulo, enquanto a altura desce para o interior e pousa sobre a hipotenusa. O marcador de ângulo reto onde [[h]] encontra [[c]] é a garantia visual de que a condição de perpendicularidade é atendida." },
          { "kind": "h3", "text": "Por que a fórmula funciona?" },
          { "kind": "p", "text": "É a fórmula geral de base e altura com uma escolha particular de base. Parta de [[K=\\frac12\\times\\text{base}\\times\\text{perpendicular height}]]. Escolha a hipotenusa como base, [[\\text{base}=c]], e a altura perpendicular como a altura, [[\\text{height}=h]]. Portanto [[K=ch/2]]. Nada nesta dedução é específico de triângulos retângulos: a área de qualquer triângulo pode ser escrita assim, mas a fórmula dos catetos do triângulo retângulo é simplesmente mais rápida quando os catetos são conhecidos." },
          { "kind": "h3", "text": "Exemplo totalmente resolvido: um triângulo 6-8-10" },
          { "kind": "p", "text": "Dados [[c=10\\text{ m}]] e [[h=4.8\\text{ m}]]. Calcule: [[K=(10\\times4.8)/2]], [[K=48/2]], [[[\\boxed{K=24\\text{ m}^2}]]]. Esta é a mesma área de um triângulo retângulo cujos catetos medem 6 m e 8 m, já que [[(6\\times8)/2=24]]. Duas descrições diferentes, uma área." },
          { "kind": "h3", "text": "Como a altura pode ser calculada?" },
          { "kind": "p", "text": "Quando ambos os catetos e a hipotenusa são conhecidos, a altura decorre de igualar as duas fórmulas de área: [[ab/2=ch/2]], então [[[\\boxed{h=\\frac{ab}{c}}]]]. Para o triângulo 6-8-10: [[h=(6\\times8)/10=4.8\\text{ m}]]. A altura é menor que a hipotenusa, como deve ser: a perpendicular é o caminho mais curto do vértice até a linha. Observe que o modo de altura não calcula uma altura ausente por conta própria; a altura deve ser conhecida ou derivada primeiro." }
        ]
      },
      "sec-choose": {
        "h2": "Qual fórmula de área do triângulo retângulo você deve usar?",
        "blocks": [
          { "kind": "p", "text": "Cinco métodos, uma área. A comparação abaixo mapeia cada conjunto de medidas conhecidas para sua fórmula e modo da calculadora. Escolha a linha que corresponde aos números que você já tem em mãos." },
          { "kind": "h3", "text": "Por que a fórmula dos catetos costuma ser a mais simples" },
          { "kind": "p", "text": "A fórmula dos catetos precisa de apenas duas medidas e nenhuma trigonometria. Multiplique, divida por dois, pronto. Sempre que os dois lados perpendiculares estiverem disponíveis, todo outro método é um caminho mais longo para o mesmo número." },
          { "kind": "h3", "text": "Quando a fórmula do seno é útil" },
          { "kind": "p", "text": "Um método baseado em ângulo ganha seu lugar quando as medidas disponíveis incluem um ângulo agudo, um cateto e a hipotenusa, como ocorre em linhas de visada de agrimensura ou triângulos de navegação. Se o ângulo não fosse conhecido, você primeiro teria de recuperar o cateto ausente antes que a fórmula dos catetos pudesse ser usada; a forma com seno pula esse desvio." },
          { "kind": "h3", "text": "Quando o método do semiperímetro é útil" },
          { "kind": "p", "text": "A fórmula de inraio e semiperímetro se adapta a problemas de geometria que já envolvem um círculo inscrito, ou situações em que [[r]] e [[s]] são conhecidos de etapas anteriores. Também é uma excelente verificação cruzada independente: como não compartilha nenhuma aritmética com a fórmula dos catetos, a concordância entre as duas sugere fortemente que ambas estão certas." },
          { "kind": "h3", "text": "Quando a fórmula da altura é útil" },
          { "kind": "p", "text": "O método da altura é a escolha natural quando a hipotenusa e sua altura perpendicular são as quantidades conhecidas, o que acontece em problemas de decomposição em que um triângulo é dividido ao longo de sua altura. Como a fórmula dos catetos, é um cálculo simples de base e altura sem trigonometria." }
        ],
        "table": {
          "headers": ["Medidas conhecidas", "Método recomendado", "Fórmula"],
          "rows": [
            ["Ambos os catetos perpendiculares [[a]], [[b]]", "Área a partir dos catetos", "[[K=ab/2]]"],
            ["Cateto [[b]], hipotenusa [[c]], ângulo [[A]]", "Variação de área (Ângulo A)", "[[K=bc\\sin(A)/2]]"],
            ["Cateto [[a]], hipotenusa [[c]], ângulo [[B]]", "Variação de área (Ângulo B)", "[[K=ac\\sin(B)/2]]"],
            ["Inraio [[r]], semiperímetro [[s]]", "Área a partir do semiperímetro", "[[K=rs]]"],
            ["Hipotenusa [[c]], altura perpendicular [[h]]", "Variação de área (Altura)", "[[K=ch/2]]"]
          ]
        },
        "imgAlt": "Cinco painéis mostrando as fórmulas de área K=ab/2, K=bc sin(A)/2, K=ac sin(B)/2, K=rs e K=ch/2",
        "figcaption": "As cinco fórmulas de área e as medidas que cada uma precisa."
      },
      "sec-howto": {
        "h2": "Como usar a calculadora de área de triângulo retângulo",
        "blocks": [
          { "kind": "p", "text": "Siga estas etapas para qualquer um dos cinco modos. Escolher o modo correto importa mais do que qualquer outra coisa: o modo decide qual fórmula é executada, então uma fórmula correta com o modo errado ainda responde à pergunta errada." },
          { "kind": "h3", "text": "Passo a passo completo: os cinco modos em um triângulo 3-4-5" },
          { "kind": "p", "text": "Dados [[a=3]], [[b=4]], [[c=5]], com [[A\\approx36.87^\\circ]], [[B\\approx53.13^\\circ]], [[r=1]], [[s=6]] e [[h=2.4]], aqui está o que cada modo precisa e retorna. Cada modo retorna [[[\\boxed{K=6\\text{ square units}}]]]." }
        ],
        "steps": [
          "<strong>Identifique as medidas já conhecidas.</strong> Liste quais dos catetos, hipotenusa, ângulos, inraio, semiperímetro ou altura você realmente tem.",
          "<strong>Selecione o modo da calculadora correspondente a essas medidas.</strong> Área a partir dos catetos, Variação de área (Ângulo A), Variação de área (Ângulo B), Área a partir do semiperímetro ou Variação de área (Altura).",
          "<strong>Leia os rótulos dos campos de entrada obrigatórios.</strong> Cada modo mostra apenas os campos de que sua fórmula precisa.",
          "<strong>Identifique os catetos, a hipotenusa, o ângulo, o inraio, o semiperímetro ou a altura conforme apropriado.</strong> Associe cada medida conhecida ao seu rótulo, usando a notação deste guia.",
          "<strong>Insira a primeira medida obrigatória.</strong> Por exemplo, \"Leg a\" no modo dos catetos.",
          "<strong>Insira as medidas restantes.</strong> Mantenha os valores nos campos que seus rótulos descrevem.",
          "<strong>Selecione unidades compatíveis usando os seletores de unidade disponíveis.</strong> Todas as entradas de comprimento devem compartilhar um sistema de unidades antes de serem multiplicadas.",
          "<strong>Para modos baseados em ângulo, insira o ângulo agudo correto.</strong> Esta calculadora espera ângulos em graus. Insira o ângulo [[A]] no modo Ângulo A e o ângulo [[B]] no modo Ângulo B, nunca o ângulo reto.",
          "<strong>Verifique se todas as entradas são positivas e descrevem um triângulo válido.</strong> Os comprimentos devem ser positivos, e a hipotenusa deve exceder cada cateto.",
          "<strong>Clique em Calcular Area.</strong> O botão executa a fórmula do modo selecionado.",
          "<strong>Revise o resultado da área e os passos da solução.</strong> A calculadora mostra a fórmula, a substituição e a área final em unidades quadradas.",
          "<strong>Use a visualização ao vivo do triângulo para verificar os rótulos.</strong> Confirme se os rótulos de lados e ângulos do diagrama correspondem às suas medidas pretendidas.",
          "<strong>Use Redefinir ao iniciar um novo cálculo.</strong> O botão Redefinir limpa todos os campos para que o próximo cálculo comece do zero."
        ],
        "closingParagraphs": [
          "<strong>Área a partir dos catetos.</strong> Insira \"Leg a\" = 3 e \"Leg b\" = 4. Fórmula: [[K=ab/2]]. Substituição: [[K=(3\\times4)/2]]. Resultado: 6 unidades quadradas.",
          "<strong>Variação de área (Ângulo A).</strong> Insira \"Leg b\" = 4, \"Hypotenuse c\" = 5, \"Angle A\" = 36.87. Fórmula: [[K=bc\\sin(A)/2]]. Substituição: [[K=(4\\times5\\times0.6)/2]]. Resultado: 6 unidades quadradas.",
          "<strong>Variação de área (Ângulo B).</strong> Insira \"Leg a\" = 3, \"Hypotenuse c\" = 5, \"Angle B\" = 53.13. Fórmula: [[K=ac\\sin(B)/2]]. Substituição: [[K=(3\\times5\\times0.8)/2]]. Resultado: 6 unidades quadradas.",
          "<strong>Área a partir do semiperímetro.</strong> Insira \"Inradius r\" = 1 e \"Semiperimeter s\" = 6. Fórmula: [[K=rs]]. Substituição: [[K=1\\times6]]. Resultado: 6 unidades quadradas.",
          "<strong>Variação de área (Altura).</strong> Insira \"Hypotenuse c\" = 5 e \"Altitude h\" = 2.4. Fórmula: [[K=ch/2]]. Substituição: [[K=(5\\times2.4)/2]]. Resultado: 6 unidades quadradas.",
          "Cada modo usa um conjunto diferente de valores conhecidos, e nenhum deles exige os mesmos campos de entrada. A resposta compartilhada é o ponto: cinco descrições, um triângulo, uma área."
        ]
      },
      "sec-applications": {
        "h2": "Aplicações da vida real dos cálculos de área de triângulo retângulo",
        "blocks": [
          { "kind": "p", "text": "Cada exemplo nomeia a situação, as medidas conhecidas, o modo da calculadora que se encaixa, por que esse modo se encaixa, a fórmula, a substituição passo a passo, a resposta final em unidades quadradas, uma interpretação em linguagem simples, uma ideia de verificação quando útil e as suposições por trás do modelo de triângulo." },
          { "kind": "h3", "text": "Exemplo 1: Calculando a área de um jardim triangular" },
          { "kind": "p", "text": "Um jardim contém uma seção de plantio em triângulo retângulo com catetos perpendiculares de 6 m e 8 m. Escolha Área a partir dos catetos, o encaixe natural quando ambos os catetos são medidos diretamente: [[K=(6\\times8)/2]], [[[\\boxed{K=24\\text{ m}^2}]]]. A seção cobre 24 metros quadrados de superfície de plantio. Isso pressupõe que a seção do jardim seja representada com precisão por um triângulo retângulo com arestas retas." },
          { "kind": "h3", "text": "Exemplo 2: Medindo um painel triangular de compensado" },
          { "kind": "p", "text": "Um carpinteiro corta um painel triangular retângulo com catetos medindo 1.2 m e 0.8 m. Escolha Área a partir dos catetos: [[K=(1.2\\times0.8)/2]], [[K=0.96/2]], [[[\\boxed{K=0.48\\text{ m}^2}]]]. O painel cobre pouco menos de meio metro quadrado, o que ajuda a estimar a cobertura de material. Margens de corte e desperdício de material não estão incluídos nesta área geométrica." },
          { "kind": "h3", "text": "Exemplo 3: Encontrando a área de uma vela triangular" },
          { "kind": "p", "text": "Uma seção de vela triangular tem catetos perpendiculares de 5 m e 12 m. Escolha Área a partir dos catetos: [[K=(5\\times12)/2]], [[[\\boxed{K=30\\text{ m}^2}]]]. A fórmula dá a área plana da seção triangular, útil para estimativas de tecido antes que costuras e curvatura sejam consideradas." },
          { "kind": "h3", "text": "Exemplo 4: Estimando uma seção de terreno em triângulo retângulo" },
          { "kind": "p", "text": "Um levantamento identifica uma seção de terreno em triângulo retângulo com lados perpendiculares de 30 m e 40 m. Escolha Área a partir dos catetos: [[K=(30\\times40)/2]], [[[\\boxed{K=600\\text{ m}^2}]]]. Esta é a área da seção triangular especificada, não necessariamente a área total da propriedade ao redor. Limites reais de terreno podem exigir um levantamento mais detalhado do que um único modelo de triângulo." },
          { "kind": "h3", "text": "Exemplo 5: Calculando a área de uma empena de telhado usando o Ângulo A" },
          { "kind": "p", "text": "Uma seção triangular simplificada de telhado tem [[b=6\\text{ m}]], [[c=10\\text{ m}]] e [[A\\approx53.13^\\circ]]. Escolha Variação de área (Ângulo A), já que um cateto, a hipotenusa e o ângulo incluído são os dados medidos. Com [[\\sin(53.13^\\circ)\\approx0.8]]: [[K=(6\\times10\\times0.8)/2]], [[[\\boxed{K=24\\text{ m}^2}]]]. O resultado é a área da seção transversal triangular. A área total da superfície de um telhado real depende de sua geometria tridimensional e de outras seções do telhado." },
          { "kind": "h3", "text": "Exemplo 6: Encontrando a área de um toldo triangular" },
          { "kind": "p", "text": "Uma seção de toldo em triângulo retângulo tem [[b=4\\text{ m}]], [[c=5\\text{ m}]] e [[A\\approx36.87^\\circ]]. Escolha Variação de área (Ângulo A): [[K=bc\\sin(A)/2]], e com [[\\sin(36.87^\\circ)\\approx0.6]], [[K=(4\\times5\\times0.6)/2]], [[[\\boxed{K=6\\text{ m}^2}]]]. Isso pressupõe que as medidas descrevem um triângulo retângulo plano, o que vale para um toldo retangular tensionado cortado na diagonal." },
          { "kind": "h3", "text": "Exemplo 7: Calculando um painel de suporte triangular usando o Ângulo B" },
          { "kind": "p", "text": "Um painel de suporte tem [[a=3\\text{ m}]], [[c=5\\text{ m}]] e [[B\\approx53.13^\\circ]]. Escolha Variação de área (Ângulo B): [[K=(3\\times5\\times0.8)/2]], [[[\\boxed{K=6\\text{ m}^2}]]]. A fórmula baseada em ângulo encontra a área sem inserir ambos os catetos diretamente, o que ajuda quando o segundo cateto nunca foi medido." },
          { "kind": "h3", "text": "Exemplo 8: Encontrando a área de uma seção de treliça" },
          { "kind": "p", "text": "Uma seção de treliça em triângulo retângulo tem [[a=5\\text{ m}]], [[c=13\\text{ m}]] e [[B\\approx67.38^\\circ]]. Escolha Variação de área (Ângulo B). Como [[\\sin(67.38^\\circ)\\approx12/13]]: [[K=(5\\times13\\times(12/13))/2]], [[[\\boxed{K=30\\text{ m}^2}]]]. Esta é a área geométrica da seção triangular, não um cálculo de capacidade de carga estrutural." },
          { "kind": "h3", "text": "Exemplo 9: Calculando a área a partir do inraio e do semiperímetro" },
          { "kind": "p", "text": "Considere um triângulo retângulo 3-4-5 com [[r=1]] e [[s=6]]. Escolha Área a partir do semiperímetro: [[K=rs]], [[K=1\\times6]], [[[\\boxed{K=6\\text{ square units}}]]]. O inraio e o semiperímetro dão uma rota alternativa que nunca multiplica os dois catetos, mas chega à mesma resposta." },
          { "kind": "h3", "text": "Exemplo 10: Encontrando a área de um terreno triangular 5-12-13" },
          { "kind": "p", "text": "Um terreno em triângulo retângulo tem lados [[a=5]], [[b=12]], [[c=13]]. Escolha Área a partir do semiperímetro. Semiperímetro: [[s=(5+12+13)/2=15]]. Inraio: [[r=(5+12-13)/2=2]]. Área: [[K=2\\times15]], [[[\\boxed{K=30\\text{ square units}}]]]. Verifique com a fórmula dos catetos: [[K=(5\\times12)/2=30]]. Ambos os métodos concordam porque ambos descrevem o mesmo terreno." },
          { "kind": "h3", "text": "Exemplo 11: Estimando a área de um painel triangular a partir da altura" },
          { "kind": "p", "text": "Um painel triangular é representado por um triângulo retângulo cuja hipotenusa mede 10 m e cuja altura perpendicular à hipotenusa é 4.8 m. Escolha Variação de área (Altura): [[K=ch/2]], [[K=(10\\times4.8)/2]], [[[\\boxed{K=24\\text{ m}^2}]]]. A altura deve ser perpendicular à hipotenusa: qualquer outra linha do vértice até a hipotenusa é mais longa e superestimaria a área." },
          { "kind": "h3", "text": "Exemplo 12: Calculando uma seção triangular a partir da hipotenusa e da altura" },
          { "kind": "p", "text": "Uma seção em triângulo retângulo tem uma hipotenusa de 20 m e uma altura perpendicular de 9 m. Escolha Variação de área (Altura): [[K=(20\\times9)/2]], [[[\\boxed{K=90\\text{ m}^2}]]]. Esta é a área do triângulo quando as medidas descrevem o mesmo triângulo retângulo válido, o que ocorre aqui: 9 m está bem abaixo do comprimento da hipotenusa, como uma perpendicular deve estar." },
          { "kind": "h3", "text": "Comparação de exemplos práticos" }
        ],
        "table": {
          "headers": ["Situação", "Valores conhecidos", "Modo da calculadora", "Fórmula", "Área final", "Interpretação"],
          "rows": [
            ["Canteiro de jardim", "Catetos 6 m, 8 m", "Área a partir dos catetos", "[[K=ab/2]]", "24 m²", "Superfície de plantio"],
            ["Painel de compensado", "Catetos 1.2 m, 0.8 m", "Área a partir dos catetos", "[[K=ab/2]]", "0.48 m²", "Cobertura de material"],
            ["Vela", "Catetos 5 m, 12 m", "Área a partir dos catetos", "[[K=ab/2]]", "30 m²", "Área plana de tecido"],
            ["Seção de terreno", "Catetos 30 m, 40 m", "Área a partir dos catetos", "[[K=ab/2]]", "600 m²", "Seção, não toda a propriedade"],
            ["Empena do telhado", "b 6 m, c 10 m, A 53.13°", "Variação de área (Ângulo A)", "[[K=bc\\sin(A)/2]]", "24 m²", "Apenas seção transversal"],
            ["Toldo", "b 4 m, c 5 m, A 36.87°", "Variação de área (Ângulo A)", "[[K=bc\\sin(A)/2]]", "6 m²", "Área plana de tecido"],
            ["Painel de suporte", "a 3 m, c 5 m, B 53.13°", "Variação de área (Ângulo B)", "[[K=ac\\sin(B)/2]]", "6 m²", "Sem necessidade do segundo cateto"],
            ["Seção de treliça", "a 5 m, c 13 m, B 67.38°", "Variação de área (Ângulo B)", "[[K=ac\\sin(B)/2]]", "30 m²", "Geometria, não capacidade de carga"],
            ["Triângulo 3-4-5", "r 1, s 6", "Área a partir do semiperímetro", "[[K=rs]]", "6 unidades quadradas", "Visão da área pelo círculo inscrito"],
            ["Terreno 5-12-13", "r 2, s 15", "Área a partir do semiperímetro", "[[K=rs]]", "30 unidades quadradas", "Confere com a verificação dos catetos"],
            ["Painel triangular", "c 10 m, h 4.8 m", "Variação de área (Altura)", "[[K=ch/2]]", "24 m²", "A altura deve ser perpendicular"],
            ["Seção triangular", "c 20 m, h 9 m", "Variação de área (Altura)", "[[K=ch/2]]", "90 m²", "Triângulo retângulo válido"]
          ]
        },
        "imgAlt": "Quatro painéis: jardim 24 m², empena do telhado 24 m², treliça 30 m² e painel 24 m², cada um com seu triângulo",
        "figcaption": "Quatro cálculos do mundo real: jardim, empena do telhado, treliça e painel, cada um com seu triângulo e área final."
      },
      "sec-verify": {
        "h2": "Como verificar a área de um triângulo retângulo",
        "blocks": [
          { "kind": "p", "text": "Um triângulo 3-4-5, cinco métodos, uma resposta. Dados [[a=3]], [[b=4]], [[c=5]], com [[A\\approx36.87^\\circ]], [[B\\approx53.13^\\circ]], [[r=1]], [[s=6]] e [[h=ab/c=12/5=2.4]]:" },
          { "kind": "p", "text": "<strong>Método 1, catetos:</strong> [[K=(3\\times4)/2=6]]. <strong>Método 2, Ângulo A:</strong> [[K=(4\\times5\\times0.6)/2=6]]. <strong>Método 3, Ângulo B:</strong> [[K=(3\\times5\\times0.8)/2=6]]. <strong>Método 4, inraio e semiperímetro:</strong> [[K=1\\times6=6]]. <strong>Método 5, hipotenusa e altura:</strong> [[K=(5\\times2.4)/2=6]]." },
          { "kind": "p", "text": "Estas são cinco rotas matemáticas para a mesma quantidade geométrica. A área do triângulo não depende de qual fórmula correta é usada; depende da geometria real do triângulo. Sempre que dois métodos independentes concordarem no seu triângulo, você pode confiar no número." }
        ],
        "imgAlt": "Triângulo 3-4-5 com cinco painéis: catetos, ângulo A, ângulo B, inraio e semiperímetro, altura, todos dando área 6",
        "figcaption": "Entradas diferentes, fórmulas diferentes, a mesma área do triângulo."
      },
      "sec-mistakes": {
        "h2": "Erros comuns ao calcular a área de um triângulo retângulo",
        "blocks": [
          { "kind": "p", "text": "Erros de área raramente são falhas aritméticas. São falhas de rotulagem, confusões de fórmula e deslizes de unidade. Os dezoito abaixo cobrem quase todas as respostas erradas que a calculadora desta página pode produzir." },
          { "kind": "h3", "text": "1. Esquecer de dividir por dois" },
          { "kind": "p", "text": "Multiplicar os catetos sem dividir por dois dá a área do retângulo, não a do triângulo. Com catetos 3 e 4, [[3\\times4=12]] está errado; [[(3\\times4)/2=6]] está certo. Correção: termine todo cálculo de catetos ou base e altura com a divisão por dois." },
          { "kind": "h3", "text": "2. Usar a hipotenusa como um dos catetos perpendiculares" },
          { "kind": "p", "text": "A hipotenusa nunca é um cateto. Inserir c = 5 como cateto com o outro cateto 3 dá [[(5\\times3)/2=7.5]] em vez de 6. Correção: identifique primeiro o lado mais longo e reserve-o para o campo da hipotenusa." },
          { "kind": "h3", "text": "3. Emparelhar o ângulo A com o lado errado" },
          { "kind": "p", "text": "A fórmula do Ângulo A precisa do lado [[b]], o lado que delimita o ângulo [[A]] com a hipotenusa. Inserir o lado [[a]] em vez disso calcula o produto errado. Correção: verifique se o ângulo [[A]] fica entre os lados [[b]] e [[c]] antes de inserir os valores." },
          { "kind": "h3", "text": "4. Emparelhar o ângulo B com o lado errado" },
          { "kind": "p", "text": "O espelho: a fórmula do Ângulo B precisa do lado [[a]], não do lado [[b]]. Correção: confirme se o ângulo [[B]] fica entre os lados [[a]] e [[c]]." },
          { "kind": "h3", "text": "5. Usar o ângulo incluído errado em uma fórmula com seno" },
          { "kind": "p", "text": "Inserir 36.87 graus onde pertencem 53.13 graus, ou vice-versa, produz uma área plausível, mas errada. Correção: combine o ângulo com o par de lados: o Ângulo A vai com [[b]] e [[c]], o Ângulo B com [[a]] e [[c]]." },
          { "kind": "h3", "text": "6. Confundir altura com um cateto" },
          { "kind": "p", "text": "A altura [[h]] desce do vértice do ângulo reto até a hipotenusa; um cateto corre ao longo da aresta do triângulo. Inserir um cateto como altura superestima a altura. Correção: a altura deve pousar sobre a hipotenusa com um marcador de ângulo reto." },
          { "kind": "h3", "text": "7. Usar uma linha que não é perpendicular como altura" },
          { "kind": "p", "text": "Qualquer linha não perpendicular do vértice até a hipotenusa é mais longa que a altura verdadeira, então a área sai grande demais. Correção: verifique a perpendicularidade, por construção ou pela verificação [[h=ab/c]], antes de usar o modo de altura." },
          { "kind": "h3", "text": "8. Confundir inraio com circunraio" },
          { "kind": "p", "text": "O inraio toca os lados por dentro; o circunraio alcança os vértices por fora. Em um triângulo retângulo, o circunraio é [[c/2]], sempre maior que o inraio. Inserir o circunraio na fórmula [[K=rs]] infla a área. Correção: use [[r=(a+b-c)/2]] para o inraio de triângulo retângulo." },
          { "kind": "h3", "text": "9. Usar o perímetro total em vez do semiperímetro" },
          { "kind": "p", "text": "A fórmula é [[K=rs]] com [[s]] o semiperímetro. Inserir o perímetro total 12 em vez de 6 no triângulo 3-4-5 dá 12 em vez de 6. Correção: divida o perímetro por dois antes de multiplicar por [[r]]." },
          { "kind": "h3", "text": "10. Misturar unidades de medida incompatíveis" },
          { "kind": "p", "text": "Catetos de 3 metros e 40 centímetros não são 3 e 40 em uma fórmula. Correção: converta cada entrada para uma unidade, por exemplo 3 m e 0.4 m, antes de calcular." },
          { "kind": "h3", "text": "11. Informar metros quadrados como metros" },
          { "kind": "p", "text": "Uma área de 6 m² não é 6 m. A unidade quadrada faz parte do significado da resposta: diz quanta superfície, não quanto comprimento. Correção: sempre escreva a unidade quadrada junto ao número." },
          { "kind": "h3", "text": "12. Arredondar o valor do seno cedo demais" },
          { "kind": "p", "text": "Usar 0.6 para o seno quando o valor verdadeiro é 0.6000 é inofensivo, mas arredondar 0.9231 para 0.9 no meio do cálculo desloca o resultado. Correção: mantenha a precisão total em cada etapa e arredonde apenas a resposta final." },
          { "kind": "h3", "text": "13. Inserir um ângulo reto ou ângulo inválido em um campo de ângulo agudo" },
          { "kind": "p", "text": "Os modos de ângulo esperam um ângulo agudo entre 0 e 90 graus. Inserir 90 graus ou um valor negativo não descreve nenhuma entrada válida para esses modos. Correção: insira o ângulo agudo que o triângulo realmente tem, em graus." },
          { "kind": "h3", "text": "14. Supor que todos os cinco modos exigem as mesmas medidas" },
          { "kind": "p", "text": "Cada modo pede um conjunto diferente de entradas: o modo dos catetos precisa de dois catetos, o modo do Ângulo A precisa de um cateto, da hipotenusa e de um ângulo, e o modo do semiperímetro precisa de um inraio e de um semiperímetro. Correção: leia os rótulos dos campos do modo que você selecionou." },
          { "kind": "h3", "text": "15. Supor que um perímetro maior sempre significa uma área proporcionalmente maior" },
          { "kind": "p", "text": "Perímetro e área escalam de forma diferente: dobrar todos os lados quadruplica a área. Um triângulo com perímetro maior pode até ter uma área menor se for longo e fino. Correção: compare áreas com fórmulas de área, nunca com perímetros." },
          { "kind": "h3", "text": "16. Esquecer que a mesma área pode ser calculada de várias maneiras" },
          { "kind": "p", "text": "Tratar cada método como um fato separado perde a verificação embutida: se dois métodos discordarem, algo está errado com as entradas ou a escolha do modo. Correção: execute um segundo método e investigue qualquer divergência." },
          { "kind": "h3", "text": "17. Inserir comprimentos de lado que não podem descrever o triângulo pretendido" },
          { "kind": "p", "text": "Lados que falham na verificação pitagórica, como 2, 3 e 10, não descrevem nenhum triângulo retângulo. Correção: verifique [[a^2+b^2=c^2]] antes de confiar em qualquer área construída a partir desses lados." },
          { "kind": "h3", "text": "18. Usar o atalho de inraio de triângulo retângulo para um triângulo não retângulo" },
          { "kind": "p", "text": "A fórmula [[r=(a+b-c)/2]] é derivada da geometria de 90 graus. Aplicá-la a um triângulo agudo ou obtuso produz um inraio sem sentido. Correção: use este atalho apenas quando o triângulo estiver confirmado como retângulo." },
          { "kind": "h3", "text": "Errado versus correto: um exemplo concreto" },
          { "kind": "p", "text": "Dados [[a=3]] e [[b=4]], um cálculo incorreto pula a divisão por dois: [[K=3\\times4=12]]. Essa é a área do retângulo 3 por 4 correspondente, não a do triângulo retângulo. O cálculo correto é [[K=(3\\times4)/2=6]]. O triângulo ocupa metade do retângulo, então a divisão por dois é o que transforma uma resposta de retângulo em uma resposta de triângulo." }
        ]
      },
      "sec-validate": {
        "h2": "Como verificar se o resultado da sua área é válido",
        "blocks": [
          { "kind": "p", "text": "Seis verificações pegam a grande maioria dos resultados inválidos antes que saiam da página." },
          { "kind": "h3", "text": "Verificação 1: Medidas positivas" },
          { "kind": "p", "text": "Todos os comprimentos exigidos devem ser positivos: [[a>0]], [[b>0]], [[c>0]]. Para o modo de inraio, [[r>0]] e [[s>0]], e a altura também deve ser positiva. Entradas zero ou negativas não descrevem nenhum triângulo." },
          { "kind": "h3", "text": "Verificação 2: Comprimentos de lado de triângulo válidos" },
          { "kind": "p", "text": "Para um triângulo retângulo, [[a^2+b^2=c^2]] deve valer, e a hipotenusa deve ser mais longa que cada cateto. Se os lados falharem nesta verificação, as entradas são inconsistentes e a área não tem sentido." },
          { "kind": "h3", "text": "Verificação 3: Emparelhamento correto de ângulo e lado" },
          { "kind": "p", "text": "O ângulo [[A]] se emparelha com os lados [[b]] e [[c]] na fórmula de ângulo incluído; o ângulo [[B]] se emparelha com os lados [[a]] e [[c]]. Confirme o emparelhamento antes de aceitar um resultado baseado em ângulo." },
          { "kind": "h3", "text": "Verificação 4: Altura correta" },
          { "kind": "p", "text": "A altura [[h]] deve ser perpendicular à hipotenusa [[c]]. Um teste rápido de sanidade: a altura é sempre mais curta que a hipotenusa e mais curta que cada cateto." },
          { "kind": "h3", "text": "Verificação 5: Unidades de área corretas" },
          { "kind": "p", "text": "Se os comprimentos de entrada estão em metros, a área deve estar em metros quadrados; centímetros dão centímetros quadrados. A unidade da resposta é o quadrado da unidade de entrada, nunca a própria unidade de entrada." },
          { "kind": "h3", "text": "Verificação 6: Verificação cruzada com outro método" },
          { "kind": "p", "text": "Use o triângulo 3-4-5 para comparar a fórmula dos catetos com a fórmula do semiperímetro: [[(3\\times4)/2=6]] e [[1\\times6=6]]. Ambas devem dar 6 unidades quadradas. Pequenas divergências em cálculos baseados em ângulo podem vir de medidas de ângulo arredondadas ou valores trigonométricos arredondados; divergências maiores sinalizam um erro real. Este guia não declara nenhuma tolerância de precisão nem garantia de exatidão para a calculadora: a verificação é sobre consistência, não sobre precisão prometida." }
        ]
      },
      "sec-related": {
        "h2": "Explore calculadoras de triângulo retângulo relacionadas",
        "blocks": []
      },
      "sec-conclusion": {
        "h2": "Um triângulo, cinco métodos, uma área",
        "blocks": [
          { "kind": "p", "text": "Cada método nesta página responde à mesma pergunta a partir de um ponto de partida diferente. Catetos quando você tem ambos os lados perpendiculares, seno quando você tem um ângulo incluído, inraio e semiperímetro quando o círculo inscrito está em vista, altura quando a hipotenusa e sua altura são conhecidas. Combine o modo com suas medidas, insira-as nos campos certos com unidades compatíveis e deixe a calculadora fazer a aritmética. Depois verifique com um segundo método: duas rotas para o mesmo número é o sinal mais seguro de que a geometria está certa." }
        ]
      }
    },
    "faqs": [
      { "question": "Qual é a fórmula da área de um triângulo retângulo?", "answer": "A fórmula padrão é K = ab/2, onde a e b são os dois catetos perpendiculares. Quatro métodos equivalentes cobrem outras medidas conhecidas: K = bc sin(A)/2, K = ac sin(B)/2, K = rs (inraio vezes semiperímetro) e K = ch/2 (hipotenusa vezes altura, dividido por dois)." },
      { "question": "Por que você divide por dois ao calcular a área do triângulo?", "answer": "Dois triângulos retângulos idênticos se unem ao longo de suas hipotenusas para formar um retângulo de área ab. Um triângulo é exatamente metade desse retângulo, então a área é ab/2. A divisão por dois é geométrica, não arbitrária, e aparece em cada método de área desta página." },
      { "question": "Posso calcular a área sem conhecer a hipotenusa?", "answer": "Sim. A fórmula dos catetos K = ab/2 não precisa de hipotenusa, e a fórmula de inraio e semiperímetro K = rs também não precisa. A hipotenusa é exigida apenas para os modos baseados em ângulo e o modo de altura." },
      { "question": "Como encontro a área usando um lado e um ângulo?", "answer": "Use a forma de ângulo incluído. Com o cateto b, a hipotenusa c e o ângulo A, a área é K = bc sin(A)/2. Com o cateto a, a hipotenusa c e o ângulo B, é K = ac sin(B)/2. Insira o ângulo em graus e certifique-se de que é o ângulo agudo entre os dois lados conhecidos." },
      { "question": "Por que a fórmula baseada em ângulo usa seno?", "answer": "A fórmula geral para dois lados e seu ângulo incluído é K = 1/2 xy sin(theta). O seno extrai a componente perpendicular de um lado em relação ao outro, que é a altura efetiva. Para o ângulo A delimitado pelos lados b e c, isso dá K = bc sin(A)/2." },
      { "question": "O que é o inraio de um triângulo retângulo?", "answer": "O inraio é o raio do círculo inscrito dentro do triângulo, tocando os três lados. Para um triângulo retângulo, ele pode ser calculado como r = (a + b - c)/2. Não é o circunraio, que alcança os vértices e é igual a c/2 em um triângulo retângulo." },
      { "question": "Qual é a diferença entre perímetro e semiperímetro?", "answer": "O perímetro é o comprimento total do contorno, a + b + c. O semiperímetro é metade disso, s = (a + b + c)/2. A fórmula de área K = rs usa o semiperímetro; usar o perímetro total dobraria a resposta." },
      { "question": "Como calculo a área usando a hipotenusa e a altura?", "answer": "Use K = ch/2, onde c é a hipotenusa e h é a altura perpendicular do vértice do ângulo reto até a hipotenusa. A altura deve encontrar a hipotenusa a 90 graus; ela não é um dos catetos. Se apenas os catetos forem conhecidos, encontre a altura primeiro com h = ab/c." },
      { "question": "Por que todos os cinco métodos de área dão o mesmo resultado?", "answer": "Porque são descrições algébricas diferentes da mesma quantidade geométrica. A fórmula dos catetos, as formas com seno, o produto de inraio e semiperímetro e a forma de hipotenusa e altura são todos comprovadamente iguais para um triângulo retângulo consistente. A concordância entre dois métodos é a melhor verificação de que as entradas e o modo estão corretos." },
      { "question": "Quais unidades devo usar para a área?", "answer": "Unidades quadradas correspondentes aos comprimentos de entrada: metros dão metros quadrados, centímetros dão centímetros quadrados. Converta todas as entradas para uma unidade antes de calcular e informe o resultado com a unidade quadrada, nunca uma unidade linear." },
      { "question": "Posso calcular a área se eu só conhecer a hipotenusa?", "answer": "Não. A hipotenusa sozinha não determina um triângulo retângulo único, então a área não é fixa. Você precisa de pelo menos mais uma medida independente: um cateto, um ângulo agudo, a altura, ou o inraio com o semiperímetro." },
      { "question": "Como posso verificar se meu cálculo de área está correto?", "answer": "Execute um segundo método no mesmo triângulo e compare. Para um triângulo 3-4-5, a fórmula dos catetos dá (3 x 4)/2 = 6 e o método do semiperímetro dá 1 x 6 = 6. Também verifique se os lados satisfazem o teorema de Pitágoras, confirme o emparelhamento de ângulo e lado e verifique se a altura é perpendicular à hipotenusa." }
    ],
    "faqHeading": "Perguntas frequentes",
    "relatedHeading": "Explore calculadoras de triângulo retângulo relacionadas",
    "relatedItems": [
      "Calculadora de área de triângulo retângulo a partir dos catetos",
      "Calculadora de área de triângulo retângulo a partir do ângulo",
      "Calculadora de área de triângulo retângulo a partir do semiperímetro",
      "Calculadora de área de triângulo retângulo a partir da altura",
      "Calculadora de perímetro e semiperímetro de triângulo retângulo",
      "Calculadora de inraio e circunraio de triângulo retângulo",
      "Calculadora de lados de triângulo retângulo"
    ]
  },
  "bn": {
    "tocHeading": "এই নির্দেশিকায়",
    "tocItems": {
      "sec-intro": "সমকোণী ত্রিভুজের ক্ষেত্রফল ক্যালকুলেটর কী?",
      "sec-triangle": "সমকোণী ত্রিভুজের ক্ষেত্রফল কী?",
      "sec-legs": "দুটি লম্ব-ভূমি বাহু দিয়ে সমকোণী ত্রিভুজের ক্ষেত্রফল",
      "sec-angle-a": "বাহু b, অতিভুজ c ও কোণ A দিয়ে সমকোণী ত্রিভুজের ক্ষেত্রফল নির্ণয়",
      "sec-angle-b": "বাহু a, অতিভুজ c ও কোণ B দিয়ে সমকোণী ত্রিভুজের ক্ষেত্রফল নির্ণয়",
      "sec-inradius": "অন্তর্ব্যাসার্ধ ও অর্ধপরিসীমা দিয়ে সমকোণী ত্রিভুজের ক্ষেত্রফল নির্ণয়",
      "sec-altitude": "অতিভুজ ও উচ্চতা দিয়ে সমকোণী ত্রিভুজের ক্ষেত্রফল নির্ণয়",
      "sec-choose": "সমকোণী ত্রিভুজের কোন ক্ষেত্রফল সূত্রটি ব্যবহার করবেন?",
      "sec-howto": "সমকোণী ত্রিভুজের ক্ষেত্রফল ক্যালকুলেটর কীভাবে ব্যবহার করবেন",
      "sec-applications": "সমকোণী ত্রিভুজের ক্ষেত্রফল গণনার বাস্তব প্রয়োগ",
      "sec-verify": "সমকোণী ত্রিভুজের ক্ষেত্রফল কীভাবে যাচাই করবেন",
      "sec-mistakes": "সমকোণী ত্রিভুজের ক্ষেত্রফল গণনায় সাধারণ ভুল",
      "sec-validate": "আপনার ক্ষেত্রফলের ফলাফল বৈধ কিনা কীভাবে পরীক্ষা করবেন",
      "sec-related": "সম্পর্কিত সমকোণী ত্রিভুজ ক্যালকুলেটর দেখুন",
      "sec-faq": "সচরাচর জিজ্ঞাসিত প্রশ্ন",
      "sec-conclusion": "উপসংহার"
    },
    "sections": {
      "sec-intro": {
        "h2": "সমকোণী ত্রিভুজের ক্ষেত্রফল ক্যালকুলেটর কী?",
        "blocks": [
          { "kind": "p", "text": "সমকোণী ত্রিভুজের ক্ষেত্রফল ক্যালকুলেটর সমকোণী ত্রিভুজের তিনটি বাহু দিয়ে ঘেরা দ্বিমাত্রিক ক্ষেত্রফল নির্ণয় করে। উদাহরণস্বরূপ, যে সমকোণী ত্রিভুজের লম্ব-ভূমি বাহু [[a=3\\text{ m}]] ও [[b=4\\text{ m}]], তার ক্ষেত্রফল [[K=\\frac{3\\times4}{2}=6\\text{ m}^2]]: ত্রিভুজটি ছয় বর্গমিটার পৃষ্ঠতল দখল করে। ক্ষেত্রফল বর্গ এককে মাপা হয়, কারণ এটি দৈর্ঘ্য নয়, সমতল জায়গা গণনা করে।" },
          { "kind": "p", "text": "লম্বভাবে মিলিত বাহু দুটি গণনাকে অনেক সহজ করে দেয়। যেহেতু বাহু দুটি 90 ডিগ্রিতে মিলিত হয়, একটি বাহুকে ভূমি ও অন্যটিকে উচ্চতা হিসেবে ব্যবহার করা যায়, ফলে ক্ষেত্রফল শুধু তাদের গুণফলের অর্ধেক। এই সরলতার কারণেই বেশিরভাগ শিক্ষার্থী প্রথমে লম্ব-ভূমি সূত্রটি শেখে।" },
          { "kind": "p", "text": "একই ক্ষেত্রফলের জন্য একাধিক পদ্ধতি আছে, কারণ বাস্তব সমস্যায় বিভিন্ন মাপ হাতে থাকে। একজন ছুতার প্যানেলের দুটি লম্ব-ভূমি বাহু মাপেন; একজন জরিপকারী অতিভুজ ও একটি কোণ মাপেন; অন্তর্বৃত্ত নিয়ে কাজ করা একজন জ্যামিতিবিদ অন্তর্ব্যাসার্ধ ও অর্ধপরিসীমা জানেন। প্রতিটি পদ্ধতি নিজ নিজ জানা মানের সেটকে একই ক্ষেত্রফলে রূপান্তর করে। এই পৃষ্ঠার ক্যালকুলেটর এই পরিস্থিতিগুলোর সঙ্গে মিলিয়ে পাঁচটি মোড দেয়: লম্ব-ভূমি থেকে ক্ষেত্রফল, ক্ষেত্রফল প্রকরণ (কোণ A), ক্ষেত্রফল প্রকরণ (কোণ B), অর্ধপরিসীমা থেকে ক্ষেত্রফল এবং ক্ষেত্রফল প্রকরণ (উচ্চতা)। সাধারণত সবচেয়ে ভালো পদ্ধতি সেটিই, যেটি আপনার হাতে থাকা মাপগুলো ব্যবহার করে, আগে অতিরিক্ত রূপান্তর না ঘটিয়ে।" }
        ]
      },
      "sec-triangle": {
        "h2": "সমকোণী ত্রিভুজের ক্ষেত্রফল কী?",
        "blocks": [
          { "kind": "p", "text": "এই নির্দেশিকায় পুরো লেখাজুড়ে একটি সুসংগত প্রতীক পদ্ধতি ব্যবহার করা হয়েছে: [[A]] ও [[B]] দুটি সূক্ষ্মকোণ, [[C=90^\\circ]] সমকোণ, বাহু [[a]] কোণ [[A]]-এর বিপরীতে, বাহু [[b]] কোণ [[B]]-এর বিপরীতে, বাহু [[c]] কোণ [[C]]-এর বিপরীত অতিভুজ, [[h]] শীর্ষ [[C]] থেকে অতিভুজের ওপর লম্ব উচ্চতা, [[r]] অন্তর্ব্যাসার্ধ, [[s]] অর্ধপরিসীমা এবং [[K]] ক্ষেত্রফল।" },
          { "kind": "h3", "text": "সমকোণী ত্রিভুজ কী?" },
          { "kind": "p", "text": "সমকোণী ত্রিভুজের একটি কোণ ঠিক 90 ডিগ্রি হয়। এর দুটি লম্ব-ভূমি বাহু সমকোণে মিলিত হয়, আর অতিভুজ সেই কোণের বিপরীতে থাকে। অতিভুজ সবসময় সবচেয়ে লম্বা বাহু, আর অন্য দুটি কোণ সূক্ষ্ম: যেহেতু তিনটি কোণের যোগফল 180 ডিগ্রি, তাই [[A+B=90^\\circ]]। বাহু দুটি পরস্পর লম্ব, আর এই ধর্মই ক্ষেত্রফলের সূত্রকে এত সরাসরি করে।" },
          { "kind": "h3", "text": "ক্ষেত্রফল বলতে কী বোঝায়?" },
          { "kind": "p", "text": "ক্ষেত্রফল ত্রিভুজের তিনটি বাহু দিয়ে ঘেরা দ্বিমাত্রিক জায়গা মাপে। এটি পরিসীমা থেকে আলাদা, যা মোট সীমানার দৈর্ঘ্য মাপে; বাহুর দৈর্ঘ্য থেকে আলাদা, যা এক মাত্রা মাপে; আর আয়তন থেকে আলাদা, যা ত্রিমাত্রিক জায়গা মাপে। ত্রিভুজাকার কাগজের টুকরোর ক্ষেত্রফল ততটুকুই, যতটা কাগজ এটি ঢেকে রাখে; ত্রিভুজাকার বাগানের অংশের ক্ষেত্রফল ততটুকুই, যতটা জমি এটি দখল করে। দুটোই বর্গ এককে প্রকাশ করা হয়, যেমন বর্গমিটার, কারণ ক্ষেত্রফল আকৃতির ভেতরে কতগুলো একক বর্গ জায়গা পাবে তা গণনা করে।" },
          { "kind": "h3", "text": "ক্ষেত্রফলকে কেন দুই দিয়ে ভাগ করা হয়?" },
          { "kind": "p", "text": "দুটি অভিন্ন সমকোণী ত্রিভুজকে তাদের অতিভুজ বরাবর জোড়া লাগিয়ে একটি আয়তক্ষেত্র তৈরি করা যায়। প্রতিটি ত্রিভুজের লম্ব বাহু [[a]] ও [[b]] হলে আয়তক্ষেত্রের ক্ষেত্রফল [[ab]]। একটি ত্রিভুজ সেই আয়তক্ষেত্রের ঠিক অর্ধেক দখল করে, তাই [[[\\boxed{K=\\frac{ab}{2}}]]]. দুই দিয়ে ভাগ করা কোনো মনগড়া সমন্বয় নয়: এটি ত্রিভুজ আয়তক্ষেত্রের অর্ধেক হওয়ার জ্যামিতিক ফল, এবং এই পৃষ্ঠার প্রতিটি ক্ষেত্রফল পদ্ধতিতে কোনো না কোনো রূপে এটি দেখা যায়।" },
          { "kind": "h3", "text": "একই ত্রিভুজের ক্ষেত্রফলের পাঁচটি সূত্র কীভাবে থাকতে পারে?" },
          { "kind": "p", "text": "মাপার পদ্ধতি বদলালেও ত্রিভুজের ক্ষেত্রফল বদলায় না। পদ্ধতিগুলো শুধু ভিন্ন ভিন্ন জানা মান থেকে শুরু করে। দুটি লম্ব-ভূমি বাহু সবচেয়ে সরল সূত্র দেয়। একটি বাহু, অতিভুজ ও অন্তর্ভুক্ত সূক্ষ্মকোণ সাইন-ভিত্তিক সূত্রের সুযোগ দেয়। অন্তর্ব্যাসার্ধ ও অর্ধপরিসীমা একটি বিকল্প জ্যামিতিক সম্পর্ক দেয়। অতিভুজ ও লম্ব উচ্চতা সাধারণ ভূমি-উচ্চতা নিয়ম ব্যবহার করে। যখন ইনপুটগুলো একই বৈধ ত্রিভুজ বর্ণনা করে, তখন পাঁচটি পদ্ধতিরই একই ক্ষেত্রফল দিতে হবে, আর এই সম্মতিই সবচেয়ে শক্ত যাচাই: দুটি পদ্ধতি, একটি ত্রিভুজ, একটি উত্তর।" }
        ],
        "imgAlt": "সমকোণী ত্রিভুজের গঠন: লম্ব-ভূমি বাহু a ও b, অতিভুজ c, সমকোণ C, অতিভুজের ওপর উচ্চতা h, সূত্র K = ab/2",
        "figcaption": "সমকোণী ত্রিভুজের গঠন: C সমকোণ, a ও b লম্ব-ভূমি বাহু, c অতিভুজ, এবং h অতিভুজের ওপর উচ্চতা।"
      },
      "sec-legs": {
        "h2": "দুটি লম্ব-ভূমি বাহু দিয়ে সমকোণী ত্রিভুজের ক্ষেত্রফল",
        "blocks": [
          { "kind": "p", "text": "লম্ব-ভূমি সূত্রটি সমকোণী ত্রিভুজের ক্ষেত্রফলের সূচনাবিন্দু: [[[\\boxed{K=\\frac{ab}{2}}]]]. এতে শুধু দুটি পরস্পর লম্ব বাহু দরকার, আর এই পৃষ্ঠার বাকি সব কিছুকে ভিন্ন ভিন্ন ইনপুট থেকে এই একই রাশি পুনরুদ্ধারের প্রকরণ হিসেবে দেখা যায়।" },
          { "kind": "h3", "text": "লম্ব-ভূমি সূত্রটি কখন ব্যবহার করবেন?" },
          { "kind": "p", "text": "দুটি লম্ব বাহু জানা থাকলেই এই পদ্ধতি ব্যবহার করুন। আগে কোনো কোণ, অতিভুজ, অন্তর্ব্যাসার্ধ বা উচ্চতা বের করার দরকার নেই। দুটি বাহুর সরাসরি মাপ ছুতার, টাইল বসানো ও শ্রেণিকক্ষের সমস্যায় সাধারণ, তাই লম্ব-ভূমি থেকে ক্ষেত্রফল মোডই বেশিরভাগ দৈনন্দিন গণনার জন্য স্বাভাবিক পছন্দ।" },
          { "kind": "h3", "text": "সূত্রটি কীভাবে কাজ করে" },
          { "kind": "p", "text": "বাহু দুটি ত্রিভুজের ভূমি ও লম্ব উচ্চতা তৈরি করে। ত্রিভুজের ক্ষেত্রফলের সাধারণ সূত্র [[K=\\frac{\\text{base}\\times\\text{height}}{2}]]; যেহেতু বাহু দুটি লম্ব, ভূমি ও উচ্চতা সরাসরি [[a]] ও [[b]] ধরা যায়, ফলে [[K=ab/2]]। এতে কোনো ত্রিকোণমিতি জড়িত নেই, আর আগে কোনো অতিরিক্ত বাহু বের করারও দরকার নেই।" },
          { "kind": "h3", "text": "সম্পূর্ণ সমাধানকৃত উদাহরণ: একটি 3-4-5 ত্রিভুজ" },
          { "kind": "p", "text": "দেওয়া আছে [[a=3\\text{ m}]] ও [[b=4\\text{ m}]]। ধাপ 1: সূত্রটি লিখুন [[K=ab/2]]। ধাপ 2: মান বসান, [[K=(3\\times4)/2]]। ধাপ 3: গুণ করুন, [[K=12/2]]। ধাপ 4: দুই দিয়ে ভাগ করুন, [[[\\boxed{K=6\\text{ m}^2}]]]. উত্তর ছয় বর্গমিটার, ছয় মিটার নয়: এককই রাশিটির অর্থ বহন করে।" },
          { "kind": "h3", "text": "দুটি বাহু কি অদলবদল করা যায়?" },
          { "kind": "p", "text": "হ্যাঁ। গুণ বিনিময়ধর্মী, তাই [[ab=ba]] এবং সেই কারণে [[ab/2=ba/2]]। ক্যালকুলেটরের ঘরগুলো সঠিক বাহুর দৈর্ঘ্যের সঙ্গে মিললে দুটি বাহু উল্টো ক্রমে দিলেও ক্ষেত্রফল বদলায় না। এই প্রতিসাম্য শুধু লম্ব-ভূমি বাহুর জন্য খাটে: একটি বাহুর সঙ্গে অতিভুজ অদলবদল করলে সূত্রটি ভেঙে যাবে।" },
          { "kind": "h3", "text": "বাহুর মান দশমিক হলে কী হবে?" },
          { "kind": "p", "text": "দশমিক মাপ একই সূত্রে কাজ করে। [[a=3.5\\text{ cm}]] ও [[b=9.2\\text{ cm}]] হলে: [[K=(3.5\\times9.2)/2]], [[K=32.2/2]], [[[\\boxed{K=16.1\\text{ cm}^2}]]]. পাটিগণিত অভিন্ন; শুধু ইনপুটের নির্ভুলতা বদলায়, তাই যথেষ্ট সংখ্যক অঙ্ক রাখুন এবং শেষে বৃত্তায়ন করুন।" },
          { "kind": "h3", "text": "একটি বাহু অজানা থাকলে কী হবে?" },
          { "kind": "p", "text": "অনুপস্থিত বাহুটি কখনো কখনো পিথাগোরাসের উপপাদ্য বা জানা কোণ ব্যবহার করে আগে বের করে নেওয়া যায়, তারপর লম্ব-ভূমি সূত্র প্রয়োগ করা যায়। মনে রাখবেন, লম্ব-ভূমি মোডের নিজেরই দুটি বাহু দরকার: এটি স্বয়ংক্রিয়ভাবে অনুপস্থিত বাহু পুনরুদ্ধার করে না। শুধু একটি বাহু ও অতিভুজ জানা থাকলে, এই মোড ব্যবহারের আগে অনুপস্থিত বাহুর গণনা একটি আলাদা ধাপ।" }
        ]
      },
      "sec-angle-a": {
        "h2": "বাহু b, অতিভুজ c ও কোণ A দিয়ে সমকোণী ত্রিভুজের ক্ষেত্রফল নির্ণয়",
        "blocks": [
          { "kind": "p", "text": "বাহু [[b]], অতিভুজ [[c]] ও সূক্ষ্মকোণ [[A]] জানা থাকলে এই পদ্ধতি কাজে লাগে: [[[\\boxed{K=\\frac{bc\\sin(A)}{2}}]]]. এটি ক্যালকুলেটরের ক্ষেত্রফল প্রকরণ (কোণ A) মোড।" },
          { "kind": "h3", "text": "এই সূত্রে সাইন কেন ব্যবহার হয়?" },
          { "kind": "p", "text": "দুটি বাহু ও তাদের অন্তর্ভুক্ত কোণের জন্য ক্ষেত্রফলের সাধারণ সূত্র [[K=\\frac12 xy\\sin(\\theta)]]। কোণ [[A]] বাহু [[b]] ও [[c]]-এর মধ্যে থাকে, তাই [[x=b]], [[y=c]], [[\\theta=A]] বসালে পাওয়া যায় [[K=\\frac12 bc\\sin(A)]]। সাইন একটি বাহুর লম্ব উপাংশের হিসাব রাখে: বাহু [[c]]-এর শুধু যে অংশটি বাহু [[b]]-এর ওপর লম্ব, সেটিই উচ্চতায় অবদান রাখে, আর সেই লম্ব অংশটি [[c\\sin(A)]]।" },
          { "kind": "h3", "text": "সম্পূর্ণ সমাধানকৃত উদাহরণ: একটি 3-4-5 ত্রিভুজ" },
          { "kind": "p", "text": "দেওয়া আছে [[b=4\\text{ m}]], [[c=5\\text{ m}]] ও [[A\\approx36.87^\\circ]]। যেহেতু [[\\sin(36.87^\\circ)\\approx0.6]], বসান: [[K=(4\\times5\\times0.6)/2]], [[K=12/2]], [[[\\boxed{K=6\\text{ m}^2}]]]. এটি লম্ব-ভূমি সূত্রের সঙ্গে মেলে, কারণ 0.6 ঠিক অনুপাত [[a/c=3/5]]-এর সমান: সাইন-রূপটি ছদ্মবেশে লম্ব-ভূমি রূপ, যেখানে [[c\\sin(A)]] অন্য বাহুর ভূমিকা পালন করে।" },
          { "kind": "h3", "text": "কোণ বদলালে কী হয়?" },
          { "kind": "p", "text": "বৈধ ত্রিভুজের মধ্যে দুটি বাহুর দৈর্ঘ্য ও অন্তর্ভুক্ত কোণ বদলালে সাইন গুণনীয়ক ক্ষেত্রফল বদলে দেয়। এমন কল্পনা করবেন না যে প্রতিটি বাহুর দৈর্ঘ্য স্থির রেখে কোণ বদলাচ্ছে: বাস্তব ত্রিভুজে বাহু ও কোণ পরস্পর যুক্ত, তাই কোণ বদলালে ত্রিভুজের আকৃতি বদলে যায় এবং ক্ষেত্রফলও তার সঙ্গে বদলায়। অন্তর্ভুক্ত কোণ এই সূত্রের জন্য অপরিহার্য, ঠিক এই কারণে যে এটি ত্রিভুজ কতটা খোলা বা বন্ধ তা প্রকাশ করে।" },
          { "kind": "h3", "text": "কোণ A মোডে সাধারণ ভুল" },
          { "kind": "p", "text": "এই মোডে পাঁচটি ভুল বারবার হয়। কোণ [[A]]-কে ভুল বাহুর সঙ্গে জোড়া দেওয়াই সবচেয়ে ঘন: এই সূত্রে বাহু [[b]] দরকার, বাহু [[a]] নয়, কারণ [[b]] ও [[c]] অতিভুজের সঙ্গে কোণ [[A]] ঘেরে। ভুল এককে কোণ দিলে সাইনের মান নষ্ট হয়: এই ক্যালকুলেটর ডিগ্রি আশা করে, তাই 36.87 ডিগ্রিকে 0.6435 রেডিয়ান হিসেবে দেওয়া যাবে না। দুই দিয়ে ভাগ করতে ভুললে উত্তর দ্বিগুণ হয়। আর সূক্ষ্মকোণের ঘরে সমকোণ বা অন্যথায় অ-সূক্ষ্ম কোণ দিলে এই মোডের জন্য কোনো বৈধ ইনপুট বর্ণিত হয় না; কোণকে কঠোরভাবে 0 থেকে 90 ডিগ্রির মধ্যে থাকতে হবে।" }
        ]
      },
      "sec-angle-b": {
        "h2": "বাহু a, অতিভুজ c ও কোণ B দিয়ে সমকোণী ত্রিভুজের ক্ষেত্রফল নির্ণয়",
        "blocks": [
          { "kind": "p", "text": "এই মোডে অন্য সূক্ষ্মকোণ ও তার দুটি সংলগ্ন বাহু ব্যবহার হয়: [[[\\boxed{K=\\frac{ac\\sin(B)}{2}}]]]. এটি ক্যালকুলেটরের ক্ষেত্রফল প্রকরণ (কোণ B) মোড।" },
          { "kind": "h3", "text": "এই সূত্রটি কেন কাজ করে?" },
          { "kind": "p", "text": "বাহু [[a]] ও [[c]] কোণ [[B]] ঘেরে। সাধারণ সূত্র [[K=\\frac12 xy\\sin(\\theta)]] থেকে শুরু করে [[x=a]], [[y=c]], [[\\theta=B]] বসালে পাওয়া যায় [[K=\\frac12 ac\\sin(B)]]। গঠন কোণ A সূত্রের সঙ্গে অভিন্ন; শুধু লেবেলগুলো সরে, কারণ দুটি সূক্ষ্মকোণের জ্যামিতি পরস্পরের প্রতিবিম্ব।" },
          { "kind": "h3", "text": "সম্পূর্ণ সমাধানকৃত উদাহরণ: একই 3-4-5 ত্রিভুজ" },
          { "kind": "p", "text": "দেওয়া আছে [[a=3\\text{ m}]], [[c=5\\text{ m}]] ও [[B\\approx53.13^\\circ]]। যেহেতু [[\\sin(53.13^\\circ)\\approx0.8]], গণনা করুন: [[K=(3\\times5\\times0.8)/2]], [[K=12/2]], [[[\\boxed{K=6\\text{ m}^2}]]]. ফলাফল লম্ব-ভূমি পদ্ধতি ও কোণ A পদ্ধতির সঙ্গে মেলে, যেমনটা হতেই হবে: তিনটিই একই ত্রিভুজ বর্ণনা করে।" },
          { "kind": "h3", "text": "কোণ A ও B পরস্পর কীভাবে সম্পর্কিত?" },
          { "kind": "p", "text": "দুটি সূক্ষ্মকোণ পরস্পরের পূরক: [[[\\boxed{A+B=90^\\circ}]]]. এ থেকে পাওয়া যায় অভেদ [[\\sin(A)=\\cos(B)]] ও [[\\sin(B)=\\cos(A)]]। 3-4-5 ত্রিভুজে [[\\sin(A)=0.6=\\cos(B)]] এবং [[\\sin(B)=0.8=\\cos(A)]]। এই সম্পর্কগুলো ব্যাখ্যা করে কেন ইনপুট সামঞ্জস্যপূর্ণ হলে দুটি কোণ-ভিত্তিক মোডই একই ক্ষেত্রফল গণনা করে: এক মোডের সাইন অন্য মোডের কোসাইন, আর কোন সূক্ষ্মকোণ থেকে শুরু করলেন তাতে ত্রিভুজের জ্যামিতি বদলায় না।" },
          { "kind": "h3", "text": "কোণ B মোডে সাধারণ ভুল" },
          { "kind": "p", "text": "এখানে প্রতিবিম্ব-ভুলগুলো দেখা যায়: বাহু [[a]]-এর বদলে বাহু [[b]] ব্যবহার, কোণ [[B]]-কে ভুল বাহুর সঙ্গে জোড়া দেওয়া এবং দুটি সূক্ষ্মকোণকে পরস্পরের সঙ্গে গুলিয়ে ফেলা। সাইন ফাংশন ভুলে যাওয়া বা দুই দিয়ে ভাগ করতে ভুলে যাওয়া কোণ A মোডের সেই একই পাটিগণিতের ভুল। শেষে, মাপা ত্রিভুজের সঙ্গে না মিলে এমন কোণ, যেমন 53.13 ডিগ্রির জায়গায় 36.87 ডিগ্রি দিলে, নীরবে ভুল কিন্তু দেখতে বিশ্বাসযোগ্য ক্ষেত্রফল তৈরি হয়, তাই সবসময় পরীক্ষা করুন কোণটি বাহু-জোড়ার সঙ্গে মিলছে কিনা।" }
        ]
      },
      "sec-inradius": {
        "h2": "অন্তর্ব্যাসার্ধ ও অর্ধপরিসীমা দিয়ে সমকোণী ত্রিভুজের ক্ষেত্রফল নির্ণয়",
        "blocks": [
          { "kind": "p", "text": "এই পদ্ধতিতে শুধু দুটি সংখ্যা দরকার, অন্তর্ব্যাসার্ধ [[r]] ও অর্ধপরিসীমা [[s]]: [[[\\boxed{K=rs}]]]. অন্তর্ব্যাসার্ধ ত্রিভুজের ভেতরে অন্তর্লিখিত বৃত্তের ব্যাসার্ধ, যে বৃত্ত তিনটি বাহুকেই স্পর্শ করে। অর্ধপরিসীমা ত্রিভুজের পরিসীমার অর্ধেক: [[[\\boxed{s=\\frac{a+b+c}{2}}]]]. এটি ক্যালকুলেটরের অর্ধপরিসীমা থেকে ক্ষেত্রফল মোড।" },
          { "kind": "h3", "text": "ক্ষেত্রফল কেন অন্তর্ব্যাসার্ধ গুণ অর্ধপরিসীমার সমান?" },
          { "kind": "p", "text": "অন্তঃকেন্দ্র, অর্থাৎ অন্তর্বৃত্তের কেন্দ্র, থেকে তিনটি শীর্ষের সঙ্গে যোগ করুন। এতে ত্রিভুজটি তিনটি ছোট ত্রিভুজে ভাগ হয়। প্রতিটি ছোট ত্রিভুজের একই লম্ব উচ্চতা [[r]], কারণ অন্তর্ব্যাসার্ধ অন্তঃকেন্দ্র থেকে প্রতিটি বাহুর লম্ব দূরত্ব। তাদের ক্ষেত্রফল যোগ করলে পাওয়া যায় [[K=\\frac12 ar+\\frac12 br+\\frac12 cr]]। [[r/2]] উৎপাদকে বের করুন: [[K=\\frac12 r(a+b+c)]]। যেহেতু [[s=(a+b+c)/2]], তাই [[[\\boxed{K=rs}]]]। এই সম্পর্ক শুধু সমকোণী ত্রিভুজের জন্য নয়, যেকোনো বৈধ ত্রিভুজের জন্য খাটে, যদি সঠিক অন্তর্ব্যাসার্ধ ও অর্ধপরিসীমা জানা থাকে।" },
          { "kind": "h3", "text": "সমকোণী ত্রিভুজের অন্তর্ব্যাসার্ধ নির্ণয়" },
          { "kind": "p", "text": "সমকোণী ত্রিভুজের জন্য একটি সুবিধাজনক সংক্ষিপ্ত পথ আছে: [[[\\boxed{r=\\frac{a+b-c}{2}}]]]. একে সমকোণী ত্রিভুজের সংক্ষিপ্ত পথ হিসেবে ধরুন, অন্তর্ব্যাসার্ধের সাধারণ সূত্র হিসেবে নয়: সাধারণ ত্রিভুজের জন্য অন্তর্ব্যাসার্ধ আসে [[r=K/s]] থেকে, যা ক্ষেত্রফল বের করতে চাইলে বৃত্তাকার যুক্তি হয়। সংক্ষিপ্ত পথটি কাজ করে, কারণ সমকোণের শীর্ষ থেকে দুটি স্পর্শকের দৈর্ঘ্য সমান এবং 90-ডিগ্রি ক্ষেত্রে বীজগণিত সুন্দরভাবে গুটিয়ে যায়।" },
          { "kind": "h3", "text": "সম্পূর্ণ সমাধানকৃত উদাহরণ: একটি 3-4-5 ত্রিভুজ" },
          { "kind": "p", "text": "দেওয়া আছে [[a=3]], [[b=4]], [[c=5]]। প্রথমে অর্ধপরিসীমা: [[s=(3+4+5)/2]], [[[\\boxed{s=6}]]]। তারপর অন্তর্ব্যাসার্ধ: [[r=(3+4-5)/2]], [[[\\boxed{r=1}]]]। ক্ষেত্রফল [[K=rs]], [[K=1\\times6]], [[[\\boxed{K=6\\text{ square units}}]]]। উত্তর লম্ব-ভূমি সূত্রের সঙ্গে মেলে, যা নিশ্চিত করে অন্তর্বৃত্ত-দৃষ্টি ও লম্ব-ভূমি-দৃষ্টি একই ত্রিভুজ বর্ণনা করে।" },
          { "kind": "h3", "text": "সম্পূর্ণ সমাধানকৃত উদাহরণ: একটি 5-12-13 ত্রিভুজ" },
          { "kind": "p", "text": "দেওয়া আছে [[a=5]], [[b=12]], [[c=13]]। অর্ধপরিসীমা: [[s=(5+12+13)/2=15]]। অন্তর্ব্যাসার্ধ: [[r=(5+12-13)/2=2]]। ক্ষেত্রফল: [[K=2\\times15]], [[[\\boxed{K=30\\text{ square units}}]]]। লম্ব-ভূমি সূত্র দিয়ে যাচাই করুন: [[K=(5\\times12)/2=30]]। দুটি পদ্ধতিই মেলে, যা প্রত্যাশিত ফল যখন বাহুর মাপগুলো সামঞ্জস্যপূর্ণ।" },
          { "kind": "h3", "text": "সাধারণ ভুল" },
          { "kind": "p", "text": "অন্তর্ব্যাসার্ধকে পরিব্যাসার্ধের সঙ্গে গুলিয়ে ফেলাই চেনা ভুল: অন্তর্ব্যাসার্ধ ভেতর থেকে বাহুগুলোকে স্পর্শ করে, আর পরিব্যাসার্ধ বাইরে থেকে শীর্ষগুলোতে পৌঁছায়, এবং এরা ভিন্ন সংখ্যা। অর্ধপরিসীমার বদলে পূর্ণ পরিসীমা ব্যবহার করলে উত্তর দ্বিগুণ হয়। সমকোণী ত্রিভুজের অন্তর্ব্যাসার্ধের সংক্ষিপ্ত পথ [[r=(a+b-c)/2]] অ-সমকোণী ত্রিভুজে প্রয়োগ করলে অর্থহীন মান পাওয়া যায়। গুণফল [[rs]]-এর একক বর্গ একক তা ভুলে যাওয়া এবং [[r]] ও [[s]] গণনায় অসামঞ্জস্যপূর্ণ বাহুর মাপ দেওয়া সাধারণ ব্যর্থতাগুলো সম্পূর্ণ করে।" }
        ]
      },
      "sec-altitude": {
        "h2": "অতিভুজ ও উচ্চতা দিয়ে সমকোণী ত্রিভুজের ক্ষেত্রফল নির্ণয়",
        "blocks": [
          { "kind": "p", "text": "এই পদ্ধতিতে অতিভুজ [[c]] ভূমি এবং লম্ব উচ্চতা [[h]] উচ্চতা হিসেবে ব্যবহৃত হয়: [[[\\boxed{K=\\frac{ch}{2}}]]]. এটি ক্যালকুলেটরের ক্ষেত্রফল প্রকরণ (উচ্চতা) মোড।" },
          { "kind": "h3", "text": "উচ্চতা কী?" },
          { "kind": "p", "text": "উচ্চতা একটি শীর্ষ থেকে বিপরীত বাহুর ওপর অঙ্কিত লম্বরেখা। এই মোডে উচ্চতা সমকোণের শীর্ষ [[C]] থেকে শুরু হয়ে অতিভুজকে 90 ডিগ্রিতে ছোঁয়। এটি বাহু [[a]] বা [[b]] কোনোটির সমান নয়: বাহুগুলো ত্রিভুজের কিনারা বরাবর থাকে, আর উচ্চতা ভেতরে নেমে অতিভুজের ওপর পড়ে। যেখানে [[h]] [[c]]-কে ছোঁয়, সেখানকার সমকোণ-চিহ্ন লম্বত্বের শর্ত পূরণের দৃশ্যমান নিশ্চয়তা।" },
          { "kind": "h3", "text": "সূত্রটি কেন কাজ করে?" },
          { "kind": "p", "text": "এটি ভূমি-উচ্চতার সাধারণ সূত্র, ভূমির একটি বিশেষ পছন্দসহ। [[K=\\frac12\\times\\text{base}\\times\\text{perpendicular height}]] থেকে শুরু করুন। অতিভুজকে ভূমি ধরুন, [[\\text{base}=c]], এবং লম্ব উচ্চতাকে উচ্চতা ধরুন, [[\\text{height}=h]]। তাই [[K=ch/2]]। এই ব্যুৎপত্তির কিছুই সমকোণী ত্রিভুজের জন্য নির্দিষ্ট নয়: যেকোনো ত্রিভুজের ক্ষেত্রফল এভাবে লেখা যায়, কিন্তু বাহু দুটি জানা থাকলে সমকোণী ত্রিভুজের লম্ব-ভূমি সূত্রটি কেবল দ্রুততর।" },
          { "kind": "h3", "text": "সম্পূর্ণ সমাধানকৃত উদাহরণ: একটি 6-8-10 ত্রিভুজ" },
          { "kind": "p", "text": "দেওয়া আছে [[c=10\\text{ m}]] ও [[h=4.8\\text{ m}]]। গণনা করুন: [[K=(10\\times4.8)/2]], [[K=48/2]], [[[\\boxed{K=24\\text{ m}^2}]]]। এটি সেই সমকোণী ত্রিভুজেরই ক্ষেত্রফল, যার বাহু 6 মি ও 8 মি, যেহেতু [[(6\\times8)/2=24]]। দুটি ভিন্ন বর্ণনা, একটি ক্ষেত্রফল।" },
          { "kind": "h3", "text": "উচ্চতা কীভাবে গণনা করা যায়?" },
          { "kind": "p", "text": "দুটি বাহু ও অতিভুজ জানা থাকলে, দুটি ক্ষেত্রফল সূত্রকে সমান করে উচ্চতা পাওয়া যায়: [[ab/2=ch/2]], তাই [[[\\boxed{h=\\frac{ab}{c}}]]]। 6-8-10 ত্রিভুজের জন্য: [[h=(6\\times8)/10=4.8\\text{ m}]]। উচ্চতা অতিভুজের চেয়ে ছোট, যেমনটা হতেই হবে: শীর্ষ থেকে রেখা পর্যন্ত লম্বই সবচেয়ে ছোট পথ। মনে রাখবেন, উচ্চতা মোড নিজে অনুপস্থিত উচ্চতা বের করে না; উচ্চতা জানা থাকতে হবে বা আগে বের করে নিতে হবে।" }
        ]
      },
      "sec-choose": {
        "h2": "সমকোণী ত্রিভুজের কোন ক্ষেত্রফল সূত্রটি ব্যবহার করবেন?",
        "blocks": [
          { "kind": "p", "text": "পাঁচটি পদ্ধতি, একটি ক্ষেত্রফল। নিচের তুলনা জানা মাপের প্রতিটি সেটকে তার সূত্র ও ক্যালকুলেটর মোডের সঙ্গে মেলায়। যে সারিটি আপনার হাতে থাকা সংখ্যাগুলোর সঙ্গে মেলে, সেটি বেছে নিন।" },
          { "kind": "h3", "text": "লম্ব-ভূমি সূত্রটি কেন প্রায়ই সবচেয়ে সরল" },
          { "kind": "p", "text": "লম্ব-ভূমি সূত্রে শুধু দুটি মাপ দরকার, কোনো ত্রিকোণমিতি নয়। গুণ করুন, অর্ধেক করুন, শেষ। যখনই দুটি লম্ব বাহু হাতে থাকে, অন্য প্রতিটি পদ্ধতিই একই সংখ্যায় পৌঁছানোর দীর্ঘতর পথ।" },
          { "kind": "h3", "text": "সাইন সূত্রটি কখন কাজে লাগে" },
          { "kind": "p", "text": "কোণ-ভিত্তিক পদ্ধতি তখন নিজের জায়গা পায়, যখন হাতে থাকা মাপগুলোর মধ্যে একটি সূক্ষ্মকোণ, একটি বাহু ও অতিভুজ থাকে, যেমন জরিপের দৃষ্টিরেখা বা নেভিগেশন ত্রিভুজে হয়। কোণ জানা না থাকলে লম্ব-ভূমি সূত্র ব্যবহারের আগে প্রথমে অনুপস্থিত বাহুটি পুনরুদ্ধার করতে হতো; সাইন-রূপ সেই পথ ঘোরা এড়ায়।" },
          { "kind": "h3", "text": "অর্ধপরিসীমা পদ্ধতিটি কখন কাজে লাগে" },
          { "kind": "p", "text": "অন্তর্ব্যাসার্ধ-অর্ধপরিসীমা সূত্র সেই জ্যামিতি সমস্যায় মানানসই, যেখানে আগে থেকেই অন্তর্বৃত্ত জড়িত, বা যেখানে [[r]] ও [[s]] আগের ধাপ থেকে জানা। এটি একটি চমৎকার স্বাধীন ক্রস-চেকও: যেহেতু লম্ব-ভূমি সূত্রের সঙ্গে এর কোনো পাটিগণিত ভাগ করা নেই, দুটির সম্মতি দৃঢ়ভাবে বলে দুটোই ঠিক।" },
          { "kind": "h3", "text": "উচ্চতা সূত্রটি কখন কাজে লাগে" },
          { "kind": "p", "text": "অতিভুজ ও তার লম্ব উচ্চতাই যখন জানা রাশি, তখন উচ্চতা পদ্ধতিই স্বাভাবিক পছন্দ, যা বিভাজন সমস্যায় ঘটে, যেখানে ত্রিভুজকে তার উচ্চতা বরাবর ভাগ করা হয়। লম্ব-ভূমি সূত্রের মতো এটিও ত্রিকোণমিতি ছাড়া সরল ভূমি-উচ্চতা গণনা।" }
        ],
        "table": {
          "headers": ["জানা মাপ", "প্রস্তাবিত পদ্ধতি", "সূত্র"],
          "rows": [
            ["দুটি লম্ব বাহু [[a]], [[b]]", "লম্ব-ভূমি থেকে ক্ষেত্রফল", "[[K=ab/2]]"],
            ["বাহু [[b]], অতিভুজ [[c]], কোণ [[A]]", "ক্ষেত্রফল প্রকরণ (কোণ A)", "[[K=bc\\sin(A)/2]]"],
            ["বাহু [[a]], অতিভুজ [[c]], কোণ [[B]]", "ক্ষেত্রফল প্রকরণ (কোণ B)", "[[K=ac\\sin(B)/2]]"],
            ["অন্তর্ব্যাসার্ধ [[r]], অর্ধপরিসীমা [[s]]", "অর্ধপরিসীমা থেকে ক্ষেত্রফল", "[[K=rs]]"],
            ["অতিভুজ [[c]], লম্ব উচ্চতা [[h]]", "ক্ষেত্রফল প্রকরণ (উচ্চতা)", "[[K=ch/2]]"]
          ]
        },
        "imgAlt": "ক্ষেত্রফলের পাঁচটি সূত্র দেখানো পাঁচটি প্যানেল: K=ab/2, K=bc sin(A)/2, K=ac sin(B)/2, K=rs ও K=ch/2",
        "figcaption": "ক্ষেত্রফলের পাঁচটি সূত্র এবং প্রতিটির প্রয়োজনীয় মাপ।"
      },
      "sec-howto": {
        "h2": "সমকোণী ত্রিভুজের ক্ষেত্রফল ক্যালকুলেটর কীভাবে ব্যবহার করবেন",
        "blocks": [
          { "kind": "p", "text": "পাঁচটি মোডের যেকোনোটির জন্য এই ধাপগুলো অনুসরণ করুন। সঠিক মোড বেছে নেওয়াই অন্য সবকিছুর চেয়ে বেশি গুরুত্বপূর্ণ: মোড নির্ধারণ করে কোন সূত্র চলবে, তাই ভুল মোডে সঠিক সূত্র দিয়েও ভুল প্রশ্নের উত্তর পাবেন।" },
          { "kind": "h3", "text": "সম্পূর্ণ ধাপ-দেখানো: একটি 3-4-5 ত্রিভুজে পাঁচটি মোড" },
          { "kind": "p", "text": "দেওয়া আছে [[a=3]], [[b=4]], [[c=5]], সঙ্গে [[A\\approx36.87^\\circ]], [[B\\approx53.13^\\circ]], [[r=1]], [[s=6]] ও [[h=2.4]]; প্রতিটি মোডের কী দরকার ও কী ফেরত দেয়, তা এখানে। প্রতিটি মোড [[[\\boxed{K=6\\text{ square units}}]]] ফেরত দেয়।" }
        ],
        "steps": [
          "<strong>আগে থেকে জানা মাপগুলো চিহ্নিত করুন।</strong> বাহু, অতিভুজ, কোণ, অন্তর্ব্যাসার্ধ, অর্ধপরিসীমা বা উচ্চতার মধ্যে আসলে কোনগুলো আপনার হাতে আছে, তার তালিকা করুন।",
          "<strong>সেই মাপগুলোর সঙ্গে মিলিয়ে ক্যালকুলেটরের মোড নির্বাচন করুন।</strong> লম্ব-ভূমি থেকে ক্ষেত্রফল, ক্ষেত্রফল প্রকরণ (কোণ A), ক্ষেত্রফল প্রকরণ (কোণ B), অর্ধপরিসীমা থেকে ক্ষেত্রফল, অথবা ক্ষেত্রফল প্রকরণ (উচ্চতা)।",
          "<strong>প্রয়োজনীয় ইনপুট ঘরগুলোর লেবেল পড়ুন।</strong> প্রতিটি মোডে শুধু সেই ঘরগুলোই দেখায়, যা তার সূত্রের দরকার।",
          "<strong>যথাযথভাবে বাহু, অতিভুজ, কোণ, অন্তর্ব্যাসার্ধ, অর্ধপরিসীমা বা উচ্চতা চিহ্নিত করুন।</strong> এই নির্দেশিকার প্রতীক পদ্ধতি ব্যবহার করে প্রতিটি জানা মাপকে তার লেবেলের সঙ্গে মিলান।",
          "<strong>প্রথম প্রয়োজনীয় মাপটি দিন।</strong> উদাহরণস্বরূপ, লম্ব-ভূমি মোডে \"Leg a\"।",
          "<strong>বাকি মাপগুলো দিন।</strong> মানগুলো তাদের লেবেল যে ঘর বর্ণনা করে, সেই ঘরেই রাখুন।",
          "<strong>উপলব্ধ একক নির্বাচক ব্যবহার করে সামঞ্জস্যপূর্ণ একক বেছে নিন।</strong> গুণ করার আগে সব দৈর্ঘ্য-ইনপুটকে একটি একক পদ্ধতি ভাগ করে নিতে হবে।",
          "<strong>কোণ-ভিত্তিক মোডের জন্য সঠিক সূক্ষ্মকোণ দিন।</strong> এই ক্যালকুলেটর ডিগ্রিতে কোণ আশা করে। কোণ A মোডে কোণ [[A]] এবং কোণ B মোডে কোণ [[B]] দিন, কখনো সমকোণ নয়।",
          "<strong>পরীক্ষা করুন সব ইনপুট ধনাত্মক এবং বৈধ ত্রিভুজ বর্ণনা করে।</strong> দৈর্ঘ্যগুলো ধনাত্মক হতে হবে, এবং অতিভুজ প্রতিটি বাহুর চেয়ে বড় হতে হবে।",
          "<strong>হিসাব করুন Area-এ ক্লিক করুন।</strong> বোতামটি নির্বাচিত মোডের সূত্র চালায়।",
          "<strong>ক্ষেত্রফলের ফলাফল ও সমাধান ধাপ পর্যালোচনা করুন।</strong> ক্যালকুলেটর সূত্র, মান বসানো ও বর্গ এককে চূড়ান্ত ক্ষেত্রফল দেখায়।",
          "<strong>লেবেল যাচাই করতে লাইভ ত্রিভুজ চিত্র ব্যবহার করুন।</strong> নিশ্চিত করুন চিত্রের বাহু ও কোণের লেবেল আপনার উদ্দেশ্যের মাপের সঙ্গে মিলছে।",
          "<strong>নতুন হিসাব শুরু করতে রিসেট করুন ব্যবহার করুন।</strong> রিসেট করুন বোতাম সব ঘর মুছে দেয়, যাতে পরের হিসাব পরিষ্কারভাবে শুরু হয়।"
        ],
        "closingParagraphs": [
          "<strong>লম্ব-ভূমি থেকে ক্ষেত্রফল।</strong> \"Leg a\" = 3 ও \"Leg b\" = 4 দিন। সূত্র: [[K=ab/2]]। মান বসানো: [[K=(3\\times4)/2]]। ফল: 6 বর্গ একক।",
          "<strong>ক্ষেত্রফল প্রকরণ (কোণ A)।</strong> \"Leg b\" = 4, \"Hypotenuse c\" = 5, \"Angle A\" = 36.87 দিন। সূত্র: [[K=bc\\sin(A)/2]]। মান বসানো: [[K=(4\\times5\\times0.6)/2]]। ফল: 6 বর্গ একক।",
          "<strong>ক্ষেত্রফল প্রকরণ (কোণ B)।</strong> \"Leg a\" = 3, \"Hypotenuse c\" = 5, \"Angle B\" = 53.13 দিন। সূত্র: [[K=ac\\sin(B)/2]]। মান বসানো: [[K=(3\\times5\\times0.8)/2]]। ফল: 6 বর্গ একক।",
          "<strong>অর্ধপরিসীমা থেকে ক্ষেত্রফল।</strong> \"Inradius r\" = 1 ও \"Semiperimeter s\" = 6 দিন। সূত্র: [[K=rs]]। মান বসানো: [[K=1\\times6]]। ফল: 6 বর্গ একক।",
          "<strong>ক্ষেত্রফল প্রকরণ (উচ্চতা)।</strong> \"Hypotenuse c\" = 5 ও \"Altitude h\" = 2.4 দিন। সূত্র: [[K=ch/2]]। মান বসানো: [[K=(5\\times2.4)/2]]। ফল: 6 বর্গ একক।",
          "প্রতিটি মোড জানা মানের ভিন্ন ভিন্ন সেট ব্যবহার করে, এবং কোনোটিরই একই ইনপুট ঘর দরকার হয় না। ভাগ করা উত্তরটাই মূল কথা: পাঁচটি বর্ণনা, একটি ত্রিভুজ, একটি ক্ষেত্রফল।"
        ]
      },
      "sec-applications": {
        "h2": "সমকোণী ত্রিভুজের ক্ষেত্রফল গণনার বাস্তব প্রয়োগ",
        "blocks": [
          { "kind": "p", "text": "প্রতিটি উদাহরণে পরিস্থিতি, জানা মাপ, মানানসই ক্যালকুলেটর মোড, সেই মোড কেন মানানসই, সূত্র, ধাপে ধাপে মান বসানো, বর্গ এককে চূড়ান্ত উত্তর, সহজ ভাষায় ব্যাখ্যা, প্রয়োজনে যাচাইয়ের ধারণা এবং ত্রিভুজ মডেলের পেছনের অনুমান উল্লেখ করা হয়েছে।" },
          { "kind": "h3", "text": "উদাহরণ 1: ত্রিভুজাকার বাগানের ক্ষেত্রফল গণনা" },
          { "kind": "p", "text": "একটি বাগানে সমকোণী ত্রিভুজাকার রোপণ অংশ আছে, যার লম্ব বাহু 6 মি ও 8 মি। লম্ব-ভূমি থেকে ক্ষেত্রফল বেছে নিন, যা দুটি বাহু সরাসরি মাপা হলে স্বাভাবিক মানান: [[K=(6\\times8)/2]], [[[\\boxed{K=24\\text{ m}^2}]]]। অংশটি 24 বর্গমিটার রোপণ পৃষ্ঠতল ঢেকে রাখে। এতে ধরে নেওয়া হয়, বাগানের অংশটি সোজা কিনারাসহ সমকোণী ত্রিভুজ দিয়ে সঠিকভাবে উপস্থাপিত।" },
          { "kind": "h3", "text": "উদাহরণ 2: ত্রিভুজাকার প্লাইউড প্যানেল মাপা" },
          { "kind": "p", "text": "একজন ছুতার সমকোণী ত্রিভুজাকার প্যানেল কাটেন, যার বাহু 1.2 মি ও 0.8 মি। লম্ব-ভূমি থেকে ক্ষেত্রফল বেছে নিন: [[K=(1.2\\times0.8)/2]], [[K=0.96/2]], [[[\\boxed{K=0.48\\text{ m}^2}]]]। প্যানেলটি অর্ধ বর্গমিটারের সামান্য কম জায়গা ঢাকে, যা উপকরণের কভারেজ অনুমানে সাহায্য করে। এই জ্যামিতিক ক্ষেত্রফলে কাটার ছাড় ও উপকরণের অপচয় অন্তর্ভুক্ত নয়।" },
          { "kind": "h3", "text": "উদাহরণ 3: ত্রিভুজাকার পালের ক্ষেত্রফল নির্ণয়" },
          { "kind": "p", "text": "একটি ত্রিভুজাকার পালের অংশের লম্ব বাহু 5 মি ও 12 মি। লম্ব-ভূমি থেকে ক্ষেত্রফল বেছে নিন: [[K=(5\\times12)/2]], [[[\\boxed{K=30\\text{ m}^2}]]]। সূত্রটি ত্রিভুজাকার অংশের সমতল ক্ষেত্রফল দেয়, যা সেলাই ও বক্রতা বিবেচনার আগে কাপড়ের অনুমানে কাজে লাগে।" },
          { "kind": "h3", "text": "উদাহরণ 4: সমকোণী ত্রিভুজাকার জমির অংশ অনুমান" },
          { "kind": "p", "text": "জরিপে একটি সমকোণী ত্রিভুজাকার জমির অংশ চিহ্নিত হয়, যার লম্ব পাশ 30 মি ও 40 মি। লম্ব-ভূমি থেকে ক্ষেত্রফল বেছে নিন: [[K=(30\\times40)/2]], [[[\\boxed{K=600\\text{ m}^2}]]]। এটি নির্দিষ্ট ত্রিভুজাকার অংশের ক্ষেত্রফল, আশেপাশের সম্পত্তির মোট ক্ষেত্রফল নয়। বাস্তব জমির সীমানার জন্য একক ত্রিভুজ মডেলের চেয়ে বিস্তারিত জরিপ দরকার হতে পারে।" },
          { "kind": "h3", "text": "উদাহরণ 5: কোণ A ব্যবহার করে ছাদের ত্রিভুজাকার গেবলের ক্ষেত্রফল গণনা" },
          { "kind": "p", "text": "একটি সরলীকৃত ত্রিভুজাকার ছাদের অংশের [[b=6\\text{ m}]], [[c=10\\text{ m}]] ও [[A\\approx53.13^\\circ]]। ক্ষেত্রফল প্রকরণ (কোণ A) বেছে নিন, কারণ একটি বাহু, অতিভুজ ও অন্তর্ভুক্ত কোণই মাপা তথ্য। [[\\sin(53.13^\\circ)\\approx0.8]] হলে: [[K=(6\\times10\\times0.8)/2]], [[[\\boxed{K=24\\text{ m}^2}]]]। ফলাফলটি ত্রিভুজাকার প্রস্থচ্ছেদের ক্ষেত্রফল। বাস্তব ছাদের মোট পৃষ্ঠতলের ক্ষেত্রফল এর ত্রিমাত্রিক জ্যামিতি ও অন্যান্য ছাদের অংশের ওপর নির্ভর করে।" },
          { "kind": "h3", "text": "উদাহরণ 6: ত্রিভুজাকার শামিয়ানার ক্ষেত্রফল নির্ণয়" },
          { "kind": "p", "text": "একটি সমকোণী ত্রিভুজাকার শামিয়ানার অংশের [[b=4\\text{ m}]], [[c=5\\text{ m}]] ও [[A\\approx36.87^\\circ]]। ক্ষেত্রফল প্রকরণ (কোণ A) বেছে নিন: [[K=bc\\sin(A)/2]], এবং [[\\sin(36.87^\\circ)\\approx0.6]] হলে, [[K=(4\\times5\\times0.6)/2]], [[[\\boxed{K=6\\text{ m}^2}]]]। এতে ধরে নেওয়া হয় মাপগুলো একটি সমতল সমকোণী ত্রিভুজ বর্ণনা করে, যা কর্ণ বরাবর কাটা টানটান আয়তাকার শামিয়ানার ক্ষেত্রে খাটে।" },
          { "kind": "h3", "text": "উদাহরণ 7: কোণ B ব্যবহার করে ত্রিভুজাকার সাপোর্ট প্যানেলের ক্ষেত্রফল গণনা" },
          { "kind": "p", "text": "একটি সাপোর্ট প্যানেলের [[a=3\\text{ m}]], [[c=5\\text{ m}]] ও [[B\\approx53.13^\\circ]]। ক্ষেত্রফল প্রকরণ (কোণ B) বেছে নিন: [[K=(3\\times5\\times0.8)/2]], [[[\\boxed{K=6\\text{ m}^2}]]]। কোণ-ভিত্তিক সূত্রটি দুটি বাহু সরাসরি না দিয়েও ক্ষেত্রফল বের করে, যা তখন সাহায্য করে যখন দ্বিতীয় বাহু কখনো মাপা হয়নি।" },
          { "kind": "h3", "text": "উদাহরণ 8: ট্রাস অংশের ক্ষেত্রফল নির্ণয়" },
          { "kind": "p", "text": "একটি সমকোণী ত্রিভুজাকার ট্রাস অংশের [[a=5\\text{ m}]], [[c=13\\text{ m}]] ও [[B\\approx67.38^\\circ]]। ক্ষেত্রফল প্রকরণ (কোণ B) বেছে নিন। যেহেতু [[\\sin(67.38^\\circ)\\approx12/13]]: [[K=(5\\times13\\times(12/13))/2]], [[[\\boxed{K=30\\text{ m}^2}]]]। এটি ত্রিভুজাকার অংশের জ্যামিতিক ক্ষেত্রফল, কাঠামোর ভারবহন ক্ষমতার গণনা নয়।" },
          { "kind": "h3", "text": "উদাহরণ 9: অন্তর্ব্যাসার্ধ ও অর্ধপরিসীমা থেকে ক্ষেত্রফল গণনা" },
          { "kind": "p", "text": "[[r=1]] ও [[s=6]] সহ একটি 3-4-5 সমকোণী ত্রিভুজ ধরুন। অর্ধপরিসীমা থেকে ক্ষেত্রফল বেছে নিন: [[K=rs]], [[K=1\\times6]], [[[\\boxed{K=6\\text{ square units}}]]]। অন্তর্ব্যাসার্ধ ও অর্ধপরিসীমা একটি বিকল্প পথ দেয়, যা দুটি বাহুকে কখনো গুণ করে না, তবু একই উত্তরে পৌঁছায়।" },
          { "kind": "h3", "text": "উদাহরণ 10: 5-12-13 ত্রিভুজাকার প্লটের ক্ষেত্রফল নির্ণয়" },
          { "kind": "p", "text": "একটি সমকোণী ত্রিভুজাকার প্লটের বাহু [[a=5]], [[b=12]], [[c=13]]। অর্ধপরিসীমা থেকে ক্ষেত্রফল বেছে নিন। অর্ধপরিসীমা: [[s=(5+12+13)/2=15]]। অন্তর্ব্যাসার্ধ: [[r=(5+12-13)/2=2]]। ক্ষেত্রফল: [[K=2\\times15]], [[[\\boxed{K=30\\text{ square units}}]]]। লম্ব-ভূমি সূত্র দিয়ে যাচাই করুন: [[K=(5\\times12)/2=30]]। দুটি পদ্ধতিই মেলে, কারণ দুটোই একই প্লট বর্ণনা করে।" },
          { "kind": "h3", "text": "উদাহরণ 11: উচ্চতা থেকে ত্রিভুজাকার প্যানেলের ক্ষেত্রফল অনুমান" },
          { "kind": "p", "text": "একটি ত্রিভুজাকার প্যানেলকে সমকোণী ত্রিভুজ দিয়ে উপস্থাপন করা হয়েছে, যার অতিভুজ 10 মি এবং অতিভুজের ওপর লম্ব উচ্চতা 4.8 মি। ক্ষেত্রফল প্রকরণ (উচ্চতা) বেছে নিন: [[K=ch/2]], [[K=(10\\times4.8)/2]], [[[\\boxed{K=24\\text{ m}^2}]]]। উচ্চতাকে অতিভুজের ওপর লম্ব হতে হবে: শীর্ষ থেকে অতিভুজ পর্যন্ত অন্য যেকোনো রেখা লম্বা হবে এবং ক্ষেত্রফলকে বাড়িয়ে দেখাবে।" },
          { "kind": "h3", "text": "উদাহরণ 12: অতিভুজ ও উচ্চতা থেকে ত্রিভুজাকার অংশের ক্ষেত্রফল গণনা" },
          { "kind": "p", "text": "একটি সমকোণী ত্রিভুজাকার অংশের অতিভুজ 20 মি ও লম্ব উচ্চতা 9 মি। ক্ষেত্রফল প্রকরণ (উচ্চতা) বেছে নিন: [[K=(20\\times9)/2]], [[[\\boxed{K=90\\text{ m}^2}]]]। মাপগুলো যখন একই বৈধ সমকোণী ত্রিভুজ বর্ণনা করে, তখন এটি ত্রিভুজের ক্ষেত্রফল, যা এখানে সত্য: 9 মি অতিভুজের দৈর্ঘ্যের চেয়ে অনেক কম, যেমনটা লম্বের ক্ষেত্রে হতেই হবে।" },
          { "kind": "h3", "text": "বাস্তব উদাহরণের তুলনা" }
        ],
        "table": {
          "headers": ["পরিস্থিতি", "জানা মান", "ক্যালকুলেটর মোড", "সূত্র", "চূড়ান্ত ক্ষেত্রফল", "ব্যাখ্যা"],
          "rows": [
            ["বাগানের বেড", "বাহু 6 মি, 8 মি", "লম্ব-ভূমি থেকে ক্ষেত্রফল", "[[K=ab/2]]", "24 m²", "রোপণ পৃষ্ঠতল"],
            ["প্লাইউড প্যানেল", "বাহু 1.2 মি, 0.8 মি", "লম্ব-ভূমি থেকে ক্ষেত্রফল", "[[K=ab/2]]", "0.48 m²", "উপকরণ কভারেজ"],
            ["পাল", "বাহু 5 মি, 12 মি", "লম্ব-ভূমি থেকে ক্ষেত্রফল", "[[K=ab/2]]", "30 m²", "সমতল কাপড়ের ক্ষেত্রফল"],
            ["জমির অংশ", "বাহু 30 মি, 40 মি", "লম্ব-ভূমি থেকে ক্ষেত্রফল", "[[K=ab/2]]", "600 m²", "অংশ, পুরো সম্পত্তি নয়"],
            ["ছাদের গেবল", "b 6 মি, c 10 মি, A 53.13°", "ক্ষেত্রফল প্রকরণ (কোণ A)", "[[K=bc\\sin(A)/2]]", "24 m²", "শুধু প্রস্থচ্ছেদ"],
            ["শামিয়ানা", "b 4 মি, c 5 মি, A 36.87°", "ক্ষেত্রফল প্রকরণ (কোণ A)", "[[K=bc\\sin(A)/2]]", "6 m²", "সমতল কাপড়ের ক্ষেত্রফল"],
            ["সাপোর্ট প্যানেল", "a 3 মি, c 5 মি, B 53.13°", "ক্ষেত্রফল প্রকরণ (কোণ B)", "[[K=ac\\sin(B)/2]]", "6 m²", "দ্বিতীয় বাহু দরকার নেই"],
            ["ট্রাস অংশ", "a 5 মি, c 13 মি, B 67.38°", "ক্ষেত্রফল প্রকরণ (কোণ B)", "[[K=ac\\sin(B)/2]]", "30 m²", "জ্যামিতি, ভারবহন নয়"],
            ["3-4-5 ত্রিভুজ", "r 1, s 6", "অর্ধপরিসীমা থেকে ক্ষেত্রফল", "[[K=rs]]", "6 বর্গ একক", "ক্ষেত্রফলের অন্তর্বৃত্ত-দৃষ্টি"],
            ["5-12-13 প্লট", "r 2, s 15", "অর্ধপরিসীমা থেকে ক্ষেত্রফল", "[[K=rs]]", "30 বর্গ একক", "লম্ব-ভূমি যাচাইয়ের সঙ্গে মেলে"],
            ["ত্রিভুজাকার প্যানেল", "c 10 মি, h 4.8 মি", "ক্ষেত্রফল প্রকরণ (উচ্চতা)", "[[K=ch/2]]", "24 m²", "উচ্চতাকে লম্ব হতেই হবে"],
            ["ত্রিভুজাকার অংশ", "c 20 মি, h 9 মি", "ক্ষেত্রফল প্রকরণ (উচ্চতা)", "[[K=ch/2]]", "90 m²", "বৈধ সমকোণী ত্রিভুজ"]
          ]
        },
        "imgAlt": "চার প্যানেল: বাগান 24, গেবল 24, ট্রাস 30, প্যানেল 24 বর্গমিটার, প্রতিটিতে ত্রিভুজসহ",
        "figcaption": "বাস্তব জগতের চারটি গণনা: বাগান, ছাদের গেবল, ট্রাস ও প্যানেল, প্রতিটিতে নিজ নিজ ত্রিভুজ ও চূড়ান্ত ক্ষেত্রফল।"
      },
      "sec-verify": {
        "h2": "সমকোণী ত্রিভুজের ক্ষেত্রফল কীভাবে যাচাই করবেন",
        "blocks": [
          { "kind": "p", "text": "একটি 3-4-5 ত্রিভুজ, পাঁচটি পদ্ধতি, একটি উত্তর। দেওয়া আছে [[a=3]], [[b=4]], [[c=5]], সঙ্গে [[A\\approx36.87^\\circ]], [[B\\approx53.13^\\circ]], [[r=1]], [[s=6]] ও [[h=ab/c=12/5=2.4]]:" },
          { "kind": "p", "text": "<strong>পদ্ধতি 1, লম্ব-ভূমি:</strong> [[K=(3\\times4)/2=6]]। <strong>পদ্ধতি 2, কোণ A:</strong> [[K=(4\\times5\\times0.6)/2=6]]। <strong>পদ্ধতি 3, কোণ B:</strong> [[K=(3\\times5\\times0.8)/2=6]]। <strong>পদ্ধতি 4, অন্তর্ব্যাসার্ধ ও অর্ধপরিসীমা:</strong> [[K=1\\times6=6]]। <strong>পদ্ধতি 5, অতিভুজ ও উচ্চতা:</strong> [[K=(5\\times2.4)/2=6]]।" },
          { "kind": "p", "text": "একই জ্যামিতিক রাশির পাঁচটি গাণিতিক পথ এগুলো। ত্রিভুজের ক্ষেত্রফল কোন সঠিক সূত্র ব্যবহার করা হলো তার ওপর নির্ভর করে না; এটি ত্রিভুজের বাস্তব জ্যামিতির ওপর নির্ভর করে। যখনই দুটি স্বাধীন পদ্ধতি আপনার ত্রিভুজে একমত হয়, আপনি সংখ্যাটিকে বিশ্বাস করতে পারেন।" }
        ],
        "imgAlt": "পাঁচটি প্যানেলসহ 3-4-5 ত্রিভুজ: লম্ব-ভূমি, কোণ A, কোণ B, অন্তর্ব্যাসার্ধ-অর্ধপরিসীমা, উচ্চতা, সবাই ক্ষেত্রফল 6 দেয়",
        "figcaption": "ভিন্ন ইনপুট, ভিন্ন সূত্র, একই ত্রিভুজের ক্ষেত্রফল।"
      },
      "sec-mistakes": {
        "h2": "সমকোণী ত্রিভুজের ক্ষেত্রফল গণনায় সাধারণ ভুল",
        "blocks": [
          { "kind": "p", "text": "ক্ষেত্রফলের ভুল কদাচিৎ পাটিগণিতের ব্যর্থতা। এগুলো লেবেলিং ব্যর্থতা, সূত্রের গোলমাল ও এককের ভুল। নিচের আঠারোটি এই পৃষ্ঠার ক্যালকুলেটর যে প্রায় প্রতিটি ভুল উত্তর দিতে পারে, তা কভার করে।" },
          { "kind": "h3", "text": "1. দুই দিয়ে ভাগ করতে ভুলে যাওয়া" },
          { "kind": "p", "text": "অর্ধেক না করে বাহু দুটিকে গুণ করলে ত্রিভুজের নয়, আয়তক্ষেত্রের ক্ষেত্রফল পাওয়া যায়। বাহু 3 ও 4 হলে [[3\\times4=12]] ভুল; [[(3\\times4)/2=6]] ঠিক। সমাধান: প্রতিটি লম্ব-ভূমি বা ভূমি-উচ্চতা গণনা দুই দিয়ে ভাগ করে শেষ করুন।" },
          { "kind": "h3", "text": "2. অতিভুজকে লম্ব বাহুগুলোর একটি হিসেবে ব্যবহার করা" },
          { "kind": "p", "text": "অতিভুজ কখনো বাহু নয়। অন্য বাহু 3-এর সঙ্গে c = 5-কে বাহু হিসেবে দিলে 6-এর বদলে [[(5\\times3)/2=7.5]] পাওয়া যায়। সমাধান: প্রথমে সবচেয়ে লম্বা বাহু চিহ্নিত করুন এবং অতিভুজের ঘরের জন্য সংরক্ষণ করুন।" },
          { "kind": "h3", "text": "3. কোণ A-কে ভুল বাহুর সঙ্গে জোড়া দেওয়া" },
          { "kind": "p", "text": "কোণ A সূত্রে বাহু [[b]] দরকার, যে বাহু অতিভুজের সঙ্গে কোণ [[A]] ঘেরে। তার বদলে বাহু [[a]] দিলে ভুল গুণফল বের হয়। সমাধান: মান দেওয়ার আগে পরীক্ষা করুন কোণ [[A]] বাহু [[b]] ও [[c]]-এর মধ্যে আছে কিনা।" },
          { "kind": "h3", "text": "4. কোণ B-কে ভুল বাহুর সঙ্গে জোড়া দেওয়া" },
          { "kind": "p", "text": "প্রতিবিম্ব-ছবি: কোণ B সূত্রে বাহু [[a]] দরকার, বাহু [[b]] নয়। সমাধান: নিশ্চিত করুন কোণ [[B]] বাহু [[a]] ও [[c]]-এর মধ্যে আছে।" },
          { "kind": "h3", "text": "5. সাইন সূত্রে ভুল অন্তর্ভুক্ত কোণ ব্যবহার করা" },
          { "kind": "p", "text": "53.13 ডিগ্রির জায়গায় 36.87 ডিগ্রি দেওয়া, বা উল্টোটা, দেখতে বিশ্বাসযোগ্য কিন্তু ভুল ক্ষেত্রফল দেয়। সমাধান: কোণকে বাহু-জোড়ার সঙ্গে মিলান: কোণ A যায় [[b]] ও [[c]]-এর সঙ্গে, কোণ B [[a]] ও [[c]]-এর সঙ্গে।" },
          { "kind": "h3", "text": "6. উচ্চতাকে বাহুর সঙ্গে গুলিয়ে ফেলা" },
          { "kind": "p", "text": "উচ্চতা [[h]] সমকোণের শীর্ষ থেকে অতিভুজে নেমে আসে; বাহু ত্রিভুজের কিনারা বরাবর থাকে। বাহুকে উচ্চতা হিসেবে দিলে উচ্চতা বাড়িয়ে দেখানো হয়। সমাধান: উচ্চতাকে সমকোণ-চিহ্নসহ অতিভুজের ওপর পড়তেই হবে।" },
          { "kind": "h3", "text": "7. লম্ব নয় এমন রেখাকে উচ্চতা হিসেবে ব্যবহার করা" },
          { "kind": "p", "text": "শীর্ষ থেকে অতিভুজ পর্যন্ত যেকোনো অ-লম্ব রেখা সত্যিকারের উচ্চতার চেয়ে লম্বা, ফলে ক্ষেত্রফল বেশি বের হয়। সমাধান: উচ্চতা মোড ব্যবহারের আগে লম্বত্ব যাচাই করুন, গঠন দিয়ে বা [[h=ab/c]] পরীক্ষা দিয়ে।" },
          { "kind": "h3", "text": "8. অন্তর্ব্যাসার্ধকে পরিব্যাসার্ধের সঙ্গে গুলিয়ে ফেলা" },
          { "kind": "p", "text": "অন্তর্ব্যাসার্ধ ভেতর থেকে বাহুগুলোকে স্পর্শ করে; পরিব্যাসার্ধ বাইরে থেকে শীর্ষগুলোতে পৌঁছায়। সমকোণী ত্রিভুজে পরিব্যাসার্ধ [[c/2]], যা সবসময় অন্তর্ব্যাসার্ধের চেয়ে বড়। [[K=rs]] সূত্রে পরিব্যাসার্ধ দিলে ক্ষেত্রফল ফুলে যায়। সমাধান: সমকোণী ত্রিভুজের অন্তর্ব্যাসার্ধের জন্য [[r=(a+b-c)/2]] ব্যবহার করুন।" },
          { "kind": "h3", "text": "9. অর্ধপরিসীমার বদলে পূর্ণ পরিসীমা ব্যবহার করা" },
          { "kind": "p", "text": "সূত্রটি [[K=rs]], যেখানে [[s]] অর্ধপরিসীমা। 3-4-5 ত্রিভুজে 6-এর বদলে পূর্ণ পরিসীমা 12 দিলে 6-এর বদলে 12 পাওয়া যায়। সমাধান: [[r]] দিয়ে গুণ করার আগে পরিসীমাকে অর্ধেক করুন।" },
          { "kind": "h3", "text": "10. অসামঞ্জস্যপূর্ণ মাপের একক মেশানো" },
          { "kind": "p", "text": "3 মিটার ও 40 সেন্টিমিটার বাহু একটি সূত্রে 3 ও 40 নয়। সমাধান: গণনার আগে প্রতিটি ইনপুটকে একটি এককে রূপান্তর করুন, যেমন 3 মি ও 0.4 মি।" },
          { "kind": "h3", "text": "11. বর্গমিটারকে মিটার হিসেবে জানানো" },
          { "kind": "p", "text": "6 m² ক্ষেত্রফল 6 m নয়। বর্গ একক উত্তরের অর্থের অংশ: এটি বলে কত পৃষ্ঠতল, কত দৈর্ঘ্য নয়। সমাধান: সংখ্যার সঙ্গে সবসময় বর্গ একক লিখুন।" },
          { "kind": "h3", "text": "12. সাইনের মান খুব আগে বৃত্তায়ন করা" },
          { "kind": "p", "text": "সত্য মান 0.6000 হলে সাইনের জন্য 0.6 ব্যবহার ক্ষতিকর নয়, কিন্তু গণনার মাঝে 0.9231-কে 0.9-এ বৃত্তায়ন করলে ফলাফল সরে যায়। সমাধান: প্রতিটি ধাপে পূর্ণ নির্ভুলতা রাখুন এবং শুধু চূড়ান্ত উত্তর বৃত্তায়ন করুন।" },
          { "kind": "h3", "text": "13. সূক্ষ্মকোণের ঘরে সমকোণ বা অবৈধ কোণ দেওয়া" },
          { "kind": "p", "text": "কোণ মোডগুলো 0 থেকে 90 ডিগ্রির মধ্যে সূক্ষ্মকোণ আশা করে। 90 ডিগ্রি বা ঋণাত্মক মান দিলে এই মোডগুলোর জন্য কোনো বৈধ ইনপুট বর্ণিত হয় না। সমাধান: ত্রিভুজের আসল সূক্ষ্মকোণটি ডিগ্রিতে দিন।" },
          { "kind": "h3", "text": "14. ধরে নেওয়া যে পাঁচটি মোডের একই মাপ দরকার" },
          { "kind": "p", "text": "প্রতিটি মোড ভিন্ন ভিন্ন ইনপুটের সেট চায়: লম্ব-ভূমি মোডের দুটি বাহু দরকার, কোণ A মোডের একটি বাহু, অতিভুজ ও একটি কোণ দরকার, আর অর্ধপরিসীমা মোডের একটি অন্তর্ব্যাসার্ধ ও একটি অর্ধপরিসীমা দরকার। সমাধান: নির্বাচিত মোডের ঘরের লেবেলগুলো পড়ুন।" },
          { "kind": "h3", "text": "15. ধরে নেওয়া যে বড় পরিসীমা মানেই আনুপাতিকভাবে বড় ক্ষেত্রফল" },
          { "kind": "p", "text": "পরিসীমা ও ক্ষেত্রফল ভিন্নভাবে স্কেল করে: সব বাহু দ্বিগুণ করলে ক্ষেত্রফল চারগুণ হয়। বড় পরিসীমার ত্রিভুজের ক্ষেত্রফল আরও ছোটও হতে পারে, যদি তা লম্বা ও সরু হয়। সমাধান: ক্ষেত্রফলের সূত্র দিয়ে ক্ষেত্রফল তুলনা করুন, কখনো পরিসীমা দিয়ে নয়।" },
          { "kind": "h3", "text": "16. ভুলে যাওয়া যে একই ক্ষেত্রফল একাধিকভাবে গণনা করা যায়" },
          { "kind": "p", "text": "প্রতিটি পদ্ধতিকে আলাদা তথ্য হিসেবে ধরলে অন্তর্নিহিত যাচাই হারিয়ে যায়: দুটি পদ্ধতি অমিল হলে ইনপুট বা মোড পছন্দে কিছু ভুল আছে। সমাধান: দ্বিতীয় পদ্ধতি চালান এবং যেকোনো অমিলের তদন্ত করুন।" },
          { "kind": "h3", "text": "17. এমন বাহুর দৈর্ঘ্য দেওয়া, যা উদ্দিষ্ট ত্রিভুজ বর্ণনা করতে পারে না" },
          { "kind": "p", "text": "যে বাহুগুলো পিথাগোরাস পরীক্ষায় ব্যর্থ হয়, যেমন 2, 3 ও 10, সেগুলো কোনো সমকোণী ত্রিভুজই বর্ণনা করে না। সমাধান: সেই বাহুগুলো থেকে তৈরি যেকোনো ক্ষেত্রফলে বিশ্বাস করার আগে [[a^2+b^2=c^2]] যাচাই করুন।" },
          { "kind": "h3", "text": "18. অ-সমকোণী ত্রিভুজে সমকোণী ত্রিভুজের অন্তর্ব্যাসার্ধের সংক্ষিপ্ত পথ ব্যবহার করা" },
          { "kind": "p", "text": "[[r=(a+b-c)/2]] সূত্রটি 90-ডিগ্রি জ্যামিতি থেকে ব্যুৎপন্ন। একে সূক্ষ্মকোণী বা স্থূলকোণী ত্রিভুজে প্রয়োগ করলে অর্থহীন অন্তর্ব্যাসার্ধ পাওয়া যায়। সমাধান: এই সংক্ষিপ্ত পথ শুধু তখনই ব্যবহার করুন, যখন ত্রিভুজ সমকোণী নিশ্চিত।" },
          { "kind": "h3", "text": "ভুল বনাম সঠিক: একটি সুনির্দিষ্ট উদাহরণ" },
          { "kind": "p", "text": "দেওয়া আছে [[a=3]] ও [[b=4]]; ভুল গণনা অর্ধেক করা বাদ দেয়: [[K=3\\times4=12]]। এটি সংশ্লিষ্ট 3-বাই-4 আয়তক্ষেত্রের ক্ষেত্রফল, সমকোণী ত্রিভুজের নয়। সঠিক গণনা [[K=(3\\times4)/2=6]]। ত্রিভুজ আয়তক্ষেত্রের অর্ধেক দখল করে, তাই দুই দিয়ে ভাগই আয়তক্ষেত্রের উত্তরকে ত্রিভুজের উত্তরে রূপ দেয়।" }
        ]
      },
      "sec-validate": {
        "h2": "আপনার ক্ষেত্রফলের ফলাফল বৈধ কিনা কীভাবে পরীক্ষা করবেন",
        "blocks": [
          { "kind": "p", "text": "ছয়টি পরীক্ষা পৃষ্ঠা ছাড়ার আগেই বেশিরভাগ অবৈধ ফলাফল ধরে ফেলে।" },
          { "kind": "h3", "text": "পরীক্ষা 1: ধনাত্মক মাপ" },
          { "kind": "p", "text": "সব প্রয়োজনীয় দৈর্ঘ্য ধনাত্মক হতে হবে: [[a>0]], [[b>0]], [[c>0]]। অন্তর্ব্যাসার্ধ মোডের জন্য [[r>0]] ও [[s>0]], এবং উচ্চতাও ধনাত্মক হতে হবে। শূন্য বা ঋণাত্মক ইনপুট কোনো ত্রিভুজ বর্ণনা করে না।" },
          { "kind": "h3", "text": "পরীক্ষা 2: বৈধ ত্রিভুজের বাহুর দৈর্ঘ্য" },
          { "kind": "p", "text": "সমকোণী ত্রিভুজের জন্য [[a^2+b^2=c^2]] খাটতেই হবে, এবং অতিভুজ প্রতিটি বাহুর চেয়ে লম্বা হতে হবে। বাহুগুলো এই পরীক্ষায় ব্যর্থ হলে ইনপুটগুলো অসামঞ্জস্যপূর্ণ এবং ক্ষেত্রফল অর্থহীন।" },
          { "kind": "h3", "text": "পরীক্ষা 3: সঠিক কোণ-বাহু জোড়া" },
          { "kind": "p", "text": "অন্তর্ভুক্ত-কোণ সূত্রে কোণ [[A]] বাহু [[b]] ও [[c]]-এর সঙ্গে জোড়া বাঁধে; কোণ [[B]] বাহু [[a]] ও [[c]]-এর সঙ্গে। কোণ-ভিত্তিক ফলাফল গ্রহণের আগে জোড়া নিশ্চিত করুন।" },
          { "kind": "h3", "text": "পরীক্ষা 4: সঠিক উচ্চতা" },
          { "kind": "p", "text": "উচ্চতা [[h]]-কে অতিভুজ [[c]]-এর ওপর লম্ব হতে হবে। একটি দ্রুত যুক্তি-পরীক্ষা: উচ্চতা সবসময় অতিভুজের চেয়ে ছোট এবং প্রতিটি বাহুর চেয়ে ছোট।" },
          { "kind": "h3", "text": "পরীক্ষা 5: সঠিক ক্ষেত্রফলের একক" },
          { "kind": "p", "text": "ইনপুট দৈর্ঘ্য মিটারে হলে ক্ষেত্রফল বর্গমিটারে হতে হবে; সেন্টিমিটার দিলে বর্গসেন্টিমিটার। উত্তরের একক ইনপুট এককের বর্গ, কখনো ইনপুট একক নিজে নয়।" },
          { "kind": "h3", "text": "পরীক্ষা 6: অন্য পদ্ধতি দিয়ে ক্রস-চেক" },
          { "kind": "p", "text": "লম্ব-ভূমি সূত্রের সঙ্গে অর্ধপরিসীমা সূত্র তুলনা করতে 3-4-5 ত্রিভুজ ব্যবহার করুন: [[(3\\times4)/2=6]] ও [[1\\times6=6]]। দুটোকেই 6 বর্গ একক দিতে হবে। কোণ-ভিত্তিক গণনায় ছোট অমিল বৃত্তায়িত কোণের মাপ বা বৃত্তায়িত ত্রিকোণমিতিক মান থেকে আসতে পারে; বড় অমিল বাস্তব ভুলের সংকেত। এই নির্দেশিকা ক্যালকুলেটরের জন্য কোনো নির্ভুলতার সহনশীলতা বা নির্ভুলতার নিশ্চয়তা ঘোষণা করে না: পরীক্ষাটি সামঞ্জস্য নিয়ে, প্রতিশ্রুত নির্ভুলতা নিয়ে নয়।" }
        ]
      },
      "sec-related": {
        "h2": "সম্পর্কিত সমকোণী ত্রিভুজ ক্যালকুলেটর দেখুন",
        "blocks": []
      },
      "sec-conclusion": {
        "h2": "একটি ত্রিভুজ, পাঁচটি পদ্ধতি, একটি ক্ষেত্রফল",
        "blocks": [
          { "kind": "p", "text": "এই পৃষ্ঠার প্রতিটি পদ্ধতি একই প্রশ্নের উত্তর দেয় ভিন্ন ভিন্ন সূচনাবিন্দু থেকে। দুটি লম্ব বাহু থাকলে লম্ব-ভূমি, অন্তর্ভুক্ত কোণ থাকলে সাইন, অন্তর্বৃত্ত দৃষ্টিতে থাকলে অন্তর্ব্যাসার্ধ ও অর্ধপরিসীমা, অতিভুজ ও তার উচ্চতা জানা থাকলে উচ্চতা। মোডকে আপনার মাপের সঙ্গে মিলান, সামঞ্জস্যপূর্ণ এককসহ সঠিক ঘরে মান দিন এবং পাটিগণিত ক্যালকুলেটরের হাতে ছেড়ে দিন। তারপর দ্বিতীয় পদ্ধতি দিয়ে যাচাই করুন: একই সংখ্যায় দুটি পথই জ্যামিতি ঠিক থাকার সবচেয়ে নিশ্চিত লক্ষণ।" }
        ]
      }
    },
    "faqs": [
      { "question": "সমকোণী ত্রিভুজের ক্ষেত্রফলের সূত্র কী?", "answer": "আদর্শ সূত্র K = ab/2, যেখানে a ও b দুটি লম্ব বাহু। অন্যান্য জানা মাপের জন্য চারটি সমতুল্য পদ্ধতি আছে: K = bc sin(A)/2, K = ac sin(B)/2, K = rs (অন্তর্ব্যাসার্ধ গুণ অর্ধপরিসীমা) এবং K = ch/2 (অতিভুজ গুণ উচ্চতা, দুই দিয়ে ভাগ)।" },
      { "question": "ত্রিভুজের ক্ষেত্রফল গণনায় দুই দিয়ে ভাগ কেন করা হয়?", "answer": "দুটি অভিন্ন সমকোণী ত্রিভুজ তাদের অতিভুজ বরাবর জোড়া লেগে ab ক্ষেত্রফলের একটি আয়তক্ষেত্র তৈরি করে। একটি ত্রিভুজ সেই আয়তক্ষেত্রের ঠিক অর্ধেক, তাই ক্ষেত্রফল ab/2। দুই দিয়ে ভাগ করা জ্যামিতিক, খেয়ালখুশি নয়, এবং এই পৃষ্ঠার প্রতিটি ক্ষেত্রফল পদ্ধতিতে এটি দেখা যায়।" },
      { "question": "অতিভুজ না জেনে কি ক্ষেত্রফল গণনা করা যায়?", "answer": "হ্যাঁ। লম্ব-ভূমি সূত্র K = ab/2-এ অতিভুজের দরকার নেই, আর অন্তর্ব্যাসার্ধ-অর্ধপরিসীমা সূত্র K = rs-এও নেই। অতিভুজ শুধু কোণ-ভিত্তিক মোড ও উচ্চতা মোডের জন্য দরকার।" },
      { "question": "একটি বাহু ও একটি কোণ দিয়ে ক্ষেত্রফল কীভাবে বের করব?", "answer": "অন্তর্ভুক্ত-কোণ রূপ ব্যবহার করুন। বাহু b, অতিভুজ c ও কোণ A হলে ক্ষেত্রফল K = bc sin(A)/2। বাহু a, অতিভুজ c ও কোণ B হলে তা K = ac sin(B)/2। কোণ ডিগ্রিতে দিন এবং নিশ্চিত করুন এটি দুটি জানা বাহুর মধ্যবর্তী সূক্ষ্মকোণ।" },
      { "question": "কোণ-ভিত্তিক সূত্রে সাইন কেন ব্যবহার হয়?", "answer": "দুটি বাহু ও তাদের অন্তর্ভুক্ত কোণের সাধারণ সূত্র K = 1/2 xy sin(theta)। সাইন একটি বাহুর অন্যটির সাপেক্ষে লম্ব উপাংশ বের করে, যা কার্যকর উচ্চতা। বাহু b ও c দিয়ে ঘেরা কোণ A-এর জন্য এটি K = bc sin(A)/2 দেয়।" },
      { "question": "সমকোণী ত্রিভুজের অন্তর্ব্যাসার্ধ কী?", "answer": "অন্তর্ব্যাসার্ধ ত্রিভুজের ভেতরে অন্তর্লিখিত বৃত্তের ব্যাসার্ধ, যা তিনটি বাহুকে স্পর্শ করে। সমকোণী ত্রিভুজের জন্য এটি r = (a + b - c)/2 হিসেবে বের করা যায়। এটি পরিব্যাসার্ধ নয়, যা শীর্ষগুলোতে পৌঁছায় এবং সমকোণী ত্রিভুজে c/2-এর সমান।" },
      { "question": "পরিসীমা ও অর্ধপরিসীমার মধ্যে পার্থক্য কী?", "answer": "পরিসীমা মোট সীমানার দৈর্ঘ্য, a + b + c। অর্ধপরিসীমা তার অর্ধেক, s = (a + b + c)/2। ক্ষেত্রফলের সূত্র K = rs অর্ধপরিসীমা ব্যবহার করে; পূর্ণ পরিসীমা ব্যবহার করলে উত্তর দ্বিগুণ হবে।" },
      { "question": "অতিভুজ ও উচ্চতা দিয়ে ক্ষেত্রফল কীভাবে গণনা করব?", "answer": "K = ch/2 ব্যবহার করুন, যেখানে c অতিভুজ এবং h সমকোণের শীর্ষ থেকে অতিভুজের ওপর লম্ব উচ্চতা। উচ্চতাকে অতিভুজের সঙ্গে 90 ডিগ্রিতে মিলতে হবে; এটি বাহুগুলোর একটি নয়। শুধু বাহু দুটি জানা থাকলে প্রথমে h = ab/c দিয়ে উচ্চতা বের করুন।" },
      { "question": "পাঁচটি ক্ষেত্রফল পদ্ধতিই একই ফলাফল কেন দেয়?", "answer": "কারণ এগুলো একই জ্যামিতিক রাশির ভিন্ন ভিন্ন বীজগাণিতিক বর্ণনা। লম্ব-ভূমি সূত্র, সাইন-রূপ, অন্তর্ব্যাসার্ধ-অর্ধপরিসীমা গুণফল এবং অতিভুজ-উচ্চতা রূপ সবই একটি সামঞ্জস্যপূর্ণ সমকোণী ত্রিভুজের জন্য প্রমাণযোগ্যভাবে সমান। দুটি পদ্ধতির সম্মতিই ইনপুট ও মোড সঠিক থাকার সেরা যাচাই।" },
      { "question": "ক্ষেত্রফলের জন্য কোন একক ব্যবহার করব?", "answer": "ইনপুট দৈর্ঘ্যের সঙ্গে মিলিয়ে বর্গ একক: মিটার দিলে বর্গমিটার, সেন্টিমিটার দিলে বর্গসেন্টিমিটার। গণনার আগে সব ইনপুটকে একটি এককে রূপান্তর করুন এবং ফলাফল বর্গ এককসহ জানান, কখনো রৈখিক এককে নয়।" },
      { "question": "শুধু অতিভুজ জানা থাকলে কি ক্ষেত্রফল গণনা করা যায়?", "answer": "না। শুধু অতিভুজ একটি অনন্য সমকোণী ত্রিভুজ নির্ধারণ করে না, তাই ক্ষেত্রফল স্থির নয়। আরও অন্তত একটি স্বাধীন মাপ দরকার: একটি বাহু, একটি সূক্ষ্মকোণ, উচ্চতা, অথবা অর্ধপরিসীমাসহ অন্তর্ব্যাসার্ধ।" },
      { "question": "আমার ক্ষেত্রফলের গণনা সঠিক কিনা কীভাবে পরীক্ষা করব?", "answer": "একই ত্রিভুজে দ্বিতীয় পদ্ধতি চালিয়ে তুলনা করুন। 3-4-5 ত্রিভুজের জন্য লম্ব-ভূমি সূত্র দেয় (3 x 4)/2 = 6 এবং অর্ধপরিসীমা পদ্ধতি দেয় 1 x 6 = 6। এছাড়া যাচাই করুন বাহুগুলো পিথাগোরাসের উপপাদ্য মেনে চলে, কোণ-বাহু জোড়া নিশ্চিত করুন এবং পরীক্ষা করুন উচ্চতা অতিভুজের ওপর লম্ব।" }
    ],
    "faqHeading": "সচরাচর জিজ্ঞাসিত প্রশ্ন",
    "relatedHeading": "সম্পর্কিত সমকোণী ত্রিভুজ ক্যালকুলেটর দেখুন",
    "relatedItems": [
      "লম্ব-ভূমি থেকে সমকোণী ত্রিভুজের ক্ষেত্রফল ক্যালকুলেটর",
      "কোণ থেকে সমকোণী ত্রিভুজের ক্ষেত্রফল ক্যালকুলেটর",
      "অর্ধপরিসীমা থেকে সমকোণী ত্রিভুজের ক্ষেত্রফল ক্যালকুলেটর",
      "উচ্চতা থেকে সমকোণী ত্রিভুজের ক্ষেত্রফল ক্যালকুলেটর",
      "সমকোণী ত্রিভুজের পরিসীমা ও অর্ধপরিসীমা ক্যালকুলেটর",
      "সমকোণী ত্রিভুজের অন্তর্ব্যাসার্ধ ও পরিব্যাসার্ধ ক্যালকুলেটর",
      "সমকোণী ত্রিভুজের বাহু ক্যালকুলেটর"
    ]
  }
};
