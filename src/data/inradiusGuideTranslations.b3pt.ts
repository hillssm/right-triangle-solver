// inradiusGuideTranslations.bpt.ts: Right Triangle Inradius
// Guide (Page 38 of 45) translation.
export const INRADIUS_B3_PT = {
  "pt": {
      "meta": {
        "title": "Calculadora de Inraio de Triângulo Retângulo - Encontre r a Partir dos Lados",
        "description": "Use a calculadora de inraio de triângulo retângulo para encontrar r a partir dos catetos a e b e da hipotenusa c, com a fórmula, um exemplo resolvido 6-8-10 e verificações passo a passo.",
        "primaryKeyword": "Calculadora de Inraio de Triângulo Retângulo",
        "slug": "right-triangle-inradius-calculator",
      },
      "tocHeading": "Conteúdo do Guia",
      "tocItems": {
        "sec-intro": "Calculadora de Inraio de Triângulo Retângulo",
        "sec-calculate": "Calcular o Inraio de um Triângulo Retângulo",
        "sec-what-inradius": "O Que É o Inraio de um Triângulo Retângulo?",
        "sec-incircle": "O Que É um Círculo Inscrito na Geometria do Triângulo Retângulo?",
        "sec-incenter": "Entendendo o Incentro de um Triângulo Retângulo",
        "sec-formula": "Fórmula do Inraio do Triângulo Retângulo",
        "sec-why-formula-works": "Por Que a Fórmula do Inraio do Triângulo Retângulo Funciona?",
        "sec-how-to-use": "Como Usar a Calculadora de Inraio de Triângulo Retângulo",
        "sec-step-example": "Exemplo Passo a Passo para Encontrar o Inraio",
        "sec-diagram": "Diagrama do Círculo Inscrito do Triângulo Retângulo Explicado",
        "sec-area-semiperimeter": "Como Calcular o Inraio Usando Área e Semiperímetro",
        "sec-semiperimeter-relation": "Relação Entre Inraio e Semiperímetro",
        "sec-examples": "Exemplos Resolvidos de Cálculo do Inraio de Triângulo Retângulo",
        "sec-legs-known": "Como Calcular o Inraio Quando Apenas os Dois Catetos São Conhecidos",
        "sec-vs-circumradius": "Relação Entre Inraio e Circunraio",
        "sec-verify": "Como Verificar o Cálculo do Inraio",
        "sec-properties": "Propriedades Importantes do Inraio em um Triângulo Retângulo",
        "sec-mistakes": "Erros Comuns ao Calcular o Inraio",
        "sec-applications": "Aplicações Práticas do Inraio de Triângulo Retângulo",
        "sec-practice": "Problemas de Prática com Respostas",
        "sec-related": "Explore Calculadoras Relacionadas de Triângulo Retângulo",
        "sec-faq": "Perguntas Frequentes",
      },
      "sections": {
        "sec-intro": {
          "h2": "Calculadora de Inraio de Triângulo Retângulo",
          "blocks": [
            {
              "kind": "p",
              "text": "Encontre o inraio de um triângulo retângulo a partir dos seus dois catetos e da hipotenusa.",
            },
            {
              "kind": "p",
              "text": "O inraio é o raio do círculo inscrito, o círculo que cabe dentro do triângulo e toca os três lados. A calculadora precisa de três números: o cateto [[a]], o cateto [[b]] e a hipotenusa [[c]], onde [[a]] e [[b]] são os lados que formam o ângulo reto e [[c]] é o lado oposto a ele. A fórmula é [[r = \\frac{a+b-c}{2}]], onde [[r]] é o inraio. Ela soma os dois catetos, subtrai a hipotenusa e divide o resultado por dois.",
            },
            {
              "kind": "p",
              "text": "Por exemplo, um triângulo 6-8-10 dá [[r = \\frac{6+8-10}{2} = 2]]. Esse 2 é o raio do círculo dentro do triângulo, medido na mesma unidade que os lados. O círculo toca cada lado em exatamente um ponto, e o seu centro, o incentro, fica à mesma distância dos três lados.",
            },
          ],
        },
        "sec-calculate": {
          "h2": "Calcular o Inraio de um Triângulo Retângulo",
          "blocks": [
            {
              "kind": "p",
              "text": "A calculadora desta página tem três campos de entrada, um para cada lado do triângulo, e um resultado. Digite os três comprimentos dos lados, todos na mesma unidade, e depois clique em Calcular Inraio r. O resultado é um comprimento, o raio do círculo inscrito, dado nessa mesma unidade.",
            },
            {
              "kind": "p",
              "text": "O cateto a é o primeiro lado que forma o ângulo reto, e o cateto b é o segundo. Não importa qual cateto você chama de [[a]] e qual você chama de [[b]], porque a fórmula soma os dois. A hipotenusa [[c]] é o lado oposto ao ângulo reto, e deve ser o lado mais longo do triângulo. Se o número digitado para [[c]] for menor que um cateto, os três comprimentos não podem formar um triângulo retângulo, e o resultado não terá sentido.",
            },
            {
              "kind": "p",
              "text": "Mantenha as unidades iguais nos três campos. Se [[a]] e [[b]] estiverem em centímetros, [[c]] também deve estar em centímetros, e a resposta sai em centímetros. Leia a resposta como um raio, não como um diâmetro: um raio vai do centro do círculo até a sua borda, enquanto um diâmetro atravessa o círculo de um lado ao outro. Use Redefinir para limpar os campos antes de começar um novo problema.",
            },
          ],
        },
        "sec-what-inradius": {
          "h2": "O Que É o Inraio de um Triângulo Retângulo?",
          "blocks": [
            {
              "kind": "p",
              "text": "O inraio de um triângulo retângulo é o raio do seu círculo inscrito, o maior círculo que cabe dentro do triângulo. Imagine o triângulo ABC com o ângulo reto em C, o cateto AC chamado [[a]], o cateto BC chamado [[b]] e a hipotenusa AB chamada [[c]]. Agora desenhe o maior círculo que você conseguir dentro desse triângulo sem cruzar nenhum lado. Esse círculo toca os três lados, e o seu raio é o inraio, escrito [[r]].",
            },
            {
              "kind": "p",
              "text": "O centro do círculo inscrito é chamado de incentro, escrito [[I]]. O incentro fica à mesma distância perpendicular dos três lados, e essa distância é [[r]]. Cada raio traçado de [[I]] até um lado encontra esse lado em um ângulo reto, e é por isso que o círculo apenas toca o lado em vez de cruzá-lo. O círculo inscrito permanece dentro do triângulo porque cada ponto do círculo está a uma distância [[r]] ou menos de [[I]], e o próprio [[I]] está dentro do triângulo.",
            },
            {
              "kind": "p",
              "text": "Um exemplo pequeno torna a ideia concreta. Em um triângulo 3-4-5, o inraio é [[r = \\frac{3+4-5}{2} = 1]]. O círculo inscrito tem um raio de 1 unidade, então o seu centro fica a 1 unidade de cada lado. A <a href=\"/right-triangle-radius-calculator/\">calculadora de raio de triângulo retângulo</a> cobre os dois raios de um triângulo retângulo em uma página, se você quiser comparar o círculo inscrito com o círculo que passa pelos vértices.",
            },
          ],
          "image": {
            "src": "inradius-main-incircle.svg",
            "alt": "Triângulo retângulo ABC com o círculo inscrito dentro dele, centro I e raio r tocando os três lados",
            "caption": "Triângulo ABC com o seu círculo inscrito: o centro I fica a uma distância r de cada lado.",
          },
        },
        "sec-incircle": {
          "h2": "O Que É um Círculo Inscrito na Geometria do Triângulo Retângulo?",
          "blocks": [
            {
              "kind": "p",
              "text": "Um círculo inscrito é um círculo traçado inteiramente dentro de um triângulo de modo que ele toque, ou seja tangente a, os três lados. Cada lado do triângulo é uma reta tangente ao círculo: ele encontra o círculo em exatamente um ponto e não o atravessa. Esses três pontos de encontro são chamados de pontos de tangência, um em cada lado.",
            },
            {
              "kind": "p",
              "text": "O raio traçado do incentro até um ponto de tangência é sempre perpendicular a esse lado. Este é um fato geral sobre círculos: um raio até um ponto de tangência encontra a reta tangente em um ângulo reto. Como o incentro está à mesma distância dos três lados, os três raios até os três pontos de tangência têm todos o mesmo comprimento [[r]], então um único círculo se encaixa nos três lados ao mesmo tempo.",
            },
            {
              "kind": "p",
              "text": "Todo triângulo tem exatamente um círculo inscrito. As três bissetrizes dos ângulos de um triângulo se encontram em um ponto, o incentro, e a distância desse ponto até os lados fixa o raio. Um segundo círculo diferente não poderia tocar os três lados por dentro, porque o seu centro também teria de estar igualmente distante dos três lados, e só o incentro tem essa propriedade. Note que o círculo inscrito não é o círculo que passa pelos vértices: ele toca os lados por dentro e nunca alcança um vértice.",
            },
          ],
          "image": {
            "src": "inradius-tangency-points.svg",
            "alt": "Círculo inscrito tocando os três lados de um triângulo retângulo em três pontos de tangência com raios perpendiculares",
            "caption": "Três pontos de tangência: cada raio encontra o seu lado em 90 graus.",
          },
        },
        "sec-incenter": {
          "h2": "Entendendo o Incentro de um Triângulo Retângulo",
          "blocks": [
            {
              "kind": "p",
              "text": "O incentro de um triângulo é o ponto onde as suas três bissetrizes internas dos ângulos se encontram. Uma bissetriz de um ângulo é uma reta que divide um ângulo em duas metades iguais. Desenhe a bissetriz do ângulo A, a bissetriz do ângulo B e a bissetriz do ângulo C, e as três se cruzam em um único ponto. Esse ponto é o incentro [[I]], e é o centro do círculo inscrito.",
            },
            {
              "kind": "p",
              "text": "O incentro está igualmente distante dos três lados por causa de como as bissetrizes dos ângulos se comportam. Cada ponto sobre a bissetriz de um ângulo está à mesma distância dos dois lados que formam esse ângulo. Um ponto sobre duas bissetrizes ao mesmo tempo está, portanto, à mesma distância dos três lados, e o incentro fica sobre as três bissetrizes. Essa distância comum é o inraio [[r]], então o círculo com centro em [[I]] e raio [[r]] toca cada lado.",
            },
            {
              "kind": "p",
              "text": "Em um triângulo retângulo com o ângulo reto em C, o incentro fica ao longo da bissetriz do ângulo de 90 graus, que atravessa o canto em C na diagonal, a 45 graus de cada cateto. O incentro fica sempre dentro do triângulo, nunca sobre um lado nem fora dele, porque as três bissetrizes se encontram no interior. É por isso que o círculo inscrito cabe dentro do triângulo em vez de transbordar dele.",
            },
          ],
          "image": {
            "src": "inradius-angle-bisectors.svg",
            "alt": "Triângulo retângulo com as três bissetrizes internas dos ângulos se encontrando no incentro I",
            "caption": "As três bissetrizes dos ângulos se encontram em I, o incentro, a uma distância r de cada lado.",
          },
        },
        "sec-formula": {
          "h2": "Fórmula do Inraio do Triângulo Retângulo",
          "blocks": [
            {
              "kind": "p",
              "text": "A fórmula do inraio de um triângulo retângulo é curta o bastante para memorizar de relance:",
            },
            {
              "kind": "p",
              "text": "[[[r = \\frac{a+b-c}{2}]]]",
            },
            {
              "kind": "p",
              "text": "Aqui [[r]] é o inraio, [[a]] é o primeiro cateto, [[b]] é o segundo cateto e [[c]] é a hipotenusa. A fórmula funciona em três etapas, e cada etapa tem um significado claro.",
            },
            {
              "kind": "p",
              "text": "Etapa 1: some os dois catetos, [[a+b]]. Esse comprimento combinado é sempre maior que a hipotenusa, porque os dois catetos juntos se estendem mais do que a linha reta que atravessa o triângulo. Etapa 2: subtraia a hipotenusa, [[a+b-c]]. Isso deixa a quantidade pela qual os catetos excedem a hipotenusa. Etapa 3: divida por dois, [[r = \\frac{a+b-c}{2}]]. A divisão transforma esse comprimento restante no raio do círculo inscrito, e a seção de demonstração abaixo mostra por que dividir ao meio é exatamente o certo.",
            },
            {
              "kind": "p",
              "text": "Pegue o triângulo 6-8-10: [[a+b = 14]], depois [[14-10 = 4]], depois [[\\frac{4}{2} = 2]], então [[r = 2]]. A fórmula é específica para triângulos retângulos. Para um triângulo que não é retângulo, o inraio ainda é igual à área dividida pelo semiperímetro, [[r = \\frac{A}{s}]], mas o atalho [[r = \\frac{a+b-c}{2}]] não se aplica, porque a sua demonstração depende do ângulo reto.",
            },
          ],
          "image": {
            "src": "inradius-formula.svg",
            "alt": "Triângulo retângulo rotulado com catetos a e b, hipotenusa c, incentro I e inraio r ao lado da fórmula r igual a a mais b menos c sobre 2",
            "caption": "A fórmula usa os três lados: some os catetos, subtraia a hipotenusa, divida por dois.",
          },
        },
        "sec-why-formula-works": {
          "h2": "Por Que a Fórmula do Inraio do Triângulo Retângulo Funciona?",
          "blocks": [
            {
              "kind": "p",
              "text": "A fórmula vem de um fato simples sobre tangentes: os dois segmentos tangentes traçados do mesmo ponto fora de um círculo até esse círculo têm comprimentos iguais. Cada vértice do triângulo fica fora do círculo inscrito, e os dois lados que se encontram nesse vértice são ambos tangentes ao círculo. Então os dois segmentos tangentes de cada vértice são iguais.",
            },
            {
              "kind": "p",
              "text": "Comece no vértice do ângulo reto C. Os dois lados que se encontram em C são os catetos, e o círculo inscrito toca cada cateto em um ponto que está a uma distância [[r]] de C ao longo do lado. Isso acontece porque os dois raios do incentro até os catetos, junto com os dois segmentos curtos ao longo dos catetos, formam um quadrado de lado [[r]] no canto C. Então o segmento tangente de C ao longo de qualquer um dos catetos tem comprimento [[r]].",
            },
            {
              "kind": "p",
              "text": "Agora olhe para os outros dois vértices. Seja [[x]] o comprimento tangente a partir do vértice A ao longo dos lados, e seja [[y]] o comprimento tangente a partir do vértice B. No vértice A, uma tangente corre ao longo do cateto [[a]] em direção a C e a outra corre ao longo da hipotenusa em direção a B, então ambas têm comprimento [[x]]. No vértice B, as duas tangentes têm comprimento [[y]]. Os comprimentos dos lados são então construídos a partir dessas partes:",
            },
            {
              "kind": "p",
              "text": "[[[a = r + x]]]",
            },
            {
              "kind": "p",
              "text": "[[[b = r + y]]]",
            },
            {
              "kind": "p",
              "text": "[[[c = x + y]]]",
            },
            {
              "kind": "p",
              "text": "Some as duas primeiras equações: [[a+b = 2r+x+y]]. Como [[x+y = c]], isso se torna [[a+b = 2r+c]]. Reorganizando, obtemos [[2r = a+b-c]], e dividindo por dois obtemos a fórmula, [[r = \\frac{a+b-c}{2}]]. Cada passo segue da igualdade dos comprimentos das tangentes, então a fórmula não é um truque para memorizar, é um resultado direto de como o círculo inscrito toca os lados.",
            },
          ],
        },
        "sec-how-to-use": {
          "h2": "Como Usar a Calculadora de Inraio de Triângulo Retângulo",
          "blocks": [
            {
              "kind": "p",
              "text": "Quatorze passos curtos levam você de um triângulo rotulado a uma resposta verificada. Os passos, em ordem, são:",
            },
            {
              "kind": "steps",
              "steps": [
                "Identifique o triângulo retângulo no seu problema e confirme que ele tem um ângulo reto.",
                "Localize o vértice do ângulo reto, geralmente marcado com um pequeno quadrado, e chame-o de C.",
                "Identifique o primeiro cateto perpendicular a, um dos dois lados que formam o ângulo reto.",
                "Identifique o segundo cateto perpendicular b, o outro lado que forma o ângulo reto.",
                "Identifique a hipotenusa completa c, o lado oposto ao ângulo reto.",
                "Confirme que c é o lado mais longo. Se não for, rotule o diagrama novamente antes de continuar.",
                "Verifique que os três lados satisfazem o teorema de Pitágoras, [[a^2+b^2 = c^2]].",
                "Selecione unidades de medida compatíveis e converta qualquer medida que use uma unidade diferente.",
                "Digite o cateto a no campo Cateto a.",
                "Digite o cateto b no campo Cateto b.",
                "Digite a hipotenusa c no campo Hipotenusa c.",
                "Clique em Calcular Inraio r e leia o resultado.",
                "Verifique o resultado: ele deve ser positivo, estar na mesma unidade que os lados e ser menor que qualquer um dos catetos.",
                "Use Redefinir ao iniciar outro cálculo.",
              ],
            },
            {
              "kind": "p",
              "text": "Digitar o lado errado como [[c]] é o erro que causa mais problemas. Se um cateto for digitado no campo da hipotenusa, a fórmula subtrai um cateto em vez da hipotenusa, e a resposta fica grande demais. Sempre verifique se o valor no campo da hipotenusa é o maior dos três antes de clicar em Calcular.",
            },
          ],
        },
        "sec-step-example": {
          "h2": "Exemplo Passo a Passo para Encontrar o Inraio",
          "blocks": [
            {
              "kind": "p",
              "text": "Use o exemplo do início da página, [[a = 6]], [[b = 8]] e [[c = 10]]. Os cinco passos abaixo mostram todo o cálculo, sem pular nada.",
            },
            {
              "kind": "steps",
              "steps": [
                "Escreva a fórmula: [[r = \\frac{a+b-c}{2}]].",
                "Substitua os valores: [[r = \\frac{6+8-10}{2}]].",
                "Some os catetos: [[r = \\frac{14-10}{2}]].",
                "Subtraia a hipotenusa: [[r = \\frac{4}{2}]].",
                "Divida: [[r = 2]].",
              ],
            },
            {
              "kind": "p",
              "text": "A resposta 2 significa que o círculo inscrito tem um raio de 2 unidades, na mesma unidade que os lados. O seu centro fica a 2 unidades de cada lado, e o círculo toca cada lado em exatamente um ponto.",
            },
            {
              "kind": "p",
              "text": "Verifique se as medidas formam um triângulo retângulo antes de confiar na resposta: [[6^2+8^2 = 36+64 = 100 = 10^2]], então o teorema de Pitágoras vale e o triângulo é de fato retângulo. Uma segunda verificação usa área e semiperímetro, [[A = \\frac{6 \\times 8}{2} = 24]] e [[s = \\frac{6+8+10}{2} = 12]], dando [[r = \\frac{24}{12} = 2]], a mesma resposta por um caminho diferente.",
            },
          ],
          "image": {
            "src": "inradius-example-6-8-10.svg",
            "alt": "Exemplo resolvido com a igual a 6, b igual a 8, c igual a 10 e inraio r igual a 2, círculo inscrito tocando os três lados",
            "caption": "Exemplo resolvido: a = 6, b = 8, c = 10 dá r = 2, verificado por área e semiperímetro.",
          },
        },
        "sec-diagram": {
          "h2": "Diagrama do Círculo Inscrito do Triângulo Retângulo Explicado",
          "blocks": [
            {
              "kind": "p",
              "text": "O diagrama mostra o triângulo ABC com o ângulo reto em C. O lado AC é o cateto [[a]], o lado BC é o cateto [[b]] e o lado AB é a hipotenusa [[c]]. O ponto [[I]] marca o incentro dentro do triângulo, e um círculo com centro em [[I]] toca os três lados.",
            },
            {
              "kind": "p",
              "text": "Leia o diagrama nesta ordem. Comece em A, siga pelo cateto [[a]] até C, depois pelo cateto [[b]] até B, e volte pela hipotenusa de B até A. O círculo inscrito fica dentro desse contorno, tocando o cateto [[a]] em um ponto, o cateto [[b]] em um segundo ponto e a hipotenusa em um terceiro ponto. De [[I]], três segmentos curtos correm até esses três pontos, e cada um é um raio de comprimento [[r]].",
            },
            {
              "kind": "p",
              "text": "Cada raio encontra o seu lado em um ângulo reto, que é a marca de uma tangente: o lado apenas roça o círculo nesse ponto em vez de cortá-lo. Os três raios têm o mesmo comprimento, e é por isso que um círculo pode tocar os três lados ao mesmo tempo. O círculo não passa por nenhum vértice: os vértices ficam fora do círculo, e os segmentos tangentes de cada vértice até o círculo são os comprimentos [[r]], [[x]] e [[y]] usados na demonstração acima.",
            },
          ],
        },
        "sec-area-semiperimeter": {
          "h2": "Como Calcular o Inraio Usando Área e Semiperímetro",
          "blocks": [
            {
              "kind": "p",
              "text": "Há uma segunda maneira de encontrar o inraio, usando a área e o semiperímetro do triângulo:",
            },
            {
              "kind": "p",
              "text": "[[[r = \\frac{A}{s}]]]",
            },
            {
              "kind": "p",
              "text": "Aqui [[A]] é a área do triângulo e [[s]] é o semiperímetro, metade do perímetro. Em um triângulo retângulo, a área é metade do produto dos catetos, [[A = \\frac{ab}{2}]], porque os dois catetos agem como base e altura. O semiperímetro é [[s = \\frac{a+b+c}{2}]]. A <a href=\"/right-triangle-area-calculator/\">calculadora de área de triângulo retângulo</a> encontra [[A]] a partir dos dois catetos, e a <a href=\"/right-triangle-semiperimeter-calculator/\">calculadora de semiperímetro de triângulo retângulo</a> encontra [[s]] a partir dos três lados.",
            },
            {
              "kind": "p",
              "text": "Substituir as expressões do triângulo retângulo dá [[r = \\frac{ab/2}{(a+b+c)/2}]], e as metades se cancelam, deixando [[r = \\frac{ab}{a+b+c}]]. Esta é a fórmula equivalente em comprimentos dos lados do início do guia, e dá a mesma resposta que [[r = \\frac{a+b-c}{2}]] para todo triângulo retângulo válido, porque as duas expressões são iguais sempre que [[a^2+b^2 = c^2]].",
            },
            {
              "kind": "p",
              "text": "Use o triângulo 6-8-10 para ver os dois caminhos concordarem. A área é [[A = \\frac{6 \\times 8}{2} = 24]], e o semiperímetro é [[s = \\frac{6+8+10}{2} = 12]], então [[r = \\frac{24}{12} = 2]]. A fórmula padrão dá o mesmo resultado, [[r = \\frac{6+8-10}{2} = 2]]. A calculadora desta página usa a fórmula dos três lados, e o caminho da área é uma verificação independente útil.",
            },
          ],
          "image": {
            "src": "inradius-area-semiperimeter.svg",
            "alt": "Triângulo retângulo dividido em três triângulos menores que compartilham o incentro, mostrando que a área é igual a r vezes s",
            "caption": "Três triângulos que compartilham I: as suas áreas somam A = r vezes s.",
          },
        },
        "sec-semiperimeter-relation": {
          "h2": "Relação Entre Inraio e Semiperímetro",
          "blocks": [
            {
              "kind": "p",
              "text": "O semiperímetro [[s]] é metade do perímetro do triângulo:",
            },
            {
              "kind": "p",
              "text": "[[[s = \\frac{a+b+c}{2}]]]",
            },
            {
              "kind": "p",
              "text": "Ele é chamado de semiperímetro porque semi significa metade: o perímetro completo é [[P = a+b+c]], e o semiperímetro é a metade disso. Não confunda os dois. O perímetro é o comprimento total ao redor do triângulo, enquanto o semiperímetro é um valor auxiliar mais curto que aparece nas fórmulas de área e na fórmula do inraio [[r = \\frac{A}{s}]].",
            },
            {
              "kind": "p",
              "text": "O semiperímetro sozinho não pode determinar o inraio, porque a fórmula [[r = \\frac{A}{s}]] também precisa da área [[A]]. Dois triângulos podem ter o mesmo semiperímetro e áreas diferentes, e então os seus inraios também diferem. A área carrega a informação sobre a forma que o semiperímetro deixa de fora. Para o triângulo 6-8-10, [[s = 12]] e [[A = 24]], então [[r = \\frac{24}{12} = 2]]. Um triângulo diferente com [[s = 12]] mas uma área menor teria um inraio menor.",
            },
            {
              "kind": "p",
              "text": "Há uma maneira elegante de ver por que [[A = rs]] vale. Ligue o incentro [[I]] aos três vértices, dividindo o triângulo em três triângulos menores. Cada triângulo pequeno tem altura [[r]] e uma base igual a um lado do triângulo grande, então as suas áreas são [[\\frac{ra}{2}]], [[\\frac{rb}{2}]] e [[\\frac{rc}{2}]]. Somando-as, obtemos [[A = \\frac{r(a+b+c)}{2} = r \\times s]], pois [[s = \\frac{a+b+c}{2}]]. Dividindo por [[s]], obtemos [[r = \\frac{A}{s}]].",
            },
          ],
        },
        "sec-examples": {
          "h2": "Exemplos Resolvidos de Cálculo do Inraio de Triângulo Retângulo",
          "blocks": [
            {
              "kind": "h3",
              "text": "Exemplo 1: Triângulo Básico 3-4-5",
            },
            {
              "kind": "p",
              "text": "Dados [[a = 3]], [[b = 4]] e [[c = 5]], a fórmula dá [[r = \\frac{3+4-5}{2} = \\frac{2}{2} = 1]]. O círculo inscrito tem um raio de 1 unidade. Verifique o triângulo primeiro: [[3^2+4^2 = 9+16 = 25 = 5^2]], então é um triângulo retângulo válido.",
            },
            {
              "kind": "h3",
              "text": "Exemplo 2: Triângulo Existente 6-8-10",
            },
            {
              "kind": "p",
              "text": "Dados [[a = 6]], [[b = 8]] e [[c = 10]], [[r = \\frac{6+8-10}{2} = \\frac{4}{2} = 2]]. O círculo inscrito tem um raio de 2 unidades, o dobro do raio do triângulo 3-4-5, porque este triângulo é o triângulo 3-4-5 ampliado por um fator de 2. Verificação: [[6^2+8^2 = 36+64 = 100 = 10^2]].",
            },
            {
              "kind": "h3",
              "text": "Exemplo 3: Triângulo 5-12-13",
            },
            {
              "kind": "p",
              "text": "Dados [[a = 5]], [[b = 12]] e [[c = 13]], [[r = \\frac{5+12-13}{2} = \\frac{4}{2} = 2]]. O inraio é de 2 unidades, o mesmo que o do triângulo 6-8-10, mesmo que o triângulo seja maior e tenha uma forma diferente. Verificação: [[5^2+12^2 = 25+144 = 169 = 13^2]].",
            },
            {
              "kind": "h3",
              "text": "Exemplo 4: Triângulo 8-15-17",
            },
            {
              "kind": "p",
              "text": "Dados [[a = 8]], [[b = 15]] e [[c = 17]], [[r = \\frac{8+15-17}{2} = \\frac{6}{2} = 3]]. O círculo inscrito tem um raio de 3 unidades. Verificação: [[8^2+15^2 = 64+225 = 289 = 17^2]].",
            },
            {
              "kind": "h3",
              "text": "Exemplo 5: Medidas Maiores",
            },
            {
              "kind": "p",
              "text": "Dados [[a = 9]], [[b = 12]] e [[c = 15]], [[r = \\frac{9+12-15}{2} = \\frac{6}{2} = 3]]. Este é o triângulo 3-4-5 ampliado por 3, então o inraio é 3 vezes o inraio 1 do triângulo 3-4-5. Verificação: [[9^2+12^2 = 81+144 = 225 = 15^2]].",
            },
            {
              "kind": "h3",
              "text": "Exemplo 6: Medidas Decimais",
            },
            {
              "kind": "p",
              "text": "Dados [[a = 4.5]], [[b = 6]] e [[c = 7.5]], [[r = \\frac{4.5+6-7.5}{2} = \\frac{3}{2} = 1.5]]. O inraio é de 1.5 unidades. Os decimais não mudam nada no método: some, subtraia, divida por dois. Verificação: [[4.5^2+6^2 = 20.25+36 = 56.25 = 7.5^2]].",
            },
            {
              "kind": "h3",
              "text": "Exemplo 7: Unidades Diferentes",
            },
            {
              "kind": "p",
              "text": "Dados [[a = 30]] cm, [[b = 40]] cm e [[c = 0.5]] m, converta a hipotenusa primeiro: 0.5 m equivale a 50 cm, porque 1 m é 100 cm. Agora os três lados usam centímetros, então [[r = \\frac{30+40-50}{2} = \\frac{20}{2} = 10]] cm. Verificação: [[30^2+40^2 = 900+1600 = 2500 = 50^2]]. Misturar metros e centímetros sem converter daria uma resposta errada, então sempre converta primeiro.",
            },
            {
              "kind": "h3",
              "text": "Exemplo 8: Valores Decimais Maiores",
            },
            {
              "kind": "p",
              "text": "Dados [[a = 7.2]], [[b = 9.6]] e [[c = 12]], [[r = \\frac{7.2+9.6-12}{2} = \\frac{4.8}{2} = 2.4]]. O inraio é de 2.4 unidades. Este é o triângulo 3-4-5 ampliado por 2.4, então o inraio é 2.4 vezes o inraio 1 do triângulo 3-4-5. Verificação: [[7.2^2+9.6^2 = 51.84+92.16 = 144 = 12^2]].",
            },
          ],
        },
        "sec-legs-known": {
          "h2": "Como Calcular o Inraio Quando Apenas os Dois Catetos São Conhecidos",
          "blocks": [
            {
              "kind": "p",
              "text": "A calculadora desta página exige os três comprimentos dos lados, então não pode funcionar apenas com os dois catetos. Se apenas [[a]] e [[b]] forem conhecidos, encontre a hipotenusa primeiro com o teorema de Pitágoras, e depois use a fórmula do inraio. Os dois passos são:",
            },
            {
              "kind": "p",
              "text": "[[[c = \\sqrt{a^2+b^2}]]]",
            },
            {
              "kind": "p",
              "text": "[[[r = \\frac{a+b-c}{2}]]]",
            },
            {
              "kind": "p",
              "text": "Use [[a = 6]] e [[b = 8]]. Primeiro calcule a hipotenusa: [[c = \\sqrt{36+64} = \\sqrt{100} = 10]]. Depois calcule o inraio: [[r = \\frac{6+8-10}{2} = 2]]. A <a href=\"/right-triangle-side-calculator/\">calculadora de lados de triângulo retângulo</a> encontra a hipotenusa que falta a partir de dois catetos, que é o mesmo primeiro passo usado aqui, e a <a href=\"/pythagorean-theorem-calculator/\">calculadora do teorema de Pitágoras</a> faz o mesmo cálculo diretamente. Não pule o primeiro passo: digitar um cateto no campo da hipotenusa dá um inraio errado, como mostra a seção de erros abaixo.",
            },
          ],
        },
        "sec-vs-circumradius": {
          "h2": "Relação Entre Inraio e Circunraio",
          "blocks": [
            {
              "kind": "p",
              "text": "O inraio [[r]] e o circunraio [[R]] são os dois raios de um triângulo retângulo, e descrevem dois círculos diferentes. O inraio é o raio do círculo inscrito, o círculo dentro do triângulo que toca os três lados. O circunraio é o raio do circuncírculo, o círculo fora do triângulo que passa pelos três vértices. Um círculo fica dentro do triângulo, o outro o envolve.",
            },
            {
              "kind": "p",
              "text": "Em um triângulo retângulo, o circunraio é [[R = \\frac{c}{2}]], porque a hipotenusa é o diâmetro do circuncírculo. O inraio é [[r = \\frac{a+b-c}{2}]], que precisa dos três lados, porque o quanto o círculo inscrito se encaixa depende da forma do triângulo, não apenas do seu lado mais longo. Use o triângulo 6-8-10 para ver a diferença em números: [[r = 2]] e [[R = 5]].",
            },
            {
              "kind": "p",
              "text": "Os centros também diferem. O incentro fica dentro do triângulo, onde as bissetrizes dos ângulos se encontram, a uma distância [[r]] de cada lado. O circuncentro fica no ponto médio da hipotenusa, na fronteira do triângulo, a uma distância [[R]] de cada vértice. Para problemas sobre o circuncírculo, use a <a href=\"/right-triangle-circumradius-calculator/\">calculadora de circunraio de triângulo retângulo</a>, que aplica [[R = \\frac{c}{2}]] diretamente.",
            },
          ],
          "table": {
            "headers": [
              "Recurso",
              "Inraio r",
              "Circunraio R",
            ],
            "rows": [
              [
                "Círculo",
                "Círculo inscrito",
                "Circuncírculo",
              ],
              [
                "Posição",
                "Dentro do triângulo",
                "Ao redor do triângulo",
              ],
              [
                "Contato",
                "Tangente aos lados",
                "Passa pelos vértices",
              ],
              [
                "Fórmula do triângulo retângulo",
                "(a+b-c)/2",
                "c/2",
              ],
              [
                "Centro",
                "Incentro",
                "Circuncentro",
              ],
              [
                "Valor 6-8-10",
                "2",
                "5",
              ],
            ],
          },
          "image": {
            "src": "inradius-vs-circumcircle.svg",
            "alt": "Triângulo retângulo com o pequeno círculo inscrito dentro dele e o grande circuncírculo passando pelos seus vértices, triângulo 6-8-10",
            "caption": "Círculo inscrito (r = 2) dentro do triângulo, circuncírculo (R = 5) ao redor dele, triângulo 6-8-10.",
          },
        },
        "sec-verify": {
          "h2": "Como Verificar o Cálculo do Inraio",
          "blocks": [
            {
              "kind": "p",
              "text": "Quatro verificações independentes detectam quase todos os erros. Faça pelo menos uma em cada resposta, e as quatro quando o problema for importante. O exemplo abaixo usa o triângulo 6-8-10, com [[r = 2]], o tempo todo.",
            },
            {
              "kind": "h3",
              "text": "Verificação 1: Fórmula Original",
            },
            {
              "kind": "p",
              "text": "Recalcule com [[r = \\frac{a+b-c}{2}]] do zero, sem olhar o seu primeiro cálculo. Aqui [[r = \\frac{6+8-10}{2} = 2]]. Um cálculo novo detecta deslizes no primeiro, especialmente uma subtração feita na ordem errada.",
            },
            {
              "kind": "h3",
              "text": "Verificação 2: Área e Semiperímetro",
            },
            {
              "kind": "p",
              "text": "Verifique com [[r = \\frac{A}{s}]]. Aqui [[A = \\frac{6 \\times 8}{2} = 24]] e [[s = \\frac{6+8+10}{2} = 12]], então [[r = \\frac{24}{12} = 2]]. Este caminho usa multiplicação e divisão em vez de adição e subtração, então detecta uma classe diferente de erro.",
            },
            {
              "kind": "h3",
              "text": "Verificação 3: Teorema de Pitágoras",
            },
            {
              "kind": "p",
              "text": "Verifique [[a^2+b^2 = c^2]]. Aqui [[6^2+8^2 = 36+64 = 100 = 10^2]], então os três lados formam um triângulo retângulo de verdade. Se esta verificação falhar, a fórmula do inraio não se aplica de forma alguma, e nenhum valor de [[r]] obtido por ela pode ser confiável.",
            },
            {
              "kind": "h3",
              "text": "Verificação 4: Razoabilidade Geométrica",
            },
            {
              "kind": "p",
              "text": "Confirme que [[r]] é positivo, menor que qualquer um dos catetos e está na unidade correta. Aqui 2 é positivo e menor que 6 e 8, e a unidade corresponde à dos lados. O círculo deve caber dentro do triângulo, então um inraio maior que o menor cateto é impossível e indica um erro, geralmente um cateto digitado como hipotenusa.",
            },
          ],
        },
        "sec-properties": {
          "h2": "Propriedades Importantes do Inraio em um Triângulo Retângulo",
          "blocks": [
            {
              "kind": "p",
              "text": "Nove propriedades seguem diretamente da fórmula e da geometria do círculo inscrito. Cada uma também serve como uma verificação rápida de uma nova resposta.",
            },
            {
              "kind": "list",
              "items": [
                "O inraio é sempre positivo para um triângulo válido e não degenerado, porque [[a+b]] é sempre maior que [[c]].",
                "O incentro fica dentro do triângulo, onde as três bissetrizes dos ângulos se encontram.",
                "O inraio é a menor distância perpendicular do incentro até cada lado, e as três distâncias são iguais a [[r]].",
                "O círculo inscrito toca os três lados, um ponto de tangência em cada lado.",
                "Os segmentos tangentes a partir do mesmo ponto externo têm comprimentos iguais, que é o fato do qual a fórmula é derivada.",
                "Aumentar a escala geral do triângulo aumenta o inraio pelo mesmo fator de escala: dobrar cada lado dobra [[r]], e triplicar cada lado triplica [[r]].",
                "O inraio não é o mesmo que o circunraio. Em um triângulo 6-8-10, [[r = 2]] enquanto [[R = 5]].",
                "O inraio depende da forma do triângulo e também do seu tamanho: um triângulo 5-12-13 e um triângulo 6-8-10 têm ambos [[r = 2]], mesmo que os seus lados sejam diferentes.",
                "O inraio pode ser calculado a partir dos comprimentos dos lados com [[r = \\frac{a+b-c}{2}]] ou a partir da área e do semiperímetro com [[r = \\frac{A}{s}]], e os dois caminhos dão a mesma resposta.",
              ],
            },
          ],
        },
        "sec-mistakes": {
          "h2": "Erros Comuns ao Calcular o Inraio",
          "blocks": [
            {
              "kind": "steps",
              "steps": [
                "Usar a fórmula do circunraio em vez da fórmula do inraio: [[R = \\frac{c}{2}]] dá 5 para um triângulo 6-8-10, enquanto o inraio é 2. As duas fórmulas respondem a perguntas diferentes.",
                "Digitar c como um cateto em vez da hipotenusa: se 8 for digitado como c e 10 como b, a fórmula dá [[\\frac{6+10-8}{2} = 4]], não 2. Sempre coloque o lado mais longo no campo da hipotenusa.",
                "Esquecer de subtrair c: somar os catetos e dividir por dois, [[\\frac{6+8}{2} = 7]], dá um número muito maior que o inraio verdadeiro de 2.",
                "Esquecer de dividir por dois: [[6+8-10 = 4]] é o dobro do inraio. A divisão por dois faz parte da fórmula, não é um passo final opcional.",
                "Digitar medidas de lados inválidas: os lados 3, 4 e 6 não satisfazem [[3^2+4^2 = 6^2]], pois 25 não é igual a 36, então a fórmula do inraio não se aplica a eles.",
                "Ignorar a relação de Pitágoras: quaisquer três comprimentos podem ser colocados na fórmula, mas só um triângulo retângulo de verdade dá um inraio significativo. Verifique [[a^2+b^2 = c^2]] primeiro.",
                "Misturar unidades de medida: catetos em centímetros e uma hipotenusa em metros produzem uma resposta errada. Converta todas as medidas para uma unidade antes de calcular.",
                "Confundir inraio com diâmetro: o inraio é a distância do centro até a borda. O diâmetro do círculo inscrito é o dobro do inraio, então para um triângulo 6-8-10 ele é 4, não 2.",
                "Confundir incentro com circuncentro: o incentro fica dentro do triângulo, onde as bissetrizes dos ângulos se encontram, enquanto o circuncentro é o ponto médio da hipotenusa. São pontos diferentes.",
                "Supor que o círculo inscrito passa pelos vértices do triângulo: o círculo inscrito toca os lados e nunca alcança um vértice. O círculo que passa pelos vértices é o circuncírculo.",
                "Supor que o raio é medido ao longo de um lado em vez de perpendicular a ele: o inraio é a distância perpendicular do incentro até um lado, que é a menor distância até esse lado.",
                "Arredondar cálculos intermediários cedo demais: mantenha a precisão completa na adição e na subtração, e arredonde apenas a resposta final. O arredondamento precoce desloca o resultado.",
                "Usar apenas dois comprimentos de lados sem calcular a hipotenusa primeiro: a fórmula precisa dos três lados. Encontre [[c]] com o teorema de Pitágoras antes de usá-la.",
                "Confundir perímetro com semiperímetro: o semiperímetro é metade do perímetro, [[s = \\frac{a+b+c}{2}]]. Usar o perímetro completo em [[r = \\frac{A}{s}]] reduz a resposta correta à metade.",
              ],
            },
          ],
        },
        "sec-applications": {
          "h2": "Aplicações Práticas do Inraio de Triângulo Retângulo",
          "blocks": [
            {
              "kind": "p",
              "text": "O uso mais direto é o dever de casa de geometria e o trabalho em sala de aula, onde os problemas de inraio testam se os alunos conseguem identificar a hipotenusa, aplicar [[r = \\frac{a+b-c}{2}]] e verificar o resultado com área e semiperímetro. Os exercícios de construção de círculos usam a mesma ideia: dado um triângulo retângulo, desenhe o seu círculo inscrito encontrando o incentro onde as bissetrizes dos ângulos se encontram e ajustando um compasso para o inraio.",
            },
            {
              "kind": "p",
              "text": "O desenho técnico usa o círculo inscrito quando um círculo deve caber exatamente dentro de uma moldura triangular ou quando um canto arredondado deve tocar duas bordas de uma forma. A modelagem geométrica e a geometria analítica usam o incentro como o ponto dentro de um triângulo que está igualmente distante dos três lados, que é o centro natural para uma forma inscrita.",
            },
            {
              "kind": "p",
              "text": "Os professores usam o tema como uma aula de ligação entre triângulos e círculos, porque o círculo inscrito é um dos primeiros lugares onde os dois assuntos se encontram. Comprimentos de tangentes, bissetrizes dos ângulos, área e semiperímetro aparecem todos em uma única figura, então o inraio é uma forma compacta de revisá-los juntos. Os projetos de design reais que precisam de um círculo inscrito também precisam de tolerâncias e limites de material além desta página, então trate o resultado como o valor geométrico exato e acrescente margens práticas separadamente.",
            },
          ],
        },
        "sec-practice": {
          "h2": "Problemas de Prática com Respostas",
          "blocks": [
            {
              "kind": "p",
              "text": "Tente resolver os seis problemas no papel antes de ler as respostas. Nenhum dos valores repete os exemplos resolvidos, e cada solução é apresentada por completo abaixo.",
            },
            {
              "kind": "h3",
              "text": "Problema 1: Número Inteiro Básico",
            },
            {
              "kind": "p",
              "text": "Um triângulo retângulo tem catetos [[a = 20]] cm e [[b = 21]] cm e hipotenusa [[c = 29]] cm. Encontre o inraio [[r]].",
            },
            {
              "kind": "h3",
              "text": "Problema 2: Medida Decimal",
            },
            {
              "kind": "p",
              "text": "Dados [[a = 10.5]] m, [[b = 14]] m e [[c = 17.5]] m, encontre o inraio [[r]] em metros.",
            },
            {
              "kind": "h3",
              "text": "Problema 3: Conversão de Unidades",
            },
            {
              "kind": "p",
              "text": "Um triângulo retângulo tem catetos [[a = 1.5]] m e [[b = 2]] m e hipotenusa [[c = 250]] cm. Encontre o inraio em metros.",
            },
            {
              "kind": "h3",
              "text": "Problema 4: Encontrar a Hipotenusa a Partir de Dois Catetos",
            },
            {
              "kind": "p",
              "text": "Um triângulo retângulo tem catetos [[a = 12]] cm e [[b = 16]] cm. Encontre a hipotenusa primeiro, depois o inraio.",
            },
            {
              "kind": "h3",
              "text": "Problema 5: Área e Semiperímetro",
            },
            {
              "kind": "p",
              "text": "Um triângulo retângulo tem catetos [[a = 15]] cm e [[b = 20]] cm e hipotenusa [[c = 25]] cm. Encontre a área e o semiperímetro, depois encontre o inraio com [[r = \\frac{A}{s}]] e confirme-o com a fórmula dos três lados.",
            },
            {
              "kind": "h3",
              "text": "Problema 6: Identificar um Triângulo Retângulo Inválido",
            },
            {
              "kind": "p",
              "text": "Um aluno recebe [[a = 7]] cm, [[b = 10]] cm e [[c = 12]] cm e é solicitado a encontrar o inraio. Mostre por que esses lados não formam um triângulo retângulo, e explique o que o aluno deve fazer em vez de aplicar a fórmula.",
            },
            {
              "kind": "h3",
              "text": "Respostas dos Problemas de Prática",
            },
            {
              "kind": "p",
              "text": "Resposta 1: [[r = \\frac{20+21-29}{2} = \\frac{12}{2} = 6]] cm. Verificação: [[20^2+21^2 = 400+441 = 841 = 29^2]].",
            },
            {
              "kind": "p",
              "text": "Resposta 2: [[r = \\frac{10.5+14-17.5}{2} = \\frac{7}{2} = 3.5]] m. Verificação: [[10.5^2+14^2 = 110.25+196 = 306.25 = 17.5^2]].",
            },
            {
              "kind": "p",
              "text": "Resposta 3: Converta a hipotenusa: 250 cm equivalem a 2.5 m. Depois [[r = \\frac{1.5+2-2.5}{2} = \\frac{1}{2} = 0.5]] m, que é 50 cm. Verificação: [[1.5^2+2^2 = 2.25+4 = 6.25 = 2.5^2]].",
            },
            {
              "kind": "p",
              "text": "Resposta 4: [[c = \\sqrt{12^2+16^2} = \\sqrt{144+256} = \\sqrt{400} = 20]] cm, depois [[r = \\frac{12+16-20}{2} = \\frac{8}{2} = 4]] cm.",
            },
            {
              "kind": "p",
              "text": "Resposta 5: [[A = \\frac{15 \\times 20}{2} = 150]] centímetros quadrados e [[s = \\frac{15+20+25}{2} = 30]] cm, então [[r = \\frac{150}{30} = 5]] cm. A fórmula dos três lados concorda: [[r = \\frac{15+20-25}{2} = 5]] cm.",
            },
            {
              "kind": "p",
              "text": "Resposta 6: [[7^2+10^2 = 49+100 = 149]], enquanto [[12^2 = 144]], então [[a^2+b^2]] não é igual a [[c^2]] e o triângulo não é retângulo. O aluno não deve aplicar a fórmula do inraio: primeiro verifique novamente as medidas, e se elas estiverem corretas, use a fórmula geral [[r = \\frac{A}{s}]] para um triângulo não retângulo.",
            },
          ],
        },
      },
      "relatedHeading": "Explore Calculadoras Relacionadas de Triângulo Retângulo",
      "relatedIntro": "Cada calculadora abaixo trata de uma tarefa específica de triângulo retângulo, então escolha a ferramenta que corresponde à medida que você precisa encontrar.",
      "relatedItems": [
        "Calculadora de Raio de Triângulo Retângulo",
        "Calculadora de Circunraio de Triângulo Retângulo",
        "Calculadora de Área de Triângulo Retângulo",
        "Calculadora de Semiperímetro de Triângulo Retângulo",
        "Calculadora de Lados de Triângulo Retângulo",
      ],
      "faqHeading": "Perguntas Frequentes",
      "faqs": [
        {
          "question": "Qual é a fórmula do inraio de um triângulo retângulo?",
          "answer": "A fórmula é [[r = \\frac{a+b-c}{2}]], onde [[a]] e [[b]] são os catetos, [[c]] é a hipotenusa e [[r]] é o inraio. Some os dois catetos, subtraia a hipotenusa e divida por dois. Por exemplo, um triângulo 6-8-10 dá um inraio de 2.",
        },
        {
          "question": "O que o inraio representa?",
          "answer": "O inraio é o raio do círculo inscrito, o círculo que cabe dentro do triângulo e toca os três lados. É a distância perpendicular do incentro até qualquer lado. Em um triângulo 6-8-10, o inraio é 2, então o círculo inscrito tem um raio de 2 unidades.",
        },
        {
          "question": "O que é um círculo inscrito?",
          "answer": "Um círculo inscrito é um círculo traçado inteiramente dentro de um triângulo de modo que ele toque os três lados, um ponto de tangência em cada lado. Todo triângulo tem exatamente um círculo inscrito. Ele é diferente do circuncírculo, que passa pelos três vértices.",
        },
        {
          "question": "Onde fica o incentro?",
          "answer": "O incentro é o ponto onde as três bissetrizes internas dos ângulos do triângulo se encontram. Ele fica sempre dentro do triângulo. Em um triângulo retângulo com o ângulo reto em C, ele fica ao longo da bissetriz do ângulo de 90 graus, a uma distância [[r]] de cada lado.",
        },
        {
          "question": "Por que a fórmula do inraio subtrai a hipotenusa?",
          "answer": "Os segmentos tangentes a partir do vértice do ângulo reto têm comprimento [[r]], então os catetos são [[a = r+x]] e [[b = r+y]] enquanto a hipotenusa é [[c = x+y]]. Somar os catetos dá [[a+b = 2r+c]], então subtrair [[c]] deixa [[2r]]. A subtração remove os comprimentos tangentes compartilhados e isola o inraio.",
        },
        {
          "question": "Por que dividimos por dois?",
          "answer": "Somar os dois catetos conta o inraio duas vezes, uma vez em cada cateto, porque cada cateto contém um segmento tangente de comprimento [[r]] a partir do vértice do ângulo reto. A soma [[a+b-c]] é, portanto, igual a [[2r]], não a [[r]], então dividir por dois dá o inraio único.",
        },
        {
          "question": "Posso calcular o inraio usando apenas os dois catetos?",
          "answer": "Não diretamente, porque a fórmula também precisa da hipotenusa. Primeiro encontre a hipotenusa com [[c = \\sqrt{a^2+b^2}]], depois use [[r = \\frac{a+b-c}{2}]]. Para os catetos 6 e 8, a hipotenusa é 10 e o inraio é 2. Use a calculadora de lados para encontrar uma hipotenusa que falta.",
        },
        {
          "question": "Posso calcular o inraio usando área e semiperímetro?",
          "answer": "Sim. A fórmula é [[r = \\frac{A}{s}]], onde [[A]] é a área e [[s]] é o semiperímetro. Para um triângulo retângulo, [[A = \\frac{ab}{2}]] e [[s = \\frac{a+b+c}{2}]]. Para um triângulo 6-8-10, [[A = 24]] e [[s = 12]], então [[r = 2]]. A calculadora desta página usa a fórmula dos três lados, então trate o caminho da área como uma verificação independente.",
        },
        {
          "question": "O inraio é o mesmo que o circunraio?",
          "answer": "Não. O inraio é o raio do círculo dentro do triângulo que toca os seus lados, [[r = \\frac{a+b-c}{2}]], enquanto o circunraio é o raio do círculo que passa pelos vértices, [[R = \\frac{c}{2}]]. Em um triângulo 6-8-10, eles são 2 e 5.",
        },
        {
          "question": "O inraio pode ser maior que o menor cateto de um triângulo?",
          "answer": "Não. O inraio é sempre menor que qualquer um dos catetos, porque o círculo inscrito deve caber dentro do triângulo. Em um triângulo 3-4-5, o inraio é 1, menor que o menor cateto, 3. Uma resposta maior que o menor cateto indica um erro, geralmente um cateto digitado como hipotenusa.",
        },
        {
          "question": "Por que a hipotenusa deve ser o lado mais longo?",
          "answer": "A hipotenusa é oposta ao ângulo reto, o maior ângulo do triângulo, e o lado mais longo fica sempre oposto ao maior ângulo. O teorema de Pitágoras também a impõe: [[c^2 = a^2+b^2]] é maior que [[a^2]] ou [[b^2]] sozinhos, então [[c]] é maior que [[a]] e maior que [[b]].",
        },
        {
          "question": "Como posso verificar se o meu cálculo do inraio está correto?",
          "answer": "Recalcule com a fórmula original, depois verifique com área e semiperímetro, [[r = \\frac{A}{s}]], e confirme [[a^2+b^2 = c^2]] para os lados. Também confirme que a resposta é positiva, menor que qualquer um dos catetos e está na mesma unidade que os lados. Se as quatro verificações concordarem, a resposta está correta.",
        },
      ],
    },
};
